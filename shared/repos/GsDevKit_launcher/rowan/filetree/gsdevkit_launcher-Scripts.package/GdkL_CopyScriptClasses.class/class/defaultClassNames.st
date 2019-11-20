private
defaultClassNames
  "(AbstractGsDevKitProgram subclasses collect: [ :each | each name asString ]) asArray"

  ^ #('GdkL_CopyScriptClasses' 'GdkL_Install_Launcher' 'GdkL_Error' 'GdkL_Hello' 'GdkL_Products')
