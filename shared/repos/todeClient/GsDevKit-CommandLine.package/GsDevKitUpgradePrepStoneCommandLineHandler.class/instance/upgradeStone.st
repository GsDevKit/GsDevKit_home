activations
upgradeStone
	self targetGsVers >= '3.3.0' asMetacelloVersionNumber
		ifTrue: [ self upgradeUnicodeStone ].
	self exitSuccess