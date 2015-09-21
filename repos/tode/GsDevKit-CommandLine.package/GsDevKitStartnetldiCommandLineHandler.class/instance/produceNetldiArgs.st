actions
produceNetldiArgs
	| info netldiArgs |
	info := self stoneInfo.
	netldiArgs := OrderedCollection new.
	self netldiArgsOn: netldiArgs.
	info netldiArgsOn: netldiArgs.
	^ netldiArgs asArray