tests
testExportRegistry
  | exportedRegistry |
  self setUpRegistry.
  registry export.
  self
    assert:
      (FileReference
        fileSystem: self registryFileSystem
        path: '/GsDevKitRoot/registry/registry.ston') contents
        = self ston_registry