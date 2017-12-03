!=========================================================================
! Copyright (C) GemTalk Systems 1986-2017.  All Rights Reserved.
!
! File  GsDevKitLibrarian.gs
!
! Description - UserProfile for the hostagent main program
!=========================================================================

set user SystemUser pass swordfish
login

expectvalue %String
run
| up |
up := AllUsers detect: [ :x | x userId asString = 'GsDevKitLibrarianUser' ] ifNone: [nil].
up ifNotNil:[ ^ 'GsDevKitLibrarianUser UserProfile exists' ].

up := AllUsers addNewUserWithId:'GsDevKitLibrarianUser'
                         password: 'swordfish' 
                         createNewSecurityPolicy: true .
#('CodeModification' 'UserPassword' 'OtherPassword' 'CompilePrimitives') 
  do: [:privilege | up addPrivilege: privilege ].
up addGroup: 'DataCuratorGroup'.
^ ' created GsDevKitLibrarianUser'.
%
commit

#--------------------
#   bug fix for internal bug 47378
#--------------------
method: ClassOrganizer
collectClassesFromSymbolList: aSymbolList
  "Rebuilds the class hierarchy structure from the given SymbolList."
  | allClasses symlist dict rootIsObj done rootHist |
  allClasses := ClassSet new.   " make a list of all the named classes "
  symlist := Array withAll: aSymbolList.
  rootIsObj := (aSymbolList objectNamed: rootClass name) == rootClass.
  rootIsObj
    ifTrue: [ rootHist := IdentitySet new ]
    ifFalse: [
      rootHist := IdentitySet withAll: rootClass classHistory.
      rootHist remove: rootClass ].
  done := IdentitySet new.
  [ symlist size > 0 ]
    whileTrue: [
      dict := symlist at: 1.
      (done includesIdentical: dict)
        ifFalse: [
          dict
            valuesDo: [ :aValue |
              | anObj |
              anObj := aValue.
              anObj isBehavior
                ifTrue: [
                  anObj isMeta
                    ifTrue: [ anObj := anObj thisClass ].
                  (rootIsObj
                    or: [ (anObj _subclassOf: rootClass) or: [ rootHist includes: anObj ] ])
                    ifTrue: [ allClasses add: anObj ] ] ].
          done add: dict ].
      symlist removeFrom: 1 to: 1 ].
  rootIsObj
    ifFalse: [
      | cls |
      "now add superclasses up to object"
      cls := rootClass superclass.
      [ cls ~~ nil ]
        whileTrue: [
          allClasses add: cls.
          cls := cls superclass ] ].
  classes := allClasses
%
commit

expectvalue %SmallInteger
run
"in case of upgrade image, remove any existing Cypress code from Globals"
| list |
list := { } .
Globals values do:[:v |
  (v isBehavior and:[ (v name at: 1 equals:'Cypress')
                     or:[ v category at: 1 equals:'Cypress'] ]) 
    ifTrue:[ list add: v name ].
].
list do:[:name | 
  Globals removeKey: name  .
  GsFile gciLogServer:'removed ' , name , ' from Globals' .
].
^ list size 
%
commit

! install Cypress as SystemUser, since all of those Globals must be visible to Metacello which for
!   GsDevKit is visibly installed ... right now
input $GS_HOME/shared/topaz/cypress/bootstrapCypressSupport.topaz
commit

logout
set u GsDevKitLibrarianUser p swordfish
login

! Need to install Metacello as separate bootstrap user, because we need to use the latest Metacello
!  from GitHub and we need Metacello to bootstrap Metacello ... so as this user, we load the .gs
!  files for Metacello 
!
# Temporary hack to allow tODE to login as GsDevKitLibrarianUser
run
UserGlobals at: #GS_AllUsers put: AllUsers.
^ true
%
commit

output push boot_0.log only

input $GS_HOME/shared/topaz/metacello/bootstrapMetacelloSupport.topaz
commit

output pop

logout
set u SystemUser p swordfish
login

# Temporary hack to allow tODE to login as SystemUser
run
UserGlobals at: #GS_AllUsers put: AllUsers.
^ true
%
commit

