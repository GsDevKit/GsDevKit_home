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
   Write code in tODE, test with tests, then save packages/project to disk, run script using `-D` (debug) flag and debug scripts using topaz ...
#### Sample debugging session (in the supderdoit shell)
We'll start by debugging the `startnetldi` supderdoit script and assume that you've started a stone using the GS_HOME shell. also assume that the stone is stopped and netldi is not running:
```bash
# confirm you are running the startnetldi superdoit script (no caps in name)
rogue:superdoit_devkit>which startnetldi
/home/dhenrich/rogue/_homes/rogue/_issue_260/superdoit_devkit/bin/startnetldi
# get help
-----
USAGE: startNetldi [-h] <stone-name> [<startnetldi-commandLine-args>]

DESCRIPTION
Start the netldi process for the given stone.

By default the netldi is started using the following commandline:

  startnetldi -l -g -a currentUserName <netldi-name>

If a port number is specified in the session description then the following command line is used:

  startnetldi -l -g -a currentUserName -P <port-number> <netldi-name>

If you specify any <startnetldi-commandLine-args>, then the <startnetldi-commandLine-args> are passed
to the startnetldi command and none of the above defaults apply (except for the -l option):

  startnetldi -l <startnetldi-commandLine-args>

OPTIONS
  -h, --help 	display usage message
	-l, --passThroughArguments 	Startup without transaction logs.

EXAMPLES
  startnetldi -h
  startnetldi myStoneName
  startnetldi -g myStoneName -A
-----
# startnetlid for your stone (test_superdoit_360 ... created using GS_HOME shell)
rogue:superdoit_devkit>startnetldi test_superdoit_360
a MessageNotUnderstood occurred (error 2010), a UndefinedObject does not understand  #'asFileReference'
# bring up topaz debugger on the error
rogue:superdoit_devkit>startnetldi -D test_superdoit_360
-----------------------------------------------------
 Near line 16 of file /home/dhenrich/rogue/_homes/rogue/_issue_260/superdoit_devkit/gemstone/superdoit.tpz
GemStone: Error         Nonfatal
a MessageNotUnderstood occurred (error 2010), a UndefinedObject does not understand  #'asFileReference'
Error Category: 231169 [GemStone] Number: 2010  Arg Count: 4 Context : 20 exception : 103971841
Arg 1: [13256449 size:15 primitiveSize:15 cls: 110849 Symbol] asFileReference
Arg 2: [2 size:0 primitiveSize:0 cls: 74241 SmallInteger] 0 == 0x0
Arg 3: [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
Arg 4: [103971585 size:0 primitiveSize:0 cls: 66817 Array] anArray
Stopping at line 16 of /home/dhenrich/rogue/_homes/rogue/_issue_260/superdoit_devkit/gemstone/superdoit.tpz
topaz 1> 
# get topaz stack
topaz 1> where
==> 1 MessageNotUnderstood >> defaultAction         @2 line 3   [methId 6452993]
2 MessageNotUnderstood (AbstractException) >> _signalWith: @5 line 25   [methId 3820033]
3 MessageNotUnderstood (AbstractException) >> signal @2 line 47   [methId 3612417]
4 UndefinedObject (Object) >> doesNotUnderstand: @9 line 10   [methId 6353921]
5 UndefinedObject (Object) >> _doesNotUnderstand:args:envId:reason: @8 line 14   [methId 6310657]
6 SuperDoitExecutionClass >> sessionDescriptionHome @3 line 2   [methId 103964929]
7 SuperDoitExecutionClass >> sessionDescriptionFor:ifAbsent: @2 line 3   [methId 103963649]
8 SuperDoitExecutionClass >> sessionDescriptionIfAbsent: @3 line 2   [methId 103962369]
9 SuperDoitExecutionClass >> sessionDescription @2 line 3   [methId 103961089]
10 SuperDoitExecutionClass >> netldiArgs         @2 line 3   [methId 103959809]
11 SuperDoitExecutionClass >> startNetldi        @3 line 4   [methId 103958529]
12 Executed Code                                 @2 line 1   [methId 103957249]
13 GsNMethod >> _executeInContext:               @1 line 9   [methId 5656321]
14 String >> evaluateInContext:symbolList:       @3 line 10   [methId 6078721]
15 SuperDoitExecutionClass >> theDoit            @4 line 4   [methId 103953921]
16 [] in SuperDoitExecutionClass >> doit         @12 line 6   [methId 103952641]
17 ExecBlock0 (ExecBlock) >> on:do:              @3 line 44   [methId 5798401]
18 SuperDoitExecutionClass >> doit               @2 line 7   [methId 103950337]
19 SuperDoitDoitCommand >> executeAgainst:       @22 line 16   [methId 104076801]
20 [] in SuperDoitCommandDefinition >> executeAgainst: @7 line 2   [methId 103948033]
21 OrderedCollection (Collection) >> do:         @5 line 10   [methId 5924353]
22 SuperDoitCommandDefinition >> executeAgainst: @3 line 2   [methId 104208385]
23 [] in SuperDoitCommandParser >> parseAndExecuteScriptFile: @22 line 14   [methId 103944705]
24 [] in AbstractFileReference >> readStreamDo:  @8 line 4   [methId 44473345]
25 ExecBlock0 (ExecBlock) >> ensure:             @2 line 12   [methId 5801217]
26 FileReference (AbstractFileReference) >> readStreamDo: @4 line 5   [methId 37234433]
27 SuperDoitCommandParser >> parseAndExecuteScriptFile: @2 line 3   [methId 104069377]
28 SuperDoitCommandParser class >> processInputFile @30 line 22   [methId 104068353]
29 Executed Code                                 @2 line 6   [methId 103938305]
30 GsNMethod class >> _gsReturnToC               @1 line 11   [methId 5629953]
  [GsProcess 104313089]
# view frame 6 (where MNU comes from)
topaz 1> fr 6
6 SuperDoitExecutionClass >> sessionDescriptionHome @3 line 2   [methId 103964929]
    receiver [103935489 size:0 primitiveSize:8 cls: 104005377 SuperDoitExecutionClass] aSuperDoitExecutionClass
    .t1 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    .t2 [13256449 size:15 primitiveSize:15 cls: 110849 Symbol] asFileReference
    .t3 [103971585 size:0 primitiveSize:0 cls: 66817 Array] anArray
    .t4 [2 size:0 primitiveSize:0 cls: 74241 SmallInteger] 0 == 0x0
    .t5 [2 size:0 primitiveSize:0 cls: 74241 SmallInteger] 0 == 0x0
# inspect aSuperDoitExecutionClass using obj2 topaz command and oop of object
topaz 1> obj2 @103935489
[103935489 size:0 primitiveSize:8 cls: 104005377 SuperDoitExecutionClass] a SuperDoitExecutionClass
  _commandLine        [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
  _scriptArgs         [103931905 size:2 primitiveSize:2 cls: 66817 Array] a Array
    #1 [103931393 size:2 primitiveSize:2 cls: 74753 String] -D
    #2 [103930881 size:18 primitiveSize:18 cls: 74753 String] test_superdoit_360
  _scriptPath         [103930369 size:4497 primitiveSize:2 cls: 37037313 FileReference] a FileReference
    filesystem          [50024961 size:0 primitiveSize:1 cls: 31478273 FileSystem] a FileSystem
    path                [103928833 size:9 primitiveSize:9 cls: 29142785 AbsolutePath] a AbsolutePath
  _usage              [103928321 size:863 primitiveSize:863 cls: 74753 String] -----
                                                                               USAGE: startNetldi [-h] <stone-name> [<startnetldi-commandLine-args>]
                                                                               
                                                                               DESCRIPTION
                                                                               Start the n
  _noResult           [103927809 size:0 primitiveSize:0 cls: 72193 Object] a Object
  _positionalArgs [103927297 size:1 primitiveSize:1 cls: 66817 Array] a Array
    #1 [103930881 size:18 primitiveSize:18 cls: 74753 String] test_superdoit_360
  _loadSpecs          [103926529 size:0 primitiveSize:0 cls: 66817 Array] a Array
  _optionsDict        [103926017 size:7 primitiveSize:40 cls: 101377 Dictionary] a Dictionary
    count               [58 size:0 primitiveSize:0 cls: 74241 SmallInteger] 7 == 0x7
    tableSize           [58 size:0 primitiveSize:0 cls: 74241 SmallInteger] 7 == 0x7
    emptySlotHint       [162 size:0 primitiveSize:0 cls: 74241 SmallInteger] 20 == 0x14
    numEmptySlots       [66 size:0 primitiveSize:0 cls: 74241 SmallInteger] 8 == 0x8
    unused              [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #1 [103925505 size:0 primitiveSize:2 cls: 67073 Association] a Association
    #2 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #3 [146 size:0 primitiveSize:0 cls: 74241 SmallInteger] 18 == 0x12
    #4 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #5 [114 size:0 primitiveSize:0 cls: 74241 SmallInteger] 14 == 0xe
    #6 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #7 [82 size:0 primitiveSize:0 cls: 74241 SmallInteger] 10 == 0xa
    #8 [103924993 size:0 primitiveSize:2 cls: 67073 Association] a Association
    #9 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #10 [103924481 size:0 primitiveSize:2 cls: 67073 Association] a Association
    #11 [66 size:0 primitiveSize:0 cls: 74241 SmallInteger] 8 == 0x8
    #12 [103923969 size:0 primitiveSize:2 cls: 67073 Association] a Association
    #13 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #14 [103923457 size:0 primitiveSize:2 cls: 67073 Association] a Association
    #15 [98 size:0 primitiveSize:0 cls: 74241 SmallInteger] 12 == 0xc
    #16 [103922945 size:0 primitiveSize:2 cls: 67073 Association] a Association
    #17 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #18 [103922433 size:0 primitiveSize:2 cls: 67073 Association] a Association
    #19 [130 size:0 primitiveSize:0 cls: 74241 SmallInteger] 16 == 0x10
    #20 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #21 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #22 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #23 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #24 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #25 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #26 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #27 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #28 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #29 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #30 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #31 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #32 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #33 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #34 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
    #35 [20 size:0 primitiveSize:0 cls: 76289 UndefinedObject] nil
topaz 1> 
# list source of method active in frame 6 (SuperDoitExecutionClass >> sessionDescriptionHome)
topaz 1> list
   sessionDescriptionHome
           ^ (System gemEnvironmentVariable: 'GS_SYS_SESSIONS') asFileReference
 *                                                              ^3              
# if you look at frame 5, you will see that UndefinedObject is the receiver of the #asFileReference message. The env var GS_SYS_SESSIONS is undefined, 
```
I'm assuming that Jupiter Jones has yet to implement the code to define GS_SYS_SESSIONS.

The **SuperDoitExecutionClass** class is the class created by superdoit when it interprets and executes the script source. The method #sessionDescription [can be seen here](https://github.com/GsDevKit/GsDevKit_home/blob/dkh_issue_260_2021/superdoit_devkit/bin/startnetldi#L112-L115).

          
