actions
copyTemplateFiles: stoneDirectory
	| templateDir |
	Transcript
		cr;
		tab;
		show: 'Copying template files'.
	templateDir := self templateHome.
	self templateFiles do: [ :fileName | templateDir / fileName copyTo: stoneDirectory / fileName ]