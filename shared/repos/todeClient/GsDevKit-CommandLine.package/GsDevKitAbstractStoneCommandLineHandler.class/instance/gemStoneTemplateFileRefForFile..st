private
gemStoneTemplateFileRefForFile: aFileName
	| ref |
	ref := self serverTodeSysLocalServerGemStoneTemplates resolveString: aFileName.
	ref isFile
		ifTrue: [ ^ ref ].
	^ self serverTodeSysDefaultServerGemStoneTemplates resolveString: aFileName