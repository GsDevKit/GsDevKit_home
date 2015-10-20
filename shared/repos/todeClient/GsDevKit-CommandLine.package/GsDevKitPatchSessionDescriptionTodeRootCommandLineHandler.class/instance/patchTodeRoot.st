activations
patchTodeRoot
	| description |
	description := self sessionDescription.
	description serverTodeRoot: self serverTodeHome pathString.
	description exportTo: self sessionDescriptionHome pathString , '/'.
	self exitSuccess