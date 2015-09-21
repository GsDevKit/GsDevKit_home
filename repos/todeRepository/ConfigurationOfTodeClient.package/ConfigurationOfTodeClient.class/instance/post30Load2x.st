doits
post30Load2x
	| gsDevKitHome monoFontName windowProperties bounds |
	Smalltalk at: #TODE_CLIENT_INSTALLED ifPresent: [ ^ self ].
	gsDevKitHome := FileSystem workingDirectory parent.
	Deprecation
		showWarning: false;
		raiseWarning: false.
	World closeAllWindowsDiscardingChanges.	"close all windows"
	(Smalltalk at: #TDShell) perform: #devKitRoot: with: gsDevKitHome pathString.
	(Smalltalk at: #PolymorphSystemSettings)
		perform: #desktopLogoFileName:
		with: (gsDevKitHome / 'pharo' / 'GemTalkSystemsLogo.png') pathString.
	(Smalltalk at: #TaskbarMorph) perform: #showTaskbar: with: false.
	(Smalltalk at: #NECPreferences) perform: #enabled: with: false.
	Smalltalk at: #TODE_CLIENT_INSTALLED put: true.
	(Smalltalk at: #TDShell) resetWorldMenu.
	FreeTypeFontProvider current updateFromSystem.
	monoFontName := 'Courier New'.	"Windows"
	Smalltalk os isUnix
		ifTrue: [ monoFontName := 'DejaVu Sans Mono' ]
		ifFalse: [ 
			Smalltalk os isMacOSX
				ifTrue: [ monoFontName := 'Monaco' ] ].
	StandardFonts defaultFont: (LogicalFont familyName: monoFontName pointSize: 8).
	StandardFonts setAllStandardFontsTo: StandardFonts defaultFont.
	windowProperties := (Smalltalk at: #TDAbstractWindowProperties) import: 'standard-small'.
	windowProperties installOn: (Smalltalk at: #TDTopezGemStoneClient).
	bounds := windowProperties caculateWindowBounds at: #transcript.
	(Smalltalk at: #TDShell) resizeTranscript: bounds