accessing
stoneName
  ^ stoneName ifNil: [ stoneName := self defaultStoneName ]