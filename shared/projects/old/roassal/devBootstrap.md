# Roassal Visualization setup and install

Basically I'm assuming that you will want to [Fork dalehenrich/tode][1], so that you can contribute to the project, if necessary.
First set up in your bash shell the environment variables used a various places in the script:

```
# Customize the following variables as you see fit
#
githubUserName=dalehenrich
todeBranchName=roassal
devKitHomeBranchName=roassal
stoneName=roassal
```

The next set of bash commands clone the gsDevKitHome, tODe and sample project and finally builds a stone:

```
# Clone gsDevKitHome
#
git clone git@github.com:GsDevKit/gsDevKitHome.git
cd gsDevKitHome
export GS_HOME=`pwd`
export PATH=$GS_HOME/bin:$PATH
git checkout dev
git checkout -b $devKitHomeBranchName
cd ..

# Clone of your fork of tODE project
#
gitHome=$GS_HOME/tode/sys/local/git
cd $gitHome
git clone git@github.com:${githubUserName}/tode.git
cd tode
git checkout dev
git checkout -b $todeBranchName
cd ..

# Clone Sample project
#
git clone git@github.com:GsDevKit/sampleProject.git
cd sampleProject
export SAMPLE_HOME=`pwd`
cd ..

# Copy tode.ston, installTode.ws and todeLoad.st 
# to refrence the local tODE clone and load Roassal support
#
localProjectsHome=$GS_HOME/tode/sys/local/projects
cat $SAMPLE_HOME/gsDevKit/tode/sys/local/projects/tode.ston | sed s_\$\{gitRoot\}_${gitHome}_ > ${localProjectsHome}/tode.ston
cp $GS_HOME/tests/tode/sys/local/server/scripts/installTode.ws $GS_HOME/tode/sys/local/server/scripts
cp $GS_HOME/projects/roassal/tode/sys/local/pharo/todeLoad.st $GS_HOME/tode/sys/local/pharo

# Install stone
#
installServer $stoneName 3.2.6
```

Now, follow the instructions in the [Roassal Examples in the readme][2].

[1]: https://github.com/dalehenrich/tode#fork-destination-box
[2]: README.md#examples
