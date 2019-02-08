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

if [ "${DOWNLOAD}x" != "x" ] ; then
  downloadGemStone -f -d "${DOWNLOAD}" $GS_VERSION
fi

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

    downloadGemStone -f $GS_VERSION
    ;;
  Error)
   $GS_HOME/tests/errorTests.sh
   ;;
  BasicA)
    $GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    export todeSnapshot=$GS_SERVER_STONES/${STONENAME1}/snapshots/extent0.tode.dbf
    export baseSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.dbf
    export seasideSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.seaside.dbf
    $GS_HOME/tests/basicTestA.sh
    ;;
  BasicB)
    $GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    export todeSnapshot=$GS_SERVER_STONES/${STONENAME1}/snapshots/extent0.tode.dbf
    export baseSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.dbf
    export seasideSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.seaside.dbf
    $GS_HOME/tests/basicTestB.sh
    ;;
  Client)
    $GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    $GS_HOME/tests/clientTest.sh
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
	Seaside3)
		$GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    $GS_HOME/tests/seaside3Install.sh
	UnitTests)
		$GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    $GS_HOME/tests/todeUnitTests.sh
		;;
  Upgrade)
    installServer
    if [ "${UPGRADE_FROM}" = "2.4.4.1" ] ; then
      opt="-g"
    fi
    createStone $opt ${STONENAME1}_${UPGRADE_FROM} ${UPGRADE_FROM}
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
    set +e
    set -x
    upgradeStone -f ${STONENAME1}_${UPGRADE_FROM} ${STONENAME1}_${GS_VERSION} $GS_VERSION << EOF

EOF
    status=$?
    stopStone -b ${STONENAME1}_${UPGRADE_FROM}
    stopStone -b ${STONENAME1}_${GS_VERSION}
    if [ "$status" != "0" ] ; then
      tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topazerrors.log
      if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeImage.out" ] ; then 
        tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeImage.out
      fi
      if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeTo3x.out" ] ; then 
        tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeTo3x.out
      fi
      if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topaz.out" ] ; then 
        tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topaz.out
      fi
      exit 1
    else
      exit 0
    fi
    ;;
  Upgrade_User)
    installServer
    createStone -b $opt -U bozo -P theClown ${STONENAME1}_${UPGRADE_FROM} ${UPGRADE_FROM}
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
    set +e
    set -x
    upgradeStone -f  -U bozo -P theClown ${STONENAME1}_${UPGRADE_FROM} ${STONENAME1}_${GS_VERSION} $GS_VERSION << EOF

EOF
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
    stopStone -b ${STONENAME1}_3211
    stopStone -b ${STONENAME1}_${GS_VERSION}
    if [ "$status" != "0" ] ; then
      tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topazerrors.log
      if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeImage.out" ] ; then 
        tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeImage.out
      fi
      if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeTo3x.out" ] ; then 
        tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeTo3x.out
      fi
      if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topaz.out" ] ; then 
        tail -500 $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topaz.out
      fi
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

