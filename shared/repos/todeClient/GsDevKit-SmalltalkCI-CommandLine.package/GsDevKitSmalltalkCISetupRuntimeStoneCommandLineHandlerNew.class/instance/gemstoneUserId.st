accessing
gemstoneUserId
	^ gemstoneUserId ifNil: [ gemstoneUserId := self arguments at: 2 ]