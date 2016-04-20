gsdevkit api
sessionDescriptionNamed: aSessionDescriptionOrStoneName
	^ self
		sessionDescriptionNamed: aSessionDescriptionOrStoneName
		ifAbsent: [ self error: 'No session description named: ' , aSessionDescriptionOrStoneName printString , ' found.' ]