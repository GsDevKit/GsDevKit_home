#!/usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -e  # print commands and exit on error

uname -a   #gather info for bug 44185

unset GEMSTONE_NRS_ALL # see https://github.com/GsDevKit/GsDevKit_home/issues/316

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
		which java
		java -h
		$JAVA -h
#		$GS_HOME/tests/basicInstallServer.sh
#    source $GS_HOME/bin/defGsDevKit.env
    $GS_HOME/tests/seaside3Install.sh
		;;
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
    upgradeStone -f ${TOPAZWAITFORDEBUG} ${STONENAME1}_${UPGRADE_FROM} ${STONENAME1}_${GS_VERSION} $GS_VERSION << EOF

EOF
		status=$?
		echo "UPGRADE FINISHED WITH $status exit status"
    stopStone -b ${STONENAME1}_${UPGRADE_FROM}
    stopStone -b ${STONENAME1}_${GS_VERSION}
    if [ "$status" != "0" ] ; then
      cat $GS_HOME/server/stones/$upgradeStoneName/upgradeLog/topazerrors.log
			if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeSeasideImage.out" ] ; then
			  echo "================	upgradeLog/upgradeSeasideImage.out"
        cat "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/upgradeSeasideImage.out"
				if [ -e "$GS_HOME/server/stones/$upgradeStoneName/installGsDevKit_upgrade_topaz.log" ] ; then
					if [ -e "$GS_HOME/server/stones/$upgradeStoneName/prepareGsDevKitImage_pragma_user.log" ] ; then
						if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/prepareImage_pragma_systemuser_topaz.log" ] ; then
							if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/prepareGsDevKitImage.log" ] ; then
								if [ -e "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/cleanupGsDevKitImage.log" ] ; then
			  					echo "================	upgradeLog/cleanupGsDevKitImage.log"
									cat "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/cleanupGsDevKitImage.log"
									exit 1
								fi
			  				echo "================	upgradeLog/prepareGsDevKitImage.log"
								cat "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/prepareGsDevKitImage.log"
								exit 1
							fi
			  			echo "================	prepareImage_pragma_systemuser_topaz.log"
							cat "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/prepareImage_pragma_systemuser_topaz.log"
							exit 1
						fi
			  		echo "================	prepareGsDevKitImage_pragma_user.log"
						cat "$GS_HOME/server/stones/$upgradeStoneName/prepareGsDevKitImage_pragma_user.log"
						exit 1
					fi
			  	echo "================	installGsDevKit_upgrade_topaz.log"
					cat "$GS_HOME/server/stones/$upgradeStoneName/installGsDevKit_upgrade_topaz.log"
					exit 1
				fi
				exit 1
      fi
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
  Upgrade_unittest)
    installServer
    if [ "${UPGRADE_FROM}" = "2.4.4.1" ] ; then
      opt="-g"
    fi
    createStone $opt ${STONENAME1}_${UPGRADE_FROM} ${UPGRADE_FROM}
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
		set +e
    upgradeStone -f ${TOPAZWAITFORDEBUG} ${STONENAME1}_${UPGRADE_FROM} $upgradeStoneName $GS_VERSION << EOF

EOF
    status=$?
		echo "UPGRADE FINISHED WITH $status exit status"
		if [ "$status" = "0" ] ; then
			startStone ${STONENAME1}_${UPGRADE_FROM}	#stopped during upgrade
			set -e # if script fails for reason other than unit test failures, bail
			echo "running unit test health check"
			$GS_HOME/tests/unitTests.sh ${STONENAME1}_${UPGRADE_FROM} false # don't fail if unit tests fail
			echo "finished unit test health check"
			set +e
			$GS_HOME/tests/unitTests.sh $upgradeStoneName true #fail if unit tests don't pass
			status=$?
			if [ "$status" != "0" ] ; then
				echo "unit tests failed after upgrade"
			fi
		fi
    stopStone -b ${STONENAME1}_${UPGRADE_FROM}
    stopStone -b $upgradeStoneName
		exit $status
    ;;
  Upgrade_User)
    installServer
    createStone -b $opt -U bozo -P theClown ${STONENAME1}_${UPGRADE_FROM} ${UPGRADE_FROM}
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
    set +e
    upgradeStone -f -U bozo -P theClown ${STONENAME1}_${UPGRADE_FROM} ${STONENAME1}_${GS_VERSION} $GS_VERSION << EOF

