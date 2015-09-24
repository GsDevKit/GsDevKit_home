accessing
serverTodeHome
	^ (Smalltalk os environment
		at: 'GS_TODE'
		ifAbsent: [ 
			"if GS_TODE is not defined, then this is a good guess"
			^ self gsDevKitHome / 'tode' ]) asFileReference