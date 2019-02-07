#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -e  # exit on error

installServerClient
createStone ${STONENAME1} $GS_VERSION

"$GS_HOME/bin/private/gsDevKitTodeCommandLine" todeIt ${STONENAME1} << EOF
# after test run, <self> will be a TestResult
test --batch image
eval \`(self hasErrors or: [ self hasFailures ]) ifTrue: [ self error: 'Test failed' ]\`
EOF

