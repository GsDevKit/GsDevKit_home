api
stoneWithRegistryName: registryName
  ^ stones
    detect: [ :stone | stone registryName = registryName ]
    ifNone: [ nil ]