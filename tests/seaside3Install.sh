#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -e  # exit on error

startStone -b ${STONENAME1}

# test the Getting started with Seaside instructions
"$GS_HOME/bin/private/gsDevKitTodeCommandLine" todeIt ${STONENAME1} << EOF
# after test run, <self> will be a TestResult
project install --url=http://gsdevkit.github.io/GsDevKit_home/Seaside32.ston
project load --loads=\`#('Welcome' 'Zinc Project' 'Development' 'Examples' 'CI')\` Seaside3
test --batch project Seaside3
eval \`[(self hasErrors or: [ self hasFailures ]) ifTrue: [ self error: 'Tests failed' ] ] on: Warning do: [:ex | ex resume: true ]\`
EOF

