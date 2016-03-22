actions
createTodeDescription: theStoneInfo
	| description |
	description := theStoneInfo createSessionDescriptionFor: self for: self localHostName.
	description exportTo: self sessionDescriptionHome pathString , '/'