activation
performUpgradeActions
	self targetGsVers >= '3.3.0' asMetacelloVersionNumber
		ifTrue: [ self preUpgradeUnicodeStone ].
	self exitSuccess