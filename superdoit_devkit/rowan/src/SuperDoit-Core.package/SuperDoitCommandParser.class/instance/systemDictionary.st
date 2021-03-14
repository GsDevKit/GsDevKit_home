accessing
systemDictionary
	"install the script class in a symbol dictionary in the transient symbol list ... 
		we do not want the class persisted"

	^ systemDictionary
		ifNil: [ 
			| sess symbolList name |
			sess := GsCurrentSession currentSession.
			sess _transientSymbolList ifNil: [ System refreshTransientSymbolList ].
			symbolList := sess transientSymbolList.
			name := #'superDoitSymbolDict'.
			^ systemDictionary := (symbolList resolveSymbol: name)
				ifNil: [ 
					systemDictionary := SymbolDictionary new name: name.
					symbolList insertObject: systemDictionary at: 1 ] ]