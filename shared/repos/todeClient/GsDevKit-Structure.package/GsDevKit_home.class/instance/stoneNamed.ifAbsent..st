gsdevkit api
stoneNamed: stoneName ifAbsent: absentBlock
	| stone |
	stone := self server stones / stoneName.
	stone exists
		ifFalse: [ absentBlock cull: stone ].
	^ stone