api
newStoneGroupWithRegistryName: registryName stoneRegistryNames: stoneRegistryNames
  ^ self groups
    add:
      ((GsDevKitStoneGroupRegistration newForRegistry: self)
        registryName: registryName;
        stoneRegistryNames: stoneRegistryNames;
        yourself)