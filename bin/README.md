backup                  -> stoneBackup            ++ fail if no todeClient -- how do I tell?
createStone             -> createStone            ++ createGsDevKitImage; 
                                                     create stone; add info to $GS_CLIENT/....descriptions
                        -> createGsDevKitImage    ++ downloadGemstone; clone GsDevKit_gemstone; 
                                                     downloadPharo (gemstone/pharo) install gsdevkit command line
createGemToolsClient    -> createGemToolsClient   ++ clone GsDevKit_gemtools; 
                                                     downloadGemStone >> $GS_CLIENT/bin/createClient [create client] 
createJadeClient        -> createJadeClient       ++ clone GsDevKit_jade; 
                                                     downloadGemStone >> $GS_CLIENT/bin/createClient [create client]
createTodeImage         -> createTodeClient       ++ clone GsDevKit_tode; clone GsDevKit_todeClient; 
                                                     downLoadGemStone >> $GS_CLIENT/bin/createClient;
                                                                         [downloadPharo (todeClient/pharo) install tode into pharo
                                                                          cp gci libraries]
createTodeProjectStone  -> createTodeProjectStone
createTodeStone         -> createTodeStone        ++ createTodeClientImage; createStone
deleteStone             -> deleteStone            ++ createGsDevKitImage; call gsdevkitimage deleteStone
installClient           == createTodeClient
installGci              ->                        ++ implement as $GS_CLIENT/bin/createClient (each flavor) and call from 
                                                     downloadGemStone script
installGemStone         -> downloadGemStone       ++ download bits; $GS_CLIENT/bin/installGci
installPharo            -> downloadPharo          ++ download bits of desired version (-v 3.0) into target 
                                                     dir (-d $GS_HOME/gemstone/pharo)
installServer           == createTodeStone or createStone
installTodeProjectStone
installTodeStone
osPrereqs               -> osPrereqs
performTodeCommand
pharo
restoreFromBackup       -> stoneRestore
shFunctions             -> shFunctions
startNetldi             -> startNetldi
startStatmonitor        -> startStatmonitor
startStone              -> startStone
stoneNewExtent          -> newStoneExtent
stones                  -> stones
stopNetldi              -> stopNetldi
stopStone               -> stopStone
tode
todeClient              -> client                  ++ call $GS_CLIENT/bin/createClient --- which must call back correctly
updateTodeImage
upgradeGemStone         -> upgradeStone

NOTE:
  $GS_HOME/bin/createClient could call $GS_CLIENT/bin/createClient, but we have a chicken and egg situation with who decides which client to download... could have a default setting ,,, alternatively create\*Client has the advantage of being explict about which client is desired ,,, also think about artifacts that indicate things have already been created ... also think about fact that I may want multiple tode clients ....

THINK SOME MORE ABOUT CLIENTS >>> GOOD START 
