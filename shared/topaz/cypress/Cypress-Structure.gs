! Package: Cypress-Structure


! Remove existing behavior from package Cypress-Structure
!!!! This can be cleaned up when some package functionality is moved to the base system.

doit
| packageName |
packageName := 'Cypress-Structure'.
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
(Error
	subclass: 'CypressJsonError'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-Structure';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'CypressJsonParser'
	instVarNames: #( stream )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-Structure';
		comment: '';
		immediateInvariant.
true.
%

doit
(Object
	subclass: 'GsGeneralDependencySorter'
	instVarNames: #( candidates dependsOnConverter dependentConverter individualDependencyMap dependencyGraphs candidateAliasMap )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-Structure';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressObject
	subclass: 'CypressStructure'
	instVarNames: #( name properties packageStructure )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-Structure';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressStructure
	subclass: 'CypressClassStructure'
	instVarNames: #( instanceMethods classMethods comment isClassExtension )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-Structure';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressStructure
	subclass: 'CypressMethodStructure'
	instVarNames: #( source isMetaclass classStructure )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-Structure';
		comment: '';
		immediateInvariant.
true.
%

doit
(CypressStructure
	subclass: 'CypressPackageStructure'
	instVarNames: #( classes extensions )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-Structure';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for CypressJsonError

! Class Implementation for CypressJsonParser

! ------------------- Class methods for CypressJsonParser

category: 'instance creation'
classmethod: CypressJsonParser
new

	CypressJsonError signal: 'Instantiate the parser with a stream.'
%

category: 'instance creation'
classmethod: CypressJsonParser
on: aStream
	^ self basicNew initializeOn: aStream
%

category: 'accessing'
classmethod: CypressJsonParser
parse: aString
	^ self parseStream: aString readStream
%

category: 'accessing'
classmethod: CypressJsonParser
parseStream: aStream
	^ (self on: aStream) parse
%

! ------------------- Instance methods for CypressJsonParser

category: 'adding'
method: CypressJsonParser
addProperty: anAssociation to: anObject
	"Add the property anAssociation described with key and value to anObject. Subclasses might want to refine this implementation."
	
	^ anObject 
		add: anAssociation;
		yourself
%

category: 'adding'
method: CypressJsonParser
addValue: anObject to: aCollection
	"Add anObject to aCollection. Subclasses might want to refine this implementation."

	^ aCollection copyWith: anObject
%

category: 'creating'
method: CypressJsonParser
createArray
	"Create an empty collection. Subclasses might want to refine this implementation."

	^ Array new
%

category: 'creating'
method: CypressJsonParser
createFalse
	"Create the false literal. Subclasses might want to refine this implementation."
	
	^ false
%

category: 'creating'
method: CypressJsonParser
createNull
	"Create the null literal. Subclasses might want to refine this implementation."

	^ nil
%

category: 'creating'
method: CypressJsonParser
createObject
	"Create an empty object. Subclasses might want to refine this implementation."
	
	^ Dictionary new
%

category: 'creating'
method: CypressJsonParser
createProperty: aKey with: aValue
	"Create an empty attribute value pair. Subclasses might want to refine this implementation."
	
	^ aKey -> aValue
%

category: 'creating'
method: CypressJsonParser
createString: aString
	"Create a string literal. Subclasses might want to refine this implementation."

	^ aString
%

category: 'creating'
method: CypressJsonParser
createTrue
	"Create the true literal. Subclasses might want to refine this implementation."

	^ true
%

category: 'private'
method: CypressJsonParser
expect: aString
	"Expects aString and consume input, throw an error otherwise."

	^(self match: aString)
		ifFalse: [CypressJsonError signal: aString , ' expected']
%

category: 'initialization'
method: CypressJsonParser
initializeOn: aStream
	stream := aStream
%

category: 'private'
method: CypressJsonParser
match: aString
	"Tries to match aString, consume input and answer true if successful."
	
	| position |
	position := stream position.
	aString do: [ :each |
		(stream atEnd or: [ stream next ~= each ]) ifTrue: [ 
			stream position: position.
			^ false ] ].
	self whitespace.
	^ true
%

category: 'parsing'
method: CypressJsonParser
parse

	| result |
	result := self
				whitespace;
				parseValue.
	stream atEnd ifFalse: [CypressJsonError signal: 'end of input expected'].
	^result
%

category: 'parsing'
method: CypressJsonParser
parseArray

	| result |
	self expect: '['.
	result := self createArray.
	(self match: ']') ifTrue: [^result].
	[stream atEnd] whileFalse: 
			[result := self addValue: self parseValue to: result.
			(self match: ']') ifTrue: [^result].
			self expect: ','].
	CypressJsonError signal: 'end of array expected'
%

category: 'parsing-internal'
method: CypressJsonParser
parseCharacter
	| char |
	(char := stream next) = $\ 
		ifFalse: [ ^ char ].
	(char := stream next) = $" 
		ifTrue: [ ^ char ].
	char = $\
		ifTrue: [ ^ char ].
	char = $/
		ifTrue: [ ^ char ].
	char = $b
		ifTrue: [ ^ Character backspace ].
	char = $f
		ifTrue: [ ^ Character newPage ].
	char = $n
		ifTrue: [ ^ Character lf ].
	char = $r
		ifTrue: [ ^ Character cr ].
	char = $t
		ifTrue: [ ^ Character tab ].
	char = $u
		ifTrue: [ ^ self parseCharacterHex ].
	CypressJsonError signal: 'invalid escape character \' , (String with: char)
%

category: 'parsing-internal'
method: CypressJsonParser
parseCharacterHex
  | value |
  value := self parseCharacterHexDigit.
  3 timesRepeat: [ value := (value bitShift: 4) + self parseCharacterHexDigit ].
  ^ Character codePoint: value
%

category: 'parsing-internal'
method: CypressJsonParser
parseCharacterHexDigit
    | digit |
    stream atEnd
        ifFalse: [ 
            digit := stream next codePoint.
            (digit between: 48 and: 57)
                ifTrue: [ ^ digit - 48 ].	"$0"	"$9"
            (digit between: 65 and: 70)
                ifTrue: [ ^ digit - 55 ].	"$A"	"$F"
            (digit between: 97 and: 102)
                ifTrue: [ ^ digit - 87 ]	"$a"	"$f" ].
    CypressJsonError signal: 'hex-digit expected'
%

category: 'parsing-internal'
method: CypressJsonParser
parseNumber
	| negated number |
	negated := stream peek = $-.
	negated ifTrue: [ stream next ].
	number := self parseNumberInteger.
	(stream peek = $.) ifTrue: [
		stream next. 
		number := number + self parseNumberFraction ].
	(stream peek = $e or: [ stream peek = $E ]) ifTrue: [
		stream next.
		number := number * self parseNumberExponent ].
	negated ifTrue: [ number := number negated ].
	self whitespace.
	^ number
%

category: 'parsing-internal'
method: CypressJsonParser
parseNumberExponent
    | number negated |
    number := 0.
    negated := stream peek = $-.
    (negated or: [ stream peek = $+ ])
        ifTrue: [ stream next ].
    [ stream atEnd not and: [ stream peek isDigit ] ] whileTrue: [ number := 10 * number + (stream next codePoint - 48) ].
    negated
        ifTrue: [ number := number negated ].
    ^ 10 raisedTo: number
%

category: 'parsing-internal'
method: CypressJsonParser
parseNumberFraction
    | number power |
    number := 0.
    power := 1.0.
    [ stream atEnd not and: [ stream peek isDigit ] ]
        whileTrue: [ 
            number := 10 * number + (stream next codePoint - 48).
            power := power * 10.0 ].
    ^ number / power
%

category: 'parsing-internal'
method: CypressJsonParser
parseNumberInteger
    | number |
    number := 0.
    [ stream atEnd not and: [ stream peek isDigit ] ] whileTrue: [ number := 10 * number + (stream next codePoint - 48) ].
    ^ number
%

category: 'parsing'
method: CypressJsonParser
parseObject

	| result |
	self expect: '{'.
	result := self createObject.
	(self match: '}') ifTrue: [^result].
	[stream atEnd] whileFalse: 
			[result := self addProperty: self parseProperty to: result.
			(self match: '}') ifTrue: [^result].
			self expect: ','].
	CypressJsonError signal: 'end of object expected'
%

category: 'parsing-internal'
method: CypressJsonParser
parseProperty
	| name value |
	name := self parseString.
	self expect: ':'.
	value := self parseValue.
	^ self createProperty: name with: value.
%

category: 'parsing-internal'
method: CypressJsonParser
parseString
	| result |
	self expect: '"'.
	result := WriteStreamPortable on: String new.
	[ stream atEnd or: [ stream peek = $" ] ] 
		whileFalse: [ result nextPut: self parseCharacter ].
	^ self expect: '"'; createString: result contents
%

category: 'parsing'
method: CypressJsonParser
parseValue
	| char |
	stream atEnd ifFalse: [ 
		char := stream peek.
		char = ${
			ifTrue: [ ^ self parseObject ].
		char = $[
			ifTrue: [ ^ self parseArray ].
		char = $"
			ifTrue: [ ^ self parseString ].
		(char = $- or: [ char between: $0 and: $9 ])
			ifTrue: [ ^ self parseNumber ].
		(self match: 'true')
			ifTrue: [ ^ self createTrue ].
		(self match: 'false')
			ifTrue: [ ^ self createFalse ].
		(self match: 'null')
			ifTrue: [ ^ self createNull ] ].
	CypressJsonError signal: 'invalid input'
%

category: 'private'
method: CypressJsonParser
whitespace
	"Strip whitespaces from the input stream."

	[ stream atEnd not and: [ stream peek isSeparator ] ]
		whileTrue: [ stream next ]
%

! Class Implementation for GsGeneralDependencySorter

! ------------------- Class methods for GsGeneralDependencySorter

category: 'instance creation'
classmethod: GsGeneralDependencySorter
on: someCandidates dependsOn: aOneArgBlock dependent: anotherOneArgBlock
	"Create an instance of the receiver capable for sorting the dependencies of someCandidates.
	 aOneArgBlock is used to evaluate the key of the object depended on for a candidate.
	 anotherOneArgBlock is used to evaluate the key of the candidate itself."

	^self new
		initializeOn: someCandidates dependsOn: aOneArgBlock dependent: anotherOneArgBlock;
		yourself.
%

! ------------------- Instance methods for GsGeneralDependencySorter

category: 'sorting - private'
method: GsGeneralDependencySorter
determineGraphRoots

	^dependencyGraphs
		selectAssociations: [:each | (candidateAliasMap includesKey: each key) not]
%

category: 'initializing - private'
method: GsGeneralDependencySorter
initializeOn: someCandidates dependsOn: aOneArgBlock dependent: anotherOneArgBlock

	candidates := someCandidates.
	dependsOnConverter := aOneArgBlock.
	dependentConverter := anotherOneArgBlock.
	individualDependencyMap := Dictionary new.
	dependencyGraphs := Dictionary new.
	candidateAliasMap := Dictionary new
%

category: 'sorting'
method: GsGeneralDependencySorter
inOrder

	| sorted |
	sorted := OrderedCollection new.
	self mapCandidatesIntoGraphs.
	self determineGraphRoots
		do: [:each | self transcribeGraph: each into: sorted].
	^sorted.
%

category: 'sorting - private'
method: GsGeneralDependencySorter
mapCandidatesIntoGraphs

	| dependsOnKey dependentKey |
	candidates do: 
			[:each |
			| individualDependency |
			dependsOnKey := dependsOnConverter value: each.
			dependentKey := dependentConverter value: each.
			candidateAliasMap at: dependentKey put: each.
			individualDependencyMap at: dependsOnKey ifAbsentPut: [Dictionary new].
			individualDependencyMap at: dependentKey ifAbsentPut: [Dictionary new].
			individualDependency := individualDependencyMap
						associationAt: dependsOnKey.
			(dependencyGraphs includesKey: dependsOnKey)
				ifFalse: [dependencyGraphs add: individualDependency].
			individualDependency value
				add: (individualDependencyMap associationAt: dependentKey)]
%

category: 'sorting - private'
method: GsGeneralDependencySorter
transcribeGraph: subtree into: sorted
  (subtree keys asSortedCollection: [ :a :b | a <= b ])
    do: [ :name | 
      | subsubtree |
      subsubtree := subtree at: name.
      sorted add: (candidateAliasMap at: name).
      self transcribeGraph: subsubtree into: sorted ]
%

! Class Implementation for CypressStructure

! ------------------- Class methods for CypressStructure

category: 'instance creation'
classmethod: CypressStructure
named: aString

	^(self new)
		name: aString;
		yourself
%

! ------------------- Instance methods for CypressStructure

category: 'accessing'
method: CypressStructure
name

	^name
%

category: 'accessing'
method: CypressStructure
name: aString 

	name := aString
%

category: 'accessing'
method: CypressStructure
packageStructure
	^packageStructure
%

category: 'accessing'
method: CypressStructure
packageStructure: aCypressPackageStructure
	packageStructure := aCypressPackageStructure
%

category: 'printing'
method: CypressStructure
printDetailsOn: aStream

	aStream nextPutAll: self name.
%

category: 'accessing'
method: CypressStructure
properties

	properties ifNil: [ properties := Dictionary new ].
	^properties
%

category: 'accessing'
method: CypressStructure
properties: aDictionary

	properties := aDictionary
%

! Class Implementation for CypressClassStructure

! ------------------- Class methods for CypressClassStructure

category: 'instance creation'
classmethod: CypressClassStructure
fromClassDefinition: classDefinition

	^self new
		fromClassDefinition: classDefinition;
		yourself
%

! ------------------- Instance methods for CypressClassStructure

category: 'converting'
method: CypressClassStructure
asCypressClassDefinition

	self isClassExtension ifTrue: [^CypressError signal: 'Extensions cannot have class definitions'].
	^CypressClassDefinition
		name: self className
		superclassName: self superclassName
		category: self category
		instVarNames: self instanceVariableNames
		classInstVarNames: self classInstanceVariableNames
		classVarNames: self classVariableNames
		poolDictionaryNames: self poolDictionaryNames
		comment: self comment
		subclassType: self subclassType
%

category: 'accessing'
method: CypressClassStructure
category

	^self properties
		at: 'category'
		ifAbsent: [self packageStructure packageName]
%

category: 'accessing'
method: CypressClassStructure
category: aString

	^self properties at: 'category' put: aString
%

category: 'accessing'
method: CypressClassStructure
classInstanceVariableNames

	^self properties at: 'classinstvars' ifAbsent: [#()]
%

category: 'accessing'
method: CypressClassStructure
classInstanceVariableNames: someStrings

	^self properties at: 'classinstvars' put: someStrings
%

category: 'converting'
method: CypressClassStructure
classInstanceVariablesString
  ^ self stringForVariables: self classInstanceVariableNames
%

category: 'querying'
method: CypressClassStructure
classMethodNamed: methodName

	^self classMethods
		at: methodName
		ifAbsentPut: [CypressMethodStructure named: methodName]
%

category: 'accessing'
method: CypressClassStructure
classMethods

	classMethods ifNil: [ classMethods := Dictionary new ].
	^classMethods
%

category: 'accessing'
method: CypressClassStructure
className

	^self name
%

category: 'accessing'
method: CypressClassStructure
classVariableNames

	^self properties at: 'classvars' ifAbsent: [#()]
%

category: 'accessing'
method: CypressClassStructure
classVariableNames: someStrings

	^self properties at: 'classvars' put: someStrings
%

category: 'converting'
method: CypressClassStructure
classVariablesString
  ^ self stringForVariables: self classVariableNames asSortedCollection
%

category: 'accessing'
method: CypressClassStructure
comment

	comment ifNil: [ comment := '' ].
	^comment
%

category: 'accessing'
method: CypressClassStructure
comment: aString

	comment := aString
%

category: 'initialization'
method: CypressClassStructure
fromClassDefinition: classDefinition

	self
		isClassExtension: false;
		name: classDefinition name;
		category: classDefinition category;
		comment: classDefinition comment;
		superclassName: classDefinition superclassName;
		instanceVariableNames: classDefinition instVarNames;
		classInstanceVariableNames: classDefinition classInstVarNames;
		classVariableNames: classDefinition classVarNames;
		poolDictionaryNames: classDefinition poolDictionaryNames;
		subclassType: classDefinition subclassType.
%

category: 'querying'
method: CypressClassStructure
instanceMethodNamed: methodName

	^self instanceMethods
		at: methodName 
		ifAbsentPut: [CypressMethodStructure named: methodName]
%

category: 'accessing'
method: CypressClassStructure
instanceMethods

	instanceMethods ifNil: [ instanceMethods := Dictionary new ].
	^instanceMethods
%

category: 'accessing'
method: CypressClassStructure
instanceVariableNames

	^self properties at: 'instvars' ifAbsent: [#()]
%

category: 'accessing'
method: CypressClassStructure
instanceVariableNames: someStrings

	^self properties at: 'instvars' put: someStrings
%

category: 'converting'
method: CypressClassStructure
instanceVariablesString

	^self stringForVariables: self instanceVariableNames
%

category: 'accessing'
method: CypressClassStructure
isClassExtension

        isClassExtension ifNil: [ isClassExtension := true ].
        ^isClassExtension
%

category: 'accessing'
method: CypressClassStructure
isClassExtension: aBoolean

	isClassExtension := aBoolean
%

category: 'accessing'
method: CypressClassStructure
name

	^self properties at: 'name'
%

category: 'accessing'
method: CypressClassStructure
name: aString

	self properties at: 'name' put: aString
%

category: 'converting'
method: CypressClassStructure
poolDictionariesString
  ^ self stringForVariables: self poolDictionaryNames
%

category: 'accessing'
method: CypressClassStructure
poolDictionaryNames

	^self properties at: 'pools' ifAbsent: [#()]
%

category: 'accessing'
method: CypressClassStructure
poolDictionaryNames: someStrings

	^self properties at: 'pools' put: someStrings
%

category: 'accessing'
method: CypressClassStructure
subclassType

	^self properties at: '_gs_subclassType' ifAbsent: ['']
%

category: 'accessing'
method: CypressClassStructure
subclassType: aString

	aString isEmpty
		ifTrue: [self properties removeKey: '_gs_subclassType' ifAbsent: []]
		ifFalse: [self properties at: '_gs_subclassType' put: aString]
%

category: 'accessing'
method: CypressClassStructure
superclassName

	^self properties at: 'super'
%

category: 'accessing'
method: CypressClassStructure
superclassName: aString

	^self properties at: 'super' put: aString
%

! Class Implementation for CypressMethodStructure

! ------------------- Class methods for CypressMethodStructure

category: 'instance creation'
classmethod: CypressMethodStructure
fromMethodDefinition: methodDefinition

	^self new
		fromMethodDefinition: methodDefinition;
		yourself
%

! ------------------- Instance methods for CypressMethodStructure

category: 'converting'
method: CypressMethodStructure
asCypressMethodDefinition
	"Try to coerce Unicode source to simple Strings when possible."

	^CypressMethodDefinition 
        	className: self classStructure className
		classIsMeta: self isMetaclass
		selector: self selector
		category: self category
		source: self source asString
%

category: 'accessing'
method: CypressMethodStructure
category

	^self properties at: 'category'
%

category: 'accessing'
method: CypressMethodStructure
category: aString

	self properties at: 'category' put: aString
%

category: 'accessing'
method: CypressMethodStructure
classStructure
	^classStructure
%

category: 'accessing'
method: CypressMethodStructure
classStructure: aCypressClassStructure
	classStructure := aCypressClassStructure
%

category: 'initialization'
method: CypressMethodStructure
fromMethodDefinition: methodDefinition

	self isMetaclass: methodDefinition classIsMeta.
	self selector: methodDefinition selector.
	self category: methodDefinition category.
	self source: methodDefinition source.
%

category: 'accessing'
method: CypressMethodStructure
isMetaclass

	isMetaclass ifNil: [ isMetaclass := false ].
	^isMetaclass
%

category: 'accessing'
method: CypressMethodStructure
isMetaclass: aBoolean
	isMetaclass := aBoolean
%

category: 'accessing'
method: CypressMethodStructure
selector
    ^ String
        streamContents: [ :stream | 
            self name
                do: [ :chara | 
                    stream
                        nextPut:
                            (chara = $.
                                ifTrue: [ $: ]
                                ifFalse: [ chara ]) ] ]
%

category: 'accessing'
method: CypressMethodStructure
selector: aString
    name := String
        streamContents: [ :stream | 
            aString
                do: [ :chara | 
                    stream
                        nextPut:
                            (chara = $:
                                ifTrue: [ $. ]
                                ifFalse: [ chara ]) ] ]
%

category: 'accessing'
method: CypressMethodStructure
source

	^source
%

category: 'accessing'
method: CypressMethodStructure
source: aString

	source := aString
%

! Class Implementation for CypressPackageStructure

! ------------------- Class methods for CypressPackageStructure

category: 'instance creation'
classmethod: CypressPackageStructure
fromPackage: aCypressPackageDefinition

	^(self new) 
		fromPackage: aCypressPackageDefinition;
		yourself
%

category: 'instance creation'
classmethod: CypressPackageStructure
name: aPackageNameString from: classDefinitions classMap: classMap
  ^ self new
    name: aPackageNameString from: classDefinitions classMap: classMap;
    yourself
%

! ------------------- Instance methods for CypressPackageStructure

category: 'accessing'
method: CypressPackageStructure
classes

	classes ifNil: [ classes := OrderedCollection new ].
	^classes
%

category: 'accessing'
method: CypressPackageStructure
extensions

	extensions ifNil: [ extensions := OrderedCollection new ].
	^extensions
%

category: 'initialization'
method: CypressPackageStructure
fromPackage: aCypressPackageDefinition
  | snapshot classMap classDefinitions |
  snapshot := aCypressPackageDefinition snapshot.
  classDefinitions := OrderedCollection new.
  classMap := Dictionary new.
  snapshot definitions
    do: [ :definition | 
      definition
        classDefinition: [ :classDefinition | classDefinitions add: classDefinition ]
        methodDefinition: [ :methodDefinition | 
          (classMap at: methodDefinition className ifAbsentPut: [ Set new ])
            add: methodDefinition ] ].
  self
    name: aCypressPackageDefinition name , self packageExtension
    from: classDefinitions
    classMap: classMap
%

category: 'initialization'
method: CypressPackageStructure
name: aString from: classDefinitions classMap: classMap

	| classStructure |
	name := aString.
	properties := Dictionary new.
	classDefinitions do: [:classDefinition |
		classStructure := (CypressClassStructure fromClassDefinition: classDefinition)
			packageStructure: self.
		(classMap removeKey: classDefinition className ifAbsent: [#()]) do: [:methodDefinition | | methodStructure |
			methodStructure := (CypressMethodStructure fromMethodDefinition: methodDefinition)
				packageStructure: self;
				classStructure: classStructure.
			(methodDefinition
				instanceMethod: [:instanceMethod | classStructure instanceMethods ] 
				classMethod: [:classMethod | classStructure classMethods ])
					at: methodDefinition selector
					put: methodStructure ].
		self classes add: classStructure ].
	classMap keysAndValuesDo: [:className :methods |
		classStructure := (CypressClassStructure named: className)
			isClassExtension: true;
			packageStructure: self.
		methods do: [:methodDefinition | | methodStructure |
			methodStructure := (CypressMethodStructure fromMethodDefinition: methodDefinition)
				packageStructure: self;
				classStructure: classStructure.
			(methodDefinition
				instanceMethod: [:instanceMethod | classStructure instanceMethods ] 
				classMethod: [:classMethod | classStructure classMethods ])
					at: methodDefinition selector
					put: methodStructure ].
		self extensions add: classStructure ].
%

category: 'accessing'
method: CypressPackageStructure
packageExtension

	^self packageExtensionOr: ['.package' ]
%

category: 'accessing'
method: CypressPackageStructure
packageExtensionOr: aBlock

	^self properties at: 'extension' ifAbsent: aBlock
%

category: 'accessing'
method: CypressPackageStructure
packageName

	^self name copyWithoutSuffix: self packageExtension
%

category: 'accessing'
method: CypressPackageStructure
packageStructure
	^self
%

category: 'snapshotting'
method: CypressPackageStructure
snapshot
	| definitions |
	definitions := OrderedCollection new.
	self classes do: [:classStructure |
        	definitions add: classStructure asCypressClassDefinition.
                (classStructure instanceMethods asSortedCollection: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ].
                (classStructure classMethods asSortedCollection: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ]].
	self extensions do: [:classStructure |
                (classStructure instanceMethods asSortedCollection: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ].
                (classStructure classMethods asSortedCollection: [:a :b | a selector <= b selector]) do: [:methodStructure |
			definitions add: methodStructure asCypressMethodDefinition ]].
	^ CypressSnapshot definitions: definitions
%

! Class Extensions

! Class Extension for Array

! ------------------- Instance methods for Array

category: '*Cypress-Structure'
method: Array
asCypressPropertyObject

	^self collect: [:each | each asCypressPropertyObject]
%

category: '*Cypress-Structure'
method: Array
writeCypressJsonOn: aStream indent: startIndent

	| indent |
	aStream
		nextPutAll: '[';
		lf.
	indent := startIndent + 1.
	1 to: self size
		do: 
			[:index |
			| item |
			item := self at: index.
			aStream tab: indent.
			item writeCypressJsonOn: aStream indent: indent.
			index < self size
				ifTrue: 
					[aStream
						nextPutAll: ',';
						lf]].
	self size = 0 ifTrue: [aStream tab: indent].
	aStream nextPutAll: ' ]'
%

! Class Extension for Boolean

! ------------------- Instance methods for Boolean

category: '*Cypress-Structure'
method: Boolean
writeCypressJsonOn: aStream indent: startIndent

	aStream nextPutAll: self printString
%

! Class Extension for Dictionary

! ------------------- Instance methods for Dictionary

category: '*Cypress-Structure'
method: Dictionary
asCypressPropertyObject

	| result |
	result := self class new: self size.
	self associationsDo: [:assoc | result at: assoc key put: assoc value asCypressPropertyObject].
	^result.
%

category: '*Cypress-Structure'
method: Dictionary
writeCypressJsonOn: aStream indent: startIndent
  | indent cnt |
  indent := startIndent.
  aStream
    nextPutAll: '{';
    lf.
  cnt := 0.
  indent := indent + 1.
  self keys asSortedCollection
    do: [ :key | 
      | value |
      value := self at: key.
      cnt := cnt + 1.
      aStream tab: indent.
      key writeCypressJsonOn: aStream indent: indent.
      aStream nextPutAll: ' : '.
      value writeCypressJsonOn: aStream indent: indent.
      cnt < self size
        ifTrue: [ 
          aStream
            nextPutAll: ',';
            lf ] ].
  self size = 0
    ifTrue: [ aStream tab: indent ].
  aStream nextPutAll: ' }'
%

category: '*Cypress-Structure'
method: Dictionary
writeFiletreeJsonOn: aStream indent: startIndent
  | indent cnt |
  indent := startIndent.
  aStream
    nextPutAll: '{';
    lf.
  cnt := 0.
  indent := indent + 1.
  self keys asSortedCollection
    do: [ :key | 
      | value |
      value := self at: key.
      cnt := cnt + 1.
      aStream tab: indent.
      key writeCypressJsonOn: aStream indent: indent.
      aStream nextPutAll: ' : '.
      value writeFiletreeJsonOn: aStream indent: indent.
      cnt < self size
        ifTrue: [ 
          aStream
            nextPutAll: ',';
            lf ] ].
  self size = 0
    ifTrue: [ aStream tab: indent ].
  aStream
    nextPutAll: ' }';
    lf
%

! Class Extension for Number

! ------------------- Instance methods for Number

category: '*Cypress-Structure'
method: Number
writeCypressJsonOn: aStream indent: startIndent

	aStream nextPutAll: self printString
%

! Class Extension for Object

! ------------------- Instance methods for Object

category: '*Cypress-Structure'
method: Object
asCypressPropertyObject

	^self
%

category: '*Cypress-Structure'
method: Object
writeCypressJsonOn: fileStream

	self writeCypressJsonOn: fileStream indent: 0
%

category: '*Cypress-Structure'
method: Object
writeFiletreeJsonOn: fileStream
  self writeFiletreeJsonOn: fileStream indent: 0
%

category: '*Cypress-Structure'
method: Object
writeFiletreeJsonOn: aStream indent: startIndent
  ^self writeCypressJsonOn: aStream indent: startIndent
%

! Class Extension for String

! ------------------- Instance methods for String

category: '*Cypress-Structure'
method: String
asCypressPropertyObject

	^self unescapePercents withUnixLineEndings
%

category: '*Cypress-Structure'
method: String
writeCypressJsonOn: aStream indent: startIndent

	aStream
		nextPutAll: '"';
		nextPutAll: self withUnixLineEndings encodeAsUTF8 escapePercents;
		nextPutAll: '"'
%

! Class initializers 

doit
true.
%



! End of Package: Cypress-Structure


