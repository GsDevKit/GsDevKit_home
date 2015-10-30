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
		useAuthor: self authorId
		during: [ 
			self loadTode.
			self loadTode2 ].
	Transcript cr.
	self exitSuccess
