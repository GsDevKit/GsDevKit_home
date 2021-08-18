tests
testRegistryModification
  | s mt |
  self setUpRegistry.
  mt := registry modificationTime.
  s := self registry stoneWithRegistryName: 'testStone1'.
  self assert: registry modificationTime ~= s modificationTime.
  s registryName: 'newTestStone1'.
  self assert: registry modificationTime == s modificationTime