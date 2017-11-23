#
# Metacello-GsCypress-MC
#

set compile_env: 2

! Class Extension for AbstractDictionary

! ------------------- Instance methods for AbstractDictionary

category: '*Metacello-BaseExtensions'
method: AbstractDictionary
at: key ifPresent: aBlock
	"Lookup the given key in the receiver. If it is present, answer the value of evaluating the given block with the value associated with the key. Otherwise, answer nil."

	| v |
	v := self at: key ifAbsent: [^ nil].
	^ aBlock value: v
%

! Class Extension for String

! ------------------- Class methods for String

category: '*Metacello-BaseExtensions'
classmethod: String
stringHash: aString initialHash: speciesHash
  | stringSize hash low |
  stringSize := aString size.
  hash := speciesHash bitAnd: 16rFFFFFFF.
  1 to: stringSize do: [ :pos | 
    hash := hash + (aString at: pos) asInteger.	"Begin hashMultiply"
    low := hash bitAnd: 16383.
    hash := 16r260D * low
      +
        ((16r260D * (hash bitShift: -14) + (16r0065 * low) bitAnd: 16383) * 16384)
      bitAnd: 16r0FFFFFFF ].
  ^ hash
%


#
# Metacello-MC
#
! Class Extension for Collection

! ------------------- Instance methods for Collection

category: '*Metacello-BaseExtensions'
method: Collection
addToMetacelloRepositories: aMetacelloRepositoriesSpec

	self do: [:each | each addToMetacelloRepositories: aMetacelloRepositoriesSpec ]
%

category: '*Metacello-BaseExtensions'
method: Collection
fetchRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doFetchRequiredFromArray: self.
%

category: '*Metacello-BaseExtensions'
method: Collection
loadRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doLoadRequiredFromArray: self.
%

category: '*Metacello-BaseExtensions'
method: Collection
mergeIntoMetacelloRepositories: aMetacelloRepositoriesSpec

	self do: [:each | each mergeIntoMetacelloRepositories: aMetacelloRepositoriesSpec ]
%

category: '*Metacello-BaseExtensions'
method: Collection
recordRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doRecordRequiredFromArray: self.
%

category: '*Metacello-BaseExtensions'
method: Collection
removeFromMetacelloRepositories: aMetacelloRepositoriesSpec

	self do: [:each | each removeFromMetacelloRepositories: aMetacelloRepositoriesSpec ]
%

category: '*Metacello-BaseExtensions'
method: Collection
resolvePackageSpecsNamedForMetacelloMCVersion: aMetacelloMCVersion visited: visited ifAbsent: aBlock
    ^ aMetacelloMCVersion
        allPackagesForSpecs: (self collect: [ :ea | aMetacelloMCVersion packageNamed: ea ifAbsent: aBlock ])
        visited: visited
%

! Class Extension for Object

! ------------------- Class methods for Object

category: '*Metacello-BaseExtensions'
classmethod: Object
lastMetacelloVersionLoad
	"Answer the last version loaded and the list of packages loaded for that version.
	 See MetacelloConfigTemplate."

	^nil -> 'default'
%

category: '*Metacello-BaseExtensions'
classmethod: Object
metacelloVersion: versionString loads: anArrayOrString
	"Stash the last version loaded and the list of packages loaded for that version. The list
	 of packages will be used by the tools when doing 'Load Package Version'.
	See MetacelloConfigTemplate for example"
	
	"noop by default"
%

! Class Extension for String

! ------------------- Instance methods for String

category: '*Metacello-BaseExtensions'
method: String
addToMetacelloRepositories: aMetacelloRepositoriesSpec

	| spec |
	spec := 
		(aMetacelloRepositoriesSpec project repositorySpec)
			description: self;
			yourself.
	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec addMember 
			name: spec name;
			spec: spec;
			yourself)
%

category: '*Metacello-BaseExtensions'
method: String
fetchRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doFetchRequiredFromArray: (Array with: self).
%

category: '*Metacello-BaseExtensions'
method: String
loadRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doLoadRequiredFromArray: (Array with: self).
%

category: '*Metacello-BaseExtensions'
method: String
mergeIntoMetacelloRepositories: aMetacelloRepositoriesSpec

	| spec |
	spec := 
		(aMetacelloRepositoriesSpec project repositorySpec)
			description: self;
			yourself.
	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec mergeMember 
			name: spec name;
			spec: spec;
			yourself)
%

category: '*Metacello-BaseExtensions'
method: String
packageFileSpecFor: aMetacelloPackagesSpec

	^(aMetacelloPackagesSpec project packageSpec)
			file: self;
			yourself
%

category: '*Metacello-BaseExtensions'
method: String
recordRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doRecordRequiredFromArray: (Array with: self).
%

category: '*Metacello-BaseExtensions'
method: String
removeFromMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec removeMember 
			name: self;
			yourself)
%

