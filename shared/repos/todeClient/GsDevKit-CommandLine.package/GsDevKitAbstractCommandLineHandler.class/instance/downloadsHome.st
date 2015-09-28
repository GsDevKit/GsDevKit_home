accessing
downloadsHome
	^ (TDSessionDescription convertPathFromEnvironmentForOS: 'GS_SHARED_DOWNLOADS') asFileReference 