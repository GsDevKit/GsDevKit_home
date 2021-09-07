accessing
sourceReference
  "Answer the sourceReference or the default source path"

  ^ sourceReference ifNil: [ sourceReference := self defaultSourceReference ]