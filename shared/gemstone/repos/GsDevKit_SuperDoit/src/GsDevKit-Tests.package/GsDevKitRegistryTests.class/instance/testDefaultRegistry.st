tests
testDefaultRegistry
  | defaultRegistry |
  self assert: GsDevKitRegistry registries isEmpty.
  defaultRegistry := GsDevKitRegistry defaultRegistry.
  self
    assert:
      (GsDevKitRegistry
        forGsDevKitOnPath:
          (System gemEnvironmentVariable: GsDevKitRegistry gsDevKitEnvironmentVariableName)
            asFileReference)
        == defaultRegistry.
  self assert: GsDevKitRegistry registries size == 1.
  self assert: GsDevKitRegistry registries values first == defaultRegistry.
  self
    assert:
      defaultRegistry gsDevKitRoot asString
        =
          (System gemEnvironmentVariable: GsDevKitRegistry gsDevKitEnvironmentVariableName)