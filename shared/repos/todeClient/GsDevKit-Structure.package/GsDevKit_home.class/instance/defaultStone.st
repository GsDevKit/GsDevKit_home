gsdevkit api
defaultStone
	^ self
		defaultStoneIfAbsent: [ :defaultStone | self error: 'The stone ' , defaultStone stoneName printString , ' does not exist.' ]