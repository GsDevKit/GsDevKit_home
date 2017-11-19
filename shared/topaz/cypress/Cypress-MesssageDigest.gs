! Package: Cypress-MesssageDigest


! Remove existing behavior from package Cypress-MesssageDigest
!!!! This can be cleaned up when some package functionality is moved to the base system.

doit
| packageName |
packageName := 'Cypress-MesssageDigest'.
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
(WriteStream
	subclass: 'MessageDigestStream'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'Cypress-MesssageDigest';
		comment: '';
		immediateInvariant.
true.
%

! Class Implementation for MessageDigestStream

! ------------------- Class methods for MessageDigestStream

category: 'instance creation'
classmethod: MessageDigestStream
bytes

	^self on: ByteArray new
%

category: 'instance creation'
classmethod: MessageDigestStream
characters

	^self on: String new
%

! ------------------- Instance methods for MessageDigestStream

category: 'digests'
method: MessageDigestStream
md5sum

	^self contents md5sum
%

category: 'digests'
method: MessageDigestStream
sha1Sum

	^self contents sha1Sum
%

category: 'digests'
method: MessageDigestStream
sha256Sum

	^self contents sha256Sum
%

category: 'digests'
method: MessageDigestStream
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
		tab; tab; nextPutAll: self class name; cr;
		tab; tab; tab; nextPutAll: 'extension:'; nextPutAll: self isClassExtension printString; cr;
		tab; tab; tab; nextPutAll: 'comment:'; nextPutAll: self comment; cr;
		tab; tab; tab; nextPutAll: 'properties:'; cr;
		tab; tab; tab; tab.
	self properties writeCypressJsonOn: aMessageDigestStream indent: 4.
	aMessageDigestStream
		cr;
		tab; tab; tab; nextPutAll: 'class methods:'; cr.
	(self classMethods asSortedCollection: [:a :b | (a isMetaclass printString, a selector) < (b isMetaclass printString, b selector)])
		do: [:each | each addToDigest: aMessageDigestStream].
	aMessageDigestStream
		tab; tab; tab; nextPutAll: 'instance methods:'; cr.
	(self instanceMethods asSortedCollection: [:a :b | (a isMetaclass printString, a selector) < (b isMetaclass printString, b selector)])
		do: [:each | each addToDigest: aMessageDigestStream].
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
		tab; tab; tab; tab; nextPutAll: self class name; cr;
		tab; tab; tab; tab; tab; nextPutAll: self selector; cr;
		tab; tab; tab; tab; tab; nextPutAll: 'properties:'; cr;
		tab; tab; tab; tab; tab; tab.
	self properties writeCypressJsonOn: aMessageDigestStream indent: 6.
	aMessageDigestStream
		cr;
		tab; tab; tab; tab; nextPutAll: 'source:'; nextPutAll: self source; cr.
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
		nextPutAll: self class name; cr;
		tab; nextPutAll: 'name:'; nextPutAll: self name; cr;
		tab; nextPutAll: 'properties:'; cr;
		tab; tab.
	self properties writeCypressJsonOn: aMessageDigestStream indent: 2.
	aMessageDigestStream
		cr;
		tab; nextPutAll: 'classes:'; cr.
	(self classes asSortedCollection: [:a :b | a name < b name])
		do: [:each | each addToDigest: aMessageDigestStream].
	aMessageDigestStream
		tab; nextPutAll: 'extensions:'; cr.
	(self extensions asSortedCollection: [:a :b | a name < b name])
		do: [:each | each addToDigest: aMessageDigestStream].
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
	stream := MessageDigestStream characters.
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


