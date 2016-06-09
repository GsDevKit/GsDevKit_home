accessing
targetGsVers
	targetGsVers
		ifNil: [ 
			| verString |
			verString := self arguments at: 3.
			(verString includesSubstring: '_')
				ifTrue: [ verString := verString copyUpTo: $_ ].
			targetGsVers := verString asMetacelloVersionNumber ].
	^ targetGsVers