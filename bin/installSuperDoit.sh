i#! /usr/bin/env bash
#=========================================================================
# Copyright (c) 2015, 2016 GemTalk Systems, LLC <dhenrich@gemtalksystems.com>.
#
#   MIT license: https://github.com/GsDevKit/GsDevKit_home/blob/master/license.txt
#=========================================================================

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

while getopts "hc:o:" OPT ; do
  case "$OPT" in
    *) usage; exit_1_banner "Unknown option";;
  esac
done
shift $(($OPTIND - 1))

if [ $# -ne 0 ]; then
  usage; exit_1_banner "Wrong number of arguments (0 expected)"
fi

if [ ! -d "$GS_HOME/shared/gemstone/repos/superDoit" ] ; then
	pushd $GS_HOME/shared/gemstone/repos
		$GS_HOME/bin/downloadGemStone 3.6.1
		$GS_HOME/bin/private/cloneGitHubProject -c https dalehenrich superDoit
		cd superDoit/gemstone/gs
		curl  -L -O -s -S "https://github.com/dalehenrich/superDoit/releases/download/v0.1.0/3.6.1_extent0.solo.dbf.gz"
		gunzip --stdout 3.6.1_extent0.solo.dbf.gz > extent0.solo.dbf
		chmod -w extent0.solo.dbf
		ln -s $GS_HOME/shared/downloads/products/GemStone64Bit3.6.1-* product
	popd
fi

exit_0_banner "...finished"

