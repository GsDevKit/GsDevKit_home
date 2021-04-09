execution
preClassCreationExecuteAgainst: aCommandParser
	"give all commands that need to be executed BEFORE class creation a chance to run"

	self commands
		do: [ :command | command preClassCreationExecuteAgainst: aCommandParser ]