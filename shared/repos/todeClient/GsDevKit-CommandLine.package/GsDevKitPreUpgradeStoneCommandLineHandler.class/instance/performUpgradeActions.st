activation
performUpgradeActions
	self
		copyCustomStoneFiles;
		copySourceStoneSystemConf.
	self targetGsVers < '3.3.1' asMetacelloVersionNumber
		ifTrue: [ ^ self exitSuccess ].
	self sourceGsVers >= '3.3.1' asMetacelloVersionNumber
		ifTrue: [ ^ self exitSuccess ].
	self sourceGsVers < '3.2.0' asMetacelloVersionNumber
		ifTrue: [ 
			"until bug46232 resolved"
			self updateStoneConfForIcuLibraryVersion: '51.2'.
			^ self exitSuccess ].
	(self sourceGsVers < '3.2.0' asMetacelloVersionNumber or: [ self sourceGsVers = '3.3.0' asMetacelloVersionNumber ])
		ifTrue: [ 
			self updateStoneConfForIcuLibraryVersion: '54.1'.
			^ self exitSuccess ].
	(self sourceGsVers >= '3.2.0' asMetacelloVersionNumber and: [ self sourceGsVers < '3.3.0' asMetacelloVersionNumber ])
		ifTrue: [ 
			self updateStoneConfForIcuLibraryVersion: '51.2'.
			^ self exitSuccess ].
	self exitSuccess