actions
copyTemplateFiles: stoneDirectory
	Transcript
		cr;
		tab;
		show: 'Copying template files'.
	self templateFiles
		do: [ :assocOrString | 
			| fileName destName templateFile |
			assocOrString isString
				ifTrue: [ fileName := destName := assocOrString ]
				ifFalse: [ 
					fileName := assocOrString key.
					destName := assocOrString value ].
			templateFile := self gemStoneTemplateFileRefForFile: fileName.
			templateFile copyTo: stoneDirectory / destName ]