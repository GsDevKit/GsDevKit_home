#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -xe  # print commands and exit on error

uname -a   #gather info for bug 44185

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

# pre-clone /sys/local, so that travis can install customizations (also test -c option)
$GS_HOME/bin/private/clone_sys_local -c https

# Customize the scripts used by tODE (https://github.com/dalehenrich/tode/issues/226)
$GS_HOME/tests/travisCustomize.sh

case $TEST in
  Install)
    installClient
    createClient tode1
    installServer
    createStone -g ${STONENAME1} $GS_VERSION
    installServerClient
    createStone -g ${STONENAME2} $GS_VERSION
    installClient
    createClient tode2
    ;;
  Error)
   $GS_HOME/tests/errorTests.sh
   ;;
  Basic)
    $GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    export todeSnapshot=$GS_SERVER_STONES/${STONENAME1}/snapshots/extent0.tode.dbf
    export baseSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.dbf
    export seasideSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.seaside.dbf
    $GS_HOME/tests/basicTests.sh
    ;;
  Clients)
    $GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    $GS_HOME/tests/clientTests.sh
    ;;    
  SmalltalkCI)
    $GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    $GS_HOME/tests/smalltalkCITests.sh
    ;; 
  Upgrade)
    installServer
    createStone -g ${STONENAME1}_2441 2.4.4.1
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
    set +e
    set -x
    upgradeStone -f ${STONENAME1}_2441 ${STONENAME1}_${GS_VERSION} $GS_VERSION << EOF

EOF
    status=$?
    if [ "$status" != "0" ] ; then
      cat $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topazerrors.log
      cat $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeImage.out
      exit 1
    else
      exit 0
    fi
    ;;
  Upgrade_71) # Issue #71: test case ... upgrade from 3.2.11
    installServer
    createStone -g ${STONENAME1}_3211 3.2.11
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
    set +e
    set -x
    upgradeStone -f ${STONENAME1}_3211 ${STONENAME1}_${GS_VERSION} $GS_VERSION << EOF

EOF
    status=$?
    if [ "$status" != "0" ] ; then
      # cat $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topazerrors.log
      cat $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeImage.out
      exit 1
    else
      exit 0
    fi
    ;;
  BasicTodeClient)
    $GS_HOME/tests/basicTodeClientTests.sh
    ;;
 *)
    echo "Unknown test: $TEST"
    exit 1
    ;;
esac

