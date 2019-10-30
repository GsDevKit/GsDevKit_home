accessing
stoneName: aStoneName
  populate := true.
  aStoneName
    ifNil: [ stoneName := self _defaultStoneName ]
    ifNotNil: [ stoneName := aStoneName ]