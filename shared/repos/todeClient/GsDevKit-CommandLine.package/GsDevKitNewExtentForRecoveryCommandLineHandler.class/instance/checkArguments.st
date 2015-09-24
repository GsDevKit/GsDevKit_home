private
checkArguments
	self arguments size < 1
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing stone name' ].
	self arguments size < 2
		ifTrue: [ 
			self printHelp.
			^ self exitFailure: 'Missing snapshot file path' ]