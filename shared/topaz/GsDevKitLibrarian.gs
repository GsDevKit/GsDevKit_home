!=========================================================================
! Copyright (C) GemTalk Systems 1986-2017.  All Rights Reserved.
!
! File  CodeLibrarian.gs
!
! Description - UserProfile for the hostagent main program
!=========================================================================

set user SystemUser pass swordfish
login

expectvalue %String
run
| up |
up := AllUsers detect: [ :x | x userId asString = 'CodeLibrarianUser' ] ifNone: [nil].
up ifNotNil:[ ^ 'CodeLibrarianUser UserProfile exists' ].

up := AllUsers addNewUserWithId:'CodeLibrarianUser'
                         password: 'swordfish' 
                         createNewSecurityPolicy: true .
#('CodeModification' 'UserPassword' 'OtherPassword' 'CompilePrimitives') 
  do: [:privilege | up addPrivilege: privilege ].
up addGroup: 'DataCuratorGroup'.
^ ' created CodeLibrarianUser'.
%
commit

expectvalue %SmallInteger
run
"in case of upgrade image, remove any existing Cypress code from Globals"
| list |
list := { } .
Globals values do:[:v |
  (v isBehavior and:[ (v name at: 1 equals:'Cypress')
                     or:[ v category at: 1 equals:'Cypress'] ]) 
    ifTrue:[ list add: v name ].
].
list do:[:name | 
  Globals removeKey: name  .
  GsFile gciLogServer:'removed ' , name , ' from Globals' .
].
^ list size 
%
commit

logout
set u CodeLibrarianUser p swordfish
login


