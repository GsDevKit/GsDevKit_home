activation
runSmalltalkCITests
	self arguments size > 1
		ifTrue: [ 
			| ci |
			ci := self readSmalltalkCISpec: (self arguments at: 2) ].
	self exitSuccess