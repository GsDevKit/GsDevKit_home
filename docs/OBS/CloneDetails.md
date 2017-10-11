
### Clone GsDevKit_home
Clone the [GsDevKit_home project][2] to your GemStone development server and create a unique branch to keep any changes you make for your project isolated from the Dev Kit master branch:

[Fork the GsDevKit_home project][3], clone your fork to your local GemStone development server, and create a unique branch to keep any changes you make for your project isolated.

If you are new to github, see the [detailed instructions][37]. You will need to setup authentication (generally, SSH credentials) as well, to allow tODE to work.

```Shell
git clone git@github.com:<yourAccountName>/GsDevKit_home.git
cd GsDevKit_home
```

  4. Create a unique branch for your work, and synchronize github

  ```Shell
# The purpose of the branch is to have a place to make all your personal customizations. This way,
# if you ever want to feed back changes to GsDevKit_home, your dev branch will be clean. Since the
# basic use case is to have one branch for all your development. You may want to name it after
# yourself!
git checkout -b  <your_branch_name>
# Where you push depends on your workflow. Since this is git, you have many options to host your
# code (e.g. GitHub, BitBucket). If you want to simply push to your GitHub fork:
git push origin <your_branch_name>
  ```  

  5. **FOR EARLY ADOPTERS ONLY** execute the following shell commands before doing your first install. The files ensure that you are using the dev branch of tODE for the client and server installations:

  ```Shell
# These scripts ensure that you are using the dev branch of tODE
cp $GS_HOME/tests/tode/sys/local/server/scripts/installTode.ws $GS_HOME/tode/sys/local/server/scripts
cp $GS_HOME/tests/tode/sys/local/projects/*.ston $GS_HOME/tode/sys/local/projects
cp $GS_HOME/tests/tode/sys/local/pharo/todeLoad.st $GS_HOME/tode/sys/local/pharo
  ```


[1]: https://help.github.com/articles/fork-a-repo
[2]: https://github.com/GsDevKit/GsDevKit_home
[3]: https://github.com/GsDevKit/GsDevKit_home/fork
[4]: https://help.github.com/articles/fork-a-repo#step-2-clone-your-fork
[37]: docs/installationGitHubDetails.md
