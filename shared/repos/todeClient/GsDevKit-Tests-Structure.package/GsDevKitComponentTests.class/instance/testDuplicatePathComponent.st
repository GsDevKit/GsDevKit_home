tests
testDuplicatePathComponent
	"make sure that instvar mapping does not get confused when superclass has same path component"

	self
		assert:
			(self _home sys local server stones / 'local') pathString
				= ((self _home / 'sys' / 'local') server stones / 'local') pathString