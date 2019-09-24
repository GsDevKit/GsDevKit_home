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
	argsArray := self produceNetldiArgs.
	Transcript
		cr;
		show: (self runShellCommand: (self gemstoneBin / 'startnetldi') pathString args: argsArray exitStatus: [:proc |
			| es |
			es := (proc exitStatus bitAnd: 16rFF00) >> 8.
			proc isComplete and: [ es == 0 or: [ es == 1 "information" or: [ es == 2 "warning"] ] ] ]);
		cr.
	self exitSuccess