shell utilities
execute: commandLineString input: stdinString exitStatusBlock: exitStatusBlock
  "Executes commandLineString in a child process .
  If stdinString ~~ nil, writes stdinString to the child's stdin.

  Returns an Array of the form { stdout . stderr } .
  containing stdout and stderr from the child. 

  Lookup in the PATH environment variable is not performed,
  the commandLineString must specify a complete path to an executable
  or script.

  Upon completion of the child process, exitStatusBlock is invoked with 
  exitStatus, stdout, and stderr for the child."

  ^ GsHostProcess
    _execute: commandLineString
    input: stdinString
    exitStatusBlock: exitStatusBlock