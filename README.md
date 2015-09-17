# Open Source Development Kit for GemStone/S 64 Bit [![master branch:](https://travis-ci.org/GsDevKit/gsDevKitHome.png?branch=master)](https://travis-ci.org/GsDevKit/gsDevKitHome)

The Development Kit for GemStone/S features:

* [Simplified GemStone/S installation](#development-kit-server-installation).
* [Remote tODE Client installation](#remote-tode-client-installation).
* [Scripts for controlling multiple stones](#gemstones-management-scripts).
* [tODE development environment](#tode-the-object-centric-development-environment).
* [Library of projects ported to GemStone/S](#development-kit-projects).

##Development Kit Server Installation
The Dev Kit server can be installed on Linux or Mac OS X.

2. Clone the [gsDevKitHome project][2] to your GemStone development server and create a unique branch to keep any changes you make for your project isolated from the Dev Kit master branch:

   ```Shell
   git clone https://github.com/GsDevKit/gsDevKitHome.git
   cd gsDevKitHome
   git checkout -b  <your project branch name>
   ```

*Note: If you already have a [GitHub][15] account, you should consider [forking the Dev Kit project][3] first, as that will make sharing corrections you find much easier.*

3. Define the `$GS_HOME` environment variable and add `$GS_HOME/bin` to your `$PATH`:

   ```Shell
   cd gsDevKitHome
   export GS_HOME=`pwd`
   export PATH=$GS_HOME/bin:$PATH
   ```

   It's a good idea to define `$GS_HOME` and `$PATH` in your `.bashrc` file.
4. Install GemStone/S and Pharo, build the tODE client image, create a stone, start the stone, start the netldi, start the stamonitors, install tODE in stone and launch the tODE client. 
   The following creates a new stone named `tode` based on [version 3.2.1 of GemStone/S][16]:

   ```Shell
   installServer devKit 3.2.1
   ```

   *Note that the script will prompt you for your password because it uses sudo to setup up your server for running GemStone*.
  

4. When the above script finishes, the tode client image is opened and you should be able to validate your session description by:

   1. Opening a tODE shell on your stone: 
   
      ![open tode shell][18]

   2. Opening a `project list`:

      ![project list][19]

   3. If the `project list` opens successfully, then you are done.
      If an error occurs, see the [tODE Test Login](#tode-test-login) section for collecting diagnostics.

5. While you are in the Pharo client window, it is a good time to choose a new font. tODE works best with a mono-spaced font and you can choose a font from those installed on your system using the Pharo System Settings menu item:

   ![pharo system settings][47]

   which opens the `Settings browser`:

   ![pharo settings brower][48]

   1. Click on the `Default font button` and choose a font from those listed in the window that pops up.
      You may need to `Update` to get the system fonts loaded into the Pharo client.

   2. Click on the `Force All button` to get your font choice propogated to the other choices.

   Don't forget to save the image after making client-side changes.

6. Now is also a good time to change the size of the Pharo client window. 
   When you change the size of the Pharo client window, you need to use the [tODE Window Layout menu item](#tode-window-layout) to reset or change the window layout. 
   The initial layout (`standard-small`) is probably not a good choice for high resolution displays. 
   `standard-medium` or `standared-large` are better choices depending upon the resolution of your display and the size of the font that you have chosen.

   Don't forget to save the image after making client-side changes.

7. Once you have verified that the session description is correct, commit the changes that you've made.
(If you've forked the GitHub project, you should push the changes to your GitHub repository as well):

   ```Shell
   git status                          # see what changes have been made
   git add --all                       # stage the changed files
   git commit -m"initial installation" # commit changes
   ```

## Remote tODE Client Installation
The tODE Client can be installed on Linux, Mac OS X, or Windows.
See the [tODE client installation instructions][17] for details. 

##GemStone/S Management Scripts

* [stones](#stones)
* [createTodeStone](#createtodestone)
* [stopStone](#stopstone)
* [startStone](#startstone)
* [startNetldi](#startnetldi)

###stones
The [stones][33] script produces a report listing *Installed Products*, *Installed Stones*, *Running Stones*, and *Running Netldis*: 

```Shell
stones
```

Here's a sample report:

```
Installed Products:
	2.4.5.2
	3.0.1
	3.1.0.5
	3.1.0.6
	3.2.0
	3.2.1
Installed Stones:
	2.4.5.2	c_2452
	3.0.1	c_301
	3.1.0.5	c_3105
	3.2.1	gemtalk
	3.2.2	j_
	3.3.0	k_
	3.2.0	m_
Running Stones:
	Status       Version    Owner    Pid   Port   Started     Type       Name
	-------     --------- --------- ----- ----- ------------ ------      ----
	exists  3.2.0     dhenrich   2074 52832 Jul 22 10:36 Stone       m_
	exists  3.1.0.5   dhenrich   2450 46781 Jul 22 10:39 Stone       c_3105
	exists  2.4.5.2   dhenrich   2291 45711 Jul 22 10:37 Stone       c_2452
	exists  3.2.2     dhenrich   1980 43002 Jul 22 10:35 Stone       j_
	exists  3.0.1     dhenrich   2365 45327 Jul 22 10:38 Stone       c_301
	exists  3.2.1     dhenrich  18934 47480 Jul 24 10:25 Stone       gemtalk
Running Netldis:
	Status       Version    Owner    Pid   Port   Started     Type       Name
	-------     --------- --------- ----- ----- ------------ ------      ----
	exists  3.2.1     dhenrich  20901 49481 Jul 24 16:17 Netldi      gemtalk_ldi
	exists  3.2.0     dhenrich   2196 37538 Jul 22 10:36 Netldi      m_ldi
	exists  3.1.0.5   dhenrich   2514 38890 Jul 22 10:39 Netldi      c_ldi_3105
	exists  3.2.2     dhenrich   2048 44409 Jul 22 10:35 Netldi      j_ldi
	exists  3.0.1     dhenrich   2426 54616 Jul 22 10:38 Netldi      c_ldi_301
	exists  2.4.5.2   dhenrich   2340 54731 Jul 22 10:37 Netldi      c_ldi_2452
	exists  3.3.0     dhenrich   2274 33236 Jul 22 10:36 Netldi      k_ldi
```

###createTodeStone
The [createTodeStone][29] script creates a new stone of the given name and GemStone/S version:

```Shell
createTodeStone devKit 3.1.0.6
```

The stone is created in the `$GS_HOME/gemstone/stones` directory. 
After the stone is created, the stone and netldi processes are started and then tODE is installed.

*Note that the GemStone/S version must be previously installed using the [installGemStone][34] script*.

###stopStone
The [stopStone][30] script is used to stop a running stone by name:

```Shell
stopStone devKit
```

Use the [stones][33] script to get a list of the running stones.

###startStone
The [startStone][31] script is used to start a stone by name:

```Shell
startStone devKit 
```

###startNetldi
The [startNetldi][32] script is used to start a netldi for the given stone:

```Shell
startNetldi devKit
```

By default, the name of the netldi is constructed by tacking `_ldi` onto the name of the stone. 
If you want to use a different netldi name, edit the $GS_HOME/gemstone/stones/\<stone-name\>/info.ston file:

```
GsDevKitStoneInfo {
	#stoneName : 'devKit',
	#gsVers : '3.2.1',
	#username : nil,
	#netldiName : nil
}
```

##tODE: the Object-centric Development Environment

Use the [todeClient][35] script to start up a tODE client image:

```Shell
todeClient
```

*Note: the `-p` option allows you maintain and run multiple client images*.

###tODE System Menu

The tODE System Menu:

![tODE System Menu][37]

is your entry point for setting up and controlling tODE.

1. [tODE Shell](#tode-shell)
1. [tODE Edit](#tode-edit)
2. [tODE Test Login](#tode-test-login)
3. [tODE Install](#tode-install)
4. [tODE Update](#tode-update)
5. tODE Workspaces
6. [tODE Window Layout](#tode-window-layout)
7. Update tODE Client
8. Define Web Edition Root
8. [Define Dev Kit Root](#define-dev-kit-root)
9. [Refresh tODE menu](#refresh-tode-menu)

####tODE Shell

Use the `tODE Shell` menu item to select the stone to log into:

![tode Shell menu][36]

and open the tODE shell console:

![tODE Shell console][38]

####tODE Edit
The `tODE Edit` menu items allow you to modify the session descriptions from within the client image:
 
![tode edit menu item][39]

The menu item brings up a client workspace:

![tode edit workspace][43]

*Note that the workspace is not a file editor, so you need to execute the workspace to update the session disk.* 

The name of the session description file is derived from the `name` of the session description. 
If you change the name of the description you are effectively creating a new description.

####tODE Test Login
The `tODE Test Login` menu item makes it possible to collect diagnostic information when you are having trouble logging into a stone. The menu item is also useful to ping a particular stone to see if it is running.

![tode test login menu item][40]

Besides the menu item the `testLogin` command can be invoked:

1. via the **testLogin:** message in a client-side workspace:

   ```Smalltalk
   TDShell testLogin: 'gemtalk'
   ```
   
3. or, via the command line:

   ![testLogin shell][41]

This is an example of a successful test login:

![successful test login][42]

*Note that while there was a successful test, the message does indicate that tODE is not installed. See the [tODE installTodeStone script][46] for installing tODE on a server.*

Here's an example of an error message:

![testLogin output][20]

If the test login error message does not give you enough information for you to solve the problem, copy the result of the `testLogin` command and send mail to the [GLASS mailing list][28].

####tODE Install
Use the `tODE Install` menu item to install tODE on the selected stone. 
Use this menu item if you did not use the [createTodeStone](#createtodestone) script to create the stone:

![tode Install menu][44]

The menu item executes the tode script located in the file `$GS_HOME/tode/client/scripts/installTode`:

```Shell
updateClient --clientRepo=github://dalehenrich/tode:master/repository
installServer --clientScriptPath=scripts
bu backup tode.dbf
mount --todeRoot home /
bu backup home.dbf
cd 
```

*Note that the script starts by updating the client-side code and then updates the server-side code.*

You can customize `installTode` script to perform additional commands, if needed.

The server-side load scripts can be found in the `$GS_HOME/tode/server/scripts` directory.

**You are encouraged to use the [installTodeServer][46] shell script to install tODE into your Dev Kit server.**

####tODE Update
Use the `tODE Update` menu item update the tODE project on the selected stone:

![tode Update menu][45]

The menu item executes the tode script located in the file `$GS_HOME/tode/client/scripts/updateTode`:

```Shell
updateClient --clientRepo=github://dalehenrich/tode:master/repository
updateServer --clientScriptPath=scripts
bu backup home.dbf
```

You can customize `updateTode` script to perform additional commands, if needed.

The server-side load scripts can be found in the `$GS_HOME/tode/server/scripts` directory.

**You are encouraged to use the `project load Tode` command in the tODE shell to perform updates of the tODE project.**
####tODE Window Layout
Use the `tODE Window Layout` menu item to choose a window layout for your client image:

![tode window layout menu][52]

The window layout is scaled based on the size of the Pharo client window, so you need to re-select a window layout whenever you change the size of the Pharo client window.

Here are samples of three of the available window layouts:

| layout | sample|
|--------|-------|
| standard-small|![standard-small][49]|
|standard-medium|![standard-medium][50]|
|standard-large|![standard-large][51]|

####Define Dev Kit Root
The `Define Dev Kit Root` menu item:

![dev kit root menu][53]

tells the Pharo client where to find the `$GS_HOME/tode` directory.
The scripts and session descriptions used by the pharo client are found in the `$GS_HOME/tode` directory.

A `todeClientImage` can be retargeted to a different GsDevKit installation by changing the directory.

####Refresh tODE menu
The `Refresh tODE menu` menu item:

![refresh tode menu menu][54]

rebuilds the tODE system menu. The menu should automatically update.


### Add Project to tODE video

This short video describes how to add your own project to tODE. It also serves as an introduction to the tODE development environment:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=AlB1B0wtX8c
" target="_blank"><img src="http://img.youtube.com/vi/AlB1B0wtX8c/0.jpg" 
alt="topez: And Now for Something Completely Different" width="480" height="360" border="10" /></a>


##Development Kit Projects

Here is a sampling of some of the open source projects that have been ported to GemStone/S:

| Project | Description|
|---------|------------|
| Magritte| [Dynamic Meta-Description Framework][21]   |
| Pier|[Content Management System][22] |
|[Seaside31][23]| [Dynamic Web Development Framework][24] |
|[ZincHTTPComponents][25]| [Web Server/Client][26] |

By registering projects with tODE:

```Shell
$GS_HOME/projects/zinc/createProjectEntry devKit
$GS_HOME/projects/seaside31/createProjectEntry devKit Examples Zinc FastCGI
```

you can ensure that the projects will be loaded exactly the same way whether you use a shell script:

```Shell
$GS_HOME/projects/seaside31/loadProject devKit
```

or a tODE command:

```Shell
project load Seaside3
```

For more information about installing optional projects and a complete list of optional projects, visit the [GsDevKit Projects][27] page.

[1]: https://help.github.com/articles/fork-a-repo
[2]: https://github.com/GsDevKit/gsDevKitHome
[3]: https://github.com/GsDevKit/gsDevKitHome/fork
[4]: https://help.github.com/articles/fork-a-repo#step-2-clone-your-fork
[5]: bin/README.md
[6]: http://gemtalksystems.com/index.php/products/gemstones/
[7]: http://pharo.org/
[8]: https://github.com/dalehenrich/tode#tode-the-object-centric-development-environment-
[9]: gemstone/README.md
[10]: gemstone/downloads
[11]: gemstone/products
[12]: gemstone/stones
[13]: tode
[14]: pharo
[15]: https://github.com
[16]: http://gemtalksystems.com/index.php/news/version3-2/
[17]: docs/clientInstallation.md#tode-client-installation
[18]: docs/images/openTodeShell.png
[19]: docs/images/projectList.png
[20]: docs/images/testLoginOutput.png
[21]: https://code.google.com/p/magritte-metamodel/
[22]: http://www.piercms.com/
[23]: projects/seaside31
[24]: http://www.seaside.st/
[25]: projects/zinc
[26]: https://github.com/svenvc/zinc/blob/master/zinc-http-components-paper.md#http
[27]: projects/README.md#gsdevkit-projects
[28]: http://lists.gemtalksystems.com/mailman/listinfo/glass
[29]: bin/createTodeStone
[30]: bin/stopStone
[31]: bin/startStone
[32]: bin/startNetldi
[33]: bin/stones
[34]: bin/installGemStone
[35]: bin/todeClient
[36]: docs/images/todeShell.png
[37]: docs/images/todeSystemMenu.png
[38]: docs/images/todeShellConsole.png
[39]: docs/images/todeEditMenu.png
[40]: docs/images/todeTestLoginMenu.png
[41]: docs/images/todeTestLoginShell.png
[42]: docs/images/todeTestLoginSuccess.png
[43]: docs/images/todeEditWorkspace.png
[44]: docs/images/todeInstallMenu.png
[45]: docs/images/todeUpdateMenu.png
[46]: bin/installTodeStone
[47]: docs/images/pharoSystemSettingsMenu.png
[48]: docs/images/pharoSystemSettingsDialog.png
[49]: docs/images/standardSmallLayout.png
[50]: docs/images/standardMediumLayout.png
[51]: docs/images/standardLargeLayout.png
[52]: docs/images/todeWindowLayoutMenu.png
[53]: docs/images/todeDefineDevKitRootMenu.png
[54]: docs/images/todeRefreshTodeMenu.png
