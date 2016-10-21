activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing <stone-name> argument' ].
	Transcript cr.
	self doSetOptions.
	self exitSuccess