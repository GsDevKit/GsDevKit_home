accessing
username
	username ifNil: [ username := OSPlatform current environment getEnv: 'USER' ].
	^ username