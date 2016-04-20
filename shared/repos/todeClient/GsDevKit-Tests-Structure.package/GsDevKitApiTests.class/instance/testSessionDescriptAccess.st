tests
testSessionDescriptAccess
	self _home sessionDescriptionNamed: SCIGemStoneServerConfigSpec defaultSessionName.	"run without error"
	self should: [ self _home sessionDescriptionNamed: '   foo bar   ' ] raise: Error