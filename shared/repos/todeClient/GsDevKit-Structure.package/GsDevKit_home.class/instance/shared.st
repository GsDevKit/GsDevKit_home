structural access
shared
	^ shared ifNil: [ shared := GsDevKitShared home: self]