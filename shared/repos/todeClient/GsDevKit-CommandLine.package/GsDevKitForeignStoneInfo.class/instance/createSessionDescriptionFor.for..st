session descriptions
createSessionDescriptionFor: aGsDevKitCreateStoneCommanLine for: localHostName
	| description  defaultServerTodeHome |
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
		userId: aGsDevKitCreateStoneCommanLine gemstoneUserId;
		password: aGsDevKitCreateStoneCommanLine gemstonePassword;
		yourself.
	self addFieldsToSessionDescription: description.
	^ description