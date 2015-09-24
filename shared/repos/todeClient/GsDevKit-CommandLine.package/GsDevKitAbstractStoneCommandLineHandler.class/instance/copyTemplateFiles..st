actions
copyTemplateFiles: stoneDirectory
	| templateDir |
	Transcript
		cr;
		tab;
		show: 'Copying template files'.
	templateDir := self gs_templateHome.
	self templateFiles do: [ :fileName | templateDir / fileName copyTo: stoneDirectory / fileName ]