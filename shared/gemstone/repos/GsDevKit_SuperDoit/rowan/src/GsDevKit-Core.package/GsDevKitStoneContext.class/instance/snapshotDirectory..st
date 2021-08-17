updating
snapshotDirectory: aPathString
  (aPathString isEmpty or: [ aPathString last = $/ ])
    ifTrue: [ snapshotDirectory := aPathString ]
    ifFalse: [ snapshotDirectory := aPathString , '/' ]