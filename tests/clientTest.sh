#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -xe  # print commands and exit on error

cd $GS_HOME/shared/repos
git clone https://github.com/GsDevKit/GemStone-GCI.git

createClient -t pharo gciClient -v $Client -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston

startClient gciClient -n
stopClient gciClient
editClient gciClient "Smalltalk at: #GCIGemStoneClientTestTimeStamp put: DateAndTime current."
