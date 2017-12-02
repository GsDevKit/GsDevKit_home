! Package: Cypress-Comparison

! Class Declarations

run
".,$s/inDictionary: UserGlobals/inDictionary: CypressPackageSymbolList/ "
UserGlobals at: #CypressPackageSymbolList put: Globals.
true
%

doit
(Object
	subclass: 'CypressPackageComparator'
	instVarNames: #( directoryPackageMap diskTimestamps diskSnapshots imageSnapshots snapshotDifferences currentPackageName currentAdditions currentRemovals )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-Comparison';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressPackageStringComparator'
	instVarNames: #( directoryPackageMap diskTimestamps diskSnapshots imageSnapshots snapshotDifferences currentPackageName currentOperations )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-Comparison';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

! Class Implementation for CypressPackageComparator

! ------------------- Class methods for CypressPackageComparator

category: 'instance creation'
classmethod: CypressPackageComparator
comparingPackageNamed: packageName fromDirectory: aDirectory

	^(self new)
		comparingPackageNamed: packageName fromDirectory: aDirectory;
		yourself
%

category: 'instance creation'
classmethod: CypressPackageComparator
new

	^super new
		initialize;
		yourself
%

! ------------------- Instance methods for CypressPackageComparator

category: 'comparing - private'
method: CypressPackageComparator
add: aDefinition to: aDictionary

	aDefinition
		classDefinition: [:classDefinition | self addClassDefinition: classDefinition to: aDictionary]
		methodDefinition: [:methodDefinition | self addMethodDefinition: methodDefinition to: aDictionary]
%

category: 'comparing - private'
method: CypressPackageComparator
addClassDefinition: classDefinition to: aDictionary

	(aDictionary at: classDefinition className ifAbsentPut: [Dictionary new])
		at: 'class category' put: classDefinition category;
		at: 'class comment' put: classDefinition comment;
		at: 'class definition' put: classDefinition classDefinitionString.
%

category: 'comparing - private'
method: CypressPackageComparator
addMethodDefinition: methodDefinition to: aDictionary

	((aDictionary at: methodDefinition className ifAbsentPut: [Dictionary new])
		at: (methodDefinition classIsMeta
				ifTrue: ['class methods']
				ifFalse: ['instance methods'])
		ifAbsentPut: [Dictionary new]) at: methodDefinition selector
			put: methodDefinition category -> methodDefinition source
%

category: 'comparing - private'
method: CypressPackageComparator
applyAddition: aCypressAddition

	self add: aCypressAddition definition to: self currentAdditions
%

category: 'comparing - private'
method: CypressPackageComparator
applyModification: aCypressModification

	self
		add: aCypressModification modification to: self currentAdditions;
		add: aCypressModification obsoletion to: self currentRemovals.
%

category: 'comparing - private'
method: CypressPackageComparator
applyRemoval: aCypressRemoval

	self add: aCypressRemoval definition to: self currentRemovals.
%

category: 'comparing'
method: CypressPackageComparator
compare

	diskSnapshots keys do: [:packageName |
		self resetCurrentForPackage: packageName.
		self currentPatchOperations do: [:each | each applyTo: self].
	].
	self resetCurrentForPackage: nil.
%

category: 'initializing'
method: CypressPackageComparator
comparingPackages: someNames fromDirectory: aDirectory

	(directoryPackageMap at: aDirectory ifAbsentPut: [OrderedCollection new])
		addAll: someNames.
	someNames do: 
			[:packageName |
			| reader modTime modTimestamp |
			reader := (CypressFileSystemRepository on: aDirectory) reader
						readPackageStructureForPackageNamed: packageName.
			diskSnapshots at: packageName put: reader packageStructure snapshot.
			modTime := System
						performOnServer: 'stat --printf=%y ' , reader packageDirectory.
			modTimestamp := (modTime indexOfSubCollection: 'stat:') = 1
						ifTrue: [nil]
						ifFalse: [self dateAndTimeFromUnixFormatString: modTime].
			diskTimestamps at: packageName put: modTimestamp.
			imageSnapshots at: packageName
				put: (CypressPackageDefinition named: packageName) snapshot]
%

category: 'comparing - private'
method: CypressPackageComparator
currentAdditions

	currentAdditions ifNil: [self updateCurrentAdditionsAndRemovals].
	^currentAdditions
%

category: 'comparing - private'
method: CypressPackageComparator
currentDiskSnapshot

	^diskSnapshots at: currentPackageName
%

category: 'comparing - private'
method: CypressPackageComparator
currentImageSnapshot

	^imageSnapshots at: currentPackageName
%

category: 'comparing - private'
method: CypressPackageComparator
currentPatchOperations

	^(CypressPatch fromBase: self currentDiskSnapshot toTarget: self currentImageSnapshot) operations.
%

category: 'comparing - private'
method: CypressPackageComparator
currentRemovals

	currentRemovals ifNil: [self updateCurrentAdditionsAndRemovals].
	^currentRemovals
%

category: 'initializing - private'
method: CypressPackageComparator
dateAndTimeFromUnixFormatString: aString
	"YYYY-MM-DDTHH:MM:SS +HHMM
	 Examples:
		| string |
		string := '2013-06-20 14:47:55.40271592140198 -0700'.
		(DateAndTimeANSI fromUnixFormatString: string) printString = '2013-06-20T14:47:55.40271592140198-07:00'.
	"

	| stream sign positionBias |
	stream := ReadStreamPortable on: aString.
	sign := aString at: aString size - 4.
	positionBias := stream class isLegacyStreamImplementation
				ifTrue: [1]
				ifFalse: [0].
	^DateAndTime
		year: (stream next: 4) asNumber
		month: (stream
				next;
				next: 2) asNumber
		day: (stream
				next;
				next: 2) asNumber
		hour: (stream
				next;
				next: 2) asNumber
		minute: (stream
				next;
				next: 2) asNumber
		second: (stream
				next;
				next: aString size - 6 - stream position + positionBias) asNumber
		offset: (Duration
				days: 0
				hours: (stream
						next;
						next;
						next: 2) asNumber
						* (sign == $- ifTrue: [-1] ifFalse: [1])
				minutes: (stream next: 2) asNumber
				seconds: 0)
%

category: 'comparing'
method: CypressPackageComparator
getDifferences

	self compare.
	^self snapshotDifferences
%

category: 'initializing - private'
method: CypressPackageComparator
initialize

	directoryPackageMap := Dictionary new.
	diskTimestamps := Dictionary new.
	diskSnapshots := Dictionary new.
	imageSnapshots := Dictionary new.
	snapshotDifferences := Dictionary new
		at: 'newer' put: (Dictionary with: 'Finished at' -> DateAndTime now);
		at: 'older' put: (Dictionary with: 'Finished at' -> DateAndTime now);
		yourself.
%

category: 'comparing - private'
method: CypressPackageComparator
resetCurrentForPackage: aStringOrNil

	currentPackageName := aStringOrNil.
	currentAdditions := nil.
	currentRemovals := nil.
%

category: 'accessing'
method: CypressPackageComparator
snapshotDifferences

	^snapshotDifferences
%

category: 'comparing - private'
method: CypressPackageComparator
updateCurrentAdditionsAndRemovals

	| oldTimestamp |
	currentAdditions := (snapshotDifferences at: 'newer')
				at: currentPackageName
				ifAbsentPut: [Dictionary new].
	oldTimestamp := (diskTimestamps at: currentPackageName) ifNil: [^self].
	currentRemovals := (snapshotDifferences at: 'older')
				at: currentPackageName
				ifAbsentPut: [Dictionary with: 'Timestamp' -> oldTimestamp printString].
%

! Class Implementation for CypressPackageStringComparator

! ------------------- Class methods for CypressPackageStringComparator

category: 'instance creation'
classmethod: CypressPackageStringComparator
comparingPackageNamed: packageName fromDirectory: aDirectory

	^(self new)
		comparingPackageNamed: packageName fromDirectory: aDirectory;
		yourself
%

category: 'instance creation'
classmethod: CypressPackageStringComparator
forCypress

	^(self new)
		comparingPackages: #('Cypress-Definitions' 'Cypress-Mocks' 'Cypress-Structure' 'Cypress-Tests' 'Cypress-GemStoneFileServer' 'Cypress-Comparison')
			fromDirectory: '/opt/git/CypressReferenceImplementation/';
		yourself
%

category: 'instance creation'
classmethod: CypressPackageStringComparator
new

	^super new
		initialize;
		yourself
%

! ------------------- Instance methods for CypressPackageStringComparator

category: 'comparing - private'
method: CypressPackageStringComparator
addAddition: aCypressModification to: aCollection
  aCypressModification definition
    classDefinition: [ :classDefinition | self addClassAddition: aCypressModification to: aCollection ]
    methodDefinition: [ :methodDefinition | self addMethodAddition: aCypressModification to: aCollection ]
%

category: 'comparing - private'
method: CypressPackageStringComparator
addClassAddition: aCypressModification to: aCollection
  aCollection
    add:
      {(aCypressModification definition details).
      #'addition'.
      #'class'.
      (aCypressModification definition classDefinitionString)}
%

category: 'comparing - private'
method: CypressPackageStringComparator
addClassModification: aCypressModification to: aCollection
  aCollection
    add:
      {(aCypressModification modification details).
      #'modification'.
      #'class'.
      (aCypressModification obsoletion classDefinitionString).
      (aCypressModification modification classDefinitionString)}
%

category: 'comparing - private'
method: CypressPackageStringComparator
addClassRemoval: aCypressModification to: aCollection
  aCollection
    add:
      {(aCypressModification definition details).
      #'removal'.
      #'class'.
      (aCypressModification definition classDefinitionString)}
%

category: 'comparing - private'
method: CypressPackageStringComparator
addMethodAddition: aCypressModification to: aCollection
  aCollection
    add:
      {(aCypressModification definition details).
      #'addition'.
      #'method'.
      (aCypressModification definition source)}
%

category: 'comparing - private'
method: CypressPackageStringComparator
addMethodModification: aCypressModification to: aCollection
  aCollection
    add:
      {(aCypressModification modification details).
      #'modification'.
      #'method'.
      (aCypressModification obsoletion source).
      (aCypressModification modification source)}
%

category: 'comparing - private'
method: CypressPackageStringComparator
addMethodRemoval: aCypressModification to: aCollection
  aCollection
    add:
      {(aCypressModification definition details).
      #'removal'.
      #'method'.
      (aCypressModification definition source)}
%

category: 'comparing - private'
method: CypressPackageStringComparator
addModification: aCypressModification to: aCollection
  aCypressModification modification
    classDefinition: [ :classDefinition | self addClassModification: aCypressModification to: aCollection ]
    methodDefinition: [ :methodDefinition | self addMethodModification: aCypressModification to: aCollection ]
%

category: 'comparing - private'
method: CypressPackageStringComparator
addRemoval: aCypressModification to: aCollection
  aCypressModification definition
    classDefinition: [ :classDefinition | self addClassRemoval: aCypressModification to: aCollection ]
    methodDefinition: [ :methodDefinition | self addMethodRemoval: aCypressModification to: aCollection ]
%

category: 'comparing - private'
method: CypressPackageStringComparator
applyAddition: aCypressAddition
  self addAddition: aCypressAddition to: self currentOperations
%

category: 'comparing - private'
method: CypressPackageStringComparator
applyModification: aCypressModification
  self addModification: aCypressModification to: self currentOperations
%

category: 'comparing - private'
method: CypressPackageStringComparator
applyRemoval: aCypressRemoval
  self addRemoval: aCypressRemoval to: self currentOperations
%

category: 'comparing'
method: CypressPackageStringComparator
compare

	diskSnapshots keys do: [:packageName |
		self resetCurrentForPackage: packageName.
		self currentPatchOperations do: [:each | each applyTo: self].
	].
	self resetCurrentForPackage: nil.
%

category: 'initializing'
method: CypressPackageStringComparator
comparingPackages: someNames fromDirectory: aDirectory
  (directoryPackageMap at: aDirectory ifAbsentPut: [ OrderedCollection new ])
    addAll: someNames.
  someNames
    do: [ :packageName | 
      | reader |
      reader := (CypressFileSystemRepository on: aDirectory) reader
        readPackageStructureForPackageNamed: packageName.
      diskSnapshots at: packageName put: reader packageStructure snapshot.
      imageSnapshots
        at: packageName
        put: (CypressPackageDefinition named: packageName) snapshot ]
%

category: 'comparing - private'
method: CypressPackageStringComparator
currentDiskSnapshot

	^diskSnapshots at: currentPackageName
%

category: 'comparing - private'
method: CypressPackageStringComparator
currentImageSnapshot

	^imageSnapshots at: currentPackageName
%

category: 'comparing - private'
method: CypressPackageStringComparator
currentOperations
  (self dynamicInstVarAt: #'currentOperations')
    ifNil: [ self updateCurrentOperations ].
  ^ self dynamicInstVarAt: #'currentOperations'
%

category: 'comparing - private'
method: CypressPackageStringComparator
currentOperations: aDictionary
  self dynamicInstVarAt: #'currentOperations' put: aDictionary
%

category: 'comparing - private'
method: CypressPackageStringComparator
currentPatchOperations

	^(CypressPatch fromBase: self currentDiskSnapshot toTarget: self currentImageSnapshot) operations.
%

category: 'comparing'
method: CypressPackageStringComparator
getDifferences

	self compare.
	^self snapshotDifferences
%

category: 'initializing - private'
method: CypressPackageStringComparator
initialize
  directoryPackageMap := Dictionary new.
  diskTimestamps := Dictionary new.
  diskSnapshots := Dictionary new.
  imageSnapshots := Dictionary new.
  snapshotDifferences := Dictionary new
    at: 'operations' put: Dictionary new;
    yourself
%

category: 'comparing - private'
method: CypressPackageStringComparator
resetCurrentForPackage: aStringOrNil
  currentPackageName := aStringOrNil.
  self currentOperations: nil
%

category: 'accessing'
method: CypressPackageStringComparator
snapshotDifferences

	^snapshotDifferences
%

category: 'comparing - private'
method: CypressPackageStringComparator
updateCurrentOperations
  self
    currentOperations:
      ((snapshotDifferences at: 'operations')
        at: currentPackageName
        ifAbsentPut: [ OrderedCollection new ])
%

! Class Extensions

! Class Extension for CypressClassDefinition

! ------------------- Instance methods for CypressClassDefinition

category: '*Cypress-Comparison'
method: CypressClassDefinition
category: aString

	category := aString
%

category: '*Cypress-Comparison'
method: CypressClassDefinition
classCreationSelector
  | type |
  type := self subclassType.
  type = ''
    ifTrue: [ ^ 'subclass:' ]
    ifFalse: [ 
      type = 'indexableSubclass'
        ifTrue: [ ^ 'indexableSubclass:' ]
        ifFalse: [ 
          type = 'byteSubclass'
            ifTrue: [ ^ 'byteSubclass:' ]
            ifFalse: [ self error: 'unknown subclass type: ' , type ] ] ]
%

category: '*Cypress-Comparison'
method: CypressClassDefinition
classDefinitionString

	| stream |
	stream := WriteStreamPortable on: (String new: 100).
	stream
		nextPut: $(;
		nextPutAll: superclassName;
		space;
		nextPutAll: self classCreationSelector;
		space;
		nextPutAll: self name printString.
	self subclassType = 'byteSubclass'
		ifFalse: 
			[stream
				lf;
				tab;
				nextPutAll: 'instVarNames: #(' , self instanceVariablesString , ')'].
	stream
		lf;
		tab;
		nextPutAll: 'classVars: #(' , self classVariablesString , ')';
		lf;
		tab;
		nextPutAll: 'classInstVars: #(' , self classInstanceVariablesString , ')';
		lf;
		tab;
		nextPutAll: 'poolDictionaries: #(' , self poolDictionariesString , ')';
		lf;
		tab;
		nextPutAll: 'inDictionary: ''<not-defined>''';
		nextPut: $);
		lf;
		tab;
		tab;
		nextPutAll: 'category: ' , self category printString , ';';
		lf;
		tab;
		tab;
		nextPutAll: 'comment: ' , self comment printString.
	^stream contents
%

! Class Extension for CypressPackageManager

! ------------------- Instance methods for CypressPackageManager

category: '*Cypress-Comparison'
method: CypressPackageManager
comparePackagesFrom: someCypressPackageInformations

	| packageNames savedLocation comparator |
	packageNames := someCypressPackageInformations collect: 
					[:each |
					savedLocation := each savedLocation.
					each name].
	comparator := CypressPackageComparator new.
	comparator comparingPackages: packageNames fromDirectory: savedLocation.
	^comparator getDifferences
%

! Class initializers 

doit
true.
%



! End of Package: Cypress-Comparison

run
UserGlobals removeKey: #CypressPackageSymbolList.
true
%