category: '*Metacello-BaseExtensions'
method: String
resolvePackageSpecsNamedForMetacelloMCVersion: aMetacelloMCVersion visited: visited ifAbsent: aBlock
    ^ aMetacelloMCVersion
        allPackagesForSpecs: {(aMetacelloMCVersion packageNamed: self ifAbsent: aBlock)}
        visited: visited
%

category: '*Metacello-BaseExtensions'
method: String
setLoadsInMetacelloProject: aMetacelloPackageSpec
  aMetacelloPackageSpec setLoads: {self}
%

#
# Metacello-Core
#

! Class Extension for BlockClosure

! ------------------- Instance methods for BlockClosure

category: '*Metacello-BaseExtensions-scripting'
method: BlockClosure
execute: projectSpecBlock against: aScriptExecutor
    aScriptExecutor executeBlock: self do: projectSpecBlock
%

category: '*Metacello-BaseExtensions'
method: BlockClosure
setPackage: aString withInMetacelloConfig: aMetacelloConfig

	aMetacelloConfig setPackage: aString withBlock: self
%

! Class Extension for Collection

! ------------------- Instance methods for Collection

category: '*Metacello-BaseExtensions'
method: Collection
asMetacelloAttributeList
    ^ self
%

category: '*Metacello-BaseExtensions-scripting'
method: Collection
execute: projectSpecBlock against: aScriptExecutor
    aScriptExecutor executeCollection: self do: projectSpecBlock
%

category: '*Metacello-BaseExtensions'
method: Collection
setForDo: aBlock withInMetacelloConfig: aMetacelloConstructore
    aMetacelloConstructore setFor: self do: aBlock
%

category: '*Metacello-BaseExtensions'
method: Collection
setIncludesInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setIncludes: self asArray.
%

category: '*Metacello-BaseExtensions'
method: Collection
setLoadsInMetacelloProject: aMetacelloPackageSpec
  aMetacelloPackageSpec setLoads: self asArray
%

category: '*Metacello-BaseExtensions'
method: Collection
setRequiresInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setRequires: self asArray.
%

! Class Extension for DateAndTime

! ------------------- Instance methods for DateAndTime

category: '*Metacello-BaseExtensions'
method: DateAndTime
setTimestampInMetacelloConfig: aMetacelloConfig
    aMetacelloConfig setTimestampWithString: self printString
%

category: '*Metacello-BaseExtensions'
method: DateAndTime
setTimestampInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setTimestamp: 
		(aMetacelloVersionSpec project valueHolderSpec
			value: self printString;
			yourself)
%

! Class Extension for Integer

! ------------------- Instance methods for Integer

category: '*Metacello-BaseExtensions'
method: Integer
metacelloIntegerLessThanSelf: anInteger

	^anInteger < self
%

category: '*Metacello-BaseExtensions'
method: Integer
metacelloSemanticIntegerLessThanSelf: anInteger
    ^ anInteger < self
%

category: '*Metacello-BaseExtensions'
method: Integer
metacelloSemanticStringLessThanSelf: aString
    "string version components are always '<' integer component"

    ^ true
%

category: '*Metacello-BaseExtensions'
method: Integer
metacelloSemanticVersionComponentLessThan: aMetacelloVersonComponent
    ^ aMetacelloVersonComponent metacelloSemanticIntegerLessThanSelf: self
%

category: '*Metacello-BaseExtensions'
method: Integer
metacelloStringLessThanSelf: aString
	"string version components are always '<' integer component"
	
	^true
%

category: '*Metacello-BaseExtensions'
method: Integer
metacelloVersionComponentLessThan: aMetacelloVersonComponent

	^aMetacelloVersonComponent metacelloIntegerLessThanSelf: self
%

! Class Extension for Object

! ------------------- Instance methods for Object

category: '*Metacello-BaseExtensions'
method: Object
metacelloIntegerLessThanSelf: anInteger

	^self error: 'Invalid Metacello verson component - should be String or Integer.'
%

category: '*Metacello-BaseExtensions'
method: Object
metacelloSemanticIntegerLessThanSelf: anInteger
    ^ self error: 'Invalid Metacello verson component - should be String or Integer.'
%

category: '*Metacello-BaseExtensions'
method: Object
metacelloSemanticStringLessThanSelf: anInteger
    ^ self error: 'Invalid Metacello verson component - should be String or Integer.'
%

category: '*Metacello-BaseExtensions'
method: Object
metacelloSemanticVersionComponentLessThan: aMetacelloVersonComponent
    ^ self error: 'Invalid Metacello verson component - should be String or Integer.'
%

category: '*Metacello-BaseExtensions'
method: Object
metacelloStringLessThanSelf: anInteger

	^self error: 'Invalid Metacello verson component - should be String or Integer.'
%

category: '*Metacello-BaseExtensions'
method: Object
metacelloVersionComponentLessThan: aMetacelloVersonComponent

	^self error: 'Invalid Metacello verson component - should be String or Integer.'
