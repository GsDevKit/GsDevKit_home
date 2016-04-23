structural access
server
	^ server ifNil: [ server := GsDevKitServer home: self]