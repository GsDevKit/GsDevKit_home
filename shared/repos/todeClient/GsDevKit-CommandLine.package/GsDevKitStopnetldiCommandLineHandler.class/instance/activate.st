activation
activate
	| argsArray sess |
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	sess := self sessionDescriptionIfAbsent: [ :ignored |  ].
	argsArray := sess ifNil: [ {(self stoneInfo netLDI)} ] ifNotNil: [ {(sess netLDI)} ].
	Transcript
		cr;
		show: (self runShellCommand: (self gemstoneBin / 'stopnetldi') pathString args: argsArray);
		cr.
	self exitSuccess