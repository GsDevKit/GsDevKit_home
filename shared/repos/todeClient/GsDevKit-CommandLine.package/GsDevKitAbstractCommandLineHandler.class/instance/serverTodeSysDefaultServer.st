accessing
serverTodeSysDefaultServer
	^ (Smalltalk os environment at: 'GS_SYS_DEFAULT_SERVER' ifAbsent: [ ^ nil ]) asFileReference