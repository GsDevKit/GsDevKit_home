actions
doClone
  | gitTool repositoryRoot |
  self clone
    ifFalse: [ ^ self summary ].
  gitTool := Rowan gitTools.
  repositoryRoot := '$GS_HOME/shared/repos' asFileReference.
  self summary at: #'clone' put: Dictionary new.
  self class repositoryCloneSpecs
    do: [ :specDict | 
      | repositoryName repositoryDirectory committish |
      repositoryName := specDict at: 'repositoryDirName'.
      repositoryDirectory := repositoryRoot / repositoryName.
      repositoryDirectory exists
        ifTrue: [ 
          (self summary at: #'clone')
            at: repositoryName
            put:
              #'skipped'
                ->
                  ('git repository already exists at '
                    , repositoryDirectory pathString printString) ]
        ifFalse: [ 
          gitTool
            gitcloneIn: repositoryRoot pathString
            with:
              ' --no-checkout ' , (specDict at: 'remoteUrl') , ' '
                , repositoryDirectory pathString.
          committish := specDict at: 'committish'.
          gitTool gitcheckoutIn: repositoryDirectory with: committish.
          (self summary at: #'clone')
            at: repositoryName
            put:
              #'cloned' -> (repositoryDirectory pathString , ':' , committish) ] ]