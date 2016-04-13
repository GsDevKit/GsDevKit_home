accessing
server
	^ server ifNil: [ server := GsDevKitSharedServer home:  home parent: self ]