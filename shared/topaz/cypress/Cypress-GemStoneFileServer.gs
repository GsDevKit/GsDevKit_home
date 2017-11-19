! Package: Cypress-GemStoneFileServer


! Remove existing behavior from package Cypress-GemStoneFileServer
!!!! This can be cleaned up when some package functionality is moved to the base system.

doit
| packageName |
packageName := 'Cypress-GemStoneFileServer'.
System myUserProfile symbolList do: [:symDict |
	symDict do: [:possibleClass |
			| toRemove |
		possibleClass isBehavior ifTrue: [
			{possibleClass. possibleClass class} do: [:aClass |
				aClass category = packageName
					ifTrue: [
							"*anythingbutpackagename[-anything]"
						toRemove := aClass categoryNames select: 
										[:each |
										(each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])
														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]])
										or: [each first ~= $*]]
					]
					ifFalse: [
							"*packagename[-anything]"
						toRemove := aClass categoryNames select: 
										[:each |
										each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])
														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]]]
					].
				toRemove do: [:each | aClass removeCategory: each].
			]
		]
	]
].
true.
%


! Class Declarations

doit
(Object
	subclass: 'CypressAbstractPackageFiler'
	instVarNames: #( repository packageDirectory packageStructure )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageFiler
	subclass: 'CypressAbstractFileoutWriter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileoutWriter
	subclass: 'CypressSmalltalkFileoutWriter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileoutWriter
	subclass: 'CypressTopazFileoutWriter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageFiler
	subclass: 'CypressAbstractPackageReader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageReader
	subclass: 'CypressDoNothingPackageReader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageReader
	subclass: 'CypressFileTreeFormatPackageReader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageReader
	subclass: 'CypressFlexiblePackageReader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageReader
	subclass: 'CypressPackageReader'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageFiler
	subclass: 'CypressAbstractPackageWriter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #( specials )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageWriter
	subclass: 'CypressFileTreeFormatPackageWriter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageWriter
	subclass: 'CypressPackageWriter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageWriter
	subclass: 'CypressStrictFileTreeFormatDoNothingPackageWriter'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressFileUtilities'
	instVarNames: #(  )
	classVars: #( Current )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressFileUtilities
	subclass: 'CypressGemStoneDirectoryUtilities'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-GemStoneFileServer';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for CypressAbstractPackageFiler

! ------------------- Class methods for CypressAbstractPackageFiler

category: 'instance creation'
classmethod: CypressAbstractPackageFiler
forRepository: aCypressFileSystemRepository

	^self new
		initializeForRepository: aCypressFileSystemRepository;
		yourself.
%

! ------------------- Instance methods for CypressAbstractPackageFiler

category: 'private'
method: CypressAbstractPackageFiler
fileUtils

	^CypressFileUtilities current
%

category: 'initializing - private'
method: CypressAbstractPackageFiler
initializeForRepository: aCypressFileSystemRepository

	repository := aCypressFileSystemRepository
%

category: 'accessing'
method: CypressAbstractPackageFiler
packageDirectory

	^packageDirectory
%

category: 'accessing'
method: CypressAbstractPackageFiler
packageDirectory: aDirectory

	packageDirectory := aDirectory
%

category: 'accessing'
method: CypressAbstractPackageFiler
packageStructure

	^packageStructure
%

category: 'accessing'
method: CypressAbstractPackageFiler
packageStructure: aPackageStructure

	packageStructure := aPackageStructure
%

category: 'accessing'
method: CypressAbstractPackageFiler
propertiesFileNameExtension

	^'.ston'
%

category: 'accessing'
method: CypressAbstractPackageFiler
propertiesFileNameExtensions

	^Array with: self propertiesFileNameExtension
%

category: 'accessing'
method: CypressAbstractPackageFiler
repository

	^repository
%

! Class Implementation for CypressAbstractFileoutWriter

! ------------------- Instance methods for CypressAbstractFileoutWriter

category: 'accessing'
method: CypressAbstractFileoutWriter
classesInDependencyOrder

	^(GsGeneralDependencySorter
		on: self packageStructure classes
		dependsOn: [:candidate | candidate superclassName]
		dependent: [:candidate | candidate className])
			inOrder
%

category: 'accessing'
method: CypressAbstractFileoutWriter
classesWithInitializers

	^self classesInDependencyOrder
		select: [:each | each classMethods anySatisfy: [:method | method selector = 'initialize']]
%

category: 'private'
method: CypressAbstractFileoutWriter
determinePackageDirectory

	^self fileUtils ensureDirectoryExists: self repository directoryPath
%

category: 'accessing'
method: CypressAbstractFileoutWriter
extensions

	^self packageStructure extensions
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOut: aString implementationsFrom: someClassStructures on: aStream

	someClassStructures
		do: [:each | self fileOutType: aString implementationOf: each on: aStream]
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOut: aString methods: someMethodStructures on: aStream

	someMethodStructures isEmpty ifTrue: [^self].
	self
		fileOut: aString methodsPreambleFor: someMethodStructures any classStructure on: aStream;
		fileOutMethods: someMethodStructures on: aStream
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutClassDeclarationsOn: aStream

	self classesInDependencyOrder
		do: [:classStructure | self fileOutClassDeclaration: classStructure on: aStream]
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutClassesOn: aStream

	self
		fileOutClassesPreambleOn: aStream;
		fileOutClassDeclarationsOn: aStream;
		fileOutClassImplementationsOn: aStream
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutClassImplementationsOn: aStream

	self
		fileOut: 'Class Implementation'
		implementationsFrom: self classesInDependencyOrder
		on: aStream
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutClassInitializersOn: aStream

	self fileOutClassInitializersPreambleOn: aStream.
	self classesWithInitializers do: [:each | self fileOutClassInitializerFor: each on: aStream].
	self fileOutClassInitializersPostambleOn: aStream.
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutExtensionImplementationsOn: aStream
  | sortedExtensions |
  sortedExtensions := self extensions
    asSortedCollection: [ :a :b | a className <= b className ].
  self
    fileOut: 'Class Extension'
    implementationsFrom: sortedExtensions
    on: aStream
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutExtensionsOn: aStream

	self
		fileOutExtensionsPreambleOn: aStream;
		fileOutExtensionImplementationsOn: aStream
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutMethods: someMethodStructures on: aStream

	(someMethodStructures
		asSortedCollection: [:a :b | a selector <= b selector])
			do: [:methodStructure | self fileOutMethod: methodStructure on: aStream]
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutPackageOn: aStream

	self
		fileOutPackagePreambleOn: aStream;
		fileOutClassesOn: aStream;
		fileOutExtensionsOn: aStream;
		fileOutClassInitializersOn: aStream;
		fileOutPackagePostambleOn: aStream
%

category: 'writing - private'
method: CypressAbstractFileoutWriter
fileOutType: aString implementationOf: classStructure on: aStream

	self
		fileOutPreambleType: aString
			for: classStructure
			on: aStream;
		fileOut: 'Class'
			methods: classStructure classMethods
			on: aStream;
		fileOut: 'Instance'
			methods: classStructure instanceMethods
			on: aStream
%

category: 'accessing'
method: CypressAbstractFileoutWriter
packageName

	^self packageStructure packageName
%

category: 'accessing'
method: CypressAbstractFileoutWriter
packageNameExtension

	^self subclassResponsibility: #packageNameExtension
%

category: 'writing'
method: CypressAbstractFileoutWriter
writePackageStructure

	CypressFileUtilities current
		writeStreamFor: self packageStructure packageName, self packageNameExtension
		in: self packageDirectory
		do: [:fileStream | fileStream nextPutAll: (String streamContents: [:stream | self fileOutPackageOn: stream])]
%

category: 'writing'
method: CypressAbstractFileoutWriter
writePackageStructure: aPackageStructure

	self
		packageStructure: aPackageStructure;
		packageDirectory: self determinePackageDirectory;
		writePackageStructure
%

! Class Implementation for CypressSmalltalkFileoutWriter

! ------------------- Instance methods for CypressSmalltalkFileoutWriter

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOut: aString methodsPreambleFor: classStructure on: aStream

	aStream
		nextChunkPut: '" ------------------- ', aString, ' methods for ', classStructure name, '"'; lf;
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutClassDeclaration: classStructure on: aStream

	aStream
		nextPutAll: '(', classStructure superclassName; lf;
		nextPutAll: '	subclass: ', classStructure className asString printString; lf;
		nextPutAll: '	instVarNames: #( ', classStructure instanceVariablesString, ' )'; lf;
		nextPutAll: '	classVars: #( ', classStructure classVariablesString, ' )'; lf;
		nextPutAll: '	classInstVars: #( ', classStructure classInstanceVariablesString, ' )'; lf;
		nextPutAll: '	poolDictionaries: #())'; lf;
		nextPutAll: '		category: ', classStructure category printString, ';'; lf;
		nextChunkPut: '		comment: ', classStructure comment printString; lf;
		lf.
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutClassesPreambleOn: aStream

	aStream
		nextChunkPut: '" Class Declarations "'; lf;
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutClassInitializerFor: classStructure on: aStream

	aStream
		nextChunkPut: classStructure className, ' initialize.'; lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutClassInitializersPostambleOn: aStream

	aStream
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutClassInitializersPreambleOn: aStream

	aStream
		nextChunkPut: '" Class initializers "'; lf;
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutExtensionsPreambleOn: aStream

	aStream
		nextChunkPut: '" Class Extensions "'; lf;
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutMethod: methodStructure on: aStream

	aStream
		nextPutAll: '!';
		nextChunkPut: methodStructure classStructure className, (methodStructure isMetaclass ifTrue: [' class methodsFor: '] ifFalse: [' methodsFor: ']), methodStructure category printString; lf;
		nextChunkPut: methodStructure source;
		nextChunkPut: ' ';
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutPackagePostambleOn: aStream

	aStream
		lf;
		lf;
		nextChunkPut: '" End of Package: ', self packageName, '"'; lf;
		lf;
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutPackagePreambleOn: aStream

	aStream
		nextChunkPut: '" Package: ', self packageName, '"'; lf;
		lf;
		lf
%

category: 'writing - private'
method: CypressSmalltalkFileoutWriter
fileOutPreambleType: aString for: classStructure on: aStream

	aStream
		nextChunkPut: '" ', aString, ' for ', classStructure name, '"'; lf;
		lf
%

category: 'accessing'
method: CypressSmalltalkFileoutWriter
packageNameExtension

	^'.st'
%

! Class Implementation for CypressTopazFileoutWriter

! ------------------- Instance methods for CypressTopazFileoutWriter

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOut: aString methodsPreambleFor: classStructure on: aStream

	aStream
		nextPutAll: '! ------------------- ', aString, ' methods for ', classStructure name; lf;
		lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutClassDeclaration: classStructure on: aStream

	aStream
		nextPutAll: 'doit'; lf;
		nextPutAll: '(', classStructure superclassName; lf;
		nextPutAll: '	subclass: ', classStructure className asString printString; lf;
		nextPutAll: '	instVarNames: #( ', classStructure instanceVariablesString, ' )'; lf;
		nextPutAll: '	classVars: #( ', classStructure classVariablesString, ' )'; lf;
		nextPutAll: '	classInstVars: #( ', classStructure classInstanceVariablesString, ' )'; lf;
		nextPutAll: '	poolDictionaries: #()'; lf;
		nextPutAll: '	inDictionary: Globals'; lf;
		nextPutAll: '	options: #())'; lf;
		nextPutAll: '		category: ', classStructure category printString, ';'; lf;
		nextPutAll: '		comment: ', classStructure comment printString, ';'; lf;
		nextPutAll: '		immediateInvariant.'; lf;
                nextPutAll: 'true.'; lf;
		nextPutAll: '%'; lf;
		lf.
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutClassesPreambleOn: aStream

	aStream
		nextPutAll: '! Class Declarations'; lf;
		lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutClassInitializerFor: classStructure on: aStream

	aStream
		nextPutAll: classStructure className, ' initialize.'; lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutClassInitializersPostambleOn: aStream

	aStream
                nextPutAll: 'true.'; lf;
		nextPutAll: '%'; lf;
		lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutClassInitializersPreambleOn: aStream

	aStream
		nextPutAll: '! Class initializers '; lf;
		lf;
		nextPutAll: 'doit'; lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutExtensionsPreambleOn: aStream

	aStream
		nextPutAll: '! Class Extensions'; lf;
		lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutMethod: methodStructure on: aStream

	aStream
		nextPutAll: 'category: ', methodStructure category printString; lf;
		nextPutAll: (methodStructure isMetaclass ifTrue: ['classmethod: '] ifFalse: ['method: ']), methodStructure classStructure className; lf;
		nextPutAll: methodStructure source.
	methodStructure source last = Character lf
		ifFalse: [aStream lf].
	aStream nextPutAll: '%'; lf;
		lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutPackagePostambleOn: aStream

	aStream
		lf;
		lf;
		nextPutAll: '! End of Package: ', self packageName; lf;
		lf;
		lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutPackagePreambleOn: aStream

	aStream
		nextPutAll: '! Package: ', self packageName; lf;
		lf;
		lf;
		nextPutAll: '! Remove existing behavior from package ', self packageName; lf;
		nextPutAll: '!!!! This can be cleaned up when some package functionality is moved to the base system.'; lf;
		lf;
		nextPutAll: 'doit'; lf;
		nextPutAll: '| packageName |'; lf;
		nextPutAll: 'packageName := ', self packageName printString, '.'; lf;
		nextPutAll: 'System myUserProfile symbolList do: [:symDict |'; lf;
		nextPutAll: '	symDict do: [:possibleClass |'; lf;
		nextPutAll: '			| toRemove |'; lf;
		nextPutAll: '		possibleClass isBehavior ifTrue: ['; lf;
		nextPutAll: '			{possibleClass. possibleClass class} do: [:aClass |'; lf;
		nextPutAll: '				aClass category = packageName'; lf;
		nextPutAll: '					ifTrue: ['; lf;
		nextPutAll: '							"*anythingbutpackagename[-anything]"'; lf;
		nextPutAll: '						toRemove := aClass categoryNames select: '; lf;
		nextPutAll: '										[:each |'; lf;
		nextPutAll: '										(each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])'; lf;
		nextPutAll: '														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]])'; lf;
		nextPutAll: '										or: [each first ~= $*]]'; lf;
		nextPutAll: '					]'; lf;
		nextPutAll: '					ifFalse: ['; lf;
		nextPutAll: '							"*packagename[-anything]"'; lf;
		nextPutAll: '						toRemove := aClass categoryNames select: '; lf;
		nextPutAll: '										[:each |'; lf;
		nextPutAll: '										each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])'; lf;
		nextPutAll: '														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]]]'; lf;
		nextPutAll: '					].'; lf;
		nextPutAll: '				toRemove do: [:each | aClass removeCategory: each].'; lf;
		nextPutAll: '			]'; lf;
		nextPutAll: '		]'; lf;
		nextPutAll: '	]'; lf;
		nextPutAll: '].'; lf;
                nextPutAll: 'true.'; lf;
		nextPutAll: '%'; lf;
		lf;
		lf
%

category: 'writing - private'
method: CypressTopazFileoutWriter
fileOutPreambleType: aString for: classStructure on: aStream

	aStream
		nextPutAll: '! ', aString, ' for ', classStructure name; lf;
		lf
%

category: 'accessing'
method: CypressTopazFileoutWriter
packageNameExtension

	^'.gs'
%

! Class Implementation for CypressAbstractPackageReader

! ------------------- Instance methods for CypressAbstractPackageReader

category: 'private'
method: CypressAbstractPackageReader
classStructureFrom: classPropertiesDict

	^(CypressClassStructure new)
		packageStructure: self packageStructure;
		isClassExtension: true;
		properties: classPropertiesDict;
		yourself
%

category: 'private'
method: CypressAbstractPackageReader
classStructureFrom: classPropertiesDict comment: classComment

	^(self classStructureFrom: classPropertiesDict)
		isClassExtension: false;
		comment: classComment;
		yourself
%

category: 'reading'
method: CypressAbstractPackageReader
isPropertiesFileDirectoryEntry: entry

	^self propertiesFileNameExtensions
		anySatisfy: [:each | entry endsWith: '/properties' , each]
%

category: 'accessing'
method: CypressAbstractPackageReader
packageExtension

	^self packageStructure
		packageExtensionOr: [self repository packageExtension]
%

category: 'reading'
method: CypressAbstractPackageReader
readClassCommentFromDirectoryEntries: entries

	self fileUtils readStreamFor: (entries
				detect: [:entry | entry endsWith: '/README.md']
				ifNone: [^''])
		do: [:fileStream | ^fileStream contents]
%

category: 'reading'
method: CypressAbstractPackageReader
readClassPropertiesFromDirectoryEntries: entries

	self fileUtils readStreamFor: (entries
				detect: [:entry | self isPropertiesFileDirectoryEntry: entry]
				ifNone: [^Dictionary new])
		do: [:fileStream | ^CypressJsonParser parseStream: fileStream]
%

category: 'reading'
method: CypressAbstractPackageReader
readClassStructureFromEntry: classEntry

	| classDirectory classPropertiesDict classComment entries classStructure |
	classDirectory := classEntry.
	entries := self fileUtils directoryEntriesFrom: classDirectory.
	classPropertiesDict := self
				readClassPropertiesFromDirectoryEntries: entries.
	classComment := self readClassCommentFromDirectoryEntries: entries.
	classStructure := self classStructureFrom: classPropertiesDict
				comment: classComment.
	self readMethodStructureFor: classStructure in: entries.
	^classStructure
%

category: 'reading'
method: CypressAbstractPackageReader
readCypressFormatMethodStructureFrom: fileStream intoClassStructure: classStructure meta: isMeta methods: methods

	| notice category source selector |
	(fileStream peekFor: $")
		ifTrue: [fileStream nextLine]
		ifFalse: [self error: 'Method does not have valid Cypress format'].
	(fileStream match: 'notice: ')
		ifTrue: [notice := fileStream nextLine trimSeparators]
		ifFalse: [self error: 'Method does not have valid Cypress format'].
	(fileStream match: 'category: ')
		ifTrue: [category := fileStream nextLine trimSeparators]
		ifFalse: [self error: 'Method does not have valid Cypress format'].
	(fileStream peekFor: $")
		ifTrue: [fileStream nextLine]
		ifFalse: [self error: 'Method does not have valid Cypress format'].
	source := fileStream upToEnd.
	selector := UndefinedObject parseSelectorFrom: source.
	methods at: selector
		put: ((CypressMethodStructure new)
				packageStructure: self packageStructure;
				classStructure: classStructure;
				name: selector;
				isMetaclass: isMeta;
				selector: selector;
				category: category;
				source: source;
				yourself)
%

category: 'reading'
method: CypressAbstractPackageReader
readExtensionClassStructureFromEntry: classEntry

	| classPropertiesDict entries classStructure |
	entries := self fileUtils directoryEntriesFrom: classEntry.
	classPropertiesDict := self
				readClassPropertiesFromDirectoryEntries: entries.
	classStructure := self classStructureFrom: classPropertiesDict.
	self readMethodStructureFor: classStructure in: entries.
	^classStructure
%

category: 'reading'
method: CypressAbstractPackageReader
readFileTreeFormatMethodStructureFrom: fileStream intoClassStructure: classStructure meta: isMeta methods: methods

	| category source selector |
	category := fileStream nextLine trimSeparators.
	source := fileStream upToEnd.
	selector := UndefinedObject parseSelectorFrom: source.
	methods at: selector
		put: ((CypressMethodStructure new)
				packageStructure: self packageStructure;
				classStructure: classStructure;
				name: selector;
				isMetaclass: isMeta;
				selector: selector;
				category: category;
				source: source;
				yourself)
%

category: 'reading'
method: CypressAbstractPackageReader
readMethodStructureFor: classStructure in: entries

	entries do: 
			[:entry |
			| methods isMeta |
			methods := (isMeta := entry endsWith: '/class')
						ifTrue: [classStructure classMethods]
						ifFalse: [classStructure instanceMethods].
			((entry endsWith: '/instance') or: [entry endsWith: '/class'])
				ifTrue: 
					[((self fileUtils directoryEntriesFrom: entry)
						select: [:each | each endsWith: '.st']) do: 
								[:methodEntry |
								self fileUtils readStreamFor: methodEntry
									do: 
										[:fileStream |
										self
											readMethodStructureFrom: fileStream
											intoClassStructure: classStructure
											meta: isMeta
											methods: methods]]]]
%

category: 'reading'
method: CypressAbstractPackageReader
readMethodStructureFrom: fileStream intoClassStructure: classStructure meta: isMeta methods: methods

	self subclassResponsibility: #readMethodStructureFrom:intoClassStructure:meta:methods:
%

category: 'reading'
method: CypressAbstractPackageReader
readPackageStructure

   (self fileUtils directoryEntriesFrom: self packageDirectory)
        do: [ :entry | 
		(self isPropertiesFileDirectoryEntry: entry)
			ifTrue: [ self packageStructure properties: (self readPropertiesFile: entry) ].
            (entry endsWith: '.class')
                ifTrue: [ self packageStructure classes add: (self readClassStructureFromEntry: entry) ].
            (entry endsWith: '.extension')
                ifTrue: [ self packageStructure extensions add: (self readExtensionClassStructureFromEntry: entry) ] ]
%

category: 'reading'
method: CypressAbstractPackageReader
readPackageStructureForPackageNamed: packageName

	| structureName |
	structureName := packageName , self repository packageExtension.
	self
		packageStructure: (CypressPackageStructure named: structureName);
		packageDirectory: (self fileUtils directoryFromPath: structureName
					relativeTo: self repository directoryPath);
		readPackageStructure
%

category: 'reading'
method: CypressAbstractPackageReader
readPropertiesFile: entry

	self fileUtils
		readStreamFor: entry
		do: [:fileStream | ^CypressJsonParser parseStream: fileStream]
%

! Class Implementation for CypressDoNothingPackageReader

! ------------------- Instance methods for CypressDoNothingPackageReader

category: 'reading'
method: CypressDoNothingPackageReader
readPackageStructure
%

! Class Implementation for CypressFileTreeFormatPackageReader

! ------------------- Instance methods for CypressFileTreeFormatPackageReader

category: 'private'
method: CypressFileTreeFormatPackageReader
classStructureFrom: fileteeClassPropertiesDict comment: classComment
  | classPropertiesDict subclassType filetreeSubclassType |
  classPropertiesDict := fileteeClassPropertiesDict copy.
  filetreeSubclassType := classPropertiesDict at: 'type'.
  filetreeSubclassType = 'normal'
    ifTrue: [ subclassType := '' ]
    ifFalse: [ 
      filetreeSubclassType = 'variable'
        ifTrue: [ subclassType := 'indexableSubclass' ]
        ifFalse: [ 
          filetreeSubclassType = 'bytes'
            ifTrue: [ subclassType := 'byteSubclass' ]
            ifFalse: [ self error: 'unknown subclass type: ' , filetreeSubclassType printString ] ] ].
  classPropertiesDict at: '_gs_subclassType' put: subclassType.
  ^ super classStructureFrom: classPropertiesDict comment: classComment
%

category: 'accessing'
method: CypressFileTreeFormatPackageReader
propertiesFileNameExtension

	^'.json'
%

category: 'accessing'
method: CypressFileTreeFormatPackageReader
propertiesFileNameExtensions

	^Array
		with: super propertiesFileNameExtension
		with: self propertiesFileNameExtension
%

category: 'reading'
method: CypressFileTreeFormatPackageReader
readMethodStructureFrom: fileStream intoClassStructure: classStructure meta: isMeta methods: methods
	"Strict!"

	self
		readFileTreeFormatMethodStructureFrom: fileStream
		intoClassStructure: classStructure
		meta: isMeta
		methods: methods
%

! Class Implementation for CypressFlexiblePackageReader

! ------------------- Instance methods for CypressFlexiblePackageReader

category: 'reading'
method: CypressFlexiblePackageReader
isPropertiesFileDirectoryEntry: entry
	"Expect .ston properties file, but tolerate .json if present."

	^(super isPropertiesFileDirectoryEntry: entry)
		or: [entry endsWith: '/properties.json']
%

category: 'reading'
method: CypressFlexiblePackageReader
readMethodStructureFrom: fileStream intoClassStructure: classStructure meta: isMeta methods: methods
	"If the stream begins with a double quote, process it on the assumption it is a Cypress-format method.
	 Otherwise, treat it as a FileTree-format method."

	fileStream peek = $"
		ifTrue: 
			[self
				readCypressFormatMethodStructureFrom: fileStream
				intoClassStructure: classStructure
				meta: isMeta
				methods: methods]
		ifFalse: 
			[self
				readFileTreeFormatMethodStructureFrom: fileStream
				intoClassStructure: classStructure
				meta: isMeta
				methods: methods]
%

! Class Implementation for CypressPackageReader

! ------------------- Instance methods for CypressPackageReader

category: 'reading'
method: CypressPackageReader
readMethodStructureFrom: fileStream intoClassStructure: classStructure meta: isMeta methods: methods
	"Strict!"

	self
		readCypressFormatMethodStructureFrom: fileStream
		intoClassStructure: classStructure
		meta: isMeta
		methods: methods
%

! Class Implementation for CypressAbstractPackageWriter

! ------------------- Class methods for CypressAbstractPackageWriter

category: 'initialization'
classmethod: CypressAbstractPackageWriter
initializeSpecials
	"Valid binarySelector characters  '!' | '%' | '&' | '*' | '+' | ','' | '/' | '<' | '=' | '>' | '?' | '@' | '\' | '~' | '|' | '-'"

	| map |
	map := Dictionary new.
	map
		at: $! put: 'bang';
		at: $% put: 'percent';
		at: $& put: 'and';
		at: $* put: 'star';
		at: $+ put: 'plus';
		at: $, put: 'comma';
		at: $- put: 'minus';
		at: $/ put: 'slash';
		at: $< put: 'less';
		at: $= put: 'equals';
		at: $> put: 'more';
		at: $? put: 'wat';
		at: $@ put: 'at';
		at: $\ put: 'backslash';
		at: $| put: 'pipe';
		at: $~ put: 'tilde'.
	map keys do: [:key | map at: (map at: key) put: key].
	^map
%

category: 'accessing'
classmethod: CypressAbstractPackageWriter
specials

	^specials ifNil: [specials := self initializeSpecials]
%

! ------------------- Instance methods for CypressAbstractPackageWriter

category: 'private'
method: CypressAbstractPackageWriter
determinePackageDirectory

	^self fileUtils ensureDirectoryExists: (self fileUtils
				directoryFromPath: self packageStructure name
				relativeTo: self repository directoryPath)
%

category: 'private'
method: CypressAbstractPackageWriter
directoryForDirectoryNamed: directoryNameOrPath

	^directoryNameOrPath = '.'
		ifTrue: [self fileUtils ensureDirectoryExists: self packageDirectory]
		ifFalse: [self subPackageFileDirectoryFor: directoryNameOrPath]
%

category: 'private'
method: CypressAbstractPackageWriter
fileNameForSelector: selector

	^selector last = $:
		ifTrue: [selector copyReplacing: $: with: $.]
		ifFalse: 
			[(selector first isLetter or: [selector first = $_])
				ifTrue: [selector]
				ifFalse: 
					[| specials |
					specials := self class specials.
					String streamContents: 
							[:output |
							output nextPut: $^.
							selector do: [:each | output nextPutAll: (specials at: each)]
								separatedBy: [output nextPut: $.]]]]
%

category: 'writing'
method: CypressAbstractPackageWriter
removeOldReplacingWithNew
  self fileUtils deleteAll: self packageDirectory.
  self writePropertiesFile.
  self writePackageStructure
%

category: 'private'
method: CypressAbstractPackageWriter
subPackageFileDirectoryFor: directoryNameOrPath

	| dir |
	dir := self fileUtils directoryFromPath: directoryNameOrPath
				relativeTo: self packageDirectory.
	self fileUtils ensureDirectoryExists: dir.
	^dir
%

category: 'writing'
method: CypressAbstractPackageWriter
writeClassComment: classStructure on: fileStream

	fileStream nextPutAll: classStructure comment withUnixLineEndings
%

category: 'writing'
method: CypressAbstractPackageWriter
writeClassStructure: classStructure to: classPath

	self
		writeInDirectoryName: classPath
			fileName: 'README'
			extension: '.md'
			visit: [:fileStream | self writeClassComment: classStructure on: fileStream];
		writeInDirectoryName: classPath
			fileName: 'properties'
			extension: self propertiesFileNameExtension
			visit: [:fileStream | classStructure  properties writeCypressJsonOn: fileStream]
%

category: 'writing'
method: CypressAbstractPackageWriter
writeExtensionClassStructure: classStructure to: classPath

	self
		writeInDirectoryName: classPath
		fileName: 'properties'
		extension: self propertiesFileNameExtension
		visit: 
			[:fileStream |
			(Dictionary with: 'name' -> classStructure className)
				writeCypressJsonOn: fileStream]
%

category: 'private'
method: CypressAbstractPackageWriter
writeInDirectoryName: directoryNameOrPath fileName: fileName extension: ext visit: visitBlock

	| directory |
	directory := self directoryForDirectoryNamed: directoryNameOrPath.
	self fileUtils
		writeStreamFor: fileName , ext
		in: directory
		do: [:fileStream | visitBlock value: fileStream]
%

category: 'writing'
method: CypressAbstractPackageWriter
writeMethodStructure: methodStructure onStream: fileStream

	self subclassResponsibility: #writeMethodStructure:onStream:
%

category: 'writing'
method: CypressAbstractPackageWriter
writeMethodStructure: methodStructure to: methodPath

	| filename |
	filename := self fileNameForSelector: methodStructure selector.
	self
		writeInDirectoryName: methodPath
		fileName: filename
		extension: '.st'
		visit: [:fileStream | self writeMethodStructure: methodStructure onStream: fileStream]
%

category: 'writing'
method: CypressAbstractPackageWriter
writePackageStructure

	self
		writePackageStructureClasses: self packageStructure classes
			isClassExtension: false;
		writePackageStructureClasses: self packageStructure extensions
			isClassExtension: true
%

category: 'writing'
method: CypressAbstractPackageWriter
writePackageStructure: aPackageStructure

	self
		packageStructure: aPackageStructure;
		packageDirectory: self determinePackageDirectory;
		removeOldReplacingWithNew
%

category: 'writing'
method: CypressAbstractPackageWriter
writePackageStructureClasses: classStructures isClassExtension: isClassExtension

	| classDirExtension |
	classDirExtension := isClassExtension
				ifTrue: ['.extension']
				ifFalse: ['.class'].
	classStructures do: 
			[:classStructure |
			| classPath instanceMethodPath classMethodPath |
			classPath := classStructure className , classDirExtension
						, self fileUtils pathNameDelimiter asString.
			isClassExtension
				ifTrue: [self writeExtensionClassStructure: classStructure to: classPath]
				ifFalse: [self writeClassStructure: classStructure to: classPath].
			instanceMethodPath := classPath , 'instance' , self fileUtils pathNameDelimiter asString.
			classStructure instanceMethods
				do: [:methodStructure | self writeMethodStructure: methodStructure to: instanceMethodPath].
			classMethodPath := classPath , 'class' , self fileUtils pathNameDelimiter asString.
			classStructure classMethods
				do: [:methodStructure | self writeMethodStructure: methodStructure to: classMethodPath]]
%

category: 'writing'
method: CypressAbstractPackageWriter
writePropertiesFile

	self
		writeInDirectoryName: '.'
		fileName: 'properties'
		extension: self propertiesFileNameExtension
		visit: [:fileStream | Dictionary new writeCypressJsonOn: fileStream]
%

! Class Implementation for CypressFileTreeFormatPackageWriter

! ------------------- Instance methods for CypressFileTreeFormatPackageWriter

category: 'private'
method: CypressFileTreeFormatPackageWriter
adjustClassPropertiesForFileTree: classPropertyDict
  | props classType |
  props := classPropertyDict copy.
  classType := (props at: '_gs_subclassType' ifAbsent: [  ])
    ifNil: [ 'normal' ]
    ifNotNil: [ :type | 
      props removeKey: '_gs_subclassType'.
      type = 'indexableSubclass'
        ifTrue: [ 'variable' ]
        ifFalse: [ 
          type = 'byteSubclass'
            ifTrue: [ 'bytes' ]
            ifFalse: [ self error: 'unknown subclass type: ' , type ] ] ].
  props at: 'type' put: classType.
  ^ props
%

category: 'accessing'
method: CypressFileTreeFormatPackageWriter
propertiesFileNameExtension
  ^ '.json'
%

category: 'writing'
method: CypressFileTreeFormatPackageWriter
removeOldReplacingWithNew
  self fileUtils
    deleteAll: self packageDirectory
    rejecting: [ :filename | 
      "do not delete the monticello.meta directory to preserve existing Monticello meta data.
       Equivalent behavior to MCFileTreeRepository with Metadata property set to false."
      (filename endsWith: 'monticello.meta')
        or: [ filename endsWith: '.filetree' ] ].
  self writePropertiesFile.
  self writePackageStructure
%

category: 'writing'
method: CypressFileTreeFormatPackageWriter
writeClassStructure: classStructure to: classPath
  self
    writeInDirectoryName: classPath
      fileName: 'README'
      extension: '.md'
      visit: [ :fileStream | self writeClassComment: classStructure on: fileStream ];
    writeInDirectoryName: classPath
      fileName: 'properties'
      extension: self propertiesFileNameExtension
      visit: [ :fileStream | 
        (self adjustClassPropertiesForFileTree: classStructure properties)
          writeFiletreeJsonOn: fileStream ]
%

category: 'writing'
method: CypressFileTreeFormatPackageWriter
writeExtensionClassStructure: classStructure to: classPath
  self
    writeInDirectoryName: classPath
    fileName: 'properties'
    extension: self propertiesFileNameExtension
    visit: [ :fileStream | 
      (Dictionary with: 'name' -> classStructure className)
        writeFiletreeJsonOn: fileStream ]
%

category: 'writing'
method: CypressFileTreeFormatPackageWriter
writeMethodStructure: methodStructure onStream: fileStream

	fileStream
		nextPutAll: methodStructure category; lf;
		nextPutAll: methodStructure source withUnixLineEndings
%

category: 'writing'
method: CypressFileTreeFormatPackageWriter
writePropertiesFile
  self
    writeInDirectoryName: '.'
    fileName: 'properties'
    extension: self propertiesFileNameExtension
    visit: [ :fileStream | Dictionary new writeFiletreeJsonOn: fileStream ]
%

! Class Implementation for CypressPackageWriter

! ------------------- Instance methods for CypressPackageWriter

category: 'accessing - private'
method: CypressPackageWriter
methodNoticeLine

	^self packageStructure properties
		at: 'copyrightLine'
		ifAbsent: [self repository copyrightProperty]
%

category: 'writing'
method: CypressPackageWriter
writeMethodStructure: methodStructure onStream: fileStream

	fileStream
		nextPutAll: '"'; lf;
		nextPutAll: 'notice: ', self methodNoticeLine; lf;
		nextPutAll: 'category: ', methodStructure category; lf;
		nextPutAll: '"'; lf;
		nextPutAll: methodStructure source withUnixLineEndings
%

! Class Implementation for CypressStrictFileTreeFormatDoNothingPackageWriter

! ------------------- Instance methods for CypressStrictFileTreeFormatDoNothingPackageWriter

category: 'writing'
method: CypressStrictFileTreeFormatDoNothingPackageWriter
removeOldReplacingWithNew
	"Change nothing, since a Cypress writer has insufficient information
	 for preserving the FileTree details. Strictly read-only."
%

category: 'writing'
method: CypressStrictFileTreeFormatDoNothingPackageWriter
writePropertiesFile
	"Change nothing, since a Cypress writer has insufficient information
	 for preserving the FileTree details. Strictly read-only."
%

! Class Implementation for CypressFileUtilities

! ------------------- Class methods for CypressFileUtilities

category: 'accessing'
classmethod: CypressFileUtilities
current

	^Current
%

category: 'utilities'
classmethod: CypressFileUtilities
deleteAll: aDirectory

	self subclassResponsibility: #deleteAll:
%

category: 'utilities'
classmethod: CypressFileUtilities
deleteAll: aDirectory rejecting: rejectBlock
  self subclassResponsibility: #'deleteAll:rejecting:'
%

category: 'utilities'
classmethod: CypressFileUtilities
directoryEntriesFrom: aDirectory

	self subclassResponsibility: #directoryEntriesFrom:
%

category: 'utilities'
classmethod: CypressFileUtilities
directoryExists: aDirectory

	self subclassResponsibility: #directoryExists:
%

category: 'unknown'
classmethod: CypressFileUtilities
directoryFileNamesAndContents: aDirectory

	self subclassResponsibility: #directoryFileNamesAndContents:
%

category: 'utilities'
classmethod: CypressFileUtilities
directoryFromPath: directoryPath relativeTo: aDirectory

	self subclassResponsibility: #directoryFromPath:relativeTo:
%

category: 'utilities'
classmethod: CypressFileUtilities
ensureDirectoryExists: aDirectory

	self subclassResponsibility: #ensureDirectoryExists:
%

category: 'initializating'
classmethod: CypressFileUtilities
install

	Current := self
%

category: 'utilities'
classmethod: CypressFileUtilities
localNameFrom: aDirectory

	self subclassResponsibility: #localNameFrom:
%

category: 'utilities'
classmethod: CypressFileUtilities
pathNameDelimiter

	self subclassResponsibility: #pathNameDelimiter
%

category: 'utilities'
classmethod: CypressFileUtilities
readStreamFor: filePath do: aOneArgBlock

	self subclassResponsibility: #readStreamFor:do:
%

category: 'utilities'
classmethod: CypressFileUtilities
readStreamFor: filePath in: aDirectory do: aOneArgBlock

	self subclassResponsibility: #readStreamFor:in:do:
%

category: 'utilities'
classmethod: CypressFileUtilities
workingDirectory

	self subclassResponsibility: #workingDirectory
%

category: 'utilities'
classmethod: CypressFileUtilities
writeStreamFor: filePath in: aDirectory do: aOneArgBlock

	self subclassResponsibility: #writeStreamFor:in:do:
%

! Class Implementation for CypressGemStoneDirectoryUtilities

! ------------------- Class methods for CypressGemStoneDirectoryUtilities

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
deleteAll: aDirectory
  "Delete all the files and directories under the named directory.
	 Ensure we don't try to recursively delete . or .."

  self deleteAll: aDirectory rejecting: [ :filename | false ]
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
deleteAll: aDirectory rejecting: rejectBlock
  "Delete all the files and directories under the named directory.
       Reject file and directores in aDirectory that are rejected by rejectBlock.
       The rejectBlock is not used recursively.
       Ensure we don't try to recursively delete . or .."

  | filename isFile |
  (GsFile contentsAndTypesOfDirectory: aDirectory onClient: false)
    doWithIndex: [ :each :index | 
      index odd
        ifTrue: [ filename := each ]
        ifFalse: [ 
          isFile := each.
          isFile
            ifTrue: [ 
              (rejectBlock value: filename)
                ifFalse: [ 
                  (rejectBlock value: filename)
                    ifFalse: [ GsFile removeServerFile: filename ] ] ]
            ifFalse: [ 
              (#('/..' '/.' '\..' '\.') anySatisfy: [ :special | filename endsWith: special ])
                ifFalse: [ 
                  (rejectBlock value: filename)
                    ifFalse: [ 
                      self deleteAll: filename.
                      GsFile removeServerDirectory: filename ] ] ] ] ]
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
directoryEntriesFrom: aDirectory
	"Answer fully qualified paths to the contents of aDirectory."

	^(GsFile contentsOfDirectory: aDirectory onClient: false) ifNil: [#()]
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
directoryExists: aDirectory

	^GsFile existsOnServer: aDirectory
%

category: 'unknown'
classmethod: CypressGemStoneDirectoryUtilities
directoryFileNamesAndContents: aDirectory
	"Walk the directory tree starting at aDirectory and
	 answer a map of the names of the files in the tree to
	 their contents (which work best when text)."

	| map |
	map := Dictionary new.
	self directoryFileNamesAndContents: aDirectory into: map.
	^map.
%

category: 'unknown'
classmethod: CypressGemStoneDirectoryUtilities
directoryFileNamesAndContents: aDirectory into: aDictionary
	"Walk the directory tree starting at aDirectory and
	 answer a map of the names of the files in the tree to
	 their contents (which work best when text)."

	| filename isFile |
	(GsFile contentsAndTypesOfDirectory: aDirectory onClient: false)
		doWithIndex: 
			[:each :index |
			index odd
				ifTrue: [filename := each]
				ifFalse: 
					[isFile := each.
					isFile
						ifTrue: 
							[| file |
							file := GsFile openReadOnServer: filename.
							file isNil
								ifFalse: 
									[aDictionary at: filename put: file contents.
									file close]]
						ifFalse: 
							[(#('/..' '/.' '\..' '\.')
								anySatisfy: [:special | filename endsWith: special])
									ifFalse: [self directoryFileNamesAndContents: filename into: aDictionary]]]]
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
directoryFromPath: directoryPath relativeTo: aDirectory

	^((aDirectory endsWith: self pathNameDelimiter) or: [directoryPath beginsWith: self pathNameDelimiter])
		ifTrue: [aDirectory, directoryPath]
		ifFalse: [aDirectory, self pathNameDelimiter, directoryPath]
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
ensureDirectoryExists: aDirectory

	| lastSeparator |
	(GsFile existsOnServer: aDirectory) ifTrue: [^aDirectory].
	(GsFile createServerDirectory: aDirectory) ifNotNil: [^aDirectory].
	lastSeparator := aDirectory findLastSubString: self pathNameDelimiter startingAt: aDirectory size.
	lastSeparator <= 1 ifTrue: [self error: 'Cannot create directory'].
	self ensureDirectoryExists: (aDirectory copyFrom: 1 to: lastSeparator - 1).
	self ensureDirectoryExists: aDirectory.
%

category: 'initializating'
classmethod: CypressGemStoneDirectoryUtilities
initialize
	"self initialize"

	self install
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
localNameFrom: aDirectory

	| endOfPath |
	endOfPath := aDirectory findLastSubString: self pathNameDelimiter startingAt: aDirectory size.
	^aDirectory copyFrom: endOfPath + 1 to: aDirectory size
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
pathNameDelimiter

	^'/'
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
readStreamFor: filePath do: aOneArgBlock

	| file stream |
	GsFile serverErrorString.
	file := GsFile openReadOnServer: filePath.
	GsFile serverErrorString ifNotNil: [:errorMessage | self error: errorMessage].
	[stream := ReadStreamPortable on: (String withAll: file contents asByteArray decodeFromUTF8).
	aOneArgBlock value: stream] ensure: [file close]
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
readStreamFor: filePath in: aDirectory do: aOneArgBlock

	self
		readStreamFor: (self directoryFromPath: filePath relativeTo: aDirectory)
		do: aOneArgBlock
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
workingDirectory

	^System gemEnvironmentVariable: 'PWD'
%

category: 'utilities'
classmethod: CypressGemStoneDirectoryUtilities
writeStreamFor: filePath in: aDirectory do: aOneArgBlock

	| file stream |
	GsFile serverErrorString.
	file := GsFile openWriteOnServer: (self directoryFromPath: filePath relativeTo: aDirectory).
	GsFile serverErrorString ifNotNil: [:errorMessage | self error: errorMessage].
	stream := WriteStreamPortable on: String new.
	[aOneArgBlock value: stream] ensure: [file nextPutAll: stream contents encodeAsUTF8; close]
%

! Class Extensions

! Class Extension for WriteStream

! ------------------- Instance methods for WriteStream

category: '*Cypress-GemStoneFileServer-Adding'
method: WriteStream
nextChunkPut: aString

	aString do: 
		[:each |
		self nextPut: each.
		each = $! ifTrue: [self nextPut: each]].
	self nextPut: $!.
%

! Class Extension for WriteStreamPortable

! ------------------- Instance methods for WriteStreamPortable

category: '*Cypress-GemStoneFileServer-Adding'
method: WriteStreamPortable
nextChunkPut: aString

	aString do: 
		[:each |
		self nextPut: each.
		each = $! ifTrue: [self nextPut: each]].
	self nextPut: $!.
%

! Class initializers 

doit
CypressGemStoneDirectoryUtilities initialize.
true.
%



! End of Package: Cypress-GemStoneFileServer


