*GsDevKit-CommandLine
netldiArgsOn: netldiArgs
	netldiArgs
		add: '-g';
		add: '-a';
		add: self osUserId.
	self netLDIPort isEmpty
		ifFalse: [ 
			netldiArgs
				add: '-P';
				add: self netLDIPort ].
	self netLDIPortRange
		ifNotNil: [ :range | 
			range isEmpty
				ifFalse: [ 
					netldiArgs
						add: '-p';
						add: range ] ].
	netldiArgs add: self netLDI