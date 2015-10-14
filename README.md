# Open Source Development Kit for GemStone/S 64 Bit [![Build Status](https://travis-ci.org/GsDevKit/GsDevKit_home.svg?branch=master)](https://travis-ci.org/GsDevKit/GsDevKit_home)

The Development Kit for GemStone/S (GsDevKit) contains tools and compatiblity changes that sit on top of the GemStone/S 64 Bit product, providing a complete and powerful open-source development environment. The Development kit allows Smalltalk developers to take advantage of GemStone's object persistence, along with a variety of open-source Smalltalk tools and frameworks.

GsDevKit is a client-server system, which may both be installed on a single machine, or the server and client may be installed on separate nodes. The GsDevKit server installation includes the GemStone/S server.

## Early Acess Version
The GsDevKit_home project is current in **EARLY ACDESS** mode. If you are already familiar with using [GsDevKit/gsDevKitHome][1] and are interested in providing feedback, then by all means continue reading. On the other hand if you are new to using GemStone, then you should use [GsDevKit/gsDevKitHome][1].

##Installation
**GsDevKit_home** offers two different install options:  

1. *Everything on a single workstation*
2. *Client on a local workstation, Server on a remote host*

Please read the [Installation Overview][2] for more information on the different installation options and instructions.

##FAQs
1. *If I am already using gsDevKitHome, why should I consider using GsDevKit_home?*

   - Local git clones for each of the git-based repositories used in GsDevKit_home are created to reduce the reliance on network connectivity for builds. [Click here to read more about local git clones.][4]

   - GsDevKit_home has been made more modular with separate git projects for \_dev (client), \_server (stones), and \_local (project-specific tODE and bash scripts. [Click here to read more about modularity.][3]  

2. *testing 1 to 3?*
3. *How do I contribute bugfixes?"


[1]: https://github.com/GsDevKit/gsDevKitHome#open-source-development-kit-for-gemstones-64-bit-
[2]: docs/installation#installation-overview
[3]: docs/FAQs/moreModular.md
[4]: docs/FAQs/localGitClones.md
