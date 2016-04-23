gsdevkit api
stoneNamed: aString
	^ (GsDevKitSysLocalServerStonesStone home: self _home parent: self)
		stoneName: aString;
		yourself