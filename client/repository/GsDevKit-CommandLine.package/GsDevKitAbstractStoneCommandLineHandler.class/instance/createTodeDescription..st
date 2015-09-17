actions
createTodeDescription: stoneInfo
	| sessionDescription localHostName|
	localHostName := NetNameResolver localHostName.
	sessionDescription := TDSessionDescription new
		name: stoneInfo stoneName;
		gemstoneVersion: stoneInfo gsVers;
		stoneHost: localHostName;
		stoneName: stoneInfo stoneName;
		gemHost: localHostName;
		netLDI: stoneInfo netldiName;
		gemTask: 'gemnetobject';
		userId: 'DataCurator';
		password: 'swordfish';
		backupDirectory: self backupsHome pathString;
		serverGitRoot: self gitHome pathString;
		serverTodeRoot: self todeHome pathString;
		yourself.
	sessionDescription exportTo: self  sessionDescriptionHome pathString , '/'