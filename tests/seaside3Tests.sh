#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

$GS_HOME/bin/downloadGemStone $GS_VERSION
$GS_HOME/bin/utils/cloneGsDevKitProjects -c https -o GsDevKit both
$GS_HOME/bin/utils/cloneSharedTodeProjects -c https both

$GS_HOME/shared/projects/seaside31/bin/seasideCreateStone seaside  $GS_VERSION

# Run Seaside unit tests
$GS_HOME/bin/devKitCommandLine seaside << EOF
test --batch project Seaside3
eval \`self hasPassed ifFalse: [ System logout ].\`
EOF

$GS_HOME/shared/projects/seaside31/bin/seasideUpdate seaside 
