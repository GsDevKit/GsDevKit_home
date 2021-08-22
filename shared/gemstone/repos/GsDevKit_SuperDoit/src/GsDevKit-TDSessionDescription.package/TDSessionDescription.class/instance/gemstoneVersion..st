accessing
gemstoneVersion: aString
	| tokens |
	tokens := aString subStringsDelimitedBy: $..
	tokens size <= 2
		ifTrue: [ self error: 'GemStone version must have a minimum of three version fields: ''3.2.0''' ].
	gemstoneVersion := aString