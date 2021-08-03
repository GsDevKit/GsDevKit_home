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
#### two shell windows
Use two shell windows, one that has the $GS_HOME/bin AND superdoit bin directories included in $PATH (`. $GS_HOME/bin/defSUPERDOIT_PATH.env`) and one that has just $GS_HOME/bin in $PATH (`. $GS_HOME/bin/defHOME_PATH.env`). Use the superdoit_bin shell for testing/executing the superdoit scripts nad the gs_home_bin shell for creating/stopping/starting stones, etc.
#### develop in tODE
1. create tODE client tode
   ```bash
   createClient tode
   ```
2. create tODE stone
   ```bash
   createStone supderdoit_tode 3.6.0
   ``` 
3. install filesystem support into tode stone
   ```bash
   startTopaz supderdoit_tode -l << EOF
set u SystemUser p swordfish
login
input $GS_HOME/superdoit_devkit/tode/350/FileSystemGs_350.gs
input $GS_HOME/superdoit_devkit/tode/350/FileSystemGs_350_aux.gs
commit
logout
EOF
   ```
4. Load superDoit and GsDevKit code into a tODE image.
   ```smalltalk
   Metacello new
     baseline: 'SuperDoit_GsDevKit';
     repository: 'filetree://$GS_HOME/superdoit_devkit/rowan/src';
     load: #('default' 'SuperDoit-Core')
   ```
5. Tests in GsDevKitRegistryTests class. Current status as of SHA 24865054b:
   ```
12 run, 11 passes, 0 expected defects, 1 failures, 0 errors, 0 unexpected passes
	12 tests
	12 run
	11 passes
	0 expected defects
	1 failures
GsDevKitRegistryTests debug: #testExportRegistry
	0 errors
	0 unexpected passes
```
6. debugging/development
write code in tODE, test with tests, then save packages/project to disk, run script using `-D` (debug) flag and debug scripts using topaz ...
