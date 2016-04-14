gsdevkit api
lockClientProject
	| ci registry |
	self isSmalltalkCIRepository
		ifFalse: [ ^ self ].
	ci := self smalltalkCI.
	registry := MetacelloProjectRegistration registry.
	self
		smalltalkClientBaselineSpecsDo: [ :ciLoadSpec | 
			registry
				registrationForClassNamed: ciLoadSpec baseline
				ifAbsent: [ 
					Metacello new
						baseline: ciLoadSpec baseline;
						repository: (ciLoadSpec loadRepositoryFor: ci);
						lock ] ]