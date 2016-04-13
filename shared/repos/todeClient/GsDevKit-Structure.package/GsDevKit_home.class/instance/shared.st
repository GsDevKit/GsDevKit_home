accessing
shared
	^ shared ifNil: [ shared := GsDevKitShared home: self]