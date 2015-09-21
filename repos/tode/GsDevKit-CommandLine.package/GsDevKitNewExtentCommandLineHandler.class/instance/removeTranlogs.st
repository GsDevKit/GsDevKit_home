actions
removeTranlogs
	Transcript
		cr;
		show: 'Removing tranlogs for ' , self stoneName.
	self removeTranlogs: self tranlogsHome.
	Transcript
		cr;
		tab;
		show: 'Finished removing tranlogs for ' , self stoneName;
		cr.
