accessing
sharedTodeSysLocal
	^ (Smalltalk os environment at: 'GS_SYS_LOCAL') asFileReference 