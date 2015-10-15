# Open Source Development Kit for GemStone/S 64 Bit [![Build Status](https://travis-ci.org/GsDevKit/GsDevKit_home.svg?branch=master)](https://travis-ci.org/GsDevKit/GsDevKit_home)

The Development Kit for GemStone/S (GsDevKit) contains tools and compatiblity changes that sit on top of the GemStone/S 64 Bit product, providing a complete and powerful open-source development environment. The Development kit allows Smalltalk developers to take advantage of GemStone's object persistence, along with a variety of open-source Smalltalk tools and frameworks.

GsDevKit is a client-server system, which may both be installed on a single machine, or the server and client may be installed on separate nodes. The GsDevKit server installation includes the GemStone/S server.

## Early Acess Version
The GsDevKit_home project is current in **EARLY ACDESS** mode. If you are already familiar with using [GsDevKit/gsDevKitHome][1] and are interested in providing feedback, then by all means continue reading. On the other hand if you are new to using GemStone, then you should use [GsDevKit/gsDevKitHome][1].

##Installation
**GsDevKit_home** offers two different install options:  

1. *Everything on a single workstation*
2. *Client on a local workstation, Server on a remote host*

Please read the [Installation Overview][2] for more information on the different installation options and instructions.

##FAQs
1. [If I am already using gsDevKitHome, why should I consider moving to GsDevKit_home?](#1-if-i-am-already-using-gsdevkithome-why-should-i-consider-moving-to-gsdevkit_home)

2. [Do I have to rebuild all of my stones to use GsDevKit_home?](#2-do-i-have-to-rebuild-all-of-my-stones-to-use-gsdevkit_home)

3. [How do I contribute to the GsDevKit_home project?](#3-how-do-i-contribute-to-the-gsdevkit_home-project)

####1. *If I am already using gsDevKitHome, why should I consider moving to GsDevKit_home?*

1. GsDevKit_home has been made more modular with separate git projects for the tODE client and GemStone servers. With a new, modular directory structure, project-specific (private) files like session descriptions, tODE scripts and customized `system.conf` files are co-located in a separate git project [(GsDevKit_local_sys][5]) that can be managed in a private repository (i.e., [BitBucket][6]) keeping your team's private shared data private.
  Modules for development clients like [Jade][3] and [GemTools][4] can be added to GsDevKit_home, as well as modules for production tools like [Daemon Tools][8], [Monit][9], [Apache][10], [nginx][12], [lightppd][11], etc.

2. By default, git-based repositories used by GsDevKit_home are cloned thus reducing the reliance on network and making for more reliable builds. The ulitmate goal is to move all projects used by GsDevKit to [git][13] so that builds can be done without a network connection.

3. It is no longer necessary to fork the GsDevKit_home project as part of the installation process.

4. Better support for Windows users. The installation process for the Windows, Linux and OSX platforms is the same.  
 
####2. *Do I have to rebuild all of my stones to use GsDevKit_home?*

####3. *How do I contribute to the GsDevKit_home project?*
When you decide that you would like to contribute bugfixes or improvements to the  GsDevKit_home family of projects:
 - [GsDevKit_home][15]
 - [GsDevKit_gs_client_dev][16]
 - [GsDevKit_gs_server][17]
 - [GsDevKit_todeClient][18]
 - [GsDevKit_sys_local][19]) 

or the git-based projects used by GsDevKit_home:
 - [Metacello][20]
 - [Tode][21]
 - [Ston][22]
 - [FileTree][23]
 - [Grease][24]
 - [GLASS1][25]
 - [PharoCompatibility][26]
 - [RB][27])

You start by forking the project of interest on [GitHub][14], set up your GitHub account for ssh access. 
Then you perform the following steps in your local checkout (assuming the your GitHub user-name is `dalehenrich` and the project you want to contribute to is GsDevKit_home, which you've already cloned):

```shell
git remote add dale git@github.com:dalehenrich/GsDevKit_home.git
git fetch --all
git checkout master
git checkout -b topicBranch
# do work for contribution committing along the way
git commit -m"final commit"
git push dale topicBranch
```

Then on GitHub, open a pull request from the `topicBranch` in your fork, to the `master` branch that you forked from.


[1]: https://github.com/GsDevKit/gsDevKitHome#open-source-development-kit-for-gemstones-64-bit-
[2]: docs/installation#installation-overview
[3]: https://github.com/jgfoster/Jade
[4]: https://github.com/glassdb/GemTools
[5]: https://github.com/GsDevKit/GsDevKit_sys_local
[6]: https://bitbucket.org/
[7]: docs/installation/installDevKitClient.md#install-client
[8]: https://code.google.com/p/glassdb/wiki/GLASSDaemonTools
[9]: http://forum.world.st/Glass-Monit-scripts-for-gemstone-td4731164.html
[10]: https://programminggems.wordpress.com/2008/09/12/slice-4/
[11]: https://kentreis.wordpress.com/2009/10/07/my-favorite-glass-front-end-server-lighttpd/
[12]: http://www.monkeysnatchbanana.com/2010/08/18/using-fastcgi-with-nginx-and-seaside/
[13]: https://git-scm.com/
[14]: https://github.com
[15]: https://github.com/GsDevKit/GsDevKit_home
[16]: https://github.com/GsDevKit/GsDevKit_gs_client_dev
[17]: https://github.com/GsDevKit/GsDevKit_gs_server
[18]: https://github.com/GsDevKit/GsDevKit_todeClient
[19]: https://github.com/GsDevKit/GsDevKit_sys_local
[20]: https://github.com/dalehenrich/metacello-work
[21]: https://github.com/dalehenrich/tode
[22]: https://github.com/GsDevKit/ston
[23]: https://github.com/dalehenrich/filetree
[24]: https://github.com/GsDevKit/Grease
[25]: https://github.com/glassdb
[26]: https://github.com/glassdb/PharoCompatibility
[27]: https://github.com/dalehenrich/rb
