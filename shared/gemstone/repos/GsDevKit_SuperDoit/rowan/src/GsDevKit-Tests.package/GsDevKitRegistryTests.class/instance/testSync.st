tests
testSync
  | registryFile |
  self setUpRegistry.
  registry sync.
  registryFile := FileReference
    fileSystem: self registryFileSystem
    path: '/GsDevKitRoot/registry/registry.ston'