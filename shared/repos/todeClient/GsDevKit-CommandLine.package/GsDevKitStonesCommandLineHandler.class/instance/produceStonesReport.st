actions
produceStonesReport
	| arg |
	arg := '-a'.
	self arguments size = 1
		ifTrue: [ arg := self arguments at: 1 ].
	(arg = '-a' or: [ arg = '-i' ])
		ifTrue: [ 
			self installedStoneReportOn: Transcript.
			arg = '-i'
				ifTrue: [ self exitSuccess ] ].
	(arg = '-a' or: [ arg = '-r' ])
		ifTrue: [ 
			self
				runningStoneReportOn: Transcript;
				runningNetldiReportOn: Transcript;
				yourself ]
		ifFalse: [ ^ self exitFailure: 'Unknown option: ' , arg printString ].
	self exitSuccess