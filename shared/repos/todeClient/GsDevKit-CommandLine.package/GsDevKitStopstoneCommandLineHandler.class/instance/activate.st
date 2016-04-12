activation
activate
	| argsArray |
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size ~= 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Wrong number of arguments (' , self arguments size printString , ')' ].
	[ self shouldNotBeForeignStone ]
		on: STONReaderError
		do: [ :ignored | 
			"if stoneInfo is corrupted, then the stone could not have been started."
			^ self exitSuccess ].
	argsArray := #().
	Transcript
		cr;
		show: (self runShellCommand: (self gs_serverBinGs / 'stopGemstone') pathString args: argsArray);
		cr.
	self exitSuccess