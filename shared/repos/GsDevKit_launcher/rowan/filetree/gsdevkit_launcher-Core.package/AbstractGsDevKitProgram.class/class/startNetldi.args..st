gsdevkit utilities
startNetldi: stoneName args: startNetldiCommandLineArgs
  | commandPath |
  commandPath := '$GS_HOME/bin/startNetldi' asFileReference pathString.	"Use asFileReference to resolve $GS_HOME in commandPath"
  self
    execute: commandPath , ' ' , stoneName , ' ' , startNetldiCommandLineArgs
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      self stdout nextPutAll: stdout.
      ^ stdout ]