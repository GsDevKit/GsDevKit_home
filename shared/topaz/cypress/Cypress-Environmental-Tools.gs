! Package: Cypress-Environmental-Tools

! Class Declarations

run
System myUserProfile userId = 'SystemUser'
  ifTrue: [ UserGlobals at: #CypressPackageSymbolList put: Globals ]
  ifFalse: [ UserGlobals at: #CypressPackageSymbolList put: UserGlobals ].
true
%

doit
(CypressDependencySorter
	subclass: 'CypressEnvironmentDependencySorter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-Environmental-Tools';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressLoader
	subclass: 'CypressEnvironmentLoader'
	instVarNames: #( defaultEnvironmentId lookupSymbolList compilationSymbolList )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-Environmental-Tools';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressPackageDefinition
	subclass: 'CypressEnvironmentPackageDefinition'
	instVarNames: #( lookupSymbolList )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-Environmental-Tools';
		comment: 'No class-specific documentation for CypressEnvironmentPackageDefinition, hierarchy is: 
Object
  CypressObject
    CypressPackageDefinition( name)
      CypressEnvironmentPackageDefinition( lookupSymbolList)
';
		immediateInvariant.
true.
%

doit
(CypressPackageManager3
	subclass: 'CypressEnvironmentPackageManager'
	instVarNames: #( defaultSymbolList lookupSymbolList compilationSymbolList defaultEnvironmentId )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-Environmental-Tools';
		comment: '';
		immediateInvariant.
true.
%


! Class Implementation for CypressEnvironmentDependencySorter

! ------------------- Instance methods for CypressEnvironmentDependencySorter

category: 'building'
method: CypressEnvironmentDependencySorter
add: aPatchOperation
  | requirements |
  requirements := self unresolvedRequirementsFor: aPatchOperation.
  requirements removeIfPresent: 'nil'.
  requirements removeIfPresent: nil.
  requirements isEmpty
    ifTrue: [ self addToOrder: aPatchOperation ]
    ifFalse: [ self addRequirements: requirements for: aPatchOperation ].
  ^ aPatchOperation
%

! Class Implementation for CypressEnvironmentLoader

! ------------------- Instance methods for CypressEnvironmentLoader

category: 'accessing'
method: CypressEnvironmentLoader
allClasses
  | classes |
  classes := Array new.
  self defaultSymbolList
    do: [ :dict | classes addAll: (dict select: [ :each | each isBehavior ]) ].
  ^ classes
%

category: 'loading'
method: CypressEnvironmentLoader
analyzeAdditions
  | sorter |
  sorter := CypressEnvironmentDependencySorter new
    addAll: self additions;
    addExternalProvisions: self provisions;
    yourself.
  additions := sorter orderedItems.
  requirements := sorter externalRequirements.
  unloadable := sorter required
%

category: 'loading'
method: CypressEnvironmentLoader
analyzeRemovals
  | sorter |
  sorter := CypressEnvironmentDependencySorter new
    addAll: self removals;
    yourself.
  removals := sorter orderedItems reverse
%

category: 'accessing'
method: CypressEnvironmentLoader
compilationSymbolList
  ^ compilationSymbolList
    ifNil: [ compilationSymbolList := self defaultSymbolList ]
%

category: 'accessing'
method: CypressEnvironmentLoader
compilationSymbolList: anObject

   compilationSymbolList := anObject
%

category: 'accessing'
method: CypressEnvironmentLoader
defaultEnvironmentId
  ^ defaultEnvironmentId ifNil: [ defaultEnvironmentId := 0 ]
%

category: 'accessing'
method: CypressEnvironmentLoader
defaultEnvironmentId: anObject

   defaultEnvironmentId := anObject
%

category: 'accessing'
method: CypressEnvironmentLoader
defaultSymbolList
  ^ System myUserProfile symbolList
%

category: 'operations'
method: CypressEnvironmentLoader
loadClassDefinition: aPatchOperation
  [ 
  aPatchOperation
    loadClassDefinition: self defaultSymbolDictionaryName
    environmentLoader: self ]
    on: Error
    do: [ :ex | self handlePatchOperation: aPatchOperation failure: ex ]
%

category: 'operations'
method: CypressEnvironmentLoader
loadMethodDefinition: aPatchOperation
  [ 
  [ 
  aPatchOperation
    loadMethodDefinition: self lookupSymbolList
    environmentLoader: self ]
    on: CompileError
    do: [ :ex | self handleCompileError: ex from: aPatchOperation ] ]
    on: Error
    do: [ :ex | self handlePatchOperation: aPatchOperation failure: ex ]
%

category: 'accessing'
method: CypressEnvironmentLoader
lookupSymbolList
  ^ lookupSymbolList ifNil: [ lookupSymbolList := self defaultSymbolList ]
%

category: 'accessing'
method: CypressEnvironmentLoader
lookupSymbolList: anObject

   lookupSymbolList := anObject
%

category: 'operations'
method: CypressEnvironmentLoader
postLoad: aPatchOperation
  [ 
  aPatchOperation
    postLoadDefinition: lookupSymbolList
    environmentId: self defaultEnvironmentId ]
    on: Error
    do: [ :ex | self handlePatchOperation: aPatchOperation failure: ex ]
%

! Class Implementation for CypressEnvironmentPackageDefinition

! ------------------- Instance methods for CypressEnvironmentPackageDefinition

category: 'accessing'
method: CypressEnvironmentPackageDefinition
lookupSymbolList

   ^lookupSymbolList
%

category: 'accessing'
method: CypressEnvironmentPackageDefinition
lookupSymbolList: anObject

   lookupSymbolList := anObject
%

category: 'accessing'
method: CypressEnvironmentPackageDefinition
symbolList
  lookupSymbolList ifNil: [ ^ super symbolList ].
  ^ self lookupSymbolList
%

! Class Implementation for CypressEnvironmentPackageManager

! ------------------- Instance methods for CypressEnvironmentPackageManager

category: 'accessing'
method: CypressEnvironmentPackageManager
compilationSymbolList
  ^ compilationSymbolList
    ifNil: [ compilationSymbolList := self defaultSymbolList ]
%

category: 'accessing'
method: CypressEnvironmentPackageManager
compilationSymbolList: anObject

   compilationSymbolList := anObject
%

category: 'accessing'
method: CypressEnvironmentPackageManager
defaultEnvironmentId

   ^defaultEnvironmentId
%

category: 'accessing'
method: CypressEnvironmentPackageManager
defaultEnvironmentId: anObject

   defaultEnvironmentId := anObject
%

category: 'accessing'
method: CypressEnvironmentPackageManager
defaultSymbolList

   ^defaultSymbolList
%

category: 'accessing'
method: CypressEnvironmentPackageManager
defaultSymbolList: anObject

   defaultSymbolList := anObject
%

category: 'loading'
method: CypressEnvironmentPackageManager
loadResolvedReferences
  | cypressLoader |
  cypressLoader := CypressEnvironmentLoader new.
  cypressLoader
    defaultSymbolDictionaryName: self defaultSymbolDictionaryName;
    compilationSymbolList: self compilationSymbolList;
    lookupSymbolList: self lookupSymbolList;
    defaultEnvironmentId: self defaultEnvironmentId.
  self resolvedPackageReferences
    do: [ :resolvedReference | 
      | package repository snapshot |
      package := resolvedReference packageDefinition.
      repository := resolvedReference repository.
      snapshot := (repository
        readPackageStructureForPackageNamed: resolvedReference name) snapshot.
      cypressLoader updatePackage: package withSnapshot: snapshot ].
  cypressLoader load.
  cypressLoader unloadable notEmpty
    ifTrue: [ self error: 'Unloadable definitions' ].
  cypressLoader errors notEmpty
    ifTrue: [ self error: 'Load errors' ].
  cypressLoader requirements notEmpty
    ifTrue: [ self error: 'Missing Requirements' ]
%

category: 'accessing'
method: CypressEnvironmentPackageManager
lookupSymbolList
  ^ lookupSymbolList ifNil: [ lookupSymbolList := self defaultSymbolList ]
%

category: 'accessing'
method: CypressEnvironmentPackageManager
lookupSymbolList: anObject

   lookupSymbolList := anObject
%

! Class Extensions

! Class Extension for CypressAddition

! ------------------- Instance methods for CypressAddition

category: '*cypress-environmental-tools'
method: CypressAddition
loadClassDefinition: aSymbolDictionaryName environmentLoader: environmentLoader
  self definition
    loadClassDefinition: aSymbolDictionaryName
    environmentLoader: environmentLoader
%

category: '*cypress-environmental-tools'
method: CypressAddition
loadMethodDefinition: lookupSymbolList environmentLoader: environmentLoader
  self definition
    loadMethodDefinition: lookupSymbolList
    environmentLoader: environmentLoader
%

category: '*cypress-environmental-tools'
method: CypressAddition
postLoadDefinition: lookupSymbolList environmentId: environmentId
  self definition
    postLoadOver: nil
    lookupSymbolList: lookupSymbolList
    environmentId: environmentId
%

! Class Extension for CypressClassDefinition

! ------------------- Instance methods for CypressClassDefinition

category: '*cypress-environmental-tools'
method: CypressClassDefinition
createOrReviseClass: aSymbolDictionaryName environmentLoader: environmentLoader
  ^ self subclassType = ''
    ifTrue: [ 
      self
        createOrReviseRegularClass: aSymbolDictionaryName
        environmentLoader: environmentLoader ]
    ifFalse: [ 
      self subclassType = 'byteSubclass'
        ifTrue: [ 
          self
            createOrReviseByteClass: aSymbolDictionaryName
            environmentLoader: environmentLoader ]
        ifFalse: [ 
          self subclassType = 'indexableSubclass'
            ifTrue: [ 
              self
                createOrReviseIndexableClass: aSymbolDictionaryName
                environmentLoader: environmentLoader ]
            ifFalse: [ self error: 'unknown subclass type: ' , self subclassType printString ] ] ]
%

category: '*cypress-environmental-tools'
method: CypressClassDefinition
createOrReviseRegularClass: aSymbolDictionaryName environmentLoader: environmentLoader
  "To be resolved:
		- the question of an 'environment' in which to create the class.
		- the question of which SymbolDictionary in which to create the class.
	 These are perhaps the same question."

  | superClass lookupSymbolList |
  lookupSymbolList := environmentLoader lookupSymbolList.
  superClass := (lookupSymbolList resolveSymbol: self superclassName) value.
  ^ (superClass
    subclass: self name
    instVarNames: (self instVarNames collect: [ :each | each asSymbol ])
    classVars: (self classVarNames collect: [ :each | each asSymbol ])
    classInstVars: (self classInstVarNames collect: [ :each | each asSymbol ])
    poolDictionaries: #()
    inDictionary:
      ((self symbolDictionaryForClassNamed: self name symbolList: lookupSymbolList)
        ifNil: [ (lookupSymbolList resolveSymbol: aSymbolDictionaryName) value ])
    options: #())
    category: category;
    comment: self comment
%

category: '*cypress-environmental-tools'
method: CypressClassDefinition
loadClassDefinition: aSymbolDictionaryName environmentLoader: environmentLoader
  "Create a new version of the defined class. If the class already exists,
	 copy the behaviors and state from the old version."

  | newClass oldClass lookupSymbolList |
  lookupSymbolList := environmentLoader lookupSymbolList.
  self defaultSymbolDictionaryName: aSymbolDictionaryName.
  (lookupSymbolList resolveSymbol: self name)
    ifNotNil: [ :assoc | oldClass := assoc value ].
  newClass := self
    createOrReviseClass: aSymbolDictionaryName
    environmentLoader: environmentLoader.
  (oldClass isNil or: [ newClass == oldClass ])
    ifTrue: [ ^ self ].
  self classNeedingMigration: newClass.
  self
    recompileWithSubclassesFrom: oldClass
    to: newClass
    environmentLoader: environmentLoader
%

category: '*cypress-environmental-tools'
method: CypressClassDefinition
symbolDictionaryForClassNamed: aString symbolList: aSymbolList
  "Answer the SymbolDictionary containing the named class.
	 If there are multiple answers, answer the first.
	 If there are no answers (i.e., the class does not exist), answer
	 the result of evaluating aBlock."

  ^ aSymbolList asArray detect: [ :each | each
        anySatisfy: [ :every | every isBehavior and: [ every name asString = aString asString ] ] ]
  ifNone: [  ]
%

! Class Extension for CypressDefinition

! ------------------- Instance methods for CypressDefinition

category: '*cypress-environmental-tools'
method: CypressDefinition
loadClassDefinition: aSymbolDictionaryName environmentLoader: environmentLoader
  "default is to do nothing"

%

category: '*cypress-environmental-tools'
method: CypressDefinition
loadMethodDefinition: lookupSymbolList environmentLoader: environmentLoader
  "default is to do nothing"

%

category: '*cypress-environmental-tools'
method: CypressDefinition
postLoad: lookupSymbolList environmentId: environmentId
  "noop"

%

category: '*cypress-environmental-tools'
method: CypressDefinition
postLoadOver: aDefinition lookupSymbolList: lookupSymbolList environmentId: environmentId
  self postLoad: lookupSymbolList environmentId: environmentId
%

! Class Extension for CypressMethodDefinition

! ------------------- Instance methods for CypressMethodDefinition

category: '*cypress-environmental-tools'
method: CypressMethodDefinition
loadMethodDefinition: lookupSymbolList environmentLoader: environmentLoader
  | cls actualCls |
  cls := (lookupSymbolList resolveSymbol: self className) value.
  actualCls := self classIsMeta
    ifTrue: [ cls class ]
    ifFalse: [ cls ].
  actualCls
    compileMethod: self source
    dictionaries: environmentLoader compilationSymbolList
    category: self category
    environmentId: environmentLoader defaultEnvironmentId
%

category: '*cypress-environmental-tools'
method: CypressMethodDefinition
postLoadOver: aDefinition lookupSymbolList: lookupSymbolList environmentId: environmentId
  super
    postLoadOver: aDefinition
    lookupSymbolList: lookupSymbolList
    environmentId: environmentId.
  (self isInitializer
    and: [ aDefinition isNil or: [ self source ~= aDefinition source ] ])
    ifTrue: [ 
      (self theNonMetaClass: lookupSymbolList)
        perform: #'initialize'
        env: environmentId ]
%

category: '*cypress-environmental-tools'
method: CypressMethodDefinition
theNonMetaClass: lookupSymbolList
  ^ self
    resolveGlobalNamed: self className
    lookupSymbolList: lookupSymbolList
    or: [  ]
%

! Class Extension for CypressModification

! ------------------- Instance methods for CypressModification

category: '*cypress-environmental-tools'
method: CypressModification
loadClassDefinition: aSymbolDictionaryName environmentLoader: environmentLoader
  self modification
    loadClassDefinition: aSymbolDictionaryName
    environmentLoader: environmentLoader
%

category: '*cypress-environmental-tools'
method: CypressModification
loadMethodDefinition: lookupSymbolList environmentLoader: environmentLoader
  self modification
    loadMethodDefinition: lookupSymbolList
    environmentLoader: environmentLoader
%

category: '*cypress-environmental-tools'
method: CypressModification
postLoadDefinition: lookupSymbolList environmentId: environmentId
  self modification
    postLoadOver: self obsoletion
    lookupSymbolList: lookupSymbolList
    environmentId: environmentId
%

! Class Extension for CypressObject

! ------------------- Instance methods for CypressObject

category: '*cypress-environmental-tools'
method: CypressObject
resolveGlobalNamed: aString lookupSymbolList: lookupSymbolList or: aBlock
  ^ ((lookupSymbolList resolveSymbol: aString) ifNil: [ ^ aBlock value ]) value
%

! Class Extension for CypressRemoval

! ------------------- Instance methods for CypressRemoval

category: '*cypress-environmental-tools'
method: CypressRemoval
loadClassDefinition: aSymbolDictionaryName environmentLoader: environmentLoader
  CypressError
    signal:
      'inappropriate to send #loadClassDefinition:environmentLoader: to a removal operation'
%

category: '*cypress-environmental-tools'
method: CypressRemoval
loadMethodDefinition: lookupSymbolList environmentLoader: environmentLoader
  CypressError
    signal:
      'inappropriate to send #loadMethodDefinition:environmentLoader: to a removal operation'
%

category: '*cypress-environmental-tools'
method: CypressRemoval
postLoadDefinition: lookupSymbolList environmentId: environmentId
  CypressError
    signal:
      'inappropriate to send #postLoadDefinition:environmentId: to a removal operation'
%

! Class initializers 

doit
true.
%



! End of Package: Cypress-Environmental-Tools

run
UserGlobals removeKey: #CypressPackageSymbolList.
true
%

