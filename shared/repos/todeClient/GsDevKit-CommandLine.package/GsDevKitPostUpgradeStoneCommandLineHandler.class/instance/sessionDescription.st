private
sessionDescription
	^ self
		sessionDescriptionFor: self targetStoneName
		ifAbsent: [ self error: 'Session description  for ' , self targetStoneName printString , ' not found.' ]