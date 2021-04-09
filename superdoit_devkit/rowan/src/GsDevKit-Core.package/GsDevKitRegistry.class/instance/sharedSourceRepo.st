defaults
sharedSourceRepo
  "Answer the shared source repo. This is the default repo is no other is specified"

  ^ self sourceRepos
    detect: [ :repo | repo registryName = 'shared' ]
    ifNone: [ self initializeSharedSourceRepo ]