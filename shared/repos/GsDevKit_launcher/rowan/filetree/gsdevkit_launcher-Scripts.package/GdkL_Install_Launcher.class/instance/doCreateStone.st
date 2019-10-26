actions
doCreateStone
  "
	1. create GsDevKit_home stone
	2. update custom_stone.env and restart netldi
	3. populate the stone directory with usful development scripts
	4. run the newBuild_SystemUser_gsdevkit_launcher_tode script to build initial development stone
  "

  | createSummary stoneDir customEnv contents gsdevkitStoneScriptDir |
  self createStone
    ifFalse: [ ^ self summary ].
  createSummary := Dictionary new.
  self summary at: #'create' put: createSummary.
  stoneDir := ('$GS_HOME/server/stones/' , self stoneName) asFileReference.
  stoneDir exists
    ifTrue: [ 
      createSummary
        at: self stoneName
        put: #'skipped' -> ('stone already exists at ' , stoneDir pathString) ]
    ifFalse: [ 
      self class createStone: self stoneName version: '3.5.0' args: '-g'.
      customEnv := stoneDir / 'custom_stone.env'.
      contents := customEnv contents.
      customEnv
        writeStreamDo: [ :stream | 
          stream
            nextPutAll: contents;
            lf;
            nextPutAll: 'export ROWAN_PROJECTS_HOME=$GS_HOME/shared/repos';
            lf ].
      self class stopNetldi: self stoneName.
      self class startNetldi: self stoneName.	"pick up ROWAN_PROJECTS_HOME in netldi process"
      gsdevkitStoneScriptDir := '$GS_HOME/shared/repos/GsDevKit_launcher/bootstrapping/gemstone/gsdevkit_home'
        asFileReference.
      self class
        ln:
          ' -s '
            ,
              (gsdevkitStoneScriptDir / 'newBuild_SystemUser_gsdevkit_launcher_tode')
                pathString
            , ' ' , stoneDir pathString.
      self class
        ln:
          ' -s '
            ,
              (gsdevkitStoneScriptDir / 'newBuild_SystemUser_gsdevkit_launcher_deployer')
                pathString
            , ' ' , stoneDir pathString.
      self stdout
        nextPutAll:
            (self class
                performOnServer:
                  'cd ' , stoneDir pathString , '; ./newBuild_SystemUser_gsdevkit_launcher_tode'
                logging: true);
        lf.
      createSummary at: self stoneName put: #'created' -> stoneDir pathString ].
  ^ self summary