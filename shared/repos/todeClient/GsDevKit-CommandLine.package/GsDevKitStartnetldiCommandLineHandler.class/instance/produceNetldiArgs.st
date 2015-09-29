actions
produceNetldiArgs
	| sess netldiArgs |
	sess := self sessionDescription.
	netldiArgs := OrderedCollection new.
	self netldiArgsOn: netldiArgs.
	sess netldiArgsOn: netldiArgs.
	^ netldiArgs asArray