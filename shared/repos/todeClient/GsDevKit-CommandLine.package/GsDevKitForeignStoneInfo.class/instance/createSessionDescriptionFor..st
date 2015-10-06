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
		netLDI: '';
		netLDIPort: '';
		gemTask: 'gemnetobject';
		userId: 'DataCurator';
		password: 'swordfish';
		yourself.
	self addFieldsToSessionDescription: description.
	^ description