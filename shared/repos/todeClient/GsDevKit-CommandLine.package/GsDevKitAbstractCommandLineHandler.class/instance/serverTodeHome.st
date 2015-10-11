accessing
serverTodeHome
	^ (Smalltalk os environment at: 'GS_HOME' ifAbsent: [ ^ nil ]) asFileReference