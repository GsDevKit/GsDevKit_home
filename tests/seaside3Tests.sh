#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

$GS_HOME/bin/downloadGemStone $vers
$GS_HOME/bin/utils/cloneGsDevKitProjects $modeArg $organizationArg both
$GS_HOME/bin/utils/cloneSharedTodeProjects $modeArg both

$GS_HOME/projects/seaside31/bin/seasideCreateStone seaside  $GS_VERSION

# Run Seaside unit tests
$GS_HOME/bin/tode devKitCommandLine seaside << EOF
test --batch project Seaside3
eval \`self hasPassed ifFalse: [ System logout ].\`
EOF

$GS_HOME/projects/seaside31/bin/seasideUpdate seaside 
