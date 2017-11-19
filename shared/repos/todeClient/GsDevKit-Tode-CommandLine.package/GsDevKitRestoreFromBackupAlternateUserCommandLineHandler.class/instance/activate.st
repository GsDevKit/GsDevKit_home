activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 4
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	super activate