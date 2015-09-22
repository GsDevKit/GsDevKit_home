actions
createTopaziniFile: stoneDirectory
	| topaziniFile |
	Transcript
		cr;
		tab;
		show: 'Create .topazini file'.
	topaziniFile := stoneDirectory / '.topazini'.
	FileStream
		forceNewFileNamed: topaziniFile
		do: [ :stream | 
			stream
				nextPutAll: 'SET GEMSTONE ' , self stoneName;
				lf;
				nextPutAll: 'set user DataCurator';
				lf;
				nextPutAll: 'set password swordfish';
				lf ]