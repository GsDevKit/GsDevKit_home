setUp
setUpRegistry
  registry := GsDevKitRegistry
    forGsDevKitOnPath:
      (FileReference
        fileSystem: self registryFileSystem
        path: (Path from: '/GsDevKitRoot')).
  self registryRepos
    do: [ :sourceRepoRegistration | 
      registry
        newSourceRepoWithRegistryName: sourceRepoRegistration registryName
        repoPath: sourceRepoRegistration repoPath ].
  self registryStones
    do: [ :stoneRegistration | 
      stoneRegistration class == GsDevKitStoneRegistration
        ifTrue: [ 
          registry
            newStoneWithRegistryName: stoneRegistration registryName
            stonePath: stoneRegistration stonePath ]
        ifFalse: [ 
          stoneRegistration class == GsDevKitRemoteStoneRegistration
            ifTrue: [ 
              registry
                newRemoteStoneWithRegistryName: stoneRegistration registryName
                stonePath: stoneRegistration stonePath ] ] ].
  self registryGroups
    do: [ :stoneGroupRegistration | 
      registry
        newStoneGroupWithRegistryName: stoneGroupRegistration registryName
        stoneRegistryNames: stoneGroupRegistration stoneRegistryNames ].
  ^ registry