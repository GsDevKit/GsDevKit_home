accessing
sharedTodeSysLocalClient
	^ (Smalltalk os environment at: 'GS_SYS_LOCAL_CLIENT') asFileReference 