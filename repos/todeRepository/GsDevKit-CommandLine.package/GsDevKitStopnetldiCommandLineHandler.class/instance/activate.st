activation
activate
	| argsArray |
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	argsArray := {(self stoneInfo netldiName)}.
	Transcript
		cr;
		show: (self runShellCommand: (self gemstoneBin / 'stopnetldi') pathString args: argsArray);
		cr.
	self exitSuccess