#!/usr/bin/env bash
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -xe  # print commands and exit on error

# install server
installServerClient $GS_VERSION
createStone travis $GS_VERSION
createClient travis

  # builtins
performTodeCommand travis builtIns
performTodeCommand travis close
performTodeCommand travis collapse
performTodeCommand travis debugMode
performTodeCommand travis exit
performTodeCommand travis help
performTodeCommand travis installServer -h
performTodeCommand travis logout
performTodeCommand travis script --list
performTodeCommand travis sessionDescription -h
performTodeCommand travis updateClient

stopStone travis
