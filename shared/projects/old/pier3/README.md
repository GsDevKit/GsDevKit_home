# Pier 3.0.0

Pier 3.0.0 is the latest version of [Pier][1] that is known to work in GsDevKit.
For best results you should install Pier 3.0.0 into a GemStone 3.1.0.6 stone and use the [Swazoo][2] web server.

1. [Installing](#installing)
2. [Getting Started with Pier](#getting-started-with-pier)
3. [Operating](#operating)
   - [Stone control](#stone-control)
   - [Web Server control](#web-server-control)
   - [tODE scripts](#tode-scripts)


##Installing
If you are just getting started with GsDevKit, then you should use the following Bash shell scripts to create a Pier stone:


```
$GS_HOME/bin/installGemStone 3.1.0.6                        # Download GemStone 3.1.0.6
$GS_HOME/bin/createTodeImage                                # Create the tODE client image
$GS_HOME/projects/pier3/bin/createPier300Stone pier 3.1.0.6 # Create a pier stone
$GS_HOME/projects/pier3/bin/webServer pier --restart        # Start Swazoo web server
```

The [installGemStone][8] script GemStone 3.1.0.6 and only needs to be run if you haven't already installed 3.1.0.6.

The [createTodeImage][9] script creates the tODE client image and only needs to be run if you haven't run the [installServer][10] script before.

The [createPier300Stone](#create-pier-stone-bash) script:
- Creates a stone named `pier` based on GemStone 3.1.0.6, [starts the stone][11] and [starts a netLdi][12].
- Installs Pier3.0.0 and Seaside3.0.
- Registers a [Swazoo web server](#register-pier-web-server-tode).
- Creates a backup named `pier3.0.0.dbf`.

See the [Stone control](#stone-control) for further information about Bash commands that can be used to control the GemStone product.

##Getting Started with Pier
Nic Ager's [demo of the Pier Administration interface][6] is a good introduction to [Pier][1].
When the script finishes running, you only need to do a few things to bring your Pier installation up to the point where the video starts.

Open a web browse and type in the following url `http://<server-host-name-or-ip-address>:8585/piersetup` to bring up the `Pier admin setup` screen:

![pier admin setup][3]

Click on the `New from template` tab to bring up a list of pre-defined Pier templates:

![pier blog template][4]

select the `Blog Template` and press the `Create kernel from template` button to bring up the `Create an admin user` screen:

![pier create admin user][14]

Fill in the `Name` and `Password` fields, press `Register admin user` and then press `ok` to create the site and bring up the `Customize blog Template` screen:

![pier customize blog template][7] 

Make sure that you click on the `add sample content` check box, then press the `Create kernel` button; answer `yes` to create `Pier Admin instance`; press`'ok` to `Continue to login`; and press the `Login` button to bring up the  `Blog Template` screen:

![pier blog template1][5]

[Nick Ager's video][6] will take you on a tour of the rest of Pier.

When you are done with the `pier` stone and the [Swazoo web server](#web-server-control), use the following commands to stop the stone and the web server:

```
$GS_HOME/bin/stopStone pier                       # Stop the stone
$GS_HOME/projects/pier3/bin/webServer pier --stop # Stop the Swazoo web server
```

##Operating
1. [Stone control](#stone-control)
   - [Create `pier` stone (Bash)](#create-pier-stone-bash)
   - [Install `pier` (Bash)](#install-pier-bash)
   - [Start `pier` stone](#start-pier-stone)
   - [Stop `pier` stone](#stop-pier-stone)
2. [Web Server control](#web-server-control)
   - [Register `pier` web server (Bash)](#register-pier-web-server-bash)
   - [Start `pier` web server (Bash)](#start-pier-web-server-bash)
   - [Stop `pier` web server (Bash)](#stop-pier-web-server-bash)
3. [tODE scripts](#tode-scripts)
   - [Install `pier` (tODE)](#install-pier-tode)
   - [Register `pier` web server (tODE)](#register-pier-web-server-tode)
   - [Start `pier` web server (tODE)](#start-pier-web-server-tode)
   - [Stop `pier` web server (tODE)](#stop-pier-web-server-tode)

###Stone control
1. [Create `pier` stone (Bash)](#create-pier-stone-bash)
1. [Install `pier` (Bash)](#install-pier-bash)
1. [Start `pier` stone](#start-pier-stone)
2. [Stop `pier` stone](#stop-pier-stone)

####Create `pier` stone (bash)
To create a `pier` stone, use the [createPier300Stone][16] script:

```
$GS_HOME/projects/pier3/bin/createPier300Stone <stone-name> <gemstone-version>
```

This script calls the [createTodeStone][15] and [installPier300Stone](#install-pier-bash) Bash scripts.

####Install `pier` (bash)
To install `pier` into an existing stone, use the [installPier300Stone][17] script:

```
$GS_HOME/projects/pier3/bin/installPier300Stone <stone-name>
```

This script executes the [install `pier` tODE commands](#install-pier-tode).

####Start `pier` stone
To start the `pier` stone use the [startStone][11] script:

```
$GS_HOME/bin/startStone <stone-name>
```

####Stop `pier` stone
To stop the `pier` stone use the [stopStone][18] script:

```
$GS_HOME/bin/stopStone <stone-name>
```

###Web server control
1. [Register `pier` web server (Bash)](#register-pier-web-server-bash)
2. [Start `pier` web server (Bash)](#start-pier-web-server-bash)
3. [Stop `pier` web server (Bash)](#stop-pier-web-server-bash)

####Register `pier` web server (Bash)
To register a `pier` web server use the [webServer][19] script:

```
$GS_HOME/projects/pier3/bin/webServer <stone-name> --register=swazoo --port=8585
```

See the [tode web server script](#tode-web-server-script) for more information.

####Start `pier` web server (Bash)
To start the `pier` web server use the following Bash script:

```
$GS_HOME/projects/pier3/bin/webServer <stone-name> --restart
```

See the [tode web server script](#tode-web-server-script) for more information.

####Stop `pier` web server (Bash)
To stop the `pier` stone use the following Bash script:

```
$GS_HOME/projects/pier3/bin/webServer <stone-name> --stop
```

See the [tode web server script](#tode-web-server-script) for more information.

###tODE scripts
1. [Install `pier` (tODE)](#install-pier-tode)
2. [tODE web server script](#tode-web-server-script)
   - [Register `pier` web server (tODE)](#register-pier-web-server-tode)
   - [Start `pier` web server (tODE)](#start-pier-web-server-tode)
   - [Stop `pier` web server (tODE)](#stop-pier-web-server-tode)

####Install `pier` (tODE)
To install `pier` use the following tODE script:

```
mount @/sys/stone/dirs/gsDevKitHome/projects/pier3 /home pier # mount the pier directory in tODE
/home/pier/install300
```

The `/home/pier/install300` tODE script has the following tode commands:

```
cp /home/pier/projects300/magritte /sys/stone/projects        # use #stable from http://www.squeaksource.com/MetacelloRepository
cp /home/pier/projects300/magritteAddOns /sys/stone/projects  # use #stable from http://www.squeaksource.com/MetacelloRepository
cp /home/pier/projects300/pier3 /sys/stone/projects           # use #stable from http://www.squeaksource.com/MetacelloRepository
cp /home/pier/projects300/pier3AddOns /sys/stone/projects     # use #stable from http://www.squeaksource.com/MetacelloRepository
cp /home/pier/projects300/seaside30 /sys/stone/projects       # Use Seaside30 3.0.8
cp /home/pier/projects300/seaside /sys/stone/projects         # Use Seaside3 release3.0
cp /home/pier/projects300/zinc /sys/stone/projects            # Zinc 1.1
cp /home/pier/projects300/xml /sys/stone/projects             # XMLSupport 1.2.2
project refresh --locked                                      # ensure that new project entries are used
project load Pier3AddOns                                      # load Pier3AddOns project
project load Seaside3                                         # load Seaside3 Swazoo and FastCGI adaptors
project load --loads=`#('Seaside')` ZincHTTPComponents        # load Zinc 1.1 adaptor adaptor for Seaside3
/home/pier/patchExecBlock                                     # patch ExecBlock for GemStone3.0 and Zinc 1.1
bu backup pier3.0.0.dbf                                       # make a backup after load completes
project list                                                  # refresh the project list
/home/pier/webServer --register=zinc --port=8585 --restart    # start Zinc Seaside server
```

####tODE web server script
1. [Register `pier` web server (tODE)](#register-pier-web-server-tode)
2. [Start `pier` web server (tODE)](#start-pier-web-server-tode)
3. [Stop `pier` web server (tODE)](#stop-pier-web-server-tode)

Here's the help text for the tODE `/home/pier/webServer` script:

```
NAME
  webServer - start/stop/restart seaside web servers

SYNOPSIS
  webServer [-h|--help] [--register=zinc|fastcgi|swazoo] [--port=<port-number>]
  webServer [--start] [--stop] [--restart]

DESCRIPTION
  First register the type of web server that you want to use along with a port
  number (multiple port numbers not supported ...yet).

  Then start/start/stop the web server as desired.

EXAMPLES
  ./webServer --help
  ./webServer --register=swazoo --port=8585 --start

  ./webServer --restart
  ./webServer --start
  ./webServer --stop

  NOTE - use the `tode it` menu item to run the examples directly from this window.
```


#####Register `pier` web server (tODE)
To register a `pier` web server use the following tODE script:

```
/home/pier/webServer --register=swazoo --port=8585
```

#####Start `pier` web server (tODE)
To start the `pier` web server use the following Bash script:

```
/home/pier/webServer --restart
```

#####Stop `pier` web server (tODE)
To stop the `pier` stone use the following Bash script:

```
/home/pier/webServer --stop
```

[1]: http://www.piercms.com/
[2]: http://www.swazoo.org/
[3]: images/pier_admin_setup.png
[4]: images/pier_blog_template.png
[5]: images/pier_blog_template1.png
[6]: https://vimeo.com/32749535
[7]: images/pier_customize_blog_template.png
[8]: ../../bin/README.md#installGemStone
[9]: ../../bin/README.md#createTodeImage
[10]: ../../bin/README.md#installServer
[11]: ../../bin/README.md#startStone
[12]: ../../bin/README.md#startNetldi
[13]: ../../bin/README.md#server-scripts
[14]: images/pier_create_admin_user.png
[15]: ../../bin/README.md#createTodeStone
[16]: bin/createPier300Stone
[17]: bin/installPier300Stone
[18]: ../../bin/README.md#stopStone
[19]: bin/webServer

