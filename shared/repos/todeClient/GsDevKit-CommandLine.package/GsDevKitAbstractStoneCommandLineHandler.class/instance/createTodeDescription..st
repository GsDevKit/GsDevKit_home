actions
createTodeDescription: theStoneInfo
	| description localHostName defaultServerTodeHome |
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
		netLDIPortRange: '';
		gemTask: 'gemnetobject';
		userId: 'DataCurator';
		password: 'swordfish';
		backupDirectory: self backupsHome pathString;
		snapshotDirectory: self snapshotsHome pathString;
		serverGitRoot: self gitHome pathString;
		serverTodeRoot: defaultServerTodeHome;
		yourself.
	description exportTo: self sessionDescriptionHome pathString , '/'