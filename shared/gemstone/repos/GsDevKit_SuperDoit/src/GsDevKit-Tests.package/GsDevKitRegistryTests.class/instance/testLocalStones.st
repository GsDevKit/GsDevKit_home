tests
testLocalStones
  self setUpRegistry.
  self assert: registry localStones size == 2.
  self
    assert:
      (registry localStones
        allSatisfy: [ :stone | stone class == GsDevKitStoneRegistration ])