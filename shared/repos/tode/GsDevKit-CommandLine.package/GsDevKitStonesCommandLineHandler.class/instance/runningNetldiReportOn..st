actions
runningNetldiReportOn: stream
	| result |
	self gemstoneBin
		ifNil: [ 
			"no gemstone installations ergo no running netldis"
			^ self ].
	stream
		nextPutAll: 'Running Netldis:';
		cr.
	result := self runShellCommand: (self gemstoneBin / 'gslist') pathString args: #('-lc') noError: true.
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
			(line includesSubstring: 'Netldi')
				ifTrue: [ 
					stream
						tab;
						nextPutAll: line;
						cr ] ]