accessing
authorId
	| sess id |
	sess := self sessionDescription.
	id := (sess respondsTo: #authorId)
		ifTrue: [ sess authorId ]
		ifFalse: [ '' ].
	id isEmpty
		ifTrue: [ ^ 'gsDevKit' ].
	^ id