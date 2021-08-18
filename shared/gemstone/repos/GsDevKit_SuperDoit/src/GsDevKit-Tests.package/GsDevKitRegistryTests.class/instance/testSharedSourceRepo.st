tests
testSharedSourceRepo
  | r sr s1 |
  r := self emptyRegistry.
  sr := r sharedSourceRepo.
  self assert: sr class == GsDevKitSourceRepoRegistration.
  self assert: sr registryName = 'shared'.
  self assert: sr sourcePath = (Path * 'repos/shared').
  self assert: sr repoPath = 'repos/shared'.
  self
    assert:
      (FileReference
        fileSystem: self registryFileSystem
        path: (Path from: '/GsDevKitRoot/repos/shared')) exists