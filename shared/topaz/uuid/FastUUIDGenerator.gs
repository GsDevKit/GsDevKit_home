! ------------------- Class definition for FastUUIDGenerator
expectvalue /Class
doit
(Object
	subclass: 'FastUUIDGenerator'
	instVarNames: #(bits1 bits2 bits3
	                  bits4 random semaphoreForGenerator )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'UUID-Core';
		comment: '';
		immediateInvariant.
%
! ------------------- Remove existing behavior from FastUUIDGenerator
expectvalue /Metaclass3       
doit
FastUUIDGenerator removeAllMethods.
FastUUIDGenerator class removeAllMethods.
%
! ------------------- Class methods for FastUUIDGenerator
category: 'accessing'
classmethod: FastUUIDGenerator
default

	| d |
	d := SessionTemps current at: #UUID_DEFAULT otherwise: nil.
	d == nil 
		ifTrue: [
		 	d := self new initialize.
			SessionTemps current at: #UUID_DEFAULT put: d.
		].
	^d
%
category: 'initialization'
classmethod: FastUUIDGenerator
initialize

	SessionTemps current at: #UUID_DEFAULT put: nil.
%
category: 'instance creation'
classmethod: FastUUIDGenerator
new
  ^self basicNew
    initilize;
    yourself
%
! ------------------- Instance methods for FastUUIDGenerator
category: 'instance creation'
method: FastUUIDGenerator
generateBytes: aPlaceHolder forVersion: aVersion
	aVersion = 4 ifTrue: [self generateFieldsVersion4]
		ifFalse: [self error: 'Unsupported version'].
	self placeFields: aPlaceHolder.
%
category: 'instance creation'
method: FastUUIDGenerator
generateFieldsVersion4

	semaphoreForGenerator critical: 
			[bits1 := random integer.
			bits2 := random integer.
			bits3 := random integer.
			bits4 := random integer].
	bits2 := (bits2 bitAnd: 16rFFFF0FFF) bitOr: 16r4000.
	bits3 := (bits3 bitAnd: 16r3FFFFFFF) bitOr: 16r80000000
%
category: 'instance creation'
method: FastUUIDGenerator
initialize

	random := Random new.
	semaphoreForGenerator := Semaphore forMutualExclusion
%
category: 'instance creation'
method: FastUUIDGenerator
placeFields: aPlaceHolder

	aPlaceHolder
		unsigned32At: 1 put: bits1;
		unsigned32At: 5 put: bits2;
		unsigned32At: 9 put: bits3;
		unsigned32At: 13 put: bits4
%
