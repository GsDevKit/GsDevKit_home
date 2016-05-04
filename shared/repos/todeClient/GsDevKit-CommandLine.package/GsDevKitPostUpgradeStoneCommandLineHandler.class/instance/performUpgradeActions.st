activation
performUpgradeActions
	self targetGsVers >= '3.3.0' asMetacelloVersionNumber
		ifTrue: [ self postUpgradeSortedCollections ].
	self exitSuccess