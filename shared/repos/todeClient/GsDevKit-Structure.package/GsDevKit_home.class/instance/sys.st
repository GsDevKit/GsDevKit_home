accessing
sys
	^ sys ifNil: [ sys := GsDevKitSys home: self]