output push boot_1.log only

input $GS_HOME/shared/topaz/cypress/Cypress-Base-ExtensionMethods.gs
commit
input $GS_HOME/shared/topaz/metacello/Metacello-BaseExtensions.gs
commit

output pop

doit
  (Object
	subclass: 'Smalltalk'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Kernel Smalltalk Compat';
		comment: '';
		immediateInvariant.
  ^ true
%
  commit
category: 'bootstrapGsDevKit'
classmethod: Smalltalk
  at: aGlobalName ifPresent: aBlock
  | glob |
  aGlobalName isNil
    ifTrue: [ ^ nil ].
  glob := GsSession currentSession symbolList objectNamed: aGlobalName.
  ^ glob ~~ nil
    ifTrue: [ aBlock value: glob ]
    ifFalse: [ glob ]
%
commit


# GsDevKit is not yet ready for Portable streams, nor Legacy streams with ANSI polarity.
#   Also enable unicode mode
#   and create UndefinedSymbols global
  run
  | undef |
  Stream installLegacyStreamImplementation.
  (Globals at: #'PositionableStream_position') == #'ANSI'
     ifTrue: [
       Globals at: #'PositionableStream_position' put: #'Legacy'.
       PositionableStream compilePositionMethods ].
  CharacterCollection enableUnicodeComparisonMode.
  undef := SymbolDictionary new.
  undef name: #UndefinedSymbols.
  Globals at: #UndefinedSymbols put: undef.
  Globals at: #UndefinedSymbolList put: (SymbolList with: undef).
%
  commit

logout
set u GsDevKitLibrarianUser p swordfish
login

! Install GsDevKitLibrarian-Core package

output push boot_2.log only

input $GS_HOME/shared/topaz/GsDevKitLibrarian-Core.gs
commit

output pop

logout

set u SystemUser p swordfish
login

! Install GsDevKitLibrarian class association into globals and BaselineOf class, too
expectvalue %String
run
  | codeLibrarian str |
  codeLibrarian := AllUsers userWithId: 'GsDevKitLibrarianUser'.
  str := String new.
  #( #'GsDevKitLibrarian' )
    do: [ :className | 
      | assoc |
      Globals 
        at: className 
        ifAbsent: [
          assoc := codeLibrarian symbolList resolveSymbol: className.
          Globals addAssociation: assoc.
          str add: className asString, ' ' ] ].
  str isEmpty ifTrue: [ ^ 'GsDevKitLibrarian, Metacello, ConfigurationOf, and BaselineOf already in Globals' ].
  ^str , 'installed in Globals'
%

output push boot_3.log only

# need all globals defined before reloading  ... preparation for loading Metacello as SystemUser
input $GS_HOME/shared/topaz/metacello/bootstrapMetacelloSupport.topaz
commit

output pop

! install Metacello

  run
  | gs_home |
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  CypressFileSystemGitRepository gitRepositoryDir: gs_home, '/shared/repos/gsdevkit'.
  GsDevKitLibrarian new
    baseline: 'Metacello';
    repository: 'cypressft://', gs_home, '/shared/repos/gs_port/metacello/repository/';
    load
%
  commit
  run
  | gs_home |
true ifTrue: [ ^ self ].
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  Metacello new
    baseline: 'Metacello';
    repository: 'cypressft://', gs_home, '/shared/repos/gs_port/metacello/repository/';
    load
%
  commit

  run
  Metacello new
    baseline: 'Sport';
    repository: 'cypressft:$GS_HOME/shared/repos/Sport/src/';
    lock.
  Metacello new
    baseline: 'Grease';
    repository: 'cypressft:$GS_HOME/shared/repos/gsdevkit/Grease/repository/';
    lock.
  Metacello new
    baseline: 'GsDevKit';
    repository: 'cypressft:$GS_HOME/shared/repos/GsDevKit/repository/';
    get;
    lock;
    load: 'Base'
%
  commit



! Install GsDevKitLibrarian-Core package

input $GS_HOME/shared/topaz/GsDevKitLibrarian-Core.gs
commit

