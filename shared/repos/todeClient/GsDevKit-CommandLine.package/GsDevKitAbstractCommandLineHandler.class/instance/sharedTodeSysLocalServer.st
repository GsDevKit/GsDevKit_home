accessing
sharedTodeSysLocalServer
	^ (Smalltalk os environment at: 'GS_SYS_LOCAL_SERVER') asFileReference 