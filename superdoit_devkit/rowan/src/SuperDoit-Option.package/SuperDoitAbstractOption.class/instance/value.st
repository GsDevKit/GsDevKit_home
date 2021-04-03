accessing
value
	^ value == self notSet
		ifTrue: [ self defaultValue ]
		ifFalse: [ value ]