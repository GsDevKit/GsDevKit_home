accessing
markNoValue
	"mark with a noValue object that is unique when the optional options have been referenced on command line, should trigger use of defaultValue"

	(value ~~ self notSet and: [ value ~~ self noValue])
		ifTrue: [ 
			self
				error:
					'The option ' , self longName printString , ' has already been processed.' ].
	value := self noValue