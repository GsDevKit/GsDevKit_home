accessing
serverTodeSysLocalServer
	^ (Smalltalk os environment at: 'GS_SYS_LOCAL_SERVER' ifAbsent: [ ^ nil ]) asFileReference