gsdevkit api
gitRepositoryNamed: aString
	^ (GsDevKitSharedReposGitRepository home: self _home parent: self)
		repositoryName: aString;
		yourself