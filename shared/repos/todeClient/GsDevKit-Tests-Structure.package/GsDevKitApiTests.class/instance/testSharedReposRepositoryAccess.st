tests
testSharedReposRepositoryAccess
	| todeClientRepo foundTodeClient foundSmalltalkCI foundTode |
	todeClientRepo := self _home shared repos / 'todeClient'.
	self assert: todeClientRepo isSmalltalkCIRepository.
	self deny: todeClientRepo smalltalkCI compatibleSpecs isEmpty.
	self deny: (todeClientRepo smalltalkCI compatibleSpecs select: [ :each | each baseline notNil ]) isEmpty.
	foundTode := foundSmalltalkCI := foundTodeClient := false.
	self _home shared repos gitRepositories
		do: [ :gitRepo | 
			gitRepo isSmalltalkCIRepository
				ifTrue: [ 
					gitRepo
						smalltalkClientBaselineSpecsDo: [ :ciLoadSpec | 
							ciLoadSpec baseline = 'TodeClient'
								ifTrue: [ foundTodeClient := true ].
							ciLoadSpec baseline = 'Tode'
								ifTrue: [ foundTode := true ].
							ciLoadSpec baseline = 'SmalltalkCITests'
								ifTrue: [ foundSmalltalkCI := true ] ] ] ].
	self
		assert: foundTode;
		assert: foundSmalltalkCI;
		assert: foundTodeClient