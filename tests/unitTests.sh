#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2019 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -e  # exit on error

startTopaz "$1" -l << EOF

	iferr 1 stk
	iferr 2 exit 1

	login

	expectvalue true
	run
	| suite res passed |
	passed := true.
  suite := TestSuite named: 'Image Test Suite'.
  TestCase suite tests do: [ :s | suite addTests: s tests ].
	res := suite run.

 	GsFile logServer: 'Unit tests for $1, GemStone version ', (System gemVersionAt: #gsVersion) printString.
	GsFile logServer: res printString.
	GsFile logServer: '  errors'.
	passed := res errors isEmpty.
	(res errors collect: [:each | each printString ]) asArray sort do: [:each |
		GsFile logServer: '	', each ].
	res failures size = 0
		ifTrue: [ ^ passed ].
	GsFile logServer: '  failures'.
	passed := passed & res errors isEmpty.
	(res failures collect: [:each | each printString]) asArray sort do: [:each |
		GsFile logServer: '	',each ].
	^ passed
%

	logout
	errorCount
	exit
EOF
