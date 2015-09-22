doits
post30Load
	| gsDevKitHome windowLayoutHome windowProperties |
	Smalltalk at: #TODE_CLIENT_INSTALLED ifPresent: [ ^ self ].
	gsDevKitHome := FileSystem workingDirectory parent.
	Deprecation
		showWarning: false;
		raiseWarning: false.
	World closeAllWindowsDiscardingChanges.	"close all windows"
	ThreadSafeTranscript open
		extent: 245 @ 110;
		position: 730 @ 550.
	(Smalltalk at: #TDShell) perform: #devKitRoot: with: gsDevKitHome pathString.
	(Smalltalk at: #PolymorphSystemSettings)
		perform: #desktopLogoFileName:
		with: (gsDevKitHome / 'pharo' / 'GemTalkSystemsLogo.png') pathString.
	(Smalltalk at: #TaskbarMorph) perform: #showTaskbar: with: false.
	(Smalltalk at: #NECPreferences) perform: #enabled: with: false.
	windowLayoutHome := ((Smalltalk at: #TDShell) perform: #windowLayoutHome) asFileReference.
	windowProperties := (Smalltalk at: #TDAbstractWindowProperties)
		importFrom: (windowLayoutHome / 'standard-small') pathString.
	windowProperties installOn: (Smalltalk at: #TDTopezGemStoneClient).
	Smalltalk at: #TODE_CLIENT_INSTALLED put: true