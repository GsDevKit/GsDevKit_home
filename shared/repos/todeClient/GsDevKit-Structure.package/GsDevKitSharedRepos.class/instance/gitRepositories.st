gsdevkit api
gitRepositories
	^ self asFileReference directories select: [ :dir | (self gitRepositoryNamed: dir basename) isGitRepository ]