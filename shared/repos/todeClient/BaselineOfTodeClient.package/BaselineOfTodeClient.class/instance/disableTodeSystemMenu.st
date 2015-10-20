initialization
disableTodeSystemMenu
	Smalltalk at: #TDShell ifPresent: [ :class | Smalltalk removeFromStartUpList: class ]