actions
installedStoneReportOn: stream
	stream
		nextPutAll: 'Installed Stones:';
		cr.
	(self installedStones values sorted: [ :a :b | a printString < b printString ])
		do: [ :info | 
			stream
				tab;
				nextPutAll: info gsVers;
				tab;
				nextPutAll: info stoneName.
			info isForeignStone
				ifTrue: [ 
					stream
						tab;
						nextPutAll: '(foreign)' ].
			info isAttached
				ifTrue: [ 
					stream
						tab;
						nextPutAll: '(attached)' ].
			stream cr ]