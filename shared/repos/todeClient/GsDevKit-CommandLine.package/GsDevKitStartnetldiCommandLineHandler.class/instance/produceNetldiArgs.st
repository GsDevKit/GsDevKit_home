actions
produceNetldiArgs
	| sess netldiArgs |
	sess := self sessionDescription.
	netldiArgs := OrderedCollection new.
	self netldiArgsOn: netldiArgs.
	^ (self arguments size = 1
		ifTrue: [ 
			sess netldiArgsOn: netldiArgs.
			netldiArgs ]
		ifFalse: [ netldiArgs , (self arguments copyFrom: 2 to: self arguments size) ]) asArray