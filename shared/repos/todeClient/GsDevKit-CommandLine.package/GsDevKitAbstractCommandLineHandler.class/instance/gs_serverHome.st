accessing
gs_serverHome
	^ (TDSessionDescription convertPathFromEnvironmentForOS:'GS_GS_SERVER') asFileReference 