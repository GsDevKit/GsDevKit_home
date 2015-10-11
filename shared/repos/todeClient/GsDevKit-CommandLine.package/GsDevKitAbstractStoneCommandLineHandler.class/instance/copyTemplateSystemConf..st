actions
copyTemplateSystemConf: stoneDirectory
	| systemConfFile templateSystemConfFile |
	Transcript
		cr;
		tab;
		show: 'Copying system.conf file'.
	templateSystemConfFile := self gemStoneTemplateFileRefForFile: 'system.conf'.
	systemConfFile := stoneDirectory / 'extents' / 'system.conf'.
	templateSystemConfFile copyTo: systemConfFile