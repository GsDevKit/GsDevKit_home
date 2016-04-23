gsdevkit api
defaultStoneIfAbsent: absentBlock
	| sessionDescription stone |
	sessionDescription := self sessionDescriptionNamed: SCIGemStoneServerConfigSpec defaultSessionName.
	stone := self stoneNamed: sessionDescription stoneName.
	stone exists
		ifFalse: [ ^ absentBlock cull: stone ].
	^ stone