accessing
serverTodeSysDefaultClient
	^ (Smalltalk os environment at: 'GS_SYS_DEFAULT_CLIENT' ifAbsent: [ ^ nil ]) asFileReference