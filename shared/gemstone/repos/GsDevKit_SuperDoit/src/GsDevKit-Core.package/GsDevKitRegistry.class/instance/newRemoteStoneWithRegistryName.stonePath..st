api
newRemoteStoneWithRegistryName: registryName stonePath: aPathString
  ^ self
    newStoneRegistration: GsDevKitRemoteStoneRegistration
    registryName: registryName
    stonePath: aPathString