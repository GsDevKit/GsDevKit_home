#!/usr/bin/env bash
downloadGemStone 3.6.0
pushd superdoit_devkit/gemstone/gs
	curl  -L -O -s -S "https://github.com/dalehenrich/superDoit/releases/download/v0.1.0/3.6.0_extent0.solo.dbf.gz"
	gunzip --stdout 3.6.0_extent0.solo.dbf.gz > extent0.solo.dbf
	chmod -w extent0.solo.dbf
	ln -s $GS_HOME/shared/downloads/products/GemStone64Bit3.6.0-* product
popd