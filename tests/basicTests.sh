#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

stones

startStone -b ${STONENAME1}

stones

    # help
backup -h
createStone -h
createTodeImage -h
createTodeStone -h
installClient -h
installGci -h
installGemStone -h
installPharo -h
installServer -h
installTodeStone -h
$GS_HOME/bin/pharo -h  # apparently '.' is in the PATH
restoreFromBackup -h
startNetldi -h
startStatmonitor -h
startStone -h
stoneNewExtent -h
stones -h
stopNetldi -h
stopStone -h
$GS_HOME/bin/tode -h   # apparently '.' is in the PATH
todeClient -h
updateTodeImage -h
# functions
createTodeImage -p _small

stones

# backup travis travis.dbf
# restoreFromBackup travis travis.dbf

stopStone ${STONENAME1}
stopNetldi ${STONENAME1}
updateTodeImage ${STONENAME1}
startStone ${STONENAME1}
stopStone -b ${STONENAME1}

stones

$GS_HOME/bin/pharo --list
$GS_HOME/bin/tode --list

stopStone -b ${STONENAME1}

# create a base stone (no tODE or GLASS1 installed)
createStone -s $baseSnapshot ${STONENAME2} $GS_VERSION

# create a base stone (no tODE installed)
createStone -s $seasideSnapshot ${STONENAME4} $GS_VERSION

#create a tODE stone
createTodeStone -s $todeHomeSnapshot ${STONENAME3} $GS_VERSION
cd $GS_HOME/tode/sys/stones/${STONENAME3}
ls dirs.ston  home  homeComposition.ston  packages.ston  projectComposition.ston  projects  repos.ston
performTodeCommand ${STONENAME3} eval \`3+4\`\; eval \`self == 7 ifFalse: [ System logout ]\`
performTodeCommand ${STONENAME3} ls /home

stopStone -b ${STONENAME2}
stopStone -b ${STONENAME3}
stopStone -b ${STONENAME4}

. $GS_HOME/bin/defStone.env ${STONENAME1}
cd $GS_HOME/gemstone/stones/${STONENAME1}
. defStone.env

echo "$0 DONE"
