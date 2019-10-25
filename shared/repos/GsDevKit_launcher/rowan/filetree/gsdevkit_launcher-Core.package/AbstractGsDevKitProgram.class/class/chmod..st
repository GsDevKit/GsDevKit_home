shell utilities
chmod: args
  | cmd |
  cmd := '/bin/chmod ' , args.
  self
    execute: cmd
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      ^ stdout ]