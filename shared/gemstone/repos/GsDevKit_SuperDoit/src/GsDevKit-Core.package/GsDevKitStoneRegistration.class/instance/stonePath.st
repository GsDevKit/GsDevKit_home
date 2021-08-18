Accessing
stonePath
  ^ stonePath ifNil: [ stonePath := self defaultStonePath ]