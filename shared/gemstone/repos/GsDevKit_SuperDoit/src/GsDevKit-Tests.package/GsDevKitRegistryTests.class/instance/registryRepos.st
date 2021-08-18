resources
registryRepos
  ^ {(GsDevKitSourceRepoRegistration new
    registryName: 'testRepo1';
    repoPath: 'repos/testRepo1';
    yourself).
  (GsDevKitSourceRepoRegistration new
    registryName: 'testRepo2';
    repoPath: '/git';
    yourself)}