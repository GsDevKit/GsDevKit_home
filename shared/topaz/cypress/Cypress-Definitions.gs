! Package: Cypress-Definitions


! deleted: Remove existing behavior from package Cypress-Definitions
!  all 3.4 Cypress classes are removed from Globals earlier in upgrade


! Class Declarations

doit
(Error
	subclass: 'CypressError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'CypressLoaderError'
	instVarNames: #( exception patchOperation )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

CypressLoaderError is used to report a failure applying a specific CypressPatchOperation.
The CypressLoader made a first attempt to apply the Patch Operation and reported a 
CypressLoaderErrorNotification, set aside the Patch Operation, and has retried it after applying
all other Patch Operations.


Instance Variables:

patchOperation:		the CypressPatchOperation that could not be applied.
exception:			the Error which occurred while trying to apply the Patch Operation.
';
		immediateInvariant.
true.
%

doit
(Error
	subclass: 'CypressLoaderMissingClasses'
	instVarNames: #( requirementsMap )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(Notification
	subclass: 'CypressLoaderErrorNotification'
	instVarNames: #( exception patchOperation )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.

CypressLoaderErrorNotification is used to notify a consumer of the CypressLoader that a particular CypressPatchOperation failed.
As a Notification, it resumes by default, logging the error to the Transcript.


Instance Variables:

patchOperation:		the CypressPatchOperation that could not be applied.
exception:			the Error which occurred while trying to apply the Patch Operation.
';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressObject'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressDefinition'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressDefinition
	subclass: 'CypressClassDefinition'
	instVarNames: #( category classInstVarNames classVarNames comment defaultSymbolDictionaryName instVarNames name poolDictionaryNames subclassType superclassName )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressDefinition
	subclass: 'CypressMethodDefinition'
	instVarNames: #( category classIsMeta className selector source )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressDefinitionIndex'
	instVarNames: #( definitionMap )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressDependencySorter'
	instVarNames: #( orderedItems provided required )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressLoader'
	instVarNames: #( additions defaultSymbolDictionaryName errors exceptionClass methodAdditions obsoletions provisions removals requirements unloadable )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressPackageDefinition'
	instVarNames: #( name )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressPatch'
	instVarNames: #( operations )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressPatchOperation'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressPatchOperation
	subclass: 'CypressAddition'
	instVarNames: #( definition )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressPatchOperation
	subclass: 'CypressModification'
	instVarNames: #( modification obsoletion )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressPatchOperation
	subclass: 'CypressRemoval'
	instVarNames: #( definition )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressSnapshot'
	instVarNames: #( definitions )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Cypress-Definitions';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%

set compile_env: 2

! Class Implementation for CypressError

! Class Implementation for CypressLoaderError

! ------------------- Class methods for CypressLoaderError

category: 'instance creation'
classmethod: CypressLoaderError
patchOperation: aPatchOperation exception: anException

	^self new
		initializePatchOperation: aPatchOperation exception: anException;
		yourself
%

! ------------------- Instance methods for CypressLoaderError

category: 'accessing'
method: CypressLoaderError
exception
	"Answer the original exception raised when applying the Patch Operation."

	^exception
%

category: 'updating'
method: CypressLoaderError
exception: anException
	"Assign the original exception raised when applying the Patch Operation."

	exception := anException
%

category: 'initializing - private'
method: CypressLoaderError
initialize

	super initialize.
	gsResumable := true
%

category: 'initializing - private'
method: CypressLoaderError
initializeMessageText

	| stream |
	stream := WriteStreamPortable on: (String new: 100).
	stream
		nextPutAll: self patchOperation printString;
		nextPutAll: ' failed because ';
		nextPutAll: self exception printString.
	messageText := stream contents
%

category: 'initializing - private'
method: CypressLoaderError
initializePatchOperation: aPatchOperation exception: anException

	self
		patchOperation: aPatchOperation;
		exception: anException;
		initializeMessageText
%

category: 'handling'
method: CypressLoaderError
logNotification: aString

	GsFile gciLogServer: aString.
	Transcript cr; nextPutAll: aString.
%

category: 'accessing'
method: CypressLoaderError
patchOperation
	"Answer the Patch Operation that could not be applied."

	^patchOperation
%

category: 'updating'
method: CypressLoaderError
patchOperation: aCypressPatchOperation
	"Assign the Patch Operation that could not be applied."

	patchOperation := aCypressPatchOperation
%

! Class Implementation for CypressLoaderMissingClasses

! ------------------- Class methods for CypressLoaderMissingClasses

category: 'instance creation'
classmethod: CypressLoaderMissingClasses
missingRequirementsMap: aDictionary
	"Answer an instance of the receiver initialized on the specified
	 missing requirements. aDictionary maps prerequisite names to
	 a collection of dependent definitions."

	^self new
		initializeRequirementsMap: aDictionary;
		yourself
%

! ------------------- Instance methods for CypressLoaderMissingClasses

category: 'initializing - private'
method: CypressLoaderMissingClasses
initialize

	super initialize.
	gsResumable := true
%

category: 'initializing - private'
method: CypressLoaderMissingClasses
initializeMessageText

	| stream |
	stream := WriteStreamPortable on: (String new: 100).
	stream nextPutAll: 'Missing classes:'.
	self requirementsMap keysAndValuesDo: 
			[:className :definitions |
			stream
				space;
				nextPutAll: className printString , '(' , definitions size printString
							, ')'].
	messageText := stream contents
%

category: 'initializing - private'
method: CypressLoaderMissingClasses
initializeRequirementsMap: aDictionary

	self
		requirementsMap: aDictionary;
		initializeMessageText.
%

category: 'accessing'
method: CypressLoaderMissingClasses
requirementsMap
	"The requirements map is a Dictionary mapping missing class
	 names to a collection of dependent definitions."

   ^requirementsMap
%

category: 'updating'
method: CypressLoaderMissingClasses
requirementsMap: aDictionary
	"The requirements map is a Dictionary mapping missing class
	 names to a collection of dependent definitions."

	requirementsMap := aDictionary
%

! Class Implementation for CypressLoaderErrorNotification

! ------------------- Class methods for CypressLoaderErrorNotification

category: 'instance creation'
classmethod: CypressLoaderErrorNotification
patchOperation: aPatchOperation exception: anException

	^self new
		initializePatchOperation: aPatchOperation exception: anException;
		yourself
%

! ------------------- Instance methods for CypressLoaderErrorNotification

category: 'handling'
method: CypressLoaderErrorNotification
defaultAction
	"Log the notification to the GCI log and the Transcript, then resume."

	self logNotification: 'Notice: ' , self asString.
	^super defaultAction
%

category: 'accessing'
method: CypressLoaderErrorNotification
exception
	"Answer the original exception raised when applying the Patch Operation."

	^exception
%

category: 'updating'
method: CypressLoaderErrorNotification
exception: anException
	"Assign the original exception raised when applying the Patch Operation."

	exception := anException
%

category: 'initializing - private'
method: CypressLoaderErrorNotification
initializeMessageText

	| stream |
	stream := WriteStreamPortable on: (String new: 100).
	stream
		nextPutAll: self patchOperation printString;
		nextPutAll: ' failed because ';
		nextPutAll: self exception printString.
	messageText := stream contents
%

category: 'initializing - private'
method: CypressLoaderErrorNotification
initializePatchOperation: aPatchOperation exception: anException

	self
		patchOperation: aPatchOperation;
		exception: anException;
		initializeMessageText
%

category: 'handling'
method: CypressLoaderErrorNotification
logNotification: aString

	GsFile gciLogServer: aString.
	Transcript cr; nextPutAll: aString.
%

category: 'accessing'
method: CypressLoaderErrorNotification
patchOperation
	"Answer the Patch Operation that could not be applied."

	^patchOperation
%

category: 'updating'
method: CypressLoaderErrorNotification
patchOperation: aCypressPatchOperation
	"Assign the Patch Operation that could not be applied."

	patchOperation := aCypressPatchOperation
%

! Class Implementation for CypressObject

! ------------------- Class methods for CypressObject

category: 'miscellany'
classmethod: CypressObject
collection: aCollection gather: aOneArgBlock
	"Evaluate the block once for each element of aCollection. The block should answer a collection. 
	Answer an Array containing all elements of all the answered collections."

	| result |
	result := Array new.
	aCollection do: [:each | result addAll: (aOneArgBlock value: each)].
	^result
%

category: 'miscellany'
classmethod: CypressObject
elementsIn: sourceCollection butNotIn: exclusionCollection

	| exclusionSet |
	exclusionSet := exclusionCollection asSet.
	^sourceCollection reject: [:each | exclusionSet includes: each]
%

category: 'miscellany'
classmethod: CypressObject
elementsInBoth: collection1 and: collection2
	"Set intersection generalized to any collections."

	| temporarySet |
	temporarySet := collection2 asSet.
	^collection1 select: [:each | temporarySet includes: each]
%

category: 'converting'
classmethod: CypressObject
normalizeLineEndingsOf: aString
	"Answer a copy of aString with the line endings normalized to
	 correspond to the current platform, regardless of how they were
	 saved. For example, Squeak uses CR and would normalize with
	 #withSqueakLineEndings, for example.

	 GemStone Smalltalk uses the Unix line ending of LF."

	| cr lf inPos outPos outString newOutPos indexLF indexCR |
	cr := Character cr.
	indexCR := aString indexOf: cr startingAt: 1.
	indexCR = 0 ifTrue: [^aString].
	lf := Character lf.
	indexLF := aString indexOf: lf startingAt: 1.
	indexLF = 0 ifTrue: [^aString copyReplacing: cr with: lf].
	inPos := outPos := 1.
	outString := String new: aString size.
	
	["check if next CR is before next LF or if there are no more LF"
	(indexLF = 0 or: [indexCR < indexLF])
		ifTrue: 
			[newOutPos := outPos + 1 + indexCR - inPos.
			outString
				replaceFrom: outPos
				to: newOutPos - 2
				with: aString
				startingAt: inPos.
			outString at: newOutPos - 1 put: lf.
			outPos := newOutPos.
			1 + indexCR = indexLF
				ifTrue: 
					["Caught a CR-LF pair"
					inPos := 1 + indexLF.
					indexLF := aString indexOf: lf startingAt: inPos]
				ifFalse: [inPos := 1 + indexCR].
			indexCR := aString indexOf: cr startingAt: inPos]
		ifFalse: 
			[newOutPos := outPos + 1 + indexLF - inPos.
			outString
				replaceFrom: outPos
				to: newOutPos - 1
				with: aString
				startingAt: inPos.
			outPos := newOutPos.
			inPos := 1 + indexLF.
			indexLF := aString indexOf: lf startingAt: inPos].
	indexCR = 0]
			whileFalse.

	"no more CR line endings. copy the rest"
	newOutPos := outPos + (aString size - inPos + 1).
	outString
		replaceFrom: outPos
		to: newOutPos - 1
		with: aString
		startingAt: inPos.
	^outString copyFrom: 1 to: newOutPos - 1
%

! ------------------- Instance methods for CypressObject

category: 'accessing'
method: CypressObject
allClasses

	| classes |
	classes := Array new.
	System myUserProfile symbolList
		do: [:dict | classes addAll: (dict select: [:each | each isBehavior])].
	^classes
%

category: 'private'
method: CypressObject
anyElementOf: aCollection ifEmpty: aBlock

	aCollection do: [:each | ^each].
	^aBlock value
%

category: 'accessing'
method: CypressObject
classesInPackageNamed: aString

	| packageName classes |
	packageName := aString asLowercase.
	classes := Array new.
	System myUserProfile symbolList do: 
			[:dict |
			classes
				addAll: (dict select: 
							[:each |
							each isBehavior and: 
									[| candidateName |
									candidateName := each category asLowercase.
									candidateName = packageName
										or: [(candidateName indexOfSubCollection: packageName , '-') = 1]]])].
	^classes sortAscending: #('name')
%

category: 'miscellany'
method: CypressObject
collection: aCollection gather: aOneArgBlock
	"Evaluate the block once for each element of aCollection. The block should answer a collection. 
	Answer an Array containing all elements of all the answered collections."

	^self class collection: aCollection gather: aOneArgBlock
%

category: 'initializing'
method: CypressObject
defaultSymbolDictionaryName
  "Name of the SymbolDictionary where new classes should be installed"

  ^ #'UserGlobals'
%

category: 'sorting'
method: CypressObject
determineClassHierarchicalOrder: someClasses
	"Returns an ordered collection of the specified classes such that
	 hierarchical dependencies come first."
	"Not sure whether we ever get non-behaviors. 
	The previous, more complex, version of this method contained this filter."

	| order toBeOrdered processed aClass |
	toBeOrdered := (someClasses select: [:each | each isBehavior])
				asIdentitySet.
	order := OrderedCollection new.
	processed := IdentitySet new.
	[(aClass := self anyElementOf: toBeOrdered ifEmpty: [nil]) isNil]
		whileFalse: 
			[self
				orderBySuperclass: aClass
				from: toBeOrdered
				into: order
				ignoring: processed].
	^order
%

category: 'miscellany'
method: CypressObject
elementsIn: sourceCollection butNotIn: exclusionCollection

	^self class elementsIn: sourceCollection butNotIn: exclusionCollection
%

category: 'miscellany'
method: CypressObject
elementsInBoth: collection1 and: collection2
	"Set intersection generalized to any collections."

	^self class elementsInBoth: collection1 and: collection2
%

category: 'initializing'
method: CypressObject
initialize
	"Placeholder: #initialize is not defined by Object in GemStone Smalltalk."
%

category: 'converting'
method: CypressObject
normalizeLineEndingsOf: aString
	"Answer a copy of aString with the line endings normalized to
	 correspond to the current platform, regardless of how they were
	 saved. For example, Squeak uses CR and would normalize with
	 #withSqueakLineEndings, for example."

	^self class normalizeLineEndingsOf: aString.
%

category: 'private'
method: CypressObject
orderBySuperclass: aClass from: toBeOrdered into: order ignoring: processed
	"Private. Add to 'order', superclasses first, aClass and any of its superclasses 
	that appear in 'toBeOrdered' but do not appear in 'processed'.
	Remove from 'toBeOrdered' any class added to 'ordered'.
	Any class seen, add to 'processed' whether or not added to 'order'."

	| superclass |
	superclass := aClass superclass.
	superclass isNil | (processed includes: superclass)
		ifFalse: 
			[self
				orderBySuperclass: superclass
				from: toBeOrdered
				into: order
				ignoring: processed].
	processed add: aClass.
	(toBeOrdered includes: aClass)
		ifTrue: 
			[toBeOrdered remove: aClass.
			order add: aClass]
%

category: 'printing'
method: CypressObject
printDetailsOn: aStream
%

category: 'printing'
method: CypressObject
printOn: aStream

	| className |
	className := self class name.
	aStream
		nextPutAll: (className first isVowel ifTrue:[ 'an ' ] ifFalse:[ 'a ' ]);
		nextPutAll: className;
		nextPutAll: '('.
	self printDetailsOn: aStream.
	aStream nextPutAll: ')'.
%

category: 'accessing'
method: CypressObject
resolveGlobalNamed: aString

	^self resolveGlobalNamed: aString
		or: [CypressError signal: 'Could not resolve global named ' , aString printString]
%

category: 'accessing'
method: CypressObject
resolveGlobalNamed: aString or: aBlock

	^((System myUserProfile resolveSymbol: aString) ifNil: [^aBlock value])
		value
%

category: 'converting'
method: CypressObject
stringForVariables: variableList

	| stream |
	stream := WriteStreamPortable on: (String new: 100).
	variableList do: [:each | stream nextPutAll: each]
		separatedBy: [stream space].
	^stream contents
%

category: 'accessing'
method: CypressObject
symbolDictionaryForClassNamed: aString
  "Answer the SymbolDictionary containing the named class.
	 If there are multiple answers, answer the first.
	 If there are no answers (i.e., the class does not exist), put it in UserGlobals."

  ^ self
    symbolDictionaryForClassNamed: aString
    or: [ System myUserProfile objectNamed: self defaultSymbolDictionaryName ]
%

category: 'accessing'
method: CypressObject
symbolDictionaryForClassNamed: aString or: aBlock
	"Answer the SymbolDictionary containing the named class.
	 If there are multiple answers, answer the first.
	 If there are no answers (i.e., the class does not exist), answer
	 the result of evaluating aBlock."

	^System myUserProfile symbolList asArray
		detect: [:each | each anySatisfy: [:every | every isBehavior and: [every name asString = aString asString]]]
		ifNone: aBlock
%

category: 'accessing'
method: CypressObject
symbolList
  ^ System myUserProfile symbolList
%

! Class Implementation for CypressDefinition

! ------------------- Instance methods for CypressDefinition

category: 'comparing'
method: CypressDefinition
= aDefinition

	^(aDefinition isKindOf: CypressDefinition)
		and: [aDefinition description = self description]
%

category: 'loading'
method: CypressDefinition
actualClass

	self subclassResponsibility: #actualClass
%

category: 'visiting'
method: CypressDefinition
classDefinition: classBlock methodDefinition: methodBlock
	"default is noop"
%

category: 'accessing'
method: CypressDefinition
description
	self subclassResponsibility: #description
%

category: 'accessing'
method: CypressDefinition
details

	| stream |
	stream := WriteStreamPortable on: (String new: 100).
	self printDetailsOn: stream.
	^stream contents
%

category: 'comparing'
method: CypressDefinition
hash
    ^ self description hash
%

category: 'testing'
method: CypressDefinition
isSameRevisionAs: aDefinition
	^ self = aDefinition
%

category: 'loading'
method: CypressDefinition
loadClassDefinition
  self loadClassDefinition: self defaultSymbolDictionaryName
%

category: 'loading'
method: CypressDefinition
loadClassDefinition: aDefaultSymbolDictionaryName
  "default is to do nothing"
%

category: 'loading'
method: CypressDefinition
loadMethodDefinition
	"default is to do nothing"
%

category: 'loading'
method: CypressDefinition
postLoad
	"noop"
%

category: 'loading'
method: CypressDefinition
postLoadOver: aDefinition

	self postLoad
%

category: 'dependency'
method: CypressDefinition
provisions
	"Answer list of global names defined by this definition"

	^#()
%

category: 'dependency'
method: CypressDefinition
requirements
	"Answer list of global names required by this definition"

	^#()
%

category: 'loading'
method: CypressDefinition
unloadDefinition

	self subclassResponsibility: #unloadDefinition
%

! Class Implementation for CypressClassDefinition

! ------------------- Class methods for CypressClassDefinition

category: 'instance creation'
classmethod: CypressClassDefinition
forClass: aClass

	| superclassname |
	superclassname := aClass superclass
				ifNil: ['nil']
				ifNotNil: [:sClass | sClass name].
	^self
		name: aClass name
		superclassName: superclassname
		category: aClass category
		instVarNames: aClass instVarNames
		classInstVarNames: aClass class instVarNames
		classVarNames: aClass classVarNames
		poolDictionaryNames: aClass sharedPools
		comment: aClass comment
		subclassType: (self subclassTypeOf: aClass)
%

category: 'instance creation'
classmethod: CypressClassDefinition
name: aClassName superclassName: aSuperclassName category: aCategory instVarNames: someInstanceVariableNames classInstVarNames: someClassInstanceVariableNames classVarNames: someClassVariableNames poolDictionaryNames: somePoolDictionaryNames comment: aComment subclassType: subclassType

	^self new
		name: aClassName asString
		superclassName: aSuperclassName asString
		category: aCategory asString
		instVarNames: (someInstanceVariableNames asArray
				collect: [:each | each asString])
		classInstVarNames: (someClassInstanceVariableNames asArray
				collect: [:each | each asString])
		classVarNames: (someClassVariableNames asArray
				collect: [:each | each asString])
		poolDictionaryNames: (somePoolDictionaryNames asArray
				collect: [:each | each asString])
		comment: (self normalizeLineEndingsOf: aComment)
		subclassType: subclassType
%

category: 'private'
classmethod: CypressClassDefinition
subclassTypeOf: aClass
	"Answer a description of the argument to identify whether it is a regular class,
	 a byte subclass, or an indexable subclass."

	^(aClass isBytes and: [aClass superClass isBytes not])
		ifTrue: ['byteSubclass']
		ifFalse: 
			[(aClass isIndexable and: [aClass superClass isIndexable not])
				ifTrue: ['indexableSubclass']
				ifFalse: ['']]
%

! ------------------- Instance methods for CypressClassDefinition

category: 'comparing'
method: CypressClassDefinition
= aDefinition
  ^ super = aDefinition
    and: [ 
      superclassName = aDefinition superclassName
        and: [ 
          category = aDefinition category
            and: [ 
              instVarNames = aDefinition instVarNames
                and: [ 
                  classInstVarNames = aDefinition classInstVarNames
                    and: [ 
                      classVarNames asSortedCollection = aDefinition classVarNames asSortedCollection
                        and: [ 
                          poolDictionaryNames = aDefinition poolDictionaryNames
                            and: [ comment = aDefinition comment ] ] ] ] ] ] ]
%

category: 'loading'
method: CypressClassDefinition
actualClass

	^self resolveGlobalNamed: self name
%

category: 'loading'
method: CypressClassDefinition
actualClassOrNil

	^self resolveGlobalNamed: self name or: [nil]
%

category: 'converting'
method: CypressClassDefinition
asCypressClassDefinition

	^self
%

category: 'accessing'
method: CypressClassDefinition
category

	^category
%

category: 'visiting'
method: CypressClassDefinition
classDefinition: classBlock methodDefinition: methodBlock

	classBlock value: self
%

category: 'accessing'
method: CypressClassDefinition
classDefinitionCreationString

	| stream symbolDict |
	stream := WriteStreamPortable on: (String new: 100).
	stream
		nextPutAll: '(CypressClassDefinition';
		lf;
		tab;
		nextPutAll: 'name: ' , self className printString;
		lf;
		tab;
		nextPutAll: 'superclassName: ' , self superclassName printString;
		lf;
		tab;
		nextPutAll: 'category: ' , self category printString;
		lf;
		tab;
		nextPutAll: 'instVarNames: #(' , self instanceVariablesString , ')';
		lf;
		tab;
		nextPutAll: 'classInstVarNames: #(' , self classInstanceVariablesString
					, ')';
		lf;
		tab;
		nextPutAll: 'classVarNames: #(' , self classVariablesString , ')';
		lf;
		tab;
		nextPutAll: 'poolDictionaryNames: #(' , self poolDictionariesString , ')';
		lf;
		tab;
		nextPutAll: 'comment: ' , self comment printString;
		lf;
		tab;
		nextPutAll: 'subclassType: ' , self subclassType printString , ')';
		lf;
		tab;
		tab;
		yourself.
	symbolDict := self symbolDictionaryForClassNamed: self className.
	self actualClassOrNil isNil
		ifTrue: 
			[stream
				nextPutAll: 'loadClassDefinition.';
				yourself]
		ifFalse: 
			[stream
				nextPutAll: 'loadClassDefinition: ' , symbolDict name asString printString
							, '.';
				yourself].
	^stream contents
%

category: 'private'
method: CypressClassDefinition
classInstanceVariablesString
  ^ self stringForVariables: self classInstVarNames
%

category: 'accessing'
method: CypressClassDefinition
classInstVarNames
  ^ classInstVarNames sort
%

category: 'accessing'
method: CypressClassDefinition
className

	^self name
%

category: 'loading'
method: CypressClassDefinition
classNeedingMigration: aClass
  "right now we will create classes without doing a migration ..."

  
%

category: 'private'
method: CypressClassDefinition
classVariablesString
  ^ self stringForVariables: self classVarNames asSortedCollection
%

category: 'accessing'
method: CypressClassDefinition
classVarNames
  ^ classVarNames sort
%

category: 'accessing'
method: CypressClassDefinition
comment

	^comment
%

category: 'loading'
method: CypressClassDefinition
createOrReviseByteClass
	"To be resolved:
		- the question of an 'environment' in which to create the class.
		- the question of which SymbolDictionary in which to create the class.
	 These are perhaps the same question."

	| superClass |
	superClass := self resolveGlobalNamed: self superclassName.
	^(superClass
		byteSubclass: self name
		classVars: (self classVarNames collect: [:each | each asSymbol])
		classInstVars: (self classInstVarNames collect: [:each | each asSymbol])
		poolDictionaries: self poolDictionaryList
		inDictionary: (self symbolDictionaryForClassNamed: self name)
		options: #())
			category: category;
			comment: self comment
%

category: 'loading'
method: CypressClassDefinition
createOrReviseClass

	^self subclassType = ''
		ifTrue: [self createOrReviseRegularClass]
		ifFalse: 
			[self subclassType = 'byteSubclass'
				ifTrue: [self createOrReviseByteClass]
				ifFalse: 
					[self subclassType = 'indexableSubclass'
						ifTrue: [self createOrReviseIndexableClass]
						ifFalse: 
							[self error: 'unknown subclass type: ' , self subclassType printString]]]
%

category: 'loading'
method: CypressClassDefinition
createOrReviseIndexableClass
	"To be resolved:
		- the question of an 'environment' in which to create the class.
		- the question of which SymbolDictionary in which to create the class.
	 These are perhaps the same question."

	| superClass |
	superClass := self resolveGlobalNamed: self superclassName.
	^(superClass
		indexableSubclass: self name
		instVarNames: (self instVarNames collect: [:each | each asSymbol])
		classVars: (self classVarNames collect: [:each | each asSymbol])
		classInstVars: (self classInstVarNames collect: [:each | each asSymbol])
		poolDictionaries: self poolDictionaryList
		inDictionary: (self symbolDictionaryForClassNamed: self name)
		options: #())
			category: category;
			comment: self comment
%

category: 'loading'
method: CypressClassDefinition
createOrReviseRegularClass
	"To be resolved:
		- the question of an 'environment' in which to create the class.
		- the question of which SymbolDictionary in which to create the class.
	 These are perhaps the same question."

	| superClass |
	superClass := self resolveGlobalNamed: self superclassName.
	^(superClass
		subclass: self name
		instVarNames: (self instVarNames collect: [:each | each asSymbol])
		classVars: (self classVarNames collect: [:each | each asSymbol])
		classInstVars: (self classInstVarNames collect: [:each | each asSymbol])
		poolDictionaries: self poolDictionaryList
		inDictionary: (self symbolDictionaryForClassNamed: self name)
		options: #())
			category: category;
			comment: self comment
%

category: 'accessing'
method: CypressClassDefinition
defaultSymbolDictionaryName
  ^ defaultSymbolDictionaryName ifNil: [ super defaultSymbolDictionaryName ]
%

category: 'accessing'
method: CypressClassDefinition
defaultSymbolDictionaryName: aSymbol
  defaultSymbolDictionaryName := aSymbol
%

category: 'accessing'
method: CypressClassDefinition
description

	^ Array with: name
%

category: 'loading'
method: CypressClassDefinition
failedCompiledMethods: someCompiledMethods

	someCompiledMethods isEmpty ifTrue: [^self].
	self halt: 'not implemented yet'
%

category: 'comparing'
method: CypressClassDefinition
hash

	| hash |
	hash := name hash.
	hash := superclassName hash bitOr: hash.
	hash := (category ifNil: ['']) hash bitOr: hash.
	instVarNames , classInstVarNames, classVarNames, poolDictionaryNames
		do: [:vName | hash := vName hash bitOr: hash].
	^hash
%

category: 'private'
method: CypressClassDefinition
instanceVariablesString
    ^ self stringForVariables: self instVarNames
%

category: 'accessing'
method: CypressClassDefinition
instVarNames
  ^ instVarNames sort
%

category: 'loading'
method: CypressClassDefinition
loadClassDefinition
  "Create a new version of the defined class. If the class already exists,
	 copy the behaviors and state from the old version."

  ^ self loadClassDefinition: self defaultSymbolDictionaryName
%

category: 'loading'
method: CypressClassDefinition
loadClassDefinition: aDefaultSymbolDictionaryName
	"Create a new version of the defined class. If the class already exists,
	 copy the behaviors and state from the old version."

	| newClass oldClass |
        self defaultSymbolDictionaryName: aDefaultSymbolDictionaryName.
	oldClass := self actualClassOrNil.
	newClass := self createOrReviseClass.
	(oldClass isNil or: [newClass == oldClass]) ifTrue: [^self].
	self classNeedingMigration: newClass.
	self
		recompileWithSubclassesFrom: oldClass
		to: newClass
		symbolList: System myUserProfile symbolList.
%

category: 'accessing'
method: CypressClassDefinition
name

	^name
%

category: 'initialization'
method: CypressClassDefinition
name: aClassName superclassName: aSuperclassName category: aCategory instVarNames: someInstanceVariableNames classInstVarNames: someClassInstanceVariableNames classVarNames: someClassVariableNames poolDictionaryNames: somePoolDictionaryNames comment: aComment subclassType: aSubclassType

	name := aClassName.
	superclassName := aSuperclassName.
	category := aCategory.
	instVarNames := someInstanceVariableNames.
	classInstVarNames := someClassInstanceVariableNames.
	classVarNames := someClassVariableNames.
	poolDictionaryNames := somePoolDictionaryNames.
	comment := aComment.
	subclassType := aSubclassType
%

category: 'loading'
method: CypressClassDefinition
poolDictionariesForNames: pdNames
  | ar existingDict symList sharedPool |
  ar := Array new.
  symList := System myUserProfile symbolList.
  pdNames
    do: [ :poolName | 
      existingDict := symList objectNamed: poolName.
      existingDict
        ifNil: [ 
          | pool |
          pool := SymbolDictionary new.
          pool name: poolName asSymbol.
          ar add: pool ]
        ifNotNil: [ 
          (existingDict isKindOf: SymbolDictionary)
            ifTrue: [ ar add: existingDict ]
            ifFalse: [ 
              sharedPool ifNil: [ sharedPool := symList objectNamed: #'SharedPool' ].
              ((existingDict isKindOf: Class)
                and: [ existingDict isSubclassOf: sharedPool ])
                ifTrue: [ 
                  | cvars pName |
                  ar add: (cvars := existingDict _createClassVarsDict).
                  pName := poolName asSymbol.	"only change dictionary name if needed , to avoid SecurityError"
                  cvars name ~~ pName
                    ifTrue: [ cvars name: pName ] ] ] ] ].
  ^ ar
%

category: 'private'
method: CypressClassDefinition
poolDictionariesString
  ^ self stringForVariables: self poolDictionaryNames
%

category: 'loading'
method: CypressClassDefinition
poolDictionaryList

  ^ self poolDictionariesForNames: self poolDictionaryNames
%

category: 'accessing'
method: CypressClassDefinition
poolDictionaryNames

	^poolDictionaryNames
%

category: 'printString'
method: CypressClassDefinition
printDetailsOn: aStream

	aStream nextPutAll: self name
%

category: 'dependency'
method: CypressClassDefinition
provisions
	"Answer list of global names defined by this definition"

	^{ self name }
%

category: 'loading'
method: CypressClassDefinition
recompileWithSubclassesFrom: oldClass to: newClass symbolList: aSymbolList

	| olds news removedClassVariables removedSharedPools organizer subclasses newSubclass |
	olds := oldClass _classVars ifNil: [#()] ifNotNil: [:vars | vars keys].
	news := newClass _classVars ifNil: [#()] ifNotNil: [:vars | vars keys].
	removedClassVariables := self elementsIn: olds butNotIn: news.
	removedSharedPools := self elementsIn: oldClass sharedPools
				butNotIn: newClass sharedPools.
	self failedCompiledMethods: (newClass
				_copyMethodsAndVariablesFrom: oldClass
				except: 
					{$V.
					removedClassVariables.
					$P.
					removedSharedPools}
				dictionaries: aSymbolList).
	organizer := ClassOrganizer new.
	subclasses := organizer subclassesOf: oldClass.


	"Do this -after- #subclassesOf:, which has the side effect of replacing the new
	  class with the old class in the organizer"
	organizer addClass: newClass.

	"Iterate over all the first-level subclasses of the old class to create new subclasses"
	subclasses do: 
			[:oldSubclass |
			newSubclass := 
					[oldSubclass definition evaluateInContext: nil symbolList: aSymbolList]
							on: Error
							do: [:ex | ex return: nil].
			(newSubclass notNil and: [newSubclass ~~ oldSubclass])
				ifTrue: 
					[self
						classNeedingMigration: newSubclass;
						recompileWithSubclassesFrom: oldSubclass
							to: newSubclass
							symbolList: aSymbolList]]
%

category: 'dependency'
method: CypressClassDefinition
requirements
	"Answer list of global names required by this definition"

  self superclassName = 'nil'
    ifTrue: [ ^ #() ].
  ^{self superclassName}
%

category: 'accessing'
method: CypressClassDefinition
subclassType

	^subclassType
%

category: 'accessing'
method: CypressClassDefinition
superclassName

	^superclassName
%

category: 'loading'
method: CypressClassDefinition
unloadDefinition
	"GemStone could hold multiple definitions of the same class name.
	 Ignore aliased references.
	 Unload only the first one resolved.
	 It is an error if there is not at least one SymbolDictionary holding a
	 class with that name."

	| dictionarySymbolPair |
	dictionarySymbolPair := ((System myUserProfile symbolList
				dictionariesAndSymbolsOf: self actualClass)
					select: [:each | each last = self name asSymbol]) first.
	dictionarySymbolPair first removeKey: dictionarySymbolPair last
%

! Class Implementation for CypressMethodDefinition

! ------------------- Class methods for CypressMethodDefinition

category: 'instance creation'
classmethod: CypressMethodDefinition
className: aName classIsMeta: isMetaclass selector: aSelector category: aCategory source: aSource

	^self new
		className: aName asString
		classIsMeta: isMetaclass
		selector: aSelector asString
		category: aCategory asString
		source: (self normalizeLineEndingsOf: aSource)
%

category: 'instance creation'
classmethod: CypressMethodDefinition
forMethod: aGsNMethod

	| behavior selector |
	behavior := aGsNMethod inClass.
	selector := aGsNMethod selector.
	^self new
		className: behavior theNonMetaClass name asString
		classIsMeta: behavior isMeta
		selector: selector asString
		category: (behavior categoryOfSelector: selector) asString
		source: (self normalizeLineEndingsOf: aGsNMethod sourceString asString)
%

! ------------------- Instance methods for CypressMethodDefinition

category: 'comparing'
method: CypressMethodDefinition
= aDefinition
    ^ super = aDefinition
        and: [ aDefinition source = self source
                and: [ aDefinition category = self category ] ]
%

category: 'loading'
method: CypressMethodDefinition
actualClass

  ^ self theNonMetaClass
    ifNotNil: [:cls |
      self classIsMeta
        ifTrue: [ cls class ]
        ifFalse: [ cls  ] ].
%

category: 'converting'
method: CypressMethodDefinition
asCypressMethodDefinition

	^self
%

category: 'accessing'
method: CypressMethodDefinition
category

	^category
%

category: 'visiting'
method: CypressMethodDefinition
classDefinition: classBlock methodDefinition: methodBlock

	methodBlock value: self
%

category: 'accessing'
method: CypressMethodDefinition
classIsMeta

	^classIsMeta
%

category: 'accessing'
method: CypressMethodDefinition
className

	^className
%

category: 'initialization'
method: CypressMethodDefinition
className: aName classIsMeta: isMetaclass selector: aSelector category: aCategory source: aSource

	className := aName.
	classIsMeta := isMetaclass.
	selector := aSelector.
	category := aCategory.
	source := self normalizeLineEndingsOf: aSource
%

category: 'accessing'
method: CypressMethodDefinition
description
	^ Array	
		with: className
		with: selector
		with: classIsMeta
%

category: 'comparing'
method: CypressMethodDefinition
hash

	| hash |
	hash := classIsMeta asString hash.
	hash := source hash bitOr: hash.
	hash := category hash bitOr: hash.
	hash := className hash bitOr: hash.
	^hash
%

category: 'visiting'
method: CypressMethodDefinition
instanceMethod: instanceBlock classMethod: classBlock

	^(self classIsMeta
		ifTrue: [ classBlock ]
		ifFalse: [ instanceBlock ]) value: self
%

category: 'testing'
method: CypressMethodDefinition
isInitializer
	^ self selector = 'initialize' and: [self classIsMeta]
%

category: 'loading'
method: CypressMethodDefinition
loadMethodDefinition

	self actualClass
		compileMethod: self source
		dictionaries: System myUserProfile symbolList
		category: self category
		environmentId: 0
%

category: 'loading'
method: CypressMethodDefinition
postLoadOver: aDefinition

	super postLoadOver: aDefinition.
	(self isInitializer
		and: [ aDefinition isNil or: [ self source ~= aDefinition source ]]) 
			ifTrue: [ self theNonMetaClass initialize ].
%

category: 'printing'
method: CypressMethodDefinition
printDetailsOn: aStream

	aStream
		nextPutAll: self className;
		nextPutAll: (self classIsMeta ifTrue: [' class'] ifFalse: ['']);
		nextPutAll: '>>';
		nextPutAll: self selector.
%

category: 'dependency'
method: CypressMethodDefinition
requirements
	"Answer list of global names required by this definition"

	^{self className}
%

category: 'accessing'
method: CypressMethodDefinition
selector

	^selector
%

category: 'accessing'
method: CypressMethodDefinition
source

	^source
%

category: 'loading'
method: CypressMethodDefinition
theNonMetaClass

	^self resolveGlobalNamed: self className or: []
%

category: 'loading'
method: CypressMethodDefinition
unloadDefinition

  self actualClass ifNotNil: [:cl | cl removeSelector: self selector asSymbol ].
%

! Class Implementation for CypressDefinitionIndex

! ------------------- Class methods for CypressDefinitionIndex

category: 'instance creation'
classmethod: CypressDefinitionIndex
definitions: aCollection
	^ self new addAll: aCollection
%

! ------------------- Instance methods for CypressDefinitionIndex

category: 'adding'
method: CypressDefinitionIndex
add: aDefinition
	^ self definitionMap at: aDefinition description put: aDefinition
%

category: 'adding'
method: CypressDefinitionIndex
addAll: aCollection
	aCollection do: [:ea | self add: ea]
%

category: 'querying'
method: CypressDefinitionIndex
definitionLike: aDefinition ifPresent: foundBlock ifAbsent: errorBlock
	| definition |
	definition := self definitionMap at: aDefinition description ifAbsent: [].
	^ definition
		ifNil: errorBlock
		ifNotNil: [foundBlock value: definition]
%

category: 'accessing'
method: CypressDefinitionIndex
definitionMap
	definitionMap ifNil: [ definitionMap := Dictionary new ].
	^ definitionMap
%

category: 'accessing'
method: CypressDefinitionIndex
definitions
	^self definitionMap values
%

category: 'removing'
method: CypressDefinitionIndex
remove: aDefinition
	self definitionMap removeKey: aDefinition description ifAbsent: []
%

! Class Implementation for CypressDependencySorter

! ------------------- Instance methods for CypressDependencySorter

category: 'building'
method: CypressDependencySorter
add: aPatchOperation
	| requirements |
	requirements := self unresolvedRequirementsFor: aPatchOperation.
	requirements isEmpty
		ifTrue: [self addToOrder: aPatchOperation]
		ifFalse: [self addRequirements: requirements for: aPatchOperation].
	^ aPatchOperation
%

category: 'building'
method: CypressDependencySorter
addAll: aCollection
	aCollection do: [:aPatchOperation | self add: aPatchOperation ]
%

category: 'private'
method: CypressDependencySorter
addExternalProvisions: aCollection

	(self elementsInBoth: aCollection and: self externalRequirements)
		do: [:globalName | self addProvision: globalName]
%

category: 'private'
method: CypressDependencySorter
addProvision: aGlobalName
	| newlySatisfied |
	self provided add: aGlobalName.
	newlySatisfied := self required removeKey: aGlobalName ifAbsent: [#()].
	self addAll: newlySatisfied.
%

category: 'private'
method: CypressDependencySorter
addRequirement: globalName for: aPatchOperation
	(self itemsRequiring: globalName) add: aPatchOperation
%

category: 'private'
method: CypressDependencySorter
addRequirements: aCollection for: aPatchOperation
	aCollection do: [:globalName | self addRequirement: globalName for: aPatchOperation]
%

category: 'private'
method: CypressDependencySorter
addToOrder: aPatchOperation
	self orderedItems add: aPatchOperation.
	aPatchOperation provisions do: [:globalName | self addProvision: globalName ].
%

category: 'accessing'
method: CypressDependencySorter
externalRequirements

	| unloaded providedByUnloaded |
	unloaded := self itemsWithMissingRequirements.
	providedByUnloaded := (self collection: unloaded
				gather: [:e | e provisions]) asSet.
	^self required keys
		reject: [:globalName | providedByUnloaded includes: globalName]
%

category: 'private'
method: CypressDependencySorter
itemsRequiring: globalName
	^ self required at: globalName ifAbsentPut: [Set new]
%

category: 'accessing'
method: CypressDependencySorter
itemsWithMissingRequirements
	| patchOperations |
	patchOperations := Set new.
	self required values do: [:aSetOfPatchOperations | patchOperations addAll: aSetOfPatchOperations ].
	^ patchOperations
%

category: 'accessing'
method: CypressDependencySorter
orderedItems
	"ordered list of patch operations"

	orderedItems ifNil: [ orderedItems := OrderedCollection new ].
	^orderedItems
%

category: 'accessing'
method: CypressDependencySorter
provided
	"set of global names provided by definitions already loaded"

	provided ifNil: [ provided := Set new ].
	^provided
%

category: 'accessing'
method: CypressDependencySorter
required
	"dictionary of required global name mapped to list of definitions that require the global"

	required ifNil: [ required := Dictionary new ].
	^required
%

category: 'private'
method: CypressDependencySorter
unresolvedRequirementsFor: aPatchOperation
	"Answer a list of global names that are required by <aPatchOperation>, but not 
	 provided by patchOperations that have already been processed"

	^self elementsIn: aPatchOperation requirements butNotIn: self provided
%

! Class Implementation for CypressLoader

! ------------------- Class methods for CypressLoader

category: 'accessing'
classmethod: CypressLoader
defaultSymbolDictionaryName
  "Name of the SymbolDictionary where new classes should be installed"

  ^ (SessionTemps current 
      at: #'Cypress_Loader_Default_Symbol_Dictionary_Name' 
      ifAbsent: [] ) 
        ifNil: [
          System myUserProfile userId = 'SystemUser'
          ifTrue: [ #Globals ]
          ifFalse: [ #'UserGlobals' ] ]
%

category: 'accessing'
classmethod: CypressLoader
defaultSymbolDictionaryName: aSymbol
  SessionTemps current 
      at: #'Cypress_Loader_Default_Symbol_Dictionary_Name'
      put: aSymbol
%

category: 'unloading'
classmethod: CypressLoader
unloadSnapshot: aSnapshot
  ^ self new
    unloadSnapshot: aSnapshot;
    load
%

category: 'loading'
classmethod: CypressLoader
updatePackage: aPackage defaultSymbolDictionaryName: defaultSymbolDictionaryName withSnapshot: aSnapshot
  "Answer the loader used to apply the update."

  ^ self new
    defaultSymbolDictionaryName: defaultSymbolDictionaryName;
    updatePackage: aPackage withSnapshot: aSnapshot;
    load
%

category: 'loading'
classmethod: CypressLoader
updatePackage: aPackage withSnapshot: aSnapshot
  "Answer the loader used to apply the update."

  ^ self
    updatePackage: aPackage
    defaultSymbolDictionaryName: nil
    withSnapshot: aSnapshot
%

! ------------------- Instance methods for CypressLoader

category: 'updating'
method: CypressLoader
addFailedPatchOperation: aPatchOperation

	self errors add: aPatchOperation
%

category: 'accessing'
method: CypressLoader
additions

	additions ifNil: [ additions := OrderedCollection new ].
	^additions
%

category: 'loading'
method: CypressLoader
analyze
  self
    analyzeRemovalOfAdditions;
    analyzeAdditions;
    analyzeRemovals
%

category: 'loading'
method: CypressLoader
analyzeAdditions

	| sorter |
	sorter := CypressDependencySorter new 
		addAll: self additions;
		addExternalProvisions: self provisions;
		yourself.
	additions := sorter orderedItems.
	requirements := sorter externalRequirements.
	unloadable := sorter required.
%

category: 'loading'
method: CypressLoader
analyzeRemovalOfAdditions
  "if there is an addition and a removal for the same definition, the addition wins ... needed when loading multiple packages and a defintion has been moved from one package to another --- see atomic loads for Metacello"

  | index |
  index := CypressDefinitionIndex
    definitions: (self additions collect: [ :each | each definition ]).
  self removals
    removeAllSuchThat: [ :removal | 
      (index
        definitionLike: removal definition
        ifPresent: [ :additionDefinition | self obsoletions at: additionDefinition description put: removal definition ]
        ifAbsent: [  ]) notNil ]
%

category: 'loading'
method: CypressLoader
analyzeRemovals

	| sorter |
	sorter := CypressDependencySorter new 
		addAll: self removals;
		yourself.
	removals := sorter orderedItems reverse.
%

category: 'applying'
method: CypressLoader
applyAddition: aCypressPatchOperation

	self additions add: aCypressPatchOperation
%

category: 'applying'
method: CypressLoader
applyModification: aCypressPatchOperation
  self additions add: aCypressPatchOperation.
  self obsoletions
    at: aCypressPatchOperation modification description
    put: aCypressPatchOperation obsoletion
%

category: 'applying'
method: CypressLoader
applyRemoval: aCypressPatchOperation

	self removals add: aCypressPatchOperation
%

category: 'loading'
method: CypressLoader
attemptInitialLoad

	self
		resetErrors;
		notifyOnFailedPatchOperations;
		loadAdditions: self additions;
		unloadRemovals: self removals.
%

category: 'accessing'
method: CypressLoader
defaultSymbolDictionaryName
  ^ defaultSymbolDictionaryName ifNil: [ self class defaultSymbolDictionaryName ]
%

category: 'accessing'
method: CypressLoader
defaultSymbolDictionaryName: aSymbol
  defaultSymbolDictionaryName := aSymbol
%

category: 'loading'
method: CypressLoader
errorOnFailedPatchOperations

	exceptionClass := CypressLoaderError.
%

category: 'accessing'
method: CypressLoader
errors
	errors ifNil: [self resetErrors].
	^errors
%

category: 'loading'
method: CypressLoader
handleCompileError: aCompileError from: aPatchOperation

	| undefinedSymbolErrors otherErrors |
	undefinedSymbolErrors := aCompileError errorDetails
				select: [:each | each first = 1031].
	otherErrors := aCompileError errorDetails
				reject: [:each | each first = 1031].
	undefinedSymbolErrors do: [:each | self requirements add: each last].
	aCompileError pass
%

category: 'loading'
method: CypressLoader
handlePatchOperation: aPatchOperation failure: anException
	"Signal the loader exception appropriate to the current phase.
	 Note that a handler may suppress the #addFailedPatchOperation: by
	 sending #return or #return: to the resignaled exception. Otherwise,
	 resumption from a resumable resignalled exception will continue through
	 this method."

	(exceptionClass patchOperation: aPatchOperation exception: anException) signal.
	self addFailedPatchOperation: aPatchOperation.
%

category: 'loading'
method: CypressLoader
load

	self
		analyze;
		reportUnloadableDefinitions;
		attemptInitialLoad;
		retryFailedLoads;
		postLoad.
%

category: 'loading'
method: CypressLoader
loadAdditions: somePatchOperations
	"Load class definitions first, then method definitions."

	somePatchOperations
		do: [:each | self loadClassDefinition: each];
		do: [:each | self loadMethodDefinition: each].
%

category: 'operations'
method: CypressLoader
loadClassDefinition: aPatchOperation

	[ aPatchOperation loadClassDefinition: self defaultSymbolDictionaryName ]
		on: Error
		do: [:ex | self handlePatchOperation: aPatchOperation failure: ex].
%

category: 'operations'
method: CypressLoader
loadMethodDefinition: aPatchOperation

	
	[[aPatchOperation loadMethodDefinition]
		on: CompileError
		do: [:ex | self handleCompileError: ex from: aPatchOperation]]
			on: Error
			do: [:ex | self handlePatchOperation: aPatchOperation failure: ex]
%

category: 'accessing'
method: CypressLoader
methodAdditions

	^#()
%

category: 'loading'
method: CypressLoader
notifyOnFailedPatchOperations

	exceptionClass := CypressLoaderErrorNotification.
%

category: 'accessing'
method: CypressLoader
obsoletions
  obsoletions ifNil: [ obsoletions := Dictionary new ].
  ^ obsoletions
%

category: 'loading'
method: CypressLoader
postLoad
	"This is where the obsoletion is taken into account ..."

	self additions do: [:each | self postLoad: each].
%

category: 'operations'
method: CypressLoader
postLoad: aPatchOperation

	[aPatchOperation postLoadDefinition]
		on: Error
		do: [:ex | self handlePatchOperation: aPatchOperation failure: ex].
%

category: 'accessing'
method: CypressLoader
provisions
	^ provisions ifNil: [provisions := (self allClasses collect: [:cl | cl name asString]) asSet ]
%

category: 'accessing'
method: CypressLoader
removals

	removals ifNil: [ removals := OrderedCollection new ].
	^removals
%

category: 'loading'
method: CypressLoader
reportUnloadableDefinitions

	self unloadable isEmpty ifTrue: [^self].
	(CypressLoaderMissingClasses missingRequirementsMap: unloadable) signal.
%

category: 'accessing'
method: CypressLoader
requirements

	^requirements
%

category: 'loading'
method: CypressLoader
resetErrors

	errors := OrderedCollection new.
%

category: 'loading'
method: CypressLoader
retryFailedLoads
	"In case any of the failed loads were resolved by subsequent
	 patch operations after the initial attempt or by editting of the
	 failed patch operations by exception handling during the notification
	 phase (initial attempt)."

	| failed |
	failed := self errors.
	self
		resetErrors;
		errorOnFailedPatchOperations;
		loadAdditions: (self elementsInBoth: self additions and: failed);
		unloadRemovals: (self elementsInBoth: self removals and: failed)
%

category: 'accessing'
method: CypressLoader
unloadable

	unloadable ifNil: [ unloadable := OrderedCollection new ].
	^unloadable
%

category: 'operations'
method: CypressLoader
unloadDefinition: aPatchOperation

	[aPatchOperation unloadDefinition]
		on: Error
		do: [:ex | self handlePatchOperation: aPatchOperation failure: ex].
%

category: 'loading'
method: CypressLoader
unloadRemovals: somePatchOperations
	"Removals need to be done after adding classes and methods."

	somePatchOperations
		do: [:each | self unloadDefinition: each].
%

category: 'unloading'
method: CypressLoader
unloadSnapshot: aSnapshot
  |  patch |
  patch := CypressSnapshot empty patchRelativeToBase: aSnapshot.
  patch applyTo: self
%

category: 'loading'
method: CypressLoader
updatePackage: aPackage withSnapshot: aSnapshot

	| patch snapshot |
	snapshot := aPackage snapshot.
	patch := aSnapshot patchRelativeToBase: snapshot.
	patch applyTo: self.
	snapshot definitions do: [:ea | self provisions addAll: ea provisions]
%

! Class Implementation for CypressPackageDefinition

! ------------------- Class methods for CypressPackageDefinition

category: 'instance creation'
classmethod: CypressPackageDefinition
named: aString

	^self new
		name: aString;
		yourself.
%

! ------------------- Instance methods for CypressPackageDefinition

category: 'comparing'
method: CypressPackageDefinition
= other
	^ other species = self species and: [other name sameAs: name]
%

category: 'snapshotting'
method: CypressPackageDefinition
addClass: aClass toDefinitions: definitions

	definitions add: (CypressClassDefinition forClass: aClass)
%

category: 'snapshotting'
method: CypressPackageDefinition
addExtensionMethodsFromClass: aClass toMap: classMap

	| defs map |
	defs := classMap at: aClass theNonMetaClass
				ifAbsent: [OrderedCollection new].
	map := Dictionary new.
	aClass categorysDo: 
			[:category :selectors |
			(category asLowercase
				indexOfSubCollection: '*' , self basePackageName asLowercase) = 1
				ifTrue: [map at: category put: selectors asSortedCollection]].
	map keys asSortedCollection do: 
			[:category |
			(map at: category) do: 
					[:selector |
					defs add: (CypressMethodDefinition
								forMethod: (aClass compiledMethodAt: selector))]].
	defs notEmpty ifTrue: [classMap at: aClass theNonMetaClass put: defs]
%

category: 'snapshotting'
method: CypressPackageDefinition
addMethodsFromClass: aClass toDefinitions: definitions
	"Add only those methods which are not extensions from other packages."

	(((aClass methodDictForEnv: 0)
		reject: [:each | (each inClass categoryOfSelector: each selector) first = $*])
			asSortedCollection: [:a :b | a selector <= b selector])
			do: [:method | definitions add: (CypressMethodDefinition forMethod: method)]
%

category: 'accessing'
method: CypressPackageDefinition
basePackageName
  "package name may have a platform/branch extension, when comparing against category/protocol names, extension is ignored"

  | nm index |
  nm := self name.
  index := nm indexOfSubCollection: '.' startingAt: 1.
  index = 0
    ifTrue: [ ^ nm ].
  ^ nm copyFrom: 1 to: index - 1
%

category: 'accessing'
method: CypressPackageDefinition
classes
  ^ self classesInPackageNamed: self basePackageName
%

category: 'comparing'
method: CypressPackageDefinition
hash
  ^ name hash
%

category: 'accessing'
method: CypressPackageDefinition
name
	^ name
%

category: 'accessing'
method: CypressPackageDefinition
name: aString
	name := aString
%

category: 'printing'
method: CypressPackageDefinition
printDetailsOn: aStream

	aStream nextPutAll: name
%

category: 'snapshotting'
method: CypressPackageDefinition
snapshot

	| classDefinitions methodDefinitions classMap |
	classDefinitions := OrderedCollection new.
	methodDefinitions := OrderedCollection new.
	(self determineClassHierarchicalOrder: self classes) do: 
			[:cls |
			self
				addClass: cls toDefinitions: classDefinitions;
				addMethodsFromClass: cls toDefinitions: methodDefinitions;
				addMethodsFromClass: cls class toDefinitions: methodDefinitions].
	classMap := Dictionary new.
	self allClasses do: 
			[:each |
			self
				addExtensionMethodsFromClass: each toMap: classMap;
				addExtensionMethodsFromClass: each class toMap: classMap].
	(self determineClassHierarchicalOrder: classMap keys)
		do: [:aClass | methodDefinitions addAll: (classMap at: aClass)].
	^CypressSnapshot definitions: classDefinitions, methodDefinitions
%

! Class Implementation for CypressPatch

! ------------------- Class methods for CypressPatch

category: 'instance creation'
classmethod: CypressPatch
fromBase: baseSnapshot toTarget: targetSnapshot
	^ (self new)
		fromBase: baseSnapshot
		toTarget: targetSnapshot
%

! ------------------- Instance methods for CypressPatch

category: 'applying'
method: CypressPatch
applyTo: aCypressLoader
	operations do: [:ea | ea applyTo: aCypressLoader].
%

category: 'initialization'
method: CypressPatch
fromBase: baseSnapshot toTarget: targetSnapshot
	| base target |	
	operations := OrderedCollection new.
	base := CypressDefinitionIndex definitions: baseSnapshot definitions.
	target := CypressDefinitionIndex definitions: targetSnapshot definitions.
	
	target definitions do:
		[:t |
		base
			definitionLike: t
			ifPresent: [:b | (b isSameRevisionAs: t) ifFalse: [operations add: (CypressModification of: b to: t)]]
			ifAbsent: [operations add: (CypressAddition of: t)]].
		
	base definitions do:
		[:b |
		target
			definitionLike: b
			ifPresent: [:t | ]
			ifAbsent: [operations add: (CypressRemoval of: b)]]
%

category: 'accessing'
method: CypressPatch
operations

	^operations
%

! Class Implementation for CypressPatchOperation

! ------------------- Instance methods for CypressPatchOperation

category: 'comparing'
method: CypressPatchOperation
= aPatchOperation
	^aPatchOperation isKindOf: self class
%

category: 'applying'
method: CypressPatchOperation
applyTo: aCypressLoader

	self subclassResponsibility: #applyTo:
%

category: 'accessing'
method: CypressPatchOperation
definition
  "answer the primary definition associated with the operation"

  self subclassResponsibility: #'definition'
%

category: 'accessing'
method: CypressPatchOperation
description

	self subclassResponsibility: #description
%

category: 'comparing'
method: CypressPatchOperation
hash
    ^ self description hash
%

category: 'loading'
method: CypressPatchOperation
loadClassDefinition
  self loadClassDefinition: self defaultSymbolDictionaryName
%

category: 'loading'
method: CypressPatchOperation
loadClassDefinition: aDefaultSymbolDictionaryName
  self subclassResponsibility: #'loadClassDefinition'
%

category: 'loading'
method: CypressPatchOperation
loadMethodDefinition

	self subclassResponsibility: #loadMethodDefinition
%

category: 'loading'
method: CypressPatchOperation
postLoadDefinition

	self subclassResponsibility: #postLoadDefinition
%

category: 'printing'
method: CypressPatchOperation
printDetailsOn: aStream

	aStream nextPutAll: self description.
%

category: 'dependency'
method: CypressPatchOperation
provisions
	"Answer list of global names defined by this definition"

	self subclassResponsibility: #provisions
%

category: 'dependency'
method: CypressPatchOperation
requirements
	"Answer list of global names required by this definition"

	self subclassResponsibility: #requirements
%

category: 'loading'
method: CypressPatchOperation
unloadDefinition

	CypressError signal: 'inappropriate to send #unloadDefinition to an addition or modification operation'
%

! Class Implementation for CypressAddition

! ------------------- Class methods for CypressAddition

category: 'instance creation'
classmethod: CypressAddition
of: aDefinition
	^ self new definition: aDefinition
%

! ------------------- Instance methods for CypressAddition

category: 'comparing'
method: CypressAddition
= aPatchOperation
	^(super = aPatchOperation) and: [self definition = aPatchOperation definition]
%

category: 'applying'
method: CypressAddition
applyTo: aCypressLoader

	aCypressLoader applyAddition: self
%

category: 'accessing'
method: CypressAddition
definition

	^definition
%

category: 'initialization'
method: CypressAddition
definition: aDefinition

	definition := aDefinition
%

category: 'accessing'
method: CypressAddition
description
    ^ 'add: ' , self definition printString
%

category: 'comparing'
method: CypressAddition
hash
  ^ super hash bitXor: definition hash
%

category: 'loading'
method: CypressAddition
loadClassDefinition: aDefaultSymbolDictionaryName
  self definition loadClassDefinition: aDefaultSymbolDictionaryName
%

category: 'loading'
method: CypressAddition
loadMethodDefinition
  self definition loadMethodDefinition
%

category: 'loading'
method: CypressAddition
postLoadDefinition
	self definition postLoadOver: nil
%

category: 'dependency'
method: CypressAddition
provisions
	"Answer list of global names defined by this definition"

	^self definition provisions
%

category: 'dependency'
method: CypressAddition
requirements
	"Answer list of global names required by this definition"

	^self definition requirements
%

! Class Implementation for CypressModification

! ------------------- Class methods for CypressModification

category: 'instance creation'
classmethod: CypressModification
of: base to: target
	^ self new base: base target: target
%

! ------------------- Instance methods for CypressModification

category: 'initialization'
method: CypressModification
= aPatchOperation
	^(super = aPatchOperation) and: [self obsoletion = aPatchOperation obsoletion and: [ self modification = aPatchOperation modification]]
%

category: 'applying'
method: CypressModification
applyTo: aCypressLoader

	aCypressLoader applyModification: self
%

category: 'initialization'
method: CypressModification
base: base target: target

	obsoletion := base.
	modification := target.
%

category: 'accessing'
method: CypressModification
definition
  "answer the primary definition associated with the operation"

  ^ self modification
%

category: 'accessing'
method: CypressModification
description
    ^ 'modify from: ' , self obsoletion printString , ' to: ' , self modification printString
%

category: 'comparing'
method: CypressModification
hash
  ^ (super hash bitXor: modification hash) bitXor: obsoletion hash
%

category: 'loading'
method: CypressModification
loadClassDefinition: aDefaultSymbolDictionaryName
  self modification loadClassDefinition: aDefaultSymbolDictionaryName
%

category: 'loading'
method: CypressModification
loadMethodDefinition

	self modification loadMethodDefinition.
%

category: 'accessing'
method: CypressModification
modification

	^modification
%

category: 'accessing'
method: CypressModification
obsoletion

	^obsoletion
%

category: 'loading'
method: CypressModification
postLoadDefinition
	self modification postLoadOver: self obsoletion
%

category: 'dependency'
method: CypressModification
provisions
	"Answer list of global names defined by this definition"

	^self modification provisions
%

category: 'dependency'
method: CypressModification
requirements
	"Answer list of global names required by this definition"

	^self modification requirements
%

! Class Implementation for CypressRemoval

! ------------------- Class methods for CypressRemoval

category: 'instance creation'
classmethod: CypressRemoval
of: aDefinition
	^ self new definition: aDefinition
%

! ------------------- Instance methods for CypressRemoval

category: 'comparing'
method: CypressRemoval
= aPatchOperation
	^(super = aPatchOperation) and: [self definition = aPatchOperation definition]
%

category: 'applying'
method: CypressRemoval
applyTo: aCypressLoader

	aCypressLoader applyRemoval: self
%

category: 'accessing'
method: CypressRemoval
definition

	^definition
%

category: 'initialization'
method: CypressRemoval
definition: aDefinition

	definition := aDefinition
%

category: 'accessing'
method: CypressRemoval
description

	^'remove: ', self definition printString
%

category: 'comparing'
method: CypressRemoval
hash
  ^ super hash bitXor: definition hash
%

category: 'loading'
method: CypressRemoval
loadClassDefinition: aDefaultSymbolDictionaryName
  CypressError
    signal: 'inappropriate to send #loadClassDefinition to a removal operation'
%

category: 'loading'
method: CypressRemoval
loadMethodDefinition
	
	CypressError signal: 'inappropriate to send #loadMethodDefinition to a removal operation'
%

category: 'loading'
method: CypressRemoval
postLoadDefinition
	
	CypressError signal: 'inappropriate to send #postLoadDefinition to a removal operation'
%

category: 'dependency'
method: CypressRemoval
provisions
	"Answer list of global names defined by this definition"

	^#()
%

category: 'dependency'
method: CypressRemoval
requirements
	"Answer list of global names required by this definition"

	^#()
%

category: 'loading'
method: CypressRemoval
unloadDefinition

	self definition unloadDefinition.
%

! Class Implementation for CypressSnapshot

! ------------------- Class methods for CypressSnapshot

category: 'instance creation'
classmethod: CypressSnapshot
definitions: aDefinitions

	^(self new) definitions: aDefinitions
%

category: 'instance creation'
classmethod: CypressSnapshot
empty

  ^self definitions: #()
%

! ------------------- Instance methods for CypressSnapshot

category: 'comparing'
method: CypressSnapshot
= other
	^ definitions asArray = other definitions asArray
%

category: 'enumerating'
method: CypressSnapshot
classDefinitions: classBlock methodDefinitions: methodBlock

	self definitions do: [:definition |
		definition classDefinition: classBlock methodDefinition: methodBlock]
%

category: 'accessing'
method: CypressSnapshot
definitions

	^definitions
%

category: 'accessing'
method: CypressSnapshot
definitions: aDefinitions

	definitions := aDefinitions
%

category: 'comparing'
method: CypressSnapshot
hash
  ^ definitions asArray hash
%

category: 'patching'
method: CypressSnapshot
patchRelativeToBase: aSnapshot
	^ CypressPatch fromBase: aSnapshot toTarget: self
%

category: 'unloading'
method: CypressSnapshot
unload

  ^CypressLoader unloadSnapshot: self
%

category: 'loading'
method: CypressSnapshot
updatePackage: aPackage
  "Answer the loader used to apply the update."

  ^ self updatePackage: aPackage defaultSymbolDictionaryName: nil
%

category: 'loading'
method: CypressSnapshot
updatePackage: aPackage defaultSymbolDictionaryName: defaultSymbolDictionaryName
  "Answer the loader used to apply the update."

  ^ CypressLoader
    updatePackage: aPackage
    defaultSymbolDictionaryName: defaultSymbolDictionaryName
    withSnapshot: self
%

! Class Extensions

! Class initializers 

doit
true.
%



! End of Package: Cypress-Definitions

set compile_env: 0
