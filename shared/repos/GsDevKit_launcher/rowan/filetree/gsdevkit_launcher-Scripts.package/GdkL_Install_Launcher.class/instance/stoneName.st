accessing
stoneName
  ^ stoneName ifNil: [ self _defaultStoneName ]