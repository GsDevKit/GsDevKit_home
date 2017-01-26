#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -xe  # print commands and exit on error

foo # force a test failure here ..

# install server
installServerClient -o GsDevKit
createStone ${STONENAME1} $GS_VERSION

ls -altr $GS_HOME/server/stones/${STONENAME1}/snapshots
ls -altr $GS_HOME/server/stones/${STONENAME1}/extents 

status

stopStone -b ${STONENAME1}

echo "$0 DONE"
