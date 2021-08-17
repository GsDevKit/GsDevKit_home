tests
testLoadingRegistry
  | loadedRegistry |
  self registry export.
  loadedRegistry := GsDevKitRegistry
    importFrom:
      (FileReference
        fileSystem: self registryFileSystem
        path: (Path from: '/GsDevKitRoot/registry/registry.ston')).
  self assert: loadedRegistry stones size = self registry stones size.
  self
    assert:
      (loadedRegistry stones
        allSatisfy: [ :each | self registry stones includes: each ]).
  self
    assert:
      (loadedRegistry groups
        allSatisfy: [ :each | self registry groups includes: each ]).
  self
    assert:
      (loadedRegistry sourceRepos
        allSatisfy: [ :each | self registry sourceRepos includes: each ])