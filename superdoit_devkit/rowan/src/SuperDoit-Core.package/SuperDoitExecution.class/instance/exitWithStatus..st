exit
exitWithStatus: statusInteger
	"Does not return and terminates the os process with exit status <statusInteger>"

	ExitClientError signal: 'explicit process exit' status: statusInteger