#!/usr/bin/env gsdevkit_launcher
"
Finish the installation of gsdevkit_launcher that was started by 
	$GS_HOME/alt_bin/bootstrap_launcher:

	If no options are specified, then both the --clone and --create
	(using the default <stone-name>) options are performed.

	[ --clone ]
		Clone the Rowan, stash and st_launcher projects into
		$GS_HOME/shared/repos.

	[ --create[=<stone-name>] ]
		Create a stone that can used for doing gsdevkit_launcher
		script development. Two scripts will be symbolically
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
		'create',
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
  "answer true if both clone and create have not been specified, otherwise the default is false"

  ^ clone ifNil: [ create isNil ]
]

{ #category : 'accessing' }
GdkL_Install_Launcher >> clone: ignored [
  "clone option explicitly specified on command line"

  clone := true
]

{ #category : 'testing' }
GdkL_Install_Launcher >> createStone [
  ^ create ifNil: [ clone isNil ]
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
GdkL_Install_Launcher >> doCreateStone [
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
      customEnv := stoneDir / 'custome_stone.env'.
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
      gsdevkitStoneScriptDir := '$GS_HOME/shared/repos/GsDefKit_launcher/bootstrapping/gemstone/gsdefkit_home'
        asFileReference.
      self
        ln:
          ' -s '
            ,
              (gsdevkitStoneScriptDir / 'newBuild_SystemUser_gsdevkit_launcher_tode')
                pathString
            , ' ' , stoneDir pathString.
      self
        ln:
          ' -s '
            ,
              (gsdevkitStoneScriptDir / 'newBuild_SystemUser_gsdevkit_launcher_deployer')
                pathString
            , ' ' , stoneDir pathString.
      self stdout
        nextPutAll:
            (System
                performOnServer:
                  'cd ' , stoneDir pathString , '; ./newBuild_SystemUser_gsdevkit_launcher_tode');
        lf.
      createSummary at: self stoneName put: #'created' -> stoneDir pathString ].
  ^ self summary
]

{ #category : 'main' }
GdkL_Install_Launcher >> main [
  false
    ifTrue: [ 
      self stderr
        nextPutAll: 'clone :: ' , self clone printString;
        lf;
        nextPutAll: 'createStone :: ' , self createStone printString.
      self createStone
        ifTrue: [ 
          self stderr
            nextPutAll: ' -- ';
            nextPutAll: self stoneName ].
      self stderr lf ].
  self
    doClone;
    doCreateStone.
  ^ self summary
]

{ #category : 'options' }
GdkL_Install_Launcher >> scriptMethodOptions [
  ^ super scriptMethodOptions
    ,
      {#('clone' nil #'none' #'clone:').
      #('create' nil #'optional' #'stoneName:')}
]

{ #category : 'accessing' }
GdkL_Install_Launcher >> stoneName [
  ^ stoneName ifNil: [ self _defaultStoneName ]
]

{ #category : 'accessing' }
GdkL_Install_Launcher >> stoneName: aStoneName [
  create := true.
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
        at: #'createStone' put: #'skipped' -> 'no --create option specified';
        yourself ]
]

{ #category : 'usage' }
GdkL_Install_Launcher >> usageExamples: scriptName [
  ^ scriptName
    ,
      '
	' , scriptName
    ,
      ' --clone --create=gs_launcher_350
	' , scriptName
    ,
      ' --create=gs_launcher_350	
	' , scriptName
    ,
      ' --create
	' , scriptName
    ,
      ' --create --clone
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
    , ' [ --clone ] [ --create[=<stone-name>] ]'
]
