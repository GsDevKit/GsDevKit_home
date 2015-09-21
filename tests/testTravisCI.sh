#!/bin/bash -x
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

set -e  # exit on error

uname -a   #gather info for bug 44185

# Uncomment to use alternate version of tODE for tests
$GS_HOME/tests/todeDevBranch.sh

if [ "${STONENAME1}x" = "x" ] ; then
  export STONENAME1="travis1"
fi
if [ "${STONENAME2}x" = "x" ] ; then
  export STONENAME2="travis2"
fi
if [ "${STONENAME3}x" = "x" ] ; then
  export STONENAME3="travis3"
fi
if [ "${STONENAME4}x" = "x" ] ; then
  export STONENAME4="travis4"
fi

case $TEST in
  Basic)
    $GS_HOME/tests/basicInstallServer.sh
    export todeHomeSnapshot=$GS_HOME/gemstone/stones/${STONENAME1}/snapshots/extent0.home.dbf
    export baseSnapshot=$GS_HOME/gemstone/stones/${STONENAME1}/product/bin/extent0.dbf
    export seasideSnapshot=$GS_HOME/gemstone/stones/${STONENAME1}/product/bin/extent0.seaside.dbf
    $GS_HOME/tests/basicTests.sh
    ;;
  BasicTodeClient)
    $GS_HOME/tests/basicTodeClientTests.sh
    ;;
  Magritte)
    $GS_HOME/tests/magritteTests.sh
    ;;
  Pier300)
    $GS_HOME/tests/pier300Tests.sh
    ;;
  Projects1|Projects2)
    $GS_HOME/tests/projectTests.sh
    ;;
  Seaside3)
    $GS_HOME/tests/seaside3Tests.sh
    ;;
  Zinc)
    $GS_HOME/tests/zincTests.sh
    ;;
  *)
    echo "Unknown test: $TEST"
    exit 1
    ;;
esac

