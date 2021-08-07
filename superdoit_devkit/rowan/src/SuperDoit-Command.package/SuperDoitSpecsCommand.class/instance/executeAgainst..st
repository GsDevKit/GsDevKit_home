execution
executeAgainst: aCommandParser
	| stonStream |
	SuperDoitExecution
		globalNamed: #'Rowan'
		ifAbsent: [ 
			self
				error:
					'Rowan must be present in the image in order to use the specs command' ].
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