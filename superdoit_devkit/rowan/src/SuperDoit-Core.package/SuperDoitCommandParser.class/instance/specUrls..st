commands
specUrls: string
	| urlStream |
	urlStream := string readStreamPortable.
	[ urlStream atEnd ]
		whileFalse: [ 
			| url spec |
			url := urlStream nextLine.
			spec := RwSpecification fromUrl: url.
			self specs add: spec ]