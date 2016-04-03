activations
doCreateStone
	super doCreateStone.
	self arguments size > 2
		ifTrue: [ self readAndProcessSmalltalkCIConfig: (self arguments at: 3) ].
