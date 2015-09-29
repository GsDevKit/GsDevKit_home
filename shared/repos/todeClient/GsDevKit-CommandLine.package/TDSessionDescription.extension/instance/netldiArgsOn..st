*GsDevKit-CommandLine
netldiArgsOn: netldiArgs
	| vrsnAr |
	netldiArgs
		add: '-g';
		add: '-a';
		add: self osUserId.
	self netLDIPort isEmpty
		ifFalse: [ 
			netldiArgs
				add: '-P';
				add: self netLDIPort ].
	vrsnAr := self gemstoneVersion findTokens: '.'.
	((vrsnAr at: 1) < 3 or: [ (vrsnAr at: 1) = 3 and: [ (vrsnAr at: 2) < 2 ] ])
		ifTrue: [ 
			"after GemStone 3.2, port range no longer accepted by netldi"
			self netLDIPortRange
				ifNotNil: [ :range | 
					range isEmpty
						ifFalse: [ 
							netldiArgs
								add: '-p';
								add: range ] ] ].
	netldiArgs add: self netLDI