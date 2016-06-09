actions
copySnapshotExtent: stoneDirectory
	"use copydbf, so that any corruption in the extent file can be found at the outset"

	self copySnapshotExtent: self snapshotFile to: stoneDirectory for: self gsVers