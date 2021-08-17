instance creation
defaultRegistry
  "Answer a registry on the GsDevKit specified by the environment variable"

  ^ self
    forGsDevKitOnPath:
      (System gemEnvironmentVariable: self gsDevKitEnvironmentVariableName)
        asFileReference