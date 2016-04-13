gsdevkit api
sessionDescriptionNamed: aSessionDescriptionOrStoneName ifAbsent: absentBlock
	| sessionDescriptionReference |
	sessionDescriptionReference := (self / aSessionDescriptionOrStoneName) asFileReference.
	sessionDescriptionReference exists
		ifFalse: [ ^ absentBlock cull: sessionDescriptionReference ].
	^ TDSessionDescription importFrom: sessionDescriptionReference pathString