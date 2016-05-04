accessing
targetStoneName
	targetStoneName ifNil: [ targetStoneName := self arguments at: 2 ].
	^ targetStoneName