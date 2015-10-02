actions
copyTemplateFiles: stoneDirectory
	| templateDir |
	Transcript
		cr;
		tab;
		show: 'Copying template files'.
	templateDir := self gs_templateHome.
	self templateFiles
		do: [ :assocOrString | 
			| fileName destName |
			assocOrString isString
				ifTrue: [ fileName := destName := assocOrString ]
				ifFalse: [ 
					fileName := assocOrString key.
					destName := assocOrString value ].
			templateDir / fileName copyTo: stoneDirectory / destName ]