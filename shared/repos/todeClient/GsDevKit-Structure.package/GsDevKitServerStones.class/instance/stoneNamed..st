gsdevkit api
stoneNamed: aString
	^ (GsDevKitServerStonesStone home: self _home parent: self)
		stoneName: aString;
		yourself