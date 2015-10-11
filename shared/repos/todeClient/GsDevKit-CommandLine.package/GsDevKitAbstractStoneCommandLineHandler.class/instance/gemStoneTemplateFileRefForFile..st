private
gemStoneTemplateFileRefForFile: aFileName
	| ref |
	ref := self serverTodeSysLocalGemStoneTemplates resolveString: aFileName.
	ref isFile
		ifTrue: [ ^ ref ].
	^ self serverTodeSysDefaultGemStoneTemplates resolveString: aFileName