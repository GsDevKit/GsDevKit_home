activation
performUpgradeActions
	self sourceGsVers < '3.3.0' asMetacelloVersionNumber
		ifTrue: [ 
			self updateStoneConfForIcuLibraryVersion: '51.2'.
			^self exitSuccess ].
	self sourceGsVers = '3.3.0' asMetacelloVersionNumber
		ifTrue: [ 
			self updateStoneConfForIcuLibraryVersion: '54.1'.
			^self exitSuccess ].
	self exitSuccess