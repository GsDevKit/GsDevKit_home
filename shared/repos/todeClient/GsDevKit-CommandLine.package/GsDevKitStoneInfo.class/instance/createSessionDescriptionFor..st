session descriptions
createSessionDescriptionFor: aGsDevKitCreateStoneCommanLine
	| description localHostName defaultServerTodeHome |
	localHostName := NetNameResolver localHostName.
	defaultServerTodeHome := aGsDevKitCreateStoneCommanLine serverTodeHome
		ifNil: [ nil ]
		ifNotNil: [ :home | home pathString ].
	description := TDSessionDescription new
		name: self stoneName;
		gemstoneVersion: self gsVers;
		stoneHost: localHostName;
		stoneName: self stoneName;
		gemHost: localHostName;
		netLDI: self stoneName , '_ldi';
		netLDIPort: '';
		gemTask: 'gemnetobject';
		userId: 'DataCurator';
		password: 'swordfish';
		backupDirectory: aGsDevKitCreateStoneCommanLine backupsHome pathString;
		snapshotDirectory: aGsDevKitCreateStoneCommanLine snapshotsHome pathString;
		serverTodeRoot: defaultServerTodeHome;
		yourself.
	self addFieldsToSessionDescription: description.
	^ description