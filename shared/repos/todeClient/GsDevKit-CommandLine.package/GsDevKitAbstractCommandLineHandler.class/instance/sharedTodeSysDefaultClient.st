accessing
sharedTodeSysDefaultClient
	^ (Smalltalk os environment at: 'GS_SYS_DEFAULT_CLIENT') asFileReference 