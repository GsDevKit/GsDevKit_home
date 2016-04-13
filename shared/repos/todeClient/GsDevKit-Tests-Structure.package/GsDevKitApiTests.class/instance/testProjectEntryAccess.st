tests
testProjectEntryAccess
	| stone projectEntryMap |
	stone := self _home defaultStone.
	self assert: stone exists.
	projectEntryMap := self _home projectEntryMap.
	self assert: (projectEntryMap includesKey: 'Tode').
	self assert: (projectEntryMap includesKey: 'SmalltalkCI').
	self assert: (projectEntryMap includesKey: 'Metacello').
	