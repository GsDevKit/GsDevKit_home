actions
produceNetldiArgs
	| info netldiArgs |
	info := GsDevKitStoneInfo importFrom: self stonesHome / self stoneName / self stoneInfoFilename.
	netldiArgs := OrderedCollection new.
	self netldiArgsOn: netldiArgs.
	info netldiArgsOn: netldiArgs.
	^ netldiArgs asArray