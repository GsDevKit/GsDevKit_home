! Package: Metacello-MC

! Class Declarations

doit
(MetacelloAbstractPackageSpec
	subclass: 'MetacelloPackageSpec'
	instVarNames: #( file repositories goferPackage preLoadDoIt postLoadDoIt )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloGenericProjectSpec
	subclass: 'MetacelloMCProjectSpec'
	instVarNames: #( file )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMCProjectSpec
	subclass: 'MetacelloMCBaselineOfProjectSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMCProjectSpec
	subclass: 'MetacelloMCConfigurationOfProjectSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMCProjectSpec
	subclass: 'MetacelloMCNamelessProjectSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMemberListSpec
	subclass: 'MetacelloRepositoriesSpec'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloProject
	subclass: 'MetacelloMCProject'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Model';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloMCProject
	subclass: 'MetacelloMCBaselineProject'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Model';
		comment: 'The **MetacelloMCBaselineProject**  is a wrapper for the **BaselineOf** version specification for file-based repositories.

There is a single version in a **MetacelloMCBaselineProject**, named *''baseline''*.

A typical **BaselineOf** is specification:

```Smalltalk
baseline: spec
    <baseline>
    spec
        package: ''External-Core'';
        package: ''External-Tests'' with: [ spec requires: ''External-Core'' ];
        yourself.
    spec
        group: ''Core'' with: #(''External-Core'');
        group: ''default'' with: #(''Core'');
        group: ''Tests'' with: #(''External-Tests'');
        yourself
```

The `<baseline>` pragma marks the method containing the baseline specification.';
		immediateInvariant.
true.
%

doit
(MetacelloSpec
	subclass: 'MetacelloRepositorySpec'
	instVarNames: #( description username password type )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloSpecLoader
	subclass: 'MetacelloCommonMCSpecLoader'
	instVarNames: #( operator loaderPolicy disablePackageCache )
	classVars: #( RetryPackageResolution )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Loaders';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloCommonMCSpecLoader
	subclass: 'MetacelloFetchingMCSpecLoader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Loaders';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloFetchingMCSpecLoader
	subclass: 'MetacelloEnsureFetchingMCSpecLoader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Loaders';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloFetchingMCSpecLoader
	subclass: 'MetacelloNullRecordingMCSpecLoader'
	instVarNames: #( afterLoads beforeLoads evalDoits )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Loaders';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersion
	subclass: 'MetacelloMCVersion'
	instVarNames: #( loaderPolicy )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Model';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionSpec
	subclass: 'MetacelloMCVersionSpec'
	instVarNames: #( repositories packages )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionValidator
	subclass: 'MetacelloMCVersionValidator'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Validation';
		comment: 'Performs configuration validation.

For programmatically decoding reason codes use:

  MetacellMCVersionValidator fullDescriptionForReasonCode: <reasonCode>

Warning reason codes:

	#notDevelopmentVersion			- the symbolic version #development refers to a non-development literal version.
	#loadWarning 						- Warning signalled during load [load validation].
	#onlyBaselineVersion 				- one or more baseline versions have been defined, but no non-baseline versions are defined.
	#stableDevelopmentVersion		- a version whose blessing is #development has been declared as a #stable version

Critical Warning reason codes:

	#duplicateVersionDefinitions 		         - there are multiple pragma methods specifying the same version
	#loadDeprecation					         - deprecation warning signalled while loading configuration [load validation]
	#missingRecommendedProjectSpecField - missing recommended fields in project reference (versionString). The versionString should be specified so that #bleedingEdge loads will be predictable and repeatable
	#noLoadableVersions 				         - no non #baseline versions defined in configuration
	#noTests 							         - no test cases defined in loaded configuration [load validation]
	#noVersionSpecified 				         - no version defined for the project reference or package. The version specified in the baseline or the latest version of the project or package in the repository will be used.
	#packageNameMismatch 			         - the name in the packageSpec does not match the name of the mcz file
	#projectClassNameFileMismatch 	         - the class name of the configuration does not match the mcz file containing the configuration
	#testDeprecation 					         - deprecation warning signalled while running configuration tests [load validation]

Error reason codes:

	#cannotResolveVersion 			- the version (project reference or symbolic version) was not found in the specified configuration
	#duplicateNames 					- multiple independent definitions for an entity with same name (project, package, or group)
	#incompleteProjectSpec 			- missing required fields in project reference (className and/or repository)
	#incorrectVersionString 			- the version declared in pragma doesn''t match version in versionSpec
	#invalidDoItSelector 				- doit select must be a Symbol
	#invalidVersionString 				- versionString must be a String
	#loadError 							- error occured while loading configuration [load validation]
	#missingVersionImport 			- version specified in import pragma not defined in configuration
	#noVersionsDefined 				- no usable baseline or version defined in configuration ... configuration cannot be loaded
	#projectCreationError 				- error occured while resolving project reference
	#shadowedNames 					- name duplication between packages and projects
	#testFailures						- test failures while running tests [load validation]
	#versionCompositionError 			- error while creating versionSpec from pragmas


';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloDirective'
	instVarNames: #( spec loader )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloDirective
	subclass: 'MetacelloPackageLoadDirective'
	instVarNames: #( resolvedReference externalReference )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloDirective
	subclass: 'MetacelloPrePostLoadDirective'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloPrePostLoadDirective
	subclass: 'MetacelloPostLoadDirective'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloPrePostLoadDirective
	subclass: 'MetacelloPreLoadDirective'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloDirective
	subclass: 'MetacelloVersionLoadDirective'
	instVarNames: #( loadDirectives )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionLoadDirective
	subclass: 'MetacelloAtomicLoadDirective'
	instVarNames: #( packageloads preloads postloads )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionLoadDirective
	subclass: 'MetacelloExplicitLoadDirective'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(MetacelloVersionLoadDirective
	subclass: 'MetacelloLinearLoadDirective'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Directives';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloLoadData'
	instVarNames: #( dataMap versionInfoMap packageNameMap )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Loaders';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloLoaderPolicy'
	instVarNames: #( overrideRepositories repositoryMap ensuredMap cacheRepository cacheGofer ignoreImage loadData loadDirective silently )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Loaders';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloMCPartiallyLoadedStatus'
	instVarNames: #( hasNoPackage hasNoProject aProjectIsLoaded aPackageIsLoaded aLoadedProjectIsExact aLoadedPackageIsExact aLoadedProjectIsCurrent aLoadedPackageIsCurrent aLoadedProjectIsNotCurrent aLoadedPackageIsNotCurrent aProjectNotLoaded aPackageNotLoaded vrsnStatus abort )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Specs';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'MetacelloMCVersionSpecLoader'
	instVarNames: #( versionSpec required packages loader loaderPolicy )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Metacello-MC-Loaders';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for MetacelloPackageSpec

! ------------------- Instance methods for MetacelloPackageSpec

category: 'testing'
method: MetacelloPackageSpec
compareCurrentVersion: anOperator targetVersionStatus: statusIgnored using: anMCLoader

	self 
		currentPackageLoaded: [:bool | ^bool ] 
		comparing: anOperator 
		notLoaded: [:ignored | ^false ]
		using: anMCLoader
%

category: 'testing'
method: MetacelloPackageSpec
compareRelativeCurrentVersion: anOperator targetVersionStatus: statusIgnored using: anMCLoader

	^self compareCurrentVersion: anOperator targetVersionStatus: statusIgnored using: anMCLoader
%

category: 'printing'
method: MetacelloPackageSpec
configMethodBodyOn: aStream hasName: hasName indent: indent
  | hasFile hasRepositories hasPreLoadDoIt hasPostLoadDoIt hasRequiresOrIncludesOrAnswers |
  hasFile := file ~~ nil.
  hasRepositories := self repositorySpecs size > 0.
  hasPreLoadDoIt := self getPreLoadDoIt ~~ nil.
  hasPostLoadDoIt := self getPostLoadDoIt ~~ nil.
  hasRequiresOrIncludesOrAnswers := (self requires isEmpty
    and: [ self includes isEmpty and: [ self answers isEmpty ] ]) not.
  hasRequiresOrIncludesOrAnswers
    ifTrue: [ 
      self
        configMethodBodyOn: aStream
        hasName: hasName
        cascading: hasFile | hasRepositories | hasPreLoadDoIt | hasPostLoadDoIt
        indent: indent ].
  self
    configMethodOn: aStream
    for: file
    selector: 'file: '
    cascading:
      hasName | hasRepositories | hasPreLoadDoIt | hasPostLoadDoIt
        | hasRequiresOrIncludesOrAnswers
    cascade: hasRepositories | hasPreLoadDoIt | hasPostLoadDoIt
    indent: indent.
  hasRepositories
    ifTrue: [ 
      self repositorySpecs size > 1
        ifTrue: [ 
          hasName | hasFile | hasPreLoadDoIt | hasPostLoadDoIt
            | hasRequiresOrIncludesOrAnswers
            ifTrue: [ 
              aStream cr.
              indent timesRepeat: [ aStream tab ] ].
          aStream
            nextPutAll: 'repositories: [';
            cr.
          indent + 1 timesRepeat: [ aStream tab ].
          aStream
            nextPutAll: 'spec';
            cr.
          self repositories configMethodCascadeOn: aStream indent: indent + 1.
          aStream nextPutAll: ' ]' ]
        ifFalse: [ 
          hasName | hasFile | hasPreLoadDoIt | hasPostLoadDoIt
            | hasRequiresOrIncludesOrAnswers
            ifTrue: [ 
              aStream cr.
              indent timesRepeat: [ aStream tab ] ].
          self repositories configMethodCascadeOn: aStream indent: indent ].
      hasPreLoadDoIt | hasPostLoadDoIt
        ifTrue: [ aStream nextPut: $; ] ].
  self
    configMethodOn: aStream
    for: self getPreLoadDoIt
    selector: 'preLoadDoIt: '
    cascading:
      hasName | hasFile | hasRepositories | hasPostLoadDoIt
        | hasRequiresOrIncludesOrAnswers
    cascade: hasPostLoadDoIt
    indent: indent.
  self
    configMethodOn: aStream
    for: self getPostLoadDoIt
    selector: 'postLoadDoIt: '
    cascading:
      hasName | hasFile | hasRepositories | hasPreLoadDoIt
        | hasRequiresOrIncludesOrAnswers
    cascade: false
    indent: indent.
  aStream nextPut: $.
%

category: 'printing'
method: MetacelloPackageSpec
configMethodCascadeOn: aStream member: aMember last: lastCascade indent: indent

	aMember methodUpdateSelector  == #remove:
		ifTrue: [ aStream  nextPutAll: 'removePackage: ', self name printString ]
		ifFalse: [ self configShortCutMethodBodyOn: aStream member: aMember indent: indent ].
	lastCascade
		ifTrue: [ aStream nextPut: $. ]
		ifFalse: [ aStream nextPut: $;; cr ]
%

category: 'printing'
method: MetacelloPackageSpec
configMethodOn: aStream indent: indent
  | hasRepositories hasPreLoadDoIt hasPostLoadDoIt hasRequiresOrIncludesOrAnswers hasFile |
  hasFile := file ~~ nil.
  hasRepositories := self repositorySpecs size > 0.
  hasPreLoadDoIt := self getPreLoadDoIt ~~ nil.
  hasPostLoadDoIt := self getPostLoadDoIt ~~ nil.
  hasRequiresOrIncludesOrAnswers := (self requires isEmpty
    and: [ self includes isEmpty and: [ self answers isEmpty ] ]) not.
  indent timesRepeat: [ aStream tab ].
  aStream nextPutAll: 'spec '.
  hasFile | hasRepositories | hasPreLoadDoIt | hasPostLoadDoIt
    | hasRequiresOrIncludesOrAnswers
    ifTrue: [ 
      aStream cr.
      indent + 1 timesRepeat: [ aStream tab ].
      aStream
        nextPutAll: 'name: ' , self name printString;
        nextPut: $;.
      self configMethodBodyOn: aStream hasName: true indent: indent + 1 ]
    ifFalse: [ aStream nextPutAll: 'name: ' , self name printString ]
%

category: 'printing'
method: MetacelloPackageSpec
configShortCutMethodBodyOn: aStream member: aMember indent: indent
  | hasFile hasRepositories hasPreLoadDoIt hasPostLoadDoIt hasRequiresOrIncludesOrAnswers |
  hasFile := file ~~ nil.
  hasRepositories := self repositorySpecs size > 0.
  hasPreLoadDoIt := self getPreLoadDoIt ~~ nil.
  hasPostLoadDoIt := self getPostLoadDoIt ~~ nil.
  hasRequiresOrIncludesOrAnswers := (self requires isEmpty
    and: [ self includes isEmpty and: [ self answers isEmpty ] ]) not.
  hasRepositories | hasPreLoadDoIt | hasPostLoadDoIt
    | hasRequiresOrIncludesOrAnswers
    ifTrue: [ 
      aStream
        nextPutAll: 'package: ' , self name printString , ' ';
        nextPutAll: aMember methodUpdateSelector asString , ' [';
        cr.
      indent + 1 timesRepeat: [ aStream tab ].
      aStream nextPutAll: 'spec '.
      self configMethodBodyOn: aStream hasName: false indent: indent + 2.
      aStream nextPutAll: ' ]'.
      ^ self ].
  aStream nextPutAll: 'package: ' , self name printString.
  hasFile
    ifTrue: [ aStream nextPutAll: ' with: ' , file printString ]
%

category: 'development support'
method: MetacelloPackageSpec
copySpecTo: aRepositorySpec
	"Copy current mcz file to the repository named in aRepositorySpec"

	self loader copySpec: self from: self repositorySpecs to: aRepositorySpec createRepository
%

category: 'testing'
method: MetacelloPackageSpec
currentPackageLoaded: loadedBlock notLoaded: notLoadedBlock using: anMCLoader
	"Use currentVersionInfoFor: because it involves the loader and returns versionInfo for a planned load 
	 (atomic loaders) or currently loaded package"

	| vis |
	vis := anMCLoader ancestorsFor: self.
	vis notNil
		ifTrue: [ 
			self getFile == nil
				ifTrue: [ ^ loadedBlock value: #() value: self file ].
			^ loadedBlock value: vis value: self file ].
	^ notLoadedBlock value
%

category: 'loading'
method: MetacelloPackageSpec
ensureLoadedForDevelopmentUsing: mcLoader
	"noop"
	
	^true
%

category: 'loading'
method: MetacelloPackageSpec
ensureLoadUsing: mcLoader
	self explicitLoadUsing: mcLoader ensureSpecLoader
%

category: 'loading'
method: MetacelloPackageSpec
explicitLoadUsing: mcLoader
  | fetchingSpecLoader |
  self isDirty
    ifTrue: [ 
      (MetacelloSkipDirtyPackageLoad signal: self)
        ifTrue: [ 
          Transcript
            cr;
            show: 'Skipping load of modified package: ' , self file.
          ^ self ]
        ifFalse: [ 
          Transcript
            cr;
            show: 'Load over modified package: ' , self file ] ].	"fetch and explicitly load it"
  fetchingSpecLoader := mcLoader fetchingSpecLoader.
  fetchingSpecLoader
    explicitLoadPackageSpecs: (Array with: self)
    repositories: (fetchingSpecLoader repositoriesFrom: self repositorySpecs)
%

category: 'private'
method: MetacelloPackageSpec
extractNameFromFile

	file == nil ifTrue: [ ^nil ].
	^(self loader nameComponentsFrom: self file) first
%

category: 'loading'
method: MetacelloPackageSpec
fetch

	self fetchUsing: self loader
%

category: 'loading'
method: MetacelloPackageSpec
fetchPackage: aLoaderPolicy

	self fetchUsing: 
		(self loader
			loaderPolicy: aLoaderPolicy;
			yourself)
%

category: 'loading'
method: MetacelloPackageSpec
fetchUsing: mcLoader

	| fetchingSpecLoader |
	fetchingSpecLoader := mcLoader fetchingSpecLoader.
	fetchingSpecLoader
		linearLoadPackageSpecs: (Array with: self) 
		repositories: (fetchingSpecLoader repositoriesFrom: self repositorySpecs).
%

category: 'querying'
method: MetacelloPackageSpec
file

	file == nil ifTrue: [ ^self name ].
	^file
%

category: 'accessing'
method: MetacelloPackageSpec
file: aString

	file := aString
%

category: 'construction'
method: MetacelloPackageSpec
file: aString constructor: aVersionConstructor
    aVersionConstructor fileForPackage: aString
%

category: 'development support'
method: MetacelloPackageSpec
forceUpdatePackageSpec: updatedSpecs using: anMCLoader
	
	self updatePackageSpec: updatedSpecs force: true using: anMCLoader
%

category: 'accessing'
method: MetacelloPackageSpec
getFile
	"raw access to iv"
	
	^file
%

category: 'accessing'
method: MetacelloPackageSpec
getName
    "raw access to iv"

    ^ name
%

category: 'querying'
method: MetacelloPackageSpec
getPostLoadDoIt
  ^ postLoadDoIt
%

category: 'querying'
method: MetacelloPackageSpec
getPreLoadDoIt
  ^ preLoadDoIt
%

category: 'accessing'
method: MetacelloPackageSpec
getRepositories
    "raw access to iv"

    ^ repositories
%

category: 'testing'
method: MetacelloPackageSpec
hasRepository
    ^ self repositorySpecs notEmpty
%

category: 'construction'
method: MetacelloPackageSpec
includes: anObject constructor: aVersionConstructor
    aVersionConstructor includesForPackage: anObject
%

category: 'private'
method: MetacelloPackageSpec
includesForPackageOrdering
  ^ self includes
%

category: 'accessing'
method: MetacelloPackageSpec
info
	"test compatibility method"

	^self
%

category: 'querying'
method: MetacelloPackageSpec
isPackageLoaded

	^self isPackageLoaded: self loader
%

category: 'querying'
method: MetacelloPackageSpec
isPackageLoaded: aLoader

	^(self workingCopyNameFor: aLoader) ~~ nil
%

category: 'loading'
method: MetacelloPackageSpec
load

	self explicitLoadUsing: self loader
%

category: 'loading'
method: MetacelloPackageSpec
loadUsing: mcLoader

	self loader doingLoads: [ self explicitLoadUsing: mcLoader ]
%

category: 'merging'
method: MetacelloPackageSpec
mergeMap

	| map |
	map := super mergeMap.
	map at: #file put: file.
	map at: #repositories put: self repositories.
	map at: #preLoadDoIt put: preLoadDoIt.
	map at: #postLoadDoIt put: postLoadDoIt.
	^map
%

category: 'merging'
method: MetacelloPackageSpec
mergeSpec: anotherSpec

	| newSpec map anotherRepositories |
	newSpec := super mergeSpec: anotherSpec.
	map := anotherSpec mergeMap.
	(anotherRepositories := map at: #repositories) notEmpty
		ifTrue: [ 
			newSpec 
				repositories: (self repositories isEmpty
					ifTrue: [ anotherRepositories ]
					ifFalse: [ self repositories mergeSpec: anotherRepositories ]) ].
	^newSpec
%

category: 'querying'
method: MetacelloPackageSpec
name

	name == nil ifTrue: [ name := self extractNameFromFile ].
	^name
%

category: 'merging'
method: MetacelloPackageSpec
nonOverridable

	^super nonOverridable, #( repositories)
%

category: 'development support'
method: MetacelloPackageSpec
packagesNeedSavingVisited: visitedProjects using: repos into: aCollection

	^self loader packagesNeedSavingUsing: repos into: aCollection
%

category: 'loading'
method: MetacelloPackageSpec
packageSpecsInLoadOrder

	^{ self. }
%

category: 'copying'
method: MetacelloPackageSpec
postCopy

	super postCopy.
	goferPackage := nil.
	repositories := repositories copy.
%

category: 'querying'
method: MetacelloPackageSpec
postLoadDoIt
  ^ postLoadDoIt ifNil: [ super postLoadDoIt ]
%

category: 'loading'
method: MetacelloPackageSpec
postLoadDoIt: anObject

	anObject setPostLoadDoItInMetacelloSpec: self
%

category: 'construction'
method: MetacelloPackageSpec
postLoadDoIt: aSymbol constructor: aVersionConstructor
    aVersionConstructor postLoadDoItForPackage: aSymbol
%

category: 'querying'
method: MetacelloPackageSpec
preLoadDoIt
  ^ preLoadDoIt ifNil: [ super preLoadDoIt ]
%

category: 'accessing'
method: MetacelloPackageSpec
preLoadDoIt: anObject

	anObject setPreLoadDoItInMetacelloSpec: self
%

category: 'construction'
method: MetacelloPackageSpec
preLoadDoIt: aSymbol constructor: aVersionConstructor
    aVersionConstructor preLoadDoItForPackage: aSymbol
%

category: 'visiting'
method: MetacelloPackageSpec
projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock

	packageBlock value: self
%

category: 'querying'
method: MetacelloPackageSpec
repositories

	repositories == nil ifTrue: [ repositories := self project repositoriesSpec ].
	^ repositories
%

category: 'querying'
method: MetacelloPackageSpec
repositories: anObject
	repositories := anObject
%

category: 'construction'
method: MetacelloPackageSpec
repositories: aBlock constructor: aVersionConstructor
    aVersionConstructor repositoriesForPackage: aBlock
%

category: 'querying'
method: MetacelloPackageSpec
repository
    self deprecated: 'Use repositories or repositorySpecs'.
    self repositorySpecs isEmpty
        ifTrue: [ ^ nil ].
    ^ self repositorySpecs first
%

category: 'accessing'
method: MetacelloPackageSpec
repository: aStringOrMetacelloRepositorySpec

	self repositories repository: aStringOrMetacelloRepositorySpec
%

category: 'construction'
method: MetacelloPackageSpec
repository: anObject constructor: aVersionConstructor
    aVersionConstructor repositoryForPackage: anObject
%

category: 'accessing'
method: MetacelloPackageSpec
repository: aString username: username password: password

	self repositories repository: aString username: username password: password
%

category: 'construction'
method: MetacelloPackageSpec
repository: aString username: username password: password constructor: aVersionConstructor
    aVersionConstructor repositoryForPackage: aString username: username password: password
%

category: 'loading'
method: MetacelloPackageSpec
repositoryDescriptions
    ^ self repositorySpecs collect: [ :repoSpec | repoSpec description ]
%

category: 'loading'
method: MetacelloPackageSpec
repositorySpecs

	^self repositories map values
%

category: 'construction'
method: MetacelloPackageSpec
requires: anObject constructor: aVersionConstructor
    aVersionConstructor requiresForPackage: anObject
%

category: 'private'
method: MetacelloPackageSpec
resolveToPackagesIn: aVersionSpec visited: visited

	^{ self }
%

category: 'development support'
method: MetacelloPackageSpec
savePackage
	"Interactive save ... prompted for commit message and package name unless MCVersionNameAndMessageRequest handled"

	| latestFile pkgSpec |
	^(file notNil and: [ self name = self file ])
		ifTrue: [
			latestFile := self loader latestPackage: self name fromRepository: self repositorySpecs.
			pkgSpec := self copy.
			pkgSpec file: latestFile.
			pkgSpec savePackage ]
		ifFalse: [ self loader savePackageUsing: self repositorySpecs ]
%

category: 'fetching'
method: MetacelloPackageSpec
searchCacheRepositoryForPackage: searchBlock
  "evaluate the <searchBlock> if you want to search for the package in a local package cache"

  "for standard mcz repositories the answer is YES!"

  searchBlock value
%

category: 'accessing'
method: MetacelloPackageSpec
setPostLoadDoIt: aSymbolOrValueHolderSpec
  postLoadDoIt := aSymbolOrValueHolderSpec
%

category: 'accessing'
method: MetacelloPackageSpec
setPreLoadDoIt: aSymbolOrValueHolderSpec
  preLoadDoIt := aSymbolOrValueHolderSpec
%

category: 'construction'
method: MetacelloPackageSpec
supplyingAnswers: anObject constructor: aVersionConstructor
    aVersionConstructor supplyingAnswersForPackage: anObject
%

category: 'development support'
method: MetacelloPackageSpec
updateForSpawnMethod: sourceSpec
    "This means that this spec was used in a baseline and will be used in a version .... drop all information that isn't useful"

    | nm fl |
    nm := name.
    fl := file.
    fl == nil
        ifTrue: [ 
            "if only name has been set, then force the file to be non-nil, if any attribute besides file is set, then leave file nil"
            {answers.
            requires.
            includes.
            repositories.
            preLoadDoIt.
            postLoadDoIt} detect: [ :each | each ~~ nil ] ifNone: [ fl := name ] ].
    super updateForSpawnMethod: sourceSpec.
    file := repositories := goferPackage := preLoadDoIt := postLoadDoIt := nil.
    name := nm.
    file := fl.
    ^ file == nil
%

category: 'development support'
method: MetacelloPackageSpec
updatePackageRepositories: repositorySpecs

	| resolvedPackageRef |
	Transcript cr; show: '  Looking up version -> ', self file.
	resolvedPackageRef := self loader resolveSpec: self from: repositorySpecs.
	Transcript cr; show: 'Update repositoryGroup -> ', resolvedPackageRef name, ' ' , resolvedPackageRef repository description.
	resolvedPackageRef version workingCopy repositoryGroup addRepository: resolvedPackageRef repository
%

category: 'development support'
method: MetacelloPackageSpec
updatePackageRepositoriesFor: aVersionSpec
	"Don't update the repository unless the package is loaded in the image"
	
	self workingCopy == nil ifTrue: [ ^self ].
	self updatePackageRepositories: self repositorySpecs, aVersionSpec repositorySpecs.
%

category: 'development support'
method: MetacelloPackageSpec
updatePackageSpec: updatedSpecs force: force using: anMCLoader
	"Add pkg copy to updatedSpecs if the file in current image is different from the receiver's file"

	| viName |
	(force not and: [ self getFile == nil ])
		ifTrue: [ ^ self ].	"no file explicitly specified in this spec"
	(viName := self workingCopyNameFor: anMCLoader) == nil
		ifTrue: [ ^ self ].	"no working copy"
	viName ~= self file
		ifTrue: [ 
			| spec |
			spec := self copy.
			spec file: viName.
			updatedSpecs at: spec name put: spec ]
		ifFalse: [ updatedSpecs at: self name put: #uptodate ]
%

category: 'development support'
method: MetacelloPackageSpec
updatePackageSpec: updatedSpecs using: anMCLoader
	"Add pkg copy to updatedSpecs if the file in current image is different from the receiver's file"
	
	self updatePackageSpec: updatedSpecs force: false using: anMCLoader
%

category: 'visiting'
method: MetacelloPackageSpec
visitingWithPackages: packages

	packages at: self name put: self
%

! Class Implementation for MetacelloMCProjectSpec

! ------------------- Class methods for MetacelloMCProjectSpec

category: 'instance creation'
classmethod: MetacelloMCProjectSpec
new
	self name == #MetacelloMCProjectSpec
		ifTrue: [ self error: 'This class is abstract' ].
	^ super new
%

! ------------------- Instance methods for MetacelloMCProjectSpec

category: 'testing'
method: MetacelloMCProjectSpec
allPackagesLoaded: aLoader
    "answer true if all of the packages (excluding projects) are loaded"

    | vrsn pkgs |
    (vrsn := self versionOrNil) == nil
        ifTrue: [ ^ false ].
    pkgs := OrderedCollection new.
    (self loadListForVersion: vrsn)
        do: [ :nm | 
            vrsn packages
                do: [ :pkg | 
                    (pkg isPackageLoaded: aLoader)
                        ifFalse: [ ^ false ] ] ].
    ^ true
%

category: 'scripting'
method: MetacelloMCProjectSpec
asBaselineProjectSpec
    ^ self copyForScriptingInto: (MetacelloMCBaselineOfProjectSpec for: self project asBaselineProject)
%

category: 'scripting'
method: MetacelloMCProjectSpec
asConfigurationProjectSpec
    ^ self copyForScriptingInto: (MetacelloMCConfigurationOfProjectSpec for: self project asConfigurationProject)
%

category: 'scripting'
method: MetacelloMCProjectSpec
asProjectRegistration
  ((self className indexOfSubCollection: 'BaselineOf') = 1)
    ifTrue: [ 
      ^ MetacelloProjectRegistration
        fromMCBaselineProjectSpec: self asBaselineProjectSpec ].
  ^ MetacelloProjectRegistration
    fromMCConfigurationProjectSpec: self asConfigurationProjectSpec
%

category: 'scripting'
method: MetacelloMCProjectSpec
asProjectSpec
    ^ self
%

category: 'scripting'
method: MetacelloMCProjectSpec
asProjectSpecForVersion: vrsn
  ^ self
%

category: 'accessing'
method: MetacelloMCProjectSpec
baseName
	^ MetacelloScriptEngine baseNameOf: self className
%

category: 'scripting'
method: MetacelloMCProjectSpec
canDowngradeTo: aMetacelloProjectSpec
    ^ (super canDowngradeTo: aMetacelloProjectSpec) and: [ self file = aMetacelloProjectSpec file ]
%

category: 'scripting'
method: MetacelloMCProjectSpec
canUpgradeTo: aMetacelloProjectSpec
    ^ (super canUpgradeTo: aMetacelloProjectSpec) and: [ self file = aMetacelloProjectSpec file ]
%

category: 'accessing'
method: MetacelloMCProjectSpec
className: aString
    super className: aString.
    self projectPackage: nil
%

category: 'testing'
method: MetacelloMCProjectSpec
compareCurrentVersion: anOperator targetVersionStatus: targetVersionStatus using: anMCLoader
    ^ (MetacelloLookupProjectSpecForLoad new
        projectSpec: self;
        yourself) signal
        performCurrentVersionTestAgainst: self versionOrNil
        operator: anOperator
        targetVersionStatus: targetVersionStatus
        using: anMCLoader
%

category: 'scripting'
method: MetacelloMCProjectSpec
compareEqual: aMetacelloProjectSpec
    "'projectPackage repositories'"

    ^ (super compareEqual: aMetacelloProjectSpec) and: [ self file = aMetacelloProjectSpec file ]
%

category: 'testing'
method: MetacelloMCProjectSpec
compareRelativeCurrentVersion: anOperator targetVersionStatus: targetVersionStatus using: anMCLoader

	| cv vrsn |
	(vrsn := self versionOrNil) == nil ifTrue: [ ^false ].
	(cv := self relativeCurrentVersion) == nil ifTrue: [ ^false ].
	(targetVersionStatus includes: cv versionStatus)
		ifTrue: [ ^cv perform: anOperator with: vrsn ].
	^false
%

category: 'mutability'
method: MetacelloMCProjectSpec
copyForRegistration: aMetacelloProjectRegistration onWrite: aBlock
    self subclassResponsibility
%

category: 'scripting'
method: MetacelloMCProjectSpec
copyForScriptingInto: aProjectSpec
    ^aProjectSpec
        setName: name;
        className: className;
        versionString: versionString;
        operator: operator;
        setLoads: loads;
        preLoadDoIt: preLoadDoIt;
        postLoadDoIt: postLoadDoIt;
        repositories: repositories copy;
        file: file
%

category: 'loading'
method: MetacelloMCProjectSpec
determineCurrentVersionForLoad
    "don't use self currentVersion, because we are interested in the currentVersion of the project as loaded in image, not the current version relative to our load list"

    | prjct version currentVersion cvs |
    self projectClass == nil
        ifTrue: [ ^ nil ].
    (version := self versionOrNil) == nil
        ifTrue: [ ^ nil ].
    version blessing == #'baseline'
        ifTrue: [ ^ version ].
    self loader ignoreImage
        ifTrue: [ ^ version ].
    prjct := self projectClass new project.
    prjct loader: self loader.
    (currentVersion := prjct currentVersion) == nil
        ifTrue: [ ^ nil ].
    (cvs := currentVersion versionStatus) == #'somethingLoaded'
        ifTrue: [ ^ nil ].
    (#(#'allLoadedToSpec' #'loadedToSpec' #'loadedMatchConstraints') includes: (cvs := currentVersion versionStatus))
        ifTrue: [ 
            (currentVersion perform: self operator with: version)
                ifTrue: [ 
                    "load currentVersion"
                    ^ currentVersion ].	"load version"
            ^ nil ].
    version = currentVersion
        ifTrue: [ ^ currentVersion ].	"I don't believe that it is possible to reach this point in the method, so I will be interested if I run across a case that produces this error"
    (MetacelloProjectSpecLoadConflict projectSpec: self)
        signal:
            'Project load conflict for' , prjct label printString , ' between current version ' , currentVersion printString , '('
                , cvs asString , ') and specified version ' , version printString
                , '. Press resume to continue with load anyway'.
    ^ nil
%

category: 'loading'
method: MetacelloMCProjectSpec
ensureConfigurationLoaded: vrsn ensured: ensured
  "answer true if the configuration should be reloaded:
    blessing is #development
    symbolic version (https://github.com/dalehenrich/metacello-work/issues/283)"

  (vrsn blessing == #'development'
    or: [ MetacelloPlatform current isSymbol: self versionString ])
    ifTrue: [ 
      ensured ~~ #'latest'
        ifTrue: [ ^ MetacelloScriptEnsureProjectLoadedForDevelopment signal ] ].
  ^ false
%

category: 'loading'
method: MetacelloMCProjectSpec
ensureLoadedForDevelopmentUsing: mcLoader
  "for #development projects, always need latest version of package when contemplating a load"

  | ensured |
  ensured := mcLoader ensuredMap at: self name ifAbsent: [ nil ].
  self projectClass ~~ nil
    ifTrue: [ 
      | vrsn |
      vrsn := self versionOrNil.
      vrsn ~~ nil
        ifTrue: [ 
          (self ensureConfigurationLoaded: vrsn ensured: ensured)
            ifTrue: [ 
              mcLoader ensureForDevelopment
                ifTrue: [ 
                  | pc |
                  (pc := self projectClass) ~~ nil
                    ifTrue: [ 
                      MetacelloClearStackCacheNotification
                        signal:
                          #(#'currentVersion' #'currentVersionAgainst:' #'currentVersionInfo' #'versionConstructor' #'loadableSpecNames')
                            , {pc} ].
                  self ensureLoadUsing: mcLoader ]
                ifFalse: [ self projectPackage fetchUsing: mcLoader ].
              mcLoader ensuredMap at: self name put: #'latest' ].
          ^ self ] ].
  ensured == nil
    ifTrue: [ 
      "projectClass == nil or version == nil"
      mcLoader ensureForDevelopment
        ifTrue: [ 
          | pc |
          (pc := self projectClass) ~~ nil
            ifTrue: [ 
              MetacelloClearStackCacheNotification
                signal:
                  #(#'currentVersion' #'currentVersionAgainst:' #'currentVersionInfo' #'versionConstructor' #'loadableSpecNames')
                    , {pc} ].
          self ensureLoadUsing: mcLoader ]
        ifFalse: [ self fetchUsing: mcLoader ].
      mcLoader ensuredMap at: self name put: #'present' ]
%

category: 'loading'
method: MetacelloMCProjectSpec
ensureLoadUsing: aLoader
  | pp |
  pp := (MetacelloLookupProjectSpec new
    projectSpec: self;
    yourself) signal projectPackage.
  pp
    ifNil: [ 
      self
        error:
          'Unable to resolve project package for ' , self name printString
            ,
              '. It is likely that that the configuration referencing this project will not validate properly (see MetacelloToolBox class>>validateConfiguration:).' ].
  pp ensureLoadUsing: aLoader
%

category: 'loading'
method: MetacelloMCProjectSpec
ensureProjectLoaded
  "Ensure that the MetacelloProject is loaded in image. 
	 projectClass == nil or requested version non-existent warrants a project package load."

  "answer true if the projectClass exists"

  (self projectClass == nil
    or: [ 
      self versionOrNil == nil
        or: [ (loader notNil or: [ self isMutable ]) and: [ self loader ignoreImage ] ] ])
    ifTrue: [ 
      | pc |
      (pc := self projectClass) ~~ nil
        ifTrue: [ 
          MetacelloClearStackCacheNotification
            signal:
              #(#'currentVersion' #'currentVersionAgainst:' #'currentVersionInfo' #'versionConstructor' #'loadableSpecNames')
                , {pc} ].
      self projectPackage ifNil: [ ^ true ].
      self ensureLoadUsing: self loader ].
  ^ self projectClass ~~ nil
%

category: 'loading'
method: MetacelloMCProjectSpec
fetchUsing: aLoader
    (MetacelloLookupProjectSpec new
        projectSpec: self;
        yourself) signal projectPackage fetchUsing: aLoader
%

category: 'querying'
method: MetacelloMCProjectSpec
file
    file ifNil: [ ^ self className ].
    ^ file
%

category: 'accessing'
method: MetacelloMCProjectSpec
file: aString
    self shouldBeMutable.
    file := aString.
    self projectPackage: nil
%

category: 'construction'
method: MetacelloMCProjectSpec
file: aString constructor: aVersionConstructor
    aVersionConstructor fileForProject: aString
%

category: 'accessing'
method: MetacelloMCProjectSpec
getFile
    "raw access to iv"

    ^ file
%

category: 'testing'
method: MetacelloMCProjectSpec
hasConflictWithBaselineSpec: projectSpec
	^ self hasLoadConflicts: projectSpec
%

category: 'testing'
method: MetacelloMCProjectSpec
hasConflictWithConfigurationSpec: projectSpec
	^ self hasLoadConflicts: projectSpec
%

category: 'testing'
method: MetacelloMCProjectSpec
hasConflictWithProjectSpec: projectSpec
  ((self className indexOfSubCollection: 'BaselineOf') = 1)
    ifTrue: [ ^ projectSpec hasConflictWithBaselineSpec: self asBaselineProjectSpec ].
  ^ projectSpec
    hasConflictWithConfigurationSpec: self asConfigurationProjectSpec
%

category: 'scripting'
method: MetacelloMCProjectSpec
hasNoLoadConflicts: aMetacelloProjectSpec
  "'projectPackage repositories'"

  ^ (super hasNoLoadConflicts: aMetacelloProjectSpec)
    and: [ self file = aMetacelloProjectSpec file ]
%

category: 'testing'
method: MetacelloMCProjectSpec
isBaselineOfProjectSpec
	^ false
%

category: 'testing'
method: MetacelloMCProjectSpec
isConfigurationOfProjectSpec
	^ false
%

category: 'testing'
method: MetacelloMCProjectSpec
isPartiallyLoaded: aLoader

	| vrsn |
	(vrsn := self versionOrNil) == nil ifTrue: [ ^false ].
	(self loadListForVersion: vrsn) do: [:nm |
		(vrsn packagesForSpecNamed: nm ) do: [:pkg |
			(pkg isPackageLoaded: aLoader) ifTrue: [ ^true ]]].
	^false
%

category: 'testing'
method: MetacelloMCProjectSpec
isPossibleBaseline

	| vrsn |
	(vrsn := self versionOrNil) == nil ifTrue: [ ^false ].
	(vrsn allPackagesForSpecNamed: (self loadListForVersion: vrsn)) do: [:pkg |
		pkg workingCopy == nil ifTrue: [ ^false ]].
	^true
%

category: 'accessing'
method: MetacelloMCProjectSpec
loadedPackageNames: aLoader

	| vrsn pkgs |
	(vrsn := self versionOrNil) == nil ifTrue: [ ^#() ].
	pkgs := OrderedCollection new.
	(self loadListForVersion: vrsn) do: [:nm |
		(vrsn packagesForSpecNamed: nm ) do: [:pkg |
			(pkg isPackageLoaded: aLoader) ifTrue: [ pkgs add: pkg name ]]].
	^pkgs
%

category: 'accessing'
method: MetacelloMCProjectSpec
loadPackageList

	| vrsn pkgs |
	(vrsn := self versionOrNil) == nil ifTrue: [ ^#() ].
	pkgs := OrderedCollection new.
	(self loadListForVersion: vrsn) do: [:nm |
		pkgs addAll: ((vrsn packagesForSpecNamed: nm ) collect: [:each | each name ])].
	^pkgs
%

category: 'loading'
method: MetacelloMCProjectSpec
loadVersion: aVersionOrNil
    "Load the correct version of the project"

    | vrsn mcLoader list |
    self ensureProjectLoaded.
    vrsn := aVersionOrNil.
    vrsn == nil
        ifTrue: [ 
            [ vrsn := self version ]
                on: MetacelloVersionDoesNotExistError
                do: [ :ex | 
                    ^ (MetacelloProjectSpecLoadError projectSpec: self)
                        versionDoesNotExistException: ex;
                        signal:
                                'No version found for ' , self versionString printString , ' of ' , self className asString , ' because: '
                                        , ex description ] ].
    mcLoader := self loader copy.
    mcLoader operator: self operator.
    vrsn loader: mcLoader.
    list := (mcLoader ignoreImage
        ifTrue: [ self loadListForVersion: vrsn ]
        ifFalse: [ vrsn packageAndProjectNamesToLoad: (self loadListForVersion: vrsn) loader: mcLoader ]) asSet.
    MetacelloPlatform current
        useStackCacheDuring: [ :dict | 
            | projectCache cachedList |
            projectCache := dict at: self projectClass ifAbsent: [ dict at: self projectClass put: Dictionary new ].
            (cachedList := projectCache at: vrsn ifAbsent: [  ]) == nil
                ifTrue: [ projectCache at: vrsn put: list ]
                ifFalse: [ 
                    (cachedList size = list size and: [ cachedList includesAllOf: list ])
                        ifTrue: [ 
                            "no need to refetch list ... recursion stoppper (Issue 95)"
                            ^ self ]
                        ifFalse: [ projectCache at: vrsn put: list ] ].
            vrsn versionString ~= self versionString
                ifTrue: [ Transcript show: ' [' , vrsn versionString , ']' ].
            mcLoader preLoad: self.
            vrsn fetchRequiredFromArray: list.	"do the load"
            (MetacelloProjectSpecLoadedNotification new projectSpec: (self copy versionString: vrsn versionString))
                signal.
            mcLoader postLoad: self ]
        defaultDictionary: Dictionary new
%

category: 'scripting'
method: MetacelloMCProjectSpec
metacelloRegistrationHash
    "file"

    ^ String stringHash: self file initialHash: super metacelloRegistrationHash
%

category: 'accessing'
method: MetacelloMCProjectSpec
packageFileSpecFor: aMetacelloPackagesSpec

	^(aMetacelloPackagesSpec project projectReferenceSpec)
			name: self name;
			projectReference: self copy;
			yourself.
%

category: 'querying'
method: MetacelloMCProjectSpec
projectClass
  self className == nil
    ifTrue: [ ^ nil ].
  ^ MetacelloPlatform current
    globalNamed: self className asSymbol
    ifAbsent: [  ]
%

category: 'querying'
method: MetacelloMCProjectSpec
projectClassProject
    "indirection needed when projectClass is _not_ a subclass of MetacelloProject"

    ^ self projectClass new project
        setBaselineRepositoryDescription: self repositoryDescriptions;
        yourself
%

category: 'accessing'
method: MetacelloMCProjectSpec
projectPackage
    projectPackage
        ifNil: [ 
            self className ifNil: [ ^ nil ].
            projectPackage := self project packageSpec.
            projectPackage name: self className.
            self getFile ifNotNil: [ projectPackage file: self file ].
            projectPackage repositories: self getRepositories ].
    ^ projectPackage
%

category: 'querying'
method: MetacelloMCProjectSpec
relativeCurrentVersion
    "currentVersion calculated relative to the loadList"

    | vrsn expanded loadList |
    (vrsn := self versionOrNil) == nil
        ifTrue: [ ^ nil ].
    expanded := [ vrsn expandToLoadableSpecNames: (loadList := self loadListForVersion: vrsn) ]
        on: Error
        do: [ :ex | 
            vrsn blessing == #'development'
                ifTrue: [ 
                    self ensureLoadUsing: self loader.
                    vrsn := self versionOrNil.
                    ex return: (vrsn expandToLoadableSpecNames: loadList) ].
            ex pass ].
    ^ self projectClassProject currentVersionAgainst: expanded
%

category: 'private'
method: MetacelloMCProjectSpec
resolveToAllPackagesIn: aVersionSpec visited: visited
    | vrsn |
    visited
        pushProject: [ 
            visited
                visit: self
                doing: [ :spec | 
                    spec ensureProjectLoaded.
                    vrsn := spec version.
                    ^ vrsn
                        allPackagesForSpecNamed: (self loadListForVersion: vrsn)
                        ifAbsent: [ self error: 'invalid loads: spec' ] ] ].
    ^ #()
%

category: 'development support'
method: MetacelloMCProjectSpec
updateForSpawnMethod: sourceSpec
	"This means that this spec was used in a baseline and will be used in a version .... drop all information that isn't useful"
	
	repositories := className := operator := loads := projectPackage := nil.
	sourceSpec ~~ nil ifTrue: [ versionString := sourceSpec versionString ].
%

category: 'development support'
method: MetacelloMCProjectSpec
updatePackageSpec: updatedSpecs
    "Add project copy to updatedSpecs if the current version of the project 
	 is different from the receiver's version"

    | prj currentVersion spec |
    className == nil
        ifTrue: [ ^ self ].
    prj := self projectClassProject.
    (currentVersion := prj currentVersion) = self versionOrNil
        ifTrue: [ ^ self ].
    currentVersion == nil
        ifTrue: [ ^ self ].
    spec := self copy.
    spec versionString: currentVersion versionString.
    updatedSpecs at: spec name put: spec
%

category: 'scripting'
method: MetacelloMCProjectSpec
validateForScriptLoad: aScriptEngine withDefaultVersionString: defaultVersionString withDefaultRepositoryDecription: defaultRepositoryDecription
    | issues callSite |
    issues := OrderedCollection new.
    callSite := #'validateForScriptLoad:withDefaultVersionString:withDefaultRepositoryDecription:'.
    self name
        ifNil: [ 
            issues
                add:
                    (MetacelloValidationError
                        configurationClass: self projectClass
                        reasonCode: #'incompleteProjectSpec'
                        callSite: callSite
                        explanation: 'name field required') ].
    self className
        ifNil: [ 
            issues
                add:
                    (MetacelloValidationError
                        configurationClass: self projectClass
                        reasonCode: #'incompleteProjectSpec'
                        callSite: callSite
                        explanation: 'className field required') ].
    self repositories isEmpty
        ifTrue: [ 
            defaultRepositoryDecription
                ifNotNil: [ self repository: defaultRepositoryDecription ]
                ifNil: [ 
                    issues
                        add:
                            (MetacelloValidationError
                                configurationClass: self projectClass
                                reasonCode: #'incompleteProjectSpec'
                                callSite: callSite
                                explanation: 'repository field required') ] ].
    self validateVersionString: issues withDefaultVersionString: defaultVersionString.
    ^ issues
%

category: 'scripting'
method: MetacelloMCProjectSpec
validateVersionString: issues withDefaultVersionString: defaultVersionString
    self versionString
        ifNil: [ 
            defaultVersionString
                ifNotNil: [ self versionString: defaultVersionString ]
                ifNil: [ 
                    issues
                        add:
                            (MetacelloValidationError
                                configurationClass: self projectClass
                                reasonCode: #'incompleteProjectSpec'
                                callSite:
                                    #'validateForScriptLoad:withDefaultVersionString:withDefaultRepositoryDecription:'
                                explanation: 'version field required') ] ]
%

category: 'querying'
method: MetacelloMCProjectSpec
version
	"Empty version string means use latestVersion or #bleedingEdge"

	self projectClass == nil
		ifTrue: [ ^ nil ].
	^ self versionString == nil
		ifTrue: [ 
			| vrsn |
			"Eventually it will become an error to not specify a project reference version as default: #stable is the preferred default"
			"self deprecated: 'Must specify a project reference version.'."
			self flag: 'deprecate after version 1.0'.
			(vrsn := self projectClassProject latestVersion) == nil
				ifTrue: [ self projectClassProject version: #bleedingEdge ]
				ifFalse: [ vrsn ] ]
		ifFalse: [ self projectClassProject version: self versionString ]
%

category: 'scripting'
method: MetacelloMCProjectSpec
versionForScriptEngine: aMetacelloScriptEngine
    | prj |
    prj := self projectClass ifNil: [ self project ] ifNotNil: [ self projectClassProject ].
    ^ ((prj projectForScriptEngine: aMetacelloScriptEngine) version: self versionString)
        silently: aMetacelloScriptEngine silently;
        ignoreImage: aMetacelloScriptEngine ignoreImage;
        cacheRepository: aMetacelloScriptEngine cacheRepository;
        repositoryOverrides: aMetacelloScriptEngine repositoryOverrides
%

category: 'accessing'
method: MetacelloMCProjectSpec
workingCopy
  ^ self projectPackage workingCopy
%

! Class Implementation for MetacelloMCBaselineOfProjectSpec

! ------------------- Instance methods for MetacelloMCBaselineOfProjectSpec

category: 'scripting'
method: MetacelloMCBaselineOfProjectSpec
asBaselineProjectSpec
    ^ self
%

category: 'scripting'
method: MetacelloMCBaselineOfProjectSpec
asProjectRegistration
    ^ MetacelloProjectRegistration fromMCBaselineProjectSpec: self
%

category: 'scripting'
method: MetacelloMCBaselineOfProjectSpec
canDowngradeTo: aProjectSpec
    "cannot upgrade between baselines"

    ^ false
%

category: 'scripting'
method: MetacelloMCBaselineOfProjectSpec
canUpgradeTo: aProjectSpec
  "cannot upgrade between baselines unless repositories can be upgraded"

  (self repositories canUpgradeTo: aProjectSpec repositories)
    ifTrue: [ ^ true ].
  ^ false
%

category: 'printing'
method: MetacelloMCBaselineOfProjectSpec
configHasVersionString
  ^ false
%

category: 'private'
method: MetacelloMCBaselineOfProjectSpec
constructClassName
    ^ 'BaselineOf' , self name
%

category: 'scripting'
method: MetacelloMCBaselineOfProjectSpec
copyAsConformingProjectSpec: aMetacelloProject
  "Only needed when receiver is a MetacelloMCBaselineOfProjectSpec and aMetacelloProject is a MetacelloCypressBaselineProject"

  ^ aMetacelloProject copyAsConformingBaselineOfProjectSpec: self
%

category: 'mutability'
method: MetacelloMCBaselineOfProjectSpec
copyForRegistration: aMetacelloProjectRegistration onWrite: aBlock
  | copy |
  aMetacelloProjectRegistration
    baselineProjectSpecIfPresent: [ :spec | 
      copy := spec copy.
      aBlock value: copy.
      aMetacelloProjectRegistration baselineProjectSpec: copy ]
    ifAbsent: [ 
      aMetacelloProjectRegistration
        configurationProjectSpecIfPresent: [ :spec | 
          copy := spec copy.
          aBlock value: copy.
          aMetacelloProjectRegistration configurationProjectSpec: copy ]
        ifAbsent: [ aBlock value: nil ] ]
%

category: 'loading'
method: MetacelloMCBaselineOfProjectSpec
determineCurrentVersionForLoad
    ^ self version
%

category: 'loading'
method: MetacelloMCBaselineOfProjectSpec
ensureConfigurationLoaded: vrsn ensured: ensured
  "answer true if the configuration should be reloaded"

  "see Issue #181 for details ... basically we always want to consider loading the baseline from a project reference, especially if the two project specs are not the same..."

  "https://github.com/dalehenrich/metacello-work/issues/181"

  ^ true
%

category: 'loading'
method: MetacelloMCBaselineOfProjectSpec
ensureLoadUsing: aLoader
  "see https://github.com/dalehenrich/metacello-work/issues/244 ... uncoditionally load
   baseline"

  [ super ensureLoadUsing: aLoader ]
    on: MetacelloIgnorePackageLoaded
    do: [ :ex | ex resume: ex packageSpec name = self name ]
%

category: 'printing'
method: MetacelloMCBaselineOfProjectSpec
hasClassName
    ^ className ~~ nil and: [ className ~= self constructClassName ]
%

category: 'testing'
method: MetacelloMCBaselineOfProjectSpec
hasConflictWithConfigurationSpec: projectSpec
  "baseline can be loaded on top of a configuration without a conflict"

  ^ false
%

category: 'testing'
method: MetacelloMCBaselineOfProjectSpec
hasConflictWithProjectSpec: projectSpec
	^ projectSpec hasConflictWithBaselineSpec: self
%

category: 'testing'
method: MetacelloMCBaselineOfProjectSpec
isBaselineOfProjectSpec
	^ true
%

category: 'importing'
method: MetacelloMCBaselineOfProjectSpec
mergeImportLoads: aLoadList
    aLoadList
        ifNotNil: [ :otherLoads | self loads ifNil: [ loads := otherLoads ] ifNotNil: [ loads := loads , otherLoads ] ]
%

category: 'merging'
method: MetacelloMCBaselineOfProjectSpec
mergeRepositoriesSpec: anotherRepositories
  "anotherRepositories wins ... there can ever only be one repository for the 
   baseline to load from"

  "https://github.com/dalehenrich/metacello-work/issues/251"

  self repositories: anotherRepositories
%

category: 'merging'
method: MetacelloMCBaselineOfProjectSpec
mergeSpec: anotherSpec
  ^ super mergeSpec: anotherSpec asBaselineProjectSpec
%

category: 'printing'
method: MetacelloMCBaselineOfProjectSpec
projectLabel
    ^ 'baseline'
%

category: 'querying'
method: MetacelloMCBaselineOfProjectSpec
repositoryBranchName
  "extract a branch name from the repository ... if possible"

  "must parallel implementation of MetacelloMCBaselineProject>>setBaselineRepositoryDescription: we want the same repoSpec"

  | spec repo |
  self repositorySpecs do: [ :repoSpec | spec := repoSpec ].
  repo := spec createRepository.
  ^ repo repositoryBranchName
%

category: 'querying'
method: MetacelloMCBaselineOfProjectSpec
repositoryVersionString
  "extract a version string from the repository ... if possible"

  "must parallel implementation of MetacelloMCBaselineProject>>setBaselineRepositoryDescription: we want the same repoSpec"

  | spec repo |
  self repositorySpecs do: [ :repoSpec | spec := repoSpec ].
  [ repo := spec createRepository ]
    on: Error
    do: [ :ex | ^ '' ].
  ^ repo repositoryVersionString
%

category: 'scripting'
method: MetacelloMCBaselineOfProjectSpec
validateVersionString: issues withDefaultVersionString: ignored
    self versionString
        ifNotNil: [ :vs | 
            | prj |
            prj := self project asBaselineProject.
            vs ~= prj singletonVersionName
                ifTrue: [ 
                    issues
                        add:
                            (MetacelloValidationError
                                configurationClass: self projectClass
                                reasonCode: #'invalidVersionString'
                                callSite:
                                    #'validateForScriptLoad:withDefaultVersionString:withDefaultRepositoryDecription:'
                                explanation:
                                    'version field is incorrect, should be: ' , prj singletonVersionName printString) ] ]
%

category: 'querying'
method: MetacelloMCBaselineOfProjectSpec
version
    self projectClass == nil
        ifTrue: [ ^ nil ].
    ^ self projectClassProject version
%

category: 'construction'
method: MetacelloMCBaselineOfProjectSpec
version: anObject constructor: aVersionConstructor
    self error: 'version: not allowed in a baseline project spec'
%

category: 'querying'
method: MetacelloMCBaselineOfProjectSpec
versionString
    ^ versionString ifNil: [ self version ifNotNil: [:v | v versionString] ]
%

category: 'construction'
method: MetacelloMCBaselineOfProjectSpec
versionString: anObject constructor: aVersionConstructor
    self error: 'versionString: not allowed in a baseline project spec'
%

! Class Implementation for MetacelloMCConfigurationOfProjectSpec

! ------------------- Instance methods for MetacelloMCConfigurationOfProjectSpec

category: 'scripting'
method: MetacelloMCConfigurationOfProjectSpec
asConfigurationProjectSpec
    ^ self
%

category: 'scripting'
method: MetacelloMCConfigurationOfProjectSpec
asProjectRegistration
    ^ MetacelloProjectRegistration fromMCConfigurationProjectSpec: self
%

category: 'private'
method: MetacelloMCConfigurationOfProjectSpec
constructClassName
    ^ 'ConfigurationOf' , self name
%

category: 'mutability'
method: MetacelloMCConfigurationOfProjectSpec
copyForRegistration: aMetacelloProjectRegistration onWrite: aBlock
  | copy |
  aMetacelloProjectRegistration
    configurationProjectSpecIfPresent: [ :spec | 
      copy := spec copy.
      aBlock value: copy.
      aMetacelloProjectRegistration configurationProjectSpec: copy ]
    ifAbsent: [ 
      aMetacelloProjectRegistration
        baselineProjectSpecIfPresent: [ :spec | 
          copy := spec copy.
          aBlock value: copy.
          aMetacelloProjectRegistration baselineProjectSpec: copy ]
        ifAbsent: [ aBlock value: nil ] ]
%

category: 'printing'
method: MetacelloMCConfigurationOfProjectSpec
hasClassName
    ^ className ~~ nil and: [ className ~= self constructClassName ]
%

category: 'testing'
method: MetacelloMCConfigurationOfProjectSpec
hasConflictWithBaselineSpec: projectSpec
  projectSpec name = self name
    ifFalse: [ ^ true ].
  projectSpec project configuration class name asString
    = self project configuration class name asString
    ifFalse: [ ^ true ].
  ^ ((projectSpec repositories isEmpty or: [ self repositories isEmpty ])
    or: [ projectSpec repositories hasNoLoadConflicts: self repositories ]) not
%

category: 'testing'
method: MetacelloMCConfigurationOfProjectSpec
hasConflictWithProjectSpec: projectSpec
	^ projectSpec hasConflictWithConfigurationSpec: self
%

category: 'testing'
method: MetacelloMCConfigurationOfProjectSpec
isConfigurationOfProjectSpec
	^ true
%

category: 'merging'
method: MetacelloMCConfigurationOfProjectSpec
mergeSpec: anotherSpec
    ^ super mergeSpec: anotherSpec asConfigurationProjectSpec
%

category: 'printing'
method: MetacelloMCConfigurationOfProjectSpec
projectLabel
    ^ 'configuration'
%

! Class Implementation for MetacelloMCNamelessProjectSpec

! ------------------- Instance methods for MetacelloMCNamelessProjectSpec

category: 'scripting'
method: MetacelloMCNamelessProjectSpec
asProjectSpecForVersion: vrsn
  "I'm a reference spec and my project comes from the project I'm loaded from, not the project I am loading"

  "https://github.com/dalehenrich/metacello-work/issues/331"

  | proj spec |
  proj := vrsn ifNil: [ ^ self ] ifNotNil: [ vrsn versionSpec project ].
  spec := proj configurationOfProjectSpecClass for: proj.
  self copyForScriptingInto: spec.
  spec loader: self loader.
  ^ spec
%

category: 'mutability'
method: MetacelloMCNamelessProjectSpec
copyForRegistration: aMetacelloProjectRegistration onWrite: aBlock
	self error: 'Should be converting to configuration spec for the registration, so we should not get here'
%

! Class Implementation for MetacelloRepositoriesSpec

! ------------------- Instance methods for MetacelloRepositoriesSpec

category: 'actions'
method: MetacelloRepositoriesSpec
add: aStringOrSpec

	aStringOrSpec addToMetacelloRepositories: self
%

category: 'scripting'
method: MetacelloRepositoriesSpec
canUpgradeTo: aMetacelloRepositoriesSpec
  | repositorySpecs anotherRepositorySpecs |
  repositorySpecs := MetacelloPlatform current
    sort: self map values
    with: [ :a :b | a description <= b description ].
  anotherRepositorySpecs := MetacelloPlatform current
    sort: aMetacelloRepositoriesSpec map values
    with: [ :a :b | a description <= b description ].
  repositorySpecs size ~= anotherRepositorySpecs size
    ifTrue: [ ^ false ].
  1 to: repositorySpecs size do: [ :index | 
    | repoSpec anotherRepoSpec |
    repoSpec := repositorySpecs at: index.
    anotherRepoSpec := anotherRepositorySpecs at: index.
    (repoSpec canUpgradeTo: anotherRepoSpec)
      ifTrue: [ ^ true ] ].
  ^ false
%

category: 'scripting'
method: MetacelloRepositoriesSpec
compareEqual: aMetacelloProjectSpec
  | repositorySpecs anotherRepositorySpecs |
  repositorySpecs := (MetacelloPlatform current
    sort: self map values
    with: [ :a :b | a description <= b description ])
    collect: [ :each | each description ].
  anotherRepositorySpecs := (MetacelloPlatform current
    sort: aMetacelloProjectSpec map values
    with: [ :a :b | a description <= b description ])
    collect: [ :each | each description ].
  ^ repositorySpecs = anotherRepositorySpecs
%

category: 'printing'
method: MetacelloRepositoriesSpec
configMethodCascadeOn: aStream indent: indent
  | repositorySpecs |
  repositorySpecs := MetacelloPlatform current
    sort: self map values
    with: [ :a :b | a description <= b description ].
  repositorySpecs size = 1
    ifTrue: [ repositorySpecs first configMethodCascadeOn: aStream lastCascade: true ]
    ifFalse: [ 
      1 to: repositorySpecs size do: [ :index | 
        indent + 1 timesRepeat: [ aStream tab ].
        (repositorySpecs at: index)
          configMethodCascadeOn: aStream
          lastCascade: index >= repositorySpecs size ] ]
%

category: 'printing'
method: MetacelloRepositoriesSpec
configMethodOn: aStream indent: indent
  indent timesRepeat: [ aStream tab ].
  aStream
    nextPutAll: 'spec';
    cr.
  self configMethodCascadeOn: aStream indent: indent
%

category: 'scripting'
method: MetacelloRepositoriesSpec
hasNoLoadConflicts: aMetacelloRepositoriesSpec
  | repositorySpecs anotherRepositorySpecs |
  repositorySpecs := MetacelloPlatform current
    sort: self map values
    with: [ :a :b | a description <= b description ].
  anotherRepositorySpecs := MetacelloPlatform current
    sort: aMetacelloRepositoriesSpec map values
    with: [ :a :b | a description <= b description ].
  repositorySpecs size ~= anotherRepositorySpecs size
    ifTrue: [ ^ false ].
  1 to: repositorySpecs size do: [ :index | 
    | repoSpec anotherRepoSpec |
    repoSpec := repositorySpecs at: index.
    anotherRepoSpec := anotherRepositorySpecs at: index.
    (repoSpec hasNoLoadConflicts: anotherRepoSpec)
      ifFalse: [ ^ false ] ].
  ^ true
%

category: 'actions'
method: MetacelloRepositoriesSpec
merge: aRepositorySpec

	aRepositorySpec mergeIntoMetacelloRepositories: self
%

category: 'scripting'
method: MetacelloRepositoriesSpec
metacelloRegistrationHash
  ^ ((MetacelloPlatform current
    sort: self map values
    with: [ :a :b | a description <= b description ])
    collect: [ :each | each description ]) hash
%

category: 'actions'
method: MetacelloRepositoriesSpec
remove: aRepositorySpec

	aRepositorySpec removeFromMetacelloRepositories: self
%

category: 'actions'
method: MetacelloRepositoriesSpec
repository: aStringOrSpec

	aStringOrSpec addToMetacelloRepositories: self
%

category: 'construction'
method: MetacelloRepositoriesSpec
repository: anObject constructor: aVersionConstructor
    aVersionConstructor repositoryForRepositories: anObject
%

category: 'actions'
method: MetacelloRepositoriesSpec
repository: description username: username password: password

	| spec |
	spec := 
		(self project repositorySpec)
			description: description;
			username: username;
			password: password;
			yourself.
	self addMember: 
		(self addMember 
			name: spec name;
			spec: spec;
			yourself)
%

category: 'construction'
method: MetacelloRepositoriesSpec
repository: aString username: username password: password constructor: aVersionConstructor
    aVersionConstructor repositoryForRepositories: aString username: username password: password
%

! Class Implementation for MetacelloMCProject

! ------------------- Instance methods for MetacelloMCProject

category: 'scripting'
method: MetacelloMCProject
asBaselineProject
    ^ MetacelloMCBaselineProject new
%

category: 'scripting'
method: MetacelloMCProject
asConfigurationProject
    ^ self
%

category: 'spec classes'
method: MetacelloMCProject
baselineOfProjectSpecClass
    ^ MetacelloMCBaselineOfProjectSpec
%

category: 'spec classes'
method: MetacelloMCProject
configurationOfProjectSpecClass
    ^ MetacelloMCConfigurationOfProjectSpec
%

category: 'repository creation'
method: MetacelloMCProject
createRepository: aRepositorySpec

	^ MetacelloPlatform current createRepository: aRepositorySpec
%

category: 'development support'
method: MetacelloMCProject
fetchProject
	"fetch the latest version of the configuration package"
	
	^self fetchProject: MetacelloLoaderPolicy new
%

category: 'development support'
method: MetacelloMCProject
goferBranch: branchName project: commitMessage
    | pkgSpec |
    pkgSpec := self projectPackage.
    pkgSpec file: pkgSpec name , '.' , branchName.
    ^ pkgSpec goferBranchPackage: branchName message: commitMessage
%

category: 'development support'
method: MetacelloMCProject
goferCommitProject: commitMessage

	| pkgSpec |
	(pkgSpec := self projectPackage) == nil ifTrue: [ ^false ].
	^pkgSpec goferCommitPackage: commitMessage
%

category: 'development support'
method: MetacelloMCProject
packagesNeedSaving: aVersionString
	"Answer a collection of associations (package -> repository) representing the packages 
	 reachable from this project that need to be saved"

	| packages |
	packages := Set new.
	(self version: aVersionString) spec 
		packagesNeedSavingVisited: (Set with: self configuration class name asString)
		into: packages.
	^packages
%

category: 'spec classes'
method: MetacelloMCProject
packageSpec

	^self packageSpecClass for: self
%

category: 'spec classes'
method: MetacelloMCProject
packageSpecClass

	^MetacelloPackageSpec
%

category: 'private'
method: MetacelloMCProject
pragmaKeywords

	^super pragmaKeywords, #(projectPackage:attribute: packages:attribute: repositories:attribute: )
%

category: 'scripting'
method: MetacelloMCProject
projectForScriptEngine: aMetacelloScriptEngine unconditionalLoad: aBool
    ^ aMetacelloScriptEngine getConfigurationProjectUnconditionalLoad: aBool
%

category: 'spec classes'
method: MetacelloMCProject
projectSpecClass
	^ MetacelloMCNamelessProjectSpec
%

category: 'spec classes'
method: MetacelloMCProject
repositoriesSpec

	^self repositoriesSpecClass for: self
%

category: 'spec classes'
method: MetacelloMCProject
repositoriesSpecClass

	^MetacelloRepositoriesSpec
%

category: 'spec classes'
method: MetacelloMCProject
repositorySpec

	^self repositorySpecClass for: self
%

category: 'spec classes'
method: MetacelloMCProject
repositorySpecClass

	^MetacelloRepositorySpec
%

category: 'development support'
method: MetacelloMCProject
saveProject

	| pkgSpec |
	(pkgSpec := self projectPackage) == nil ifTrue: [ ^false ].
	^pkgSpec savePackage
%

category: 'as yet unclassified'
method: MetacelloMCProject
setBaselineRepositoryDescription: aListOrRepositoryDescriptions
    "noop "
%

category: 'repository updating'
method: MetacelloMCProject
updatePackageRepositoriesFor: versionString

	| versionSpec |
	(versionSpec := (self version: versionString) versionSpec) packageSpecsInLoadOrder do: [:pkgSpec |
		pkgSpec updatePackageRepositoriesFor: versionSpec ].
	^true
%

category: 'development support'
method: MetacelloMCProject
updateProject
	"load the latest version of the configuration package"

	"WARNING: don't forget to refresh your project instance after doing an #updateProject, 
	 otherwise your instance won't reflect the info in the freshly loaded configuration"
	
	^self updateProject: MetacelloLoaderPolicy new
%

category: 'spec classes'
method: MetacelloMCProject
versionSpecClass

	^MetacelloMCVersionSpec
%

! Class Implementation for MetacelloMCBaselineProject

! ------------------- Class methods for MetacelloMCBaselineProject

category: 'accessing'
classmethod: MetacelloMCBaselineProject
singletonVersionName
    ^ 'baseline'
%

category: 'accessing'
classmethod: MetacelloMCBaselineProject
versionConstructorClass
    ^ MetacelloBaselineConstructor
%

! ------------------- Instance methods for MetacelloMCBaselineProject

category: 'scripting'
method: MetacelloMCBaselineProject
asBaselineProject
    ^ self
%

category: 'scripting'
method: MetacelloMCBaselineProject
asConfigurationProject
    ^ MetacelloMCProject new
%

category: 'private'
method: MetacelloMCBaselineProject
attributes
  ^ self configuration projectPlatformAttributesWith: super attributes
%

category: 'versions'
method: MetacelloMCBaselineProject
bleedingEdge
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
currentVersion
    ^ self version isSomethingLoaded
        ifTrue: [ self version ]
        ifFalse: [ nil ]
%

category: 'versions'
method: MetacelloMCBaselineProject
currentVersionAgainst: resolvedPackageAndProjectNames
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
development
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
hasVersion: versionString
    ^ versionString = 'baseline'
%

category: 'versions'
method: MetacelloMCBaselineProject
lastVersion
    ^ self version
%

category: 'versions'
method: MetacelloMCBaselineProject
latestVersion
    ^ self version
%

category: 'versions'
method: MetacelloMCBaselineProject
latestVersion: blessing
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
latestVersionMatching: versionPatternString
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
latestVersionMatching: versionPatternString excludedBlessings: excluded
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
latestVersionMatching: versionPatternString includedBlessings: included
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
latestVersionMatching: versionPatternString includedBlessings: included excludedBlessings: excludedBlessings
    ^ nil
%

category: 'scripting'
method: MetacelloMCBaselineProject
projectForScriptEngine: aMetacelloScriptEngine unconditionalLoad: aBool
  "see https://github.com/dalehenrich/metacello-work/issues/244 ... uncoditionally load
   baseline"

  ^ aMetacelloScriptEngine getBaselineProjectUnconditionalLoad: true
%

category: 'as yet unclassified'
method: MetacelloMCBaselineProject
setBaselineRepositoryDescription: aListOrRepositoryDescriptions
    "set #version repositories to < aListOrRepositoryDescriptions>. Should be the directory where the BaselineOf is located."

    aListOrRepositoryDescriptions do: [:desc | self version spec repository: desc]
%

category: 'versions'
method: MetacelloMCBaselineProject
singletonVersionName
    ^ self class singletonVersionName
%

category: 'versions'
method: MetacelloMCBaselineProject
stableVersion
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
symbolicVersionSymbols
    ^ nil
%

category: 'versions'
method: MetacelloMCBaselineProject
version
    ^ self version: self singletonVersionName
%

category: 'versions'
method: MetacelloMCBaselineProject
versions
  ^ [ {(self version)} ]
    on: MetacelloVersionDoesNotExistError
    do: [ :ex | ^ #() ]
%

! Class Implementation for MetacelloRepositorySpec

! ------------------- Instance methods for MetacelloRepositorySpec

category: 'adding'
method: MetacelloRepositorySpec
addToMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec addMember 
			name: self name;
			spec: self;
			yourself)
%

category: 'mc support'
method: MetacelloRepositorySpec
canUpgradeTo: aMetacelloRepositorySpec
  self description = aMetacelloRepositorySpec description
    ifTrue: [ ^ true ].
  (#('github' 'gitorious' 'bitbucket') includes: self type)
    ifTrue: [ ^ self createRepository canUpgradeTo: aMetacelloRepositorySpec createRepository ].
  ^ false
%

category: 'printing'
method: MetacelloRepositorySpec
configMethodCascadeOn: aStream lastCascade: lastCascade

	aStream nextPutAll: 'repository: ', self description printString.
	(self username isEmpty not or: [ self password isEmpty not ])
		ifTrue: [ aStream nextPutAll: ' username: ', self username printString, ' password: ', self password printString ].
	lastCascade ifFalse: [ aStream nextPut: $;; cr ].
%

category: 'printing'
method: MetacelloRepositorySpec
configMethodOn: aStream indent: indent
  indent timesRepeat: [ aStream tab ].
  aStream nextPutAll: 'spec '.
  self configMethodCascadeOn: aStream lastCascade: true
%

category: 'querying'
method: MetacelloRepositorySpec
description

	^description
%

category: 'accessing'
method: MetacelloRepositorySpec
description: aString

	description := aString
%

category: 'private'
method: MetacelloRepositorySpec
extractTypeFromDescription

	^MetacelloPlatform current extractTypeFromDescription: self description
%

category: 'mc support'
method: MetacelloRepositorySpec
hasNoLoadConflicts: aMetacelloRepositorySpec
  self description = aMetacelloRepositorySpec description
    ifTrue: [ ^ true ].
  self type = aMetacelloRepositorySpec type
    ifFalse: [ 
      "if the types are different then we don't need to create the repoitory to 
       know that there will be conflicts"
      ^ false ].
  (#('github' 'gitorious' 'bitbucket') includes: self type)
    ifTrue: [ 
      ^ self createRepository
        hasNoLoadConflicts: aMetacelloRepositorySpec createRepository ].
  ^ false
%

category: 'private'
method: MetacelloRepositorySpec
mergeIntoMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec mergeMember 
			name: self name;
			spec: self;
			yourself)
%

category: 'merging'
method: MetacelloRepositorySpec
mergeMap
    | map |
    map := super mergeMap.
    map at: #'description' put: description.
    map at: #'type' put: self type.
    map at: #'username' put: username.
    map at: #'password' put: password.
    ^ map
%

category: 'querying'
method: MetacelloRepositorySpec
name

	^self description
%

category: 'querying'
method: MetacelloRepositorySpec
password

	password == nil ifTrue: [ password := '' ].
	^password
%

category: 'accessing'
method: MetacelloRepositorySpec
password: aString

	password := aString
%

category: 'private'
method: MetacelloRepositorySpec
removeFromMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec removeMember 
			name: self name;
			spec: self;
			yourself)
%

category: 'querying'
method: MetacelloRepositorySpec
type

	type == nil ifTrue: [ type := self extractTypeFromDescription ].
	^type
%

category: 'accessing'
method: MetacelloRepositorySpec
type: aString

	type := aString
%

category: 'querying'
method: MetacelloRepositorySpec
username

	username == nil ifTrue: [ username := '' ].
	^username
%

category: 'accessing'
method: MetacelloRepositorySpec
username: aString

	username := aString
%

! Class Implementation for MetacelloCommonMCSpecLoader

! ------------------- Class methods for MetacelloCommonMCSpecLoader

category: 'utilities'
classmethod: MetacelloCommonMCSpecLoader
nameComponentsFrom: aVersionName
  | ar |
  ar := (aVersionName last isDigit and: [ (aVersionName indexOf: $.) > 0 ])
    ifFalse: [ 
      {aVersionName.
      ''.
      0.
      aVersionName.
      self} ]
    ifTrue: [ 
      | vrsn str |
      str := (aVersionName copyAfterLast: $-) copyAfterLast: $..
      vrsn := str isEmpty
        ifTrue: [ 0 ]
        ifFalse: [ str asInteger ].
      {(aVersionName copyUpToLast: $-).
      ((aVersionName copyAfterLast: $-) copyUpTo: $.).
      vrsn.
      aVersionName.
      self} ].
  ^ ar
%

category: 'accessing'
classmethod: MetacelloCommonMCSpecLoader
retryPackageResolution
    "if true, 
		errors during #retryingResolvePackageSpecReferences:gofer: are caught and 
		the resolution is retried 3 times. After the thrid time, a MetacelloPackageSpecResolutionError
		is thrown
	if false,
		an error during #retryingResolvePackageSpecReferences:gofer: will be passed,
		likely resulting in a walkback ... useful for debugging."

    RetryPackageResolution ifNil: [ RetryPackageResolution := true ].
    ^ RetryPackageResolution
%

category: 'accessing'
classmethod: MetacelloCommonMCSpecLoader
retryPackageResolution: aBool
    RetryPackageResolution := aBool
%

! ------------------- Instance methods for MetacelloCommonMCSpecLoader

category: 'versionInfo'
method: MetacelloCommonMCSpecLoader
ancestorsFor: packageSpec

	| cacheKey vi |
	cacheKey := packageSpec file.
	^MetacelloPlatform current
		stackCacheFor: #ancestors
		at: cacheKey
		doing: [ :cache | 
			vi := packageSpec ancestors.
			cache at: cacheKey put: vi ].
%

category: 'versionInfo'
method: MetacelloCommonMCSpecLoader
currentVersionInfoFor: packageSpec

	| cacheKey vi |
	cacheKey := packageSpec file.
	^MetacelloPlatform current
		stackCacheFor: #currentVersionInfo
		at: cacheKey
		doing: [ :cache | 
			vi := packageSpec currentVersionInfo.
			cache at: cacheKey put: vi ].
%

category: 'actions'
method: MetacelloCommonMCSpecLoader
doingLoads: aBlock
	"escape mechanism for recording and null loaders to skip doing loaderlike things"
	
	aBlock value
%

category: 'actions'
method: MetacelloCommonMCSpecLoader
doLoad

	self subclassResponsibility
%

category: 'testing'
method: MetacelloCommonMCSpecLoader
ensureForDevelopment
  ^ true
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
ensureSpecLoader
	^ self
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
fetchingSpecLoader

	^self
%

category: 'testing'
method: MetacelloCommonMCSpecLoader
hasRepositoryOverrides

	^self loaderPolicy hasRepositoryOverrides
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
ignoreImage

	^self loaderPolicy ignoreImage
%

category: 'initialize-release'
method: MetacelloCommonMCSpecLoader
initialize

	self loaderPolicy
%

category: 'actions'
method: MetacelloCommonMCSpecLoader
load
	| repos |
	repos := self repositoriesFrom: self spec repositorySpecs.
	^ self loadType == #atomic
		ifTrue: [self atomicLoadPackageSpecs: self spec packageSpecsInLoadOrder repositories: repos]
		ifFalse: ["assume #linear"
			self linearLoadPackageSpecs: self spec packageSpecsInLoadOrder repositories: repos ]
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
loaderPolicy

	loaderPolicy == nil ifTrue: [ loaderPolicy := MetacelloLoaderPolicy new ].
	^loaderPolicy
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
loaderPolicy: anObject
	loaderPolicy := anObject
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
loadingSpecLoader

	^self
%

category: 'packages'
method: MetacelloCommonMCSpecLoader
nameComponentsFrom: aVersionName

	^self class nameComponentsFrom: aVersionName
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
operator

	operator == nil ifTrue: [ ^#= ].
	^operator
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
operator: aSymbol

	operator := aSymbol
%

category: 'doits'
method: MetacelloCommonMCSpecLoader
postLoad: packageOrVersionSpec
	"subclassResponsibility, but it gets called during an upgrade, so leave it as NOOP"
%

category: 'doits'
method: MetacelloCommonMCSpecLoader
preLoad: packageOrVersionSpec

	self subclassResponsibility
%

category: 'repositories'
method: MetacelloCommonMCSpecLoader
repositoriesFrom: aMetacelloMVRepositorySpecs

	^self repositoriesFrom: aMetacelloMVRepositorySpecs ignoreOverrides: false
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
repositoryMap

	^self loaderPolicy repositoryMap
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
shouldDisablePackageCache

	disablePackageCache == nil ifTrue: [ disablePackageCache := false ].
	^ disablePackageCache
%

category: 'accessing'
method: MetacelloCommonMCSpecLoader
shouldDisablePackageCache: anObject
	disablePackageCache := anObject
%

! Class Implementation for MetacelloFetchingMCSpecLoader

! ------------------- Instance methods for MetacelloFetchingMCSpecLoader

category: 'accessing'
method: MetacelloFetchingMCSpecLoader
actionLabel

	^'Fetching '
%

category: 'versionInfo'
method: MetacelloFetchingMCSpecLoader
ancestorsFor: packageSpec

	^self loadData
		ancestorsFor: packageSpec 
		ifAbsent: [ super ancestorsFor: packageSpec ]
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
atomicLoadPackageSpecs: packageSpecs repositories: repositories

	self loaderPolicy 
		pushAtomicLoadDirectivesDuring: [ super linearLoadPackageSpecs: packageSpecs repositories: repositories ]
		for: self
%

category: 'accessing'
method: MetacelloFetchingMCSpecLoader
cacheRepository

	^self loaderPolicy cacheRepository
%

category: 'versionInfo'
method: MetacelloFetchingMCSpecLoader
currentVersionInfoFor: packageSpec

	^self loadData
		currentVersionInfoFor: packageSpec 
		ifAbsent: [ super currentVersionInfoFor: packageSpec ]
%

category: 'actions'
method: MetacelloFetchingMCSpecLoader
doLoad

	self loaderPolicy copy load
%

category: 'accessing'
method: MetacelloFetchingMCSpecLoader
ensuredMap

	^self loaderPolicy ensuredMap
%

category: 'accessing'
method: MetacelloFetchingMCSpecLoader
ensureSpecLoader
	^ (MetacelloEnsureFetchingMCSpecLoader on: self spec)
		shouldDisablePackageCache: self shouldDisablePackageCache;
		loaderPolicy: self loaderPolicy; "explicitly share the loaderPolicy"
		yourself
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
explicitLoadPackageSpecs: packageSpecs repositories: repositories
	
	| directive |
	directive := self loaderPolicy 
		pushExplicitLoadDirectivesDuring: [ super linearLoadPackageSpecs: packageSpecs repositories: repositories ]
		for: self.
	directive explicitLoadWithPolicy: self loaderPolicy.
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
linearLoadPackageSpecs: packageSpecs repositories: repositories
	
	self loaderPolicy 
		pushLinearLoadDirectivesDuring: [ super linearLoadPackageSpecs: packageSpecs repositories: repositories ]
		 for: self
%

category: 'accessing'
method: MetacelloFetchingMCSpecLoader
loadData

	^self loaderPolicy loadData
%

category: 'accessing'
method: MetacelloFetchingMCSpecLoader
loadDirective

	^self loaderPolicy loadDirective
%

category: 'doits'
method: MetacelloFetchingMCSpecLoader
postLoad: packageOrVersionSpec

	(MetacelloDirective postLoadSpec: packageOrVersionSpec loader: self)  addTo: self loadDirective
%

category: 'doits'
method: MetacelloFetchingMCSpecLoader
preLoad: packageOrVersionSpec

	(MetacelloDirective preLoadSpec: packageOrVersionSpec loader: self) addTo: self loadDirective
%

category: 'printing'
method: MetacelloFetchingMCSpecLoader
printOn: aStream
	super printOn: aStream.
	aStream nextPut: $(.
	self loadDirective printOn: aStream.
	aStream nextPut: $)
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
resolvePackageSpec: packageSpec cachedGofer: gofer

	|  versionReference references |
	versionReference := packageSpec goferLoaderReference.
	(references := versionReference resolveAllWith: gofer) isEmpty 
		ifTrue: [ ^nil ].
	^references last asMetacelloCachingResolvedReference.
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
scheduleFetchFor: packageSpec cachedReference: reference
	"reference already in the cache during fetch ...no need to schedule fetch"

	^ self
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
scheduleFetchFor: packageSpec externalReference: reference
  ^ self
    scheduleFetchFor: packageSpec
    reference: reference
    message:
      'Fetched -> ' , reference name , ' --- '
        , reference repository repositoryDescription , ' --- '
        , reference repository description
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
scheduleFetchFor: packageSpec nearestReference: reference
	"latest version in repository already matches the cached reference...no need to schedule fetch"

	^ self
%

category: 'private'
method: MetacelloFetchingMCSpecLoader
scheduleFetchFor: packageSpec reference: reference message: message
	self loaderPolicy resetCacheGofer.
	self preLoad: packageSpec.
	(MetacelloDirective loadPackage: packageSpec externalReference: reference loader: self) addTo: self loadDirective.
	self postLoad: packageSpec.
	Transcript
		cr;
		show: message
%

! Class Implementation for MetacelloEnsureFetchingMCSpecLoader

! ------------------- Instance methods for MetacelloEnsureFetchingMCSpecLoader

category: 'accessing'
method: MetacelloEnsureFetchingMCSpecLoader
ensureSpecLoader
	^ self
%

category: 'private'
method: MetacelloEnsureFetchingMCSpecLoader
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
method: MetacelloEnsureFetchingMCSpecLoader
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

! Class Implementation for MetacelloNullRecordingMCSpecLoader

! ------------------- Instance methods for MetacelloNullRecordingMCSpecLoader

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
actionLabel

	^'Recording '
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
afterLoads

	afterLoads == nil ifTrue: [ afterLoads := OrderedCollection new ].
	^afterLoads
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
beforeLoads

	beforeLoads == nil ifTrue: [ beforeLoads := OrderedCollection new ].
	^beforeLoads
%

category: 'versionInfo'
method: MetacelloNullRecordingMCSpecLoader
currentVersionInfoFor: packageSpec

	^self loadData
		currentVersionInfoFor: packageSpec 
		ifAbsent: [ nil ]
%

category: 'actions'
method: MetacelloNullRecordingMCSpecLoader
doingLoads: aBlock
	"escape mechanism for recording and null loaders to skip doing loaderlike things"
%

category: 'testing'
method: MetacelloNullRecordingMCSpecLoader
ensureForDevelopment

	^false
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
evalDoits

	evalDoits == nil ifTrue: [ evalDoits := false ].
	^evalDoits
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
evalDoits: aBool

	evalDoits := aBool
%

category: 'actions'
method: MetacelloNullRecordingMCSpecLoader
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
method: MetacelloNullRecordingMCSpecLoader
loadedPackages

	| packages |
	packages := OrderedCollection new.
	self loadDirective packageDirectivesDo: [:directive | packages add: directive file ].
	^packages
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
loadedRepositories

	| repos |
	repos := OrderedCollection new.
	self repositoryMap values collect: [:coll | repos addAll: coll ].
	^repos
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
loadingSpecLoader

	^self
%

category: 'actions'
method: MetacelloNullRecordingMCSpecLoader
loadPackageDirective: aPackageLoadDirective gofer: aGofer
	"Noop"
%

category: 'actions'
method: MetacelloNullRecordingMCSpecLoader
loadPackageDirectives: pkgLoads gofer: aGofer
	"Noop"
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
packages

	| packages |
	packages := OrderedCollection new.
	self loadDirective packageDirectivesDo: [:directive | packages add: directive spec ].
	^packages
%

category: 'doits'
method: MetacelloNullRecordingMCSpecLoader
postLoad: packageOrVersionSpec

	self evalDoits ifFalse: [ ^self ].
	packageOrVersionSpec postLoadDoItBlock ~~ nil
		ifTrue: [ self afterLoads add: packageOrVersionSpec name, ' load' ].
	super postLoad: packageOrVersionSpec
%

category: 'doits'
method: MetacelloNullRecordingMCSpecLoader
preLoad: packageOrVersionSpec

	self evalDoits ifFalse: [ ^self ].
	packageOrVersionSpec preLoadDoItBlock ~~ nil
		ifTrue: [ self beforeLoads add: packageOrVersionSpec name, ' load' ].
	super preLoad: packageOrVersionSpec
%

category: 'accessing'
method: MetacelloNullRecordingMCSpecLoader
recordingSpecLoader

	^self
%

! Class Implementation for MetacelloMCVersion

! ------------------- Instance methods for MetacelloMCVersion

category: 'querying'
method: MetacelloMCVersion
allPackagesForSpecNamed: aStringOrArray
	"resolves list of packages associated with the named spec.
	   If the spec is a packages, answer a list including the package and the transitive closure on 
			its #requires: and #includes: fields.
	   If the spec is a project, answer a list of the packages associated with the project,
			following the transitive closure on packages reachable starting with the #loads: field.
	   If the spec is a group, answers the list of packages in the #includes: field of the group. 
			Groups in the #includes: field are expanded following the transitive closure on groups"
	"In essence, this query answers the list of all packages that would be loaded if the package 
		named <aString> were loaded."
	"If there is no spec named <aString>, answers an empty list"

	^self allPackagesForSpecNamed: aStringOrArray ifAbsent: [ ^#() ]
%

category: 'querying'
method: MetacelloMCVersion
allPackagesForSpecNamed: aStringOrArray ifAbsent: aBlock
	"resolves list of packages associated with the named spec.
	   If the spec is a packages, answer a list including the package and the transitive closure on 
			its #requires: and #includes: fields.
	   If the spec is a project, answer a list of the packages associated with the project,
			following the transitive closure on packages reachable starting with the #loads: field.
	   If the spec is a group, answers the list of packages in the #includes: field of the group. 
			Groups in the #includes: field are expanded following the transitive closure on groups"
	"In essence, this query answers the list of all packages that would be loaded if the package 
		named <aString> were loaded."
	"If there is no spec named <aString>, aBlock is evaluated"

	^aStringOrArray 
		resolvePackageSpecsNamedForMetacelloMCVersion: self 
		visited: MetacelloVisitedPackages new 
		ifAbsent: aBlock
%

category: 'private'
method: MetacelloMCVersion
allPackagesForSpecs: pkgSpecs visited: visited

 
	| coll |
	coll := Dictionary new.
	pkgSpecs
		do: [:pkgSpec | (pkgSpec resolveToAllPackagesIn: self spec visited: visited)
				do: [:pkg | coll at: pkg name put: pkg ]].
	^ coll values asOrderedCollection
%

category: 'accessing'
method: MetacelloMCVersion
cacheRepository: repository 
	"by default cacheRepository is an MCDictionaryRepository"
	
	self loaderPolicy cacheRepository: repository
%

category: 'querying'
method: MetacelloMCVersion
currentlyLoadedClassesInVersion

	^self spec currentlyLoadedClassesInVersion
%

category: 'querying'
method: MetacelloMCVersion
currentlyLoadedExtensionClassesInVersion

	^self spec currentlyLoadedExtensionClassesInVersion
%

category: 'querying'
method: MetacelloMCVersion
defaultPackageNamesToLoad
	"Answer the list of packages and projects to be loaded --> packages already loaded"
	
	^ self defaultPackageNamesToLoad: self spec defaultPackageNames
%

category: 'querying'
method: MetacelloMCVersion
defaultPackageNamesToLoad: defaultList
	"Answer the list of packages and projects to be loaded: packages already loaded plust defaultList"
	
	^ self packageAndProjectNamesToLoad: defaultList loader: self loader
%

category: 'private'
method: MetacelloMCVersion
doFetchRequiredFromArray: anArray

	| oldPolicy oldBypassProgress displayString |
	displayString := self versionNumber printString, ' of ', self spec projectLabel.
	Transcript cr; show: 'Fetching ', displayString, '...'.
	oldPolicy := loaderPolicy. 
	oldBypassProgress := MetacelloPlatform current bypassProgressBars.
	self loaderPolicy silently ifTrue: [ MetacelloPlatform current bypassProgressBars: true ].
	[ 	| ans |
		ans := self fetchRequiredFromArray: anArray.
		Transcript cr; show: '...finished ', self versionNumber printString.
		^ans ]
			ensure: [ 
				MetacelloPlatform current bypassProgressBars: oldBypassProgress.
				loaderPolicy := oldPolicy ]
%

category: 'private'
method: MetacelloMCVersion
doLoadRequiredFromArray: anArray

	| displayString oldPolicy oldBypassProgress |
	displayString := self versionNumber printString, ' of ', self spec projectLabel.
	Transcript cr; show: 'Loading ', displayString, '...'.
	oldPolicy := loaderPolicy. 
	oldBypassProgress := MetacelloPlatform current bypassProgressBars.
	self loaderPolicy silently ifTrue: [ MetacelloPlatform current bypassProgressBars: true ].
	[	| fetchLoader |
		fetchLoader := self fetchRequiredFromArray: (self defaultPackageNamesToLoad: anArray).
		MetacelloPlatform current
			do:  [  fetchLoader doLoad ]
			displaying: 'Loading ', displayString.
		Transcript cr; show: '...finished ', self versionNumber printString.
		^fetchLoader ]
		ensure: [ 
			MetacelloPlatform current bypassProgressBars: oldBypassProgress.
			loaderPolicy := oldPolicy ]
%

category: 'private'
method: MetacelloMCVersion
doRecordRequiredFromArray: anArray

	| originalLoader oldPolicy displayString oldBypassProgress |
	displayString := self versionNumber printString, ' of ', self spec projectLabel.
	Transcript cr; show: 'Recording ', displayString, '...'.
	originalLoader := self versionSpec loader.
	oldPolicy := loaderPolicy. 
	oldBypassProgress := MetacelloPlatform current bypassProgressBars.
	self loaderPolicy silently ifTrue: [ MetacelloPlatform current bypassProgressBars: true ].
	[	MetacelloPlatform current
			do:  [ | ans |
				self versionSpec loader: originalLoader recordingSpecLoader.
				ans := (self executeLoadFromArray: anArray) copy.
				Transcript cr; show: '...finished ', self versionNumber printString.
				^ans ]
			displaying: 'Recording ', displayString ]
				ensure: [
					MetacelloPlatform current bypassProgressBars: oldBypassProgress.
					self versionSpec loader: originalLoader.
					loaderPolicy := oldPolicy ]
%

category: 'private'
method: MetacelloMCVersion
executeLoadFromArray: anArray

	| loader |
	loader := MetacelloMCVersionSpecLoader on: self spec.
	loader required: anArray.
	loaderPolicy notNil ifTrue: [ loader loaderPolicy: loaderPolicy ].
	^loader load
%

category: 'actions'
method: MetacelloMCVersion
fetch

	^self doFetchRequiredFromArray: self spec defaultPackageNames
%

category: 'actions'
method: MetacelloMCVersion
fetch: required

	^required fetchRequiredForMetacelloMCVersion: self
%

category: 'private'
method: MetacelloMCVersion
fetchRequiredFromArray: anArray
	| originalLoader displayString newLoader |
	originalLoader := self versionSpec loader.
	newLoader := originalLoader fetchingSpecLoader.
	displayString := newLoader actionLabel , self versionNumber printString , ' of ' , self spec projectLabel.
	MetacelloPlatform current
		do: [ 
			[ 
			self versionSpec loader: newLoader.
			MetacelloPlatform current
				useStackCacheDuring: [ :dict | ^ self executeLoadFromArray: anArray ]
				defaultDictionary: Dictionary new ] ensure: [ self versionSpec loader: originalLoader ] ]
		displaying: displayString
%

category: 'accessing'
method: MetacelloMCVersion
ignoreImage: aBool 
	"by default ignoreImage is false"
	
	self loaderPolicy ignoreImage: aBool
%

category: 'actions'
method: MetacelloMCVersion
load

	^self doLoadRequiredFromArray: self spec defaultPackageNames
%

category: 'actions'
method: MetacelloMCVersion
load: required

	^required loadRequiredForMetacelloMCVersion: self
%

category: 'private'
method: MetacelloMCVersion
loader: aLoader

	self versionSpec loader: aLoader
%

category: 'accessing'
method: MetacelloMCVersion
loaderPolicy

	loaderPolicy == nil ifTrue: [ loaderPolicy := MetacelloLoaderPolicy new ].
	^ loaderPolicy
%

category: 'accessing'
method: MetacelloMCVersion
loaderPolicy: anObject
	loaderPolicy := anObject
%

category: 'private'
method: MetacelloMCVersion
loadRequiredFromArray: anArray

	| displayString |
	displayString := 'Loading ', self versionNumber printString, ' of ', self spec projectLabel.
	MetacelloPlatform current
		do: [ ^self executeLoadFromArray: anArray ]
		displaying: displayString
%

category: 'querying'
method: MetacelloMCVersion
packageAndProjectNamesToLoad: defaultList loader: aLoader
  "Answer the list of packages and projects to be loaded: packages already loaded plust defaultList"

  | loadedPackageNames projectMap loadedProjectNames |
  loadedPackageNames := ((self packages
    select: [ :pkg | pkg isPackageLoaded: aLoader ])
    collect: [ :pkg | pkg name ]) asSet.
  loadedPackageNames addAll: defaultList.
  projectMap := Dictionary new.
  self projects
    do: [ :prj | 
      prj className ~~ nil
        ifTrue: [ 
          | coll loaded |
          coll := projectMap
            at: prj className
            ifAbsent: [ 
              coll := OrderedCollection new.
              projectMap at: prj className put: coll.
              coll ].
          (loaded := prj loadedPackageNames: aLoader) isEmpty
            ifFalse: [ coll add: prj -> (loaded -> prj loadPackageList) ] ] ].
  loadedProjectNames := Set new.
  projectMap
    keysAndValuesDo: [ :prjClass :coll | 
      coll size <= 1
        ifTrue: [ coll do: [ :assoc | loadedProjectNames add: assoc key name ] ]
        ifFalse: [ 
          "multiple project references against the same configuration ... only count project as loaded
				 if there is an exact match for loaded projects...
				 See http://code.google.com/p/metacello/issues/detail?id=86"
          coll
            do: [ :assoc | 
              | loaded packageList |
              loaded := assoc value key.	"loaded packages from project"
              packageList := assoc value value.	"loadlist for project"
              (packageList difference: loaded) isEmpty
                ifTrue: [ loadedProjectNames add: assoc key name ] ] ] ].
  loadedPackageNames addAll: loadedProjectNames.
  loadedPackageNames isEmpty
    ifTrue: [ ^ self spec defaultPackageNames ].
  ^ loadedPackageNames
%

category: 'querying'
method: MetacelloMCVersion
packages
	"Answers the list of packages associated with this version"

	| packages |
	packages := OrderedCollection new.
	self spec projectDo: [:ignored | ] packageDo: [:pkg | packages add: pkg ] groupDo: [:ignored | ].
	^packages
%

category: 'querying'
method: MetacelloMCVersion
packagesForSpecNamed: aString
	"resolves list of packages associated with the named spec.
	   If the spec is a packages, answer a list including only the package. #requires: and #includes:
			fields in the package are ignored.
	   If the spec is a project, answers an empty list.
	   If the spec is a group, answers the list of packages in the #includes: field of the group. 
			Groups in the #includes: field are expanded following the transitive closure on groups"
	"If there is no spec named <aString>, answers an empty list"

	^self packagesForSpecNamed: aString ifAbsent: [ ^#() ]
%

category: 'querying'
method: MetacelloMCVersion
packagesForSpecNamed: aString ifAbsent: aBlock
	"resolves list of packages associated with the named spec.
	   If the spec is a packages, answer a list including only the package. #requires: and #includes:
			fields in the package are ignored.
	   If the spec is a project, answers an empty list.
	   If the spec is a group, answers the list of packages in the #includes: field of the group. 
			Groups in the #includes: field are expanded following the transitive closure on groups"
	"If there is no spec named <aString>, aBlock is evaluated"

	| pkgSpec |
	pkgSpec := self spec packageNamed: aString ifAbsent: aBlock.
	^pkgSpec resolveToPackagesIn: self spec visited: MetacelloVisitedPackages new
%

category: 'actions'
method: MetacelloMCVersion
record

	^self doRecordRequiredFromArray: self spec defaultPackageNames
%

category: 'actions'
method: MetacelloMCVersion
record: required

	^required recordRequiredForMetacelloMCVersion: self
%

category: 'accessing'
method: MetacelloMCVersion
repositoryOverrides: repositoriesCollection 

	self loaderPolicy overrideRepositories: repositoriesCollection
%

category: 'accessing'
method: MetacelloMCVersion
silently: aBool 
	"by default silently is false"
	
	self loaderPolicy silently: aBool
%

! Class Implementation for MetacelloMCVersionSpec

! ------------------- Instance methods for MetacelloMCVersionSpec

category: 'accessing'
method: MetacelloMCVersionSpec
computeVersionStatus: matchBlock
	self computeVersionStatus: (self expandToLoadableSpecNames: #('ALL')) matchBlock: matchBlock
%

category: 'accessing'
method: MetacelloMCVersionSpec
computeVersionStatus: resolvedPackageAndProjectNames matchBlock: matchBlock
	| status |
	status := resolvedPackageAndProjectNames isNil
		ifTrue: [ self isPartiallyCurrent ]
		ifFalse: [ self isPartiallyCurrentAgainst: resolvedPackageAndProjectNames ].
	status isAllLoadedToSpec: matchBlock.
	status isLoadedToSpec: matchBlock.
	status isLoadedMatchConstraints: matchBlock.
	status isSomethingLoaded: matchBlock
%

category: 'printing'
method: MetacelloMCVersionSpec
configMethodOn: aStream last: last indent: indent
  | spec hasRepositories hasPackageSpecs hasImport |
  hasRepositories := (spec := self repositoriesSpec) ~~ nil
    and: [ spec list isEmpty not ].
  hasImport := self import ~~ nil.
  hasPackageSpecs := false.
  self packagesSpec list
    do: [ :member | 
      member spec
        projectDo: [ :proj | 
          member spec name ~~ nil
            ifTrue: [ hasPackageSpecs := true ] ]
        packageDo: [ :package | 
          member spec name ~~ nil
            ifTrue: [ hasPackageSpecs := true ] ]
        groupDo: [ :group | 
          member spec name ~~ nil
            ifTrue: [ hasPackageSpecs := true ] ] ].
  self
    configMethodBasicOn: aStream
    last: (hasRepositories | hasPackageSpecs | hasImport) not
    indent: indent.
  hasImport
    ifTrue: [ 
      self
        configMethodValueOn: aStream
        for: self import
        selector: 'import:'
        last: (hasRepositories | hasPackageSpecs) not
        indent: indent ].
  hasRepositories
    ifTrue: [ 
      spec map values size = 1
        ifTrue: [ 
          indent timesRepeat: [ aStream tab ].
          aStream
            nextPutAll: 'spec repository: ';
            nextPutAll: spec map values first description printString , '.'.
          hasPackageSpecs
            ifTrue: [ aStream cr ] ]
        ifFalse: [ 
          self
            configMethodOn: aStream
            for: spec
            selector: 'repositories:'
            last: hasPackageSpecs not
            indent: indent ] ].
  self configPackagesSpecMethodOn: aStream indent: indent.
  last
    ifFalse: [ aStream cr ]
%

category: 'printing'
method: MetacelloMCVersionSpec
configSpawnMethodOn: aStream indent: indent

	super configSpawnMethodOn: aStream indent: indent.
	self configPackagesSpecMethodOn: aStream indent: indent.
%

category: 'querying'
method: MetacelloMCVersionSpec
difference: otherVersionSpec
    "Return a dictionary of additions, removals and modifications"

    | report myProjectSpecs myPackageSpecs otherProjectSpecs otherPackageSpecs |
    report := MetacelloVersionDiffReport new.
    myProjectSpecs := Dictionary new.
    myPackageSpecs := Dictionary new.
    self
        projectDo: [ :projectSpec | myProjectSpecs at: projectSpec name put: projectSpec ]
        packageDo: [ :packageSpec | myPackageSpecs at: packageSpec name put: packageSpec ]
        groupDo: [ :ignored |  ].
    otherProjectSpecs := Dictionary new.
    otherPackageSpecs := Dictionary new.
    otherVersionSpec
        projectDo: [ :projectSpec | otherProjectSpecs at: projectSpec name put: projectSpec ]
        packageDo: [ :packageSpec | otherPackageSpecs at: packageSpec name put: packageSpec ]
        groupDo: [ :ignored |  ].
    myProjectSpecs
        valuesDo: [ :myProjectSpec | 
            | otherProjectSpec |
            otherProjectSpec := otherProjectSpecs at: myProjectSpec name ifAbsent: [  ].
            otherProjectSpec == nil
                ifTrue: [ 
                    report removals
                        at: myProjectSpec name
                        put:
                            {(myProjectSpec versionString).
                            ''} ]
                ifFalse: [ 
                    myProjectSpec versionString = otherProjectSpec versionString
                        ifFalse: [ 
                            report modifications
                                at: myProjectSpec name
                                put:
                                    {(myProjectSpec versionString).
                                    (otherProjectSpec versionString)} ] ] ].
    otherProjectSpecs
        valuesDo: [ :otherProjectSpec | 
            (myProjectSpecs at: otherProjectSpec name ifAbsent: [  ]) == nil
                ifTrue: [ 
                    report additions
                        at: otherProjectSpec name
                        put:
                            {''.
                            (otherProjectSpec versionString)} ] ].
    myPackageSpecs
        valuesDo: [ :myPackageSpec | 
            | otherPackageSpec |
            otherPackageSpec := otherPackageSpecs at: myPackageSpec name ifAbsent: [  ].
            otherPackageSpec == nil
                ifTrue: [ 
                    report removals
                        at: myPackageSpec name
                        put:
                            {(myPackageSpec file).
                            ''} ]
                ifFalse: [ 
                    myPackageSpec file = otherPackageSpec file
                        ifFalse: [ 
                            report modifications
                                at: myPackageSpec name
                                put:
                                    {(myPackageSpec file).
                                    (otherPackageSpec file)} ] ] ].
    otherPackageSpecs
        valuesDo: [ :otherPackageSpec | 
            (myPackageSpecs at: otherPackageSpec name ifAbsent: [  ]) == nil
                ifTrue: [ 
                    report additions
                        at: otherPackageSpec name
                        put:
                            {''.
                            (otherPackageSpec file)} ] ].
    ^ report
%

category: 'development support'
method: MetacelloMCVersionSpec
forceUpdatedPackageSpecs

	| updatedSpecs mcLoader |
	updatedSpecs := Dictionary new.
	mcLoader := self loader.
	self packages map valuesDo: [:pkg | pkg forceUpdatePackageSpec: updatedSpecs using: mcLoader].
	^updatedSpecs
%

category: 'testing'
method: MetacelloMCVersionSpec
isAllLoadedToSpec
	"all projects and packages are loaded and match specification"

	self isPartiallyCurrent isAllLoadedToSpec: [ :ignored | ^ true ].
	^ false
%

category: 'testing'
method: MetacelloMCVersionSpec
isAllLoadedToSpecAgainst: resolvedPackageAndProjectNames
	"all projects and packages are loaded and match specification"

	(self isPartiallyCurrentAgainst: resolvedPackageAndProjectNames) isAllLoadedToSpec: [ :ignored | ^ true ].
	^ false
%

category: 'testing'
method: MetacelloMCVersionSpec
isLoadedMatchConstraints
	"all loaded projects and packages match constraints (at least one package loaded)"
	
	self isPartiallyCurrent isLoadedMatchConstraints: [ :ignored | ^ true ].
	^ false
%

category: 'testing'
method: MetacelloMCVersionSpec
isLoadedMatchConstraintsAgainst: resolvedPackageAndProjectNames
	"all loaded projects and packages match constraints (at least one package loaded)"

	(self isPartiallyCurrentAgainst: resolvedPackageAndProjectNames) isLoadedMatchConstraints: [ :ignored | ^ true ].
	^ false
%

category: 'testing'
method: MetacelloMCVersionSpec
isLoadedToSpec
	"all loaded projects and packages match specifications (at least one package loaded)"
	
	self isPartiallyCurrent isLoadedToSpec: [ :ignored | ^ true ].
	^ false
%

category: 'testing'
method: MetacelloMCVersionSpec
isLoadedToSpecAgainst: resolvedPackageAndProjectNames
	"all loaded projects and packages match specifications (at least one package loaded)"

	(self isPartiallyCurrentAgainst: resolvedPackageAndProjectNames) isLoadedToSpec: [ :ignored | ^ true ].
	^ false
%

category: 'testing'
method: MetacelloMCVersionSpec
isPartiallyCurrent

	^self isPartiallyCurrentAgainst: (self expandToLoadableSpecNames: #('ALL'))
%

category: 'testing'
method: MetacelloMCVersionSpec
isPossibleBaseline

	self 
		projectDo: [:prj | prj isPossibleBaseline ifFalse: [ ^false ]] 
		packageDo: [:pkg | pkg isPackageLoaded ifFalse: [ ^false ]] 
		groupDo: [:ignored | ].
	^true
%

category: 'testing'
method: MetacelloMCVersionSpec
isSomethingLoaded
	"at least one package loaded"
	
	self isPartiallyCurrent isSomethingLoaded: [ :ignored | ^ true ].
	^ false
%

category: 'testing'
method: MetacelloMCVersionSpec
isSomethingLoadedAgainst: resolvedPackageAndProjectNames
	"at least one package loaded"

	(self isPartiallyCurrentAgainst: resolvedPackageAndProjectNames) isSomethingLoaded: [ :ignored | ^ true ].
	^ false
%

category: 'merging'
method: MetacelloMCVersionSpec
mergeMap
    | map |
    map := super mergeMap.
    map at: #'repositories' put: self repositories.
    ^ map
%

category: 'merging'
method: MetacelloMCVersionSpec
mergeSpec: anotherSpec
    | newSpec map anotherRepositories |
    newSpec := super mergeSpec: anotherSpec.
    map := anotherSpec mergeMap.
    (anotherRepositories := map at: #'repositories') isEmpty not
        ifTrue: [ 
            newSpec
                repositories:
                    (self repositories isEmpty
                        ifTrue: [ anotherRepositories ]
                        ifFalse: [ self repositories mergeSpec: anotherRepositories ]) ].
    ^ newSpec
%

category: 'merging'
method: MetacelloMCVersionSpec
nonOverridable
    ^ super nonOverridable , #(#'repositories')
%

category: 'construction'
method: MetacelloMCVersionSpec
package: aString constructor: aVersionConstructor
    aVersionConstructor packageForVersion: aString
%

category: 'construction'
method: MetacelloMCVersionSpec
package: aString overrides: aBlock constructor: aVersionConstructor
    aVersionConstructor packageForVersion: aString overrides: aBlock
%

category: 'construction'
method: MetacelloMCVersionSpec
package: packageName with: aBlockOrString constructor: aVersionConstructor
    aVersionConstructor packageForVersion: packageName with: aBlockOrString
%

category: 'querying'
method: MetacelloMCVersionSpec
packageNames
    "leave reference to packages for upgrade purposes"

    packages == nil
        ifTrue: [ ^ super packageNames ].
    ^ self packages map keys asSet
%

category: 'accessing'
method: MetacelloMCVersionSpec
packages
    "leave reference to packages for upgrade purposes"

    packages == nil
        ifTrue: [ ^ super packages ].
    ^ packages
%

category: 'development support'
method: MetacelloMCVersionSpec
packagesNeedSavingVisited: visitedProjects into: aCollection

	self packages map valuesDo: [:pkg | pkg packagesNeedSavingVisited: visitedProjects using: self repositories map values into: aCollection ].
%

category: 'querying'
method: MetacelloMCVersionSpec
packageSpecsInLoadOrderForMap: packageMap
  | loadOrder pkgs packageNames importNames importSpec importProjectSpecs importProjectNameMap |
  loadOrder := self packageSpecsInLoadOrder.
  importNames := (packageNames := (packageMap values
    collect: [ :pkg | pkg name ]) asSet) copy.
  (self import isNil and: [ self importArray isNil ])
    ifTrue: [ ^ loadOrder select: [ :pkg | packageNames includes: pkg name ] ].
  loadOrder do: [ :pkg | importNames remove: pkg name ifAbsent: [  ] ].
  pkgs := OrderedCollection new.
  importProjectSpecs := Dictionary new.
  importProjectNameMap := Dictionary new.
  importArray
    ifNotNil: [ 
      loadOrder
        do: [ :pkg | 
          importArray
            do: [ :assoc | 
              assoc key = pkg name
                ifTrue: [ 
                  importProjectSpecs at: pkg name put: pkg.
                  (assoc value select: [ :each | importNames includes: each ])
                    do: [ :each | 
                      (importProjectNameMap
                        at: pkg name
                        ifAbsent: [ importProjectNameMap at: pkg name put: Set new ])
                        add: each ] ] ] ] ].
  self import
    ifNotNil: [ 
      loadOrder
        do: [ :pkg | 
          pkg name = self import
            ifTrue: [ 
              importProjectSpecs at: pkg name put: pkg.
              importProjectNameMap at: pkg name put: importNames ] ] ].
  loadOrder
    do: [ :pkg | 
      (packageNames includes: pkg name)
        ifTrue: [ pkgs add: pkg ].
      importProjectSpecs
        at: pkg name
        ifPresent: [ :importProjectSpec | 
          "insert the imports at this point"
          (importProjectNameMap at: pkg name ifAbsent: [ #() ])
            do: [ :importedName | 
              pkgs
                add:
                  (importSpec := importProjectSpec copy
                    name: importedName;
                    mergeImportLoads: {importedName};
                    yourself).
              importSpec projectReference name: importedName ] ] ].
  ^ pkgs
%

category: 'copying'
method: MetacelloMCVersionSpec
postCopy
    super postCopy.
    repositories := repositories copy.
    packages := packages copy	"leave reference to packages for upgrade purposes"
%

category: 'construction'
method: MetacelloMCVersionSpec
removePackage: aString constructor: aVersionConstructor
    aVersionConstructor removePackageForVersion: aString
%

category: 'accessing'
method: MetacelloMCVersionSpec
repositories
	repositories == nil ifTrue: [ repositories := self project repositoriesSpec ].
	^ repositories
%

category: 'accessing'
method: MetacelloMCVersionSpec
repositories: anObject
	repositories := anObject
%

category: 'accessing'
method: MetacelloMCVersionSpec
repositoriesSpec

	^self repositories
%

category: 'accessing'
method: MetacelloMCVersionSpec
repository: aString
	self repositoriesSpec add: aString
%

category: 'accessing'
method: MetacelloMCVersionSpec
repository: aString username: username password: password
	self repositoriesSpec repository: aString username: username password: password
%

category: 'loading'
method: MetacelloMCVersionSpec
repositorySpecs

	^self repositories map values
%

category: 'enumerating'
method: MetacelloMCVersionSpec
specListProjectDo: projectBlock packageDo: packageBlock groupDo: groupBlock

	self packages specListDo: [:pkgSpec |
		pkgSpec projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock ]
%

category: 'enumerating'
method: MetacelloMCVersionSpec
specsNamed: packageAndProjectNames projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock

	| map |
	map := self packages map.
	packageAndProjectNames do: [:name | | pkgSpec |
		(pkgSpec := map at: name ifAbsent: [ ]) ~~ nil
			ifTrue: [ pkgSpec projectDo: projectBlock packageDo: packageBlock groupDo: groupBlock ]]
%

category: 'development support'
method: MetacelloMCVersionSpec
updatedPackageSpecs

	| updatedSpecs mcLoader |
	updatedSpecs := Dictionary new.
	mcLoader := self loader.
	self packages map valuesDo: [:pkg | pkg updatePackageSpec: updatedSpecs using: mcLoader].
	^updatedSpecs
%

category: 'development support'
method: MetacelloMCVersionSpec
updateForSpawnMethod: sourceSpec
	"This means that this spec was used in a baseline and will be used in a version .... drop all information that isn't useful"
	
	repositories := preLoadDoIt := postLoadDoIt := nil.
%

category: 'private'
method: MetacelloMCVersionSpec
versionClass

	^MetacelloMCVersion
%

! Class Implementation for MetacelloMCVersionValidator

! ------------------- Class methods for MetacelloMCVersionValidator

category: 'private'
classmethod: MetacelloMCVersionValidator
populateReasonCodeDescriptions
    "update MetacelloMCVersionValidator class comment to include any changes to descriptions"

    | dict |
    dict := super populateReasonCodeDescriptions.
    dict
        at: #'notDevelopmentVersion'
            put: 'the symbolic version #development refers to a non-development literal version.';
        at: #'loadWarning' put: 'Warning signalled during load [load validation].';
        at: #'stableDevelopmentVersion'
            put: 'a version whose blessing is #development has been declared as a #stable version.'.	"Warnings"
    dict
        at: #'loadDeprecation' put: 'deprecation warning signalled while loading configuration [load validation].';
        at: #'missingRecommendedProjectSpecField'
            put:
                'missing recommended fields in project reference (versionString). The versionString should be specified so that #bleedingEdge loads will be predictable and repeatable.';
        at: #'noLoadableVersions' put: 'no non #baseline versions defined in configuration.';
        at: #'noTests' put: 'no test cases defined in loaded configuration [load validation].';
        at: #'noVersionSpecified'
            put:
                'no version defined for the project reference or package. The version specified in the baseline or the latest version of the project or package in the repository will be used.';
        at: #'testDeprecation'
            put: 'deprecation warning signalled while running configuration tests [load validation].'.	"Critical Warnings"
    dict
        at: #'loadError' put: 'error occured while loading configuration [load validation].';
        at: #'testFailures' put: 'test failures while running tests [load validation].'.	"Errors"
    ^ dict
%

category: 'instance creation'
classmethod: MetacelloMCVersionValidator
validateConfigurationLoad: configurationClass
	^ ((self new)
		configurationClass: configurationClass;
		yourself) validateProjectLoad
%

category: 'instance creation'
classmethod: MetacelloMCVersionValidator
validateConfigurationLoad: configurationClass version: versionString
	^self validateConfigurationLoad: configurationClass version: versionString loads: #()
%

category: 'instance creation'
classmethod: MetacelloMCVersionValidator
validateConfigurationLoad: configurationClass version: versionString loads: loadList
	^ ((self new)
		configurationClass: configurationClass;
		yourself) validateProjectVersionLoad: versionString loads: loadList
%

! ------------------- Instance methods for MetacelloMCVersionValidator

category: 'private'
method: MetacelloMCVersionValidator
criticalWarningReasonCodes
	^ super criticalWarningReasonCodes
		, #(#noLoadableVersions #noTests #testDeprecation #loadDeprecation #noVersionSpecified #'missingRecommendedProjectSpecField' )
%

category: 'private'
method: MetacelloMCVersionValidator
errorReasonCodes
	^ super errorReasonCodes, #(#loadError #testFailures )
%

category: 'validation'
method: MetacelloMCVersionValidator
validateBaselineVersionSpec: versionSpec
    | projectNames packageNames groupNames versionMessage |
    self
        validateDoIts: versionSpec
        versionString: versionSpec versionString
        errorMessage: ' version ' , versionSpec versionString printString.
    projectNames := Set new.
    packageNames := Set new.
    groupNames := Set new.
    versionMessage := ' in version ' , versionSpec versionString printString.
    versionSpec
        projectDo: [ :projectSpec | 
            projectSpec resolveProjectSpec className == nil
                ifTrue: [ 
                    self
                        recordValidationError:
                            'Missing required field (className:) for project reference ' , projectSpec name printString , ' in version '
                                , versionSpec versionString printString
                        versionString: versionSpec versionString
                        callSite: #'validateBaselineVersionSpec:'
                        reasonCode: #'incompleteProjectSpec' ].
            projectSpec resolveProjectSpec versionString == nil
                ifTrue: [ 
                    self
                        recordValidationCriticalWarning:
                            'Missing recommended field (versionString:) for project reference ' , projectSpec name printString , ' in version '
                                , versionSpec versionString printString
                        versionString: versionSpec versionString
                        callSite: #'validateBaselineVersionSpec:'
                        reasonCode: #'missingRecommendedProjectSpecField' ].
            projectSpec hasRepository
                ifTrue: [ 
                    (self recurse and: [ projectSpec versionString ~~ nil ])
                        ifTrue: [ 
                            | project |
                            projectSpec resolveProjectSpec ensureProjectLoaded.
                            project := self
                                validateProjectCreationFrom: projectSpec resolveProjectSpec projectClass
                                onError: [ :ex | 
                                    self
                                        recordValidationError: 'Error creating project reference: ' , ex description
                                        versionString: versionSpec versionString
                                        callSite: #'validateBaselineVersionSpec:'
                                        reasonCode: #'projectCreationError'.
                                    nil ].
                            project ~~ nil
                                ifTrue: [ 
                                    self validationReport
                                        addAll:
                                            (self class
                                                validateProject: project
                                                version: projectSpec versionString
                                                debug: self debug
                                                recurse: self recurse
                                                visited: self visited) ] ] ]
                ifFalse: [ 
                    self
                        recordValidationError:
                            'Missing required field (repository:) for project reference ' , projectSpec name printString , ' in version '
                                , versionSpec versionString printString
                        versionString: versionSpec versionString
                        callSite: #'validateBaselineVersionSpec:'
                        reasonCode: #'incompleteProjectSpec' ].
            self
                validateDoIts: projectSpec
                versionString: versionSpec versionString
                errorMessage: projectSpec name printString , versionMessage.
            (projectNames includes: projectSpec name)
                ifTrue: [ 
                    self
                        recordValidationError:
                            'Duplicate projects named' , projectSpec name printString , versionMessage
                        versionString: versionSpec versionString
                        callSite: #'validateBaselineVersionSpec:'
                        reasonCode: #'duplicateNames' ]
                ifFalse: [ projectNames add: projectSpec name ] ]
        packageDo: [ :packageSpec | 
            self
                validateDoIts: packageSpec
                versionString: versionSpec versionString
                errorMessage: packageSpec name printString , versionMessage.
            (packageNames includes: packageSpec name)
                ifTrue: [ 
                    self
                        recordValidationError:
                            'Duplicate packages named' , packageSpec name printString , versionMessage
                        versionString: versionSpec versionString
                        callSite: #'validateBaselineVersionSpec:'
                        reasonCode: #'duplicateNames' ]
                ifFalse: [ projectNames add: packageSpec name ] ]
        groupDo: [ :groupSpec | 
            (groupNames includes: groupSpec name)
                ifTrue: [ 
                    self
                        recordValidationError: 'Duplicate groups named' , groupSpec name printString , versionMessage
                        versionString: versionSpec versionString
                        callSite: #'validateBaselineVersionSpec:'
                        reasonCode: #'duplicateNames' ]
                ifFalse: [ projectNames add: groupSpec name ] ].
    (packageNames intersection: projectNames) notEmpty
        ifTrue: [ 
            self
                recordValidationError: 'Names duplicated between packages and projects' , versionMessage
                versionString: versionSpec versionString
                callSite: #'validateBaselineVersionSpec:'
                reasonCode: #'shadowedNames' ].
    (groupNames intersection: projectNames) notEmpty
        ifTrue: [ 
            self
                recordValidationError: 'Names duplicated between groups and projects' , versionMessage
                versionString: versionSpec versionString
                callSite: #'validateBaselineVersionSpec:'
                reasonCode: #'shadowedNames' ].
    (projectNames intersection: packageNames) notEmpty
        ifTrue: [ 
            self
                recordValidationError: 'Names duplicated between projects and packages' , versionMessage
                versionString: versionSpec versionString
                callSite: #'validateBaselineVersionSpec:'
                reasonCode: #'shadowedNames' ].
    (groupNames intersection: packageNames) notEmpty
        ifTrue: [ 
            self
                recordValidationError: 'Names duplicated between groups and packages' , versionMessage
                versionString: versionSpec versionString
                callSite: #'validateBaselineVersionSpec:'
                reasonCode: #'shadowedNames' ].
    (projectNames intersection: groupNames) notEmpty
        ifTrue: [ 
            self
                recordValidationError: 'Names duplicated between projects and groups' , versionMessage
                versionString: versionSpec versionString
                callSite: #'validateBaselineVersionSpec:'
                reasonCode: #'shadowedNames' ].
    (packageNames intersection: groupNames) notEmpty
        ifTrue: [ 
            self
                recordValidationError: 'Names duplicated between packages and groups' , versionMessage
                versionString: versionSpec versionString
                callSite: #'validateBaselineVersionSpec:'
                reasonCode: #'shadowedNames' ]
%

category: 'loading'
method: MetacelloMCVersionValidator
validateProjectLoad
	| issues project versions currentVersion collectedIssues |
	(issues := self validateProject select: [ :issue | issue isError ]) notEmpty
		ifTrue: [ ^ issues ].
	project := self configurationClass project.
	collectedIssues := issues.
	versions := project versions
		select: [ :version | 
			validationReport := nil.
			version blessing ~~ #broken
				and: [ 
					version blessing ~~ #baseline
						and: [ (issues := (self validateProject: project version: version versionString) select: [ :issue | issue isCritical ]) isEmpty ] ] ].
	validationReport := collectedIssues.
	versions isEmpty
		ifTrue: [ 
			self
				recordValidationCriticalWarning: 'No non #baseline versions  available  in ' , self configurationClass name asString
				callSite: #validateProjectLoad
				reasonCode: #noLoadableVersions.
			^ self validationReport ].
	(currentVersion := project currentVersion) ~~ nil
		ifTrue: [ 
			| index |
			index := versions indexOf: currentVersion.
			versions := versions copyFrom: index to: versions size ].
	versions do: [ :version | self validateCleanLoadAndTestsForVersion: version loads: #('ALL') ].
	^ self validationReport
%

category: 'loading'
method: MetacelloMCVersionValidator
validateProjectVersionLoad: versionString loads: loadList
	| issues project version |
	(issues := (self validateProjectVersion: versionString) select: [ :issue | issue isError ]) notEmpty
		ifTrue: [ ^ issues ].
	project := self configurationClass project.
	version := project
		version: versionString
		ifAbsent: [ 
			self
				recordValidationError: 'Version ' , versionString printString , ' does not exist.'
				callSite: #validateProjectVersionLoad:loads:
				reasonCode: #cannotResolveVersion.
			^ self validationReport ].
	version blessing = #broken
		ifTrue: [ self error: 'The specified version is #broken' ].
	self validateCleanLoadAndTestsForVersion: version loads: loadList.
	^ self validationReport
%

category: 'loading'
method: MetacelloMCVersionValidator
validateVersionLoad: version loads: loadList
	| list |
	list := loadList asOrderedCollection.
	list isEmpty
		ifTrue: [ list add: 'default' ].
	(version groups includes: 'Tests')
		ifTrue: [ list add: 'Tests' ].
	version load: list
%

category: 'private'
method: MetacelloMCVersionValidator
validateVersionSpec: versionSpec
  versionSpec blessing value == #'broken'
    ifTrue: [ ^ self ].
  versionSpec
    projectDo: [ :projectSpec | 
      | referencedProjectSpec |
      projectSpec versionString == nil
        ifTrue: [ 
          self
            recordValidationCriticalWarning:
              'No version specified for the project reference ' , projectSpec name printString
                , ' in version ' , versionSpec versionString printString
            versionString: versionSpec versionString
            callSite: #'validateVersionSpec:'
            reasonCode: #'noVersionSpecified' ].
      referencedProjectSpec := projectSpec referencedSpec.
      versionSpec blessing value == #'baseline'
        ifTrue: [ 
          referencedProjectSpec hasRepository
            ifTrue: [ 
              ((referencedProjectSpec file indexOfSubCollection: referencedProjectSpec className) = 1)
                ifFalse: [ 
                  self
                    recordValidationCriticalWarning:
                      'The class name of project ' , referencedProjectSpec className printString
                        , ' does not match the file name '
                        , referencedProjectSpec file printString
                        , ' in version ' , versionSpec versionString printString
                    versionString: versionSpec versionString
                    callSite: #'validateVersionSpec:'
                    reasonCode: #'projectClassNameFileMismatch' ] ]
            ifFalse: [ 
              self
                recordValidationError:
                  'The specification for the project reference ' , projectSpec name printString
                    , ' in version ' , versionSpec versionString printString
                    , ' is missing the required repository field'
                versionString: versionSpec versionString
                callSite: #'validateVersionSpec:'
                reasonCode: #'incompleteProjectSpec' ] ].
      referencedProjectSpec ensureProjectLoaded
        ifTrue: [ 
          [ projectSpec version ]
            on: MetacelloVersionDoesNotExistError
            do: [ :ex | 
              | explanation |
              explanation := projectSpec versionString == nil
                ifTrue: [ 'the default version' ]
                ifFalse: [ 'version ' , projectSpec versionString printString ].
              self
                recordValidationError:
                  'Cannot resolve ' , explanation , ' for the project reference '
                    , projectSpec name printString , ' in version '
                    , versionSpec versionString printString
                versionString: versionSpec versionString
                callSite: #'validateVersionSpec:'
                reasonCode: #'cannotResolveVersion' ] ] ]
    packageDo: [ :packageSpec | 
      ((packageSpec file indexOfSubCollection: packageSpec name) = 1)
        ifFalse: [ 
          self
            recordValidationCriticalWarning:
              'The name of package ' , packageSpec name printString
                , ' does not match the file name '
                , packageSpec file printString , ' in version '
                , versionSpec versionString printString
            versionString: versionSpec versionString
            callSite: #'validateVersionSpec:'
            reasonCode: #'packageNameMismatch' ].
      packageSpec file = packageSpec name
        ifTrue: [ 
          self
            recordValidationCriticalWarning:
              'No version specified for the package ' , packageSpec name printString
                , ' in version ' , versionSpec versionString printString
            versionString: versionSpec versionString
            callSite: #'validateVersionSpec:'
            reasonCode: #'noVersionSpecified' ] ]
    groupDo: [ :ignored |  ].
  self validateBaselineVersionSpec: versionSpec
%

category: 'private'
method: MetacelloMCVersionValidator
validateVersionSpecForSymbolicVersion: versionSpec symbolicVersion: symbolicVersionString
	| blessing |
	versionSpec blessing value == #broken
		ifTrue: [ ^ self ].
	blessing := versionSpec blessing value.
	(symbolicVersionString == #development and: [ blessing ~~ #development ])
		ifTrue: [ 
			self
				recordValidationWarning:
					'Symbolic version ' , symbolicVersionString printString , ' refers to a version' , versionSpec versionString printString
						, ' whose blessing ' , blessing printString , ' is not #development'
				versionString: versionSpec versionString
				callSite: #validateVersionSpecForSymbolicVersion:symbolicVersion:
				reasonCode: #notDevelopmentVersion ]
%

category: 'loading'
method: MetacelloMCVersionValidator
validateVersionTests: version
	| testCases cleanTests |
	testCases := IdentitySet new.
	cleanTests := true.
	version currentlyLoadedClassesInVersion
		do: [ :class | 
			((class inheritsFrom: TestCase) and: [ class isAbstract not ])
				ifTrue: [ testCases add: class ] ].
	testCases
		do: [ :testCase | 
			| testResults |
			testResults := testCase suite run.
			testResults defects notEmpty
				ifTrue: [ 
					self
						recordValidationError:
							'Test failures in tests ' , testCase name asString , ' for ' , version versionString printString , ' in '
								, self configurationClass name asString , ' ' , testResults printString
						versionString: version versionString
						callSite: #validateVersionTests:
						reasonCode: #testFailures.
					cleanTests := false ] ].
	testCases isEmpty
		ifTrue: [ 
			self
				recordValidationCriticalWarning:
					'No test cases for ' , version versionString printString , ' in ' , self configurationClass name asString
				versionString: version versionString
				callSite: #validateVersionTests:
				reasonCode: #noTests.
			cleanTests := false ].
	^ cleanTests
%

category: 'private'
method: MetacelloMCVersionValidator
warningReasonCodes
	^ super warningReasonCodes, #(#loadWarning #notDevelopmentVersion #stableDevelopmentVersion)
%

! Class Implementation for MetacelloDirective

! ------------------- Class methods for MetacelloDirective

category: 'instance creation'
classmethod: MetacelloDirective
loader: aLoader

	^self new
		loader: aLoader
%

category: 'instance creation'
classmethod: MetacelloDirective
loadPackage: aPackageSpec externalReference: externalReference loader: aLoader

	^MetacelloPackageLoadDirective new
		spec: aPackageSpec externalReference: externalReference  loader: aLoader
%

category: 'instance creation'
classmethod: MetacelloDirective
loadPackage: aPackageSpec resolvedReference: resolvedReference loader: aLoader
  ^ MetacelloPackageLoadDirective new
    spec: aPackageSpec
    resolvedReference: resolvedReference
    loader: aLoader
%

category: 'instance creation'
classmethod: MetacelloDirective
postLoadSpec: packageOrVersionSpec loader: aLoader

	^MetacelloPostLoadDirective new
		spec: packageOrVersionSpec loader: aLoader
%

category: 'instance creation'
classmethod: MetacelloDirective
preLoadSpec: packageOrVersionSpec loader: aLoader

	^MetacelloPreLoadDirective new
		spec: packageOrVersionSpec loader: aLoader
%

! ------------------- Instance methods for MetacelloDirective

category: 'actions'
method: MetacelloDirective
addTo: aLoaderDirective

	aLoaderDirective add: self
%

category: 'enumerating'
method: MetacelloDirective
directivesDo: aBlock

	aBlock value: self
%

category: 'printing'
method: MetacelloDirective
label

	^self spec label
%

category: 'accessing'
method: MetacelloDirective
loader

	^loader
%

category: 'accessing'
method: MetacelloDirective
loader: aLoader

	loader := aLoader
%

category: 'enumerating'
method: MetacelloDirective
packageDirectivesDo: aBlock
%

category: 'actions'
method: MetacelloDirective
packageDo: aBlock
%

category: 'actions'
method: MetacelloDirective
postLoadDo: aBlock
%

category: 'actions'
method: MetacelloDirective
preLoadDo: aBlock
%

category: 'enumerating'
method: MetacelloDirective
prepostLoadDirectivesDo: aBlock
%

category: 'enumerating'
method: MetacelloDirective
prepostLoadDo: aBlock
%

category: 'printing'
method: MetacelloDirective
printOn: aStream

	self printOn: aStream indent: 0
%

category: 'printing'
method: MetacelloDirective
printOn: aStream indent: indent

	indent timesRepeat: [ aStream tab ].
	aStream
		nextPutAll: self title;
		nextPutAll: ' : ';
		nextPutAll: self label.
%

category: 'printing'
method: MetacelloDirective
printString
	"Explicit override of superclass implementation. When you are printing a loadDirective it is annoying to have it truncated."

    | stream |
    stream := WriteStream on: String new.
    self printOn: stream.
    ^stream contents
%

category: 'accessing'
method: MetacelloDirective
spec

	^spec
%

category: 'initialize-release'
method: MetacelloDirective
spec: packageOrVersionSpec loader: aLoader

	spec := packageOrVersionSpec.
	loader := aLoader
%

category: 'accessing'
method: MetacelloDirective
title

	self subclassResponsibility
%

category: 'enumerating'
method: MetacelloDirective
versionDirectivesDepthFirstDo: aBlock
%

category: 'enumerating'
method: MetacelloDirective
versionDirectivesDo: aBlock
%

category: 'actions'
method: MetacelloDirective
versionDo: aBlock
%

! Class Implementation for MetacelloPackageLoadDirective

! ------------------- Instance methods for MetacelloPackageLoadDirective

category: 'accessing'
method: MetacelloPackageLoadDirective
externalReference
	^ externalReference
%

category: 'accessing'
method: MetacelloPackageLoadDirective
file
  ^ self externalReference
    ifNotNil: [ :er | er name ]
    ifNil: [ self resolvedReference name ]
%

category: 'printing'
method: MetacelloPackageLoadDirective
label

	^self file
%

category: 'enumerating'
method: MetacelloPackageLoadDirective
packageDirectivesDo: aBlock

	aBlock value: self
%

category: 'enumerating'
method: MetacelloPackageLoadDirective
packageDo: aBlock

	aBlock value: self
%

category: 'accessing'
method: MetacelloPackageLoadDirective
packageName
  ^ self externalReference
    ifNotNil: [ :er | er packageName ]
    ifNil: [ self resolvedReference packageName ]
%

category: 'accessing'
method: MetacelloPackageLoadDirective
repository
  ^ self externalReference
    ifNotNil: [ :er | er repository ]
    ifNil: [ self resolvedReference repository ]
%

category: 'accessing'
method: MetacelloPackageLoadDirective
resolvedReference
	^ resolvedReference
%

category: 'accessing'
method: MetacelloPackageLoadDirective
resolvedReference: anObject
	resolvedReference := anObject
%

category: 'initialize-release'
method: MetacelloPackageLoadDirective
spec: aPackageSpec externalReference: anExternalReference loader: aLoader

	super spec: aPackageSpec loader: aLoader.
	externalReference := anExternalReference
%

category: 'initialize-release'
method: MetacelloPackageLoadDirective
spec: aPackageSpec resolvedReference: aResolvedReference loader: aLoader
  super spec: aPackageSpec loader: aLoader.
  resolvedReference := aResolvedReference
%

category: 'accessing'
method: MetacelloPackageLoadDirective
title

	^'load'
%

! Class Implementation for MetacelloPrePostLoadDirective

! ------------------- Instance methods for MetacelloPrePostLoadDirective

category: 'actions'
method: MetacelloPrePostLoadDirective
evaluateSupplyingAnswers: loadBlock

	| answers |
	(answers := self spec answers) notEmpty
		ifTrue: [ loadBlock valueSupplyingMetacelloAnswers: answers ]
		ifFalse: [ loadBlock value]
%

category: 'enumerating'
method: MetacelloPrePostLoadDirective
prepostLoadDirectivesDo: aBlock

	aBlock value: self
%

category: 'enumerating'
method: MetacelloPrePostLoadDirective
prepostLoadDo: aBlock

	aBlock value: self
%

! Class Implementation for MetacelloPostLoadDirective

! ------------------- Instance methods for MetacelloPostLoadDirective

category: 'actions'
method: MetacelloPostLoadDirective
addTo: aLoaderDirective

	spec postLoadDoIt value ~~ nil ifTrue: [ aLoaderDirective add: self ]
%

category: 'printing'
method: MetacelloPostLoadDirective
label

	^super label, ' >> ', self spec postLoadDoIt value asString
%

category: 'actions'
method: MetacelloPostLoadDirective
postLoadDo: aBlock

	aBlock value: self
%

category: 'accessing'
method: MetacelloPostLoadDirective
title

	^'postload'
%

! Class Implementation for MetacelloPreLoadDirective

! ------------------- Instance methods for MetacelloPreLoadDirective

category: 'actions'
method: MetacelloPreLoadDirective
addTo: aLoaderDirective

	spec preLoadDoIt value ~~ nil ifTrue: [ aLoaderDirective add: self ]
%

category: 'printing'
method: MetacelloPreLoadDirective
label

	^super label, ' >> ', self spec preLoadDoIt value asString
%

category: 'actions'
method: MetacelloPreLoadDirective
preLoadDo: aBlock

	aBlock value: self
%

category: 'accessing'
method: MetacelloPreLoadDirective
title

	^'preload'
%

! Class Implementation for MetacelloVersionLoadDirective

! ------------------- Instance methods for MetacelloVersionLoadDirective

category: 'actions'
method: MetacelloVersionLoadDirective
add: aDirective

	self loadDirectives add: aDirective
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
directivesDo: aBlock

	aBlock value: self.
	self loadDirectives do: [:directive | directive directivesDo: aBlock ].
%

category: 'actions'
method: MetacelloVersionLoadDirective
finalizeLoad: aGofer
	"nothing special for linear loads"
%

category: 'testing'
method: MetacelloVersionLoadDirective
isExplicit

	^false
%

category: 'printing'
method: MetacelloVersionLoadDirective
label

	self spec == nil ifTrue: [ ^'' ].
	^self spec label
%

category: 'accessing'
method: MetacelloVersionLoadDirective
loadDirectives

	loadDirectives == nil ifTrue: [ loadDirectives := OrderedCollection new ].
	^ loadDirectives
%

category: 'accessing'
method: MetacelloVersionLoadDirective
loadDirectives: anObject
	loadDirectives := anObject
%

category: 'loading'
method: MetacelloVersionLoadDirective
loadPostloadDirective: aPostloadDirective
  | block |
  (block := aPostloadDirective spec postLoadDoItBlock) ~~ nil
    ifTrue: [ 
      aPostloadDirective
        evaluateSupplyingAnswers: [ block cull: aPostloadDirective loader cull: aPostloadDirective spec ].
      Transcript
        cr;
        show:
            'Evaluated -> ' , aPostloadDirective spec label , ' >> '
                , aPostloadDirective spec postLoadDoIt value asString ]
%

category: 'loading'
method: MetacelloVersionLoadDirective
loadPreloadDirective: aPreloadDirective
  | block |
  (block := aPreloadDirective spec preLoadDoItBlock) ~~ nil
    ifTrue: [ 
      aPreloadDirective
        evaluateSupplyingAnswers: [ block cull: aPreloadDirective loader cull: aPreloadDirective spec ].
      Transcript
        cr;
        show:
            'Evaluated -> ' , aPreloadDirective spec label , ' >> '
                , aPreloadDirective spec preLoadDoIt value asString ]
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
packageDirectivesDo: aBlock

	self loadDirectives do: [:directive | directive packageDirectivesDo: aBlock ].
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
packagesDo: aBlock

	self loadDirectives do: [:directive | directive packageDo: aBlock ].
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
prepostLoadDirectivesDo: aBlock

	self loadDirectives do: [:directive | directive prepostLoadDirectivesDo: aBlock ].
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
prepostLoadsDo: aBlock

	self loadDirectives do: [:directive | directive prepostLoadDo: aBlock ].
%

category: 'printing'
method: MetacelloVersionLoadDirective
printLoadDirectivesOn: aStream indent: indent

	self loadDirectives do: [:each |
		aStream cr. 
		each printOn: aStream indent: indent + 1 ].
%

category: 'printing'
method: MetacelloVersionLoadDirective
printOn: aStream indent: indent

	super printOn: aStream indent: indent.
	self printLoadDirectivesOn: aStream indent: indent
%

category: 'accessing'
method: MetacelloVersionLoadDirective
spec
	"Expected to be a MetacelloVersionSpec"
	
	(spec == nil  and: [  self loader ~~ nil ]) 
		ifTrue: [ 
			^[ self loader spec versionSpec ] 
				on: MessageNotUnderstood
				do: [:ex | ex return: self loader spec ]].
	^spec
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
versionDirectivesDepthFirstDo: aBlock

	self loadDirectives do: [:directive | directive versionDirectivesDepthFirstDo: aBlock ].
	aBlock value: self.
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
versionDirectivesDo: aBlock

	aBlock value: self.
	self loadDirectives do: [:directive | directive versionDirectivesDo: aBlock ].
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
versionDo: aBlock

	aBlock value: self.
%

category: 'enumerating'
method: MetacelloVersionLoadDirective
versionsDo: aBlock

	self loadDirectives do: [:directive | directive versionDo: aBlock ].
%

! Class Implementation for MetacelloAtomicLoadDirective

! ------------------- Instance methods for MetacelloAtomicLoadDirective

category: 'enumerating'
method: MetacelloAtomicLoadDirective
directivesDo: aBlock

	aBlock value: self.
	self preloads do: [:directive | directive directivesDo: aBlock ].
	self loadDirectives do: [:directive | directive directivesDo: aBlock ].
	self postloads do: [:directive | directive directivesDo: aBlock ].
%

category: 'loading'
method: MetacelloAtomicLoadDirective
loadPostloadDirective: aPostloadDirective
	"accumulate postloads"

	self postloads add: aPostloadDirective
%

category: 'loading'
method: MetacelloAtomicLoadDirective
loadPreloadDirective: aPreloadDirective 
	"accumulate preloads"

	self preloads add: aPreloadDirective
%

category: 'accessing'
method: MetacelloAtomicLoadDirective
packageloads

	packageloads == nil ifTrue: [ packageloads := OrderedCollection new ].
	^ packageloads
%

category: 'accessing'
method: MetacelloAtomicLoadDirective
packageloads: anObject
	packageloads := anObject
%

category: 'accessing'
method: MetacelloAtomicLoadDirective
postloads

	postloads == nil ifTrue: [ postloads := OrderedCollection new ].
	^ postloads
%

category: 'accessing'
method: MetacelloAtomicLoadDirective
preloads

	preloads == nil ifTrue: [ preloads := OrderedCollection new ].
	^ preloads
%

category: 'enumerating'
method: MetacelloAtomicLoadDirective
prepostLoadDirectivesDo: aBlock

	self preloads do: [:directive | directive prepostLoadDirectivesDo: aBlock ].
	self loadDirectives do: [:directive | directive prepostLoadDirectivesDo: aBlock ].
	self postloads do: [:directive | directive prepostLoadDirectivesDo: aBlock ].
%

category: 'enumerating'
method: MetacelloAtomicLoadDirective
prepostLoadsDo: aBlock

	self preloads do: [:directive | directive prepostLoadDo: aBlock ].
	self loadDirectives do: [:directive | directive prepostLoadDo: aBlock ].
	self postloads do: [:directive | directive prepostLoadDo: aBlock ].
%

category: 'accessing'
method: MetacelloAtomicLoadDirective
title

	^'atomic load'
%

! Class Implementation for MetacelloExplicitLoadDirective

! ------------------- Instance methods for MetacelloExplicitLoadDirective

category: 'testing'
method: MetacelloExplicitLoadDirective
isExplicit

	^true
%

category: 'accessing'
method: MetacelloExplicitLoadDirective
title

	^'explicit load'
%

! Class Implementation for MetacelloLinearLoadDirective

! ------------------- Instance methods for MetacelloLinearLoadDirective

category: 'accessing'
method: MetacelloLinearLoadDirective
title

	^'linear load'
%

! Class Implementation for MetacelloLoadData

! ------------------- Instance methods for MetacelloLoadData

category: 'accessing'
method: MetacelloLoadData
addVersion: version versionInfo: versionInfo resolvedReference: resolvedReference packageSpec: packageSpec
	| vis |
	"check for duplicates and use the one that is being added"
	(vis := self packageNameMap at: packageSpec name ifAbsent: [  ]) ~~ nil
		ifTrue: [ 
			"remove old references"
			vis
				do: [ :vi | 
					self dataMap removeKey: vi name.
					self versionInfoMap removeKey: vi name ] ].
	self dataMap
		at: version info name
		put:
			{version.
			resolvedReference.
			packageSpec}.
	self versionInfoMap at: versionInfo name put: {versionInfo}.
	self packageNameMap at: packageSpec name put: {versionInfo}
%

category: 'versionInfo'
method: MetacelloLoadData
ancestorsFor: packageSpec ifAbsent: aBlock

	^self versionInfoMap 
		at: packageSpec file 
		ifAbsent: [ 
			self  packageNameMap 
				at: packageSpec name
				ifAbsent: aBlock ]
%

category: 'versionInfo'
method: MetacelloLoadData
currentVersionInfoFor: packageSpec ifAbsent: aBlock

	^self versionInfoMap 
		at: packageSpec file 
		ifAbsent: [ 
			self  packageNameMap 
				at: packageSpec name
				ifAbsent: aBlock ]
%

category: 'accessing'
method: MetacelloLoadData
dataMap

	dataMap == nil ifTrue: [ dataMap := Dictionary new ].
	^dataMap
%

category: 'enumerating'
method: MetacelloLoadData
do: aBlock

	self dataMap valuesDo: [:ar |
		aBlock value: (ar at: 1) value: (ar at: 2) value: (ar at: 3) ]
%

category: 'testing'
method: MetacelloLoadData
isEmpty

	^self dataMap isEmpty
%

category: 'accessing'
method: MetacelloLoadData
packageNameMap

	packageNameMap == nil ifTrue: [ packageNameMap := Dictionary new ].
	^packageNameMap
%

category: 'accessing'
method: MetacelloLoadData
versionInfoMap

	versionInfoMap == nil ifTrue: [ versionInfoMap := Dictionary new ].
	^versionInfoMap
%

! Class Implementation for MetacelloLoaderPolicy

! ------------------- Class methods for MetacelloLoaderPolicy

category: 'instance creation'
classmethod: MetacelloLoaderPolicy
new
  ^ self basicNew initialize
%

category: 'instance creation'
classmethod: MetacelloLoaderPolicy
overrideRepositories: aCollection

	^self new overrideRepositories: aCollection
%

! ------------------- Instance methods for MetacelloLoaderPolicy

category: 'accessing'
method: MetacelloLoaderPolicy
cacheRepository: anMCRepository

	cacheRepository := anMCRepository.
	"getting a new repository, so wipe out the cacheGofer and ensureMap"
	ensuredMap := cacheGofer := nil
%

category: 'accessing'
method: MetacelloLoaderPolicy
ensuredMap

	ensuredMap == nil ifTrue: [ ensuredMap := Dictionary new ].
	^ensuredMap
%

category: 'accessing'
method: MetacelloLoaderPolicy
ensuredMap: anObject
	ensuredMap := anObject
%

category: 'testing'
method: MetacelloLoaderPolicy
hasRepositoryOverrides

	^self overrideRepositories ~~ nil
%

category: 'accessing'
method: MetacelloLoaderPolicy
ignoreImage
	^ ignoreImage
%

category: 'accessing'
method: MetacelloLoaderPolicy
ignoreImage: anObject
	ignoreImage := anObject
%

category: 'initialize-release'
method: MetacelloLoaderPolicy
initialize

	self 
		repositoryMap; 
		cacheRepository;
		ensuredMap.
	ignoreImage := false
%

category: 'actions'
method: MetacelloLoaderPolicy
load
  self ensureHasRepositoryOverrides.
  self loadDirective loadWithPolicy: self
%

category: 'accessing'
method: MetacelloLoaderPolicy
loadData

 	loadData == nil ifTrue: [ loadData := MetacelloLoadData new ].
	^loadData
%

category: 'accessing'
method: MetacelloLoaderPolicy
loadDirective

	loadDirective == nil ifTrue: [ loadDirective := MetacelloLinearLoadDirective new ].
	^ loadDirective
%

category: 'accessing'
method: MetacelloLoaderPolicy
overrideRepositories
	^ overrideRepositories
%

category: 'accessing'
method: MetacelloLoaderPolicy
overrideRepositories: anObject
	overrideRepositories := anObject
%

category: 'actions'
method: MetacelloLoaderPolicy
pushAtomicLoadDirectivesDuring: aBlock for: aLoader

	self pushLoadDirective: (MetacelloAtomicLoadDirective loader: aLoader) during: aBlock.
%

category: 'actions'
method: MetacelloLoaderPolicy
pushExplicitLoadDirectivesDuring: aBlock for: aLoader

	| directive |
	directive := MetacelloExplicitLoadDirective loader: aLoader.
	self pushLoadDirective: directive during: aBlock.
	^directive
%

category: 'actions'
method: MetacelloLoaderPolicy
pushLinearLoadDirectivesDuring: aBlock for: aLoader

	self pushLoadDirective: (MetacelloLinearLoadDirective loader: aLoader) during: aBlock.
%

category: 'private'
method: MetacelloLoaderPolicy
pushLoadDirective: aLoaderDirective during: aBlock

	|  oldRoot |
	self loadDirective add: aLoaderDirective.
	oldRoot := loadDirective.
	loadDirective := aLoaderDirective.
	aBlock ensure: [ loadDirective := oldRoot ].
%

category: 'accessing'
method: MetacelloLoaderPolicy
repositoryMap

	repositoryMap == nil ifTrue: [ repositoryMap := Dictionary new ].
	^repositoryMap
%

category: 'accessing'
method: MetacelloLoaderPolicy
repositoryMap: anObject
	repositoryMap := anObject
%

category: 'accessing'
method: MetacelloLoaderPolicy
resetCacheGofer

	cacheGofer := nil
%

category: 'accessing'
method: MetacelloLoaderPolicy
silently

	silently == nil ifTrue: [ silently := false ].
	^ silently
%

category: 'accessing'
method: MetacelloLoaderPolicy
silently: anObject
	silently := anObject
%

! Class Implementation for MetacelloMCPartiallyLoadedStatus

! ------------------- Class methods for MetacelloMCPartiallyLoadedStatus

category: 'instance creation'
classmethod: MetacelloMCPartiallyLoadedStatus
new
	^ self basicNew initialize
%

! ------------------- Instance methods for MetacelloMCPartiallyLoadedStatus

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
abort
	^ abort
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
abort: aBoolean
	abort := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedPackageIsCurrent
	^ aLoadedPackageIsCurrent
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedPackageIsCurrent: aBoolean
	aLoadedPackageIsCurrent := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedPackageIsExact
	^ aLoadedPackageIsExact
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedPackageIsExact: aBoolean
	aLoadedPackageIsExact := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedPackageIsNotCurrent
	^ aLoadedPackageIsNotCurrent
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedPackageIsNotCurrent: aBoolean
	aLoadedPackageIsNotCurrent := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedProjectIsCurrent: aBoolean
	aLoadedProjectIsCurrent := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedProjectIsExact
	^ aLoadedProjectIsExact
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedProjectIsExact: aBoolean
	aLoadedProjectIsExact := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedProjectIsNotCurrent
	^ aLoadedProjectIsNotCurrent
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aLoadedProjectIsNotCurrent: aBoolean
	aLoadedProjectIsNotCurrent := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aPackageIsLoaded
	^aPackageIsLoaded
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aPackageIsLoaded: aBoolean
	aPackageIsLoaded := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aPackageNotLoaded
	^aPackageNotLoaded
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aPackageNotLoaded: aBoolean
	aPackageNotLoaded := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aProjectIsLoaded
	^aProjectIsLoaded
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aProjectIsLoaded: aBoolean
	aProjectIsLoaded := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aProjectNotLoaded
	^aProjectNotLoaded
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
aProjectNotLoaded: aBoolean
	aProjectNotLoaded := aBoolean
%

category: 'evaulation'
method: MetacelloMCPartiallyLoadedStatus
evaluateStatus: validStatusList
	^self abort
		ifTrue: [ false ]
		ifFalse: [ 
			(self hasNoProject or: [ self vrsnStatus isEmpty ])
				ifTrue: [ true ]
				ifFalse: [ 
					| valid |
					valid := true.
					vrsnStatus
						do: [ :status | 
							(validStatusList includes: status)
								ifFalse: [ valid := false ] ].
					valid ] ]
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
hasNoPackage
	^ hasNoPackage
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
hasNoPackage: aBoolean
	hasNoPackage := aBoolean
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
hasNoProject
	^ hasNoProject
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
hasNoProject: aBoolean
	hasNoProject := aBoolean
%

category: 'initialization'
method: MetacelloMCPartiallyLoadedStatus
initialize
	super initialize.
	hasNoPackage := hasNoProject := true.
	aProjectIsLoaded := aPackageIsLoaded := false.
	aLoadedProjectIsExact := aLoadedPackageIsExact := false.
	aLoadedProjectIsCurrent := aLoadedPackageIsCurrent := false.
	aLoadedProjectIsNotCurrent := aLoadedPackageIsNotCurrent := false.
	aProjectNotLoaded := aPackageNotLoaded := false.
	vrsnStatus := Set new.
	abort := false
%

category: 'testing'
method: MetacelloMCPartiallyLoadedStatus
isAllLoadedToSpec: matchBlock
        "all projects and packages are loaded and match specification"

	(self evaluateStatus: #(#allLoadedToSpec))
		ifTrue: [ 
			((hasNoPackage
				or: [ 
					aPackageIsLoaded & aPackageNotLoaded not & aLoadedPackageIsExact & aLoadedPackageIsNotCurrent not
						& aLoadedPackageIsCurrent not ])
				and: [ 
					hasNoProject
						or: [ 
							aProjectIsLoaded & aProjectNotLoaded not & aLoadedProjectIsExact & aLoadedProjectIsNotCurrent not
								& aLoadedProjectIsCurrent not ] ])
				ifTrue: [ matchBlock value: #allLoadedToSpec ] ]
%

category: 'testing'
method: MetacelloMCPartiallyLoadedStatus
isLoadedMatchConstraints: matchBlock
	"all loaded projects and packages match constraints (at least one package loaded)"

	| matchStatus |
	matchStatus := #loadedMatchConstraints.
	(self evaluateStatus: #(#allLoadedToSpec #loadedToSpec #loadedMatchConstraints))
		ifTrue: [ 
			aPackageIsLoaded & aProjectIsLoaded
				ifTrue: [ 
					(aLoadedPackageIsExact | aLoadedPackageIsCurrent & aLoadedPackageIsNotCurrent not
						and: [ aLoadedProjectIsExact | aLoadedProjectIsCurrent & aLoadedProjectIsNotCurrent not ])
						ifTrue: [ matchBlock value: matchStatus ] ]
				ifFalse: [ 
					aPackageIsLoaded
						ifTrue: [ 
							aLoadedPackageIsExact | aLoadedPackageIsCurrent & aLoadedPackageIsNotCurrent not
								ifTrue: [ matchBlock value: matchStatus ] ]
						ifFalse: [ 
							hasNoPackage & (aLoadedProjectIsExact | aLoadedProjectIsCurrent) & aLoadedProjectIsNotCurrent not
								ifTrue: [ matchBlock value: matchStatus ] ] ] ]
%

category: 'testing'
method: MetacelloMCPartiallyLoadedStatus
isLoadedToSpec: matchBlock
	"all loaded projects and packages match specifications (at least one package loaded)"

	| matchStatus |
	matchStatus := #loadedToSpec.
	(self evaluateStatus: #(#allLoadedToSpec #loadedToSpec))
		ifTrue: [ 
			aPackageIsLoaded & aProjectIsLoaded
				ifTrue: [ 
					(aLoadedPackageIsExact & aLoadedPackageIsCurrent not & aLoadedPackageIsNotCurrent not
						and: [ aLoadedProjectIsExact & aLoadedProjectIsCurrent not & aLoadedProjectIsNotCurrent not ])
						ifTrue: [ matchBlock value: matchStatus ] ]
				ifFalse: [ 
					aPackageIsLoaded
						ifTrue: [ 
							aLoadedPackageIsExact & aLoadedPackageIsCurrent not & aLoadedPackageIsNotCurrent not
								ifTrue: [ matchBlock value: matchStatus ] ]
						ifFalse: [ 
							hasNoPackage & aLoadedProjectIsExact & aLoadedProjectIsCurrent not & aLoadedProjectIsNotCurrent not
								ifTrue: [ matchBlock value: matchStatus ] ] ] ]
%

category: 'testing'
method: MetacelloMCPartiallyLoadedStatus
isSomethingLoaded: somethingLoadedBlock
	"at least one package loaded"

	(self evaluateStatus: #(#allLoadedToSpec #loadedToSpec #loadedMatchConstraints #somethingLoaded))
		ifTrue: [ 
			aPackageIsLoaded
				ifTrue: [ somethingLoadedBlock value: #somethingLoaded ] ]
%

category: 'accessing'
method: MetacelloMCPartiallyLoadedStatus
vrsnStatus
	^vrsnStatus
%

! Class Implementation for MetacelloMCVersionSpecLoader

! ------------------- Class methods for MetacelloMCVersionSpecLoader

category: 'instance creation'
classmethod: MetacelloMCVersionSpecLoader
on: aVersionSpec

	^(self new) 
		versionSpec: aVersionSpec;
		yourself
%

! ------------------- Instance methods for MetacelloMCVersionSpecLoader

category: 'accessing'
method: MetacelloMCVersionSpecLoader
label

	^self versionSpec label
%

category: 'loading'
method: MetacelloMCVersionSpecLoader
load
  | mcLoader |
  packages := Dictionary new.
  self resolveToLoadableSpecs.
  mcLoader := self loader.
  packages values
    do: [ :pkg | 
      pkg ensureLoadedForDevelopmentUsing: mcLoader.
      (MetacelloIgnorePackageLoaded signal: pkg)
        ifFalse: [ 
          mcLoader ignoreImage
            ifFalse: [ 
              (pkg
                compareCurrentVersion: self operator
                targetVersionStatus: #(#'allLoadedToSpec')
                using: mcLoader)
                ifTrue: [ packages removeKey: pkg name ] ] ] ].
  packages notEmpty
    ifTrue: [ 
      mcLoader preLoad: self versionSpec.
      mcLoader load.
      mcLoader postLoad: self versionSpec ].
  ^ mcLoader
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
loader

	loader == nil 
		ifTrue: [
			loader := self versionSpec loader copy.
			loader spec: self.
			loaderPolicy notNil ifTrue: [ loader loaderPolicy: loaderPolicy] ].
	^loader
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
loaderPolicy
	^ loaderPolicy
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
loaderPolicy: anObject
	loaderPolicy := anObject
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
name

	^self versionSpec name
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
operator

	^self loader operator
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
packages

	^packages
%

category: 'spec compatibility'
method: MetacelloMCVersionSpecLoader
packageSpecsInLoadOrder
    ^ self versionSpec packageSpecsInLoadOrderForMap: packages
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
project

	^self versionSpec project
%

category: 'loading'
method: MetacelloMCVersionSpecLoader
repositories

	^self repositorySpecs
%

category: 'spec compatibility'
method: MetacelloMCVersionSpecLoader
repositorySpecs

	| repositoryMap |
	repositoryMap := self versionSpec repositories ~~ nil
		ifTrue: [ self versionSpec repositories map ]
		ifFalse: [ Dictionary new ].
	^repositoryMap values.
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
required

	required == nil ifTrue: [ ^#() ].
	^ required
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
required: anObject
	required := anObject
%

category: 'loading'
method: MetacelloMCVersionSpecLoader
resolvePackageNames

	packages := Dictionary new.
	self resolveToLoadableSpecs.
	^packages values collect: [:pkg | pkg name ]
%

category: 'private'
method: MetacelloMCVersionSpecLoader
resolveToLoadableSpecs
    self versionSpec resolveToLoadableSpecs: required forLoad: true map: packages
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
versionSpec
	^ versionSpec
%

category: 'accessing'
method: MetacelloMCVersionSpecLoader
versionSpec: anObject
	versionSpec := anObject
%

category: 'spec compatibility'
method: MetacelloMCVersionSpecLoader
versionString

	^self versionSpec versionString
%

! Class Extensions

! Class Extension for AbstractMetacelloConfiguration

! ------------------- Instance methods for AbstractMetacelloConfiguration

category: '*metacello-mc'
method: AbstractMetacelloConfiguration
projectClass
  ^ self subclassResponsibility
%

! Class Extension for ConfigurationOf

! ------------------- Instance methods for ConfigurationOf

category: '*metacello-mc'
method: ConfigurationOf
projectClass
  ^ MetacelloMCProject
%

! Class Extension for MetacelloAbstractPackageSpec

! ------------------- Instance methods for MetacelloAbstractPackageSpec

category: '*metacello-mc-querying'
method: MetacelloAbstractPackageSpec
file 
	"MetacelloPackageSpec compatibility"
	
	^nil
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
forceUpdatePackageSpec: updatedSpecs using: anMCLoader

	^self updatePackageSpec: updatedSpecs using: anMCLoader
%

category: '*metacello-mc-querying'
method: MetacelloAbstractPackageSpec
getFile
  "MetacelloPackageSpec compatibility"

  ^ nil
%

category: '*metacello-mc-querying'
method: MetacelloAbstractPackageSpec
isPackageLoaded

	^false
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
packagesNeedSavingVisited: visitedProjects using: repos into: aCollection
	"noop by default"
%

category: '*metacello-mc-querying'
method: MetacelloAbstractPackageSpec
repository
    self deprecated: 'Use repositories or repositorySpecs'.
    ^ nil
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
repositorySpecs

	^#()
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
resolveToAllPackagesIn: aVersionSpec into: packages visited: visited

	visited
		visit: self
		doing: [:spec |
			self visitingWithPackages: packages.
			(spec includes, spec requires) do: [:pkgName |
				(aVersionSpec packageNamed: pkgName)
					projectDo: [:prj | 
						(prj resolveToAllPackagesIn: aVersionSpec visited: visited) do: [:pkg | 
							packages at: pkg name put: pkg ]] 
					packageDo: [:pkg | 
						packages at: pkg name put: pkg.
						(pkg resolveToAllPackagesIn: aVersionSpec visited: visited) do: [:rpkg | 
							packages at: rpkg name put: rpkg ] ] 
					groupDo: [:grp | grp resolveToAllPackagesIn: aVersionSpec into: packages  visited: visited ]]]
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
resolveToAllPackagesIn: aVersionSpec visited: visited

	| packages |
	packages := Dictionary new.
	self resolveToAllPackagesIn: aVersionSpec into: packages visited: visited.
	^packages values asOrderedCollection
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
resolveToLoadableSpec

	^self
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
resolveToPackagesIn: aVersionSpec andProjects: andProjectsBool visited: visited
  ^ self resolveToPackagesIn: aVersionSpec visited: visited
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
resolveToPackagesIn: aVersionSpec visited: visited

	^self subclassResponsibility
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
updateForSpawnMethod: sourceSpec
	"This means that this spec was used in a baseline and will be used in a version .... drop all information that isn't useful"

	answers := name := requires := includes := nil
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
updatePackageRepositoriesFor: aVersionSpec
	"noop by default"
	
	^true
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
updatePackageSpec: updatedSpecs using: anMCLoader
	"Add pkg copy to updatedSpecs if the file in current image is different from the receiver's file"
%

category: '*metacello-mc-querying'
method: MetacelloAbstractPackageSpec
version 
	"MetacelloPackageSpec compatibility"
	
	^nil
%

category: '*metacello-mc'
method: MetacelloAbstractPackageSpec
visitingWithPackages: packages
	"noop"
%

! Class Extension for MetacelloAbstractVersionConstructor

! ------------------- Instance methods for MetacelloAbstractVersionConstructor

category: '*metacello-mc-accessing'
method: MetacelloAbstractVersionConstructor
projectClass
    ^ MetacelloMCProject
%

! Class Extension for MetacelloBaselineConstructor

! ------------------- Instance methods for MetacelloBaselineConstructor

category: '*metacello-mc-accessing'
method: MetacelloBaselineConstructor
projectClass
    ^ MetacelloMCBaselineProject
%

! Class Extension for MetacelloBaselineOfMethodSpec

! ------------------- Instance methods for MetacelloBaselineOfMethodSpec

category: '*metacello-mc'
method: MetacelloBaselineOfMethodSpec
versionString
  ^ MetacelloMCBaselineProject singletonVersionName
%

! Class Extension for MetacelloBaselineSpecGenerator

! ------------------- Instance methods for MetacelloBaselineSpecGenerator

category: '*metacello-mc'
method: MetacelloBaselineSpecGenerator
projectSpecCreationBlock
  | platform |
  platform := MetacelloPlatform current.
  platform
    globalNamed: 'MetacelloCypressBaselineProject'
    ifPresent: [ :cypressBaselineProjectClass | 
      platform useCypressByDefault
        ifTrue: [ ^ [ :projectName | {(cypressBaselineProjectClass new baselineOfProjectSpec name: projectName)} ] ] ].
  ^ [ :projectName | {(MetacelloMCBaselineProject new baselineOfProjectSpec name: projectName)} ]
%

! Class Extension for MetacelloConfigurationSpecGenerator

! ------------------- Instance methods for MetacelloConfigurationSpecGenerator

category: '*metacello-mc'
method: MetacelloConfigurationSpecGenerator
projectSpecCreationBlock
    ^ [ :projectName | {(MetacelloMCProject new configurationOfProjectSpec name: projectName)} ]
%

! Class Extension for MetacelloGroupSpec

! ------------------- Instance methods for MetacelloGroupSpec

category: '*metacello-mc'
method: MetacelloGroupSpec
resolveToLoadableSpec

	^nil
%

category: '*metacello-mc'
method: MetacelloGroupSpec
resolveToPackagesIn: aVersionSpec andProjects: andProjectsBool into: packages visited: visited
  visited
    visit: self
    doing: [ :aSpec | 
      | map |
      map := aVersionSpec packages map.
      aSpec includes
        do: [ :pkgName | 
          (aVersionSpec packageNamed: pkgName forMap: map ifAbsent: [  ])
            projectDo: [ :prj | 
              andProjectsBool
                ifTrue: [ packages at: prj name put: prj ] ]
            packageDo: [ :pkg | packages at: pkg name put: pkg ]
            groupDo: [ :grp | 
              grp
                resolveToPackagesIn: aVersionSpec
                andProjects: andProjectsBool
                into: packages
                visited: visited ] ] ]
%

category: '*metacello-mc'
method: MetacelloGroupSpec
resolveToPackagesIn: aVersionSpec andProjects: andProjectsBool visited: visited
  | packages |
  packages := Dictionary new.
  self
    resolveToPackagesIn: aVersionSpec
    andProjects: andProjectsBool
    into: packages
    visited: visited.
  ^ packages values asOrderedCollection
%

category: '*metacello-mc'
method: MetacelloGroupSpec
resolveToPackagesIn: aVersionSpec into: packages visited: visited
  self
    resolveToPackagesIn: aVersionSpec
    andProjects: false
    into: packages
    visited: visited
%

category: '*metacello-mc'
method: MetacelloGroupSpec
resolveToPackagesIn: aVersionSpec visited: visited
  | packages |
  packages := Dictionary new.
  self
    resolveToPackagesIn: aVersionSpec
    andProjects: false
    into: packages
    visited: visited.
  ^ packages values asOrderedCollection
%

! Class Extension for MetacelloMemberSpec

! ------------------- Instance methods for MetacelloMemberSpec

category: '*metacello-mc'
method: MetacelloMemberSpec
addToMetacelloPackages: aMetacelloPackagesSpec

	aMetacelloPackagesSpec addMember: self
%

category: '*metacello-mc'
method: MetacelloMemberSpec
addToMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: self
%

category: '*metacello-mc'
method: MetacelloMemberSpec
mergeIntoMetacelloPackages: aMetacelloPackagesSpec

	aMetacelloPackagesSpec addMember: self
%

category: '*metacello-mc'
method: MetacelloMemberSpec
mergeIntoMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: self
%

category: '*metacello-mc'
method: MetacelloMemberSpec
removeFromMetacelloPackages: aMetacelloPackagesSpec

	aMetacelloPackagesSpec addMember: self
%

category: '*metacello-mc'
method: MetacelloMemberSpec
removeFromMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: self
%

! Class Extension for MetacelloProjectReferenceSpec

! ------------------- Instance methods for MetacelloProjectReferenceSpec

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
packagesNeedSavingVisited: visitedProjects using: repos into: aCollection
	
	| prjct clsName vrsn |
	prjct := self resolveToLoadableSpec.
	(visitedProjects includes: (clsName := prjct className)) ifTrue: [ ^self ].
	visitedProjects add: clsName.
	(vrsn := self versionOrNil) == nil ifTrue: [ ^self ].
	vrsn spec 
		packagesNeedSavingVisited: visitedProjects 
		into: aCollection
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
repository: aStringOrMetacelloRepositorySpec
    ^ self projectReference repository: aStringOrMetacelloRepositorySpec
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
resolveProjectSpec

	^self projectReference
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
resolveToAllPackagesIn: aVersionSpec into: packages visited: visited

	(self resolveProjectSpec resolveToAllPackagesIn: aVersionSpec visited: visited) do: [:pkg |
		packages at: pkg put: pkg ]
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
resolveToLoadableSpec

	^self resolveProjectSpec resolveToLoadableSpec
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
resolveToPackagesIn: aVersionSpec andProjects: andProjectsBool visited: visited
  ^ andProjectsBool
    ifTrue: [ {self} ]
    ifFalse: [ self resolveToPackagesIn: aVersionSpec visited: visited ]
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
resolveToPackagesIn: aVersionSpec visited: visited

	^#()
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
updateForSpawnMethod: sourceSpec
	"This means that this spec was used in a baseline and will be used in a version .... drop all information that isn't useful"

	| nm |
	nm := name.
	self projectReference updateForSpawnMethod: sourceSpec.
	super updateForSpawnMethod: sourceSpec.
	name := nm.
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
updatePackageSpec: updatedSpecs using: anMCLoader
	"Add project copy to updatedSpecs if the current version of the project 
	 is different from the receiver's version"
	
	self projectReference updatePackageSpec: updatedSpecs
%

category: '*metacello-mc'
method: MetacelloProjectReferenceSpec
versionString

	^self projectReference versionString
%

! Class Extension for MetacelloProjectRegistration

! ------------------- Instance methods for MetacelloProjectRegistration

category: '*metacello-mc'
method: MetacelloProjectRegistration
version
    ^ (self configurationProjectSpecIfAbsent: [ ^ MetacelloMCBaselineProject singletonVersionName ]) versionString
%

! Class Extension for MetacelloProjectSpecGenerator

! ------------------- Instance methods for MetacelloProjectSpecGenerator

category: '*metacello-mc'
method: MetacelloProjectSpecGenerator
projectSpecCreationBlock
    ^ [ :projectName | {(MetacelloMCProject new projectSpec name: projectName)} ]
%

! Class Extension for MetacelloScriptEngine

! ------------------- Instance methods for MetacelloScriptEngine

category: '*metacello-mc'
method: MetacelloScriptEngine
cacheRepository
    ^ (MetacelloMCProject new repositorySpec description: (self options at: #'cacheRepository' ifAbsent: [ ^ nil ]))
        createRepository
%

category: '*metacello-mc'
method: MetacelloScriptEngine
repositoryOverrides
    ^ (self options at: #'repositoryOverrides' ifAbsent: [ ^ nil ])
        collect: [ :description | (MetacelloMCProject new repositorySpec description: description) createRepository ]
%

! Class initializers 

doit
true.
%



! End of Package: Metacello-MC


