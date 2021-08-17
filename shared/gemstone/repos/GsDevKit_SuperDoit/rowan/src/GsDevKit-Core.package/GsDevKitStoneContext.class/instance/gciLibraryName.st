accessing
gciLibraryName
  ^ gciLibraryName
    ifNil: [ gciLibraryName := 'libgcirpc-' , self gemstoneVersion , '-64' ]