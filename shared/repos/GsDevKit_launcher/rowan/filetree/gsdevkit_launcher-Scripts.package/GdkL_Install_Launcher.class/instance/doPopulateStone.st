actions
doPopulateStone
  "
	1. update custom_stone.env and restart netldi
	2. populate the stone directory with usful development scripts
  "

  | populateSummary stoneDir customEnv contents gsdevkitStoneScriptDir |
  self populateStone
    ifFalse: [ ^ self summary ].
  populateSummary := Dictionary new.
  self summary at: #'populate' put: populateSummary.
  stoneDir := ('$GS_HOME/server/stones/' , self stoneName) asFileReference.
  stoneDir exists
    ifFalse: [ 
    	self error: 'The stone directory for ', self stoneName printString, ' does not exist.' ].
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
  populateSummary at: self stoneName put: #'populated' -> stoneDir pathString.
  ^ self summary