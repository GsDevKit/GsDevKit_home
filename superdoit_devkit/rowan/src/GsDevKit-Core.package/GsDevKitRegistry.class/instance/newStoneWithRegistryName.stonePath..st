api
newStoneWithRegistryName: registryName stonePath: aPathString
  ^ self
    newStoneRegistration: GsDevKitStoneRegistration
    registryName: registryName
    stonePath: aPathString