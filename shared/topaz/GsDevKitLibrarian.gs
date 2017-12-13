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
    repository: 'cypressft://', gs_home, '/shared/repos/gs_port/metacello/repository/';
    load;
    lock
%
  commit
  run
  | gs_home |
  gs_home := System gemEnvironmentVariable: 'GS_HOME'.
  Metacello new
    baseline: 'Metacello';
    repository: 'cypressft://', gs_home, '/shared/repos/gs_port/metacello/repository/';
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
    repository: 'cypressft://', gs_home, '/shared/repos/gs_port/metacello/repository/';
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

category: 'EXTENSION'
method: Class
_equivalentSubclass: oldClass superCls: actualSelf name: aString newOpts: optionsArray newFormat: theFormat newInstVars: anArrayOfInstvarNames newClassInstVars: anArrayOfClassInstVars newPools: anArrayOfPoolDicts newClassVars: anArrayOfClassVars inDict: aDictionary isKernel: isKernelBool
  "oldClass is equivalent to the subclass that would be created using
 the other arguments if 
     instVar names match exactly ,
   and class instVar names match exactly ,
   and the classVars in oldClass can be modified to add/remove Associations 
     to match anArrayOfClassVars ,
   and pool dictionaries match exactly

  With respect to options and format, oldClass is equivalent if
    The state of format bits dbTransient, instancesNonPersistent, instancesInvariant  
     match exactly ,
    and subclassesDisallowed cannot be set in the new subclass if it not set in oldClass ,
    and modifiable  cannot be set if it is not set in oldClass  ,
    and  (SELF_CAN_BE_SPECIAL, NSC_DUPLICATES, INDEXABLE, IMPLEMENTATION, NO_STRUCT_UPDATE bits)
        of the formats must match exactly.

  If all other equivalence tests pass, the following changes to oldClass may be 
  made to match the arguments and avoid creating a new subclass
    subclassesDisallowed bit may be cleared in format of oldClass 
    traverseByCallback bit may be set or cleared in format of oldClass
    oldClass may be changed from modifiable to not modifiable (by sending immediateInvariant)
    classVars may be added to oldClass 
    classVars having modifiable Associations may be removed from oldClass 
"

  | oldOk fmtArr nam supr opts ivs civs poolds cvars cvarsArray |
  fmtArr := self _validateOptions: optionsArray withFormat: theFormat.
  (oldClass isKindOf: Class)
    ifFalse: [ oldClass _validateClass: Class ].
  nam := oldClass name asString = aString asString.
  supr := oldClass superClass == actualSelf.
  opts := oldClass _optionsChangableTo: fmtArr.
  ivs := oldClass _instVarsEqual: anArrayOfInstvarNames.
  civs := oldClass class _instVarsEqual: anArrayOfClassInstVars.
  poolds := oldClass _poolDictsEqual: anArrayOfPoolDicts.
  cvars := oldClass
    _classVarsChangableTo: (cvarsArray := anArrayOfClassVars copy).
  oldOk := nam
    and: [ supr and: [ opts and: [ ivs and: [ civs and: [ poolds and: [ cvars ] ] ] ] ] ].
  oldOk
    ifTrue: [ 
      | oldVal newName |
      newName := aString asSymbol.
      oldVal := aDictionary at: newName otherwise: nil.
      oldVal == oldClass
        ifFalse: [ 
          ImproperOperation
            signal:
              'no new subclass needed, but aDictionary at: oldClass name ~~ oldClass'.
          ^ false ].
      oldClass _adjustOptions: optionsArray formatArr: fmtArr.
      oldClass _adjustClassVars: cvarsArray.
      (fmtArr at: 3)
        ifTrue: [ GsFile gciLogServer: 'class ' , aString , ' equivalent to reqested class' ].
      ^ true ]
    ifFalse: [ 
      (fmtArr at: 3)
        ifTrue: [ 
          GsFile
            gciLogServer:
              '_equivalentSubclass false, nam:' , nam asString , ' supr:' , supr asString
                , ' opts:' , opts asString , ' ivs:' , ivs asString , ' civs:'
                , civs asString , ' poolds:' , poolds asString , ' cvars:'
                , cvars asString ] ].
  GsEventLogEntry trace
    object:
        oldClass name
            ->
              (Dictionary new
                at: 'fmtArr' put: fmtArr;
                at: 'apts' put: opts;
                at: 'ivs' put: ivs;
                at: 'civs' put: civs;
                at: 'poolds' put: poolds;
                at: 'cvars' put: cvars;
                yourself);
    addToLog.
self halt.
  ^ false
%

run
GsEventLog current deleteAllEntries.
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

  print
  GsDeployer new classesWithClassHistory collect: [:each | each className ].
%

logout
