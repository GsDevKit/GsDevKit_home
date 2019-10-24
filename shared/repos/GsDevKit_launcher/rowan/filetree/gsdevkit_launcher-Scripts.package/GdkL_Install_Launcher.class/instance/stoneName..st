accessing
stoneName: aStoneName
  create := true.
  aStoneName
    ifNil: [ stoneName := self _defaultStoneName ]
    ifNotNil: [ stoneName := aStoneName ]