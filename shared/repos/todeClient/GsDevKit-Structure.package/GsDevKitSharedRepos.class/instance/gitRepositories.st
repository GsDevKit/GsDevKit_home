gsdevkit api
gitRepositories
	^ (self asFileReference directories collect: [ :dir | self gitRepositoryNamed: dir basename ])
		select: [ :each | each isGitRepository ]