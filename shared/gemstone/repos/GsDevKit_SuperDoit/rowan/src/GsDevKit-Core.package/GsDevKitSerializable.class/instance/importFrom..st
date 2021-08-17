importing
importFrom: fileReference
  | fileRef result |
  fileRef := self resolveRegistryFileReferenceFrom: fileReference.
  result := self class importFrom: fileRef.
  self updateFrom: result