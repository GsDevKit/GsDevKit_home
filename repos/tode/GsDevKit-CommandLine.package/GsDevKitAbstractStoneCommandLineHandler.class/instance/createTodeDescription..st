actions
createTodeDescription: theStoneInfo
	| sessionDescription localHostName |
	localHostName := NetNameResolver localHostName.
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
		serverTodeRoot: self todeHome pathString;
		yourself.
	sessionDescription exportTo: self sessionDescriptionHome pathString , '/'