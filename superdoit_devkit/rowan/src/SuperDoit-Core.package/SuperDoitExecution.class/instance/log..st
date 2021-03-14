logging
log: anObject
	| stdout |
	stdout := GsFile stdout.
	self ston: anObject on: stdout.
	stdout lf