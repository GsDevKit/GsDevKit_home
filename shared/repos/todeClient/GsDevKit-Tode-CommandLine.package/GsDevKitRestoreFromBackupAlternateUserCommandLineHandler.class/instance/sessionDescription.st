accessing
sessionDescription
	^ super sessionDescription copy
		userId: self userId;
		password: self password;
		yourself