accessing
sharedodeSysDefaultServer
	^ (Smalltalk os environment at: 'GS_SYS_DEFAULT_SERVER') asFileReference 