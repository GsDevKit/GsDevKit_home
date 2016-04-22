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


run_test() {
  $1
  test_exit_status $?
}

test_exit_status() {
  local ansi_red="\033[91;1m"
  local ansi_reset="\033[0m"

  status="$1"
  if [ "$status" -ne 1 ] ;  then
    printf "${ansi_red}Unexpected exit status ($status)${ansi_reset}"
    exit 1
  fi
}
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
run_test "createClient"

run_test "createStone"

run_test "deleteClient"

run_test "installServer arg"

run_test "upgradeStone"
