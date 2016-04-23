gsdevkit api
smalltalkClientBaselineSpecsDo: aBlock
	self smalltalkCI compatibleSpecs do: [ :ciLoadSpec | ciLoadSpec baseline ifNotNil: [ aBlock value: ciLoadSpec ] ]