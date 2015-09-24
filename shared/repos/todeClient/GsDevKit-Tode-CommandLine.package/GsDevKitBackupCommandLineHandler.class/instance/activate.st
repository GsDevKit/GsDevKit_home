activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 2
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	Author
		useAuthor: 'gsDevKit'
		during: [ self backup  ].
	Transcript cr.
	self exitSuccess