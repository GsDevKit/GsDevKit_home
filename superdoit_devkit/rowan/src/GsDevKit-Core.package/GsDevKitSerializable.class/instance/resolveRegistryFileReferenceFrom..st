utilities
resolveRegistryFileReferenceFrom: fileReferenceOrPath
  "resolve a reference to a registry file."

  | fileRef stream |
  fileRef := fileReferenceOrPath.
  fileRef isRelative
    ifTrue: [ fileRef := self registry gsDevKitRoot / fileRef pathString ].
  fileRef isDirectory
    ifTrue: [ fileRef := fileRef / self defaultFileName ].
  ^ fileRef