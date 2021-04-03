execution
executeAgainst: aCommandParser
	self commands do: [ :command | command executeAgainst: aCommandParser ]