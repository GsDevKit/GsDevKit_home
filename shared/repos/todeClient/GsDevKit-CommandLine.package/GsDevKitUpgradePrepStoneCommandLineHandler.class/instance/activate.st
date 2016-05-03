activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 3
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	Transcript cr.
	self upgradeStone