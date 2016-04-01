activations
createStone
	| createStoneHandler |
	createStoneHandler := GsDevKitCreateStoneCommandLineHandler new
		gsVers: self gsVers;
		stoneName: self stoneName;
		yourself.
	self gsTravisCacheEnabled
		ifTrue: [  ]
		ifFalse: [ createStoneHandler createStone ].
	self exitSuccess