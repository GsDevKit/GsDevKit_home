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
				nextPutAll: info stoneName;
				cr ]