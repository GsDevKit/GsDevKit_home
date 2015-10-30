#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

stones

startStone -b ${STONENAME1}

stones

    # help
attachForeignStone -h
attachOldDevKitStone -h
clients -h
createClient -h
createStone -h
deleteClient -h
deleteSession -h
deleteStone -h
devKitCommandLine -h
downloadGemStone -h
installClient -h
installServer -h
installServerClient -h
newExtent -h
products -h
sessions -h
setupGsDevKit -h
startClient -h
startNetldi -h
startStatmonitor -h
startStone -h
status -h
stones -h
stopNetldi -h
stopStone -h
todeBackup -h
todeInstall -h
todeIt -h
todeRestore -h
todeUpdate -h
updateGsDevKit -h
upgradeStone -h

stones

todeIt ${STONENAME1} eval \`3+4\`
todeIt ${STONENAME1} ls /home

updateGsDevKit
updateGsDevKit -g
updateGsDevKit -t
updateGsDevKit -g -t
updateGsDevKit -g -t -i

$GS_HOME/bin/utils/updateSharedTodeProjectsClone both

todeUpdate ${STONENAME1}

stopStone ${STONENAME1}
stopNetldi ${STONENAME1}
startStone ${STONENAME1}
startStone ${STONENAME1}
startStone -r ${STONENAME1}
startStatmonitor ${STONENAME1}
stopStone -b ${STONENAME1}

status

$GS_HOME/bin/devKitCommandLine --list

stopStone -b ${STONENAME1}

# create a base stone (no tODE or GLASS1 installed)
createStone -g -s $baseSnapshot ${STONENAME2} $GS_VERSION

# create a base stone (no tODE installed)
createStone -g -s $seasideSnapshot ${STONENAME4} $GS_VERSION

#create a tODE stone
createStone -t $todeSnapshot ${STONENAME3} $GS_VERSION

cd $GS_HOME/sys/stones/${STONENAME3}
ls dirs.ston  home  homeComposition.ston  packages.ston  projectComposition.ston  projects  repos.ston
todeIt ${STONENAME3} eval \`3+4\`\; eval \`self == 7 ifFalse: [ System logout ]\`
todeIt ${STONENAME3} ls /home

stopStone -b ${STONENAME2}
stopStone -b ${STONENAME3}
stopStone -b ${STONENAME4}

newExtent -n -s $baseSnapshot ${STONENAME3}

. $GS_HOME/bin/defStone.env ${STONENAME1}
cd $GS_HOME/server/stones/${STONENAME1}
. defStone.env

deleteStone ${STONENAME2} ${STONENAME3}

startStone -b ${STONENAME1}
git config --global user.email "travis@example.com"
git config --global user.name "Travis Ci"
todeIt ${STONENAME1} project new Foo

createStone -f -u http://gsdevkit.github.io/GsDevKit_home/TestSample2.ston \
            -i Sample -l Sample \
            -t $todeSnapshot ${STONENAME3} $GS_VERSION

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
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Seaside3.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/ServiceVM.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/SIXX.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Ston.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/TestSample2.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/Tode.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/XMLSupport.ston
project install --local --url=http://gsdevkit.github.io/GsDevKit_home/ZinHTTPComponents.ston
EOF

