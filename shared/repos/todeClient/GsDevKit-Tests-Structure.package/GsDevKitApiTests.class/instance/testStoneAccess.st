tests
testStoneAccess
	| stone |
	stone := self _home defaultStone.
	self assert: stone exists.
	self should: [ self _home stoneNamed: '   foo   bar   ' ] raise: Error.
	self
		deny:
			(self _home stoneNamed: '   foo   bar   ' ifAbsent: [ :aGsDevKitServerStonesStone | aGsDevKitServerStonesStone ]) exists