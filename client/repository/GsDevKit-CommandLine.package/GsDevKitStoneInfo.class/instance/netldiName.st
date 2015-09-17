accessing
netldiName
	netldiName ifNil: [ netldiName := self stoneName , '_ldi' ].
	^ netldiName