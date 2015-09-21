accessing
snapshotFile
	snapshotFile ifNil: [ snapshotFile := self productsHome / self gsDownloadName / 'bin' / 'extent0.seaside.dbf' ].
	^ snapshotFile