! enable session methods
run
  | sessionMethodsPackage homeSymbolDict policy |
  sessionMethodsPackage := GsPackageLibrary
    createPackageNamed: #'SessionMethods'.
  GsPackageLibrary installPackage: sessionMethodsPackage.

  GsPackagePolicy current enable.

  homeSymbolDict := (GsCurrentSession currentSession objectNamed: #'UserGlobals').
  policy := GsPackagePolicy current.
  policy homeSymbolDict: homeSymbolDict.
  policy externalSymbolList: Array new.
  ^ true
%
commit

run
UserGlobals at: #GS_AllUsers put: AllUsers.
^ true
%
commit

input $upgradeDir/ston/bootstrapStonSupport.topaz
input $upgradeDir/cypress/bootstrapCypressSupport.topaz
input $upgradeDir/tonel/bootstrapTonelSupport.topaz
input $upgradeDir/metacello/bootstrapMetacelloSupport.topaz


doit
  (Object
	subclass: 'Smalltalk'
	instVarNames: #(  )
	classVars: #(  )
	classInstVars: #(  )
	poolDictionaries: #()
	inDictionary: UserGlobals
	options: #())
		category: 'Kernel Smalltalk Compat';
		comment: '';
		immediateInvariant.
  ^ true
%
  commit
category: 'bootstrapGsDevKit'
classmethod: Smalltalk
  at: aGlobalName ifPresent: aBlock
  | glob |
  aGlobalName isNil
    ifTrue: [ ^ nil ].
  glob := GsSession currentSession symbolList objectNamed: aGlobalName.
  ^ glob ~~ nil
    ifTrue: [ aBlock value: glob ]
    ifFalse: [ glob ]
%
commit

! Install CodeLibrarian-Core package

input $upgradeDir/CodeLibrarian-Core.gs
commit

# these two methods used by STON  --- needed for remote tODE login
category: 'Temp STON support'
classmethod: SequenceableCollection
streamContents: blockWithArg
  ^ self new: 100 streamContents: blockWithArg
%
category: 'Temp STON support'
classMethod: SequenceableCollection
new: newSize streamContents: blockWithArg
  | stream |
  stream := WriteStreamPortable on: (self new: newSize).
  blockWithArg value: stream.
  ^ stream contents
%
commit

! moved fix 47278 to classorganizer.gs

logout

set u SystemUser p swordfish
login

! Install CodeLibrarian class association into globals
expectvalue %String
run
  Globals at: #CodeLibrarian 
    ifAbsent: [
      | codeLibrarian |
      codeLibrarian := AllUsers userWithId: 'CodeLibrarianUser'.
      #( #'CodeLibrarian' )
        do: [ :className | 
          | assoc |
          assoc := codeLibrarian symbolList resolveSymbol: className.
          Globals addAssociation: assoc ].
      ^ 'CodeLibrarian class installed in Globals'].
  ^ 'CodeLibrarian class already exists in Globals'
%

commit
logout

set u SystemUser p swordfish
login

# methods needed to run Metacello load/save as SystemUser

category: 'TEMPORARY Tonel support methods'

method: CharacterCollection
isString
  ^ true
%

classmethod: SequenceableCollection
streamContents: blockWithArg
  ^ self new: 100 streamContents: blockWithArg
%
classmethod: SequenceableCollection
new: newSize streamContents: blockWithArg
  | stream |
  stream := WriteStreamPortable on: (self new: newSize).
  blockWithArg value: stream.
  stream position = newSize
    ifTrue: [ ^ stream originalContents ]
    ifFalse: [ ^ stream contents ]
%

method: SequenceableCollection
first
  "Answer the first element of the receiver.
	Raise an error if there are not enough elements."

  ^ self at: 1
%
method: SequenceableCollection
second
  "Answer the second element of the receiver.
	Raise an error if there are not enough elements."

  ^ self at: 2
%
method: SequenceableCollection
third
  "Answer the third element of the receiver.
	Raise an error if there are not enough elements."

  ^ self at: 3
%
method: SequenceableCollection
fourth
  "Answer the fourth element of the receiver.
	Raise an error if there are not enough elements."

  ^ self at: 4
%
method: SequenceableCollection
fifth
  "Answer the fifth element of the receiver.
	Raise an error if there are not enough elements."

  ^ self at: 5
%
method: SequenceableCollection
sixth
  "Answer the sixth element of the receiver.
	Raise an error if there are not enough elements."

  ^ self at: 6
%
method: SequenceableCollection
seventh
  "Answer the seventh element of the receiver.
	Raise an error if there are not enough elements."

  ^ self at: 7
%

method: Collection
isCollection
  "Return true if the receiver is some sort of Collection and responds to basic collection messages such as #size and #do:"

  ^ true
%
method: Object
isCollection
  "Return true if the receiver is some sort of Collection and responds to basic collection messages such as #size and #do:"

  ^ false
%
method: Object
isString
  ^false
%

method: SequenceableCollection
sort: aSortBlock
  "Sort this array using aSortBlock. The block should take two arguments
	and return true if the first element should preceed the second one."

^ self sortWithBlock: aSortBlock
%
method: SequenceableCollection
sort
  "Sort this array into ascending order using the '<=' operator."

  ^ self sort: [ :a :b | a <= b ]
%
method: SequenceableCollection
allButLast: n
  "Answer a copy of the receiver containing all but the last n
	elements. Raise an error if there are not enough elements."

  ^ self copyFrom: 1 to: self size - n
%
method: SequenceableCollection
allButLast
  "Answer a copy of the receiver containing all but the last
	element. Raise an error if there are not enough elements."

  ^ self allButLast: 1
%

method: CharacterCollection
substrings: separators 
	"Answer an array containing the substrings in the receiver separated 
	by the elements of separators."
	| result sourceStream subStringStream |
	
	(separators isString or: [ separators allSatisfy: [ :element | element isCharacter ] ])
		ifFalse: [ ^ self error: 'separators must be Characters.' ].
	sourceStream := ReadStreamPortable on: self.
	result := OrderedCollection new.
	subStringStream := WriteStreamPortable on: String new.
	[ sourceStream atEnd ] whileFalse: [
		| char |
		char := sourceStream next.
		(separators includes: char)
			ifTrue: [
				subStringStream isEmpty ifFalse: [
					result add: subStringStream contents.
					subStringStream := WriteStreamPortable on: String new ] ]
			ifFalse: [
				subStringStream nextPut: char ] ].
	subStringStream isEmpty ifFalse: [
		result add: subStringStream contents ].
	^ result asArray
%

method: String
execute: projectSpecBlock against: aScriptExecutor
  aScriptExecutor executeString: self do: projectSpecBlock
%
method: String
setLoadsInMetacelloProject: aMetacelloPackageSpec
  aMetacelloPackageSpec setLoads: {self}
%
method: Collection
setLoadsInMetacelloProject: aMetacelloPackageSpec
  aMetacelloPackageSpec setLoads: self asArray
%
category: '*metacello-mc'
method: String
addToMetacelloRepositories: aMetacelloRepositoriesSpec

	| spec |
	spec := 
		(aMetacelloRepositoriesSpec project repositorySpec)
			description: self;
			yourself.
	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec addMember 
			name: spec name;
			spec: spec;
			yourself)
%

category: '*metacello-mc'
method: String
fetchRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doFetchRequiredFromArray: (Array with: self).
%

category: '*metacello-mc'
method: String
loadRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doLoadRequiredFromArray: (Array with: self).
%

category: '*metacello-mc'
method: String
mergeIntoMetacelloRepositories: aMetacelloRepositoriesSpec

	| spec |
	spec := 
		(aMetacelloRepositoriesSpec project repositorySpec)
			description: self;
			yourself.
	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec mergeMember 
			name: spec name;
			spec: spec;
			yourself)
