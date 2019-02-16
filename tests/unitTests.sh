#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2019 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -e  # exit on error

errorExitOnTestFailure="$2"

startTopaz "$1" -l << EOF

	iferr 1 stk
	iferr 2 exit 1

	login

	expectvalue true
	run
	| suite res passed errorExitOnTestFailure |
	errorExitOnTestFailure := $errorExitOnTestFailure
	passed := true.
  suite := TestSuite named: 'Image Test Suite'.
  TestCase suite tests do: [ :s | suite addTests: s tests ].
	res := suite run.

 	GsFile gciLogServer: 'Unit tests for $1, GemStone version ', (System gemVersionAt: #gsVersion) printString.
	GsFile gciLogServer: res printString.
	GsFile gciLogServer: '  errors'.
	passed := res errors isEmpty.
	(res errors collect: [:each | each printString ]) asArray sort do: [:each |
		GsFile gciLogServer: '	', each ].
	res failures size = 0
		ifTrue: [ 
			^ errorExitOnTestFailure
					ifTrue: [ passed ]
					ifFalse: [ true ] ].
	GsFile gciLogServer: '  failures'.
	passed := passed & res errors isEmpty.
	(res failures collect: [:each | each printString]) asArray sort do: [:each |
		GsFile gciLogServer: '	',each ].
	^ errorExitOnTestFailure
			ifTrue: [ passed ]
			ifFalse: [ true ]
%

	logout
	errorCount
	exit
EOF
