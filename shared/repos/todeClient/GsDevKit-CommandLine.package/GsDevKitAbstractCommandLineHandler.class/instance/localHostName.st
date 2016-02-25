accessing
localHostName
	^ (self runShellCommand: '/bin/hostname' args: #()) trim