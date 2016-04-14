gsdevkit api
gitRepositoryNamed: aString
	^ (GsDevKitSharedReposGit home: self _home parent: self)
		repositoryName: aString;
		yourself