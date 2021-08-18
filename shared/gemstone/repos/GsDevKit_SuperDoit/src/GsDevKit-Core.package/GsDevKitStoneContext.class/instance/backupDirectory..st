updating
backupDirectory: aPathString
  (aPathString isEmpty or: [ aPathString last = $/ ])
    ifTrue: [ backupDirectory := aPathString ]
    ifFalse: [ backupDirectory := aPathString , '/' ]