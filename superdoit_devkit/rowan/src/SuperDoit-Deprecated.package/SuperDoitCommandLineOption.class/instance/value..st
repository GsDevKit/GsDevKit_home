accessing
value: object
	value ~~ self notSet
		ifTrue: [ 
			self
				error:
					'The option ' , self longName printString , ' has already been processed.' ].
	value := object