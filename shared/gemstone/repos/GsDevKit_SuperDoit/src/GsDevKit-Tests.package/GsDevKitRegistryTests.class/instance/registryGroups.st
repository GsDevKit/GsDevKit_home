resources
registryGroups
  ^ {(GsDevKitStoneGroupRegistration new
    registryName: 'testStone1-group';
    stoneRegistryNames: #('testStone1' 'testStone1-remote');
    yourself).
  (GsDevKitStoneGroupRegistration new
    registryName: 'all-stones-group';
    stoneRegistryNames:
        #('testStone1' 'secondStone' 'testStone1-remote' 'testStone3');
    yourself)}