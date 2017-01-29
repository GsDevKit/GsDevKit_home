actions
gunzipSnapshotExtent: stoneDirectory
	| extentDir argsArray cmdPath |
	extentDir := stoneDirectory / 'extents'.
	Transcript
		cr;
		tab;
		show:
				'Gunzipping extent file: ' , self snapshotFile pathString printString , ' (copying to '
						, extentDir pathString printString , ' first)'.
	cmdPath := '/bin/cp'.
	argsArray := {(self snapshotFile pathString).
	((extentDir / 'extent0.dbf.gz') pathString)}.
	Transcript
		cr;
		show: (self runShellCommand: cmdPath args: argsArray);
		cr.
	cmdPath := (self runShellCommand: '/usr/bin/which' args: {'gunzip'}) trimBoth.
	argsArray := {((extentDir / 'extent0.dbf.gz') pathString)}.
	Transcript
		cr;
		show: (self runShellCommand: cmdPath args: argsArray);
		cr