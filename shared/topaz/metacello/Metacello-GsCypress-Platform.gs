! Package: Metacello-GsCypress-Platform


! Remove existing behavior from package Metacello-GsCypress-Platform
!!!! This can be cleaned up when some package functionality is moved to the base system.

doit
| packageName |
packageName := 'Metacello-GsCypress-Platform'.
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
										each isEmpty not and: [
											(each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])
														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]])
											or: [each first ~= $*]]]
					]
					ifFalse: [
							"*packagename[-anything]"
						toRemove := aClass categoryNames select: 
										[:each |
										each isEmpty not and: [
											each first = $* and: [(each size = (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2])
														or: [each size > (packageName size + 1) and: [(each findStringNoCase: packageName startingAt: 2) = 2 and: [(each at: packageName size + 2) = $-]]]]]]
					].
				toRemove do: [:each | aClass removeCategory: each].
			]
		]
	]
].
true.
%


! Class Declarations

! Class Extensions

! Class Extension for MetacelloPlatform

! ------------------- Instance methods for MetacelloPlatform

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
createRepository: aRepositorySpec
  aRepositorySpec type = 'globalrepo'
    ifTrue: [ 
      | url |
      "primarily used for testing"
      url := CypressUrl absoluteFromText: aRepositorySpec description.
      ^ self repositoryFromUrl: (CypressUrl absoluteFromText: (self globalNamed: url locator)) ].
  ^ self repositoryFromUrl: (CypressUrl absoluteFromText: aRepositorySpec description)
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
defaultDirectory
  ^ GsFile _expandEnvVariable: 'PWD' isClient: false.
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
detectMax: aBlock in: aCollection
  "Evaluate aBlock with each of the receiver's elements as the argument. 
	Answer the element for which aBlock evaluates to the highest magnitude.
	If collection empty, return nil.  This method might also be called elect:."

  | maxElement maxValue val |
  aCollection do: [ :each | maxValue == nil
        ifFalse: [ val := aBlock value: each.
          (val notNil and: [ (val := aBlock value: each) > maxValue ])
            ifTrue: [ maxElement := each.
              maxValue := val ] ]
        ifTrue: [ "first element"
          maxElement := each.
          maxValue := aBlock value: each ] ].
  ^ maxElement
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
directoryExists: aDirectoryPath
  ^ CypressFileUtilities current directoryExists: aDirectoryPath
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
directoryFromPath: directoryPath relativeTo: anotherDirectoryPath
  "Get a handle on the following path: anotherDirectoryPath/adirectoryPath"

  ^CypressFileUtilities current directoryFromPath: directoryPath relativeTo: anotherDirectoryPath
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
ensureDirectoryExists: aDirectoryPath

  ^ CypressFileUtilities current ensureDirectoryExists: aDirectoryPath
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
findDelimitersIn: aString separators: delimiters startingAt: start
  "Answer the index of the character within aString, starting at start, that matches one of the delimiters. If aString does not contain any of the delimiters, answer size + 1."

  start to: aString size do: [ :i | 
    | e |
    e := aString at: i.
    delimiters
      do: [ :delim | 
        delim = e
          ifTrue: [ ^ i ] ] ].
  ^ aString size + 1
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
findTokens: delimiters in: aString
  "Answer the collection of tokens that result from parsing aString.  Return strings between the delimiters.  Any character in the Collection delimiters marks a border.  Several delimiters in a row are considered as just one separation.  Also, allow delimiters to be a single character."

  | tokens keyStart keyStop separators |
  tokens := OrderedCollection new.
  separators := (delimiters isKindOf: Character)
    ifTrue: [ Array with: delimiters ]
    ifFalse: [ delimiters ].
  keyStop := 1.
  [ keyStop <= aString size ]
    whileTrue: [ 
      keyStart := self skipDelimitersIn: aString separators: separators startingAt: keyStop.
      keyStop := self findDelimitersIn: aString separators: separators startingAt: keyStart.
      keyStart < keyStop
        ifTrue: [ tokens add: (aString copyFrom: keyStart to: keyStop - 1) ] ].
  ^ tokens
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
fullNameForDirectory: aDirectoryPath
  ^ aDirectoryPath
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
isCharacter: anObject
  ^ anObject isKindOf: Character
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
isNumber: anObject
  ^ anObject _isNumber
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
isString: anObject
  ^ anObject isKindOf: CharacterCollection
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
isSymbol: anObject
  ^ anObject _isSymbol
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
matchPattern: patternString in: aString
  | special pattern keyStart keyStop char |
  special := {$#.
  $*}.
  pattern := OrderedCollection new.
  keyStart := keyStop := 1.
  [ keyStop <= patternString size ]
    whileTrue: [ 
      keyStop := self findDelimitersIn: patternString separators: special startingAt: keyStart.
      keyStart <= keyStop
        ifTrue: [ 
          keyStart = keyStop
            ifTrue: [ keyStart := keyStart + 1 ]
            ifFalse: [ 
              pattern add: (patternString copyFrom: keyStart to: keyStop - 1).
              keyStart := keyStop + 1 ].
          keyStop <= patternString size
            ifTrue: [ 
              char := patternString at: keyStop.
              char == $#
                ifTrue: [ char := $? ].
              pattern add: char ] ] ].
  ^ aString _matchPatternNoCase: pattern asArray
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
recursiveDelete: aDirectoryPath
  "delete this directory and all children of it"

  ^ CypressFileUtilities current deleteAll: aDirectoryPath
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
removeFrom: aCollection allFoundIn: anotherCollection
  ^ aCollection removeAllPresent: anotherCollection
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
repositoryFromUrl: anUrl
  | scheme |
  scheme := anUrl scheme.
  scheme = 'filetree'
    ifTrue: [ | locator |
      locator := anUrl locator.
      locator last = $/
        ifFalse: [ locator := locator , '/' ].
      ^ CypressAbstractRepository onUrl: (CypressUrl absoluteFromText: 'cypresslax:' , locator) alias: '' ].
  self error: 'Unknown repository scheme: ' , scheme printString
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
skipDelimitersIn: aString separators: delimiters startingAt: start
  "Answer the index of the character within aString, starting at start, that does NOT match one of the delimiters. If aString does not contain any of the delimiters, answer size + 1.  Assumes the delimiters to be a non-empty string."

  start to: aString size do: [ :i | delimiters detect: [ :delim | delim = (aString at: i) ] ifNone: [ ^ i ] ].
  ^ aString size + 1
%

category: '*Metacello-GsCypress-Platform'
method: MetacelloPlatform
sort: aCollection with: aBlock
  ^ aCollection sortWithBlock: aBlock
%

! Class initializers 

doit
true.
%



! End of Package: Metacello-GsCypress-Platform


