activation
applyRuntimeOptions
	self arguments size > 1
		ifTrue: [ self readAndProcessSmalltalkCIConfig: (self arguments at: 2) ].

	self exitSuccess