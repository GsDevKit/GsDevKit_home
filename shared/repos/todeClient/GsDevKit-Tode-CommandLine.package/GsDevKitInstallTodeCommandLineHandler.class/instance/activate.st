activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	self shouldNotBeForeignStone.
	Author
		useAuthor: 'gsDevKit'
		during: [ 
			self installTode.
			self installTode2 ].
	Transcript cr.
	self exitSuccess