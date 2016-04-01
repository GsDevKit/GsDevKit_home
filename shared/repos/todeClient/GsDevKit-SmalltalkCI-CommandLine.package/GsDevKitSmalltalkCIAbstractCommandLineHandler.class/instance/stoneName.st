accessing
stoneName
	stoneName ifNil: [ stoneName := self arguments at: 1 ].
	^ stoneName