# Seaside31 [![gs_master branch:](https://travis-ci.org/GsDevKit/Seaside31.png?branch=gs_master)](https://travis-ci.org/GsDevKit/Seaside31)
The [GsDevKit Seaside31 project][3] is a fork of the [Seaside project][4].


## Register Project
If you are using Seaside for the first time, use the following project registration script:

```Shell
$GS_HOME/projects/seaside31/createProjectEntry <stone-name> Examples Zinc
```

Along with the basic development environment, you'll get a full complement of example components and the Zinc adaptor for running a web server.

If you are familiar with Seaside, use the items from the Metacello `load:` message.

Ater installing Seaside (and an web server adaptor: Zinc, Swazoo, of FastCGI), you can use the [webServer tODE script](#webserver-script) for starting/stopping the chosen Seaside adaptor.


###Batch Install/Update
From the shell:

```Shell
$GS_HOME/projects/seaside/loadProject <stone-name>
```

###Interactive Install/Update
Within tODE:

   * from tODE command line:


      ```Shell
      project load Seaside31
      ```

   * from tODE project list:

     ![project list menu][2]

You can change your project load list by using the `Browse >> project entry` menu in the `project list` window:

![browse project entry][1]

to open a project entry editor:

![edit project entry][5]

Once a project is loaded, only changes to the `loads:` arguments will have an impact.

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

