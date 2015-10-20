accessing
authorId
	| id |
	id := self sessionDescription authorId.
	id isEmpty
		ifTrue: [ ^ 'gsDevKit' ].
	^ id