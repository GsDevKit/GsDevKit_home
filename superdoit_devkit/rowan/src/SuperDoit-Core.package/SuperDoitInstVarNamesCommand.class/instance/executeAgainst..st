execution
executeAgainst: aCommandParser
	aCommandParser
		instVarNames: aCommandParser instVarNames , ('#(' , self chunk , ')') evaluate