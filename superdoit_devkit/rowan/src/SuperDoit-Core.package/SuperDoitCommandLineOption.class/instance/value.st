accessing
value
	^ value ifNil: [ value := self defaultValue ]