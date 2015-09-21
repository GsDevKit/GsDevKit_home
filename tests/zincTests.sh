#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

$GS_HOME/bin/installGemStone $GS_VERSION

$GS_HOME/bin/createTodeImage

$GS_HOME/projects/zinc/bin/createZincStone zinc  $GS_VERSION

# Run Zinc unit tests
$GS_HOME/bin/tode todeIt zinc << EOF
test --batch project ZincHTTPComponents
eval \`self hasPassed ifFalse: [ System logout ].\`
EOF
