actions
copyFileTreeToTonel: classNames
  "self copyFileTreeToTonel: #('GdkL_CopyScriptClasses' 'GdkL_Error' 'GdkL-Hello')"

  ^ self new
    classNames: classNames;
    write: 'tonel';
    main