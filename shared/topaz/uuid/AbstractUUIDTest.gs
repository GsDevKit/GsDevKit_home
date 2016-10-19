! ------------------- Class definition for AbstractUUIDTest
expectvalue /Class
doit
(TestCase
	subclass: 'AbstractUUIDTest'
	instVarNames: #( currentUuidGeneratorClass )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: Globals
	options: #())
		category: 'UUID-Tests';
		comment: '';
		immediateInvariant.
%
! ------------------- Remove existing behavior from AbstractUUIDTest
expectvalue /Metaclass3       
doit
AbstractUUIDTest removeAllMethods.
AbstractUUIDTest class removeAllMethods.
%
! ------------------- Class methods for AbstractUUIDTest
category: 'Testing'
classmethod: AbstractUUIDTest
isAbstract
  "Override to true if a TestCase subclass is Abstract and should not have
	TestCase instances built from it"

  ^ self sunitName = #'AbstractUUIDTest'
%
! ------------------- Instance methods for AbstractUUIDTest
category: 'running'
method: AbstractUUIDTest
generatorClass
  self subclassResponsibility
%
category: 'running'
method: AbstractUUIDTest
setUp
  super setUp.
  currentUuidGeneratorClass := UUID _generatorClass.
  UUID generatorClass: self generatorClass
%
category: 'running'
method: AbstractUUIDTest
tearDown
  super tearDown.
  currentUuidGeneratorClass ifNotNil: [ UUID generatorClass: currentUuidGeneratorClass ]
%
category: 'tests'
method: AbstractUUIDTest
testComparison
  "self debug: #testComparison"

  | a b |
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: 'e85ae7ba-3ca3-4bae-9f62-cc2ce51c525e'.
  self assert: a < b.
  self deny: a > b.
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df642'.
  self assert: a < b.
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df640'.
  self assert: a > b
%
category: 'tests'
method: AbstractUUIDTest
testComparisonA
  | a b |
  a := UUID fromString: '0608b9dc-02e4-4dd0-9f8a-ea45160df641'.
  b := UUID fromString: 'e85ae7ba-3ca3-4bae-9f62-cc2ce51c525e'.
  self assert: a = a copy.
  self assert: b = b copy.
  self assert: a < b.
  self assert: b > a.
  self deny: a > b = (b > a)
%
category: 'tests'
method: AbstractUUIDTest
testCreation
  | uuid |
  uuid := UUID new.
  self should: [ uuid size = 16 ].
  self shouldnt: [ uuid isNilUUID ].
  self should: [ uuid asString size = 36 ]
%
category: 'tests'
method: AbstractUUIDTest
testCreationEquality
  | uuid1 uuid2 |
  uuid1 := UUID new.
  uuid2 := UUID new.
  self should: [ uuid1 = uuid1 ].
  self should: [ uuid2 = uuid2 ].
  self shouldnt: [ uuid1 = uuid2 ].
  self shouldnt: [ uuid1 hash = uuid2 hash ]
%
category: 'tests'
method: AbstractUUIDTest
testCreationFromString
  | uuid string |
  string := UUID nilUUID asString.
  uuid := UUID fromString: string.
  self should: [ uuid size = 16 ].
  self should: [ uuid = UUID nilUUID ].
  self should: [ uuid isNilUUID ].
  self should: [ uuid asString size = 36 ].
  self should: [ uuid asArray asSet size = 1 ].
  self should: [ (uuid asArray asSet asArray at: 1) = 0 ]
%
category: 'tests'
method: AbstractUUIDTest
testCreationFromStringNotNil
  | uuid string |
  string := UUID new asString.
  uuid := UUID fromString: string.
  self should: [ uuid size = 16 ].
  self should: [ uuid asString size = 36 ]
%
category: 'tests'
method: AbstractUUIDTest
testCreationNil
  | uuid |
  uuid := UUID nilUUID.
  self should: [ uuid size = 16 ].
  self should: [ uuid isNilUUID ].
  self should: [ uuid asString size = 36 ].
  self should: [ uuid asArray asSet size = 1 ].
  self should: [ (uuid asArray asSet asArray at: 1) = 0 ]
%
category: 'tests'
method: AbstractUUIDTest
testCreationNodeBased
  | uuid1String uuid2String |
  uuid1String := UUID new asString.
  uuid2String := UUID new asString.
  (uuid1String copyFrom: uuid1String size -12 + 1 to: uuid1String size)
        = (uuid2String copyFrom: uuid2String size -12 + 1 to: uuid2String size)
    ifFalse: [ ^ self ].
  1000
    timesRepeat: [ 
      | uuid |
      uuid := UUID new.
      self should: [ ((uuid at: 7) bitAnd: 16rF0) = 16r10 ].
      self should: [ ((uuid at: 9) bitAnd: 16rC0) = 16r80 ] ]
%
category: 'tests'
method: AbstractUUIDTest
testDuplicationsKinda
  | check size |
  size := 5000.
  check := Set new: size.
  size
    timesRepeat: [ 
      | uuid |
      uuid := UUID new.
      self shouldnt: [ check includes: uuid ].
      check add: uuid ]
%
category: 'tests'
method: AbstractUUIDTest
testOrder
  100
    timesRepeat: [ 
      | uuid1 uuid2 uuid1String uuid2String |
      uuid1 := UUID new.
      uuid2 := UUID new.
      uuid1String := uuid1 asString.
      uuid2String := uuid2 asString.
      (uuid1String copyFrom: uuid1String size -12 + 1 to: uuid1String size)
        = (uuid2String copyFrom: uuid2String size -12 + 1 to: uuid2String size)
        ifTrue: [ 
          self should: [ uuid1 < uuid2 ].
          self should: [ uuid2 > uuid1 ].
          self shouldnt: [ uuid1 = uuid2 ] ] ]
%
category: 'tests'
method: AbstractUUIDTest
testUniqueness
  "Test uniqueness for a given number of generated values"

  | maxTestValue |
  maxTestValue := 1000.
  self
    assert:
      ((1 to: maxTestValue) collect: [ :i | UUID new asString ]) asSet size
        = maxTestValue
%
