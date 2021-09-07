resources
registryFileSystem
  ^ registryFileSystem ifNil: [ self setUpRegistryFileSystem ]