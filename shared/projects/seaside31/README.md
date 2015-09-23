# Seaside31 [![gs_master branch:](https://travis-ci.org/GsDevKit/Seaside31.png?branch=gs_master)](https://travis-ci.org/GsDevKit/Seaside31)
The [GsDevKit Seaside31 project][3] is a fork of the [Seaside project][4].

##Installation

###Batch Install

```
$GS_HOME/projects/seaside31/bin/createSeasideStone seaside 3.2.4
```

```
$GS_HOME/projects/seaside31/bin/installSeasideSton seaside
```

###tODE Install

```
mount @/sys/stone/dirs/gsDevKitHome/projects/seaside31 /home seaside # mount the seaside directory in tODE
/home/seaside/install                                                # install Seaside
```

---
---

###webServer script
Within tODE, register the zinc adaptor (swazoo and fastcgi are also options):

```Shell
cd /home/seaside
./webServer --register=zinc --port=8383
```

The following options can be used to control the registered adaptor:

```Shell
./webServer --start    # start adaptor
./webServer --stop     # stop adaptor
./webServer --restart  # stop/start adaptor
```

The script launches a separate GemStone vm to serve as a web server independent of your tODE gem.

Once you've started the webServer, you can use your web browser to connect to the server:

![seaside web browser][6]

##Developing with Seaside

###Debugging remote server errors

While using a webServer gem, errors in the Seaside code will not result in a walkback window popping up. Instead the default error handler snaps off a continuation and puts it into the Object Log.

For example, if there is an error in your Seaside code like the following error inserted into the Counter example:

![wacounter code][7]	

you will get an error that looks like this when you click on the ++ link in the browser:

![counter error][8]

to debug the error, you open the object log using the following tODE command:

```Shell
ol view --age=`30 minutes` error
```

and you'll get an object log viewer. Select the `-- continuation --` and use the `debug continuation` menu item:

![debug continuation][9]

to open a debugger on the continuation:

![continuation debugger][10]

When you are debugging a continuation, you cannot step or continuation, but other than that you have a fully functional debugger.

[1]: ../../docs/images/browseProjectEntry.png
[2]: ../../docs/images/projectListMenu.png
[3]: https://github.com/GsDevKit/Seaside31
[4]: http://seaside.st/
[5]: ../../docs/images/editProjectEntry.png
[6]: ../../docs/images/seasideBrowser.png
[7]: ../../docs/images/waCounterbrowser.png
[8]: ../../docs/images/waCounterError.png
[9]: ../../docs/images/debugContinuation.png
[10]: ../../docs/images/continuationDebugger.png

