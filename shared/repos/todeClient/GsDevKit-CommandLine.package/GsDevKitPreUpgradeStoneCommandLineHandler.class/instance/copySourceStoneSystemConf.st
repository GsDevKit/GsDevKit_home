actions
copySourceStoneSystemConf
	| targetSystemConfFile sourceStoneSystemConfFile |
	Transcript
		cr;
		tab;
		show: 'Copying system.conf file from ' , self sourceStoneName , ' to ' , self targetStoneName.
	sourceStoneSystemConfFile := self gs_stonesHome / self sourceStoneName / 'extents' / 'system.conf'.
	targetSystemConfFile := self gs_stonesHome / self targetStoneName / 'extents' / 'system.conf'.
	targetSystemConfFile exists
		ifTrue: [ targetSystemConfFile delete ].
	sourceStoneSystemConfFile copyTo: targetSystemConfFile