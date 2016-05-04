accessing
libIcuPatterns
	| targetPattern sourcePattern libExt |
	libExt := Smalltalk os isUnix
		ifTrue: [ '.so' ]
		ifFalse: [ '.dylib' ].
	sourcePattern := self sourceGsVers asString , '*' , libExt.
	targetPattern := self targetGsVers asString , '*' , libExt.
	^ {'libicu*data*'.
	'libicu*i18n*'.
	'libicu*uc*'}
		collect: [ :commonPattern | 
			{(commonPattern , sourcePattern).
			(commonPattern , targetPattern)} ]