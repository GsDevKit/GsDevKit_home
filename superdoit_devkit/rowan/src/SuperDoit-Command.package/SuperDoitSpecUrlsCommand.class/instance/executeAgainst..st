execution
executeAgainst: aCommandParser
	| urlStream rowanSpecificationClass |
	rowanSpecificationClass := SuperDoitExecution
		globalNamed: #'RwSpecification'
		ifAbsent: [ 
			self
				error:
					'Rowan must be present in the image in order to use the specurls command' ].
	urlStream := self chunk readStreamPortable.
	[ urlStream atEnd ]
		whileFalse: [ 
			| url spec |
			url := urlStream nextLine.
			spec := (rowanSpecificationClass fromUrl: url)
				projectsHome: aCommandParser projectsHome;
				yourself.
			aCommandParser specs add: spec ]