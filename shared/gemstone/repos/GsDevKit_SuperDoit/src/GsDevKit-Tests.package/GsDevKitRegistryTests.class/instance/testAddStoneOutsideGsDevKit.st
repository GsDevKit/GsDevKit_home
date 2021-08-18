tests
testAddStoneOutsideGsDevKit
  | r s s1 |
  r := self emptyRegistry.
  s := r
    newStoneWithRegistryName: 'secondStone'
    stonePath: '/outside/stones/secondStonePath'.
  s1 := r stoneWithRegistryName: 'secondStone'.
  self assert: s1 class == GsDevKitStoneRegistration.
  self assert: s == s1.
  self assert: s registryName = 'secondStone'.
  self assert: s sourcePath = (Path from: '/outside/stones/secondStonePath').
  self assert: s stonePath = '/outside/stones/secondStonePath'