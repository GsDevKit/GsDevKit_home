# Open Source Development Kit for GemStone/S 64 Bit 

The Development Kit for GemStone/S (GsDevKit) contains tools and compatiblity changes that sit on top of the GemStone/S 64 Bit product, providing a complete and powerful open-source development environment. The Development kit allows Pharo and Squeak developers to take advantage of GemStone's object persistence, along with a variety of open-source Smalltalk tools and frameworks.

GsDevKit is a client-server system, which may both be installed on a single machine, or the server and client may be installed on separate nodes. The GsDevKit server installation includes the GemStone/S server.

Detailed instructions for configuring your OS and installing GemStone/S, GsDevKit, and starting tODE: 
* [Development Kit Installation and Configuration](#development-kit-server-installation)

Additional supporting documentation:

* [Getting Started with tODE][62].
* [Featured GsDevKit projects][94].
* [GsDevKit projects][95].
* [Remote tODE Client installation][17].
* [Scripts for controlling stones][96].

---

##Development Kit Server Installation
The following steps will install the GemStone/S and Development Kit server, and open the tODE IDE client image:

1. [Operating System Prerequisites](#operating-system-prerequisites)
2. [Install GsDevKit Server, and optionally Client](#install-the-gsdevkit-server)
3. [Install GsDevKit Client, if using two nodes](#install-the-gsdevkit-client)
3. [Define GsDevKit_home Environment Variables](#define-gsdevkithome-environment-variables)
5. [Open a tODE client image](#open-a-tode-client-image)

**NOTE:** *Do not use `sudo` when running any of the commands in this document, unless explicitly instructed to do so.*

###Operating System Prerequisites
The Dev Kit server and client components can be installed on Linux or Mac OS X.  The client may be installed on Windows as well.

For a detailed instructions on installing the OS prerequisites, a full list of required/recommended packages, and scripts that perform the installation, see [GsDevKit Operating System Prerequisite Installation][1].
   



###Install the GsDevKit server

[Instructions on installing the server][2]


When the scripts are finished you will have installed GemStone, created and started a GemStone server instance and installed a tODE server environment.

Before running the `installServer` script, please check on the [GemStone/S 64 Bit product page for the latest versions][98] and visit [the Community and Web Edition Licensing page for information on the license included with the download and other options][99].
It is a good idea to acquire a **free**, *Limited Community License* by sending email to `sales@gemtalksystems.com`.
It is also recommended that you download and use the latest version of the GemStone/S 64 Bit product.
The following creates a new stone named `gs_3281` based on [version 3.2.8.1 of GemStone/S][16]:

*Note that the script will prompt you for your password because it uses `sudo` to setup up your server for running GemStone*.

###Install the GsDevKit client

[Instructions on installing the client][2]

###Define GsDevKit_home Environment Variables
Define the `$GS_HOME` environment variable and add `$GS_HOME/bin` to your `$PATH`:

```Shell
cd GsDevKit_home                # if you are not already located there
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
```

To make sure they are always correctly defined, it's a good idea to update your `.bashrc` file with these `$GS_HOME`, and `$PATH`. 

###Start up the tODE client image

you can now [start up the tODE client][42].

for example,

```
startClient tode
```


---
---

[1]: docs/installation/configureOS.md
[2]: docs/installation/installDevKitServer.md
[3]: docs/installation/installDevKitClient.md
[4]: http://gemtalksystems.com/products/gs64/
[5]: http://gemtalksystems.com/licensing/#CWELicensing
[6]: http://gemtalksystems.com/products/gs64/versions32x/

[17]: docs/clientInstallation.md#tode-client-installation
[62]: https://github.com/dalehenrich/tode/blob/master/docs/GettingStarted.md#getting-started-with-tode

[94]: https://github.com/GsDevKit/GsDevKit_tode/tree/master/projects#featured-gsdevkit-projects
[95]: https://github.com/GsDevKit/GsDevKit_tode/tree/master/projects#featured-gsdevkit-projects/README.md#gsdevkit-projects
[96]: bin/README.md
