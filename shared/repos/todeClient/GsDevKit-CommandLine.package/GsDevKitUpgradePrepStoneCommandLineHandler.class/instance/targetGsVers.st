accessing
targetGsVers
	targetGsVers ifNil: [ targetGsVers := (self arguments at: 3) asMetacelloVersionNumber ].
	^ targetGsVers