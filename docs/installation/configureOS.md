#Configuring the Operating System

Before you can use a particular machine as part of a GsDevKit configuration, you must ensure that the appropriate features are installed.   Since to begin with, you will not have git access to the GeDevKit installation, you must manually install the appropriate packages.

The requirements are different for the different possible configurations.  

##Configure Linux Desktop for both Client and Server 
	See   # Installation on a single desktop

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
```

##Configure Linux Server for Server  
	See # Installing separate server and client


##Configure Linux Desktop for Client  
	See # Installing separate server and client

```
  sudo dpkg --add-architecture i386
  sudo apt-get -y update

  sudo apt-get -y install libssl1.0.0:i386
  sudo apt-get -y install libfreetype6:i386
  sudo apt-get -y install gcc-multilib libstdc++6:i386

  sudo ln -f -s /usr/lib/i386-lin-gnu/libstdc++.so.6 /usr/lib/i386-linux-gnu/libstdc++.so 
```


##Configure Linux Server for Client and Server
  See # Installing on a remote node using X forwarding

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

##Configure Mac for Client and Server
	See   # Installation on a single desktop

##Configure Mac for Server
	See # Installing separate server and client

##Configure Mac for Client 
	See # Installing separate server and client

##Configure Mac as X-forwarding Client
      See # Installing on a remote node using X forwarding

##Configure Windows for Client
	See # Installing separate server and client


