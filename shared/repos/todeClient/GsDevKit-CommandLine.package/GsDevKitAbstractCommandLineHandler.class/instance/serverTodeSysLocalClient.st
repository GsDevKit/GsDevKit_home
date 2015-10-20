accessing
serverTodeSysLocalClient
	^ (Smalltalk os environment at: 'GS_SYS_LOCAL_CLIENT' ifAbsent: [ ^ nil ]) asFileReference