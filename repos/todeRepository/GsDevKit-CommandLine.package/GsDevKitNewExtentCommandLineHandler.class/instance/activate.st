activation
activate
	self activateHelp
		ifTrue: [ ^ self ].
	self checkArguments.
	self newExtent.
	self shouldRemoveTranlogs
		ifTrue: [ self removeTranlogs ].
	self exitSuccess	