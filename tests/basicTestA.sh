#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -xe  # print commands and exit on error

stones

startStone -b ${STONENAME1}

stones

    # help
attachForeignStone -h
attachOldDevKitStone -h
bootstrapGLASS -h
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
startAllStones -h
startClient -h
stopClient -h
editClient -h
startNetldi -h
startStatmonitor -h
startStone -h
startTopaz -h
status -h
stones -h
stopNetldi -h
stopStone -h
stopAllStones -h
smalltalkCI -h
todeBackup -h
todeLoad -h
todeIt -h
todeRestore -h
todeUpdate -h
updateGsDevKit -h
upgradeStone -h

stones

todeIt ${STONENAME1} eval \`3+4\`
todeIt ${STONENAME1} ls /home

export GIT_MERGE_AUTOEDIT=no
updateGsDevKit
updateGsDevKit -g
updateGsDevKit -i
updateGsDevKit -c
updateGsDevKit -d
updateGsDevKit -s
updateGsDevKit -t
updateGsDevKit -gt
updateGsDevKit -gtc
updateGsDevKit -gtd
updateGsDevKit -gts
updateGsDevKit -u 3.1.0.10
updateGsDevKit -u preview
updateGsDevKit -u $GS_VERSION
updateGsDevKit -u package
updateGsDevKit -u package-cache

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
todeLoad ${STONENAME4}

#create a tODE stone
createStone -t $todeSnapshot ${STONENAME3} $GS_VERSION

# RPC login (Issue #161)
startTopaz ${STONENAME3} << EOF
login
run
3+4
%
logout
exit 0
EOF

# Linked login
startTopaz ${STONENAME3} -l << EOF
login
run
3+4
%
logout
exit 0
EOF


cd $GS_HOME/sys/stones/${STONENAME3}
ls dirs.ston  home  homeComposition.ston  packages.ston  projectComposition.ston  projects  repos.ston
todeIt ${STONENAME3} eval \`3+4\`\; eval \`self == 7 ifFalse: [ System logout ]\`
todeIt ${STONENAME3} ls /home
cd $GS_HOME

stopNetldi ${STONENAME2} ${STONENAME3}  ${STONENAME4}
stopStone -b ${STONENAME2} ${STONENAME3}  ${STONENAME4}

newExtent -n -s $baseSnapshot ${STONENAME3}

deleteStone ${STONENAME2} ${STONENAME3}

createStone -g ${STONENAME3} $GS_VERSION
case "$GS_VERSION" in
  2.4.*) echo "skipping bootstrapGLASS for version $GS_VERSION";;
  *) bootstrapGLASS ${STONENAME3};;
esac
deleteStone ${STONENAME3}

case "$GS_VERSION" in
  2.4.*) echo "skipping username and password createStone test for version $GS_VERSION";;
  *)
     createStone -b -U bozo -P theClown ${STONENAME2} $GS_VERSION
     stopNetldi ${STONENAME2}
     startNetldi ${STONENAME2} -g -A ::1 ${STONENAME2}_ldi
     stopStone -b ${STONENAME2}
     ;;
esac
deleteStone ${STONENAME2}
