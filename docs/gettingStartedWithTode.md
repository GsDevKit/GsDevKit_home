
###Open a tODE client image

Once you have installed the server and tODE client, you can open the tODE client and start using it.

On the client node, if you have not already done so, startup the tODE client by executing:
```
startClient <clientName>
```

Use the name of the client you created.  These instructions have used the client name **tode1**, in which case you would execute

```
startClient tode1
```

Note that the script `clients` will list all installed clients.

the tODE image will come up.  At this point, you are not logged into the server stone.  To get started using tODE, you'll open the tODE shell using the popup menu, and select the stone you will be using.  In this example, it's `devKit_329`.


![open tode shell][2]

### Verify your connection to the server

You don't need to explicitly login to GemStone to use the tODE client; the first operation you perform automatically logs you in.  Closing the tODE shell logs you out of the stone.

The first time you bring up tODE, you may want to test your login, to make sure the connection was correctly established. This is particularly important if you are using separate nodes for client and server, to verify the ports are correctly set on both nodes.  

To verify login, at the tODE shell prompt, enter the command `testLogin`.
If there are errors, verify that the stone and netldi are running, and that the client's session description for this stone specifies the same netldi port that the netldi is listening on. 

Success provides information about the connect:

![tODE Test Login Success][4] 

Failure provides a description of the problem:

![tODE Test Login Fail][5]

###Using tODE

Smalltalk browsers provide a number of panes in familiar positions within a window.  tODE implements these panes by creating individual windows for each pane. You may resize, move, or close individual panes; when a pane needs to be updated, it will be reopened if necessary.  The position and relative locations of the panes are computed within tODE.

If you want more space than the default image allows (or less), resize the windows and use the popup menu client > window > jigsaw to recompute the pane layout. 

![tODE Resize menu][6] 

Documentation for tODE is provided in man pages within the tODE environment (not UNIX command line man pages).  At the tODE shell prompt, enter `man <topic>` to open a window with man-page style help, `man --all` for a list of man pages, or `man --find <keyword>` to search man pages for a specific word or phrase.

![tODE Man Page][7] 


[Continue to next page: The tODE Shell][8]


---


[1]: images/openTodeShell.png
[2]: images/todeClient.png
[3]: images/projectList.png
[4]: images/testLoginSuccess.png
[5]: images/testLoginFail.png
[6]: images/todeResizeMenu.png
[7]: images/todeMan.png
[8]: ./todeShell.md



