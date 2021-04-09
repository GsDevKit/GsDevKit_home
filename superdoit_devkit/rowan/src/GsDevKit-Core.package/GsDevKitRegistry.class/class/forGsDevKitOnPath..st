instance creation
forGsDevKitOnPath: fileReference
  "Single point of access to registries allowing support for multiple registries tied to separate GsDevKit installations."

  ^ self registries
    at: fileReference
    ifAbsentPut: [ 
      self new
        gsDevKitRoot: fileReference;
        yourself ]