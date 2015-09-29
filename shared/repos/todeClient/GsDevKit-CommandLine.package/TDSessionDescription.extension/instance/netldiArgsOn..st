*GsDevKit-CommandLine
netldiArgsOn: netldiArgs
	netldiArgs
		add: '-g';
		add: '-a';
		add: self osUserId;
		add: self netLDI