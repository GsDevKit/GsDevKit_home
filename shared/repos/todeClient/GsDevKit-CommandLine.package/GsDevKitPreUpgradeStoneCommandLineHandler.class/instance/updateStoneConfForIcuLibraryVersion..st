activation
updateStoneConfForIcuLibraryVersion: libIcuVersion
	| stoneDirectory systemConfFile writeStream |
	stoneDirectory := self gs_stonesHome / self targetStoneName.
	systemConfFile := stoneDirectory / 'extents' / 'system.conf'.
	[ 
	writeStream := systemConfFile writeStream.
	writeStream setToEnd.
	writeStream
		nextPutAll: '# Added by $GS_HOME/bin/upgradeStone';
		lf;
		nextPutAll: 'STN_GEM_LIBICU_VERSION=' , libIcuVersion , ';';
		lf ]
		ensure: [ writeStream ifNotNil: [ writeStream close ] ]