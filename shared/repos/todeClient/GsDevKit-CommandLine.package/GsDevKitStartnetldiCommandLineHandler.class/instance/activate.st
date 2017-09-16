activation
activate
	| argsArray |
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	self shouldNotBeForeignStone.
	argsArray := {
		'-c'.
		(self gemstoneBin / 'startnetldi') pathString.
	},
		self produceNetldiArgs.
	Transcript
		cr;
		show: (self runShellCommand: ExternalUnixOSProcess bashShellPath  args: argsArray);
		cr.
	self exitSuccess