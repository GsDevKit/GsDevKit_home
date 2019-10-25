shell utilities
ln: args
  | cmd |
  cmd := '/bin/ln ' , args.
  self
    execute: cmd
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      ^ stdout ]