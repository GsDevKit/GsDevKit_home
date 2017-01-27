actions
createTopaziniFile: stoneDirectory sessionDescription: aSessionDescriptionOrNil
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
				nextPutAll: 'set user ' , self gemstoneUserId;
				lf;
				nextPutAll: 'set password ' , self gemstonePassword;
				lf.
			aSessionDescriptionOrNil
				ifNotNil: [ 
					stream
						nextPutAll: 'set gemnetid ' , aSessionDescriptionOrNil gemNRS;
						lf ] ]