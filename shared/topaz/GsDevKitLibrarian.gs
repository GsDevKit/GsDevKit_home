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

category: 'GsDevKitLibrarian env 2 override'
method: Object
doesNotUnderstand: aSymbol args: anArray envId: envId
  "Generates an error reporting that the receiver cannot respond to a message.
 because no compiled method was found for aSymbol in method environment
 envId.   envId is a SmallInteger, 0 for Smalltalk , 1 for Ruby , 
 2 for GsDevKitLibrarian,  3..255 for future use by Smalltalk package managers .
"

  | ex |
  envId = 2
    ifTrue: [ 
      "Any MNU in env 2, forward message to env 0"
      ^ self perform: aSymbol env: 0 withArguments: anArray ].
  (ex := MessageNotUnderstood _basicNew)
    receiver: self
    selector: aSymbol
    args: anArray
    envId: envId.
  ^ ex signal
%
commit


logout
set u GsDevKitLibrarianUser p swordfish
login

run
UserGlobals at: #GS_AllUsers put: AllUsers.
^ true
%
commit

input $GS_HOME/shared/topaz/cypress/bootstrapCypressSupport.topaz
commit
input $GS_HOME/shared/topaz/metacello/bootstrapMetacelloSupport.topaz
commit

logout
set u SystemUser p swordfish
login

input $GS_HOME/shared/topaz/cypress/Cypress-Base-ExtensionMethods.gs
commit
input $GS_HOME/shared/topaz/metacello/Metacello-BaseExtensions.gs
commit

logout
set u GsDevKitLibrarianUser p swordfish
login

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

! Install GsDevKitLibrarian-Core package

input $GS_HOME/shared/topaz/GsDevKitLibrarian-Core.gs
commit
logout

set u SystemUser p swordfish
login

! Install GsDevKitLibrarian class association into globals
expectvalue %String
run
  Globals at: #GsDevKitLibrarian 
    ifAbsent: [
      | codeLibrarian |
      codeLibrarian := AllUsers userWithId: 'GsDevKitLibrarianUser'.
      #( #'GsDevKitLibrarian' )
        do: [ :className | 
          | assoc |
          assoc := codeLibrarian symbolList resolveSymbol: className.
          Globals addAssociation: assoc ].
      ^ 'GsDevKitLibrarian class installed in Globals'].
  ^ 'GsDevKitLibrarian class already exists in Globals'
%

commit
logout