%

category: '*metacello-mc'
method: String
packageFileSpecFor: aMetacelloPackagesSpec

	^(aMetacelloPackagesSpec project packageSpec)
			file: self;
			yourself
%

category: '*metacello-mc'
method: String
recordRequiredForMetacelloMCVersion: aMetacelloMCVersion

	^aMetacelloMCVersion doRecordRequiredFromArray: (Array with: self).
%

category: '*metacello-mc'
method: String
removeFromMetacelloRepositories: aMetacelloRepositoriesSpec

	aMetacelloRepositoriesSpec addMember: 
		(aMetacelloRepositoriesSpec removeMember 
			name: self;
			yourself)
%

category: '*metacello-mc'
method: String
resolvePackageSpecsNamedForMetacelloMCVersion: aMetacelloMCVersion visited: visited ifAbsent: aBlock
    ^ aMetacelloMCVersion
        allPackagesForSpecs: {(aMetacelloMCVersion packageNamed: self ifAbsent: aBlock)}
        visited: visited
%

category: '*metacello-core'
method: Symbol
asMetacelloAttributeList
    ^ {self}
%

category: '*metacello-core'
method: Symbol
asMetacelloAttributePath
    ^ ((AllUsers userWithId: 'CodeLibrarianUser') objectNamed: 'MetacelloMethodSectionPath') with: {self}
%

category: '*metacello-core'
method: Symbol
setForDo: aBlock withInMetacelloConfig: aMetacelloConstructore
    aMetacelloConstructore setFor: {self} do: aBlock
%

category: '*metacello-core'
method: Symbol
setForVersion: aString withInMetacelloConfig: aMetacelloConstructore
    aMetacelloConstructore setFor: {self} version: aString
%

category: '*metacello-core'
method: Symbol
setPostLoadDoItInMetacelloSpec: aMetacelloSpec
  self size = 0
    ifTrue: [ self error: 'Invalid selector' ].
  aMetacelloSpec
    setPostLoadDoIt:
      (aMetacelloSpec project valueHolderSpec
        value: self;
        yourself)
%

category: '*metacello-core'
method: Symbol
setPreLoadDoItInMetacelloSpec: aMetacelloSpec
  self size = 0
    ifTrue: [ self error: 'Invalid selector' ].
  aMetacelloSpec
    setPreLoadDoIt:
      (aMetacelloSpec project valueHolderSpec
        value: self;
        yourself)
%

category: '*metacello-core'
method: Collection
asMetacelloAttributeList
    ^ self
%

category: '*metacello-core'
method: Collection
setForDo: aBlock withInMetacelloConfig: aMetacelloConstructore
    aMetacelloConstructore setFor: self do: aBlock
%

category: '*metacello-core'
method: BlockClosure
setPackage: aString withInMetacelloConfig: aMetacelloConfig

	aMetacelloConfig setPackage: aString withBlock: self
%

category: '*metacello-core'
method: Collection
setRequiresInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setRequires: self asArray.
%

category: '*metacello-core'
method: String
setRequiresInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setRequires: { self }.
%

