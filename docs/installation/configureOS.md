#Configuring the Operating System For GsDevKit

While the GsDevKit install handles most OS requirements, you must have git installed in order to 
run the GsDevKit code that handles this.

---
###Linux 

For Ubuntu:
```
sudo apt-get -y update
sudo apt-get -y install git
```

For Centos:
```
sudo yum install git
```

---
### Mac

install Xcode from the App Store
[Download Xcode from Apple][2] 

Xcode is not strictly required, but there are [extras steps required to support git on the Mac][5].

---
### Windows

The installation of GitHub on windows provides a shell environment that can be used to run the GsDevKit tODE client.

1. Download and install *GitHub for Windows* by following the instructions on the [GitHub for Windows][2] page.

2. In *GitHub for Windows*, go to the *Options page* and set your default shell to **Git Bash**.

3. Close the *Github for Windows* window; this will not be used for any further GsDevKit work.  
 
   Open a **Git Bash** shell window by clicking on the *Git Shell* icon on your desktop.  

4. On Windows, which has [path length limitations][3], tODE client file paths risk running up against the character limits.  To avoid issues, enable longpaths in git, and reduce overhead by choosing an installation directory with a short path. 
  
   In your git shell, execute the following:
   ```
   git config --global core.longpaths true   
   ```

	
[1]: ./README.md
[2]: https://developer.apple.com/xcode/download/
[3]: https://windows.github.com/
[4]:  https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path

[5]: http://blog.bobbyallen.me/2014/03/07/how-to-install-git-without-having-to-install-xcode-on-macosx/

