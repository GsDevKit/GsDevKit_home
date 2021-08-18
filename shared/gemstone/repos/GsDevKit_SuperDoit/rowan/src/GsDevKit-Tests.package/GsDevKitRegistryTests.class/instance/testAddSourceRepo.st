tests
testAddSourceRepo
  | r s s1 |
  r := self emptyRegistry.
  s := r newSourceRepoWithRegistryName: 'testRepo1'.
  s1 := r sourceRepoWithRegistryName: 'testRepo1'.
  self assert: s1 class == GsDevKitSourceRepoRegistration.
  self assert: s == s1.
  self assert: s registryName = 'testRepo1'.
  self assert: s sourcePath = (Path * 'repos/testRepo1').
  self assert: s repoPath = 'repos/testRepo1'