category: '*metacello-core'
method: Collection
setIncludesInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setIncludes: self asArray.
%

category: '*metacello-core'
method: String
setIncludesInMetacelloPackage: aMetacelloPackageSpec

	aMetacelloPackageSpec setIncludes: { self }.
%

category: '*Metacello-GsCypress-MC'
method: AbstractDictionary
at: key ifPresent: aBlock
	"Lookup the given key in the receiver. If it is present, answer the value of evaluating the given block with the value associated with the key. Otherwise, answer nil."

	| v |
	v := self at: key ifAbsent: [^ nil].
	^ aBlock value: v
%

# methods needed to run Tonel load/save as SystemUser 

category: 'TEMPORARY Tonel support methods'

classmethod: Dictionary
newFromPairs: anArray
  "Answer an instance of me associating (anArray at:i) to (anArray at: i+i)
	 for each odd i.  anArray must have an even number of entries.
	  Dictionary newFromPairs: {'Red' . Color red . 'Blue' . Color blue . 'Green' . Color green}. "

  | newDictionary |
  newDictionary := self new: anArray size / 2.
  1 to: anArray size - 1 by: 2 do: [ :i | newDictionary at: (anArray at: i) put: (anArray at: i + 1) ].
  ^ newDictionary
%
method: CharacterCollection
endsWith: suffix
  "Answer whether the tail end of the receiver is the same as suffix.
	 The comparison is case-sensitive."

  | ofs |
  suffix size == 0
    ifTrue: [ ^ false ].
  (ofs := self size - suffix size) < 0
    ifTrue: [ ^ false ].
  ^ self at: ofs + 1 equals: suffix	"
  'Elvis' endsWith: 'vis'
  'Elvis' endsWith: ''
"
%
method: CharacterCollection
trimBoth
  "Trim separators from both sides of the receiving string."

  ^ self trimBoth: [ :char | char isSeparator ]
%
method: CharacterCollection
trimBoth: aBlock
  "Trim characters satisfying the condition given in aBlock from both sides of the receiving string."

  ^ self trimLeft: aBlock right: aBlock
%
method: CharacterCollection
trimLeft: aLeftBlock right: aRightBlock
  "Trim characters satisfying the condition given in aLeftBlock from the left side and aRightBlock from the right sides of the receiving string."

  | left right |
  left := 1.
  right := self size.
  [ left <= right and: [ aLeftBlock value: (self at: left) ] ]
    whileTrue: [ left := left + 1 ].
  [ left <= right and: [ aRightBlock value: (self at: right) ] ]
    whileTrue: [ right := right - 1 ].
  ^ self copyFrom: left to: right
%
method: CharacterCollection
trimLeft: aBlock
  "Trim characters satisfying the condition given in aBlock from the left side of the receiving string."

  ^ self trimLeft: aBlock right: [ :char | false ]
%
method: CharacterCollection
trimRight: aBlock
  "Trim characters satisfying the condition given in aBlock from the right side of the receiving string."

  ^ self trimLeft: [ :char | false ] right: aBlock
%
method: CharacterCollection
trimRight
  "Trim separators from the right side of the receiving string."

  ^ self trimRight: [ :char | char isSeparator ]
%
method: CharacterCollection
trimLeft
  "Trim separators from the left side of the receiving string."

  ^ self trimLeft: [ :char | char isSeparator ]
%

method: PositionableStreamPortable
originalContents
  "Answer the receiver's actual contents collection, NOT a copy.  1/29/96 sw"

  ^ collection
%
method: Collection
sorted: sortBlock
  ^ self sortWithBlock: sortBlock
%
method: Collection
ifNotEmpty: aBlock
  ^ self size == 0
    ifFalse: [ aBlock cull: self ]
%
method: Object
flag: ignored
%
method: Stream
<< items
  items putOn: self
%
method: CharacterCollection
putOn: aStream
  ^ aStream nextPutAll: self
%
method: SequenceableCollection
writeStream
  ^ WriteStreamPortable on: self
%        
method: CharacterCollection
findString: subString startingAt: startIndex caseSensitive: aBoolean
  ^ self _findString: subString startingAt: startIndex ignoreCase: aBoolean not
