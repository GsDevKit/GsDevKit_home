#!/usr/bin/env gsdevkit_launcher
"
Finish the installation of gsdevkit_launcher that was started by 
	$GS_HOME/alt_bin/bootstrap_launcher:

	If no options are specified, then both the --clone and --populate
	(using the default <stone-name>) options are performed.

	[ --clone ]
		Clone the Rowan, stash and st_launcher projects into
		$GS_HOME/shared/repos.

	[ --populate[=<stone-name>] ]
		Populate an existing stone's directory with the scripts
		needed for development. Two scripts will be symbolically
		linked into the $GS_HOME/server/stones/<stone-name> 
		directory: newBuild_SystemUser_gsdevkit_launcher_tode
		and newBuild_SystemUser_gsdevkit_launcher_deplyer. 

		The *_tode variant of the script creates a tODE image
		with the filetree variants of the script classes installed
		as well as all of the gsdevkit_launcher support classes.

		The *_deployer variant creates the tODE image and copies
		a snapshot of the newly built extent to 
		$GS_HOME/shared/gemstone/snapshots where the solo extent
		is zipped up ready to be uploaded as an asset to the 
		appropriate release tag 
		(https://github.com/GsDevKit/GsDevKit_home/releases/tag/v0.10.0).

		If the <stone-name> is not specified, the default <stone-name> 
		(gsdevkit_launcher_350) is used.


"
Class {
	#name : 'GdkL_Install_Launcher',
	#superclass : 'AbstractGsDevKitProgram',
	#instVars : [
		'clone',
		'populate',
		'stoneName',
		'summary'
	],
	#category : 'gsdevkit_launcher-Scripts'
}

{ #category : 'accessing' }
GdkL_Install_Launcher class >> repositoryCloneSpecs [
  ^ {(Dictionary new
    at: 'remoteUrl' put: 'https://github.com/GemTalk/Rowan.git';
    at: 'repositoryDirName' put: 'Rowan';
    at: 'committish' put: 'gsdevkit_launcher';
    yourself).
  (Dictionary new
    at: 'remoteUrl' put: 'https://github.com/dalehenrich/st_launcher.git';
    at: 'repositoryDirName' put: 'st_launcher';
    at: 'committish' put: 'candidateV0.2';
    yourself).
  (Dictionary new
    at: 'remoteUrl' put: 'https://github.com/dalehenrich/stash.git';
    at: 'repositoryDirName' put: 'stash';
    at: 'committish' put: 'candidateV0.1';
    yourself)}
]

{ #category : 'private' }
GdkL_Install_Launcher >> _defaultStoneName [
  ^ 'gsdevkit_launcher_350'
]

{ #category : 'accessing' }
GdkL_Install_Launcher >> clone [
  "answer true if both clone and populatehave not been specified, otherwise the default is false"

  ^ clone ifNil: [ populate isNil ]
]

{ #category : 'accessing' }
GdkL_Install_Launcher >> clone: ignored [
  "clone option explicitly specified on command line"

  clone := true
]

{ #category : 'testing' }
GdkL_Install_Launcher >> populateStone [
  ^ populate ifNil: [ clone isNil ]
]

{ #category : 'actions' }
GdkL_Install_Launcher >> doClone [
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
]

{ #category : 'actions' }
GdkL_Install_Launcher >> doPopulateStone [
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
]

{ #category : 'main' }
GdkL_Install_Launcher >> main [
  self
    doClone;
    doPopulateStone.
  ^ self summary
]

{ #category : 'options' }
GdkL_Install_Launcher >> scriptMethodOptions [
  ^ super scriptMethodOptions
    ,
      {#('clone' nil #'none' #'clone:').
      #('populate' nil #'optional' #'stoneName:')}
]

{ #category : 'accessing' }
GdkL_Install_Launcher >> stoneName [
  ^ stoneName ifNil: [ self _defaultStoneName ]
]

{ #category : 'accessing' }
GdkL_Install_Launcher >> stoneName: aStoneName [
  populate := true.
  aStoneName
    ifNil: [ stoneName := self _defaultStoneName ]
    ifNotNil: [ stoneName := aStoneName ]
]

{ #category : 'actions' }
GdkL_Install_Launcher >> summary [
  ^ summary
    ifNil: [ 
      summary := Dictionary new
        at: #'clone' put: #'skipped' -> 'no --clone option specified';
        at: #'populateStone' put: #'skipped' -> 'no --populate option specified';
        yourself ]
]

{ #category : 'usage' }
GdkL_Install_Launcher >> usageExamples: scriptName [
  ^ scriptName
    ,
      '
	' , scriptName
    ,
      ' --clone --populate=gs_launcher_350
	' , scriptName
    ,
      ' --populate=gs_launcher_350	
	' , scriptName
    ,
      ' --populate
	' , scriptName
    ,
      ' --populate --clone
	' , scriptName
    ,
      ' --clone

	' , scriptName
    ,
      ' -D -- --clone
'
]

{ #category : 'usage' }
GdkL_Install_Launcher >> usageSynopsis: scriptName [
  ^ (super usageSynopsis: scriptName)
    , ' [ --clone ] [ --populate[=<stone-name>] ]'
]
