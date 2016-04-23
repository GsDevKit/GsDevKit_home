tests
testSysStones
	self assert: self _home sys stones pathString = (self _home / 'sys' / 'stones') pathString.
	self assert: self _home sys stones class == GsDevKitSysLocalServerStones.
	self assert: self _home sys local server stones class == self _home sys stones class.
	self deny: self _home server stones class == self _home sys stones class