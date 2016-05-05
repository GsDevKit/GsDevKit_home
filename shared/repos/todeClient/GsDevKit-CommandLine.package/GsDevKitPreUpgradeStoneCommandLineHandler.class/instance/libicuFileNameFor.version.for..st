private
libicuFileNameFor: base version: gsVersion for: targetVersion
	| libExt icuPrefix |
	libExt := Smalltalk os isUnix
		ifTrue: [ '.so' ]
		ifFalse: [ '.dylib' ].
	icuPrefix := Smalltalk os environment
		at: 'GS_LIB_ICU_PREFIX'
		ifAbsent: [ 
			^ targetVersion < '3.3.1' asMetacelloVersionNumber
				ifTrue: [ 'libicu' , base , '-' , gsVersion asString , '-64' , libExt ]
				ifFalse: [ 'libicu-' , gsVersion asString , '-64' , '-' , base , libExt ] ].
	^ icuPrefix , '-64-' , base , libExt	"if the source stone is using GS_LIB_ICU_PREFIX, then we need to carry forward the prefixed libraries"