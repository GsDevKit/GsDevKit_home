#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

# no backups on travis
cp $GS_HOME/tests/sys/local/client/tode-scripts/* $GS_HOME/sys/local/client/tode-scripts
# use dev branch of tode
cp $GS_HOME/tests/sys/local/gsdevkit_bin/* $GS_HOME/sys/local/gsdevkit_bin

