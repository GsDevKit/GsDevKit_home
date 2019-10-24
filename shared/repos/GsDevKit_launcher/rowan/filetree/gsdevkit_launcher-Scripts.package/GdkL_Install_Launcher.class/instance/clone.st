accessing
clone
  "answer true if both clone and create have not been specified, otherwise the default is false"

  ^ clone ifNil: [ create isNil ]