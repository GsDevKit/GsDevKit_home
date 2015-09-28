accessing
serverTodeHome
	^ ((TDSessionDescription convertPathFromEnvironmentForOS: 'GS_TODE')
		ifNil: [ 
			"if GS_TODE is not defined, then this is a good guess"
			^ self gsDevKitHome / 'tode' ]) asFileReference