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
category: 'GsDevKitLibrarian bugfix'
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
category: 'GsDevKitLibrarian bugfix'
method: Behavior
persistentSuperclassForEnv: envId put: aValue
  "aValue should be a GsMethodDictionary, or nil ,
   caller responsible for _refreshClassCache "

  <protected>
  | ofs mds |
  (mds := methDicts) _isArray
    ifFalse: [ envId == 0
        ifTrue: [ methDicts := aValue.
          ^ self ].
      mds := {mds}.
      methDicts := mds ].
  ofs := envId * 4 + 3.
  mds size < ofs
    ifTrue: [ mds size: ofs ].
  mds at: ofs put: aValue
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

logout

set u DataCurator p swordfish
login

! enable session methods
run
  | policy sessionMethodsPackage enabled |
  sessionMethodsPackage := GsPackageLibrary
    createPackageNamed: #'SessionMethods'.
  GsPackageLibrary installPackage: sessionMethodsPackage.
  policy := GsPackagePolicy current.
  policy homeSymbolDict: UserGlobals.
  policy externalSymbolList: Array new.
  true
%
commit

output push boot_0.log only

input $GS_HOME/shared/topaz/cypress/bootstrapCypressSupport.topaz
commit
input $GS_HOME/shared/topaz/metacello/bootstrapMetacelloSupport.topaz
commit

output pop

input $GS_HOME/shared/topaz/cypress/Cypress-Base-ExtensionMethods.gs
commit
input $GS_HOME/shared/topaz/metacello/Metacello-BaseExtensions.gs
commit

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

logout

set u SystemUser p swordfish
login

# GsDevKit is not yet ready for Portable streams, nor Legacy streams with ANSI polarity.
#   Also enable unicode mode
  run
  Stream installLegacyStreamImplementation.
  (Globals at: #'PositionableStream_position') == #'ANSI'
     ifTrue: [
       Globals at: #'PositionableStream_position' put: #'Legacy'.
       PositionableStream compilePositionMethods ].
  CharacterCollection enableUnicodeComparisonMode.
%
  commit

logout

set u DataCurator p swordfish
login

#   create UndefinedSymbols global
run
  | undef |
  undef := SymbolDictionary new.
  undef name: #UndefinedSymbols.
  UserGlobals at: #UndefinedSymbols put: undef.
  UserGlobals at: #UndefinedSymbolList put: (SymbolList with: undef).
%
  commit

! install Metacello

  run
  | gs_home |
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  CypressFileSystemGitRepository gitRepositoryDir: gs_home, '/shared/repos/gsdevkit'.
  Metacello new
    baseline: 'Metacello';
    repository: 'cypressft://', gs_home, '/shared/repos/gsdevkit/metacello/repository/';
    load;
    lock
%
  commit
  run
  | gs_home |
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  Metacello new
    baseline: 'Metacello';
    repository: 'cypressft://', gs_home, '/shared/repos/gsdevkit/metacello/repository/';
    lock
%
  commit

  run
  | gs_home |
true ifTrue: [ "needs STON installed ... " ^ true ].
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  CypressFileSystemGitRepository gitRepositoryDir: gs_home, '/shared/repos/gsdevkit'.
  Metacello new
    baseline: 'Gt4Gemstone';
    repository: 'cypressft://', gs_home, '/shared/repos/gt4gemstone/src/';
    load
%
  commit

  run
  | gs_home |
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  CypressFileSystemGitRepository gitRepositoryDir: gs_home, '/shared/repos/gsdevkit'.
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
    load: #( 'Base' 'GsMisc' ).
%
  commit

  run
  | gs_home |
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  CypressFileSystemGitRepository gitRepositoryDir: gs_home, '/shared/repos/gsdevkit'.

  "Prepare to bootstrap the Monticello-based Metacello -- usable with GLASS1/GsDevKit"
  Metacello new
    baseline: 'Metacello';
    repository: 'cypressft://', gs_home, '/shared/repos/gsdevkit/metacello/repository/';
    load: 'BootstrapMetacello'.
%
  commit

  run
  | gs_home |
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  CypressFileSystemGitRepository gitRepositoryDir: gs_home, '/shared/repos/gsdevkit'.

  MetacelloGemStoneBootstrapPlatform initialize.

  Metacello new
    baseline: 'FileTree';
    repository: 'cypressft:$GS_HOME/shared/repos/filetree/repository/';
    lock.

  "install the Monticello-based Metacello"
  Metacello new
    baseline: 'Metacello';
    repository: 'cypressft://', gs_home, '/shared/repos/metacello/repository/';
    onLockBreak;
    get;
    load: 'Core'.
%
  commit

  print
  GsDeployer new classesWithClassHistory collect: [:each | each className ].
%

  run
  MetacelloGemStonePlatform initialize.
%
  commit

  run
  "reload for Metacello registration purposes"
  MetacelloProjectRegistration resetRegistry.
  SessionTemps current
    removeKey: #'MCDefinition_Instances'
    ifAbsent: [].
  Metacello new
    baseline: 'Metacello';
    repository: 'filetree://$GS_HOME/shared/repos/metacello/repository/';
    lock;
    load: 'Core'.
  Metacello new
    baseline: 'Sport';
    repository: 'filetree://$GS_HOME/shared/repos/Sport/src/';
    get;
    lock;
    load.
  Metacello new
    baseline: 'Grease';
    repository: 'filetree://$GS_HOME/shared/repos/gsdevkit/Grease/repository/';
    get;
    lock;
    load.
  Metacello new
    baseline: 'GsDevKit';
    repository: 'filetree://$GS_HOME/shared/repos/GsDevKit/repository/';
    get;
    lock.
  Metacello new
    baseline: 'GsDevKit';
    repository: 'filetree://$GS_HOME/shared/repos/GsDevKit/repository/';
    load: #( 'Base' 'GsMisc' ).
%
  commit

logout
