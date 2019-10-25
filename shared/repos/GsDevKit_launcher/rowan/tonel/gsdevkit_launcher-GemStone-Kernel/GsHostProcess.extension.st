Extension { #name : 'GsHostProcess' }

{ #category : '*gsdevkit_launcher-gemstone-kernel' }
GsHostProcess class >> _execute: commandLineString input: stdinString exitStatusBlock: exitStatusBlock [
 "Executes commandLineString in a child process .
  If stdinString ~~ nil, writes stdinString to the child's stdin.

  Returns an Array of the form { stdout . stderr } .
  containing stdout and stderr from the child. 

  Lookup in the PATH environment variable is not performed,
  the commandLineString must specify a complete path to an executable
  or script.

  Upon completion of the child process, exitStatusBlock is invoked with 
  exitStatus, stdout, and stderr for the child."

  | inst out err status readDataBlk writeOfs nToWrite |
  writeOfs := 1 .
  nToWrite := stdinString size .
  (inst := self _basicNew) _fork: commandLineString .
  out := String new .
  err := String new .
  readDataBlk := [
    [ inst stdout readWillNotBlock] whileTrue:[
      out addAll: (inst stdout read: 16384 )
    ].
    [ inst stderr readWillNotBlock] whileTrue:[
      err addAll: (inst stderr read: 16384 )
    ].
  ].
  [ status := inst childStatus .  
    status == nil
  ] whileTrue:[ 
    (nToWrite > 0 and:[ inst stdin writeWillNotBlock]) ifTrue:[ | nWrote |
      nWrote := inst stdin write: nToWrite from: stdinString startingAt: writeOfs . 
      nWrote ifNil:[ Error signal:'lost stdin' , inst stdin lastErrorString ].
      writeOfs := writeOfs + nWrote .
      nToWrite := nToWrite - nWrote .
      nToWrite == 0 ifTrue:[ inst stdin close ].
    ].   
    readDataBlk value 
  ].
  readDataBlk value .
  exitStatusBlock cull: status cull: out cull: err.
  ^ { out . err } .
]
