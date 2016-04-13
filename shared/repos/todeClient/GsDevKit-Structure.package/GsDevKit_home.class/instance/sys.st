structural access
sys
	^ sys ifNil: [ sys := GsDevKitSys home: self]