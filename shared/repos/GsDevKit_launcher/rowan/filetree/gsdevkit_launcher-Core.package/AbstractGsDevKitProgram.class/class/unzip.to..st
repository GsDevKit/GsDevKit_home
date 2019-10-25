shell utilities
unzip: zipFile to: directory
  | ar cmd |
  cmd := '/usr/bin/unzip -q -d ' , directory asFileReference resolve pathString
    , ' ' , zipFile asFileReference resolve pathString.
  self stdout
    lf;
    nextPutAll: cmd;
    lf.
  self
    execute: cmd
    exitStatusBlock: [ :exitStatus :stdout :stderr | 
      exitStatus ~= 0
        ifTrue: [ Error signal: 'Error , ' , stderr asString ].
      self stdout nextPutAll: stdout.
      ^ stdout ]