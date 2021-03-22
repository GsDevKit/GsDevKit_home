instance creation
importFrom: filePath
  [ ^ STON fromString: filePath asFileReference contents ]
    on: Error
    do: [ :ex | 
      self
        error:
          'The session description file ' , filePath printString , ' cannot be found. '
            , ex messageText ]