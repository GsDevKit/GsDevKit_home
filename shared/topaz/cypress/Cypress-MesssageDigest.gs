! Package: Cypress-MesssageDigest

! Class Declarations

run
".,$s/inDictionary: UserGlobals/inDictionary: CypressPackageSymbolList/ "
UserGlobals at: #CypressPackageSymbolList put: Globals.
true
%

doit
(WriteStream
	subclass: 'CypressMessageDigestStream'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: CypressPackageSymbolList
	options: #())
		category: 'Cypress-MesssageDigest';
		comment: 'All Cypress classes are private to GemStone and are likely to be removed in a future release.';
		immediateInvariant.
true.
%


! Class Implementation for CypressMessageDigestStream

! ------------------- Class methods for CypressMessageDigestStream

category: 'instance creation'
classmethod: CypressMessageDigestStream
bytes

	^self on: ByteArray new
%

category: 'instance creation'
classmethod: CypressMessageDigestStream
characters

	^self on: String new
%

! ------------------- Instance methods for CypressMessageDigestStream

category: 'digests'
method: CypressMessageDigestStream
md5sum

	^self contents md5sum
%

category: 'digests'
method: CypressMessageDigestStream
sha1Sum

	^self contents sha1Sum
%

category: 'digests'
method: CypressMessageDigestStream
sha256Sum

	^self contents sha256Sum
%

category: 'digests'
method: CypressMessageDigestStream
sha512Sum

	^self contents sha512Sum
%

! Class Extensions

! Class Extension for CypressClassStructure

! ------------------- Instance methods for CypressClassStructure

category: '*Cypress-MesssageDigest'
method: CypressClassStructure
addToDigest: aMessageDigestStream

	aMessageDigestStream
		tab;
		tab;
		nextPutAll: self class name;
		cr;
		tab;
		tab;
		tab;
		nextPutAll: 'extension:';
		nextPutAll: self isClassExtension printString;
		cr;
		tab;
		tab;
		tab;
		nextPutAll: 'comment:';
		nextPutAll: self comment;
		cr;
		tab;
		tab;
		tab;
		nextPutAll: 'properties:';
		cr;
		tab;
		tab;
		tab;
		tab.
	self properties _writeCypressJsonOn: aMessageDigestStream indent: 4.
	aMessageDigestStream
		cr;
		tab;
		tab;
		tab;
		nextPutAll: 'class methods:';
		cr.
	(self classMethods asSortedCollection: 
			[:a :b |
			(a isMetaclass printString , a selector)
				< (b isMetaclass printString , b selector)])
		do: [:each | each addToDigest: aMessageDigestStream].
	aMessageDigestStream
		tab;
		tab;
		tab;
		nextPutAll: 'instance methods:';
		cr.
	(self instanceMethods asSortedCollection: 
			[:a :b |
			(a isMetaclass printString , a selector)
				< (b isMetaclass printString , b selector)])
		do: [:each | each addToDigest: aMessageDigestStream]
%

category: '*Cypress-MesssageDigest'
method: CypressClassStructure
isSkeleton

	^instanceMethods isNil
		and: [classMethods isNil
		and: [comment isNil
		and: [isClassExtension isNil]]]
%

! Class Extension for CypressMethodStructure

! ------------------- Instance methods for CypressMethodStructure

category: '*Cypress-MesssageDigest'
method: CypressMethodStructure
addToDigest: aMessageDigestStream

	aMessageDigestStream
		tab;
		tab;
		tab;
		tab;
		nextPutAll: self class name;
		cr;
		tab;
		tab;
		tab;
		tab;
		tab;
		nextPutAll: self selector;
		cr;
		tab;
		tab;
		tab;
		tab;
		tab;
		nextPutAll: 'properties:';
		cr;
		tab;
		tab;
		tab;
		tab;
		tab;
		tab.
	self properties _writeCypressJsonOn: aMessageDigestStream indent: 6.
	aMessageDigestStream
		cr;
		tab;
		tab;
		tab;
		tab;
		nextPutAll: 'source:';
		nextPutAll: self source;
		cr
%

category: '*Cypress-MesssageDigest'
method: CypressMethodStructure
isSkeleton

	^source isNil
		and: [classStructure isNil
		and: [isMetaclass isNil]]
%

! Class Extension for CypressPackageStructure

! ------------------- Instance methods for CypressPackageStructure

category: '*Cypress-MesssageDigest'
method: CypressPackageStructure
addToDigest: aMessageDigestStream

	aMessageDigestStream
		nextPutAll: self class name;
		cr;
		tab;
		nextPutAll: 'name:';
		nextPutAll: self name;
		cr;
		tab;
		nextPutAll: 'properties:';
		cr;
		tab;
		tab.
	self properties _writeCypressJsonOn: aMessageDigestStream indent: 2.
	aMessageDigestStream
		cr;
		tab;
		nextPutAll: 'classes:';
		cr.
	(self classes asSortedCollection: [:a :b | a name < b name])
		do: [:each | each addToDigest: aMessageDigestStream].
	aMessageDigestStream
		tab;
		nextPutAll: 'extensions:';
		cr.
	(self extensions asSortedCollection: [:a :b | a name < b name])
		do: [:each | each addToDigest: aMessageDigestStream]
%

category: '*Cypress-MesssageDigest'
method: CypressPackageStructure
isSkeleton

	^(properties isNil or: [properties isEmpty])
		and: [classes isNil
		and: [extensions isNil]]
%

! Class Extension for CypressStructure

! ------------------- Instance methods for CypressStructure

category: '*Cypress-MesssageDigest'
method: CypressStructure
addToDigest: aMessageDigestStream

	self subclassResponsibility: #addToDigest:
%

category: '*Cypress-MesssageDigest'
method: CypressStructure
digest
	"Answer a digest of the receiver, unless it is a skeleton (never populated).
	 The digest is not constrained, but is typically a ByteArray or an Integer.
	 In the case of a skeleton, answer nil so there is a distinction between
	 no such package and an empty package."

	| stream |
	self isSkeleton ifTrue: [^nil].
	stream := CypressMessageDigestStream characters.
	self addToDigest: stream.
	^stream md5sum
%

category: '*Cypress-MesssageDigest'
method: CypressStructure
isSkeleton

	^self subclassResponsibility: #isSkeleton
%

! Class initializers 

doit
true.
%



! End of Package: Cypress-MesssageDigest
run
UserGlobals removeKey: #CypressPackageSymbolList.
true
%

