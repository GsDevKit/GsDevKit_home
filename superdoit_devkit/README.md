### installation
```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
git checkout issue_260_2021
. bin/defHOME_PATH.env    # define GS_HOME env var and put $GS_HOME and $GS_HOME/superdoit_devkit into PATH
downloadGemStone 3.6.0
pushd superdoit_devkit/gemstone/gs
	curl  -L -O -s -S "https://github.com/dalehenrich/superDoit/releases/download/v0.1.0/3.6.0_extent0.solo.dbf.gz"
	gunzip --stdout 3.6.0_extent0.solo.dbf.gz > extent0.solo.dbf
	chmod -w extent0.solo.dbf
	ln -s $GS_HOME/shared/downloads/products/GemStone64Bit3.6.0-* product
popd
versionReport.solo -h
versionReport.solo
installServerClient
```
### development process
1. Use two shell windows, one that has the $GS_HOME/bin AND superdoit bin directories included in $PATH (`. $GS_HOME/bin/defSUPERDOIT_PATH.env`) and one that has just $GS_HOME/bin in $PATH (`. $GS_HOME/bin/defHOME_PATH.env`). Use the superdoit_bin shell for testing/executing the superdoit scripts nad the gs_home_bin shell for creating/stopping/starting stones, etc.

