gsdevkit utilities
stopNetldi: stoneName
  | commandPath |
  commandPath := '$GS_HOME/bin/stopNetldi' asFileReference pathString.	"Use asFileReference to resolve $GS_HOME in commandPath"
  self
    execute: commandPath , ' ' , stoneName
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      self stdout nextPutAll: stdout.
      ^ stdout ]