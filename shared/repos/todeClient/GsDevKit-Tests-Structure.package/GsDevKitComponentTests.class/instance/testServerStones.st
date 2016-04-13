tests
testServerStones
	self assert: self _home server stones pathString = (self _home / 'server' / 'stones') pathString.
	self assert: self _home server stones class == GsDevKitServerStones.
	self deny: self _home server stones class == self _home sys stones class