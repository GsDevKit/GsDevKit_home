! ------------------- Class definition for UUID
expectvalue /Class
doit
(ByteArray
	subclass: 'UUID'
	instVarNames: #( )
	classVars: #( GeneratorClass )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'UUID-Core';
		comment: '';
		immediateInvariant.
%

! ------------------- Remove existing behavior from UUID
expectvalue /Metaclass3       
doit
UUID removeAllMethods.
UUID class removeAllMethods.
%
! ------------------- Class methods for UUID
category: 'private'
classmethod: UUID
_generatorClass
  ^ GeneratorClass
%
category: 'instance creation'
classmethod: UUID
fromString: aString
	| object |
	aString size ~= 36 ifTrue: [Error signal].
	object := self nilUUID. 
	object asUUID: aString.
	^object
%
category: 'accessing'
classmethod: UUID
generatorClass
  self _generatorClass ifNil: [ GeneratorClass := FastUUIDGenerator ].
  ^ self _generatorClass
%
category: 'accessing'
classmethod: UUID
generatorClass: aClass
  GeneratorClass := aClass.
  aClass initialize
%
category: 'instance creation'
classmethod: UUID
new
	^(self new: 16) initialize
%
category: 'instance creation'
classmethod: UUID
nilUUID
	"Must call basicNew: here because I have a non-trivial initialize method."

	^self basicNew: 16
%
! ------------------- Instance methods for UUID
category: 'comparing'
method: UUID
< aMagnitude
  "Answer whether the receiver is less than the argument."

  self size = aMagnitude size
    ifFalse: [ ^ self size < aMagnitude size ].
  1 to: self size do: [ :i | 
    (self at: i) = (aMagnitude at: i)
      ifFalse: [ ^ (self at: i) < (aMagnitude at: i) ] ].
  ^ false
%
category: 'comparing'
method: UUID
<= uuid
	^ (self = uuid) or: [ self < uuid ]
%
category: 'comparing'
method: UUID
> uuid
	^ uuid < self
%
category: 'comparing'
method: UUID
>= uuid
	^ (self = uuid) or: [ uuid < self ]
%
category: 'converting'
method: UUID
asString
	| result data |
	data := String new: 36.
	result := WriteStream on: data.
	1 to: 4 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	5 to: 6 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	7 to: 8 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	9 to: 10 do:[:i| self printHexAt: i to: result].
	result nextPut: $-.
	11 to: 16 do:[:i| self printHexAt: i to: result].
	^data.
%
category: 'converting'
method: UUID
asString36
	"Encode the UUID as a base 36 string using 0-9 and lowercase a-z.
	This is the shortest representation still being able to work as
	filenames etc since it does not depend on case nor characters
	that might cause problems, and it fits into short filenames like on
	the old MacOS HFS filesystem. The check for 36r is to make this code
	work in versions before Squeak 3.8."

	| num candidate |
	num := 0.
	1 to: self size do: [:i | num := num + ((256 raisedTo: i - 1) * (self at: i))].
	candidate := num printStringBase: 36.
	^((candidate beginsWith: '36r')
			ifTrue: [candidate copyFrom: 4 to: candidate size]
			ifFalse: [candidate]) asLowercase
%
category: 'converting'
method: UUID
asUUID: aString
	| stream token byte sz |
	stream := ReadStream on: (aString copyReplaceAll: '-' with: '') asUppercase.
	sz := stream _collection size.
	1 to: sz/2 do: [:i | 
		token := stream next: 2.
		byte := Integer fromHexString: token.
		self at: i put: byte].
	^self
%
category: 'initialization'
method: UUID
initialize
	self primMakeUUID.
%
category: 'testing'
method: UUID
isNilUUID
  1 to: self size do: [ :i | 
    (self at: i) ~= 0
      ifTrue: [ ^ false ] ].
  ^ true
%
category: 'private'
method: UUID
primMakeUUID
  self class generatorClass default generateBytes: self forVersion: 4
%
category: 'converting'
method: UUID
printHexAt: index to: aStream
	| map v |
	map := '0123456789abcdef'.
	v := self at: index.
	aStream nextPut: (map at: (v bitShift: -4) + 1). 
	aStream nextPut: (map at: (v bitAnd: 15) + 1).
%
category: 'printing'
method: UUID
printOn: aStream
	aStream nextPutAll: 'an UUID('.
	self asString printOn: aStream.
	aStream nextPutAll: ')'
%
category: 'printing'
method: UUID
printString

	^self asString
%
