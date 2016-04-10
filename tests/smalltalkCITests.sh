#!/usr/bin/env bash
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -xe  # print commands and exit on error

smalltalkCI -t $GS_HOME/server/stones/${STONENAME1}/snapshots/extent0.tode.dbf -z $GS_HOME/shared/repos/smalltalkCI/.smalltalk.ston -r ${STONENAME1}

