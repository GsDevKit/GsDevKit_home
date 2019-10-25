gsdevkit utilities
createStone: stoneName version: gemstoneVersion args: args
  | commandPath |
  commandPath := '$GS_HOME/bin/createStone' asFileReference pathString.	"Use asFileReference to resolve $GS_HOME in commandPath"
  self
    execute: commandPath , ' ' , args , ' ' stoneName , ' ' , gemstoneVersion
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      self stdout nextPutAll: stdout.
      ^ stdout ]