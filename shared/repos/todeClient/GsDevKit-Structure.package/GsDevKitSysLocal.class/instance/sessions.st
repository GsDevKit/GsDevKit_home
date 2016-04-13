accessing
sessions
	^ sessions ifNil: [ sessions := GsDevKitSysLocalSessions home:  home parent: self ]