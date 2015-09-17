actions
copySeasideExtent: stoneDirectory
	| extentFile seasideExtentFile |
	Transcript
		cr;
		tab;
		show: 'Copying extent file'.
	seasideExtentFile := self productsHome / self gsDownloadName / 'bin' / 'extent0.seaside.dbf'.
	extentFile := stoneDirectory / 'extents' / 'extent0.dbf'.
	seasideExtentFile copyTo: extentFile.
	OSProcess command: 'chmod +w ' , extentFile pathString