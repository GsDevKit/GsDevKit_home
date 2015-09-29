accessing
sessionDescriptionIfAbsent: absentBlock
	| sessionDescriptionReference |
	sessionDescriptionReference := self sessionDescriptionHome / self stoneName.
	sessionDescriptionReference exists
		ifFalse: [ ^ absentBlock value: sessionDescriptionReference ].
	^ TDSessionDescription importFrom: sessionDescriptionReference pathString