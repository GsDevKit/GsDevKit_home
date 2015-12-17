#!/usr/bin/env bash
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -xe  # print commands and exit on error

# install server
installServerClient -o GsDevKit
createStone ${STONENAME1} $GS_VERSION
createClient tode 

status

stopStone -b ${STONENAME1}

echo "$0 DONE"
