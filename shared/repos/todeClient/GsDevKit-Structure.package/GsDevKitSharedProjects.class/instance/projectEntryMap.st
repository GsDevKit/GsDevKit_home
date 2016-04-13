gsdevkit api
projectEntryMap
	| map |
	map := Dictionary new.
	self projectEntries do: [ :projectEntry | map at: projectEntry projectName put: projectEntry ].
	^ map