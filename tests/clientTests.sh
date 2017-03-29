#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -xe  # print commands and exit on error

cd $GS_HOME/shared/repos
git clone https://github.com/GsDevKit/GemStone-GCI.git

createClient -t pharo gciClient30 -v Pharo3.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston
createClient -t pharo gciClient40 -v Pharo4.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston
createClient -t pharo gciClient50 -v Pharo5.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston
createClient -t pharo gciClient60 -v Pharo6.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston

createClient -t pharo gciClient60 -l -v Pharo6.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston

createClient -t pharo gciClient60 -v Pharo6.0 -y $GS_HOME/shared/repos/GemStone-GCI -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston
createClient -t pharo gciClient60 -l -v Pharo6.0 -y $GS_HOME/shared/repos/GemStone-GCI -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston

createClient -t pharo gciClient60 -s ${STONENAME1} -v Pharo6.0 -y $GS_HOME/shared/repos/GemStone-GCI -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston
createClient -t pharo gciClient60 -l -s ${STONENAME1} -v Pharo6.0 -y $GS_HOME/shared/repos/GemStone-GCI -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston

createClient -f -t pharo gciClient50 -v Pharo5.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston
createClient -f -t pharo gciClient50 -l -v Pharo5.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston

createClient -f -t pharo gciClient40 -v Pharo4.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston
createClient -f -t pharo gciClient40 -l -v Pharo4.0 -z $GS_HOME/shared/repos/GemStone-GCI/.smalltalk.ston

startClient gciClient50 -n
stopClient gciClient50
editClient gciClient50 "Smalltalk at: #GCIGemStoneClientTestTimeStamp put: DateAndTime current."
