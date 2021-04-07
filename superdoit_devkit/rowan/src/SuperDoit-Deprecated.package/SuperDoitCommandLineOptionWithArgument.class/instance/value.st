accessing
value
	^ (value == self noValue or: [ value == self notSet ])
		ifTrue: [ self defaultValue ]
		ifFalse: [ value ]