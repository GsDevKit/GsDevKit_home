main
main
  | shebang needsShebangProperty projectDefinition_filetree projectDefinition_tonel packageName sourcePackageDef targetPackageDef classNameList |
  self list
    ifTrue: [ ^ self class defaultClassNames ].
  classNameList := args isEmpty
    ifTrue: [ self class defaultClassNames ]
    ifFalse: [ args ].
  projectDefinition_filetree := self
    _projectDefinitionForUrl:
      'file:$GS_HOME/shared/repos/GsDevKit_launcher/rowan/specs/gsdevkit_launcher_filetree.ston'.
  projectDefinition_tonel := self
    _projectDefinitionForUrl:
      'file:$GS_HOME/shared/repos/GsDevKit_launcher/rowan/specs/gsdevkit_launcher_tonel.ston'.
  packageName := 'gsdevkit_launcher-Scripts'.
  needsShebangProperty := false.
  shebang := '/usr/bin/env gsdevkit_launcher'.
  write = 'filetree'
    ifTrue: [ 
      sourcePackageDef := projectDefinition_tonel packageNamed: packageName.
      targetPackageDef := projectDefinition_filetree packageNamed: packageName ]
    ifFalse: [ 
      targetPackageDef := projectDefinition_tonel packageNamed: packageName.
      sourcePackageDef := projectDefinition_filetree packageNamed: packageName.
      needsShebangProperty := true ].
  classNameList
    do: [ :className | 
      | classDef |
      targetPackageDef
        removeClassNamed: className
        ifAbsent: [ 
          "No need to remove the class definition if is not present"
           ].
      classDef := sourcePackageDef classDefinitionNamed: className.
      needsShebangProperty
        ifTrue: [ classDef shebang: shebang ].
      targetPackageDef addClassDefinition: classDef ].
  write = 'filetree'
    ifTrue: [ projectDefinition_filetree exportPackages ].
  write = 'tonel'
    ifTrue: [ projectDefinition_tonel exportPackages ].
  ^ classNameList