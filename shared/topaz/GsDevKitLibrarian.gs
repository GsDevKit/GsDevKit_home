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
set u GsDevKitLibrarianUser p swordfish
login


! enable session methods
run
  | sessionMethodsPackage homeSymbolDict policy |
  sessionMethodsPackage := GsPackageLibrary
    createPackageNamed: #'SessionMethods'.
  GsPackageLibrary installPackage: sessionMethodsPackage.

  GsPackagePolicy current enable.

  homeSymbolDict := (GsCurrentSession currentSession objectNamed: #'UserGlobals').
  policy := GsPackagePolicy current.
  policy homeSymbolDict: homeSymbolDict.
  policy externalSymbolList: Array new.
  ^ true
%
commit

run
UserGlobals at: #GS_AllUsers put: AllUsers.
^ true
%
commit

input $GS_HOME/shared/topaz/cypress/bootstrapCypressSupport.topaz
commit
input $GS_HOME/shared/topaz/metacello/bootstrapMetacelloSupport.topaz
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

! Install GsDevKitLibrarian-Core package

input $upgradeDir/GsDevKitLibrarian-Core.gs
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
