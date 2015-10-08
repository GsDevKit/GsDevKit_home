##Configuring the Operating System For GsDevKit on a Single Remote Node accessed via X-Forwarding

Before you can use a particular machine as part of a GsDevKit configuration, you must ensure that the 
appropriate features are installed.   Since to begin with, you will not have git access to the GsDevKit 
installation, you must manually install the appropriate packages.

The requirements are different for the different possible configurations and different operating systems. 
A description of the various options is [Installation Overview][1].  

These instructions are specific to the OS used for installation on a single host.  
The instructions are provided [Installation on a remote node with X forwarding][2]

---
###Configure Linux Server for Client and Server


```
  sudo dpkg --add-architecture i386
  sudo apt-get -y update

  sudo apt-get -y install curl
  sudo apt-get -y install git
  sudo apt-get -y install zip
  sudo apt-get -y install unzip
  sudo apt-get -y install libpam0g:i386
  sudo apt-get -y install libssl1.0.0:i386
  sudo apt-get -y install gcc-multilib libstdc++6:i386
  sudo apt-get -y install gdb
  sudo apt-get -y install libfreetype6:i386
  sudo apt-get -y install pstack
  sudo /bin/su -c "echo 'kernel.yama.ptrace_scope = 0' >>/etc/sysctl.d/10-ptrace.conf"

  sudo ln -f -s /usr/lib/i386-lin-gnu/libstdc++.so.6 /usr/lib/i386-linux-gnu/libstdc++.so

  sudo apt-get -y install libgl1-mesa-dev:i386
  sudo apt-get -y install libxcb-dri2-0:i386 
```

---
###Configure Mac as X-forwarding Client

```
TBD
```


[1]: ./README.md
[2]: ./README.md#installation-on-a-single-desktop 








