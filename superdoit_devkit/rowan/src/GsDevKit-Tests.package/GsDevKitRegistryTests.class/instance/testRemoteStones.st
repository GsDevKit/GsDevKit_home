tests
testRemoteStones
  self setUpRegistry.
  self assert: registry remoteStones size == 2.
  self
    assert:
      (registry remoteStones
        allSatisfy: [ :stone | stone class == GsDevKitRemoteStoneRegistration ])