%
method: CharacterCollection 
trimRight
  "Trim separators from the right side of the receiving string."
    
  ^ self trimRight: [ :char | char isSeparator ] 
%
method: CharacterCollection
trimRight: aBlock
  "Trim characters satisfying the condition given in aBlock from the right side of the receiving string."
    
  ^ self trimLeft: [ :char | false ] right: aBlock
%
method: CharacterCollection
trimLeft: aLeftBlock right: aRightBlock
  "Trim characters satisfying the condition given in aLeftBlock from the left side and aRightBlock from the right sides of the receiving string."

  | left right |
  left := 1.
  right := self size.
  [ left <= right and: [ aLeftBlock value: (self at: left) ] ]
    whileTrue: [ left := left + 1 ].
  [ left <= right and: [ aRightBlock value: (self at: right) ] ]
    whileTrue: [ right := right - 1 ].
  ^ self copyFrom: left to: right
%
method: CharacterCollection
trimLeft
  "Trim separators from the left side of the receiving string."

  ^ self trimLeft: [ :char | char isSeparator ]
%
method: CharacterCollection
trimLeft: aBlock
  "Trim characters satisfying the condition given in aBlock from the left side of the receiving string."

  ^ self trimLeft: aBlock right: [ :char | false ]
%
method: Collection
select: selectBlock thenDo: doBlock
  "Utility method to improve readability."

  ^ (self select: selectBlock) do: doBlock
%
method: SequenceableCollection
beginsWith: aSequenceableCollection
  (aSequenceableCollection isEmpty
    or: [ self size < aSequenceableCollection size ])
    ifTrue: [ ^ false ].
  aSequenceableCollection
    withIndexDo: [ :each :index |
      (self at: index) ~= each
        ifTrue: [ ^ false ] ].
  ^ true
%
method: SequenceableCollection
withIndexDo: elementAndIndexBlock
  "Just like with:do: except that the iteration index supplies the second argument to the block."

  1 to: self size do: [ :index | elementAndIndexBlock value: (self at: index) value: index ]
%

