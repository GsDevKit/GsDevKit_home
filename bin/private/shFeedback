#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

ANSI_RED="\033[91;1m"
ANSI_GREEN="\033[92;1m"
ANSI_YELLOW="\033[93;1m"
ANSI_BLUE="\033[96;1m"
ANSI_RESET="\033[0m"

exit_1_banner() {
  printf "${ANSI_RED}%s :: $(basename $0) ${theArgs}${ANSI_RESET}\n" "$1" 1>&2
  exit 1
}

exit_0_banner() {
  printf "${ANSI_GREEN}%s :: $(basename $0) ${theArgs}${ANSI_RESET}\n" "$1" 1>&2
  exit 0
}

start_banner() {
  printf "${ANSI_BLUE}=================${ANSI_RESET}\n" 1>&2
  printf "${ANSI_BLUE}   GsDevKit script: $(basename $0) ${theArgs}${ANSI_RESET}\n" 1>&2
  printf "${ANSI_BLUE}              path: $0${ANSI_RESET}\n" 1>&2
  printf "${ANSI_BLUE}=================${ANSI_RESET}\n" 1>&2
}

interrupted() {
  local lineno="$1"
  printf "${ANSI_YELLOW}^C detected (line ${lineno}) :: $(basename $0) ${theArgs}${ANSI_RESET}\n" 1>&2
  exit 1
}

error() {
  local lineno="$1"
  exit_1_banner "Error on or near line ${lineno} :: $(basename $0) $theArgs"
}

trap 'interrupted ${LINENO}' INT
trap 'error ${LINENO}' ERR
