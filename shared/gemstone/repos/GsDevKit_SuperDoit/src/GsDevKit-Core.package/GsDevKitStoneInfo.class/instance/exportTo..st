ston
exportTo: aFileReference
  | stream |
  [ 
    stream := FileStream write: aFileReference pathString.
    STON put: self onStreamPretty: stream 
  ] ensure: [ stream ifNotNil:[ stream close ] ]