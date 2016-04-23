#!/usr/bin/env bash
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -x  # print commands

# the exit status should be 1 for all error conditions
#   the error message should either be 
#     "The appropriate install script has not been run..."
#     "The stone travis2 does not exist..."
#     "Perhaps a stone has not been created..."
#     "the GsDevKit_server project has not bee installed..."
#     "The reqewst client: tode1 does not exist"
run_test() {
  local status

  $1  2>&1 /tmp/gsDevKit_test
  status=$?
  cat /tmp/gsDevKit_test | grep "Error on or near line"
  if [ "$?" -ne 1 ] ; then
    # should not get an 'Error on or near line' during these tests
    cat /tmp/gsDevKit_test
    echo "Unexpected unhandled error"
    exit 1
  fi
  cat /tmp/gsDevKit_test
  test_exit_status $?
}

test_exit_status() {
  local ansi_red="\033[91;1m"
  local ansi_reset="\033[0m"

  status="$1"
  if [ "$status" -ne 1 ] ;  then
    printf "${ansi_red}Unexpected exit status (%s)${ansi_reset}\n" "$status"
    exit 1
  fi
}
# test that these commands fail gracefully if installServer has not been run yet
set +e
run_test "createStone ${STONENAME2} $GS_VERSION"
run_test "createClient tode"
run_test "devKitCommandLine --list"
run_test "devKitCommandLine --list"
run_test "$GS_HOME/bin/status"
run_test "startStatmonitor ${STONENAME2}"
run_test "startStone ${STONENAME2}"
run_test "startNetldi ${STONENAME2}"
run_test "stopStone ${STONENAME2}"
run_test "updateGsDevKit"
run_test "newExtent ${STONENAME2}"
run_test "stopNetldi ${STONENAME2}"
run_test "upgradeStone ${STONENAME1} ${STONENAME2} 3.2.9"
run_test "startTopaz  ${STONENAME1} -l"

run_test "todeBackup ${STONENAME2} backup.dbf"
run_test "todeRestore ${STONENAME2} backup.dbf"
run_test "todeUpdate ${STONENAME2}"

run_test "startClient tode1"

set -e
installServerClient
set +e
# Now test argument error conditions
run_test "attachForeignStone"

run_test "attachOldDevKitStone"
run_test "attachOldDevKitStone -Z"
run_test "attachOldDevKitStone -dm"
run_test "attachOldDevKitStone -md"

run_test "clients x"

run_test "createClient"
run_test "createClient -Z"
run_test "createClient -t xxx"

run_test "createStone"
run_test "createStone -Z"

run_test "deleteClient"

run_test "deleteSession"

run_test "deleteStone"

run_test "downloadGemStone"

run_test "installClient x"
run_test "installClient -Z"

run_test "installServer x"
run_test "installServer -Z"

run_test "installServerClient x"
run_test "installServerClient -Z"

run_test "newExtent"
run_test "newExtent -Z"
run_test "newExtent foo"

run_test "products x"

run_test "sessions x"

run_test "setupGsDevKit"
run_test "setupGsDevKit -Z"

run_test "smalltalkCI"
run_test "smalltalkCI -Z"

run_test "startClient"

run_test "startNetldi"
run_test "startNetldi foo"

run_test "startStatmonitor"
run_test "startStatmonitor foo"

run_test "startStone"
run_test "startStone foo"
run_test "startStone -NC"
run_test "startStone -NR"
run_test "startStone -CN"
run_test "startStone -CR"
run_test "startStone -RC"
run_test "startStone -RN"
run_test "startStone -Z"

run_test "startTopaz"
run_test "startTopaz foo"

run_test "status x"
run_test "status -Z"

run_test "stones x"

run_test "stopNetldi"
run_test "stopNetldi foo"

run_test "stopStone"
run_test "stopStone -Z"
run_test "stopStone foo"

run_test "todeBackup"
run_test "todeBackup -Z"
run_test "todeBackup foo"

run_test "todeIt -Z"

run_test "todeLoad"

run_test "todeRestore"
run_test "todeRestore foo"
run_test "todeRestore -Z"

run_test "todeUpdate"
run_test "todeUpdate foo"

run_test "updateGsDevKit -Z"

run_test "upgradeStone"
run_test "upgradeStone foo"
run_test "upgradeStone -Z"

#======= full test complement above the line

run_test "upgradeStone"
