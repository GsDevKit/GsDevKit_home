#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

# install server
$GS_HOME/bin/private/clone_gs_client_dev -c https
pushd $GS_HOME/dev
  git checkout dev
popd
installServerClient -o GsDevKit ${STONENAME1} tode $GS_VERSION

status

stopStone -b ${STONENAME1}

echo "$0 DONE"
