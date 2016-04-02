activation
runSmalltalkCITests
	self readAndProcessSmalltalkCIConfig: (self arguments at: 2).
	self exitSuccess