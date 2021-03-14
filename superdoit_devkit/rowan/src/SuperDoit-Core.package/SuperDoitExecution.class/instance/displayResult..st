logging
displayResult: anObject
	anObject ~~ self noResult
		ifTrue: [ self ston: anObject on: self stdout ]