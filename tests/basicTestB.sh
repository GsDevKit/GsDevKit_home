#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -xe  # print commands and exit on error


createStone ${STONENAME2} $GS_VERSION
createStone -g ${STONENAME3} $GS_VERSION
stopAllStones
startAllStones
stopAllStones -b
startAllStones -b
deleteStone ${STONENAME2}
deleteStone ${STONENAME3}

startStone -b ${STONENAME1}
git config --global user.email "travis@example.com"
git config --global user.name "Travis Ci"
todeIt ${STONENAME1} project new Foo

createStone -f -u http://gsdevkit.github.io/GsDevKit_home/TestSample2.ston \
            -i Sample -l Sample \
            -t $todeSnapshot ${STONENAME3} $GS_VERSION

downloadGemStone -f -d 3.4.0-Alpha5 3.4.0

$GS_HOME/bin/private/gsDevKitTodeCommandLine todeIt ${STONENAME3} << EOF
project entry --url=http://gsdevkit.github.io/GsDevKit_home/Flow.ston /sys/stone/projects
project install Flow
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/GLASS1.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Grease.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/GsApplicationTools.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/GsDevKit_home.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/GsDevKit_seaside31.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Magritte3.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Mapless.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Metacello.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/NeoJSON.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/PharoCompatibility.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Sample.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Seaside31.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/ServiceVM.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/SIXX.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Ston.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/TestSample2.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Tode.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/XMLSupport.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/ZincHTTPComponents.ston
EOF

. $GS_HOME/bin/defStone.env ${STONENAME1}
cd $GS_HOME/server/stones/${STONENAME1}
. defStone.env
