actions
copyTemplateSystemConf: stoneDirectory
	| systemConfFile templateSystemConfFile |
	Transcript
		cr;
		tab;
		show: 'Copying system.conf file'.
	templateSystemConfFile := self gs_templateHome / 'system.conf'.
	systemConfFile := stoneDirectory / 'extents' / 'system.conf'.
	templateSystemConfFile copyTo: systemConfFile.
