shell utilities
execute: commandLineString exitStatusBlock: exitStatusBlock
  "Executes commandLineString in a child process .

  Returns an Array of the form { stdout . stderr } .
  containing stdout and stderr from the child. 

  Lookup in the PATH environment variable is not performed,
  the commandLineString must specify a complete path to an executable
  or script.

  Upon completion of the child process, exitStatusBlock is invoked with 
  exitStatus, stdout, and stderr for the child."

  ^ self execute: commandLineString input: nil exitStatusBlock: exitStatusBlock