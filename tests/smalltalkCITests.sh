#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -xe  # print commands and exit on error

smalltalkCI -r -t -s $GS_HOME/server/stones/${STONENAME1}/snapshots/extent0.tode.dbf -z $GS_HOME/shared/repos/smalltalkCI/.smalltalk.ston ${STONENAME1}

smalltalkCI -r -z $GS_HOME/shared/repos/smalltalkCI/.smalltalk.ston ${STONENAME1}
