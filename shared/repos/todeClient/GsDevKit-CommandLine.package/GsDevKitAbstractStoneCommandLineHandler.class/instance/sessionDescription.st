accessing
sessionDescription
	sessionDescription ifNil: [ sessionDescription := super sessionDescription ].
	^ sessionDescription