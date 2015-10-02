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
			assocOrString isAssociation
				ifTrue: [ 
					fileName := assocOrString key.
					destName := assocOrString value ]
				ifFalse: [ fileName := destName := assocOrString ].
			templateDir / fileName copyTo: stoneDirectory / destName ]