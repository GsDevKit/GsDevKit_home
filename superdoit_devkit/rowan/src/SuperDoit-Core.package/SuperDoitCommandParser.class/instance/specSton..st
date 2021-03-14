commands
specSton: string
	| stonStream |
	stonStream := string readStreamPortable.
	[ stonStream atEnd ]
		whileFalse: [ 
			| obj |
			obj := STON fromStream: stonStream.
			obj _isArray
				ifTrue: [ self specs addAll: obj ]
				ifFalse: [ self specs add: obj ] ]