! Package: Metacello-GsCypress-MC

! Class Declarations

doit
(MetacelloCommonMCSpecLoader
	subclass: 'MetacelloFetchingCypressSpecLoader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-GsCypress-MC';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloFetchingCypressSpecLoader
	subclass: 'MetacelloEnsureFetchingCypressSpecLoader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-GsCypress-MC';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloFetchingCypressSpecLoader
	subclass: 'MetacelloNullRecordingCypressSpecLoader'
	instVarNames: #( afterLoads beforeLoads evalDoits )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-GsCypress-MC';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloCommonMCSpecLoader
	subclass: 'MetacelloLoadingCypressSpecLoader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-GsCypress-MC';
		comment: '';
		immediateInvariant.
true.
%


! Class Implementation for MetacelloFetchingCypressSpecLoader

! ------------------- Instance methods for MetacelloFetchingCypressSpecLoader

category: 'accessing'
method: MetacelloFetchingCypressSpecLoader
actionLabel

	^'Fetching '
%

category: 'versionInfo'
method: MetacelloFetchingCypressSpecLoader
ancestorsFor: packageSpec

	^self loadData
		ancestorsFor: packageSpec 
		ifAbsent: [ super ancestorsFor: packageSpec ]
%

category: 'private'
method: MetacelloFetchingCypressSpecLoader
atomicLoadPackageSpecs: packageSpecs repositories: repositories

	self loaderPolicy 
		pushAtomicLoadDirectivesDuring: [ super linearLoadPackageSpecs: packageSpecs repositories: repositories ]
		for: self
%

category: 'accessing'
method: MetacelloFetchingCypressSpecLoader
cacheRepository

	^self loaderPolicy cacheRepository
%

category: 'versionInfo'
method: MetacelloFetchingCypressSpecLoader
currentVersionInfoFor: packageSpec

	^self loadData
		currentVersionInfoFor: packageSpec 
		ifAbsent: [ super currentVersionInfoFor: packageSpec ]
%

category: 'actions'
method: MetacelloFetchingCypressSpecLoader
doLoad

	self loaderPolicy copy load
%

category: 'accessing'
method: MetacelloFetchingCypressSpecLoader
ensuredMap

	^self loaderPolicy ensuredMap
%

category: 'accessing'
method: MetacelloFetchingCypressSpecLoader
ensureSpecLoader
  ^ (MetacelloEnsureFetchingCypressSpecLoader on: self spec)
    loaderPolicy: self loaderPolicy;
    yourself	"explicitly share the loaderPolicy"
%

category: 'private'
method: MetacelloFetchingCypressSpecLoader
explicitLoadPackageSpecs: packageSpecs repositories: repositories
	
	| directive |
	directive := self loaderPolicy 
		pushExplicitLoadDirectivesDuring: [ super linearLoadPackageSpecs: packageSpecs repositories: repositories ]
		for: self.
	directive explicitLoadWithPolicy: self loaderPolicy.
%

category: 'private'
method: MetacelloFetchingCypressSpecLoader
linearLoadPackageSpec: packageSpec packageManager: packageManager
  | resolvedReference |
  resolvedReference := self
    resolvePackageSpecReference: packageSpec
    packageManager: packageManager.	"look up package spec"
  self preLoad: packageSpec.
  (MetacelloDirective
    loadPackage: packageSpec
    resolvedReference: resolvedReference
    loader: self) addTo: self loadDirective.
  self postLoad: packageSpec
%

category: 'private'
method: MetacelloFetchingCypressSpecLoader
linearLoadPackageSpecs: packageSpecs repositories: repositories
	
	self loaderPolicy 
		pushLinearLoadDirectivesDuring: [ super linearLoadPackageSpecs: packageSpecs repositories: repositories ]
		 for: self
%

category: 'accessing'
method: MetacelloFetchingCypressSpecLoader
loadData

	^self loaderPolicy loadData
%

category: 'accessing'
method: MetacelloFetchingCypressSpecLoader
loadDirective

	^self loaderPolicy loadDirective
%

category: 'accessing'
method: MetacelloFetchingCypressSpecLoader
loadingSpecLoader
  ^ (MetacelloLoadingCypressSpecLoader on: self spec)
    loaderPolicy: self loaderPolicy copy;
    yourself
%

category: 'doits'
method: MetacelloFetchingCypressSpecLoader
postLoad: packageOrVersionSpec

	(MetacelloDirective postLoadSpec: packageOrVersionSpec loader: self)  addTo: self loadDirective
%

category: 'doits'
method: MetacelloFetchingCypressSpecLoader
preLoad: packageOrVersionSpec

	(MetacelloDirective preLoadSpec: packageOrVersionSpec loader: self) addTo: self loadDirective
%

category: 'printing'
method: MetacelloFetchingCypressSpecLoader
printOn: aStream
	super printOn: aStream.
	aStream nextPut: $(.
	self loadDirective printOn: aStream.
	aStream nextPut: $)
%

! Class Implementation for MetacelloEnsureFetchingCypressSpecLoader

! ------------------- Instance methods for MetacelloEnsureFetchingCypressSpecLoader

category: 'accessing'
method: MetacelloEnsureFetchingCypressSpecLoader
ensureSpecLoader
	^ self
%

category: 'private'
method: MetacelloEnsureFetchingCypressSpecLoader
scheduleFetchFor: packageSpec cachedReference: reference
  "reference already in the cache during fetch ...schedule a load directive for reference, so ensured load will come from cache"

  ^ self
    scheduleFetchFor: packageSpec
    reference: reference
    message:
      'Fetched -> (cached) ' , reference name , ' --- '
        , reference repository repositoryDescription , ' --- '
        , reference repository description
%

category: 'private'
method: MetacelloEnsureFetchingCypressSpecLoader
scheduleFetchFor: packageSpec nearestReference: reference
  "latest version in repository already matches the cached reference...schedule a load directive for reference, so ensured load will come from cache"

  ^ self
    scheduleFetchFor: packageSpec
    reference: reference
    message:
      'Fetched -> (nearest) ' , reference name , ' --- '
        , reference repository repositoryDescription , ' --- '
        , reference repository description
%

! Class Implementation for MetacelloNullRecordingCypressSpecLoader

! ------------------- Instance methods for MetacelloNullRecordingCypressSpecLoader

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
actionLabel

	^'Recording '
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
afterLoads

	afterLoads == nil ifTrue: [ afterLoads := OrderedCollection new ].
	^afterLoads
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
beforeLoads

	beforeLoads == nil ifTrue: [ beforeLoads := OrderedCollection new ].
	^beforeLoads
%

category: 'versionInfo'
method: MetacelloNullRecordingCypressSpecLoader
currentVersionInfoFor: packageSpec

	^self loadData
		currentVersionInfoFor: packageSpec 
		ifAbsent: [ nil ]
%

category: 'actions'
method: MetacelloNullRecordingCypressSpecLoader
doingLoads: aBlock
	"escape mechanism for recording and null loaders to skip doing loaderlike things"
%

category: 'testing'
method: MetacelloNullRecordingCypressSpecLoader
ensureForDevelopment

	^false
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
evalDoits

	evalDoits == nil ifTrue: [ evalDoits := false ].
	^evalDoits
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
evalDoits: aBool

	evalDoits := aBool
%

category: 'actions'
method: MetacelloNullRecordingCypressSpecLoader
linearLoadPackageSpec: packageSpec gofer: gofer

	MetacelloPlatform current
		do:  [ | externalReference loadBlock answers fake |
			externalReference := self resolveRecordingPackageSpecReference: packageSpec gofer: gofer.
			loadBlock := [
					self preLoad: packageSpec.
					(MetacelloDirective 
						loadPackage: packageSpec 
						externalReference: externalReference 
						loader: self) addTo: self loadDirective.
					self postLoad: packageSpec ].
			(answers := packageSpec answers) notEmpty
				ifTrue: [ loadBlock valueSupplyingMetacelloAnswers: answers ]
				ifFalse: [ loadBlock value ].
			fake := packageSpec copy.
			fake name: fake file.
			self loadData 
				addVersion: fake
				versionInfo: fake
				resolvedReference: externalReference 
				packageSpec: packageSpec ]
		displaying: 'Recording ', packageSpec file
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
loadedPackages

	| packages |
	packages := OrderedCollection new.
	self loadDirective packageDirectivesDo: [:directive | packages add: directive file ].
	^packages
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
loadedRepositories

	| repos |
	repos := OrderedCollection new.
	self repositoryMap values collect: [:coll | repos addAll: coll ].
	^repos
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
loadingSpecLoader

	^self
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
packages

	| packages |
	packages := OrderedCollection new.
	self loadDirective packageDirectivesDo: [:directive | packages add: directive spec ].
	^packages
%

category: 'doits'
method: MetacelloNullRecordingCypressSpecLoader
postLoad: packageOrVersionSpec

	self evalDoits ifFalse: [ ^self ].
	packageOrVersionSpec postLoadDoItBlock ~~ nil
		ifTrue: [ self afterLoads add: packageOrVersionSpec name, ' load' ].
	super postLoad: packageOrVersionSpec
%

category: 'doits'
method: MetacelloNullRecordingCypressSpecLoader
preLoad: packageOrVersionSpec

	self evalDoits ifFalse: [ ^self ].
	packageOrVersionSpec preLoadDoItBlock ~~ nil
		ifTrue: [ self beforeLoads add: packageOrVersionSpec name, ' load' ].
	super preLoad: packageOrVersionSpec
%

category: 'accessing'
method: MetacelloNullRecordingCypressSpecLoader
recordingSpecLoader

	^self
%

! Class Implementation for MetacelloLoadingCypressSpecLoader

! ------------------- Instance methods for MetacelloLoadingCypressSpecLoader

category: 'accessing'
method: MetacelloLoadingCypressSpecLoader
actionLabel

	^'Loading '
%

category: 'actions'
method: MetacelloLoadingCypressSpecLoader
doLoad
  "NOOP"

  self halt
%

category: 'accessing'
method: MetacelloLoadingCypressSpecLoader
fetchingSpecLoader
  ^ (MetacelloFetchingCypressSpecLoader on: self spec)
    loaderPolicy: self loaderPolicy copy;
    yourself
%

category: 'actions'
method: MetacelloLoadingCypressSpecLoader
linearLoadPackageSpecs: packageSpecs repositories: repositories
  self halt
%

category: 'doits'
method: MetacelloLoadingCypressSpecLoader
postLoad: packageOrVersionSpec

	| block |
	(block := packageOrVersionSpec postLoadDoItBlock) ~~ nil
		ifTrue: [ block valueWithPossibleArgs: { self. packageOrVersionSpec. } ]
%

category: 'doits'
method: MetacelloLoadingCypressSpecLoader
preLoad: packageOrVersionSpec

	| block |
	(block := packageOrVersionSpec preLoadDoItBlock) ~~ nil
		ifTrue: [ block valueWithPossibleArgs: { self. packageOrVersionSpec. } ]
%

! Class Extensions


! Class Extension for AbstractMetacelloConfiguration

! ------------------- Class methods for AbstractMetacelloConfiguration


category: '*Metacello-GsCypress-MC'
classmethod: AbstractMetacelloConfiguration
ensureMetacello: loadList
  "Bootstrap Metacello, retry using alternate repository, if primary repository is not accessible"

  "Expect all of Metacello to be installed in base GemStone"
%

! Class Extension for BaselineOf

! ------------------- Instance methods for BaselineOf

category: '*metacello-gscypress-mc'
method: BaselineOf
projectClass
    ^ MetacelloCypressBaselineProject
%


! Class Extension for CypressAbstractRepository

! ------------------- Instance methods for CypressAbstractRepository

category: '*Metacello-GsCypress-MC'
method: CypressAbstractRepository
flushForScriptGet
  "noop"
%

category: '*Metacello-GsCypress-MC'
method: CypressAbstractRepository
repositoryVersionString
  "extract a version string from the repository ... if possible"

  ^ ''
%

! Class Extension for MetacelloAbstractPackageSpec

! ------------------- Instance methods for MetacelloAbstractPackageSpec

category: '*Metacello-GsCypress-MC'
method: MetacelloAbstractPackageSpec
loadUsing: aLoader packageManager: aPackageManager
  ^ self subclassResponsibility: #loadUsing:packageManager
%

! Class Extension for MetacelloAtomicLoadDirective

! ------------------- Instance methods for MetacelloAtomicLoadDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloAtomicLoadDirective
finalizeLoad: aPackageManager
  "load the accumulated packages (if any), reset the package list"

  | pkgLoads |
  self preloads do: [ :directive | super loadPreloadDirective: directive ].
  preloads := nil.
  (pkgLoads := self packageloads) notEmpty
    ifTrue: [ 
      self loader loadingSpecLoader
        loadPackageDirectives: pkgLoads
        packageManager: aPackageManager.
      self packageloads: nil ].
  self postloads do: [ :directive | super loadPostloadDirective: directive ].
  postloads := nil
%

category: '*Metacello-GsCypress-MC'
method: MetacelloAtomicLoadDirective
loadAtomicLoadDirective: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective loadDirectives
    do: [ :directive | directive loadUsing: self packageManager: aPackageManager ]
%

category: '*Metacello-GsCypress-MC'
method: MetacelloAtomicLoadDirective
loadLinearLoadDirective: aLoaderDirective packageManager: aPackageManager
  self finalizeLoad: aPackageManager.
  super
    loadLinearLoadDirective: aLoaderDirective
    packageManager: aPackageManager
%

category: '*Metacello-GsCypress-MC'
method: MetacelloAtomicLoadDirective
loadPackageDirective: aPackageLoadDirective packageManager: aPackageManager
  "accumulate packages"

  self packageloads add: aPackageLoadDirective
%

category: '*Metacello-GsCypress-MC'
method: MetacelloAtomicLoadDirective
loadUsing: aLoaderDirective packageManager: aPackageManager
  self loadDirectives isEmpty
    ifTrue: [ ^ self ].
  aLoaderDirective loadAtomicLoadDirective: self packageManager: aPackageManager
%

! Class Extension for MetacelloCommonMCSpecLoader

! ------------------- Instance methods for MetacelloCommonMCSpecLoader

category: '*Metacello-GsCypress-MC'
method: MetacelloCommonMCSpecLoader
linearLoadPackageSpecs: packageSpecs packageManger: aPackageManager

  self subclassResponsibility: #linearLoadPackageSpecs:packageManger:
%

category: '*Metacello-GsCypress-MC'
method: MetacelloCommonMCSpecLoader
linearLoadPackageSpecs: packageSpecs repositories: repositories

  | packageManager |
  packageManager := MetacelloGemStoneBasePlatform cypressPackageManagerClass new.
  repositories do: [:repo | packageManager addRepository: repo ].
  packageSpecs do: [ :aSpec |  aSpec loadUsing: self packageManager: packageManager ]
%

category: '*Metacello-GsCypress-MC'
method: MetacelloCommonMCSpecLoader
loadPackageDirective: aPackageLoadDirective packageManager: packageManager
  | resolvedReference |
  resolvedReference := aPackageLoadDirective resolvedReference.
  resolvedReference isNil
    ifTrue: [ ^ self error: 'Expected a resolved reference here' ].
  packageManager loadResolvedReference: resolvedReference.
  Transcript
    cr;
    show:
        'Loaded -> ' , resolvedReference name , ' --- '
            , resolvedReference repository description
%

category: '*Metacello-GsCypress-MC'
method: MetacelloCommonMCSpecLoader
loadPackageDirectives: pkgLoads packageManager: packageManager
  | cypressLoad |
  cypressLoad := MetacelloGemStoneBasePlatform cypressPackageManagerClass new.
  pkgLoads
    do: [ :packageLoadDirective | 
      | resolvedReference |
      (resolvedReference := packageLoadDirective resolvedReference) ~~ nil
        ifTrue: [ cypressLoad addResolvedReference: resolvedReference ] ].
  Transcript
    cr;
    show: 'Starting atomic load'.
  cypressLoad loadResolvedReferences.
  pkgLoads
    do: [ :packageLoadDirective | 
      Transcript
        cr;
        tab;
        show:
            'Loaded -> ' , packageLoadDirective file , ' --- '
                , packageLoadDirective resolvedReference repository description ].
  Transcript
    cr;
    show: 'Finished atomic load'
%

category: '*Metacello-GsCypress-MC'
method: MetacelloCommonMCSpecLoader
recordingSpecLoader
  ^ (MetacelloNullRecordingCypressSpecLoader on: self spec)
    loaderPolicy: self loaderPolicy copy;
    yourself
%

category: '*Metacello-GsCypress-MC'
method: MetacelloCommonMCSpecLoader
repositoriesFrom: aMetacelloMVRepositorySpecs ignoreOverrides: ignoreOverrides

  (ignoreOverrides not and: [self hasRepositoryOverrides]) ifTrue: [ ^self loaderPolicy overrideRepositories ].
  ^ aMetacelloMVRepositorySpecs collect: [:aSpec | aSpec createRepository ]
%

category: '*Metacello-GsCypress-MC'
method: MetacelloCommonMCSpecLoader
resolvePackageSpecReference: packageSpec packageManager: packageManager
  | packageReference references |
  self hasRepositoryOverrides not
    ifTrue: [ 
      packageSpec repositorySpecs notEmpty
        ifTrue: [ 
          (self repositoriesFrom: packageSpec repositorySpecs ignoreOverrides: true)
            do: [ :repository | 
              packageManager knownRepositories
                at: repository url asString
                ifAbsent: [ self error: 'Packages not expected to have custom repository spec in cypress' ] ] ] ].
  packageReference := packageSpec cypressPackageReference.
  references := packageReference resolveAllWith: packageManager.
  references size ~= 1
    ifTrue: [ 
      | stream repoString |
      stream := WriteStream on: String new.
      packageManager knownRepositories keys
        do: [ :url | 
          stream
            nextPutAll: url;
            space ].
      repoString := stream contents.
      references isEmpty
        ifTrue: [ 
          (MetacelloPackageSpecResolutionError new
            packageSpec: packageSpec;
            repositories: packageManager knownRepositories values;
            repositoryError:
                (UserDefinedError new
                    details:
                      'Reference for package ' , packageSpec file printString , ' not found in '
                        , repoString printString);
            yourself) signal ].
      self
        error:
          'More than on package reference found for ' , packageSpec file printString
            , ' in ' , repoString printString , '. Not expected in Cypress' ].
  ^ references first
%

! Class Extension for MetacelloCypressPackageSpec

! ------------------- Instance methods for MetacelloCypressPackageSpec

category: '*Metacello-GsCypress-MC'
method: MetacelloCypressPackageSpec
isPackageLoaded: aLoader
  
  MetacelloPlatform current 
    globalNamed: MetacelloGemStoneBasePlatform cypressPackageManagerClassName
    ifPresent: [:cl | ^cl isPackageLoaded: self file ].
  ^ false
%

! Class Extension for MetacelloDirective

! ------------------- Instance methods for MetacelloDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloDirective
loadUsing: aLoader packageManager: aPackageManager
  self subclassResponsibility: #'loadUsing:packageManager:'
%

! Class Extension for MetacelloExplicitLoadDirective

! ------------------- Instance methods for MetacelloExplicitLoadDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloExplicitLoadDirective
explicitLoadUsing: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective loadLinearLoadDirective: self packageManager: aPackageManager
%

category: '*Metacello-GsCypress-MC'
method: MetacelloExplicitLoadDirective
explicitLoadWithPolicy: aLoadPolicy

  | packageManager |
  packageManager := MetacelloGemStoneBasePlatform cypressPackageManagerClass new.
  self explicitLoadUsing: self packageManager: packageManager
%

category: '*Metacello-GsCypress-MC'
method: MetacelloExplicitLoadDirective
loadUsing: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective
    loadExplicitLoadDirective: self
    packageManager: aPackageManager
%

! Class Extension for MetacelloGroupSpec

! ------------------- Instance methods for MetacelloGroupSpec

category: '*Metacello-GsCypress-MC'
method: MetacelloGroupSpec
loadUsing: aLoader packageManager: aPackageManager
 "noop"
%

! Class Extension for MetacelloLinearLoadDirective

! ------------------- Instance methods for MetacelloLinearLoadDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloLinearLoadDirective
loadUsing: aLoaderDirective packageManager: packageManager
  self loadDirectives isEmpty
    ifTrue: [ ^ self ].
  aLoaderDirective loadLinearLoadDirective: self packageManager: packageManager
%

! Class Extension for MetacelloLoaderPolicy

! ------------------- Instance methods for MetacelloLoaderPolicy

category: '*Metacello-GsCypress-MC'
method: MetacelloLoaderPolicy
cacheRepository
  "In Cypress, there is no notion of a cache repository ... everything is already on disk locally"

  ^nil
%

category: '*Metacello-GsCypress-MC'
method: MetacelloLoaderPolicy
ensureHasRepositoryOverrides
  "ensure that hasRepositoryOverrides is true"

  overrideRepositories := Array new
%

! Class Extension for MetacelloMCProject

! ------------------- Instance methods for MetacelloMCProject

category: '*Metacello-GsCypress-MC'
method: MetacelloMCProject
defaultLoaderClass
  ^ MetacelloLoadingCypressSpecLoader
%

! Class Extension for MetacelloMCVersionSpec

! ------------------- Instance methods for MetacelloMCVersionSpec

category: '*metacello-gscypress-mc'
method: MetacelloMCVersionSpec
currentlyLoadedClassesInVersion
  | classes |
  classes := Set new.
  self
    projectDo: [ :ignored |  ]
    packageDo: [ :packageSpec | 
      packageSpec isPackageLoaded
        ifTrue: [ classes addAll: (CypressPackageDefinition named: packageSpec file) classes ] ]
    groupDo: [ :ignored |  ].
  ^ classes
%

category: '*metacello-gscypress-mc'
method: MetacelloMCVersionSpec
currentlyLoadedExtensionClassesInVersion
  | classes |
  classes := Dictionary new.
  self
    projectDo: [ :ignored |  ]
    packageDo: [ :packageSpec | 
      packageSpec isPackageLoaded
        ifTrue: [ self error: 'MetacelloMCVersionSpec>>currentlyLoadedExtensionClassesInVersion is not yet implemented.' ] ]
    groupDo: [ :ignored |  ].
  ^ classes
%

! Class Extension for MetacelloPackageLoadDirective

! ------------------- Instance methods for MetacelloPackageLoadDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloPackageLoadDirective
loadUsing: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective loadPackageDirective: self packageManager: aPackageManager
%

! Class Extension for MetacelloPackageSpec

! ------------------- Instance methods for MetacelloPackageSpec

category: '*Metacello-GsCypress-MC'
method: MetacelloPackageSpec
cypressPackageReference
  ^ CypressPackageReference name: self file
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPackageSpec
isDirty
  "for now assume that all packages are not modified"

  ^ false
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPackageSpec
loadUsing: aLoader packageManager: aPackageManager

  ^ aLoader linearLoadPackageSpec: self packageManager: aPackageManager
%

! Class Extension for MetacelloPlatform

! ------------------- Instance methods for MetacelloPlatform

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
compile: sourceString inClass: aClass classified: methodProtocol
  | gsNMethod |
  gsNMethod := aClass
    compileMethod: sourceString
    dictionaries: GsSession currentSession symbolList
    category: methodProtocol
    environmentId: 0.
  ^ gsNMethod selector
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
defaultPlatformAttributes
   ^ #(#'gemstone')
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
globalNamed: globalName
  ^ (AllUsers userWithId: self class userId) symbolList objectNamed: globalName
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
globalNamed: globalName ifAbsent: absentBlock
  ^ ((AllUsers userWithId: self class userId) symbolList objectNamed: globalName)
    ifNil: absentBlock
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
globalNamed: globalName ifPresent: presentBlock
  ^ ((AllUsers userWithId: self class userId) symbolList objectNamed: globalName)
    ifNotNil: [:anObject | presentBlock value: anObject]
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
globalNamed: globalName put: anObject
  "which symbolDictionary should be used for storing Globals"

  "UserGlobals ?"

  UserGlobals at: globalName asSymbol put: anObject
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
object: anObject atInstVarNamed: instVarName put: instVarValue

  ^ anObject instVarAt: (anObject class allInstVarNames indexOfIdentical: instVarName asSymbol)
    put: instVarValue
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
removeGlobalNamed: globalName
  "which symbolDictionary should be used for storing Globals"

  self halt.
%

category: '*Metacello-GsCypress-MC'
method: MetacelloPlatform
removeGlobalNamed: globalName ifAbsent: absentBlock
  "which symbolDictionary should be used for storing Globals"

  self halt.

%

! Class Extension for MetacelloPostLoadDirective

! ------------------- Instance methods for MetacelloPostLoadDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloPostLoadDirective
loadUsing: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective loadPostloadDirective: self
%

! Class Extension for MetacelloPreLoadDirective

! ------------------- Instance methods for MetacelloPreLoadDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloPreLoadDirective
loadUsing: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective loadPreloadDirective: self
%

! Class Extension for MetacelloProjectReferenceSpec

! ------------------- Instance methods for MetacelloProjectReferenceSpec

category: '*Metacello-GsCypress-MC'
method: MetacelloProjectReferenceSpec
loadUsing: aLoader packageManager: ignored
  | required |
  required := self resolveToLoadableSpec.
  required loader: aLoader.
  ^ required load
%

! Class Extension for MetacelloProjectRegistration

! ------------------- Class methods for MetacelloProjectRegistration

category: '*metacello-gscypress-mc'
classmethod: MetacelloProjectRegistration
registry
  | userGlobals |
  userGlobals := System myUserProfile symbolList objectNamed: #UserGlobals.
  ^ userGlobals at: #'MetacelloProjectRegistration_Registry'
    ifAbsent: [ userGlobals at: #'MetacelloProjectRegistration_Registry' put: MetacelloProjectRegistry new ]
%

category: '*metacello-gscypress-mc'
classmethod: MetacelloProjectRegistration
registry: aMetacelloProjectRegistry
  | userGlobals |
  userGlobals := System myUserProfile symbolList objectNamed: #UserGlobals.
  userGlobals at: #'MetacelloProjectRegistration_Registry' put: aMetacelloProjectRegistry
%

! Class Extension for MetacelloRepositorySpec

! ------------------- Instance methods for MetacelloRepositorySpec

category: '*Metacello-GsCypress-MC'
method: MetacelloRepositorySpec
createRepository
  ^self project createRepository: self
%

! Class Extension for MetacelloScriptApiExecutor

! ------------------- Instance methods for MetacelloScriptApiExecutor

category: '*Metacello-GsCypress-MC'
method: MetacelloScriptApiExecutor
projectSpecsFromRepositoryArg
  | spec repo projectSpecs |
  repositoryArg ifNil: [ ^ #() ].
  spec := (projectSpecGenerator projectSpecCreationBlock value: 'xxx') first.
  repo := spec project
    createRepository: (spec project repositorySpec description: repositoryArg).
  projectSpecs := OrderedCollection new.
  ((MetacelloGemStoneBasePlatform cypressPackageManagerClass new
    addRepository: repo;
    allResolvedPackageReferences)
    collect: [ :resolvedReference | resolvedReference packageName ]) asSet
    do: [ :packageName | 
      (projectSpecGenerator projectSpecCreationBlock
        value: (MetacelloScriptEngine baseNameOf: packageName))
        do: [ :projectSpec | 
          projectSpec className = packageName
            ifTrue: [ projectSpecs add: (self applyArgsToProjectSpec: projectSpec copy) ] ] ].
  ^ projectSpecs
%

! Class Extension for MetacelloVersionLoadDirective

! ------------------- Instance methods for MetacelloVersionLoadDirective

category: '*Metacello-GsCypress-MC'
method: MetacelloVersionLoadDirective
loadAtomicLoadDirective: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective loadDirectives
    do: [ :directive | directive loadUsing: aLoaderDirective packageManager: aPackageManager ].
  aLoaderDirective finalizeLoad: aPackageManager
%

category: '*Metacello-GsCypress-MC'
method: MetacelloVersionLoadDirective
loadExplicitLoadDirective: aLoaderDirective packageManager: aPackageManager
  "load has already been performed, no need to load again"

  
%

category: '*Metacello-GsCypress-MC'
method: MetacelloVersionLoadDirective
loadLinearLoadDirective: aLoaderDirective packageManager: aPackageManager
  aLoaderDirective loadDirectives
    do: [ :directive | directive loadUsing: aLoaderDirective packageManager: aPackageManager ].
  aLoaderDirective finalizeLoad: aPackageManager
%

category: '*Metacello-GsCypress-MC'
method: MetacelloVersionLoadDirective
loadPackageDirective: aPackageLoadDirective packageManager: aPackageManager
  aPackageLoadDirective loader loadingSpecLoader
    loadPackageDirective: aPackageLoadDirective
    packageManager: aPackageManager
%

category: '*Metacello-GsCypress-MC'
method: MetacelloVersionLoadDirective
loadWithPolicy: aLoadPolicy
  | packageManager |
  packageManager := MetacelloGemStoneBasePlatform cypressPackageManagerClass new.
  self loadUsing: self packageManager: packageManager
%

! Class initializers 

doit
true.
%



! End of Package: Metacello-GsCypress-MC

