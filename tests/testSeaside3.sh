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
seasideUpgrade -h
seasideWebServer -h

installServerSeaside -c https -z 8383 seaside  $GS_VERSION

# Run Seaside unit tests
devKitCommandLine todeIt seaside << EOF
test --batch project Seaside3
eval \`self hasPassed ifFalse: [ System logout ].\`
EOF

seasideUpdate seaside 

# test seaside webServer
seasideWebServer seaside --help
seasideWebServer seaside --start
curl http://localhost:8383
seasideWebServer seaside --stop