category: '*tonel-gemstonecommon-core'
method: SequenceableCollection
pairsCollect: aBlock 
	"Evaluate aBlock with my elements taken two at a time, and return an Array with the results"

	^ (1 to: self size // 2) collect:
		[:index | aBlock value: (self at: 2 * index - 1) value: (self at: 2 * index)]
"
#(1 'fred' 2 'charlie' 3 'elmer') pairsCollect:
	[:a :b | b, ' is number ', a printString]
"
%
category: '*tonel-gemstonecommon-core'
method: PositionableStreamPortable
match: subCollection
  "Set the access position of the receiver to be past the next occurrence of the subCollection. Answer whether subCollection is found.  No wildcards, and case does matter."

  | pattern startMatch |
  pattern := ReadStreamPortable on: subCollection.
  startMatch := nil.
  [ pattern atEnd ]
    whileFalse: [ 
      self atEnd
        ifTrue: [ ^ false ].
      self next = pattern next
        ifTrue: [ 
          pattern position = 1
            ifTrue: [ startMatch := self position ] ]
        ifFalse: [ 
          pattern position: 0.
          startMatch
            ifNotNil: [ 
              self position: startMatch.
              startMatch := nil ] ] ].
  ^ true
%
category: '*tonel-gemstonecommon-core'
method: GsFile
<< items

 	items putOn: self.
	
	^ self
%
category: '*tonel-gemstonecommon-core'
method: Collection
flattenOn: aStream

	self do: [ :each | (each isCollection and: [each isString not]) 
						ifTrue: [each flattenOn: aStream]
						ifFalse: [aStream nextPut: each]].
%
category: '*tonel-gemstonecommon-core'
method: Collection
flattened
	
	"Flattens a collection of collections (no matter how many levels of collections exist).
	Strings are considered atoms and, as such, won't be flattened
	
	Examples:
	#(1 #(2 3) #(4 (#5))) flattened returns #(1 2 3 4 5) 
	#('string1' #('string2' 'string3')) flattened returns #('string1' 'string2' 'string3')"
	
	^ Array streamContents: [ :stream | self flattenOn: stream].
%
category: '*tonel-gemstonecommon-core'
method: Collection
asDictionary

  | dict |
  dict := Dictionary new.
  self do: [:assoc |
    dict add: assoc].
  ^ dict
%
category: '*tonel-gemstonecommon-core'
method: CharacterCollection
withLineEndings: lineEndingString

	| stream |
	
	stream := nil.
	self lineIndicesDo: [ :start :endWithoutDelimiters :end |
		(stream isNil and: [ endWithoutDelimiters ~= end ]) ifTrue: [
			(self copyFrom: endWithoutDelimiters + 1 to: end) = lineEndingString ifFalse: [
				stream := WriteStreamPortable with: self copy.
				stream position: start - 1 ]].
		stream ifNotNil: [
			stream next: endWithoutDelimiters - start + 1 putAll: self startingAt: start.
			endWithoutDelimiters = end ifFalse: [
				stream nextPutAll: lineEndingString ]]].
	^stream
		ifNil: [ self ]
		ifNotNil: [ 
			stream position = self size
				ifTrue: [ stream originalContents ]
				ifFalse: [ stream contents ]]
%
category: '*tonel-gemstonecommon-core'
method: CharacterCollection
lineIndicesDo: aBlock
	"execute aBlock with 3 arguments for each line:
	- start index of line
	- end index of line without line delimiter
	- end index of line including line delimiter(s) CR, LF or CRLF"
	
	| cr lf start sz nextLF nextCR |
	start := 1.
	sz := self size.
	cr := Character cr.
	nextCR := self indexOf: cr startingAt: 1.
	lf := Character lf.
	nextLF := self indexOf: lf startingAt: 1.
	[ start <= sz ] whileTrue: [
		(nextLF = 0 and: [ nextCR = 0 ])
			ifTrue: [ "No more CR, nor LF, the string is over"
					aBlock value: start value: sz value: sz.
					^self ].
		(nextCR = 0 or: [ 0 < nextLF and: [ nextLF < nextCR ] ])
			ifTrue: [ "Found a LF"
					aBlock value: start value: nextLF - 1 value: nextLF.
					start := 1 + nextLF.
					nextLF := self indexOf: lf startingAt: start ]
			ifFalse: [ 1 + nextCR = nextLF
				ifTrue: [ "Found a CR-LF pair"
					aBlock value: start value: nextCR - 1 value: nextLF.
					start := 1 + nextLF.
					nextCR := self indexOf: cr startingAt: start.
					nextLF := self indexOf: lf startingAt: start ]
				ifFalse: [ "Found a CR"
					aBlock value: start value: nextCR - 1 value: nextCR.
					start := 1 + nextCR.
					nextCR := self indexOf: cr startingAt: start ]]]
%
category: '*tonel-gemstonecommon-core'
method: CharacterCollection
join: aCollection 
	"'*' join: #('WWWWW' 'W  EW' 'zzzz')
		->  'WWWWW*W  EW*zzzz' "
	^ self class new: (aCollection size * self size) streamContents: [:stream | 
			aCollection
				do: [:each | stream nextPutAll: each asString] 
				separatedBy: [stream nextPutAll: self]]
%


category: '*ston-core'
method: Boolean
stonContainSubObjects 
	^ false
%

category: '*ston-core'
method: Boolean
stonOn: stonWriter
	stonWriter writeBoolean: self
%

category: '*ston-gemstonecommon-core'
classmethod: AbstractDictionary
fromSton: stonReader
	"Instances of STON mapClass will be read directly and won't arrive here.
	Other (sub)classes will use this method."
	
	| dictionary |
	dictionary := self new.
	stonReader parseMapDo: [ :key :value |
		dictionary at: key put: value ].
	^ dictionary
%

! ------------------- Instance methods for AbstractDictionary

category: '*ston-gemstonecommon-core'
method: AbstractDictionary
stonOn: stonWriter
	"Instances of STON mapClass will be encoded directly, without a class tag.
	Other (sub)classes will be encoded with a class tag and will use a map representation. "
	
	self class == ((AllUsers userWithId: 'CodeLibrarianUser') objectNamed: 'STON') mapClass
		ifTrue: [ 
			stonWriter writeMap: self ]
		ifFalse: [ 
			stonWriter 
				writeObject: self 
				do: [ stonWriter encodeMap: self ] ]
%

category: '*ston-gemstonecommon-core'
method: AbstractDictionary
stonProcessSubObjects: block
	"Execute block to (potentially) change each of my subObjects.
	In general, all instance and indexable variables are processed.
	Overwrite when necessary. Not used when #stonContainSubObjects returns false."
	(self class isVariable and: [ self class isBytes not and: [self class isIndexable]])
		ifTrue: [
			1 to: self _basicSize do: [ :each | |val|			
									val:= (block value: (self basicAt: each)).
									self basicAt: each put: val ] ]"
							super stonProcessSubObjects: block"
%
category: '*ston-gemstonecommon-core'
method: ByteArray
stonOn: stonWriter
  "Use a hex representation"

  stonWriter writeObject: self listSingleton: self asHexString
%
category: '*ston-gemstonecommon-core'
method: CharacterCollection
stonContainSubObjects
  ^ false
%

category: '*ston-gemstonecommon-core'
method: CharacterCollection
stonOn: stonWriter
	stonWriter writeString: self
%

category: '*ston-core'
method: Class
stonName
	"Override to encode my instances using a different class name."
	
	^ self name
%

category: '*ston-core'
classmethod: Collection
fromSton: stonReader
	| collection |
	collection := self new.
	stonReader parseListDo: [ :each |
		collection add: each ].
	^ collection
%

! ------------------- Instance methods for Collection

category: '*ston-core'
method: Collection
stonOn: stonWriter
	stonWriter writeObject: self do: [
		stonWriter encodeList: self ]
%

category: '*ston-gemstonecommon-core'
classmethod: Date
fromSton: stonReader

	^ self fromStream: stonReader parseListSingleton readStream usingFormat: #(3 2 1 $- 1 1)
%

category: '*ston-gemstonecommon-core'
method: Date
stonOn: stonWriter
  "Use an ISO style YYYYMMDD representation"

  stonWriter
    writeObject: self
    listSingleton: (self asStringUsingFormat: #(3 2 1 $- 1 1 $: false))
%
category: '*ston-gemstonecommon-core'
method: DateAndTime
stonOn: stonWriter
	"Use an ISO representation with all details"
	
	stonWriter writeObject: self listSingleton: 
		(String streamContents: [ :stream |
			self printOn: stream ])
%
category: '*ston-gemstonecommon-core'
method: Object
stonProcessSubObjects: block
  "Execute block to (potentially) change each of my subObjects.
	In general, all instance and indexable variables are processed.
	Overwrite when necessary. Not used when #stonContainSubObjects returns false."

  1 to: self class instSize do: [ :each | self instVarAt: each put: (block value: (self instVarAt: each)) ].
  (self class isVariable and: [ self class isBytes not ])
    ifTrue: [ 1 to: self _basicSize do: [ :each | self basicAt: each put: (block value: (self basicAt: each)) ] ]
%
category: '*ston-gemstonecommon-core'
classmethod: Time
fromSton: stonReader
  ^ self fromString: stonReader parseListSingleton usingFormat: #($: true false)
%

! ------------------- Instance methods for Time

category: '*ston-gemstonecommon-core'
method: Time
stonOn: stonWriter
  "Use an ISO style HH:MM:SS representation"

  stonWriter
    writeObject: self
    listSingleton: (self asStringUsingFormat: #($: true false))
%

category: '*ston-gemstonecommon-core'
method: UnorderedCollection
stonProcessSubObjects: block
	"Execute block to (potentially) change each of my subObjects.
	In general, all instance and indexable variables are processed.
	Overwrite when necessary. Not used when #stonContainSubObjects returns false."
"increase the starting index by 4 because of the private inst vars in UnorderedCollection"

	5 to: self class instSize do: [ :each |
		self instVarAt: each  put: (block value: (self instVarAt: each)) ].
	(self class isVariable and: [ self class isBytes not ])
		ifTrue: [
			1 to: self _basicSize do: [ :each |
				self basicAt: each put: (block value: (self basicAt: each)) ] ]
%




commit
logout
