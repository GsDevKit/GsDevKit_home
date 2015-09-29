accessing
sessionDescription
	^ self
		sessionDescriptionIfAbsent: [ :sessionDescriptionReference | 
			self
				error:
					'Session description file ' , sessionDescriptionReference pathString printString , ' for ' , self stoneName printString
						, ' not found.' ]