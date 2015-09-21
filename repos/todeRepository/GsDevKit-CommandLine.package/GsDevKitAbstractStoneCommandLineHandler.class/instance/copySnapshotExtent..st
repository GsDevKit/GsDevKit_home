actions
copySnapshotExtent: stoneDirectory
	"use copydbf, so that any corruption in the extent file can be found at the outset"

	| extentFile snapshotExtentFile argsArray |
	Transcript
		cr;
		tab;
		show: 'Copying extent file: ' , self snapshotFile pathString printString.
	snapshotExtentFile := self snapshotFile.
	extentFile := stoneDirectory / 'extents' / 'extent0.dbf'.
	argsArray := {(snapshotExtentFile pathString).
	(extentFile pathString)}.
	Transcript
		cr;
		show: (self runShellCommand: (self gemstoneBin / 'copydbf') pathString args: argsArray);
		cr.
	OSProcess command: 'chmod +w ' , extentFile pathString