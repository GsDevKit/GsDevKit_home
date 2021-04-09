parsing
processNextCommand
	| line words command commandSelector |
	stream atEnd
		ifTrue: [ 
			done := true.
			^ nil ].
	line := stream nextLine trimSeparators.
	words := line subStrings.
	words isEmpty
		ifTrue: [ ^ nil ].

	command := words first asUppercase.
	(command at: 1) == $#
		ifTrue: [ ^ self scriptComment: line ].
	command = 'DOIT'
		ifTrue: [ ^ self doit: self nextChunk ].
	command = 'METHOD'
		ifTrue: [ ^ self method: self nextChunk ].
	command = 'METHOD:'
		ifTrue: [ ^ self method: self nextChunk className: (words at: 2) ].
	command = 'CLASSMETHOD:'
		ifTrue: [ ^ self classMethod: self nextChunk className: (words at: 2) ].
	command = 'INPUT'
		ifTrue: [ ^ self input: self nextChunk ].
	command = 'OPTIONS'
		ifTrue: [ ^ self options: self nextChunk ].
	command = 'CUSTOMOPTIONS'
		ifTrue: [ ^ self customOptions: self nextChunk ].
	command = 'INSTVARS'
		ifTrue: [ ^ self instVarNamesCommand: self nextChunk ].
	command = 'PROJECTSHOME'
		ifTrue: [ ^ self projectsHomeCommand: self nextChunk ].
	command = 'SPECS'
		ifTrue: [ ^ self specsCommand: self nextChunk ].
	command = 'SPECURLS'
		ifTrue: [ ^ self specUrls: self nextChunk ].
	command = 'USAGE'
		ifTrue: [ ^ self usageCommand: self nextChunk ].
	commandSelector := (command asLowercase , ':') asSymbol.
	(self respondsTo: commandSelector)
		ifTrue: [ ^ self perform: commandSelector with: self nextChunk ].
	self error: 'Unknown command ' , command printString