####1. *If I am already using gsDevKitHome, why should I consider moving to GsDevKit_home?*

1. GsDevKit_home has been made more modular with separate git projects for the tODE client and GemStone servers. With a new, modular directory structure, project-specific (private) files like session descriptions, tODE scripts and customized `system.conf` files are co-located in a separate git project [(GsDevKit_local_sys][5]) that can be managed in a private repository (i.e., [BitBucket][6]) keeping your team's private shared data private.
  Modules for development clients like [Jade][3] and [GemTools][4] can be added to GsDevKit_home, as well as modules for production tools like [Daemon Tools][8], [Monit][9], [Apache][10], [nginx][12], [lightppd][11], etc.

2. By default, git-based repositories used by GsDevKit_home are cloned thus reducing the reliance on network and making for more reliable builds. The ulitmate goal is to move all projects used by GsDevKit to [git][13] so that builds can be done without a network connection.

3. It is no longer necessary to fork the GsDevKit_home project as part of the installation process.

4. Better support for Windows users. The installation process for the Windows, Linux and OSX platforms is the same.  
 
---
---
---
####2. *Do I have to rebuild all of my stones to use GsDevKit_home?*
No.

You have a couple of different options when it comes to stones created in gsDevKitHome:

1. [Attach to Foreign Stone](#attach-to-foreign-stone)
2. [Attach to Old DevKit Stone](#attach-to-old-devkit-stone)

#####Attach to Foreign Stone
If you have a stone with tODE installed and you'd like to continue to access that stone while you use GsDevKit_home, you can use `attachForeignStone` to create a *foreign* stone:

```Shell
attachForeignStone foreign_3106 3.1.0.6
```

The `attachForeignStone` command, creates a valid session description for the stone and creates an entry for the stone in the $GS_SERVER_STONES directory so that the stone shows up in the `status` command:

```
foos:_home> status
Installed Products:
	3.1.0.6
	3.2.9
Installed Clients:
	tode	tODE client
	  todeClient.image
Available Sessions:
	foreign_3106
	gs_329
Installed Stones:
	3.1.0.6	foreign_3106	(foreign)
	3.2.9	gs_329
```

In order to log into a foreign stone, you need to edit the session description (`vi $GS_HOME/sys/local/sessions/foreign_3106`) and defined the necessary fields.

#####Attach to Old DevKit Stone
If you have a stone with tODE installed that was being managed under gsDevKitHome, you can use the `attachOldDevKitStone` script. For example the following command attaches to a stone named `dev_329` that was created using the dev branch of GsDevKitHome (`-d` option) where `$GS_HOME` is `/export/foos1/users/dhenrich/dev/dev_gsDevKitHome`:

```shell
attachOldDevKitStone -d -t dev_329 3.2.9 /export/foos1/users/dhenrich/dev/dev_gsDevKitHome
```

`attachOldDevKitStone` creates a symbolic link to the original stone directory, copies the original session description to the `$GS_SYS_SESSIONS` directory. When the `-t` option is specied, the script copies the stone-specific scripts and projects (basically contents of old $GS_HOME/tode/sys/stones directory) into the new location: `$GS_SYS_STONES/<stone-name>`.

```
foos:_home>status
Installed Products:
	3.1.0.6
	3.2.9
Installed Clients:
	tode	tODE client
	  todeClient.image
Available Sessions:
	foreign_329
	dev_329
	gs_329
Installed Stones:
	3.2.9	dev_329
	3.2.9	foreign_329	(foreign)
	3.2.9	gs_329
```

---
---
---
####100. *How do I contribute to the GsDevKit_home project?*
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

---
---
---
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


