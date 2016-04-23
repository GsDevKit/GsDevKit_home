accessing
stones
	^ stones ifNil: [ stones := GsDevKitSysLocalServerStones home:  home parent: self ]