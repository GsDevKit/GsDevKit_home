actions
copyTonelToFiletree: classNames
  "self copyTonelToFiletree: #('GdkL_CopyScriptClasses' 'GdkL_Error' 'GdkL-Hello')"

  ^ self new
    classNames: classNames;
    write: 'filetree';
    main