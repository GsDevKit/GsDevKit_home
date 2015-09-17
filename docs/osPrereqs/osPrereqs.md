#GsDevKit Operating System Prerequisites
If you are installing the GsDevKit on OS X, then go directly to the [GsDevKit prerequisites for OS X10.9 document][3].

If you care about customizing the installation of Ubuntu packages, the read the sections on [required](#required-ubuntu-packages) and [recommended](#recommended-ubuntu-packages) packages.

Otherwise just follow the instructins in the following section.

##Simplified Prerequisite Installation for Ubuntu

1. Login to your Ubuntu server
2. Manually install [SSH](#ssh):

   ```
   sudo apt-get -y update
   sudo apt-get -y install openssh-client
   sudo apt-get -y install openssh-server
   ```

3. Logout of your ubuntu server and copy [osPrereqs install script][2] from local clone to Ubuntu server using `scp`:

   ```
   scp $GS_HOME/bin/osPrereqs <server-username>@<server-ip-address>:/home/<server-username>
   ```

   *If you do not have a local clone of gsDevKitHome, then create an [osPrereqs script][2] using your favorite text editor or follow the manual steps in the [required](#required-ubuntu-packages) and [recommended](#recommended-ubuntu-packages) sections.*

4. Login to your Ubuntu server using [SSH](#ssh):

   ```
   ssh <server-ip-address> -l <server-username> -X
   ```

5. Install prerequisites:

   ```
   /home/<server-username>/osPrereqs -X
   ```

   *Note add the `-G` flag is you intend to use GemTools on your server.*

6. [Continue with the installation of gsDevKitHome on your Ubuntu server][1].

##Required Ubuntu packages
The GsDevKit server can be installed on Linux or Mac OS X.

The following packages are required for a GsDevKit installation:
- 32 bit libraries - needed to run Pharo (headless)
- curl             - needed by FileTree
- git              - needed by GsDevKit and tODE
- PAM              - needed by GemStone server
- ssl              - needed by GemStone server
- unzip            - needed by FileTree
- wget             - needed by bin/installGemStone script
- gdb, pstack      - needed by GemStone to produce C stack traces
- freetype         - needed by Pharo (headful) on Linux for using platform-specific (monospaced) fonts

See the the prerequisite installation guide for your platform for detailed instructions on installing the required prerequisites:
- [GsDevKit prerequisites for Ubuntu 12.04][55]
- [GsDevKit prerequisites for Ubuntu 14.04][56]
- [GsDevKit prerequisites for OS X10.9][57]

##Recommended Ubuntu packages
I recommend that you install both [SSH](#ssh) and [X11 Client](#x11-client).

###SSH
Platform-specific installation instructions:

- [ssh for Ubuntu 12.04][65]
- [ssh for Ubuntu 14.04][66]

###X11 Client
Platform-specific installation instructions:

- [X11 Client for Ubuntu 12.04][75]
- [X11 Client for Ubuntu 14.04][76]

[1]: ../../README.md#clone-gsdevkithome
[2]: ../../bin/osPrereqs
[3]: OSX10.9.md#gsdevkit-prerequisites-for-os-x109

[16]: ../x11ForwardingForRemoteDisplays.md#x11-forwarding-for-remote-servers
[17]: ../portForwardingForRemoteLogins.md#using-port-forwarding-for-remote-gemstone-servers

[55]: ubuntu12.04.md
[56]: ubuntu14.04.md

[65]: ubuntu12.04.md#install-ssh-optional
[66]: ubuntu14.04.md#install-ssh-optional

[75]: ubuntu12.04.md#install-x11-client-optional
[76]: ubuntu14.04.md#install-x11-client-optional
