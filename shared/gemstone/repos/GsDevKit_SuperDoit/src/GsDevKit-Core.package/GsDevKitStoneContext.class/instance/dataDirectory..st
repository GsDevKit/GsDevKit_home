updating
dataDirectory: aPathString
  (aPathString isEmpty or: [ aPathString last = $/ ])
    ifTrue: [ dataDirectory := aPathString ]
    ifFalse: [ dataDirectory := aPathString , '/' ]