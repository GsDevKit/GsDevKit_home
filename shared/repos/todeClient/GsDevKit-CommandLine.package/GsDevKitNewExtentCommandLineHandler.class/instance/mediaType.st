accessing
mediaType
	mediaType
		ifNil: [ 
			self arguments size > 2
				ifTrue: [ mediaType := self arguments at: 3 ]
				ifFalse: [ mediaType := 'octet-stream' ] ].
	^ mediaType