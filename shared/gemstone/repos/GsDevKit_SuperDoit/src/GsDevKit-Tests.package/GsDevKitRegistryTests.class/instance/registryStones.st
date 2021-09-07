resources
registryStones
  ^ {(GsDevKitStoneRegistration new
    registryName: 'testStone1';
    yourself).
  (GsDevKitStoneRegistration new
    registryName: 'secondStone';
    stonePath: '/outside/stones/testStone2';
    yourself).
  (GsDevKitRemoteStoneRegistration new
    registryName: 'testStone1-remote';
    yourself).
  (GsDevKitRemoteStoneRegistration new
    registryName: 'testStone3';
    stonePath: '/productionStones/testStone3';
    yourself)}