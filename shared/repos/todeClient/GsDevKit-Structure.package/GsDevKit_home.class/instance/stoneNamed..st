gsdevkit api
stoneNamed: stoneName
	^ self stoneNamed: stoneName ifAbsent: [ self error: 'stone named ' , stoneName printString , ' does not exist' ]