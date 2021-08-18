tests
testAddStone
  | r s s1 |
  r := self emptyRegistry.
  s := r newStoneWithRegistryName: 'testStone1'.
  s1 := r stoneWithRegistryName: 'testStone1'.
  self assert: s1 class == GsDevKitStoneRegistration.
  self assert: s == s1.
  self assert: s registryName = 'testStone1'.
  self assert: s sourcePath = (Path * 'stones/testStone1').
  self assert: s stonePath = 'stones/testStone1'