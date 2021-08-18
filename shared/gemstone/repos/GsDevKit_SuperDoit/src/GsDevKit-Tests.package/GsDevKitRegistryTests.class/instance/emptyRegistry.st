resources
emptyRegistry
  ^ GsDevKitRegistry
    forGsDevKitOnPath:
      (FileReference
        fileSystem: self registryFileSystem
        path: (Path from: '/GsDevKitRoot'))