tests
testSharedReposRepositoryAccess
	| todeClientRepo |
	todeClientRepo := self _home shared repos / 'todeClient'.
	self assert: todeClientRepo isSmalltalkCIRepository.
	self deny: (todeClientRepo smalltalkCI compatibleSpecs select: [ :each | each baseline notNil ]) isEmpty