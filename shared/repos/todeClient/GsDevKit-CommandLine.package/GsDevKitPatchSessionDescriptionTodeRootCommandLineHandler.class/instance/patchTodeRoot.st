activations
patchTodeRoot
	| description |
	description := self sessionDescription.
	description serverTodeRoot: self serverTodeHome.
	description exportTo: self sessionDescriptionHome pathString , '/'.
	self exitSuccess