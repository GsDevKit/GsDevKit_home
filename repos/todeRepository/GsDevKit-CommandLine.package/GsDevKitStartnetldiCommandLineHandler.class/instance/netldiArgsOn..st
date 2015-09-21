actions
netldiArgsOn: netldiArgs
	| logDir |
	logDir := OSPlatform current environment getEnv: 'GEMSTONE_LOGDIR'.
	netldiArgs
		add: '-l';
		add: logDir , '/netldi.log '