accessing
clone
  "answer true if both clone and populatehave not been specified, otherwise the default is false"

  ^ clone ifNil: [ populate isNil ]