EOF
    status=$?
		echo "UPGRADE FINISHED WITH $status exit status"
		if [ "$status" = "0" ] ; then
			startStone ${STONENAME1}_${UPGRADE_FROM}	#stopped during upgrade
			set -e # if script fails for reason other than unit test failures, bail
			echo "running unit test health check"
			$GS_HOME/tests/unitTests.sh ${STONENAME1}_${UPGRADE_FROM} false # don't fail if unit tests fail
			echo "finished unit test health check"
			set +e
			$GS_HOME/tests/unitTests.sh $upgradeStoneName true #fail if unit tests don't pass
			status=$?
			if [ "$status" != "0" ] ; then
				echo "unit tests failed after upgrade"
			fi
		fi
    stopStone -b ${STONENAME1}_${UPGRADE_FROM}
    stopStone -b $upgradeStoneName
		exit $status
    ;;
	Upgrade_TOC)
    installServer
    createStone $opt ${STONENAME1}_${UPGRADE_FROM} ${UPGRADE_FROM}
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
		set +e
    upgradeStone -m 987654 -f ${STONENAME1}_${UPGRADE_FROM} $upgradeStoneName $GS_VERSION << EOF

EOF
    status=$?
		echo "UPGRADE FINISHED WITH $status exit status"
		if [ "$status" = "0" ] ; then
			result=`grep "GEM_TEMPOBJ_CACHE_SIZE = 987654KB;" "$GS_HOME/server/stones/$upgradeStoneName/upgradeLog/conversion.conf" | wc`
			if [ "result" = "      0       0       0" ] ; then
				echo "ERROR TOC not set correctly for upgrade"
				exit 1
			fi
		fi
    stopStone -b ${STONENAME1}_${UPGRADE_FROM}
    stopStone -b $upgradeStoneName
		exit $status
		;;
  Upgrade_71) # Issue #71: test case ... upgrade from 3.2.11; tode not installed
    installServer
		if [ "$UPGRADE_FROM"x = "x" ] ; then
			upgradeFromStoneName="${STONENAME1}_3211"
			upgradeFromVersion="3.2.11"
		else
			upgradeFromStoneName="${STONENAME1}_${UPGRADE_FROM}"
			upgradeFromVersion="${UPGRADE_FROM}"
		fi
	  createStone -g ${upgradeFromStoneName} ${upgradeFromVersion}
  	upgradeStoneName="${STONENAME1}_${GS_VERSION}"
    set +e
    upgradeStone -f ${upgradeFromStoneName} ${STONENAME1}_${GS_VERSION} $GS_VERSION << EOF

EOF
    status=$?
		echo "UPGRADE FINISHED WITH $status exit status"
    if [ "$status" = "0" ] ; then
			startStone ${upgradeFromStoneName}	#stopped during upgrade
			if [ "$upgradeFromVersion" != "3.2.11" ] ; then
				# 3.2.11 unit tests fail with "too many sessions error", so skip the tests
				set -e # if script fails for reason other than unit test failures, bail
				echo "running unit test health check (${upgradeFromVersion})"
				$GS_HOME/tests/unitTests.sh ${upgradeFromStoneName} false # don't fail if unit tests fail
				echo "finished unit test health check(${upgradeFromVersion})"
			fi
			set +e
			echo "running unit test on upgraded stone (${GS_VERSION})"
			$GS_HOME/tests/unitTests.sh $upgradeStoneName true #fail if unit tests don't pass
			status=$?
			echo "finished unit test  on upgraded stone(${GS_VERSION})"
			if [ "$status" != "0" ] ; then
				echo "unit tests failed after upgrade"
			fi
    fi
    stopStone -b ${STONENAME1}_${UPGRADE_FROM}
    stopStone -b $upgradeStoneName
		exit $status
    ;;
  Upgrade_318) # Issue #318 test case ... upgradeStone -g option
    installServer
    upgradeFromStoneName="${STONENAME1}_${UPGRADE_FROM}"
    upgradeFromVersion="${UPGRADE_FROM}"
    createStone -g ${STONENAME1}_${UPGRADE_FROM} ${UPGRADE_FROM}
    upgradeStoneName="${STONENAME1}_${GS_VERSION}"
    set +e
    upgradeStone -g -f ${TOPAZWAITFORDEBUG} ${STONENAME1}_${UPGRADE_FROM} $upgradeStoneName $GS_VERSION << EOF

EOF
    status=$?
    echo "UPGRADE FINISHED WITH $status exit status"
    if [ "$status" = "0" ] ; then
      startStone ${STONENAME1}_${UPGRADE_FROM}	#stopped during upgrade
      $GS_HOME/tests/unitTests.sh $upgradeStoneName true #fail if unit tests don't pass
      status=$?
      if [ "$status" != "0" ] ; then
        echo "unit tests failed after upgrade"
      fi
    fi
    stopStone -b ${STONENAME1}_${UPGRADE_FROM}
    stopStone -b $upgradeStoneName
    exit $status
    ;;
  BasicTodeClient)
    $GS_HOME/tests/basicTodeClientTests.sh
    ;;
 *)
    echo "Unknown test: $TEST"
    exit 1
    ;;
esac

