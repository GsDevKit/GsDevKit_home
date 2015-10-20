actions
createTodeDescription: theStoneInfo
	| description |
	description := theStoneInfo createSessionDescriptionFor: self.
	description exportTo: self sessionDescriptionHome pathString , '/'