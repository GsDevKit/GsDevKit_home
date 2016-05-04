accessing
sessionDescriptionFor: aStoneName ifAbsent: absentBlock
	| sessionDescriptionReference |
	sessionDescriptionReference := self sessionDescriptionHome / aStoneName.
	sessionDescriptionReference exists
		ifFalse: [ ^ absentBlock value: sessionDescriptionReference ].
	^ TDSessionDescription importFrom: sessionDescriptionReference pathString