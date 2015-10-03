activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size ~= 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Wrong number of arguments' ].
	Transcript cr.
	self patchTodeRoot