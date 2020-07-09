#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

# needed for updateGsDevKit script test
email=`git config --global --get user.email`
name=`git config --global --get user.name`

set -xe  # print commands and exit on error

if [ "${email}x" = "x" ] ; then
  git config --global user.email "you@example.com"
fi
if [ "${name}x" = "x" ] ; then
  git config --global user.name "Your Name"
fi

# no backups on travis
cp $GS_HOME/tests/sys/local/client/tode-scripts/* $GS_HOME/sys/local/client/tode-scripts
# use dev branch of tode
#	cp $GS_HOME/tests/sys/local/gsdevkit_bin/* $GS_HOME/sys/local/gsdevkit_bin
# don't set GEMSTONE_NRS_ALL
cp $GS_HOME/tests/sys/local/server/gemstone/templates/* $GS_HOME/sys/local/server/gemstone/templates
