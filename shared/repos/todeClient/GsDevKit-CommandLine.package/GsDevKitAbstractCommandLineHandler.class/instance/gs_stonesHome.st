accessing
gs_stonesHome
	^ (TDSessionDescription convertPathFromEnvironmentForOS: 'GS_GS_SERVER_STONES') asFileReference 