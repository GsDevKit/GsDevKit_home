accessing
gsVers
	gsVers ifNil: [ gsVers := self arguments at: 2 ].
	^ gsVers