activation
applyRuntimeOptions
	self arguments size > (self smalltalkCIConfigArgIndex -1)
		ifTrue: [ self readAndProcessSmalltalkCIConfig: (self arguments at: self smalltalkCIConfigArgIndex) ].
