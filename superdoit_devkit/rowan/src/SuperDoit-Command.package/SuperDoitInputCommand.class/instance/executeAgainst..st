execution
executeAgainst: aCommandParser
	| inputFileStream |
	inputFileStream := self chunk readStreamPortable.
	[ inputFileStream atEnd ]
		whileFalse: [ 
			| filePath |
			filePath := inputFileStream nextLine.
			GsFileIn fromServerPath: filePath ]