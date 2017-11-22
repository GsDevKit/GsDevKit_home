# 
# Cypress-PackageManagement.gs
#
set compile_env: 2

! Class Extensions

! Class Extension for Array

! ------------------- Instance methods for Array

category: '*Cypress-Base-ExtensionMethods'
method: Array
_writeCypressJsonOn: aStream indent: startIndent
	"Private method which may be removed in a future GemStone version."

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
			indent timesRepeat: [aStream tab].
			item _writeCypressJsonOn: aStream indent: indent.
			index < self size
				ifTrue: 
					[aStream
						nextPutAll: ',';
						lf]].
	self size = 0 ifTrue: [indent timesRepeat: [aStream tab]].
	aStream nextPutAll: ' ]'
%

! Class Extension for Boolean

! ------------------- Instance methods for Boolean

category: '*Cypress-Base-ExtensionMethods'
method: Boolean
_writeCypressJsonOn: aStream indent: startIndent
	"Private method which may be removed in a future GemStone version."

	aStream nextPutAll: self printString
%

! Class Extension for Dictionary

! ------------------- Instance methods for Dictionary

category: '*Cypress-Base-ExtensionMethods'
method: Dictionary
_writeCypressJsonOn: fileStream
	"Private method which may be removed in a future GemStone version."

	self _writeCypressJsonOn: fileStream indent: 0.
	fileStream lf
%

category: '*Cypress-Base-ExtensionMethods'
method: Dictionary
_writeCypressJsonOn: aStream indent: startIndent
	"Private method which may be removed in a future GemStone version."

	| indent cnt |
	indent := startIndent.
	aStream
		nextPutAll: '{';
		lf.
	cnt := 0.
	indent := indent + 1.
	self keys asSortedCollection do: 
			[:key |
			| value |
			value := self at: key.
			cnt := cnt + 1.
			indent timesRepeat: [aStream tab].
			key _writeCypressJsonOn: aStream indent: indent.
			aStream nextPutAll: ' : '.
			value _writeCypressJsonOn: aStream indent: indent.
			cnt < self size
				ifTrue: 
					[aStream
						nextPutAll: ',';
						lf]].
	self size = 0 ifTrue: [indent timesRepeat: [aStream tab]].
	aStream nextPutAll: ' }'
%

! Class Extension for Number

! ------------------- Instance methods for Number

category: '*Cypress-Base-ExtensionMethods'
method: Number
_writeCypressJsonOn: aStream indent: startIndent
	"Private method which may be removed in a future GemStone version."

	aStream nextPutAll: self printString
%

! Class Extension for Object

! ------------------- Instance methods for Object

category: '*Cypress-Base-ExtensionMethods'
method: Object
_writeCypressJsonOn: fileStream
	"Private method which may be removed in a future GemStone version."

	self _writeCypressJsonOn: fileStream indent: 0
%

! Class Extension for String

! ------------------- Instance methods for String

category: '*Cypress-Base-ExtensionMethods'
method: String
_writeCypressJsonOn: aStream indent: startIndent
	"Private method which may be removed in a future GemStone version."

	aStream nextPutAll: '"'.
	((AllUsers userWithId: 'GsDevKitLibrarianUser') objectNamed: 'CypressUrl')
		writeWithHttpEscapes: (((AllUsers userWithId: 'GsDevKitLibrarianUser') objectNamed: 'CypressObject') normalizeLineEndingsOf: self)
		on: aStream.
	aStream nextPutAll: '"'
%


#
# Cypress-Environmental-Tools
#
! Class Extension for Behavior

! ------------------- Instance methods for Behavior

category: '*Cypress-Base-ExtensionMethods'
method: Behavior
persistentSuperclassForEnv: envId
  "result will be nil if no methods exist for specified environmentId."

  | mds |
  (mds := methDicts) _isArray
    ifTrue: [ ^ mds atOrNil: envId * 4 + 3 ].
  envId == 0
    ifTrue: [ ^ mds ].
  ^ nil
%

category: '*Cypress-Base-ExtensionMethods'
method: Behavior
persistentSuperclassForEnv: envId put: aValue
  "aValue should be a GsMethodDictionary, or nil ,
   caller responsible for _refreshClassCache "

  <protected>
  | ofs mds |
  (mds := methDicts) _isArray
    ifFalse: [ envId == 0
        ifTrue: [ methDicts := aValue.
          ^ self ].
      mds := {mds}.
      methDicts := mds ].
  ofs := envId * 4 + 3.
  mds size < ofs
    ifTrue: [ mds size: ofs ].
  mds at: ofs put: aValue
%

category: '*Cypress-Base-ExtensionMethods'
method: SequenceableCollection
sort: aSortBlock
  "Sort this array using aSortBlock. The block should take two arguments
	and return true if the first element should preceed the second one."

^ self sortWithBlock: aSortBlock
%

category: '*Cypress-Base-ExtensionMethods'
method: SequenceableCollection
sort
  "Sort this array into ascending order using the '<=' operator."

  ^ self sort: [ :a :b | a <= b ]
%

set compile_env: 0

