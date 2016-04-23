accessing
_home
	^ _home
		ifNil: [ 
			_home := (Smalltalk os environment at: 'GS_HOME' ifAbsent: [ self error: 'Environment Variable GS_HOME must be set' ])
				asFileReference ]