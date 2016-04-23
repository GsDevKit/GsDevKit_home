testing
isGitRepository
	self repositoryName = 'todeClient'
		ifTrue: [ 
			"embedded in GsDevKit_home repository"
			^ true ].
	^ (self / '.git' / 'config') exists