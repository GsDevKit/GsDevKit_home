accessing
sourcePath
  "Answer the sourcePath or the default source path"

  ^ sourcePath ifNil: [ sourcePath := self defaultSourcePath ]