#!/usr/bin/env bash
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -x  # print commands and exit on error

test_exit_status() {
  status="$1"
  if [ "$status" -eq 0 ] ;  then
    echo "unexpected exit status ($status)"
    exit 1
  fi
}
set +e
createStone ${STONENAME2} $GS_VERSION
test_exit_status $?
createClient tode
test_exit_status $?
devKitCommandLine --list
test_exit_status $?
devKitCommandLine --list
test_exit_status $?
$GS_HOME/shared/pharo/pharo --list
test_exit_status $?
$GS_HOME/bin/status
test_exit_status $?
startStatmonitor ${STONENAME2}
test_exit_status $?
startStone ${STONENAME2}
test_exit_status $?
startNetldi ${STONENAME2}
test_exit_status $?
stopStone ${STONENAME2}
test_exit_status $?
updateGsDevKit
test_exit_status $?
newExtent ${STONENAME2}
test_exit_status $?
stopNetldi ${STONENAME2}
test_exit_status $?
todeBackup ${STONENAME2}
test_exit_status $?
todeRestore ${STONENAME2}
test_exit_status $?
todeUpdate ${STONENAME2}
test_exit_status $?
upgradeStone ${STONENAME1} ${STONENAME2} 3.2.9
test_exit_status $?

startClient tode1
test_exit_status $?

