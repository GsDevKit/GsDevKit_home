shell utilities
which: filename
  | ar cmd |
  cmd := '/usr/bin/which ' , filename.
  self
    execute: cmd
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ ^ nil ].
      ^ stdout trimRight ]