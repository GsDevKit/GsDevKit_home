api
sourceRepoWithRegistryName: registryName
  ^ sourceRepos
    detect: [ :sourceRepo | sourceRepo registryName = registryName ]
    ifNone: [ nil ]