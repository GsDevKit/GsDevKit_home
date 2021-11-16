#! /usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

set -x

theArgs="$*"
source "${GS_HOME}/bin/private/shFeedback"
start_banner

usage() {
  cat <<HELP
USAGE: $(basename $0)

DESCRIPTION
   Install https://github.com/dalehenrich/superDoit in support of .solo and stone scripts 

EXAMPLES
   $(basename $0) -h
   $(basename $0) 

HELP
}

if [ "${GS_HOME}x" = "x" ] ; then
  exit_1_banner "the GS_HOME environment variable needs to be defined"
fi
source "${GS_HOME}/bin/defGsDevKit.env"

while getopts "h" OPT ; do
  case "$OPT" in
    h) usage; exit 0;;
    *) usage; exit_1_banner "Unknown option";;
  esac
done
shift $(($OPTIND - 1))

if [ $# -ne 0 ]; then
  usage; exit_1_banner "Wrong number of arguments (0 expected)"
fi

gsvers=3.6.1	#make it easy to switch between 3.6.0 and 3.6.1
if [ ! -d "$GS_HOME/shared/gemstone/repos/superDoit" ] ; then
	pushd $GS_HOME/shared/gemstone/repos
		$GS_HOME/bin/downloadGemStone $gsvers
		if [ ! -d "superDoit" ] ; then
			$GS_HOME/bin/private/cloneGitHubProject -c https dalehenrich superDoit
			pushd superDoit
				git checkout v2.0
			popd
		fi
		cd superDoit/gemstone/gs
		if [ ! -e "extent0.solo.dbf" ] ; then
			curl  -L -O -s -S "https://github.com/dalehenrich/superDoit/releases/download/v0.1.0/${gsvers}_extent0.solo.dbf.gz"
			gunzip --stdout ${gsvers}_extent0.solo.dbf.gz > extent0.solo.dbf
			chmod -w extent0.solo.dbf
		fi
		if [ ! -e "product" ] ; then
			ln -s $GS_HOME/shared/downloads/products/GemStone64Bit${gsvers}-* product
		fi
	popd
fi

exit_0_banner "...finished"

