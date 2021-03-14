exit
exit: message withStatus: statusInteger
	"Does not return and terminates the os process with exit status <statusInteger>"

	self logErrorMessage: message.
	ExitClientError signal: 'explicit process exit' status: statusInteger