tests
testAddRemoteStone
  | r s s1 |
  r := self emptyRegistry.
  s := r newRemoteStoneWithRegistryName: 'testStone1-remote'.
  s1 := r stoneWithRegistryName: 'testStone1-remote'.
  self assert: s1 class == GsDevKitRemoteStoneRegistration.
  self assert: s == s1.
  self assert: s registryName = 'testStone1-remote'.
  self assert: s sourcePath = (Path * 'remoteStones/testStone1-remote').
  self assert: s stonePath = 'remoteStones/testStone1-remote'