accessing
serverTodeSysDefault
	^ (Smalltalk os environment at: 'GS_SYS_DEFAULT' ifAbsent: [ ^ nil ]) asFileReference