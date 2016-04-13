accessing
server
	^ server ifNil: [ server := GsDevKitSysLocalServer home:  home parent: self ]