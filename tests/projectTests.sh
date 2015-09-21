#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

$GS_HOME/bin/installGemStone $GS_VERSION

$GS_HOME/bin/createTodeImage

case $TEST in
  Projects1)
    $GS_HOME/bin/createTodeProjectStone projects $GS_VERSION Cryptography
    $GS_HOME/bin/installTodeProjectStone projects Grease
    $GS_HOME/bin/installTodeProjectStone projects GsApplicationTools
    $GS_HOME/bin/installTodeProjectStone projects Mapless
    $GS_HOME/bin/installTodeProjectStone projects Metacello
    $GS_HOME/bin/installTodeProjectStone projects NeoJSON
    $GS_HOME/bin/installTodeProjectStone projects PharoCompatibility
    $GS_HOME/bin/installTodeProjectStone projects Ston
    $GS_HOME/bin/installTodeProjectStone projects SIXX
    $GS_HOME/bin/installTodeProjectStone projects Tode
#    $GS_HOME/bin/installTodeProjectStone projects Flow  # Error: GemStone Server error: a UserDefinedError occurred (error 2318), reason:halt, filetree:// repository '/opt/git/ta/Mapless/src' does not exist.
    $GS_HOME/bin/installTodeProjectStone projects XMLSupport
    ;;
  Projects2)
    $GS_HOME/bin/createTodeProjectStone projects $GS_VERSION ZincHTTPComponents
    $GS_HOME/bin/installTodeProjectStone projects Seaside3
    $GS_HOME/bin/installTodeProjectStone projects ServiceVM
    $GS_HOME/bin/installTodeProjectStone projects Magritte3
    ;;
  *)
    echo "Unknown Projects test: $TEST"
    exit 1
    ;;
esac

stopStone projects
