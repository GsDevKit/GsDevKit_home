importing
importFrom: fileReference
  "Import ston file from fileRefernceOrPathString in fileSystem. If the fileRefernceOrPathString is a directory, load file with defaultFileName from filePath"

  | result |
  [ result := STON fromString: fileReference contents ]
    on: Error
    do: [ :ex | 
      ^ self
        error:
          'An error occured while attempting to import the ' , self asString
            , ' file on path "' , fileReference pathString , '". '
            , ex messageText ].
  result
    sourcePath: fileReference path;
    sourceReference: fileReference;
    modificationTime: fileReference modificationTime.
  ^ result