accessing
stones
	^ stones ifNil: [ stones := GsDevKitServerStones home: home parent: self ]