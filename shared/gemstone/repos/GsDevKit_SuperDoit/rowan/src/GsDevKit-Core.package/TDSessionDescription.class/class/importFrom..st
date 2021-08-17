instance creation
importFrom: filePath
  [ ^ STON fromString: filePath asFileReference contents ]
    on: Error
    do: [ :ex | 
      self
        error:
          'An error occured while attempting to import the ' , self class name asString
            , ' file on path "' , filePath asString , '". ' , ex messageText ]