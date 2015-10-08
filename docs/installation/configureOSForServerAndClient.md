#Configuring the Operating System For GsDevKit on separate Client and Server Nodes

Before you can use a particular machine as part of a GsDevKit configuration, you must ensure that the 
appropriate features are installed. Since to begin with, you will not have git access to the GsDevKit 
installation, you must manually install the appropriate packages.

The requirements are different for the different possible configurations and different operating systems. 
A description of the various options is [Installation Overview][1].  

These instructions provide details on configuring the OS for a server only, or a client only.  
The complete installation instructions are provided under [Installation on separate client and server][2]

---

###Configure Linux Server for Server  


###Configure Linux Desktop for Client  

```
  sudo dpkg --add-architecture i386
  sudo apt-get -y update

  sudo apt-get -y install libssl1.0.0:i386
  sudo apt-get -y install libfreetype6:i386
  sudo apt-get -y install gcc-multilib libstdc++6:i386

  sudo ln -f -s /usr/lib/i386-lin-gnu/libstdc++.so.6 /usr/lib/i386-linux-gnu/libstdc++.so 
```


###Configure Mac for Server


###Configure Mac for Client 


###Configure Windows for Client

The installation of GitHub on windows provides a shell environment that can be used to run the GsDevKit tODE client.

1. Download and install *GitHub for Windows* by following the instructions on the [GitHub for Windows][2] page.

2. In *GitHub for Windows*, go to the *Options page* and set your default shell to **Git Bash**.

3. Close the *Github for Windows* window; this will not be used for any further GsDevKit work.  
 
   Open a **Git Bash** shell window by clicking on the *Git Shell* icon on your desktop.  

4. On Windows, which has [path length limitations][3], tODE client file paths risk running up against the character limits.  To avoid issues, enable longpaths in git, and reduce overhead by choosing an installation directory with a short path. 
  
   execute the following:
   ```
   git config --global core.longpaths true   
   ```

	
	
[1]: ./README.md
[2]: ./README.md#installation_on_separate_server_and_client
[3]: https://windows.github.com/
[4]:  https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path


