accessing
markNoValue
	"Since nil is a valid value, mark with a noValue object that is unique when the optional options have been referenced on command line, should trigger use of defaultValue"

	value
		ifNotNil: [ 
			self
				error:
					'The option ' , self longName printString , ' has already been processed.' ].
	value := self noValue