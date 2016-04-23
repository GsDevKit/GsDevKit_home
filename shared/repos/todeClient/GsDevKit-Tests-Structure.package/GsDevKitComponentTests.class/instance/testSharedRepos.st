tests
testSharedRepos
	self assert: self _home shared repos pathString = (self _home / 'shared' / 'repos') pathString.
