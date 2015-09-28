actions
createTodeDescription: theStoneInfo
	| sessionDescription localHostName defaultServerTodeHome |
	localHostName := NetNameResolver localHostName.
	defaultServerTodeHome := self serverTodeHome ifNil: [ nil ] ifNotNil: [ :home | home pathString ].
	sessionDescription := TDSessionDescription new
		name: theStoneInfo stoneName;
		gemstoneVersion: theStoneInfo gsVers;
		stoneHost: localHostName;
		stoneName: theStoneInfo stoneName;
		gemHost: localHostName;
		netLDI: theStoneInfo netldiName;
		gemTask: 'gemnetobject';
		userId: 'DataCurator';
		password: 'swordfish';
		backupDirectory: self backupsHome pathString;
		snapshotDirectory: self snapshotsHome pathString;
		serverGitRoot: self gitHome pathString;
		serverTodeRoot: defaultServerTodeHome;
		yourself.
	sessionDescription exportTo: self sessionDescriptionHome pathString , '/'