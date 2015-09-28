accessing
gsDevKitHome
	^ (TDSessionDescription convertPathFromEnvironmentForOS: 'GS_HOME') asFileReference