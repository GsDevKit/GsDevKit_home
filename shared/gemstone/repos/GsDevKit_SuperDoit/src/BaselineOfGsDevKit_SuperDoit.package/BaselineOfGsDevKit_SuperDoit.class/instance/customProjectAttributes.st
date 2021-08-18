accessing
customProjectAttributes
	projectAttributes := #().
	(Smalltalk classNamed: 'TDSessionDescription')
		ifNil: [ projectAttributes := #( #'NeedsTDSessionDescription' ) ].
	^ projectAttributes
