accessing
serverTodeSysStones
	^ (Smalltalk os environment at: 'GS_SYS_STONES' ifAbsent: [ ^ nil ]) asFileReference