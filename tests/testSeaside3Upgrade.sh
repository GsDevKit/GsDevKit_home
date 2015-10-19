#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

export PATH=$GS_HOME/shared/projects/seaside31/bin:$PATH

installServerSeaside -c https -z 8383 seaside $GS_OLD_VERSION

upgradeSeaside seaside upgrade $GS_VERSION
