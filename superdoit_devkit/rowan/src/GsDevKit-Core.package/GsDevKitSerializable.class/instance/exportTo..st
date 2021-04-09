exporting
exportTo: fileReference
  | fileRef stream |
  fileRef := self resolveRegistryFileReferenceFrom: fileReference.
  fileRef exists
    ifTrue: [ fileRef delete ].
  stream := fileRef writeStream.
  self serializeOn: stream.
  stream close