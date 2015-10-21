#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

# install server
installServerClient -o GsDevKit ${STONENAME1} tode $GS_VERSION

status

stopStone -b ${STONENAME1}

echo "$0 DONE"
