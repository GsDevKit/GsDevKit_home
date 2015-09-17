activation
activate
	| argsArray |
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	argsArray := self produceNetldiArgs.
	Transcript cr; show: (self runShellCommand: (self gemstoneBin / 'startnetldi') pathString args: argsArray).
	self exitSuccess