activations
createStone
	super createStone.
	self arguments size > 2
		ifTrue: [ self readAndProcessSmalltalkCIConfig: (self arguments at: 3) ].
	self exitSuccess