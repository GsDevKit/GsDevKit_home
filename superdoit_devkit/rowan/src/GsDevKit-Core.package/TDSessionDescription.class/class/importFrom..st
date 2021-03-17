instance creation
importFrom: filePath
  [ 
  filePath asFileReference readStream
    do: [ :fileStream | ^ STON fromStream: fileStream ] ]
    on: Error
    do: [ :ex | 
      self
        error:
          'The session description file ' , filePath printString , ' cannot be found.' ]