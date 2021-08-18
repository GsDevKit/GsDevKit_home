defaults
defaultSourceReference
  "Answer an instance of FileReference locating the file that stores my serialised representation.
	By default this reference will be resolved from sourcePath (which may be relative to the registry's GsDevKitRoot) with the defaultFileName if one isn't provided in sourcePath."

  ^ self resolveRegistryFileReferenceFrom: self sourcePath