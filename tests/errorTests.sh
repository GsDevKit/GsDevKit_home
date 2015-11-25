#!/usr/bin/env bash
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -x  # print commands and exit on error

# the exit status should be 1 for all error conditions
#   the error message should either be 
#     "The appropriate install script has not been run..."
#     "The stone travis2 does not exist..."
#     "Perhaps a stone has not been created..."
#     "the GsDevKit_server project has not bee installed..."
#     "The reqewst client: tode1 does not exist"

test_exit_status() {
  status="$1"
  if [ "$status" -ne 1 ] ;  then
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
upgradeStone ${STONENAME1} ${STONENAME2} 3.2.9
test_exit_status $?
startTopaz  ${STONENAME1} -l
test_exit_status $?

todeBackup ${STONENAME2} backup.dbf
test_exit_status $?
todeRestore ${STONENAME2} backup.dbf
test_exit_status $?
todeUpdate ${STONENAME2}
test_exit_status $?

startClient tode1
test_exit_status $?

set -e
downloadGemStone 3.2.11
