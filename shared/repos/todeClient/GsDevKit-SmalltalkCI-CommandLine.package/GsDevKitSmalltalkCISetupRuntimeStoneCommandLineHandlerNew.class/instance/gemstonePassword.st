accessing
gemstonePassword
	^ gemstonePassword ifNil: [ gemstonePassword := self arguments at: 3 ]