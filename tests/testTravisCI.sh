#!/usr/bin/env bash
#
# Copyright (c) 2015 GemTalk Systems, LLC. All Rights Reserved <dhenrich@gemtalksystems.com>.
#

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
  XXX)
    set +e
    $GS_HOME/bin/private/downloadSmalltalkClient -d $GS_HOME/shared/pharo
    ls -l $GS_HOME/shared/pharo
    ls -l $GS_HOME/shared/pharo/pharo-vm
    $GS_HOME/shared/pharo/pharo-vm/pharo --help --vm-display-null
    $GS_HOME/shared/pharo/pharo --list
    $GS_HOME/shared/pharo/pharo-vm/pharo --no-display --list
    set -e
    if [ -e $GS_HOME/shared/pharo/pharo-vm/pharo ] then
      set +e
missing_32-bit_libs() {
echo "Missing 32-bit libraries required by pharo"
exit 1
}
      trap 'missing_32-bit_libs' ERR
      $GS_HOME/shared/pharo/pharo-vm/pharo --help --vm-display-null >& /dev/null
      trap - ERR
      set -e
    fi
    echo "should not get here"
    exit 1
    ;;
  Simple)
    # createStone should work without having done an installServer ... also tests github:// builds
    createStone ${STONENAME2} $GS_VERSION
    ;;
  Basic)
    $GS_HOME/tests/basicInstallServer.sh
    source $GS_HOME/bin/defGsDevKit.env
    export todeSnapshot=$GS_SERVER_STONES/${STONENAME1}/snapshots/extent0.tode.dbf
    export baseSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.dbf
    export seasideSnapshot=$GS_SERVER_STONES/${STONENAME1}/product/bin/extent0.seaside.dbf
    $GS_HOME/tests/basicTests.sh
    ;;
  BasicTodeClient)
    $GS_HOME/tests/basicTodeClientTests.sh
    ;;
 *)
    echo "Unknown test: $TEST"
    exit 1
    ;;
esac

