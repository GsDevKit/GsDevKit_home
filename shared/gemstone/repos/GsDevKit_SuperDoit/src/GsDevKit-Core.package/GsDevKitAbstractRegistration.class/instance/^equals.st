comparing
= anObject
  "GsDevKit Registrations are considered equal if their instance variables are equal"

  ^ anObject class == self class and: [ anObject registryName = registryName ]