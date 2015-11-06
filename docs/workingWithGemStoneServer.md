# Working with a GemStone server

GemStone is a transactional, multi-user object database.  The Stone process interfaces to the disk-based extents, and coordinates between multiple Gem session that represent individual logins.   The objects themselves are loaded from the disk extents into the shared page cache, where they are available to all sessions.   More information on GemStone can be found on the <a href="https://gemtalksystems.com/products/gs64/">GemStone Website</a>.

GemStone administration is described in the [System Adminstration Guide][1].

GsDevKit provides an interface to the main GemStone repository operations, simplifying the management interface available in the plain GemStone installation.  The bash command-line operations provided by GsDevKit are distinct from GemStone utility commands.  Users who have experience with GemStone will have the most difficulty. 

###Working with Stones

In the GsDevKit environment, the GemStone server and all associated underlying processes are collectively termed a "stone".  *Installing* is a process of downloading the GemStone/S server components.  *Creating a stone* involves making a directory, copying files, and creating configuration information that describe an independent repository with a specific name and version. *Starting a stone* starts up the GemStone stone process, other associated processes, and gets the repository in a state where you can login.  

The following diagram indicates some of the relationships between these:

![GsDevKit architecture][2]

* The Server Node's blue and purple ovals are GemStone processes that are expressed as a "running" GsDevKit stone.  Note that the Gem, which is started up when the tODE client logs in and terminated when tODE logs out, is part of the GemStone server, and is shut down when the stone shuts down.

* The Server Node's folder and disk images are a "created" GsDevKit stone.

####Stone commands

The `stones` command lists all stones and netldis that have been created and those that are currently running.

The following commands operate on stones:

* `createStone <stoneName> <version> ` creates the associated directory files for a stone with the given name and GemStone version.  There are a number of options to create stones based on snapshots (backups) and with certain projects loaded.
 
* `startStone -b <stoneName>` starts the stone and netldi. 

* `stopStone -b <stoneName>` stops the stone and netldi.  Note that if there are any logged in sessions, they will be terminated.

* `deleteStone <stoneName> ` stops the stone and netldi, if running, then deletes all files assocated with the given repository.

##Maintenance Operations and Garbage Collection

GemStone, for the most part, operates in the background with little management required. 

The primary task, other than for Seaside applications, it to ensure that garbage collection of dereferenced persistent objects occurs periodically.  In Seaside applications, this task is performed by the Seaside Web Server.
In non-Seaside applications, it should be run periodically, to avoid dereferenced objects eventually filling up disk space.

To perform a garbage collection, use the tODE shell command gs mfc.  For example:

![GemStone MFC][10]

*NOTE: This is not needed for Seaside applications !*

##NetLDI

The NetLDI is a process that initiates communication between sessions and GemStone, and starts processes to support GemStone logins.  You must have a NetDLI running in order for tODE to login to GemStone.

Creating a stone automatically creates a Netldi, and starting a stone using startStone -b automatically start the associated netldi.

You may start and stop the stone and the netldi independently, using startStone or stopStone without the -b, and using startNetldi and stopNetldi.  GemStone users should note that while the NetLDI has a name, the startNetldi and stopNetldi scripts take the name of the GsDevKit stone installation, which is also the Stone process name, not the Netldi process name.

####Port user over restart

In a multiple-node system (for example, if your stone is installed on Linux but your tODE client is running on Windows), the Netldi should either have an assigned port for the specific netldi name in /etc/services, or you should edit the contents of $GS_HOME/sys/local/sessions/<stoneName> to specify a specific port number on both nodes:

        #netLDIPort : '45678',

Otherwise, the NetLDI will listen on a  different port each time it restarts, and the tODE client will not be able to connect.






---
[**FEEDBACK**][28]
---

[1]: https://downloads.gemtalksystems.com/docs/GemStone64/3.2.x/GS64-SysAdmin-3.2/GS64-SysAdmin-3.2.htm
[2]: images/DevKit_ClientServer_Arch.png
[10]: images/todeMFC.png

[28]: https://github.com/GsDevKit/GsDevKit_home/issues/new


