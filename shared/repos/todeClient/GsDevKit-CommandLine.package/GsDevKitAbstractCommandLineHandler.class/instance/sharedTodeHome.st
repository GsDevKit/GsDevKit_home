accessing
sharedTodeHome
	^ (TDSessionDescription convertPathFromEnvironmentForOS: 'GS_SHARED_TODE') asFileReference 