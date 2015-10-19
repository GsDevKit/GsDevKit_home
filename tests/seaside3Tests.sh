#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

export PATH=$GS_HOME/shared/projects/seaside31/bin:$PATH

installServerSeaside -h
seasideCreateStone -h
seasideInstall -h
seasideUpdate -h

installServerSeaside -c https seaside  $GS_VERSION

# Run Seaside unit tests
devKitCommandLine todeIt seaside << EOF
test --batch project Seaside3
eval \`self hasPassed ifFalse: [ System logout ].\`
EOF

seasideUpdate seaside 
