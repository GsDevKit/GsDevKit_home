parsing
processNextCommand
	| line words command firstChar commandSelector |
	stream atEnd
		ifTrue: [ 
			done := true.
			^ self ].
	line := stream nextLine trimSeparators.
	words := line subStrings.
	words isEmpty
		ifTrue: [ ^ nil ].
	command := words first asUppercase.
	((firstChar := command at: 1) == $! or: [ firstChar == $# ])
		ifTrue: [ ^ nil ].

	command = 'DOIT'
		ifTrue: [ ^ self doit: self nextChunk ].
	command = 'METHOD'
		ifTrue: [ ^ self method: self nextChunk ].
	command = 'METHOD:'
		ifTrue: [ ^ self method: self nextChunk in: (words at: 2) ].
	command = 'OPTIONS'
		ifTrue: [ ^ self options: self nextChunk ].
	command = 'INSTVARS'
		ifTrue: [ ^ self instVarNames: self nextChunk ].
	command = 'SPECS'
		ifTrue: [ ^ self specSton: self nextChunk ].
	command = 'SPECURLS'
		ifTrue: [ ^ self specUrls: self nextChunk ].
	command = 'USAGE'
		ifTrue: [ ^ self usage: self nextChunk ].
	commandSelector := (command asLowercase , ':') asSymbol.
	(self respondsTo: commandSelector)
		ifTrue: [ ^ self perform: commandSelector with: self nextChunk ].
	self error: 'Unknown command ' , command printString