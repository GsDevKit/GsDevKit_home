actions
runningStoneReportOn: stream
	| result |
	self gemstoneBin
		ifNil: [ 
			"no gemstone installations ergo no running stones"
			^ self ].
	stream
		nextPutAll: 'Running Stones:';
		cr.
	result := self runShellCommand: (self gemstoneBin / 'gslist') pathString args: #('-lc').
	(result beginsWith: 'gslist[Info]: No GemStone servers')
		ifTrue: [ ^ self ].
	stream
		tab;
		nextPutAll: 'Status       Version    Owner    Pid   Port   Started     Type       Name';
		cr;
		tab;
		nextPutAll: '-------     --------- --------- ----- ----- ------------ ------      ----';
		cr.
	result
		linesDo: [ :line | 
			(line includesSubstring: 'Stone')
				ifTrue: [ 
					stream
						tab;
						nextPutAll: line;
						cr ] ]