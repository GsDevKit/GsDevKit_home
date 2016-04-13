gsdevkit api
projectEntryMap
	| map stone |
	map := Dictionary new.
	self sys default server projects projectEntries
		do: [ :projectEntry | map at: projectEntry projectName put: projectEntry ].
	self sys local server projects projectEntries
		do: [ :projectEntry | map at: projectEntry projectName put: projectEntry ].
	stone := self defaultStoneIfAbsent: [ ^ map ].
	stone projects projectEntries do: [ :projectEntry | map at: projectEntry projectName put: projectEntry ].
	^ map