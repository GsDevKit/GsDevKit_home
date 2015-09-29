actions
createTodeDescription: theStoneInfo
	| description localHostName defaultServerTodeHome vrsnAr |
	localHostName := NetNameResolver localHostName.
	defaultServerTodeHome := self serverTodeHome ifNil: [ nil ] ifNotNil: [ :home | home pathString ].
	description := TDSessionDescription new
		name: theStoneInfo stoneName;
		gemstoneVersion: theStoneInfo gsVers;
		stoneHost: localHostName;
		stoneName: theStoneInfo stoneName;
		gemHost: localHostName;
		netLDI: theStoneInfo stoneName , '_ldi';
		netLDIPort: '';
		gemTask: 'gemnetobject';
		userId: 'DataCurator';
		password: 'swordfish';
		backupDirectory: self backupsHome pathString;
		snapshotDirectory: self snapshotsHome pathString;
		serverGitRoot: self gitHome pathString;
		serverTodeRoot: defaultServerTodeHome;
		yourself.
	vrsnAr := description gemstoneVersion findTokens: '.'.
	((vrsnAr at: 1) < 3 or: [ (vrsnAr at: 1) = 3 and: [ (vrsnAr at: 2) < 2 ] ])
		ifTrue: [ 
			"after GemSTone 3.2, port range no longer accepted by startnetldi"
			description netLDIPortRange: '' ].
	description exportTo: self sessionDescriptionHome pathString , '/'