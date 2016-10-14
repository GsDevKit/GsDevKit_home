! Package: Cypress-PackageManagement


! Remove existing behavior from package Cypress-PackageManagement
!!!! This can be cleaned up when some package functionality is moved to the base system.

doit
| packageName |
packageName := 'Cypress-PackageManagement'.
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
	subclass: 'CypressAbstractRepository'
	instVarNames: #( url properties readerClass writerClass )
	classVars: #( DefaultCopyrightNotice )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractRepository
	subclass: 'CypressAbstractFileoutRepository'
	instVarNames: #( directoryPath )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileoutRepository
	subclass: 'CypressSmalltalkRepository'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: 'This is a "write-only" repository.
It could be made readable, to be able to file-in Smalltalk scripts, but it''s not the same thing.
';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileoutRepository
	subclass: 'CypressTopazRepository'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: 'This is a "write-only" repository.
It could be made readable, to be able to file-in Topaz scripts, but it''s not the same thing.
';
		immediateInvariant.
true.
%

doit
(CypressAbstractRepository
	subclass: 'CypressDictionaryRepository'
	instVarNames: #( dictionary )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractRepository
	subclass: 'CypressFileSystemRepository'
	instVarNames: #( directoryPath )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressPackageManager'
	instVarNames: #( knownPackages knownRepositories packageInformationList )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressPackageManager2'
	instVarNames: #( knownRepositories packageInformationList )
	classVars: #( SavedPackageManagers )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressPackageManager3'
	instVarNames: #( knownRepositories defaultSymbolDictionaryName resolvedPackageReferences )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressReference'
	instVarNames: #( name )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: 'A CypressReference is an abstract superclass for various kinds of references to Cypress packages. Inspired by GoferReference in Pharo';
		immediateInvariant.
true.
%

doit
(CypressReference
	subclass: 'CypressPackageReference'
	instVarNames: #( package branch )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: 'A CypressPackageReference refers to a specific Cypress package.';
		immediateInvariant.
true.
%

doit
(CypressPackageReference
	subclass: 'CypressResolvedReference'
	instVarNames: #( repository )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: 'A CypressResolvedReference refers to a specific Cypress package in a repository. This class is the only one that can actually load a package, because it is the only one knowing where to find it.';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressVersionReference'
	instVarNames: #( name package author branch versionNumber )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: 'A CypressVersionReference refers to a specific version of a Monticello package.';
		immediateInvariant.
true.
%

doit
(FileUrl
	subclass: 'CypressAbstractFileUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileUrl
	subclass: 'CypressFileTreeFormatFileUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileUrl
	subclass: 'CypressFileTreeReadOnlyFileUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileUrl
	subclass: 'CypressFileUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileUrl
	subclass: 'CypressLaxFileUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileUrl
	subclass: 'CypressSmalltalkUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractFileUrl
	subclass: 'CypressTopazUrl'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressAbstractPackageInformation'
	instVarNames: #( name )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageInformation
	subclass: 'CypressConflictingPackageInformation'
	instVarNames: #( conflictsWith )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageInformation
	subclass: 'CypressEclipsedPackageInformation'
	instVarNames: #( eclipsedBy )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageInformation
	subclass: 'CypressKnownPackageInformation'
	instVarNames: #( repositories digests )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressAbstractPackageInformation
	subclass: 'CypressUnknownPackageInformation'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressPackageInformation'
	instVarNames: #( name type advice competingPackageNames imageDefinitions savedDefinitions savedLocation repository repositoryDescription imageCounts changesCount )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-PackageManagement';
		comment: 'CypressPackageInformation documents potential and actual packages for the Cypress Package Manager. 

Candidate package names come from class categories and from method categories beginning with an asterisk. Category names may contain more information than just the package name, such as logical subdivisions within a package or method categorization in addition to the package name. For example, a Package might be named X or Y-Z or whatever. Classes could be categorized as X, Y-Z, X-A, or Y-Z-A, and methods could be categorized as *X, *Y-Z, *X-A, *Y-Z-A, etc. (The various letters X, Y, Z, and A can represent almost any sequence of characters, in either uppercase, lowercase, or both. Package names are case-insensitive.)

There are four types of CypressPackageInformation objects:
 - Known Package - those which are known to represent real packages (e.g., Y-Z). In general, it is because there is a savedLocation specified.
 - Qualified Name - the name is a Known Package name qualified by further details, and cannot be used to represent a Known Package (e.g., X-accessing).
 - Conflicted Name - the name is a prefix of a Known Package name (e.g. given a Known Package named Y-Z, there can be no package named Y).
 - Unknown - the name could represent a package, but it is not known to do so.

Instance Variables
	advice	<String>	Additional information about the type of the instance, usually used only for Qualified Names and Conflcited Names.
	changesCount	<Integer>	The number of differences between the in-image definitions of the package and the definitions previously saved to disk.
	competingPackageNames	<String>*	0 or more strings naming packages in competition with this one.
	imageCounts	<Integer pair>	The number of classes and the number of methods in the image for the package.
	name	<String>	The name of the package or potential package.
	savedLocation	<String>	The path to the directory in which the package was or should be saved, with a trailing slash (e.g., /usr/src/project/).
	type	<String>	One of ''Known Package'', ''Qualified Name'', ''Conflicted Name'', and ''Unknown''.
	imageDefinitions	<CypressDefinition>*	0 or more definitions from the image.
	savedDefinitions	<CypressDefinition>*	0 or more definitions from the savedLocation storage.

';
		immediateInvariant.
true.
%

! Class Implementation for CypressAbstractRepository

! ------------------- Class methods for CypressAbstractRepository

category: 'instance creation'
classmethod: CypressAbstractRepository
createOn: aUrl alias: aString
  ^ self onUrl: aUrl alias: aString
%

category: 'accessing'
classmethod: CypressAbstractRepository
defaultCopyrightNotice

	^DefaultCopyrightNotice
%

category: 'accessing'
classmethod: CypressAbstractRepository
defaultCopyrightNotice: aString

	DefaultCopyrightNotice := aString
%

category: 'initializing'
classmethod: CypressAbstractRepository
initialize

	self initializeDefaultCopyrightNotice
%

category: 'initializing'
classmethod: CypressAbstractRepository
initializeDefaultCopyrightNotice

	self defaultCopyrightNotice isNil ifFalse: [^self].
	self defaultCopyrightNotice: 'This work is protected by copyright. All rights reserved.'
%

category: 'instance creation'
classmethod: CypressAbstractRepository
onUrl: aUrl alias: aString

	^(aUrl repositoryClass new)
		initializeUrl: aUrl andAlias: aString;
		yourself
%

! ------------------- Instance methods for CypressAbstractRepository

category: 'accessing properties'
method: CypressAbstractRepository
alias

	^properties 
		at: 'alias'
		ifAbsent: ['']
%

category: 'accessing properties'
method: CypressAbstractRepository
alias: aString

	properties 
		at: 'alias'
		put: aString
%

category: 'accessing properties'
method: CypressAbstractRepository
copyrightProperty

	^properties 
		at: '_cypress_copyright'
		ifAbsent: ['']
%

category: 'accessing properties'
method: CypressAbstractRepository
copyrightProperty: aString

	properties 
		at: '_cypress_copyright'
		put: aString
%

category: 'accessing'
method: CypressAbstractRepository
defaultCopyrightNotice

	^self class defaultCopyrightNotice
%

category: 'accessing'
method: CypressAbstractRepository
description

	^self alias
%

category: 'initializing - private'
method: CypressAbstractRepository
initialize

	self initializeDefaultRepositoryProperties.
	readerClass := CypressPackageReader.
	writerClass := CypressPackageWriter.
%

category: 'initializing - private'
method: CypressAbstractRepository
initializeDefaultCopyrightProperty

	self copyrightProperty: self defaultCopyrightNotice
%

category: 'initializing - private'
method: CypressAbstractRepository
initializeDefaultRepositoryProperties

	properties := Dictionary new.
	self initializeDefaultCopyrightProperty
%

category: 'initializing - private'
method: CypressAbstractRepository
initializeUrl: aUrl andAlias: aString

	self
		initialize;
		url: aUrl;
		alias: aString;
		validateUrl
%

category: 'accessing properties'
method: CypressAbstractRepository
packageExtension

	^properties 
		at: 'packageExtension'
		ifAbsent: ['.package']
%

category: 'printing'
method: CypressAbstractRepository
printDetailsOn: aStream

	aStream nextPutAll: self alias
%

category: 'printing'
method: CypressAbstractRepository
printOn: aStream

	aStream
		nextPutAll: self class name;
		nextPutAll: '('.
	self printDetailsOn: aStream.
	aStream nextPutAll: ')'
%

category: 'reading'
method: CypressAbstractRepository
reader

	^readerClass forRepository: self
%

category: 'reading'
method: CypressAbstractRepository
readPackageStructureForPackageNamed: packageName

	^(self reader)
		readPackageStructureForPackageNamed: packageName;
		packageStructure
%

category: 'accessing'
method: CypressAbstractRepository
url

	^url
%

category: 'accessing'
method: CypressAbstractRepository
url: aString

	url := aString
%

category: 'validating - private'
method: CypressAbstractRepository
validateUrl
	"At this level, there is nothing to check.
	 But different URLs denote different kinds of repositories, and
	 each kind of repository may have specific checks."
%

category: 'writing'
method: CypressAbstractRepository
writePackageStructure: aPackageStructure

	^self writer writePackageStructure: aPackageStructure
%

category: 'writing'
method: CypressAbstractRepository
writer

	^writerClass forRepository: self
%

! Class Implementation for CypressAbstractFileoutRepository

! ------------------- Class methods for CypressAbstractFileoutRepository

category: 'instance creation'
classmethod: CypressAbstractFileoutRepository
on: aDirectory

	^self new
		initializeForDirectory: aDirectory;
		yourself.
%

! ------------------- Instance methods for CypressAbstractFileoutRepository

category: 'accessing'
method: CypressAbstractFileoutRepository
description

	| desc |
	desc := super description.
	^desc notEmpty
		ifTrue: [desc]
		ifFalse: [self directoryPath]
%

category: 'accessing'
method: CypressAbstractFileoutRepository
directoryPath

	^directoryPath
%

category: 'initializing - private'
method: CypressAbstractFileoutRepository
directoryPath:  aString

	directoryPath := aString
%

category: 'initializing - private'
method: CypressAbstractFileoutRepository
ensureDirectoryPathExists

	self fileUtils ensureDirectoryExists: self directoryPath
%

category: 'accessing - private'
method: CypressAbstractFileoutRepository
fileUtils

	^CypressFileUtilities current
%

category: 'initializing - private'
method: CypressAbstractFileoutRepository
initializeCreationOn: aUrl alias: aString

	self
		initializeUrl: aUrl andAlias: aString;
		alias: aString
%

category: 'initializing - private'
method: CypressAbstractFileoutRepository
initializeForDirectory: aDirectory

	self initialize.
	self directoryPath: aDirectory.
	self directoryPath isEmpty ifTrue: [^self].	"Not really valid; not a very good idea."
	self ensureDirectoryPathExists.
	self initializeReaderAndWriterClasses.
%

category: 'initializing - private'
method: CypressAbstractFileoutRepository
initializeReaderAndWriterClasses
  self subclassResponsibility: #'initializeReaderAndWriterClasses'
%

category: 'initializing - private'
method: CypressAbstractFileoutRepository
initializeUrl: aUrl andAlias: aString

	super initializeUrl: aUrl andAlias: aString.
	self directoryPath: self url pathForDirectory.
	self ensureDirectoryPathExists.
	self initializeReaderAndWriterClasses.
%

category: 'printing'
method: CypressAbstractFileoutRepository
printDetailsOn: aStream

	self alias notEmpty
		ifTrue: 
			[aStream
				nextPutAll: self alias;
				nextPutAll: ': '].
	aStream nextPutAll: self url printString
%

category: 'validating - private'
method: CypressAbstractFileoutRepository
validateUrl
	"At this level, there is nothing to check.
	 But different URLs denote different kinds of repositories, and
	 each kind of repository may have specific checks."

	self url fileName isEmpty
		ifFalse: [self error: self printString, ' should not be used with URLs for file names (', self url fileName, ' in ', self url pathForDirectory, ')']
%

! Class Implementation for CypressSmalltalkRepository

! ------------------- Instance methods for CypressSmalltalkRepository

category: 'initializing - private'
method: CypressSmalltalkRepository
initializeReaderAndWriterClasses

	readerClass := CypressDoNothingPackageReader.
	writerClass := CypressSmalltalkFileoutWriter.
%

! Class Implementation for CypressTopazRepository

! ------------------- Instance methods for CypressTopazRepository

category: 'initializing - private'
method: CypressTopazRepository
initializeReaderAndWriterClasses

	readerClass := CypressDoNothingPackageReader.
	writerClass := CypressTopazFileoutWriter.
%

! Class Implementation for CypressDictionaryRepository

! ------------------- Class methods for CypressDictionaryRepository

category: 'instance creation'
classmethod: CypressDictionaryRepository
on: aDictionary
  ^ self new
    initializeForDictionary: aDictionary;
    yourself
%

! ------------------- Instance methods for CypressDictionaryRepository

category: 'accessing'
method: CypressDictionaryRepository
dictionary
  ^ dictionary
%

category: 'accessing'
method: CypressDictionaryRepository
dictionary: aDictionary
  dictionary := aDictionary
%

category: 'initializing - private'
method: CypressDictionaryRepository
initialize
  super initialize.
  readerClass := nil.
  writerClass := nil
%

category: 'initializing - private'
method: CypressDictionaryRepository
initializeForDictionary: aDictionary
  self initialize.
  self dictionary: aDictionary
%

category: 'accessing'
method: CypressDictionaryRepository
packageNames
  ^ self dictionary keys
%

category: 'reading'
method: CypressDictionaryRepository
readPackageStructureForPackageNamed: packageName
  ^ (self dictionary at: packageName) packageStructure
%

category: 'writing'
method: CypressDictionaryRepository
writePackageStructure: aPackageStructure
  ^ self dictionary at: aPackageStructure packageName put: aPackageStructure
%

! Class Implementation for CypressFileSystemRepository

! ------------------- Class methods for CypressFileSystemRepository

category: 'instance creation'
classmethod: CypressFileSystemRepository
on: aDirectory

	^self new
		initializeForDirectory: aDirectory;
		yourself.
%

! ------------------- Instance methods for CypressFileSystemRepository

category: 'accessing - properties'
method: CypressFileSystemRepository
codeFormatProperty

	^properties 
		at: '_gs_format'
		ifAbsent: ['Cypress']
%

category: 'updating properties'
method: CypressFileSystemRepository
codeFormatProperty: aString

	self validate: aString isOneOf: #('Cypress' 'FileTree' 'Flexible').
	properties 
		at: '_gs_format'
		put: aString
%

category: 'accessing'
method: CypressFileSystemRepository
description
  | desc |
  desc := super description.
  ^ desc notEmpty
    ifTrue: [ desc ]
    ifFalse: [ self url asString ]
%

category: 'accessing'
method: CypressFileSystemRepository
directoryPath

	^directoryPath
%

category: 'initializing - private'
method: CypressFileSystemRepository
directoryPath:  aString

	directoryPath := aString
%

category: 'testing - private'
method: CypressFileSystemRepository
doesRepositoryFileExist: fileName
	"Answer whether the named file exists at the repository level."

	^self fileUtils
		directoryExists: (self fileUtils
				directoryFromPath: fileName
				relativeTo: self directoryPath)
%

category: 'initializing - private'
method: CypressFileSystemRepository
ensureDirectoryPathExists

	self fileUtils ensureDirectoryExists: self directoryPath
%

category: 'accessing - private'
method: CypressFileSystemRepository
fileUtils

	^CypressFileUtilities current
%

category: 'initializing - private'
method: CypressFileSystemRepository
fixupMissingCopyrightProperty

	self copyrightProperty isEmpty ifFalse: [^self].
	self initializeDefaultCopyrightProperty.
%

category: 'initializing - private'
method: CypressFileSystemRepository
initializeCreationOn: aUrl alias: aString

	self
		initializeUrl: aUrl andAlias: aString;
		alias: aString;
		writePropertiesFile
%

category: 'initializing - private'
method: CypressFileSystemRepository
initializeDefaultRepositoryProperties

	super initializeDefaultRepositoryProperties.
	self
		codeFormatProperty: 'Cypress';
		strictCodeFormat: false.
%

category: 'initializing - private'
method: CypressFileSystemRepository
initializeForDirectory: aDirectory

	self initialize.
	self directoryPath: aDirectory.
	self directoryPath isEmpty ifTrue: [^self].	"Not really valid; not a very good idea."
	self ensureDirectoryPathExists.
	self readPropertiesFile.
	self fixupMissingCopyrightProperty.
	self initializeReaderAndWriterClasses.
%

category: 'initializing - private'
method: CypressFileSystemRepository
initializeForFileTreeRepository

	self initializeDefaultRepositoryProperties.
	self
		alias: 'FileTree read-only repository on ', self directoryPath;
		codeFormatProperty: 'FileTree';
		strictCodeFormat: true.
%

category: 'initializing - private'
method: CypressFileSystemRepository
initializeReaderAndWriterClasses

	self isCodeFormatCypress
		ifTrue: 
			[self isCodeFormatStrict
				ifTrue: 
					[readerClass := CypressPackageReader.
					writerClass := CypressPackageWriter]
				ifFalse: 
					[readerClass := CypressFlexiblePackageReader.
					writerClass := CypressPackageWriter]]
		ifFalse: 
			[self isCodeFormatStrict
				ifTrue: 
					[readerClass := CypressFileTreeFormatPackageReader.
					writerClass := CypressStrictFileTreeFormatDoNothingPackageWriter]
				ifFalse: 
					[readerClass := CypressFlexiblePackageReader.
					writerClass := CypressFileTreeFormatPackageWriter]]
%

category: 'initializing - private'
method: CypressFileSystemRepository
initializeUrl: aUrl andAlias: aString

	super initializeUrl: aUrl andAlias: aString.
	self directoryPath: self url pathForDirectory.
	self ensureDirectoryPathExists.
	self readPropertiesFile.
	self codeFormatProperty: self url codeFormat.
	self strictCodeFormat: self url isStrict.
	self fixupMissingCopyrightProperty.
	self initializeReaderAndWriterClasses.
%

category: 'testing properties'
method: CypressFileSystemRepository
isCodeFormatCypress

	^self isCodeFormatProperty: 'Cypress'
%

category: 'testing properties'
method: CypressFileSystemRepository
isCodeFormatFileTree

	^self isCodeFormatProperty: 'FileTree'
%

category: 'testing properties'
method: CypressFileSystemRepository
isCodeFormatFlexiblyCypress

	^self isCodeFormatStrict not and: [self isCodeFormatCypress]
%

category: 'testing properties'
method: CypressFileSystemRepository
isCodeFormatFlexiblyFileTree

	^self isCodeFormatStrict not and: [self isCodeFormatFileTree]
%

category: 'testing properties - private'
method: CypressFileSystemRepository
isCodeFormatProperty: aString

	^(properties at: '_gs_format') equalsNoCase: aString
%

category: 'testing properties'
method: CypressFileSystemRepository
isCodeFormatStrict

	^(properties 
		at: '_gs_strict'
		ifAbsent: ['']) equalsNoCase: 'true'
%

category: 'testing properties'
method: CypressFileSystemRepository
isCodeFormatStrictlyCypress

	^self isCodeFormatStrict and: [self isCodeFormatCypress]
%

category: 'testing properties'
method: CypressFileSystemRepository
isCodeFormatStrictlyFileTree

	^self isCodeFormatStrict and: [self isCodeFormatFileTree]
%

category: 'accessing'
method: CypressFileSystemRepository
packageNames

	^(self fileUtils directoryEntriesFrom: self directoryPath , '*', self packageExtension)
		collect: [:each | (self fileUtils localNameFrom: each) copyWithoutSuffix: self packageExtension]
%

category: 'printing'
method: CypressFileSystemRepository
printDetailsOn: aStream

	self alias notEmpty
		ifTrue: 
			[aStream
				nextPutAll: self alias;
				nextPutAll: ': '].
	aStream nextPutAll: self url printString
%

category: 'reading'
method: CypressFileSystemRepository
readPropertiesFile

	self readPropertiesFile: (#('properties.ston' 'properties.json' '.filetree')
				detect: [:each | self doesRepositoryFileExist: each]
				ifNone: [^self]).
%

category: 'reading'
method: CypressFileSystemRepository
readPropertiesFile: fileName
	"Expect 'properties.ston' for Cypress, but permit 'properties.json' in which case we assume
	 the format should be FileTree.

	 Supported properties are:
		_cypress_copyright	- the (optional, default) copyright notice for the whole repository
		_gs_format			- optional, determines which format will be used for writing packages (and reading, but ...)
							- either Cypress or FileTree (case-insensitive)
		_gs_strict			- optional, determines whether the reader strictly enforces the format
							- either true or false (case-insensitive)
		_gs_fileout			- optional, determines whether to also produce a *.gs fileout when writing a package
							- either true or false (case-insensitive)
	"

	fileName = '.filetree' ifTrue: [^self initializeForFileTreeRepository].
	self fileUtils
		readStreamFor: fileName
		in: self directoryPath
		do: [:fileStream | properties := CypressJsonParser parseStream: fileStream]
%

category: 'updating properties'
method: CypressFileSystemRepository
strictCodeFormat: aBoolean

	self strictCodeFormatProperty: aBoolean printString

%

category: 'updating properties - private'
method: CypressFileSystemRepository
strictCodeFormatProperty: aString

	self validate: aString isOneOf: #('true' 'false').
	properties 
		at: '_gs_strict'
		put: aString
%

category: 'updating properties - private'
method: CypressFileSystemRepository
validate: aString isOneOf: someStrings

	someStrings
		detect: [:each | aString equalsNoCase: each]
		ifNone: [self error: aString printString, ' must be one of ', someStrings printString].
%

category: 'validating - private'
method: CypressFileSystemRepository
validateUrl
	"At this level, there is nothing to check.
	 But different URLs denote different kinds of repositories, and
	 each kind of repository may have specific checks."

	self url fileName isEmpty
		ifFalse: [self error: self printString, ' should not be used with URLs for file names (', self url fileName, ' in ', self url pathForDirectory, ')']
%

category: 'writing'
method: CypressFileSystemRepository
writePropertiesFile

	self writePropertiesFile: (self isCodeFormatFileTree
				ifTrue: ['properties.json']
				ifFalse: ['properties.ston'])
%

category: 'writing'
method: CypressFileSystemRepository
writePropertiesFile: fileName

	self fileUtils
		writeStreamFor: fileName
		in: self directoryPath
		do: [:fileStream | properties writeCypressJsonOn: fileStream]
%

! Class Implementation for CypressPackageManager

! ------------------- Class methods for CypressPackageManager

category: 'instance creation'
classmethod: CypressPackageManager
new

	^super new
		initialize;
		yourself
%

category: 'accessing'
classmethod: CypressPackageManager
packageNamePermutationsFor: aString
	"Answer the variations on possible package names from the specified string.
	 Each hyphen may possibly separate the package name from a suffix."

	| names |
	names := OrderedCollection new.
	aString doWithIndex: 
			[:each :index |
			(each = $- and: [index > 1])
				ifTrue: [names add: (aString copyFrom: 1 to: index - 1)]].
	aString last ~= $- ifTrue: [names add: aString].
	^names
%

category: 'accessing'
classmethod: CypressPackageManager
potentialPackageNames
	"Answer a list of 'package names' from classes and methods.
	 The class category is the package name, if the class is in a package at all.
	 The method category begins with an asterisk (*) before the package name,
	 but can be continued with other details (e.g., *PackageName-accessing).
	 This version does NOT recognize method category suffixes."

	| classCategories methodCategories |
	classCategories := Set new.
	methodCategories := Set new.
	System myUserProfile symbolList allSatisfying: 
			[:aClass |
			aClass isBehavior and: 
					[classCategories addAll: (self packageNamePermutationsFor: aClass category).
					aClass categorysDo: 
							[:cat :method |
							cat first = $*
								ifTrue: [methodCategories addAll: (self packageNamePermutationsFor: (cat copyFrom: 2 to: cat size))]].
					false]].
	^(Set new)
		addAll: classCategories;
		addAll: methodCategories;
		remove: 'User Classes';
		remove: 'Kernel';
		sortAscending
%

! ------------------- Instance methods for CypressPackageManager

category: 'comparing'
method: CypressPackageManager
compareDefinitionsFromConflictedPackageInformation: aCypressPackageInformation

	| badDefinitions expectedDefinitions |
	badDefinitions := (CypressPackageStructure
				fromPackage: (CypressPackageDefinition
						named: aCypressPackageInformation name))
					snapshot definitions
				asSet.
	expectedDefinitions := OrderedCollection new.
	aCypressPackageInformation competingPackageNames do: 
			[:each |
			expectedDefinitions
				addAll: (CypressPackageStructure
						fromPackage: (CypressPackageDefinition named: each)) snapshot
						definitions].
	expectedDefinitions do: [:each | badDefinitions remove: each ifAbsent: []].
	^(badDefinitions collect: [:each | each printString]) sortAscending
%

category: 'comparing'
method: CypressPackageManager
comparePackageFrom: aCypressPackageInformation

	^self comparePackagesFrom: (Array with: aCypressPackageInformation)
%

category: 'updating - private'
method: CypressPackageManager
determineKnownPackages

	^(packageInformationList select: [:each | each repository notNil])
		inject: Dictionary new
		into: 
			[:dict :each |
			dict
				at: each name put: each savedLocation;
				yourself]
%

category: 'initializing - private'
method: CypressPackageManager
initialize

	self refreshPackageInformation.
%

category: 'initializing - private'
method: CypressPackageManager
initializeConflictingPackageNames

	| conflictingPackages |
	conflictingPackages := Dictionary new.
	packageInformationList do: 
			[:each |
			conflictingPackages
				at: each
				put: (knownPackages keys
						select: [:knownName | knownName ~= each name and: [knownName beginsWith: each name , '-']])].
	conflictingPackages := conflictingPackages reject: [:each | each isEmpty].
	conflictingPackages
		keysAndValuesDo: [:package :conflicts | package beConflictedWith: conflicts]
%

category: 'initializing - private'
method: CypressPackageManager
initializeKnownPackages

	knownPackages := (System myUserProfile objectNamed: #KnownCypressPackages)
				ifNil: [Dictionary new]
%

category: 'initializing - private'
method: CypressPackageManager
initializeKnownRepositories

	knownRepositories := Dictionary new.
	knownPackages asSet
		do: [:each | self repositoryOn: each]
%

category: 'initializing - private'
method: CypressPackageManager
initializePackageInformationList

	| allInterestingNames |
	allInterestingNames := Set new
		addAll: self potentialPackageNames;
		addAll: knownPackages keys;
		sortAscending.
	packageInformationList := allInterestingNames collect: 
					[:each |
					| directory repo |
					directory := knownPackages at: each ifAbsent: [nil].
					repo := directory ifNotNil: [self repositoryOn: directory].
					CypressPackageInformation named: each repository: repo]
%

category: 'initializing - private'
method: CypressPackageManager
initializeQualifiedPackageNames

	| qualifiedPackages |
	qualifiedPackages := Dictionary new.
	packageInformationList do: 
			[:each |
			qualifiedPackages
				at: each
				put: (knownPackages keys
						select: [:knownName | knownName ~= each name and: [each name beginsWith: knownName , '-']])].
	qualifiedPackages := qualifiedPackages reject: [:each | each isEmpty].
	qualifiedPackages
		keysAndValuesDo: [:package :baseNames | package beQualifiedNameOf: baseNames]
%

category: 'updating'
method: CypressPackageManager
loadPackageFrom: aCypressPackageInformation

	| summary loader |
	loader := (CypressSnapshot definitions: aCypressPackageInformation savedDefinitions)
				updatePackage: (CypressPackageDefinition named: aCypressPackageInformation name).
	summary := Dictionary new.

	loader unloadable notEmpty
		ifTrue: [summary at: 'Unloadable' put: (loader unloadable collect: [:each | each printString])].
	loader errors notEmpty
		ifTrue: [summary at: 'Errors' put: (loader errors collect: [:each | each printString])].
	loader requirements notEmpty
		ifTrue: [summary at: 'Missing Requirements' put: loader requirements asArray].

	^summary
%

category: 'updating'
method: CypressPackageManager
lookForLoadedPackagesIn: aDirectory
	"Update any of the packages in the image which have a Cypress file out in
	 the specified directory to reflect the path where the package has theoretically
	 been saved."

	self lookForLoadedPackagesInRepository: (self repositoryOn: aDirectory).
	^nil
%

category: 'updating'
method: CypressPackageManager
lookForLoadedPackagesInRepository: aCypressRepository
	"Update any of the packages in the image which have a Cypress file out in
	 the specified directory to reflect the path where the package has theoretically
	 been saved."

	| packageNames |
	packageNames := aCypressRepository packageNames.
	(self packageInformationList
		select: [:each | packageNames includes: each name])
			do: [:each | each updateKnownPackageRepository: aCypressRepository].
	self saveKnownPackages.
	^nil
%

category: 'updating'
method: CypressPackageManager
lookForUnloadedPackagesIn: aDirectory
	"Load any package names from aDirectory as known packages.
	 This does not load the package contents."

	self lookForUnloadedPackagesInRepository: (self repositoryOn: aDirectory).
	^nil
%

category: 'updating'
method: CypressPackageManager
lookForUnloadedPackagesInRepository: aCypressRepository
	"Add known packages for any Cypress file outs in the specified directory."

	| packageNames existingPackageNames |
	packageNames := aCypressRepository packageNames.
	(self packageInformationList
		select: [:each | packageNames includes: each name])
			do: [:each | each updateKnownPackageRepository: aCypressRepository].
	existingPackageNames := self packageInformationList
				collect: [:each | each name].
	(packageNames reject: [:each | existingPackageNames includes: each])
		do: 
			[:each |
			self packageInformationList
				add: (CypressPackageInformation named: each repository: aCypressRepository)].
	self saveKnownPackages.
	^nil
%

category: 'accessing'
method: CypressPackageManager
packageInformationList

	^packageInformationList
%

category: 'accessing'
method: CypressPackageManager
potentialPackageNames

	^self class potentialPackageNames
%

category: 'accessing'
method: CypressPackageManager
refreshedPackageInformationList

	self refreshPackageInformation.
	^self packageInformationList.
%

category: 'updating'
method: CypressPackageManager
refreshPackageInformation

	self
		initializeKnownPackages;
		initializeKnownRepositories;
		initializePackageInformationList;
		initializeConflictingPackageNames;
		initializeQualifiedPackageNames
%

category: 'initializing - private'
method: CypressPackageManager
repositoryOn: aDirectory

	^knownRepositories
		at: aDirectory
		ifAbsentPut: [CypressFileSystemRepository on: aDirectory].
%

category: 'updating - private'
method: CypressPackageManager
saveKnownPackages

	self updateKnownPackages.
	((System myUserProfile resolveSymbol: #KnownCypressPackages)
		ifNil: 
			[(System myUserProfile objectNamed: #UserGlobals)
				addAssociation: #KnownCypressPackages -> Dictionary new])
			value: knownPackages
%

category: 'updating - private'
method: CypressPackageManager
updateKnownPackages

	knownPackages := self determineKnownPackages
%

category: 'updating'
method: CypressPackageManager
updateSavedLocation: aDirectory for: aCypressPackageInformation
	"Update the specified package to reflect the path and repository where the
	 package should be saved."

	aCypressPackageInformation
		updateKnownPackageRepository: (self repositoryOn: aDirectory).
	self saveKnownPackages.
	^nil
%

category: 'writing - private'
method: CypressPackageManager
writeCypressPackageToDiskFrom: aCypressPackageInformation

	| packageStructure |
	packageStructure := CypressPackageStructure
				fromPackage: (CypressPackageDefinition
						named: aCypressPackageInformation name).
	aCypressPackageInformation repository writer
		writePackageStructure: packageStructure
%

category: 'writing'
method: CypressPackageManager
writePackagesToDiskFrom: someCypressPackageInformations

	| packageStructure |
	^someCypressPackageInformations do: 
			[:each |
			packageStructure := CypressPackageStructure
						fromPackage: (CypressPackageDefinition named: each name).
			each repository writer writePackageStructure: packageStructure.
			each refresh.
			self saveKnownPackages]
%

category: 'writing - private'
method: CypressPackageManager
writePackageStructure: packageStructure to: aCypressRepository

	aCypressRepository writer writePackageStructure: packageStructure
%

category: 'writing'
method: CypressPackageManager
writePackageToDiskFrom: aCypressPackageInformation

	^self writePackagesToDiskFrom: (Array with: aCypressPackageInformation)
%

! Class Implementation for CypressPackageManager2

! ------------------- Class methods for CypressPackageManager2

category: 'Instance Creation'
classmethod: CypressPackageManager2
create

	^self new
		initializeFromImage;
		yourself.
%

category: 'Initializing'
classmethod: CypressPackageManager2
initialize

	self savedPackageManagers: IdentityDictionary new
%

category: 'Accessing'
classmethod: CypressPackageManager2
named: aKey
	"Answer the Package Manager previously saved under aKey.
	 It is an error if there was not one saved under that key."

	^self
		named: aKey
		or: [self error: 'No previously saved Package Manager under the key ', aKey printString]
%

category: 'Accessing'
classmethod: CypressPackageManager2
named: aKey or: aBlock
	"Answer the Package Manager previously saved under aKey.
	 Answer the result of evaluating aBlock, if there was not one saved under that key."

	^self savedPackageManagers at: aKey ifAbsent: aBlock
%

category: 'Instance Creation'
classmethod: CypressPackageManager2
new

	^super new
		initialize;
		yourself.
%

category: 'Accessing - private'
classmethod: CypressPackageManager2
packageNamePermutationsFor: aString
	"Answer the variations on possible package names from the specified string.
	 Each hyphen may possibly separate the package name from a suffix."

	| names |
	names := OrderedCollection new.
	aString doWithIndex: 
			[:each :index |
			(each = $- and: [index > 1])
				ifTrue: [names add: (aString copyFrom: 1 to: index - 1)]].
	aString last ~= $- ifTrue: [names add: aString].
	^names
%

category: 'Accessing - private'
classmethod: CypressPackageManager2
potentialPackageNames
	"Answer a list of 'package names' from classes and methods.
	 The class category is the package name, if the class is in a package at all.
	 The method category begins with an asterisk (*) before the package name,
	 but can be continued with other details (e.g., *PackageName-accessing).
	 This version does NOT recognize method category suffixes."

	| classCategories methodCategories |
	classCategories := Set new.
	methodCategories := Set new.
	System myUserProfile symbolList allSatisfying: 
			[:aClass |
			aClass isBehavior and: 
					[classCategories addAll: (self packageNamePermutationsFor: aClass category).
					aClass categorysDo: 
							[:cat :method |
							cat first = $*
								ifTrue: [methodCategories addAll: (self packageNamePermutationsFor: (cat copyFrom: 2 to: cat size))]].
					false]].
	^(Set new)
		addAll: classCategories;
		addAll: methodCategories;
		remove: 'User Classes';
		remove: 'Kernel';
		sortAscending
%

category: 'Updating'
classmethod: CypressPackageManager2
removePackageManagerSavedAs: aKey
	"Remove the Package Manager previously saved under aKey, if there was one.
	 Answer it or nil if there was not one saved under that key."

	^self savedPackageManagers removeKey: aKey ifAbsent: []
%

category: 'Accessing'
classmethod: CypressPackageManager2
savedPackageManagers

	^SavedPackageManagers
%

category: 'Initializing - private'
classmethod: CypressPackageManager2
savedPackageManagers: anIdentityDictionary

	SavedPackageManagers := anIdentityDictionary
%

! ------------------- Instance methods for CypressPackageManager2

category: 'Updating'
method: CypressPackageManager2
addRepository: aRepository to: aKnownPackageInformation

	aKnownPackageInformation addRepository: aRepository.
%

category: 'Updating'
method: CypressPackageManager2
addUnknownPackageNamed: aString

	self packageInformationList
		at: aString
		put: (CypressUnknownPackageInformation named: aString).
%

category: 'Querying'
method: CypressPackageManager2
allResolvedPackageReferences
  | resolved |
  resolved := OrderedCollection new.
  self knownRepositories
    keysAndValuesDo: [ :repoUrl :repo | 
      repo packageNames
        do: [ :packageName | resolved add: (CypressResolvedReference name: packageName repository: repo) ] ].
  ^ resolved asSortedCollection asArray
%

category: 'Updating'
method: CypressPackageManager2
assignRepository: aRepository to: aPackageInformation

	self assignRepository: aRepository toAll: (Array with: aPackageInformation)
%

category: 'Updating'
method: CypressPackageManager2
assignRepository: aRepository toAll: somePackageInformations
	"Assign to those having no repository information and add to those with.
	 Those without a repository need to be converted to Known Package Information instances."

	self knownRepositories at: aRepository url put: aRepository.
	(somePackageInformations reject: [:each | each isKnown])
		do: [:each | self addRepository: aRepository to: (self convertToKnown: each)].
	(somePackageInformations select: [:each | each isKnown])
		do: [:each | self addRepository: aRepository to: each].
%

category: 'Updating'
method: CypressPackageManager2
convert: anUnknownPackageInformation toConflictingWith: aKnownPackageInformation

	| conflicting |
	conflicting := CypressConflictingPackageInformation
				fromUnknown: anUnknownPackageInformation
				conflictingWith: aKnownPackageInformation.
	self replace: anUnknownPackageInformation with: conflicting.
	^conflicting
%

category: 'Updating'
method: CypressPackageManager2
convert: anUnknownPackageInformation toEclipsedBy: aKnownPackageInformation

	| eclipsed |
	eclipsed := CypressEclipsedPackageInformation
				fromUnknown: anUnknownPackageInformation
				eclipsedBy: aKnownPackageInformation.
	self replace: anUnknownPackageInformation with: eclipsed.
	^eclipsed
%

category: 'Updating'
method: CypressPackageManager2
convertToKnown: aPackageInformation

	| known |
	known := CypressKnownPackageInformation fromUnknown: aPackageInformation.
	self replace: aPackageInformation with: known.
	(self findPackagesEclipsedBy: known) do: [:each | self convert: each toEclipsedBy: known].
	(self findPackagesConflictingWith: known) do: [:each | self convert: each toConflictingWith: known].
	^known.
%

category: 'Updating'
method: CypressPackageManager2
createRepositoryNamed: aName under: aDirectory alias: aString schema: schemaName

	^CypressFileSystemRepository
		createOn: (schemaName
				, (CypressFileUtilities current
					directoryFromPath: aName
						relativeTo: aDirectory)
				, '/') asUrl
		alias: aString
%

category: 'Accessing - private'
method: CypressPackageManager2
findPackagesConflictingWith: aKnownPackageInformation

	^self packageInformationList select: 
			[:each |
			aKnownPackageInformation name ~= each name
				and: [aKnownPackageInformation name beginsWith: each name , '-']]
%

category: 'Accessing - private'
method: CypressPackageManager2
findPackagesEclipsedBy: aKnownPackageInformation

	^self packageInformationList select: 
			[:each |
			aKnownPackageInformation name ~= each name
				and: [each name beginsWith: aKnownPackageInformation name , '-']]
%

category: 'Initializing - private'
method: CypressPackageManager2
initialize

	self
		knownRepositories: Dictionary new;
		packageInformationList: Dictionary new
%

category: 'Initializing - private'
method: CypressPackageManager2
initializeFromImage

	self initializePackageInformationList.
%

category: 'Initializing - private'
method: CypressPackageManager2
initializePackageInformationList

	self
		packageInformationList: (self potentialPackageNames
				inject: Dictionary new
				into: 
					[:dict :each |
					dict
						at: each put: (CypressUnknownPackageInformation named: each);
						yourself])
%

category: 'Accessing'
method: CypressPackageManager2
knownRepositories

	^knownRepositories
%

category: 'Updating'
method: CypressPackageManager2
knownRepositories: someNamedRepositories

	knownRepositories := someNamedRepositories
%

category: 'Loading'
method: CypressPackageManager2
loadPackageFrom: aKnownPackageInformation defaultSymbolDictionaryName: defaultSymbolDictionaryNameOrNil inRepository: aRepository
  | snapshot summary loader |
  snapshot := (aRepository
    readPackageStructureForPackageNamed: aKnownPackageInformation name) snapshot.
  loader := snapshot
    updatePackage:
      (CypressPackageDefinition named: aKnownPackageInformation name)
    defaultSymbolDictionaryName: defaultSymbolDictionaryNameOrNil.
  summary := Dictionary new.
  loader unloadable notEmpty
    ifTrue: [ 
      summary
        at: 'Unloadable'
        put: (loader unloadable collect: [ :each | each printString ]) ].
  loader errors notEmpty
    ifTrue: [ summary at: 'Errors' put: (loader errors collect: [ :each | each printString ]) ].
  loader requirements notEmpty
    ifTrue: [ summary at: 'Missing Requirements' put: loader requirements asArray ].
  ^ summary
%

category: 'Loading'
method: CypressPackageManager2
loadPackageFrom: aKnownPackageInformation inRepository: aRepository
  ^ self
    loadPackageFrom: aKnownPackageInformation
    defaultSymbolDictionaryName: nil
    inRepository: aRepository
%

category: 'Updating'
method: CypressPackageManager2
lookForPackagesInRepository: aRepository
	"Find the packages in the repository and update the list
	 of package information accordingly."

	| packageNames inImage exImage |
	packageNames := aRepository packageNames.
	inImage := self packageInformationList asArray select: [:each | packageNames includes: each name].
	exImage := packageNames reject: [:each | self packageInformationList anySatisfy: [:info | info name = each]].
	exImage := exImage collect: [:each | CypressUnknownPackageInformation named: each].

	self assignRepository: aRepository toAll: inImage, exImage
%

category: 'Accessing'
method: CypressPackageManager2
packageInformationList

	^packageInformationList
%

category: 'Updating'
method: CypressPackageManager2
packageInformationList: someNamedPackageInformations

	packageInformationList := someNamedPackageInformations
%

category: 'Accessing'
method: CypressPackageManager2
packageInformationNamed: aString

	^self packageInformationNamed: aString
		or: [self error: 'No package information for ' , aString printString]
%

category: 'Accessing'
method: CypressPackageManager2
packageInformationNamed: aString or: aBlock

	^self packageInformationList
		at: aString
		ifAbsent: aBlock.
%

category: 'Accessing - private'
method: CypressPackageManager2
potentialPackageNames

	^self class potentialPackageNames
%

category: 'Updating'
method: CypressPackageManager2
replace: oldPackageInformation with: newPackageInformation

	self packageInformationList
		at: oldPackageInformation name
		put: newPackageInformation.
%

category: 'Initializing - private'
method: CypressPackageManager2
repositoryOn: url alias: aString
	"Answer a repository instance for the specified URL.
	 The characteristics will come from the properties file at the URL location,
	 or will default according to the schema, if there is no properties file."

	^self knownRepositories
		at: url
		ifAbsentPut: [CypressAbstractRepository onUrl: url alias: aString].
%

category: 'Updating'
method: CypressPackageManager2
saveAs: aKey
	"Save the receiver in the class' collection of named managers
	 under the specified key.
	 It will quietly replace anything already under that key."


	self savedPackageManagers at: aKey put: self.
%

category: 'Accessing - private'
method: CypressPackageManager2
savedPackageManagers

	^self class savedPackageManagers
%

category: 'Writing'
method: CypressPackageManager2
writeChangesToAllRepositoriesFor: aPackageInformation

	aPackageInformation writeChangesToAllRepositories.
%

! Class Implementation for CypressPackageManager3

! ------------------- Class methods for CypressPackageManager3

category: 'testing'
classmethod: CypressPackageManager3
isPackageLoaded: aPackageName

  ^ (CypressPackageDefinition named: aPackageName) snapshot definitions isEmpty not
%

category: 'instance creation'
classmethod: CypressPackageManager3
new
  ^self basicNew initialize
%

! ------------------- Instance methods for CypressPackageManager3

category: 'Updating'
method: CypressPackageManager3
addRepository: aRepository
  self knownRepositories at: aRepository url asString put: aRepository
%

category: 'Updating'
method: CypressPackageManager3
addResolvedReference: resolvedReference
  self resolvedPackageReferences add: resolvedReference
%

category: 'Querying'
method: CypressPackageManager3
allResolvedPackageReferences
  | resolved |
  resolved := OrderedCollection new.
  self knownRepositories
    keysAndValuesDo: [ :repoUrl :repo | 
      repo packageNames
        do: [ :packageName | resolved add: (CypressResolvedReference name: packageName repository: repo) ] ].
  ^ resolved asSortedCollection asArray
%

category: 'initialization'
method: CypressPackageManager3
defaultSymbolDictionaryName

  ^defaultSymbolDictionaryName ifNil: [ #UserGlobals ]
%

category: 'initialization'
method: CypressPackageManager3
defaultSymbolDictionaryName: aStringOrNil

  defaultSymbolDictionaryName := aStringOrNil
%

category: 'Updating'
method: CypressPackageManager3
initialize
  self
    knownRepositories: Dictionary new;
    resolvedPackageReferences: OrderedCollection new;
    yourself
%

category: 'Accessing'
method: CypressPackageManager3
knownRepositories

   ^knownRepositories
%

category: 'Accessing'
method: CypressPackageManager3
knownRepositories: anObject

   knownRepositories := anObject
%

category: 'loading'
method: CypressPackageManager3
loadResolvedReference: resolvedReference
  | cypressLoader package repository snapshot |
  cypressLoader := CypressLoader new.
  cypressLoader defaultSymbolDictionaryName: self defaultSymbolDictionaryName.
  package := resolvedReference packageDefinition.
  repository := resolvedReference repository.
  snapshot := (repository
    readPackageStructureForPackageNamed: resolvedReference name) snapshot.
  cypressLoader updatePackage: package withSnapshot: snapshot.
  cypressLoader load.
  cypressLoader unloadable notEmpty
    ifTrue: [ self error: 'Unloadable definitions' ].
  cypressLoader errors notEmpty
    ifTrue: [ self error: 'Load errors' ].
  cypressLoader requirements notEmpty
    ifTrue: [ self error: 'Missing Requirements' ]
%

category: 'loading'
method: CypressPackageManager3
loadResolvedReferences
  | cypressLoader |
  cypressLoader := CypressLoader new.
  cypressLoader defaultSymbolDictionaryName: self defaultSymbolDictionaryName.
  self resolvedPackageReferences
    do: [ :resolvedReference | | package repository snapshot |
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

category: 'Accessing'
method: CypressPackageManager3
resolvedPackageReferences
  ^ resolvedPackageReferences
%

category: 'Accessing'
method: CypressPackageManager3
resolvedPackageReferences: anObject
  resolvedPackageReferences := anObject
%

category: 'Unloading'
method: CypressPackageManager3
unloadPackage: aPackage

  | loader summary |
  loader := (CypressPackageDefinition named: aPackage name) snapshot
              unload.
  summary := Dictionary new.
  loader unloadable notEmpty
    ifTrue: [ 
      summary
        at: 'Unloadable'
        put: (loader unloadable collect: [ :each | each printString ]) ].
  loader errors notEmpty
    ifTrue: [ summary at: 'Errors' put: (loader errors collect: [ :each | each printString ]) ].
  loader requirements notEmpty
    ifTrue: [ summary at: 'Missing Requirements' put: loader requirements asArray ].
  ^ summary
%

category: 'Unloading'
method: CypressPackageManager3
unloadPackageNamed: aPackageName
  ^ self unloadPackage: (CypressPackageDefinition named: aPackageName)
%

! Class Implementation for CypressReference

! ------------------- Class methods for CypressReference

category: 'instance creation'
classmethod: CypressReference
name: aString
  ^ self basicNew initializeName: aString
%

category: 'instance creation'
classmethod: CypressReference
new
  self error: 'Use #name: to initialize the receiver.'
%

! ------------------- Instance methods for CypressReference

category: 'comparing'
method: CypressReference
= aReference
	^ self class = aReference class and: [ self name = aReference name ]
%

category: 'comparing'
method: CypressReference
hash
	^ self name hash
%

category: 'initialization'
method: CypressReference
initializeName: aString
	name := aString
%

category: 'private'
method: CypressReference
matches: aResolvedReference
  "Answer true if the receiver matches aResolvedReference."

  self subclassResponsibility: #'matches:'
%

category: 'accessing'
method: CypressReference
name
	"Answer the name of this reference."
	
	^ name
%

category: 'accessing'
method: CypressReference
packageName
  "Answer the package name."

  self subclassResponsibility: #'packageName'
%

category: 'printing'
method: CypressReference
printOn: aStream
  aStream
    nextPutAll: self class name;
    nextPutAll: ' name: ';
    print: self name
%

category: 'querying'
method: CypressReference
resolveAllWith: aPackageManager
  "Answer a sorted collection of all resolved references within aGofer."

  ^ aPackageManager allResolvedPackageReferences
    select: [ :each | self matches: each ]
%

! Class Implementation for CypressPackageReference

! ------------------- Instance methods for CypressPackageReference

category: 'accessing'
method: CypressPackageReference
branch
	"Answer the branch of the receiver."
	
	^ branch
%

category: 'initialization'
method: CypressPackageReference
initializeName: aString
	super initializeName: aString.
	self parseName: aString
%

category: 'private'
method: CypressPackageReference
matches: aResolvedReference
  ^ self name = aResolvedReference name
%

category: 'accessing'
method: CypressPackageReference
packageDefinition
  "For in-image packages, only the base package name is used (no branch)"

  ^ CypressPackageDefinition named: self packageName
%

category: 'accessing'
method: CypressPackageReference
packageName
  "Answer the package of the receiver."

  ^ package
%

category: 'initialization'
method: CypressPackageReference
parseName: aString
  | basicName index |
  basicName := aString.
  index := basicName indexOfSubCollection: '.' startingAt: 1.
  index = 0
    ifTrue: [ 
      package := basicName.
      branch := '' ]
    ifFalse: [ 
      package := basicName copyFrom: 1 to: index - 1.
      branch := basicName copyFrom: index to: basicName size ]
%

! Class Implementation for CypressResolvedReference

! ------------------- Class methods for CypressResolvedReference

category: 'instance creation'
classmethod: CypressResolvedReference
name: aString repository: aRepository
	^ self basicNew initializeName: aString repository: aRepository
%

! ------------------- Instance methods for CypressResolvedReference

category: 'comparing'
method: CypressResolvedReference
<= aResolvedReference
  ^ self name <= aResolvedReference name
%

category: 'initialization'
method: CypressResolvedReference
initializeName: aString repository: aRepository
	self initializeName: aString.
	repository := aRepository
%

category: 'accessing'
method: CypressResolvedReference
repository
	"Answer the repository of the receiver."
	
	^ repository
%

! Class Implementation for CypressVersionReference

! ------------------- Class methods for CypressVersionReference

category: 'instance creation'
classmethod: CypressVersionReference
name: aString

	^(self basicNew)
		initializeName: aString;
		yourself
%

category: 'instance creation'
classmethod: CypressVersionReference
new

	self error: 'Use #name: to initialize the receiver.'
%

! ------------------- Instance methods for CypressVersionReference

category: 'comparing'
method: CypressVersionReference
= aReference

	^self class = aReference class
		and: [self name = aReference name]
%

category: 'accessing'
method: CypressVersionReference
author
	"Answer the author of the receiver."
	
	^ author
%

category: 'accessing'
method: CypressVersionReference
branch
	"Answer the branch of the receiver."
	
	^ branch
%

category: 'comparing'
method: CypressVersionReference
hash

	^self name hash
%

category: 'initialization'
method: CypressVersionReference
initializeName: aString

	name := aString.
	self parseName: aString
%

category: 'private'
method: CypressVersionReference
matches: aResolvedReference
	^ self name = aResolvedReference name
%

category: 'accessing'
method: CypressVersionReference
name
	"Answer the name of this reference."
	
	^ name
%

category: 'accessing'
method: CypressVersionReference
packageName
	"Answer the package of the receiver."

	^ package
%

category: 'initialization'
method: CypressVersionReference
parseName: aString
	| basicName |
	basicName := (aString isEmpty or: [aString last isDigit or: [(aString includes: $() not]])
		ifTrue: [ aString ]
		ifFalse: [ (aString copyUpToLast: $.) copyUpTo: $( ].
	package := basicName copyUpToLast: $-.
	(package includes: $.)
		ifFalse: [ branch := '' ]
		ifTrue: [
			branch := package copyAfter: $..
			package := package copyUpTo: $. ].
	author := (basicName copyAfterLast: $-) copyUpToLast: $..
	versionNumber := (basicName copyAfterLast: $-) copyAfterLast: $..
	(versionNumber notEmpty and: [ versionNumber allSatisfy: [ :each | each isDigit ] ])
		ifTrue: [ versionNumber := versionNumber asInteger ]
		ifFalse: [ versionNumber := 0 ]
%

category: 'printing'
method: CypressVersionReference
printOn: aStream

	super printOn: aStream.
	aStream nextPutAll: ' name: '.
	self name printOn: aStream
%

category: 'accessing'
method: CypressVersionReference
versionNumber
	"Answer the version of the receiver."

	^ versionNumber
%

! Class Implementation for CypressAbstractFileUrl

! ------------------- Class methods for CypressAbstractFileUrl

category: 'instance creation'
classmethod: CypressAbstractFileUrl
absoluteFromText: aString
	"Return a URL from a string and handle
	a String without a scheme as a FileUrl."

	"Url absoluteFromText: 'http://chaos.resnet.gatech.edu:8000/docs/java/index.html?A%20query%20#part'" 
	"Url absoluteFromText: 'msw://chaos.resnet.gatech.edu:9000/testbook?top'"
	"Url absoluteFromText: 'telnet:chaos.resnet.gatech.edu'"
	"Url absoluteFromText: 'file:/etc/passwd'"

	| remainder index scheme fragment newUrl |
	"trim surrounding whitespace"
	remainder := aString trimSeparators.	

	"extract the fragment, if any"
	index := remainder indexOf: $#.
	index > 0 ifTrue: [
		fragment := remainder copyFrom: index + 1 to: remainder size.
		remainder := remainder copyFrom: 1 to: index - 1].

	"choose class based on the scheme name, and let that class do the bulk of the parsing"
	scheme := self schemeNameForString: remainder.
	newUrl := (self urlClassForScheme: scheme) new privateInitializeFromText: remainder.
	newUrl privateFragment: fragment.
	^newUrl
%

category: 'parsing'
classmethod: CypressAbstractFileUrl
urlClassForScheme: scheme

	scheme isNil ifTrue: [^FileUrl].
	^super urlClassForScheme: scheme
%

! ------------------- Instance methods for CypressAbstractFileUrl

category: 'accessing'
method: CypressAbstractFileUrl
codeFormat

	^self subclassResponsibility: #codeFormat.
%

category: 'testing'
method: CypressAbstractFileUrl
isStrict

	^self subclassResponsibility: #isStrict.
%

category: 'accessing'
method: CypressAbstractFileUrl
repositoryClass

	^CypressFileSystemRepository
%

! Class Implementation for CypressFileTreeFormatFileUrl

! ------------------- Class methods for CypressFileTreeFormatFileUrl

category: 'constants'
classmethod: CypressFileTreeFormatFileUrl
schemeName

	^'cypressft'
%

! ------------------- Instance methods for CypressFileTreeFormatFileUrl

category: 'accessing'
method: CypressFileTreeFormatFileUrl
codeFormat

	^'FileTree'
%

category: 'testing'
method: CypressFileTreeFormatFileUrl
isStrict

	^false
%

! Class Implementation for CypressFileTreeReadOnlyFileUrl

! ------------------- Class methods for CypressFileTreeReadOnlyFileUrl

category: 'constants'
classmethod: CypressFileTreeReadOnlyFileUrl
schemeName

	^'cypressfiletree'
%

! ------------------- Instance methods for CypressFileTreeReadOnlyFileUrl

category: 'accessing'
method: CypressFileTreeReadOnlyFileUrl
codeFormat

	^'FileTree'
%

category: 'testing'
method: CypressFileTreeReadOnlyFileUrl
isStrict

	^true
%

! Class Implementation for CypressFileUrl

! ------------------- Class methods for CypressFileUrl

category: 'constants'
classmethod: CypressFileUrl
schemeName

	^'cypress'
%

! ------------------- Instance methods for CypressFileUrl

category: 'accessing'
method: CypressFileUrl
codeFormat

	^'Cypress'
%

category: 'testing'
method: CypressFileUrl
isStrict

	^true
%

! Class Implementation for CypressLaxFileUrl

! ------------------- Class methods for CypressLaxFileUrl

category: 'constants'
classmethod: CypressLaxFileUrl
schemeName

	^'cypresslax'
%

! ------------------- Instance methods for CypressLaxFileUrl

category: 'accessing'
method: CypressLaxFileUrl
codeFormat

	^'Cypress'
%

category: 'testing'
method: CypressLaxFileUrl
isStrict

	^false
%

! Class Implementation for CypressSmalltalkUrl

! ------------------- Class methods for CypressSmalltalkUrl

category: 'constants'
classmethod: CypressSmalltalkUrl
schemeName

	^'chunk'
%

! ------------------- Instance methods for CypressSmalltalkUrl

category: 'accessing'
method: CypressSmalltalkUrl
codeFormat

	^'Chunk'
%

category: 'testing'
method: CypressSmalltalkUrl
isStrict

	^true
%

category: 'accessing'
method: CypressSmalltalkUrl
repositoryClass

	^CypressSmalltalkRepository
%

! Class Implementation for CypressTopazUrl

! ------------------- Class methods for CypressTopazUrl

category: 'constants'
classmethod: CypressTopazUrl
schemeName

	^'topaz'
%

! ------------------- Instance methods for CypressTopazUrl

category: 'accessing'
method: CypressTopazUrl
codeFormat

	^'Topaz'
%

category: 'testing'
method: CypressTopazUrl
isStrict

	^true
%

category: 'accessing'
method: CypressTopazUrl
repositoryClass

	^CypressTopazRepository
%

! Class Implementation for CypressAbstractPackageInformation

! ------------------- Class methods for CypressAbstractPackageInformation

category: 'Instance Creation'
classmethod: CypressAbstractPackageInformation
named: aString

	^self new
		initializeWithName: aString;
		yourself
%

! ------------------- Instance methods for CypressAbstractPackageInformation

category: 'Initializing - private'
method: CypressAbstractPackageInformation
initialize
%

category: 'Initializing - private'
method: CypressAbstractPackageInformation
initializeWithName: aString

	self initialize.
	self name: aString
%

category: 'Testing'
method: CypressAbstractPackageInformation
isKnown

	^false
%

category: 'Accessing'
method: CypressAbstractPackageInformation
name

	^name
%

category: 'Updating'
method: CypressAbstractPackageInformation
name: aString

	name := aString
%

category: 'Printing'
method: CypressAbstractPackageInformation
printDetailsOn: aStream

	aStream nextPutAll: self name
%

category: 'Accessing'
method: CypressAbstractPackageInformation
repositories

	^#()
%

! Class Implementation for CypressConflictingPackageInformation

! ------------------- Class methods for CypressConflictingPackageInformation

category: 'Instance Creation'
classmethod: CypressConflictingPackageInformation
fromUnknown: unknownPackageInformation conflictingWith: knownPackageInformation

	^(self named: unknownPackageInformation name)
		conflictsWith: knownPackageInformation;
		yourself.
%

! ------------------- Instance methods for CypressConflictingPackageInformation

category: 'Accessing'
method: CypressConflictingPackageInformation
conflictsWith

	^conflictsWith
%

category: 'Updating'
method: CypressConflictingPackageInformation
conflictsWith: someCypressKnownPackageInformations

	conflictsWith := someCypressKnownPackageInformations
%

! Class Implementation for CypressEclipsedPackageInformation

! ------------------- Class methods for CypressEclipsedPackageInformation

category: 'Instance Creation'
classmethod: CypressEclipsedPackageInformation
fromUnknown: unknownPackageInformation eclipsedBy: knownPackageInformation

	^(self named: unknownPackageInformation name)
		eclipsedBy: knownPackageInformation;
		yourself.
%

! ------------------- Instance methods for CypressEclipsedPackageInformation

category: 'Accessing'
method: CypressEclipsedPackageInformation
eclipsedBy

	^eclipsedBy
%

category: 'Updating'
method: CypressEclipsedPackageInformation
eclipsedBy: aPackageInformation

	eclipsedBy := aPackageInformation
%

! Class Implementation for CypressKnownPackageInformation

! ------------------- Class methods for CypressKnownPackageInformation

category: 'Instance Creation'
classmethod: CypressKnownPackageInformation
fromUnknown: aPackageInformation

	^self named: aPackageInformation name
%

! ------------------- Instance methods for CypressKnownPackageInformation

category: 'Updating'
method: CypressKnownPackageInformation
addRepository: aRepository

	self repositories at: aRepository url put: aRepository.
	self updateDigestsFromImageAndRepository: aRepository.
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
determineDigestFromImage

	^self packageStructure digest
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
determineDigestFromRepository: aRepository

	^ (aRepository readPackageStructureForPackageNamed: self name) digest.
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
digestFor: source

	^self digestFor: source or: [nil]
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
digestFor: source or: aBlock

	^self digests at: source ifAbsent: aBlock
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
digests

	^digests
%

category: 'Initializing - private'
method: CypressKnownPackageInformation
digests: anIdentityDictionary
	"Key: Source of package definitions (#IMAGE or a Repository url)
	 Value: (e.g. MD5) Digest of the package's defintions or an empty string.
	 A nil digest means there are no definitions for the given source."

   digests := anIdentityDictionary
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
imageDigest

	^self digestFor: #IMAGE.
%

category: 'Initializing - private'
method: CypressKnownPackageInformation
initialize

	super initialize.
	self
		repositories: IdentityDictionary new;
		digests: IdentityDictionary new.
%

category: 'Testing'
method: CypressKnownPackageInformation
isKnown

	^true
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
packageStructure

	^CypressPackageStructure
		fromPackage: (CypressPackageDefinition named: self name)
%

category: 'Updating'
method: CypressKnownPackageInformation
removeRepository: aRepository

	self repositories removeKey: aRepository url ifAbsent: [].
	self digests removeKey: aRepository url ifAbsent: [].
	self updateDigestsFromImage.
%

category: 'Accessing'
method: CypressKnownPackageInformation
repositories

	^repositories
%

category: 'Initializing - private'
method: CypressKnownPackageInformation
repositories: anIdentityDictionary
	"Key: Repository url
	 Value: Repository"

	repositories := anIdentityDictionary
%

category: 'Accessing - digests'
method: CypressKnownPackageInformation
repositoryDigests

	^self repositories collect: [:each | self digestFor: each url]
%

category: 'Updating - digests'
method: CypressKnownPackageInformation
updateDigestsFromAllRepositories

	self repositories do: [:each | self updateDigestsFromRepository: each]
%

category: 'Updating - digests'
method: CypressKnownPackageInformation
updateDigestsFromImage

	self digests at: #IMAGE put: self determineDigestFromImage
%

category: 'Updating - digests'
method: CypressKnownPackageInformation
updateDigestsFromImageAndAllRepositories

	self
		updateDigestsFromImage;
		updateDigestsFromAllRepositories
%

category: 'Updating - digests'
method: CypressKnownPackageInformation
updateDigestsFromImageAndRepository: aRepository

	self
		updateDigestsFromImage;
		updateDigestsFromRepository: aRepository
%

category: 'Updating - digests'
method: CypressKnownPackageInformation
updateDigestsFromRepository: aRepository

	self digests at: aRepository url put: (self determineDigestFromRepository: aRepository).
%

category: 'Writing'
method: CypressKnownPackageInformation
writeChangesToAllRepositories

	| imageDigest changedDigests changedRepositories |
	self updateDigestsFromImageAndAllRepositories.
	imageDigest := self imageDigest.
	changedDigests := self repositoryDigests reject: [:each | each = imageDigest].
	changedRepositories := changedDigests keys collect: [:each | self repositories at: each].
	self writePackageToRepositories: changedRepositories.
%

category: 'Writing'
method: CypressKnownPackageInformation
writePackageToRepositories: someRepositories

	| packageStructure |
	packageStructure := self packageStructure.
	^someRepositories
		do: [:each | each writePackageStructure: packageStructure]
%

! Class Implementation for CypressUnknownPackageInformation

! Class Implementation for CypressPackageInformation

! ------------------- Class methods for CypressPackageInformation

category: 'instance creation'
classmethod: CypressPackageInformation
named: aString repository: aCypressRepository
	"Answer an instance of the receiver representing the named package.
	 If the package was saved in a Repository, load up the saved details."

	^self new
		initializeFromName: aString andRepository: aCypressRepository;
		yourself
%

category: 'instance creation'
classmethod: CypressPackageInformation
new

	^super new
		initialize;
		yourself
%

! ------------------- Instance methods for CypressPackageInformation

category: 'updating - type'
method: CypressPackageInformation
beConflictedWith: somePackageNames
	"Be designated as representing the prefix of one or more Known Package names."

	type := 'Conflicted Name'.
	competingPackageNames := somePackageNames sortAscending.
	advice := 'Conflicts with the packages named ', self competingPackageNamesString
%

category: 'updating - type'
method: CypressPackageInformation
beKnown
	"Be known to represent a real package."

	type := 'Known Package'.
	advice := ''.
	competingPackageNames := #()
%

category: 'updating - type'
method: CypressPackageInformation
beQualifiedNameOf: somePackageNames
	"Be designated as qualifying a Known Package name and therefore not eligible as a package name."

	type := 'Qualified Name'.
	competingPackageNames := somePackageNames sortAscending.
	advice := 'Qualifies the package named ', self competingPackageNamesString
%

category: 'updating - type'
method: CypressPackageInformation
beUnknown
	"Be designated as possibly representing a package, but not known to do so."

	type := 'Unknown'.
	advice := ''.
	competingPackageNames := #()
%

category: 'accessing'
method: CypressPackageInformation
changesCount

	^changesCount
%

category: 'accessing'
method: CypressPackageInformation
changesCount: anInteger

	changesCount := anInteger
%

category: 'accessing'
method: CypressPackageInformation
changesStatus

	^self hasChanges
		ifTrue: [' (' , self changesCount printString , ')']
		ifFalse: ['']
%

category: 'accessing'
method: CypressPackageInformation
classCount

	^self imageCounts first
%

category: 'accessing'
method: CypressPackageInformation
competingPackageNames

	^competingPackageNames
%

category: 'accessing'
method: CypressPackageInformation
competingPackageNamesString

	^String streamContents: 
			[:stream |
			self competingPackageNames
				do: [:each | stream nextPutAll: each printString]
				separatedBy: [stream nextPutAll: ', ']]
%

category: 'accessing'
method: CypressPackageInformation
description

	self isKnown ifTrue: [^self savedLocation].
	self isUnknown ifTrue: [^' <unknown>'].
	^' <', advice, '>'
%

category: 'accessing'
method: CypressPackageInformation
determinedChangesCount

	| notInImage notInSaved |
	notInImage := self savedDefinitions
				reject: [:each | self imageDefinitions includes: each].
	notInSaved := self imageDefinitions
		reject: [:each | self savedDefinitions includes: each].
	^notInImage size + notInSaved size
%

category: 'testing'
method: CypressPackageInformation
hasChanges

	^self changesCount > 0
%

category: 'accessing'
method: CypressPackageInformation
imageCounts

	^imageCounts
%

category: 'accessing'
method: CypressPackageInformation
imageCounts: someIntegers
	"A pair: the number of classes and number of methods"

	imageCounts := someIntegers
%

category: 'accessing'
method: CypressPackageInformation
imageDefinitionCounts

	| classCount methodCount |
	classCount := methodCount := 0.
	self imageDefinitions do: 
			[:each |
			each classDefinition: [:classDefinition | classCount := classCount + 1]
				methodDefinition: [:methodDefinition | methodCount := methodCount + 1]].
	^Array with: classCount with: methodCount
%

category: 'accessing'
method: CypressPackageInformation
imageDefinitions

	^imageDefinitions
%

category: 'accessing'
method: CypressPackageInformation
imageDefinitions: someCypressDefinitions

	imageDefinitions := someCypressDefinitions
%

category: 'accessing'
method: CypressPackageInformation
imageDefinitionsStatus

	^self classCount printString , '/' , self methodCount printString
%

category: 'initializing'
method: CypressPackageInformation
initialize

	self
		beUnknown;
		name: '';
		imageDefinitions: #();
		savedDefinitions: #();
		savedLocation: '';
		repositoryDescription: '';
		imageCounts: #(0 0);
		changesCount: 0
%

category: 'initializing'
method: CypressPackageInformation
initializeFromName: aString andRepository: aCypressRepositoryOrNil

	self name: aString.
	aCypressRepositoryOrNil isNil ifTrue: [^self].
	self updateKnownPackageRepository: aCypressRepositoryOrNil
%

category: 'testing - type'
method: CypressPackageInformation
isConflicted

	^type = 'Conflicted Name'
%

category: 'testing - type'
method: CypressPackageInformation
isKnown

	^type = 'Known Package'
%

category: 'testing - type'
method: CypressPackageInformation
isQualifiedName

	^type = 'Qualified Name'
%

category: 'testing - type'
method: CypressPackageInformation
isUnknown

	^type = 'Unknown'
%

category: 'accessing'
method: CypressPackageInformation
methodCount

	^self imageCounts last
%

category: 'accessing'
method: CypressPackageInformation
name

	^name
%

category: 'accessing'
method: CypressPackageInformation
name: aString

	name := aString
%

category: 'printing'
method: CypressPackageInformation
printDetailsOn: aStream

	aStream
		nextPutAll: self name;
		nextPutAll: ' - ';
		nextPutAll: self description
%

category: 'updating'
method: CypressPackageInformation
readDefinitionsFromRepository

	^(self repository reader readPackageStructureForPackageNamed: self name)
		packageStructure snapshot
		definitions
%

category: 'updating'
method: CypressPackageInformation
refresh

	self isKnown ifFalse: [^self].
	self
		updateImageDefinitions;
		updateSavedDefinitions;
		updateChangesCount.
%

category: 'accessing'
method: CypressPackageInformation
repository

	^repository
%

category: 'accessing'
method: CypressPackageInformation
repository: aCypressFileSystemRepository

	repository := aCypressFileSystemRepository
%

category: 'unknown'
method: CypressPackageInformation
repositoryDescription

	^repositoryDescription
%

category: 'unknown'
method: CypressPackageInformation
repositoryDescription: aString

	repositoryDescription := aString
%

category: 'accessing'
method: CypressPackageInformation
savedDefinitions

	^savedDefinitions
%

category: 'accessing'
method: CypressPackageInformation
savedDefinitions: someCypressDefinitions

	savedDefinitions := someCypressDefinitions
%

category: 'accessing'
method: CypressPackageInformation
savedLocation

	^savedLocation
%

category: 'accessing'
method: CypressPackageInformation
savedLocation: aDirectory

	savedLocation := aDirectory
%

category: 'accessing'
method: CypressPackageInformation
status

	| changes |
	(changes := self changesStatus) isEmpty ifTrue: [^self imageDefinitionsStatus].
	^self imageDefinitionsStatus, changes
%

category: 'updating'
method: CypressPackageInformation
updateChangesCount
	"Must be applied after the image definitions and saved definitions are updated."

	self changesCount: self determinedChangesCount
%

category: 'updating'
method: CypressPackageInformation
updateImageDefinitions

	self
		imageDefinitions: (CypressPackageDefinition named: self name) snapshot
					definitions;
		imageCounts: self imageDefinitionCounts
%

category: 'updating'
method: CypressPackageInformation
updateKnownPackageRepository: aCypressRepository
	"Update the receiver to reflect it being a known package."

	self
		beKnown;
		updateRepository: aCypressRepository;
		refresh.
%

category: 'updating'
method: CypressPackageInformation
updateRepository: aCypressRepository

	self
		repository: aCypressRepository;
		repositoryDescription: self repository description;
		savedLocation: self repository directoryPath
%

category: 'updating'
method: CypressPackageInformation
updateSavedDefinitions

	self savedDefinitions: self readDefinitionsFromRepository
%

! Class Extensions

! Class initializers 

doit
CypressAbstractRepository initialize.
CypressPackageManager2 initialize.
true.
%



! End of Package: Cypress-PackageManagement


