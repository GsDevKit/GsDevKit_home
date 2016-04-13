tests
testSysLocalServerProjects
	self
		assert:
			self _home sys local server projects pathString = (self _home / 'sys' / 'local' / 'server' / 'projects') pathString