accessing
value
	^ value == self noValue
		ifTrue: [ self defaultValue ]
		ifFalse: [ value ]