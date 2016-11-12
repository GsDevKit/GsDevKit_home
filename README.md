# Open Source Development Kit for GemStone/S 64 Bit [![Build Status](https://travis-ci.org/GsDevKit/GsDevKit_home.svg?branch=master)](https://travis-ci.org/GsDevKit/GsDevKit_home)

The Development Kit for GemStone/S (GsDevKit) contains tools and compatiblity changes that sit on top of the GemStone/S 64 Bit product, providing a complete and powerful open-source development environment. The Development kit allows Smalltalk developers to take advantage of GemStone's object persistence, along with a variety of open-source Smalltalk tools and frameworks.

GsDevKit is a client-server system, which may both be installed on a single machine, or the server and client may be installed on separate nodes. The GsDevKit server installation includes the GemStone/S server.

##Installation

Before installing, you should read through the **[Installation Instructions][2]**.  There are several installation options: all on a single workstation, or with a local client and a remote server.  The script below installs GsDevKit and GemStone on a single workstation, creates and starts a Stone (server), and creates a tODE client.  You must [install git][14] before you can execute this script.

If you are planning to use Seaside, instead of this you can install and create a Seaside Stone using the [Seaside installation instructions][20]. You can also [install Seaside into an existing GsDevKit installation][21].

```
git clone https://github.com/GsDevKit/GsDevKit_home.git
cd GsDevKit_home
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
installServerClient
createStone devKit_33 3.3.0
createClient tode1
```

##Using GsDevKit and tODE

GsDevKit and tODE provide a development environment that is similar to Smalltalk IDEs, but with additonal functionality.  The most important capabilities are for project management, and the tODE command shell.  To get started learning about tODE features, see:
* [Getting started with tODE][11]
* [The tODE command line shell][12]
* [Projects in tODE][13]


##FAQs
1. [If I am already using gsDevKitHome, why should I consider moving to GsDevKit_home?][3]
2. [Do I have to rebuild all of my stones to use GsDevKit_home?][4]
3. [Can I use a GsDevKit_home tODE client to connect to older stones?][5]
4. [When a new version of GsDevKit_home is published, how do I update my checkout?][6]
5. [When a new version of tODE is published, how do I update my checkout and my stones?][7]
6. [Do I have to bootstrap GLASS1 and tODE from scratch every time I create a stone?][9]
7. [How do I create a new project from scratch in tODE?][10]
8. [How do I share session descriptions between a local client and a remote server?][15]
9. [How do I upgrade a stone to a new version of GemStone?][16]
10. [How do I load Seaside?][21]

##Talks
Smalltalks 2015: Announcing GsDevKit_home And tODE [video][30]

[**FEEDBACK**][8]

[1]: https://github.com/GsDevKit/gsDevKitHome#open-source-development-kit-for-gemstones-64-bit-
[2]: docs/installation/README.md#installation-overview
[3]: docs/FAQ.md#1-if-i-am-already-using-gsdevkithome-why-should-i-consider-moving-to-gsdevkit_home
[4]: docs/FAQ.md#2-do-i-have-to-rebuild-all-of-my-stones-to-use-gsdevkit_home
[5]: docs/FAQ.md#3-can-i-use-a-gsdevkit_home-tode-client-to-connect-to-older-stones
[6]: docs/FAQ.md#4-when-a-new-version-of-gsdevkit_home-is-published-how-do-i-update-my-checkout
[7]: docs/FAQ.md#5-when-a-new-version-of-tode-is-published-how-do-i-update-my-checkout-and-my-stones
[8]: https://github.com/GsDevKit/GsDevKit_home/issues/new
[9]: docs/FAQ.md#6-do-i-have-to-bootstrap-glass1-and-tode-from-scratch-every-time-i-create-a-stone
[10]: docs/projectsInTode.md#creating-a-new-project
 
[11]: docs/gettingStartedWithTode.md
[12]: docs/todeShell.md
[13]: docs/projectsInTode.md
[14]: docs/installation/configureOS.md
 
[15]: docs/installation/installDevKitClient.md#setup-on-client-node
[16]: docs/updateAndUpgrade.md#upgrade

[20]: https://github.com/GsDevKit/GsDevKit_seaside31/blob/master/docs/installation/README.md
[21]: docs/gettingStartedWithSeaside.md

[30]: https://www.youtube.com/watch?v=QshDlH1ADZQ

[100]: docs/FAQ.md#100-how-do-i-contribute-to-the-gsdevkit_home-project
