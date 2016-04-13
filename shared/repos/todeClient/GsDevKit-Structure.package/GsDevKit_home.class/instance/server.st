accessing
server
	^ server ifNil: [ server := GsDevKitServer home: self]