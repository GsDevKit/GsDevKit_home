execution
executeAgainst: aCommandParser
	| stonStream |
	stonStream := self chunk readStreamPortable.
	[ stonStream atEnd ]
		whileFalse: [ 
			| obj |
			obj := STON fromStream: stonStream.
			obj _isArray
				ifTrue: [ 
					aCommandParser specs
						addAll:
							(obj
								collect: [ :each | 
									each
										projectsHome: aCommandParser projectsHome;
										yourself ]) ]
				ifFalse: [ 
					obj projectsHome: aCommandParser projectsHome.
					aCommandParser specs add: obj ] ]