api
newSourceRepoWithRegistryName: registryName repoPath: path
  ^ self sourceRepos
    add:
      ((GsDevKitSourceRepoRegistration newForRegistry: self)
        registryName: registryName;
        repoPath: path;
        yourself)