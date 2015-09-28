accessing
serverTodeHome
	^ (Smalltalk os environment at: 'GS_TODE' ifAbsent: [ ^ nil ]) asFileReference