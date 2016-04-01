activation
loadSmalltalkCIConfiguration
	self readAndProcessSmalltalkCIConfig: (self arguments at: 2).
	self exitSuccess