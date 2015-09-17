# Using Port Forwarding for Remote GemStone Servers

1. [Intro](#intro)
2. [Netldi Setup](#netldi-setup)
3. [SSH Port Forwarding Server-side](#ssh-port-forwarding-server-side)
4. [Port Forwarding Session Description](#port-forwarding-session-description)
5. [Login with tODE Client](#login-with-tode-client)

##Intro
Sometimes when I am working from home I am interested in connecting a tODE client that is running on my laptop to a stone that is running in a virtual machine that itself is running on a workstation located in the office.
In my case the virtual machine is configured to use host-only networking, so I cannot connect directly to the ip address of my virtual machine from my laptop at home.

I'm sure there are other ways to skin my network connectivity cat, but this does present an interesting case where I connect a local tODE client to a stone running on a remote machine using [SSH port forwarding][1].
This same technique can be used to run connect a local tODE client to any GsDevKit server running in a remote data center to which you have ssh access.
The main advantage being that you do not have to poke holes in the server firewall to be able to connect a tODE client.

##Netldi Setup
Since we are running the `netldi` with an non-standard set of parameters, we will start the `netdli` directly using the `$GEMSTONE/bin/startnetldi` program directly instead of using the `$GS_HOME/bin/startNetldi` script.

To set up the port forwarding we need to know which ports are going to be used by GemStone to connect the local tODE client to the remote stone.
In practice, there will be two ports involved: the well-known `netldi` port and the child process port.

The *well-known `netldi` port number* is the port number specified in `netLDI` field of the tODE session description in this case we'll used `55320` as the  *well-known `netldi` port number*.

Normally the *child process port* is randomly assigned, but since we need to set up the port forwarding ahead of time, we will have to use the `startnetldi` command's `-p` option to define a port range.
In our case the *port range* will be a single port number and we'll use `55325` in this example.
Before starting a `netldi` you need to make sure that all of the required environmental variables (**GEMSTONE**, **GEMSTONE_NRS_ALL**, etc.) are defined.

##SSH Port Forwarding Server-side

Assuming that you have a stone named `devKit` running on your server, that the server login is `dhenrich`, and that the ip address of the server is 192.168.100.129, the following commands can be used to set up the SSH port forwarding and start the `netldi`:

```
ssh 192.168.100.129 -l dhenrich -L 55320:localhost:55320  -L 55325:localhost:55325 # ssh login setting up local port forwarding
cd $GS_HOME/gemstone/stones/devKit                                                 # cd to your stone directory
. defStone.env                                                                     # define the GsDevKit environment variables
$GEMSTONE/bin/startnetldi -a dhenrich -g -p 55325:55325 -P 55320 devKit_ldi        # start the netldi
```

You'll need to leave the ssh connection open to keep the ports open while you use tODE.

##Port Forwarding Session Description
The take the following session description:

```ston
TDSessionDescription {
	#name : 'devKit',
	#stoneHost : 'localhost',
	#stoneName : 'devKit',
	#gemHost : 'localhost',
	#netLDI : '55320',
	#gemTask : 'gemnetobject',
	#userId : 'DataCurator',
	#password : 'swordfish',
	#osUserId : nil,
	#osPassword : nil,
	#dataDirectory : nil,
	#backupDirectory : '',
	#gemstoneVersion : '3.1.0.6',
	#gciLibraryName : nil,
	#adornmentColor : nil,
        #serverGitRoot : '/home/dhenrich/gsDevKitHome/gemstone/stones/devKit/git',
	#serverTodeRoot : '/home/dhenrich/gsDevKitHome/tode'
}
```

Notice that we are using `localHost` for both the `stoneHost` and `gemHost` fields.
With port forwarding it looks to GemStone as though the tODEClient process is running on the server machine.
Edit any of the remaining fields it to match your installation (`gemstoneVersion`, `serverGitRoot` and `serverTodeRoot` at a minimum).
Save the session description in a file named `$GS_HOME/tode/sys/local/client/descriptions/devKit`.

##Login with tODE Client
Launch the todeClient on your local machine:

```
$GS_HOME/bin/todeClient
```

In your todeClient use the `tODE>tODE Test Login>devKit` menu item to test your connection to the remote stone.
If you don't get something that looks like the following, you will need to adjust things (if the error messages are not self explanatory, subscribe and send mail to the [GsDevKit mailing list][2]):

```
Stone            : !TCP@localhost#server!devKit
Stone host       : ubuntu
GemStone version : 3.1.0.6
cpu kind         : x86_64
GLASS version    : >=1.0-beta.9.2 [ConfigurationOfGLASS]
Metacello version: >=1.0-beta.32.1 [ConfigurationOfMetacello]
GLASS1:
       repository: /home/dhenrich/gsDevKitHome/gemstone/stones/devKit/logs/github-cache/glassdb/glass/master/glassdb-glass-763cd79/repository
Tode:
       repository: /home/dhenrich/gsDevKitHome/gemstone/stones/devKit/logs/github-cache/dalehenrich/tode/dev/dalehenrich-tode-9cd8aa0/repository
```

[1]: https://help.ubuntu.com/community/SSH/OpenSSH/PortForwarding
[2]: http://lists.gemtalksystems.com/mailman/listinfo/glass

