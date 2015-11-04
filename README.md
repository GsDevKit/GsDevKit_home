# Open Source Development Kit for GemStone/S 64 Bit [![Build Status](https://travis-ci.org/GsDevKit/GsDevKit_home.svg?branch=master)](https://travis-ci.org/GsDevKit/GsDevKit_home)

The Development Kit for GemStone/S (GsDevKit) contains tools and compatiblity changes that sit on top of the GemStone/S 64 Bit product, providing a complete and powerful open-source development environment. The Development kit allows Smalltalk developers to take advantage of GemStone's object persistence, along with a variety of open-source Smalltalk tools and frameworks.

GsDevKit is a client-server system, which may both be installed on a single machine, or the server and client may be installed on separate nodes. The GsDevKit server installation includes the GemStone/S server.

## Early Access Version
The GsDevKit_home project is current in **EARLY ACCESS** mode. If you are already familiar with using [GsDevKit/gsDevKitHome][1] and are interested in providing feedback, then by all means continue reading. On the other hand if you are new to using GemStone, then you should use [GsDevKit/gsDevKitHome][1].

##Installation
**GsDevKit_home** offers two different install options:  

1. *Everything on a single workstation*
2. *Client on a local workstation, Server on a remote host*

You will need to ensure that your operating system is configured with the required packages before installing.  Please read the [Installation Overview][2] for installation options and instructions.  If you are planning to use Seaside, you can install and create a Seaside Stone, using the [Seaside installation instructions][20]. You can also [install Seaside into an existing GsDevKit installation][21].

##FAQs
1. [If I am already using gsDevKitHome, why should I consider moving to GsDevKit_home?][3]
2. [Do I have to rebuild all of my stones to use GsDevKit_home?][4]
3. [Can I use a GsDevKit_home tODE client to connect to older stones?][5]
4. [When a new version of GsDevKit_home is published, how do I update my checkout?][6]
5. [When a new version of tODE is published, how do I update my checkout and my stones?][7]
6. [Do I have to bootstrap GLASS1 and tODE from scratch every time I create a stone?][9]
7. [How do I create a new project from scratch in tODE?][10]
8. How do I share session descriptions between a local client and a remote server?
9. How do I upgrade a stone to a new version of GemStone?
10. [How do I load Seaside?][21]

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
 
[20]: https://github.com/GsDevKit/GsDevKit_seaside31/blob/master/docs/installation/README.md
[21]: https://github.com/GsDevKit/GsDevKit_seaside31/blob/master/docs/installation/loadSeasideProject.md

[100]: docs/FAQ.md#100-how-do-i-contribute-to-the-gsdevkit_home-project
