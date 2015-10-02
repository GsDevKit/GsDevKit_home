session descriptions
createSessionDescriptionFor: aGsDevKitCreateStoneCommanLine
	| description localHostName defaultServerTodeHome vrsnAr |
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
	vrsnAr := description gemstoneVersion findTokens: '.'.
	((vrsnAr at: 1) asNumber < 3 or: [ (vrsnAr at: 1) asNumber = 3 and: [ (vrsnAr at: 2) asNumber < 2 ] ])
		ifTrue: [ 
			"after GemStone 3.2, port range no longer accepted by startnetldi"
			description netLDIPortRange: '' ].
	^ description