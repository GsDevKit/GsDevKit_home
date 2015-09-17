actions
installedProductsReportOn: stream
	stream
		nextPutAll: 'Installed Products:';
		cr.
	self installedProducts keys sorted
		do: [ :gsVers | 
			stream
				tab;
				nextPutAll: gsVers;
				cr ]