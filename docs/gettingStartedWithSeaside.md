# Getting started with Seaside

## Install Seaside

First you install the [Seaside projcet](https://github.com/GsDevKit/Seaside31). At the tODE shell prompt, execute:

```
project install --url=http://gsdevkit.github.io/GsDevKit_home/Seaside3.ston
```

This command downloads the project entry for Seaside3 and clones the [Seaside project](https://github.com/GsDevKit/Seaside31). The github repositories for the [Zinc project](https://github.com/GsDevKit/zinc), the web server of choice for GsDevKit and the [gsApplicationTools project](https://github.com/GsDevKit/gsApplicationTools) that provides support for starting and stopping Seaside server gems.

## Load Seaside
Then you load the [Seaside projcet](https://github.com/GsDevKit/Seaside31) using the `project list` menu item **load**, or by executing the following in the tODE shell:

```
project load --loads=`#('Seaside-Welcome' 'Zinc' 'Development' 'Examples')` Seaside3
```

The `mount` command makes the Seaside tODE scripts directory available from with tODE as `/home/seaside`:

```
mount @/sys/stone/dirs/Seaside3/tode /home seaside
```

Finally make a backup of the system to preserve the work up to this point:

```
bu backup seaside.dbf
```

## Creating a Seaside gem server

Wiuth seaside installed, you use the `/home/seaside/gemServer` script to register, start, and stop a Seaside gem server.
The following tODE command defines a gemServer named *seaside* that will listen for HTTP requests on port 1750:

```
/home/seaside/gemServer --register=seaside --type=zinc --port=1750
```

The following tODE command starts up the gemServer named *seaside*:

```
/home/seaside/gemServer --start=seaside
```

At this point you can hit port 1750, to bring up the *Seaside Welcome* page:

![seaside welcome page][1]

[1]: images/SeasideWelcome.png

