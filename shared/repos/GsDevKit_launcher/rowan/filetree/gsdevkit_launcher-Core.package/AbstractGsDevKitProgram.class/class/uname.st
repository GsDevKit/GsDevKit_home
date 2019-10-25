shell utilities
uname
  | out cmd |
  cmd := '/bin/uname -sm'.
  self
    execute: cmd
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      out := stdout ].
  cmd := '/usr/bin/tr '' '' ''-'''.
  self
    execute: cmd
    input: out
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      out := stdout ].
  ^ out trimRight	"stdout"