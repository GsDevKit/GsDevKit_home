activation
activate
	| argsArray |
	self activateHelp
		ifTrue: [ ^ self ].
	(self arguments size ~= 1 )
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Wrong number of arguments (' , self arguments size printString , ')' ].
	self stoneInfo isForeignStone
		ifTrue: [ 
			self
				exitFailure:
					'The stone ' , self stoneName printString , ' is a foreign stone and should not be controlled from GsDevKit_home.' ].
	argsArray := #().
	Transcript
		cr;
		show: (self runShellCommand: (self gs_serverBinGs / 'stopGemstone') pathString args: argsArray);
		cr.
	self exitSuccess