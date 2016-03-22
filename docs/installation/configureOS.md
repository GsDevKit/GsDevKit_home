# Before Installing GsDevKit

##Installing git

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

install Apple's Xcode, which provides git.

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

## Confirm OS hostname

GemStone requries that the result of executing `hostname` be the same name as in `/etc/hostname`, and in `/etc/hosts`. This will normally be the case on a correctly configured system.

### Linux
To check your system,

```
hostname
cat /etc/hosts
```

If this is not correct, you will need to edit /etc/hosts and set the hostname. The hostname is read from /etc/host on boot. To correct the hostname, you should both execute hostname to set the name, and edit /etc/hostname so it will be correct after reboot.

```
sudo vi /etc/hosts
sudo hostname <host-name>
sudo vi /etc/hostname
```
#  Mac

```
sudo hostname <host-name>
sudo vi /etc/hosts
```



---
[**FEEDBACK**](https://github.com/GsDevKit/GsDevKit_home/issues/new)
---

	
[1]: ./README.md
[2]: https://developer.apple.com/xcode/download/
[3]: https://windows.github.com/
[4]:  https://github.com/git-for-windows/git/wiki/Git-cannot-create-a-file-or-directory-with-a-long-path

[5]: http://blog.bobbyallen.me/2014/03/07/how-to-install-git-without-having-to-install-xcode-on-macosx/

