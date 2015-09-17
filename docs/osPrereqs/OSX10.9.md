# GsDevKit prerequisites for OS X10.9

1. [Install Basic Prerequisites (required)](#install-basic-prerequisites-required)
3. [Install ssh (optional)](#install-ssh-optional)
4. [X11 Client (optional)](#install-x11-client-optional)
2. [osPrereqs Installation Script (optional)](#osPrereqs-installation-script-optional)

If you are undecided about whether or not you should install the optional packages, read the section on [Client/Server Configurations][4].

##Install Basic Prerequisites (required)

The following programs must be installed on OS X 10.9 for GsDefKit and tODE to function:

  - git
  - wget

To install `git`, [follow these instructions][2].

To install `wget`, first [install brew][1] then:

```
brew install wget
```

##Optional Installs

###Install X11 Client (optional)
To connect to a remote stone, you may want to install X11 [follow these instructions][3]. Other options are to install X11 on the remote, or to connect to the remote netldi port via SSH.

##Preinstalled
The following prerequisites are installed on Mac OS X by default, so no additional steps are needed.
- ssh
- curl

###Unsupported
- Currently the [osPrereqs script][5] does not support OS X.

[1]: http://coolestguidesontheplanet.com/setting-up-os-x-mavericks-and-homebrew/
[2]: http://git-scm.com/book/en/v2/Getting-Started-Installing-Git#Installing-on-Mac
[3]: http://xquartz.macosforge.org/landing/
[4]: osPrereqs.md#clientserver-configurations
[5]: ../../bin/osPrereqs

##Unknown
- PAM - is this needed for OS X?