%

! Class Extension for String

! ------------------- Instance methods for String

category: '*Metacello-BaseExtensions-scripting'
method: String
execute: projectSpecBlock against: aScriptExecutor
    aScriptExecutor executeString: self do: projectSpecBlock
%

category: '*Metacello-BaseExtensions-version comparison'
method: String
metacelloIntegerLessThanSelf: anInteger
	"integer version components are always '>' string component"

	^false
%

category: '*Metacello-BaseExtensions-version comparison'
method: String
metacelloSemanticIntegerLessThanSelf: anInteger
    "integer version components are always '>' string component"

    ^ true
%

category: '*Metacello-BaseExtensions-version comparison'
method: String
metacelloSemanticStringLessThanSelf: aString
    ^ aString < self
%

category: '*Metacello-BaseExtensions-version comparison'
method: String
metacelloSemanticVersionComponentLessThan: aMetacelloVersonComponent
    ^ aMetacelloVersonComponent metacelloSemanticStringLessThanSelf: self
%

category: '*Metacello-BaseExtensions-version comparison'
method: String
metacelloStringLessThanSelf: aString

	^aString < self
%

category: '*Metacello-BaseExtensions-version comparison'
method: String
metacelloVersionComponentLessThan: aMetacelloVersonComponent

	^aMetacelloVersonComponent metacelloStringLessThanSelf: self
%

category: '*Metacello-BaseExtensions'
method: String
setIncludesInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setIncludes: { self }.
%

category: '*Metacello-BaseExtensions'
method: String
setRequiresInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setRequires: { self }.
%

! Class Extension for Symbol

! ------------------- Instance methods for Symbol

category: '*Metacello-BaseExtensions'
method: Symbol
asMetacelloAttributeList
    ^ {self}
%

category: '*Metacello-BaseExtensions'
method: Symbol
asMetacelloAttributePath
    ^ ((AllUsers userWithId: 'GsDevKitLibrarianUser') objectNamed: 'MetacelloMethodSectionPath') with: {self}
%

category: '*Metacello-BaseExtensions'
method: Symbol
setForDo: aBlock withInMetacelloConfig: aMetacelloConstructore
    aMetacelloConstructore setFor: {self} do: aBlock
%

category: '*Metacello-BaseExtensions'
method: Symbol
setForVersion: aString withInMetacelloConfig: aMetacelloConstructore
    aMetacelloConstructore setFor: {self} version: aString
%

category: '*Metacello-BaseExtensions'
method: Symbol
setPostLoadDoItInMetacelloSpec: aMetacelloSpec
  self size = 0
    ifTrue: [ self error: 'Invalid selector' ].
  aMetacelloSpec
    setPostLoadDoIt:
      (aMetacelloSpec project valueHolderSpec
        value: self;
        yourself)
%

category: '*Metacello-BaseExtensions'
method: Symbol
setPreLoadDoItInMetacelloSpec: aMetacelloSpec
  self size = 0
    ifTrue: [ self error: 'Invalid selector' ].
  aMetacelloSpec
    setPreLoadDoIt:
      (aMetacelloSpec project valueHolderSpec
        value: self;
        yourself)
%

! Class Extension for UndefinedObject

! ------------------- Instance methods for UndefinedObject

category: '*Metacello-BaseExtensions'
method: UndefinedObject
asMetacelloSemanticVersionNumber
    ^ ((AllUsers userWithId: 'GsDevKitLibrarianUser') objectNamed: 'MetacelloSemanticVersionNumber') fromString: ''
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
asMetacelloVersionNumber

	^((AllUsers userWithId: 'GsDevKitLibrarianUser') objectNamed: 'MetacelloVersionNumber') fromString: ''
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
metacelloRegistrationHash
    ^ self hash
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
registrationsCompareEqual: aMetacelloProjectSpec
    ^ self = aMetacelloProjectSpec
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
setAuthorInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setAuthor: self
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
setBlessingInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setBlessing: self
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
setDescriptionInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setDescription: self
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
setPostLoadDoItInMetacelloSpec: aMetacelloSpec

	aMetacelloSpec setPostLoadDoIt: 
		(aMetacelloSpec project valueHolderSpec
			value: self;
			yourself)
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
setPreLoadDoItInMetacelloSpec: aMetacelloSpec

	aMetacelloSpec setPreLoadDoIt: 
		(aMetacelloSpec project valueHolderSpec
			value: self;
			yourself)
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
setProject: aString withInMetacelloConfig: aMetacelloConfig

	aMetacelloConfig setProject: aString withString: self
%

category: '*Metacello-BaseExtensions'
method: UndefinedObject
setTimestampInMetacelloVersion: aMetacelloVersionSpec

	aMetacelloVersionSpec setTimestamp: self
%

set compile_env: 0
