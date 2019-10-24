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
		'stoneName'
	],
	#category : 'gsdevkit_launcher-Scripts'
}

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

{ #category : 'main' }
GdkL_Install_Launcher >> main [
  self stderr
    nextPutAll: 'clone :: ' , self clone printString;
    lf;
    nextPutAll: 'createStone :: ' , self createStone printString.
  self createStone
    ifTrue: [ self stderr nextPutAll: ' -- '; nextPutAll: self stoneName ].
  self stderr lf
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
