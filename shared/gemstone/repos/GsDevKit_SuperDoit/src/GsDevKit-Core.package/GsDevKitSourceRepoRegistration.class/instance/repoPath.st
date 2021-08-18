Accessing
repoPath
  ^ repoPath ifNil: [ repoPath := self defaultRepoPath ]