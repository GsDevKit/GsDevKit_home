#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

$GS_HOME/bin/installGemStone $GS_VERSION

$GS_HOME/bin/createTodeImage

$GS_HOME/projects/pier3/bin/createPier300Stone pier $GS_VERSION

# Run Pier unit tests
$GS_HOME/bin/tode todeIt pier << EOF
test --batch project Pier3
eval \`self hasPassed ifFalse: [ System logout ].\`
EOF
