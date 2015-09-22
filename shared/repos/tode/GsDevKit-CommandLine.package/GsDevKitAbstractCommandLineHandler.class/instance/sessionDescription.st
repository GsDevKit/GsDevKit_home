accessing
sessionDescription
	| sessionDescriptionReference |
	sessionDescriptionReference := self sessionDescriptionHome / self stoneName.
	sessionDescriptionReference exists
		ifFalse: [ 
			self
				error:
					'Session description file ' , sessionDescriptionReference pathString printString , ' for ' , self stoneName printString
						, ' not found.' ].
	^ TDSessionDescription importFrom: sessionDescriptionReference pathString