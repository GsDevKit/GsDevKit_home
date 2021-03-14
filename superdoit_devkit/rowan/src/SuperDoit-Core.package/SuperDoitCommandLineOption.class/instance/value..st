accessing
value: object
	value
		ifNotNil: [ 
			self
				error:
					'The option ' , self longName printString , ' has already been processed.' ].
	value := object