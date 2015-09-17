activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing arguments' ].
	Author
		useAuthor: 'gsDevKit'
		during: [ 
			self installTode.
			(Smalltalk os environment at: 'GS_TRAVIS' ifAbsent: [  ]) = 'true'
				ifTrue: [ self installTravisTode2 ]
				ifFalse: [ self installTode2 ] ].
	self exitSuccess