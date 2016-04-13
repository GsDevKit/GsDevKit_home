tests
testSysDefaultServerProjects
	self
		assert:
			self _home sys default server projects pathString = (self _home / 'sys' / 'default' / 'server' / 'projects') pathString