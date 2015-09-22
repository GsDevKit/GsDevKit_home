instance creation
importFrom: aFileReference
	FileStream readOnlyFileNamed: aFileReference pathString do: [ :fileStream | ^ STON fromStream: fileStream ]