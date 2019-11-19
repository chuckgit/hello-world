
Reentrant program save area example
In this example the calling program registers ar
e saved (using SAVE macro) in a save area
located in a block of virtual storage. This exam
ple applies to reentrant and reusable programs.
MYPGMA CSECT
Program start
SAVE (14,12)
Save registers via SAVE macro
LR 12,15
Reg 12 -> MYPGMA
USING MYPGMA,R12
Map fields in MYPGMA
GETMAIN R,LV=WSA_SIZE
Get working storage area
ST 13,4(1)
Chain caller save area to new
ST 1,8(13)
Chain new save area to caller
LR 13,1
Reg 13 -> new save area
.
.
.
*
*---------------------------------------------------------------
* Working Storage Area (WSA) block map
*---------------------------------------------------------------
WSA DSECT
New save area
WSA_START DS OF
Start of WSA block
SAVEAREA DS 18F
Save area
WSA_END DS 0D
End of WSA block
WSA_SIZE EQU *-WSA_START
WSA block size

There is no reason to write nonreusable code,
as illustrated in example 1. Writing reentrant
programs requires a little bit more effort, but
has measurable benefits. Reentrant programs
benefit from reduced program load overhead
and module serialization delays. Reentrant
modules tend to be smaller in size. A program to
be executed in a batch job step benefits from
being reentrant. When a module is reentrant it
is much easier to use the module as callable
subprogram that can be invoked in any environment.


Summary of conventions to be followed when passing and
receiving control
The following is a list of conv
entions to be followed when passing and receiving control.
Conventions used by a program before passing
control to another program that will return
control to the calling program:

Place the address of calling save area in register 13

Place the point of return address in register 14.

Place the entry address of the program being called in register 15.

Place the address of the parameter list in re
gister 1 and register 0 (if multiple lists).
Conventions used by a program before passing co
ntrol to another program that will NOT return
control to the calling program:

Restore registers 2 - 12 and 14.
Register values should be the values passed by the
program that called this program.

Place the address of the save area provided by the program that called this program in
register 13.

Place the entry address of the program being called in register 15.

Place the address of the parameter list in regi
ster 1 and register 0 (if multiple lists).
Conventions used by a called pr
ogram after receiving control:

Save the contents of registers 0 - 12, 14 and 15 in the save area provided by the calling
program.

Set a base register.

Allocate storage for a save area if the save
area is not included in the program using a
DC statement.

Chain the save areas together.
Conventions used by a called prog
ram before returning control:

Restore registers 0 - 12 and 14.

Unchain current save area from calling pr
ogram save area. Address of calling program
save area is placed in register 13.

Place a return code in register 15. Register
15 can be restored to its original value if a
return code is not being returned. After much frustration, I did all of the tests for MF to PC FTP, and came
up with the following rules for FTP (REPLACE. Note that these are ALL
using FTP Batch from the mainframe. Why this inconsistancy? Poor
planning/programming on the part of IBM's tcpip implementation, which I
think they bought from some university anyhow.

1) Never use (REPLACE with PUT
2) Always use (REPLACE with GET

PUT + file no exist + (replace ==> FAIL
+ no replace ==> GOOD
PUT + file exists + (replace ==> GOOD
+ no replace ==> GOOD

GET + file no exist + (replace ==> GOOD
+ no replace ==> GOOD
GET + file exists + (replace ==> GOOD
+ no replace ==> FAIL


Active FTP vs. Passive FTP, a Definitive Explanation

 

Contents:
 Introduction
 The Basics
 Active FTP
 Active FTP Example
 Passive FTP
 Passive FTP Example
 Other Notes
 Summary
 References
 Appendix 1: Configuration of Common FTP Servers
 Appendix 2: Firewall Configuration Guide
 


Introduction
 
One of the most commonly seen questions when dealing with firewalls and other Internet connectivity issues is the difference between active and passive FTP and how best to support either or both of them. Hopefully the following text will help to clear up some of the confusion over how to support FTP in a firewalled environment.
 
This may not be the definitive explanation, as the title claims, however, I've heard enough good feedback and seen this document linked in enough places to know that quite a few people have found it to be useful. I am always looking for ways to improve things though, and if you find something that is not quite clear or needs more explanation, please let me know! Recent additions to this document include the examples of both active and passive command line FTP sessions. These session examples should help make things a bit clearer. They also provide a nice picture into what goes on behind the scenes during an FTP session. Now, on to the information...
 

The Basics
 
FTP is a TCP based service exclusively. There is no UDP component to FTP. FTP is an unusual service in that it utilizes two ports, a 'data' port and a 'command' port (also known as the control port). Traditionally these are port 21 for the command port and port 20 for the data port. The confusion begins however, when we find that depending on the mode, the data port is not always on port 20.
 

Active FTP
 
In active mode FTP the client connects from a random unprivileged port (N > 1023) to the FTP server's command port, port 21. Then, the client starts listening to port N+1 and sends the FTP command PORT N+1 to the FTP server. The server will then connect back to the client's specified data port from its local data port, which is port 20.
 
From the server-side firewall's standpoint, to support active mode FTP the following communication channels need to be opened:
 FTP server's port 21 from anywhere (Client initiates connection)
 FTP server's port 21 to ports > 1023 (Server responds to client's control port)
 FTP server's port 20 to ports > 1023 (Server initiates data connection to client's data port)
 FTP server's port 20 from ports > 1023 (Client sends ACKs to server's data port)
 

When drawn out, the connection appears as follows: 


In step 1, the client's command port contacts the server's command port and sends the command PORT 1027. The server then sends an ACK back to the client's command port in step 2. In step 3 the server initiates a connection on its local data port to the data port the client specified earlier. Finally, the client sends an ACK back as shown in step 4.
 
The main problem with active mode FTP actually falls on the client side. The FTP client doesn't make the actual connection to the data port of the server--it simply tells the server what port it is listening on and the server connects back to the specified port on the client. From the client side firewall this appears to be an outside system initiating a connection to an internal client--something that is usually blocked.
 

Active FTP Example
 
Below is an actual example of an active FTP session. The only things that have been changed are the server names, IP addresses, and user names. In this example an FTP session is initiated from testbox1.slacksite.com (192.168.150.80), a linux box running the standard FTP command line client, to testbox2.slacksite.com (192.168.150.90), a linux box running ProFTPd 1.2.2RC2. The debugging (-d) flag is used with the FTP client to show what is going on behind the scenes. Everything in red is the debugging output which shows the actual FTP commands being sent to the server and the responses generated from those commands. Normal server output is shown in black, and user input is in bold.
 
There are a few interesting things to consider about this dialog. Notice that when the PORT command is issued, it specifies a port on the client (192.168.150.80) system, rather than the server. We will see the opposite behavior when we use passive FTP. While we are on the subject, a quick note about the format of the PORT command. As you can see in the example below it is formatted as a series of six numbers separated by commas. The first four octets are the IP address while the last two octets comprise the port that will be used for the data connection. To find the actual port multiply the fifth octet by 256 and then add the sixth octet to the total. Thus in the example below the port number is ( (14*256) + 178), or 3762. A quick check with netstat should confirm this information.
 testbox1: {/home/p-t/slacker/public_html} % ftp -d testbox2
Connected to testbox2.slacksite.com.
220 testbox2.slacksite.com FTP server ready.
Name (testbox2:slacker): slacker
---> USER slacker
331 Password required for slacker.
Password: TmpPass
---> PASS XXXX
230 User slacker logged in.
---> SYST
215 UNIX Type: L8
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> ls
ftp: setsockopt (ignored): Permission denied
---> PORT 192,168,150,80,14,178
200 PORT command successful.
---> LIST
150 Opening ASCII mode data connection for file list.
drwx------   3 slacker    users         104 Jul 27 01:45 public_html
226 Transfer complete.
ftp> quit
---> QUIT
221 Goodbye.

 
Passive FTP
 
In order to resolve the issue of the server initiating the connection to the client a different method for FTP connections was developed. This was known as passive mode, or PASV, after the command used by the client to tell the server it is in passive mode.
 
In passive mode FTP the client initiates both connections to the server, solving the problem of firewalls filtering the incoming data port connection to the client from the server. When opening an FTP connection, the client opens two random unprivileged ports locally (N > 1023 and N+1). The first port contacts the server on port 21, but instead of then issuing a PORT command and allowing the server to connect back to its data port, the client will issue the PASV command. The result of this is that the server then opens a random unprivileged port (P > 1023) and sends P back to the client in response to the PASV command. The client then initiates the connection from port N+1 to port P on the server to transfer data.
 
From the server-side firewall's standpoint, to support passive mode FTP the following communication channels need to be opened:
 FTP server's port 21 from anywhere (Client initiates connection)
 FTP server's port 21 to ports > 1023 (Server responds to client's control port)
 FTP server's ports > 1023 from anywhere (Client initiates data connection to random port specified by server)
 FTP server's ports > 1023 to remote ports > 1023 (Server sends ACKs (and data) to client's data port)
 

When drawn, a passive mode FTP connection looks like this: 


In step 1, the client contacts the server on the command port and issues the PASV command. The server then replies in step 2 with PORT 2024, telling the client which port it is listening to for the data connection. In step 3 the client then initiates the data connection from its data port to the specified server data port. Finally, the server sends back an ACK in step 4 to the client's data port.
 
While passive mode FTP solves many of the problems from the client side, it opens up a whole range of problems on the server side. The biggest issue is the need to allow any remote connection to high numbered ports on the server. Fortunately, many FTP daemons, including the popular WU-FTPD allow the administrator to specify a range of ports which the FTP server will use. See Appendix 1 for more information.
 
The second issue involves supporting and troubleshooting clients which do (or do not) support passive mode. As an example, the command line FTP utility provided with Solaris does not support passive mode, necessitating a third-party FTP client, such as ncftp.
 NOTE: This is no longer the case--use the -p option with the Solaris FTP client to enable passive mode!
 
With the massive popularity of the World Wide Web, many people prefer to use their web browser as an FTP client. Most browsers only support passive mode when accessing ftp:// URLs. This can either be good or bad depending on what the servers and firewalls are configured to support.
 

Passive FTP Example
 
Below is an actual example of a passive FTP session. The only things that have been changed are the server names, IP addresses, and user names. In this example an FTP session is initiated from testbox1.slacksite.com (192.168.150.80), a linux box running the standard FTP command line client, to testbox2.slacksite.com (192.168.150.90), a linux box running ProFTPd 1.2.2RC2. The debugging (-d) flag is used with the FTP client to show what is going on behind the scenes. Everything in red is the debugging output which shows the actual FTP commands being sent to the server and the responses generated from those commands. Normal server output is shown in black, and user input is in bold.
 
Notice the difference in the PORT command in this example as opposed to the active FTP example. Here, we see a port being opened on the server (192.168.150.90) system, rather than the client. See the discussion about the format of the PORT command above, in the Active FTP Example section.
 testbox1: {/home/p-t/slacker/public_html} % ftp -d testbox2
Connected to testbox2.slacksite.com.
220 testbox2.slacksite.com FTP server ready.
Name (testbox2:slacker): slacker
---> USER slacker
331 Password required for slacker.
Password: TmpPass
---> PASS XXXX
230 User slacker logged in.
---> SYST
215 UNIX Type: L8
Remote system type is UNIX.
Using binary mode to transfer files.
ftp> passive
Passive mode on.
ftp> ls
ftp: setsockopt (ignored): Permission denied
---> PASV
227 Entering Passive Mode (192,168,150,90,195,149).
---> LIST
150 Opening ASCII mode data connection for file list
drwx------   3 slacker    users         104 Jul 27 01:45 public_html
226 Transfer complete.
ftp> quit
---> QUIT
221 Goodbye.

 
Other Notes
 
A reader, Maarten Sjouw, pointed out that active FTP will not function when used in conjunction with a client-side NAT (Network Address Translation) device which is not smart enough to alter the IP address info in FTP packets.
 

Summary
 
The following chart should help admins remember how each FTP mode works: 
 Active FTP :
     command : client >1023 -> server 21
     data    : client >1023 <- server 20

 Passive FTP :
     command : client >1023 -> server 21
     data    : client >1024 -> server >1023
 

A quick summary of the pros and cons of active vs. passive FTP is also in order:
 
Active FTP is beneficial to the FTP server admin, but detrimental to the client side admin. The FTP server attempts to make connections to random high ports on the client, which would almost certainly be blocked by a firewall on the client side. Passive FTP is beneficial to the client, but detrimental to the FTP server admin. The client will make both connections to the server, but one of them will be to a random high port, which would almost certainly be blocked by a firewall on the server side.
 
Luckily, there is somewhat of a compromise. Since admins running FTP servers will need to make their servers accessible to the greatest number of clients, they will almost certainly need to support passive FTP. The exposure of high level ports on the server can be minimized by specifying a limited port range for the FTP server to use. Thus, everything except for this range of ports can be firewalled on the server side. While this doesn't eliminate all risk to the server, it decreases it tremendously. See Appendix 1 for more information.
 

References
 
An excellent reference on how various internet protocols work and the issues involved in firewalling them can be found in the O'Reilly and Associates book, Building Internet Firewalls, 2nd Ed, by Brent Chapman and Elizabeth Zwicky.
 Note 2012:This book is VERY old and the information contained therein may be outdated!
 

Finally, the definitive reference on FTP would be RFC 959, which sets forth the official specifications of the FTP protocol. RFCs can be downloaded from numerous locations, including http://www.faqs.org/rfcs/rfc959.html.
 
--------------------------------------------------------------------------------


After much frustration, I did all of the tests for MF to PC FTP, and came
up with the following rules for FTP (REPLACE. Note that these are ALL
using FTP Batch from the mainframe. Why this inconsistancy? Poor
planning/programming on the part of IBM's tcpip implementation, which I
think they bought from some university anyhow.

1) Never use (REPLACE with PUT
2) Always use (REPLACE with GET

PUT + file no exist + (replace ==> FAIL
+ no replace ==> GOOD
PUT + file exists + (replace ==> GOOD
+ no replace ==> GOOD

GET + file no exist + (replace ==> GOOD
+ no replace ==> GOOD
GET + file exists + (replace ==> GOOD
+ no replace ==> FAIL
ISPVCALL
..Produces trace with the following:
..System and session information
..Cached panels
..Active command tables
..ISPF configuration table values
..Allocated DD's
..LIBDEF status
..Task structure
..SVC table
..ISPF command stack
..A legend
..Usage tips
..Module trace information
•ISPLINK calls
•ISPEXEC calls
•ENQ info
•MSG changes
•SVC99 list
..Trace output written to dynamically allocated variable blocked data set
..Trace started and stopped using TSO ISPVCALL command

•ISPVCALL provides some useful information for debugging ISPF Dialogs.
•ISPVCALL was developed to allow level2 and 3 support to trace internal flow, however it provides users with a lot of extra
information.
•ISPVCALL has a number of additional parameters that can be supplied to aid with the tracing. These are provided to a customer by
IBM support depending on the nature of a reported problem.
•The standard ISPVCALL will generate a trace data set - named userid.ISPVCALL.TRACE
•ISPVCALL is invoked from the command line from any panel (with the command TSO ISPVCALL)
•The first time ISPVCALL is invoked the tracing is started, the next invocation of ISPVCALL will terminate the trace and view the
trace data set.
•ISPVCALL provides a ot of useful information, It contains
•basic System and ISPF information - product versions, system name, etc
•The names of all panels in the ISPF cache
•The ISPF configuration options including where the data set from where the options are loaded
•A list of all the allocated DDnames and there data sets
•Status of the LIBDEFed data sets
•The ISPF TASK structure
•The SVC table,
•and command stack
•A legend and some usage tips, and
•finally the module trace information, showing entry and exit into each module.
•It also shows the ISPLINK and ISPEXEC calls, including the parameters,
•shows ENQ information,
•shows all message information,
•which can be useful when more than one message is issued , but ISPF only displays the last message issued.
•and it show the SVC99 - dynamic allocation parameter

Panel Trace
..Provides debugging capability for panel processing in ISPF applications
..Traces the panel service calls (DISPLAY, TBDISPL, and PQUERY)
..Traces ISPF processing of panel statements in )ABCINIT, ABCPROC,
)INIT, REINIT, and )PROC sections of a panel
..Trace output written to dynamically allocated variable blocked data set
..Documented in Appendix C of the ISPF Dialog Developer’s Guide
..Trace started and stopped using TSO ISPDPTRC command

Support added (z/OS 1.7) to the ISPF Dialog Manager to trace the Panel Service calls (DISPLAY,
TBDISPL, and PQUERY) and the processing that occurs within the Dialog Manager Panel code,
including the processing of the each statements within the )ABCINIT, ABCPROC, )INIT, REINIT,
and )PROC sections of the panel.
The trace is started and stopped using the new ISPDPTRC command that will either
•start the trace if not active, or
•stop and optionally view or edit the trace output where the trace is active.
The output from the trace is written to a dynamically allocated variable blocked data set that has a
record length of 255. If the ddname ISPDPTRC is preallocated this data set will be used, provided
it refers to a sequential, variable blocked data set with a record length that is at least 255.
A new appendix in the ISPF User’s Guide Volume I describes the new ISPDPTRC command and
the contents of the panel trace.

File Tailoring Trace
..Provides debugging capability for ISPF File Tailoring applications
..Traces the File Tailoring service calls (FTOPEN, FTINCL, FTCLOSE,
and FTERASE)
..Traces ISPF processing of skeleton statements
..Trace output written to dynamically allocated variable blocked data set
..Documented in Appendix C of the ISPF Dialog Developer’s Guide
..Trace started and stopped using TSO ISPFTTRC command

Support added (z/OS 1.7) to ISPF File Tailoring to trace the File Tailoring Service calls (FTOPEN,
FTINCL, FTCLOSE, and FTERASE) and the processing that occurs within the File Tailoring code
and processing of each skeleton statement.
The trace is started and stopped using the new ISPFTTRC command that will either
•start the trace if not active, or
•stop and optionally view or edit the trace output where the trace is active.
The output from the trace is written to a dynamically allocated variable blocked data set that has a
record length of 255. If the ddname ISPFTTRC is preallocated this data set will be used, provided it
refers to a sequential, variable blocked data set with a record length that is at least 255.
A new appendix in the ISPF User’s Guide Volume I describes the new ISPFTTRC command and
the contents of the File Tailoring trace.

Dialog Test
..Dialog Test - ISPF option 7
..Invoke dialog functions (option 7.1)
..Display panels and/or messages (option 7.2)
..List variables (option 7.3)
..View/modify ISPF tables (option 7.4)
..Browse ISPF log (option 7.5)
..Run ISPF services (option 7.6)
..Trace Dialog service calls (option 7.7.1)
..Trace variables (option 7.7.2)
..Breakpoint services (option 7.8)

•The ISPF Dialog Test facility is found from option 7 from the ISPF primary menu
•Most people have used this at some time to display the ISPF dialog variables (option 7.3) or to browse the
Log (option 7.5)
•It has many other useful features that allow us to set breakpoints (7.8) and to enable us to define ISPF
services (7.7.1) and variables(7.7.2) to be traced.
•We can then use Option 7.1 to invoke our dialog that we want to test
•Dialog test also has options to-
•Display panels or messages (7.2),
•View and modify ISPF tables (7.4), and
•to run any of the ISPF services (7.6)

Other Debugging Tools
..ISPF command parameters
..TEST / TESTX / TRACE / TRACEX
..LIST service
..Dialog can use this to write out lines to the ISPF list data set
..LOG service
..Write message to ISPF log data set
..ENVIRON command
..TPUT/TGET trace
..Read Partition Query buffer
..Enable dump

Other ways of debugging ISPF dialogs:
•The TEST or TESTX invokes ISPF in Test mode
•panels, messages not cached
•tutorial panels show current panel ID, previous panel ID, and previous msg ID
•screen printouts show line numbers, current panel name, and message ID
•Option 3.1 index listing for PDS shows TTR for each member
•Dialog operating in CANCEL error mode (default) panel displayed on an error allows user to force the dialog to continue
•ISPF-detected error, ABEND, or program interrupt of SELECTed command causes ISPF to ABEND
•PA1 causes immediate exit from ISPF
•With TRACE or TRACEX all ISPF service calls are logged
•in both cases the X is an extended mode that displays all logged messages on the terminal.
•The ISPF LIST service allows a dialog to write information to the ISPF LIST data set,
and the ISPF LOG service write information to the ISPF LOG.
•The ENVIRON command traces
•all terminal input and output data done by the TSO TPUT, TGET, and PUTLINE services
•NOTE: ISPSNAP or other dd as specified has DCB: VBA lrecl=125, blksize=1632 - This is a snap
restriction
•Query terminal characteristics
•Can enable a dump for a subtask abendISRDDN…
.. Special pseudo-ddnames
.. APF
.. LPA
.. PARMLIB
.. Enqueues & enq contention
.. ENQ
.. CON
.. Browsing storage & loaded
modules
.. LOAD modname
.. WHERE modname
.. BROWSE modname [+offset]
.. DISASM
.. Primary commands
.. Data set commands
• FIND string
• RFIND
• LOCATE ddstring
• ONLY ddstring
• EXCLUDE ddstring
• RESET
• SHORT or LONG
• MEMBER name [ddstring]
• SELECT modname
• COUNT [ddstring]
• CLIST [ddstring]
• SAVE [ddstring]
• DUPLICATES [ddstring]
• MLIST
• CUSTOM

•There are a number of Primary commands supported by ISRDDN - some fairly standard ones in Find, Repeat Find, Locate, etc.
•Some of the other more useful commands are:
•Member - Scans the allocated ddnames for a particular member. (Search of ddnames can be restricted by specifying a ddstring parameter -
ddstring can be any part of the ddname)
•Select - Search for loaded modules with out searching any allocated data sets. It searches the JPA (Job Pack Area) and LPA (Link Pack
Area)
•CList and SAve commands create a CLIST which contains ALLOCATE statements for all the current data set allocations
•DUPlicate - scans all ddnames in the current list and alto the Link Pack Directory for duplicate members
•MList - shows the eyecatchers for some major ISPF and PDF programs
•CUstom - shows the ISPF DEFAULTS and TCM settings and the TSO IKJTSOxx settings
•APF, LPA and Parmlib will add to the displayed list an entry showing the APF, LPA of PARMLIB data sets
•For the purposes of debugging the LOAD, WHERE and Browse commands are very useful
•The browse command has a number of additional subcommands for viewing storage
•These are documented in the ISPF User's Guide Volume 1 (SC34-4822)
For speaker - other descriptions if required -
•FIND - Finds 'string' in the current displayed list
•RFIND - Repeats the last find command
•LOCATE - Locates next ddname containing 'ddstring'
•ONLY - Display ddnames containing ONLY 'ddstring'
•EXCLUDE - Exclude all ddnames containing 'ddstring'
•RESET - Rebuild the displayed list (REFRESH)
•SHORT and LONG - Alter the format of the list. Short places the ddname for a concatenation on the same line; long places it on a separate line
•COUNT - Count the number of members in each Partitioned Data Set
•ENQ - Display data set Enqueues
•CON - Display data set Enqueue Contentioncut newone nx append
   example of copying a range of non excluded data and append to the newone clip

cut display 
to show the set of 1-10 clipboards

cut 
without a set of line range copied the entire ds
   
 The CUT command is used to move or copy one or more lines of data from the     
 current edit or view session into a clipboard for later retrieval by the PASTE 
 command.                                                                       
                                                                                
 To specify the lines to be put into the clipboard, use:                        
   o   line commands C or CC to copy line(s).                                   
   o   line commands M or MM to move line(s). (copy, then delete)               
   o   a range of line labels to copy line(s), for example: CUT .ZF .ZL         
 If no range is specified, all edit session data is copied to the clipboard.    
                                                                                
 You can use the X or NX operands to copy only excluded or non-excluded data    
 within the range to the clipboard.                                             
                                                                                
 Use the REPLACE operand to replace the contents of the clipboard.              
                                                                                
 Use the APPEND operand to add to the existing contents of the clipboard.       
                                                                                
 Use the ASCII or UTF8 or EBCDIC operand to convert the data to be stored in    
 the clipboard.                                                                 
                                                                                
 Use the EDSET primary command to establish defaults for the CUT and PASTE      
 operations.                                                                    
                                                                                
 Use the X or NX operand to copy only excluded or unexcluded lines to the       
 clipboard.                                                                     
                                                                                
 The ISPF default clipboard is used unless a clipboard name is specified on the 
 command.                                                                       
                                                                                
 The DISPLAY keyword will display the existing clipboards and allow you to      
 rename them or browse their contents. When DISPLAY is specified, other CUT     
 operands are not allowed. 

#####

PASTE

 Tutorial ---------------- Edit/View - 'PASTE' Command --------------- Tutorial 
 Command ===>                                                                   
                                                                                
 The PASTE command is used to copy lines from a clipboard into the current edit 
 or view session.                                                               
                                                                                
 If lines in the clipboard are longer than the record length of the data set    
 being edited, the lines are truncated automatically.                           
                                                                                
 Use the A or B line commands or AFTER or BEFORE with a label to specify the    
 destination of the lines.                                                      
                                                                                
 If you specified a name a the clipboard with the CUT command, you must use     
 that name on the PASTE command to retrieve the contents of that clipboard.     
                                                                                
 Use the DELETE keyword to empty the clipboard after the PASTE completes.       
                                                                                
 Use the KEEP keyword to copy the lines from the clipboard instead of move      
 them.                                                                          
                                                                                
 Use the EDSET primary command to establish defaults for the CUT and PASTE      
 operations.                                                                    
                                                                                
 If the contents of the clipboard are using a different character set to that   
 of the edit session, the contents will be automatically converted to the       
 character set of the edit session on retrieval. Use the ASIS keyword to        
 prevent the data conversion.                                                   
                                                                                C:\MyDoc\Host\a_ispf_edit_cmds.txt
										Edit Primary Commands
										CHANGE string1 string2	Changes first occurrence of string1 with string2. CHANGE can also be used as C
										CHANGE ALL string1 string2	Changes all occurrences of string1 with string2
										CHANGES LAST string1 string2	Changes string1 with string2, starting at the bottom of the data and searching backward to find the last occurrence of string1
										CHANGE PREV string1 string2	Changes string1 with string2, starting at the current cursor location and searching backward to find the previous occurrence of string1
										CHANGE NEXT string1 string2	Changes string1 with string2, starting at the first position after the current cursor location and searching ahead to find the next occurrence of string1
										CHANGE PREFIX string1 string2	Changes string1 with string2, locating string1 at the beginning of a word
										CHANGE SUFFIX string1 string2	Changes string1 with string2, locating string1 at the end of a word
										CHANGE WORD string1 string2	Changes string1 with string2 providing string1 is a word
										CHANGE X string1 string2	Changes string1 with string2 scanning only the lines that are excluded from the display
										CHANGE NX string1 string2	Changes string1 with string2 scanning only the lines that are not excluded from the display
										C string1 string2 col1 col2	Changes string1 with string2 between column 1 and column 2
										COPY data	Copies a sequential data set, a member of a partitioned data set, or a z/OS UNIX file into the data being edited
										COPY data AFTER label	Copies data after the line with the specified label
										COPY data BEFORE label	Copies data before the line with the specified label
										CREATE data	Creates a member of a partitioned data set, a sequential data set, or z/OS UNIX file from the data you are editing. Use CREATE or CRE.
										CREATE data label1 label2	Creates a member, dataset or UNIX file. Label1 and label2 identify the start and end of the group of lines which are added to the new member.
										CREATE data .zf .zl	Creates a member, dataset or UNIX file of the entire member being edited. .ZF sets a label for the first line and .ZF for the last line.
										DEL ALL	Deletes all the lines from the data you are editing
										DEL X	Deletes all the lines that are excluded
										DEL NX	Deletes all the lines that are not excluded
										DEL label1 label2	Deletes the group of lines defined from label1 up to label2
										EDIT member	Edits another sequential data set, partitioned data set member, or z/OS UNIX file during your current edit session
										EXCLUDE ALL	Hides from view all the lines of the member being edited and replaces them with a dashed line. Use EXCLUDE or X
										EXCLUDE string	Hides from view the first line that contain a search string
										EXCLUDE string ALL	Hides from view all the lines that contain the search string
										EXCLUDE string PREV	Hides from view the line that contains the search string before the cursor
										EXCLUDE string NEXT	Hides from view the line that contains the search string after the cursor
										EXCLUDE string PREFIX	Hides from view the line that contains the search string as a prefix from a word
										EXCLUDE string SUFFIX	Hides from view the line that contains the search string as a suffix from a word
										EXCLUDE string WORD	Hides from view the line that contains the search string as an all word
										EXCLUDE string col1 col2	Hides from view the line that contains the search string between col1 and col2
										FIND string
										Finds the specified string (ex: F REVIEW). F can be used instead of FIND.
										FIND string NEXT 	Finds the next occurrence of the string in regards to where the cursor is positioned
										FIND string PREV	Finds the previous occurrence of the string in regards to where the cursor is positioned
										FIND string FIRST 	Finds the first occurrence of the string
										FIND string LAST	Finds the last occurrence of the string
										FIND string ALL	Finds all the occurrences of the string
										FIND string SUFFIX 	Finds the string as a suffix of a word
										FIND string PREFIX 	Finds the string as a prefix of a word
										FIND string WORD	Finds the string as a all word
										FIND string col1 col2	Finds the string between column 1 and column 2 (ex: F HELLO 20 40)
										.LABEL	Defines a label on a line (ex: .HERE)
										LOCATE line	Locates line number n (ex: L 20, LOC 20, LOCATE 20)
										LOCATE label	Locates the line with the specified label
										MOVE data	Moves a sequential data set, member of a partitioned data set, or z/OS UNIX file into the data being edited
										MOVE data AFTER label	Moves data after the line with the specified label
										MOVE data BEFORE label	Moves data after the line with the specified label
										REPLACE data	Replaces a sequential data set, member of a partitioned data set, or z/OS UNIX file with data you are editing. If the member , or z/OS UNIX file you want to replace does not exist, the editor creates it. User REPLACE or REP.
										REPLACE data label1 label2	Label1 and label2 identify the start and end of the group of lines to replace the member or data set
										RESET	Removes the messages that appear in the editing area. Use RESET or RES.
										SAVE 	Saves all the changes made
										SORT	Sorts ascending all the data in the member being edited
										SORT A	Same as SORT
										SORT D	Sorts descending all the data in the member being edited
										SORT X	Sorts only the lines that are excluded
										SORT NX	Sorts only the lines that are not excluded
										SORT col1 col2	Sorts data by the content from col1 to col2
										Edit Line Commands
										UC	Changes the text on the line from lower case to upper case
										UCn	Changes the text on the ‘n’ lines starting at this one to upper case
										LC	Changes the text of the line from upper case to lower case
										LCn	Changes the text on the ‘n’ lines starting at this one to lower case
										C	Copies the content of the line
										Cn	Copies the content of the line ‘n’ times
										CC	Copies the block of lines starting with the first CC command and ending with the second CC command
										M	Moves the content of the line
										Mn	Moves the content of n lines starting at this one
										MM	Moves the block of lines starting with the first MM command and ending with the second MM command
										A	Places the copied/moved lines after this line
										An	Repeats the copied/moved lines n times after this line
										B 	Places the copied/moved lines before this line
										Bn	Repeats the copied/moved lines n times before this line
										D	Deletes the line
										Dn	Deletes n lines starting at this line
										DD	Deletes the block of lines starting with the first DD command and ending with the second DD command
										X	Excludes this line
										Xn 	Excludes n lines starting at this line
										XX	Excludes the block of lines starting with the first XX command and ending with the second XX command
										R	Repeats this line
										Rn	Repeats n lines starting at this one
										RR	Repeats the block of lines starting with the first RR command and ending with the second RR command
										RRn	Repeats the block of lines starting with the first RR command and ending with the second RR command ‘n’ times
										O	Overlays line content with copied/moved line
										On	Overlays ‘n’ lines starting at this one with copied/moved lines
										OO	Overlays the block of lines starting with the first OO command and ending with the second OO command with copied/moved lines
										S	Shows one line of the excluded text
										Sn	Shows n lines of the excluded text
										F	Shows the first line of the excluded text
										Fn	Shows the first n lines of the excluded text
										L	Shows the last line of the excluded text
										Ln	Shows the last n lines of the excluded text
										I	Insert one line after this line
										In	Insert n lines after this line
										(	Shifts the line left 2 columns
										(n	Shifts the line left n columns
										(( 	Shifts the block of lines starting with the first (( command and ending with the second (( command 2 columns to the left
										((n	Shifts the block of lines starting with the first (( command and ending with the second (( command ‘n’ columns to the left
										)	Shifts the line right 2 columns
										)n 	Shifts the line right ‘n’ columns
										))	Shifts the block of lines starting with the first )) command and ending with the second )) command 2 columns to the right
										))n	Shifts the block of lines starting with the first )) command and ending with the second )) command ‘n’ columns to the right
										<	Data shifts the line left 2 columns
										<n	Data shifts the line left n columns
										<< 	Data shifts the block of lines starting with the first << command and ending with the second << command 2 columns to the left
										<<n	Data shifts the block of lines starting with the first << command and ending with the second << command ‘n’ columns to the left
										>	Data shifts the line right 2 columns
										>n 	Data shifts the line right ‘n’ columns
										>>	Data shifts the block of lines starting with the first >> command and ending with the second >> command 2 columns to the right
										>>n	Data shifts the block of lines starting with the first >> command and ending with the second >> command ‘n’ columns to the right
										COLS	Displays a ruler with individual columns marked
										MASK	The MASK line command displays the =MASK> line. On this line, you can type characters that you want to insert into an unformatted data set or member. These characters, which are called the mask, are inserted whenever you use the I (insert), TE (text entry), or TS (text split) line commands, or when you edit an empty data set.
										BNDS	The BOUNDS (BNDS) line command displays the boundary definition line
										TABS	When you type TABS in the line command field, =TABS> is displayed along with any previously defined tab positions.
										MD	The MD (make dataline) line command converts ==MSG>, =NOTE=, =COLS>, or ======(information) lines to data so they can be saved as part of your data set.
										MDn	Converts ‘n’ number of lines
										TE	The TE (text entry) line command provides one very long line wrapped around many lines of the display to allow power typing for text entry. The editor does the formatting for you.
										TEn	Applies the TE to ‘n’ lines starting at this line
										TS	Splits the text line at the cursor
										TSn	Splits the text line at the cursor and inserts ‘n’ lines
										TF	Flows the text to the end of paragraph which is either a blank line or an indentation
										TFn	Flows the text using the column number ‘n’ as the right margin
										Edit Profile
										AUTOSAVE ON	Automatically save changes when using the PF3 key
										AUTOSAVE OFF	Turns this feature off
										AUTOLIST ON	Generates a source listing in the ISPF list data set for eventual printing when you end an edit session in which you changed and saved data
										AUTOLIST OFF	Turns this feature off
										BOUNDS col1 col2	Sets the left and right boundaries and saves them in the edit profile. Use BOUNDS or BND.
										CANCEL	Cancels (ignores) all the changes and exit. The changes are not saved. Use command CANCEL or CAN
										HILITE ON	Sets program colouring on
										HILITE OFF	Turns this feature off
										HILITE AUTO	Allows ISPF to determine the language
										HILITE ASM	Highlights the data as Assembler
										HILITE C	Highlights the data as C
										HILITE COBOL	Highlights the data as Cobol
										HILITE HTML	Highlights the data as HTML
										HILITE JCL	Highlights the data as Job Control Language (JCL)
										HILITE PANEL	Highlights the data as ISPF Panel Language
										HILITE PASCAL	Highlights the data as Pascal
										HILITE PLI	Highlights the data as PL/I
										HILITE REXX	Highlights the data as Rexx
										HILITE SKEL	Highlights the data as ISPF Skeleton Language
										HILITE SUPERC	Highlights the data as SuperC listing
										HILITE XML	Highlights the data as XML
										PACK ON	Saves data in packed format
										PACK OFF	Turns this feature off
										TABS ON	Turns tabs mode on, which means that logical tabs can be used to break up strings of data. This is the default operand.
										TABS OFF	Turns this feature off
										PROFILE	Shows current profile settings. Can use PROFILE or PROF
										PROFILE profilename	Switches to a different profile or creates a new profile
										PROFILE LOCK	Saves the changes made to the edit profile
										STATS ON	Keeps automatic statistics
										STATS OFF	Turns this feature off
										Edit Sequence Numbering
										AUTONUM ON	Resequences line numbers when saved
										AUTONUM OFF	Turns this feature off
										NUMBER ON
										Turns line numbering on
										NUMBER OFF
										Turns this feature off.
										NUMBER STD
										Sets number on STD
										NUMBER COBOL
										Sets number on COBOL
										NUMBER STD COBOL
										Sets number on STD and COBOL
										RENUM 	Renumbers the lines starting at 100 and incrementing by 100. RENUM also sets NUMBER ON.
										RENUM STD 	Sets number on STD
										RENUM COBOL	Sets number on COBOL
										RENUM STD COBOL	Sets number on STD and COBOL
										UNNUM	Turns off number mode and replaces the line numbers with blanks
										Edit Display Modes
										CAPS ON	Automatically converts all lowercased entered into upper case
										CAPS OFF	Turns this feature off
										HEX ON	Turns Hexadecimal display ON
										HEX OFF	Turns this feature off
										NULLS ON	Trailing blanks are sent to the screen as null characters
										NULLS OFF	Turns this feature off
										Edit Automatic Recovery
										RECOVERY ON	Keeps a record of all the changes made during the editing session. Can use RECOVERY or REC
										RECOVERY OFF	Turns this feature off
UNDO	Undoes the last modification done (for this to work RECOVERY must be ON)C:\MyDoc\Host\a_jcl_jesmsglg_spin.txt

SPIN DD parameter

SPIN= {NO }
{UNALLOC }
{(UNALLOC,’hh:mm’) }
{(UNALLOC,’+hh:mm’) }
{(UNALLOC,nnn [K|M])}
{(UNALLOC,NOCMND) }
{(UNALLOC,CMNDONLY) }
Note: UNALLOC is supported on JES2 only.
Subparameter definition
NO Indicates that the system makes the sysout data set available for processing as
a part of the output at the end of the job, regardless of when the data set is
unallocated.
UNALLOC
JES2 only. Indicates that the system makes the data set available for processing
immediately when the data set is unallocated. If you dynamically unallocate
the sysout data set, either explicitly or by specifying FREE=CLOSE, the system
makes the data set available for processing immediately. If you do not
dynamically unallocate it, the sysout data set is unallocated at the end of the
step, and the system will make it available for processing then.
(UNALLOC,'hh:mm')
JES2 only. Indicates that the data set is to be spun at time 'hh:mm' each 24
hour period. hh is hours and has a range of 00 through 23. mm is minutes and
has a range of 00 through 59. Note that the time must be specified within
apostrophes.
(UNALLOC,'+hh:mm')
JES2 only. Indicates that the data set is to be spun every hh:mm' time interval,
where hh is hours and has a range of 00-23 and mm is minutes and has a
range of 00-59. The minimum interval that can be specified is 10 minutes
(mm). Hours hh must be specified even if zero. For example,
DD: SPIN
Chapter 12. DD statement 273
SPIN=(UNALLOC,'+00:20') specifies that the data set be spun at 20 minute
intervals. Note that the time interval must be specified within apostrophe
characters.
(UNALLOC,nnn[K|M])
JES2 only. Indicates that the data set is to be spun when it has the specified
number of lines, where nnn is lines. A minimum of 500 lines must be specified.
Specify the optional characters K for thousands of lines and M for millions of
lines.
(UNALLOC,NOCMND)
JES2 only. Indicates that the data set cannot be spun before it is unallocated.
(UNALLOC,CMNDONLY)
JES2 only. Indicates data set is only to be spun when an operator issues a
command to spin the data set.

#####


JESLOG parameter used to specify whether the JESLOG (JESMSGLG and JESYSMSG) data sets should be spin-eligible.

JESLOG parameter is optional.

User can specify if they are automatically spun eligible at a particular time or interval.

Syntax:

JESLOG= {SPIN,'hh:mm'}
        {SPIN,'+hh:mm'}
        {SPIN,nnn}
        {SPIN,nnnK}
        {SPIN,nnnM}
        {NOSPIN}
        {SUPPRESS}


SPIN,'hh:mm' 	JESLOG is spun at hh hours and mm minutes.

hh is hours value has a range of 00 through 23.

mm is minutes value has a range of 00 through 59.
SPIN,'+hh:mm' 	JESLOG is spun for every hh hours and mm minutes.

hh is hours value has a range of 00 through 23.

mm is minutes value has a range of 00 through 59.
JESLOG=(SPIN,nnn)
JESLOG=(SPIN,nnnK)
JESLOG=(SPIN,nnnM) 	JESLOG is spun when dataset has n lines.

K is thousands.

M is Millions.

A minimum of 500 lines must be specified.
NOSPIN 	JESLOG will not be spun.
SUPPRESS 	JESLOG will be suppressed.

Default and overrides:

If no JESLOG parameter is specified, the default value is NOSPIN.

Example 1:

//MTHEXMP1 JOB (META007),'PAWAN Y', JESLOG=(SPIN,'+09:00')


The JESLOG parameter requests that JESLOG be spun every 9 hours.

Example 2:

//MTHEXMP1 JOB (META007),'PAWAN Y', JESLOG=(SPIN,900K)


The JESLOG parameter requests that JESLOG be spun every 900,000 lines.C:\MyDoc\Host\a_jcl_parm_continuation.txt

see:TTED.TSK.P.TCEM.CNTL(EXDSPPRM)

Length: The length of the subparameters passed must not exceed 100 characters:

    Including any commas, which are passed to the processing program.
    Excluding any enclosing parentheses or apostrophes, which are not passed.

For example, PARM='P1,123,MT5' is received by the program as P1,123,MT5.

Commas: When you code more than one subparameter, separate the subparameters by commas and enclose the subparameters in parentheses or apostrophes. For example, PARM=(P1,123,MT5) or PARM='P1,123,MT5'.

Special characters and blanks: When a subparameter contains special characters or blanks, enclose it in apostrophes and the other subparameters in parentheses, or enclose all the subparameters in apostrophes. For example, PARM=(P50,'12+80') or PARM='P50,12+80'.

Code each apostrophe and ampersand that is part of the subparameter as two consecutive apostrophes or ampersands. For example, code 3462&5 as PARM='3462&&5'.

However, if a subparameter contains a symbolic parameter, code a single ampersand. You can code the symbolic parameter in apostrophes.
Continuation onto another statement: Enclose the subparameters in parentheses. End each statement with a comma after a subparameter. For example:

//STEP1  EXEC    PGM=WORK,PARM=(DECK,LIST,'LINECNT=80',
//    '12+80',NOMAP)

Do not code an apostrophe in column 71; see Continuing parameter fields enclosed in apostrophes if you need more information.

To continue a parameter that is enclosed in apostrophes:

    Extend the parameter to column 71. Do not code an apostrophe in column 71 of a JCL statement that is continued. The system interprets the apostrophe in column 71 as the final character in the statement and ignores the continuation.
    Code // in columns 1 and 2 of the following statement.
    Continue the parameter in column 16 of the following statement even if this splits the parameter. Trailing blanks or commas within the apostrophes do not indicate a continued statement; the system treats them as part of the parameter.

The following example shows the specification of a long file name in the PARM field:

//STEP1 EXEC                         PGM=IEFBR14,PARM=(PARM1,'/DIR1/DIR2 
//              /DIR3/DIR4/DIR5/DIR6/DIR7/DIR8/DIR9/DIR10/DIR11/DIR12/DI 
//              R13/FILENM') 

the PARM field of the EXEC statement and must adhere to the rules for JCL statements. Keep in mind that:

    Commas cannot be used within the PARM value unless it is enclosed in parentheses or single quotation marks.
    Blanks and equal signs cannot be used within the value unless they are within a string enclosed in quotation marks.
    Nested parentheses are allowed only as complete subparameters separated by commas within a parenthesized value.
	
When commas or blanks are required to specify more than one parameter value, the PARM string must be enclosed in either single quotation marks or parentheses if multiple options are being passed to the program.

Because parentheses or an equal sign must be adjacent to an option name to specify an option value, single quotation marks must be used if options with values are being passed to the program.

One approach to these restrictions is to enclose the entire PARM= string in single quotation marks. If this is done, the following additional JCL rules must be honored:

    Any single quotation marks within the string (such as the quotation marks typically needed for the PATH parameter) must be doubled.
    If the string is continued beyond the initial JCL record, provide data through column 71 to ensure that there is not a single quotation mark in that column. Next, continue the string in column 16 of the next record (with // in columns 1 and 2 and blanks in column 3 through 15).

	

JCl Parm on EXEC - continuation - Special Rules:

Another approach to these restrictions is to enclose the entire PARM= string in parentheses and separate the options by commas with no intervening blanks. Individual options requiring an equal sign or parentheses are then enclosed in single quotation marks, which the binder will remove. Using this approach, the additional JCL rules are:

    If the string is continued beyond the initial JCL record, it can be broken after any comma at or before column 71 and continued in any column from 4 through 16 of the next record (with // in columns 1 and 2).
    If the break must occur within a quoted string, the same rule listed above must be followed, data through column 71 with continuation in column 16.

Figure 1. Example of special rules for JCL EXEC statements

             16?                              71?
//BIND   EXEC PGM=IEWL,
//             PARM='linect=55,list(all),map,xref,options=optndd,wkspa
//             ce=(400,10000)'

Figure 2. Example of special rules for JCL EXEC statements

             16?                              71?
//BIND   EXEC PGM=IEWL,
//             PARM=('linect=55','list(all)',map,xref,
//         'options=optndd','wkspace=(400,10000)')



#####

//STEP1   EXEC PGM=IEBCOPY,PARMDD=PARMIN
//PARMIN  DD   *,DLM=/*
LINECOUNT=75
/*                          

In the example, the PARMDD keyword specifies a DD name of PARMIN, which is then coded on a DD statement that specifies a SYSIN (or in-stream) data set. The DD DATA usage would be similar.
Example 2

//STEP1   EXEC PGM=MYPGM,PARMDD=MYPARMS
//MYPARMS DD   DSN=SYS1.PARMLIB(MYPGMPRM)

In the example, the PARMDD keyword specifies a DD name of MYPARMS, which is then coded on a DD statement that specifies a data set (in this case, a partitioned data set member) that contains the program's parameter information.
Example 3

//STEP1   EXEC PGM=MYPGM,PARMDD=MYPARMS
//MYPARMS DD   PATH=/SYSTEM/tmp/unixparm.txt

In the example, the PARMDD keyword specifies a DD name of MYPARMS, which is then coded on a DD statement that specifies a UNIX System Service file that contains the program's parameter information.


#####

    __________________________________________________________________________________
   |                                                                                  |
   | //JOB1      JOB  accounting information,REGION=nnnnK                             |
   | //STEP1     EXEC PGM=ADRDSSU                                                     |
   | //TAPE      DD   UNIT=3480,VOL=TAPE01,                                           |
   | //  LABEL=(1,SL),DISP=(NEW,CATLG),DSNAME=USER2.BACKUP                            |
   | //SYSPRINT  DD   SYSOUT=A                                                        |
   | //SYSIN     DD   *                                                               |
   |  DUMP DATASET(INCL(USER2.OLDDS))  -                                              |
   |       OUTDD(TAPE)                                                                |
   | /*                                                                               |
   |                                                                                  |
   |                                                                                  |
   | //JOB2      JOB  accounting information,REGION=nnnnK                             |
   | //STEP1     EXEC PGM=ADRDSSU                                                     |
   | //SYSPRINT  DD   SYSOUT=A                                                        |
   | //TAPE      DD   UNIT=3480,VOL=TAPE01,                                           |
   | //  LABEL=(1,SL),DISP=(OLD,KEEP),DSNAME=USER2.BACKUP                             |
   | //DASD      DD   UNIT=3380,VOL=(PRIVATE,SER=222222),DISP=OLD                     |
   | //SYSIN     DD   *                                                               |
   |  RESTORE DATASET(   -                                                            |
   |    INCLUDE(USER2.OLDDS) )  -                                                     |
   |    INDDNAME(TAPE)  -                                                             |
   |    OUTDDNAME(DASD)  -                                                            |
   |    RENAME(*.OLDDS,*.NEWDS)                                                       |
   | /*                                                                               |
   |                                                                                  |
   |__________________________________________________________________________________|




In the first part of example 3, DFSMSdss dumps a cataloged data set (USER2.OLDDS) from the source volume to an IBM standard label dump tape (TAPE01). Next, DFSMSdss restores USER2.OLDDS from TAPE01 to a 3380 target volume (DASD volume 222222). The RENAME keyword is used to change the name of the data set to USER2.NEWDS.


#####

    __________________________________________________________________________________
   |                                                                                  |
   | //JOB1      JOB  accounting information,REGION=nnnnK                             |
   | //STEP1     EXEC PGM=ADRDSSU                                                     |
   | //TAPE      DD   UNIT=3480,VOL=TAPE01,                                           |
   | //  LABEL=(1,SL),DISP=(NEW,CATLG),DSNAME=USER2.BACKUP                            |
   | //SYSPRINT  DD   SYSOUT=A                                                        |
   | //SYSIN     DD   *                                                               |
   |  DUMP DATASET(INCL(USER2.OLDDS))  -                                              |
   |       OUTDD(TAPE)                                                                |
   | /*                                                                               |
   |                                                                                  |
   |                                                                                  |
   | //JOB2      JOB  accounting information,REGION=nnnnK                             |
   | //STEP1     EXEC PGM=ADRDSSU                                                     |
   | //SYSPRINT  DD   SYSOUT=A                                                        |
   | //TAPE      DD   UNIT=3480,VOL=TAPE01,                                           |
   | //  LABEL=(1,SL),DISP=(OLD,KEEP),DSNAME=USER2.BACKUP                             |
   | //DASD      DD   UNIT=3380,VOL=(PRIVATE,SER=222222),DISP=OLD                     |
   | //SYSIN     DD   *                                                               |
   |  RESTORE DATASET(   -                                                            |
   |    INCLUDE(USER2.OLDDS) )  -                                                     |
   |    INDDNAME(TAPE)  -                                                             |
   |    OUTDDNAME(DASD)  -                                                            |
   |    RENAME(*.OLDDS,*.NEWDS)                                                       |
   | /*                                                                               |
   |                                                                                  |
   |__________________________________________________________________________________|




In the first part of example 3, DFSMSdss dumps a cataloged data set (USER2.OLDDS) from the source volume to an IBM standard label dump tape (TAPE01). Next, DFSMSdss restores USER2.OLDDS from TAPE01 to a 3380 target volume (DASD volume 222222). The RENAME keyword is used to change the name of the data set to USER2.NEWDS.
Here are the steps to adding a new session to the host going to Fsys directly or through Group I to avoid the Dsys IPL issue brought up yesterday.

1.  Bring up an existing EXTRA/Attachmate session.
2. on the menu bar (on top), select FILE
3.  select NEW SESSION
4.  select IBM MAINFRAME and then hit the NEXT button
5.  select 3270 DISPLAY and then hit the NEXT button
6.  select TN3270 and then hit the NEXT button
7.  on the HOST alias /IP address screen, select ADD
8.  for the HOST alias /IP address enter: WDCGRP1.SNA.CIGNA.COM or FSYSTCP1.SYS.CIGNA.COM
9.  say OK
10.  hit the NEXT button
11.  enter the download type if you want one and then hit the FINISH button
12. say OK

I have attached the sessions I created, but I am not sure if you will be able to use them, or if you need to create your own.  [if you want, you could try to save these to your c:\program files\e!pc\sessions\   and try using them from there.]
Failure to fully protect all the Authorized Program Facility (APF) libraries on the system is an example of a system configuration/security system controls vulnerability. These APF libraries are defined in the Operating System Parameter Library. Authorized programs within them are marked with an “AC(1)” linkage editor attribute. For example, a program marked AC(1) residing in an APF authorized library can issue the MODESET KEY=ZERO Assembly language macro and obtain control in PSW Key Zero.

PSW Key Zero lets a program modify any storage in the system. This might legitimately be used to modify control block parameters to adjust the way the system or a vendor-supplied subsystem operates. It might also be illegitimately used to modify the user’s security credentials to make the user appear as a different and more privileged user or entity. In this way, the program could access and modify any data without any indication or journaling. Even the most diligent installation security staff won’t notice an issue or be able to reconstruct what happened to cause a breach to occur under these circumstances.

There may be hundreds of APF authorized libraries on any system. What controls are there on each of them? Who can update them? When a new one is added, is it reviewed to ensure no additional AC(1) modules were placed in it? Who reviews the security system logs to ensure that no illegitimate updates were allowed to occur in the libraries? What security system controls are in place over the operator command that dynamically adds these libraries?

A vulnerability introduced by a poorly designed or coded authorized interface in z/OS, a vendor product, or a homegrown program or service can be exploited to gain the same level of control as an authorized program. That means the exploitation can then be used to alter the identity of the current user and gain access to and possibly modify sensitive or critical data without event logging.

         Punch ' MODE RMODE(SPLIT)'
         Print NoGen
         SYSSTATE AMODE64=YES,ARCHLVL=2
* This OPSYN renames BAS to BRAS to keep OPEN and CLOSE happy
         BAS Opsyn BRAS
 Entry Csect Start of RMODE 24 area (data)
 Entry Amode 64
 Entry Rmode 24
        STMG R14,R12,8(R13) Save caller's registers
        LARL R14,SaveArea Get save area address
        MVC 4(4,R13),=C'F4SA'-SaveArea(R14)
        STG R13,128(,R14) Chain to previous save area
        STG R14,136(,R13) Chain to next save area
        LGR R13,R14 Get new save area address
        Using (SaveArea,EntryEnd),R13 Tell the assembler
        MVC SaveArea+4(4),=C'F4SA' Indicate format 4
        LLGT R15,=A(Main) Get address of RMODE 31 area
        BR R15 and go to it

SaveArea Dc 18FD'0'
Origin Dc AD(0) Starting address of file storage
High Dc AD(0) Ending address of file storage
DcbIn DCB DDNAME=SYSUT1,DSORG=PS,MACRF=(GL),
        RECFM=FB,LRECL=1000,DCBE=DcbeIn
DcbeIn DCBE RMODE31=BUFF,EODAD=Eof
DcbOut DCB DDNAME=SYSUT1,DSORG=PS,MACRF=(PL),
         RECFM=FB,LRECL=1000,DCBE=DcbeOut
DcbeOut DCBE RMODE31=BUFF
         IARV64 MF=(L,Iarv64) IARV64 parameter area
         Ltorg Dump RMODE 24 literals here
 EntryEnd ds 0d End of RMODE 24 section
         YREGS
         Print Gen
Main Rsect Start of RMODE 31 area (program)
Main Amode 64
Main Rmode 31
        LARL R12,Static Get static data area address
        Using (Static,MainEnd),R12 Tell the assembler
        SGR R2,R2 Clear record counter
        
        IARV64 REQUEST=GETSTOR, Allocate 1 megabyte,
        SEGMENTS=AD(MaxSize), but reserve much
        GUARDLOC=HIGH, more in case the file
        GUARDSIZE=A(MaxSize-1), is very large
        ORIGIN=Origin,
        MF=(E,Iarv64,COMPLETE)
        LG R4,Origin Get starting address
        LGR R0,R4 Compute ending address
        AGF R0,=A(1024*1024) *
        STG R0,High *
        SAM31 Switch to AMODE 31
        OPEN (DcbIn,(INPUT)),MODE=31 Open the data set
GetLoop ds 0h
        SAM31 Switch to AMODE 31
        LA R1,DcbIn Get DCB address
        GET (1) Read next record
        SAM64 Switch to AMODE 64
        LAY R0,RecordLength(,R4) Get address of next slot
        CLG R0,High Room for this record?
        JNH MoveIt yes: jump      
        
        LR R3,R1 Save R1
        IARV64 REQUEST=CHANGEGUARD, Allocate another
        CONVERT=FROMGUARD, Megabyte of storage
        CONVERTSIZE==F'1',
        MEMOBJSTART=Origin,
        MF=(E,Iarv64,COMPLETE)
        LR R1,R3 Restore R1
        LG R0,High Update the high storage address
        AGF R0,=A(1024*1024) to indicate it is
        STG R0,High 1 Megabyte larger
MoveIt ds 0h
        LLGTR R0,R1 Convert to 64-bit address
        LGHI R1,RecordLength Copy record from buffer
        LGHI R5,RecordLength *
MoveIn MVCLE R4,R0,0 *
        BRC 1,MoveIn *
        AGHI R2,1 Increment record count
        J GetLoop Go read next record
Eof ds 0h Go here upon End Of File
        CLOSE (DcbIn),MODE=31 Close the data set
        CGHI R2,1 At least 2 records?
        JNH Done no: jump   
        
        OPEN (DcbOut,(OUTPUT)),MODE=31 Open data set
PutLoop ds 0h
        SAM31 Switch to AMODE 31
        LA R1,DcbOut Get DCB address
        PUT (1) Get location of next record
        SAM64 Switch to AMODE 64
        LLGTR R0,R1 Convert to 64-bit address
        LAY R4,-RecordLength(,R4) Get address of record
        LGHI R1,RecordLength Copy record to buffer
        LGHI R5,RecordLength *
MoveOut MVCLE R0,R4,0 *
        BRC 1,MoveOut *
        LAY R4,-RecordLength(,R4) Get address of record
        BRCTG R2,PutLoop Go write next record
        SAM31 Switch to AMODE 31
        CLOSE (DcbOut),MODE=31 Close the data set      
        
Done ds 0h
        SAM64 Switch to AMODE 64
        IARV64 REQUEST=DETACH, Free the file storage
        MEMOBJSTART=Origin,
        MF=(E,Iarv64,COMPLETE)
        LGHI R15,0 Set return code zero
        LG R13,128(,R13) Restore caller's R13
        LG R14,8(,R13) Restore caller's R14
        LMG R0,R12,24(R13) Restore caller's R0-R12
        BR R14 Return to caller
Static Ltorg Dump RMODE 31 literals here
MainEnd ds 0d End of RMODE 31 section
RecordLength Equ 1000 Record size
MaxSize Equ 10*1024 Maximum file size in Megabytes
        End Entry        ***********************************************************************
*****                                                             *****
*****   This program was originally written by David Bond for     *****
*****   SHARE 99-101 session 8158.  It has been placed into       *****
*****   the public domain and thus may be freely modified and     *****
*****   redistributed with no restrictions whatsoever.            *****
*****                                                             *****
*****   THERE IS NO WARRANTY FOR THIS PROGRAM, EITHER EXPRESS     *****
*****   OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED    *****
*****   WARRENTIES OF MERCHANTABILITY AND FITNESS FOR A           *****
*****   PARTICULAR PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY    *****
*****   AND PERFORMANCE OF THS PROGRAM IS WITH YOU.  SHOULD THE   *****
*****   PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL       *****
*****   NECESSARY SERVICING, REPAIR OR CORRECTION.                *****
*****                                                             *****
***********************************************************************

***********************************************************************
*                                                                     *
* This program demonstrates the use of AMODE 64 and "above the bar"   *
* storage.  It reads a file up to 10 Gigabytes into memory.  Each     *
* record is 1000 bytes long, so the maximum number of records is      *
* more than 10,000,000.  The file is then rewritten with the records  *
* in reverse order.                                                   *
*                                                                     *
***********************************************************************

         Punch ' MODE RMODE(SPLIT)'
         Print NoGen
         SYSSTATE AMODE64=YES,ARCHLVL=2
         IHASAVER SAVER=NO,SAVF4SA=YES,SAVF5SA=NO

* This OPSYN renames BAS to BRAS to keep OPEN and CLOSE happy
BAS      Opsyn BRAS

Entry    Csect                         Start of RMODE 24 area (data)
Entry    Amode 64
Entry    Rmode 24
Prev     Using (SAVF4SA,SAVF4SA+SAVF4SA_LEN),R13
         STMG  R14,R12,Prev.SAVF4SAG64RS14 Save caller's registers
         LARL  R14,SaveArea            Get save area address
         Using (SaveArea,EntryEnd),R14 Tell the assembler
New      Using (SAVF4SA,SAVF4SA+SAVF4SA_LEN),SaveArea
         MVC   Prev.SAVF4SAID,=C'F4SA' Set format 4 indicator
         STG   R14,Prev.SAVF4SANEXT    Chain to next save area
         STG   R13,New.SAVF4SAPREV     Chain to previous save area
         LGR   R13,R14                 Get new save area address
         Drop  New,R14,Prev            Forget about R14 contents
         Using (SaveArea,EntryEnd),R13 Tell the assembler
         Using (SAVF4SA,SAVF4SA+SAVF4SA_LEN),SaveArea
         MVC   SAVF4SAID,=C'F4SA'      Set format 4 indicator
         LLGT  R15,=A(Main)            Get address of RMODE 31 area
         BR    R15                         and go to it

SaveArea Dc    18FD'0'
Origin   Dc    AD(0)                   Starting address of file storage
High     Dc    AD(0)                   Ending address of file storage

DcbIn    DCB   DDNAME=SYSUT1,DSORG=PS,MACRF=(GL),RECFM=FB,LRECL=1000,  +
               DCBE=DcbeIn
DcbeIn   DCBE  RMODE31=BUFF,EODAD=Eof

DcbOut   DCB   DDNAME=SYSUT1,DSORG=PS,MACRF=(PL),RECFM=FB,LRECL=1000,  +
               DCBE=DcbeOut
DcbeOut  DCBE  RMODE31=BUFF

         IARV64 MF=(L,Iarv64)          IARV64 parameter area

         Ltorg                         Dump RMODE 24 literals here

EntryEnd ds    0d                      End of RMODE 24 section

         YREGS ,                       Register Equates

         Print Gen
Main     Rsect                         Start of RMODE 31 area (program)
Main     Amode 64
Main     Rmode 31
         LARL  R12,Static              Get static data area address
         Using (Static,MainEnd),R12    Tell the assembler
         SGR   R2,R2                   Clear record counter

         IARV64 REQUEST=GETSTOR,       Allocate 1 megabyte,            +
               SEGMENTS==AD(MaxSize),      but reserve much more       +
               GUARDLOC=HIGH,              in case the file is         +
               GUARDSIZE==A(MaxSize-1),    very large                  +
               ORIGIN=Origin,                                          +
               MF=(E,Iarv64,COMPLETE)
         LG    R4,Origin               Get starting address
         LGR   R0,R4                   Compute ending address
         AGF   R0,=A(1024*1024)        Compute ending address
         STG   R0,High                     *

         SAM31                         Switch to AMODE 31
         OPEN  (DcbIn,(INPUT)),MODE=31 Open the data set
GetLoop  ds    0h
         SAM31                         Switch to AMODE 31
         LA    R1,DcbIn                Get DCB address
         GET   (1)                     Read next record
         SAM64                         Switch to AMODE 64
         LAY   R0,RecordLength(,R4)    Get address of next slot
         CLG   R0,High                 Room for this record?
         JNH   MoveIt                      yes: jump
         LR    R3,R1                   Save R1
         IARV64 REQUEST=CHANGEGUARD,   Allocate another Megabyte       +
               CONVERT=FROMGUARD,          of storage                  +
               CONVERTSIZE==F'1',                                      +
               MEMOBJSTART=Origin,                                     +
               MF=(E,Iarv64,COMPLETE)
         LR    R1,R3                   Restore R1
         LG    R0,High                 Update the high storage address
         AGF   R0,=A(1024*1024)            to indicate it is
         STG   R0,High                     1 Megabyte larger
MoveIt   ds    0h
         LLGTR R0,R1                   Convert to 64-bit address
         LGHI  R1,RecordLength         Copy record from QSAM buffer
         LGHI  R5,RecordLength             *
MoveIn   MVCLE R4,R0,0                     *
         BRC   1,MoveIn                    *
         AGHI  R2,1                    Increment record count
         J     GetLoop                 Go read next record

Eof      ds    0h                      Go here upon End Of File
         CLOSE (DcbIn),MODE=31         Close the data set

         CGHI  R2,1                    At least 2 records?
         JNH   Done                        no: jump
         OPEN  (DcbOut,(OUTPUT)),MODE=31 Open data set for output

PutLoop  ds    0h
         SAM31                         Switch to AMODE 31
         LA    R1,DcbOut               Get DCB address
         PUT   (1)                     Get location of next record
         SAM64                         Switch to AMODE 64
         LLGTR R0,R1                   Convert to 64-bit address
         LAY   R4,-RecordLength(,R4)   Get address of record
         LGHI  R1,RecordLength         Copy record to QSAM buffer
         LGHI  R5,RecordLength             *
MoveOut  MVCLE R0,R4,0                     *
         BRC   1,MoveOut                   *
         LAY   R4,-RecordLength(,R4)   Get address of record
         BRCTG R2,PutLoop              Go write next record

         SAM31                         Switch to AMODE 31
         CLOSE (DcbOut),MODE=31        Close the data set

Done     ds    0h
         SAM64                         Switch to AMODE 64
         IARV64 REQUEST=DETACH,        Free the file storage           +
               MEMOBJSTART=Origin,                                     +
               MF=(E,Iarv64,COMPLETE)

         LGHI  R15,0                   Set return code zero
         LG    R13,SAVF4SAPREV         Restore caller's R13
         LG    R14,SAVF4SAG64RS14      Restore caller's R14
         LMG   R0,R12,SAVF4SAG64RS0    Restore caller's R0-R12
         BR    R14                     Return to caller

Static   Ltorg                         Dump RMODE 31 literals here

MainEnd  ds    0d                      End of RMODE 31 section

RecordLength Equ 1000                  Record size
MaxSize      Equ 10*1024               Maximum file size in Megabytes

         End   Entry

--------------------------------------------------------------------------------

Archive listings by issue:
AIX Update | CICS Update | DB2 Update | MVS Update | RACF Update | TCP/SNA Update | VSAM Update


--------------------------------------------------------------------------------

Monitoring and cleaning up APF list

The problems

The following article addresses two common problems
concerning the APF list.

Problem one

It is common knowledge that the MVS APF list contains a list of
very sensitive libraries. Any module that resides in this list and has
been linked with the AC=1 attribute is authorized to issue
privileged instructions and/or system SVCs. For example, the
MODESET macro can be issued to switch from program state to
supervisor state and/or storage key zero. The usual approach to
safeguard the APF list is to examine the IEAAPFxx member
manually to make sure all listed entries are legitimate, valid, and
real physical datasets. This approach may work with a fairly short
list of APF list libraries and where the APF list is constantly being
checked manually. However, in a large installation, the APF list
will usually grow over a period of time simply because entries
originally put in the APF list for older versions of products are not
deleted when the products are removed. The result is that a lot of
entries in the APF list do not have any corresponding real datasets
on DASD. (During system initialization, NIP does not try to
locate datasets that are listed in IEAAPFxx.) Anyone that happens
to find such entries could simply create an authorized library with
a dataset name and VOLSER that match the obsolete APF list
entry. To prevent this from happening, all entries in IEAAPFxx
with obsolete datasets must be detected and deleted as quickly as
possible.

Problem two

At IPL time, MVS reads in the IEAAPFxx member, builds a
table, and stores the entry point in CVT (CVTAUTHL).
Individuals that have access to some special software monitors or
some home-grown routines can actually modify or expand this
table dynamically to create new authorized libraries. The changes
or expansions are effective immediately and no changes or log
entries are written anywhere in the system! The only way to detect
this is to compare the memory-resident APF list against the
IEAAPFxx member in SYS1.PARMLIB to see if any dynamic
changes have been made.

The solution

PWLAPF1 is an ISPF application developed to automate the
process of examining the memory-resident APF list and identify
entries that should be cleaned up to avoid possible security risks.
Optionally, it can also compare the memory-resident APF list
against a specified IEAAPFxx member to detect dynamic changes
made to the resident APF list.

The program PWLAPF1 uses ISPF table services and is invoked
by using a CLIST (also called PWLAPF1). It requires three
panels (PWLAPF10, PWLAPF20, and PWLAPF30) to be
installed in the user's ISPF panel library.

The first panel displayed is PWLAPF10. It will prompt the user to
select either an option to display the resident APF list only, or an
option to compare the resident APF list against a PARMLIB
IEAAPFxx member.

If option 2 is selected, PWLAPF20 will be displayed to prompt
the user to override the default PARMLIB dataset name, SYSP
suffix, and/or APF suffix (used for the current IPL) - the default is
SYS1.PARMLIB, IEASYS00, and IEAAPF00.

Each entry of the resident APF list is then displayed using panel
PWLAPF30, along with a status indicator. Following is a list of
the possible status indicators and the recommended actions:

o      *NOT CATLGED* - the listed DSN/VOLSER
      combination is not catalogued. The entry should either be
      properly re-catalogued or removed if no longer required.

o      *NONEXISTENT* - there is no real dataset to match the
      DSN/VOLSER combination. The entry should be removed
      immediately.

o      *DIFF. FROM CATLG* - the listed DSN/VOLSER
      (uncatalogued) combination does not match the catalog
      information. In other words, the catalog entry shows the
      dataset is residing on another volume. Determine which one is
      being used in production and delete either the catalogued
      entry or the listed entry.

o      ? - a '?' sign by itself or with any of the above indicates the
      listed entry does not match the corresponding entry in the
      specified IEAAPFxx list (used in the current IPL). The entry
      has either been modified or is a new dynamic addition. The
      program PWLAPF1 does a simple line by line comparison
      between the resident APF list and the specified IEAAPFxx
      members. Under normal circumstances there should be no
      entry flagged with the '?' sign. If an entry is dynamically
      added to the list, it will usually show up at the end of the
      display with a '?' sign. If numerous entries are flagged with
      the '?' sign, it may be because numerous entries have been
      modified or one or more entries have been deleted. In either
      case, a closer scrutiny is required to find out the exact cause. If
      this is happening too often, a slip trap may have to be set up to
      detect further changes to the resident APF list.

A quick run of this program can usually identify one or more
entries that should be examined further and/or removed
immediately, eliminating the time-consuming task of checking the
IEAAPFxx member manually. Figure 1 shows a sample display
produced by PWLAPF1.


COMMAND ===>                                               ROW 1 OF 138
    Display Resident APF Library List     94/09/14  15.:46
     Option selected = 2
     PARMLIB specified for compare = SYS1.PARMLIB
     SYSP suffix  = 00      APF suffix = 01
     APF library name                              VOLSER Status
     ============================================= ====== ====================
     SYS1.LINKLIB                                  MVSRES
     SYS1.SVCLIB                                   MVSRES
     SYS1.PROD1.LOADLIB                            MVS001 *NONEXISTENT*
     SYS1.PROD2.LOADLIB                            MVS001
     SYS1.APPL1.LOAD                               MVS001
     SYS1.APPL1.LOAD                               MVS002 *DIFF. FROM CATLG*
     SYS2.APPL2.LOAD                               MVS003
     SYS2.APPL3.AUTHLIB                            APP001 *NOT CATLGED*
     SYSX.TEMP.AUTHLIB                             TSO002 ?

Figure 1: Sample display from PWLAPF1

Source code for program PWLAPF1

         TITLE ' LIST APF LIBRARIES '
PWLAPF1  PWLINIT
* PROGRAM TO DISPLAY APF LIST.
* CAN BE CALLED FROM ISPF OR BATCH.
* WHEN CALLED FROM BATCH, OUTPUT IS WRITTEN TO DDNAME APFLIST
* WHEN CALLED FROM ISPF, OUPUT IS DISPLAYED USING ISPF TABLE SERVICES.
         LR    R7,R1                       SAVE R1
         MVI   PFLAG1,X'00'
         CALL  ISPQRY                      ISPF?
         LTR   R15,R15
         BZ    ISPF10                      YES. ISPF CALLERS
* GET BATCH OR TSO CALLERS PARM: SYSP=XX,APF=XX,PARMLIB=,O=
         LR    R1,R7               RESTORE R1
         MVC   PARMLIB(12),=C'SYS1.PARMLIB' DEFAULT PARMLIB
         MVI   OPTION,C'1'                  DEFAULT OPTION
         MVC   APFSUFX,=C'  '               DEFAULT APF SUFFIX
         MVC   SYSPSUFX,=C'  '              DEFAULT SYSP SUFFIX
         LR    R2,R1
         $#FIND REC=(R2),CHAR=('OPTION=','O=')
         LTR   R1,R1
         BZ    PARM10
         MVC   OPTION,0(1)
PARM10   DS    0H
         $#FIND REC=(R2),CHAR=('PARMLIB=','P=')
         LTR   R1,R1
         BZ    PARM20
         LR    R3,R1
         $#MOVE TO=PARMLIB,FROM=(R3),STOP=(' ',',')
PARM20   DS    0H
         $#FIND REC=(R2),CHAR=('APF=','A=')
         LTR   R1,R1
         BZ    PARM30
         MVC   APFSUFX,0(R1)
         B     PARM42
PARM30   DS    0H
         $#FIND REC=(R2),CHAR=('SYSP=','S=')
         LTR   R1,R1
         BZ    PARM40
         MVC   SYSPSUFX,0(R1)
         B     PARM42
PARM40   DS    0H
         MVC   APFSUFX(2),=C'00'
PARM42   DS    0H
         $#FIND REC=(R2),CHAR=('DEBUG=YES','D=Y')
         LTR   R1,R1
         BZ    PARM50
         OI    PFLAG1,P1DEBUG
PARM50   DS    0H
         B     ISPF90
ISPF10   DS    0H
         OI    PFLAG1,P1ISPF       INDICATE ISPF CALLER
ISPF90   DS    0H
         L     R2,CVTPTR           ADDRESS OF CVT.
         USING CVT,R2
         L     R10,CVTAUTHL        ADDRESS OF RESIDENT APF LIBRARY LIST
         DROP  R2
         TM    PFLAG1,P1ISPF
         BO    OPEN10
         OPEN  (APFLIST,OUTPUT)    OPEN BATCH OUTPUT LIST
         B     OPEN92
OPEN10   DS    0H                  ESTABLISH ISPF ENVIRONMENT
         CALL  ISPLINK,(VDEFINE,APF1,APFLIB,CHAR,L44),VL,              X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(VDEFINE,APF2,APFVOL,CHAR,L6),VL,               X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(VDEFINE,APF3,APFSTA,CHAR,L20),VL,              X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(VDEFINE,LCMD,LINECM,CHAR,L4),VL,               X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(VDEFINE,O1,OPTION,CHAR,L1),VL,                 X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(VDEFINE,PARM,PARMLIB,CHAR,L44),VL,             X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(VDEFINE,APF,APFSUFX,CHAR,L2),VL,               X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(VDEFINE,SYSP,SYSPSUFX,CHAR,L2),VL,             X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(TBERASE,APFTAB),VL,                            X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(TBCREATE,APFTAB,,NLIST1,NOWRITE),VL,           X
               MF=(E,PARMLIST)
OPEN90   DS    0H
* VGET O1, PARM, APF, SYSP
         CALL  ISPLINK,(VGET,NLIST2),VL,                               X
               MF=(E,PARMLIST)
OPEN92   DS    0H
         CLI   OPTION,C'2'                  OPTION 2(COMPARE)?
         BNE   RDAPF12                      NO.
         OI    PFLAG1,P1COMP
* CALL PWLRPDS2 TO READ IEAAPFXX OR IEASYSXX.
         MVC   PARMLIST(44),PARMLIB         DSN OF PARMLIB
         CLI   APFSUFX,C' '                 IEAAPFXX SUFFIX SPEC'D?
         BNE   RDAPF10                      YES. GO READ IEAAPFXX
         MVC   PARMLIST+44(8),IEASYSXX
RDSYS02  DS    0H
         LA    R1,PARMS
         CALL  PWLRPDS2                     READ IEASYSXX
         LTR   R15,R15
         BNZ   ERREXIT1
         USING TDSECT,R11
         LR    R11,R1
         LA    R9,TFIRST                    GET FIRST ENTRY
         L     R8,TNUMREC
RDSYS10  DS    0H
         $#FIND REC=(R9),CHAR=('APF=','APF=')
         LTR   R2,R1                        FOUND?
         BZ    RDSYS20                      NO.
         $#MOVE TO=APFSUFX,FROM=(R2),STOP=(' ',',')
         B     RDAPF10                      GO READ IEAAPFXX
RDSYS20  DS    0H
         AH    R9,TRECL                     SKIP TO NEXT ENTRY
         BCT   R8,RDSYS10
         CLC   =C'IEASYS00',PARMLIST+44     IEASYS00?
         BE    RDSYS30
         MVC   PARMLIST+44(8),=C'IEASYS00'
         B     RDSYS02
RDSYS30  DS    0H
         MVC   APFSUFX(2),=C'00'            DEFAULT TO IEAAPF00
RDAPF10  DS    0H
         MVC   PARMLIST+44(8),IEAAPFXX
         LA    R1,PARMS
         CALL  PWLRPDS2
         LTR   R15,R15
         BNZ   ERREXIT1
* ON RETURN, R1 = ADDR OF TABLE CONTAINING EITHER IEASYSXX OR IEAAPFXX
         USING TDSECT,R11
         LR    R11,R1
         LA    R9,TFIRST                    GET FIRST ENTRY
         SH    R9,TRECL
RDAPF12  DS    0H
         TM    PFLAG1,P1ISPF
         BO    RDAPF14
         MVC   APFLIB(L'MSG1),MSG1
         MVC   APFSTA(L'MSG2),MSG2
         BAL   R6,PUT
         MVC   APFLIB(L'MSG3),MSG3
         MVC   APFVOL(L'MSG4),MSG4
         MVC   APFSTA(L'MSG6),MSG6
         BAL   R6,PUT
         MVC   APFLIB(L'MSG5),MSG5
         MVC   APFVOL(L'MSG4),MSG5
         MVC   APFSTA(L'MSG6),MSG5
         BAL   R6,PUT
         BAL   R6,PUT
RDAPF14  DS    0H
         USING ADSECT,R10
         SLR   R8,R8
         ICM   R8,3,ATOTAL         SAVE TOTAL NUMBER OF ENTRIES
         LA    R10,ALEN(,R10)      SKIP OVER HEADER
         USING A1DSECT,R10
LISTENT  DS    0H
         SLR   R1,R1
         ICM   R1,1,A1LEN          LENGTH OF THIS ENTRY
         LR    R3,R1               LENGTH OF THIS ENTRY
         LA    R3,1(,R3)             PLUS 1ST BYTE
         SH    R1,=H'7'            MINUS LENGTH OF VOLSER AND A1LEN
         EX    R1,MOVELIB          GET LIBRARY NAME
         MVC   APFVOL(6),A1VOL     GET VOLSER FROM APF LIST
         TM    PFLAG1,P1COMP       COMP?
         BNO   LSTENT04            NO. GO TO CHECK RESIDENT ENTRY
         TM    PFLAG1,P1TEND       END OF IEAAPFXX?
         BO    LSTENT02
         ICM   R1,15,SKIP          DON'T COMPARE 1ST TWO RESIDENT
         BZ    LSTENT01               ENTRIES
         BCTR  R1,R0
         ST    R1,SKIP
         B     LSTENT04
LSTENT01 DS    0H
         LR    R2,R9
         MVI   T1LIB,C' '
         MVC   T1LIB+1(L'T1LIB-1),T1LIB
         MVI   T1VOL,C' '
         MVC   T1VOL+1(L'T1VOL-1),T1VOL
         $#MOVE TO=T1LIB,FROM=(R2),STOP=(' ',',')
         LR    R2,R14
         $#MOVE TO=T1VOL,FROM=(R2),STOP=(' ',','),SKIP=(' ')
         CLC   T1LIB,APFLIB
         BNE   LSTENT02
         CLC   T1VOL,APFVOL
         BNE   LSTENT02
         B     LSTENT04
LSTENT02 DS    0H
         MVI   APFSTA,C'?'         INDICATE RESIDENT ENTRY CHANGED
LSTENT04 DS    0H
         OBTAIN CAMLST1            OBTAIN DATASET
         LTR   R15,R15
         BZ    LSTENT10            OK.
         MVC   APFSTA+1(L'STAT1),STAT1   NON-EXISTENT DATASET
         B     LSTENT90
LSTENT10 DS    0H
         LOCATE CAMLST2            LOCATE DATASET
         LTR   R15,R15
         BZ    LSTENT20            OK.
         MVC   APFSTA+1(L'STAT2),STAT2   NOT CATALOGUED
         B     LSTENT90
LSTENT20 DS    0H
         LA    R4,WORK1            POINT TO VOLUME LIST
         USING VDSECT,R4
         LA    R4,VLEN(,R4)        SKIP OVER HEADER
         USING V1DSECT,R4
         CLC   V1VOL,APFVOL        ASSUME ONLY ONE VOLUME
         BE    LSTENT90
         MVC   APFSTA+1(L'STAT3),STAT3   DIFFERENT FROM CATALOG
LSTENT90 DS    0H
         BAL   R6,PUT
         AR    R10,R3              SKIP TO NEXT ENTRY (RESIDENT)
         TM    PFLAG1,P1COMP       COMPARE?
         BNO   LSTENT94            NO.
         TM    PFLAG1,P1TEND       END OF IEAAPFXX TABLE?
         BO    LSTENT94
         ICM   R1,15,SKIP
         BNZ   LSTENT94
         AH    R9,TRECL            SKIP TO NEXT ENTRY (IEAAPFXX)
         L     R1,TNUMREC
         BCTR  R1,R0
         ST    R1,TNUMREC
         LTR   R1,R1
         BNM   LSTENT94
         OI    PFLAG1,P1TEND
LSTENT94 DS    0H
         BCT   R8,LISTENT
         TM    PFLAG1,P1ISPF
         BO    CLOSE10
         CLOSE APFLIST
         B     CLOSE90
CLOSE10  DS    0H
         CALL  ISPLINK,(TBTOP,APFTAB),VL,                              X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(TBDISPL,APFTAB,PWLAPF30),VL,                   X
               MF=(E,PARMLIST)
         CALL  ISPLINK,(TBCLOSE,APFTAB),VL,                            X
               MF=(E,PARMLIST)
CLOSE90  DS    0H
         B     EXIT
ERREXIT1 DS    0H
         WTO   'PWLAPF1A - ERROR RETURN FROM PWLRPDS2',ROUTCDE=11
         MVI   RC,X'04'
         B     EXIT
MOVELIB  MVC   APFLIB(0),A1LIB
PUT      DS    0H
         TM    PFLAG1,P1ISPF
         BO    PUT10
         PUT   APFLIST,LIST
         B     PUT90
PUT10    DS    0H
         CALL  ISPLINK,(TBADD,APFTAB,NLIST1),VL,                       X
               MF=(E,PARMLIST)
PUT90    DS    0H
         MVI   LIST,X'40'
         MVC   LIST+1(L'LIST-1),LIST
         BR    R6
* DSECTS, CONSTANTS
PARMS    DS    0F                    15F PARM AREA
PFLAG1   DS    XL1
P1ISPF   EQU   X'80'                 CALLED FROM TSO/ISPF
P1TEND   EQU   X'40'                 END OF IEAAPFXX TABLE
P1COMP   EQU   X'20'                 COMPARE SELECTED (OPTION 2)
P1DEBUG  EQU   X'10'                 DEBUG OPTION SPECIFIED
PFLAG2   DS    XL1
PFLAG3   DS    XL1
PFLAG4   DS    XL1
PARMLIST DS    14F
MSG1     DC    C'Display Resident Authorized Library List'
MSG2     DC    C'Peter Lee       '
MSG3     DC    C'Authorized library name'
MSG4     DC    C'VOLSER'
MSG5     DC    C'============================================'
MSG6     DC    CL20'STATUS'
SKIP     DC    F'2'
PARMLIB  DC    CL44' '
LIST     DS    0CL80
LINECM   DC    CL4' '
APFLIB   DC    CL44' '
         DC    CL4' '
APFVOL   DC    CL6' '
         DC    C' '
APFSTA   DC    CL20' '
         ORG   LIST+80
STAT1    DC    C'*NONEXISTENT*'
STAT2    DC    C'*NOT CATLGED*'
STAT3    DC    C'*DIFF. FROM CATLG*'
VDEFINE  DC    C'VDEFINE '
VGET     DC    C'VGET    '
TBCREATE DC    C'TBCREATE'
TBDISPL  DC    C'TBDISPL '
TBERASE  DC    C'TBERASE '
TBCLOSE  DC    C'TBCLOSE '
TBADD    DC    C'TBADD   '
TBTOP    DC    C'TBTOP   '
WRITE    DC    C'WRITE   '
NOWRITE  DC    C'NOWRITE '
PWLAPF30 DC    C'PWLAPF30'
IEAAPFXX DC    C'IEAAPF'
APFSUFX  DC    C'  '
IEASYSXX DC    C'IEASYS'
SYSPSUFX DC    C'  '
OPTION   DC    C' '
L44      DC    F'44'
L6       DC    F'6'
L4       DC    F'4'
L2       DC    F'2'
L1       DC    F'1'
L20      DC    F'20'
CHAR     DC    C'CHAR '
APFTAB   DC    C'APFTAB '
NLIST1   DC    F'4'
         DC    F'0'
LCMD     DC    CL8'LCMD'
APF1     DC    CL8'APF1'
APF2     DC    CL8'APF2'
APF3     DC    CL8'APF3'
NLIST2   DC    F'4'
         DC    F'0'
O1       DC    CL8'O1'
PARM     DC    CL8'PARM'
APF      DC    CL8'APF'
SYSP     DC    CL8'SYSP'
CAMLST1  CAMLST SEARCH,APFLIB,APFVOL,WORK1
CAMLST2  CAMLST NAME,APFLIB,,WORK1
T1LIB    DS    CL44                   LIB FROM IEAAPFXX
T1VOL    DS    CL6                    VOL FROM IEAAPFXX
         DS    0D
WORK1    DS    CL256
APFLIST  DCB   DDNAME=APFLIST,MACRF=PM,DSORG=PS
         CVT   DSECT=YES,LIST=NO
         IHAPSA
         IHAASCB
ADSECT   DSECT
ATOTAL   DS    XL2                    TOTAL NUMBER OF ENTRIES
ALEN     EQU   *-ATOTAL               LENGTH OF HEADER
A1DSECT  DSECT                        EACH APF A1LIB ENTRY
A1LEN    DS    XL1                    LENGTH OF THIS ENTRY
A1VOL    DS    CL6
A1LIB    DS    XL44                   DSNAME OF THIS A1LIB(MAX 44)
VDSECT   DSECT                        VOLUME LIST
VTOTAL   DS    XL2                    TOTAL NUMBER OF ENTRIES
VLEN     EQU   *-VTOTAL               LENGTH OF HEADER
V1DSECT  DSECT                        EACH APF A1LIB ENTRY
V1DEVC   DS    XL4                    DEVICE CODE
V1VOL    DS    XL6                    VOLSER
V1SEQ    DS    XL2                    DEVICE SEQUENCE NUMBER
TDSECT   DSECT
TNUMREC  DS    XL4
TRECL    DS    XL2
TRESV1   DS    XL2
TNEXTTB  DS    XL4
TRESV2   DS    XL4
TFIRST   EQU   *                      FIRST RECORD
         END   PWLAPF1

Source code for routine PWLRPDS2

PWLRPDS2 PWLINIT
* READ IN RECORDS OF A FIXED BLOCKED PDS MEMBER
* INPUT
*        R1  = ADDR OF PARMLIST
*             +0   FLAGS
*             +4   44 BYTE DSN
*             +48  8 BYTE MEMBER NAME
* OUTPUT:
*        R15 = 4   ERROR IN READING PDS
*              0   SUCCESSFUL COMPLETION
*        R1  = ADDR OF A TABLE
*            +0   NUMBER OF RECORDS READ IN TABLE
*            +4   RECORD LENGTH
*            +8   ADDR OF NEXT TABLE
*            +12  ADDR OF PREV TABLE
*            +16  FIRST RECORD
* CALL PWLDYNA1 TO ALLOCATE REQUESTED DSN
         LR    R8,R1                    SAVE R1
         MVC   PFLAGS(4),0(R8)          SAVE PFLAGS
         LA    R1,4(,R1)                SKIP TO DSN
         CALL  PWLDYNA1
         LTR   R15,R15
         BNZ   ERREXIT4
         MVC   PDS+40(8),0(R1)          MOVE IN ALLOCATED DDNAME
         OPEN  (PDS,INPUT)
         TM    PFLAG1,P1DEBUG
         BNO   RPDS0002
         OPEN  (PARMLIST,OUTPUT)
RPDS0002 DS    0H
         TM    PDS+X'24',X'40'          RECFM=U OR V?
         BNO   RPDS0010                 NO. GO PROCESS FIXED.
         B     ERREXIT1                 ERROR EXIT
RPDS0010 DS    0H
         LH    R0,PDS+DCBBLKSI-IHADCB   BLOCKSIZE FROM DCB
         ST    R0,PDSBLKSI
         LA    R1,TAB#ENT
         MH    R1,TABENTL
         AH    R1,=H'16'                16-BYTE PREFIX
         ST    R1,TABSIZE
         A     R0,TABSIZE               ADD TABLE SIZE
         ST    R0,WORKSIZE
         GETMAIN RC,LV=(0),SP=3         GET BUFFER
         LTR   R15,R15
         BNZ   ERREXIT2
         ST    R1,PDSBUF
         LR    R11,R1
         A     R11,PDSBLKSI
         USING TDSECT,R11               POINT TO OUTPUT TABLE
RPDS0020 DS    0H                       SAME DDNAME
         MVC   MEMNAME,48(R8)           MOVE IN MEMBER NAME
         LA    R10,TFIRST               POINT TO FIRST ENTRY IN TAB
         XC    TNUMREC,TNUMREC
         FIND  PDS,MEMNAME,D            SEARCH DIRECTORY FOR MEMBER
         LTR   R15,R15
         BNZ   ERREXIT3
         MVC   TRECL,PDS+DCBLRECL-IHADCB  LRECL FROM DCB
RPDS0030 DS    0H
         L     R3,PDSBUF
         READ  PDSECB,SF,PDS,(R3),'S'
         CHECK PDSECB
         LH    R4,PDS+DCBBLKSI-IHADCB   BLKSIZE (BYTES REQUESTED)
         L     R1,PDSECB+16             GET IOB ADDR
         SH    R4,14(,R1)               SUBTRACT RESIDUAL COUNT IN IOB
*                                       TO GET ACTUAL BLOCK LENGTH
RPDS0040 DS    0H
         LH    R1,TRECL
         EX    R1,MOVE1                 STORE IN TABLE
         BAL   R6,PUT
         AH    R3,TRECL                 STEP TO NEXT RECORD
         AH    R10,TRECL                STEP TO NEXT TABLE ENTRY
         L     R1,TNUMREC
         LA    R1,1(,R1)
         ST    R1,TNUMREC
         LA    R1,TAB#ENT
         C     R1,TNUMREC               MAXIMUM NUM OF ENTRIES?
         BL    ERREXIT5
         SH    R4,TRECL
         BNZ   RPDS0040                 DEBLOCK NEXT RECORD
         B     RPDS0030                 GET NEXT BLOCK
MOVE1    MVC   0(0,R10),0(R3)           STORE IN TABLE
ERREXIT1 DS    0H
         WTO   'PWLRPDS2A - INPUT DATASET NOT FIXED',ROUTCDE=11
         MVI   RC,X'04'
         B     EXIT
ERREXIT2 DS    0H
         WTO   'PWLRPDS2B - GETMAIN FOR BUFFER FAILED',ROUTCDE=11
         MVI   RC,X'04'
         B     EXIT
ERREXIT3 DS    0H
         WTO   'PWLRPDS2C - MEMBER DOES NOT EXIST',ROUTCDE=11
         MVI   RC,X'04'
         B     EXIT
ERREXIT4 DS    0H
         WTO   'PWLRPDS2D - ERROR RETURN FROM PWLDYNA1',ROUTCDE=11
         MVI   RC,X'04'
         B     EXIT
ERREXIT5 DS    0H
         WTO   'PWLRPDS2E - MAXIMUM TABLE SIZE EXCEEDED',ROUTCDE=11
         MVI   RC,X'04'
         B     EXIT
EXIT1    DS    0H
         LR    R10,R11
         BAL   R6,PUT              DEBUG - WRITE OUT TABLE PREFIX
EXIT2    DS    0H
         CLOSE PDS
         TM    PFLAG1,P1DEBUG
         BNO   EXIT3
         CLOSE PARMLIST
EXIT3    DS    0H
         LR    R1,R11              RETURN TABLE ADDR
         B     EXIT
PUT      DS    0H
         TM    PFLAG1,P1DEBUG
         BNOR  R6
         PUT   PARMLIST,0(R10)
         BR    R6
PARMLIST DCB   DDNAME=PARMLIST,MACRF=PM,DSORG=PS
PDS      DCB   DDNAME=PDS,MACRF=(R),DSORG=PO,EODAD=EXIT1
BLANKS   DC    CL8' '
MEMNAME  DS    CL8
PDSBUF   DS    F
PDSBLKSI DS    F
WORKSIZE DS    F
TABSIZE  DS    F                     TAB#ENT*TABENTL+16
TAB#ENT  EQU   255                   NUMBER OF TABLE ENTRIES
TABENTL  DC    H'80'                 LENGTH OF TABLE ENTRY
PFLAGS   DS    0F
PFLAG1   DS    XL1
P1ISPF   EQU   X'80'                 CALLED FROM TSO/ISPF
P1TEND   EQU   X'40'                 END OF IEAAPFXX TABLE
P1COMP   EQU   X'20'                 COMPARE SELECTED (OPTION 2)
P1DEBUG  EQU   X'10'                 DEBUG OPTION SPECIFIED
PFLAG2   DS    XL1
PFLAG3   DS    XL1
PFLAG4   DS    XL1
         LTORG
         DCBD  DSORG=(PO),DEVD=DA
TDSECT   DSECT                   OUTPUT TABLE
TNUMREC  DS    XL4
TRECL    DS    XL2
TRESV1   DS    XL2
TNEXTTB  DS    XL4
TPREVTB  DS    XL4
TFIRST   EQU   *                 FIRST RECORD
         END   PWLRPDS2

Source code for routine PWLDYNA1

PWLDYNA1 PWLINIT
* ALLOCATE EXISTING DATASET DYNAMICALLY USING SPECIFIED DATASET NAME
* ENTRY:
*        R1 = ADDR OF PARMLIST
*             +0 44-BYTE DATASET NAME
* EXIT:
*        R1 = ADDR OF 8-BYTE DDNAME OF ALLOCATED DATASET
         MVC   ALLOCDSN,0(R1)
         MVC   RETDSN,0(R1)
         MVC   ALLOCDSL(2),=X'002C'
         LA    R1,RBSPACE
         LR    R8,R1
         USING S99RBP,R8             R8 = RB PTR
         USING S99RB,R4              R4 = RB
         USING S99TUPL,R5            R5 = RB TU POINTER LIST
         LA    R4,S99RBPTR+4
         ST    R4,S99RBPTR           STORE RB ADDR INTO RBPTR
         OI    S99RBPTR,S99RBPND     TURN ON HIGH ORDER BIT
         XC    S99RB(RBLEN),S99RB    CLEAR OUT RB
         MVI   S99RBLN,RBLEN         SET RB LENGTH
*** ALLOCATE DATASET
         MVI   S99VERB,S99VRBAL      SET VERB=DSNAME ALLOCATION
         LA    R5,S99RB+RBLEN        START TU POINTERS
         ST    R5,S99TXTPP           SAVE IN RB
         LA    R6,ALLOCDS
         ST    R6,S99TUPTR           1. DSNAME
         LA    R6,ALLOCSTA
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR           2. STATUS
         OI    S99TUPTR,S99TUPLN     INDICATE END OF TEXT PTRS
         LR    R1,R8
         DYNALLOC
         LTR   R15,R15
         BNZ   ERREXIT1
*** RETRIEVE DDNAME
         XC    RBSPACE,RBSPACE
         LA    R4,S99RBPTR+4
         ST    R4,S99RBPTR           STORE RB ADDR INTO RBPTR
         OI    S99RBPTR,S99RBPND     TURN ON HIGH ORDER BIT
         MVI   S99RBLN,RBLEN         SET RB LENGTH
         MVI   S99VERB,S99VRBIN      SET VERB=INFO RETRIEVAL
         LA    R5,S99RB+RBLEN        START TU POINTERS
         ST    R5,S99TXTPP
         LA    R6,RETDS
         ST    R6,S99TUPTR           1. DSNAME
         LA    R6,STATUSTU           RETURN STATUS
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR           2. STATUS
         LA    R6,ORGTU              RETURN DSORG
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR           3. ORG
         LA    R6,RETDDN             RETURN DDNAME
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR           4. DDN
         LA    R6,TYPETU             RETURN DATASET TYPE
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR           5. TYPE
         OI    S99TUPTR,S99TUPLN     INDICATE END OF TEXT PTRS
         LR    R1,R8
         DYNALLOC
         LTR   R15,R15
         BNZ   ERREXIT2
         CLC   DSORG,=X'0200'      PO?
         BE    DYNA0100
         CLC   DSORG,=X'0300'      POU?
         BE    DYNA0100
         OI    PFLAG1,P1NPDS       NOT A PDS
DYNA0100 DS    0H
         CLI   STATUS,X'04'        NEW DATASET?
         BNE   DYNA0200
         OI    PFLAG1,P1NEW
DYNA0200 DS    0H
         B     EXIT2
ERREXIT1 DS    0H
         MVI   RC,X'04'
         WTO   'PWLDYNA1A - ERROR ON ALLOCATE',ROUTCDE=11
         B     EXIT
ERREXIT2 DS    0H
         MVI   RC,X'04'
         WTO   'PWLDYNA1B - ERROR ON RETRIEVE',ROUTCDE=11
         B     EXIT
EXIT2    DS    0H
         MVI   RC,X'00'
         LA    R1,RETDDNAM            RETURN DDNAME TO CALLER
         B     EXIT
PFLAG1   DS    XL1
P1NEW    EQU   X'80'
P1NPDS   EQU   X'40'
RBSPACE  DS    CL52   RBPTR(4)+RB(20)+7 TEXT PTRS(28)
RETDS    DC    AL2(DINDSNAM)               KEY
         DC    X'0001'                     #
RETDSL   DC    X'002C'                     LEN
RETDSN   DC    CL44'SYS1.PARMLIB'          DSNAME
RETDDN   DC    AL2(DINRTDDN)          RETURN DDNAME
         DC    X'0001'
         DC    X'0008'
RETDDNAM DC    CL8'DDABC123'
STATUSTU DC    AL2(DINRTSTA)
         DC    X'0001'
         DC    X'0001'
STATUS   DC    X'00'
ORGTU    DC    AL2(DINRTORG)
         DC    X'0001'
         DC    X'0002'
DSORG    DC    X'0000'
TYPETU   DC    AL2(DINRTTYP)
         DC    X'0001'
TYPELEN  DC    X'0001'
TYPE     DC    X'00'
* DSNAME ALLOCATION TEXT UNITS
ALLOCDS  DC    AL2(DALDSNAM)               KEY
         DC    X'0001'                     #
ALLOCDSL DC    X'002C'                     LEN
ALLOCDSN DC    CL44'SYS1.PARMLIB'          DSNAME
ALLOCSTA DC    AL2(DALSTATS)               KEY
         DC    X'0001'                     #
         DC    X'0001'                     LEN
         DC    AL1(SHR)                    STATUS
OLD      EQU   X'01'
MOD      EQU   X'02'
NEW      EQU   X'04'
SHR      EQU   X'08'
         IEFZB4D0
         IEFZB4D2
RBLEN    EQU  (S99RBEND-S99RB)
         END   PWLDYNA1

Source code for macro PWLINIT

         MACRO
&L       PWLINIT
.* INIT MACRO FOR NON-RENT CODE
&L       CSECT ,
INIT_A&SYSNDX DS 0H
R0       EQU   0
R1       EQU   1
R2       EQU   2
      etc
R15      EQU   15
         USING *,R15                    TEMPORARY
         B     INIT_B&SYSNDX
         DC    AL4(INIT_B&SYSNDX-INIT_A&SYSNDX-8)
         DC    CL23'&L   &SYSDATE &SYSTIME'
INIT_B&SYSNDX DS 0H
         STM   R14,R12,12(R13)
         LR    R1,R13                   WORK REGISTER
         CNOP  0,4
         BAL   R13,*+4+72               SET UP R13
         DC    18F'0'                   SAVE AREA
         LA    R13,0(,R13)              IN CASE 31-BIT
         ST    R1,4(,R13)               SAVE LAST IN THIS
         ST    R13,8(,R1)               SAVE THIS IN LAST
         USING *-84,R13
         B     INIT_C&SYSNDX
         DROP  R15
EXIT     DS    0H
         LA    R15,0                    STORE RETURN CODE
RC       EQU   *-1,1                    RETURN CODE
         L     R14,4(,R13)              PREV SAVE AREA
         STM   R0,R1,20(R14)            SAVE R0,R1 IN PREV SAVE AREA
         L     R13,4(,R13)              RESTORE REG 13
         L     R14,12(R13)              RESTORE R14
         LM    R0,R12,20(R13)
         BR    R14
INITMODE DC    H'0'
INIT_C&SYSNDX MVI RC,0                  ENSURE RETURN CODE = 0
         L     R1,4(,R13)
         LM    R14,R2,12(R1)            RESTORE LINKAGE REGS
         AGO   .MEND
.MEND    ANOP
         MEND

Source code for macro $#FIND

         MACRO
&LBL     $#FIND   &REC=,&CHAR=,&RECLEN=72
.*
.*       PWL  .....................................
.*
         AIF   ('&REC' EQ '').ERR1
         AIF   ('&REC'(1,1) EQ '(').ISREG1
         LA    R1,&REC
         AGO   .XM02
.ISREG1  ANOP
         LA    R1,0&REC
.XM02    ANOP
         AIF   ('&CHAR' EQ '').ERR2
&T1      SETA  N'&CHAR
         AIF   (&T1 EQ 1).CHAROK,                                      X
               (&T1 EQ 2).CHAROK
         MNOTE 12,'$#FIND ONLY SUPPORTS 1 OR 2 CHAR STRINGS'
         MEXIT ,
.CHAROK  ANOP  ,
         B     FN01&SYSNDX
C1&SYSNDX DC   C&CHAR(1)
         AIF   (&T1 EQ 1).NOCHAR2
C2&SYSNDX DC   C&CHAR(2)
.NOCHAR2 ANOP  ,
&L11     SETA  K'&CHAR(1)
&L11     SETA  &L11-2
&L1      SETC  '&L11'
         MNOTE ' &L11  &L1  '
         AIF   (&T1 EQ 1).NOL22A
&L22     SETA  K'&CHAR(2)
&L22     SETA  &L22-2
&L2      SETC  '&L22'
         MNOTE ' &L22  &L2  '
.NOL22A  ANOP  ,
FN01&SYSNDX DS 0H
         LA    R15,&RECLEN-&L11            COUNTER
FN02&SYSNDX DS 0H
         CLC   C1&SYSNDX,0(R1)
         BE    FN03&SYSNDX
         AIF   (&T1 EQ 1).NOCHAR2B
         CLC   C2&SYSNDX,0(R1)
         BE    FN04&SYSNDX
.NOCHAR2B ANOP ,
         LA    R1,1(,R1)
         BCT   R15,FN02&SYSNDX
         SLR   R1,R1
         B     FN99&SYSNDX
FN03&SYSNDX DS 0H
         LA    R1,&L1.(,R1)
         B     FN99&SYSNDX
         AIF   (&T1 EQ 1).NOCHAR2C
FN04&SYSNDX DS 0H
         LA    R1,&L2.(,R1)
         B     FN99&SYSNDX
.NOCHAR2C ANOP ,
FN99&SYSNDX DS 0H
.ERR1    ANOP
.ERR2    ANOP
.MEND    MEND

Source code for macro $#MOVE

         MACRO
&LBL     $#MOVE   &TO=,&FROM=,&STOP=,&SKIP=,&MAX=
.*
.*       PWL  .....................................
.*
         AIF   ('&TO' EQ '').ERR1
         AIF   ('&TO'(1,1) EQ '(').ISREG1
         LA    R1,&TO
         AGO   .XM02
.ISREG1  ANOP
         LA    R1,0&TO
.XM02    ANOP
         AIF   ('&FROM' EQ '').ERR1
         AIF   ('&FROM'(1,1) EQ '(').ISREG2
         LA    R14,&FROM
         AGO   .XM04
.ISREG2  ANOP
         LA    R14,0&FROM
.XM04    ANOP
         AIF   ('&STOP' EQ '').ERR2
         AIF   ('&MAX' EQ '').XM05
         AIF   ('&MAX'(1,1) EQ '(').ISREG3
         LA    R0,&MAX
         AGO   .XM06
.ISREG3  ANOP
         LA    R0,0&MAX
         AGO   .XM06
.XM05    ANOP
         LA    R0,80               TEMP SET MAX TO 80 BYTES
.XM06    ANOP
         B     FN01&SYSNDX
C1&SYSNDX DC   C&STOP(1)
C2&SYSNDX DC   C&STOP(2)
FN01&SYSNDX DS 0H
         CLI   C1&SYSNDX,C' '
         BE    FN03&SYSNDX
         CLI   C2&SYSNDX,C' '
         BE    FN03&SYSNDX
         CLI   0(R14),C' '                SKIP LEADING BLANKS
         BNE   FN03&SYSNDX
FN02&SYSNDX DS 0H
         LA    R14,1(R14)
         BCT   R0,FN01&SYSNDX
         B     FN99&SYSNDX
FN03&SYSNDX DS 0H
         AIF   ('&SKIP' EQ '').FN05
         CLI   0(R14),C&SKIP(1)
         BE    FN02&SYSNDX
.FN05    ANOP
         CLI   0(R14),C&STOP(1)
         BE    FN99&SYSNDX
         CLI   0(R14),C&STOP(2)
         BE    FN99&SYSNDX
         CLI   0(R14),C' '                BLANK IS DEFAULT STOP
         BE    FN99&SYSNDX
         MVC   0(1,R1),0(R14)
         LA    R1,1(R1)
         LA    R14,1(R14)
         BCT   R0,FN03&SYSNDX
FN99&SYSNDX DS 0H
.ERR1    ANOP
.ERR2    ANOP
.MEND    MEND

Sample JCL to assemble and link modules

//DYNA1  EXEC  PWLASM1,LPARM='AMODE=24',PROG=PWLDYNA1,COND.LKED=(0,LE)
//ASM.SYSPUNCH DD DSN=&&OBJ(PWLDYNA1),SPACE=(3200,(300,50,5))
//RPDS2  EXEC  PWLASM1,LPARM='AMODE=24',PROG=PWLRPDS2,COND.LKED=(0,LE)
//ASM.SYSPUNCH DD DSN=&&OBJ(PWLRPDS2)
//APF1   EXEC  PWLASM1,LPARM='AMODE=24',PROG=PWLAPF1
//ASM.SYSPUNCH DD DSN=&&OBJ(PWLAPF1)
//LKED.SYSLIN  DD *
   INCLUDE LIB1(ISPLINK)
   INCLUDE OBJ(PWLDYNA1)
   INCLUDE OBJ(PWLRPDS2)
   INCLUDE OBJ(PWLAPF1)
   ENTRY PWLAPF1
   NAME PWLAPF1(R)
//LKED.LIB1 DD DISP=SHR,DSN=your.ISPF.LINKLIB (to include ISPLINK)
//LKED.OBJ DD DSN=&&OBJ,DISP=SHR

Source code for clist PWLAPF1

PROC 0
CONTROL NOMSG
FREE F(APFLIST,PARMLIST)
ALLOC F(APFLIST) DA(*)
ALLOC F(PARMLIST) DUMMY
ISPEXEC DISPLAY PANEL(PWLAPF10)
IF &O1 = 2 THEN -
    ISPEXEC DISPLAY PANEL(PWLAPF20)
ISPEXEC VPUT (O1,PARM,SYSP,APF)
CALL 'your.loadlib(PWLAPF1)'
FREE F(APFLIST,PARMLIST)
EXIT

Source code for panel PWLAPF10

)ATTR DEFAULT(%+_)
  /*  % TYPE(TEXT) INTENS(HIGH)      defaults displayed for      */
  /*  + TYPE(TEXT) INTENS(LOW)       information only            */
  /*  _ TYPE(INPUT) INTENS(HIGH) CAPS(ON) JUST(LEFT)             */
  / TYPE(OUTPUT) INTENS(LOW) PAD(' ') JUST(LEFT)
  # TYPE(OUTPUT) INTENS(HIGH) PAD(' ') JUST(LEFT)
  ! TYPE(INPUT) INTENS(LOW) PAD('.') CAPS(ON) JUST(LEFT)
  @ TYPE(INPUT) INTENS(LOW) PAD(' ') CAPS(ON) JUST(LEFT)
)BODY
+
+
+
+    Display Resident APF Library List
+
+       %Enter you selection: _O1
+
+           1 - Display resident APF list only
+
+           2 - Display and compare with PARMLIB
+
+
+
)INIT
 &O1 = 1
)REINIT
 &O1 = 1
)PROC
 VER (&O1,RANGE,1,2)
)END

Source code for panel PWLAPF20

)ATTR DEFAULT(%+_)
 /*  % TYPE(TEXT) INTENS(HIGH)      defaults displayed for      */
 /*  + TYPE(TEXT) INTENS(LOW)       information only            */
 /*  _ TYPE(INPUT) INTENS(HIGH) CAPS(ON) JUST(LEFT)             */
  / TYPE(OUTPUT) INTENS(LOW) PAD(' ') JUST(LEFT)
  # TYPE(OUTPUT) INTENS(HIGH) PAD(' ') JUST(LEFT)
  ! TYPE(INPUT) INTENS(LOW) PAD('.') CAPS(ON) JUST(LEFT)
  @ TYPE(INPUT) INTENS(LOW) PAD(' ') CAPS(ON) JUST(LEFT)
)BODY
+    Display Resident APF Library List
+
%    Specify PARMLIB dataset name: %_PARM
+
+    Compare with APF list in PARMLIB
+
%        Specify either one of the following:
+
+           Suffix for IPL system parameter (SYSP=xx): %_SYSP
+
+           Suffix for APF system parameter (APF=xx):  %_APF
+
+
+
+        ( APF suffix will override SYSP suffix if specified )
+
+
+
+
)INIT
 &PARM = SYS1.PARMLIB
)REINIT
 &PARM = SYS1.PARMLIB
)PROC
 VER (&PARM,DSNAME)
 IF (&SYSP = ' ')
    VER (&APF,NONBLANK,LEN,EQ,2)
 ELSE VER (&SYSP,LEN,EQ,2)
 IF (&APF = ' ')
    VER (&SYSP,NONBLANK,LEN,EQ,2)
 ELSE VER (&APF,LEN,EQ,2)
)END

Source code for panel PWLAPF30

)ATTR DEFAULT(%+_)
 /*  % TYPE(TEXT) INTENS(HIGH)      defaults displayed for      */
 /*  + TYPE(TEXT) INTENS(LOW)       information only            */
 /*  _ TYPE(INPUT) INTENS(HIGH) CAPS(ON) JUST(LEFT)             */
  / TYPE(OUTPUT) INTENS(LOW) PAD(' ') JUST(LEFT)
  # TYPE(OUTPUT) INTENS(HIGH) PAD(' ') JUST(LEFT)
  ! TYPE(INPUT) INTENS(LOW) PAD('.') CAPS(ON) JUST(LEFT)
  @ TYPE(INPUT) INTENS(LOW) PAD(' ') CAPS(ON) JUST(LEFT)
)BODY
%
%COMMAND ===>_ZCMD                                            +SCROLL ===>_AMT +
%    Display Resident APF Library List    &ZDATE  &ZTIME
%     Option selected = &O1
%     PARMLIB specified for compare = &PARM
%     SYSP suffix  = &SYSP      APF suffix = &APF
%     APF library name                              VOLSER Status
%     ============================================  ====== ====================
)MODEL
@LCMD/APF1                                         /APF2  #APF3
)INIT
)END

BATCH EXECUTION

The program PWLAPF1 can also be executed in batch using the
provided sample JCL. For example, a job can be submitted to run
PWLAPF1 in a remote MVS system or an MVS machine under
VM where there is no TSO/ISPF facility.

A number of different execution parameters can be passed to
PWLAPF1 as follows:

o      O=n or OPTION=n - n=1  for display only, n=2  for display
      and compare with IEAAPFxx. The default is 1 if not specified.

o      P=dsn or PARMLIB=dsn, dsn = alternative dataset name for
      SYS1.PARMLIB. The default is SYS1.PARMLIB if not
      specified.

o      S=xx or SYSP=xx, xx = suffix for IEASYSxx (used for the
      current IPL). The default is 00 if not specified.

o      A=xx or APF=xx, xx = suffix for IEAAPFxx (used for the
      current IPL). The default is the APF suffix found in
      IEASYS00 or IEASYSxx if not specified.

o      D=y or DEBUG=YES. This will cause PWLRPDS2 to write
      the contents of IEASYSxx and/or IEAAPFxx (read from the
      specified PARMLIB or SYS1.PARMLIB) to PARMLIST for
      debugging purposes.

Sample JCL to execute PWLAPF1 in batch

//* THE FOLLOWING WILL REQUEST A LIST OF RESIDENT APF LIST
//STA  EXEC  PGM=PWLAPF1
//* THE FOLLOWING WILL REQUEST A LIST OF RESIDENT APF LIST AND COMPARE
//*   IT WITH IEAAPFxx USING THE APF SUFFIX FOUND IN IEASYS00.
//*TA  EXEC  PGM=PWLAPF1,PARM='O=2'
//* THE FOLLOWING WILL REQUEST A LIST OF RESIDENT APF LIST AND COMPARE
//*   IT WITH IEAAPFXX USING THE APF SUFFIX FOUND IN IEASYST1.
//*TA  EXEC  PGM=PWLAPF1,PARM='O=2,S=T1'
//* THE FOLLOWING WILL REQUEST A LIST OF RESIDENT APF LIST AND COMPARE
//*   IT WITH IEAAPFT2.
//*TA  EXEC  PGM=PWLAPF1,PARM='A=T2,S=T1,O=2'
//* THE FOLLOWING WILL REQUEST A LIST OF RESIDENT APF LIST AND COMPARE
//*   IT WITH IEAAPF01 READ FROM ALTERNAT.SYS1.PARMLIB.
//*TA  EXEC  PGM=PWLAPF1,PARM=('P=ALTERNAT.SYS1.PARMLIB ','A=01','O=2')
//STEPLIB DD DSN=your.loadlib,DISP=SHR
//* IEASYSXX AND/OR IEAAPFXX FROM SPECIFIED PARMLIB WILL BE WRITTEN TO
//*   PARMLIST IF DEBUG=YES IS SPECIFIED.
//PARMLIST DD SYSOUT=*,DCB=(RECFM=FB,LRECL=80,BLKSIZE=3200)
//* RESIDENT APF LIST IS WRITTEN TO APFLIST
//APFLIST  DD SYSOUT=*,DCB=(RECFM=FB,LRECL=80,BLKSIZE=3200)

With a slight programming change, it is also possible to run
PWLAPF1 as a started task to compare the resident APF list
against the IEAAPFxx parmlib member at regular intervals to
continuously monitor dynamic changes made to the resident APF
list.

Peter W K Lee
Software Analyst (Canada)                                                            c Xephon 1994



--------------------------------------------------------------------------------

  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the MVS Update home pages (one text e-mail per month)

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update
***********************************************************************
*                                                                     *
*  This assembler routine demonstrates DD Name renaming               *
*  (Dynamic compilation) using the Assembler ATTACH macro.            *
*                                                                     *
*  In this specific scenario all the DDNAMES are renamed.             *
*                                                                     *
*  The TASKLIB option of the ATTACH macro is used                     *
*  to specify the steplib for the ATTACHed command (ie. the compiler) *
*                                                                     *
*  The Compiler and Library should be specified on the DD             *
*  referred to in the DCB for the TASKLIB if one or both              *
*  are not already defined in LPA.  The compiler and library do not   *
*  need to be part of the steplib concatenation.                      *
*                                                                     *
***********************************************************************
ATTACH   CSECT
         STM   14,12,12(13)
         BALR  3,0
         USING *,3
         LR    12,15
         ST    13,SAVE+4
         LA    15,SAVE
         ST    15,8(,13)
         LR    13,15
*
*   Invoke the compiler using ATTACH macro
*
         OPEN  (COMPILER)
         ATTACH EP=CCNDRVR,PARAM=(OPTIONS,DDNAMES),VL=1,DCB=COMPILER, X
                ECB=ECBADDR,TASKLIB=COMPILER
         ST    1,TCBADDR
         WAIT  1,ECB=ECBADDR
         DETACH TCBADDR
         CLOSE (COMPILER)
         L     13,4(,13)
         LM    14,12,12(13)
         SR    15,15
         BR    14
*
*   Constant and save area
*
 SAVE DC 18F'0'
ECBADDR DC F'0'
TCBADDR DC F'0'
OPTIONS DC H'12',C'SOURCE EVENT' 

*   For C++, substitute the above line with
*   OPTIONS  DC    H'10',C'CXX SOURCE'

DDNAMES  DC    H'152'
         DC    CL8'NEWIN'
         DC    CL8'NEWLIN'
         DC    CL8'DUMMY'   PLACEHOLDER - NO LONGER USED
         DC    CL8'NEWLIB'
         DC    CL8'NEWRLIB'
         DC    CL8'NEWPRINT'
         DC    CL8'NEWCPRT'
         DC    CL8'NEWPUNCH'
         DC    CL8'NEWUT1'
         DC    CL8'NEWUT4'
         DC    CL8'NEWUT5'
         DC    CL8'NEWUT6'
         DC    CL8'NEWUT7'
         DC    CL8'NEWUT8'
         DC    CL8'NEWUT9'
         DC    CL8'NEWUT10'
         DC    CL8'NEWUT14'
         DC    CL8'NEWUT15'
         DC    CL8'NEWEVENT'
COMPILER DCB   DDNAME=MYCOMP,DSORG=PO,MACRF=R
         END
          PRINT NOGEN
 NODISP   CSECT
 NODISP   AMODE ANY
 NODISP   RMODE ANY
 *********************************************************************
 *  The following code performs these functions:                     *
 *      1.  Creates a nondispatchable subtask by issuing the         *
 *          ATTACHX macro with the DISP=NO parameter.                *
 *      2.  Restarts the task by making it dispatchable with the     *
            ATTACHX macro and the DISP=RESET parameter.              *
 *                                                                   *
 *********************************************************************
          SPACE 3
 ***************************************
 * Entry linkage                       *
 ***************************************
          STM   R14,R12,12(R13)
          BALR  R12,0
          USING BEGN,R12
 BEGN     DS    0H
          LA    R12,0(,R12)         CLEAN HI-BYTE OF ENTRY REGISTERS
          LA    R13,0(,R13)
          SPACE 3
          ST    R13,SAVE+4
          LA    R15,SAVE
          ST    R15,8(0,R13)
          LR    R13,R15
          EJECT
 
 ***********************************************************************
 * Attach a subtask.   The subtask is in problem state and is          *
 * nondispatchable.                                                    *
 ***********************************************************************
          SPACE 3
          ATTACHX EP=SUBTASK1,                                          X
                ECB=AMYECB,                                             X
                DISP=NO
          SPACE 3
          ST    R1,TCBADDR          SAVE SUBTASK TCB ADDRESS
          EJECT
          .                         PROCESSING CONTINUES
          .
          .
 
 ********************************************************
 *                                                      *
 * Start the subtask by resetting it to be dispatchable.*
 *                                                      *
 ********************************************************
          SPACE 3
          L     2,TCBADDR         GET TARGET TCB ADDRESS
          SPACE 3
 RESET    ATTACHX DISP=RESET,TCB=(2)
          SPACE 3
          EJECT
 *****************************************************
 * Wait until subtask completes, then detach subtask.*
 *****************************************************
          SPACE 3
          WAIT  1,ECB=AMYECB
          SPACE 3
          DETACH TCBADDR           DETACH SUBTASK
          EJECT
 ***************************************
 * End of program                      *
 ***************************************
          SPACE 3
 FINI     DS    0H
          L     R13,SAVE+4
          DROP  R12
          LM    R14,R12,12(R13)
          XR    R15,R15
          BR    R14
          EJECT
 ***********************************
 *   Define constants              *
 ***********************************
 SAVE     DC    18F'0'
 *
 TCBADDR  DC    F'0'        ADDRESS OF SUBTASK TCB
 AMYECB   DC    F'0'        END-OF-SUBTASK ECB
          SPACE 3
          EJECT
 ***********************************************
 *   Register equates                          *
 ***********************************************
          SPACE 3
 R12      EQU   12
 R13      EQU   13
 R14      EQU   14
 R15      EQU   15
         END*PROCESS COMPAT(NOCASE,MACROCASE)                          Ver1
         yregs
         sysstate archlvl=2
pgm4     csect
pgm4     amode 31
pgm4     rmode 31
*
         J     BEGIN
PROLOG   LOCTR
         DC    C'SAMPLE01'
         DC    C'AsmDate && Time: &SYSDATE &SYSTIME'
         DC    C'Ver 1.2.3'
         DC    C'All rights reserved'
CODEBG1  LOCTR
BEGIN    DS    0H
         using data,12
         save  (14,12)       save z/os's regs
         larl  12,data       use this instead of lr and ahi
*        LR    R12,R15
*        AHI   R12,data-BEGIN

         getmain r,lv=worksize
         st    13,4(1)
         lr    13,1
         using (wareas,wareasend),13
*  ...
*
*
* at termination:
*
         clrje 15,15,doterm
*        ltr   15,15
*        jz    doterm
err0     ds    0h
         la    15,8
*
doterm   ds    0h
         lr    1,13
         l     0,fsize
         l     13,4(13)
         freemain r,lv=(0),a=(1)
         return (14,12),,rc=0
*
data     ds    0f
fsize    dc    a(worksize)
*
         ltorg
wareas   dsect
save     ds    36f'0'
wareasend ds   0h
worksize equ   *-save
         end   pgm4
ceetest2 CEEENTRY PPA=mainppa,BASE=11,AUTO=DSA_SIZE
*
         TIME  DEC,ZONE=GMT
         ST    R0,TIMEGMT
         ST    R1,DATEGMT
         TIME  DEC,ZONE=LT
         ST    R0,TIMELOC
         ST    R1,DATELOC
*
         CALL  TIME,NULL                   time_t time(NULL)
         ST    R15,CurTimeT
*
         CALL  PUTS,LEGENDSTR,                                         +
               MF=(E,arglist)
*
         CALL  GMTIME,CurTimeT,            struct tm *gmtime(time_t *) +
               MF=(E,arglist)
         ST    R15,CurTimeTM
         LR    R2,R15
         CALL  ASCTIME,((R2)),             char *asctime(strcut tm *)  +
               MF=(E,arglist)
         ST    R15,CharTime
         LR    R2,R15
         L     R3,TIMEGMT
         L     R4,DATEGMT
         CALL  PRINTF,                                                 +
               (GMTSTR,(R4),(R3),(R2)),                                +
               MF=(E,arglist)
*
         CALL  LOCALTIM,CurTimeT,                                      +
               MF=(E,arglist)
         ST    R15,CurTimeTM
         LR    R2,R15
         CALL  ASCTIME,((R2)),             char *asctime(strcut tm *)  +
               MF=(E,arglist)
         ST    R15,CharTime
         LR    R2,R15
         L     R3,TIMELOC
         L     R4,DATELOC
         CALL  PRINTF,                                                 +
               (LOCSTR,(R4),(R3),(R2)),                                +
               MF=(E,arglist)
*
         CEETERM  RC=0
*
LEGENDSTR      DC    C'TIME Macro  CCYYDDDf HHMMSSth     C Runtine'
               DC    X'1500'
GMTSTR         DC    C' ZONE=GMT   %08x %08x     gmtime():    %s'
               DC    X'00'
LOCSTR         DC    C' ZONE=LT    %08x %08x     localtime(): %s'
               DC    X'00'
*
NULL           DC    A(0)
*
mainppa  CEEPPA ,
*
         EJECT  ,
*
         CEEDSA ,
*
arglist        DS    5A
*
DATEGMT        DS    F
TIMEGMT        DS    F
DATELOC        DS    F
TIMELOC        DS    F
*
CurTimeT       DS    F                 time_t
CurTimeTM      DS    A                 *(struct tm)
CharTime       DS    A                 *(char)
*
*
DSA_SIZE EQU    *-CEEDSA
*
         CEECAA ,
*
         YREGS
*
         END    ceetest2

#####

anf this too.

in_pat    dc     c'%s %i',x'00'
q_display dc     c'Quantity is %s',x'1500'
q_edpat   dc     x'40206B2020206B202120
           .
           .
           .
           xc     qty,qty
           xc     in_desc,in_desc
           call   scanf,(in_pat,in_desc,in_qoh),vl,mf=(e,p)
           l      15,in_qoh
           cvd    15,dblwrd
           mvc    q_data,q_edpat
           ed     q_data,dblwrd+4
           call   printf,(q_display,qty),vl,mf=(e,p)
           .
           .
           .
in_desc   ds     cl30
dblwrd    ds     d
in_qoh    ds     f
qty       ds     0cl11
q_data    ds     cl10
           ds     c
p         call   ,(0,0,0,0),mf=l
         MACRO
&LABEL   CHARTBL                                                       $
               &INITHEX=40,       INITIALIZATION CHARACTER             $
               &STR1=,            CHARACTER STRING TO PROCESS          $
               &STR2=,            CHARACTER STRING TO PROCESS          $
               &STR3=             CHARACTER STRING TO PROCESS
         LCLA  &STRLEN            LENGTH OF STRING INPUT
         LCLA  &I                 LOOP CONTROL
         LCLC  &CHAR              INDIVIDUAL STRING CHARACTER
.* --------------------------------------------------------------------
&STRLEN  SETA  K'&STR1+K'&STR2+K'&STR3
         AIF  (&STRLEN GT 0).BUILDIT
         MNOTE 4,'AT LEAST ONE STRING SHOULD BE ENTERED, USING DEFAULT'
.* --------------------------------------------------------------------
.BUILDIT  ANOP
&LABEL   DC 256X'&INITHEX'        TABLE DEFINITION WITH INIT CHAR
.* --------------------------------------------------------------------
.* LOOP EACH OF THE THREE STRINGS, BUILDING A DC FOR EACH CHAR .STR1GO  ANOP
&I       SETA 1
         AIF (K'&STR1 EQ 0).STR2GO
.STR1LOOP ANOP
&CHAR    SETC '&STR1'(&I,1)
         ORG  &LABEL+C'&CHAR'
         DC   C'&CHAR'
.STR1INC ANOP
&I       SETA  &I+1
         AIF (&I LE K'&STR1).STR1LOOP
.* --------------------------------------------------------------------
.STR2GO  ANOP
&I       SETA 1
         AIF (K'&STR2 EQ 0).STR3GO
.STR2LOOP ANOP
&CHAR    SETC '&STR2'(&I,1)
         ORG  &LABEL+C'&CHAR'
         DC   C'&CHAR'
.STR2INC ANOP
&I       SETA  &I+1
         AIF (&I LE K'&STR2).STR2LOOP
.* --------------------------------------------------------------------
.STR3GO  ANOP
&I       SETA 1
         AIF (K'&STR3 EQ 0).ENDSTR
.STR3LOOP ANOP
&CHAR    SETC '&STR3'(&I,1)
         ORG  &LABEL+C'&CHAR'
         DC   C'&CHAR'
.STR3INC ANOP
&I       SETA  &I+1
         AIF (&I LE K'&STR3).STR3LOOP
.* --------------------------------------------------------------------
.ENDSTR  ANOP
         ORG
         MEND
*ASM XOPTS(CICS,FE,SP)
*
* PROGRAM: KILLTASK
*
* PURPOSE: Purge CICS tasks
*
PRINT ON,NOGEN
*
DFHREGS
*
* Register Usage:
*
* R2 —> task count
* R3 code base
* R4 —> task list
* R5 —> tran list corresponding
* R6 —> EIB
* R8 —> TIOA start 3
* R9 —> TIOA offset 3 optional
* RB —> TIOA end 3
* RD —> dynamic storage
*
DFHEISTG DSECT
CVDA DS F
RESP DS F
TARGET DS PL4
FACILITY DS CL4
FACTYPE DS F
TASKCNT DS F
LOGTEXT DS ØH
LOGPART1 DS CL32
LOGTASK DS CLØ7
LOGPART2 DS CLØ7
LOGTRAN DS CLØ4
LOGPART3 DS CLØ7
LOGTERM DS CLØ4
LOGPART4 DS CLØ7
LOGUSER DS CLØ8
LOGPART5 DS CL14
LOGTYPE DS CLØ5
LOGTEXTL EQU *-LOGTEXT
LOGL DS H
TIOALEN DS H
TRANPARM DS CL4
USERPARM DS CL8
HOWSTART DS CL2
KILLFLAG DS C
PARMFLAG DS C
*
KILLTASK DFHEIENT CODEREG=(3),DATAREG=(13),EIBREG=(6)
KILLTASK AMODE 31
KILLTASK RMODE ANY
*
EXEC CICS HANDLE CONDITION ERROR(DUMP)
*
BAL R7,LIST get list of tasks
L R2,TASKCNT
LTR R2,R2
BZ RETURN
XC PARMFLAG,PARMFLAG initialize to no input parms
CLC EIBTRNID,=C'KILL'
BNE INITIAL
*
EXEC CICS ASSIGN STARTCODE(HOWSTART)
*
CLC HOWSTART,=C'TD' possible terminal input?
BNE INITIAL n - skip receive
*
EXEC CICS RECEIVE SET(R8) +
LENGTH(TIOALEN)
*
LH R11,TIOALEN
C R11,=F'1Ø' minimum meaningful tioalen?
BL INITIAL n - skip parse
LA R1Ø,1 set parsing increment
AR R11,R8 point to last byte tioa
S R11,=F'6' ... less 6
LA R8,4(R8) begin parse after transid
LA R9,4 initialize tioa offset
GETPARM DS ØH
TM PARMFLAG,X'Ø3' both parms loaded?
BC 3,INITIAL y - we're done parsing
TM PARMFLAG,X'Ø1' tran parm already loaded?
BC 3,GETPARM1 y - skip parse for TRAN=
CLC Ø(5,R8),=C'TRAN='
BNE GETPARM1
LA R8,5(R8) skip over TRAN=
LA R9,5(R9) bump tioa offset accordingly
LH R12,TIOALEN
SR R12,R9
BCTR R12,RØ
C R12,=F'3'
BNH LOADTRAN
LA R12,3
LOADTRAN LA R7,TRANPARM
EX R12,TRANMVC
TR TRANPARM,XLTAB blank any valid delimiter
LA R12,3
PADTRAN CLI Ø(R7),X'4Ø'
BNE PADTRAN1
MVI 1(R7),X'4Ø'
PADTRAN1 LA R7,1(R7)
BCT R12,PADTRAN
OI PARMFLAG,X'Ø1' signal tran parm input
B GETPARM1
*
TRANMVC MVC Ø(1,R7),Ø(R8)
*
GETPARM1 TM PARMFLAG,X'Ø2' user parm already loaded?
BC 3,GETPARM2 y - skip parse for USER=
CLC Ø(5,R8),=C'USER='
BNE GETPARM2
LA R8,5(R8) skip over USER=
LA R9,5(R9) bump tioa offset accordingly
LH R12,TIOALEN
SR R12,R9
BCTR R12,RØ
C R12,=F'7'
BNH LOADUSER
LA R12,7
LOADUSER LA R7,USERPARM
EX R12,USERMVC
TR USERPARM,XLTAB blank any valid delimiter
LA R12,7
PADUSER CLI Ø(R7),X'4Ø'
BNE PADUSER1
MVI 1(R7),X'4Ø'
PADUSER1 LA R7,1(R7)
BCT R12,PADUSER
OI PARMFLAG,X'Ø2' signal user parm input
GETPARM2 LA R9,1(R9) increment tioa offset
BXLE R8,R1Ø,GETPARM
B INITIAL end parse
*
USERMVC MVC Ø(1,R7),Ø(R8)
*
INITIAL DS ØH
XC KILLFLAG,KILLFLAG initialize kill flag
MVC LOGPART1,MSGPART1 set up CSMT log msg
MVC LOGPART2,MSGPART2
MVC LOGPART3,MSGPART3
MVC LOGPART4,MSGPART4
MVC LOGPART5,MSGPART5
LA R7,LOGTEXTL get length for TD write
STH R7,LOGL
MVC CVDA,DFHVALUE(PURGE) set up task purge
MVC LOGTYPE,PURGE
BAL R7,KILL do first level cancels
CLI KILLFLAG,X'FF' were there any?
BNE RETURN n - then we're done
EXEC CICS DELAY FOR SECONDS(3)
BAL R7,LIST see what tasks remain
L R2,TASKCNT
LTR R2,R2
BZ RETURN
MVC CVDA,DFHVALUE(FORCEPURGE) we're done kidding around
MVC LOGTYPE,FORCE
BAL R7,KILL do second level cancels
B RETURN
*
LIST DS ØH
*
EXEC CICS INQUIRE TASK LIST +
LISTSIZE(TASKCNT) +
SET(R4) +
SETTRANSID(R5)
*
BR R7
*
KILL DS ØH
ZAP TARGET,Ø(4,R4) get taskno from list
CP TARGET,EIBTASKN no suicides
BE KILLNEXT
*
EXEC CICS INQUIRE +
TASK(TARGET) +
FACILITY(FACILITY) +
FACILITYTYPE(FACTYPE) +
USERID(LOGUSER)
*
CLI PARMFLAG,X'ØØ'
BE KILLØØ
CLI PARMFLAG,X'Ø1'
BE KILLØ1
CLI PARMFLAG,X'Ø2'
BE KILLØ2
CLI PARMFLAG,X'Ø3'
BE KILLØ3
B RETURN illogic - shouldn't get here
KILLØØ LA R8,EXCLTAB check exclude table
LA R1Ø,4
LR R11,R8
LA R11,EXCLLEN(R11)
BCTR R11,RØ
KILLØØX CLC Ø(4,R8),Ø(R5) task's tran in exclude list?
BE KILLNEXT y - then bypass cancel
BXLE R8,R1Ø,KILLØØX
B KILLTSK
KILLØ1 CLC TRANPARM,Ø(R5)
BE KILLTSK
B KILLNEXT
KILLØ2 CLC USERPARM,LOGUSER
BE KILLTSK
B KILLNEXT
KILLØ3 CLC TRANPARM,Ø(R5)
BNE KILLNEXT
CLC USERPARM,LOGUSER
BE KILLTSK
B KILLNEXT
KILLTSK MVI KILLFLAG,X'FF' show that we fired
*
EXEC CICS SET +
TASK(TARGET) +
PURGETYPE(CVDA) +
RESP(RESP)
*
CLC RESP,DFHRESP(NORMAL)
BNE KILLNEXT
MVC LOGTERM,=4X'4Ø' clear termid
CLC FACTYPE,DFHVALUE(TERM) is facility a terminal?
BNE KILLLOG n - don't log facility
MVC LOGTERM,FACILITY
*
KILLLOG UNPK LOGTASK,TARGET format log msg
OI LOGTASK+6,X'FØ'
MVC LOGTRAN,Ø(R5)
*
EXEC CICS WRITEQ TD +
QUEUE('CSMT') +
FROM(LOGTEXT) +
LENGTH(LOGL)
*
KILLNEXT LA R4,4(R4) bump to next task in list
LA R5,4(R5) next tran in list
BCT R2,KILL repeat kill for each task
BR R7
*
DUMP DS ØH
EXEC CICS DUMP TASK DUMPCODE(EIBTRNID)
B RETURN
*
RETURN DS ØH
EXEC CICS RETURN
*
MSGPART1 DC CL32'KILLTASK issued cancel for task '
MSGPART2 DC CLØ7', tran '
MSGPART3 DC CLØ7', term '
MSGPART4 DC CLØ7', user '
MSGPART5 DC CL14', purgetype = '
*
PURGE DC CLØ5'PURGE'
FORCE DC CLØ5'FORCE'
*
EXCLTAB DS ØH Tran Exclude Table
DC CL4'AAON' Abend-Aid
DC CL4'DSNC' DB2
DC CL4'OMEG' Omegamon
EXCLLEN EQU *-EXCLTAB
*
XLTAB DS ØH
ØØØØ49Ø5
DC XL16'4ØØ1Ø2Ø3Ø4Ø5Ø6Ø7Ø8Ø9ØAØBØCØDØEØF' ØØ = null
DC XL16'1Ø1112131415161718191A1B1C1D1E1F'
DC XL16'2Ø2122232425262728292A2B2C2D2E2F'
DC XL16'3Ø3132333435363738393A3B3C3D3E3F'
DC XL16'4Ø4142434445464748494A4Ø4C4D4E4F' 4B = .
DC XL16'5Ø5152535455565758595A5B5C5D5E5F' 5E = ;
DC XL16'6Ø6162636465666768696A4Ø6C6D6E6F' 6B = ,
DC XL16'7Ø7172737475767778794Ø7Ø7C7D7E7F' 7A = :
DC XL16'8Ø8182838485868788898Ø8Ø8C8D8E8F'
DC XL16'9Ø9192939495969798999Ø9Ø9C9D9E9F'
DC XL16'AØA1A2A3A4A5A6A7A8A9AØAØACADAEAF'
DC XL16'BØB1B2B3B4B5B6B7B8B9BØBØBCBDBEBF'
DC XL16'CØC1C2C3C4C5C6C7C8C9CØCØCCCDCECF'
DC XL16'DØD1D2D3D4D5D6D7D8D9DØDØDCDDDEDF'
DC XL16'EØE1E2E3E4E5E6E7E8E9EØEØECEDEEEF'
DC XL16'FØF1F2F3F4F5F6F7F8F9FØFØFCFDFEFF'
*
LTORG
END KILLTASKThus, additional EBCDIC encodings were created; these are grouped in “code pages” giving the
characters assigned to each of 256 possible bit patterns. It was difficult to exchange data and
programs because the same character encoding was often different among code pages. For
example, Table 167 shows some of the varying hexadecimal encodings used in current EBCDIC
tables, for these language groupings:
Code Page Description
037 Original EBCDIC: this “ancestral” EBCDIC code page is the code page used for
Assembler Language programs
500 Modern EBCDIC; a few special characters have different encodings than in code
page 037
1047 International-1
1140 United States, Canada, Netherlands, Australia, New Zealand, Portugal, Brazil
1141 Austria, Germany
1142 Denmark, Norway
1143 Finland, Sweden
1144 Italy
1145 Spain, Latin American Spanish
1146 United Kingdom
1147 France
1148 International-1, supporting most “Western” languages
1149 Iceland
1153 Eastern Europe
All the above code pages support the euro character ?.
Table 167 shows why you can't assume that a given encoding represents an expected character.
As your program is moved from region to region (and code page to code page), many of the
encodings for the characters are different.

Char 	037 500 1047 1140 1141 1142 1143 1144 1145 1146 1147 1148 1149 1153
$ 	5B   5B   5B   5B   5B   67   67   5B   5B   4A   5B   5B   5B   5B
@ 	7C   7C   7C   7C   B5   80   EC   B5   7C   7C   44   7C   AC   7C
# 	7B   7B   7B   7B   7B   4A   63   B1   69   7B   B1   7B   7B   7B
| 	4F   BB   4F   4F   BB   BB   BB   BB   4F   4F   BB   BB   BB   6A
¬ 	5F   BA   B0   5F   BA   BA   BA   BA   5F   5F   BA   BA   BA   —
[ 	BA   4A   AD   BA   63   9E   B5   90   4A   B1   90   4A   AE   4A
] 	BB   5A   BD   BB   FC   9F   9F   51   5A   BB   B5   5A   9E   5A
{ 	C0   C0   C0   C0   43   9C   43   44   C0   C0   51   C0   8E   C0
} 	D0   D0   D0   D0   DC   47   47   54   D0   D0   54   D0   9C   D0
? 	 —    —    —   9F   9F   5A   5A   9F   9F   9F   9F   9F   9F   9FCOPYPROG CSECT 
COPYPROG RMODE ANY 
COPYPROG AMODE 31 
	GETMAIN R,LV=Arealen,LOC=(BELOW,64) 
	LR R11,R1 
USING 	MYAREA,R11 
USING 	IHADCB,InDCB 
USING 	DCBE,INDCBE 
	MVC IHADCB(AreaLen),MYDCB Copy DCB and DCBE 
	LA R0,DCBE Point DCB copy to 
	T R0,DCBDCBE DCBE copy 
	OPEN (IHADCB,),MF=(E,INOPEN) Open to read 
	LTR R15,R15 Branch if DDname seems not 
	BNZ ... to be defined 
* Loop to read all the records 
LOOP 	GET INDCB Get address of a record in R1 
*... Process a record 
	B LOOP Branch to read next record 
*    more 	
* I/O error routine for INDCB 
IOERROR SYNADAF ACSMETH=QSAM Get message area 
	MVI 6(R1),X'80' Set WTO MCS flags 
	MVC 8(16,R1),=CL16’I/O Error’ Put phrase on binary fields 
	MVC 128(4,R1),=X'00000020' Set ROUTCDE=11 (WTP) 
	WTO MF=(E,4(R1)) Write message to user SYNADRLS Release SYNADAF area, fall through 
* The GET macro branches here after all records have been read 
EOD CLOSE MF=(E,INOPEN) Close the data set 
* FREEPOOL not needed due to RMODE31=BUFF ... 

* Rest of program 

MYDCB DCB DDNAME=INPUT,MACRF=GL,RECFM=VB, 
* DCBE=MYDCBE 
MYDCBE DCBE EODAD=EOD,SYNAD=IOERROR,BLKSIZE=0,RMODE31=BUFF 
OPEN (,INPUT),MF=L,MODE=24 
AreaLen EQU *-MYDCB 

DCBD DSORG=QS,DEVD=DA 
	IHADCBE Could be above 16 MB line 
MYAREA DSECT 
INDCB 	DS XL(DCBLNGQS) 
INDCBE 	DS XL(DCBEEND-DCBE) 
INOPEN 	OPEN (,),MF=L* TC - COPY FROM A VB DATA SET TO A U DATA SET.
* SOURCE IS DDNAME A2 (VB)
* TARGET IS DDNAME A1 (U) - PDS UPDATES ARE DONE UPDATE-IN-PLACE!!!
*******************************************************************
* THIS ROUTINE HAS NO ERROR CHECKING AT ALL.  IT ASSUMES THE
* INPUT DATA SET EXACTLY MATCHES THE EXISTING OUTPUT MEMBER
* IN THE NUMBER OF LINES AND THE LENGTH OF EACH LINE.
* IT ALSO ASSUMES THE DATA SETS CAN BE READ OR WRITTEN TO.
* IF EITHER IF THESE ARE NOT TRUE, RUN FOR THE HILLS BECAUSE THERE
* IS GONNA BE A LOUD *BOOM*
*
* THERE IS AN ESTAE TO CATCH 913 OR OPEN ABENDS BUT IT IS PLACED
* SO THAT IT ISN'T ACTIVE AT CLOSE.  THUS SPACE ABENDS MAY NOT BE
* CAUGHT ON THE FINAL CLOSE.
*
*******************************************************************
TC       CSECT
TC       AMODE 31
TC       RMODE ANY
         STM   14,12,12(13)
         LR    12,15
         USING TC,12
         XR    6,6                 SET R6=0 MEANING OUTPUT DSORG=PS
         L     1,0(1)              GET ADDR OF 1ST PARM
         CLI   3(1),C'S'           IS IT REALLY PS?
         BE    ITISPS              YES
         LA    6,1(0,0)            NO, IT MUST BE PO, R6=1
ITISPS   DS    0H
         LA    0,DYNSIZE
         GETMAIN  RU,LV=(0),SP=0,LOC=BELOW
         ST    1,8(13)             SAVE SAVEAREA ADDR IN CALLERS AREA
         ST    13,4(0,1)           SAVE CALLERS  ADDR IN OWN SAVEAREA
         LR    13,1                SET UP OWN SAVEAREA
*---- MOVE DCBS BELOW THE LINE -------
         LA    VDCBP,VDCB-SAVEAREA(13)
         LA    UDCBP,UDCB-SAVEAREA(13)
         LR    2,VDCBP             GET ADDRESS TO STORE DCBS/DCBES
         LA    4,VDCB              GET ADDRESS OF STATIC DCBS/DCBES
         LA    3,ENDDCBS-VDCB      GET LENGTH OF DCBS AND DCBES
         LR    5,3
         MVCL  2,4                 MOVE DCBS/DCBES BELOW 16M LINE
         LA    1,DCBLNGPS(VDCBP)   GET ADDRESS OF INPUT DCBE
         ST    1,0(VDCBP)          STORE INTO INPUT DCB
         LA    1,DCBLNGPS(UDCBP)   GET ADDRESS OF OUTPUT DCBE
         ST    1,0(UDCBP)          STORE INTO OUTPUT DCB
*---- SET UP ESTAE ----------------------
ABENDPT  LA    ABENDREG,ABENDPT
         LA    10,STAE@-SAVEAREA(13)
         STM   0,15,SAVEREGS-SAVEAREA(13)
         CLI   POSTESTAE-SAVEAREA(13),X'FF'
         BNE   ESTAE1
         B     EODAD
ESTAE1   MVI   POSTESTAE-SAVEAREA(13),X'FF'
         ESTAE STAEXIT,CT,MF=(E,(10))
*---- COPY INPUT FILE TO OUTPUT  --------
         USING IHADCB,UDCBP
         LA    10,OPENLST-SAVEAREA(13)
         LTR   6,6                 IS OUTPUT SEQUENTIAL
         BZ    OPENPS              YES
         OPEN  ((VDCBP),INPUT,(UDCBP),UPDAT),MODE=31,MF=(E,(10))
         B     READLOOP
*
OPENPS   DS    0H
         MVC   4(DCBLNGPS-4,UDCBP),MDCB+4-SAVEAREA(13)
         OPEN  ((VDCBP),INPUT,(UDCBP),OUTPUT),MODE=31,MF=(E,(10))
*
READLOOP GET   (VDCBP)             READ INPUT (VB) FILE
         LA    READBUF,4(0,1)      GET ADDRESS OF DATA JUST READ IN
         LH    READLEN,0(1)        GET LENGTH OF DATA JUST READ IN
         SH    READLEN,=H'4'       SUBTRACT RDW LENGTH
         LTR   6,6                 IS OUTPUT SEQUENTIAL
         BZ    WRITEPS             YES
         GET   (UDCBP)             READ OUTPUT FILE TO START UPDATE
         LR    WRITEBUF,1          GET BUFFER ADDRESS FOR WRITE
         LH    WRITELEN,DCBLRECL   GET LENGTH FOR WRITE
         MVCL  WRITEBUF,READBUF    COPY READ LINE TO WRITE BUFFER
         PUTX  (UDCBP)             REWRITE OUTPUT LINE
         B     READLOOP            GO BACK FOR MORE
*
WRITEPS  STH   READLEN,DCBLRECL
         LA    0,4(1)              USE READ BUFFER AS WRITE BUFFER
         PUT   (UDCBP)
         B     READLOOP
*---- END OF READ LOOP ------------------
SYNAD    DS    0H
EODAD    DS    0H
         ESTAE 0,MF=(E,(10))
         LA    10,CLOSLST-SAVEAREA(13)
         CLOSE ((UDCBP),,(VDCBP)),MODE=31,MF=(E,(10))
         LA    0,DYNSIZE           SETUP FOR EXIT
         XR    2,2                 ASSUME NO ABEND - RETURN CODE 0
         CLI   ABENDED-SAVEAREA(13),X'FF'  SEE IF ABEND OCCURED
         BNE   GOODBYE
         LA    2,4(0,0)            ABENDED - RETURN CODE 4
GOODBYE  LR    1,13
         L     13,4(13)
         FREEMAIN RU,LV=(0),A=(1),SP=0  FREE DYNAMIC STORAGE
         LR    15,2                RETURN 0 OR 4 IN REG 15
         L     14,12(13)           GET OLD REGISTERS
         LM    0,12,20(13)         GET OLD REGISTERS
         BR    14                  RETURN TO CALLER
*---- ESTAE PROCESSING ROUTINES ---------
STAEXIT  DS    0H
         DROP  12
         USING STAEXIT,2
         LR    2,15
         LA    3,12(0,0)
         CR    0,3                 IF R0 NOT EQUAL 12
         BE    NOWORKA             NO WORK AREA
         SETRP RETADDR=STAERTN,RC=4,FRESDWA=YES,DUMP=NO,RETREGS=YES
         LA    15,4(0,0)
         LA    0,STAERTN
         BR    14
NOWORKA  SETRP RC=0
         BR    14
         DROP  2
         USING TC,12
STAERTN  LM    0,15,SAVEREGS-SAVEAREA(13) RESTORE ALL THE OLD REGS
         MVI   ABENDED-SAVEAREA(13),X'FF'
         BR    ABENDREG                   BRANCH BACK TO ABEND PROGRAM
*---- STORAGE DEFINITIONS AND EQUATES ---
WRITEBUF EQU   2                   REGISTER 2 POINTS TO WRITE BUFFER
WRITELEN EQU   3                   REGISTER 3 IS WRITE BUFFER LENGTH
READBUF  EQU   4                   REGISTER 4 POINTS TO READ BUFFER
READLEN  EQU   5                   REGISTER 5 IS READ BUFFER LENGTH
UDCBP    EQU   8                   REGISTER 8 POINTS TO WRITE DCB
VDCBP    EQU   9                   REGISTER 9 POINTS TO READ DCB
ABENDREG EQU   11                  REG 11 IS ADDR TO GOTO AFTER ABEND
**** DCBS AND DCBES THAT WILL BE COPIED BELOW THE LINE ****
SAVEAREA DS    9D
SAVEREGS DS    16F
STAE@    ESTAE MF=L
VDCB     DCB   DSORG=PS,MACRF=(GL),DDNAME=A2,DCBE=VDCBE
VDCBE    DCBE  RMODE31=BUFF,SYNAD=SYNAD,EODAD=EODAD
UDCB     DCB   DSORG=PS,MACRF=(GL,PL),DDNAME=A1,DCBE=UDCBE
UDCBE    DCBE  RMODE31=BUFF,SYNAD=SYNAD,EODAD=EODAD
MDCB     DCB   DSORG=PS,MACRF=(PM),DDNAME=A1,DCBE=UDCBE
OPENLST  OPEN  (,,,),MODE=31,MF=L
CLOSLST  CLOSE (,,),MODE=31,MF=L
POSTESTAE DC   XL1'00'
ABENDED   DC   XL1'00'
ENDDCBS  DS    0D
DYNSIZE  EQU   *-SAVEAREA
         LTORG
         DCBD  DSORG=PS
         IHASDWA
TC       CSECT
         END   TC
   





Assembler

Main page

New opcodes

SITE SERVICES
Contact Us
Search
Site Map


 
  Home -¯ HLASM -¯ New HLASM commands



HLASM - High Level Assembler Language: New Commands 


High Level Assembler Language is used mostly these days by systems programmers for writing exits, and by developers of systems software. This is a summary of some of the operations that have changed, or been added, in recent years. For more detailed information check POPs (s/390), or Pops (z/OS), the Principles of Operations manual.






Branch Instructions that Don't Use the Stack 

BAL and BALR: Branch And Link/Register is obsolete in S/390. Unless you need backward compatibility with MVS/XA, use BAS/BASR. BAL/R puts non-address information in the high-order bits. 

BAS and BASR: Branch And Save/Register is used to branch within a program, or to another program with the same AMODE (addressing mode). If you need to branch between 24 and 31-bit programs, use BASSM and BSM. 

label    BAS     R14,ROUTINE
label    BASR    R14,R15 

BASSM and BSM: Branch And Save And Set Mode is used to branch to a program in a different AMODE. Use Branch and Set Mode (BSM) with zero in the first operand to return to the calling program. 



--------------------------------------------------------------------------------

Halfword Immediate Instructions 

AHI, CHI, LHI and MHI: The Halfword Immediate instructions work just like the CLI instruction, but the 16-bit binary value is added to, compared with, loaded from, or multiplied by the two low order bytes in the register. 

label    AHI     R3,64
label    CHI     R3,64
label    LHI     R3,64
label    MHI     R3,64 



--------------------------------------------------------------------------------

Multiply Single Instruction 

MSR: The Multiply Single operation only uses two registers. No condition code is set, and no overflow indication is given. 

label   MSR     R3,R8 



--------------------------------------------------------------------------------

String Commands 

CUSE: Compare Until Substring Equal compares two strings, looking for an identical substring in both of them. The operation uses two pairs of even-odd registers. The first pair contain the address and length of the first string: the second pair contain the address and length of the second string. Registers 0 and 1 contain the length of the substring and the padding byte, if one string is shorter than the other. The condition code is set, and if a match is found, the addresses of the two substrings are returned in registers 1 and 2. 

label    CUSE     R4,R8 

CLST: Compare Logical String compares the two strings whose addresses are in the two registers. Register 0 contains the character used to identify the end of string. The condition code is set, and if a mismatch is found before the end of the shorter string, the addresses of the unequal bytes in each string are returned in registers 1 and 2. 

label    CLST     R4,R5 

MVST: Move Logical String moves the string at the location specified by the second register to the address specified by the first. Register 0 contains the character used to identify the end of string. 

label    MVST      R4,R5 

SRST: Search String searches the string whose starting address is in the second register, and ending address in the first register. Register 0 contains the character to search for. If the character is found, its address is returned in register 1. If a match is not found, register 2 may contain the address of the next byte to be searched. 

label    SRST     R4,R5 



--------------------------------------------------------------------------------

Test Under Mask 

TMH and TML: These Test under Mask instructions test the high or low-order two bytes of the register with the 16-bit operand. The condition code is set the same way as in TM (Test under Mask). 

label    TMH     R3,MASK
label    TML     R3,MASK 



--------------------------------------------------------------------------------

Compare and Swap and Purge 

CSP: This new instruction is not yet detailed in POPs. But, you can read the new pages here. 



 
AMODE 31 I/O Issues, continued
?? So we do a survey of the related macros, control blocks, and
data areas for working with I/O in AMODE 31, continued:
 Buffers - default to below the line unless you use a DCBE
with RMODE31=BUFF
 Record areas - if in program, location is where program is
?? If program is reentrant or you want record areas outside your
program, use GETMAIN with LOC=({ANY|24|31|RES}); save
the R1 value returned to you in a different register; can tie
that register to a DSECT with a record layout if desired
 OPEN and CLOSE macros
?? If program is reentrant or if running RMODE ANY, need to
use list and execute forms and point to DCBs that were
copied to getmained storage
?? Furthermore, if a program is running RMODE ANY, these
macros must either be copied below the line, or if they are
issued from above the line, they must also include MODE=31
 GET and PUT macros - no special concerns
?? On the following pages are two sample programs with various
mixes of these characterstics
 Always assuming AMODE 31
Copyright c 2005 by Steven H. Comstock 4 I/O and AMODE 310001CC                       +MYDCB_SYP DC   0F'0'          ORIGIN ON WORD BOUNDARY                   01-DCB 
                             +*                       DIRECT ACCESS DEVICE INTERFACE                         
0001CC 0000022C              +         DC    A(MYDCBE_SYP)  DCBE ADDRESS                              01-DCB 
0001D0 0000000000000000      +         DC    BL12'0'        FDAD, DVTBL                               01-DCB 
0001DC 00000000              +         DC    A(0)           KEYLEN, DEVT, TRBAL                       01-DCB 
                             +*                       COMMON ACCESS METHOD INTERFACE                         
0001E0 00                    +         DC    AL1(0)         BUFNO, NUMBER OF BUFFERS                  01-DCB 
0001E1 000001                +         DC    AL3(1)         BUFCB, BUFFER POOL CONTROL BLOCK          01-DCB 
0001E4 0000                  +         DC    AL2(0)         BUFL, BUFFER LENGTH                       01-DCB 
0001E6 4000                  +         DC    BL2'0100000000000000' DSORG, DATA SET ORGANIZATION       01-DCB 
0001E8 00000001              +         DC    A(1)           IOBAD FOR EXCP OR RESERVED                01-DCB 
                             +*                       FOUNDATION EXTENSION                                   
0001EC 84                    +         DC    BL1'10000100'  BFTEK, BFALN, DCBE INDICATORS             01-DCB 
0001ED 000001                +         DC    AL3(1)         EODAD (END OF DATA ROUTINE ADDRESS)       01-DCB 
0001F0 90                    +         DC    BL1'10010000'  RECFM (RECORD FORMAT)                     01-DCB 
0001F1 000000                +         DC    AL3(0)         EXLST (EXIT LIST ADDRESS)                 01-DCB 
                             +*                       FOUNDATION BLOCK                                       
0001F4 E2E8E2D7D9C9D5E3      +         DC    CL8'SYSPRINT'  DDNAME                                    01-DCB 
0001FC 02                    +         DC    BL1'00000010'  OFLGS (OPEN FLAGS)                        01-DCB 
0001FD 00                    +         DC    BL1'00000000'  IFLGS (IOS FLAGS)                         01-DCB 
0001FE 0050                  +         DC    BL2'0000000001010000' MACR (MACRO FORMAT)                01-DCB 
                             +*                       BSAM-BPAM-QSAM INTERFACE                               
000200 00                    +         DC    BL1'00000000'  OPTCD, OPTION CODES                       01-DCB 
000201 000001                +         DC    AL3(1)         CHECK OR INTERNAL QSAM SYNCHRONIZING RTN. 01-DCB 
000204 00000001              +         DC    A(1)           SYNAD, SYNCHRONOUS ERROR RTN. (3 BYTES)   01-DCB 
000208 0000                  +         DC    H'0'           INTERNAL ACCESS METHOD FLAGS              01-DCB 
00020A 0000                  +         DC    AL2(0)         BLKSIZE, BLOCK SIZE                       01-DCB 
00020C 00000000              +         DC    F'0'           INTERNAL ACCESS METHOD FLAGS              01-DCB 
000210 00000001              +         DC    A(1)           INTERNAL ACCESS METHOD USE                01-DCB 
                             +*                            QSAM INTERFACE                                    
000214 00000001              +         DC    A(1)           EOBAD                                     01-DCB 
000218 00000001              +         DC    A(1)           RECAD                                     01-DCB 
00021C 0000                  +         DC    H'0'           QSWS (FLAGS) AND EITHER DIRCT OR BUFOFF   01-DCB 
00021E 0000                  +         DC    AL2(0)         LRECL                                     01-DCB 
000220 00                    +         DC    BL1'00000000'  EROPT, ERROR OPTION                       01-DCB 
000221 000001                +         DC    AL3(1)         CNTRL                                     01-DCB 
000224 00000000              +         DC    H'0,0'         RESERVED AND PRECL                        01-DCB 
000228 00000001              +         DC    A(1)           EOB, INTERNAL ACCESS METHOD FIELD         01-DCB 
                      00060   MYDCB_SYP_L EQU *-MYDCB_SYP        
					  
					  0936000	COPY ASMMSP ENABLE STRUCTURED PROGRAMMING MACROS
	SYSSTATE ARCHLVL=2 USE Z/ARCHITECTURE INSTRUCTIONS
	ASMMREL ON USE RELATIVE BRANCHING
SAUTH CSECT
SAUTH AMODE 31 ABOVE THE LINE TO GET BEAR
SAUTH RMODE ANY
	STM 14,12,12(13)
	LARL 8,RECOVERY RECOVERY ROUTINE ADDRES
	LARL 9,RETRY RECOVERY ROUTINE PARAMETER ADDRESS
	ESTAE (8),CT,PARAM=(9),SDWALOC31=YES ESTABLISH ESTAE
	LHI 15,-2 MAX EVEN 31 BIT ADDRESS -> S0C4-11 X
*	SEE BOTH TEA AND BEAR
	BR 15 BRANCH TO HELL (PSW USELESS)
	RETRY DS 0H
	ESTAE 0 REMOVE THE ESTAE
	DC H'0' INVALID OPERATION CODE -> S0C1-1 
RECOVERY DS 0H
	IF CHI,0,EQ,X'0C' Q.SDWA MISSING
* WTO 'SDWA MISSING' may change registers 0,1,14,15
	SR 15,15 PERCOLATE
	BR 14 RETURN TO RTM=PERCOLATE BY DEFAULT
	ENDIF
	STM 14,12,12(13) SAVE REGISTERS
	19
	LR 3,1 SAVE POINTER TO SDWA
	USING SDWA,3 MAP SYSTEM DIAGNOSTIC SAVE AREA
*... see next slide and include here
	SR 0,0
	ST 0,SDWASR00
	MVC SDWASR01,SDWAABCC SAVE ABEND CODE IN R1
	MVC SDWASR03,SDWATRAN SAVE TRANSLATION EXCEPTION ADDRESS
	L 4,SDWAXPAD ADDRESS OF SDWA EXTENSION POINTERS
	USING SDWAPTRS,4
	20
	L 5,SDWASRVP RECORDABLE EXTENSION
	USING SDWARC1,5
	MVC SDWASR02,SDWACRC SAVE REASON CODE
	DROP 5
	L 6,SDWAXEME 64-BIT EXTENSION
	USING SDWARC4,6
	MVC SDWASR04,SDWABEA+4 SAVE BREAKING EVENT ADDRESS-31
	DROP 6
	DROP 4
*... END next slide and include here	
	SETRP RC=4,RETADDR=(2),WKAREA=(3),RETREGS=YES
	DROP 3
	LM 14,12,12(13) LOAD REGISTERS
	BR 14 RETURN TO RTM
*---------------------------------------------------------------------*
	IHASDWA GENERATE SDWA DSECT
	END SAUTH END ASSEMBLY	R0       EQU   0
....
R15      EQU   15
SUOFTRAN CSECT
         USING *,R10,R11           ESTABLISH ADDRESSABILITY
         STM   R14,R12,12(R13)     SAVE3 REGISTERS
         LR    R10,R15             SET FIRST BASE REGISTER
         LA    R11,2048(R10)       SET SECOND BASE REGISTER
         LA    R11,2048(R11)       AND INCREMENT TO PROPER VALUE
         LR    R12,R13             STORE PREVIOUS SA ADDRESS
GETMA1   GETMAIN R,LV=400
         LR    R9,R1 (R9) = ADDR. OF THE ALLOCATED VIRTUAL STORAGE AREA
         LTR   15,15
         BZ    OKGETMA1
         LA    R15,4
         B     ENDRET
OKGETMA1 EQU   *
         USING VARIDSEC,R9
         LA    R13,SAVE3           LOAD ADDRESS OF THIS SAVE3 AREA
         ST    R12,SAVE3+4         CHAIN BACKWARDS
         ST    R13,8(R12)          CHAIN FORWARD
         OPEN  (PRINTDCB,(OUTPUT))
         MVC   FILE(8),=C'SUPEFILE'
*            DEFINE VARIABLE FILE FOR DIALOG SERVICE
*            RECN
         CALL  ISPLINK,(VDEFINE,NRECN,RECN,FIXED,LRECN),VL
*            MEMB
         CALL  ISPLINK,(VDEFINE,NMEMB,MEMB,CHAR,LMEMB),VL
*            VOLSER
         CALL  ISPLINK,(VDEFINE,NVOLSER,VOLSER,CHAR,LVOLSER),VL
*            CATLG
         CALL  ISPLINK,(VDEFINE,NCATLG,CATLG,CHAR,LCATLG),VL
*            DSN
         CALL  ISPLINK,(VDEFINE,NDSN,DSN,CHAR,LDSN),VL
*            DSNM
         CALL  ISPLINK,(VDEFINE,NDSNM,DSNM,CHAR,LDSNM),VL
*            SDATE
         CALL  ISPLINK,(VDEFINE,NSDATE,SDATE,CHAR,LSDATE),VL
*            STIME
         CALL  ISPLINK,(VDEFINE,NSTIME,STIME,CHAR,LSTIME),VL
*            SEL
         CALL  ISPLINK,(VDEFINE,NSEL,SEL,CHAR,LSEL),VL
*            RETURN CODE
         CALL  ISPLINK,(VDEFINE,NRC,RC,FIXED,LRC),VL
*            REPLY
         CALL  ISPLINK,(VDEFINE,NR,R,CHAR,LR),VL
DIFIPANE LA    R15,0
         ST    R15,RC
         ST    R15,RECN
         MVC   MEMB(8),BLANK
         MVC   VOLSER(6),BLANK
         MVC   CATLG(1),BLANK
         MVC   R,BLANK
         MVI   SEL,C' '
         CALL  ISPLINK,(DISPLAY,PNLOFTR1),VL
         LTR   R15,R15
         BNZ   ENDPRO3
         MVC   PRINT,BLANK
         MVC   PRINT+1(8),=C'CLASSES='
         MVC   PRINT+9(8),MEMB
         PUT   PRINTDCB,PRINT
*            PREPARE THE JOB
*            SUBMIT THE JOB FOR SPOOL
*            ALLOCATE INTERNAL READER DATA SET
         CALL  DYINTRDR,(DDNAMEAD),VL
*            OK ALLOCATION
*            INTERNAL READER DATASET ALLOCATED SUCCESSFULLY
         LA    R1,DDWORKNA
         L     R3,DDNAMEAD
         MVC   0(8,R1),0(R3)
*            ALLOCATION OF THE INTERNAL READER DATA SET COMPLETED
*            OPEN OWN DCB'S: SUBMIDCB
         LA    R2,SUBMIDCB         SUBMIT DCB
         USING IHADCB,R2
         MVC   DCBDDNAM(8),DDWORKNA
         DROP  R2
         OPEN  (SUBMIDCB,(OUTPUT))
         MVC   PRINT,BLANK
         MVC   PRINT+1(33),=C'THE FOLLOWING JCL WAS SUBMITTED: '
         PUT   PRINTDCB,PRINT
         TIME  BIN
         ST    R1,NUMBER
         CALL  SUYYDD2K,(NUMBER,STAMP),VL
         TIME  BIN
         ST    R0,NUMBER
         CALL  SUTIME,(NUMBER,TIMESTAM),VL
         MVC   PRINT,BLANK
         MVC   PRINT+1(8),TIMESTAM
         PUT   PRINTDCB,PRINT
         CLC   TIMESTAM(1),=C' '   TEST IF BLANK
         BNE   NOBLANK1
         MVC   TIMESTAM(1),=C'0'   FILL WITH 0
NOBLANK1 CLC   TIMESTAM+1(1),=C' ' TEST IF BLANK
         BNE   NOBLANK2
         MVC   TIMESTAM+1(1),=C'0' FILL WITH 0
NOBLANK2 MVC   DSNAME(44),BLANK
         MVC   DSNAME(15),=C'SYS2.OFFLOAD1.D'
         MVC   DSNAME+15(7),DAYNO
         MVC   DSNAME+22(2),=C'.T'
         MVC   DSNAME+24(7),TIMESTAM
         MVC   DSNAME+26(1),=C'H'
         MVC   DSNAME+29(2),TIMESTAM+6
         MVC   DSNAME+31(1),=C'.'
         MVC   DSNAME+32(8),MEMB
         MVC   COMMENT1+5(44),DSNAME
*            PUT SINGLE QUOTES AND SUBMIT
         MVC   COMMAND1+12(1),SINGQUOT
         MVC   COMMAND1+30(1),SINGQUOT
         MVC   COMMAND2+12(1),SINGQUOT
         MVC   COMMAND2+30(1),SINGQUOT
         MVC   COMMAND3+12(1),SINGQUOT
         MVC   COMMAND3+37(2),MEMB
         MVC   COMMAND3+49(1),SINGQUOT
         MVC   COMMAND4+12(1),SINGQUOT
         MVC   COMMAND4+28(40),DSNAME
         MVC   COMMAND4+68(1),SINGQUOT
         MVC   COMMAND5+12(1),SINGQUOT
         MVC   COMMAND5+68(1),SINGQUOT
         MVC   COMMAND6+12(1),SINGQUOT
         MVC   COMMAND6+68(1),SINGQUOT
*            SUBMIT STEP1
         LA    R2,JOBLENGT  (R2) = NUMBER OF JCL 70 BYTES LONG CARDS
         LA    R3,JCLREC    (R3) = ADDRESS OF JCLREC
         LA    R4,JOBCARD1  (R4) = ADDRESS OF JOBCARD1
LSUBST1  MVC   PRINT,BLANK
         MVC   JCLREC(80),BLANK
         MVC   0(70,R3),0(R4)
         MVC   PRINT+1(80),JCLREC
         PUT   PRINTDCB,PRINT
         PUT   SUBMIDCB,JCLREC
         A     R4,=F'70'           INCREASE COUNTER VALUE
         BCT   R2,LSUBST1
         MVC   JCLREC(80),BLANK
         MVC   JCLREC(5),EOF
         PUT   SUBMIDCB,JCLREC
         MVC   PRINT,BLANK
         MVC   PRINT+1(80),JCLREC
         PUT   PRINTDCB,PRINT
         CLOSE SUBMIDCB
*            DELETE VARIABLES DEFINITIONS
ENDPRO3  CALL  ISPLINK,(VDELETE,NRECN),VL
         CALL  ISPLINK,(VDELETE,NMEMB),VL
         CALL  ISPLINK,(VDELETE,NVOLSER),VL
         CALL  ISPLINK,(VDELETE,NCATLG),VL
         CALL  ISPLINK,(VDELETE,NDSN),VL
         CALL  ISPLINK,(VDELETE,NDSNM),VL
         CALL  ISPLINK,(VDELETE,NSDATE),VL
         CALL  ISPLINK,(VDELETE,NSTIME),VL
         CALL  ISPLINK,(VDELETE,NRC),VL
         CALL  ISPLINK,(VDELETE,NR),VL
         CALL  ISPLINK,(VDELETE,NSEL),VL
         CLOSE (PRINTDCB)
FREEMA1  FREEMAIN  R,LV=400,A=(R9)
ENDRET   EQU   *
         L     R13,4(R13)
         LA    R7,0
         LR    R15,R7
         RETURN (14,12),RC=(15)
         EJECT
*           ISPF SERVICES CONSTANTS
         DS    0D
DISPLAY  DC    CL8'DISPLAY '
SELECT   DC    CL8'SELECT  '
VDEFINE  DC    CL8'VDEFINE '
VGET     DC    CL8'VGET    '
VPUT     DC    CL8'VPUT    '
VDELETE  DC    CL8'VDELETE '
*           PARAMETERS
CHAR     DC    CL8'CHAR    '
FIXED    DC    CL8'FIXED   '
KEYS     DC    CL8'KEYS    '
NAMES    DC    CL8'NAMES   '
*           PANELS
PNLOFTR1 DC    CL8'PNLOFTR1'       MAIN SELECTION PANEL
*           TABLES
FILE     DC    CL8'        '       TABLE NAME
*         LENGTH PARAMETER IN 'CALL ISPLINK VDEFINE' MUST BE FULL WORD
LRECN    DC    F'4'    LENGTH OF THE RECN     FIELD
LMEMB    DC    F'8'    LENGTH OF THE MEMB     FIELD
LVOLSER  DC    F'6'    LENGTH OF THE VOLSER   FIELD
LCATLG   DC    F'3'    LENGTH OF THE CATLG    FIELD
LDSN     DC    F'44'   LENGTH OF THE DSN      FIELD
LDSNM    DC    F'54'   LENGTH OF THE DSNM     FIELD
LSDATE   DC    F'9'    LENGTH OF THE SDATE    FIELD
LSTIME   DC    F'5'    LENGTH OF THE STIME    FIELD
LSEL     DC    F'1'    LENGTH OF THE SEL      FIELD
LR       DC    F'1'    LENGTH OF THE REPLY FIELD
LRC      DC    F'4'    LENGTH OF THE RETURN CODE FIELD
*         NAME LISTS FOR VGET/VPUT SERVICE
         DS    0D
NALNONKE DC    CL40'(MEMB DSN DSNM VOLSER CATLG SDATE STIME)'
NALKEY   DC    CL6'(RECN)'
*          CONSTANTS FOR VARIABLES DEFINITION
         DS    0D
NRECN    DC    CL6'(RECN)'
NMEMB    DC    CL6'(MEMB)'
NVOLSER  DC    CL8'(VOLSER)'
NCATLG   DC    CL7'(CATLG)'
NDSN     DC    CL5'(DSN)'
NDSNM    DC    CL6'(DSNM)'
NSDATE   DC    CL7'(SDATE)'
NSTIME   DC    CL7'(STIME)'
NSEL     DC    CL5'(SEL)'
NR       DC    CL3'(R)'
NRC      DC    CL4'(RC)'
         DS    0D
TDSN     DS    0CL164
RECN     DS    F                   RECORD NUMBER
DSN      DS    CL44                DATASET NAME
VOLSER   DS    CL6                 VOLSER
CAT      DS    CL1                 CATALOGED? (Y OR N)
TDATE    DS    CL15                DATE
TTIME    DS    CL8                 TIME
         DS    CL120               FILLER
RC       DC    F'0'
NUMBER   DC    F'0'
MEMB     DC    CL8' '
MDSN     DC    CL44' '
DSNAME   DC    CL44' '
DSNM     DS    CL54                DATASET NAME
CATLG    DS    CL3                 CATALOGED? (Y OR N)
SEL      DC    CL1' '
R        DC    CL1' '
SDATE    DC    CL9' '
STIME    DC    CL5' '
DDNAMEAD DS    A                   ADDRESS OF THE DDNAME
MDSNDDAD DS    A                   ADDRESS OF THE DDNAME FOR MDSN
TRECN    DS    F                   TOTAL NUMBER OF RECORDS
DDWORKNA DS    CL8                 WORK DATASET DDNAME
MDSNDDNA DS    CL8                 WORK DATASET DDNAME FOR MDSN
PRINT    DS    CL133
BLANK    DC    CL133' '
         DS   0D
STAMP    DS   0CL12
DAY      DS   CL3      BLANK
DAYNO    DS   CL2      BLANK
MONTH    DS   CL3      BLANK
YEAR     DS   CL2      19
YEAR1    DS   CL2      BLANK
TIMESTAM DS   0CL11
HH       DS   CL2      BLANK
         DS   CL1      BLANK
MM       DS   CL2      BLANK
         DS   CL1      BLANK
SS       DS   CL2      BLANK
         DS   CL1      BLANK
DD       DS   CL2      BLANK
JCLREC   DS    CL80
JOBCARD1 DC    CL70'//HZTOFFTR JOB (HZT,SW),(SPOOL),CLASS=F,          '
JOBCARD2 DC    CL70'//   MSGCLASS=T                                   '
COMMAND1 DC    CL70'// COMMAND  #$P OFFLOAD1      #                   '
COMMAND2 DC    CL70'// COMMAND  #$TOFF1.ST,WS=(Q/)#                   '
COMMAND3 DC    CL70'// COMMAND  #$TOFF1.ST,DISP=DELETE,Q=            #'
COMMAND4 DC    CL70'// COMMAND  #$TOFFLOAD1,DSN=                      '
COMMAND5 DC    CL70'// COMMAND  #$TOFFLOAD1,UNIT=CART,LABEL=SL        '
COMMAND6 DC    CL70'// COMMAND  #$SOFFLOAD1,TYPE=TRANSMIT             '
STEP1EXE DC    CL70'//IEFBR14  EXEC PGM=IEFBR14                       '
         DC    CL70'//SYSPRINT DD SYSOUT=*                            '
         DC    CL70'//* SPOOL OFFLOAD TRANSMIT TO CARTS               '
COMMENT1 DC    CL70'//*                                               '
JOBLENGT EQU   (*-JOBCARD1)/70     NUMBER OF JCL 70 BYTES LONG CARDS
EOF      DC    CL5'/*EOF'
SINGQUOT DC    XL1'7D'
         DS    0D
PRINTDCB DCB   MACRF=PT,RECFM=FBA,LRECL=133,BLKSIZE=133,DSORG=PS,      *
               DDNAME=PRINTOUT
SUBMIDCB DCB   DSORG=PS,MACRF=(PM),RECFM=FB,LRECL=80,BLKSIZE=8000
         LTORG
VARIDSEC DSECT   DUMMY SECTION
SAVE3    DS    18F
REPLY    DS    CL1
         DCBD  DSORG=PS            DUMMY SECTION
         END
R0       EQU   0
...
R15      EQU   15
SUOFRECE CSECT
         USING *,R10,R11           ESTABLISH ADDRESSABILITY
         STM   R14,R12,12(R13)     SAVE  REGISTERS
         LR    R10,R15             SET FIRST BASE REGISTER
         LA    R11,2048(R10)       SET SECOND BASE REGISTER
         LA    R11,2048(R11)       AND INCREMENT TO PROPER VALUE
         LR    R12,R13             STORE PREVIOUS SA ADDRESS
         GETMAIN R,LV=400
         LR    R9,R1 (R9) = ADDR. OF THE ALLOCATED VIRTUAL STORAGE AREA
         LTR   15,15
         BZ    OKGETMA1
         LA    R15,4
         B     ENDRET
OKGETMA1 ST    R9,R9SAVE
         USING VARIDSEC,R9
         LA    R13,SAVE3           LOAD ADDRESS OF THIS SAVE3 AREA
         ST    R12,SAVE3+4         CHAIN BACKWARDS
         ST    R13,8(R12)          CHAIN FORWARD
         OPEN  (PRINTDCB,(OUTPUT))
         MVC   FILE(8),=C'OFFLFILE'
*   DEFINE VARIABLE FILE FOR DIALOG SERVICE
         CALL  ISPLINK,(VDEFINE,NRECN,RECN,FIXED,LRECN),VL
         CALL  ISPLINK,(VDEFINE,NJOBNAME,JOBNAME,CHAR,LJOBNAME),VL
         CALL  ISPLINK,(VDEFINE,NVOLSER,VOLSER,CHAR,LVOLSER),VL
         CALL  ISPLINK,(VDEFINE,NIVOLS,IVOLS,CHAR,LIVOLS),VL
         CALL  ISPLINK,(VDEFINE,NOUTCLAS,OUTCLAS,CHAR,LOUTCLAS),VL
         CALL  ISPLINK,(VDEFINE,NDSN,DSN,CHAR,LDSN),VL
         CALL  ISPLINK,(VDEFINE,NSEL,SEL,CHAR,LSEL),VL
         CALL  ISPLINK,(VDEFINE,NRC,RC,FIXED,LRC),VL
DIFIPANE LA    R15,0
         ST    R15,RC
         ST    R15,RECN
         MVC   JOBNAME(8),BLANK
         MVC   VOLSER(6),BLANK
         MVC   IVOLS(4),BLANK
         MVC   OUTCLAS(8),BLANK
         MVC   R,BLANK
         MVI   SEL,C' '
         CALL  ISPLINK,(DISPLAY,PNLOFRE1),VL  FETCH JOBNAME, OUTCLASS
         LTR   R15,R15
         BNZ   ENDPRO3
*   CREATE AND OPEN TABLE FILE
         CALL  ISPLINK,(TBCREATE,FILE,NALKEY,NALNONKE,WRITE,REPLACE),VL
*            EXECUTE CATALOG SEARCH INTERFACE
         LA    R1,PARMLIST
         CALL  IGGCSI00
         LTR   R15,R15             TEST RETURN CODE
         BZ    OKRC                IF ZERO BYPASS CONVERSION
         MVC   PRINT(133),BLANK
         MVC   PRINT+1(16),=C'IGGCSI00 RC NE 0'
         PUT   PRINTDCB,PRINT
         B     ENDRTN
OKRC     EQU       *
         USING DATADSEC,R5
         LA    R5,WORKAREA         LOAD DSECT REG
         L     R1,CSICRETN         GET RETURN CODE
         LTR   R1,R1               TEST RETURN CODE
         BZ    DATARCOK            CONTINUE IF NO ERRORS
         MVC   PRINT(133),BLANK
         MVC   PRINT+1(16),=C'DATA RC NE 0'
         PUT   PRINTDCB,PRINT
         B     ENDRTN
DATARCOK LA    R4,DSECTEND         GET BEGINNING OF INFO
         L     R6,CSIUSDLN         GET DATA USED LEN
         LA    R7,64               LENGTH OF ENTRY DATA
         USING MAPENTRY,R4
NEXTENT  LH    R8,EFLD2LN
         LTR   R8,R8               IS DATA LENGTH = 0?
         BZ    CARRYLOO             YES
         LA    R9,VOLSENTR
         MVC   DSN(44),CSIENAME    MOVE DATASET NAME
         MVC   VOLSER(6),0(R9)
         XR    R3,R3
         LH    R3,EFLD2LN
 DATA LENGTH
         ST    R7,R7SAVE
         XR    R6,R6
         LR    R7,R3
         XR    R1,R1
         LA    R1,6
         DR    R6,R1
         LR    R1,R7
         BAL   R8,CONVEBOX
         MVC   IVOLS(4),RESULT10+6
         L     R7,R7SAVE
         L     R9,RECN
         A     R9,=F'1'            INCREASE RECORD COUNTER
         ST    R9,RECN
         CALL  ISPLINK,(TBADD,FILE),VL  ADD ROW IN TABLE
         LTR   R15,R15             CHECK THE RC FORM THE SERVICE
         BZ    CARRYLOO     RC=0
         LR    R1,R15
         BAL   R8,CONVEBOX
         MVC   PRINT,BLANK
         MVC   PRINT+1(20),=C'TBADD RC=           '
         MVC   PRINT+9(8),RESULT10+2
         PUT   PRINTDCB,PRINT
CARRYLOO L     R6,CSIUSDLN
         SR    R1,R1
         LH    R1,EDATALN
         LA    R1,46(R1)
         AR    R7,R1
         AR    R4,R1
         CR    R7,R6
         BNM   ENDRTN
         B     NEXTENT             GO TO  NEXT ENTRY
*     SET ROW POINTER AT TOP, DISPLAY TABLE FILE
ENDRTN   CALL  ISPLINK,(TBTOP,FILE),VL
DISPTABL MVI   SEL,C' '
         CALL  ISPLINK,(TBDISPL,FILE,PNLOFRE2),VL
         LR    R7,R15
         LA    R1,0
         CR    R7,R1
         BE    DITARCZE     RC = 0
*   RETURN CODE NE 0, CLOSE TABLE FILE WITHOUT SAVING
         CALL  ISPLINK,(TBEND,FILE),VL
         B     DIFIPANE  DISPLAY PANEL PNLOFRE1 - PRIMARY OPTION MENU
DITARCZE CLI   SEL,C' '
         BE    DISPTABL            DISPLAY TABLE AGAIN
*            SEL NE ' '
*            TRANSLATE LETTER FROM LOWER CASE INTO UPPER CASE
*            TEST SEL VALUE AND EXECUTE
*            TEST IF SEL = B - DISPLAY ROW
         OI    SEL,X'C0'
         CLI   SEL,C'S'
         BE    SSELECT     YES
         CALL  ISPLINK,(SETMSG,JMSD005),VL   INVALID SELECTION CHAR
         B     DISPTABL    NOT 'S' - DISPLAY TABLE AGAIN
SSELECT  MVC   PRINT,BLANK
         MVC   PRINT+1(8),=C'JOBNAME='
         MVC   PRINT+9(8),JOBNAME
         PUT   PRINTDCB,PRINT
         MVC   PRINT,BLANK
         MVC   PRINT+1(8),=C'OUTCLASS='
         MVC   PRINT+10(8),OUTCLAS
         PUT   PRINTDCB,PRINT
         MVC   PRINT,BLANK
         MVC   PRINT+1(4),=C'DSN='
         MVC   PRINT+5(44),DSN
         PUT   PRINTDCB,PRINT
*            PREPARE THE JOB
*            SUBMIT THE JOB FOR SPOOL
*            ALLOCATE INTERNAL READER DATA SET
         CALL  DYINTRDR,(DDNAMEAD),VL
         LA    R1,DDWORKNA
         L     R3,DDNAMEAD
         MVC   0(8,R1),0(R3)
*            OPEN OWN DCB'S: SUBMIDCB
         LA    R2,SUBMIDCB         SUBMIT DCB
         USING IHADCB,R2
         MVC   DCBDDNAM(8),DDWORKNA
         DROP  R2
         OPEN  (SUBMIDCB,(OUTPUT))
         MVC   PRINT,BLANK
         MVC   PRINT+1(33),=C'THE FOLLOWING JCL WAS SUBMITTED: '
         PUT   PRINTDCB,PRINT
         MVC   COMMENT1+5(44),DSN
*    INSERT SINGLE QUOTES AND SUBMIT
         MVC   COMMAND0+12(1),SINGQUOT
         MVC   COMMAND0+13(20),=C'$TOFF1.SR,WS=(-JOB/)'
         MVC   COMMAND0+68(1),SINGQUOT
         MVC   COMMAND1+12(1),SINGQUOT
         MVC   COMMAND1+68(1),SINGQUOT
*   CHECK IF JOBNAME=ALL JOBS
         CLC   JOBNAME(3),=C'ALL'
         BE    ALLJOBS
         MVC   COMMAND0+13(20),=C'$DOFF1.SR           '
         MVC   COMMAND1+26(19),=C'(JOB,Q/),JOBNAME=  '
         MVC   COMMAND1+43(8),JOBNAME
ALLJOBS  MVC   COMMAND2+12(1),SINGQUOT
         MVC   COMMAND2+25(8),OUTCLAS
         MVC   COMMAND2+68(1),SINGQUOT
         MVC   COMMAND3+12(1),SINGQUOT
         MVC   COMMAND3+28(40),DSN
         MVC   COMMAND3+68(1),SINGQUOT
         MVC   COMMAND4+12(1),SINGQUOT
         MVC   COMMAND4+68(1),SINGQUOT
*    SUBMIT
         LA    R2,JOBLENGT  (R2) = NUMBER OF JCL 70 BYTES LONG CARDS
         LA    R3,JCLREC    (R3) = ADDRESS OF JCLREC
         LA    R4,JOBCARD1  (R4) = ADDRESS OF STEP1EXE
LSUBST1  MVC   PRINT,BLANK
         MVC   JCLREC(80),BLANK
         MVC   0(70,R3),0(R4)
         MVC   PRINT+1(80),JCLREC
         PUT   PRINTDCB,PRINT
         PUT   SUBMIDCB,JCLREC
         A     R4,=F'70'           INCREASE COUNTER VALUE
         BCT   R2,LSUBST1
SUBMIS2  MVC   JCLREC(80),BLANK
         MVC   JCLREC(5),EOF
         PUT   SUBMIDCB,JCLREC
         MVC   PRINT,BLANK
         MVC   PRINT+1(80),JCLREC
         PUT   PRINTDCB,PRINT
         CLOSE SUBMIDCB
         CALL  ISPLINK,(TBEND,FILE),VL   CLOSE TABLE, NO SAVING
*            DELETE VARIABLES DEFINITIONS
ENDPRO3  CALL  ISPLINK,(VDELETE,NRECN),VL
         CALL  ISPLINK,(VDELETE,NJOBNAME),VL
         CALL  ISPLINK,(VDELETE,NVOLSER),VL
         CALL  ISPLINK,(VDELETE,NIVOLS),VL
         CALL  ISPLINK,(VDELETE,NOUTCLAS),VL
         CALL  ISPLINK,(VDELETE,NDSN),VL
         CALL  ISPLINK,(VDELETE,NRC),VL
         CALL  ISPLINK,(VDELETE,NSEL),VL
         CLOSE (PRINTDCB)
         L     R9,R9SAVE
         FREEMAIN  R,LV=400,A=(R9)
ENDRET   L     R13,4(R13)
         LA    R7,0
         LR    R15,R7
         RETURN (14,12),RC=(15)
CONVEBOX EQU   *
         CVD   R1,PACKED
         MVC   COPYPATE(12),PATTERN
         ED    COPYPATE(12),PACKFIE2
         MVC   RESULT10(10),COPYPATE+2
         BR    R8
         DS    0D
PACKED   DS    0PL8
         DS    PL2
PACKFIE2 DS    PL6
PATTERN  DC    XL12'402020202020202020202120'
COPYPATE DS    CL12
*           ISPF SERVICES CONSTANTS
         DS    0D
DISPLAY  DC    CL8'DISPLAY '
SELECT   DC    CL8'SELECT  '
SETMSG   DC    CL8'SETMSG  '
TBCREATE DC    CL8'TBCREATE'
TBOPEN   DC    CL8'TBOPEN  '
TBCLOSE  DC    CL8'TBCLOSE '
TBEND    DC    CL8'TBEND   '
TBADD    DC    CL8'TBADD   '
TBDISPL  DC    CL8'TBDISPL '
TBTOP    DC    CL8'TBTOP   '
VDEFINE  DC    CL8'VDEFINE '
VGET     DC    CL8'VGET    '
VPUT     DC    CL8'VPUT    '
VDELETE  DC    CL8'VDELETE '
CHAR     DC    CL8'CHAR    '
FIXED    DC    CL8'FIXED   '
NAMES    DC    CL8'NAMES   '
WRITE    DC    CL8'WRITE   '
REPLACE  DC    CL8'REPLACE '
*         PANELS
PNLOFRE1 DC    CL8'PNLOFRE1'       MAIN SELECTION PANEL
PNLOFRE2 DC    CL8'PNLOFRE2'       TABLE DISPLAY PANEL
*           TABLES
FILE     DC    CL8'        '       TABLE NAME
*           MESSAGES
JMSD005  DC    CL8'JMSD005 '       INVALID SELECTION CHARACTER
*         LENGTH PARAMETER IN 'CALL ISPLINK VDEFINE' MUST BE FULL WORD
LRECN    DC    F'4'    LENGTH OF THE RECN     FIELD
LJOBNAME DC    F'8'    LENGTH OF THE JOBNAME  FIELD
LVOLSER  DC    F'6'    LENGTH OF THE VOLSER   FIELD
LIVOLS   DC    F'4'    LENGTH OF THE IVOLS    FIELD
LOUTCLAS DC    F'8'    LENGTH OF THE OUTCLAS  FIELD
LDSN     DC    F'44'   LENGTH OF THE DSN      FIELD
LSEL     DC    F'1'    LENGTH OF THE SEL      FIELD
LRC      DC    F'4'    LENGTH OF THE RETURN CODE FIELD
*         NAME LISTS FOR TABLE SERVICE
         DS    0D
NALNONKE DC    CL18'(DSN VOLSER IVOLS)'
NALKEY   DC    CL6'(RECN)'
*          CONSTANTS FOR VARIABLES DEFINITION
         DS    0D
NRECN    DC    CL6'(RECN)'
NJOBNAME DC    CL9'(JOBNAME)'
NVOLSER  DC    CL8'(VOLSER)'
NIVOLS   DC    CL7'(IVOLS)'
NOUTCLAS DC    CL9'(OUTCLAS)'
NDSN     DC    CL5'(DSN)'
NSEL     DC    CL5'(SEL)'
NR       DC    CL3'(R)'
NRC      DC    CL4'(RC)'
*           VARIABLES DEFINITIONS
         DS    0D
RECN     DS    F                   RECORD NUMBER
IVOLS    DS    F                   NUMBER OF VOLSERS
DSN      DS    CL44                DATASET NAME
VOLSER   DS    CL6                 FIRST CART VOLSER
R7SAVE   DS    F
R9SAVE   DS    F
RC       DC    F'0'
NUMBER   DC    F'0'
JOBNAME  DC    CL8' '
OUTCLAS  DS    CL8                 OUTCLAS
SEL      DC    CL1' '
R        DC    CL1' '
RESULT10 DS    CL10
PRINT    DS    CL133
BLANK    DC    CL133' '
* PARAMETER LIST FOR IGGCSI00 INVOCATION                             *
PARMLIST DS    0D
PARMRC   DC    A(MODRSNRT)         MODULE/REASON/RETURN
         DC    A(CSIFIELD)         SELECTION CRITERIA FIELDS
         DC    A(WORKAREA)         RETURNED INFO
* MODULE ID/REASON CODE/RETURN CODE                                  *
MODRSNRT    DS 0F
MODID       DC XL2'0000'           MODULE ID
RSNCODE     DC XL1'00'             REASON CODE
RTNCODE     DC XL1'00'             RETURN CODE
* PARAMETER FIELDS FOR CATALOG SEARCH INTERFACE (CSI)                *
CSIFIELD    DS 0F
CSIFILTK    DC CL44'SYS2.OFFLOAD1.**'       FILTER   KEY
CSICATNM    DC CL44' '             CATALOG NAME OR BLANKS
CSIRESNM    DC CL44' '             RESUME NAME OR BLANKS
CSIDTYPD    DS 0CL16               ENTRY TYPES
CSIDTYPS    DC CL16'A              ' ENTRY TYPE: NONVSAM
CSICLDI     DC CL1' '              RETURN D&I IF C A MATCH Y OR BLNK
CSIOPTS     DS 0CL4                CSI OPTIONS
CSIRESUM    DC CL1' '              RESUME FLAG       Y OR BLANK
CSIS1CAT    DC CL1' '              SEARCH CATALOG    Y OR BLANK
CSIRESRV    DC XL1'00'             RESERVED
CSINUMEN    DC H'1'                NUMBER OF ENTRIES FOLLOWING
CSIENTS     DS 0CL8                VARIABLE NUMBER OF ENTRIES FOLLOW
CSIFLDNM    DC CL8'VOLSER  '       FIELD NAME
DATAREC  DS    CL80
SAVE     DS    18F
DDNAMEAD DS    A                   ADDRESS OF THE DDNAME
DDWORKNA DS    CL8                 WORK DATASET DDNAME
JCLREC   DS    CL80
JOBCARD1 DC    CL70'//HZTOFFRE JOB (HZT,SW),(SPOOL),CLASS=F,          '
JOBCARD2 DC    CL70'//   MSGCLASS=T,NOTIFY=FSS03                      '
COMMAND0 DC    CL70'// COMMAND                                        '
COMMAND1 DC    CL70'// COMMAND  #$TOFF1.SR,WS=(Q/),JOBNAME=           '
COMMAND2 DC    CL70'// COMMAND  #$TOFF1.SR,Q=                         '
COMMAND3 DC    CL70'// COMMAND  #$TOFFLOAD1,DSN=                      '
COMMAND4 DC    CL70'// COMMAND  #$SOFFLOAD1,TYPE=RECEIVE              '
STEP1EXE DC    CL70'//IEFBR14  EXEC PGM=IEFBR14                       '
         DC    CL70'//SYSPRINT DD SYSOUT=*                            '
         DC    CL70'//* SPOOL OFFLOAD RECEIVE FROM CARTS              '
COMMENT1 DC    CL70'//*                                               '
JOBLENGT EQU   (*-JOBCARD1)/70     NUMBER OF JCL 70 BYTES LONG CARDS
EOF      DC    CL5'/*EOF'
SINGQUOT DC    XL1'7D'
         DS    0D
PRINTDCB DCB   MACRF=PT,RECFM=FBA,LRECL=133,BLKSIZE=133,DSORG=PS,      *
               DDNAME=PRINTOUT
SUBMIDCB DCB   DSORG=PS,MACRF=(PM),RECFM=FB,LRECL=80,BLKSIZE=8000
         LTORG
WORKAREA DS    0F
         DC    F'32000'            LENGTH DECLARED EXPLICIT
         DS    XL32000
DATADSEC DSECT
CSIUSRLN DS    F
CSIREQLN DS    F
CSIUSDLN DS    F
CSINUMFD DS    H
*  INFORMATION RETURNED FOR EACH ENTRY
CSICFLG DS     CL1
CSICTYPE DS    CL1
CSICNAME DS    CL44
CSICRETN DS    F     CSICRETN
DSECTEND DS    0F
MAPENTRY DSECT
*  INFORMATION RETURNED FOR EACH ENTRY
CSIEFLAG DS    XL1   CSIEFLAG
CSIETYPE DS    XL1   CSIETYPE
CSIENAME DS    CL44  CSIENAME
EDATALN  DS    XL2
EFLD1LN  DS    XL2
EFLD2LN  DS    XL2
VOLSENTR DS    XL4
MAPEND   DS    0XL1
VARIDSEC DSECT   DUMMY SECTION
SAVE3    DS    18F
         DCBD  DSORG=PS            DUMMY SECTION
         END
*    DYNAMIC ALLOCATION OF THE INTERNAL READER DATA SET               *
R0       EQU   0
...
R15      EQU   15
DYINTRDR CSECT
         USING *,R10,R11           ESTABLISH ADDRESSABILITY
         STM   R14,R12,12(R13)     SAVE3 REGISTERS
         LR    R10,R15             SET FIRST BASE REGISTER
         LA    R11,2048(R10)       SET SECOND BASE REGISTER
         LA    R11,2048(R11)       AND INCREMENT TO PROPER VALUE
         LR    R12,R13             STORE PREVIOUS SA ADDRESS
         LR    R2,R1  (R2) = POINTER TO ADDRESS OF THE PARM LIST
         LA    R13,SAVE3           LOAD ADDRESS OF THIS SAVE3 AREA
         ST    R12,SAVE3+4         CHAIN BACKWARDS
         ST    R13,8(R12)          CHAIN FORWARD
*            STORE ADDRESS OF THE DDWORKNA
         L     R3,0(R2)    (R3) = ADDRESS OF THE FIRST  PARAMETER
         LA    R1,DDWORKNA (R1)=ADDRESS OF THE DDWORKNA - OUTPUT PARAM
         ST    R1,0(R3)    STORE ADDRESS OF THE DDWORKNA
*            ESTABLISH DYNALLOC PARAMETERS
         LA    R0,300
         GETMAIN R,LV=(R0)
         LR    R8,R1
         USING S99RBP,R8
         LA    R4,S99RBPTR+4
         USING S99RB,R4
         ST    R4,S99RBPTR
         OI    S99RBPTR,S99RBPND
         XC    S99RB(RBLEN),S99RB
         MVI   S99RBLN,RBLEN
*                                    VERB CODE 01 ----------------
         MVI   S99VERB,S99VRBAL      REQUEST FOR DSNAME ALLOCATION
         LA    R5,S99RB+RBLEN
         USING S99TUPL,R5
         ST    R5,S99TXTPP
         LA    R6,S99TUPL+16 POINT JUST PAST THE FOUR  TEXT UNITS PTRS
*           1.ST TEXT UNIT - KEY: SYSOUT DATA SET AND ITS CLASS
         USING S99TUNIT,R6
         ST    R6,S99TUPTR
         LA    R7,DALSYSOU          SYSOUT
         STH   R7,S99TUKEY            2
         LA    R7,1
         STH   R7,S99TULNG            2
         STH   R7,S99TUNUM            2
         MVI   S99TUPAR,C'T'   CLASS  1
         LA    R6,S99TUNIT+7          7 = TOTAL
*           2.ND TEXT UNIT - THE SYSOUT PROGRAM NAME SPECIFICATION
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR
         LA    R7,DALSPGNM         PROGRAM NAME
         STH   R7,S99TUKEY             2
         LA    R7,1
         STH   R7,S99TUNUM             2
         LA    R7,6
         STH   R7,S99TULNG             2
         MVC   S99TUPAR(6),=C'INTRDR'  6
         LA    R6,S99TUNIT+12         12 = TOTAL
*           3.RD TEXT UNIT - DEALLOCATION AT CLOSE
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR
         LA    R7,DALCLOSE     CLOSE
         STH   R7,S99TUKEY             2
         LA    R7,0
         STH   R7,S99TUNUM             2
         LA    R6,S99TUNIT+4           4 = TOTAL
*           4.TH TEXT UNIT - KEY: RETURN DDWORKNA
         LA    R5,S99TUPL+4
         ST    R6,S99TUPTR
         OI    S99TUPTR,S99TUPLN
         LA    R7,DALRTDDN
         STH   R7,S99TUKEY
         LA    R7,1
         STH   R7,S99TUNUM
         LA    R7,8
         STH   R7,S99TULNG
         LR    R1,R8
         DYNALLOC
         LR    R7,R15
         LTR   R15,R15
         BZ    OKDYNALL
         LA    R1,4
         CR    R1,R7
         BNE   DYRCNEQ4
         B     FREEM
DYRCNEQ4 EQU   *
         LA    R1,8
         CR    R1,R7
         BNE   DYRCNEQ8
         B     FREEM
DYRCNEQ8 EQU   *
         LA    R1,12
         CR    R1,R7
         BNE   DYRCNE12
         LH    R7,S99ERROR
         B     FREEM
DYRCNE12 EQU   *
         B     FREEM
OKDYNALL EQU   *
         LA    R3,S99TUPAR
         LA    R2,8
LOOPTUPA EQU   *
         TM    0(R3),B'11000000'
         BO    OKALPNUM            OK ALPHANUMERIC
         MVI   0(R3),C' '
OKALPNUM EQU   *
         A     R3,=F'1'
         BCT   R2,LOOPTUPA
         MVC   DDWORKNA(8),S99TUPAR
FREEM    EQU   *
         FREEMAIN R,LV=300,A=(R8)
         L     R13,4(R13)
         LR    R15,R7
         RETURN (14,12),RC=(15)
*   CONSTANTS AND STORAGE
SAVE3    DS    18F
*   DYNALLOC CONSTANTS AND VARIABLES
DDWORKNA DS    CL8
         LTORG LTORG LTORG LTORG LTORG LTORG LTORG LTORG LTORG
         IEFZB4D0                  DUMMY SECTION
         IEFZB4D2                  DUMMY SECTION
RBLEN    EQU   (S99RBEND-S99RB)
         DCBD  DSORG=PS            DUMMY SECTION
         END
         OPEN  (DIR,INPUT)
DIR0100  GET   DIR
         LH    5,0(,1)
         AR    5,1
         BCTR  5,0
         LA    3,2(,1)
         USING PDS2,3
DIR0200  CLC   =FL8'-1',PDS2NAME
         BE    EOF
         CLC   =CL8'xxx',PDS2NAME
         BNE   DIR0300
         ...   Process the directory entry
DIR0300  IC    4,PDS2INDC
         N     4,=A(PDS2LUSR)
         LA    4,(PDS2USRD-PDS2)(4,4)
         BXLE  3,4,DIR0200
         B     DIR0100
EOF      ...
* IHAPDS macro is in SYS1.MODGEN         ...
DIR      DCB   DSORG=PS,MACRF=GL,DDNAME=...,EODAD=EOF,
               RECFM=F,LRECL=256,BLSIZE=256
         ...
         IHAPDS PDSBLDL=NO

Read more: http://ibmmainframes.com/about64375.html#ixzz4GjmGZhyx
*********************************************************************
* Z390 MAINFRAME ASSEMBLER CODING CONTEST PROBLEM #20.
********************************************************************* 
*********************************************************************
P20WR1   ZMFACC CODE,START,NAME='WERNER RAMS',RUNSYS=390
*
*  THE IDEA IS NOT FROM MYSELF, BUT IS PUBLISHED IN
*  THE INTERNET FOR THE RANDOM-FUNCTION OF HIGHER PROGRAMMING LANG.
*  THE FORMULA IS X1 = (397204094*X0) MOD (2 ^ 31 -1)
*  THE FIRST X0 IS THE VALUE OF SEED
*  THE FORMULA THEN GENERATES 2 ^ 31 -1 DIFFERENT PSEUDO RANDOM NUMBERS 
*
*  ON MY PC THE PROGRAM RUNS ABOUT 1 1/2 HOURS (BY 5 MIPS)
*
         MVC    LFDZAHL,SEED 
         SR     R4,R4
         L      R2,=X'7FFFFFFF'
ANF010   EQU   *
         L      R15,LFDZAHL
         M      R14,KONST
         D      R14,=X'7FFFFFFF'
         ST     R14,LFDZAHL 
         C      R14,SEED
         BE     END000  
         AHI    R4,1
         BCT    R2,ANF010 
END000   EQU    * 
         CVD    R14,DW
         MVC    ZUFALL,SCHAB
         ED     ZUFALL,DW+2
         WTO    MF=(E,WTOMSG)
         CVD    R4,DW
         MVC    ZUFALL,SCHAB
         ED     ZUFALL,DW+2
         WTO    MF=(E,WTOMSG)
         ZMFACC CODE,END 
         ZMFACC INPUT,START 
SEED     DC     F'101'     CAN BE ANY NUMBER, BUT NOT ZERO      
KONST    DC     F'397204094' THIS IS FROM THE INTERNET
         ZMFACC INPUT,END
LFDZAHL  DS     F         
BITTAB   DC     X'8040201008040201' 
         ZMFACC OUTPUT,START
         ZMFACC OUTPUT,END
DW       DS     D 
SCHAB    DC     X'4020204B2020204B2020204B202020'
WTOMSG   DC     AL2(WTOEND-WTOMSG,0),C'ZUFALL ='
ZUFALL   DS     CL15
WTOEND   EQU    * 
         LTORG
         END***********************************************************************
*                                                                     *
* Title -- GETDSN                                                     *
*                                                                     *
* Function / Operation -- GETDSN returns the data set name of the     *
*   data set specified for a DD name.                                 *
*                                                                     *
* Calling sequence(Assembler) --                                      *
*            CALL  GETDSN,(DDNAME,DSNAME)                             *
*            ...                                                      *
*   DDNAME   DC    CL8' '                                             *
*   DSNAME   DC    CL44' '                                            *
*                                                                     *
* Attributes -- GETDSN is reenterable, refreshable and reusable.  Its *
*   intended operating environment is enabled, task mode, problem key *
*   and problem state.  It is Language Environment compatible, but    *
*   not Language Environment compliant.                               *
*                                                                     *
***********************************************************************
         SPACE 5
GETDSN   CSECT
GETDSN   AMODE ANY
GETDSN   RMODE 31
         PUSH  PRINT
         PRINT NOGEN
         DCBD  DSORG=QS,DEVD=DA
         SPACE 2
WA       DSECT
OPARMS   OPEN  *-*,MF=L
OPARM    EQU   OPARMS,*-OPARMS
ADCBS    DCB   DSORG=PS,MACRF=E,DDNAME=FILLMEIN,EXLST=*-*
ADCB     EQU   ADCBS,*-ADCBS
XLIST    DS    A
JFCB     DS    0XL176
         IEFJFCBN
         DS    0D
WASIZE   EQU   *-WA
         POP   PRINT
         EJECT
GETDSN   CSECT
         BASR  15,0                Store current address in reg 15
         USING WA,9                Establish work area addressability
         USING *,10                Establish program addressability
         SAVE (14,10),,'GETDSN &SYSDATE &SYSTIME'  Save registers
         LR    10,15               Prepare program base register
         LM    2,3,0(1)            Load the parameter list
         LA    0,WASIZE            Load work area length
         GETMAIN R,LV=(0)          Obtain storage for the work area
         LR    9,1                 Copy work area address to reg 9
         MVC   OPARM,MASTOPEN      Initialze the RDJFCB parameter list
         MVC   ADCB,MASTDCB        Initialize the DCB
         LA    0,XLIST
         STCM  0,B'0111',(DCBEXLSA-IHADCB)+ADCB
         LA    0,JFCB              Initalize XLIST
         ST    0,XLIST
         MVI   XLIST,X'80'+7
         MVC   (DCBDDNAM-IHADCB)+ADCB,0(2)  Copy DD name to the DCB
         RDJFCB ADCB,MF=(E,OPARM)  Read the JFCB
         LTR   15,15               RDJFCB RC = 0?
         BNZ   EXIT                No
         MVC   0(L'JFCBDSNM,3),JFCBDSNM  Copy data set name to user
EXIT     LR    8,15                Copy RDJFCB return code to reg 8
         LA    0,WASIZE            Free the work area
         FREEMAIN R,LV=(0),A=(9)
         LR    15,8                Copy RDJFCB RC to reg 15
         RETURN (14,10),RC=(15)    Restore registers & return
MASTOPEN OPEN  *-*,MF=L
MASTDCB  DCB   DSORG=PS,MACRF=E,DDNAME=FILLMEIN,EXLST=*-*
         DC    0D'0'
         LTORG ,
         DC    0D'0'
         ENDTOKGET CSECT
TOKGET AMODE 31
TOKGET RMODE 24
	BAKR R14,R0
	LR R12,R15
	USINGTOKG ET,R12
	LOAD EP=IEANTRT
	ST R0,IEANTRT
	OPEN TOKIN
GETTOKEN GET TOKIN
	LR R5,R1
	MVC NAME,0(R5)
	L R15,IEANTRT
	CALL (15),(LEVEL,NAME,TOKEN,PERSOPT,RETCODE)
	MVC WTONAME,NAME
	MVC WTOTOKEN,TOKEN
	LA R1,WTOA
	SVC 35
	B GETTOKEN
EXIT DS 0H
	CLOSE TOKIN
	DELETE EP=IEANTRT
	PR
	EJECT
	YREGS
	EJECT
	IEANTASM
	LTORG
IEANTRT DS F
LEVEL DC A(IEANT_SYSTEM_LEVEL)
NAME DS CL16
TOKEN DS CL16
PERSOPT DC A(IEANT_PERSIST)
RETCODE DS F
WTOA DC AL2(WTOE-WTOA),AL2(0)
	DC C’TOKEN NAME: ‘
WTONAME DC CL16’ ‘
	DC C’ ‘
DC C’TOKEN VALUE: ‘
WTOTOKEN DC CL16’ ‘
WTOE EQU *
TOKIN DCB DSORG=PS,RECFM=FB,LRECL=80,DDNAME=TOKIN,EODAD=EXIT, X
	MACRF=GL
	END ,C:\MyDoc\Host\asm_IEFSJSYM_info.txt

SJSYM_RC     DS   F
SJSYM_RSN    DS   F
SJDIAG       DS   4F
SYMBOLS      DS   0D
S1           DC   C'DSN     '
S2           DC   C'VOL     '
S3           DC   C'UNIT    '
SYMBOLAREA   DS   64F
    IEFSJSYM REQUEST=GETBYNAME,SYMLISTARRAY=SYMBOLS,NUMENTRIES=3
           SYMBAREA=SYMBOLAREA,SYMBAREALEN=256,DIAGDATA=SJDIAG
or
    IEFSJSYM REQUEST=GETALL,SYMBAREA=SYMBOLAREA,SYMBAREALEN=256,
           RETCODE=SJSYM_RC,RSNCODE=SJSYM_RSN,DIAGDATA=SJDIAG
           
IBM recommends that you use the modify and execute forms of IEFSJSYM in the following order:
Use IEFSJSYM ...MF=(M,list-addr,COMPLETE) to specify appropriate parameters, including all required parameters.
Use IEFSJSYM ... MF=(M,list-addr,NOCHECK) to specify the parameters that you want to change.
Use IEFSJSYM ...MF=(E,list-addr,NOCHECK) to execute the macro.
           
        la     r8,dsa_jsyml
        mvc    0(jsyme_l,r8),JSYME_LADDR
*        using  jsym_dsct,r8

        IEFSJSYM MF=(M,dsa_jsyml,COMPLETE)
        
        IEFSJSYM MF=(M,dsa_jsyml,NOCHECK),
              REQUEST=GETALL,SYMBAREA=SYMBOLAREA,SYMBAREALEN=256,
              RETCODE=SJSYM_RC,RSNCODE=SJSYM_RSN,DIAGDATA=SJDIAGrl   dc   al2(rle-rl,0)
f1   dc   cl20' '
f2   dc   10xl2'00'
f3   dc   pl5'0'
rle  equ  *
    .....
Out  dcb  dsorg=ps,ddname=o,macrf=gm,lrecl=rle-rl

########

L4JTRANS CSECT
L4JTRANS AMODE 31
L4JTRANS RMODE ANY
         SAVE  (14,12),,'L4JTRANS &SYSDATE &SYSTIME'
         LR    R12,R15
         USING L4JTRANS,R12,R9
         LA    R9,4095(R12)
         LA    R9,1(R9)
         GETMAIN RU,LV=WORKL,SP=77,LOC=ANY
         LR    R11,R1
         USING WORK,R11
         GETMAIN R,LV=80,SP=77
         ST    R1,MSGADDR
         ST    R13,SAVEAREA+4
         LA    R1,SAVEAREA
         ST    R1,8(,R13)
         LR    R13,R1
         LA 2,MEM_LIST_STORE              Initialize
         LA 3,L'MEM_LIST_STORE                      member list
         SLR 5,5
         MVCL 2,4
         MVI   MEM,C' '                   Clear MEM field
         MVC   MEM+1(7),MEM               Clear MEM field
         XC    SRCHTAB,SRCHTAB            Clear table
         MVI   BLANKS,C' '                Initialize
         MVC   BLANKS+1(L'BLANKS-1),BLANKS        blanks variable
         LOAD  EP=ISPLINK                 Get address of ISPLINK
         ST    R0,ISPLINKA                Save ISPLINK address
         LA    R10,CALLL
*---------------------------------------------------------------------*
* CONTROL ERRORS RETURN                                               *
*---------------------------------------------------------------------*
         MVC   CALLL(CALLML),CALLM
         L     R15,ISPLINKA           Set CONTROL
         CALL  (15),(CONTROL,                     ERRORS               X
               ERRORS,                                    RETURN       X
               RETURN),VL,MF=(E,(R10))
*---------------------------------------------------------------------*
* VDEFINE                                                             *
*---------------------------------------------------------------------*
         MVC   CALLL(CALLML),CALLM
         L     R15,ISPLINKA
         CALL  (15),(VDEFINE,       Issue                              X
               NAMELIST,                  VDEFINE to                   X
               VARAREA,                             define             X
               VARFMTS,                                  vars          X
               VARLENS,                                      needed    X
               OPTIONS),VL,MF=(E,(R10))
*---------------------------------------------------------------------*
* VGET (NODE USERID DS1 M PRJ1 LIB1 TYP1)                             *
         MVC   CALLL(CALLML),CALLM        VGET vars
         L     R15,ISPLINKA                         from PROFILE
         CALL  (15),(VGET,NAMES1,PROFILE),VL,MF=(E,(R10))        pool
*---------------------------------------------------------------------*
* Infinite Loop of Displays and Transmits, etc.                       *
*---------------------------------------------------------------------*
      DO INF
* DISPLAY PANEL(P4JTRANS)
         MVC   CALLL(CALLML),CALLM        Display
         L     R15,ISPLINKA                       main transmit
         CALL  (15),(DISPLAY,@P4JTRAN,,@DS1),VL,MF=(E,(R10))    panel
         IF (C,15,EQ,=F'12')
            MVC   CALLL(CALLML),CALLM
            L     R15,ISPLINKA
            MVC ZMSG000S(24),=CL24'L4JTRANS - Panel Error'
            MVC ZMSG000L(80),=CL80'Panel P4JTRANS not found - L4JTRANS X
               terminated.'
            CALL  (15),(SETMSG,ISPZ000),VL,MF=(E,(R10))
            B     EXIT
         ENDIF
         DOEXIT C,15,EQ,=F'8'
*---------------------------------------------------------------------*
* VPUT (NODE USERID DS1 M PRJ1 LIB1 TYP1)                             *
         MVC   CALLL(CALLML),CALLM        Update
         L     R15,ISPLINKA                       vars in
         CALL  (15),(VPUT,NAMES1,PROFILE),VL,MF=(E,(R10)) PROFILE POOL
* Initialize some fields
         LA    R2,MEM_LIST_STORE          Initialize
         LA    R3,L'MEM_LIST_STORE                 member
         SLR   R5,R5                                     list
         MVCL  R2,R4                                          area
         MVI   XMIT_DATASET,C' '          Clear field
         MVC   XMIT_DATASET+1(L'XMIT_DATASET-1),XMIT_DATASET
         MVI   BLANK_DATASET,C' '         Clear field
         MVC   BLANK_DATASET+1(L'BLANK_DATASET-1),BLANK_DATASET
         IF (CLC,DS1,EQ,BLANKS)           Other DSN blank  ... then Do
            LA    R4,XMIT_DATASET         Address of XMIT dataset field
            MVI   0(R4),X'7D'             put quote at start of dataset
            LA    R4,1(R4)                Increment pointer
            LA    R6,PRJ1                 Address of PROJECT field
            BAS   R14,BUILD_DATASET_NAME  Move in prject to DSN
            MVC   0(2,R4),=C'.'           move in . at end of qualifier
            LA    R4,1(R4)                increment pointer
            LA    R6,LIB1                 Address of GROUP field
            BAS   R14,BUILD_DATASET_NAME  Move in group to DSN
            MVC   0(2,R4),=C'.'           Move in '.'
            LA    R4,1(R4)                Increment pointer
            LA    R6,TYP1                 Address of TYPE field
            BAS   R14,BUILD_DATASET_NAME  Move in type to DSN
            MVI   0(R4),X'7D'             Move in ending quote
            B     DOINIT                  Proceed
         ELSE
            MVC XMIT_DATASET(56),DS1      If ds1 NE blanks, use it
         ENDIF
*---------------------------------------------------------------------*
* If other dataset name field is filled in, separate the member       *
*  from the dataset name.
*---------------------------------------------------------------------*
         LA    R3,XMIT_DATASET            Address of dataset name
         MVI   SRCHTAB+C'(',C'('          Set up table
         TRT   0(56,R3),SRCHTAB           Search for "("
         BZ    DOINIT                     Proceed .... if not found
         LR    R4,R1
         LA    R1,56                      Length of dsn
         LR    R2,R4
         SR    R2,R3
         SR    R1,R2
         MVI   SRCHTAB+C'(',X'00'         Remove "(" from table
         MVI   SRCHTAB+C')',C')'          Set up table
         BCTR  R1,0                       Decrement for EX
         EX    R1,CMPR                    Search for ")"
         BZ    ERROR1                     No ")" ... Issue error msg
         LR    R5,R1
         SR    R5,R4
         LA    R6,1(,R5)
         BCTR  R5,0                       Decrement for EX
         BCTR  R5,0                       Decrement for EX
         EX    R5,MOVEMEM                 Get member name
         EX    R6,MOVEBLNK                Move in blanks
         CLI   0(R3),X'7D'                Quote ?
         BNE   DOINIT                     No ... Proceed
         MVI   0(R4),X'7D'                Move in quote
         B     DOINIT                     Proceed
*---------------------------------------------------------------------*
*     Issue error message if unbalanced ")" in dataset name           *
*---------------------------------------------------------------------*
ERROR1   EQU   *
         MVC   CALLL(CALLML),CALLM
         L     R15,ISPLINKA
         MVC ZMSG000S(24),=CL24'Invalid DSN - Syntax'
         MVC ZMSG000L(80),=CL80'The dataset name contains unbalanced paX
               rentheses'
         CALL  (15),(SETMSG,ISPZ000),VL,MF=(E,(R10))
         SLR 15,15                        RC = 0
         B     DOFREE                     Continue
CMPR     TRT   1(0,R4),SRCHTAB
MOVEMEM  MVC   MEM(0),1(R4)
MOVEBLNK MVC   0(0,R4),BLANKS
*---------------------------------------------------------------------*
* LMINIT DATAID(DSID) DATASET(TST) ENQ(SHRW)                          *
*---------------------------------------------------------------------*
DOINIT   EQU   *
         IF (CLI,M,EQ,C'Y')               All members ?
            BAS   R14,TRANSMIT_FUNCTION   Yes ... then branch
            B   DOFREE                    All done ... branch
         ENDIF
         IF (CLC,DS1,EQ,BLANKS)           Other dsn blank ?
            MVC   CALLL(CALLML),CALLM     Issue LMINIT
            L     R15,ISPLINKA                      for PRJ GRP TYP
            CALL  (15),(LMINIT,                                        X
               @DSID,PRJ1,LIB1,,,,TYP1,,,,,SHRW),VL,MF=(E,(R10))
            LTR   R15,R15                 RC=0
            BZ    DOOPEN                  Yes ... Then proceed
            MVC   CALLL(CALLML),CALLM
            L     R15,ISPLINKA
            MVC ZMSG000S(24),ZERRSM       ISPF Short error msg
            MVC ZMSG000L(80),ZERRLM       ISPF Long error msg
            CALL  (15),(SETMSG,ISPZ000),VL,MF=(E,(R10))  Issue msg
         ELSE                             Other DSN not blank ?
            MVC   CALLL(CALLML),CALLM     Issue LMINIT
            L     R15,ISPLINKA                      for other dsn field
            CALL  (15),(LMINIT,                                        X
               @DSID,,,,,,,XMIT_DATASET,,XVOL,,SHRW),VL,MF=(E,(R10))
            LTR   R15,R15                 RC=0
            BZ    DOOPEN                  Yes ... Then proceed
            MVC   CALLL(CALLML),CALLM
            L     R15,ISPLINKA
            MVC ZMSG000S(24),ZERRSM       ISPF Short error msg
            MVC ZMSG000L(80),ZERRLM       ISPF Long error msg
            CALL  (15),(SETMSG,ISPZ000),VL,MF=(E,(R10))  Issue msg
         ENDIF
         B RELOOP
*---------------------------------------------------------------------*
* LMOPEN DATAID(&DSID)                                                *
*---------------------------------------------------------------------*
DOOPEN   EQU   *
         MVC   CALLL(CALLML),CALLM        Open
         L     R15,ISPLINKA                     the
         CALL  (15),(LMOPEN,DSID),VL,MF=(E,(R10))    dataset
         LTR   R15,R15                    RC = 0 ?
         BZ    FIRSTDIS                   yes ... branch
         MVC ZMSG000S(24),ZERRSM          ISPF Short error msg
         MVC ZMSG000L(80),ZERRLM          ISPF Long error msg
         MVC   CALLL(CALLML),CALLM        Issue
         L     R15,ISPLINKA                     Error
         CALL  (15),(SETMSG,ISPZ000),VL,MF=(E,(R10))  message
         B     DOLMFREE                Branch to LMFREE routine
FIRSTDIS EQU   *
         MVI   TOP,C' '                   Initialize top field
         MVC   TOP+1(L'TOP-1),TOP          so we are place at first mbr
         DO INF
*---------------------------------------------------------------------*
* LMMDISP DATAID(&DSID) OPTION(DISPLAY) TOP(&TOP)                     *
*---------------------------------------------------------------------*
      MVC   CALLL(CALLML),CALLM
      L     R15,ISPLINKA
      CALL  (15),(LMMDISP,DSID,DISPLAY,MEM,,@MEMLIST,,TOP,,,ANY),      X
               VL,MF=(E,(10))
      MVC   TOP(8),ZLMEMBER
      IF C,15,EQ,=F'4'             Empty dataset ?
         MVC ZMSG000S(24),ZERRSM       ISPF Short error msg
         MVC ZMSG000L(80),ZERRLM       ISPF Long error msg
         MVC CALLL(CALLML),CALLM          Issue
         L 15,ISPLINKA                           error
         CALL (15),(SETMSG,ISPZ000),VL,MF=(E,(10))     message
         LA 15,8                       RC = 8
      ENDIF
*---------------------------------------------------------------------*
* Figure out what was done in member list                             *
*---------------------------------------------------------------------*
      IF C,15,EQ,=F'8'                    PF3 (END) pressed ?
         LA    R3,MEM_LIST_STORE          Address of member list
         USING MEM_LIST,R3
         IF CLC,MEM_LIST_CUR,EQ,=F'0'     No members entered ?
            B    DOFREE                   exit
         ENDIF
         LA    R3,MEM_LIST_STORE          Address of member list
         BAS   14,TRANSMIT_FUNCTION       Transmit members
         B   DOFREE                       exit
      ENDIF
      DOEXIT LTR,15,15,NZ
      SLR 15,15
      DO WHILE=(LTR,15,15,Z)
*---------------------------------------------------------------------*
* If "S *" was entered in member list, XMIT entire dataset rather     *
*   then selecting all the members individually.                      *
*---------------------------------------------------------------------*
         LA    R1,XMITZCMD                Get address of command
         OI    0(R1),X'40'                Make upper case
         IF (CLC,MEM(8),EQ,=CL8' ')    mem pattern specified ie (A*) ?
            IF (CLC,XMITZCMD(3),EQ,=CL3'S *')    is command "S *"
               MVI   M,C'Y'                  turn on xmit full dsn flag
               BAS   R14,TRANSMIT_FUNCTION   XMIT the dataset
               MVI   M,C'N'                  reset flag
               B   DOFREE                    Do cleanup and leave
            ENDIF
         ENDIF
*---------------------------------------------------------------------*
* Can was entered                                                     *
*---------------------------------------------------------------------*
         IF (CLC,ZCMD(3),EQ,=CL3'CAN')    If cmd is CAN, don't process
            MVC ZCMD(133),=CL133' '       Clear cmd field
            B   DOFREE                    do cleanup and leave
         ENDIF
*---------------------------------------------------------------------*
* Browse member
*---------------------------------------------------------------------
         IF (CLI,ZLLCMD,EQ,C'B')          B entered beside member ?
            MVC   CALLL(CALLML),CALLM          then
            L     R15,ISPLINKA                      browse the
            CALL (15),(BROWSE,,,,,DSID,ZLMEMBER),MF=(E,(10)) member
            SLR 15,15                     RC = 0
         ELSE
*---------------------------------------------------------------------*
* Select member for XMIT                                              *
*---------------------------------------------------------------------*
            IF (CLI,ZLLCMD,EQ,C'S')       S entered beside member ?
               IF (CLI,SEQ,EQ,C'Y')       Send sequentially
                  LA 3,MEM_LIST_STORE
                  IF CLC,=F'0',NE,MEM_LIST_CUR-MEM_LIST(3)
                     MVC ZMSG000S(24),=CL24'Selection Error'
                     MVC ZMSG000L(80),=CL80'Select only ONE member for X
               sequential transmission.  Press PF3 to XMIT.'
                      MVC CALLL(CALLML),CALLM          Issue
                      L 15,ISPLINKA                           error
                      CALL (15),(SETMSG,ISPZ000),VL,MF=(E,(10))     msg
                      B     VERIFY_SELECTION
                   ENDIF
                ENDIF
                BAS   R14,CHK_UNIQUENESS  Check to see not already added
                IF LTR,15,15,Z             If RC=0  then ....
                   BAS   R14,ADD_MEM_LIST    add member to member list
VERIFY_SELECTION  EQU  *
*---------------------------------------------------------------------*
* Too many members entered - Issue error message                      *
                  IF LTR,15,15,NZ
                     MVC ZMSG000S(24),=CL24'Too Many Selections'
                     MVC ZMSG000L(80),=CL80'The Maximum Number of Selecx
               tions has been reached. Selection not recorded.'
                     MVC   CALLL(CALLML),CALLM         Issue
                     L     R15,ISPLINKA                     error
                     CALL (15),(SETMSG,ISPZ000),VL,MF=(E,(10))    msg.
                     LA    R15,8             RC = 8
                  ENDIF
              ELSE
*---------------------------------------------------------------------*
* Member already in member list - Issue error message                 *
*---------------------------------------------------------------------*
                  MVC ZMSG000S(24),=CL24'Duplicate Selection'
                  MVC ZMSG000L(80),=CL80'The member has been selected ax
               lready.  Select another or PF3 to XMIT'
                  MVC   CALLL(CALLML),CALLM            Issue
                  L     R15,ISPLINKA                        error
                  CALL (15),(SETMSG,ISPZ000),VL,MF=(E,(10))       msg.
                  LA    R15,8             RC = 8
               ENDIF
            ELSE
*---------------------------------------------------------------------*
* Invalid selection - Issue error message                             *
*---------------------------------------------------------------------*
               MVC ZMSG000S(24),=CL24'Invalid Selection'
               MVC ZMSG000L(80),=CL80'Enter either S for Select or B fox
               r Browse'
               MVC   CALLL(CALLML),CALLM            Issue
               L     R15,ISPLINKA                          error
               CALL (15),(SETMSG,ISPZ000),VL,MF=(E,(10))          msg.
               LA    R15,8                RC = 8
            ENDIF
         ENDIF
*---------------------------------------------------------------------*
* Get member name                                                     *
*---------------------------------------------------------------------*
         DOEXIT C,15,EQ,=F'8'             Leave when END is entered
         MVC   CALLL(CALLML),CALLM        Get the
         L     R15,ISPLINKA                       member name
         CALL (15),(LMMDISP,DSID,GET),MF=(E,(10))   that was selected
         IF (LTR,15,15,Z)                 RC = 0 for get member name
            MVC   TOP(8),ZLMEMBER         Move member name
         ENDIF
      ENDDO
      SLR   R15,R15                       RC = 0
   ENDDO
DOFREE EQU *
*---------------------------------------------------------------------*
* LMMDISP DATAID(&DSID) OPTION(FREE)                                  *
*---------------------------------------------------------------------*
         MVC   CALLL(CALLML),CALLM        Issue
         L     R15,ISPLINKA                    LMMDISP to free
         CALL  (15),(LMMDISP,DSID,FREE),VL,MF=(E,(10))     the DATAID
*---------------------------------------------------------------------*
* LMCLOSE DATAID(&DSID)                                               *
         MVC   CALLL(CALLML),CALLM        Close
         L     R15,ISPLINKA                      the
         CALL  (15),(LMCLOSE,DSID),VL,MF=(E,(R10))     dataset
DOLMFREE EQU *
*---------------------------------------------------------------------*
* LMFREE  DATAID(&DSID)                                               *
*---------------------------------------------------------------------*
         MVC   CALLL(CALLML),CALLM        Issue
         L     R15,ISPLINKA                     LMFREE to
         CALL  (15),(LMFREE,DSID),VL,MF=(E,(R10))   Free up dataid
RELOOP EQU *
      ENDDO
*---------------------------------------------------------------------*
* Free up storage an return to caller
*---------------------------------------------------------------------
EXIT     EQU   *
         L     R2,MSGADDR                 R1 = start address of storage
         FREEMAIN R,LV=80,A=(R2),SP=77    Free storage
         L     R13,SAVEAREA+4
         FREEMAIN RU,LV=WORKL,A=(R11),SP=77    Free storage
         RETURN  (14,12),RC=(15)          Return to caller
*---------------------------------------------------------------------*
* BUILD_DATASET_NAME - Create dataset name form PRJ1 LIB1 and TYP1    *
*---------------------------------------------------------------------*
BUILD_DATASET_NAME EQU *
         XC    XMASK,XMASK             Clear Table
         MVI   XMASK+C' ',C' '         Set up Table
         TRT   0(8,R6),XMASK           Search for First blank
         BNZ   LVL_FULL                Branch if Len NE 0
         LA    R1,8                    Otherwise len is 8 chars
         B     LVL_FULLX               Branch and Move in dsn
LVL_FULL EQU   *
         SR    R1,R6                   Length of dataset
LVL_FULLX EQU  *
         BCTR  R1,0                    Decrease for execute
         EX    R1,MOVE                 Move in Userid
         LA    R1,1(R1)                Recover Length
         AR    R4,R1                   Increment Pointer
         BR    R14                     Return
*---------------------------------------------------------------------*
* ADD_MEM_LIST - Add member to list                                   *
*---------------------------------------------------------------------*
ADD_MEM_LIST EQU *
         SLR   R15,R15
         LA    R3,MEM_LIST_STORE          Address of member list
         USING MEM_LIST,R3                Addressability
         IF CLC,MEM_LIST_CUR,EQ,=F'0'     Member list empty ?
            LR    R1,R3                   address of start of mbr list
            A     R1,=A(L'MEM_LIST_STORE)    R1 = address of length
            ST    R1,MEM_LIST_END            Save end of mem list
            LA    R1,MEM_LIST_MEMX           Address of member
            ST    R1,MEM_LIST_CUR            Current member address
         ENDIF
         L     R1,MEM_LIST_CUR            Current member address
         IF (C,1,GE,MEM_LIST_END)
            LA    R15,8
         ELSE
            MVI   0(R1),C' '              Space
            MVC   1(L'MEM_LIST_MEMX-1,R1),0(R1)   Move in space delim
            MVC   0(8,R1),ZLMEMBER        Move in member name
            LA    R1,L'MEM_LIST_MEMX(,R1) Point to addr of next member
            ST    R1,MEM_LIST_CUR         Current member address
         ENDIF
         BR 14                            Return
         DROP 3
*---------------------------------------------------------------------*
* CHK_UNIQUENESS - Check for member's existence in list               *
*---------------------------------------------------------------------*
CHK_UNIQUENESS EQU *
         LA    R3,MEM_LIST_STORE          Address of member list
         USING MEM_LIST,R3                Addressability
         SLR   R15,R15                    R15 = 0
         IF (CLC,MEM_LIST_CUR,NE,=F'0')   IF not 0, something in list
            LA    R1,MEM_LIST_MEMX        Address of member
            DO WHILE=(LTR,15,15,Z),UNTIL=(C,1,GE,MEM_LIST_CUR)
               IF CLC,0(8,1),EQ,ZLMEMBER  Does member already exist ?
                  LA    R15,8             yes ... RC = 8
               ENDIF
               DOEXIT LTR,15,15,NZ        Leave if RC NE 0
               LA    R1,L'MEM_LIST_MEMX(,1)   Point to next member
            ENDDO
         ENDIF
         BR 14                            Return
         DROP 3
*---------------------------------------------------------------------*
* TRANSMIT FUNCTION -  Build the XMIT command and use the TSO         *
*                      Service facility to issue it.
*---------------------------------------------------------------------
TRANSMIT_FUNCTION EQU *
         STM   R14,R12,12(R13)         save caller's registers
         LA    R15,XSAVE_AREA1         push
         ST    R15,8(,R13)              down
         ST    R13,4(,R15)               save area
         LR    R13,R15                    stack
         CLI   M,C'N'                   Transmit all members ?
         BE    XMIT_BUILD_MEMBER_LIST   No ... Then build member list
         LA    R1,XMIT_FULL_DSN_LEN     Length for full dataset
         GETMAIN RU,LV=(1),LOC=BELOW    Get storage below 16MB
         LR    R8,R1                    Address of start of storage
         USING XMIT_CMD,8
         MVI   XMIT_CMD,C' '            Blank out command field
         MVC   XMIT_CMD+1(XMIT_PFX_LEN-1),XMIT_CMD
         LA    R5,XMIT_FULL_DSN_LEN     Length of command field
         ST    R5,XMIT_SIZE             Save it
         B     XMIT_BUILD_CMD           Go build XMIT command.
*---------------------------------------------------------------------*
*     Build the member list for the members that are to be XMITTED
*---------------------------------------------------------------------
XMIT_BUILD_MEMBER_LIST EQU *
         LA    R7,MEM_LIST_STORE        Address of member list
         USING MEM_LIST,R7              Addressability
         L     R1,MEM_LIST_CUR          Get current member
         LA    R0,MEM_LIST_TEXT         address of members
         SR    R1,0
         LR    R10,R1
         LA    R1,XMIT_PFX_LEN(,1)
         LR    R2,R1
         GETMAIN RU,LV=(1),LOC=BELOW    Getmain storage below 16MB
         LR    R8,R1                    Address of start of storage
         USING XMIT_CMD,R8
         MVI   XMIT_CMD,C' '            Blank out command field
         MVC   XMIT_CMD+1(XMIT_PFX_LEN-1),XMIT_CMD
         ST    R2,XMIT_SIZE             Save XMIT size
         LR    R2,R8
         LA    R2,4(,R2)
         LR    R3,R10
         SLR   R5,R5                   Clear Storage to blanks
         ICM   5,8,=C' '
         MVCL  R2,R4
*---------------------------------------------------------------------*
*  Build the transmit command                                         *
*---------------------------------------------------------------------*
XMIT_BUILD_CMD EQU *
         MVC   XMIT_XMIT,=C'XMIT '     Move in XMIT to command
         LA    R1,XMIT_NODE_DOT_USERID        Index
         IF (CLC,NODE(8),NE,=CL8' ')    if blank node, assume nickname
            MVC   XMIT_NODE_DOT_USERID(8),NODE  Move in Node
            LA    2,1                     incr = 1
            LA    R3,8(,R1)               End of userid
            DO FROM=1,TO=2
               DOEXIT CLI,0(1),EQ,C' '
            ENDDO
            MVI   0(1),C'.'               Move in "."
         ENDIF
         MVC   1(8,R1),USERID          Move in USERID
         MVC   XMIT_DSN(4),=C' DA('    Move in DATASET keyword
*---------------------------------------------------------------------*
*  Determine length of dataset, and move it into the command          *
*---------------------------------------------------------------------*
         LA    R4,XMIT_DSN+4           Address of XMIT dataset field
         LA    R6,XMIT_DATASET         Address of dataset name
         XC    XMASK,XMASK             Clear Table
         MVI   XMASK+C' ',C' '         Set up Table
         TRT   0(44,R6),XMASK          Search for First blank
         BNZ   FULL                    Branch if Len NE 0
         LA    R1,44                   Otherwise dsn is 44 chars
         B     FULLX                   Branch and Move in dsn
FULL     EQU   *
         SR    R1,R6                   Length of dataset
FULLX    EQU   *
         BCTR  R1,0                    Decrease for execute
         EX    R1,MOVE                 Move in Userid
         LA    R1,1(R1)                Recover Length
         AR    R4,R1                   Increment Pointer
         MVC   0(2,R4),=C') '          Move in closing bracket
         CLI   M,C'Y'                  Xmit all members ?
         BE    XMIT_ALL_MEMBERS        Yes ... then branch
*  Move in members into the command
         MVC XMIT_MEMTAG(9),=C' MEMBERS('  Move in members keyword
         LA    R2,XMIT_MEMBERS
         LR    R3,10
         LA    R4,MEM_LIST_TEXT
         LR    R5,3
         MVCL  R2,R4
         AR    R2,R3
         IF (CLI,SEQ,EQ,C'Y')          Send sequentially ?
            MVC 0(5,R2),=C') SEQ'      Move in Sequential keyword
            L   R0,XMIT_SIZE
            A   R0,=F'4'
            ST  R0,XMIT_SIZE
         ELSE
            MVI 0(R2),C')'             Move in close bracket
         ENDIF
*---------------------------------------------------------------------*
*   XMIT dataset                                                      *
*---------------------------------------------------------------------*
XMIT_ALL_MEMBERS EQU *
         L     15,CVTPTR               point to MVS's vector table
         L     15,CVTTVT-CVT(,15)      point to TSO's vector table
         L     15,TSVTASF-TSVT(,15)    point to TSO service facility
         CALL  (15),                                                   X
               (=AL1(0,0,0,1),         flags                           X
               XMIT_CMD,               command text                    X
               XMIT_SIZE,              length of command text          X
               XRETCODE,               XMIT return code                X
               XREASON,                TSO service routine reason code X
               XABEND),                TSO service routine abend code  X
               VL,MF=(E,XCALL)
*---------------------------------------------------------------------*
*   Free storage and leave transmit function                          *
*---------------------------------------------------------------------*
         IF (CLI,SEQ,EQ,C'Y')          Send sequentially ?
            L   R0,XMIT_SIZE
            S   R0,=F'4'
            ST  R0,XMIT_SIZE
         ENDIF
         L     R1,XMIT_SIZE            get length of freemain
         FREEMAIN RU,LV=(1),A=(8)      Free storage
         L     R13,4(,R13)             pop save area stack
         RETURN (14,12),RC=(15)        return back to caller
         SLR 15,15                     RC = 0
         BR 14                         Return to caller
         DROP 7
MOVE     MVC   0(0,R4),0(R6)
*---------------------------------------------------------------------*
* Static Data                                                         *
*---------------------------------------------------------------------*
@DSID    DC    CL8'DSID'
@DS1     DC    CL8'DS1'
@P4JTRAN DC    CL8'P4JTRANS'
@MEMLIST DC    CL8'P4JTRANM'
@ZLMEMBE DC    CL8'ZLMEMBER'
ANY      DC    CL8'ANY '
BROWSE   DC    CL8'BROWSE'
CONTROL  DC    CL8'CONTROL'
DISPLAY  DC    CL8'DISPLAY'
ERRORS   DC    CL8'ERRORS'
FREE     DC    CL8'FREE'
GET      DC    CL8'GET'
ISPZ000  DC    CL8'ISPZ000 '
LMCLOSE  DC    CL8'LMCLOSE'
LMFREE   DC    CL8'LMFREE'
LMINIT   DC    CL8'LMINIT'
LMMDISP  DC    CL8'LMMDISP'
LMOPEN   DC    CL8'LMOPEN'
NAMELIST DC    C'(DSID ZLMEMBER ZLLCMD ZUSER PRJ1 LIB1 TYP1 MEM DS1 '
         DC    C'XVOL ZMSG000S ZMSG000L M SEQ NODE USERID '
         DC    C'ZCMD ZERRSM ZERRLM XMITZCMD)'
NAMES1   DC    C'(PRJ1 LIB1 TYP1 M SEQ NODE USERID)'
PROFILE  DC    CL8'PROFILE'
RESTORE  DC    CL8'RESTORE'
RETURN   DC    CL8'RETURN'
SAVE     DC    CL8'SAVE'
SETMSG   DC    CL8'SETMSG'
SHARED   DC    CL8'SHARED'
SHRW     DC    CL8'SHRW'
VDEFINE  DC    CL8'VDEFINE
VGET     DC    CL8'VGET'
VPUT     DC    CL8'VPUT'
VARLENS  DS    0F
         DC    A(L'DSID)
         DC    A(L'ZLMEMBER)
         DC    A(L'ZLLCMD)
         DC    A(L'ZUSER)
         DC    A(L'PRJ1)
         DC    A(L'LIB1)
         DC    A(L'TYP1)
         DC    A(L'MEM)
         DC    A(L'DS1)
         DC    A(L'XVOL)
         DC    A(L'ZMSG000S)
         DC    A(L'ZMSG000L)
         DC    A(L'M)
         DC    A(L'SEQ)
         DC    A(L'NODE)
         DC    A(L'USERID)
         DC    A(L'ZCMD)
         DC    A(L'ZERRSM)
         DC    A(L'ZERRLM)
         DC    A(L'XMITZCMD)
NUMVARS  EQU   (*-VARLENS)/4
VARFMTS  DC    (NUMVARS)CL8'CHAR'
OPTIONS  DC    C'(NOBSCAN,LIST)'
CALLM    CALL  ,(,,,,,,,,,,,,,,,,,,,,),VL,MF=L
CALLML   EQU   *-CALLM
XCALL    CALL  ,(,,,,,,,,,,,,,,,,,,,,,,,),VL,MF=L
XMITCMD  DS    CL255
*---------------------------------------------------------------------*
* Work Area Storage                                                   *
*---------------------------------------------------------------------*
WORK     DSECT
BLANKS   DS    CL80
BLANK_DATASET DS    CL44
SAVEAREA DS    18F
ISPLINKA DS    F
CALLL    CALL  ,(,,,,,,,,,,,,,,,,,,,,),VL,MF=L
SRCHTAB  DS    XL256
MSGADDR  DS    A
TOP      DS    CL8
XMASK    DC    64XL1'00'                       TRT Table to test
         DC    XL1'40'                           Blank
         DC    191XL1'00'                      (End of User-id)
XRETCODE DS    A                               return code
XREASON  DS    A                               reason code
XABEND   DS    A                               abend code
XMIT_SIZE DS   F                               Size of this block
XMIT_DATASET   DS    CL56
XMIT_CMD_LEN   DS    A                         XMIT command length
XSAVE_AREA1 DS  18A                             register save area
XSAVE_AREA2 DS  18A                             register save area
*---------------------------------------------------------------------
* ISPF Variable Storage section of work area
*---------------------------------------------------------------------*
VARAREA  DS    0F
DSID     DS    CL8
ZLMEMBER DS    CL8
ZLLCMD   DS    C
ZUSER    DS    CL8
PRJ1     DS    CL8
LIB1     DS    CL8
TYP1     DS    CL8
MEM      DS    CL8
DS1      DS    CL56
XVOL     DS    CL6
ZMSG000S DS    CL24
ZMSG000L DS    CL80
M        DS    CL1
SEQ      DS    CL1
NODE     DS    CL8
USERID   DS    CL8
ZCMD     DS    CL133
ZERRSM   DS    CL24
ZERRLM   DS    CL80
XMITZCMD DS    CL133
MEM_LIST_STORE DS CL(MEM_LIST_PFX_LEN+(L'MEM_LIST_MEMX*MEM_LIST_SIZE))
WORKL    EQU   *-WORK
MEM_LIST DSECT
MEM_LIST_SIZE  EQU   200                  Member list size
MEM_LIST_CUR   DS    F                    Current member
MEM_LIST_END   DS    F                    End of member list
MEM_LIST_PFX_LEN EQU    *-MEM_LIST        Size of member list prefix
MEM_LIST_TEXT  EQU   *
MEM_LIST_MEMX  DS    CL9                  mem_name,
XMIT_CMD DSECT
XMIT_XMIT      DS    CL5                  "XMIT "
XMIT_NODE_DOT_USERID DS    CL17           'nnnnnnnn.useruser'
XMIT_DSN       DS    CL61                 " da(" dsn ")"
XMIT_FULL_DSN_LEN EQU *-XMIT_CMD          Length for Full dataset xmit
XMIT_MEMTAG    DS    CL9                  " MEMBERS("
XMIT_PFX_LEN   EQU   *-XMIT_CMD           Length of XMIT command
XMIT_MEMBERS   DS    C                    Members
         IKJTSVT
         CVT   DSECT=YES
         YREGS
         END


)attr
  * type(input) intens(non)
)body
%---------------------------  Transmit Dialog  ---------------------------------
%Command
===>_zcmd                                                            +
%
%ISPF Library:
+   Project%===>_prj1    +
+   Group  %===>_lib1    +
+   Type   %===>_typ1    +
+   Member %===>_mem     +       (Blank for sequential dataset)
+
%Other partitioned or sequential dataset:
+   Dataset Name
%===>_ds1                                                    %
+   Volume Serial %===>_xvol  + (For uncatalogued datasets)                    %
+
%All Members (Y/N) ===>_m+    Y for all members, N for member list
+                             Y must be specified for sequential datasets
+
%Sequential (Y/N)  ===>_seq+  Y for send data sequentially
+                             N must be specified if all members transmitted
%Destination (Enter TSO NODES on command line for list of valid names)
+   Node   %===>_node    + Node to send output to
+   Userid %===>_userid  + Userid/Nickname to send output to
+
+
)init
.help = p4jtrant
&mem=' '
)proc
   if (&ds1 = ' ')
     ver (&prj1,nb)
     ver (&lib1,nb)
     ver (&typ1,nb)
   if (&ds1 *= ' ')
     &zfc = trunc(&ds1,1)
     if (&zfc = '''')
       &zrem = .trail
       &zrem2 = trunc(&zrem,'''')
       if (&zrem2 = &zrem)
         &ds1 = '&ds1&zfc'
     &zmcds1 = &ds1
   if (&m = 'Y')
      ver (&seq,nb,list,N)
   ver (&m,nb,list,Y,N)
   ver (&seq,nb,list,Y,N)
   if (&node = ' ')
      ver (&userid,nb,name)
   ver (&userid,nb,name)
)end


)ATTR
  _ TYPE(INPUT) CAPS(OFF) INTENS(HIGH)
  | AREA(DYNAMIC) SCROLL(ON) EXTEND(ON)
  + TYPE(TEXT) INTENS(LOW)
   TYPE(OUTPUT) INTENS(HIGH) JUST(RIGHT) PAD(0)
 01 TYPE(DATAIN) INTENS(HIGH) CAPS(ON)
 02 TYPE(DATAOUT) INTENS(LOW)
 03 TYPE(DATAIN)  INTENS(HIGH) CAPS(ON)
 04 TYPE(DATAOUT)  INTENS(LOW)
 05 TYPE(DATAOUT)  INTENS(HIGH)
 06 TYPE(DATAOUT)  INTENS(LOW)
)BODY EXPAND(//)
%MEMBER LIST -- &ZDSN /-/ %ROWZMLCR%OFZMLTR+
%COMMAND ===>_ZCMD                                            %SCROLL
===>_Z   +
|ZDATA
|
|
|
|
|
)INIT
  .ZVARS = 'ZSCML'       /* SCROLL AMT VARIABLE NAME  */
  .HELP = ISR01130
)PROC
  VPUT (ZSCML) PROFILE
  &XMITZCMD = &ZCMD
)END


%TUTORIAL-------------------  Transmit Dialog  ---------------------------------
%Command
===>_zcmd                                                            +
%
%ALL Members (Y/N) ===> +     Y for all members, N for member list
+
+   Enter Y to display member list.  S will select the member for XMIT and
+   B will browse the member.  A maximum of 10 members can be selected.
+
%Sequential (Y/N)  ===> +     Y for send data sequentially
+
+   Select Y to send the data as sequential output.  Do not send LMODs
+   as sequential output, as they will be NON-EXECUTABLE.  If sending
+   to a VM system, output MUST be sent sequentially.
+
%Destination
+   Node   %===> +               Node to send output to.
+
+   Enter the node that the output is to be sent to
+     (eg RBSDFA,RBSDFB,TORONTO,MONTREAL,VANCOUVR,etc)
+
+   Userid %===> +               Userid/Nickname to send output to.
+
)end
IXVTOCP PROGRAM
IXVTOCP  CSECT
         STM   R14,R12,12(R13)           SAVE INCOMING ENVIRONMENT
         LR    R10,R15                   SAVE MODULE BASE ADDRESS
         USING IXVTOCP,R10               SET UP MODULE ADDRESSABILITY
         USING UCBOB,R7                  ESTABLISH R7 AS UCB BASE
         GETMAIN R,LV=WORKLEN,SP=0       GETMAIN WORK AREA STORAGE
         LTR   R15,R15                   STORAGE ACQUIRED?
         BNZ   QUICKRET                  NO = SHUT 'ER DOWN
         LR    R9,R1                     SET UP ...
         USING WRKDSECT,R9                  WORK AREA ADDRESSABILITY
         ST    R9,WORKADDR               SAVE WORK AREA ADDRESS
         ST    R13,SAVEAREA+4            SAVE SAVEAREA ADDRESS
         LA    R13,SAVEAREA              LOAD R13 WITH NEW SAVEAREA
         LOAD  EP=ISPLINK                GET ISPLINK ADDRESS
         ST    R0,LINKADDR               SAVE ISPLINK ADDRESS
         L     R8,16                     SET UP ...
         USING CVTMAP,R8                   CVT ADDRESSABILITY
         L     R6,CVTUCBSC               GET UCB SCAN ROUTINE ADDRESS
         ST    R6,UCBSCRTN               SAVE UCB SCAN ROUTINE ADDRESS
         DROP  R8                        DROP CVT ADDRESSABILITY
         MVC   VOLSER,=6C' '             CLEAR VOLSER AREA
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VDEFINE,CL6,VOLSER,CHAR,L6),VL,MF=(E,ISPLINK)
         LTR   R15,R15                   DEFINE OK?
         BNZ   RETURN                    NO - CLEAN UP & PACK IT IN
         MVC   ZCMD,=80C' '              CLEAR COMMAND AREA
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VDEFINE,CL80,ZCMD,CHAR,L80),VL,MF=(E,ISPLINK)
         LTR   R15,R15                   DEFINE OK?
         BNZ   RETURN                    NO - CLEAN UP & PACK IT IN
         MVC   UCB,=4C' '                CLEAR UCB AREA
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VDEFINE,CL4,UCB,CHAR,L4),VL,MF=(E,ISPLINK)
         LTR   R15,R15                   DEFINE OK?
         BNZ   RETURN                    NO - CLEAN UP & PACK IT IN
         MVC   DS1DSNAM,=44C' '          CLEAR DS1DSNAM AREA
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VDEFINE,CL44,DS1DSNAM,CHAR,L44),VL,MF=(E,ISPLINK)
         LTR   R15,R15                   DEFINE OK?
         BNZ   RETURN                    NO - CLEAN UP & PACK IT IN
         LA    R3,BLANKMSG               GET ADDRESS OF BLANK MESSAGE
         ST    R3,LISTMSG                SAVE MESSAGE ADDRESS
         MVI   ALLFLAG,C'N'              INITIALIZE FLAG
DISPLAY0 MVC   VSERTAB(240),=240C'*'     INITIALIZE VOLSER TABLE
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(TBCREATE,TBLNAME,NOKEY,TBLIST,NOWRITE,REPLACE),  X
               VL,MF=(E,ISPLINK)
         C     R15,=F'4'                 SUCCESSFUL CREATE?
         BH    RETURN                    NO - CLEAN UP & PACK IT IN
         MVC   ZCMD,=80C' '              CLEAR COMMAND AREA
         CLI   ALLFLAG,C'Y'              ALL FLAG SET?
         BNE   NOTSET                    NO - BYPASS
         MVC   VOLSER,=6C' '             CLEAR VOLSER AREA
NOTSET   L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         L     R3,LISTMSG                LOAD MESSAGE ADDRESS
         CALL  (15),(DISPLAY,IVTOCPNL,(R3)),VL,MF=(E,ISPLINK)
         LTR   R15,R15                   DISPLAY OK?
         BZ    INIT                      YES - PERFORM MORE INITIALZ'N
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VGET,ZVERB),VL,MF=(E,ISPLINK)
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VCOPY,ZVERB,LENVERB,ADDRVERB),VL,MF=(E,ISPLINK)
         L     R1,LENVERB                GET VERB LENGTH
         LTR   R1,R1                     LENGTH > 0?
         BZ    RETURN                    NO - CLEAN UP & PACK IT IN
         L     R1,ADDRVERB               GET VERB ADDRESS
         CLC   0(6,R1),=C'RETURN'        VERB = 'RETURN'?
         BE    RETURN                    YES - CLEAN UP & PACK IT IN
         CLC   0(3,R1),=C'END'           VERB = 'END'?
         BE    RETURN                    YES - CLEAN UP & PACK IT IN
INIT     LA    R3,BLANKMSG               GET ADDRESS OF BLANK MESSAGE
         ST    R3,LISTMSG                SAVE MESSAGE ADDRESS
         CLC   VOLSER,=6C' '             VOLSER?
         BE    LISTALL                   NO - CHECK ALL VOLUMES
         XC    SCANWORK(100),SCANWORK    CLEAR UCB SCAN WORK AREA
UCBSCAN0 LA    R1,SCANADDR               LOAD ADDRESS OF SCAN PARMS
         L     R15,UCBSCRTN              LOAD ADDRESS OF SCAN ROUTINE
         BALR  R14,R15                   LINK TO ROUTINE
         LTR   R15,R15                   UCB FOUND?
         BNZ   IERROR01                  NO - ISSUE ERROR MESSAGE
         L     R7,SCANUCB                GET UCB ADDRESS
         CLC   UCBVOLI,VOLSER            VOLSER MATCH?
         BE    IVTOCCHK                  YES - CHECK FOR INDEXED VTOC
         B     UCBSCAN0                  NO - CHECK NEXT UCB
IVTOCCHK TM    UCBSTAT,X'80'             ONLINE?
         BZ    IERROR01                  NO - ISSUE ERROR MESSAGE
         CVAFTST UCB=(R7)                CHECK FOR CVAF STATUS
         LTR   R15,R15                   CVAF?
         BZ    NOCVAF01                  YES - DISPLAY MESSAGE
         C     R15,=F'4'                 CVAF/NO INDEXED VTOC?
         BE    ONEONLY                   YES - GET INFORMATION
         C     R15,=F'8'                 CVAF/INDEXED VTOC?
         BE    IXVMSG01                  YES - DISPLAY MESSAGE
         B     IERROR02                  NO - ISSUE MESSAGE
ONEONLY  BAL   R5,NOIXVTOC               BUILD TABLE INFORMATION
         B     BRTBL1(R15)               GO WHERE WE SHOULD
BRTBL1   B     NODSN                     NO INDEXED VTOC DSN FOUND
         B     ADSN                      INDEXED VTOC DSN FOUND
NODSN    LA    R3,IVTOC005               GET MESSAGE NAME ADDRESS
         ST    R3,LISTMSG                SAVE ADDRESS
         B     GODISP                    GO DISPLAY
ADSN     LA    R3,IVTOC008               GET MESSAGE NAME ADDRESS
         ST    R3,LISTMSG                SAVE ADDRESS
GODISP   B     TBLDISP0                  DISPLAY TABLE
LISTALL  MVI   ALLFLAG,C'Y'              SET FLAG
         XC    SCANWORK(100),SCANWORK    CLEAR UCB SCAN WORK AREA
UCBSCAN1 LA    R1,SCANADDR               LOAD ADDRESS OF SCAN PARMS
         L     R15,UCBSCRTN              LOAD ADDRESS OF SCAN ROUTINE
         BALR  R14,R15                   LINK TO ROUTINE
         LTR   R15,R15                   UCB FOUND?
         BNZ   TBLDISP0                  DISPLAY TABLE
         L     R7,SCANUCB                GET UCB ADDRESS
         TM    UCBSTAT,X'80'             ONLINE?
         BZ    UCBSCAN1                  NO - TRY NEXT UCB
         CVAFTST UCB=(R7)                CHECK FOR CVAF STATUS
         LTR   R15,R15                   CVAF?
         BZ    NOCVAF01                  YES - DISPLAY MESSAGE
         C     R15,=F'4'                 CVAF/NO INDEXED VTOC?
         BE    TBLCHECK                  YES - CHECK EXISTING ENTRIES
         B     UCBSCAN1                  NO - TRY NEXT UCB
TBLCHECK LA    R4,VSERTAB                GET ADDRESS OF VOLSER TABLE
TBLLOOP  CLC   0(6,R4),=C'******'        OPEN ENTRY?
         BE    TABLEUPD                  YES - ADD ENTRY
         CLC   0(6,R4),UCBVOLI           VOLSER IN TABLE?
         BE    UCBSCAN1                  YES - TRY NEXT UCB
         CLC   0(6,R4),=C'@@@@@@'        TABLE FULL?
         BE    TBLFULL                   YES - PROCESS FULL TABLE
         LA    R4,6(R4)                  INCREMENT TABLE POINTER
         B     TBLLOOP                   CHECK NEXT TABLE ENTRY
TABLEUPD MVC   0(6,R4),UCBVOLI           SAVE VOLSER IN TABLE
         MVC   VOLSER(6),UCBVOLI         SAVE VOLSER IN VARIABLE
         BAL   R5,NOIXVTOC               PROCESS VOLUME
         B     UCBSCAN1                  TRY NEXT UCB
TBLFULL  LA    R3,IVTOC009               GET ADDRESS OF MESSAGE NAME
         ST    R3,LISTMSG                SAVE VALUE
         B     DISPLAY0                  RE-DISPLAY PANEL
NOSUPP   LA    R3,IVTOC006               GET ADDRESS OF MESSAGE NAME
         ST    R3,LISTMSG                SAVE VALUE
         B     DISPLAY0                  RE-DISPLAY PANEL
IXVMSG01 LA    R3,IVTOC001               GET ADDRESS OF MESSAGE NAME
         ST    R3,LISTMSG                SAVE VALUE
         B     DISPLAY0                  RE-DISPLAY PANEL
IERROR01 LA    R3,IVTOC003               GET ADDRESS OF MESSAGE NAME
         ST    R3,LISTMSG                SAVE VALUE
         B     DISPLAY0                  RE-DISPLAY PANEL
IERROR02 LA    R3,IVTOC004               GET ADDRESS OF MESSAGE NAME
         ST    R3,LISTMSG                SAVE VALUE
         B     DISPLAY0                  RE-DISPLAY PANEL
NOIXVTOC MVC   DS1DSNAM(44),=44C' '      CLEAR AREA
         MVC   DSNAREA(12),=C'SYS1.VTOCIX.' MOVE IN DSNAME PREFIX
         MVC   DSNAREA+12(6),VOLSER      MOVE IN DSNAME SUFFIX
         USING BUFLIST,R1
         USING BFLE,R2
         LA    R1,BUFAREA                GET ADDRESS OF BUFFER
         LA    R2,8(,R1)                 GET ADDRESS OF LIST ENTRY
         XC    BUFAREA(BFLHLN+BFLELN),BUFAREA CLEAR BUFFER AREA
         OI    BFLHFL,BFLHDSCB           SET DSCB ACCESS FLAG
         MVI   BFLHNOE,1                 INDICATE ONE BUFFER ENTRY
         LA    R3,DS1DSNAM               GET WORK AREA ADDRESS
         ST    R3,BFLEBUF                SAVE IN BUFFER
         MVI   BFLELTH,DSCB1LTH          INDICATE WORK AREA LENGTH
         OI    BFLEFL,BFLECHR            SET CCHHR FLAG
         DROP  R1,R2
         XC    FCLAREA(FCLHDLEN+FCLDSNEL),FCLAREA CLEAR FCL AREA
         USING FCLMAP,R1
         USING FCLDSN,R2
         LA    R1,FCLAREA                GET FILTER CRITERIA LIST ADDR
         LA    R2,FCLHDEND               GET FCL ENTRY ADDRESS
         MVC   FCLID,=C'FCL '            MOVE IN HEADER
         MVC   FCLCOUNT(2),=H'1'         SET COUNT
         MVI   FCL1FLAG,X'80'            SET FULLY QUALIFIED DSN FLAG
         MVI   FCLDSNLG,X'12'            SET NAME LENGTH
         LA    R8,DSNAREA                GET ADDRESS OF DSNAREA
         ST    R8,FCLDSNA                SAVE ADDRESS
READDSCB EQU   *
*   INSERT YOUR INSTALLATIONS AUTHORIZATION SVC AT THIS POINT
*        MODESET KEY=ZERO,MODE=SUP
         CVAFFILT ACCESS=READ,UCB=(R7),FCL=FCLAREA,BUFLIST=BUFAREA,    X
               MF=(E,CVAFMAP)
         MODESET KEY=NZERO,MODE=PROB
         TM    FCLDSNST,X'01'            DATASET FOUND?
         BO    CHECKDSN                  YES - GO ON
         TM    FCLDSNST,X'02'            DSN FOUND?
         BNO   NOIDXDSN                  NO - MUST BE NO INDEXED VTOC
         LA    R1,FCLAREA                GET FCL AREA ADDRESS
         TM    FCL1FLAG,X'80'            DSN FULLY QUALIFIED?
         BNO   NOIDXDSN                  NO - WE'RE ALL DONE THEN
         NI    FCL1FLAG,X'7F'            SET FULLY QUALIFIED FLAG OFF
         MVI   FCLDSNLG,X'0D'            RESET LENGTH
         MVC   DSNAREA+12(6),=C'*     '  SET DSN FILTER
         B     READDSCB                  GO CHECK AGAIN
CHECKDSN DROP  R1,R2
         MVC   UCB(4),=4C' '             CLEAR UCB AREA
         MVC   UCB(3),UCBNAME            MOVE IN UCB ADDRESS
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(TBADD,TBLNAME,TBLIST),VL,MF=(E,ISPLINK)
         LA    R15,4                     SET RETURN CODE
         BR    R5                        RETURN
NOIDXDSN MVC   DS1DSNAM(44),=44C' '      CLEAR DSNAME AREA
         MVC   DS1DSNAM(3),=C'N/A'       MOVE IN NOT AVAILABLE FLAG
         MVC   UCB(4),=4C' '             CLEAR UCB AREA
         MVC   UCB(3),UCBNAME            MOVE IN UCB ADDRESS
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(TBADD,TBLNAME,TBLIST),VL,MF=(E,ISPLINK)
         LA    R15,0                     SET RETURN CODE
         BR    R5                        RETURN
NOCVAF01 LA    R3,IVTOC002               GET ADDRESS OF MESSAGE NAME
         ST    R3,LISTMSG                SAVE VALUE
         B     DISPLAY0                  RE-DISPLAY PANEL
TBLDISP0 L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(TBTOP,TBLNAME),VL,MF=(E,ISPLINK)
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         L     R3,LISTMSG                LOAD MESSAGE ADDRESS
         CALL  (15),(TBDISPL,TBLNAME,PNLNAME,(R3),BLANKMSG),          X
               VL,MF=(E,ISPLINK)
         C     R15,=F'8'                 FINISHED?
         BNE   REDISPL                   NO - DISPLAY AGAIN
         LA    R3,BLANKMSG               GET ADDRESS OF BLANK MESSAGE
         ST    R3,LISTMSG                SAVE MESSAGE ADDRESS
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VGET,ZVERB),VL,MF=(E,ISPLINK)
         L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(VCOPY,ZVERB,LENVERB,ADDRVERB),VL,MF=(E,ISPLINK)
         L     R1,LENVERB                GET VERB LENGTH
         LTR   R1,R1                     LENGTH > 0?
         BZ    RETURN                    NO - CLEAN UP & PACK IT IN
         L     R1,ADDRVERB               GET VERB ADDRESS
         CLC   0(6,R1),=C'RETURN'        VERB = 'RETURN'?
         BE    RETURN                    YES - CLEAN UP & PACK IT IN
REDISPL  L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(TBCLOSE,TBLNAME),VL,MF=(E,ISPLINK)
         LTR   R15,R15                   CLOSE OK?
         BNZ   RETURN                    NO - RETURN
         B     DISPLAY0                  RE-DISPLAY
RETURN   L     R15,LINKADDR              LOAD ISPLINK ADDRESS
         CALL  (15),(TBCLOSE,TBLNAME),VL,MF=(E,ISPLINK)
         LTR   R15,R15                   CLOSE OK?
         BNZ   RETURN                    NO - RETURN
         L     R1,WORKADDR               GET GETMAIN AREA ADDRESS
         L     R13,SAVEAREA+4            RESTORE SAVE AREA POINTER
         DROP  R9                        DROP ADDRESSABILITY
         FREEMAIN R,LV=WORKLEN,A=(1),SP=0   FREE STORAGE
QUICKRET LM    R14,R12,12(R13)           RESTORE ENVIRONMENT
         LA    R15,0                     SET RETURN CODE
         BR    R14                       RETURN
DISPLAY  DC    C'DISPLAY'
VDEFINE  DC    C'VDEFINE'
VGET     DC    C'VGET'
VCOPY    DC    C'VCOPY'
IVTOCPNL DC    C'IVTOCPNL'
CL4      DC    C'(UCB)'
CL6      DC    C'(VOLSER)'
CL44     DC    C'(DS1DSNAM)'
CL80     DC    C'(ZCMD)'
TBLIST   DC    C'(VOLSER UCB DS1DSNAM)'
TBCREATE DC    C'TBCREATE'
TBADD    DC    C'TBADD'
TBTOP    DC    C'TBTOP'
TBCLOSE  DC    C'TBCLOSE'
TBDISPL  DC    C'TBDISPL'
NOWRITE  DC    C'NOWRITE'
REPLACE  DC    C'REPLACE'
TBLNAME  DC    C'IVTOCNME'
PNLNAME  DC    C'IVTOCTBL'
NOKEY    DC    CL80' '
ZVERB    DC    CL8'ZVERB'
CHAR     DC    CL8'CHAR'
L4       DC    F'4'
L6       DC    F'6'
L44      DC    F'44'
L80      DC    F'80'
IVTOC001 DC    C'IVTOC001'
IVTOC002 DC    C'IVTOC002'
IVTOC003 DC    C'IVTOC003'
IVTOC004 DC    C'IVTOC004'
IVTOC005 DC    C'IVTOC005'
IVTOC006 DC    C'IVTOC006'
IVTOC008 DC    C'IVTOC008'
IVTOC009 DC    C'IVTOC009'
BLANKMSG DC    CL80' '
SCANADDR DC    A(SCANWORK)
         DC    A(SCANTYPE)
         DC    A(SCANUCB)
SCANTYPE DC    AL1(UCB3DACC)
         DS    0D
SCANWORK DS    CL100
SCANUCB  DS    F
VSERTAB  DC    240C'*'
         DC    6C'@'
VOLSER   DS    CL6
UCB      DS    CL4
DSNAREA  DS    CL44
ALLFLAG  DS    CL1
ISPLINK  CALL  ,(,,,,,,,),VL,MF=L
CVAFMAP  CVAFFILT MF=L
FCLAREA  DS    CL(FCLHDLEN+FCLDSNEL)
BUFAREA  DS    CL20
WRKDSECT DSECT
LINKADDR DS    F
WORKADDR DS    F
UCBSCRTN DS    F
SAVEAREA DS    18F
ZCMD     DS    CL80
LENVERB  DS    F
ADDRVERB DS    F
LISTMSG  DS    F
         IECSDSL1 1
DSCB1LTH EQU   *-IECSDSL1
WORKLEN  EQU   *-WRKDSECT
BUFLIST  ICVAFBFL DSECT=YES
FCLMAP   ICVFCL
         CVT   DSECT=YES
         IECDIOCM
         DSECT
         IEFUCBOB
         END
*=====================================================================
* Bring up LE.
*=====================================================================
ASMLE3 CEEENTRY PPA=MAINPPA,AUTO=WORKSIZE,MAIN=YES
        USING WORKAREA,13
        LA 1,0 Pass no parms
        L 15,A1C401B Get the addr of the COBOL or PL/I pgm
        BALR 14,15 Call it
*=====================================================================
* Terminate LE.
*=====================================================================
        CEETERM RC=0
MAINPPA CEEPPA Constants describing the code block
A1C401B DC V(A1C401B) VCON for COBOL or PL/I pgm
* ====================================================================
* The Workarea and DSA
* ====================================================================
WORKAREA DSECT
        ORG *+CEEDSASZ Leave space for the DSA fixed part
        DS 0D
WORKSIZE EQU *-WORKAREA
        CEEDSA Mapping of the Dynamic Save Area
        CEECAA Mapping of the Common Anchor Area
        CEEEDB Mapping of the Enclave Data Block
        END ASMLE3Listing APF libraries



/* REXX */
call "'module.loadlib(listapf)'"


*===================================================================*
*  LISTAPF - Program to list APF authorized libraries by issuing    *
*            macro CSVAPF.                                          *
*===================================================================*
LISTAPF  CSECT
LISTAPF  AMODE 31
LISTAPF  RMODE 24
         SAVE  (14,12)
         LR    R12,R15
         USING LISTAPF,R12
         ST    R13,SAVE+4
         LA    R11,SAVE
         ST    R11,8(R13)
         LR    R13,R11
         B     CONTINUE
         DC    CL16'  LISTAPF 1.1  '
         DC    CL9'&SYSDATE'
*
CONTINUE DS    0H
         BAL   R11,GETSTOR                     Acquire default storage
         LA    R13,SAVE1                       Savearea for csvapf
*
GETAPF   EQU   *                               Issue csvapf request
         CSVAPF REQUEST=LIST,                                          *
               ANSAREA=(R9),                                           *
               ANSLEN=(R8),                                            *
               RSNCODE=RSNCODE,                                        *
               RETCODE=RETCODE
         CLC   RETCODE,=AL4(CSVAPFRC_OK)       Request ok?
         BE    LOOP0                           Yes, branch ahead
         CLC   RETCODE,=AL4(CSVAPFRC_WARN)     Warning?
         BNE   ERRORS                          No, error
         NC    RSNCODE,=AL4(CSVAPFRSNCODEMASK) Clear high order bits
         CLC   RSNCODE,=AL4(CSVAPFRSNNOTALLDATARETURNED) More length?
         BNE   ERRORS                          No, error
         L     R2,APFHTLEN-APFHDR(4)           Get required length
         BAL   R11,RELSTOR                     Release old storage
         ST    R2,AREALEN                      Store needed length
         BAL   R11,GETSTOR                     Acquire new storage
         B     GETAPF                          And request list again
*
LOOP0    EQU   *
         TPUT  LINETIT,72                      Send header line
         L     R10,0(R9)                       R10 = number of entries
         L     R7,12(R9)                       Jump header
         LA    R9,0(R7,R9)                     R9 = first entry
*
LOOP1    EQU   *                               Loop through list
         MVC   LINEVOL(6),4(R9)                Move volume
         MVC   LINEFILE(44),10(R9)             and filename to line
         TPUT  LINE0,72                        send line
         LH    R7,0(R9)                        point to next entry
         LA    R9,0(R7,R9)
         BCT   R10,LOOP1                       loop to next entry
*
EXIT     EQU   *                               Exit program
         BAL   R11,RELSTOR                     Release storage
         L     R13,SAVE+4
         LM    R14,R12,12(R13)
         SR    R15,R15
         BR    R14
*===================================================================*
*        SUBROUTINES                                                *
*===================================================================*
GETSTOR  EQU   *                               Storage for csvapf
         LA    R8,AREALEN
         STORAGE OBTAIN,                                               *
               LENGTH=(R8),                                            *
               ADDR=(R9)
         ST    R9,AREAADDR
         BR    R11
*
RELSTOR  EQU   *                               Release storage
         LA    R8,AREALEN
         L     R9,AREAADDR
         STORAGE RELEASE,                                              *
               LENGTH=(R8),                                            *
               ADDR=(R9)
         BR    R11
*
ERRORS   EQU   *                               If any error occurred,
         MVC   ZREG,RETCODE                    prepare display of
         UNPK  ZOUT9,ZREG5                     return and reason codes
         NC    ZOUT8,ZTR1                      and send them
         TR    ZOUT8,ZTR2
         MVC   ERRORRC,ZOUT8
         MVC   ZREG,RSNCODE
         UNPK  ZOUT9,ZREG5
         NC    ZOUT8,ZTR1
         TR    ZOUT8,ZTR2
         MVC   ERRORRN,ZOUT8
         TPUT  LINERR0,72
         TPUT  LINERR1,72
         B     EXIT
*===================================================================*
*        WORK AREAS                                                 *
*===================================================================*
SAVE     DS    18F                             Standard save area
SAVE1    DS    18F                             save area for csvapf
AREALEN  DC    F'8192'                         default csvapf length
AREAADDR DS    F                               addr of csvapf answer
RETCODE  DS    F                               csvapf returncode
RSNCODE  DS    F                               csvapf reasoncode
LINETIT  DC    CL72'List of APF Authorized datasets'
LINE0    DS    0CL72                           output line
         DC    CL4' '
LINEFILE DS    CL50
LINEVOL  DS    CL19
LINERR0  DS    0CL72                           error output line
         DC    C'Error processing request (macro CSVAPF)'
         DC    CL40' '
LINERR1  DS    0CL72
         DC    C'Return Code (hex): '
ERRORRC  DC    CL8' '
         DC    CL4' '
         DC    C'Reason Code (hex): '
ERRORRN  DC    CL8' '
         DC    CL40' '
ZTR1     DC    X'0F0F0F0F0F0F0F0F'
ZTR2     DC    C'0123456789ABCDEF'
         DS    0F
ZREG5    DS    0CL5
ZREG     DS    CL4
         DC    CL1' '
         DS    0D
ZOUT9    DS    0CL9
ZOUT8    DS    CL8
         DC    CL4' '
         LTORG
*
         CSVAPFAA
         YREGS
         END
Advanced Features of Macro Instructions

This lecture will focus on some of the advanced features of the 
macro language as implemented by the IBM/System 360 assembler.

We shall focus on our stack handling macros.

Some of the features to be covered by this lecture include.

   1.  The use of concatenation to generate type–specific instructions.

   2.  Some standard system variable symbols.

   3.  The use of one system variable symbol to solve the branch problem.

   4.  Conditional assembly.

   5.  The use of conditional assembly as a help in writing STKPOP.

   7.  The ABEND macro and its use in signaling run–time errors.

   8.  A completed version of our stack macros.

 



Concatenation: Building Operations

In a model statement, it is possible to concatenate two strings of characters.

Consider the macro prototype to load a register from one of several sources.
Note the use of the string “&NAME” to allow this to be a branch target.

         MACRO

&NAME    LOAD &REG,&TYPE,&ARG

&NAME    L&TYPE &REG,&ARG

         MEND

Consider a number of invocations.

LOAD R7,R,R6    becomes          LR R7,R6

LOAD R7,H,HW    becomes          LH R7,HW

LOAD R7,,FW      becomes          L R7,FW

Note here: the second argument is empty.  The empty string is concatenated to “F”.

We shall now extend the stack operations to push and pop contents of 
half–words and full–words, as well as registers.



Pushing from Various Sources

We look first at the handling of our STKPUSH.  The only restriction on the 
stack is that every value pushed be treated as a 32–bit fullword.

As a result, a 16–bit halfword will be sign–extended to a 32–bit fullword 
before being pushed onto the stack.  This is similar to the function of the 
LH instruction, which loads a register from a halfword.

The key instruction in the original STKPUSH macro is the following.

    ST  &R,0(3,2)     STORE THE ITEM INTO THE STACK

In this case, the item to be placed on the stack is found in the register 
indicated by the symbolic parameter &R.

The way to extend this instruction to all data types is as follows.

   1.  Select a register to be a fixed source for the word on the stack, and 

   2.  Construct instructions to load that fixed register from the source.



What Shall Be Stored on the Stack?

At this point, we have a decision to make.  What data types to store?

The size restriction on the stack limits the simple choices to addresses and the 
contents of registers, halfwords, and fullwords.

We must select a working register for the new macro.  I select R4.
The “key code” becomes as follows.

Stacking an address   LA R4,&ARG      Load address into R4.
                                   ST R4,&R,0(3,2)

Stacking a halfword  LH R4,&ARG     Load halfword into R4.
                                  ST R4,&R,0(3,2)

Stacking a fullword   L  R4,&ARG     Load fullword into R4.
                                  ST R4,&R,0(3,2)

Stacking a register     LR R4,&ARG     Load value from source
                              register into R4.
                                  ST R4,&R,0(3,2)



Passing the Type in a Macro Invocation

The solution adopted to the problem above is to pass the type in the 
macro call and use concatenation to build the load operator.

Here is some code taken from a macro definition that has been run and tested.  
First, we show the macro prototype.

&L2      STKPUSH &ARG,&TYP        

Next we show the “key instruction” in the macro body.

         L&TYP R4,&ARG            

Here are four typical invocations of the macro.

          STKPUSH R7,R      PUSH VALUE IN REGISTER.

          STKPUSH HHW,H     PUSH A HALFWORD VALUE.

          STKPUSH FFW,A     PUSH AN ADDRESS.

          STKPUSH FFW       PUSH A FULLWORD.

Note that the last invocation lacks a second argument.  In the expansion, this 
causes &TYP to be set to ‘ ’, a blank; “L&TYP” becomes “L ”.



The Macro Definition

Here is the definition for the macro at this stage of its development.

         MACRO                    

&L2      STKPUSH &ARG,&TYP        

&L2      LH    R3,STKCOUNT        

         SLA   R3,2               

         LA    R2,THESTACK        

         L&TYP R4,&ARG            

         ST    R4,0(3,2)          

         LH    R3,STKCOUNT        

         AH    R3,=H'1'           

         STH   3,STKCOUNT         

         MEND                     

Again, the “&L2” allows the macro invocation to be a branch target.



Some Invocations of this Macro

91          STKPUSH R7,R             

92+         LH    R3,STKCOUNT        

93+         SLA   R3,2               

94+         LA    R2,THESTACK        

95+         LR    R4,R7              

96+         ST    R4,0(3,2)          

97+         LH    R3,STKCOUNT        

98+         AH    R3,=H'1'           

99+         STH   3,STKCOUNT         

 

100          STKPUSH HHW,H            

101+         LH    R3,STKCOUNT        

102+         SLA   R3,2               

103+         LA    R2,THESTACK        

104+         LH    R4,HHW             

105+         ST    R4,0(3,2)          

106+         LH    R3,STKCOUNT        

107+         AH    R3,=H'1'           

108+         STH   3,STKCOUNT         



More Invocations of this Macro

109          STKPUSH FFW              

110+         LH    R3,STKCOUNT        

111+         SLA   R3,2               

112+         LA    R2,THESTACK        

113+         L     R4,FFW             

114+         ST    R4,0(3,2)          

115+         LH    R3,STKCOUNT        

116+         AH    R3,=H'1'           

117+         STH   3,STKCOUNT         

 

118          STKPUSH FFW,A            

119+         LH    R3,STKCOUNT        

120+         SLA   R3,2               

121+         LA    R2,THESTACK        

122+         LA    R4,FFW             

123+         ST    R4,0(3,2)          

124+         LH    R3,STKCOUNT        

125+         AH    R3,=H'1'           

126+         STH   3,STKCOUNT         

NOTE: The originals of the program listing are found at the end of the slides.

Saving the Work Registers

As written, this macro has the side effect of changing the values of three 
registers: R2, R3, & R4.  The value of R4 is preserved only if it is being pushed.

We should write macros so that they operate without side effects.  The only 
way to do this is to save and restore the values of the work registers.

There are many ways to do this.  The simplest is to alter the stack data structure.
Here is the new version.

STKCOUNT DC H‘0’    NUMBER OF ITEMS STORED ON STACK

STKSIZE  DC H‘64’   MAXIMUM STACK CAPACITY         

STKSAV2  DC F‘0’    SAVES CONTENTS OF R2

STKSAV3  DC F‘0’    SAVES CONTENTS OF R3

STKSAV4  DC F‘0’    SAVES CONTENTS OF R4

THESTACK DC 64F‘0’  THE STACK HOLDS 64 FULLWORDS   

This new definition does not alter the STKINIT macro.  It does affect the 
other two macros: STKPOP and STKPUSH.  We illustrate the latter.



The First Revision of STKPUSH

Here is the revision that allows the work registers to be saved.

         MACRO                    

&L2      STKPUSH &ARG,&TYP        

&L2      ST    R2,STKSAV2   THE ORDER OF SAVING

         ST    R3,STKSAV3   IS NOT IMPORTANT.

         ST    R4,STKSAV4         

         LH    R3,STKCOUNT        

         SLA   R3,2               

         LA    R2,THESTACK        

         L&TYP R4,&ARG            

         ST    R4,0(3,2)          

         LH    R3,STKCOUNT        

         AH    R3,=H'1'           

         STH   R3,STKCOUNT        

         L     R4,STKSAV4   THE ORDER OF RESTORATION 

         L     R3,STKSAV3   IS NOT IMPORTANT EITHER.

         L     R2,STKSAV2         

         MEND                     



The Status of the Macros at This Point

There are a few issues to be addressed at this point.

The only macro that will not change is the initialization macro, STKINIT.

   1.  We have not yet dealt with generalizing the STKPOP macro.

   2.  We have not yet dealt with either the stack empty problem or 
         that of the stack being full.  Each has to be addressed.

Each of these issues demands the use of techniques we have not yet discussed.

Consider the first problem.  We shall want to pop the following from the stack: 
register values, halfwords, and fullwords.  The type for the argument refers to 
the destination; an address can be popped into either a register or fullword.

In order to see the problem for STKPOP, consider the “key instruction”.

Halfword:    STH R4,&ARG

Fullword:     ST R4,&ARG

Register:      LR &ARG,R4  No STR for store register.

We could write a STR macro, but I want to use another solution.

Some System Variable Symbols

There are a number of system variable symbols.  I mention three.

&SYSDATE         The system date, in the 8 character form “MM/DD/YY”.
                           Use in the form of a declaration of initialized storage, as in
                           TODAY    DC C‘&SYSDATE’

&SYSTIME         The system time of day, in the five character form “HH.MM”.
                           Also used in the form of a declaration, as in
                           NOW      DC C‘&SYSTIME’

&SYSNDX           The macro expansion index.  For the first macro expansion, 
                           the Assembler initializes &SYSNDX to the string “0001”.
                           Each macro invocation increases the value represented by 1, 
                           giving rise to the sequence “0001”, “0002”, “0003”, etc.

The &SYSNDX system variable symbol can prevent a macro from generating 
duplicate labels.  The system symbol is concatenated to a leading character, 
which begins the label and must be unique within the macro definition.



More on the Macro Expansion Index

First consider the following string, used as a label in a macro definition.

L&SYSNDX L R4,STKSAV4

Note that the string “L&SYSNDX”, as written, contains eight characters: 
the initial character “L” followed by the 7 character sequence “&SYSNDX”.

On expansion, this will be converted to labels such as “L0001”, “L0002”, etc.

In the macro definition, this takes the maximum eight characters allowed for 
a properly formatted listing.  For this reason, I suggest that the better form for 
the label in the macro definition is Single_Letter&SYSNDX.

In actual fact, the requirement for the leading characters, to which the &SYSNDX 
is to be appended can be any sequence of one to four characters, provided only 
that the first character is a letter.  Thus the following are valid.

A12&SYSNDX ...    This label might become A120003.

WXYZ&SYSNDX ...   This might become WXYZ0117.

I suggest use of a single leading letter, this allows 26 labels per macro.

A Simple Example of Label Generation

Consider the simple macro used for packed division in the previous lecture.
We adapt it to prevent division by zero.

         MACRO

&LABEL   DIVID &QUOT,&DIVIDEND,&DIVISOR

&LABEL   ZAP   &QOUT,&DIVIDEND

         CP    &DIVISOR,=P‘0’  IS IT ZERO

         BNE   A&SYSNDX        NO, DIVISION IS OK

         ZAP   &QUOT,=P‘0’     YES, SET QUOTIENT TO 0

         B     B&SYSNDX

A&SYSNDX DP    &QUOT,&DIVISOR

B&SYSNDX NOPR  R3              DO NOTHING

         MEND

Note that the format of the NOPR instruction requires a register number 
(here R3), even though the instruction does nothing.



Sample Expansion of the Macro

With the above definition, consider the following expansions.

 A10START DIVID X,Y,Z

+A10START ZAP   X,Y

+         CP    Z,=P‘0’     IS IT ZERO

+         BNE   A0001       NO, DIVISION IS OK

+         ZAP   X,=P‘0’     YES, SET QUOTIENT TO 0

+         B     B0001

+A0001    DP    X,Z

+B0001    NOPR  R3          DO NOTHING

 A20DOIT  DIVID A,B,C

+A20DOIT  ZAP   A,B

+         CP    C,=P‘0’     IS IT ZERO

+         BNE   A0002       NO, DIVISION IS OK

+         ZAP   X,=P‘0’     YES, SET QUOTIENT TO 0

+         B     B0002

+A0002    DP    A,C

+B0002    NOPR  R3          DO NOTHING

Note that each invocation has distinct labels.  This removes the name clashes.

Another Design Strategy for DIVID

In this variant, a zero divisor will cause the program to terminate abnormally.

         MACRO

&LABEL   DIVID &QUOT,&DIVIDEND,&DIVISOR

&LABEL   ZAP   &QOUT,&DIVIDEND

         CP    &DIVISOR,=P‘0’  IS IT ZERO

         BNE   A&SYSNDX        NO, DIVISION IS OK

         ABEND                 INVOKE THE MACRO TO
                               TERMINATE EXECUTION.

A&SYSNDX DP    &QUOT,&DIVISOR

         MEND

 



The First Revision of STKINIT

Here is a revision of the STKINIT code that allows initialization of its size.

35          MACRO             

36 &L1      STKINIT &SIZE     

37 &L1      ST R3,STKSAV3     

38          SR R3,R3          

39          STH R3,STKCOUNT   

40          L  R3,STKSAV3     

41          B  L&SYSNDX       

42 STKCOUNT DC H'0'           

43 STKSIZE  DC H'&SIZE'       

44 STKSAV2  DC F'0'           

45 STKSAV3  DC F'0'           

46 STKSAV4  DC F'0'           

47 THESTACK DC &SIZE.F'0'     

48 L&SYSNDX SLA R3,0          

49          MEND              

Note the “.” in the definition of THESTACK.  This concatenates the value 
of the symbolic parameter with “F‘0’”, as in “128F‘0’”



The Second Revision of STKPUSH

         MACRO              

&L2      STKPUSH &ARG,&TYP  

&L2      ST    R3,STKSAV3   

         LH    R3,STKCOUNT  GET COUNT OF ITEMS ON THE STACK

         CH    R3,STKSIZE   IS THE STACK FULL?

         BNL   Z&SYSNDX     YES, DO NOT ADD ANOTHER.

         ST    R4,STKSAV4   NO, WE CAN PUSH ANOTHER ITEM.

         ST    R2,STKSAV2   START BY SAVING THE OTHER 2 REGISTERS

         SLA   R3,2         MULTIPLY THE INDEX BY 4.

         LA    R2,THESTACK  

         L&TYP R4,&ARG      FORM THE ADDRESS

         ST    R4,0(3,2)    STORE THE ITEM

         LH    R3,STKCOUNT  GET THE OLD COUNT OF ITEMS

         AH    R3,=H'1'     INCREMENT THE COUNT BY 1

         STH   R3,STKCOUNT  STORE THE CURRENT COUNT

         L     R4,STKSAV4   RESTORE THE REGISTERS.

         L     R2,STKSAV2   

Z&SYSNDX L     R3,STKSAV3   

         MEND               

This is the final version of the STKPUSH macro.

We must discuss another basic topic before addressing STKPOP.



Conditional Assembly

We have already seen how concatenation can be used to construct 
different instructions in a macro expansion.

We now investigate conditional assembly, in which the expansion of a macro 
can lead to a number of distinct code sequences.

Conditional assembly permits the testing of attributes such as data format, data 
value, or field length, and to use the results of such testing to generate source 
code that is specific to the case in question.

This lecture will focus on five specific conditional assembly instructions.

   AGO          an unconditional branch

   AIF          a conditional branch.  This means “Ask If”.

   ANOP        A NOP that can be the branch target for either AGO or AIF.

   MNOTE      print a programmer defined message at assembly time

   MEXIT             exit the macro definition.



Attributes for Use by Conditional Assembly

The assembler can generate code specified by certain attributes of 
the arguments to the macro definition at the time it is expanded.

There are six types of attributes that can be associated with a parameter.
Here are three if the more useful attributes.

   L’       Length         The length of the symbolic parameter

   I’        Integer         The integer attribute of a fixed–point, 
                                  floating–point, or packed decimal number.

   T’       Type            The type of the parameter, as specified by the
                                  DC or DS declaration with which it is defined.

Some types for the T’ attribute are as follows.

A    Address        C    Character         H    Halfword       P   Packed Decimal

B    Binary          F     Fullword         I      Instruction     X       Hexadecimal



The Ask If (AIF) Instruction

The AIF instruction has two parts.

   1.  A logical expression in parentheses, and

   2.  A sequence symbol immediately following, which serves 
         as the branch target.

The AIF logical expression may use the following relational operators, which 
are quite similar to those seen in early versions of the FORTRAN language.

   EQ      Equal To                    NE      Not Equal To

   LT      Less Than                  GE      Greater Than or Equal To

   GT      Greater Than              LE      Less Than or Equal To

If the type of &AMT is packed, go to .B23PACK

  AIF(T’&AMT EQ ‘P’).B23PACK

If the type of &LINK is not an instruction, go to .R30ERROR

  AIF(T’&LINK NE ‘I’).R30ERROR

Testing the Value of a Symbolic Parameter

What we want for the STKPOP instruction is a conditional assembly 
based on the value of the second parameter.  

The prototype will be something like
&L1      STKPOP &ARG,&TYP  

What we want to issue is an AIF statement such as
AIF (&TYP EQ ‘R’).ISREG

There is a well–known peculiarity in assembler language, not just in the 
IBM Assembler, that disallows this straightforward construct.

We must put the symbolic parameter in single quotes.  The statement is thus:

AIF (‘&TYP’ EQ ‘R’).ISREG

If &TYP is the character R, the logical expression becomes (‘R’ EQ ‘R’),
which immediately evaluates to True, and the branch is taken.

Reference
Page 384,     High Level Assembler for z/OS & z/VM & z/VSE Language 
                     Reference Manual, Release 6 (July 2008), SC26–4940–05



Targets for Use by Conditional Assembly

Each of the AGO and AIF instructions is a branch instruction that takes 
effect at assembly time.  Neither persists into the assembly source code.

It should be expected that the targets for either of these conditional 
assembly branch instructions should be of a distinct type.

The targets for these are called sequence symbols.

The format of a sequence symbol is as follows.
A sequence symbol begins with a period (.) followed by one to seven letters 
or digits, the first of which must be a letter.

Unlike the symbols created by use of the &SYSNDX system symbol, 
sequence symbols do not persist into assembly time, and thus 
cannot generate a name conflict for the assembler.



A Sample of Conditional Assembly

Here is the DIVID macro, with conditional assembly instructions to 
insure that it is expanded only for parameters that are packed decimal.

         MACRO

&LABEL   DIVID &QUOT,&DIVIDEND,&DIVISOR

         AIF   (T’&QUOT NE ‘P’).NOTPACK

         AIF   (T’&DIVIDEND NE T’&QUOT).NOTPACK

         AIF   (T’&DIVISOR NE T’&QUOT).NOTPACK

         AGO   .DOIT

.NOTPAK  MNOTE  ‘ONE PARAMETER IS NOT PACKED DECIMAL’

         MEXIT

.DOIT    ANOP

&LABEL   ZAP   &QOUT,&DIVIDEND

         CP    &DIVISOR,=P‘0’  IS IT ZERO

         BNE   A&SYSNDX        NO, DIVISION IS OK

         ZAP   &QUOT,=P‘0’     YES, SET QUOTIENT TO 0

         B     B&SYSNDX

A&SYSNDX DP    &QUOT,&DIVISOR

B&SYSNDX NOPR  R3              DO NOTHING

         MEND

Some Examples of the Conditional Assembly Divide Macro

In the following, assume that each of X, Y, and Z is defined by a DC 
statement as packed decimal, but that A, B, and C are defined as halfwords.

Here are some possible expansions.

 F10DOIT  DIVID X,Y,Z

+F10DOIT  ZAP   X,Y

+         CP    Z,=P‘0’         IS IT ZERO

+         BNE   A0032           NO, DIVISION IS OK

+         ZAP   X,=P‘0’         YES, SET QUOTIENT TO 0

+         B     B0032

+A0032    DP    X,Z

+B0032    NOPR  R3              DO NOTHING

 F25NODO  DIVID A,B,C

+ONE PARAMETER IS NOT PACKED DECIMAL

 



The Original Definition of Macro STKPOP

We now begin our redefinition of the STKPOP macro.
We begin with the original definition, which popped a value into a register.

*STKPOP

         MACRO

&L3      STKPOP &R

&L3      LH  3,STKCOUNT   GET THE STACK COUNT

         SH  3,=H’1’      SUBTRACT 1 WORD OFFSET OF TOP

         STH 3,STKCOUNT   STORE AS NEW SIZE

         SLA 3,2          BYTE OFFSET OF STACK TOP

         LA  2,THESTACK   ADDRESS OF STACK BASE

         L   &R,0(3,2)    LOAD ITEM INTO THE REGISTER.

         MEND

*

Again, this macro has one symbolic parameter: &R.  Again, a register number.

We want to expand this definition in a number of ways.

We begin by introducing the type &TYP.

At this point, it will become necessary to have another work register.

Mechanics of the Revised STKPOP

The new design will use register R4 to transfer the value at the top of the stack.

The new prototype will be as follows.

&L3      STKPOP &ARG,&TYP

Each type of instruction will include the following as the first statement 
in the “key code” – that which actually places the value into the destination.

         L   R4,0(3,2)    LOAD ITEM INTO REGISTER R4.

The second statement of the “key code” depends on the type of the destination.

&TYP == H        STH R4,&ARG

&TYP == F        ST  R4,&ARG

&TYP == A        ST  R4,&ARG  (SAME AS FULLWORD)

&TYP == R        LR &ARG,R4   COPY R4 INTO REGISTER

Again, I could define a STR macro and avoid the use of conditional assembly.
For a number of reasons, I have chosen not to do so.

The Key Code as Reflected in Conditional Assembly

Again, the new prototype will be as follows.

&L3      STKPOP &ARG,&TYP

Here is the key code section, with the conditional assembly.

The first statement is common to all types.

         L   R4,0(3,2)    LOAD ITEM INTO REGISTER R4.

         AIF (‘&TYPE’ EQ ‘R’).ISREG

         ST&TYP R4,&ARG

         AGO .CONT

.ISREG   LR &ARG,R4

.CONT    The next statement.



STKPOP: Revision 2

Here I am going to add some code to save and restore the work registers.

         MACRO

&L3      STKPOP &ARG,&TYP

&L3      ST  R2,STKSAV2 

         ST  R3,STKSAV3 

         ST  R4,STKSAV4 

         LH  R3,STKCOUNT   GET THE STACK COUNT

         SH  R3,=H’1’      SUBTRACT 1 WORD OFFSET OF TOP

         STH R3,STKCOUNT   STORE AS NEW SIZE

         SLA R3,2          BYTE OFFSET OF STACK TOP

         LA  R2,THESTACK   ADDRESS OF STACK BASE

         L   R4,0(3,2)    LOAD ITEM INTO REGISTER R4.

         AIF (‘&TYPE’ EQ ‘R’).ISREG

         ST&TYP R4,&ARG

         AGO .CONT

.ISREG   LR &ARG,R4

.CONT    L   R4,STKSAV4

         L   R3,STKSAV3

         L   R2,STKSAV2

         MEND



STKPOP: The Complete Version

         MACRO

&L3      STKPOP &ARG,&TYP

&L3      ST  R3,STKSAV3 

         LH  R3,STKCOUNT   GET THE STACK COUNT

         CH  R3,=H‘0’      IS THE COUNT POSITIVE

         BNH Z&SYSNDX      NO, WE CANNOT POP.

         SH  R3,=H’1’      SUBTRACT 1 WORD OFFSET OF TOP

         STH R3,STKCOUNT   STORE AS NEW SIZE

         SLA R3,2          BYTE OFFSET OF STACK TOP

         ST  R2,STKSAV2    SAVE REGISTER R2

         ST  R4,STKSAV4    SAVE REGISTER R4

         LA  R2,THESTACK   ADDRESS OF STACK BASE

         L   R4,0(3,2)    LOAD ITEM INTO REGISTER R4.

         AIF (‘&TYPE’ EQ ‘R’).ISREG

         ST&TYP R4,&ARG

         AGO .CONT

.ISREG   LR &ARG,R4

.CONT    L   R4,STKSAV4

         L   R2,STKSAV2

Z&SYSNDX L   R3,STKSAV3

         MEND

 



Original Code for the Macro Expansions

                                     33 *        MACRO DEFINITIONS        

                                     34 *                                 

                                     35          MACRO                    

                                     36 &L2      STKPUSH &ARG,&TYP        

                                     37 &L2      LH    R3,STKCOUNT        

                                     38          SLA   R3,2               

                                     39          LA    R2,THESTACK        

                                     40          L&TYP R4,&ARG            

                                     41          ST    R4,0(3,2)          

                                     42          LH    R3,STKCOUNT        

                                     43          AH    R3,=H'1'           

                                     44          STH   3,STKCOUNT         

                                     45          MEND                     

                                     46 *                                 

                                     89 *        SOME MACRO INVOCATIONS   

                                     90 *                                 

                                     91          STKPUSH R7,R             

00004A 4830 C0C6            000CC    92+         LH    R3,STKCOUNT        

00004E 8B30 0002            00002    93+         SLA   R3,2               

000052 4120 C0CA            000D0    94+         LA    R2,THESTACK        

000056 1847                          95+         LR    R4,R7              

000058 5043 2000            00000    96+         ST    R4,0(3,2)          

00005C 4830 C0C6            000CC    97+         LH    R3,STKCOUNT        

000060 4A30 C43A            00440    98+         AH    R3,=H'1'           

000064 4030 C0C6            000CC    99+         STH   3,STKCOUNT         



                                    100          STKPUSH HHW,H            

000068 4830 C0C6            000CC   101+         LH    R3,STKCOUNT        

00006C 8B30 0002            00002   102+         SLA   R3,2               

000070 4120 C0CA            000D0   103+         LA    R2,THESTACK        

000074 4840 C1CE            001D4   104+         LH    R4,HHW             

000078 5043 2000            00000   105+         ST    R4,0(3,2)          

00007C 4830 C0C6            000CC   106+         LH    R3,STKCOUNT        

000080 4A30 C43A            00440   107+         AH    R3,=H'1'           

000084 4030 C0C6            000CC   108+         STH   3,STKCOUNT         

                                    109          STKPUSH FFW              

000088 4830 C0C6            000CC   110+         LH    R3,STKCOUNT        

00008C 8B30 0002            00002   111+         SLA   R3,2               

000090 4120 C0CA            000D0   112+         LA    R2,THESTACK        

000094 5840 C1CA            001D0   113+         L     R4,FFW             

000098 5043 2000            00000   114+         ST    R4,0(3,2)          

00009C 4830 C0C6            000CC   115+         LH    R3,STKCOUNT        

0000A0 4A30 C43A            00440   116+         AH    R3,=H'1'           

0000A4 4030 C0C6            000CC   117+         STH   3,STKCOUNT         

                                    118          STKPUSH FFW,A            

0000A8 4830 C0E6            000EC   119+         LH    R3,STKCOUNT        

0000AC 8B30 0002            00002   120+         SLA   R3,2               

0000B0 4120 C0EA            000F0   121+         LA    R2,THESTACK        

0000B4 4140 C1EA            001F0   122+         LA    R4,FFW             

0000B8 5043 2000            00000   123+         ST    R4,0(3,2)          

0000BC 4830 C0E6            000EC   124+         LH    R3,STKCOUNT        

0000C0 4A30 C45A            00460   125+         AH    R3,=H'1'           

0000C4 4030 C0E6            000EC   126+         STH   3,STKCOUNT         

                                    127 *                                 

                                    136 **********************************



Revised Code for the Macros

The next few pages show the listing of the final forms of the macros, as actually 
coded and tested.  These are followed by listings of the expanded macros.

 002900 *                                                       

 002910          MACRO                                          

 002911 &L1      STKINIT                                        

 002912 &L1      ST R3,STKSAV3                                  

 002913          SR R3,R3                                       

 002914          STH R3,STKCOUNT           CLEAR THE COUNT      

 002915          L  R3,STKSAV3                                  

 002920          MEND                                           

 002930 * 

 



 003000          MACRO                                          

 003100 &L2      STKPUSH &ARG,&TYP                              

 003110 &L2      ST    R3,STKSAV3         SAVE REGISTER R3      

 003200          LH    R3,STKCOUNT        GET THE CURRENT SIZE  

 003210          CH    R3,STKSIZE         IS THE STACK FULL?    

 003220          BNL   Z&SYSNDX           YES, DO NOT PUSH      

 003230          ST    R4,STKSAV4         OK, SAVE R2 AND R4    

 003240          ST    R2,STKSAV2                               

 003300          SLA   R3,2               MULTIPLY BY FOUR      

 003310          LA    R2,THESTACK        ADDRESS OF STACK START

 003320          L&TYP R4,&ARG            LOAD R4 WITH VALUE    

 003330          ST    R4,0(3,2)          STORE INTO THE STACK  

 003331          LH    R3,STKCOUNT                              

 003332          AH    R3,=H'1'                                 

 003333          STH   3,STKCOUNT                               

 003334          L     R4,STKSAV4                               

 003335          L     R2,STKSAV2                               

 003336 Z&SYSNDX L     R3,STKSAV3                               

 003337          MEND                                           

 003338 *                                                       

 003339 *                                                       

 



 003340          MACRO                                           

 003341 &L3      STKPOP &ARG,&TYP                               

 003342 &L3      ST    R3,STKSAV3                               

 003343          LH    R3,STKCOUNT     GET THE STACK COUNT      

 003344          CH    R3,=H'0'        IS THE COUNT POSITIVE?   

 003345          BNH   Z&SYSNDX        NO, WE CANNOT POP        

 003346          SH    R3,=H'1'        SUBTRACT 1 WORD OFFSET   

 003347          STH   R3,STKCOUNT     STORE THE NEW SIZE       

 003348          SLA   R3,2            BYTE OFFSET OF STACK TOP 

 003349          ST    R2,STKSAV2      SAVE REGISTER R2         

 003350          ST    R4,STKSAV4      SAVE REGISTER R4         

 003351          LA    R2,THESTACK     ADDRESS OF STACK BASE    

 003352          L     R4,0(3,2)       LOAD ITEM INTO R4        

 003353          AIF   ('&TYP' EQ 'R').ISREG                    

 003354          ST&TYP R4,&ARG                                 

 003355          AGO .CONT                                      

 003356 .ISREG   LR &ARG,R4                                     

 003357 .CONT    L   R4,STKSAV4                                 

 003358          L   R2,STKSAV2                                 

 003359 Z&SYSNDX L   R3,STKSAV3                                 

 003360          MEND                                           

 003361 *                                                       

 



Revised Code for the Macro Expansions

                                    128 *        SOME MACRO INVOCATIONS

                                    129 *                              

                                    130          STKINIT               

00004A 5030 C22E            00234   131+         ST R3,STKSAV3         

00004E 1B33                         132+         SR R3,R3              

000050 4030 C226            0022C   133+         STH R3,STKCOUNT       

000054 5830 C22E            00234   134+         L  R3,STKSAV3         

                                    135 *                              

                                    136          STKPUSH R7,R      

000058 5030 C22E            00234   137+         ST    R3,STKSAV3      

00005C 4830 C226            0022C   138+         LH    R3,STKCOUNT     

000060 4930 C228            0022E   139+         CH    R3,STKSIZE      

000064 47B0 C08C            00092   140+         BNL   Z0010           

000068 5040 C232            00238   141+         ST    R4,STKSAV4      

00006C 5020 C22A            00230   142+         ST    R2,STKSAV2      

000070 8B30 0002            00002   143+         SLA   R3,2            

000074 4120 C236            0023C   144+         LA    R2,THESTACK     

000078 1847                         145+         LR    R4,R7           

00007A 5043 2000            00000   146+         ST    R4,0(3,2)       

00007E 4830 C226            0022C   147+         LH    R3,STKCOUNT     

000082 4A30 C5A2            005A8   148+         AH    R3,=H'1'        

000086 4030 C226            0022C   149+         STH   3,STKCOUNT      

00008A 5840 C232            00238   150+         L     R4,STKSAV4      

00008E 5820 C22A            00230   151+         L     R2,STKSAV2      

000092 5830 C22E            00234   152+Z0010    L     R3,STKSAV3      



                                    153          STKPUSH HHW,H         

000096 5030 C22E            00234   154+         ST    R3,STKSAV3      

00009A 4830 C226            0022C   155+         LH    R3,STKCOUNT     

00009E 4930 C228            0022E   156+         CH    R3,STKSIZE      

0000A2 47B0 C0CC            000D2   157+         BNL   Z0011           

0000A6 5040 C232            00238   158+         ST    R4,STKSAV4      

0000AA 5020 C22A            00230   159+         ST    R2,STKSAV2      

0000AE 8B30 0002            00002   160+         SLA   R3,2            

0000B2 4120 C236            0023C   161+         LA    R2,THESTACK     

0000B6 4840 C33A            00340   162+         LH    R4,HHW          

0000BA 5043 2000            00000   163+         ST    R4,0(3,2)       

0000BE 4830 C226            0022C   164+         LH    R3,STKCOUNT     

0000C2 4A30 C5A2            005A8   165+         AH    R3,=H'1'        

0000C6 4030 C226            0022C   166+         STH   3,STKCOUNT      

0000CA 5840 C232            00238   167+         L     R4,STKSAV4      

0000CE 5820 C22A            00230   168+         L     R2,STKSAV2      

0000D2 5830 C22E            00234   169+Z0011    L     R3,STKSAV3      



 

                                    170          STKPUSH FFW           

0000D6 5030 C22E            00234   171+         ST    R3,STKSAV3      

0000DA 4830 C226            0022C   172+         LH    R3,STKCOUNT     

0000DE 4930 C228            0022E   173+         CH    R3,STKSIZE      

0000E2 47B0 C10C            00112   174+         BNL   Z0012           

0000E6 5040 C232            00238   175+         ST    R4,STKSAV4      

0000EA 5020 C22A            00230   176+         ST    R2,STKSAV2      

0000EE 8B30 0002            00002   177+         SLA   R3,2            

0000F2 4120 C236            0023C   178+         LA    R2,THESTACK     

0000F6 5840 C336            0033C   179+         L     R4,FFW          

0000FA 5043 2000            00000   180+         ST    R4,0(3,2)       

0000FE 4830 C226            0022C   181+         LH    R3,STKCOUNT     

000102 4A30 C5A2            005A8   182+         AH    R3,=H'1'        

000106 4030 C226            0022C   183+         STH   3,STKCOUNT      

00010A 5840 C232            00238   184+         L     R4,STKSAV4      

00010E 5820 C22A            00230   185+         L     R2,STKSAV2      

000112 5830 C22E            00234   186+Z0012    L     R3,STKSAV3      



                                    187          STKPUSH FFW,A         

000116 5030 C22E            00234   188+         ST    R3,STKSAV3      

00011A 4830 C226            0022C   189+         LH    R3,STKCOUNT     

00011E 4930 C228            0022E   190+         CH    R3,STKSIZE      

000122 47B0 C14C            00152   191+         BNL   Z0013           

000126 5040 C232            00238   192+         ST    R4,STKSAV4      

00012A 5020 C22A            00230   193+         ST    R2,STKSAV2      

00012E 8B30 0002            00002   194+         SLA   R3,2            

000132 4120 C236            0023C   195+         LA    R2,THESTACK     

000136 4140 C336            0033C   196+         LA    R4,FFW          

00013A 5043 2000            00000   197+         ST    R4,0(3,2)       

00013E 4830 C226            0022C   198+         LH    R3,STKCOUNT     

000142 4A30 C5A2            005A8   199+         AH    R3,=H'1'        

000146 4030 C226            0022C   200+         STH   3,STKCOUNT      

00014A 5840 C232            00238   201+         L     R4,STKSAV4      

00014E 5820 C22A            00230   202+         L     R2,STKSAV2      

000152 5830 C22E            00234   203+Z0013    L     R3,STKSAV3      



                                    204 *                              

                                    205          STKPOP  R8,R          

000156 5030 C22E            00234   206+         ST    R3,STKSAV3      

00015A 4830 C226            0022C   207+         LH    R3,STKCOUNT     

00015E 4930 C5A4            005AA   208+         CH    R3,=H'0'        

000162 47D0 C186            0018C   209+         BNH   Z0014           

000166 4B30 C5A2            005A8   210+         SH    R3,=H'1'        

00016A 4030 C226            0022C   211+         STH   R3,STKCOUNT     

00016E 8B30 0002            00002   212+         SLA   R3,2            

000172 5020 C22A            00230   213+         ST    R2,STKSAV2      

000176 5040 C232            00238   214+         ST    R4,STKSAV4      

00017A 4120 C236            0023C   215+         LA    R2,THESTACK     

00017E 5843 2000            00000   216+         L     R4,0(3,2)       

000182 1884                         217+         LR R8,R4              

000184 5840 C232            00238   218+         L   R4,STKSAV4        

000188 5820 C22A            00230   219+         L   R2,STKSAV2        

00018C 5830 C22E            00234   220+Z0014    L   R3,STKSAV3        



                                    221          STKPOP  FFW           

000190 5030 C22E            00234   222+         ST    R3,STKSAV3      

000194 4830 C226            0022C   223+         LH    R3,STKCOUNT     

000198 4930 C5A4            005AA   224+         CH    R3,=H'0'        

00019C 47D0 C1C2            001C8   225+         BNH   Z0015           

0001A0 4B30 C5A2            005A8   226+         SH    R3,=H'1'        

0001A4 4030 C226            0022C   227+         STH   R3,STKCOUNT     

0001A8 8B30 0002            00002   228+         SLA   R3,2            

0001AC 5020 C22A            00230   229+         ST    R2,STKSAV2      

0001B0 5040 C232            00238   230+         ST    R4,STKSAV4      

0001B4 4120 C236            0023C   231+         LA    R2,THESTACK     

0001B8 5843 2000            00000   232+         L     R4,0(3,2)       

0001BC 5040 C336            0033C   233+         ST     R4,FFW         

0001C0 5840 C232            00238   234+         L   R4,STKSAV4        

0001C4 5820 C22A            00230   235+         L   R2,STKSAV2        

0001C8 5830 C22E            00234   236+Z0015    L   R3,STKSAV3        



 

                                    237          STKPOP  HHW,H         

0001CC 5030 C22E            00234   238+         ST    R3,STKSAV3      

0001D0 4830 C226            0022C   239+         LH    R3,STKCOUNT     

0001D4 4930 C5A4            005AA   240+         CH    R3,=H'0'        

0001D8 47D0 C1FE            00204   241+         BNH   Z0016           

0001DC 4B30 C5A2            005A8   242+         SH    R3,=H'1'        

0001E0 4030 C226            0022C   243+         STH   R3,STKCOUNT     

0001E4 8B30 0002            00002   244+         SLA   R3,2            

0001E8 5020 C22A            00230   245+         ST    R2,STKSAV2      

0001EC 5040 C232            00238   246+         ST    R4,STKSAV4      

0001F0 4120 C236            0023C   247+         LA    R2,THESTACK     

0001F4 5843 2000            00000   248+         L     R4,0(3,2)       

0001F8 4040 C33A            00340   249+         STH    R4,HHW         

0001FC 5840 C232            00238   250+         L   R4,STKSAV4        

000200 5820 C22A            00230   251+         L   R2,STKSAV2        

000204 5830 C22E            00234   252+Z0016    L   R3,STKSAV3        

                                    253 *                              

 



Revised Code for the Macro STKINIT

Here is an expansion of the newer definition of STKINIT, 
which allows the stack size to be specified.

                                    138          STKINIT 128       

00004A 5030 C05E            00064   139+         ST R3,STKSAV3     

00004E 1B33                         140+         SR R3,R3          

000050 4030 C056            0005C   141+         STH R3,STKCOUNT   

000054 5830 C05E            00064   142+         L  R3,STKSAV3     

000058 47F0 C266            0026C   143+         B  L0009          

00005C 0000                         144+STKCOUNT DC H'0'           

00005E 0080                         145+STKSIZE  DC H'128'         

000060 00000000                     146+STKSAV2  DC F'0'           

000064 00000000                     147+STKSAV3  DC F'0'           

000068 00000000                     148+STKSAV4  DC F'0'           

00006C 0000000000000000             149+THESTACK DC 128F'0'        

00026C 8B30 0000            00000   150+L0009    SLA R3,0          

 

 
2.  The following additional general instructions are available in ESA/370 and ESA/390 as compared to 370-XA:
 
       COMPARE UNTIL SUBSTRING EQUAL
       COPY ACCESS
       EXTRACT ACCESS
       LOAD ACCESS MULTIPLE
       LOAD ADDRESS EXTENDED
       MOVE PAGE
       SET ACCESS
       STORE ACCESS MULTIPLE
 
3.  The following additional general instructions are available in ESA/390 when the string-instruction facility is installed:
 
       COMPARE LOGICAL STRING
       MOVE STRING
       SEARCH STRING
 
4.  The following additional general instructions are available in ESA/390 when the compare-and-move-extended facility is 
    installed:
 
       COMPARE LOGICAL LONG EXTENDED
       MOVE LONG EXTENDED
 
5.  The following additional general instructions are available in ESA/390 when the immediate-and-relative-instruction 
    facility is installed:
 
       ADD HALFWORD IMMEDIATE
       BRANCH RELATIVE AND SAVE
       BRANCH RELATIVE ON CONDITION
       BRANCH RELATIVE ON COUNT
       BRANCH RELATIVE ON INDEX HIGH
       BRANCH RELATIVE ON INDEX LOW OR EQUAL
       COMPARE HALFWORD IMMEDIATE
       LOAD HALFWORD IMMEDIATE
       MULTIPLY SINGLE
       MULTIPLY HALFWORD IMMEDIATE
       TEST UNDER MASK HIGH
       TEST UNDER MASK LOW
 
+----------------------------------------------------------------------------------+
¦                             ¦Mne- ¦                                         ¦Op  ¦
¦            Name             ¦monic¦             Characteristics             ¦Code¦
+-----------------------------+-----+-----------------------------------------+----¦
¦ADD                          ¦AR   ¦RR  C   ¦       ¦   IF      ¦  R   ¦     ¦1A  ¦
¦ADD                          ¦A    ¦RX  C   ¦  A    ¦   IF      ¦  R   ¦   B2¦5A  ¦
¦ADD HALFWORD                 ¦AH   ¦RX  C   ¦  A    ¦   IF      ¦  R   ¦   B2¦4A  ¦
¦ADD HALFWORD IMMEDIATE       ¦AHI  ¦RI  C IR¦       ¦   IF      ¦  R   ¦     ¦A7A ¦
¦ADD LOGICAL                  ¦ALR  ¦RR  C   ¦       ¦           ¦  R   ¦     ¦1E  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦ADD LOGICAL                  ¦AL   ¦RX  C   ¦  A    ¦           ¦  R   ¦   B2¦5E  ¦
¦AND                          ¦NR   ¦RR  C   ¦       ¦           ¦  R   ¦     ¦14  ¦
¦AND                          ¦N    ¦RX  C   ¦  A    ¦           ¦  R   ¦   B2¦54  ¦
¦AND (character)              ¦NC   ¦SS  C   ¦  A    ¦           ¦    ST¦B1 B2¦D4  ¦
¦AND (immediate)              ¦NI   ¦SI  C   ¦  A    ¦           ¦    ST¦B1   ¦94  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦BRANCH AND LINK              ¦BALR ¦RR      ¦       ¦   T       ¦B R   ¦     ¦05  ¦
¦BRANCH AND LINK              ¦BAL  ¦RX      ¦       ¦           ¦B R   ¦     ¦45  ¦
¦BRANCH AND SAVE              ¦BASR ¦RR      ¦       ¦   T       ¦B R   ¦     ¦0D  ¦
¦BRANCH AND SAVE              ¦BAS  ¦RX      ¦       ¦           ¦B R   ¦     ¦4D  ¦
¦BRANCH AND SAVE AND SET MODE ¦BASSM¦RR      ¦       ¦   T       ¦B R   ¦     ¦0C  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦BRANCH AND SET MODE          ¦BSM  ¦RR      ¦       ¦           ¦B R   ¦     ¦0B  ¦
¦BRANCH ON CONDITION          ¦BCR  ¦RR      ¦       ¦      ¢_   ¦B     ¦     ¦07  ¦
¦BRANCH ON CONDITION          ¦BC   ¦RX      ¦       ¦           ¦B     ¦     ¦47  ¦
¦BRANCH ON COUNT              ¦BCTR ¦RR      ¦       ¦           ¦B R   ¦     ¦06  ¦
¦BRANCH ON COUNT              ¦BCT  ¦RX      ¦       ¦           ¦B R   ¦     ¦46  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦BRANCH ON INDEX HIGH         ¦BXH  ¦RS      ¦       ¦           ¦B R   ¦     ¦86  ¦
¦BRANCH ON INDEX LOW OR EQUAL ¦BXLE ¦RS      ¦       ¦           ¦B R   ¦     ¦87  ¦
¦BRANCH RELATIVE AND SAVE     ¦BRAS ¦RI    IR¦       ¦           ¦B R   ¦     ¦A75 ¦
¦BRANCH RELATIVE ON CONDITION ¦BRC  ¦RI    IR¦       ¦           ¦B     ¦     ¦A74 ¦
¦BRANCH RELATIVE ON COUNT     ¦BRCT ¦RI    IR¦       ¦           ¦B R   ¦     ¦A76 ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦BRANCH RELATIVE ON INDEX HIGH¦BRXH ¦RSI   IR¦       ¦           ¦B R   ¦     ¦84  ¦
¦BRANCH RELATIVE ON INDEX L.E.¦BRXLE¦RSI   IR¦       ¦           ¦B R   ¦     ¦85  ¦
¦CHECKSUM                     ¦CKSM ¦RRE C CK¦  A  SP¦           ¦  R   ¦   R2¦B241¦
¦COMPARE                      ¦CR   ¦RR  C   ¦       ¦           ¦      ¦     ¦19  ¦
¦COMPARE                      ¦C    ¦RX  C   ¦  A    ¦           ¦      ¦   B2¦59  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦COMPARE AND FORM CODEWORD    ¦CFC  ¦S   C   ¦  A  SP¦II       GM¦  R   ¦I1   ¦B21A¦
¦COMPARE AND SWAP             ¦CS   ¦RS  C   ¦  A  SP¦      $    ¦  R ST¦   B2¦BA  ¦
¦COMPARE DOUBLE AND SWAP      ¦CDS  ¦RS  C   ¦  A  SP¦      $    ¦  R ST¦   B2¦BB  ¦
¦COMPARE HALFWORD             ¦CH   ¦RX  C   ¦  A    ¦           ¦      ¦   B2¦49  ¦
¦COMPARE HALFWORD IMMEDIATE   ¦CHI  ¦RI  C IR¦       ¦           ¦      ¦     ¦A7E ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦COMPARE LOGICAL              ¦CLR  ¦RR  C   ¦       ¦           ¦      ¦     ¦15  ¦
¦COMPARE LOGICAL              ¦CL   ¦RX  C   ¦  A    ¦           ¦      ¦   B2¦55  ¦
¦COMPARE LOGICAL (character)  ¦CLC  ¦SS  C   ¦  A    ¦           ¦      ¦B1 B2¦D5  ¦
¦COMPARE LOGICAL (immediate)  ¦CLI  ¦SI  C   ¦  A    ¦           ¦      ¦B1   ¦95  ¦
¦COMPARE LOGICAL C. UNDER MASK¦CLM  ¦RS  C   ¦  A    ¦           ¦      ¦   B2¦BD  ¦
+----------------------------------------------------------------------------------+
+----------------------------------------------------------------------------------+
¦                             ¦Mne- ¦                                         ¦Op  ¦
¦            Name             ¦monic¦             Characteristics             ¦Code¦
+-----------------------------+-----+-----------------------------------------+----¦
¦COMPARE LOGICAL LONG         ¦CLCL ¦RR  C   ¦  A  SP¦II         ¦  R   ¦R1 R2¦0F  ¦
¦COMPARE LOGICAL LONG EXTENDED¦CLCLE¦RS  C CM¦  A  SP¦           ¦  R   ¦R1 R3¦A9  ¦
¦COMPARE LOGICAL STRING       ¦CLST ¦RRE C SR¦  A  SP¦         G0¦  R   ¦R1 R2¦B25D¦
¦COMPARE UNTIL SUBSTRING EQUAL¦CUSE ¦RRE C   ¦  A  SP¦II       GM¦      ¦R1 R2¦B257¦
¦CONVERT TO BINARY            ¦CVB  ¦RX      ¦  A    ¦D     IK   ¦  R   ¦   B2¦4F  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦CONVERT TO DECIMAL           ¦CVD  ¦RX      ¦  A    ¦           ¦    ST¦   B2¦4E  ¦
¦COPY ACCESS                  ¦CPYA ¦RRE     ¦       ¦           ¦      ¦U1 U2¦B24D¦
¦DIVIDE                       ¦DR   ¦RR      ¦     SP¦      IK   ¦  R   ¦     ¦1D  ¦
¦DIVIDE                       ¦D    ¦RX      ¦  A  SP¦      IK   ¦  R   ¦   B2¦5D  ¦
¦EXCLUSIVE OR                 ¦XR   ¦RR  C   ¦       ¦           ¦  R   ¦     ¦17  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦EXCLUSIVE OR                 ¦X    ¦RX  C   ¦  A    ¦           ¦  R   ¦   B2¦57  ¦
¦EXCLUSIVE OR (character)     ¦XC   ¦SS  C   ¦  A    ¦           ¦    ST¦B1 B2¦D7  ¦
¦EXCLUSIVE OR (immediate)     ¦XI   ¦SI  C   ¦  A    ¦           ¦    ST¦B1   ¦97  ¦
¦EXECUTE                      ¦EX   ¦RX      ¦  AI SP¦         EX¦      ¦     ¦44  ¦
¦EXTRACT ACCESS               ¦EAR  ¦RRE     ¦       ¦           ¦  R   ¦   U2¦B24F¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦INSERT CHARACTER             ¦IC   ¦RX      ¦  A    ¦           ¦  R   ¦   B2¦43  ¦
¦INSERT CHARACTERS UNDER MASK ¦ICM  ¦RS  C   ¦  A    ¦           ¦  R   ¦   B2¦BF  ¦
¦INSERT PROGRAM MASK          ¦IPM  ¦RRE     ¦       ¦           ¦  R   ¦     ¦B222¦
¦LOAD                         ¦LR   ¦RR      ¦       ¦           ¦  R   ¦     ¦18  ¦
¦LOAD                         ¦L    ¦RX      ¦  A    ¦           ¦  R   ¦   B2¦58  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦LOAD ACCESS MULTIPLE         ¦LAM  ¦RS      ¦  A  SP¦           ¦      ¦   UB¦9A  ¦
¦LOAD ADDRESS                 ¦LA   ¦RX      ¦       ¦           ¦  R   ¦     ¦41  ¦
¦LOAD ADDRESS EXTENDED        ¦LAE  ¦RX      ¦       ¦           ¦  R   ¦U1 BP¦51  ¦
¦LOAD AND TEST                ¦LTR  ¦RR  C   ¦       ¦           ¦  R   ¦     ¦12  ¦
¦LOAD COMPLEMENT              ¦LCR  ¦RR  C   ¦       ¦   IF      ¦  R   ¦     ¦13  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦LOAD HALFWORD                ¦LH   ¦RX      ¦  A    ¦           ¦  R   ¦   B2¦48  ¦
¦LOAD HALFWORD IMMEDIATE      ¦LHI  ¦RI    IR¦       ¦           ¦  R   ¦     ¦A78 ¦
¦LOAD MULTIPLE                ¦LM   ¦RS      ¦  A    ¦           ¦  R   ¦   B2¦98  ¦
¦LOAD NEGATIVE                ¦LNR  ¦RR  C   ¦       ¦           ¦  R   ¦     ¦11  ¦
¦LOAD POSITIVE                ¦LPR  ¦RR  C   ¦       ¦   IF      ¦  R   ¦     ¦10  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦MONITOR CALL                 ¦MC   ¦SI      ¦     SP¦         MO¦      ¦     ¦AF  ¦
¦MOVE (character)             ¦MVC  ¦SS      ¦  A    ¦           ¦    ST¦B1 B2¦D2  ¦
¦MOVE (immediate)             ¦MVI  ¦SI      ¦  A    ¦           ¦    ST¦B1   ¦92  ¦
¦MOVE INVERSE                 ¦MVCIN¦SS    MI¦  A    ¦           ¦    ST¦B1 B2¦E8  ¦
¦MOVE LONG                    ¦MVCL ¦RR  C   ¦  A  SP¦II         ¦  R ST¦R1 R2¦0E  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦MOVE LONG EXTENDED           ¦MVCLE¦RS  C CM¦  A  SP¦           ¦  R ST¦R1 R3¦A8  ¦
¦MOVE NUMERICS                ¦MVN  ¦SS      ¦  A    ¦           ¦    ST¦B1 B2¦D1  ¦
¦MOVE PAGE (facility 1)       ¦MVPG ¦RRE C M1¦  A_ SP¦         G0¦    ST¦R1 R2¦B254¦
¦MOVE STRING                  ¦MVST ¦RRE C SR¦  A  SP¦         G0¦  R ST¦R1 R2¦B255¦
¦MOVE WITH OFFSET             ¦MVO  ¦SS      ¦  A    ¦           ¦    ST¦B1 B2¦F1  ¦
+----------------------------------------------------------------------------------+
+----------------------------------------------------------------------------------+
¦                             ¦Mne- ¦                                         ¦Op  ¦
¦            Name             ¦monic¦             Characteristics             ¦Code¦
+-----------------------------+-----+-----------------------------------------+----¦
¦MOVE ZONES                   ¦MVZ  ¦SS      ¦  A    ¦           ¦    ST¦B1 B2¦D3  ¦
¦MULTIPLY                     ¦MR   ¦RR      ¦     SP¦           ¦  R   ¦     ¦1C  ¦
¦MULTIPLY                     ¦M    ¦RX      ¦  A  SP¦           ¦  R   ¦   B2¦5C  ¦
¦MULTIPLY HALFWORD            ¦MH   ¦RX      ¦  A    ¦           ¦  R   ¦   B2¦4C  ¦
¦MULTIPLY HALFWORD IMMEDIATE  ¦MHI  ¦RI    IR¦       ¦           ¦  R   ¦     ¦A7C ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦MULTIPLY SINGLE              ¦MSR  ¦RRE   IR¦       ¦           ¦  R   ¦     ¦B252¦
¦MULTIPLY SINGLE              ¦MS   ¦RX    IR¦  A    ¦           ¦  R   ¦   B2¦71  ¦
¦OR                           ¦OR   ¦RR  C   ¦       ¦           ¦  R   ¦     ¦16  ¦
¦OR                           ¦O    ¦RX  C   ¦  A    ¦           ¦  R   ¦   B2¦56  ¦
¦OR (character)               ¦OC   ¦SS  C   ¦  A    ¦           ¦    ST¦B1 B2¦D6  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦OR (immediate)               ¦OI   ¦SI  C   ¦  A    ¦           ¦    ST¦B1   ¦96  ¦
¦PACK                         ¦PACK ¦SS      ¦  A    ¦           ¦    ST¦B1 B2¦F2  ¦
¦PERFORM LOCKED OPERATION     ¦PLO  ¦SS C  PL¦  A  SP¦      $  GM¦  R ST¦   FC¦EE  ¦
¦SEARCH STRING                ¦SRST ¦RRE C SR¦  A  SP¦         G0¦  R   ¦   R2¦B25E¦
¦SET ACCESS                   ¦SAR  ¦RRE     ¦       ¦           ¦      ¦U1   ¦B24E¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦SET PROGRAM MASK             ¦SPM  ¦RR  L   ¦       ¦           ¦      ¦     ¦04  ¦
¦SHIFT LEFT DOUBLE            ¦SLDA ¦RS  C   ¦     SP¦   IF      ¦  R   ¦     ¦8F  ¦
¦SHIFT LEFT DOUBLE LOGICAL    ¦SLDL ¦RS      ¦     SP¦           ¦  R   ¦     ¦8D  ¦
¦SHIFT LEFT SINGLE            ¦SLA  ¦RS  C   ¦       ¦   IF      ¦  R   ¦     ¦8B  ¦
¦SHIFT LEFT SINGLE LOGICAL    ¦SLL  ¦RS      ¦       ¦           ¦  R   ¦     ¦89  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦SHIFT RIGHT DOUBLE           ¦SRDA ¦RS  C   ¦     SP¦           ¦  R   ¦     ¦8E  ¦
¦SHIFT RIGHT DOUBLE LOGICAL   ¦SRDL ¦RS      ¦     SP¦           ¦  R   ¦     ¦8C  ¦
¦SHIFT RIGHT SINGLE           ¦SRA  ¦RS  C   ¦       ¦           ¦  R   ¦     ¦8A  ¦
¦SHIFT RIGHT SINGLE LOGICAL   ¦SRL  ¦RS      ¦       ¦           ¦  R   ¦     ¦88  ¦
¦STORE                        ¦ST   ¦RX      ¦  A    ¦           ¦    ST¦   B2¦50  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦STORE ACCESS MULTIPLE        ¦STAM ¦RS      ¦  A  SP¦           ¦    ST¦   UB¦9B  ¦
¦STORE CHARACTER              ¦STC  ¦RX      ¦  A    ¦           ¦    ST¦   B2¦42  ¦
¦STORE CHARACTERS UNDER MASK  ¦STCM ¦RS      ¦  A    ¦           ¦    ST¦   B2¦BE  ¦
¦STORE CLOCK                  ¦STCK ¦S   C   ¦  A    ¦      $    ¦    ST¦   B2¦B205¦
¦STORE HALFWORD               ¦STH  ¦RX      ¦  A    ¦           ¦    ST¦   B2¦40  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦STORE MULTIPLE               ¦STM  ¦RS      ¦  A    ¦           ¦    ST¦   B2¦90  ¦
¦SUBTRACT                     ¦SR   ¦RR  C   ¦       ¦   IF      ¦  R   ¦     ¦1B  ¦
¦SUBTRACT                     ¦S    ¦RX  C   ¦  A    ¦   IF      ¦  R   ¦   B2¦5B  ¦
¦SUBTRACT HALFWORD            ¦SH   ¦RX  C   ¦  A    ¦   IF      ¦  R   ¦   B2¦4B  ¦
¦SUBTRACT LOGICAL             ¦SLR  ¦RR  C   ¦       ¦           ¦  R   ¦     ¦1F  ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦SUBTRACT LOGICAL             ¦SL   ¦RX  C   ¦  A    ¦           ¦  R   ¦   B2¦5F  ¦
¦SUPERVISOR CALL              ¦SVC  ¦RR      ¦       ¦      ¢    ¦      ¦     ¦0A  ¦
¦TEST AND SET                 ¦TS   ¦S   C   ¦  A    ¦      $    ¦    ST¦   B2¦93  ¦
¦TEST UNDER MASK              ¦TM   ¦SI  C   ¦  A    ¦           ¦      ¦B1   ¦91  ¦
¦TEST UNDER MASK HIGH         ¦TMH  ¦RI  C IR¦       ¦           ¦      ¦     ¦A70 ¦
+-----------------------------+-----+--------+-------+-----------+------+-----+----¦
¦TEST UNDER MASK LOW          ¦TML  ¦RI  C IR¦       ¦           ¦      ¦     ¦A71 ¦
¦TRANSLATE                    ¦TR   ¦SS      ¦  A    ¦           ¦    ST¦B1 B2¦DC  ¦
¦TRANSLATE AND TEST           ¦TRT  ¦SS  C   ¦  A    ¦         GM¦  R   ¦B1 B2¦DD  ¦
¦UNPACK                       ¦UNPK ¦SS      ¦  A    ¦           ¦    ST¦B1 B2¦F3  ¦
¦UPDATE TREE                  ¦UPT  ¦E   C   ¦  A  SP¦II       GM¦  R ST¦I4   ¦0102¦
+----------------------------------------------------------------------------------+
+----------------------------------------------------------------------------------+
¦Explanation:                                                                      ¦
¦                                                                                  ¦
¦ ¢   Causes serialization and checkpoint synchronization.                         ¦
¦ ¢_  Causes serialization and checkpoint synchronization when the M1 and R2 fields¦
¦     contain all ones and all zeros, respectively.                                ¦
¦ $   Causes serialization.                                                        ¦
¦ A   Access exceptions for logical addresses.                                     ¦
¦ A_  Access exceptions; not all access exceptions may occur; see instruction      ¦
¦     description for details.                                                     ¦
¦ AI  Access exceptions for instruction address.                                   ¦
¦ B   PER branch event.                                                            ¦
¦ B1  B1 field designates an access register in the access-register mode.          ¦
¦ B2  B2 field designates an access register in the access-register mode.          ¦
¦ BP  B2 field designates an access register when PSW bits 16 and 17 have the      ¦
¦     value 01.                                                                    ¦
¦ C   Condition code is set.                                                       ¦
¦ CK  Checksum facility.                                                           ¦
¦ CM  Compare-and-move-extended facility.                                          ¦
¦ D   Data exception.                                                              ¦
¦ E   E instruction format.                                                        ¦
¦ EX  Execute exception.                                                           ¦
¦ FC  Designation of access registers depends on the function code of the          ¦
¦     instruction.                                                                 ¦
¦ G0  Instruction execution includes the implied use of general register 0.        ¦
¦ GM  Instruction execution includes the implied use of multiple general registers:¦
¦          General registers 1 and 2 for TRANSLATE AND TEST.                       ¦
¦          General registers 1, 2, and 3 for COMPARE AND FORM CODEWORD.            ¦
¦          General registers 0 and 1 for COMPARE UNTIL SUBSTRING EQUAL and PERFORM ¦
¦          LOCKED OPERATION.                                                       ¦
¦          General registers 0-5 for UPDATE TREE.                                  ¦
¦ IF  Fixed-point-overflow exception.                                              ¦
¦ II  Interruptible instruction.                                                   ¦
¦ IK  Fixed-point-divide exception.                                                ¦
¦ IR  Immediate-and-relative-instruction facility.                                 ¦
¦ I1  Access register 1 is implicitly designated in the access-register mode.      ¦
¦ I4  Access register 4 is implicitly designated in the access-register mode.      ¦
¦ L   New condition code is loaded.                                                ¦
¦ MI  Move-inverse facility.                                                       ¦
¦ MO  Monitor event.                                                               ¦
¦ M1  Move-page facility 1, which is a subset of move-page facility 2.             ¦
¦ PL  Perform-locked-operation facility.                                           ¦
¦ R   PER general-register-alteration event.                                       ¦
¦ R1  R1 field designates an access register in the access-register mode.          ¦
¦ R2  R2 field designates an access register in the access-register mode.          ¦
¦ R3  R3 field designates an access register in the access-register mode.          ¦
¦ RI  RI instruction format.                                                       ¦
¦ RR  RR instruction format.                                                       ¦
¦ RRE RRE instruction format.                                                      ¦
¦ RS  RS instruction format.                                                       ¦
¦ RSI RSI instruction format.                                                      ¦
¦ RX  RX instruction format.                                                       ¦
¦ S   S instruction format.                                                        ¦
¦ SI  SI instruction format.                                                       ¦
¦ SP  Specification exception.                                                     ¦
¦ SR  String-instruction facility.                                                 ¦
¦ SS  SS instruction format.                                                       ¦
+----------------------------------------------------------------------------------+
+----------------------------------------------------------------------------------+
¦Explanation (Continued):                                                          ¦
¦                                                                                  ¦
¦ ST  PER storage-alteration event.                                                ¦
¦ T   Trace exceptions (includes trace table, addressing, and low-address protec-  ¦
¦     tion).                                                                       ¦
¦ U1  R1 field designates an access register unconditionally.                      ¦
¦ U2  R2 field designates an access register unconditionally.                      ¦
¦ UB  R1 and R3 fields designate access registers unconditionally, and B2 field    ¦
¦     designates an access register in the access-register mode.                   ¦
+----------------------------------------------------------------------------------+
         TITLE 'NAME/TOKEN EXAMPLE PROGRAM'
NTIDSAMP CSECT
NTIDSAMP AMODE 31
NTIDSAMP RMODE ANY
         BAKR  R14,0                   SAVE CALLING PROGRAM'S
*                                      REGISTERS AND RETURN LOCATION
         LR    R12,R15                 ESTABLISH BASE REG
         USING NTIDSAMP,R12
***********************************************************************
*  INITIALIZE THE NAME AND TOKEN FIELDS                               *
***********************************************************************
         MVC   NAME,=CL16'NTIDSAMP NAME   ' INITIALIZE NAME FIELD
         MVC   TOKEN,NAME              FOR EXAMPLE, MAKE TOKEN THE
*                                      SAME AS THE NAME
***********************************************************************
*  TASK LEVEL CREATE EXAMPLE                                          *
***********************************************************************
         CALL  IEANTCR,(LEVEL,NAME,TOKEN,PERSOPT,RETCODE)
***********************************************************************
         CLC   RETCODE,=F'0'           IS RETURN CODE 0?
         BNE   ABEND                   NO, GO ABEND
         EJECT
***********************************************************************
*  TASK LEVEL RETRIEVE EXAMPLE                                        *
***********************************************************************
         CALL  IEANTRT,(LEVEL,NAME,TOKEN,RETCODE)
***********************************************************************
         CLC   RETCODE,=F'0'           IS RETURN CODE 0?
         BNE   ABEND                   NO, GO ABEND
         EJECT
***********************************************************************
*  TASK LEVEL DELETE EXAMPLE                                          *
***********************************************************************
         CALL  IEANTDL,(LEVEL,NAME,RETCODE)
***********************************************************************
         CLC   RETCODE,=F'0'           IS RETURN CODE 0?
         BNE   ABEND                   NO, GO ABEND
         EJECT
         SLR   R15,R15                 SET RETURN CODE OF ZERO
EXIT     PR                            RETURN TO CALLER
         EJECT
ABEND    ABEND X'BAD'                  ABEND IF NONZERO RETURN CODE
         EJECT
***********************************************************************
* NAME/TOKEN VARIABLE DECLARES
***********************************************************************
         IEANTASM
         EJECT
***********************************************************************
* Constants and data areas                                            *
***********************************************************************
LEVEL    DC    A(IEANT_TASK_LEVEL)     Task level
NAME     DS    CL16                    Name for name/token pair
TOKEN    DS    XL16                    Token for name/token pair
PERSOPT  DC    A(IEANT_NOPERSIST)      Persist option
RETCODE  DS    F                       Return code
***********************************************************************
*  EQUATES
***********************************************************************
R1       EQU   1
R12      EQU   12
R13      EQU   13
R14      EQU   14
R15      EQU   15
         END   NTIDSAMP







































































           PUNCH ‘ SETCODE AC(1) ‘
TOKCREAT   CSECT
TOKCREAT   AMODE 31
TOKCREAT   RMODE 24
           BAKR  R14,R0
           LR    R12,R15
           USING TOKCREAT,R12
           LOAD   EP=IEANTDL 
           ST     R0,IEANTDL 
           LOAD   EP=IEANTCR 
           ST     R0,IEANTCR 
           OPEN   TOKIN
GETTOKEN   GET    TOKIN
           LR     R5,R1
           CLI    0(R5),C’*’ 
           BE     GETTOKEN   
           MVC    NAME,0(R5) 
           MVC    TOKEN,19(R5)
           MVC    WTONAME,NAME
           MVC    WTOTOKEN,TOKEN
           MODESET KEY=ZERO,MODE=SUP
           L      R15,IEANTDL
           CALL   (15),(LEVEL,NAME,RETCODE)
           L      R3,RETCODE 
           C      R3,=F’04’  
           BNH    CREATE
           L      R8,RETCODE 
           LR     R9,R15
           ABEND  1
CREATE     DS     0H
           L      R15,IEANTCR
           CALL   (15),(LEVEL,NAME,TOKEN,PERSOPT,RETCODE)
           MODESET KEY=NZERO,MODE=PROB
           CLC    RETCODE,=F’0’
           BNE    ABEND2
           LA     R1,WTOA
           SVC    35         
           B      GETTOKEN   
ABEND2     DS     0H
           L      R8,RETCODE 
           LR     R9,R15
           ABEND  2
EXIT       DS     0H
           CLOSE  (TOKIN)
           DELETE EP=IEANTCR
           DELETE EP=IEANDTL
           SR     R15,R15
           PR               
           EJECT
           YREGS ,
           EJECT
           IEANTASM
           LTORG
IEANTDL    DS     F
IEANTCR    DS     F
LEVEL      DC     A(IEANT_SYSTEM_LEVEL)
NAME       DS     CL16
TOKEN      DS     CL16
PERSOPT    DC     A(IEANT_PERSIST)
RETCODE    DS     F
           ORG,          
           DS     0F         
WTOA       DC     AL2(WTOAE-WTOA),AL2(0)
WTOMSGDC     C’TOKEN CREATION:  ‘
WTONAME    DS     CL16
           DC     C’VALUE: ‘ 
WTOTOKEN   DS     CL16
WTOAE      EQU    *
           DS     0F         
TOKIN      DCB    DSORG=PS,RECFM=FB,LRECL=80,                     X
                  MACRF=GL,DDNAME=TOKIN,                          X
                  EODAD=EXIT 
           END    ,  Notes:
    I've used an RSECT instead of a CSECT, which tells the assembler that this is a re-entrant module. The assembler will check for some (but not all) re-entrancy errors. Using the RENT assembler option does the same thing.
    The STORAGE macro doesn't have a List and Execute form - it is re-entrant in itself. How do we know this? Because there's no separate List and Execute form (check it out for yourself in the z/OS Assembler Services Reference manual). In our program, we get storage below the 24 bit line, as our storage includes a DCB.
    I use the List and Execute form of the WTO macro, simply because it has them.
    The #MSG label is a constant, so it can be left in the program code. However if it was a variable (ie. updated by the program in any way), it would have to be moved into the WORK DSECT.
    This program shows how to use the Compare and Swap instruction to serialise access to a control block. The address of a field is passed to the program by the caller. Our program increments this value like this:
        It gets the original value from the control block, and puts it into R1.
        It increments this value and puts it in R2.
        It gets the original value from the control block again, and puts it in R1.
        In one instruction (Compare and Swap), it inserts R2 into the control block if the original value hasn't changed. Otherwise it puts the changed original value into R1, and sets the condition code to branch.
    Some older z/OS macros include constants in their List form. In my example program, DCB, OPEN and CLOSE fall into this category.

    Using the List form of these macros in my WORK DSECT loses these constants. I've worked around this by defining a model area in the program for these macros, and copied this over an equivalent area in my storage. This is a very standard way of dealing with this problem.

    Let's look at my WOPEN label. If you look at the macro expansion (from the assembler output), you would see something like:

      WOPEN OPEN 0,MF=L
      +WOPEN DC 0F'0'
      + DC AL1(128)
      + DC AL3(0)
      + DC A(0)

    You can see z/OS defining the byte constant `128.' However this doesn't work with my storage - I reset it to zeroes at the beginning. So I define a second OPEN macro in my constants area (#OPEN - with the `128' constant). I then copy this over the WOPEN in my storage so I have that constant.

    So the big question is "How do you know if you need to do this?" The only way is to look at the assembler expansion of the List form of the macro. If you see a constant, then you'll need a macro model.
*=====================================
* Main Program
*Use an RSECT instead of a CSECT, which tells the 
*assembler that this is a re-entrant module. The 
*assembler will check for some (but not all) re-entrancy
*errors. Using the RENT assembler option does the same thing.
*=====================================
PGM1     RSECT (note 1)
* --- Save Callers Environment ---------------
         BAKR  R14,0

* --- Setup Program Addressability -----------
         LR    R12,R15
         USING PGM1,R12

* --- Put parameter passed into R5 -----------
         LR    R5,0(R1)           R5 -> Block

* --- Get and Address Workarea ---------------
         USING WORK,R13
         LA    R2,@WORKL
         STORAGE OBTAIN,LENGTH=(R2),LOC=BELOW (note 2)
         LR    R13,R1             R13 -> Workarea
         XC    WORK(@WORKL),WORK  Zero area

* --- Write Message to Console  --------------
         LA    R2,#MSG
         WTO   TEXT=(R2),MF=(E,WWTO)   (note 3)

* --- Example of an OPEN and CLOSE Macro  ----
         MVC   WDCB(@MODELL),#DCB Move model over (note 6)
         LA    R3,WDCB
         OPEN  (R3),MF=(E,WOPEN)  Open DD1   
         CLOSE (R3),MF=(E,WCLOSE) Close DD1

* --- Add one to original value in block  ---- (note 5)
         L     R1,0(R5)           R1 = value
ADDVAL   DS    0H
         LA    R2,1(R1)           R2 = value+1
         L     R1,0(R5)           R1 = value
         CS    R1,R2,0(R5)        Insert value+1
         BC    2,ADDVAL           (unless it changed)

* --- Free Working Storage and Return --------
         LA    R2,@WORKL
         STORAGE RELEASE,ADDR=(R13),LENGTH=(R2)
         PR                       Return

*=====================================
* Constants
*=====================================
* --- Message Constants ----------------------
#MSG     DC    AL2(L'#MSGTXT) (note 4)
#MSGTXT  DC    C'PGM 1 MESSAGE.' 

* --- Macro Model Area -----------------------
#DCB     DCB   DDNAME=DD1,MACRF=GM,MF=L
#OPEN    OPEN  0,MF=L
#CLOSE   CLOSE 0,MF=L
@MODELL  EQU   *-#DCB             Length model area


         LTORG

*=====================================
* Map Working storage
*=====================================
WORK     DSECT
SAVE1    DS    18F                Savearea

WWTO     WTO   TEXT=,MF=L         List form

WDCB     DCB   DDNAME=DD1,MACRF=GM,MF=L
WOPEN    OPEN  0,MF=L
WCLOSE   CLOSE 0,MF=L

@WORKL   EQU   *-WORK             LengthREXX access to Dialog Manager variables

ADDRESS ISPEXEC
"VGET (ALPHA) PROFILE"
"VGET (BETA) SHARED"
CALL RXVGET('ALPHA','BETA')

CALL RXVPUT('ALPHA','BETA')
ADDRESS ISPEXEC
"VPUT (ALPHA) PROFILE"
"VPUT (BETA) SHARED"

rc = RXVGET(varname,...)

RXVGET program code

         TITLE 'REXX (ISPEXEC) VGET'
RXVGET   CSECT
RXVGET   AMODE 31
RXVGET   RMODE ANY
         BAKR  R14,0                 save regs
         BASSM R12,0                 set base register
         USING *,R12
         LA    R13,SA                set internal save area
         MVC   4(4,R13),=C'F1SA'
         USING EFPL,R1
         L     R11,EFPLEVAL          PTR(Evaluation Block)
         L     R11,0(R11)            A(Evaluation Block)
         USING EVALBLOCK,R11
         L     R10,EFPLARG           PTR(Argument List)
         USING ARGTABLE_ENTRY,R10
         LR    R9,R0                 A(Environment Block)
         USING ENVBLOCK,R9
         L     R9,ENVBLOCK_IRXEXTE
         USING IRXEXTE,R9
         LOAD  EP=ISPLINK
         ST    R0,AISPLINK
         LA    R7,IRX_SHVBLOCK
         USING SHVBLOCK,R7           A(SHVBLOCK)
NEXTPARM LM    R3,R4,ARGTABLE_ARGSTRING_PTR
* R3: A(argument); R4: L(argument)
         LTR   R4,R4
         BM    LASTPARM
         LA    R0,L'VN               maximum varname length
         CR    R4,R0
         BNH   LENOK
         LR    R4,R0                 set maximum length
         MVC   RC,=H'4'              set maximum return code
LENOK    MVC   VN,VN-1               blank
         SH    R4,=H'1'              LC(argument)
         EX    R4,EXMOVE1            move argument to
         LA    R4,1(R4)              true length
         ST    R4,SHVNAML            L(variable name)
         L     R15,AISPLINK
         CALL  (15),(VCOPY,VN,VL,VA,LOCATE),VL
         LA    R2,12
         LTR   R15,R15
         BNZ   EXIT                  VCOPY error
* set data into REXX variable
         MVI   SHVCODE,SHVSTORE      store
         MVC   SHVNAMA,=A(VN)        A(variable name)
         MVC   SHVVALA,VA            A(variable data)
         MVC   SHVVALL,VL            L(variable data)
         L     R15,IRXEXCOM
         CALL  (15),(IRX_IRXEXCOM,0,0,IRX_SHVBLOCK),VL
         LA    R2,16
         LTR   R15,R15
         BNZ   EXIT                  error
         LA    R10,ARGTABLE_NEXT-ARGTABLE_ENTRY(R10)
         B     NEXTPARM
LASTPARM LH    R2,RC                 end of processing
EXIT     CVD   R2,D                  set function return value
         MVC   WK,=X'402020202120'
         LA    R1,WKE
         EDMK  WK,D+5
         LA    R15,WK+L'WK
         SR    R15,R1                L(result)
         ST    R15,EVALBLOCK_EVLEN   entry size
         BCTR  R15,0                 LC(result)
         EX    R15,EXMOVE2
         LA    R15,0                 normal function return
         PR    ,                     program end
EXMOVE1  MVC   VN(0),0(R3)
EXMOVE2  MVC   EVALBLOCK_EVDATA(0),0(R1)
IRX_IRXEXCOM DC C'IRXEXCOM'
         DS    0A                    align
IRX_SHVBLOCK DC (SHVBLEN)X'0'
RC       DC    H'0'
SA       DS    18F
D        DS    0D,PL8
WK       DS    CL6
WKE      EQU   *-1
AISPLINK DS    A
         DC    C' '
VN       DS    CL8
VL       DS    F
VA       DS    A
VCOPY    DC    CL8'VCOPY'
LOCATE   DC    C'LOCATE'
         IRXEFPL
         IRXENVB
         IRXEXTE
         IRXSHVB
         IRXEVALB
         IRXARGTB
         END

RXVPUT calling sequence

rc = RXVPUT(varname,...)

Sample invocation

ADDRESS ISPEXEC
alpha = 'BETA'
gamma = 1234
CALL RXVPUT('ALPHA','GAMMA')
"DISPLAY PANEL(PAN0)"
CALL RXVGET('DELTA')
REXX access to Dialog Manager variables

ADDRESS ISPEXEC
"VGET (ALPHA) PROFILE"
"VGET (BETA) SHARED"
CALL RXVGET('ALPHA','BETA')

CALL RXVPUT('ALPHA','BETA')
ADDRESS ISPEXEC
"VPUT (ALPHA) PROFILE"
"VPUT (BETA) SHARED"

rc = RXVGET(varname,...)

RXVGET program code

         TITLE 'REXX (ISPEXEC) VGET'
RXVGET   CSECT
RXVGET   AMODE 31
RXVGET   RMODE ANY
         BAKR  R14,0                 save regs
         BASSM R12,0                 set base register
         USING *,R12
         LA    R13,SA                set internal save area
         MVC   4(4,R13),=C'F1SA'
         USING EFPL,R1
         L     R11,EFPLEVAL          PTR(Evaluation Block)
         L     R11,0(R11)            A(Evaluation Block)
         USING EVALBLOCK,R11
         L     R10,EFPLARG           PTR(Argument List)
         USING ARGTABLE_ENTRY,R10
         LR    R9,R0                 A(Environment Block)
         USING ENVBLOCK,R9
         L     R9,ENVBLOCK_IRXEXTE
         USING IRXEXTE,R9
         LOAD  EP=ISPLINK
         ST    R0,AISPLINK
         LA    R7,IRX_SHVBLOCK
         USING SHVBLOCK,R7           A(SHVBLOCK)
NEXTPARM LM    R3,R4,ARGTABLE_ARGSTRING_PTR
* R3: A(argument); R4: L(argument)
         LTR   R4,R4
         BM    LASTPARM
         LA    R0,L'VN               maximum varname length
         CR    R4,R0
         BNH   LENOK
         LR    R4,R0                 set maximum length
         MVC   RC,=H'4'              set maximum return code
LENOK    MVC   VN,VN-1               blank
         SH    R4,=H'1'              LC(argument)
         EX    R4,EXMOVE1            move argument to
         LA    R4,1(R4)              true length
         ST    R4,SHVNAML            L(variable name)
         L     R15,AISPLINK
         CALL  (15),(VCOPY,VN,VL,VA,LOCATE),VL
         LA    R2,12
         LTR   R15,R15
         BNZ   EXIT                  VCOPY error
* set data into REXX variable
         MVI   SHVCODE,SHVSTORE      store
         MVC   SHVNAMA,=A(VN)        A(variable name)
         MVC   SHVVALA,VA            A(variable data)
         MVC   SHVVALL,VL            L(variable data)
         L     R15,IRXEXCOM
         CALL  (15),(IRX_IRXEXCOM,0,0,IRX_SHVBLOCK),VL
         LA    R2,16
         LTR   R15,R15
         BNZ   EXIT                  error
         LA    R10,ARGTABLE_NEXT-ARGTABLE_ENTRY(R10)
         B     NEXTPARM
LASTPARM LH    R2,RC                 end of processing
EXIT     CVD   R2,D                  set function return value
         MVC   WK,=X'402020202120'
         LA    R1,WKE
         EDMK  WK,D+5
         LA    R15,WK+L'WK
         SR    R15,R1                L(result)
         ST    R15,EVALBLOCK_EVLEN   entry size
         BCTR  R15,0                 LC(result)
         EX    R15,EXMOVE2
         LA    R15,0                 normal function return
         PR    ,                     program end
EXMOVE1  MVC   VN(0),0(R3)
EXMOVE2  MVC   EVALBLOCK_EVDATA(0),0(R1)
IRX_IRXEXCOM DC C'IRXEXCOM'
         DS    0A                    align
IRX_SHVBLOCK DC (SHVBLEN)X'0'
RC       DC    H'0'
SA       DS    18F
D        DS    0D,PL8
WK       DS    CL6
WKE      EQU   *-1
AISPLINK DS    A
         DC    C' '
VN       DS    CL8
VL       DS    F
VA       DS    A
VCOPY    DC    CL8'VCOPY'
LOCATE   DC    C'LOCATE'
         IRXEFPL
         IRXENVB
         IRXEXTE
         IRXSHVB
         IRXEVALB
         IRXARGTB
         END

RXVPUT program code

         TITLE 'REXX (ISPEXEC) VPUT'
RXVPUT   CSECT
RXVPUT   AMODE 31
RXVPUT   RMODE ANY
         BAKR  R14,0                 save regs
         BASSM R12,0                 set base register
         USING *,R12
         LA    R13,SA                set internal save area
         MVC   4(4,R13),=C'F1SA'
         USING EFPL,R1
         L     R11,EFPLEVAL          PTR(Evaluation Block)
         L     R11,0(R11)            A(Evaluation Block)
         USING EVALBLOCK,R11
         L     R10,EFPLARG           PTR(Argument List)
         USING ARGTABLE_ENTRY,R10
         LR    R9,R0                 A(Environment Block)
         USING ENVBLOCK,R9
         L     R9,ENVBLOCK_IRXEXTE
         USING IRXEXTE,R9
         LOAD  EP=ISPLINK
         ST    R0,AISPLINK
         LA    R7,IRX_SHVBLOCK
         USING SHVBLOCK,R7           A(SHVBLOCK)
NEXTPARM LM    R3,R4,ARGTABLE_ARGSTRING_PTR
* R3: A(argument); R4: L(argument)
         LTR   R4,R4
         BM    LASTPARM
         LA    R0,L'VN               maximum varname length
         CR    R4,R0
         BNH   LENOK
         LR    R4,R0                 set maximum length
         MVC   RC,=H'4'              set maximum return code
LENOK    MVC   VN,VN-1               blank
         SH    R4,=H'1'              LC(argument)
         EX    R4,EXMOVE1            move argument to
         LA    R4,1(R4)              true length
         ST    R4,SHVNAML            L(variable name)
* get REXX variable
         MVI   SHVCODE,SHVFETCH      fetch
         MVC   SHVNAMA,=A(VN)        A(variable name)
         MVC   SHVVALA,ABUF          A(buffer)
         MVC   SHVBUFL,LBUF          L(buffer)
         L     R15,IRXEXCOM
         CALL  (15),(IRX_IRXEXCOM,0,0,IRX_SHVBLOCK),VL
         LA    R2,16
         LTR   R15,R15
         BNZ   EXIT                  error
         MVC   VL,SHVVALL            L(returned variable data)
         L     R15,AISPLINK
         CALL  (15),(VREPLACE,VN,VL,BUF),VL
         LA    R2,12
         LTR   R15,R15
         BNZ   EXIT                  VREPLACE error
         LA    R10,ARGTABLE_NEXT-ARGTABLE_ENTRY(R10)
         B     NEXTPARM
LASTPARM LH    R2,RC                 end of processing
EXIT     CVD   R2,D                  set function return value
         MVC   WK,=X'402020202120'
         LA    R1,WKE
         EDMK  WK,D+5
         LA    R15,WK+L'WK
         SR    R15,R1                L(result)
         ST    R15,EVALBLOCK_EVLEN   entry size
         BCTR  R15,0                 LC(result)
         EX    R15,EXMOVE2
         LA    R15,0                 normal function return
         PR    ,                     program end
EXMOVE1  MVC   VN(0),0(R3)
EXMOVE2  MVC   EVALBLOCK_EVDATA(0),0(R1)
IRX_IRXEXCOM DC C'IRXEXCOM'
         DS    0A                    align
IRX_SHVBLOCK DC (SHVBLEN)X'0'
RC       DC    H'0'
SA       DS    18F
D        DS    0D,PL8
WK       DS    CL6
WKE      EQU   *-1
AISPLINK DS    A
         DC    C' '
VN       DS    CL8
VL       DS    F
VREPLACE DC    CL8'VREPLACE'
         LTORG
ABUF     DC    A(BUF)
LBUF     DC    A(L'BUF)
BUF      DS    CL4096
         IRXEFPL
         IRXENVB
         IRXEXTE
         IRXSHVB
         IRXEVALB
         IRXARGTB
         END
         LOAD  EP=IRXEXCOM        LOAD ADDRESS OF REXX VARIABLE INTF.
         ST    R0,AIRXEXCOM
         MVC   SHVBLK(32),CSHVBLK PRE-FILL REXX SHVBLK

*ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ*
*Ñ            CREATE VARIABLE ISPF_SCREEN                       Ñ*
*ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ*
         ST    R2,SHVVALL         LENGTH OF ISPF_SCREEN VARIABLE
         ST    R5,SHVVALA         R5 = ADDRESS OF ISPF SCREEN BUFFER
         LA    R3,CVAR1
         ST    R3,SHVNAMA          - ADDRESS OF VARIABLE NAME
         MVC   SHVNAML,=A(L'CVAR1) - LENGTH OF VARIABLE
         BAS   R10,REXXVAR

*ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ*
*Ñ               CALL REXX VARIABLE INTERFACE                   Ñ*
*ÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑÑ*
REXXVAR  DS    0H
         L     R15,AIRXEXCOM
         LA    R1,SHVBLK
         CALL  (15),(IRXSTR,0,0,(1)),VL
         BR    R10
WORKBYTS DC    A(PGMSIZE)         AMOUNT OF WORKING STORAGE NEEDED
IRXSTR   DC    CL8'IRXEXCOM'      STRING FOR REXX VARIABLE INTERFACE
CVAR1    DC    CL11'ISPF_SCREEN'
CVAR2    DC    CL11'ISPF_CURSOR'
CSHVBLK  DC    A(0)                NEXT SHVBLOCK IN CHAIN - NONE
         DC    F'0'                LENGTH OF BUFFER FOR SHVNAMA
         DC    C'S'                CODE FOR FUNCTION S=SET VAIABLE
         DC    CL1'D'              DIRECT - NO SUBST. OR CASE XLATE
         DC    H'0'                RESERVED
         DC    F'0'                LENGTH OF BUFFER FOR FETCH REQUEST
         DC    A(0)                ADDRESS OF THE VARIABLE NAME
         DC    F'0'                LENGTH OF VARIABLE NAME
         DC    A(0)                ADDRESS OF VARIABLE-VALUE
         DC    F'0'                LENGTH OF VARIABLE-VALUE
D_ZSCREENW DC    C'ZSCREENW'       ISPF VARS DEFINITION
D_ZSCREEND DC    C'ZSCREEND'       ISPF VARS DEFINITION
ZVAR_LIST  DC    C'(ZSCREENW,ZSCREEND)' ISPF VGET LIST
CHAR       DC    C'CHAR'                ISPF VAR  TYPE PARAMETER
L4         DC    F'4'                   ISPF VAR  LGTH PARAMETER
VDEFINE    DC    CL8'VDEFINE'           ISPF SERVICE
VGET       DC    CL8'VGET'              ISPF SERVICE
SHARED     DC    CL8'SHARED'            ISPF SERVICE PARAMETER
         LTORG
PGMAREA  DSECT
SAVEAREA DS    18F                SAVE AREA FOR PROGRAM
*....... INSERT DS'S HERE
A_FMAIN  DS    F
         DS    0D
D        DS    PL8                 CONVERT TO DECIMAL WORKAREA
WK       DS    CL8                 -
EDWK     DS    0CL17               -
         DS    CL16                -
SIGN     DS    C                   -
EDWK_END DS    X                   END OF FIELD MARKER FOR EDWK
FULLSCR  DS    CL4                 # OF BYTES FOR FULL SCREEN
MULT_RESULT DS D                   RESULT OF SCREEN WIDTH*DEPTH
ZSCREENW DS    CL4                 ISPF VAR SCREEN WIDTH
ZSCREEND DS    CL4                 ISPF VAR SCREEN DEPTH
SHVBLK   DS    A                   NEXT SHVBLOCK IN CHAIN - NONE
SHVUSER  DS    F                   LENGTH OF BUFFER FOR SHVNAMA
SHVCODE  DS    C                   CODE FOR FUNCTION S=SET VAIABLE
SHVRET   DS    CL1                 DIRECT - NO SUBST. OR CASE XLATE
         DS    H                   RESERVED
SHVBUFL  DS    F                   LENGTH OF BUFFER FOR FETCH REQUEST
SHVNAMA  DS    A                   ADDRESS OF THE VARIABLE NAME
SHVNAML  DS    F                   LENGTH OF VARIABLE NAME
SHVVALA  DS    A                   ADDRESS OF VARIABLE-VALUE
SHVVALL  DS    F                   LENGTH OF VARIABLE-VALUE
AIRXEXCOM DS   F                   ADDRESS OF REXX VARIABLE MODULE
         DS    0D
PGMSIZE  EQU   *-PGMAREA           WORKING STORAGE SIZE CALCULATION

RXVARS   CSECT                    CSECT                         
         SPACE                                                         
         USING RXVARS,R10
         BAKR  R14,0              SAVE CALLER'S REGS & RETURN LOC      
         LR    R12,R15            SET 1ST BASE REG                     
         LR    R4,R1              PARK PARM POINTER (R1) IN R4         
         LR    R5,R0              PARK ENV BLOCK PTR (R0) IN R5    @ANZ
         LA    R2,LOCAL_WORKAREA_LENGTH  SIZE OF OUR LOCAL WORK AREA   
         STORAGE OBTAIN,LENGTH=(R2)    GET LOCAL WORK AREA             
         SPACE                                                         
         LR    R9,R1              SET BASE REGISTER FOR LOCAL WORK AREA
         USING LOCAL_WORKAREA,R9  SET ADDRESSABILITY                   
         LR    R2,R9                                                   
         LA    R3,LOCAL_WORKAREA_LENGTH                                
         SR    R15,R15            PAD OF X'00' & ZERO LENGTH           
         MVCL  R2,R14             INIT WORKAREA TO BINARY ZERO         
         LA    R15,SAVEAREA       SET -> TO OUR SAVE AREA              
         ST    R13,4(R15)         CHAIN BACKWARD ->                    
         ST    R15,8(R13)         CHAIN FORWARD ->                     
         LR    R13,R15   
* not realluyneeded but coool JES stuff         
         IAZXJSAB READ,JOBID=MYJOBID,JOBNAME=MYJOBNM      
         SPACE                                                     
         LR    R1,R4              RESTORE PARM (R1) FROM SAVED REG     
         USING EFPL,R1            SET ADDRESSABILITY                   
         ST    R1,EFPL@           KEEP POINTER AROUND JUST IN CASE     
         LA    R6,OURSHVBL        INIT -> TO OUR SHARED VAR BLK        
         USING SHVBLOCK,R6        SET ADDRESSABILITY                   
         L     R8,EFPLARG         GET -> TO ARGUMENT LIST              
         USING ARGTABLE_ENTRY,R8  SET ADDRESSABILITY                   
         DROP  R1                 DROP EFPL ADDRESSABILITY             
         SPACE                                                         
         MVC   VSAMEMSG(VMSGLEN),VMSGINIT  INIT VSAM ERROR MSG AREA    
         MVC   NTMSG(NTMSGLEN),NTMSGINI    INIT NAME/TOKEN MSG AREA    
         SPACE                                                         
         SETMSG MSG=M$ALLOK       INITIALIZE RETURN MESSAGE            
         MVC   VSAMER15,=CL2'00'  INITIALIZE VSAM REG 15 RC            
         SPACE                                                         
*R5 already -> environment block -- loaded from R0 at entry to RXVSAM  
         SPACE                                                         
         USING ENVBLOCK,R5        SET ADDRESSABILITY TO ENVBLOCK   @ANZ
         ST    R5,ENVB@           SAVE ENVIRONMENT BLOCK POINTER   @ANZ
         L     R5,ENVBLOCK_IRXEXTE EXTERNAL ENTRY VECTOR ADDRESS   @ANZ
         USING IRXEXTE,R5         SET ADDRESSABILITY TO EXTE       @ANZ
         L     R0,IRXEXCOM        IRXEXCOM ROUTINE ADDRESS         @ANZ
         ST    R0,IRXEXCO@        SAVE ROUTINE ADDRESS FOR LATER USE   
         DROP  R5                 DROP ENVBLOCK ADDRESSABILITY     @ANZ
         L     R5,ARGTABLE_ARGSTRING_PTR  GET ADDR OF REQUEST ARG        
         C     R5,=X'FFFFFFFF'    IF ADDRESS IS ALL X'FF'                
         BE    MAIN400            NO ARG PASSED,ERROR                    
         SPACE                                                           
         LA    R8,ARGTABLE_NEXT   BUMP TO NEXT ARGUMENT (DDNAME)         
         LM    R3,R4,ARGTABLE_ARGSTRING_PTR  GET ADDR & LENGTH OF ARG    
         C     R3,=X'FFFFFFFF'    IF ADDRESS IS ALL X'FF'                
         BE    MAIN400            NO ARG PASSED,ERROR                    
         SPACE                                                           
         CH    R4,=H'8'           IF DDNAME LONGER THAN 8 CHARACTERS     
         BH    MAIN400            IT'S AN ERROR                          
         LA    R8,ARGTABLE_NEXT   BUMP TO "NEXT" ARGUMENT                
         SPACE                                                           
         MVC   DDNAME,SPACES      INIT BLANK PADDED DDNAME               
         BCTR  R4,0               DECR IN PREPARATION FOR EXECUTED MVC   
         EX    R4,MOVEDDNM        SET OUR COPY OF THE DDNAME             
         SPACE                                                           
*+*+                                                                    
         LA    R2,VMSGVAR         ELSE, SET MESSAGE: GET -> TO MESSAGE  
         LA    R3,L'VMSGVAR       VARIABLE NAME & LENGTH OF VAR NAME    
         STM   R2,R3,SHVNAMA      STORE IN SHV PARM LIST (2 FULLWORDS)  
         CLC   VSAMER15,=CL2'00'  IS VSAM REG 15 RC ZERO?               
         BE    MAIN520            YES, RESET VARIABLE TO ITS DEFAULT    
         SPACE                                                          
         MVC   SHVVALL,=A(VSAMELEN)   ELSE, SET IT TO OUR "REAL"        
         LA    R0,VSAMEMSG        VARIABLE                              
         ST    R0,SHVVALA                                               
         B     MAIN530                                                  
         SPACE                                                          
MAIN520  DS    0H                                                       
         SPACE                                                          
         MVC   SHVVALL,SHVNAML    NAME LENGTH & VAR LENGTH ARE EQUAL    
         MVC   SHVVALA,SHVNAMA    NAME AND VALUE ARE THE SAME TOO       
         SPACE                                                          
MAIN530  DS    0H                                                       
         SPACE                                                          
         MVI   SHVCODE,SHVSTORE   REQUEST: STORE A VARIABLE             
         L     R15,IRXEXCO@       GET EPA TO IRXEXCOM ROUTINE           
         CALL  (15),(IRXEXLIT,0,0,OURSHVBL),VL,MF=(E,EXCOPLST)          
         SPACE                                                          
         TM    SHVRET,SHVBADN+SHVBADV+SHVBADF  CHECK ERROR BITS         
         BZ    MAIN900            IF ALL OK, CONTINUE                   
         SPACE                                                          
         SETMSG MSG=M$VMSG        ELSE, SET MESSAGE THEN FALL THRU      
         SPACE                                                          
MAIN900  DS    0H                                                       
         LA    R0,L'RMSGVAR       LENGTH OF RET MSG VARIABLE NAME       
         ST    R0,SHVNAML         SET LENGTH IN SHARED VARIABLE BLOCK   
         LA    R0,RMSGVAR         -> TO VARIABLE NAME                   
         ST    R0,SHVNAMA                                               
         LH    R0,MSGLEN          LENGTH OF VARIABLE  
         ST    R0,SHVVALL                                             
         L     R0,MSG@            GET -> TO MESSAGE                   
         ST    R0,SHVVALA                                             
         MVI   SHVCODE,SHVSTORE   REQUEST: STORE A VARIABLE           
         L     R15,IRXEXCO@       ADDR OF IRXEXCOM ROUTINE            
         CALL  (15),(IRXEXLIT,0,0,OURSHVBL),VL,MF=(E,EXCOPLST)        
         SPACE                                                        
         TM    SHVRET,SHVBADN+SHVBADV+SHVBADF  CHECK ERROR BITS       
         BZ    MAIN950            IF ALL OK, CONTINUE                 
         SPACE                                                        
         SETMSG MSG=M$RMSG        REVISE RETURN MESSAGE               
         EJECT                                                        
MAIN950  DS    0H                                                     
         L     R1,EFPL@           GET POINTER TO ORIGINAL PARM LIST   
         USING EFPL,R1            SET ADDRESSABILITY                  
         L     R2,EFPLEVAL        GET -> TO EVALUATION BLOCK          
         L     R2,0(,R2)          GET ACTUAL ADDRESS OF BLOCK         
         USING EVALBLOCK,R2       SET ADDRESSABILITY                  
         L     R14,MSG@           1ST 4 BYTES OF MSG ARE THE RESULT   
         MVC   EVALBLOCK_EVLEN,=F'4'          PASS RESULT BACK IN THE 
         MVC   EVALBLOCK_EVDATA(4),0(R14)     EVALUATION BLOCK        
         DROP  R2,R1                                                  
         SPACE                                                        
GOBACK   DS    0H                                                     
         LA    R2,LOCAL_WORKAREA_LENGTH  SIZE OF OUR LOCAL WORK AREA  
         STORAGE RELEASE,LENGTH=(R2),ADDR=(R9)    RELEASE WORK AREA   
         SPACE                                                        
         SLR   R15,R15            MAKE SURE RETURN CODE IS ZERO       
         PR                       RETURN TO CALLER                    
         DROP  R6                 DROP SHVBLOCK ADDRESSABILITY        
         EJECT                                                                 

#####
LOCAL_WORKAREA DSECT                                                   
DBLWRK   DS    0D                                                      
FULLWRK1 DS    F                                                       
FULLWRK2 DS    0F                                                      
HALFWRK1 DS    H                                                       
HALFWRK2 DS    0H                                                      
BYTEWRK1 DS    X                                                       
BYTEWRK2 DS    X                                                       
         SPACE                                                         
         DS    0D                 ALIGN ON A DOUBLEWORD                
IEANTNAM DS    0CL16              NAME FOR NAME / TOKEN PAIR           
IEANTNA1 DS    CL8                 - 1ST PART (BASED ON JOB ID)        
IEANTNA2 DS    CL8                 - 2ND PART (BASED ON FILE DD)       
IEANTTOK DS    XL16               TOKEN FOR NAME / TOKEN PAIR          
*        The 1st fullword of the token is a -> to this file's FWA      
IEANTLVL DS    A                  LEVEL FOR IEANT SERVICE              
IEANTPOP DS    A                  PERSIST OPTION FOR IEANT SERVICE     
IEANTRC  DS    F                  RETURN CODE FROM IEANT SERVICE       
IEANTLST DS    5F                 ADDR LIST FOR ABOVE 5 PARMS (CALL)   
         SPACE                                                         
SAVEAREA DS    18F                                                     
         SPACE                                                         
EXCOPLST DS    4F                 PARM LIST AREA FOR IREXCOM CALL      
GENCB_PARMLIST DS  20F            PARM LIST FOR GENCB MACRO            
MODCB_PARMLIST DS  20F            PARM LIST FOR MODCB MACRO            
SHOWCB_PARMLIST DS 20F            PARM LIST FOR SHOWCB MACRO           
OPEN_PARMLIST  DS  2F             PARM LIST FOR OPEN MACRO             
CLOSE_PARMLIST DS  2F             PARM LIST FOR CLOSE MACRO            
         SPACE                                                         
MSG@     DC    F'0'               -> TO ERROR MSG TEXT                 
EFPL@    DC    F'0'               -> TO EFPL (SAVED AT FUNCTION ENTRY) 
ENVB@    DC    F'0'               -> TO ENVB (SAVED AT ENTRY)      @ANZ
IRXEXCO@ DC    F'0'               -> IRXEXCOM ENTRY ADDRESS            
RECBUF@  DC    F'0'               -> TO RECORD BUFFER AREA             
RETURNTO DC    F'0'               R14 SAVE FOR OPEN/READ/WRIT/CLOS ETC 
LVL1R14  DC    F'0'               R14 SAVE - LEVEL 1 SUBROUTINES       
NAMTOKRC DC    F'0'               R15 (R.C.) FROM NAME / TOKEN SERVICES
TRACE@B  DC    F'0'               -> TO TRACE AREA                     
TRACE@C  DC    F'0'               -> TO "NEXT" SLOT IN TRACE AREA      
TRACE@C  DC    F'0'               -> TO "NEXT" SLOT IN TRACE AREA      
TRACE@M  DC    F'0'               -> TO END OF TRACE AREA              
MSGLEN   DC    H'0'               LENGTH OF RETURN MESSAGE (MSG@)      
RECBUFL  DC    H'0'               LENGTH OF RECORD BUFFER (RECBUF@)    
MYJOBID  DS    CL8                JOB ID (1ST CHAR OVERLAID WITH "X")  
MYJOBNM  DS    CL8                JOB nm (1ST CHAR OVERLAID WITH "X")  
DDNAME   DS    CL8                SPACE PADDED DDNAME                  
         SPACE                                                         
VSAMEMSG DS    0X                 VSAM ERROR MESSAGE                   
         DS    CL43                                                    
VSAMER15 DS    CL2                                                     
         DS    CL18                                                    
VSAMEREA DS    CL4                                                     
         DS    CL23                                                    
VSAMELAB DS    CL8                                                     
         DS    CL1                                                     
VSAMELEN EQU   *-VSAMEMSG                                              
         SPACE                                                         
NTMSG    DS    0X              NAME / TOKEN SERVICES ERROR MESSAGE     
         DS    CL44                                                    
NTMSGR15 DS    CL2                                                     
         DS    CL14                                                    
NTREQ    DS    CL8                                                     
         DS    CL23                                                    
NTLABEL  DS    CL8                                                     
         DS    CL1                                                     
NTMSGLEN EQU   *-NTMSG                                                 
         SPACE                                                         
         DS    0F                                                      
OURSHVBL DC  XL(SHVBLEN)'00'           OUR SHARED VARIABLE BLK STORAGE 
         SPACE                                                         
LOCAL_WORKAREA_LENGTH EQU *-LOCAL_WORKAREA   TOTAL LENGTH OF AREA      
TITLE 'RXVSAM - File Work Area  '                              
         SPACE                                                         
         TITLE 'RXVSAM - IRXEFPL Dsect'        
         PRINT GEN                             
         IRXEFPL                               
         TITLE 'RXVSAM - IRXEVALB Dsect'       
         IRXEVALB                              
         TITLE 'RXVSAM - IRXARGTB Dsect'       
         IRXARGTB                              
         TITLE 'RXVSAM - IRXSHVB Dsect'        
         IRXSHVB                               
         TITLE 'RXVSAM - IRXENVB Dsect'        
         IRXENVB                               
         TITLE 'RXVSAM - IRXEXTE Dsect'        
         IRXEXTE                               
* not really needed but very cool JES
         SPACE 2                 
         IAZJSAB DSECT=YES       Rexx variables control blocks
see rexxtcob
to call the cics exci, you must have the
TTEP.TSK.F.R310.SYS.EXCILIB on the tso session steplib

to do this dynamically,
exit to the native (READY) TSO prompt. add a TSOLIB via

EXCITSLB clist. you are prompted for the correct cics release
310, 320, ... (no checking)

within the REXXTCOB test EXEC you see
...
CALL EXPLLDEF ISPLLIB TTEP.TSK.E.TCEM.PDSE UNCOND
RXVARS_RESULT = RXVARS('TVAR1','TVAR.1','TVAR.L','TVAR.2')

in the exci test exec EXCIS1
...
MDDN = 'ISPLLIB'
MDSN = "'TTEP.TSK.E.TCEM.PDSE'"
"ISPEXEC LIBDEF "MDDN" DATASET ID("MDSN") UNCOND"
INTERPRET "CALL CA1DLINK '"P1"','"P2"','"P3"','"P4"','"P5"'"

where as above, the Px vars are program parameters passed to the program.

when you get into the program, from rexx, a rexx environment is established.

r0 points to the
*01* Macro Name: IRXENVB
* Pointed to by: Register 0, or by the ENVBLOCK
which we use to get to the ENVBLOCK_IRXEXTE DS  A  Address of IRXEXTE.
we use this to get at the IRXEXCOM variable interface module

r1 points to the
/* MACRO-NAME: IRXEFPL
which has a pointer to the arguments passed into the module from the
invoking REXX call.
within, we use the field
EFPLARG  DS A  * POINTER TO ARGUMENTS TABLE
to get to the arguments

these arguments are ptrs and arg length pairs mapped by
*/*  MACRO-NAME = IRXARGTB
which points to the arg string, and the length of that string

the RXVARS program uses the ARGS to pass in from the rexx exec, a list
of actual REXX variables names. the program uses the list of names to
individually create SHVFETCH and SHVSTORE requests. these request read
into your program storage, and write from your program storage: from
and to the rexx variable using the IRXEXCOM module.

this module is called, with you passing the address of one or more
SHVBLOCKS, mapped by
*    MACRO-NAME = IRXSHVB
chained as required. you establish these control blocks by
getting storage for them (as much as needed; based on your programs
requirements). you then configure the control blocks with appropriate
data which describes the variables that you are interested in.



*01* Macro Name: IRXENVB
* Pointed to by: Register 0, or by the ENVBLOCK parameter during
                 calls to various REXX programming service routines
                 and REXX replaceable routines.

* Function:
* The REXX Environment block (ENVBLOCK) contains information
  describing a REXX environment, and REXX execs in that
  environment.  Included in the ENVBLOCK are pointers to the
  PARMBLOCK, WORKBLOK_EXT and IRXEXTE, as well as error
  information.
***********************************************************************
***                                                                  **
***  ENVBLOCK - REXX Environment Block                               **
***                                                                  **
***********************************************************************
ENVBLOCK DSECT                         REXX Environment Block
         DS  0D                        Align on doubleword boundary
ENVBLOCK_ID           DS  CL8          ENVBLOCK identifier 'ENVBLOCK'
ENVBLOCK_VERSION      DS  CL4          Version number        @DEI0040
ENVBLOCK_LENGTH       DS  F            Length of ENVBLOCK    @DEI0040
ENVBLOCK_PARMBLOCK    DS  A            Address of the PARMBLOCK
ENVBLOCK_USERFIELD    DS  A            Address of the user field
ENVBLOCK_WORKBLOK_EXT DS  A            Address of the current
*                                      WORKBLOK_EXT
ENVBLOCK_IRXEXTE      DS  A            Address of IRXEXTE
ENVBLOCK_ERROR        DS  0CL256       Error information
ERROR_CALL@           DS  A            Address of the routine in error
                      DS  F            Reserved
ERROR_MSGID           DS  CL8          Message identifier of first call
PRIMARY_ERROR_MESSAGE DS  CL80         Error message
ALTERNATE_ERROR_MSG   DS  CL160        Extended error message
ENVBLOCK_COMPGMTB     DS  A            Address of the Compiler
*                                      Programming Table     @E23X2BJ
ENVBLOCK_ATTNROUT_PARMPTR DS A         Address of a parameter
*                                      passed to the user's ATTNROUT
*                                      routine from the REXX attention
*                                      routine. Used for communication
*                                      between the user's ATTNROUT
*                                      routine and the REXX attention
*                                      routine.              @YA30448
ENVBLOCK_ECTPTR       DS  A            Address of the ECT under which
*                                      an environment that is
*                                      integrated with TSO/E is
*                                      anchored.             @YA43
ENVBLOCK_INFO_FLAGS   DS  0BL4         Information flags       @YA
ENVBLOCK_INFO_FLAG1   DS  BL1          Information byte 1      @YA
ENVBLOCK_TERMA_CLEANUP EQU X'80'       Flag to indicate that
*                                      IRXTERMA is in control to
*                                      FREE active execs and possi
*                                      to cleanup the ENVBLOCK
*                                      itself                  @YA
                      DS  BL3          Reserved                @YA
ENVBLOCK_USS_REXX     DS  F            Word reserved for USS REXX
                      DS  3F           Reserved
         DS  0D                        Align on doubleword boundar






*/* MACRO-NAME: IRXEFPL
*/* FUNCTION:
*/*
*/*   IRXEFPL defines the REXX External Functions parameter list
***   passed as r1 when entering the assembler routine with the x=asmrtn('v','q')
***   function call format where v and q are variables passes to asmrtn
*/*
EFPL     DSECT
EFPLCOM  DS A             * RESERVED
EFPLBARG DS A             * RESERVED
EFPLEARG DS A             * RESERVED
EFPLFB   DS A             * RESERVED
EFPLARG  DS A             * POINTER TO ARGUMENTS TABLE
EFPLEVAL DS A             * POINTER TO ADDRESS OF EVALBLOCK
         DS 0D


*/*  MACRO-NAME = IRXARGTB
*/*  FUNCTION = The REXX Argument Table (ARGTABLE) contains
*/*             information about arguments.  It consists of
*/*             ARGTABLE entries and an ARGTABLE end marker.  For
*/*             each argument string, there is an ARGTABLE entry
*/*             containing the address and length of the argument
*/*             string.  The last ARGTABLE entry is followed by the
*/*             ARGTABLE end marker.
*/********************************************************************/
*/*                                                                  */
*/*  ARGTABLE_ENTRY - REXX Argument Table Entry                      */
*/*                                                                  */
*/********************************************************************/
ARGTABLE_ENTRY DSECT                   REXX Argument Table Entry
         DS  0D                        Align on doubleword boundary
ARGTABLE_ARGSTRING_PTR    DS  A        Address of the argument string
ARGTABLE_ARGSTRING_LENGTH DS  F        Length of the argument string
ARGTABLE_NEXT             DS  0D       Next ARGTABLE entry
         DS  0D                        Align on doubleword boundary
*/********************************************************************/
*/*                                                                  */
*/*  ARGSTRING - REXX Argument String                                */
*/*                                                                  */
*/********************************************************************/
ARGSTRING DSECT                        REXX Argument String
*/********************************************************************/
*/*                                                                  */
*/*  ARGTABLE_END - REXX Argument Table End                          */
*/*                                                                  */
*/********************************************************************/
ARGTABLE_END DC  XL8'FFFFFFFFFFFFFFFF' End of ARGTABLE marker



*/*  MACRO-NAME = IRXEVALB
*/*  FUNCTION = The REXX Evaluation Block (EVALBLOCK) contains
*/*             information concerning the result of a REXX
*/*             function.  Information such as the length of the
*/*             result and the result itself are included in the
*/*             EVALBLOCK.
EVALBLOCK DSECT                        REXX Evaluation Block
EVALBLOCK_EVPAD1 DS  F                 Reserved - set to binary zero
EVALBLOCK_EVSIZE DS  F                 Size of EVALBLOCK in double
*                                      words
EVALBLOCK_EVLEN  DS  F                 Length of data
EVALBLOCK_EVPAD2 DS  F                 Reserved - set to binary zero
EVALBLOCK_EVDATA DS  C                 Result




*/*  MACRO-NAME = IRXEXTE
*  FUNCTION = The REXX Vector of External Entry Points (IRXEXTE)
*             contains addresses of external REXX routines and
*             replaceable REXX routines.  The first element in
*             the REXX Vector of External Entry Points (IRXEXTE)
*             contains the number of entry points in the REXX
*             Vector of External Entry Points (IRXEXTE).  The REXX
*             Vector of External Entry Points (IRXEXTE) is pointed
*             to by the ENVBLOCK_IRXEXTE field in the ENVBLOCK.
*
*             Each REXX replaceable routine is represented by two
*             entry points.  The first entry point contains the
*             address of the replaceable routine or the default
*             TSO/E routine if a replaceable routine has not been
*             provided.  The second entry point contains the
*             address of the default TSO/E routine, regardless of
*             whether or not a replaceable routine has been
*             provided.
*
*/********************************************************************/
*/*                                                                  */
*/*  IRXEXTE - REXX Vector of External Entry Points                  */
*/*                                                                  */
*/********************************************************************/
IRXEXTE  DSECT                         REXX Vector of External
*                                      Entry Points
         DS    0D                      Align on doubleword boundary
IRXEXTE_ENTRY_COUNT DS F               Number of entry points in the
*                                      REXX Vector of External Entry
*                                      Points
IRXINIT        DS A                    IRXINIT - REXX Initialization
*                                      Routine
LOAD_ROUTINE   DS A                    LOAD_ROUTINE - REXX Load Exec
*                                      Routine
IRXLOAD        DS A                    IRXLOAD - Default REXX Load Exec
*                                      Routine
IRXEXCOM       DS A                    IRXEXCOM - REXX Variable Access
*                                      Routine
IRXEXEC        DS A                    IRXEXEC - REXX Run Exec Routine
IO_ROUTINE     DS A                    IO_ROUTINE - REXX Input/Output
*                                      Routine
IRXINOUT       DS A                    IRXINOUT - Default REXX
*                                      Input/Output Routine
IRXJCL         DS A                    IRXJCL - REXX JCL Routine
IRXRLT         DS A                    IRXRLT - REXX Get Result Routine
STACK_ROUTINE  DS A                    STACK_ROUTINE - REXX Data Stack
*                                      Handling Routine
IRXSTK         DS A                    IRXSTK - Default REXX Data Stack
*                                      Handling Routine
IRXSUBCM       DS A                    IRXSUBCM - REXX Subcommand
*                                      Service Routine
IRXTERM        DS A                    IRXTERM - REXX Termination
*                                      Routine
IRXIC          DS A                    IRXIC - REXX Immediate Commands
*                                      Routine
MSGID_ROUTINE  DS A                    MSGID_ROUTINE - REXX Message ID
*                                      Routine
IRXMSGID       DS A                    IRXMSGID - Default REXX Message
*                                      ID Routine
USERID_ROUTINE DS A                    USERID_ROUTINE - REXX User ID
*                                      Routine
IRXUID         DS A                    IRXUID - Default REXX User ID
*                                      Routine
IRXTERMA       DS A                    IRXTERMA - REXX Abnormal
*                                      Termination Routine
IRXSAY         DS A                    IRXSAY - REXX SAY      @E23X2BJ
*                                      Instruction Routine    @E23X2BJ
IRXERS         DS A                    IRXERS - REXX External @E23X2BJ
*                                      Routine Search Routine @E23X2BJ
IRXHST         DS A                    IRXHST - REXX Host     @E23X2BJ
*                                      Command Search Routine @E23X2BJ
IRXHLT         DS A                    IRXHLT - REXX Halt     @E23X2BJ
*                                      Condition Routine      @E23X2BJ

NTRY,R8  LOCAL_WORKAREA,R9  RXVSAM,R12,R11,R10
  SOURCE STATEMENT                                  HLASM R5.0  2008/10
IRXTXT         DS A                    IRXTXT - REXX Text     @E23X2BJ
*                                      Retrieval Routine      @E23X2BJ
IRXLIN         DS A                    IRXLIN - REXX LINESIZE @E23X2BJ
*                                      Routine                @E23X2BJ
IRXRTE         DS A                    IRXRTE - REXX Exit     @E23X2BJ
*                                      Routing Routine        @E23X2BJ



*    MACRO-NAME = IRXSHVB
*    FUNCTION = This macro maps a REXX Shared Variable Request Block.
*          these can be chained by the SHVNEXT field.
*
*          The SHVBLOCK is passed as an interface to the REXX
*          Variable Access Routines, and returns information
*          from them.
+SHVBLOCK DSECT                        SHARED VARIABLE REQUEST BLOCK
+SHVNEXT  DS  A                        Chain pointer to next SHVBLOCK
+SHVUSER  DS  F                        Used during "FETCH NEXT"
+*                                      Contains length of buffer
+*                                      pointed to by SHVNAMA
+SHVCODES DS  0F
+SHVCODE  DS  CL1                      Function code - indicates type
+*                                      of variable access request
+SHVRET   DS  XL1                      Return codes
+         DS  H'0'                     Reserved (should be 0)
+SHVBUFL  DS  F                        Length of fetch value buffer
+*                   actual length of your storage to receive the var
+*                   set it correctly to prevent storage overlay
+SHVNAMA  DS  A                        Address of variable name
+SHVNAML  DS  F                        Length of variable name
+SHVVALA  DS  A                        Address of value buffer
+SHVVALL  DS  F                        Length of value buffer
+*                                      (Set on fetch)
+SHVBLEN  EQU *-SHVBLOCK               Length of SHVBLOCK
+**********************************************************************
+*   SHARED VARIABLE REQUEST BLOCK - function codes                   *
+**********************************************************************
+SHVFETCH EQU   C'F'            Copy value of shared variable
+SHVSTORE EQU   C'S'            Set variable from given value
+SHVDROPV EQU   C'D'            Drop variable
+SHVSYFET EQU   C'f'            Symbolic name retrieve
+SHVSYSET EQU   C's'            Symbolic name set
+SHVSYDRO EQU   C'd'            Symbolic name drop
+SHVNEXTV EQU   C'N'            Fetch "next" variable
+SHVPRIV  EQU   C'P'            Fetch private information
+**********************************************************************
+*        SHARED VARIABLE REQUEST BLOCK - return codes (SHVRET)       *
+**********************************************************************
+SHVCLEAN EQU   X'00'           Execution was OK
+SHVNEWV  EQU   X'01'           Variable did not exist
+SHVLVAR  EQU   X'02'           Last variable transferred ("N")
+SHVTRUNC EQU   X'04'           Truncation occurred for "Fetch"
+SHVBADN  EQU   X'08'           Invalid variable name
+SHVBADV  EQU   X'10'           Invalid value specified
+SHVBADF  EQU   X'80'           Invalid function code (SHVCODE)
+**********************************************************************
+*        R15 return codes                                            *
+**********************************************************************
+SHVRCOK  EQU    0              Entire Plist chain processed
+SHVRCINV EQU   -1              Invalid entry conditions
+SHVRCIST EQU   -2              Insufficient storage available
         TITLE 'SAMPLE ENCIPHER/DECIPHER S/370 PROGRAM.'
*=====================================================================*
*       SYSTEM/370 ASSEMBLER H EXAMPLE                                *
*                                                                     *
*=====================================================================*
         SPACE
SAMP_CRY   START 0
         DS    0H
         STM   14,12,12(13)     SAVE REGISTERS
         BALR  12,0             USE R12 AS BASE REGISTER
         USING *,12             PROVIDE SAVE AREA FOR SUBROUTINE
         LA    14,SAVE          PERFORM SAVE AREA CHAINING
         ST    13,4(14)           "
         ST    14,8(13)           "
         LR    13,14              "
*
         CALL  CSFKGN,(RETCD,                                          *
               RESCD,                                                  *
               EXDATAL,                                                *
               EXDATA,                                                 *
               KEY_FORM,                                               *
               KEY_LEN,                                                *
               KEYTYP1,                                                *
               KEYTYP2,                                                *
               KEK_ID1,                                                *
               KEK_ID2,                                                *
               DATA_ID,                                                *
               NULL_ID)
         CLC   RETCD,=F'0'      CHECK RETURN CODE
         BNE   BACK             OUTPUT RETURN/REASON CODE AND STOP
         CLC   RESCD,=F'0'      CHECK REASON CODE
         BNE   BACK             OUTPUT RETURN/REASON CODE AND STOP
*
* CALL ENCIPHER WITH THE KEY JUST GENERATED
*  OPERATIONAL FORM
*
         MVC   RULEAC,=F'1'           SET RULE ARRAY COUNT
         MVC   RULEA,=CL8'CUSP    '   BUILD RULE ARRAY
         CALL CSFENC,(RETCD,                                           *
               RESCD,                                                  *
               EXDATAL,                                                *
               EXDATA,                                                 *
               DATA_ID,                                                *
               TEXTL,                                                  *
               TEXT,                                                   *
               ICV,                                                    *
               RULEAC,                                                 *
               RULEA,                                                  *
               PAD_CHAR,                                               *
               OCV,                                                    *
               CIPHER_TEXT)
         CLC   RETCD,=F'0'      CHECK RETURN CODE
         BNE   BACK             OUTPUT RETURN/REASON CODE AND STOP
         CLC   RESCD,=F'0'      CHECK REASON CODE
         BNE   BACK             OUTPUT RETURN/REASON CODE AND STOP
         CALL CSFDEC,(RETCD,                                           *
               RESCD,                                                  *
               EXDATAL,                                                *
               EXDATA,                                                 *
               DATA_ID,                                                *
               TEXTL,                                                  *
               CIPHER_TEXT,                                            *
               ICV,                                                    *
               RULEAC,                                                 *
               RULEA,                                                  *
               OCV,                                                    *
               NEW_TEXT)
         CLC   RETCD,=F'0'      CHECK RETURN CODE
         BNE   BACK             OUTPUT RETURN/REASON CODE AND STOP
         CLC   RESCD,=F'0'      CHECK REASON CODE
         BNE   BACK             OUTPUT RETURN/REASON CODE AND STOP
*
COMPARE  EQU   *                         COMPARE START AND END TEXT
         CLC   TEXT,NEW_TEXT
         BE    GOODENC
         WTO   'DECIPHERED TEXT DOES NOT MATCH STARTING TEXT'
         B      BACK
GOODENC  WTO   'DECIPHERED TEXT MATCHES STARTING TEXT'
*
*
         WTO   'TEST PROGRAM TERMINATING'
         B     RETURN
*
*----------------------------------------------------
* CONVERT RETURN/REASON CODES FROM BINARY TO EBCDIC
*----------------------------------------------------
BACK     DS    0F                OUTPUT RETURN & REASON CODE
         L     5,RETCD           LOAD RETURN CODE
         L     6,RESCD           LOAD REASON CODE
         CVD   5,BCD1            CONVERT TO PACK-DECIMAL
         CVD   6,BCD2
         UNPK  ORETCD,BCD1       CONVERT TO EBCDIC
         UNPK  ORESCD,BCD2
         OI    ORETCD+7,X'F0'    CORRECT LAST DIGIT
         OI    ORESCD+7,X'F0'
*
         MVC   ERROUT+21(4),ORETCD+4
         MVC   ERROUT+41(4),ORESCD+4
ERROUT   WTO   'ERROR CODE =     , REASON CODE =     '
RETURN   EQU   *
         L     13,4(13)          SAVE AREA RESTORATION
         MVC   16(4,13),RETCD    SAVE RETURN CODE
         LM    14,12,12(13)
         BR    14                RETURN TO CALLER
*
BCD1     DS    D                 CONVERT TO BCD TEMP AREA
BCD2     DS    D                 CONVERT TO BCD TEMP AREA
ORETCD   DS    CL8'0'            OUTPUT RETURN CODE
ORESCD   DS    CL8'0'            OUTPUT REASON CODE
*
KEY_FORM DC    CL8'OP      '     KEY FORM
KEY_LEN  DC    CL8'SINGLE  '     KEY LENGTH
KEYTYP1  DC    CL8'DATA    '     KEY TYPE 1
KEYTYP2  DC    CL8'        '     KEY TYPE 2
TEXT     DC    C'ABCDEFGHIJKLMNOPQRSTUV0987654321'
TEXTL    DC    F'32'             TEXT LENGTH
CIPHER_TEXT DC CL32' '
NEW_TEXT DC    CL32' '
DATA_ID  DC    XL64'00'          DATA KEY TOKEN
NULL_ID  DC    XL64'00'          NULL KEY TOKEN - UNFILLED
KEK_ID1  DC    XL64'00'          KEK1 KEY TOKEN
KEK_ID2  DC    XL64'00'          KEK2 KEY TOKEN
RETCD    DS    F'0'              RETURN CODE
RESCD    DS    F'0'              REASON CODE
EXDATAL  DC    F'0'              EXIT DATA LENGTH
EXDATA   DS    0C                EXIT DATA
RULEA    DS    1CL8              RULE ARRAY
RULEAC   DS    F'0'              RULE ARRAY COUNT
ICV      DC    XL8'00'           INITIAL CHAINING VECTOR
OCV      DC    XL18'00'          OUTPUT CHAINING VECTOR
PAD_CHAR DC    F'0'              PAD CHARACTER
SAVE     DS    18F               SAVE REGISTER AREA
         END   SAMPLEEXSYSP1  CSECT                                  
EXSYSP1  AMODE 31                               
EXSYSP1  RMODE ANY                              
         STM   14,12,12(13)                     
         LR    12,15                            
         USING EXSYSP1,12                       
* GET SAVE AREA AND ADD TO CHAIN                
         GETMAIN R,LV=72,LOC=(31)               
         ST    13,4(1)                          
         LR    13,1                             
* GET STORAGE BELOW THE LINE AND COPY DCBS, ETC.
         GETMAIN R,LV=SIZE_TOT,LOC=(24)         
         LR    11,1                             
         USING WORKAREA,11                      
         MVC   IN(SIZE_INDCB),INDCB             
         MVC   OUT(SIZE_OUTDCB),OUTDCB          
         MVC   OPENWK(SIZE_OPN),OPENS           
         MVC   CLOSWK(SIZE_CLO),CLOSES          
* GET STORAGE FOR RECORDS                       
         GETMAIN R,LV=100,LOC=(31)            
         LR    3,1                            
* OPEN; NOTE MF PARAMETER                     
         LA    14,OUT                         
         USING IHADCB,14                      
         MVC   H_SYSPRINT_LRECL,DCBLRECL      
         DROP  14                             
         OPEN (IN,,OUT,(OUTPUT)),MF=(E,OPENWK)
* MAIN LOGIC                                  
LOOP     DS    0H                             
         GET   IN,(3)                         
         PUT   OUT,(3)                        
         B     LOOP                           
DONE     DS    0H                             
         CLOSE (IN,,OUT),MF=(E,CLOSWK)        
         LR    1,3                            
         FREEMAIN R,LV=100,A=(1)              
         LR    1,11                           
         FREEMAIN R,LV=SIZE_TOT,A=(1)         
         LR    1,13                           
         L     13,4(1)                                                  
         FREEMAIN R,LV=72,A=(1)                                         
         LM    14,12,12(13)                                             
         SR    15,15                                                    
         BR    14                                                       
* WORK AREAS AND CONTROL BLOCKS                                         
INDCB    DCB DDNAME=INDD,DSORG=PS,MACRF=GM,        X
               DCBE=IN_DCBE                                             
SIZE_INDCB EQU *-INDCB                                                  
OUTDCB   DCB DDNAME=OUTDCB,DSORG=PS,MACRF=PM,      X
               RECFM=FB,DCBE=OUT_DCBE                                   
SIZE_OUTDCB EQU *-OUTDCB                                                
OPENS    OPEN (,,),MF=L                                                 
SIZE_OPN EQU *-OPENS                                                    
CLOSES   CLOSE (,,),MF=L                                                
         DS    H                                                        
SIZE_CLO EQU *-CLOSES                                                   
SIZE_TOT EQU *-INDCB                                                    
IN_DCBE  DCBE RMODE31=BUFF,EODAD=DONE                                   
OUT_DCBE DCBE RMODE31=BUFF                                              
*                               
WORKAREA DSECT                  
IN       DS  XL(SIZE_INDCB)     
OUT      DS  XL(SIZE_OUTDCB)    
OPENWK   DS  XL(SIZE_OPN)       
CLOSWK   DS  XL(SIZE_CLO)       
*                               
H_SYSPRINT_LRECL DS H           
*                               
EXSYSP1  CSECT                  
TESTDCBD DCBD DSORG=PS,DEVD=DA  
*                               
         END EXSYSP1            SCANDDS ASSEMBLER SOURCE

*--- Title    : SCANDDS                                            ---*
*    Function : This program will scan the requested DDname for       *
*               all occurrences of the specified member.              *
*               The program will check to see if ISPF is active,      *
*               if it isn't, then a message is issued to this         *
*               effect. Otherwise the program invokes ISPF services   *
*               dynamically to scan for the specified member.         *
*    Notes    : Requires SYS1.MACLIB and SYS1.MODGEN for the          *
*               assembly.                                             *
* Register usage :                                                    *
*                  R12 Base register                                  *
*                  R2  Used for the TIOT address                      *
*                  R3  TIOELNGH Length counter                        *
*                  R4  Used for the DSCB address                      *
*                  R5  Used for the JFCB address                      *
*---               R9  Used for branch and link to read the DSCB   ---*
SCANDDS  TITLE 'SCAN TSO ALLOCATIONS FOR A MEMBER'
SCANDDS  CSECT
SCANDDS  AMODE 31
         USING SCANDDS,R15
         B     PASTINFO             Branch around the date
         DC    C'SCANDDS &SYSDATE'
PASTINFO EQU   *
         STM   R14,R12,12(R13)      Save caller's registers
         LR    R12,R15              Load new base register
         DROP  R15                  Drop register 15
         USING SCANDDS,R12          Use register 12 as my base
         LA    R11,SAVE             Point to my save area
         ST    R13,4(R11)           Store forward pointer
         ST    R11,8(R13)           Store backward pointer
         LR    R13,R11              Local save area pointer
*---     Check to see if ISPF is active                            ---*
CHKISPF  DS    0H
         LOAD  EP=ISPQRY            Get address of ISPQRY
         ST    R0,ISPQRY            Save it
         LR    R15,R0               And load it for CALL
         CALL  (15),ISPQRY,VL,MF=(E,CALLLIST)
         LTR   R15,R15              Is the return code = 00
         BZ    ISPFACT              Yep... ISPF lives!
NOISPF   EQU   *                    Otherwise ....
         STFSMODE ON                Set clear screen
         TPUT  SPACES,L'SPACES      Put in some fillers
         TPUT  SPACES,L'SPACES
         TPUT  ERRMSG1,L'ERRMSG1    Pass on the bad news to the invoker
         TPUT  SPACES,L'SPACES
         TPUT  ERRMSG2,L'ERRMSG2
         TPUT  SPACES,L'SPACES      Put in some more fillers
         TPUT  SPACES,L'SPACES
         STFSMODE OFF               Reset the screen
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Set up for dynamically calling ISPLINK                    ---*
ISPFACT  DS    0H
         LOAD  EP=ISPLINK           Get address of ISPLINK
         ST    R0,ISPLINK           Save it
         LR    R15,R0               And load it for CALL
*---     Define ISPF variables                                     ---*
*                                   Define ddname
         CALL  (15),(VDEFINE,NAME1,DDNAME,CHAR,L8),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Define ok?
         BNZ   DEFERR1              No..tell user and get out
*                                   Define member for vget
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(VDEFINE,NAME2,MEMBER,CHAR,L8),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Define ok?
         BNZ   DEFERR2              No..tell user and get out
*                                   Define member for tbadd
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(VDEFINE,NAME3,MEMNAME,CHAR,L8),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Define ok?
         BNZ   DEFERR2              No..tell user and get out
*                                   Define dataset name
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(VDEFINE,NAME4,DSNAME,CHAR,L44),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Define ok?
         BNZ   DEFERR3              No..tell user and get out
*                                   Define volser
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(VDEFINE,NAME5,VOLSER,CHAR,L6),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Define ok?
         BNZ   DEFERR4              No..tell user and get out
         SPACE
         MVC   DDNAME,SPACES        Clear the ddname field
         MVC   MEMBER,SPACES        Clear the member name field
*---     Create ISPF table                                         ---*
CREATAB  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(TBCREATE,SCTABLE,NULL,SCANLIST,NOWRITE,REPLACE),  X
               VL,MF=(E,CALLLIST)
         C     R15,=F'04'           Was tbcreate successful?
         BH    TBCRERR              Nope... then say so and get out
*---     Display panel                                             ---*
DISPPAN  DS 0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANP1,(R1)),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Was PF3/END/RETURN entered?
         BNZ   GETOUT               Yep... then get out
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(VGET,VARLIST),VL,MF=(E,CALLLIST)
*---     Get the address of the TIOT                               ---*
GETTIOT  DS    0H
         EXTRACT ANSWER,'S',FIELDS=(TIOT)
*---     Read the TIOT entries                                     ---*
READTIOT DS    0H
         L     R2,ANSWER            Load TIOTPTR address
         USING TIOT1,R2             Establish addressability
         LA    R2,TIOENTRY          Address TIODDPTR entries
         USING TIOENTRY,R2          Establish addressability
         SLR   R3,R3                Clear down reg 3
*---     Look for the DD name                                      ---*
SCAN     DS    0H
         IC    R3,TIOELNGH          Get the length of the entry
         CLI   TIOELNGH,X'00'       Are we at the end of the entries?
         BE    NODD                 Yep... DD not found
         CLI   TIOSLTYP,X'80'       Is it a free entry?
         BE    NEXT                 Yes.. skip to the next entry
         CLC   TIOEDDNM,DDNAME      Is it DD name we are looking for
         BE    GOTDD                Yes
NEXT     DS    0H
         AR    R2,R3                Add to get to the next entry
         B     SCAN
*---     Found the DD that we are interested in                    ---*
GOTDD    DS    0H
         SLR   R5,R5                Clear down reg 5
         ICM   R5,B'0111',TIOEJFCB  Only want last 3 bytes to get
*                                   the JFCB
         LA    R5,16(0,R5)
         USING INFMJFCB,R5          Addressability of JFCB
         MVC   VOLNUM,JFCBVOLS      Save volser for obtain
         MVC   DSDSN,JFCBDSNM       Save dsname for obtain
         MVC   MEMNAME,SPACES       Clear the member name
         BAL   R9,READDSCB          Let's see if we can find the member
         MVC   DSNAME,JFCBDSNM      Save dsname for tbadd
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(TBADD,SCTABLE),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Test return code
         BNZ   TBADDERR             Trouble with TBADD
         MVC   DSNAME,SPACES        Clear the name
         MVC   VOLSER,SPACES        Clear the volser
         MVC   DDNAME,SPACES        Clear the ddname
*---     Look for concatenated datasets                            ---*
NEXTONE  DS    0H
         AR    R2,R3                SKIP to get the next entry
         IC    R3,TIOELNGH          Get the length of the entry
         CLI   TIOSLTYP,X'80'       Is it a free entry?
         BE    NEXTONE              Yes.. skip to the next entry
         CLI   TIOELNGH,X'00'       Are we at the end of the entries?
         BE    REDISP               Yep... show the user
         CLC   TIOEDDNM,BLANKS      Are we at the end of concats?
         BNE   REDISP               Yep... show the user
         B     GOTDD
*---     Read DSCB of the dataset                                  ---*
READDSCB DS    0H
         OBTAIN DSCBDSN             Get DSCB of dsn
         LA    R4,WORKAREA          Load address of the DSCB
         USING DS1FMTID,R4          Establish addressability for DSCB
         B     *+4(R15)             Test the return code
         B     ISITPDS              OK ==> RC=00
         B     RCODE04              Vol not mounted
         B     RCODE08              Format-1 DSCB not found
*                                   in the VTOC specified
         B     RCODE12              I/O error or invalid format-1
*                                   or unexpected return code
*                                   received from CVAF
         B     RCODE16              Invalid work area pointer
ISITPDS  DS    0H
         CLI   DS1DSORG,X'02'       Is it a PDS?
         BE    PDS                  Yep...
         DROP  R4
         MVC   VOLSER,NOTPDS        Not a PDS message
         BR    R9
PDS      DS    0H
         MVC   DSNIN,JFCBDSNM       Move in dsn for SVC99
         MVC   VOLIN,JFCBVOLS       Move in volser for SVC99
         MVC   VOLSER,JFCBVOLS      Save volser for tbadd
ALLOC    DS    0H
         LA    R1,ALLOC99           Get ready for dynamic allocation
         SVC   99                   Invoke alloc/dealloc SVC
         OPEN  (PDSDIR,INPUT)       Open dataset for read
         XR    R4,R4                Clear Reg 4
READDIR  DS    0H
         GET   PDSDIR,DIRAREA       Read the directory
         LA    R4,DIRAREA           Get the address of the directory
         AH    R4,0(,R4)            Add number of used bytes
         ST    R4,ENDOFBUF          Store address of last used byte
         LA    R4,DIRAREA+2         Point to first directory entry
         USING DIRECTRY,R4          Map the directory
COMPMEMB DS    0H
         CLC   DIRNAME,=X'FFFFFFFFFFFFFFFF' Are we at the end?
         BE    CLOSEDIR             Yep.. then get out
         CLC   DIRNAME,MEMBER       Is this the member ?
         BE    WRITEIT              Yep...
         XR    R1,R1                No... then clear reg 1
         LA    R4,DIRC              Get DIRC address
         NI    0(R4),X'1F'          Remove unwanted bits
         IC    R1,0(,R4)            Insert DIRC into R1
         SLL   R1,1                 Multiply by 2
         C     R4,ENDOFBUF          Are we at the end of the buffer?
         BH    READDIR              Yep...
         LA    R4,1(R1,R4)          Load address of the next member
         B     COMPMEMB
WRITEIT  DS    0H
         MVC   MEMNAME,MEMBER       Move in member name for tbadd
CLOSEDIR DS    0H
         CLOSE PDSDIR               Get out of the PDS
         BR    R9
RCODE04  DS    0H
         MVC   VOLSER,RC04          RC=04
         BR    R9
RCODE08  DS    0H
         MVC   VOLSER,RC08          RC=08
         BR    R9
RCODE12  DS    0H
         MVC   VOLSER,RC12          RC=12
         BR    R9
RCODE16  DS    0H
         MVC   VOLSER,RC16          RC=16
         BR    R9
*---     DD not found                                              ---*
NODD     DS    0H
         MVC   DSNAME,NODSN         Move in the not found message
         MVC   MEMBER,SPACES        Clear the member name
         MVC   VOLSER,SPACES        Clear down volser field
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(TBADD,SCTABLE),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Test return code
         BNZ   TBADDERR             Trouble with TBADD
*---     Re-display the panel                                      ---*
REDISP   DS    0H
         L     R15,ISPLINK
         CALL  (15),(TBTOP,SCTABLE),VL,MF=(E,CALLLIST)
         L     R15,ISPLINK
         CALL  (15),(TBDISPL,SCTABLE,SCANP2),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Was PF3/END/RETURN entered?
         BNZ   CLOSETAB             Yep... then get out
         B     REDISP
*---     Close the table                                           ---*
CLOSETAB DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(TBCLOSE,SCTABLE),VL,MF=(E,CALLLIST)
         LTR   R15,R15              Was tbclose ok?
         BH    TBCLERR              Nope... then say so and get out
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with VDEFINE for DDname          ---*
DEFERR1  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN001),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with VDEFINE for Member          ---*
DEFERR2  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN002),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with VDEFINE for Memname         ---*
DEFERR3  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN003),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with VDEFINE for ds name         ---*
DEFERR4  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN004),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with VDEFINE for volser          ---*
DEFERR5  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN005),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with TBADD                       ---*
TBADDERR DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN007),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with TBCREATE                    ---*
TBCRERR  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN006),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Tell user we had trouble with TBCLOSE                     ---*
TBCLERR  DS    0H
         L     R15,ISPLINK          Get ISPLINK address
         CALL  (15),(DISPLAY,SCANM1,SCAN008),VL,MF=(E,CALLLIST)
         XR    R15,R15              Set good return code
         B     GETOUT               Let's get the hell out of here
*---     Clean up and get out                                      ---*
GETOUT   DS    0H
         L     R13,4(R13)           Get caller's save area
         LM    R14,R12,12(13)       Restore caller's regs
         LA    R15,00               Set return code
         BR    R14
*---     Define working storage areas                              ---*
ANSWER   DC    A(0)                 TCB extract address
BLANKS   DC    CL44' '
CHAR     DC    CL8'CHAR    '
DDNAME   DC    CL8'        '
NAME1    DC    CL8'DDNAME  '
NAME2    DC    CL8'MEMBER  '
NAME3    DC    CL8'MEMNAME '
NAME4    DC    CL8'DSNAME  '
NAME5    DC    CL8'VOLSER  '
DIRAREA  DS    CL256                To read pds directory
DISPLAY  DC    CL8'DISPLAY '        DISPLAY SERVICE
DSNAME   DC    CL44'DSNAME                                      '
ENDOFBUF DC    F'0'
L6       DC    F'6'                 VDEFINE length
L8       DC    F'8'                 VDEFINE length
L44      DC    F'44'                VDEFINE length
MEMBER   DC    CL8'        '
MEMNAME  DC    CL8'        '
NODSN    DC    CL44'DDNAME specified not allocated              '
NOTPDS   DC    CL6'NOTPDS'
NULL     DC    CL1' '
RC04     DC    CL6'RC=04  '
RC08     DC    CL6'RC=08  '
RC12     DC    CL6'RC=12  '
RC16     DC    CL6'RC=16  '
VGET     DC    CL8'VGET    '        VGET SERVICE
VPUT     DC    CL8'VPUT    '        VPUT SERVICE
VDEFINE  DC    CL8'VDEFINE '        VDEFINE SERVICE
VOLSER   DC    CL6'VOLSER'
SCANP1   DC    CL8'SCANP1  '        Panel name
SCANP2   DC    CL8'SCANP2  '        Panel name for tbdispl
SCANM1   DC    CL8'SCANM1  '        Panel name for messages
SCAN001  DC    CL8'SCAN001 '        VDEFINE error msg for ddname
SCAN002  DC    CL8'SCAN002 '        VDEFINE error msg for member
SCAN003  DC    CL8'SCAN003 '        VDEFINE error msg for memname
SCAN004  DC    CL8'SCAN004 '        VDEFINE error msg for dsn
SCAN005  DC    CL8'SCAN005 '        VDEFINE error msg for volser
SCAN006  DC    CL8'SCAN006 '        TBCREATE error
SCAN007  DC    CL8'SCAN007 '        TBADD error
SCAN008  DC    CL8'SCAN008 '        TBCLOSE error
SAVE     DC    18F'0'               New save area
DSCBDSN  CAMLST SEARCH,DSDSN,VOLNUM,WORKAREA
DSDSN    DC     CL44' '             Dataset name
VOLNUM   DC     CL6' '              Volser
WORKAREA DS     CL140               140 byte work area
*   Dynamic allocation
         DS    0D                   Align on dw boundary
         DC    CL8'OWNO'
ALLOC99  DC    A(ALLOCRB+X'80000000')    Turn the high order bit on
*                                   Must be on fw boundary
ALLOCRB  DC    AL1(20)              Length
         DC    AL1(01)              Verb code - 01 = dsname
*                                                    allocation
         DC    AL2(0)               Alloc  - flags1
RETCODE  DC    AL2(0)               Return code - s99error
INFOCODE DC    AL2(0)               Infor code  - s99info
         DC    A(ALLOCTP)           Pointer to text units
         DC    A(0,0)               Reserved flags
ALLOCTP  DC    A(DATASET)           Dataset name
         DC    A(DDNAMEA)           DD name
         DC    A(DISP)              Disp=shr
         DC    A(UNIT)              Unit=sysallda
         DC    A(DISKIN)            Volser
         DC    A(FREE+X'80000000')  Free at dcb close - set high-
*                                        order byte to signify end
DATASET  DC    X'0002'              Unit key 2 -d/s to be
*                                        allocated
         DC    X'0001'              No d/s to be allocated
         DC    X'002C'             Length of dsn
DSNIN    DC    CL44' '             DSN to alloc/dealloc
DDNAMEA  DC    X'0001'             Associates a ddname
         DC    X'0001'             Must be one
         DC    X'0008'             DD length
PDSIN    DC    CL8'PDSDIR'         DD name
DISP     DC    X'0004'             Disposition
         DC    X'0001'             Must be one
         DC    X'0001'             Must be one
         DC    X'08'               Share
UNIT     DC    X'0015'             Unit
         DC    X'0001'             Must be one
         DC    X'0008'             Length
         DC    CL8'SYSALLDA'       DD name
DISKIN   DC    X'0010'             Volser
         DC    X'0001'             No of volumes being specified
         DC    X'0006'             Length
VOLIN    DC    CL6' '              Volume
FREE     DC    X'001C'             Unallocation
         DC    X'0000'             Must be zero
PDSDIR   DCB   DDNAME=PDSDIR,                                          X
               DSORG=PS,                                               X
               LRECL=256,                                              X
               BLKSIZE=256,                                            X
               MACRF=(GM),                                             X
               RECFM=F,                                                X
               EODAD=CLOSEDIR
*---     Define table requirements                                ---*
NOWRITE  DC    C'NOWRITE '
WRITE    DC    C'WRITE   '
REPLACE  DC    C'REPLACE '
SCANLIST DC    C'(DDNAME DSNAME VOLSER MEMNAME)'
VARLIST  DC    C'(DDNAME MEMBER)'
SCTABLE  DC    C'SCTABLE '
TBADD    DC    C'TBADD   '
TBCLOSE  DC    C'TBCLOSE '
TBCREATE DC    C'TBCREATE'
TBDISPL  DC    C'TBDISPL '
TBLIST   DC    C'TBLIST  '
TBQUERY  DC    C'TBQUERY '
TBSTATS  DC    C'TBSTATS '
TBTOP    DC    C'TBTOP   '
*---     Define parameter list for ISPLINK                        ---*
CALLLIST CALL  ,(,,,,,,,,,,),MF=L  CALL LIST FORM
ISPLINK  DS    F
ISPQRY   DS    F
*---     Define TPUT message                                      ---*
LOSTIT   DS    0CL80
         DC    CL10' '
         DC    CL33'Sorry no can do! DD not allocated'
         DC    CL37' '
SPACES   DC    CL80' '
ERRMSG1  DS    0CL80
         DC    CL10' '
         DC    CL28'WARNING - ISPF NOT ACTIVE'
         DC    CL52' '
ERRMSG2  DS    0CL80
         DC    CL10' '
         DC    CL42'This program requires ISPF services to run'
         DC    CL28' '
*---     DSECTS                                                   ---*
DIRECTRY DSECT           Directory dsect
DIRNAME  DS    CL8       Member name
DIRTTR   DS    CL3       TTR
DIRC     DS    CL1       No of halfwords contained in user data field
FORMAT1  DSECT           DSCB dsect
         IECSDSL1 1
JFCBDSCT DSECT           JFCB dsect
         IEFJFCBN
TIOTDSCT DSECT           TIOT dsect
         IEFTIOT1
         END   SCANDDS
//jobname  JOB
/*JOBPARM K=0,L=999,R=xxxx
//*
//PRINT    OUTPUT DEPT='systems programming',
//         NAME='your name',
//         ROOM='location'
//**********************************************************************
//***            COMPILE                                             ***
//**********************************************************************
//C        EXEC PGM=IEV90,PARM=(NODECK,OBJECT)
//SYSLIB   DD DSN=SYS1.MACLIB,DISP=SHR
//         DD DSN=SYS1.MODGEN,DISP=SHR
//SYSUT1   DD DSN=&SYSUT1,
//            DCB=BUFNO=1,
//            SPACE=(1024,(120,120),,,ROUND),
//            UNIT=SYSDA
//SYSPUNCH DD SYSOUT=*
//SYSPRINT DD SYSOUT=SYSOUT= ,OUTPUT=(*.PRINT)
//SYSLIN   DD DSN=&OBJ,DISP=(MOD,PASS),
//            DCB=(BLKSIZE=3040,LRECL=80,RECFM=FBS,BUFNO=1),
//            SPACE=(3040,(40,40),,,ROUND),
//            UNIT=SYSDA
//*
//*   Assemble source dataset
//*
//SYSIN    DD DSN=assem.input.dataset(SCANDDS),DISP=SHR
//*
//**********************************************************************
//***            COMPILE                                             ***
//**********************************************************************
//L        EXEC PGM=IEWL,COND=(5,LT,C),
//         PARM='LIST,LET,XREF,MAP'
//*
//SYSPRINT DD SYSOUT=SYSOUT=N,OUTPUT=(*.PRINT)
//SYSLMOD  DD DSN=your.program.library,DISP=SHR
//SYSUT1   DD DSN=&SYSUT1,
//            DCB=BUFNO=1,
//            SPACE=(1024,(120,120),,,ROUND),
//            UNIT=SYSDA
//OBJIN    DD DSN=&OBJ,DISP=(OLD,DELETE)
//SYSLIN   DD *
   INCLUDE OBJIN
   NAME SCANDDS(R)
/*
SCANP1 PANEL

)ATTR DEFAULT(%+_)
  +  TYPE(TEXT) INTENS(LOW) SKIP(ON)
  %  TYPE(TEXT) INTENS(HIGH) SKIP(ON)
  _  TYPE(INPUT) INTENS(HIGH)
)BODY
+-------------------------------------------------------------------------------
%                        SCAN DD ALLOCATIONS FOR A MEMBER
+-------------------------------------------------------------------------------
%OPTION  ===>_ZCMD                                                             +




%   ENTER DD NAME AND MEMBER TO BE SCANNED



%    DD NAME     ===> _ddname  +

%    MEMBER NAME ===> _member  +






+Press%END+to terminate
+-------------------------------------------------------------------------------
)INIT
 .cursor = ddname
)REINIT
 REFRESH(*)
)PROC
 if (.resp = enter )
 ver (&ddname,nb)
 ver (&member,nb)
 vput (ddname,member) shared
)END

SCANP2 PANEL

)ATTR
   @ TYPE(OUTPUT) INTENS(LOW)
)BODY
%------------------------- TSO SCAN PROGRAM -----------------------------------
%
%ENTER COMMAND ===> _Z                                %SCROLL ===>_VAMT+
%
 DDNAME      DSNAME                                         VOLSER   MEMBER  +
%
)MODEL
@Z       +  @Z                                           + @Z     + @Z       +
)INIT
  .ZVARS = '(ZCMD DDNAME DSNAME VOLSER MEMNAME)'
  &ZTDMARK = '******************************** BOTTOM OF DATA *****************+
**************'
)PROC
  IF (.RESP = ENTER )
)END

SCANM1 PANELFOR ERROR MESSAGES

+------------------------% TSO DD SCAN PROGRAM +--------------------------------
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |    This program has encountered an error,                                   |
 |       refer to the short message.                                           |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 |                                                                             |
 | Press%END+key to return.                                                    |
+-------------------------------------------------------------------------------
)PROC
)END

SCAN00 ISPF MESSAGE MEMBER

SCAN001 'VDEFINE DDNAME ERROR'
'AN ERROR WAS ENCOUNTERED WITH THE VDEFINE SERVICE FOR DDNAME'
SCAN002 'VDEFINE MEMBER ERROR'
'AN ERROR WAS ENCOUNTERED WITH THE VDEFINE SERVICE FOR MEMBER'
SCAN003 'VDEFINE MEMBER ERROR'
'AN ERROR WAS ENCOUNTERED WITH THE VDEFINE SERVICE FOR MEMNAME'
SCAN004 'VDEFINE MEMBER ERROR'
'AN ERROR WAS ENCOUNTERED WITH THE VDEFINE SERVICE FOR DSNAME'
SCAN005 'VDEFINE MEMBER ERROR'
'AN ERROR WAS ENCOUNTERED WITH THE VDEFINE SERVICE FOR VOLSER'
SCAN006 'TBCREATE ERROR'
'AN ERROR WAS ENCOUNTERED CREATING AN ISPF TABLE'
SCAN007 'TBADD ERROR'
'AN ERROR WAS ENCOUNTERED ADDING TO THE TABLE'
SCAN008 'TBCLOSE ERROR'
'AN ERROR WAS ENCOUNTERED CLOSING AN ISPF TABLE'


Search String Instruction

The SRST instruction is the simplest of these four instructions. It scans the second
operand string addressed by register R2, looking for a byte matching the specified
“test” character in GR0. If a matching byte is found, the R1 register is set to its
address. Because the second operand string can be very long, the CPU uses “Method B” to
process part of the string before checking for interruptions. 
For finding a single
character, SRST is simpler and faster than a Translate and Test instruction like TRT, or
a CLI loop. Unlike TRT, however, it searches for only a single character.
To use SRST, set the test character in GR0, set the R2 register to the address of the
leftmost byte of the string to be scanned, and the R1 register to the address of the
first byte after the end of the string. The CPU uses the address in the R1 register to
know when to stop the scan; otherwise, it could keep scanning bytes in memory until it
found a match somewhere, or caused an unexpected interruption.

For example, suppose you want to scan the string at MyData to find the first occurrence
of a blank character:

LA 0,C' ' Search character is a blank
LA 1,MyData Set GR1 to start of the string
LA 5,MyData+L' MyData Set GR5 to byte past end of string
Repeat SRST 5,1 Scan the string for a blank
JO Repeat Scan was incomplete, try again
JH NotFound CC2, no blank was found
- - - GR5 points to the blank
If the Condition Code is 3, we simply branch back to the SRST to continue the search.

On completion, either or both of the R1 and R2 registers may be updated:
• If the CC is 1, the R1 register is updated and the R2 register is unchanged.
• If the CC is 2, both the R1 and R2 registers are unchanged.
• If the CC is 3, R1 is unchanged and R2 is updated to the address of the next byte 
to be tested.
You can then branch back to the SRST instruction to continue the search.

#####

Move String Instruction

The MVST instruction moves bytes from the second operand to the first, testing each
source byte for the ending character. If the entire operand (including the ending
character) has been moved, the CPU sets Condition Code 1, and sets the R1 register to
the address of the ending character. If some bytes remain to be moved, the addresses in
R1 and R2 are updated to point to the next bytes to be processed, unused high-order
addressing bits are set to zero, and the Condition Code is set to 3.
Table 159. CC settings for MVST instruction
Figure 236 sketches the operation of the MVST instruction.
CC Meaning
1 Entire second operand moved; R1 points to end of first operand
3 Incomplete move; R1 and R2 point to next bytes to process

XR 0,0 Ending character is a null byte
LA 1,Old Address of source string
LA 2,New Address of target string
Move MVST 2,1 Move from Old to New
JO Move Repeat if CC=3
- - -
Old DC C' This is a null-terminated string' , X' 0 '
New DS CL(L' Old+1) Reserve space for New string
Figure 237. Moving a null-terminated string
It's important to ensure that the target field is long enough to hold both the characters and the
null terminating byte.
Many programs must scan character strings containing tokens separated by commas. Using
MVST, you can move the tokens one at a time to a work area for analysis.
LHI 0,C' , ' Ending character is a comma
LA 1,Source Address of source string
NextTok LA 2,WorkArea Address of work area for a token
LR 3,1 Save starting address of token
Move MVST 2,1 Move from Source to WorkArea
JO Move Repeat if CC=3
SR 1,3 Subtract token' s starting address
STH 1,TokenLen Save its length
- - - Process the token (preserve GR1,GR3)
LA 1,1(1,3) Point GR1 past the comma
J NextTok And go scan for the next token
- - -
Source DC C' LIST,OBJECT,XREF,ADATA,' String of tokens
WorkArea DS CL20 Reserve space for longest token
TokenLen DS H Length of current token
Figure 238. Using MVST to isolate comma-separated tokens
This example is incomplete because we would expect more tokens to follow the last one (ADATA),
and because the length of the entire string should be checked to see if the last token was not
followed by a comma.

#####

Compare Logical String Instruction
As we saw for CLCL and CLCLE, the two operands being compared can have different lengths,
and either operand may be padded. CLST, however, requires that the operands have the same
terminating character; and neither is padded during comparison.
The operands are compared byte by byte from left to right, until unequal bytes are found or the
end of an operand is reached. Unlike SRST, there is no stop address or operand length for either
operand, so be sure the strings are properly terminated.
If the end character is found in either operand before being found in the other, the shorter
operand is low; if they are found at the same time, the operands are equal.
The Condition Code settings after CLST are the same as those for other compare instructions,
except that CC3 indicates an incomplete operation. As with SRST and MVST, if the Condition
Code is 3, you can just branch back to repeat the CLST.

CC Meaning
0 Entire operands are equal; R1 and R2 unchanged
1 First operand low; R1 and R2 point to last bytes processed
2 First operand high; R1 and R2 point to last bytes processed
3 Operands equal so far; R1 and R2 point to next bytes to process

At termination, the contents of the registers are:
1. If the comparison ends at the End character for both operands, they are equal: the CC is set
to 0 and GR R1 and GR R2 point to the End characters.
2. If the comparison ends at unequal bytes, the CC is set to 1 or 2 depending on whether the
first operand byte is less than or greater than the second operand byte. GR R1 and GR R2
contain the addresses of the unequal bytes.
3. If the comparison reaches the End character of one operand before the other, that operand is
considered the smaller and the CC is set accordingly. GR R1 and GR R2 point to the bytes
where the comparison stopped. (Note that no padding occurs!).
4. If the comparison is not complete when the CPU needs to allow for possible interrupts, the
CC is set to 3 and GR R1 and GR R2 have the addresses of the next bytes to be compared.
You can then branch back to the CLST instruction to continue comparing.
To illustrate, suppose you want to compare the two C-strings at A and B.
XR 0,0 Set null ending byte in GR0
LA 7,A Set GR7 to start of first operand
LA 5,B Set GR5 to start of second operand
Comp CLST 7,5 Compare the two strings
JO Comp Incomplete comparison, repeat
JE Equal Strings are equal
JH A_High String A compares higher than string B
J A_Low String A compares lower than string B
When an inequality is found, the ending characters of the operands are not part of the comparison.
However, when R1 and R2 are updated when the Condition Code is 3, they could contain
the addresses of either or both ending characters

Compare Until Substring Equal Instruction (*)
CUSE is a very complex instruction.154 It is unusual in another way: it is both interruptible
(“Method A”) and stops and sets Condition Code 3 to allow interruption processing (“Method
B”).155 Though not widely used, it may be applicable in certain applications.
Table 162. Compare Until Substring Equal instruction
Op Mnem Type Instruction
B257 CUSE RRE Compare Until Substring Equal
In general, there are two types of matching substring, depending on whether the equal substrings
are at the same or different offsets:
• In ' XBCY' and ' ABCD' , the equal substrings ' B' and ' BC' (with lengths 1 and 2 respectively) are
at offset 1.
• In ' XYBC' and ' ABCD' , the equal substrings ' B' and ' BC' are at different offsets.
The CUSE instruction searches only for equal substrings at the same offset, and having the length
specified in GR0. It requires six general registers, two of which are fixed: GR0 and GR1. The
rightmost byte of GR0 contains the length of the desired matching substrings, and the rightmost
byte of GR1 contains a padding byte. The remaining bits of both registers are ignored.
The addresses of the two operands are specified by the even-numbered registers R1 and R2, and
their lengths are in R1+1 and R2+1, respectively. And unlike instructions like MVCL and
CLCLE, the lengths are signed, and a negative length is treated as zero.156
It's important to remember that the substrings must occur at the same offset in both operands.
Thus, in the two strings
ABCDEFG and QRSDEFT
the substring DEF occurs at offset 3, so CUSE can identify matching substrings for lengths 1, 2,
and 3. However, in the two strings
ABCDEFG and BCDEFGH
the string BCDEFG appears at different offsets, so they will not be considered as equal substrings by
CUSE.
The padding character in GR1 is used to extend the shorter string if necessary. For example, if the
padding byte is C' *' and the two operand strings are
ABC and BCD**
with lengths 3 and 5 respectively, and the substring length is 2, then the matching substring will
be the characters **.
The Condition Code and registers are set as indicated in Table 163.
CC Meaning
0 Equal substrings found; R1, R2, and lengths updated; or,
the substring length is 0, and R1, R2 are unchanged
1 Ended at longer operand, last bytes were equal
(allows continuing search for further matches if required)
2 Ended at longer operand, last bytes were unequal; or,
both operand lengths = 0 and the substring length is > 0
3 Search operation incomplete, last compared bytes unequal;
R1 and R2 and lengths are updated

Here are some examples of CUSE: suppose we execute the code sequence in Figure 241 for
various values of String1 and String2 and their lengths, with different pad characters, searching
for matching 3-byte substrings in each case:
CC Meaning
0 Equal substrings found; R1, R2, and lengths updated; or,
the substring length is 0, and R1, R2 are unchanged
1 Ended at longer operand, last bytes were equal
(allows continuing search for further matches if required)
2 Ended at longer operand, last bytes were unequal; or,
both operand lengths = 0 and the substring length is > 0
3 Search operation incomplete, last compared bytes unequal;
R1 and R2 and lengths are updated
LA 0,Substr_Len Desired substring length in R0
LA 1,Pad_Char Pad Character in R1
LM 2,5,=A(String1,L' String1,String2,L' String2)
CUSE 2,4         L     R4,CVTPTR               LOAD CVT ADDRESS
         USING CVT,R4                  CVT ADDRESSABILITY
         L     R5,CVTEXT2              OS/VS2 COMMON EXTENSION
         USING CVTXTNT2,R5             CVTXTNT2 ADDRESSABILITY
         LM    R14,R15,CVTLDTO         DATE/TIME ZONE OFFSET
         LM    R2,R3,CVTLSO            LEAP SECONDS CORRECTION
         LM    R0,R1,STCKGMT           TOD CLOCK STCK VALUE
*
*        CALCULATE LOCAL TIME = GMT TOD + CVTLDTO - CVTLSO
*
         ALR   R1,R15                  CORRECT GMT BY LDTO
         BC    8+4,TOD1                IF CARRY,
         AL    R0,=F'1'                 ADD 1 TO HOW
         ALR   R0,R14                  ADD LDTO HOW
*
TOD1     SLR   R1,R3                   SUBTRACT  LSO   LOW
         BC    2+1,TOD2                IF NO CARRY,
         BCTR  R0,0                     SUBTRACT 1 FROM HOW
         SLR   R0,R2                   SUBTRACT LSO   HOW
*
TOD2     STM   R0,R1,STCKLCL           TOD CLOCK LOCAL TIME
         STCKCONV STCKVAL=STCKLCL,     CONVERT LOCAL TIME              +
               CONVVAL=LCLTIMED,        TO                             +
               TIMETYPE=DEC,             HHMMSSTHMIJU0000              +
               DATETYPE=YYYYMMDD         YYYYMMDDXXXXXXXX
         LA    R1,GMTTIMED
         BAS   R14,HEXPRT
         MVC   GMTWTO+12(24),PHEX
         LA    R1,LCLTIMED
         BAS   R14,HEXPRT
         MVC   LCLWTO+12(24),PHEX
         WTO   MF=(E,GMTWTO)           WTO GMT
         WTO   MF=(E,LCLWTO)           WTO LCL

         ...

HEXPRT   UNPK  PHEX+00(8+1),00(4+1,R1)
         UNPK  PHEX+08(8+1),04(4+1,R1)
         UNPK  PHEX+16(8+1),08(4+1,R1)
         TR    PHEX+00(24),HEXTAB-C'0'
         BR    R14

PHEX     DS    CL25
GMTWTO   WTO   '   GMT: ....+....1....+....2....',MF=L
LCLWTO   WTO   ' LOCAL: ....+....1....+....2....',MF=L
STCKGMT  DS    D
STCKLCL  DS    D
LCLTIMED DS    XL16
GMTTIMED DS    XL16
HEXTAB   DC    C'0123456789ABCDEF'
         CVT   DSECT=YES               CVT map         PRINT GEN 
SNOOZER  CSECT 
*********************************************************************** 
*---------------------------------------------------------------------* 
*                                                                     * 
*        THIS SUB-PROGRAM IS CALLED, PASSING A 07-BYTE DISPLAY        * 
*        NUMERIC VALUE, REPRESENTED AS C'SSSSSTH' (SECONDS, TENTHS    * 
*        AND HUNDREDTHS).                                             * 
*                                                                     * 
*        IT INVOKES THE MVS 'STIMER' MACRO, TO SUSPEND A JOB AND/OR   * 
*        JOB-STEP, BASED UPON THE 07-BYTE PARAMETER VALUE.            * 
*                                                                     * 
*        SYNTAX EXAMPLE FROM COBOL, PASSING A 60-SECOND INTERVAL:     * 
*                                                                     * 
*        03  WS-INTERVAL            PIC 9(07).                        * 
*        03  WS-SNOOZER             PIC X(08) VALUE 'SNOOZER'.        * 
*                                                                     * 
*        MOVE 6000                  TO WS-INTERVAL.                   * 
*                                                                     * 
*        CALL WS-SNOOZER            USING WS-INTERVAL.                * 
*                                                                     * 
*        THE RETURN-CODE SPECIAL-REGISTER CAN BE CHECKED FOR SUCCESS  * 
*        OR FAILURE, WITH 16=GETMAIN ERROR AND 08=INVALID INTERVAL.   * 
*                                                                     * 
*        THERE IS CODE TO PREVENT THIS SUB-PROGRAM FROM BEING INVOKED * 
*        FROM CICS. IF THE RUN-ENVIRONMENT IS DETERMINED TO BE CICS,  * 
*        THE RETURN-CODE SPECIAL-REGISTER WILL EQUAL 4095.            * 
*                                                                     * 
*        OF COURSE, A RETURN-CODE VALUE OF ZERO INDICATES SUCCESS.    * 
*                                                                     * 
*        NOTE THAT LABEL 'MAXINTVL' IS SET TO A SITE-SPECIFIC VALUE.  * 
*                                                                     * 
*        CURRENTLY, IT IS SET TO 300 SECONDS (5 MINUTES) AND SHOULD   * 
*        BE ADJUSTED ACCORDINGLY.                                     * 
*                                                                     * 
*---------------------------------------------------------------------* 
*********************************************************************** 
         USING *,R12               INFORM ASSEMBLER 
         SAVE  (14,12)             SAVE CALLERS REGISTERS 
         LA    R12,0(,R15)         R12 IS OUR BASE-REGISTER 
         B     BEGNEXEC            BEGIN EXECUTION 
         YREGS                     MVS REGISTER-MACRO 
SNOOZER  AMODE 31 
SNOOZER  RMODE ANY 
MAXINTVL DC    F'30000'            MAX-INTERVAL FOR 'STIMER' 
TWNTY4HR DC    F'8640000'          24-HOUR MAX-INTERVAL 
EYECTCHR DS    0CL48               PROGRAM EYECATCHER 
         DC    PL2'407' 
         DC    CL10'EYECATCHER' 
         DC    PL1'7' 
         DC    CL6' ===>' 
PROGNAME DC    CL8'SNOOZER' 
         DC    CL2',' 
ASMBLYDT DC    CL8'&SYSDATC'       FMT=CCYYMMDD 
         DC    CL2',' 
ASMBLYTM DC    CL9'&SYSTIME..00 '  FMT=HHMM00 (BYTE-09 IS BLANK) 
TRANSTBL DS    0CL256              INTERVAL VALIDATION-TABLE 
         DC    CL256' '            INITIALIZE TO SPACES 
         ORG   TRANSTBL+X'F0'      POINT TO NUMERICS-OFFSET 
         DC    XL10'00'            ENSURE X'00'S FOR 0-9 
         ORG   TRANSTBL+L'TRANSTBL RESET LOCATION COUNTER 
         CNOP  0,4                 ENSURE ALIGNMENT 
BEGNEXEC EQU   * 
         DFHAFCD TYPE=LOCATE       CHECK RUN-ENVIRONMENT 
         LTR   R15,R15             BATCH ENVIRONMENT? 
         BZ    ADDRPLST            YES, ADDRESS PARM-LIST 
         CLC   0(3,R15),=C'AFC'    BATCH ENVIRONMENT? 
         LA    R15,4095            LOAD WITH F'4095' 
         BE    GOBACK              NO, RETURN WITH F'4095' 
ADDRPLST EQU   * 
         LR    R9,R1               LOAD R1 CONTENTS 
         LA    R9,0(,R9)           ENSURE 'CLEAN' ADDRESS 
         LA    R0,STGAREAL         LOAD DYNAMIC-STG LGTH 
         GETMAIN RC LV=(0),LOC=ANY REQUEST FOR DYNAMIC-STG 
         LTR   R15,R15             ACQUIRED SUCCESSFULLY? 
         BNZ   GOBACK              NO, RETURN WITH ERROR 
         LA    R11,0(,R1)          DYNAMIC-STG BASE-REGISTER 
         USING STGDSECT,R11        INFORM ASSEMBLER 
         XC    STGAREA(STGAREAL),STGAREA 
         LA    R15,REGSAVEA        CHAIN SAVEAREAS 
         ST    R13,4(,R15)         STORE CALLER'S 'R13' 
         ST    R15,8(,R13)         STORE OUR 'RSA' ADDRESS 
         LR    R13,R15             POINT TO OUR 'RSA' 
         MVI   RETCODE+1,X'08'     SET TO H'8' 
         TRT   0(7,R9),TRANSTBL    VALID NUMERICS? 
         BNZ   RTN2CLLR            NO, RETURN TO THE CALLER 
         PACK  DWORD,0(7,R9)       PACK AS P'00000000SSSSSTH' 
         CVB   R7,DWORD            MAKE IT BINARY 
         LTR   R7,R7               PARAMETER ZERO? 
         BZ    RTN2CLLR            YES, RETURN TO THE CALLER 
         C     R7,TWNTY4HR         PARAMETER EXCEEDS 24-HOURS? 
         BH    RTN2CLLR            YES, RETURN TO THE CALLER 
         C     R7,MAXINTVL         PARAMETER EXCEEDS MAX-INTERVAL? 
         BH    RTN2CLLR            YES, RETURN TO THE CALLER 
         XC    DWORD,DWORD         ENSURE X'00'S 
         ST    R7,DWORD            POPULATE 'STIMER' INTERVAL 
         STIMER WAIT,BINTVL=DWORD  ISSUE 'STIMER' 
         MVI   RETCODE+1,X'00'     RESET TO H'0' 
RTN2CLLR EQU   * 
         LA    R15,REGSAVEA        POINT TO OUR 'RSA' 
         L     R13,4(,R15)         RESTORE CALLER'S R13 
         LH    R9,RETCODE          SAVE RETURN-CODE 
         LA    R0,STGAREAL         LOAD DYNAMIC STG-LGTH 
         FREEMAIN RU,LV=(0),A=(11) FREE DYNAMIC-STG 
         LR    R15,R9              OVERRIDE 'FREEMAIN' R15 
GOBACK   EQU   * 
         RETURN (14,12),RC=(15)    RESTORE REGISTERS AND RETURN 
         LTORG ,                   LITERAL-ORG 
STGDSECT DSECT                     DYNAMIC-STG DSECT (R11) 
STGAREA  EQU   *                   BEGIN DYNAMIC-STG 
DWORD    DS    D                   ALIGNED DBLWORD-WORKAREA 
RETCODE  DS    H                   RETURN-CODE ALIGNED-HWORD (R15) 
REGSAVEA DS    XL72                18-WORD REGISTER-SAVEAREA 
STGAREAL EQU   *-STGAREA           DYNAMIC-STG TOTAL-LGTH 
         END   ,                       PUNCH ' SETCODE AC(1) '
TOKCREAT   CSECT
TOKCREAT   AMODE 31
TOKCREAT   RMODE 24
           BAKR  R14,R0
           LR    15
           USING TOKCREAT,R12
           LOAD   EP=IEANTDL 
           ST     R0,IEANTDL 
           LOAD   EP=IEANTCR 
           ST     R0,IEANTCR 
           OPEN   TOKIN
GETTOKEN   GET    TOKIN
           LR     R5,R1
           CLI    0(R5),C'*' 
           BE     GETTOKEN   
           MVC    NAME,0(R5) 
           MVC    TOKEN,19(R5)
           MVC    WTONAME,NAME
           MVC    WTOTOKEN,TOKEN
           MODESET KEY=ZERO,MODE=SUP
           L      R15,IEANTDL
           CALL   (15),(LEVEL,NAME,RETCODE)
           L      R3,RETCODE 
           C      R3,=F'04'  
           BNH    CREATE
           L      R8,RETCODE 
           LR     R9,R15
           ABEND  1
CREATE     DS     0H
           L      R15,IEANTCR
           CALL   (15),(LEVEL,NAME,TOKEN,PERSOPT,RETCODE)
           MODESET KEY=NZERO,MODE=PROB
           CLC    RETCODE,=F'0'
           BNE    ABEND2
           LA     R1,WTOA
           SVC    35         
           B      GETTOKEN   
ABEND2     DS     0H
           L      R8,RETCODE 
           LR     R9,R15
           ABEND  2
EXIT       DS     0H
           CLOSE  (TOKIN)
           DELETE EP=IEANTCR
           DELETE EP=IEANDTL
           SR     R15,R15
           PR               
           EJECT
           YREGS ,
           EJECT
           IEANTASM
           LTORG
IEANTDL    DS     F
IEANTCR    DS     F
LEVEL      DC     A(IEANT_SYSTEM_LEVEL)
NAME       DS     CL16
TOKEN      DS     CL16
PERSOPT    DC     A(IEANT_PERSIST)
RETCODE    DS     F
           ORG,          
           DS     0F         
WTOA       DC     AL2(WTOAE-WTOA),AL2(0)
WTOMSGDC     C'TOKEN CREATION:  '
WTONAME    DS     CL16
           DC     C'VALUE: ' 
WTOTOKEN   DS     CL16
WTOAE      EQU    *
           DS     0F         
TOKIN      DCB    DSORG=PS,RECFM=FB,LRECL=80,
              X
                  MACRF=GL,DDNAME=TOKIN,
                  X
                  EODAD=EXIT 
           END    ,         TITLE 'NAME/TOKEN EXAMPLE PROGRAM'
NTIDSAMP CSECT
NTIDSAMP AMODE 31
NTIDSAMP RMODE ANY
         BAKR  R14,0                   SAVE CALLING PROGRAM'S
*                                      REGISTERS AND RETURN LOCATION
         LR    R12,R15                 ESTABLISH BASE REG
         USING NTIDSAMP,R12
***********************************************************************
*  INITIALIZE THE NAME AND TOKEN FIELDS                               *
***********************************************************************
         MVC   NAME,=CL16'NTIDSAMP NAME   ' INITIALIZE NAME FIELD
         MVC   TOKEN,NAME              FOR EXAMPLE, MAKE TOKEN THE
*                                      SAME AS THE NAME
***********************************************************************
*  TASK LEVEL CREATE EXAMPLE                                          *
***********************************************************************
         CALL  IEANTCR,(LEVEL,NAME,TOKEN,PERSOPT,RETCODE)
***********************************************************************
         CLC   RETCODE,=F'0'           IS RETURN CODE 0?
         BNE   ABEND                   NO, GO ABEND
         EJECT
***********************************************************************
*  TASK LEVEL RETRIEVE EXAMPLE                                        *
***********************************************************************
         CALL  IEANTRT,(LEVEL,NAME,TOKEN,RETCODE)
***********************************************************************
         CLC   RETCODE,=F'0'           IS RETURN CODE 0?
         BNE   ABEND                   NO, GO ABEND
         EJECT
***********************************************************************
*  TASK LEVEL DELETE EXAMPLE                                          *
***********************************************************************
         CALL  IEANTDL,(LEVEL,NAME,RETCODE)
***********************************************************************
         CLC   RETCODE,=F'0'           IS RETURN CODE 0?
         BNE   ABEND                   NO, GO ABEND
         EJECT
         SLR   R15,R15                 SET RETURN CODE OF ZERO
EXIT     PR                            RETURN TO CALLER
         EJECT
ABEND    ABEND X'BAD'                  ABEND IF NONZERO RETURN CODE
         EJECT
***********************************************************************
* NAME/TOKEN VARIABLE DECLARES
***********************************************************************
         IEANTASM
         EJECT
***********************************************************************
* Constants and data areas                                            *
***********************************************************************
LEVEL    DC    A(IEANT_TASK_LEVEL)     Task level
NAME     DS    CL16                    Name for name/token pair
TOKEN    DS    XL16                    Token for name/token pair
PERSOPT  DC    A(IEANT_NOPERSIST)      Persist option
RETCODE  DS    F                       Return code
***********************************************************************
*  EQUATES
***********************************************************************
R1       EQU   1
R12      EQU   12
R13      EQU   13
R14      EQU   14
R15      EQU   15
         END   NTIDSAMPTOKGET      CSECT
TOKGET      AMODE  31
TOKGET      RMODE  24
            BAKR   R14,R0   
            LR     R12,R15  
            USINGTOKGET,R12
            LOAD   EP=IEANTRT
            ST     R0,IEANTRT
            OPEN   TOKIN
GETTOKEN    GET    TOKIN
            LR     R5,R1
            MVC    NAME,0(R5)
            L      R15,IEANTRT
            CALL   (15),(LEVEL,NAME,TOKEN,PERSOPT,RETCODE)
            MVC    WTONAME,NAME
            MVC    WTOTOKEN,TOKEN
            LA     R1,WTOA  
            SVC    35       
            B      GETTOKEN 
EXIT        DS     0H
            CLOSE  TOKIN
            DELETE EP=IEANTRT
            PR             
            EJECT
            YREGS
            EJECT
            IEANTASM
            LTORG
IEANTRT     DS     F
LEVEL       DC     A(IEANT_SYSTEM_LEVEL)  
NAME        DS     CL16
TOKEN       DS     CL16
PERSOPT     DC     A(IEANT_PERSIST)
RETCODE     DS     F
WTOA        DC     AL2(WTOE-WTOA),AL2(0)  
            DC     C'TOKEN NAME: '
WTONAME     DC     CL16' '  
            DC     C'  '    
            DC     C'TOKEN VALUE: '
WTOTOKEN    DC     CL16' '  
WTOE        EQU    *
TOKIN       DCB    DSORG=PS,RECFM=FB,LRECL=80,DDNAME=TOKIN,EODAD=EXIT, XXXX 
                   MACRF=GL 
            END    ,*=====================================           
* Main Program   
* You can use an RSECT instead of a CSECT, which 
* tells the assembler that this is a re-entrant 
* module. The assembler will check for some 
*(but not all) re-entrancy errors. Using the RENT 
* assembler option does the same thing.
*notes:C:\MyDoc\Host\asm_TST1RENT_notes.txt
*=====================================           
TST1RENT  AMODE 31                                   
TST1RENT  RMODE ANY                                  
TST1RENT  RSECT                                      
* --- Save Callers Environment ---------------   
         BAKR  R14,0                             
* --- Setup Program Addressability -----------   
         LR    R12,R15                           
         USING TST1,R12                          
* --- Get and Address Workarea ---------------   
         USING WORK,R13                          
         LHI   R2,@WORKL                         
         STORAGE OBTAIN,LENGTH=(R2),LOC=BELOW    
         LR    R13,R1             R13 -> Workarea
* --- Write Message to Console  --------------   
         LA    R2,#MSG                           
*        WTO   TEXT=(R2)                         
         MVC   WWTO(@WTOL),#WTO   Move WTO model 
         XR    R0,R0                             
         WTO   TEXT=(R2),MF=(E,WWTO)   (note 3)  
* --- Example of an OPEN and CLOSE Macro  ----   
         MVC   WDCB(@MODELL),#DCB Move model over
*                                 (note 6)       
         LA    R3,WDCB                                 
         OPEN  ((3),INPUT),MF=(E,WOPEN)  Open DD1      
         CLOSE ((3)),MF=(E,WCLOSE) Close DD1           
* --- Add one to original value in block  ---- (note 5)
         LA    R5,WWORD                                
         L     R1,0(R5)           R1 = value           
ADDVAL   DS    0H                                      
         LA    R2,1(R1)           R2 = value+1         
         L     R1,0(R5)           R1 = value           
         CS    R1,R2,0(R5)        Insert value+1       
         BC    2,ADDVAL           (unless it changed)  
* --- Free Working Storage and Return --------         
         LA    R2,@WORKL                               
         STORAGE RELEASE,ADDR=(R13),LENGTH=(R2)        
         PR                       Return               
*=====================================                 
* Constants                                            
*=====================================                 
* --- Message Constants ----------------------         
#MSG     DC    AL2(L'#MSGTXT) (note 4)                 
#MSGTXT  DC    C'PGM 1 MESSAGE.'                       
#WTO     WTO   TEXT=,MF=L         List form of WTO     
@WTOL    EQU   *-#WTO             Length model area    
* --- I/O Macro Model Area --------------------    
#DCB     DCB   DDNAME=DD1,DSORG=PS,MACRF=GM        
#OPEN    OPEN  (,INPUT),MF=L                       
#CLOSE   CLOSE (),MF=L                             
@MODELL  EQU   *-#DCB             Length model area
         LTORG                                     
*=====================================             
* Map Working storage                              
*=====================================             
WORK     DSECT                                     
SAVE1    DS    18F                Savearea         
WWORD    DS    F                  Word             
WWTO     WTO   TEXT=,MF=L         List form        
WDCB     DCB   DDNAME=DD1,DSORG=PS,MACRF=GM        
WOPEN    OPEN  (,INPUT),MF=L                       
WCLOSE   CLOSE (),MF=L                             
@WORKL   EQU   *-SAVE1            Length           
         YREGS ,                                   
         ENDC:\MyDoc\Host\asm_TST1RENT_notes.txt

Notes:

    I've used an RSECT instead of a CSECT, which tells the assembler that this is a re-entrant module. The assembler will check for some (but not all) re-entrancy errors. Using the RENT assembler option does the same thing.
    The STORAGE macro doesn’t have a List and Execute form - it is re-entrant in itself. How do we know this? Because there's no separate List and Execute form (check it out for yourself in the z/OS Assembler Services Reference manual). In our program, we get storage below the 24 bit line, as our storage includes a DCB.
    I use the List and Execute form of the WTO macro, simply because it has them.
    The #MSG label is a constant, so it can be left in the program code. However if it was a variable (ie. updated by the program in any way), it would have to be moved into the WORK DSECT.
    This program shows how to use the Compare and Swap instruction to serialise access to a control block. The address of a field is passed to the program by the caller. Our program increments this value like this:
        It gets the original value from the control block, and puts it into R1.
        It increments this value and puts it in R2.
        It gets the original value from the control block again, and puts it in R1.
        In one instruction (Compare and Swap), it inserts R2 into the control block if the original value hasn’t changed. Otherwise it puts the changed original value into R1, and sets the condition code to branch.
    Some older z/OS macros include constants in their List form. In my example program, DCB, OPEN and CLOSE fall into this category.

    Using the List form of these macros in my WORK DSECT loses these constants. I've worked around this by defining a model area in the program for these macros, and copied this over an equivalent area in my storage. This is a very standard way of dealing with this problem.

    Let's look at my WOPEN label. If you look at the macro expansion (from the assembler output), you would see something like:

      WOPEN OPEN 0,MF=L
      +WOPEN DC 0F'0'
      + DC AL1(128)
      + DC AL3(0)
      + DC A(0)

    You can see z/OS defining the byte constant ‘128.’ However this doesn’t work with my storage – I reset it to zeroes at the beginning. So I define a second OPEN macro in my constants area (#OPEN - with the ‘128’ constant). I then copy this over the WOPEN in my storage so I have that constant.

    So the big question is “How do you know if you need to do this?” The only way is to look at the assembler expansion of the List form of the macro. If you see a constant, then you'll need a macro model.


#####

This is identical to ASMINF except for the CELQPRLG and CELQEPLG macros (and the 64 bit load of the parameter address). These macros do exactly the same job as EDCXPRLG and EDCXEPLG - and their parameters are the same. They are documented in the IBM z/OS Language Environment Programming Guide for 64-bit Addressing Mode manual.

ASMINF64 CELQPRLG PARMWRDS=1,BASEREG=R10,EXPORT=YES  
         LG    R9,0(R1)                R9 -> Input area
(same code as for ASMINF)
..........
* ----------------------------------------------------
* Zero Return Code and Exit                 
* ----------------------------------------------------
EXIT0    DS    0H                              
         XR    R3,R3                   Zero Return Code
EXIT     DS    0H                                    
         CELQEPLG                      Return to caller

#####

Consider that a program changes AMODE from AMODE 31 to AMODE 64 and while in AMODE 64, issues the TIMEUSED macro. When it changes to AMODE 64, it issues the following:

SAM64
SYSSTATE AMODE64=YES

The TIMEUSED macro generates different code, depending on the AMODE of the caller. During the assembly of TIMEUSED, the TIMEUSED macro service checks the setting of the global indicator. Because the global indicator indicates that the caller is in AMODE 64, TIMEUSED generates code that is appropriate for callers in AMODE 64.
When the program changes back to AMODE 31, it issues the following:

SAM31
SYSSTATE AMODE64=NO



#####

 The following example creates a 3-megabyte memory object with a 2-megabyte guard area. The guard area is at the high end of the memory object:

IARV64 REQUEST=GETSTOR,                                  +
        SEGMENTS=NUM_SEG,                                +
        USERTKN=USER_TOKEN,                              +
        GUARDSIZE=GUARDPAGES,                            +
        GUARDLOC=HIGH,                                   +
        ORIGIN=VIRT64_ADDR

The following example increases the size of the guard area by the specified amount.

IARV64 REQUEST=CHANGEGUARD,                              +
        CONVERT=FROMGUARD,                               +
        MEMOBJSTART=VIRT64_ADDR,                         +
        CONVERTSIZE=SEGMENT_SIZE                         

Of course, there are many great new features of DB2 V8. Here are a few:

DPSIs, which can help to relieve the administration problems typically encountered with today's NPIs.

Long names, so tables and columns and other objects can have longer, more realistic names so DB2 can better support databases moved from other environments.

2M SQL statements, by changing the size of the largest SQL statement from 32,765 bytes to 2,097,152 bytes, V8 makes it possible to write much more complex -- and therefore much more useful -- DB2 SQL statements.

Online schema evolution, so more types of database changes can be made more easily.

More robust SQL, recursive SQL, multi-row FETCH and INSERT, dynamic scrollable cursors, etc.

I have a select query that returns 1000 rows and I want to display the rows from 200 to 500. Could you please let me how to code after the where clause? I know how to get the first 100 rows using -- FETCH FIRST 100 rows only clause.
This question posed on 01 November 2004


 If you are using DB2 V7 or higher, consider using scrollable cursors. With scrollable cursors, you can move directly to the rows you want without having to FETCH every other row returned by the cursor.

To use scrollable cursors you must use declared temporary tables, another new feature of DB2 Version 7. (Unless you are using DB2 V8 where dynamic scrollable cursors are available.) DB2 uses a declared temporary table to hold and maintain the data returned by a scrollable cursor. Scrollable cursors allow developers to move through the results of a query in multiple ways. The following key words are supported when fetching data from a scrollable cursor:

NEXT - will FETCH the next row, the same way that the pre-V7
FETCH statement functioned
PRIOR - will FETCH the previous row
FIRST - will FETCH the first row in the results set
LAST - will FETCH the last row in the results set
CURRENT - will re-FETCH the current row from the result set
BEFORE - positions the cursor before the first row of the results set
AFTER - positions the cursor after the last row of the results set
ABSOLUTE n - will FETCH the row that is n rows away from the first row in the results set
RELATIVE n - will FETCH the row that is n rows away from the last row fetched

For both ABSOLUTE and RELATIVE, the number n must be an integer. It can be either a positive or a negative number and it can be represented as a numeric constant or as a host variable. All of the FETCH options for scrollable cursors also reposition the cursor before fetching the data. For example, let's consider your problem of a cursor that returns 1000 rows, but you only want rows 200 through 500. Consider the following cursor logic:
DECLARE csr1 SENSITIVE STATIC SCROLL CURSOR
FOR SELECT FIRSTNAME, LASTNME
FROM DSN8710.EMP
ORDER BY LASTNME
FETCH FIRST 1000 ROWS ONLY;

OPEN csr1;

FETCH ABSOLUTE 200 csr1 INTO :FN, :LN;

I used the FETCH FIRST 1000 ROWS ONLY clause to ensure that no more than 1,000 rows were returned. This clause is, of course, optional. Then I open the cursor and FETCH row 200. This positions the cursor just after the 200 result row that was just fetched. After that, all you would need would be to create a loop that just issues FETCH NEXT 300 times and that would retrieve only rows 200 through 500.

Basically, scrollable cursors reduce the amount of time and effort required to move backward and forward through the results of SQL queries. But as helpful as scrollable cursors are, do not make every cursor a scrollable cursor. Scrollable cursors require substantially more overhead than a traditional, non-scrollable cursor. Analyze the requirements of your applications and deploy scrollable cursors only where it makes sense to do so. Also, be sure to discuss this with your DBAs before implementing as there will probably be some setup work required of the DBA group to facilitate this


The best approach to do this appropriately is to use scrollable cursors. You will need to be running at least DB2 V7 in order to accomplish this. A scrollable cursor provides the ability to scroll forward and backward through the data once the cursor is open. This can be achieved using nothing but SQL -- no host language code (e.g., COBOL, C) is required to facilitate a scrollable cursor in DB2 V7. A scrollable cursor makes navigating through SQL result sets much easier. There are two types of DB2 scrollable cursors:

SENSITIVE -- updateable; can access data changed by the user or other users

INSENSITIVE -- not updateable; will not show changes made

To use scrollable cursors you must use declared temporary tables, another new feature of DB2 Version 7. Declared temporary tables are discussed later in the section on data management. DB2 uses a declared temporary table to hold and maintain the data returned by a scrollable cursor.

Scrollable cursors allow developers to move through the results of a query in multiple ways. The following key words are supported when fetching data from a scrollable cursor:

NEXT -- will FETCH the next row, the same way that the pre-V7 FETCH statement functioned

PRIOR -- will FETCH the previous row

FIRST -- will FETCH the first row in the results set

LAST -- will FETCH the last row in the results set

CURRENT -- will re-FETCH the current row from the result set

BEFORE -- positions the cursor before the first row of the results set

AFTER -- positions the cursor after the last row of the results set

ABSOLUTE n -- will FETCH the row that is n rows away from the first row in the results set

RELATIVE n -- will FETCH the row that is n rows away from the last row fetched

For both ABSOLUTE and RELATIVE, the number n must be an integer. It can be either a positive or a negative number and it can be represented as a numeric constant or as a host variable.

All of the FETCH options for scrollable cursors also reposition the cursor before fetching the data. For example, consider the following cursor logic:

DECLARE csr1 SENSITIVE STATIC SCROLL CURSOR
FOR SELECT FIRSTNAME, LASTNME
FROM DSN8710.EMP
ORDER BY LASTNME;

OPEN csr1;

FETCH LAST csr1 INTO :FN, :LN;

Issuing this SQL will declare a scrollable cursor named csr1. Open that cursor and then FETCH the last row from the cursor's results set. The FETCH LAST statement will reposition the cursor to the last row of the results set and then FETCH the results into the host variables as specified. Scrollable cursors reduce the amount of time and effort required to move backward and forward through the results of SQL queries.

But as helpful as scrollable cursors are, do not make every cursor a scrollable cursor. Scrollable cursors require substantially more overhead than a traditional, non-scrollable cursor. Analyze the requirements of your applications and deploy scrollable cursors only where it makes sense to do so.

Be sure to talk to your DBAs before attempting to use scrollable cursors.

We are using DB2 V7 on OS/390 and trying scrollable cursors in a stored procedure. When we try to use the FETCH statement like:
    FETCH ABSOLUTE  FROM  INTO ;
it's throwing for the host variable and saying "variable should be zero scale." I had declared the variable as an INTEGER, and I even tried it with DECIMAL(n,0), but I get the same error.
This question posed on 28 October 2002


 Well, it sounds like your query should work. When a host variable is used with the ABSOLUTE form of the FETCH with scrollable cursors, the host variable must be an exact numeric type with zero scale and must not include an indicator variable. Did you include an indicator variable? (Probably not, but I had to ask.)

The possible data types for the host variable are DECIMAL(n,0) or INTEGER. The DECIMAL data type is limited to DECIMAL(18,0). Try substituting an integer constant in the stored procedure just to see if that works. If it does, try the integer variable again. If you continue to get the same problem I suggest that you post this problem with IBM technical support - it could be a bug.



#####

L     13,16              CVT
   L     13,0(,13)          TCB
   L     13,4(,13)          CURRENT TCB
   L     13,X'D0'(,13)      TCB EXTENTION
   L     13,X'14'(,13)      AFCS
   L     13,8(,13)          COMMON SYSTEMS AREA
   L     12,CSACDTA         X'4C'(13) IS THE TCA

The current program PPT entry (prior to CICS 4.1.0, it was easily obtained from TCAPCTA): 
   L     Rn,TCALCDSA        X'10'(12) from TCA
   L     Rn,X'50'(,Rn)      TASENTRY from KERNTASN
   L     Rn,X'A0'(,Rn)      XMT from TAS_XM_TRANSACTION_TOKEN
   L     Rn,X'9C'(,Rn)      PTA (CICS/TS 1.3 offset is X'AC')
   L     Rn,X'18'(,Rn)      PLCB from PTA_PLCB_HEAD
   L     Rn,X'1C'(,Rn)      PPT from PLCB_PROG_PPTE


      L    R5,16          CVT ADDRESS
      L    R5,0(,R5)      NEXT TCB
      L    R5,4(,R5)      OLD TCB
      L    R5,180(,R5)    JSCB
      L    R5,260(,R5)    JCT
      LA   R5,24(,R5)     POINT TO THE JOBNAME 

Ensuring that a dataset is not in use before backing it up



     PARMDATA DSECT         Input parameters
     ACTIONIN DS    C       I<== N=none, W=WTO, R=Resolve
     DSNAME   DS    CL44    I<== Dataset to verify usage for
     #JOBNAME DS    CL2     I<== Number of jobs to report on
     NUMENQ   DS    CL2     O==> Number of JOBS enqueued
     EXCLENQ  DS    C       O==> Y/N for current exclusive ENQ
     EXCLJNAM DS    CL8     O==> Name of job EXCL ENQ'ed
     JOBNAME  DS    CL8     O==> Name of Job ENQ'ed
     ENQTYPE  DS    C       O==> Type of ENQ


     //STEP2    EXEC  PGM=INUSECHK,PARM='N,USER.LOADLIB' 


     //STEP3    EXEC  PGM=INUSECHK,PARM='W,USER.LOADLIB' 


     //STEP4    EXEC  PGM=INUSECHK,PARM='R,USER.LOADLIB' 


GRSQUERY CSECT
GRSQUERY AMODE 31
GRSQUERY RMODE ANY
         BAKR  R14,0                Save Caller's Status
         BALR  R12,0
         USING *,12
*********************************************************************
*        Main driver routine
*********************************************************************
LOAD     LR    R4,R1                Pointer to parameters
         USING PARMDATA,R4          Addressability to parm area
         LA    R3,GETMSIZE          Our requirement
         A     R3,=F'30000'         Required for GQSCAN
         GETMAIN R,LV=(3)           Getmain our workarea
         USING GETMAREA,R1
         ST    R13,SAVEAREA+4       Backchain
         DROP  R1
         LR    R13,R1
         USING GETMAREA,R13         Addressability to getmained area
         ST    R4,PARMSTRT          Preserve start of passed parms
         BAS   R14,SCANPARM         Go scan input parameters
         BAS   R14,GETJNAME         Go find our own jobname
CALLGRS  BAS   R14,DOGQSCAN         Set up and do GQSCAN
         LTR   R15,R15              Do we have any info to process?
         BNZ   RETURN               No
GODOANAL BAS   R14,ANALSCAN         Analyse output from GQSCAN
         TM    ONLYUSFL,YES         Are we the only user of the ds?
         BO    RETURN               Yes, get out
         BAS   R14,RESOLVE          Take action depending on WTO ind
         CLI   ACTIONIN,C'R'        Must it be resolved before return?
         BNE   RETURN               Yes
         L     R1,RETCODE           Pick up return code
         CH    R1,=H'12'            Abort?
         BNE   CALLGRS              No, retry
RETURN   L     R4,RETCODE           Pick up return code
         LA    R3,GETMSIZE
         A     R3,=F'30000'
         FREEMAIN R,LV=(3),A=(13)
         LR    R15,R4               Copy return code
         PR                         To caller
*********************************************************************
*        This routine scans the input parms for validity
*********************************************************************
SCANPARM EQU   *
         BAKR  R14,R0               Preserve our return address
* Put input parm scanning/ verification in here if required
SCANPARX PR                         Back to our caller
*********************************************************************
*        This routine gets our own jobname
*********************************************************************
GETJNAME BAKR  R14,R0               Preserve our return address
         XR    R5,R5                PSA starts at zero
         USING PSA,R5
         L     R6,PSATOLD           Pointer to current TCB
         USING TCB,R6               Addressability to TCB
         L     R7,TCBTIO            Pointer to TIOT
         USING TIOT1,R7             Addressability to TIOT
         MVC   EXTRAREA(EXTRLENG),EXTrMac
         LA    R2,ADDRSPC
         LA    R1,EXTRAREA          Point to extract macro
         EXTRACT ((2)),MF=(E,(1))
         L     R2,ADDRSPC
         LTR   R2,R2                In use?
         BNZ   BATCH
         L     R5,PSAANEW           Pointer to ASCB
         DROP  R5
         USING ASCB,R5
         L     R5,ASCBJBNS          Pointer to JOBNAME
         MVC   OURJNAM,0(R5)        Move jobname in
         B     GETJNAMX             Get out
BATCH    MVC   OURJNAM,TIOCNJOB     Pick up our jobname
GETJNAMX PR                         Back to our caller
*******************************************************************
*        This routine sets up and does the GQSCAN
*********************************************************************
DOGQSCAN EQU   *
         BAKR  R14,R0               Preserve our return address
         XC    NUMENQ,NUMENQ        Set #RIB to zero
         XC    RETCODE,RETCODE      Reset program's return code
         LA    R2,WORKAREA          GQSCAN output area
         LA    R5,SYSDSN            Point to Qname
         LA    R6,DSNAME            Point to Rname
         OC    DSNAME(44),=44X'40'  Make sure name has spaces at back
         XR    R7,R7                Length of Rname
         LA    R1,DSNAME            Point to start of dataset name
         LA    R10,44               Maximum dsname length
BLANKSRC EQU   *                    Look for first blank in dsname
         CLI   0(R1),C' '           Is is a blank?
         BE    BLANKFND             Yes
         LA    R7,1(R7)             Bump up counter
         LA    R1,1(R1)             Bump up pointer
         BCT   R10,BLANKSRC         Keep on searching
BLANKFND LA    R1,GQMACRO1          List form of macro
         GQSCAN AREA=((2),30000),SCOPE=ALL,RESNAME=((5),(6),(7)),      X
               REQLIM=MAX,MF=(E,(1))
CHECK0   LTR   R15,R15              Successful & dataset in use?
         BZ    DOGQSCAX             Yes
CHECK4   CH    R15,=H'4'            Succesful & dataset not in use?
         BE    DOGQSCAX             Yes
CHECK8   CH    R15,=H'8'            Unsuccessful & area too small?
         BNE   GQERROR              No, must be other error
         LR    R2,R15               Preserve return code
         WTO   'GRSQUERY(E): -OUTPUT area too small',ROUTCDE=11
         LR    R15,R2               Reload return code
         ABEND 001,DUMP
GQERROR  LR    R2,R15               Preserve return code
         WTO  'GRSQUERY(E): -UNEXPECTed error during GQSCAN',ROUTCDE=11
         LR    R15,R2               Reload return code
         ABEND 002,DUMP
DOGQSCAX PR                         Back to our caller
*********************************************************************
*        This routine analyses GQSCAN output
*********************************************************************
ANALSCAN EQU   *
         BAKR  R14,R0               Preserve our return address
         ICM   R1,15,#JOBNAME       # of jobs we have space for
         LTR   R1,R1                Any space?
         BZ    ANALSCAX             No, get out
READRIB  LA    R2,WORKAREA          Point to GQSCAN output
         USING RIB,R2               Addressability to GRS RIB
         LH    R3,RIBVLEN           Length of variable ...
         L     R5,RIBNRIBE          Number of RIBEs returned
         LTR   R5,R5                Any?
         BNZ   STORNUM              Yes
         ABEND 0003,DUMP            Should never happen
STORNUM  STCM  R5,3,NUMENQ          Store into parameter list
         LA    R2,RIBEND-RIB(R2)    Point to end of RIB,
         AR    R2,R3                And add length of variable part
         DROP  R2
         USING RIBE,R2              Addressability to RIBE
         XR    R1,R1                Count number of RIBEs
* The user might ask for fewer jobs than there are actually enqueued 
* on the resource. Once we have supplied all the names the user has 
* given space for, we still have to keep on scanning all the RIBEs to 
* see if one of them has an exclusive ENQ, in use or pending.
         MVI   EXCLENQ,C'N'         Default no exclusive ENQ
         MVC   EXCLJNAM,=CL8'NONE'  No jobname exclusive by default
RIBELOOP EQU   *
         CLC   OURJNAM,RIBEJBNM     Is this us?
         BNE   CHKEXCL              No
         CLC   NUMENQ,=H'1'         Are we the only one?
         BNE   REDUCNUM             No, there are other jobs as well
ONLYUS   OI    ONLYUSFL,YES         Set the flag on
         B     ANALSCAX             Yes, we are the only entry
REDUCNUM LR    R1,R4                Preserve the value of R4
         L     R4,PARMSTRT          Reload to start of parms
         ICM   R3,3,NUMENQ          Number of jobs ENQ'ed
         BCTR  R3,0                 Reduce by 1
         STCM  R3,3,NUMENQ          Store it back
         LR    R4,R1                Restore pointer into parm fields
CHKEXCL  TM    RIBETYPE,X'00'       Exclusive ENQ?
         BNO   SETSHARE             No, must be shared ENQ
SETEXCL  MVI   EXCLENQ,C'Y'         Yes, there is an exclusive ENQ
         MVC   EXCLJNAM,RIBEJBNM    Remember name of exclusive ENQer
         CLM   R1,3,#JOBNAME        As many as caller allows us?
         BH    BUMPUP               Yes, don't move more
         MVI   ENQTYPE,C'E'
         B     MOVEJNAM             Also move jobname in
SETSHARE CLM   R1,3,#JOBNAME        As many as caller allows us?
         BH    BUMPUP               Yes, don't move more
         MVI   ENQTYPE,C'S'
MOVEJNAM MVC   JOBNAME,RIBEJBNM     Move Jobname into passed area
         LA    R4,ENTSIZE(R4)       Bump up pointer into parm area
         LA    R1,1(R1)             Bump up counter
BUMPUP   LA    R2,RIBEEND-RIBE(R2)  Bump up pointer into RIBE
         BCT   R5,RIBELOOP          Do for each entry
ANALSCAX PR                         Back to our caller
*********************************************************************
*        This routine decides what to do with the GRS result
*********************************************************************
RESOLVE  BAKR  R14,R0
         L     R4,PARMSTRT          Reload pointer to passed parms
         LA    R15,8                "Dataset-is-in-use" return code
         ST    R15,RETCODE          Plug into program's return code
RSLTIGN  CLI   ACTIONIN,C'N'        Must we do nothing?
         BE    RESOLVEX             Yes
RSLTWTO  CLI   ACTIONIN,C'W'        Must we WTO only?
         BNE   RSLTWTOR             No, we must do a WTOR
         XR    R1,R1
         ICM   R1,3,NUMENQ          Total # of jobs enqueued
         BCTR  R1,0                 Subtract 1
         CVD   R1,DOUBLE            Convert and...
         UNPK  DOUBLE(8),DOUBLE+5(3)
         OI    DOUBLE+7,X'F0'           make printable
         MVC   WTOAREA(WTOLENG),GENWTO
         MVC   WTOAREA+26(44),DSNAME
         MVC   WTOAREA+81(8),JOBNAME
         MVC   WTOAREA+94(3),DOUBLE+5
         LA    R1,WTOAREA+4         Start of message text in WTO
         LA    R2,104               Length of the text
         NI    BLANKFLG,X'00'       Turn the found-blank flag off
         MVC   NEWMSG,=130C' '      Clear the message area
         LA    R3,NEWMSG            Point to start of new message
DEBLANK1 CLC   0(3,R1),=C'000'      "000 other jobs" text?
         BNE   CKBLANK1             No
         LA    R1,14(R1)            Skip the next 13 characters
         SH    R3,=H'5'             Move the "to" pointer 4 bytes back
         MVC   0(5,R3),=C'     '    Replace "and" with blanks
         B     MOVEBACK             Get out of the loop
         SH    R2,=H'14'            Reduce loop counter by length of it
         B     DEBLANK1             Go to top of loop
CKBLANK1 CLI   0(R1),C' '           Is it a blank?
         BE    BLANK1               Yes
         NI    BLANKFLG,X'00'       Turn the found-blank flag off
         B     MOVECHR1             Go move the character
BLANK1   TM    BLANKFLG,X'01'       Flag already on?
         BO    BUMPSRC1             Yes, don't move the character
         OI    BLANKFLG,X'01'       Turn the flag on
MOVECHR1 MVC   0(1,R3),0(R1)        Move the 1 character
         LA    R3,1(R3)             Bump up the "to" pointer
BUMPSRC1 LA    R1,1(R1)             Bump up the "from" pointer
         BCT   R2,DEBLANK1
MOVEBACK MVC   WTOAREA+4(104),NEWMSG
         LA    R1,WTOAREA
         WTO   MF=(E,(1))
         B     RESOLVEX
RSLTWTOR MVC   WTORAREA(WTORLENG),GENWTOR
         XR    R1,R1
         ICM   R1,3,NUMENQ          Total # of jobs enqueued
         BCTR  R1,0                 Subtract 1
         CVD   R1,DOUBLE            Convert and...
         UNPK  DOUBLE(8),DOUBLE+5(3)
         OI    DOUBLE+7,X'F0'           make printable
         MVC   WTORAREA(WTORLENG),GENWTOR
         MVC   WTORAREA+34(44),DSNAME
         MVC   WTORAREA+89(8),JOBNAME
         MVC   WTORAREA+102(3),DOUBLE+5
         LA    R1,WTORAREA+12       Start of message text in WTOR
         LA    R2,122               Length of the text
         NI    BLANKFLG,X'00'       Turn the found-blank flag off
         MVC   NEWMSG,=130C' '      Clear the message area
         LA    R3,NEWMSG            Point to start of new message
DEBLANK2 CLC   0(3,R1),=C'000'      "000 other jobs" text?
         BNE   CKBLANK2             No
         LA    R1,14(R1)            Skip the next 13 characters
         SH    R3,=H'5'             Move the "to" pointer 4 bytes back
         SH    R2,=H'14'            Reduce loop counter by length of it
         B     DEBLANK2             Go to top of loop
CKBLANK2 CLI   0(R1),C' '           Is it a blank?
         BE    BLANK2               Yes
         NI    BLANKFLG,X'00'       Turn the found-blank flag off
         B     MOVECHR2             Go move the character
BLANK2   TM    BLANKFLG,X'01'       Flag already on?
         BO    BUMPSRC2             Yes, don't move the character
         OI    BLANKFLG,X'01'       Turn the flag on
MOVECHR2 MVC   0(1,R3),0(R1)        Move the 1 character
         LA    R3,1(R3)             Bump up the "to" pointer
BUMPSRC2 LA    R1,1(R1)             Bump up the "from" pointer
         BCT   R2,DEBLANK2
         MVC   WTORAREA+12(122),NEWMSg
         LR    R0,R0                Clear console id
         XC    ECBAD,ECBAD          Clear ECB
         LA    R2,REPLY             Operator reply area
         LA    R3,ECBAD             ECB address
         LA    R1,WTORAREA
         WTOR  ,(2),15,(3),MF=(E,(1))
         WAIT  ECB=(3)              Wait for operator's reply
         OI    REPLY,X'40'          Make uppercase
         CLI   REPLY,C'A'           Abort?
         BNE   RESOLVEX             NO
         LA    R15,12               Set return code to 12
         ST    R15,RETCODE          Store
RESOLVEX PR                         Back to our caller
*********************************************************************
*        Constants follow
*********************************************************************
SYSDSN   DC    CL8'SYSDSN  '
GENWTO   WTO  'GRSQUERY(I): -Dataset xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX
               xxxxxxxxxx in use by yyyyyyyy and xxx other jobs',      x
               ROUTCDE=11,MF=L
WTOLENG  EQU   *-GENWTO
GENWTOR  WTOR 'GRSQUERY(I): -Dataset xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxX
               xxxxxxxxxx in use by yyyyyyyy and xxx other jobs, R(etryx
               ) /A(bort)',,,ROUTCDE=13,MF=L
WTORLENG EQU   *-GENWTOR
EXTRMAC  EXTRACT ,'S',FIELDS=(TSO),MF=L
EXTRLENG EQU   *-EXTRMAC
         LTORG
*********************************************************************
*        DSECTs follow
*********************************************************************
GETMAREA DSECT
SAVEAREA DS    18F                  General savearea
EXTRAREA DS    CL(EXTRLENG)         Area to contain EXTRACT macro
PARMSTRT DS    F                    Start address of passed parms
DOUBLE   DS    D                    General work double word
RETCODE  DS    F
REPLY    DS    CL15                 Operator reply area
ADDRSPC  DS    F                    Full word to store ASCB
ECBAD    DS    F                    WTOR ECB
         DS    0F
WTOAREA  DS    CL(WTOLENG)          Workarea for WTO
         DS    0F
WTORAREA DS    CL(WTORLENG)         Workarea for WTOR
OURJNAM  DS    CL8                  Our own jobname
BLANKFLG DS    C                    Flag used to deblank messages
ONLYUSFL DS    C                    Flag used to show we're only user
NEWMSG   DS    CL130                Area used to build deblanked msg
GQMACRO1 GQSCAN ,MF=L
WORKAREA EQU   *                    GQSCAN workarea
GETMSIZE EQU   *-GETMAREA
         DS    0F
PARMDATA DSECT                      Input parameters
ACTIONIN DS    C                    I<== N=none, W=WTO, R=Resolve
DSNAME   DS    CL44                 I<== Dataset to scan for
#JOBNAME DS    CL2                  I<== Number of jobs to report on
NUMENQ   DS    CL2                  O==> Number of JOBS enqueued
EXCLENQ  DS    C                    O==> Y/N for current exclusive ENQ
EXCLJNAM DS    CL8                  O==> Name of job EXCL ENQ'ed
JOBNAME  DS    CL8                  O==> Name of Job ENQ'ed
ENQTYPE  DS    C                    O==> Type of ENQ
ENTSIZE  EQU   *-JOBNAME            Size of 1 entry
R0       EQU   0



R15      EQU   15
YES      EQU   X'80'
NO       EQU   X'00'
         ISGRIB                     DSECT for GRS request info block
         IHAPSA
         IKJTCB
         IEFTIOT1
         IHAASCB
         END


INUSECHK CSECT
INUSECHK AMODE 31
INUSECHK RMODE ANY
         BAKR  R14,0                Save Caller's Status
         BALR  R12,0
         USING *,12
*********************************************************************
*        Main driver routine
*********************************************************************
         L     R4,0(R1)             Parm pointer
STORAGE  LA    R3,GETMSIZE          Size of storage to get and clear
         STORAGE OBTAIN,LENGTH=(3),LOC=BELOW,SP=0
         LR    R2,R1                Point to getmained area
         LA    R3,GETMSIZE          Length of storage to clear
         XR    R9,R9                Fill with binary zeroes
         MVCL  R2,R8                Propagate binary zeroes
         USING GETMAREA,R1
         ST    R13,SAVEAREA+4       Backchain
         DROP  R1
         LR    R13,R1
         USING GETMAREA,R13         Addressability to getmained area
CHKPARM1 CLC   0(2,R4),=H'3'        Parms passed?
         BNL   CHKPARM2             Yes
         WTO   'INUSECHK(E): -ACTION option and dataset name required aX
               S INPUT PARAMETERS',ROUTCDE=11
         LA    R15,12
         ST    R15,RETCODE
         B     GETOUT               Get out
CHKPARM2 MVC   ACTIONIN,2(R4)       Action to perform on dataset-in-use
         CLC   2(2,R4),=C'N,'       "No action"?
         BE    GETDSNAM             Yes
CHKPARM3 CLC   2(2,R4),=C'W,'       "WTO action"?
         BE    GETDSNAM             Yes
CHKPARM4 CLC   2(2,R4),=C'R,'       "RESOLVE action"?
         BE    GETDSNAM             Yes
         WTO   'INUSECHK(E): -ACTION option must be "N(o)", "W(TO)" or X
               "R(ESOLVE)"',ROUTCDE=11
         LA    R15,12
         ST    R15,RETCODE
         B     GETOUT               Get out
GETDSNAM EQU   *
         LH    R1,0(R4)             Get the length of the input parm
         SH    R1,=H'3'             Correct the length
         EX    R1,MOVENAME          Move the dataset name from the parm
         B     CALLROUT             Go call the routine
MOVENAME MVC   DSNAME(0),4(R4)
CALLROUT LA    R1,PARMS
         MVC   #JOBNAME,=H'1'
         LINK  EP=GRSQUERY
         ST    R15,RETCODE
GETOUT   L     R4,RETCODE           Pick up retrun code
         LR    R2,R13               Pointer to storage area
         LA    R3,GETMSIZE          Size of storage to free
         STORAGE RELEASE,LENGTH=(3),ADDR=(2),SP=0
         LR    R15,R4               Reload return code
         PR                         Back to our caller
**********************************************************************
*        Constants follow
**********************************************************************
         LTORG
GETMAREA DSECT
SAVEAREA DS    18F
RETCODE  DS    F
PARMS    DS    0F
ACTIONIN DS    C                    <==Indicate if we want a WTO(R)
DSNAME   DS    CL44                 <==Dataset to scan for
#JOBNAME DS    CL2                  <==Number of jobs to report on
NUMENQ   DS    CL2                  ==>Number of JOBS enqueued
EXCLENQ  DS    C                    ==>Y/N for current exclusive ENQ
EXCLJNAM DS    CL8                  ==>Name of job EXCL ENQ'ed
JOBNAME  DS    CL8                  ==>Name of Job ENQ'ed
ENQTYPE  DS    C                    ==>Type of ENQ
ENTSIZE  EQU   *-JOBNAME            Size of 1 entry
GETMSIZE EQU   *-GETMAREA
R0       EQU   0



R15      EQU   15
         END
         
WAIT, POST and the EVENTS macro



*   SET UP IOB
         XC    ECB,ECB
         LA    R1,IOB
         EXCP  IOB
*   DO ANYTHING ELSE THAT IS NOT DEPENDENT ON THE I/O
         WAIT  ECB=ECB1
         CLI   ECB1,X'7F'      * I/O COMPLETION OK?
         BNE   BADIO           * NO --- ERROR DIAGNOSIS/RECOVERY
*   PROCESS SUCCESSFUL I/O COMPLETION
         . . .
         . . .

IOB      DC    F'0'                * AT LEAST 28 BYTES LONG
         DC    AL1(0),AL3(ECB1)    * LINK FROM EXCP->IOB->ECB
         DC    5F'0'               * BALANCE OF IOB - MUST BE
*                                  * INITIALIZED BY PROGRAM
ECB1     DC    F'0'    


         XC    WTORECB,WTORECB     * ENSURE WTOR ECB 'CLEAN' 
         WTOR  'ENTER ANY CHAR TO TERMINATE PROCESSING',ANS,1,WTORECB
*              SET UP READ PROCESS
         XC    READECB,READECB     * ENSURE READ ECB 'CLEAN'     
         EXCP  READIOB           
*              SET UP WRITE PROCESS 
         XC    WRITEECB,WRITEECB   * ENSURE WRITE ECB 'CLEAN' 
         EXCP  WRITEIOB
*        ANY OTHER CODE THAT CAN BE EXECUTED BEFORE COMPELLED TO WAIT
*
*
         WAIT  1,ECBLIST=WAITLIST
*
         TM    WRITEECB,X'40'      * DID WRITE COMPLETE?
         BO    PROCWRIT            * YES -- BRANCH
         TM    READECB,X'40'       * NO --- DID READ COMPLETE?
         BO    PROCREAD            * YES -- BRANCH
         B     PROCWTOR            * NO --- ASSUME WTOR POPPED

READIOB  DC    F'0'                * AT LEAST 28 BYTES LONG
         DC    AL1(0),AL3(READECB) * LINK FROM EXCP->IOB->ECB
         DC    5F'0'               * BALANCE OF IOB - MUST BE
*                                  * INITIALISED BY PROGRAM
WRITEIOB DC    F'0'                * AT LEAST 28 BYTES LONG
         DC    AL1(0),AL3(WRITEECB) * LINK FORM EXCP->IOB->ECB
         DC    5F'0'               * BALANCE OF IOB - MUST BE
*                                  * INITIALIZED BY PROGRAM	
WAITLIST DS    0F                  * ALIGN
         DC    A(WRITEECB)         * ADDRESS OF ECB OF WRITE
         DC    A(READECB)          * ADDRESS OF ECB OF READ
         DC    A(WTORECB+X'80000000') * ADDRESS OF ECB OF WTOR
*                                  * NOTE: HI ORDER BIT SET ON TO
*                                  * SHOW END OF LIST
WRITEECB DC    A(0)                * ALWAYS SET (AND RESET) TO
READECB  DC    A(0)                * ZERO BEFORE WAIT IS ISSUED		 
WTORECB  DC    A(0)                *  
ANS      DC    X'00'               * WTOR RESPONSE PLACED HERE  



       EVENTS    ENTRIES=20      OR . . .
       EVENTS    ENTRIES=(RX)    FOLLOWED BY . . .

          ST     R1,EVENTAD   SAVE ADDRESS OF EVENTS TABLE



      EVENTS   ENTRIES=DEL,TABLE=(RX)   
      EVENTS   ENTRIES=DEL,TABLE=EVENTAD  



       EVENTS   TABLE=EVENTAD,ECB=ECB1   OR . . .
       EVENTS   TABLE=EVENTAD,ECB=(RX)   RX CONTAINS THE ECB ADDRESS





     XC    ECB1,ECB1
           EVENTS   TABLE=XXX,ECB=ECB1
           READ       DECB1



      POST    ECB1               OR . . .
      POST    ECB1,X'3FFFFFF'









EVENTS TABLE=XXX,WAIT=YES
EVENTS TABLE=XXX,WAIT=NO     



ECB1     DC    F'0'              * ECB POSTED WHEN ACTION IS COMPLETE
PROC1    DC    V(PROCESS1)       * ADDRESS OF PROCESSING ROUTINE
PARM0    DC    A(PARM0)          * PARAMETERS LOADED INTO R0
PARM1    DC    A(PARM1)          * PARAMETERS LOADED INTO R1


      EVENTS   TABLE=EVENTAD,WAIT=YES
         LR    R10,R1            * R10 -> FIRST ECB ADDRESS
LOOP0010 DS    0H                *
         L     R9,0(0,R10)       * R9 -> POSTED ECB
         LM    R15,R1,4(R9)      * R15 -> ROUTINE ADDRESS
*                                * R0 -> PARM0
*                                * R1 -> PARM1
         BALR  R14,R15           * CALL ROUTINE
*                                * HANDLE RETURN FROM ROUTINE
         LTR   R10,R10           * END OF LIST?
         BM    ALLDONE           * YES - NO MORE COMPLETED EVENTS
         AH    R10,=H'4'         * NO --- STEP TO NEXT ENTRY
         B     LOOP0010          * AND REPEAT FOR NEXT POSTED ECB 





 TITLE  ' SAMPLE PROGRAM SHOWING THE OPERATION OF THE EVENTS SERVICE'
EVENTEST CSECT
      MKBINIT                    *                               *    *
      OPEN     (EVENTDMP,OUTPUT) *                               *    *
      EVENTS   ENTRIES=20        *                               *    *
         LR    R11,R1            * PRESERVE A(TABLE)             *    *
         ST    R1,EVENTAD        * SAVE A(TABLE)                 *    *
         ST    R1,SNAPL1ST       * SAVE IN SNAP LIST             *    *
         A     R1,=A(40+(20*4))  * LENGTH OF EVENTS TABLE        *    *
         ST    R1,SNAPL1EN       * SAVE END OF SNAP PARM LIST    *    *
         LA    R9,SNAPL1ST       * SET UP FOR SNAP TYPE 1        *    *
     SNAP      DCB=EVENTDMP,ID=1,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL1                           *    *
     EVENTS    TABLE=EVENTAD,WAIT=NO                             *    *
         LR    R3,R1                                             *    *
     SNAP      DCB=EVENTDMP,ID=2,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL2                           *    *
         LA    R10,ECB1          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB2          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB3          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB4          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB5          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB6          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB7          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB8          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB9          * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
         LA    R10,ECB10         * SET UP ECB ADDRESS            *    *
     EVENTS    TABLE=EVENTAD,ECB=(R10)                           *    *
     SNAP      DCB=EVENTDMP,ID=3,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL3                           *    *
     POST      ECB1              *                               *    *
     SNAP      DCB=EVENTDMP,ID=4,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL4                           *    *
     POST      ECB2              *                               *    *
     SNAP      DCB=EVENTDMP,ID=5,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL5                           *    *
     EVENTS    TABLE=EVENTAD,WAIT=YES                            *    *
        LR    R2,R1              *                               *    *
     SNAP      DCB=EVENTDMP,ID=6,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL6                           *    *
     POST      ECB3              *                               *    *
     SNAP      DCB=EVENTDMP,ID=7,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL7                           *    *
     POST      ECB4              *                               *    *
     SNAP      DCB=EVENTDMP,ID=7,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL7                           *    *
     POST      ECB5              *                               *    *
     SNAP      DCB=EVENTDMP,ID=7,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL7                           *    *
         LA    R2,4(0,R2)        * STEP TO ECB2 ENTRY IN TABLE   *    *
     EVENTS    TABLE=EVENTAD,WAIT=YES,LAST=(R2)                  *    *
         LR    R3,R1             * PRESERVE R1 FOR SNAP          *    *
     SNAP      DCB=EVENTDMP,ID=8,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL8                           *    *
     EVENTS    TABLE=EVENTAD,WAIT=NO                             *    *
         LR    R3,R1             * PRESERVE R1 FOR SNAP          *    *
     SNAP      DCB=EVENTDMP,ID=9,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL9                           *    *
     EVENTS    TABLE=EVENTAD,WAIT=NO                             *    *
         LR    R3,R1             * PRESERVE R1 FOR SNAP          *    *
     SNAP      DCB=EVENTDMP,ID=9,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL9                           *    *
     EVENTS    TABLE=EVENTAD,WAIT=NO                             *    *
         LR    R3,R1             * PRESERVE R1 FOR SNAP          *    *
     SNAP      DCB=EVENTDMP,ID=9,PDATA=(REGS),                         +
               LIST=(R9),STRHDR=LABEL9                           *    *
     EVENTS    ENTRIES=DEL,TABLE=EVENTAD                         *    *	 
     CLOSE     EVENTDMP          *                               *    *
     QUIT      0                 *                               *    *
         LTORG                   *                               *    *
EVENTAD  DC    A(0)              * A(EVENTS) TABLE               *    *
         DS    0F                * ALIGN THINGS                  *    *
SNAPL1ST DC    A(0)              * A(START EVENT TABLE)          *    *
SNAPL1EN DC    A(0)              * A(END OF EVENT TABLE)         *    *
         DC    A(ECB1)           * A(START OF ECBS)              *    *
         DC    A(ECB10+X'80000000') * A(END OF ECBS)             *    *
ECB1     DC    A(0)              * SET OF 10 ECBS                *    *
ECB2     DC    A(0)              * SET OF 10 ECBS                *    *
ECB3     DC    A(0)              * SET OF 10 ECBS                *    *
ECB4     DC    A(0)              * SET OF 10 ECBS                *    *
ECB5     DC    A(0)              * SET OF 10 ECBS                *    *
ECB6     DC    A(0)              * SET OF 10 ECBS                *    *
ECB7     DC    A(0)              * SET OF 10 ECBS                *    *
ECB8     DC    A(0)              * SET OF 10 ECBS                *    *
ECB9     DC    A(0)              * SET OF 10 ECBS                *    *
ECB10    DC    A(0)              * SET OF 10 ECBS                *    *
LABEL1   DC    A(L1),X'80000000'                                 *    *
LABEL2   DC    A(L2),X'80000000'
LABEL3   DC    A(L3),X'80000000'
LABEL4   DC    A(L4),X'80000000'
LABEL5   DC    A(L5),X'80000000'
LABEL6   DC    A(L6),X'80000000'
LABEL7   DC    A(L7),X'80000000'
LABEL8   DC    A(L8),X'80000000'
LABEL9   DC    A(L9),X'80000000'
L1       DC    AL1(50),CL50' EVENTS TABLE AFTER SETUP'           *    *
L2       DC    AL1(50),CL50' AFTER EVENTS WAIT=NO  (R3 HAS RESULT)  '
L3       DC    AL1(50),CL50' PRIME ECBS TO LINK WITH EVENTS TABLE   '
L4       DC    AL1(50),CL50' AFTER POSTING OF ECB1                  '
L5       DC    AL1(50),CL50' AFTER POSTING OF ECB2                  '
L6       DC    AL1(50),CL50' AFTER EVENTS WAIT=YES. R2 ==> ENTRY    '
L7       DC    AL1(50),CL50' POSTING ECBS 3,4 AND 5 (3 SETS)        '
L8       DC    AL1(50),CL50' AFTER EVENTS ... LAST=(R2)             '
L9       DC    AL1(50),CL50' AFTER EVENTS WAIT=NO  (R3 HAS RESULT)  '
EVENTDMP DCB   DDNAME=EVENTDMP,MACRF=(W),RECFM=VBA,LRECL=125,DSORG=PS, +
               BLKSIZE=882
         END
         *===================================================================*
	 *                                                                   *
	 *  HEXVIEW - Shows the contents of an area in hexadecimal.          *
	 *  Place this macro within a program in the desired location.       *
	 *  All labels generated by this macro start by "H" and are unique.  *
	 *  Arguments: Address of area, length (should be multiple of 4)     *
	 *  and, optionally, the keyword "BATCH" to indicate that the output *
	 *  should be directed to sysprint instead of the terminal.          *
	 *  With the BATCH option, R13 must address a standard save area.    *
	 *  If no length is given, 4 is assumed.                             *
	 *                                                                   *
	 *  This macro adds 272 bytes in terminal mode, or 388 bytes in      *
	 *  batch mode.                                                      *
	 *                                                                   *
	 *===================================================================*
	 *
	          MACRO
	          HEXVIEW &AREA,&LENG,&PARM
	 LENGDEF  EQU   4                   Default length if no leng parm
	 &DDBATCH SETC  'SYSPRINT'          DDname for BATCH option
	 &A       SETA  &SYSNDX             Set index for unique labels
	          B     HTR&A               Branch around working storage
	 *
	 *===================================================================*
	 *        HEXVIEW WORKING STORAGE                                    *
	 *===================================================================*
	 *
	 HREG&A   DS    4F                  Register store area (15,0,1,2)
	 HUNP9&A  DS    0CL9                Unpack area
	 HUNP&A   DS    CL8
	          DS    CL1
	 HTR1&A   DC    X'0F0F0F0F0F0F0F0F'
	 HTR2&A   DC    C'0123456789ABCDEF'
	 *
	 *===================================================================*
	 *        HEXVIEW MAIN CODE                                          *
	 *===================================================================*
	 *
	 HTR&A    STM   R15,R2,HREG&A       Store regs 15 thru 2
	          STORAGE OBTAIN,           Acquire storage for output line     *
	                ADDR=(R2),          and to save remaining regs.         *
	                LENGTH=128,                                             *
	                LOC=BELOW,                                              *
	                COND=YES
	          LTR   R15,R15
	          BNZ   HEXIT&A
	          STM   R3,R14,80(R2)       Store remaining regs
	 *
	          AIF ('&PARM' NE 'BATCH').HSTOR
	          B     HOPEN&A
	 PRINT&A  DCB   DSORG=PS,RECFM=F,MACRF=(PM),                            *
	                LRECL=78,BLKSIZE=78,DDNAME=&DDBATCH
	 HOPEN&A  OPEN  (PRINT&A,OUTPUT)
	 *
	 .HSTOR   ANOP
	          AIF ('&LENG' NE '').HOKAY
	          LA    R8,LENGDEF          If no length given, assume lengdef
	          AGO   .HSRL
	 *
	 .HOKAY   ANOP
	          LA    R8,&LENG            Load length
	 *
	 .HSRL    ANOP
	          SRL   R8,2                Divide length by four
	          LA    R7,8                8 groups of 4 bytes per line
	          LA    R9,1                Subtractor for R8
	          LA    R6,&AREA            Load address of area to display
	 *
	 HSTART&A EQU   *
	          XR    R3,R3               Group counter
	          LR    R5,R2               Copy address for output and
	          MVI   0(R5),X'40'         initialize it with spaces.
	          MVC   1(77,R5),0(R5)
	 *
	 HLOOP&A  EQU   *
	          UNPK  HUNP9&A,0(5,R6)     Get 4 bytes and turn them into
	          NC    HUNP&A,HTR1&A       a viewable stuff.
	          TR    HUNP&A,HTR2&A
	          MVC   0(8,R5),HUNP9&A     Move it to output line
	          LA    R3,1(0,R3)          Inc group counter
	          LA    R6,4(0,R6)          Inc input pointer
	          LA    R5,10(0,R5)         Inc out pointer (plus 2 spaces)
	          CR    R3,R7               8 groups attained?
	          BE    HDISP&A             Yes, display
	          SR    R8,R9               Subtract 1 from R8
	          LTR   R8,R8               Length exhausted?
	          BH    HLOOP&A             Not yet, continue
	 *
	 HDISP&A  EQU   *
	          AIF ('&PARM' EQ 'BATCH').HBATCH
	          TPUT  0(R2),78
	          AGO   .HEND
	 *
	 .HBATCH  ANOP
	          PUT   PRINT&A,0(R2),78
	 *
	 .HEND    ANOP
	 HEND1&A  EQU   *
	          SR    R8,R9               Subtract 1 from R8
	          LTR   R8,R8               Length exhausted?
	          BH    HSTART&A            Not yet, continue with a new line.
	          LM    R3,R14,80(R2)       Yes, recover regs, free storage
	          STORAGE RELEASE,          and exit.                           *
	                ADDR=(R2),                                              *
	                LENGTH=128,                                             *
	                COND=YES
	          AIF ('&PARM' NE 'BATCH').EXIT
	          CLOSE PRINT&A
	 *
	 .EXIT    ANOP
	 HEXIT&A  EQU   *
	          LM    R15,R2,HREG&A
	          MEND
	 *===================================================================*
	 *        HEXVIEW END                                                *
	 *===================================================================*
    
--------------------------------------------------------------------------------

IEASYMBQ Assembler program



//IEASYMBP EXEC PGM=IEASYMBQ,PARM='IEASYS00'


     TSO EX 'your.exec(IEASYMBQ)' EXEC


ÑÑÑÑÑÑÑÑÑÑÑÑÑ Parmlib Symbolic Change Impact ÑÑÑ-


 BROWSE    SYS98334.T074854.RA000.MYID.R0129343





TITLE 'PARMLIB MEMBER PROCESS - SHOW EFFECT OF SYMBOL CHANGES'
*        SHOW THE CONTENT OF A PARMLIB MEMBER SHOWING SYMBOL CHANGES
*
*        THIS PROGRAM WILL PROCESS ONE OR MORE PARMLIBS LOOKING FOR A
*        SPECIFIC MEMBER.
*        THE MEMBER NAME IS INPUT VIA JOB-STEP PARAMETER.
*        THE MEMBER WILL BE SHOWN WITH USER-SUPPLIED AND DEFAULT
*        SYMBOL SUBSTITUTION UNLESS THE USER-SUPPLIED SYMBOL CONTAINS
*        A SYMBOL IN WHICH CASE THE OUTPUT WILL SHOW THE FURTHER
*        SUBSTITUTION.
         SPACE 1
*        A MAXIMUM OF 128 SYMBOLS WITH VALUES MAY BE PROVIDED.
*        THE USER-SUPPLIED SYMBOLS MAY BE ENTERED WITH OR
*        WITHOUT A LEADING AMPERSAND, AND WITH OR WITHOUT A TRAILING
*        PERIOD.  THE PROGRAM WILL ADD THE MISSING & AND PERIOD.
         SPACE 2
*        INPUT FILES:
         SPACE 1
*              CARD INPUT
*                 DDNAME=SYSIN
*                 LRECL=80
*                 BLKSIZE=?
*                 RECFM=F/BF
         SPACE 2
*              PARTITIONED DATA SET(S) (MAY BE CONCATENATED)
*                 DDNAME=SYSPARM
*                 LRECL=80
*                 BLKSIZE=?
*                 RECFM=F/BF
         SPACE 2
*              JOB STEP PARAMETER (MEMBER NAME TO PROCESS)
*                 PARM='MEMBER'
         SPACE 2
*        OUTPUT FILES:
         SPACE 1
*              REPORT
*                 DDNAME=SYSPRINT
*                 LRECL=80
*                 BLKSIZE=?
*                 RECFM=AF/ABF/ABFS
         SPACE 2
*        SAMPLE JCL
         SPACE 1
*              //IEASYMBQ  EXEC PGM=IEASYMBQ,PARM='IEASYS00'
*              //STEPLIB  DD DISP=SHR,DSN=MY.LOAD
*              //SYSIN    DD *,DCB=BLKSIZE=80
*              SYSPLEX='PRDPLEX'
*              //SYSPARM  DD DISP=SHR,DSN=SYS1.PARMLIB
*              //         DD DISP=SHR,DSN=SYS1.OLD.PARMLIB
*              //SYSPRINT DD SYSOUT=*
         EJECT
*        PROGRAM ATTRIBUTES
         SPACE 1
*                REENTRANT
*                AMODE: 31
*                RMODE: 24 (DCBS)
         SPACE 3
*        EXTERNAL ROUTINES USED:
*                ASASYMBM               . SYMBOLIC SUBSTITUTION
         TITLE 'MACROS AND CONTROL BLOCKS USED'
*        MACROS USED
         SPACE 1
*                ABEND                  . ABEND USER TASK
*                BLDL                   . BUILD DIRECTORY ENTRY LIST
*                CHECK                  . WAIT FOR I/O COMPLETION
*                CLOSE         MF=E     . TERMINATE FILE PROCESSING
*                FREEPOOL               . RELEASE BUFFER POOL
*                LINKX    SF=L/MF=E     . LINK TO PROGRAM
*                OPEN          MF=L/E   . PREPARE FILE FOR PROCESSING
*                PUT                    . WRITE A RECORD (QSAM)
*                READ          MF=L/E   . READ A BLOCK (BSAM / BPAM)
*                WTO           MF=L/E   . OUTPUT MESSAGE
         SPACE 3
*        CONTROL BLOCKS USED
         SPACE 1
*                ASASYMBP               . MAP ASASYMBM PARAMETER LIST
*                DCBD (IHADCB)          . DCB MAPPING  (DSECT)
*                IEZIOB                 . IOB MAPPING  (DSECT)
*                IHADECB                . DECB MAPPING (DSECT)
         TITLE 'REGISTER EQUATES AND GENERAL USAGE'
R0       EQU   0                        . ARGUMENT ADDRESS FOR MACROS
R1       EQU   1                        . ARGUMENT ADDRESS FOR MACROS
R2       EQU   2
R3       EQU   3
R4       EQU   4
R5       EQU   5
R6       EQU   6
R7       EQU   7
R8       EQU   8
R9       EQU   9
R10      EQU   10                       . BRANCH & SAVE RETURN ADDRESS
R11      EQU   11                       . CSECT BASE REGISTER
R12      EQU   12                       . CSECT BASE REGISTER
R13      EQU   13                       . -> SAVE AREA
R14      EQU   14                       . RETURN ADDRESS
*                                       . AMODE SWITCH
R15      EQU   15                       . ENTRY POINT ADDRESS
*                                       . RETURN CODE
         TITLE 'CSECT CONTROL'
         PRINT NOGEN
IEASYMBQ CSECT
IEASYMBQ AMODE 31
IEASYMBQ RMODE 24
         LA    R14,0(,R14)              . VALIDITY OF R14
         BSM   R14,R0                   . CURRENT ADDRESSING MODE
         BAKR  R14,R0                   . ESTABLISH LINKAGE
         LR    R11,R15                  . 11 -> EPA
         LA    R12,4095(,R11)
         LA    R12,1(,R12)              . 12 - SECOND BASE REGISTER
         USING IEASYMBQ,R11,R12         . CSECT ADDRESSABILITY
         STORAGE OBTAIN,                . GET DYNAMIC AREA             *
               ADDR=(R13),                                             *
               LENGTH=DYNLEN,                                          *
               LOC=(BELOW,ANY),                                        *
               SP=0
         MVC   4(4,R13),=C'F1SA'        . FORMAT OF SAVE AREA
         BAS   R14,AMODE31              . GO AMODE 31
         USING DYNAREA,R13              . DSECT ADDRESSABILITY
         XC    RETCODE,RETCODE          . INITIALIZE RETURN CODE
         BAS   R10,INITIAL              . PERFORM INITIALIZATION
         BAS   R10,PROCESS              . PERFORM MAIN PROCESSING
         BAS   R10,TERMIN               . PERFORM TERMINATION
         L     R4,RETCODE               . 4 - RETURN CODE
         STORAGE RELEASE,               . RELEASE DYNAMIC AREA         *
               ADDR=(R13),                                             *
               LENGTH=DYNLEN,                                          *
               SP=0
         LR    R15,R4                   . 15 - RETURN CODE
         PR                             . RETURN TO CALLER
         TITLE 'INITIALIZATION PROCESSING LOGIC'
*        REGISTER USAGE
         SPACE 1
*        1                              . WORK
*        2                              . -> BLDL LIST
*        3                              . -> ASASYMBM PARAMETER LIST
*                                       . ->         SUBSTITUTION ARRAY
*        4                              . WORK
*        5                              . -> INPUT DCB SYSIN
*        6                              . -> INPUT DCB SYSPARM
*        7                              . -> OUTPUT DCB SYSPRINT
         SPACE 2
*        PROCESS JOB-STEP PARAMETER
*        MOVE THE FORM DCBS INTO THE DYNAMIC AREA
*        OPEN THE INPUT AND OUTPUT FILES
*        GET THE BUFFER FOR THE INPUT PDS
*        OBTAIN AND FORMAT ASASYMBM PARAMETER LIST STORAGE
*        OBTAIN AND INITIALIZE ASASYMBM SUBSTITUTION ARRAY STORAGE
*        PROCESS SYSIN - SYMBOLICS TO BE PROCESSED
         SPACE 2
INITIAL  EQU   *
         ST    R10,BSAVE                . SAVE RETURN ADDRESS
         XC    BLDL,BLDL                . INITIALIZE BLDL AREA
         LA    R2,BLDL                  . 2 -> BLDL AREA
         USING BLDLIST,R2               . DSECT ADDRESSABILITY
         MVC   BLDL#ENT,=H'1'           . INITIALIZE # ENTRIES
         MVC   BLDLENTL,=Y(LENBLDL-2)   . LENGTH OF ENTRY
         MVI   DIRMEMNM,C' '            . INITIALIZE MEMBER NAME
         MVC   DIRMEMNM+1(L'DIRMEMNM-1),DIRMEMNM
         EREG  R1,R1                    . GET CALLER'S REGISTER 1
         L     R1,0(,R1)                . 1 -> PARAMETER
         LH    R4,0(,R1)                . 4 - LENGTH OF PARAMETER
         LTR   R4,R4                    . Q. PARAMETER LENGTH ZERO?
         BZ    B0001                    . A. YES - ERROR
         CH    R4,=H'8'                 . Q. PARAMETER LENGTH > EIGHT?
         BH    B0001                    . A. YES - ERROR
         BCTR  R4,R0                    . DECREMENT FOR EXECUTE
         EX    R4,MVCPARM               . SAVE MEMBER NAME
         MVC   DYNDCB1,SYSIN            . SYSIN DCB
         MVC   DYNDCB2,SYSPARM          . SYSPARM DCB
         MVC   DYNDCB3,SYSPRINT         . SYSPRINT DCB
         LA    R5,DYNDCB1               . 5 -> DCB FOR SYSIN
         LA    R6,DYNDCB2               . 6 -> DCB FOR SYSPARM
         LA    R7,DYNDCB3               . 7 -> DCB FOR SYSPRINT
         MVC   DMALIST(LENOPEN),OPENL   . MOVE DMA LIST TO DYNAMIC
         BAS   R14,AMODE24              . SWITCH TO AMODE 24
         OPEN  ((R5),,(R6),,(R7),OUTPUT),                              *
               MF=(E,DMALIST)
         BAS   R14,AMODE31              . SWITCH TO AMODE 31
         USING IHADCB,R5                . CHECK THE OPEN OF SYSIN
         TM    DCBOFLGS,DCBOFOPN        . Q. OPEN OKAY?
         BNO   B0002                    . A. NO
         DROP  R5                       . DSECT NO LONGER REQ'D
         USING IHADCB,R6                . CHECK THE OPEN OF SYSPARM
         TM    DCBOFLGS,DCBOFOPN        . Q. OPEN OKAY?
         BNO   B0003                    . A. NO
         MVC   #BLK,DCBBLKSI            . SAVE THE BLOCK SIZE
         DROP  R6                       . DSECT NO LONGER REQ'D
         USING IHADCB,R7                . CHECK THE OPEN OF SYSPRINT
         TM    DCBOFLGS,DCBOFOPN        . Q. OPEN OKAY?
         BNO   B0004                    . A. NO
         DROP  R7                       . DSECT NO LONGER REQ'D
         LH    R2,#BLK                  . 2 - BLOCKSIZE OF PDS
         STORAGE OBTAIN,                . GET BUFFER                   *
               ADDR=(R1),                                              *
               LENGTH=(R2),                                            *
               LOC=(BELOW,ANY),                                        *
               SP=0
         ST    R1,@BLK                  . SAVE ADDRESS OF STORAGE
         STORAGE OBTAIN,                . OBTAIN ASASYMBM PARAMETER    *
               ADDR=(R3),               .   LIST                       *
               LENGTH=SYMBP_LEN,                                       *
               SP=0
         ST    R3,@SYMBP                . SAVE -> PARAMETER LIST
         USING SYMBP,R3                 . DSECT ADDRESSABILITY
         XC    SYMBP(SYMBP_LEN),SYMBP   . CLEAR PARAMETER LIST
         L     R4,=F'71'                . 4 - SEVENTY ONE
         ST    R4,SYMBPPATTERNLENGTH    . SAVE LENGTH
         LA    R4,SYMLENTR              . 4 -> TARGET LENGTH
         ST    R4,SYMBPTARGETLENGTH@    . SAVE ADDRESS
         LA    R4,SYMRETCD              . 4 -> RETURN CODE
         ST    R4,SYMBPRETURNCODE@      . SAVE ADDRESS
         DROP  R3                       . DSECT NOT REQUIRED
         LA    R1,SYMBTE_LEN            . 1 - LENGTH OF SYMBOL ENTRY
         SLA   R1,7                     . MULTIPLY BY 128
         LA    R1,SYMBT_LEN(,R1)        . ADD IN LENGTH OF HEADER
         ST    R1,#SYMBT                . SAVE LENGTH
         STORAGE OBTAIN,                . OBTAIN ASASYMBM SUBSTITUTION *
               ADDR=(R3),               .   ARRAY                      *
               LENGTH=(R1),                                            *
               SP=0
         ST    R3,@SYMBT                . SAVE -> SUBSTITUTION ARRAY
         USING SYMBT,R3                 . DSECT ADDRESSABILITY
         XC    SYMBTHEADER,SYMBTHEADER  . INITIALIZE HEADER
         DROP  R3
         BAS   R10,PROCINPT             . PROCESS SYSIN DATA
         L     R10,BSAVE                . RESTORE RETURN ADDRESS
         BR    R10                      . EXIT
MVCPARM  MVC   DIRMEMNM(*-*),2(R1)      . EXECUTED MOVE
         DROP  R2                       . DSECT NOT REQUIRED
         SPACE 2
B0001    EQU   *                        . JOB-STEP PARAMETER ERROR
         WTO   MF=(E,WTO1L)
         B     B0005
         SPACE 2
B0002    EQU   *                        . SYSIN OPEN FAILURE
         WTO   MF=(E,WTO2L)
         B     B0005
         SPACE 2
B0003    EQU   *                        . SYSPARM OPEN FAILURE
         WTO   MF=(E,WTO3L)
         B     B0005
         SPACE 2
B0004    EQU   *                        . SYSPRINT OPEN FAILURE
         WTO   MF=(E,WTO4L)
         SPACE 2
B0005    EQU   *
         ABEND 100,                     . ABEND THE TASK               *
               DUMP
         TITLE 'MAIN PROCESSING LOGIC'
*        REGISTER USAGE
         SPACE 1
*        3                              . -> SYSPARM DCB
*        4                              . -> BLDL LIST
*        6                              . -> DECB
*        8                              . -> PDS BLOCK
         SPACE 2
*        ISSUE BLDL
*        POSITION ON THE FIRST BLOCK FOR THIS ENTRY
*        FOR EVERY BLOCK FOR THE MEMBER
*             PROCESS CURRENT BLOCK
*             READ NEXT BLOCK
PROCESS  EQU   *
         ST    R10,CSAVE                . SAVE R10
         LA    R3,DYNDCB2               . 3 -> DCB FOR PDS
         LA    R4,BLDL                  . 4 -> BLDL LIST
         USING BLDLIST,R4               . DSECT ADDRESSABILITY
         BLDL  (R3),                    . ISSUE BLDL                   *
               (R4)
         MVC   TTR(3),DIRTTR            . STORE -> MEMBER'S FIRST BLOCK
         MVI   TTR+3,X'00'              . ZAP LAST BYTE OF TTR
         FIND  (R3),                    . LOCATE FIRST BLOCK OF MEMBER *
               TTR,                                                    *
               C                        . NO DIRECTORY SEARCH
C0001    EQU   *                        . RETRIEVE BLOCK FROM MEMBER
*
         MVC   DECBD(L'DECBD),READL     . MOVE IN LIST FORM
         LA    R6,DECBD                 . 6 -> DECB
         L     R8,@BLK                  . 8 -> BLOCK OF STORAGE
         READ  (R6),                    . READ BLOCK FROM PDS MEMBER   *
               SF,                      . SEQUENTIAL FORWARDS          *
               (R3),                                                   *
               (R8),                                                   *
               'S',                                                    *
               MF=E
         CHECK DECBD                    . AWAIT COMPLETION
         BAS   R10,MEMBPROC             . PROCESS CURRENT BLOCK
         B     C0001                    . GET NEXT BLOCK FROM MEMBER
         DROP  R4                       . DSECT NO LONGER REQUIRED
C0002    EQU   *
         L     R10,CSAVE                . RESTORE R10
         BR    R10                      . EXIT
         TITLE 'END OF PROCESSING - CLOSE FILES, FREE BUFFER POOL'
*        REGISTER USAGE
         SPACE 1
*        1                              . WORK
*        4                              . -> ASASYMBM PARAMETER LIST
*                                       . ->        SUBSTITUTION ARRAY
*                                       . -> SYMBOL ARRAY
*        5                              . -> SYSIN DCB
*        6                              . -> SYSPARM DCB
*        7                              . -> SYSPRINT DCB
         SPACE 2
*        RELEASE ASASYMBM STORAGE AREAS
*        RELEASE SYMBOL ARRAY STORAGE
*        CLOSE THE FILES THAT ARE OPEN
*        FREE THE BUFFER POOLS ACQUIRED DYNAMICALLY AT OPEN
         SPACE 2
TERMIN   EQU   *
*
         L     R1,#SYMBT                . 1 - LENGTH OF ARRAY
         L     R4,@SYMBT                . 4 -> SUBSTITUTION ARRAY
         STORAGE RELEASE,               . RELEASE ASASYMBM SUBSTITUTION*
               ADDR=(R4),               .   ARRAY                      *
               LENGTH=(R1)
         L     R4,@SYMBP                . 4 -> ASASYMBM PARAMETER LIST
         STORAGE RELEASE,               . RELEASE STORAGE              *
               ADDR=(R4),                                              *
               LENGTH=SYMBP_LEN
         LA    R1,SYMENT                . 1 - ENTRY LENGTH SYMBOL ARRAY
         SLA   R1,7                     . 128 ENTRIES
         L     R4,@SYMBOLS              . 4 -> SYMBOL ARRAY
         STORAGE RELEASE,               . RELEASE STORAGE SYMBOL ARRAY *
               ADDR=(R4),                                              *
               LENGTH=(R1)
         MVC   DMALIST(LENOPEN),OPENL   . TWO FILES TO CLOSE
         LA    R5,DYNDCB1               . 5 -> SYSIN DCB
         LA    R6,DYNDCB2               . 6 -> SYSPARM DCB
         LA    R7,DYNDCB3               . 7 -> SYSPRINT DCB
         BAS   R14,AMODE24              . SWITCH TO AMODE 24
         CLOSE ((R5),,(R6),,(R7)),      . CLOSE FILES                  *
               MF=(E,DMALIST)
         FREEPOOL (R5)                  . RELEASE BUFFER POOL
         FREEPOOL (R6)                  . RELEASE BUFFER POOL
         FREEPOOL (R7)                  . RELEASE BUFFER POOL
         BAS   R14,AMODE31              . BACK TO AMODE 31
         BR    R10                      . EXIT
         TITLE 'PROCESS INPUT SYSIN - SYMBOLS TO BE PROCESSED'
*        REGISTER USAGE
         SPACE 1
*        1                              . WORK
*        3                              . LENGTH OF CURRENT SYMBOL
*        4                              . -> CURRENT SAVE SYMBOL BYTE
*        5                              . -> CURRENT BYTE IN RECORD
*        6                              . BYTES IN INPUT RECORD
*        7                              . -> INPUT DCB
*        8                              . -> CURRENT ENTRY IN ARRAY
*        9                              . NUMBER OF SYMBOLS
         SPACE 2
*        ACQUIRE STORAGE FOR SYMBOL ARRAY
*        READ THE INPUT SYSIN RECORD
*        FOR EVERY SPACE DELIMITED VALUE
*            VALIDATE - MAX 8 CHARACTERS - EXCLUDING OPTIONAL
*            LEADING AMPERSAND AND TRAILING PERIOD
*            IF VALID, STORE IN ARRAY
*            READ NEXT INPUT SYSIN RECORD
         SPACE 2
PROCINPT EQU   *
*
         ST    R10,ESAVE                . SAVE RETURN ADDRESS
         SLR   R9,R9                    . 9 - ZERO (COUNT OF SYMBOLS)
         LA    R7,DYNDCB1               . 7 -> SYSIN DCB
         LA    R1,SYMENT                . 1 - ENTRY LENGTH SYMBOL ARRAY
         SLA   R1,7                     . 128 ENTRIES
         STORAGE OBTAIN,                . GET STORAGE FOR SYMBOL ARRAY *
               ADDR=(R8),                                              *
               LENGTH=(R1),                                            *
               SP=0
         ST    R8,@SYMBOLS              . SAVE ADDRESS OF SYMBOL ARRAY
         USING SYMARRAY,R8              . DSECT ADDRESSABILITY
E0001    EQU   *
         BAS   R14,AMODE24              . SWITCH TO AMODE 24
         GET   (R7),                    . GET SYSIN RECORD             *
               WORKREC
         BAS   R14,AMODE31              . BACK TO AMODE 31
         LA    R5,WORKREC               . 5 -> INPUT RECORD
         LA    R6,72                    . 6 - BYTES TO PROCESS
E0002    EQU   *
         CLI   0(R5),C' '               . Q. SPACE FOUND?
         BNE   E0003                    . A. NO
         LA    R5,1(,R5)                . 5 -> NEXT BYTE
         BCT   R6,E0002                 . LOOP
         B     E0001                    . GET NEXT RECORD
E0003    EQU   *
         SLR   R3,R3                    . 3 - ZERO (LENGTH OF DATA)
         MVI   SAVESYM,C' '             . SYMBOL WORK AREA
         MVC   SAVESYM+1(L'SAVESYM-1),SAVESYM
         LA    R4,SAVESYM               . 4 -> SYMBOL WORK AREA
         CLI   0(R5),C'&&'              . Q. AMPERSAND FOUND?
         BE    E0004                    . A. YES
         CLI   0(R5),C'.'               . Q. INPUT BYTE A PERIOD?
         BE    E0002                    . A. YES - IGNORE THE PERIOD
         MVI   0(R4),C'&&'              . MOVE OUT AMPERSAND
         LA    R3,1(,R3)                . INCREMENT BYTES IN SYMBOL
         LA    R4,1(,R4)                . 4 -> NEXT OUTPUT BYTE
         B     E0005
E0004    EQU   *
         MVI   0(R4),C'&&'              . MOVE THE AMPERSAND
         LA    R5,1(,R5)                . 5 -> NEXT INPUT BYTE
         BCTR  R6,R0                    . DECREMENT BYTES TO PROCESS
         CLI   0(R5),C' '               . Q. NEXT INPUT BYTE A SPACE?
         BE    E0002                    . A. YES - IGNORE THE AMPERSAND
         CLI   0(R5),C'.'               . Q. NEXT INPUT BYTE A PERIOD?
         BE    E0002                    . A. YES - IGNORE THE AMPERSAND
         LA    R3,1(,R3)                . INCREMENT BYTES IN SYMBOL
         LA    R4,1(,R4)                . 4 -> NEXT OUTPUT BYTE
E0005    EQU   *
         MVC   0(1,R4),0(R5)            . MOVE THE BYTE
         LA    R3,1(,R3)                . INCREMENT BYTES IN SYMBOL
         LA    R5,1(,R5)                . 5 -> NEXT INPUT BYTE
         LA    R4,1(,R4)                . 8 -> NEXT OUTPUT BYTE
         CLI   0(R5),C' '               . Q. NEXT INPUT BYTE A SPACE?
         BE    E0014                    . A. YES - ERROR
         CLI   0(R5),C'='               . Q. NEXT INPUT BYTE AN EQUAL?
         BE    E0006                    . A. YES - END OF SYMBOL
         CLI   0(R5),C'.'               . Q. NEXT INPUT BYTE A PERIOD?
         BE    E0006                    . A. YES - END OF SYMBOL
         CH    R3,=H'9'                 . Q. MAX LENGTH?
         BH    E0011                    . A. YES
         BCT   R6,E0005                 . LOOP
E0006    EQU   *
         MVI   SUBFLAG,C'N'             . FLAG NO SUBSTITUTION
         MVI   0(R4),C'.'               . MOVE OUT A PERIOD
         CLI   0(R5),C'.'               . Q. PERIOD INPUT?
         BNE   E0007                    . A. NO
         LA    R5,1(,R5)                . NEXT INPUT BYTE
         BCTR  R6,R0                    . DECREMENT BYTES TO PROCESS
E0007    EQU   *
         CLI   0(R5),C'='               . Q. EQUAL SIGN FOUND?
         BNE   E0014                    . A. NO - ERROR
         LA    R5,1(,R5)                . STEP OVER EQUAL
         BCTR  R6,R0                    . DECREMENT BYTES TO PROCESS
         MVI   SUBFLAG,C'Y'             . FLAG SUBSTITUTION
E0008    EQU   *
         LA    R9,1(,R9)                . INCREMENT NUMBER OF SYMBOLS
         CH    R9,=H'128'               . Q. MORE THAN 128?
         BH    E0012                    . A. YES
         ST    R3,SYMLEN                . SAVE THE LENGTH OF THE SYMBOL
         MVC   SYMBOL,SAVESYM           . SAVE THE SYMBOL
         CLI   SUBFLAG,C'Y'             . Q. SUBSTITUTION VALUE?
         BNE   E0009                    . A. NO
         BAS   R10,SUBVAL               . PROCESS SUBSTITUTION VALUE
         CLC   RETCODE,=F'0'            . Q. RETURN CODE ZERO?
         BNE   E0015                    . A. NO
E0009    EQU   *
         LA    R8,SYMENT(,R8)           . 8 -> NEXT SYMBOL ENTRY
         LA    R5,1(,R5)                . 5 -> NEXT INPUT BYTE
         BCT   R6,E0002                 . LOOP
         B     E0001                    . READ NEXT RECORD
         DROP  R8                       . DSECT NOT REQUIRED
E0010    EQU   *
         LTR   R9,R9                    . Q. ANY VALID SYMBOLS?
         BZ    E0013                    . A. NO
         ST    R9,#SYMBOLS              . SAVE NUMBER OF SYMBOLS
         B     E0015
E0011    EQU   *                        . SYMBOL EXCESSIVE LENGTH
         WTO   MF=(E,WTO5L)
         MVC   RETCODE,=F'8'            . SET RETURN CODE
         B     E0015
E0012    EQU   *                        . MORE THAN 100 SYMBOLS
         WTO   MF=(E,WTO6L)
         MVC   RETCODE,=F'8'            . SET RETURN CODE
         B     E0015
E0013    EQU   *                        . NO VALID SYMBOLS
         WTO   MF=(E,WTO7L)
         MVC   RETCODE,=F'8'            . SET RETURN CODE
         B     E0015
E0014    EQU   *                        . NO VALUE SUPPLIED WITH SYMBOL
         WTO   MF=(E,WTO8L)
         MVC   RETCODE,=F'8'            . SET RETURN CODE
*
E0015    EQU   *
*
         L     R10,ESAVE                . RETURN ADDRESS
         BR    R10                      . RETURN
         TITLE 'PDS MEMBER RECORD PROCESS'
*              REGISTER USAGE
         SPACE 1
*        2                              . -> IOB
*        6                              . -> DECB
*        7                              . -> POSITION IN BLOCK
*        8                              . INDEX INCREMENT - 80
*        9                              . -> END OF BLOCK
         SPACE 2
*        DETERMINE ACTUAL LENGTH OF THE BLOCK JUST READ OF THIS
*              MEMBER.  THIS IS TO SET UP A BXLE INSTRUCTION.
*        PROCESS THE RECORDS WITHIN THE BLOCK.
*        FOR EACH RECORD IN THE BLOCK INCREMENT RECORDS IN
*              MEMBER ACCUMULATOR.
*        AT THE END OF THE BLOCK THIS ROUTINE IS EXITED.
         SPACE 2
MEMBPROC EQU   *
         STM   R6,R10,FSAVE             . SAVE REGISTERS
         L     R7,@BLK                  . 7, 9 -> BLOCK
         LR    R9,R7
         LA    R6,DYNDCB2               . 6 -> SYSPARM DCB
         USING IHADCB,R6                . MAP THE DCB
         AH    R9,DCBBLKSI              . 9 -> END OF BLOCK
         LH    R8,DCBLRECL              . 8 - RECORD LENGTH
         DROP  R6                       . DSECT NOT WANTED ANY MORE
         LA    R6,DECBD                 . 6 -> DECB
         USING DECB,R6                  . MAP THE DECB
         L     R2,DECIOBPT              . 2 -> INPUT OUTPUT BLOCK
         SH    R2,=H'16'                . 2 -> IOB PREFIX
         DROP  R6                       . DSECT NOT WANTED ANY MORE
         USING IOB,R2                   . MAP THE IOB
         SH    R9,IOBCSW+5              . 9 -> ACTUAL END OF BLOCK
*                                       . FROM CHANNEL STATUS WORD
         DROP  R2                       . DSECT NOT WANTED ANY MORE
         BCTR  R9,R0                    . 9 -> ACTUAL END - ONE
F0001    EQU   *
         ST    R7,@RECORD               . SAVE START OF RECORD
         BAS   R10,SYMSERCH             . SEARCH FOR SYMBOL
         BXLE  R7,R8,F0001              . PROCESS NEXT RECORD IN BLOCK
*                                       . END OF BLOCK
         LM    R6,R10,FSAVE             . RESTORE REGISTERS
         BR    R10                      . RETURN TO CALLER
         TITLE 'PROCESS INPUT SUBSTITUTION VALUE'
*              REGISTER USAGE
         SPACE 1
*        1                              . WORK
*        2                              . WORK
*        3                              . LENGTH OF CURRENT VALUE
*        4                              . -> CURRENT SAVE VALUE BYTE
*        5                              . -> CURRENT BYTE IN RECORD
*        6                              . BYTES IN INPUT RECORD
*        7                              . DO NOT MODIFY
*        8                              . -> CURRENT ENTRY IN ARRAY
*        9                              . DO NOT MODIFY
         SPACE 2
*        THIS CODE PROCESS AN INPUT SUBSTITUTION VALUE. THIS
*        VALUE SHOULD BE ENCLOSED IN APOSTROPHES.
*        THE ASASYMBM SUBSTITUTION TABLE IS ALSO POPULATED
         SPACE 2
SUBVAL   EQU   *
         USING SYMARRAY,R8              . DSECT ADDRESSABILITY
         L     R2,@SYMBT                . 2 -> SYMBOL ARRAY HEADER
         USING SYMBT,R2                 . DSECT MAPPING HEADER
         LH    R1,SYMBTNUMBEROFSYMBOLS  . NUMBER OF SYMBOLS IN ARRAY
         LA    R2,SYMBTTABLEENTRIES     . 2 -> SYMBOL ARRAY ENTRY
         DROP  R2                       . HEADER NOT NEEDED
         USING SYMBTE,R2                . DSECT MAPPING ENTRY
         MH    R1,=Y(SYMBTE_LEN)        . DISPLACEMENT FOR ENTRY
         LA    R2,0(R1,R2)              . 2 -> CURRENT ENTRY
         LA    R1,SYMBOL                . 1 -> CURRENT SYMBOL
         ST    R1,SYMBTESYMBOLPTR       . SAVE -> IN ENTRY
         LA    R3,1(,R3)                . INCLUDE PERIOD IN LENGTH
         ST    R3,SYMBTESYMBOLLENGTH    . SAVE LENGTH IN ENTRY
         SLR   R3,R3                    . 3 - ZERO (LENGTH OF VALUE)
         MVI   SAVEVAL,C' '             . INITIALIZE WORK AREA
         MVC   SAVEVAL+1(L'SAVEVAL-1),SAVEVAL
         LA    R4,SAVEVAL               . 4 -> VALUE WORK AREA
         MVI   APOSFLAG,C'N'            . FLAG NO APOSTROPHE FOUND
         MVI   AMPFLAG,C'N'             . FLAG NO AMPERSAND FOUND
         CLI   0(R5),C''''              . Q. LEADING APOSTROPHE?
         BNE   G0001                    . A. NO
         MVI   APOSFLAG,C'Y'            . FLAG APOSTROPHE FOUND
         LA    R5,1(,R5)                . SKIP OVER APOSTROPHE
         BCTR  R6,R0                    . DECREMENT BYTES TO PROCESS
G0001    EQU   *
         CLI   0(R5),C''''              . Q. APOSTROPHE FOUND?
         BNE   G0002                    . A. NO
         CLI   APOSFLAG,C'Y'            . Q. LEADING APOSTROPHE?
         BE    G0006                    . A. YES - END OF VALUE
         B     G0008                    . A. NO - ERROR
G0002    EQU   *
         CLI   0(R5),C' '               . Q. SPACE FOUND?
         BNE   G0003                    . A. NO
         CLI   APOSFLAG,C'Y'            . Q. WITHIN APOSTROPHE?
         BNE   G0006                    . A. NO - END OF VALUE
G0003    EQU   *
         CLI   0(R5),C'&&'              . Q. AMPERSAND FOUND?
         BNE   G0004                    . A. NO
         MVI   AMPFLAG,C'Y'             . FLAG AMPERSAND
G0004    EQU   *
         CLI   0(R5),C'.'               . Q. PERIOD FOUND?
         BNE   G0005                    . A. NO
         MVI   AMPFLAG,C'N'             . SWITCH OFF AMPERSAND FLAG
G0005    EQU   *
         MVC   0(1,R4),0(R5)            . SAVE VALUE BYTE
         LA    R3,1(,R3)                . INCREMENT BYTES
         CH    R3,=H'20'                . Q. MAX LENGTH?
         BH    G0009                    . A. TOO GREAT
         LA    R4,1(,R4)                . 4 -> NEXT OUTPUT BYTE
         LA    R5,1(,R5)                . 5 -> NEXT INPUT BYTE
         BCT   R6,G0001                 . LOOP
G0006    EQU   *
         CLI   AMPFLAG,C'Y'             . Q. AMPERSAND FOUND?
         BNE   G0007                    . A. NO
         MVI   0(R4),C'.'               . OUTPUT A PERIOD
         LA    R3,1(,R3)                . INCREMENT BYTES OUTPUT
G0007    EQU   *
         LTR   R3,R3                    . Q. ANY VALUE FOUND?
         BZ    G0010                    . A. NO
         MVC   SUBVALUE,SAVEVAL         . SAVE THE VALUE
         ST    R3,SYMBTESUBTEXTLENGTH   . STORE THE LENGTH
         LA    R1,SUBVALUE              . 1 -> SUBSTITUTION VALUE
         ST    R1,SYMBTESUBTEXTPTR      . SAVE
         DROP  R2
         DROP  R8
         L     R2,@SYMBT                . 2 -> SYMBOL ARRAY HEADER
         USING SYMBT,R2                 . DSECT MAPPING HEADER
         LH    R1,SYMBTNUMBEROFSYMBOLS  . NUMBER OF SYMBOLS IN ARRAY
         LA    R1,1(,R1)                . INCREMENT BY ONE
         STH   R1,SYMBTNUMBEROFSYMBOLS  . SAVE IT
         DROP  R2
         B     G0010
G0008    EQU   *                        . APOSTROPHE IN VALUE
         WTO   MF=(E,WTO9L)
         MVC   RETCODE,=F'8'            . SET RETURN CODE
         B     G0010
G0009    EQU   *                        . SUBSTITUTION VALUE EXCESS
         WTO   MF=(E,WTO10L)
         MVC   RETCODE,=F'8'            . SET RETURN CODE
G0010    EQU   *
         BR    R10
         TITLE 'LOOK FOR SYMBOLIC IN RECORD'
*              REGISTER USAGE
         SPACE 1
*        1                              . WORK
*                                       . USED BY TRT
*        2                              . USED BY TRT (BUT NOT REF)
*        4                              . -> ASASYMBM PARAMETER LIST
*        5                              . -> CURRENT BYTE OF RECORD
*        6                              . -> END OF RECORD
*        7                              . NUMBER OF BYTES TO SEARCH
*        9                              . LENGTH OF RETURNED DATA
*        10                             . RETURN ADDRESS
*                                       . BRANCH ADDRESS
         SPACE 2
*        THIS CODE PROCESSES THE DATA WITHIN AN INPUT RECORD,
*            LOOKING FOR ONE OF THE SPECIFIED SYMBOLICS. IF AN
*            AMPERSAND IS FOUND WITH A NON-BLANK FOLLOWING
*            IMMEDIATELY, IT IS A CANDIDATE IF BETWEEN COLS 1 && 71.
*        THE PROGRAM ASASYMBM IS THEN INVOKED TO VALIDATE THE
*            SYMBOL AND PERFORM SYMBOLIC SUBSTITUTION.
*            ASASYMBM MAY BE INVOKED MULTIPLE TIMES
*              1. DEFAULT SYMBOLS
*              2. DEFAULT SYMBOLS + USER SYMBOLS
*              3. DEFAULT + USER SYMBOLS ON MODIFIED INPUT PATTERN
         SPACE 2
SYMSERCH EQU   *
         STM   R4,R10,HSAVE             . SAVE REGISTERS
         L     R4,@SYMBP                . 4 -> ASASYMBM PARAMETER LIST
         USING SYMBP,R4                 . DSECT ADDRESSABILITY
         L     R1,@SYMBT                . 1 -> SUBSTITUTION ARRAY
         ST    R1,SYMBPSYMBOLTABLE@     . SAVE IN PARAMETER LIST
         L     R5,@RECORD               . 5 -> START OF RECORD
         ST    R5,SYMBPPATTERN@         . SAVE -> INPUT RECORD
         LA    R6,71(,R5)               . 6 -> END OF RECORD
H0001    EQU   *
         LR    R7,R6                    . 7 -> END OF RECORD
         SLR   R7,R5                    . 7 - LENGTH TO SEARCH
         EX    R7,TRTAMP                . Q. AMPERSAND FOUND?
         BZ    H0003                    . A. NO - PRINT RECORD
         CR    R1,R6                    . Q. AT END OF RECORD?
         BNL   H0003                    . A. YES - PRINT RECORD
         CLI   1(R1),C' '               . Q. AMPERSAND THEN SPACE?
         BNE   H0002                    . A. YES - CANDIDATE
         LA    R5,1(,R1)                . 5 -> NEXT BYTE TO SCAN
         B     H0001                    . CHECK FOR MORE AMPERSANDS
H0002    EQU   *
         LA    R6,WORKREC               . 6 -> SUBSTITUTION AREA
         ST    R6,SYMBPTARGET@          . SAVE ADDRESS
         MVC   SYMLENTR,=F'80'          . TARGET LENGTH INITIAL VALUE
         MVC   LINKX,LINKXL             . MOVE SF=L TO DYNAMIC
         LINKX EP=ASASYMBM,             . LINKX TO ASASYMBM            *
               MF=(E,SYMBP),                                           *
               SF=(E,LINKX)
         CLC   SYMRETCD,=F'0'           . Q. RETURN CODE ZERO?
         BNE   H0004                    . A. NO - PRINT RECORD
         L     R5,@RECORD               . 5 -> RECORD
         L     R9,SYMLENTR              . 9 - LENGTH OF RETURNED DATA
         BCTR  R9,R0                    . DECREMENT FOR EXECUTE
         EX    R9,CLCSUB                . Q. ANY SUBSTITUTION?
         BE    H0003                    . A. NO - OUTPUT RECORD
         LA    R5,WORKREC               . 5 -> SUB 1 AREA
         ST    R5,SYMBPPATTERN@         . SAVE -> INPUT RECORD
         LA    R6,SUBREC                . 6 -> SUB 2 AREA
         ST    R6,SYMBPTARGET@          . SAVE ADDRESS
         MVC   SYMLENTR,=F'80'          . TARGET LENGTH INITIAL VALUE
         MVC   LINKX,LINKXL             . MOVE SF=L TO DYNAMIC
         LINKX EP=ASASYMBM,             . LINKX TO ASASYMBM            *
               MF=(E,SYMBP),                                           *
               SF=(E,LINKX)
         CLC   SYMRETCD,=F'0'           . Q. RETURN CODE ZERO?
         BNE   H0004                    . A. NO - OUTPUT RECORD
         L     R9,SYMLENTR              . 9 - LENGTH OF RETURNED DATA
         BCTR  R9,R0                    . DECREMENT FOR EXECUTE
         EX    R9,CLCSUB                . Q. ANY SUBSTITUTION?
         BE    H0003                    . A. NO - OUTPUT RECORD
         LA    R5,SUBREC                . 5 -> SUB 2 AREA
         ST    R5,SYMBPPATTERN@         . SAVE ADDRESS
         LA    R6,SUBSUBRC              . 6 -> SUB 3 AREA
         ST    R6,SYMBPTARGET@          . SAVE ADDRESS
         MVC   SYMLENTR,=F'80'          . TARGET LENGTH INITIAL VALUE
         MVC   LINKX,LINKXL             . MOVE SF=L TO DYNAMIC
         LINKX EP=ASASYMBM,             . LINKX TO ASASYMBM            *
               MF=(E,SYMBP),                                           *
               SF=(E,LINKX)
         CLC   SYMRETCD,=F'0'           . Q. RETURN CODE ZERO?
         BNE   H0004                    . A. NO - EXIT
H0003    EQU   *
         LA    R6,DYNDCB3               . 6 -> OUTPUT DCB
         PUT   (R6),                    . WRITE OUTPUT                 *
               (R5)
H0004    EQU   *
         LM    R4,R10,HSAVE             . RESTORE REGISTERS
         BR    R10                      . RETURN TO CALLER
CLCSUB   CLC   0(*-*,R5),0(R6)          . EXECUTED COMPARE
TRTAMP   TRT   0(*-*,R5),TRTTAB         . EXECUTED TRT
         DROP  R4
         TITLE 'AMODE SWITCH ROUTINES'
*        AMODE 24 SWITCH
*        REGISTER USAGE
AMODE24  EQU   *
         N     R14,=X'00FFFFFF'         . CLEAR HIGH-ORDER BYTE
         BSM   R0,R14                   . RETURN IN AMODE 24
*        AMODE 31 SWITCH
*        REGISTER USAGE
AMODE31  EQU   *
         N     R14,=X'00FFFFFF'         . CLEAR HIGH-ORDER BYTE
         O     R14,=X'80000000'         . SET AMODE BIT
         BSM   R0,R14
         DROP  R13
         TITLE 'LIST FORMS OF MACROS'
LINKXL   LINKX SF=L                     . LINKX
LENLINKX EQU   *-LINKXL
OPENL    OPEN  (,,,,,),                 . OPEN / CLOSE                 *
               MF=L
LENOPEN  EQU   *-OPENL
READL    READ  DECBL,                   . BSAM READ                    *
               SF,                                                     *
               ,                                                       *
               ,                                                       *
               'S',                                                    *
               MF=L
LENDECB  EQU   *-READL                  . LENGTH OF DECB
*
WTO1L    WTO   'MISSING OR INVALID JOB-STEP PARAMETER',                *
               ROUTCDE=11,                                             *
               MF=L
WTO2L    WTO   'PROBLEM OCCURRED OPENING SYSIN FILE',                  *
               ROUTCDE=11,                                             *
               MF=L
WTO3L    WTO   'PROBLEM OCCURRED OPENING SYSPARM FILE',                *
               ROUTCDE=11,                                             *
               MF=L
WTO4L    WTO   'PROBLEM OCCURRED OPENING SYSPRINT FILE',               *
               ROUTCDE=11,                                             *
               MF=L
WTO5L    WTO   'SYMBOL LENGTH INVALID - &&XXXXXXXX.',                  *
               ROUTCDE=11,                                             *
               MF=L
WTO6L    WTO   'MORE THAN 128 SYMBOLS PROVIDED',                       *
               ROUTCDE=11,                                             *
               MF=L
WTO7L    WTO   'NO VALID REQUESTS ENTERED',                            *
               ROUTCDE=11,                                             *
               MF=L
WTO8L    WTO   'NO VALUE SUPPLIED WITH SYMBOL',                        *
               ROUTCDE=11,                                             *
               MF=L
WTO9L    WTO   'SUBSTITUTION VALUE CONTAINS EMBEDDED APOSTROPHE',      *
               ROUTCDE=11,                                             *
               MF=L
WTO10L   WTO   'SUBSTITUTION VALUE GREATER THAN 20 BYTES',             *
               ROUTCDE=11,                                             *
               MF=L
         TITLE 'CONSTANTS'
TRTTAB   DC    256X'00'
         ORG   TRTTAB+X'50'
         DC    X'FF'
         ORG
         TITLE 'FORM DCBS - THESE ARE MOVED TO DYNAMIC STORAGE FOR USE'
SYSIN    DCB   DDNAME=SYSIN,            . DCB FOR SYSIN                *
               DSORG=PS,                                               *
               EODAD=E0010,                                            *
               LRECL=80,                                               *
               MACRF=GM,                                               *
               RECFM=F
LENDCB1  EQU   *-SYSIN                  . LENGTH OF DCB
SYSPARM  DCB   BUFNO=1,                 . DCB FOR SYSPARM              *
               DDNAME=SYSPARM,                                         *
               DSORG=PO,                                               *
               EODAD=C0002,                                            *
               MACRF=R
LENDCB2  EQU   *-SYSPARM                . LENGTH OF DCB
SYSPRINT DCB   DDNAME=SYSPRINT,         . DCB FOR OUTPUT               *
               DSORG=PS,                                               *
               LRECL=80,                                               *
               MACRF=PM,                                               *
               RECFM=F
LENDCB3  EQU   *-SYSPRINT               . LENGTH OF DCB
         TITLE 'DSECTS && LITERAL POOL'
         DCBD  DEVD=DA,                 . DSECT MAPPING DCB            *
               DSORG=PS
         IHADECB                        . DSECT MAPPING DECB
         IEZIOB                         . DSECT MAPPING IOB
DYNAREA  DSECT                          . DYNAMIC AREA
         DS    18F                      . STANDARD OS SAVE AREA
BSAVE    DS    1F                       . REGISTER SAVE AREA
CSAVE    DS    1F                       . REGISTER SAVE AREA
ESAVE    DS    1F                       . REGISTER SAVE AREA
FSAVE    DS    5F                       . REGISTER SAVE AREA
HSAVE    DS    7F                       . REGISTER SAVE AREA
ISAVE    DS    F                        . REGISTER SAVE AREA
#PDS     DS    F                        . NUMBER OF PDS INPUT
#SYMBOLS DS    F                        . NUMBER OF SYMBOLS INPUT
#SYMBT   DS    F                        . SUBSTITUTION ARRAY SIZE
@BLK     DS    F                        . -> PDS BLOCK
@EXLST   DS    F                        . -> DCB EXIT LIST
@RECORD  DS    F                        . -> PDS RECORD
@SYMBOLS DS    F                        . -> SYMBOL ARRAY
@SYMBP   DS    F                        . -> ASASYMBM PARAMETER LIST
@SYMBT   DS    F                        . -> SUBSTITUTION ARRAY
DMALIST  DS    XL(LENOPEN)              . DATA MANAGEMENT ADDRESS LIST
EXLST    DS    F                        . DCB EXIT LIST
RETCODE  DS    F                        . RETURN CODE
SYMLENTR DS    F                        . ASASYMBM - TARGET LENGTH
SYMRETCD DS    F                        . ASASYMBM - RETURN CODE
TTR      DS    F                        . TRACK ADDRESS OF BLOCK
#BLK     DS    H                        . BLOCKSIZE OF PDS
         DS    0F
BLDL     DS    CL(LENBLDL)              . BLDL PARAMETER LIST
         DS    0F
DECBD    DS    XL(LENDECB)              . DYNAMIC DECB
         DS    0F
LINKX    DS    CL(LENLINKX)             . LINKX LIST FORM
DYNDCB1  DS    XL(LENDCB1)              . AREA FOR DYNAMIC DCB
DYNDCB2  DS    XL(LENDCB2)              . AREA FOR DYNAMIC DCB
DYNDCB3  DS    XL(LENDCB3)              . AREA FOR DYNAMIC DCB
AMPFLAG  DS    C                        . AMPERSAND FLAG
APOSFLAG DS    C                        . APOSTROPHE FLAG
SUBFLAG  DS    C                        . SUBSTITUTION VALUE FLAG
SAVESYM  DS    CL10                     . SYMBOL WORK AREA
SAVEVAL  DS    CL20                     . VALUE WORK AREA
OUTDATA  DS    CL80                     . RECORD AREA
SUBREC   DS    CL80                     . WORK RECORD AREA
SUBSUBRC DS    CL80                     . WORK RECORD AREA
WORKREC  DS    CL80                     . WORK RECORD AREA
DYNLEN   EQU   *-DYNAREA                . LENGTH OF DYNAMIC AREA
         ASASYMBP                       . PARAMETER LIST FOR ASASYMBM
SYMARRAY DSECT                          . SYMBOL ARRAY DSECT
SYMLEN   DS    F                        . LENGTH OF SYMBOL
SYMBOL   DS    CL10                     . SYMBOL VALUE
SUBVALUE DS    CL20                     . SUBSTITUTION VALUE
SYMENT   EQU   *-SYMARRAY               . LENGTH OF ONE ENTRY
*                                       . DSECT MAPPING DIRECTORY ENTRY
BLDLIST  DSECT
BLDL#ENT DS    H                        . NUMBER OF ENTRIES IN LIST
BLDLENTL DS    H                        . ENTRY LENGTH
DIRMEMNM DS    CL8                      . MEMBER NAME
DIRTTR   DS    CL3                      . TRACK AND RECORD ADDRESS FOR
*                                       .   FIRST BLOCK OF MEMBER
DIRCONCT DS    CL1                      . DATASET CONCATENATION NUMBER
DIRFIND  DS    CL1                      . FOUND FLAG
DIRFLAG  DS    CL1                      . COUNT FIELD
DIRALIAS EQU   X'80'                    . MEMBER IS AN ALIAS
DIRUDATA DS    0CL62                    . OPTIONAL USER DATA
DIRVERS  DS    XL1                      . VERSION
DIRMODL  DS    XL1                      . MODIFICATION LEVEL
         DS    XL2
DIRCDATE DS    PL4                      . CREATE DATE
DIRMDATE DS    PL4                      . MODIFICATION DATE
DIRMTIME DS    XL2                      . MODIFICATION TIME
DIRCSIZE DS    XL2                      . RECORDS - CURRENT
DIRSINIT DS    XL2                      . RECORDS - INITIAL
DIRMOD   DS    XL2                      . RECORDS - MODIFIED
DIRUSER  DS    CL8                      . USER ID
LENBLDL  EQU   *-BLDLIST                . LENGTH OF DSECT
*                                       . LITERAL POOL AND CSECT END
IEASYMBQ CSECT                          . RE-ESTABLISH CSECT
         LTORG                          . LITERAL POOL
         END


/* REXX **************************************************************/
/* You must change your.load to the name of the load library where   */
/* the IEASYMBQ program executable is stored.                        */
/* You must change your.ispplib to the name of the panel library     */
/* where the IEASYMBQ panel is stored.                               */

if sysvar(SYSISPF) <> 'ACTIVE' then
    do;
    say "This EXEC requires the ISPF environment to be active";
    exit;
    end;
address ispexec "LIBDEF ISPPLIB DATASET ID('your.ispplib')";

parmlib = '';                      /*   Get first time indicators */
address ispexec 'VGET (PRMLIB) PROFILE';
if PRMLIB <> "N" then              /*    q. First time?           */
    do;                            /*    a. Yes                   */
    PRMLIB = "N";                  /*    Not a second time        */
    PRMLB1 = "";                   /*    First parmlib            */
    PRMVL1 = "";                   /*    First volume             */
    PRMLB2 = "";                   /*    Second parmlib           */
    PRMVL2 = "";                   /*    Second volume            */
    PRMLB3 = "";                   /*    Third parmlib            */
    PRMVL3 = "";                   /*    Third volume             */
    PRMLB4 = "";                   /*    Fourth parmlib           */
    PRMVL4 = "";                   /*    Fourth volume            */
    address ispexec "VPUT",
        "(PRMLIB,PRMLB1,PRMVL1,",
                "PRMLB2,PRMVL2,",
                "PRMLB3,PRMVL3,",
                "PRMLB4,PRMVL4,",
        ") PROFILE";
    end;
address ispexec "VGET",
        "(PRMLIB,PRMLB1,PRMVL1,",
                "PRMLB2,PRMVL2,",
                "PRMLB3,PRMVL3,",
                "PRMLB4,PRMVL4,",
        ") PROFILE";
MSG="";                            /*    No message               */
BS = outtrap(FREE.);
"FREE F(SYSPRINT)";
BS = outtrap(OFF);

"ALLOC F(SYSPRINT) UNIT(VIO) SP(5 5) TR NEW LR(80)",
     "DSORG(PS) REC(B F S)";
if RC <> 0 then
    do;
    say "SYSPRINT alloc failed.  RC:" RC;
    end;
address ispexec "LMINIT DATAID("IEASYM") DDNAME(SYSPRINT)";
if RC <> 0 then
    do;
    say "LMINIT return code:" RC;
    MSG = ZERRLM;
    end;
SYMBOLS1 = "";                     /*    Remove symbols from input */
SYMBOLS2 = "";
CURPOS = "SYMBOLS1";
do forever;
    address ispexec "CONTROL DISPLAY REFRESH";
    address ispexec "DISPLAY PANEL(IEASYMBQ) CURSOR("CURPOS")";
    if RC <> 0 then               /*     Q. End requested?        */
        leave;                    /*     A. Yes - out of here     */

    msg = "";                     /*     Null out message         */
    if sysdsn(PRMLB1) <> 'OK' then
        do;
        MSG = "First parmlib not cataloged";
        CURPOS = "PRMLB1";
        end;
    if MSG = "" then
        do;                        /*   Ensure partitioned        */
        BS = listdsi(PRMLB1);
        if SYSDSORG <> "PO" then
            do;
            MSG = "First parmlib not a pds";
            CURPOS = "PRMLB1";
            end;
        end;
    if MSG = "" & PRMLB2 <> "" then
        do;
        if sysdsn(PRMLB2) <> 'OK' then
            do;
            MSG = "Second parmlib not catalogued";
            CURPOS = "PRMLB2";
            end;
                                   /*   Ensure partitioned         */
        BS = listdsi(PRMLB2);
        if SYSDSORG <> "PO" then
            do;
            MSG = "Second parmlib not a PDS";
            CURPOS = "PRMLB2";
            end;
        end;
    if MSG = "" & PRMLB3 <> "" then
        do;
        if sysdsn(PRMLB3) <> 'OK' then
            do;
            MSG = "Third parmlib not cataloged";
            CURPOS = "PRMLB3";
            end;
                                   /*   Ensure partitioned         */
        BS = listdsi(PRMLB3);
        if SYSDSORG <> "PO" then
            do;
            MSG = "Third parmlib not a PDS";
            CURPOS = "PRMLB3";
            end;
        end;
    if MSG = "" & PRMLB4 <> "" then
        do;
        if sysdsn(PRMLB4) <> 'OK' then
            do;
            MSG = "Fourth parmlib not catalogued";
            CURPOS = "PRMLB4";
            end;
                                   /*   Ensure partitioned         */
        BS = listdsi(PRMLB4);
        if SYSDSORG <> "PO" then
            do;
            MSG = "Fourth parmlib not a PDS";
            CURPOS = "PRMLB4";
            end;
        end;
    if MSG = "" then
        do;
        address ispexec "CONTROL ERRORS RETURN";
        BS = outtrap(FREE.);
        "FREE F(SYSPARM)";
        "ALLOC F(SYSPARM) DA("PRMLB1 PRMLB2 PRMLB3 PRMLB4") SHR REU";
        if RC <> 0 then
            do;
            MSG = "Unable to allocate PARMLIBS";
            CURPOS = "PRMLB1";
            end;
        BS  = outtrap(OFF);
        end;
    if MSG = "" then
        do;
        address ispexec "VPUT",
                "(PRMLB1,PRMVL1,",
                 "PRMLB2,PRMVL2,",
                 "PRMLB3,PRMVL3,",
                 "PRMLB4,PRMVL4,",
                ") PROFILE";
        end;
    if MSG = "" then
        do;
        queue SYMBOLS1;
        if SYMBOLS2 <> "" then
            do;
            queue SYMBOLS2;
            end;
        queue "";
        BS = outtrap(FREE.);
        "FREE F(SYSIN)";
        BS = outtrap(OFF);
        "ALLOC F(SYSIN) UNIT(VIO) SP(1) TR NEW LR(80) REC(F)";
        "EXECIO * DISKW SYSIN (FINIS";
        "CALL 'your.load(IEASYMBQ)' '"MEMBER"'";
        if RC = 0 then
            do;
            address ispexec "BROWSE DATAID("IEASYM")";
            if RC <> 0 then
                do;
                say "BROWSE return code:" RC;
                end;
            end;
        else
            do;
            MSG = "Error occurred in executing program";
            end;
        "FREE F(SYSIN)";
        "ALLOC F(SYSIN) DA(*)";
        SYMBOLS1 = "";         /*     Remove symbols from input */
        SYMBOLS2 = "";
        MEMBER = "";           /*    Remove member from input */
        CURPOS = "SYMBOLS1";
        end;
end;
address ispexec "LMFREE DATAID("IEASYM")";
if RC <> 0 then
    do;
    say "LMFREE return code:" RC;
    end;
BS = outtrap(FREE.);
"FREE F(SYSPARM SYSPRINT)";
BS  = outtrap(OFF);
"ALLOC F(SYSPRINT) DA(*)";
exit;


)ATTR
    ^ TYPE(OUTPUT) INTENS(HIGH)
)BODY
%ÑÑÑÑÑÑÑÑÑÑÑÑÑ Parmlib Symbolic Change Impact ÑÑÑÑÑÑÑÑÑÑ-
% COMMAND ===>_ZCMD                                   +  Date &ZDATE
%   -MSG                                                %Time &ZTIME
% Enter symbols ===>_SYMBOLS1                                     +
% Values must be provided.  For example: SYSPLEX=PRDPLEX
% More symbols  ===>_SYMBOLS2                                     +
%
% MEMBER to be processed    ===>_MEMBER                           +
%
% PARMLIB to be searched    ===>_PRMLB1                           +
%
% PARMLIB to be searched    ===>_PRMLB2                           +
%
% PARMLIB to be searched    ===>_PRMLB3                           +
%
% PARMLIB to be searched    ===>_PRMLB4                           +
%
%
%
%
%
%
%                 +Press %END KEY+to return to previous panel
)INIT
  &ZCMD = ' '
)PROC
   VER (&SYMBOLS1,NB)
   VER (&MEMBER,NB)
   VER (&PRMLB1,NB)
)END
Dispay WTORs in TSO



                  WTOR Information                         Row 1 to 2 of 2
Command ===>                                               Scroll ===> PAGE
            
Current number of WTOR's outstanding ===> 2
            
Enter command REPLY if you wish to either respond to a message
or you wish to enter any other operator command.
            
Type FLIP if you wish to see any more of the message.
            
JOBNAME  JOBID    USERID   TIME      MESSAGE
PRODVSV  STC17662 PRODVSV  21.21.46  *12 VSVNMF0170I REPLY "STOP" TO TERMINA
NETVIEW  STC17949 NETVIEW  21.25.09  *08 DSI802A CNM50   REPLY WITH VALID NC
**************************** Bottom of data ****************************


                  WTOR Information                         Row 1 to 2 of 2
Command ===>                                               Scroll ===> PAGE
            
Current number of WTOR's outstanding ===> 2
            
Enter command REPLY if you wish to either respond to a message
or you wish to enter any other operator command.
            
Type FLIP if you wish to see any more of the message.
            
MESSAGE
*12 VSVNMF0170I REPLY "STOP" TO TERMINATE PRODUCT
*08 DSI802A CNM50   REPLY WITH VALID NCCF SYSTEM OPERATOR COMMAND
******************************** Bottom of data ****************************



                                MACRO                                                                   
                    REXREGS                                                                 
                    LCLA &CNT                                                               
            &CNT    SETA 0                                                                  
            .LOOP   ANOP                                                                    
            R&CNT   EQU &CNT                                                                
            &CNT    SETA &CNT+1                                                             
                    AIF (&CNT LT 16).LOOP                                                   
                    MEND


        MACRO                                                                   
        SHOW &LABEL,&ASNAME,&ERR=ABEND001,&LEN=,&UNPACK=NO                      
***********************************************************************         
*                                                                               
* MACRO FORMAT:                                                                 
*       SHOW &LABEL,&ASNAME,&ERR=,&LEN=,&UNPACK=                                
* WHERE:                                                                        
*       &LABEL IS THE NAME OF THE LABEL THAT ADDRESSES THE FIELD FROM            
*              WHERE THE DATA TO BE DEFINED IN A REXX VARIABLE IS               
*              LOCATED                                                          
*       &ASNAME IS THE NAME TO BE ASSIGNED TO THE DATA FOR USE IN REXX          
*       &ERR= IS THE LABEL TO BRANCH TO SHOULD AN ERROR OCCUR WHILE             
*             CREATING THE REXX VARIABLE. BY DEFAULT IT IS ABEND001             
*       &LEN= IF THE DATA AT &LABEL IS NOT DEFINED SUCH THAT THE LENGTH         
*             OF THE DATA IS WHAT YOU WANT, SIMPLY ENTER A NUMBER HERE          
*             THAT DEFINES THE LENGTH REQUIRED. CAN ALSO BE USEFUL IF           
*             NECESSARY TO DUMP OUT A LARGE AREA.                               
*       &UNPACK= IF THE DATA IS IN PACKED FORMAT, SET THIS TO YES IF            
*             YOU WANT THE AREA UNPACKED FOR YOU. THE DEFAULT IS NO.            
*                                                                               
**********************************************************************          
        SHOWSET                                                                 
LITLOC  LOCTR                                                                   
&LABCHECK SETC '@_&ASNAME'                                                      
         AIF   (D'&LABCHECK).BYPASS                                             
@_&ASNAME DC C'&ASNAME'                                                         
.BYPASS ANOP                                                                    
&SYSECT LOCTR                                                                   
        LA 1,@_&ASNAME                                                          
        ST 1,SHVNAMA                                                            
        LA 1,L'@_&ASNAME                                                                                                                 
        ST 1,SHVNAML                                                            
        AIF ('&UNPACK' EQ 'NO').DATAAOK                                         
        UNPK @_UNPACK,&LABEL                                                    
        OI @_UNPACK+(L'@_UNPACK-1),X'F0'                                        
        LA 1,@_UNPACK                                                           
        ST 1,SHVVALA                                                            
        LA 1,L'@_UNPACK                                                         
        AGO .OK                                                                 
.DATAAOK ANOP                                                                   
        LA 1,&LABEL                                                             
        ST 1,SHVVALA                                                            
        AIF (T'&LEN NE 'O').DOLEN                                               
        LA 1,L'&LABEL                                                           
        AGO .OK                                                                 
.DOLEN  ANOP                                                                    
        LA 1,&LEN                                                               
.OK     ANOP                                                                    
        ST 1,SHVVALL                                                            
        LR 0,10                                                                 
        LA 1,COMS                                                               
        L 15,IRXEXCOM                                                           
        BALR 14,15                                                              
        LTR 15,15                                                               
        BNZ &ERR                                                                
        MEND            


        MACRO                                                                   
        SHOWARAY &LABEL,&ASNAME,&ERR=ABEND001,&LEN=,&SUBARRAY=,&DEBIN=          
***********************************************************************         
*                                                                               
* MACRO TO CREATE REXX ARRAY VARIABLES                                          
*                                                                               
* NOTE RESTRICTION: THIS MACRO IS LIMITED TO CREATING UP TO 9,999,999           
*                   ENTRIES FOR EACH ARRAY.                                     
*                                                                               
* MACRO FORMAT:                                                                 
*       SHOWARAY &LABEL,&ASNAME,&ERR=,&LEN=,&SUBARRAY=,&DEBIN=                  
* WHERE:                                                                        
*       &LABEL IS THE NAME OF THE LABEL THAT ADDRESSES THE FIELD FROM            
*              WHERE THE DATA TO BE DEFINED IN A REXX VARIABLE IS               
*              LOCATED                                                          
*       &ASNAME IS THE NAME TO BE ASSIGNED TO THE DATA FOR USE IN REXX          
*       &ERR= IS THE LABEL TO BRANCH TO SHOULD AN ERROR OCCUR WHILE             
*             CREATING THE REXX VARIABLE. BY DEFAULT IT IS ABEND001             
*       &LEN= IF THE DATA AT &LABEL IS NOT DEFINED SUCH THAT THE LENGTH         
*             OF THE DATA IS WHAT YOU WANT, SIMPLY ENTER A NUMBER HERE          
*             THAT DEFINES THE LENGTH REQUIRED. CAN ALSO BE USEFUL IF           
*             NECESSARY TO DUMP OUT A LARGE AREA.                               
*       &SUBARRAY= IF A MULTI LEVEL ARRAY IS REQUIRED EG A.1.1 THEN             
*                  SET THIS VALUE ACCORDINGLY.                                  
*       &DEBIN= IF THE DATA TO BE CREATED IS BINARY, SETTING THIS TO A          
*               VALUE WILL CONVERT THE SPECIFIED NUMBER OF BYTES FROM           
*               BINARY TO CHARACTER. THE DEFAULT LENGTH FOR THE                 
*               OUTPUT DATA IS 4 BYTES. IF THIS IS INSUFFICIENT, THEN           
*               SPECIFY A SUITABLE &LEN VALUE TO OVERRIDE IT.                   
*                                                                               
**********************************************************************          
        AIF (T'&DEBIN EQ 'O').NOLCS                                             
        LCLC &ARRAY(4)                                                          
        LCLA &DEFLEN                                                            
&DEFLEN SETA 4   * SET THE DEFAULT OUTPUT LENGTH TO 4 (BIN CONVERSION)          
&ARRAY(1) SETC '1'                                                              
&ARRAY(2) SETC '3'                                                              
&ARRAY(3) SETC '7'                                                              
&ARRAY(4) SETC '15'                                                             
.NOLCS  ANOP                                                                    
        SHOWSET                                                                 
LITLOC  LOCTR                                                                   
&LABCHECK SETC '@_&ASNAME&SUBARRAY'                                             
         AIF   (D'&LABCHECK).BYPASS                                             
         AIF   (T'&SUBARRAY EQ 'O').NORMNAME                                    
&LABCHECK DC C'&ASNAME..&SUBARRAY'                                              
         AGO   .EOFARRAY                                                        
.NORMNAME ANOP                                                                  
&LABCHECK DC C'&ASNAME'                                                         
.EOFARRAY ANOP                                                                  
&LABCHECK._ARRAY DC C'.       '                                                 
&LABCHECK._COUNTER DC PL4'0' * COUNTER FIELD FOR THIS ITEM                      
         AIF   (D'@_UNPACKER).BYPASS                                            
@_UNPACKER DC CL8' ' * UNPACK FIELD FOR COUNTER                                 
          DC CL8' '         * BLANKS FOR FILL DETAILS                           
@_DWORD  DS CL8 * 8 BYTE WORKAREA FOR BINARY CONVERSION                         
.BYPASS  ANOP                                                                   
&SYSECT LOCTR                                                                   
        AP &LABCHECK._COUNTER,=P'1' * INCREMENT THE COUNTER THIS PASS           
        UNPK @_UNPACKER,&LABCHECK._COUNTER * UNPACK THE VALUE                   
        OI   @_UNPACKER+7,X'F0'       * REMOVE THE SIGN                         
* NOW NEED TO WORK OUT THE LENGTH OF THE COUNTER BIT TO ADD TO ARRAY            
        L    R15,&LABCHECK._COUNTER * LOAD THE COUNTER VALUE TO WORK            
*                                    OUT THE LENGTH                             
        SRL  R15,4                 * REMOVE THE SIGN                            
        XR   R14,R14               * CLEAR R14 FOR A COUNTER                    
LOOP&SYSNDX DS 0H                                                               
        SRA  R15,4                 * MOVE DIGIT BY DIGIT                        
        LTR  R15,R15                                                            
        BZ   COUNT&SYSNDX                                                       
        LA   R14,1(,R14)                                                        
        B    LOOP&SYSNDX                                                        
COUNT&SYSNDX DS 0H                                                              
* NOW ADD COUNT FIELD TO NAME                                                   
        LA  R15,@_UNPACKER+7        * POINT TO END OF FIELD                     
        SR  R15,R14                * AND COME BACK TO FIRST DIGIT.              
        MVC &LABCHECK._ARRAY+1(7),0(R15)                                        
        LA 1,&LABCHECK                                                          
        ST 1,SHVNAMA                                                            
* NOW CALCULATE NEW LENGTH                                                      
        LA 1,L'&LABCHECK                                                        
        LA 1,2(R14,R1)                                                          
        ST 1,SHVNAML                                                            
        AIF (T'&DEBIN EQ 'O').NORMLAB                                           
*                                                                               
*** NOW ALLOW FOR A BINARY CONVERSION                                           
*                                                                               
        XR R15,R15                                                              
        ICM R15,&ARRAY(&DEBIN),&LABEL * LOAD THE BINARY VALUE                   
        CVD R15,@_DWORD               * CONVERT TO PACKED                       
        OI  @_DWORD+7,X'0F'                                                     
        UNPK @_UNPACKER,@_DWORD                                                 
*                                                                               
*** IF THE LEN VALUE IS SUPPLIED THIS OVERRIDES THE DEFAULT OF 4                
*                                                                               
        AIF (T'&LEN EQ 'O').SETDEF  * LENGTH NOT SUPPLIED USE DEFLEN            
&DEFLEN SETA &LEN                   * RESET DEFLEN TO SUPPLIED LEN              
.SETDEF ANOP                                                                    
        LA R1,@_UNPACKER+(8-&DEFLEN)                                            
        ST R1,SHVVALA                                                           
        LA R1,&DEFLEN                                                           
        AGO .OK                                                                 
.NORMLAB ANOP                                                                   
        LA 1,&LABEL                                                             
        ST 1,SHVVALA                                                            
        AIF (T'&LEN NE 'O').DOLEN                                               
        LA 1,L'&LABEL                                                           
        AGO .OK                                                                 
.DOLEN  ANOP                                                                    
        LA 1,&LEN                                                               
.OK     ANOP                                                                    
        ST 1,SHVVALL                                                            
        LR 0,10                                                                 
        LA 1,COMS                                                               
        L 15,IRXEXCOM                                                           
        BALR 14,15                                                              
        LTR 15,15                                                               
        BNZ &ERR                                                                
        MEND                                                                


        MACRO                                                                   
        SHOWBASE &LABEL,&ERR=ABEND001,&SUBARRAY=                                
***********************************************************************         
*                                                                               
* MACRO TO CREATE REXX BASE VARIABLES                                           
* SHOULD BE USED IN ASSOCIATION WITH A SHOWARAY MACRO. NOTE THAT A              
* SHOWBASE MACRO IS OPTIONAL IF YOU ALREADY KNOW THE NUMBER OF                  
* VARAIABLES BEING SET. THIS WILL CREATE THE A.0 ENTRY                          
*                                                                               
* MACRO FORMAT:                                                                 
*       SHOWBASE &LABEL,&ERR=,&SUBARRAY=                                        
* WHERE:                                                                        
*       &LABEL IS THE NAME OF THE REXX ARRAY LABEL WHICH HAS BEEN               
*              CREATED. THIS WILL CREATE THAT LABEL.0 ENTRY                     
*       &ERR= IS THE LABEL TO BRANCH TO SHOULD AN ERROR OCCUR WHILE             
*             CREATING THE REXX VARIABLE. BY DEFAULT IT IS ABEND001             
*       &SUBARRAY= IF SUBARRAYS HAVE BEEN USED THIS WILL INSERT THE             
*                  APPROPRIATE VALUE EG A.1.0                                 
*                                                                               
**********************************************************************          
        SHOWSET                                                                 
        AIF (T'&SUBARRAY EQ 'O').NORMNAME                                       
&ASNAME   SETC '&LABEL..&SUBARRAY..0'                                           
        AGO .CHECKER                                                            
.NORMNAME ANOP                                                                  
&ASNAME   SETC '&LABEL..0'                                                      
.CHECKER  ANOP                                                                  
&LABCHECK SETC '@_&LABEL&SUBARRAY._COUNTER'                                     
        AIF (D'&LABCHECK).ITSOK                                                 
MNOTE   NO ARRAY ELEMENTS DEFINED.                                              
        MEXIT                                                                   
.ITSOK  ANOP                                                                    
LITLOC  LOCTR                                                                   
@_A&SYSNDX DC C'&ASNAME'                                                        
        AIF (D'@_UNPACKER).BYPASS                                               
@_UNPACKER DC CL8' '                                                            
.BYPASS ANOP                                                                    
&SYSECT LOCTR                                                                   
        LA 1,@_A&SYSNDX                                                         
        ST 1,SHVNAMA                                                            
        LA 1,L'@_A&SYSNDX                                                       
        ST 1,SHVNAML                                                            
        LA  1,L'&LABCHECK                                                       
        BCTR 1,0                                                                
        LA  15,&LABCHECK                                                        
        LA  1,0(15,1)                                                           
        OI  0(1),X'0F'                                                          
        UNPK @_UNPACKER,&LABCHECK                                               
        LA 1,@_UNPACKER                                                         
        ST 1,SHVVALA                                                           
        LA 1,L'@_UNPACKER                                                       
        ST 1,SHVVALL                                                            
        LR 0,10                                                                 
        LA 1,COMS                                                               
        L 15,IRXEXCOM                                                           
        BALR 14,15                                                              
        LTR 15,15                                                               
        BNZ &ERR                                                                
        MEND                                                                


        MACRO                                                                   
        SHOWSET                                                                 
        AIF (D'SHOW_START).NONEED                                               
        B  BY_SHOW_START                                                        
SHOW_START DS 0H                                                                
        ST R10,COMRET                                                           
        LA 6,COMSHVB                                                            
        USING SHVBLOCK,R6                                                       
        XC COMSHVB(SHVBLEN),COMSHVB                                             
        XC SHVNEXT,SHVNEXT                                                      
        MVI SHVCODE,C'S'                                                        
        BR 14                                                                   
BY_SHOW_START DS 0H                                                             
LITLOC  LOCTR                                                                   
@_UNPACK DC CL16' '                                                             
&SYSECT LOCTR                                                                   
.NONEED ANOP                                                                    
        BAL 14,SHOW_START                                                       
        MEND                      


***********************************************************************         
*                                                                               
* WTOLIST: A REXX FUNCTION TO LIST OUT WTOR DETAILS                             
*                                                                               
* USAGE: CALL WTOLIST                                                           
*                                                                               
* NOTE:  WTOLIST WILL RETURN THE FOLLOWING INFORMATION:                         
*        JOB_NAME.X ............ JOB NAME OF WTOR ISSUER                        
*        JOB_ID.X .............. JOB ID OF WTOR ISSUER                          
*        USER_ID.X ............. RACF USER ID OF JOB SUBMITTER                  
*        REPLY_ID.X ............ REPLY NUMBER FOR MESSAGE                       
*        XMEM_DATA ............. COULD BE YES OR NO. IF YES THEN                
*                                THE ACTUAL WTOR MESSAGE WILL ALSO              
*                                BE RETRIEVED                                   
*        WTOR_MESSAGE.X ........ ASSOCIATED MESSAGE DATA.                       
*        RC .................... COULD BE ZERO OR 4. IF 4 THEN NO               
*                                DATA AT ALL IS RETURNED.                       
*                                                                               
* NOTE ALSO THAT THIS PROGRAM HAS A CUT-OUT OF 100 MAXIMUM WTOR                 
* ENTRIES JUST IN CASE.                                                         
*                                                                               
***********************************************************************         
WTOLIST TITLE 'REXX FUNCTION TO RETRIEVE WTOR INFORMATION'                       
WTOLIST  AMODE 31                                                                
WTOLIST  RMODE ANY                                                               
WTOLIST  CSECT                                                                   
SVCAUTH  EQU 235     <=== set to your apf on SVC                                                                 
SVCDAUTH EQU 236     <=== set to your apf off SVC                                                            
         REXREGS                                                                 
         PRINT GEN                                                               
         BAKR 14,0                                                               
         LR   12,15                                                              
         USING WTOLIST,12                                                        
         PRINT GEN                                                              
         LR    R10,R0                  *R10 -> A(ENVIRONMENT BLOCK)            
         USING ENVBLOCK,R10                                                     
         L     R9,ENVBLOCK_IRXEXTE     *R9 -> A(EXTERNAL EP TABLE)             
                     USING IRXEXTE,R9                                                       
*                                                                               
* GET A WORK AREA FOR REXX OUTPUT                              
* MAP WITH R2 ... NEED TO DO THIS BEFORE ANY ROUTING TO POSSIBLE                
* REXX VARIABLE OUTPUT (EG ROUTINE ABEND001)                                  
*                                                                               
         STORAGE OBTAIN,LENGTH=AREALEN,ADDR=(2),LOC=BELOW                       
*                                                                               
         USING WORKAREA,2                                                       
*                                                                               
* PREPARE THE REXX AREA FOR USE                                                 
*                                                                               
         XC  COMS(COMSLEN),COMS * SET TO LOW VALUES                             
         LA  15,COMID                                                           
         ST  15,COMS                                                            
         LA  15,COMDUMMY                                                        
         ST  15,COMS+4                                                          
         ST  15,COMS+8                                                          
         LA  15,COMSHVB                                                         
         ST  15,COMS+12                                                         
         LA  15,COMRET                                                          
         ST  15,COMS+16                                                         
         OI  COMS+16,X'80'                                                      
         MVC COMID,=C'IRXEXCOM'                                                 
*                                                                               
*** LOCATE THE CVT                                                              
*                                                                               
         XR   3,3                                                               
         USING PSA,3                                                            
         L    3,FLCCVT                                                          
         USING CVT,3                                                            
*                                                                               
* NOW FIND THE UCM                                                              
*                                                                               
         L    3,CVTCUCB                                                         
         USING UCM,3                                                            
*                                                                               
* NOW COMMENCE CHAINING THROUGH THE ORE'S                                       
* FIRST CHECK IF THERE ARE ANY THERE (RPYQ=0 MEANS NONE).                       
*                                                                               
         CLC   UCMRPYQ,=F'0'                                                    
         BE    SETRC4                                                           
*                                                                               
*** ASSUMING THERE ARE MESSAGE, LETS GO HAVE A NOSEY IN THE CONSOLE              
*** ADDRESS SPACE AND SEE WHAT THEY ARE                                         
*                                                                               
         L     R4,UCMASCB    * GET THE CONSOLE ADDRESS SPACE ASCB               
         USING ASCB,R4       * AND MAP IT                                       
         L     R4,ASCBASSB   * NOW GET THE ASSB FOR THE TOKEN                   
         USING ASSB,R4                                                          
*                                                                               
         L     R3,UCMRPYQ                                                       
         USING OREF,3                                                           
*                                                                               
* WILL NEED TO BE AUTHORIZED TO RETRIEVE DATA                                   
*                                                                               
         SVC SVCAUTH
*                                                            
         MODESET KEY=ZERO,MODE=SUP
*                                              
         ALESERV ADD,ALET=ASALET,STOKEN=ASSBSTKN,CHKEAX=NO
*                      
         LTR 15,15 * DID THE LINK TO CONSOLE WORK?                              
         BZ  SETYES *   YES TO SO AN OK FLAG FOR RETRIEVING DATA.
*               
         MVI YESFLAG,C'N' * OTHERWISE SET NO.                                   
         B   PREP_LOOP
*                                                          
SETYES   DS 0H                                                                  
         MVI YESFLAG,C'Y' * SET YES                                             
         LAM  R0,R15,FULL_WORDS * AND ENSURE ACCESS REGISTER PREPARED           
         LAM  R8,R8,ASALET      * AND USE 8 FOR ACCESS                          
*                                                                               
PREP_LOOP  DS 0H                                                                
         LA    R4,100   * SET A BREAKOUT COUNTER
*                                
LOOP     DS   0H                                                                
         LOCASCB ASID=OREASID  * FIND THE ASCB FOR THE ASID
*             
         LTR 15,15                                                      
         BNZ SKIPIT                                                     
         LR  7,1        * SWAP R1 TO R7 FOR MAPPING PURPOSES                    
         USING ASCB,R7                                                  
         IAZXJSAB READ,ASCB=(7),JOBID=JOBIDIT,JOBNAME=THISJOB,         X        
               USERID=THISUSER                                                  
*                                                                               
         LTR 15,15      * NO DETAILS FOUND?                                     
         BNZ SKIPIT 
*                                                            
         SHOWARAY THISJOB,JOB_NAME                                              
         SHOWARAY JOBIDIT,JOB_ID                                                
         SHOWARAY THISUSER,USER_ID                                              
         SHOWARAY OREID,REPLY_ID                                                
*                                                                               
         CLI YESFLAG,C'Y'      * IS CROSS MEMORY POSSIBLE?                      
         BNE SKIPIT                                                             
*                                                                               
***      CROSS MEMORY IS POSSIBLE, SO LETS GET THE INFO                         
*                                                                               
         XC WTORINFO,WTORINFO   * CLEAR OUT THE RETURN WORK AREA                
*                                                                               
         L  R8,ORERWQE          * NOW ADDRESS THE COSOLE WTOR                   
*                                                                               
         SAC 512                * ACTIVATE CROSS MEMORY                         
         MVC WTORINFO,32(8)     * THE ACTUAL WTOR IS 32 BYTES IN                
         SAC 0                                                                  
*                                                                               
         SHOWARAY WTORINFO,WTOR_MESSAGE                                         
*                                                                               
SKIPIT   DS 0H                                                                  
         CLC  ORELKP,=F'0' * ALL DONE                                           
         BE   SETBASE      * YES SO END JOB CODE 0                              
*                                                                               
         L    3,ORELKP                                                          
         BCT 4,LOOP                                                             
*                                                                               
*** IF ALL THE ENTRIES HAVE BEEN DISPLAYED, USE JOBNAME AS A BASE               
*                                                                               
SETBASE  DS 0H                                                                  
*                                                                               
         SHOWBASE JOB_NAME                                                      
*                                                                               
*** SET A COMPLETION RC OF 0                                                    
*                                                                               
         SHOW RC0,RC                                                            
*                                                                               
         CLI YESFLAG,C'Y'                                                       
         BNE NOXMEM                                                             
*                                                                               
         SHOW YES,XMEM_DATA                                                     
*                                                                               
         ALESERV DELETE,ALET=ASALET                                             
*                                                                               
         B CLEAN_UP                                                             
*                                                                               
NOXMEM   DS 0H                                                                  
*                                                                               
         SHOW NO,XMEM_DATA                                                      
*                                                                               
CLEAN_UP DS 0H                                                                  
*                                                                               
         MODESET KEY=NZERO,MODE=PROB                                            
         SVC SVCDAUTH                                                           
*                                                                               
RETURN   DS 0H                                                                  
*                                                                               
         STORAGE RELEASE,LENGTH=AREALEN,ADDR=(2)                                
         PR                                                                     
*                                                                               
SETRC4   DS 0H                                                                  
*                                                                               
*** SET A COMPLETION RC OF 4 NO ORES EXIST.                                     
*                                                                               
         SHOW RC4,RC                                                            
         B RETURN                                                                                                                                  
*                                                                               
ABEND001 DS    0H                                                               
         ABEND 1                                                                
*                                                                               
***********************************************************************         
***      WORKING STORAGE ETC                                        ***         
***********************************************************************         
*                                                                               
         TITLE  'WORKING STORAGE / DSECTS'                                      
         LTORG                                                                  
RC0      DC C'0'                                                                
RC4      DC C'4'                                                                
YES      DC C'YES'                                                              
NO       DC C'NO'                                                               
FULL_WORDS DC 16F'0'                                                            
*                                                                               
WORKAREA DSECT                                                                  
*                                                                               
*      IRXEXCOM PARAMETER AREA                                                  
*                                                                               
         DS  0D                                                                 
COMS     DS  5AL4                                                               
COMID    DS  CL8                                                                
COMDUMMY DS  AL4              * NOT USED                                        
COMSHVB  DS  (SHVBLEN)X       * IRXEXCOM SHVBLOCK (LENGTH FROM DSECT)           
COMRET   DS  AL4              * IRXECOM RC                                      
         DS  0D                                                                 
COMSLEN  EQU *-COMS                                                             
JOBIDIT  DS D                                                                   
THISJOB  DS D                                                                   
THISUSER DS D                                                                   
ASALET   DS F                                                                   
WTORINFO DS CL40                                                                
YESFLAG  DS C                                                                   
AREALEN  EQU *-WORKAREA                                                         
         IHAPSA                                                                 
         CVT DSECT=YES                                                          
         IAZJSAB                                                                
         IHAORE                                                                 
         IEECUCM                                                                
         IHAASCB                                                                
         IHAASSB                                                                
         IHAASVT                                                                
         IARRCE                                                                 
         IRXEFPL                                                                
         IRXARGTB                                                               
         IRXEVALB                                                               
         IRXENVB                                                                
         IRXEXTE                                                                
         IRXSHVB                                                                
         END                                                                    


/* REXX */                                                                      
/* */                                                                           
/* Prepare a table for display purposes */                                       
default_panel=WTOLSTP1 /* set default display format */                         
ADDRESS ISPEXEC                                                                 
looper:                                                                         
'TBCREATE WTO NAMES(jobname jobid userid time message),                         
NOWRITE REPLACE'                                                               
/* */                                                                           
/* Call Assembler support routine to obtain relevant information */             
/* about the WTOR situation                                       */            
/* */                                                                           
CALL WTOLIST                                                                    
/* */                                                                           
/* Now loop around to list all the WTO items in table form */                     
/* */                                                                           
IF RC=4 THEN DO                                                                 
   zedsmsg='No outstanding WTORS'                                               
   zedlmsg='There are no WTOR"s to display'                                     
   'SETMSG MSG(ISRZ001)'                                                        
   EXIT                                                                         
   END                                                                          
numwtor=STRIP(job_name.0,'L','0')                                               
DO x=1 TO job_name.0                                                            
jobname=job_name.x                                                              
jobid=job_id.x                                                                  
userid=user_id.x                                                                
IF xmem_data='YES' THEN DO /* if the message has also been retrieved */         
   message=wtor_message.x                                                       
   time=wtor_time.x                                                             
   END                                                                          
ELSE message='Cross memory failure'                                             
'TBADD WTO'                                                                     
END                                                                             
'TBTOP WTO'                                                                     
'TBDISPL WTO PANEL('default_panel')'                                            
IF reply='END' then EXIT                                                        
UPPER zcmd                                                                      
IF zcmd='REPLY' THEN CALL response_panel                                        
IF zcmd='FLIP' THEN DO                                                          
  IF default_panel='WTOLSTP1' THEN default_panel='WTOLSTP2'                     
  ELSE default_panel='WTOLSTP1'                                                 
  END                                                                           
SIGNAL looper                                                                   
response_panel:                                                                 
zwinttl='Enter command to be issued'                                            
'ADDPOP ROW(1) COLUMN(1)'                                                       
'DISPLAY PANEL(WTOREP1)'                                                        
'REMPOP'                                                                        
IF reply='END' THEN RETURN                                                      
CALL REXWTO literal                                                             
RETURN                   


)Attr Default(%+_)                                                              
   ! type(output) intens(high) caps(on ) just(left )                            
   @ type(output) intens(low ) caps(off) just(asis )                            
)Body  Expand(//)                                                               
/ /%WTOR Information for lpar / /                                      
%Command ===>_zcmd                                 / /%Scroll ===>_amt +        
+                                                                               
+Current number of WTORs outstanding ===>!numwtor+                             
+                                                                               
+Enter command%REPLY+ if you wish to either respond to a message                
+or you wish to enter any other operator command.                               
+                                                                               
+Type%FLIP+if you wish to see more of the message.                              
+                                                                               
JOBNAME  JOBID    USERID    TIME      MESSAGE                                  
)Model                                                                          
!z       !z       !z        !z        !z                                        
)Init                                                                           
  .HELP = WTOLSTH1                                                              
  .ZVARS = '(jobname jobid userid time message)'                                
  &amt = PAGE                                                                   
)PROC                                                                           
&REPLY = .RESP                                                                  
)End                                                                            


)Attr Default(%+_)                                                              
   ! type(output) intens(high) caps(on ) just(left )                            
   @ type(output) intens(low ) caps(off) just(asis )                            
)Body  Expand(//)                                                               
/ /%WTOR Information for lpar / /                                      
%Command ===>_zcmd                                 / /%Scroll ===>_amt +        
+                                                                               
+Current number of WTOR's outstanding ===>!numwtor+                             
+                                                                               
+Enter command%REPLY+ if you wish to either respond to a message                
+or you wish to enter any other operator command.                               
+                                                                               
+Type%FLIP+if you wish to more information about the message.                   
+                                                                               
 MESSAGE                                                                        
)Model                                                                          
!z                                                                              
)Init                                                                           
  .HELP = WTOLSTH2                                                              
  .ZVARS = '(message)'                                                          
  &amt = PAGE                                                                   
)PROC                                                                           
&REPLY = .RESP                                                                  
)End                                


)BODY                                                                           
'------- Help Panel For WTOR list ---------------        
+                                                                               
+This panel displays all the outstanding WTOR's on the system.                  
+                                                                               
+The display consists of 5 columns.                                             
+Column 1, JOBNAME is the name of the job issuing the WTOR.                     
+Column 2, JOBID is the JES2 job number for the issuer.                         
+Column 3, USERID is the RACF userid for the issuer.                            
+Column 4, TIME is the time the WTOR was issued.                                
+Column 5, MESSAGE is the actual WTOR. Note only part of the message is         
+          shown because of screen sizes. Please type%FLIP+to use the           
+          alternative screen display to see more of the message.               
+                                                                               
+If you wish to respond to any of the messages, or if you just wish to          
+enter any other operator command, then simply type REPLY on the command        
+line and a pop-up panel will be shown to allow a command to be entered.        
+Note though that you will need the necessary RACF authority to actually        
+be able to get the command to work.                                            
)PROC                                                                           
.help=isp00004                                                                  
)END                        


)BODY                                                                           
'------- Help Panel For WTOR list ---------------        
+                                                                               
+This panel displays all the outstanding WTOR's on the system.                  
+                                                                               
+The display lists out all the outstanding WTORS on the system.                 
+                                                                               
+To see who issued the messages and when, type%FLIP+for the alternative         
+screen layout.                                                                 
+                                                                               
+If you wish to respond to any of the messages, or if you just wish to          
+enter any other operator command, then simply type REPLY on the command        
+line and a pop-up panel will be shown to allow a command to be entered.        
+Note though that you will need the necessary RACF authority to actually        
+be able to get the command to work.                                            
)PROC                                                                           
.help=isp00004                                                                  
)END              


)Attr Default(%+_)                                                              
)Body Window(74,1)                                                              
%>_literal                                                                      
)init                                                                           
.help=wtoreph                                                                   
)proc                                                                           
&reply=.resp                                                                    
VER (&literal,NB)                                                               
)End


)BODY                                                                           
'------- Help Panel For REPLY command ------------        
+                                                                               
+Please enter a command to be issued to the system.                             
+                                                                               
+If it is a reply to a message as shown on the WTOR screen, then enter          
+the number on the message as shown followed by the reply.                      
+                                                                               
+Otherwise if you just wish to enter a command simply type the command          
+to be issued.                                                                  
                                                                                            
 Press PF3 if you do not wish to issue a command.                               
+                                                                               
+                                                                               
+Note that you will need the necessary authority in RACF OPERCMDS for           
+the command to actually be issued.                                             
)PROC                                                                           
.help=isp00004                                                                  
)END  


//STEP01   EXEC PGM=GIMSMP,PARM='PROCESS=WAIT',REGION=8M    
//*                                                         
//SMPCSI   DD DISP=SHR,DSN=SMAINT.COBOL2.V140.GLOBAL.CSI    
//*                                                         
//SYSPRINT DD SYSOUT=*                                      
//*                                                         
//SMPCNTL  DD *                                             
   SET BDY(TARGET) .                                        
       APPLY                        
                 S(          
                   HCL1400 , 
                   HCQ1400 , 
                   JCL1402 , 
                   JCL1403 , 
                   JCL1404 , 
                   JCL1406 , 
                   JCL1407 , 
                   JCQ1402 , 
                   )         
                 .
/*


//STEP01   EXEC PGM=GIMSMP,PARM='PROCESS=WAIT',REGION=8M    
//*                                                         
//SMPCSI   DD DISP=SHR,DSN=SMAINT.COBOL2.V140.GLOBAL.CSI    
//*                                                         
//SYSPRINT DD SYSOUT=*                                      
//*                                                         
//SMPCNTL  DD *                                             
   SET BDY(DLIB) .                                        
       ACCEPT                        
                 S(          
                   HCL1400 , 
                   HCQ1400 , 
                   JCL1402 , 
                   JCL1403 , 
                   JCL1404 , 
                   JCL1406 , 
                   JCL1407 , 
                   JCQ1402 , 
                   )         
                 .
/*

REXX global variables

Problem addressed

Although REXX is a powerful and flexible language, it has one
significant weakness: its lack of global variable support, which
could be used to pass variables between EXECs.

Currently there are two common methods of sharing variables: by
using a REXX queue or the ISPF Dialog Manager shared
variable pool. Neither of these two methods is particularly
satisfactory. The ISPF Dialog Manager shared variable pool can
only be used in the ISPF environment, and the shared variables
must be explicitly named. Only the head or tail of a queue can be
accessed, the individual queue elements must be identified in
some way (for example, by using a tag), and accessing queue
elements is destructive.

Solution

The GLOBALV function shares variables by either copying the
variables into an internal buffer (SET mode) or restoring variables
from this buffer (GET mode). Two further modes - INI (initialize)
and END - perform buffer maintenance: INI clears the buffer, and
END removes (deletes) the buffer.

GLOBALV has two forms:

o      Global data sharing (the complete set of variables is shared)

o      Named variable sharing (explicit or generic).

The second form serves the interests of information-hiding, and
approximates the EXPOSE keyword in the REXX procedure
instruction.

The GLOBALV function dynamically allocates main storage
blocks for the required buffers and stores the anchor address of the
buffer chain in a named token. The buffer pools can be either
anonymous (from the application's viewpoint) or named.

A REXX EXEC shares variables by calling GLOBALV with the
SET option. The current values for the specified variables are
copied into the internal buffer: the original REXX variables
remain unchanged. Invoked EXECs retrieve the shared variables
by calling GLOBALV with the GET option. The stored variables
are copied from the internal buffer into the EXEC's local variable
pool: the variable values in the internal buffer remain unchanged.

Any subsequent GLOBALV SET invocation copies the variable
values at the end of the internal buffer.

The GLOBALV INI function clears the allocated buffers: the
(empty) buffers are retained. The shared variables are lost,
although the current REXX variables remain unchanged.
Subsequent GETs will rewrite the shared variables.

The GLOBALV END function explicitly frees the allocated
buffers and the associated token.

The allocated buffers are implicitly freed when the EXEC that
originally created the pool terminates. The token is freed when the
address space terminates. To avoid an error situation occurring
(error code 200), an END for the pool should be performed when
the original EXEC terminates if there is a possibility that this pool
can be reused in the current address space.

Named pools can be used to differentiate between various classes
of variable; for example, semi-constant data (data that remains
constant throughout the EXEC processing), EXEC-specific data,
etc.

Calling sequence

      result = GLOBALV(SET [poolname][,varname]...)

      result = GLOBALV(GET [poolname][,varname]...)

      result = GLOBALV(INI [poolname])

      result = GLOBALV(END [poolname])

poolname (1 to 8 characters) is the name of the associated pool.
poolname is suffixed to 'GLOBALV' to form the corresponding
token name.

If poolname is not specified, the default (anonymous) pool is used.

varname is the name of a variable to be processed. varname has
two special forms:

o      varname* - generic variable name (all variable names that
      match up to asterisk will be processed; for example, BETA*
      matches BETA, BETA1, BETAABC, BETA.1, etc).

o      varname. - stem variable name (all stem variables with the
      specified stem will be processed; for example, GAMMA.
      matches GAMMA.1, GAMMA.BETA, etc).

If no variable names are specified, the complete set of variables is
processed.

Function return value

GLOBALV returns with one of the following return values:

0            Successful processing.

1            Successful processing, although one or more variables
            were truncated (GLOBALV truncates individual variables
            to a maximum length of 4096 bytes, although this
            program constant can be altered).

4            Parameter missing.

8            Invalid parameter (first parameter must be GET, SET,
            INI, or END).

12            IRXEXCOM error (REXX environment error).

68,...,128            IEANxxx service error (return code + 64).

200            Addressing/protection exception (caused by the
            variable pool storage area no longer being available - no
            END operation performed).

Example 1 (global data sharing)

/* REXX1 */
...
CALL GLOBALV 'SET' /* save current variables */
CALL REXX2
CALL GLOBALV 'GET' /* get current (changed) variables (from REXX2) */
...
/* REXX2 */
CALL GLOBALV 'GET' /* get current variables (from REXX1) */
...
CALL GLOBALV 'SET' /* save current (new) variables (for REXX1) */
RETURN

Example 2 (selective data sharing)

/* REXX3 */
var11 = 'BETA'
var12 = 'DELTA'
var2 = '12345678'
phi.1 = 1
phi.3 = 3
CALL GLOBALV 'SET', 'PHI.', 'VAR1*'
var12 = ''
CALL REXX4
phi.1 = ''
CALL GLOBALV 'GET', 'VAR*', PHI.
SAY phi.1 /* 1 - original saved value */
SAY var12 /* DELTA - REXX4 not saved */
...
/* REXX4 */
CALL GLOBALV 'GET' /* get all saved values */
SAY phi.3 /* 3 */
SAY var12 /* DELTA */
var12 = 'GAMMA'
RETURN

Example 3 (named pools)

/* REXX5 */
var11 = 'BETA'
var12 = 'DELTA'
var2 = '12345678'
phi.1 = 1
phi.3 = 3
CALL GLOBALV 'SET P1', 'PHI.'
CALL GLOBALV 'SET P2', 'VAR1*'
 /* ... */
DROP phi.
CALL GLOBALV 'GET P1'
SAY phi.1 /* 1 */

Program code

The program contains the MAXLEN equate, which specifies the
maximum length of variable data that can be saved (currently
4096). This equate can be changed, but should always be less
than BLKLEN (the length of a dynamically-allocated storage
block) to avoid a possible run-time loop.

Note: in the interests of keeping the program code as simple as
possible, the variables are always written at the end of the internal
buffer. This means that the same variable/value pair may by
present more than once. Although this performs correctly, an
optimized solution could check before storing a value (and so
reduce the overall buffer size).

         TITLE 'REXX GLOBALV-Function'
GLOBALV  CSECT
GLOBALV  AMODE 31
GLOBALV  RMODE ANY
         BAKR  R14,0              save regs
         BASSM R12,0              set base register
         USING *,R12
BASE     LA    R13,SA             set internal save-area
         MVC   4(4,R13),=C'F1SA'
         MVC   FRV,=H'0'      initialize GLOBALV function return value
         USING EFPL,R1
         L     R2,EFPLEVAL        PTR(Evaluation Block)
         L     R11,0(R2)          A(Evaluation Block)
         USING EVALBLOCK,R11
         LR    R9,R0              A(Environment Block)
         USING ENVBLOCK,R9
         L     R9,ENVBLOCK_IRXEXTE A(external entries)
         USING IRXEXTE,R9
         MVC   AIRXEXCOM,IRXEXCOM
         DROP  R9
         L     R10,EFPLARG        A(parsed Argument List)
         USING ARGTABLE_ENTRY,R10
         LA    R9,USERSHVB
         USING SHVBLOCK,R9
         USING GVHDSECT,R6        Global Variable Header Block
         ESPIE SET,ASYNCERR,(4,5) trap Addressing Exceptions
         ST    R1,TOKEN
* get argument
         LM    R3,R4,ARGTABLE_ARGSTRING_PTR
* R3: A(argument)
* R4: L(argument)
         LA    R15,4              error return: PARM missing
         LTR   R4,R4
         BNP   EXIT
* Test length. If >4, poolname present.
         CH    R4,=H'3'
         BL    EXIT               too short
         CH    R4,=H'12'
         BH    EXIT               too long
         SH    R4,=H'5'           LC(poolname)
         BM    NOPOOL
         EX    R4,EXMOVE2
NOPOOL   MVI   MODE,0             initialize
* set processing mode
         CLC   =C'GET',0(R3)
         BNE   *+8
         MVI   MODE,¤GET
         CLC   =C'SET',0(R3)
         BNE   *+8
         MVI   MODE,¤SET
         CLC   =C'INI',0(R3)
         BNE   *+8
         MVI   MODE,¤INIT
         CLC   =C'END',0(R3)
         BNE   *+8
         MVI   MODE,¤END
         CLI   MODE,0             test whether mode has been set
         BE    EXIT               :no, error
* process arguments
         LA    R10,ARGTABLE_NEXT-ARGTABLE_ENTRY(R10) next argument
         LM    R1,R2,ARGTABLE_ARGSTRING_PTR
* R2: L(first argument); <0 = no entries
         LTR   R2,R2
         BP    *+6                ok
         SR    R10,R10            indicate "no names present"
         ST    R10,AARGLIST       start of argument list
         LA    R15,8              error return: invalid parm
* test whether token exists
         CALL  IEANTRT,(HOMELVL,USERNAME,USERTOKN,RC),VL
         CH    R15,=H'4'
         BL    A100               RC=0; not first block
         BH    ERROR1             function error
* allocate first (anchor) block
         SR    R8,R8              initialize
         BAL   R14,NEWBLOCK       allocate block
A100     L     R6,ANCHOR
         TM    MODE,¤SET
         BO    SETVAR
         TM    MODE,¤GET
         BO    GETVAR
         TM    MODE,¤INIT
         BO    INITCHN            initialize chain
         TM    MODE,¤END
         BO    DELETE             delete anchor
EOJ      LH    R15,FRV            set function return value
EXIT     DS    0H
* convert function return value to character format
         CVD   R15,D
         MVC   WK,=X'402020202120'
         LA    R1,WKE
         EDMK  WK,D+5             get first significant digit
         LA    R15,WKE
         SR    R15,R1             LC(result)
         EX    R15,EXMOVE1        move into 
         LA    R15,1(R15)         L(result)
         ST    R15,EVALBLOCK_EVLEN entry size
         ESPIE RESET,TOKEN
         LA    R15,0              function execution status
         PR    ,                  program end
ERROR1   LA    R15,64(R15)        set error range 68,...,128
         B     EXIT
EXMOVE1  MVC   EVALBLOCK_EVDATA(0),0(R1) EX-instruction
EXMOVE2  MVC   POOLNAME(0),4(R3)
         TITLE 'Processing Routines'
INITCHN  DS    0H (re-)initialize chain
* R6: A(first block)
         USING GVHDSECT,R6        Global Variable Header Block
         LTR   R6,R6
         BZ    EOJ                empty chain
INITCHN1 L     R7,GVHNEXT         save address of next chained block
* reset pointers
         BAL   R14,INITHDR        reinitialize header
         LTR   R6,R7              address of next chain block
         BNZ   INITCHN1           block exists (free)
         LA    R15,0
         B     EXIT
DELETE   DS    0H free (delete) anchor
         CALL  IEANTDL,(HOMELVL,USERNAME,RC),VL
         LTR   R15,R15
         BNZ   ERROR1             function error
* free allocated chain
         LTR   R6,R6              R6: A(first block)
         BZ    EOJ                empty chain
         USING GVHDSECT,R6        Global Variable Header Block
FREEBLK  L     R7,GVHNEXT         save address of next chained block
         STORAGE RELEASE,         free storage block                   x
               LENGTH=BLKLEN,                                          x
               SP=SP,             subpool                              x
               ADDR=(R6),         address                              x
               LINKAGE=SYSTEM
* test whether further chained block exists
         LTR   R7,R7              address of next chain block
         BNZ   FREEBLK            block exists (free)
* end of chain
         SR    R0,R0
         ST    R0,0(R8)           zeroize pointer
         B     EOJ                end of chain (program end)
GETVAR   DS    0H get variables from buffer
         MVI   SHVCODE,SHVSTORE   store variable
         USING GVEDSECT,R7
GETVAR2  LA    R7,GVHEND
         ST    R7,GVHADDR         address of first entry in block
GETVAR1  C     R7,GVHLAST         address of last entry in block
         BE    GETVAR3            end of block
* process entry
         LA    R2,GVENAME         A(name)
         ST    R2,SHVNAMA         A(variable name)
         SR    R3,R3
         IC    R3,GVENAMEL        L(name)
         ST    R3,SHVNAML         L(variable name)
         LH    R4,GVEDATAL        L(data)
         ST    R4,SHVVALL         L(variable data)
         LA    R5,GVENAME(R3)     A(data)
         ST    R5,SHVVALA         A(variable data)
         LA    R7,0(R4,R5)        A(next entry)
* test whether specified name
         BAL   R14,TESTNAME
         LTR   R15,R15
         BNZ   GETVAR1            name not found, ignore
* set in REXX variable pool
         L     R15,AIRXEXCOM
         CALL  (15),(IRX_IRXEXCOM,0,0,USERSHVB),VL
         LTR   R15,R15            test return code
         BZ    GETVAR1            ok
* else IRXEXCOM error
         LA    R15,12
         B     EXIT               terminate
* end of block
GETVAR3  L     R6,GVHNEXT         address of next block
         LTR   R6,R6              test whether end of chain
         BNZ   GETVAR2            no: process next block
         B     EOJ                last block
SETVAR   DS    0H                 Set variable into buffer
         MVI   SHVCODE,SHVNEXTV   fetch next
SETNEXT  MVC   SHVNAMA,=A(VN)     A(variable name)
         MVC   SHVUSER,=A(L'VN)
         MVC   SHVNAML,=A(L'VN)   L(variable name)
         MVC   SHVVALA,=A(VD)     A(variable data)
         MVC   SHVBUFL,=A(L'VD)   L(variable data)
         MVC   SHVVALL,=A(L'VD)   L(variable data)
         L     R15,AIRXEXCOM
         CALL  (15),(IRX_IRXEXCOM,0,0,USERSHVB),VL
         LTR   R15,R15            test return code
         BZ    SETNEXT3           ok
* else IRXEXCOM error
         MVC   FRV,=H'1'
         TM    SHVRET,X'04'
         BO    SETNEXT2           truncated
         LA    R15,12
         B     EXIT               terminate
SETNEXT3 TM    SHVRET,X'02'
         BO    EOJ                last variable
SETNEXT2 DS    0H determine entry size
* name
         L     R2,SHVNAMA
         L     R3,SHVNAML
* test whether specified name
         BAL   R14,TESTNAME
         LTR   R15,R15
         BNZ   SETNEXT            name not found, ignore
* data
         L     R4,SHVVALA
         L     R5,SHVVALL
         LA    R0,GVELHDR(R3,R5)  R1: entry size
SETNEXT4 L     R1,GVHFREE         current free space
         SR    R1,R0              free space remaining
         BNM   SETNEXT1           ok
         LR    R8,R6              save address of current block
         ICM   R6,15,GVHNEXT      get chain address
         BNZ   SETNEXT4           chained-block available
         BAL   R14,NEWBLOCK       no space, get new block
         B     SETNEXT2
* set entry
SETNEXT1 ST    R1,GVHFREE         set free space
         L     R7,GVHADDR
         USING GVEDSECT,R7
         STC   R3,GVENAMEL        L(name)
         LA    R0,GVENAME         A(target name)
         LR    R1,R3              L(name)
         MVCL  R0,R2              move name
* R0: updated address (=A(data entry))
         STH   R5,GVEDATAL        L(data)
         LR    R1,R5              L(data)
         MVCL  R0,R4              move data
* R0: updated address (=A(next entry))
         ST    R0,GVHADDR         address of next entry
         ST    R0,GVHLAST         = address of last entry
         B     SETNEXT
TESTNAME DS    0H test whether name specified as argument
* R2: A(name)
* R3: L(name)
         SR    R15,R15            initialize return code (=ok)
         ICM   R10,B'1111',AARGLIST load address of first argument
         BZR   R14                ok, no names specified
         USING ARGTABLE_ENTRY,R10
TESTNAM0 LM    R4,R5,ARGTABLE_ARGSTRING_PTR
* R4: A(argument)
* R5: L(argument)
         LTR   R5,R5
         BM    TESTNAM2           end of argument list, name not found
         BZ    TESTNAM3           null entry, get next entry
         STM   R2,R5,RSA          save regs
         CLCL  R2,R4
         BE    TESTNAM4           names equal
         LM    R2,R5,RSA          reload regs
* test for generic name (name*) or stem variable name (name.)
         LA    R1,0(R4,R5)
         SH    R1,=H'1'           last byte of argument
         CLI   0(R1),C'.'         test for stem variable name
         BNE   TESTNAM1           :no
         CR    R3,R5
         BL    TESTNAM3           unequal
         LR    R3,R5              set argument length
         CLCL  R2,R4              compare
         BE    TESTNAM4           names equal
* else unequal, get next
TESTNAM3 LA    R10,ARGTABLE_NEXT-ARGTABLE_ENTRY(R10) next argument
         LM    R2,R3,RSA          reload regs
         B     TESTNAM0
TESTNAM1 CLI   0(R1),C'*'         test for generic name
         BNE   TESTNAM3           :no
         SH    R5,=H'1'           length of fixed argument
         BNP   TESTNAM3           zero length
         CR    R3,R5
         BL    TESTNAM3           unequal
         LR    R3,R5              set argument length
         CLCL  R2,R4              compare
         BNE   TESTNAM3           unequal, get next
TESTNAM4 LM    R2,R5,RSA          return
         BR    R14
TESTNAM2 LA    R15,4              set return code
         B     TESTNAM4
NEWBLOCK ST    R14,RSA            save return address
* allocate new storage block
* R8: A(current block, or save-area for initial block)
         STORAGE OBTAIN,                                               x
               LENGTH=BLKLEN,                                          x
               SP=SP,             subpool                              x
               ADDR=(R6),         get address                          x
               LOC=ANY,                                                x
               LINKAGE=SYSTEM
         SPACE 1
         BAL   R14,INITHDR        initialize header
         XC    GVHNEXT,GVHNEXT    clear  (end of chain)
         LTR   R8,R8
         BNZ   NOTFIRST
* allocate user token
         ST    R6,ANCHOR          set anchor address
         CALL  IEANTCR,(HOMELVL,USERNAME,USERTOKN,PERSOPT,RC),VL
         LTR   R15,R15
         BNZ   ERROR1             function error
         LA    R8,ANCHOR
NOTFIRST ST    R6,0(R8)           set chain address
         L     R14,RSA            reload return address
         BR    R14                return
INITHDR  DS    0H
* initialize header
         LA    R1,GVHEND
         ST    R1,GVHADDR         A(first entry in block)
         ST    R1,GVHLAST         A(current end of block)
         L     R1,=A(BLKLEN+GVHDSECT-GVHEND)
         ST    R1,GVHFREE         free size
         BR    R14
         TITLE 'Data areas'
SA       DS    18F   save-area
RSA      DS    4A    (work) register save-area
FRV      DS    H     function return value
AARGLIST DS    A     A(argument list)
AIRXEXCOM DS   A     A(IRXEXCOM routine)
IRX_IRXEXCOM DC CL8'IRXEXCOM'
USERSHVB DS    0A    user SHVBLOCK
         DC    (SHVBLEN)X'0'      initialize to X'0...0'
HOMELVL  DC    F'2'               home level
PERSOPT  DC    F'0'               persistence option
USERNAME DS    0CL16
         DC    CL8'GLOBALV'
POOLNAME DC    CL8' '
USERTOKN DS    0CL16
ANCHOR   DS    AL4
         DS    XL12               filler
TOKEN    DC    F'0'
RC       DS    F                  function return code
D        DS    0D,PL8
WK       DS    CL6
WKE      EQU   *-1
MODE     DS    X                  processing mode
¤GET     EQU   X'01'
¤SET     EQU   X'02'
¤INIT    EQU   X'04'
¤END     EQU   X'08'
         LTORG
VN       DS    CL250              variable name
VD       DS    CL(MAXLEN)         variable data
MAXLEN   EQU   4096               maximum non-truncated data length
BLKLEN   EQU   8192               must be larger than L(VD)
SP       EQU   1                  storage subpool
         TITLE 'ESPIE Exit'
ASYNCERR DS    0H
         BALR  R15,0
         USING *,R15
         L     R12,=A(BASE)
         USING BASE,R12
         DROP  R15
         LA    R15,200
         B     EXIT
         DROP  R12
         LTORG
         TITLE 'DSECTS'
GVHDSECT DSECT , Global Variable Header DSECT
GVHNEXT  DS    A                  address of next block (0 = chain end)
GVHADDR  DS    A                  address of next entry
GVHLAST  DS    A                  address of last entry
GVHFREE  DS    F                  free space count
GVHEND   DS    0C                 start of data area
GVEDSECT DSECT , Global Variable Entry DSECT
GVEDATAL DS    AL2                length of data
GVENAMEL DS    AL1                length of name
GVELHDR  EQU   *-GVEDSECT         L(header)
GVENAME  DS    0C                 name
GVEDATA  DS    0C                 data
         IRXARGTB                 Argument Table Entry
         IRXEFPL                  External Functions Parameter List
         IRXENVB                  Environment Block
         IRXEXTE                  External Entries
         IRXEVALB                 Evaluation Block
         IRXSHVB                  Shared Var    
--------------------------------------------------------------------------------

Extended EXECIO

Problem addressed

The I/O model for sequential dataset processing as implemented
in REXX under MVS has one significant deficiency, namely the
lack of support for undefined format records (RECFM=U). The
XEXECIO command described in this article provides such
processing.

Solution

To simplify its use, XEXECIO has the same general syntax as the
standard EXECIO command. The solution as presented in this
article assumes that an installation environment user has a router
program that interprets that first word in the specified expression
as a subcommand and passes the remainder of the expression to
the appropriate processing program (in this case the XEXECIO
program code). XEXECIO could, of course, run in its own
environment. The major difference between the XEXECIO and
EXECIO syntax is the absence of the FINIS parameter - the
implemented version of XEXECIO always closes the specified
dataset.

Invocation syntax

      XEXECIO    count    DISKW ddname (STEM varname
                 *        DISKR ddname (STEM varname
                                        FIFO
                                        LIFO

count

The maximum number of records to be processed. * indicates a
high-value (ie no limit). In write mode, the processing ends when
this number is reached, the end of the stack is reached, or a null
stem variable is referenced, whichever occurs first. In read mode,
the processing ends when this number is reached or the end of the
input file is reached, whichever occurs first.

DISKW

Write mode.

DISKR

Read mode.

ddname

The name of the DD statement that specifies the dataset to be
processed.

FIFO

The queue is processed in first-in/first-out sequence. This is the
default.

LIFO

The queue is processed in last-in/first-out sequence.

STEM

The STEM keyword specifies that stem variables are to be used.
The stack is used if this parameter is omitted.

varname

The name of the stem variable that contains (is to contain) the
records to be processed. The records are named varname.1,... .

Return code

XEXECIO returns one of the values:

0      OK.

4      OK, no records written.

8      OK, one or more records truncated (one or more records to
      be written were longer than the blocksize specified for the
      dataset - the records are truncated to the maximum permitted
      blocksize).

12      Open error.

16      ESPIE exit taken (invalid parameter).

20      Parsing error.

24      ENVBLOCK locate error.

28      Internal error (buffer overflow).

Sample invocation

/* REXX - XEXECIO sample */
ADDRESS TSO "ALLOC F(DD) DA('U.DATA') SHR REUS";
SAY "stack fifo"
ADDRESS USER "XEXECIO * READ DD (FIFO";
SAY "XEXECIO RC" RC
SAY "queued" queued();
DO i = 1 TO queued()
  PARSE PULL a
  SAY a
END
SAY "stack lifo"
ADDRESS USER  "XEXECIO * READ DD (LIFO";
SAY "XEXECIO RC" RC
SAY "queued" queued();
DO i = 1 TO queued()
  PARSE PULL a
  SAY a
END
SAY "stem"
ADDRESS USER "XEXECIO * READ DD (STEM A."
SAY 1 A.1
SAY 2 A.2
SAY 3 A.3
EXIT
B.1 = "gamma"
B.2 = "delta"
B.3 = "a23456789b123456789c123456789d123456789e123456789";
ADDRESS USER "XEXECIO 3 WRITE DD (STEM B.";
push "zzzzzzzsdfsdfsfdsfsdfsdfsfsd"
ADDRESS USER "XEXECIO * WRITE DD";
SAY "RC" RC

Program code

Programs that use REXX services must be written in 31-bit
address mode. XEXECIO uses 24-bit residency mode because of
BSAM file processing. XEXECIO is written as re-entrant code.

         MACRO
         DCX   &P
.* macro for the definition of INSTBLK entries
         GBLC  &CSECT
         AIF   ('&CSECT' NE '').A1
&CSECT   SETC  '&SYSECT'
.A1      ANOP
&CSECT   CSECT
STMT&SYSNDX DC C&P
$INSTBLK CSECT
         DC    A(STMT&SYSNDX,L'STMT&SYSNDX)
         MEND
         TITLE 'Extended EXECIO'
* Register usage:
*   R5   A(DCB)
*   R6   A(SHVBLK)
*   R7   A(common area)
*   R8   A(External Entry Points Vector)
*   R9   A(ENVBLOCK)
*   R10  option table (branch address)
*   R12  base register
XEXECIO  CSECT
XEXECIO  AMODE 31    REXX addressing mode
XEXECIO  RMODE 24    I/O residency (addressing) mode
         BAKR  R14,0 save registers and return address
         BASR  R12,0 base register
         USING *,R12
* R0: A(Environment Block)
* R1: A(Host Command Environment Routine parameter list)
         LR    R9,R0              A(ENVBLOCK)
         LM    R2,R5,4(R1)
* initialization
         STORAGE OBTAIN,LENGTH=$XEXECIO_L,SP=1
         LR    R7,R1
         USING $XEXECIO,R7
         LA    R13,SA             set program save area
         ST    R5,ACMDRC          A(command ReturnCode)
         LA    R5,DCBIN           set default DCB (input)
         USING IHADCB,R5
         USING ENVBLOCK,R9
* set ESPIE (Addressing+Data)
         ESPIE SET,EXCP0CX,(5,7)
         B     CONTINUE
EXCP0CX  DS    0H
         BALR  R15,0
         USING *,R15
         MVC   RC,=H'16'          RC: ESPIE-exit taken
         B     EXIT
         DROP  R15
CONTINUE DS    0H
* initialize work area
         MVI   FLAG,0             processing flag
         MVC   LELEME(8),=2F'-1'
         MVI   VNINDEXX,C' '
         ZAP   INDEX,=P'0'
         LA    R1,ARGLIST
         ST    R1,AARGLIST
         LA    R1,EVALBLK
         ST    R1,AEVALBLK
         MVC   EVSIZE,=A((EVDATAE-EVALBLK)/8)
         MVC   EVLEN,=XL4'80000000'
         MVC   MAXRC,=H'-1'
         OI    FLAG,#NOREC        preset no-records-processed flag
         LA    R1,IOA
         ST    R1,AREC
         LA    R1,INSTBLK
         ST    R1,AINSTBLK        A(INSTBLK)
         MVC   INSTBLK_ACRONYM,=CL8'IRXINSTB'
         MVC   INSTBLK_HDRLEN,=F'128'  L(INSTBLK header)
         L     R1,=A($INSTBLK)
         ST    R1,INSTBLK_ADDRESS      INSTBLK entries
         MVC   INSTBLK_USEDLEN,=A(USEDLEN)
         MVC   INSTBLK_MEMBER,=CL8' '
         MVC   INSTBLK_DDNAME,=CL8' '
         MVC   INSTBLK_SUBCOM,=CL8'MVS'
         MVC   INSTBLK_DSNLEN,=F'0'
         MVC   DCBIN(DCBINL),DCBIN#
         MVC   DCBOUT(DCBOUTL),DCBOUT#
         MVC   OPEN(OPENL),OPEN#
         MVC   CLOSE(CLOSEL),CLOSE#
         L     R2,0(R2)           A(parm)
         L     R3,0(R3)           L(parm)
         STM   R2,R3,AELEM
         L     R8,ENVBLOCK_IRXEXTE
         USING IRXEXTE,R8
* process
         MVC   RC,=H'20'          RC: parsing error
         L     R15,IRXEXEC        A(IRXEXEC)
         CALL (15),                                                    X
               (P0,AARGLIST,FLAGS,AINSTBLK,P0,AEVALBLK,P0,P0),VL,      X
               MF=(E,CALL8)
         SR    R15,R15
         IC    R15,EVDATA
         N     R15,=F'7'          clear high-order
         LTR   R15,R15
         BNZ   EXIT               parsing error
* retrieve passed parameters (from stack)
         L     R15,IRXSTK         A(IRXSTK)
         CALL (15),(PULL,AELEM,LELEM,FRC),VL,MF=(E,CALL4)
* save stack entry
         MVC   RC,=H'28'          RC: internal error (overflow)
         LM    R0,R1,AELEM
         LA    R2,BUF             A(buffer)
         ST    R2,AELEM           set pointer
         LR    R3,R1              L(entry)
         C     R3,=A(L'BUF-1)
         BH    EXIT               overflow error
         MVCL  R2,R0              save stack entry
         MVI   0(R2),C' '         set blank at end of buffer
* parse out variables - stack entries have form: /varname vardata
* get /DD (DD name)
         LA    R1,#DD
         BAL   R14,GETSVAR        get formatted stack variable
* R2: A(DD name), R3: LC(DD name)
         LTR   R3,R3
         BM    EXIT               DD missing
         MVC   DDNAME,=CL8' '     clear DDname
         MVC   DDNAME(0),0(R2)    set DDname
         EX    R3,*-6
* get /NREC
         LA    R1,#NREC
         BAL   R14,GETSVAR        get formatted stack variable
         LTR   R3,R3
         BM    EXIT               NREC missing
         ZAP   NREC,=P'999999999' set high-value (default)
         CLI   0(R2),C'*'
         BE    *+14
         PACK  NREC,0(0,R2)
         EX    R3,*-6
* get /VARNAME
         LA    R1,#VARNAME
         BAL   R14,GETSVAR
         LTR   R3,R3
         BM    NOVARNAM           VARNAME missing
         MVC   VARNAME,BLANK      BLANK(VARNAME)
         MVC   VARNAME(0),0(R2)
         EX    R3,*-6
NOVARNAM LA    R1,1(R3)           L(VARNAME)
         ST    R1,VARNAMEL
         LA    R1,#IOOP
         BAL   R14,GETSVAR        get formatted stack variable
* R2: A(vardata), R3: LC(vardata)
         LTR   R3,R3
         BM    EXIT               IOOP missing
         MVC   RC,=H'12'          RC: open error
         CLC   =C'READ',0(R2)
         BNE   A010               not READ
         MVC   DCBDDNAM,DDNAME
         OPEN  ((5),(INPUT)),MF=(E,OPEN)
         LTR   R15,R15
         BNZ   EXIT               open error
         LH    R0,DCBBLKSI
         ST    R0,RECLEN
         B     A2000              READ processing
A010     DS    0H                 WRITE processing
         LA    R5,DCBOUT
         MVC   DCBDDNAM,DDNAME
         OPEN  ((5),(OUTPUT)),MF=(E,OPEN)
         LTR   R15,R15
         BNZ   EXIT               open error
         LH    R0,DCBBLKSI
         ST    R0,RECLEN
         B     A1000              WRITE processing
EOP      MVC   RC,=H'0'           end of processing
         TM    FLAG,#NOREC        test flag
         BZ    EXIT               records processed
         MVC   RC,=H'4'           else warning
EXIT     TM    DCBOFLGS,DCBOFOPN  test whether OPEN performed
         BZ    NOOPEN             :no OPEN
         CLOSE ((5)),MF=(E,CLOSE)
NOOPEN   LH    R15,RC
         LH    R0,MAXRC
         LTR   R0,R0
         BM    *+6
         LR    R15,R0
         L     R1,ACMDRC
         ST    R15,0(R1)          set command return code
* release allocated main-storage
         STORAGE RELEASE,LENGTH=$XEXECIO_L,ADDR=(7),SP=1
         SR    R15,R15            zeroize program return code
         PR    ,                  program return
         TITLE 'Write processing'
A1000    DS    0H write record (processing)
         MVC   RC,=H'0'           reset RC
         AP    INDEX,=P'1'
         CP    INDEX,NREC
         BH    EOP                last record written
         ICM   R3,B'1111',VARNAMEL test whether no VARNAME (=stack)
         BZ    A1100              :stack processing
* get next variable
         MVC   VNINDEX,=X'4020202020202120'
         LA    R1,VNINDEX+7
         EDMK  VNINDEX,INDEX
         MVC   VNINDEX,0(R1)      set into 
* get record content
         MVC   VN,VARNAME
         LA    R1,VN(R3)          R3: L(varname)
         MVC   0(8,R1),VNINDEX
         L     R3,AREC
         L     R4,RECLEN
         BAL   R14,GETVAR
* R4: L(record)
A1040    LTR   R4,R4
         BZ    EXIT               null variable (=job end)
*   R3: A(variable data)
*   R4: L(variable data)
         USING IHADCB,R5
         CH    R4,DCBBLKSI
         BNH   *+14
         MVC   MAXRC,=H'8'        RC: record truncated
         LH    R4,DCBBLKSI        set maximum length
         WRITE DECB2,SF,(5),(3),(4),MF=E
         CHECK DECB2
         NI    FLAG,X'FF'-#NOREC  reset flag
A1030    B     A1000              return to processing loop
A1100    DS    0H                 get next stack variable
         L     R15,IRXSTK         A(IRXSTK)
         CALL  (15),(PULL,AELEM,LELEM,FRC),VL,MF=(E,CALL4)
         CH    R15,=H'4'
         BH    EXIT
         BE    EOP                end of stack
* else stack element retrieved, move to buffer
         LM    R0,R1,AELEM
         LR    R15,R1             length
         LR    R4,R1              L(variable)
         L     R14,AREC           A(target)
         LR    R3,R14             A(variable)
         MVCL  R14,R0             move record
         B     A1040              process record
         TITLE 'Read processing'
A2000    MVC   RC,=H'0'           reset RC
* get /OPTKYWD
         LA    R1,#OPTKYWD
         BAL   R14,GETSVAR
         CLC   =C'LIFO',0(R2)
         BNE   *+10
         MVC   STACKOP,=CL8'PUSH'
         CLC   =C'FIFO',0(R2)
         BNE   *+10
         MVC   STACKOP,=CL8'QUEUE'
A2100    BAL   R14,READREC
         AP    INDEX,=P'1'        increment record count
         CP    INDEX,NREC
         BH    EOP                last record read
         NI    FLAG,X'FF'-#NOREC  reset flag
         ICM   R1,B'1111',VARNAMEL L(VARNAME)
         BZ    A2200              :0, use stack
* convert INDEX to character format (.n)
         MVC   VNINDEX,=X'4020202020202120'
         LA    R1,VNINDEX+7
         EDMK  VNINDEX,INDEX
         MVC   VNINDEX,0(R1)      set into 
* store record i)
* : variable name
*   R3: A(variable data)
*   R4: L(variable data)
         L     R3,AREC            A(record)
         L     R4,RECLEN          L(record)
         MVC   VN,VARNAME         variable name
         L     R1,VARNAMEL        L(VARNAME)
         LA    R1,VN(R1)
         MVC   0(8,R1),VNINDEX
         BAL   R14,SETVAR         pass to REXX
         B     A2100              return to read-loop
A2200    DS    0H                 store variable in stack
         L     R15,IRXSTK         A(IRXSTK)
         CALL (15),(STACKOP,AREC,RECLEN,FRC),VL,MF=(E,CALL4)
         B     A2100              read loop
EOF      DS    0H                 end of file
* output number of records processed
         ICM   R1,B'1111',VARNAMEL L(VARNAME)
         BZ    EOP                :0 (stack processing)
         ZAP   D,INDEX
         MVC   VN,VARNAME         VARNAME (STEM)
         LA    R1,VN(R1)          +L(VARNAME)
         MVC   0(2,R1),=C'0 '     0-variable
         OI    D+7,X'0F'          remove sign from count
         UNPK  WK,D               set into display form
         LA    R3,WK              A(record count)
         LA    R4,L'WK            L(record count)
* set data into REXX variable
         BAL   R14,SETVAR
         B     EOP                end of processing
         TITLE 'Subroutines'
GETSVAR  ST    R14,RA_GETSVAR     set return address
* Function: Get variable from formatted stack
* input:
*  R1: A(comparand)
* output:
*  R2: A(entry); R3: LC(entry)
*  R15: 20 (comparand not found)
         LA    R15,BUF
GETSVAR2 CLC   =C'//',0(R15)
         BE    GETSVAR3           last entry
         CLC   0(10,R1),0(R15)
         PACK  D,10(5,R15)        LENGTH(variable)
         CVB   R3,D
         BE    GETSVAR1           varname found
         LA    R15,17(R3,R15)     bump buffer address
         CLC   =C'//',0(R15)
         B     GETSVAR2           get next entry
* end of buffer, entry not found
GETSVAR3 LA    R15,20
         B     EXIT               exit
GETSVAR1 DS    0H                 varname found, get vardata
         LA    R2,16(R15)         A(data)
         BCTR  R3,0               LC(vardata)
         L     R14,RA_GETSVAR
         BR    R14                return
GETVAR   ST    R14,RA_GETVAR
* Function: Get REXX variable
* input:
*  : variable name
* output:
*  R3: A(variable)
*  R4: L(variable)
         BAL   R14,GETVNL         get L(VN)
         LA    R6,IRX_SHVBLOCK
         USING SHVBLOCK,R6
         ST    R0,SHVNAML         L(name), normalized
         LA    R1,VN              A(name)
         ST    R1,SHVNAMA
         MVI   SHVCODE,SHVFETCH   Fetch
         ST    R3,SHVVALA         A(buffer)
         ST    R4,SHVBUFL         L(buffer)
         L     R15,IRXEXCOM       A(IRXEXCOM)
         CALL (15),(IRX_IRXEXCOM,0,0,IRX_SHVBLOCK),VL,MF=(E,CALL4)
         L     R4,SHVVALL         L(data)
         L     R14,RA_GETVAR      load return address
         TM    SHVRET,SHVNEWV     new variable?
         BZR   R14                :no, return
         SR    R4,R4              else zeroize length
         BR    R14                return
GETVNL   DS    0H
* Function: Determine actual (normalized) length of name
* input:  - name
* output: R0: L(name), normalised
         LA    R1,L'VN
         SR    R0,R0              counter
         LA    R15,VN
GETVNL1  CLI   0(R15),C' '
         BER   R14                end found
         AH    R0,=H'1'           increment counter
         LA    R15,1(R15)         bump address
         BCT   R1,GETVNL1
         BR    R14
SETVAR   ST    R14,RA_SETVAR
* Function: Set REXX variable
* input:
*  : variable name
*  R3: A(variable data)
*  R4: L(variable data)
         BAL   R14,GETVNL         get L(VN) -> R0
         LA    R6,IRX_SHVBLOCK
         USING SHVBLOCK,R6
         ST    R0,SHVNAML         L(name), normalized
         LA    R1,VN              A(name)
         ST    R1,SHVNAMA
         MVI   SHVCODE,SHVSTORE   set store-flag
         ST    R3,SHVVALA         A(data)
         ST    R4,SHVVALL         L(data)
         L     R15,IRXEXCOM       A(IRXEXCOM)
         CALL (15),(IRX_IRXEXCOM,0,0,IRX_SHVBLOCK),VL,MF=(E,CALL4)
         L     R14,RA_SETVAR
         BR    R14                return
READREC  ST    R14,RA_READREC
         LH    R4,DCBBLKSI
         READ  DECB1,SF,(5),IOA,(4),MF=E
         CHECK DECB1
         LH    R4,DCBLRECL
         LA    R3,IOA
*   R3: A(variable data)
*   R4: L(variable data)
         STM   R3,R4,AREC         A(record), L(record)
         L     R14,RA_READREC
         BR    R14
         TITLE 'Constants'
#IOOP    DC    C'/IOOP_____'      READ, WRITE
#L       EQU   *-#IOOP            entry length
#NREC    DC    C'/NREC_____'      * or number
#DD      DC    C'/DD_______'      DD-name
#VARNAME DC    C'/VARNAME__'      varname or blank
#OPTKYWD DC    C'/OPTKYWD__'      STEM, FIFO or LIFO
PULL     DC    CL8'PULL'
BLANK    DC    CL16' '
P0       DC    A(0)
FLAGS    DC    X'80000000'        invoke as command
IRX_IRXEXCOM DC CL8'IRXEXCOM'
OPEN#    OPEN  (0),MF=L
OPENL    EQU   *-OPEN#
CLOSE#   CLOSE (0),MF=L
CLOSEL   EQU   *-CLOSE#
DCBIN#   DCB   DDNAME=DUMMY,DSORG=PS,MACRF=R,DEVD=DA,EODAD=EOP,        x
               RECFM=U
DCBINL   EQU   *-DCBIN#
DCBOUT#  DCB   DDNAME=DUMMY,DSORG=PS,MACRF=W,DEVD=DA
DCBOUTL  EQU   *-DCBOUT#
         LTORG
         TITLE 'Variables and data areas'
$XEXECIO DSECT
SA       DS    18F                save area
ACMDRC   DS    A                  A(command return code)
DCBIN    DS    (DCBINL)X
DCBOUT   DS    (DCBOUTL)X
OPEN     DS    (OPENL)X
CLOSE    DS    (CLOSEL)X
         READ  DECB1,SF,0,0,'S',MF=L
         WRITE DECB2,SF,0,0,'S',MF=L
CALL4    CALL  ,(0,0,0,0),MF=L
CALL8    CALL  ,(0,0,0,0,0,0,0,0),MF=L
REGSA     DS   F     register save areas
RA_READREC DS  A
RA_GETSVAR DS  A
RA_GETVAR DS   A
RA_SETVAR DS   A
RC       DS    H
MAXRC    DC    H'-1'
CONDCODE DS    X     condition code (for branch)
INDEX    DS    PL4   record number counter
VNINDEX  DS    CL8' '
VNINDEXX DS    C' '
FLAG     DS    X     processing flag
#NOREC   EQU   X'01' no records processed
SRA      DS    A     save return address
D        DS    0D,PL8 double-word work area
WK       DS    CL6   work field
* the next two fields are contiguous
AREC     DS    A     )            A(record)
RECLEN   DS    A     )            L(record (block) )
NREC     DS    PL8   record counter
VARNAMEL DS    F     L()
VARNAME  DS    CL16  
VN       DS    2CL16 'stem'-variable (n, n = 1, 2, ...
DDNAME   DS    CL8   
STACKOP  DS    CL8   stack operation (PUSH, QUEUE)
FRC      DS    F     function return code
BUF      DS    CL512 stack buffer
AARGLIST DS    A(ARGLIST)
ARGLIST  DS    0A    Argument List (also used for stack processing)
AELEM    DS    2A
         ORG   AELEM+4
LELEM    DS    F
LELEME   DS    2F'-1'
AEVALBLK DS    A(EVALBLK)
EVALBLK  DS    0F    align
         DS    F     reserved
EVSIZE   DS    A((EVDATAE-EVALBLK)/8)
EVLEN    DS    XL4'80000000'      L(data)
         DS    F     reserved
EVDATA   DS    CL64  data
EVDATAE  EQU   *
         DS    0F    align
AINSTBLK DS    A(INSTBLK)
INSTBLK  DS    0H
INSTBLK_ACRONYM DS   CL8'IRXINSTB'
INSTBLK_HDRLEN  DS   F'128' L(INSTBLK header)
         DS    F     reserved
INSTBLK_ADDRESS DS   A($INSTBLK) INSTBLK entries
INSTBLK_USEDLEN DS   A(USEDLEN)
INSTBLK_MEMBER  DS   CL8' '  member name (unused)
INSTBLK_DDNAME  DS   CL8' '  DD name (unused)
INSTBLK_SUBCOM  DS   CL8'MVS' subcom
         DS    F     reserved
INSTBLK_DSNLEN  DS   F       L(DSN)
         DS    CL54' '       DSN, unused
         ORG   INSTBLK+128
IRX_SHVBLOCK DS (SHVBLEN)X'0'
IOA      DS    CL(X'8000')
$XEXECIO_L EQU *-$XEXECIO
         TITLE 'DSECTs'
         DCBD  DEVD=DA,DSORG=PS
         IRXENVB
         IRXEXTE
         IRXSHVB
         TITLE 'INSTBLK entries'
XEXECIO  CSECT
 DCX '/* REXX  - process parameter list */'
 DCX 'PARSE ARG kywd nrec ioop dd option;'
 DCX 'PARSE UPPER VAR ioop ioop;'
 DCX 'PARSE UPPER VAR dd dd;'
 DCX 'option = STRIP(option,"T",")");'
 DCX 'SELECT;'
 DCX '  WHEN ioop = "WRITE" THEN DO;'
 DCX '    PARSE UPPER VAR option "(" "STEM" varname wtop .;'
 DCX '    IF wtop <> "" THEN CALL ErrorExit(4);'
 DCX '  END;'
 DCX '  WHEN ioop = "READ" THEN DO;'
 DCX '    PARSE VAR option "(" optkywd varname;'
 DCX '    PARSE UPPER VAR varname varname;'
 DCX '    SELECT'
 DCX '      WHEN optkywd = "STEM" THEN NOP;'
 DCX '      WHEN optkywd = "LIFO" THEN NOP;'
 DCX '      WHEN optkywd = "FIFO" THEN NOP;'
 DCX '      WHEN optkywd = "" THEN optkywd = "FIFO";'
 DCX '      OTHERWISE;'
 DCX '        CALL ErrorExit(2);'
 DCX '    END;'
 DCX '  END;'
 DCX '  OTHERWISE;'
 DCX '    CALL ErrorExit(3);'
 DCX 'END;'
 DCX '/* set stack entry */'
 DCX 'PUSH "/NREC_____"RIGHT(LENGTH(nrec),5,0) nrec,'
 DCX '  "/DD_______"RIGHT(LENGTH(dd),5,0) dd,'
 DCX '  "/IOOP_____"RIGHT(LENGTH(ioop),5,0) ioop,'
 DCX '  "/VARNAME__"RIGHT(LENGTH(varname),5,0) varname,'
 DCX '  "/OPTKYWD__"RIGHT(LENGTH(optkywd),5,0) optkywd,'
 DCX '  "//";/* end of list */'
 DCX 'EXIT 0;'
 DCX 'ErrorExit:'
 DCX '  SAY "Parsing error" ARG(1)'
 DCX '  EXIT ARG(1);'
$INSTBLK CSECT
USEDLEN  EQU *-$INSTBLK
         END


Anthony Rudd
Technical Consultant (Germany)                                              c A S Rudd 1994

	

--------------------------------------------------------------------------------
      
  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the MVS Update home pages (one text e-mail per month) 

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update  


    
--------------------------------------------------------------------------------

Creating files from stem variables

      frv = STMFILE(ddname,qualifier,stem)

Example ONE

      frv = STMFILE('SYSIN',SYSVAR('SYSUID'),S.)

Example TWO

      frv = STMFILE('SYSIN','TEST.FILE',S.)

/* rexx */
s.1 = " COPY INDD=DD1,OUTDD=DD2"
s.2 = " EXCLUDE MEMBER=EDITPGM"
s.0 = 2
frv = STMFILE('SYSIN','TEST',S.)
IF frv = 0
  THEN DO
    "ALLOC F(SYSPRINT) DA(*) REUS"
    "ALLOC F(DD1) DA('indsn') SHR REUS"
    "ALLOC F(DD2) DA('outdsn') SHR REUS"
    "CALL 'linklib(IEBCOPY)'"
  END
  ELSE SAY 'STMFILE RC:' frv

STMFILE SOURCE code

         TITLE 'REXX - Create output file from stem'
STMFILE  CSECT
STMFILE  AMODE 31
STMFILE  RMODE 24
         BAKR  R14,0                 save regs
         BASSM R12,0                 set base register
         USING *,R12
         B     *+26                  program identifier
         DC    CL8'STMFILE'
         DC    CL8'&SYSDATE',C'/'    compilation date
         DC    CL5'&SYSTIME'         compilation time
         LA    R13,SA                set internal save area
         MVC   4(4,R13),=C'F1SA'
         USING EFPL,R1
         L     R11,EFPLEVAL          PTR(evaluation block)
         L     R11,0(R11)            A(evaluation block)
         USING EVALBLOCK,R11
         L     R10,EFPLARG           PTR(argument list)
         USING ARGTABLE_ENTRY,R10
         LR    R9,R0                 A(environment block)
         USING ENVBLOCK,R9
         L     R9,ENVBLOCK_IRXEXTE
         USING IRXEXTE,R9
         LA    R2,8                  preload return code
* DD-name
         LM    R3,R4,ARGTABLE_ARGSTRING_PTR
* R3: A(argument); R4: L(argument)
         LTR   R4,R4
         BNH   EXIT                  parameter missing or null
         LA    R0,L'DDNAME
         CR    R4,R0
         BH    EXIT                  parameter too long
         STH   R4,P01L
         MVC   DDNAME,=CL8' '        blank 
         SH    R4,=H'1'              LC(argument)
         MVC   DDNAME(0),0(R3)
         EX    R4,*-6
* qualifier
         LA    R10,8(R10)            second parameter
         LM    R3,R4,ARGTABLE_ARGSTRING_PTR
* R3: A(argument); R4: L(argument)
         LTR   R4,R4
         BNH   EXIT                  parameter missing or null
         CH    R4,=AL2(L'DSN)
         BH    EXIT                  parameter too long
         MVI   QUALIFER,C' '         blank 
         MVC   QUALIFER+1(L'QUALIFER-1),QUALIFER
         SH    R4,=H'1'              LC(argument)
         MVC   QUALIFER(0),0(R3)
         EX    R4,*-6
         CH    R4,=AL2(L'QUALIFER)
         LA    R4,DSN+1(R4)
         MVI   P04CODE,#CATLG
         MVC   P09LEN,=H'8'
         MVC   P09CLASS,=CL8'STANDARD'
         BH    NONTEMP               fully-qualified dataset name
* create temporary DS-Name
* .Dyyyyddd.Thhmmss.TEMP
* management class
         MVI   P04CODE,#DELETE
         MVC   P09LEN,=H'4'
         MVC   P09CLASS,=CL8'WORK'
         USING TEMPNAME,R4
         TIME  DEC,TOD,LINKAGE=SYSTEM
         UNPK  XYYYYDDDX,DATE(5)
         MVC   QD,=C'.D'
         UNPK  HHMMSSX,TOD(4)
         MVC   QT,=C'.T'
         MVC   TEMP,=C'.TEMP'
         LA    R4,TEMPNAMEL(R4)
NONTEMP  LA    R0,DSN
         SR    R4,R0
         STH   R4,P02L               L(DSNAME)
* stem
         LA    R10,8(R10)            third parameter
         LM    R3,R4,ARGTABLE_ARGSTRING_PTR
* R3: A(argument); R4: L(argument)
         LTR   R4,R4
         BNH   EXIT                  parameter missing or null
         LA    R0,L'STEM
         CR    R4,R0
         BH    EXIT                  parameter too long
         MVI   STEM,C' '             blank 
         MVC   STEM+1(L'STEM-1),STEM
         SH    R4,=H'1'              LC(argument)
         MVC   STEM(0),0(R3)
         EX    R4,*-6
* append trailing '.' (if missing)
         LA    R1,STEM(R4)
         CLI   0(R1),C'.'
         BE    *+12
         MVI   0(R1),C'.'
         LA    R4,1(R4)
         LA    R4,1(R4)
         STH   R4,STEML
* get 0
         MVC   VN,STEM
         LH    R1,STEML
         LA    R1,VN(R1)
         MVC   0(2,R1),=C'0 '
         BAL   R14,GETVAR
*  R3: A(variable)
*  R4: L(variable)
         LA    R2,24                 preload return code
         LTR   R4,R4
         BZ    EXIT                  omitted
         BCTR  R4,0
         EX    R4,EXPACK
         ZAP   NRECS,D
         BZ    EXIT                  error
         ZAP   CT,=P'0'
* FREE (UNALLOC)
         MVI   S99VERB,X'02'
         MVC   S99TXTPP,=A(S99TUPL1)
         LA    R1,S99RBPTR
         SVC   99
* ALLOC
         MVI   S99VERB,X'01'
         MVC   S99TXTPP,=A(S99TUPL2)
         LA    R1,S99RBPTR
         SVC   99
         LTR   R15,R15
         BZ    DYNOK
* SEDYNALC (DYNALLOC) error
         LA    R2,12                 preload return code
         B     EXIT
DYNOK    LA    R1,FILE
         USING IHADCB,R1
         MVC   DCBDDNAM,DDNAME
         LA    R2,16                 preload return code
         OPEN  (FILE,(OUTPUT))
         LTR   R15,R15
         BNZ   EXIT
GETLOOP  LA    R2,20
         LA    R15,*+10
         O     R15,=X'80000000'
         BSM   R0,R15             set AMODE=31
         AP    CT,=P'1'
         CP    CT,NRECS
         BH    EOJ
         MVC   WK,=X'402020202020'
         EDMK  WK,CT
         MVC   VN,STEM
         LH    R15,STEML
         LA    R15,VN(R15)
         MVC   0(8,R15),0(R1)
         BAL   R14,GETVAR
*  R3: A(variable)
*  R4: L(variable)
         LTR   R15,R15
         BNZ   EXIT                  error
         LTR   R4,R4                 null record
         BZ    EXIT                  error
         LR    R14,R3                A(data)
         LR    R15,R4                L(data)
         O     R15,=X'40000000'      pad character = blank
         LA    R0,IOAREA
         LA    R1,L'IOAREA
         MVCL  R0,R14                move data
         LA    R15,*+6
         BSM   R0,R15                set AMODE=24
         PUT   FILE,IOAREA
         B     GETLOOP
EOJ      DS    0H
         LA    R15,*+6
         BSM   R0,R15                set AMODE=24
         CLOSE FILE
         LA    R2,0                  normal return
         CP    CT,=P'0'
         BNE   *+8
         LA    R2,4                  normal return (empty stack)
EXIT     DS    0H
         LA    R15,*+10
         O     R15,=X'80000000'
         BSM   R0,R15                set AMODE=31
         CVD   R2,D                  set function return value
         MVC   WK,=X'402020202120'
         LA    R1,WKE
         EDMK  WK,D+5
         LA    R15,WK+L'WK
         SR    R15,R1                L(result)
         ST    R15,EVALBLOCK_EVLEN   entry size
         BCTR  R15,0                 LC(result)
         EX    R15,EXMOVE
         LA    R15,0                 normal function return
         PR    ,                     program end
EXMOVE   MVC   EVALBLOCK_EVDATA(0),0(R1)
EXPACK   PACK  D,0(0,R3)
         TITLE 'Subroutines'
GETVAR   ST    R14,RSA
* Function: Get REXX variable
* input:
*  : variable name
* output:
*  R3: A(variable)
*  R4: L(variable)
         BAL   R14,GETVNL         get L(VN)
         LA    R6,IRX_SHVBLOCK
         USING SHVBLOCK,R6
         ST    R0,SHVNAML         L(name), normalized
         LA    R1,VN              A(name)
         ST    R1,SHVNAMA
         MVI   SHVCODE,SHVFETCH   Fetch
         ST    R3,SHVVALA         A(buffer)
         ST    R3,SHVBUFL         L(buffer)
         L     R15,IRXEXCOM       A(IRXEXCOM)
         CALL (15),(IRX_IRXEXCOM,0,0,IRX_SHVBLOCK),VL
         L     R4,SHVVALL         L(data)
         L     R14,RSA
         TM    SHVRET,SHVNEWV     new variable?
         BZR   R14                :no, return
         SR    R4,R4              else zeroize length
         BR    R14                return
RSA      DS    A
GETVNL   DS    0H
* Function: Determine actual (normalized) length of name
* input:  - name
* output: R0: L(name), normalised
         LA    R1,L'VN
         SR    R0,R0              counter
         LA    R15,VN
GETVNL1  CLI   0(R15),C' '
         BER   R14                end found
         AH    R0,=H'1'           increment counter
         LA    R15,1(R15)         bump address
         BCT   R1,GETVNL1
         BR    R14
         TITLE 'Data areas'
RC       DC    H'0'
SA       DS    18F
CT       DC    PL3'0'
D        DS    0D,PL8
NRECS    DS    PL3
* edit-workareas
WK       DS    CL6
WKE      EQU   *-1
         DC    CL8' ' filler
FILE     DCB   DSORG=PS,DEVD=DA,LRECL=80,BLKSIZE=4000,MACRF=PM
IOAREA   DS    CL80
STEML    DS    H
STEM     DS    CL16
VN       DS    2CL16
IRX_IRXEXCOM DC CL8'IRXEXCOM'
IRX_SHVBLOCK DS (SHVBLEN)X'0'
S99RBPTR DC    A(S99RB+X'80000000')
S99RB    DS    0A
S99RBLN  DC    AL1(20)
S99VERB  DS    X
S99FLAG1 DC    H'0'
S99ERROR DS    H
S99INFO  DS    H
S99TXTPP DS    A
         DC    A(0)
S99FLAG2 DC    F'0'
* DYNALLOC arguments
S99TUPL1 DC    A(P01+X'80000000')
S99TUPL2 DC    A(P01,P02,P03,P04,P05,P06,P07,P08,P09+X'80000000')
P01      DC    XL2'0001',HL2'1'
P01L     DS    HL2
DDNAME   DS    CL8
P02      DC    XL2'0002',HL2'1'
P02L     DS    HL2
DSN      DS    CL44
         ORG   DSN
QUALIFER DS    CL8
         ORG
P03      DC    XL2'0004',HL2'1,1',X'04' NEW
P04      DC    XL2'0005',HL2'1,1'       DELETE/CATLG
P04CODE  DC    X'00'
#CATLG    EQU   X'02'
#DELETE   EQU   X'04'
P05      DC    XL2'0007',HL2'0'         TRK
P06      DC    XL2'000A',HL2'1,3',AL3(1) primary quantity (PRIQ)=1
P07      DC    XL2'000B',HL2'1,3',AL3(10) secondary quant. (SECQ)=10
P08      DC    XL2'0049',HL2'1,1',X'90' RECFM=FB
P09      DC    XL2'8005',HL2'1' MGMTCLAS=WORK or STANDARD
P09LEN   DS    HL2'8' 8 or 4
P09CLASS DS    CL8'STANDARD'
TOD      DS    XL8 HHMMSS..
DATE     DS    XL4 0YYYYDDD
         DS    XL4
VA       DS    A
VL       DS    F
FRC      DS    F
         LTORG
         TITLE 'DSECTs'
TEMPNAME DSECT
QD       DS    C'.D'
         ORG   *-1
XYYYYDDDX DS   C'XYYYYDDDX'
         ORG   *-1
QT       DS    C'.T'
HHMMSSX  DS    C'HHMMSSX'
         ORG   *-1
TEMP     DS    C'.TEMP'
TEMPNAMEL EQU  *-TEMPNAME
         IRXEFPL
         IRXENVB
         IRXEXTE
         IRXEVALB
         IRXARGTB
         IRXSHVB
         DCBD  DSORG=PS,DEVD=DA
         END


Anthony Rudd
Technical Consultant (Germany)                                     c A S Rudd 1995

	

--------------------------------------------------------------------------------
      
  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the MVS Update home pages (one text e-mail per month) 

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update  
Extracting DDname information



DDINFO CSECT
DDINFO AMODE 31
DDINFO RMODE 24
R1   EQU   1
R1   EQU   2
R1   EQU   3
R1   EQU   4
R1   EQU   5
R1   EQU   6
R1   EQU   7
R1   EQU   8
R1   EQU   9
R1   EQU   10
R1   EQU   11
R1   EQU   12
R1   EQU   13
R1   EQU   14
R1   EQU   15
         BAKR  R14,0                <LINKAGE CONVENTIONS<
         LR    R12,R15              <<<<<<<<<<<<<<<<<<<<<
         USING DDINFO,R12           <<<<<<<<<<<<<<<<<<<<<
         LM    R6,R9,0(R1)          LOAD PARAM
         MVC   PJOB+0(8),0(R6)      >>>>>
         MVC   PDDN+0(8),0(R7)      >>>>>
         MVC   PDSN+0(44),0(R8)     >>>>>
         MVC   PVLS+0(6),0(R9)      >>>>>
         MVC   PDSN(44),=44X'40'
         MVC   PVLS(6),PDSN
         MVC   PJOB(8),PDSN
         CLC   PDDN(1),=X'40'
         BE    ERRD1
         CLC   PDDN(1),=X'00'
         BE    ERRD1
         EXTRACT  WORD,'S',FIELDS=(TIOT) ADDRESS TIOT
         L     R2,WORD              R2 = TIOT
         LR    R3,R2                R3 CURRENT POINTER TIOT
         MVC   PJOB+0(8),0(R2)      JOBNAME - TIOCNJOB
         MVI   PDSN,C'?'
         MVI   PVLS,C'?'
         MVI   SW,C'N'
LOOP00   EQU   *
         CLC   24(1,R3),=X'10'      TIOELNGH
         BL    DDEND                VALID DD ENTRY GT 16
         LA    R4,28(R3)            TIOEDDNM
         CLC   PDDN(8),0(R4)
         BNE   INCR0
         MVC   SW,=C'S'
JFCB0    EQU   *
         LA    R4,36(R3)            TIOEJFCB - JFCB ADDRESS
         MVC   WORD+0(4),=X'00000000'
         MVC   WORD+1(3),0(R4)      FCB ADDRESS WORD
         L     R4, WORD             FCB AREA
         MVC   PDSN+0(44),16(R4)    DSNAME - JFCBDSNM
UCB00    EQU   *
         LA    R4,41(R3)            TIOEFSRT - UCB ADDRESS
         MVC   WORD+0(4),=X'00000000'
         MVC   WORD+1(3),0(R4)      UCB ADDRESS WORD
         L     R4,WORD              UCB AREA
         MVC   PVLS+0(6),28(R4)     VOLUME SERIAL - UCBVOLI
INCRO    EQU   *
         XR    R4,R4                R4 = 0
         IC    R4,24(R3)            TIOENTRY VALUE
         AR    R3,R4                ADDRESS NEW DD ENTRY
         B     LOOP00
DDEND    EQU   *
         CLI   SW,C'N'
         BE    ERRD2
         CLI   PDSN,C'?'
         BE    ERRD3
         CLI   PVLS,C'?'
         BE    ERRVL
         MVC   VOCE,=F'0000'        INFO OK
         B     EXIT0
ERRVL    MVC   VOCE,=F'0020'        INVALID VOLSER
         B     EXIT0
ERRD1    MVC   VOCE,=F'0025'        INVALID DDNAME
         B     EXIT0
ERRD2    MVC   VOCE,=F'0030'        DDNAME NOT FOUND
         B     EXIT0
ERRD3    MVC   VOCE,=F'0035'        INVALID DSNAME
EXIT0    EQU   *
         MVC   0(8,R6),RJOB
         MVC   0(8,R7),PDDN
         MVC   0(44,R8),PDSN
         MVC   0(6,R9),PVLS
         L     R15,VOCE
         PR                         <<<<<<<<<<<<<<<<<<<<<
WKAREA   EQU   *
WORD     DC    F'0'
PDSN     DC    44C' '
PDDN     DC    8C' '
PVLS     DC    6C' '
PJOB     DC    8C' ' 
VOCE     DC    F'0'
MSGREC   DC    44C' ' 
SW       DC    C' '
         END   DDINFO
--------------------------------------------------------------------------
 
  BigProg  AMODE 31        Execute in 31-bit addressing mode
  BigProg  RMODE ANY       Reside above the 16MB line
           STORAGE OBTAIN,LENGTH=LenArea,LOC=ANY  Get DCB & etc. storage
           LR    R2,R1               Load work area base register
           USING WorkArea,R2
           MVC   MyDCB,ModelDCB      Create DCB below the line
           LA    R0,EXL              Point the DCB to exit list below
           STCM  R0,B'0111',DCBEXLSA-IHADCB+MyDCB    the line
           MVI   EXL,X'85'           Set last entry in DCB OPEN exit list
           LA    R0,OPEN24           Point the exit list to the exit rtn
           STCM  R0,B'0111',EXLOPEN    that is below the line
           MVC   OPEN24,ModOPEN24    Move glue code to below line
           LA    R0,OPEN31           Show the 24-bit code where the
           ST    R0,AdOPEN31           31-bit code is above the line
           OI    AdOPEN31,X'80'      Set bit 0 to AMODE 31 in address
           MVC   OpenList,ModelOPEN  Build OPEN parameter list
           OPEN  (MyDCB),MF=(E,OpenList)     List is below the line
            .
            .
           BR    R14                 Return to caller
  OPEN31   EQU   *         Entry point of DCB OPEN exit above the line
            .
            .
           BSM   0,R14     Switch to 24-bit mode and return to OPEN
  ModelOPEN OPEN (,INPUT),MF=L       Model OPEN parameter list
  LenOpen  EQU   *-ModelOPEN
  * The following is the model for the DCB OPEN exit routine entry point.
  * We copy this code to the work area, which is below the line.  The
  * BSM sets the current addressing mode (24) in bit 0 of R14 without
  * changing anything else in R14.  It also switches to 31-bit due to
  * bit 0 in R15 and branches to the address in R15.
  ModOPEN24 L    R15,AdOPEN31-OPEN24(,R15) Entry pt to DCB OPEN exit rtn
           BSM   R14,R15        Save AMODE, switch to 31-bit and branch
  LenOPEN24 EQU  *-ModOPEN24
  * DCB model, which is above the line.
  ModelDCB DCB   DSORG=PS,DDNAME=SYSIN,MACRF=(GL,PL)
  *
  * Dynamic storage that must reside below 16MB line due to DCB & exit
  * list restrictions.
  WorkArea DSECT
  MyDCB    DS    XL(DCBLngQS)  Actual QSAM DCB
  * Each entry in DCB exit list is four bytes.
  EXL      DC    X         Last entry in exit list and for DCB OPEN exit
  EXLOPEN  DS    AL3       Address of 24-bit DCB OPEN exit routine
  OPENList DS    XL(LenOpen) OPEN parameter list
  * The following is executable code to branch above the 16MB line.
  OPEN24   DS    XL(LenOPEN24)   DCB OPEN exit below 16MB line
  AdOPEN31 DS    A         Address of DCB OPEN exit above the line
  LenArea  EQU   *-WorkArea
           DCBD  DSORG=PS,DEVD=DA  Mapping macro for DCB
 
This figure is an example of a technique to have a 31-bit
exit routine residing above the 16MB line
but with an entry point below the line.
This is an example of a glue routine.


#####

Another example from 
z/OS V1R10 DFSMS Using Data Sets


COPYPROG CSECT 
COPYPROG RMODE ANY 
COPYPROG AMODE 31 
	GETMAIN R,LV=Arealen,LOC=(BELOW,64) 
	LR R11,R1 
USING 	MYAREA,R11 
USING 	IHADCB,INDCB	INDCB and INDCBE in 24 bit  
USING 	DCBE,INDCBE      GM area ref by USING MYAREA
*                       IHADCB is DSECT contains DCB and DCBE
*                        wich can now be ref USING MYAREA
	MVC IHADCB(AreaLen),MYDCB Copy CSECT DCB and DCBE 
	LA R0,DCBE      ref to DCBE copy in GM MYAREA 
*		      store this in fld DBCDCBE ref by
	ST R0,DCBDCBE    IHADCB (USING off r11 MYAREA)
	OPEN (IHADCB,),MF=(E,INOPEN) Open to read IHADCB R11
	LTR R15,R15     Branch if DDname seems not 
	BNZ ... to be defined 
* Loop to read all the records 
LOOP 	GET INDCB Get LOCATE, address of a record in R1 
*... Process a record 
	B LOOP Branch to read next record 
*    more 	
* I/O error routine for INDCB 
IOERROR SYNADAF ACSMETH=QSAM Get message area 
	MVI 6(R1),X'80' Set WTO MCS flags 
	MVC 8(16,R1),=CL16’I/O Error’ Put phrase on binary fields 
	MVC 128(4,R1),=X'00000020' Set ROUTCDE=11 (WTP) 
	WTO MF=(E,4(R1)) Write message to user SYNADRLS Release SYNADAF area, fall through 
* The GET macro branches here after all records have been read 
EOD CLOSE MF=(E,INOPEN) Close the data set 
* FREEPOOL not needed due to RMODE31=BUFF ... 

* Rest of program 

MYDCB DCB DDNAME=INPUT,MACRF=GL,RECFM=VB, 
* DCBE=MYDCBE 
MYDCBE DCBE EODAD=EOD,SYNAD=IOERROR,BLKSIZE=0,RMODE31=BUFF 
OPEN (,INPUT),MF=L,MODE=24 
AreaLen EQU *-MYDCB 

        relDCBD DSORG=QS,DEVD=DA 
	IHADCBE Could be above 16 MB line 
MYAREA DSECT 
INDCB 	DS XL(DCBLNGQS) 
INDCBE 	DS XL(DCBEEND-DCBE) 
INOPEN 	OPEN (,),MF=L
--------------------------------------------------------------------------------

Archive listings by issue:
AIX Update | CICS Update | DB2 Update | MVS Update | RACF Update | TCP/SNA Update | VSAM Update


--------------------------------------------------------------------------------

Sending e-mails from a mainframe



//APPLPGM JOB MSGCLASS=Z,CLASS=B,NOTIFY=&SYSUID
//***********************************************************
//* SENDING E-MAILS FROM JCL IN CASE OF ERROR IN PREVIOUS STEP
//***********************************************************
//STEPPGM EXEC PGM=PGMNAME,REGION=4800K
//STEPLIB DD DSN=APPHLQ.PROD.LOADLIB,DISP=SHR
//INPUT1  DD DSN=APPHLQ.INPUT1.FILE,DISP=SHR
//INPUT2  DD DSN=APPHLQ.INPUT2.FILE,DISP=SHR
//ERRORS  DD DSN=APPHLQ.ERRORS.FILE,DISP=SHR
//*
//IFSTEP   IF (STEPPGM.RC>0) THEN
//
// SENDMAIL step goes here
//
//IFSTEP ENDIF
//*


//SENDMAIL  JOB MSGCLASS=Z,CLASS=B,NOTIFY=&SYSUID
//**************************************************
//* SENDING MAIL FROM HOST USING IEBGENER
//**************************************************
//SENDMAIL EXEC PGM=IEBGENER
//SYSUT1   DD *
HELO SMTP_SERVER
MAIL FROM:<senderid@company.com>
RCPT TO: <emailid1@client1.com>
RCPT TO: <emailid2@client2.com>
DATA
SUBJECT:  MESSAGE TITLE

      Insert the message here

//SYSUT2   DD SYSOUT=(B,SMTP)
//SYSPRINT DD SYSOUT=*
//SYSIN    DD DUMMY
//*


//SENDMAIL JOB MSGCLASS=Z,CLASS=B,NOTIFY=&SYSUID
//**************************************************
//* SENDING MAIL FROM HOST USING IEBGENER
//**************************************************
//SENDMAIL EXEC PGM=IEBGENER
//SYSUT1   DD DSN=APPHLQ.HEADER.MSG,DISP=SHR
//         DD DSN=APPHLQ.BODY.MSG,DISP=SHR
//SYSUT2   DD SYSOUT=(B,SMTP)
//SYSPRINT DD SYSOUT=*
//SYSIN    DD DUMMY
//*


    USERID.HEADERS.MSG(CLIENT1).
    APPHLQ.BODY.MSG has the message itself.


//SYSUT2   DD SYSOUT=(B,SMTP)


//SENDMAIL JOB MSGCLASS=Z,CLASS=B,NOTIFY=&SYSUID
//*******************************************************************
//*  SENDING ONE MAIL USING IDCAMS UTILITY
//*******************************************************************
//STEP20   EXEC PGM=IDCAMS
//MAIL     DD DSN=APPHLQ.HEADER.MSG,DISP=OLD
//         DD DSN=APPHLQ.BODY.MSG,DISP=OLD
//OUT      DD SYSOUT=(B,SMTP)
//SYSPRINT DD SYSOUT=*
//SYSIN    DD *
   REPRO INFILE(MAIL) OUTFILE(OUT)
//*


//SENDMAIL JOB MSGCLASS=Z,CLASS=B,NOTIFY=&SYSUID
//*******************************************************************
//*  SENDING MULTIPLE MAILS USING IDCAMS UTILITY
//*******************************************************************
//STEP20   EXEC PGM=IDCAMS
//MAIL1    DD DSN=APPHLQ.HEADER1.MSG,DISP=OLD
//         DD DSN=APPHLQ.BODY1.MSG,DISP=OLD
//MAIL2    DD DSN=APPHLQ.HEADER2.MSG,DISP=OLD
//         DD DSN=APPHLQ.BODY2.MSG,DISP=OLD
//MAIL3    DD DSN=APPHLQ.HEADER3.MSG,DISP=OLD
//         DD DSN=APPHLQ.BODY3.MSG,DISP=OLD
//MAIL4    DD DSN=APPHLQ.HEADER4.MSG,DISP=OLD
//         DD DSN=APPHLQ.BODY4.MSG,DISP=OLD
//OUT1     DD SYSOUT=(B,SMTP)
//OUT2     DD SYSOUT=(B,SMTP)
//OUT3     DD SYSOUT=(B,SMTP)
//OUT4     DD SYSOUT=(B,SMTP)
//SYSPRINT DD SYSOUT=*
//SYSIN        DD *
  REPRO INFILE(MAIL1) OUTFILE(OUT1)
  REPRO INFILE(MAIL2) OUTFILE(OUT2)
  REPRO INFILE(MAIL3) OUTFILE(OUT3)
  REPRO INFILE(MAIL4) OUTFILE(OUT4)
//*


SMTPNOTE FROM(SENDERID@COMPANY.COM) TO(EMAILID@CLIENT.COM)
         SU('Title of the message') DA('APPHLQ.SMTP.MESSAGE')


//
// previous steps
//
//IFSTEP   IF (LASTSTEP.RC>0) THEN
//TONOTE   EXEC PGM=IKJEFT01
//SYSPROC  DD DSN= SYS1.OEM.CLIST,DISP=SHR
//SYSTSPRT DD SYSOUT=*
//SYSTSIN  DD *
PROFILE NOPREFIX
%SMTPNOTE TO(EMAILID@CLIENT.COM) -
 SU('*** STEPNAME - COND>0 ***') DA('APPHLQ.ERRORS.FILE')
//IFSTEP ENDIF
//*


 SENDMAIL: PROC OPTIONS(MAIN) REORDER;

DCL LENGTH       BUILTIN;
DCL PLIRETV      BUILTIN;
DCL ADDR         BUILTIN;

DCL TEMPIN       FILE RECORD INPUT;
DCL TEMPF        FILE RECORD OUTPUT;
DCL SYSPRINT     OUTPUT;

DCL RECIN        CHAR(80);
DCL 1 EMAIL,
      2 FROM     CHAR(50)          VAR,
      2 TO       CHAR(50)          VAR,
      2 CC       CHAR(50)          VAR,
      2 SUBJECT  CHAR(50)          VAR,
      2 DATASET  CHAR(50)           VAR,
      2 RC       BIN FIXED(31),
      2 ABEND    BIN FIXED(31);

DCL 1 CMD,
      2 CMDLINE  CHAR(300)          VAR,
      2 CMDTYPE  CHAR(1),
      2 RC	   BIN FIXED(31),
      2 ABEND    BIN FIXED(31);

DCL LINE         CHAR(80);
DCL CMDTYPE2     CHAR(1)            INIT('02'X);
DCL CMDTYPE5     CHAR(1)            INIT('05'X);
DCL QUOTE        CHAR(1)            INIT('7D'X);
DCL I            BIN FIXED(15);
DCL EOF          BIT(1)             INIT('0'B);

ON ENDFILE(TEMPIN) EOF='1'B;

EMAIL.FROM='SENDERID@COMPANY.COM';
EMAIL.SUBJECT='E-mail from application program';
EMAIL.DATASET=QUOTE||'TSOTEMP.TXT'||QUOTE;

READ FILE(TEMPIN) INTO(RECIN);
DO WHILE(^EOF);

   OPEN  FILE(TEMPF);
   LINE='FIRST  LINE OF MESSAGE';
   WRITE FILE(TEMPF) FROM(LINE);
   LINE='SECOND LINE OF MESSAGE';
   WRITE FILE(TEMPF) FROM(LINE);
   LINE='THIRD  LINE OF MESSAGE';
   WRITE FILE(TEMPF) FROM(LINE);
   CLOSE FILE(TEMPF);

   IF INDEX(RECIN,'@')=0
   THEN DO;
          LINE='WRONG TOUSER: '||TOUSER;
          PUT SKIP DATA(LINE);
          GOTO NEXTTOUSER;
        END;
   DO I=1 TO 80 WHILE(SUBSTR(TOUSER,I,1)^=' ');
   END;
   EMAIL.TO=SUBSTR(RECIN,1,I-1);

   CMDLINE='SMTPNOTE SU(' || E-MAIL.SUBJECT  ||  ') TO('   || E-MAIL.TO
           ||') DA('  ||  E-MAIL.DATASET  ||  ') FROM('  || E-MAIL.FROM
           ||  ') NOCC BATCH';
   CMD.CMDTYPE=CMDTYPE5;
   CMD.RC=0;
   CMD.ABEND=0;
   CALL TSOCMD(CMD);
   SELECT (CMD.RC);
     WHEN (0)
          PUT SKIP LIST('E-MAIL SENT SUCCESSFULY');
     WHEN (4)
          PUT SKIP LIST('ERROR IN TSOLNK',CMD.ABEND);
     WHEN (8)
          PUT SKIP LIST('ERROR IN STMPNOTE',CMD.ABEND);
     OTHERWISE;
   END;
   READ FILE(TEMPIN) INTO(RECIN);
ENDDO;

TSOCMD: PROC(CMD);

DCL 1 CMD,
      2 CMDLINE	CHAR(300)          VAR,
      2 CMDTYPE	CHAR(1),
      2 RC	BIN FIXED(31),
      2 ABEND	BIN FIXED(31);

DCL TSOLNK ENTRY(
      1,
       2 BIN FIXED(15,0),
       2 BIT(8),
       2 BIT(8),
      CHARACTER (*),
      BIN FIXED(31,0),
      BIN FIXED(31,0),
      BIN FIXED(31,0),
      BIN FIXED(31,0)
          ) EXTERNAL OPTIONS(ASSEMBLER RETCODE INTER);

DCL CHAR1	CHAR(1);
DCL BIT8	BIT(8)                       BASED(ADDR(CHAR1));
DCL 1 PARM1,
      2 PARM11 	BIN FIXED(15,0),
      2 PARM13 	BIT(8),
      2 PARM14 	BIT(8);
DCL PARM2 	CHAR(300)                    VAR;
DCL PARM3 	BIN FIXED(31,0);
DCL PARM4 	BIN FIXED(31,0);
DCL PARM5 	BIN FIXED(31,0);
DCL PARM6 	BIN FIXED(31,0);

RC=0;
ABEND=0;

PARM11=0;
PARM13='00000001'B;
CHAR1 =CMDTYPE;
PARM14=BIT8;
PARM2 =CMDLINE;
PARM3 =LENGTH(PARM2);
CALL TSOLNK(PARM1,PARM2,PARM3,PARM4,PARM5,PARM6);

SELECT (PLIRETV);
  WHEN (0);
  WHEN (4)
       DO;
         RC=8;
         ABEND=PARM6;
       END;
  WHEN (12)
       DO;
         RC=8;
         ABEND=PARM5;
       END;
  WHEN (20,24)
       DO;
         RC=4;
         ABEND=PARM5;
       END;
  OTHERWISE
       DO;
         RC=4;
         ABEND=31;
       END;
END;
RETURN;
END TSOCMD;
END SENDMAIL;


//SENDMAIL  JOB MSGCLASS=Z,CLASS=B,NOTIFY=&SYSUID
//*********************************************************************
//*  SENDING E-MAILS FROM PL/1 PROGRAM
//*********************************************************************
//EXECMAIL EXEC PGM=IKJEFT01
//STEPLIB  DD DSN=APPHLQ.UNIT.LOADLIB,DISP=SHR
//SYSPROC  DD DSN=SYS1.OEM.CLIST,DISP=SHR
//SYSTSPRT DD SYSOUT=*
//CEEDUMP  DD SYSOUT=*
//PLIDUMP  DD SYSOUT=*
//SYSPRINT DD SYSOUT=*
//SYSUDUMP DD SYSOUT=*
//SYSIN    DD DUMMY
//TEMPF    DD DSN=APPHLQ.REPORT.FILE,DISP=OLD
//SYSTSIN  DD *
     CALL 'APPHLQ.UNIT.LOADLIB(SENDMAIL)'
//*

Predrag Jovanovic
Project Developer
Pinkerton Computers Consultants Inc (USA)                             c Xephon 2001
C:\MyDoc\Host\expl_get_zos_cvt_cobNrexx.txt
interesting asm stuff
* --- Get the CVT Address --------------------
         L     R1,FLCCVT-PSA(0)        R1 -> CVT

* --- Get the SMCA Address -------------------
         L     R1,CVTSMCA-CVT(R1)      R1 -> SMCA  
 
* --- Get the z/OS SMFID  --------------------
         USING SMCABASE,R1                         
         MVC   ZOSNAME(L'SMCASID),SMCASID          
                 
* --- DSECTs we need for these control blocks -- 
         IHAPSA ,                      Map PSA 
         CVT DSECT=YES                 Map CVT 
         IEESMCA DSECT=YES             Map SMCA

cobol:
       DATA DIVISION.               
       Linkage Section.                         
                                   
      * --- Map PSA  --------------------------------------  
       01  PSA.                             
           02   filler                 pic x(548).          
           02   PSAAOLD                pointer.            
                                               
      * --- Map ASCB  -------------------------------------  
       01  ASCB.                                         
           02   filler                 pic x(172).         
           02   ASCBJBNI               pointer.          
           02   ASCBJBNS               pointer.         
                                                     
       01  STCNAME                     pic x(8).         
       01  JOBNAME                     pic x(8).         
                                                        
       PROCEDURE DIVISION.                            
           SET ADDRESS OF PSA TO NULL.               
           SET ADDRESS OF ASCB TO PSAAOLD.              
           SET ADDRESS OF JOBNAME TO ASCBJBNI.        
           SET ADDRESS OF STCNAME TO ASCBJBNS.           
           DISPLAY "(DZSCOB1) " STCNAME ", " JOBNAME.  
           GOBACK.  
		   
/* Rexx */
/* --- Get Address of ASCB ----------------------- */  
ASCB_Addr = C2D(Storage(224,4))  /* Get address of ASCB */
 
/* --- First check ASCBJBNI for Jobname ------------------- */
Interpret "JobAddr = Storage("D2X(ASCB_ADDR+172)",4)"

If C2D(JobAddr) = 0 Then
   /* --- Not in initiator, so get jobname from ASCBJBNS -- */
   Interpret "JobAddr = Storage("D2X(ASCB_ADDR+176)",4)"
   
Interpret "Job = Storage("C2X(JobAddr)",8)" 
say "Jobname: " Job
exitSETS     CSECT
CVTPTR   EQU   16
CVTTVT   EQU   X'9C'
R15      EQU   15
R14      EQU   14
R13      EQU   13
R12      EQU   12
R11      EQU   11
R00      EQU   0
         IKJTSVT

 SETS     CSECT
         STM   R14,R12,12(R13)   SAVE CALLER'S REGISTERS
         BALR  R12,0             ESTABLISH ADDRESSABILITY
         USING *,R12             BASE REGISTER OF EXECUTING PROGRAM
         ST    R13,SAVEAREA+4    CALLER'S SAVEAREA ADDRESS
         LA    R15,SAVEAREA      EXECUTING PROGRAM'S SAVEAREA ADDRESS
         ST    R15,8(,R13)       EXECUTING PROGRAM'S SAVEAREA ADDRESS
         LA    R13,SAVEAREA      EXECUTING PROGRAM'S SAVEAREA ADDRESS
*

 

*
         L     R15,CVTPTR              ACCESS THE CVT
         L     R15,CVTTVT(,R15)        ACCESS THE TSVT
         L     R15,TSVTVACC-TSVT(,R15) ACCESS THE VARIABLE ACCESS RTN
*

*        INVOKE THE VARIABLE ACCESS SERVICE
*
         LTR   R15,R15         VERIFY TSVT ADDRESS PRESENT
         BNZ   CALL441         IF PRESENT, CALL IKJCT441

LINK441  LINK  EP=IKJCT441,                                            *
               PARAM=(ECODE,   ENTRY CODE                              *
               NAMEPTR,        POINTER TO VARIABLE NAME                *
               NAMELEN,        LENGTH OF VARIABLE NAME                 *
               VALUEPTR,       POINTER TO VARIABLE VALUE               *
               VALUELEN,       LENGTH OF VARIABLE VALUE                *
               TOKEN),         TOKEN TO VARIABLE ACCESS SERVICE        *
               VL=1            CAUSES HI BIT ON IN THE PARM LIST
         B     RET441

CALL441  CALL  (15),                                                   *
               (ECODE,         ENTRY CODE                              *
               NAMEPTR,        POINTER TO VARIABLE NAME                *
               NAMELEN,        LENGTH OF VARIABLE NAME                 *
               VALUEPTR,       POINTER TO VARIABLE VALUE               *
               VALUELEN,       LENGTH OF VARIABLE VALUE                *
               TOKEN),         TOKEN TO VARIABLE ACCESS SERVICE        *
               VL              CAUSES HI BIT ON IN THE PARM LIST

*
RET441   LTR   R15,R15         CHECK RETURN CODE
         BNZ   ERRORRTN
*

*
ERRORRTN DS   0H
         L    R13,4(,R13)      CALLER'S SAVEAREA
         L    R14,12(,R13)     RESTORE REGISTER 14
         LM   R00,R12,20(R13)  RESTORE REMAINING REGISTERS
         BR   R14              RETURN TO CALLER, REGISTER 15 CONTAINS
*                              THE RETURN CODE FROM IKJCT441
*

*
NAME     DC    CL12'VARIABLENAME'  NAME OF THE VARIABLE
NAMELEN  DC    F'12'               LENGTH OF THE VARIABLE NAME
VALUE    DC    CL3'YES'            VARIABLE VALUE
VALUELEN DC    F'3'                LENGTH OF THE VARIABLE VALUE
NAMEPTR  DC    A(NAME)             POINTER TO THE VARIABLE NAME
VALUEPTR DC    A(VALUE)            POINTER TO THE VARIABLE VALUE
TOKEN    DC    F'0'                TOKEN (UNUSED HERE)
ECODE    DC    A(TSVEUPDT)         ENTRY CODE FOR SETTING VALUES
SAVEAREA DS    18F
         END

    
--------------------------------------------------------------------------------

Dumping all REXX variables under TSO

I have frequently found the need to dump out various REXX
variables when debugging a REXX EXEC. The typical way is to
issue a SAY statement displaying the variable. This gets tiresome
when you have a lot of variables or when variable names are
different in each EXEC. To fix this, I wrote a small program which
will dump out each defined REXX variable when it is called from
a REXX environment. The program calls the IREXCOM service
to return each variable and its value, and issues a TPUT macro to
put out the variable name and value. To make the output readable,
I have restricted both the length of the variable name and its value
to a maximum of 38 bytes so the output will fit on a single 80-
byte terminal line display. To handle the situation where a variable
and/or its value is greater than 38 bytes, the program will end the
variable and/or its value with 3 periods (...) to indicate that some
truncation occurred. To find the full values in these instances, the
user must resort to the SAY statement, or the program can be
modified to display longer values. For quick debugging, however,
the REXXDUMP function is extremely easy and informative with
an absolute minimum of work involved to use it.

The sample EXEC below shows the use of the REXXDUMP user
function. This sample EXEC also sets up various REXX
SIGNAL conditions to further aid debugging. I use this skeleton
(the SIGNAL statements and the labels they branch to) in all my
EXECs to display various error-related information.

Following the EXEC is some sample output. It is interesting to
note, when calling the IREXCOM service, that the variables
returned are not necessarily in the same order in which they were
defined. This is in evidence on the PARSE VERSION statement:
when the variables are displayed, they are not in the order in
which they occur in the statement. I have no explanation for this
and have even found that, when running the same EXEC multiple
times, REXXDUMP may show the variables in a different order
each time (so don't be surprised or think it is a bug with the
REXXDUMP code).

Sample REXX Exec For Debugging

/* REXX */
signal on failure  name general
signal on error    name general
signal on halt     name general
signal on novalue  name general
signal on syntax   name general
parse version w.1 w.2 w.3 w.4 w.5
x='abcdefghijklmnopqrstuvwxyz0123456789]@#$%^&*()_+abcdefghijklmnopq'
y='abcdefghijklmnopqrstuvwxyz012345678989'
xabcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz12='1'
eabcdefghijklmnopqrstuvwxyz01234567890='x'
yabcdefghijklmnopqrstuvwxyz01234567890='1'
qabcdefghijklmnopqrstuvwxyz012345678989012=1234567890123456789012345||,
678901234567890123456789
rabcdefghijklmnopqrstuvwxyz01234567890=1234567890123456789012345]],
678901234567890123456789
say 'parse version(w1-5)  =' w.1 w.2 w.3 w.4 w.5
parse source w.6
say 'parse source(w.6)     =' w.6
say '*** *** *** *** *** Rexxdump output *** *** *** *** ***'
"REXXDUMP"
exit
GENERAL:
 SAY "msg0 trapped condition="CONDITION("C")
 if condition("C") = "FAILURE" | ,
    condition("C") = "SYNTAX"  | ,
    condition("C") = "ERROR" then ,
 do
    SAY "msg1 RC="RC
    SAY "msg2 CMD FAILED-CODE="D2X(ABS(RC))
    SAY "msg3 ERROR MSG FROM REXX IS "ERRORTEXT(abs(RC))
    IF RC = -3 THEN SAY "msg3 CMD NOT FOUND"
 end
 SAY "msg4 ERROR ON LINE "SIGL
 SAY "msg5 LINE W/ERROR="SOURCELINE(SIGL)
 SAY "msg6 condition desc="CONDITION("D")
 SAY "msg6 instruction causing condition="CONDITION("I")
 SAY "msg6 condition trap status="CONDITION("S")
exit

Sample Output From Above Exec

parse version(w.1-w.5)  = REXX370 3.46 31 May 1988
parse source(w.6)     = TSO COMMAND Z2 SYSEXEC ? ? TSO ISPF ?
*** *** *** *** *** Rexxdump output *** *** *** *** ***
Y = abcdefghijklmnopqrstuvwxyz012345678989
X = abcdefghijklmnopqrstuvwxyz012345678...
RABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890 = 12345678901234567890123456789012345...
EABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890 = x
QABCDEFGHIJKLMNOPQRSTUVWXYZ01234567... = 12345678901234567890123456789012345...
XABCDEFGHIJKLMNOPQRSTUVWXYZ01234567... = 1
YABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890 = 1
W.1 = REXX370
W.3 = 31
W.2 = 3.46
W.6 = TSO COMMAND Z2 SYSEXEC ? ? TSO ISPF ?
W.5 = 1988
W.4 = May

REXXDUMP SOURCE CODE

         TITLE 'REXXDUMP - DUMP ALL REXX VARIABLES'
REXXDUMP CSECT
         YREGS
         SAVE  (14,12),,REXXDUMP-&SYSDATE
         LR    R12,R15
         USING REXXDUMP,R12
         LA    R15,SAVE
         ST    R13,SAVE+4
         ST    R15,8(,R13)
         LR    R13,R15
         ST    R0,EVBLOCK
         LA    R6,SHRBUF
         USING SHVBLOCK,R6
BEGIN    MVI   SHVCODE,SHVNEXTV        WANT A FETCH-NEXT
         LA    R1,VARNAME              LOAD A(VARIABLE NAME)
         ST    R1,SHVNAMA              SAVE A(VARIABLE NAME)
         MVC   VARNAME,BLANKS          CLEAR NAME FIELD
         MVC   OUTBUF,BLANKS           CLEAR OUTPUT BUFFER
         MVC   VARVAL,BLANKS           CLEAR VALUE FIELD
         XC    SWITCH,SWITCH           CLEAR SWITCH
         LA    R1,NAMELEN              LOAD LENGTH(VARIABLE NAME)
         ST    R1,SHVUSER              SAVE LENGTH(VARIABLE NAME)
         LA    R1,VARVAL               LOAD VALUE(VARIABLE NAME)
         ST    R1,SHVVALA              SAVE VALUE(VARIABLE NAME)
         LA    R1,VALLEN               LOAD LENGTH(VARIABLE VALUE)
         ST    R1,SHVBUFL              SAVE LENGTH(VARIABLE VALUE)
         LA    R1,EXCOMPL              LOAD A(PLIST)
         L     R0,EVBLOCK              LOAD A(EVALBLOCK)
         LINK  EP=IRXEXCOM             LINK TO IRXEXCOM
         LTR   R15,R15                 CHECK RETURN CODE
         BM    EXIT                    EXIT IF < 0
         CLI   SHVRET,SHVLVAR          END OF THE LINE
         BE    EXIT2                   YES,  OUT OF HERE
         CLI   SHVRET,SHVBADF          INVALID FUNCTION CODE
         BE    NOTREXX                 YES, NOT IN REXX
         L     R9,SHVNAML              GET LENGTH OF NAME
         C     R9,=A(NAMELEN)          IS IT TOO LONG
         BNH   NAMEOK                  NO, CONTINUE
         LA    R9,NAMELEN              TRUNCATE IT
         OI    SWITCH,NAMTRUNC         TURN ON SWITCH
NAMEOK   BCTR  R9,0                    MINUS ONE FOR EXECUTE
         EX    R9,MVCNAME              MOVE TO OUTBUF
         LA    R9,1(R9)                RESTORE LENGTH
         TM    SWITCH,NAMTRUNC         WAS NAME TOO LONG
         BZ    NAMEOK2                 NO, SKIP TRUNCATE TRAILER
         MVC   OUTBUF+35(3),TRAILER    ELSE, PUT OUT TRUNCATE FLAG
NAMEOK2  LA    R8,OUTBUF(R9)           POINT PAST NAME
         MVC   0(L'EQSIGN,R8),EQSIGN   PUT IN EQUAL SIGN
         LA    R9,L'EQSIGN(R9)         ACCOUNT FOR EQUAL SIGN IN LENGTH
         LA    R8,L'EQSIGN(R8)         POINT PAST EQUAL SIGN
         L     R7,SHVVALL              PICK UP VALUE LENGTH
         C     R7,=A(VALLEN)           IS IT TOO LONG
         BNH   VALOK                   NO, CONTINUE
         LA    R7,VALLEN-3             TRUNCATE IT
         OI    SWITCH,VALTRUNC         TURN ON SWITCH
VALOK    AR    R9,R7                   ADD TO TOTAL LENGTH
         BCTR  R7,0                    BUMP FOR EXECUTE
         LTR   R7,R7                   IS IT AN EMPTY VARIABLE
         BM    VALEND                  YES, SKIP MOVE
         EX    R7,MVCVAL               MOVE VALUE TO OUTBUF
         TM    SWITCH,VALTRUNC         WAS VALUE TOO LONG
         BZ    VALEND                  NO, SKIP
         MVC   35(3,R8),TRAILER        ELSE, PUT OUT TRUNCATE FLAG
VALEND   TPUT  OUTBUF,L'OUTBUF         DUMP VARIABLE/VALUE
         B     BEGIN                   START OVER AGAIN
NOTREXX  LR    R2,R15                  SAVE ERROR CODE
         TPUT  MSG1,L'MSG1             GIVE A MESSAGES
         LR    R15,R2                  RESTORE ERROR CODE FOR EXIT
         B     EXIT
EXIT2    SR    R15,R15
EXIT     L     R13,SAVE+4              RESTORE REGS
         RETURN (14,12),RC=(15)
MVCNAME  MVC   OUTBUF(0),VARNAME       EXECUTED INSTRUCTION
MVCVAL   MVC   0(0,R8),VARVAL          EXECUTED INSTRUCTION
         TITLE 'REXXDUMP - DATA SECTION'
SAVE     DC    18F'0'                  STANDARD SAVE AREA
EVBLOCK  DC    A(0)                    A(EVALBLOCK)
EXCOMID  DC    CL8'IRXEXCOM'
SHRBUF   DC    XL32'0'                 SHARED VARIABLE PLIST AREA
MSG1     DC    C'REXXDUMP MUST BE CALLED FROM A REXX PROGRAM'
BLANKS   DC    CL80' '
VARNAME  DC    CL38' '                 REXX VARIABLE NAME GOES HERE
NAMELEN  EQU   *-VARNAME               LENGTH OF VARIABLE NAME
VARVAL   DC    CL38' '                 VARIABLE VALUE GOES HERE
VALLEN   EQU   *-VARVAL                LENGTH OF VARIABLE VALUE
OUTBUF   DC    CL80' '                 OUTPUT LINE
EQSIGN   DC    C' = '                  EQUAL SIGN
TRAILER  DC    C'...'                  TRUNCATION TRAILER
SWITCH   DC    X'00'                   SWITCHES
NAMTRUNC EQU   X'80'                   NAME TRUNCATION
VALTRUNC EQU   X'40'                   LENGTH TRUNCATION
EXCOMPL  DC    A(EXCOMID)              A(EYECATCHER)-PARM 1--------|
         DC    A(0)                    PARM2                       |
         DC    A(0)                    PARM3                       |
         DC    A(SHRBUF+X'80000000')   A(SHVBLOCK)-PARM 4----------|
         IRXSHVB
         IRXEXTE
         IRXENVB
         END


                                                                                                                c Xephon 1994

	

--------------------------------------------------------------------------------
      
  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the MVS Update home pages (one text e-mail per month) 

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update  
PROC 0 DEBUG
CONTROL NOMSG NOFLUSH
IF &DEBUG=DEBUG THEN  +
  CONTROL LIST CONLIST SYMLIST MSG NOFLUSH
/**************************** INITIALIZATION **********************/
SET MSG      =                           /* MESSAGE PARM          */
SET CSR      =                           /* CURSOR PARM           */
SET CSRR     = 1                         /* CURSOR ROW PARM       */
SET RC       = 0                         /* RETURN CODE PARM      */
SET PANELNAM = TBOXPNL0                  /* PANEL NAME            */
SET TABLENAM = TBOXTBL1                  /* TABLE NAME            */
SET NAMELIST = &STR(VID VDESC VDSN VDATE VTIME VLF)
/* ALLOCATE DD FOR THE TABLE IN USER'S ISPF PROFILE*/
ALLOCATE FILE(&TABLENAM) +
         DATASET(&SYSUID..ISPPROF) SHR
/* OPEN TABLE                  */
/* IF NOT EXIST THEN CREATE IT */
ISPEXEC TBOPEN &TABLENAM WRITE LIBRARY(&TABLENAM) SHARE
IF &LASTCC = 8 THEN +
DO
  ISPEXEC TBCREATE &TABLENAM LIBRARY(&TABLENAM) WRITE +
    NAMES(&NAMELIST) SHARE
  SET VDSN=PROJECT.GROUP.TYPE(MEMBER)
  ISPEXEC TBADD    &TABLENAM   /* ADD INIT RECORD */
END
/**************************** MAINLINE   **************************/
/* LOOP UNTIL END KEY HIT */
DO WHILE &RC < 8
/* DISPLAY TABLE */
  ISPEXEC TBDISPL &TABLENAM +
          PANEL(&PANELNAM) +
          MSG(&MSG) +
          CURSOR(&CSR) CSRROW(&CSRR) +
          POSITION(CRP) +
          AUTOSEL(NO)
/* INITIALIZE VARIABLES */
  SET RC    = &LASTCC           /* LAST RETURN CODE              */
  SET CSR   = LCMD              /* CURSOR IN LINE COMMAND COLUMN */
  SET CSRR  =                   /* BLANK CURSOR ROW              */
  SET MSG   =                   /* BLANK MESSAGE                 */
  SET VTIME = &SYSSTIME         /* GET SYSTEM TIME               */
  SET VDATE = &STR(&SYSSDATE)   /* GET SYSTEM DATE               */
  SET VLF   = &LCMD             /* LAST LINE COMMAND             */
/* PROCESS PRIMARY COMMANDS */
PRIMCMDS: +
  SELECT (&PCMD)
    WHEN (GROUP)    +
      GOTO GROUP                /* SELECT MAIN PANEL            */
    WHEN (DISPMAIN) +
      GOTO DISPMAIN             /* SELECT MAIN PANEL            */
    WHEN (DISPDATE) +
      GOTO DISPDATE             /* SELECT DATE PANEL            */
    WHEN (SORTDATE) +
      GOTO SORTDATE             /* SORT LIST BY DATE            */
    WHEN (SORTDSN)  +
      GOTO SORTDSN              /* SORT LIST BY DATASETNAME     */
    WHEN (SORTGRP)  +
      GOTO SORTGRP              /* SORT LIST BY GROUP           */
    WHEN (SAVE)     +
      GOTO SAVELIST             /* SAVE LIST                    */
    WHEN (CANCEL)   +
      GOTO ENDLOOP              /* CANCEL -- END WITHOUT SAVE   */
    WHEN (QUERY)    +
      GOTO QUERY                /* QUERY TABLE                  */
    WHEN (STATS)   +
      GOTO STATS                /* SHOW TABLE STATISTICS        */
    WHEN (U31)     +
      ISPEXEC SELECT PGM(ISRUDA) PARM(ISRUDA1) +
              NEWAPPL(NO)       /* ISPF 3.1                     */
    WHEN (U32)     +
      ISPEXEC SELECT PGM(ISRUDA) PARM(ISRUDA2) +
              NEWAPPL(NO)       /* ISPF 3.2                     */
    WHEN (U33)     +
      ISPEXEC SELECT PGM(ISRUMC)                /* ISPF 3.3     */
    WHEN (U34)     +
      ISPEXEC SELECT PGM(ISRUDL) PARM(ISRUDLP)  /* ISPF 3.4     */
  END
/* PROCESS LINE    COMMANDS */
LINECMDS: +
  DO WHILE &ZTDSELS > 0
  SELECT (&LCMD)
    WHEN (E)       +
      GOTO EDITROW              /* EDIT      DATASET      */
    WHEN (B)       +
      GOTO BROWROW              /* BROWSE    DATASET      */
    WHEN (S)       +
      GOTO SUBMROW              /* SUBMIT    JOB          */
    WHEN (X)       +
      GOTO EXECROW              /* EXECUTE   CLIST        */
    WHEN (A)       +
      GOTO ADDROW               /* ADD       TABLE ROW    */
    WHEN (R)       +
      GOTO RPLROW               /* REPLICATE TABLE ROW    */
    WHEN (U)       +
      GOTO UPDROW               /* UPDATE    TABLE ROW    */
    WHEN (D)       +
      GOTO DELROW               /* DELETE    TABLE ROW    */
  END
NEXTCMDS: +
  IF &ZTDSELS > 1 THEN +
    ISPEXEC TBDISPL &TABLENAM +
          PANEL(&PANELNAM) +
          MSG(&MSG) +
          CURSOR(&CSR) CSRROW(&CSRR) +
          POSITION(CRP) +
          AUTOSEL(NO)
  ELSE +
    SET ZTDSELS = 0
  END
  ISPEXEC TBTOP  &TABLENAM
  ISPEXEC TBSKIP &TABLENAM NUMBER(&ZTDTOP)
  ISPEXEC VGET (ZVERB ZSCROLLN)
  SELECT (&ZVERB)
    WHEN (UP) THEN +
        ISPEXEC TBSKIP &TABLENAM NUMBER(-&ZSCROLLN)
    WHEN (DOWN) THEN +
        ISPEXEC TBSKIP &TABLENAM NUMBER(&ZSCROLLN)
    OTHERWISE
  END
END
/**************************** FINALIZATION ************************/
ENDLOOP: +
  ISPEXEC TBCLOSE &TABLENAM LIBRARY(&TABLENAM)
  EXIT
/**************************** SUBROUTINES *************************/
/**************************** SELECT MAIN PANEL *******************/
DISPMAIN: +
  SET PANELNAM = TBOXPNL0
  GOTO NEXTCMDS
/**************************** SELECT DATE PANEL *******************/
DISPDATE: +
  SET PANELNAM = TBOXPNL1
  GOTO NEXTCMDS
/**************************** SORT LIST BY DATE *******************/
SORTDATE: +
  ISPEXEC TBSORT &TABLENAM FIELDS(VDATE,C,D,VTIME,C,D)
  SET ZTDTOP = 1 /* POSITION TO TOP */
  GOTO NEXTCMDS
/**************************** SORT LIST BY DSN ********************/
SORTDSN:  +
  ISPEXEC TBSORT &TABLENAM FIELDS(VDSN,C,A)
  SET ZTDTOP = 1 /* POSITION TO TOP */
  GOTO NEXTCMDS
/**************************** SORT LIST BY GROUP ******************/
SORTGRP:  +
  ISPEXEC TBSORT &TABLENAM FIELDS(VID,C,A,VDSN,C,A)
  SET ZTDTOP = 1 /* POSITION TO TOP */
  GOTO NEXTCMDS
/**************************** SAVE LIST ***************************/
SAVELIST: +
  ISPEXEC TBSAVE &TABLENAM LIBRARY(&TABLENAM)
  SET ZTDTOP = 1 /* POSITION TO TOP */
  GOTO NEXTCMDS
/**************************** DISPLAY TABLE STATS *****************/
STATS:    +
  ISPEXEC TBSTATS &TABLENAM +
          CDATE(STCDATE)    +
          CTIME(STCTIME)    +
          UDATE(STUDATE)    +
          UTIME(STUTIME)    +
          USER (STUSER)
  WRITE CREATE DATE/TIME = &STCDATE &STCTIME
  WRITE USE    DATE/TIME = &STUDATE &STUTIME
  WRITE USER             = &STUSER
  GOTO NEXTCMDS
/**************************** QUERY TABLE INFO    *****************/
QUERY:    +
  ISPEXEC TBQUERY &TABLENAM +
          NAMES(QNAMES)     +
          ROWNUM(QROWS)
  WRITE NAMES = &QNAMES
  WRITE ROWS  = &QROWS
  GOTO NEXTCMDS
/**************************** EDIT   DATASET **********************/
EDITROW: +
  ISPEXEC TBPUT  &TABLENAM
  /* TRUNCATE MEMBER NAME FROM DSN      */
  SET A = &SYSINDEX((,&VDSN)
  IF &A = 0 THEN +
    DO
      SET STRDSN = &VDSN
    END
  ELSE +
    DO
      SET A = &A - 1
      SET STRDSN = &SUBSTR(1:&A,&VDSN)
    END
  /* GO AHEAD IF DSN IS VALID           */
  IF &SYSDSN('&STRDSN') = OK THEN +
    DO
      ISPEXEC EDIT DATASET('&VDSN')
      SET CSRR = &CRP
    END
  ELSE +
    DO
      WRITE CANNOT EDIT DATASET(MEMBER)
    END
  GOTO NEXTCMDS
/**************************** BROWSE DATASET **********************/
BROWROW: +
  ISPEXEC TBPUT  &TABLENAM
  /* TRUNCATE MEMBER NAME FROM DSN      */
  SET A = &SYSINDEX((,&VDSN)
  IF &A = 0 THEN +
    DO
      SET STRDSN = &VDSN
    END
  ELSE +
    DO
      SET A      = &A - 1
      SET STRDSN = &SUBSTR(1:&A,&VDSN)
    END
  /* GO AHEAD IF DSN IS VALID           */
  IF &SYSDSN('&STRDSN') = OK THEN +
    DO
      ISPEXEC BROWSE DATASET('&VDSN')
      SET CSRR = &CRP
    END
  ELSE +
    DO
      WRITE CANNOT BROWSE DATASET(MEMBER)
    END
  GOTO NEXTCMDS
/**************************** EXECUTE A CLIST *********************/
EXECROW: +
  ISPEXEC TBPUT   &TABLENAM
  IF &SYSDSN('&VDSN') = OK THEN +
      EX '&VDSN'
  ELSE +
      WRITE CLIST NOT FOUND OR INVALID
  SET CSRR = &CRP
  GOTO NEXTCMDS
/**************************** SUBMIT A JOB    *********************/
SUBMROW: +
  ISPEXEC TBPUT   &TABLENAM
  IF &SYSDSN('&VDSN') = OK THEN +
    DO
      SUBMIT &VDSN
      WRITE JCL SUBMITTED
    END
  ELSE +
      WRITE JCL NOT FOUND OR INVALID
  SET CSRR = &CRP
  GOTO NEXTCMDS
/**************************** ADD ROW        **********************/
ADDROW: +
  ISPEXEC TBVCLEAR &TABLENAM
  ISPEXEC TBADD    &TABLENAM
  ISPEXEC TBSAVE &TABLENAM LIBRARY(&TABLENAM)
  SET CSRR = &CRP + 1
  SET LCMD = 'U'
  GOTO NEXTCMDS
/**************************** UPDATE ROW     **********************/
UPDROW: +
  ISPEXEC TBPUT    &TABLENAM
  ISPEXEC TBSAVE &TABLENAM LIBRARY(&TABLENAM)
  SET CSRR = &CRP
  GOTO NEXTCMDS
/**************************** DELETE ROW     **********************/
DELROW: +
  ISPEXEC TBDELETE &TABLENAM
  ISPEXEC TBSAVE &TABLENAM LIBRARY(&TABLENAM)
  SET CSRR = &CRP
  GOTO NEXTCMDS
/**************************** REPLICATE ROW  **********************/
RPLROW: +
  ISPEXEC TBADD    &TABLENAM
  ISPEXEC TBSAVE &TABLENAM LIBRARY(&TABLENAM)
  SET CSRR = &CRP + 1
  GOTO NEXTCMDS

PANEL TBOXPNL0 SOURCE

)Attr
  ! type(input) intens(low) just(left ) caps(on ) pad('_')
  [ type(output) intens(low ) just(left ) caps(off) padc('-')
)Body expand(//)
%-/-/- Dataset Work List -/-/-
%Command ===>_PCMD                                / / %Scroll ===>+_AMT   +
+
%Line Commands:+E)dit, B)rowse, e(X)ecute, S)ubmit
%              +A)dd, U)pdate, D)elete, R)eplicate
%C Dataset Name                     Group    Description
)Model
!Z!VDSN                            !VID     !VDESC
)Init
  .zvars = '(LCMD)'
  &LCMD=' ' &PCMD=&Z
)Reinit
  if (&LCMD = E)
    &lcmd=E   refresh(lcmd)
  else
    &lcmd=' ' refresh(lcmd)
  &pcmd = &z
)Proc
  if (&ztdsels ^= 0000)
   ver(&lcmd,nonblank,list,E,B,X,S,A,U,D,R)
)End

PANEL TBOXPNL1 SOURCE

)Attr
  ! type(input) intens(low) just(left ) caps(on ) pad('_')
  [ type(output) intens(low ) just(left ) caps(off) padc('-')
)Body expand(//)
%-/-/- Dataset Work List -/-/-
%Command ===>_PCMD                                / / %Scroll ===>+_AMT   +
+
%Line Commands:+E)dit, B)rowse, e(X)ecute, S)ubmit
%              +A)dd, U)pdate, D)elete, R)eplicate
%C Dataset Name                                    Group    Date     Time  LC
)Model
!Z!VDSN                                           !VID     [VDATE   [VTIME[VLF
)Init
  .zvars = '(LCMD)'
  &LCMD=' ' &PCMD=&Z
)Reinit
  if (&LCMD = E)
    &lcmd=E   refresh(lcmd)
  else
    &lcmd=' ' refresh(lcmd)
  &pcmd = &z
)Proc
  if (&ztdsels ^= 0000)
   ver(&lcmd,nonblank,list,E,B,X,S,A,U,D,R)
)End


    
--------------------------------------------------------------------------------

More on APPC/MVS


Introduction

In an earlier article (A beginner's guide to APPC/MVS, SNA
Update, June 1993) I described the bare minimum required to
support the use of IBM's APPC/MVS to schedule an outbound
transaction. By way of an example, I included a REXX EXEC
using CPI-C calls that resulted in a transaction running in a
CICS system.

This article is a kind of sequel and assumes that the
customization documented in the preceding article has been
done. The next few paragraphs and the sample code use the
additional services supplied with APPC/MVS to execute
inbound and outbound transactions to and from a TSO/E
address space. Unlike the CPI-C calls, the service routines used
are unique to APPC/MVS - an equivalent function on another
platform would require recoding to use the services local to that
platform.

APPC/MVS requires inbound transactions to be defined to it
prior to execution by means of a TP profile. This profile
associates a variety of scheduling and security information with
a unique transaction program name. When an attach flows into
APPC/MVS, it uses the profile to execute a batch job under the
name of ASCHINT. You should be aware the scheduling of
these jobs is entirely independent of your JES, and has an
entirely separate set of parameters to control work flow, etc.

As a result of this slightly unusual scheduling method, you
don't get the usual SYSOUT datasets and you are obliged to
examine a log dataset to determine success or failure of a
transaction. I found this very frustrating when I was doing
initial development of an inbound transaction written in REXX.
Incidentally, if you are writing in a program language like
Assembler then you can use the TSO/E TEST command, which
has been updated to support the testing of APPC/MVS inbound
transactions.


TPREG

The TPREG program is a short TSO/E Command Processor
(CP) that can be inserted at the front of any REXX inbound
transaction EXEC so that it can be run from your TSO/E
address space. It accepts two positional parameters specifying
the APPC/MVS LU name to be used and the transaction
program name it should accept. The CP will wait until an
attach for the specified TP is received before returning control
to the REXX EXEC. Just prior to exiting, the program sets a
REXX variable TPREGID with a magic number which is
known as the transaction program instance.

TPREG source code

***********************************************************************
* FUNC   Allow inbound transactions to APPC/MVS to be run in a TSO/E  *
*        user address space. REXX variable TPREGID is set to the      *
*        transaction program instance that can be used by the TPCLR   *
*        command at the end of your transaction.                      *
* SYNTAX TPREG lu tpn                                                 *
*        -where lu  is the name of an application defined to APPC/MVS *
*               tpn is the name of the incoming transaction           *
* RTNS   IRXEXCOM, ATBTER1, ATBTEA1                                   *
* ATTRIB AC(0),AMODE(31),RMODE(24),*MUST RUN WITHIN REXX EXEC*        *
* RC     0    Function completed successfully                         *
*        100+ CALLTSRR failed; see 'TSO/E Programming Services Ref'   *
*        200+ IRXEXCOM failed; see 'TSO/E REXX Reference'             *
*        300+ ATBTER1 failed; see 'Writing TPs for APPC/MVS'          *
*        400+ ATBTEA1 failed; see 'Writing TPs for APPC/MVS'          *
***********************************************************************
*--------------------------------- INITIALIZATION --------------------*
         PUNCH ' ALIAS TPREG '
YJPTPREG CSECT ,
YJPTPREG AMODE 31
         BAKR  R14,0               ADD STACK ENTRY
         USING YJPTPREG,R12        ADDRESSABILITY FOR PROGRAM
         LR    R12,R15             ->ENTRY POINT
         LA    R13,SAVEAREA        ->SAVEAREA
         MVC   4(4,R13),=C'F1SA'   MARK STACK ENTRY
*--------------------------------- MAINLINE CODE ---------------------*
         BAL   R9,YJP$PARS         PARSE INPUT PARAMETERS
         BAL   R9,YJP$TER1         REGISTER_TEST TO APPC/MVS
         BAL   R9,YJP$TEA1         ACCEPT_TEST TO APPC/MVS
         BAL   R9,YJP$REXX         BUILD REXX VARIABLE REGTRID
*--------------------------------- RETURN TO CALLER ------------------*
YJP$EXIT PR    ,
* SUBROUTINE : Parse command buffer                                   *
         USING CPPL,R1             (COMMAND PROCESSOR PARAMETER LIST)
         USING PPL,R2              (PARSE PARAMETER LIST)
         USING CMDSECT,R3          (PARSE DESCRIPTOR LIST)
*--------------------------------- INITIALIZE PPL --------------------*
YJP$PARS LA    R2,PPLAREA          ->PARSE PARAMETER LIST
         MVC   PPLUPT,CPPLUPT      ->USER PROFILE TABLE (UPT)
         MVC   PPLECT,CPPLECT      ->ENVIRONMENT CONTROL TABLE (ECT)
         MVC   PPLCBUF,CPPLCBUF    ->COMMAND BUFFER
         LA    R15,ECBPARS         ->EVENT CONTROL BLOCK (ECB)
         ST    R15,PPLECB
         L     R15,=A(YJP$PCL)     ->PARAMETER CONTROL LIST (PCL)
         ST    R15,PPLPCL
         LA    R15,PDLADDR         ->PARAMETER DESCRIPTOR LIST (PDL)
         ST    R15,PPLANS
*--------------------------------- INVOKE PARSE SERVICE ROUTINE ------*
         CALLTSSR EP=IKJPARS,      INVOKE SERVICE ROUTINE :-           *
               MF=(E,(2))
         LTR   R15,R15             OK?
         BNZ   PARSERR1            (NO )
         L     R3,PDLADDR          ->PARSE DESCRIPTOR LIST
*--------------------------------- EXTRACT LU NAME -------------------*
         L     R14,PCE1            ->LU NAME
         LH    R15,PCE1+4          =LU NAME LENGTH
         ST    R15,LULEN           SAVE IN ATBTER1 PARAMETER LIST
         BCT   R15,*+10            MOVE TO ATBTER1 PARAMETER LIST :-
         MVC   LUN(*-*),0(R14)
         EX    R15,*-6
*--------------------------------- EXTRACT TP NAME -------------------*
         L     R14,PCE2            ->TP NAME
         LH    R15,PCE2+4          =TP NAME LENGTH
         ST    R15,TPLEN           SAVE IN ATBTER1 PARAMETER LIST
         BCT   R15,*+10            MOVE TO ATBTER1 PARAMETER LIST :-
         MVC   TPN(*-*),0(R14)
         EX    R15,*-6
*--------------------------------- RELEASE STORAGE -------------------*
         LA    R2,PPLAREA
         L     R2,PPLANS-PPL(,R2)
         LTR   R2,R2
         BZR   R9
         IKJRLSA (2)
         BR    R9                  RETURN TO CALLER
*--------------------------------- *ERROR*-PARSE SERVICE ROUTINE FAIL *
PARSERR1 LA    R15,100(,R15)       SET RETURN CODE
         B     YJP$EXIT            RETURN TO CALLER...
*--------------------------------- -----------------------------------*
         DROP  R1
         DROP  R2
         DROP  R3
* SUBROUTINE : Invoke APPC/MVS Register_test                          *
YJP$TER1 LOAD  EP=ATBTER1          LOAD APPC/MVS INTERFACE :-
         LR    R15,R0              ->INTERFACE ROUTINE
         LA    R1,PARMTER1         ->PARAMETER LIST
         BALR  R14,R15             INVOKE SERVICE ROUTINE
         DELETE EP=ATBTER1         DELETE APPC/MVS SERVICE ROUTINE
         L     R2,ARC              =SERVICE ROUTINE RETURN CODE
         LTR   R2,R2               OK?
         BZR   R9                  (YES)
         LA    R15,300(,R2)        (NO )
         B     YJP$EXIT            RETURN TO CALLER
* SUBROUTINE : Invoke APPC/MVS Accept_test                            *
YJP$TEA1 LOAD  EP=ATBTEA1          LOAD APPC/MVS INTERFACE :-
         LR    R15,R0              ->INTERFACE ROUTINE
         LA    R1,PARMTEA1         ->PARAMETER LIST
         BALR  R14,R15             INVOKE SERVICE ROUTINE
         DELETE EP=ATBTEA1         DELETE APPC/MVS SERVICE ROUTINE
         L     R2,ARC              =SERVICE ROUTINE RETURN CODE
         LTR   R2,R2               OK?
         BZR   R9                  (YES)
         LA    R15,400(,R2)        (NO )
         B     YJP$EXIT            RETURN TO CALLER
* SUBROUTINE : Build REXX variable                                    *
YJP$REXX LOAD  EP=IRXEXCOM         LOAD REXX INTERFACE :-
         LR    R15,R0              ->REXX INTERFACE
         SR    R0,R0               CLEAR EVALBLOK POINTER
         LA    R1,PARM             ->PARAMETER LIST
         BALR  R14,R15             SET REXX VARIABLE
         LR    R2,R15              SAVE RETURN CODE
         DELETE EP=IRXEXCOM        REMOVE REXX INTERFACE :-
         LTR   R2,R2               REXX SET OK?
         BZR   R9                  (YES)
         LA    R15,200(,R15)       SET RETURN CODE
         B     YJP$EXIT            RETURN TO CALLER...
* Data areas                                                          *
*--------------------------------- LITERAL POOL ----------------------*
         LTORG ,
*--------------------------------- DATA AREA -------------------------*
SAVEAREA DC    18A(0)              REGISTER SAVEAREA
PPLAREA  DC    7A(0)               PARSE PARAMETER LIST (PPL)
PDLADDR  DC    A(0)                ->PARSE DESCRIPTOR LIST (PDL)
ECBPARS  DC    A(0)                PARSE SERVICE ECB
TPLEN    DC    A(0)                LENGTH OF TP NAME
LULEN    DC    A(0)                LENGTH OF LU NAME
ARC      DC    A(0)                RETURN CODE
NULL1    DC    A(0)                NULL ENTRY
NULL2    DC    A(0)                NULL ENTRY
         DS    0D                  IRXEXCOM PARAMETER LIST :-
PARM     DC    A(IRXEXCOM)          ->CONSTANT
         DC    A(NULL2,NULL2)       ->NULL ENTRY
         DC    A(SHVBLOCK)          ->SHVBLOCK
         DC    X'80',AL3(NULL1)     ->NULL ENTRY
         DS    0D                  SHARED VARIABLE BLOCK (SHVBLOCK) :-
SHVBLOCK DC    A(0)                 ->NEXT SHVBLOCK
         DC    A(0)                 N/A
         DC    C'S'                 SET A VARIABLE
         DC    X'00'                RETURN CODE
         DC    X'0000'              UNUSED
         DC    A(0)                 N/A
         DC    A(VARNAME)           ->VARIABLE NAME
         DC    A(L'VARNAME)         =VARIABLE NAME LENGTH
         DC    A(VARVALUE)          ->VARIABLE VALUE
         DC    A(L'VARVALUE)        =VARIABLE VALUE LENGTH
         DS    0D                  ATBTER1 PARAMETER LIST :-
PARMTER1 DC    A(TPLEN)             ->TP NAME LENGTH
         DC    A(TPN)               ->TP NAME
         DC    A(LULEN)             ->LU NAME LENGTH
         DC    A(LUN)               ->LU NAME
         DC    X'80',AL3(ARC)       ->RETURN CODE
         DS    0D                  ATBTEA1 PARAMETER LIST :-
PARMTEA1 DC    A(VARVALUE)          ->TP INSTANCE
         DC    X'80',AL3(ARC)       ->RETURN CODE
VARNAME  DC    C'TPREGID'          NAME OF VARIABLE TO BE SET
VARVALUE DC    CL8' '              VALUE OF VARIABLE TO BE SET
IRXEXCOM DC    CL8'IRXEXCOM'       CONSTANT
TPN      DC    CL8' '              TRANSACTION PROGRAM NAME
LUN      DC    CL8' '              LOGICAL UNIT NAME
* Parse Control List (PCL)                                            *
YJP$PCL  IKJPARM DSECT=CMDSECT
PCE1     IKJIDENT 'LU',MAXLNTH=8,OTHER=ALPHANUM,CHAR,                  *
               PROMPT='up to 8 characters describing an LU name'
PCE2     IKJIDENT 'TPN',MAXLNTH=8,OTHER=ALPHANUM,CHAR,                 *
               PROMPT='up to 8 characters describing a TP name'
         IKJENDP
* MACROs                                                              *
         CVT   DSECT=YES           COMMUNICATIONS VECTOR TABLE
         IKJCPPL ,                 COMMAND PROCESSOR PARAMETER LIST
         IKJPPL ,                  PARSE PARAMETER LIST
         IKJTSVT ,                 TSO SERVICES VECTOR TABLE
         END   ,


TPCLR

The TPCLR program is an even shorter TSO/E CP that should
be inserted at the end of any REXX inbound transaction EXEC
to clean up any conversations not correctly terminated by your
own code. Failure to do this means you can no longer run any
further APPC/MVS EXECs in your address space without
logging off and on. It relies on the REXX variable TPREGID
being set to the value returned by the previous program. If you
invoke this program with an invalid value in the REXX
variable you will sometimes produce an extremely large system
dump for an 0C4 as the APPC/MVS code does not appear to
validate the field prior to using it!


TPCLR source code

***********************************************************************
* FUNC   Clean up transactions in a TSO/E user address space.         *
*        Note that REXX variable TPREGID must have been previously    *
*        set to contain the Transaction Program instance; this will   *
*        have been done if you previously called TPREG.               *
* SYNTAX TPCLR                                                        *
* RTNS   IRXEXCOM, ATBCUC1                                            *
* ATTRIB AC(0),AMODE(31),RMODE(24),*MUST BE RUN WITHIN A REXX EXEC*   *
* RC     0    Function completed successfully                         *
*        200+ IRXEXCOM failed; see 'TSO/E REXX Reference'             *
*        500+ ATBCUC1 failed; see 'Writing TPs for APPC/MVS'          *
***********************************************************************
         PUNCH ' ALIAS TPCLR '
YJPTPCLR CSECT ,
YJPTPCLR AMODE 31
*--------------------------------- INITIALIZATION --------------------*
         BAKR  R14,0               ADD STACK ENTRY
         USING YJPTPCLR,R12        ADDRESSABILITY FOR PROGRAM
         LR    R12,R15             ->ENTRY POINT
         LA    R13,SAVEAREA        ->SAVEAREA
         MVC   4(4,R13),=C'F1SA'   MARK STACK ENTRY
*--------------------------------- MAINLINE CODE ---------------------*
         BAL   R9,YJP$REXX         RESOLVE REXX VARIABLE
         BAL   R9,YJP$CLTP         CLEAN-UP TP
*--------------------------------- RETURN TO CALLER ------------------*
YJP$EXIT PR    ,
* SUBROUTINE : Resolve REXX variable                                  *
YJP$REXX LOAD  EP=IRXEXCOM         LOAD REXX INTERFACE :-
         LR    R15,R0              ->REXX INTERFACE
         SR    R0,R0               CLEAR EVALBLOK POINTER
         LA    R1,PARMREXX         ->PARAMETER LIST
         BALR  R14,R15             SET REXX VARIABLE
         LR    R2,R15              SAVE RETURN CODE
         DELETE EP=IRXEXCOM        REMOVE REXX INTERFACE :-
         LTR   R2,R2               REXX SET OK?
         BZR   R9                  (YES)
         LA    R15,200(,R15)       SET RETURN CODE
         B     YJP$EXIT            RETURN TO CALLER...
* SUBROUTINE : Issue APPC/MVS Cleanup_tp call                         *
YJP$CLTP LOAD  EP=ATBCUC1          LOAD APPC/MVS INTERFACE ROUTINE :-
         LR    R15,R0              ->INTERFACE ROUTINE
         LA    R1,PARMCUC1         ->PARAMETER LIST
         BALR  R14,R15             INVOKE ROUTINE
         DELETE EP=ATBCUC1         REMOVE ROUTINE
         L     R2,ARC              =RETURN CODE
         LTR   R2,R2               OK?
         BZR   R9                  (YES)
         LA    R15,500(,R2)        (NO )
         B     YJP$EXIT            RETURN TO CALLER
* Data areas                                                          *
*--------------------------------- LITERAL POOL ----------------------*
         LTORG ,
*--------------------------------- DATA AREA -------------------------*
SAVEAREA DC    18A(0)              REGISTER SAVEAREA
COND     DC    A(0)                CONDITION=NORMAL
NFYTYPE  DC    A(0)                NOTIFY_TYPE=NONE
ARC      DC    A(0)                RETURN CODE
NULL1    DC    A(0)                NULL ENTRY
NULL2    DC    A(0)                NULL ENTRY
         DS    0D                  IRXEXCOM PARAMETER LIST :-
PARMREXX DC    A(IRXEXCOM)          ->CONSTANT
         DC    A(NULL2,NULL2)       ->NULL ENTRY
         DC    A(SHVBLOCK)          ->SHVBLOCK
         DC    X'80',AL3(NULL1)     ->NULL ENTRY
         DS    0D                  SHARED VARIABLE BLOCK (SHVBLOCK) :-
SHVBLOCK DC    A(0)                 ->NEXT SHVBLOCK
         DC    A(0)                 N/A
         DC    C'F'                 FETCH A VARIABLE
         DC    X'00'                RETURN CODE
         DC    X'0000'              UNUSED
         DC    A(L'VARVALUE)        =BUFFER SIZE FOR FETCH
         DC    A(VARNAME)           ->VARIABLE NAME
         DC    A(L'VARNAME)         =VARIABLE NAME LENGTH
         DC    A(VARVALUE)          ->VARIABLE VALUE
         DC    A(0)                 =SIZE OF VARIABLE RETURNED
         DS    0D                  PARAMETER LIST FOR ATBCUC1 :-
PARMCUC1 DC    A(VARVALUE)          ->TPID
         DC    A(COND)              ->DEALLOCATE CONDITION
         DC    A(NFYTYPE)           ->NOTIFY TYPE
         DC    X'80',AL3(ARC)       ->RETURN CODE
VARNAME  DC    C'TPREGID'          NAME OF VARIABLE TO BE FETCHED
VARVALUE DC    CL8' '              VALUE OF VARIABLE TO BE FETCHED
IRXEXCOM DC    CL8'IRXEXCOM'       CONSTANT
* MACROs                                                              *
         END   ,


TWO SAMPLE TRANSACTIONS

The two sample outbound and inbound transactions are written
in REXX and use APPC/MVS calls.

The inbound transaction has calls to TPREG and TPCLR added
to allow the transaction to run from a TSO/E address space. To
migrate the EXEC to a production batch environment you
would only need to remove the TPREG and TPCLR calls, and
modify the associated TP profile to define the JCL required to
run a REXX EXEC in a batch TMP mode.

The samples use APPC/MVS, VTAM, and RACF definitions
that require more than the minimal security I used in my
previous article. This is because to do anything meaningful in
an inbound transaction you will probably require access to
various protected resources such as libraries or databases.
Unless you are prepared to give these resources the appropriate
universal access you will need a user-id to specify on the
PERMIT command. VTAM 3.4.1 and RACF 1.9.2 introduce a
whole variety of APPC security-related features that are beyond
the scope of this document so it's worth reading the Planning:
APPC Management manual in some detail.

Sample outbound transaction

/* REXX **************************************************************/
/* FUNC   This EXEC is an example of an outbound transaction using   */
/*        APPC/MVS services. It allocates a transaction and sends    */
/*        a single data buffer. The TPI EXEC should have been issued */
/*        from another TSO/E address space prior to calling this EXEC*/
/* SYNTAX TPO tpn plu mode user pswd prof                            */
/*        -where tpn  is the transaction program name                */
/*               plu  is the partner LU name                         */
/*               mode is the mode name to be used                    */
/*               user is the userid used in the FMH5                 */
/*               pswd is the password used in the FMH5               */
/*               prof is the group used in the FMH5                  */
/* RTN    None                                                       */
/* RC     0  EXEC ran OK                                             */
/*        4  Syntax error                                            */
/*        8  Allocate failed                                         */
/*        12 Send failed                                             */
/*        16 Deallocate failed                                       */
/*********************************************************************/
/* Parse input parameters                                            */
/*********************************************************************/
arg tp_name partner_lu_name mode_name user_id password profile
if tp_name = '' then do
   say 'TPO001E Transaction program name omitted'
   exit 4
end
if partner_lu_name = '' then do
   say 'TPO002E Partner LU name omitted'
   exit 4
end
if mode_name = '' then do
   say 'TPO003E Mode name omitted'
   exit 4
end
if user_id = '' then do
   say 'TPO004E Userid omitted'
   exit 4
end
if password = '' then do
   say 'TPO005E Password omitted'
   exit 4
end
if profile = '' then do
   say 'TPO006E Group name omitted'
   exit 4
end
/*********************************************************************/
/* Allocate transaction                                              */
/*********************************************************************/
conversation_type = 1                     /* Mapped conversation     */
sym_dest_name = '        '                /* No side information     */
partner_lu_name = left(partner_lu_name,8) /*                         */
mode_name = left(mode_name,8)             /*                         */
tp_name_length = length(tp_name)          /*                         */
return_control = 0                        /* Return when allocated   */
sync_level = 0                            /* No synchronization      */
security_type = 102                       /* Security=program        */
user_id = left(user_id,10)                /*                         */
password = left(password,10)              /*                         */
profile = left(profile,10)                /*                         */
user_token = '00'x                        /* No token                */
notify_type = 0                           /* No notification         */
tp_id = '0000000000000000'x               /* No tpid                 */
address LU62 'ATBALLC',
             'conversation_type',
             'sym_dest_name',
             'partner_lu_name',
             'mode_name',
             'tp_name_length',
             'tp_name',
             'return_control',
             'sync_level',
             'security_type',
             'user_id',
             'password',
             'profile',
             'user_token',
             'conversation_id',
             'notify_type',
             'tp_id',
             'return_code'
if return_code <> 0 then do
   say 'TPO007E ATBALLC failed; rc='return_code
   exit 8
end
/*********************************************************************/
/* Send some data                                                    */
/*********************************************************************/
send_type = 0                             /* Send buffer data        */
buffer = 'Hello from APPC/MVS outbound transaction'
send_length = length(buffer)
access_token = 0                          /* No access token         */
notify_type = 0                           /* No notification         */
address LU62 'ATBSEND',
             'conversation_id',
             'send_type',
             'send_length',
             'access_token',
             'buffer',
             'request_to_send_received',
             'notify_type',
             'return_code'
if return_code <> 0 then do
   say 'TPO008E ATBSEND failed; rc='return_code
   exit 12
end
/*********************************************************************/
/* Deallocate transaction                                            */
/*********************************************************************/
deallocate_type = 0                       /* Deallocate_flush        */
notify_type = 0                           /* No notification         */
address LU62 'ATBDEAL',
             'conversation_id',
             'deallocate_type',
             'notify_type',
             'return_code'
if return_code <> 0 then do
   say 'TPO009E ATBDEAL failed; rc='return_code
   exit 16
end
exit


Sample inbound transaction

/* REXX **************************************************************/
/* FUNC   This EXEC is an example of an inbound transaction using    */
/*        APPC/MVS services. It uses an Assembler program to allow   */
/*        it to register itself to APPC so that it could run from a  */
/*        TSO/E user address space rather than as a background job   */
/*        under the control of the APPC/MVS scheduler. This EXEC     */
/*        should be issued prior to calling the TPO EXEC from another*/
/*        address space.                                             */
/* SYNTAX TPI lun tpn                                                */
/*        -where lun is the logical unit name to be used             */
/*               tpn is the transaction name to be accepted          */
/* RTNS   TPREG - issue Register_test and Accept_test                */
/*        TPCLR - issue TP_cleanup                                   */
/* RC     0  EXEC completed OK                                       */
/*        4  Syntax error                                            */
/*        8  TPREG failed                                            */
/*        12 TPCLR failed                                            */
/*********************************************************************/
/* Validate parameters                                               */
/*********************************************************************/
arg lu tp .
if lu = '' then do
   say 'TPI001E LU name omitted'
   exit 4
end
if tp = '' then do
   say 'TPI001E TP name omitted'
   exit 4
end
/*********************************************************************/
/* Register_test and Accept_test - will wait for incoming FMH5       */
/*********************************************************************/
say 'TPI000I Waiting for attach for 'tp'...'
'TPREG 'lu tp
if rc <> 0 then do
   say 'TPI003E TPREG failed; rc='rc
   exit 8
end
/*********************************************************************/
/* Get conversation-id and log conversation partner                  */
/*********************************************************************/
address LU62 'ATBGETC',
             'conversation_id',
             'conversation_type',
             'partner_lu_name',
             'mode_name',
             'sync_level',
             'conversation_correlator',
             'return_code'
if return_code <> 0 then do
   say 'TPI004E ATBGETC failed; rc='return code
end
else do
   say 'TPI005I Conversation partner is 'partner_lu_name
end
/*********************************************************************/
/* Receive some data                                                 */
/*********************************************************************/
fill = 0
receive_length = 50
access_token = 0
notify_type = 0
address LU62 'ATBRCVW',
             'conversation_id',
             'fill',
             'receive_length',
             'access_token',
             'buffer',
             'status_received',
             'data_received',
             'request_to_send_received',
             'notify_type',
             'return_code'
if return_code <> 0 & return_code <> 18 then do
   say 'TPI006E ATBRCVW failed; rc='return code
end
else do
   say 'TPI007I Data received is 'strip(buffer)
end
/*********************************************************************/
/* Cleanup                                                           */
/*********************************************************************/
'TPCLR'
if rc <> 0 & rc <> 504 then do
   say 'TPI008E TPCLR failed; rc='rc
   exit 12
end
exit

Customization to run the above samples

Add the following VTAM application definition to your
network and activate it. table is the name of your mode table
and should contain a valid LU6.2 entry known as S62A8585. If
you change this entry name, don't forget to invoke the
transaction TPO with the new value.

A01APPC2  APPL ACBNAME=A01APPC2,
          APPC=YES,
          DDRAINL=NALLOW,
          DMINWNL=3,
          DMINWNR=6,
          DRESPL=NALLOW,
          DSESLIM=9,
          EAS=1,
          MODETAB=table,
          SECACPT=CONV,
          SRBEXIT=YES,
          VPACING=2

Issue the following RACF commands (or their equivalent).
Failure to do this will result in message ICH408 being issued
and not a lot else happening! If you change the name of the
application shown above, use that value in the commands
below. Similarly you will replace userid with your own TSO/E
user-id where the inbound transaction is to be run. Finally you
only need to do the CLASSACT variation of the SETROPTS
command once: subsequent invocations will be of the
REFRESH variety and need to be done if you make any
alterations to the profiles.

      REDEFINE APPL A01APPC2 UACC(NONE)
      PERMIT A01APPC2 CLASS(APPL) ID(userid) ACC(READ)
      SETROPTS CLASSACT(APPL) RACLIST(APPL)

Add the following statements to the APPC address space
parameter member in SYS1.PARMLIB. Obviously change the
ACBNAME parameter to match that used above. tp_dataset is
the TP profile dataset and should match that used by your other
entries.

LUADD
     ACBNAME(A01APPC2)
     SCHED(ASCH)
     BASE
     TPDATA(tp_dataset)
     TPLEVEL(USER)

Execute the following job to add a transaction program profile
to your APPC/MVS system. The TPNAME parameter may be
changed but don't forget to invoke the TPI and TPO
transactions with the new value. userid should match that
specified on the preceding RACF commands.

//        JOB
//ATBSDFMU EXEC PGM=ATBSDFMU
//SYSPRINT     DD SYSOUT=*
//SYSSDOUT  DD SYSOUT=*
//SYSSDLIB    DD DISP=SHR,DSN=tp_dataset
//SYSIN   DD DATA,DLM=XX
TPADD
     TPNAME(DM03)
     USERID(userid)
     ACTIVE(YES)
     TPSCHED_DELIMITER(##)
          JCL_DELIMETER(END_OF_JCL)
//AJOBNAME  JOB ,AUSERID
//STEPNAME EXEC PGM=IEFBR14
END_OF_JCL
##
XX

Finally copy the EXECs to a library accessible to two TSO/E
address spaces, and copy the programs to a STEPLIB,
JOBLIB, ISPLLIB, etc library. Also ensure that the library
SYS1.CSSLIB is accessible to both users: this contains the
ATB-prefixed modules used by the samples.

Running the sample transactions

On the TSO/E user defined to RACF, enter:

      TPI A01APPC2 DM03

(or equivalent if you changed any of the parameter values). It
should issue message TPI000I and then wait. On your other
TSO/E user enter:

      TPO DM03 A01APPC2 S62A8585 userid password group

and your other user-id should spring into life! If the TPI
transaction is not active first then it will be scheduled in batch
as a simple IEFBR14 job that does nothing since the TP profile
takes effect.

Return codes issued by the service calls to my programs or the
ATB-prefixed routines can be interpreted using the Application
Development: Writing Transaction Programs for APPC/MVS
manual.


Final thoughts

Obviously the transactions shown are quite trivial but it should
give you a simple platform from which you could develop your
own client/server applications in a TSO/E environment prior to
migrating them to a batch production environment.

There are several samples in this area supplied by IBM in the
SYS1.SAMPLIB dataset starting with 'IRX'. My experience
was that these samples were syntactically invalid! The
technique of reading various constants from the REXAPPC1
member just didn't work if the statement included comments.

Dave Martin (UK)                              c Xephon 1993

	

--------------------------------------------------------------------------------
     
  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the TCP/SNA Update home pages (one text e-mail every three months). 

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update  


    
--------------------------------------------------------------------------------

Utilizing GRS resources in TSO REXX



      SYSGRS(func,qname,rname,opt)



      OWNERS=nnnn,WAIT EXCLUSIVE=nnnn,WAIT SHARED=nnnn,SCOPE=scope



      user     own disp



Usage examples



ENQ a resource SHARED



   Qname = 'TSOAPPL'

   Rname = 'USER APPLICATION #1'

   If SYSGRS('ENQ',Qname,Rname) ^= 0 then do

      if rc = 4 then say 'Resource is in use'

      else say 'SYSGRS error, rc = 'rc

      exit

  end

  else say 'Resource ENQueued OK'



ENQ a resource EXCLUSIVE



   Qname = 'TSOAPPL'

   Rname = 'USER APPLICATION #1'

   If SYSGRS('ENQ',Qname,Rname,E) ^= 0 then do

      if rc = 4 then say 'Resource is in use'

      else say 'SYSGRS error, rc = 'rc

      exit

  end

  else say 'Resource ENQueued OK'



Display all users of a dataset



   Qname = 'SYSDSN'

   Rname = 'MY.PDS'

   If SYSGRS('WHO',Qname,Rname) ^= 0 then do

      if rc = 4 then say Rname 'is not use'

      else say 'SYSGRS error, rc = 'rc

      exit

  end

  do queued()

   pull line

   say line

  end



Display all users editing a dataset



   Qname = 'SPFEDIT'

   Rname = 'USER' /* data set high-level qualifier */

   /* use generic scan form of WHO to find all datasets that

     begin with 'Rname' */

   If SYSGRS('WHO',Qname,Rname,G) ^= 0 then do

      if rc = 4 then say 'No 'rname'/* datasets in use */

      else say 'SYSGRS error, rc = 'rc

      exit

  end

  do queued()

   pull line

   say line

  end



  QSPFEDIT

  RUSER.PRIVATE.PDS                            SYSGRS

  IOWNERS=0001,WAIT EXCLUSIVE=0001,WAIT SHARED=0002,SCOPE=SYSTEMS

  UUSER     OWNS EXCLUSIVE

  UUSER1    WAIT SHARED

  UUSER2    WAIT SHARED

  UUSER3    WAIT EXCLUSIVE

  QSPFEDIT

  RUSER.ISPF.ISPPROF                           ISPSPROF

  IOWNERS=0001,WAIT EXCLUSIVE=0000,WAIT SHARED=0000,SCOPE=SYSTEMS

  UUSER     OWNS EXCLUSIVE

  QSPFEDIT

  RUSER.ISPF.ISPPROF                           ISPPROF

  IOWNERS=0001,WAIT EXCLUSIVE=0000,WAIT SHARED=0000,SCOPE=SYSTEMS

  UUSER     OWNS EXCLUSIVE

  QSPFEDIT

  RUSER.ISPF.ISPPROF                           ISRPROF

  IOWNERS=0001,WAIT EXCLUSIVE=0000,WAIT SHARED=0000,SCOPE=SYSTEMS

  UUSER     OWNS EXCLUSIVE

  QSPFEDIT

  RUSER.ISPF.ISPPROF                           ISREDRT

  IOWNERS=0001,WAIT EXCLUSIVE=0000,WAIT SHARED=0000,SCOPE=SYSTEMS

  UUSER     OWNS EXCLUSIVE



SYSGRS source code



//jobname  JOB   your.jobcard.here

//**** 'NOALIGN' PARAMETER REQUIRED TO PREVENT ASSEMBLER RC 4

//STEPA EXEC ASMFCL,PARM.ASM='RENT,NOALIGN',PARM.LKED='RENT,REUS'

//ASM.SYSIN DD *

SYSGRS TITLE 'REXX FUNCTION TO ENQEUE/DEQEUE GRS RESOURCES'

***********************************************************************

***      This is a program that will execute as a REXX              ***

***      function under TSO/E REXX and will Enqueue/Dequeue GRS     ***

***      resources.                                                 ***

***      The function accepts 4 arguments:-                         ***

***       1. Function indicator:-                                   ***

***          'ENQ' - Enqueue a resource                             ***

***          'DEQ' - Dequeue a resource                             ***

***          'TST' - Test Enqueue request.                          ***

***          'WHO' - Fin who owns a resource                        ***

***       2. The GRS Major name (Qname) to use                      ***

***       3. The GRS Minor name (Rname) to use                      ***

***       4. For 'ENQ' or 'TST' only:-                              ***

***            'E' - request exclusive control of the resource      ***

***            'S' - request shared control of the resource         ***

***            (default is 'S')                                     ***

***          For 'WHO' only :-                                      ***

***            'G' - Resource name specified is generic             ***

***          blank - Resource name specified is specific            ***

***            (Default is blank)                                   ***

***   eg                                                            ***

***       call 'SYSGRS' 'ENQ','TSOAPPL','APPLICATION 1'             ***

***   OR                                                            ***

***     qnam = 'TSOAPPL'                                            ***

***     rnam = 'APPLICATION 1'                                      ***

***       chk = sysgrs('ENQ',qnam,rnam,'E')                         ***

***   The parameters can be literal strings, or valid REXX symbols  ***

***   that have been previousley set.                               ***

***   The 'TST' parameter functions as the 'ENQ' parameter, but     ***

***   control of the resource is not given to the user, instead     ***

***   the results of an ENQ are tested, and the return code set     ***

***   accordingly.                                                  ***

***   The return code from the ENQ/DEQ macro or the GQSCAN macro if ***

***   'WHO' is specified will be returned as the                    ***

***   function result (or as the RESULT special variable if         ***

***   CALLed as a subroutine) and also set as the RC special        ***

***   variable.                                                     ***

***   If on eor more parameters are omitted or are in error,        ***

***   an informational message will be issued and the function will ***

***   return REXX error 40 - invalid call to routine.               ***

***   if an explicit dequeue is not performed the enqueue will be   ***

***   implicitly dropped when the task (ie rexx exec) that          ***

***   invoked enqueue ends.                                         ***

***    For a 'WHO' request, the results are returned in the rexx    ***

***    data stack as lines with the format:-                        ***

***    cc1      - record identifier                                 ***

***    cc2-ccn  - record data (depends on identifier)               ***

***    ID          DATA                                             ***

***    __          ____                                             ***

***    Q           qname (enq major name)                           ***

***    R           rname (enq minor name)                           ***

***    I           resource infomation, in format                   ***

***  'OWNERS=nnnn,WAIT EXCLUSIVE=nnnn,WAIT SHARED=nnnn,SCOPE=scope  ***

***   ('scope' can be STEP, SYSTEM, SYSTEMS, or GLOBAL)             ***

***    U           resource user, in format:-                       ***

***  'user     own disp'                                            ***

***    where:                                                       ***

***   'user'   ..... the resource user                              ***

***   'own'    ..... 'WAIT' or 'OWNS'                               ***

***   'disp'   ..... 'SHARED' or 'EXCLUSIVE'                        ***

***   Possible Return Codes:-                                       ***

***   For 'ENQ' or 'TST'                                            ***

***        00  .................. OK, ENQ successful                ***

***        04  .................. Resource in use by another task   ***

***                               (can occur under TSO/ISPF if you  ***

***                                use SYSGRS across split screen)  ***

***        08  .................. RESOURCE ALREADY ASSIGNED TO THIS ***

***                               task.                             ***

***   For 'DEQ'                                                     ***

***        00  .................. OK, DEQ successful                ***

***        08  .................. Resource not in use by this task  ***

***   For 'WHO'                                                     ***

***        00  .................. Scan OK, Informational messages   ***

***                                will have been issued.           ***

***        04  .................. resource not in use, no messages  ***

***                                will have been issued.           ***

***      >=12  .................. Possible system error whilst      ***

***                                performing scan - retry request. ***

***********************************************************************

SYSGRS CSECT

SYSGRS AMODE 31

SYSGRS RMODE ANY

         STM   R14,R12,12(R13)         *SAVE REGS

         LR    R12,R15                 *R12 --> BASE REGISTER

         USING SYSGRS,R12              *ESTABLISH ADDRESSABILITY

         LR    R10,R0                  *R10 --> A(ENVIRONMENT BLOCK)

         USING ENVBLOCK,R10            *MAP ENVIRONMENT BLOCK

         LR    R11,R1                  *R11 --> A(PARAM LIST (EFPL))

         USING EFPL,R11                *MAP EFPL

         GETMAIN RU,LV=DYNLEN,LOC=ANY  *OBTAIN DYNAMIC STORAGE

         LR    R2,R1                   *POINT AT WORKAREA

         L     R3,=A(DYNLEN)           *SET ITS LENGTH

         LA    R4,0                    *SET DUMMY FROM ADDRESS

         LA    R5,0                    *SET DUMMY LENGTH

         MVCL  R2,R4                   *BLANK OUT THE AREA

         ST    R13,4(R1)               *SAVE R13

         ST    R1,8(R13)               *BACK-CHAIN SAVE AREAS

         LR    R13,R1                  *R13 -->A(REG SAVE/DYNAMIC AREA)

         USING DYNAM,R13               *ESTABLISH ADDRESSABILITY

         L     R9,ENVBLOCK_IRXEXTE     *R9 --> A(EXTERNAL EP TABLE)

         USING IRXEXTE,R9              *MAP IT

*        CHECK THE PARAMETER LIST FOR VALID ARGUMENTS               ***

*        AND STORE VALUES IN WORKING STORAGE                        ***

***    FIRST CHECK FOR FUNCTION CODE                                ***

         L     R8,EFPLARG              *R8 --> A(ARGUMENT TABLE)

         USING ARGTABLE_ENTRY,R8       *MAP ENTRY

         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' *END OF ARGS?

         BE    NOARG1                  *--> YES - ERROR

         L     R2,ARGTABLE_ARGSTRING_PTR    *R2 --> A(ARGUMENT)

         CLC   0(3,R2),=CL3'ENQ'            *ENQ?

         BE    GOODARG1                     *YES - CARRY ON

         CLC   0(3,R2),=CL3'TST'            *TST?

         BE    GOODARG1                     *YES - CARRY ON

         CLC   0(3,R2),=CL3'DEQ'            *DEQ?

         BE    GOODARG1                     *YES - CARRY ON

         CLC   0(3,R2),=CL3'WHO'            *WHO?

         BNE   ARG1ERR                      *INVALID FUNCTION

GOODARG1 L     R1,ARGTABLE_ARGSTRING_LENGTH *R1 --> L(ARGUMENT)

         LTR   R1,R1                   *TEST LENGTH

         BZ    NOARG1                  *ZERO? - ERROR

         LA    R4,FCODE                *R4 --> A(ARGUMENT)

         BCTR  R1,0                    *DECREASE FOR MOVE

         EX    R1,MOVEARG              *SAVE ARGUMENT

***      NOW CHECK FOR QNAME, ENSURE NOT > 8 CHARS AND STORE        ***

         LA    R8,ARGTABLE_NEXT        *R8 --> A(NEXT ARGUMENT)

         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' *END OF ARGS?

         BE    NOARG2                  *--> YES - EXIT RC 40

*                                      (INVALID CALL TO ROUTINE)

         L     R2,ARGTABLE_ARGSTRING_PTR    *R2 --> A(ARGUMENT)

         L     R1,ARGTABLE_ARGSTRING_LENGTH *R1 --> L(ARGUMENT)

         LTR   R1,R1                   *TEST LENGTH

         BZ    NOARG2                  *ZERO? - ERROR

         CH    R1,=H'8'                *LENGTH <= 8?

         BH    ARG2ERR                 *--> NO - EXIT

         OI    QNAME,C' '              *INITIALIZE

         OC    QNAME+1(L'QNAME-1),QNAME * QNAME FIELD

         LA    R4,QNAME                *R4 --> A(ARGUMENT)

         BCTR  R1,0                    *DECREASE LENGTH FOR MOVE

         EX    R1,MOVEARG              *--> SAVE ARGUMENT

***      NOW CHECK FOR RNAME, ENSURE NOT > 255 CHARS AND STORE      ***

         LA    R8,ARGTABLE_NEXT        *R8 --> A(NEXT ARGUMENT)

         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' *END OF ARGS?

         BE    NOARG3                  *--> YES - EXIT RC 40

*                                      (INVALID CALL TO ROUTINE)

         L     R2,ARGTABLE_ARGSTRING_PTR    *R2 --> A(ARGUMENT)

         L     R1,ARGTABLE_ARGSTRING_LENGTH *R1 --> L(ARGUMENT)

         LTR   R1,R1                   *TEST LENGTH

         BZ    NOARG3                  *ZERO? - ERROR

         CH    R1,=H'255'              *LENGTH <= 255'

         BH    ARG3ERR                 *--> NO - EXIT

         STH   R1,RNAMEL               * AVE LENGTH

         LA    R4,RNAME                *R4 --> A(ARGUMENT)

         BCTR  R1,0                    *DECREASE LENGTH FOR MOVE

         EX    R1,MOVEARG              *--> SAVE ARGUMENT

***      IF 'WHO' OR 'DEQ' SPECIFIED, CALL ROUTINE                  ***

         CLC   FCODE,=CL3'WHO'         * SCAN REQUESTED?

         BE    DOSCAN                  * GO DO IT

         CLC   FCODE,=CL3'DEQ'         * DEQ REQUESTED?

         BE    DODEQ                   * GO DO IT

***  ...ELSE CHECK FOR 'E' or 'S' OPTION AND STORE ('ENQ'/'TST' ONLY)**

         LA    R8,ARGTABLE_NEXT        *R8 --> A(NEXT ARGUMENT)

         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' *END OF ARGS?

         BE    NOSYS                   *YES-SET DEFAULT VALUE

         L     R2,ARGTABLE_ARGSTRING_PTR    *R2 --> A(ARGUMENT)

CHKE     CLI   0(R2),C'E'                   *EXCLUSIVE?

         BNE   CHKS                         *NO - TRY NEXT

         MVI   SYSOPT,C'E'                  *STORE

         B     DOENQ                        *CARRY ON

CHKS     CLI   0(R2),C'S'                   *SHARED?

         BNE   ARG4ERR1                     *NO - ERROR

         MVI   SYSOPT,C'S'                  *STORE

         B     DOENQ                        *CARRY ON

NOSYS    DS    0H                           *DEFAULT IF BLANK

         MVI   SYSOPT,C'S'                  * --> SET AS SHARED

         B     DOENQ                        *CARRY ON

MOVEARG  MVC   0(0,R4),0(R2)           *EXECUTABLE MOVE

***      ENQUEUE ROUTINE                                            ***

DOENQ    DS    0H

         CLC   FCODE,=CL3'TST'         *TEST VERSION?

         BE    DOTST                   *YES - GO DO IT

         CLI   SYSOPT,C'E'             *EXCLUSIVE SPECIFIED?

         BE    ENQ2                    *YES - DO IT

ENQ1     DS    0H                      *SHARED

         MVC   ENQPARM(ENQPL),ENQPLST  *MOVE IN PARAMETER LIST

         LA    R3,QNAME                *R3-->A(QNAME)

         LA    R4,RNAME                *R4-->A(RNAME)

         LH    R5,RNAMEL               *R5-->A(RNAMEL)

* DO ENQUEUE

         ENQ   ((3),(4),S,(5),SYSTEMS),RET=USE,MF=(E,ENQPARM)

         ST    R15,ENQRC               *SAVE RETURN CODE

         B     ENQOK                   *GO TO EXIT ROUTINE

ENQ2     DS    0H                      *EXCLUSIVE

         MVC   ENQPARM(ENQPL),ENQPLST  *MOVE IN PARAMETER LIST

         LA    R3,QNAME                *R3-->A(QNAME)

         LA    R4,RNAME                *R4-->A(RNAME)

         LH    R5,RNAMEL               *R5-->A(RNAMEL)

* DO ENQUEUE

         ENQ   ((3),(4),E,(5),SYSTEMS),RET=USE,MF=(E,ENQPARM)

         ST    R15,ENQRC               *SAVE RETURN CODE

         B     ENQOK                   *GO TO EXIT ROUTINE

***      ENQUEUE TEST ROUTINE                                       ***

DOTST    DS    0H

         CLI   SYSOPT,C'E'             *EXCLUSIVE SPECIFIED?

         BE    TST2                    *YES - DO IT

TST1     DS    0H                      *SHARED

         MVC   TSTPARM(TSTPL),TSTPLST  *MOVE IN PARAMETER LIST

         LA    R3,QNAME                *R3-->A(QNAME)

         LA    R4,RNAME                *R4-->A(RNAME)

         LH    R5,RNAMEL               *R5-->A(RNAMEL)

* DO ENQUEUE

         ENQ   ((3),(4),S,(5),SYSTEMS),RET=TEST,MF=(E,TSTPARM)

         ST    R15,ENQRC               *SAVE RETURN CODE

         B     ENQOK                   *GO TO EXIT ROUTINE

TST2     DS    0H                      *EXCLUSIVE

         MVC   TSTPARM(TSTPL),TSTPLST  *MOVE IN PARAMETER LIST

         LA    R3,QNAME                *R3-->A(QNAME)

         LA    R4,RNAME                *R4-->A(RNAME)

         LH    R5,RNAMEL               *R5-->A(RNAMEL)

* DO ENQUEUE

         ENQ   ((3),(4),E,(5),SYSTEMS),RET=TEST,MF=(E,TSTPARM)

         ST    R15,ENQRC               *SAVE RETURN CODE

         B     ENQOK                   *GO TO EXIT ROUTINE

***      DEQUEUE ROUTINE                                            ***

DODEQ    DS    0H

         MVC   DEQPARM(DEQPL),DEQPLST  *MOVE IN PARAMETER LIST

         LA    R3,QNAME                *R3-->A(QNAME)

         LA    R4,RNAME                *R4-->A(RNAME)

         LH    R5,RNAMEL               *R5-->A(RNAMEL)

* DO DEQUEUE

         DEQ   ((3),(4),(5),SYSTEMS),RET=HAVE,MF=(E,DEQPARM)

         ST    R15,ENQRC               *SAVE RETURN CODE

         B     ENQOK                   *GO TO EXIT ROUTINE

***      SCAN ROUTINE                                               ***

DOSCAN   DS    0H

***  ...FIRST CHECK IF 4TH ARGUMENT OF 'G' (GENERIC)

         LA    R8,ARGTABLE_NEXT        *R8 --> A(NEXT ARGUMENT)

         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' *END OF ARGS?

         BE    NOGEN                   *YES-NOT GENERIC

         L     R2,ARGTABLE_ARGSTRING_PTR    *R2 --> A(ARGUMENT)

         CLI   0(R2),C'G'                   *GENERIC

         BNE   ARG4ERR2                     *NO - ISSUE ERROR

         MVI   GENOPT,C'Y'                  *STORE

         B     SCANL

NOGEN    MVI   GENOPT,C'N'                  *NOT GENERIC

SCANL    DS    0H

         MVC   SCANPARM(SCANPL),SCANPLST    *MOVE IN PARAMETER LIST

         XC    TOKEN,TOKEN

CONT     LA    R3,QNAME                *R3-->A(QNAME)

         LA    R4,RNAME                *R4-->A(RNAME)

         LH    R5,RNAMEL               *R5-->A(RNAMEL)

         LA    R2,AREA

         CLI   GENOPT,C'Y'

         BE    SCAN2

* EXPLICIT RESOURCE SCAN

SCAN1    GQSCAN AREA=(AREA,9000),SCOPE=ALL,TOKEN=TOKEN,                X

               RESNAME=((3),(4),(5)),MF=(E,SCANPARM)

         ST    R15,ENQRC               *SAVE RETURN CODE

         LTR   R15,R15                 *RC=0 AREA IS BIG ENOUGH

         BZ    SCANL1

         CH    R15,=H'8'               *RC=8 AREA WAS TOO SMALL

         BE    SCANL1

         B     SCANOK                  *RC>8 ERROR

* GENERIC RESOURCE SCAN

SCAN2    GQSCAN AREA=(AREA,9000),SCOPE=ALL,TOKEN=TOKEN,                X

               RESNAME=((3),(4),(5),GENERIC),MF=(E,SCANPARM)

         ST    R15,ENQRC               *SAVE RETURN CODE

         LTR   R15,R15                 *RC=0 AREA IS BIG ENOUGH

         BZ    SCANL1                  *

         CH    R15,=H'8'               *RC=8 AREA WAS TOO SMALL

         BE    SCANL1                  *

         B     SCANOK                  *RC>8 ERROR

SCANL1   STCM  R0,12,TEMP1             *TEMP1 = 1ST HWRD OF R0

*                                      *= LENGTH OF RIB FIXED

         STCM  R0,3,TEMP2              *TEMP2 = 2ND HWRD OF R0

*                                      *= LENGTH OF RIBE

         LR    R3,R1                   *R3 = NO. OF RIBS IN AREA

RIBLOOP  DS    0H

* INITIALIZE STACK RECORDS

         MVC   MSGI(MSGILEN),MESSAGEI  *INFO LINE

         MVC   MSGQ(MSGQLEN),MESSAGEQ  *QNAME LINE

         MVC   MSGR(MSGRLEN),MESSAGER  *RNAME LINE

         MVC   MSGU(MSGULEN),MESSAGEU  *USER LINE

         USING RIB,R2                  *MAP RIB

         LR    R4,R2                   *R4=A(RIB)

         AH    R4,TEMP1                *ADD L(RIB FIXED AREA)

         AH    R4,RIBVLEN              *ADD L(RIB VARIABLE AREA)

* R4 IS NOW THE START ADDRESS OF THE RIBE

* OUTPUT QNAME AS STACK RECORD

OUTMSGQ  MVC   MSGQ+1(8),RIBQNAME      *MOVE QNAME TO RECORD

         LA    R1,MSGQ                 *R1 -->A(QNAME RECORD)

         LA    R0,MSGQLEN              *R0 -->L(QNAME RECORD)

         BAS   R14,@STACK              *STACK IT

* OUTPUT RNAME AS STACK RECORD

         LA    R7,RIBEND               *R7 -->A(RIB VARIABLE DATA)

         USING RIBVAR,R7               *MAP IT

OUTMSGR  XR    R1,R1                   *CLEAR R1

         ICM   R5,B'0001',RIBRNMLN     *GET RNAME LENGTH

         EX    R5,MOVERES              *DO MOVE

         B     STACKRES                *SKIP ROUND EXECUTE

MOVERES  MVC   MSGR+1(0),RIBRNAME      *EXECUTABLE INSTRUCTION

STACKRES LA    R1,MSGR                 *R1 -->A(RNAME RECORD)

         LA    R0,1                    *R0 --L(RECORD IDENTIFIER)

         AR    R0,R5                   *ADD IN RNAME LENGTH

         BAS   R14,@STACK              *STACK IT

         L     R5,RIBNTO               *R5 = NO. OF OWNERS

         CVD   R5,PTEMP                *PACK

         MVC   EDWORK,EDMASK           *MOVE IN EDIT MASK

         ED    EDWORK,PTEMP+4          *CONVERT TO PRINTABLE

         MVC   MSGIOWN,EDWORK+4        *STORE IN MESSAGE

         L     R5,RIBNTWE              *R5 - WAIT (EXCLUSIVE)

         CVD   R5,PTEMP                *PACK

         MVC   EDWORK,EDMASK           *MOVE IN EDIT MASK

         ED    EDWORK,PTEMP+4          *CONVERT TO PRINTABLE

         MVC   MSGIEXC,EDWORK+4        *STORE IN MESSAGE

         L     R5,RIBNTWS              *R5 - WAIT (SHARED)

         CVD   R5,PTEMP                *PACK

         MVC   EDWORK,EDMASK           *MOVE IN EDIT MASK

         ED    EDWORK,PTEMP+4          *CONVERT TO PRINTABLE

         MVC   MSGISHR,EDWORK+4        *STORE IN MESSAGE

CHKSTM   TM    RIBSCOPE,RIBSYS         *1-SYSTEM 0-NONSYSTEM

         BNO   CHKSTMS                 *

         MVC   MSGISCOP,=CL7'SYSTEM '  *

         B     OUTMSGI                 *GO STACK RECORD

CHKSTMS  TM    RIBSCOPE,RIBSYSS        *1-SYSTEMS 0-NONSYSTEMS

         BNO   CHKSTEP                 *

         MVC   MSGISCOP,=CL7'SYSTEMS'  *

         B     OUTMSGI                 *GO STACK RECORD

CHKSTEP  TM    RIBSCOPE,RIBSTEP        *1-STEP 0-NONSTEP

         BNO   CHKGLBL                 *

         MVC   MSGISCOP,=CL7'STEP   '  *

         B     OUTMSGI                 *GO STACK RECORD

CHKGLBL  TM    RIBSCOPE,RIBGLBL        *1-GLOBAL 0-NONGLOBAL

         BNO   OUTMSGI                 *GO STACK RECORD

         MVC   MSGISCOP,=CL7'GLOBAL '  *

OUTMSGI  LA    R1,MSGI                 *R1 -->A(INFO MESSAGE)

         LA    R0,MSGILEN              *R0 -->L(INFO MESSAGE)

         BAS   R14,@STACK              *STACK IT

         L     R6,RIBNRIBE             *NO. OF RIBE FOR RIB IN AREA

RIBELOOP DS    0H                      *

         USING RIBE,R4                 *MAP RIBE

         MVC   MSGUNAM,RIBEJBNM        *STORE USER NAME IN RECORD

         TM    RIBESFLG,RIBESTAT       *0 - WAITING, 1 - OWNER

         BO    OWNER                   *

         MVC   MSGUOWN,=CL4'WAIT'      *

         B     CHKUSE                  *

OWNER    MVC   MSGUOWN,=CL4'OWNS'      *

CHKUSE   TM    RIBERFLG,RIBETYPE       *0 = EXLUSIVE, 1 = SHARED

         BO    SHARED                  *

         MVC   MSGUDISP,=CL9'EXCLUSIVE' *

         B     OUTMSGU                  *

SHARED   MVC   MSGUDISP,=CL9'SHARED   ' *

OUTMSGU  LA    R1,MSGU                 *R1 -->A(USER RECORD)

         LA    R0,MSGULEN              *R0 -->L(USER RECORD)

         BAS   R14,@STACK              *STACK IT

         AH    R4,TEMP2                *SKIP TO END OF RIBE

         BCT   R6,RIBELOOP             *LOOP IF MORE RIBE FOR THIS RIB

         LR    R2,R4                   *SET ADDRESS OF NEXT RIB

         BCT   R3,RIBLOOP              *LOOP IF MORE RIB IN AREA

         L     R15,ENQRC               *GET GQSCAN RC

         CH    R15,=H'8'               *MORE DATA TO PROCESS ?

         BE    CONT                    *YES - LOOP ROUND

         B     SCANOK                  *ELSE GO TO EXIT ROUTINE

*        SET ENQ/DEQ RETURN CODE AS 'RC' VARIABLE &

*        FUNCTION RESULT.

ENQOK    DS    0H

         L     R15,ENQRC               *RETRIEVE ENQ/DEQ RETURN CODE

         LTR   R15,R15                 *IS IT ZERO?

         BNZ   CONVERT                 *NO - GET RC FROM AREA

         MVC   RETCODE(2),=CL2'00'     *ELSE SET RC AS '00'

CONVERT  DS    0H                      *FORMAT RETURN CODE

         LA    R15,3(,R15)             *ADDRESS RC BYTE

         XR    R1,R1                   *BLANK WORK REG

         ICM   R1,1,0(R15)             *GET RC BYTE

         CVD   R1,PTEMP                *CONVERT TO PACKED

         MVC   EDWK,=X'40212020'       *SET EDIT MASK

         ED    EDWK,PTEMP+6            *CONVERT TO CHARACTER

         MVC   RETCODE(2),EDWK+2       *SAVE TO RETCODE AREA

         B     SETRC                   *AND GO TO IRXEXCOM

*        SET GQSCAN RETURN CODE AS 'RC' VARIABLE &

*        FUNCTION RESULT.

SCANOK   DS    0H

         L     R15,ENQRC               *RETRIEVE GQSCAN RETURN CODE

         CVD   R15,PTEMP               *CONVERT TO PACKED

         MVC   EDWK,=X'40212020'       *SET EDIT MASK

         ED    EDWK,PTEMP+6            *COVERT TO CHARACTER

         MVC   RETCODE(2),EDWK+2       *SAVE TO RETCODE AREA

*        INITIALIZE IRXEXCOM PARAMETER AREA

SETRC    DS    0H

         LA    R0,COMID                *R0 --> A(IRXEXCOM ID)

         ST    R0,COMAREA              *SAVE ADDRESS

         LA    R0,COMDUMMY             *R0 --> NOT USED PARM

         ST    R0,COMAREA+4            *SAVE ADDRESS

         ST    R0,COMAREA+8            *AND AGAIN (PARM2&3 MUST BE SAME)

         LA    R0,COMSHVB              *R0 --> A(SHVBLOCK AREA)

         ST    R0,COMAREA+12           *SAVE ADDRESS

         LA    R0,COMRET               *R0 --> A(RETURN CODE AREA)

         ST    R0,COMAREA+16           *SAVE ADDRESS

         OI    COMAREA+16,X'80'        *SET HIGH BIT ON FOR LIST END

         MVC   COMID,=CL8'IRXEXCOM'    *SET EYECATCHER

*        BUILD IRXEXCOM PARAMETERS

         ST    R10,COMRET              *STORE ENVBLOCK ADDRESS (R10)

         DROP  R8

         LA    R8,COMSHVB              *R8 --> A(SHVBLOCK AREA)

         USING SHVBLOCK,R8             *MAP

         XC    COMSHVB(SHVBLEN),COMSHVB *INITIALIZE SHVBLOCK

         XC    SHVNEXT,SHVNEXT          *RESET POINTER

         MVI   SHVCODE,C'S'            *SET FUNCTION CODE - 'SET'

         LA    R0,=C'RC'               *R0 --> A(VARIABLE NAME

         ST    R0,SHVNAMA              *STORE IN SHVBLOCK

         MVC   SHVNAML,=A(2)           *STORE NAME LENGTH

         LA    R0,RETCODE              *R0 --> A(VARIABLE VALUE)

         ST    R0,SHVVALA              *STORE IN SHVBLOCK

         MVC   SHVVALL,=A(L'RETCODE)   *STORE VALUE LENGTH

*        INVOKE IRXEXCOM TO SET VARIABLE

         LR    R0,R10                  *R0 --> A(ENVBLOCK)

         LA    R1,COMAREA              *R1 --> A(PARM ADDR LIST)

         L     R15,IRXEXCOM            *R15 --> AIRXEXCOM) FROM IRXEXTE

         BALR  R14,R15                 *CALL ROUTINE

         LTR   R15,R15                 *SET OK ?

         BZ    SETOK                   *--> YES? - SKIP ABEND

         LA    R1,=CL4'IRXC'           *SET ERROR INDICATOR

         SLR   R0,R0                   *CLEAR R0

         EX    R0,*                    *FORCE DIAGNOSTIC ABEND

*        SET RETURN CODE VALUE AS FUNCTION RESULT

SETOK    EQU   *

         DROP  R8                      *DROP ARGTABLE MAP

         L     R8,EFPLEVAL

         L     R8,0(R8)                *R8 --> A(EVALUATION BLOCK)

         USING EVALBLOCK,R8            *MAP IT

         MVC   EVALBLOCK_EVLEN,=A(L'RETCODE)       *SET LENGTH

         MVC   EVALBLOCK_EVDATA(L'RETCODE),RETCODE *SET VALUE

         XR    R15,R15                 *ZERO REXX RETURN CODE

         B     RETURN                  *AND RETURN TO CALLER

*        IF FUNCTION ERROR -

*        ISSUE ERROR MESSAGE WITH IRXSAY

*        AND SET RETURN CODE AS 40 TO FLAG INVALID FUNCTION CALL.

         TITLE  'ERROR MESSAGES'

NOARG1   DS    0H

         LA    R1,=C'IRX0000I Parameter 1 missing or blank'

         LA    R0,37

         B     ERROR

ARG1ERR  DS    0H

         LA    R1,=C'IRX0000I Parameter 1 not ENQ/DEQ/WHO'

         LA    R0,34

         B     ERROR

NOARG2   DS    0H

         LA    R1,=C'IRX0000I Parameter 2 missing or blank'

         LA    R0,37

         B     ERROR

ARG2ERR  DS    0H

         LA    R1,=C'IRX0000I Parameter 2 > 8 characters'

         LA    R0,35

         B     ERROR

NOARG3   DS    0H

         LA    R1,=C'IRX0000I Parameter 3 missing or blank'

         LA    R0,37

         B     ERROR

ARG3ERR  DS    0H

         LA    R1,=C'IRX0000I Parameter 3 > 255 characters'

         LA    R0,37

         B     ERROR

ARG4ERR1 DS    0H

         LA    R1,=C'IRX0000I Parameter 4 not E or S'

         LA    R0,31

         B     ERROR

ARG4ERR2 DS    0H

         LA    R1,=C'IRX0000I Parameter 4 not G or blank'

         LA    R0,35

         B     ERROR

***      SET FUNCTION RESULT                                        ***

ERROR    DS    0H

         BAS   R14,@SAY  *SAY Error message

         LA    R15,40    *SET RC=40 TO INDICATE INVALID FUNCTION CALL

         B     RETURN    *AND RETURN TO CALLER

***      RETURN TO CALLER                                           ***

RETURN   LR    R1,R13                  *R1 --> A(DYNAMIC AREA)

         L     R13,4(R13)              *RESTORED BACK POINTER

         LR    R2,R15                  *SAVE R15 AROUND FREEMAIN

         FREEMAIN RU,A=(R1),LV=DYNLEN  *RELEASE DYNAMIC STORAGE

         LR    R15,R2                  *RESTORE R15 FOR RETURN

         RETURN (14,12),RC=(15)        *RETURN TO CALLER

***      REXX ROUTINE INTERFACES                                    ***

         TITLE  'REXX STACK ROUTINE (IRXSTK)'

***      INTERFACE TO STACK ROUTINE.                                ***

***       ON ENTRY:                                                 ***

***         R0 - L(BUFFER)                                          ***

***         R1 - A(BUFFER)                                          ***

***         R14 - RETURN ADDRESS                                    ***

@STACK   DS    0H

         ST    R14,STKSAV              *SAVE RETURN ADDRESS

         ST    R1,STKP2                *PUT A(RECORD) IN FULLWORD

         ST    R0,STKP3                *PASS RECORD LENGTH

         LA    R0,STKP1                *INIT PLIST POINTERS

         ST    R0,STKPLIST

         LA    R0,STKP2

         ST    R0,STKPLIST+4

         LA    R0,STKP3

         ST    R0,STKPLIST+8

         LA    R0,STKP4

         ST    R0,STKPLIST+12

         LA    R0,STKP5

         ST    R0,STKPLIST+16

         OI    STKPLIST+16,X'80'       *FLAG END OF LIST

         MVC   STKP1,=CL8'QUEUE'       *SET FUNCTION

         LA    R0,FWD                  *R0 -->A(RETURN CODE AREA)

         ST    R0,STKP4                *PASS A(RETURN CODE)

         ST    R10,STKP5               *PASS A(ENVBLOCK)

         LR    R0,R10                  *R0-->A(ENV BLOCK)

         LA    R1,STKPLIST             *R1-->A(PARAMETER LIST)

         L     R15,IRXSTK              *R15-->A(IRXSAY ROUTINE)

         BALR  R14,R15                 *ISSUE STACK

         LTR   R15,R15                 *STACK OK?

         BZ    @STKOK                  *YES

         LA    R1,=C'IRXSTK'           *R1-->INDICATE STACK ROUTINE

         EX    R0,*                    *FORCE DIAGNOSTIC ABEND

@STKOK   EQU   *

         L     R14,STKSAV              *R14-->RESTORE RETURN ADDRESS

         BR    R14                     *RETURN TO CALLER

         TITLE  'REXX SAY ROUTINE (IRXSAY)'

***      INTERFACE TO SAY ROUTINE.                                  ***

***       ON ENTRY:                                                 ***

***         R0 - L(BUFFER)                                          ***

***         R1 - A(BUFFER)                                          ***

***         R14 - RETURN ADDRESS                                    ***

@SAY     DS    0H

         ST    R14,SAYSAV              *SAVE RETURN ADDRESS

         ST    R1,SAYP2                *PUT A(RECORD) IN FULLWORD

         ST    R0,SAYP3                *PASS RECORD LENGTH

         LA    R0,SAYP1                *INIT PLIST POINTERS

         ST    R0,SAYPLIST

         LA    R0,SAYP2

         ST    R0,SAYPLIST+4

         LA    R0,SAYP3

         ST    R0,SAYPLIST+8

         LA    R0,SAYP4

         ST    R0,SAYPLIST+12

         LA    R0,SAYP5

         ST    R0,SAYPLIST+16

         OI    SAYPLIST+16,X'80'       *FLAG END OF LIST

         MVC   SAYP1,=CL8'WRITE'       *SET FUNCTION

         ST    R10,SAYP4               *PASS A(ENV BLOCK)

         LA    R0,FWD                  *R0-->A(RETURN CODE AREA)

         ST    R0,SAYP5                *PASS A(RETURN CODE)

         LR    R0,R10                  *R0--> A(ENV BLOCK)

         LA    R1,SAYPLIST             *R1--> A(PARAMETER LIST)

         L     R15,IRXSAY              *R15--> A(USERID ROUTINE)

         BALR  R14,R15                 *ISSUE SAY

         LTR   R15,R15                 *SAY OK?

         BZ    @SAYOK                  *YES

         LA    R1,=C'IRXSAY'           *R1 INDICATE SAY ROUTINE

         EX    R0,*                    *FORCE DIAGNOSTIC ABEND

@SAYOK   EQU   * *

         L     R14,SAYSAV              *R14--> RETURN ADDRESS

         BR    R14                     *RETURN TO CALLER

***      WORKING STORAGE ETC.                                       ***

         TITLE  'ENQ/DEQ IN-LINE PARAMETER LISTS'

* ENQUEUE

ENQPLST  ENQ   (0,0,S,0,SYSTEMS),RET=USE,MF=L

ENQPL    EQU   *-ENQPLST

* ENQUEUE TEST

TSTPLST  ENQ   (0,0,S,0,SYSTEMS),RET=TEST,MF=L

TSTPL    EQU   *-TSTPLST

* DEQUEUE

DEQPLST  DEQ   (0,0,0,SYSTEMS),RET=HAVE,MF=L

DEQPL    EQU   *-DEQPLST

* SCAN

SCANPLST GQSCAN MF=L

SCANPL   EQU   *-SCANPLST

         TITLE  'CONSTANTS'

EDMASK    DC    XL9'F02120202020202020'

MESSAGEI  DS    0CL63

          DC    C'I'

          DC    C'OWNERS='

          DC    CL4' '

          DC    C',WAIT EXCLUSIVE='

          DC    CL4' '

          DC    C',WAIT SHARED='

          DC    CL4' '

          DC    C',SCOPE='

          DC    CL7' '

MESSAGEU  DS    0CL24

          DC    C'U'

          DC    CL23' '

MESSAGER  DS    0CL256

          DC    C'R'

          DC    CL255' '

MESSAGEQ  DS    0CL9

          DC    C'Q'

          DC    CL8' '

         TITLE  'WORKING STORAGE / DSECTS'

         LTORG

DYNAM    DSECT                         *DYNAMIC WORK AREA STORAGE

SAVEAREA DS    9D                      *REG SAVE AREA

FCODE    DS    CL3                     *FUNCTION CODE - 'ENQ'/'DEQ'

QNAME    DS    CL8                     *ENQ MAJOR NAME

RNAME    DS    CL255                   *ENQ MINOR NAME

RNAMEL   DS    H                       *ENQ MINOR NAME LENGTH

SYSOPT   DS    C                       *EXCLUSIVE/SHARED INDICATOR

GENOPT   DS    C                       *GENERIC SCAN INDICATOR

ENQRC    DS    F                       *ENQ/DEQ RETURN CODE

RETCODE  DS    CL2                     *OUTPUT RETURN CODE (CHARACTER)

EDWK     DS    CL8                     *EDIT WORK AREA

EDWORK   DS    XL9                     *EDIT WORK AREA FOR GQSCAN

PTEMP    DS    PL8                     *PACKED DECIMAL WORK AREA

* ENQUEUE/DEQUEUE REMOTE PARAMETER LISTS

ENQPARM  ENQ   (0,0,E,0,SYSTEM),RET=USE,MF=L

TSTPARM  ENQ   (0,0,E,0,SYSTEM),RET=TEST,MF=L

DEQPARM  DEQ   (0,0,0,SYSTEM),RET=HAVE,MF=L

SCANPARM GQSCAN MF=L

***      IRXSTK PARAMETER AREA                                      ***

FWD      DS    A                       *FULL WORD WORK AREA

STKSAV   DS    F                       *R14 SAVE AREA

STKPLIST DS    6A                      *PLIST FOR IRXSTK

STKP1    DS    CL8                     *IRXSTK - FUNCTION

STKP2    DS    A                       *IRXSTK - A(RECADDR)

STKP3    DS    A                       *IRXSTK - L(RECORD)

STKP4    DS    A                       *IRXSTK - A(4-BYTE AREA FOR RC)

STKP5    DS    A                       *IRXSTK - A(ENVBLOCK)

STKP6    DS    A                       *IRXSTK - A(4-BYTE AREA FOR RC)

***      IRXSAY PARAMETER AREA                                      ***

SAYSAV   DS    F                       *SAY ROUTINE RETURN ADDRESS

SAYPLIST DS    5A                      *PLIST FOR IRXSAY

SAYP1    DS    CL8                     *IRXSAY - FUNCTION

SAYP2    DS    A                       *IRXSAY - A(->BUFFER)

SAYP3    DS    A                       *IRXSAY - L(BUFFER)

SAYP4    DS    A                       *IRXSAY - A(ENVBLOCK)

SAYP5    DS    A                       *IRXSAY - A(4-BYTE AREA FOR RC)

***      IRXEXCOM PARAMETER AREA                                    ***

COMAREA  DS    5A                      *PARAMETER ADDRESS LIST

COMID    DS    CL8                     *IRXEXCOM ID - C'IRXEXCOM'

COMDUMMY DS    A                       *NOT USED

COMSHVB  DS    (SHVBLEN)X        *IRXEXCOM SHVBLOCK (LENGTH FROM DSECT)

COMRET   DS    A                       *IRXECOM RC

         DS    0D

***      GQSCAN RESULT MESSAGES                                     ***

MSGI      DS    0C

          DS    C

          DS    CL7

MSGIOWN   DS    CL4

          DS    CL16

MSGIEXC   DS    CL4

          DS    CL13

MSGISHR   DS    CL4

          DS    CL7

MSGISCOP  DS    CL7

MSGILEN   EQU   *-MSGI

MSGU      DS    0C

          DS    C

MSGUNAM   DS    CL8

          DS    C

MSGUOWN   DS    CL4

          DS    C

MSGUDISP  DS    CL9

MSGULEN   EQU   *-MSGU

MSGR      DS    CL256

MSGRLEN   EQU   *-MSGR

MSGQ      DS    CL9

MSGQLEN   EQU   *-MSGQ

***      GQSCAN PARAMETERS                                          ***

TOKEN    DS    F                       *RESTART TOKEN

TEMP1    DS    H                       *RIB FIXED LENGTH

TEMP2    DS    H                       *RIBE LENGTH

AREA     DS    CL9000                  *RIB AREA

DYNLEN   EQU   *-DYNAM

***      REQUIRED DSECTS FOR REXX FUNCTIONS                         ***

         IRXEFPL

         IRXARGTB

         IRXEVALB

         IRXENVB

         IRXEXTE

         IRXSHVB

         ISGRIB

         END

/*

//LKED.SYSLMOD DD DSN=your.load.library,DISP=SHR,UNIT=

//LKED.SYSIN DD *

 ENTRY SYSGRS

 NAME SYSGRS(R)

/*

//





Systems Programmer (UK)                                            c Xephon 1995



	

--------------------------------------------------------------------------------
      
  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the MVS Update home pages (one text e-mail per month) 

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update  


    
--------------------------------------------------------------------------------

A REXX function to write SMF records

      rc = REXXSMF(type,text)

      CALL 'REXXSMF' type,text

/*Rexx*/
smftyp = '189'
smftxt = userid()' accessing application A at 'date(e) time()
rc = REXXSMF(smftyp,smftxt)
.
.
.
exit

/*Rexx*/
.
.
call 'REXXSMF '172','User 'userid()' exiting application A at' ,
     date(e) time()
.
.
exit

REXXSMF source

REXXSMF TITLE 'REXX FUNCTION TO WRITE SMF RECORDS'
***********************************************************************
***      THIS IS A PROGRAM THAT WILL EXECUTE AS A REXX              ***
***      FUNCTION UNDER TSO/E REXX AND WILL CUT SMF RECORDS.        ***
***      THE FUNCTION ACCEPTS 2 ARGUMENTS:-                         ***
***       1. THE SMF RECORD TYPE NUMBER.                            ***
***       2. THE SMF RECORD TEXT.                                   ***
***   EG                                                            ***
***       CALL 'REXXSMF' '185','TEST RECORD DATA'                   ***
***   OR                                                            ***
***       XXX = REXXSMF('185','TEST RECORD DATA')                   ***
***   THE PARAMETERS CAN BE LITERAL STRINGS OR VALID REXX SYMBOLS   ***
***   THAT HAVE BEEN PREVIOUSLY SET.                                ***
***   SMF TYPES OF 128 OR BELOW WILL CAUSE A FUNCTION ERROR.        ***
***   THE FUNCTION DOES NOT RETURN ANY DATA OTHER THAN THE RETURN   ***
***   CODE FROM THE SMF ROUTINE. THIS WILL BE SET INTO 'XXX' IF     ***
***   CALLED AS A FUNCTION, OR THE REXX SPECIAL VARIABLE 'RESULT'   ***
***   IF 'CALL'ED AS A SUBROUTINE.                                  ***
***   IF ONE OR BOTH PARAMETERS ARE OMITTED THE FUNCTION WILL       ***
***   RETURN REXX ERROR 40 - INVALID CALL TO ROUTINE, AND WILL      ***
***   SET A RESULT OF 'ERROR'.                                      ***
***   POSSIBLE RC VALUES (SMFEWTM RETURN CODES) :-                  ***
***   0   ....... RECORD WRITTEN WITHOUT ERROR                      ***
***   8   ....... LENGTH < 18 BYTES.                                ***
***   16  ....... SMF NOT ACTIVE                                    ***
***   20  ....... RECORD SUPPRESSED BY INSTALLATION EXIT IEFU83/    ***
***               IEFU84/IEFU85                                     ***
***   24  ....... DATA LOST                                         ***
***   36  ....... SMF RECORD TYPE NOT CURRENTLY BEING RECORDED      ***
***   40  ....... DATA LOST DUE TO BUFFER SHORTAGE                  ***
***   44  ....... SMF COULD NOT ESTABLISH RECOVERY                  ***
***   48  ....... CALLER NOT IN PRIMARY ASC MODE OR INCORRECT       ***
***                ASID ENCOUNTERED.                                ***
***********************************************************************
REXXSMF CSECT
REXXSMF AMODE 31
REXXSMF RMODE ANY
         STM   R14,R12,12(R13)         * SAVE REGS
         LR    R12,R15                 *R12 --> BASE REGISTER
         USING REXXSMF,R12
         LR    R10,R0                  *R10 --> A(ENVIRONMENT BLOCK)
         USING ENVBLOCK,R10
         LR    R11,R1                  *R11 --> A(PARAM LIST (EFPL))
         USING EFPL,R11
         GETMAIN RU,LV=DYNLEN,LOC=ANY  *** OBTAIN DYNAMIC STORAGE
         LR    R2,R1                   * POINT AT WORKAREA
         L     R3,=A(DYNLEN)           * SET ITS LENGTH
         LA    R4,0                    * SET DUMMY FROM ADDRESS
         LA    R5,0                    * SET DUMMY LENGTH
         MVCL  R2,R4                   * BLANK OUT THE AREA
         ST    R13,4(R1)               * SAVE R13
         ST    R1,8(R13)               * BACK-CHAIN SAVE AREAS
         LR    R13,R1                  *R13 --> A(REG SAVE/DYNAMIC AREA)
         USING DYNAM,R13
         L     R9,ENVBLOCK_IRXEXTE     *R9 --> A(EXTERNAL EP TABLE)
         USING IRXEXTE,R9
         LA    R8,SMFAREA              *R8 --> AREA TO BUILD SMF REC
         USING SMFSMF,R8
***      CHECK THE PARAMETER LIST FOR VALID ARGUMENTS               ***
***      AND STORE VALUES IN WORKING STORAGE                        ***
***      FIRST CHECK FOR SMF TYPE VALUE AND STORE                   ***
         L     R6,EFPLARG              *R6 --> A(ARGUMENT TABLE)
         USING ARGTABLE_ENTRY,R6
         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' *END OF ARGS?
         BE    ERROR                   * --> YES - EXIT RC 40
*                                      (INVALID CALL TO ROUTINE)
         L     R2,ARGTABLE_ARGSTRING_PTR    *R2 --> A(ARGUMENT)
         L     R1,ARGTABLE_ARGSTRING_LENGTH *R1 --> L(ARGUMENT)
         LA    R4,SMFTYP                    *R4 --> A(ARGUMENT)
         BCTR  R1,0                    * DECREASE FOR MOVE
         EX    R1,MOVEARG              * SAVE ARGUMENT
***      NOW CHECK FOR SMF DATA, ENSURE NOT > 256 CHARS AND STORE   ***
         LA    R6,ARGTABLE_NEXT        *R6 --> A(NEXT ARGUMENT)
         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' *END OR ARGS?
         BE    ERROR                   * --> YES - EXIT RC 40
*                                      (INVALID CALL TO ROUTINE)
         L     R2,ARGTABLE_ARGSTRING_PTR    *R2 --> A(ARGUMENT)
         L     R1,ARGTABLE_ARGSTRING_LENGTH *R1 --> L(ARGUMENT)
         CH    R1,=H'256'              * LENGTH <= 256 ?
         BH    ERROR                   * --> NO - EXIT
         STH   R1,SMFSLEN              * SAVE DATA LENGTH IN SMF AREA
         LA    R4,SMFDATA              *R4 --> A(ARGUMENT)
         BCTR  R1,0                    * DECREASE LENGTH FOR MOVE
         EX    R1,MOVEARG              * --> SAVE ARGUMENT
         LA    R6,8(R6)                *R6 --> A(NEXT ARGUMENT)
         B     ARGOK                   * SKIP EXECUTE STATEMENT
MOVEARG  MVC   0(0,R4),0(R2)           * EXECUTABLE MOVE
***      ARGUMENTS STORED - BUILD SMF RECORD                        ***
ARGOK     DS    0H
          PACK  PTEMP(8),SMFTYP         * PACK PASSED SMF RECORD TYPE
          CVB   R5,PTEMP                *R5 - RECORD TYPE (HEX)
          STCM  R5,B'0001',SMFSTYPE     * SAVE SINGLE BYTE TYPE
          CLI   SMFSTYPE,X'80'          * TYPE 128 OR BELOW?
          BH    SMFBLD                  * --> NO ? - OK
          B     ERROR                   * --> YES? - EXIT
* BUILD SMF RECORD FIXED ENTRIES (EXCEPT RECORD LENGTH)
SMFBLD   EQU   *
         MVI   SMFSFLAG,X'00'           * SET SMF FLAG
         MVC   SMFSFIL,=H'0'            * SECOND HALF WORD TO 0
         MVC   SMFSYSID(4),=C'IPO1'     * SET SYSTEM ID
* EXTRACT CURRENT DATE FROM CVT
         USING CVT,0                    * ADDRESS CVT BASE
         L     R3,CVTPTR                * GET THE CVT
         USING CVT,R3                   * AND MAP
         L     R3,CVTDATE               *R3 --> DATE(PACKED)
         DROP R3
         ST    R3,SMFSDATE              * SAVE IN SMF AREA
* EXTRACT CURRENT TIME IN BINARY
         LA    R3,TIMEADDR              *R3 --> A(TIME SAVE AREA)
         TIME MIC,(3)                   * GET TIME
         LM    R2,R3,TIMEADDR           *R2 - TIME, R3 - DATE
         SRDL  R2,12                    *SHIFT FOR DIVIDE
         L     R1,=AL4(10000)           *SET DIVISOR
         DR    R2,R1                    *CONVERT TO HUNDREDTHS
         ST    R3,SMFSTIME              * SAVE IN SMF
         LH    R14,SMFSLEN              *R14 - DATA LENGTH
         AH    R14,=AL2(SMFLEN)         *ADD IN LENGTH OF HEADER
         STH   R14,SMFSLEN              *STORE TOTAL LENGTH
* WRITE RECORD TO SMF
* R8 --> RECORD BUILT WITHIN PROGRAM WORK AREA (--> R13)
*        FIRST TEST AUTHORIZATION, AND APF AUTHORIZE IF NEEDED
         MVI   STORSTAT,C'5'        * AUTHORIZATION FLAG (OFF)
         TESTAUTH FCTN=1            * CHECK CURRENT STATE
         LTR   R15,R15              * R15 = 0 ? - AUTHORISED
         BZ    CALLSMF              * GO DO IT
         SVC   235                  * ELSE SET AUTHORIZED
         MVI   STORSTAT,C'6'        * AND SET FLAG ON
*        NOW CALL SMFEWTM MACRO TO WRITE RECORD
CALLSMF  DS     0H
         MODESET MODE=SUP,KEY=ZERO   * MUST BE SUPERVISOR
         SMFEWTM (8),BRANCH=YES      * WRITE SMF  (NEEDS IEESMCA DSECT)
         ST      R15,SMFRC           * PRESERVE SMF RETURN CODE
         MODESET MODE=PROB,KEY=NZERO * BACK TO PROBLEM STATE
*        IF DYNAMICALLY APF AUTHORISED, REMOVE
         CLI   STORSTAT,C'6'      * ENSURE EXIT IN SAME STATE AS CALLER
         BNE   ALLOK              * IF NOT APF - CARRY ON
         SVC   236                * ELSE REMOVE APF
*        ALL OK - SO SET SMF RETURN CODE AS 'RC' VARIABLE &
*        FUNCTION RESULT.
ALLOK    DS    0H
         L     R15,SMFRC            * RETRIEVE SMF RETURN CODE
         CVD   R15,PTEMP            * CONVERT TO PACKED
         MVC   RETCODE,=X'40212020' * SET EDIT MASK
         ED    RETCODE,PTEMP+6      * CONVERT TO CHARACTER
*        INITIALISE IRXEXCOM PARAMETER AREA
         LA    R0,COMID             *R0 --> A(IRXEXCOM ID)
         ST    R0,COMAREA           * SAVE ADDRESS
         LA    R0,COMDUMMY          *R0 --> NOT USED PARM
         ST    R0,COMAREA+4         * SAVE ADDRESS
         ST    R0,COMAREA+8         * AND AGAIN (PARM2&3 MUST BE SAME)
         LA    R0,COMSHVB           *R0 --> A(SHVBLOCK AREA)
         ST    R0,COMAREA+12        * SAVE ADDRESS
         LA    R0,COMRET            *R0 --> A(RETURN CODE AREA)
         ST    R0,COMAREA+16        * SAVE ADDRESS
         OI    COMAREA+16,X'80'     * SET HIGH BIT ON FOR LIST END
         MVC   COMID,=CL8'IRXEXCOM'
*        BUILD IRXEXCOM PARAMETERS
         ST    R10,COMRET           *STORE ENVBLOCK ADDRESS (R10)
         LA    R6,COMSHVB           *R6 --> A(SHVBLOCK AREA)
         USING SHVBLOCK,R6
         XC    COMSHVB(SHVBLEN),COMSHVB * INITIALIZE SHVBLOCK
         XC    SHVNEXT,SHVNEXT          * RESET POINTER
         MVI   SHVCODE,C'S'          * SET FUNCTION CODE - 'SET'
         LA    R0,=C'RC'             *R0 --> A(VARIABLE NAME
         ST    R0,SHVNAMA            * STORE IN SHVBLOCK
         MVC   SHVNAML,=A(2)         * STORE NAME LENGTH
         LA    R0,RETCODE            *R0 --> A(VARIABLE VALUE)
         ST    R0,SHVVALA            * STORE IN SHVBLOCK
         MVC   SHVVALL,=A(L'RETCODE) * STORE VALUE LENGTH
*        INVOKE IRXEXCOM TO SET VARIABLE
         LR    R0,R10                *R0 --> A(ENVBLOCK)
         LA    R1,COMAREA            *R1 --> A(PARM ADDR LIST)
         L     R15,IRXEXCOM          *R15 --> AIRXEXCOM) FROM IRXEXTE
         BALR  R14,R15               * CALL ROUTINE
         LTR   R15,R15               * SET OK ?
         BZ    SETOK                 * --> YES? - SKIP ABEND
         LA    R1,=CL4'IRXC'         * SET ERROR INDICATOR
         SLR   R0,R0                 * CLEAR R0
         EX    R0,*                  * FORCE DIAGNOSTIC ABEND
*        SET RETURN CODE VALUE AS FUNCTION RESULT
SETOK    EQU   *
         DROP  R6
         L     R6,EFPLEVAL
         L     R6,0(R6)              *R6 --> A(EVALUATION BLOCK)
         USING EVALBLOCK,R6
         MVC   EVALBLOCK_EVLEN,=A(L'RETCODE) * SET LENGTH
         MVC   EVALBLOCK_EVDATA(L'RETCODE),RETCODE * SET VALUE
         XR    R15,R15               * ZERO REXX RETURN CODE
         B     RETURN                * AND RETURN TO CALLER
*        IF FUNCTION ERROR - SET 'ERROR' AS FUNCTION RESULT,
*        AND REXX ERROR CODE 40 AS RETURN CODE
ERROR    DS    0H
         L     R6,EFPLEVAL
         L     R6,0(R6)              *R6 --> A(EVALUATION BLOCK)
         MVC   EVALBLOCK_EVLEN,=A(5) * SET LENGTH
         MVC   EVALBLOCK_EVDATA(5),=CL5'ERROR' * SET VALUE
         LA    R15,40  * SET RC=40 TO INDICATE INVALID FUNCTION CALL
         B     RETURN  * AND RETURN TO CALLER
***      RETURN TO CALLER                                           ***
RETURN   LR    R1,R13                  *R1 --> A(DYNAMIC AREA)
         L     R13,4(R13)              * RESTORED BACK POINTER
         LR    R2,R15                  * SAVE R15 AROUND FREEMAIN
         FREEMAIN RU,A=(R1),LV=DYNLEN  * RELEASE DYNAMIC STORAGE
         LR    R15,R2                  * RESTORE R15 FOR RETURN
         RETURN (14,12),RC=(15)        * RETURN TO CALLER
***      WORKING STORAGE ETC.                                       ***
         TITLE  'WORKING STORAGE / DSECTS'
         LTORG
DYNAM    DSECT                  * DYNAMIC WORK AREA STORAGE
SAVEAREA DS    9D               * REG SAVE AREA
SMFAREA  DS    CL330            * AREA FOR BUILD OF SMF REC
PTEMP    DS    PL8              * PACKED DECIMAL WORK AREA
SMFTYP   DS    CL3              * SMF TYPE (CHARACTER FROM ARG)
SMFRC    DS    F                * SAVE AREA FOR SMFEWTM RETURN CODE
RETCODE  DS    CL4              * OUTPUT RETURN CODE (CHARACTER)
STORSTAT DS    C                * APF STATUS INDICATOR
TIMEADDR DS    2F               * RETURN AREA FOR TIME MACRO
***      IRXEXCOM PARAMETER AREA                                    ***
COMAREA  DS    5A               * PARAMETER ADDRESS LIST
COMID    DS    CL8              * IRXEXCOM ID - C'IRXEXCOM'
COMDUMMY DS    A                * NOT USED
COMSHVB  DS    (SHVBLEN)X       * IRXEXCOM SHVBLOCK (LENGTH FROM DSECT)
COMRET   DS    A                * IRXECOM RC
         DS    0D
DYNLEN   EQU   *-DYNAM
***      SMF RECORD MAPPING                                         ***
SMFSMF   DSECT
SMFSLEN  DS    XL2              * LEN OF SMF RECORD
SMFSFIL  DS    XL2              * NOT USED
SMFSFLAG DS    XL1              * SMF RECORD FLAG
SMFSTYPE DS    XL1              * SMF RECORD TYPE
SMFSTIME DS    XL4              * CURRENT TIME (BINARY)
SMFSDATE DS    PL4              * CURRENT DATE (PACKED)
SMFSYSID DS    CL4              * SYSTEM NAME (IP01)
SMFLEN   EQU   *-SMFSMF    LENGTH OF RECORD HEADER
SMFDATA  DS    0C          RECORD
***      REQUIRED DSECTS FOR REXX AND SMF                           ***
         CVT   DSECT=YES,LIST=YES
         IRXEFPL
         IRXARGTB
         IRXEVALB
         IRXENVB
         IRXEXTE
         IRXSHVB
         IEESMCA
         END


Systems Programmer (UK)                                          c Xephon 1995

	

--------------------------------------------------------------------------------
      
  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the MVS Update home pages (one text e-mail per month) 

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update  


    
--------------------------------------------------------------------------------

3495 library management services REXX interface

      CALL LMSRGET(volser)

      SAY LMSRGET(volser)

      CALL LMSRGET('WHAT')

THE ASSEMBLER CODE FOR LMSRGET

**********************************************************************
* LMSRGET:      THIS MODULE IS A REXX FUNCTION WHICH PERMITS THE
*               RETRIEVAL OF INFORMATION FROM THE TCDB.
* ASSEMBLY:     THIS MODULE SHOULD BE LINKED RENT,REUS
* EXECUTION:    CALL LMSRGET(XXXXXX)
*               WHERE XXXXXX IS A VOLUME SERIAL NUMBER OR THE
*               CHARACTER LITERAL 'WHAT'. IF WHAT IS USED A REXX
*               VARIABLE CALLED WHAT IS CREATED/MODIFIED WHICH CONTAINS
*               A LIST OF ALL THE REXX VARIABLES THAT WOULD BE CREATED
*               IF A SIX-CHARACTER VOLUME SERIAL NUMBER WAS USED. THIS
*               LIST IS SEPARATED BY SPACES TO ALLOW THE CALLER TO
*               PARSE THE LIST FOR POSSIBLE SUBSEQUENT USE.
* ERRORS:       IF AN ERROR OCCURS ACCESSING THE TCDB, OR INVALID
*               INFORMATION IS SUPPLIED, THEN RC WILL BE SET TO 99.
*               IF AN UNUSUAL ERROR OCCURS OUTPUTTING INFORMATION TO
*               REXX ETC THEN A USER ABEND CODE WILL BE SET. IT WILL BE
*               A UNIQUE NUMBER THAT CORRESPONDS TO THE VARIABLE BEING
*               OUTPUT.
* MODIFICATION: IF THE SUPPLIED INFORMATION IS INSUFFICIENT OR TOO
*               MUCH, THIS CAN BE QUICKLY CHANGED USING THE NEXTVAR
*               MACRO. FORMAT NEXTVAR XXXXXX,UNIQUE=YES/NO
*               WHERE XXXXXX IS THE VALUE TO BE RETURNED FROM THE
*               TAPE VOLUME INFORMATION MAPPING (TVI) AND UNIQUE IS
*               A PARAMETER TO ALLOW FOR OTHER VARIABLES TO BE SUPPLIED
*               IN THAT SETTING IT TO NEW REGENERATES THE STARTER
*               CODE FOR THE REXX INFORMATION.
**********************************************************************
         MACRO
&LABEL   NEXTVAR &VAR,&UNIQUE=NO
         LCLC  LABCHECK
TEMPL    LOCTR
         AIF   (D'WHAT).NOWHAT
WHAT     DS    0H
WHATL    LOCTR
WHATLEN  EQU   *-WHAT
TEMPL    LOCTR
&LABCHECK SETC '@&VAR'
         AIF   (D'&LABCHECK).NOTAGAIN
@&VAR    DC    C'&VAR'
         DC    C' '
&INLEN   SETA  K'&VAR
@EQ&VAR  EQU   &INLEN
LMSRGET  LOCTR
         AIF   (T'&LABEL EQ 'O').NOTMORE
&LABEL   DS    0H
         AIF   ('&UNIQUE' EQ 'NO').BYST
         LA    R6,COMSHVB              * R6 --> A(SHVBLOCK AREA)
         USING SHVBLOCK,R6
         ST    R10,COMRET              * STORE ENVBLOCK ADDRESS (R10)
         XC    COMSHVB(SHVBLEN),COMSHVB * INITIALIZE SHVBLOCK
         MVI   SHVCODE,C'S'             * SET FUNCTION CODE - 'SET'
***********************************************************************
*        BUILD IRXEXCOM PARAMETERS
***********************************************************************
         XC    SHVNEXT,SHVNEXT          * RESET POINTER
         LA    R5,@&VAR
         ST    R5,SHVNAMA               * STORE ADDRESS OF NAME
         LA    R5,@EQ&VAR
         ST    R5,SHVNAML               * STORE NAME LENGTH
         LA    R5,&VAR
         ST    R5,SHVVALA               * STORE VARIABLE VALUE
         AIF   ('&VAR' EQ 'WHAT').DOWHAT
         LA    R5,L'&VAR                * STORE VARIABLE LENGTH
         AGO   .DONORM
         LA    R5,WHATLEN
         ST    R5,SHVVALL               * STORE VALUE LENGTH
***********************************************************************
*        INVOKE IRXEXCOM TO SET VARIABLE
***********************************************************************
         LR    R0,R10                   * R0 --> A(ENVBLOCK)
         LA    R1,COMS                  * R1 --> A(PARM ADDR LIST)
         L     R15,IRXEXCOM             * R15 --> A(IRXEXCOM)
         BALR  R14,R15                  * CALL ROUTINE
         LTR   R15,R15                  * SET OK ?
         BZ    EOF&SYSNDX               * --> YES? - END THIS VAR
         AGO   .ABEND
         LA    R1,@&VAR                 * SPECIAL ABEND ROUTINE
         ABEND &SYSNDX                  * ABEND EQUATES TO NUMBER OF MACRO
EOF&SYSNDX DS  0H
         MEND
LMSRGET  TITLE 'REXX FUNCTION TO RETRIEVE TCDB INFORMATION'
LMSRGET  AMODE 31
LMSRGET  RMODE ANY
LMSRGET  CSECT
         REGS
         BAKR  14,0
         LR    12,15
         USING LMSRGET,12
         LR    R10,R0                   * R10 --> A(ENVIRONMENT BLOCK)
         USING ENVBLOCK,R10
         LR    R11,R1                   * R11 --> A(PARAM LIST (EFPL))
         USING EFPL,R11
         L     R9,ENVBLOCK_IRXEXTE      * R9 --> A(EXTERNAL EP TABLE)
         USING IRXEXTE,R9
         L     R6,EFPLARG               * R6 --> A(ARGUMENT TABLE)
         USING ARGTABLE_ENTRY,R6
         L     R7,EFPLEVAL
         L     R7,0(R7)                 * R7 --> A(EVALUATION BLOCK
         USING EVALBLOCK,R7
* GET STORAGE FOR REXX DETAILS
         STORAGE OBTAIN,LENGTH=COMSLEN,ADDR=(8)
         USING COMSDS,R8
* PREPARE THE REXX AREA FOR USE
         XC    COMS(COMSLEN),COMS      * SET TO LOW VALUES
         LA    15,COMID
         ST    15,COMS
         LA    15,COMDUMMY
         ST    15,COMS+4
         ST    15,COMS+8
         LA    15,COMSHVB
         ST    15,COMS+12
         LA    15,COMRET
         ST    15,COMS+16
         OI    COMS+16,X'80'           * INDICATE END OF PARMS
         MVC   COMID,=C'IRXEXCOM'
         CLC   ARGTABLE_ARGSTRING_PTR(8),=2F'-1' * END OF ARGS?
         BE    RC99                    * YES SO 99 RCODE
         L     R2,ARGTABLE_ARGSTRING_PTR         * R2 --> A(ARGUMENT)
         L     R1,ARGTABLE_ARGSTRING_LENGTH      * R1 --> L(ARGUMENT)
* THE SUPPLIED VARIABLE CAN ONLY BE 4 OR 6 CHARACTERS LONG
* ANY OTHER VALUE IS AN ERROR.
         C     R1,=F'4'                * IS THE LENGTH EQ 4
         BE    WHATCHK                 * YES, CHECK FOR WHAT.
         C     R1,=F'6'                * IS THE LENGTH EQ 6
         BE    VOLCHK                  * YES, CHECK VOLSER
         B     RC99                    * RUBBISH PARMS, EXIT 99
WHATCHK  DS    0H
         CLC   =C'WHAT',0(2)           * WAS THE VOLSER WHAT
         BNE   RC99                    * NO SO ISSUE AN ERROR
         NEXTVAR WHAT,UNIQUE=YES
         MVC   RC,=C'00'               * SET RC TO ZERO
         MVC   RCREASON,REASONWH       * AND REASON INFO
         B     RETURN                  * RETURN TO CALLER
VOLCHK   DS    0H
         C     R1,=F'6'  * VALID VOLSER?
         BNE   RC99    * NO SO ERROR
         STORAGE OBTAIN,LENGTH=MYLEN,ADDR=(3)
         USING LCSPL,3
         MVI   LCSPLAREA,C'Y'          * KEEP TRACK OF GOTTEN AREAS
* INITIALIZE THE LCSPL FOR THE CBRXLCS CALL
         MVC   0(LCSPOLEN,3),MYSTAT
         LA    R4,LCSPOLEN(,3)
         MVC   0(LCSPILEN,4),MYSTAT+LCSPOLEN
         LA    R4,LCSPILEN(,4)
         MVC   0(LCSPDLEN,4),MYSTAT+LCSPOLEN+LCSPILEN
         LA    R4,LCSPDLEN(,4)
         MVC   0(LCSPELEN,4),MYSTAT+LCSPOLEN+LCSPILEN+LCSPDLEN
* NEED TO APF AUTHORIZED FOR THIS, SO USE IN-HOUSE SVC TO
* TEMPORARILY AUTHORIZE.
         SVC   235
         CBRXLCS TYPE=TAPE,FUNC=QVR,VOLUME=(2),VOLINFO=YES,MF=(E,LCSPL)
* NOW DE-AUTHORIZE USING COMPLEMENTARY IN-HOUSE SVC
         SVC   236
         CLC   LCSRCODE,=F'0'           * ALL DATA OK?
         BH    WASIT4                   * NO, BUT WAS SOME RETURNED
         MVC   RCREASON,REASON00        * ALL SYSTEMS AOK.
         MVC   RC,=C'00'                * SO SET ZERO RC
         B     ONTCDB                   * AND RETURN TCDB INFO.
WASIT4   DS    0H
         CLC   LCSRCODE,=F'4' * SOME DATA PROVIDED BUT ANOMALY DETECTED
         BH    RC98           * NO MORE SEVERE, SO OUT.
* RETURN CODE IS 4 THEREFORE CHECK LCSREAS FOR WHY.
* HAVING FIRST SET AN RC OF 4.
         MVC   RC,=C'04'
         CLC   LCSREAS,=F'52'
         BE    REAS52
         CLC   LCSREAS,=F'61'
         BE    REAS61
         CLC   LCSREAS,=F'63'
         BE    REAS63
         CLC   LCSREAS,=F'70'
         BE    REAS70
* IF PROGRAM REACHES HERE, THEN A REASON CODE WHICH IS NOT LISTED
* IN THE OAM PISA FOR TAPE MANUALS HAS BEEN DETECTED.
* THEREFORE SET A RC OF 8 WITH A SUITABLE REASON DESCRIPTION
         MVC   RCREASON,REASONUK        * SET INFORMATION
         B     RC12
REAS52   DS    0H
         MVC   RCREASON,REASON52
         B     ONTCDB
REAS61   DS    0H
         MVC   RCREASON,REASON61
* REASON 63 IS UNIQUE AS IT MEANS NO VOLUME INFORMATION AT ALL
* THEREFORE SET RC 8
REAS63   DS    0H
         MVC   RCREASON,REASON63
         B     RC8
REAS70   DS    0H
         MVC   RCREASON,REASON70
* EXTRACT INFORMATION FROM THE TVI AND RETURN IT TO THE CALLER
ONTCDB   DS    0H
         L     R4,LCSTVI@
         USING TVI,4
         NEXTVAR TVISTGRP,UNIQUE=YES
         NEXTVAR TVIUSEA
         NEXTVAR TVILOC
         NEXTVAR TVICREAT
         NEXTVAR TVIENTEJ
         NEXTVAR TVIMOUNT
         NEXTVAR TVIWRITE
         NEXTVAR TVILCAT
         NEXTVAR TVIMEDTY
         NEXTVAR TVISTAT
         B     RETURN
RC8      DS    0H
         MVC   RC,=C'08'
         B     RETURN
RC12     DS    0H
         MVC   RC,=C'12'
         B     RETURN
RC98     DS    0H
         MVC   RC,=C'98'
         MVC   RCREASON,REASON98
         B     RETURN
RC99     DS    0H
         MVC   RC,=C'99'
         MVC   RCREASON,REASON99
         B     RETURN
*      RETURN TO CALLER
*      RELEASING ALL GETMAIN STORAGE IN THE PROCESS.
RETURN   DS    0H
         NEXTVAR RCREASON,UNIQUE=YES
         NEXTVAR RC
* SET THE EVALUATION BLOCK TO RCREASON
         MVC   EVALBLOCK_EVLEN,=F'2'   * SET RC AS FUNCTION
         MVC   EVALBLOCK_EVDATA(2),RC  * RESULT
         CLI   LCSPLAREA,C'Y'          * DOES THE LCSPL NEED FREEING
         BNE   NONEED                  * NO, JUST RELEASE THE REXX BIT
         STORAGE RELEASE,LENGTH=MYLEN,ADDR=(3)
NONEED   DS    0H
         STORAGE RELEASE,LENGTH=COMSLEN,ADDR=(8)
         XR    15,15
         PR    * RETURN TO CALLER
***********************************************************************
***      WORKING STORAGE ETC.                                       ***
***********************************************************************
         LTORG
REASON00 DC    CL50'TAPE ON TCDB AND LIBRARY MANAGER'
REASON52 DC    CL50'TAPE IS SHELF RESIDENT. TCDB INFO SUPPLIED'
REASON61 DC    CL50'TCDB INFO ONLY. UNABLE TO ACCESS LIBRARY MANAGER'
REASON63 DC    CL50'TAPE NOT FOUND IN TCDB OR LIBRARY MANAGER'
REASON70 DC    CL50'TAPE NOT FOUND IN LIBRARY MANAGER. TCDB INFO ONLY'
REASON98 DC    CL50'ERROR IN LCS SERVICES. NO DATA RETURNED'
REASON99 DC    CL50'INCORRECT DATA SUPPLIED TO LMSRGET'
REASONUK DC    CL50'UNKNOWN REASON CODE. REFER TO MANUAL'
REASONWH DC    CL50'LIST OF VARIABLES SUPPLIED IN VARIABLE WHAT'
MYLEN    EQU   LCSPOLEN+LCSPILEN+LCSPDLEN+LCSPELEN
* CREATE MAPPING LIST FOR LCSPL CALL
         CBRXLCS MF=(L,MYSTAT)
***********************************************************************
***      IRXEXCOM PARAMETER AREA                                    ***
***********************************************************************
COMSDS   DSECT
COMS     DS    5AL4
COMID    DS    CL8              * IRXEXCOM ID - C'IRXEXCOM'
COMDUMMY DS    AL4              * NOT USED
COMSHVB  DS    (SHVBLEN)X       * IRXEXCOM SHVBLOCK (LENGTH FROM DSECT)
COMRET   DS    AL4              * IRXECOM RC
RC       DS    CL2              * NOT REALLY REXX, BUT NEEDS TO BE
*                               * IN A GOTTEN AREA.
RCREASON DS    CL50             * RC REASON DESCRIPTION
LCSPLAREA DS   C
COMSLEN  EQU   *-COMS
         DS    0D
         IRXEFPL
         IRXARGTB
         IRXEVALB
         IRXENVB
         IRXEXTE
         IRXSHVB
         CBRLCSPL
         CBRTVI
         END


Systems Programmer (UK)                                                        c Xephon 1995

	

--------------------------------------------------------------------------------
      
  Search our Update Archives (pre-1998). To search the whole site, please use the Search in the navigation panel.   Receive an e-mail alert when new issues are added to the MVS Update home pages (one text e-mail per month) 

Journal home pages: AIX Update  CICS Update  DB2 Update  MQ Update  MVS Update  RACF Update  TCP/SNA Update  


000000 00000 1037C         1 START    START 0 
000000                     2          DS    0100D 
000320                     3 LABEL1   DS    0H 
000320 A75A 7FFF 07FFF     4          AHI   5,32767   
000324 A75A 8000 FF8000    5          AHI   5,-32768 
000328 A75E 7FFF 07FFF     6          CHI   5,32767 
00032C A75E 8000 FF8000    7          CHI   5,-32768 
000330 A758 7FFF 07FFF     8          LHI   5,32767 
000334 A758 8000 FF8000    9          LHI   5,-32768 
000338 A75C 7FFF 07FFF    10          MHI   5,32767 
00033C A75C 8000 FF8000   11          MHI   5,-32768 
000340 A750 F0F0 0F0F0    12          TMH   5,X'F0F0' 
000344 A751 0F0F 00F0F    13          TML   5,X'0F0F' 
000348 B252 0045          14          MSR   4,5 
00034C A784 FFEA 00320    15          BRC   8,LABEL1 
000350 A784 7E9C 10088    16          BRC   8,LABEL2 
000354 8545 FFE6 00320    17          BRXLE 4,5,LABEL1 
000358 8445 7E98 10088    18          BRXH  4,5,LABEL2 
00035C A755 7E96 10088    19          BRAS  5,SUBRTN 
000360 A756 FFE0 00320    20          BRCT  5,LABEL1 
000364 A756 7E92 10088    21          BRCT  5,LABEL2 
000368                    22          DS    8100D 
010088                    23 LABEL2   DS    0H 
010088 07F5               24 SUBRTN   BR    5 
010090                    25          DS    0092D 
010370                    26          USING *,15 
010370 7150 F008 10378    27          MS    5,=F'-100' 
                          28          END 
010378 FFFFFF9C           29          =F'-100' 
Ordinary Symbol and Literal Cross Reference 
Symbol Length Value Id R Type   Defn References 
LABEL1      2 00000320 00000001 H  3 15B 17B 20B 
LABEL2      2 00010088 00000001 H 23 16B 18B 21B 
SUBRTN      2 00010088 00000001 I 24 19B 
=F'-100'    4 00010378 00000001 F 29 27 


/* REXX */
/* */
/* This edit macro is designed to convert EBCDIC data to ASCII */
/* */
ADDRESS ISREDIT
'MACRO'
'(start) = LINENUM .ZF'
'(endit) = LINENUM .ZL'
DO point=start UNTIL point>=endit
   '(line) = LINE' point
   address linkmvs "C2ASCII line"
   'LINE' point '= (line)'
   END
"LOCATE 1"
EXIT 1


******************************************************************
* C2ASCII: CONVERT DATA TO ASCII
******************************************************************
C2ASCII AMODE 31
C2ASCII RMODE ANY
C2ASCII CSECT
        BAKR 14,0
        LR   12,15
        USING C2ASCII,12
        L    1,0(1)
        LH   5,0(1)         * GET THE LENGTH OF THE PARAMETER
        LA   4,2(1)
         XLATE (4),(5),TO=A
         PR
         END


/* REXX */
/* */
/* This edit macro is designed to convert ASCII data to EBCDIC */
ADDRESS ISREDIT
'MACRO'
'(start) = LINENUM .ZF'
'(endit) = LINENUM .ZL'
DO point=start UNTIL point>=endit
   '(line) = LINE' point
   address linkmvs "C2EBCDIC line"
   'LINE' point '= (line)'
   END
"LOCATE 1"
EXIT 1


******************************************************************
* C2EBCDIC: CONVERT DATA TO EBCDIC
******************************************************************
C2EBCDIC AMODE 31
C2EBCDIC RMODE ANY
C2EBCDIC CSECT
        BAKR 14,0
        LR   12,15
        USING C2EBCDIC,12
        L    1,0(1)
        LH   5,0(1)         * GET THE LENGTH OF THE PARAMETER
        LA   4,2(1)
         XLATE (4),(5),TO=E
         PR
         END
/* REXX */

server = 'your-server-name'
address ISPEXEC  "DISPLAY PANEL(email)"
if server = '' | toaddr = '' then
   do
      say 'you need to fill in the panel !'
      exit
   end
call initialize
r = Socket('Connect',socket_id,'AF_INET 25' ip_address)
if word(r,1) ^= 0 then
   call handle_error 'Connect',r
data = read_Socket( )
if substr(data,1,3) ^= '220' then   /* SMTP server Welcome message */
   call handle_error 'no 220 message',data
r = write_socket('Helo Rexx.Email'crlf)
data = read_socket( )
if substr(data,1,3) ^= '250' then
   call handle_error 'no 250 message',data
r = write_socket('Mail From: <>'crlf)
data = read_socket( )
if substr(data,1,3) ^= '250' then
   call handle_error 'no 250 message',data
r = write_socket('Rcpt To: <' || toaddr || '>' || crlf)
data = read_socket( )
if substr(data,1,3) ^= '250' then
   call handle_error 'no 250 message',data
r = write_socket('Data'crlf)
data = read_socket( )
if substr(data,1,3) ^= '354' then
   call handle_error 'no 354 message',data
r = write_socket('From: ' || from || crlf)
r = write_socket('To: ' || to || crlf)
r = write_socket('Subject: '|| subject || crlf || crlf)
r = write_socket(msg1 msg2 msg3)
r = write_socket(end_of_message)
data = read_socket( )
if substr(data,1,3) ^= '250' then
   call handle_error 'no 250 message',data
say data
r = write_socket('Quit'crlf)
data = read_socket( )
if substr(data,1,3) ^= '221' then
   call handle_error 'no 221 message',data
say data
r = Socket('Close',socket_id)
if word(r,1) ^= 0 then
   call handle_error 'Close',r
r = Socket('Terminate','Email')
if word(r,1) ^= 0 then
   say 'Error : Terminate 'r
exit7
handle_error :
   parse arg type,text
   say 'Error : ' type
   if text ^= '' then
      say text
   if initialized then
      do
         say socket('SocketSetStatus')
         say socket('Terminate','Email')
      end
exit

initialize :
   true = 1
   false = 0
   initialized = false
   crlf = '0D25'x
   end_of_message = '0D254B0D25'x
   expose_variables = 'socket_id'
   r = Socket('Initialize','Email')
   if word(r,1) ^= 0 then
      call handle_error 'Initialise',r
   r = socket('GetHostByName',server)
   if word(r,1) ^= 0 then
      call handle_error 'GetHostByName',r
   ip_address = word(r,2)
   r = Socket('Socket',2,'Stream','0')
   if word(r,1) ^= 0 then
      call handle_error 'Socket',r
   else
      socket_id = word(r,2)
   r = Socket('SetSockOpt',socket_id,'Sol_Socket','So_ASCII','On')
   if word(r,1) ^= 0 then
      call handle_error 'SetSockOpt',r
   initialized = true
return

write_socket : procedure expose (expose_variables)
   parse arg data
   r = Socket('Write',socket_id,data)
   if word(r,1) ^= 0 then
      call handle_error 'Write'
return (r)

read_socket : procedure expose (expose_variables)
   r = Socket('Read',socket_id)
   parse var r src . data
   if src ^= 0 then
      call handle_error 'Read',r
return (data)
/* REXX MVS *=====================================================*/
/*                                                                */
/*  VSAMPRT - Idcams improved PRINT command. This exec uses       */
/*            VSAMPRT ISPF panel.                                 */
/*            Argument: VSAM dataset to print.                    */
/*                                                                */
/*================================================================*/

arg infile .
call display_panel
call check_files
call build_command
call print_to_table
call memorize_positions

do k = 1 to lista.0
   linetype = 1
   lin = lista.k
   if left(lin,3)="   " then iterate k
   if left(lin,3)="KEY"|,
      left(lin,3)="RBA"|,
      left(lin,3)="REC"|,
      left(lin,3)="REL" then do
        linetype = 0
        first_record_line = 1
   end
   if linetype=0 & print_type="C" & left(lin,3)<>"REC" then do
      pp = pos("-",lin)
      lin1 = substr(lin,1,pp)
      lin  = substr(lin,pp+2)
      call format_char
      lin = lin1 lin
      lista.k = lin
   end
   if outfile = "" & linetype = 0 then say lin
   if linetype = 0 then iterate k
   if print_type = "D" then call format_dump
   if print_type = "C" then call format_char

   if outfile <>"" then do
      lista.k = lin
   end
   else do
      if print_type = "D" then do
         call split_line_dump
         say temp1
         say temp2
      end
      if print_type = "C" then do
         call split_line_char
         say temp1
      end
      if print_type = "H" then do
         call split_line_hexa
         say temp1
         if temp2 <> "" then say temp2
      end
   end
end

if outfile <> "" then do
   call alloc_outfile
   page = 0
   head = "1IDCAMS  SYSTEM SERVICES" copies(" ",41) "TIME:"
   head = head time()"        "date(u)"     PAGE"
   newcharline = ""
   maxlines  = 51
   linecount = 99
   dropbuf
   do k = 1 to lista.0
      if left(lista.k,3)="KEY"|,
         left(lista.k,3)="RBA"|,
         left(lista.k,3)="REC"|,
         left(lista.k,3)="REL" then do
           cc = "0"
           if newcharline <> "" then do
              queue newcharline
              execio 1 diskw ouf
              newcharline = ""
              call advance_line
           end
           call advance_line
           call advance_line
           queue cc||lista.k
           execio 1 diskw ouf
           cc = " "
           iterate k
      end
      else do
         if print_type = "H" | print_type = "D" then do
            call advance_line
            if cc = "0" then call advance_line
            queue cc||lista.k
            execio 1 diskw ouf
         end
         if print_type = "C" then do
            if newcharline = "" then do
               newcharline = cc || lista.k
            end
            else do
               call advance_line
               if cc = "0" then call advance_line
               newcharline = newcharline || lista.k
               queue newcharline
               execio 1 diskw ouf
               newcharline = ""
            end
         end
      end
      cc = " "
   end
   if newcharline <> " " then do
      queue newcharline
      execio 1 diskw ouf
   end
   "execio 0 diskw ouf (finis"
end

saida:
 zz = msg(off)
 "free dd(inf)"
 "free dd(ouf)"
exit

/*================================================================*/
/*  Subroutines                                                   */
/*================================================================*/

display_panel:
 infile = strip(infile,,"'")
 panel_field = "OUTFILE"           /* position cursor             */
 f = "H"                           /* default offset display (H,D)*/
 m = "N"                           /* default for mask chars (N,Y)*/
 t = "D"                           /* default for Dump/Hex/Char   */
 address ispexec
 'addpop row(1) column(1)'
 'display panel(vsamprt) cursor('panel_field')'
 if rc=8 then exit
 'rempop'
 offset = f
 count = cnt
 mask = m
 print_type = t
 address tso
return

check_files:
 zz  = listdsi(infile)
 if sysreason <>12 & sysreason <>0 then do
    say "Input file not found"
    exit
 end
 outfile  = strip(outfile,,"'")
 if infile = outfile then do
    Say " Input and output files cannot be the same"
    exit
 end
 if outfile <>"" then do
    zz = listdsi(outfile)
    if sysreason = 12 then do
       say "Output file cannot be VSAM"
       exit
    end
    if sysreason <>0 then do
       say "Output file not found"
       exit
    end
    if syslrecl < 121 then do
       say "Output file needs a lrecl of 121 or greater"
       exit
    end
 end
return

build_command:
 if print_type = "D" then opcao = "DUMP"
 else opcao = "HEX"
 if k1   <>"" then opcao = opcao "FROMKEY("k1")"
 if k2   <>"" then opcao = opcao "TOKEY("k2")"
 if skip <>"" then opcao = opcao "SKIP("skip")"
 if count<>"" then opcao = opcao "COUNT("count")"
return

print_to_table:
 call alloc_infile
 zz = outtrap(lista.)
 "print infile (inf)" opcao
 zz = outtrap(off)
return

decide_display:
 arg p
 cha = x2c(p)                     /* the real char                */
 dec = c2d(cha)                   /* decimal equivalent           */
 if dec < 64 then do
    return "."                    /* below space is always masked */
 end
 if mask = "N" then do            /* if no mask, just return char */
    ret = cha
 end
 else do
    select
      when dec > 64 & dec < 74 then ret = "."    /* x'40'   x'4A' */
      when dec > 80 & dec < 90 then ret = "."    /* x'50'   x'5A' */
      when dec > 97 & dec <106 then ret = "."    /* x'61'   x'6A' */
      when dec >111 & dec <121 then ret = "."    /* x'6F'   x'79' */
      when dec =128            then ret = "."    /* x'80'         */
      when dec >137 & dec <145 then ret = "."    /* x'89'   x'8F' */
      when dec >153 & dec <161 then ret = "."    /* x'99'   x'A1' */
      when dec >169 & dec <192 then ret = "."    /* x'A9'   x'C0' */
      when dec >201 & dec <208 then ret = "."    /* x'C9'   x'D0' */
      when dec >217 & dec <224 then ret = "."    /* x'D9'   x'E0' */
      when dec =225            then ret = "."    /* x'E1'         */
      when dec >233 & dec <240 then ret = "."    /* x'E9'   x'F0' */
      when dec >249            then ret = "."    /* x'F9'         */
      otherwise ret = cha
    end
 end
return ret

memorize_positions:
 if print_type = "D" then do
    h.1 =  9; h.2 = 11; h.3 = 13; h.4 = 15
    h.5 = 18; h.6 = 20; h.7 = 22; h.8 = 24
    h.9 = 27; h.10= 29; h.11= 31; h.12= 33
    h.13= 36; h.14= 38; h.15= 40; h.16= 42
    h.17= 47; h.18= 49; h.19= 51; h.20= 53
    h.21= 56; h.22= 58; h.23= 60; h.24= 62
    h.25= 65; h.26= 67; h.27= 69; h.28= 71
    h.29= 74; h.30= 76; h.31= 78; h.32= 80
 end
return

format_dump:
 string = ""
 do z = 1 to 32
    hexa = substr(lin,h.z,2)
    if hexa <> "  " then do
       char = decide_display(hexa)
    end
    else do
       char = " "
    end
    string = string || char
 end
 lin = overlay(string,lin,86)
 if offset = "D" then do
    offnum = word(lin,1)
    offnum = right(x2d(offnum),6,"0")
    lin = overlay(offnum,lin,1)
 end
return

format_char:
 string = ""
 do z = 1 to 120 by 2
    hexa = substr(lin,z,2)
    if hexa <> "  " then do
       char = decide_display(hexa)
    end
    else leave z
    string = string || char
 end
 lin = string
return

split_line_dump:
 temp1 = left(lin,46)
 temp1 = temp1 "*"||substr(lin,86,4)
 temp1 = temp1 substr(lin,90,4)
 temp1 = temp1 substr(lin,94,4)
 temp1 = temp1 substr(lin,98,4)||"*"
 if offset = "D" then do
    num2 = word(lin,1)+16
    num2 = right(num2,6,"0")
 end
 else do
    num2 = x2d(word(lin,1))+16
    num2 = right(d2x(num2),6,"0")
 end
 temp2 = num2  substr(lin,46,39)
 temp2 = temp2 "*"||substr(lin,102,4)
 temp2 = temp2 substr(lin,106,4)
 temp2 = temp2 substr(lin,110,4)
 temp2 = temp2 substr(lin,114,4)||"*"
return

split_line_char:
 if first_record_line = 1 then number = 0
 else number = number + 60
 first_record_line = 0
 num2 = right(number,6,"0")
 if offset = "H" then num2 = right(d2x(num2),6,"0")
 lin1=substr(lin,1,20)" " substr(lin,21,20)" " substr(lin,41,20)
 temp1 = num2 " " lin1
return

split_line_hexa:
 if first_record_line = 1 then number = 0
 else number = number + 30
 first_record_line = 0
 num2 = right(number,6,"0")
 if offset = "H" then num2 = right(d2x(num2),6,"0")
 lin1 = substr(lin,1,20)" " substr(lin,21,20)" " substr(lin,41,20)
 temp1 = num2 " " lin1
 if length(lin) > 60 then do
    lin2=substr(lin,61,20)" " substr(lin,81,20)" " substr(lin,101,20)
    number = number + 30
    num2 = right(number,6,"0")
    if offset = "H" then num2 = right(d2x(num2),6,"0")
    temp2 = num2 " " lin2
 end
 else temp2 = ""
return

advance_line:
 linecount = linecount+1
 if linecount > maxlines then do
    page = page + 1
    queue head right(page,6)
    execio 1 diskw ouf
    cc = "0"
    linecount = 0
 end
return

alloc_outfile:
 zz = msg(off)
 "free dd(ouf)"
 "alloc dd(ouf) da('"outfile"') shr"
 if rc <> 0 then do
    say " Error allocating" outfile rc
    signal saida
 end
return

alloc_infile:
 zz = msg(off)
 "free dd(inf)"
 "alloc da('"infile"') dd(inf) shr reuse"
 if rc <> 0 then do
    say "Error allocating" infile rc
    signal saida
 end
return
VSAMPRT ISPF panel
)ATTR
  _ TYPE(INPUT) CAPS(ON) JUST(LEFT)  COLOR(RED)
  % TYPE(TEXT)   INTENS(HIGH) SKIP(ON) COLOR(YELLOW)
  + TYPE(TEXT)   INTENS(HIGH) SKIP(ON) COLOR(WHITE)
  ? TYPE(OUTPUT) INTENS(HIGH) SKIP(ON) COLOR(PINK)
  $ TYPE(OUTPUT) INTENS(HIGH) SKIP(ON) COLOR(YELLOW) CAPS(OFF)
  * TYPE(OUTPUT) INTENS(HIGH) SKIP(ON) COLOR(WHITE) CAPS(OFF)
)BODY WINDOW(68,19)
+
%  DATASET......:_INFILE                                      +
+
%  Output file..:_OUTFILE                                     +
+  (blank for screen)
+
+  Optional range of records to print:
+
%        From key.:_K1                                +
%        To key...:_K2                                +
%        Count....:_CNT +
%        Skip.....:_SKIP  +
+
+    Print option.......................:_T+ (Dump,Char,Hex)
+    Mask non-display chars above space.:_M+ (Yes,No)
+    Record offset display type.........:_F+ (Hexa or Decimal)
+
%
)INIT
&zwinttl = 'Print  datasets'
)PROC
&offset='D H'
&mask='Y N'
&type='D C H'
ver(&infile,nonblank,dsname)
ver(&outfile,dsname)
ver(&cnt,num)
ver(&skip,num)
ver(&f,nonblank,listv,&offset)
ver(&m,nonblank,listv,&mask)
ver(&t,nonblank,listv,&type)
)END

    
--------------------------------------------------------------------------------

REXX over IP - Part 1



 /* REXX */
/*********************************************************************/
/*                                                                   */
/* This is the basic server REXX for developing server communication.*/
/* It is called from a client and is passed a string which should be */
/* of the form user-id followed by an action string.                 */
/*                                                                   */
/* If the string DISKSPACE is passed then information                */
/* on the currently online DASD is returned.                         */
/*                                                                   */
/* If the string starts with TSO, then all that follows this will    */
/* be issued as a TSO command and the data trapped and returned to   */
/* the caller (eg the results of a LISTC UCAT).                      */
/*                                                                   */
/* If the string SHUTDOWN is passed then the server will terminate   */
/*                                                                   */
/* If none of the above is passed then the string SERVER ERROR       */
/* followed by the string sent will be returned to the caller.       */
/*                                                                   */
/* The string passed will be parsed based on the assumption that it  */
/* will be in the following form:                                    */
/* userid() label (action)                                           */
/*                                                                   */
/* Where label is the routine to invoke, and action is the argument  */
/* to that label. See the SELECT statement later to see how to       */
/* implement additional function in this server.                     */
/*                                                                   */
/*********************************************************************/
/* */
/* need to trap possible syntax errors in case of incorrect parms */
/* being passed.                                                  */
/* */
SIGNAL ON syntax
/* */
linecount.=0
/* initialize control information                                     */
port = '1952'                /* The port used for the service         */
/* */
/* now obtain the name of the LAPR this server is running on */
/* */
CVTECVT=D2X(C2D(STORAGE(10,4))+140) /* point to cvtsysad */
lparname=STRIP(STORAGE(D2X(C2D(STORAGE(CVTECVT,4))+344),8))
/* Begin setup                                                        */
SAY 'RSSERVER: initialiZing'
/* */
/* a call to socket will return a string which gives an rcode */
/* followed by the unique name for this task (in this case    */
/* RSSERVER) followed by the maximum number of tasks and      */
/* finally the name of the IP started task.                   */
/* */
x= 'SOCKET'('Initialize','RSSERVER')
IF WORD(x,1)^='0' THEN DO
   SAY 'ERROR while initialiZing'
   EXIT
   END
/* */ 
/* We now need to get the host IP address. This is done with a  */
/* gethostid request. In a similar manner to other requests the */
/* first character returned is a success or failure indicator   */
/* and in this case the second word is the IP address.          */
/* */
ipaddress='SOCKET'('GetHostId')
/* */
IF WORD(ipaddress,1)^='0' THEN DO
   SAY 'ERROR while getting hostid'
   EXIT
   END
/* */
ipaddress=WORD(ipaddress,2)
/* */
SAY 'RSSERVER: initialised: ipaddress='ipaddress 'port='port
/* */
/* obtain a socket id. This is word 2 of the request. */
/* */
sock = 'SOCKET'('Socket')
/* */
IF WORD(sock,1)^='0' THEN DO   
   SAY 'ERROR while getting socket'
   EXIT
   END
/* */
sock=WORD(sock,2)
/* */
/* In case IP hasn't cleared itself up by the time the server */
/* restarts, set the reuse option to prevent the server being */
/* unable to start.                                           */
/* */
x = 'SOCKET'('SetSockOpt',sock,'Sol_Socket','So_REUSEADDR','On')
/* */
/* now its time to issue a bind. Only a single character RC */
/* should be returned this time.                            */
/* */
x='SOCKET'('Bind',sock,'AF_INET' port ipaddress)
/* */
IF x^=0 THEN DO
   SAY 'error during af_inet'
   EXIT
   END
/* */
/* now time to listen. */
/* */
x='SOCKET'('Listen',sock)
/* */
IF x^=0 THEN DO
   SAY 'error during listen'
   EXIT
   END
/* */
/* now set the io control mode with blocking. */
/* */
x='SOCKET'('Ioctl',sock,'FIONBIO','ON')
/* */
IF x^=0 THEN DO
   SAY 'error during set of io control mode'
   EXIT
   END
/* */
x='SOCKET'('Fcntl',sock,'F_SETFL','BLOCKING')
/* */
IF x^=0 THEN DO
   SAY 'error during set of io control mode'
   EXIT
   END
/* */
/* Wait for new connections and send lines. The array linecount will */
/* be used to keep track of data sent to each caller.                */
/* */
linecount. =  0
/* */
DO FOREVER
/* */
sellist='SOCKET'('SELECT','Write * Read * Exception')
/* */
PARSE UPPER VAR sellist . 'READ' rsock . 'WRITE' wsock . 'EXCEPTION' .
/* */
/* Now receive the information. If the socket id passed is the same */
/* as the one we are listening on, then we need to accept the       */
/* new connection.                                                  */
/* */
IF rsock^='' THEN DO
   IF rsock=sock THEN DO
      x = 'SOCKET'('Accept',rsock)
      IF WORD(x,1)\='0' THEN DO
         SAY 'error adding another socket'
         EXIT
         END
      ELSE rsock=WORD(x,2)
      END
/* */
   x='SOCKET'('Recv',rsock)
/* */
   PARSE VAR x x . user string
/* */
   IF x^='0' THEN DO
      SAY 'Connection lost'
      x='SOCKET'('Close',rsock)
      END
   ELSE DO
        stringuser.rsock=user
        stringword.rsock=string
        SAY 'User' user 'issued command' string 'at' TIME() DATE('E')
   END
END
/* */
/* Retrieve the command for this socket request and build the    */
/* information in the variable aray msg.wsock.msgnum.            */
/* It is assumed that RESULT will contain the number of lines    */
/* to return to the caller upon return from the subroutine.      */
/* If it doesn't then 1 line to return is assumed.               */
/* This will be passed to the caller as a message with the LPAR  */
/* name at the front of the data.                                */
/* As it is possible that the strings will become joined if the  */
/* network responses are slow, then a break character of X'0D'   */
/* is used to indicate end of line.                              */
/*                                                               */
/* Lines will be returned one at a time and the linecount for    */
/* the write socket will gradually drop to zero as data leaves   */
/* for the client.                                               */
/* */
IF wsoc^='' THEN DO
   IF linecount.wsock=0 THEN DO
      PARSE VAR stringword.wsock command data
      SELECT
        WHEN command='DISKSPACE' THEN CALL diskspace_process
        WHEN command='TSO' THEN CALL tsocmds_process
        WHEN command='SHUTDOWN' THEN SIGNAL shutdown
        OTHERWISE CALL error_process
      END
      IF RESULT='' THEN linecount.wsock=1
      ELSE linecount.wsock=RESULT
   END
   msgnum=linecount.wsock
   msg=lparname msg.wsock.msgnum||'0D'x
   x='SOCKET'('Send',wsock,msg)
   IF WORD(x,1)='0' THEN DO
      linecount.wsock = linecount.wsock - 1
      DROP msg.wsock.msgnum
      END
   IF WORD(x,1)\='0' THEN DO /* send failure - cleanup */
      linecount.wsock=0      /* indicate no lines      */
      DO x=1 TO msgnum
         DROP msg.wsock.x    /* release storage */
      END
      DROP stringword.wsock
      DROP stringuser.wsock
   END
   IF linecount.wsock=0 THEN DO
      x='SOCKET'('Close',wsock)
      END
   END
END
/* */
/* Terminate the server and exit */
/* */
shutdown:
x='SOCKET'('Terminate')
SAY 'RSSERVER: Terminated'
EXIT 0
/* */
/* ================== The processing subroutines ==================*/
/* */
diskspace_process:
/* */
CALL RVOLDATA
/* */
/* now do the index trick to avoid data being sent back in reverse order */
/* */
y=volser.0+1
/* */
/* first pass back the title line. */
/* */
msg.wsock.y='Address Volser Free_Extents Free_Cyls Free_Trks Large_Cyl',
    'Large_Trk Index Frag'
DO x=1 TO volser.0*1
   y=y-1
   msg.wsock.y=address.x volser.x 1*free_extents.x 1*free_cylinders.x,
   (1*free_tracks.x)+(15*free_cylinders.x) 1*largest_cylinder_extent.x,
   (1*largest_track_extent.x)+(15*largest_cylinder_extent.x),
   index_status.x 1*fragmentation_index.x
END
/* */
/* Note that as x is incremented it will contain volser.0 +1 */
/* */
RETURN x
/* */
tsocmds_process:
ADDRESS TSO
CALL OUTTRAP('LINE.')
''data
/* */
/* now do the index frig to avoid data being sent back reverse order */
/* */
y=line.0
DO x=1 TO line.0
msg.wsock.y=line.x
y=y-1
DROP line.x
END
CALL OUTTRAP('OFF')
RETURN line.0
/* */
error_process:
msg.wsock.1='SERVER ERROR' stringword.wsock
RETURN 1 


/* REXX */
/* */
/*********************************************************************/
/*                                                                   */
/* The first part of this REXX checks to see if the socket has been  */
/* left active in error and terminates it. It then issues requests   */
/* to the specified server.                                          */
/*                                                                   */
/* This REXX requires that a string of information is supplied as    */
/* follows:                                                          */
/* WORD 1 - The ipaddress of the host. Use NONE if using the same    */
/*          host as the client.                                      */
/* WORD 2 onwards - the command string to issue to the server.       */
/*                                                                   */
/*********************************************************************/
/* */
x='SOCKET'('SocketSetStatus')
/* */
IF WORD(x,1)='0' THEN DO
   x='SOCKET'('Terminate')
   END
/* */
/*********************************************************************/
/*                                                                   */
/* An example of a client request REXX. This client sends a request  */
/* to the server so that it can carry out an action. This client then*/
/* retrieves the information line-by-line until the connection is    */
/* terminated by the server.                                         */
/*                                                                   */
/* To exploit this client, use as follows:                           */
/* Two parameters can be used. The first is the ipaddress to contact,*/
/* for example PRD1. The second is the data to be sent to the        */
/* server. If both parameters are not present then this REXX will    */
/* EXIT immediately.                                                 */
/* If the ipaddress is set to NONE then a gethostid will be issued   */
/* to get the ipaddress of our host.                                 */
/* If the server detects an error with the request supplied from     */
/* this client, then the string SERVER ERROR is returned from the    */
/* server followed by the command that was sent through from here.   */
/*                                                                   */
/* Note the userid of the caller is also supplied to the server for  */
/* diagnostic purposes.                                              */
/*                                                                   */
/*********************************************************************/
/* */
ip_proc:
/* */
ARG string
/* */
PARSE VAR string ipaddress string
/* */
/* Initialize control information */
/* */
port = '1952'               /* The port used by the server */
/* */
/* Initialise */
/* */
x='SOCKET'('Initialize','RSCLIENT')
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error initializing RSCLIENT'
   EXIT
   END
/* */
IF ipaddress='NONE' THEN DO
  x='SOCKET'('GetHostId')
  IF WORD(x,1)^='0' THEN DO
     SAY 'error trying to get host id'
     SIGNAL clean_up
     END
  ELSE ipaddress=WORD(x,2)
  END
/* */
/* Initialize for receiving lines sent by the server. */
/* */
x = 'SOCKET'('Socket')
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error issuing socket'
   SIGNAL clean_up
   END
/* */
/* pick up the client socket id */
/* */
clisock=WORD(x,2)
/* */
/* */
/* now get the host name */
/* */
x='SOCKET'('GetHostName')
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error getting host name'
   SIGNAL clean_up
   END
/* */
hostname = WORD(x,2)
/* */
/* now issue af_inet */
/* */
x='SOCKET'('Connect',clisock,'AF_INET' port ipaddress)
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error issuing af_inet'
   SIGNAL clean_up
   END
/* */
/* now send the information to the server */
/* */
x='SOCKET'('Send',clisock,userid() string)
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error issuing send'
   SIGNAL clean_up
   END
/* */
/* Wait for lines sent by the server */
/* */
DO FOREVER
/* */
/* now read the data. Data is returned as a rc len data field */
/* */
x='SOCKET'('Read',clisock)
/* */
IF WORD(x,1)\='0' THEN DO
   PARSE VAR x . error
   SAY 'error issuing recv' error
   SIGNAL clean_up
   END
/* */
/* allow for the line being null. Abort the connection if it is. */
/* */
IF WORD(x,2)='0' THEN LEAVE
/* */
/* get the actual data */
/* */
PARSE VAR x . . dataline
/* */
/* As the data may have become strung together thanks to slow */
/* networks, the datalines have been prepared by the server   */
/* with a x'0d' between the lines.                            */
/* */
DO UNTIL INDEX(dataline,'0D'x)=0
   PARSE VAR dataline trueline '0D'x dataline
/* */
/* This is the point in the client REXX where the data is returned */
/* as a string and it is possible to insert your own processing.   */
/* */
   SAY trueline
   END
END
/* */
/* Terminate and exit                                                 */
/* */
clean_up:
x='SOCKET'('Terminate','RSCLIENT')
RETURN

REXX over IP - Part 2



//XXXXASM  JOB XX,YYY,CLASS=X,MSGCLASS=T,MSGLEVEL=1 - Your job card
//STEPA EXEC ASMFCL,PARM.LKED='NORENT,NOREUS'
//ASM.SYSLIB DD DSN=SYS1.MACLIB,DISP=SHR
//           DD DSN=SYS1.MODGEN,DISP=SHR
//ASM.SYSIN DD *
         MACRO
         REXREGS
         LCLA  &CNT
&CNT     SETA  0
.LOOP    ANOP
R&CNT    EQU   &CNT
&CNT     SETA  &CNT+1
         AIF   (&CNT LT 16).LOOP
         MEND
         MACRO
  SHOWARAY &LABEL,&ASNAME,&ERR=ABEND001,&LEN=,&SUBARRAY=,&DEBIN=,&LINK=
         PRINT NOGEN
***********************************************************************
*
* MACRO TO CREATE REXX ARRAY VARIABLES
*
* NOTE RESTRICTION: THIS MACRO IS LIMITED TO CREATING UP TO 9,999,999
*                   ENTRIES FOR EACH ARRAY.
*
* MACRO  FORMAT:
*        SHOWARAY &LABEL,&ASNAME,&ERR=,&LEN=,&SUBARRAY=,&DEBIN=
* WHERE:
*        &LABEL  IS THE NAME OF THE LABEL WHICH ADDRESSES THE FIELD 
*                FROM WHERE THE DATA TO BE DEFINED IN A REXX VARIABLE 
*                IS LOCATED
*        &ASNAME IS THE NAME TO BE ASSIGNED TO THE DATA FOR USE IN REXX
*        &ERR=   IS THE LABEL TO BRANCH TO SHOULD AN ERROR OCCUR WHILE
*                CREATING THE REXX VARIABLE. BY DEFAULT IT IS ABEND001
*        &LEN=   IF THE DATA AT &LABEL IS NOT DEFINED SUCH THAT THE 
*                LENGTH OF THE DATA IS WHAT YOU WANT, SIMPLY ENTER A 
*                NUMBER HERE THAT DEFINES THE LENGTH REQUIRED. CAN ALSO 
*                BE USEFUL IF IT IS NECESSARY TO DUMP OUT A LARGE AREA.
*        &SUBARRAY= IF A MULTI LEVEL ARRAY IS REQUIRED EG A.1.1 THEN
*                SET THIS VALUE ACCORDINGLY.
*        &DEBIN= IF THE DATA TO BE CREATED IS BINARY, SETTING THIS TO A
*                VALUE WILL CONVERT THE SPECIFIED NUMBER OF BYTES FROM
*                BINARY TO CHARACTER. THE DEFAULT LENGTH FOR THE
*                OUTPUT DATA IS 4 BYTES. IF THIS IS INSUFFICIENT, THEN
*                SPECIFY A SUITABLE &LEN VALUE TO OVERRIDE IT.
*        &LINK=  THIS IS A REXX NAME LABEL TO WHICH THE ARRAY COUNT IS
*                LINKED. THE PURPOSE OF THIS IS TO ALLOW A BRANCH OUT
*                OF ARRAY LOOPS WHILE STILL MAINTAINING NUMERIC
*                CONSISTENCY.
*
**********************************************************************
         PRINT GEN
         LCLA  &DEFLEN
&DEFLEN  SETA  16
         SHOWSET
LITLOC   LOCTR
&LABCHECK SETC '@_&ASNAME&SUBARRAY'
&LINKNAME SETC '@_&LINK'
         AIF   (D'&LABCHECK).BYPASS
         AIF   (T'&SUBARRAY EQ 'O').NORMNAME
&LABCHECK DC   C'&ASNAME..&SUBARRAY'
         AGO   .EOFARRAY
.NORMNAME ANOP
&LABCHECK DC   C'&ASNAME'
.EOFARRAY ANOP
&LABCHECK._ARRAY DC C'.       '
&LABCHECK._COUNTER DC PL4'0'                 * COUNTER FIELD FOR THIS ITEM
.BYPASS  ANOP
&SYSECT  LOCTR
         AIF   (T'&LINK EQ 'O').DOADD
         MVC   &LABCHECK._COUNTER,&LINKNAME._COUNTER
         AGO   .DOUNPK
.DOADD   ANOP
         AP    &LABCHECK._COUNTER,=P'1'      * INCREMENT THE COUNTER THIS PASS
.DOUNPK  ANOP
         UNPK  @_UNPACKER,&LABCHECK._COUNTER * UNPACK THE VALUE
         OI    @_UNPACKER+7,X'F0'            * REMOVE THE SIGN
* NOW NEED TO WORK OUT THE LENGTH OF THE COUNTER BIT TO ADD TO ARRAY
         L     R15,&LABCHECK._COUNTER        * LOAD THE COUNTER VALUE TO WORK
*                                              OUT THE LENGTH
         SRL   R15,4                         * REMOVE THE SIGN
         XR    R14,R14                       * CLEAR R14 FOR A COUNTER
LOOP&SYSNDX DS 0H
         SRA   R15,4                         * MOVE DIGIT BY DIGIT
         LTR   R15,R15
         BZ    COUNT&SYSNDX
         LA    R14,1(,R14)
         B     LOOP&SYSNDX
COUNT&SYSNDX DS 0H
* NOW ADD COUNT FIELD TO NAME
         LA    R15,@_UNPACKER+7         * POINT TO END OF FIELD
         SR    R15,R14                  * AND COME BACK TO FIRST DIGIT.
         MVC   &LABCHECK._ARRAY+1(7),0(R15)
         LA    1,&LABCHECK
         ST    1,SHVNAMA
* NOW CALCULATE NEW LENGTH
         LA    1,L'&LABCHECK
         LA    1,2(R14,R1)
         ST    1,SHVNAML
         AIF   (T'&DEBIN EQ 'O').NORMLAB
*
*** NOW ALLOW FOR A BINARY CONVERSION
*** FIST CALCULATE THE ICM VALUE
*
&ICM     SETA  (1 SLL &DEBIN)-1
         XR    R15,R15
         ICM   R15,&ICM,&LABEL         * LOAD THE BINARY VALUE
         CVD   R15,@_DWORD             * CONVERT TO PACKED
         OI    @_DWORD+7,X'0F'
         UNPK  @_UNPACK,@_DWORD
*
*** IF THE LEN VALUE IS SUPPLIED THIS OVERRIDES THE DEFAULT OF 16
*
         AIF   (T'&LEN EQ 'O').SETDEF  * LENGTH NOT SUPPLIED USE DEFLEN
&DEFLEN  SETA  &LEN                    * RESET DEFLEN TO SUPPLIED LEN
.SETDEF  ANOP
         LA    R1,@_UNPACK+(16-&DEFLEN)
         ST    R1,SHVVALA
         LA    R1,&DEFLEN
         AGO   .OK
.NORMLAB ANOP
         LA    1,&LABEL
         ST    1,SHVVALA
         AIF   (T'&LEN NE 'O').DOLEN
         LA    1,L'&LABEL
         AGO   .OK
.DOLEN   ANOP
         LA    1,&LEN
.OK      ANOP
         ST    1,SHVVALL
         LR    0,10
         LA    1,COMS
         L     15,IRXEXCOM
         BALR  14,15
         LTR   15,15
         BNZ   &ERR
         MEND
         MACRO
         SHOWBASE &LABEL,&ERR=ABEND001,&SUBARRAY=
***********************************************************************
*
* MACRO TO CREATE REXX BASE VARIABLES
* SHOULD BE USED IN ASSOCIATION WITH A SHOWARAY MACRO. NOTE THAT A
* SHOWBASE MACRO IS OPTIONAL IF YOU ALREADY KNOW THE NUMBER OF
* VARIABLES BEING SET. THIS WILL CREATE THE A.0 ENTRY
*
* MACRO  FORMAT:
*        SHOWBASE &LABEL,&ERR=,&SUBARRAY=
* WHERE:
*        &LABEL IS THE NAME OF THE REXX ARRAY LABEL WHICH HAS BEEN
*               CREATED. THIS WILL CREATE THAT LABEL.0 ENTRY
*        &ERR=  IS THE LABEL WHICH BRANCH TO SHOULD AN ERROR OCCUR 
*               WHILE CREATING THE REXX VARIABLE. BY DEFAULT IT IS 
*               ABEND001.
*        &SUBARRAY= IF SUBARRAYS HAVE BEEN USED THIS WILL INSERT THE
*                   APPROPRIATE VALUE EG A.1.0
*
**********************************************************************
         SHOWSET
         AIF   (T'&SUBARRAY EQ 'O').NORMNAME
&ASNAME  SETC  '&LABEL..&SUBARRAY..0'
         AGO   .CHECKER
.NORMNAME ANOP
&ASNAME  SETC  '&LABEL..0'
.CHECKER ANOP
&LABCHECK SETC '@_&LABEL&SUBARRAY._COUNTER'
         AIF   (D'&LABCHECK).ITSOK
MNOTE    NO ARRAY ELEMENTS DEFINED.
         MEXIT
.ITSOK   ANOP
LITLOC   LOCTR
@_A&SYSNDX DC  C'&ASNAME'
&SYSECT  LOCTR
         LA    1,@_A&SYSNDX
         ST    1,SHVNAMA
         LA    1,L'@_A&SYSNDX
         ST    1,SHVNAML
         UNPK  @_UNPACKER,&LABCHECK
         OI    @_UNPACKER+L'@_UNPACKER-1,C'0'
         LA    1,@_UNPACKER
         ST    1,SHVVALA
         LA    1,L'@_UNPACKER
         ST    1,SHVVALL
         LR    0,10
         LA    1,COMS
         L     15,IRXEXCOM
         BALR  14,15
         LTR   15,15
         BNZ   &ERR
         MEND
         MACRO
         SHOWSET
         AIF   (D'SHOW_START).NONEED
         B     BY_SHOW_START
SHOW_START DS  0H
         ST    R10,COMRET
         LA    6,COMSHVB
         USING SHVBLOCK,R6
         XC    COMSHVB(SHVBLEN),COMSHVB
         XC    SHVNEXT,SHVNEXT
         MVI   SHVCODE,C'S'
         BR    14
ABEND001 DS    0H
         ABEND 1    * REQUIRED FOR THE OTHER MACROS. SAVES SOME CODING.
BY_SHOW_START  DS 0H
LITLOC   LOCTR
@_UNPACK DC    CL16' '
         DC    CL8' '           * FILL FIELD
         ORG   @_UNPACK+8
@_UNPACKER DC  CL8' '
         ORG
@_DWORD  DS    CL8              * USED FOR THE DEBIN FUNCTION
&SYSECT  LOCTR
.NONEED  ANOP
         BAL   14,SHOW_START
         MEND
***********************************************************************
*
* THIS ROUTINE ANALYSES THE UCBS OF THE DASD STORAGE DEVICES ON THE
* SYSTEM AND RETRIEVES THE SPACE UTILIZATION DETAILS.
* THE VARIABLES CREATED ARE AS FOLLOWS:
*
* UNIT_TYPE.X ......THE DASD TYPE (3390/3380)
* VOLSER.X .........VOLUME SERIAL NUMBER
* FREE_EXTENTS.X ...NUMBER OF FREE EXTENTS.
* FREE_CYLINDERS.X  NUMBER OF FREE CYLINDERS
* FREE_TRACKS.X ... NUMBER OF FREE TRACKS.
* LARGEST_CYLINDER_EXTENT.X ... LARGEST CONTIGUOUS CYLINDER EXTENT
* LARGEST_TRACK_EXTENT.X ... LARGEST CONTIGUOUS TRACKS EXTENT
* FRAGMENTATION_INDEX.X ... THE FRAGMENTATION INDEX
* ADDRESS.X ........DEVICE ADDRESS (RETRIEVED FOR DASDR8)
* INDEX_STATUS.X ...IS THE VTOCIX ACTIVE OR NOT.
*
* NOTE:  THE BASE VARIABLE FOR ALL THESE ITEMS IS VOLSER.0
*
***********************************************************************
RVOLDATA TITLE 'REXX FUNCTION TO RETRIEVE DISK SPACE DETAILS'
*
RVOLDATA AMODE 31
RVOLDATA RMODE 24
RVOLDATA CSECT
         REXREGS
         BAKR  14,0
         LR    12,15
         USING RVOLDATA,12
*
         LR    R10,R0                  * R10 Ñ> A(ENVIRONMENT BLOCK)
         USING ENVBLOCK,R10
*
*
         L     R9,ENVBLOCK_IRXEXTE     * R9 Ñ> A(EXTERNAL EP TABLE)
         USING IRXEXTE,R9
*
*
*
         STORAGE OBTAIN,LENGTH=GETLEN,ADDR=(8)
         STORAGE OBTAIN,LENGTH=RETLEN,ADDR=(7)
         USING COMSDS,R8
         USING RETAREA,R7
*
* PREPARE THE REXX AREA FOR USE
*
         XC    COMS(COMSLEN),COMS      * SET TO LOW VALUES
         LA    15,COMID
         ST    15,COMS
         LA    15,COMDUMMY
         ST    15,COMS+4
         ST    15,COMS+8
         LA    15,COMSHVB
         ST    15,COMS+12
         LA    15,COMRET
         ST    15,COMS+16
         OI    COMS+16,X'80'           * INDICATE END OF PARMS
         MVC   COMID,=C'IRXEXCOM'
*
*
* COMMENCE THE LOOP OF UCBS LISTING ALL THE DEVICE TYPES.
*
         XC    HUNDRED,HUNDRED
*
*
UCBLOOP  DS    0H
         UCBSCAN COPY,WORKAREA=HUNDRED,RANGE=ALL,UCBAREA=UCBWORK,      +
               DYNAMIC=YES,DEVCLASS=DASD,DEVNCHAR=MYDEV,DEVN=0,        +
               PLISTVER=MAX
*
* IF R15 CONTAINS 04, THEN LAST UCB RETRIEVED SO SET END FLAG
* FOR DEFENSIVE CODE, ASSUME ALL NON-ZERO RETURN CODES ARE THE
* EQUIVALENT OF END OF UCBS
*
         LTR   15,15            * END OF UCBS?
         BNZ   RETURN           * YES SO GO SET THE BASE ARRAY VALUES
         LA    R3,UCBWORK
         USING UCBOB,R3
         LA    R4,UCBDEV
         USING UCBDEV,R4
         TM    UCBSTAT,X'80'    * IS THE DEVICE ONLINE?
         BNO   UCBLOOP          * NO, SO LOOP ROUND
*
*** NOW SET THE ADDRESS VARIABLE FOR DASDR8
*
         SHOWARAY MYDEV,ADDRESS * KEEP THE DEVICE ADDRESS
*
*** NOW LET'S CONFIRM THE DEVICE TYPE
*
         MVI ATTRIBS,X'0A'      * NEEDS TO BE DONE PRIOR TO EDTINFO CALL
*
         EDTINFO RTNUNIT,DEVTYPE=UCBTYP,OUTUNIT=UNIT
         SHOWARAY UNIT,UNIT_TYPE
*
*** NOW LET'S GET THE FREE SPACE INFORMATION
*
         LSPACE UCB=(3),DATA=(7)
         SHOWARAY UCBVOLI,VOLSER
         SHOWARAY LSPDNEXT,FREE_EXTENTS,DEBIN=4
         SHOWARAY LSPDTCYL,FREE_CYLINDERS,DEBIN=4
         SHOWARAY LSPDTTRK,FREE_TRACKS,DEBIN=4
         SHOWARAY LSPDLCYL,LARGEST_CYLINDER_EXTENT,DEBIN=4
         SHOWARAY LSPDLTRK,LARGEST_TRACK_EXTENT,DEBIN=4
         SHOWARAY LSPDFRAG,FRAGMENTATION_INDEX,DEBIN=4
         TM    LSPDSTAT,X'40'
         BO    INDEX_THERE
         SHOWARAY NO_INDEX,INDEX_STATUS
         B     UCBLOOP
INDEX_THERE DS 0H
         SHOWARAY INDEX_ACTIVE,INDEX_STATUS
         B     UCBLOOP
RETURN   DS    0H
         SHOWBASE VOLSER
         STORAGE RELEASE,LENGTH=GETLEN,ADDR=(8)
         STORAGE RELEASE,LENGTH=RETLEN,ADDR=(7)
         PR
         LTORG
*
NO_INDEX DC C'INACTIVE'
INDEX_ACTIVE DC C'ACTIVE'
TDESCT   DSECT
         IEFUCBOB DEVCLASS=DA
***********************************************************************
*
***********************************************************************
***      IRXEXCOM PARAMETER AREA                                    ***
***********************************************************************
*
COMSDS   DSECT
COMS     DS    5AL4
COMID    DS    CL8              * IRXEXCOM ID - C'IRXEXCOM'
COMDUMMY DS    AL4              * NOT USED
COMSHVB  DS    (SHVBLEN)X       * IRXEXCOM SHVBLOCK (LENGTH FROM DSECT)
COMRET   DS    AL4              * IRXECOM RC
COMSLEN  EQU   *-COMS
HUNDRED  DS    XL100
         DS    0D
UCBWORK  DS    CL250
MYDEV    DS    CL4
UNIT     DS    CL8
ATTRIBS  DS    CL10
NAMES    DS    F
GETLEN   EQU   *-COMS
RETAREA  LSPACE MF=(D,DATA)
RETLEN   EQU   *-RETAREA
         DS    0D
         IRXEFPL
         IRXARGTB
         IRXEVALB
         IRXENVB
         IRXEXTE
         IRXSHVB
         END
/*
//LKED.SYSLMOD DD DSN=your.load.library,DISP=SHR,UNIT=
//LKED.SYSIN   DD *
         ENTRY RVOLDATA
         NAME  RVOLDATA(R)


/* REXX */
/*                                                                   */
/*********************************************************************/
/*                                                                   */
/* The first part of this REXX checks to see if the socket has been  */
/* left active in error and terminates it. It then issues requests   */
/* to the specified server.                                          */
/*                                                                   */
/* This REXX requires that a string of information is supplied as    */
/* follows:                                                          */
/* WORD 1 - The ipaddress of the host. Use NONE if using the same    */
/*          host as the client.                                      */
/* WORD 2 onwards - the command string to issue to the server.       */
/* DS=dsname - If this is specified it should be the last parameter  */
/*             passed and should specify a datasetname to allocate.  */
/*             If not specified the REXX will attempt to create a    */
/*             suitable. It cannot however guarantee to be unique.   */
/*                                                                   */
/* It is a variant of the LPARQUIZ command in that this REXX creates */
/* an output file for each host request which is then turned into an */
/* HTML table display for subsequent Web disply.                     */
/* Note that for safety the SHUTDOWN command does not write to the   */
/* file.                                                             */
/*                                                                   */
/*********************************************************************/
/*                                                                   */
x='SOCKET'('SocketSetStatus')
/* */
IF WORD(x,1)='0' THEN DO
   x='SOCKET'('Terminate')
   END
/*                                                                   */
/*********************************************************************/
/*                                                                   */
/* An example of a client request REXX. This client sends a request  */
/* to the server so that it can carry out an action. This client     */
/* then retrieves the information line-by-line until the connection  */
/* is terminated by the server.                                      */
/*                                                                   */
/* If the ipaddress is set to NONE then a gethostid will be issued   */
/* to get the ipaddress of our host.                                 */
/* If the server detects an error with the request supplied from     */
/* this client, then the string SERVER ERROR is returned from the    */
/* server followed by the command that was sent through from here.   */
/*                                                                   */
/* Note the userid of the caller is also supplied to the server for  */
/* diagnostic purposes.                                              */
/*                                                                   */
/*********************************************************************/
/* */
ip_proc:
/* */
ARG string
/* */
PARSE VAR string ipaddress string 'DS=' holdds
/* */
/* Initialize control information */
/* */
IF holdds='' THEN DO   /* if no dsname supplied */
/* */
/* If the user has supplied a numeric ipaddress rather than  */
/* a user friendly host name then holdds will be altered to  */
/* allow the creation of a user friendly name of NONE.       */
/* */
   SELECT
   WHEN LENGTH(ipaddress)>8 THEN holdds=userid()||'.hlq.NONE' ç modify to suit
   WHEN DATATYPE(LEFT(ipaddress,1),'M')=0 THEN DO
        holdds=userid()||'.hlq.NONE' - modify to suit
        END
   WHEN DATATYPE(ipaddress,'A')=0 THEN holdds=userid()||'.hlq.NONE'ç modify to suit
   OTHERWISE DO
        UPPER ipaddress
        holdds=userid()||'.hlq.'||ipaddress - modify to suit
        END
   END
END
port = '1952'               /* The port used by the server */
/* */
/* Initialize */
/* */
x='SOCKET'('Initialize','RSCLIENT')
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error initialising RSCLIENT'
   EXIT
   END
/* */
IF ipaddress='NONE' THEN DO
  x='SOCKET'('GetHostId')
  IF WORD(x,1)^='0' THEN DO
     SAY 'error trying to get host id'
     SIGNAL clean_up
     END
  ELSE ipaddress=WORD(x,2)
  END
/* */
/* Initialize for receiving lines sent by the server. */
/* */
x = 'SOCKET'('Socket')
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error issuing socket'
   SIGNAL clean_up
   END
/* */
/* pick up the client socket id */
/* */
clisock=WORD(x,2)
/* */
/* */
/* now get the host name */
/* */
x='SOCKET'('GetHostName')
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error getting host name'
   SIGNAL clean_up
   END
/* */
hostname = WORD(x,2)
/* */
/* now issue af_inet */
/* */
x='SOCKET'('Connect',clisock,'AF_INET' port ipaddress)
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error issuing af_inet'
   SIGNAL clean_up
   END
/* */
/* now send the information to the server */
/* */
x='SOCKET'('Send',clisock,userid() string)
/* */
IF WORD(x,1)^='0' THEN DO
   SAY 'error issuing send'
   SIGNAL clean_up
   END
/* */
/* Wait for lines sent by the server */
/* */
DO FOREVER
/* */
/* now read the data. Data is returned as a rc len data field */
/* */
x='SOCKET'('Read',clisock)
/* */
IF WORD(x,1)^='0' THEN DO
   PARSE VAR x . error
   SAY 'error issuing recv' error
   SIGNAL clean_up
   END
/* */
/* allow for the line being null. Abort the connection if it is. */
/* */
IF WORD(x,2)='0' THEN LEAVE
/* */
/* get the actual data */
/* */
PARSE VAR x . . dataline
/* */
/* As the data may have become strung together thanks to slow */
/* networks, the datalines have been prepared by the server   */
/* with a x'0d' between the lines.                            */
/* */
DO UNTIL INDEX(dataline,'0D'x)=0
   PARSE VAR dataline trueline '0D'x dataline
/* */
/* This is the point in the client REXX where the data is returned */
/* as a string and it is possible to insert your own processing.   */
/* */
   IF WORD(string,1)^='SHUTDOWN' THEN CALL html_proc
   END
END
/* */
/* Terminate and exit */
/* */
clean_up:
IF WORD(string,1)^='SHUTDOWN' THEN DO
   QUEUE '</TABLE>'
   QUEUE '</HTML>'
   ADDRESS TSO
   'FREE FI(SPONGE)'
   IF SYSDSN(holdds)^='OK' THEN DO
      "ALLOC FI(SPONGE) CATALOG DA("holdds")",
      "DSORG(PS) REC(F B) LR(200) BLK(4000)",
      "SPACE(5,5) TRACKS"
   END
   ELSE "ALLOC FI(SPONGE) DA("holdds")"
   QUEUE ''
  'EXECIO * DISKW SPONGE (FINIS'
  /* */
  /* Issue a SAY to let the user know that the REXX has finished */
  /* */
   SAY 'Command' string 'has completed'
   SAY 'Please review file' holdds 'for success'
   'FREE FI(SPONGE)'
END
/* */
x='SOCKET'('Terminate','RSCLIENT')
RETURN
/* */
/* now create the HTML information */
/* */
html_proc:
IF ipaddress/='' THEN CALL html_header /* use this as a 1st time flag */
/* */
/* now generate the table rows */
QUEUE '<TR>'
DO x=1 TO WORDS(trueline)
QUEUE '<TD VALIGN="MIDDLE">'
QUEUE '<P><FONT FACE="Arial">'||WORD(trueline,x)||'</FONT></TD>'
END
QUEUE '</TR>'
RETURN
html_header:
QUEUE '<HTML>'
QUEUE '<HEAD>'
QUEUE '<TITLE>Sample Table</TITLE>'
QUEUE '</HEAD>'
QUEUE '<BODY LINK="#0000ff" VLINK="#800080">'
QUEUE '<FONT COLOR="#008000"><H1 ALIGN="CENTER">',
||'Results of' string 'Command</H1>'
QUEUE '<TABLE BORDER CELLSPACING=1>'
ipaddress=''
RETURN
    
--------------------------------------------------------------------------------

The Initialization Parameter Area



/* REXX */
/* Trace ?r */
/*********************************************************************/
/* DISPLAY SYSTEM INFORMATION ON TERMINAL                            */
/*********************************************************************/
Numeric digits 10
Call RDATE TODAY                             /* call RDATE subroutine*/
DAY      = Word(RESULT,3)                    /* weekday from RDATE   */
DATE     = Substr(RESULT,1,10)               /* date as MM/DD/YYYY   */
JUL      = Substr(RESULT,7,8)                /* date as YYYY.DDD     */
/*                                                                   */
CVT      = C2d(Storage(10,4))                /* point to CVT         */
/*                                                                   */
JESCT    = C2d(Storage(D2x(CVT + 296),4))    /* point to JESCT       */
/*                                                                   */
STORSIZE = C2d(Storage(D2x(CVT + 856),4))    /* point to storage size*/
STORSIZE = STORSIZE/1024                     /* convert to Megabytes */
/*                                                                   */
RCE      = C2d(Storage(D2x(CVT + 1168),4))   /* point to RCE         */
ESTOR    = C2d(Storage(D2x(RCE + 160),4))    /* point to ESTOR frames*/
ESTOR    = ESTOR*4/1024                      /* convert to Megabytes */
/*                                                                   */
CVTGDA   = C2d(Storage(D2x(CVT + 560),4))    /* point to GDA         */
GDAPVTSZ = C2d(Storage(D2x(CVTGDA + 164),4)) /* point to MAX PVT<16M */
GDAPVTSZ = GDAPVTSZ/1024                     /* convert to Kbytes    */
GDAEPVTS = C2d(Storage(D2x(CVTGDA + 172),4)) /* point to MAX PVT>16M */
GDAEPVTS = GDAEPVTS/1024/1024                /* convert to Mbytes    */
GDACSASZ = C2d(Storage(D2x(CVTGDA + 112),4)) /* point to CSA<16M     */
GDACSASZ = GDACSASZ/1024                     /* convert to Kbytes    */
GDAECSAS = C2d(Storage(D2x(CVTGDA + 128),4)) /* point to CSA>16M     */
GDAECSAS = GDAECSAS/1024                     /* convert to Kbytes    */
GDASQASZ = C2d(Storage(D2x(CVTGDA + 148),4)) /* point to SQA<16M     */
GDASQASZ = GDASQASZ/1024                     /* convert to Kbytes    */
GDAESQAS = C2d(Storage(D2x(CVTGDA + 156),4)) /* point to SQA>16M     */
GDAESQAS = GDAESQAS/1024                     /* convert to Kbytes    */
GDAVRSZ  = C2d(Storage(D2x(CVTGDA + 196),4)) /* point to V=R global  */
GDAVRSZ  = GDAVRSZ/1024                      /* convert to Kbytes    */
GDAVREGS = C2d(Storage(D2x(CVTGDA + 200),4)) /* point to V=R default */
GDAVREGS = GDAVREGS/1024                     /* convert to Kbytes    */
/*                                                                   */
CVTEXT2  = C2d(Storage(D2x(CVT + 328),4))    /* point to CVTEXT2     */
CVTATCVT = C2d(Storage(D2x(CVTEXT2 + 65),3)) /* point to VTAM AVT    */
ISTATCVT = C2d(Storage(D2x(CVTATCVT + 0),4)) /* point to VTAM CVT    */
ATCVTLVL = Storage(D2x(ISTATCVT + 0),8)      /* VTAM Rel Lvl VOVRP   */
VTAMVER  = Substr(ATCVTLVL,3,1)              /* VTAM Version   V     */
VTAMREL  = Substr(ATCVTLVL,4,1)              /* VTAM Release    R    */
VTAMMOD  = Substr(ATCVTLVL,5,1)              /* VTAM Mod Lvl     P   */
If VTAMMOD = ' ' then VTAMLEV = 'V'|| VTAMVER || 'R' || VTAMREL
   else VTAMLEV = 'V' || VTAMVER || 'R' || VTAMREL || 'M' || VTAMMOD
/*                                                                   */
AMCBS    = C2d(Storage(D2x(CVT + 256),4))    /* point to AMCBS       */
ACB      = C2d(Storage(D2x(AMCBS + 8),4))    /* point to ACB         */
CAXWA    = C2d(Storage(D2x(ACB + 64),4))     /* point to CAXWA       */
MCATDSN  = Storage(D2x(CAXWA + 52),44)       /* master catalog dsn   */
MCATDSN  = Strip(MCATDSN,T)                  /* remove trailing blnks*/
MCATUCB  = C2d(Storage(D2x(CAXWA + 28),4))   /* point to mcat UCB    */
MCATVOL  = Storage(D2x(MCATUCB + 28),6)      /* master catalog VOLSER*/
/*                                                                   */
SMCA     = Storage(D2x(CVT + 196),4)         /* point to SMCA        */
SMCA     = Bitand(SMCA,'7FFFFFFF'x)          /* zero high order bit  */
SMCA     = C2d(SMCA)                         /* convert to decimal   */
/*                                                                   */
/*********************************************************************/
/*  The IPL date is stored in packed decimal format - so to make     */
/*  the date printable, it needs to be converted back to hex and     */
/*  the packed sign needs to be removed.                             */
/*********************************************************************/
IPLTIME  = C2d(Storage(D2x(SMCA + 336),4))   /* IPL Time - binary    */
IPLDATE  = C2d(Storage(D2x(SMCA + 340),4))   /* IPL Date - 0CYYDDDF  */
If IPLDATE  >= 16777231 then do              /*          is C = 1 ?  */
  IPLDATE  = D2x(IPLDATE)                    /* convert back to hex  */
  IPLDATE  = Substr(IPLDATE,2,5)             /* keep YYDDD           */
  IPLDATE  = '20'IPLDATE                     /* use 21st century date*/
End
Else do
  IPLDATE  = D2x(IPLDATE)                    /* convert back to hex  */
  IPLDATE  = Left(IPLDATE,5)                 /* keep YYDDD           */
  IPLDATE  = '19'IPLDATE                     /* use 20th century date*/
End
IPLYYYY  = Substr(IPLDATE,1,4)               /* YYYY portion of date */
IPLDDD   = Substr(IPLDATE,5,3)               /* DDD  portion of date */
Call RDATE IPLYYYY IPLDDD                    /* call RDATE subroutine*/
IPLDAY   = Word(RESULT,3)                    /* weekday from RDATE   */
IPLDATE  = Substr(RESULT,1,10)               /* date as MM/DD/YYYY   */
IPLJUL   = Substr(RESULT,7,8)                /* date as YYYY.DDD     */
IPLTIME  = IPLTIME / 100                     /* remove hundreths     */
HH       = IPLTIME % 3600                    /* IPL hour             */
MM       = (IPLTIME - (3600 * HH)) % 60      /* IPL minute           */
SS       = (IPLTIME - (3600 * HH)  - (60 * MM)) % 1  /* IPL seconds  */
HH       = Right(HH,2,'0')                   /* ensure 2 digit HH    */
MM       = Right(MM,2,'0')                   /* ensure 2 digit MM    */
SS       = Right(SS,2,'0')                   /* ensure 2 digit SS    */
IPLTIME  = HH':'MM':'SS                      /* time in HH:MM format */
/*                                                                   */
ASMVT    = C2d(Storage(D2x(CVT + 704),4))    /* point to ASMVT       */
CLPABYTE = Storage(D2x(ASMVT + 1),1)         /* point to CLPA byte   */
CHKCLPA  = Bitand(CLPABYTE,'8'x)             /* check for B'1000'    */
CHKCLPA  = C2d(CHKCLPA)                      /* convert to decimal   */
If CHKCLPA < 8 then IPLCLPA = '(with CLPA)'  /* bit off - CLPA       */
  Else IPLCLPA = '(without CLPA)'            /* bit on  - no CLPA    */
/*                                                                   */
SMFNAME  = Storage(D2x(SMCA + 16),4)         /* point to SMF name    */
/*                                                                   */
PRODNAME = Storage(D2x(CVT - 40),7)          /* point to mvs version */
FMIDNUM  = Storage(D2x(CVT - 32),7)          /* point to fmid        */
/*                                                                   */
GRSNAME  = Storage(D2x(CVT + 340),8)         /* point to system name */
GRSNAME  = Strip(GRSNAME,T)                  /* del trailing blanks  */
/*                                                                   */
RESUCB   = C2d(Storage(D2x(JESCT + 4),4))    /* point to SYSRES UCB  */
JESNAME  = Storage(D2x(JESCT + 28),4)        /* point to JESNAME     */
IPLVOL   = Storage(D2x(RESUCB + 28),6)       /* point to IPL volume  */
If Substr(PRODNAME,3,1) < 5 then ,
  IPLADDR  = Storage(D2x(RESUCB + 13),3)     /* point to IPL address */
Else do
  CVTSYSAD = C2d(Storage(D2x(CVT + 48),4))   /* point to UCB address */
  IPLADDR  = Storage(D2x(CVTSYSAD + 4),2)    /* point to IPL UCB     */
  IPLADDR  = C2x(IPLADDR)                    /* convert to EBCDIC    */
End
/*********************************************************************/
/*  The CPU model is stored in packed decimal format with no sign,   */
/*  so to make the model printable, it needs to be converted back    */
/*  to hex.                                                          */
/*********************************************************************/
MODEL    = C2d(Storage(D2x(CVT - 6),2))      /* point to cpu model   */
MODEL    = D2x(MODEL)                        /* convert back to hex  */
/*                                                                   */
CSD      = C2d(Storage(D2x(CVT + 660),4))    /* point to CSD         */
NUMCPU   = C2d(Storage(D2x(CSD + 10),2))     /* point to # of CPUS   */
/*                                                                   */
/*********************************************************************/
/*   Write  information to terminal.                                 */
/*********************************************************************/
Queue '********************************************************' || ,
      '***********************'
Queue '************************  SYSTEM INFORMATION  **********' || ,
      '***********************'
Queue '********************************************************' || ,
      '***********************'
Queue ' '
Queue 'Today is 'DAY DATE '('JUL').'
Queue 'The last IPL was 'IPLDAY IPLDATE '('IPLJUL')' ,
     'at 'IPLTIME IPLCLPA'.'
Queue 'The system IPL address was 'IPLADDR' ('IPLVOL').'
If Substr(PRODNAME,3,1) > 3 then do
  ECVT     = C2d(Storage(D2x(CVT + 140),4))  /* point to CVTECVT     */
  PLEXNM   = Storage(D2x(ECVT+8),8)          /* point to SYSPLEX name*/
  IPLPARM  = Storage(D2x(ECVT+160),8)        /* point to LOAD PARM   */
  IPLPARM  = Strip(IPLPARM,T)                /* del trailing blanks  */
  SEPPARM  = Substr(IPLPARM,1,4) Substr(IPLPARM,5,2),
             Substr(IPLPARM,7,1) Substr(IPLPARM,8,1)
  Queue 'The IPL LOAD PARM used was 'IPLPARM' ('SEPPARM').'
  Queue 'The SYSPLEX name is' PLEXNM
End
If Substr(PRODNAME,3,1) < 5 then do
  IOCON    = Storage(D2x(CVTEXT2 + 6),2)       /* HCD IODFxx or MVSCP*/
                                               /* IOCONFIG ID=xx     */
  Queue 'The currently active IOCONFIG or HCD IODF is 'IOCON'.'
End
Else do
  If Substr(FMIDNUM,4,4) >= 6602 then VOFF = 0
     else VOFF = 32
  CVTIXAVL = C2d(Storage(D2x(CVT+124),4))       /* point to IOCM     */
  IOCIOVTP = C2d(Storage(D2x(CVTIXAVL+208),4))  /* pt to IOS Vect Tbl*/
  IODF     = Storage(D2X(IOCIOVTP+288-VOFF),11) /* point to IODF name*/
  CONFIGID = Storage(D2X(IOCIOVTP+348-VOFF),8)  /* point to CONFIG   */
  EDT      = Storage(D2X(IOCIOVTP+360-VOFF),2)  /* point to EDT      */
  IOPROC   = Storage(D2X(IOCIOVTP+380-VOFF),8)  /* point to IODF Proc*/
  IODATE   = Storage(D2X(IOCIOVTP+412-VOFF),8)  /* point to IODF date*/
  IOTIME   = Storage(D2X(IOCIOVTP+420-VOFF),8)  /* point to IODF time*/
  IODESC   = Storage(D2X(IOCIOVTP+428-VOFF),16) /* point to IODF desc*/
  Queue 'The currently active IODF data set is 'IODF'.'
  Queue '  Configuration ID =' CONFIGID ' EDT ID =' EDT
  Queue '  TOKEN: Processor  Date      Time      Description'
  Queue '         'IOPROC'   'IODATE'  'IOTIME'  'IODESC
End
Queue 'The Master Catalog is 'MCATDSN' on 'MCATVOL'.'
Queue ' '
If Substr(PRODNAME,3,1) < 6 then
  Queue 'The MVS version is 'PRODNAME' - FMID 'FMIDNUM'.'
Else do
  PRODNAME = Storage(D2x(ECVT+496),16)       /* point to product name*/
  PRODNAME = Strip(PRODNAME,T)               /* del trailing blanks  */
  VER      = Storage(D2x(ECVT+512),2)        /* point to version     */
  REL      = Storage(D2x(ECVT+514),2)        /* point to release     */
  MOD      = Storage(D2x(ECVT+516),2)        /* point to mod level   */
  VRM      = VER'.'REL'.'MOD
  Queue 'The OS version is 'PRODNAME VRM' - FMID 'FMIDNUM'.'
End
Queue 'The VTAM Level is 'VTAMLEV'.'
Queue 'The primary job entry subsystem is 'JESNAME'.'
Queue 'The GRS system id is 'GRSNAME'. The SMF system id is 'SMFNAME'.'
Queue ' '
Queue 'The real storage size is 'Format(STORSIZE,,0)'M.'
If ESTOR > 0 then
  Queue 'The expanded storage size is 'ESTOR'M.'
Else
  Queue 'The system has no expanded storage.'
Queue 'The private area size <16M is 'GDAPVTSZ'K.'
Queue 'The private area size >16M is 'GDAEPVTS'M.'
Queue 'The CSA size <16M is 'GDACSASZ'K.'
Queue 'The CSA size >16M is 'GDAECSAS'K.'
Queue 'The SQA size <16M is 'GDASQASZ'K.'
Queue 'The SQA size >16M is 'GDAESQAS'K.'
Queue 'The maximum V=R region size is 'GDAVRSZ'K.'
Queue 'The default V=R region size is 'GDAVREGS'K.'
Queue 'The maximum V=V region size is 'GDAPVTSZ-20'K.'
Queue ' '
Queue 'The CPU model number is 'MODEL'.'
Queue 'The number of online CPUs is 'NUMCPU'.'
/*                                                                   */
PCCAVT    = C2d(Storage(D2x(CVT + 764),4))   /* point to PCCA vect tb*/
/*                                                                   */
CPNUM     = 0
FOUNDCPUS = 0
Do until FOUNDCPUS = NUMCPU
PCCA = C2d(Storage(D2x(PCCAVT + CPNUM*4),4)) /* point to PCCA        */
  If PCCA <> 0 then do
    CPUID   = Storage(D2x(PCCA + 6),10)      /* point to CPUID       */
    IDSHORT = Substr(CPUID,2,5)
    Queue 'The CPU serial number for CPU 'CPNUM' is ' || ,
     CPUID' ('IDSHORT').'
    FOUNDCPUS = FOUNDCPUS + 1
  End
CPNUM = CPNUM + 1
End  /* do until  */
/**************************************************/
/* Central Processing Complex Node Descriptor     */
/**************************************************/
CVTHID   = C2d(Storage(D2x(CVT + 1068),4))   /* point to SHID        */
CPCND_FLAGS = Storage(D2x(CVTHID+22),1)      /* point to CPCND FLAGS */
If CPCND_FLAGS <> 0 then do                  /* Is there a CPC?      */
  CPCND_VALID = Bitand(CPCND_FLAGS,'E0'x)    /* Valid flags          */
  CPCND_INVALID = Bitand('40'x)              /* Invalid flag         */
  If CPCND_VALID <> CPCND_INVALID then do    /* Is it valid?         */
    CPCND_TYPE  = Storage(D2x(CVTHID+26),6)  /* Type                 */
    CPCND_MODEL = Storage(D2x(CVTHID+32),3)  /* Model                */
    CPCND_MAN   = Storage(D2x(CVTHID+35),3)  /* Manufacturer         */
    CPCND_PLANT = Storage(D2x(CVTHID+38),2)  /* Plant of manufact.   */
    CPCND_SEQNO = Storage(D2x(CVTHID+40),12) /* Sequence number      */
    CPC_ID      = C2x(Storage(D2x(CVTHID+55),1))  /* CPC ID          */
  End /* if CPCND_VALID <> CPCND_INVALID */
End  /* if CPCND_FLAGS <>0  */
Queue ' '
Queue 'Central Processing Complex (CPC) Node Descriptor:'
Queue '  CPC ND =',
  CPCND_TYPE'.'CPCND_MODEL'.'CPCND_MAN'.'CPCND_PLANT'.'CPCND_SEQNO
Queue '  CPC ID =' CPC_ID
Queue '  Type('CPCND_TYPE') Model('CPCND_MODEL')',
      'Manufacturer('CPCND_MAN') Plant('CPCND_PLANT')',
      'Seq Num('CPCND_SEQNO')'
Queue ' '
If Substr(FMIDNUM,4,4) >= 6602 then do
  /**************************/
  /* IPL parms from the IPA */
  /**************************/
  ECVTIPA  = C2d(Storage(D2x(ECVT + 392),4)) /* point to IPA         */
  IPALPARM = Storage(D2x(ECVTIPA + 16),8)    /* point to LOAD PARM   */
  IPALPDSN = Storage(D2x(ECVTIPA + 48),44)   /* load parm dsn name   */
  IPAHWNAM = Storage(D2x(ECVTIPA + 24),8)    /* point to HWNAME      */
  IPAHWNAM = Strip(IPAHWNAM,T)               /* del trailing blanks  */
  IPALPNAM = Storage(D2x(ECVTIPA + 32),8)    /* point to LPARNAME    */
  IPALPNAM = Strip(IPALPNAM,T)               /* del trailing blanks  */
  IPAVMNAM = Storage(D2x(ECVTIPA + 40),8)    /* point to VMUSERID    */
  /**************************/
  /* PARMS in LOADxx        */
  /**************************/
  IPANUCID = Storage(D2x(ECVTIPA + 23),1)    /* NUCLEUS ID           */
  IPAIODF  = Storage(D2x(ECVTIPA + 96),63)   /* IODF    card image   */
  IPASPARM = Storage(D2x(ECVTIPA + 160),63)  /* SYSPARM card image   */
  IPASCAT  = Storage(D2x(ECVTIPA + 224),63)  /* SYSCAT  card image   */
  IPASYM   = Storage(D2x(ECVTIPA + 288),63)  /* IEASYM  card image   */
  IPAPLEX  = Storage(D2x(ECVTIPA + 352),63)  /* SYSPLEX card image   */
  IPAPLNUM = Storage(D2x(ECVTIPA + 2148),2)  /* number of parmlibs   */
  IPAPLNUM = C2x(IPAPLNUM)                   /* convert to EBCDIC    */
  POFF = 0
  Do P = 1 to IPAPLNUM
    IPAPLIB.P = Storage(D2x(ECVTIPA+416+POFF),63) /* PARMLIB cards   */
    POFF = POFF + 64
  End
  IPANLID  = Storage(D2x(ECVTIPA + 2144),2)  /* NUCLSTxx member used */
  IPANUCW  = Storage(D2x(ECVTIPA + 2146),1)  /* load wait state char */
  Queue 'Initialization information from the IPA:'
  Queue '  IPLPARM =' IPALPARM
  Queue '  IPL load parameter data set name: 'IPALPDSN
  Queue '  HWNAME='IPAHWNAM '  LPARNAME='IPALPNAM ,
        '  VMUSERID='IPAVMNAM
  Queue '  LOADxx parameters (LOAD' || Substr(IPALPARM,5,2) || '):'
  If IPASYM   <> '' then queue '    IEASYM   'IPASYM
  If IPAIODF  <> '' then queue '    IODF     'IPAIODF
  If IPANUCID <> '' then queue '    NUCLEUS  'IPANUCID
  If IPANLID  <> '' then queue '    NUCLST   'IPANLID' 'IPANUCW
  Do P = 1 to IPAPLNUM
    Queue '    PARMLIB  'IPAPLIB.P
  End
  If IPASCAT  <> '' then queue '    SYSCAT   'IPASCAT
  If IPASPARM <> '' then queue '    SYSPARM  'IPASPARM
  If IPAPLEX  <> '' then queue '    SYSPLEX  'IPAPLEX
  /**************************/
  /* PARMS in IEASYSxx      */
  /**************************/
  Queue '  IEASYSxx parameters:'
  Call BUILD_IPAPDETB       /* Build table for init parms       */
  Do I = 1 to IPAPDETB.0
    Call EXTRACT_SYSPARMS IPAPDETB.I
  End
End
  /**************************/
  /* Virtual Storage Map    */
  /**************************/
If GDAVRSZ = 0 then do                       /* no v=r               */
  VRSTRT = 'N/A     '
  VREND  = 'N/A     '
  VVSTRT = '00005000'                        /* start of v=v         */
  VVEND  =  20480 + ((GDAPVTSZ-20)*1024) - 1 /* end of v=v           */
  VVEND  =  D2x(VVEND)                       /* display in hex       */
End
Else do
  VRSTRT = '00005000'                        /* start of v=r         */
  VREND  =  20480 + (GDAVRSZ*1024) - 1       /* end of v=r           */
  VREND  =  D2X(VREND)  /* display in hex       */
  VVSTRT = '00005000'                        /* start of v=v         */
  VVEND  =  20480 + ((GDAPVTSZ-20)*1024) - 1 /* end of v=v           */
  VVEND  =  D2x(VVEND)                       /* display in hex       */
End
GDACSA   = C2d(Storage(D2x(CVTGDA + 108),4)) /* start of CSA addr    */
GDACSAH  = D2x(GDACSA)                       /* display in hex       */
CSAEND   = (GDACSASZ*1024) + GDACSA - 1      /* end of CSA           */
CSAEND   = D2x(CSAEND)                       /* display in hex       */
CVTSMEXT = C2d(Storage(D2x(CVT +1196),4))    /* point to stg map ext.*/
CVTMLPAS = C2d(Storage(D2x(CVTSMEXT+ 8),4))  /* start of MLPA addr   */
CVTMLPAS = D2x(CVTMLPAS)                     /* display in hex       */
If CVTMLPAS <> 0 then do
  CVTMLPAE = C2d(Storage(D2x(CVTSMEXT+12),4))  /* end of MLPA addr   */
  CVTMLPAE = D2x(CVTMLPAE)                     /* display in hex     */
  MLPASZ   = X2d(CVTMLPAE) - X2d(CVTMLPAS) + 1 /* size of MLPA       */
  MLPASZ   = MLPASZ/1024                       /* convert to Kbytes  */
End
Else do /* no MLPA */
  CVTMLPAS = 'N/A     '
  CVTMLPAE = 'N/A     '
  MLPASZ   = 0
End
CVTFLPAS = C2d(Storage(D2x(CVTSMEXT+16),4))  /* start of FLPA addr   */
CVTFLPAS = D2x(CVTFLPAS)                     /* display in hex       */
If CVTFLPAS <> 0 then do
  CVTFLPAE = C2d(Storage(D2x(CVTSMEXT+20),4))  /* end of FLPA addr   */
  CVTFLPAE = D2x(CVTFLPAE)                     /* display in hex     */
  FLPASZ   = X2d(CVTFLPAE) - X2d(CVTFLPAS) + 1 /* size of FLPA       */
  FLPASZ   = FLPASZ/1024                       /* convert to Kbytes  */
End
Else do /* no FLPA */
  CVTFLPAS = 'N/A     '
  CVTFLPAE = 'N/A     '
  FLPASZ   = 0
End
CVTPLPAS = C2d(Storage(D2x(CVTSMEXT+24),4))  /* start of PLPA addr   */
CVTPLPAS = D2x(CVTPLPAS)                     /* display in hex       */
CVTPLPAE = C2d(Storage(D2x(CVTSMEXT+28),4))  /* end of PLPA addr     */
CVTPLPAE = D2x(CVTPLPAE)                     /* display in hex       */
PLPASZ   = X2d(CVTPLPAE) - X2d(CVTPLPAS) + 1 /* size of PLPA         */
PLPASZ   = PLPASZ/1024                       /* convert to Kbytes    */
GDASQA   = C2d(Storage(D2x(CVTGDA + 144),4)) /* start of SQA addr    */
GDASQAH  = D2x(GDASQA)                       /* display in hex       */
SQAEND   = (GDASQASZ*1024) + GDASQA - 1      /* end of SQA           */
SQAEND   = D2x(SQAEND)                       /* display in hex       */
CVTRWNS  = C2d(Storage(D2x(CVTSMEXT+32),4))  /* start of R/W nucleus */
CVTRWNS  = D2x(CVTRWNS)                      /* display in hex       */
CVTRWNE  = C2d(Storage(D2x(CVTSMEXT+36),4))  /* end of R/W nucleus   */
CVTRWNE  = D2x(CVTRWNE)                      /* display in hex       */
RWNUCSZ  = X2d(CVTRWNE)  - X2d(CVTRWNS)  + 1 /* size of R/W nucleus  */
RWNUCSZ  = Format(RWNUCSZ/1024,,0)           /* convert to Kbytes    */
CVTRONS  = C2d(Storage(D2x(CVTSMEXT+40),4))  /* start of R/O nucleus */
CVTRONS  = D2x(CVTRONS)                      /* display in hex       */
CVTRONE  = C2d(Storage(D2x(CVTSMEXT+44),4))  /* end of R/O nucleus   */
CVTRONE  = D2x(CVTRONE)                      /* display in hex       */
RONUCSZ  = X2d(CVTRONE)  - X2d(CVTRONS)  + 1 /* size of R/O nucleus  */
RONUCSZ  = Format(RONUCSZ/1024,,0)           /* convert to Kbytes    */
RONUCSZB = X2d('FFFFFF') - X2d(CVTRONS) + 1  /* size of R/O nuc <16M */
RONUCSZB = Format(RONUCSZB/1024,,0)          /* convert to Kbytes    */
RONUCSZA = X2d(CVTRONE) - X2d('1000000') + 1 /* size of R/O nuc >16M */
RONUCSZA = Format(RONUCSZA/1024,,0)          /* convert to Kbytes    */
CVTERWNS = C2d(Storage(D2x(CVTSMEXT+48),4))  /* start of E-R/W nuc   */
CVTERWNS = D2x(CVTERWNS)                     /* display in hex       */
CVTERWNE = C2d(Storage(D2x(CVTSMEXT+52),4))  /* end of E-R/W nuc     */
CVTERWNE = D2x(CVTERWNE)                     /* display in hex       */
ERWNUCSZ = X2d(CVTERWNE) - X2d(CVTERWNS) + 1 /* size of E-R/W nuc    */
ERWNUCSZ = ERWNUCSZ/1024                     /* convert to Kbytes    */
GDAESQA  = C2d(Storage(D2x(CVTGDA + 152),4)) /* start of ESQA addr   */
GDAESQAH = D2x(GDAESQA)                      /* display in hex       */
ESQAEND  = (GDAESQAS*1024) + GDAESQA - 1     /* end of ESQA          */
ESQAEND  = D2x(ESQAEND)                      /* display in hex       */
CVTEPLPS = C2d(Storage(D2x(CVTSMEXT+56),4))  /* start of EPLPA addr  */
CVTEPLPS = D2x(CVTEPLPS)                     /* display in hex       */
CVTEPLPE = C2d(Storage(D2x(CVTSMEXT+60),4))  /* end of EPLPA addr    */
CVTEPLPE = D2x(CVTEPLPE)                     /* display in hex       */
EPLPASZ  = X2d(CVTEPLPE) - X2d(CVTEPLPS) + 1 /* size of EPLPA        */
EPLPASZ  = EPLPASZ/1024                      /* convert to Kbytes    */
CVTEFLPS = C2d(Storage(D2x(CVTSMEXT+64),4))  /* start of EFLPA addr  */
CVTEFLPS = D2x(CVTEFLPS)                     /* display in hex       */
If CVTEFLPS <> 0 then do
  CVTEFLPE = C2d(Storage(D2x(CVTSMEXT+68),4))  /* end of EFLPA addr  */
  CVTEFLPE = D2x(CVTEFLPE)                     /* display in hex     */
  EFLPASZ  = X2d(CVTEFLPE) - X2d(CVTEFLPS) + 1 /* size of EFLPA      */
  EFLPASZ  = EFLPASZ/1024                      /* convert to Kbytes  */
End
Else do /* no EFLPA */
  CVTEFLPS = 'N/A     '
  CVTEFLPE = 'N/A     '
  EFLPASZ  = 0
End
CVTEMLPS = C2d(Storage(D2x(CVTSMEXT+72),4))  /* start of EMLPA addr  */
CVTEMLPS = D2x(CVTEMLPS)                     /* display in hex       */
If CVTEMLPS <> 0 then do
  CVTEMLPE = C2d(Storage(D2x(CVTSMEXT+76),4))  /* end of EMLPA addr  */
  CVTEMLPE = D2x(CVTEMLPE)                     /* display in hex     */
  EMLPASZ  = X2d(CVTEMLPE) - X2d(CVTEMLPS) + 1 /* size of EMLPA      */
  EMLPASZ  = EMLPASZ/1024                      /* convert to Kbytes  */
End
Else do /* no EMLPA */
  CVTEMLPS = 'N/A     '
  CVTEMLPE = 'N/A     '
  EMLPASZ  = 0
End
GDAECSA  = C2d(Storage(D2x(CVTGDA + 124),4)) /* start of ECSA addr   */
GDAECSAH = D2x(GDAECSA)                      /* display in hex       */
ECSAEND  = (GDAECSAS*1024) + GDAECSA - 1     /* end of ECSA          */
ECSAEND  = D2x(ECSAEND)                      /* display in hex       */
GDAEPVT  = C2d(Storage(D2x(CVTGDA + 168),4)) /* start of EPVT addr   */
GDAEPVTH = D2x(GDAEPVT)                      /* display in hex       */
EPVTEND  = (GDAEPVTS*1024*1024) + GDAEPVT - 1 /* end of EPVT         */
EPVTEND  = D2x(EPVTEND)                      /* display in hex       */
Queue '          '
Queue 'Virtual Storage Map:'
Queue '          '
Queue '     Storage Area     Start      End           Size'
Queue '          '
Queue '              PSA     00000000   00000FFF        4K'
Queue '           System     00001000   00004FFF       16K'
Queue '      Private V=R    '     Right(VRSTRT,8,'0') ' ' ,
   Right(VREND,8,'0')             Right(GDAVRSZ,8,' ')'K'
Queue '      Private V=V    '     Right(VVSTRT,8,'0') ' ' ,
   Right(VVEND,8,'0')             Right(GDAPVTSZ-20,8,' ')'K'
Queue '              CSA    '     Right(GDACSAH,8,'0') ' ' ,
   Right(CSAEND,8,'0')            Right(GDACSASZ,8,' ')'K'
Queue '             MLPA    '     Right(CVTMLPAS,8,'0') ' ' ,
   Right(CVTMLPAE,8,'0')          Right(MLPASZ,8,' ')'K'
Queue '             FLPA    '     Right(CVTFLPAS,8,'0') ' ' ,
   Right(CVTFLPAE,8,'0')          Right(FLPASZ,8,' ')'K'
Queue '             PLPA    '     Right(CVTPLPAS,8,'0') ' ' ,
   Right(CVTPLPAE,8,'0')          Right(PLPASZ,8,' ')'K'
Queue '              SQA    '     Right(GDASQAH,8,'0') ' ' ,
   Right(SQAEND,8,'0')            Right(GDASQASZ,8,' ')'K'
Queue '      R/W Nucleus    '     Right(CVTRWNS,8,'0') ' ' ,
   Right(CVTRWNE,8,'0')           Right(RWNUCSZ,8,' ')'K'
Queue '      R/O Nucleus    '     Right(CVTRONS,8,'0') ' ' ,
   Right('FFFFFF',8,'0')          Right(RONUCSZB,8,' ')'K',
   '(Spans 16M line)'
Queue '             16M line ÑÑÑÑÑÑÑÑÑÑÑÑÑÑ'
Queue ' Ext. R/O Nucleus    '     Right('1000000',8,'0') ' ' ,
   Right(CVTRONE,8,'0')           Right(RONUCSZA,8,' ')'K' ,
   '(Total' RONUCSZ'K)'
Queue ' Ext. R/W Nucleus    '     Right(CVTERWNS,8,'0') ' ' ,
   Right(CVTERWNE,8,'0')          Right(ERWNUCSZ,8,' ')'K'
Queue '         Ext. SQA    '     Right(GDAESQAH,8,'0') ' ' ,
   Right(ESQAEND,8,'0')           Right(GDAESQAS,8,' ')'K'
Queue '        Ext. PLPA    '     Right(CVTEPLPS,8,'0') ' ' ,
   Right(CVTEPLPE,8,'0')          Right(EPLPASZ,8,' ')'K'
Queue '        Ext. FLPA    '     Right(CVTEFLPS,8,'0') ' ' ,
   Right(CVTEFLPE,8,'0')          Right(EFLPASZ,8,' ')'K'
Queue '        Ext. MLPA    '     Right(CVTEMLPS,8,'0') ' ' ,
   Right(CVTEMLPE,8,'0')          Right(EMLPASZ,8,' ')'K'
Queue '         Ext. CSA    '     Right(GDAECSAH,8,'0') ' ' ,
   Right(ECSAEND,8,'0')           Right(GDAECSAS,8,' ')'K'
Queue '     Ext. Private    '     Right(GDAEPVTH,8,'0') ' ' ,
   Right(EPVTEND,8,'0')           Right(GDAEPVTS,8,' ')'M'
/*********************************************************************/
/* Done looking at all control blocks                                */
/*********************************************************************/
Queue ''  /* null queue to end stack   */
/*********************************************************************/
/* If ISPF is active, browse output - otherwise write to the terminal*/
/*********************************************************************/
If Sysvar(SYSISPF)='ACTIVE' then do
  address ISPEXEC "CONTROL ERRORS RETURN"
  address TSO
  ddnm = 'DD'||random(1,99999)    /* choose random DDname  */
  junk = msg(off)
  "ALLOC FILE("||ddnm||") UNIT(SYSALLDA) NEW TRACKS SPACE(5,5) DELETE",
  " REUSE LRECL(80) RECFM(F B) BLKSIZE(3120)"
  junk = msg(on)
  /*                                    */
  "EXECIO * DISKW" ddnm "(FINIS"
  address ISPEXEC "LMINIT DATAID(TEMP) DDNAME("||ddnm||")"
  address ISPEXEC "BROWSE DATAID("||temp")"
  address ISPEXEC "LMFREE DATAID("||temp")"
  junk = msg(off)
  "FREE FI("||ddnm||")"
End
Else do queued()
 Parse pull line
 Say line
End
Exit
/*********************************************************************/
/*  End of main IPLINFO code                                         */
/*********************************************************************/
/*  Start of sub-routines                                            */
/*********************************************************************/
EXTRACT_SYSPARMS:    /* Extract IEASYSxx values from the IPA         */
Arg IEASPARM
IEASPARM = Strip(IEASPARM,T)                 /* remove trailing blnks*/
IPAOFF = ((I-1) * 8)                         /* offset to next entry */
IPASTOR = D2x(ECVTIPA + 2152 + IPAOFF)       /* point to PDE addr    */
IPAPDE  = C2x(Storage((IPASTOR),8))          /* point to PDE         */
If IPAPDE = 0 then return   /* parm not specified and has no default */
IPAADDR = Substr(IPAPDE,1,8)                 /* PARM address         */
IPALEN  = X2d(Substr(IPAPDE,9,4))            /* PARM length          */
IPAPRM  = Storage((IPAADDR),IPALEN)          /* PARM                 */
/*********************************************************************/
/* CODE to split up page dataset parms  to multiple lines           */
/*********************************************************************/
If IEASPARM = 'NONVIO'   | IEASPARM = 'PAGE' | ,
   IEASPARM = 'PAGE-OPR' | IEASPARM = 'SWAP' then do
  MORE  = 'YES'
  FIRST = 'YES'
  SPLITPOS = 1
  Do until MORE = 'NO'
    SPLITPOS = Pos(',',IPAPRM)
    If SPLITPOS = 0 then do
      If FIRST = 'YES' then  queue '    'IEASPARM'='IPAPRM
        Else queue '          'IPAPRM
      MORE = 'NO'
    End
    Else do
      IPAPRM_SPLIT = Substr(IPAPRM,1,SPLITPOS)
      If FIRST = 'YES' then queue '    'IEASPARM'='IPAPRM_SPLIT
        Else queue '          'IPAPRM_SPLIT
      IPAPRM  = Substr(IPAPRM,SPLITPOS+1,IPALEN-SPLITPOS)
      FIRST = 'NO'
    End
  End  /* do until */
End
Else  Queue '    'IEASPARM'='IPAPRM  /* not a page ds */
Return

BUILD_IPAPDETB:      /* Build table for look-up for IPA values        */
NUM=1
IPAPDETB.NUM = 'ALLOC   ' ; NUM = NUM + 1
IPAPDETB.NUM = 'APF     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'APG     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'BLDL    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'BLDLF   ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CLOCK   ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CLPA    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CMB     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CMD     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CON     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CONT    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'COUPLE  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CPQE    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CSA     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CSCBLOC ' ; NUM = NUM + 1
IPAPDETB.NUM = 'CVIO    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'DEVSUP  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'DIAG    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'DUMP    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'DUPLEX  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'EXIT    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'FIX     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'GRS     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'GRSCNF  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'GRSRNL  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'ICS     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'IOS     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'IPS     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'LNK     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'LNKAUTH ' ; NUM = NUM + 1
IPAPDETB.NUM = 'LOGCLS  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'LOGLMT  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'LOGREC  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'LPA     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'MAXCAD  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'MAXUSER ' ; NUM = NUM + 1
IPAPDETB.NUM = 'MLPA    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'MSTRJCL ' ; NUM = NUM + 1
IPAPDETB.NUM = 'NONVIO  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'NSYSLX  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'NUCMAP  ' ; NUM = NUM + 1
If Substr(FMIDNUM,4,4) >= 6603 then do
   IPAPDETB.NUM = 'OMVS    ' ; NUM = NUM + 1
End
Else do
   IPAPDETB.NUM = 'RESERVED' ; NUM = NUM + 1
End

IPAPDETB.NUM = 'OPI     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'OPT     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PAGE-OPR' ; NUM = NUM + 1
IPAPDETB.NUM = 'PAGE    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PAGNUM  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PAGTOTL ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PAK     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PLEXCFG ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PROD    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PROG    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'PURGE   ' ; NUM = NUM + 1
IPAPDETB.NUM = 'RDE     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'REAL    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'RER     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'RSU     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'RSVNONR ' ; NUM = NUM + 1
IPAPDETB.NUM = 'RSVSTRT ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SCH     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SMF     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SMS     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SQA     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SSN     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SVC     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SWAP    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SYSNAME ' ; NUM = NUM + 1
IPAPDETB.NUM = 'SYSP    ' ; NUM = NUM + 1
IPAPDETB.NUM = 'VAL     ' ; NUM = NUM + 1
IPAPDETB.NUM = 'VIODSN  ' ; NUM = NUM + 1
IPAPDETB.NUM = 'VRREGN  ' ; NUM = NUM + 1
If Substr(FMIDNUM,4,4) >= 6604 then do
   IPAPDETB.NUM = 'RTLS    ' ; NUM = NUM + 1
End
IPAPDETB.0 = NUM-1
Return

RDATE:
/*************************************************/
/* Convert MM DD YYYY or YYYY DDD to standard    */
/* date output that includes the day of week and */
/* the century date. A parm of "TODAY" can also  */
/* be passed to the date conversion routine.     */
/* The output format is always as follows:       */
/*      MM/DD/YYYY.JJJ CCCCC WEEKDAY             */
/* The above value will be put in the special    */
/* REXX variable "RESULT"                        */
/* example: CALL RDATE TODAY                     */
/* example: CALL RDATE 1996 300                  */
/* example: CALL RDATE 10 26 1996                */
/* result:  10/26/1996.300 35363 Saturday        */
/*************************************************/
arg P1 P2 P3

JULTBL = '000031059090120151181212243273304334'
DAY.0 = 'Sunday'
DAY.1 = 'Monday'
DAY.2 = 'Tuesday'
DAY.3 = 'Wednesday'
DAY.4 = 'Thursday'
DAY.5 = 'Friday'
DAY.6 = 'Saturday'

Select
  When P1 = 'TODAY' then do
    P1 = Substr(date('s'),5,2)
    P2 = Substr(date('s'),7,2)
    P3 = Substr(date('s'),1,4)
    call CONVERT_MDY
    call THE_END
  end
  When P3 = '' then do
    call CONVERT_JDATE
    call DOUBLE_CHECK
    call THE_END
  end
  otherwise do
    call CONVERT_MDY
    call DOUBLE_CHECK
    call THE_END
  end
end /* end select */
/* say RDATE_VAL  */
return RDATE_VAL
/**********************************************/
/*  E N D    O F   M A I N L I N E   C O D E  */
/**********************************************/

CONVERT_MDY:
if P1<1 | P1>12 then do
  say 'Invalid month passed to date routine'
  exit 12
end
if P2<1 | P2>31 then do
  say 'Invalid day passed to date routine'
  exit 12
end
if (P1=4 | P1=6 | P1=9 | P1=11) & P2>30 then do
  say 'Invalid day passed to date routine'
  exit 12
end
if P3<1900 | P3>2099 then do
  say 'Invalid year passed to date routine'
  exit 12
end
BASE   = Substr(JULTBL,((P1-1)*3)+1,3)
if (P3//4=0 & P3<>1900) then LEAP= 1
  else LEAP = 0
if P1 > 2 then BASE = BASE+LEAP
JJJ = BASE + P2

MM   = P1
DD   = P2
YYYY = P3
return

CONVERT_JDATE:
if P1<1900 | P1>2099 then do
  say 'Invalid year passed to date routine'
  exit 12
end
if P2<1 | P2>366 then do
  say 'Invalid Julian date passed to date routine'
  exit 12
end
if (P1//4=0 & P1<>1900) then LEAP= 1
  else LEAP = 0
ADJ1 = 0
ADJ2 = 0
Do MM = 1 to 11
   VAL1 = Substr(JULTBL,((MM-1)*3)+1,3)
   VAL2 = Substr(JULTBL,((MM-1)*3)+4,3)
   if MM >=2 then ADJ2 = LEAP
   if MM >=3 then ADJ1 = LEAP
   if P2 > VAL1+ADJ1 & P2 <= VAL2+ADJ2 then do
        DD = P2-VAL1-ADJ1
        MATCH = 'Y'
        leave
   end
end
if MATCH <> 'Y' then do
    MM = 12
    DD = P2-334-LEAP
end

YYYY = P1
JJJ  = P2
return

DOUBLE_CHECK:
if MM = 2 then do
   if DD > 28 & LEAP = 0 then do
     say 'Invalid day passed to date routine'
     exit 12
   end
   if DD > 29 & LEAP = 1 then do
     say 'Invalid day passed to date routine'
     exit 12
   end
end
if LEAP = 0 & JJJ > 365 then do
  say 'Invalid Julian date passed to date routine'
  exit 12
end
return


THE_END:
YRC = YYYY-1900
CCCCC = (YRC*365) +(YRC+3)%4 + JJJ
if YYYY > 1900 then CCCCC = CCCCC-1
INDEX   = CCCCC//7  /* index to DAY stem */
WEEKDAY =  DAY.INDEX

DD      = Right(DD,2,'0')
MM      = Right(MM,2,'0')
CCCCC   = Right(CCCCC,5,'0')
JJJ     = Right(JJJ,3,'0')

RDATE_VAL = MM||'/'||DD||'/'||YYYY||'.'||JJJ||' '||CCCCC||' '||WEEKDAY
returnSLIP traps based on MSGID
The MSGID parameter was introduced with z/OS 1.2 to allow SLIP traps to be set based on message identifier. For the purpose of this xample, the message identifier is IEFnnnI where nnn is 3 digits: SLIP SET,ID=id,MSGID=IEFnnnI,A=SVCD,END

This causes the message to be trapped synchronously and an SVC dump to be scheduled if a message is issued either via SVC or branch-entry to WTO with message identifier IEFnnnI appearing at the beginning of the message text.
At the time that the SLIP matches, R3 points to the message text, which can be used to perform additional filtering, e.g.

     DA=(3R?+12,EQ,C3C1E3)

would look at offset 18 (12 hex) in the message text for the hexadecimal value C3C1E3.
Some exceptions are identified in the System Commands publication where the environment prevents the SLIP trap from being taken. In these situations, another approach must be used.

####

Using SLIP TRACEs
Sometimes it is desirable to get information about the contents of registers or data areas for a program that is not behaving as expected without altering or interrupting the operation of that program. The SLIP subcommand of OPER can be used to collect this information. The following SLIP command: SLIP SET,IF,ID=xxxx,A=TRACE,TRDATA=(STD,REGS),J=jobname,PVTMOD=(pgm,start,end),END

will trace activity in the specified program (pgm) between offsets "start" and "end" for job, user or started task "jobname". An entry is to be created for each instruction fetch (IF) which matches the specified criteria. You want to be as specific as possible to avoid introducing unnecessary overhead into your system. For each matching event, an entry will be creating containing a standard header and register contents.
The SLIP command supports other selection criteria for specifying which events should be monitored and what data should be collected. For example, you can specify that the contents of an area pointed to by the contents of a specified register be captured for each matching event. Refer to the "MVS System Commands" publication or the "Service Aids" publication for more details.

To collect this information, you need to have GTF running specifying a parm member similar to the following:

TRACE=SLIP

GTF is started using an operator command similar to the following: S GTF.GTF,MEMBER=parm,DSN=tracedsn

GTF will at this point normally issue a message like: xx AHL125A  RESPECIFY TRACE OPTIONS OR REPLY U

Respond with the operator command R xx,U to continue. Once the activity that you wanted to monitor has completed, enter P GTF to stop GTF. Enter the command SLIP DEL,ID=xxxx

to remove your slip.The procedure used to start GTF may vary depending on your installation's procedures.
You can check out the contents of your trace using IPCS. You can either use the GTFTRACE command of IPCS or use the IPCS panels for formatting trace output, using the dataset name specified to GTF earlier as input.

For more information, refer to the "Service Aids" publication associated with your release of MVS.


###

/* REXX ******************************************************/


         TITLE 'REXX FUNCTION TO ISSUE WTO'
         PRINT NOGEN
*
*        PROGRAM:     REXWTO
*                     OUTPUT MESSAGE TO OPERATOR
*
*        ATTRIBUTES:
*                     REENTRANT
*                     AMODE: 31
*                     RMODE: ANY
*                     AUTHORIZATION: NONE
*
*        ABSTRACT:
*        REXX FUNCTION REQUIRES A SINGLE ARGUMENT - THE MESSAGE TO BE
*        OUTPUT TO THE OPERATOR USING A WTO.
*        THE FUNCTION WILL RETURN ONE VALUE:
*             THE STANDARD RETURN CODE
*
*        USAGE:
*        RET_CODE = REXWTO(OUTPUT_MSG);
*
*        RET_CODE VALUES:
*        0                             . NORMAL
*        4                             . MESSAGE > 126 BYTES
*        8                             . INVALID NUMBER OF ARGUMENTS
         TITLE 'EQUATES, MACROS && CONTROL BLOCKS USED'
R0       EQU   0
R1       EQU   1
R2       EQU   2
R3       EQU   3
R4       EQU   4
R5       EQU   5
R6       EQU   6
R7       EQU   7
R8       EQU   8                       . RETURN CODE
R9       EQU   9
R10      EQU   10                      . BAS RETURN REGISTER
R11      EQU   11
R12      EQU   12                      . CSECT BASE REGISTER
R13      EQU   13                      . -> DYNAMIC AREA
R14      EQU   14                      . -> RETURN
R15      EQU   15                      . -> ENTRY POINT
*                                      . RETURN CODE
*
*        CALLED ROUTINES:
*              NONE
*
*        MACROS AND CONTROL BLOCKS USED:
*              IRXARGTB                . MAP ARGUMENT TABLE
*              IRXEFPL                 . MAP EXTERNAL FUNCTIONS PLIST
*              IRXEVALB                . MAP EVALUATION BLOCK
*              IRXSHVB                 . MAP SHARED VARIABLE BLOCK
*              STORAGE                 . STORAGE ACQUIRE AND RELEASE
         TITLE 'MAIN CSECT PROCESS'
REXWTO   CSECT
REXWTO   AMODE 31
REXWTO   RMODE ANY
         LA    R14,0(,R14)             . VALIDITY OF R14
         BSM   R14,R0                  . CURRENT ADDRESSING MODE
         BAKR  R14,R0                  . ESTABLISH LINKAGE
         LR    R12,R15                 . 12 -> EPA
         USING REXWTO,R12              . CSECT ADDRESSABILITY
         STORAGE OBTAIN,               . ACQUIRE DYNAMIC AREA          *
               ADDR=(R13),                                             *
               LENGTH=DYNLEN,                                          *
               SP=0
         MVC   4(4,R13),=C'F1SA'       . INDICATE FORMAT OF SAVE AREA
         USING DYNAREA,R13             . DSECT ADDRESSABILITY
         SLR   R8,R8                   . SET RETURN CODE
         ST    R8,RETCODE              . SAVE RETURN CODE
         BAS   R10,REXXVECT            . REXX VECTOR PROCESSING
         BAS   R10,ARGUMENT            . PROCESS ARGUMENT
         LTR   R8,R8                   . Q. ARGUMENT VALID?
         BNZ   A0001                   . A. YES
         BAS   R10,DOWTO               . OUTPUT MESSAGE
*
A0001    EQU   *
*
         BAS   R10,TERMINAT            . TERMINATION
         STORAGE RELEASE,              . RELEASE DYNAMIC STORAGE       *
               ADDR=(R13),                                             *
               LENGTH=DYNLEN,                                          *
               SP=0
         SLR   R15,R15                 . 15 - RETURN CODE
         PR                            . ADIOS
         TITLE 'REXX VECTOR PROCESSING'
*        PROCESS THE TWO ARGUMENTS PASSED TO REXX FUNCTIONS
*        THE ADDRESS OF THE REXX ENVIRONMENT BLOCK (OPTIONAL)
*        THE ADDRESS OF THE EXTERNAL FUNCTION PARAMETER LIST
*
*        REGISTER USAGE
*        0                             . -> ENVIRONMENT BLOCK
*        1                             . -> EXTERNAL FUNCTION PLIST
*        2                             . -> PARSED PARAMETER LIST
*
REXXVECT EQU   *
*
         EREG  R0,R1                   . EXTRACT CALLER'S REGISTERS
         ST    R0,@REXX                . SAVE REXX ENVIRONMENT BLOCK ->
         ST    R1,@EFPL                . SAVE EXTERNAL FUNCTION PLIST
         USING EFPL,R1                 . IRXEFPL DSECT ADDRESSABILITY
         L     R2,EFPLARG              . 2 -> PARSED ARGUMENT LIST
         ST    R2,@ARGTAB              . SAVE
         L     R2,EFPLEVAL             . 2 -> EVALUATION BLOCK VECTOR
         L     R2,0(,R2)               . 2 -> EVALUATION BLOCK
         ST    R2,@EVALBLK             . SAVE
         DROP  R1                      . DSECT NOT REQUIRED
*
         BR    R10                     . RETURN
         TITLE 'PROCESS INPUT ARGUMENT'
*        PROCESS ARGUMENT - VALIDATE ETC.
*        ONE MANDATORY ARGUMENT - MAX 126 BYTES, MIN ONE BYTE
*
*        REGISTER USAGE
*        1                             . ARGUMENT COUNT
*        2                             . -> CURRENT ARG TABLE ENTRY
*                                      . -> SHARED VARIABLE BLOCK
*        3                             . WORK
*        4                             . -> CURRENT ARGUMENT VALUE
*        5                             . CURRENT ARGUMENT LENGTH
*        6                             . -> SAVED VALUE
*                                      . WORK
*        7                             . ARGUMENT LENGTH
*        8                             . RETURN CODE
*        10                            . RETURN
*
ARGUMENT EQU   *
*
         SLR   R1,R1                   . 1 - ZERO (ARGUMENT COUNT)
         ICM   R2,15,@ARGTAB           . 2 -> ARGUMENT TABLE
         BZ    C0002                   . BRANCH IF ZERO
         USING ARGTABLE_ENTRY,R2       . DSECT ADDRESSABILITY
*                                      . 4 -> ARGUMENT STRING
*                                      . 5 - ARGUMENT STRING LENGTH
         LM    R4,R5,ARGTABLE_ARGSTRING_PTR
         LTR   R5,R5                   . Q. LENGTH NEGATIVE OR ZERO?
         BM    C0002                   . A. YES - NEGATIVE
         BZ    C0003                   . A. YES - ZERO
         LA    R1,1(,R1)               . INCREMENT ARGUMENT COUNT
         CH    R5,=Y(L'MSG)            . Q. VARIABLE NAME TOO GREAT?
         BH    C0003                   . A. YES - ERROR
         MVI   MSG,C' '                . INITIALIZE MESSAGE AREA
         MVC   MSG+1(L'MSG-1),MSG
         LA    R6,MSG                  . 6 -> SAVED MESSAGE
         LR    R7,R5                   . LENGTH OF GROUP
*
C0001    EQU   *
*
         MVC   0(1,R6),0(R4)           . MOVE BYTE TO SAVE MESSAGE
         LA    R4,1(,R4)               . 4 -> NEXT BYTE OF MESSAGE
         LA    R6,1(,R6)               . 6 -> NEXT BYTE OF SAVED MSG
         BCT   R5,C0001                . LOOP THROUGH MESSAGE
         STH   R7,MSGLEN               . SAVE LENGTH
*                                      . 2 -> NEXT ARGUMENT DATA
         LA    R2,ARGTABLE_NEXT-ARGTABLE_ENTRY(,R2)
*                                      . 4 -> ARGUMENT STRING
*                                      . 5 - ARGUMENT STRING LENGTH
         LM    R4,R5,ARGTABLE_ARGSTRING_PTR
         LTR   R5,R5                   . Q. LENGTH NEGATIVE?
         BM    C0004                   . A. YES
         LA    R8,8                    . SET RETURN CODE
         B     C0004
*
C0002    EQU   *
*
         CH    R1,=H'1'                . Q. VALID NUMBER OF ARGUMENTS?
         BE    C0004                   . A. YES
         LA    R8,8                    . SET RETURN CODE
         B     C0004                   . CONTINUE
*
C0003    EQU   *                       . ARGUMENT LENGTH ERROR
*
         LA    R8,4                    . SET RETURN CODE
*
C0004    EQU   *
*
         DROP  R2                      . DSECT NOT REQUIRED
         ST    R8,RETCODE              . SAVE RETURN CODE
         BR    R10
         TITLE 'OUTPUT THE MESSAGE'
*        BUILD THE WTO AREA
*        ISSUE THE WTO
*
*        REGISTER USAGE
*        2                             . MESSAGE LENGTH
*        3                             . -> MESSAGE
*
DOWTO    EQU   *
*
         LH    R2,MSGLEN               . 2 - MESSAGE LENGTH
         AH    R2,=H'4'                . INCREMENT FOR HEADER
         STH   R2,MSGLEN               . AND SAVE
         XC    MCSFLAGS,MCSFLAGS       . ZAP MCS FLAGS
         LA    R3,MSG                  . 3 -> MESSAGE
         LA    R3,0(R2,R3)             . 3 -> DESCRIPTOR CODES
         XC    0(2,R3),0(R3)           . SET DESCRIPTOR CODES
         MVC   2(2,R3),=X'0020'        . SET ROUTE CODE 11
         WTO   MF=(E,WTOAREA)          . ISSUE WTO
         BR    R10
         TITLE 'TERMINATION ROUTINE'
*        SET UP REXX FUNCTION RETURN CODE
*        PUT RETURN VALUE INTO REXX EVALUATION BLOCK
*
*        REGISTER USAGE
*        1                             . LENGTH OF RETURN VALUE
*        2                             . WORK
*                                      . -> RETURN VALUE
*                                      . -> EVAL BLOCK
*        3                             . BINARY RETURN VALUE
*                                      . EVAL BLOCK SIZE
*        4                             . LENGTH OF EDITED RETURN VALUE
*
TERMINAT EQU   *
*
         SLR   R1,R1                   . 1 - ZERO
         LA    R2,RETDATA              . 2 -> OUTPUT DATA
         MVC   RETDATA,SPACES          . INITIALIZE OUTPUT
         L     R3,RETCODE              . 3 - RETURN CODE
         LTR   R3,R3                   . Q. RETURN CODE NEGATIVE?
         BNM   E0001                   . A. NO
         MVI   0(R2),C'-'              . OUTPUT NEGATIVE SIGN
         LA    R1,1(,R1)               . INCREMENT BYTES OUTPUT
         LA    R2,1(,R2)               . 2 -> NEXT OUTPUT BYTE
*
E0001    EQU   *
*
         CVD   R3,DWORD                . PACK IT
         MVC   VARWORK,MASK8           . MOVE EDIT MASK TO WORK AREA
         ED    VARWORK,DWORD+4         . EDIT THE DATA
         LA    R3,VARWORK              . 3 -> EDITED DATA
         LA    R4,L'VARWORK            . 4 - LENGTH OF EDITED DATA
*
E0002    EQU   *
*
         CLI   0(R3),C' '              . Q. SIGNIFICANT?
         BNE   E0003                   . A. YES
         LA    R3,1(,R3)               . 3 -> NEXT BYTE
         BCT   R4,E0002                . LOOP
*
E0003    EQU   *
*
         MVC   0(1,R2),0(R3)           . MOVE OUT BYTE
         LA    R1,1(,R1)               . INCREMENT BYTES OUTPUT
         LA    R2,1(,R2)               . 2 -> NEXT OUTPUT BYTE
         LA    R3,1(,R3)               . 3 -> NEXT INPUT BYTE
         BCT   R4,E0003                . LOOP
         ST    R1,#RETDATA             . NUMBER OF BYTES
*
         L     R2,@EVALBLK             . 2 -> EVAL BLOCK
         USING EVALBLOCK,R2            . DSECT ADDRESSABILITY
         L     R3,EVALBLOCK_EVSIZE     . 3 - LENGTH
         CH    R3,=H'3'                . Q. AT LEAST THREE DOUBLES?
         BL    E0004                   . A. NO
         MVC   EVALBLOCK_EVDATA(4),RETDATA . SET RESULT
         MVC   EVALBLOCK_EVLEN(4),#RETDATA
         DROP  R2
*
E0004    EQU   *
*
         BR    R10
         DROP  R13
         TITLE 'DYNAMIC AREA'
DYNAREA  DSECT
         DS    18F
DWORD    DS    D                       . FOR CVD
@ARGTAB  DS    F                       . -> ARGUMENT TABLE
@EFPL    DS    F                       . -> REXX EXT FUNCTION PLIST
@EVALBLK DS    F                       . -> EVAL BLOCK
@REXX    DS    F                       . -> REXX ENVIRONMENT BLOCK
#RETDATA DS    F                       . LENGTH OF RETURNED DATA
RETCODE  DS    F                       . RETURN CODE
REASCODE DS    F                       . REASON CODE
*
WTOAREA  DS    0F                      . WTO MESSAGE AREA
MSGLEN   DS    H                       . LENGTH OF MESSAGE
MCSFLAGS DS    XL2                     . MCS FLAGS
MSG      DS    CL126                   . MESSAGE
         DS    XL2                     . DESCRIPTOR CODES
         DS    XL2                     . ROUTING CODES
*
RETDATA  DS    CL8                     . RETURN DATA
VARWORK  DS    CL8                     . VARIABLE NUMBER WORK
         DS    0F
SHVARBLK DS    CL(SHVBLEN)             . SHARED VARIABLE BLOCK AREA
DYNLEN   EQU   *-DYNAREA
         TITLE 'IBM SUPPLIED DSECTS'
         IRXARGTB                      . ARGUMENT TABLE
         IRXEFPL                       . EXTERNAL FUNCTION PARAM LIST
         IRXEVALB                      . EVALUATION BLOCK
         IRXSHVB                       . SHARED VARIABLE REQUEST BLOCK
         TITLE 'CONSTANTS'
REXWTO   CSECT
*
MASK8    DC    X'4020202020202120'     . EDIT MASK
SPACES   DC    8C' '                   . SPACE FILL
*
         LTORG
         END   REXWTO

MVS and JES2 Commands 
MVS Commands Cheat Sheet 
R n,,NOREQ
Normal JES2 startup reply 
K E,D
Erase bottom display area an console 
K A,NONE
Undefine the display area at bottom of screen 
K E,1
Delete line 1 (top of screen, usually) 
K E,SEG
Delete contents of message segment 
K N, PFK=(5,CMD='S GTF,580'),CON=N
Define a PFK 
K S,REF
Display current console mode 
K S,DEL=RD
Set "roll delete" mode (most common mode) 
D U,,,380,2 
Display two devices, starting at address 380 
D U,DASD,ONLINE
Display all online DASD volumes 
D U,DASD,ONLINE,C00,8
Display online DASD volumes beginning at address C00 
D C,K
Display list of Control command operands 
D DUMP
Status of dump data sets 
D A, L
List active jobs and users 
D PFK
Display PFK definitions 
D R,L
List unanswered messages or actions 
D T
Display time and date 
C U=userid
Cancel TSO user 
M 480,VOL=(SL,volser),USE=STORAGE
Typical mount command 
SE 'message'
Message to all TSO users 
JES2 Commands Cheat Sheet 
$A Release all held jobs 
$A ' jobname'
Release specific job. Quotes required. 
$C 'jobname'
Cancel job or user 
$C PRTn
Cancel job on printer 
$DA,ALL
Status of all JES2 functions 
$D ' jobname'
Display JES status of job or user 
$DU,allPRTS
Display all JES devices 
$E ' jobname'
Restart job after it completes 
$H A or $H ' jobname'
Hold jobs 
$I PRTn
Interrupt printing and return job to queue 
$PI3
Stop an initiator 
$P ' jobname'
Purge a job (including spooled output) 
$SI3 or $SPRT2
Start an initiator or printer 
$T I3,C=AB
Assign job classes for an initiator 
$T PRT3,Q=AT
Change output classes for printer 
$DN
Display input queues 
$DQ
Display queues 
Shutting down MVS 
Enter $P 
stop all active processes except JES2 
Check using 
D A,L 
$DA 
$DU 
Shutdown JES2 using $PJES2 
Write Statistics etc using Z EOD 
Flsh IO buffers to disk using QUIESCE 

VTAM Commands Cheat Sheet 
OS/VS VTAM Reference Overview for VTAM Level 2 
VTAM Operator Commands - Cheat Sheet 
The following VTAM Command syntax diagrams have been included: 

Start Network Activity 
Alter Network Parameters 
Display Network Resources 
Activate Network Resources 
Deactivate Network Resources 
Terminate Network Activity 
Start Network Activity 
This command starts up VTAM. Without VTAM being started, no VTAM resources can be accessed 

>>--+-START--+-NET,,,-+-----------------------------------------------------+-><
    +-S------+        | <--------------------,--+                           |
                      |-SUPP=-+-NOSUPP-+--------+-------------------------+-+ 1)
                      |       |-INFO---|                                  |
                      |       |-WARN---|                                  |
                      |       |-NORM---|                                  |
                      |       +-SER----+                                  |
                      |-CONFIG=id-----------------------------------------|
                      |-LIST=id-------------------------------------------|
                      |-MAXSUBA=number------------------------------------|
                      |-NESTSOL=+-YES-+-----------------------------------|
                      |         +-NO--+                                   |
                      |-SSCPID=n------------------------------------------|
                      |-TEST----------------------------------------------|
                      |-+-TRACE---+-,TYPE=++-IO--+,ID=-+-cluster name---+ |
                      | +-NOTRACE-+       |+-BUF-+     |-component name-| |
                      |                   |            |-ncp name-------| |
                      |                   |            |-terminal name--| |
                      |                   |            +-terminal name--+ |
                      |                   |-LINE,ID=line name-------------|
                      |                   +-VTAMBUF,TYPE=SMS--------------|
                      |-APBUF=(bno,bsz,bth,F)-----------------------------|1)
                      |-CRPLBUF=(bno,bsz,bth,F)---------------------------|
                      |-IOBUF=(bno,bsz,bth)-------------------------------|
                      |-LFBUF=(bno,bsz,bth)-------------------------------|
                      |-LPBUF=(bno,bsz,bth,F)-----------------------------|
                      |-NPBUF=(bno,bsz,bth,F)-----------------------------|
                      |-PBBUF=(bno,bsz,bth,F)-----------------------------|
                      |-SFBUF=(bno,bsz,bth)-------------------------------|
                      |-UECBUF=(bno,bsz,bth,F)----------------------------|
                      +-WPBUF=(bno,bsz,bth,F)-----------------------------+

1)  F parameter applies to OS/VS2 MVS only

Alter Network Parameters after the network was started 
When VTAM is active, some of the startup parmeters can be changed 

>>--+-MODIFY-+-NET,-+-DUMP ,ID=ncpname-+--------+-----------------------+--><
    +-F------+      |                  +-,RMPO--+                       |
                    |-NESTSOL=+-YES-+-----------------------------------|
                    |         +-NO--+                                   |
                    |-NEGPOLL=number,ID=line name-----------------------|
                    |-POLL=number,ID=line name--------------------------|
                    |-SESSION=number,ID=line name-----------------------|
                    |-SESSION=number,ID=line name-----------------------|
                    |-TEST----------------------------------------------|
                    |-+-TRACE---+-,+ID=-+-cluster name---+,TYPE=+-IO--+-|
                    | +-NOTRACE-+  |    |-component name-|      +-BUF-+ |
                    |              |    |-ncp name-------|              |
                    |              |    |-terminal name--|              |
                    |              |    +-terminal name--+              |
                    |              |                                    |
                    |              +-ID=-+-line name,TYPE=LINE---+------|
                    |                    +-VTAMBUF,TYPE=SMS------+      |
                    |-TRANLIM=number,ID=terminal name-------------------|
                    +-SUPP=-+-NOSUPP-+----------------------------------+2)
                            |-INFO---|
                            |-WARN---|
                            |-NORM---|
                            +-SER----+

2) OS/VS1 and OS/VS2 SVS only

Display Information About Network resources 
When VTAM is active, the various VTAM resource can be displayed 

                     +-NONE--+
>>--+-DISPLAY-+-NET,-+-------+-,ID=+-application program name-+------------><
    +-D-------+      |-EVERY-|     |-bsc cluster name---------|
                     |-E-----|     |-line name----------------|
                     |-ACT---|     |-physical unit name-------|
                     |-A-----|     +-NCP major node name------+
                     |-INACT-|
                     +-I-----+

>>--+-DISPLAY-+-NET,ID=+-local 3270 terminal name-+------------------------><
    +-D-------+        |-logical unit name--------|
                       |-terminal name------------|
                       |-terminal component name--|
                       +-physical unit name-------+

Activate a Network Resource (1) 
You can make network resources available after VTAM has started 

>>--+-VARY-+-NET,ACT,ID=+-application segment---------------------------+-----><
    +-V----+            |-bsc cluster name -----------------------------|
                        |-line name-+--------------+--------------------|
                        |           +,ANS=-+-ON--+-+                    |
                        |                  +-OFF-+                      |
                        |-local terminal set name--+------------+-------|
                        |                          +-,-+-COLD-+-+       |
                        |                              +-WARM-+         |
                        |-ncp name--+--------------------------------+--|
                        |           +,-+-U=channel unit address------|  |
                        |              |-RNAME=remote 3704/3705 name-|  |
                        |              +-,-+-COLD-+------------------+  |
                        |                  +-WARM-+                     |
                        |-port name-------------------------------------|
                        |-terminal name---------------------------------|
                        |-local pu name-+----------------------------+--|
                        |               +,-U=channel unit address----+  |
                        |-logical unit name-----------------------------|
                        |-switched sna major node name-+------------+---|
                        |                              +-,-+-COLD-+-+   |
                        |                                  +-WARM-+     |
                        |-physical unit name----------------------------|
                        +-local sna major node-+------------+-----------+
                                               +-,-+-COLD-+-+
                                                   +-WARM-+

Activate a Network Resource (2) 
>>--+-VARY-+NET+----+,ID=+-bsc cluster name-------------+,LOGON=application pgm-><
    +-V----+   +,ACT+    |-line name--------------------|
                         |-local terminal set name------|
                         |-ncp name---------------------|
                         +-switched sna major node name-+

Activate a Network Resource (3) 
>>--+-VARY-+NET+----+,ID=+-local sna major node name----+,LOGON=application pgm->
    +-V----+   +,ACT+    |-physical unit name-----------|
                         |-ncp major node name----------|
                         +-switched sna major node name-+

>--+---------------------+--+------------+-------------------------------------><
   +-,LOGMODE=logon mode-+  +-,-+-COLD-+-+
                                +-WARM-+

Deactivate a Network Resource 
You can make network resources unavailable after VTAM has started 

>>--+-VARY-+NET-INACT,-+---+,ID=-+-bsc cluster name-------------+--------------><
    +-V----+           |-I-|     |-line name--------------------|
                       |-F-|     |-local terminal set name------|
                       +-R-+     |-ncp name---------------------|
                                 |-port name--------------------|
                                 |-terminal name----------------|
                                 |-physical unit name-----------|
                                 |-logical unit name------------|
                                 |-local SNA major node name----|
                                 +-switched sna major node name-+

Terminate Network Activity 
This is how you stop the network 

>>--+-HALT-+-NET+--------------+----------------------------------------------><
    +-Z----+    +-,+-QUICK--+--+
                   +-CANCEL-+



#####




D OMVS,L                                         
BPXO051I 08.48.40 DISPLAY OMVS 362               
OMVS     000E ACTIVE             OMVS=(G1,XZ,P1) 
SYSTEM WIDE LIMITS:         LIMMSG=NONE          
                  CURRENT  HIGHWATER     SYSTEM  
                    USAGE      USAGE      LIMIT  
MAXPROCSYS             59         68        900  
MAXUIDS                 7          7        200  
MAXPTYS                 0          1        800  
MAXMMAPAREA          1536       1536      40960  
MAXSHAREPAGES        1846       2342      12800  
IPCMSGNIDS             17         17        500  z
IPCSEMNIDS              8          8        500  
IPCSHMNIDS             10         11        500  
IPCSHMSPAGES            2          3     262144  
IPCMSGQBYTES          ---          0 2147483647  
IPCMSGQMNUM           ---          0      10000  
IPCSHMMPAGES          ---      12800      25600  
SHRLIBRGNSIZE    60817408   67108864   67108864  
SHRLIBMAXPAGES          0          0       4096  
JES2
Reference: OS/390 JES2 Commands
GC28-1790-02, for valid parameters.
$DSPL,JOBS=5
this will display all jobs using 5% or more of the spool
. . . very useful when you have panic spool problems. 

$A A
To release all jobs

$ACTIVATE
To activate new functions at the current release level of JES2.

$ADD APPL 
To dynamically define a VTAM application to JES2 at the specified JES2 node. 

$ADD DESTID
To dynamically define a symbolic name for a JES2 route code. 
Use the $D DESTID command to view the actual destination for a destid. 

$ADD FSS
To dynamically define a functional subsystem (FSS) to JES2.

$ADD LINE(nnnn)
To dynamically add a line.

$ADD LOGON (nn) 
Creates a new LOGON pseudo-device, which defines JES2 as an application program to VTAM

$ADD PRT
To dynamically add a local printer.

$ADD REDIRECT
To specify redirection for commands entered at the entry console. The operator should use $ADD REDIRECT if redirection was not specified already by the initialization statement or a previous $ADD REDIRect for this console. 

$ADD RMT(nnnn)
To add one or more RJE workstations. You cannot use this command to add an RJE workstation with a number higher than that either previously defined by RMTNUM= on the TPDEF initialization statement or the highest numbered RJE workstation defined through RMT(nnnn) initialization statements.

$C A
To cancel the processing of all or specified automatic command entries and delete those entries.

$C A 3
To cancel auto job id=3 (no comma) 

$C job
Immediately cancel jobs or TSU sessions currently executing on any member of the MAS and, if desired, provide a storage dump. 

$D A,L
Display information about currently active jobs 

$D BUFDEF
To display the current values of all parameters defined on the BUFDEF initialization statement or command. 

$DQ
$HASP647 3 XEQ C 1100 
$HASP647 5 XEQ E 1100
$HASP643 6 PPU NYS2 ANY
$HASP643 742 PPU JES23 ANY 
$HASP643 636 PPU LOCAL ANY
$HASP646 22.9416 PERCENT SPOOL UTILIZATION 

$D SPOOL
Display the Status of Spool Volumes 

$D SPOOLDEF
To display the JES2 spooling environment characteristics.

$D U,LOGON1 

$D U,volser= to find the dasd address

$SSPL(MPSPL2),FORMAT

$T LOGON1,LOG=NO

$T OFF1.ST,DISP=KEEP
You can change OFF1.ST to OFF2.ST to off load the same spool files

$T NODE(SSAJES2),PATHMGR=NO

$T A,ALL
As an example the commands displays:
$HASP604 ID 1 T= 13.50 I= 900 L=INTERNAL $VS,'D A,L' 
$HASP604 ID 4 T= 14.46 I= 3600 L=SYSMS $VS,'W X' 
$HASP604 ID 5 T= 14.47 I= 3600 L=SYSMS $VS,'S LOGWTR' 
$HASP604 ID 3 T= 23.55 I=86400 L=INTERNAL $VS,'S BACKUP'
$HASP604 ID 2 T= 37.18 I=86400 L=INTERNAL $VS,'S TMSDAILY' 

Within JESPARMs
$TA,I=900,T=11.15,'$VS,''D A,L'''
Displays active list every 15 minutes

$TA,I=86400,T=04.15,'$VS,''S TMSDAILY'''
Starts job TMSDAILY every 24 hours starting at 0415 hours

$TA,I=86400,T=01.15,'$VS,''S BACKUP'''
Starts job BACKUP every 24 hours starting at 0115 hours

$TA,I=900,T=11.15,'$VS,''D A,L''' 
(900 = display every 15 minutes)

$vs, 'v (234,235,236),offline','d a' 
Varys offline devices 234,235,236 and dispalys all at JES2 startup
 




MVS
DD CLEAR,DSN=ALL 

DS QT,483,1
DS QT,483,1 IEE459I 23.08.48 DEVSERV QTAPE 118
UNIT DTYPE DSTATUS CUTYPE DEVTYPE CU-SERIAL DEV-SERIAL ACL LIBID
0483 3590-1 ON-RDY 3590A60 3590E1A* 0113-48813 0113-48813 I 14395
**** 1 DEVICE(S) MET THE SELECTION CRITERIA 
**** 1 DEVICE(S) WITH DEVICE EMULATION ACTIVE 

D IOS,MIH,DEV=484
IOS086I 23.13.23 MIH DEVICE TIMES 162
0484=03:00. 

V B55,online,uncond
After a V B55,offline,force which then boxes the device

D ASM
IEE200I 11.56.47 DISPLAY ASM 076 
TYPE FULL STAT DEV DATASET NAME 
PLPA 72% OK 0884 PAGE.CPAC.PLPA 
COMMON 11% OK 0884 PAGE.CPAC.COMMON 
LOCAL 5% OK 084A PAGE.CPAC.LOCAL2 
LOCAL 5% OK 084B PAGE.CPAC.LOCAL3 
LOCAL 5% OK 0282 PAGE.CPAC.LOCAL7 
NO SWAP DATASETS ARE IN USE 
PAGEDEL COMMAND IS NOT ACTIVE 

D IPLINFO 
IEE254I 11.43.50 IPLINFO DISPLAY 182
SYSTEM IPLED AT 18.06.14 ON 07/20/2000
RELEASE OS/390 02.07.00 
USED LOAD00 IN SYS1.IPLPARM ON 0305 
IEASYM LIST = 00 
IEASYS LIST = 00 (OP) 
IODF DEVICE 0305 
IPL DEVICE 0300 VOLUME DAVR7A 

D LOGREC 
IFB090I 10.00.56 LOGREC DISPLAY 442 
CURRENT MEDIUM = DATASET 
MEDIUM NAME = SYS1.CPAC.LOGREC 

D M
IEE174I 09.54.28 DISPLAY M 977 
PROCESSOR STATUS 
ID CPU SERIAL 
0 + 0115C09672 
1 + 1115C09672 
CPC ND = 009672.R24.IBM.02.000000042043
CPC ID = 00 
...... see console for full listing

D PARMLIB 
IEE251I 09.49.45 PARMLIB DISPLAY 372 
PARMLIB DATA SETS SPECIFIED AT IPL 
ENTRY FLAGS VOLUME DATA SET 
1 S V26IPO SYS1.PARMLIB 
2 S V26IPO CPAC.PARMLIB 
3 S V26RES SYS1.IBM.PARMLIB 

D PROD,REGISTERED 
IFA111I 10.05.09 PROD DISPLAY 461 
S OWNER NAME FEATURE VERSION ID 
N IBM CORP OS/390 JES2 02.05.00 5647-A01 
E IBM CORP OS/390 OS/390 02.06.00 5647-A01 
E IBM CORP OS/390 RMF **.**.** 5647-A01 
E IBM CORP OS/390 SDSF **.**.** 5647-A01 
E IBM CORP OS/390 TCP/IP BASE **.**.** 5647-A01 
E IBM CORP PSF/MVS PSF/MVS 02.02.00 5695-040 

D PROG,EXIT
CSV460I 09.59.36 PROG,EXIT DISPLAY 
...... see console for full listing

D PROG,LNKLST
CSV470I 10.01.50 LNKLST DISPLAY 
LNKLST SET LNKLST00 LNKAUTH=LNKLST 
ENTRY APF VOLUME DSNAME 
1 A V26RES SYS1.LINKLIB
2 V26RES SYS1.MIGLIB
3 A V26RES SYS1.CSSLIB
...... see console for full listing 

D PROG,APF
CSV450I 10.03.42 PROG,APF DISPLAY
FORMAT=DYNAMIC ENTRY VOLUME DSNAME 
1 V26RES SYS1.LINKLIB 
2 V26RES SYS1.SVCLIB 
3 V26IPO CPAC.LINKLIB 
...... see console for full listing 

D SMF
IEE949I 13.10.00 SMF DATA SETS 493 
NAME VOLSER SIZE(BLKS) %FULL STATUS 
P-SYS1.MAN1 V26CAT 7200 0 ALTERNATE 
S-SYS1.MAN2 V26CAT 1800 69 ACTIVE
S-SYS1.MAN3 V26CAT 1800 0 ALTERNATE 

D SMF,O
IEE967I 09.49.14 SMF PARAMETERS 952 
MEMBER = SMFPRM00 
DDCONS(YES) -- DEFAULT 
LASTDS(MSG) -- DEFAULT 
NOBUFFS(MSG) -- DEFAULT 
SYNCVAL(00) -- DEFAULT 
INTVAL(30) -- DEFAULT 
DUMPABND(RETRY) -- DEFAULT 
SUBSYS(STC,NOTYPE(99)) -- SYS 
SUBSYS(STC,NOINTERVAL) -- SYS 
SUBSYS(STC,NODETAIL) -- SYS 
SUBSYS(STC,EXITS(IEFUSO)) -- PARMLIB 
SUBSYS(STC,EXITS(IEFUJP)) -- PARMLIB 
SUBSYS(STC,EXITS(IEFU84)) -- PARMLIB 
SUBSYS(STC,EXITS(IEFU83)) -- PARMLIB 
SUBSYS(STC,EXITS(IEFU29)) -- PARMLIB 
SYS(NODETAIL) -- PARMLIB SYS(NOINTERVAL) -- PARMLIB 
...... see console for full listing

D SMS 
IGD002I 09:55:02 DISPLAY SMS 400 
SCDS = DFSMS.PRIM.SCDS 
ACDS = DFSMS.PRIM.ACDS 
COMMDS = DFSMS.PRIM.COMMDS
DINTERVAL = 150 
REVERIFY = NO 
ACSDEFAULTS = YES 
SYSTEM CONFIGURATION LEVEL INTERVAL SECONDS 
COA2 ---------- N/A CPAC 2000/08/09 09:54:50 15 

D SYMBOLS 
IEA007I STATIC SYSTEM SYMBOL VALUES 406 
&SYSCLONE. = "AC" 
&SYSNAME. = "CPAC" 
&SYSPLEX. = "LOCAL" 
&SYSR1. = "V26RES" 

D T 
IEE136I LOCAL: TIME=10.07.48 DATE=2000.222 GMT: TIME=14.07.48 DATE=2000.222 

D U,IPLVOL 
IEE457I 10.10.56 UNIT STATUS 510 
UNIT TYPE STATUS VOLSER VOLSTATE 
08A0 3390 S V26RES PRIV/RSDNT 

DD CLEAR,DSN=ALL 
IEE855I DUMPDS COMMAND RESPONSE 043 
DUMPDS COMMAND SYS1.DUMP DATA SET STATUS 
SYS1.DUMP DASD DATA SETS CLEARED: 00 

F TSO,USERMAX=1
sets TSO user to max of one user

D XCF,COUPLE
Displays info on the couple data sets, which used at IPL, names, DASD, etc..

m xxx,vol=(sl,volser),use=public 

VARY CN(*),ACTIVATE
Activate the console you are on

D C,HCONLY 
Display hard copy consoles

IEE712I VARY CN PROCESSING COMPLETE
 




DFSMS
F CATALOG,REPORT,CACHE
Reports caching statistics for both caching approaches of catalog management to cache catalog information:
 VLF statistics using CDSC
 ISC statistics

F CATALOG,REPORT,PERFORMANCE
This new modify catalog command reports counts for various events and the average elapsed time for these events.

F CATALOG,LIST(id|yyyyyy)|LISTJ(jobname)

For LISTJ and LIST provides a new keyword DETAIL detailed information about current CAS requests for the jobname or service tasks, including type of request, ENQs, locks held, and so on. Again, this is intended for real-time diagnosis when problems arise.
 




TSO/E
SYNC
command to initialize SYS1.BRODCAST data set and to synchronize it with the RACF data set, SYS1.UADS, or both. 

SHOWMVS 
(tool from the CBT tape by Gilbert Saint-flour)
From the ISPF options 6 screen enter SHOWMVS to list all kinds of info about your system
 




VTAM
D NET,MAJNODES

Z NET
Will take down VTAM normally allowing LU sessions to end prior to deactivation

Z NET,QUICK
Will take down VTAM normally but not allowing LU sessions to end normally

Z NET,CANCEL
Will take down VTAM when the above 2 options fail. Cancel will kill everything whether they are in Pending states, hung states or in normal sessions no matter what!! 
(Z NET commands by Dan Sullivan, IBM-Main discussion group)

D NET,BFRUSE,BUFFER=SHORT 




VLF
F CATALOG,REPORT,CACHE 
Determining Catalogs in VLF

F CATALOG,NOVLF(your.catname) 
Removing Catalogs from VLF
Please don't forget to fix your changes in SYS1.PARMLIB(COFVLFxx) 
 




SDSF
XDC
Typing this command on the line of the job you want to save as a data set. It displays a self explaining menu. Your job is NOT remove for the output queue.
 




DFHSM Commands
Execute while in the DFHSM proc displayed via SDSF DA panel

F DFHSM,BACKVOL CDS 

F DFHSM, AUTOBACKUPSTART(0730 0900 1030) 

F DFHSM,SETSYS SECONDARYSPMGMTSTART(0735 1030) 

F DFHSM,SETSYS PRIMARYSPMGMTSTART(1035 1335) 

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 
Holidays 
F DFHSM, DEFINE PRIMARYSPMGMTCYCLE (NYYYYYN CYCLESTARTDATE(2002/05/05)) 
F DFHSM, DEFINE SECONDARYSPMGMTCYCLE (NYYYYYN CYCLESTARTDATE(2002/05/05)) 
F DFHSM,DEFINE BACKUP(NYYYNNN 2 CYCLESTARTDATE(2002/05/05)) ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

DFHSM,QUERY SPACE 

F DFHSM,BACKVOL CDS 

F DFHSM,RELEASE MIGRATION 

F DFHSM,RELEASE RECYCLE 

F DFHSM,RELEASE ALL 

F DFHSM,BACKLOG CDS(NULLJOURNALONLY) 

F DFHSM,SETSYS PRIMARYSPMGMTSTART(1430 1730) 

F DFHSM,Q CDS F DFHSM,HOLD LIST 

F DFHSM,HOLD RECYCLE 

F DFHSM,QUERY ACTIVE 




F HSM1,HOLD ALL F HSM1,RELEASE ALL 

F HSM1,HOLD AUTOMIGRATION 

F HSM1,RELEASE AUTOMIGRATION 

F DFHSM,QUERY [ACT, AUTOPROGRESS, CONTROLDATASETS, CSALIMITS, WAITING] 

F DFHSM,QUERY [ABARS, STARTUP, SPACE, SETSYS] F DFHSM,STOP ALL 

F DFHSM,HOLD ALL 

F DFHSM,RELEASE ALL 

F DFHSME,REPORT DAILY FUNCTION(RECOVER) 

LIST TTOC SELECT(FAILEDRECYCLE) ODS(LIST.EXAMPLE.ONE) 

DEFINE BACKUP(NYYYYNN 2 CYCLESTARTDATE(2002/05/05)) 




From the ISPF, option 6 panel

HSEND EXPIREBV DISPLAY ODS(userid.DISPLAY.LIST) 

HSEND WAIT EXPIREBV EXECUTE 

HSEND RECYCLE DISPLAY DAILY PERCENTVALID(15) 

HSEND RECYCLE DISPLAY ML2 PERCENTVALID(15) 

HSEND LIST VOL(W00340) TERM 

HSEND LIST TTOC(W00340) TERM BOTH 

HSEND LIST LEVEL(SP) BCDS SEL(AGE(400)) TERM 

HSEND LIST DSN(DATASET.NAME) BOTH TERM 
 



 
/* REXX */
dsn = jll.jcl
mem = bidon
jcl.0 = 0

"ALLOC  FI(jcntl) DA('"dsn"("mem")') SHR"
"EXECIO * DISKR jcntl (STEM jcl. FINIS"
"FREE   FI(jcntl)"

if jcl.0 /= 0 then
do
"ALLOC FI(submit) SYSOUT WRITER(INTRDR) RECFM(F) LRECL(80) REUSE"
do i = 1 to jcl.0
say 'STMT'i': 'jcl.i
end

"EXECIO * DISKW SUBMIT (STEM jcl. FINIS "
"FREE   FI(submit)"
end

exit rc

#####

SHOWMRO TITLE  'Show the currently active MRO regions'
*
* Name: SHOWMRO
*
* Author: David Alcock
*         dalcock@csw.com (work)
*         davea@ticnet.com (home)
*
* Written: 11-NOV-1997
*
* Purpose: TSO command that shows all of the current CICS MRO regions.
*
* Reference:
* - LY33-6082 CICS/ESA Diagnosis Reference Version 4 Release 1
* - CICS.SDFHSRC(DFHIRPD) macro source. It is not used by this program
*   for these reasons:
*   - Assembly error for field MCNTL and I didn't look into why
*   - Less things to be dependant on. Don't have to worry when IBM
*     Changes the MACRO at release levels.
*
* Requirements:
* - High Level Assembler
* - MVS version 3 and higher (for entry and exit housekeeping)
* - MVS version 4 and higher (for jobname information and STCKCON)
* - Only tested on CICS 4.1.0 LNKLST/LPALST and it's subsystem format
*
         SPACE 2
***********************************************************************
***                                                                 ***
**           M o d i f i c a t i o n   H i s t o r y                 **
**                                                                   **
** Person     Date        Description                                **
** ---------- ----------- ------------------------------------------ **
** DGAlcock   11-NOV-1997 Initial program written;                   **
***                                                                 ***
***********************************************************************
         PRINT NOGEN
*
** IBM DSECTs
*
         CVT   DSECT=YES,LIST=NO          Communications Vector Table
         IEFJESCT                         JES Communications Table
         IEFJSCVT ,                       Subsystem Comm. Vector table
         IEFJSSVT ,                       Subsystem Vector Table
         IHAASVT ,                        Address Space Vector Table
         IHAASCB ,                        Address Space Control Block
         IHAASSB ,                        Address Space Sec. Block
         IAZJSAB ,
*
** CICS: DFHSAB - CICS subsystem Anchor Block
** (Based on CICS 4.1)
*
SAB      DSECT ,
SABCDD   DS    F                          Addr of CEC 'inop' data
SABSCTE  DS    F                          Addr of SCTE
SAB_ID   DS    C'DFHSAB'                  Eyecatcher
         ORG   SAB+X'18'
SABMAPPT DS    F                          Addr of bit map: act CICS
         ORG   ,
SABL     EQU   32
*
** CICS: SCTE - Subsystem Control Table Extension
** (Based on CICS 4.1)
*
SCTE     DSECT ,
SCTELACB DS    F
         DS    F
         DS    F
SCTESVC  DS    X'0A00'
         DS    X'0000'
SCTEL    EQU   *-SCTE
*
** CICS: LACB - Logon Control Block
** (Based on CICS 4.1)
*
LCB      DSECT ,
         ORG   LCB+X'7C'
LCBAPPLD DS    CL8' '
LCBLNGTH EQU   X'D8'
*
** CICS: LACB - Logon Address Space Control Block
** (Based on CICS 4.1)
*
LACB     DSECT ,
         ORG   LACB+X'0C'
LACBSUDB DS    F
LACBL    EQU   X'58'
*
LACBE    DSECT ,
LACBENM  DS    CL8
LACBELEN EQU   X'14'
*
** CICS: SUDB - SubSystem User Definition Control Block
** (Based on CICS 4.1)
*
SUDB     DSECT ,
SUDBCHN  DS    A
SUDBLACB DS    A
         ORG   SUDB+X'0E'
SUDBASID DS    H
         DS    F
SUDBASCB DS    F
SUDBJSB  DS    F
SUDBAWS  DS    F
SUDBLCB  DS    F
         ORG   ,
SUDBLEN  EQU   X'58'
         PRINT GEN
         YREGS ,
         EJECT
***********************************************************************
***                                                                 ***
**       Entry housekeeping                                          **
***                                                                 ***
***********************************************************************
         SPACE 2
SHOWMRO  CSECT ,
SHOWMRO  AMODE 31
SHOWMRO  RMODE ANY
*
** Standard ESA entry housekeeping
*
         BAKR  R14,0                    Save regs
         LAE   R12,0(R15,0)             Get base register
         USING SHOWMRO,R12              Get addressibility
         SAC   0
         SYSSTATE ASCENV=P
*
** Obtain Dynamic Save Area for Registers and work areas.
*
         STORAGE OBTAIN,LENGTH=DSAL,LOC=BELOW Obtain storage
         LR    R13,R1                   Point to Save Area
         MVC   4(4,R13),=C'F1SA'        Indicate stack SA
         USING DSA,R13                  Get addressibility to area
         EJECT
***********************************************************************
***                                                                 ***
**   Locate to the first SUDB                                        **
***                                                                 ***
***********************************************************************
         SPACE 2
*
** Find the CICS subsystem and get the SSCTSUSE (DFHSAB) in R4
*
         L     R4,CVTPTR                  -> CVT
         L     R4,CVTJESCT-CVTMAP(R4)     -> JESCT
         L     R4,JESSSCT-JESCT(R4)       -> SSCVT
FSS$L    DS    0H
         CLC   SSCTSNAM-SSCT(4,R4),=C'CICS'  SubSystem Match?
         BE    FSS$LX                        Yes, leave loop
         ICM   R4,B'1111',SSCTSCTA-SSCT(R4)  Check next one out
         BNZ   FSS$L                         Got one, repeat performanc
         B     E$NSS                         SubSystem not found...
FSS$LX   DS    0H                            SubSystem found
         ICM   R4,B'1111',SSCTSUSE-SSCT(R4)  -> DFHSAB
*
** Locate the SCTE and issue the starting message (w/SVC number)
*
         ICM   R5,B'1111',SABSCTE-SAB(R4) Locate SCTE
         BZ    E$NSCTE
         MVC   MSG(MSG1L),MSG1
* Note: The SVC is in the machine code format "0Axx" or SVC xx
         SLR   R1,R1
         IC    R1,SCTESVC+1-SCTE(R5)      Get the SVC
         CVD   R1,DOUBLE
         UNPK  MSG+MSG1SVCD-1-MSG1(4),DOUBLE+6(2)
         OI    MSG+MSG1SVCD+2-MSG1,C'0'
         MVI   MSG+MSG1SVCD-1-MSG1,C'='
*
         UNPK  MSG+MSG1SVCH-MSG1(3),SCTESVC+1-SCTE(2,R5)
         MVZ   MSG+MSG1SVCH-MSG1(2),=8X'00'
         TR    MSG+MSG1SVCH-MSG1(2),=C'0123456789abcdef'
         MVI   MSG+MSG1SVCF-MSG1,C')'
*
         L     R1,CVTPTR                  -> CVT
         MVC   MSG+MSG1SYS-MSG1(L'CVTSNAME),CVTSNAME-CVTMAP(R1)
         TPUT  MSG,MSG1L
         MVI   MSG,C' '
         TPUT  MSG,1
*
** Locate the LACB (Logon Address Space Control Block)
*
         ICM   R6,B'1111',SCTELACB-SCTE(R5)  Locate LACB
         BZ    E$NLACB
*
** Locate the first SUDB
*
         ICM   R7,B'1111',LACBSUDB-LACB(R6) Locate SUDB
         BZ    E$NSUDB
* Note: After this point R4, R5, R6 are freed up. Only R7 matters.
         EJECT
***********************************************************************
***                                                                 ***
**       Process all of the SUDBs                                    **
***                                                                 ***
***********************************************************************
         SPACE 2
         XC    PS_MROC(4),PS_MROC           Ensure we start at zero
PS$L     DS    0H
         ICM   R1,B'1111',SUDBCHN-SUDB(R7)  On the last one?
         BZ    PS$X                         Yes, Leave
*
         ICM   R8,B'1111',SUDBLCB-SUDB(R7)  LCB pointer
         BZ    PS$LB                        None, skip this entry
*
         L     R1,PS_MROC                   Get MRO region count
         LA    R1,1(R1)                     Bump by one
         ST    R1,PS_MROC                   Save for later
*
         MVC   MSG(MSG2L),MSG2
         ICM   R9,B'1111',SUDBASCB-SUDB(R7) ASCB pointer
         L     R9,ASCBASSB-ASCB(,R9)        -> ASSB
         L     R9,ASSBJSAB-ASSB(,R9)        -> JSAB
         MVC   MSG+MSG2JOBI-MSG2(8),JSABJBID-JSAB(R9)
         MVC   MSG+MSG2JOBN-MSG2(8),JSABJBNM-JSAB(R9)
*
         MVC   MSG+MSG2APPL-MSG2(8),LCBAPPLD-LCB(R8)
*
** Get the CICS region start time and date
*
         ICM   R9,B'1111',SUDBASCB-SUDB(R7) ASCB pointer
         MVC   PS_TOD(8),ASCBINTS-ASCB(R9) Get start time
         STCKCONV STCKVAL=PS_TOD,         Convert this TOD Stamp       @
               CONVVAL=PS_SOUT,           ..Into these date/time areas @
               TIMETYPE=DEC,              ..Output time format         @
               DATETYPE=DDMMYYYY,         ..Output Date format         @
               MF=(E,PARMLIST)
         LTR   R15,R15                    STCKCONV worked?
         BNZ   PS$SCE                     Failed: give up
*
         LA    R15,MSG+MSG2L              Locate output area
*                               D  D  -  M  M  -  C  C  Y  Y
         MVC   0(11,R15),=X'40,20,20,60,20,20,60,20,20,20,20'
         ED    0(11,R15),PS_SOUT+8        Edit it to " dd-mm-ccyy"
         MVC   0(3,R15),1(R15)            Move "dd-" over "dd-...-ccyy"
         PACK  DOUBLE(8),4(2,R15)         Get month in decimal
         CVB   R14,DOUBLE                 Convert to binary
         BCTR  R14,0                      Make relative to zero
         MH    R14,=H'3'                  Multiply for month offset
         LA    R1,=C'JanFebMarAprMayJunJulAugSepOctNovDec'
         AR    R1,R14                     Locate month entry
         MVC   3(3,R15),0(R1)             Move "mmm" to "dd-mmm-ccyy"
         OI    0(R15),X'F0'               Ensure leading zero
* Bump past xx-mmm-ccyy
         LA    R15,11(R15)                Bump past date
         MVC   0(12,R15),=X'F021207A20207A20204B2020'
         ED    0(12,R15),PS_SOUT
         MVI   0(R15),C' '
         B     PS$SCX
PS$SCE   DS    0H
         LA    R15,MSG+MSG2L              Locate output area
         MVI   0(R15),C' '
         MVC   1(21,R15),0(R15)
PS$SCX   DS    0H
*
** Print message
*
         TPUT  MSG,MSG2L+11+12
*
** Bump to next SUDB
*
PS$LB    DS    0H
         ICM   R7,B'1111',SUDBCHN-SUDB(R7)
         BNZ   PS$L
*
** The end of the SUDB chain - print number of MRO regions found
*
PS$X     DS    0H
         MVI   MSG,C' '
         TPUT  MSG,1
         MVC   MSG(MSG3L),MSG3
         LA    R15,MSG+MSG3L-1
         ICM   R1,B'1111',PS_MROC
         CVD   R1,DOUBLE
         UNPK  0(4,R15),DOUBLE+6(2)
         OI    3(R15),C'0'
         MVI   MSG+MSG3L-1,C'='
         TPUT  MSG,MSG3L+4
         EJECT
***********************************************************************
***                                                                 ***
**       Exit Housekeeping                                           **
**                                                                   **
**       Release resources and return to caller                      **
***                                                                 ***
***********************************************************************
         SPACE 2
EXIT     DS    0H
         LR    R2,R13                     Get storage address
         STORAGE RELEASE,LENGTH=DSAL,ADDR=(R2) Release storage
         SLR   R15,R15                    Set return code
         PR                               Return to caller
         EJECT ,
***********************************************************************
***                                                                 ***
**       Error routines                                              **
***                                                                 ***
***********************************************************************
         SPACE 2
*
** SUDB not found
*
E$NSUDB  DS    0H
         MVC   MSG(MSG96L),MSG96
         TPUT  MSG,MSG96L
         B     EXIT
*
** LACB not found
*
E$NLACB  DS    0H
         MVC   MSG(MSG97L),MSG97
         TPUT  MSG,MSG97L
         B     EXIT
*
** SCTE not found
*
E$NSCTE  DS    0H
         MVC   MSG(MSG98L),MSG98
         TPUT  MSG,MSG98L
         B     EXIT
*
** Sub system for CICS not found
*
E$NSS    DS    0H
         MVC   MSG(MSG99L),MSG99
         TPUT  MSG,MSG99L
         B     EXIT
         EJECT
***********************************************************************
***                                                                 ***
**       Constants                                                   **
***                                                                 ***
***********************************************************************
         SPACE 2
MSG1     DC    C'SHOWMRO-01I CICS SRB SVC '
MSG1SVCD DC    C'xxx'
         DC    C' ('
MSG1SVCH DC    C'xx'
MSG1SVCF DC    C')  - System=' '
MSG1SYS  DS    CL(L'CVTSNAME)
         DC    C' - active MRO regions:'
MSG1L    EQU   *-MSG1
*
MSG2     DC    C'SHOWMRO-02I > '
MSG2JOBI DC    CL8' '
         DC    C' '
MSG2JOBN DC    CL8' '
         DC    C' - APPLID: '
MSG2APPL DC    CL8' '
         DC    C' - '
MSG2L    EQU   *-MSG2
*
MSG3     DC    C'SHOWMRO-03I The number of MRO regions='
MSG3L    EQU   *-MSG3
*
MSG96    DC    C'SHOWMRO-96E SUDB not found '
MSG96L   EQU   *-MSG96
*
MSG97    DC    C'SHOWMRO-97E LACB not found '
MSG97L   EQU   *-MSG97
*
MSG98    DC    C'SHOWMRO-98E SCTE not found '
MSG98L   EQU   *-MSG98
*
MSG99    DC    C'SHOWMRO-99E CICS subsystem not found '
MSG99L   EQU   *-MSG99
         LTORG ,
         EJECT
***********************************************************************
***                                                                 ***
**       GETMAINed work area                                         **
***                                                                 ***
***********************************************************************
         SPACE 2
DSA      DSECT ,
         DS    18F                      Register Save Area
PARMLIST DS    XL64                     Work area for parm lists
         DS    0D                       Process_SUDBs:
PS_TOD   DS    D                        ..TOD (STCK) area
PS_SOUT  DS    XL16                     ..STCKCON output area
PS_MROC  DS    F                        ..Count of MRO regions
         DS    0D
DOUBLE   DS    D                        Work area
*
MSG      DS    79C' '                   Message area
         DS    0D
DSAL     EQU   *-DSA
         END
         TITLE 'TEST CASE DUNAJOB'
*The following program creates a 1-megabyte memory 
*object and writes the character string "Hi Mom" 
*into each 4k page of the memory object. The program
*then frees the memory object.         
         ACONTROL FLAG(NOALIGN)
DUNAJOB  CSECT                                                           
DUNAJOB  AMODE 31                                                        
DUNAJOB  RMODE 31                                                        
         SYSSTATE ARCHLVL=2                                              
* Begin entry linkage                                                    
         BAKR  14,0                                                      
         CNOP  0,4                                                       
         BRAS  12,@PDATA                                                 
         DC    A(@DATA)                                                  
@PDATA   LLGF  12,0(12)                                                  
         USING @DATA,12                                                  
         LHI   0,DYNAREAL                                                
         STORAGE  OBTAIN,LENGTH=(0),SP=0,CALLRKY=YES                     
         LLGTR 13,1                                                      
         USING @DYNAREA,13                                               
         MVC   4(4,13),=C'F6SA'                                          
* End entry linkage                                                      
*              
         SAM64                     Change to amode64                     
         IARV64 REQUEST=GETSTOR,                                       + 
               SEGMENTS=ONE_SEG,                                       + 
               USERTKN=USER_TOKEN,                                     + 
               ORIGIN=VIRT64_ADDR                                                       
         LG    4,VIRT64_ADDR       Get address of memory obj             
         LHI   2,256               Set loop counter                      
LOOP     DS    0H                                                        
         MVC   0(10,4),=C'HI_MOM!   '  Store HI MOM!                     
         AHI   4,4096                                                    
         BRCT  2,LOOP                                                    
* Get rid of all memory objects created with this                        
* user token                                                             
         IARV64 REQUEST=DETACH,                                        + 
               MATCH=USERTOKEN,                                        + 
               USERTKN=USER_TOKEN,                                     + 
               COND=YES                                                  
*                                                                        
* Begin exit linkage                                                     
         LHI   0,DYNAREAL                                                
         LR    1,13                                                      
         STORAGE RELEASE,LENGTH=(0),ADDR=(1),SP=0,CALLRKY=YES            
         PR                                                              
* End exit linkage                                                       
@DATA    DS    0D                                      
ONE_SEG  DC    FD'1'                                   
USER_TOKEN DC  FD'1'                                   
         LTORG                                         
@DYNAREA DSECT                                         
SAVEAREA DS    36F                                     
VIRT64_ADDR DS AD                                      
DYNAREAL EQU   *-@DYNAREA                              
         END   DUNAJOB

COPYGRP can be used to copy a data set when either the input data set or the output data set, or both, are PDSE:

    PDSE to PDSE
    PDSE to PDS
    PDS to PDSE

COPYGROUP can be used to copy a data set when either the input data set or the output data set, or both, are PDS or PDSE:

    PDSE to PDSE
    PDSE to PDS
    PDS to PDSE
    PDS to PDS

f neither data set is a PDSE, the request is treated the as a COPY operation subject to the syntax requirements of COPYGRP.
When using the COPYGRP or COPYGROUP statement:

    All aliases in a group will be copied with the member or neither the aliases or the member in a group will be copied.
    There can be only one INDD per copy operation.
    You can use the SELECT statement to selectively copy members. Either the member name or an alias can be specified to copy the member and all of its aliases.
    Do not indicate replace (R) on the SELECT statement.
    The EXCLUDE statement is not supported.


The COPYGROUP statement has the same effect as the COPYGRP statement when either the input or the output data set or both are partitioned format, that is either PDS or PDSEs. The function of a COPYGROUP statement differs from COPYGRP only if both of the data sets are PDSs. COPYGROUP performs a full group copy operation when both data sets are PDSs. By contrast, a COPYGRP statement with two PDSs is the same as a COPY statement with those data sets.

To abbreviate a COPYGROUP statement, use CP. The abbreviation for COPYGRP remains CG.
When using the COPYGROUP statement:

    Member name pattern masking can be used, instead of a full member name specification, to select multiple member from the input data set.
    If member name pattern masking is used, the member rename option will not be honored


IEBCOPY is controlled by the utility control statements in Table 1.
Table 1. IEBCOPY utility control statements. The minor statements (SELECT or EXCLUDE) can follow each major statement to restrict the scope of the major statements.Statement 	Use
Major Statements
ALTERMOD 	Indicates the beginning of an alter-in-place operation for load modules.
COPY 	Indicates the beginning of a COPY operation.
COPYGRP 	Indicates the beginning of a COPYGRP operation.
COPYGROUP 	Indicates the beginning of a COPYGROUP operation.
COPYMOD 	Indicates the beginning of a copy and load module reblock operation.
INDD= 	Indicates the beginning of another copy step.
Minor Statements
EXCLUDE 	Specifies members in the input data set to be excluded from the copy step.
SELECT 	Specifies which members in the input data set are to be copied.

COPY will accept the first letter as an abbreviation for all its key words, except MINBLK. COPYMOD may be abbreviated CM. COPYGRP may be abbreviated CG. COPYGROUP may be abbreviated CP.

EXCLUDE
MEMBER=[(]name1[, name2][,...][)]
    specifies members on the input data set that are not to be copied, unloaded, or loaded to the output data set. When using COPYGROUP and a SELECT MEMBER statement that uses pattern masking has been provided, you can also provide a member pattern mask of members to be excluded from the input data set. The members are not deleted from the input data set.

The EXCLUDE statement specifies members to be excluded from the copy, unload, or load step. All members in the input data set except those specified on each EXCLUDE statement are included in the operation. More than one EXCLUDE statement may be used in succession, in which case, the second and subsequent statements are treated as a continuation of the first.

The EXCLUDE statement must follow either a COPY statement, an ALTERMOD, a COPYMOD statement, or one or more INDD= statements. An EXCLUDE statement cannot appear with a SELECT statement in the same copy, unload, or load step. The EXCLUDE statement cannot be used with a compress-in-place or COPYGRP.

When using COPYGROUP and a SELECT MEMBER statement that uses pattern masking has been provided, an EXCLUDE statement with member name pattern masking may also be specified. When EXCLUDE MEMBER pattern masking is specified, the members excluded from the COPYGROUP operation will be a subset of those members that were selected for inclusion by the SELECT MEMBER pattern mask or masks.

If neither SELECT nor EXCLUDE is specified, the entire data set is copied (a "full copy").

The syntax of the EXCLUDE statement is:
Label 	Statement 	Parameters

[label]
	

EXCLUDE
	

MEMBER=[(]name1[,name2][,...][)]
where:

MEMBER=[(]name1[, name2][,...][)]
    specifies members on the input data set that are not to be copied, unloaded, or loaded to the output data set. When using COPYGROUP and a SELECT MEMBER statement that uses pattern masking has been provided, you can also provide a member pattern mask of members to be excluded from the input data set. The members are not deleted from the input data set.

The values that can be coded are: 
name or filter pattern mask
    identifies a specific member to be processed. All names and new names specified in one copy step must be unique. You cannot duplicate either old names, or new names, or both, under any circumstances. You cannot specify a name that is more than eight characters in length.
    When using COPYGROUP and a SELECT statement that uses member name pattern masking, you can specify an EXCLUDE MEMBER= member pattern mask of members to be excluded from the input data set. The following rules and examples apply to member name filter pattern masking on the EXCLUDE statement:

        Pattern masking characters are asterisk (*) and percent sign (%).
        The asterisk character is used in the filter pattern mask to indicate that any characters within the member name that follow the pattern mask are acceptable.
        The percent character is used in the filter pattern mask to indicate that any character within the member name in a particular position is acceptable.
        The pattern must be part of a COPYGROUP operation where a SELECT statement that has specified MEMBER= with filter pattern masking is also specified.
        The pattern must be part of a EXCLUDE statement.
        Filtering will only be performed with primary member namesC:\MyDoc\Host\info_loadmod_browse.txt
Load Module Browse

AMBLIST is great, but it's a batch utility, and produces a lot of output. Sometimes I want information quickly, or something that AMBLIST can't give me. In this case, browse is my first choice.

That's right. ISPF browse. Sure, browsing a load module gives you gobbldy-gook that looks like this:

********************************* Top of Data ****************************
.Ø.....0MODLX001.......³IGZCBSO .......ØCEESTART...ì...^CEEBETBL........C
.Ø.....0CEEROOTA......  CEEROOTD......  IGZEOPT ......  IGZETUN ......  
.Ø.....{CEESG004......  CEESG006......  CEESG007......  CEESG008......  CE
Ø³........................................................................
Ø..5695PMB01 ....±..k.
Ø:.Ø..5655S7100 â...±..Ø..569623400 ....|PL/X-390  ....|..........Ø..56962
Ø.h....|.RSI10742265....|.RSI10742130
............ .¢ç...................^...Ø...½...µ...Y...ø...y...-....
å00..CEE...ø....å00.qóÐ....¶............°Ö}. .0.qÕ0<...............{...Þ..
.......Ö....................... ...à...ç...<...è...F...­...O..............
.......Ö............æ..&.......ø...Y.......D....ð..©....ð..0.......Ü....ð.
.......ì............ð.¢.....ð.¢.....ð.¢.....ð.¢.....ð.¢.....ð.¢.....ð.¢...
******************************** Bottom of Data **************************

But there's a lot to find out here. Straight away I can see that this is an Enterprise COBOL application program that uses Language Environment, and was bound using z/OS (not OS/390 or MVS/XA). How?

The first things you'll see in a load module are the External System Directories (ESDs) for internal and external references. In the above example, these are the first three lines. Here I can see a few Language Environment modules (they're the ones starting with CEE), so this is an application program (can't be a z/OS exit). I can also see some beginning with IGZ, which indicates COBOL. So this is a COBOL application. If you browse through the module (both up and down, and left to right), you'll see a few more of these references.

These references can tell you a lot about a module. For example, if you find some beginning with DFH = CICS application, L$C=SAS/C, DSN=DB2, EDC=XL C/C++.

With a bit more digging, we can find out more about the compiler. Take a look at the sixth line down (Ø:.Ø..5655S7100 â...±..Ø..). This includes the product code for Enterprise COBOL V4 (5655-S71), padded out with a couple of zeroes, and a space at the end. Every load module has records with information about that load module and the programs (or CSECTs) inside it. These records are called IDRDATA. The above line is a type of IDRDATA record called a Translator Record. Let's look at the hexadecimal for this line (using the ISPF HEX line command):

Ø:.Ø..5655S7100 â...±..Ø..
870800FFFFEFFFF44013800800
0A401056552710002035F02061

The first byte (‘x80') indicates that this is a CSECT identification record. The second shows the number of IDRDATA bytes in this record, and the third is x'04' (showing us that this is a subtype 4 record). If there are no more IDRDATA records, the high order bit of this third byte is set to 1, making it x'14'.

Subtype 4 records (Translator, or compiler records) show information about the compilers used for each CSECT in the module. They include the compiler identification (10 characters, padded with spaces) followed by the version and release, and finally the compile date as a Julian date (yyddd) in packed decimal. So in our example, the Enterprise COBOL version is 4.2 (42), no release (it is zero), and was compiled on the date 13358F (Day 358 in 2013: 24-Dec-2013). Longpela Expertise has a Julian date converter tool at http://www.longpelaexpertise.com.au/toolsJulian.php to make working with Julian dates easier.

Other compiler identification strings you may find include:

    z/OS product ID (e.g. 5650ZOS, 5694A01, 5647A01) – IBM XL C/C++
    5655G5300– Enterprise COBOL V3
    5648A2500 – COBOL for OS/390 and VM V2
    566895801 – COBOL II
    5655-H31 – Enterprise PL/I V3
    5655-B22 – VisualAge PL/I V2
    569623400 – High Level Assembler
    PL/X-390 – IBMs internal PL/X language
    SAS/C – SAS/C

You can see a more comprehensive list at the GSF-Soft website

This sounds excellent – you can quickly find out the language used. But it's not that simple. Translator records show compilers for ALL CSECTs in the module. Most application program modules will include several other CSECTs from Language Environment, IMS, CICS, DB2 and others. So you'll see the compilers used for all of these modules as well as the original program. Fortunately, these included CSECTs are almost always assembler or PL/X, with the occasional C/C++ or SAS/C. So if you see the PL/1 product code, it's probably a PL/1 program.

You could manually decipher these records to find out the compiler for each CSECT. But that's a lot of hard work. AMBLIST is a much better option. Here's the AMBLIST for our CSECT in the above module:

           CONTROL SECTION:  MODLX001
===== IDRL =====
          TRANSLATOR   VER   MOD     DATE        TIME
          5655S7100     42    00    12/24/2013.

Let's take a look at the line before to our Translator record: Ø..5695PMB01 ....±..k.

This is an IDRDATA Subtype 2 (Binder) record. Again, we'll use the ISPF HEX command to get the hexadecimal values for this record:

Ø..5695PMB01 ....±..k.
810FFFFDDCFF4011380392
05256957420101335F132F

Straight away we can see the string 5695PMB01, which is the product ID of the product that translated/bound/link-edited it. In our case, this is 5695-PMB01 (with a space at the end to pad it out to 10 characters): the z/OS Binder. Programs bound using the old link-editor will have something like 5695DF108 (DFSMS/MVS), 566529508 (DFP/370) or 566528408 (DFP/XA).

The full format of the record is:

Char 1: Record Type (x'80' = CSECT Identification Record)
Char 2: Number of bytes
Char 3: Format or subtype (x'02')
Char 4-13: Program ID of binder/link-editor/translator
Char 14 – Binder version (x'01')
Char 15 – Binder release (x'13')
Char 16-18 – Date module was bound

I often want to find out when a module was bound, so characters 16-18 are gold. These show the date in packed decimal Julian format. In our example, this is 13358F: 24-Dec-2013.

You may also see another packed decimal number in characters 19-23. This is the time the module was bound in packed decimal hhmmss (hour/minute/second) format. So in our example, it was bound at 0133922F (13:39:22 UTC). Older modules won't include this timestamp.

Again, AMBLIST provides this information as well. Here's the AMBLIST output for the above module:

THIS PROGRAM OBJECT WAS ORIGINALLY PRODUCED BY 5695PMB01 AT LEVEL 01.13 ON
12/24/2013 AT 13:39:22

You can see the format of load modules in the IBM z/OS Program Management: Advanced Facilities manual.

All this is great providing you're look at load modules in a PDS. And today, this is still most of them. However these older modules are slowly being replaced with a new type: Program Objects.
PDSE Browse

Program Objects were introduced in OS/390 1.1, and can be thought of as load modules on steroids. They get around a lot of the limitations of load modules, but are only stored in PDSEs or z/OS UNIX directories. So instantly we know that any modules in z/OS UNIX directories or PDSEs are Program Objects.

Unlike load modules, IBM has stated that it won't publish the format of Program Objects, and in fact there are already several different Program Object formats, with more undoubtedly on the way. So to find out information, we should use AMBLIST (or if from a program, the z/OS Binder API). However if we just want to quickly find information about a Program Object, we can still find it out from browsing. Below shows the browse of the same module above, but copied into a PDSE:

********************************* Top of Data ****************************
IEWPLMH ...Ì......µ............Ì...........ð...........m...h..............
å00..CEE...ø....å00.qóÐ....¶............°Ö}. .0.qÕ0<...............{...Þ..
K..£{.K..Mw&K..\wüK..YveK..8v¨K...v.ì jìk/áük/áÿk:áUk:áXk:á²K.áÒw.K.á5w.K
Jyw¹K..8Jym..8o..³³ .Çs¥8à.Ç.ÇnY..åØ£;ì.j-N..­swåØ£àn1..åø£;2.Jµ.øo.Jt³.Jµ
J^ &..&&J©& J½ &Ø.&&J¯& J{  ..& JDP.JHJHì }}& K.K.K.µdP.K.K. .Jµì0.ì.Õ&0J.
åØ£.n.BÞåØ£Då0£..Ýì.}.ì.}.ì. ..mì0§..Õ.é.ñì0}<å0£óì.B4.Ýì.}.ì.}.ì. ..mì\..
5695PMB01 .....±..k...¢ç..
.................SDSD................Ø...Ø.......Ø..............³.........
.........................ERERL............ØØ.Ø...Ø........................
............................L..............................\SØ.À..........
******************************** Bottom of Data **************************

It looks different, but things aren't so bad. For starters, can still see our trusty Binder IDRDATA in the seventh row (without the x'801502' at the beginning):

5695PMB01 .....±..k...¢ç..
FFFFDDCFF40121380392004400
569574201013035F132F00A800

Same format, except this has a 4 digit year (201358F). Browse through the module (up and down, left and right) and we can see our CEE* and IGZ* external references:

********************************* Top of Data ****************************
..........................................................................
. .......Y. .......u.{.......: ....¢{.. .......6. .......:.........ð.°...
-n ..åØ].9 .&{.ì^{.å}^Ü ...KtJµt•&.JÐ ...&.J^  ..& J©&.J½ì&}8  &.& J¯&.J{ 
.K..{w?ì jÈk. Ik. •ìØjÀ.Øµ°ì.µ&&.Ø.K. ÈwEì0  .¬n. Iåø]È ...&.jÀ.É  ..KtJµt
..........................................................................
......................Ú...................................................
..................Ø...Ø..........Ü....................Ø...Ø...............
......ERWXM...................Ø.......Ø...................................
H..MODLX001À..MODLX001À..IGZCBSOÀ..CEESTARTÀ..CEEBETBLÀ..CEELOCTÀ..CEESG00
..........................................................................
******************************** Bottom of Data **************************

The compiler IDRDATA record is also there, but takes some finding. If we search on 5655S7100, we can see it:

********************************* Top of Data ****************************
....¢ç......f0...y...........ð........MODLX001.....{......¢ç.............
3320131224133922040200.È.....%â²>..a..K...a. &....Ø Ø....Ý...H.àØ.    ..MO
K...w.&...&...&...K...w.&.. k..çk..&&..ìK..-v.K.J µ.j °ïå.£Üj.°èå\£4o.}do 
N..­swåø•oì^{.  £h& Jàå0[êì^{.å0•onY..åØ¥ ì.j-K..­w[³ . s¥8à. . K.J^. m.J^
J©&&J½ .Ø.&.J¯&&J{ &. &&JDP.JHJHK.K.µd&-K.P.K.K. .Jµì0.ì.Õ&0J. .ø. ... \Ø.
&}\.ì}aÐì0§..Õì.a^o.{.ì}..å0£bì0§..Õ.é.ñ \...Úåø£¯.håØ£Þj.Ø.åØ£Þì°aÐì\°.ì0
    5655S7100 â....±569623400 .....|PL/X-390  .....|569623400 ....."569623
...........Ø.......Ø.......................................LDLDM....Ø.....
...............Ø...Ø.......Ø..............*......ñ\................ED  ...
..................... S..À............................X...................
******************************** Bottom of Data **************************

Conclusion

There are several products and freeware that can also be used to find information about load modules and program objects. ISPF productivity tools such as IBM ISPF Productivity Tool, Serena Startool DA and IBM FileManager show information similar to that from AMBLIST, but without the batch job. Other products such as the Edge Portfolio Analyzer, Prince Load Analyzer and the Load Module Analyzer component of IBM Debug Tool go further, showing compiler options used.

These products are great for finding information about load modules and program objects, as is the standard IBM AMBLIST batch utility. But if you don't have them, or don't want to submit batch jobs, a simple ISPF Browse can quickly tell you a lot about a load module or program object.MVS Historical Linkage Convention

The current calling conventions for High Level Languages (HLLs) on OS/390 are
an outgrowth of the original OS/360 Assembler Language conventions first
introduced in 1964. These conventions specify that, on entry to a subroutine:
• Register 13 points to an 18-word save area aligned on a full word boundary
• Register 14 points to a return point in the calling routine
• Register 15 contains the entry point address of the routine being called
• Register 1 points to a list of addresses, each being the address of an actual
argument (specified in order) and the last, only, having its high-order bit on
Called subroutines are responsible for saving and restoring any General Purpose
Registers (GPRs) they might alter in well-defined locations in the save area
provided by the caller. Furthermore, a called routine that makes further calls must
acquire a save area of its own to provide to any routine it might call. In this case,
the called function is responsible for linking the two save areas together in a
doubly-linked list: the address of the caller-provided save area being stored at
offset 4 in the newly-acquired save area (this is called the back chain) and the
address of the newly-acquired save area being stored at offset 8 in the
caller-provided save area (the forward chain).
These conventions are described in more detail in OS/390 V2R9.0 MVS
Assembler Services Guide, GC28-1762, found at:
http://ibm.com/s390/bookmgr-cgi/bookmgr.exe/BOOKS/IEA1A620/2.0
In an environment that requires recursion or reentrancy, this convention requires
that routines dynamically acquire (via GETMAIN) save areas and storage for
local variables at some cost in performance. In the late 1960s HLLs began to
overcome this cost by acquiring a large block of storage (the Stack Segment or
Initial Stack Allocation (ISA)) at initialization and carving out space for save areas
and local variables (together called the Dynamic Storage Area (DSA) or stack
frame) from this block at the beginning of each routine.

#####

XPLink has new register conventions: instead of GPR 13 pointing to the current
stack frame (or caller’s stack frame on entry), GPR 4 is used. There are other
register conventions: GPR 5 points to the called function’s environment (its own
part of the Writeable Static Area); GPR 6 is used, where required, as the entry
point of the called function; and GPR 7 is the return address. Furthermore, GPR 4, 
instead of pointing directly to the stack frame, points to 2K bytes before the
stack frame. This allows function prologs to store into their own stack frame (this
is the instruction that checks for stack overflow) prior to updating GPR 4,
providing for a faster-executing instruction stream.
2.3.1.5 Register saving conventions
In today’s linkage conventions the GPRs used by a function are saved in a save
area provided by the caller. In XPLink, these registers are saved in the called
function’s own stack frame, the first 12 words being reserved for saving GPRs 4
to 15 as required.
As with current conventions, the XPLink conventions do not set aside areas to
store floating point or access registers. These registers, if used, are saved in
areas carved out of the called function’s own automatic storage.

Argument passing conventions
The second significant change introduced with XPLink is its argument-passing
conventions. The two significant changes are:
1. The argument list is constructed in a fixed location, called the Argument Area,
in the caller’s stack frame.
2. Some arguments are passed in registers instead of in the argument area.
2.3.3.1 The Argument Area
Current conventions specify that on entry to a function GPR 1 contain the
address of the function’s parameter list in storage. This may be a by-reference or
by-value list. In the former case GPR 1 points to a list of 4-byte addresses, the
first being the address of the first actual argument, the second being the address
of the second, and so on up to the last address which, in addition to pointing to
the last actual argument, has its high-order bit turned on.
In the latter case, GPR 1 points to a list of actual argument values arranged in
contiguous locations in storage. Some of these may be addresses, of course; the
application is free to pass pointers as arguments or, in the case of C++, reference
parameters indicated in the function prototype by an ampersand (&). There is no
mechanism for indicating the last argument with by-value parameter passing.



#####


