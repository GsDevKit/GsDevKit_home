defaults
defaultSourcePath
  "Answer an instance of Path representing the default directory in which the file will be stored.
	The path can be absolute, or relative to the registry's #gsDevKitRoot. Either way, the file system will always be the #gsDevKitRoot file system.
	The path can optionally include a fileName, otherwise #defaultFileName will be used when resolving the file reference."

  ^ self subclassResponsibility