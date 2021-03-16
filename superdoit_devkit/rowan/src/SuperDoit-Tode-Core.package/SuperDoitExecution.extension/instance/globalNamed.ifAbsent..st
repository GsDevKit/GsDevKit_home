*superdoit-tode-core
globalNamed: aString ifAbsent: absentBlock
	^Smalltalk at: aString asSymbol ifAbsent: absentBlock