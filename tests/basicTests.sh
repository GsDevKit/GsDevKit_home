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
downloadGemStone -h
installClient -h
installServer -h
installServerClient -h
installTode -h
newExtent -h
products -h
sessions -h
startClient -h
startNetldi -h
startStatmonitor -h
startStone -h
status -h
stones -h
stopNetldi -h
stopStone -h
todeBackup -h
todeIt -h
todeRestore -h
updateClient -h
updateGsDevKit -h
updateStone -h
upgradeStone -h

stones

stopStone ${STONENAME1}
stopNetldi ${STONENAME1}
updateStone ${STONENAME1}
startStone ${STONENAME1}
stopStone -b ${STONENAME1}

status

$GS_HOME/bin/private/gsDevKitCommandLine --list

stopStone -b ${STONENAME1}

# create a base stone (no tODE or GLASS1 installed)
createStone -g -s $baseSnapshot ${STONENAME2} $GS_VERSION

# create a base stone (no tODE installed)
createStone -g -s $seasideSnapshot ${STONENAME4} $GS_VERSION

#create a tODE stone
createStone -t -s $todeSnapshot ${STONENAME3} $GS_VERSION
cd $GS_HOME/sys/local/stones/${STONENAME3}
ls dirs.ston  home  homeComposition.ston  packages.ston  projectComposition.ston  projects  repos.ston
performTodeCommand ${STONENAME3} eval \`3+4\`\; eval \`self == 7 ifFalse: [ System logout ]\`
performTodeCommand ${STONENAME3} ls /home

stopStone -b ${STONENAME2}
stopStone -b ${STONENAME3}
stopStone -b ${STONENAME4}

. $GS_HOME/bin/defStone.env ${STONENAME1}
cd $GS_HOME/gemstone/stones/${STONENAME1}
. defStone.env

