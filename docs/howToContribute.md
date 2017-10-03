# Contributing to the Open Source Project

Open source community development means you should contribute - fix bugs and make other contributions to improving the software.

These instructions are to contribute for those using GsDevKit_home.  The process is similar for contributing
under the old GsDevKit project; if it is not clear, ask on the listserv.

### 1. Before starting

In order to contribute code to GsDevKit_home, you first must:   
      * have a github account.  You can create a free account here: [join github][2].   
      * have github ssh credentials set up; create an [SSH keypair][5]. With an SSH keypair, you are not prompted for a username and password, so git interactions are simplified. You can also use [SSH agent forwarding][6] to use your local SSH keys for server installations.   

Assuming you have installed GsDevKit_home, under the installation you have a local clone.  Local clones are under `/shared/repos/<project>`.  For example, `$GS_HOME/shared/repos/glass`.

The following examples use the `glass` project, but you can contribute to any of the projects using this process.

GsDevKit_home family of projects:
 - [GsDevKit_home][15]
 - [GsDevKit_gs_client_dev][16]
 - [GsDevKit_gs_server][17]
 - [GsDevKit_todeClient][18]
 - [GsDevKit_sys_local][19]

git-based projects used by GsDevKit_home:
 - [Metacello][20]
 - [Tode][21]
 - [Ston][22]
 - [FileTree][23]
 - [Grease][24]
 - [GLASS1][25]
 - [PharoCompatibility][26]
 - [RB][27]


---
*ON GITHUB WEBSITE*
### 2. Fork

From the github web GUI, go to
https://github.com/glassdb/glass
and use the fork button (upper right) to fork the glass project to your github account.

---
*SHELL ON LOCAL DEVELOPMENT MACHINE*

### 3. Set origin

The clones under GsDevKit_home have the default remote set to the standard projects; e.g github:/glassdb/glass.  

You need to create a remote that points at your forked github repository.  
This will be called "development"

For example:
```
cd $GS_HOME/shared/repos/glass
git remote add development git@github.com:MYACCOUNT/glass.git
```
You can have multiple remote names; to list the ones you have defined, execute:

```
git remote -v
```

### 4. Update

Make sure your local clone has the latest versions.  This step makes ure your checkout is the latest on the master, pulls changes to your local clone then pushes changes to your fork.

```
cd $GS_HOME/shared/repos/glass
git checkout master
git pull origin master
git push development master
```

### 5. Branch

Before starting work on the code changes, create a branch to isolate your changes.  This allows you to make pull requests that only include changed related to what you want to contribute, not all changes in your system.

This example specified a branch named Issue_00:
```
cd $GS_HOME/shared/repos/glass
git checkout master
git checkout -b Issue_00
```
Please use a meaningful name.  For bug fixes, use the branch name Issue_<bugNumber>, so there is no confusion about why the branch was created.

---
*IN TODE*

### 6. Update your stone

If you did not already have a stone, create one, and it will be built using the new master branch.

Execute the following in tODE::

```
project load GLASS1  
```
(for other projects, see the project name here).

### 7. Implement

Write the bugfix, write new tests, and ensure existing tests pass.

### 8. Commit fix

Commit your changes using the following tODE command:

```
project commit --message'`Issue #00: description of change` GLASS1
```

using #00 will cause the commit to show up on the issue page.

The tODE command writes all the changes out and performs git commands: `git add <filename>` and
`git commit -m "comment"`.  You can examine the changes using `git status`.

---
*SHELL ON LOCAL DEVELOPMENT MACHINE*

### 9. Push changes

Push the changes to your github repository:

```
cd $GS_HOME/shared/repos/glass
git push development Issue_00
```

---
*ON GITHUB WEBSITE*

## 10. Create a pull request

On github.com, select the **branches** link (above the green bar), and select the "Issue_00" branch under Your branches. Click on the "New pull request" button next to it, and fill out the information (include Issue #00 in the title or body of the pull request, so it shows up in the issue information).  Click on the create pull request button.

Dale will be notified of the pull request, and automated tests will be started. Once the tests are clean and the changes reviewed, Dale will merge the changes.

---
*SHELL ON LOCAL DEVELOPMENT MACHINE*

### 11. Update your fork

You are still on the Issue_00 branch, and should move back to the master and update to the latest.

```
cd $GS_HOME/shared/repos/glass
git checkout master
git pull origin master
git push development master
```

If you have more bug fixes to make, you'll start with step 4.  



[2]: https://github.com/
[5]: https://help.github.com/articles/generating-ssh-keys/
[6]: https://developer.github.com/guides/using-ssh-agent-forwarding/

[15]: https://github.com/GsDevKit/GsDevKit_home
[16]: https://github.com/GsDevKit/GsDevKit_gs_client_dev
[17]: https://github.com/GsDevKit/GsDevKit_gs_server
[18]: https://github.com/GsDevKit/GsDevKit_todeClient
[19]: https://github.com/GsDevKit/GsDevKit_sys_local
[20]: https://github.com/dalehenrich/metacello-work
[21]: https://github.com/dalehenrich/tode
[22]: https://github.com/GsDevKit/ston
[23]: https://github.com/dalehenrich/filetree
[24]: https://github.com/GsDevKit/Grease
[25]: https://github.com/glassdb
[26]: https://github.com/glassdb/PharoCompatibility
[27]: https://github.com/dalehenrich/rb
