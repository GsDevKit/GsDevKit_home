utiities
globalNamed: aString
	"return nil if global not defined"

	^ GsSession currentSession objectNamed: aString asSymbol