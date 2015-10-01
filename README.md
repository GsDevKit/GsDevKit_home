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
2. [Clone GsDevKit_hCome](#clone-gsdevkithome)
3. [Define GsDevKit_home Environment Variables](#define-gsdevkithome-environment-variables)
4. [Install a GemStone stone](#install-a-gemstone-stone)
5. [Open a tODE client image](#open-a-tode-client-image)
   - [Open a tODE shell](#open-a-tode-shell)
   - [Open a tODE project list](#open-a-tode=project-list)
6. [Commit GsDevKit_home configuration changes to git](#commit-gsdevkithome-configuration-changes-to-git)

**NOTE:** *Do not use `sudo` when running any of the commands in this document, unless explicitly instructed to do so.*

###Operating System Prerequisites
The Dev Kit server can be installed on Linux or Mac OS X.
The following OS packages must be installed in your system for GsDevKit to work correctly in all cases:
- 32 bit libraries - needed to run Pharo (headless)
- curl             - needed by FileTree
- git              - needed by GsDevKit and tODE
- PAM              - needed by GemStone server
- ssl              - needed by GemStone server
- unzip            - needed by FileTree
- wget             - needed by bin/installGemStone script

For a detailed instructions on installing the OS prerequisites, a full list of required/recommended packages, and scripts that perform the installation, see [GsDevKit Operating System Prerequisite Installation][36].
   
###Clone GsDevKit_home
Clone the [GsDevKit_home project][2] to your GemStone development server and create a unique branch to keep any changes you make for your project isolated from the Dev Kit master branch:

[Fork the GsDevKit_home project][3], clone your fork to your local GemStone development server, and create a unique branch to keep any changes you make for your project isolated.

If you are new to github, see the [detailed instructions][37]. You will need to setup authentication (generally, SSH credentials) as well, to allow tODE to work. 

```Shell
git clone git@github.com:<yourAccountName>/GsDevKit_home.git
cd GsDevKit_home
```

  4. Create a unique branch for your work, and synchronize github

  ```Shell
# The purpose of the branch is to have a place to make all your personal customizations. This way, 
# if you ever want to feed back changes to GsDevKit_home, your dev branch will be clean. Since the 
# basic use case is to have one branch for all your development. You may want to name it after 
# yourself!
git checkout -b  <your_branch_name>
# Where you push depends on your workflow. Since this is git, you have many options to host your 
# code (e.g. GitHub, BitBucket). If you want to simply push to your GitHub fork:
git push origin <your_branch_name>
  ```  

  5. **FOR EARLY ADOPTERS ONLY** execute the following shell commands before doing your first install. The files ensure that you are using the dev branch of tODE for the client and server installations:

  ```Shell
# These scripts ensure that you are using the dev branch of tODE
cp $GS_HOME/tests/tode/sys/local/server/scripts/installTode.ws $GS_HOME/tode/sys/local/server/scripts
cp $GS_HOME/tests/tode/sys/local/projects/*.ston $GS_HOME/tode/sys/local/projects
cp $GS_HOME/tests/tode/sys/local/pharo/todeLoad.st $GS_HOME/tode/sys/local/pharo
  ```


###Define GsDevKit_home Environment Variables
Define the `$GS_HOME` environment variable and add `$GS_HOME/bin` to your `$PATH`:

```Shell
cd GsDevKit_home                # if you are not already located there
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
```

To make sure they are always correctly defined, it's a good idea to update your `.bashrc` file with these `$GS_HOME`, and `$PATH`. 

###Install a GemStone stone
To install a GemStone stone, run the `$GS_HOME/bin/install` script.
By default this script clones each of the GsDevKit_home subprojects:
  - [GsDevKit_home][2]
  - [GsDevKit_gemstone][38]
  - [GsDevKit_tode][39]
  - [GsDevKit_todeClient][40]

Then the `install`script for each of subprojects is run.
When the scripts are finished you will have installed GemStone, created and started a GemStone server instance and installed a tODE development environment.

Before running the `installServer` script, please check on the [GemStone/S 64 Bit product page for the latest versions][98] and visit [the Community and Web Edition Licensing page for information on the license included with the download and other options][99].
It is a good idea to acquire a **free**, *Limited Community License* by sending email to `sales@gemtalksystems.com`.
It is also recommended that you download and use the latest version of the GemStone/S 64 Bit product.
The following creates a new stone named `gs_3281` based on [version 3.2.8.1 of GemStone/S][16]:

```Shell
installServer gs_3281 3.2.8.1
```
*Note that the script will prompt you for your password because it uses `sudo` to setup up your server for running GemStone*.

###Start up the tODE client image

you can now [start up the tODE client][42].

for example,

```
startClient tode
```


###Commit GsDevKit_home configuration changes to git
commit the changes that you've made.
(If you've forked the GitHub project, you should push the changes to your GitHub repository as well):

   ```Shell
   git status                          # see the changes that have been made
   git add --all                       # stage the changed files
   git commit -m"initial installation" # commit the changes
   ```

---
---

[1]: https://help.github.com/articles/fork-a-repo
[2]: https://github.com/GsDevKit/GsDevKit_home
[3]: https://github.com/GsDevKit/GsDevKit_home/fork
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
[16]: http://gemtalksystems.com/products/gs64/versions32x/
[17]: docs/clientInstallation.md#tode-client-installation
[18]: docs/images/openTodeShell.png
[19]: docs/images/projectList.png
[21]: https://code.google.com/p/magritte-metamodel/
[22]: http://www.piercms.com/
[23]: projects/seaside31
[24]: http://www.seaside.st/
[25]: projects/zinc
[26]: https://github.com/svenvc/zinc/blob/master/zinc-http-components-paper.md#http
[27]: projects/README.md#gsdevkit-projects
[29]: bin/createTodeStone
[30]: bin/stopStone
[31]: bin/startStone
[32]: bin/startNetldi
[33]: bin/stones
[34]: bin/installGemStone
[35]: bin/todeClient
[36]: docs/osPrereqs/osPrereqs.md#gsdevkit-operating-system-prerequisites
[37]: docs/installationGitHubDetails.md 
[38]: https://github.com/GsDevKit/GsDevKit_gemstone
[39]: https://github.com/GsDevKit/GsDevKit_tode
[40]: https://github.com/GsDevKit/GsDevKit_todeClient

[42]: ./docs/#gettingStartedWithTode

[46]: bin/installTodeStone

[58]: http://gemtalksystems.com/products/vsd/
[59]: bin/createTodeImage
[60]: bin/createStone
[61]: bin/startStatmonitor
[62]: https://github.com/dalehenrich/tode/blob/master/docs/GettingStarted.md#getting-started-with-tode
[63]: docs/images/todeClient.png
[64]: https://github.com/dalehenrich/tode/blob/master/docs/GettingStarted.md#tode-test-login

[74]: tode/sys/default/projects
[75]: https://help.github.com/articles/using-pull-requests/
[76]: https://github.com/dalehenrich/tode/blob/master/docs/releaseNotes/releaseNotes0.1.0.md#project-entry

[94]: https://github.com/GsDevKit/GsDevKit_tode/tree/master/projects#featured-gsdevkit-projects
[95]: https://github.com/GsDevKit/GsDevKit_tode/tree/master/projects#featured-gsdevkit-projects/README.md#gsdevkit-projects
[96]: bin/README.md
[97]: https://github.com/dalehenrich/tode/blob/master/docs/releaseNotes/releaseNotes0.1.0.md#git-credentials-and-tode
[98]: http://gemtalksystems.com/products/gs64/
[99]: http://gemtalksystems.com/licensing/#CWELicensing

