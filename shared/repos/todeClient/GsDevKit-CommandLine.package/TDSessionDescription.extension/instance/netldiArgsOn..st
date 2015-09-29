*GsDevKit-CommandLine
netldiArgsOn: netldiArgs
	netldiArgs
		add: '-g';
		add: '-a';
		add: self userId;
		add: self netLDI