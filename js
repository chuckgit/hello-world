javascript:alert("Actual URL address: " + location.protocol + "//" + location.hostname + "/");

or

javascript:alert("The actual URL is:\t\t" + location.protocol + "//" + location.hostname + "/" + "\nThe address
URL is:\t" + location.href + "\n" + "\nIf the server names do not match, this may be a spoof.");


<!-- TWO STEPS TO INSTALL HIGH-TECH CALCULATOR:



  1.  Copy the coding into the HEAD of your HTML document

  2.  Add the last code into the BODY of your HTML document  -->



<!-- STEP ONE: Paste this code into the HEAD of your HTML document  -->



<HEAD>



<SCRIPT LANGUAGE="JavaScript">



<!-- This script and many more are available free online at -->

<!-- The JavaScript Source!! http://javascript.internet.com -->

<!-- Original:  Kenny Aral (OggyK22@mail.com ) -->

<!-- Web Site:  http://www.geocities.com/trex919/ -->

<!-- Begin

function DOit() {

var userinput = document.calc.input.value;

document.calc.input.value = eval(userinput);

}

function plus() {

document.calc.input.value += '+';

}

function minus() {

document.calc.input.value += '-';

}

function mult() {

document.calc.input.value += '*';

}

function div() {

document.calc.input.value += '/';

}

function decimal() {

document.calc.input.value += '.';

}

function openp() {

document.calc.input.value += '(';

}

function closep() {

document.calc.input.value += ')';

}

function num(x) {

document.calc.input.value += x;

}

function recip() {

document.calc.input.value = 1/(document.calc.input.value);

}

function square() {

document.calc.input.value = (document.calc.input.value)*(document.calc.input.value);

}

function cube() {

document.calc.input.value =
(document.calc.input.value)*(document.calc.input.value)*(document.calc.input.value);

}

function pi() {

document.calc.input.value += Math.PI;

}

function plus_or_minus() {

document.calc.input.value *= -1;

}

function percent() {

document.calc.input.value *= .01;

}

function sqrt() {

document.calc.input.value = Math.sqrt(document.calc.input.value);

}

function power() {

var np = prompt("What power do you want? Must be a number!","")

document.calc.input.value = Math.pow(document.calc.input.value, np);

}

function cos() {

document.calc.input.value = Math.cos(document.calc.input.value);

}

function sin() {

document.calc.input.value = Math.sin(document.calc.input.value);

}

function tan() {

document.calc.input.value = Math.tan(document.calc.input.value);

}

function Round() {

document.calc.input.value = parseInt(document.calc.input.value);

}

//  End -->

</script>



</HEAD>



<!-- STEP TWO: Copy this code into the BODY of your HTML document  -->



<BODY>



<FORM NAME="calc">

<TABLE>

<BR><TABLE WIDTH="55" HEIGHT="65" CELLSPACING="2" CELLPADDING="5" BORDER="1">

<tr>

<td><INPUT TYPE="text" NAME="input" SIZE="20" MAXLENGTH="30" class="disp">

<td><INPUT TYPE="button" VALUE="  ^  " onClick="power()" class="btswhite">

<td><INPUT TYPE="button" VALUE="  C  " onClick="document.calc.input.value = ''; " class="btswhite">

<td><INPUT TYPE="button" VALUE="Cos" onClick="cos()" class="btsred">

</tr>

<tr>

<td><INPUT TYPE="button" Value="  1  " class="btsblue" onClick="num(1)">

<INPUT TYPE="button" VALUE="  2  " class="btsblue" onClick="num(2)">

<INPUT TYPE="button" VALUE="  3  " class="btsblue" onClick="num(3)">

<INPUT TYPE="button" VALUE="  (   " class="btswhite" onClick="openp()">

<td><INPUT TYPE="button" VALUE="  +  " onClick="plus()" class="btswhite">

<td><INPUT TYPE="button" VALUE="sqrt" onClick="sqrt()" class="btsred">

<td><INPUT TYPE="button" VALUE="Sin " onClick="sin()" class="btsred">

</tr>

<tr>

<td><INPUT TYPE="button" Value="  4  " class="btsblue" onClick="num(4)">

<INPUT TYPE="button" Value="  5  " class="btsblue" onClick="num(5)">

<INPUT TYPE="button" Value="  6  " class="btsblue" onClick="num(6)">

<INPUT TYPE="button" NAME="closeprth" Value="   )  " class="btswhite" onClick="closep()">

<td><INPUT TYPE="button" VALUE="  -   " onClick="minus()" class="btswhite">

<td><INPUT TYPE="button" Value=" 1/x" class="btsred"  onClick="recip()">

<td><INPUT TYPE="button" VALUE="Tan" onClick="tan()" class="btsred">

</tr>

<tr>

<td><INPUT TYPE="button" Value="  7  " class="btsblue" onClick="num(7)">

<INPUT TYPE="button" Value="  8  " class="btsblue" onClick="num(8)">

<INPUT TYPE="button" Value="  9  " class="btsblue" onClick="num(9)">

<INPUT TYPE="button" VALUE="  % " onClick="percent()" class="btswhite">

<td><INPUT TYPE="button" VALUE="  *   " onClick="mult()" class="btswhite">

<td><button style="background: #999999; color: #FF0000; font-weight: bold" onClick="square()">  x<sup>2</sup>
</button>

<td><INPUT TYPE="button" VALUE="Rnd" onClick="Round()" class="btsred">

</tr>

<tr>

<td><INPUT TYPE="button" Value="  0  " class="btsblue" onClick="num(0)">

<INPUT TYPE="button" Value="  .   " class="btsblue" onClick="decimal()">

<INPUT TYPE="button" VALUE=" +/- " onClick="plus_or_minus()" class="btsblue">

<INPUT TYPE="button" Value=" Pi " class="btsblue" onClick="pi()">

<td><INPUT TYPE="button" VALUE="  /   " onClick="div()" class="btswhite">

<td><button style="background: #999999; color: #FF0000; font-weight: bold" onClick="cube()">  x<sup>3</sup>
</button>

<td><INPUT TYPE="button" VALUE="  =  " onClick="DOit()" class="btsred">

</tr>

</TABLE>

</TABLE>

</FORM>



<p><center>

<font face="arial, helvetica" size"-2">Free JavaScripts provided<br>

by <a href="http://javascriptsource.com">The JavaScript Source</a></font>

</center><p>



<!-- Script Size:  5.62 KB --><meta charset="utf-8"> <title>Minimal Example</title>
 
<h1 id="header">This is JavaScript</h1>
 
<script> document.body.appendChild(document.createTextNode('Hello World!'));
 
    var h1 = document.getElementById('header'); // holds a reference to the <h1> tag h1 =
	document.getElementsByTagName('h1')[0]; // accessing the same <h1> element </script>
 
<noscript>Your browser either does not support JavaScript, or has it turned off.</noscript> <table border="0"
cellpadding="0" cellspacing="0"> <tr> <td class="HeaderTopNavLeft" nowrap width="10"></td> <td
class="HeaderTopNavCenter" nowrap align="right"><p>&nbsp;<a
href="javascript:"onclick="javascript:this.style.behavior='url(#default#homepage)';this.setHomePage('http://www
.tacktech.com')" title="Set your home page to TACKtech.com.">Make Homepage</a>&nbsp;|&nbsp;<a
href="javascript:" onclick="window.external.AddFavorite('http://www.tacktech.com','TACKtech Corp.')" title="Add
TACKtech to your Favorites.">Add To Favorites</a>&nbsp;|&nbsp;<a href="javascript:window.print()" title="Print
the current page.">Print Page</a>&nbsp;|&nbsp;<a href="submitnews.cfm" title="Submit News to TACKtech
Corp.">Submit News</a>&nbsp;|&nbsp;<a href="feedback.cfm" title="Submit feedback to
TACKtech.">Feedback</a>&nbsp;|&nbsp;<a href="contact.cfm" title="Contact TACKtech
Corp.">Contact</a>&nbsp;|&nbsp;</p></td> <td nowrap align="right"><span class="rssbox"><a
href="display.cfm?ttid=278" title="View available TACKtech RSS Feeds"
style="text-decoration:none;"></a></span></td> <td class="HeaderTopNavRight" nowrap width="5"></td> </tr>
</table>function createRequest() { var result = null; if (window.XMLHttpRequest) { // FireFox, Safari, etc.
result = new XMLHttpRequest(); if (typeof xmlhttp.overrideMimeType != 'undefined') {
result.overrideMimeType('text/xml'); // Or anything else } } else if (window.ActiveXObject) { // MSIE result =
new ActiveXObject("Microsoft.XMLHTTP"); } else { // No known mechanism -- consider aborting the application }
return result; }

var req = createRequest(); // defined above // Create the callback: req.onreadystatechange = function() { if
(req.readyState != 4) return; // Not there yet if (req.status != 200) { // Handle request failure here...
return; } // Request successful, read the response var resp = req.responseText; // ... and use it as needed by
your app. }

req.open("POST", url, true); req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(form-encoded request body);//************************************************** // File:    RunDOS.js
(WSH sample in JScript) // Author:  (c) G. Born // // Executing an MS-DOS command using the Run method
//**************************************************

var command, dos_command, option

// Get WshShell object. var WshShell = WScript.CreateObject("WScript.Shell");

// Create a command to show the contents of // the Windows folder. // Subcommand to call the command processor
// Tip: Using the environment variable %COMSPEC% ensures that // the script runs in Windows 95 and Windows 98
and in Windows NT // and Windows 2000 because %COMSPEC% contains the name and path // of the command processor.
command = "%COMSPEC% /k ";

// Here comes the MS-DOS command. dos_command = "dir " + "%WINDIR%";

// You can append other options: // | more    forces a page-oriented display // > PRN:    redirection to
printer // > Dir.inc redirection into file // option = "| more";   // Use page-oriented display.

// Execute command. WshShell.Run(command + dos_command + option);

//*** End

<TABLE ID="oTable" BORDER BGCOLOR="lightslategray"> <TBODY ID="oTBody0"></TBODY> <TBODY ID="oTBody1"></TBODY>
</TABLE>

<SCRIPT LANGUAGE="JScript"> // Declare variables and create the header, footer, and caption. var oTHead =
oTable.createTHead(); var oTFoot = oTable.createTFoot(); var oCaption = oTable.createCaption(); var oRow,
oCell; var i, j;

// Declare stock data that would normally be retrieved from a stock Web site. var heading = new Array;

heading[0] = "Stock symbol"; heading[1] = "High"; heading[2] = "Low"; heading[3] = "Close";

var stock = new Array;

stock["0,0"] = "ABCD"; stock["0,1"] = "88.625"; stock["0,2"] = "85.50"; stock["0,3"] = "85.81";

stock["1,0"] = "EFGH"; stock["1,1"] = "102.75"; stock["1,2"] = "97.50"; stock["1,3"] = "100.063";

stock["2,0"] = "IJKL"; stock["2,1"] = "56.125"; stock["2,2"] = "54.50"; stock["2,3"] = "55.688";

stock["3,0"] = "MNOP"; stock["3,1"] = "71.75"; stock["3,2"] = "69.00"; stock["3,3"] = "69.00";

// Insert a row into the header. oRow = oTHead.insertRow(); oTHead.bgColor = "lightskyblue";

// Insert cells into the header row. for (i=0; i<4; i++) { oCell = oRow.insertCell(); oCell.align = "center";
oCell.style.fontWeight = "bold"; oCell.innerText = heading[i]; }

// Insert rows and cells into the first body. for (i=0; i<2; i++) { oRow = oTBody0.insertRow(); for (j=0; j<4;
j++) { oCell = oRow.insertCell(); oCell.innerText = stock[i + "," + j]; } }

// Set the background color of the first body. oTBody0.bgColor = "lemonchiffon";

// Insert rows and cells into the second body. for (i=2; i<4; i++) { oRow = oTBody1.insertRow(); for (j=0; j<4;
j++) { oCell = oRow.insertCell(); oCell.innerText = stock[i + "," + j]; } }

// Set the background color of the second body. oTBody1.bgColor = "goldenrod";

// Insert rows and cells into the footer row. oRow = oTFoot.insertRow(); oCell = oRow.insertCell();
oCell.innerText = "Quotes are for example only."; oCell.colSpan = "4"; oCell.bgColor = "lightskyblue";

// Set the innerText of the caption and position it at the bottom of the table. oCaption.innerText = "Created
using Table Object Model." oCaption.style.fontSize = "10"; oCaption.align = "bottom"; </SCRIPT><!DOCTYPE HTML
PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"> <HTML>

<HEAD> <META http-equiv="Content-Type" content="text/html; charset=iso-8859-1"> <TITLE>TextPad General
	FAQ</TITLE> <META name=DESCRIPTION content="TextPad General FAQ"> <META name=KEYWORDS content="TextPad,
	FAQ, support, Java"> <META http-equiv="Content-Style-Type" content="text/css">

	<SCRIPT type="text/javascript" language="JavaScript"> <!-- /* Style sheet link for brain dead IE3 */ if
	(navigator.userAgent.indexOf('IE 3.0')!=-1) document.write('<LINK rel="stylesheet" type="text/css"
	href="/style/ie3.css">'); // --> </SCRIPT> <SCRIPT type="text/javascript" language="JavaScript"
	src="/clientscripts/common.js"></SCRIPT> </HEAD>

<BODY background="/img/toolbar/support/bg.gif" bgcolor="#FFFFFF" text="#000000" link="#003399" alink="#00FF00"
vlink="#800080">

<!-- ============================== JavaScript ================================= --> <SCRIPT
TYPE="text/javascript" LANGUAGE="JavaScript"> <!-- function ShowAns(X) { if (isBrowser.ie5up ||
isBrowser.nav6up) { var topic = document.getElementById(X + "_ans"); if (topic.className=="hidden") {
topic.className = "visible"; topic = document.getElementById(X); topic.src = "/img/icons/minus.gif"; topic.alt
= "-"; topic.title = "Hide answer"; } else { topic.className = "hidden"; topic = document.getElementById(X);
topic.src = "/img/icons/plus.gif"; topic.alt = "+"; topic.title = "Show answer"; } } } //--> </SCRIPT>

<!-- ============================== Navigation ================================= -->

<TABLE border=0 cellpadding=0 cellspacing=0 width=600 summary="Navigation elements"> <TR> <!-- Top navigation
bar --> <TD height=61 width=600> <TABLE border=0 cellpadding=0 cellspacing=0 width=600 summary="Top navigation
bar"> <TR> <TD bgcolor="#ffffcc" colspan=4 height=1 width=600><IMG border=0 height=1 hspace=0
src="/img/pixel/pixel.gif" alt="" width=600></TD></TR> <TR> <TD bgcolor="#336699" height=58 width=1><IMG
border=0 height=58 hspace=0 src="/img/pixel/pixel.gif" alt="" width=1></TD> <TD bgcolor="#3399cc" height=58
width=1><IMG border=0 height=58 hspace=0 src="/img/pixel/pixel.gif" alt="" width=1></TD> <TD bgcolor="#ffffcc"
height=58 valign="top" width=180><A href="../../index.html"><IMG alt="TextPad" border=0 height=58 hspace=0
src="/img/toolbar/mainlogo.gif" width=180></A></TD> <!-- Top navigation bar --> <TD class="topNav" height=58
width=418 bgcolor="#ffffcc" align="right"> <A href="/cgi-bin/search.cgi" target="_top" class="nav">Search</A>
&nbsp;|&nbsp; <A href="../../contact/index.html" class="nav">Contacts</A> &nbsp;|&nbsp; <A
href="../../index.html" class="nav">Home</A> &nbsp;&nbsp; </TD> </TR> <TR> <TD bgcolor="#3399cc" colspan=4
height=1 width=600><IMG border=0 height=1 hspace=0 src="/img/pixel/pixel.gif" alt="" width=600></TD></TR> <TR>
<TD bgcolor="#336699" colspan=4 height=1 width=600><IMG border=0 height=1 hspace=0 src="/img/pixel/pixel.gif"
alt="" width=600></TD></TR> </TABLE> </TD> </TR> <TR> <!-- Main navigation bar --> <TD height=18 width=600>
<TABLE class="navbar" cellpadding=0 cellspacing=0 width=600 summary="Main navigation bar"> <TR
bgcolor="#ffcc00"> <TD class="navbar" width=29 nowrap> <IMG class="navbar" width=29 height=17
src="/img/pixel/pixel.gif" alt=""></TD> <TD class="navbar" width=92 nowrap> <A href="../../news/index.html"
class="nav">What's&nbsp;New</A></TD> <TD class="navbar" width=123 nowrap> <A href="../../about/index.html"
class="nav">About&nbsp;TextPad</A></TD> <TD class="navbarA" width=77 nowrap> <A href="../../support/index.html"
class="nav">Support</A></TD> <TD class="navbar" align="center" width=99 nowrap> <A
href="../../download/index.html" class="nav">Download</A></TD> <TD class="navbar" align="center" width=60
nowrap> <A href="../../order/index.html" class="nav">Buy</A></TD> <TD class="navbar" align="center" width=75
nowrap> <A href="../../add-ons/index.html" class="nav">Add-ons</A></TD> <TD class="navbarR" width=29 nowrap>
<IMG class="navbarR" width=29 height=17 src="/img/pixel/pixel.gif" alt=""></TD> </TR> <TR> <TD
bgcolor="#ffffff" colspan=8 height=1 width=600 nowrap> <IMG border=0 height=1 hspace=0
src="/img/pixel/pixel.gif" alt="" width=600></TD> </TR> </TABLE> </TD> </TR> </TABLE>

<!-- Local navigation bar --> <DIV class="title1">support</DIV> <DIV class="localNav"> <A
href="../../support/index.html" class="nav">Feedback</A> &nbsp;|&nbsp; <SPAN class="localNavA">FAQ</SPAN>
&nbsp;|&nbsp; <A href="../../support/tips/index.html" class="nav">Tips</A> &nbsp;|&nbsp; <A
href="../../support/relnotes.html" class="nav">Release&nbsp;Notes</A> &nbsp;|&nbsp; <A
href="/cgi-bin/maillist.cgi" class="nav">Mailing List</A> &nbsp;|&nbsp; <A href="/forum/index.php"
class="nav">Forums</A> </DIV> <P style="height:14px">&nbsp;</P>

<!-- ============================ Page contents ================================ -->

<!-- No width for DIV in IE3, so use TABLE --> <TABLE width=550 border=0 cellpadding=0 cellspacing=0
summary="Layout"> <TR> <!-- No margin for TABLE in Nav4, so insert a spacer column --> <TD width=70><IMG
border=0 hspace=0 src="/img/pixel/pixel.gif" alt="" width=70></TD>

	<TD> <!-- Main content start --> <DIV class="title2">frequently asked questions:</DIV> <DIV class="subNav">
		<SPAN class="subNavA">General</SPAN> &nbsp;|&nbsp; <A href="./config.html"
		class="nav">Configuration</A> &nbsp;|&nbsp; <A href="./java.html" class="nav">Java</A> &nbsp;|&nbsp; <A
		href="./printing.html" class="nav">Printing</A> </DIV> <P style="height:14px">&nbsp;</P>

		<TABLE width=480 class="FAQquest"> <TR> <TH class="FAQquest"><img id="FAQ01" src="/img/icons/plus.gif"
			width=9 height=9 alt="+" title="Show answer" onClick="ShowAns('FAQ01')"> <A
			href="javascript:ShowAns('FAQ01')">When I save a file as <I>name.ext</I>, why is it saved as
			<I>name.ext.txt</I>?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ01_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>This is due to the way Microsoft implemented the Save As dialog
				box: If you supply an extension it doesn't recognize (including none), it either appends the
				default extension, if the filter is "*.*", or the first extension in the list for the selected
				filter. This behavior is designed to enforce the strong association between extensions and
				applications in Windows, but it does get in the way at times. One of the most irritating
				aspects of this is that it can create files with names like FILE.XYZ.TXT, when you type
				FILE.XYZ.</P>

								<H4>Solution:</H4>

								<P>To allow a file to be saved with an arbitrary extension, delete the default
							extension from the File page of the Preferences dialog box, and select "*.*" from
							the "Save as Type" list on the Save As dialog box. Alternatively, you can force it
							to accept exactly what you type by putting quotes around the name.</P> </TD> </TR>
							</TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ02" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ02')"> <A href="javascript:ShowAns('FAQ02')">How do I
				close the DOS window if it does not close after I have chosen "Close DOS window on exit" for my
				tools?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ02_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>Please extract the file, <A
				href="ftp://ftp.textpad.com/pub/addons/utilities/default.zip"> "_default.pif"</A> (242 bytes),
				in your "Windows" directory.  The important setting it has is "Close on exit".  You can change
				this by right clicking "_default.pif" in explorer, selecting the "Program" tab and ticking the
				option "Close on exit", then click OK.</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ03" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ03')"> <A href="javascript:ShowAns('FAQ03')">Why
				doesn't the online help work?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ03_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>Please note that the online help in TextPad 4.x requires
				Microsoft's HTML Help Engine. If you have Windows 95, NT 3.51 or NT 4 prior to Service Pack 4,
				please download and install this self-extracting TextPad help file, which uses the old Windows
				Help Engine:</P> <P><A
				href="http://download.textpad.com/download/files/txpwinhelp.exe">TXPWINHELP.EXE</A> (English
				only).</P> <P>Alternatively, except for NT 3.51, you may install <A
				href="http://www.microsoft.com/windows/ie/">Internet Explorer</A>, and then run Microsoft's <A
				href="http://msdn.microsoft.com/library/en-us/htmlhelp/html/hhupd.exe">HHUPD.EXE</A>
				(705KB).</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ04" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ04')"> <A href="javascript:ShowAns('FAQ04')">I have
				installed the Windows Help file but it does not work?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ04_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>Please try removing or renaming the file Txpad???.chm in the System
				subfolder of TextPad.  Then please check you have the correct version of the help file for
				TextPad 4.4. Download and install it from here:</P> <P>&nbsp;<A
				HREF="http://download.textpad.com/download/files/txpwinhelp.exe">Windows Help for TextPad
				4.4</A></P> <P>This is only available in English.</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ05" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ05')"> <A href="javascript:ShowAns('FAQ05')">Why are
				Japanese characters displayed incorrectly?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ05_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>First, you must install operating system support for Japanese,
				using Regional Applets on Control Panel.  (This is not supported on Windows 9x and ME.)
				Secondly, you must set the font script to Japanese, for all relevant document classes. A
				suitable font is MS Mincho.</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ06" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ06')"> <A href="javascript:ShowAns('FAQ06')">Why am I
				not licensed to use TextPad?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ06_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>Please <A href="../../order/upgrades.html">click here</A> for
				information about license upgrades.</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ07" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ07')"> <A href="javascript:ShowAns('FAQ07')">Is
				TextPad Year 2000 Compliant?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ07_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>Yes. Please <A href="../../about/year2000.html">click here</A> for
				details.</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ08" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ08')"> <A href="javascript:ShowAns('FAQ08')">Why does
				Shift+Backspace type a block character?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ08_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>The Shift+Backspace problem occurs with certain combinations of
				keystroke compatibility and customizations, if they are carried over from TextPad 3.2.5.  It
				can be fixed as follows:</P> <OL> <LI>From the Configure menu, choose Preferences. <LI>Select
				"Keyboard". <LI>From the list of Categories, choose Edit. <LI>From the list of Commands, choose
				EditBackspace. <LI>Type Shift+Backspace in the shortcut box. <LI>Click Apply. <LI>Click OK.
				</OL> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ09" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ09')"> <A href="javascript:ShowAns('FAQ09')">Where is
				the 16-bit edition of TextPad 4?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ09_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>We have no plans for a 16-bit edition of TextPad 4.0, as of
				mid-1999. Our justification is based on the following argument:</P> <OL> <LI>Our web site
				statistics show that the ratio of downloads of the 32-bit edition over the 16-bit edition is
				greater than 50 to 1, and increasing. <LI>The effort required to implement new functionality in
				the 16-bit edition is much greater than for the 32-bit edition. <LI>A new PC, capable of
				running Windows 98, probably costs less than half that paid for a PC still running Windows 3.1,
				and is capable of running at least 5 times as fast. <LI>Most businesses write off PCs after 3
				years, and Windows 95 is 4 years old. <LI>If Windows 3.1 still satisfies requirements, why
				doesn't TextPad 3? </OL> <P>Fairly crude economics, but an unfortunate fact of life!</P>
				<P>TextPad 3.2.5 can still be downloaded from <A href="../../download/ver3.html">here</A>.</P>
				</TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ10" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ10')"> <A href="javascript:ShowAns('FAQ10')">Why does
				the setup program run so slowly?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ10_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>InstallShield sends DDE messages, which can be blocked by
				applications such as MS Outlook and Lotus Notes.  Exit from all applications, before installing
				TextPad.</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ11" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ11')"> <A href="javascript:ShowAns('FAQ11')">Why, when
				I double click on a file in Explorer, does it take several seconds for TextPad to start
				up?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ11_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>You are probably running either Outlook or Lotus Notes in corporate
				or workgroup mode.  These block DDE messages.  One solution is to run Outlook in Internet mode.
				Alternatively, make your associations without using DDE as follows:</P> <OL> <LI>In Explorer
				click on Tools and select Folder Options</LI> <LI>Select the tab File types.</LI> <LI>Select
				the file type from the list and click Edit.</LI> <LI>Under "Actions" select the "open" option
				click Edit.</LI> <LI>Clear the option "Use DDE"</LI> <LI>In the box called "Application used to
				perform action" add "%1" (including the quotes) to the end of the line. </OL> </TD> </TR>
				</TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ12" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ12')"> <A href="javascript:ShowAns('FAQ12')">Why must
				I close the Find/Replace dialog box to see the highlighted text?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ12_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>This happens when your default window background is the same color
				as the selection. To fix it:</P> <OL> <LI>From the Configure menu, choose Preferences.
				<LI>Click the "+" next to Document Classes. <LI>Click the "+" next to Default. <LI>Select
				Colors. <LI>Select "Selected text (no focus)". <LI>Change the background color, so that it
				contrasts with your window background color. <LI>Click OK. </OL> </TD> </TR> </TABLE></DIV>
				</TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ13" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ13')"> <A href="javascript:ShowAns('FAQ13')">Why can't
				TextPad keep up with my typing speed?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ13_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>TextPad cannot keep up with touch typing speed, on Toshiba, IBM and
				HP laptops that have a NeoMagic MagicMedia 256AV video controller, when its color depth is set
				to 24-bits or more.  (This also happens with Outlook Express, so is not a bug in TextPad.)  To
				workaround this, set the color depth to 16-bits.  The problem is fixed in NeoMagic driver
				version 4.28.04Q, 4.0.28.</P> </TD> </TR> </TABLE></DIV> </TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ14" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ14')"> <A href="javascript:ShowAns('FAQ14')">Why is
				synchronized scrolling not working?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ14_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>Due to a 16-bit limit in the scroll range of scroll bar messages in
				MS Windows, this feature is not supported in word wrap mode.</P> </TD> </TR> </TABLE></DIV>
				</TD> </TR>

			<TR> <TH class="FAQquest"><img id="FAQ15" src="/img/icons/plus.gif" width=9 height=9 alt="+"
				title="Show answer" onClick="ShowAns('FAQ15')"> <A href="javascript:ShowAns('FAQ15')">Why does
				TextPad hang after a Find on Windows 2000?</A></TH> </TR>

			<TR> <TD class="FAQquest"> <DIV id="FAQ15_ans" class="hidden"> <TABLE width="100%" class="FAQans">
				<TR> <TD class="FAQans"> <P>This can occur if the option "Transparent dialog boxes" is selected
				and your display driver does not support this.  To solve this problem please try the
				following:</P> <OL> <LI> Click on the Configure menu in TextPad. <LI> Select Preferences. <LI>
				Select the View page. <LI> Clear the option "Transparent dialog boxes". <LI> Click OK. </OL>
				</TD> </TR> </TABLE></DIV> </TD> </TR>

		</TABLE> </TD> <!-- Main content end --> </TR> </TABLE>


</BODY> </HTML>

<!-- TWO STEPS TO INSTALL EXPRESSION SOLVER:

  1.  Copy the coding into the HEAD of your HTML document 2.  Add the last code into the BODY of your HTML
  document  -->

<!-- STEP ONE: Paste this code into the HEAD of your HTML document  -->

<SCRIPT LANGUAGE="JavaScript">

<!-- This script and many more are available free online at --> <!-- The JavaScript Source!!
http://javascript.internet.com -->

<!-- Begin function calc(form) { form.result.value=eval(form.expr.value); } // End --> </SCRIPT>

<!-- STEP TWO: Copy this code into the BODY of your HTML document  -->

<center> <i>Enter a math expression and click "Calculate" !</i> <br> <br> <form> <table border=3 cellspacing=2
cellpadding=5> <tr> <td align=center><i>Equation</i></td> <td align=center><i>Result</i></td> </tr> <tr> <td
align=center><input type=text name=expr size=15></td> <td align=center><input type=text name=result
size=15></td> </tr> <tr> <td colspan=2 align=center><input type=button value="Calculate!"
onclick="calc(this.form)"></td> </tr> </table> </form> </center>

<p><center> <font face="arial, helvetica" size="-2">Free JavaScripts provided<br> by <a
href="http://javascriptsource.com">The JavaScript Source</a></font> </center><p>

<!-- Script Size:  1.09 KB -->PK    '»/(—zH,   -
   index.htmlÅZ[sÛ¸~÷ŒÿÌ‡•ëê¸ÝÖÕ*ŽsÙñ%é$™ˆ%¬)B@+Þÿ÷ž"(Q²è¤ $ŠÀ9øppîb¯ÕÚÝù·H	•ŒD’1¢	Äìžè
   #Þk‡L¶n`À#*|¦
   U$É¿ïð–±LæÊI>žh’Ív²»CyF²¯S2Bï(é(†;}B&ZÏN:ßá©eÞæ‰f2aºˆi'2«kXÜ¹mÿÁg–cÆw˜ê‰'ä‚Ê€Å<dß1…¿5OÙŸÚ›N
   n²=È©eRq‘ îDKŸr*Õðè„üB“”Ê{ÒøûÏm3¿ú:§J“`B“1S@”&)vwÞ%JË4@^Êˆ¡EPÈ"‰ïÉ„Þ)k‘Â¥‰™IÆ,a’j†âÞ?°d—
   5Eæ\Oˆ€#‘ÄJB¡â(P8· a³ÐÎ²ãH¶ß·÷$¡S6XåŠ ²D¯ç3­åôjAŽt‰á[¢Î·Ï@Â÷ûý„Ía(	Åüƒ&é
   Ë1»‡Ã»Í¹£¸š€&Y5¦ü+‹íïç7¢ù&áoK{¶¯…Ì&ò$rjŽšHÁ8Lçóy{ÌDÀ5gF_:ï©äªsÎ"ý’&·£ÞÏsõq¢§ñîN«5ØÝé¿½¹87ßgÃWø
   ­¹ŽÙàLéÐñkk@×"Míwì
   Ìº8»’·77ï[gÿúøîWß«$ðÈéÕåÍÙåï%¢Ð`Â¼õåðâÌ÷àìË™Ü@òTuNïÍVY<#w\q-@\œš;—fœJ‘Â°mI`Û#ä%ÓÆÖñ$’†&Š±„pMFä
   Èö ÉüÃùðòÍÇá€SlÁ _CÌê¨kÙd´=£C‘SB%#)æ NYv:¶it ]Šœ€³¡	J	pÍ1&d&
   -ABb¨>u¿àän§Gæf9Xn «±P,ìˆK‚Þ*A¦ûkIŽIðÈL&<%ÐŠ¨XM¤°7‡ø¹!6óÀr»¤3íøK»Ý¶w‡ÉÃÎÐ«´B#ÏÊ—yö2…‰ü6Ò…TS
   W¢»;kÐŸ»;wTš~í5ñóÈ|>7ŸÇ…kÌl©ˆï:!ÏUd
   ®8ô¬6Œ‚Î@¨á)îfßáÕ\ÃJííyÅò»;m‰Å¼pbÞKÜŽ­vŸE´2<–H`ƒ+ž«Û$Ôä]²¯Œe¾c4fv¤]„4eŒ
   N´n5ÕT¹>K²j]tÙù:°Ni¤1E·QšC¶5¼  ©Æhm€–¨<KQ\,‚ÛzÈÅö°Ìôz˜„¸…PW”%Ù•_ÖÙR~‡B®g¥ÙÖðXAS"$ÓZàÁ
   Ö°0G©è „Z€ÁÖ€Æ8» ¦×Ã”Ól kšÔCÆT1M˜HëÁs	·ÇèRÕú¶F^1 uS-œ.ÝÖ0g@Ô
   -QrKœJÍ…É{)43¹D=¸+ä+¨gÙœo¯Dˆ¸ž<3’­E©ìüZgýß§œµK·5ÀˆVÏšÖHÇ°°¸2ÕµN£(KÉ¶Øçé
   @®{š¥ÿu6»Jüø^µL¶ØæC–)Ó¯<æXé/`¨PF˜+/’w'9vvéúA‘c-ÌŠŒ4¢À²×+«£X ø¤[1Ð[7p´nà9
   ,7-Îï$Ó©LœÎ¶'óc7Õû›êtL3ÊTºp€¹ ÙÂq±ãµ€£øtƒSÈêcˆ#„I)$™I‘¸çîªæŠ¯D7måe…•ã±CŸìWŠ±ž
   ~3uvö4ÃÌ[”u1¶•€…Ä$++Ó&ö!ƒÉ}ÓNØ’MÁcšæ‰²}Œi\Ôš•ÝÂš8TßMœúªè4 £B
   ë5à€ºÑ÷¼bPërßï¬öÇ"âõ‡d"Yä7¼Cd}è5”c¦}kM¯%¶€ú|:&J~ãS†yncÐ·Ç<jk¿qÇd$fû²n8°Y¬Ø¶p3+¨A¿}2`äV…¸è
   ¹€]hÅý!ñÈ!“~wÐïÐA_‡àªæ’ÎýÜ"èõÌoõHDæ7†’Ó¸IÞ²øŽiÐÆÀåƒG¦ý¼U],]xÎg•— ¹šÅ´p©
   ŸJJ:·­Ž˜EÙá8êi',µ°-èƒVÏÚ(<£*m+¥v®âXÔ… |™Ü?(?œK®!ìôG"¼'£q b!ýÆ|OAfž»gbüa)ô§&Ô3AdyY¡î»×
   •Šß9GÜa—1o`ÙîpŠýVÇ,$£{gÿ+Bq±à}†%fwŽ½…}Šr½æ¡ãÂ÷»ö†ûÝj™hNsm"˜¥ª à¬³_3†æ×`yÓÒ(
   ”P|œÀqMyÆ,WÈj*j>ˆ>ÅliPåSÌh¶Ób<¦õ“‘4]ÝFî)_Å–-‡§üúsõQ~¹»zª}&Ì¬Ïy¨'~ï¯dÂÐ#ùGG%y,_¹T@ˆ‹[´Ë'b1žj=²
   äaõQµÏüß ñ)üÎ²{Õà«7ÀØ(½Ì¾ƒ9LÂs:bñŠ¯1§Ž1ÉÒ6Qùê,µ
   rL~ú‰8#zeÆ!m:¡ÒQ¥©L®PngÛ>v¾FÅ‰â²{.÷#Ã=Å-ÎNª––K÷Íçaoý4\kŸûÇ/ï¯Jà?<Ü`Nùe²ß_¥oõ¶ Î¯j_ü‰)»ã^É?Æ´ÚºÖ]
   [Bèn„°ÆÆ«ÖI#—I6í7Ù¾ùõ´ð•Å'?`hõÝpåBÒÍ²êQ×Ð‡µªJZd+eýÑ!,¿ê)öŠk0”m«¦¢T¸ïå«ÂGYiº6a65] p°ÀËÓkš»rôì\+H‡
   Ê8Éã–1È±8wyTˆÿóp/%M‚ÉþgËWXP­CÈýì46D¯O=W¤öî É…H»‚h	»Mü•¦:UþgüoDåñì³÷"/V
   ·†´~¡FUá¬POÉp÷ö'ªZ¦iGÇ…¦å®(öÆ”g.ç Ë&ò ‚À"òÿ+ûOøw“DÉÑæ•„ŸÕö‡©7–Þ–¥ïaYceo^¾U—¶‡¦¶ý°RÚ™êÖ¼,@³Pñª
   `z$V“2ÇDÍ´×k#EW*Üª²ä†b×RóXL6ãuðÊ^Ñ9Èr*Znö•]€[*—×TÉ8©(”ÑGÆ•ÉƒÛ«Äb…C*;:ûã²ÔÝ\ì’#óý2Y>uMž\ÞùdZA
   R»ôZÿÆÌzé8*æ–£R~û¨ßÚ¬¦Ë×7êh~mÒ “!WžæÃæŽ–8»C£ž@˜M•³PÆÅ+Bø_Š UU²ˆÌŽ~:aÓên¡ŒmÀvŸJT9 ºðýµ/Û8e"²å¨îÜb„·ól¯
   ÛÌˆßüÏêElÈ¢“ù¿¥XAó)»Jõ»4M1}?Eª÷=·íç5{Ýnî…3ÓHŸ >ÕdAÍë[± !
   ó„kðõàýb¾úê«•ö*7¬gpe½>tñÃ£2C¨”˜2œ£–´B2DjÓ¸¼œ"—L«€ÎyÞîöà1Pá›ŽZòñ8ó€"9:ÂŒîíïídZÊ
   Ù›pó&×ú—ç±ï#vìQÙ÷ó:ù[‰¯?/Î®Ïn€A¬|ïèù_šÏ<’­è7–Ù8"KlŠ§©„ù7Ç÷ý\¯‚ýõ‡Ó:ìñ}ÎsG…Í«‡|Ë¸–…}Qó¿PK   
   '»/(0‰  »
   info.htmlÍVmoÛ6þ¼û7p[,¶ì¤pƒBÒ ØòËà:®­®è¾ŒDI\dÒ£h;)°ÿ¾#%;n–!XÐb…¤ïxŸ{î(w½›ø?|ïŽÂ oþGãhúQÎàº¥‹Xñµ†…
   Ü¨˜½È"aJ+Æ\§²D—waÀ(ŠfÍðý‡ñ¯yÔ›@ïj…ÓÈ#B6cçŒo§ŽŒÃË«þ'¸ö®&Wsï$µl.n¼“6>iZÛÍcÌ„fÊŒ4½.ìx¢stÛm1+Š5M.
   2ÔórMc;ï´m`]ù&{Ç×Ý´à™ðHµ7±á¾sl6!HèÏ äšyÜü*˜ŽåªQòÏÌCßÛn»1£›ÉÒë´qN…`…·ì‚é4œ,±D/¡—v‡åb…ËFÊ¨Þ(œÂ
   ú0—ÐlúuÈ.âb“0Ør¥7´ðˆ“ëUÑ™óA{àìn×\G'_²Ö9k?›5ôýïYûj žfÍ©$çX½ú!×ï`°B`1þ-ôÎq
   À½_èZÿh…ütF`ôp4bÅ–iÓÓ@qZ&ãáÔ›‡£ªr"¶‚+ýkßÅŠ‡äZ¯ß:ÎïX®¥-×Öž¡RD æÃkv©åÚøŽä
   k?ðÁup¾Ê TñSÛ8hçP¥ä®•ñ”@Îx–k¯s^«è \K…Åk£”´Gþ$¸ÿÈ–óˆ›bJ
   –…Tx´ÁÀŽøÇíÉø¤xèo‰Õfåžè.>_¢1¾¥¬VIw.ëæºúáÐÎ.¯æýpŽQ>ŽûÑÈ{}Ñ…^8™Ì‚~<zçv¶˜=3k×

³¦¦F~5Â8Í˜`[Zi@Ý¿dû¬"ƒKQ©vD·îä2¾e¸ ZÝÁÓ?D9/ÿv9Õ/JˆiQ°äè~
A·<£f»ÀG:Ç>Ž» ±bh}+è)^h7§6`ÁoØ)ØáŠÞK!W,õžÈ[zˆ}4l}æk?cÃc²ª&ÁŒP^òÇ¡wZç¯
áŠÅa¦J®¬ûÇ^@»J„É˜kÎJa†,—Î„¥ú’Šç¬óæâ‹iDÄ§K…M718Ÿ—S©ÍýŠ<%„Ô
Ó”©‡¨–UV›8-%®®Ö»…Š\ªßoXiSÙ€@”;\)7ëµTR©0` ’SÔoÔ†&+UæÆ4©*÷;–¹Ü	\³šd
ƒXâ¾*–ˆWEæjß7ÿÞ5+µ®³Vô^¯n?.Â¹ÿ
eS£.³²[jh.ì´@@˜VºbÈVuÚ5¶ÿ–;óžé_‹øC¶ÿä9(Íujlˆr¶=óÛâìÿðmñ|ÿ|KV™}ÙRÈky»L%ÖˆªDc<þPK    '»/(gEª  ~
   window.html­TMkÜ0½/ì|1„dÍRèG°}	4mI tsÉq,-5²ÆHãl“__Ù^’\Jén1óôæ½çAå—»Û›z½*ÖOÐtWì8TùÞX¡<ÕSG‘
Æ¼«ïŒSÂè#|ÃGÜ©`Ù@Y¤þ|c˜À&P[eFd¸,ŠŸ	¤ø<ÉFq_´ì4	DoŽ›g;dõ5	ìxŠ@±¦²Àú,ŸØ[ö-*ª²G
=ž‹.KêžSõb›Õgð9p8Šá/ºËbº:;ž=}½½†Ý«¿ê´}÷­m3Ø[-¦Ú¾ÿ †lg¤Ú~üT/Rç9÷<B4<: ž¢ð OÉ4÷‘¤ÄcÔÖw SÌvtëÂ4'Ý
£’1Pæ4Íh€õÜQ›"
ØÓTBhi‘{ÓÏ™U,jÞ~/9ÌÎÑ]lë›ƒYg1¤Í°Òã/è”Ä ªüßRSŽ#é¥0å–×Ç2ñ@þðø´XÃñ®Fyå9–%­±8ëOVÓ8ô§IÑ¬N#H>^|,S¼>#Å
áÍY¯~PK      $% ­ƒ  <  	   blank.gif%S1k“a¾!Ã'dHb‡,SŠÛ º”Z…@—l…àrƒ ‹ÃB\
…ÀA‡(*85¿ RZÄÜœ,fÊP‚Íd@á|î<øxß÷»÷ž{žç¾ïÉÓÇ>¯Qƒ~SD™O™K™»Ä‹ßo+•JQÕjµ^¯7f³ÙjµÚív¿ßïõzÝn·ÓéøËÒŽætj?ý×üúæ
fþùÓ		‘P™˜I˜”É˜<s,$B*dBžWYI”TÉ”<+ÙHŒÔÈŒ{'u2D Tà
{6@³2³g?œEX…MØ³=Ò¢¬Ê¦ìÉ·ÅXÍØ³RœÕÙœ=‰rÐ/ÉþÁ›0¨ÃÝ±”„–8¨Š©x*51Oµ`£.æ eÐ¤B(dK €}Q
¼4·¦êiÄHà«™zzm’isõ´’Óiv0,L’ð ¢!4\æà”-xiöOÐ@LÌ€#mž#ePˆ®8;Ž9L0 ‚„Çq	^RXå’– Æc®a´hÖÍ-èHtDÏH&qB1
þ/ž»´;†Ãáh4Ç³Ùl:.‹år¹Z­Öëõf³Ùn·þçv2y_–e|8Nž‹çñ þ€øŠ]ò;ÍÃóÉ×WÅÝ½ãoço/_×î?;;üòîêÍ¿ø{¯Fûÿ PK   
$%±Ê‚–+   /   	   aline.gifs÷t³°LÔbdbh` ÿÿÿë€hˆ_KÿÊÓoùÏÙr«{ó½]Ö PK      $%+‡áÍ[  …  
closedfolder.gif%S¿k“a¾!C*Yº¤"ll±ˆrˆ-”¬":dE 7Ô? ƒB?±dÐE(Fo(Ä­:!þ´¶Í‹¤ Éb†jPlD0
xÞïû~÷ÞsÏóÜ÷Í^¾8yîúaÈÂoðHâIbIb·iÑÞÜØ=H¥Rét:“Ég³Ù\.—ÏçÇÇÇK¥R±X, SSSz+Ñ¹¹¬Ê7ýÑÚÚßo½zy€ÄPA4rH@L
W‘˜A4*Q€X@Ôö ¬ êˆè VaWP£!2¢ jô³32¡j´·412£0j°±Û$È‚"¨QIŠ¬(ŠDÑi/ŠþÎÕ`¬Îîº{aÁD’¬¥˜I˜4! µÆ†•D
Ð•™f'åBM¶³4#e	ð>ŽÈ`¼8¶Â¬a–‰!ÇgÖðÎ´Q¤EYÃJ§ÙÛ™an¹&Ú„ºËèÜ²8/Žþê¨ã3@Oz‘˜e¦ÐºÚYíÃ4C
÷Ø/™—àV)…%V£>W7š8ê¦ÖèwsDP$ídÅðÑØ­ÃèÂÂB¹\®T*ÕjµÙl6½½½N§Óív{½^¿ßúç V{–$‰8 ‹ÆÎbÂÿ
ÿ.¤—@‡r—êµ7·¿O×ë£3•äréÚ“w÷FNäß¾?óxëÎÐÑ»+cý§;«cç?ßüR_œ}pèÚn{äêâ6OÜØhï¼~þaùäüÏ_/Ç·—'çœ}túëÌÚìÚ©•Ýë¥‡W–—:Ÿð
LÿPK      $%O£Ñƒ‹  µ     doc.gif%SOHÔQq©UöbÂÒaò`‚‰j-)V) $/^"°?0O!‘
~{hª…éHXÑ!0OW‹ÝWa„{ÉÓÆäBà„¦™i`yïí¼ùæû¾ù½óçNž¸ºÒ° ‘ÿ"_"ß•4¾—^•·‰D2™L¥Rmmmét:“Éttttuu
ær¹l6+w"Z‡‡á—ü^_ÝÜ\ûf€‚¢" !0B@Ï!0A ¿ŠÄÀA¼P ˆîX ˆ!¢h…^Añ„ÈˆQ¼Ÿž‰
¡x{M#3Fq6z›rÀP¼’Y0ŠE£©¼Èûo4T…Ñ:½k2ô & .I[ê™“¸BeÀB qµÊ†…‚( )SÍFÊ„ªlc©(JJ`}‘
@y±o-³¸Y*†ŸC`qïTy:‹[‰î4[;5ÌL"ó@E«Ps»QÆ‹½¿ƒªÂØÐ’ÖFC|$j™*Ô®z=ú0•øÈ<¶Kê%˜UBn‰ÖˆÍÕŒ&öz£i£U:dÝQ|äI=i±
ü_Äw/áÀÈÈÈøøx¡P(‹•Je~~¾Z­nllÔjµz½Þh4â8–­™™Ù(ŠìÃ_ÄwGìØ[8›|Ò’éŸ›YÎÇ‰ýG£/4ïþ»nL_ÉåwvÑ£þw/J“r¼p¾Ö–&ã¸Ñ^z
MS×ËÏ²í³ïÂØ­?·×¢¾¦Ä¥•c-c×>OôöÔ/—oüô:ÙxÞý˜Vž¶^,/^‹ª;«‹­kpæ~¼ÒÝÓ_üñ¾8úa*UßSÊ/ôõŽ~;Tü™_Šš·ï]X˜[Ö—yêPK
   b&Ðg¶×)  ÷)     foldertree.gifÕw÷WÌóu -	B @èÐkè]@BSPšT‘ŽT
%ôÐA@é]½Ø‚¢‚tDéÅ'ßïñÞ=;sçÞ™ŸöœÝ³æ–fšZ^M€G€m:€þStz9î÷/OMÑ§ÊéS~ÿè¿¢|Šî÷Oû‡ò©ÿéSØ¹¼|ªÜoª[þ¯»¼œî÷Oû§þ
`ÿ™ÿàWþ¿†ÿ?¿r?¬½ÜîçGÇúý›ôó›ÂþsþyØþ?ü þ,Öøß$¶û¯úWþiÿ øßÂ  ¿ÿ—ÿ±›F£þÿ„È) 0Èÿ+þ
Ž™N@²ñ³ÑüÈt$ÉŸÉÏ/HI'£³22sHäl8I¦¸"'3;…]”QZ’ŸÍÖÚ˜šKæG¤ä¶¡Iy¥TÊíÞ¢üÚ}™ŠÌj!‰=ÃÙžùÂ¢{hÙ—«h™ôô‚Üü›-Û…5%yk9Å[
=«ÞË*¨þ:ýýçÖ[J.~JÌ¼%=8ò™é\¥Ï! ¶È¯Ò¸ž«Ø*EjF jI½^fæù4´Õz
£ÁM- ‚IN…iZ®=û(¤þ‹gá±êlž©³(”UÈY¿a]‡úºv´õ‚¬»™ TÝF`V!NÂÖ¶_Uê$0¬õ;˜éL£ÅÖ.4Ò°þÓ»ý÷GY¥T¿Ìµˆ¤¾¾©Š(3µ6"ÁÚ
AÛ+hOÚçdŒ¬â®o;ÿW·Ê ï¶aÁ½={I
g­~AF÷B¤´+×kM³ÏéH#§Üš¾½—ç–ü6F+,t«ê¤“ª©5>¦î|†×ß'Öö°‘ÛòÎGE‰>U/ÙuJ){ù'ºj»öUƒ’]úÓG=íN`ãØOÛ*TÛ•
Œ#zPp ;Ñhýk3W×1Ë;•‘-_ç_YíÖÙÆËU2]áð`ãpË,ŠVf—;XøÀÈ‹Y|Ç.ÀÃà"ûLmÑœÈ1zíïß˜a–»hYº­êC5Xq“
…PLA§ëÔ-R,dšiFz}R@(@Ó„ý!Y—-5«¨šÔW$TE®˜jºf4.Ó„ÂÎñoÜžœð¡ Öz˜å—ŸC¤>û(ô-{§9ûø¿†4êŒË”U
4Þ‚»zý¦á@{«”¢] "õžo;:ÿžmàÒÔ3ë_ÖLn=w8ÙÓgXíÆU;]x_Iæë—šÛè¨žžM}íX@rÞY"ße-û«÷ºæ®§z°·°4$þYÂÜcÊa›,T×Ôl“KÔ
êÁI–¯˜ùYSäÜW_]Øüñ*†˜ÀD¢¾¤Í—…):òmXmaÒ§‚­OÖxÃ:jv†M¿iÁe?µØ“"qKÛd§ç×Ï™ú
Áe^™±ï'%9¾_°fœ7DÅ}?Òƒõ¨ÀÎƒ‰f”©Y¶ã’Ò¬KÕ«Y­Ðæ§Zkgúæ”¨7Iùo,Þîñ¶—Ú"ãÎ%`¶§Á!Üyx…OÑpöÏ…ŠâÇ«†KïÍ-&Læ&
7÷å.(urŒLÄš†|$Ó(*
á›BVºõSØ2¾Î¼xòËfd‡B¬RàÇÌHV‘÷J—_œ«œB³mL5ƒ²"#Å­*ÙIS*O¬½‡Ç§‘ì¹rD_âŸÂèæŸXB:izßd·C.«êoM‹ûN”ŽÚŒXï6=ñ)‰6ŽÞ?
nTJÛÉmÊ€–òD¼}¿…tÐ˜\÷ó„%ÿN4ãyß )Ðë.E[„œßI,>M¥¯=+5ä®Î&<““_ÏúÅ¸‘4[ÿVÒ9b}ðZL¾Û–eŽtG¯Ø/©êufÂgÀ‰rÐå>]e½'2ø —
ó,2GÌï°Ú•¬~ŠƒG5´E5¼ø‚Qé’Df[“¿] qZÊ×£7<ÇMßwjäM‹x$.±ãÕ¤«*=Õ ÙnäÕ7¯	%ùàç–Tu2Ås‰OQæ®40».D94 –$T
¶ãèWîKj®4G—1†¿ƒóqóüA.&™'Ë¹ˆ§0Ú"ÿ4!ýý•!©VQž ÂKÌHÌ&f`a¤­¤#7È’-‹_~öuAª+’ËßìÀ©CcçS•bŽØ[;º2ÚfäˆrÐ‚¨RgX£
ªÕ¢6Éâïo/­²Çç¹d.’ç;I‚ºÏ_à=;2-Lâ.
ÄÄáÂû>ò~ÅGúÌS…b‘ÆJ2ëƒ«ª¢è­êmüQæÃ«¹ˆ/™ÄGóRt©5cà›"ÀJ„í0FJ{…%úÓDò™„PÀÃ£ªF®çàâÅa2Ü©~ßÑ¶æÆì'£ú1º´
U’9¯HpÖ€ní¡ ó˜w”"ßk=‹r0úŒÆ|ÝÉ]ÏFŒ«‹ Eˆn˜¶sß³ á]ÿ,Dîù2ðàfð8‹·íÃôp`^É2H´§ü“©ì•Ñ%Œ
@Z‘:UèŽ[¹ÞÐêED·_hM}ÌuånKŒ@Ë{òÔ`³Â_$r\|›(¬Xf-P1ÉÃú¦í®
g-kSÞý–ÎÎŒ—j©¢H±ù´ÎÊr3*îÎLæ¶ýlNš×T…‰ù6ªh½ =Î´(ùB¶*VäþÇ’›ˆ‰`7ºE
¼ª¼Êð¸Û)]x%œ×ÿ•wòmÜg…ðÎô6×¢ZŸ½&ÃPè>#q“8Õ 	ìdŽÂ4<s% Ö$¬Á“ÏØÑEæ²BÛöÍê¼k´ž+bY ë]€;fà[îs
¸†KïŽF¥ì¡ ‡T‰ÙšÅÖ;HSkO£Fàâ¼,¥À„øêñ&süiÚç%§™š«Kï¯“jV;ô5;’*êLNF{š’gFÿ³
=òÛ'PÂÚø*[Ò§¶8§Ù ²Å{ZÔ1HEiwÖƒà¯µ4oìáâž¾xw>€2àÇ8l^˜a}õ¡h}é *wÈcü¸LLêDÚtL×æÄt©æy0„/ôv+½wñ•zÓ‘vŽÎa¡
¯‡U/’ìhl»ðXÜN*½×XOÆC-D®“×í)P¶%ïù!v{¬g¤õ”!\ôÏÒë9…éZ§ºÞ ®úWolÆÁ£=“Ñq.²ž¢ë(ý³ðüÖáp±gÏ˜9Ü×Lƒlu¯Ù:.ëÖ
­¾Zu¶8ø“ß´4¢î
?|Ê<\pØ!jC³ø²‚o<]|fÆY›á½Ž»e†È±È°ÅÍTÙ!ÌôIéÆ¡k¯‚†Þ2Õž×\ÔÊkò°ÆyÏªenÊí‚_LêþE«íáúÝ5Ëö5ãüFŸ
h2`ßpHÕŽyEý3?•92m“3òÉôâ—è‚cfM£9Ößý
R4ªðqDUñh!LçÝ-ÿ™qvqÎ˜8ù1ü ƒI¶_GÙ¾5÷Î´X\‚ø±£Ué…×±»Ó)º_5¼UëªÚqãNÆ5]ôÿDþªØ!9%â©›lq«B‹ºïíZº=ïìuÍÌGšI
_M­õUSqPð «8|VV±“´º›ò¤²/<ø÷·èð/wG€p» aý;5T¸Ûxà{Äåb°Úû·RÕ~ª½€“V)
öKœU]M_Î|¿H”wýMIš#°ZÜT|ù}ƒµ«ÖXÆ"´ib’ î5ù)çB8š®½¼¦S@pYç|©ìôfjäÑÅ…X4Ë›
¬ªßÈ`Gnåå³7&oš%`cÌ6!Ê£FO7]Ra&s†Rxç=^X_8GBä;½‰ÝõQªC0v²tc´$ç/˜´‡]¸íhvCÓLßE[–B—à>>0Íå°góŠÖ‘²„:„r‹îˆ¨
1hˆ6Íj°6Ûö	7ì™y¸Â_J„˜{3Vh °c“{éŠ‡1õHI¹ Ç[ãOÇ	÷Âì„S´ÔN.à¶²:	$N$T^MÛ±6Ò
Y&91F«MÖ9öŽÇ…,f;:/ÖtLRœ†ŸâL'8²Å¶B5èNýšç»«cÑN?£ðÇßYúÂ|ÇÎ·È©Ûƒ¯ƒ¹ý±RÏ*Ñ$mdË(þ+_ò‘”î˜ë“tÎ¸
c[Æ4"%÷}¬Ñk%½ÇˆnJ’óîÿîz37B+1þ³ªq&%§Ú69…3·0w0ÜºÀà›j“ªWÖ*˜ÎJÀÂ… ¡}^`‚
ºÑÕ]ŒBñD=.â¼Ú£jä_4Lõë<ðt‰CŸ/ùƒ¡Œ¹¥¶HV7Ìön ÜÝ~a@Çùì
ö..ˆL¨KDž±® .q€áŠG·/s}Šüñ”#"úZËÕ¶9+Ü!&ßìªJçs0üjpÅýHN>t½ã%äÚ}Uð¶XñàrÄ¡‹ã‘ÿ2ªÑjÒéŠ
u¨^nÎÂ¡,¥©JÍï—ø¨u^mþ”õ;ó©øÂÌÄÞ^Ö
+"y‹ZÇA…@4³Ìü|@^»<†ëc´xÔWÙ±‚BµLÜUñ'@‹+Åî|ÿ{(Ý+ËžJ½¶Š¾©ÚÌ:U=ÎÎÿàì+÷b­åwÛöL¬Z=,tÎ«Òå(RvDWC>v°2¼
ZÀÑµ+¼&nGCžr™yDÎ –7BG®¾+çrëhó­ðÏZ©¯X9 mQ dtÁUºgD8{Óhåk’y2§•iÅ¶²ÇÍ
`À°°,€›ËåÊp¥³¨l©æZYo@ß%~W·åd)Ý#Q­êÚªNŸÐ£rÝêêA^BäÜY‚õŠûám…Õ|oäŸäLv÷_b“•»=×€”tíB@¤1b¡Ò •ôF„f+­ÂÏot±
2MRÆO"8%·&Ri¯s>RyéäŽ#À†9èµYç‰ øÏx<±|˜Ú KrÊ¯ƒ4ªkÍúÐ#Ê\ üuÞ~¤ü6gN
ÇáË?8OMíOr…#îr€ö¡¡Ú@eôõÚKo¬~ÓÄvÑIÇ%cJ&ü´é¼ë {MËë"Ÿ8$»ä:¶e‚ˆµ_ÜˆÃ\ ¬m¢X+W*§Tl£¬Ød• HÝ¥:ô Z›ƒë
¸4Œ<3¬KÙ¬4Ë©4*Î›)$%Y(nA¼"ý(‘{Ns¨yeY\îä%î ô…ìÁPeÍvEú’ñnwKËÂE¾¬Ê¤OÂìµîo·Ì¹
¹nõ€Ô8ÀKÅ`ñ_SšFë"nç/”vý¾ý’±3mThÿÈ»ó¸ÁWIZ\?¼.#02b¹_så©€3”ÏŸDjõ½:ÇÅbë?ÊÎ­»·Š¨u—x\ï«ujŒéàì'o³Ÿ
Ó)×2¹Td«uÞç8?öüp²°¬ÓSqž¹dtÔZ-Ò8!%½¦òQ!WÜ}Y<T#Å½wEwCé7õÑ¯Ëp ,&‹RR‚bm6½L@Í½ÝÏtÜ½ Ë¼ÜCó¦AâLfÃ?lAËJ
¾èŠOù¯.X5aîª à~(·hFw¬erz¥ô9€Wþ€W*ÀlÆy:A½\šÂ3–¡s µi…ƒQ–Åg  Æ
í@…‰•!1NµÅ¹ð\Bè¯’ÐkHÛÝK¶Ÿ¿kTe†y÷!äJÙþi©>(MLtËôõù.,¯òM1º5L²šöF¦&·›/·U*78BoY—ó“Æ²ç]ÐqM'D6„„ì†-†ÁŸÿáÒœVäe±-
ërãöö‹•^µsTu²uúØ'E¦å˜W ž³iKáuÌ€:úh²ŸõFs‰nT»þ.Ž¸¿S'`lbçk¼N¢°
%£bmw94íU‚DõëtÔ©à¦NÍŸ‹öÀºüÊÎ?$Ìcz.ü·TÄ¼WöÓ®ëFæn²þÝ_|)…Ð›…‰Ô¸Òv.vá‚„=bø¹:9Ýøþ"âàhÍÇŽ*N_yÒ
ÿÞ›Å¬î¹ñ¬f~[Ööñ%Nw@of‹a02Š²“¿ÊfÉræS Õi¨\ž;–Ä§ßZë“hyÃ‘º¡éÃt$”v~bO”$w"õ±\Ò‚ë>zévªºçEð«ßY-µm
¹õü£øÊŠCLÙô†2 €„8øê âìÐ†a:ÜéV“;y©Ðÿ°/­‹Œº<£Êa’ªiWSRfteöÞ
¹s>ã¡Ã„˜Sp¢ØsÃEîøIcÓ¯ßÖÁÌÝÎ×û8àµå«Tw}ÓÓ±¶/óF'Ùek§C4lÔú°ŸÞÌô¹8OiœwÞ2ð‘ÀK×+ÿ¥)•O¹MÁ§ìp,ë:Â2œÉ{ù5zO¯|
wG5—{*£ö–HÜZzŒÏ¿1ÇQtˆœqÂéNV„jAýÓ°‹cøÎ‚.c´ÍëàÈÉïqÚö¶¹½~±dÇ\!ê½-Mu\ÜîÃƒ†3¸å”TVURz´Ÿ~â]kô*Êc#vªc»áuÝ7
¯4›„D›Ú¢â›ôÏÆæ‰lÚÙÃ’¹=¢|aá5M’Q» •4¾FÅ tç Ê„1 ƒ5ÐßÎÏ«—ÛåÕ<iizïâßäa ÏbYztW) £L÷üõÝì½mÐƒ³Ñ!ïe-Úåðß
Qgk„IxAÈ; “É,ÜÈÝ’«‰óÙ‚”(Á.§ñ%¾È“%€ÁYwø¨õY^«ëw~Ûƒ9àBRô>Xæà
ƒ“Ÿ°Í„Ž~'Û9`ÊPú‰)õ8\*ä×|ä‡' \ž}*‘†@I*ÒÍý~|™-}zU‹Á0áŸó>¥‘8+°gŒQ
ï8/²ã-H‰ðxŽiâÍ+³²yÌ(¬Hè?ˆ0Wó°ÞX¸TÌòl× ¾nÖOÊFëbWý6/'Ã!zqí!¿YÕxÆÌ‘ÏyHªÊO§9¸uÏÙèç2XíÆºH˜æU==EºÏ0·Ëa
8oøcQ9)¼$ô"éó%M@¹?-üøY¨‰>…3!Ÿ%0C ‰9UÇ¾ü¥7÷+ONÆ àaþÝ¢à3¹[Å+©¥¿Ÿˆ8“˜x×ŸÅ_é“žøê«ÇÙ›U¯‡{D…
‡9¾Ì»!¸Ú,ø.ÀGË8È¼3{2˜{9¸=¤ü¹úõq“Æ°ØÒð;¶¼9u*ÊÿÆ§àGÚ§æ³cJ+ïÜa#.³å¦YM>¶ÿ<brßŒ£)páã
…+ËÎ€oÅÀ¹ýÜ¨”}Öý² L DÞ.¡Žb÷7%óä›ÉvSzúœ|#ò pŸ×µ·›][5
ã„‰ŽÒ·rXyŽ£HŽ^´ýwóªcshäßÑ”ç$cî9ÖŸ\ÉóaÆx§x½þÖ7ÈúÏÂU’¥°¥F‘âÈFK:
ß¿2—l®„»;Åák³½wŸ6œK¬ú•{ u£húë[°ü†œ‚$Ë%áBB¸g˜'ÎXÙæ°ùçâÒWS8ô¼£^~zâü7’u½­s9¸dŒ²Ð0Gô’*÷_“Žz©åº¿ƒ|->p'_˜'
kŒ<™æþùÊ@.ïaPêêµ"Ãã]à´ì{¶ß0y!¼™Z0ppË­±üØygh¢Å+ ‹–š
€ð‰óeI«RòÐü%¥eå·+*«î”£kùeêjJÐ²2²è†Z™úæúÆbþ{}%Ô»]²ü Ã”¢´1oVæŸ´!]QT˜]qØ@+_ááòÊ
?þ¾öÝþwÅÈ÷ïwKÞ}Ý]{Ë/Ù¢ ¦¨¦'û¸ea$	1il^«…IaÐHZM•& ç@Ô;?ÌB>‰Æ¹d3ÁáÃ·=ÅžÙÊºÿúÃg2
¶ø¯Öö³EµˆIF‰Œãœü¸“ÙÄ7—~¿Ð¢Û”:6³ùœb©ÓBVAŽÙÛïi¸Ûr
ÕC·+lØ[ê›(Õñ¼æ0­v5Ùwž¼V¦ŒÂ8s­‰L#7¼Dç•`="Ô¨¡=˜‘žKÑë/êÊä}§Û—;ÔYÙLâ_Q-ÀÍWäN¶Ç³bvGÀ³ •QËaô.
Êøƒ'Jí²tÙ™fÍD|éÖÔæbÚŽaí)&~z"X„¼”Ò×9ºXd€Wuþ3B^a²ÓEí×MažžLÒ“ï
&ÙøZØçßn¬¼çtð}dÊoÅ&Þ˜åãæÉa'§f–ŸÈýŸÏÓ¤Œäéð‘{G@Fq“áuðÙÂ%c·=ê¬!Tèx1/-–:éEvtýhHž¬¤y)
eöŠ’˜eðµÁ³»aÄ4mË¦qÈÀKél6ëO?}íâ—
å9ež™¥FˆL2šqÉ¥VµÆ"Ï‘&õåþIÃ¦ŽÈ+qPQu•’€JUÜR9·®Ñ'$$¯®2=®_ÊO¦*pÔÒ(&i±æ€8ò,ñz×®ï­£=ÜÓ‚W,›­POY
j–_ÁF]'µösEéo™&…½ qi ¬EmY'=J©LToÇ]ÿ8È3Ê ÇÜ6¹ñÄ´Ï­Àê)oïd¹ßnoö{Û‚ì–)<Çi9=t#™&X
Ü›êE±rTíÏÙj+®e*{ÄŒÓ%Pã-½ƒdØSž/µ¤o‰É C!NùÑ‰°ì}C¹ú4¦«ŸÆªÕŸÖ.öZß¡‘Šeoç8ÞN1’,/l]3láP
‡©A}8ót_e×o¼ç„>@„ú•LÖEñ2Ø÷¶Ç”Ú?‰æQzåÈŸgþÙ—s²ý)ˆ˜–?àÙ¥«lŽ0'¾>&•H4@éÇäf.]âtM>î«7IÁ
.–ø0z~Þ7d"ýS4_çëPÿÏ²É€é6œfÝ
!V×jŽÍêð…{WÃ-À°èÛ¾=GaûŽèŒoðY¾aÒÁ¼8pÞ×Œ7'íÔ¤ŒXI<¶iý»Ê7M„=ÁÚþ0*;WŸXÜCÒ=bä‹=ýeÄ(ro3õ¶Ì;oá´Z^ÑÛp<%N¨Ñµ
‹x­zƒÐÇaºú±1™«Òô\Ëƒ…Ê•ákŒ@g_åeÆ‹?ê‹ÇéíDÖáU†{†²ô)©/¯ø‚~0C¶Õ¤4 Ž%sý’EVm¤šÛ×<J{
Öð½Æ•ÕØ?Ã=Crs1Å>wZ‹»ëK5äºÓnYÜåñ¢Ö·ó¿ü«iê@‡óTqVtÀS± PÎU©…£¾šñì”Y9Ó
<ns‰2nÍÊ±ˆ¬ûä‘M˜0ÂˆH-º=‹âà»?55–_qÌ=³úÕi¾2ê3‰©SŠ)¡¹ÐrÂ*—Š|Û½1Õ7Fz&®ÌË$Ô°JR0B³ÏÆùò«ƒY¤
ÖÂ&š(ûŠyïñUÚŽîs^Y{1éEFˆ@õÚ­Í”ØO‹ãv:S{9Ê“tÆñé²SyÕ9e½ÜôÜÉ©
ó´4”ÚÉ(T†l-:VÉ`Íêè¹ëÝ:l%º.<­µ×°&?€.ã2Ò3ÙÛ;v…î]ãê‘fÔuóÄoH›º£­ÒÊ‡2ÂçÉ¼EÎž$ÌÇ/¡¡kÛob@vc:FÃKižºÖzÇª¯×Êò
ÒZI¿_ÇäŸm«~æ“î±Ì`Š#XÊ¢,	þ C*
oE1ë/™1ëNgÂ{ÖruMâÒXˆñ³øŒƒ%W›NÎª=Åïe²[Y½iD©qjk^:òg=z^s;v~CÆ®ó÷k¥÷Q…¢sé¯%_1rÒS0D
Ø9À(÷(n%{—àŸ`(d/4½`±p™ósÉsvõšúnÿ‘WŸ¾Ð—Ã½çl‰šKOÖ¾¾t£8³VÆò¬øÐO{íåEié¢ ¿bîÉ!KAn:n‚“ŸÂ2`
#<F8\e—áoð%’ðÏ|»øj?·®‚Ñ#ùœï¨¬”¥Å¾•úÃHëýË“ûI¤×Kç]‚ð¥¡0Ïêb·
7Ô~ìÌŽÔƒÿî5XÒâÓ³ýv¯ß¶wãxßéÍÇò°*^åq_B÷Ð<ýÃ‡!sjÊ‚Rjòú_­Ø¦ÈŸ'È)EŽ8ñØÉÝ3§GüïÇ„<×-`pRÏÚd^ÔdÆÑÎç†êBþËu
a”	®|4"/¶5Í¨ØÚ~‹¾nò\s£eësfÂÙUAn©ö
üªAØ—«w¶·Bÿ‡'þÖØ@®‰µ®¥çFp[ž”ÉŠ‰È5—0Ûà$4ê¾@¨{çÁ™6g†lFö`91·.ì+ý¥ÁÿT‹9]ú¤›î/HY¶3‹Z,:GM/˜9¯z²URccÜI
še¯ÇynbE¨É’f3bìJ,5Ç8jrU¦&”/„Ÿ™ãymÒ4Â+‹gFñ”vœ¿ñâhJ^½JÎ\³ï'ˆŸpIfÛ!Càsa©&@nüÝ7¶oÅÝ×{;úË*ˆom-hÿ]^‡á
ûåO¡Î€ÜA!¶o0ÑÙ"ÛWa÷í:FÂÛº©¦úÕfñíOÀ?‡’šÛàõo™t<-Õwüº‡æÙ*Š˜®åŠíÆ¦µMßôy^úxKãüÂ³ÐãÖÁëó(
sk^6pµ¿¬œGµº$MôíJ7º‚Üô:žiŸùb“—Ðz‰fÆ{6ÎÌå-‹R_öwüøõòWí¤§fM‹oÛZÓ6tR%{ª­'·óVRGS3>5àrü~7*È¨ËÚ»È
ÿ9±J¶¹¥[Ñæq¢-9/Œ–¾É³øª®üÜÝ§ž‡Ûg7Å_KOÒRŽ÷t÷€Î÷%1^Ç'¼u…R³@_:›Žäœ‰UÏõ“ËÓû%’oÔwn¶]ôO]è…ÃX«fŠvL¥sµ¢#£ÿ¸
ÎÍøËñßóïþÎ»i¶ÒõOŽÒkÏ M|ú˜›Õ¸qnX.>¤ôfõ4¢÷
vŸ/ñ’ôø¹YnÿýŸ‰¦h k6lÈ(™©á!Ñ$èµ<çÎ½pSÖ•ðz†­ƒcýÕBÝ#ÄCSnAñ„ƒD™Ÿ·xœˆ1¼Ñ~þŠ¹’)ª
ƒT¥hC>±N¸?SªJ¬°(Õ|Ò¼†¸fŒÖ#ÛÔqÔx—x	r _ìt-¨Èþyšv€ïyÂÃvÓd‘éŽ,ð×^œ!‘œ;4¸u,îù1qO	ú¥?^c÷zºëÍ‹é°
q™ç"‘^+îZ°'ËTâÕ$óx6¨çK<3Îwr#)é›4õZO›½H,\ÉU¯)Ùlz³)ŒÔˆ¹ŽAì&êíÞlö™Owv…1GA_¯tæâÊœwÁð&‚Ù..^˜:;Ù3ž=
O‚{¦_ÝD¸Òí¶¿ù²)¹Å9†»:Q¯Ñí‹%¡-Dt®é–£¤FûX-2týBV?t- Jù˜S]Bo‚
ƒ_—NÝÅ¥—âº(¸6LôÐ›ÝX=ø2=—šŽ]ª‰ï²Ï™LseJ"PÓÉ©NãÜ¢@”´Vz«kæ•ò~ n£ÌWÉ¢÷vs—š:•Ï’Îºt5ù‚y
b×Øñyâðó«ªµ ùæÂxW¸GÔ+»fœ»Œ…“ää(Þ©N€èŒ"¦—2âŒµã BÎI$Ù±9§Ú5§E#~oÀl…©ˆ«%ñÐù^Õ3“Ó>ýüa†ì
Â¾&;É¢,B:k{ºè®,ëT+Ašd;“ß»” ØKMž@ür•áÈ¿Õ]j¹è_}9E	FÕ„}£et‘3ùøá
™4kÊœƒžÿ6„™§ÉùÁ3Uq¯`ôWþ}:LÞµ‚£<žÛ5æJqÖBc&Lµµ33!0½Ÿ û¢Zþ\µøqdêW‰?Õq€m¾(	Ì°ƒ70œZÓ
yí¥Öå>»òT4‹*tC©¬B3ëòiÁçÒâõƒ4@|U²Z©œ;i0[o7ãùèmÛðŠêÎÔ§Ü
ZìOµ*ô‚c\rŸåK„”G„¸’]È0­‰ŒH`aùÍ%6”9Ü#a;ŒuEîª%«3Ö¿ ëÏ¯”~tr.UWÍ¸½²œª²T4a‘5$S\Õ#½ïFø©Y^¿–èð)çØflÆÇàÛ>Ò9
ñ)ŠÎÿ>žÒ£U¡÷KðÕNÎ2úMa7ø6€¬6˜A®Šº˜©1QÝ‚äÉg$ç†ÎE|#‡Äü*j¡œïDlLÃ¯Õ59^‹Sâîî­ej5­jßXÖ¦[Eõ
\œôäU‡´!ÉRAÕÝÒ…†kÑ„ŠÜ!ˆõzÑ
!ÛÑ2«û6ì‚k=ö´€]&«êŠ±ËØ{¢UŠû¨Æ~mªƒ7»VZÚ“=–«_4¬ïÛjRzÇçVnzö×œ©µ9€{iç‹¡©„WÐ;Ï†
Û~ädâú[Ó©2uC­Ñ(i‡›¶jXš¾¡Pò·;¤:áŸªÊ é‹-eu­më¥­âcJ£„¨ôûFÚd[™9ªC§1P d&“º3]ZlÏY!‹„kUƒià¥³ÅéÜÒ#³}†Æ
¢- ºÝ’-˜UÝ:^‹îÞ¾XêZÖ(î³‚ÞÇ(™š®ï8q§xô«¼]V‡-u_TËû2N29M­Jømè›¾2ð¨¹zÙÔÕ¡-„X Ö
×§÷†;ÔÊCï[dáäƒRUZàñVÔ2¯õHÄßÐlî#è~µ»È4;º³"B€g÷ ÷–ªMö´ä4ùŒ¨èb)bÀxB×IóÀò“h/
é¦ê›÷‡¿¸ºõ±sC[KPyf’[vI0LÈ3úë:ðµ=‰³!Ê\,¤¥ õgz¨Š’Ó­ÕSšMiígäè äéi&ïsÛ¢Ü%zÝ(Œ^»4îáÞJE„k& ¸à·Vq
´éÅ»=ÜaWž©°#é9]>D8–Ñ„O7xˆ·oê’J’¤QÅ§µåC­Gñ8®ÏU„M "£ˆxÉ &çí.íLur4ä O§Ê\+®¡ËÀN<ÉÞlÆDäOÚÛ–ê×e@
‹u¶—ú—ÖFbL9Å¹kl™c"þä ¼D4?Ìc&.„èé,ÞÃäŒZ”¿
¼7_|£®þ1ßÅ™–3²d»àÇƒw0-PÌFé¼=Ú¡Ã=´Ôó®÷˜v¡ßi¡$ÓÎ:ÌJÀØHQoåÕÐÞë,qöa»!Åâ
T4'*%m›¥k<Ã§ˆ‹«uŒ{[Mº˜}—¥&l	$Ê!œã0b¢|åŽ(õi>sºA|âm=":|Où
+PVú6)ábÙ#ßžZ˜Y¸°[Vº6˜ÂÍÍ&bÄŒj©œŒÙé´KeÀ´§‘¯LG¸’Ùá˜K|‘—à9#Z¨êOý[ž<wœÌsš:ðó]/îÌXk_ÐÈQög=œ«a
²ÈÏà~1”Ü«
Õ×ª\À–)²ãîja")^òt¡>¾k—OÎ{öÚ¼Ðí&»”‰õ2>çÙõy±­w q[)}²=>H|¦v[TÜuq8@0èx‚¿6%{8AŸ´êUÉ^kwJl½š-‹ctŸµüL
ˆœls-pG•)U{¸fãß¥wC³´ŠIg‡NW^ÔEB‡~õ´ÚÇ”5)$ê~¤d¶3´¶¹¿‰P€¶O"däºø)ÕƒY-÷Ûˆ,ÙÝrP
Í%ŠòK·£ÖïÁúË’*+;Q»Cw>ÓÚº¤kÃÆÉ¬‚]±]n9RÏç·¾ÊjQfY‚}^&•R=¨ÙóÍM¸›÷×,ÿ.=VÇ:V¶;Á An=Ï2“Ö©õƒo¹E—r>Üvÿ3s
eÉø‹ù‹¿‰s_o¸½»•ú93ÿÎi‹—8^]©J>ž¾uŸúî¥ù£…îÆÿû_ß9Õ•‚’ ÿPK      $%çÓXé  F  
lastnode.gif%S=‹SQ"ÅRlXˆ…¯ÐXE-„)4ØHÄOl“N2!Å!+"é¢¬‚…¸ä¬*fê¤1UŠÅ
ì¦2`1ž÷Þ7wÎœsæ½ûïÝ¼±¿CMúCU>U.UîŽ?ßÿ8«ÕjEQÔëõF£Ñl6Ë²lµZív»ßï÷z½n·Ûétüiå{{szm¿ýtþõädþñÃ+&"%2 21“0)“1yæXH„
TÈ„<¯²’(©’)yV²‘©‘9öNêdˆ ¨Àöl€fe6fÏ~8‹° ›°g{¤EY•MÙ“ n‹±›±g¥8«³9{å 	^’ýƒ7*`P‡»!/*b)
-qPSñTjb&žjÁF]ÌÊ 9H…PÈ–@)$(ú¢ xin#LÕÓ,ˆ‘ÀW3õôÚ$Óæêi%§Óí`X˜$áDCh¸ÌÁ=([ðÒìŸ  ˜˜G2Ú <GË ]qvs˜`@9
ã¼¤°Ê%-AÇ\ÃhÑ¬š1ZÐ‘èˆž3Lâ„b
ü_<wïèÒ`0‡£Ñh<Ïf³étºX,–ËåjµZ¯×›Íf»Ýúß³Éä°ªªøpœ<ÏâZüñ/Ü.®’Ÿ+M>?+v¯<þ~ôæËÁÎåGOžŸîß=8A·ŸÞ~{¹{çEùëúEºõPK
      $%Kr³•  º     link.gif%SMHUQ}F R¾„×ßSL7Š.ŠAT’¨‡©za…‹VØµZ¸ÈÅ%äan* c¨HÈ‰ÀŒÜæ*JO
”‹|IÊ´¨M3ÓÀåœsçÌ7ß÷Í½éöæ¦S; ?Á"ò'ò%òÝŒÆû™û³ëEEEÅÅÅ¥¥¥ñx<‘H$“ÉêêêºººîîîL&“J¥ZZZd0’®®¸>É—…g++'®
0@PTD Fâ9$ &âW‘˜!0ˆWb ÀB Ñ½ 1D4 ­Ð+(Þ@ƒ1 Š÷Ó32a o¯ibdÆÀ(ÎFoS@ŠW’
Aq¢h4•yã†ª0Z§wM†¾Ð`¢à’´¥˜)0‰+T(W«lX(ˆš2Õl¤L¨Ê6–Š¢¤4ÖÇÙ ”ûÖ"0‹›¥bÈð9÷Nµ‘§ƒ°¸•èN³µSÃÌ$2T´
5—Ñ¸å`¼Øû;¨¡*ŒÍ
-im4ÄG¢–©BíªgÑ£S€Ìc»¤^‚Y%ä–hØ\Íhb¯7š6Z¥CÖÍÅg@žÔ“+ÀÿE|wöôôôd³ÙÑÑÑ¹¹¹©©©ÅÅÅ¥¥¥\.·ººº±±‘Ïçå÷úØØxEöáˆ/
â;ûì_8X|¤$Ù99vèb¾¨roô*‚Øæ¿Ðßß›)Ü·vbøÑòÓ¡Â¦l+¼ÉuÖ+,›¹—*2³·Òó}é«ò£àíÎoU±m›ÊÎ”ÌSûHkMâûóÇó·ïî:’n<ýr¨ùp
{ÃÇøƒ¶XoÍÚÍÚòú¶ØŸäòîwçÏÎWN÷»^7`ËëÏ¿¶Âñ“/¾>¹06ùaúxyýßíe°ÿPK      $%šŸÙ  N  
node.gif%S=‹SQ"àRlP¢`c›)Ö`#Áo¬E:!,,óÒX<²V²°˜.Ê*l!.ù+‚Š™:iL•b!»©XŒgÆÇ½÷Í3çœyïÉ³Ç÷¶w·¨N(¢Ì§Ì¥ÌÝ)â
×éÇŸ•J¥(ŠjµZ«Õêõz£Ñh6›­V«×ëu»ÝN§Ón·ýUé;;3:´ß~>ûvv6ût|ÀDB¤DT&f&e2&Ï‰ ™çUV%U2%ÏJ6#52#ÇÞIÌ‘ ¸Âž
Â¬ÌÆìÙgVaöl´(«²){²Ám1Vc3ö¬gu6gO¢4ÁK²ðæ@êp7dàBE,%¡%ªb*ž Á@MÌÄS-Ø¨‹9 C4© ÙÁ( …EŸ@Ô
/Ím„©zš1øj¦žÞA›dÚ\=­ätZ£“$<€h —9¸e^šý4P3àHF„çH`¢+ÎŽc(‡
áq\‚—V¹¤%¨ñ˜k-šõA3F:ÝÑs’IœP€ÿ‹çîÝì÷ûƒÁ`8ŽF£ét:™Læóùb±X.—«Õj½^o6ÿ{1•eŽ“çâ¹CÜ‰?
þ…>ÍË§'ã/¯‹+·_þ8y÷uëÖó½7ç»ö¯Ý£Íç÷ßß^Ú¾{õø`¯sX¼>¼¾E÷ÿPK      $%F‹Œmc    
openfolder.gif%SMhQžC[ˆbCiS¡EÐ@OÎA‹ m…ªH  ñ&¡ s=D¡ââ!`QZ‚ƒƒõ÷ ” ‚PP[j…Äƒ¡H¡6
gÆå½·óæ›ïûf÷øÉ©Ã‡fú!¿Á#'%Ý’Å×¥Çï·3™L’$Ùl6—ËåóùB¡022R,Ëår©TšœœÓÙT§§Û0'?ôg{ys³ýüÙm
CE@B`AÐÈ!0h\Eb`aÐ¨D`PÛ+°‚¨#¢X…]A„Èˆ‚¨ÑÏÎDÈ„B¨ÑÞÒÄÈŒÂ¨ÁÆn“
Š F%)²¢(jE§i¼(ú;otTƒ±:»ë2ì…IH²–v`&aÒPhXH„4ÔV5@Wfš”5ÙÎÒPŒ”%Àû8";€ñâØz³†Y&†ŸEXÃ;ÓF‘e
+1œfog†¹Iä˜hê.£swÊâ¼8ú¨£ŒÏ
=ém,4Fb–™BëjgµcÓ@Üc¿d^‚[¥–Xú\Ýhâ¨wš>Z£CÞÍ5f@‘´“ÀÿEc÷†+•JµZ­ÕjFcmm­Õju:õõõ­­­n·ÛëõôÏv³ù0MSÿp4
Å¨ÿþ/Œ'@û '›×z‡¾¼\>VëAa_Ò|ðîF~ÿÎ·+w–¯÷ ÕoöwVç”j³—¾UVn
ì^Îœož“«£§æï¶ž|¼?~6?Ïg>4’Ë³«¿¾½wjÏÞ+IºðéééÁ3¯_½(~®O¼©ïÜGþPK      $%1ÜqC   F   
tm.gifs÷t³°L``h` ÿÿÿ+þdad``dÐñA2L²=ý+W?;01×+âìáÎcïï˜ò¬sÙ«SÛô‚¬PK      $%)Àál	  D  
vertline.gif%S=‹SQ"Å[H±Ax‚¦1[Eì¦Ð`£×l“NË°ÿ Å!k§ ¦‹°
Âš_°"ˆ˜©“ÆT)ÂÂn*ã™qàqï}sçÌ9gÞ{ú|ÿÁýÃ]*éETùT¹T¹;Gü>ÿôëºV«EQ¯×FY–Íf³ÕjµÛí~¿ßëõºÝn§ÓñW•Ìé½]úÕüÇÅÅüËçwL$D
Jd@eb&aR&còÌ±©	y^e%QR%Sò¬d#1R#3rìÔÉ<9 P+ìÙ !ÌÊlÌžýpa6aÏöH‹²*›²'Üc56cÏJqVgsö$ÊA¼$ûoTÀ wC^
TÄRZâ *¦â©ÔÄL<Õ‚º˜0”As ¡,RHPô	D
ðÒÜF˜ª§Y#¯fêé´I¦ÍÕÓJN§5ÚÁ°0IÂˆ†Ðp™ƒ{P¶à¥Ù?A01Žd´AxŽ–A!ºâì8æ0Á€rÇ%xIa•KZ‚¹†Ñ¢Y4c´ #Ñ-=g ™Ä	Å
ø¿xî>ÒÁ`0G£Ñx<žÍfÓét±X,—ËÕjµ^¯7›Ív»õ¿×“ÉiUUñá8y.ž;Ä½øâ_xT´ÉwšÏÎ&ß^7î¾üyöáûÉîÞ‹£7W‡ONnÞ–Óã¯{ûoo=.ë=üPK
    '»/(—zH,   -    ¶    index.htmlPK     '»/(0‰  »    ¶T  info.htmlPK     '»/(gEª
~            ¶’  window.htmlPK       $% ­ƒ  <  	           ¶e  blank.gifPK       $%±Ê‚–+
/   	           ¶  aline.gifPK       $%+‡áÍ[  …             ¶á  closedfolder.gifPK    
$%O£Ñƒ‹  µ             ¶j  doc.gifPK       b&Ðg¶×)  ÷)             ¶  foldertree.gifPK    
$%çÓXé  F             ¶_B  lastnode.gifPK       $%Kr³•  º             ¶•D  link.gifPK    
$%šŸÙ  N             ¶PG  node.gifPK       $%F‹Œmc               ¶ŠI  openfolder.gifPK    
$%1ÜqC   F              ¶L  tm.gifPK       $%)Àál	  D             ¶€L  vertline.gifPK      
³N var doalert = true; var noalert = false; var invalidfields = ""; var digits = "0123456789"; var
lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"; var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; var
whitespace = " \t\n\r"; var decimalPointDelimiter = "."; var phoneNumberDelimiters = "()-. "; var
validUSPhoneChars = digits + phoneNumberDelimiters; var validWorldPhoneChars = digits + phoneNumberDelimiters +
"+" + "/"; var SSNDelimiters = "- "; var AccountNumberDelimiters = "- "; var validSSNChars = digits +
SSNDelimiters; var digitsInSocialSecurityNumber = 9; var digitsInAccountNumber = 8; var digitsInUSPhoneNumber =
10; var ZIPCodeDelimiters = "-"; var ZIPCodeDelimeter = "-"; var validZIPCodeChars = digits +
ZIPCodeDelimiters; var digitsInZIPCode1 = 5; var digitsInZIPCode2 = 9; var creditCardDelimiters = " "; var
mPrefix = "You did not enter a value into the "; var mSuffix = " field. This is a required field. Please enter
it now."; var USStateCodeDelimiter = "|"; var USStateCodes =
"AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY
|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|AE|AA|AE|AE|AP"; var validNameChars = "'-.,
";

var sLastName = "Last Name"; var sFirstName = "First Name"; var sWorldLastName = "Family Name"; var
sWorldFirstName = "Given Name"; var sTitle = "Title"; var sCompanyName = "Company Name"; var sUSAddress =
"Street Address"; var sWorldAddress = "Address"; var sCity = "City"; var sState = "State Code"; var sWorldState
= "State, Province, or Prefecture"; var sCountry = "Country"; var sZIPCode = "ZIP Code"; var sWorldPostalCode =
"Postal Code"; var sPhone = "Phone Number"; var sFax = "Fax Number"; var sEmail = "Email"; var sSSN = "Social
Security Number"; var sAccountNumber = "Account Number";

var iState = "This field must be a valid two character U.S. state abbreviation (like CA for California). Please
re-enter it now."; var iZIPCode = "This field must be a 5 or 9 digit U.S. ZIP Code (like 94043). Please
re-enter it now."; var iUSPhone = "Your telephone number needs to be in the correct format, including an area
code, such as 8605554496."; var iWorldPhone = "Your telephone number needs to be in the correct format,
including an area code, such as 8605554496, or a country code, such as 85225390000."; var iUSFax = "Your fax
number needs to be in the correct format, including an area code, such as 8605554496."; var iWorldFax = "Your
fax number needs to be in the correct format, including an area code, such as 8605554496, or a country code,
such as 85225390000."; var iSSN = "This field must be a 9 digit numeric social security number (like
123456789). Please re-enter it now."; var iAccountNumber = "This field must be an 8 digit numeric account
number (like 12345678). Please re-enter it now." var iEmail = "To submit your e-mail, you must provide a valid
e-mail address in the correct format, such as name@domain.com."; var iDay = "This field must be a day number
between 1 and 31.  Please re-enter it now."; var iMonth = "This field must be a month number between 1 and 12.
Please re-enter it now."; var iYear = "This field must be  4 digit year number.  Please re-enter it now."; var
iString = "This field must be text of some kind.  Please re-enter it now."; var iNumber = "This field must be a
number (like 9, 1.234 or 0.1234 if it's a decimal).  Please re-enter it now.";

var pEntryPrompt = "Please enter a "; var pState = "2 character code (like CA)."; var pZIPCode = "5 or 9 digit
U.S. ZIP Code (like 94043)."; var pUSPhone = "10 digit U.S. phone number (like 415 555 1212)."; var pWorldPhone
= "international phone number."; var pSSN = "9 digit U.S. social security number (like 123 45 6789)."; var
pEmail = "valid email address (like foo@bar.com)."; var pNumber = "number (like 9, 1.234 or 0.1234 if it's a
decimal)."; var defaultEmptyOK = false;

// Make a blank array of size n (1..n), populated with zeroes function makeArray(n) { for (var i = 1; i <= n;
i++) { this[i] = 0; } return this; }

// Make an array called daysInMonth var daysInMonth = makeArray(12); daysInMonth[1] = 31; daysInMonth[2] = 29;
daysInMonth[3] = 31; daysInMonth[4] = 30; daysInMonth[5] = 31; daysInMonth[6] = 30; daysInMonth[7] = 31;
daysInMonth[8] = 31; daysInMonth[9] = 30; daysInMonth[10] = 31; daysInMonth[11] = 30; daysInMonth[12] = 31;

// ******************************************************* // String and number functions
*************************** // ******************************************************* // Is the string
non-existent (null) or is it's length equal to zero? function isEmpty(s) {   return ((s == null) || (s.length
== 0)) }

// ******************************************************* // Is the string empty (see above) or is it full of
whitespace characters (tabs, returns etc) function isWhitespace (s) {   var i; if (isEmpty(s)) return true;
            
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (whitespace.indexOf(c) == -1) return false; }
	return true; } // ******************************************************* // Convert all the underscores in
	a string to spaces function underscoreToSpace (s) {   var i; var returnString = "";
        
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (c=="_") {returnString += " "} else {returnString
	+= c}; } return returnString; } // ******************************************************* // Convert all
	the spaces in a string to dots function spaceToDot (s) {   var i; var returnString = "";
        
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (c==" ") {returnString += "."} else {returnString
	+= c}; } return returnString; } // ******************************************************* // Are all the
	characters in the string in the bag (a set of characters)? function allCharsInBag (s, bag) { flag=true; for
	(i = 0; i < s.length; i++) { flag=flag&&(bag.indexOf(s.charAt(i)) != -1); } return (flag); } //
	******************************************************* // Strip out all the characters in the string that
	are in the bag function stripCharsInBag (s, bag) {   var i; var returnString = "";
        
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (bag.indexOf(c) == -1) returnString += c; } return
	returnString; } // ******************************************************* // Strip out all the characters
	in the string that are NOT in the bag function stripCharsNotInBag (s, bag) {   var i; var returnString =
	"";
        
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (bag.indexOf(c) != -1) returnString += c; } return
	returnString; } // ******************************************************* function stripWhitespace (s) //
	Strip out all the characters in the string that are whitespace { return stripCharsInBag (s, whitespace) }
	// ******************************************************* // Is the character in the string? function
	charInString (c, s) {   for (i = 0; i < s.length; i++) {   if (s.charAt(i) == c) return true; } return
	false }

// ******************************************************* // Strip any leading whitespace characters from the
string function stripInitialWhitespace (s) {   var i = 0; while ((i < s.length) && charInString (s.charAt(i),
whitespace)) i++; return s.substring (i, s.length); } //
******************************************************* // Is the character a letter? function isLetter (c) {
return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) ) } //
******************************************************* // Is the character a number? function isDigit (c) {
return ((c >= "0") && (c <= "9")) } // ******************************************************* // Is the
character a letter or number? function isLetterOrDigit (c) {   return (isLetter(c) || isDigit(c)) } //
******************************************************* // Does the string represent a valid integer (7, 111,
0)? function isInteger (s) {   var i; if (isEmpty(s)) if (isInteger.arguments.length == 1) return
defaultEmptyOK; else return (isInteger.arguments[1] == true);
            
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (!isDigit(c)) return false; } return true; } //
	******************************************************* // Does the string represent a valid signed integer
	(+7, -111)? function isSignedInteger (s) {   if (isEmpty(s)) if (isSignedInteger.arguments.length == 1)
	return defaultEmptyOK; else return (isSignedInteger.arguments[1] == true); else { var startPos = 0; var
	secondArg = defaultEmptyOK; if (isSignedInteger.arguments.length > 1) secondArg =
	isSignedInteger.arguments[1]; if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") ) startPos = 1; return
	(isInteger(s.substring(startPos, s.length), secondArg)) } } //
	******************************************************* // Does the string represent a positive integer (7,
	111, +9)? function isPositiveInteger (s) {   var secondArg = defaultEmptyOK; if
	(isPositiveInteger.arguments.length > 1) secondArg = isPositiveInteger.arguments[1];
                        
    return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s, 10) > 0) ) ); } //
		 ******************************************************* // Does the string represent a non-negative
		 integer (7, 111, +9, 0)? function isNonnegativeInteger (s) {   var secondArg = defaultEmptyOK; if
		 (isNonnegativeInteger.arguments.length > 1) secondArg = isNonnegativeInteger.arguments[1];
                        
    return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s, 10) >= 0) ) ); } //
		 ******************************************************* // Does the string represent a negative
		 integer (-9)? function isNegativeInteger (s) {   var secondArg = defaultEmptyOK; if
		 (isNegativeInteger.arguments.length > 1) secondArg = isNegativeInteger.arguments[1];
                        
    return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s, 10) < 0) ) ); } //
		 ******************************************************* // Does the string represent a non-positive
		 integer (-9, 0)? function isNonpositiveInteger (s) {   var secondArg = defaultEmptyOK; if
		 (isNonpositiveInteger.arguments.length > 1) secondArg = isNonpositiveInteger.arguments[1];
                        
    return (isSignedInteger(s, secondArg) && ( (isEmpty(s) && secondArg)  || (parseInt (s, 10) <= 0) ) ); } //
		 ******************************************************* // Does the string represent a floating-point
		 number (9.1, 0.5)? function isFloat (s) {   var i; var seenDecimalPoint = false; if (isEmpty(s)) if
		 (isFloat.arguments.length == 1) return defaultEmptyOK; else return (isFloat.arguments[1] == true); if
		 (s == decimalPointDelimiter) return false;
            
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if ((c == decimalPointDelimiter) &&
	!seenDecimalPoint) seenDecimalPoint = true; else if (!isDigit(c)) return false; } return true; } //
	******************************************************* // Does the string represent a signed
	floating-point number (-9.1, +0.5)? function isSignedFloat (s) {   if (isEmpty(s)) if
	(isSignedFloat.arguments.length == 1) return defaultEmptyOK; else return (isSignedFloat.arguments[1] ==
	true); else { var startPos = 0; var secondArg = defaultEmptyOK; if (isSignedFloat.arguments.length > 1)
	secondArg = isSignedFloat.arguments[1]; if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") ) startPos = 1;
	return (isFloat(s.substring(startPos, s.length), secondArg)) } } //
	******************************************************* function isAlphabetic (s) // Is the string composed
	exclusively of letters? {   var i; if (isEmpty(s)) if (isAlphabetic.arguments.length == 1) return
	defaultEmptyOK; else return (isAlphabetic.arguments[1] == true);
            
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (!isLetter(c)) return false; } return true; } //
	******************************************************* function isAlphanumeric (s) // Is the string
	composed exclusively of letters and digits? {   var i; if (isEmpty(s)) if (isAlphanumeric.arguments.length
	== 1) return defaultEmptyOK; else return (isAlphanumeric.arguments[1] == true);
            
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (! (isLetter(c) || isDigit(c) ) ) return false; }
	return true; } // ******************************************************* function isValidName (s) // Is
	the string composed exclusively of valid name characters? // i.e. alphabetic and may contain
	"validNameChars" {   var i; var containsLetter = false; if (isEmpty(s)) if (isAlphabetic.arguments.length
	== 1) return defaultEmptyOK; else return (isAlphabetic.arguments[1] == true);
            
    for (i = 0; i < s.length; i++) { var c = s.charAt(i); if (!isLetter(c)) { if
	(!allCharsInBag(c,validNameChars)) return false; } else containsLetter = true; }
	
	if (containsLetter == true) return true; else return false; }

// ******************************************************* // Format checking
functions****************************** // ******************************************************* // Given a
string and a series of characters/length values, return a formatted string // SSN = 012345678 // reformat (SSN,
"", 3, "-", 2, "-", 4) // SSS becomes 012-34-5678 function reformat (s) {   var arg; var sPos = 0; var
resultString = ""; for (var i = 1; i < reformat.arguments.length; i++) { arg = reformat.arguments[i]; if (i % 2
== 1) resultString += arg; else { resultString += s.substring(sPos, sPos + arg); sPos += arg; } } return
resultString; } // ******************************************************* // Is the string a valid social
security number, excluding symbols (111223333)? function isSSN (s) {   if (isEmpty(s)) if
(isSSN.arguments.length == 1) return defaultEmptyOK; else return (isSSN.arguments[1] == true); return
(isInteger(s) && s.length == digitsInSocialSecurityNumber) } //
******************************************************* // Is the string a valid account number? function
isAccountNumber (s) {  if (isEmpty(s)) if (isAccountNumber.arguments.length == 1) return defaultEmptyOK; else
return (isAccountNumber.arguments[1] == true); return (isInteger(s) && s.length == digitsInAccountNumber) } //
******************************************************* // Is the string a valid US phone number, excluding
symbols (8885551212)? function isUSPhone (s) { return (isInteger(s) && s.length == digitsInUSPhoneNumber) } //
******************************************************* function isInternationalPhone (s) // Do all the
characters in the string fit in the bag of valid world phone number characters? { return (allCharsInBag(s,
validWorldPhoneChars)); } // ******************************************************* function isZIPCode (s) //
Is the string a valid zipcode, minus the symbols (12345, 123412345)? { return (isInteger(s) && ((s.length ==
digitsInZIPCode1) || (s.length == digitsInZIPCode2))) } //
******************************************************* function isState (s) // Is the string a US state
abbreviation(CT, VT, az)? { upState = s.toUpperCase(); return ( (USStateCodes.indexOf(upState) != -1) &&
(upState.indexOf(USStateCodeDelimiter) == -1) ) } // *******************************************************
function isEmail (s) // Is the string in a valid email address format (x@y.z)? { if (isWhitespace(s)) return
false; var i = 1; var sLength = s.length; while ((i < sLength) && (s.charAt(i) != "@")) { i++ } if ((i >=
sLength) || (s.charAt(i) != "@")) return false; else i += 2; while ((i < sLength) && (s.charAt(i) != ".")) {
i++ } if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false; else return true; } //
******************************************************* function isYear (s) // Is the string a valid positive
year (43, 1911, 2011)? {   if (isEmpty(s)) if (isYear.arguments.length == 1) return defaultEmptyOK; else return
(isYear.arguments[1] == true); if (!isNonnegativeInteger(s)) return false; return (s.length == 4); } //
******************************************************* // Is the integer in the range a to b? function
isIntegerInRange (s, a, b) {   if (isEmpty(s)) if (isIntegerInRange.arguments.length == 1) return
defaultEmptyOK; else return (isIntegerInRange.arguments[1] == true); if (!isInteger(s, false)) return false;
var num = parseInt (s, 10); return ((num >= a) && (num <= b)); } //
******************************************************* // Is the float in the range a to b? function
isFloatInRange (s, a, b) {   if (isEmpty(s)) if (isFloatInRange.arguments.length == 1) return defaultEmptyOK;
else return (isFloatInRange.arguments[1] == true); if (!isFloat(s, false)) return false; var num = parseFloat
(s); return ((num >= a) && (num <= b)); } // ******************************************************* function
isMonth (s) // Is the string a month value (1..12)? { return isIntegerInRange (s, 1, 12); } //
******************************************************* // Is the string a day of the month (1..31)? function
isDay (s) { return isIntegerInRange (s, 1, 31); } // ******************************************************* //
Given a year, return the number of days February will have. function daysInFebruary (year) {           return (
((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 ); } //
******************************************************* // Given year, month and day strings (1917, 11, 4) are
they valid dates? function isDate (year, month, day) {       if (! (isYear(year, false) && isMonth(month,
false) && isDay(day, false))) return false; var intYear = parseInt(year); var intMonth = parseInt(month); var
intDay = parseInt(day); if (intDay > daysInMonth[intMonth]) return false; if ((intMonth == 2) && (intDay >
daysInFebruary(intYear))) return false; return true; }

// ******************************************************* // Alert functions
*************************************** // ******************************************************* // Given a
string field, remove all characters after the asterisk and convert all the underscores to spaces function
cleanupName (theField) { s = theField.name; s = s.substring(0,s.indexOf("*")); s = underscoreToSpace (s);
return(s); } // ******************************************************* // Load the window status bar with a
string function prompt (s) {   window.status = s; } // *******************************************************
// Load the window status bar with the pEntryPrompt message and a string function promptEntry (s) {
window.status = pEntryPrompt + s; } // ******************************************************* // Send up an
alert window notifying a user that a field is empty function warnEmpty (theField) {   theField.focus();
s=cleanupName(theField); alert(mPrefix + s + mSuffix); return false; } //
******************************************************* // Send up an alert window notifying a user that a
field is invalid based on a given string function warnInvalid (theField, s) { //theField.focus();
//theField.select(); alert(s); return false; } // ******************************************************* //
Functions To Interactively Check Various Fields ******* //
******************************************************* // Format a number to be a social security number
(111223333 become 111-22-3333) function reformatSSN (SSN) { return (reformat (SSN, "", 3, "-", 2, "-", 4)) }

// Is the given field a SSN? If so, reformat it. If it's empty and that's OK then return true. function
checkSSN (theField, emptyOK) {   if (checkSSN.arguments.length == 1) emptyOK = defaultEmptyOK; if ((emptyOK ==
true) && (isEmpty(theField.value))) return true; else {  var normalizedSSN = stripCharsInBag(theField.value,
SSNDelimiters) if (!isSSN(normalizedSSN, false)) return warnInvalid (theField, iSSN); else { //CIGNA requested
format change for SSN on 3/12/01 -- bblake //theField.value = reformatSSN(normalizedSSN); theField.value =
normalizedSSN; return true; } } }

// Is the given field a valid Account Number? If it's empty and that's OK then return true. function
checkAccountNumber (theField, emptyOK) {   if (checkAccountNumber.arguments.length == 1) emptyOK =
defaultEmptyOK; if ((emptyOK == true) && (isEmpty(theField.value))) return true; else {  var normalizedAccNum =
stripCharsInBag(theField.value, AccountNumberDelimiters) if (!isAccountNumber(normalizedAccNum, false)) return
warnInvalid (theField, iAccountNumber); else { theField.value = normalizedAccNum; return true; } } }

// Is the given field a year? If it's empty and that's OK then return true. function checkYear (theField,
emptyOK) {   if (checkYear.arguments.length == 1) emptyOK = defaultEmptyOK; if ((emptyOK == true) &&
(isEmpty(theField.value))) return true; if (!isYear(theField.value, false)) return warnInvalid (theField,
iYear); else return true; }


// Is the given field a month? If it's empty and that's OK then return true. function checkMonth (theField,
emptyOK) {   if (checkMonth.arguments.length == 1) emptyOK = defaultEmptyOK; if ((emptyOK == true) &&
(isEmpty(theField.value))) return true; if (!isMonth(theField.value, false)) return warnInvalid (theField,
iMonth); else return true; }


// Is the given field a day? If it's empty and that's OK then return true. function checkDay (theField,
emptyOK) {   if (checkDay.arguments.length == 1) emptyOK = defaultEmptyOK; if ((emptyOK == true) &&
(isEmpty(theField.value))) return true; if (!isDay(theField.value, false)) return warnInvalid (theField, iDay);
else return true; }

// Is the given field a date? If it's empty and that's OK then return true. function checkDate (yearField,
monthField, dayField, labelString, OKtoOmitDay) {           if (checkDate.arguments.length == 4) OKtoOmitDay =
false; if (!isYear(yearField.value)) return warnInvalid (yearField, iYear); if (!isMonth(monthField.value))
return warnInvalid (monthField, iMonth); if ( (OKtoOmitDay == true) && isEmpty(dayField.value) ) return true;
else if (!isDay(dayField.value)) return warnInvalid (dayField, iDay); if (isDate (yearField.value,
monthField.value, dayField.value)) return true; alert (iDatePrefix + labelString + iDateSuffix) return false }

// Is the given field a number? // If an alert is requested and the field is invalid then put up an alert.
function checkNumber (theField, isAlert) { if (isEmpty(theField.value)) { if (isAlert) warnEmpty(theField);
return false; } else { if (isInteger(theField) || isSignedInteger(theField) || isFloat (theField) ||
isSignedFloat (theField)) { return true; } else { if (isAlert) warnInvalid (theField, iNumber); return false; }
} }

// Is the given field a string? // If an alert is requested and the field is invalid then put up an alert.
function checkString (theField, isAlert) { if (isEmpty(theField.value)) { if (isAlert) warnEmpty(theField);
return false; } else { return true; } }

// Shift the field to all uppercase characters. // Is the given field a state? // If an alert is requested and
the field is invalid then put up an alert. function checkState (theField, isAlert) { theField.value =
theField.value.toUpperCase(); if (!isState(theField.value)) { if (isAlert) warnInvalid (theField, iState);
return false; } else { return true; } }

// Convert a string to zip code format (12345 stays the same, 123456789 becomes 12345-6789) function
reformatZIPCode (ZIPString) {   if (ZIPString.length == 5) return ZIPString; else return (reformat (ZIPString,
"", 5, "-", 4)); }

// Is a given field a valid zipcode format? // Reformat it if it's OK. // If an alert is requested and the
field is invalid then put up an alert. function checkZIPCode (theField, isAlert) { var normalizedZIP =
stripCharsInBag(theField.value, ZIPCodeDelimiters); if (!isZIPCode(normalizedZIP)) { if (isAlert) warnInvalid
(theField, iZIPCode); return false;
    
  } else { theField.value = reformatZIPCode(normalizedZIP) return true; } }

// Convert a string to US phone number formatting (1112223333 becomes 111.222.3333) function reformatUSPhone
(USPhone) { return (reformat (USPhone, "",3, ".", 3, ".", 4)); }

// Is a given field a valid US phone number format? // Reformat it if it's OK. // If an alert is requested and
the field is invalid then put up an alert. function checkUSPhone (theField, isAlert) { var normalizedPhone =
stripCharsInBag(theField.value, phoneNumberDelimiters); if (!isUSPhone(normalizedPhone)) { if (isAlert) { if
(theField.name.indexOf('Fax') == -1) warnInvalid (theField, iUSPhone); else warnInvalid (theField, iUSFax);
return false; } } else { theField.value = reformatUSPhone(normalizedPhone) return true; } }

// Is a given field a valid international phone number format? // If an alert is requested and the field is
invalid then put up an alert. function checkInternationalPhone (theField, isAlert) { if
(!isInternationalPhone(theField.value)) { if (isAlert) { if (theField.name.indexOf('Fax') == -1) warnInvalid
(theField, iWorldPhone); else warnInvalid (theField, iWorldFax); return false; } } else { return true; } }

// Is a given field a valid phone number format of any kind? // If an alert is requested and the field is
invalid then put up an alert. function checkAnyPhone (theField, isAlert) { f=theField.value;
f=stripCharsInBag(f, phoneNumberDelimiters); if (f.length <= 10) { return (checkUSPhone(theField, isAlert)); }
else { return (checkInternationalPhone(theField, isAlert)); } }

// Is a given field a valid email format? // If an alert is requested and the field is invalid then put up an
alert. function checkEmail (theField, isAlert) { if (!isEmail(theField.value)) { if (isAlert) warnInvalid
(theField, iEmail); return false; } else { return true; } }

// Given a form and a string which is the name of a field in that form, return the form elementobject with that
name // If the field is unfound alert the user function getnamedelement(theform,thename) { for
(i=0;i<theform.elements.length;i++) { if (theform.elements[i].name==thename) { return(theform.elements[i]); } }
alert("The form element named "+thename+" was not found in the form named "+theform.name+"."); return(false); }

// Are either or both of the fields in the form valid e-mails? function eitherormail (theform,e1,e2) {
email1=getnamedelement(theform,e1); email2=getnamedelement(theform,e2); if (!isWhitespace(email1.value)) {
checkEmail(email1,noalert); } if (!isWhitespace(email2.value)) { checkEmail(email2,noalert); }
return(isEmail(email1.value) || isEmail(email2.value)); }

var invalidfields;

// ***************************************************************************************** // This function
checks to see if all the required fields are entered and whether they are // a valid format, if so then it
returns true otherwise it returns false function valid(theform, boolAlert) { invalidfields = "";
allarevalid=true;
	
	for (i = 0; ((i < theform.elements.length)); i++) //go through every element... { thisonesvalid=true;
	elementname=theform.elements[i].name; wheresthestar=elementname.indexOf('*');
		
		cleanfieldname=underscoreToSpace(elementname.substring(0, wheresthestar)); if (wheresthestar > 0) //if
		there is a star in the field name then it's required... { if (isEmpty(theform.elements[i].value)) { //
		if its empty then throw up a warning (if requested). Store the field name as invalid and send back
		false
        		
				if (boolAlert==true) warnEmpty(cleanfieldname); invalidfields = invalidfields + cleanfieldname
				+ " is empty.\n"; allarevalid = false; } else { // if it isnt empty then... // perform check to
				see what the type of required field is and whether its valid
				wheresthecolon=elementname.indexOf(':'); if (wheresthecolon > 0) {
				endofrequiredtype=wheresthecolon; } else { endofrequiredtype=elementname.length; }
				requiredtype=elementname.substring(wheresthestar+1,endofrequiredtype); if (requiredtype ==
				"number") thisonesvalid = checkNumber(theform.elements[i], noalert)
				
				if (requiredtype == "string") thisonesvalid = checkString(theform.elements[i], noalert)
				
	  			if (requiredtype == "state") thisonesvalid = checkState(theform.elements[i], noalert)
				
	  			if (requiredtype == "zip") thisonesvalid = checkZIPCode(theform.elements[i], noalert)
				
	  			if (requiredtype == "phone") thisonesvalid = checkUSPhone(theform.elements[i], noalert)
				
	  			if (requiredtype == "email") thisonesvalid = checkEmail(theform.elements[i], noalert)
				
				if (thisonesvalid == false) invalidfields = invalidfields + cleanfieldname + " is
				misformatted.\n"; allarevalid = allarevalid && thisonesvalid; } } } //end for return
				(allarevalid); }


// ***************************************************************************************** // This function
checks to see if the form is valid and then submits it, otherwise it alerts // the user function validSend
(theform, boolAlert) { invalidfields=""; if (valid(theform, boolAlert)) { theform.submit(); return (true); }
else { if (invalidfields != "") alert("The following fields were either left empty or improperly
formatted:\n"+invalidfields); return (false); } }

<!DOCTYPE html> <html> <head><title>TypeScript Greeter</title></head> <body> <script src="greeter.js"></script>
</body> </html>//C:\Script\JavaScript\greeter.ts // In your editor, type the following JavaScript code in
greeter.ts: // TypeScript example for use with VS13 function greeter(person) { return "Hello, " + person; }

var user = "Jane User";

document.body.innerHTML = greeter(user);

//C:\Script\JavaScript\greeter.ts // In your editor, type the following JavaScript code in greeter.ts: //
TypeScript example for use with VS13

function greeter(person: string) { return "Hello, " + person; }

var user = "Jane User";

document.body.innerHTML = greeter(user); //C:\Script\JavaScript\greeter.ts // In your editor, type the
following JavaScript code in greeter.ts: // TypeScript example for use with VS13 function greeter(person) {
return "Hello, " + person; }

var user = "Jane User";

document.body.innerHTML = greeter(user); // Ultimate client-side JavaScript client sniff. Version 3.02 // (C)
Netscape Communications 1999.  Permission granted to reuse and distribute. // Revised 17 May 99 to add
is_nav5up and is_ie5up (see below). // Revised 20 Dec 00 to add is_gecko and change is_nav5up to is_nav6up //
also added support for IE5.5 Opera4&5 HotJava3 AOLTV // Revised 22 Feb 01 to correct Javascript Detection for
IE 5.x, Opera 4, //                      correct Opera 5 detection //                      add support for
winME and win2k //                      synch with browser-type-oo.js // Revised 26 Mar 01 to correct Opera
detection

// Everything you always wanted to know about your JavaScript client // but were afraid to ask. Creates "is_"
variables indicating: // (1) browser vendor: //     is_nav, is_ie, is_opera, is_hotjava, is_webtv,
is_TVNavigator, is_AOLTV // (2) browser version number: //     is_major (integer indicating major version
number: 2, 3, 4 ...) //     is_minor (float   indicating full  version number: 2.02, 3.01, 4.04 ...) // (3)
browser vendor AND major version number //     is_nav2, is_nav3, is_nav4, is_nav4up, is_nav6, is_nav6up,
is_gecko, is_ie3, //     is_ie4, is_ie4up, is_ie5, is_ie5up, is_ie5_5, is_ie5_5up, is_hotjava3, is_hotjava3up,
//     is_opera2, is_opera3, is_opera4, is_opera5, is_opera5up, is_aol3, is_aol4, is_aol5, is_aol6 // (4)
JavaScript version number: //     is_js (float indicating full JavaScript version number: 1, 1.1, 1.2 ...) //
(5) OS platform and version: //     is_win, is_win16, is_win32, is_win31, is_win95, is_winnt, is_win98,
is_winme, is_win2k //     is_os2 //     is_mac, is_mac68k, is_macppc //     is_unix //     is_sun, is_sun4,
is_sun5, is_suni86 //     is_irix, is_irix5, is_irix6 //     is_hpux, is_hpux9, is_hpux10 //     is_aix,
is_aix1, is_aix2, is_aix3, is_aix4 //     is_linux, is_sco, is_unixware, is_mpras, is_reliant //     is_dec,
is_sinix, is_freebsd, is_bsd //     is_vms // // See
http://www.it97.de/JavaScript/JS_tutorial/bstat/navobj.html and //
http://www.it97.de/JavaScript/JS_tutorial/bstat/Browseraol.html // for detailed lists of userAgent strings. //
// Note: you don't want your Nav4 or IE4 code to "turn off" or // stop working when new versions of browsers
are released, so // in conditional code forks, use is_ie5up ("IE 5.0 or greater") // is_opera5up ("Opera 5.0 or
greater") instead of is_ie5 or is_opera5 // to check version in code which you want to work on future //
versions.

// convert all characters to lowercase to simplify testing var agt=navigator.userAgent.toLowerCase();

// *** BROWSER VERSION *** // Note: On IE5, these return 4, so use is_ie5up to detect IE5. var is_major =
parseInt(navigator.appVersion); var is_minor = parseFloat(navigator.appVersion);

// Note: Opera and WebTV spoof Navigator.  We do strict client detection. // If you want to allow spoofing,
take out the tests for opera and webtv. var is_nav  = ((agt.indexOf('mozilla')!=-1) &&
(agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1) &&
(agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)); var is_nav2 = (is_nav && (is_major == 2)); var
is_nav3 = (is_nav && (is_major == 3)); var is_nav4 = (is_nav && (is_major == 4)); var is_nav4up = (is_nav &&
(is_major >= 4)); var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) || (agt.indexOf("; nav") !=
-1)) ); var is_nav6 = (is_nav && (is_major == 5)); var is_nav6up = (is_nav && (is_major >= 5)); var is_gecko =
(agt.indexOf('gecko') != -1);


var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1)); var is_ie3    = (is_ie &&
(is_major < 4)); var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5")==-1) ); var is_ie4up  =
(is_ie && (is_major >= 4)); var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) ); var
is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1)); var is_ie5up  = (is_ie && !is_ie3 &&
!is_ie4); var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);

// KNOWN BUG: On AOL4, returns false if IE3 is embedded browser // or if this is the first browser window
opened.  Thus the // variables is_aol, is_aol3, and is_aol4 aren't 100% reliable. var is_aol   =
(agt.indexOf("aol") != -1); var is_aol3  = (is_aol && is_ie3); var is_aol4  = (is_aol && is_ie4); var is_aol5
= (agt.indexOf("aol 5") != -1); var is_aol6  = (agt.indexOf("aol 6") != -1);

var is_opera = (agt.indexOf("opera") != -1); var is_opera2 = (agt.indexOf("opera 2") != -1 ||
agt.indexOf("opera/2") != -1); var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1); var is_opera5 =
(agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1); var is_opera5up = (is_opera && !is_opera2 &&
!is_opera3 && !is_opera4);

var is_webtv = (agt.indexOf("webtv") != -1);

var is_TVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1)); var is_AOLTV =
is_TVNavigator;

var is_hotjava = (agt.indexOf("hotjava") != -1); var is_hotjava3 = (is_hotjava && (is_major == 3)); var
is_hotjava3up = (is_hotjava && (is_major >= 3));

// *** JAVASCRIPT VERSION CHECK *** var is_js; if (is_nav2 || is_ie3) is_js = 1.0; else if (is_nav3) is_js =
1.1; else if (is_opera5up) is_js = 1.3; else if (is_opera) is_js = 1.1; else if ((is_nav4 && (is_minor <=
4.05)) || is_ie4) is_js = 1.2; else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3; else if
(is_hotjava3up) is_js = 1.4; else if (is_nav6 || is_gecko) is_js = 1.5; // NOTE: In the future, update this
code when newer versions of JS // are released. For now, we try to provide some upward compatibility // so that
future versions of Nav and IE will show they are at // *least* JS 1.x capable. Always check for JS version
compatibility // with > or >=. else if (is_nav6up) is_js = 1.5; // NOTE: ie5up on mac is 1.4 else if (is_ie5up)
is_js = 1.3

                           // HACK: no idea for other browsers; always check for JS version with > or >= //
						   else is_js = 0.0;

                           // *** PLATFORM *** var is_win   = ( (agt.indexOf("win")!=-1) ||
						   (agt.indexOf("16bit")!=-1) ); // NOTE: On Opera 3.0, the userAgent string includes
						   "Windows 95/NT4" on all //        Win32, so you can't distinguish between Win95 and
						   WinNT. var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows
						   95")!=-1));

// is this a 16 bit compiled version? var is_win16 = ((agt.indexOf("win16")!=-1) || (agt.indexOf("16bit")!=-1)
|| (agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("windows 16-bit")!=-1) );

var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) || (agt.indexOf("windows
				16-bit")!=-1));

var is_winme = ((agt.indexOf("win 9x 4.90")!=-1)); var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1));

// NOTE: Reliable detection of Win98 may not be possible. It appears that: //       - On Nav 4.x and before
you'll get plain "Windows" in userAgent. //       - On Mercury client, the 32-bit version will return "Win98",
but //         the 16-bit version running on Win98 will still return "Win95". var is_win98 =
((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1)); var is_winnt = ((agt.indexOf("winnt")!=-1) ||
(agt.indexOf("windows nt")!=-1)); var is_win32 = (is_win95 || is_winnt || is_win98 || ((is_major >= 4) &&
(navigator.platform == "Win32")) || (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

var is_os2   = ((agt.indexOf("os/2")!=-1) || (navigator.appVersion.indexOf("OS/2")!=-1) ||
				(agt.indexOf("ibm-webexplorer")!=-1));

var is_mac    = (agt.indexOf("mac")!=-1); // hack ie5 js version for mac if (is_mac && is_ie5up) is_js = 1.4;
var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) || (agt.indexOf("68000")!=-1))); var is_macppc = (is_mac
&& ((agt.indexOf("ppc")!=-1) || (agt.indexOf("powerpc")!=-1)));

var is_sun   = (agt.indexOf("sunos")!=-1); var is_sun4  = (agt.indexOf("sunos 4")!=-1); var is_sun5  =
(agt.indexOf("sunos 5")!=-1); var is_suni86= (is_sun && (agt.indexOf("i86")!=-1)); var is_irix  =
(agt.indexOf("irix") !=-1);    // SGI var is_irix5 = (agt.indexOf("irix 5") !=-1); var is_irix6 =
((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1)); var is_hpux  = (agt.indexOf("hp-ux")!=-1); var
is_hpux9 = (is_hpux && (agt.indexOf("09.")!=-1)); var is_hpux10= (is_hpux && (agt.indexOf("10.")!=-1)); var
is_aix   = (agt.indexOf("aix") !=-1);      // IBM var is_aix1  = (agt.indexOf("aix 1") !=-1); var is_aix2  =
(agt.indexOf("aix 2") !=-1); var is_aix3  = (agt.indexOf("aix 3") !=-1); var is_aix4  = (agt.indexOf("aix 4")
!=-1); var is_linux = (agt.indexOf("inux")!=-1); var is_sco   = (agt.indexOf("sco")!=-1) ||
(agt.indexOf("unix_sv")!=-1); var is_unixware = (agt.indexOf("unix_system_v")!=-1); var is_mpras    =
(agt.indexOf("ncr")!=-1); var is_reliant  = (agt.indexOf("reliantunix")!=-1); var is_dec   =
((agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) || (agt.indexOf("dec_alpha")!=-1) ||
(agt.indexOf("alphaserver")!=-1) || (agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1)); var
is_sinix = (agt.indexOf("sinix")!=-1); var is_freebsd = (agt.indexOf("freebsd")!=-1); var is_bsd =
(agt.indexOf("bsd")!=-1); var is_unix  = ((agt.indexOf("x11")!=-1) || is_sun || is_irix || is_hpux || is_sco
||is_unixware || is_mpras || is_reliant || is_dec || is_sinix || is_aix || is_linux || is_bsd || is_freebsd);

var is_vms   = ((agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1));


var commwindow = null; var okToCallInstaller = false; var okToCloseInstaller = false; var timer = null; var
timer2 = null; var timer3 = null; var savedComponents; var savedTraceState; var JavaScriptTraceState = false;
var savedWidth; var savedHeight; var codebase=null; var installer=null;

window.onload = send_Ready ;

function jsready() { document.CachedAppletSupporter.JSReady(); }

function JSReadyConfirm() { clearInterval(timer3); }


function send_Ready() { timer3 = setInterval("jsready();", 250); }

function installComplete(componentName, returnCode, closeWindow, windowToClose) { cAlert("installComplete(" +
  componentName + "," + returnCode + "," + closeWindow + "," + windowToClose + ")"); focus(); if (commwindow ==
  null) { commwindow = windowToClose; } document.CachedAppletSupporter.installComplete(componentName,
  returnCode); }

function trace(traceMessage) { cAlert("ready to call applet trace(" + traceMessage + ")");
  document.CachedAppletSupporter.trace(traceMessage); }

function installComponent(componentName, width, height, traceObject) { savedComponents = new
  Object(componentName); savedTraceState = new Object(traceObject); savedWidth      = new Object(width);
  savedHeight     = new Object(height); timer = setInterval("installComponent1();", 800); }

function installComponent1() { clearInterval(timer); if (installer!=null) { insturl=installer; } else{
  insturl="Installer.html"; } cAlert("installComponent(" + savedComponents + "," + savedWidth + "," +
  savedHeight + "," + savedTraceState + ")"); if (commwindow == null || commwindow.closed) { if
  (JavaScriptTraceState) { commwindow=window.open(insturl, "InstallerWindow"); // a window with a toolbar, etc.
  } else { commwindow=window.open(insturl, "InstallerWindow", "width=" + savedWidth + ",height=" +
  savedHeight); } } timer = setInterval("installComponent2();", 100); }

function installComponent2() { cAlert("installComponent2()"); if (okToCallInstaller) { clearInterval(timer);
  commwindow.setTraceState(savedTraceState); commwindow.installComponent(savedComponents); } }

function closeInstaller() { timer2 = setInterval("closeInstaller1();", 250); }

function closeInstaller1() { cAlert("closeInstaller()"); if (okToCloseInstaller) { clearInterval(timer2); if
  (commwindow != null) { commwindow.close(); commwindow = null; } } }

function loadWrappedApplet(appletToLoad) { cAlert("loadWrappedApplet(" + appletToLoad + ")"); var ii; var
  tempApplet; var appletName = "CachedAppletLoader"; var tempAppletName;

  document.applets[appletName].loadWrappedApplet(appletToLoad); ii = 1; while (true) { tempAppletName =
  appletName + ii; tempApplet = document.applets[tempAppletName]; if (tempApplet == null) { break; } else {
  tempApplet.loadWrappedApplet(appletToLoad); } ii++; } }

function postMessage(message) { cAlert("postMessageApplet(" + message + ")"); var ii; var tempApplet; var
  appletName = "CachedAppletLoader"; var tempAppletName;

  document.applets[appletName].postMessage(message); ii = 1; while (true) { tempAppletName = appletName + ii;
  tempApplet = document.applets[tempAppletName]; if (tempApplet == null) { break; } else {
  tempApplet.postMessage(message); } ii++; } }

function clearMessage() { cAlert("clearMessage"); var ii; var tempApplet; var appletName =
  "CachedAppletLoader"; var tempAppletName;

  document.applets[appletName].clearMessage(); ii = 1; while (true) { tempAppletName = appletName + ii;
  tempApplet = document.applets[tempAppletName]; if (tempApplet == null) { break; } else {
  tempApplet.clearMessage(); } ii++; } }

function showRemovalPage(width, height) {

  // create HODRemove.html filename from HODCached.html file location

  var HODREMOVEHTML_STRING = "HODRemove.html";

  var inputString = new String(location); var removePage; var removewindow;

  removePage = inputString.substring(0, inputString.lastIndexOf("/") + 1) + HODREMOVEHTML_STRING;

  if (JavaScriptTraceState) { removewindow=window.open(removePage, "RemoverWindow"); // a window with a
	toolbar, etc. } else { removewindow=window.open(removePage, "RemoverWindow", "width=" + width + ",height="
	+ height); } }

function cAlert(alertMessage) { if (JavaScriptTraceState) { alert(alertMessage); } }

function setOkToCallInstaller(value) { if (value) { document.CachedAppletSupporter.installerStarted(); }
  okToCallInstaller = value; }


document.write("Is Java enabled? " + navigator.javaEnabled() );

or

<script> document.write(new java.lang.String("I'm here")); </script> %PDF-1.3 %âãÏÓ 1 0 obj <</Author (Dave
Child)/CreationDate ()/Creator (Xara Xtreme)/Keywords ()/ModDate ()/Producer (Xara Xtreme Pro \(Xara.com\) PDF
export 3.0.0.68)/Subject ()/Title (JavaScript Cheat Sheet)>> endobj 2 0 obj <</OpenAction 285 0 R/PageMode
/UseNone/Pages 3 0 R/Type /Catalog/Version /1.3>> endobj 3 0 obj <</Count 1/Kids [14 0 R]/Type /Pages>> endobj
14 0 obj <</BleedBox [0 0 595.277 841.891]/Contents 283 0 R/Group 17 0 R/MediaBox [0 0 595.277 841.891]/Parent
3 0 R/Resources <</ExtGState 22 0 R/Font 30 0 R/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]/XObject 63 0
R>>/TrimBox [0 0 595.277 841.891]/Type /Page>> endobj 17 0 obj <</CS /DeviceCMYK/I true/K false/S
/Transparency/Type /Group>> endobj 21 0 obj <</BM /Compatible>> endobj 22 0 obj <</G0 21 0 R/G1 23 0 R/G10 35 0
R/G100 159 0 R/G101 160 0 R/G102 161 0 R/G103 162 0 R/G104 163 0 R/G105 164 0 R/G106 165 0 R/G108 168 0 R/G109
169 0 R/G11 36 0 R/G110 170 0 R/G111 171 0 R/G112 172 0 R/G113 173 0 R/G114 174 0 R/G115 175 0 R/G116 176 0
R/G117 177 0 R/G118 178 0 R/G119 179 0 R/G12 37 0 R/G120 180 0 R/G121 181 0 R/G122 182 0 R/G123 183 0 R/G124
184 0 R/G125 185 0 R/G127 198 0 R/G128 199 0 R/G129 200 0 R/G13 38 0 R/G130 201 0 R/G131 202 0 R/G132 203 0
R/G133 204 0 R/G134 205 0 R/G135 206 0 R/G136 207 0 R/G137 208 0 R/G138 209 0 R/G139 210 0 R/G14 39 0 R/G140
211 0 R/G142 224 0 R/G143 225 0 R/G144 226 0 R/G145 227 0 R/G146 228 0 R/G147 229 0 R/G148 230 0 R/G149 231 0
R/G15 40 0 R/G151 244 0 R/G152 245 0 R/G153 246 0 R/G154 247 0 R/G156 260 0 R/G157 261 0 R/G158 262 0 R/G159
263 0 R/G16 41 0 R/G160 264 0 R/G161 265 0 R/G162 266 0 R/G163 267 0 R/G17 42 0 R/G18 43 0 R/G19 44 0 R/G2 24 0
R/G20 45 0 R/G21 46 0 R/G22 47 0 R/G23 48 0 R/G24 49 0 R/G25 50 0 R/G27 64 0 R/G28 65 0 R/G29 66 0 R/G3 25 0
R/G30 67 0 R/G31 68 0 R/G32 69 0 R/G33 70 0 R/G34 71 0 R/G35 72 0 R/G36 73 0 R/G37 74 0 R/G38 75 0 R/G39 76 0
R/G4 26 0 R/G40 77 0 R/G41 78 0 R/G42 79 0 R/G43 80 0 R/G44 81 0 R/G45 82 0 R/G46 83 0 R/G47 84 0 R/G48 85 0
R/G49 86 0 R/G5 27 0 R/G50 87 0 R/G52 100 0 R/G53 101 0 R/G54 102 0 R/G55 103 0 R/G56 104 0 R/G57 105 0 R/G58
106 0 R/G59 107 0 R/G60 108 0 R/G61 109 0 R/G62 110 0 R/G63 111 0 R/G64 112 0 R/G65 113 0 R/G66 114 0 R/G67 115
0 R/G68 116 0 R/G69 117 0 R/G7 31 0 R/G70 118 0 R/G71 119 0 R/G72 120 0 R/G73 121 0 R/G74 122 0 R/G75 123 0
R/G76 124 0 R/G77 125 0 R/G78 126 0 R/G79 127 0 R/G80 128 0 R/G81 129 0 R/G82 130 0 R/G83 131 0 R/G84 132 0
R/G85 133 0 R/G87 146 0 R/G88 147 0 R/G89 148 0 R/G9 34 0 R/G90 149 0 R/G91 150 0 R/G92 151 0 R/G93 152 0 R/G94
153 0 R/G95 154 0 R/G96 155 0 R/G97 156 0 R/G98 157 0 R/G99 158 0 R>> endobj 23 0 obj <</BM /Normal>> endobj 24
0 obj <</BM /Compatible>> endobj 25 0 obj <</BM /Normal>> endobj 26 0 obj <</BM /Compatible>> endobj 27 0 obj
<</BM /Normal>> endobj 28 0 obj <</BaseFont /Verdana-Bold/Encoding /WinAnsiEncoding/FirstChar 0/FontDescriptor
29 0 R/LastChar 255/Subtype /TrueType/Type /Font/Widths [1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 342
402 587 867 711 1272 862 332 543 543 711 867 361 480 361 689 711 711 711 711 711 711 711 711 711 711 402 402
867 867 867 617 964 776 762 724 830 683 650 811 837 546 555 771 637 948 847 850 733 850 782 710 682 812 764
1128 764 737 692 543 689 543 867 711 711 668 699 588 699 664 422 699 712 342 403 671 342 1058 712 687 699 699
497 593 456 712 650 979 669 651 597 711 543 711 867 1000 711 1000 332 711 587 1049 711 711 711 1777 710 543
1135 1000 692 1000 1000 332 332 587 587 711 711 1000 711 964 593 543 1068 1000 597 737 342 402 711 711 711 711
543 711 711 964 598 850 867 480 964 711 587 867 598 598 711 721 711 361 711 598 598 850 1182 1182 1182 617 776
776 776 776 776 776 1094 724 683 683 683 683 546 546 546 546 830 847 850 850 850 850 850 867 850 812 812 812
812 737 735 713 668 668 668 668 668 668 1018 588 664 664 664 664 342 342 342 342 679 712 687 687 687 687 687
867 687 712 712 712 712 651 699 651]>> endobj 29 0 obj <</Ascent 1005/AvgWidth 776.434/CapHeight 728/Descent
-209/Flags 4/FontBBox [-73 -207 1707 1000]/FontFile2 280 0 R/FontName /Verdana-Bold/ItalicAngle 0/MaxWidth
1272/StemV 176/Type /FontDescriptor>> endobj 30 0 obj <</F107 166 0 R/F6 28 0 R/F8 32 0 R>> endobj 31 0 obj
<</BM /Compatible>> endobj 32 0 obj <</BaseFont /Verdana/Encoding /WinAnsiEncoding/FirstChar 0/FontDescriptor
33 0 R/LastChar 255/Subtype /TrueType/Type /Font/Widths [1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 352
394 459 818 636 1076 727 269 454 454 636 818 364 454 364 454 636 636 636 636 636 636 636 636 636 636 454 454
818 818 818 545 1000 684 686 698 771 632 575 775 751 421 455 693 557 843 748 787 603 787 695 684 616 732 684
989 685 615 685 454 454 454 818 636 636 601 623 521 623 596 352 623 633 274 344 592 274 973 633 607 623 623 427
521 394 633 592 818 592 592 525 635 454 635 818 1000 636 1000 269 636 459 818 636 636 636 1521 684 454 1070
1000 685 1000 1000 269 269 459 459 545 636 1000 636 977 521 454 981 1000 525 615 352 394 636 636 636 636 454
636 636 1000 545 645 818 454 1000 636 542 818 542 542 636 642 636 364 636 542 545 645 1000 1000 1000 545 684
684 684 684 684 684 984 698 632 632 632 632 421 421 421 421 775 748 787 787 787 787 787 818 787 732 732 732 732
615 605 620 601 601 601 601 601 601 955 521 596 596 596 596 274 274 274 274 612 633 607 607 607 607 607 818 607
633 633 633 633 592 623 592]>> endobj 33 0 obj <</Ascent 1005/AvgWidth 721.227/CapHeight 728/Descent -209/Flags
4/FontBBox [-49 -206 1446 1000]/FontFile2 281 0 R/FontName /Verdana/ItalicAngle 0/MaxWidth 1076/StemV 93/Type
/FontDescriptor>> endobj 34 0 obj <</BM /Normal>> endobj 35 0 obj <</BM /Compatible>> endobj 36 0 obj <</BM
/Normal>> endobj 37 0 obj <</BM /Compatible>> endobj 38 0 obj <</BM /Normal>> endobj 39 0 obj <</BM
/Compatible>> endobj 40 0 obj <</BM /Normal>> endobj 41 0 obj <</BM /Compatible>> endobj 42 0 obj <</BM
/Normal>> endobj 43 0 obj <</BM /Compatible>> endobj 44 0 obj <</BM /Normal>> endobj 45 0 obj <</BM
/Compatible>> endobj 46 0 obj <</BM /Normal>> endobj 47 0 obj <</BM /Compatible>> endobj 48 0 obj <</BM
/Normal>> endobj 49 0 obj <</BM /Compatible>> endobj 50 0 obj <</BM /Normal>> endobj 52 0 obj <</ExtGState 59 0
R/XObject 60 0 R>> endobj 53 0 obj <</BitsPerComponent 8/ColorSpace /DeviceCMYK/Filter /FlateDecode/Height
295/Length 2467/Subtype /Image/Type /XObject/Width 1458>> stream x^íØ»	„P  Á~AÌÅÔÀþ;<¬â6˜…ib·iÏq
@Î×>/ã=o     Èñ±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±
(ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±
(ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±
(ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±
(ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±
(ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±
(ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ó±    (ûÚ¦u<Ç
9’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’¤ÿ·MëxŽ     r¾öyïy    @Ž @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™
@™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™
@™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™
@™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @™ @Ù×CRØendstream endobj 55 0 obj <</XObject 56
0 R>> endobj 56 0 obj <</Im0 53 0 R>> endobj 57 0 obj <</BBox [299.16 623.4 474.12 588]/Filter
/FlateDecode/Group 17 0 R/Length 44/Matrix [1 0 0 1 0 0]/Resources 55 0 R/Subtype /Form/Type /XObject>> stream
xœ347Ñ³4S0 BcS=#KK=C3S…ä\^}Ï\—|^ ˆÔendstream endobj 58 0 obj <</BM /Compatible>> endobj 59 0 obj <</G0
58 0 R>> endobj 60 0 obj <</Fm1 57 0 R>> endobj 61 0 obj <</BBox [299.245 623.387 474.002 588.001]/Filter
/FlateDecode/Group 17 0 R/Length 122/Resources 52 0 R/Subtype /Form/Type /XObject>> stream
xœ+ä2²´Ô321U0µ°Ð300TÈå…‹ ics…^s œ6¨®^tsrx3àbf†F@1s$³ÍŒŒÑLÂ"Õ•ƒaÈìp-Þ<^4TðæÕw7PH/æÕwË5TpÉç
äÒOÎÉ,pÍKQð Pà Ê(/(endstream endobj 63 0 obj <</Fm126 196 0 R/Fm141 222 0 R/Fm150 242 0 R/Fm155 258 0 R/Fm164
278 0 R/Fm26 61 0 R/Fm51 98 0 R/Fm86 144 0 R>> endobj 64 0 obj <</BM /Compatible>> endobj 65 0 obj <</BM
/Normal>> endobj 66 0 obj <</BM /Compatible>> endobj 67 0 obj <</BM /Normal>> endobj 68 0 obj <</BM
/Compatible>> endobj 69 0 obj <</BM /Normal>> endobj 70 0 obj <</BM /Compatible>> endobj 71 0 obj <</BM
/Normal>> endobj 72 0 obj <</BM /Compatible>> endobj 73 0 obj <</BM /Normal>> endobj 74 0 obj <</BM
/Compatible>> endobj 75 0 obj <</BM /Normal>> endobj 76 0 obj <</BM /Compatible>> endobj 77 0 obj <</BM
/Normal>> endobj 78 0 obj <</BM /Compatible>> endobj 79 0 obj <</BM /Normal>> endobj 80 0 obj <</BM
/Compatible>> endobj 81 0 obj <</BM /Normal>> endobj 82 0 obj <</BM /Compatible>> endobj 83 0 obj <</BM
/Normal>> endobj 84 0 obj <</BM /Compatible>> endobj 85 0 obj <</BM /Normal>> endobj 86 0 obj <</BM
/Compatible>> endobj 87 0 obj <</BM /Normal>> endobj 89 0 obj <</ExtGState 96 0 R/XObject 97 0 R>> endobj 90 0
obj <</BitsPerComponent 8/ColorSpace /DeviceCMYK/Filter /FlateDecode/Height 1109/Length 125312/Subtype
/Image/Type /XObject/Width 1458>> stream x^ì½‰³Uº·[Ž8O8Ohc‹8 ¢((ˆ¢€Š"
‚à„ˆ¨ˆ"³Ì3›6°ÁgÛÏÓmw«Ñç|çDŸóïž¸q¿8qãþ—ßî®¦(Ö›ïÊ¬¬½«ØÏñ„ÃÞkeî¬¬ª•¿\ù®Ž::w*""""""""""bÍ)ŽïxL¡ëÉç#""""""
""""ÖœäØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96"""
"""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96
""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽx¤÷]Ù£°|Ü¤³ËõÔ¸ã¼¶ˆˆˆˆˆˆˆˆˆ˜¯äØˆGúÒ}ƒ
Þµïÿ*÷÷ë7xm1_É±±Ú¾¾Oá¥{«Èa·Þ[ÔãŽÂ€kzú\t»ÍJ%ÇFDDDDDDDD¬É±±Ú~<gÉƒ¡L¸ÿ´cÿþ¼yÏ‹V
[öü¤3v¿ÍÝ4’c#"""¶Mo»ð·…_¶îý]’¿_·}U·Ó/rûªÄ>_Søó–=_yû¢ýõúBlm¿[Ù0Å;—5oÉë§RcöãOµ÷úADÄÖ‘«m5rì“¼ýØðWŸz»Ožä
ØˆˆˆˆmÓÛ/¾:8,÷ý/žèõU‰;¦¼w½·Rûëõ…ØÚê:Ê;—?_°ò
¯ŸJ}ÇCQïíw?ÛÑë[Grl¬¶-•cýaÕ¶9÷wíéîW’äØˆˆˆˆmÓØû§õ»wå1"äÍ¯(üºcÿ_¼}äØXÆäØzæöá«oqûÊê·K^óöA’c#"Ö®äØXm[:Ç–
¿nß÷çá½îs÷Í’±m›cËÉ>ÓÁë/‹k^™|¾·í¢äØXÆäØrßÌÅwy}eQ5K¼m%ÇFD¬]É±±Ú¶FŽ-ÙºÿŸú^ÚÝÝ¿äØˆˆˆˆmÓ49v5Æ†×y©êsçm»(
96Öƒ±9öÏ;÷ÿÇ=]®wûKëgóVö¶]”±v%ÇÆjkåØjØûñK÷>Vˆq|ÿ!íf<9úØE£&œºcêœ¾_±ñÍƒcœ¿zcW=íí_HrlDDDÄ¶iš[N|ph;¯Ï4ÎñR
'o›¥’cc=›cËÝÓçÝâõ—Æû®ìQP>îm·(96"bíJŽÕÖÊ±+Í„û\tMaÃ„©—&åÙª±¦q‹×W¹äØˆˆˆˆmS+Ç¶r0­Íâõ«êm«îvì¶%96ÖƒVŽ:·ÞñÑ¿õ¹ø·
ÏX•‹—oC×‰Ö{Š±v%ÇÆj[­»è¨Þ’²ì¥c'žéõQ.96"""bÛÔÊ±ÙÖô?¾[¾qRègzýÆøæ#O·õÿÉÜe¬±.96ÖƒVŽÝ4cAŸÐÿßôúô+½>c¼õü®…_v
îÿŸåý>Åë=EŽˆX»’ccµ­vŽ-&¾{…5Ñ¸ßk_.96"""bÛ4)ÇV^úÙ÷+&{ýÆøãš­óŽn_1ã‰çŽ±ÆºäØXZ9öð^÷~ÝÞôSùÿÿuÇþ¿(ƒöúõÜøÚ´
ËÊûÖð'o¾Ë¬DŽˆX»’ccµm‰û«n6Ç!¿[¹yº×¾\rlDDDÄ¶iRŽ­Ÿ‡²f9ô–»Ý¾“´2òÉ>Óë]+Ç~ìºÞÁ¬Y®?íb¯ß$¯?û²`FÞ4sáIuðÉ±kW
rì|ìyî•Íõšõ¸£ùŸ7ÓÅmÓÚÞrÞU…~WÜÐœß~QõÆ¿-‘cKÕQËk;äØˆˆˆˆmS/ÇžôðÐ`í/­îõä·ËÖ/ïSµ²U3›ëÝ¤[ó®5ÿºügÊ {œs¹Û·åÂç
ÆŸRÞ§êb?|õ-‰ë¹’c#"Ö®äØÙÔsH_§Ëw+¦Óþ>ôý÷ó¶¦¿[¾aâÚño_¨ïg¯Ï4êû\™y¹úN¶ÚÜuÙµ…eÏO:ó›e^
í³r`­S£¿kÀ5½Ü}ˆµ¥rl][„¶Óšó±{žÿ›àëÔÿª›Ü¶1v;ý¢`ÿR?óÚ—:°ûmÁ~®;óR·­ì~úÅÍ÷pt®ßyÉ5…^\å¶ADDÄ–óæÎW&>8´Æzª
ûýŠoþaýŽµRÿþéÜeõ³—û )T’å©Æcû,¬Ÿ0å’VýÝÊMÓ´¿?®Ù±ô«ÅkFm{öµo
Þ^ó.½¾bõrlåÊÜ°k[ùÏ•eCkÚæû#^<Q?oé[cºiƒGvÜöÖ¬n­V<îR×½÷Aÿ5¯L>ÿ¹>6¿F^mQ‡Uï\sŠ÷ÎXÐû£÷–=ðå’µÏëŸïÎ»uË[
3¯Öë;ìÖ{yž¿IjSñ3@ïw½–Å×U×µzé5Ÿöø³µÿ^iLÊ±õóÐZŒrÉ˜×N÷ú©k¡Ÿ7ïþ¬¼¿Ï¬|B?oé[¯ñK÷>ÖüY¦c¯œ üØoycFWÝ'Óëäõ×ÖÔü»w
î}æë3IÇìÇïà±üäý¥k^ÿk<Ñ®V¾¿±:’cÇ«1«ÆsÖw°§žAÔ¸ÁÛNŒãîz$:gÕ3Žš’´&s¹ú]±ò·TŽmÍÇþdÞòÇ¼¶åæ•ckêGkymcL¥}í¬
û ÷¸3øûz?èºRãðŸ6ìÜZkü×ûýlÞŠÁÞ¶±zŽ¹óá‚®û“ÖÅ.Wë¢}:wå
el^ÿ±jLPÌJ}å¾ÁGŒûÿæÆBã;so¶æ‹„öw×Ô÷o¼íÂßºûáéåØræSÏúbF–ÖÐ:Ž¿lÝû]q^BKäØÛ½ýØðº§‘æºá×íûþ¼{ú‚^÷wíén#F=+:OòªA.
ÕWhÚ¶×6Ie¿šÃºÏ‘¤Ž·®3vLsÃwL=%I½®ÊÓ¿]ºþåÐx=iŸ~Xµe–2mõámÇÓË±û^Ú½Ú?½bçÕ”j]‡i>š~ÞR9¶®Å•[‡Öš´ÔqÐ=e²^ÿ!•™ÿ¸vÛ
âÐ9¾yÒ»¿ñÚgQß¡íÉ»º\ç¶©<zÑ¨	§j
ï˜•¿¿ê¾€î³yÛ@Äú“;ÎÛ³ 1÷™ã×KÖÓ÷´·Í$crì»/¿¡ û’Þþ$©qC¥×/-‘cëY4ëoX>öõ³¼öå’c²<Ç.ÞÏQvmmûðc¶}…·mDDDÌ_åŠšoé}W{*
Ð¸ÒÛž§•E”fFÊ¡U»6MÞVª2UÍyôö%É˜ûos=÷|Yþ;Úï´ÏÝÝÓåú`~§šÅß©vŽ­µö”7yÇ7Iý
šß yÿÞö’T®ê¿ôøWª5îÍú­žÁÔ}—4÷Šå¶¦5/ºÒ÷æœdƒUªÞ»•^z9¶Ô{?ô;óF¼ÔÉë?f{ß.mx­øójçØ}.¾¦ ç^¼cë©g!t»ÕÝ^¹Ö¶ÙöÑ/Õ˜
ÿÿá{‹û…¶§ç½½¶åêzS¯y¨¶yZuW¯…·MD¬É±}5Ö˜ØûŒL£ÆN•Œ¼{öÓc×w”·1ªVYR½Ï–È±§Ñ!´
Í#Èrÿ—û¥9¶æXkY’c#""¶¼ºçl=«–E+UoÄÛn’^Ž=ç™q'ä1~U–¨gó½ý±ŒÉ±e¨ö®Tçm£ÔP=å7¥YS5sìU/N>7ÍükÏ?njüÈzž/ÆzË±uMº§‘‡Y
ÇÑªõ¢¹Ý^ÿiÔûªXç&‹19¶êò„ÎÅ?5ìý8Íõïy4xi-ÕâïT3ÇÖœú<2Ø¢:özÄÛn©Öº±rÖSãRõå©yÓ¡úæRŸ]^ûRõºäqÿµTÍÍÓ½:oÛˆX’c'«gyòº¯^
®>ëK¿KÓhåØZFõê¼m§õ¬Þú~ÖçÉZ"ÇÖ÷Ð6ô—×6$9ö!u¢×^µý²ÌÊ:þFDDÄlj=ïû9‹Ê—Òf)¥Z9öÜá/Ÿ¨9ßÞöÓ¨<<Ë\›c+gþeëþ*ÿ=];ÄÎ
ÿ³Ö·SmŠÒß«FŽ­ñÝ‡³ßëË,VrSO9¶®É¬ü.³Œ£•)ªnŠ×wV?=á4oBÆäØRógC¿—&ÕúHåíU#¥ôwª•cÏxrô±Y®™b\ùâ½í—jÕ·É²~T’ÊÅCÛÑ\À
45aô|¨¦yê}J–xtHŽm;´çÝfÍå¢[hœ9¾ÿvú.®s§ü[Ï‚ý©¡qOR{±³Ôa³rlO]èûL÷8u½ *ûŽ™ƒ‘åy.Yí[û<¶¯+²Öo!Ç>¤jVVRS'Ëø
³©ù’Þw³®ç5@cÕåã&-õïZ+Ë›¿¡1£j({ûÒÊ±Ù¹?·yã¥~»lýxoŸBÆæØR÷ùC¿«9ÖÞv¬öz}”o—þ^5rì˜ùºªo¡\QëÏÕÏÐóyÞõƒþ]OyûQn½ä
Øªã=? c ÷•ŽÙ¦×§_©µ1õ^Ó\Õ/öÞoiÇÑš‡ÊpKýyËÞoT{RŸª›­úùzþXu°u]û÷Ï3‡Õë®k%o_ÊÍ±õügè÷t
3¯Êj_¾NU5rlï}¡|A×àzÿßSZßQõ°cjh§¹°ø¹WOµúÉº&mHÝ#mc×´÷oòÚ½ïÊÁû‚¥ª®¥ÞKzö\yËè;*è9!Ý_Õú^m$½ïcï1"bíJŽV÷±“î
þ´q×=/äõ#õ\ãÏ›÷°úÒwzÚu¾ÓæØh}_kíã^\ÕüLaÒw§òno¿BV+ÇÖ½]­óê[cÂ1}¸}X’c2f<¥±î/[÷þNjmÇÃYºñ7"""fóéžý
I¹Ø7îjÔx0iÜ©ÚÆªï‘4vU6—eFÚµºTŸBùŽ26Õ
V]åXúwý?å@ÞœeZÞ~•›&Ç¶æSküä­9©±l(·Ñø¶üwóÎ±u$·Vmž¡y:I¹¡Ö4l¾~HÈrUBµ£½ý)µ^rìïV6L±þî×ìXúÖÀáí½k<Êá¬5MÓŽ£“ÖFR
¬zC1Y°ÖYMzÆWuTt½ìõSjlŽ-¿_¾ejèw•»{Û	ÍçVþYþ{yçØº¯‘T‹Tµ-tï
é¸éÝOHZ'T×]ÏÞ·~¡Þ{ÖgäöÉ³»{ícTníklmR“¤¿Ysªt¿ÅëGê÷ôùeõõÕkG{}
bmKŽvç”¹=¬Ï>ÝoLû½­qìï×ïXoõ©1 ×G©±9¶îõ¦¿?rÍí‰ß¿YžÌ3ÇÖõ‹jÐ5×¸Ø²÷›P¿Úÿ,ûY*9v²?iŒ¨k
sËûÒ˜]cRÃ<ûÊÉÞ¶±25FJZƒYùVšç»•gk~ Õß«·¼“‡•›ckžªæÚÅô¯µ,ÿ°~çF«/­=æõQnš[Z× šÃœ´‘ÊÛ(s
ÍÌ3ÇÖï'÷5ÎŽ9öEu_!ñ5˜½ø^¯Rë!Ç~òæ»Ì1ø®©ïß˜¦–sQŸ5¶.Í{ÓäØªgaíÓ§sWÊ²¶ŸrWk~qyíÏ49¶æ#…~W÷’¶¡ûk¡ýüè3G<C’wŽ­ycV
zþ%Íý}VôÞ²¬þôÌwìçù's—
õ¡÷@–ó´\åá¡þu/Âk[tßÌÅwÿÎƒ¯eÚZ*Rï%«OYiV€ˆ­+9ö‘ê™ëYª×m[’6Ã.ª,[sšCý†žLÒÍ±7íþ$ëZíoxª½Õ¯ž‡óÚ—kåØú›•³'©yz>¨ù¡
-{¾òj©M¿+*[×[’c‡Õñ×ÚEšãõ‡ˆˆˆ-§µæ Ô¼Ê4¹dQe_-^3Êê7”
%éåØš¥f‰ê`[Ï£k®°×¾Ü´9¶rçÐœGmÛºnP~¤¹ÊåmvO_Ð+ôûyæØËY}©Æ×>dÒœeQÊ}½>ŠÖCŽmew?¬Ú6'Ë{­\ÍÑ3±9¶Î3ë=vÝÑr­Ú9ZÇ06K•
irl©Ì:ôûI5MöÎXÐ»ü÷ÿÔÐ¸?”×æ™c«f‰Õ—2lo^~HG{Þ›Õoì}„¤õuÝïµORÇÕz/Å~–è}¿¹zxí-uütÍê÷›%ë^ôÚ#bíJŽ}¤ªãú¼ÓøTÏyí“
Ôã³fVìw‘LÊ±uïQsh¼>’´žëùviÃk^Ûr­;o5?Øª›’Vrì#Õó\»ßæöƒˆˆˆ-«2=³úþV”%C)ª9œÊB}k¼èµ/5)ÇÖø5ë\¹úå·Î³úŽ}¶½hÚ[ZÙ
°5¾×=€òßÕ|Í§	ý~^9¶2k^ˆæì{í½¾­#Ÿ/Xù„×¾h=äØV&[É:¨åküx¿'7¾6í²Ðþünå¦i•¼ÿ¥ò@ëÚðÍG‡Eç islÕ	ÿMá5
­ûIšSúý<sl+sWý•J®ËuìõìK¨oÝ·ˆco½~•æ¹¯?ÎïõþŠ=ï¬zîYæÏ•«µ²BŸwÊc¨“X¿’c®>ouo9ôY»^‹§õlêqÇÞ¿·rì´9«¥5Ç
Ëø±¥rl©ï)×ôL^%ÏI‘cvLÿªç¹bÏMDDDlY“ž¥Þë>·½§•UH­³åµ/jåØËÇ¾~–×Öóž.×›c¢éCF¥Ê¤²äØV=+k
­GöÉ¼åYýç•c[sk­z&iÕ:†ÁþŽÑcû¯‡ÛªËRÉú<YýÛ}¬#çbë˜§½‡c9oÄKB¯®k½¶EÓæØIùy¨.„êø”ÿžîïYsÆóÊ±“jÌ¤}f%äã=î4ûŸ9tÌ±^{i­÷
¨Ï,e½^{Kåà¡~C5þCZÇN÷NÓÌõORŸ«Ác—ã='DlYÉ±×Ê/e–õlBª¾³µØZÖÕÎ±CsDŠ¦ýNiÉ»T=‹§õi¼ýIŽ}H]»zm±õÔºU¡ïp­éâµÕª—¦þ´•
c§ÉŒ’üó¦}_‡úWvëµ-5KŽ-5ç8ÔN5_J/4ŽWž¤õÒ¬¾óÊ±UW7ÔG¥µ'ŠjîihÝK¹tìÄ3½ö²rlëµ˜pÿã->nÖœèÐ¾¤yozª¶sðo>øžóÚM›cKÍ¥µQ­ŽÒß
Ó³¡{KÆ¼vºÕw^9¶ù,÷æ=_æ5Èª{M©×OkÏ†úHóLx©Is­çJÊ Õ‘iï=&©÷dhiîÁ
bmIŽ}¸;¦¼w}ès.¶6Y¬š{ÚŽæ0xmeµslåé¡þeš±²l­»¨ê¦CcRs
¼¶ˆˆˆØ:êù3+7œ?òå“¼ö±*ëmCó½¶E«c[Ï§7¾;ïV¯m©YslkÞ¤ŽQés‚ß¯h˜\þ;ªCžÔw9¶ê#Z}ä¹îÙgóVm#¶>a=äØVýår^Û¼µæ›æùšÊÐ3Rµ
Ñ½¶2KŽ­÷uª´æºî‘”ÿ\ÏX'Õ*Ê+Ç¶î m}sv7¯m¬zÖ8´
=7[[D÷5B}¨NÚkei={‘æ:7ôÚêû,öoŠQçgh?µ.²×kSrìÃÕúè¡Ï9ÕÙðÚ¦Ñª-òí²õã½¶²Ú9vÒ³™±cå¢æ:Û÷ýYë0Ç¨±}qíÇVmž¡gÌ~Çýjíc¹ê
#Í÷39ö!É±k×¤¹±sâbLz¶=vý˜jçØÖ|hE½¶¥fÍ±¥²ÚPÛb^ë8êyÍ¤~óÈ±­>”UR¯\Í¥mGµKb¶S9¶•éêoÔºu^û<
ÕÑuVškŸ,\õtèoöÎÝ¢Yrli­a«µ‘ôóæµëxÏaä‘ckN²ÕGž÷’öU¹€×^&=ž¥Ž•ß¿5pxTÍt­jÿÕâõc½¶i
ÖÝ9ø^õÚ!bmJŽ}¸Öó6±ße±škÊG>›UíûÖó»æ–Z9vûÚïŠš×óÖ³eÖú™EU3Íë¯(9ö!É±k×÷†;>ôýfžtŒÊŠBk¨ÉØµÞªckÞu¨ÿ–Ì±•]…Ú*óQ
®ÊÚ­uëJÍ#Ç¶êä5.-ªZŒÖ¾Æ¬^9öÎ)s{X£®'—=?éÌ´µ³hÍ=úaÕ¶9^Û´îŸµèîÐ¶TŸßk+³æØ«räúUÅZ<Z³ügº7£ëÙ¤~óÈ±­kFí[Þ¯¿õ<÷Ò
1ÏðÚµ^ƒÏç¯âµ-Uë"Ý¦}_ÇÜ«’ÖgZšköX­ºXÞ9‚ˆµ)9ö!µöHðóxW|ÝêX_¼çQs[1ßyÕÎ±¥µ±cå¢ÕÌ±KÕ=]k>½Tý®Ø×‘ûäØˆˆˆµkã;so}
Çd£iµ2oÞã¡öÕÍ±·¿=ûÚPÿ-™cKeˆ¡öZ7;4ï"f.d9¶5W¼iÆ‚>^Û4*¯W½ƒÐ¶b2ÏzÈ±­},Us¢UwüÍGžnßë‚«Ü>³hÕþÕ}¬â³¬yiå¨±µŒ³æØÒZŸTÏ8‡
Ö‚Ô}¯Ï<rìE£&„×OlØû±×6­ÖšŠiê [séô~U
m¯}Qëú>Mm}^ÿaýÎÞ¹˜V«öÖ]]®s÷kOrìC&=—™÷g\ÒØ'æPrì°Z¯ûËE«‡[û[·…ûäØˆˆˆµ«õ¬5Ö°ÒóÞ¡m5ÍZØ×k+«co|mÚe¡þ[:ÇžôðÐà
º{!5ÃëOæ‘c‡ò>©|Ýk›Våx¡mÅÔl¯‡[~:wÙ@ë5
©ã¯6ËÇM:û¥{+ä‘mÏþrpÄ–Tûàí§¬$ÇÖ¼Y+‹,WÏh~š×g9ö®©ïßj_ûˆ{Þ[h[Ê·½¶Eµ«õüùâç^=ÕkŸÔ‡îÑ¥ÉL¬ï®–4æÜCÄÚ“ûV6,cæH
§1é{3æó”ÛV¯•U¯KêYG¯rìC’c#""Ö®S„¾¿•¯xmÓj­ïòåâ5#½¶²Ú9¶j9„úoé[ó‘­Ì¸\eÞ^2ÛëÍzjÜq^Û´þ¸fÇÒÐ¶¶¼1£«×¶^rl­gåõ±ê
šå£÷>è?mðÈŽÊ½m–Û0ñÝ+¼mTÛFO8ÍÛOYIŽ-­º8åj¼×—Ì#Ç¶ÖØTFëµM«uŸNµÚ½¶¥Zë=Æ^çÎñR§Pû4yº´ÖåmIcÏ=D¬-É±™”c{mÓšô½³&9v²
V­H¹|ìëgyíÉ±IŽˆˆX»þ¸fë¼Ð÷·žÙöÚ¦Õš;®i+9¶LÊ‹*ëŽ]‹/—;°ÖYžÇ¿ÔJî¯ÔKŽ-UŸÚÊgÓªyÄûf.¾ëþ®=Ýíµæ·¤-•ckŽµêD&í‹~»îl
5slý¯mZ­Ï·´×§IÏ ?yó]n{ëÕ+÷
nçµ-5¯÷M%Æž{ˆX[’c2©fµ×6­äØùîk¹IÇ7fÎ9ö!É±kW+¨FŽmef±ãš¶”c7¯‹iÔ.ªlÚë§h9¶•æuüKm+9¶Ôk½æ•Éç«¶õ¥Qyöú
S.‰¹ÇÑ–rl©¹ÖIû¢uT½>Šæ‘c6oÅàPûjäØ:Î¡mý´aç&¯m¹ÖkáÍe×:­¡v?oÞóeÌù³-išskGrìC&ÍÇVÝe¯}©+’ï¾†ÔzÉY·KŽ}HrlDDÄÚõ‡U[f
…¾¿«‘c«vh[Z?Ðk+ÛRŽ-­5Õ¤êQ(ÿôú(šGŽmõò:þ¥Z9öŽ©snðÚÖ[Ž]´Ç9—7g¿[¹iZh=Ï´X°r¨wŽX9v5rÔJÍ#Ç~øê[
IÇV9«×GÑ<rìzœ-<ûÊÉ¡¾~ÙöÑ/×Ÿ}™ÙÎªí²vüÛzÛ,×:fs¬×Û¶äØ‡lÉu­{™2¦~39¶¯j……¶«õ»½¶ÕÎ±¿_¾eª×6FrlDDÄ¶­•ªˆ×6­•Ö‚
mk9¶ò «–‡2n¯}©ÕÌ±c×éK£•Q©ž³×¶^sìRû\tMaÚãÏvl|wÞ­ªÃðóÎýµ^¿$·½5«[Òv¶¾9»[¨Ý‹V
óö±¥Í#Ç–þm¡~¾Z¼f”×¶Ô<rlë:WkâzmÓºå­™W‡¶»Vl©ºçb­›iÕË×¼¾_·7ýTþûzÎ£ï¥ÝÝm–ûÃªmsBÛßˆmWrìC*«¶¾Ë†Ýz¯Û>I5L’î%Çö
µ®ëbÆÀÕÎ±Ó®ÇaIŽˆˆØ¶­4[Nã÷+&‡¶›™·µ[jžâýlÝû]Ú5äóÈ±­º¶Z?Îk›Vë¹È÷‡¿p‚×öhÈ±ËU8¨Ç…ÙO=~ïŒ½ck*hîñ€kz™ýÎùòI¡vY
²Íj›WŽ­Î¡~Fô¾ßm[j9öæIïþ¦¥Ž¿µ>ãW¬íµ
iÕhÑú‹¡ßû±áB¿¯ç¼m…T­ÏPÞ½DDrìCª¦“ê‘…>Oµn ×>ö³<qã3rl_s>vÄ1®vŽ¶KrlDDÄ¶­•£ü´~÷.¯mZU#´-åÇ^[Ùsì[ÏïzÄ¼Ç,Ïàç‘
ckŽh¨}ÌÚ1iÔœk_cÖ‚³rl]§ymcmé;ä—\SXxðšPõ­ã%•_Z}¼þÐÐv¡6:çÒÖ+®¶yåØ²üžš•½&™GŽ­gBíÙ¹ÿæ}üõ7†¶Õ4cA¯mHë~€Ý;ùvÙú
ñ¡ßU.ám+¤µn°¶ãµEÄ¶-9öáZãëý³ÝíµMã's— ~nGÖ$ÇöµÆ§š‹âµ­vŽ­ë@¯mŒäØˆˆˆmÛéCF…Ç;öÿgÌ3~±ÞÜù
³.­ÆM^{ÙslÙÿª›šçâM;[æ‘c[5(ò—Õs¬Ö¾ÞÓåz·½•cK¯m¬µcUÞ¹tÌÄ3¬÷WRMDÕ£´ŽU­áóÌ±o»ð·‡½§ôß^›róÈ±GßñÙGL­Ð4ZëˆV2ßÎz
FcûäÙÝKOÏ­‡ÎO}vdÍë­Ï4ý^]xDlÛ’c®u_0Ë:ÀIZë—oz}ú•^[IŽ¬ÆÈÖþë‚×>¯ûÍG‡µõ£{ô^ÛÉ±Û¶Êp¬±@Úçì“´ÆF²ÏÅ×¸íe[Í±ó0
{ê Áº RóÆ½ö±®xásBÛPm]¯­LÊ±óÚÏZÊ±‹ªÞˆõw'å´V¾¹å]½m¶¤yæØy˜GŽtO÷½ö±&½'4¯ÚkoùþˆÃóÉ¾?J³äP}$¹|ìëgyÛ°LúîR
V¯="¶]É±÷µ‡ž>›%“j“¥Q×Ö6Fõ~Àm/É±“]7~ÚÅÖþÏ|êùàÚ¥æ•cé; ªãprlDDDÔ|ÍÐwxùœºJ´j³¦™ëAŽÝ<rle¡Væf­í–Å×lÚFlÍö‡¯¾Å
ßæ•yÖbŽ”ë%í×çV>j£¿1ËÜÿjy4æØÒšÓ{¾ÇhåÈ•Î]NZïñOµ×ï4×^
ÌÁÓÚ¥±Ÿ=–Öw×—‹V÷Ú"bÛ•ûp›×ßöÑ/¡ÏSÝ#÷ÚÇhŽ5~ŽÇ~‘cÛj.¶õj=å˜ýÏ+ÇN‡Ç>ƒ›$96"""ªþ]è;<¯+)ëP­
¯}Qrììæ‘cK+cþaÕ¶9^Ûv¿Í›¾ûøsÇxí¥æ¸Z}ä5Çµsì¤¿[·ÕÎzþS®zqò¹Þv[Ê£5Ç¶2æ<r^iåÈòóù+†xí=­õ¿Y²îEýÜš—•Ç¶wOŸwK¨oÝoS}"
¯="¶MÉ±Ôšo¢´Ò9ÙÏôêgÎƒHóì9vXÍ3ùÃú­}ÿlÞŠÁ^2¯[k“ë¼
õµoæâ»¼öIêÞ¯¯•×ëDŽˆˆXŸ&=ë·tìÄ¨5“ÜøÚ´Ë¬þÓŒÉ±³›WŽ=oÄK¬~^î7Ämï©9¨¡¾u$M½ö_¶îÿ§P?½·ì¯­çK÷>VÐš‘¡þc2UÁ_¸{ û
{ií{iwó}¬úÄV;Íƒ²Æñªe˜æ=šÖ§{ös§èÑšck•u}¯œÖkï™ôžÍ£þ†®õB}ëVç¤òêÐÏUÜëÛ3©^Ê7ìÚ–æ3#êWóÍ¼ßCÄÚ”ûHõ]o}éûWsR¼>B6×
ÏjhÜüž88–Š­-(É±T×pÜÔø‘µßú.Ž]o#¯[ZÏšé5O“&ùöcÃ;Xãû¬¯96""býj7”cÅŽB¹¡¯îÉÿ5Ô÷·ËÖ÷Ú—JŽÝ¼rìæ¹õÛ›~
õ£9Ÿ=ÏÿÛ‡å¤‡‡šó‚Óæyß.mx-¸)¯™JUvÕøÎÜ›­}”1™ª~G×Š;¦Î¹!ëuaÈ×¬oSW|å‹ot¶þ&½®1ëk¦ñ®Ë®-X´jXšÏ€£5Ç–ÖÜ"'•ä½:×­úçÊ
y³®±Xîk·-mCÏÛ„îùhÛ^Ÿ±~½dÝ8ëuørÉÚç5/Ìë#Ã{ÝWøiÃÎ-Œžpš÷»ˆX›’c‡ýpöâ{­ÏÓVm™•vÌ¢yÂjgõ¹å­™W{}”JŽý7õ½¦¹#GY÷Šê™/¯
¿¢yæØ_§‹µO?®Û¶$Íó¾ú[­qF¥¯96""bý:¾ÿs—¬9–ÚXÏ³Ë´ëH’cg7¯[&ežY®s¤Î«öŒî¥¤Ížµ~œµÊÓäwš¯<ûé±Ç'Íw)“©–Î!ýyËÞoæ<3
î„ØÚIûhÕ|ùäý¥{íu=ñ§†ÆýÖß¥sWóÐ½~<o¿èêÂ¦×§_Y|­É±ÿ¦®—¬kQåÐƒ¯ïãöQ®òƒƒŸ™«¬}T=¯Xß6îxk;!?÷ê©^Ÿ±j¡u¯TêÚ÷þ®=Ý~<už
}:wå âëDŽX¿’c‡Õ\kÝ©{xcî|ØíG*{üó¦ÝŸX}iŽvš,S
9öŸö~¬ñ”§ŽßŒ'G+špªžmÕ}õ¬gËÕ½Ü4ãÝ<sì¤ÙRçRÒ³‰½.¸ª ñ±5¶µLû:‘c#""Ö·_-^?Ö(NSoTc“¤±°Æb^å’cg7Ï[ó@4ŸÒêO¹Qÿ
ßÜèöSTk¨[¶ÔëâõQî}WöH?:wÙ@oî¸æ_7ç×w5&õUjL¦¬…pðZOµ¨û\”.¯—zf×ªÝ 5ÔëCŽ¸­¿YÏP*¿S]Ã´uFt
¥ë^åéåy#9ö!wO_ÐËêOÏÑ¦©ÛóäÍw~Ú¸k‡ÕßwË7LôúHcÒaåêúÛ{ï¥5éÞZóñ;¸ok^™|þ­çwuû*ÿ»¦ ÙQÇ«¼OrlÄú•ÛvTïï
Êß­Ü4Mc3/î¼äš‚Æ.zÎêÙÛlK{sg5?á‰ûºûRîÑc·”ß.]ÿrÚÚZyæØò‹E«†yûyðZñwúŽUÝ?©9æ?mØ¹É›gn™öu"ÇFDD¬o5ç5){Ö˜BóÑÆöX=«]
|ÎíËE«‡'14CÙ›·?å’cg7Ï[íy·Y#ZêgªÁ1ô–»¡¹
š³ýÖÀáíu-dõ!U$Í\’R“Ö‘šçªû)Ÿ}åä‰m§ù/Ó¶£ò.ÃºÎJj2&SMªé«Yãy‹Ê"­šúÿº~ÔúHV3»TesÞß¨Ïí£²Ãçú<Ø|ýZºŸ7Ó¥
 ×]÷'>zïƒþšsnõEŽ}H½'tí–tì5·êµžhšÃ¦9ùz®A×I÷#”‰g­M™¤µæb¹i?OcÔgDÒ½œüíßÓúÓ{^kŸ–ß7Òsï3€±~%ÇNVs€³æˆžÊÈõ=æí
CHrl_½nf;çc÷¿ê¦B–±´÷÷í˜òÞõÖÏÓ¾NäØˆˆˆõ¯òÉ¤¹±E•SþaýŽµß,ÛðªTþóœ›2”´ó9‹’cg7ï[jžbÌuÎÁóéW=øseýî]I9[Q­½žvþd©»
ß–8¿8³›vbËc2Õ¤»\_Õ3Ñ{M™¿þ©ÿŽ9î:~Yî-7él¯ï¼$Ç>\­Eà­a$•è3·øžÒú1×Šúl×\;o?²{^§y®'º—âÝCÍSrlÄú•ÛWkêÅŒëÓ¨gcÒ
<[T.9v²ºNÒ½Xoß,óÎ±¥Î£˜1kŒÿêù¾¤ñWÚ×‰ñèPsúbŸO£Æ
Yê¼%ÇÎn5rìæ~Ÿ}¬÷üi•ÁV²_EóÎdõ¼csýHcÜ“©Ææ}•¨ºƒ•Ì¹}÷ñçŽ‰ÉE+•ûH½ööÄçb²ª;çIzu,+¹ŽQóÏ´~ªw,ò±~%ÇŽSÏ…Yß½iý
aÕ¶9ºÝên3Irì#UFüýŠo¾ùÈÓí³ÌÁ.µ9¶¬ôZAsRvM}ÿÆâú;äØˆˆˆRcÍ¼Æ®Rã×Jr5IŽÝjåØrLß¹æn¬še­HËíoÏ¾ÖÛ¦§æÈj^ì³’[sÌcÖ
˜Ïb±†u–yØå>øÛž]yÛÌª2OÕ–ñö£h[É±¥j<ýnåæéÞ1ŒUµ²¹ævw»•:ë©qÇ%íÇÂçÆŸâõ‘‡ÊëcÖeÍ¢®§5ï[uI¼ý@ÄÚ”;^Õ¬Ò:ƒY?SÿÔÐØ¤õú*ÍX%
9öÁñèŽ}?kü¤ºmZÃEõÉ½}‰µZ9¶T½9]z_©ÓªfXùs¼äØˆˆˆh©ç´U+Xu„½±†¥j÷.3ñŒ<Æ¯äØÙ­fŽ-•›ª>n%Ï ê)M®™F]CÅÔË)Wæw–¯KWIŽ]T
kajýyÕYñö#FÕÑ³ÞvÓª:–ª]‘Gî®¿uÛ[³º©æ‹·ÝrÛRŽ-õ™9äË'%Õ÷Ô9¯s,TO»&­÷¨}ÉãþJ¬Ê^TÛ«9£Î}]ë;"ËZ¬ˆX[’c§WßIºG¨µOô}lÕ
mÓ¼[×5V5
òÿÕÝC,÷á«oqÛÆê_ê;Åk[ê=]®7ûÊ¢ÖÑ´ÖLÉË–8¾ª+Ó¼vÊæ=‚çÏÁq·Æ³ë'L¹äîËoö¡×"¯×IãÑP?-5nBDDÄê¨qæbè:>¦Þ°~Gce‡i×ÊNré
Ø‰g*+7¯{æ£ïx¨ê_kÿymKÕñ
õ£1™×¶ZêÙÐÐ>É<ç>k^ÈÚño_¨:ÎÞyR¯j=FÕÚN;öL«ömË[3¯ŽÉ•©o|ý.Ö<½–¡c©y´Þ~„T«uµ¾ü¯Û÷ýÑÛ?©ºzŸmz}ú•ª«ìm£Rû]qCA÷¤´¿
lkú½·ÍnÙó•æ®®zqò¹Y²ëR—}ý¬<y¥Zïó<?“¤®¥4çJkkÆ<—«ÌUsµôZUR_>«Zß3tLô}àµ­–ªÉ­÷³Þ/1õrt•kÍÌ÷G¼xbžóÝ±õ%Ç®\åÓº_šýi
œgnG·=Ï½²yü[<t>ymÓªìflß]Ûk®v1£Ð¿ëÿ=×çAîac³·_tua|ÿ!í4'rÝøiÏåµªÑ¡g«=·$¤®±4^Ö>”î—jik>xKdÂžÊÍ´VÖÇÑ~Î
ñR'ýSû§ùPÊ„[ûZQóR•N|ph;í›Ôþjÿ”ã2o5õÙªóB¹¶î
Ï]Ý;Ò9¢Ïæ[Î»Êí§-[Ì^ô]¥÷SñÜôðÐö/Ü=°ù³!Ïû¯ˆX{’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#""""""
"""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""
""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#
"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ¬h×®]á˜kN
€,œ}Æ™…n]®8Bý          €ÖfÉ´iWüî£¦ÿ¯Üeï¾û[¯-          ýœÔ©S¡ÿí½ï¾üÊ©kßŸÓsÏ†µ>Ù¹}«ü|÷®¯ôOý¿í+–
]óÞì'ŒÙñ¶ë®/üñ^×Qc     ´gqFaà]w&Ž|ö˜ÅS§\¶aþÜÞ ‹Ü#u¸èí·/Ñuàƒ}î(œvÊ)^w    ¹qÑ¹çfŽú‡[7/
eÈ±~ºsûÎ¥ÓßézÇ7Úµkçm696   @Ûã„Ž/s2Ë¦MíâõS)éXØ¸pþÞ¾hŽÚ·o_è×ë¶‚2ê{¿õ®ûÊý¬qÇ‡+fÎ¸æ–îÝ½M   d¢÷ =
;V-öýGMÿ¯76Ië—M»Ö½{eäi Ç   h{œ~ê©o|)o¿þ¯«ŠxuøˆŽÞ>Hí/@½süqÇÞ=ú¸/öîþ½wÎÇúé®í{F=6¨²q   €J¹àœÎÕñÆ
y¨Œ|çê#•™Ç@Ž ÐöˆÍ±›6LñúÊŠr·{¿÷öA’cC½£¬ù«}{þÙ;×³ª<ûž[nõvã¨Äº¦mX¼ð^¯-   bäÀGÛ}³¿é?½qG5Ü²ôƒÞþ‘c
´=bslÙã·Õ>yÿÑû@Ž õJ§O,ìZ³j´wŽç¥®ã:tèàíÖQ96  @e¨^µÆÞ8£Ô¯÷7ý»jf«öH± Æ<û77Ìùrßž¿xíËUýlo?É±
Úirl=ëçõ—­gîm»(96Ô#vî\ÈRÿú»›þ[×2KMÊƒ×³N=ådo÷ŽÈ±  ²£{Óâ…÷yã‹æ1Æ–Móµ.õ]âu[8©S§BÿÛ{N~ëÂÏvïüÔë›
B¤É±•£ÅŒUÓpwÏ[¢·/É±¡Þ¸üÂ‹ _ìmüÑ;·å¾ÍgL{á…“z]{]á”“O:¢¯3N;­Ð÷æž…¹“&{ÿçàïmo+Y696  @v´v´7®hjX?¹Òõ¥õŒ§òrÝ¯mƒ
B¤É±åÖåKy}¦Au·½m–JŽ õ„j‰|¾{×Iç´îm˜?·÷%çïuw7uëVh\»zœ÷¾Ù¿¥an[¨1BŽ —žzº}ÒXâ»›þ~Çë' ûl[¾tHù¶È±
„•cµoï¿~Ö¸ãÃÀö¿/>÷<¯Û(®ëÚ5¸menÖšê=›»gýÚñÖ¹,?ß½óóJç4‰'úß_øzÓ_“¶µjö¬ë½~êrl
€ô\zþ…o÷ïû¿­1„®ªµNŽÐ³f¥õ×È±    „cïùgk^ÆÚ÷çôôúAs»Ëûþrßî__ú”9„ê…žš8¯Iµ«O>éÈÚ!YÑœ¦Ïw|œ´Íûn»Ýë¦®!Ç
HÏ¾M¦Yc‡oö7ýçÕ—wñº¨˜c=¶ çÓ´Mrl
‘”c·oß¾ðeÓî?—ÿLÏžyúé^×‰hÞGhÝºw_~åÔg}¬5–&Ç†z@çé×û›þÃ:õÌÁñÇçu“šóÎ>'±÷=ßw<¦£×MÝBŽ
ŽûÜaÖÔXýá;ûz]äÊØÇŸh÷Ñ¶-+½ß#Ç   h{$åØúùk#FúùÊ™3¯õúNB5ÊûT]e{äØPïèýaÃzæ Òû@Iüö²Ëº×dm_ïi¯z…
„æbô¾¡GAó#¶.[òØ‡[7/Ñß/÷íù‹þ©ÿÞ¼dñZ[ù¶ë®o®VtërEAû´eé”åj/öîþýÇ;¶5ì\½b¤ÖyÖß•çþªokÌ×3˜Õ
KŽ­óB5Læ¿ùÆù;V-¦5³u|uœu¼u®L;îD­Ñ]M´f‰^ëÁýî+Lóü
+gÍ¼®aÑ‚{v­Y5zÏ†µŠªvøº¹ï÷šõê„3G|´ÚäùÚW‚êC&«s&N<'ïsÕCsú»çÞÂÒéïtÝ»qÝ$½¾zÏkßŠûµxê”Ëô;úÝÖBsJî¹åÖÂì
Î:âói×ö=úo½öz¿ë>S[Xã
þ†2QUTCãX}oIý»þŸ¾[kmn¢¾§´_¯{¦ƒÆ,Å}ž4jÔ±šqR§N^©ðrlÃPÝ]ÕÐ;õ”“½îƒh›ß~¸ïÿ)ïSßÕúykäØ§rJó|”
#Fv,=îŸzlP;ÕÔØlN<á„‚j=«V³Ž™®ôOÑûõº­pÑ¹çz]äŽÎ_½ŸTãcúK/\|]õë=ÖÿöÞÍ¯}žXçwÑû{÷ñº¨·Öö•£­ç296
@Ûæ¬3Îhþ.88Žýë{0øÝØ´ûge›yÕûºýú Ê¤ÊUýŽòßÕµˆÆùÊ¯¼ý,ªZÒcUšjÜfmCãÿN8Þë¢ÕH“cë¼ÐøO¯wl‹êµÊc ¡\\ãÎçß©lUë
yÛ·üjßÞSýoóàÎ›nN}®†ÖP²ü|÷®¯t®†¶]/¹´ c›Tã½\ÕËÑqÔ½¡y¡ãðäý8[GsM´ŸÚ¶·¥êïÒýŒ+.ºÄÛ
Ô!Ê­”Eê¹ý˜1‚æ-ê~­r®<3í·ÆŒ9¾˜™•ÚýÊ+ø]Au_xûŠeC“ò¯¿ïïkÞuw`«éñrl¡Ì/ô;ÅÜ9-jú~.æâ-•ckL«{IóPÛÇƒ¯æn}àÁÜ2mÍË
'º?ïµE}…¶‘Çœ`ïu½{íupÜö¿÷on˜£kÝ—©Æ\½®ÊÐ5—!æ3@jÿ5oDm+åíçÇžhmg×ê•£¼öy óó³Ý;?µöcÐ½ý¼.þ>SCçôÚÆ¢cêß›¥¹I¥¿¯ù
@Öëký –ª}
õæÌ?þtoíypœò_š[i>|wÏ[‚ãëÒºÏÚ†jh(C÷öËr÷º5/w:ñÄ¤]I¤aáü»¬¾u<½ö­ILŽ­1ÌÂÉo]˜õ¼P]•Eo¿}I¥çCÓÆõozÛÊbãÚÕã*'¢µSB}—Ÿ
«Êá+9W5×<ïšz:÷×¼7ûÆP­Ê4jž¶5†Ôu©·ºæÒ¼ko?<u]£¹æÌÏ
8:Pn£9ˆ¡¹Ã±ê»Yx¥cae£Ï<üÈa¿§¹«±`¹Ê³+Í"crlÍMÑ¸¾üwt/9íxÄšß]Z§¤Ú9¶æ–huL+5·@óŒ+E÷åCý—ÿJQ_¡mhÛYÑßþñö­k½ãä©û×i
^t¥h,[éëªñ¡®‹*™”4G%t«ZŒxäQsŽÕÁëÞ½öE¬ÏéµE×J¡þ½u)7/Yü÷šfU
Ô>[TV5Æ®dn¶—cw¹ðâÂ‡[7-ôö#ÆOvnßžeÜ¢k'k-Íó©äïo
¼[cK=ƒæ¿5ÖÛŸ$ª•cK]£éz2+^Ž}åÅ—äv®jžY^sXô¬ì½?xÛ¬ÔJsl=ï›´fNõy—õ¹h  ¨
.9ï|3É¢¾«Ï>ãLo³‰x9¶Æ¯û6oœáí‹§ÖtS_Y‰É±Åòïvý^Ú¹¯?;êØò>”–ïjæØzÎó‹¦ÝôŽk¬ª
—6Ë/¥ÞrleÅznÀ;.Yl\»êyoûz>á«}{ÿÕÛF¬ºO¡ºiÑsVŸú\ñÚç‰®O­×^×§±ç-96
Ô*ÞúÆ•øé®íY³¢¤[5ÒÔ?ˆ1KÎªzVÇzOxí[+Ç^={vëg•¨gÀ¼}²¨fŽ-5®Ë:'$)Ç3xH»Jæ‡„ÔIÞ>yèz.4ÇªV’c«K¥sÅ-u­’õó
Z—^×^—û=N©û÷W]šý±ù¤{ü3Ã;ä9&Pý€¬5QbslÍu	ÕhPv{_]¹ÚM»ÿPÞGù2ÕÊ±5þLZÿ.«š“uQO9vç³ÎÒ³ÞñÈªÞ3Þ>„PÝ”jŒ5>Ö89
I5EZc}Å¤õ&ô½ËkÞ96
Ô"š/|`Oã÷IŸå»jÞˆêE½9zôqÊõO=¿¥:ÅÞwÆx±÷}K±rìØzgRu½ß)Uk‘¤AõÀ­¾ôLW­ceÕ±c}ýžêÝy¿WT×›YÇû^Ž­ëB…Šk;×|Ô¹«5
cÆ¹Ú¿,ÏéZ9vÌ6‹¦=Wûô¸ÑÛ-“«/ï•aëõÕ¼eGOÍ=Òsª-ïµ-5kŽýêð“úÕß z•ÊºuBógT«ûŽo*¨†åŠ™3®ÑkŸÔÇÞ ë&æñ9
´7\uUÔ÷˜æ<¨Bqíg[crde´^}V+Çþ¬qÇÇÞv³¸lúô«¼}
›cåÍ¡ßÍçBù´ÆHåÇ¸9ö°‡bÆcÇ€ÿ®y³ÅsE5"b®9”ïfyþ²^rlÝ«ˆÉ°u¬t_Eµ©›ÖO.®îµ“Yrl]—zýjûª]¢ñ j`«ÖuÑµw­£8vîìíÆ?Ð
xÒê«Òg<²pï­½ÌZ×ð^{AŽ
µ†²›=ë×Ž·>Ãõý®ºÆÞºœÓ¹°rÖÌë’Æˆ¿kR/ôfåØ–ºžÑúoªÛvîÙgÖ—þ[¹–2¸¤>š6L1v'HÒñË:ÞnIÒÎ¹Öó˜ö½¹gá¤NþÑæÙhý<Õ–Ô×¤>´®
NÂ.™”çØ+ë¼Óëªõ8¼,R÷R´®ŒrÏ¤s5Ë¼|+Ç¶Ô¹ªíè\=çÌÃÇ¶z?éoÒ5@RiêÛ•¢ú9Þ½+åÖÚ·¤yVÅã©ÚÚÞš°Yrl¿­ëGå±kÊê¼ÐñÍ+ªg½~
 6Ðýæ/›vÿÙúL×wGq-çÐš|š¿¬µ•o%t4KÍ¹ØµKÕ=c¹µæ‹îËj^…þ]ÿÏ«›R^›#–49¶òæÐ±ÒÜõ˜uCuƒ·._:¨ü÷òÎ±¯ýÍo
IÏoj<¦q­UGBc]Íåö®t=àCË©—;i^¯î
­™óÞÍš?`­;¢c¨sZÇÙZ0mŽ4Ï¡øþ/®An¡Ï­ñš47CywìëjÕ6Ñçˆ×¶èï³²zÕ(ôÚ‹ZÎ±uÍ©96E­µìÙõuéïÅ¨1
P›h|l}7é»8ízšš47æÑ»ïñº8ŒØ[÷Ë•ÆÎù~é©§Û']·¤™cU§Åk[ÄæØŸïÞù¹²À˜±œÆMëæÎ¹ÕêKybL?å(ÇÖ­C®¬·týj«YêšÇæØ:WµUì
s¸§[çªþšy"E”Ÿ[û§c¢c“]»è:ÏÊÒæØÊ ¬ÜY×i?›„ž°j”ëu‰ýü
€ÖeçªÃ­ï±ÏwìK“ÑÝÒ½{bm½,÷¶csle€š3îT2­­hõ5wÒ¤ÔV§É±…UYãêÐïQýâP»Ðwyž9¶òõ¤u4Ó®•©ûûI×9o<÷\ªD=äØª'bÍ)Ð˜*Ëxü¦n
Ý šwTÚoš[÷¬}Ò\š´5tÝ’´Žø“÷ûS±tÉj¯yÃ^ûja}é<öÚŠZÎ±Ë±®i/La
5‰2ë¾±þÚ1@‘¤Z…š3g£ˆ—ck£y*i3G¡µi¬~UßÌk/”EZ}ìZ½r”×¾ðrlå{š«æuÊ©“ê€dÉ!;..ûE×#Öþ¥­
ãåØ:WN~ëÂ,Yéû¯¿ÞÙêWõ}¼ö¥hnŠ•‹ë}¯u+ÁzÍÓæØÖšRÊÉÓ\s–£¶Öçs² j­ûk}'f]“%i}g¦ýnôrl
T§Ã{Þ±œ¤ç”tï×k_NÚ[ùaè÷5ß4i~ÂþÍ
³ÊÛhþrèwóÌ±5oÀêKÏYó‡“ÐuŽ•eëÿ§£ÔCŽmÕ|Ö5]–gJÑóˆÊ³õ‹Í±užY¹çGÛ·®ÖZ”YP¿z^3Ô¯ž%ðÚ«–v¨­L»jž$ÕÞˆ9WÉ±
 –HÛÝß»×<ÍË´ú=hptž•”ck¾îçgE÷Þ­±]è9Çš?cíŸÖIôÚ×I9¶Æs1cëzG*÷Ú·¡k+Ù°p~Ü(')ÇÖø,í5p):W­{C›>Xt¿×¾kŒ®kˆ´ã
ÅyäØšczRÿOÏWŠu{   ­‡êo„>Ãu²’1ËÅçžW°æ;+óôÚ—’”cküZÉ˜@ë<[}§ýûÓæØBõ÷Bm¬9«šïú}k
½¼rì¤ù:—eÉ°‹¨^5'àƒiS»xí‹ÔCŽ­ú¡öoSYˆ]‚ÎÕ&ñ~Oè¹„Ðþè>NÚó¿Í‹²ÎoMÿ¡v2f>wµPMpk¿b>‡È±
 –°Ö>Û¹zÅH¯mÖ¸GÏ ym‹X9¶æ
d]›½ÕN³ú÷ÚŠ;oºÙünÓÝÚXßùióQ«sÚœ¸Z¨¶Zhÿ”o{mK±rlýý•\+Ñëê?MÍ=Õ·®»TûÐkC9¶æ­‡úP]E¯mz=TÏ3´J¯
 zh.lè³[*ßòÚ{(›³ú©ýQÄÊ±5ö©tüš4Gà¡;îôšF–[y^¨5g5tÿ<©6o^9ö¸'žloõ“ßyX×º[;®rlk¼ÔZëà…ê¬Ë}ó¹¬°r_o-U=j'½¼š
¼üô°Ö~ÅÔû$Ç €Z!ilÍHKRÍÍy‰ÁÊ±õ}çµAsÃ­}ôÚŠ¤u ÓÌ;oM¬ïüeï¾[ù
¿`?Ï¶oÓÆé^Û–À:Çbž!,ÅÊ±ó:W­q¨jkzm‹ÌzuÂ™¡>ôŒrškÃ$*Í±õ\gèšKk4e}V4„uýùÌÃxM
 •°ÖÞÐ=ã,ën”ó÷çŸþÚ†ÖöÚ±rì<¾côwZóÆõ¬¥×¾”,9¶°æÄ«v)ÖÚZ#Ú"¯ÛšOcÕ3I‹ž³æè¹T¯½¨‡Ûz-t
ÔÒX÷±ò¼¦ÐëÚ†ê¬'µ³æ`¤9ÖÕ@Ÿ9Ö~Å|‘c @­ 5CŸóª=ëµEs­qöøg†GMP­vŽTË,f¬üÔƒU46¨ªc[óòz
+%¯kˆjçØIsÿcëÃ²sûÖPûmË—ñÚÆRiŽ­ZA¡öZÇk›Õ?mgñ”·/õÚ
@ë`­%¬û´^ÛXô|RhúõÚ©fŽ-´æu¨ÿ´c·¬9¶5WEûUú{ª^þ;Þ¸([ã"+c~ü¾þ^óh¬+[–-èµyA“¨4ÇÖ|‰P{]KzmóFs¢Cû¢uèó$ô9£ó)iž½Ö
k í[šc] ’êÆÌ¹"Ç €ZÁÊšòþœ×Z‡¡íÄ®Û\í;©¾uÌX¹Ò{Üµ@µsì‡>|®3í|çJÐ•ZKFÏ!ôëu[aØC
/=õtû)cÇ¸~ÞÜÛCû—ö¢Ú9v×K.­è\ÕZ<-q®Všc[÷ØòÜGaÍéÙ¾bÙ^[
hy®¸èó{,ËÚÑIÏÚÅÖžªvŽ½cåò§Bý§­Ù–5ÇÖœp«¾C±†‚ŽUh­¯Vp9¶ê%„Úëù³,ëm[XuhTcÙk+ê!Ç>°g××¡öª7’eMÕJÕÄTÎ[Ç%ëú5ésF×M¡6
²óYg™íªMÒZS“Fùë›“c
@­`­a¡Zr^Û4L÷B§Ðv>Û½óS¯­¨vŽôÝ3Vto?³}ln×ÚT;Ç¶ŽQžsÿ…æÿk.¯ê]¯˜9ãšÆµ«Çé<9x®ÿ›õ%™ö¢Ú9v¥çjÒ8Vu³ó¢Ò»qíªçCíóÌ(„u
+©f'  ´ÖÜÕÒýê¼PÎiÍåÍUªckM¼Pÿióš¬9¶Ð|€à÷èß×	ÕYPéÕÉ#Ç^øöä‹Cíó^ÏYck_c²ËzÈ±­õY¤Ö,íÖå
¯‹\Ðû–xM…ÞG¡m%ÕŸOÊ±cu5Hº/sÝOŽ
µ€jÌZßGyÕÆ.¢57BÛÑõ7ŽÕÎ±…u,bÆÊIcƒØÚ)­Mµslëå‘ckŽ±rë]kV¶ž{ÌjÚkˆjçØÖø]Æœ«Ö¼xÕþñÚ¦¡Òû‹½?†ÚïÛ´aÚž k'ä¥ú«æë
ù²à­7/}n«V³×6-ÖÔÉcž?Ák+ªc[5Òæ5•äØºw`ÕyÑØïàøâ¿Êÿ¿²o¯ß<rlëžxÚùêª§níëý½ûxÍë"Ç¶®åŠêšnçê#Ÿèá¤N¼î2c^îÚ¾GÏWæ
©îÅ„¶•ôþµ®§Òëj ç¬ýŠù<"Ç €Z é¹L­m‘'IóÎ>Ã/eXë9vR}mÕ…öÚ×ÕÎ±­×°’û¬3Îh®¹˜wv]jÚkˆjçØÂÚ×˜suÞoœWíý•æØ¡g[Ò¼
äƒ5/´õ ¬ï²Õ³g÷ðÚŠjçØÖšrióšJrlñÚˆ‘Ç„Ú³¿é—ÿ?Õ¡Ð³syäØoßº6Ô>Ï:êE¾hÚý‡Ð¶4Àk[9¶æY9c¹Ê´uî¯œ5óº±?ÑN×1¯yÏyÜ<
/ZÊ¤ùËºÇeµË{žX´ÏÖ~é™Yrl  ¨’êäY3Nœwö9æ¶bÆOµžc'ý}yÏù¨õ”ck,­Znz†Ø:îy™ö¢ÖslëyÇ·nZèµMC%9¶ê,z¯KµÍóõ €ü¨4[NƒÖq
m+63¯vŽmefióšJsl]7|½¿é¯Iß«E_Ö¯Å+òÈ±•™‡Ú¿üô°|BÕ¬.f>K=äØBytÖyj§û
Ê¶G=6¨Ýi§œâm.ˆîAxÛª¶Iõ¤µf¢Õ.ÏµEÓ2ã•WN³öKõ=È±
 HÊ±½¶iIúî‹ùî¬õ[ÏTZí«ñœk5¨—[ó96.œ§u¼“Tî­šŒnÝ¼Du³-¸gñÔ)—Í?þôÅSÞ¾4Ô&í5D­çØÌ»#Ôvï†u½¶i¨$ÇNú¼h)ó|½
?¬gý5ŽñÚ¦eÝÜ9·†¶ûÙVrl“/*ëŽ+“GŽme·yÿR¬qj¿xmë%ÇßÙ7X+&­š³­ÚnÃ,¤©koÕÒiI“rì¤ëk­eµ«6šWeí—æcyc
@-TÓÙk›–¤ï¾;oºÙk^ó9¶8°§ñûP{Õ¼H3>k-ê%ÇÞ0noëµ*Ú<6Þ¼q†ž·Õøøº®]'ž\Ê2¯kˆZÏ±­5ktýåµMC%9¶êYãÁ×ã_¾Ü·ç/ÕV×VÞ~
@ËceÕÈ±­g˜b¿3ÛRŽ­õ;¼|3M=<rìï>lúïjÿR¬qOÌ8:¯1hyåØâ¢sÏ-45¬Ÿl½>iÕ{ú¶ë®÷6ÛLÒ:Š-eRŽ}ñ¹ç™cØ´ïË<ÑžÐ>é:5f­*rl
¨je>vÌúÖõc[ÏžÊ˜9ç­M=äØÃ8OWó|Þ}ù•SU7;-y]CÔzŽ½bæŒkBm÷oi˜ëµMC%9vÒçEÌß
G/VS[µJBÛ"Ç³|Æ»Ý¬ïoeÜÊºcÉ#ÇþjßÞ­æñ/¥-åØEî¸ñ¦‚ÖvÌZk¤TÍAÿÌp·Þ‹yo©aÃ”~½n+´„Þüeë~Î';·oMlX%4ŸÊªÅûÜ096
ÔIkÆŽc¹üÂ‹Ìmi½IzÈ±ß~~ì‰VL›ÚÅkßÚÔzŽ­1˜µ†ŽÜµfÕhÕUÎJ^×µžc›ë<îÚ¾Çk›†jåØÞµ
ÝXß/ºOëµM‹µ¦ä®Õ+GymE[Ë±Ï<ýtsô’wÞ¹Òk_J>9v8»MZ§/+Öš’ª[çµÍkšD5rì"'œp|AÏ?ªîßg;>´^·ÕOÖõÊÖåK%6lA47Äúû*¹VÉJßþÖ
W«Þ ×^c @-ôì~Ìé4ôºö:s[N<Ñk^9¶Ž™Õ‡²ÚZ¯-Rë9öý½û˜Çwë²%Å<—D^×µžck®K¨­æixmÓPIŽ-¬¹=­¹Ö;  ´>Zc1ôý°eÙ’ä
,kW=ÚÖúys£‚•¶–c‹µïÏéYÞj(ãNC9ög»w~j¯5ï¼¶i±êÆÌ1ÎkšD5sìrTË¯ïÍ=SÆŽ;qó’ÅX¯CÈoö7ýgÒ¼ýi/¼pR¨êæ›ZÕ5´þ¾‘
çÉÜI“Îµö'ö³()ÇîxLG¯yäØ  à¡ï=ÃUÉwZ,ÖÚÍ±ÙY=äØâ‹½?ZýîwŸ×¼U©õ;t]$Ó>§j‘×5D­çØúÞe¶ï|ÖY^óh*Í±­ëÁ—žzº¶o
@U±j}h>¬×6-zV)´­Ø:Ïm1ÇÖ3˜å×kÞ›}£×®œ<rlk,’öøxh®Šuÿýñûú{ÍÍ1è×û›þÃkKKæØ!Î8í´æ9ÛÛ–/bÍÙ/:gâDóá;ÏP›/÷íþÕjÓÒÜÒ½»9Ö
Þ½nÍ‹^û¼Ñ÷¡}Ñû4öª%jþ‘c @Ö÷ZÞu0¬µ¥UãÐk+ê%ÇÖ³ƒV?ª‰VéœájRë9¶ê·…ÚëF¯mm%ÇNZ&æZ+–JslkœêÐ{m
àèåå§‡…Ÿ+Êy]í:Ôgh[OÞÿ€×¼™¶˜cÍ_Ñ\Ü¢Yî“ç‘c¯š=ëúPû¼ë«F¢µ¯]/¹ÔknŽA¥×6–ÖÎ±K¹àœÎ…«–³þæ¤1s÷+¯4U­ÔžÓçu¼•_zþ^
¹qï­½ÌãµoÓÆé^û"äØ  P+Xkæýl–Æ‹¡íÄÖ2¬—[µZ¬9îrÌà!Q^kPë9¶5Ôõ¬×6†¶’ckÝ£M‹æöÐ@¥9öÔq/t µ×üûc5—‰
€£­m}æ™É%Õ”ÕœãÚjŽyäØÏy<Ø‡æNë>E^h|ÚNì½•¤ûøãŽóšGQK9¶ÐÜž½×M²þn«îdÒý¥×FŒ<&Ø¨HšÛ´aþÜÞ^û¼HªÕ=â‘G½æÿ
)ÇŽYë*†¼rlëØ3 àèÀwéy¯Ø1¢‡î[ß{ªqC½äØBëv[}éùÀ´õ+Eã_]çx¿Wë9¶µöw^×‚m)Ç¶j‹ª&¡ÖêÉƒJsì¤ù6¯‘O!>
¨;”cYc­¹íµeþ›oœÚFšúäØÙÉ#ÇNzMë®ä…ÖýmCc!¯­Ðœmk?õ7äA­åØÂ3Ë¤l´©aÃ”P›<ÇÚ•ª¯STÿ_÷ÉªÍ°‡˜Ç÷à5é_ÓÔµÖõÕWŸ©ËÉ
+Ç¶>uýãµ €Ú'i]ñ™ãÇç¸Zk]¨6vlfVO9¶Ö{Lš“ýÑ¶-Ëóœ’„î!è*æ8ÕzŽ­ñV¨=ó±ÓŸ«ªOhõ¡µ`¼öú\±jÅæØÂª‘­s&¯ùI
PXµ§TÏÚkƒæŠ~Ñ´û¡m4,Zp×¾9vvòÈ±…5–Pf¯mÚ«6ö[cÆD]è¨F±õ·ÆÎùñ¨ÅûÔSN6ÿn]OYhÞµÕîÑ»£ßžUgëò¥ƒ¬ýÔ8¹šcÙ³Ï8Ó¼v’Y®ó­
yð“FÊåAÉ¼rì7G>.ÔOÞÏ›
@ë¡õ&BŸõúî‹Í™-”gYsfÎ˜ÕSŽ-T³ÙêOîZ³jtµ³l­‡­ùß±Ç©ÖsìÏw|j¿nîœ[½¶1XsÒ^ÃÕCŽ­q³5¶Õõ†«®òº0õØ œw!ÓäØšWgõ“&GHËu
]»6_[
@m2ôÍïÂ‡ïìë5wÑw™Õš¹‡äØÙÉ+ÇÖš¡>4'¶>LÖ|ÍiQ–‹æ÷„úYòÎ;Wzm=t¼ôÌ]¨ÿ˜[ãÆjŒ‹T;Äz“^åþV¦úÅÞÆ+½~Mâ˜câK—hNyÒš–
kW«Æõ ^¯¶o]mmWõ³dèŸíÞùi¨¿<êuè5Ókê?mŽm}v¤y–  j›¤õ¶,ý`@Öµ
ÕÎš/#•ÅRo9¶Æeú®´ú”Zã2Íø6–KÎ;ÿˆµSbŽS­çØ{Ö¯lð8WR/YÏÔéo´æÐ§½†«‡[hÞµÕÆ·½®½Îëâè½>¸ß}ÓVŸEÓäØÓ&Í%y÷åWâÿàTÃr
Ú/œ¤yU1×u
Ð:(û±ÆYöìúº’+i§{êiÆÅäØÙÉ+ÇÖ³‰V–¸wÃº‰i^Ïr”SZyªÆâ^ûR>Þ¾u­õ¤©ÿPŽÆgÖº(2f¼£ßÑ{âÁ>wx¿šŠ[ºwžw‡yuÅ×¼7ûFëoÚ½nÍËyçÃ
:O4\5d¼ß-ÅºÏQT×Úyî«>¿4ï8i›z.3V]B½Ò¼'Ë¹ãÆ›ôÜÄ·Öþ¦Í±u¯Ñê+fÝU
¨~ßÍ±>ï•ozíËÑwýÒéïtµúÜ±rùS^¥Ô[Ž-´ÏIõE¤æ­¾ôÔÓí+CQ~½rÖÌëBÏ6Æ§ZÏ±_vÔ±ÖqÔßíµ/GÇ\ó¹>ß½ë«¤×(í5\½äØºÆ·ž1•:w7/Yü
@ïzB×úwj|nÍÏ™&Ç¯{¦CRz.¸’¼Bèúá…'‡¶/CÇ\× @ë‘T[
ësoj£lÓê7mþLŽ¼rl±öý9=­¾b×œ/Gó““Æ?iæëˆ¦MíbõõÞk¯íµ/ç¢sÏ-hýn«Ï¢1ãÒÚ{ÛW,ªkŽ<°ž_ÕÜ¯mÒ3¿RkHæµ&Qß›{þc®FÌ¾•¢{ªw
”ô¨o½^•¢sî³Æ'm+íý•R&Ž|ö«ßusßïåµ/ç¬3Îh¾võ®—ÓæØIuz²ì'
Ô&º7™ôÜ“Æ±Y‘¾;Êç—ªçæ:Ÿu–×ÍaÔcŽ-”Q[ý–ª,UµÅô}ž†“:ujÎß4ï isœj=ÇÖ|š¤¿Qç¨µ¶y)Ê_57å£m[Vz¯‹L{
W/9¶xìž{Í¾JÕ<‹{Ð1Ó|¡/švÿ1éó"É´9¶î7XµŠjß&ŒÙ1í|%}îi¯/÷íùKyŸ1×u
Ðz(s¶jŽIeÙ±cW¡\RÙ—Õß‡[7/N;ï€;;yæØúý¤šgëzóK¹ì‚uîí³úÛ0no¯rôœÕŸÆ¿ï{}eÌÊêbÇi1ãò5dÔ·ê»U²V¡Öì¶öé‰þ÷{Í›ñ®³tþ
ªn`Ú÷­Ð³žªÑX~½6Ç—žAâù'u}¬ç³ÔûÐõ£Îaï5×}—4Ÿ‰åx×bª¹s¬Ï8í´æy0Ö³å¦Í±…õÙ+k©†:  T†5.ªçûU‹
4ÞÑwV÷+¯lþN²ê¯UÍÁÀæ©×[h­
ï>sQ?>Üºi¡2eÍCí{ïæ9¯šÛ¯×më¦¿ôÒÉŸZkad=Nµžc‹-Ë–Lú;5ÜºlÉc:æÅc§9ª•©ûš—rpLû/Þñ*5í5\=åØÂ{Þ1‹šc=“6ÇÊ>Ýµ½
ÑÛ®®ôëºF×VœÓ¹ù^ÏñÇß<f¾©[·ækÍ½òæÆÄ\×
@ërãÕW›kìÉ/öîþýØÇŸh—tŸS¹‘æ&=£¤ï5ÕH9vvòÌ±ERÍs©×J÷÷“òl%f½:áL«–µÔú 1ó*B$Ý—‘{6¬ šª­±8í”S
óhœ«ŸÇ^sïXk¡7·í[×*¿ŒéGÇöž[n-è“Õß';·oÉB‹¨.‡÷7êy;]?é8%½¾Êƒ5NÔXÒºžÍ’c‹Û¯¿!qþxQýŽîƒè\<åä“Ìþ´¯:tÝ“ôXTµ§•CWŠ
jz'mG¹¿>su>œxÂ	Ímôw('Ð½Íuóòör³äØº'`õ§÷ˆž}¦k_u ©ŸkžŒ®_
 ¶Izî®Tß”Ëi¬¡<(i<Wª23oBÔsŽ-”?Ç£jsœê!ÇV=ñ¤•h­gŸö®Þrl]+¬ž=»‡w|bÕõL—/.4m\ÿfèç#yÔÛ¥ {{ÏJæiÌõ
´>ÞœL©lHù‹²‰)cÇ(5¾QîçÍ	Tæ¡:dY
ÇÎNÞ9¶HªyXò7ÿ‹jg,zûíKtž(ÿTíƒ}›7Îðò7g•¬•=èÞ~QÏÉ¥U9§µï1ã¤»Ô¯÷7ý{SÃúÉª]½xê”ËTEÿÔïÛ´aš7×)Ëý"=—‘”‹—«ë1]¿êõÔû_ª®
ÇÁmÿ/¯­ÌšcÍ¹÷ŽA¹¯{þ­¸¿šë¤Ý×¢ÊñóÈ°…j—¤½W£ú´òø,9¶ž¹o Ïÿƒ×¢?k®zh®96
@í£L+6ËN«žß÷¶oQï9¶Ð3ˆ1ëàå©¾¿5~Ô¼TzÈ±…Ö„ñ®9Ó¨q“ÎMËB?O{ Wo9vÍE«ä¸Ÿ‡,Îs±rìJ®Ý5¿I5t¼}ÉÃ˜ë:  ¨ ”7zŸëYÔaÌà!ñ“CË
ÇÎN5rl]çX5™+UcnÍ¹­­Mâm+šSªüÔzÞ f¼›cW¢Ž_ÖÌPY¶æ0{ÛÈÃJrl¡º/Ê¢½íä¥rzeºy¢{<ÞvÓ¨g¾õì¬õ¬q–[$­­kÖs
ZžJ3­Ruß9K-‘RŽ†[hü¬ë!ÕöŽ[%jÌªkº45Ðê%Çª±âÕ™‹Qó{•‹kŒžö®^sl¡5ftó|bQå×:GÎ9óÌÃú²rì}ï2¶>Ÿ4æõö-‹z}ÎÄ‰çd©O
­‡êä5v•¿¼ëno³‰cg§9¶ÐX\u0òœSªZ"•ÔŠ.Eãý[æzÛŒ±t}£JrlÍåM[—/çqüt•v¾s5>^øöä‹½ýðP#Í¡I3ÞN«ŽƒjÍ¤©Ñ‹úÜ¹zÅHo
bT‘âzœyçØbÕìY×{û$96
@}¡ûÅúnÉ:ÎS;Õ,;÷ìÔKlÁÑ’cÑ¼Õ4Ó³wYo¹zîLu³•ñf³ÔSŽ-t~êù:ï¸„Ô}íJëe’cBµu- ëce»ZQªv£æDë|Q½­ƒÂZGS5ªó@×eº
Õ¾y¯·§®Í”ß«^–÷
ÔÍu­Ž­¼Ï}O}Ïå1~%ÇÎNµrì"š£œf­™ÃkìfÞHÊ²U÷ØÛ¾¥æûªu)•äØBcfÕ=Î:ö©ûNËéº(/4÷XõcbjJÄª÷±ÖÞÑø8O4DÏAç|ÿí¿ô÷«~v5Ñ
k¦õf¼ý±T­“Áýî;¬ÏjäØB×|Yïc
Ô'ªS¦ç‡T7Êû¬—úÒzúnÎÍ(Ö3,õù!ç:…ú—VN—¥™¡Æ^í½¢ªå¥{áªå 9Å•æowÞtsðäõým½†ãŸ^ÑàUs¥ön\7ÉŸ¨fŸî«hÌZãEk
†öoÂˆ‘öâP.ìÜù¨=WÓ`­£¨ã“':ïµª>£T;0¦½òxÕRÔ¼kµ­ô½
µ…ÖxþûzbÑÙ…²$”oæ…Ö§ÖØ®Üû{÷ñšF1zÐàv¡þÓÖòSöê§©aÃ¯mµÐó[¡}’yÕIÐ÷ÿ°‡¤žW¢¹®ªùÜõ’K½MT„ÖúÓº#ÞþÕ8HµÜCã½–¡cyéù¶œ
Œê*×©/_®Ž³²p¯óÎÿKÑ½ ­+¨ñ^Ú}Týiýmzþ/¦6c¥hýPe­:.iÎÃ¢ºvTýñW†=Ó!ë£YÑgmš{‡:çôº„®Å¶¯XöDèÍã3Y¹¾æfiÞ—·Ród´ÞçÅçžçu
5Ž¾gõ}¥5uJó3ý·ò ¼ïS·E4öÔ˜é¶ë®o®Ÿ¡ñ¨ê²<ØçŽæÿîÖå sl[FãUÝ(ž—')·Î2F‡ìèåÉºŽh‰ÌXcU=Ÿªó¡¨îõhÎQÒÚï
ptqR§NÍ÷»5¿Bó[uß»˜èß•[ëgcU3SƒÚG×8Ê´µ®ŒÖyT.¨óDsq•ij¾‰æŽhžsžó‡cÐØ_ãÚ†EîQV]º_ÊÓuÖZc]¹4þÖü
íöSu¾õO­‘©cªœV×Š­q
£ÌTÇPµ‡ôj¾²öM×¤ÔñÕ³²—_x‘×]UÑõŒžœöÂ'iß´>­rââç–^seó:®zCçckÓrtþé5Öóåû«gtß£Ú÷}bÐ¹ 5‘ôZkõ<€Î	K]sëzáøãù.
hKèŽÐÜÍ)òÚ          TÍkåØL›ÚÅk          PM´Ð{åØ÷ÞÚËk          PU–MŸ~U(Ãþrßî_Ckº
$ñú³£Ž½©[7ï×¢°ê‰H­£âµ          (çÓÛw6Ï—nÚý³Ö×ZÝ§rŠ×ì0´þ¼Ö&·2ì¯öíùg­¿
–bŽ]î½?l[¾tˆæQO1²ãÈ¶ë×ë¶‚|¢ÿý…I£F»öý9=ìiüÖÊ¯‹ê÷          ²`åØy9ÿÍ7Î÷ö          À¢š9öÂÉo]èm
‰jäØ_íÛû¯ƒûÝçm          ÀeÓâ…÷}÷aÓÿñ²é¿hÚýÇ™¯¾zk:
@žtèÐ¡pÇ7¦ŒwbÃ¢÷|¼}ëÚ¯÷7ý»—[³¿éíÛ¼qÆâ©S.»ç–[íÛ·÷6          Ç{láò/*tërEáº®]}oîÙüï]/¹´pâ	'xÍ
À c‡…ÎÇŠˆˆˆˆˆˆˆˆˆˆXsŠã;Sèzòùˆˆˆˆˆˆˆˆˆˆˆ5'96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""
""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96""""""""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’c#"""""""""b-KŽˆˆˆˆˆˆˆˆˆˆµ,96"""""
"""""Ö²äØˆˆˆˆˆˆˆˆˆˆXË’cÿÿì½‰³Uº·[âÐj;ÏóÔ8á€¢¢"Nˆ¨ˆŠ"‚³ˆ4* "ˆÌ
³ÌÃfÜ°AÚyìö³ívŒs»Ï‰>ýûøâÞ8ñÅý?.¿Ý§´,Ö›ïÊ¡jçf?OÄvë^™YYYU+¹Ö»±Ì’c#"""""""""b™%ÇFDDDDDDDDDÄ2KŽˆˆˆˆˆ
ˆˆˆˆˆe–Ë,96""""""""""–YrlDDDDDDDDDD,³äØˆag öZ¶ÿ±Þí“g_ãµí
†ÎtA·-""""""""bÉ±±Ì^tôi•‡®¼©òÊ]Ãö]òô‹ÇoxùóeÛ”9ýôÏ¥O?aîˆ1‡¿<xX·ÛÏ»¢rÞá'ºÛŒuáããŽþnËŽÿUï»3Ýåµ­õ²ãÎ¬ô=ù‚ z}^
û²:7ò®‹®qÛ""""""Æ¨{&•yæ¦»*¯ylÿÉ÷<@Nòè~OÝ0¸2ðœÞ•žGžân;¿äØX6•[¯qr¯–mZðýæ·òÒ?lÞù·¯–µÌÜ2aú¥/¼oŸ<9qQ9¶
ŽÅ:Þ×îyt?¯}Y%ÇFDDÄ½Qõ«9™åØ[‡îãm§k3;Ë<ý]Ä2zñ±§·cÒØ¥¯Wl]åÝÊo7íü¯Wl\¼õµ½õù$×FDÜ;%ÇÆ2Øë¸3*osÄ·k¶¶y}”4þ°a×»
Þ\8ðÙþ÷ºÇP/9v²Ök"ÇFDDÄÎìÕ§œgösª~¿yç?œs™»­<*‹óŽCêx½m!vuñîô·kl’wÝ{þ¸qÇw›&L»dÀo/u÷‹ˆˆGrlìHUdæ#Ïüú‡–òú"yýËÊ
Ö-ªA¢ÌÜ;.IŽ¬õšÈ±±3“cKõ¶•Ç/—®Ã;IŽ]eÍÏ}{˜w­gQÏœZ'Íîsy÷ßºÇˆˆå—;Ê[z\^Q
¯ïQ´?nlûË‚QcòŽ;Yë5‘c#""bg66ÇVý»¾§\àn/‹ÃúÜu’;³º/û~Ó®ó®ó¼jÜÔ¸Û‡vóŽË-96v„/Ýñ`·7íü¯¿Qïî6?þÐ²ý2OGuÖ¼
c$ÇNÖzMäØˆˆˆØ™Í±eë¤™WxÛËbš±©äØØUýêf-¾×»¾‹T5´×¿<å<Í	öŽË)966Û©>q ú^?Cc\Ô‡W-¡WÜP¹ì¸3÷Ø–Ö
ÜóªÊËƒ‡uÛøÊÔ¿Z¾až·]IŽ_ë5‘c#""bg6MŽ­:¾Wt®»Í4Þ~Þ•˜¾rUrlìlªÎã‹Võ®m©{ÂÏ®z~Õ˜
§iíÇÇúÞZ¹»×µí>qÝàö5Y×þnÒÙ_.Ý0M5D¼íÉ]o¾5€,±sJŽÍtâ=Ã÷óúåZ“cÙsã»_Ù½‡»½ýÏº¤²ôéñ'|¿~ûgÖ>š™c:ÿÊÊ37Ý´QsQ›¡unÉ±
±3›&Ç–«÷Ú™Þ6Ó¨ºÛÞ>k%ÇÆÎ¤òãÏæ¯xÚ»®¿Y»u×ôGž>¸÷ñg¹Û¬ÚïÔ*ºTIoûšKˆˆ•›åÃ}úWô<=©?ñáì%C‹ê‹ŸäÉíc¿¿[¿í“úý43ÇÞ[
µÞCrlDDDìÌZ9övýÊÇT+/vqOqõ—¿]³ý÷Vß«¨¾3b3T]ëZ–ºþ—~å$ÝËyÛ²Tö½cÊ¼ë“ö#§<ðø¯¼m!"b¹$ÇÆf¨¾DRÿ[c´•{ÛÉ¢jh®Yí<3r
ìüZï%96"""vfí»í¬~aâé¡ÿ¦ÜÍÛnŒë_œÜ£~ÛZfÑ“ãŽµú^äØØY|ôê[kæh-Æ‡®¼ÉÝN¬ªC’4ŽJuœs™»DD,äØØ['ÍîcõÔ—iÆ³pÕØþËªÍëµ
OrìüZï'96"""vf“rlÕ½SöµÇkÙù'ð¶¤Æt‡ÖAW?zò}íoõ½È±±3¨uÿ²²u‹uë3tÇW»ÛIëÓ7Þ™8'Xuº½m
"by$ÇÆF;è‚>•¤57Š®)˜¤î/Þ¾àvrìüZï'96"""vf“rlýwÕÕ
ý÷9>ÌÛv’ªë[¿Mõ¡o>»W…;»ú|X×°ræ/ïïn#«ZÒÚ·|aà}ûxÛ@DÄrHŽ]ÕìÒ_­?¡º[&L¿t×›êŸÊf§=üäAúïyj{5Â!½úUtlš·¸}òìk´^ó
†—ß8ÿ­‘cŽÕïöögåÞ6Òøáœ¥Z}†/—®›ÜkEßwéuîßtö{à9½+Ïö¿·¢±îš‹*õ¿ÇÞ:t]—yßgë=%ÇFDD,·ê{
øí¥•a}nþiíiýo­•íµí(«Ç¬ºÕcÖX‰‹Ž>Ím›V/Ç¾þÌ‹‚c4~hÙþEÖ~¿^‡Ú[ýÎŽÊ±Õ_TŸò±¾?Ÿwõ#µžž×öòÎ®\ú…•»{]ÛþOý¯M£Õç]ïeõ}Õ{¬
÷:ï=BHëú®ºäé÷¶‘We²öÿÕò ó¼ö{³7œqIåþÞ×ÿâZ¸ý¼+òýŠˆ˜WrìôŽpï>ÌZ|ohNaHÍÔïæ×
v·ëàžWU”™×»nÜë¿µþ~Ó„i—ìî?üÑ;^­a£uÒu¯à‡§úùV
4õÿõûèm££,*ÇÖ9½WE¯‘­~ÆÄ!î§µ2wßg}í½Ï÷ðÕ²–™Zk%K:k»EäØúŒ…ÎYÕ;/,~Î!""âÞ¬ú\ªíüÇ%k'&Í±W-æ?,^ý’ê=k?rÕ€Ÿr’Zµ¶aèïû
œxNeÎ£Ïúù‚•Ïê¸¬þ¤2(eVÍïbôrli­!§ñ-ÞöCª]ý¶Ô‡VV¯ÿÞÌ[ýBqùzÅÆÅ‰µŒ7íøþÓù+žœ;bÌáWŸ\Ü1¨¾Jè:Ñx¯m¬ÚVhE¬×©Xã{·¾6£
·úÚI÷Œß®ÙºíÃ¹KÒgSýß"öo©]c¯4Ž(ñ;`÷gêÏ+7-×ñ+Ïô¶ãÄ{†ïgíï/«6¯Íúü'WtnåÇ;¾³ŽC™~Rû‡ûô^3z¶æí;«µÏíjÍ[Eß+ºæ¾X²æUë
»µýúÜýù×<f]OÝ0¸RÄø3}Oçù|k~µ²j;—þÞºNˆØy$ÇŽ÷‘kn©¨Ÿl}ÏÇ¨ß
=ëôöåùäõwû×õõ2néqyE™{RÔR¿iyŸ«¯dm_ý¯}GZTŽ­\7´Ú{¡<*¿Ö½Û÷Ú¾òÞÓD×¶¾«y±ãk¬íäÍ±ÕïOê[7j=PDDÄ½Qe3Ï_þ¸Û0üdÞ²Ê¿
¼ýÄ¨\4´×îyt¿Ú¿ÓØ@å&IùJHYúôøòf-19¶r PÿZ¹dÚýëïCuƒ?žûö°êß4#ÇV,ë½Ž²OõíõÞyûñltßYj[¡}äéÇª­ü?)+õÔyüláªçõ\£÷ñg¹ûŒ
Qs1³¾¯RŸ[eìÞ~’üÃ¢õ¬í¿tÇƒÝ¼öE¹bôÄS¬ãØùÆÜ’Ún?µg¨¾®;­§»ï´j›VmÎnËVE¹¯òï=·Ô3‡—Ëõ~Y9FÒç[ãëtŸúÕ²M’réÃž:ÈÛ?
"v~É±}Õ·Ô˜Õ,YpHý©íí7I/ÇÖ8
}×'å±ªîHÚþxÕo×lÿ½µÝêø’²ÚrlñWþì½‡iÔõ©ñøÞ¾­öyúÿ#¯½-q2lDDÄ8ÕT\DÿU}õ+³ö«z9¶ŽYãÀcç<ZjŒpžq­19¶Ô8ÚÐß¿óá}½}Ôª
/´ÚùrÌ±5NÕz-iÕ¼ÎÃžÍ4&½j#ûÎU‹Î±5o
´Fgµ½•c^=ÕÛ·¥æ„ê³àí'Ö÷f,¹;ËçJó-Ìù¹ëZßÏû½’FkV©k7i\¸æ´XçFß[Þ¾Óª—ßîÚŸ¦¿®ïˆ¢>ãRÏ7/ïþ[w¿!ÓäØ·ž{yE×]ìï˜ê¤zûGÄÎ/9
v²êOçÃ’¤ê#dýÝNÊ±eEsÁ¼ý§qÞcÏîS½šßcmïË¥ëßðÚw´eÏ±u|±¿éi96«mÖþ¿æ;$õÿÉ°ãT.©zÞï}Z¿X´jl–«jRŽ­1ßêÇzÇë'o-é
elŽ­œ9ôwß¬Ú²ÁÛG­_.Ý0­~\²nRíß4*ÇV­¶oÖnÝåÏ´jLDÖûœFõk-*ÇÖ½¢îé¼ó‘U}f¼c©Z?´ìü“·ý´~½rÓJ}¿xû¯5iE=óÚmÒÚMZ'
©­5®\c·²^ï–ß®Ùº3´¯´™yû÷ÔÚŸzïmZÿ²zË¦Ï¼ØÝ½19¶>WZË+í˜<rlÄ®!9¶­~‹b2ìj
1=—T?FÿÔÿÉõ÷Þq„´¾ÿ5MÏ’½ý¦UÏ­µî‡w\µ.zâwÇXÛ[ðÄØÒg’eÎ±5gÑ{Ï~ÚÏ¦ßëþDî¾>¾ñþ>öØ¬¶iûÿ2)ÃÖçHë’zÛ@DDÄfØ^¹yµ÷[ŸUEÈ
še[9ö³—Ü—¶†HŒS|â@ï˜BÆæØÒÊµTËÁÛqÍÀà¾F]7è×ˆ[v#²ÎªYÇì4¢ï\oQ9ö{3öÎC³äØ^¾ªí÷«¶lP½líçûuÛ>´êXÔúÕŠ
óÓÔ"~æâ{¬m éÕÏm_´š/ajb&µ}å®afÛúÏl5G5´½?ij˜èû%fžÀî¿ùQµôL­ý{zmë»1×ê(¥­ãåØyži’c#v
É±m½¬PuÆ´®žÕ—ï{òík¶¨ŽTÒv=9îXïXêµ¾ÿ“Tßdëë3¯TŸ^ÏèÕoP,ýÿ¶É³ûzµÜÞ™öÖ-ÞqÕª¼×ÚV™×w¬ZÖ[ké$½OÊ}5oLµËt
Ö·×:<êßn™0ýÒï×oÿ,ë±YûOÛÿ¿çâ¾ëÙ‹^KÖ{PDDÄ®¦æš'Õ¡mwmë»«ÆL8MkjiÅj[ýoõÛëRýƒª³‘%Ÿ´rì$ÕPMT­™®¾¹ÔÿöÖ
”êÛfÉÜÓäØÊ®B«ñðÞ~dhÌŒî1êÿ®è[õ’êÿIc­•£ë—wæOm¯?ýÂöZ(ª=èÝ?¨6£w,õÝwYDŽ=ó‘g~ôÚ•j¼±î»T7¼šýª®¬N}õêzšIïwµ>
xyÿÄ}×¢{ëuêóòlÿ{ÝZ15«Z×™ž¡xm¡õù–Ÿ/\9:©­Æ	[×ŽÖ¤òöëï§Í¿5´4óLt•”aë{^µN•
„¾Ïµ“®]Õ½Oz¾‘öu'åØºïËóL“±kHŽVë©[¿Ýú÷F=*¶ÿ®{Š5c_;Ãú¾U_C58¼íÔš&ÇÖšóêxÇ«þ¬ú,æqîþMISËšõãÆ¶¿xmË`sìÿî›šý=C
OÓÿÖ51îö¡Ý4#í±YÇfÿIã€È°Ó™´¾¶æÖé?¦®ªòÍ]OÊÃ²ÔœK“cëo•Öfíõ*OU¦´)ñŽ«Þ49¶TÎú{©LÚÖŠ
µSß¬þo‹Î±?ž·l¸µ½Z¶»–›î4NÆÚ–Tæm§Ö"ûÎ–yslå½º§
mCÙ¾Æ:y÷^µö?ë’öÏ\ýº7irlÍÅ°^—>ËúÌÆ|þ«*kß}?×Úžúéz¾ámCcuCíå'óV>áµo”Ö}ª®}¯­ê]Xç8Í½²¥Î™UÃû™›ïvÛW·a=?Ð{§çSúž÷¶SUuªUS
Æz/•5xÛ¨š&Ç¨Ws4ïý«e-sôO¬oLŽØ5$ÇÞSõ9¬¹,úÞW/o!õ½jeãZ7Øk_kÌ÷¿úÔWãm«ÖöZ*sßfmsÊÐQQ¯]}$k_,Z=Îk_Ë–cëœ†Ö²¯ª1
1#àmÇR÷LÕúˆ1ÇfGlÿßË°§<ðø¯¼m ""â?Õ\7+wÖ˜<Õðò¶QoR}mSë·yÛ¨5&Çþfõ–­š»Ÿ&4×CÛòÏþ°×¾Þ´9¶µNc}ëzß±pÐ¯Õ–
¡×^dŽýÂm÷ícmKëîe©ykõ›¥2Ã4™YQ}ç$óæØ¯
¿ÊÓŽOªUý}m»š§É±­'êo{uŸ-•[÷Ÿ-\õ¼×Þª!/×¿4ù\¯}£Ô¸fë¸¼,úæ³{™ãÝ²<ß«×çŸ¦·ÆP‡¶¡ïí´Ï•ªêÙjÊ„¶šCb“cÔªÏ€æ#ßÒãrs
›ýN½ }>‘ž
zûGÄÎ/9öž&ÕÌÒ³K¯}’š[gm[õ«¼öU“¾ÿu¿¡Z%±¿sõêžÄºgÑ'¯½Ôï»u|moÌ¹Îk_Ë–c'Í]Ô³‡¬ïw­šï¸iÂ´KbŽÍ:–˜þ¿®ëþ1½ª1ú]Õ<®4
}ÌzõœÛÊlZ'Í¼Âk_kRŽ­yê{¥/Z«25«_‘¦–¯L›c«fe}V~xý™çØ)¯ý}Q9¶ŽUYyh;_œ%Ã®š´6ÎœÇFæµ¯ZTß9É¼9¶Æ‡Úo?µ§×6F}tß©¹–
ÞßJ]g¡ãÑ=]žÏ¿TÝ
k>¨·~Ò‹ƒ>ã‘o<ðd‡õ÷“ê‡Æ<‡Ð¸¬P[…óÚzZó;ô¼Îk+•å†¾³õïF¸7ªn¿¥Þok¬øý½¯wÛËØ[ã­ÓŒóFÄ®#9öžZu5o%oV¨±çÚþGs—>äµ¯jÖ•
jÙù§ØþW’Ö\Cýžxm¥µf\þÜø½öe°L9¶®;sþÛîí¤]_ÃSõK¼¿±Þ_ïúÓý‘õ
ÃFDDLoÒø@Í÷Ú{ªnhÛÊžUWÂk_ÕÊ±•ÛÜqÁÕnû$ÇÜ2Äcœvýµ´9¶Tý’PÕýý–‰Ó/«ÿ[·´rü¢rìçn¾Ç<Oª…áµORýU­Úvš±¤Eô=óæØV_V×¡×
6½Ž=Óýù‡ÅkÆ‡Ž'Ë:L!CsäŠÑOIj7kø³‡„ÚÉØpÎ£Ïj—>#^{ÕÝ±ÚÇæ¹!­k_Ïb?çÖºšªÕîµ1ôÝ%7½úæÅ^[éåØ3®ñ[±ßˆØõ$Çþ¥ÊØ¬ï
Ô×îÉ×·«ªñÖïSì½€õý_Ä3`©úßÁcÜ}¿âµ•Oßx§yß|èÉNQó¸L9¶µ†ÌR÷±­ãIêÿ“a#""ïê&žîkìú!Ë:‡õ&ÍÕK3ÞÊ±‹èc·1ŽQ™•×¾Ö,9¶ò
gÕÖ µ«ß©þ~hýµ¤1ËEåØZ“-´
ÝC‘©&¸uœ±ÏŠè;{æÎ±k-ö5©5öÛ5[·å©9X«ja‡ö¡çIí¬ï&©úÛÞ~¥¾s¬ãŠù>jÿ¼×Pš50ëµ2âg/êµ•ú.×wS¿R5¬BÇ›C$åØZ7©
~"¢$Çþ¥Ö3cõ5‹ê¨æ–57+æwS6:ÇNÊ¡½šaò¥;2ŸQOºwDÔkìhË”co{}ÖUÁm´ìüSšzƒEj½¿Vÿ_ý*kL96""bv5_.ôûÚ:iv¯m¬ÎYú`hšÇèµ­ÚÈ
[Zç!m­‡,9¶T¦j§š/µ§1¬{l»eûI}º"rlÝËhLJhižGxjkhêÏzme}gÏ¼9¶5ÿaú°§òÚmèz*ú=Õ3=«ß‡®§¤Z@_™zaèØÒœëF˜T#ÞªíS¯
µ®®ÎSÚZFRŸOkíPoÍØªÖx9=OðÚ¦ñ»µ;>
í'&+·r½ö¢òDÜ»%Çþ¥ªíú^ÕZ^Û4ZµK´&ƒ×V6:ÇÖ¸‘ÐöeL_9ï3î2X¦ÛÊ;²Ö¸õþ†ú¤Z#æÏ+7¯ý}žµS»º+mý&9oßZ?FãRc3›FçØVÍâ
oÌ½Ák[kÖ[N(‡R_§ZGXYu(C]>ú•“’¶]DŽ4NåºÓzºícUý‚Ð>4>Øk+‹è;{æÍ±­OëÝ1®=ÃºÇ¹Þ}ÍÅ^±ZµK4>×j³eÂôKCm¤Æ‘{ûl”Ic‚cço$
ÕsÊRû[ëÛ†¶¥Úû^ÛªŸ/\9:´ç\æ¶M£õ\3f=Q³>jŸoDÜ»%Çþ¥ªÝú^Õº%^Û4¶¼45¸¶DìšêÎ±­þ»Œé%­•Éxìt¿Õš{ZÆsiS}ÿŸ±qZu¡5÷¯
È9[IyyLv!c¿óæ¼þ¡íÇ®S^5kŽ-­: ÕZ³uycê¿‘c/~êÅãBí5^Âk›Æ¼ó:óöcÌ›c6ÅÓÖkÜõæÂE~ö’üïz:{Ìó-ú=•º
½Þ¤Z*I9vRþÝh“®Ñ4cê­õÿ¸dÝ$¯mì¶Òä¡1óš¿ëµK«5WXs²½¶äØˆ˜WrìŸÕXë÷,f½‡4N¸û‘ð˜–ÈúÓÎ±Õ'²ÎEL_¹¨¾AGZ–;iÍÌ˜õ´¥uLµýÝ“
í¾g]ú;2lDDÄü.{n|÷Ðïì7«¶lðÚ¦Õªÿ<cØ³Qku4:Ç¶2³fæØVíkeíã7cfbÖ_+"Ç¶rH­ôÚ¦1i†úµ^û¼}çóæØZ‡Îzò›µ[w½5rÌ}N<ÇÝV­º
ÕÊQUºH­õ“>¿e­+òâ  ©9îö¡æv]ÐÇm_õú3/ ŽíN³–®æ|„ŽCß»Þ{›VÍ
í+f,;96"æ•ûg­ï~Yôób«Ï!c~«cKëøbúÊIë.nü‰^û2X–{ÊÐQ„Úë~¨ÙókµÞßjŸT¶¹f=6""b!Zc‹®‰'•…ö[ºÑ9¶•™53Ç–­“f^j
ÿõÊM+ëÿrª˜¾u9v¨þ„\7îõßzmÓúãÆß…ö¥~­×6oß9Æ¼9¶UC¦^õ×uÞ7¼üÆù/Ýñ`·ëO¿ÐÝv“j96Ë¤zÒºï³Úé~Ø{}2éó¤yÅ^ûªª
nÕ˜Ñük¯}U«Æù»3òÚVµææ4Ó£Æå'96"æ•ûg“Æ½ÆdËiT*k_1clËžc[ëËŽ¬éœÆ²äØÖqÄ¶o”Öû«×K†ˆˆØ­úikBÇhÕDí5:Ç¶êf4;ÇV­i
kM÷z•y{Û“EäØß¯k}?Ô>feZ­µcÆ³äí;Ç˜7Ç–¯±ß“$wïûëÏ®z~ý‹“{(Ûî{òî¾,—<ýâñÞþ­Æ[Ç§y¸V»ßÝ6´ÐùÎiT­ë¸bæÔjÕƒ×5–´fU
K²>›iŽ%é\7KÝ·zÇIŽˆy%ÇþÙ¤õ¼¶iMª?=¤W?·}Ùsì¤-Ÿ/Xó‚×¾–%ÇV7Ô>ÍšÐzïï}½¹Œü~Ý¶U3ÛÛ>"""úZ¿¹›ìµM«5ö[k‹yme£sl«ï
Öì[ª¶Õªª¬[õ¼mÉ"rl+»-êü×jŽÝ¸.óöc,"Ç–KŸ‚õ¾¤Qk$i­Ï~§¦Ë´“êv4Ë¤;iŒpl=¢F¸õõ™WZÇ•vMD«&ˆŒÉê­yÌikCYßÍ”›!9öÏ
jMwë;Ùk›Ö¤[ßí^û²çØRkJ„Úkž×¶–%ÇÞ4aÚ%~¯³h]¡9³¡¿ñÖ3BDDDß?¯Ü´<ô[“¦Õª?­õÉ¼¶²+åØªke[U«k?ÆXHŽ½yçßyþkµÖ¬Ó5äµÍÛ
wŽ±¨[j\¶UG%­z¶±õµ½cÖÃ”Ië(6Ë¤[µ”­vm“g÷õ^_£´®O}f³¬ÑiÍ‹Ñ¿÷Ú~0kñ½¡¶s}˜×¶V«6I3%ÇFÄfHŽý³eS+¬3äØ›cm£èzã°,9¶5
ÎBó5½¶ÔzocUÝÛ÷öƒˆˆˆ¶Çú%ÇþÙŽÈ±å‡s—>dõƒ”—¥Y®ˆÛÊZ‹:ÿµv¥[j®áÚßM:;¦fv”kw|ª9ŽÞ~­Ï¤Æòª&w3Lª}ÑóÈSTcçï¡cüré†iÞë
k”ÖšµYï¯^¸í¾à¸s=—P!«žW„Îž9õ>þ,w¿µ®ûúY¡cÐÚ²Þ{X”#¯½Í=NrlDÌ+9öÏ&­MûL<ÖÏ¼ØÜWLÿ©3äØêËYÛPM2¯}G[–Ûš¯Û¾QZïm½Iõ!
?ž¿üqõo½}!""bX+/Ô|.¯mZ•‡ö3æPvµ;i]÷f/¹Ïk_k9¶•ÝNºwD!ç¿Ve”¡}Å<_ÉÛwŽ±è»ªúµcoºÏ;SçÝôÝÚÖw­÷,Æ7íüïx¬y›iïW©5g
Dùm–±ÏyxNoós™õ¼%­÷¸ì¹ñÝ­vó{þðP›,ëXß±Ï›%96"æ•ûg“Ö&,züpR¿¶ï)~]´Îc'o×Ø!¯}G[–[µãBíÕ·õÚ6Rë½­ªqFsGŒ9|ÜíC»%Í«
}oÆÂÁZßÄÛ"""îé'óV>ú}}gÚ[·xmÓúñ¼eÃCûŠÍ‰»ZŽ-ÿ°hý„Ð¶bÆÚÖZDŽ­q™¡öF=Êk›V­ãÚ—Ö%ôÚæí;ÇØ¨»ÞÎ¸¤òòàaÝ´ÞÖvÔÖûRç
1i­@«–D™²KÕ±^Ÿêzzí‹Võ:¬ãI[Ë£Vk½G}î¬{+ã™Ÿ]ï¬áÏÚÖWË7ÌóÚ6SrlDÌ+9öÏjîŽõ›¦5*¼öiçÃû†ö£±«^[Ùrlõ¹~Ø°ëk;Y~Ÿ›iYr
ì¤õQbß‹Fh“Tn=åÇUý[ýï¤¿W@oˆˆˆ¸§moÌ¹.ôÛªõ½¶iUÚ×ºq¯ÿÖk+»bŽšï™eÍó"rlkíÅFÔ)Öx‹¬ïµÙwnÙù'¯m¬ÍÊ±Cö?ë’öšÚ³“kO
äis=Ä7x2ØÇþvÍÖÞq4K«æ†Ì2î8¯Öç@Þ|v/·½¥Ö{´æ¡†êmèYVèoõ=éí+¤užË¶696"æ•û—Zóô¬Ûk›F«æFlM®ÎcËw§/¸ÝÚÎ‡s–>èµïHË’c'Í
}{úÆ;ÝöÒ:&ÍœxÏð=îQ¼5´5†ÁÛ'"""þRÕjý®ª²×6­V69eè¨¼¶²+æØr×›j,nÕa}nvÛÔ[DŽmÕ…Ñš%^Û4*Ï³Žõ¡+orÛ[}géµµ#sìZ5îG™ö÷
ë¶}h½æ¤÷Gµ©­vE×ÅÌªÖv·ÖÕwJ3S5é­ó{ž¤5?Fk9Öÿmë¤™W„þ6é¹E’IŸ›<ù|Ñ’c#b^É±©µ6alÝ¿X­Z†ïÎX8Èk+;KŽÔ·’1}ÙŽ²,9¶´Æµo™8
ý2¯m£´ÞSõÅ­6šS™t=4b^+""âÞ¬æå[¿«ZÅkkRþ3¤W?·½ìª9v‘c«Ÿj_t­ºßÝ648.TóõbÖøNÊãŠª§\–»ªÖ‰ÔêÐ1%Õ‘VFlÕï{éÎ‡ºyûm–ïÍX
r·õž.ýÊI^û¢l¯[n‡Ö$òÚ{>wó=áõ7íú·Ú¼^ïgèþNŸE½§Þ~Bê™ˆöÚÿÌGžùµ×¾Y’c#b^É±©9¦e÷oJQëÑ©~‰µnsm-†$;KŽ-uLÖ¶ôÜ»¨óšÆG®à
þM™rl=G±¶ÑçOZï©×ÿß1eÞõV[õÃ'ß?2jL"""v¯(±æ²ù›jÕ”MÓG&ÇÎn9¶ÆXÛ(²ÞŸUëFµ€½¶2)Ç.êÙLÙrl©õ6­×=àœËÌvVå¢ÇaåQu5¬×¦ï
Øk8zÞfeþú-âTûûuÛ>íCk:VÿNsWCÓ:ivoIZõøµîª×¶Y’c#b^É±éàžW™¿±E­åmÝèwUóð¼ö²3åØ`mKæý½N£î³Ú¦ÌésžÊ”c¿ùÐ“Zç
¯¨{¿´ZÇãõÿÕ¿ûpîÒ‡¬öúhmHoÿˆˆˆøO¿ZÖ23ô›š¥sÚ}¤ÉÊÈ±³[DŽ­>˜êÍ„¶±éÕ7/öÚÇ¨¾¶êX‡öÑòÒÔó½öòºÓzšýLÝyíc,cŽTåî^×šíÌõw÷
©uoëí·YZõõå'ó–ðÚçQ×¥õý#uèm#V/í£öþÓÊ›ó^žkÖq|äš[ÜöÍóJŽ½§Ö3íoVmÙ`­5«æYk…§Y§3åØÒº÷©³vy^üöÒŠêËÅž§2åØ
íc­Œybzæ¯1þÞ6Ò˜4æ£ªõ^Æô¿Ô—ÔõnmCó´.’·DDDì^Ñ8¿Ðï©r,ÕñÚ{&ãU¾êµ¯JŽÝ"rli•V¾]Dâi?yuœZ×Îk/ÛÇ´s?õâq^{OmßÊÚc
ú±Rõ$¬s—”Gß~Þf»/–¬y5ïýkQŽp¯¹Þ£ld}‘¤ù ºÖŠ¬­ç0Öõ«Ï€ö®ûeoÛžIûÖ÷oìÜ™FJŽˆy%ÇÞS­­`ýÎåÍ[­õåKw<=µ³åØê{YµTªnx
ùóÑÏR­°¹#Æ^»6QÌy*SŽ-5NÀ:w»Þ|k€×>F]ãÊÆ½¿µŽ%¶ÿ¯¾úŸVl\hmGï×ÐË‹›ãŠˆˆ¸·ª¾™õ¼û‹E«Ææé_©­5ŽòÇm‰©w\•;»EåØZcÒÚÎ¦
Ó.ñÚ'©ü»µ;> m;¶¦HUÕm'¦Ÿä
g\RÑgÂ:1ýXýÍ§óW<Ù÷”Ü¿McÒ¼`ïsf­½$W™pš·ï,jŒøú—§œçý]­Ÿ¼µ|¤uœRó–½m¤U÷˜IûÔú=Þ6Òj½Îí“g_cåo<ðdT}QÏ÷g.¾Çz­[&L¿ÔkŸÅ[
z\}-c#b^É±÷T¹§5fZÏN_<,:o®Uí¬š\ê«¥¹Çèl9¶´î-jÕ˜[Ï½ÜÝVŒ:Ÿz6 qôYÎSÙrl=»·îQå²çÆw÷¶‘ä£WßZùjÙ¦±ÇfGLÿ¿ê¯i³ÍÚ–ÆÊÜ
yáÕîv»º­“f^aýžæç˜4#ívÉ±³[TŽ-ÿ¸dÝ¤ÐvtŸ2qH¶÷¢½nÜì%C­cçÃûzÛ¨Uc4¬m½8èÔ÷b:>­CdÕU©Ó­öíõGcetïèµ‰Ñ®G±q±×Vã|­
ûL©,;Í½f’WvïÑ¾v»Æ(}¾påhïïkUíkýúªÊC‹8§Êþß›±ppÒ¾þ²²uKQk‡Öj­÷ØþÚÏzt]zÏ*bxNosL¶Ôóª"Î¯Ô¸¤£'ž¢{T=Kñþ^’c#b^É±Ãªd}
÷ë7ûõ!ñs(åìGŸ;4é÷dT¿ÛÝmÔÚsl™´FtÍùý‡ÆÇô#Cö?ë’Ê¢'Çûíš­mÖ>bÎSÙrliÕ¿ûéØ¦/¸]}Ko;µj,E}/æØ¬cHû¾i½kìŽü~]ëûE­éƒˆˆ¸·
ªþYRF—eN¡•«µ»û·[†·ZÉ±³[dŽ­5Ö»û{ÚuJT«`×›ZÇ÷?Þn™ž6CMºÓu~Çqã´ßWî¶¯5¾»Þ˜~l}ß^cf¦>øÄyj6Ü{Éu•6ïü[è˜=ñ»c¼
ö2iî¦üláªç¯?ýBw;–Ë®üºvŽkÚ[¾0ð¾}’2w©9
ªgäm+iß¬Ýº+izªÉâm+‹ÿ\ï±õý¤ý×ºeâôË¼m¦QïSÒþTkS÷ÌÞv,ûž|A{~­g9Õm’c#b³$Ç¶õžßj>Ùc}o5Ûë÷ë‰ëWþ°xõKEÿnuÖ[Ï~“Öø«Ws5
HõÔTßºþÙñå'œÝÞ×Ø=[NZ¿#íy*cŽ­×¯{¤×¦>ÙÆW¦^¨¾_èY»þ²keý_.]79ë±Yûéÿ×«1×µý z5f[c·½í
""ve•¥%õ4^Vý)o;ªoðù‚•Ï&mëw·
ÝÇÛN½äØÙ-2Ç–ÇOíimOãÖ×fôŽ¡±8IýoÓÌ²Ö`Òz‘íïÅæ[úôø®>9üÚU^Ïn4ÞÖÚFÈ˜~¬Õ·ÿ~CÛWÕ>¸·ªz´`ÔØ£¬[×\ìó"çõòz½W¤
û§˜g:¿“ïy€¾Bc²²äØò­‘cŽðÞ©0ºÏ»â7ç¸ÛÔ±Î|ä™_Wç—&ž‡Í;ÿ®ûKo›yÔ\Yï8ª±ŽA­úü|µ¬eŽsþ¡1Pª5{-h,ßÇsßºÈ±±Y’cÛª/
T¿÷§ß€õÛ?Ó÷¹rTÕßÒ?µæ²ú2^[­u—åÙ}gÍ±¥~'·½>ë*ïÜXªo4¶=Æ˜óTÆ[zµ8~±Ý}bùré†i× ÿíÕ)=6«mLÿ?¤ÖÐ®ßQ¯>‹±ýxDDÄ®jR=©
~”2)õs4fqH¯~í5
ÆÞ:tå~á•T×;ŽäØÙ-:ÇÖý‡U_¤ª2Ïf-¾WóJŸ¹é®öqÊhU·OscòBÕòðŽÅ26ü~Ý¶ÕÏÕxcùaÓŽï½6–1ýX«oÿ‹cÚ}¨s§9 ª-©ó÷Ô
ƒ+ú§þ¿þ½î“ú¾RcÉ½ã©UscÇÿ¸qÇ7Ï_þ¸²w­Õ©±¼zæåeâ2kŽ-µ/oûUuï§ëMãÌôý³ú…‰§ëÔ±ëXuoçm£f[×÷w|ym_·
âžUŸCo[YÔ=c¨¾fH]‡ú]PŽ¡s[½4žL×qÌù%ÇFÄfIŽ¬¾ÿÿ¼rójï{;‹šÏ“5—ëÌ9vUõk½úhPýÛ˜>aYsl©÷`÷½àRïµf5æØ¬¶1ýKÝO'åìêçeyîƒˆˆØ
UÔï¤ÆSx¿õYUýˆ˜±{!É±³[tŽ-uŸóõÊM+½÷<«YjÙÔªk9&KM£rE—5Ö;¦“caÖµo”e7êþµÞ<9¶œxÏðý¼,¿HhÙþÅˆkºÇU”I5ã«ÆÜ—fUß
Ö:½EKŽˆÍ’ÛWYsšZ1j¬Lž<noÈ±¥ê¬é¹º7î§õŒùÙþ÷ºÇTµÌ9¶Ô|¯^«õÉ½ý[ícúÿIjî`Òõ q#y>;ˆˆˆ{»úŒY“$­û˜5Ã–äØÙmDŽ-•e«vƒ÷
Þ§Qcæ<úÜ¡Þ¾cÔšuIõEÒø—Õ[6©†‚¶«÷2ô71ýXÕIñö•Ç"Î_ïãÏJ¬Y^”zfæ‹§jk|—·¯¼êXûžr{<EjÝ³WÕuØèûÝ3n}}æ•ÞùÉkì3
rlDÌ+9v¼?S+$ÑõÛ>Ñ\2o_ž{KŽ]UsZu¿eÕ†ËìÚÖw5÷,ËeÏ±«ª?îÕ`Qó5°ß©qý;k;1ýO­ýžt¬yÆ‚!""vU/;iíÇXÕg)¢ÿJŽÝFåØRk§¨Î
ELí9ÏÚ¬¸(µŽŠ·f_’ª¢>îEGŸöÓ6óäØRõU4§ˆsV«úô±Ç£Æðh.ª·ß4jÌ‹Ö‰R}™ÐZ<YT¿^u¸¿]³µÍÛZuœvíÒ¢ÔëúvÍöß[Ç¦:õÞ6ŠRµì¿ZÖ2Ó;_
i¬Ö©Ò8¤Ø<žóJŽNõ”±ÅÔƒ«Uõ‰u/QÛÊ£r_Õ€«7fm¬¡íËË»ÿÖm›UÐü²÷f,¹[™¿w^÷øýÛ¼óoêÿižÖ/ñö—äø;Þ7ôúÓÎñ»ùì^Ás©Zc^Û4ª
Ï«>zšù—º'Ð5£z}isaëúÐëõÚÆ¸ø©³ö!õþxÛ@DDìêj­>Õ8Í’gkü†ú=EõýÈ±³ÛÈ»ªÖ Ý1eÞõYÆ•(œ5üÙCŠº×©W× ÖžL“+¿Öë
­mš7Ç®=®é<}°æjÞ1s÷kÒÜßF­;¨>¾òlÝ{d­á¡×¦ñÌz­}OŽó’E«ž™µ¯5•â½¯jz4êœ¦Ñªó®8ËX«¼*ÏÖ˜
ÕG÷ÎcðÜî~_ôCsbÇ?ÕJŽˆy%ÇÎ®jbhÍ^Ý(w­ÍØô|^kO(“ÍòýŽÿTý$e¬Ó~ò
­9¡±Õš¥ß^ýo©{=c×:Ïi³Ø½U­éýÄuÿ<oZË½z®´^‡úŸªCÝÈ>("""–K•SiË„é—jL^(ÃøaCÛ×{¡ú!Ê½ŠkYµÏ‰ç´÷íê-*ûÔüùÐö/?ál·m­êO†¶
sõÉÅäÅYÔ9 “,ºÿ«q%ºÇQ¬g?nÚùã¹ÓúmŸhìˆîw½úVw›E©û*õý5Ts
ësAÑP~©Œ-éù‹ÞËÐ¹ÌsÍë=Ò}‹úÞïN_pû—K×MÖñüÐ²ýUÿ²²u‹ÆGkG;­7¨Ï…·í¢Ô÷€rLÝ¨ÎåKÖ¼Ú¾6æŸÖ’×{®ûYÍ•Õø-=/ê3šFùÖ=Œ
ŽGÇZ7Q™µÎ«²UéÑ}Ž®aoûÍRç¼lß'R×º>»F=JŸu}žu-ès¥kA×®þ¿Î½î½õwõ½µý{ÖÛv’e=ˆØy$ÇFDDDDìš’`ŒÊ¼t­43s±z\Ãáý-îVŸ3ñ
½…ˆØ5%ÇFDDDDDDDDDÄ2KŽˆˆˆˆˆˆˆˆˆˆe–Ë,96""""""""""–YrlDDDDDDDDDD,³äØˆˆˆˆˆˆˆˆˆˆXfÉ±±Ì’c#""""
"""""b™%ÇFDDDDDDDDDÄ2KŽˆˆˆˆˆˆˆˆˆˆe–Ë,96""""""""""–YrlDDDDDDDDDD,³äØˆˆˆˆˆˆˆˆˆˆXfÉ±±Ì’c#""
"""""""b™%ÇFDDDDDDDDDÄ2KŽˆˆˆˆˆˆˆˆˆˆe–Ë¬è¶Ï>•_í{ """"""""""bé
°˜ôÌ3‡®™;ûÆzû\x‘×´itÐ•Ð1J¯íÞBSOžƒÙ/¿t¢×¶+`]ÇWôìé5
€’Ó¶zåKÜÕöÿÕûèwíãµmG~x%tŒÒkÛ<ðÀÊ¹§ŸQéßçªvGÜu÷>ú§2SýûÃ=ÄÛDjn¸üŠà9xoóÆÍ^Û®€u?|û^S
€½’Û®íWyõ‰'Î¢2ÏÚÜóÄãŽ¯ì³OÇEÆäØ>—~åõgŸ;|Ë²¥#?Ù±í¯Ö±Ôª¿Û¶jù˜ù'ž5|ðûqØaÞn)*ÇtÝõ•w7ol	ùÊãOìµ/+äØ
6êkuÄ‰òë_{›)õ‰¼céÈ¾1@×ºvóöùcÐg5´ïƒ:Èk
]5óæÜäå˜iüâ¶ÿúpÛÖÏ7.^8tÊèÑG^uÑÅ•nÝºy‡QäØaŽ9ê¨Ê¬—^ìþáö­_zï_ŒØÕöÞiY7ÜˆhÛi)*ÇÖûj£2w¯}Y!Ç
°IêKUýlgÛø«_y›Ê…ê¤yÇ!u¼ eFýæÐµûÉŽmÿ—×6/V¿wÝüy·ym
 ëQtŽòÓmÿ¾jÖŒkn¼âJïprAŽýK?ìÐÊ²7§^ªgÞ{”Um{Ã¢÷^{éeÞáü9v2äØ   619¶Ôx o[yXûÖÜ[¼cäØPvÈ±
 ³ÐŒ»Ö÷¶lÜ¦Z$˜cIŽý3c¾ßg;ÛþÃ{?Št×†õKîé³whäØäØ   6±9ö';¶ÿëàm.ÇsL%vœ 96”rl
è,4;Ç®ªÆ=Ï>Û;¼TcW*šC«š.Þùo¤Þ1’c'CŽ `›cË¾¿·½,,™2åBoßUÉ±¡ìc
@g¡£rlùÅ;mÿïK#GV¼°«çØª#òû-Ë½ó^=÷ÛW¯÷æ/ûÐmƒ*ªc~þ™gµ«µ oí{mû˜nõkßiY;Gïm3öuc'CŽ
`“&ÇþxGëE¯Órè!‡TTÛÛwUrl(;äØ
ÐY°rì÷·nzÇ[ýŒ“NnÏ=•y>uÿÐnZKpóÛ‹‡ïîóüÕëÓ×ºvÞœ›÷Ýw_ïP]ºrŽ­{ªÝïÙï\«®‹Þ«ƒ:ÐÛä/Ð¼ÜûÜRiY8ÿ.o­·­¢rì‹zô¨Ì›ðêé!_ƒ
×¼´c  Ø¤É±å3<XhýÆócŽööY+96”rl   è,X9vÚL±Õ™1nÜ
µµ~ãõïå–eKGæÍ²»jŽ­ó¶sÝš7’Îï§;Ûþ¡ñÕEÔ%?áØc+&½Öãówvü?Y^GQ9öÞ 96  €Õ—R¿$ô¬ýƒÖ-Ñÿûí¿_EÙ^ý>’Æg“cCÙ!Ç
€ÎB£rì*šË©ºlõï«nX´àÞ<÷]5ÇÖøã¤óúûMÖœú›îÞfRsò	'´ÏNû:È±“!Ç  °±úRÊÜ¬~íý·ô6ÅóÃÙ/´ý·&N83ôï%96”rl
è,4:Ç®¢<[ó0½:ËÓÆŽ=ÎÛ–EWÌ±U×ú»ÚþµÍë×ÌÐÚDõF>Ù±ý_c_9v2äØ   6I9öY'Ÿì©^^ž±B}Ù·mýCý¶·­\>:iÍrl(;äØ
ÐYhVŽ]EkÖfžõêÞãÚK/ó6¤«åØºÓXkk{šGûëƒö6Sz]mkVŽyäØÉc  Ø$åØúï›–.z(ôßó®¡1Ý¡í^}ñ%‰kO“cCÙ!Ç
(ÊùTû@¹è]7ÞTq×ÝûèŸúÿ'w¼×¼ÃÐ±]×ûòÊÐ·¶sÿ>WUÎ=ýŒJÑë­‹fçØBïÉGÛ·~eõ÷•¿ªþ`ZòäØÇuTåšKzýthíJÕøÎrI™c[÷SR5"5&©™è
ú|yÔ(wÉ½%ÇÖZ§ZçTê3{àîK‚  ÀÆË±¯èÙ3øßßiY7ßÛv¡±š÷¦ÿFŽ rl  €ŽCãOµ.¹Ö ülgÛÿ´ú”òÓmÿ¾ùíÅÃGÝsï>EÖ^8úÈ#Û³Ðz­q
Êÿnïw]eý‚·íî/üÕ:^e“:^Õ›Î;7²JGäØâ¼3Î¬$­‰3uÌ˜c¼mÔ“6ÇÖ³‚Õsfõû¸­õ{ë8TEãŒŸrß>EdÚEæØïnÞØbmëõgŸ+íMS‘9vès&8à
¯i*:èÀÊ°AƒÛ¯Õz·êãè3ºsÝšiºÐs¨,ß+Ì±u<Ö9“º÷
€æ£~ž§«ÛÖåo?©gúŸïÜñ¿ú}Ùý¿õïÔ¿2zô‘šßVÎ8éäÊ«O<y°ŽëÃm[?¯]Zý«kWMœ3þå“z{®·©h¼[Xë_÷íuiÒ¦Mú]Ö;¸OõßE3slÝ7h¼ÅÜW
^9U}Ô·oý²¶_¢ûõU´îÌøQ¤÷~‰úu»2ë¥»küþ®
ë—¼ßºù½wlûÕ Ñÿß¶jù˜eoN½Të¤«Ž_Ñ}Ëzô¾ÞxÅ•ÕXÔw€Ž§ö^Vï±>czÏµ6Žî+µÖ{tÕ[cQ&=óÌ¡:ß:·ÕÏ‘æ´½õk]º§êqêiÞ¦
R£þˆúÉIÙh’»ÛýÇŒqãN(¢›Ó©¿òÔýC»éwÓ;¾z•aqÓQ9¶Ðóëõ}º³íi3ÀØ[}DõO½s\¯îòÎI-*Ç¶ÆÉw´þXDæÞ(b?1XçàØ£ŽöšF¡¹Ë§O»
¼ö¾<ÊtyOÿ›£çS4*ÇÖçÉº¯—»¿S6~Ø¡Þf   @ôÝüÒÈ‘¿RÃûM©W¹öØáî_Ôo¾U«¬þ÷G™»~×4Ù;ÆZw¬[=¹ˆç¥19öMWö
þ~“¶mÑ¶fÕ«õÛªí·4#Ç>ôCÚs×Ovlÿ7ï\×ûû-Ëõ|½ˆq0š#êÿ¼h[¡}hßypõ5•‹ýâ¶ÿòÎY½j£kxâSO¢þaQqØaíïkÒ¸KÝ¿*ÓÎÛÛrl
ë5è^·þoõý¥Ï„w~km]±ìYåÞ
E ±Êî¼ßŸ•)g«Q%&§ÓX`•ðŽ'I=3>øÎ\ÒŽÌ±…ÆéX¯OkÂ{íkñrlÕ~Ðóvï¼zª¿˜õ> ¨{Ù´7{[Ûyåñ'šS;#1ŸX¬s7ÇÖø=óÖ%M£ÆuhÌš—
g7"ÇÖë±¶+É°
šÆƒê·ÁûýðTßUÏèó“ck\jÚü§VsT˜p.19¶°^OÚ,]uæBÛQ}·*Ì±ÕçÔ˜`e–Þùõ|§eíœ¼YpgÌ±•?êµ{ç'ÛW¯§qñYQPÏ°jç]dU×†æŽzû´è*9
¶j‹ª¾w>-õ,C}ù¤ã
ðÐïh]ò<*»Ò{oßI9ò¤…¯¿~nQÇ¬íhjV::ÇÖ˜rëµi^Ÿ×¾–¤[cPŠèÿWÕ]ïxB•cÜÖú]hê_å½_j4eÏ±sìq™ÆëÇê½?EçØúÎÑ|oëxÈ°
š‹rIÕ„ð~/ÒXD>œ”ck¾ââ)“/(ªÿ:åùçòŽÇ"6Ç¶ÖQ>kÛ!Z-¸»~_;¦¡Q9¶Æëk^—w>Ó¨ÜTýâ¬t¶[ó?‹—P«>3ÞþCèšPîm?­º?É2ÖfoÏ±5g
Eß_Þù‹UûòŽ
„ž‡z¿3UÕgSÍ³ØgÞê§g}®måtµµþ¹ù˜ÖLT]•,ttŽ-’ÆõœrÂo¼æ?aõƒÞßºi‡w³˜åy|9¶5.H¶®Xö´×¾£)sŽ}Îi§›ÏŠÒ»Ÿ-2ÇV†­ûuëXÞÝ´a6
@óPÆ´fîì½ßŠ¬æÉW¬[k–Ý—Òs÷Þ\àRØ[çZysèocëÝžtüñ•P
­ÅSûwÈ±Ûë¥¬ÝkžûœÎ”ckn§w.ò˜%ÇÖx‰¤õîóºbÆô>Þ1Ô³7çØª%¤{ï¼¥5ïsC
èzhAÒo‹êÙ®š5ãÕ3>ìÐ_þÌuÄ­•Ø²pþ]IõÑÔÇS}½´X9§úÚ»³ªž2RÕY;oÎÍV¼V­
âWˆ2äØªíh½®—GŠè“ê&Xj­OÕÑy­ã¡õ•´¦KÒŠU5¶#ö>¨J9vRŸ|ôÃÃŠYð¥”5ÇV/ÃÖs0­ÇªûWÍ­ÖÚI'{lû³ÕÚS}­ó˜4^Í»Ÿ-*ÇÖý{Ò
.Ýg}þ
Ù°²–_~?¯¥z¹êëöïsU»ê·ª¨¹j^û¬k=[9vŒ+¢¾“Ôÿöþ^êµd;›cý^‡þVc¬CÛ®géÔ7.Þóµ¶þX¿¾^Ñ9¶Î‹Æ&$?ÝÃT×¡S¤z­hü±Æžz5kÔW¹oÀ
-Þ¡ìAgÉ±¯ìya%©?¦ÿ¦ºßÒzEºgÔùSÍFÍ÷}{êÔ^ºž“¶‘6ÇÖØ¤[ûÒ}‰ÖçÔœUõ15–X÷²êsêõâÕÒ~î¡‡SÝìÍ9vŒ»_ç_õ^ë;©vmÍ$õ^]Ô£‡wX
íÌ1‰5"4þð˜£â¦+žú›î‰5šÕWýõÁé†Ý¦É±õ:Ô:ëäS·©~Õ­[>±¶£~†Ww7DrìÓºŸXÈøâØ[ýþÕsfõS=–¤û'õ½1SºvÌ
("Ç¶Þ3™6WïÊ˜cë³³kÃúEÖötÍèsª5–bÐ÷Ï”Ñ£Ýgx÷³EäØÞx?eØi×Q €|(‹¶¾—¥ú¯1¿ãÊNÚÖ¬omGùJ–zÙirlý.êY©²öúñ"BÿNyª·–ù-×ô
I2irle€¡5ttŽÔÿLBû	­óü»GGì±(|Ñ9¶ž‹[ÛÓ±+c¹×Ñº†IcQwß‡ügš¹¢3äØê%=óY1cÚ•±k5jF=
}æÒäØêk¾Ó²nžuL±Ÿ¡ëzÜˆXõRô¾ê~9–®–cës­±czþúþ:îè£ÛÇY%Ý{KÍ)
Àl\¼ð>ë÷DùdÚ±S¡±ÙÖ6ÓÖBŽÉ±õû™&ÊÓ“Æfß}So{P†[Xã`?Ü¶åS¯m/ÇÖ=—æÚÅö[«h\FÒXŒ>^ämâ'ŠÈ±­Ú4º¦²<Ëh6eÌ±5ŸÁÚÖ';¶ÿk
Ú5¡ªè>CókŸ»y÷³ysl}ÿé{Ðz=dØ  ÍG}8+›“iç¨ë»^ëN[ÛSÿI¿AiˆÉ±«})å<1è’ê[¥¯P%MŽ-4·/ô÷^ÿ>Ô7øtgÛßC¿¡EæØÛbå“ú÷Z4
^1Õiö¶QKgÈ±5ŸÖz½z¾âµ·PÎ¬ù¾Õù¼irl›OžÚöêŸZc»¼ë»–®’cë^Ispcž‰˜ºÚÊÂ  ’ÐëwDóýÓfØU’æï©¯¢úx±x9¶æ
jžX’^ÿ['œéµ¯§,9ööU+Æ†ŽC}»Øû°¤[¯§×¹çz›0QÿÒÚ¶Æ#yí«‘c‡ÆuÄ{–•²åØGydp¼•Ô½jfçE÷ûÕ{Hï~6oŽ­º8Öy!Ã
è’Æ×fYo£JÒz‘/>öXª/|/ÇVÿUóÓ¢ß÷[7¿Úf–gðislí_ùsýß«oYµÚ¨þ\èï‹Ì±­ÌY}âÛû]ç5¢ûÝ'YÇxkßk½MüDgÈ±WÍžym¨ýÆÅ‡zmcÐ³
åÿ±9¶®3«¯©qÕ^û$FÜuwðÚÓþbçw…[÷k±ùu=IY¶êo{í
 kc›V_3o­We_š‡Úþ¢É¯Ÿïµ¯båtêOŒydx\(›€µæ‹þ½×¶ž²äØË¦½ÙÛêx5WªXý 5sf]__Ç0-Ióõ¾p@\4oŽ­×aµßº|éã^û2P¶{á¤IçXÛÉR72
Õ/÷¾§òäØI}x2l
€ŽAßûVÿrËÛKFxí“PÿdÇºÕ“CÛÕqNÂÊ±µ6„ê{í“xò¾ûƒuª¥Ö˜HCÚ[XÏ–L™raèïU;¤þoõZó(‹Ê±Ï?ó,³o£úè^û$tZµ™ÓÜCt†Ûznrÿ-½¦©P
î46:t<ªçµAYjhû±ëæìÍ9¶2‚¼ýy¯NMšñn
ÐµPÿËz–=é™gõÚÇ 1ÍÆoà?bïŠÌéB¨înhûê_{më)KŽ­÷ÏêÄÖí°úAº·ðÚÆ Ñ:ÆA×]ï5o'oŽÔ^ï¥×¾ùù°ÎElŽ­çúl‡¶ÑºbÙ³^ûF5ÇNš_N†
ÐqhÍµÐw³Æ§­MBóÍ¬ïÿ4ù•cç©ÃPEëÛYÇøø½CRm?KŽ­ý+¯o£ûŠúœYãÃ?jkýsýßÎí53p/*ÇÖ¸ëµñ;þÄûÌãŒ7Òrlë¹Q¿Ëz{MGc¢C×žæü
¥¹6’Pm‹Ðëã²7çØEÝ©~ghûRµ‹¼ö  Ð5yàÖÛ‚¿º(ª û
ë7JµÖb(2§qÛµýÌcLÛÇ-KŽ­9uÖkÒùŒ¡Ñ9¶2O«^alM—¼9¶òY«½ê½yíË@‘Ÿë\ÄæØzþ`m£o¯K½æ !KŽ4_
 cÙ±võ¤Ð÷sÞ±ØµXsõÒìÃÊ±½ç¨±¨fwhû3_|1U˜Ÿ%Ç{j§ßÐÚ¿{äŽ;÷Ø¾ònÕ!³(*Ç¶òÛúcÌŠ2ú¼ûè9¶õ^è^²Ù<ûàCÁçXyÇ××¢Œ¡{ÕðÚ
rlÉ¶j;n[¹|´×  º&š{úíÐý×6
ïmÙ¸-´ŸØ¬²Èœ.DRì4}eQ–[cq¬×;°Ñ9¶P?%´ØÚhyslëÞA.˜ôZ¯}(òóa‹ØÛZQón½¶"mŽT»
 cÑw°õ¼¨|X¼ðÈðýCûPŽ[ºÑ9vÛšU¯†¶ÿöÔ©½¼¶µdÍ±sìq•êú|µjìnmáÐ}€ÖžHØt!9vRM‘´µW’ÐùíCëˆ{mEgÈ±CµÍeQõ±Ó`­¿¤5#‹ä÷[–‡
öcÕ€¯…;«¦®7¯-
tMÞÝ¼±%ôÛ1ë¥Ó/:“ÀÒ©o\Úúß^[QdN"iLnl_¹JYrlÕo³^SlÍŽfäØZß'´OvlÿW¯­È›ckÎ§ÕžñØ?›ckŸ¡öEöyÓ’&Ç?êñƒ¬s@†
Ðñ¨Žõ=4¾7-gœt²¹å£14:Ç^ûÖÜ[BÛOû››5ÇV¿W5ûôßµŽbý‹Yï½ˆûùaì~]q}ÌXî¼áÆàùÓëŒY[½3äØÖü­•YDœX4†7Tãäã¶Öï¼¶iiY´àî
Ðk¾úâK¼¦äØ‘hlUh²Èïs  Ø;ÐXk<‹êU‰568vnV‘9]Õ
·~CcûÊUÊ’c¿4rä¯¬×T–º"Âªm#½õûDÞ;©½ÆxíË@‘Ÿë\ÄäØÿ=sqYRµL½ö"6Ç;üÑý­×¯ùdØ
Õ¿iÄ¼«&pl?¨Ñ9¶ž·‡¶Ÿ6gÊ“ck<€²Ìú¶O©ßÍÐzyëÎìm·ˆ{Õì™×†Ú]³@ãs­c÷Ýrì¤zkrÝüyc·•¹íûªc½¶i±Æ
¹y€×”;’¤91Ï   k¡¹€ÖïFLŸ+ ú²ö“ ™ÓYXÇÛW®R–{ÚØ±ÇY¯)¶ŸÙŒ;i-¥ÓºŸè5ohŽ¶¿×Qùù°ÎELŽ4vMïsG“ck,Qè>\’a
”«†C#r,Õ…í+¶þt£sì¢r¦<9¶Ø´tÑCÁã˜3ëúÐ¿Yÿ°ˆ;”¡Ë%oL‰[ð<¡ueL-¿Îc«hU¨Uµ8”y¸úšÊÁäm65ÊCûU½õwlû—"µÞÓ˜û
rì84Æº–bž  @×â²óÏ/,»õHªÝ ìË£ÈœÎ¢¨sQ–[c]¬×¤5æchFŽ´¨®Q¼9¶æ'ZýòØÝM‘Ÿë\ÆäØZÇÑjSK°Qx9öˆ»î&Ã
è$l^ºxXèûºÈl¥Šµ/óõÚŠFçØ“Ÿ{îˆ"ÎEÞûŠž=Íßÿz7¿½x¸·=QDŽý~ëæ÷Bí5¦ßk›k_/åN.ì9¶Ð:ŠÖ{R}+ÕÖÚ#ýû\•;ÛNš;×,U»Ñ;Nrì
x4?;ëy €®…•}Ie{E’”5ÆÔ,2§³°Ž/¶¯\¥,9ö;-ëæ‡Ž#Mÿ©9vÒµSÿ$oŽ-49ÔþÃm[ÿàµ-E~>¬s“c«îºÕþÐCñš7Œ¤û¡ÛçCK=ßèÈü
öÄúNoÄÚÌVŸnËÛKFxmE£slkM‡´9SÞ[XcŸëUæC9¶•ÝÙ­òNËÚ9¡})ôÚv–{ß}÷­lY¶t¤õ¾Äªþé¼
¯ž~eÏ½]îÁ¼W_9ÍÛ~£7bÄÞq’cÇc]›xÞ
››®ì“;ÿ‹%)kÔN"s:ëøbûÊUÊc«Ÿ©ùu¡ãPßÆk_¥9öÐá9¶µvìÈü5–"?ÖyˆÉ±u_ž÷½hÖu¬ÏªµF@UÖv (V­˜¼0-‹§L¾
´¯Ø¾TWÊ±“î+ª¦™çVDŽmó,êü×bõ5bÖï,9¶Ð=Æê9³úYïMZõ¹ëÆøËÕª	ßLcrl+o/ò=µ°îkÊšc¿·eã¶Ð~ôýæµ
€®EÒxl¯mZ’²Æ˜qEætÖñÅö•«”!ÇîsáEæëQÍ:¯}•fäØªqbk³rì¥Sß¸ØÚ†îËÊN‘Ÿë<ì9v¬[—¿ý¤îÛ
 ãywóÆ–Ðwu#rl+3#Çc½Þª1ýº*EäØÖ˜Ž¢Î-]%Ç®rkßkÍ¹ŸYTõ˜qÖgRÏ,ôÝÐ¹ãNï0ÍÏf‘ï©…õ¹ö­¹·xmkiZŽ½û~%´Æc
@=I9¶ÆÈÉÑGiî+¦ÿTdNga_l_¹Jrì·&N8Óz=õˆŸvÛŒ;oÍ™"rlõG­m,œ4é¯}GSäçÃ:19ö-×ô-ìsT$ysl¹~Á[ƒŠ®·
éÙ±võ¤Ð÷t#rì•3g\ÚWìš’]-ÇÖš†Öï¨ÖÿóÚ×RDŽme·EÿZ¬º*1õn:cŽ]EµA4oáÃí[¿´Þ¯XßÛ²që¯>8qVŽv¬q£Q:N=[ñÚæÅß¼bÆ´+½¶µ4+
Çþ¨­õÏ¡ýŒydø~^[  èZ(Ï´ú¿9ö8¯y*¬þYì¾ŠÌé,¬ã‹í+Wéè»[·nf_õã¶Öï¼öµ4#Çîqêi¹®"rìÓºŸhnCµ³Ëž_ùù°ÎCLŽ}õÅ—äz/ELŽýî¦
ë^xdøþV­l¹|ú´Ë½}
@cÙ¶rùèÐwtÚŒ&†‹ÞÚWË¢w{mEWË±Õ_ú uËG¡mÝÓÿf¯ù/("Ç¶ò±F¬g)}ãù1nª3çØµœqÒÉ•§îÚMý%=·°ÆÃ'é­:óÅj·uùÒÇ“Ú5›¤ëw¿
ýÏZïõ´±cSuÆ›•c¾sÇÿígÈÍ¼¦  ÐÅÈ[Ï!
·]ÛÏÜWÌ|ý"s:ëøbûÊU::Ç~æ»Y¯%mÿ¥9¶5†WybL~\DŽ-¬uæ¥Ž±Ìùù°ÎALŽ}ÒñÇ›íUë¦£ðrìÚØc‡?ºÒßÎÿòIÎî
 ¬™3ëúÐ÷s#r,kŒ­ÆŸzmEWË±E¨úþÖMïÄôéj)"Ç¶j©«v±×6-V-îÇïâ¾ð½%Ç®Gck4·RÙ¶jj´½õkë=­Uã",žú@ð>GcÍFÀÍW]mö‰O9á7^óÌè¾
ÚÚï³>äßt×ÐŒ;)¸ìüó½æ
ÐùlgÛ„~7Š®G5áÉ§~ÚÆºzmE‘9…õÛW®Ò‘9¶²8«Ÿª1i_K3rìWâààùŠì•c'­®9Ì^ûŽ¤ÈÏ‡ubrlõ­u•{íERŽÝ¶fÕ«õõUCÞú{ù
êO&Oz
€†¡gò¡ïf½õÚ¦EóØBûŠïÞsl5ýxGëµÛybÈ}©ûEäØÖxzé÷Ú¦Aµ0¬cdåØ»ûTÿåµ¥#rìÊ&×Ì}cÒü·-o/aµ·Æ¿¨ÿÙèqÎiHšëÙÈµw’æ¹
Æ\‹µ4#ÇîwYoóx:è@¯9
tAÞiY;'ô»‘vMK=ÚOìØ™"s:ë74¶¯\¥#slõ­×±ìÍ©—zíëiFŽm]±×`Q9¶æBZÛ‘×^z™·‰£ÈÏ‡õúcrlaÝ³ë}öÚ6 ë:NZ¿1iíO©±EÁ†
ÐPî¾©¿ù[uè!‡xÍ£IZÛEÙK]1Ç.Š"rlÕôµO[gÏC¹džcMª¿èµ¥,9v•¾½.Õxªÿ“Æ¶k,wˆ¤Ï¥¶YtüÖØŽ˜Z3Yq×Ýæç&¶/_¥9ökO?}hhªOäµ
€®‰5µÈþ~Ç­¹v‹ëµEætÖo~Lÿ³–ŽÊ±ŸöÈ~ÖkÐ¸û´¯C4:ÇÖµaÍ
P?Ìk/ŠÊ±…ÆæZÛRÝ‘Žç³æj‘ŸëõÇö}UŸ4Ô^ó¼µ{…u'åšÿ¬µ­ó¡qD÷ ˆzÔ
rü1Ç˜¿UEÖ³Ö,ÔÙØq‚äØÙ)"ÇNªíPäºÖ<®Øy§I9vìkõ([Ž-^ö¹Ã³¼?VÝó²­cb}þßÝ¼±Åk›íSs$¼¶õ4#ÇÖ¹í£ë
ÀÞAÒ\ž¤ÚditÝõæ>T3-†"s:ëÓö;"Ç~î¡‡÷MšŸ§õë¼m„htŽ­5BÛ×=bì˜ª"sìW_“8&;fÍù"éuî¹•˜gJE~>¬×›c'Ý3f½ó’%Ç«½}ÕŠ±ÖëÑ
8›FÎ  €0ÖZ‚«fÏ¼Ök‹5_ì–uó½¶UÈ±³SDŽ­±
Ö˜ØØ±41Xk¬¨&´×V$­/¢¾`”1ÇNš™t¸lÚ›½Cm´^`ìýC3xkâ„3­×§úE£×n­­;Ïµ–FçØz­ó£µµ   Bh<l}
»ª[–-éµÁZ#Gk¾xm«™ÓYX¿£±}å*ÍÌ±•³-|ýõs­c—cœvm*Ì±uLÖú;Iuñê)2ÇmkVŽO:Ÿzfàm£TK²Úõþ¶ÈÏ‡õºcsl]“ŸìØþ¯¡mhüLì¶"É
šcÕÎ¶ê/IÍ‰½¢gOo3  P Ö|Â¢r,ùÖ3õÐ>´æ‹×¾ 9vvŠÈ±EëŠeO‡¶¡ìÙª]‘†¤1A±ó4ßÏÚFQýÎ2æØêcY¯;é¸’Î¹êÂ™ ›ŒÆ„YÇ©Úí^û´Ì}å•S­ý
|gê{·FçØÖ¼G]«VÝ?
a­—#cû_CÞjþ~¿<jTt UdNgagš¾²hVŽ}ÕE›s±ª*7Ô:ÐYidŽ­~¹uÜiÆ¸ck|„5vGjÜ{#×ùÓëÙÝ·šæuùù°^wlŽ-’ÆŸ¬˜1=þÍu8ñ¸ã+;×¯™á
}FóäØBŸ¡÷¶lÜj½&åöçœvº·  (ˆ³N>Õü½Z8iÒ9^{£
m[Ù¶êóÆBŽ¢rì!7hXF¬1ŸÚ¶æÓ¥ÉÉ­ZiÆv„Ð1Nzæ™C­ç219¶Æ‹¿4rä¯²Ž‹±Píë½ñî_¬1ðê§ç½µÐøþaƒ{ö:_ª-c½Æ´ë.&¡u%­±Øz¾
S§°žFæØIóµU§Çk
]õ¬u6òä3ú=ýtgÛß­íê|,EætÖoiš¾²hdŽ­þÐW\YÑútÖñVÕ{zÉ9ùnå•c¾þ3+Öm¯}-EçØÂº/¬uí¼97YïYýKÝg„>‹^Û"?ÖëM“cëßúN‘
yïu_8vø£ûWk«{ŸÑ¼9¶Ð½VÒ½ˆîW‹¬µ	  ÉhÞ`èûX9–j\eE}ë»>í³Xrìì•c«Ïðá¶-Ÿ†¶£~DÖû¡~›uŒªýìµ¯Åªc£ë9k
ŠSÓ½ýy¿uŒ2&Ç®ÖïÖœÅØš1<~ïà{¬Lßk«<ÙzMêƒ½æcÿ>WUÞßºé÷ÛV.íým-ª©g§æDÑwÔýˆúüÖ~–L™r¡·Ê±Ï;ãLsî¦Þ;ï
€Hê‡)»Q?(
ú}²ÆH­Ièm£–"s:ëXÓô•EÑ9öÉ'œÐ>®}ñ”É|´½õkë8kUß ˆzzVþ·nþ¼Ût\iQ¯÷ÞÊ°ÕW×8ó44"ÇÖq¶,œWÌyVžšeŒC)žõÒ‹Ý­g>1¯£ÈÏ‡ui
rl1åùçJ:wsÆ¿|R–9ƒ·÷»Nc£·ÕnËûŒ‘cÿ³úÝR÷Éô½ šÃE=zT¬µA”…dYçEõ ¬ç°ëxÊ
¿ñ6ñÈ±³STŽ-TSÁÚ–²D7N‹ê¿Y×Ÿžm§¯#F?<Ìœ§øîæÓlï˜£Žj¿o°ÆçÖš&Ç–×­ç9YîjQ9ëùÂ¢É¯Ÿïµ;×¯e½.çÄ§ž:$ïrª­9˜6ÇVÍ
˜¤{bÝg_v~ÔË ¢{t]Öö5;Í’Z¬[õöN8öX¯yÏ¤¾´2	o
ByRÒs\õé5ŸL¿ÅI¨5eôè#“úM;Ö®ž”¶OQdNgaoÚ¾²•cë7{Þ„WOOrÉS.Z3wöÛW¯§¬N}ë¸,?Ü¶õó<cKj±ò?©¾»Æ…¸ëî};4¹¥ÞocHª3,³Ô
´kDŽ-ô™Pmqï|ËOw¶ýCk¤+c=ä×Ée3•y«§Ï‰55íë(òóaCÚ[ãŸvmX¿(éu©F¾î-½ç ºWÒ½ºõå}F‹Ê±…æ8$5Wý‘Ž¨ ÐQ
ëûX}¨§îÚ-¦Ï©ß,ýÎ$ÕK;¾Vcg§È[¨ommOY¶ÆáÇ {omš»oêïmfT×Ýªý!ÕòÆ¨èÙŽî%bòëªisìª:Ö
‹Ü{kßk+iê§é¶j#ê3û¼HÏªsó,¿±e¹Æn§9Fe´ª!êw¦Í±EÒèÕs©÷-Í³#;¬¢úÞ½âï‘y°•cWyÓÒE=tÛ JL¿Ws
VÍšqõìçŸïÕ†•iÞ'   õ’Æ„JåuÊYÇq€2;e“ú§þ¿ÖjHÊw¤ú‰Yž
™ÓYXÇœ¶¯låØÍPïML_"–¤»Võe”»«?«>ÖQßjÁ¤×zl~{ñðÝ÷Aõ¶¡Ì3ËøÜFåØBÇ£×ä{½7¿cÝêÉÛV-SUþÇ;¶ý‹×6Ëë(òóaCÚ[¨MR-Žªºß
ÒXõák¯õ?Ü¾õK¯½÷-2Çªßž”uhošqS   ¯Øµ±åí¤ß=3UÞ«ì¬¶Ÿ¡¶=Ï>»¢|Zc
’¶¡ß‘˜<¼rììcëþÃZÛ¾êÎuk¦éÙÇ'\©}¿<ðÀÊ5—ôªh.™w¯”eLF‰HÚ¶Ô5¥<Pã_4ÞXÿT_õ£¶Öo¼¶!³æØµ~²cû¿©ÞÞ3<ØMc‹>è _´×ÿ×¿×
ý¢úÄIÛÒ96#ˆ×'ûù·ýUçIÇ ì]ó?õ u?«šwÃž4®KfÉ±ER&\«®Aõ…5NèºÞ—ÿtŒºþ4?÷Í^8VÏd’žyTÕëÍò½U%ö˜u,ª©k@×£ÆTW¯Íuóç
´j™×ªÏU–y   }.¼(q¬aóÔÚ.2§³°Ž;m_¹#rìZ7;Ž$
±9v^5†5k=†FæØBý¿7žstL±¶®Xö¬wŒE~>¬ãÈ’c=‹É²óè}F‹Î±Å}n1ç³KÕmÍò\
Òqü1Ç¤úùtgÛ¿Kïïªæé£cg§è[xsª¯ÿ¯»ÿþÿöþ®jÞß~½.òö“VeÇÖ¸å"rì¢ÔùË’»ê(ÍûšÇ¬9¶^—ÆyÛ/JÍöæQ{ÄæØyÕ{§
+š“–TÇ+‹ZãÌ“NñvmRdNga{Ú¾r3slÍ•S]†FÍÁjFŽ­ÚYïE£sì*G¢óí½ž"Tf¾zÎ¬~1÷¢ÈÏ‡uLYsl¡÷×“Uõ}½õ6‘c;J:6ÍQÉr?
éÐZiêkz¿iÕÃ<}rìì4"ÇWôìYÑëòÞû´jìkž»Šæ¹&='O£Æ)«Žú"ÖkŽék6#ÇÎ{þTsÅ›WQ„Ysl¡÷Aó ½}äUküä9—Uš‘c+sðêå
Ä mE<3V?LµòÎ±/2§³°^CÚ¾r#slOÝiÎ]‘ë…[XùßŠÓ®¬_k/­z-š7—·ŸÕ¬[¨ÿ©:pÊ³UCCc¿µ>OŠü|XÇ–'Ç:w£î¹wŸ¬ó^ëý uË'ªÙóÝÒ¨
[èþ0é8óÌ/ €xô{ yíÞïGŒê£¨ÆCÞ>
9vv•cá¯]»/ÊŠUG¡ÈçÖª)S+#IÕ³«Í¨óäØZÇDõw²ÖÇKRãÏUÓ£ˆó§ãTöš¦>x¬Ï®{Ú"î¿îésåã¶Öï½}¦UÇ¨º8Þþc±rl­ÏYÄñëÙEžç„
!4U5jÓÖTPßKcUw°ŠÌé,¬×’¶¯œ'ÇÖZê#ª–£Æ m\¼p¨jµé>E5Ò¼5‹ÆÊÿ4î©šéê>
Í¸ý­®©"ú¢™9v-úlhLÅ­[>ò^s’ÊÄg½ôb÷<k•ùù°Ž3oŽ]Es5‡@ã³Ó~¯¨þâ²7§^zí¥—UÒÜï42ÇÞØÕûö¶
Å Ú·êCy¿)–;Ö®š¨Z´E@ŽFæØBýˆ'†Ü·OÖ1¼êÏ*‡‹É³ ~¡W«9¤žó+¯ï'åÉ±«hþ§jxÄ¬‰ä©š-ê?ñ^ÖsâqÇW4V&oî®\X¯Uu©óÖè¨G™»žhMï8
<õ,@µ¨5­H¬[ß/:ª5že\“îu_  ÐH´&²ÆRªÖÁ;-ëæ×¯Û§g²zî¿bÆô>ú»Ã-öwÊÖõÖX
]ºgS¿±:BÏ4”õ*»Öý–þvoC¯Ic+¦{œÎîµ»î?t.ôOýõÛ”Ãjí­)S¿NWCÏe”7hL³Î›²måúÕs¥ç8§±%zî‘&»
€®êG´¯Ûæä,Ê#õ;­ÌFµõŠD5"”)Ö[Ôzf=N=-¸}­a—eR¡í(¿ë(´¾Fè˜d‘™¢²YõEÔñÖ–ÖówÝiîÜiÝOô6›Þƒ­Ëß~2iŒ±ê½«Ït×7U¬ZƒÚNè\z
µÙ,4WáÆ+®¬èY½ÖôÆçj¬ŽÖ@Wv­>sÞ¹1è\è™”Æ‹h½/3ÖœAÝ¯¨_ª×ÖŒcTßVûÒyQ8f¾®C}¯é¾[ç²ÈÏC-I9víß©®L^õLtÏ÷ÙÎ¶ÿYû÷º6ÔÇ×˜~}
g
@˜<°}ý=C6hp»úßš7¨ÿPEcqôD×G5Ë×ÿ>ëäS–Æ LVc§kKùçÉ'œPšçü:?:åšU5ÖCã¡Ê‚ÎãQGÑþHÇ§±Ûe¥ì\çPù»ÞkÍaÔû=àêk*š
¨ç'Íºcsl‹ýökÎq         @×$oŽ ÐHÈ±          Ìc         @™!Ç         €2CŽ e†          Ê96          ”rl
(3äØ          PfÈ±          Ìc         @™yöÁ‡öÝ¶jù˜z'>õÔ!^[
€²±o·n•£÷?±tŠ÷Û¿ÒãÐîˆˆˆˆˆˆˆˆˆˆˆ¥“Ë,96""""""""""–YrlDDDDDDDDDD,³äØˆˆˆˆˆˆˆˆˆˆXfÉ±
±Ì’c#"""""""""b™%ÇFDDDDDDDDDÄ2KŽˆˆˆˆˆˆˆˆˆˆe–Ë,96""""""""""–YrlDDDDDDDDDD,³äØˆˆˆˆˆˆˆˆˆˆXfÉ±
±Ì’c#"""""""""b™%ÇFDDDDDDDDDÄ2KŽˆˆˆˆˆˆˆˆˆˆe–Ë,96""""""""""–YrlDDDDDDDDDD,³äØˆˆˆˆˆˆˆˆˆˆXfÉ±
±Ì’c#"""""""""b™%ÇFDDDDDDDDDÄ2KŽˆˆˆˆˆˆˆˆˆˆe–íg^\¹»×µ™¼áŒK*}O¾ rÞá'ºûAyy÷ßº×™åÀsz·_}š»DDDDDDDDlœ
äØØh?mþ­ßmÙñ¿òúÃæûvÍÖm_,Z5¶mÊœ~sGŒ9ü¡+oªœäÉî1`×õµ{ÝÏ»¶bü~óÎ¿·¶õÝ?.Y;q×›.zrÜ±ÏÜtW¥×qg¸Ç€ˆˆˆÇ+»÷¨üyå¦åI~
¾`Ígqõ)çU¾^±q±w,:^o[ÿ?{oâ$U•öë&8µŠÚÎ#Nˆ¨€(Ê$
¢( "‚ŠL¢"“ˆL"2ÏPÌ3TAU‰ÎÃGw;€Ñ÷ôù¢OŸ¾÷Äß‰/nÜÿãò+O¶IºÖ~×Þ¹3+«êy"žh[k­½3sWåZ¿½ö»›ƒäØXlÓÊ±}þRUÿ×ã«7œÿÜØ³
ï¹òó|°e™VŽíSùö7•»ç®?íýnêdž"""–·Ê­ï9çé—Ï²ú*Ä]oÍ¿Å:©óµúBDDDl’cc±-vŽ«2íêw—uxû}æyaË°Ø9v®'ÕÿC÷TF?0Ð</DDD,
OCsìw>P¬5ÙzÞë—ƒµ?Xç
É±±¥HŽÅ¶”9vV­‘=øÎâ»YŸ¥Ì±sUžýèm÷šç‡ˆˆˆåehŽ-§?>¢•Õ_×¼òæ%Ö±³’c#""bK‘‹mcäØYÜu¸zD‡ÍsÄækcåØò—ƒu?¿3lTQŸ9FDDÄ
t“cŸØº¹Õ_\µ÷ËÉ½G>·Ž•[ŠäØXl}9¶Æç_n”ËGOºPûé˜½¨ãÇË*‡ŸØv`ö{´ÆógçPýß¿ôú¬óÄæiTŽ½ê•©G]K^žp¾®¿=o/hìý
µ¿ß¼wáÉµ'¬k.ß£Wö)ÖsÇˆˆˆ˜®qrl9þÁ'Ì>ã¸àÙq±îÁ“c#""bK‘‹­/ÇþóöêV[—ÊŸëÚ/S9qæÕZcí³*´úÆægTŽtÞ§úëKGO¼à‹5[Ç©&¶
uíÉ—mÚùÒÍ¾±qõåØ?UÕÿÓõï¿«Ü»Àê3Žª»zìBÆ3ˆˆˆˆMMrl,¶içØùëÒ'SW±¦Hž¸áµ—[ýaó²9v®ýnê”Ù9mÞÍÚcÔºþŽ¯¬ÁºlDDÄòÖ—c
Ÿ:PûoÊ¬]ÿmT¯ÇÌ~C|kðó­\ýº²òùbŽg›‚äØXl‹cgÔ¡{æÛM»fùÆøRkY4?°úÂæc±sì¬=¯ëÐp?%êú“»Þ~·Õ"""6žQ9ö¤Ç†;ÿ›žÑ²ú
Ñ•“k}vÅˆWÏ-Åx±œ%ÇÆb[ª[j­«ê‡D={yêÀ±Sµïjö…ÍÃRåØY'?úlF×˜ï˜ò­'¸—‚ˆˆX®FåØúïÙQµÍõß‡v~Àì;J­évõ»ðùWÎ‘¥Ï
"""–£äØéyÿUí2}Ûvjø_ëgËÅ×ÞÑpÎÚÝúÙ¤–2ÇÎ:{è¨ÖÚßÑ7ÞÿjÝö‰V˜¾Ý¯ißp½éº³~6-KcË§ïîÑ>¦¾ãþ¼§îËnWßföÓTíu}ñÿ®¤i—Ëon8_ý¯
õ³ˆˆØüµrì9O¿|–ë¿«ö‡Õw”Ÿ¯Þ2*¿ÏŸvýPß§äØˆˆˆˆäØI}ô¶{3ªµ||õæ‘?í®>’_›Yê;j«îêqÓ.yøÖ{Í>ã¨ýâ”»ä«üÈ×F¹Ù’—'œ¯ýæœç¼ïèW
_¯ß1Y¯K5­sµ1rl9ÿ9~)ç?3æl«|³¹¾qò/ÍE²íâÔJ¾çÊ[Öé,=éÂ=o/hÿéŠMÏjŸK=kzjÿÑï~9X÷ã/Uõ¿èŸÞSóÑ‰­Uëu}˜½¨ãÂÆŸÛÿ–»Í
c¤©^çŒ'G´®~oyO­[:Yuìßó~Gþñãžêcš³­?íz?rÛg3ï|ã¼g²1rlùÌ=}3Q5³Í]ÖÕê#_]®÷Dï•Õ6×ÞmïŠ}ÝºÔgñJßÇ3º¿©Ü=÷ç}G¾Èº&u-Ö
V¬ê÷Î°Qgé5XýÆ1{ÿ0_ßýD³ÖÌWÍ[rï‰mÖèüòÏ÷ûÍ–ì›¹°ÃÝú›ÇGDlJjü¨¿ÛzvíèÂ•}>_·íµ¯6ì|Sª.†¾³×¿:ý²‘=”Õ½Híï­ñiþ9{íÀ­Sæ
\÷úCCS=_+ÇÖwÉé±t}þ×ó€ƒïèföïòÉ»zd\Ï®zeêÅúï¥Î±»^ukÃ÷¥Þ_}‡kŽ}ß5¾<<oé}+ÆLn£}j¬¾Z¢š+¾÷Ü+ç¨žÜGK×?™}ï¤ÆðŸ/~éõ?éÔË
ì“;ž“3k0»Ô¸Tã–Wû=i#Ä
ýŸrŽ¯]Ù°žqü`ñšù9b”úÙêw—uë~Ýíæ¹X6VŽ-¾³ønßkÔ}†¸™è7wÍpõ¥¹…¯Æ±•g^­Ï¿!cÎk«÷ýæ½]m•ÅkŽ¦¬:ªVJ¨Ê½5fNs®—¯æ=šóœ<P{Â
:Ÿ\•k¹nû„ìïˆ2F×ÏÅ«5VŽ-g=õRë¨×Û÷Æx÷‹4‡wõ¥ß1_Ý¿Z:zâšsê¾A~Û†œùô{§ÖŽòoÝ{ÐýßëóyêPýßô·%­{ešG»Ž£ßýÜŸSv£s>¹÷Èqës
ý®rÏ|òlDlêŽèñpÃXÐª{uÆßëµVn\h­Œ\k¬ì•›çe}õ¡!¿ûY}Oìzkþ-¡·5îPf¨qˆu–VŽ-µ®Àõ3Ê|­þ]ªÝïŽ·ÿè7Ù{Î¥Ê±uO@c†¨ç÷ÞŸþŒöÍ
®¸+éw»î›¸®9þÁ'ÌöI\:êó]ÇSælµõ©½R4Ö¸ÝzÏrÕú¢mSß¹Aí­c
""¶tÉ±Ã|èæÎÎgý’¨ñQ¡ã”[ÇÐºšüu×q<=®ª}ªSoó|¢lÌ[cÿ“{k>ñ½>­¶úÈ5NŽ­9£Ö6…æÏ®ãé=²Ú%ñ‡]‡«Òº§’«ÖÛjŽgßRk{}×mÜ¹ZcæØò‹µ
ÛÆûŽ¯uÌVû\ãäØzDyqèý«ÐõTšßêï‚ÕŸ¥òl½ž¸÷’ò
É±µÊ•á‡ªkQ÷¢¬sAD,7u¿TÏZç¢Ô8F÷Ô»Ê?o?¸Éu}WgF9´Öª†~ýÎ}G¾ÐókÖ¹D’ckŒ©œ9ÿgôÑ¿]ó¹êsr½^e›ÙŸ)vŽ­q€kÉ8ê5hl÷
y/ýü/ë~võùÙêÍ#­öqýu=ýÑ]ÇK²·Î_¯;ê9¼uŸI÷Ü!""6gÉ±mµF
l.We*ª¡kÛ§•c+Ÿu­“xjýŸâŽÇsmÌ[Î>ÚYÃP~»i÷«}®!9ö7Ü™Ñ|/4¿Îê:^±rl©ó[5vÊEÖkQãm­Ù²Ž™†qçjck³/“×œ-Î\/$ÇÖºã†õð
1çÿ!9¶²Ü¸×µ¥Ö|²v.*ÇVæ¢{IÖ9„š¿Æ±œ:ðÙVqÖ_[j,<ºÏ
ó¸QZ9vZãW­%VMë||†äØróÄ9×¸~®fÁòÖ1rUúûc;•ûýXÌ[õAâ¬¿¶üaç¡}ƒ:t7›ëáùKïwõ¥1T¡¯/_­ñvKcœ¸sÍç´>ÄzOâ¨ç!""6gÉ±
£×gpdÛBT>¬ºÖ9¸ôåØª•UK#©_¯ßýVÒµc«††öÕsƒÆ«qÖY9öôÇG´JzÏÃu¼bæØR¯?Iðü÷7Í¬Ð2î\¦±slõ,Ç¤Ç†›í³Z9¶²h_F`iåØz^Øê
#©ßoÞ·(é|Í—cëUYH¾ªk"bc[ñâkç¥}ßQ*ëÔXÇ:¾OßwÔ¢'œWW±¦¿uü8þr°ö‡¸õ»²†æØúîr­#Ö½äÐ1FCŽ¹FþºàbåØZûn½—IŒ;ÏQ}p___û
«}?^V9Üuœ¸ûÀ¿5øùVz¾Ìz/’XÈØ±9KŽíWã)3ÃÞSó‘öS¨g‡w}°a/>=Ç®ñ¸jFµOºÖÙ—c‡¨úª‡«pÚÍU³Ù¥öˆ´ÎËecçØrç´y7û^Wî³¬–¾
ûý‘þPèý×ñ¢rl}Žª¿¡uÐšƒhÏ&©gP•íé9âZ
ZïóH»{Ì×îSµ.­chÞûÍÆÓu^Z+¬óÔ&ýí¤=F­>²Æ«•CŽ=å±gZùÎáÈ{+°ÚgÊ±U÷<îì\£rlí1eµWw]{ZK§ý¸ô·P5HÔV{rYë¼4wLr¯Ì—c[ê|
T¿R¿Cª¯Úž!5˜ô3VæˆØ˜jLjeØú[öý–}ï«&³ÆRãVþþ}â#O›çáÒ—c§¹n<WÕö²ÎÉehŽ-•7»~6´>…kM·¾Ïõ|_îÏ#ÇVýqë=Ô¹ho
Õ*Ì^+ª‘¨µ3V[Ís4Ÿ²Î#ë·÷Ísõ£ïk«m¨Ú7Ä7^zë‰çƒïÑh½¿5¶Ñ8^ã”Õã¦]¢ßKÝÒ=&…µD{´Gµ×~Öy
""¶4É±ÝêYÿÈñÙžº/UØÊ]ôß•/içëëÄÖý«¬~ò›ck^¢1”jæºúxû} ë-£rœ¤¹s9äØª
ã{]-Û0ÄjŸÕ—ckÍõXºŽ—›c+gS½Ý#éËÝæ¹fÕ>“ÿç³õŽµ5wµúq©s‰|]{j>Òõ¯9ƒÕ—rOå Víå¸sµrÈ±ê´{æL§_o½Õ>«/Ç6ï·èËfUç=êÚÑÜ6$
×Õsºç•­l{sn[«Ÿ|ãäØºg§ûMc{?žqíuÚëú;öÄ´žÖ)ë¼Cý=ŽZªûÆz®$ê{YcÝoŽÛh r’{àqŸÒ={eíÊ
µßdß¶Ô?ëß)OµîA†|Gå'ÇÖÏº¾ãõÝlí—®Z`®g‡\uIÒÎ±•©F}'+;Ö8/ªþ™2j«–¹æS÷\y‹y>Rs+_?zFÖj¢ïÞüéqöç¡û éÔË»ÖIï©Ö{‡ìšÝ7;ê
wmáãÏµúADDlI’c»Ý7saßxâÏ;ªvä¯‘°ÔX?*Y÷ê[—Z}äšckÝõ¤ÃÌþ²*ïÊÄ’ì›S9¶Æ¥¾µ>qÎÃ—cûÔ|Mk.TO²û5íÏè«wÛ»2Bå¼ºÞ\ÇS}<åt
IÞ÷|u,_Íå”!YóçzÎäÛ“Gj=xè¼%WÝÓÑ5ëë7î\­rl©Ú<¾ó}Ÿ|9¶×}G¾ÐüRïg¿›Î|¶ºÇµwü+Ðš1×³×ú½ùËŽªm¾þ•
Ç½§gp}¹¸þ}œu[2$ÇÖu¯ybh-rýœ2÷¨>ãÔƒAD,…ú{µžZë?ã|×ë;2jß?=geõ‘ohŽ­{ÚóŸ{¶r^«O=¤{Â¾¾ôÜšÕ‡ëµ»úråØR¹³ëçs÷it©{§ùm|ûD
¦™c+_ªƒ§ïÀ÷>«ö„÷í›(Í]ÖÕêC6äúžóúàý5ZíCôýŽXŸUî9þ°óÐWšCÅÝC^ª–¸ož¨û¡ãDDÄ–
9öïõí.5n‰›agU»Óãì#ÎqÏÁÚâÔ@³rl­ÿÖš«—ºïïëwûÔù7Zíó-‡[~¿ùÀ×yè³ÍâBslÕXHkÝHšFÕ·˜õôÈXãî¨z"Z7úžúôõw®V.9vTÝ™ºõ
7ÛËÐ[õd”O‡®+ò©ZB¾cT¿»¬›ÕÞ§²lß°OWV>oµÏ5*ÇÖ1ô¾ÇùÛškÔ5·†&"b±ue¢Y•aÇÉ%³êï§òj_¿q3;+ÇV†©ïž¸ß_ƒïèæ½·®1¶Õ>ß¸9¶oOç¨ñ½
ÆI®g?µþÜõóiæØ¾=¥î[í]êþ²ãÐ.WŸú>Öf«ypÎâÎÎ÷þPýßâÜ‡q©gÿ\}ë³{èæÎf{©õ)®>”aÇ©žïÀ;î÷®¹Ñï¶Õ±¥HŽý{}ã'qBÇ`>G?00ã
Ëo*'Î¼ÚjŸ5*ÇÖ:Ø¤Y»Ô¸Ú·¦âë
;¦Zíó-—ûƒ%kùÞ3­öÒÌ±÷Ô|4ë©—bÍéJ­j"¸Î]ko¬¶YîõxÖÔê^O’¹r¾¾÷8î\­\rlÕP÷Ghv+ÇÖO?“Æû/}µ•´F»ÐcøžyÑßÇ8k²}9¶Öæúƒ
rß?g)¯DÄ(ý{å»©>D!ë9ê	ï=ò¹«o­mµÚç•c:~Ú%tœ—5nŽ-U§ÎÕFu,\?¯{
ù?•÷¦•cG­×ùbÍŽ×­öQê~‚¯®Í'Ë7=cµ—Qû=šçúòûÐ:êª‘æ»_RÈþ§Y}5Oô|­Õ±¥HŽ}¦¿ÖŸp?Ï–ä¹D—Zoèê_™‘Õ6«/ÇNkïZˆýG¿±Úæ[.9¶Ö
’»ÎCªæ†Õ^FåØÚ‹ÅªƒXnzcæU®óÃËÓæÞäêCó/­u±Ú‡è{ŸãÌÕd¹äØQ÷žTóÂj/£rlÍq¿³»ÙG¨ª…ã;ÖÔÏ<WÓú4_=Hýý±ÚgõåØZ‡mµ
qÎÓ/{kuêÞ„Õ±F=o¥=w­ö–QãÜ3ôåØWXm-•¡úÎ1ô~qÖ$9¶òg×Z_]×s‚QÏ$¥•c»ö•”Ê¶µ®ÜjoéÛ;RëBÏÓ·ßcÜû&¹êþ»/ƒÖÍj/7¾þö®ö
/Û0Ôj¢®ßØ(ô½CDDlî’cŸiTÖTèZì¬ª7á;†jüYí£Î3­l8*û‹»³\rlíkä{M¡ãW_Ž½çíí­¶å¢o.ª˜VÛ¬¾uºiÖZð}VqÇñå’ckžï;mSæ\oµ—¾
[ó½¸¿—–Õï-ïé:–j#YmC­šûþ=Î÷dOÝ—VÛ¬ÅÎ±­Õé~Î7Î±ˆˆÅôøªÍ/¹þN’ûåõ¬^í¢UYí³úrì¸9³OßZ”ÐïÙ¬Irl©ú-®vËGOº0÷ç|s¨:ciåØ¾
ÚÎ¯[mCÔšeßzï5¯¼y‰Õ^Fí÷˜dßÎ¨>u]‡ÖÂÓz¡ßµ¯ªÿg’=O}úžMëw±©KŽ}¦¾uÈóYmãèÚ›\j­¬ÕV;ÇÖ~®þeœ±²,—{é¨7¼µ~gy1¨ˆ/ÇÖ
ÜÂj[.zíè~Žï}|û‰ÂŸ©Ìê;FÜë¯\rlÍ»|çZÓÅ—c§5÷ÌÕWËß·'iõ„ï=Ñ”V{Yì[~´|ã0×1TsÄj‹ˆXlõ,¡oiÜ}Ä£ÔžÀ®cœÜ[ó‰Õ6k±slß¾”q÷
tHšcûîY++Í­ùíÊ»µtTßiäØÚ?Ò×GèšŽ}÷UBëFí÷¨Ú
V{—ßnÚ=ÇÕŸê][m¥oü«~­¶q\ðì8ç¸uÿ¬Å‰ê–#""67É±ÏÔ·`hÎª¯†^h]ºB³HK=Wèê_†Ž•³6…;tÃrÏ±ï¹ò–ÌÀÛïk˜G©N÷ª±S.Òó£Ú³§®bMÕ>9
±ýÀºB>ß<JÏ‹R3ß´®?rìøª>©ï\'>ò´Ù>T­ò­u®ñê¹V{YŠ;ª¶yš×<"bõ,Ÿïo”jmXíCº÷ºµØ9¶/?û=™4Ç–¾,=û}y¨µ?x9¶/#Õúé¸{
kFYñâkç¹Ž£½C×>ûöÑÐ=›¸Ï éútÕ|Ñ^/¡ïÝú×§;Ç`«ÇMZcªï÷ìó5[ÇXm[‚äØgªñ•kì qŸÕ6Ž¾ÚGÇj+‹cë™@Wÿ2t¼—µ\rlÕ
ö½¦Ð5(å’ck®¡5óºŽŽ½¿að‰­û—Ÿªª;é{}!†~µWöuµ×ÞVÛ8úÎ3îõW.9v1ëŠÄŸ[FÕWÒ~_Vû8új`†®·*EŽU*­zSˆˆIÕ}?×ß'ÕÙµÚÆQÙ¡¯^Dèó
XÅÎ±}5±â~O’cOzl¸³­jR(Ãu‹µŽÆê7[÷Í]íµ¸Õ6ŽQÏî…Þ[ÑšWö,U#ÄjŸ«¯f·ÖwXm³úÖ i?«m}uÞÙëñWÉ±3j ¢2C«}£öã
YcPì[úÎ/t¬œµ\rle…¾×Tè>¥È±5÷yãá¡™–®òô<êÏ¾×’ÔÐÏCÏ¸ÚÇ#ZúÎ3îõW.9v1÷yLû½÷­?™¿ÇÕw_$´Öz)rl_ž!Cï!"ËCs—uuý}J;›”
®úÀ2ô~l±slýíwõ÷{²[êÞ¾«ýÊ±S.Òókùÿ~úãö}€4rl}·ºÚÇ©q¢Ö[¸^§­å'}ãî8µ<4~Ö:!W?ã|ÂlŸÕWWüøÊÊZS’–ÊÖ]Ç
§#""6wÉ±S{«¸Æ 2ôyÉP£j„‹;¾¼¿æQßk
ÝŸ½±rìÙCGµöŸÓ2ôóðÍÍBkc„ê;Ï¸×_¹äØ‹^œà|ÆVjïM«½,UŽí[·”öš{é»¿z=–"Ç–…~vˆˆÅÒWKã“å›ž±ÚÆµÐ´Ø9öîéïÝæê?î÷d¡9¶oOm×úâÐ=x
ÒÈ±}cÉÐûqTÝt×±VŒ™ÜÆj›Uã_ßû:v÷Í™´g¹Õ6W_´RúÌ.""bs—û7£ÖK¦]µï¼Ç
Ù‡›;¾¾z…§ÕÿÍj›µÔ9¶ê»|¾zË(ßg‘¦¡Ÿ‡Æý®öªÃmµ£ï<ã^å’cïñÞí¾óÞõA³½,UŽíË†uý[mãªù¬ëX¡YA©rlß³ôi×œBDŒ«ol¢VÛ¸új+|¶z
óH«­,vŽÖ÷d¡9¶Ö
k/`Wù†ÞM#Çöí¨ç°¬¶q=±µj½ëXqö‹Öºnß9kßQ«½ô­oŽ³j×«nõŽKKeèµ‡ˆˆØÜ%ÇþÍ¨Ûj×¨çÔCê¬‘cÇ÷Ôþú?¹ÎCµ¥­¶YK™ck]þ;íó}.µ_
ræo*wÏýxÙ†¡Õï.ë¦µµÚƒfáãÏ4`XFÿ\Èçá›O„ÖÆÕ÷ã^å’cûÖ°é¹ÛZB2­ù¹¥ÖÕ¹ŽóõúÝoYmãê›—‡Î×J•c—rîˆGßåiÿ”GÞ[ñ€ëX¡÷9[
JŽ-—žt¡«\•u‡î¯XÌ;­÷?Wß˜YßÛVÛ\÷¼½ ½óuï©ûÒÚ3RëA46Îo«{ÓÝ¯»Ý<vÖ¨y[©Œsí!""6gÉ±sâ#O—EŽmíW.É±ã©õ®¾×£9™Õ>k©rl­û8=×Û
ì;ç¬Ê¬Ì^ÔQÏ]¼ý>³_Yèµã›iÏI«m}¯9îõW9¶æY¿¬ûÙý¾ÜdµÏšÖüÜÒWƒ§9¶Ö3»Ž:_kì;íß}DÄ¸êû»e¡Ïë´¤[ÏržÚôW?Y•u[ýd
M#Çöí›˜ÖûŸkZ9vÔ~Úo(ªíšWÞt®ÝÐsÖqs%ÇFDD,É±3j=vèZ‰P£ÆCÔIßõ¯OwÎk¤ö•·Úg-UŽ]5÷ý{|ç+¿Ù¸sú+}7ûqYèµã«+²}êü­¶qô½ö¸
×_9äØÚ'Öw¡ÏÅÊ´æç–…æq\:êó]Ç ¯•*Çþ¥ªþ¯®ãÌ>:èypDÄb©ýKñwPúöæ
½ÏÙ’rl©šk®~úÚô›8uÓÈ±Ëa=v’ýT|}Yõl|÷xBÖå5o{úîÞ™¾m;ÝÞmÃ>cDDÄæ.9öoFeMªgmµãÐÎxõä]=Ìö…f‘!úÎ/t¬œµrìw>à:íÙ
ZÓA–"Ç~èæÎÞ=Þµ¥ÐuÏ…^;'¶Xãj¯&VÛ8ºŽ!ã^åc×V¬êç;í/kµÏšÖüÜÒWË[Ÿ½Õ6®¾9~èþK¥È±ï¹ò–‚žŸAD,¦¾±IœçÍBõÕÇÖ^“V[ÙÒrl=_ç
{+N}fYÌ[÷”­¶qõí®½8­¶ù¾õÄó­\}i¼ì{í_¹Ú„Žws}à†;š·!""bz’cÿ¦êûÆ(#z<l¶ãøŸðKc^«}¡Ydˆ¾ó+gmì[9“ïµÄ}®°9öÆ×ß¾
Âw¾«^™z±ÕÞ²Ðkç‹5;^wµWýg«m}ïAÜë¯±slÕfô­å
Íj³¦5?·ôí½¨Z”VÛ¸j2×±¾Ý¸ožÕV–"ÇÒ©—÷zxÇýf{DÄbúéÊÊç]ŸB³å8š™·´[ê¹«ü~~9XûCÈx?×4rl_¶œö3uòäÞ#Ÿ»ŽµlÔä¬¶ùê¹XA\ýi
ÜìjstáÊ>®ŸO:–öí÷ÌýlDDÄÒJŽý›#¹ö‘‹^œpžÕ>ŽÃ¹Ž£q­ÕVšE†èê_†Ž•³6fŽ­ºÄ¾ýÒeH
—\K‘cëÙ\÷û^G9ÊB¯=êjÿÓî£ZmãèûÌâ^c×,XÙËwü8u1eZósËiƒžs®{*Æ{öõ†S]ÇQn«­,EŽ=çé—ÏrãÔ¡ú¿Y{L!"Û}³+îrýúaç¡=VÛ
¸j_B×±*'ÍºÆj+[bŽ­¾ò3PíÁmµË7Û·!í{ª—â;W1¬ö.]÷¤ž¹ÌÿY=G¥g.÷ùþÞîvõmæ±\ú®ý¥£'ÆÎå1¹äØgê_+‹²ÚÆÑ—í†ÖŸ-4‹ÑÕ¿
+gmÌÛ·¿Kœ÷:×RäØ¾g>}ëMâZèµ£{:¾÷T5Q¬ö¡úŽ÷úkÌûå^zkÄèsŽSS¦5?·Œz6EûáZíãxjýŸ\ÇÑï®ÕV–"ÇöC5i­¶ˆˆÅÖ—oêû'î÷L”Z?ì
Ûo/4›l‰9¶|©û£™I†ýË$Yj9öþY‹;ºÚÿ´»úˆÕ6ŽÏuíçGhßF«½Ëþíºx¯¿Ñ}ñ³¾÷ª~Ñê‡­ãøôÝøhùÆaV[DDDLOrì3ý`ñš®1ŠžÃ³ÚÆñäÞšO\Ç
98gqg«­,4‹ÑÕ¿+gm¬[sßúzƒ“ÔŠ)EŽí{ßCçˆ–…^;QµÝ“>«éÒwŒ¸×_cåØ µ=ÏÀÊÐœ6×´æç!úî§$YCæSÏCøÞŸÐßÏbçØQÏ2§ù^
"&ux×½KGõzÌlªîcúŽz»¥æØi˜FŽ5&J’­ûôí¯®ZáVÛ(UÃÎÕoþ3\ªMæú¹8{’äëÛÏ#î^;ˆˆˆX˜äØg:ëé‘­}ã»Áwt3Û‡èÛwD†®u,4‹ÑwŽ¡cå¬
‘cë=ö­ó”5–÷°úpYì»ûu·{ßw}æVûÓ¸vNí?ú»ƒ›Òª³à{â^‘c+ÃþËŽC»|ÇU­›$ïSZóó}{y¹žßMªïaÍs•[íe±sì)=ã­±šµ#"S}Ÿø
î=î›¹°ƒÕ>T\Çˆ³–—;¹iäØ¾×%ß{.±¬ü®rï×1¾X»m¼Õ6Jß~ª’­7®}+\?Sh}>}çûÞ»%/OH}ŸLDDDtKŽ}¦i,ä£$Í>ó­«XÓß9;=6ÍnÒÈ
"-}cµÐ±rÖRçØ3žÑÚ·¯^ƒ{ê¾Lºæ¤Ø9¶ô·î±XmCLãÚñÍeå¼á£Ï²ÚG©ùøêqÓ¼õ`â^¥Î±ŸêÔ;óÃ®ÃU¾cê¤ëÒšŸ‡8sÈ‹Þ{zÚ§Öjo©gÝ}÷C>X²v
Õ>k1sì_ëëï_îê?Í<±PµÕù7ûô˜'tl¥ê
ë£ë‡æ.ëjµÏJŽÜ4rlybÛ5®>B÷W¶|ò®Þúïœð«}”QÏHeëTïy{Aû¨ÿ^ˆ¾½+u/'Í>ˆˆˆè—û÷úrWíÑ¢{üVû(õ½olgFiéê_Æ+ËRåØÊ
¦}™Ö¿>ÃCõÑ=ùÊRäØ¾5UUsß¿Çjk©ç«ß]Ö­ÐÏcH§^ÞëCëàU_ÙêÃå Ý3ßnÚ5+ê3Œ{ý•*ÇÖÜjíøiôígŸµyTZóóu­øžiÐ8Ézò\}ÏçÊ89y1s
lÕÉñãÊ±S.²Ú#"–ÊWâý^NãïUÔßì8{f“c'7­;jï˜q}›í-½¿a°ó½+`Å\}ÏrilâË¹µ¾%»^»·M}çß{w`ö¢ŽVû¤ö½±S&óGDDl’cÿ^et¾¬ù
Äöë’Ž#ÔNY¡«_íÅ'û#ÇþM½¯ë_~YT‘¬/¾vžÕ_”¥È±}5ý4wJzíIÍ3}óÇ$ŸÇçë¶½æëKëUâÌ…´ÐÇË6õí‰˜kÜë¯Ø9¶æLóŸs¶jè[ç~táÊ>VQ¦
5?5j¾¶sÚ¼›­ö>Ÿ¿ï!oíz­¶ÚçZ¬û­ÁÏ·ò£Ö‘³î
ËIÝ[Ôs"®¿YZGto=©ºz¾gU?ÂjŸ+9vrÓÊ±UÃÎ÷Üâ;j2ÖŒªÅU³`e/«}ˆªÅî/ú>ÿ´ž©UÝ¸¨g>¿ôzAëÍ]Îzê¥ÖºîâÜ/BDDlÎ’c»ýhéú'}ce
™q÷óÐ˜ð«
;ßôõyxþÒû­>rmé9vkïÈL|D+­ùÐþ*¾sÍªûªUaõkYŠ{Ó3¯ò½]—q×Áö»©S¦ú½å=­Œ8îç¡çF}9_Ö¯×ï˜<ÿ¹±g¼ý¾ÌýWµkh§ß‡o½7óúCC3ªÛ
’ÿæ÷ú+FŽ­ó‡‡f´öæäÞ#Ç­s–ÇÞ_;0îg—oZóóPê,yjÈf\iõ‘ïÓw÷ö>s
õ¾Z}äêË±¿Ý´{Ž®Q«½KÝ—ˆº¶¾0þ\«DÄRµÇ‹òIepVùªj&øúsÏZ’c'7­[jŸb__ZO‘ä^­¾ß9Xûƒ«O=«VÈ½”|UgÛuß:¤43àÊ‰3¯ö½wR÷ÑãÎ
]¾ÚïÉ3žQLó5 ""6eÉ±Ýj<è«(µfPûÃ[ýHíÿÃÎCû¼cžõš›CŽýÓî£N0,åì¡£Zk µÆŒÊ«>_½e”æS¾qªKåQ…®ÃÎZŠ[µk¢^ŸÆ´Z¿lõ£ç ”³FÖ
Ï1Éµ£Óê7×8Ÿ›Ï¸×_TŽýÎ°QgE]ºW¢ÌRóâ}³+îútÅ¦gõ>Yù}¾ªåRh†-ÓšŸÇQïQÔk«­XÕ¯çuÌ~ôúUS%êzÔ})«Ÿ|£j
ézÓ½­êÛ¶“y~ÊÐ¿\·}BÔëýjÝö‰Ö9!"6–ßlÜ9Ý÷÷KcQíá`õ‘udÏ™“{k>ñõ÷ñ²ÊáVù’c'7Í[9õéñt½¯?]Gªeaõ“Uã¥¨yÓö©óo´úˆcÔºï|ã>çe
©çðþmËþ¥‘ÇÜv`ÍÔÏ¶²úÊWóAÍY\5ÌÉ±•Û¯ÆHQ¹›þ›2å\Ê³÷Þõ¿C;?ÑÞÕÊP¢Æ9ÊÃ^îõ¨y.ù6‡»ž£×jfc¨¥È±¥¯¶`®§ç£{>X¼fÀÖ
)s®Sž,5OÐ¼òÇ=ÕÇ¬öù&¹v”ýE=»TÝ¯ðý·¸×_TŽ]lõ¬€Ö£[çjZóó¸Fíë)•MkÍ¿ælZkŸm×ýšö™Ñ}etj-`TIŸe¶jâgÕßkÝÓµ¥ú.ºÇ#µN^§O
¨=aöqº½žÇ¶Î
±±Tº¨:kz6K¯£öÑãáŒÆQÏq©~XÈ=Ì|É±“›fŽ-µ–>ê¾¼¾ÛwO÷V=Sçj¯<W÷¿X³uœ¯©Ì7õÉ¹jüéÛs1ßŠ¯¦þUÿv]¼ûMæª±ºêyO~ôÙL¯ëï
ø]?'i½“®[½QŸ96""â¯’cG«½q¬1JR•«¼÷\²ü“;Ú†yÚ»Ëº%ÉÅ¢,UŽ­÷8j
TRuÍù^CÒkGs“Ü=DÕßÔ^‰ê×÷3q¯¿ÆÊ±•—>zÛ½æùÅ1­ùy\õGÕC/T]ëIŸ7Í±UçgDÄÆRcÄç†tÿî»Ê=ó¯¬!õÏ§ÔþÙj§|3éžÙäØÉM;Ç–zN
Êú¼¥j¨éy@­•ÐøæûÍ–„<ï§ïÎ8ëºãµ‡GV­OR#%Ä†:iµ×¼ïÉéß»Óí¾óÕœ÷IŽˆˆø«äØ¶+ÆLn2ˆ£êÄéy}ëØ>É±ÝêsÒúÊÇïìnžWK•cK­ñ©ý
ªÆÚZ7S¬kGùsÜ1y®ÊIs×üø~.îzØRçØZÛ«ÚßÖy%1­ùy•e+ç°^\Øu¸*i†-K‘c+wÑÚ+ë\ËEíU[Èw²OKôœu|ŸäØÉ-FŽ-µWzußòÕ³Å¼ÿµßc
Ö¸ûÅU¯/jõ4%ÇFDDüUrì0µ×F’Z
.•ê™Më˜Q+‹ÌÕwþqÇÊ¥È±UûNs«n¡–2Ç–ªƒ]èu§¹‰²ýlþ[ÌkG{JVÍ[roTÄ\ußAÙ¨~¿òûòµ±Î!ßRäØúŒ´g¥ê	YçSˆiÍÏQó]Ý‡³Þ“Uo<îÞ
ùúrì[«ÖŸÜwô+ë¢ÔïŽökºçÊ[Ìó@D,75Ö,t‘«êkéØÓ<n”äØÉ-VŽ-­úÖqÕÞöIö«o¿Ç¬ZbõQ¨ºÏ¯1`Úkž²jÌõñ²
C“ÔñADDlŽ’c‡«,Cu^}{q[*SÑšÕ4jÄ3‹Ìê{qÇÊiæØ¿TÕÿòãÎÃT—\cFíÙ»m¼ó)ÄRçØRãVÕíˆ»VFkT”çß3)Åµ£k\k¿õûRW±¦¿žAÕœFç£}UÇ[
kÅz\ûûZÒ;Ü_ÿ'ëØù¦™ckŽ¢Là›ÊÝs•×k/ž´k‡D™Öü¼PuèÞpMZë |&ÝÿÈ¥/ÇVþ¬ëPûè>—uN¹êsÖ³ÓÅ¾/ˆXl5vÕßÃBî?ª~ÄŽisoJcüJŽÜbæØ
Rõ?´çIÜñf®šë¨VI{[‡µßãw•{XíÓTÏjŒ›ÆsúTçgÕØ)Å}±¹KŽ_ÕYSMÝ7×ûí©ùHcÂYO½Ô:ñVe›“û£h¶
ÕÕ¿Œû:ž¹§¯·/KíC4¼ëƒ ë|µŠu¬b«z®ó,Ví¿\•©)³Ó^s¾ëMu-U×bõ¸i—ô¿ång?¥¸v
Uu&\¯ï/;ª¶YmóÕgc]g>µG¨®?eÕ®ýyJ­ž_u§~Ç¬¶ÅP¿—ÊtÍEÕÉTÞ­ìbßìŠ»¢öKbTŽûsú5ÔÞeÊÑÞwä‹lXÕ©Ôµ¥¿ÕÊ½Kyo±êïµê
k-@ä¸5ï;·râÌ«Ó\º{ú{·é>h¾ÚëÎj¢rMWÿªhµÍUÏ
¹úÑ¾ÇVÛb©z.®s’…>Û”«Æ›úÕ÷¤uÈlæªüºXµ¨}*/×ÞÍ®÷¤X5Þ,õYhƒî‡Çyµ'¤Æ!j[cNDDÄr•»p•¯ªf™ÖŸ*SÒÿêÿßU;³-b•³)_Õõ¦qz6ë·
Ú5'=6Ü™c´|ã0«-6žºw¢õÿÙ|}lïÇ3ƒïèûÞWCslDDüUô<›2ê³uÔR©Þ8aÆ•3žÑºØuÚ°iøä]=2óŸs¶îèúÐ½àê÷–÷Ô?kÍÄäGŸÍøž­Ã_
Õï’îÓh
”2jýŽéùÜ…/Œ?WÏ¦i¬Dý2DDÄpÉ±±ÜÜ6eÎõ®lrãëo_aµÅ–%96""""""bËËMßsÏ…îŠÍOrlDDDDDDÄ–!96"–“o?1Â¹göVêxi[³=¶,É±
[†äØˆX.ö¾ñ®Ì©ýG¿qå’Usß¿Çj-OrlDDDDDDÄ–!96"&µçu2ÇWo©ý¢
Ý£æ©N½3?ì<´Ï•Iž<TÿÇÚw5ûÀ–'96""""""bË“ªõÓ9Yóß¿Ú°óMíÃ>²ç€L—Ëo6ÛË!z5d‘'«Žý»+”‡æ.ëjõƒ-SrlDDDDDDÄ–!96"&57Çv­¡
þËŽªm/Û0´ú½å=÷Í®¸K·TÆx|eåˆŸvýÐ×>ëO»«ºÖ›¯äØˆˆˆˆˆˆˆ-CrlDLjTŽ†§ö×ÿiðÝÌóÀ–+96""""""bË“ZÌû§ÝÕµC:ö4Ï[¶ä
Øˆˆˆˆˆˆˆ-CrlDLj1rlÕ#©Y°²W·«o3HŽˆˆˆˆˆˆØ2$ÇFÄ¤ªnõ±÷×üyOÍGV>myêÀ±SG®ì3´óæq³’c#""""""¶É±1
¾õÞÌôÇG´Ú6õ´·ã÷›÷.T¾}êPýß~—YWÕüaç¡=_¬Ù:n×Ûï¶{ãá¡™Î—Þh1ßUc§\ôÕ†oæ»lÔä¬¶ˆˆˆˆˆˆˆØt$ÇFDDDDDDDDDÄr–
ËYrlDDDDDDDDDD,gÉ±±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,gÉ±±œ%ÇFDDDDDDDDDÄr–
ËYrlDDDDDDDDDD,gÅY­[g.?§ """"""""""bÙ
Ð©¬¨¸ûóº#m,‡xÔ:E    €Î?ÿ™Ý«W>×ÊE]ÖÌ›{‹\ôæ´ËgÞÈ'†dztîœisá…Öa     ‘Ù½fÕ€ïŽÕþåËO>e"
@—^rIÆ_&ñ“šCoªXØéÁûî·N     rl    h*+ÇÎõ£C÷{d€u*ÐÂX>sæµ®çKõï­¶    P8äØ    ÐT(EŽõà¦
#.jÓÆ:%h!lxï½;]×‰þ½Õ ‡    š ¥Ì±å'ÕU^{åUÖiA€    qñåØ_P÷Ÿz¦²ØêÓ×:E
€¢rì¯êkÿgÔþâß|Pû¿­ÜÚåñ#‡¿¼äâ‹¬Sƒf96   @ãâË±?>tðÕ     ”DåØ¡Ïù]pþù™.:dF~<³sÅ²>_Ö×þÃÊ²ìØ6Õêš7äØ    96
4ÒÈ±óùÃyçe*¦N½ÔZ¯ýÂ ÁVWÐŒ!Ç   h\È±    ©PŒ;K¯»»d¾ª¯ý_¾þ?¬:°Ûêš/äØ    96    4Š™c‹'ì¹${>¶\È±   rl
h*;Çìß³ÊwŒ±Okeµ‡æ	96
‹;o¹53}ÌØs¶¾¿ø¾êm[&|°ïºÜ¯ÿ=¼uóøÊE]&½øRë7ÝluU2®¹òÊÌ/Œh­s«Ù¾uò‡÷oÓ9×íÙ9÷ê•Ìyõµó;¶»Íê&äØM‡³Î:+óP·î™÷&O
¹d×ªýŽìÜ6M×GÃ5²w×Âƒ›6ŒX3oî-Ú³è_lu
eFëÖ­3ë=?pPFã¾¹¯O¸@Î?þ¼g}¬a|ÛªUyÅ¨:Wþ9¿úÌ³­îïØ±aü’&¥È±g¾òÊy¾c¬œ=ëz«}!ÜzCÛÌÐþg¦Œ|ù¬ì{)Ç}ºUŸ{»6ìQYj²ûbìÝ'
3nØðVRÿü@—{2·µ½©áº-5m.¼°áø£†Íä¾OÓF9[ïŸÞÇ´!Ç
€4¹¨M›LÅ›o^vüHõ×¾±§ËOª«>˜ÿÆm´ÇKhÌžÍs=¸iÃóù?«qŸÆ¥õ{w/±Î3«òíap:6M%Ç®Ý½s®ë=½ù:ÿTBï­rß%Ó§_¥ŒWïq¶2àmK—t÷­©?ü
™V®ã­~ç›\?Ÿåú«®n˜w¨ïÜœYÇÖ9¬š3û†K.¾(ª‹ß¡{-;W,ëóU}í?­k#ë·Çjÿß£»¶ÏP¦Ö|÷Ý‰/r½'ú÷Qí4˜1nÜ¹z :§ÜìýÀÆõÏ.›1ãšsÏ=7ª
€fËÙçœÝÅÚ²iLTmæ¬_Ö×þ)”§™jì“›fUNéBc,}·Qwä¿Eï×õuÿ±ÃºaÞw¿³Ÿ¸”"ÇîzçÞcìY»zÕ>úõYjLôEÝÑ·>©:Ýß^uùåV÷‰
Ð9=Þ÷ÁÌöeK{…Ì«´?¦ÎIën´NHksŠ®E5OÑX×:/ý®ì]·f°^K’ñð‡úŸ‘‘ŸÏ/rGÿÞõ»eÜù
44.QN2ö7Æ:×ÚëxwïáûægÃZWóiÍá/¬óò©9A¡Ù{SÉ±OÏ‘þ/×yjýO>ºŸ±bÖÌë>¯;òWë=¬Ýµc–ãp
ë‰\?z,ü„ëçµî£v÷Ž9Öñ|çìâÂ.h˜†ŒÓ£Tf¬ùX¡ÄYƒ¢ßÉ‘OÉ;°¯Ò:?©9)
@KBß•S_uÖçµ5'­ïIŸÊµÂ:VÊ!]ÇÈÏ†íõ@FÏ7ZçæRY­Æ7…PŠ[5°}Çðã¢Ï_k‡?;Zógë}óùÍµÿ¥gO5öM­×¸k2«ÆŸÊkÓxFPcgÝç)dL¬
¹®Ý8è³¶úMjè|    š·i§5Vˆ£ÆØ…äÃVŽ­5 ªbGˆõûv/Ó:ž¤4§[cï“&]ç~F¡9vÎ#k(ZçìC¹óé9ÄÏV_¡jÜ¯¹„uÜ(BslÍtýXç”+96
´$®¼ìòŒÆpÖ÷c¨WšeZ9¶Æ¯Ê­s±ÔŽBöJ,EŽuŒ+—?hµ·hwÃ‰ï¸ü¼®æ­/Õ ù¤ºêCëXqýúƒºÿ>àQëðN”õkÝ¹òzë8¡jÜZë†
ÒDÏc}|ø`µ5NHâGUö&}Þ+*ÇÖºÝ/ëkÿa?Ž,¸Ã:'Í%ÇVî{zì]g½Wù&Í±uï`ý‚w;$Yb[Ÿì÷PFc~«Ÿ$®›??qu+Ç>ÿü?4¬·ÎÁ%96
´îºµ]F¹£õÝW­Í¾áê«­Ã{‰Ê±õŒUœúf–§ÇïGB³Ä|J‘cë}ôCã?«}ªq‘æ{™Uµ=4ÏHBÃØ³¾î?¬c$UÏÍZçÖ©FŸÕwµWRÈõGŽ
i¡Ì,$ÃV«ÚnÚOëQ+¦N½T{ä?Zý½ÕöØÁý[BÆ8ùørl/“äž–êSë‚“ÐrleÎzo­÷Ée’[khâ®7Î?g÷Ýu—™aëµª¶ô¦Š…²5öT+°jóÆ‘!ó"Õ\ñž@Q
9¶î#„üNù$Ç
€–€êû~Qwô¿[ß‹Û)—Îî)úûÙÑêI³l_Ž­}Y¬ã&1éx¤9vß®÷yñæ¨Ñ‰„TÎlYõßë÷íY±oýÚ!Úû]uCôÏªÕf­KVÛ{ïˆ·¼EcOëœþOßÿ¥(ÙkÒª‹ž
kÜ[vÈó ú½P&­¹Öj¨>·žM97µ±Îƒ
ÒBûÛøÆû+»öíK“EÏÏíY³ê±¨1†Ö—FvâÀ—cûÔ¸Pä/Œh­1Mvrý¯þ¿öK±êŸ³M4NËISÏ±O¿/­÷7Ê¸9ö§5‡?‹S·Ä¥oÜªyYT-­ã×yEÕ•Ô}Õ]·
æœú™¸ørl­© ™ÿDIŽ
Í}kõ}¨ñ­²NW}»‹/j“Ñ>.Vm:=S˜dÿd_Ž¥²vím­œrÜ°á­ä¬ñãÏÓ8ü³Úš£Újü›äû¿9ö;¯½~ïÛ··š;±òbÕÑø,ê³Óu¡=A5öò&‡¿­9¨Ÿ
Ó½__ÚkF÷´^Áµ¶Gíõß4>ÕÚißë‹“c«–ÈÑÛ§ûÎIãpSÔ^ïBó<åÚQÙ¿ÞË(T¿\}dý¤ºêW?ú÷¹?âÕW\yl
h>hÌ5¶ÑŠ8{d@&*›|ìÞVgšckÝíêwÞ¹é²?þÑê²aL7ÿ7ÚøúRvŸdýMSÏ±}êóÔ\Pï™æƒªÙ,öîÓ0T­=ý÷íË–ôtÏ—cG©µ)kæÍ½Es¸ìñ¤ö ×ø
]ó<ÕÒö»£î©hMÊå—^êlçBûÌë¹W_z?ãî³äË±}êšÔœlÕœÙ7èw6÷=ÑóÉzµF?ShMO
€r'ê{^Yb¯»»X]üg¢Öu'©9šc+Ô:kéì>ìQõ*ôœdd'J‘cûö>ÑsoIžÕÔs¤¾Z2³Zyj>çmY¼¸«ï}Ð8×êCDÍ-4îÍÃ³hl©ûŸÔú8·¯89¶2jß
9iìwÌ¨ß+ßïŠ>“8÷|¬{    ùh<å~Y_û÷8s€\zßs¯7ËÖ=vÅC±rlå{Ê4¯¸ì2««ß¡œÔ×¯ÆVû||9¶æ(ZƒQlC÷}
Í±õ¼£Ö¯²O§Í±õY*‹íØ.qÙéîïØÑ{Íh.•ôõ¨Þˆ¯ßÊŠŠ»­ö¹„æØºvô³·ÞÐÖê
 E ñ©ï{óø‘êo“ì{xÇÍ·d>«­ù‹o|wlbåØêsÿ†uÃ¬çóÑý|_]=­¶ÚçSìû‘=½ýÇ;eÑútWÊWU/=)¾5šÓ„Œ}uò4O±ÚF¡yÓˆÁëùƒ/Ô_hŽ­kÖ
·~Zs 8ó±\Úßx“·þ÷[£ÇœcµÏBŽ
qQM:×øA&©•‹êzøú~aÐ`«ù¿ˆÊ±•³j=jR´fÀ·OdvÂ8ørìR:ß°rl×µ¦$îº!9¶žŸŒ;GôQ½mË×1ôYÇY‡íB5k\}ëy€8Ïó†äØ6®ö¦k•»
h¶ÔïÝ½È÷=Ÿäyº,ºgìÛWCkW­ö¹DåØªC¬|7)Qû@Ç‹ˆbæØZ7¿–8«òÕ¸¾PWŽ¯qŸ!ÍGkÃ}ç«uQmuïÄ÷>^yÙåQMƒÑùiMÅÄ/FžKÕºvêƒ'Í°
³LùòY®¾µ^Éj›…
ââ«wt×öV[|u¨ëöìZ`µÏâË±õÌ¨ÆÇ…²gíêA®þUsÑj›OsÈ±Usãú«’Ï]DåØZÏñúsÏ6˜ÎAóß:¥·Ç†­_‰BýûêÎ›ðÆ…Vû,Q9¶æá…ÞG
hŽ¨N¯ïûSÙšÕÞbÑ›Ó.wõ·æœ/ÇÖ=êBÇ¯QÏÅ­ßW¬[kE¢ê2'©Õ"|ãöÐÚ£ŸzÚù~èµDµÐ³—³öj‰jW,´6Äu>š„¬-·P-ß3½¡ëRÈ±
¾ñTvœzÎwŒÐý8|9vZ5§_{ö¹V®þ5_±ÚæÓÔsìBž1ŒÂ—ckÍË-×ß`5Å‚I“.rK5ãÔì‹Â7‡ŠsMúÆîÚS2­u;
ÍßëèúþT^¨l­P”ñiÌà:Fœ¬Ô—c‡ŽÕ¢ÐëôÕu˜ýê«±BòbäØªõµ]ã¿$YªêE»ÖË+OMÒŸ­yvÕFÔq£jyûòo›·QÙ¼xÑ=®ó±Ö•ÇAû¹Ž¡}=­¶‚
â µ£®±ƒ2Î´²LÕ¥ð³C×à;ÇV-oWÿ2î³™M=Ç¾ó–[­¦‰ðåØIj·Xh=¹ëXÚËÜjŠoÍÍ »
ÄGÏã¹¾?µ²Õ6”­KÞïæ:†ö ¶Úf)fŽ-´¯³«Õx¶Úæ’FŽ­ñ~çöí3ÊHk¶oìëOª†uœuí¹hïoWŸkæ¾s³Õ6¾uäz>^|ü
çû¨u1…Ö´‹‹æq®±¾òù´Ötßx8t|ÏX   âpdÇ¶©®±ƒÖšZmãpz<;±1N±slÕBtõ/ÓÊ±µ†CsŸb;¨O_ëh®9¶æQ¾ýl4¿H­ÇñÕÏó1v
ˆÇ×\ë³©ÖFZ¨6‡ï8µic5o Ø9ö¡Í›F¹úß¹rùƒVÛ\¢rìÓcËƒÚ¿Ä¥Æ‹kŸq_=·|©þZ{&eÿÆõÃ]ýFåËIðíõÙE­‹Y7~X¡”ðÕÞI{Ü­|Þu]
ûV[ÁX   â ç/]c‡4Ÿ7ïMžr‰ë8ªÍmµÅÎ±£ÆïiåØikZ4×[óßgZÇ&ß:¨µóçµ³Ú Æî
ñÐ>á®ïNÝ[N£¦HÕ¯ö'´5„bçØ¾5ã‹Zms‰§©öà¾äâ‹¬Ó‰Ä5wÑž%i~öbÖøñç¹^ƒö@÷µQ]ßZ ¹bÖÌë¢ê’¤‰ïüõï­¶qqGkî­v‚±0
„5>/t¯ï|†xÔy,õ¬¶¢Ø9¶ž½ó½äØéPªÛ;¿­¯û«m\v¯ZÑßu¬êm›_³Ú Æî
ñX9{Öõ®ïNí-aµËñ#ÕßºŽºgt±slÕqõ_n9öñ£Õßk¿œBQîê_cZÕISß=«fËá-•ã¢Þ‹ÏkkNVLz©ž-&¾ùˆÎßzíquÕ—Ö9 ÆÂ
ÊmmoòŽYõÌfšDí+RK¸Ø9¶ð9v:”*ÇÖ¾2®ãh?!«m\N™òG×±BçÒŒÝ
âágÜ´áy«m\êöìZà:Ö–Å‹»ZmE±slÕ„võ_.9¶òÍQC†fÒZ+­½#­c[kŒÖëî.ÁçøYmÍûÖ¯¢5Ò}îíš¹àüó£ºŽEýÞÝ‹¬ã[ëca
¥ßýÝ¼ã,­ÕN“k¯¼Ê{¬Ü”;}škŽí[›¤ñ¼Õ6.“_y–ëXzo­¶‚±;
@<jwí˜åúîÔúY«m\ömX7Ôu¬ÐÌ¼Ø9¶olU.9¶ÔÚcëø¡<ýð#E;ÏPCÞÛßëhõãSë.”më³-¤æ·ïY‚Rj£`,
¡ø²áÐqG¢ÆÇ!{òc§OsÍ±}ãaÍ{­¶qýÔÓÞç[­¶‚±;  @<|ëL‹±ÞŽåËz»ŽutçöéV[Ñrìº½»î^½ò‘(ë÷íYák¯ýG>1Ä:…
ô¾ùŽS*CÞ[Õ+Ôûbõ¢ÖlkÏÉë¯ºÚ:ìøÆù¥Ô:GÁX   B‰Ú‡Ýj—¨ñ±2jrìôi®9ö¦Š…\Ç)FŽí›O±·
@qøèÐÁý®ïÎbäØ…Þo9vÈ¹ž{î¹™c÷oñõ¡}Uo£PÆ>=¬•ï¥2ô½U–=}ÌØs¾ª¯ý§ÕgˆÚSH×¸Þë¾¬¯ý‡Õg±µÎQ0
€PÊe=vÇvö´ƒ;}škŽ]èœ3¾ùë±
ŠÃû÷®s}w#Ç®\TÑ¥1EKÉ±Åå—^šù¼¶æg_?ºÇóu×[ÝDâw}V[ók/Â´| Ë=ÖižÁEmÚdÞ›<åíïè{oâøñáƒÕª×háç¯š3ûë5¦¥uŽ‚±0
„Òûž{½cVíž&Ú“Ûw¬7Ýl5'Ç.Í5ÇöíytìÀ¾J«m\¦s¶ëXŸ­>aµŒÝ
âá«]ŒïÎ=kWrëð–ÊqV[Ñ’rlq÷í·g´·£¯¯Ok¦\7)¾çàÊmŒíBë³UKQ9²jµhºï}²ÔûhíeäçèÙ+²]©a,
¡ÜxÍµeËqèÑ¹³÷X^pÕœ»4×{êË£œ{/†fËqX>sæµ®ci­˜ÕV0v
ˆGUåÆ]ßÊœ­¶q©Þ¶ù5×±v®\þ ÕV´´[<?pPF5±}ýÕîÞ9÷¬³Î²ºqòÄƒýœç©VÛrCïA—2“^|©õ¶¥Kºxpÿ¶8Ù¶ÚDõ¯ý"]í^{ö¹ uÒ¥‚±0
„rö9g§6fµð=øõuÿiµäØéÓ\sìáõ~–ÖÚ•¸Ü´áy×q4Ç¶Ú Æî
ñØ²xqW×wg1ž»òÕâ^2}º]Ø!Ó2sl1ÿ7Úøú“§Ç~ƒ­>\h¯Ïu1åŽ²íGzôÌh_ÇãG«¿zU/;ª¾ˆö"uµ[1kæuÞF ca
ˆÃñ#‡¿tT›Áj‡µóçµsGk¬¶‚;}škŽUÃ&=†rñ­uYôæ´Ë­¶‚±;  @<Þ5ÚYÓëëúºÿPí†´hÝºuFë-\Ç
Ív[jŽ-v®XÖÇ×§½‹ö8ô­õ.·z…¢kyÌÐ§[}Y_ûwß{øÎk¯{ÃûÍ‹Ýãj£|Û×¦1`,   qð­' Ý¿&åÕ®ãl_¶4hÐIŽ>Í5ÇÖ¸ßW›1j¼—¨9ß >}­æ
0v  ˆ‡îIû¾ok{“Õ<Õ|ð'´þ^KÎ±µ¶¸nÏ®¾~¥rZ«Ÿ|>>|ðˆ«¯ÊŠŠ»­¶M‘N·µÏhíµë5Ú¼i”¯ïYXÕ.IûùÄBð…w,_ÖÛj
-‰#^líãüWZÏç]}ÅÞ±ñs ´š7@Ž>Í5Ç¾z–õ{w/²Ú†2áù¼¿;¡órl  €x¨.žoôÌW^9ÏjJÅÔ©—ºŽ¡ñSèºï–œcí¯=
}}+Síw7«›3P^íêK5²µ^»9²oÃº¡®×µË W_íýLõLƒ¯]©Y7þm®s,F½{   hú¨®šïù¼´æznÐ7v ÍûÈ±Ó§9çØ¾û3RuGÒ@u8]ýkí‘Õ696
@|ŽìØ6Õõý©zÖVÛ”Sûj‡íY³ê1«}––žc»¾ª¯ý§¯ÕÍˆ36Sý__³_}5lbÑÄÐó„®×kÍ-ôß]íTWR÷ƒÊßžé‡·TŽ³Ú  @ËDû†»ÆŸ×Õüò‡ó
‹²/jÓ&£õ®þ÷oX7ÌjŸ…;}šsŽ­û#¾µZû7®nµ·xúáG¼×ËøáÏ„-ÒÊc
$aÔ¡Þïá‡ºu·š›èyA_ÿ¡µÃ9ö¯({öÕÆÊUµv;Õ-ÿ¬¶æ/®~”—Gí}XlB_C\¦{ŽëõZ{›jM’ï=_5gö QmKÅÔ—Gå:?­ã·Ú
@Ëdhÿ‡½cWíÑbµBkV|}÷èÜÙjþ/È±Ó§9çØbÛÒ%Ý}Ÿéó“?ª¨ŒÜ7Ò½Ÿ8ë[È±  â£ú¾ýï>©®ú
Îwq>úž?~¤ú[Wßú÷¡5E9öoLù²3¯ÌúÁþ=«TS;„ùo¼ÑÆ×Ï±ƒû·ºÇEï{îÍX¹±ÆoûÖ¯’VmÆ,ªäsÖµì[¯çq‡=ë2
Bïý®U+ú…^7º/ä;¿+/Ú6   Z ¾	2éýú÷ßzëJ_Ÿµ»wÌ±ÚçBŽ>Í=ÇV]@ßšlÕ´éÛõ>«‹ß¡±yÔžEqë ’c
$ÃW¿ZÜ´aDœ¼9‹ÚØ¸þY_¿“^|©µÕG.äØgâ÷dUò¹é>ÅgG«OøúÑ¼æú«®¶º
¢í5×dv¯^ùˆrÕÏkk~ŽúÙìëû¢îèWn¯µã…¢±§oÌ>nØpóÍšûúgM©ñð/Œ(ü$3¿®“W_ŸÕÖüçº‰ÚG)é
š?]ï¼Ó['[®_ðn‡Ðµ-Z#£ûð¾¾”-Þ|ÝõV7gÐrl=×±Ým™bº¤¹çØbÁ¤Iù>×¯êkÿ×È'†X]ü‹v7Üy¿G59ãÎWÈ±
’¡q©êQø¾—õL`èØU(/ŒÊ°“|Ï“cŸ‰2êêm[&øŽ%WÌšyÕÐ:Þ¨¹‹ê*çû™eéuw—†çJsë¡„æØY©þZ÷>’î?©ë×wMj²î\kÜ}×aVÝ?¸êòdkŸÿxñÅ
Yùñ£Õßçöçºñ=ÿ ÷¾[§NVs   h¡D­kÉŽÅfÞ—]æl¯uÇœãŒê'îšUÑrìR:nl	9¶Æîõ{w/Šz¿êöìœÿÌ£e\sÍ·t§rQEßÚn©¹D‡›nþý
c  $GãÃ¨,óÓšCŸê;>*ËÔS½ms}ýhÝjçöí½}ø
Çþ=o}|ø`µïx2tÝ»ÖëFõ#•¯j~¢µQk½5f|ð¾û3ËfÌ¸Æ·ÇgÜ;«j{¨ÞÝ“ýÊ„Ü[Ñ¹èš<ý>ñ½.ÍÛ¬~²hýo¿¢¬ÊŒ•Û?Þ÷ÁÌçŸÙŸæ|¯?÷|«C[6
Ñï†«¿8×ÍÚùóÚùÎKão­KQ^žÞKÝoX2}úUºÏT¬9   ”'ÛEÕ³Îõ³£5®Û»ká‘Û¦é­ì:«ÆpÖy¸
Ç7tÜØrlqù¥—z×yäªñ»æ-º¦åû÷®;=ïø¿Úýï¤õÉ± #ªnBÖÏëŽüUc\eÓF9[.zsÚåÚsü‹º£ÿnµõ™gÍú .È±Ýh/FÕÞðSc+í
i¡¹‹j~XŸ_Ö/ëkÿ‡êp×lß:Yí¤Æ|ÿùòØ\“æØù¯MÏ÷i"]º~¥j~kÝÄÑ]ÛgD­§Ç¨kBk‰gQÞ«uÖùIÝRy½7úÑûTµyãH½w!¿/2Îu£Z€Qû€fÕ|S
yµÔs®ùŸY±æ0   P¾hL¤ñŠ5ŽH¢2ìšw.È±Ã 7¶”[h¾tz¼û…õÞÅUãg­—I 96  @á¬~ç›¬ïì¤jübß9¶åªQÙ±Ö0ßqó-V7
Yv1?ÿ\ÓÈ±UkÙ/¹ø¢¨Óð¢gµ'¹uŒ4Œ{Ý¨žŒÕ§e±æ0   PÞh<øÞä)—„ÜQk ¦{ŽuÜ(È±Ã 7¶¤[¨nøá­›Ç[ï_¨z&áþŽ­ÃFBŽ
k¦5v•¿Žút²ÿrìh´ ê3Ð^Žz®.Õ‰Zã†µ»vÌŠ:­©¶ú(D­‰ÝÇ‡>kõc«u"î~êšz^ÅšÃ
@Ó K‡Õ¶ÆQ*7Ôþx…BŽnè|£¥åØY4'ªi©yíºùóo;ÿü?X‡2!Ç  H­7µö´±~ßîeío¼É:œ
9¶jG}ÇîßºO¢2^ÕÌ­Ÿ¢êhlªXØ)´>ºæOÛ—-í¥,×ê;ÔÏjk~TNŸ&ªƒýáÁýÛ¬c‡ªZ$µ»wÌÑ½‰à.²kë£jÞGY¬9   4-zv¾;£š
_ÔùoÖøAªv™ê»i—ÚŸdÍ¼¹·äûÎk¯¶(!Wÿ2d/ð\4~óõU CÇÙ‹§M»ÂÕ>tÝK\´.Ãu¼B×:%!»§“î³X5³j.ª}f|ûœ&Auµ]ïIÒzÛ
-ea#?žQ¦'ÓÏª°öâKÕ:Vmî|‡xÔjÄÔ—Gåê¿²¢ân«m.ªSáê'Ísõ‘ÝŸÇwü†×sz^aõ“‹Æîo¼0¢µê`‡Ô½ÎWµ¡µf¡Ï½]#÷Bµ•=«vè>Bù×
cõ¶-t-Ç­…=[¨÷WÏZç”ïWõµÿSk¨õ^»öaLŠöNß»nÍàÐÏNuÏ5¦/Ö   š.·µ½)óüÀA ë?´ÞA™›ê™Í?þ<Õn½¡­Õ@Y¡¹Æðã†
o¥çA³Y²öÒ>Pöz “æØ
JÃ5W^™Ñ[ß_|Ÿ2jí§g²´GœþY9¡ÖÚêžúeü£Õ4A´6Xã<é4gÙµjE¿}ë×Éîa¨œYã>íµøP·î™ÎO\=Í‘4‡ÒøRëƒmÙ4&»·¸þY{)êy<Í©”Ÿ‡®
AO“ë¯ººáêK*ÛÖ9éwDfÏOïáÈ'†”dÎ§û‡Ï7î\í‰™£/›1ãš)#_>k`ï> ¿ã
P~œ}ÖY™«Ï»±ì8ûœL‡‹®CDDDDDDDDDD,;É±±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,gÉ±
±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,gÉ±±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,gÉ±
±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,gÉ±±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,gÉ±
±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,gÉ±±œ%ÇFDDDDDDDDDÄr–ËYrlDDDDDDDDDD,g
É±±Ø®3¹Í±÷7nGõzÌ<?DDDDÄ¬].¿9³ð…ñçÆuþscÏž4`XFŽíýxfX—>™^×ßaKçæ‰s®ñÍú·ëb¶GDDÄÆ•‹í‡KÖ=þóáºÿ§1|÷™±g[ç‡ˆˆˆˆ˜µ
÷we¬1fOªÿÛ‰­Uë«ß]ÖmÆ“#Z+'·Î‹ã7wÍð}Nºï`µGDDÄÆ•‹-96""""6ÓÎ±ó=uàØ©ƒï,¾[Ç±ÎÓ•±iKŽÅ–›ŠÅÎ±³þRUÿ×Õ
ã¦]b¦'96""bÓ–‹-96""""6K•cgýtÅ¦g;_z£y^X¸äØˆˆˆM[rl,¶äØˆˆˆˆØT,uŽ-?_½eÔ]—\ož&96""bÓ–‹­/Çþqçá}ÛvÊSöÑADDDÄ
8FåØ•g^=¼ëƒŸ¯ô}<3iÀ°Ìì¡£Zëgë*Öô?¹÷Èq+Ç–ûfWÜeæþY‹;~µaç›.kßÕlˆˆˆ+96[_ŽýçíÕ;­¶ˆˆˆˆˆ¥4*ÇNú¬ß«ýžÌ|W¹g~TŽýSU
ý?_èÖßì±¥JŽÅ–›ŠÅÈ±³n2çº¨,[õE¬>[ªäØXlÉ±±©XÌ[îœ6ïf_ÿ'Õÿ£ûu·›}
"""¶DÉ±±Ø’c#"""bS±Ø9vÇKÛf~Ú}ôCß1Þ~bD+«DDDÄ–(9va>yW†}\6¼6ãò}3v80{QGýïúW§_6ë©—Zë¿[}”ÚGo»7£sÓ9ë|åö©óo¬xñµó´?MÚ{
¥7Õ»×õw4ìÓ³jì”‹ôþdß+íÙ³ð…ñçŽèñp¦ó¥7šýÛ×Þ‘Ùs@Ãu¨ó’3žÑZû ¾£›Ù¾¥Øï¦N
µ)ç?7öì%/O8_¿£z¯Þü|+ýûÞmï2û@DDl.v¿¦}fX—>ÿÚŸPÿ|ÿUíÌv©Î9wOE}·[m’Xì[îy{A{ß14î´ÚªöB×<¥ïg5¶Îî×®¼ßúyLfÿ[î>ã³×œ¡
æ5ˆˆˆ–äØñýÀÀLmÅª~'Ôžð?Ïpß‘/ªß]Ö-Í}[4ÖÈæª¹n|ýí+\?ÿð­÷f4&þqçáÖùžÜwô+í—®1¼u!6¥[ã÷Íç\óçí7YïSÃ{Uuìß¿X³uÜügÆ
œ]ª±¶î3(_×5øÃŽšÃÖ9þr°îÇ¯×ï˜¬zŒqï«Œë3Øy½÷Ü+çXmCì{c'gÿ;¦Í½Éjk©±¸î×|´tý“º¦­÷){íë½ÒïÊØÞ§~O±±ÔgíøiÔ¸%j«ïBÕhÖ
}|ÝÓ·úc~nšÕWGãž+oi¸ÿüñ²Êá¾ïò_ªêÿúåºít¾]¯ºÕ<‡K‘c¿úÐï1ê­~ØjW}–KGO¼@ïåÏ{j>ò~þ‡êÿ~bëþåšhM„Õo!v»ú¶ŒÆÐG®ìsbÛ
5³þî|NµOî=rü«
;ßÔQkÞ~ŸÙ·O]k®k0tŒüH»{œí‹åÀ;î7ÏÉRsÍÏ[zŸæ8zO}Ÿÿ{ªiì¬±~Z¿OˆˆˆiJŽ®Ö©|»i×,ß÷~ˆš;êÐÝ<–å„þO9Ç¾ùÙ°æ,ukú«Öžu
nùž:pìÔâ—^ÿƒu.–M!ÇÖ8úà;‹ïŽ×YjÜ§5ÑÖ±’ª1èŠ1“Ûè8Ö¹Dù—UÛ´¦<¤ö¢æ»®>>Z¾q˜Õ6DýN¹ú?u öß¬¶>•_oœ0ãÊÐì:ÊSû~§{P:Oë¸ˆˆˆåè
N½2Ê.ªªÿ§õ½—¯ÆGêY>ë8!úÖ	ägÃ=¯ëÐ°^YcQësýå`íÊ³­ó°,EŽ­5)¾c¤5Î’C;?i¸§Ÿ`. 5^×º
ë8q|®k¿_Ï©€q÷O»«(×V_ÖñrÕçç~7Ym¥>ëÜÒôë
;¦ZçäS÷ôümÒ1±îé÷Pó$ëXˆˆˆ¥’;L­ÑM:þËWc¶e£&_`3J+ÇÖ:R[4þ°ÎÇRcDë|¢,÷{T¯Ç2Zça½¡_Y9"íõZË¯üÙ:vumh]FÔq›ZŽýT§Þ™
vÚg½ö$ê÷É:>""b¹¨±à®·ßm§õµÖwœ¥Æ®ú,ô9%+ÇVÿ«ÇM»Dy´uNQj,VH„RäØQÇøhÙ†!V{K½~­©Nkþòùºm¯éþ‚uÜ(5>þ`ñšIî©D©õã¡Ï½¶”[
uóÒšßœÚô­ç¶Ž‰ˆˆX
É±£ÕxZë¬ï÷$êº¤ó¨û¡›;g¾ß¼o‘uü8².»œsl=3—Æü.ß¿ì8´+­º,z~²ç(5·‰:vSÊ±U%û6>µ^ß:DDÄrPyá7wN·¾ÛâZh>•cëyÅï7Xb
C¨¿[çã³9¶Æë¾cèY0«}”ýÛuÉ¨N‡õÅõäÞšOTWÃ:¾Kµ+ÖZ©1«u²¹çØš[êþEÚ÷ ÔŸö—±ŽˆˆXlÉ±ýjpìý
ƒ­ïu©ûÝßTîž«ÚmúßÐûßªql‡K_Ž­õ+§ö×ÿÉ:n\õ\§ÆÄÖy¹,×[5@BÆx¿TÕÿ¢y•>[©ã!k[”e?pÃæyD©úÖqrU½Ëàºí‡›OŽ­g¦C2ìS‡êÿ¦ëî»Ê=
ó¥þYŸ¯ÕN’c#"bSPvÚërÕºÜ¤Y¶/Çþ`ÉÚAqkˆ„¨ÚËÖ9¹,EŽ­ýÂ}ÇØôÆÌ«¬ö>kß5£¼ÙzoäéñÖŸµ×ŠjtèŸ­Ÿ—ê;îøV?zNI%ÇÎÎ]×´ú”k¾ª±°
êè…Ìm¤êÕ[çˆˆXLÉ±ýn›úÎ Qßã§Ç|µªÁçÛÛ[û…¨qÔ^*rùèIZç’¯/ÇŽR{§¨>¢žU†«çÃTïNÿÿÓ›žÕx&ª}ÒÌ½slÕ
ŒÊ=õßªæ-¹WÏ(ºÖÌg÷¥±Ö:}³q×Œ¤kîÕ¿•³«^»®å¸¹ûLêŸUwQëÍõüæéÏþgWûæcëýÕµä{Tpç´y7k¯_Ú³]ï·Æþ¾y96""–»úNüjÝö‰¾ïÄ†ïÅ
µ'´ÞwÆ“#Zk¬Ð»í] êŸý.Ü0ØÊ”õ3Ö¹¸ÝGûwžKkïIW*KÙ/Dk;º\~³y^ù–"Ç^øü+çøŽ¡q¾ÕÞ¥•«>Lõ{Ë{Nøl+W
¼×Þ‘™þøˆVEåšºÆ¬sÉUYlÔçôo[ö/U
ÇÉ>Û0êÛ¶Sƒ'ê|ôßô™GÍUJ•cëyZå¾i5Þ_£Þ{Í‚•½¢ÞgÍ´¦ÚUï^s‡‘=d´/|T=m]Cú[a""b±$Çv«ü2jL±{ú»·ææ†Qjü¬L4Íñ@œ[Ïj^b
­yøÖ{3Ú‡Ò×²Ý$û|”[Ž­Ï-*÷ÔOï…ÕOVÍ£2q­©¶úÈWcø¨½otþ£û2ûÉªÏ^™vþën9¶®mßû¤½©´ÇÕG®º>t'ÿ96""–»
ë'<ß‰ªQ¦5!¹®2N}ïE…“Ôœ‹•cï©ùHùåÀÛïóö§ûøÊ7£ú©ñê¹Öyå[ŠûøªÍ/¹ú×Ø,É>+º‡ñ]åÿÏÞ›x[Q{»Kl¢Æ&ÆØÆ¾	Ø+¶
¨ˆ¨TQTéé¤—vÓ÷°¢±;&ÑDùÎ9ùÎýÎ=ãŽïŒ;¾qÿËo'¥Ëå|ëU«jïµ7Ï3Æ3LtÏYµj­½×¬_ÍùÎ
S­óÖ¼=¯ðúIT—/Wn]lõ§q¥×‡œtï°NVú<h^º×G¢>»£é=¯ýl¶VŽ]´3zêgÖõÉò¼(­Ÿ¯Ömß:²×=n‰ºÎªMbõ§{%¯DDÄ²$Ç«ýBBßÛ3å™?-Óî-
4óÚW“c«þÅËƒ†že>°2¼O7½`õ9uÈã™ÇîVŽýç¦ÝïjNx‘ÆŒÑæ?1ö„´÷ÁËûCjnÕsÑÜ‘žç„çì‡ÔûõÅÛg[ç¨g
yîo’¾uß¡ýZÔWGÈ±­9>û¬æµõÔûª:AêÙ–zÆ3peØÚ÷Íë£Ö´}D´Ö+ë^
19¶æ‚¾ñè3ÇÆÎ‘i™›Æô^ûZËÎ±5ÅšïüaÎñ‹ÖW†úÓ½‹®§×>¤Æ›Ÿ-Ýøj°ß¦{cÞ#ë¾Bs°óŒ¹õ|Có’ëØsì¡7ÜZ±~¿¾\½yQÌ3'©ÚÖŠ­g’
L»gÒ¾4^{DDÄ2$Çþ©ç[ßÙÚ÷ÝkŸæö)o\gõe>BZŽ­ñêú§^œwl¨}g¬±õ¾Ùûzíkµrì2ôòO“·Ö¯Ön[;^ùh÷~æþSß¼ÑkŸ8ùÞG·^ßgËš&ç}
_«ÕxVórÚ{Ž­û+ë³z×^nûXµ×æâQãOö~±­T¦ú>ÔØDµ¼ö–šaK4®õÚW›–cëû\ãì<c±–9
FMpõ›umV™9¶Îõ£…kFYý?{Ç}nµÞtfg³^^l¾k©û«>Ý˜;§~®Zêœ”<NÓXRûØÄ¾ÎFÉ±ÿQf×Ð¹hnL–}‰¬šØY²pKí—ê[{¾zmËû§*+}_k”
˜yi*w³rTÕ¨öÚ'¦íó8¼Ûn{O«¶bž1^#åØ3m®¹SM8ïµxªf^¨oÝ[ÄÎ¡¶jžè"Ë¼îU1í¿7zŽ­ú+ÖûYDÞˆˆØTæeå…Û^™ÓÕkïií{žµæœ•c«îA½
ã×ïjÎCÉR‹M–™ck®‰Õ·ö÷Ú‡TþêOµK¼¶1®;åœPÿÞxPsvCí4¦õŽ™E=ˆÝ{²rlÝOjÐyè¹Ó3·Ýëö‘¨±ph~7‹¸o°þ¶ä­ƒˆˆX¯äØ?Vs¬9µ
Ê@½ö1.õâ¯Býk-hì½€•cUs:í½¶µ6RŽm­ÔXÒ{1j¬WÏçGYºõÚÚb>p£çØOÞr796""òjo¶à÷é¶½ÿ¦¹º^{ÏÛ.¼ÚÌÉ³ÔÛ³rìz³a©9×V†¹=wœ×¾
Ú2rlŸöX´úUî˜u¿©LTã¦Úþ4f×ûæµQ×#ôþkÞpZ;k¡æ!{Ç,ËFÈ±7¿4ó2ësu_-“g]êG¼¶±X¸ò±Ð1ÆÝyîuˆˆˆy%Çþ±Ú³&ô=­û€¬k-5
´²Î‰êäµ—eçØZ'h¯n8ó7nûj%ÇÖy[÷`Ú+Ð{±Zu
5ôÚnš4+8®UÍ»¶˜óÐè9¶jñXŸ…zçu!""¶­|8O=8K+ËÒ¸ÇkëgÞl¸VÕˆõ¯úÙ^Ûj‹Ì±UÇYÙ¤ê~[}ê¾à¹¾CÜ¾BZcvÕƒðÚfÑÚó1-{×¾:¡6ÊØ‹º¯Êj[
çØSî_¾?gÉ@¯}­¡u¾ºo£ê«‡ÎW÷-^[DDÄ¢%Çþ±¼¹lpè{Zuì¼¶YT·ÐqvM›ÛÝk+ËÎ±^ÑÝ¿gÝÓ§QrlÍµÑ½C‘c=Íù	'f
åŸÖl]j[TnœÕFÏ±5ÿÝú,¨6N–=NÛ£i™«W¿8‹Ú+"te’±5xËÎ±­ºxÍ3ç÷öÚV›vM•+—®Uû¹kžíÖW_¿FuX¾X±aúÁ±ß×V?ß_¿m{ÿ®kë“¥îBýf©
M£5—<mŽj}[¯ûõGFã³Û2ÇrMïŠ2æÐñõ&ëœ•¯ï¼¾EÕ“IT-óÐqŠ¾?FDDŒ‘ûÇªvè{Zu6¼¶Y´Ö€}¹jóB¯­,;ÇN¿•ckþ@è> çs¼uë
^˜r~è<”{¯!‹÷u½Å¼vw\ÜÕl§y)Ö<ý¶ë7zŽ-ÿ²~ÏÇÖõ>°àíáE¬§FDDlT­¬PcŠ¬¹Xšª½g}ßÆîU^vŽ­ùç¡þ5õÚV›6.R…GöàžOšÖô¢ç;[5ÓÆ
ÞªÏl½vÕQyööAîq‹¶­rl­µî35×%OMë=™3ü¹c½¶Y´~ôÙóÚ"""-9öj.‰•#]ÿËZg§gô^[YvŽ­kê_•cu®±Zëa‹ÊdU—Ùú½p÷æçHu0¬k^Ô
žîYm9öÖWf_m]7©ybÍ3æ÷Ùëž 5³±£¹üÙI§‡¾ÿ¾Z³s»×6«¡:Ìrö°ÑG{meÙ9ööWß¸6Ô£åØ'î›µðö¬µújµæ@¨þtÏ³/¯©öi
½¯¶„µÖ0¹ïÏY~_kÖ‚k‹[ë­µºy×Mh<êsÒoîä½ŸYìunøyD–ñ:""bQ’cÿ`¿.×™cÖ—wsÛg1m?¿˜1mÙ9¶´Î¯½æØšë:¦ñÓ.òÚfõ›
;?+mŸ¡I÷ëd]ó¶Ê_ÛCŽ­Ú"ÖÍZ•i¶lÝ¤§w~yÐðÃµÇ»×?""b#»wæ‚[Cßye¬ùÿbÅÆ™¡cÅÖŸ.;ÇÞòò¬+Cý7JŽ­}Z”_«~Ÿw1¦Õl-õì
íµ¦ÐëC~³a×þwf¿ÕO?¯ñ¡ö¯ô^Û"ÇÖï‡õºW}ù,¯½¥uoÓZÆÔLDDD,Zrì|¼Gs,Øý¬KÜöYÔÚ1ëX1c[rììjnJè<²îacžÌ|ÁããNµiË1b{È±¥µÿ
LŒßnÝóMK¶}ðã…þ[ã±T^ú~S¾íµÍªêîÇs–ðÚÊ²sìÏLÎMo ûïEÖ­NÛ—½µô>gš‹üùòõS¼~jÕÜƒ/WnzSu¹“l»ˆ}OZ;ÇžpÏÐNÖ:MÕ¿
«ç5¥ÕÖk-½sDDD,Zrì´²á2¾£ÓÆÇª¯ìµ'ÇÎ®µvúOéµÍê§K×M+mÎÊ²§'žj£üÝ;^Y¶—[j¥P_YÕ}“Ö¸>Ñó.÷˜ˆˆˆmígËš&‡¾Ï47Ùk›Õ}¯¿u
gèXŸ,Y3Ök+ËÎ±—<5!Xû¢È[Ï¿¿Ý´ûóTSÖ‰}»ùoï½òf÷b´2ÙÖ4æÚj>ÐŸÖl[çõåùÍææ/µ‡æs}‡¸×&ë5+#ÇÖº?ÕOµ²ëÝgÞ»^­¡wŽˆˆˆEKŽýƒi
{j{m³š6>VFíµ'ÇÎ®•cuïT­•c7ÏœßÛjc­…míëTm{Ê±¥ö:x_Ðê3š'së×¸ÇEDDl+­úÃeäØVýi{¼¶²#äØ1çªZ…ßnÚû«ÕŸÓˆ^?žš‹a£µŒ½
¶Ê²÷/X1Ìë/Ö¯×nß<¶ßÌu¥[+ÇVFmîë¸uï_‹¨mç]£ÖÐ;GDDÄ¢%ÇþÁF™­ÚÙ^{rììZ9¶öÜôÚf5Ï|ìÕc§œj£1°w¼²lo9¶T=Åi÷?q¤Ö¢†úÎªîC[sÿ!
DDÄ,ZÙ09öÆf­‰õæØòÉ[î®¨ŽˆÕÏ—«7/Ò>^?iZ9¶jÒiÞrk˜µ>Ÿ²çO—7½b]—¬î™±°O–}dZ#ÇV­Í…G5FTkÄë#Fëš|´påãÞûV”Þ9"""-9ö¦åØ
1{/fñ¶¯6¥lÏkOŽ]+Ç~cøÓÇxm³úÅŠÍ¯‡Ž•vOiÝ{Õ“éÖk{Ì±«í{Ñ5•ù#Æ¿Þò¡Zç:VŒZ¬šöÞñ[[ëÙùÖW_¿Æk›UkL÷ûE«ŸñÚÊC)Ç–3zê
gV?Rã“zê#Û™lëŽ±ó¨ý€´Ç¡ö”Ñþ—i×É3KéÖÈ±WŽ™|¦u®ë_œz±×>VëCo¼Õm‹ˆˆØ^%ÇþÁ—w3ÇEgX^ßÇ<Vïó®pÛ“cgWÇ‡æA{m³úÕšÛCÇZ<j
üÉV›™ÞëhÞ†w¼²´rlíóäµ±ì»Ö>ç_Y×ÐÃÖ½øÚ…­z*K¶­g^ÿˆˆˆ­­µÏ£jY{m³ú¡Q"6'>Ôrl¹qâôÎV_²žyó<Ô)Ô§ê–xmÉ®§^ÐRNû
tþnî²!_¯ßñNÚ5¹xäø_zÇ‘eçØÚ{ÓÚ×QÏ{bóö­ÚÛ:¯-""b{•û5çÚ©v¶×>‹Ö¸36³$ÇÎ®ÆŽ¡ó(jnq¢Æ§Ú+0t¬I÷3×¦ÕgïsáUîqËÐÊ±c÷sò
lí;¤ê.x|Ü‰_¼½q¶uýGöàö‡ˆˆØšjïàwõâ¦¼¶Yµjvm|iÆ¥^[y(æØjÞµÕŸœ7bÌñ^?!5ïÖêóª“ÏsÛ7²Ý~Ý¥%ÛÖüå/Wn]œvýäw[š¿Rîõ[fŽ
­yOªéê_u‹^ß«á¡c•±Ö±Q$Çþ±Ví‰åÏN:Ýk›E«òWk·­÷ÚJrììj}m=×<Va­kw×^f»´Z3ãî¼¿MæUX9vlLÏFÈ±«Umz}¬÷aÇ´7oòú@DDlM
—==ñÔàwé¦½ðÚfÕÊè´¦Ìk+Å[*_U=l«OÍcy®ï·ŸZo:³³yž1ûí´'µnöÙoõ³^¯ŒÙó¦¬[µÎ­µŸßnÛûo1u#³Úšk1Erì«¹+¡ñ€ÖQzm³h'v
n09vv­½pT“¯Þ}vªÕÚ8Îß½}h¬ûÃm¯Ìéê·­[ób¼¶16ZŽ-»ŸuIE÷þáÏl}÷8ˆˆˆE›¶ž+¦V]¬ýº\Ww=ÞC5Ç–z/¾Ý´ûS«_Õˆ|uO·ŸZÿ²~ÏÇ¡þT{Ú
kÛõð¨£­køÞœ%¼öeåØïÏY2Ð:¯)÷çûÌx®{aÊù¡ãµ·º2ˆˆˆY$Çþ±ªËhŸ·ËN:Ûm£ædXû—Ç®#ÇÎîwm•ùÎª:ÆçË7LõÚZó*”ëzxjúÐù
|³a×¯mŒ˜cK­amÄóBDD¬UÏ_­z¼y3×æ˜`ë;‹­aq(çØrè ·V47×ê[ã«¬Ï>xsÙàP_Ú«¥ÈZÌ¤µŸzÌX»Œ{éè
§Xïéæ—f^æµÏë3·Ýk~NïÑßmˆˆØ%Çþ±÷u½Å¼4p¸YÛ8‹o<úÌ±Ö1T[Âk/É±óií¿¸¿ ùöZßiÕÆÖ3¯ýìa£Í9&/~¸×¾hUÏÛ:Ÿ"jü5jŽm½nÝ{zm
[[«~ðGo­zÒk«2ÂÐ1²Ôá>Ôsl©ñœõÜAþaõ–%1už­\Vjok¯}{tÕ˜É¿½Þ˜{‹¢slÝ“img¨OÕá+óY‚æ¸h®UèØ¼=ÜkˆˆØ%Çþ©Öž_®Ú¼°Þ±ˆ
æt[YjÌ‚Drì|®3ùÌÐ¹è~Bu÷¼öžÖú>õ³W£²a+ÿsÓŽ½EÖ?‘=Ï¾<õ¿§íTÄÞ§/ÜýÀa¡¾csl]Ó¢ÖITkíÃZÔ<tDDÄ"µjdkü¡};¼öžÚßÃÄÖÆ–äØÿ
Ð&~´påã±÷Ê¼U“$ÔöŒ+ßžœ?bÌñ¡×“E™ckjÕ¢Ó˜Qk%¼>êUµ°­Ï‘æk{íÛ›äØ?uþcO°Æy÷O\þÌÄÓ¬¾'ßûHô|[rì|ö<çr3'þbÅ†é±
÷!ï¹ôF³ï‹V=åµOÜ7{a_ëÚoŸòÆu^ûXU_Põ¸Ó~F¹¹5g¨žyÊžµ×©U_'6ÇVýî/WnzsÀe7¹?›Eíë:¯Ï–5MöÚ"""¶¶-ãcNh½s²56úlÙºI¡¾•Ÿf™;
LŽýƒÞž…;^›s½×GâÎ©óºYýì›µðv¯}5÷bÓ¤Y©534ÖÓxÓë+«:nèµÆìgTTŽ­¹ÐÖÞºP
¯"L[K¬zìúÛàõ‘GÕJÛ¿±,É±ªæ-Xû°(w{¡ÿ¹Öèé™¸•Ûe­aGŽßÝÓçõ°^[Þ±¾ê‰üiÍ¶uV¿±ûIí£d}N¤îÑ¼>ÒxE÷Êï—¬}^}éž×ûy­C‡
òm}½öµŽìuOEÙ³õúd–ûŸ¯ãïª?¨÷Ákã©ûÍ_
WLmDDÄ¶°yÆü^Ö÷ªê÷zí-­½cäº_»Ðk_-9öj¼aÕjIÔ8ÇëG¶ì!™Rw[™xQû¬è~eúƒOÕr¯´~ÏÇi?»ýÕ7®Õñ?Y¼æ¹».¹Áí;VkíìâQãÝ1rQ9vÚsˆ
=½F¡­½y¤îOîì\Üµ¯¾Ès€ˆˆX¯äØa§ÝÿÄ‘Öx@™YÖzsS?vDZ69æŽÁ™ú#ÇÎ¯Î_ó­×—u¬¯±aZ†­q®×G­'Nïlõ'›§Ïëyýi¹ýT{ë×TvL{ó¦ê
ùZ19vÚÚW­¥Þí÷ØòÑw~?îõÌšc'j^˜®^«×6¤Þ÷÷ÞX|Oèœt­²î½„ˆˆØZªÆU_Bj¯Z<>îDk]–Æ
YŸ“cÿØ–=:›v¿kK×~Â=C£öçI[ó)5‡ ïEùÆGRó|4·ú«µÛÖßodŽ-5ŽÚ3caŸz3UëuÆÖð+"ÇN[»»sê›7zí‹V{Ù§ýî«†v½û<i¼ÿþœå÷Uÿ=
ÇFDÄ¶ÛVµ
¬ñ€TÞ¥gÒi}<x}ŸÊþyË‡¦õ“'ç$Ç®Ï´çòOk¶®šôÛ‡;¥Õ^¾ùìK+«Æ¾|VÚüïóÔÆkY«¸rÓü´sünKóWkÇ½z^Z]ï>ç_ÙrÏ¡:‹¡õÆ19vZ-©ñ¬æ±í7ä
0ÝéÜuÝtìQ½¶¬)ÕõL{-µæÍ±«ÏIstÏ®óðúÑšh}&ô™´Î©Èš.ˆˆˆe¸xäø_¦}¿êû:f§ïNeVi}é{Óë§VrìŸªqœµWŸT>S£Bó¤µçfÚ{¦95ºïÐý‰×ŸÔ
˜Nëè´–18$CŽ˜ŒÑ¦Ü?âˆ,s2z{y¥yæüÞÖk{gö’þ^²Þû‘n}Íu“_¼½qv–¹0Eª9òiï½Ô~°ºî±5ÓûýæÚŠÖrX¿·äØˆˆØ’cÛjl•6Ïö‡qÏŽµº/P^§ï
zíõ§±”µŸãÆ«7/ŠKTKŽ]¿ÞœgùÍææ/UzãK3.Õ{«µµšÓüùòõSÒæ×ËØûË–üxÃÎ¼sLÎSõ½5ßYjÎÍ·››ÿè¶‹È±å¶WætõúÊ£•×›cÿä8víW–¯û)
½—Z­:$ú=ÕµòÞË?®Ùº¦è=6Ëðws—
ñ¾{•Që9·æX*G•úßzþ»ÁŠaÞ÷¢j˜xç’;¬jZóÞ¥jxÜváÕn?±÷.RcGÍµÑ˜Hc\å úLèkmâ§K×ŽO›ÇÐbŽûGçpðs¦ã¬qêÅÊWõT½g©š|šS¢uÛ
Zõß“ë[ºž[cA«öd™ÆæÅºõú’ºîº—Ùúêë×èýÖï½Þ«õyh™ƒµ~ç{^?±ç…ˆˆX¤äØéjLôç¦ÍÞ÷x•å™«+É±ëWóVôüÁ{Ÿò¨qc;Ý³|µvÛFïxy
Í±u_dÕŒÎ«öŒÒ}[è¿c×ã×ëw¼sïˆˆˆØj~ÄgK7¾ê}¿åUÏ…óÎ9%Ç¶Õ^òi×]ùtÌžšº·øbÅæ×½÷±ëÌ±‹PóFbkÜÉzrì´ÏE™f¹§PîŸöL¤H³œ""bQ’
cûj<¨¹Þwy5×%f,jIŽ]œšc]äxï›
»dÙ×ÑSòûs–ôŽ›Ç­í?ñžKo¬¨¦×§§2~Ýgê9Â «zÔ•cOðP'w®Pêúä}Ö„ˆˆØVjŒ©±¦÷=—U=ÿÏ›aKrìtwN×-íú«nHZÍ»D½GšSí½Ÿõª1oÚ
y”ckntÖ1wGÏ±¥jª1f÷Ù{€{.ˆˆˆEKŽ§27ÓöÐˆQ5_dô1Þñ<É±‹Uó8²Öp®5©}Ã™¿q—ÇgoTùrÕæ…Þyxªž·Ö{µÝCj¯ùz®“î©«÷÷©7Ç–ª
—¨:å…Îß¸ë£—
?Ü;6""b£šŒ]S÷ñˆTõ›‹¿’c§SãZµª½~µOIcÇZµ×£êQô<;½–‡ž§h_F­móúÌ¢ÆÜºyÆÜ‡BŽ-5£v÷"ÔßÝG»év÷Ë;›Ú—}Í¸WÎÍ:ûz
íöÍÇÕ3»Z”'ÖºþŠ‡½¶±†ú—Y÷¦WÍ»²Ïµuï ìRõ.²ÌÏÖxNùuž\8#n¾«¢ñ£²VïÜ¿Û²çkeÈz}õÖyÖŸ–ûÄÈãkü¬:{¡ù2ý»\üœ}¶¬i²w!õ{
¡º~ÚÇ&Ë{Ørž[ßù›ÖJ{û{"""¶'µ³Æ
yÖ/)×œZ=3öŽ#9¶¯Öáé¾!í}ÑZB¯Ÿj5BuÓëy¦¡ñ™ÆXYç?K±ŸèyWËqíYâË2ÉPïïÚË=¦å¡’c'ÞzÁ5-cã¬÷®ÕjÏíª1r½÷ˆˆˆõJŽ_¡<>î
DÍPýí§1žþy`Ñª§ôüÍGŸýykå›Xœš_2eðcGh/@å¿Ÿ.ozEï­Æ¸ÚkFûªþÜÓ·¬Ô³¾¶^uoúÒÀátß¦sÕgnÏŒ…}ô¿õÜdÆCOý¬¬ÏŸ²^½~íkªœZµ«
?ÿÚ;F×°Û¯»¸}•¡žìuOeþˆ1ÇëYŠž5è}Sý³eÏÇ‰Ó;kO#í'DvˆˆYå£¼÷Æâ{´yhž¦öS†ªÌJûîYiL 1V­yö<©ó
õÃé»m«Uîê§ÈsMÓz‰7Ÿmmd¢Æ¬ÏõÒ²ŽMã[Ù4/A{>êý×¼åÌÏéÞFã$3ûœ¥ÛwµoîcÏ§{(íS®Œµú9‹òöo7íþ\ó¾5Ç@çûBÿ+âó¨÷/t
McÆ«iŸ‹2-ê^C÷ëY€îm´–Q×Y¿÷ºþúßZ/«1½~Fû?>x}ÆÈˆˆØP’c#""""Z&™œž‰Kýoý;¯""""b[IŽˆˆˆˆˆˆˆˆˆˆ,96""""""""""6²äØˆˆ
ˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆˆˆˆˆˆ,96""""""""""6²äØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆˆˆˆˆˆ,96""""""""""6²ä
ØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆˆˆˆˆˆ,96""""""""""6²äØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆˆˆˆˆˆ,96""""""""""
6²äØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#+ïÔ©rò‘Ç!""""""""""6œ
í‰£ö³JßnÝâ-×^ç5          (+.¾¸òù;Íÿ_­íÙõ?¼¶     ­ÅEgŸ[y|Ð}‡…ôÚÖƒæwXÇ•šÅrM—.©×Ü³ßÍ=*7^qEå’ó/¨{Ì1Þá
ÚŒ_œpBehÿ»*s'M<sëŠ¥ÃÞÙ¼qù‡Í;¿>°g×_¿·yç7ïmÛ²i÷ºÕ6,ZØÎ„	§<ä°Ë.¼¨Ò©S'ïrl
hLxüñ£BãVéµÍËà¾wT>{§ùÿXÇÕ=„×dgÑ”)Y×<¿ßÛüŸº÷kZ0ï¶IO>ù³«:wöN    44BcÛ}›6,òÆ1žŸìÛó¿•oÏ;ö¤Ž>Æ!Ç
€ö@kçØ·ÞpcåÓ}ÍÿmSY«×ä£è;¤æ6-Ÿ9ãªîW]í   @!uÔQ•™Ï;ù÷{›ÿË«äUs·—L›vÉu—]æN»ƒ»õ±ÖÄÞvãM^S
€C–ÖÌ±U“"íþbíÜ9=¼> ?­‘cW«¹ÚÃ¬vX©%j   àF¹ß‡»wþÑ—©Æ8§üòdïÔÚ äØ­u¶kÍª±^[
€C•ÖÊ±»œw~å£=»ÿÝ:–j’w–KkçØ‰ïnÙ´J÷G    E2õÙgO«UW¦Ú/¤£@ŽÝúc   d§5rì3N9µr`ÏÎï¬ãl_¹âÉÃ?Üëê¤­rl©Z2ª¡í#
@_}å|oüQ=ywëæ¦]kWÛ¸ø­ÚÛcË²%CUÿúƒÛÞW-l¯ZÉ±¡È±   ²SvŽ}Ò‰'VöïÚñ™uŒÝkW'Ãn¬ûã½Í¿ìÂ‹*iêþ¦o·î•¡ýïª(V
lÝûe­C¹iÉ¢A¼ß   P/Ž°Ç¯‰ª52wÒÄ3µGc§N¼.+œuvå±÷¶ê×oø°yç×^ÿäØPäØ
Ù)3Ç>þ¸ã*ïoß²ÃêïÆ¦9ÚWZ+Ç®çE÷…Ý®¼ªeN”öx´Þëj5ÿž÷   ò ¼9mÏp=cŸ<ò©cê}n®ýõÜþ`ÿ+trl¨rl
€ì”•c+§TNmõýÞ¶-[È2[—2rìjt¿8êþÛ¿kÇ'Öûž¨,›zè   !¬ñÅ‡»w|yñ9çz]dBãU—4ïü¦úXäØPäØ    Ù)#ÇVž©z!V¿š£}â
Ç{Ý@Á”c'èý}üøS?Ý×üÿZŸ¹àå—‹½Ñ  €Íygþ:˜·JÍ›Ö/‹#Ž<¢¢:%I-mrl¨rl
€ìckŽíæ¥‹‡X}jžÌ)¿<ÙëJ µrì­ÇýhÏî·>òÞ[oóº   haê³Ïo)^9òh¯}hßvl}—ê
B}ôÑ3o»ñ¦–}êôOýýûFEç–ì«'»_uuåÔ“ËÉ~‹Î±×ÎÓÃêïÃæ:ã”S½. Cµ›Ï>ýôÊW\ñýµÔÿþõ©§Eí÷ÓÑhí[èýNÛçSŸ‰²ëËuÔQ•ÎçžWé}ý
ßtzì1ÇxM¡ô·LÏ8’÷Bëùï1  4ÊøBã	Í‘þù±ÇzÍCkÏ:ÒX’»õ!Ç
¡5ô»³²~áü;¼½Æ÷ïÞñ…r×A·Ý^©w/˜j´¿a’ÑT{ÓWšm”Uk/™ßíÜþ¡u¾ÚGO¯«ßÍ=Ì~²RdŽmå¤ÿïþ÷.çïuQšÞãš®•ÅS_ëüîÖÍMiu-´?Ð¾M
Í™0átÝó yå¡÷YsL9¹œrùÐñ”Ñz´EŽ-´“µG’\ôÚkùÞ
ÝWÞÓ«wË3•´ß'©Z—-ì?|ÀÀ–¼»N>é$óóPO-pÕàÉò·$†K/¸0xž1ë±­¶žuNðçu]u}·,[2ôã½ÍÿÓz/Þß¶e›öÕg
àPDó,&=ùäÏô½¤1ŠÆ}¿£ÿUêûJÿNãÀñ8Rß­À¯~ùËÊÓíÔ´`ÞmïlÞ¸\ç|ðoýßõÏvlÝ§5zSž~ú¸¢ÎWëúBß!ûwmÿØkÛH>zŸ÷mZ?_ïû?>»ÿ¦
¾»eÓª­+–›öÜ˜5æ­g|QMkçØµ¯S÷l­ñ:cÑçzØÝZêÈl\üÖ€]kWÓç{ÏúµSt^cjm€æGåAŽ
ph£üZcÓr+K5ž(bnÅ­7Ü*§©þ9É4Fzû–]ÞùÕª1_ë‹Ê±gŒ{’Õ2Le_e¡ë¨{¨<×1±¹iÍdÍÕÎ‚îÉ>{§ùÿ„úÓõðÚç¡yÝšI¡ãé>ÑkÛV9¶
PýëÚ²wÏÿ£g?õ¢ß]ÝÛ×îÃ«þvèoHÞ<[s¼­¾õßò¢g-µýé9L=ÏJô÷#tžþö^¯i¥iáüÛCmõùªþ9ŸÎ=ëßd=Z6cúåyï
ÚúîÒæ½m[6ykU®¦qdQßîu«'(C¬õ¾Ûûþägo¹öºÊŽUoööÂ¨Vû3j}T=hÌê[¿×¶QÑ÷2Ývn{ß»†µ*ÿÕØ¥ž1h»Þ×©±u½¯3d?O}–¼ó©V÷
WiªüÛâÍ‰Ï¨þ½:xôŸ¡þ4Æý¦ú
€Æåæ«¯©ünçö¼qFŒÊšóÎÏMˆÉ±»^r‰™%Åzpüó_ûÜšv*.EäØÏôˆ´sìvåU^¹Q–Ÿu¼i©q¨²¸,Ï2¬ý,U/#K?1(7·Î]¿m™c‹«V<eÿÌçÇÕU8Gs
ý5ß{cÜ¿kÇ'1óÛCX÷×ã}ì¯­…æ³…ú|là½¹‚­=Iö¨ªUsÊ=brle2^mtÏ÷¶mÙrÒ‰'¦
@»Fß5ª³ìý=ôÔ÷ŸÆ•õb}>rÏo¿ÿ=—ÕÜTïœ,•Ñé;"å4R±¾gõ]éµmDFrX½ß—R×epß;¼Ã™”cù:µî¶H4^Ÿ<ò©c²>w©{
=ßÑ<íZ–L›v‰×>¯Õ¿£
ÐØ<ûÐÃ4&ö¾ß³¨ù¡õŒ‘ÒrlÍ™y}üøS³Ì_IS¯ýúË/÷NÉ¤Þ[Yš5'Yç¦kQªU ÷Ê»FYÕ|¡Ø¹ z÷1³eÕ«)’¥Ó§]:Ní<‹¶Î±ÓrøÍ;ÿ’w>™žåèy‰÷
¾fQ¿Ÿcž¹ØÐú·ÜêOÿÞk"íšé¹€×>ÄU;»ÏÙÒHË±Uk§ž|£VeÙZk ÐÑPMkü”G¹4&öŽ›FZŽ­g ZcSÔøUsW½ó
a­½Óyµ§ïÍ+V½-ï:euþä—ÎòŽ¢¬[ãéFzµœ{Æ™­kðŽ—GåÖÕÇ"Ç   Íçð¾×óª{‹¼ó­[5ý´fÓ;vVµ>/ïØ½ž[5ˆ­gú÷úïe¡ûŸ˜û?ÕÙÓ=ÏÞ
M¯kÍ®Ö%Æ´Ûöö²ÇbrUýŒµ¡j€xícÑ}€Uc:ö¾µ­slaÕE‘yæ’)Ã.ú9VµšŸãC5šoêçÀžßymCh­°unyk‹hMo¨?ÕòðÚ +ÇÞ³~ÝTkž\=ªf¶wN
í‰´ýDêUµ¨½ã[X9ö+£F[ÔÚ·D}‡å©1b­ƒ“í%ËÓ¾Ç¦;¼k”WÍ{ðÎ¡–2rì²_çŠY3¯öÎ! ­MÛ¿¥^5^ª>96
À¡Í=zšµ‰¥æeèùÿãƒî;L{—%54Ÿä¢³ÏmÉA5oÐé#×\g+ÇöÔ>>Z‹¦ý•ÝèŸúÿú÷^[å]Þy…È›c«Ž…•êšª^cY¨ï´÷MóJÇ{äpkÏºã~þóŠæJkÞuÚ5Õ}
[°ƒtÏh]‡¢ö5Òë	Ck
cŸa4BŽ­gCÖõÖ:¯}5×tébÖÇHÔïžw©þL²—«þè³1êþÓ^=isËôf©ÝsÆ)§š¿ûúoYñj¥äyÖ¶aÑÂ»C}imAVŽí©çI›–,¤Ï¡þ¾i¤½×ÏõžCù{
ÐÖè»Îû{©ù	ê»_kÏ¤êS­žóF·˜=
òÎuö¾sÒÔú¸¤V¯÷Ýœ¨ùÞ9Õ’ö|W{=Æ®§k+ôüÙËv÷mÚ°PsßïêyKKÕ\Ö¸EÏûõ½¯ÏWC÷?Þ¹TStŽÝZ¯Só¼s	qí¥—F­åÓï›æ¶(ƒÖØEjoJíCé­M
Ç
€ÕL=8®ùë»\{IkX7¥­'Sã¬câ,9¶Æú§iAkþ¯r·¡ýïªh.±Õê2ä©Çœ'Ç¾ò7¿1Ç~Êœ”ZmëEsw¬û#}&²îwÔ³ëµ«^ŸŽS/XóM¬sZ2uj¯}
ÊæCýgYWÙ9¶~w­gªïµOÐ^ŒÖ<x™¥VèÙ§Ÿ^I['¡¹:1ŸƒÝG‡ú‰ÙC±š´L<1Omý­¨íGïÉÏzl“)ÇÞ¿{ÇZ;ú)§˜ýé^wÁË/Ÿ›v?˜gn
@£q÷-½RŸÃkÏéë.Kÿs§1Žêj§]óÎÃÈ’cëuè|µ&,4æV©1¦·N§×u×ÎÄFãå´þš›Ö¾û}ÖÚè½ÛµfÕXûÜ×LÖþ™1èÞD{‹XßgÙc¢ÈÛ{Z#YÔëÔ-Ë
ëª–V«[Ÿí‹ßàíÿ®y1º?ÓœˆÐïumŽ­ãê¾3qþË“Ï	^ŸMsª.ÆFýÌ
À?hZ0ï6kì¡ÿ–5ÏÕ<Í´¹¹‹^{-ÓÆ19¶ÆcÊ¯Óöµ®EYšru«Ï;ºßìuñ²æØšËž6öËZ‡![÷mÊ4cŸ]Ô¢Óšï±|ÆŒ+½ö¢iþÜ>¡öºPæZšûê[Ÿ¡Ó~õ
+¯ù÷4BŽ-4ÿ*tz6âµMPîêC¼?š™õÙ“>[iW6-]|Ÿ×G‚æ‡úÐ¿÷ÚVóòS£ŽµÎ'1kmÝC…úÑ¼"¯mBLŽ­ùKš˜ÌA{XùŽîS³ô
Ðhè{)m§ïµ,Ïá5Ö]9{ÖµVÚ÷0ëßÍØ[kkbk‚(_K«²yéâ!^µxç©qê>vdÖ±@Ù¼8Âsg}ÿúvënî;†EæØe¼Ní›XÄëÔ±÷lX7Ý:?ýŽæÙŸ^÷º
¯«ÇÔæØµX÷`zÖ
ÚÊQ­¬CsóŒ„Æúšê7v^n‚—ckÞé…gãu¤ûUW›}¿5åÕ½öµdÉ±5?T5¾­ŸÏ[Û$«ö°2h«†H,ª3ê[ÙjÌ}æþZ×eôf{°RƒîCýjþ‡×¶šFÉ±7.
Y4ÐºV1¹¼~­ùïïlÞ¸4æý ¡¿Öµ–Ú1†ûïèü,(SðÚV£¿Ö¹T›¥¶Èƒwöž[–¿i9¶þ6kÝlÞ÷@µ.­¾u
Ð^™1vìIÖß7e{^{‹´ZÊr½öÕxù°¾—b×:U£,Û?*›Ì:ÿÄúž­Uc8Í«U}±ØÜ½,4gØZË˜µ®Z-Ö~Aº¶±Ïº‹Ê±µF±¬×©õžÁ×ypLû:­>¤æÄd¹ß¡¹ÑÉø

„5ïUóõ4vª‡³N;ÍÌÇ²ä<VŽ­¹“ºÉ›µ'hîd¨­¥ôÚÖ›cëÚþnçö­Ÿ-{/¶ì§®×pßí}½æQX¹alÍ9k®x–¹®µh<m­¥Ìº·Qrì´Ú š{î1wÒÄ3Cmuê­
£¬{mkn¾2n¯½ÐïŠõ¬-öo”Þ÷Ú>t^¡Ïh–Ú"ú;:¯Ûoêæ5ý+ÇÖ&­u¯‡´Z*Ï4®<
@ƒ¡g{Öw‹êZyíÓPl?²Öœ³rl_U#ªžñ«2uëï»²¿¬¤­¡²T®«9+ª=®zã=®éÚR¢5ÐœáÐ9e“`¡Z¡þŸúPÔ ¨[uÀBýl{ùãõ|~¬×ùÜÃÃÜÅú]°
ÖDè>²Þ91	zšÛ³vÞ›·¤ý96  @ÇG÷Öš2ÕNóÚÇ`ÍÔ8.ö^ÀÊ±UãØkƒj"‡úW ¯m-19¶®û{[7o°~®ÞýÂc°®©j
zmcQmíÐ1Ö¿µàN¯­xò¾Áæ<ó—„>×¡þ´gž×¶–FÉ±5?ÝºN÷Þz[j[ÝX÷ ZÏ™Ú8’WG?ýóPÿº­?hÕNQmÔB÷ûkÞœssèßg©-²oÓ†E¡ö±{…
+ÇÖçËkƒö7õïÝ 4*O
¹?8>ÐóJ­3¬«þ˜Ô¾è±X9vlš†žÏZç8âÞA™NÕl}§åñÃÝ;ÿ¨<YÙ£êWä]Sd¡þBs”5w&fZªÍzmÊ½¶¢ˆ[ï‰òàÐëÌ³×uëuÆ<Ó·ÚÊ¬kŠ€
 ã£Œ+ô}¯û
Õ}-ÝOXcœØù¯eçØz÷1Ï1k-f/ÇVÖÜ©ùE±Z=Xón²ÜŸyX÷X±™±²@«v¸ÖxíkÑs“Ðž|rÌ°GÜy'µ4JŽ­ùíÖçÉÛ1­~KlÝÍ™¶æÀ{ç—`Í{Ž]×Ñ¼n
Í¤Ú¶ªš§-‡èuÙòùTf]ÛvÏúuS½¶Õ”c[ugbîQ
kÏ»"ó*kNv–ý¬;v]š‡µ?sÞzÊ‡·,[24Ôg=j õO¯Œ}lstt_ð9F‘{ÿó;þ'cÓ½¶¢ˆ[uÎB}d©_íaebæòX¿‡š;W©HÈ±
:>«ç¼~Sèû^cM¯mTÇ6tÍƒöÚŠ²sì´,/ëžÝi9¶·ÿe¢æ°±VÐB}‡ö»Wf\ô¸3T¿Q¹aì|UkÿAÍE9þ¸ã¼æ?Âš7’wïÈFÉ±5'Ùú,}dxj>¯¹R¡vºIk—•P
Ž,cçæ«NG¨½r¯­>'µ÷¢ÕûjËÚ~·­X6Üé¶rãWÏ)k]û²slë@žºI
mÆVÍ:å›^ûX^9òèÐ1”cÆŽÑÊÎ±õw<ÔÿÛ³fuõÚZèµi_a«nKî\½ò¹~7gÚªùGl]¾ô¡P¿E=O°êÆÌù."ÇÖ3“Py×$ZX¯3mÎ·ÆÍ¡ü[ªæ£Ù°DÈ±
:>Öøzá+/ŸçµÍ‚ê„Ž£lËk+ÊÎ±5
õ/‹Ì±µ7Žõßj]9{ÖµÞ±òbÍ‘?x_ñŒ×6+Ö|&ÕNAch«6òËOŠ+JñOBy¥\ôÚk¹6¼k”;m&oí²æä†ÚÅæË±Xy¹j^xm…u¿¤|Ú{ÚÏtýÂùw$ÿ=T[Dõ–¼~
õù½&åÛY(;ÇVê_ÿ½¶
FÏ®×šßyõî)WjL[Ç‰Ýã°ì{Ã¢…w‡ú÷öÃ‹AÏ€5ßäÀž]µ®C½ª–ù¹gœéÊOÐüƒÚ¾4Ãk—+GŽÙ{¤ˆ;ô,!v>x¬ÏQÚë´æÈ<õÙ‹€
 c£ùÖ|–¢öùK°ê÷ÆŽ9ËÎ±U£×‹™cgµ¬ùªå:ž²==‹ÔÚë1Ë\Õ"õ¡õ´±s¢tÏêCyl¦^K£äØiuE¼{ekMò‹#Ï>A=Õ«±®ìÜ|«·§b(«¯®«
mÕÑó44g»¶êuf]ÓPvŽ­:©¡þÉ± =¢ï§Ðß4Õ óÚfAã‹P fé}·&”c/™6í’PÿEäØ
úNÜ÷ŽÊºùs{}Ø¼óëÐñêQ÷"Z/‹ê’„úÉZÓ+ÍkËˆzslkŸæÖ|ÞÙßlcí}¢y ±có¢!Ç
èØXã#™%cŒ!mîŒ7çQ”cëüÊÌ±ßÛ¶e‹u$•­ÅÔéÍŠê&zçV¶zOcI›ó¡Ç1XûÆî×¢QrlÍ¹Îs}tŸaÍuÝ?1–sN?Ã|/8ël¯yÖœî´ç=ª5_;»º¦HB
h®þ–eK0ºmáÀžßÕ¶Ù½võø´6!ÊÎ±­çäØ
Ð±2·2ò=«ÞBlýé²slkRdŽ]‹¾³U¿EÇÖÞàÇ<ÿ:‡,j,òôƒC£[{ûhŽ¶ö„.Rk–˜}4ëÍ±­šq­ù:µŸªu~ÖØEs¬6eCŽ Ð±I«
]äºL‘¶×cL†Õsì÷·oÙ¡ýïôÚ¬úrRÿ-KæÃÚyoÞâ_ÙfyMÊ[U"ÔOLmíkŸõ<ji”Û:©û(‹´z:E?ËRžl+f}®°êQ§eÇÝu÷OÚT×IÈZ[DsøCç’µÖ
 Ç ˆÇª\Fvk­Ó8Êk+ÊÎ±g>?îäÖºiüâ„*·\{]eÜ£¡ºx{7®Ÿ›6¶ ©ŸO³$hß¯¯²U½.ï<ëÍ±Ÿ{xX›¿NÝÓXç§çF¡6E×¥Ë96
@ÇÆÊ†eÖuñÊ‚­c]rþ^ó—ckïÃS~yò÷m†Ý=Àœ+5´Ëyç§5šgêcÙfÍ'>ñÄÏBýèºyûí„2J[›Ù¢Qrlë>[µ£ÓjvèwÏzbkfÁ:Ö€Þ}¼¦-èïRè
y„òfëoVè³škžµ¶ˆU›'OMHrl €x¬}ƒO}­ØMþ¢L.t¬˜gè¢ì{òÈ§Ž
õßÚ9v­{êqM×–5€¯‡Î³Ö˜}æU³Ûë§lÓòÝ„zsì7'N<Ã;²M{Ö{ªZ7V›²!Ç
èØ¤ÕjðÚf%-ÇŽ™‹Ù‘rlÕoíÿ=åé§Kk÷aóÎ?yym,š¿šv¬Ö0kŽ­æÊ+C}Í41u“
k.÷óÃ+ÌlÐ(9¶ž‹„Îãƒ[÷¥µKË±‹^“!¬züYîçµi¨«:ÿ4¾Ð\êÚÏL¨¦HB–Ú"¡š¤Z—›§&$96
@<ÖþÑEýÍ¬fùÌW…Ž»Où¡œc×¢L{Ï†uÓCç[m·+¯JíGÏ+¼>Ê¶5rìFÖØ:¶æNc
tlÒæc{m³’–c{ãUÑQrlå\ióª—Í˜~¹Õ¶åõnß²C52êÅÊ±››Ö¾²ðÕWÎo µOOVV½ñú
áëºëXÙd¯ë®¾·Ê3ë½–c§Õ¹oZ0ï¶´¶i9võz¢°Ž•å~^u;B}„êy„jK†jŠ$d©-Ê&¼zÚäØ
ñ¨žo™3«±öQ$ÇÎÏÔgŸ=>tÎ‰oMyõÂ´öÖ{RFÝhK­Éò¨7Çnô×©y9¡óÓgÒlT2äØ
›´;­A4·Ó:Ö¡TWäš.]RÛj.çæ¥‹‡Xí¥2h+³eÛŠeÃC}—qX$ªÙ`]ëžpË²%CC?¿|ÆŒ+ƒ
2Ð9ö‹#ìÏ›W¯#-ÇŽù½ÌŠu¬;{ôôš~õ­ñVf]ûsiûWÆÖÑßGÕl©ý9í·it 96
@<¡µ3EþÍ¬fÍ›sn+vO_rì0VF+•Ÿ¦µµæ)oX´ðî´v­M½9¶5Æl”×iÕ)ã÷0rl
€ŽÖá[cÈPÝ‹zHËË´_šGGÉ±½¶Bµöú¶úÇ°ý½~Ò°r³•¯Ï¾ÞkÛÖX×&´?ºæ‡òFe•1û‹z4BŽmÝG¨†‡µGa‚öµ>c1ë$²püqÇ™ÇŠ©-T®ïO¯ùî¯þý
iÎ}õÏ¤ÕIˆ©-Ò³ëµÁ×’g Ç ˆÇª½zÎë7ym³²iéâûBÇÒ¿÷Ú rì0znŸIýû´¶VÝhÕKk×ÚÔ›c[¯3öJÙèyCèüÞž5««×¶,È±
:6iµ>”Ó‰æ[ZÇŠ™û}(åØB™Ÿj[ýÈ9&œîõcaÛÃ8ÏÊädíb]£2_g[çØ½¯¿Á¼±ûÅ¼_üïPû¢î±ê}–UµïVõ³‰Pýÿ´š"
1µE^ýôÏkFõëSºM…  ž¦ùsû„þ¦Åî½˜kî·êÀym9¶umdZÝ7­} µyû–]f£6 Þ»Ñ_çŽU+ž _ÞkE@Ž
Ðñ±öÍ›ôä“õ®Aý…Ž£Új^[q¨åØBsâìÙùÕ—3ì‘\FFÜ;è°PµsZÍ§
ÍÇ•ªŸóswt¿9íÑ´eŽ­4Ö\l[äw;·jïÕ§ÌÊƒwöþŽ)G÷æH×2rðàçwÔý|¿Ébh-xZM‘„˜Ú"¡½&cŸ„ Ç
ˆÇz¯=½¶YÑ3ÊÐ±TÓËk+È±mT#tî2mìmÍÑ:´¬ã‰2©7Ç=—7ÅÌ*­á_[Ž-È±  :>û6mXú¾/zükUc×
Š9¶¸ò7¿Qm„ÿ²úSÞ6è¶ìoUZiÕ›it¬yÖºVÇstËÏXÙöWW\m™cÏ;ö$ë=ŒÝJhÞL¨¢×­*'ÏýŽµ·e’%ëýÕ3™êÿSS$Á«-RÛ·ŒÙóÉ‚
ë¹¨LÆ E¶nQãÒÈ±mÖÎ{óëúj]¢…jÆYíŠ^OZõæØi{5Âë|~ø£G„ÎMuaêÝG=/Ö=XÑcZ   h;¬l©È9-:u
æ>R{–{íÅ¡šcÍÇ°j?He·×^z©×ÍÐ{R[;8±ˆýËæ´_ýÊ¬«¨ºú«Žvòß‹ ­rl}&Bs†¥®Kì\lñòS£Ž
õ£µ±¹oÖÜñ¼u÷ïÚþqm_ûwíøLÿMõ¶kÿ[LM‘«¶ˆæ?súÁ¿ºßÌ96
@<ªEú›&‹Zo%´'t}ÿþüØc½æ-cÛXu)4®õÚZëWÌšyµ×¶µ¨7ÇÖz€•³gµy¶ÏÒÐþwyÍKaÜ£³õ,ó;
 ±±Ö¬É¯¸Âk…•AËØ¹¿‡rŽ-xo°ŽB¢ž(_Ë‚5G^÷ió`…-Ë–
¿êŠ[µ˜«çkA[äØ÷ôêú\#köÙùÜóÌÏþýr—ÊøiÇÐ»×<ÈÚ¹sz„úSž¬g1µÿ>¦¦H‚U[Dçªy×µÿ^µY¼>Ó Ç
È†ž[†þ®™cn\üÖ€àßÎ-›Vym=ÇÖ÷óøÇFö|?­›²²èæ¦µ¯xíCµÃdÑã¼z("Ç¶jw4ÂX]sb>ÞÛü÷ÐùíY¿nª×¾¬º‰û6­Ÿïµ
€öÁ?æJ‡kÇîÅî¡µ\¡þ5ŸÒk›p¨çØ"­Ž„T–vâ
QÓÛ[P®gõ¥ŒÐkßÖôºîzóüßÝ²yMèßy+Z;ÇVù´[Ÿ<k9µgP¨¿¢Æýª[ê_kòÖx´æÉ)PÝýÚãd[ª-¢9Ý«ç¼Ñ­öß/Ÿ9ã*¯¿4È±
²±tú´ËŒï•ÿÊó=X‹žgZß·yí=ÇNÆ×š;Ç¼ÒæÑhX=í‹úî¬—"rì´±î’©S»xíË&­6L–µEa ëÙ‹   ƒBßùšØýªúb¿´¬4¶¦ˆ
ÇþÊa­¾¥rÇØ\PsaBµ‡èu‘‹¾ÝºW^9²É2ªuv=j½à¬³½.3ÑZ9ö¹gœYÙ¾rÅ“i¯M÷îy_ŸÞ«ßawðš§¢5V ”zjØè™M¨ßP=™
‹ö÷ú«%T[Dy¸æû×þûûnïëu— 96
@6Òöù˜;iâ™^{Õmõ­ïÕ6‹¥½äØRkût_1ˆ¤ çÖÓª¦ú×ÃZc@½GÊË@ÏÄµÏdEäØÞëŒ­Óž½Î˜ulÝ®¼*eNÉ¦Uš/Uú\<5äþÔÏg¨®\b[Ï_

€âÐœíñúÎ×ókí©–µ³ÖjZ–ù2äØÿ@ãÙ­+–³ú—šS»aÚ^Iš‡4êþâ:ŠàW¿üeeÝü¹½4î^2mÚ%ÞÏÇÊ-Ë¨WvŽ­õ¾šËœ6[æÝï3A¿‹ÖÚÐƒÿþ?
ºœw¾×EÍí²î¿t¯ª§õðÞ¶-›¼÷]æ©]bÕ	]ûzç°‘c d'´n&ù~Qž•—´=(²®UlO9vâ;›7.W
³2Ðx#í¹|–õ€#1kî)“­]‹ri]›]kVõ~V‘c‹´×©9Ê’‹Dç½oÓ†E±ãf]ëüæO~é,¯}šS¡ñ¨÷¹NÛTûR¦µ
€ö…ÆÖ÷¾jfÍ²Ï>ýôÊ;¶¾kõ©q·×G5äØ?pÔQGU4ïÚ:†\6cúå^?
§õ¥ì9Ë3‡Z”ÅªîBõ³’¢rl—ÆðiçŸ˜'Ëô(:ÇÖ{{Ëµ×µÔÑ=„÷š¤2î}nõºvyq„ý¹Õý`Ö,[¿7i÷6E¬‡µö©­Vû3êºæÁÊHªU–îõãAŽ
íãbåÍ\Ó%û×L×K.iÉËB}*¿èìs½.~D{Ì±«¿#T;»¨zÓ×]v™ê˜í°Ž§5OYæºkÎFÚ8CãÎgz¸î	Ášû¿iÉ¢AÉg­µsl½ÎƒcÂ…ÖëÔ8°ˆçzª
Ÿ¼ÎØ;m´œ3aÂé±ókjÑ5Ü³~í”¤¯˜Ïµµ7¦þ}QŸe   h{T‹ÂZã÷1×î×| o¢õcKi,jõupÌ¹4ë:3rì£š
iï—œòôÓQè4ïÔª‘ž¨ûAej±u+~}êi-Ÿƒ=ÖMõWTŽ-¼Z+RÏb¼Ïn¬[×ë•Q£MSëžuTóB×éà9~â½ŽZu¯}WÏ[¼ÓŒÂ»OR¬úÜ^Ýõ£š4iŸ)½õ<I
H«™¸eÙ’¼~,bæû+K÷úñ Ç
È‡µç¯ÔwäÐþwy]´ ï®§Ú)íÙxž¹¥í9ÇNT¼ííeéúœz²_ó£Õ§Ð³vo-¡ÌSÓä¼3]Ñø$­ßæ¦5“ûÝ=Í»åZ“Ç¶vŽ-b_gÖ1á÷¯³*+þ¾¿È[„ö
©=7=#ŠEsÌ«3õÄ˜Ïµµ¨Ü¹zåsÞ^Bú[ 9%YŸY
@ë£ïkonë‡Í;¿Ö\ßÇÞ{Xkº¶<»×?5öÔœÛ{vý5­½òð,s-È±ŠæÈëzZÇÒØ/¶¶ñå]ì¾÷‰šw~³yéâ!_}åüiÏ91Ée•¹é>eÿî_x}™ck¾·w¼¢ê
q×båØ­¡î9ô¼ H´Óª”xðþë_UëDÏµ4Î×ß ÕÑ×gM×ãÃÝ;ÿ˜Ö^÷aWþæ7Þ©D¡yÖ^Ííù“—˜Ú"ÊÒë…
z&êí•¡9»ÊêB¬ÖŽöÈáVÞ\ÕÇÒ¬û‹Žc×ª{•ëëÚé@{Ÿî{GËýÀ¸G;Bã<e—ióZª­§¦¹êªyßÕR{Âhü¢sÔ¸Eûþò¿hù(c} ß‡ÆWic‹
¶È±…j½xcïuªÖJìëÌ’ck<öÞÖÍ¼sÛ»¡éuÍ³é}ý -s^t^Êè5W_¿£oÏšÕUŸ/«}Ìç:­f·T=ÝËê¹Œ>·ÉgW÷2šwðÞêoú¹¢~G
 \´6Ì{ÞŸWå¤×^z©w AÈ±ÃhÍlZþ¬ñiì^7ÛzfQ™c‹´úú<×[¿Ø¢-rl¿uXÆür¡ú!iÏGêQŸÇ¢knzï}Þš"	iýëõÔÛ¿ Ç
ÈöZˆ¿3ý§r2=“ïj QÌÞƒ!:bŽ]´¯Ÿ­xa =KÉx‹°­rlÑš¯3KŽ-ôì?­¦dÆ~®õÅëË³¨ßQ
(Ÿž]¯-<ÇRM²zö[!Ç¶ÑBÕl´Ž™eŸ>Ý§íZ»jœ÷~ÖëÂW^>Ï;—,hn‰u¬•³g]ëµÏKkæØºçÖ–"êqx\|Î¹•<uNÒÔß”Ûn¼É;tf´&À:f=5EÒj‹ìÝØ4Çk
96 @}hœóáî_zßEYU.—u˜j=ÇÖkÛ±êíÑiãÈ²Ô¸ ž=ªkÑýKìóŒzlË[hÎÑÁ1á_¼ó¬×¬9¶PÍ¼¾óû¹>çô3ê¾—-êw   Zå™iû‰gQk´Ž?.ªT³
9v:ÚÇ&í=Ð½æIÄ¢µˆEç˜ª¯¨ZÐÊ2‹žK¬Z5ÖqUw¤,ÊÎ±•]kŸM=«ÈZS¾^ô;Û´`ÞmÞ9Æ¨g#E×@IÐ>_Öqë©)’V[dæóãòMÐ«
 ~”¡)“õ¾“bÕøµÞgÇžc'¨æŠö˜öjƒ¡2sÕu¨÷Þ „Öß©VsL‘¬j´Æ±ª©CY9¶ÐëTí2ž?d}µh¼ª9öÕû»×«úÒëÍR³Z×ßÚó1Æ¢~G   uQ
€ÐÞž?*»Ê;ª…ÛG™ZÚ{¢ºuYîÇ4Õ<gíí“w
£ê"jŸ­ƒ,sp—CÇonZûŠ×¶êÍ±õ{¢šòªí©½„t­T³Pû$ª^`# ú÷z¦•çžpß¦õóµ¿S™èsª­SDM‘«¶ˆj096
@qh—÷·oÙå}GYªmQó„ÛKŽ yª©¬±È»[6­ò®Uµ¿†öV9ý”S¼Ó¨ÍaPž»÷‹¥Æ¿ºŸQ=·¬5êÊÌ±ô:•ï¶åë´Ð³ÕŒ­‘R¿?ª[÷™‡žm­_8ÿŽ<yQ
¿£   Ð6(SÓ8bË²%C·sû‡µãôïµïË¤'ŸüYÑs/µ·Žö©õ„ãókB„ú—Yç+;³ú*ë¸‰Gy„×E½&Í	V
ÍÑPæªgÊ`“V÷;kŽöjÑþ­1‡Xç¦šÑ¡1¨öm)“£>Ú½æE|¦ÝŒlÄ‘ÊÚõ~×>ÛÐßÍáWæ­ú'œu¶×eaèï@í5.òoƒõ>õ>{Ì1ÁþuÜ"Ðï}¨ÿ"
¯ @#¡¿Ï·(ÃÒÚ&/³RÍìµsçô(zÍ˜æƒh[­ªé]Ê1Cý+‹.}Wè¹Àâ©¯uÖ¼–˜½¼¿·ùÿÒxQÙµ®kkŒ
kÑQÏÓ•§îÛ´a‘7GXç¬ÚÊ:ç¡ýïªk†²×Ð{£~‹F¯SŸµ¬¯SïkÙsM’÷`Å¬™Wë^!íÜô»ª{Í¢Ç‘ÚãrÎ„	§k~…^{àzü§ž_é>vÖ¸q¿êwsJQs!
 qHòZ¾ç¡-3ì‘ÃCca­%l‹{¦C‰$-*o  (Í¯è}ý -¹¢žµKýo­ÔsZˆ'™[¢ù º¦}»uÿ^]OeëÇýüç^7m†žá^rþ-ó¥uÎzÊ9qÂ
^ÓvE#¿Îäó“¨ßÁÖKêYUòL¿‘?«    Ð±Ð8TsƒC9öÔgŸ=Þk          P&wßÒ+X{PkóÖÒ          ( íãÊ±µç×
 LTóÏÚ'Fÿ  -iZ8ÿöP†½wCÓL¯-          @™œ|ÒI•O÷5ÿw(Ç~ ß^s          €Ry}üøSCöæéÔ©“×
 4Ž:ê¨ÊÇ{›ÿÊ±gŒ{’×           LÆ{äðP†ýÉ¾=ÿû¤Oôš          ”Æa‡Vù`ç¶÷C9vÓü¹}¼ö           er÷-½*¡[^Õ¹³×
 T”c¿2jô±µŽ}døá^[
€ŽÀÑGYé|ü™ˆˆˆˆˆˆˆˆˆˆˆ
'96""""""""""6²äØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆˆˆˆˆˆ,96""""""""""6²äØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆˆˆˆ
ˆˆ,96""""""""""6²äØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆˆˆˆˆˆ,96""""""""""6²äØˆˆˆˆˆˆˆˆˆˆØÈ’c#"""""""""b#KŽˆˆˆˆˆ
ˆˆˆˆˆ,96""""""¶†\½cí_¶ïù¿k}öŽûÜ¶ˆˆˆxhKŽe{õ)çWzž}yP¯m=^wê…æqå'ãöÙô®¹çe'í±Q¼ùìK+Oß:°²àñq'nœ8½ó;³ßê÷Îì
%ý«ÝüÒÌËV<3ùôY:ú‰žwUúœ¥ÛoG–»}xã]Ì1û¥'þÚmˆˆX†äØX¶o=9î¡±ªôÚæµ_—ë*ßnÚûë¸Ÿ,nz»x·¼<ëJëšÇúÝÖ½ß}µvÛúÞ¾jìË
gê=|ÆAWõ¨¬{ñµ­<6Æo7íþü“Åkž[þÌÄÓ†Ýtû!•’c·?]ºn‚õùí}Þn{DDÄ2$ÇÆ²mí»Ï…WU¾Ù°óë˜_¬Ø8³ë©¸ý`v‹È±C~»ùowOŸ×
ãÎÎ7¸ç€ˆˆˆX†#n¾«¢ìÙ·äñÛÍÍÔÜíñw =¬£Ïµ Çn™c3¯‹’Ë¶5sìîg]RùÓšmë¬ãýqõ–dØåYVŽøÍ¶½ÿ±cÚ›7Ý|Î¥î¹
"""¡Æ—¿›»lˆ7N)Êo67©1Õõ§]äž[{”»}XdŽmõÃ˜³JŽeÛZ9¶òé/Wo^dKù¶îC¼~0¿eçØ‰ªóìíƒÜóADDD¬ÇG{ÜYùvsó¿xc“2TýïüÚ£äØí
CrlDDlDÉ±±l[#ÇÖúËÏ–5M¶Ž£:#=Ï)w_Il½[þyëÞÿ5ýÁ'òÎ
1/ôà°o¶íý»7&©Uó©UÿúÛ­{¾ñ~6MrllKÉ±±%ÇÆ²-;ÇÖ€-\ù¸ueØ·]xµÛÖ¯•c«¾µ2çwâÒÑNYñÌäÓ·¿úÆµÚßñ/w}d½ŸÕ*Ës
ÇàÃ¼óBDDDÌâ£ÝûUb2ì/WnzS{5j_ên¿îìëÖ®i©­­1Ï;³ßê÷õúïxýJrllKÉ±±%ÇÆ²-3ÇÖÞ
ÚÇê_õ'î½òf·,F;Çnþ¯m­÷wíUQ®ýÍÖwþf½¿ò»-{þÂ\{DDD,ÊÎüMåÛM»?M|¼hõhU¼¾,\Þ­²rÌä3¿Z³s»urllKûu¹®r_×[‚j‘×¾Zë3NŽ
ˆˆY%ÇÆ²-3ÇÞñÚœë­¾•o¾º§Ûg‘9vb¯s/¯X´ê)ë}–ïÏY2Ðë1ÆíSÞ¸ÎshŽö¬‡Gíõ‘Å‘½î
ŽuÈ±±£hý>‘c#"bVÉ±±lËÊ±×½øÚ…V¿ßmÝûWíËãõÅZFŽ-5ï^Yµõ~¼§üjÇ
""b½ÞtfçÊ·Ûöþ[h¼¡zf/Üý@iõÌ†Þxkå‹›_OŽGŽEkOŽˆˆY%ÇÆ²-#Ç^<rü/S2Í¿ì=Àí‹·¬[^uòy•´µ·ª¯íõˆˆˆ˜æÃŸ>Ækìž>¯‡×¾^õ
ì^u´5ž%ÇÆŽ¢õ;EŽˆˆY%ÇÆ²-:ÇÖÞ€šêOc~í-ïõåXfŽ-'ýöáNÖgéóå¦zíÓüÝ¼åXc{.½Ñm_”ªA¬:ÝÞÏµGÉ±=­ß)rlDDÌ*9v>µùŒ‡ž
ú™ö×>åßlnþòG¹Ý¦ÝŸk]`óŒù½¦ÝÿÄ‘0Õ|Vå€šK¢sþvsó¿?ßm{ÿí«µÛÖ¿÷Æâ{”y¾EæØ:+ÃÖ¿Ÿ2ø±#¼>êõŠ“Î©(+ßøÒŒK?]ºv¼öœ¯^ª}
ÿÜ´c×'‹×<·þÅ©kÿú¬{¡´WËÎ±uU÷<tÕ’ñÚ7¢×ŸvQEŸ[Õzÿ|ùú)ßlØµ_Ïcª^×w_¯Ý¾ùÀ‚·‡kÎùƒ×÷qû¬Wý­x®ïÊê±SÎÙ¿`Å0ý-Ó9èïšæÄ¹rë
âß/Yûü¾Yo×Ú}Æo<£‹Ûoo>ûÒ–ë³ù¥™—©v¨ŽÝò;wð\t¬sÓïšö}ý‘ÑÇhM¶~G½~U5ÇWõ5FÑ^ÙïÏY~Ÿjwé«f›Æ·­™×ÆØ÷¢kZæ1lœ8½³Îów
s—
Ñ?õ·þˆ1Ç×³ßb­ú¾3¾Ù°ó¯-Æ™'ÇÖw»ÆKžšp²îe~ø¼ÕoÝSÎŸpÏÐNeE²Ø2n¹Äú]ªý¬¾ñè3ÇÖó»uõ)çWÆörØòg&ž¶gÆÂ>ºoÓï¯ÆcººO
Ò=ª×O[z¿%96""f•;›ÊH”'©¯õ}ûnÛûw3^ÑÝ=FŒ£ûü68Ð¸°ögµOÞÖW_¿æÛÍï|ëg¢2A‡”gyçâYTŽýÌm÷Vªó½j•aë¾Ëë£ûýæÚÊ®is»g¹
Ž‰ßlÜý{íIßõÔÜãTûxþæ¸oÆÐ‘Gyíó¸oöÂ¾¡ã)/ôÚ–cËO–¬k]Õ´LkkÝ7½6x„ùü£çÙ—Wt¼Þò¡z>¡çI;eÌzþ£{(ï¼kÕßÝÛXŸé4uLe¶E?
ÞíŽ–:äV]Ð4õ;øåªÍõw£ÞuÐz]Ê®?[¶n’õÜ*M½GÊÙµ.[ÿ¼ã!"vt5†Ñw´Æ#ÞßÐï]¿ó=åÆEþÝ9u^7ý}®5TNc&e–\½e™{®ÿ<_9ë}–©1K¨ÍñÚ
¶¥ÊòC×Vsj¼¶±†ú—ÝÏºÄm[m–[Ïï•ÓÆŒMt¦ñZÏ5²^OeÈ±ã}¦_4üpï5·@ó
bÆŒÉ5Ð|~¯_OÝ{…®Á¦I³.KkwÇÅ]ÒÎ:ßO—7½b}®ò;¾äØqj~²²*oìà©±æ]êyºwÌ4crlC÷Õ¹[Vÿ´fÛºz÷Ï+"ÇV¾¦lÝêGsB½>òÚr_šqiÖg
A7îúHó(¼cV«Ì2Ô—2C¯mV•[Ÿ—´¬7±5rl=K°®¯7Ç%KŽ­,öŸ9³û¾gy}šw’¶geÿ´fëª"îS”o|¼hõhïxYÔç3ÏúÍµúzÝö^ÿ±¶ÜÏ¼÷{ø†¾î±;š
¿*w‹ù.3ÿŽh>D½cWieÒÕßÃšC¡ù¦ßmiþÊ;·_­Û¾õÞ+ovÏÅÒÊ±CsEÉ˜{ƒzµ®yïó®pÛV“ckl¢ùÆ1¹p­j£ùÏõ<Óˆ½žºGùbÅ†éÞ9…ÔØ+í€ö¬×ó
¯Ÿú×ï‘÷:ÓœþÀG†úþtéº
ií4†öÎ/¯Þ±±ãKŽí;øêž­c÷¾W³øÕÚmïì|ƒ{lKolÕ’tÎZGÙóœüsqêÍ±u/òí¦½°ú(s¿—ÝTQ–ï]£,jle\9oÄ˜ã­¾Š®1±tÔ‹¿
çÛM»?™ûÛ9¶uéÍŽÉ±“{þ,÷M±¯O¿—Öýq^•/h-­wlK=WÉ³Æ ÆØë’¸êùWÎÎrÝ³øÞ›KyÇGDìH*Ó÷·÷÷1Ö?7íh®wž«—cë{RÇñÎÅSsôú½ó
ií)­>cÆBm¥woP„Öõ.2ÇÖ>—ZÃXÏ<œÄ/Vlœ™u-d¢w=UNµ=¼sðÔ}Fm–­sVí”"ÆDªä½VKrlDDlDÉ±Óõæ×£²Ù¼óE¬±•æîª¦mãžj?zkÕ“Þ9YÖ“ck.
xÚ=˜æI{}äuØM·§æçõª1ºwRcYë3¨ ^ûXußðç¦Ýï†Ž£Z^{Ù9vÚ|ì—wKmëåØ-™nŽ{þ˜×§¹É1ëAó¨ß÷ñw
Í4Ï_ªÎ{Yç$c®K¢ê_{ýÕ#96"Jêùfß5©g?m+ÇV^¦ï"Ç¯ú>Ï³ß‹ê¨Y}ªÞ›×¾­ôr×"´®KQ9¶jæiïï½Í¢²ì<ó²Ó®§jÃ©ŽwìX?YÜô‚Æá:®ú.âY
Nµcîœëw–Qrl[ÕöòrLí•¨½;T?WØ³·jÉÂT—UkÙÝZnë÷|œg®³5¶ŠQó4×D5
ôO÷ÿéä{‰®ãVmÞ[×EsÁ­¶ªÏâ;¯ÊCÓæ¨êªöœökÑœhÕŽÔYµ”ÕV5ït~ikbu¯»/ûÎ©oÞêCï]ž{´ã_ë¶½ÿûmûwó–?`]SïZX÷MÉý³Õ¯
§÷ú”1§Ý›ës¢ÚÚVc}Ž’Ï“ê†¨ö»ÖÖ¦ÍMR¶Ð¯ËuîõKìßåz÷þFè=Õç\uõ÷My¼þ¾éó­Ú!i9‰w]µwWÚyè3¨ûZ=OÑµP†¢sQ;­ÇPÍ'k_®DrlD<TT
-Ý˜[s4–Ñ$Í+Õ¸õÏM;özíÔwÞ<×Ê±µw¯wÜ<ê»Ó;§Z·Lžu…ÕŸ¾‹¼ömeGÈ±ë©“¦>ßÞ9Õj]Ob~¿²ª½Wµ÷I}k—<{‘c#"b#JŽVëŽµWXß¡Ê
4Öðžï«– j7§åEŸ-kšœ<ƒ5kŽ­#«Æ¾|–ÖƒÖKÿ_Ïþ5ÆKËÚòÖcÎ“c«NsZ==;ÈzÍbUjÍK–š»ç‘æR7Ÿv‘u]¿Ù°ë@Ì¸RuŸ­óY4ò…“¼ö1þ~Ñêg
BýgÉÿZ#Ç¶ÞýNzm­û¦¼58c^ŸžkX¿ÿºWÑïeìšW}îtOn‡öòúHLÛsç£…+­»­uµÊ¶Uã±öþ3æ}×ï›uýÕŸÖ\(Ï÷ú‘}/º¦åïM('Éò9FDl¯êeÚsxý½
Õ÷Î­\cö¡Jû«¤]5×9öwµÑ{6&ç{ð´W…j¬i¤ÎMßOOô¼«òæ£Ïþ\ßW^ÞÞµŽ»óþàsýD=÷öúh;BŽmº~ç{z~®çýZ/™|ôÌfÝ‹¯]hÕ‚©öé[ºçU
mÖ{-Y>Y¼æ9CôùxE÷–sÔçVÏà[öO¹Ïòê¨è“ÆÙ/
ÞIýªÝ×i®„j‡hž´ö3ý3ï5×š7ÇV”¥£'œR­u^kÇ½z^íÏ¦ùê}æšW…ˆˆGrì°šãg}ß*_Í:^»ë’Rç+÷ú¨6vl¥ýÒ”1Åf¾ê7m@žzÌYslezZ
hµÑ|¡Ø×“Geä¡ãjîsž}ë¤ÆœÖØuáÏŸèµ—zÞj¯±{½×Cóx­óÓøÛkŸXvŽ­ûsës¡ÞkŸõ¾I×V÷ºORFzÃé·˜Ì»×ÚÕ:ßúÊì«CÇÓó°/Wn]¼&›všåÚ
V«ÚAÖ9ÇÌ‘K{.¢|Ãko©\Dû*%÷b1ïûü'Æž:ýÙ{€{LK]ÛÞžôGŽˆ]Òö›û|ù†©Y²g}ïiƒÕß…+óú¨56ÇþfãîßkíOÌs^ÕÔÖ¼
«¯íSÞ¸Îë£ZÍ/ðjŒéÙ­öPñújM;bŽ­ùïz½þ¤Öh}·eÏ_¬¾´Æ,Ëx9ö^KùõŽioÞ”öl(qd¯{Üµ¾¡óÖ:4ïÜ5¯àý9Ëï³úÑï¿w~µæÍ±CZç¥ýÏ½¶ˆˆˆÕ’cÿT
Í¶æ h]VÚ¾ÒiªÖ³êˆ„úUÞ3/7Ñ[i.Žæ®äÙFëÚ¬~óì©˜%ÇÖüvÕˆ³~þÀ¢UOysàëQ{…Ž«Œ·ž½ô¤•=êÞË›JÕu°®‹>^û4­5´Yçà—c§í§£<Ôk{
ß¤½á³ÎÛ	iíÑ©¿/^-oO=Ï
õ“ç+«¾îŒï·¥îå4o<æ}×}Uè\êÙ—¨ZåÙz–@Žˆ]ÍUµ¾×”»ÆdÂµzsô<×ë£Z/ÇÖøUÏ‡³Œ‰åkzW¬:y1ßEµêÒÎSjl¨ù·š‹“a–mGÊ±5SæëõSëà
«{¦ÖLËR'Ú»×’z^®¹J^_Õ>sÛ½æÜ‘jõ¹Õg+æ!Q÷H¯Ý|«Ï,Ï±$96""6¢äØ?U5XCß³sä™\­Æ.Ö÷¸2/¯}bÚØJsêOk¼dÍkùhášQ^ûZcsl×Êæ¤ò
®¬÷5Yµ2µ<ù}­z¦`ÍÉÉ¡ÕÞzRÏ>œº¦Öü_½öÕ–™ckž±U7QócÆÁÞ}ÓÁÏýþ)÷ˆ^¿fÚ|.­YöÚ{¶Ô¬Ðß)ïZ|²dÍØÐyi½¦wÜ,>Ú½Ÿû3Ö{ªµ²^
ÛXõ»óð }ÝŸCDl¯ê{ËÚ'@õòdØ‰š¿a}Ÿ)oôÚW›–c«ÞU=ãWÕB±úÖ\¯}µúÿÃê-K¬þ‚nÜõ‘êœè>Bs´†¬ˆñD¬!ÇÖxnÉSN®çºi
¤užYÖ¤Ýkéy‹æ{}XZµüu?”wÞÔ“·Ümžwì¾<‰äØˆˆØˆ’cÿX›¬¬P{‰yícÔœâPÿºÿðÚ&Zc«"jLHÕ õ¯|Ûk[klŽ­}î¬ŸÓÞñõÜƒÅ¨ù±¡ck~QsÀ
rèšíµ•Ö<Ze}.¼Êmrö°ÑÁù÷Y×È²rlÝ¦­ÃÜ=}^¯™–cëžÁÛ'2‹ªA:N=Ïj}oÎ’¡cLòxjý+ëxmðˆ\usòª,Þz?¸¯ADŒWù”õ÷T5
¼öžªïkõŸeŽ‡•cÇŽƒÒT½`ë'Ý;,óšº–Zãk@Ôª\Vk4ÆUÕv.jLYkGÈ±µOº×6F«ŽÞí]äµ—ÖõÔ˜V5w¼öi¦ío­ºï^û4uh=wZ9fò™^û'96""6
 äØ?6ívì¾gžªùjCû–xíeÙcUåYÖ9f­U“c[ù§ÔžDyç$dÑª­‘g_K«.±êxm¥ÆzVýrísãµiÝSæé¯Œ[u!Òê^jýhìý“uß”çµzZõq²Üï{Z¿§ûf/ì
›ÖÎZ°ìé‰§zÇ,Ò´:ÝE^'DÄŽ®U·¨qaÚš°Sß¼ÑkŸh9ŠzŽjåÎ«ÆLþµ×6äo/¿9u›<j÷ùòõS4ö(êÞB–}o
­×;K´ÆcYç[¦ÍÉŽ­-RæõÔýžu~Y÷%
i­»Óü¯mµäØˆˆØˆ’cÿXkM¢æäzmcmyN¾¹ù_BÇY:êÅ_yíe™c+iÕ‰Î3ÞðrlkŽqµõì=khŽªî5´oŠ×6‹Êårœ­ïüÍk—¨:¿¡k¤ÏTÖgÊˆC}i~wÖ{YdŽ
­ºš¿äÕ|ãÑgŽõúJ´î›ŠºNÔÚÐó­—ðÚfQïQèõxu®µgP°]äó”¢Ôó)ë}-ª>6"bGWãÊÐØBÆŽ+cL#ïõÚ&–c[õá´±×ÖRãÞ´ºwu»~ç{ªëUïx³ì{
i½†¬cÆ²slk&7Mšu™×^–y=5'ßº–1ûu{îš6·{¨ï~Ž½¶Õ’c#"b#JŽýc­ñoóŒù½¼¶Y´²ÈØšeŽ­äw-l¼‘–ck¥õßjUÝbïXyµòÀÏ–n|Õk›Uë.ö
 íCÖõ˜V]Šýó–õÚ†´rlÝ_kÎQ­#n¾«òìíƒ*ÏõÒ²ÆRÏ+´? îé¬×X­rnïœªm­ÛZßeÎZ¬¡œ_óÑÒÚXï»lgFÕZk_µ_—Ö®xíuõ}jýMW­
¯}¬iãØÚfeçØûç¯x8Ôÿ»¯/ºËkë©ñŠê[× ^µ¾LûKf“øÿ·÷&NRTy¿~û6Ž"ˆ ¢Â ˆ¢"( Ê®0È*Š€‚l²	ˆì«-ûN³u Ý
nî/ã¸€1÷Î;1wîÜûÆ÷Æ7~ÿÇO;%EqN~3«2›êêç‰xÂºÏÉ¬¬¬®“Ÿ<ù=I_Hß¾‡Ã¦M:Ç–¾çâÂ¬‡-“>ž¾õ(Ã¬™c©ç\}GÍŸÉ±±%Ç¾T­ÛáúŽ
ºÞåÆ	³nwmç§ÒãYmeÒc« y’QÇA9¶5×6SÍ«ˆclçRëî¹¶Y¹dÝ3VÛ¨jìçÚV”gK}ãÝ‡±Ú¦
ªQ¢kU«½Ë ú0q«¼;j-øÚÊ±UÐµÕ"·ÚFÕ÷lGP› ºŒò‹
»&i®¾µí8ô=/õ÷AsèòY÷±ØõeMÓZm£¨53|ã†°ë'cûæ¡Æ‘c§UÝ+­Ë¡u}ß_ù¨g¦ú>ø˜¹Ù&}m
}û\ˆ9¶oLZ(×Z¾ûøqƒµc§Þìê;êswäØˆˆXˆ’c_´K³6ÞïØ¸3Õfóm+Ì<Œ¤ÇV2®ñFPŽí/eU?eÛš»ðÒÃO›ÛŒêö©óîòlï—ãÌoãÔw
eî©jiøŽQØ¹W¾¬U×OV[Ÿµ‘cëüPMÉ¨¶¬­Û7ìÂùý£u~DÕ÷yÑß3ßþi#ß3è™ªÖŽÞS­öt‹hŸû°ÍïË|ÏUKTsÅ'tŠºþ("b1{hÞ²‡\;5wØjUß
:ÁGYmeÒ9vùÂ•ºú3ÇÎTk„ëÙÂ“+6õ×øIuÙ¬ï´0ê¹ªõ0·Ÿé•¼6(ÄÛ·Ž¹Þ#«­Lúxþ°çð¾¤Ž/ÖçÏj¦rlDD¼’’c_4è¹Ìž­1ÛG1h}0ÛJzl
%ão„Í±•Q+Ó²êekÍ¿°Ï¯†Uó®­ýKÚ(sÍÍ!«~võS±x]W«½2`ßÚ‰QêMg›tŽ­1ÿÄƒÌýðY[9öwÛ,³^KÒZŸÓ•¯MºÁêã2÷U|¬¡úŒNï;,¶l[ulÌmg¨k
PåÊ
ôlËÏ¼Pó™°¶ƒˆXŒ~¶në×ßJý»Õ6ª¾õãÂ>¿–tŽ]:ëýû]ý'•cg«û¬ZßcÑÐ±Wï¹¨•¾3µÆŽõ½æt_ÕA÷¤³½’×…˜cûŽ‡s\“>žIß:àäØˆˆX’c_4
h¼wFòÌ=í½ÛRÆmµOzl%ão„É±5G9s>²²Ø ßÿóîÃ{ó]'S_½òÚ4JŽ-/XÝÉÕîh}› ¶³Œt®ã®9ºùÌuM*ÇÖ¸{é+o^æY…
k+ÇöÍ±©MÃ|NO®ø°¯Õå…ëóÊ£ï­~BuCs™#/u=©Ï´µ­ •mkî¡rƒ0C‹E_½²£ï¯ébµªo}…°ëÇ%cozsv#Wÿµ•cûÔ¸ì­ç¥vM_tž/
[WOãS«ï´WòÚ sìQ]zôœ¡$96""³äØ Ê±­¶QÕw¶o[aj˜$=¶’q7¬[¶êd¶Qf­
¯1”Öû¶¶Fßü¢Ú4jŽ= Ý“Î5þäú7¦ÿ.¨­ïš÷Àœ%m¬í[Ž}àØÕhVí“83ÉÚÊ±}5«kÓ0ŸS}Îô<zØëiËvWYþêÄësÉ³U“ÿËM{Þ¶¶Ö¯·–.Ð<mk»ˆˆu
Ýï¶Zéú;¨ïd«mT}Ï¯iM=«­¬¯9v¶Ïµz¸&Óö­Ë“V÷hÃd®òJ^bŽôìk˜±eÒÇ3Éc@ŽˆˆÅ,9öE'÷|© rìñÏ¾h¶Ozl%ãoXë<.î¾vÑ¼`«>Ã'«7
Ê%3ËÖ—ëê™NÕ/¨
5oÄÚÏl}k±k>°¯òoW]+å[¯Å—c«Šæë©º>Z×(Ÿùà–W:Çþ©ôhµuÄe˜gfÓêÜûjãî©ÎÏ@ês«gN¬íºÔ”qÍg×ß­Å×ý.DÄBÔ÷Ý–DŽ­µw]Û
›k‘c_ªîáZß¿ªåeõ#¯äµA!æØZ/Æ·¿äØá$ÇFDÄB”û¢Aó±ãÈJ3
Ê±•çYí“[É¸ÆA9¶U‹Yã{Íñôµ—ZóÏÚË3%»'ºúVE«í•tæ‹#¼ë…ŽëÖßÙæÈ¢U»~ÿTÈg‚ƒôåØÊu­¶µamåØ¾Úãs_ÕÐj{%UMÏ}ï,~ÀúÌ…QÇ
ì²lõ÷vjïa©Ê¥ë»_8w¾·¶e©Œ€,‹ÕB˜6×"Ç¾\ÕLûfó…þï°psÝ¯äµA!æØAó±û¶}ÜlŸôñLòc#"b1KŽ}Ñ :j¹Î-ô©õÍ}ÛÒ|Y«}Òc+×x#(Ç¶
ÚJeaçÿÚ×‡\3fÊMV?Aúêc«î¯ÕöJúëzŸºöý³µ[†eÿ¾ê3úža ó€%9vðv–Žœp­Õ¶Pì}ÿ£©÷‡¿qMùÂ•ª–çùÃÕu½¦
Ïî:´!ßšæ:ÇuooýëÓn9±¼¤—æšëÙkÛÙ˜·´µ-DÄº¨ï™²cï¯}ÊjUêc'cÐZóúþµÚË+ymPˆ9öÈ'Ÿ÷î¯æÉXí“>žIrlDD,fÉ±/ª¼Ô÷«±Õ>Šš+ëÛ
–µFŸLzl%ãoä›cË‘ŸOiýB_?ª µ­~|úÖL{]v%Ý:yÎ®}WÖ—ý^)ïwýnP’(’cÿê7[Jç»¶£Z˜VÛBUy²žÑUÝÕêø©ôè1×kÌÖzæ"U{F÷?7ãVÝ
¯9w¨ò¬µú<„™…ˆX×<µ~Û«®¿{úw«mT}ë‰hž¶ÕV’cûUí1ßwX˜šk¾k}_[mÃêÛ¿BÌ±gôî|fñ\ùÉ¿YmeÒ×ZIrlDD,fÉ±/ªyƒ¾y~ú·ÚGqÅ¨I×»¶
£¹²V[™ôØJÆ5Þˆ#Ç–ª3 5!}})ç~µso³—kÇN½ÙÕ§®)¬¶WZÍ)Ñ˜ÜµÿÙ5}cæ|ç³§%ÇþÕ+Jz»¶sºdÇX«m]RóÇT+ÕwþÉ¨×L¹¨¿Ýª±~¦dÇ8ß~Èƒs—?d
õ…ˆX×,_°â×ß<=¿bµªïæÎió›[m%9¶_ßýfìí»6ˆsæÛ¿BÌ±KÞxûV×6~*=þ‘ÕV&}­•ä1
ÇFDÄb–ûR}ë‹©¦°Õ6ŠUKKžsmGõñ¬¶2é±•Œk¼WŽ-—¿:Ñ™ÿ§=°úO¹Ì¹Ó­Ÿ÷õæ»öamxbå‡ýœû¿¯ê‹t]ß3
Zƒñ‘Æ­Ìm„‘ûW×¿1ýw¾ãoBôíŸNé³çû…y~7.µn¬žÏpíG™"â•V5«\ó47#Îµ4'Ø7ßCëuXí%9¶_ïXîH¸±79ö¥ê=wmã³u[GXmeÒ×ZIrlD
D,fÉ±/ÕW÷ïìŽòVÛ(úÖQ+›¿¼ƒÕV&=¶’q7âÌ±¥æûú“š+57SŽë»6ÛòÖœ&Vû+mP
Àt½Õ_pý\ó¸¬þÃJŽý«/?ñœ÷ý˜Üó%³}]tá1Wù^³oÍÑ¤ôÝ'ÔóV[DÄº¦ÖèõýýÕ÷‘Õ>¬zÌûž?9¶_Õ²ó}w…Yo>h½z«mX}ýbŽí«Ó²yâ;wXmeÒ×ZI
ƒº”cG=wÉ±/Õ÷½/U?ÛjÆ µ\Âf\I­¤o¯tŽ-UŸ××§ünÛ¡•QçûÖIÒ:ŠuaíÙ‡J\û¯×¥uJ]9½æ­öy “ÙwXÉ±U×›zÍ®m}¹a×d«}]Tóô\¯WÎ
øJÎµësqZŸ¡Îš˜ò‰;ï7Û#"Ö%õ£g«\óâ\—ÁW¿$lYè9¶ÆK§[¿—„¾1JØg‰FwíÛØÝ§¯ÿ¨Yd’®Ôz¾}ÕÏ¬ö2ék­$A]Ê±wìf¶EDDÌ”ûR;7{
Ð[ƒùÀœ%m¬öa¬X¼®««]ƒ„}þ3é±•ô7¢Ž…“È±uÍfÕÂ=õÁ¶Qaæ¯¤Õzt¾¾6L˜y›ÕþJë{®Xž\±©¿ëßÏ|¸s¼ÕoÉ±/Z±xÍ“¾÷cB÷fûº¨/»û¼y\êšÈw
ì£ÞßBD¬~²zë×ß<Ý‹2ò©ñ©ïo¼ÆµVû´…žck|­ë ­#lýnœå®a×vÐ¼_açÉXúú/´[õ
]ýÿ¸çÈ!«mÚ¤¯µ’<…˜cûÖRQmG«-""b¦äØ—ë«¿ u£ŽÓ²ÐîIoý
å^Vû´I­¤«Y9¶ìÔä¾ÔÙ×ûú–Gß[ý„ÕOfZgÓÕÆ^Ãíaö‘‹:žÓûË;çÓ|Ø_Ê*:Ùê<²ú"9öEƒ®IÏí?v:jí›°ªVµž1÷ý\÷êtO.ì=³°*'ñÕ
¥ö=×®gÔUÏÚê;ª¾gßÃ®£‹ˆX×zEk‹Xí-}kæýwYrìt›/6ìšÔ÷ÁÇÌ6q47#ìüp}¯û®1Jg½¿ÕÞ2¨†]Ôë£$3\Õ¸ñe¦akŠÈ¤¯µ’<™cï¯øÔÕ×êÑ
So´Ú"""fJŽ}¹Aã4}oçšÿ¨Ý¿m?¸ÊÕ¯ÆQÖ'Lzl%}Ç Prl©,Põ°}ýË­“çÜiõ“VÏßúúQûÒÃO›}DQÞùƒÇ¿>²pÕcÖï†ñÀ¼¥í‚ŽE¦ªÑnõUrìK=µ~Û«
¾ãÿýîòÝqfÙª}³yÒìÆçWÿ5èõèó«íë9e=ƒlõÖñÏ¾èü›¡kIÝcqµI_géÞáó÷=jn#¬ûÞYü€k_r¹îBD¬ê;ÀWXëðª^†Õ‡Oå‚¾ûüªifµÏ´.åØéï0}§t
iÖÆl›«{f,léÚgùíÖý‹­ö™ê»Ý}ÿÚ÷]l©sKãc_F.%ÇÖ¾~³¥t¾«oÍGŠò>&}­•Ô1…˜cûÞ—3%»'Zm3%Çv{ºdÇX×wí¯ß·;ÆEÍ²õû§?Ø>Ú×gåÒõ
Ý­>2Mzl%}ûZH9¶Tþ¯k4ß64GtÑÐ±¡®4Æ÷Í¿?ük¬~‚Ô{î_m˜YÏ:®[Ï”úæÄf»îõi·XýE•ûRkÎÍÃÕõ¾ûª¾Èw
DÕÉPMœ÷=æõ¤sì´z=l­HŸúûæ{6BK}í2¯³tœâÈ
ú·}Â›·$qÎ#"Ššwíû¾ÉõÞ©Öø~WÙ6_¿3ûG«U×rì´ÿš·ì!=WiõV}ûÖ%–ÏE½ß¬ç}ýi®ƒÕ>[½¿ZëÞ×gÚBÈ±5	š×¾÷÷Z[}dšôµVÇ
m!æØeó—wpõ¥óœÙˆˆErl·AsOä7[öÎ
û¬¡¾›Ïî8¸Æ×—2¾¨ÙMÒc+éÛßBË±åÈÎÏ§táÛŽjªÖ€ÕóT_ïs™i¿Þ¼gÖÔÞÃÌ¾2ÕµÏÞ™‹ZÛìTvqåØR5¯ƒö]êÜV«¯¨’c_îÊ×&Ýô^è\ûxÕÆ
QžË–º¶ÕyãZÛ+JŽ-u ñÕÆÝSç
Ý0ê=:ýÔßCßëª{èºÎRž}byI¯¨×îò­ç¥toÀµª¹“Ä9ˆX(ª¾ÓwÛ¬ðý=þÓ®²M½ïÿì‹êTý°çð_¹Ì£¬«9v¦_o-] úÙQŽe¦º7 öçÿ2h;SY
}eë{6*­žQ´ê¥ëçãêuZÇ"m\9¶þ}ýëÓn‰ú}­zjZãÝ·š£u}Œ¤¯µê[ŽTûHuËÃÞgËçÙDD,É±ý¾;xôU¾ï[™ÎŸf½0²Á3-.ýNí~oû”2!ÍuÊD•å²
öJÒc+éÛçBÌ±¥æŒÍEVv¶.HÐœ¦L•IëÐ<OùGuéU³Î½ÆÓÚ]§h®jxõgŽ­óÉÚïÃVw²úÉErl·åW>j½'ò‡=‡÷éÙSz
N)ÛÖù¤ZG³Œl¨º!Ÿ¬Þ4ÈºöšcgªûA§Öm¹qÂ¬Û_ú…ÔÓ-.ý¼?Þ¤uÍ~)Ÿ×ïý};¹âÃ¾AÇÅw•V¯SÇcé+o^§mjÛ™íõwWû¨ëò ëW™ïsˆˆuAÝ3š‡¡
¿ñzö%(ƒÕýI}oùjK}¯GÍ.e1äØ™*ÓwÝš1SnÒ÷¶Ž¾›”wnú@ÍÿØ¾kÍwøŽió›Þ°óMßzò™æZÇPÛÕ>õ­Ú#úÞÔ¸Uc©ïXÕº;úþš.®ù–QÏßx,­î
i«æØ’—Ç_«sÚ•½+ëÖú2ºÖ
ÿkœv.K¦I_kÕ·»f­Ø€çgõ3=5ÿ+}ÏAÏ°êo•®µu¡ë©\¶ˆˆÅ%9v°çù¾o³Õ¸ôüÁãßZsy3UdíƒË¤ÇVÒ·Ï…šcKÕW:Þšö>þÚ±So[£#_ãÌ±k
ÖÛ¨®×çs±™’c»Õ{¢kCë<ˆË|rì¸Ô¼?k>••cÇåñ%ëºYï"b±¨|2LVª±Â©¶:¹bS©úwÖš#R}çZ«Ørì$Ô3Ö÷g3ú
÷Î{ÍGå|?‹;ÇÎV÷Tt¥ûýÊá­ûù™jN‰µ?.“¾Öªo9¶Ô½ëý²ÌuÛˆˆX<’cÛjdÜy¦®”“ZÛö™ôØJúö½sl©ÚAÇ^uÃ^hNuÐÜ¸Œ3Ç–&Ì¼Í·­¯6í
žnµÏUrì`kž#˜ß—W:ÇþnÛeaž­[µB­g¨‹MÍ­ “eGUód£ÖÄÎ´Ðsl=Oçª×U[j<˜Ë<ìl5GÜÚV¿Ù|`¡æø~žtŽ«QÖzÏ6ék­ú˜ck"Ý‹°Þ·
sÝ6""äØáÔóLZëÛún
å¾Š'ödn3È¤ÇVÒ·ÿ…žcKÕ"z¾ÚX:3ìu‚ò8ÍSŠû^†Ô|’s–´Ñz€Ö~D1èZ#—:6a%Ç¶U½Ñ/7íyÛ:7rQÏë¾[P½}=£©Ïdæºq©Œ^sm¢|¶ôìzÐ3ð¹ª
ç¢µžªµˆˆÅªj)Í¡ì…ñ«ê\YÛ
²Ðsl©¬Mµ¨¢Ô‡ÎWe{ZãÁÚ·°Ö¬/¿aç›Öv-ußBÇ4}?Ø÷{…–ck<¢šdÖ~™ôµV}Ì±eÏÖ¤~Ø{¤Üz}æ³mDD,É±ÃÛ¹Ùƒ5™KÐz‚A¦kF]gÄeÒc+é{u!Ç
VV§uë‚Þ«vo¶ƒ:<U“çúþ§=w¨ò¬jfk>“öÓÚn.ªN£kÛª+—äÜTrìðNè>
eÕ—£òhý]Rhk›™ê<Ð5³ÖT¼ðþ|om'H}&ÔO¿6ÍíºÔßDÍ<S²c\¾ó•_ë™Œ°Ï\
"³»êïs>ß5j«yÂqü]­9v¦ªÃ¶kú¢{´CóT#C™yãAeÙªi–Ë~«êN?ß¥uÔ}¿WŽ­š8:×òyvMï•æXû`™ôµV}Í±¥Ö:ÕØz/“Ø6""Ö}É±£«kå
„ÊI­Ló—²ª•ÍhÝ6}g[}‡UómµöI¶š7nµ
««©y*VÛLµ¾¯/«m>êzË·Ý´ajd«ë³Í[öÐ7[öÎU.t(;ÖÚ|š'«¬1ÉYªßº’ëß˜þ;«}>Žìü¼ó˜kÍT«mm¨Ï‡kÿú<ÐÉl›”ú» ã£úgw\s¾¼ê
œï\R– k^eªQ¢µp¬þÃ¨sFçæÎéïÞ­¿kÖOÊšÏî(ß¨û:ºþŽãÞ\Zõ•^Ïç»mû—èohÐ¾èxés¨Ï£rù¤?_ˆˆuQ­?¨¿«Qê
ë»@ÏŒeg™ùX:ëýûÓõ¸3ÝµÙ6ŒÓúmàê?ŸZ~i»6o[sÏUßÁ55šs¸7 |XY¢Ž«ÖV´¶‡:¶ª}f5ÿZ¯Os7\}¹Ž­Ôµ‘µ™îŸýþƒÙ}h»éïp­©{¾û.õ
¬[œ×A:®×ª}·Ú†Ñudc;½ç®¾õù³Úf:¦[?g?Û&Ïojµ £žïPÖsy:wÓkªò¬""’cç§Æ[º6ÐÜÊtF¦y¶úÿAkÁcq©l[cn=µî»®ùž¼«­Ù.
5Ã5Ô=—8æRaò>Þ¤uªû½íkÎ%©ÿ­³ÚÅ©ÎiÇé}ú›¦óÜj·zíýÛ>qÉ¾<×êá+öCD¬Ëj¬¢uÆõŒ 2¤WmÎ§ö¾ó^kÕcÐ«Ÿú®¾'5_[s4þ×|=
¤ûªi5—[Ï%ê~µ2»¨sAâ´&‡:öj½ÇÊ5ÇBï¹îIkßu/8l]°ÚTãe—Úo=–yÎêxë5=Ý"Ú³¢XXêzZŸ%ƒón˜žg¢:œÿây‰ˆˆWNrlÄâò›-¥ó]9vÅâu
]­¶ˆˆˆˆˆˆˆˆˆ…(96bñ¨9V¾gò4ÏÁjˆˆˆˆˆˆˆˆXˆ’c#'V”ôveØ¬‰‚ˆˆˆˆˆˆˆˆuYrlÄâPkjý=WŽ=óÅ±­{ƒˆˆˆˆˆˆˆˆXÛ’c#‡ZëÆ•aÿTz´:½þ
;""""""""b]”±îÛ±QËÔùƒÕråØ&Ì¼ÍjˆˆˆˆˆˆˆˆXÈ’c#Ö}×Œ™r“+Ã>¸ú¯›=h¶GDDDDDDDD,dÉ±ë¶ªòÃîŠ#®ûø’uÝ¬öˆˆˆˆˆˆˆˆˆ….9
6bÝvJŸ!)W†-uxÊlˆˆˆˆˆˆˆˆXè’c#Öm¿ÙR:ß•aëß­¶ˆˆˆˆˆˆˆˆˆuArlÄºëàŽÝ¼s±gÙÐjˆˆˆˆˆˆˆˆX$ÇF¬»®;õæ/7íy;ÛSl¥ºÙV{DDDD
DDDDÄº
96""""""""""²äØˆˆˆˆˆˆˆˆˆˆXÈ’c#"""""""""b!KŽˆˆˆˆˆˆˆˆˆˆ…,96""""""""""²äØˆˆˆˆˆˆˆˆˆˆXÈ’c#"""""""""b!KŽˆˆˆˆˆˆˆˆˆ
ˆ…,96""""""""""²äØˆˆˆˆˆˆˆˆˆˆXÈ’c#"""""""""b!KŽˆˆˆˆˆˆˆˆˆˆ…,96""""""""""²âÚ«®NÝsãˆˆˆˆˆˆˆˆˆˆˆ'
@RL}uÔUÇöìœ‘íŒ1c¯¶ÚBÝaH¯Þ)×û¼nÞÜæV[         €+É†E‹îÿödåÿ—í¦÷ßÿƒÕê³Ç»Öõ>Û½sºÕ
 6óÇ—R.;èÒj›+×^{mêÈö­ã|ÛÕÏ®¿î:«ˆÀý-îõ¾ÏúY’Œ2´AmŸc   Pœ¼ûæÄK.h•íØA/5°ÚæƒÆ¦®íÊŽmÚXÍë$äØõrl
¨+øÆ-Òj›W]uUêÈŽmã}Û<Suüß“ÎUë#x å;æúY’ÌŸðæ µyŽ  @ñòÉá²Ã®1Åþ %/Zmóá¶[oõŽ¥^ip¢ú•‚»~@Ž
u…ÚÌ±4h:°ñÃ¾í}Q]ù¶-[YÝ@c  @1@Ž]{c×È±   ®P›9öÎU+;û¶õeuåt}¸£Õä96   äØµ9vý€   ê
µ•c¯Ÿ?ïnßv¾>QùŸéô˜Õä96   äØµ9vý€   ê µ‘c/zë­›}ÛP†= {«Èrl   (È±krìú96   Ô’Î±§¼òjC_ÿßœ¬ü¯Q/´º€
Ç  €b€»ö Ç®c  @]!É[µ²jWßú÷	C‡å˜¿!Ç  €b€»ö Ç®c  @]!©û…gžM©fˆ¯om×êâƒ   ŠrìÚƒ»~@Ž
u…$rì®wL}Y]ù¾~O™r‹ÕÄ96   äØµ9vý€   ê qçØm[¶R†ýO_Ÿ¼ûî½V?äØ   Pc×äØõrl
€+Ï·ßž;è¥«gÏnz`ã‡íÙ9#í…qný»ê7ë÷ …›oº)5´wŸÔÚ¹sšeîsù¶Í£¶,]Ò^õ¤›6nlu‰8sì–Íš§ÎTÿw_z
Vqpýu×¥ú>Ý-¥yß;V,ìðö-cÓÇòÈŽmã·.[ÚqÁÄI7öx¢sêª«®²º+ êsŽÝ¼É©‰ÃG4ÐµXÙ–M#ÓçÂÁMëïÀ€î=jÎ  €B@c=QÆ
Ò@ëeKýïg{<Õ¤Q#«ùAûÕóÉ.5û<kìë×è¿ƒž{>u‹ø§/Ô÷Ûw¬ï»»…Õ42W"ÇnÑ´iªw×§j^ß´Q¯]õÖË#êš®Û£R·ÿþ÷VóÄ¸þúëSmîm™z¨õý5û—V
ŸKýÛ•Ü·L®½öÚÔ“:Ô\ëøéúQ×¼ú›âÛGrl
€+ÃÕ×\Òxîä¡[}ãL—'î[¯œ«aÃ†Ö&B¡\037O»sÕÊÎ®ßW-iå«_Ÿ¨üÖ¾ÊÊÒÝóŸêøˆ««ÈÄ•cßyÇ©Ï=ëë«ôƒu=4Hnˆ¯¾Gôí—RfT—;Û¯ª«þS÷
è!k—¡6®÷Yjü˜3ÇŒ½Æµ½=kWwjW9öÝwÞé<ÞÊ£³WŸå©¯Žºê£²ƒ;­s }èó÷}"
a4ÔXéteÅ9ë;ëóãßïZ½ª«²Ì8?dhÝçÏÖ—E+»SÎùYÅ‘Ïƒö÷LÕ±ÿ®ïXe€qP9ö›Ã†G>Ö¿×¦¶umäØ³iÆsÚÿ ×'O;ú•æ¤(×N‚o¸¡&óÕ
øUŸÉ÷o³_ò«UÿGcO½zMµ5_æ¦o¬¹®Þ_ºÒºžÔß]7hÎOúÚ—   öÑ=û0cÿ
5.Ü³—µ)“ç;?éçjÜù{#EÍÜ3Õ\ã|ÇGqäØ·þî–Ô'GÊŽúú9´yã°$3l]Ç]Øþ1ëxYj?Ýv›µ¹ßÐ±¿0®ýo®¾4ï×j5}Û³jŽCŽý‡V÷9_ƒŽIúwtži
þ‰>Ë¾m©ë]í
@\ŒìÿB^cefš‹•*umãµ¼ä÷t_ó/¬}Ëö›“•ÿ¥ü,ßg Š!Çö½†ìc­y»vLµŽ­ëXë:Assó!É[c6]¿å:f“Ê˜u=gê}Ñ±³¶Ö/ª+ÿ¡gÿn¸á
zkó9¡9\ê?h]¢ uOlîøñ×½?uÚ­®Ÿ“c
ÄÆÂºo}OGQs\òÉ‡­[÷Ì÷•¬ïcíGu‘Ï¾æ›cëøŸ,;¸=©ýBýj¾ƒuŒ¢¨LôéGµ6ýªãêGs!ßï³¿ºÖumKÙë-7ßØ¶>äØ÷ÞÕ,¥ëß¶¢¨k¿$ï½
@ýFs ô™õ}V+óÍ‡­[ãWÍOÍ7çûøpY™^®Ô‡[Ç'Žc­÷4ŸcTŽ­1²ž/µö?¬ºÈ÷zÃwý‡ŸWVü÷óÛ´I}z´ü#kÛùHŽ
/—}\~h¿õœ‹Uûö.Îõz
(Ç~¦Óc©ÓU¿XÛ¢²TkŸ|ä“ck¼¨ãäk¯Ÿå;¦ô¡÷¾ú@éjëØä¢rá^]ºZ»Pƒê©øžßÓü«}ª÷—.smÇW¯&“bÏ±5Ÿ'×¹(>uífí
@T´žH>sP}êÙ¸»7±6ï%(ÇVÝ“8Ç¯'î/Éõ~q±çØš_´ÞLT«ì[›ë±N"Çnw_ëXÏ¥´šËOfŸdŽ-u½0zà k7B¡sD5ñ¬mæ+96
@|è9ªÊí¶¾UkD54+Y¸ •jËiþËÕ•ÿÃj[YºgA.5³}ã 7¬še¹¨>;ý!·ád®9¶òé gJ•1çzÀBýj.OÐ1Q;ÍÓW½ eœºþR½
ÕŒPîûiÅáO‚Úë9À{šÞeíJ Z‡ÓÕ‡Æè¹œ?.|®ÔÏ,Š9ÇNRÍ
ˆ­õ´žH¦_VWþOåÝòÂÿþ_ÖïË¿ûM®ÏƒùrlÝGÏw^°K«&šbÎ±5~NâX«ö¶µO.âÎ±Û¶l:£×ù¯zà§Žý.lf«{9zn ’Î±¥Öðy¢}~ËÞk}ò(kå#96
@|èY» ï]e˜Akí)_ÔÓGwnŸÔ²oo'rUíß»DcL­y­µæ´žtó&w¦´†‰ÆùŸ-?Ô>×zÌ¹äØšÓtü5†Ìg>DÚvÐ{¦ã¤5¹ÃÌ;Ñ±Öï{²oÏ"«ô~k
íÉ8PWÿºÞ±ÚŠú˜ck^½jžk­vý-¸ãöÛk>WêGuðu?ã‹êÊ¿õ¡{IÝ
€ú…¾O¬ZØN:¬A“F—gÑ-š6M©–­µ†±æ:çò<œ/ÇòLÕñ¿iÌ½ìí4¦ÔXvå¬YMôo_VWþ3¨m˜ºh.Š9Ç{¬5/#}¬u
`ëêªÿÌ%ß3ÇÖ{­û,Aû©Zàš³¬ñZ6ZsÑ[oÝl»}Lso<¯¹1š³¢ç_µoº6Óº›WÞww‹šÿ­5ß=æê½ë×v·Ö„Ôß€\ç¹h{Öó‡:TghÊ+¯6Lï«T]
]#éüÑ\¤0÷È±
âá¥ç{zÇ‘ún×ÜÛ(hž®ï¾¶æD<Õñ«‹K›ckµjq«®¯…®GV½óÎA}å2ÿ&—{ËÒ%í}m4Ï9©[hÌîÛv.uÍ5ŽÜ¾|y'_ŸCzõ¶º¨Á7¿[µU¬¶ZÆ7Ö›“×§
[Ù´Ö«	³¦Ž~GçMPï[ý
X­é¡9ªQÆ¯z^HÏŽùú[?ÞÝVÙDÉ±õl£²» ¼0½]ÐÜÑwßœ9\­o9¶îÉ+ƒ´ŽµrÖ cýÎëã"/úgŽ]¶eÓß¾}^Yñç°ëÓè8¼õòÈ†Ay®ÆžV?Ù¤¯ßtí§¹,
ê#Ì3Ùè½˜9fì5ºOãÛ¿¨ç‹Ð5ËÇ‡ËúúÔ{¿túôÛÂÎ¿Ð5ÓÐÞ}jæùž Ç
È}‡ûîåk<v”êŒùÆ~ºonµÏ$LŽ­¹­šG¾ÄðÎË•š£cµÏ&jŽ­ëßïë9Ù|ê2Z¨µoL˜ËõZ&¾Ú
šódµ¯úŽ‹æäƒ®;\ýž®¬ø9ì|Žúcëó»bæÌÆaÇï™h>“¯_eº&  È•Çz(åËŠ4~ÊeL¨:Ã¾ šß ¹›Q“cÛ³sFÔZvªïæëOó
¬öÙÔ—[s“£ë‰ÃGxµ2P«}6qåØºçáÛ/]×årý k>_–­ùn»ÍêâT·^óÜ5Ï:º>ÜÑ{mY¹w÷\«}6š‹î;†º&Èg<¯ûI®~É±
òGÏHù¾Ãõ¦Õ>ˆ ¼M9wX‚rl]o„CëBoÌ¶ïÃ"w%Ç:>ZkO5“Ä7oVóTry~0=ëè;®mîmi5¯™×ëk¿uéÒ‡­öAøæzkÎ…Õ6M±çØ'ØšËœ™LÊ·n~Å
×¿žÃ
È­¹âú~QÞ¦ü,Wk×Î›•Ü¼qˆÕ>“ [ãWÍÝÌí‹¯ï¨µEŠ=ÇÖ˜ZõÏr%èX‡yV-“¸rl_-=C—K†F×\¾ûCùŽ¿ã@ÏºöMór¢<Cªë?_-<=—‘ïœßõ 96
@þøÆAaë¡,ÔW‡:Ê}s_Ž­{åç‹Æé®þs™Ó6ÇÖ=ß8Q×6Z·%ItÜ\kd*;Žã˜ w]¯/ì:D¾¹òªS—Ëaá]3ôÂø7Êë.æ[ãú°óÒƒÐ5€oV=kµ
p¡ûá¾ïÁy&D¨ž„«oÛ¢ÔœóåØª;oÍ¸g:=æ=½ºtµš_B1çØqëî?áÝO+£GŽôÞç;IøêõèQÔÜ>n|×/R5«Ãâ›/-5ßjoAŽ
Ê™|ßá/>ÛÝjŠñC†:ŸÇÓµ@ØçÓ|Ù£Æ¬VÛ0LùŠsNºÆIVÛlÂäØšãË°•#?Ú¶mÐ&bA×y®í«Ž„Õ6,zvÓµã{vÍ²ÚŠ ùÂZkÐjïÂWï¤´d}¤‰:ÅœckÞ’Õ
6,G¶oçÚ†Îó|çü
@ýdÃ{ï=àûþŠ£nUÐ3ašjµOãË±_ðG«©‰î7ûÖúÐXÔjŸI1çØqkÍóõÕá›1fl¤.Ž»týÚç\}hþMc+Ý«ñeÅ¹Ž¿ãÄ·¶ëÀÏYMÃWS3Žy\‚
|÷¢ãš)®½öZïØOõý¬ö"é;h^CÔ9VŽ­92AkÆègQçÑäÂ‰ƒûÖ»¶ŸÏ³ˆÙøÆý:¿¬¶iª÷—.‹ë½W=pßýƒ¨õÉ±Ã¡5_}ûeÞ
@šSÇŽ|áú^ùpÑÂÖVÛ°ìY·æY×6TwËj›&É[øž©Ü¸ø½6VÛLÈ±m|ë~ðî»‘ Pä›c+§öÕÃxoòäh-Ý¹íM×6ÂÎEI_M¡°ïµož|éùžVóPc
$ƒ¾K]ß±¹Ô…Bcž|¶“tŽ­u{|ã™(µ&DPŽ­õI‚ÖO«ßI²®ˆæ¹æYä²^…ïº"líFÕ>÷§¨kúžV¦oµÍ†;ºäÛ×1|Éj  p
ºßîû^Ñ8+.ô\¢kº~Ó7ZÍkH:Çöe»×¬~Új›	9¶MÅ®“]ýo]¶4ÒI—oŽ4þÌ·¦s&¾µDõ@”:Ôq£mûrì°çŒïz@ãß¸æq‘c
$ƒêK»¾c£>h±ìí\Û	››&c£ãÌ±U÷Ú÷³lõÞhþpøêüE­­†ª}{»¶f­G¡ñäéªŠ_\}D¹¾Ò¸WãSW?¹\ãc‡ÇwÞ¯›77÷…¸
 ^2¼O_çwWÔuÞ,t¿Ý÷]¶&rÒ9ö®Õ+»¸ú:ž#Ç¶ñÍÏz¬óÍ±'xÙYQc-«mîiz—÷½‰ûy:=»«>UwQuZVÎšÕDkä¨`õþÒ•zoOWû‹ïùÞ´aÏ_v~U
È±  âGëäùÆª³'Czõvn+lýé¤sle¥¾cgŽÕOŽ”Mb==Û;VúÁºžqê»We.µÆ³®>Tƒ%ìû£¹¿®>”‘ç2÷‚;<¾Ú0Q¯ý
|ceÆVÛ¨|~üèY×¶ÂÖDN:ÇVý8¾_É±m”3Çq¬óÍ±w¬\ñ„«½æXm£â«¿žï1mÒ¨QjÊ+¯6ÜW²¾jzûÎ¨†=g|ÏÆÎ?>·Eäc  ÄOP-
ý,N:¶i“WNœtŽ-òÙ¿L¢äØú]ßºƒi+÷îžçü"±eé’öÖ¾%mØ¹L"h½™°ë-8¸ƒ«½ž°Úº Ç®ƒ]ÛÑóÐV[
€L|kÜ•oÝüŠÕ6*¾gÊ4Ž²ÚŠ¤sl_&5[%Ç¶‰ëXç›cûjÉhn¾Õ6*¾cºdÚ´ß[m³ÑœÕ*©,Ý=ß÷žçk˜s&èœ‹³.96
@ü­m¶î_X‚j*K³(Æ{ñ”)5k±èY:ßš‹i/\Gôcýñ4¾\±6’c‹C›7sõóyeÅŸ­cãËœ•7ºí¶À¶>È±Ã£:®íèÕ
ßš+š§jµÊÁÍ‡¸¶¥·ÚŠ¤slßx j¶JŽmS(9¶omÏ5sæÜeµŠÆi®mEý¬ îÙ+õYÅ‘3¾÷:.Ãœ3Ak<ª–J\c
Ä/–VÛ¨S5ž°(¶;{ms­…wa|÷yP›Õ³g7õm3*G¶ogícÒFÍ±U‡Ä××ÀÏ¶õÕ4ÌçúLuü|ûóøCYÍó¢®åØ¾çžu-fµ
ÈÄW«Jù Õ6*¾û°ÊÒ­¶‚;rì‹†Í±}¯3Îši|÷qÂÖ‘Öó¤ªsí{sQu²UWÐõ³0çLÐõoÔk¾ È±
â§ÏSODŽ&Ï,¦{Ûòe¸ÚiÎºµäÛ£Ç„ªÇhá›_Q›†yß³QýnW_Aózõlo]˜';tð53ñeÀ¹¾¶(ø®[£®ñS[9¶ïšMµ^¬¶
™hp×wJ9¶¯&rØç‰êJŽí›ã{%sì¨Ç¨¾äØ§ŽýÆÕ^×VÛ¨øžßs^èYÉ#;¶÷½¿Ùž®¬8wlÏÎÊ½U3pâð ^xæÙšùÓ-š6MÝ|ÓM¿õ­,ØÕG˜;èú×z¾3
äØ   ñS(ó±ÃÔ`(–[ë‘mÛÖ»öˆüædåéÙ¼|ñÿJ.huûïŸª s©ù­ßw\Z6kîlóî›otµ9yèÀVgƒ´¹·åË±õì¨k»QóçÚÊ±óÍ
ÒèûÛõ’DŽ½uÙÒŽù|Õ•Û7¿!L^™äØ ›cz´ü„«}¡åØzöÔ÷Þ¦­Øµcê„¡ÃÜqûíVw—TŽmµ96
@üÕi¸åæ›­æ‘P½1ß¶êS}ì0÷ù5÷À·¦¡TÎýX»vV7Ø´a«ï$®ãäúë®óæü.ZØ:û÷u¼}óVÆüñ%×&Btí5¼O_«y^l_¾¼“k»º¶±ÚfR[9¶®ñ\ÛIbM.
(n|™«jXYm£¢ú	®m©>›ÕVÔ•»b×ŽÉ®~ÂÖOÉ• 5ç£Î	¨/9¶ïu¦×Ý‰_Bë5k®‡æ˜øÞ[­¤ú|¹’OŽM]  €ºKÐØQã8
ZS#Lf^,9¶Õ6Í”W^mèëCª~D>k‘h}W¿aæW\i¶.]ú°kß¿¨®üÇÕ×\Zv¥_·g¼9m.óÁ³ñ½?S_•ç(ÿum·jßÞÅVÛLj+Çöešçfµ
Èäð¶-£]ß)aköFÁ—ãiÝ «­¨+9véúµÏ¹úÉ÷Ù5­'âÚ®3Ï%“ú’cûêÃ‡m…ê¥«]ÛrÍÉd_Éú>¾÷U5ç6lÔÜ$Ÿ;hWÔk¾ È±
âçÚk¯­µù¤Cº¶£ºÅV[Qßrl±ìí|ýH­©õ!saÁÄIÎZºÞ²Ú^i‚î¿Œ2ô’ñ«o~Q\kf~~üèYWÿ%ÞmiµÍßu±®C­¶™ÔVŽ}º²âg×v’Îû
 øð=“¤9žVÛ¨ø¾oUßËj+êJŽ½nÞÜæ®~NWUübµÍ‡—ûõ÷Žé´¾IêKŽí[{ñèÎmoZm£âçNm´wü¦9%¾g'«÷—®ólªE>9vÐuDœë´“c
$ƒo|²þÝù÷Xm£ ûö®í„ÍMëcŽ-v®ZÙÙ×—Ô5›îGDÅWNõLn¸áz«ù§²tÏ×þgÎºûÎ;Ï4ê56¾½QP÷¡ñ£“|WóÈ}ëV.œôÖÅEpBP9v£Ûnó~¶ôœ
@ÞyÝ=Îúªºê?­¶QPÞ¦>]Û [›¬®äØÊÿ|ßÕaž›Ì]o¸¶uÝjQ_rìµsç4sµÿ¼²âÏVÛ(¨–ŸïœÐu„­{äk§¹ÐqOŽ4+{>L>c
$ƒïyÉ¸s8å­®í„ûÕ×[ÏÝÝ¹}’¯?Y¶eÓÈ¨s‚²Å±ƒ^ŠÖÙ`hï>f6ê»wrhóÆaF÷¡ñmãë•ÿ7©û/>ÛÝûÚ{uéj5¿„ÚÈ±§zí*×6” ÄQÛ
êÝÂû=è[ó9T¿×·°µ}ëJŽÝ±M›Z{F3ßšš¯`µÍ¦¾äØz?|ïUœ÷4¦ôm'h>ˆ÷Üã¾|ë‰¤É'ÇÊü]í­z)Q Ç
H†cÆ^íúŽ3‡Sfê[ë#ì|–úšcÍ‡8Yvp»¯O¹mù²G¬~²ùøpÙAW_ª…gµ½Òhì«U¡š•z¦Qõ²]?ïúp|%™ƒ2å¤î”~°®§k{šg®s% µ‘cû®Q“xþ
ŠÍ§Ô8ÕõÝ2sÌØk¬öayê´[]ÛÐø"ìüº’c×<ëå™{^¶eÓ«}.(umOjÎ±Õ>›ú’c­3®:-qá›«¡õÓƒÚù®ƒT1¨]òÍ±5_ËÕþ“#eÇ¬¶a!Ç
H†»7ñŽ…Þ=æÒEórÄw Ü-l}çúœc§SÇŽ|áëW.zë­H“0–Ï˜q‡¯/å³…ÎÒéÓosí»jnø®ë”Ý[ýFA÷z|×Ò‡½Î ËwÜá­)¢u¬öÙ$c­ï:²ÿVs
'¾*ÎÙŸ-?áÚ†ê[mÓÔ•[ø²A;4'%n‚ÖÑ¸?*õ%Ç¾óJÏÙZmÃ4_d×ê•]‚ÚÎ?þ:W;+ÿŽB¾9¶êð¹ÚK]Ç96
@røÖ¢VílÍkÍÍU&æê_ëÍ[íÓÔ÷[èYYÕôõ­9ï£^huóš£{
®¾ôÞG]_',Êvï½+ò4›ËÐûâË}¯kÒˆ—ãy 1ÍSò½'S^y5Öíí]¿¶»o[ªßaµÏ&É[×@•Üéîÿø¿SS
råÍaÃ½õœãxîj@÷ÞqáKÏ÷´šÿF]Ê±ƒŽéžµ«»Yí£ 1œo-@Ar©?QŸrl_«kû[Ük57™0t˜÷\°j\ûÎ£Bª+TÃ{ëÒ¥[íÃ@Ž
Ak…k¬eµb×êU]}}[ã LÈ±å±ví¼Ï}Jåºª–}%ëûøúÒüÞ¨u*,š6nœ:²cÛø(cõ
öo(yÑ·ÿÙ~Q]ù÷|ïË¸ÐyìÛæ…k´ÆU«sôÀAAÛù\î;$™co\ü^ßþj.½Õ
À‡ž‡òå º‡šÏ½R>­8ü‰«ïÓU¿DÉâêRŽtL•æ2GÚ‡Ö*ñ6-^ÜÖjï¢>åØº6ñ=Ÿ§œ4Ÿç5žôÕÖ3 Vû š{Q®ý\èuéœ÷Íc
›cÍÙqõ¡ãªçóá…gžMéo…ïý±Ú
@0¨‚oÌ¡ñ‚Õ‡ßØZF­@Ž}‘Á={yëKe§m[¶²º©!¨N…TŽVÍï¶º1ùýï~—Z?ÞÝé>ÊX=Í¹òí{¶Ú¾Õ_®è|ömWÏejÞG>¨‡oÌ.WÏžÝÔêÃ…/ÇÎ'ó
×ß“’…ZyÇ…q}Ü÷G
 þ¡ï>ßwž_Ê5Ëó­C!£Öß®K9¶:¦z–JëAæKÐ!Ÿ&õ)Çš7ì;Ž:ÆV{úÌÞ¾e¬¯ß0õ·uÝä»N9¶gç«½6÷¶LUíÛ³È·o2JŽ½xÊ”[|ýTíÛ»8—{aZgs
ÇŠåí#96  @<<Õñ‘ÀltÅÌ™Ã^è{?hŒªšÊÏ¢@Ž})ª!áÛ†Ôƒ µÄ3Qí‹ ¾47Gc½¨ó}u¾t{´SM-Œì¬<êX=ßuK¦:çò[„ÆÖA9³^¿æ
GÍoï¸ýöÀëi©zƒZó*|9¶Ô:Vúëµ…Eõ°+KwÏÚß!½z[Ý   ˜hþ°¯†¯T-Œ(s§5~
ªß¥9ÚQ³­º–ck¬ç›G*5á­—G6{M‰Æ4e[6ôõ-?x÷Ýœ‹bÔ·[×'¾5ÍÓÇ2Êû¤±dÐ<y­Û¶¿÷oðõ£×ås©óFÏ÷újf%ÇVæ¬y¾¾”™·hnšˆÆ÷º
ä{ž!Srl
€øÊž¥æl<¤/‹»ù¦›RÛ~VqäLP?Q×#äØ—4gF~|¸¬,lntÝ–Vc3ýžjæ©¾uöT×v÷ÝÝ¢¦þÅÎU+;Ÿ:~ô;__QÇêAX9¼Ôu“ÕO¾,˜8éFk?4W^×Õªc
®z#ÙÇP×Ê–õ9Ò>eãR?×=¨\	Ê±3=uìèWÛ—/ï4kìë×èYIÝŸx¨õý©Ot®y¿WÎšÕDkkYýÄUs
@¨†AÐ<åiú®²P=ì ûâÊÐrù¾­k9¶ª‘V×(cBãœÇz(µeé’öAÏÿIÝ'ÈõY0Qßrl1vÐKÞ:ÖRstüƒP6=¢o¿”Æz¾~ôÞE™×`ÍUûGãG];ºÐ¿íÝG
õû[cáL£äØB×¤AýéuëúXÇ0{ÎˆÎ}í£ÆõA5³%Ç  ˆcT»ØúþÕX^õ&*ví˜ª¹¢ú¯Æ³A×iõûÖ~¸
Çv£±SÐñ>¾g×¬0s‡ôÞØøá@ëýËöËêÊÿuºêØ_ÎTÿ›õ»™æ2V÷¡qeÐ|™o=¾°XÏº¼°ïÿCÇ0ÊXêó¦k€|›cÇ¡þ¶D™
ÝKµ¾ƒ”‘n]¶´ãŒ1c¯Öœ©Vó<ƒî»§ÍµÆ^]Ì±…ž!³ŽIZ¿ô5ÆAú¯Æ”º¿f~ªTÍ’{šÞeíV
õ1ÇAõEÒêØhÝ=Ï™>ÿu½¢ëˆÏ++~´Úë÷­ýÈDã=ÕÒ¶ú•:t]©š#úo˜ýñ5ÇÖõÏ‰ƒûK¬~Ó¦¯{.ü÷Z¿ë“   ^”y†É²sQk
†}-rl7z¿títÜÃÞ;Ð{£g­÷1s«ûÐš@¾mÅyŽXè­o—š›¢šÙùR[9¶žS s?
4ß×ú.ÊÕ|j]ÔÕ[h]ëØÄ¡Ö–nw_kkwLêkŽ­±§Uƒ.s½‡s‹{Íy&¹¨gC«”®vý,jŽ-Tw0¨–N.ªÞ‘ïYWrl  €øÑ=t±ÂÌ¯£æok^G®¶
Çö£Ú!•ÚôDY°w×§Ÿ-ÌW=KØ¯Û3ÖnDBõL|ÛÓÜ«}ÜhÞŠjˆXÇ"?=Z^¥:ÔqàË±õ™µžÿ £òvÕVÏç³  `¡ï5ã»þë;ìÿiÎ¶µí
êrŽ-Tç,êóbQÔœí»7±v#õ5ÇÖÛ¹¨q`ÔyØÙèú-®óG™xz‡²`×ïä’c‹¶-[¥ôL€µa<ºsû$];ú®É±
’Cõ}ãï°ª.a™9v0ZÛ]k;½ªUgõ“Fsgõ:ô®õ‡QÏjž²j*'A¯.]ïŸÆ¼¹®˜/·þî–Põ Ãz¦êØ×õj>µ#³ñåØš¥ºzÏÂ>œmù¶Í£¢ÔR
È]­uZÂ¨ñ¥UW8u=Ç­šßÒwºuÌ¢¨ñ™jÇYo¬>çØi÷ìuáz â{ëø[êúMcÄ8èðÀyÍÑ½)=Ó«quš¸sl¡µ‚Ö§´ÔØYk¥û#Ç
¸rh]7Õ›Ç)÷Òº=Ÿìbuåazf.Ûuóæ6·Ú†ÅÕ¿¼á†ë­¦—Ðç©§½}YmóAs’}Û•z¾-s­é§1·jÖ…Y+ü×±Üñ¿©ÞÉ²·g4Òø5i*÷îžëÚ-ÌÿAÕ<¹é
ÆSšÏu|ï®ÙQÖªù×géŸZïQu°“¨Ë”c§G÷4ÿEµ.­¢º†ÔsÈ:  ®ÊF5Xãë{6Ûôúsqå«úîW=Ýl‡ôêm5
Åô×F_åê?‰u•5žS=ñ¨k¢dª÷dîøñ×Ýrsä%ßMªöíY”ä±^1sfã8Žµ¯Ÿ5sæäW
ü_h¾C®sQªöï]¢5ã~ŽNcáµsç4‹27Bc`Õ´wÍ‰Ð˜Ôu_î×ÿòG@Ÿ{ÕÐR£[÷ ôì¡žÍdòÈWºöQûîÙ<
ÄŒr´';t¨YƒZcÍÕT>ªÿªn…þ]s¯ãûCá¡±±æTèÞ#•^#fÁÄI7N>¢Æ½ªIÒ¼ÉV7±¢ñ­k\©ùwßY»ûb¡ÏPÇ6mjŽÝûS§Ýªg@5g;ý9Òÿ×õrcÕŒû:
"›09v6¿»åæšs@÷©ô~Ký]¸þúh÷{
’Fßsš³¬ùškyI¦TYqNÿ¦¹žºßÌ=Øphœ¯9ÿiü¢ìSóm³ó:ÝÛVo4N¬íñ!¤Rº.ÓûtpÓ†ÁºG“ùþ(«U]ÍsÑ5\‹¦¡KæŒòlÝ'Òy£ýQœÞÝã8¼}ËX
]SjŒ™Äü°è×<.»ÕûKWêX¥÷SçºæêhÞ†ö3é±:    šäÊbõ¬Õ¶¾“KŽ áQír_½ÕT‡`È±         ’eå¬YM\9¬jZm
IT«[y«+‡}{ô˜«­ö@Ž $ÓF½v•+ƒÕúæÙk†ƒrl         €äøôhù	W»iñâ¶V[ørl         €dèÕ¥«3ýædåµlÖÜjÿ‚
*÷îžëÊ_íÞ9Ýj!Ç         ˆŸ6÷¶tf¯Ró´!<äØ          ñ³kõª®®ìõÓŠÃŸ4hÐÀjc         ÄËm·ÞšúêDÕÿqe¯3ÇŒ½Æj—BŽ
/+gÍjâÊ]¿¬®üë¯»ÎjYc
À•äú«¯Iµ¹¥""""""""""bÁIŽˆˆˆˆˆˆˆˆˆˆ…,96""""""""""²äØˆˆˆˆˆˆˆˆˆˆXÈ’c#"""""""""b!KŽˆˆˆˆˆˆˆˆˆˆ…,96""""""""""²äØ
ˆˆˆˆˆˆˆˆˆˆXÈ’c#"""""""""b!KŽˆˆˆˆˆˆˆˆˆˆ…,96""""""""""²äØˆˆˆˆˆˆˆˆˆˆXÈ’c#"""""""""b!KŽˆˆˆˆˆˆˆˆˆˆ…,96""""""""""
²äØˆˆˆˆˆˆˆˆˆˆXÈ’c#"""""""""b!KŽˆˆˆˆˆˆˆˆˆˆ…,96""""""""""²äØˆXHviÖ&õçÝå;]Zm±8%ÇFÄBòé{Ú¥~>Rõ¿]Zm
±8%ÇÆ¤];vêÍ'WlêŸíþÙï?hµÅú'96""""""""fKŽIûÑÊ
/¸2ÉïwÝcµÅú'96""""""""fKŽIKŽQ$ÇFDDDDDDDÄlÉ±1iÉ±1ŠäØˆˆˆˆˆˆˆˆ˜-96&-96F‘³%ÇÆ¤%ÇÆ(’c#"""""""b¶äØ˜´äØE
rlDDDDDDDDÌ–“–£HŽˆˆˆˆˆˆˆˆÙ’ccÒ’ccÉ±1[rlLZrlŒ"96""""""""fKŽIKŽQ$ÇFDDDDDDDÄlÉ±óóéíR{J­3ùÆÍ“f7
N«ÿÿÆ3/ÔüÜê£¶}ò®¶©	Ý\²ÏŒ›qëì#>×êa³}TërŽÝ·íã©Y/Œl ã“ùþ.þúÕ£»öIulÔÒì#
õ¾üÄs©)½§¦÷Ö`ÉËã¯•ï}•þmx§î5¿cõ“´4n•zýé.;×´¯£ºôªùyvrlDDDDDDDDÌ–;ºÛwM˜³¤Í»+Žøò¶ì¼vï;ïµî}ÿ£fßaíÙú‘Tf®š
vÙ+“®sý~—fmR'Ìºý»m‡VþT^ýÏ ýÕëÚ6y~ÓNMî3÷#Œu-Ç~ëùA©ª¥%Ï;püKë½=w¸úï_o-]°þõi·è[}GµsÓj²j½·'WlêvGùÆóåUç¬ýJûKYÕ_
oÞ3kÇ´ùÍtÞZÛ‹CeûÊù¿Ü´çmŸ ýÓ¹xvç¡½¾çïûõóAŽˆˆˆˆˆˆˆˆÙ’c‡·ïƒ¥>[»e˜•û<w¸ú'W|Ø÷™{Ú›Û²œôÜY_v6Ü¹Ùƒ©}ï,~à—òê¿Xû—
íùƒÕš7htCk_,ëJŽ­yõÊT­ãâSÇX÷+âš£ýÍ–Òù¹žk>•ik~´µí\Õ<ëŸ÷U|lí‡K}>>Y½uÈŒ~Ãø~ÇÚ>""""""""§äØá\;vêÍçWÿÕÊâÂxþÐÉó‹†Ž½
ÚÚfarìå¯N¼þ—²Ê¬ý±Ü:yÎÖþYè9v‡ÛîI_²®›uÂúãÞ#GUóÃÚ®åùC•ÿfm+•—/\ù¨^·µa}êî?¤¾Ú¸{ªµí|µö‹Srì`ÛÝÚ<U¹t}
w+_ËEÍ“¶¶ï3(ÇV}‹/6ìšdm?Šùäî…œc«vÊ·[÷/¶^TuÏCuµ­í™TŽöô†oÆ‘e÷y SêÇ}GOZÛ‹Ck_±8%Ç6l†ýKyõ/Êeÿ¼»|§þvî¶êl
[ûàÒ—c+û<·ÿØik»QÕ¼î\ë¡jŽ­û»m–Y¯]ž?xü[½·RõÃ­ºÏR¿“O–tŽ-,Zõ¸µA>×ºcêÜþŠO­íÄ¥µ?ˆˆˆˆˆˆˆˆXœ’cûÕºˆA™šÖÔúyƒ;v»¬­æ
qêÒ«f=H«¶‡j
[û’­/ÇÜßÃÕ×<mÕpVÍmwåk“nØ3caKÕMV}â ö‹×<ií—ËBÍ±Uë<èõjMEŸî÷^žßkóÌþ#œX^Ò+è¸©fö€vOšûâÒ•ckÝÆ3%;Æí¹¨•æÈ«~‰ÖíÚ
¼mê™íkÔù¨}Ó¹©5(ƒ^£Ýµ¹/.Uüì®C‚úÖ9wjÝÖ‘«ÆL¾QÛQyÏ!žMéÿ/}åÍëÍ[öîXû)­}BDDDDDDDÄâ”ÛíÀö]SAsnU_8ìz~OÜyJë;ú
úRÖ©y­V?™FÉ±*=Z©Qó_óC]RA¹§êz?Ò¸•¹oÙbŽ­ß÷:õ¾+¿¶úHÛ¯MçÀõ!¿ßU¶å¡ÛZ˜ýd›Î±Ïî8¸fÛäùM‡wê^sÄj—­2ã ýûjcéL«—ÊŸ}}J
ó®{
>•ÇëËÏŽñõiõˆˆˆˆˆˆˆˆÅ)9¶Û <wó¤Ù­ö.ƒr¿Së·½jµÏ4LŽ­ùâÊ¯£d¨šg|vÇÁõ¾>ßúzä:Ù…–c«~¸oŽ¼2lÍe¶úÈÖª³½îõi·X}d»þBe»Öï…
Q÷\¾Û~`…kß´îãÓ÷´3ûÈô_÷yœóÐu5ÏÚêÃ§ê×øŽ£Õ‹SrìË×­¿7G+{wùÃVû
O®ØÔß×÷ O™íÓZ9öñ%ëºå2wZömû¸7£¬X¼®«Õ>ÛBË±kæüzŽÛì#Zí}*ËþqÏ‘C®~Ï<þuØùûIÙ³õ#Þ÷uñ°q‘îO¨¶‰ïæ“aKeê¾¾­¶ˆˆˆˆˆˆˆˆXœ’
c_î—vMvehZÏ.ß,R5F|sO¬(émµOë_çñäù)½›í-¿Þ¼w¶«ÕŒ¶Úf[H9¶æ›ûŽÔ9ñ.UóÙÕ·\öÊ¤¼òÝ8üjÓîé®}Û?ûý­¶iUïÛ÷?ÿ`Û(«½%96"""
"""""fKŽ}©ÊÐ|sV×Œ™r“Õ>Œ»¦/ºÇÕÿùÃÕµjX§õåØqeÃ›'¾s‡o­¶ÙRŽ=gà+
}i”ùðAúî|·íÀ2«mÒîœ6¿¹kß>^³y°Õ6í‘E«÷=Zv0Û[’c#"""""""b¶äØ—ºäåñ×ºò3Õü
›1[ªþ¯j»¶3£ßðPµ™“Î±µ¾,QsÊ­ö™RŽí«ë¢u­¶a}wðè«\ÛÐ{®ÚÜVû$Õœp×¾iž¶Õ6íÏûª¾põåy‚
É±1[rìKýxõ¦ÎœocéL«m•›º¶sdáªÇ¬¶2é{H§g½YbÔ5)Ç>·ÿØi×¾lykN«mXu¿C÷=\Û™ûÒ¨œëoçë3-Ú§>7ãV×~i¹Õ^ïÔÝ{^Œ
öE³}É±1[rìKõ­Ó·mòü¦VÛ(–Í_ÞÁµï¶Ziµ•IçØAYb]Í±ŸºûÞ×¤µ=­öQü~WÙ×vÎ]þÕ6Š7izù‰çjæ€ozsv£ó–¶;¹âÃ¾_nÚóö
Ÿw—ïüùÀ±3çË«Îù^wÚ°9öÆ	³nwµW]v«mXÉ±1[rì‹j
Ç|ë}„uÉˆ7®qæ!ëO'c?Ò¸UÑåØÊª}¯)j­Ë+?ìçÚÎ™’Ý­¶AvmÞ¶¦öÍÇ«6øawÅßë‰jØÛ÷^~»uÿb«mXÉ±1[rì‹öy “7?‹k
À´£»öñn«s³ÍöIçØÒ·u5Ç^:r‚³öù/eU?[m£º}ê¼»\ÛúaÏá}V[—Óûkp¦dÇ8ß¤ù6ÇÖZ•®öZûÑjVrlDDDDDDDDÌ–û¢cºõ‹-»µÐîIï¶¶ïj¶
'ÇŽ®ên¸öCóš­¶Q]1jÒõ®m?TùoVÛLwì–úvë¾E¾÷".ÃæØçöW|êj¯z#VÛ°’c#"""""""b¶äØõeÃIägAYÖX´Ú“cG÷Àœ%m\û¡:ÒVÛ¨¾7ôõ«]ÛÒ|j
«mÚ•¯MºÁ·^dTU#ûÜþc§|9tØ[9¼«ýªÑoÝ`µ +96""""""""fKŽ}ÑÉ=_ªµü,(«›Ðc Ùž;ºeï.ØµqÖvN;­ÏÐ¾ãgµ•Œ›q«¯ýe8væ‹
»&}oõš½hèØ«'ö”ÒýgZ´Oµ»µùoýúòõ°9¶¯~¼úµÚ†•³%Ç¾h¡ÌÇÕ¥—Ùž;º¾ûû]e[¬¶QûÒ¨†¾ãgµÕý_^œöìŽòÊº{ßÿ¨¹/™
æ›cûö‡“”û¢A9v§&÷™í£Ø³õ#Þm©&²Õž;º;§Ío^[ûáË‹­5%º­Eê§Ò£Ç|Çþç}U_Ìì?¢µý¨û6Çþ¥¬òW{êŠ
"""""""b’’c_tP‡§¼ùYß¶›í£8¼Swï¶”q[íÉ±£»zôÔ]ûqþàñ¯­¶QõÕù©ôøGAí‚æqÿiWÙ¦§îþƒ¹í
óÍ±u¬\í??ã÷VÛ°’c#"""""""b¶äØíÜìAo~6¥Ï³}ßyq¤³~²êIdÖ3öIŽ]ß1—4ne¶â‘E«wmÇªÅýÙº­#\í~)¯þK–ÌíZæ›ckMLW{½^«mXÉ
±1[rìK=°úO®ülË[sšXm£¸uÊÜ¦®í¨¦„ÕV’cG7h¾ýè®}ÌöQüjcéL×vN¬ü°_P»sû+>uµ;¼`u'k›aÌ7Ç>S²{¢«ýW›vO·Ú†•³
%Ç¾Tåy®üìã5›[m£øå†]“]Û9µ~Û«V[IŽ]Õž>W~òo®}Q«}X5Ÿ^u°]ÛY÷ú´[|íTƒÝwÌgôžsMìLóÍ±Ë®|ÔÕþÜþc§­¶a%ÇFDDDDDDDÄlÉ±/u×ô
E÷¸ò3­o§ÔjFÕ°8¸ú¯®í¬È93%ÇÎMß}
Í3¶Ú†u\·þÞc7¤Ó³ÞvAùm˜µ?Ã˜oŽ½xØ8g{©ùîVû0’c#"""""""b¶äØ—:òÉç½ÚÌGÄ2'6(»ž$9vnnœ8«‘k_Î®þ{Ô×å³réúî®mXëIj}Oß1ù‰ç
Ìí†1ß;hwL›ßÌjFrlDDDDDDDDÌ–ûr*=ZíÊÐ¾Ûv`™ÕÖR5'”ßºú?»óP‰Õ>-9vn>×ºcJkiºögï;ïµ¶Ú[>sO{oí’²ùË;µ ª+2gà+
­m‡1ß[þ°»âˆ«åôµ4Û[êúŽƒÕ‹SrìËÕ¼R_Ž¶ô•7¯³ÚYòÆÛ·úú^ùÚ¤¬öiÉ±s÷ô†oºöGùó€vOšíƒüdõÖ!®¾•‡éÛ—W.[ßÃjk9
ë…‘
”5»ú’c+ï÷›'ÍnlµòíŸNÝqp¯«=""""""""§äØ—«y±ª‡íÊÑ~)¯þË˜nýÌ>\ª/§ü©ôøGQêo“cçî¨.½¼¯MsŸºûf.µV¤¯ßÏÖmaµ—_mÚ
=ÝÕ^çMØš3ÙêõœX^ÒË·o2JŽ­9íçWÿÃ·Ÿ¹|>4[¸ïó‘Öê‹Srl·«ÆL¾Ñ—¥)Ëÿì‹f™Ní=,¥v¾>ç¾4*RÝrìüüxÕÆ¾×÷çÝ‡÷>ß£f
iU+Fsø}õJ´¦§êJ[ýÈ ùú?•=Ö÷ÁÇÌ>Òê~ŒÖ-
:ïÒFÉ±åÉöõõ¥í…}¶@÷nô»?8vÆÚGiõ‡ˆˆˆˆˆˆˆˆÅ)9¶[e“_m,éÍË«ÿyô½ÕOXyg¿6kæÂú2N©ZÖþd[9¶æÞþywùÎ$íÒ¬sŸô|56ä/eU?oœ
0ëveÁA¯m\·þ©o¶ìëëGªë¥ÕþåÎÊÄËÞ]þ°æ”w¸ížËÚ?yWÛÔÌþ#}M—ó‡NžÚ¯L£æØÊåµ/A}~·mÿÕáQ=•Ç›´þ­­>3ªq¢ÏÏ¹C•g­}ËÔÚ/DDD
DDDDD,NÉ±ýªÃ¹ýŸåjÊ§¿ÝºoQùÂ•ª.ÂòW'^¯ÿY¸ê1Õù
Ê¯¥æþZY©ËbÈ±kÃ }}­koÕÇø{P{eµ_lØ5I5¡•Gkžþ¶Éó›V--yNó£­íŸ\±©¿u|²UÿV¿Rû~îÀñ/•×ÿ°çð¾ó‡*¿·ÚøŒšcË5c¦Üdõ›µ¿ÎZ$Q´ö
‹Srì`5ïÔÊ²sUv®µ˜É±Ãií«æ.[Yv®ž)Ù1Î5gÚRÏœþ`ûh«ÿ¨ê¾ÊÎ·´pý,—[ÕÉE½Û§Î»Ë÷sk±8%Ç¶Õºvgw*±2¸(~½
yÏ¬\3lIŽÎ0ûªÚ çUþ›ÕW5??ÊºÙjŽþwÛ,³¶FÍƒÞ;sQ+íÏ{C_¿Úõ;¹æØÊéO­Û:ÒÚ‡0þ°çð‘O>_SóÅ÷;Öþ
"""""""bqJŽNåuª-¡šÎV¤Ú«îˆæÜZÛ’;œa÷U¿÷ÙÚ-Ã¬þ,Ïí?vjö€‘‘Öìô©sNõK¬m©ÚÝÃ;uÿ­Ï¸sl©sY9¹UCÇ§>úlulÔò·÷Â÷»Ö¾
"""""""bqJŽÍî÷¶Oi½¨µˆUÇxß;‹x¦E{sa¬™C|ðø·Ù~½µtÕ6¬®þeÔyä‹×<éë+i£î«ækÝÍ¨÷+tÿàƒq3nMg±q:½ï°ª
bíÃoçÚ…}ÿdõ¦Ao<óÂe}ÍøJC×qÒœjk?,‡tz6¥Z*aól}†ôYÒg*³½g¾÷ÓÚDDDDDDDD,NÉ±sS5&ö”Ú1m~3ÍãUÎ¨õö”µé¿úÿÊµfŸòÄ|ç_cíúÄ
÷§4¯úÐ¼e©Võ÷»Ê¶ü¸çÈ!Í·Öû«µ=5WZÙõ O™ýÅáËO<Ws¾Þ°óÍš:7û*>þõ\+ßxêƒm£4'Zõ¾iÜÊì+IŸ¿ïÑÔú×§Ýòñªô9ÐqKï«öýÀ¼¥í¦ö–Ê
¥v8""""""""ÖOÉ±±%ÇFDDDDDDDDDÄB–YrlDDDDDDDDDD,dÉ±±%ÇFDDDDDDDDDÄB–
YrlDDDDDDDDDD,dÉ±±%ÇFDDDDDDDDDÄB–YrlDDDDDDDDDD,dÉ±±%ÇFDDDDDDDDDÄB–
YrlDDDDDDDDDD,dÉ±±%ÇFDDDDDDDDDÄB–YrlDDDDDDDDDD,dÉ±±%ÇFDDDDDDDDDÄB–
YqÝU×¦ZßÔ±àÿ?7SdÑendstream endobj 92 0 obj <</XObject 93 0 R>> endobj 93 0 obj <</Im0 90 0
R>> endobj 94 0 obj <</BBox [299.16 319.68 474.12 186.6]/Filter /FlateDecode/Group 17 0 R/Length 48/Matrix [1 0
0 1 0 0]/Resources 92 0 R/Subtype /Form/Type /XObject>> stream xœ347Ñ³4S0 BCcc=#KK=C3C3=3…ä\^}Ï\—|^
­ã•endstream endobj 95 0 obj <</BM /Compatible>> endobj 96 0 obj <</G2 95 0 R>> endobj 97 0 obj <</Fm3 94 0
R>> endobj 98 0 obj <</BBox [299.245 319.636 474.002 186.613]/Filter /FlateDecode/Group 17 0 R/Length
191/Resources 89 0 R/Subtype /Form/Type /XObject>> stream xœmÎ»
Â@…á>0ï0µÅfï›é½"hå(¨0‰Šïnp‘½„é~8óî4‘ÐÖ¡¼ðÊàÿBA2Ø`…”z©¤Cí0ÜÿM+e¶Öª’JZqã¶qÂRaÛ ¼Q¹Ô–´âÆ)lG±
¹”pqŸImI+nœÂ¬Ð.§ÉÅ'}µå7âZÉa#‡˜|&E•³PÒŠg¶Ï+˜@â| ÷Ðï4Þ>ÐoGƒë'œºþÂ×fºâáˆÝˆ%wNendstream endobj 100 0 obj
<</BM /Compatible>> endobj 101 0 obj <</BM /Normal>> endobj 102 0 obj <</BM /Compatible>> endobj 103 0 obj
<</BM /Normal>> endobj 104 0 obj <</BM /Compatible>> endobj 105 0 obj <</BM /Normal>> endobj 106 0 obj <</BM
/Compatible>> endobj 107 0 obj <</BM /Normal>> endobj 108 0 obj <</BM /Compatible>> endobj 109 0 obj <</BM
/Normal>> endobj 110 0 obj <</BM /Compatible>> endobj 111 0 obj <</BM /Normal>> endobj 112 0 obj <</BM
/Compatible>> endobj 113 0 obj <</BM /Normal>> endobj 114 0 obj <</BM /Compatible>> endobj 115 0 obj <</BM
/Normal>> endobj 116 0 obj <</BM /Compatible>> endobj 117 0 obj <</BM /Normal>> endobj 118 0 obj <</BM
/Compatible>> endobj 119 0 obj <</BM /Normal>> endobj 120 0 obj <</BM /Compatible>> endobj 121 0 obj <</BM
/Normal>> endobj 122 0 obj <</BM /Compatible>> endobj 123 0 obj <</BM /Normal>> endobj 124 0 obj <</BM
/Compatible>> endobj 125 0 obj <</BM /Normal>> endobj 126 0 obj <</BM /Compatible>> endobj 127 0 obj <</BM
/Normal>> endobj 128 0 obj <</BM /Compatible>> endobj 129 0 obj <</BM /Normal>> endobj 130 0 obj <</BM
/Compatible>> endobj 131 0 obj <</BM /Normal>> endobj 132 0 obj <</BM /Compatible>> endobj 133 0 obj <</BM
/Normal>> endobj 135 0 obj <</ExtGState 142 0 R/XObject 143 0 R>> endobj 136 0 obj <</BitsPerComponent
8/ColorSpace /DeviceCMYK/Filter /FlateDecode/Height 1420/Length 174809/Subtype /Image/Type /XObject/Width
1457>> stream x^ì½‰—TÕÝ¯_€**Ô â€AQ@A'‚"AQE"*"ƒ È,CÓ
ô@7t·8!NÑ£2¬¼77+×›÷¾ë]÷]YwýþŸæ­¤Rî}¾çTª>Õõ<k=ËDkï3Ö©>Ÿ³Ïw·o×.u~‡óåyÎiùg¯NÝe‹®"ÃFD
DDDDDDDDÄDJ†ˆˆˆˆˆˆˆˆˆˆI•“*6""""""""""&U2lDDDDDDDDDDLªdØˆˆˆˆˆˆˆˆˆˆ˜TÉ°1©’a#"""""""""bR%Ã
FDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•“*6""""""""""&U2lDDDDDDDDDDLªdØˆˆˆˆˆˆˆˆˆˆ˜TÉ°1©’a#"""""""""bR
%Ãö»àIí¶ÎYÔ5í½=ú›m1>É°ý~¸fÓC'6ýŸ´sFýÚlƒˆˆˆˆˆˆˆˆˆˆñI†í—±u%ÃöK†ˆˆˆˆˆˆˆˆˆØº’aû%ÃFDDÌÝ†åëî:
òÖ–³e~‰ørõÍ©5OÎéxä­÷ÆßU½ñÔÃßœ¬kþ«þn9YÝxüÄþCŸßY»ùè†Óö¿¶òÖùc'¶³úDDDDDDLšdØ~É°s÷Tuãï3GÓN8Âl‹ÁŽ¸®OêƒÕïK
çÕaýjËžùVßˆˆˆˆˆˆI“Û/6"b²ìßõ†ÔÖ9‹º¶–«¦Î9ßZGü§dØ…Qc©O×4°òj2ìòðwÛ*ÿqOí.—V[DDDDÄR‘Û/6"b²¼»û­)+£+¤ßí®¯°Öÿ)vü
.ylz‡¨c¯3%Ãn{ú¾gÒj‹ˆˆˆˆX*’aû%ÃFDL–dØ¥%v¼>rë]©SuÍ¶ÎÓ
Ë5ÃÖµ£­ŽU&ÃFDDDÄrûŸöî|mjÂÀ{R¯ŸÞ~Ç‹¯ú¾¢®*ó>àË-¿­]ºfÀîùËºo˜¹àÒïŸ˜}ã
³_DDŒG2ìÒ’;^¿Ý±oEðùY³­þµƒ¶ÌZÔeÅož=oõ³/Ø5É5šïQYíÉºæŸÊ5Ãy}_ïµÃj›tÉ°±,÷»_—ëS+§Î:ÿÓw¶M<]Óôƒ•_¸<]Û|úëí•¯ï
eE¯¹÷=–êÛ¹»¹\DDŒ.viI†ŸzÌw^*Ÿž6ø>³WÜ˜z¼ÿpósmQ2lDDDDÄÒ¶\3ìAWÞ”Ú9oq·“ÕÇ­Ì"ªzÏW™øó£Ç›ëˆˆá%Ã.-É°ãóãµÛ'øÎI=·
Ú—»dØˆˆˆˆˆ¥m9fØ3†=:QÕð‘•Uäë×[÷.²ÖÃ”aW½¼¼§Þ…)¤3†Ž5×ÿ)v|ž:pøk×¾œ9ìA³-¶í{Ï‚×¯«~mUo—V[DDDDÄR±Ü2ìÍÏ-¼üÇÚæ¿Yù
s’a#"ÆkP†ýÆãOŸcµÇâJ†co¾ÃyÞÿXyøC«-žµ-gØˆˆˆˆˆå`9eØï>=¯SPæ|ªúÈ)Í{¤yTWòèúOdþwÍõ¨ûîELi¯:$ªT‹„1^É°KK2ìx|õÑ
ií]ûñ£u[³ÚâYÉ°KÛrÉ°Ÿ¸óþÔÉºæŸ\÷.§kšN¼÷ì‚Ëúw½á_Ú|¸fÓC™ŸÓ|JÙýÞzéÕ©Ù#Ç·Ô©ÌîŸ1^É°KK2ìx|{úó]ûq×¼ÅW[mñ¬dØˆˆˆ
ˆˆ¥m¹dØÇwUotÝ·üqOÝÞ{{ôw¶
“ag:öW·§šVn•Î²É°ã•»´$ÃŽÇmÏ¿r…k?êù»ÕÏJ†ˆˆˆˆXÚ–C†ýì=;ï[T;dLÏÞvQ3ì´ãúI}±i÷2lDÄx-‡»_—ëSõ–zéÁÉíTÛJ.|hJ»
ñ}‡¦zw¾Öl_(G\×'õÌð‡RË&=}ŽÖéÕ_?Ñ^ó\>rë]-ï$¹Ú´µ{øµ}ROßýPJµÅ2Í”»F§î¸¢‡Ù>Wk–¬¾ÍµWNyî<«m)8äê›[ÎùéCÆ¤ž=>5aà=©ûo
ºë—7›mÃJ†]XumzðæA©ïŸ˜J7tøÍ Q©¾»›í¥¾—:¯–<6½Cz½tm-ôwã·2ìÆUëGºîYj_«P»\3ì´º_²>ƒˆˆá-•[Ï2ÓyI¦Ê€]ŸxÅ©Õ
OÌ¾àË-¿=Y{ä/¾m<]Ûü§£ïnŸ2ìÄvÖ:Ä¡rÅÚ¥k|¿§á oä©ºæ?ÿnÛÞW7Ì\p©²îtûRÏ°•Í+“Ó\'ª>
Úò»ÝõÕ¯­êïöé<É<o¾Ü´û×ò½ùÎP×yæRç¤µÜb©÷Ö¶¿ðÊ•:ßÏœ#ßž[£Ïi¿*
›kïÞç_öáÆg~{©oÖ¾ËVÏ1‚–ík§çSÖzß}í­gŸ=þÔ9év:õ¬È—ëùV.ëií³´zNãú¼ÖGÇäè†ÓN×4ýàÛ¿'ëšÿªc¨¾ŠñnôRš·æøÎÚÍAó¸ë¿é3ú
¬Ú¤ÛkU×~Ð¿·–ˆˆˆˆ…³2ìï+êª\»¾pï£íòÍ°1^K%ÃV×:fÏÁ7èÊ›RU//ï©lÚ·]>¿Ù^µl\ïÁæºä¢²ëÏ7îœi­ƒKÕÓúèíÍh,m)gØ·éûû!Œ
Êô5?´µ—:O¬þ£š„º#·¯ýb­k:¿ÔÇš'çtÔ³ß²ô7›ÕW®êïÃ íôµÓõËõy_ÖuÀ:ß¾Ú²g¾«ý–Y‹ºä²ža÷™žÍd~NÙµÎ§“ûií«lØ{°þ¹˜ë’‹Ê¡
?X½ñ>ßü7A*ÏÖ\í7^³xu_×gVL~æ\k±p–C†íËtÔŽ1Y¶¥[ã®Ohþƒ•­©šX3‡=h®O5>Vã&­e‡Ñ72ÉöÐknI}µyÏ‹Ö¶…QÛ¯:
Qk)´µûÎn¿Jéýk£ª¿ïTÛÆµÌRÈ°•¹~¼vËø ±Â™&!ÃÖsåÐÖº©ëËÊ©³Î·Ö'ŠzDïƒXË£ï]2lDDDÄÖµ2lß½êãµ#ÃFDL–m!ÃÖ6Ä•‘Jåxq¼ã
®œµ9£Ë¤fØÞvwêä¾CÇ¬õê×[+Î¶-eØš7û‡ªú#Öúåªž¸–›ä[5jT¿"jæÚš¶ê 4®\?ÂZÇ°êoó¹c&˜ëd©}©ùÔ­åÅ!6"""bëZ¶ï]æ·§?ß
1¨6"b²,õû»Ý5ÛNT5}ae%QU]ß¼ŠaTÛ\k‡äb3lÕ‹;.^ã4U§Y†­[ðíŽý«ÂæØm%ÃÖ˜ö“û>±Ö-­j*ÕUvYjö½îL}»£zµ—­•aëšÕrí
±ŽQÔó"ÕS²ÖË§®[ª[d-'.É°[×rÈ°}wë~2¨6"b²,õ;È–ùÅvUo<¼âÝa£¹uÎ¢®{_~£‡j
œÜwè¨Õ>Ÿí×|yVÿ?VÖR^øæ¤gÎU=ÕÕ?5ß›ÖUuhÃŽ·MZ†­MÛ´ÎzNðöŒ.T™ÙVsÔi_èXé£1¨Í}g­‹Ôñ×xi}9°þ}æç‚|eÜÔöÖrãöó{fûö…
²û×Ü…šã1óŒþ÷ý7
h™OSu¢ï<°Î×/ÃÖ9–¹ý_o¯|Ý×‡µï²U½ íö-GçÏéš¦¾ÿnÙj¶¡êxëû¿{þ²îºèŸ-×ƒŠƒÕV[}o¬õò©sÃê_ë¶ÿ•½tR}zkªÕ¯y3US]çæu´ú‘
dØˆˆˆˆ­k9dØ¾¹YdÐ¸$2lDÄdÙ3lå¾›Ÿ[xù«oöö§LOu}ïÉo¶ï[n­—ËçGÌ­¾¯¨ÛÿÒƒ“ÛYý¤Õxæý¯­¼Uc”}}&-ÃÖsï>¨júBYªÕ‡Tž­cTOüÝ
§çu²úÉV9›«¯ƒKß¾ÝjÛZå¡Ê“³ŸXŽºá¶Ô®ùK®ÉžGÐ—ag;òú¾Þõ±ÚFÕ{.êY•æ«Ô;é¼\u<Ò5G’”aŸ®iü^ù³ž5õ©ùµ
¾~tM‹Z/^*ƒª#þÇ=µ»ôŒÍê'­Î/åïßïi8èë“±u-‡[ã.|êï_ÝºÞe$ÃFDL–A¶Þ)WQHWMj²0¶²8ÍC¦ÜÓê/íƒ7J);òõ©üØê#SÕ¸ý
±²¾Ù×ß‘·¶<¨ÏXý¸ÔvùÖ5I¶r.ï1Ú×ð‰ê9[}d«Ìß—ckÎì¹ý,K1ÃöÕxøýûÞÎ%³L«óJãgOì?ô¹ú+õ[c€×Í˜{‘2T_z†¥ïþ”;G;ÿ{13lÕßWv¶.Ž
ÔßØAÙpÔwtþ½7¡gRùœczOÓÕ/6"""bëZ¶Ô¸ëoòú7× Ö¸Žôû¬dØˆˆÉ2(Ã.†Oh­£´2ìú7Öêßõ³—K'Ìèàë7jÆ²þ™ù—øúúxíö
ùÔØ–¾qãIÊ°}u*TóaLÏf{Ÿ‹™ÒÞ·o5NÝjŸi©eØzî¡¬ÞµÎÏg¶£–¡8Òú¬LZ†ýÃÞƒõ¯þú‰HÙ­ÏbeØÇ6¼?}x÷>f?.Ç÷êí»véšVûL}ÝúzëÞE®
¾£^_1^Ë%ÃÖ8*ßýT¶'««feö»dØˆˆ­k©gØ§þ:Êûí.5Õ7÷`ÓÊ£¬ö™ýxç—<óïó™k-mÒ3ìÃðžOkµ·<òÖ{c]}ë¹y”q¬¥–a+û÷í×\ŸÝ
äkR2lÏWæåýËBgØªe¢±ïV{KÕ;rõoÍO“©ö›æ‚tîÛ<çˆLK†ˆˆˆ˜LË%Ã–3‡=˜Ò}cÐ½E?VþPï'ªÖ¥æoÊç=EDDŒn©gØ­Ûú˜Õ6ŒŸ¬Ûö¸«)¶Ú¦
}éáÉí|ÛõÝ~ŸIÏ°?xkãý®õÓï}£²\_ÍÞ°uid©eØAÏò#›«IÈ°¿ß{°¶ç~¡3ì°×=KÕ3wõ¯¿Í­¶iumòíßWËu‹1™–S†-•=kžßß¿Q<Y{
ä/_mÞó¢²Šá×æön%""†—û¬ï¿øÚ/]ý«~³Õ6íÑõ;žpõ¡úØVÛ°&9ÃV–êÏ¾sÞânVû°j>×2>ß¸g¶Õ6m©eØSîíýžNxÙ¾&!ÃÕ£ŸÙ6K%Ã^ðÀ$ïs
³°ï%ø®[ƒ×ó2lDDDÄdZn¶ÔØ*å?TÕñý-Õ“uÍ?©ß½î4—ˆˆ¹I†}Ve)®þ•[m¥Þ#òÕ×Š3¿Mr†­uðçÇú
3Û‡õíéÏwt-CcOÃŽõ.µ[óúömãÊõ#¬ö…0
vÔ¹<ÃZ*¶Æ‘ä»oT§ÞÕ~÷üeÝ­¶a%ÃFDDDL¦å˜a§Õx…Mi§z•ªíû»:Šªs¸÷¥e7Ä5ÿiP†]õòòžª5]Hgk®£,t†=wÌwÝÚvP~ç8Ù$gØo
M›skÝN×4~oµâ¸>C¼ûZóÜYíe©eØÒ7Æ]ê»6¿K2lÛBgØš2Ÿ}óÈ­wyÛÇ9g
6"""b2-ç;SeÎº§Ö}€ÆSŸ¨jøÈ÷wr¿Ø´{õ²ã5(Ã~ãñ§Ï±ÚËBgØÓß—W†­ZÌ®öª‘g¶˜ä»qÅ»Ã]ëö»­û—Zm£ªýêZÖÒ
3:Xme)fØoíZç´z®˜µØÈ°ma«^H>û&¨vs9¦%ÃFDDDL¦dØ~õ·æß®¿ÿÀÛ'÷þÒ÷÷s¶ßm-ÃK†}VÕºpõ6Ã®}ý­þ®öÇwUo´ÚF1É¶êQ»Ö
Mó<Zm£úCÅÁj×²¶¿ðÊ•V[YŠ¶Æ˜«Îšk½³ýnwÍ¶ú7ÖzsÒ3çª]!Þe#Ã¶-t†-óÙ7f.¸ÔÕVµ°­¶Q$ÃFDDDL¦dØ~³3ìô{Šz/xëœE]õ7½ïoñ´z÷ÜZ""
†“û¬ùfØ¾yÑ>Û°cšÕ6ŠIÎ°•×»Ö­rá›7Ym£ú»m•‹]Ë:ôæ;C­¶²3l©š!®õ¶<U×üçowì[¡íS®=úÆæ²,É°m“ža×.]3 Ðë'É°“)¶__†é‹÷OL
Í ùíŽý«¬å "b8É°Ïšo†íËh>Z»eœÕ6ŠIÎ°}Ï¡7?·ðr«mTõl
Ÿý]ª¶ÆSë4×ºGõûŠº*Í7škí2lÛ¤gØ:ß]m¿Ù¾o¹Õ6ŠdØˆˆˆˆÉ”Ûo˜[½æ–Ô÷{ºþÞý±¶ùoƒ»õ2—…ˆˆ¶dØg-T†­zVÛ(&9ÃVý×ºéØYm£ªãž
ÏùPª¶TŽ­[íÚ†¨ª¶øþWVôê×åzsÙ™’aÛ&=Ãn^µa´«­®gVÛ(’a#"""&S2l¿a3l9{äxïßå˜ÔÎZ""Ú’aŸ5ß[óºÚÇ‰&9Ãþ±²þkÝ”Zm£ZÎ
vÚ×õIímå­§ªœrmKTÿ¸§nï½=ú›ËMK†m›ô›qØˆˆˆˆå-¶ß(¶ôÝ«¿5mÎÖ²Ñ–û¬ùfØ¾Œæƒ5ï=`µb’3l_-‘¯®îmµªoþÈ°c[È°ÓöíÜ=
5ìÄv‡W¼;Ì÷[XOîkø$ì»ndØ¶IÏ°©‡ˆˆˆXÞ’aûšaûæl*Ä˜.DÄr”û¬ùfØ¾L5®õK›ä[óU¸Ö-îz*AËÒ¸d«­lKv¶ªo­L[µ®¾»}Ê‰ª†\ÛêSó“
ZËdØ¶IÏ°·Î~ù®¶ªdµ"6"""b2%Ãö5Ãöeï<õâÅÖ²Ñ–û¬ùfØ¼µñ~Wû¸ßÉOr†­ìÓµnšÑjU_íí°´åÛåÝ×ÞšZòØô+×8s}çÚö¨
ç¶mÒ3l]ã}í^q£Ù>¬dØˆˆˆˆÉ”ÛoÔÛ7ÎjÞ˜Ç©‡ˆƒdØgÍ7ÃÞûÒ²œí4ÿÁjÅ$gØû_]q‹kÝâÌë¤²5ß9;wÌ³½,·;ÓÞ¯M­yrNÇÓ5M'|û±f
ñê¾V?dØ¶IÏ°§Ü5ÚÛ~ú1fû°’a#"""&Ó¶ža«NâŒ¡cÍÏ¹Œ’a÷ïzCêdí‘¿dÿ½ûcmóßÂÖjDDÄ`É°Ïšo†4ž1Îß¬$gØ‹}²ƒkÝô»=èÊ›Ìöa}áÞG½ç¬rU
«½,ç;í#·Þ•:]Ûü'×~øvGõ«=¶mÒ3ì–¿µëšrµß=Yw«}XÉ°“i[Ï°uŸ¬ûÑ¦•G¸®ùùL£dØëŸ™‰ëï]ýl-ÃI†}Ö|3ì
ï)Ê~Lr†”i¾úè´öVû°jŒ°k?VþÐjû>È°[¬{}í@çyàð×VÛáÝûx·Æz[í£è[N˜œ6Ë%Ã–ÇwUotµÿãžÚ]VÛ°’a#"""&ÓrÈ°Ó{jœ´î÷FÝp›ÙN†
Í°g{À;6èÅû'šËADÄp’aŸ5ßûÖK¯Nùj3ÄµŽ2É¶TîåZ¿cÞŸnµ
£²ÑUM_¸–Ñ¸jýH«}Z2ì³úÆÎŸªkþ³Õ6èÚ¡|ÛjEßrÂæ´Q-§{ïËoôðõñüèñfû0’a#"""&ÓrÊ°Óê=DÝŸj¾ ½—èkkeØ};wOm~náåºwrý­{´
óB!"–³dØgÍ7Ã–¾9
õ¼7®L/éöÎy‹»9÷Á™¿T»Âjo¹l’¿fË³÷<l¶O[jv¿.×›ŸÉÅLjç<ïCŒÃnyžà9‹`µ¢o9asÚ¨–S†=¾ïPoßí®Ù¦¿Í­>|ª­2r_½2lDDDÄÖµ3
ìLÏüú×¯·W¾^±`éõšÒîþ›ü£­+ÃÖî—œÜ®véšgî™¾ñõûCÅÁê;»ýÊ\?DD/öYãÈ°}cZ¥êoYíƒT†©|Uµ¼\ý'%ÃÕ£Ÿ·¾îW[öÌ·Ú©šÚ'÷:æ
ê[#Xí3-µ[çÿÇk·Œ³®xº_×~S[úž©lŸûêUVÛ(º–!Ãæ´Q-§[þn[åb_?¬ÞxŸÞ3±úÈVïMj;}ýJ2lDDDÄÖµÜ3lŸ'«g×ñÝçfûÝžÚ=qaCDÄ
J†}Ö82l9ôezÊž=2%§šÐÓ‡ŒI}_Q·?èw2)¶l\¹~„o=÷¿¶òV«½KehGßÝ>Å×ïÊ©³Î·úÈ´3ìôù¸â7Ïž—K¦èÒWyÿ++zYm¥¯FÄÉ}
ŸÄYÛwÜ£ä´Q,·[ãæ}ýÈ¯·V,Ôxm«ŸWÜ˜zsÒ3çßY»9¨¿´dØˆˆˆˆ­+v¼ê^8¨>
""æ.öYãÈ°å®ùK®ñíO½§%kr×èÔ±M»fY¿“2I¶æv<U}ä”o]µ¬>2ÕôOßÙ6Ñ×Ÿò²¨™n©fØi¿¯¨«RV˜O‡Ýó—u÷íÓ0y¥:ß«_[ÕÛjVß2¢ä´Q,·
[~ôöæG|}¥=¾óÀ:7¯þú‰ösï{,5ìÄv«Ÿ˜}j)çÖ5Îê#S2lDDDÄÖµ­gØº_Ò=¸Þ3µþ6ÍG
Rk}1wƒ2l½óå–ŠßR=§´ÖQ–J†­¼ÕWï"­êm-{ü©s†\}óÏÚë3$µþéy¾Ý±o…õ;™i’2l¹æÉ9ƒÖWÇ>Ì:ëï€ 1èÊÌtì¬~²-õûÛ_Ýx\ÛòÌð‡R
asüß•ú|ãÎ™¾}úé»Û'[}¤õ}oÒª…oÞoOÐñ­cí ÕLZŽ¯ÿ¨9mXË1ÃVš+t<ã–±umëv¦ªu­û*;UÛtÒú[ÕRã¶>^»}‚jèYËFDÄü
Ê°‹aØ,§T2l9wÌ„ÐûôLÿß©–óÉ}‡Žúæ3c˜<¸Øyë½±Özk\§ê‹(óVž©z+ëfÌ½H¹æUõG¬öQÆµgÚV2ìLO×4ýðÕæ=/jü³ö¡jŽ¤ÝñÂâ«”'ÿXY(¨Íå
µvÛ7Û÷-·ÖMËÕ8Ýô³+ó™µÝ­lØ×oÔœ6¬å˜aKÍ»zê@ó¬ãEÍðíŽý«\ÿ±u-§;SÿÑ»§z¿PïêÞõwÛö¾úÇ=µ»tªù³ë_·»f‡þ¶Ý:gQ×ç
GOÅY;mÉ°Ïg†-÷¾´ìkÛ£ªwýO×4~ïúoIÌ°õÞVÐxß|ÕßÖ:øl‹v¾jÎ’É·4×%[ë;¿‰O+öµË%§ c¹fØr\ïÁ©+ë­cf©,üµñÓ[æ
ðÕM_>qfbêU!"""–£åša‡Qûgþíª¿í­6ˆˆX8É°Ïw†­çºKlmOÖù‹¶_ýúæŒLb†-•cÍñ˜‹ª¢qÛÖ²ƒ,µû­is.°öK>~¿÷`í¯ûÜm®‡Ï·g¼paæ¸
ê¨ZÙ°¯]®9­e9gØRs36,wH.Ï&t½Òµop·^ÿèÏ—a'iÎDDDÄr”Û/6"b²$Ã>kÜvZeaQç9ËTuºåÎôWjvZÕÿŽ£FÁw»k¶i®Kky–¥–aKÕ¼þxí–ñ
ùœOÙª/Õ¢Vwkù–ª£±ÜÖ2]ZÙ°¯]>9måža§û«ÛSªMs¢ªá#ëj›4ßãˆë~^‹Æ—a¿pï£æ:
"""bá$ÃöK†ˆ˜,É°ÏZ¨[ªÎ–æˆ2NUµƒgÿ³¾J5Ã–Û©Zcaò°lï¬Ý¬<ì¼…–¥˜a§ÕÜ{ªq}tÃŽi¹fÆªO­cá›o1W•_Ö.]3
ÊzÜøK«.Œ¯m9­K2ìŸ;úÆ)ÍW£sï§^¼XÿÔwrú1©»~ùóùi3ÕöºÖqÂÀ{Ìå""""bá$ÃöK†ˆˆåªÆ4*«Sž­y"4Ÿ~5_„æ¸;úîö)ÊÎô9«¯RV9´Æ
ïš¿äÕËÖ¶§çÌPýoeÖšãYûc\Ÿ!fŸåªæ™6ø¾Ôú§çuªsÝàcÞŸ®y25IZå×¿W}ez^cõ›¯ý»ÞÐ’wêëyÁ‘·¶<¨zîú§þ¿žIÍ;±rQ«/,}¬<
ü¡+ÃÖó«-""""N2l¿dØˆˆˆˆˆå¡rjçXñª¦/¬¶ˆˆˆˆXXÉ°ý’a#""""–‡óÆ<ÞÎ•a¾qÏl«-""""V2l¿dØˆˆˆˆˆå¡j$¹2ìÍ³v±Ú""""ba%ÃöK†ˆ
ˆˆˆØö}rÈý)×\¶úw£zô3Û#"""ba%ÃöK†ˆˆˆˆ˜<vía~&¬C¯¹%õceý!×ì¯·î]dµGDDDÄÂK†í—1y~·»fÛW›÷¼¸nÆÜ‹FÝp›ùyŸÏ(u¢ªá#
W~-g{Ðì/¶_2lDDDDÄäùÝîúŠÌ¿Ó¿¯¨«ªsÝàÕOÌ¾`ÂÀ{R½;_ëm«Ì{åÔYç½µb¡/»–Ÿ¾³m¢µˆˆˆˆXÉ°ý.›ôô9Õ¯­êöÁ›™m±°
fgØÙž¬kþéÔÃßüPq°úø®êÜS»K9÷©Ú¦“AíþÑ~_Ã'ƒ»õ2×‹#6"""""–’V†§4ÿa\Ÿ!æ:
"""bñ$ÃFDDDDÄR²P¶ÆlßÛ£¿¹|DDDD,®dØˆˆˆˆˆXJÆaŸ®i:±ý…W®ìÛ¹»¹lDDDD,¾dØˆˆˆˆˆXJÎ:6µkþ’k4/ãéÚæÓVFíR5³¿Þ^ùúºs/tåMæ2
±õ$ÃFDDDDÄRvì¯nO-|hJ»
3\ºÿ•½Ž¼µåÁ×nŸðå–Šß¦ýxí–ñµK×ÐgfŸ"·FDDD,É°1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•
“*6""""""""""&U2lDDDDDDDDDDLªÊ°;´oŸºä¼Žˆˆˆˆˆˆˆˆˆˆˆ‰²Ó¹S
LfMœÔîõÙs.Ìö—]¯°šB™úÐÃ)×ñ¼éÚë¬¦          ‰ããºšºoŽ4þÙŽ¾ó.«)$Æ½{^uÏ'ùµÕ        VÎ;ï¼ÔýC†z}·«­n
ŠB×Ë»¤6.}ý—s§>ÑÞj…ƒ»mA† Iá…)SÛ»rŠL›ªö.·ú(}{öLùÎÓC{vÍ·ÚCá Ãn[a      @RhÞW¹ÊÊ°w¤ñÿQÓ’
vr!Ãn[aC[¦_¯^ÎwzæM{²ƒÕ      Š‹ri+¿N»|îÜNV …†;¹a·-È°¡-óô£µsß:ï­¶      P\VÎŸßÙÊ®Ó~R_ûÕ@¡!ÃN.dØm2lhËa
”Ÿ4Ô}le×™êÝ[€Ö„;¹a·-È°¡-C† P¼ågøesãß¾hnü«ë¿m]ñfo«_€BrÓµ×¥>ª«9àòýÕ«Zí¡pa·-È°¡-C†
Pl_¹ò6×ý[Å»ëîÙùÖêÛ]ÿíó¦CÿÖ¾}{«k (CÈ°ÛdØÐ–!Ã     H>Ê¡}c­GÜ1(uwÿÞz nu evÛ‚Ú2dØ
ÉgÜÈQÎŒúXSÃévíÚµ|æ³ÃõÇ]Ÿ9°eÓcF÷ P†a·-È°¡-C† |j¶m™ìºw{oÙÒéÏ¬_üÚ5®Ï|ÕÜôŸ;^Ô= ”!dØm2lhËa
$åÏ_Ðø_®{·¾={þãsš;Ïõ9kâ¤v‹hÎ9÷œÔå—]–º¢K—–ƒË.¹äçÜyçg}¼(h=2¿:t°šÄBkfØémþe×+u,J™|3l½Ó£cqå/~QÔó
IÎ°Óßô5ü’N[M
Ú/L™ÚÞußöI}íÙŸý¨®æ€ë³MU{—»úÎÝ§¹L×6ÉFÕôqãSU×9z¨þ«ßiü™ë¨œ^ë¿åÍ7oÜ÷6gé\Ìe¡æ¶ô-SYi¹ªk×Ôó¿™Ò¾âµÃ>8°oÓg
?dƒ¿k:ô'[‡*v-Ø´lÙMÏ=>±Ý-7Ühuˆîç]û(jFvaÇŽÎ~.¸ÀÿžÁÀ[niyGAÛªw²¿ÇNVoÝ<qö¤Éí.8ÿ|o?q¢sfæcÚ¥¿®ï¬ŽÃá½»-Ÿ;·“Ž
Y&_tQ¤ïžbeØZ¯a¶‡¦ªŠeŸ7ú®å~Þtø/•{ëswõíku[2è9ä”Jm^þF/ÓO~¦ã«k ¶ù“†ºu~ê;©ïfï7Y]:‰šaë¸ŒtgJ×\]{¿ú éÿ
f·Õù©óTë_¨k¨r¿ñ£F§t®k~b]{Òû(ó;«ý•¾>ÕïzŽö§®OÙß|Ñõ$êu&›ìk^Xt»çö;RŸzú\m_íŽ­Óô=Õvë\Éþ¾èø4íÛ»b÷Ú·‡¼úì³ç÷ëÕ+òu
_t{÷°Ô;¯¾Ò­îýmOéøh}õ›þesãÿ>z¸þÛkìÚ¿ù½q‹Ÿ›Õqh¿þ¡®ýÙÇá¥Oë:¿›÷U®r¯ õ=®¾âÊ”öwÍ¶-StôÛ™½^:wõ½Ò÷ZßŸ¸žÓµæù
DóþÊµ®û6ÝïgvÉ¬Ùº>«{wŒ×rdçK/ý—ÏýâòË[2’3÷²ÿákãRYVÔìtøÀÛ½ëõì„ÇrcïË”‹Zm‹…2
ÝC+?´ö»OåŽ{×¿3â‘##gYqe¥•×ßçêGY{æç´½Óç]®OÍ›ªì¨P¾¹|ôýUöyÿ¡-ýø¶+û»g×qñ¡gÊy2Ÿ“Dñãƒ5‡”õêxåÃÊ
}ïÑ©ÜoãÒ×oÐ3˜°„Í°•ß-š9ó<-ÃZY§Cõ_=~ÿÏÒ£±ìùç/>¸sÇ³Ù¹l®~p j½¾óqœ+úŽº–¡ïk£]Û¤ïé™ëÈÿÊn«s@Ùî¥—üìg;õØ½÷µ<ÛÕ³k;Ã
øÙá†ïÖ,\xE§‹;¸×u×§v½½æÎ3×³¿Yë”­ÚTnx÷^=»ðýžèºnõ“«aßMÈæ¡á÷¤ô·‰Õ¿K]÷õÎ÷¸ä{~ê¹BvÛôùyÑ…úº
äš+¯ôf²®LºKçÎ©ìñÍiß|q^´€ËÀ·^éM9Éªß.èâûVÝW=5þÑH¡„îÃ\}©Þ¿Ýj•¯¹Ö»¿‡ÜÖÏj^4.ïÃÚêJk_GQ™äë³ç„¾Ù++
“ak£ï}„°jŒgÜc²Ìxêœ\²žl5žÑ÷ß’”a+—S–fmOõOãKe{ÊŠ¬í
«Ž¹®ƒÖ³£0¶žeEÍ®³Un™oVl-#WõÝ×5/¢d„:Öš7Ù÷;m×Ë»üly‡öìšoµËÅ/šÒ8õŸ-0O”Áê»Í–ºNè÷${ÞŽ$eØ×^uUªa÷Î­~Ã¨g¥ù<Šr~j
@”ó3êo
@eÀ®û½;ëk£º!®6®Ú#ùttGïÞÊ’›¬û¥0êÞ+Êýžï}c™o¶‘Í–åËov-GÙ Õ¶hk.c@ÃøyÓ¡³–Ÿ&®¬4(ÃÖ{ÚÛV®èö^ÝòpÅî…ùætBïÌëzkyq5
ˆë¸d¢œU5¬uêçM‡ÿ§®+IGµ@\59âPõ€ƒ–”akü¯êXË«j~­‹…Õ>êšå7#›0¡òVýW ‰
‹™a§ã™C½ët¬©á´µÌ\Ôõ=sYIÉ°5V\Ï¬>£ºrþüÎÖ²]„=?õ{õüŒú
F5A]÷ª‘ík£ù}÷'qf¸¾e(w;7Õý£Æ˜‡Aãg}µ*Þ]wÕ>,ÊL}÷µs§>­ØFP}ç¸ò\—IÊ°k·ošïØk—QÆš»P~­z
Örâ2jþ×qI£íU=\k=Óžùžþ»¯6¶çóÿ¡w’ŠêXÛ¹fØ›Þx£ç±Æ†VÿQ7rTÐêbõ¯ú
Êõ<¶2B½ë‘ëXöÖÈ°å†%K®ûÙ‚#¢1üqÿ¶gšÄ[ÏÃþŽ¦ç“ˆ²TßÃZ‡l¬óS5Œr=?£þ†
9tÝcèþ(¨f¡Æßøî¡¶®x3¶ŒÖ½OÍ¡§ºÌš·K*GsÏ·oÓÆ‡­uJ³}åÊÛ\}¨®I\õ•S»–¡÷„ó/*_úöì˜5è¿)[ÕüZªo­9ä¤žq¨„î«5vX÷ã¾>’”a[
j\¬ê©¤Ï9ÕÎ “ª+s
Ë™söAkª/¢ñ±k-ºJµ¸•™è¸èÿŸ/ìàVi£æq—4ÖxsÍ=§:Ìz¿=û;¢ºùÊÈTs=hì j·ö÷Ë…Ž—u|t¬U'_ã/uœÓê¹Ÿþ½uNæša[êY‚¾ÿü~ìÛäª™›
­rñ0só¹ðõ©¼PÇXç¾ž	èZ¤:<:oôLIó}ê<óÕŒú—õkj8KM
_F¨q­ªÉ6Ót5ÃÖï¥êÒhÙ:oT_^¿=Úªy­1Ö:vÖo¨ÖYÙf®h\»µÝZ­«ævÔûéó[ëªy
­zßIË°5þ:h›ul´­÷Þ5¸e.ÎL4¿¢æ±Õw[Ÿóõ¡þõ¹(Ÿ:G¬ãdÔß      ±cõªþ®{ŒºÛ¦[mÏÜÿOvµUîhÕT
‹u/”©î]•E\ßíjg_Ó¬{Ý ¹ß”k…‹}Óµ×y×ïµçžû×¢›9âËÿ”±Xm2(×ºéÞV÷¿ÊÃ ÷Ï‡öëßòNrv-ç¤gØÊŸ•›(_ðålÊú­ú Ê‰œ
æM{²CP¿šoòØ¼ë–‰¾7Ê¬9*£æq¡ï·o½>>XS¯±«aQíYe©¾þâS'ºvYÇZïE„9Öwõí›Ú¾je?×<qfØz‡D5_´<W	ý;3ßœÂigüúQÇšØdö¡¹
tL5gi”çª‘®mÊìV/Xð«Ÿl|aØ¹ôL@ÏÿôÏìÿfeØª
½{íÛCTÿüòË.s¬eõÊúu]ö­—êª[ý¸PÍï m×oƒ²ý0Ï‡õÅ[/½ÔÕ•ëfgØÙèüw-_ç}P»\ÐzúÞçÒ¾Ð3•°çª>ôìCïÛEù»¬çgÔß
eÏëºÿ˜4f¬Õ<õèè{½îÃ†[ÍCaÝ'Ie7ÓÇwf$.4†üÃšê=¾þ¢ÔôÖo¨û8ìúøÐ|®¾•³_ù‹È‘I¬h<µoÿilœÕÞ‡2Lg$IÍ°u”¹‡Íé…Æ=ûúÓXÎ
¨ç‹æ[
Ê4v2lþ‘ÆÍûúš?Äu\”qùÆj|q.ca•éøÆ±ëùDØçY…FÇ:h®ÎªëÇè]T4ožrÝÌÚÚqdØÊå464ì1Ñ¹ï{ž*ƒæfBíô\&Ž¹:5¾Ø—7j¬xÔï¯/#ô©:FËç
Îí4ð–[RÙÇZËÖ3éUŽ™=o¡Ð3]³ô¼0_ô½ú ZOL‹||°æ¯?=¸ªkW«›Ÿ¡~³3÷¤dØ:fØ·Ñµ¬Ï××³Ï\Ë¥þXœç§®³™çgØë
@_­¬$ÌX¾ÿÎÀµš5G½Õ>A÷LÊï”wF[”¦%ÿóÌ‰ÖXYñºÕ>Æ¸úÖ/jF—êš¸úÕ˜^«m¡Ñ»Íùî» t«wü•íZŸMWVjeØ
»w¾¨ûñ\PÖèëWÏ¢P¹áÝ{}}ißYíƒPNíë»µ2lÕrõ£y1s¹¤QÎï«¡¼Åj_lÝ<Áw<”KZí-2Ç¤ç›aë½eãQÑ1Ô^WŸzf”KF7Ï=>Ñ;>ê÷7lF¨ü6Ê
ûÅâš+¯ôfúQ¿7As$kŒ~¾™§2}eøÊv“’aëY¯k9úû+ßzüzOËÕw”9·ÃžŸz+‰ç'
´-4Gëž$Êœ„»×®ìêCù°k,XTü÷MUë{\ÓÝjÈžukïv®{sÓ†S§ÜÅ7ÙÁ÷·Ï´ÚûPNès:âŽAVó‚ãË±^~zf¬A“¯.Œ‹¸²R_†­ó"Ÿ1æBc‰]}K+;ÌDûÅ
7ÖNõ Ãž¿>’–aßÝ€s}ôÝ‹ã:£y]ýë}
«m¡Q6ê;Özf”ï±ÎDÏ­9}ß}=oRû|P­rßy§÷RZíkm§ký^|bšýà7+#ÔØaÕúˆóøÆï÷¿~×ŽYVÛ4z†ä{Lû:êõ&ˆ±wKYu_Š‘aëïµv-Çúþ…AûÔ
Wï%ìøî¶p~
@Û@5%}éð·[Íÿ/[’³&NÊûæÆ×w÷µß3ÂÛ”qPª=âê#Ÿš¾>õ¾µÕ¶øÆ­æZ·6âÈJ…/ÃÖÜ_VÛ0ø²‹o­ýÅÓ¼©žsî¿º_õK«¹IÒ2lÕ
qõ¡ÑVÛ0(‡Q½X×24Þ´5QMÏ±þ{”g<qáË°ãøîk¼­ïwI5!¬öÅÀ—ÛF}÷!(#Ô˜ø¤Ô±	"Žg?ÏNxÜ;¶]5ÂŠM12lß~Ó;>VÛ°øæU½«­:?µžQ
rÅ7\Ôºžú¬/“S­h«½…ï*Žû'Í{åë?ÊXçÿ3ýwW?º´Úg4¶[ÇÍj_Ž:ø…kýT×j[(âÈJE¡3lßûaÇ.«†O’2l³våšºîD¹VYø²â'ùµÕ´`¨
^“¯¶æä³Ú_†×~ò/ï-[ÚÃj[VÌ›w™kýªÞÛð€Õ6_F¨º1qž×…Ä7/B”yô.«8æ”È…bdØzGËµ	ˆß| »w¾`µmáü
€¶jLºîO6¾¾äz«m6¾Ú‹zÿ]u§óÁÕ¯Œš£ùðù›úÐÃVÓAÙ¡«ÝË‡©-ž‰ædrõ¥ÚãI¨	+T£ÕµŽŸOmâ|È7+MSèÛ—
„ÍH4g–«½ŒòEIÊ°5¿¬«½®;VÛ(h±s9KçW´(´|Ç!Î¼+
…Î°õ,ÇÕ¿UÇ¸X,š9ó<×úiþ«m&¾ë€þ½Õ6)h¬¸kTKÌj+þûù”óùï’Y³/´Ú‚BgØú{À5¯žÉYm£ z"®}v9máü
€ÒGïÆ»îMä-7Üh5ÿjãë/êÜNÙøúš£ùð!šÇøÆ<IÕx‚o\Ú¦7ÞWÈ²hÞ6ßöî]ÿÎˆ¨¹}ä›•¦)t†­lÆÕÿ‡µÕ•V[¡šÅ®öÊâz~¤{ÇêUý]íÇ½Û
j
åÿ®åhÜ¡Õ¶PøæNÕØìÖYèÛ7OAÔŒ8*úî\Ñ¥KË3¢GFŒl™sOuT#DcÞ÷o~oœj|ø~3¢®_Ò3ÂË.¹¤å·ýÞ»§T³çõÙs.Ü°dÉušQóÉj_øžeJ«¡ï°¯½æ
h aûþV(Ä3_Mì0×Ž¤ŸŸ
P¨ÞƒëÞDY“ÕÖ‡/§Ò¸\«m®>eÔÍ‡o½sÉc|}5ï«\eµM£:Ü®>4¦½µëòf2á¾û½ÇF~TWs`ÚÃãRÅÌ²óÍJÓ:Ãöe$a3ìÊõïŒržgû+×ZmÃ’¤Û—“åZkÞ‡ï
Y\\ÙU.Ú³k~ÒÖ©Ðöæåoôrõ5#Bã•Sk,¿jû=Tÿ•oÞÌ°F]¿¤d„Êî‡öëŸRF­÷‰tíÖó0k{-­å =ãvµ2¯rÜ:Ãö=ƒ\:çù‹¬¶Qñ]{Ã\Ã“r~
@yã«eœÏ=”Úºú”ýzõ²š{ñõæ,¾|,—<fîÔ'ÚûÖ7ìøöí+WÞæj¯ú™VÛb¢Üã³Æ†?ú¶7­êŸ(Ñû÷:
™iç›•¦)t†­sËÕØ[ÏD\íß_½z Õ6,IÊ°uùÖ¥†=.…@5]ë”KÍ§¸(t†½î•W~éê?jFœê0=÷øÄv?ì«!•Q×¯µ3Â‘ƒîLi<õ™ï×ÿ²¶-­å‹b<‹J¡
3ìkÞdí»BfÞßÖ>?
îèÝÛ;Î7ŸÚÕéÇ¶uÅ›½­ö>|÷`Qs4qæ1ÊH|ó¯©‚Õþ‚óÏWûÿpµ›÷“q#GŽÅv©ìèÃš»4ž2åÚqÕ¿È7+M“ôûÓ†ƒŸ¹Ú¯Y¸0÷/pIÉ°õò­G±
Ìçý”|qÕÍ•óŸœ^¸‡Aq^3],~nVGWÿQ3â4zn¦±¯_47þÕ:ÖùuýZ+#{÷0ï³Û8µÖChÞgWÛ¨û2N aûê½Ó0ÏÔ[ëü
Hã«-«{I«­…ï~T5sÍ)}÷`Qs4qç1Êë]ý)›VFÄo§Ï8ÇÕVc1¶"¾ù<£¨œ®vÇÖi³'Mn—Ïœ•ùd¥™$=ÃöÕ8ÕXw«mX’’aw½¼KYgØ¾uÊõúq_3³‰3Ãî
qM÷”jcXÇ8£®_±3Býþh®k;âÒZá»6ÄùNIT aûæÓ.¦dØ     t4Í7íó¦ÃÿS÷úù¨>|÷Ln­ž_Qs4qç1ªgíþÒŒ§Î
jûñÁšC®vÊ¶ƒÚµ6Ÿzú\ßxÑ¨j»ÆŸsnôMÎ'+Í¤T3ìg'<[Ù¤dØAóÅËÖÊ°ƒŽA®×Ó8ˆûš™M\¶æÎúMry¬éÐŸ>8°oSÍ¶-Sv¾µúöµ‹]¥1ÜšÓðþ!
C[ÞcZ¿dq÷8Ö¯˜a§‹/N}p j½µý™ž¹ÿ»Îýú]ïÏÑ¾šÏQ5³Ueü¨Ñ©a¦FÜ1È{ŽZë$|×†Ö¬•SèÛ·ÍÅ”
’Î££ïmµ<H5‘­õsáë/jŽæ£yŒ¯Ï ù-ïî?À¹­Êt­ñÛIàÚ«®Jí^ûö8æ“Ÿ6Ô}Ú³ûuÖbÿ…|²ÒLJ5Ã^0ã©èÁ¿‡RÈ°UË·¾ûÚ«W[ëY‚ŽÁ}ƒ‡XÍF!®™
™Ä‘akþ[+¿Ö³ÆÆÊ=‹•Ë*½à‚¬n[Ðûù®Ÿ(VF¨¹Wì^´/¤Þ÷QN­¹.¯èÒÅê¶… sÔj+|×ÕD·ÚŠÖÊ°›÷U®±®Eqf>ÜbŸ
.j·oê»ß,´Ê6;v—dâë/jŽæ£yLPheÕ.ª·nžèú|>µÄ[ƒË/»¬enKÝË7ÏV~f¼Xš|²ÒLJ5ÃVögµ
KR2l½××z”zÁ·íù\Ÿò¥×ÌLâÈ°ïÝ½È·ï”]ëy›ž»åB©eØ/?í^ß´w~ÏíwXÝ8)T†½}ÕÊ~VÛBQèÛWÛ¦5kÜ»(Öù
ÍE^˜Ò|z¾ûÍb8kâ¤Èµ|}Å•_"Ñ¸·ÏþèêWYuöçUó÷Ì±ù{ög•µ(Ã+UT»Fã5Îqß¦jº¯ÎŠOÍ_vz>Yi&IÏ°}Ûçxá¤dØAë‘Ï´¥‚ïû2gò
or›`  qÍÌ$ß{øÀÛ½çÌÍ?©&H>”R†T?Lªn“~¯r%ßÛWß¤ê½ XmE¡3lß÷gù‹/^bµ-&Å8?
\Ì›ödß½f±ÌeÞH__Qs4…ÊcÞ|qÞ¥®~•Ug¯»r×gíÙ5ßÓ}É¢95æoùÜ¹4VÒ•ÝgkÕO“OVšIÒ3ì†Ý;_pµ¯Û±mºÕ6,IÉ°…ïñ½ÓÐ–øìpýq×¶¿óê+
Ý¬¶…¢P×Ì4ùfØ{Ö­½ÛÕ^ÏÂžsA”R†T?LuC¬öùfØ5Û¶LvµUí«m¡(t†­|ÞÕÿîµk[m‹I1ÎO
Íû+×ºîG4ÎõPÅ®qúI}m“kYÊ¢Žtõ#£æh>
•Çhý|µ4VÎŸß9ý¹öíÛ§Ž55œv}®5kÞ‹K:]œÒœiAµkuŽZýˆ|³Ò4IÏ°w®yk«}P½õ¨$)Ã>z¨þw®ö:o¬¶¥ŽïºÝšÏ·
uÍL“o†íËýlÝ<Áj†RÊ°U‹ÊµÕ#ÊeÞÜlòÍ°}ócjì¸Õ¶P:ÃÖû2®þ?¬9°Ëj[LŠq~  ’Þ=nòÚýªV›z
4¿•ï>³cÞr‹wyŸlµÏÄ×OÔÍG!óßx«c
'”]‹)>äÜFÍ¯•Ï;Þ¥†Ž§²jßñîÒ¹sÊ"ß¬4MÒ3ì¦Lmïj¯gDaöS’”aûÆjÖïÚ1Ëj[êl^þF/×¶+ƒ´ÚŠB^3E>¶êùÎÛ‡ïa5E)eØ¾g
{×¿ËÎÈ7Ãö]åõÝb+‰BgØ¾±ñªõ¦šoI¡ç'  @!ñýçï:
ÄÏªß.èâºvk¼Z¡rÒ£‡~áZfÔ±¢¾ß¨9šBæ1wôîí]ÿÇî½¯å3Íû*W¹þ{Øúm‰GFŒôî/Õ¸µÈ7+M“ô[c|û)®:ÉIÊ°_{î¹\í•ùtºøb«yI3ã×zC¿
^½¬æ¡×L‘O†4h\s”R†­ß[×2âz‡!ß;èùzkýú2lýV[mÃ çŒ¾mVÍ7«}±(Æù	  PH|¿·’
¹øòä÷–-íaµÍ•µ‹]åûÍÐ8í°øúˆš£ù(t£÷ƒ}¿›·Üp£sû¾lnü°ó¶%4ÿ˜o»IcÆZÍóÎJÓ$=Ã¾ú3ê#ŽçRIÊ°5Ó·.z>gµ/e.½¤“÷;±cõªþVûBPè
kf>¶ïš*£Ö±òQJ¶Æë»–±`ÆSùIåŸa½säjåz'¾ë³®cVÛ°øþ.Ð3‡8®ßqPŒó   øþF‘dØ
Éä®¾}½×ï¾={ZÍsæ¦k¯ó.wûÊ•·YíÓøúˆš£ù(t3kâ$ç˜.©Úá®ßZÙTðe.aê
ä›•¦)…[ß!ßy5õ¡HQÚÏP›·^z©«¯ÿ¨ß½8Ž‹ö«=ïézy›Ž±Sš×µíª·¯q¬Å¦Ð×Ì|2lÕ6ô·QžQJ¶ov\Ï~âÈ°ƒžw«îF±Ñok]¾hnüÉj–%³f
_èÛæÖžM1ÎO  €Bâû­•dØ
ÉDy¨ëºµ¦G.ør'Íß—®máûÝ‰š£ù(t£y³4?UÐoh¶q½ó^(T¿aß¦Æ]»Sç„oŸ„yÞGV*J!Ãoªó-×1§ªã#˜6êw/Žã2wêÎà²yÕ;Ã_”Wvì
xõ±‚â«™/›ª*–Å9nó¹Ç'¶7rTàg
}ÍÌ'Ãª‡ýÊ3Ïäýr‹ÆÅÞ»{Q®ë—I12B_­ªÃ»Zm-tÞi~bßþ¶Ú§Ñsß»zß$Îß]ßVÌ›wYÐgT£Ç·MqÍÿ¤ßPßœÏ_57ýç­7æ9mÿ˜¡w[k¡ç'
@!ñýžK2l €ä¡\Ç—ŸêÞÓjŸ/AcÂŒ«¾öQs4…Îc„j¶ý†–Úïizìò…§Æ?[€¦ìÌµO4Ö6LFGV*J!ÃwîxÖwéØŒ½{˜ÕÅ?¸çö;R
»w¾èë/Ó¨ß½8Ž‹ŽÐœŸuïo{ê¼óÎ³º
jŽ§³Ê¨Û7z¶ã«%ã¸–_Ñ¥Kªzëæ‰êOõ€ƒ>[èkf>¶Ð<®öùÖiÐ¾>QÖ/M12Bßû_Ðøw½+•+×ý²[êƒUë}ûBZ}d²Ë¦ñ¾~êw½?'ì3oº6¼óê+
Ý´Ýº¾}6è9ÈúÅ¯]Ô6 –,¹Î·=çóÜ6,Ú&-OÛ¯çrÖçE1ÎO  €BôwJ)Üs
”z×wÝŽk<Qê_U³mËd«½ð­\¹R¡ó4Î,[kdÈ~üHõþíš1tíË(«ÞÛð€Õ^Ä‘•ŠRÉ°5^_óO£¬LPã¶Óï%.nÇ­Lnûª•ý>;Üð]P
ÙFýîÅu\6<ðoÑOêk›zvÏ=—ª7q`Ë¦Ç2¿¯Q··¨|Ð¶+ŸÊ%çÓ{"ËçÎí¤±Ÿé¾J=Ã~õê¾ý´yù‘'ÂT–æùNØõKSŒŒPcn}ëûaMõž¨ó.hü°ö¡oq¦
V_™è72¨OåØ¹ŽÇÖsÖÏ~H÷eeØâ£ºš®õÐóTÕçíûc '|Û¬ýñüo¦DÿRgpùe—µÌé9–  Êßo¬$Ã HµÛ·Nu]³•9ZmãÂ÷.³²·0ïèû~wâÊ•
Ç¤iØ½ó… ßQ©±–ùŒ,¾¨çøúì9^}E´½|¦í‡®>•%jLlâÊJK%ÃÚßAçT!ŒúÝ‹ë¸ˆ :àRã«6®¥öñ/.¿¼¥fˆ¯†JÔí-ÊÖƒ¶]ë¯gIa®!Êá
Ö,\xÅ±¦CÊî§Ô3ì!·õ¼gQmqÕó
½ÇP³mË”°ÏÃ®_šbd„zÁ7Ç€<z¨þ+=Ë²žôºîúÔÆ¥¯ß ×Úi;tà;îi5^™n˜wr.»ä’Ô¼iOvøø`Í¡ì~ÂdØA5ºõ;­yF‚¸ªk×ÔÂ§ž>×úÜÐ~ýÍçÛú^
+‡·ŽQ=—Ò1ÕõÂõŒ“  Ê… ßW2l
€d¡1K¾1š/?î&^˜2Õ[ÇVÿÍjïkW®Tè<&MÐx¸´¯=÷œê'€ y¼Òê¾[™¯î½UƒS¹¶Æ„)/T~ôøýcZr«ö²Æ—Zë“&®¬´”2lQñÎÚaÖñˆjP^õ»×qÊ¯
‚j¨dz¬±á¤ê¶/{þù‹Uçyü¨Ñ-¹äÌÇ&´Ó¿Ó~û¤¡îc«Ÿ¨Û[(ôÌïãƒ5õÖú=\ÿí®·×Ü¹`ÆSçh›ï245}Üø–L­e›=óü¥-õ[4VîYlí'íÊfß|qÞ¥ª5¡
÷TC&JV›Ëú‰be„V6,?o:ô?4ÖY×8=ÛÐØ]ýoeøQßÓHk­W6zö²ó{ã¬~Ï›¿ész~7yì-ç·þ©šù#®wO‚rá0¶ÞSÓó° õhÞW¹FÇJ×­‹~Ï*7¼{oæ5%
ÌwB×&+Ç–—­sSóí*ŸW|mû´‡Ç¥ô]×¶7íÛ»Âz7‡  Ê… ßC2l
€dñÛé3Îq]¯u¯Ô¥sÞåSC£w}÷‚£mµ÷ýîÄ•+:I£ûó š¶z—?×w¥‹M˜;•U†s—&®¬´Ô2lÏSfiíÏ0~ÑÜø“²‘ cµît\Ç%Î‰tíæb×µ&º^ÞEï
,4Yëœm!ÃÖ8sÕ¶¶5ªºNk>Ä|×O+#ÔõÁwÌò5è{h­—}·UÛÞZn>†É°ÅÎ·Vßnõeö;¡çjVö—dØ  P.hü”Ï‹/ºÈj
EÄ7ßRk<s¬ßµc–ï~J5³ƒðµ‹+W*t“IÐ—º_¶Ú'…bdØÊFôNtâÊJK-ÃN3{Òäv£hí[—z¶¥1„éïUÐ16VãgÄu\2Ñ3!µÆJÆa\×š¸¸ô’N©C»Xë«m
!Ãªãg.øÁ}›4—¡2À8Ö¯˜¡Æð[ãï£¨çz—&ÎëD}·}û&+×¿jÒ	Õ«þ¨®¦Æê/È(ß‰‘ƒîLå:æ=ŠdØ
$ô¬ïþeÖÄIv±Ô˜Ñ»®¾õY9~à p_»¸r¥Bç1™h>ßö¨Þh)¡º»aÞ×ª²Õ±–ï"®¬´T3l¡÷ôN»«Î±KeÞª/‘}þù²)½Ïî^²Ÿ¸Ž‹‹~½zä<T-
íÕ«M"ÊùT? s®¶|Uå’VÝÝB_3ãÊ°…rlÕQ¶¶=Hóª‘Þ/¥˜a=ûP- k{-UgH}‰BdØiT÷'ÎÜ]5>TO'Ê<–ºžæ³Ï¢~'ô¬!ìœ™QÕuR¿­aß£)öù
å‰êYºî=ÂÎ£7ºgÒ;Ø®uÒ}eP[ßýX)fØ¾ãÒXYñºÕ6©è}=‡°êZ[jn1Õ¤Í§žJ\Yi)gØi”qj^CåœÛV®è£1ÖiµÊr”Ïújµèý×:~v¸þ¸³A q— †
˜Rmcßu&Œé:»zæ%çjMt=W-ÞOê>µ¶Ïy<~P=hkŽÃL
}ÍŒ3Ãª¥ã¦æp¦ª«£}£þ™”j†-”Ãë:µÞ·ÞwPmìì¹R™a­¯r×æý•k­ut©ï´®yÊÃÃÌuêBë c®úúÖò²4f¬Õ½“+ºtiy©ÚöÖ2|ê|×s)]®½ê*k‘
?£5ÎO     (?4»w›~¦Æ·Z¶kdÐ¸¿\ÚDÁ·¯òÉR]¨.ÆçM‡þÍuOøØ½¡Ês&e=Ê”™6UU,S>æÊ¾lnüweÖ
»w¾¨ûtåqà;Ç¢æ‘Êo]ý¨qèÜJÚ÷3­ë\U=«m6q—0è{öÐð{ZòÕS×8No™Û gy§þQ]Íå[¯>ûìùAy~© ±ôÚeùGª÷oÿ¼éð_2¶ùïÚæÖRž
«œxpßÛrÊõ
}ÍÔ_WÿVÝ)íqÕ>pÛÚG:_ö®g„Æ£ûÆ«Æµ~ºžò:„Ækl¹®Ó¾z<º~«6µžƒ)Su¡ßa×6È¸Ñ:<ÿ›)íUû_µÒ²ënèüþ´áàgš›Ru†”[ÇùV_:/Ò¿oº
~(×Örõ{¦¼X×=#Ðoúe—\bu =_Ò÷µjãú1zVìzÇ&sÛuíÓò/ét±Õu ­y~
@ë1oÚ“<9ÁãÊã“Šîå5wF¾÷ÔP<|cÅ÷¬[{·Õ6©(ßŽ3Ó‚ÒåÂŽ[Þ!IçrWuíšŠZ¿­ ï„òáô¾Ð3'íH>\Pü÷ê
 mã«ë¹|îÜNV[€b³é7zºÎW=‹±Ú        @iqßà!ÞùñôN7@’Ð{ÇN¸ÎÙ›®½Îj         %†o4Õõ´Ú›Ù“&·s¯GüÂj
¥…æsåò–n´š•k®¼2õesãß\çëÊùó;[í         ´Ø½öí!®<°y_å*«-€EçK/MÜ¹ãÙçŸØ.ß93ïèÝ;¥9F]çë—ÍÿAÝ
€¶…òEÕ¼ve‚“Ç>`50ézy—ŒóÿÝ‘Æÿ×¼¯rÍš…¯¸ÈÐT˜L»]»v©a¦öo~oœÚûÞ`îQ
€¶‡²DW¨ùò4o@¾dfØ.®ÿöPÅ®•Þ½wûª•ý6.}ýYñÎÚaMUË¾lnüßAíå‘êý[9_        Úçœ{Nêó¦CÿæÊ©+qaeØùúÙáúã]:sº
´5æM{²ƒ+TmÕˆƒBfØÖVWª         h{|R_û+¬\ÿÎ(«-@X ‘aë9ËÚE‹®êÐ¡ƒµx
(Aî<Ä›+öíÙÓjšÎ??µmåŠ>×ÕÔYÙ´åg ?¬_üÚ5¿¸ürk±
PÂ,|êés5‡^¶ï-[ÚÃj+—tº8uÏíw¤Íœyžæo¬{ÛSÖØu¬éÐŸ¤ÆWýAãé=TÿUÓ¾½+4·ã«Ï>{>ÏV
þ•ó;œ—êÕ©""""""""""b¢ìqÑUdØˆˆˆˆˆˆˆˆˆˆ˜HÉ°1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•“*
6""""""""""&U2lDDDDDDDDDDLªdØˆˆˆˆˆˆˆˆˆˆ˜TÉ°1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•ûçïÞ'5÷¾Ç¼
¼âF³R÷ñþÃÛnµë”;G;û¿·G³m1ä@DDDDDDDDL†dØÿª²É*VŸ8Øô\Û´kVßÎÝÍ~JÝÖm}ÌµýV»°~µeÏ|Wÿï=»à2«m1zÍ-©?î©ÛtÜzéÕ
f?ˆˆˆˆˆˆˆˆˆ˜ŸdØÿT™ä±
ïO÷å–ŸoÜ9³òkYî¶´rì½/¿ÑÃêó“ûŸîš¿ä_^ùÅ¦ÝsÊ%¿–dØgUŽí—ÿcmóß=2¥½Õ""–¦ÜzWjÂÀ{~&õ¤‹+öYŸþPJ™¤
+«ünOížr»_%Ãþ§czL:Ðü×úžª>rjT~fˆˆXz~·»¾ÂuíŸ;f‚Ùã“»[jÐ•7¥NîkøÄQ6þ>)óS2ìuÆ°R'ëšÿêZgmµ±ÛždØˆˆˆ
ˆˆˆÉ»[ªiåÆQ®{Te–O¹ßlß%Ãþ¹+§Î:ßµÎrý3ó/±Ú#"biI†ˆˆˆˆˆ˜Ë=Ãž7æñv¾\rëœE]­ömU2l·½½ù×zŸªkþ³jŽXí±t$ÃFDDDDDL†åœ
a÷î|mêÇÊúC®ûÓo¶W-+çúdØnUwæÔÃ_»ÖýèúOXí±t$ÃFDDDDDL†åœa«þƒëÞôdí‘¿<rë]fû¶,¶ß—žì»¯ºÙV{DD,
É°“a¹fØƒ»õJ®iüÞuoº÷å7zXíÛºdØÁ~þÞ®g]ë|gíær¿ˆØ–$ÃFDDDDDL†åša+§vÝ—ž¨jú¢×Ìöm]2ì`¼yPêd]óO®mXüè“¬öˆˆ˜|É
°“a9fØ¯¸1uªúÈ)×}éÛ3^¸Ðj_’aÛ6,_w—k¾Û]³Íj‹ˆˆÉ—1–c†½yöÂ.®{Ò+ë›5Ï£Õ¾$Ã¶Þ½OêT]óŸ]ÛñÜÈqf{DDL¶dØˆˆ
ˆˆˆˆÉ°Ü2leÔªâº']7cîEVû|½ûÚ[SÏŸZÿô¼Nû_[yëÑw·OùvGõš?î©ÝõCUý‘S#uß¬tÃŽiµK×XýÄìÆ÷jö—IË°uÜæØNûâÛûVh¥Û
üXÛü7í»cÞŸ®ýª}l-?.–¿;Äµ_oÝ»Èj‹ˆˆÉ–1–[†ýê£ÓÚ»îGOU7þ¾_—ëÍöQy}ßÔö^¹RYô‰ý‡>w-;’U
U½¼¼çˆëú˜ËÎÇ¤dØ:&Ú'÷þÒÜ7ÿíÉºæ¿^ñî°¡×Üb®G¾Žé90¥Ýµª™mµGDÄäJ†ˆˆˆˆˆ˜Ë-Ã>º~Ç®ûÑ¯®îmµÍÅ“Ÿ9×Ê\sñdí‘¿ìxañU…ª
}ÒÚö­—^Zñ›gÏ;¹ïÐQk_øÔs
y·Ö%_¿Ü´û×òwÍ_rÕ“+6"""""b2,§{Ð•7yë?rë]fû\,T†öË-¿Õ•ÖzDµ53ì»»ßšúbÓî9Ö¶‡Qc²_ýõí­õÉÇWÆMuŽíÿ¡â`µÕó÷Î«
z¦¦“zsÒ3çîž¿¬{ÓÊ£>^»e¼®_o­X¨ÊOßÙ6Qïhìœ·¸›®zÂê»Ô~mŸ–ýPÿÆÚAºŽªN•žê]ýïßmÛûjãÊõ#VNuþý7
0û+wsÉ°'¼§åý¡×nŸp|WõÆï÷4Tý+íÿc›vÍÚÿÊŠ^³GŽoyVk-ÏZN¶îë]÷¢ºÇ´Úæj¡3lùÕæÊ—âÝZö§ïnŸ|æ^ÿkk›£¨»s,öíÜ=uª
úÈ)×²ë7ÌlˆÑ|føCgk4½»}Šê+Y×€
UK_™âØ_Ýn.7É¾ôàäv_mÞóâ™ëÝOÖ6gªy–=þÔ9qå©zFž×!Ó·§?ßÑ×F¿_zgFsD(ãmÉÝ÷þ2ûj»”É[Ë.„a3lmÃš'çtü¾¢®ÊÚç™çžæáˆkß#"""""¶
eË)ÃþL5©÷‘[g¿ü«m®Z¶ÆÇéþüÈ[[¬~mUï´õo®¬Úº÷Õ[ÎTuE¬u‰bkeØ¡¬jøHû¥%ç¨n<n~þŒÊÅïìö+s½rõ£·7?âZnÜÇ»¥¬ï{.*ûUNª÷u¬
å'Éq½§4¶ÚÚ>K]O§Ü5Ú\ž¥ï·Ã5_¯Þ!Ò˜ø°óXË.„a2ì…Mi%»ÎöÛûWêÑÏ\DDDDDÄr¶œ2lßøÞ±7ßa¶ÍÕÌ[Yôñµ›5ÖìÅû'¦î¸¢‡Ù^ê=ù·g¼
pá{ÖûîO×6ÿI58¬¾Âš¤ûTuãwÊôçÞ÷Xª×~Ö—Þ‡ß:gQW«v¶ÆZë•«/=<¹k™#oµEÄhZ×Œ|ü±²¾Q¹°µIpÉcÓ;øêcå¢r|WÖÅ0¶Æë7ítMã
÷Ö:ej-»eØz.Úò.@ˆu·<óûuìÑÛî6×±\-—[9µë¾ñÇÊÃZmóQ¶ÞÕÖýûˆëú˜ŸRcÖTÏÕw¼íùW®°úk2ìSšÿ°ù¹…—÷ër½ÙŸÔøIÕÀõf
uÍ?êy…ŽëþÓ5M'xO1^­kG¾êygÒÇÅê7ÅÚŽ\Õ»@Öò}Z¶j¶|³½j™µ.­eB_†]±`éõùÖ±ù™UM_Œ¼¾¯¹Nˆˆˆˆˆˆåh¹dØË'Î<ÇuÏøÁê÷Ym“¤ò\ß
=µ²r«}X[3ÃÖxõª——÷Ìe®JåÅŸoÜ9Ó×wÍâÕ}­>rUïƒ»–©ù½¬¶ˆ^ß÷;­jéz¨yUçGµš4¿¡þõ¾FÚß¿àí¤>Rýj«Æ”öžéíš¿äšÕOÌ¾@s8ª¶‘ö…Þ
m±¶_í¬õp”akÜ¸Þ²–íÓZv!ôýÞ†õtMÓ'küÅú\ZåûI=ï[ÓrÉ°UGÂu¿¨lÛj›4•¸¶EsÆ5·ckeØª—2}È³}í{GýTuãï•(w-sÕÔ9
ç[m1¼Y×½Ÿ”Mï}ùšðîkíšJÃ¯í“Zñ›gÏSm'×w6­r_«¯b;¾ïÐTPý]Cõô[žCñøÎë|ý(#Ïž·0Œ¾ßŽ*Víë0ZË.„Q2lý«¶ˆÎ›q}†¤2j
‚©n¶ž!èsAý¨ÎŠµ^ˆˆˆˆˆˆåf¹dØªKìºW,Tm‰BªšÐ¾1xcz4Û‡±µ2ì|k±¦ÕB_>0sØƒfû\|eÜÔö®ååó^>"þ\e€zßB9t>s0êy–æô]+”q[}S­ïñ]Õ
}ë«q×ak/¥û«]ºf€¯¿“û>qÍA¤ï·Ã§Æekþb]û5çÞ[I«ÿ¿æÉ9.}ûvÍ[i-»†É°µ
zwhp·^fò±~ÃÎô[³Í×ŸjÙD9Žˆˆˆˆˆˆå`¹dØ?VÖ7ÿì>±®ùÏV»¤ê›Ÿò7ƒF™mÃXê¶æ·ôåüÿ?{oâ%E•ç}'â†-î,‚"ŠŠ"¸ ¨l È"*‚²ˆ²*("  *
²ŠÈR²ËZìPUT¸!¸µcÛ¶
žžg¦O?ýÎûÌ™3sž3çý?^¿åd›”÷Æ/"3"*³òó9çsº›®‘ñ½7~Wã5­öùè«¹~rÝ¶ç¬¶ˆÞ¨¹ªå¡…+ït»ò‘.w›íÓrÁ¨‰Îwp¤òë|ß1Q?›o¹QkŠ„Í°
³óäS3*Mƒ2lýÆT½³ºWØì:×>×Ýî¼/ÉÊû;ˆˆˆˆˆˆçZ¶žë]óíÛ»(úž«g|ÒlÆRÏ°¥¯N€Æä[móQï»Þ×¸I«-"6ÊÄ}õ9Š©Þ”¯Ç•U5…ŒÛÕoä
×›wÏs-[u™¢äÌV†­käþ·–w‹²Ì¦Ô›aï­þXõX¬öAj<¶¯¯Uó+XíËÉrÈ°U_ÃõŒX¬ãc•§»õÞŒêB¿ùäsçé]êÍ3æ·ÙÿÆ²®ó¥zš¾y±È°õÀ›+c
Ïì«9eµÍ×vUm¼¾ŸÕýÙj‡ˆM«~\×‹=sßhµMÃi=îËrîðq-¬ö–ª³íËS£Œ
Ê°Ø}d©ÍqëË°g]ð>—Ÿ­Ý:Îµ|‹þº›íËÅrÈ°õÌìzF¬Yº¦Õ6IUÇuÖ1™swÒ<PÜuxÇÙÃug|Ïÿa$ÃþÕeã^¸À·Ÿâ®Eõ÷[÷-Ir¿!b
2VÎ[z³ëÜ­_±~Õ6 µ®íS¿™Õ6¬¾ëò7[*Xm³ú~;T¿<©ën’ú2ì|æ»tÔ7QLï
"""""6µåa+×u=î˜½ £Õ6n•[¯›:»õ×[+¹ê›*ö¯Nxp°7ˆkîËÆúÆræS/ÓS××¹«k¡Õ6 õþˆkûÔjµ
ëÒ±î~?Õÿ›?û~;â¼¶§iÒ¶jPé]×:4—¥Õ±\,‡{æ#£œYæúç_»Üj—Ê05oØ™Ã'þêÚ–¸$ÃþUÍÅæÛOãd¶ÏÇã«>xÔµ>Í1iµEÄd½¿ý-™'º=
y¡ÿcÕßXöÌ´5¯ æ-üzóžù®s·2ì k™úê¬öaÕuÊ·ž°¿-dØÑõõ}ê½«-"""""b¹Xö›£&œçz>T­	«mÎbüygÔÿÁ—
ÄiØœÁ²9dØqä1QÕ¸9×ú”›Ym±p{w¼­¡FÓöÙ:_Y1øÛmû–ýioÕ
ßœ–ÅaÏ}|\×¶é]žWv2ÛGñÌ¾êO]ëRÖoµ•dØÑUÍuçñMpîDDDDDÄR³2ìwFO=ßõ|¨·Úê¦ç_í›'Ë§²Õ8U½‘ÏÖlSµôý÷¼þNe78gØ˜?
VûÈÕ6®l¶9dØw]ÝÙ›akl¾Õ>¿½ê×úžº«ŸÙóSsà*ünÇÁŠ¨×[ËbÈ°·Î|£kÛ~¬¬ª·ÚFõË
;gºÖ¶.8vtU÷Ú÷ý³Ú""""""–‹åœa'=_’òfßsiV£ûrÓîW•Q¼2ø©ÌÀï4—+}ÏÕdØçêÛïqí§ÆúÆa“a#Æ¯êh|±açßy‡Åakþa×¶E™k1¬µ+Ö
p­ëtÅ®—¬¶’;º¾9;$u¨±2ì×ë|{Å³3.²Úæë€Î=2Aµ¯5ÖZc«û^Ÿßó)¶íýnõæÓzÜlŸ3ïZ9b|j~Áºå}çwœC†í»¶vë8«
mT¼¹ò×º¾ßyh‹Õ6h[ã¼¶§iöÓ=òþV ¿­—Ù±,‡Û7Æ)ÉgêcËÖöó=“*Ð»ïÖ2‚$Ã¶
šmD÷Þfû|üxõ¦®õ‘a#ÆcŸënÿùúwh›ïÜòìÁÚïuíT¦“k·Ž×uzÿ[Ë»mž1¿ïšW¶oÎ¿$¶Mõ¯\ëÒ~³ÚJ2ìèŽìÑÇû[Å;<ˆˆˆˆˆˆ¿X¶Þ7w=VÎ[
z³Õ6U‡ùìÁg]ëü±²ªFãƒ­eX’aÛŽ`7èÙö&³}>ê}{×úî¸òz³-"«ó6L~­ëïéŠíÏo›¹ ýÜáãZhNUkîC]{\ËJ"'Žª¯FµúÌ¬¶Q%Ã>×42ìa·ÝG†ˆ
ˆˆˆˆhX¶ÆÜºž
ÃÎQÕéFxŸG•§XíÃH†m»lÜ¸Öqö`í?YmóUsÊ5^ß™#õ³Ú!¢mõ’µ½}×VùÃî#{—Ž}áÕ±–ÕØbÎ°}×ãÏ×o›`µêŽÙ:ºÖE†}®qfØÊ©}ßi½OdµGDD
DDD,Ë!ÃÖØ=×³¡Æ¶YmóqãôyW¹Ö÷Ó¡º?w»¼£Ù>ŒdØ¶¾ùµn«m¾ž=pìëÆëû±²ªÞj‡ˆÁj,õ‡ëÿÍuNëß+ç½sS!ï;s†ýÑª
¹¶íëÍ{æ[m£zøíU÷¸Öõí¶ý+¬¶’;º“zõfØq¼·…ˆˆˆˆˆØ,‡[ž=Pÿ‡ÆÏ†?VûÈj—¾à÷[÷-±Ú†•ÛVc2]ëP}«m>úúJ’ÌÌËÅCVöp_ríÔÙ­
­ö–Åœa«f·kÛôÞ‡Õ6ªŸ¾¿e´k]ªÉmµ•dØÑ}ýññÎy§:\ÿ«-"""""b¹X.öwÛ¼ßøùPc÷T»ÚjÕÚë¸žG¿ÚX9×jV2ì`}õcäØž›íóñ™^ë¬]¶¶
¿ÕƒõõIÅÕ7XÌöš)³.umÛO‡j°ÚFÕõ[)-\y§ÕV’aGwËËo´u­ã»ï°Ú""""""–‹å’ak™ëQïðZm£ê‡ç˜92ì`k—¯{ØµüvUµÚæ«/Û<c~
«-"úU_£¯ŽÈ’1ÏŸoµc1gØÓzÜÛ'7°Ë]fû°ªËÙ#õÿâZæ°ÚK2ìèúö™jÈXmËÅrÉ°7¿ôú5®gDý»Õ6ª¾zØgŸøkã¾5ÿ“Æß¹ÖA†Ý!ótÏ‡2g
ŽÔÿÝµüŠ^½ÜjŸ¯¯Þ4ÂµÎ™Œ2Û"¢ßá·õòf¸#{ô1Û‡±˜3ì^ínöføËž™v¡Õ>¬ãäÝÏº®Zí%v45G†æv­cÕÄ­¬öˆˆˆˆˆˆåb¹dØ“û=ê®Uc}¬¯=
:ÖYÛ²ÐgR=ëª–ó™#õó-¿Ü3ì>×Ýžù±²ªÆµlåþªYm-#r×|Ž‡ëÿMù“ÕýªßÎwÍëÛ©›Ù>ŒÅœaK_Ï×o›`µ
«¯î¶2V«mV2ìh>ßox*cìKÝrÉ°5þYã ?#*Ž;c¼»Í_Î¬õ‰n˜ËhìÜáãZ¨6¦ïY7k©gØ»_{»³ÕÖç#]îÎüiÏÑ*ß¾I²¦Ç„;sê™"nP}û
r‡-·Ï^ÐÁµ}zçd@çf{KýFúÆ×¯X?ÈjŸ•;šŸ­Ý:Îµüo·\eµEDDDDD,'Ë%Ã–z&t=+.5±¥Õ6ª'×o›àZ—<{ þKÇ¾pj-Cÿÿ[#'÷õÖÊE¾e5¶
Ô3l©ÜWãÕ{w¼Í\Žìqe§Ì{“g^òÓ¡º?û–ùÝöÃ­ý]ˆÞ\y‡k½Uï¬îeµEÄ`õ~…ïÜŽ£¶Þ£8¶lm?×ò‹%ÃVNí«'¢úÿV{Kõñùö±Þc²Úg%ÃïÄÞC¼ÇtÅ³3.
²Ú#"""""–“å”aïyý.®gEƒ²ÚFUuE}Ï¦YÏ¬ýî“Õ›Fj|Ýû“_ùêšê9ÿËºžÚ°ãÅŸ×ÿ%¨½Ëæaÿcÿ©ÿ»òû½¯/¹eñØ©ç¿2ø©†Z×c{>œÑWÎýÉê
­Oÿt¨îOAË9{ðÄYÕÓµ¶©5W¤kÝoŽšpžÕmu»Î±/7ìœiµ
rÈÍ÷d¾Ù²çMßõ£X2lé³«ßšÙCG·°ÚûÔ»A¾¹£ÎEL†Î ºWªKÇÜˆˆˆˆˆˆÍÉrÊ°}ï£+Qý«}T¾µÂ96·Pÿ´·ê„ïïæ”aÇ¡jºÌ6&ïl'ŒªeàZ·¾W
äˆñèËo¥ú¸¬öÕ5Çœ…×Y}…Å”aë7Ì7_­>‡j+[Ëh¬j0ÙWý©ïóÏ2Æ\F®å’akÞ«­Oíó?î:²Ç·Ï×NÝÚZ"""""b¹YN¶ô=j´Õ6ªz?ýäÚ­ã}Ï©
ùx|eÅ`Õïö}2ì_U¦5ÉÇê%k{»Öÿñ{Ÿ°Ú"b8žr¾ï\W_•æ»U]!k9÷w¸5³qú¼«Îì?ö¥u
i8‹(Ã–¾y³×¼åÏ¾º…ÞgqÍE›Uï¹XËhl¹dØš_ãÄ»›†Oê=Ô\FVÝè{´ÏÿéÃïéï¬e!"""""–›å–aoyù¶®çÆvÙkµÍGe*'Þý`˜ïy5¬zæÿÄø
Ô¥h®öÏÇa¿Uƒ%ŒZÎ¨;ûšÛQ¨êOðã,äÝ~D<WÕ³ÿ±²ª>è¼?{°öûºåÕ'©þ+e´Ró ìœ³¸Ó—›v¿ê›o×g±eØúMùnçÁ
AÛüÝöï«6Ußë»ý¦ý×ÞÖ°?¾Ú¸kVÐ246ûÁ]Ííil¹dØçî«š“šû@ýšß·ÿõÝ3šÏAjìüËƒFf-\y§¯vHÖ4ê^!"""""–ªå–aìr—÷]ì|ÞÃëêI³.ùéP
íÖ³ðoÜ_sZõ²{¶½éœå5×[cÚT›Cc˜£fMRy²²ª´jx¬{aÎe®íPŸC’sH"–£º¾ÅÑÇåR5š\ÿ^l¶ÔüŽAõ?rýùZô{Í“+õ{býý/mêÿ0úîþæv¸,Ç;õ{—Æ
{Cˆˆˆˆˆˆ¥j¹eØòãÕ›F¸ž!O®ß6Áj[ˆÊ¡·Î|£Ý·Û®
ÌaöV¬±„wíËA'÷ö1†¹æ3nÎeÒöøû9·?·€Þù_7uvë/6ìœ¡ñ•ÏþÿýÖ½‹•‘¨µî¸ÔûÞ¾¹uœ­öˆ]Õ
ö^;óð§CuÖ¸d]?\ÿ1fØR5•¬¬ªµ>_T5×B¾ùµ$ÃŽ®æÓœ;|ïí """""XŽöSwõsÎÁ§\yüƒÌöq¨÷¹Çö|8£qWÊª•ßjÝ÷µíb¶MÃ¤3ì|Ô;ÖÚGÙÚ
úÏ§{>”IkÌucõÞ¸ki,xãqóˆŸ õ¬=ïÓDñÔú'õïÔ½a™¥–aKõYžÚ°ãEës†Uý«zWÉZoå’ak¬ºµ?Ã¨ñÿiÝw
"""""–²å˜aË¯7ï™ïzžüzkå"«m9XŒv1©ÜüÌ¾šS®}´ÿe]­öˆX˜ª1ì«ÿa©zÑÇ½–b†uñØ©çÿi÷ÑƒÖçö©ù-õÎKs
–K†ýD·ægÌwœ¶j‡~{Õ=ôw""""""†³\3ìÉýuŽÅ–s†)ûwzÉ°ƒU­×þÑì¾~;"Æ¯j-­š8£Õw;VXu²•w}û½{}c^Ÿé50³yÆü6ûxiÔxPþ<
ï±ñ->[³eLPí¥ÜkÕéŠíÏ+ÿŽó]í/×~ÔþµÚ£+žqQãÏ¢÷
rÿFó8[¶¶_˜>ýú9‡Ü|¹nDDDDDDüÕrÍ°åÉuÛžs>cî>z0·.s9J†íWµTC×µ¶Í\ÐÞjˆñÛ÷ún­^ùÜK+gÔ¸ßeÏL»ð¥#þ?«}sSã„•i¿7yæ%
ÙìUc­ß|ò¹óTƒ‰9g“±ÿõÝê]é»·þù×.Ïîw‹¡·ô4Û#"""""¢ÛrÎ°õ<yæð‰¿º²Èýo-ïfµoÎ’aû=ýÁŽi®}sf_õ§qŽgDDDDDDDDDÄòÎ°åÁ·VÜáÊ#õ^ú
ä>ÃÌöÍU2l·ª[àÚ/Rïä[í1šåžaßÝæÆÌ•U5Î»òØG½ÚÝl.£9J†ý[5nÿìÁg]ûEc³­öˆˆˆˆˆˆˆˆˆÝrÏ°åÄÞC2¾ùÀ4?–Õ¾9J†}®ªòÝÎ
ƒ\ûDµ±U#ÛZ"""""""""F—û}5EäŽ9¯³Ú77É°µÛå3Ÿ¬Þú´ïûA
DDDDDDDDÄä$ÃþÅWvòŽ³ÕíÅ£§”UNI†ý«{^§‹/¿>ñî¦áV{DDDDDDDDDÌ_2ì_Øå®ÌÙõpe•gŽÔÿmîðq-¬e4É°qóŒùm|ùµú<TcÄZ""""""
"""æ/ö¹>ßoxFyu¹çØdØÁùµú:Ôça-“û·®š8£Õ—›v¿êòÔ†/öíÔÍ\F©{û[2ý¯ïþ­vÍÅ±=Îø¾rÆÀ'Íe
""""""""bá’a#"""""""""b±J†ˆˆˆˆˆˆˆˆˆˆÅ*6""""""""""«dØˆˆˆˆˆˆˆˆˆˆX¬’a#"""""""""b±J†ˆˆˆˆˆˆˆˆˆˆÅ*6""""""""""«d
ØˆˆˆˆˆˆˆˆˆˆX¬’a#"""""""""b±J†ˆˆˆˆˆˆˆˆˆˆÅ*6""""""""""«dØˆˆˆˆˆˆˆˆˆˆX¬’a#"""""""""b±J†ˆˆˆˆˆˆˆˆˆˆÅª2ìZžŸéØê*DD
DDDDDDDDÄ¢²ýÅWd
]Z¶l™¹êŠ+¼žwÞyÖ" ^xaà~         €siÑ¢Eæð¶Í~¢öÿsy²¦ê›Ö—^j-BÐ÷î{2_¯ý/ß¾ž;yÊÖ2
Ê‰åsæ\”__Û¦­µˆÀðæØúwåÜ          ÉŒ8(óÍ‰Úÿ&¿N— ût]Í?·¹êjk
ÍšëÚµË|Y_ûï®õ‹úÚ¿uîÐÑZÀ„ÇGd|ãßØWA r         (WT»nßže¾zƒîÀZÄÀªyóÚúrì¥³f_nµ
CÛ«¯ÎéÝ'óÊ³Ï§ëNÅÛ‹nÜþîÊ{+×¯}d÷šÕýô¿UWjö„‰-º÷¾Ìe­™ ºnúæìÖ}7     DgÁô[ù²SeV{ˆý?áëKèzCg«9
Àohß¦MæµÉSÎ?òá–)§êjþâ»Þyª¶úLÍî¯)óîwOÏï†  øùèðÁJßõôÊË–     •›®»>óÕñºÿtÝckLžÕâ¥U«‹3ŸUýÜu<>9z¨¦eË–Ö"
2æqÃÍÔíÝ½ØÊ§óñtÝ±¿î\ý^ïa}û1¦ J†KZµrŽ¾øâ‹­¦‘ Ã    ˆ—c{vÎwÝ_~¬ê;å©>½ºw÷Î­ùÖôé DÙõgÕGO[9t\~~¬ú{Ï¾æª«¬M
hR*+Ö v]Ç6,^|³Õ6 dØ     ññXÿ‡¼óíÓ×j	¢g)×qù¢¾öï­/¥6- ü–ŽmÛej+w-°2ç¤TÍ#½¿C> Å 6
@i¡÷Ì?­>ò‰ëÞZ5™­ö,^xaæóÚê?ºŽÏ¶•+î¶Ú@y1zÈÐŒú¸¬œ¹±_Õ×ý‡jdgUmµ±d` (VÈ°
J‹W'M>ß—g´»æ«9¤À¤#ãä¿>^û;wèh5€2aÞ”©øê5¾vTïÜ>Kóøö¾ó®Ì—]æ\žê[kL÷#<˜YôÒŒKŽnß6íËúÚ·–Ÿ• Š2l
€ÒAc°OÖT}ãº¯^=~{«=¤Ç‰ƒû·ºŽÓöwWÞkµ€æòh+Sþ¢¾öoKgÍ¾Ü—Y‡AóÉéÝ'³gÝš‡Õ×´>2l (VÒÊ°ìqgÃ5Ó%ós
„ã™G‡;Ç÷*ç Örq¡q®cõÕñºÿ¼úÊ+­æ ÐŒ™2rTküµú»~wÉ%Ö¢"¡ù~—¼òJkýfa@)‘V†
…óÑ¡;\÷ï«æÍkkµ…ô9~`ï:×ñbÌ<@ùÒõ†Îõeù²kÕþPì$¹ø¢‹2o/ºQ5JÈ°  Ã    ( TÕuï®,„ú|Å‰r(×1Óüm¼
P~œÁù™O«Ê¯u­O‹;ºÜ|NÝ#2l (VÈ°    Jƒ­Ë—ßéºw¯\·f ÕšÍ¯öymõ]ÇmÔ G¬æ ÐÌXüòË—úòk‰nŠYó,è]Õ6iŠõ „
 øQÆpºîØ¿ºîÝû÷dŠÀbFuC\ÇíÐ–Mã¬¶
Ð|Ðû2gíË°ßš>ýbkIÒ«{÷L©×êW¿a[nÉ¼òìsçéÚ»sõ{½+×¯}DnZºôöE/Í¸ä‰‡d.ýÝï¬EA#²ûvö„‰-×/\xCv¿ªn»æ}¬ÿC 5jšºçÒ;
ã‡?–ysÚ´‹V¼úÚÕª½£>¨×&O9Òˆ‘™ž·ßÞð^EšÜ~ãM™çŸzº…¶gëŠåwåý›êìß|ý
Öbã²Ö—fúÝÓ3óÒØq-t®eÕ6ë¼ëÜ¡£µˆ@šk†Ý±m»Ì„ÇGd–Ï™s¥ë¸êû¦¿)&4Ï°Þ5Ôöi;³Û¬kÃËÏŒ?O5³
 <ü`ogMŠÏU}gµ…¦åÚ6mÝ5`êëþãÂ/´š@3Ac}ùuýþ½k”–z7(›[äªk^Ê>”×h¸2fÍ‡å‰;Þ[uÿéºcõíã\5æ¼~_åª9'µŒ+‡TfãÚkßz³
°à.×ò¥æêŒ‚¶ÉµWîtÃµ2—¼ÓõT]Í_¬ýúõñÚÿÚ·¡b¸²îRC¿ÇÓGiqtû¶iú}¶>kö{¤Ú@ÚwÊi•áÆÍ=zDúnË“Çª¾U®{}ûä§Þ¸«k×†ÚúA5’r=]Wó¿
´ÕpÍUW.[óÏæ~?OÖýÂµÌOŽªñ>Û]sw½ªçäj£íñ6Šˆ>»òßO«|bí³×šª¯Ô7gí·(4ÞÇY]5­t­Tÿ„®ÖœÄRŸmþóÏ_Hí<
€òbÏº5»î?Xüv«-4=¹õfs}zð«) 4ôº®æŸ}ÏúÊ`K
ßçqå—Êç•[×VîZ`å>XéXetG>Ü2ÅZf§j«Ï(»´Öe¡:,®åräÐ«mX|Ÿ!êœÚ&×rrkÉ('ÓøÊÆó~†Qù–ú$âêHm£Æ‘Q_û7ësYj_Uíøp†Æ§Ú
'¥qàu{w/¶ÖimÏ–åËºGíãƒÆ[×íÛ³ÌÚ† õ=©Ù½ã5ßþªÝ³ëMkùª1í>¦Žzª…«¶ÇÛ($ú¾i¬rÐ¼¾–j«~¥8ÆAøö±öAöotlÔç k¥µm.?­:üQ)ök
@~øÆi”bîQŽ¼=ãåß¹ŽŸžA¬¶ PúŒ0Ð›?VíØö¢Õ¾	›a«†€ÆIZ9GÖ°¶Æ½†/Fe¿»äkµ^šK†­¼Jõ3 ÉØ²Öï¯\}ùe±
][:Ý 9Vë¬Ï‘»×¬îg­ß…ö¿ÞQÈ§ïÀçgÕGOßÖùFkÕ¡P½}6kQÕãÆµñš[†Ýí¦.kÛÂªñö…>X¶–ÿñ‘C¬m±T­¾wßcm
”8zþsÝjÌP¡ã| ”é¸ŽaØ¬
J›½ë†úžíí×ßj^”X¶~»nÞ8ÆÊ6ò¹.®yóÖròQã­Z(>šC†=ñ‰'3Õ;·Ï²öSO:ða1ŽÇV­„ úô…ºoCÅãÖ64FïkÞ¶y‚µì|Ôœ*wÞz«µ
èÜÐ9b­+_Uw"w}Í)ÃV>ŸÄ÷Mýxê'Ìß>žöôèªÿg_Š¾ƒÅÜ§    …ã¿·Ó†‘V[(\yž šËX àÇW§àçÿ»æ+E‚2ì!½ûÖN
ÒÊ°•«XËPå´ÊÐ³õ]U÷àËúÚ³Úž¬©ú&Ÿœ¥9dØqæU¹ªî¹µMiÒ©ýµÞs2WsUý››6<¥~(Õ½Ð;aÆ¨GÍ°•_ë]€ eêø?°wÞáRcÍ§òë¼ujêüü
™þwPûSµÕÎwÞÖ›®»>£öÖç–Ú?zPãw?«>úy˜ý%›k†}o·n¡òëÏk«ÿ¤ï@öš¥ºáú7«êÐkÞœ|ðíãÏUo­7mÙ4ÞÚ&
(]TóÚu8wò”¬¶P<ýpëó®ã˜[ š;tôf6o|Új_¬ø2jõ¯†™ïËgP†­ñ†AËV=‚yS¦^à›[O9á°¾ý2Ê$ƒ–sl÷ÎyQßsj¶OåYšWPó¹©²j5?tï}
5ÎUo9LÜ|æêL
ÍIçÛN}‡L±UÛ«¯ö¶×÷H5–Ï™s¥o¾‹¨¶oÞ©¼]™µU×:[w>h~EÝ‹.ÄútÔ·t|•í+O÷eÃ7_CF™»²ve®®e4Î°Ÿ}ìñŒ–™õ£Cv¸ÚÕíÝ³$÷ïÂÔO
g†­>ƒSuÕ?ùö›ò}Í¿éšO5‹úUC;(×w$hžJQû	tì”­ëÑõX×©~K?«Fõ    @i£Z©®{@æG)-|5±g=7
Ûš1“ŸåÍ_4¹øŠ,„$ŸqÖ“©¬Nsè)kV’Gª1Ó»©œÊµ>ÕªZ§jôF™ãì—±âÇþÕ·¼7^x!ÒK2Í1ÃÖœ‚Êž­<_ïè˜·õ×´ñ'¹}Õ»½ò©{¢LNY~î
ç’a«¶»o›TÛÅÊ®£ó ¨ŽOÔºÄ?oÃLß²TËBç²õÉåŠË.k¨ù­÷Pr—Õ8ÃnLeÅºÁ®mPÔ.*qfØ‡·n~Ö·ï>>rèæ¥
KÇ¶í2ÇìÛà[^Í®s¬e4&l†­Œ\ç¸ŽÅ€^÷g>?VõoYê³–    ¥‰k<ÆA”êûçåŠÞótÝËÇýì
Å…²ß³ü=zXÍ‹–°¶r=å{AãÃ°yÙÒ;|ëÈ÷:ª9Ö|9¶Æ<F©)Òœ2l-Víß[Yïí^ûþC®mS(9¬‹«®¸"³uÅò»Tó#l†ÝúÒK3³Ü¬ª'‘ï6©Æ'
»–[[¹{‘Õ>ËôÑc¼ùºÎ»ºæ?5µ>û¦¥KoÏ¾ÑÜ2lõ“ùöòë(×—,ª?§¹R}Ë;t˜µˆs°2l]¿5ÿ€ŽU4îÞ7n\ÿžï÷
Šqi|ÿ§±jV;(.4’ë^^ct¬¶
Pºør5(&¬[¹”jkì`¡è}|ß_µÚ¡Ú¾º"«çÏ=H²9dØÊŸU£>rÕñm§j¸Xí“Æ×gçÜªª3¢w¬¿Þyç×ö(gVÍ’BPm
ßy£G“þymõ]íµÜBçˆÌ¢¾¼Ïª|ÖÜ2lß˜i}ó­K.ôNŠï¸¨¦‹Õ>— [ÛK§¬ExYñêkWû–]hŸ&    ºÇuÝû©¾ˆÕŠ×³¤5
”6¾Œ@×«m1”akî·8ëû²íCõŠ¯±ÆÇ†Í›C†ýÌ£Ã­¦&_é«Ç¬>ù(õ^âFëöíÃ8¾GQQ×8}¯¯kWxßPÝ×ç]øâK—Xm_3ÖÛñúÔà¼9*_¬y#
ƒ(¥[ãÓ}ûNuÁ­ö:W}Ëïßó^«ù?ðý>mwå½…ôe	}‡}Û¨}lµ   €ÒB5]÷~;W¯Š/€ÔpÍ‰¤Èj
¥ËÇGp]ÇKýÜ÷eØ‡·mž q‚qr²æè®uízu_«m”ù²–°ïæ7‡;®ZSFŽòfŸCûÄrÈòBã’}Ûeå§I zø®m‰3“í}ç]ÎÏ¦v²o±êÚšoæC)eØ¾ÚGêß‹
kßéL×:T/Çj›Å—aÇ•1ûêb¯}ëMûE     ()4ïŽëÞOõU­¶P|¨Æhãc©1XV;
(]|y¡rY«m1ãË°ãžo8(_Ž:7]Çì]çZ‡j[mö¯h|±jB»Ö¡ÚºVû¤Ð~òíC9¶ÚÇ/?T-á¸P=WòSuÕ?µksÕÕÞ}÷ì°”R†íëw«X´°³Õ6,šcÑµŽ
(ý£IgØê+q-¿rÝšV[    (-|ÏÄVÍ@(NŽíÞ9Ïu<­v
PºøòÂ¨uK]¨nƒ2Ö¸Ô»?aI+Ãž=abK×zTç#ÎyÁÞ™9³µk=GhµdØç¢zÎ®u4u-4_}heŽiÖ§W]W¶Çu¡1¾Ú.AïKL~r”÷ûVH-çB(•;h¼¿ÆÅÇÅ]nö®'
l½é¤3leÕ®å‡ó    J‡QƒqÞŸ6Åx!(œ›7>í:ž' Í_^e¬œ½“îË0ò1J‡´2l½ïZú­¶Qxø¾^Þ}¦6
ö¹l]¾üN×:šúý__röXÝwÇÖ"bAóº¶aÿ¦ #­¶Q©ßW¹Âµ® ñÞÛV®¸»ØŽ_©dØ#t[õYÄy¿§><W=u©>ˆ0$ao\òNW×òÉ°
šŸxÒyöÞŠÝ³»ŽgÔü J‡Øá:ïO×ûW«­E9dØ¾š¼ª7kµ‚ÆàúöK˜š%dØç2ë¹
ÎñóM=—é´§G{kug­­Üµà•gŸ;¯cÛxæUtáÛ?ª9Vñö¢ãÔ5‡ì;ïš2{,•{ÙìÙW¸Ú«~µÕ6*®u2l½é¤3ì·g¼ü»bû   @2a7/È°Ê_F
[¶li5¤2lßœ`s&N*lç9ø²¾öß\ëzæÑáVS2ìFè»äÛÞ‹/ºÈjž«9	}ÛÖØÏU¿ã#½4ã’!½ûd.kO½‘õÞ`­;iƒŽ·ï¼[2kÖeÞF
S*ööUïörµ3fT|ï÷íý`ý£V[‘t†ýæ´i¹–O† Ðüð½×½%¤‹/ÃŽkŽz (>|¹‹¼¶MaÓó–C†íª,ÃäÊQñW7eêV[2ìséyûí±moÜôêÞÝû½
ãÉcUß*×Ö÷âúöí­Õ9QÆh­'iƒŽ·oNN÷6J˜RÉ°oÝü¬«}Ø\9 ®\Ù³mM:ÃÖü=®å“a   4?˜Ó±yá›ŸÝj
¥Ëûo¼q­ë¼—öëo5¤2ì8¶5,¾lwÁô[YmÉ°ÏEóƒú¶÷ºvÉÕèËðÖŽªê½üÌøó¢¼WqdÛ–IÖr“6èxûÚèýÀ¦¢T2l_Íõ]ï¯Žý¢¥ÏîZWýþÊÕV[A†
q¡œ®{¿¯¾vµÕŠ=S4>–_Ô×þÝj
¥‹/‘ËçÌ¹Òj7Ê;}Û%nê;Î¼5‹/Û­X´°³Õ–û\‚2ìNí¯µš§‚ÆPWïÜ>Ë·Qý´êðGÝ{ŸµÚ‚j¥¥ïxÕ†/´ß­J%ÃöÛ­+–ûç‰/Ã{Ý!Ã
€¸ð=êÝA«-®œÊ¬v
Pºt½¡³7ªßW¹Âj7Í%ÃN¢–ã°ÓÉ°£noÒ¨îÉÞŠuC}õÐ£¨šÒZ§ï½¬ÝkV÷»£ËÍ™4ªKîû|Ï>ÖtÑc©dØ¾qØIÔñeØÇì]gµdØ
¾±0zÕjÅ‡ë½eÍ)oµ€Ò¥E‹š+ðß]×rå]ºÎ§I©eØ¾º¼qe,¹øêa‡©ßE†}.ß×Ë»½^hîÎ&Aµ@†õí×0ß¢2À¯Ž×ý§ï3ùÍ‰Úÿ¶Æ+ûæÇØ¸ä®
SÂ÷ÙfŒ{ÆÌç“¢T2l_˜C[6³ÚF…zØ    PL¸²O«·ÚAqÑîškœÏ„I<Ó @qQµcÛ‹®ó_¾>ÕÎGã¤Ô2ìÏU}çZO˜\9*¾q¸aj û2ìO«|bµ
‹ï¸c†=ùÉQÎíý¢¾öoVÛbAõæ5^ù¥±ãZlZºôöãömðõ©4öT]õOç_p¾wÙÛW½ÛËÕ®X²½ÓuÇþÕµ}‹_~9ÝN·J%ÃÞ¹zÕƒ…´ÂÍŸv­KÿnµdØ
'>XÙøÞOcƒ4¶Jß˜´ut²Ú@i3eä(oMlõI¦y=/µ[ïª¸Ö³yÙÒ;¬¶Qª¬¹),|vœõ¢|ÛWŒ¶~Û\ëPlµ-fTcäÀA™Êõk±ÆiÏž0Ñ;Éã’Y³.
sµÑü¾6iâ;ï’¨‡–RÉ°5g«ýÉš£_Xm£¢óÉµ®Š·ÝhµdØ    '¾w56J‡…/¾t‰ë86å{¹ ­Z]œ
Ê»”q[Ëˆ‹RË°}¹•jÎZm£TûâòËZ[ÍÉ°á«	¼måŠ»­¶¥Â5W]•9¼móßq	úŽ>þÐÃÎãùõñÚÿ*†Z+Êª]Û×”ï–J†=vè0ß±ý¿q[õ}ºjÔÉ°46
ÄIÅ¢…]÷/?3>•ìSë¯Ù½ã5ŸV{‹YÏMh´üBóµZ~ó‚¹ðõEô¾3öiê ÙþîÊ{]×
©º¿»äk±Pjö›Ó¦]äZêl©ÖC\¼3sfkç±©­þ³ÕVø2lÕF¶Ú†ÅwÜŠ-ÃÖXe_¶¦#Í
}5vÚ÷õµksÕÕÞã©´©ñwú>§]Ã?Kåº5]Û¤:/VÛ(šawj­÷Ø~°·Õ<4Ëâ[OØq.dØ
'ºßuÝÿíß´a¤Õ6|÷·Y­ö¾9Õ³úLíË².˜þb+k…¢±2®Ú’oT/
š7_CFùïZ´·bÝPkqPjvPNgThíõGú¶3jÆì#®å'a¿8f¬3Ô÷?ê¶–Ï?õ´·VPÐo¼Æ4»Ú„ÍJ“Dç±ï3ÕHIeÕ®íÑ¼†VÛ(ša‹Ïk«ÿèZÆ†wÞ
‰í¹|Îœ+]ëPÍù°õ©È°    N46Ï•{hî©–-“Œ
Ã.ÕRu­»Ôë‚@4ö¬[ópÐõH™„µŒB)µ[øò ¸r®7töî“0ó9Š4Æ^ú–5N2ÃVvæ«Ñ[·wÏ«})rW×®y_ÍpÙç®¦/¹â›O5íþY6.y§«k{âž;ŽÛ7¯
£®›qÜ»kÿŸ¬©úÆµŽý?aµÏB†
qóñ‘C\÷€q=A†]8wãZ÷‹ßîbµ€æƒò,õ?]“½4#Ñ¢"¥˜a¯yó®u©¾ìM×]o57Ñ{M®åëX…­_«ñ¶Ú×r4Ç›ÕÞ"h\l1eØªsæÛÎñÃ³š'ŠêwDÝW
aèyûíÞúÇAíÔïá{7C9qØï^>„Ù«çÏoï;–q_§ôY¯mÓ6ðo|yè'GÕ6ŒHvÐ{s'O¹Àjo4ö?Êuœ    âfó²¥w¸î·._~§Õ¶PÈ°GsÑ»Öýh¿þVS
hfeY·®X~Wcõ\”b†}]»vÞ|¸~_åªBÆ„ê:ì=c}Ù°êç[»[Ÿmé¬Ù—«ö”o;Ãä‘¹$•aßÖùFoÆŒæ»âBßoÕõ=$Þ²=š›Ùõ™Ãd«Cì;®š/2îë€Þ
íÓû ajH·»æïy§9jU)4ŽýÓªÃuÊ;ƒþîéÁC¼5ç­ü; qdØÂW+æ‹úÚ¿kßæ‹æ˜Õ5ÅµìÏª~åzH† qã«E¡÷«£Ü«ævaÜ~ãMÎõ§U
Š«¦ˆTÎøÈZ‹ŠŒ²ß:‹5Ã;Þ[u¿o»µ?óù-Tæêš«@*£»úÊh¥]Ô÷àÛÆwçÎmcµoÌ€^÷{ëräW†åø7&h_Êé£ÇD?@1£Ï—ÝÍé¬ßçB
šÓ1Ì»V;tôæÄòØžó£_zO@ybö…É°Å¶•+îöm›jÜpmk^”§k;²ŸßÊ°ƒêõhÎÜ ¶Qˆ+ÃÖÜœ¾íýäè¡*eÑQÑq¬ßW¹Â·Ü—ÆŽ‹tž‘a
@ÜèÙüTmõŸ]÷?ô°Õ¼ È°Cãø\ë­\·f Õ
š'ê¿:º}Û´ kSÖêÛg=Öÿ¡L!cX/¾è¢ÌÈƒ2•ë×>TË$J†™v†­Oã}Û®91£Ô^Pÿ@Pæª±ÏÖ2Ó¿ç½Þß}sÚ´‹ÂdíÚ¶ÚÊ]|ËjlÔŒÓ—aU_÷;W¿
×[ãbÃ¢LMµR”ùû¶¯f×Ž9ÖrÒ 7ÃÎ“ƒ›7ŽQ_A>è³ëœòï°un¿üò¥AÇWcn§ŒÕ"Ÿk€2òõÞ yþr—6ÃVÎìó+µÜ
‡.¿Ü@«Vgt.4Þ&+Ã¾ÐÚßã†…š~µá¸íË¸2l¡>ß¾SŽ}}ûöÖ"þAû6m2Çì]ç[^ýþ½kÂ\_r!Ã   €$Ðxž¸î©£@†?Ê¾¬¯ýw×zÓ¨e
Å‹rìC[6º>åzºîØ_5Þxö„‰-ï»ãŽÌ—]ö›e*—i{õÕ™~÷ôÌ¼òìsçéúªq¼Aã<s-æ[(+Úþ“5U_éseÙÊg÷m¨î«C,OÜ¿9Ÿ÷d”ùêä.[¹ŽŽ‘æ’¼
æª«2wt¹9£úš³Nµ
‚Ú»Œ+ÃÎõä±ªo5®\õ­5¿ ¶ñª+®È(s{ GŒj[oY¾¬ûÏßƒÿ´åŸQÇ³'Eã»ñç­x{ÑÝ{_CÆ„Ž™ÎC}ß|ËÛ½fu¿À…ä ïÍ‘·L±ŽÉ©Úê3Ê£‡õí×pá
â’V­Æïk~Ø 1üa3l¡z;Aç‹ÔXtí“ŽmÛ9—¡Ÿ4bdFó úî‹ÂdØ‹vÚÍ¥¨c¨ýE×÷¯Nš|¾®¹ê«
ƒg†­'³ú\µ-ë¼uòiº¦«ŸÈ·ß¤ú&Õ_2l    H=?ºî£ŒõÉ2ìüÑ¼=®uR
šÊ®”›]£,¿¬¯ý­1¬ÅžaßüŽ¹ªv´Æ$jl¶raÕ!Qmae€V[ÕGÐÜùâ«Ù[¨A9Xv*s»·[7ksR#(ÃÎUßÕ²ÖwFã¬³ªþˆ²n«½ú!4Ö8
ê3Ñ;Ö²sÕyÿiõ‘O4ï·T?—Õ&k”[¨oÈZfÖŸûÿ£ï˜¶IÛ§ÿmµ‘a2lõ‡ùkZ¶Ð˜… zöYõÓ{ê;RÿÐMž s®ê9à©G[›á„
’ÂW/ê¼SQÐ¸e,>­öz¿=hùùŒ+ÉEíƒ–¯w¿“BÏn®ã¥ñQV[ (†ôî“
“%ågÕGO/ziÆ%Qr·¦Ê°…rië3å£òkÍY(çm­+Šõû+WÕ1/Æ[™{ï;ï²6%UÂfØ…¨s)ßù•ckü¶µŽ8ŒšaÕZûNG>†É°…ÆXË²L3Ãº×
“cGUËÔ<ÁÖú}a   @RèØu/˜ÏÜS,¾¹|4.Mõ% rQm Õ`o§Ê>4ÎTu
¢ÖPM™aeîqæiª3×ï¨jÍ»Vý¶ësfïïâÊ°ãÚŸ'îßZÈ\I¡Ú-Ÿ«þÞÚþ|UŠ|æékŒj_'yÐ>ˆZÃ:‹êÈ(§·ÖUÙÖ²Ã¢ÞZfigØB}:¾ëf>j
Y…ÎûK† Iâ«µ©y˜¬¶ªâ«iºyÙÒ;¬ö P¾(ËÖ|gÊt¬#ªÙÜZãö¢Œ¹vÑÔ¶P­ 9ÎÂ¨~EåÄq×wRMåBÆÔ*m<ß›ïoãÊ°G
z¤¡%LÍ—Ê]õÝ{_Æ‰¶MsÿUíøpF\™½2]1ˆ]VÏŸß>®:Aª—¬÷òí³ÊEßm3§êjþb­7H]T;#ßVµÚƒjDÙ¶ÐÝ¯òÝSíÕ¶‰£¿„
’Dãs|÷´7_ƒÕR@ó¹Žãå
7ª¬èØžóÃÖ”m¬ú=U_U¹o¸|P­VÕnl¡õŸòAsØi{¢ÔÉUíÙÅ/¿|iÒïÅh~9Õ9¶æÄËþF¨†wÏÛÝe\û[Fý¾;;ÿ„jZ(“Õ¶|^[ý§ mVY[¹kêLÍ¥
YŒ\ÖúÒÌôÑcZ(ÛšÛ+[Ö«úî%‰Ž…æÏTf%3VFª~0ûÊ­ó™£Ô"Û yÃÖâþ¢¾ö«ÿ@ùs¡ýh¢õ¥—6ô»„™Uë®Û»{±jê3ª_í:Ï4Ÿ¤·QDÔ?¥šHQ¾wÚ
Ç:žú]ˆ}&×gkÞqÍàZ¾Ž™Õ    JŸÑüï®û[=Xí!YôLæŸ¨1UV{  Û¶Ë<ñð€†y
t=QMÿÜ9ç4G®êí+—Ó{ù¥–)ŠÆ‡jL§êå*ëÑ>Q~¬±žÊµÏÔ¬ý˜6×\uUCôú…oÈÝ.ÕVž£œQÛŸV†Ý˜«®¸¢¡Ÿ@y¥ÆðKÕ¢PÖžÖ6§Aû6m2::¿VÍ›×6
wîõwÌ›2õ‚ÑC†fšr¼@Û«¯n¨Ÿ¯Xý[Êcµ}K^y¥µ¶OÇæ¾;îh’ã’{}Ò¶éZ¤ÿÔ¶*‡Oz¿ißè{ªc”ýžj½ºê;\Œèž^ï“hÎÌìõüÈ‡[¦Ý¾mZöšþÚä)çëý–
BÇÏ    4ª©ç§QÈÜ.P8ÊIÜãgjþ9Î1   ù5Ã      È—C[6s=ƒªæa»k®±šC<õÈ`oß‚Æ%Yí  ’†
ÒB9µòj×s¨æháÃtÑœZ§ëŽý«ëx?°¯‚ã  Å 6      ¤‰æPòûUmD«=Äƒòéc»wÎs‡¯êëþ£Sûk­E   ¤6
¤ÍÑ·>ïzýæDí?Ú¯¿Õb@óðøú^Ÿú|yMª  E 6      ¤ÍÕW^é­añe}í¿ßyë­Ö"  ^4ù|_~]½sûLjˆ  @1A†
MAÿž÷f¾>^û_®gÒSuÕ?]×®µÈƒqÃÍh¼»k¿Ÿ¬©ú¦õ¥—Z‹   H2l      h*æNžro<ðçÇª¾»¶M[k‘yû T»ûÍ·X‹   H2l
hJv¯YÝÏ›c×VÿQuG p†öéëÍ¯å¤#­E   4	dØ          P¬a         @±B† Å 6          +—µ¾4sÕWüÆ–-[ZM
Šž‹Z^˜éÚº""""""""""bQÙåwíÉ°±(%ÃFDDDDDDDDDÄb•‹U2lDDDDDDDDDD,VÉ°±X%ÃFDDDDDDDDDÄb
•‹U2lDDDDDDDDDD,VÉ°±X%ÃFDDDDDDDDDÄb•‹U2lDDDDDDDDDD,VÉ°±X%ÃFDDDDDDDD
DÄb•‹U2lDDDDDDDDDD,VË)Ã^>~ú…ÜuxG!.óüùÖzJÉo¶T.p}Îá·õ2Û–›Ú'Ö÷Ã²vÅºÖzñWË)ÃÞôâü«ÿ|´îÿâÓ^»
ÂZO)yö`í?¹>çSwõ3Û–›Ú'Ö÷ÃòëÍ{æ[ëADDDDDDDDÄ_%ÃŽ&vùJ†ˆˆˆˆˆˆˆˆ˜¾dØÑ$Ã._É°mWMœÑêËM»_uyjÃŽû\w»¹Ä´UíH×wö³5[ÆX
mKÙi=îüîgwï sˆiH†]÷~ØU}ÔªcÜ\ëa“a‡7j=ì3GêÿN†ˆˆˆˆå¤²ŸïƒÿæzÆÐ¿ÏbüyÖ2›Â±=vŽYÒ3³Õ±Ô=´på¾±x?VûèÁ]Íe
&-vyçµdØÉéÚ·dØˆùÙ¿S÷ÌÁ·VÜ—ÖúÓtÿ[Ë»ùúC'<8ØlˆX,ìrWæìú?øòëyoa-±©$ÃÆr7(ÇþjcåÜn—w4—˜¤dØå×’a''6b|ÆQË'Wk}ˆ
iúñû›Ÿò}Wg|ÒlˆXÞuuçÌw;nð]ÏÚ¬ÞgÅæ'6b‡Ì‰w?æ»Ž3›Z2ìòÎkÉ°““1>›*Ãžûø¸®±±µ+Ö
°Ú"†•›ƒÊ6|×²=sßhµGljÉ°;dz\Ù)óÍæýo»Î…×ÿÛ+CŸ6—˜”dØå×’a''6b|6U†½lÜ¸Ús.cœ’a#b©;±÷Œ²
×uLóáñþ9–‚dØˆ¿¨yw¬¬ªwgöÕœêÕîfsˆIH†]Þy-vr’a#Æ'66gÉ°±”½»ÍÞ¬ãO»Ôÿo-±$ÃFüU=ùæç=¾²b°Õ1
É°Ë;¯%ÃNN2lÄøÔX€Í3æ·qyöÀ±¯]×±ïwÚâkc­/+6¦!6"–²‡½{·ëú¥ìƒg
,%É°ÏuÃô¹WúîQ_4Òl·dØå×’a''6b:~¿³j·ë:¦\ÐjkI†i¸tì¨Ž¬Ëá·õ2Û#"6•ºFùÆémŸ½ ƒÕ±˜$ÃF<WÕúýÖ½‹]ç…žÁ¨…iK†]Þy-
vr’a#¦#6""bÓxrÝ¶ç|ÙÆW^o¶G,&É°ëÝðöU¾?ù•ßYíã”»éòÚûÛßÒð;ùÊà§Æ`-{fÚ…ÚFý§œ3lL‹ñÊ<pímæ²ò5ß[×±·FN:OÛ»ÿe]5
VlëÌ7Ú-=åü¦3¦~Àa·Þ›yiÀÈìÓÅc§ž¯}¬}f=>2lÄt$ÃFDDLßÉýõÎU¡{q«=b±I†èvÿ[Ë»ùÎžmo2Û#Æ%¶×ªÆ
<Ók`æ½É3/©]¾îáo·\õÓ¡º?ùîù\žÙìË“ë·MX3eÖ¥÷w¸Õ\gX£dØÊ†•UŸÙWsÒÚÞ+«j•i§q={ø†î™õÏ¿vù×›wÏûépý_·ëpý¿ýq×áuË+Îbüy=
®ìd.?_É°Ó‘1}¿Ù¼ÿm×oäç??³Xm‹Q2lD·Êu|ÙÑ¶™Ú[íã’;Ù{îããZœ9|â¯®õæ«–wôí÷î}°CWsý–a2lÍ¥VµôýÏ©ÿ»µmÕò5^ÛÚŽ||´
ëý™ßÛøD>Ûõëö8«e¼Ðÿ1s}Q%ÃFLG2lDDÄtÕø×ï£Æ‹ŒèÞÛlXŒ’a#ú]÷ÂœËœçÇc_'961W2ìd3l_þ‡gÔÿA52¬mÒÊ°?˜öÚÖØæ0ªÞˆµ-aU½
=sßwß€ÆÇë~ÜZXÉ°Ó±Ü2l]U³I×ÕKZ5qF«lÝ¤©}Ëô¿¾»¹Œ4ró=™¹ÃÇµÈÝÖé?K¬ÞoËè3ç.ûÍ'Ÿ;ïéže¨Ã]}¯+Õ(¶ïT©©ï©¾“
ÙúqY'<88£¬ï¾¶]Ìe4…ºÖ¨vœÞ[Ë~'T§MýþúLVû¤T->÷Ú½ã˜½þéº¢wó¬öi©çyßy?çœZøÔ¤–“zmÒ}‡Ÿ­Ý:Îõû¨·ÚÆ­¾zvÑy–{Ži?ìÑ§á
ÿ·–Qêê7Oç«ëû¦Ú”iÖS,eÉ°³÷$º6åÞ“è:Ð\ç½tÓ=]{õYW>÷ÒÅËŸ}ñ"}þb¼mNêš¦ë®qÚÿºþi'}ï{×Õ3Ê«]çˆ~­öˆqH†]º¶ÔäBÆ9û2ìi
=ž9]±ýykýQŒ#ÇÖ˜ðo¶ìyÓZW¾*³·¶!¬dØˆég†=þþA™ìœ²féš>®eÿ°ûÈÞÜ¿ãÐ[zšë÷©Rº7übÃÎg×±®eÞ_sZµ«
íçÌúÜýC2®Ï¤wý½î««ÞYÝËª=õÝöï«F–î‰­mÈªºV{^§‹êB-[ý¯'×n_
5YûwêîÜ¿ùü¾û¾®}¬gjíŸã++Ÿ9Xû]ÐþüÓî£w½¶è†8ÞKÚa·ÝçÜ/²¿Ê•a(÷Ém;kÈ˜†ï^P¡üTùÑÎ9‹;©þÛ÷;mùù{ø“y¾þ¬ö¿j¢é»­lÛÚÎ
°ê¸û¾®¿×ó¯æcùdõ¦‘VÝ;}¾´êÆéÙ\ëÒ5Cã|÷åÏ×½¯˜;.¡o§n‘®aù:ðÆ;3›gÌoóõÖÊEaÆZè¼j¼­¥à#]îÎøÞƒÔùcµÏWe„:õÞº¾£ßí8Xa}O³êï~
¿uïbÕEÔu¯9dŠ½ÚÝü{kÌ‘Ž×wÛoÜ1gáuqÎ]õÓX]¯³}§Y³}ÑQî â2j†­~z­òÝ‹æ´ÿþÄ»S‚µ
Å¬Î¯ïn®Z§Öy÷§½U'Ž-[Û/îwž³}5Ð¹‡Ù¶ïõÝ2ÙÜ=«æôRÇøŠ$TÿÔöÙ:|µq×,}—Îó¿éº¨ßÝÇ$Ñw¥ë¯óXÿü{fµEŒC2ìÒÎ°¥®Uc`m‹K_
†}öHý¿XëÍÇ°÷3.•_ÿq×‘=Ö:²j¿œ=pì÷¾9t]’a#–žqfØ‡®¼ÓºNäë;£§žo­¿±Êuj=›©gÖB³lmƒkÙú÷Ü¿Ó³œrk›~ãÞêõ<´
Ý~ÿÏËÞú´•_¹<µþÃIú ±>gS9cà“îyÑöÖ}aµm¬o(ÃËý;åãê‹±ö]cõ]Œó·2
}÷^_mÚ5Çõ÷Êmµ?ÔwoÝÿèX5nÿÞ¤—[©ßÈÚwQÔuMÏÔÖgµÔq÷­#÷ï”KhòkÛûÓ¡Ú
¹¿²¡žúÃBäÁ.õ,¯¬C}e®ÿ¿ñ5,_Õ¿¡|ªúvÊ½“ÌãT9¨ë3¨>¶Õ6_{tl‹vUµöaÕ×¡ùt’·˜„Ê¥Ôß•ï½~Gõ{ªï­µ.Ë°×˜\ÕgÓP§ÒÈ@ã:?£6
ÃVŸ¥²Ù|Îyõ¯7þM.5¾Zs^YŸÏ§®Çaú’Ãè»÷eèÓÎ¿×ñRlÈç¾+Iuÿ^Èø=ÝÓèû¦÷©âê·Sß™ï^©Ôûh°4$ÃN?ÃV¦ªq
šÛUïÛh¼Æ—äö“iœriÝwëï¬g ý&XÛâÒ—a{¯ƒOœU ß ýŽéºª¾òÓç]¥g?+/þéPÝŸóùÍÖ¾ùnçÁ
ÁË®ýAÏ9ŸÑøýLýoå#ºçÖß2â|.'ÃFLÇæšaëÝx]×¬å†U×Ç|kÕY¶–«wmòÍ™¤ž©]9˜–½÷õ%·X¿/–zîÒxgë³6…ifØºçùvÛ¾eÖþ²T^×óPÜFÉ°õ³î
±rueØ¾ó#õìZÈ÷6L¾¤±gSmm‹¥Æ·ZÛEõ+Äu
ô]›âÈÈtlõ}„U×Aq+Ös+«ÆÛ¹¶?Ž~—º?·ö]¾*ÓqÇƒæ6‹:_£\³‚Ô÷võ¤Y½ÿæ“Uc«OmØñ¢µ]Yã8?£jeØ:7õœoÿÁ?–wàØ×¥’÷©/ñËM»_µ>S
XõîW¡cìÃfØ©4û®$Ôï¾2s{#¨ûàBÏ÷¬Çß­âZÇÑÅïÝgµE,T2ìt2lõ3«¿Yùj>ïtè÷Ruµ‚î‘g>2Ê\NcÃfØÊÈõ>Š•è}÷ºåƒ–¥>kk»´LÝï
ë¹)Ê»¬êÐ{ö32lÄÒ³¹eØºÞ~{Õ=ÖòòQï F¹Vf Ê°ŸìÞ×{¢ªëyîo™–mŽ™‰à?}xà½bÌ†ÒÊ°•µÚ«úØ­íi
ÃdØ×¯ñÖgllÚ¶<³¯úSÕn°>·Ë |);¿H>ï6øÔ½¶µMaT¿•µ®8,$#Ó=±Æ·YëÈÇbî#Òs“k›5Î¥Ð\Êg’vvÛã®+“„ês‹óžUÏDù~ßÂdØzöÕ¹õZSÈù™
¯A¶êTè}
k»Ãª\5ì¬mjJGÝÙ7sf_Í)ë³DUÙB!ïÇ…É°5V0r?h÷]q«±êa3š¨†©ëFõ¥9—àØ×ù^KÃJ†l†­¬T×¡¸ÎåÉ}†yëÏ©.•Õ¾±ÖõQãr4ÜZNc•·û–©í
S«*«rß²ôÛ¯ºÖ2|êºÏÖl“]6béÙœ2lýV(»°–¥ñ$z§D50uí×¸&­
3.H×¼¨¿I¾ŒNuJÂ¬3’???(g×x¾¸Æ6æZñÂ«—[Ÿ7mÓÈ°UkÙÚ7QU1±wñå>V†½nêìÖù~·š"Ã–?VVÕä3"(_Jâ;¡k“êvZÛdZùµÌ7#Ó±PÝkùªÁ¬k³ÞU
ÔµZ×le7arÈbí#òŸßÛø„Õ6_“Î°åÙõ(ä‡¤Õ»Ya3`ÕËÕ5ãj*†ªu¡{k\Z¶Æÿ°çèaký.ó=?Ñ—aëÚ¦÷‰­mŽª2¿|ÞQNC]Ëu^XŸA6Ìý°·úcÕ
Õ ûûª¡ùæØA¶Æ^ç=†9û®8Õûía~ò5®[ªÝµŽçû
7Û""v²vêžÖyMúù7ÐjÛX_†­ûÍ)¤F\Ð8BÕô°ÚKå,¾zºÓœÖ2Â¨åhÿ‘a#–žqfØzÇNïKfý~×á]®ek\Gîß…qú€æú}×÷ì5Oõ+UÉ÷NŒ®Ùa
Õ^;uvkk[rÍ'£ÓûGÊ4ôÎ­æ8“ú|nÝŸ+ã
\öÏ¿Qª± wp²ËÖïJCþoÔ%Ö3h>Y`’¦‘a©÷Ò•¯å+õçh[ù‡úR¬mJ[_†ýí¶ý+ô´öGQ2lÕïU}xíW=—êÜÔ»ôš÷Oÿ©ZrúwÕŽP?”µ¯óyG7(_
Rµ"ôœ¶-ûÐçTkåhÊ¬íò©qsÖ¶i¿êÜ×½›ò&Õ9Õ˜ýwíOÍ©©k®u‘ùddº7ÍÿÐXe]Z®Ž¯¯¿Pã•5FÃª«à«íÚ”ªïÒµ­ªYmµÍW_†­šÖ¯g½/ªyãr
Ï1å§‹£g@3+[;¹nÛsÖ¶4…#ô}ÖµCõ4®çþö·œÓV÷Ú/:g¬±Kš7ÕÚ–Æ]cT‡>Ìyè3Ÿó³P}vÙ:¡ÚÞìõR×ý†ùÆ|ÉRßak»ÒV5Õ´Ý“®k¶Î·
ÆíGtïÝ0¿­ïz‘õ«•s£Ž«¾{Ý4n<û®¸Ôý…y¾ì­þXç²®kš›Uõh¥~õ›¨:ùú.ú~§ãÌ°/z÷n×:ÔÏiµE,D2ìÒË°õ›à»®©–‡Õ>Wß½ÌÜÇÏ†5ŽÎ7>
O¿;V{©íð}VÕ^µÚGQ÷`qÎ¥C†˜ŽqfØõeaIœËªýê»Þi¬JÔß*åeÞy{ž8«q*Ö2²FÉ°5ÞÐšŸQÏ;h-ë7î¯9­zz¶ò-[ÏBš§+¨öaR5[óµ)2líÕ8³~
÷t¬N®ß6!hYšŸËÚ®4Íw>m#ûvÛÁUÊ`•é+Vª<7›/eØÊÇ”“é™~ÐM÷˜ÛÙXe±ZoÐ1‹:^/J†­{6=ë>3h™v½?4†[ÏÎ»Üen[cÆüdŒêkQNi-'«î
C5wKÐ»ÿùddÊe|ËÓ~qå9A*w÷Ý/ÿXyì£BÆ“Ä­úÿ\}-ún&UGDf3lå;úyò+¿Ëg¼¿ž“Ô?Ô£ìÛZNš6ìsÏxÇ†ïÜÏßo“Ör¤Î‰ ßsí—¨×ó(×˜s¾3?
tmU¿¶®{Rÿ]ý¢
czæw~j”[ýíºÆõ‹ëžDÙbÃå€eÛØÕÀw¾7Qœµ™/8è=õ•ZËil¾5ìÔï¥þyý¾7¼Çøóï½2ßÌ/šÇ}Wê qþ¯ïZØ¼_¿CÊ’×R‰3ÃVí?×
¶&ñŒ„˜+véeØÒ÷;õ³øò¨Ëñ©œÙw-SÛñË ;gºÚj»‹m]cÉ°Ó±9dØÊ“}×ce½ùÔ°–Coéé½'ÖX
«}Ö0¶ÆÚh¬—µ¬¬ºWmk¹RùˆÆÙE¹îkŒŠoy®¹ýšÒ43lå_5gÓ?ß2k—­íoµOÓ(¶î§´?ôÝ Ê
õîƒ²-WßÏü'ÆŸ§l5Ê÷3Hßómï†és¯´Úç&_ÊŽŽÒ¯¥óWY¢o™:_­e46(kVÝŽ|¯ƒ²féš>®åFÍÈ4îÍ×?V»bÝ€|óæÉýõÖ
T}>«}Zú2¥´Ú¢ò=í‡ þË(ª®´ï»vdÑêžVû4
ª­£qüÖ\E.ƒúaTG2lN&Ã\cÎý®ìš¥ë¥u,5®TóXëÛ0¶îw¢ÖÚÔçýfKåß2¿ußki©ë‘o;óŸAËôåº¦ê~ÕZF®Q2lõ•hüƒÕ·Ü»ãm™¦ªæË<¤úu¢
ö_gÕïfÃ¼èÿó»g†­k«ßYëÊ÷·1ŒdØñåµiª÷(]Ÿ%jnÒ¶úò}×ã%cž§ßzßýüî×Þîl­»©%ÃFLÇæaûúûþ°óÐ¦Br©š®eëö3(ÃÖ½ªž
¢<ófÕsU—@ã­çŸ¾ùÖ4Ýj›¦ieØ:Wòý}×Kßû¹šwÓjŸ¦a2l}ï4™Æ>[ËK[KîÚn=çZísµò%­GY‘µ—Ê¼}}dQ3Í†qŠžmTî“ON—kÐ¼´VÛ\UkÂµ
åùù\sÕXD×²•—YmÓRïé»¶qóK¯_cµ-6}u…Šéz¦ZÁ¾ÜOsr^eãz7ÀjŸÕºÆdÕµFï‡YËkjƒ2lÝï(OÈ÷\×5óÇÊªzßò­w`ÒRyºkûtï4ì¶ûÌö>§=ô¸÷
žO¿ÇVû\CeØûkN«¿*ßã•–¯~Êû‹ã9@ª?HõÔâÌ°¥~ë]Ûõ}Ä(’aÇ—×&­žUïHÛë«OåzÇ5È¤3ì uè]¾ voŽšà}¯^ã`¬õ6µdØˆéXê¶ÞmvëS^\×
:ß¼Sgµ•¾üGc[
ý½ðÍ‹¦wÆ5V¬gÕgu-[ò·idØªE^HÞ!Õì9VO²Ž@T­[ã‹­^@cõÎ°s_ï«þÔj›kP¾¤Ú·…œ_Rcð]ËÖûËVÛ\õlíZŽ2“|ê’46Ž[×:ßgZËÏ¥Æñ
ûú¢ŽQLÊÏ=u…”MYm‹Mûq}Yèµ2.}}qÜ¨[¿á®åGleØúN«/ÝZN±èË°Õ—ðd÷¾f{Ë£&¶ôí«(ïÇ%eÐø³u/Ì¹ÌjoY½dmo×²uÏe~Ç [9¹r†¸Þ
JZßïŸž
=ÏsÕïý»f\lý]}cpâ^b®dØñæµù¨ç>ý^ªªž'tÍU&ÕjRîeNébÌ°}ïÆœ®ØõRP»CVöpµËgîÊ¦1K=Ã®xáÕË]ë°úù¢¨úÎuü|µÚÊ8òŸûß
\v»kÙz¶¶ÚZ*Wr-[Æ1ïC\¦‘açûj®Cç[¾æN³Ú§eP†­ù¦‹%Ÿ Rï(ø>C”Ü9(_²Ú†ñõÇý5{Â¾o>²Gï6n|iÞÕVû0Æq
«^òþ®e¨6³Õ6¬ªcáZ‡êÉZmÓPý?·MyQ©dE¹ê<ò	-–>NÕCwmßñU<jµ ã;£ÝïiÉ°õÆƒ®1Êæ†Üœß{TM¥/ÃŽküª¾w¾÷©‹á
_Æ¬û‘°ïî©ï‹oÞBÝ[í³úîý•h\³Õ¾XôõÊRxïÜ7Vdßü¥·Zmó•;Þ¼6Œºþ¿<hdFÏQz?0l>ÆbÌ°.~ï>×:¬y}ï¦[SŸdØˆéXê¶êÜ¹Öç¸;
9u­Cïè[meùÏ·Ÿžì“¤ùk¬¶aÔs—kùzv·Ú¦e©dØÊ©|Ë×sŒÕ>-}çmÔúM©rö8ŽeÒ¶®S¾å‡í×ÐØCW{A‹c|³,ô¦ÜÉu_§±™qæ·¾>ãïV±Ú¦¡«®…
rV«]±êû}ˆó9(_}¿Û2®šz&m<ç[Ö°õa‚®1qdži›t†-}u\Ô§bÕ
OZß9çq_M¦°÷¤Òwï_L÷"aô}Tg:ÊM¥úû\Û¯clµEÌW2ìôîSTsQó½k\µk;â°3ì5Sf]êZ‡u/àë£Žó74IÉ°Ó±”3l=û¹ÆÅ]ÿTù‹«^IØœ¸Ðü'Ho
~{4žŒÍ5nPê·Éj›–¥’aKÕvp-¿˜ú¼v‰ôË þ‚(Ç2é[ïú–öžT×;WûÏÖngµ
k¡×0ßûõqüÎäê¯¾N«mÒ*Oqm[ÔíÅ¢ú‰|µ4Š¡6Š2d×¶éù"Ê»–¯Þ4Âµž°}~I_cÒ6{Âƒƒ½û¬)¿{Ac‚µ_¬öaõ]Ðøì°uÉ|÷þ¯}Úl[LúîQK%V
?•k\ýw;VXmó•;Þ¼Ö¥î‘”»úæ1Ó°ÏYÓÈ°5w£o{·Í1Ï­ü`ÚkWXë,É°Ó±”3ìÙCG;ÇÜ©Æ¬Õ6ª¾±5až
Í‚zf²Ú†QÇÊµlÝXmÓ²”2l_ÿ2¶mïŽ·5ÔcY<zÊùšUu$¯¬üÅ†3ô¼§}«qÖ<§QŽeù’¯†s˜{RÝ#ûÞ+oòÌK¬öa-ô¦ãåjåÝ÷0úú¢ÖAOB_Ž
_»bÝ
«mZÞßþ–†|páS“Z®þµË5Æ±nyÅÀSv¼¨~€œÎï\”ïnÒêÆµm§*¶O±ÚFqùøéºÖ£óÚj+Ó¸Æ¤iöÿ\÷œïa¿7éåVVû¤ôývêý‹8ûMtîQðû;Í!ÃV_µ
ï÷~íÔÙ­­öÅ¢«æQœçbcÉ°ãÍk«¹
|ãK¢ª{.Ð=˜oŽê¨÷\idØAs3µóµÑï«µÎb1K9ÃÞ>{A×ò«ÞYÝKõüâÔWW3LVhþdÒöévLs-›;?U¯Óµ|2ìßªZ
šçDùYœïàE9–iäK¾{É0÷¤#º÷NeÜ_¡×0ßXÕ³t´®½Que[cmcÒú®S{æ.¾Ñj›”šïLc[N®Ý:þÏûkNû¾KQ
óÝMZß\Ì;ç,îdµ¢2Cß~3Ÿj×˜4M#Ã–?VVÕ»Övž’$Ô<,®mJâ=_
›ÏÎ¸Èj+›C†]*sŒXúj"Zíó•;Þ¼6Wå×7á»6åzöpÝ™¯·V.ªZúþƒÚN˜Ú÷±ŒæÓÐ¸ÆËö]·£Þs¥‘açûž¸¯M1='I†˜Ž¥œak^&ßµ.-ÃÌy^hþdÐ
x«m}cÙÈ°óó÷[÷-q-¿˜~››2ÃV½…m3´ÿ±²ªÆw,
5Ê±L#_òÍsOê›J†yG$¬…^Ã47u\’ÖÚÆ¤ùÈ(çw)íºL»¨1Ö¾wðã0Ìw7i}u›âË4÷ñä~šíÓ¸Æ¤iZ¶~\ëùhÕ†Ç¬¶Ié«Sýéû[F[m£êË=+ç-½
Ùj+›C†½`ÔDgMçï_Òž®Øõ’ë3Xíó•;Þ¼6«Þ·ùfóþ·}×%©w´Ôß©wÞ¢¾ŸSJ¶~K|û
¨¯M1='I†˜Ž¥œaûê\¤i˜ë}¡ùOI?ÿ’aÿb”Ü3Hßw¶˜~››"ÃVMHe×¾÷äâ4Ê±Lúü’…Ü“úêÍéýj«m½†…“’¤Ö6&­¯†­Ž¡Õ6.WMœÑêÌþc_ZûªPÃ|
w“4¨~Ûæ«k¡wi­¶i\cÒ4­Ûwo¢<Ðj›”¾>ê°×É(úrÏ°ó×6‡ÛW£*ì\5Å¢ï»\
sRbiJ†îù=ªËž™æ¬-–Uï‰÷l{“¹Ÿ…</äšF†­çZ×:ôœÔÎ·ïÒï‘¯dØˆéXÊ¶¯.Cš†¹Þšÿ™ôó/ö/FÉ=ƒ$Ãþ­ý;u÷Ž)ËGÕê
ª=åX&}~ÉBîIWOšu‰«mÜyQ¡×0ßýršZÛ˜´¾þ†4Î}=3}µq×,k…U}$ÿSÛ™Ý†ùî&iÐy«ºäVû¨ú¾ßaú'Ò¸Æ¤iZ¶²Z×zâº¿ÌGßµ<îú5ÒwoöÞ½9dØ
sîúÅ0ÿAõî€ësD¹WAŒ"v¸ç÷¨úr
Ý3)ß¶Ú[ò¼k¶2g×:ôîiP;ßücçd­³$ÃFLÇRÎ°}Ûž¦a®÷…æ?A&ýüK†ý‹q=KaŸ«jáD£«#§Ö8IçÎæóÛ,ûÂª¬ÚÙo¼³aüevÙqË¤Ï/Y
È=©j»Úž=pìk«m½†ù²Î4µ¶1i}çUÒç¾òëHsí­þXó¤j¼ž–?ûâE³†Œi˜“rÈÍ÷dîkÛåË.ä»›¤Açm˜ßì¨úžÃŒJã“¦ieØ¾kR\÷—ùè;’¸_òå
ža§›C†}øíU÷¸>ƒ>›Õ¶˜ôKõï[mó‘;þ{a·Ýçý-Wí«}ãºçJ#Ã>ºø½û\ë°~£¾Ûq°ÂÕNóêXë,É°Ó±9fØ5K×ôQgª¦µ…æ?A&ýüK†ý‹QrÏ
É°µÇ•2ßí<¸Á·Ï¥æâ;¾²bðÜáãZÜßþs™¹Æq,“>¿d!÷¤ë¦Îníj›V^öæË°÷¿±¬«uKk“Ö÷^eÒç¾æDõ}‡¥ŽÍgk¶ŒÑ\B}¯nÈB¾»ItÞ†©QU
ßóà»f\lµMã“¦dØ¿Ý¦°5ª£è›'÷TÅö)VÛ m-¥Û7‡¦æsµÚ“¾cå^1ŠdØñæµÒw§1ØšçÑjÆ¸î¹ÒÈ°¿ÚX9×µkÞeßõðO»´ÖY’a#¦c)gØ¾wv
ÂŒ}JÓBóŸ
“~þ%ÃþÅ¸ž%È°uãKóœ÷•Yk—¯{8j¦–kÇ2éóKrOê;VÊ%­¶Q,ôæ»_ó›‹ªìÚaêMä«oYO®ß6aØ­÷šËñYÈw7IƒÎÛ$¶Ms4¹ÖæºžÆ5&MÓÊ°}cW
Ãf¸Iè»' {Œâgk·Žs­+ì½{sÈ°wÌ^Ð1ïZÒúî³Ki^J,-É°ãÍk¥¯¶Qœ}jqÝs%akŽ#ßüFš&¨­ožY
sa#¦c)gØ¾>¾$jb¡ùOI?ÿ’aÿb”Ü3H2ì_Ôýê]¸Ö£1j-Ã2Žc™ôù%¹'}íÑ±-|ÛWÈ¼1-ôöcå±\íÃÌy×\ô]§’ìsõ½“)ã¨-XÈw7I»]ÞÑ{
ÞÆýÓµÌ·.ŸVû4®1išV†í›Ó°vÙÚþVÛ¤Ôo¤k›”·[m£ê»—Ð{ˆV[Ù2l_½UkÎ°bÓ÷]¶Ú!æ+v|ymVÕ_s­'®ÌCÆuÏ•t†í»ßÕó•C«n«­ón[SK†˜Ž
¥œaûæôIây¡Í‚Lúù—û£äžA’aÿâô#¼û:ŽlMÆq,“>¿d!÷¤A÷zl¶k¡×°ßoÝ·ÄÕþÃYo]kµm.N{èqç±J¢Î€ªÍ¨ú<Vû0òÝMZß¼@/¼z¹Õ6
ŠCoééÝÏªÓoµOã“¦ieØßï<´Åµž­¯¼ËïG>úîI¿Ü°s¦Õ6ªšÂùùg¾ÑÎj+›C†ýúãã½}¸¥TKÚÕ×xöHý¿Xíó•;¾¼6«úO]ëÑý¯Õ6¬qÝs%aû²ƒo6ï
Ûj+}÷oúü£`µoJÉ°Ó±”3ì-/¿ÑÖµüb«™ThþdÒÏ¿dØ¿%÷’û·Ï^ÐÁµ½“×û³qË¤Ï/YÈ=©æ°ômßòñÓc«]è5Ì÷ÞÙN±úD·œÇª~ÅúAVÛ|T
×ú4&®|§ïnÒ~»mÿŠ4ö÷ì¡£9šösî³>Ó¸Æ¤i¶Æ¾k®×zš2ƒU~îÚ&Í[lµ¢~#}s(×µÚËæa«Èwîè¼´Ú‹®y­ãþÎ
æJ†_^›uÏÜÅ7º¯ÿ5§¬¶aU¾áZGÔ{®$3ìÝ{{Ÿô|iµ—ûßZÞÍÕ^®š8£•Õ>ŠÊÄãªW.É°Ó±”3ì™ŒòÞ¿>Òån³}Zšÿ™ôó/ö/FÉ=ƒ$ÃþÅOßß2ÚµŽ8
3Í8ŽeÒç—,4ôÕé8¹nÛsVÛ°z [ë™{Rï|‡ÉùšƒÊ\û
ì¸”¨î›¿ôV×úT³×jÖB¿»IZ½dmï¤?¿Üûú’[\ëÑ8Y«­Lã“¦idØ¾uÈ¸úgòÑ×Ÿ÷véßzôþ…Õ^6‡;¨/Có[í‹Aý.¨¿«ñöÇ9v±±dØÿ?{oâlU‘¦{o
çyžpÐBQpVTœE¥ppQDDEdžgˆZ…³eÛV•…F}}«¢nu÷½qãë¸ÑñýÏÁÝ½9•ïz×Ú+×ÞkïóûE<ÑÕx2×ÚkÈ•ùä›oÆñkk5mÈ³û[íò >W¸å
“$uÛ»s[õgísåa÷9ì¤Ê÷óWNÕ­ü‘ic”´¾-Ô.vÖ³jëOúï^iÔÿ”>;Æå‹G¿ÿÄ¨C½¿M+<l„£fxØ±úfsºæúþ:†æC½òR^ÿ'IEñ°w*‹ï™$<ì
²rÙ§Íå™F1îeÑï—”×´öð–?œ¶¿è)o¦þ»uËôì­ÐúÈ¢âí:Þ˜Þ?t½•{Õ+›VyŸÝ"5îŽ‡÷°ž9[¼òieåßúæì^Y©mL#Õ{ÁÈñ'„Žsï¬ztÉq¿2
ãÏ&?ðÔ>^ù´Zòâk=ƒ×xå¦o¼²Uµƒ‡-i0ô;ôû¼²ebCç¯¼4^Y„êv~¿¶«¬wYúì½yyåCRŒð„{ÝÓÚ?¨ª¬}®"<lù×_Ì˜ÿ˜uŽÓy°WG­:&O¿Æªë÷
‹Ö.É2–ë*Íê¹¨îÇ‡Pë©H[ÞD¨î˜ãkŸVnùgyÜ^ùF(¯ÿ“¤¢Ç¿xØ;•ç[Y+<ìÊ»UÅ¸—E¿_R^P{ÔYç8kØè(ïiŒ6ìÇ¥ë·„êÐ÷ ìùíbÉÊo!ïË
+›UÖÜFÌµyŸÝ"•ä'~0ìÅ#½òidå‡‘Ò¶éhc©¢=lµV.è/M:Ë+_´¾Ÿ¿òíÐ¹};gé8¯líüýáµ7içM¤vñ°õ.[ïÏÐ~·¸å›-kœÔöŠ@v>¿Ö’Õ6KÚ
óQ>¯WGUÏÞxOâ¾ÜµÊÚç²<ìß¾3çžzöÒ¹î´Ì}o$å@ÉòÛ%õªsHÊÑ2¬ÿ
·žZÉ»~é×îþÇ%ëÖ×Ö…‡Pë©H[}á`»³fë_ÕŽxåÓÈêÿIZKì•o„bø?–ŠÿâaïTß3IxØ;¥<¡c|ñþ‚'¼²iã^ý~Iy}@åâPÌu¨ŽŸWwü!Ož7ù%³ž}
¸ö— ÕŸ¥ [8rÂIÖµŒå)–]V^påÅòÊfÕšW§^:VÌ\yŸÝ¢%¿>øÌíø6ÄX£°yòŒkCõgÉ‘Óˆ6¦‘*ÚÃVLšu½4§à•/ZÚ3Ô:¿Á—^ç–÷”´¾
Ë{×.öµ=Ï3×œËÿ‰=?£Ý¨•ÕNë>{eªWxØÅxØÚS×jŸ¥—®ïÐùèØ]}‹ŽîYrùMëŒÛ‘TOWeiû%ËÃ®JýD‡¾ç–_£òšÛ+òæ­œN’ÖË?xÉî9…4æö
ÁfŒNU_Î\8\gµÍúwggŽíe>	Õ‡Pë©H;i]M=ó|!© MZcsýfUêÏ1®Ç[CžNµ¯
v±ÂÃŽ«FxØÖþÝšsÏ:WßUŠ¿üä­Y·Ç¸—E¿_RpÝ„·.²ÎS±}>Í­£«¿êÖÊwóVMµê•²´aº–V?W}Ü'®¾Í­#«Ôw]ÿúÛ—=Ù û·Ð[CGó%*§²W6«Ô'
K~O–w
$]Wy/–w”åÙ-RŠ·±žÝ¼ùÆ4&³~ÿ¦IïöóÊWÕˆ6¦‘*ÒÃ¾ì¸^Á|<R¬8ç¼Ò÷ÇšSüîÃoæñTÕŽ[ëYÿ—¥îvñ°¥ÏßûpˆõÉSòÊ§Õ37ÜY‰9(ý°põœÐyÇÊ÷Š
PHxØÅxØêýaÑ†uV{´K›½£ÿðÓÊM¿ëÔªŽ¼¿ORÖ>—ça×JýsÅQ;gÉK_Í^ü¼¤vð§5›·{e%í‡ãO’æ?7î8ï¿œçßåýWÏQÒy[ëñj…‡Pë©H[^”•¯:Fý
UMypØ¾V»¤oDÌ¶IëVª}Î´õâa+<ì¸j„‡´~Bql^yK£o¼›åqÔs/‹~¿¤¶ö³b¥¥ýºiÖÜ)vôåACvÿÝÜe’®aUYÛ0í³eÕ%ßG±^i$/güCöøã²
õ[UwY|™»ú^|žôMñÊf•ây¬kgÒ£WÞZÑó”ô\dyv‹”žaBç¨qM½Ï›Ö6(¹Uoÿ©mL#U”‡­knåâ‘ë7À­£QZ=nJë<ë}÷ô,k·U¯æÇ¼:jÕN¶âÛ
­ù$A^pßn^IÒ³§5žSÎç¸Vún‡Î;K^s„êv1¶tÇ¹WV´ï ÕV×#õïßúÌ1ÆR;>>æ(ï\ÒHs‘VCiýœ4ÂÃF¨1*ÒÃ–’ò#ºåÞ\ýÊªÔ·ÿn
ÞòIIí“öó½æäúö…W¬·Ö¯võuÒ¶yxØÅ
;®áa+ž.iÌ™Õ[’_÷ÍÜ¥¯X÷¯Þ{Yôû%Åê“zk;µlÃ'jw4ï§˜2]gõ‹•çãëY‹žµæ-emÃä‘[¹l«R|o½{¨~y9]×a–Å—Ñ·ÊÊïw}ÏóÝòY´óX°®sÖØ
íË™ïX«¬Ïn‘zúºAæ;\O[sK¯K=üU/¿q¶WG­ÑÆ4R–‡­5jwÒæX©Õ­g]RÑNÖu’·ëÕÑH);É#P—%fZ±}ŸN›{—UŸbâ²æçk'[Úúæû7[×GóJê³f¹æ
’âÞåÁÔúQ1=ì7Œ¿ùí»sïóÊ"”GxØÅyØ’ú@Özœ¬ÒzÈg_ÖYo¬ñBÑ¶úVSžj­zZ)F©ˆóV|Ì|~xØ5FE{ØÚ‡Öj7ÔÆ)ß’åWÜü«+jµÏíØ$Ž3
ûŸÒ§¢}“Ú)O{ÞhLëå´SßUû)hºµÆÛ/ßáaÇU#<liÛ{ó²®·$_B±ÃVn‘O¿ Ó¯L3\Ï½,úý’bõI5>ÿzÖÒ¼ßSõ´aƒ/¹.1f\Rß_>rNyÞÌ•'ö
îÌ¡ü1Ö˜¡L¾Œuò¬?°””cFÒ¼…<\ËWÔ¼ïë÷>¾—ò
f‰Éúì­$KúhÊŒ´'QRêè»—_¥ù™¬m#Ú˜FÊò°«ÒŽúUšCóòFÝñµý§¤\›ê÷)žÕ;¯FKë@’®ƒö~ôbÇÕ¦kÜž4g¢~­®“w>]Õn¶ÆÖÚˆªäõ«=K
zGõ½ÑAÏ]h¾1¦‡míI¯=(¼²åv±¶$ßùKÖ­Ij“’¤¶æ½ÇFR;÷k¼`yÁî~dÏ´ñ@–ÔÎªàC=Rü“â¼1D}?Í,å›õü ¬ÂÃF(žÔN{ïryÇ«•Æ}
Þ\¤ÆÆÊõÍ‹G+‘úöš«ý›4ŸÖï$ÅÕJý~å&T|¶ÖªMÔ8V¾ZìüIxØÅ
;®åakÿ­4q¿zõNj&ùÕYò°å½—E¿_R¬>©¤q|R¼b=RìíGSß¿%ôßêmÃ´¶;Í½—ÔWÕ}×œ†ò«­–'ùùÌOy1ÝU•É—QÜ{è‹Èç«5ðIûºWUý«O¯œ‡zÇ¶
¯êøÞ+g©žg·HiŒòýÂU3½k ß®ÜäŠžtÿ{KÚûBý¯£ÿ®=@¼séªF´1”ça×JÞ´òè(ÆXý¯ê»­9“?­Øø…[~Ç·!füTlé÷x¿AkF´'ÖôGŸ;¨úÌÉ·èÜ/ÔØ
ªVYsˆTÕn¶´sà·wÕþ¿bZtôÓÿÖØ#i¾DŠåakld}³ä"B¨áaïaKê{È+Ø¾bÓW^»T•Ú!Åï…æÚ¶MŸ÷ úg]•u1õ7»Ö¡=°«ÿ]ûáè[œÅ+Vú~e]ïR
´ÖIßLùíiüI}<}÷–¼øZÏ"÷ÆÃF(žšéaKIû´§UZO}X/#–ð°ýòv\5ÊÃ–ÔO³®y½ÒÔÚÏNÊr/‹~¿¤˜¶¤¾æ½ëäIñ¦Õµ€V¶zü”s½ó±¤X·4~C
•É—QI¨Ï­»¶çynù¬’Ç—¶ŸVhODkï¢zŸÝ"%??öüNUò¯‡ö»Å=‡ÑÆ4RY<ì<Ò3¨ñ²w>Í”ÆòÞ€<Ê“k´=lI¹±½5™yËÃ¶ö÷Õ\½W¡¼ÂÃnŒ‡]•
Öi]©æÌ+WÇQÜžÖš¯xyro­©7çiQ’¯¾ºæò5Ï§óUn»Æú¾éú*×œWWQÒ9jŸµ©ê—îœŸ=@k9õÿk]‹~Ã%=ÎpëŠ!<l„â©Ù¶¤öÄ«7IY<>U7åÕ
™Gò&ÞóXªsÂÃ.VxØqÕH[Z4ê•“­ëžUŠ#ýõ9WvÖkýM–{Yôû%Åö°%y'ò7¼ØÑÔ¶©_zí©çþW}V¶à¹qÇ{ç’$å‹Êš&«4§¡|éÞ¹4RŠw
«ö¼ôÊÖ#ÅgÉ’$í“Yõk‹xv‹”æbÌïÔjûòŸË7óŽm©mL#Õ[íšrlxçR©-–?áý¦,Š‘k´]=lI9ëå³x×±)FÒ;~É Õ?kØèÒô­Qû
»±6ê>ÂÃF(žÊàaKóŸw\½ãèz<¾‘7ß³›Ö©zug‘rh>2Ë\)v±ÂÃŽ«F{ØÇ¼ÿ‰½½5¼I’§¡÷²6wrŒ{Yôû%éÊ³“—-oßk{µ¦]yä+w­§cÒ»W…Ê¼óÈ
³zçàIî¿¼Ñ¤óË*ýf­ÉW\ºw–âmBç¬øÁØ¹ùªÒþyâÞõ~*î¾v}k‘ÏnQR¡ýOó´7Uin^sæÞ1“Ôˆ6¦‘²<lõ4GSÏ¼Z­j÷·j%©?º}ùÆmÞïó¤v­žü×
]ÕÎ¶¤÷\kÍcÅdkï
µ¡1ÖÉk0t}£Ë˜ÛµŸð°ñ°Q1ÂÃF(ž”£Qù¥cÉ;^’´ÞäÓi³¥]Û¼3Ñê9yâèž¼æöJÇäé×tÍ±F:¾â.´÷ä]}¯vÒÒÑ¯ŸºŽúw¯¬'Ÿ‹¸OU)ÿl¨îÞ
U,i_¤Ð9îxnæye»Êº–y}Šª´>
T¿·gi#5îŽ‡÷£r–zeóHí”Žáy­µ’ï)?J^m×úbÜË¢ß/IùÜBõ{û}e•ÖÑ©pï£{Vó®jß1åÑóÖØYsY/ÝñP´çVÞ€|=IûæYRl¢®¥Ö
†|ø2I>µå­Lüdaù4÷ªoaÚïoçu]±é+Ím„æmõì!ý­5µölNzÎÔŽç‰½®U#Ú˜FJ¾@è·l˜øö¥úïj«ÕŸJ›Ë¾*Í±iî'†‡Ø,é½—¯*?ßû½]%ï^ûmÅúýÖ»
ûdÿnÙV’®¹¾uZ‘¥Ý“4_ 9`íí'‹¬ï©öžðÊ"CxØxØ¨áa#ÔÞºôØ3+cn¼»b'«ûø(¦IûÕk|£>§ÆˆIû‡g•úþúf©nÉ«¹ªùô«ç
D{Ä<>BÈ×€3/®èýÓž}Š«Ž­Ã¦\‘Ÿ¼5ëv+‹Ú÷ý£¬õY÷‘I+ÅÐ)ÖPùíô}¯­öY>„rhÏ7µÕZË¢¿Ñß*ß Wo™´pä„“B×TþV,ŸÊ’òÄhoIí“Ù¹ãŠ
M_éÓ>zš3Ö¿ë;¬9¢Ï¥ÙÒ³¦øJíó£¼”ºþµžžöÕÓ^zÖ4ÿSÆ¸þVÕÃ—ßØé/èýÖs¨9Éêu×ÿÖ{®|–C¯¸Ù­«Õ¤ïWõ·ë»VûÌé}TŸTmœ<ï"÷ŸêNÒ>ŠÊ‹ªþƒ
úùzß«c µyÚGS¹Í4—zùñgºõÕ#í×hyéybuÊ"<l<lTŒð°B!„š¯ŸVnú&4`Ž¯~uîíhä³˜üÀSûxåBµ–¬½¾›·â
¯,B±„‡‡Š6B!„Ps¥¸±Pÿ_1ò^Y”,åW][íXT^l„B—òZ¹ÒZeRÔÂÃÆÃFÅ!„B¨¹RÞ¥Pÿ_k±½²(YÚ¿ËÚãNy¶¼ò!„ZCÊ…jë‰ÁF
öæÿ¥½²®:ñœTbÍa÷•òÍyÏG­B{Ýàa#„B5FŠÁ¶öW|âêÛÜòÈ—•[×ýúžç»åB•[/²{¨W\v¬ýaJ+<ìlzÿ‰Q‡zÇAí)Åë{Ï‡'<l„B¡°úÕÓý›
´ÒþWßÏ_9=Ôûqéúí¾×_£¤œ!ÊºÎÚ¿’ëŒB­«Îõ6«;þjã•Û+Pláagv÷6B!„Pqúäíîüý¢5ŒÂ½}¯qÿÞ’Êª«?öÖÐû{u ôšpï£{
Z×úƒácŽòÊ#„*§¾š¹pD¨m×Z›k{žç–G(¶ð°³	»û
!„B¨8ÉÃ®í7ý´rÓï>6{|ÐaýU.éq†YöºÓ.¨¼~ïã{}9sápkß)éû«f_ÛÞ;8t½·¯Ýò·û.ìï–G!T.½ûèsYßÒ©ßÏ+PÂÃÎ&<ìî+<l„
B¡âÔÕÃé§µ[þÇö›¾Rœµô‡EÖý¼fËÏ^9éçÕ›ÿt{ïKÝó@ÙuÅ	gU~Z¹é›Ðuÿqé¦/;®—[B¡rhh¿[*šƒµé_¼¿à
¯<BE©;yØÚ»eÕËoœGõàµ§”Ê{><½=ô™¼ã
„BuG¥ñ°ëÕÏk¶ü™~|±zá¶ûv³®ÿ·s–ŽësØIn!„š+íÇûÓÊ-ÿü–®Þü'ù"^¥îäa#„B!„Ê©¢<ì—®ï|éuîñQ~­yuêÖ}øtÚÜ»Èã‚Bå•ÖÔ
hßãà·tÍ–{î¦»wóê@¨Háa#„B!„š­Ø¶òŽ,{qâçuª{lGgvbåëYK_°îIÇäé×xu
„j¼.9îW•­YdµßsGŒ=Æ«¡¢…‡B!„j¶œyqå½ÇF¢ý·/ß¸Íó¨CÚ¾vËß¿›·|Ò¬'G~ùñgºÇDñ¥Ü×ÊmÝ£­o¾3ñØ!T)þ:É¿þí;sîñê@¨
ÂÃF!„B•M—{fåÑ+o­LypØ¾FŽ?aÓ¤wûm}sö€OÞšuûW³?¯ÿ«ÿÅË“{ËûÖPå’g¸õ¢âuëY—T&ÝÿÄÞ–ïçÕB¨1xÎå‰mvß£Osë@¨ÂÃF
!„B!„B!TVáa#„B!„B!„*«ð°B!„B!„B•UxØ!„B!„B!„Ê*<l„B!„B!„Be6B!„B!„B¡²
!„B!„B!„PY…‡B!„B!„B¨¬’‡½×{VŽßïp„B!„B!„B¨Tê±ï¡
øo®ê{aeÆ«¯œšGWžw(çõê¼×Ï<ðàî^ÙîÈƒr¿§p¢w         H`Ü“Oí÷»­ÿ_yì±½½ã@óyôŽ;wÝ¿‹ŒôÊvG–Î˜~ƒ÷ì{ºéŠ+½Ã
@­îa?tÛÀÊcwÞµ[Ug÷<Ý+ÒmÁÃÎ6        @óieû•aÃ÷ïz.ŸoÞðó!äí–àag    üÜË€ÎqAH#²‡W
 ÙÈÃµa£†>²§W •9ýÄ“Ío¸tÔáGxU@7¢U=ìÎ<³òÍGÿ:Ÿ çØm·Ý¼*ºxØÙÀÃ   (7·_Ó¿òíÖŽÿõÃ4Vtíu^  Mç¬SO«„Ú±/6oü¼²
­Ì{ìQY7Þ–§²uõÊõ7 Âò°¯¾ð¢Êá‡šJ{ïÝX{ß}ö©üvÃºÏ’¼CÍ×xõt7ð°³±ÿ~û¹Ï~UÏ=ôð¡k‹‡
@ßô/¿ÂÕõ—^æU•µÇ¡céådîäÉç.}ïÝëCòÊ ”
íýÕ–ŽõÁð¯ •ÀÃ†îŒçc/™þÎ5^Ð=°<lµ¡eEãlëÙ®í·^Ø»·WU·»8¾ý×Á>64‚Ã9$øü…¤xµ˜XýíÏ;6üÉ+ÍAc!ëùðÊ
”…ýöÛ×ŒiQ\ö×ßàU Pð°¡»#»cÉ¢—¬qÊCÙË«ÚŸVó°µo£õLw•úµêßÂNð°‹šIûÓu«7ÆÌµÔ<ìcŽ<²ÒñËxØ
Ð$Å´h|ã•‡búë;‚ßLò“„ÁÃ¨T:ð@s~Zqª½N>Å«ÚœVò°O9îøàzA=Ë›–,ú­æ-	vqàaC3ÉâaKCòªLMwò°­ß*yeË6
´:÷Ý|‹Ù/~gZ?¯<ÏÌ	NÝí7ã•èŽàaìDyÂ¾ÜÒñ÷ÐûðñšUKÉÝ½i[ÏéÖU+>ëØÇßç€ý÷¯|Ö±á÷¡ÿ®Øm¯þî
vqàaC3ÉêaoÛ¸þÛÝwßÝ«6xØ;å•-xØ ÐÊè›÷ÅæM
µa[V,{‡±m9ÀÃÈ6ÀsK¿«Ìýšßyiìq^yh_ZÅÃžñê+§†ÎsÃÂù#ªsYŸsƒÏùW[:þ·b¸»;xØÅ‡ ÍÄò°­ï¾ôü¡{zõ¦{§¼²e
Z™Õsfßj¿³uìQG{Å¡Aàad`W,ð›:þoŸ3ÎðŠC›Ò ¶5óùæ
?rðA»üíÏ:"ô{Xs€‡]$xØÐL,[}ÞŽ¥‹Æ…þ›ÚÏ}÷ÙÇ«Ú{§¼²ebåì™wn\¼`TH^Y
€fÒï‚¾f;üäÝ÷°î²Dàad`WäßýfÃÚOCïÅæåK&yå¡=)»‡}Äa‡cÆäiËÛîŠö*Û²|éÔÐoš=qâ™Ctð°‹šI’‡Ý÷¬³Ìñþä‘#óêöÀÃÞ)¯,
äC}|Å¤„Ú`í‹ã•‡Æ‚‡  <l€äâsÎ1sŠÜ{ÓÍ^qhCÊìa«¯ª\!¡óÓº«Ü1Giæ€¿íêk¬b
ãðCíÔÙ=OïÔé'žÜùÿÇÊOk‘ÇÃÖ¹)·þõ—^V¹ñò+:¥sßs¯(érsðAv^CåŒ9ð€¼?64“$[ÿÝZw­=rµ÷sð°wÊ+
ùPœu¨ýÕšbr–<l€làa„Ñ^Í¡wã·Ö}ÖÝs-tGÊìaOxúéCç¦½½gõîo
~¾ÜÒñ·£?"±lößo¿Jÿ‹/©¼ôÄû,xkê%›—-ž°mÓúï’òÓJŸwlØ®u³_ý,ý†½÷ÞÛ;Tj²zØG~xeâ3Ï¤óÑø
TVÿþÑÊeÓ_6|í«ÙtM¸µ2ÿÍ)*ç«-ÿ:·Ï6møaí‡sÑoÐÚSÍ‰64ÏÃÖ<™õ¿7~üÉ^ýIàaï”W  êG±ÖÞíIq-Ð<ð°²‡
Fc]íqz?bíñ­CY=ì{÷z._oÙüÒÆZÈ;ý¶ÍË–L,ÊÏ|{ìØc?]·zcè¸õHïª~ÇñGãÚ%­‡­6bî“Ï³<¯„sý7=OE][ùp§½u¹žï\BÒüÀœÉ“ÎÑÞ
Ÿ±ÁÃ†fâyØBïNèo¾þhóÿ«œMõ‚‡½S^Y  ¨«Ÿ¥~rÞõDPxØ ÙÀÃ°™:zôÑ¡÷C±ØEùOPNÊèaï·ß¾•m×:¯,ûµ(ÏÅoÖ¯ù(Tö~ôÊ×Ã§kW¯
/¯äÛ*¦Û;~ž‡­—×Ÿ}îkŽ+­´/XŒ½âª(îZ16Y=õ$)vü¾›oñ<lh&i<låX’_ú;­iHª?‰fzØÊ¤ù=å5Òÿ-:v|”Jyªt•
â¢>}ÑyÊbsèÁwÎYë}Óÿ.ê‡TÛ[YÎ+„Þ©ÚvQëÛ«=mÌ˜^ÙFSÆvMmÎEÏoõ¼¼5­yé®öž{vß@µ•ZÇ«gL1gen+ËH^»úž÷:ù”Î6¨è~qP§ú
›¥Fäg…æ
I9BïÈý·ðŠCQF{ùÌBç¤÷ÊvE¿#äÛ(§ÇçïÏLQvUŠ¥¬wž)ÉÃÖ8G¾®wü´úxõÊ1|ìž'œ¤yˆÍÞñê•wü´àaC3Iãa‹™¯½vFèïòäm¤‡}ÑÙg
W¦{ùå7újKÇ¿†Ž«Wî&ù}Î8Ã«2µaÕ}$íbµ%µ—FÇu´wøÂP>­çÔõúT¥q“…¾5Êï¤ý×By v<‹ÿ±uÕŠ¹ºòZZ]·Ðu8äàƒ¼¢TÇ_ÕrYÆ_Gq
DeÐµ×uÎ?kÍVÇÒEã¶m\ÿõŽwÿ_º^[Í…+Ç–¾õKß{÷zõÿÎëÕË;D&”S,t-Nêq¬YF÷Yqz¯Cë¬Ô‡Ó^ÝÚƒ6Æš´4ÈÛS>7å_üí†u_„Þy—ò™)÷[×þ¤î}è:Äè
Õ¢óÔý×9¨ßeåVÓ¿ë*wTÑ¹ÕŠàºK. ¶½z^bÇ`Gh×þáÛÔŒvM^âC·
¬,™þÎ5¿Ù°öS+DyWÎžyçÈ‡‡ì!ï=]ÛÂ¥Óß¹6tÌuÎ},t“T–ýwtê‹<óÀƒ»Ë£_=gö`µŸoÞøçÐxSÿ®±¡rªÿ¢vE±ZíÂ‰=ztæþÜ°pþ³ú­Ö{Zm+µ
ŸRÚï[Z¬g&íqöÝwßÿš÷Ó{ž÷=ÈC=¶r—êÚ~²võJµ5]Ë~¹¥ã®›?ï‰QCÙ3ö7¨èýQLã²ÓoR'”§Uÿ¦o·þæ±;ïÚ-ö;§>Mè™K›WUÏfu®G÷\ý¾²—Õî
é]_õÁ¬{ô¬Õö3¿Ø¼é¯Š…Þ²bé´Y_ë¥oú§E`Åb«ä•…ö¡lö°{ïú¬ŸmZÿ}½íÏCÙ+T§<–´mMZŠö°¥zcN,[ù•Ä;nVÉÏÓ÷=ë¬ÊŽ6ñ/ÞqòÈ;
‡´àaC3Iëak¬o­³XùÁ¬»¬ú“(ÚÃV¢¾P½9šähÌX–oCÍŒC‹g]}»þ­<>¡¼=!j¥¿Õø#O®›F°|æŒÛBç?æ±ÇÌ
-4¿"?CãúÐ˜S~“Æ¡²Ï>øÐº––_Uò°ä¿ÅÛZýŒŽ%‹^êú·ò2ä¹{çW+]­‰Ýw«"ßOó¡9 Oò
åÈãZöþ{·„þFïLÔ–¿óÒØã¬ýË=©=Õ¸>O­‘XûÏ›òFô`”,íÚ¥}ú”®]Ó³¡¶¥ž5•z¿4osò±Çy‡	bµ…1”wN:ò55Gø‹G˜{M¨Ú|ÍhœÓªh.Ls6Þo
iÇ¸óú>Æ˜—hG}ãÕ9JÍåj^7TVó~ÍÈ³ŸÅÃÖoÈÚ7V»
2­¿_&4Ï X¾PŸÉ“æQäóË7Žú4¡ãÈ°Ð÷Bþ®¾%¡vD¿K1fM@}-õ‰ÔOô®qH­\>S{¦Åô³õ^[Ï@3¿ÐXÊäa«ŠÁÑ{ž7‡±æ¿C¿Sÿî•Í‚åaë©~®b`
ž¾ðîúî\éec8iÈÀA1ê×*osR{ þo=±SÖØÒ;–úlŠ×·\ÒøqËŠeï¤é³¿ø¨=†OB1¡ÖZ‘ªô¬¨¨~æ «s êWé«¿) ©ï<Ò‚‡
Í$­‡-ïú[½Ïõ|û‹ô°µCsúIïpZ)Ç‘ò©d;™4^ÆŠSó®G’>ß¼ágÅ”•,¶¾UZ'àýæªBÇ+j®\sÆysl¥ñ°Õfè}ôÎ'IŠ¯:ã¤¸ñ¬Šg¶üŒ,RÎê¿Äð
°ëáõÒjËò¥o4bŸó<(~ÅÚ¥ˆ±Jšv­ÇQGån×ô}–§“GÝ±[½óµR<±Ö=dãhWÛêãÇâäëÑj:W³÷»Òè7ë×|œ÷ÈâaË3×wÙgW¥çÙ8la¤ñ°ÕÊ
»vZ}ë´kÅšÚ!åS­w?¬Z)fOsÍÞ1=²xØê[(žÆ;7)mÎ˜¢Ñ5ýÈ£{ÅøžHòòäqÕã_…ÿ:Îû^íé•…ö ,¶¾+Ö¸Lý(¯¼‡â4Õ¯8m¯|Zª¿Aí¬ú·Zk–´
þ0„Ú
yÜÖþë’Æ^=]Éâak=Æs=¼GR3Íe¾õâ‹Ç$Í‡ê[‘u§â ’¼gïÍ^8*mÌ˜ú½ò³Ckü¼²iÁÃ†f’ÅÃÖ{£ýýúÕŸDQö­W]]‰½>D]–ñv2ž×£¹
ÄzbCR=õæ»)š4¶</­¿ô~gW…ŽW”‡]•â{CÇMC’‡­¾âqê‰¡
IíX¬XV­MM3/ŸWy<lõ4ôŽ‘Uj{ŸVÞaŸ|ÙÐyµnØk×4‡ëÛ¤v-ë!„Þ-kû<R~ˆ´}m‡]ŸäåfÍåÕ~Éïø±÷{²Hß•½c[¤õ°o¿¦ÅÊe©l¶Þsy
"1ÖHÚ{,klG£QûSOßÉ“bðóìÆÃÖz–¬óõeð°5·‘õ¼³È;~®¹èâà{¢¼ ^YhÊâaÏ<ùÜÐy(_Ö8
õKCc}?cýÞ¯Œ?eð€[;Çy‘÷«èÐuÑïÈ;“ÆÃÖñ4_˜Å>'åüÐØÐ«£Åy[u©mª·+Ï}î“Ï«}¼2iÁÃ†f’ÅÃV~%éÊó/1)ÂÃVËçê*yi#
v2ÖõÑd^ÛG+—ÏˆÕˆ‰çaç‰¯h[ªwi«Ÿ!¿QsdÞq³Jyu½sò°Þ‡"T¯‡­q¼b¦½ú«Rž)m;ªç³¬sDÎ:çñO
+$¡L«µk*+?Æ;N½R¼fZ»~ýfýšÊ­¹+þ!†4¿éCÏÃÖ³«üÞñC*“‡­y³¬¹·ÒèãÕ«Åð,Š@ó¦ÅG{¿¡^i}|½>¶ça+Ö»ž¸ñf{ØšKË:×“UÞ9¤
Aß=+6õòsÏóŠCP[~EèÔ§Ž=?¨q¡c)aÛpõ¬ùÖ¡¿¾Ã+¾I¶b”5Þ®·­öÂ+©=NûÐ^7V,”Úªq
Ê?Wðþ6-xØÐL²zØZ÷¢ø‹P™¬¹Øb{ØœyfpÞZÉS,Šò1ÉwÑ^(j+•—Im¼Úó¤òiczñ°“©÷úè[!Vž¦¼Å{(§cš8X­òÎ«ÑX¾rN*·¬÷›’:žåa«¯
DkÀK-O@1£Ê{¬ñ”ÞÍãê÷¼Mý÷zâCÓÌ•‡TÝQcJù„z&¼÷¸ª;¯ÏôØî‚Õîzn:/ÍÇë:êzêº*ÿ›¼åVKW‡-&i¯÷Fyñ´ÇUhÏË8 ¢k¤g1é<õ
\¥í«5
}«¬g5F0DŽvíÿ†Úµ4ÏFžvM9þ’êÖó«u×zf•ƒ@yIõÍÔšnå1\1ëý^\¹æÒŒº£‡­ÜùÊ¥¶Um‚Öß«Ðû¨6X9$×Ìûà¡4ù+ÃãK3PN\«ÏX•òåêYÔ˜¾×
É§t>cj´†®ƒöìõ¾ñÚû$+IöÕ^”+n¼L¶§P¿ÊË§YÕ“^/e²6å1M:oõå•×FqÛ+VMÒÿÖû§¾ç#«¼w!,[û•äÉ3ÕL[ñ×ŠôÎQyQô®ký„ò¨¡
u—êwê¹óÆpÞy¤ÅŠÕ8Ð+­O³=lÅ[yýòæe¡obBÇ«·++åÃ)Súzek±Æ–ê—h}X^¬¶Dº¥ßU^ñN¬õBê÷äÍ‰^‹ÆiêWz—<lh&Y=l¡þõ¾fY‹ÓÃ
V¼LRÿiÇXd³ò	§AëF“ö ‘·Õ¯I[xeËD3<lµá[é»nÅšiœ,
iÌ!6X¸‰X¾×—äoUcfC{4†ŽWëaëk,qó•ý*ic%…þV±ÖIñáò]¼zº’ÅÃÖo×7_íC
Dã¢$Ï}ó²%ƒ….>çsÎ\RßT~TšøùÄò_ôŒ'ÕY‡=óµ×ÎHúíYúë'öè‘¸[ŒÜ}1Q|Dè<5ßá•­—zÚ5­¿´Ú5ý»æ³Ûµ k?
vØÿÚÄsÕ¸&Ífj~yÏL¿]ûzyõt%Ö·¦ÙÔöñå÷kN ž\‘òT“Þ?=OYëlZïb³¾!ò¯ÒÌq¨­’—mÕ%Oò¤ÇzÕìB’‡íÍÕþrÌ¯~wüï­ýoe÷°ÕÇÐ;®ï¿
µ?¦ž'åýLêè¹Óšê2‘´^Tç«½Óä*ÕßÌ™<éœ¤ï²ÆC^=]±<ì×Ù}æô\VŸ¹®ûG7ËÃÖ{´uÕŠ’Î[s#iÚ'õ™Ô×W.ªP=^ù´ÜpÙåÁw%´‡8´Íô°õ½S®Ðñ
/â•¯—Ž9ÆÌ³ª¹s¯|£±Úñõæ=å•­Å[n\´`¤W6
ÊKiõN›z™Wþ—}fƒýç"Ÿ‡àaC3©ÇÃVû+?0TNÿžf<"bzØ³'N<3T—¤uôY<:¡˜‚OÖ®^mÕ™Õ¯ÁÃÞ•´^bX³ìã¢½ú’¼Õ´¹`EÖØCõë«þGè=SîlÍÁÈÏ
®¢û¤g7ÍXÂCž¦«¥ïqÖ|Ói<l%åiÝUZäe&Á³^×’â¼å3iN¥tÿ¬ýL²zØÚ£Ú{+Ž!ë<œPk?$yHõþî"P¾Ðy*oŸW¶^²´kŠ÷K‹bEb¶ks¾
ûæh|çÕÑµ;V?^ï_šõKµÄúÖ4Åáh}ˆâ ëyçjQ›?}ü¸“¬ûVä³]÷Þt³ù>(æ@cê,è÷'í
©¸-¯ŽZ’<ì4þWÛ©g=´ç“î¯ü\ÅöjnªÑ¤ñ°õ.Î~ýõ³ÒÌOUQ¿*).[ky¼:…ú–O£öI÷Æ«£+ò©­o©æ«³îoiyØ!é¸Š
Ð9¨ÏBÿ®ö¥Þ<ny™6fLëüu/´GQ=èÙÕËöÊ¤Eó6¡~¡þMí´7Íô°ßx~Ô¡c7"¯‡µGŒÞÓ¬}´¢±úòt¼²µía«MO;—4çšu|Úhð°¡™Ôãa‹»n¸Ñì+§
Ï‹åakdÍam]½òÃ¬þu•³r/È¯IÇQ{W<¯G9õwVIÏfÖ=Š&­‡­1ŒÖX—{÷nHÎ2Iy¼²ÌgÔòü¡{Zõ*Ð+_KR#OŽÌ*V›“ÅÃ–×cí‰¢ü^ù$l
ù/>úX±ð¨:GÅ_…×®mÛ¸þkå±ª‡¤v-ë^ªšÇ²êRÜ·WÞB^…åõ¬ü`Ö]^ùZb}kÚ ½ÛÖ³­wÞ+ß(:cŒ¹>íƒ”Õ¿®¢zÕ†YÏo–ùœ´¶ú{òêíK6
ÏÃV®Í“Öƒü
kí»Þùzïgl’ÖuçY£¯|JV½YóO¤õ°•Åò­Ë‚òrY1zo”ã1/Ê9RÍ_íým¬<kYæ—¡5i–‡­¼ÖþŠÊyfÍk-EÞñKL¼=ÒÓÒ{ìãï:†äõ¬þ\V¯¾àaC
3©×Ã­\>3TV9†ÒÌcÇò°•/TúUY×–vEçhÉ§Œ•zÓ<ì]Iòz´v3ï\´5vŽùÍŠça+N½žW£°¾¿iÖPÕbõ3ôþ)Î'OßJí‘µt–gWõX{éßcÄ!Çð°5æ
>O;Þ‹<×±ŠÕoQ®K¯l£í!§ù–¼mKIíšòç=¶Õ®i,î•­¢ûo½ò¸¼òVŽí¬>W¬oM;’ôœå}ÆbaµAR=¹«kÑ<šú‰¡º³äHãa+B–˜åfbõ3Õîi?¯¼‡Ö€
Y×)ëÚÄ"ÐxÆòSc¬É¶öå•W›eOUÏÃÖ¾=—öéãUS
ô]³~GÌµŠ’§ïý]4÷:ï‘ÉßI‚RÓ[ãë»UÏÚ·zQÁŠCQÿÍ+Ÿõ?[¬q­bÂõ»uL}g•[OùÂ4¯=@”«+tŽeô°5ï:†äÅ^Yë†ÊsšI[ñ.
Ö;«XE¯|[í¡¢x¯|–NçÚPýZ›7oŠä•-±|…Xó«ïOxµgÞg«$yØs•ÅHB{Ê…Î?ëºn«Ÿ‘Å“HbÙûïÝª_ãE¯ly/ÖýRœlbxØÊuªC¹Oc`y
ùò)³®«.Å=„~ÑqªÍj×Ò|¯«$ÅsÇ¿ÉË±úäš‹òÊW‰õ­iGÔï°r¤gÉ³T$ÖÜf–ö6	ë»£6(íž­I¶žá˜\#°ú™YÚ‡$t½¬}gŠÜg
-Z:7Å8fÍm"iÍg–½u-[Ï®Ú½óÌ@m½Õ)¾W¾ÙÈg	{Y÷)…x4ÃÃ~{ìØcÕí*MÒz	±ÐúˆÐ¹¨y
ÔQŽ#­Ò:Dooæ4ÊÚŸn„‡m9$åD±Pœ¥U®|`<lh&y<l¡y³PyùÞú‰¶Õ‘båvJš_»èìt]<ì])Úë±ÚU)ÍFayØY×¦6“;®»>Š_X´‡­~T¨~Íye«
h/‘PZ{«š×Ã>æÈ#£ÜkN }«½Õ9{eóPt»vÿ-Ìv-­ï¡œ¡ò[V,æ•MË¼)oœ:†b¼²Ub}kÚ•m×}º>×\t±W´pofy}OÜuw”†Ró»Ö\‰rá{å
E’‡Ýû´ž^ñÒQ´‡-”s=tyYb‘‹à£•Ë¦‡ÎM{8xeÓbíQše-Œåa§}nË‚rt[ïO£ò"äAs]¡soÿòÑ»» uKÚÇ[9A­ö!²ö§áa+ž2i]‡öK±~gŒy×¢Á
Ã†f’×ÃV?ÅšWóÖÆð°g¾öÚ¡:bû5Vì‰Úi¯¬ÀÃÞ•¢½íãg]o=óeÁò°Ç<Vž¼Â±îeÑvRü©WVh
kÏ:kÍzÈëa«¿*{|¬g4tœ×FŒˆv-êe`ÿkƒ÷Z9m½²yˆõ.XhÎ4T¿”¦]Ó<‹ÕÏ~ùÉ'£PWõ½Ð<OÍ±¤!Ö·¦]ÉÛN‰µ“|íù–ªXßÏ´~b’‡æ}*ð°•ã
ÂºfÍ|ö’æM’âà²bí‰¦¾úi°<lù­„åçÇúÞ5‚Pî™V:¨<ìøh^ù½ñãO¶ò9ÅRÖ÷³Q¶Õ'Sü½Uæ©{î5ç­2ešI^[Xq]Þ¾‡1<lå_
Õ¡5×^Ù,X1‡iÛ@<ì])ÚëIZŸS¦±i™=lÇŽ?ú˜Î1«ö¼×ZYy€z”»lí‡séXºhœ˜õ^ía'ÍkxeEÒzŒ˜1Gy½©³g
•÷r²eÅŠ¿Ÿ?õÍ¦‚*÷kèÜÇ\$E·kZËn=ƒiÚ5­ë´ÊŸÝót¯xjncÒÞƒXßšVãÐƒîì/ÜxùíýÊ°áû+_ä‚·¦^¢|°ÊY®~u}Ó¶E2kâk½Bç+HÅ
t‡Ž£øl¯¬ÀÃÎNgãÙkfá¤ñ1ó[uøæqÒæ°nÛšU¬¾W¶,üfýšºž¿Æ®^9hmð°ã¢ñ…r…XmcLeíO7ÊÃV–ÐqÔ²ÊX±@;ÚÖ¿[eÊ64“¶rvXñ
IûÄð°­\l±û‚ÏôDÒž+ö®íõXÏµT¦±iY<lÍŸß~MÿÎ=n6,œÿlŒ¼eYïeÑvÞwpÄà‚ûYi<3?M^ÛÚ«%vnuk?„2¬ÃU.žÐ¹)>¸HÊÞ®Y¹HôÇÊ…
SE~eèXÓÇ;É++b}kÊŒÚ¤Ñ<º—æu½¬=Œ²(m;Q$–G{~Ks‡ÖuH³(v}„|?éÃ)Súze‹ÂÊ¦<_^Ù¬Xû:?ûàC©<üvð°­<R¬½AµwˆWZ<ìxh, y
«=èªÏ7oüó–åK§ªß£¾ºÚn­oÑ¼½¾éŠ:ð€¢õ§åa[íúì×_?Ë*c=‡Ÿulø½U¦LàaC3‰áakoj­œ>y=lÕ*/¥ÍS–.»Ü<Všõƒyý³²ËWˆõm²Ð=±
®w™Æ¦Íô°+©=
×ÍŸ÷„•##²ÞË¢=ì¤V¯¬x÷å—Ž•[˜ÇÃNòd¥X÷+ê3†Î­×É§xEsQt»&¬ëž¦]›ðôÓ†ÊþfÃÚO½²Y±Ö¬ž3û>¯¬ˆõ­)z5·ÿÙ¦
?X÷2Ò´Ec­ÍûøãÉ›¤dDórÖuH3_…‡]V‰´ïvÈ?Sß£-Ë—¾:–rzeE;xØ1òE•kqÌØ}(xØqÐ»þÅæM±ÚIþ¶üê»o¼©rø¡‡zUþ±úÓÍö°
“â°­ç0ö7»(ð°¡™Äò°å'[ëµ6T&¯‡­µ+¡òRÚ}éÓ’äA§‰÷ÁÃÞ•Xß¦$¬ë]¦±i3<lÅ[»÷¾Ý¶mZÿub(ë½,ÚÃNŠaõÊ
=ãEž_•<vRlT£ûzÔÃÂiS/[Ñï~ÙÛ5ËçQ,šW6+V>
ù?^Yë[SN=þ„ÊªfÝcÝ¿XJÓNµ>î[oóŠfFknCÇÒ÷Ä+‹‡]‹Þžveè8Ílû×ÌýàÐ9±¯å{êß½²¢<l+ä•-Ö³ÜŠï?¤;V»+i}¾ÖöÖ»F¬
þt£<l+—HR>lr‰
ÔO,[Xë·ÕŽ)ßHWòzØIùïbïžä¥ùæáaïJ¬oSÖõ.Sß´Ñ¶æš6-Y8Æº61•õ^–ÝÃ¶Æ­±cÏòxØIíL£ë~åÁz¯Š~÷ËÞ®Yû:Ä~†Å«ÃŸ>
Ïµˆõ­)Z+[ô>GU¥i'Š¦‘çfí·æŠ‡]Ö:—V.Ÿé•-ŠzÖq×‹5˜v/Ñvð°[Ý{©b=Ë§p¢WZ<ìühMYèþÒüM{å!VºQ¶òV…Ž“”cŠ=ê'¦‡­ý
­˜˜P|B‘¶W6+Iþ—rAyàaïJ¬oSÖõ.ÓØ´‘¶ÖXã}K;ÞÅíÊ[¶röÌ;Õ×Ÿ<räaÚ/oð€[;÷Ó>pÊcã^–ÝÃÖø4T6ë³ï‘ÇÃÖžRÖol”bÝ¯<àa‡±®‹þÝ+
›ËãH›·$Ö·¦Ù(oˆuÏBRó§ëVo\¿àÃá§½u¹b´¯£öw¼õª«;ßq­œÄiÚ‰"QÌ•õÛŠ87«½Ô¼W»>W:NÌv.+V~¤uÜõbùži¿}íàa·úø*Öz!¼Ì
ö;?ÚÛ$t %å_ÍK¬þt#<ì¤½Žo»ú³\RžÚØùŠ šIL[Èã
Õ§ýá”û£–¼vÒ»{ÿ2<ìÄòb}›’°®w™Æ¦ò°µ.AÞ‘uMª’_­œ¹ý.è[ÙwßtkbÝË²{ØëÌ{*T6¶ÿ—ÇÃ¾æ¢‹Íß¨|tÐÄgžiz"I<ì0ÖuI»>xØ•Š¼g
ë~Uµ£¯õ/ŠëÔÞ'öèáUù_äi'Š¤,¶< ¯,v}Xk.µ–Ú+[–‡]D6vëïEVÅº—§Ÿx²WZ<ìülY±tZènX8„W6 ±úÓð°•k
t)É‹>©Ç±f9íÁ^vð°¡™Äö°å[{vo\¼`Tíßæõ°“â°c?È%²“X¾B¬oSz6òÐ({Þ”7Î·®‡´fÞÕ»ß]¬{YvÛºWÚßÊ+›…<Þ”ââóüÆv¡Y9.c½IX÷
7Ío³r‰ÄzÇjéî¹D4¦Q5ë~©ŸôäÝ÷ì&µò´Ecýæ{oºÙ+škýnšo(v}X±«E´#i±|áÅï¾}µW6+y÷l»]r‰X÷²ßHv~´WcèŽ~äÑ½¼²iˆÕŸn
„‡=ô×wÏU9U¼²;®ã¿…Ê¾?áÕž^Ùfƒ‡
Í$¶‡-ž2tÏPRmÌr^»ïYg™ãØ¹Ì’ò>iÍ{Wb}›’°®w™ú¦ð°:üÓKÙñïÿ¡5ê^IÄº—e÷°çO}óâPÙ´{Ô¥%7¥vÏúûîã.­o¬ØªÐ¾1‰õ.$a
Ýß4íš5^W<W6+æžŽ)ë[Ó,¬¶]Ò|~Þ=;ò´Ec­©Õ8/6Vþ:í9ç•ÅÃ®¥Óß¹6tœ"òê§eí¼9CBç´böÌA^Ù¬äÝ£<ìƒØÝzw¼²eÂš×mÅ÷Òƒ‡ëý
å_ÆêO7ÂÃ^6cúM¡chÏK¯¬•§2íšÅf‚‡
Í¤[ã‚m×}ª·vÏ—¼¶¼¹Pyé¢³ÏöŠg")oÉž{íéÇÃîB¬oSÖõ.Sß´öø§†™ëÙ‡Ý{Ÿ;Î÷ˆu/Ëîa¿ñü¨#Beó´•!òxSò©­ßØúæ3^JèäÝcÆ#Ö
»„uÓ´kŸ}öàPÙ"úÊy}žXßšf õhÊk:å[HÓgðÈÓN­Ü*^Ù,è:‡Ž#)¯’v}hì:ÎœÉ“ÎñÊE£æ˜…•·$íïo[9^­wGc³VAyB¿Á+­
v>4o½ÿ±ú
±úÓE{ØwY1éibÄ^úÈ^ÖµL“«¶™àaC3)ÂÃÜz›Ù¾ÝuÃ“×ÃV¼Ú,¯l¬6Fë½²{Wb}›’°®w™Æ¦ð°­ñæÇ«W.ðÊ¦!Ö½,»‡Ô¦i?ÛXäõ¦´v-
T¾ˆÈ²b­s¾ãºë½¢¹ˆõ.$a=ƒiÚ5«¿©uõæ´°W:–æ¼²"Ö·¦$å¥¿ªï…^ñTäm'Š¤céâWBç;¯CŸ3Î0¯sšõqxØõaí
ýÔ=÷FíwgÁÊ]”e<‘]ÏÐ±F><d¯¬h;iÍWÒfeCýà®ç¯q¥WZ<ìüXë{Ó¬JC¬þtÑöëÏ>wH¨~ùÚiÖ¿&­•þhåòÚ/²¬àaC3)ÊÃÖ;g±~³~ÍGúï1
<ìPÿCZðÖÔK¼²Y°Ö›i
ˆWVàaïJ¬oSÖõ.ÓØ´¶5ÞÔw×+›†X÷²ìvR®éê¼\òzSÖº4­uóÊ¶º¡kðâ£ñÞ«±Þ…$¬g0M»–”«ëžËyPœ±ò…Ž“Ö§‰õ­i£†>Ì§öÅæM‰5É
ÛN‰•Gæ“µ«Wze³ ±rè8Š÷Ê
<ììqØaæ5ÓœB³Ð˜Ù:/s,’Ö¦]çÓ¶Þ+†è—Æç•/¡9ÿ"Ö%A¹ÀÃÎ¼šÐ5Œ1ÖèqÔQ•Ž¥‹Æ…êÏÚŸ.ÒÃV~B+{þ›SR,hOªPRÌõk=O8©+~Màa
C3)ÊÃ·_Óßìëi/£öÜ7&Ÿªã·Ö}æ•Í‚ÕV§í«%íYë•-±|…²{=¢¶5¿k­X÷²ì¶¼'+÷jŒ>[•¼ÞÔÔÑ£•×¾!ibÚk¯­7÷Êæ!Ö»„õ§i
×ä;XûÇL|æ™ƒ¼òiIÊ½uÂ1ÇxÅ;±¾5j3½²ÍÆÊeS›K-/yÛ‰"±Æ5ßníøÏ4ÏiZ”—&tœ´ß<ìì<2èŽàwZíJìµYÐZ(=_¡sK³ž;-ª+tÍÙ¥ý¾¶ƒ‡-¬œ*[W­
˜ë•-zfBç¿~Á¼§¼²ÐÚàaçGûÙ‡®¡æ¶êÍ'¤q–r\ZýT)kº([}„O×­^ª[ãî´}]¡1‹õýÒ·E}ê<(®D}üê¼£÷÷iÁÃ†fR¤‡-´S¨~åKTÜWè¿eñ°oéw•9
QÜd”È:FÚ¸‹$ÿ,f‚¢ÁÃŽK#<lë:ÄZïë^–ÝÃ–g¢yøX±^y½)«]•Æ>þxºAv‹cåê‹õ,YÄz’°îmÚvM{Ì„ÊÇŒ‘]ôö´+CÇÐ>^Ù*ÖSã&¯l³±öÝ¼
lÉD¯lZò¶E’ä'*/›W>
ò­œãÊ+á•xØÙ‘¿:†òß{e‹FÞièÜb¶Vn¶,ïv»xØVþ©¼@ßBç®½½²ÐÚàaçgø}÷›ûº~¼zÕ¢öÏ>|ãåW˜këk•µ?m-µÞBÞq=(žÙZã,Íž8ñL¯Ž
®,}ïÝë­úäc×»ÕÝ7ÞTùí†u_ÔÖç•I64“¢=l«
©Ÿú÷,¶æ–¬ùº…ÓÞÊ7qõÖÞT:Ï´q'I{­5sýeVð°ãÒÛçÇÊ]ë^¶‚‡­Øu«Žù‹ãeÝ¯,Þ”úf¡:G^¦ç¿HBk„5×+—CˆXïBÖó—ö¾p«YGŒýct
Ö3<}ÜË'xå«(·l¨Ž˜^{Q¼=vì±¡sW5¯lZÊìa+'¶Ú¦ï òYÏ±Ö½¥;ÊEdÍMì­W¼p¬ý«uÎiŸ‰$N?ñdó÷gÉSÕ.vÒúÒVˆe¶žå‚òÊBkƒ‡Í
U[y4$í6ú‘G÷Jò²?ôÐÊÓ÷Þ]kÔ¬zº*kÚ[V¥¹O§ò—x¨Í›ñê+§Zy”$Åjh¿é¬è:Ykþ«R~yý^êÄ=*/=ñÄ>ês†êI,œ<lh&E{ØbÝüyO„Žaå8È
âa‹ySÞ8ßª?o,öe}Î5ûhióˆT±ÚzÍezeËv\áa[sÅK¦¿“;[ßiíÓã^¶‚‡­93k?'m5ß]êolX8ÿYëü¤,Þ”â­­z”/{=Rm=•
ùAYÛÄ"±ò‚çý&$Ñ íšÞYkßOõå½¾±‡r
†êÖû¡}ÀÒbå4Ï²f¿YXþ»®AŒuW7_ÙÏœ»ÏÒNIÒ¸ñ™ÌÕçÑXÏj‡³ÄÃâa§GíÂ¦%Ç„êÿ¬cÃïÓÆs‰ÖBYãŠ±ØVºüŒ,1‡íâak®JŠ™ÃEíæÊÙ3ïôþ.
kçÍ:ïs¹Pnð°ã`å.¬•ú=òR7.^0JyWÌz ¼Øm×í•
)kÚó°k¥ó\õÁ¬{äSkÏ(å¢~oüø“¿3­Ÿå×Jß‚sõ+ï”L.8óÌÄyªv|ÓÿeõœÙƒ¢s”tÎj#å¡{å½óH64“FxØI±!eõ°µÿ¼ÕoUÌÏ!×—æSå”W;T
¯Ú©¬¹¬uŽ­’;NàaÇ¥¶5îÒw2ÏµÐ‹®ë“òÜËVð°Å„§Ÿ>ÐªGþšúiÇóòSw<¬ö«VY¼)yíIóùê£Õ'`qiŸ>•×¬ZšõZÉ´1cz„~{Ì¼Ï]i•vmòÈ‘‡
Yõ¨÷Ê[Üyý
æùeÍ5 ˜G«®ç‡-uœÜU}/4ÏýçGÕ—(²²s=—5GPU–v¢HÔ*g\è§ßû´ž^Aä¥&í¤}XÒ‚‡«ï'ÅÊ­‡²Î3O¿JmŽUïÜÉ“ÏõÊ×ÒNöõ—^f¾CZ÷u
æ)§zU¸híb:U§÷·i±ö†PNý'hoð°ã x˜¤y¬z¥¶ÃÚ:k:‹‡Gj;²ô?,4‡–”<†¼sH64“FxØB>÷NU•ÕÃV,¶ôÉÚÕ«•5ò¯“Ö¶dY]åý
¯ö´ê‹¯P$xØqi„‡=bðfÎ2¥²Æäž|ìqñ0Þ¼TÖ{Ù*¶Æ7Þ<÷g›6ü w¥ÿÅ—TŽ>âˆÊ¾ûîÛ¹fNžõ k¯«¨o–fN¿VY½©!™¿WÚqüÍgœt²WM"ŠUlE½×
²H¬}‹œ3l•v-)ŽU’ÇíÕÑ•[¯ºÚÌ!¢¾½<é,ü²‡j0^\~FÖ9äF"ÄÚÿU×BwTŸÖ·'Ý³ª²¶Ebíÿ'}±yÓ_²ú[ºZ?dÕ¹yÙâ
^µt[ãáz½]#åå³®“â<Êäùsä‘f;¤>K=9EUÆêïèÚf}VÚÉÃÎa=zÏµö½”gQïtm}^™´4£
å;êOZ{Ö#)Ô¿‹ÕŸn„‡­þžæób¡±™•/.¯t®ÞñÓ‚‡
Í¤Q¶ögMk(Õãawæúež>$­YIÛR,YR£b»ëé³'Åf)®û¹‡Þ#i÷¡ÜÙ—~öÁ‡²™ŽÁÃŽK#<ìÎü´
¹»äejî8)vXÿíê/êÜs"í{œõ^¶Š‡-.ìÝ[íÙx×
¦êñ¦’ö‘t/µ¶/Ë¾&ò"åqZ9·½òB1«¡gU^DQþg+µkIy±%Í;yøá^5×YsºIsZõæ˜Ñ³iÕ©¼Ø^^y
ŠÇ?ö¨£ÿ®’â¥Õvèšx×Wó_Z×‘eÍm=íD‘$ù[òÿßšfÝŠîõG+—M·êÒ7.K®Ñ]<ìªä*^âÀü-/ÕU¿@ï™UŸÞyõÊ†ò€&]‡9“'“&§þ&É¿—êÉ‹Ón
¶æ
¬9»ês¢µøŠðÐØJóüÊ­ú¦xåÓ¢ØùÐ¹*ÖÈ+­v\äÁXycÓJ1µsŒ±úÓÖØRqŠÊiâ—'õK”26jµn/Mn‘4Ò˜M±1sñáaC3i”‡-’b¥kU‡-.>ç×WÒ
»r¨ß­üýŠÔÿÕü™|™¤þº¤øåF©
¼ØËm›Ö§q»ò/iì*o@}?µÙÕþ\V¿8&xØqi„‡-”'+é¹“”_ký‚‡Ï~ýõ³ô÷ÒÜ7&Ÿ§˜;úÿÓ+Ÿ÷^¶’‡-äx×
«`å/¯Ç›RŒ½—g»*ÝÅ×+×†æÓºm`g¥ú”Êy§v;Úæí^=Þ95’-Ë—¾:Ç¢ö
hµvÍÇW%_P÷]Ïúy½zu~/%}åk_æ$ïBÒû›Æ£‘´'´¤oâ–ËÞQ;¥gTÏ®Ú-¥>ß¼ñÏÕ¿kÆ¾ÉÊq–4w(iŽåãÕ+(¶¸ÚæJÊõóéºÕ“ÊZª§(­iS¾ä¤s
ÖºyúòL5Ô3&_9Š´×’ågÕªžµlÝÍÃ®JÏÝæåK&é½Q_C×Níý“wß³›úšûübó¦¿zõäÉ‹S$êk+WhÒ¹ËÐ{§õJš©¶múßú7ý7+ž»*Íóyç¢Ý<l¡u8ÞøK
ÒLmœ¼]g=wÚÓMcõ¼kîGZ¬6IñÙÐþàaÇGí®ÆiÆ
µRNJÝ®Þj¬þ´5¶Ôž®úïòƒ4öIÓ~u=o};óî!ã¡¹T}—=*$}ÇõïwA_wÈzÀÃ†fÒH[±oiæ“êõ°…úCÞX§^ÅÈudíS•EYýâ˜àaÇ¥Q¶r¼zÕ"ïÙÊ*…
­Ü¤Yïe«yØBc¯¬ýžäu©¢>†µ~¬^oJýBo<SÞù4+‡i–}ß²Ðjíšæ8’rç•òxÕ»EíÅæÇS3<l!ŸÆ;·z¤ø!k­X½íD‘(gˆr
x¿«^).Á;‡ÝÕÃŽ!y¼EŒ‰c¡ïÞ–K§y¿£^i¾?k¶*íèaÍyÇè%É;‡4(ßl¨nµQõÎ·Bk‡]Š–£¹PÅåÕÎK©}Ðº²µÎydÊ¨QGfYZ4Š%×<®ÖÐÉ/®
ƒ¾ÚÒñïšƒS.H­ëoÆ÷OsüòÍåÅh\§óÑ¹JêjP{Bh.AýÞ¢Û3<lh&ô°…µÏV­òxØâ¾›o1óáÕ«˜¹Ž¼=™<eõ‹c‚‡—FyØâ¨Ãpãá²è7ë×||ÑÙgG»—­èa
]]ïzYRŸãÔãÿ;½¾åakÜU/êk)N5m˜<òÎ¥‘È?µ~sÖ¼iˆõ.$a]÷zÛ5ù0^Î™z¤õyýk¡¹okmBZ5ËÃiÖÀ¤•že½Ç—Äžë*ùØyïcW)^Ay#¼c[àa×
'åâhÆø=+ò±Ó®CÊ"­“È³»]=l!o'MÞþz¤÷Ý;~¬~wÖ½9¡uÁÃn,õä_-ÚÏÂàaC3i´‡­½­}šªÊëa­ÔÝ¤ã¤•Ö\¦Éã–õýµnÖ;®¥¬~qLð°ãÒH[
(o¡æm½g,IòQôTû$±îe«zØB^ˆrn¤msw­µkZßÕ+‡@Œ¾µòAÄÈÿÖUÊC¢g"Æ9Æfã¢#Cç¬ÜV^Ù¬Äz’°îAÞvM9bì…®öAß·zcCÈÇÎÓn5ÓÃŠÎ»>
Lq6µ1K­æaÍiÈÿó~k)–K{ææ¡»xØŠÁèº7^=Rû 85ï<Ê„úÛÊèåõI#Õ!ï+¯ßÎ¶Ð{®yÑ¼m^Uzî4xüÑÇx‡vÑ{mÅŠç‰€Ö
?xØÐLíaç’ú+1<l¡ñ‰Öú+gQÒñ,ÉKÒz˜¼ýUÅ+Ô3®(Â{Iv\íayKò˜Òäõ©•þ^kºî]ë^¶²‡]‹òë+Ï£â%¯¦±œ®›ò=Ê'Tîµ¤˜+†)æ>„òÎ•
w?ë3P+å¼Óš5o?Ðfs÷7ï»~»æTcë]HÂº1Ú5å V>üzüùš—©w¿µ[¯?ûÜ!Ys-ÊS/Ã¸Tï}=>¼ö
õCZÑÃ®ró•ýêêûHš/Ós üXyé.ö¦ÅGë¿ëTŒ¬ëqô÷úŽÅð›…Ö:io™¬¿ý—ßÿÚÛ1Öïow»Š¾ÊÅZÏÜ¨î“bè5g’'æ½+šÏOû5Öƒò‡
<lh&êÃ+f¹«Š‡ ECÇ,êØê—¨ï.ÿUq’Öø\ùG”OHóýÚK¨Q(¶jòóÏ®¼¤¯Ê;×8]qWŠ—×¤½säÅÈch&ÊGºgÇu´WtÔ'
Õs}¿õ|•ÉoÓucŒ5øÚ'BóIòBã:ý›ö
ÕØUŠå÷Åº—ÊEªG{£ÅÀjë¤2Êƒ¤1tã+µÅšKÓ¸NíÚyDµÇÖÿ¯˜Gµò¬•ãWq­EœOè<wœÿ·¡6ìãÇWâ½I4¢]Ó».ï@ßå3];Iù•×Psnú6
iþGßBÍÉãøxÍª¥z>%=¿ÚÏQsF:'Åé–m «æ|”K¸k®ÅÚ÷MyXäÓ&§õL…žƒ˜~OÑœ~âÉs}ú½_méø×ÐõPÛ§>‘Úž;¯¿!ês.ñ>5
=ë¡ß¢~[-zWõ~(Ÿ¦5'¤ïúŸz>¢”[7ÖÅÁX5ô‘=µà³Ž
´Ú6ý7ÍÉé{§21QŸ&tŸÔjGô.)cm?CíŸÞmÍ}ê«¯©¾¨Æ_jßc_s¡÷ãóÍ~ÝoÝg¯<´xØ
ùÁÃh<‡|pgÌŠúú¿úÿº3‡zhç» 9$ýï²y?ÝÍi„ú1ãx»#ÖÞŽÊkÕJž_³Ð\‡ÖT½­ÅˆÛÝQžÅSŽ;¾óšêúáÛ´pÀ.Þ¼¼ÖV™+keô.ë›_{Ý»
êç(¾ºúÛõ¿éû´'/?ùä¾¡~€|mîy÷ ?xØ   p× 7ûËÞï¯,ØÈ£±öaÐ>Ã^y   hMãnõ´ÖÀ+í6@~ð°
`Ý‡sõ†þú¯(8¼2løþ¡k«ÜR1s  @yxoüø“Cßí?ÂZ¬î6@~ð°  º7çõêU±ò’·âþbeCù0¶m\÷e¨¿¥¼Ï^y
h-”¯ÉÚé¹‡ÞÃ+í‡åakoOåkO#bK yç¥±ÇyÏ~UŸmZÿ=6  @÷Dq@ÚÓ(ÔØ°pþ¯<¤ãÞ›nÆH÷ÝLº  €vAûI~´rùŒÐ7_ûŒo¿{byØY¤}q½ã
´KgL¿Á{ö=áa  ”“Ž%‹^š<räaÚ3Úoëªs­¾À•ç_àUØ¼|É¤ÐuV®LrŠ   ´Êumõ­ú_|‰WÚ<l€0xØ
í‹ò(V¿×Û6®ÿzþ›S.2pPå´NôŠv¢Ü!s&O:ÇZã*)?¶Wd£s]ñ–Íÿ't½óN\  @ksaïÞÊÏö¡oýÂio]î•‡ö 6
@ûRëawÕW[:þUñ¾ëæÏ{bé{ï^?kâk½fN˜pºþ÷æe‹'|±yÓ_½>€ê'.¸^|ô±½­ë®Øz¯<
”“C>¨²mãúoCßøÏ:6ü~¿ýöõª€6æ‰»îÞÍËõë‰|ØÐŽdÉ‡méòsÏó   M ÉÃÎ«¯¶tüoÅA1(Özã¢#C×þÛ­ÿyçõ7xU   @ÉÐþÍK¿b}ß¯¾ð"¯
€¶¢(ûóŽ ê{ÖYÞá!'G~„y•k„9  €ÖAóÓ+f½?Ðê_½7~üÉ^      íFl[ñAÊÑxÀþû{‡†Hh¿L+_æ›7ýåÌSNõª   €0oÊç[},­½b¿
èŽ¼2løþ/•´'c)7¶övìuò)Þ!¡ ž2tÏ„{ó—Þ§õôª   €&!ozöë¯Ÿe}Ë»aÝgÄ
@wG¹Ï:õ´Êƒ*ÓÆŒé±|æŒÚÏñÓµ«×~¾yãŸk¥q”öt\2ýk´/ú¥}úTˆj>c|Ÿ¯¾rjHŸ}ö`¯<   4õÁ¬o¸tú‰¤
hûì±w¥×AÇ!„B!„B!„B¥RÏzàa#„B!„B!„*¥ð°B!„B!„B•UxØ!„B!„B!„Ê*<l„B!„B!„Be6B!„B!„B
¡²
!„B!„B!„PY…‡B!„B!„B¨¬ÂÃF!„B!„B!TVáa#„B!„B!„*«ð°B!„B!„B•UxØ!„B!„B!„Ê*<l„B!„B
!„Be6B!„B!„B¡²
!„B!„B!„PY…‡B!„B!„B¨¬ÂÃF!„B!„B!TVáa#„B!„B!„*«ð°B!„B!„B•UxØ!„B!„B!„Ê*<ìÖÑyGœR¹ê
Äs*×÷<¿óÿžÔ©n„B!„B!„jeáa—K½9¾rçyý*S¶ïšW§^ðùÌOýqÙú­?®ÙòoZ·ùuÕOk6oÿnÞª©ë_›vñK¿~pwùÜÞ1B!„B!„B¨U„
‡Ý|]rÜ¯*“xjŸmïÎ¼}UÇ÷!¯:­~Zµõ'yßWžÔÛ=.B!„B¨½ué±gVž¹áÎÊÛCŸ9`þsãŽ[õòg¯;©×ÃÇõÖÐû¹}ðîƒú\QésØIn]!„BÍvóµ
}í–¿yÞtVÉËžþèsyÇF!„Bµ—Î>ìÄÎ™ßÍ]6ÁZÏÙU;Æ$¬ß
·n„B¡f»ùòú“y´õÍÙˆ©@!„B¨{è¡Ën¨üqñºUÞ8!¤á×þÚ­!„B¨ÂÃn¾¼¾d^}:mî]Ê³íB•Y“î{|/¯½k¤>ž:óVïœB¡FêåACvÏ³Æ
!„Bevó•ÔT~ì/g.¾þõ·/›7b\å­“V¼<¹÷çï}8ä§•›~çõE¥ÙO9Â;„*³ð°B![Oö˜;G!6B!„Ê*<ìæ«kßñ‡…«çÌ1ö˜ç\î–U|õÓ×
ª|óÁâÑIýÑík¶þõª“ÎqëC¡² !„
ëâcN¯l_¾ñsïÛõÓšÍÛ\º~ãï­YðÇeë·võ¼ñ°B!TVáa7_ê/jå®|éuîß[Ò¾âI{¶¬›ðÖE^!TVáa#„Ba-yñµžÖ÷ê§•›¾Q|Ìí½/ý‡rÚûQq3“
îbïŽÉÓ¯¹·ï5î±B!„š!<ìæë“·fÝ~ó¯.tÿ.f }DRÿÕ+Be6B!ô’ýÓªŽ
}«¾³tÜ%ÇýÊ­!„B¨ìÂÃn/)·HÒ>äwõ½Ú­!„Ê¨×ßQùjöâç)­‘±ÚÓÍ“g\ë3B!T´ô}}§~^½ùOäD!„P»»ý´`äø,Ïå¥;ÚÝ+Bè¸ŠöÏ
µÚR­kéJ·„B¨hiß÷Ð·jÃÄ·/õÊ"„BµŠð°ÛOÏÝt÷n–ïòÞc£ñÊ#„Pw—bÚ¬ý´ÿÕÃ—ßèÖB5B_Ï^42ô½zæ¦»Ü²!„B­¢îèa+gÜ >WTÆß9d
Å,kÿ’oç,y©º?÷O+7ý®*íÛýýü5³¶½7ï¡Õã§œ«ýNbå®.J÷_|mp=¡4ëÉÑ‡{åB¨;kÀ™W´þÚjG§<8l_¯„B¨QúaáúÅ¡ïë…B!ÔNê.ö£WÞZ‘ý
Ý¼US·¯ÙúWË›H«?,^»L1ÍçqŠ{ìFkð¥×™ö[CžÞÏ+BÝU}>­¢öÝjCY—B¨l²ösôÊ!„Bµ’º‹‡ýÉÛÜéùÒuiÅÆ/^4¤T9¦_¸í>3—ˆòŒxåB¨;
J{âjÍÕ~~óÁ’1ZÇãÕƒB5R?­Ýò?º~³ôo^9„B¡Vv­;©—wÒ’_ëi'{“#„PXIûáþ¸tÓÇWœp–[G=ºñô*“xjŸM“Þí§¼V\¼nU5ŸÕö›¾
ú~ÁªòÖu~_uk¥}ô>‡TyöÆ{*+^žÜû‹óÓúøÚü^?,\=çó÷>¢ïÜ37ÜÙv×ââcN¯Œ¹}ðîZ7öåÌ…Ãµ&`—gA¹ÍÞ;XÏ‚Ö—iÞÅ«ÙÒõÓuœÿÜ¸ãt]õ®
)6¡zÍõ.ê>è~(^A÷Ç«³xÎå•ÙO9¢óœw<ÿõŒ,ß¸í»yË')GÞ„»Ù³Ñç[mËª9újÛ2]×j[¦ë­¶¬]žßó:µòÂ€ûvKj·ô»Õn
ë?¨v+ôÝRl¶W®ŒºôØ3+z>ô,-yaÂ©M™qƒÞÃ¯f/~^Ï»r?~3wé+úÿ·¾9{À²'ž¡_Ê¥Ø.ÏB!„ÂÂÃŽ'õM½ó(Zê»ýaÑ†u¡óÓ¿{åB¨;J¾¡µ‡ãÏk¶ü
ùžú»ud‘<Œ×ï}|/å·ò¾-]µ}UÇ÷³çõÔåƒÕú,Uý~ÑÚ%Iå´'ÄûOŒ:ô·ïÌ¹§Ö?«õjt=½ãw­S¾×O«¶þäýþZý´ªã‡5¯N½àš“[{~V{t|òÖ¬ÛC±”‰ÏÂŠM_
éY¸ì¸^î1ÒhÜïz&ä•&•{è²:ç€>Ÿ¹à©Zß½Ó·œ¿òíO§Í½Kyæ½ã7Jº^óý;ÎÏ»Æ»\ï5[ÿúé´Ùƒî<¯Ÿ{Œ4Ò;ºÞR×÷[m†<=½sÞyV¥¶K¿S9’¼s©W:
/ù‡ºÏÞùüÃõÜÑ–É£Œõü6ZÍj·BÏMè8ú¦YÏWHÞq‹’öHž7b\};4ã]¿$ý¼zóåy«MòŽ‹B¡ÖöÎ1‰ÆÝc©O©þþÃÇ¥xŠõ¯M»X}*Å’xý&õ7àK
‘Òž“Öù)îÅ+BÝM·÷¾´"¯Çj;µÿ¯WG=}Ý ÊK×wxßOÚw2Ïþ’òáBõZ±{ŠüæƒÅ£½ó’·ê_ÒžúÖn_»åï^IÒw\jñEê’ã~UÙ<yÆµÖüIZÉC›þ
èsåAœtßã{…êW®«k=õááû%å¯Õðkí¿héú¼=ô™²zŽ!m}óý›uÿ¼c&éÊ“z›û—è¿Uÿî¥_?¸{ž6Cû•ÿúœ+ÝóÉ*­™Ès^Uý¼ºãòç½ã•EŠ»V£
Ýš;bì1YÛ­¤ç&¼ã%k?Ê¼RLüu§]à!„B­£îèakì¢~Í¬'G®1|Ú1ßU'žÓ'
ßÀê/i¤WOQº¶çyëÜ4>È;ÖB¡v“ÚÅ—®ßhµé1××È§ïá»³JhVDJëaßzÖ%­ÙöÎ£Vi<ìë{ž_Ñü±WW}7oÅµÞ_™uoßk*Û—oø÷›²HsîybnÓzØ
Êã’fn¿VÍö°u]Oîgm_¾ñsÝGïØ–<[ùß”;Ç;4úiå–Ö|wNi¤œ?ë^}ëBï˜Y¥˜æ´}òfé–^—Tþ°dÝï·d‘æ³¬«ÁÃN/‹4oìB!„ZCÝÅÃÞ0ñÝ
ËµþSë›Õ÷öþ>IÊ÷÷Ã¢5‹¬þ’ò±yuÄ–Æfÿ¼põlëœÞ}ô¹ƒ¼:B¨;I^É×³´ÚMÍuÆòSôÝQžo¼]¯”×#ë¹z¶êSÎÝík·üÍ;~Wy¶òJè8^=õH¾°üqï÷7S
CûÝ’ûŸGòñëõ±=[õjÎÄ;‡šéaë¼u]¼s¬GººŸÞ9„”äEN¸÷Ñ=c¿#Š™ÏÛÖµ,²-S|»wÍÒç^YÑ\€÷ê‘r8¥õ±ñ°³Iñîõ¾£!„*—º‹‡[ão#o¥
rSzåcÊ›ýÓ‡+ßª'F!„ÚYÊaaµ›Ú? ^°«ä{žbÁ•»JûÆ)§¾1ÊW=äò›:óf+>Q¹“êÐštï\j•äaË#É{]«$[u{ñÇòÍ¿žµèYåÊU¾åÉÒÿÕ÷U9Ä½
ÜºžÞÏ.­vú÷É¹,Ô¿ÐÊÂ‘NÒo—Þ:b=³ib×7wùÄz¼Ê$[ñÆyòF4ËÃVÿGçŸtnzžô\éúê:W¯y5Ç·7#[ï«w.]•×‹ÔsÒ™ËxUÇÞßVµhÔ+'{çeI
Ï”w-Ÿ¯¼|ÊRÛ–iïLµešñÚ2ÍyçÒhõ?¥rP“tÞòJ«í–r£èR¾µ[iò…+>&Íw'ïscÉ;nQò<låMÿÝÜeÔ&jÇª¿®y™T9]–mþ’õ¨!„Pë»~u¼
1½¨ŸÊY”Ü5;úlZ‹êÕƒBÝIŠq´ÚM­=Ž¹ÿœüëXj¿•o;MµrG+–5*ŸM{zõTezØªÇ·Ãü®¤åaëwÊ_µÊUóZ{^ƒöBû%¶é-*ƒw
-ÝCkßeIÏžöËT¾Ý¤z´LóI^þÚW¦õõÎ§«,[óº7Ö±Ò¨YvÒ\•®ŸöÓÞ|IuÈW|ï±Q‡$å’Ó¼‰wßº*«YÝSrÂÝìyí©çîR—ž-íÉ²ñõw®Hz.G¬¿õÎ
-$­i´ê•9úÖÁ»yuTÏUm™õþêwÆlƒóJó
Š1¯éŽ6S{Îxófj·¼<Úº¿iÎç®¾Wï"«¾×ßñkÉ;nQªõ°um4Ÿ¤<^Êrå‰~n(½w/¸o7o®¸Ñ1F!„Š/<ìúõÌMwûŒ?.Ýô±W6†ß‘4žÒ8åîó¯rëA
¡î¤û.ìo®£‘÷£1¿WGZYß	I¹yÓÄÜuÕàK¯3×³+NÍ+_•åa'éûùkfÉ[P^.yòRõ£+Añ“ò§
yvÿÐ1•×Êª[¹…³~³ç™´¶_^ŸWG#µbì¤^Ö¹*—€b=½:j%ÏÐòõ,½âf·ŽZY¶yÏÖnù»b!uß•#»ö™Ð½Ñs¢9
åºÉ“7º^é]±ü\]7ŸWG­ ûd]/‡NW¥õ°åéÊ‹¿ì¸^nÕß­}P¬ú&ÞóXæ÷â…ÛîÛÍªO{¢gõï%­3±Îó·ïÎ½Ï+ß(éù6ïÍò ¿Q<‰WG­ë7
1—®µWGWYuemSš!­-QüºÖÚxó
žÔæ[ßw™êYŸ‚B¡ò»~im¤ÕGòÊæ‘Æ‡êëYýÕjŸºˆ=èB¨•¥|£òJ­¶3ævÅÊý¸tý–Ðqäù¤‰½¶ôÜMwïfysi÷mËâaËoÏ§'¿ÞôÕ–mþò¦3úºu„¤µV
½º×eÉ¥¥ßgÅ_*ÿBÚ\¸]%?ÌŠ‘ÎºÏtZ[Ç[õògw.›¬˜ù×šsñÊ‡¤ûdí‰¢û›å9NãakNHñ»^]]¥¹8«Î¬þ°â¦­ü?iâ†“¤y˜P½jßÊ×^ó–ß¬ö¥ÞsÜ9
ÏŽCÑw#k»eÝëVð°Ï?2ûüG’”¿Åº1ç¨B!Ôxáa×¯¤±‡W¶)ÆEñoÞzÞoç,y‰ü!!´«¼\®Ê¯éÕ‘Eo}æ€Ðq~¿hÍ‚z×ò×ê7oÏ¹;TÚõÒi<låpU¬¤WW
Í1®‡uœ¼y&”{×ª[~†W¾Ú0ñíKCç'?µž\Êµš5l´'šÅ³IãakþÅË½QÉÛ·~ƒžE¯|’4OdõÅ6Mz·ŸW¾ª¤~¤r/§ÍÍaÉjïäG{ek5ýñ‘‡êÑºŒq­ÛÞ›÷
P¨þ<¹»cI¹­CçVÏ:‡®ÒzJëþg•·êi»Y9›t?½²!„*¯ð°ÃR|œâ^´öõÙï©ho–†9J²r›ÊëHÚïÊ«?«´Îöå·YÇ«ö§u~ybûB¨]eyˆÒ÷WÍŒ
áÅÔJ±µ¡cÅò„Çª_¹WVJò°õ=Ñ~‚1¿'VLú¶éóôÊ¦‘s+ŸÍ+[´4míã¨çÒ+ïI1›–góÙ{óòÊW•äa+fT{Žzu”EÊ_|¶ëˆq
IqèÁë´fËŸÓæJò°³Äs[Rn«þ´qÿj”#ï®ãŽ6Bùb¼òi4´ß-ÁëuAlé·[ëv²Æ²[ÒoÕ¯öÌ+[+ë>wW{éè×N+ò¾!„B¨9ÂÃÞO#zýkÓ.VóŸ–mø
Äê¦•wÌ,úhêû·xÇûÃâµ+bù"!ÔnRoµŸŠwŒ=Î—·:ÖW3ŽðÊf‘Î=tœ49E-[ñ¥ò”¼òYdùí’âe½òi””¯·ÙûÃ½tÇCÁ8qù€1¼JÉŠ•U~‹4ÏƒdyØò0•Ç
Ì+_uæ¾0â¤g>ùÂa^ù4R›aå†yíîGSÅÐ&yØúo^yOIóTz'½òÒWß¬ãóóñÊfQ(¯½ÞzòlÇRR,ÿý_ë–O#ÍYÇ¸¶çynùª¬:bÛZE“?Œq×Ú¯,B
!„Ê«îêaêsEgö‘·ú}yä?‹’Ö¾kŒ¦ØëØñƒ!Ô.zøò+Ö¾wúwýw¯Ž¬ZùÒ”`Œæø;‡ìá•Í"+ŸH_Øò·~ZÕñO^Ù¬RLwðú/ßø¹W6­[kå—å[Ö«­o¾
sè¼¾›·jªW6­WkåHuË½©rRXv«ù>I{©ÆÌµöíœ¥ãBÇødÚì^Y©h[þ¯UÚü=k^yóüPù±ˆ“ÿÅŒEÃBÇIëµ!«×ØÁ+›Všo±ö
T½W¾*ë>wWÛjÊ°.!„Bõ«»yØŠ›øræÂáV_/–¼óÈ"ËÃþ|æ‚§²î…ŽBÝIò«¬XeIñÙ^õè‡…«ç„Ž—66­VŒÔ+ø»?¹·W¶‘¶õûxêÌ[½²Y¤ØÐÐq
bå+©WÖ|ù‚‘ãOðÊf‘ü™ÐqV›ÒÇ++µ‹‡myióì¤ÕÃ^<2tœ´ù¦‹ö°%+‡Ö-xe¥®_*;>ZyúBÇwÇÃQçý²Hû„ÎIë6½²YôõìE#CÇI;"YÏQ;{Ø—
fgLÒÓ× êŒg—ç¯¼ÚÂšßÕóìÕ‹B¡òª»xØŠSþÿÙ{g)ª|ß·TpœÅDQAPTfA'™DEAæIaË<³™a›
ÎâÐú<ÝÐÑ÷žÓÑ§ßyïÆ{âÆ÷<¾»oõ-Ëµò·²*«vVíÏ'â=°×Ê¬¬*¿¹ò·t¯ï£”´ÖúÄÑwïŸÔý
"b5ªó¾ê\ûÎÓ‡ç­¸×ê£µ\×¸ï$Çg]7qV;×gS¶fµ-g†íª —ž<Î0Ä¯Ï¹Òµœ$ÇMÆ5j,¬Æ
ZíãX¿èÃ¾®å„fÐÕ’aû2ÁËjXmã8±ßpïwò¼ª¶ïùIH½“Æš,Žz)ª-cµ«oÎ×&Ì¼Ôj[*}ã£ãÎ·hé{O%Î3ß~Té¶rjÍK¤ç}š‹Hï®h~
_K2lDDÄÊ¶9dØú
®1ËÖïš|Oï=öæZ9U³uüñÅ5î}gñz¾¯q{³‡jùö“/ykØYëG2lDÄøúê7HW“˜×Íåð®½¼u¦•I$©o¾±ï.½ÛZÏreØ÷_{[ÉkagõÕÄÖóë$ç§ŒãÈ—t
Þ¾\WŽ™v¾sß\-¶oþÐõ¯Ínoµ£Þóð}·!50Ê‘aûÆQ‡dØš×ÜÕVÙ®unŠë¯»íZÖ¶és¯³Ö³*ûõ}7IÍe™ÕW/_×«mVßºVb†ýØ-÷d¶NŸ{­ÆÁ'=öˆ
±²mö§+×°~Óœ½gÿã‰¥5ý•Oë7»ro«ß¨{«mÉ°ã©±{¾ó³Æ>xmg³B>ðïÜ‚å2dŒy¹2l_¦/Ý~ŸÙ>ŽQyñã»›íKaÔþôs_†¯1‹V[Y-
¶oül)êRø2¶·žeÖêH{†­:ê¾õ+—!ÏãJaÔ<´IÖT—š“Ý·¬Ðk•¯}%eØº&iÜPÒ¹u®dØˆˆˆ•mµgØŸsßeýy×áºùÏŒk]È}$6"búÔ\e¾÷Œÿ|°á/ªŸiõQŒ
zÏÜº.µiÊ°£ê-hŒ¶Õ>Žvìæ]–>¯Õ¾*+t­æŸ´ÚÆulŸÁEe¢Õak‚o„ÎcG/®e…Ô¤O{†½äÅÉçùÖ¯\6U†­}Å·N…Ü3D9ìÎ¼Ë
½^ùÚWB†ÝXïñÅw–2»ÎJ†ˆˆXÙVs†­÷†õþ¬ïwŒêƒ„Œ·öI†ˆ˜.5ÖÖW{Y÷Çš÷Éê£XWŒy½­u]jÓ”aGeAVÛ¸F]—“~ÿ?T_.œôv–¾ïT†üf¨†;j(E†í
«çRÇ9ívÔû,å²©2lß; Òj×¨ý
ôÙ›¯}Ú3ìWÞrö>gç,k?p©šªCóÍúo|²bÝ0]÷v½9ÿfÍá›ï˜±²­æ{ÂÃOxÓ©NªÕÞ’1=jî¼Ù~`½ï¼¬{[«$ôå>~fß±ïËaí¬…¬õ,W
†=åñ§Ê6ž1êº¬ñàVûRè«Qôv–QvHýƒjÏ°õ»Ðj×Ÿv9ìZV5dØªîj«9k­sPRîœ9ï&k=K¡êÎø¾«m\£öÕG²ÚK_û4gØkôíºÚ7}ëžUµTcDó~Îô
l‹!·÷ÌX×ß³S2lDDÄÊ¶š3ì}o/íâúý¢wÉCëËEI†ˆ˜?]¹i¤ïœüÕš-cÊ5§Ÿo¶Æ‹YmËi¹2ì¨qØI_Ç’È‚’ÖW[&Î|m¡FÕÙÖÕaë÷oèyŠÕ>®¾Z"
Œ›v¡Õ6í¶ïyÜ›÷.±ÚVºQÏÞ4vØjG½?ä[V5ÃÞ6ãÝ¾õ–¿ÔÖÕ/yr[=Ÿ¶úÊ—±:­æû›µÛ§¸~¿|±zóKVÛË•aºÿ±ÌÔþOÿNÕ³Ú""67M™s
•ï|üÓÎC»“Î¢ôe–¯iµ-§åÊ°£æ+xk³}£êÊjnI«})|û©Ñ-}ëdµkÔó‚c 2léÛóFŽM|NÇ3ûOžq-Kç«mÚ3l_=lS­¶•nÔ»œI}7Y£ÞŸ=GúÚ
§5ÃÖ³&)ò­wÝû+{Sï‘±:­æÛ÷»}ûŒù7XmC,W†ˆˆ~§|¦…o.¨?¨ÿIï[}$©oüžÞ‡¶Ú–ÓreØQc_èù¨Ù>ŽQs&=d¨ãû)[æ{~¢œÕj+«%
ÃöÕÄ_6zr«m£æ©]“ö{æàçœ5¡K1iÚŒz¦³ÚÇQ×0ß²Bs\_û´fØ¾2ý"ß:k~G«½%6""buZÍ¶¯F¡æú°Ú†H†ˆØ´*ŸöƒT®]ŠÚ–QÙGè˜ºrX
®[ïùž1hŒ²Õ>Ž‹GM<×µ÷³Ú–ÊA·ßçÝ’žgR5ß]Ë
7[-öÛö×¸>GÒóŽ¸«wQ9gÚ3ì¨ÏR_½’Õ{¾Ï®lßjÇ$jæûÖ5­¶ï]Ù_jë¬Z×!’a#""V§Õœa«ö¨ë÷KÏ÷%6"bÓÙóªNÞg•2©ç•qÕý·Æ\»ÖiÑ
ÎµÚ—ËreØòç‡÷»–u`îÒ»¬¶q<<oÅ½®åü°yÿr«m)õí+ÆN9ßjG_.ôÉª
O[meµdØ/_;Ôõ94œÕ6ŽQµÎCêï§=ÃÖó'Íßèj_Šº,ióôž#Ÿ¹>»ê8[mãxbùGƒ]Ë‰sÜùö£´fØ¿î>þµk}“š{™±:­æÛ7×õ6ÖÎµÚ†¨{OßoF«-""
®ò¡¯Ön{Íw>¹ì£AV¥ôûM{¸ÖK£Õ¶\–3Ãþdåúá®eý¸uß*«m5ÞØµeÛVÛRêÛ>ÿpÓóVÛPõìDµs\ËÙ0é­Ë­ö²Z2ìu“fµwîÛ‡þ5É¹Dtž)f¿N{†
-}cÚ¿\³y´Õ¶Òýªfë8×gOê>"ë/µuG]Ë‰óŒÏ·¥6Ãö¬ï›O<ŸÈw2lDDÄê´š3ìƒï-ëîúýrúPÃß‹©Ú»Ã™/Îþv÷ýþ’VˆˆX¸»Þz¿£ïüûãöýk“Ì©
qãës®t­›jjsýIÒrfØ¾ñªÚIe,Q5\’~÷?®›§Ì½Ú½­Ož
­wk©úË¾Ï?²ÇÃf{Y-¶æï,õ¾Ðø¾…§îöî·Üjµ—•akW{ý–NSm¤R¸bÌëm}Ÿ]÷Vû£æsŒSË×GRç×$ÕÜ¾õUölµ‘±:­æÛ7¯–Ô{Åªugõ‘«
î37M™s•oœS®V_qÜÿÎ’..ç?vÿˆXM¾ûô˜V¾úÊgöû.
uZ•Sû®IŽ½-ÆrfØÊ{”û¸–—Ô<Ë‡Þ[ÙÃÕ¿jaw¿âf³})ª+¼jìÔ¬ö!úž­«‚Õ6kµdØÒ7¶õÛõ;fXmCT-
ßw:Wi%dØQûî§+7´ÚW²º–ø®5IÕ9²àÃ^®þ5ofœg±¾ï(¶žÿøÖ÷­'F%òŒ‰±:­æ[¿ýt/îû¤ß1Sû?möÓ÷ú®™
“g_qzï±o|}åkõGß2TïÑj‹ˆXM*OQ&é:'ªnë¨û3û(—Êý|çïRÖÅž>ð™  œ¶ô½—¯ï³Ø1vì–Q
bWÿ'–Õ°Ú—Ã·\çZ¿_j}\ìXìçz<âÍÚâÔ—­¦{ëô¹×º>‹|å¡¡fû(ç)õdä¡ógÊJÈ°¥¯ŽœÿÌ¸à~â¨zQ¡ç²Rªg®Ï­ñ,OlµRó½úêY°ê«}®
¾ï'¶TFïZß8ç«(·L{çWÿdØˆˆˆ•m5gØRÙ³ïwÝ?Ý}ä““ËÖÑ»¾ë_›Ýþ£
3/Õ¯_¼ú‘?n?°Ñw_¥µ^qô-ƒ›“^ÛY¹Qƒïœ¸øÅ×Î³ú(§“úðž¿•[¼9$™ºŸYÝvocðÐ{ôrgØãûñnS5[Ç‡ÌçRí|9“®ßª+aõQç>õ²wÜî±E
ö±ÚûÔs_påúqÞK¨¦[ÏE|Ï»”?kNX«ŸšÜ÷].yr[«}ÖJÉ°§
xÖ.;»%Uÿ!ëàÎ÷g¾Y¿óÐsY)1èÙ¾ÏþÅ‡›FzÞÒs6ïYäêWç-ÕF²úÈÕ·ŽiÍ°uåüìgMÓ¶ÚûÔqÿÕš-c|Û#
û"""nµgØú5~¤¿ÛTûžïß¬õŠ£odØˆØ\lÌ)=óôÊƒó–ßcõÑ~1w‚r
½^h’u@§{2uï¯ì™‡z^î[þaã®·}ÛCóãÅÝú{ß¼zò³UŸ±ú(—ZW_Ö,•‹Z}ä«,jnSÍbõ‘k5eØ2ªnþ›÷.‰[SN®~uÆÅ¾>ãæo•’aËS5;&ùÖUu
‚4f$îñ›¯²ëã‹kÍÖ
=—•Z_Ö,µ¾Vû|µhìŒ¯Oý›ÕG¾¾¾Òša«f¼owÎœw“Õ>_½Ë²nâ¬vV½Ç´ìSˆˆˆX˜ÕžaK=“÷½óYˆš×^õ+£î=¬uŠ£odØˆØ\Ü0é­Ë}çBÕûÕ8AÕ†*·µ
ÞºN¨FwÔ5å‡-{—½ýäK-ãä?Ê.ÕFãÍòß
½GoŠ[uÂ}5?¤>µM³>zóÝ™¯×nŸìëKó%Æƒ\UÃ"êÝ.åa¡¹êÐ;îÏü¸m¯¯Ó{Ž~ÚWÖjË°5F]µZ|ÛHÛOÇÕO¶¯ÃóVÜëëKN|d˜ÙO®•”aëXòÍa™UYo
!ç²wFŒi©g1…žËJ­jXùj~ÈOW®zÞzì–{"Ÿå)ƒ-ä»÷õ—Ö[õ¢ö%½R«Eç8Ý“ý¼»îdTYÓ²O!""ba6‡[ê··æq´~ÛXjìµÞ×VŸdØˆˆåñÀ»Kï¶ÎÏM
áÔ#ÍuÛg°·¦ÁoÜ{ô”Æ«&Ê˜^3ª¡ù¤þ»jh¬£ên(ŸõõzÞ¶T­…¨í m¥ï{ôƒý3ùsšé¿ÚwèoÆûÔÜŸÖº4…Qcƒ?ÿúŸô7Êxò³@5Ôóí'¾
92¥ò¶—{
0×%ßjË°¥jäGåÚŽŸ¬X7LÛ5îOm}šwÔš¥qô•”aËàsYc>÷¹Lyð¬¡£ZhŽtåÖIœËÊaÔø{©Ï¡ùÖuÞÊ‹¯ãVÏ7”ËF·”áZcÊ×gZ3l•åKm+ÕkQ}
GÍcŸ}v¬ýJu³¿]·cšuÈ7Mû"""Æ·¹dØR÷¾ú}÷÷Žü~ÓîùúÍÛ6"by¬ä[ªtPö“€¡÷èM•aËÐïSù¢²Ã?í8¸íÌ¾cß‡ÎO¡|ÌZ‡¦R¹¨ÆmZŸáþ¿é
Ù†¾S}~ëï¥¶Q¡µá«1Ã–Ê¿B÷ÓûëTÍ—Ó{Ž~•}çZh=÷JË°¥²þ´ËÊå‘ö²ÖYzÞÒœ<Ö:øôõ™æ[sZF=Ã(Æ?í8´Ëõÿ§mŸBDDÄx6§;ë#7vm¬Ã¦ß–
¾ß>Ê¹5n[Ïù}ï™*÷½_n­C}Ëx¦{_³-"b5šy–ÛÐ[>u÷C™Ÿv>hõY¬¡÷èM™aË¨yñ
UYÑ¦©o_m-»©Õï‡Ï?Øø¬õyâªÌµÐüZVk†-½0áÜÐL:Ž'šÿ¾@¨•˜aKýþü¥¶®ÞÚ6Åz.+—zN¡±ÔÖzÇUç-Õr¶–¥¯ï4gØrÊãOE¾'WÕ{\1vÊùšgÔõïi
Û§1žÍ1ÃÎµ×u·gFöxøŸ¹°ÞT½ÎBÆÓ "bi¬†[êòBß²T¢w«UÖZÙÔ¶\úÒ¤6IÃS
ŽÐÏž5^<©üFã†'<ü„¹Ì(«9Ã–Ú>ÚNÖ¶QßÛÖés¯µ–e¥fØRuW4—nRûo®:—©Ö}¡u5JíÊ1ÓÎWVj}ŽUc<ÿ=ÏBôõŸö[Î6ªe×ÜzdØˆˆˆÕisÏ°
1ýVK†u@§{óŸ?8þ«µŒ(•õü¸uß*ÕÕ\aÖrsMC†-µÞªGUß9JehšQó7[ËJ£Ov}(£ZÖçô©º{ç,êÜóªNæ²,«=Ã–Ê^õ.^1õ0ô}…Îe%gØY•j®
Ë$ÎezÿQÏu4_«µÜ¦VŸûÓ•›F†Ö	ÉWÏ1U×?t.HKßr*!Ã–Ã»<˜ÑµÌÚn.õ^­æ?ÈD†ˆˆX’a#"bÚØoxFó¦Í·ö0×=JÕ
P}YåÙÊo¬±}ÊkÜzpÞg×fÕÆ²–áS™¯ë3­~eúEVÛR¨,{ÛŒw;èóYy¶þ]y‡ò®b¶AšÔ¼wÊ¢}™ão>ÿÁ“Õ˜C}W÷_{›Ùw¨šoÏµOÌ96•óc£¶›¶Ÿæ•y/
Bß‹êß$‘]gUžî;·äÏ/Y¨K^œ|ž«íoVÛ8ê\¦qÓÊ³ulZÛTÿž{.Ó|Ö2Ò¨²lÍùùÇí6Zy¶Îß:Ï«îuÒŸ×·õ¸ò³mšÔ˜ôÆ¹ñý?ï®;©g
š+ÓÕÏã»;·‰Žk1½’a#""¦Çl«1½þ³Æ•²Ee…ÖÝ­4•ßésklê;+{Ðêzà±LRù^ZÕ> ï_s.yr[}~ÕsV­íÍe?(—ÚžÚ®Ú¾ÚÎÊµÝµý_
yhhã÷aõ¿7ê\Öå²ëÍö•æýWßÚøç?3®µrùìyëcZ¾ÐóÑÆZRVøµ­”Oëœ¿füÌK´=ul¾Ú—ã±9K†ˆˆˆˆˆˆˆˆˆˆi•Ó*6"""""
"""""¦U2lDDDDDDDDDDL«dØˆˆˆˆˆˆˆˆˆˆ˜VÉ°1­’a#"""""""""bZ%ÃFDDDDDDDDDÄ´J†ˆˆˆˆˆˆˆˆˆˆi•Ó*6"""
"""""""¦U2lDDDDDDDDDDL«dØˆˆˆˆˆˆˆˆˆˆ˜VÉ°1­’a#"""""""""bZ%ÃFDDDDDDDDDÄ´J†ˆˆˆˆˆˆˆˆˆˆi•Óª2ìs
ZµÎ\×¶""""""""""bª¼ºÍ¥
ÈdZ´h‘iwé¥¿Qÿ          @SsÙ%—d¾?Yÿÿåªÿ           ©!Ã         €´âÊ°[ŸÓÚj
P±èžç–×gàÁÌ€^½}øÞû2wÜ|KæÂ.°š   @iÙ²åï2l« @¥qeûö™%oÌlrÿÞMß¨ÿÏüû \¿i¨ÿ¿OìÛ½º×ÝÝ¬n     n¾®ƒõ'¿¡˜ûš+®´þ
 É8÷Üs3/êúÝ‰úÿ•[»|yØ“V÷    “n;gþp²þí®Y=PãB($ÃV ’Ú5>®ño¼Éús €Ô0¼ß£™OØ—?x{ÎµÖ:  @ahÌÍgu[Y56
@yhÑ¢EæÄ¾=k³¿·¾i¨ÿo¦N½¨U«V‘íâdØêë½I“ÏWßÙ¿?¶kûì¨6  iâ•§žnaÝ¯–ÓÚšÕý­u  €ø\tá…™/ŽþÚºGI†
,ŸyÖ™Ë|~äð©aôó¶ËýÛSÇý›ïï†ö}8óù‘CŸ»–1²ÿ _3 €TA† Ð<8¼eÓxë:lI†
,£ŸžùªþÈißï¯ºm[&ßxÍï_YÿöÄñÿ‘ý›SÇþ—üW}mµõõ«eŽ2ôwý ¤2l
€êGcx¢®¿z—túè—[Ý×¥K¦Ý¥—f.¹ø¢ÌåíÚe¸ë®Ì¤çžo±iÉânŸ:pˆ±:    ÉÓúœÖ™…Ó¦_’[ë#WÕ¯^=÷mÎ;ïŸm”[gÿ=7ÃÖßÔÌ{ïfßœÝZ†–¥e T
dØ   ÕÏñÝ»¸®»zït@¯ÞVs    (ªý¶nÁû}ùó—õG~7â©úÛü[uµÇ?=²EîÿŸ«Æm«o-  ÒxaðÌWÇþ¥œž=ÿO2l  €òpE»öÞ1Øƒûôµš
@™¹þê«3{ÖÖùÃÉúÿåú w|Ï®E¹c¶Ïþ÷ÿ8±o÷j×ßªÚ5>®>  ŒþöÊøÎÁzÎøP÷{¬.    ªaíºî6ì©]bµ   €¦£ÇwdTóÍ7ÁòÈö­Óºtìd-
r¸éÚë2_7ÔÿÍwnúâK-­>    zgÔuÝ=~ü¹V[
€jEsôîÖ=3ñ™g[,Ÿ5ëJýfÒxeÖ\ˆúï»VðˆjKëwÓ3f®»ò*«Û’0´ïÃ™OØgeÖYOîß»éñ´º €<4§À§‡õ_7/]ÒÝê
âS¿kÇÛ®ko¯»»YM   ª‚K/¾8£Zó"Ý¹mæ©ãÇþjåÀ>¿<väšïº[çÎÖb%[ïZË÷­ÛGë¾5d¨Õ  8Ðyvÿ†uÏúÎ±šgªU«VV7   P ‡ãºþ¶¿ì2«)
@U°gmÍV6]ˆ‡¶lW®:ÓÊMÞž0á¼¨÷ÛÏþÛßç¿þú…­Ïimu  y,ž1ã2ßùõËú#ºäâ‹¬.    @>;rèS×5˜9é   ¹Pª[jnÅç
¶V¡`4.pÜˆ§ZhŒµµ.Y5V[c¶Õ
lF<ú˜wÇoŽÿ÷»o»Íê¢`ô,Tçù%oÌl¿óƒ•}TËJãÁõŸªs¥zVß{_¦9<ŸT-—AõÉ¼7iòù[—-½7w[è(ýÿúwý]5¢÷Æž~¼fá´é—l[±üþÜÏ¿qñ¢®ÚúÜ
Ó#Ãû
¥CõðUó~íüù´Ý÷­_û´þSïò>"sñE…giú~G?1<£vªW§¾w×¬¨}]cT®Üßmî1§c,wŸÓzUû1çãê+®hü®ôlsûÊ½r·Ëú…ï˜;ñµ¶ú¾ªm»d÷}¾¦Ø
N?ú_\×a«]ZÑ½˜jQê¼ýú£ZjûiŸR­Ê¬¦N½hæØq­õ;¤Óõ7f¸  hÞ”2Ã–Ê=T«$iôêùøÀ¾mÖò}ª†¶~g
€Ÿ[:\ŸÑóHß¹T9FÒ(·Ö½ëÇê~°ÎåY¿=qüÜ¼atçõW]•Qm­|•©YmïºõÖÌ¬q¯œ“Í7²êë}¡®nµºø
-[¶lÌðµ|ßs„|¿;Qÿ?oÝ<AÏ+ý~_Ï&f¼<¦UÃžÚåÖçÎÝô]%±/déÿ`/ç>QóÞ»7EµSæªg,Ê`•»+“ÍîÊ•Í4Å;Ó^ÝÊõy´žù«ï@ûtT-üÜ}OïáÝ×
¥‹k±¿Cû·æ^
ý~Ïž‹þCi)·™ŽÕžÓü/ú<Ö:e?·þ^í’:æt.q}Gš›&ª–¯yÏõL'û¬+köYžEÄåÊöí3+gÏ¾Ú7Ø³]þSç"={Jj»”­·Î¥q÷}Wº>j/”üï^ÛÓµ<×~âó
‚óÏ·[´´_ê\¢çÑÜ_ëû<Qêü®Ï¡sgS}   h:B2l]Væ{l×öÙÙß@Ÿ:p(´v¶î9”	$~ÓÙ¾ušoYº?Ôòr—UÃUŸI¿©
à·èþðó#‡¿ô??x{ÎµVq¸ì’K2šø<±o÷ê.;Y‹órÇÍ·d\ýjœëïõ·ÆŽFÍÉU¹¥«wç=#—Êûõ¼ßZT*Ñ;S_Õ9m}Æ(‹Ý²¼òÔÓ-\ýkŽ5×
ßw¾ñ¦ŒòÃÜß#>»ÿW%Eû¡k]jkV÷Ïý;­Žó,)«ž·hQ¹¥¾ßB÷ï³¿?ÿMc’F}†dõQª}s‡k¿põö˜øÕõ÷š]ÏþBŽåØ®>\è: }¹Øó²2ËÐgiAßc±
ûÃÙkè©BŸ§Y}¢®³MÁÑÛfXëW=_×s•æð
üƒüûë†úWæ«çäÜuW¦M›6‘íÛ]ziãø„¨\YØ¸þùÈŽô®™ÆøÆ¡)c×»h"÷¹~6sh¼/9tà«­úÔ¸–rÕï
H;ÊžÎž×§øÎé[—ä¸:½¯£y¢®#qÔu@ï&[Ëušaë¾Yu-¢Æ©ç’akì®ÆìZ}…ªkœ²­$¿¯RÒ¶m›ŒÆòZŸ+Teo®ñÅqÍ°5>XÏaBÇÌË4fØ7^sm¦aoíJkÝ-5
® ¿Óo­úÚs­¶–:Æ‡=ÒÏõñb£cN9­µÌ8j¼x1cpC3ìsÏ=·q^vOµÖ)kh†­ßÎz^`õªŽÅÐe7%úÞT«Êú<qÔþ·ŽÕg!6U†­s¥µn…úYÝÁã;Ü`­
TÊ°5vL÷3QÌ=®ÆŒù2ÝÏ]sÅ•V¿CãÛ´n¾ßæZžòöÜû„ÜÏÍô7úíì¥û!ýfen
hî¬y÷Ý½÷‹G}ªœ1)¢æ‹,VÕ-µ–ŸOH†­g¼Ÿ9ô¹µü|­[uTöÔ.±ú)D=wˆ›¡”eÀŸ>Pg}–BTÝÞBã„dØª‰QÈs˜´eØª]£:÷Öz‡ªq’ÙåjìuÈØôPµ½
‹Íäô,ªTùZ1Ç\H†­Œ9äý|CrdýMœg1qÌÝ'Ò†¾/}oÖg(ÄúÚïÅ©•mõWˆÅ/…Rªc,«žµ¨^6
T7W´k_TnÏà>}½s½ûÚ¤X…Ë¦Œz±eT&®zj®šˆ¹§{¥ü·ÆI©Íäç_(|ð
@£ú¾ûD“©¥êCY†uoªwÐUÇUó=Mzîù_­qµÊ$­Ú¬:ÏÇ«•aëz©u.4Û‰Ê°•(ã°úÐ¸ïã»wÎÏÖ·Õß³kQHmQÕOòšŸ$z.’_ë}1Õ4Ë~~õmØ»
ûƒZi­‡‹¨[ëU³Ì2MöÙmû7k}ãªïEõ\ô]Y[ˆúþ­ÏëCÇBH^ÙxÌ=Æò¹±Ï…¾³•aë\¡ï°Ðó•aëß­>ônã–¥K{è\¬s²ÎÍ:Gëÿó½÷˜«žgD­C
S ïIçHkÝõŒ'»?dç>Ð99äÙÎñ¡Ï5¬¾ 1í¶Îïz.£kûWÇþ%d›fUêŠ   @\oÙ4ÞõÛâÐæc¬¶¹¼0xˆó÷›ê[FÕÔËÿ{ßß©õåZF)ê,
¤»o»-ã»gT^2°÷CVÁhÜªï^TÙÞÅ×<bÊœ£2DeÏqæ€óeØz¾©ìÔ·œ£2ì
‹v‰j«úCû>ì#L5TÛËw]ËªÚÝÎš+;Ò<ªæË/¾èÂÆ}Êª_«¬ÍÙA¾[™I!ãñsMS†íS®²bm;ývÒ1¢\ZóUê]kNF«ÞÎ‰}{Öê}ýöR¿ê_s•hN<
=«²r¬Bç\Q¨~•KêXÔ1§:Hú»¨~´gø2l=g°ŽqË¨[ïTú²q=Ð÷R{O5á÷®ûh¸ot>½êòË­nÊŠj²Dm7åÖšŸÒ—AkÐ¿[µrôÎ§³ƒ<ôL
Wßq´öý÷oÍÿ[ŸZÇ¦ ?ÃÖ¾¤ã^Û\s¡ê˜÷m×/¸ £y–¼1³½õÞþÆÙ	   €‡‡>áüÝ­{=«m>¹¿õž˜îO­ñ,ùËú[õ¥>•qdÿ^|T
€jD9ï—Çê~ôÝêþ×ê#åöaü¬îàÇ…Ô¶œñò˜V¾±¸›/¾ÛjŸÅ—aG©1Ðº^)|{Â„ó4ÆP*ßÓ=úëGi~L_†­,0ªo]§\í|DÕÐÿß­sP„R6”ú>¿r›8s¢
)o\5gÎ5QýÅÍÎ|v”ÊèT×[ÏfŽ×Zûƒ¾GGÊ°ô<Dóï¥9ÃV^ª}8¤þÁôÑ/·Š;.XÇ…æê¶¸ùº™O8àë§ÚÞu·7«Õÿ¯Ïcõ‘ËcÆ¶ŽêOË‹ƒ/ÃŽRç
íWª¥s@þyHû£æèôeØí/»Ì[ðËú#*dtÕ¦ñ½#¢÷)­öåBŸ-êûÓ÷kõ‘‹Žõ¨wctÎKî½J®!ÇPS£[Ï¢ô\CÏ} ­G¦ó{Ô»PÚCÇ¹
¡qý®PmµÍGã8²ãñ47zùËµþ^è·”î)uo›ä{ò
•€î£ÞõÕ¼·VqðSSNUè½­P>èêW×‘Ð±Øq2låAš“¡˜uÖ³ÔÏêžpõ¯Dã"AÙ•ï>_ãß¬öåBù¨¯†…®É½îîfuáÄ·/È}Ö´Úç'ÃÖ¶Õxø4ç(V†­gAú›
¸óƒhŽSkûHÍÃ÷}7Í©âÛOâŽ‘Ð1ç«w¡cNß_!h<©/·Ôò¬ö¹ÄÉ°õ.€êy;ÆVó¯»û?üeèùÓ…ï•ö³BæÊ)Ø·ÍµŽ:‡Z÷DçnïþpøÀQkLN>•œawítk¦Ø
ý3—S§^ä;žxø«9   À?Q­5ßï «­	E9L1Ë,æ7:
@¥¢qÊ¾óöÉû¶$YcRõ0\Ëùêø‘?Ç›2ß{öo½bÏc&B2l±UØ$¶‹¯nVœuö•)&Y¦¢æôÞïQ«y$ª{àêW¹Tœù¿B2ì/ŽÖ}«Ú•@T†­<Ts–‚rû¨y
-µÝ5.ÝW›ÃBm}}ÇÉÇ4Ô×Žk«}QÏNâ< É°•ékŒ¡Û3Cö,ãï·t¸ÞjnR·mËdWÿi¨m¤z1¾m¬¬Ôj…Îá¾¾uîC%gØIõì÷£ùó:Zí
 ù¡ûÕÄÓ;ÉO£ñ'²ìÍ7¯ðý^³ú,W~nµ
hÎDÕ¥V®¬¹“äøî]\Ë*t¬[>ªGêê_siYm…•aë]ý8ÏV-öÖ®t-GsYÆ§—²-¡tõdûÖ)VûR£Ïç«_spÓ†­özË7vwóÒ%Ý­öY¬[ïŠ%ñ<£\ø2lí‹
q²`µ5«û»úVZh6žEÏ|ßAœñú¾¹S•‰{ÌEek¡ç aeØªÃú~b¾9Þ;î«mu¿Çùy4&ßj[jt.t­›ÎÅ>Ðþ Ïèê¿aOí«}.dØ¿Å÷ü³nÛæ×¬¶
P(£3|DãØ½K®ùLôÎæ7 õÿëwƒ¥µ¼bqeØqß…
h.ôìÚÕû®³þÿ8¹PªÕäZ–îñ‹ÍŽ²¨“v}žœÑ—aë½w±Lj=…æ¢ó]/­gÏÔ_jéû<ºf6%}{ÜëýüQs7ÇAµS]ýk
­÷áË°•ËÆ[›|¶òg«­Å´—F·rõ]H=¹|tìùêè}ò)«y#z×ÃWcGß³Õ>ßþ¢å†¾kâË°uÜê˜¶ÚÇAç×\_­ûC±n.ª©íúLMù;Ý÷ÙeRÛYc|\ýË8ó‘’a
ÿÕqm¸u{    rÑoUÝiž•¯Žý‹ï7W¡ZË/W†ÝÔ÷è  iDc‰5ÎÚw¾V
S«¸Ì›üú®e[3#Ÿc;·Ïr-'ä^ß—a+?°ÚÆeÎ«¯žçZVœ|ÕBµº}Ï)Bs¿R¡w¾]ë·¾q¾ç&Rz¾LR5ä­¶i¤”vÿ{%ZO._kÕÔ°Ú
_mfÍ7Wìô,êGý¹–z^õeØ_ÕùÕjß»8KÞ˜™èK8»?Z3Øµœ¦˜×4‹Î®uÒ93d.Ót.w=W•¡û­ Ãþ-¾ú7z·Çj   •~§©nf)rë\­õ(2l
ÝSŸØ·§Æw®V}l«Bð½Ã:61Õvp-'¤þh93ìÃ[6w-+‰:¹ø2ý$2ËbP½×z%]ÏÔWOeéÌ™A;v8Qµx¬¶!øæž]4}ú¥V[±gmÍ®öGwl›aµƒ¯>…r\«
­(g†}hóÆ1®eé»Lß<|»oµ-¾\]çL«mtNw-'Î¹¾¹gØí.½´ñ™¤>¯jX¾3qb×ö(Åµ   Òƒæ2‰‹—¤Öº  @éÙµúƒG|çieDI¾?žË7
õÿ-yªÇ`µ‹Ë»¯MrÎ«6{¼=Þ»œ¶¯´Ößj‡Þžs­k9Ê­¶¥Bû˜o|øÈþ¬æ±ðåT¡uSÉ°Ã¹æŠ+½vc
ömX7ÒÕ·>“ÕVhŒ¿«½Þ±ÚÆÁ÷Î‰je[mE93lõ™¿›I_¦ŒzÑY×hÕœ9×XmK…¯VµÎ™VÛ8ø®Iª×bµÍRÍ¶ê|õîÖ½q^%mûÚ5>~l×öÙzïâìçþ¯®Ïí³×j
H{mýðùuCý¿ë^àÄ¾Ý«mÙ8N¿7jæ½wó‡ï¼}¯µ>  PZ4G—ï­ûéK.¾Èê¢
n¸úO6|ìßtíHRß¸ãÕsßé`­g¹2lÕð}ƒûôµšÇBãÏ]ËQNeµ-·t¸Þûù5w_’øòÄ/ŽþÚj+È°Ãq½—5‰Û÷<"$ÃV&ë«…=¼ß£VóX¨?×r´ül¸\¶æ…t
-Gµ/¬ól\}ïlZ²8Ù‰bà{ŽöÜÀAVÓXèœîZŽ­aSm¶j(¯þøÀ¾m¾šä…˜ôµ   Òæ¦²~H½ƒ«1{¿¦w·ôWÔ¼XQ÷/ÞF
Pr”‹øî5Fºk§ÒÝ?Ôýïµ¡\®[ð~gk=Ë•aGe¸ú·$ñÕ •¥zfa5Ÿch¦Šò(×r4? ÕVa‡Sê[ëèê;$ÃŽ#Þ¥£Ù<Q5U´åÊ°õ¹}ëY.“Øï
Aç>ß:éœ™$Qç{=ß ¡2l=¿ÑXëO8jí…šôµ   šžûºtñŽE‘º¯Û²tiB~Ó“a
¤ÕœÖ˜gßùyÔ¡VEñâÐ'š<+Qlk=Ë•aGeúId}¹t¸ê*ï²’®yÊËÃžtçÊ
Çÿ»Õ6.Qy¹Æ¡Za‡“æ;*¯½¢]¢ÓFn‡Ì±\vÔœå2‰ý®¢ž3èœ™$Qûƒ®!Tz†Ýçžš›à”µ?kÒ×j   hzTÿÃwí?¹ï¦Žn°ºðB†
.4®õãûwøÎÍ+gÏ¾Úê£X&?ÿ‚³j9MS†íË¨¤Õ6.Åæi¥À—'½ETv’«’a‡“æ;êYFë–ËE^è]–Ž}‹reØix¶˜Ä~WÅžââ[VÈþ
*9Ãž;ñµ¶Qc§,õþØÙ}ÿ´ê—××î˜{`ãúQªcéúÛR\C    éè|ãMÞßQ'ìÛÒæ¼ó¬."!Ã
H{ÖÖñ—uØ¢E«‹¢Q=*ë>µÔ¦)ÃØû¡²]+£®Ë¡ùIÒøæwKz;‹¨ñ–!ãoÉ°ÃIs†õÜ(‰uËÇ·¬c®\¶ï}ˆršÄ~WiÙt-¡R3ì·'L8ÏÚ¤ê™Ý¹m¦
j§O}ñ¥–ýzÞŸÑÜ^àžnµ\×j   hZ|séwhM¶(È°
ÒÃü×_¿ÐwNÖ¼¼Å>·eÆËcZ¹ÖAu1Û]zi¦¶iÓÆZÍ²ÝGå'I×¨Žº.']÷5_.¬Ãj—bÇ[’a‡“æ›qØ¿Ç—ak¾Së|š”ç·mk­fIˆ:/„Ô,K1ûƒ¨Ä»w·î
‘µ+õoû7¬{Vó-…ÌušK¹®Õ   Ð´Ø¸þy×5ÿØÎí³¬¶!a ¤ƒÁ}úzï¿n¨ÿ»æè-cŸ|ÊymøôÐCVÛrR®ûâ¨zØª]ž$•T[Zmã•]*k´
Ã'ÍvTf©ñžIÒþ²Ë¼Ë ÉË•aï÷hYÎwi$êýŒ¤Ï‹Íµ¶jø>÷gu?.æj¹®Õ   Ð´||p­ëš¿jÎœâagÈ°
Ò€òiåÔ®s±rmÍåUNžxøçµAëhµ-'åº/¾¥ÃõeËO”ø–•ô˜ïP¹¯§wBæYŒÃs9—¥ù«­¶‚;œ4gØ[ë[·n;[ÍcQìßreØ½îîæ\ŽÞÍ,G©¦$j_ÕvI
’¨ó}è³äJË°£žÓ&Q»²\×j   hZôî¸ëš¯Z¥VÛÈ°
šÝúÎõRó+Y}$MÔ˜·¦ÊQ]”ë¾Xß‘o{(ïOß¼mß¨ÿO«m©ˆÊt”ÿ%ÉûS¦\äZÎGëþ`µdØá¤9ÃV­ß{)#û°šÇÂ7¾YË©™P®;*×ÍV+eõ®Ï®÷D’D
ïDù¶³æ\¡Ò2ìæÏëèZ_=;Lâ]£r]«   iQíQ×5ù¬YöÀ È°
šÓ<¾ópíš·ú(­ÏiíÍ’Îl‹¡œ÷Å_Öù“kYš·Âj‡š÷Þ½Éµ½—eµ-­ZµÒþðŸ®õRÝ™$ÙýÑšÁ®åÔmÛüšÕVa‡“æ[|~äð—®ö«ç¾ÓÁj‡Å3f\
æZŽž-ZmE¹2l]/TƒÞµ¬ñO¬îØÿ=‘òW«mÞ}mÒù®å|y¬îG«m–JË°ïÞµÀµ¾{ÖÖ<aµ ¡œ×j   h:|¿)mÞ8ÆjÂ½wÞI†
ÐD¬œ=ûjß9Xïï*;l*|µ1kWð¨Õ¶\”ó¾XªkYIÍO‘ÅwÝO"³,ßþ°}åŠDÝh¼µk9:V¬¶‚;œ´gØû6¬YŽïRÇ°k9¡ù]¹2lQ_»ó=×²BŸñT2¾ç['öí^mµ
ƒï\çÞ«Ò2ì¯Žù³k}ß;î«må¼V  @Óáû½¦q!sùÐXŽ·'L8Oïˆ¹ú—V  P8Ïì}W^÷“W´kouQR|ï{ýI’rÞ¿3qb×²t
}¿ÜBÛÕ7þ=éñÎqñíÊé’ªÅUÃFs=†@†NÚ3ì)£^léj¯c¤mÛ6Vó
Ôï-ßj/Ê™a/œ6ýß6iêkF©ÑXs×g×u4©W:—Ûpü¿»–3çÕWƒ‹BWZ†íßŸT–r^«   éxaðïýE¡cŸ¸ë®LÃžÚå¾~³Zý
@at¾ñ&ï=£ò”ž]»Z]”ßüa2éwù¥œ÷Åª7ëÛÓG¿œÈ€y_N®|*‰L±”!û>RsŽnX´°‹«ÿ³ÇÊ„¾“@†NÚ3lÕáõ=çKj|ècÆ¶võ¯å†Ìç(Ê™awºþFïw¶
mÅòû­ö•ŒöIßþ úVû¦¾ø’ó¹‰ŒSs¼Z2ì×ž}.‘”å¼V  @ÓqÁùçg¢ÆJ«Vªþ&„ûºtÉÜ¼a´¯¯|­þ
>kë«ó*'>ól"÷ŒIà«?ªœýžÛo·šLûË.³þ¤‘rßŸØ·g­ky_=üuÈÜoQhüŸï}î#Û·N±Ú—µöÕoØ[»Òjo¡ïÜ—£l]¶4lv†;iÏ°…¯¶ŽòaÕí/µW
cWÿZ®Õ>K93l¡ãÍµ<å»Z—Rz^.%Gwl›áÜÖgÏš{·t×¹ÜÕÜs\¥eØ¾NIÕïÝ­{Y¯Õ
Ðtl^º¤»ëºŸU÷|Ê²5vàá{ïËtéØ©Q·Ö{wë¼ßù³ºƒ'¢úpi­
ÄC9 ¯öª\¿páVådÒsÏ;ó@©<3tœb(ÊLzÑÇöm³þV”;Ãöå£rÍ»ïÞhµbý‚·ûúöH?«yYðÍ}'õÄjÅëG¹úU.§±§¡a‡S
vÔûˆqúq¡cÖ×÷3ZÍÿI¹3ì§ïïÝ&§Žû·ÛoºÙê"ºnÍ?þÜ8s–Š>æýìº_²ÚG5?…öÃ8TZ†í{.¢yM‹­¥ßz—Æ½¿–æZ
M‡Æìéw°ïwU1žýíð_}ÿf­
Ä£fÞ{7ûÎ¹ÊØŠË›4ºwýôÐC¾uÖØ·~=‹}]ËýÄðLöy«–iµåÎ°õýèžÞ·=t¯nõá"êYAhž_4Îñë†ú¿¹ÖScó•/Â’7f¶÷}~ÍëgµÏ…;œJÈ°ÏAž÷A
äÜ‰¯µµúp¡1¾ºZ^œÜ®Ü¶8¾g×"ß6Ñ1šÔs/ÓÜ_«~Ku^‹Î‰¾ÏþÞ¤Éa/§æ1jÈPo]—âì¢Ò2ì¨s°êíXí]¨fÚ¡-ÇùúMÓ>
Ér÷m·yß±-Ô=kk†ÜÒázïý‹µN
Ž2Ú¨û¸[o¸1ÓîÒKË®UgX÷Ü¾9Ï¤îû•Í_Þ®]d?.´|eŸ9|*·Ï´fØâñô~Úš/94ïÐß);ðe'úÿ{Ü‘ª¡ù‘y»ö“q#ž
ûðgÑ¾·iÉân¾þ4·ZÜ±þdØáTB†-T‡ÀwŒH½»ç˜Ó9'ê˜ÓòâÐ¶j3GÝèslYº´ÇuW^euõ;.¾èÂÌ¬q¯œ“ÿg)Ï«qÐ91jXöæ›WÄÙô$ª?½ã—JË°õþ
nÔ¾çºvã5×f4gSÔ6MÛ>   É£ßP¾ñOqÔ{†ÏÜØgÔý‹±:
_ÕÔìýµê™×_åç*«æÜ»î£áªç­ç£.Ú´iÓXçjþë¯_xtç¶™jãê+Í¶Ø´xñÝQÛBu³õ¾¿ïù€þ=ÓÈŽoô©wÛ41‡·nžµÞG¶o6 WïŒ/óÐxníS
ùÏ.òÕß8;ˆ€;œJÉ°EÔ;,òäþ½›ôÛ6ê˜Ó¿ëï¢úÑrœDÐ¶Ð9ÄÊ
uŽÕ\8ªõã«É£ZüÊ…•åêØö—K}^CT©s«¶OÔþ z1¾9²jžYg•–a‹†=µK¢¶…®Ëºv÷¹§GFÏ¬u=—W¶oßxªgCõµ;æZûd®iÚ§
y4žÂW³ÌRã5ô›OµI²a ”‡JÎ°…îO­¾rÕ}ìWÇþEïåkËSÇýÕj“5í¶òúÚïYŸCs27ì©]¾»fõ@Í[¡ÿ<±o÷ê¨¹š³*w
÷VnÚ¶m£úuÖgøº¡þßïÞ9_Ÿ]ê‡ê
ø2²\ãÌã˜v8•”aëX°žH×1§ÿrÌ©ÿBê95U†-ôÌ0Nf˜{^V]¤¨š‚ù–ú¼í!óÔë{×9·ýAçxë=%•˜a[ï\£o{§iŸ
€Ò¡útz^nýnÕ}â±]ÛgÏ;®µî9óÑX(9qéX,  H¥gØbÌð™{ÿbM{†-tý,ô™²¥²´B³“rqÉÅåØ…¸óƒ•}
ÍïÉ°Ã©¤[è˜yvTˆz/¤Ðc®)3l¡ñÄI×tYŽójô}…<×(Äã»w-ÐþV(•˜aÕ‚²¶M\UÛwŒ¤mŸ  €Òrá4þvÕ|ázçøƒ·ç\«±rzgð¾.]ß
€¦§2l¡ºÝ¥Ênå×
õ_>kVPä¦Ì°…2”]«?xÄúLq\·àýÎ…æ·åFÏÆë¶m™l}¦PõÜ]ïª[Ë‚;œJË°…Ž¹m+–ßoíKqTMöBókÑÔ¶¸þê«3³b}ÖBUF®JÖz”›ß¸xQWkýã¨ý
«˜ýATj†-TûÚ#âÙ}æ?t?ª>›úZ áTK†eÔ¡Õ…°úQï/+Õ8ïÖç´¶ýOÒr_¬Ú×_­ûÖúœQêÝþ~=ï·•JTÏà«ú#§­Ï¥êÒvëÜÙZ”
v8•˜agôPŸLþœƒqÕ1§ºíÅ’†;‹ÞÓTíë³‡¨gJŸ®y\Ó>&Fsíêû´>S”:‡íû°µ¨ *9Ã:¾4’µÍ\j¿Ñ»4W_qÅ?ûKËµ
lÆ>ùT&[8MêÞ²”;ê Ð:ÇRc¼”7h³²pW­«®ºürç6mŠñ‚¨^™Oè6m/½¯¹æ*eìµ={˜öÒèVª5k}î¬ªK£ÙIäˆYzÝÝÍ¹O,˜:õ"«mñ7f¼<¦
¸¢™Œ£÷
=&sÑ:ºúÖgJ3:èùWè¹G§¿W»¤Ž¹Î7ÞäÜŽ…Î˜:¯/ycf{=ŠSãX5²U3Zç2½ëYIèûÔ¹4j^J×þ 9hµ?RÝ‡®A®}âš+‚^1Jª¥²xÆŒËBk¦ë™’Þ
Öù¤éZ
 ³Çw4Ö¸š5î•sTÛjéÌ™—gk\)éÝ­{Õ×¹Ò½¿Æ±ÍøZ[Õ)øÍ=ûÙÿ­wµ5n°˜z«iæÒ‹/nªÜXs3æ~þõÞ¡}£Ï==2Å¾¯%{ÌéØrs:õïÕzÌE¡ãL
ãõ¾Hö¼¬|[ÿ9}ôË­TYÇãùmÛZ]UúžuŽÕþ Z#ùûƒ>{sÝâ¢gÜuWãù\çïÜí¨º_Êÿo¸ú«
€ŠåœV­37œ9""""""""""bª¼®m»Ìy­ÎÍt¾èZDDDDDDDDDDÄTÙñ‚«É°1•’a#"""""""""bZ%ÃFDDDDDDDDDÄ´J†ˆˆˆˆˆˆˆˆˆˆi•
Ó*6""""""""""¦U2lDDDDDDDDDDL«dØˆˆˆˆˆˆˆˆˆˆ˜VÉ°1­’a#"""""""""bZ%ÃFDDDDDDDDDÄ´J†ˆˆˆˆˆˆˆˆˆˆi•
Ó*6""""""""""¦U2lDDDDDDDDDDL«dØˆˆˆˆˆˆˆˆˆˆ˜VÉ°±\ÞuÙ æß
"""æJ†ˆˆˆˆˆˆ¥ðÕ¾C3ûßYÒåûM»çŸÙwìû_ÿs=³¿þ?ï<¼ÿTÍÖñ{ßY|ç°;0ûDDDÄæ'6""6¸æöÌ˜^3‹^˜pî†É³¯ØýÖ‚[uO­ûeýïc§œÿú
c#2:Ýcö…ˆˆˆÑÎ6ªåO;íÎÏ¬-ßæ•ÖVßˆˆˆØü$ÃFDÄjôÎK®ËL|dXæð¼÷þq{ÝNëž9×Ó{}óùŸ]øÜ«çô¸òsYˆˆˆøU'ää²Y×Z2lDDDŒ#6
""V“Êœ7M™sÕ¯{ž²î“C<s¨á_ë¯~dÐm÷šËFDDlÎêùñWk¶Œ±®­dØˆˆˆW2lDD¬uß¼füÌKþ|àø¯Öýq!ž>ÔðwéîyU's]›£»Þz¿£u=µ$ÃFDDD—
dØˆˆXé>Ú±[æÇ­ûVY÷ÅIxfß±ï&õa®""bsrx×^=ïõ]?ÿ|°á/Ÿ®\?bÝÄYí47ÅÔþOgT³KïNXZÓÿO;nûå`Ãa#""¢K2ìêRs“é÷_®õKV÷³Ú!"Vª
ãûÉüù@ýOVöœ¤ºG×=¸µnˆˆˆÍÅ—¯êºf*—Þ;gQçù%4ÿòý×Þfþ"""6?É°«ËOVmx:ÿwãwvÍ¶Ú!"V¢ùõÁ†¿X™³üaóžE»ÞœóŒAÏ¶r{ÏÌC×ßÙØ
Ç}WvÌ<vË=™WûÍ¬mv{Õñ<}¨áoVrëô¹×ZëˆˆˆXí*ŸÖü®k¥ÆY[í-É°«K2lDl.Ž¸«·™_k¼tÝÂUÆQ5¯7Lž}EÈøîÕ¯Î¸Øê±šòøSçu
xÏ‘Ï4_…ÕÑ’»º$ÃFÄæ Þ3þ¥¶îhT¶¬úØOv}ÈìËZÎ'+Ö
3rò¿í=Èì±ZÝ<eîÕ®kdí¬…¬¶ˆˆˆˆ!6÷[ã4>oâ#ÃçÑü"z—\ãï¤þ÷¬¡£ZŒzà±ÌýWßjö×Ô’a#bsPs?EåÊÊïºì³ŸP?š0óRÕóô-ï—Úº†ní
o2ûADD¬F¿\³y´ëú8sðs-¬¶ˆˆˆˆ!6§[µOßò|‹m3ÞíðÅÙßYÃ5w¶ËÓ{Ž~¡ldþ3ãZ§1¯
ÃFÄjWÏ£ÎÓ'—­RŠ÷–—¿<¹mÔr5§®Õ""b5ú‡µs]×Æá]{™mCl.öáy+îµòé¸ªNªæ(Ir¬_±’a#bµ«!¾óò[ö.+å9yÿ;Kºø–}úàÉ¿ö½¡«Ù"
"bµùÇíu;]×Æ‡n¸Ól‹ˆˆˆbsÉ°]ÙnRê7ÛàÎ÷›ëPÉ°±š:p¤w¶æw|¼cw³bìrÙõgïÓlô­Ãáù+î³úHJeõÏõx$óîÓcZ­~eúEªµô¥Im¦
x6óÈM›¥ètOæõÇFdTKuX´n‹_|í¼ÙÃFµÙãáÆíhõQ‰öºîöÌ+
ÍÌî•ÖÙïDã÷ß1¦å=Í¤ñý­jsØd´Ÿi»g÷;½ƒ÷èÍw›m-û^ß53©ß?ökÕÓ¾­ïZßy÷+n6Û—B-wôƒýÏ+ÆN9_ŸyÕØ©è}Á1½fz\y‹ÙG5ªïêÕ¾C
ëæ‹Ú^Õz,ZûC)ë"þR{ìc×u±Ò3l]¯TwR×®©ýŸnTu&õŸÚÇ4¿t)·+"""þÉ°“ñÌ¾†yêîâæKB2lD¬f¿Y»}Šï<¼uúÜk­öI¨|À{-ØòLœ,KùRvþ…|
]¯ÜZYÄ©š­ã•ÙG]—~ÚqäðŽ™ïÝøàµÍõ(V­—²¡Ï?Øøìéýõ?Z×LYÿnÃÎYÊ–*=cÓ{ò»ßZp«oâo>÷¡†¿}¿i÷|eŸªofõªÖÁµÍ9¶•ÕVYž²-e±Ùç
Ê¾Þ~ò¥–Owë“)å{
>5‰ëóøêê*[ª{eÏ_÷=ešw.Î>§ìjïœEÚyh·ñÝþý›õ;ßPvXŠZF¹>vË=óçé«&žêøÿ¸õà:ÕÑÓ³%«ïP•Kº¾#ÓV[e‚ùÏß”³fŸõÄ9‡fÕ6W¦X
¿xõ#¿î>òIÀ±øwm?m—¦~æW¬ZmÃ6ï_²?è9ìöóo(vÈÿîuýs-sçÌy7ù®sùòÝ'¥ö!KôÜëà¼å÷èõóîº“QsaüfŸ:{íSíSêÇZ"""Æ—ÛÿÛÖú›
|U_;Î}Q)$ÃFÄjUu:|çfÕv*ç½ï·ëjßô]šx®Õ>k¿›îòæá¹§ÌgÍø™—œÞ{ìëZôûmsüWÝ“[ëRˆZ/åž…¬×?×ï`Ã_”ÇUÚ¸H½¥Ì>4ßÈW9¾r’žWu2—
eùþ3¯´v-Ãwý×÷¦Ìú«µÛ^ÓzD­§Þ}°–Ÿ´ãìZ——¯šûwÊà4G‰µ­óÕùB}Ô:èûýtå¦‘…|¿?lÞ»¤ï„ôîpGæøâšGù*ÕNóá&QóH´kgö×ÿ_¾6zGD
ÇŒ/ëÌªïßZ~®ÊÂ­gÆvù›ž”ãy_’jÐz[ÇpÄçnÜôLÄZ–K«ÿBlª1Ûß[ÖÝz.W=#Ñ>o-ÃmÎ¶ž—ëþD5­õž©ÆÚä¿¦ÿ­ñM÷¦šÚºï‰ú½ÒÔsz‘
a#bµZóê—øÎ½kµOÒ‰ý†{ïß5VÜjŸ5$ÃVí‚ŸwÞuí	ñÀ»Kï¶Ö'Žgö§·YË U}
ïò ¹Ü4¸nâ¬v…æFùj®hÕ]±–eœ[u04¶ÐZ¯¬iÌ°56|×[ïw,ö;Ð¸Ïüe«o£,¶o½Ÿ—ä\vÊÜõ<ÊZnˆêG56¬eF'ÃÖøè·í¯±Ö+kh†­,^cß­þB=³ïØw:
ßZËMƒÚ´YŸ)D=S(ä9§Õo!6U†­s¥µn…ª{Í¦ã„ˆˆX-6·[ÏÄ•YëýX«KSNí—£{ž$ÆT*6"V«ß®ß1ÃwXè9½PõÎ±ò×ºœ9Ôð¯¡õ¢2lõ¡qº…
Œõš YjÜ£>§µ¼¸*“Q-kùM¥¾wƒµ>G\5´)kH†­çªcb­K¾iË°õ9’|v¢L?»Ü¡wÜ9gl\õ~^ïìzsþÍÖ²
±˜g!¶òÈ/>Ü4ÊZ|CÎSªã;£ŽEÕ:¶–ß”jû$y]Èªš9Ö²sµú+ÄjÌ°¥êù4åý!""bµØ\2lÝƒiœµõw¡jìŽïwJ1÷¡ÅJ†ˆÕ¨jø2Ó_jë¬ö¥°~Ñ‡}}
×É>i¶—Q¶j›úþ­PõœUsÞYë¥®qV~ÒXkvÛþÕí>¹lýùíºÓTØZGåRÚ.Öz”[å×úÖúg·³òËÆ¬u÷‘O¬í%õ7š“ÓZ—V†­šÃ…>sHS†­÷¬:qUÊ
ÍÇ9'\K@ÆÍóÕ˜pkRÇœÆ×kŸÓ*‹µÚ4®_ïZ¶æÕ,tœ°•aí38ò]©Fý×k·OÎžƒT;Gµ ­ãQÛîå^ÌmÐjŽõ¹ÿ÷gø»Î=Út.
Ýâ¼¯cõUˆÕšaK½£UêZùˆˆˆÕnsÉ°“V¿A|cu>Y¹~¸Õ¾T’a#b5ªº¾ûBÕó´Ú—ÂÏŽwæ†rÃ¤·.·ÚË¨;Jéª[¸êAe=GªšÔÊÊ4Ÿ”U+÷ÔGÛ&XëåsÊãOy
k’Ëï6Õ¾§1ŒQïMkþ1Õ¿ŽªÍ¥~Òv¯¯uŽÚ®ª	®yÒ\syiL½j–5Ö2Ž¨Q¡m;áá'ÌuÉ×—aëwÊ§+×ˆZoË4eØQª&ËÉe
Ò÷¤gš#Pß‡ê/[yçwÜ•k*ÿSÍ
cªK¯cNcT‹ØªÃ¬¶…ærzß!ªoåïÊ5Ï¬žóå¶Õñójß¡ý»U¯±Þ{_Ã¿D½¯bT†=äöž™¨Ï£ïCßOÔœ©\s{FûHTM³ûÓWi«ÿ çQÛUû¹¾ïWêÝ
ö¿³¤‹µ?èØ±ÖEê˜ÈÕ—“ÿ¸}ÿÚü¿õyÿµ·™Ë-…®[çã¶ì]¦k­žªÎŒÎïªÞ÷ú®õø5ÿ¬®yšSZ×_k¿/ô9%"""þC2ìÂ]ýêŒ‹¿Õ¶í¯±Ú–J2lD¬F£òâ8s
(&éÀ[{xóçÐg™q2låªlÍ¿¥×ØC_?ºÇ~´c7sÝòUíY_=^eiÊW¬>rÕ{Õ›í[Ïy#Ç¶²ú(—Ê)¢²
åF¡5#½ùîŒ²__ÊÎâ¾sîË°-Ï~Ÿ?«¾ˆæEÌŽUÕØyeßÙqÛiÏ°µ¾ÙŸ¶gèú\õ\BµÏ­ïÃªU½vâ›—YŸ9_¢ÆœëÙDè„ÿøü
ò~Îƒ'ÿ:èöûÌ~rõeØ–Ú¯ôŽ‰jg÷¹/ÖlýÃæ=‹´?êo|¶žùž(oÔ³¼8Ï¾”ó*Ÿô­k1µV’VÏA¢ö±¯Ölº?(›·ö=+°úÉ÷×ÝÇ¿võú^RSšÍ°uÌëÙÔŒ
AÏF>‹õ©¹`£j´ŸÞsä³8û("""þV2ìÂÕ=­ë÷IÔœì¥–«ÑÚY;ùî
5Ñj_*}õBŸe†dØ[§,%Îø4Ý#+Ûóõ¹cæ{7Z}äûåšÍ£ýí>þu¡s1j=õ~µ«_½ÿž†{}­CTýe«îKeqìëóÐ{+{X}ä'ÃÖþ¤ŒFõ„­í««§XC2l½‹
w.ÌÐ[žžÅùì/Ý? ã‡ªúVû|?[µñßúÅ©÷«ÆàúúŒû~Fœ[ù²ž“hnGk®
=ƒëÝáç¿é;qõ¯ópÜ}!WßvÑ±ç¼[Jµý|ÛWy´u,»Ô{¾>ÿ°q×ÛVû|+9ÃÖøhS/d;æ«>¢¾¯BÞµADDÄH†]¸wìîüý®±ZVÛRI†ˆÕè‰å
öÝ†Ž=+…ª·ê\¯³÷òV[ieØÏe»ö©íâ·§ù1­ö¹Žï3Ä¹žÊxž¿·ŸÙ>J/ôÕÍMÃ½þÜ§^öÖs¨õþ-V{ŸÊ9|ó”*CÕ¸w«¬!¶rÄc‹>ìSh]‹r•a+'V
B²&å‘V]ð6ï]Rèü)G¬zÀ·íCÇéËá]{yÇý+³ÚG©ÚK¾Ïçy`h†­1Ö›jõg©ãÁU‡GÛI5W¬öQ*W×s×ú×¼úÆ%VûRµ?hüu!ÇBV=/ó}w:ï[ís­ä;iõ
üË7çh±5ò›³dØñÔ{‡ª¦ß“ªêûÝgõ“¯îmÔo±ºÆÉ}¿iÏ«]ˆÝ¯¸Ùüˆˆ¥Ð7ß’²!«m)ýv]í›¾ë@H®•a«înHQúæT]«m®¾í¯šZVÛw½9ÿfWÿõ
KV÷³Ú–Zeš®uÓü‚ù5gãªz4¾úØqêX¶Æ,»êt§U_†ýKí±‹ýŸ¸éyWßÊÆUÓ¶˜cÎ÷~žÔ¿Yí³žXV3ÀÕ‡ŽÛbŸÙEekz7ÀjŸÕÌ°wùÄªñG_Öªç2VÛU
ÆÕ¿êžXmK­>£s8Øð—b÷Ýø²ç¸cóÉ°ë¹Kïrn×š“¬¶ˆˆˆè–ûÿ¨•š¯Cs™èÞQs/isÝûýº÷è©¨y˜òµ–•ï¢ç_=Çê³©-ä}iDÄ$ôÕrhÊÚMÒõîKÖ
ñ®Q¶Õ6Ä·ŸíÌeB×O*guL"ÃÍªúÜ®uü¥¶®Áj[JUKÃ·ý”[íCôåSÊƒBóT_†­ïMu'¬ú iÓ—a¼|íP«­¥ÆÕºúÖ»
V[K¾ßŠªéoµ—/à›ƒRsTZíCT}nWÿÊñC3Ñ¨[Yx’58´ÿºÞ)Ñv
=Yê»ÓõÄ±MþnÕC/¥úì¾ºèª­bµÑ7¿>{œíK†ý[g~®…k{èý-«-"""ºmÎ¶æ,×\ì5)÷=åúQ¨Ö²ó%ÃFDôë«Ù¡ùï¬¶¥T™šïœrï_ê;*ƒ
Ïºñõ9WºÚ'ýŽ½òj×rB3µR¸aÒ[—»ÖIãa“Êï_èù¨÷;Ò¿Yí¥/ÃþÃÆÚ¹VÛ4ZÊ;Éwè\úž·i¾A«­ôå^Rç«}ˆ:¦”Oº–šµû2ì$žä;}à3Îm¢ñêVÛ8jÜ±
k9MYÓ(jUMC«}ˆÊè}µÜ½0!xÎd2ìßê}/#°Ö"""þÞæ˜aëÝFÕçóý~OBkò%ÃFDôëË°›z<Óáy+îõ3Cò…RgØªàëb¿áf{©wé]íC2ú8~±zóK®åÄ­É
š¤¾Z1oµ£/ûQ†nµ•¾»RçÃ(e†ýt·>Þc"‰±Ã¾º;ª—cµ•šoÓÕ^ïZmãè[ÏOV®nµ•Þ»ïÆøj"%n™öÎ5®å¬3í|«m©ôÕ£Ð³«m}µùC÷I†ý
Ô3NÝo–ëADDl.6§[óbªÙ:Þõ{"i­uÉ—Ñ¯/Ãþ¥¶î¨Õ¶”ª^³ïœ’ñ–:Ã–¾º!¹‚¯6B)Æ¿×-\õ k=UÅj[*5ÞÚµNË_žÜÖjG_MåúV[I†®¯n
9f-?[µñWßzÞeµ•?nÝ·ÊÕ^Y¦Õ6ŽªCáZNh6ZÎÛ7¶=‰g¹.=¹k9µ³v²Ú–Ê?lØ;ÏµNzÖaµ£ï}›Ÿv9lµÍZí¶®‡z·iÆ g[¬;åüm3Þí ïá‹
7úaóžEúrfß±ï­Ú“¥8F›‹Í%Ã~ý±ÎZzq=ÛÇÏ?ï®;©ñ0ßmª}Ï÷wÖúäK†ˆè×—a7õ½ Æ¨ùÎ™!yX92lWW’+¨Þˆ«­2¥©ýŸÎ$©o[®~eúEÖz–Â¨
ïfôƒýÍöqÜ4õí«]Ë
}FC†®ŽKß÷rÌZúê…fØg5ü««ýâQƒk:„8gø‹ÎZùzG1¤NN¹2lÍ9èªs¡ÑÖ9%®¾\¿aÉšÇ¬õ,•¾çhÊÛ­¶qôÕkQMýÐ9Ý«-ÃV-rÝ?jN½deÓ¡&}Œ
""6'›C†­Zr¾:o¿û­vö~Qõ±õ;Vã¬¦
x¶ñ¾ïõ]3ùs+EÝYë”¯Æ’h9ÅúÍÚíSò×Ecz¬v!öîp‡ù9Ká›÷.qßž<cµ-¥_Õlç»({±Ú—#ÃÖ˜iWÿ!¹Â›O<ï­Í[.×MœÕÎZÏRè­ezÖ¾7t5ÛÇÑ›
'<ùW«­$ÃW¿·|ßköÑ…ôvõ’aG­[Ò5u¢jª„ÔA*W†­9e}ëY.ãÔÓHReÇ¾u
9ÇqØx—5èöûÌö²Z2ìwõn¬é“ÄØ'—I#ˆˆˆÍÉjÏ°õÎ¨õä§‡vkœ×#7Æ»'M2ÃNJ×ûÈ•z‹ˆ˜õË5›GûÎ·¡cÄJ¡ï½]w¬¶²¶o{H®ðÁ¸iúÖ¯\
6Õ;@o=1Ê›ß[mãª|Ò·¬z	dØñômë$2l_ü{x×^ÞuSÆhµcÔoØ÷Ê•aGå2éú÷¡*;ö­“žAXíã¨y>}Ë
}~Ré¶Îµ'–Öô×ØskŸ(Æ¤DDÄædµgØŸ®\?Â÷BCœù¶ó%ÃFD,¾±R¹Õ¾TúÆ8ÿ¼óð~«­L{†íËËiSeØ¾\Xïö[mã5&6$W%ÃŽg1ÛÚ²˜[ï¼•rÝr
Õ{"¾e…œÊ•aO8²ÙfØQç…¤ß‘¾eé}V«mcû Î°Çöœ9³ïØwÖ¾êéýõ?žÞsä3×¿%}Œ
""6'«9ÃÖï;ß³týNÞåA³(É°ËcÍ«o\â;ßªÞ…Õ¾ö¸òï5àTÍŽIV{™ö{ïœE}ëW.›*ÃöÍSQŠü!*«Ò{íV{2ìxú¶u9q1vÔ˜ã$Ö-_ß²”[mË•a
ûöírÚTv9ŸiHß²BçÕ­Ô[ëç›û8_ÕwÒûW'—­²ëÍù7¯;õ‚YCGµÓk`ã|\sû?ûõ×“>F›“ÕœaG½=©ß³½%6"byœØo¸÷|«ù¬ö¥0*oÚýÖ‚
[­ö2íví¬…\mÕ§Þc*‡!n)ôeg¡5ªã•a«°Õž;ž¾mD.XL†­¾u+ç¸ÛsC¹2ìy#Ç¶r/çäëÜ‘”¯öj®g)Œ:/(/µÚÇÕ·¬™ƒŸzN\‰¶jNžÙ×ð
/¾Ï.Oï=ö~gèø™ï4+6""bòVs†í›þÛl´Ú†H†ˆX£æ:û~ÓžVûR¸uúÜk}ë¤9ú¬ö2í¶/Kl×•¨ñŸVÛ¸FÍ’«’aÇ³˜mmYL†•Y&]ÿ8êœrn
(W†­:åXN-çþPlmY‰ög«6>ãûÜg5ü«ÎEw]vƒÙK2lDDÄä­æÛ7×Öáù+î³Ú†H†ˆX>5ÿ®ë|{úPÃßz^ÕÉlŸ´¾kŒjX…faiÏ°WŽ™v¾«mRÏ‚ÓlÔØÿ
Þî0ÛÇ1ªæoH~B†Oß¶=n£,&Ã~¼cwïºé9‡Õ>Žßï[VÈåÊ°U§Øµ÷ï¼ä:³}%uŸ1áá'ÌöqÔxdß²^èù¨Ù^VZ†u¼ilv±Ç6""bòVs†í»o_7qV
;«mˆdØˆˆåóÀÜ¥wùÎ¹K^œ|žÕ>I£î}ÜzpÕ>kÚ3l½Cîj«Ú¡VÛJwØ•ñÅqÅ˜×Ûº–£Åj+É°ãéû^›:ÃVßº…¾Ûª2Pß²4FÛj_®;ê\«³ÚWº§5
üÝõÙç>õr+«mUÏÙ·C‹JË°7Lž}…ï3‡Ô„·$ÃFDDLÞjÎ°Úqä°ë·Ã¶és¯³Ú†H†ˆX>£êOÇÉ“Põ®}ë²cæ{7Zí³¦=ÃVÍUßú%ã¦M½[_®üHï‡¹–óÃæ
½K¬¶’;ž¾}:4«‹²˜[þR{ìcWûMSß¾ÚjÇ_™~‘k9¡ÏMÊ•a+×W z×²´ß[í+]ß½Lèœ¡.5ñ\÷÷yòŒÕ6k¥eØ_ÕlçZß6ï_nµ
‘1y«9ÃÖ½Ÿë·CR÷@QïÝYmK%6"V³¿ÔÖ5øÎ»IÌÕ¢Æ(þùÀñ_]ë :"º6X}dM{†-•a¸Úo˜ôÖåVÛJ×W¿FïXmã¨g0®åYða/«­$ÃŽ§«o™†ûÔGÛ&
¸Ú»~Ç«m?Y¹~¸s9ëjß´ÚÊreØÒW·é“ë†Ym+ÝÏ?Üô|1ßS¨'–4Øµœ?lØ;Ïj›µÒ2lßóí3æß`µ
‘1y«9Ãþbõæ—\¿ô+Î¼Ò.õÎÝO»tö8¹ì!®dØˆXÍnž2÷jßyWYm±çö,Xõ€o¾Y»}ŠÕ>×JÈ°OÕì˜äjÿóÎÃû­¶•ný’Õý\Ÿ]Ù‡Õ6TÕÖÖ³×r
æ4Þ›;ž®¾e2l=rµ×ürz7Àj¢êH+Gs-'4¿+g†½ïí¥]\ËRM£¦˜¡œ®öŒ—W=ðWÞb¶Õ—?ï³¨³ÕÖê#ôZSn}Ç€Æ¤[mC$ÃFDDLÞjÎ°?7íB×o
¹nÒ¬öV{—ú½¸÷ÅwúÞ/ÎjõS*É°±šÕ9øÏêò{u~¶ú(FÍóçË¥êX}äZ	ö²Ñ“ÛøÖñ­'Fµ°ÚW²o>ñ¼³¸,v¾¯¬k'¾y™«ýÎ;’;ž¾ï4
öˆ»z{×/©ÚÓ>ãÝ¯G?Øßl/Ë™aëXó­ohæ^©ºý>ïgOjˆ¨ùkã\Óª%ÃÖ5Ïj"6""bòVs†5Œ2ˆUc§^`õ‘µû77ÞSEe'¹Zý•J2lD¬v·Íx·CÔ¹}þ
3ãÉyòxkÌ™}Ç¾ó-ûëµÛ'[}ä[	¶Æ9j¨«Ó{Ž|VÍã
ïºìoÝ½ãoµ·Ô¸Z_ýã8cúÉ°ãéê[¦!Ã–Úqp›«ýÿCmµ·ü~Óž®þ©­;jµÍZÎ[úê>èÜ¤ºýVûJÖWkHïÂ$±?|³~ç®þu~Ó¥eØ¾Úd;gÎ»Éj"6
""bòVs†-•)¸~?dýaóžEË_žÜVsSåÿNtÛ½™·Ÿ|©åÑ…ôöÕõi­W©$ÃFÄjW¹Ÿ/ÏzÇZçn«Ÿ8î|F÷óÞe<ù×Br”JÈ°¥ê2ûÖóTÍÖñ¥¨á2mÀ³™ÏVm|
Æú»Rë›oQN8ÒlåÖés¯õõ={Ø¨à}˜;ž¾mž–Û7ß¢\1vÊùVû(ç?çÞW¤j5Yí³–;ÃŽÚ&ª[_ŠgiúŒßoÚ=ßú»R«ûßg×{Vû(užñõ­ó“Õ>×JË°5w£k}
Ü¶¿Æjkùd×‡¼uÜKuŒ
""6«=ÃV6­<Ã÷ûìw¿+?}zýÖßÉ¨÷É­õ*•dØˆØ|å¡¡‘5=ôoºÿŽ3†Ì§²Ô3ûþ%êz°aòì+¬~\VJ†Ý÷†®Õžõ­ëWk¶ŒÑ\—V?!ª–Ân•–ë—>»ž
Q¸>·ö‹§î~ÈìÃå”ÇŸÊøê’Å_I†Oß~œ–[Ïé|ï|è7í„‡Ÿ0ûp©}Õ÷^Þ3ŒS_¹Ü¶ž“iœ¸ï»Sî8 Ó=f?!>rc×LÝû+{êø,Õç‰ã?>»û}
íoy¾ šNÃî|À[›Kçû8ûƒ¬´ÛWg]:G´ÞÝÑïß5C¦aŸBDD¬T«=Ã–z¯<*ë(DÍçU'ÓZ§RI†ˆÍÅugµ³ÎÕ5ñ‘af_.õ.ÎÉeë‡XËøüƒÏÆÉs­”
[úê6ÿÓÝG>)ô¾_ê{Rv{½NËõk÷[nõ}nåsgõ‘ë;#Æ´ôÕg‘q÷Y2ìxú¶{Z2l¹ð¹WÏñ­§òÅ×‹w¬©ÎuÔ³¸8õõd¹3l©sVÔïyåóÚn…žUûáØ¢ûäæ¥
ü<qÔ½Œïs+ÇÖ³V«\÷O=hYÈøîJË°õ,È÷ùu¬„Ö†—Úç´ïý¼»î¤¯Ï´íSˆˆˆ•hsÈ°¥î‡’È±Õ‡Æf¨>¶îu|g­O©$ÃFÄæäw—Þm·¥²ì5ãg^¢qgQý=pÍ
í5¤¾X³y´5w¯üaóÞ%qÇªåZI¶Ôv±¶‰j·.}iRkL¤Æ«½Úwhf×[ïwô¯LËõ«±~ÍÎC»}ŸùÿgïM¼¤¨Ò}íD”VœPœPAQeVDE@ZDD
d–±ª ªÀ
Á©=¶­-¸Î=çôêÛß9ßYw»îºëû?>~Õ}’ì½ãÈŒÌŒ¨zžµžÕµcÊÈÈˆ_ìýne^š[Îê‹®š4Ö{‘úëXÛ“/v4}Ç>I¶TMtß¶6Þ.[ÓkÀm÷.£_‡{2ßz
·kÐõì›Us¢æ¾•È°å®7ßâÛ¬Êu)“Z–öYû±õµù×ûjN—z¢týÍžß|ÝíÓ¡KvnzïÕï?Þÿ^ÔóA¦-ÃÖ>uÉþ¢ëñÄ¾C¯òÛ«¼æÕa²ë¬I:
§ÓfsÉ°åÜáãZD­k«2Ü>fIÌ°Õäìc¿ËUýÚ¬vˆˆi5lŽóüø£ê`~³q×Lå‰ªƒñíÖªÅêGå]g±ùµL[†­çxå¢Ö±ÉzfßÑ“š/ì³Õ[G×-ÿ ŸŽ·~“´MA
c­³&)ƒU½s«¦ŒöIçÕž9KnSŽ¿üù)­Ô¿Uç¨Î9ëüúaçÁ
®¬Ä’;š¾ãŸ´[ïD‚êgHålº~)—T­lsªŸ¬±ßnÞ=×z§:ÿ…ìw¥2lY·b]ÿ }:oÿÖý ã ëŽÚé¤ë‘jüZÝð«Õ¾ûVÕüV¡ íÕ5F5¼]çƒ®ÅÖù 6ª
Ÿdm‹Ë´eØ2hLm®Êü•wk^U©ÿnKï1NÐ9…ˆˆ˜6›S†-{µëô×þ(!žï37ü«Æ‰»ÆõêÙB÷ƒ.­í@DÄøÔ³z”¹ŠU}³
ÉóM[†-µßú]´ŽQ&-ƒ}ñ¡AuÁ‹ñÇ]Õ»i·¹ .É°£éû
Éró3Ã–Ot¼/p>ÙbÔrßÙÃÜ—•Ì°eP}Ÿ8-×þ„µ”çC1õýe3l©çBëØDöÜ±Øøê\çu,iç""bšlnvVÕÑ(z¦Ð³¸ú°¨Ÿ†úO)›Ð¸Â×ŽrŽCDÄä©qãê
ëj>[¡ú¨©.©µ-aMc†-5[µY‚j:Çáñ÷Ö²¶¥Ü*ã‰2n<Œº÷PKkÝ>É°£éû’˜aK]'ÔoØ:¢¨Ú:v7×í³Ò¶œ÷Ô¸‚j:Ç¡Ž»µåVçiÜ¿uz‡¦9
¬u™Ö[¿gŸ®Úø”uŒÂª>ÿêç¤{×¿—ó;‚ˆˆØÔl®6""6=³ó*Õ..DÍ¦~ÅäŒ.ÓšagUíÕã+×,tLµKý¯~ûýûG÷xÔ\¥T>¡÷ÝVmKõéþhÊWR{6W
2ìhú>¤fØR}*T;¾Øñ&ú®îŸ¿¼“j¼[ë2
¶ÔwQûçø½›;ñÞGCŠ™£¶Ôê|Pæ°ãJ}ê|P?dõí±Öi™Ö[ê¬ãYÌ5ýU5ušO#»L2lDDÄø%ÃFDÄ¦¦žGgÛ8^¡ó
èYVctT§¤Øº×>Uw4ƒ¬VÛ°j\ËŸÜw˜Ù6¬š7nÛkoÐ¼…d
ªñªšÑšã±Ø<·œŽìöHcÿ½¨ýÑÏì?öµÞ‰¨¾™µŽ0ÎñÂ®Ï8­óa¬4ó2×þÔ.]ó°Õ6Œ¾ï\¡µ\r­š»ì×²õÿ[mÃ¨9õŽGuý­ó,W]k—~Ð»Ø¾¶Y•Ï¹öó»
ï±Ú–B]£u­þ[ ðÈ9¿j÷«^¶Æh¦ifÿ[î)ø|ÐþÆu>ÈwÚVêßšR«9OmØ1Í:~¹ê7VïÎ5Çcî²FÜÓ;QßDDÄ¦
6""6eõ\9¾×ÀÆ¾š÷V‡ædRfñßÏ”Õ;46[y¤æãSþýðÍeã?Úû¦ÎÕâÚ<}^›l½®ì\Êô^Aÿ¿þ}Æã#3Ýp§¹Ì¤«>Œš7ZýO¯ß>¹ñüÚìk[:ÏT@
y²úù¥-§ÇdªœU×)õÍ>ùá¶ñª
òËþ£§Ï¹sçÞ;mÑ|µê£¬¿KS.[¬ú>ê{¦zGz7öÙêM#³× ì\¾5ï¬î©ï£2k½ƒ³–™tõ;§~ãúýÊžÙß¸óÎ‡·Vt™=dl‹bûá7uõ~R¿QúÍÒ±ÓwKêÚ®ÌZçæ
íÕ;kYˆˆˆŸdØˆˆˆˆˆˆˆˆˆˆ˜TÉ°1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•“*6""""""""""&U2
lDDDDDDDDDDLªdØˆˆˆˆˆˆˆˆˆˆ˜TÉ°1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•“*6""""""""""&
U2lDDDDDDDDDDLªdØˆˆˆˆˆˆˆˆˆˆ˜TÉ°1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•“*6"""""""""
"&UeØ
PZ.¸à‚Ìƒ]»fæNzù¢wûÆµ›–-»»êÃžÈ×ZNZÚ·_&_w®^ÕûÃE‹nYüêôÖã† Ï\sÕUÖb
FzÜ}wfÿÆF|ÝP÷Ÿ¿;Q÷ÿYZË+”[ÛÝ”y¬çC™QOÌL3¶…rã×_xñ‚É£F·ÞïÑL÷N2_|±µ˜‚Y8uÚ%Ö¾ËÏkªÏ›<¹ÕÅ¿ùµH
(«¯¼2S³ããéVf[ŠûŠË/ËŒrDF}½ë÷íYþuCÝXëý{†\{ø³-+–ßÓ÷þ™-ZX« MØ;ëW uV¾n-
¢1¨÷#™ÓõGÿ‡•Óº´–íCu8”+³þîDÝÿµÖÆ/j¡qdÙQ3ì¬{×¯Ü²eKkñ
±òÆÄIjÌR¾W^q¹Õ IqSÛë3¯>û\‹íï­|àÈömSŽØ·áÓÃ‡è?îÞñÆ¾ ë‡­{ñm³Æ¿ÔR}
ùô°gæÛãuÿÛÊfå©ú£ÿœ¯µü|Zµj•Ñ³Ã¹uþk}…züÀÞu·ÜØÎÚ”@f¿4¡eþ¾~ÓPÿ¿¬uËêm›ÇÇ‘£
„Å÷.úîÛn·šBD4gÈu×\“éÚñŽÌ£<ØØ@jý_ågHŸ¾™ú½»—X÷iùZË
€Êrùe—eNÕ×þê»§ÿäÐ3žwA§[nµÕ,±ž%âðë†ºï}owks"Óú’KŸS·¾»¢{P¦½dÆ`ˆÆIdó¦JØ«Û½Ö&véP.­9®5·³î¾9^ÿ_Ö}Èéúc
ª«ÚµP}áÕ/J‡æ$Qÿë3ñi-     *Ë¶•ïÞçº—W¿lõC¶ÚB¹2l©y)ãÌßóisÍµõùv­[Ï·×^}µµ
(3å¼¹üìð¡ÃÖ6v|h,•úôîXõþC§êjÏXßë06ì«zWsUC¼(¿nØ_µÚ:þAZë
€Ê¡>Ø¾~Ds&NºÈj_(aò#e<»×®î«>O#<žy¸[·Æ>PªY¨ÿ½`Ê”ßìßøÑõµ6—uäÐÑRÖ§¾ä’‹3_ÔùÒµîõ‹Ýjµ€òæTJÉ°›ú¨úðƒ'\Zm£B†Ëf
ÎºòËºÚŸ­ïr¡ÖîÜ>SïÀ!¼e’uÌ-­u     @å˜:fl×}¼æ¼±Úƒ/?ÒØ\ÍG¥ú’a¹ð¢3ó&OneeÙ¿0ñBkYÅ \ÝµÞ/Õü`µ€òB†
å$è|³ÚF…;¬ïpê³êq÷ÝÖ¦€Á¤‘Ï8ïe³jîÝ×ªÎÈÆ¥ïtÒ<Žê#¡ùÄUë%ûwÖz
 rìýèÃ¡®ûý×Æ½pÕ¶rŸçõl¡g‰î:YÍéØþæÌ—uµð=Ã”:3Ò˜cßúolÓÖj e„Ê
vú°¾Ãq©÷ï··ï`mxÐ¼š'Ö|ç:¶ß¨û¿.Zt‹Õ/âŽ·d^}ö9&á    H0ŸT¬rÝ÷—úy*û<_½móx=;ÄÅ]ºd”‰ûž¯¿î:kEá{'ðä£ý­¦
PFÈ°¡œa§ë;¬:lêÇ»eÅò{TÛlò¨Ñ-ÔXÿ©ñdêï«WŽj-ëóšêã¥¬wÖ”Ú·Ÿó³ÒqõÄ@«9     ¤×³®žË¬vÅ¢úªk]
ª·n~Á÷œ¨gR²dÆŒË\ë-ÕÜ˜ PA™âÞõë/~uzëR:mì³ôùkFa§×1TŸieÖš“1læ|ÕWdÖ.˜ßî›†úÿå;ä›/One-þ‘MË–Ýí:žUëÖ°Ú
@zpõÒó¯Õ.ÉL|úoV +%ÓŸ{þ×zNv‰Õ ÊGP¦øÒSO[Í"A†>r]Ãþ½kÕ¿ZïßEu¯OÕ×þê;˜;£0|ã	ìÚÕj
Ð¬Q¿œk®º*sk»›2];Þñw;ÜpCæŠË/³š—×}¿Æ´Zí’LŸûî÷fSF)ißGe_®õ’a$2l('dØéCÇì‹Ú#§ÇlýihþVïìûÎ>£hè‚«~œÆªN6
d2­/¹$£±¤ª¸sõªÞªyxòXÍ÷¾ç’¿ßW7Ôÿ/ÕAÕÜè³Æ¿Ôò†6m¬U•×6¦½NkP†]êºÔdØ é€Ê	vúPMë°õB¢°ãG#¸öÄƒï{•öûX
€8øí„‰~väÐÑ0sô„QË9üñ–I•óØïý_þ¤7+¸ù†­æEA† È°¡œaC– ðžêaµ‡ÿ¦Ó-·:eÝž]¬¶
M}Ö?é{ö(Võç.¦Öb!¸¶#íö®5«û¸öë‹Ú#_Zm‹…
a—ý¾©ÖVëj¹hÑ"¾ÒSdØåöö¼çÂÒ×_¿ÜjŸTÔgý¦¶×ÿ½†žòeY,%½ïíî<–Gwí˜mµMºéÚ)ã¼.
@Ó¦”¶<~`ïº‹S¾n8®mHs†}iëÖ™¯êþâÚ¯7_žÜÊj_,¾ûíé3.µÚ@ùHj†}É%Ÿ7—B¾—_oþÛªU+ïº¢fžÊ¦Ÿx¸WFïì¶¾»¢{íÎí3õîðë†ºÿÇuœÏýÿ
ÿ¡?º{Ç–,¹cü“#Êžo«f®¶yí‚ùí´½'Ö|“[_Wõ¿¾¬«ýY¿Í›–-»{ÒÈgZ„©¦ßñÜcÙÿÁžÞó-èóvyc›¶ë.4ÃnýõÎõYíŠAc£\ëÔ¶4U‚2ì×Æ½š"Î
ºvè;»gÝÚþªîŸxºþØŸôÝZüêôÖÊ¸‹A÷x¹ç‰Ž—k û«V[ß£¬¥ŸåÿÝ;uÊÌx~ÜºÚ²iœæª<÷]þ×þ©¦ú—ÇjlØWõ¾ú¿¨îæá
È¥Ô¶<w¯ÿZ9úYèžÙµþ4gØ{×¯ìÚ§/ëjÿPŽ>î¾{ãÒw:Ym |$5ÃÖuê“Cwù¶M×ç8¯e6må[×’3Ì@¹ÇÝw7^w•ýú–EåÇ7o«å–’¶×^›ÑuYùšµ
M.Ø·A™œ–ãâñ‡öž_ÅZµ~Ý@çJÿF¡öœ‰“.ò­SùZÜè<ömëüW^)ßËü24gÇÀ^½­æGïÑôÎçë†ºÿ´ÎU—G¶o›Rèùä»Ç*ÆJÕÑ;€-+–ßóÉ¡;\óR¢–
õê³Ïµ(Ç3    $_†}ª®öŒîË?\´èõ£ÞïÑLßû{4öñÐÜ#<žÑŽêÇõéáC¬ûPý­µ-ÅÒ”æÂQ_:õEqíú«Üß¹³µˆXxæñ'œÇTõM¬¶
P>’šaõ§ó'‘ºÖYËCPf©lÛj/æMžÜÊ·ŒbUÿNõK½»]=oÞ
ß¯ÿ/kýaTö¤??“Kc†­cíË%w°æÑÀÆ0ñégœÇHÛ÷çž$VÌž}µk¿Õç¿sHÆ‰ú]Ÿ®?öoÖ9j©>ÛÊo£¾kJvÐoP±ªw¡ï
 éÍ°•‹j.Æ¹“^¾èŽ·XÍþõ1kØWõ®ïþóT}í¯ÊeK‰îo]ë®ß»g©Õ6IéÓ7ã{/ ÏiÜ°áÖ"bÃ×¿êÈÇ['[m |$9Ãzï4wðäQ£‹êh§÷zº>º–­y‹ÃÖ´*
e†-?¯©®os»¯sTn¹±]Fý­u¢rãÜu¥1ÃÛV¾{Ÿ«­òUÕqˆ“÷ou­KÛ`µM+ê{îœ>îÚï«ÞÈj_)´Ýëß^|›unFUçÀõ×]g­þïa‡Wï‚žêÿ˜µ
Ð„™ýÒ„–SÇŒmG!eÔû7~4Âwÿ©¹ëKÉ”ÑcZ¸Ö«œÞj[)T+U}ÇœY·ð­ö'Õ|ï;~êÇ¨þðåDÛæÚ½“°Ú@ùHz†-‚2#å…Ö?Õï—êPû®›Q–[ê[~zøÐ!
»/½³£ÿ¨Ï¦’ak>ßzã¬ïá{‡.U/º©¢ú<®}Ö¸€¸ÞÕ”‚ÝkW÷µÎËB=y´æ;«Æ{2ìhê=å]ºX›    
=—y¬æ×½§ÆYZí‹¡jÝÚ®õªo¹Õ¶\~¤OA÷øšçÚ«¯¶_|9IØg4
(=iÈ°Õ÷QùŠo;­í«­~ßCûö³šŸGP†­wŒÙ[ª­÷¿ê?.5™jz¨‡æ&ó-#ëæåËºZÛâC™èW
uZ¾j‚ÔUíZøÞœ9m&Œ™Ôû‘Fµ­ïÏÛVsÒ©/²¯}~†­19§êþsVßÜl2÷ïÂ¸uÅŠ{}û*ŠÉ°…oŒØçµ‡?‹«Î®ïþ£Ryb9xý…/ð­ÐwÃj_)|¹{Våïº¦h
ºÝygæš«®j´Ã 7dÔXó»ªÞ^Ð24@˜kÙèƒÎû^û^ÿO×òtœ­ïQVÕß·Ö[ ‚~ƒ´_š¯qû{+Ðñ×¹“½vªÞõ²™³®üxåÊªbÕÒÖ÷¶Ôã:
 ù çc×}§æŒ²ÚŠÆ‰ÝP÷ï®õFéƒWj¢dØÊA4W5È+‰¯oý»¿}#¹¬ šiÈ°…ÞÅi‡o[£Ö]Pâ[V˜9óÉÍ°•S©¿æ¤‘Ï´¸îšk¬¦ç¡ù#ŽíÙ9Ï·mÊi
yÔç<»\ÍSf{õÎù¹!CÛ™Ÿaçt¾µ+„b3lí£o[Õ¿¼X4' ¯y©ÇŸU‚›Ú^¯:tÃ|ÇTïx¬eTŠGx0°¦‘ö+ÌwGªêï½*¤–Šo¼ƒõ}L¹×õ—Öû¾S¦
ü&ì÷4Ë mÚd6,YrGÐçôÛ	í     !è}owwý‰ºÚ_¬¶…â›Ë+i} ÂfØz^õÄÀÆZ#•&èóLú|M
Í… Lqí‚ùí²ýpKe¯n]iÏCÔ×.lÍ½ßóe‡açpÌGóò){RÖUl]µÿhÉÛ}û©÷½Ö2òñÍõ+¿¬«ýÃƒ]ëÞ­9-r³l+3KS†­¼Ñ÷Þ$Ž¹M{µµkÙª)Qì9”
tüt¬Õ_V¹¤ï»«Ìqéë¯_n-¯Rh?Ô‡×wÞòÎ«Ëí½cÕt<îÖÍZÄy¤9ÃÖ»Í«£w~qÔ'ÔïŠoŽÍcµ
ÃÍ7Üè¼WÖ`µ-Õ\TÍS×óƒžË“DØ;«žkv|<]™N%Ÿ…îÚ1Ûµ}ªokµ€ÒSŽZ¤Aªˆµ¹¨‡oYScŸÑØ_ä(s8–]·ë÷î^âÚNÍÿfµÏE¿g¾c¦wŠ…
ôëÎGuG”ÉY™Yš2l¡qC®eè76Ê|ùèóUVíZö[S§ä•Íé­|PªvŽjSø>ç\Ï}Oë½O’	³¡š;V{o½-ãë­:6Vû\Òœa—‚ º/•ª¯
M‹r>Ûª°¯¾jÇ³FÍ°sU.S©9ÙƒÞŒð¸Õ JLÚ2lá«c-O:ðqÐ8ª?xÂÕ.êŽåàÉGû;?å§QÞMª†µk9º÷¼'¾é&”
©¿wÐß”ów>Ž[ûäë?¬:æV{¾ÏV™æ¥­[[Í‡ê?û>×|u<ë÷íY®~·i¨O|òè‘¯\û¡wIQ¾‡.Þ|Ù_G?J_l2ìóQ½#ßû¨s
@óAY‚úçéÓ7£ynÔ7bãÒw:©vàÑÝ;ÞÐ3Àç5ÕÇÕg'hŒ¸µž(´½öÚŒæ¬r­Gs ûLR Ú_}cÿÃ\õü¬yn4F×š'Hê¸WbßTSäë†ºÿÌßõÔc«=
”Ž4fØVmgß\3žçìOYÈŽå@¿Ÿ¾}ÔoBôw¾ú°QkˆÇAÚ2l¡¹î\ËÑòÍ`}c”ô›nµM"a3låŠýì™)ô¸•›~=ðî—ö£Xt|ó™ïþ`Í£Vû,dØÿHíÎí¯¹ŽÉì
—&PÌ
Ñüës'½|‘2jÕš[%ŠÖzÃ ù„”ãúê jÂ4×iVWÍÉåÛ?¹eÅòø:ÝEà±žyk?j¼üð~¦æ™ )‘Æ[tºåVo?;©ùørQné»6®˜=;±ƒË‹Íaµo®özg¬q2å&
vŸûî÷nsØì¹¨nšïÞHçu	›agUÝÍ{ª9L“ÌÖwWtwm¿îo­¶añ}G56$ì}ö?²kÍê>®c²fþü­¶
ÐtÑ¸WÍ!þIõÁ*ë¹¥P­mÈEct³}•×-|«½òtÕÓð-[¹†¶ßZnZ¸åÆv™Ïkª?ñí¯j;ZË(z‡Ð°¿jµo»ôL«¾ùÊÙõL—ý5&
JCZ3l1yÔè¾å*ÿÉÖyªÔ±7Yt|\Û­þ¡aÐX'W{õQ´Ú–‚4fØÂwµn±ØðÎ;wº–U¿wÏR«mR‰šaŸ¿ß»—<Ò½ìCBá«#¢{K«mXTÃÈwlÂÎÍB†ýlX²ä×
1Q_«-    4=Ô?DµA¾j¨û³õŒR¬Ö¶äRµ~Ý@kyY•_¨ïxSãÊ+.Ï|YWû×>ëóÒ<ð•@Y‘Æó‡©}’U™ ”† LqïúuƒókÅí´±Ï
«†oûOÜ¿Yck|5°Õ—²s8ê·SïôìÚ53ê‰™Yã_j©¹5NHÛªúPª¬ùñTsÉµíÊ¬,.¼èBo-çJ½·Mk†­ÏÈ·ÝQ–§w²®9"ä˜Aƒ­æ‰E}ú5WsVÕDÉžËªç;
³ª_úûsç¶MÒû$Ý'ù¶w`¯À²ï‘9U_û«k=a¿§Í)Ã¾âòËß™dk.}ýõËuÎíY·¶¿îéÕB×NßØ?2l   €æ‡ú·?°oCÐ3ITãª‡&Ã®Ùññô´ŽÙ
KÐ<qö!*e+Ê²ƒjd%Ã(A™âKO=m5¯8Ê¨•UûöÁ7öCã>Ê1‡£29ÍÍ¦÷½ª«¬Ü<è·.¬a2lõáôµÛ¿3nÒšaë]‡Î×ò¢Ô×8(×2ôÎ9lÝˆ4¢ß|Í-­šmA5
æôÇZV¹ª…w? _ífÝÏZmESÍ°ÕÇD÷Šª;óÉ¡;Î}ÿÃ÷™„•    y¡ZŽ¾9h\j¾Fõ)S
ÍC¨zÙãŸ‘yâá^5œ¯»æšÆç›¸žmÃdØ;V½ÿækêèžßµÿz^¶Ú–ÕÁôe¹’a”Ž´gØâúë®ËD¤MyZ)QkõE=]ìOÖöb˜{âÓÏ8?[eèúÍ­qýÎ‡!
Î[h®P×ò4gqØþüêêZ†ú’Zm› ºïº‡LÊ\ÏSFqÖ*R?z«mT6-]ÚÙµ®°µjšR†­y×—Íœu¥úïûÎ‘b$Ã
h>hlPmi©úÒ6m¥¹Žt/–¸žmÃdØRÏÊÔ›r½eíŸoÿ•ûTe×z§a}>YÉ°JGSÈ°ÅÐ¾ý¼óäå[Ê9»wê”©«ÚµÐÚ†b
“a«ï·«m%s­¸~çÃw†}{ûÞmŸ3qÒEV{õÇwµÕ=SÜýz“ÎµW_Tïì/ª‡Vi–Ïšu•kûtlµŠj†¸Ö¥:þV[Ñ2l}4JÐ¼äqH†
Ð|P½Bß}¡ò÷S¿êBˆëÙvöKZª£ÌÖÅ»ýå±ÚKÝ'¯RŒ8È{L•ù”õSÓù”3©N¶òmÕ4Ì~†Í¡¿<@¥h*¶ú}ÊZ½móøRÔÜÕ2W¾ñÆuqÔ
c˜Û7§™ê™XmKE\¿óaˆ;Ãu{v-p-3L®¹÷£‡ºÚj\˜Õ¶)TïLý’­ö¥FuM\ÛVŠ¹7}}¾ÃfÐiÏ°õ~Ä[<nÉ°   šê¯ì«_¬ùzž2ÔZD
¥|¶U~ªœZó¹–¯\Uc­å¤ zŽg^.n»©}æóšêO\Û¡
ê/ØÔë“$‘¦”a+GöÕ••šã+lÍ‡(h½ª•å[¯g[þ¤9%T#[}Õ7ü‰“.Ôø¥l­Ú´ÉøÆÓ‡É°•Õ¸Ú~R}°Êj[*Jù;ŸO)2lÍÁéÛþ>÷Ýïm§ýöÍk¨Ïº¹¢<ØuLt
_PŠwMQð}ôÃj]k=Ç!TÝ’4gØš—Ñšó3W=‡è‘îçõþgí‚ùíÔ}ò¨Ñ-”…«Ö¿æ:øxåÊ®ödØ    Íƒç‡ó>»Íå•¢ƒr=Ûö¾·»w«æ6·Ú§
ÕdõSõW·ÚÇAûë¯÷ö¯QvSŠL
ÂÑÔ2ìÃo™äÛ©œÃZNT>\´è– uÊ“Çj¾W¿è!}úf®¹ê*k‘ç³Ã‡»–WT†}èÀ«m©(×ï¼(E†­y}÷zák§w®6šsÔ×¦9°hÚ«­}çC¥³}ß÷'lê(4×[
ï}¬üZó¦hLÞ¤‘Ï´P=Ÿ°ï6|ãPÈ°   šÛV¾{Ÿë~PÏsz®+–r>Ûª´¯ÛÂ©Ó.±Ú§…½z{éËÏŒ ÷ PªròhÍw®õ/~uzk«=
”–¦”ak^<ß¾dU¾b2Ì|Tÿ:¨>ÒµGN48tî’O1¶¯µDŠûü}y´êÈ¸æoÊ½‹¿–v”aúÎ‡J_|ß}'­¶QiŽµDZ¶lyîþðÈW¾Ï_×j}× íç@†
Ð¼ñù¬Z·v€Õ6å|¶ª]áêÿ¡ùdÔ×£)0mì³Îç"©ZÙ¥fçêU½]ëÞ»~Ý`«-
”ž¦’a«¶nØ95OZ\uöîÚ1Û·Ím|áEZ‹¤˜ûÝß¾q­«m%s­rþÎ—*Ãªâš/ÔWäT]í/q¼ÿO3ºóªaµ/%¾9ÃÎ³…æ8§ãë/¼xï³×~wl³µˆ@
È°
š7¾giõ}³Ú†¡œÏ¶YÞ›3§k}û7miµMz¿à;¦wt¸Åj^¾gS½´5]°’@SÈ°olÓ6£ú¹¾ýp©¹­åZ\yÅåßŽõ{w/‰#Ÿ,&ÃöõíÔ6›­J9çK•aßü
Œ®\Ú7¤+ïnnhLœï|X3þVûRâûþ|ÝP÷ŸVÛ¨l}wEw×ºÂÖ-Ic†­}sm³îUƒ®XÈ°   š7ìºT=C«mÊùl›EëT¿ëüõé¿Í5×ZÍ2 Íaæ:žz‹#_
ÂW{fÓÒ¥­¶ PÒžak<ú‰C>vm]ÕîÅ û÷®õí_±õŒž|´¿÷ØÅ5Gm1vPÍ{V
Êù;_ÊûánÝ¼û¡~×Y4¦Ëõ7ºïpÕinè³ðÇ¸úGJÐœØ×^ïëßxŽ°ãÓ–aëºíË ¾%Vû0a
4oNÜ¿Õu?¨þ#VÛ0”óÙ6õ¹v­sâÓÏXMo¹<¼mË«}±øêÆ‘
@<¤=ÃÞ³nm×¶+»QÎ¤w‘¾>Úª=ÒÿÁžÖ*¼ø®±_«ùÁj–b2lÕKñ}¶•ªÓPÎßùRfØâÓÃ‡¸–¯~×Ù¿ÙºbÅ½®¿©Z¿î¿ƒîfÌÐ¾ý¼çC¹æöqùe—y·Mï¯âÄ×ß
ì÷4m¶æëôÛ¸æò$Ã   hÞÔìØ6Íu?Çü6ª-¡É¾{Z«}1Ì›<¹•k+lµ-S]·ð­ö­Zµ²þ42÷ÞuWFóáøŽçˆÇBuí)ßø`eIV[
(iÎ°_}ö9çXeÓÊÆ²Œð¸wOÕ×þZhŸJßøÿÜ³XŠÉ°…oüÔ±Ý;çZmKAÐù÷oa©3ì z¾ê­¹è¾n¨ûw×¿Wª|Òxçµ×¼ó°æ~‡+…oÎA½›°Ú†%(Ï
{ž¤-Ãöm¯Œ«Î6   @ófÙÌYWúî9‡÷{ÔjîEmUCÒ·li-£ìÚÕy/gábáÔi—h=çöýÌÜI/_×}»jÃÏÏkª·hÑÂZLQøÆ°k¼¬Õ
ÊGZ3ìû;wöŽE_ÿöâÛòÿÞ—gHÕÑØö¨øj"×îÜþšÕ6,ÅfØ-y»£«½êeé·¢Üoq×Ö(u†­Ì]µ{]ëØ¼|Y×Yã_jéú·ãö®³–Ý\ø¤ú`U¹Î‡BÐçèÚ6½ûŠ«Û
ÚóÛ¹Ö¡s+ì½ZÚ2ì :LVÛ°a   4oºÝy§÷žSã »ÜÞÑZÄy¨É±=;çù–YŠ{ZêƒçZgýËƒÈfØÿ}þË‡‹ÝRÌ\‹ã†
÷ŽIÍ÷XêçíZ÷®5«ûXm |¤1ÃÖ_­"åÑ®l)¨n¶tåÞÊB\ËRÝ-«mXŠÍ°ƒê6W}øÁVû¸ÑgãÛ½OŽ“RgØbÃ;ïÜéZ‡òG½/vý[R¿WåæÙÁC¼ç‚ê´XíË
APMì†?i57Q_}ß=[”û¥´eØAµúãš‹†
>;rè¨ï¾S}â”h­«®¸"3aÄÈÌÑÝ;Þð-Ç¥w1 þÏ®u–;ÃÎUÏoê›óÄÃ½2­/¹$p9š;Lý¸}µ9sUíØÀ…Å„žÑ]ëß¸ôNV[
(iË°Õ/Qu0\Û«ZEAùÇ­ínòÖvãŸámëbÉŒ—¹–£ßBeSÅ¢ßJ_M¨°¶ðåà2ÎºRn¸!S½uóÖßù²åù¯¼RüAË¡¶Î)Õ®ñß|ãì¿[jöêÝxŽ—b{¯¼âr
oùöô—ZË(¾í<y´æ»bëß¨žœïèýSXÒ–a«¯†o¿õn£Xî¼ùïó 6
@ó!hü_®§êþsýÞÝKjwnŸydû¶)uU»ž<Vó½ÕÎ§µ]ÅâZg%3ì\õ||îYéOõ›“6m¥czºþØŸ¬öY?­>¸¯Øç­°ø2ì¥¯¿~¹Õ
ÊGÚ2lUñmo˜1&“GvÖÐ–_7ÔýgÐ;Ø|?ÒÇ{ì¿:½µÕÞ‡ú™Ü¼q¬oÙ2J†ýüÐac¨n¾áFk(ãÔ{T½“™5ì«z×µ-Êœ¬¶Q(G†-T#+è³ÊUó€ZËK
/?3ªñ»¢þäã¶®……ú 4ì¯Zí;Fúê;‚êžïßøÑˆB‹¾ÃªéãZ®¾#Vû\Ò–ak\Œ>gç¾Ÿ;7¬ö>ôYèÞú›ãõÿåûÌÈ°
š¾ñÓÅ¨ûÍUo¾y½ïß­m*×:“’aÇá'‡ìP¿§ráË°µÏV[
(iÊ°G=1ÐÛç5J-ÝkW÷õí³òº°}¨•ÅùúI+Ÿé}owkç¡wŒšw"¨¯xÖ(¶rãömð-K9W”>Ÿ¹êýH&wP˜ÌlýâE·ú¶eÎÄIYíÃR®;ì»}å•…ÎZ
²vVÍª9°¯¸¼ð|YÇ^µv‚ŽSÒÞuë¯.ŒÔø¶¨9vÿ{z3\]ã¢ÖÕI[†-oÛ2ÁwL5ÑjŸÏ˜AƒÇŠf%Ã
h^è^]ý€­ûÄ°*_Õ¸¿ ,ÅÚ¦bq­³©dØê'6“‰2l€ttÝ=òñÖÉÊ†Ké¢i¯†ê¯TäÄÁý›£ÌÉ¨¬8(“Ú·aý0kYÎýí“¾å¨¦ˆj´½6¸ë­ú~¯ž7ïÍïë[V¾
Q2l¡uøòv©ÜlçêU½o¹ÑŽŽ”aN3¶…+“™i.Œ c¦ß‰ ú:žê;óÅñz¹2lÝ©®„õ™é\±–•$ò3ìœÏèÿÔìøxú']fÜ‚¾›z×±wýºÁ¾~ÇYõ].Eí’bé
ÕíÞÀš1šÛEuÝ,t/¦þAÇaëŠ÷ZËÉ'¶2ç sáðÇ[&YY¾®E¯>û\=G-+W2l   €æ‡žÙ‚Æt‡Q}PÔç,û¼ÒÜ2lõáSP¿oÏò(õ4Ãªú#Ï jmFI
ÃHA×Ýræ:«ÜÇ×¿N¹ömÚZ‹ø”77_0eJ¨ÊÖ•»í£®ïÚO½OÜ²bù=Êîw¬zÿ!ÕÙúòXíÖ1r5Ãª÷æ·Fýd•ó(£Tí©k·¶]¹uPþ63ªÑý·åü
Ë¡-›Æi…ìû½;W_àìßT­_70håÊ°…ÞÅXÇµÐ¾î•Â—aÿãguìOªu¦w
úœÔZïnô¿Ø»Îú~ä,çßÚ_½µYCõ‚¶_ß-eûê«þH÷ûk>ßÐ¦M¦{§Nß½W®ì¡¹>ƒ–¡yg£¼Ë’Æ[Ïaæqù²®ögåÙºfêüÒuHµ–t s=Ë—
 ù¢¾5Ac”}÷£ª	™_ï°¹eØ¹\wÍ5™Yã_jY½móøsÏ8ÿÓ:†Aê™QÙx%û2‘a¤ƒ4dØêík¯:½…2ãùqÞ:·ÊÝzÞsµˆFTÚÚÏBÔÜÇ_«ùÁõo…dØB¿
…ä>a ›™Õk’2lÝÏ½Ñ{kI#l†‡Ê¯»ÜÞÑÚ¤Š³aÉ’;¬})ÔÏŽª)´æ[3l¡œßWS¥õn°®j÷b×¿‘a
À£<˜QÿçÓ|ŽÙ{Eå±ê¬>ïÏÛVý¢Ö ,Iº÷×ñQÁ	#F6öuW¿{ÏÏ¶ÕNód*³ÞþÞÊ4žÒ³^.|Ï¾dØ
É"évPÍ¥BÆÜçTëT]í/:>aPß@k_Ãª,T}9õ[àë¯\h†-žêÿXæÜïÉŸ­í(D3kýYŠË•¤[T­[;À·­Ÿ~Æjž8Ê•a+»ípÃ
Öæ$õ1·ö)ªêRh~-Òša‹½z›cY¢¨ñ.—¶ní}ß@†
iG}€òïsÕ7ÄjnÞš:õb×³ƒÆ¦[m |$9Ãîsßý_ÝŠBÇÜçsÉ%Ö2®Û³kAØ÷®KfÌ¸¬Ø>ÎªÉÐ±ýÍ_f)2l¡¹UŸ¸ØíÍªñUª!‘?¾Ê¢˜c–´[9µk}ÚŽ8Î
Õr£PŸOný–8Õ»ÍÝ§ºjiCµœOÕ×þjí£¥Î}e­ÅžiÎ°E¿x¿¯aÕ|¹õóÈ°    ©â«µZHUÈd”-¸Žçèƒ¬¦ PF’ša+cõeDz¿¨:Ôqñ@—.ý
Õ_ØZF–Çz>”QÝk¿ó­Ý¹}æð~þÃòJ•agQž«q<…Ô°Ò‘êó8ê‰™bjW©v°ÆYëËWµ²ƒ–[îÛW»@óuZm“ŽæÖÓ~h¬]¡ï²ªÖ¹òEÕPK3ÊøWÌž}µöÇÚç|õ
nNc@ºÝy§µšP¤=Ã×_w]cÝ¨¨ç—Þ±¨žSþ»2l    hªØ¼q´ë^wÒÈgÂuÀƒóPí×ñTíC
HÊ»v¼£bÞÞ¾ƒs»®¹ê*o›RÌû¦LÜ·¾B2OåÑšÓNý“]×BÕR-Õ¹©­t|\Û¤y.ãDçÁ÷Ê¨/µæKS¯~ª
¦9ûT_Vó¯i›•Ûi.ŒV­ZY‹„~4ožr,Õ×ú²êkN7õV-”«®¸ÂZ\cM.×±+E¿_#®ÏYYe›k’Qã+..»ôÒÆó[çŠ>+õª®Œ·®j×B½Ò9VlŸã¤¡ýQ¿l
Ÿ:W}ÇBßyÍSªï|Üù½®®s]ß´¡mVÿ|½/qG½oÓxýMP}B}ï\Ç¤©}    ùá«}¡~UV[8ŸÞ÷v÷ô:öoV[
€¦†2.ÍU œ\Ù|)2T¨,¾±Gz`µm*´¾ä’Æó[¤Þ½è¿7µ¼:,Úw½›Ò{¾óÅ¡÷UÙã¨÷'     ÍaôÕ]9àq«9ü õåkØ¿w­ë8j¼ºÕ   M¨î¯Þé
Ä‰¯žÈ× uÿ®qÓŒÆ•«6ªëª¾!uD   ©ñþÜ¹m]¿{ª+aµ      ˆŠæoÔU¾vïúuƒûÜw³ëCcäUßñäÑšo\ÇŽ>Ø  ÐÑ»Û¯êþìúÝ›þÜó…Ot
À„#3Öœè3üÙáC‡öU½¯y¦rµ–ŸVž:,“¿¯êcæ›¯ì¼¾hÕ÷Å=÷  @¥™5þ¥–®ß=åÚÔ@     €R2yÔè¾Ú––Ö²ÓÊÂ©Ó.±öÝåñû6\yÅåÖâ
RE‹-2Ÿ×þÌõÛ·ná[í­ö       ÅÒíÎ;3Ÿ×Tbe´dØnÕ—}í‚ùí4Ç#  @SãÉGûg\¿šZóD      ”å¯ê“­º!VfK†ýW¿9^ÿ_;V½ÿÐíí;X‹
H-uU»»~mÙ4Îj      P nj{}fê˜±-¶¬X~ævÌ¯ ÝëaËêm›Çï^»ºï²™³®|âá^ê @SçîÛnwöÁ–šû           RT­_7Ð•_väÐQ«-
@©¸öê«3¾yŸg©¥Õ           T¼?wn[W~ýUCÝ_Zµje5          (KgÎ¼býÛ‹oËwÂˆ‘VS
(µ¼0ssëëåM—\“ùMËV™N—·CDDDDDDDDDDL”/½)6""""""""""&U2lDDDDDDDDDDLªdØˆˆˆˆˆˆˆˆˆˆ˜TÉ°
1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•“*6""""""""""&U2lDDDDDDDDDDLªdØˆˆˆˆˆˆˆˆˆˆ˜TÉ
°1©’a#"""""""""bR%ÃFDDDDDDDDDÄ¤J†ˆˆˆˆˆˆˆˆˆˆI•»éÚõê™‘ÝÉÌx|dfÑ¨	-—??¥U¾Ö2Ðm¯v2®ã9ï©q¼ÒoxfHçÍe
""""""""¢-vÓò¾6·e>œüÆ•_oÚýÛ_«þù—#õÿoÖòŠµO‡.™a{fF÷x´Ñ~îÉô¾©³Ù.é>Û£Æ:¶gûÝk·ŒU®ÝåÊ›Ìe"""""""""â?J†Ý4TFºyú
¼6¿ªûÉÊVK‘a÷¿åžÆ¾Þ{ß\zçWvNÿeÿÑÓAëýµºá×wÚr|åúoœp²wkI2L†ëO»ï;|\k¹ˆˆˆˆˆˆˆˆˆx¾dØé÷±[»e¾Û²g•£Æa?ßs@fÏ›
ïtüqgÍnk=–g7ü«òì!w=`®7
FÍ°³Ö¼³ºg·«o6—ˆˆˆˆ¥óá;g^8ªqüâþùË;|ëÝ®Rÿ]ýB–<ûò…znü;kYˆˆˆˆXzÉ°Óí€ŽÝ3göÕ~ne§>­åç«Ûë^žu¹ú[Ë.Ä3Õ'þ¤ç‡î×ÞjnK
%-4Ã–§6ì˜¦ãh­ãóÁ¶3iïˆˆñªq‹7øíÖªÅg7üÅºgËúÎ˜—/´–ˆˆˆˆ¥•;½*ýaçÁ
Ayð§«6>µfâë—¾ÜgøßëQçj­#ß>7w)8»¢êŒ<Òþns{*¥Ž}îqpÛ½ÇWýyÔwGõÈƒöoÿ[+ºXë@Ähj.UÕ&ÒøÓë·OþiWíÕ¥Ïÿþýz¨þçŸ÷Öœøfã®™zg¦
:?Œ@DlÚŽèÚ+óÃŽƒë­{P—ËŸ{å"kùˆˆˆˆXZÉ°Ó«²Rß½ög«·ŽÖ|ŠÖ2¢Z®[þ´çHõCíî2·)©ŽêÞ7ó‡]Õ;\ûöÇê†W_nkˆèW¹óœaÏµ8¶üƒ¾¿ì­ýÔº¦
yöà‰³'ÞûhÈð»2×‹ˆˆérrßa™0sû$ÃFDDD¬¼dØéTÙÍÙƒuÿäºÏV]i«}¡†Í°Õÿñä[Ç©¿±²ö¬‡­¼÷ä‡ÛÆŸÙìkkòôG;¦XÛ”dU»ÀW/\ÇÁjˆÿèÐ
NeŽ¼½ês×À­kHT5¶¼nÅºþ½Úu2·“ïS]Îè=¥uý’±ò’a§Ó7†>ÛÂyŸ½·þ«RÖ’öeØg7üù³Õ›F.3éÂÞ7…›ûfbß¡å¸ÖsƒÆù[ËJ²#»=â
;féyýf{D<ßo7ï™g]7ŠõÌ¾£§ÆÜ×ÏÜDDL®ªýÃöêÖ5ÿluýõ9P>¡ÓÿÎýw2lDDDÄÊK†Nk—~ÐÛu¾cö¢öVÛbÌÏ°Þ}äàÆ©s¯
›[»ÔÜ:ÊÀ}Ïßm©Zh-#éj\û6çÉçRÏ#VÂrdØRýöÆÞÿ˜¹=ˆˆ˜L>óRKß5þ×Cõ¿ìœ½äæ÷ôv¶Õ|'ªW¥1…êwa­K+v:ýaû5®ûñR×XÎfØª²â
…i¿Qÿ«M—??¥•ïCý•Ó\[n~õÍë\ûV5wÙV[D<ß°¶j}µaçôïm¦¹U7[óÜ~¿mßrÍëhµ—¬:ö
ã%Ó©¯¶~»µ›Ù“#v:UÍWÖ«:ÙVÛbT–³ã·‹;¨Î³õ·QõåòrÊ£Oší“ìÔÇF8ë‰|òþ†áV[D<_o†½ÿèéê·ß¿_ýæºáÎÀet½ºCæ•~Ã3šÿVs¬
åØ‡¯îam""&KeÔ®kº®ùªófµGDDDÄdI†NÏTŸøSþ=¹æx´Ú%Ùu/ÏºÜ—!½3æå­öIvT÷¾Îç¨o6íšmµEÄóÍÍ°õîN}­ç=5îåÒV[—#~ö@Ãï}×Ÿ_«þ
™¾ØˆˆéòíÑuDôbµEDDDÄäI†N]÷äiµK²¾¾ÊòÝ¦ÿÆjŸd}saò…Ýl†}êÃ'¿û!óïÃ¨÷L®wƒYUSÕZ""&ÇCWvs]Ï5‹Õ“gsÌ°Uoãù
ž2ªç¼çÍw:~¶zÓÈï·|_óž=pìwª“ªq†úïªû¬ùÉÕÏ¯fÙš^«&¾Ö:
ã]÷äšOÝj—d'ôìÍ°çxá«}’%ÃFŒOÍ¯5ãñ‘æßEu÷oßê»©F‰Õ“ãÉuÛ^t]ÏÓ^Ÿ±¹Ú\2ìW™Ñ|^?î<´EcÏ}9EXÿXUstëkó¯ïÑövsÝ¥Ð
µMiÏ°<3þßñ.õ\•¥–1ù>Ññ>ï{´Së·O²Ú#"brôÍ q7V[DDDDLžÍ%ÃþtÍæQ¾l¢=T÷Ó²g_¹ÈZÜº¶%í¶oÌ§ê|w¹ò&³}’%ÃFL‡g7ü+ßUDÄô
«q”®ëy¿›ï1Û""""bò$ÃŽÇ£ËÖ>RÎœÕµ
iÎ°5Û™}µŸ»öëÈ’UZí“.6b:<{àØ·®ïªÆ¤[m“¤æ \4jBË#o¯zà»-{ü¼·æ„êc)£×j,‘jd©.Ëì!c[¨Æ–µLŒf¿÷dÖL|ýRÕ+S–Öxüž8«ÿÔÿþtÕ
Æ§–??¥U!ó…ªÍ’1“.Ôø²ï·í[®ºgªƒvö`Ý¿ì­ýôÛ­U‹-ZyïëGeÊuo¢shÎ°çZèœÒ¹¥s¬±>[uÃ?ë?uê\Ô9ùÖÈ
²ßitÐ÷7Ö®«_±~Àï¶î]¢Ï'÷»¨¹L¾Þ´û·ßz·ë‚§_¼à¾6·™ËLƒ:tmÉžÚÏÜýÖqÈžºV•â|Ð}±ëz®{2«mÒì}SçÌ+ý†gÞiú%Ù:ˆ:otNéz’Uß}Í
QóÎêžªû­º[MåœBDDD$ÃŽÏýó—w²¶#.]ëOs†½}ÖÂv®}Ò³oSè/ãË°·ußR«-"–O_­©VvµÚ&AÍ× l#h~J—ÊV•%õ¿%žëí;c^¾Ðý;uhKP»ñ½f”Ï|³
q×ÌÆ¬ï`ÝgÖýÐ˜î>rPÙÌ¸‡7×·Myã*×þèÞ"ÿoGÜÓ;sòƒ­ãÂÖ-Óïœö¹ûµ·šÛ¡ÏWÙ·o¼€ËŸ÷©Q6j-»P‡Üõ@¦nÅºþ:‡¬mÉUû }‰kŽÕ‡p®ç`Ý
?µÓúUNçV6w×y—û®G«µþ\õÞ@m”/j~ëXäåÝqÍW[nu ÑüQÏ‡sß—?ëÚUÌù`­£+•w«†žÎË“nÿËþ£§­íRÇVç±®åz§…ˆˆˆX
É°ŸÕœŽzfP?Ý3nž>¯Tÿ‘l*ë9Dÿ^ŠyÆòõå¡iÍ°W¾øêÅº¿ví“ú.YíÓ`SûÌ›¢£{<êÍ@^<Úl_IjwWcŽhýNY*ûÞ1{Q{±Öd”[ëRßBeÔÖö
I-ÛZÜ†É°{µë”ÑÜÏa³ë|Ú}x¿j²»ÖÇç«öqæWêg«ìÝ÷ûVí“úŒÛ7j†=wø¸º÷³¶OªO»µþ¬ûõÖ°ˆ¢ŽëÞ7—ÞYìw±\ê|Ðµ#êû³|u>è\-ä|°–]ˆ
•Ê°¿Ù´k¶µm…¨sSï ­õ#"""&Ñæ˜a«Íg«·Ž^5ñµÖOuyØl›U÷Ó›¦Í»öì†ßûî
­>fq¨mv­;m}ziwã3¹ïXê}‚µŒ´¨gP×>ZýÃ±|*/r~OÏ]óÃô‘­”OßÓ'óÇªš:ßµ´õ{¢k´µnŸa3l½÷ýi÷á½ÖöäšÄ[ýƒî
ÂªšZÝÚí¼uÇµlY»ôƒÞÖ¾†Qã£~Ø~`µ¾(þ´çHõˆ®½Ìuû›aë]UcMÛ”5L†­÷SVÌ{—ßmÞÿv¥æ«rÞï·í×Ú—(êšõ|°–YˆM-Ã–zÏ¶vÒÌË¬m@
DDDLšÍ%Ã®]ºæaõ³ž9hl¦Ø>-z¾<÷¾ÍwoXêþ
¾làôG;¦Xm+mŸ]ëežxoÓ0ŸöÃ=s–Üf-+múö·RÏGˆøßèØ=ãû¾î•ÙWXí+å˜ûúy·»XÿXuì_¿`K+ÃV}Ö w˜A&)ÃVtÕ`±¶9Šß¼ÿ=å¡ê×ªþÉÖß
GµØñb:'|óW«²úgîícnƒK+ÃÖ½ßÎÙKn.¤Ÿ¼•aëóÒ}µœBUñ¤Ö4Ö=Œ®Ö>¢Î]ã¬mÈj-¯+uVÊ;«Æ¿XÛˆˆˆ˜$›K†·ƒïìáÍ$K]ûÐÂ•Ý\ëÝ2
c~[«m¹T½RÍ5#5ß”Æ.jÎ)ë~úÌ¾£'5•µü4úÍÆª9®}ž5xL«-"–Nõ7þa{õF×÷óŸ>>°*©óêwÈêŸ«ß)ÕfÞöÚÂ4 Þ!ê?•å…©Õ«yØ
é”a+£TŸÛ õ™¤Û:~òluýÕ³U}å°u6¿úæuaê\(mœOË×|Ž!–­Ï…¾Ë×x4µ7¶éÏªg®sLçšjvè?užÚ°cšU{Dç´Þ)YÛ’oP†­¾Åô¶2lõ‘j¯
c¦÷šËRuŽ¿ýþÆºÑê®ã£ºuV-ï}4Ä:åV×†wUï ÚîÜóAõá²×
Õí;½~ûä0çÃÎšÛ"ƒ–S¨IÍ°uO­ù5®TçŸjë=ŠêgkŒDP?‘¿/ãÜõHõû­mADDDLŠdØ…«1¹®{Âï¶T-´Úªúúøú?Mè=Øl_.U;ÖºwÎUcÉ?œüÆ•I¯_¬z
~wíû§«7°Ú"biÔØÍè|¾wÔuHŠÊÕ¿óÐ&ß5U}³•»Z}756FùYPŽ¤ŒÄÚž|}ö¯‡ê‰2¡Ë$eØ>•-©^™²Êüe©˜ò»0“KeÖúÌô›Ÿÿ›©L1LçBßjÞC
ß2³õ›U<hÚÆSç^4~à‡íÖEÍÙ}¶r:åØÖq
2(ÃÖÜ)Þ¶ç®-KÆLº0Lòì<AÛúÆÐgúÜJ¥æ‹ñm«Î§ºÆ-C×(}¿‚Î]ëÂ¼KÔ;\}ï[VM˜qIþßúŒzÆen†­wUÊ¥ÕGFã(¾±³Ù^ç“ú“h¼KÐõ]ï•¬e
!"""&E2ìÂõå´Siµ-ÔyO»ÀµNeÀVÛr6ÃÖ³Z©k¯$Eea®1Ìz¾®T?Äæhï›:7Î%«œÑwmR?áBëh”Cß;±ìoÐ»0—‘«æ¡êÓýæ“ã"eg¾Û§®ÊR”mNí
ÿTfXçž™~îiT9’ÆçèßŽ¯\?pêc#ÌõÇmØ[}Û•YË“úŒ~Ù[ÿ•µÌ¬Êø”—†y×«üêè²µø–õå‡ÛÆ[ËÈWY¬wÛÎ;Ï÷`.#ÿƒj’(ç·–‘«/ÃRŸ—¾K:¿Ô
5{ÎìöHFçáº—g]®y:WO˜ÙÚµNý/üvóî¹VžïR×_Ÿlýÿaòðr¨k‚ï¸ê|˜Üw˜¹Œ\u>ü¼çHo™ª5n-#_Í›íZÖôO›m+íéõ»^ÕXF½Óo–õ÷Aê>;èZ£1
=Ö2“ váúæVTß*«m!ê¹Uãº]ëÔ¸L«}9
›agÕør=Ÿ¸ú¬5%•¿¸ö?‰c„Ó®ÆUgýbí–±ßmÙ³@5¬ë‘þþ¡vw™Ë¯”ª}âëÃ«~‡…Ôaª;«~Òžå6Dé6ÃÖ;<Íß;à¶{ÍeVR+Ã>{àØ·š{ÑZN¾/÷ê·²n
ùý¢æ¡ú¼|ó.ª/|”,TËòÕ<Ö9Sh kåµÞåž;Ç£ìsØ[õ_ô2§·O_}’o7ï™¦ß°Oåé¾ñ …ö¡Ó¿žî>Îz×¥†u®zŸï»Ï-ä}š3ì¸øÈg?
©ÚEV{DDDÄ$H†]¸º—vÝJ«m!új—$q.Ç¨vVÝ_«®_SÍ²•‹)ëpí»êdZí1¼Öõ&WåZê¬¾—Ör+íž7ßéè»~Fí›ï²g_¹ÈwŒ–Žº†G˜[5J¢ö¯”A¶ê
óÎÃW‹]ê÷bö±g–ªMá[¶ú[í³jî7ßr´«}/>4(ã«+e~ç0¶úF«µµ¬0ª®³kgö=%{÷©úÑ®åkQ«m©
ú~Û§B×0_ÖªkŸÕ>W2ìóÕ¹ã:…ŒË@DDD¬„dØnÕçYÏÖª7©¾UOªñ¦ê/¦ŒU}ú‚Æ¡[Ë¢úJi®×zþ°ëðõÉ³–Qnõ,™Û2;¿£ÆÁ†©…ª~]M5ÓÕ˜}WJG
nªûŒX	­ëLVõA+v¬v¹TÿG_½\Õ=µÚ‡Ñ×w÷»Íûß¶Úf Ê¸ÔOSu)¬e$I_†­ñþV[Ë­¯/pÖ…Ñq*ö÷]µ†}ùp”w¾úÚê‡lµ
£îœçËÞú¯ÂöÿÊ°õûºiÚ¼k£ô=·T_k×º>óRQ™~Võ“pÕ)Ñyö˜”J]\ûþÃŽƒë­¶aÔµÌµ|]û¢ì;öùÍµkµEDDDL‚dØfÍÄ×/U=§»GþÑuE
kaÕÜLØU½ÃµÕk-tÌx¥U­SÍá¨ç ã¨>Ö²Ò¨ê¹úæ/Ò³<óÄ#¯uÎªœH¹­j
'½¦…²ß~DéW¤Þ¥ùÖö7Ç—•¨_ñ ;Ò7ÎÆ—aºfó(«­åœ'Ýýye™«êÀ¸–­úâV[©Z¹¾í‹ë½kPþ6oô-CïÍãžwCß×»¸ç&ùÝÖ}K]ûW_òBÔÜ¾÷"Åö
ÉÏª{ ßù q~Vû¬dØç«ZýÎïÈÁº²Ú""""&Áæšak¬¢æé
Sµ­õçªzÊÑ_}ldFc†•§[þA_Ígï[¾Æ.÷h{»¹ì¤«çsåÔ¾Ú®Ê–T/ÔZNÑµWæÜóî~ßg¬LMýþW¼0í7šoê•~ÃÏ“bÆ¬#6'­ë´Ke3zŸ9´ÓCæò+aõâ÷
îsmwœÙ™Æ!ùÆËèzdµ—M­¿_)3ì ü6jý_—ßl¬šãZvÕÜewXmåª	3œuDô»]LÍç|}u-\ÙÍj+½v
ò9ÍñèZ—ÆëYm£x`ÁÊ®®õ,®rï÷U+ÄµMªW­~ÿVû°úúoèhµÍJ†}¾¾÷QûhµEDDDL‚Í-ÃVT$.­íÈõ“÷7·–÷w÷=W¿§$©>R¾ÌDõG¢ŒM“zþ×\–
zö3?û¿©lÈZ."þ5Éõç½5'Î=«ÿl}Ç¤ÞŸ)·´ÖQn}µ“Ãæ|aõåžú½²ÚJ2ìðö»ùž’fØÚF×²õßjÔþ›M»f[m£è«™¦ñqV[YÎ[õƒ]ëŠ»ô{ã§_ìZOØ÷¥
ÐwÏªk†Õ6Šº¦¹ÖåÒ3ì~îÉè<Tß½oP-Ä­¯Í¿^}">]µñ)×ñPýqk¹ˆˆˆˆI°¹dØÊ
¼½êßøÇ¸µ¶'×0¶²—U_k­þqÖòÒê†©s®öíÿçîÁ­öi¶ÿ-÷dö¾¹ôN_}‘\É°‹óÁ¶Çâ¨ÏdÐ|z²æÕ=­å•K[ñ½ïz{ôÄXÆðgõÍ6?"ÃoÏëï(i
†}tÙÚG\Ëû>B}ü]í5ç Õ6ŠªÏíZÞo[me93ì3ûj?Ï_î/ã¾G{óÉqÎ:3Çß[?Èj[*õvm“îa¬¶Q\ðÌxgM#]ÃökhªöÃ7vÎÌ46³cö¢öŸ­Þ4RãöÎ8
ö;×¾†‘ÓbsÈ°UsCó	Z÷pù÷s¬ª9ú»­{—|¶zëhåz^S
gÕ¾PÿÕäóµ·¶)×0¶æ³–“vó™}GO¹ö_9“Õ>íê™LýÚ¬s1^ç{®…ïÚ#5œµŒr¨ºS¾mT&oµ¢2q×zÂæ‰dØÑô}®qdØzïZvØÛ÷ÞD£Õ6Š:‡}Ç!
LöreØª—áZîóÇ~«¯–y\ç]!új¿E™#4Œªïï;TÃj/›R†­¾êO­q
q÷Ç!ÃFDDÄ´ØÔ3lå¢_¬Ý2Ö¼Ûìk«]2fÒ…šK&L=[ú–gµÍ5L†-•§«ß…µ¼4ë;*i·Ù>ê\Ó»õµ·ÎI†¿Ê‡}õx•á
éü ¹ŒR«šK¾ëBYg®“ûó®+LM~2ìh–òs=´hå½®e‡É°{µëäÝ6#Vû(ÝSi.:«}¹2ì§º<\P­ý8=ýÑŽ)Öv–Bõ
ñm“æª¶ÚGQ×ßºÂž{M!Ãr×õµVÎl…J†ˆˆˆi±©gØš*è¾M÷·ž~ñeÝÖ²ò+ÃÖøËÆ¹kö=¦.ò©?žðøí÷›ËM£¾±Ä2ì3KšT}vß¼E¹ž­®?£Œ[
;kð˜Ör1ºÊÉ|ýÛN®Ûö¢Õ¾Ô¾öÄ3±üæ„1hžÁa{šíÉ°£é;Ö•Î°õNß·m:G¬öQÔ}˜o]:÷­öåÊ°§<údÅ3ì¸k‘‡5¨v{Üçƒô­kÎ“Ï…ºJs†­ïƒÆ
inë|(V2lDDDL‹M9ÃVÿÖ_öÖå»gS}ÕÉ¶–ã3®;_SU­’ýo­è¢þá®åŸ=Ððû4—•6õ\á;¦M­ÿñæéóÚøò2å<3ªL-Ì˜
DŒÇãï4ÔõÔ3¾ò«})]øÌKÎúÅþæ¸ÔX}ßºÂdUdØÑôëJgØAï24vÁjUßºÂÔ-)W†tŸR.+•aa®QõÍõö~0­¶žMÔ÷Ú:òÕïÔ™}GOþ°ãàú¯6ì
œ~â½MÃ4—£æ~ÐÜŽë_ùí•¾vÖ6!"""&Á¦œa=gÔ­X×ßjoYª;WÍ´}ÖÂv®~ºçTrki2¨æª
3.±Ú§E_¦pöÀ±ošÐ²qˆX¼A}ã®÷U_.çoNÖ ß·0Yv4}Çšû¯†É,Ë•aûæB)E=lŸš§ÓÚÎRXöû@Ãï=dZ3ìï}4Äwœÿ~¾UŸøÓ©
;¦)ŸVAÕ±î»µ›÷Üµ¶	1
6åûÀ‚•]]÷j¿ªÿE5ý¬ö–åÈ°³ªÏµkeÛI¿bÐ{‡÷ÆO¿ØjŸ÷ÌYr›kÿþ°ëðžRdˆÞ z¯G–¬zÐj_J5~Þ·mÅŒ)rYl
2ìhúŽu’3ì0çAT}ëzcè³fíˆreØ¾û”¸×“DUGÈ÷=Û£¿Ù>ª¾uiÎY«­Lc†4Þ¦ñ<;pì[]z^‡¹¬|É°1í6å[c-]÷jq=s–3Ã–¾üâÌ¾£§
¹—M¢AýÃŒ%Nº/õä¬·{öà‰³:v7Û#béýõPÝO®kÐ©õÛ'YmK©æLó]ãÈ:sU#ßº”ƒXíÉ°£YÊÏµ˜[ïU}Û÷ºñ­K5¨­öåÊ°}ó6‡0è¾7î\Xã}
ë S]¦-ÃV?ê?VûÄ·ß'?Ø:®˜û}2lDDDL»M9ÃöÝ»îœ½äf«mËaËOWm|Êµ¾êÅïÝgµMƒ‡®ìæ;¦ÊT¬öI×7£æµÚ"byTæåúž~»yÏ<«m)
êfžÅ(ªß«o]ajô“aGÓw¬+a«¿oÛÂôŽâÎz×õT—‡ÍöåÊ°ƒjÅWºf~9ôÍãñæ“ãb=‚ÞŸ„¶;è=åg«·Ž¶j…X’a#""bÚmÊöO»j¸îÕ6N{Õ
6Œ•È°õçZŸúñÆQ¥Òú>3ÕLQŸ«}’õöÝÚwôT˜LËcR3ì ~ª³‰5?òÎýµ¯ös«­$ÃŽ¦ïs­t†-}ß#VÛ(êö‡0÷7åÊ°u/âËqÃöN³º¸ö}ëën°
ÚF1¨¶\Ø¾ÈiË°}ý8TK°W»Nf{K2lDDDL»M9ÃÖ³²ë^Mst[mÃX‰[~·yÿÛ®uÎñBªkm,yÖ_Gäw[÷-µÚ'Ýšekz¹ö-®qˆX¼AýN+]KDê—kÛ4÷¯Õ6ŠŸ®Þ
4ÂµÕè²ÚJ2ìhúÎ¹$dØzwãÜ÷sçˆÕ6Šš›Îµž?VÕ4Xme¹2lùÓîÃ{]ëÚûæÒ;­¶i×W§ïó5[ÆXm£¸ùÕ7¯s­G×@«mÖ´eØ¥þ®‘a#""bÚmÊ¶ï>[°Õ6Œ¾~j
Òj[Œ[fÌoëZ§úoXm‹Q}¤fk_¿¬´¿ÛÛ·G®™øú¥Ö2‚œØw¨7#zÆ{N´|}uDÆ÷h¶EÄò8ºÇ£ÞkE¥çt”ÊÑ]ÛöÝ–ª…VÛ(ú²ò°v4}ç\2l_ßÐ(Yb
}ùÝl}Îj+Ë™aŸxï£!®ui,™Õ6íêà;ÎÅÖºÈõë ;_s­çôG;¦Xm³¦-Ãö½Qžoµ
#6"""¦Ý¦œaûž»4TuE­ö>Uïð›»fº–ÕZF1j¬ªkßl¬šcµ-ÆMÓæ]«õœÚ°cšrëïÃªìXý¬}ÇRó«…Gäž9Knú¼ôïÖ2ŠUÏùëm
5R›’êÏì»N,;ùB«}©];iæe®mÓõ%Ž±æ2h>Ç°óø‘aGÓw¼“aÕtˆkžŠÆ÷ØŽßH¹òÅW/¶ÚËrfØšcÚwLfk¶O³zöžê/`µ£j…èþÈµŽu/ÏºÜjŸ5m
¶¯nÏê	3[[mÃH†ˆˆˆi·)gØAÏ]?ì<¸!j.ª¿WÖ©ºt¾åfµ–UŒ¾yn~Øqp½Õ¶³¶Ô{
åøê—]L-ç!w=ù~ÛÁ÷ƒŽ¥Ök-Ç2hzNŠ#'RçŽkÝšÞj‹ˆåQßÓ³Ž}ë»VèÚk-£Ô*ƒðÕâÝ1{Q{«}ëW¬àZ¾ò•°×{2ìhúÎ¹8~›ŠÍ°õžYï’]ËÐ¹bµ£
ïÝ‘²µ°ó$–3Ã¾¯Ímß½ rÓ°ß“4ª}óe­q}6LsµkùºöE¹§-ÃVÝ×öªÎŽÕ6ŒdØˆˆˆ˜v›r†­ç® <âÜ½bÝÜáãZXc¿ýþŒ²³~ï[V¾Ö¶ãCíîrÞƒ
ê^Ýj[Œ¹öy÷¾û}]óÎêžÊ³Ãö)~¶GÿŒÚœ©>ñ§ ãøÃöëŠ}T.åëß%ãª3¤¯vzZóÄJ¨¾šoœP²ºÿš+!àZ´Æj_.}5”3ê÷Áj¤Æ(ù®—Õ‹ß»ÏjŸ•;
š¾ó.
¶T×2t®h®i«}:g}¹êIXí³–3Ã–µK?èíûÜö¿µ¢‹Õ¾P<ýbÉ®aÕµÀµßÊ˜õ9XíƒTì¸æÕM[†íëoñå‡ÛÆ[mÃè›w†ÓbSÎ°ePÍê¬gûÝk·
ŒU¿ÍÓçµ‘êoýéªOùjÓYZÛU¬®uV*ÃÎU}šØ^½ñøÊõ5W¡žû—??¥•þSÇôä¹ûð3ë~°–#õÎ
JŸo}¶EÐzâ¤/ÃŽú<†ØœÍfTßnÞ=7î:òAsÊÊ…Ï¼ÔÒZF¹ÔûBßvžü`ë8ë½¬O½÷Õ{C×r•q¾³‡¹Œ¬dØÑô}žIÉ°‡t~Ðûn£qm¹êþË·ÿak×ÈrgØú>
½‡ß8uî5Ö2¢8à¶{3Ÿ­Þ:ZË¶þ¶Ô6î»ç|Ð½h1çÃ‰÷6
óÓ¨s²¤-ÃöÍ¥«>ÿÅ\ô^À7¾F’a#""bZlê¶žå}}ÖŠõëM»ëû7k»ŠÕµÎ$dØqyöà‰³Ï=ð˜¹Ma<¼xußzÔçÅj‡dØˆÅ›ŸQ©ž‘jÏšÙfýàåY—ûj¯J½Ë
,vqûý¶}Ë}Û«ùæ¢n¯òk½cô-óØòúZËÈ•;š¾ã^Ln•5Ž[Ö­X×ß·š£y‘ƒÆ>|·eÏ«}®åÎ°åþùË;ù¶_ê}¾êŽXË
RÙõ‘·W=›—[mÊaP?tÍqRHŽt>|ÿñþ÷¬öù¦-ÃÖ»RßþŸúðã
Q¯ëÇøþKÓ/ùeÿÑÓAç)6"""¦Å¦žaKõ?øy÷‘ƒA÷oQT¾ª9†|¹¤´¶©X]ël*öO{ŽTèÚËÜž°õ¥WÎbµC2lÄâõeTz>Wö1µÿS™°µ‡ôwóžwAP,56þå
>ÃÍå•Û¿ÕüðæîÊ;ÂÎñ8´ÓCs¨&WÔ%dØÑôû$eØ:Ÿ‚jª}¿mÿ»:—¬åHÕÒ9ê[–òÚ¨5J*‘a+·×9íÛùóÞšš‡0J–­åªÖú¨»ú;[íË¡®
Aõú4GËð»Ã:·‚úãëZ7²Û#æròM[†ÝXGåpÃ¿úŽƒúÎ„9¦:×ôœv,)6"""¦ÅæaK=ªOug©~ª]¦ïï¬í)V×:KaëÜ3£þ}A÷×Å¨{hõ5Šòœg©¹
 |ëÓ³WØ¼«XÉ°‹×›aç¨1×ª5¢z´k&¾~©Æž¿>pTFª^ˆæÆ:µaÇ´_Õÿl-KÆ5—V)\÷Êì+¬c¡kê+ý†gò¯«ÝpgcMÛš/@þkO<cnK¾dØÑôÿ$eØòõÁ
£½sŠJK:§tnéËm«sPç¢æÂ°æÆ^5ñµÖÖ¶ä[‰[ªæÙ™}µŸíÏ_·ãÄYåöê ëÑè6Î·2èŽûÿ»Þ©m}mþõ§×oŸl]Ÿ¬m*—Ê‚ƒ®ú7Õåsš?EçCõÛïß
oªhm‹Ë´eØÒWk<«¾ßn­Z¬1 +^˜ö›E£&´Ô<Ê¬U³ï«
;§G½O'ÃFDDÄ´Ø\2l©¼R÷wÖ½²Ke×3yÞòš[†UÏ¡ºgV]ÆsÏ†?ZÇÎR÷ÚÊÆécc¹tìdo[Õë¶ÚÇ%6bñ†É°ã4jýŒJèË']jî‡F#\·?œüFAÙv4}Ç?
i¶ô—:×²çõ·Yµ½Ö6¸¬T†-Õg<LŽ—Öö”ÓÆZ!¶Y–ó|iÌ°UƒåU5G­ãRˆ¾ãA†ˆˆˆi±9eØY5fqÇowÐØi_¢³ÕõgÔo[}ðÔÿØµõÌöïË×Ú†bu
Þƒž{~²ÚÅ­jó=Û£Fý•÷è˜Zý?tÌ5¾Q¹õ’1“.ÔØIk=…ê›Gã”ãÈÂª~Z®í
ÃFo¹2l]£ÊùŽ«XÕ×ÚÚ§¨*ÓPýkÝ>É°£éûâøŠ;Ã–š¯0¨?v¡jnmkÝ>+™aKÕG‰c¼_­m)·ëþ:§€·?v¡ªF”µî
Ó˜aKÍ¡T·'ªªÅ²cö¢ö:vw??a#""bJlŽv®¶íØXWTãevl§Õ®Òþz¨þ—ü{Ð_Õýdµ+—}:ti|žTÙl®¯c«1³åªß!}µ¿ÿÑP«mœúž­O­ß>Éj‹ˆ
UõW5Gšõž¬(÷Ö~ZŽ÷q«qäªU`î_Ïì;z2ÜQTÉ°£éû,’šaKÍ§T9Š:w—??¥•µÎ
+aK½××¹¢û1kŸ£ªwÊÈUÉÚŽJ¨k†5w`Xu>¨N†µNË´fØR÷Ìª¥n+Kƒç{h\æc·v#ÃFDDÄTÛÜ3ì´úÇªš×}hØ9¼šƒªMâ»§×³Õ>Nçxá×vÔ½»î1
«-"ž¯Æn(ï:ùá¶ñqåÙÊm•=©F«µþ¤ª÷¯Êøí©:[ª#ÇØ2ìhú>“$gØRï•ÂÔ3ö©sµ~Åúš»ÂZ—e2ì¬úi_äÛ¬QÚ!w=`®·Òj¿u
)æ|Ð5,®¾$iÎ°¥¾_ªÛWÈ˜Íe¯w›¹ýFÈ°1í’a§Óo6íšíº-dî­¦ê†©s®v£ï·í×j·¬ìêÚ–Í¯¾yÕýª¦“ÆÐ(/úbí–±?íª=æy?[ÓHu8Ôï
Zý'­u¥Eå?:Ê¾4†<è8¨®’æÀT- å%Ö²Ã:øÎïò3ì¹VÛ$ªñZ®ýÑ¹gµ
£kÙ2Žw*ãzÜ¹|“²Ú†UçŽÎ!K:§Ï¹sç¤ÎMÍ_WV™Ý×~jþ«m)÷ðã™]o,¾EsíÙìkëû¨c£y/Õ¹ÿ-Ågû•PŸ…jÌ…<þ¢}Ö5+ÎóAÎ>®…ëœˆã
I9U?jÍiÍe w&5ËÖôò%Ò|6®ã±ìÙW.²¶1
’a§SÍMéºUýg«msñôú]¯ºŽ‘æo·ÚÆ©²±3ûŽžrmË„ÞƒÍöˆM=§k¬…jä?«+CÕ¿éo¬å4•j<ýâ¹ÇAÙŽrÙrÖvÂæ¡Þ+éÜÊÏuê\Œ#—O³ÚÍ³¢c¡
|[ÿ©>ÖªÁfµM£ºÆhÎKÎ‡âÕý¤ÆÌ2¶EîqÔ»´‡oìl¶GDDDL»dØéT÷ýÎþ,Õ'þ¤gG«}SWÏLÎ±¬{ë¿*wf£±œ®ÏJã››RßODDDDDDDDÄRH†^¿ßvð}W6ª±
ôªygµoÊŽï5Ð™ñ«¦¤Õ6N'÷–ñÕëU_z«=""""""""bs—;½jì +Íöñ]5ñµÖÍe¼|¾Ûg-l—LÔG½\s^ª†¥æ5òÕ¢ÕçgíYDDDDDDDDÄ¦*vº=øÖ»Î¹
ssÛo·V-Ö/úÛÍÓçµÉÕZ~ZÕ¼ùÇ¢nÅºþV»°ö¹¹K&÷8*3×ñ=¾rýÀ?ìªÞ4§œþ-­óš!""""""""–[2ìt«zÊÊMƒrì
­å§ÑmoÏ¸ú?k«mXŸíÑßÛ>ÈsÛõ—/Lûµ|DDDDDDDDDü«dØMCÕ ùÿÙ{g;Š,Ý÷à½o¼w i¼wÂ[5BÂ{	Pƒ Œ$$BÈ#
yoŽ„m€¦¦-tÌ™Ž1}ßwâÆ‹÷<ý]Ó›"W­,·í÷‹ø‚nYµkWUf~¹r%1×ž‡ÚöWÝò#ù7³—¼â•Ë£Böâµ
¿ð·nI’$I’$I’$I’$I’þ.yØÝ£ë~vvß†qS/Íãe{uv¢VŒ™prú{ŽþÅÝ[{åò(‡ýíòþoæ{˜ò_K’$I’$I’$I’$IR~ÉÃî>]tèI}ä«øàõw®þfîÊéß.]ÿ
…åk{uu¢†œ}YßWÜü¸×¡n¹<²<ìïVnø–xkòq¯xaÂÏŸ½aÈÖ§ìs„[Ÿ$I’$I’$I’$I’$IaÉÃ–$I’$I’$I’$I’$I’ÚUò°%I’$I’$I’$I’$I’¤v•<lI’
$I’$I’$I’$I’$©]%[’$I’$I’$I’$I’$IjWÉÃ–$I’$I’$I’$I’$I’ÚUò°%I’$I’$I’$I’$I’¤v•<lI’$I’$I’$I’$I’$©]%[’$I’$I’$I’$I’$
IjWÉÃ–$I’$I’$I’$I’$I’ÚUò°%I’$I’$I’$I’$I’¤v•<lI’$I’$I’$I’$I’$©]%[’$I’$I’$I’$I’$IjWáa!„B!„B!„B!„B!„B!
„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„
B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„
B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„íÊV[mÕ
·÷ž{%ºŸÝwÛ5øÛo½õÖ^Q!„B!„B!„¨œ>¦oÜÈ‘{­?÷ÉÍÖÿå7ôÿ–¼ºDçóñª«¬ßÿ‹ýÿ¹aÉÂ×&?ûìçŸrªW•B!„B!„Bß:Ë³
®ÓÃ&¶÷ÊóÎï{å‰'v[2mêµx£­Z±ì³
ëþé‹ýå¿›Ö­ù’[3ïÝG§¿òòq÷ß|ËV?Ù{o¯ê®ã˜Cï{èÖÛ¶zsôs-Ÿ9ý¶þEïáº|¼zÅ:þ‹6,^0vá”7/yöþû·?êC½*M²<ì´6.]4ùº‹.öªB!„
B!„BˆhÈ	AíWôÿ¿žGY¥‡½Í6ÛôáwÎ?î”OÖ®úØ;–%Î¿ö‘ÛïØª›ó[:ëì¾ù“'÷YÿÚo½k’VÿÂ÷F{õ[äñ°-xsò…Ûo¿½WµB!„BÔ
ãÖ/uóåWürÜq}ï·¿W\!„m
>òê¹sô<IK^ý!~väQ¾õçûÿÃ«?¯ˆC¦_Ò-‹œXó_­]½ÙûîYj¶‡>Z¹|É»ïæU/„B!z«ï¸×{xE…ˆæ€}÷ˆÓúpÅ²y¿~¿ÿÿf[¶üý¿ó\vö9^µ
B!„h‹Þ~ëò¬ö|Óº5_-ž:å*ò{ŒzÏ6ø©òêOƒ§éyŸUhîëÎÀŸïdÎ9ùäÂþqZe<ì/½¬¯ñ7â®»·ûØc»’§Ä‹Ÿ_¿`þ(|x!„B´b/<íô¾Q÷Þ·Ý¼I
Ï^:ýÁëÌ{o'É?Æÿ§_ˆç3ôúÁþu`õ»ÉÃÞu—]ú.?çÜ>ÆOä?äÙZ6cÚÍ<ghåœ™CY_É‹xàm·ÛÖ«RDÂûŽkîùÖ!ÝwÓÍ¸!„mÈàA—š}ÈOÖ¬ü<
UûôM½¾CUZ1kÆªÏ¿pÎä¹.’ÛÅRÛƒ1ñûË–L³ŽýÌð{·óê¢Yì¶ë®}IÎø2Ú¸dÑDÆ ¼gÈ3qÔ¨ýî½ñ¦­´UÑ0Ã%ƒúf{í¤-}º÷½~‚%Ú÷y
tgÞBT…u¿uº‡Í~5ôá™ÊÛ_4uJ÷,$m!ÜC®\¾È»Þ–äa!„í
y7Bm÷Æ¥‹ßÜq‡¼â…Èãa³‡ãûËOÁ'Jâøÿ›7¬ÿ‹W6ÑÛ/¼p¸wNíqxbÞ÷jÔ§ë×þOëƒ¯Fìö—7üïÆÏÔéacebºBç·yÃºÿ¡ØÑ.äyÕ§ýkÿÀ»§W
ülö!
ÇdHÝ¼GíóÊ¬“úbcÿÿòÞUyDþ7âEÕž‹*°î³Nõ°™/b_sï9Ê’<ìòì´ÓŽ}ÞQOò°…Bˆöƒ<¡v›1Ï¾{ïã/L–„KžlòYï½çž™õqÐÁ}ä³ðö7d
ù·;|à˜þ/×iêK/ÉúDk,I,7±
O¿w[¼mrz?X!ô?í_û»Ð9ß~ÕÕ^q!šB3<ìDÄ`‘‹iŸ½öòN«£Éº¦êGÑ‰Ä{/•Õ'kVn8úÃ¼S"“ni3clX²ð5ï¹‰‘<ìòÐçò®³'yØB!Dû1å…1‡
…Úí9ÆŸê•-CÚëÀc&î¸hÞ<Üw'L8=«/²dÚÔë½zZ ßXó¬ïÁ¾ŽC®½®ÐuÚa‡í½TÂ?²sèÜ¿óö5^Y!šA3=ìD›7¬ÿWæœºyØB´3^}õgÞû¨
ñN;á¨£½ÓÂ¤ÓÛúâ¬K`@ïy‰•<ìr\pêi™ý»õç?ûØC¶fX+µûn»¬c|E|ów^s­s$!„B4rK„Ú÷º÷bN¼âÙÛd¿}ª‰ù¦ßaõYÈ«Ñîû;SžÕ
ïb_’NX¿{Èþûû¿Z»úS¯¬Í 6bË'œà^G"[ˆö
‡÷¶iÝš/“ÿ›Ö¯ù:Çº«]vÞÙ;%!‚tr›Á˜bùÌé·yÏHZäHLzÖäa—cíü¹‡®û–þ×_‰•B!Dç²eÜòU¨'Dì±ûnô1ž<ùØc½æ‚þ¤õÐ)ÇçUÑ2
¸Ö¸¯ÿ‘ÛïÈxÝB>ßØÿoéïÁ÷óÊ	Ñ²üVâo˜[³Ä˜•Ü<hÃâcñ}òäççEÎûnC¶íA–‡Í\2ùÚ†^?¸ïÐ0ë8üÀƒò}°|élïFÞm³"!2èÔ6c
ïß’Eã½gß”~{=óL…biØwß>ò'²ï*ûhÈÃ.ói¬í
ý\c!„Bt6ô­Òm<kC½ríÌ¸‘#÷²ú’íº.Œµˆï/[2Í:ï'îº»ã6DcOÉÐwaþBˆV“å·ÞsÃ/¼âAX“ÊiÍ¼weÞÉª=3üÞí¼ú:
yØB´i›uhøhŸq¦W4ÈW_ì/&â}wà¾ûyÕñ#:±ÍˆÉûÇ>æÌå];ÉþÇG|ˆ÷1apÅ¹çï)Æ$^Y!„B´?¡vþÓõk¾ñÊµ3×_|‰Ù'~ø¶ÛÛ2–yØàÍsž6v
ì1^ùv¤Ñ‚Cß§Ç%¢w¨ÃÃnäÊóÎïc>Ð:Æ‡+–Íóêè4äaÑ$6¹‹Æ?õô>U¬­#ï5^¸õŒ“Ø«Cˆ4Øfp¯[ç¼9ùÂwØÁ«FÔ€µŸ-ñM^Y!„¢W8â ƒü
ŠCïÙæÍÑÏÄšJâ]È•‘¬7gdÖˆ½úäˆ=Ø/â˜C÷ªm
¡v¾ÓçªÏ<ñD³O|ûUW{Å›ñŸ¬]õqè|?Y³òý¼1í‚•k½Ç%¢w¨ÛÃ†k.¼(3çv·qåaÑ°w}ÑŸì½·÷Ñ\°~ÄzÆ×½7o¤W^ˆ4Öf°Ÿ…•«‚õŒ½:D},
1íÆÐosÕùxE…Bˆ®„µâä4c|@ÎÔ¬˜O›7¬ûçù“'wái§{‡­Ðyuº‡‡Í^ÕíÆàA—šçËÜH§"[´3Íð°!+—,ómÝ„<l!ºæÝˆí=ã¾†O´†Nj3ˆ9±òä
¡NÌû×mXcŸy”WT!„èJ–L›z½Õw)£õç?{ô!‡y‡¯œÐ¹tº‡ýÒ£íú^Ì7´cL3±K¡ó}Ùâ)^ÙvF¶hgšåa¿õüèƒ­ã·±›‡-D÷cíÝAþ_¯¬i:©Í
ÆÚ:ß©/½x¤W^Ô7 |ýB!z•º<lôåûþyFšIè<:ÝÃ&Ïlè{­˜5cˆW¶Ùì¶ë®æšÄfßU#[´3Íò°GÞ3ÌóÖåa+FÌ1aSÆ<¹­V½;ë^òZ-þÎàÙãÇ
2ö±ÇveGyräa7]wÙ¥ïº‹.ÈË:÷õ
glé›\Ëï»zîœù½ÉköÈíwluÜáGxUÕÂÁûí?°fmâ¨Qû‘–ö—ó[>súm¬?#Gó­W^5°¶­Õð¼°&bÌCïÄµä9Wöl#¾U«®c;²úÝÙ÷‡žñN‰ÃÞqÇûN<ú˜
ýwŸ½ÿþíÉ“‹ÿÈoÍKþ7÷ç¨{ïÛîÆK/ë;êCî‘v!Yš¼Û¹WÙG˜çlÂÓOÿäê.ìÛf›æ¦³`ÂsN>¹ïÅGÝyÞ¤‰g'Ï;çÇÿç=Åûj÷ÝvýQÙNi3øŽŸmXûçÐ¹
2njö5oWvÞi§¶‰Ü™üö¼G¹VÎ™9”{”6ñMÕyŽ¬8ùv»Ÿbá¾jÌYJßw¢/Çiïi¿¸®§ÿìg}í¯%„¢uÔéa#r©
½~°w•:‡Nö°ï¸úšàwâº¶ã:²‡n½m«Ðù~±±ÿ¯Ûo¿½W¼­±<lÅBˆv Y6>ˆuÆU‚Ï†óYÿÚo­c¦õë÷ûÿßó†KåöiÙÿ¾dÏ´añ‚±Öqø[ãg=¿Þx
,rXŸÅ;) ÷A¨Î}ö*¾ý¾W¨ÎI¿üåþ^Ù,—âKs-iÓ¼ß6Ñ¦õk¾fŒ[—g@ýì§eíï`‰¸^æ[ªw[÷È»ÿx»ÁC8`
o4yÝ¼sDôØ9ïsÒml\²h|èúÿè•m6É\Þ.óxŸ®_û[ïw‰ü)¼'ñŽ«¸Oáéá÷nºWù÷ôgñOé/n¹ö½sE¬;d_Ï2ï±öÛgŸ>ö}†ˆÙà;òK®£õÙvó‡
ÿâ&ó\Ïûù)^ñ®†w"ã/æR¬¸œXoÊ<™g*ýüX¹ŽòôAvÙygï°µ€_}þ)§ö~ðÁØG‹6'ÏõLD®-sGu·ûB!ÚÏÃf\ù«µ«?eLF;HŸ—ÿòÿé;ÇŒ;é{vÀÞ
©”†àÐñ;ÕÃ>á¨£û>ßØÿo¡ïÄ8Õ+ß
¿óö5¡ó]5gÖ0¯l»£œt¢i–‡ýÆsÏ:mAUóTì»o±£1íK–óœr\ü«’gÙ«³¨BûÃYñUø³¡ó‹áñ!wmª“½ë¼²Ö{<W^Yü«<s!±Ö/¯êxAbùic©
ß;‡,áµ[«î}÷Þç¿?ƒïF<`o ááÖí ¶3[îÃ?…®Ë´—_>Ö+ÛlÊ¾Câ9Äw+;—ÇªŸO>Ã1î¿ù–­x6¼ó
‰xˆ:âbð‰ÿ,óÌs‰ÕµþÞn¶•Cgý‚ù£¼²ÝÌ ³ÎîûxõŠuÞïíÝÌyÇ
áÕ]D­º÷ÖÎŸû¸wnyÅ3Ê;¥U¾¼BˆÖ“ö°iw™+%¦àäcu×ïB¼ëì²úÖ+gÏ¼+³¢
†.tìvŒ¥É"éã[sïý‹¼HK;ÂÚÛÐ9»i•aüMŸ‘ïÌ:XÖnrÿÑÿ»øŒ3k[Ÿ——e3§ßún~†WTˆÚi–‡Íø6t|0¯l¼Êì-œqÙOÞ=4Êäl¶‡Gúl™kYÇï
cÅ!‰»'~˜ypïzå^L(.¹ÄÀÚ¿öÞ1óˆñvQÐª›:i[­¾BÑv÷âš"îaëš´cÛîýŽeDß²ÌsäyØÇvxóŠÞyÄˆ¸Nï|baïžOÖ¬Üà³¬Zå#†àY·Îóªó
/ðŠw%¼O™Çð~Ç<"ïk®òàÕYD­º÷¬ý‘ªypŠôA„Bt>xØŒOY/K>½2Ûjó†õÿjµ7xÌuB¿+tÜwÐŽûõØC¶¶b#ëÚòö‡šcjë¼ûôÉoH^ÁÏ6¬û'¯
Ÿ‚¶ŒÑÿ“yò¶Ê¿Ÿ?yâ¹¡sã7óÊ Q7Íð°ÿ–ïþ¿BÇ¸ï¦›‹™t
¼ýÂ‡{ï‚¢"·¢wüf{Ø×_|IðxÄ‰-ÎÚ€9æ"±¶xZ¡ú>ßØÿyßÅÇq¤9ÏYV¿Z»zs‘ï×ó'Öý]V´wE|l«>úk5ÌL-rŽŒ•»]÷ ö~Ã²úxõŠ5Eã³<l
rë”‰qN‹÷ÙY'ä’93ˆíöŽW…Zå#†xááGv#¾`¯½€ö–uÆÞoXD­Z±"ÏÜW_µêÞ«ÓÃFÌß–É½&„¢3©º]»ììsÌµŽô™¼òeÀ‡÷±/í•møøÄ#
æûéÛ3OÿÉš•ïgÅ±ãKðýŠøÍ‚˜%ëüñÝ‰é'—YÑü‰ð*Ê®Ï.‚•˜uö^Y!ê¦6ùBõ³Ö¥ì¸—¤YÏ}’‘<¬×`ž#ñxäÌþpåòEYïPþF^ç,šíaó^´<gö
äË×$ëŠä¹æÂ‹‚×dÍ¼9{ea§¬9n”¬c'Öâðûâ}±>Ÿý³>ßØÿïYå·Ü‡3‹¶‘ä…öò4û…6›ùÎ
Ñ.pOnX²ð5Ïÿfï/ï<ÒXuYyÆÊŠ¾‰wNÝïŽÐ5àwl×ø>ï÷C_lìÿŸ<K­Z±mZ·æKþÍ+—ˆgÍ;–‡]×½ºiÝêÏ½µ¢Y°·eìÞÓÄ\$òÞ!U=Þ*ƒµ^‡œD^Ù
nƒ¾¹Ë¼ß{eýÂùÏ²¯c²g*¾÷–ví/^Y|ìØø#¯®"jÕ½ãaó¾å™bÌûŠÿÆ\ÓDÌ»wB!VÌšqG¨©;'²¿ÜNëâ¬XqKô“ñ¸ÉëÒî°^?ôˆqÁ‡(›û4-Æ
YÍì·÷:riæG¢jêô°ãáÓ…ê&²O
¾­uîŒ961Æì¹tú;ƒ­º6oX÷?²ê!V*™cD¯?óÌ¾V]ü­ñ³žî¼æÚà1­v«Èœ/¾²u¾ˆ\^i¦¾øÂ¡ºž{à¸ùxO³¯†u^—.šLN2Þ³¬{±ò£ñO=ý÷
DÑ‘\pêiæú¼+|öKô ï>žUíy^oÔúž–˜#æØŒ~çÄóÉ¾ZøíYû”"æÊø‚
ß/kÎŒ÷‘WG«HŸ+ó:ô…˜W¹üœs3s¯í¼ÓN}|†õ.ž¯ó<¦±<lKÉþ»Ì­qrŸrþÜ·Ü¿³Ç;Åó˜é[zç‚uYï$„÷ÏüçêãñN`Mævcö}m•˜†ïb]W«æ
ùÈñÇºÛDôÙÃ¢SÉÊaŽ˜Ÿäy°úùü;Ï•çƒ/™6Õ¾¸ ¤ûx´¡úæ¾>á¯ß‘¨ª½Jò’ö°iO¹žÄd±®–ûÉŠà~c?Þm^~òÙãÆý<X‰B
} PCÏ+[+§!žEÑ¸¬:ˆõ°Gãµ÷ž{zU¶
VŒf"&»î5X{°Ñ¢•Ôáa3¶`lÆ˜#T/ï)Öb—ßÙòüˆ­ŽñÓàkXuæëd]Óªükn€½¼²ü-¦;3˜ñcž5ÍPÅ^¶äÑÕ§KÌµW>
×ÞòþÉW'§^Ö§ýkª‹û»HNäKÎ<ËÜ9o^ò¬ß³Q¬…`AÌzöÄËÊ9?ü7yUt${î¾û€o­ã~l÷8tÎ“ý‰e
}Ñùs<-Ö<X÷À†Å_ñêHëaãŸ2×Äïá7Ú¿è½1V]Ämzu„˜3aü©V¼GñÍò^ÛO;Ý|×¡ªÚŒ²Xñ(‘9W,›çµ/Äú3‰?IŒ{'@;–•‹5_^ðÎšw
)²©5î`Ýs»ƒ‡MïÖÏÆÆ¢‡à·È˜kþ¯fÆ4	!„è>¬þc:¯lQ¬õJž~ú'^Ùfëa£dÝ2ñ)
95¼ïd)YK†òæL$¿êþ?iÎÏÌúöÐ9àµµÓ\‰è=²üVâÙ’ÜžðxðˆÚ¼aÝ?[uâ°VY,/’¼eÆ;xQ¡zy¿ÄŽušáa[9˜ˆoñ#n¿êê¨¶åñ!wE3x8!¯“¹a¯
l{„Î Èx>ßÐòžóäcN#T±oeö8ÌÊ«–gÞÇû=µvÕ¯ŠÌ¡¹ö:³î¼ó'íq¡É»Ïƒ9’ù“'‡ÇoyUˆùŠVä(Ëžb•°ÎÏº&yæ‚Àó°¹þÄ¿Ç¬©i„v
+Îù°ôªøÄU[Ï&þc‘y«F¬ó¬ªÍ(sÚÖwçï¼÷éëòÌdýžYâú²‡Í‘âNK±Ö¥pþÝz[|ÜÀßr¬}lÖå]çÒÉö
GÝWåØÈƒ¡n{BÑ²Æý^Ù"°¶8t,ú¼yû
u“ÇÃnãTÆdy<fcå×K‹9ybUè‹0ßêß°æ•±>^–Wg™<¨yàú[1©SÆ<ßÞuÑÕd½w«óM<—U<o–ïÊ8¯ìxŸg•üÙ¡úcóB7ÃÃæ:ZóvyöYåð
£‰«öêJ°æ£c÷ à7`®#TÇ¸‘#ódX#ª=&†ï+äkò{œvüñ^q+ÖsÑ”7/õÊ&„Ê#<Ö>•éãX1öyæ(Ú
ë;Yâ·&¯mUÏs§‘µOoÞõ;Y6>\ÿøV«î¼ÞUÖÞ}äÿ/‹Uw»Ücäåc&r¸0Þ°¾C^ñ|‘«£Ç.ä²Î»lžùY«îØþGB'{Øu@¬èzÄöK„Bô6»ï¶ëÀ:pÖÏ
‘+,Ù_ë­çGlµÝ^y!þ(Ôÿfì^Å´jXcÜ¸/Œ·GUZÄ,~àAÞaZk ³Îï—þqï‹ø(+æ.Q‘5éE
æ;”O¡hnF!ÊÒ,›ûœØ%ög-›ÛŠóÂÛ®Ú‡PýÌ·ye¡6Xó±ï|Ìt¼4íb(Ïxž|"Ä±†Î‹ùG¯,0Æ•gL^•§aïcb­lÖÎ{ec
Ž;ï™'Æ>t~ÈÛŸ4úlVýebÐ[I¬‡M~ ¾ìšŒnÆÊ£Ÿ7·¼åa³N²Ì\ð¼X{Â2—ã•O
Ç…uO,œòæ%^ù¬ú«l3Ê°læô[BçWdŸÊX­zwÖ½eÖUÕµ±FÙû¬8ìYè•mDö1ôžàÞKŒ½²B!ºúŒxÔ¬§bNšuaxäÌZ“™%ï˜±°ïëãC}.ükæ×
;‰]wÙe
§71åìI–•O£]ýy«ŸÅ¸ƒ=`ÊBÿÿãÕ+Öd]r›6ƒã8ÒOcžµ¯’uÐ,»QÉzá"ñu´-¡:«‡X{Wñ~‰Óm–‡Íþ¡cÄÆ]ñ%?:O|)Þ‡¡9ÞGï¸Óÿò}v~¨X
ÓòÈ/RÖµóòˆáQ°&(]Ž«Òk±bÆb÷i•EûîË^Â^VýÌ·w"±6ûùÍž|1ï‚næçž;0t¼õÆÅ^ÙF,›÷ÊÆ`yíü»W6ÁÚ£–9À¼9N,¬{®Ê6£ä:
·Î±NqÜ*¼á*ào³òìWœïPëZäÙÛWö±âç‰-òÊ !„èNˆ‘e
>jÞáyÇ·`ÿ™c=¼oØàöL±úìñ‡¿Øéà¾;aÂéÖuÄ?mVèX¬~ó^ÙXÈÏhíÑˆ;ôê¨
®¿GŠoÄåÌÿ°Ç›ã­‹Þ¥vÃýþ‰Ù‹->ª+O¾æ¬ç˜<Íò°­œ±c²ÐÞl÷ÞxÓÀò}bãÐ7­[óUº,ûxå` GJ
—6ïï<÷‰ûÚ…®çkYy½æOžxnV¹¼›;tœo¹5ê"„Ê¢*<l°úRyóH´±v£ÈûOn›*ç.:‰‘÷Æ5.™6õz¯l#u{ØìcªŸ5€^ÙÞ_¡:òä÷ñ°î³*ÛŒ2|¼zÅ
:ëE»¾nÁ¼§y6X÷Á¼3ûÌón'ßã”3O<±¶†vÖ—xu’›Þ;¿f0xÐ¥Áß‰yù*§ÐšM”gƒ<ìÂú¿Ðõ`\ì•BÑ]¯Å^Ò1}2òÎ£‘ES§\áÕ—ˆ~ýäfÅá6
Ö’[ëû¼1z³±úYyò¯Æp×u×›c„Xo¦*ˆ)¡/šgÊª¯‡ÐJ;ÑÊ93‡Ææ
²ör¬*.õ:¡ãÄä+i–‡§ËžÇ¡ãx1Ï‹5ÿA<1shI[ˆ¿®oÂ»ÎÌ†ÎgÁ›“£‚¨¯8÷¼`yrD{eó@.ˆÐqÈíšUÎòÛð¶«ÄÚ?-6_I¨,ªÊÃ¶<½ûnº9Êco7ŠxØ
‰xÙë²›aÍßÁûí?0oF>yò´Yñíæa?=üÞåFBô=½²•G¤ì>ŽXÇ¨²Í(ùî­s¸ž«W¬cìA¾È<0D®m+¿z"ö]m5Ö½šg>$ÚËÐqú-xÑ+›ÐË6ñkÌ›ð¾
"o)ëf~y_8Çý¯>!„Ý9C­¼UË;—Fb<lÚ¬-ýìkcbê:â¬ïO{Þ.4ËÃÆï±ÆÝxÉ­X«xèôÍ›4ñì/»êë!dù­äd«ŸyÔhÈ5Ï{vK;ñïþ
fýw®ø®¡g%6î8¯±gè<‰=ôÊ6ËÃ†ÐžŒÈÛ¯,ä7ÎoÍ'rÓe—¿»w>
/=úØ.¡òUÇÙƒ•s:«Œ5‡Rõú&ËËÍ*‹ªò°­},:ÕÃn¿–÷Þ%~-¾k½÷ñ¾^Ýí
±±ÄÌ²ïîÜ×'œÁ¼"÷ú¦õk¾ö¼Å´ÚÍÃ¶æƒb=lÞ]¡òŒ#ªì7Z×³ê6£(–‡MûËž5e×É0Êáõß¿×êë¼:êÆÊñ”'·z¼GCÇaÞÙ+›ÐÍ6óäš¤:mìØcÈ?ÆÞI
ÌAo¹FÿiÝC!ÉÃBˆÞáÍÑÏäµ–Ø“ð£U+–­_8ÿYÆÄ»‘7ûõgžÙ×*ãO#1vìÞRD(o'jvÜqÜ¡s¬Ã³%¥uOs¦U0§àÝ³u\!²üÖªòcM\/~HÖ
=N^ÿ¬z¬x8â ÉU¥>X¾tfèXìI™uŽÐLo7t/îù½7&_.“äI(’OÄÊû½­}ÃX›îýfyeÍf_(Ï
òŽ•W|ßÐqÖÎŸûxÖù%„Ê¢ª<l+n¹<lüJö+µÖ>
<`¯žv€w2óŒÄ:|Ú¿öÖ÷)¢vó°­ü±öÌ×^=1Tž¾«W6ÖõŒ}wÖ5ž`Õ+>vÖ¾I­Þ³ÈŠÛªzŽ•¼×Ö5ˆ}‡w›‡Mþ/¼ž»*÷•‡-„½9Î¼6Ñ~âOÃr
þ)§ö°ï¾™óôYã~³P€›X+|xbmºko-âjªŒ)kãBçX‡gkÅÓ
Æ9Í†X<±Ïú×~ëÝ³u\!šáa'°¾“yKëxÞþª×\x‘;×S·ˆù1Oðo4ÓÃ¶r<fù3´Ãé˜ºÆ<"
Eò‰¼¿lñ”<ç’ÆŠsn¦¬s³ò4S±í€U>ÖÿðèE;áÈƒ1×tñ|°¥]áÙ%S^FíæaãÙ…ê}/­š3kXßÓÃºžU·E±Î1—W6ÜŸÖ±È_ã•¯ÆLÖyUK*«
»¯c7xØ¬½#¶!6{ÉÃBˆîç¼ŸŸ\›ˆ%ÖT/——fzØ‰ðLˆ«éÖýå¾íöàz4Äž*í
ã€ÐùÅŽ/òÀýk]ØµîUÁ¾yrñÄzBä¡™6àŸ²NÝ:æó=dšØYsPÍR»yØ`ùi–×L,[ú³¡}òæØ1Û<íå—
}>„õ]š)ëÜØ›Ì+[·bÛ«¼<ìjà^°rl°¦Ý+ß
È•«¡*åõvÛÝÃ¶öà®êü¬ëYG›Q+—HÕö»ïfÆbÿjíêO½òu‘Õ®Ÿr\¥©D°ŽuýÅ—xEèt›¸ë-¿÷fë:T%yØBÑýX}9Düù}‹R•‡Í¾×ÄW³ÿýŠ.
4°ïd(>ìïç¾x {QuVNM³7Y3°Öž×±W4ñQÖõuï}Ûyå«
_hÕ»³îµÎƒuräÕ$7%ñ<SÜÏäè¢jšía>š5FÍZŸÍ|£u®ÍR;zØäžËëÎ7îçéÏZ¾tž|"´·yÎ#„·oX3dó¾^Ùº%»}`]»uëð´ŠÂÜû
x÷V–ˆÛþdÍÊ÷7.Y4qÍ¼wåC^›Ðg»ÍÃ¶¼@ö!ôÊæÁºöu´Eh–‡ ´1Öõ`=W+
ß uNu¬½°æÈbûeìa3+“/ä‹ýÿsÓº5_âY—kñÔ)W-xë‹CŸ•‡-„ÝM–ÿÇ>ô“ËP•‡ž
ýïÐ1>Û°öÏÇÑ±[òÉs{{s5‹¬Xñªûª'{¬y=ªÎg‚y’-ãÀCÇ'v‹=J„h&­ð°Áò?9BŒ~ðÁ¬2ÍR;zØV|:óƒ¡ÏÚ¿öwŸËÊbå
å|yááGv}Öú=CçËû ê–un–ÖLÉÃnÙó:“«Î+ß¼u/b¿öà}õÉ{°GýåýöÙÇÌhí;×mö¦uk¾
•gNÕ+›ëw©£Í(‚uòþÞ1díÄˆV5®ÃÃ¶æbûeêa?5lø¶ÖunÔ–¾Â¿3žç]{ÿÍ·lEÎRb~¬<™´}¡zäa!DwCÞ^ëýO_¾,Íð°è£‡Žƒ}à¾•†V´”KÎ
<«¥žmY{—TË”åAÜu]åÝð€GôñêkBÇ&Ç_Ù=Ý…(B«<ì—<Øž Þ[!¬8lÖ
±V¡ÚqG;_wB³=læÆBÇ")ýÙÐû6kŸF+ŸHzÿGX:cÚ1ç…5nÇSó~›ªdÊÁ’È«³*Å®Ç±ÎSvµ|Ö¿öO¡ë;×P7c{lWë^@ä!ÿp‘=­{ÅÃþdíªCå_zô
±¸‡1ë7ª£Í(±J¡ó#_¸W6/Þr«ÛÒ*ÖÚSÕáa[kÕbûeèaÓ?±âÏ±Ù¬)¹ò¼ó3÷×
![!z“•³gÞzÿgóÐL,ûýeK¦æmÛò…X×4¶T7ÄZ[}µ‘÷+ÜŸâÎk®5¯¹²ëÄZË»pÊ›ñí…¨˜VyØEÞM¬	}>Ö‹hÍö°!4^å½šŽI
ånòÖä„bæCù³C~ÞÔ_8"P¥‰åa·bÏÝ4YqxíÖg°ÎSvµl\²h|è:³ê•­æ¶²ò_ŸMîá¢ôŠ‡my1krò`ýNuµyY1kÆ¡óË;Oï{ëzäÉMU%Yíº5ï^Ú
ëXìmC'zØÖ<	b
k™}œäa!DoòáÊå‹Bïÿ7ž{î@¯lÍö°é#àW‡ŽÇZ&¯|'0näÈ½¬kJLY»°añÂWBç¸î½y#½²y°ro£:ó¡“Û:tÌMëV^u¾!òÐ*;kM{…ÊÜrÅ•Á2¬Ÿ
}¾U´ÂÃfßÄÐñØ¡Þ9ÏÊ#’š;
Vª1Ÿˆ5>LßÃêg<y÷ÐJç3‹À-ëwm·õ[ÖyÊÃ®–ÕïÎ¾?t˜‹ñÊÖM(·O¢9ÆŸZvÞ¥W<lËWcýœW6ÖoUW›‘«ÿLn*¯l^²<ì«Î¿À+^äË´Î©j_ÝZ[…ˆUŽ
¡Ó<ì¬9âV­X‘''YyØBÑ›XëéªÊ
×l¬\Ÿ®_óMÙþ};`Å¡vék2­¾EUcn°öõ¬{¯skÄzI¯¬uÒ*;k¿YË¯ÌÊ;Tv|S%­ð°C‡ŽÇz£ä3'}Ì>³Ž ;´V¦1Ÿ¹˜Òÿòý
ÿÇÊMiÚCMååjK€>µÏT^¯¾nBçˆªjOåaµ÷\{Rç…K¡scoÆ­·.ŸJ®W<lre„Ê³>Å+›‡Ð1P]mF^èXçXuûkíñ€.:ý¯xmð\‡Î©ê5£çœ|²ùýc
ãm:ÍÃ÷ÔS{‡Î—6·Šèò°…¢7ùxõŠu¡÷§Æa'Xß«]ÛùX²ösühÕŠe^ùfB>uË W£W>rÙYÇ
†Ñ+_”Ã80ø;|¾±ÿßòú;BTM«<ì¬1*yFB°fÁz†[›¢öŽ;ìô™=êÉÏ>{@úï^‘„W×˜O$£ã§!÷HèºŸí•mVaüSOWcW„uÿÉÃ®Ë'nu6ó
-Ì!…ÎmÔ½÷mç•¡W<ì™¯½zb¨|ÕùbBÇ@uµyÁG´Î±ê9¼çzhGëXô©[…µftÑ”7+MvõØC‚yÓØóØ+›Ði¶5]ÕÞò°…¢7±ÚnÖRzec
q¨~ä•-ƒ5f®{_yúƒìù^Œ_ÈQg]Ï²ãmÎÜñÎyýÙþE^+ã°#:Ø+î2oÒÄ³­ëqò±µYØæÞ4yÇyBÔA«<læ¦¬ãfíåjyˆï½1¹mLìVxØòÓÈ‡›Ä\¦¯]
L‘/ŸÈ‡+–ÍKÿ½1<–›.»Ü¼ví¯cÑÔ)W„Î-ÖkÖ5”‡]-ÌE‡®C9‚óPE.^ñ°Ùÿ<TžùÔ*ã­ß«Î6#/Ö~UÇ,~çíkBÇ¡Í©b
AQX:¯ª×rZß?ŸÛi¶u¾¯ao´œyØBÑ›°÷\èýÏ9v¿•±nÖ^Ä^e°ò®…ö¬ª’1=¼×Žÿæõ{=Èuh]K<áØµhYy~±WGš.döá?X±ì]â‹
Â(Vü&ùV¼òe˜;ñõ³BÇýàƒÅ¿Ñ*Ûò¢½üVÞgÞ¥Uú
eàü­kZ§Ë¼kè˜ÌÑ±%ýïyÆÃYùDø¾¡ö»ˆWÆohíñK¹W¾n²ÖÓ³þ»]°ÎQvu„ró$ÂƒòÊ×IVnÙªÞA½âagýÎU¶‘Ö1ÚÉÃ^ôö[—‡Î‘ý|«ô–Óû6$">Æ+['Œ
%¬ß©ŠXà:Zscyæ…;ÍÃí
ªÚC¶Bô&w^s­Ùv/›1íæ"ù£/?çÜ`üVZ^=e ß:fÝ}%¼ëäX[ÚîoÇ>öØ®eæ€¾Ï¬q¯”u-YéÕãÁ^‹YÇ(š»,+wÿ¢÷Æ4î!1Vì¾vŸ%KgL»
1tìª÷1¢­ð°­ÜÍÈÛÇ•½h­²SÆ<HVÙfbcïò„†ŽÉœ#cßô¿_èÕÙˆ•O$”»³1þ;/–?º¥Î¿¶ÚÏ¡
²æÛ×-˜÷´W¾Y„ÎÉÃ®Ž¹¯O8ÃºÎÜ~GK¯Ã1‡nÞøÛUÐ+6ï1Þ=¡:È•í•Åú½ZýÎk$ËÃ6øF¯xÌ¹ZÇ`Ÿz¯|KóåÆ
ÿ;tnUå=¼ãêkÌïŸgÍh§yØìC:ßªâ}äa!DoÂØÍÊ¯‡VÌš1dÝwóª`ÐYg÷­?÷I«®´¼úÊÀ9‡ŽÛ¿-J£‡ÝÐ–þ×‘>L¿–>öÐë›}–DŸmXûç²±ŠëÏÿ
/ëäñê°ÀûÎŠÇÿdÍÊc= æTˆÌ:×ª×?†°ÆúU#…(C³=lb
yYÇ¼õÊ«¼*Ìý…ywœvüñ^ñÂ~`|z)kï§:=¾m¶Ù&ØFã³¤sK1n‹m¯¬|"GÚ/ýïeö;ËÃ¯zwÖ½^ù¢o=f’µÎÕé]¼ßþÞGþëüzÉÃ®3o.í·µ¶‹g+
æ>ª«_‹È×SÖz¼nó°aÙÌé·„êà`¾ ,Ä¯X¿W;yØôÿ­xY<HÞ¡e±â>¸Öu>Ó±,þÎàÐù1ÖÈÛ¦¦aÜb­Qãß½òtš‡må¿$—W6†“Ž
ÏÈÃBˆîÇÚÛ$ãgÚ÷gï¿û«/¸p`_Aâ`¯<ïü¾CïÙ†¸•Më×|UGHÞy•%tÌ<ýÛ"„<ìt»ºqÉ¢‰ä_c‹Ï8s`M#>
ÿåúRÇò™ÓoÛ¼aý_¼kHÿ¯Š¾KVÞrtóååº/>òhfžÄwæ8¡ü"ŒóŸ¸ëî­Ù,«b¾ñ|êÆëWµžWˆ24ÓÃ>ö°ÃÍXôÉš•ïÇÄîò|[u|Ú¿öwU?[äÊ
Æ;Ï^¸Ö^oÌQzeËŠ•ÅæÉ#’`å	Å¥áoyõYpXkÉQUñnÐWÙrÿmˆ¹çi3üËÿªz
¾Þ8‰÷ÙëÚõ’‡Íùûà'{ïí}4øTä¿µ®ñÊ93‡zu4+^4¯Çœ†÷!þ²õä­¿<ì¬<ýeæëàº‹.Îœ×m'ˆ…¶ÎuÁ›“/ôÊg‘•÷¯]ž+Ú
ëû36ñÊgÁz\«nú=^ùF:ÍÃfo­Ðùòl”Í·ùÐ­·me­¥‡-„Ý1¼YD‘OÃú›w^e
3Oÿ¶ž‡]¥èÒ†{çC(æ.÷F‘œ2i²òy§¿×gÖýÞcÊÏ7öÿ»W}¼zÅš²ñ±Xcýv—ˆÞ¤6íûÈf­ãAä–Ša V)cÍ
¹ƒ˜7-^*ó‡›Ö­ùrà½‘£M°òàW·gáíU(o‘„G>on¿êêÌ¹Röç¨"æïÈƒØë#ñMbïykÄ}þôð{Ë
ºÿûD4Î‡xŸO°Î­×<ìä÷À%'|Yˆ¯ÎÚ/›û(Ïzÿ:Á[µÎ‘œLE¸ñÒË˜ëùÐúþ¨=lÚæG­ïœ'OqÂ¡ùIÔn}EÞ»YžûÔ—^<²È8€9nký>c;­]\3ïÝG­ï
?mìØBïzË¿ßÒù*f~¿‘Nó°GÞ3lëš¾þÌ3ûzåC°¶—µ[V½É½åÕ#„¢ó9þˆ#ÍÜpEÅÜ=kÄ¬¿{çT–Ð1óôo‹Ð,›Xœ!×^çN4ä
·ŽõüCÅ'@É€þï»&œî}·""×IÙ|*y‡-Ú™ª=lÆ·ŒÍñYSAì”Ø¨¼y}ð‰²ò1Ä9`ßüCÖrà¹Ú¿öuæin¹âJóºo“k€÷`Þ˜ò¬ýÇ¯MÌñC„ò
‰¤Å‚WOÖší†ëø!yGòŽíù<±«çÎy0íÄÞó´!ÖšúDŒY‡–ê~jØðmC„W6Á:§^ô°ñ[¯_8ÿYbÚwÝe¯ø
õ…Ö^k‰˜÷êjßv{0_5¢ŸgÍó‹–,|-ë»'êF²Öÿ
bþcúuÌ¥Ì?îkïÚ´bêl6÷ß|‹yo!â‘óäCÄ¿ÍWÖ±ö¦ì£”5'Ïï›g'9Ÿ³ú3ì!’—Nó°éëX>šôË_îÛÖ³^yþäIçÅ<cò°…¢w`'kŸ¼<b.?éGgy)Îé
”&tÌ¼ýÛ¼°ÞøWkWoö®Q/Teì¹;¬>>UÕÞ0c†ÿ+Fô&?ûì±} ª‡-Ú™¬÷î–1å²Î!VYc°,áU‰Û"FÚ«›÷ãiâby†Ž³÷ž{x4¬‘Îòiò´
xùŸoìÿ«.âÍX7ÌºdŽÏyí¾Û®{±‘ÇŸñk“¼=.ÓPç³‘GÉ«ÇÂÊ'Ò(ò™zõÄ€Âš™¬c!âäñ8ð¥CÞ$^ñX¬E"î1+÷V¬‡
gœpBæÞ‰¸§’ß:äkì¸ãŽëÓ™×Æ÷ÎzŽ§Ä*ßËv£è0OÌ(süÌ‰ñÏÿ›½7FÝ{ßvK¦M½6&nƒ¹©P~³VÁ¹xï®þÙ…§Þ·ß>û|oÄ{ˆ½
¸>YySBêV›¾£·=¾&÷}×$ÿÏ6smoŽ~î +ÇT–Úµ¯H»šuÞÜ{Ä§ã÷†àþ$®ŸýÚ³êÙrÍ¦æñƒ›ÏMÖyÓ.qX^>ß‰ûÂ»'h³‚8tš‡
+fÍ¸#ëZ|º~íoyŽhë‰•HÞWÄ7ñÊOì¶añ‚±Y^xZò°…¢·`,äõ=,1¶ÇOllÛ{ÍÃÆJŒf{í$ÚfïºÅ
oœX£ªýZb¬c’ëÜ+_ú&x\yú$i­[0ïé²kÛ‹"[´3YïÝfˆu·Eüëb½ó¾È9ÄûßŸÞû|¢¼mBVÞ¥Xåõ°Á>3üÞí¼:²ðò‰T¹¯!9Ÿb|ìF1&å·%Žžÿæ¹
?òxØÀ¾1>v£˜—MÎ-f/‹Fyç“`•—‡]ˆÉÏ»f¢xñ²edÍÑu«‡
Ì…UWÑ¨¬y«ví+âAg­Ëlí-sy¬Ë¢?Îµ™ónfÞ¿"Ì›4ñlï;Ð‘ïÏŸX}Æ3øÖ^n5´qé¢ÉEýûNô°ÙÿÜíi¬¬zåa!DoÂÜ'}¯?B{ÍÚ]Æ·¡<–ü~DH
ÃVJè|ÙSÊ+W5Ä	2·O{P{ñnÂ·fýÚ ³ÎÆVÁŒW^9Þ:~9^9wæ=ˆuò®¢ÏÌÜ@‘µÜU"[´3­ò°‰1&«
†^?¸_!­¼žùx{õf©ˆ‡M®k«¾2yD¼|"ä«Ö÷ÐÇð®UÊëañºYùa«”w.	VyyØÕ‹œ6Gr˜w:-ƒXjï;äQ²¦Ízt³‡
ÄÎæ™óÄšÖ‹N?Ã¼_Û¹¯ˆ¿ëcçþm;û×ÀX_Úû.EÄ÷/³®£=l`^8ÏØ7Fä/g,ú›<l!„èmhkÉiÆúnÖá=ãÇâ/[t.¹„üªrz–„v—>3kZ¹¦äie]
2ÿ›Ö+²½X}"Æ³^Ù*áû²öŸuz\‡	O?ýþË5Â+’·.>\¹|Qèšµó¸DôÍö°Y_ŒÿQfl‰1Ÿwü¢"föµ#öôÎ#
±™ÞhY*âa³vÛª¯L‘„¬|"ìëë•/^ý‰ºb´’\ÉÄYŸ=f¶¢â{³oˆw
V=½äao¹×'z×µ¬ð¯ªÎ¡V5<;1ñ¢1â]vÞÏO¨—ß:ô™n÷°aØà3÷cˆ¹ƒ’9Eë3íÞW¤-çÝä}×<â·oç1c#<_ä!«r^ƒëYöûwª‡
Œm«x¾Û3.¤NÚ¾Ðgäa!„èTw‡Ú6<dñ=ô³­~ÂàA—zÅ{–P|}Ýºbå…ÈC3<ìÍÖýóŠY3†ç9´§JÈáêå—ŒãÖÿ²gC™¼LŒñ—Í˜v³w¼ŠxØ`µieóˆ$X
ùDðô¼²eà~þÊËÇÅä'Žqòä|!gU“Í½^Eu${æó±êì%ˆŸ(’ÓÙïâ;	âKbò„”ä6nì÷²‡
<ëEç'É•LlJ#ÖgÛÝÃNày(»îˆ=|È¯Ø‰p?pþÞwÌ÷Ež½V³èd¸ž›Ö¯ùÚ»f!Ñv2ÐØ®ËÃBÑm›jÛØ»R|Ïð_Üdæ\‘Æê3Õ«(D^Ø“ ß±
±!~kEØC‘}w¬ýœê†¼Lœ±Ù±¾ q?ìÙ5gÂøSYST6* 1¾Œ«ðô³Îïœ±0¹ÈÕUb–C¿QÙ<"
×\xQð¾a¯âfÀ\k¼Or¹¥½ß6ñôä4cÿÄ:ïMöÇ{öþû·'JlÎuæ6ñ€øNÄy†ö§ŒÅzF«Šfï¬PýIŒn;ÂóÇoÂ¼^‘÷{¤EžIöèëT~²÷ÞžqÌz¼ö¼Á
ûÍ=ò[‡îÞýC›à…‡ê©j>„ß=Tÿ[Ï.ý`nóÉ»‡ncù…éç›ëÉ\nhNÔzf­=ÛÆÌ#“÷:6Ž–öŽ9ÞN›²`(ù
có›ñœ‘ë‚½e«Kq‡î§¢kZsf¼³c½ìdNšö7
m_èzÝ3S!„h5Äu…ÚÃ·_x¡Þ$ÏÄâwÞ¾&tž{à|b=ÄSÃ†oºfËfN¿Å++„¨üÆmøÒÄ´&û,àó²f•'gSÕžuÄá…1nÇÓÀ«æÿ‡Æ^Âgï=÷ì;ÿ”S|
mÆ¼ÉoŒÿÆ¿á+´òÚâ—³W÷[ã^üâî8÷º×(ˆ²óN;
ì©çŠï?Ýèk0Ç;‚ß§ò“UïDòÐ‘—Ž}uùÎìË|gîÕNòNÛžqÚ—7G?ws•\Sî)òLpí¹ûî^]þcò|Móü!É5á¿üþ8¡f¶»Í„ïE›>bè=ÛpOÏ§ñ
ÝBŽÚ%½÷ã Ç5Kî%ÄuLž¯n{G!„Wœ{^0^vó†õÿZUÜR§Ê‰A,Æ9aè¿ZûO>tëmÕ[!„B!„B!ºbR¬ü¡ì¹R&j7ÀüwèÚ°æÞ+Û«X9ñýóæ6
B!„B!„BÖ
†<G´añÂW:)‡XÕ/$}MÈíwÔ!‡zE{r°§—u/‘£×«C!„B!„B!Ò°—Æº÷æ´¼Çï½ìcÉkFKò—¦Õ­¬™7çáôµX¿`þ(¯\7rîÉ?ÿÑïÎþ[xÓìßÅþ,Ö
ýóÑÊåKÈ(„B!„B!„EØm×]û>ZµbE–%¯þN„<*¡=ì¯:ÿ¯hW³ÿ|Häª9pßý¼ê…B!„B!„"ö(\<uÊUž'Ù+6ûj§¿ç'kW}LÜz/RÄÃ&>{
Ÿ½öòªB!„B!„BˆhÈñÉš•ï{þd·{Ø¯>9bô÷|fø½Ûyåº•<ö§ýkÿ0òžaÛôªß/„B!„B!„¨¼Ç/½¬oá”7/!öØó,½ú:‘Çî²õÔ—^<²Q;î°
ƒW¬kñ<ìO×¯ý-qüÌ‡E!„B!„B!šÅ®»ìÒwèôrÜq?Ú×¯›÷t'´§#ùVŽ:äÐ¾ÝwÛÕ+.„B!„B!„B!„B!„B!„B!„B!„B
!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!
„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„
B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„B!„hÛl½uß>Ûí*I’$I’$I’$I’$I’$Im§¶Ù¾ï¸Ý’$I’$I’$I’$I’$
I’¤¶“<lI’$I’$I’$I’$I’$©]%[’$I’$I’$I’$I’$IjWÉÃ–$I’$I’$I’$I’$I’ÚUò°%I’$I’$I’$I’$I’¤v•<lI’$I’$I’$I’$I’$©]%[’$I’$
I’$I’$I’$IjWÉÃ–$I’$I’$I’$I’$I’ÚUò°%I’$I’$I’$I’$I’¤v•<lI’$I’$I’$I’$I’$©]%[’$I’$I’$I’$I’$IjWÉÃ–$I’$I’$I’$I’$I’ÚU
ò°%I’$I’$I’$I’$I’¤v•<lI’$I’$I’$I’$I’$©]%»5ý‹»·þnÙúß„ôíÒõ_Üáµn’$u—ÆßõèYï…»Ï¾Ò­C’$I’$I’$I’$©Û$»ùºñäóûþ¼rã?ý
iõ†ÿ'­?®Üø×qw=¼ƒW‡$IÝ©¥Ï;!ônÐâ Ÿ_tØIn’$I’$I’$I’$IÝ¤^ó°ûÇM¹ä‹ž
iÌM÷lã•/«³úiß­Y'ÿZ’$KY>öof/yåä½së$I’ºSç||ßE‡žÔwæ~G»Ÿ•$I’$I’¤nQ¯yØ_ÏY:Þò†f<üì>^ù²úbÚüÇ[y|)¬ö8x`<óÊçQ2ö
Lë”}ŽpËJ½£µ¯¼užõ®X=vÒ™^ùnÓ¹×gÍ?þêÍY·…ÊL¹oÄnV™Wn»[ï˜R÷ê³·ßfÝÌ5§?ÿøå7™÷ßÜcòŽ'IEuÙQ§õÑ?ülÚ¼‡¿]²nñé6|SßÌ]
öÆÇ“gßÂ{Ï«S’¤öÒµÇŸlc¬þ$åÑsƒïÚ:t-yöÕŸze¥î×äaOîº?f?þÜþ^YIj…zÍÃþõÌ…ÏZ¾Ð;>½§W¾ŒÞþÄ.Ö±ßŸ0õ
¯¼TŸ.8ì„>ë·áo^ù<úíü5BÇyùÖûä©Iÿ­÷:´ïËé‹ž±îË'®ºÅ­£›tÖþÇ˜Ïè­ÿ0TfÞˆ1[eÞ¼÷É]½cJÝ«o—¬ûÌº7Bó‰Œÿ¬Ï÷Ÿ2È;ž$åÞõG“¦ß
ðíªÿaÝ{!ÑÇðê–$©½tûé—û8ß-ïÿ¯¬$yÂãÝ__Îxo¤WVê~­xaÂÏC÷Ç‡§]ç••¤VHößU§‡}õñgö}·jã¿„ŽûÕ¬Ec” µ’‡-µ£ðmÿÞÚÕ¡ûŽ¿{
ut“,/ç›¹+§‡>O\õ\ç}ÞF]7d«åÏ?ÑÓØÛóÕ£go²uèXÚû·¸¬÷0ítèó\kë^Z4êÕc¼ãIR=yåm}^±áOÖ=—¥´‡½ö•7Î±ö
Ö;¤s5òêÛÜ6é†Îqë‘ÚCò°¥:%[Ê’<l©ÓÔkvV.×îx`;¯|‘‹âëw—¾ì›,[ÿkíÑÖzÉÃ–ÚUƒO:¯ïÛ•ü%tÏ|ðúŒk½òÝ$Ær¡ë@¼zèó£ojÆÎ>zé/Ü
ã5Êêß¥…Zõ;}õK“Î«Îy×n—5ŸÍÜPèóìÅlýæú¤*…ýíªÿæ½k,¥=lÆ Ögó¾¥öÑï¬ZìÝ½˜w¬S%[ªSò°¥,ÉÃ–:M½æaôÆÌ›­¾^]ùQ³rˆŒ¸êÖ
­¼òRý’‡-µ³¦>ðÔÖýùÈ ÝòÝ"ëÙá½ú<þŒuÝî<ëR÷xŠõ°¹Ì½úò¨—<lbšCñ¢UÇ:oš2çîÐ5µò0dµuõ¤ÞÓ¥GŸÒ÷Ýò¾óÞ1Y’‡Ýýºåô‹Í÷Q£ð?É
KæÕ'µ^ò°¥:%[Ê’<l©Ó$ûïªÃC<}¿£ÌØAåÀnÉÃ–ÚY¬åøÍìÅcC÷ÍïÞ[9¯ê}GÛU¿™½ä•Ð5Xóêç†>ó)šÏõåGŸê¯Qy<lrž?Ê«3V½äa[ß•÷Êæ
Qÿko]:ñÙ¡ÏãY¿·æ¢¥ªôéÛs†f½[~={Ñ‹ùòÑ¯ÞþÀvO\qsw×Ã;,|fì‘›§Î½ÿÛ¥ë¿‡ÝýZùâë§fÝ'z?užäaKuJ¶”%yØR§©×<ì¬¾<ëÎ½òyµô
¹×ŽëÏ+úöA?uËKÍ‘<l©ÝÅžõÖúò
w?²£W¾dù;óGŽ=,ôyb­ç:o.ñ<6úäY·zuÆJvõ6qÝ¡ãŸm•±âc‡ž{…{<Iò”5çöÛù+f{ëÕqòþ¿<ìîóiä!´~Ó´~õæ¬Û¼:¥ÖK¶T§äaKY
’‡-ušzÍÃ^÷ê›ç[ý¼'®ºÅ-ŸGÄùYylÉ/â•—š'yØR'ˆ=šB÷ãYÖ|xå;]Ç¿}Yèû¿yï“»†>ê¾GŸkâ¤½c¥eõïþ¼rã?…þý+7þOÊ«7Fò°«÷°ß¾ÿé`~
â³­2ß.YûI¨ŒöM“ªÐŠ1N¾K­Y—wÎ­Qò°»KŒU¬ß3$Æ!eî©9’‡-Õ)yØR–äaK¦^ó°­ñq}yö‚çV/ï•µÿ"yØR'Ÿš5¡ûgÊ#w÷Êwº,ç¥
[†oc•
Í#Zý;<Oë7ùlÚ¼‡½zc$»z›Ö¡ãdåÝþfîÊé¡2çtœ{<IòD¬uèþzáæaæû-FO_sûV3}vßòæT’Z¯'Ï¸1tŸlzköÐ¿£ñw=ºƒW¯ÔZÉÃ–ê”<l)K
ò°¥NS¯yØYëÁ«ô°ÓZñycnº§ÔxDª^ò°¥N¾Cèþ!F´Û÷nšþÐ¨½ó¾»ÿ´xÃçéÏÿ~ÁªÅÞ±Ò²Úþ}ú#£ö±ÞÃ/¼Æ­Û“<ìê=l+–‘øl«¹²Ce¼cI’'ÖŒ°>$
}o}·jã¿œ¼×any©74°ÇÎ–{"ôbŸâ¯ç,úÛW3—¾äÕ-µVò°¥:%[Ê’<l©ÓÔkö²Ñ‚kñÑ°ó®rËÇŠü¬¡cñNêÒÕ?=£oì­÷nË^@¼»Øc’\3~vŸ'¯¼­
ï”}Žpë¨B‡µØÏ\{ÇV¯ÝùàöxqBSî±ÛØÛïÛö¾®ë»äð“ÜúŠ¨—=l®ÿ]×7iøã;/þå+Çr/|ðúŒk¹¸7øwò½öê8šïÍõá>äšô›r
{r­¸6±9J«¿—µOl«î¡féµ;Ø.ô½ûYeBÏ{CzÇJ+ËÃæ7
yåOÁ«Û“<ìê=ì!ç\|çŸm•!Çyúóß-ÛøÞ±$É“u?VñþºGã†<´}è>a}'kK?%ôwr[)æ¾½%[ªSò°¥,ÉÃ–:M½æaãÏ†žQTUîÒýV
Æ+ŸWss
žcZ!O?vîˆ1ýþ½µ«­ëˆýãX³Hl‡w±Âƒý‹»·f¯ËÏ§ÍôO‹×~äGZ[®ío7½=g(ûØÍÌ^o×Š=o¬ãñ·Ðõµ4ûñçöo<9eÿþçþ:Îof/ëÕÝ(
êõ¾§%<·‰÷<ºÓ3<eíø£ë¾jã¿pÝG^}ÛVUäÂ±¾¿MV¹s<¾ïÙ†lÍ}Œ§L™•/M<
O™<óCÎ¾,Xo*t<+—òWÜ<°f×ZOñm¹9Ÿ¢÷c^Ysd¿{oå<¯l'ë™ëïØ*ô½³Ææ_ÍZ4&ýyö†ôŽ•V–‡Íß™Ï°îæç¼ú³$»z›=RCÇÉÚ#´Ÿm©w,Iòôø
å7ïÇ&Ïì••zG¡öÍùÂ!ü5 ¡x~DÅ«_jäaKuJ¶”%yØR§©×<lk-:ªÊÃqÕ­AŸ…~Hký­õÍ1™xkÄÔFùq)¿±aÜÔKYëêK–ˆ]õŽ•W|Ÿ…¿|ùè
¼1ãüÖ^ÝE•îXóeU¤_ËýG?æ»eëãÕŸ%òvï/KVÝ¡çÏœœ ¿ž¹`÷cÖ¹ñ<„ŽÛ>?vÙ}ßÌ[>Õ»A-]·™òÞw/+æ¢¬¹‡Á'ç–ïT‘—#ô³æ6M™sw
úóì é+-ÏÃæÙ".ôbÁËÌûÈÃ®ÞÃÆë	‡xX«Lhîèë9Ë'zÇ’$OäôoÆ}/u®qrŸÕÿiœÇÝ<õ½GBŸIbµ¥ö”<l©NÉÃ–²;F–¤vQ¯yØÖ;Uåa4iú
¡úÙÌ+[Dž‡M¾kÏ±<úí{+ß;ÿŸ¹çcé£7fÞì£¨þ¸hMÿM?¿À=‡D½èa_sÜÙæždEÄXªL\Uoú9$î›<Þù$*êasogÅãÇŠëBNïû—•u®Ìéxe;Uøóéï‹—
ŸU¦ü”Aé2EÞÅž‡Fß4tkë¾ÈÚwÒS³=lüv®5ëÈ¡“äuâx¬£!Nó±¨Y6
‡ølëó¬ÙH¿È;N§ˆßœß·1Ÿ×«·?°¾~/å’b­s´ä0cí^r-XçC{tå1§¹uä••'©ñý"õ¶f=öÜ~¡{$o†ùþÐçP•ë*ËêêãÏhcß7ãîzxÖ¶Ëû†øÎ‡
÷`c;Èy_vTµïyØRj…‡ÍóÃ;çù‡ýà9çó1Þ+ß!U'oŒœ%Þ…¬7m/°6õ‘A7ö5k}rH›÷7>1¬}9Î7«¿ß
Ym"ýÑ¼±š½ ^ó°_úèŽVßîªcOwË{"Vù»å|ª¿®øHËÃæ»’ãÚú¾Eô»÷V-,ú>ªÓÃFÄdßqÆ
÷<P¯yØ÷_xmŸ•Ã¤¬Èãá?$«¾ÄÃÆSÞôÖì!ÞñÓ*âa“ÿ¼¶^Ý±b-oÝcEkOºnÎmÊ[ï=‹F½zLº}ïXiÅxØÈŠáÿã¢5‹ú¾Íð°9·Q×
ÙŠ¹‘-ïŠ?„Ž×(Þ·›§Î½Ÿ¯LßŠ=Ž÷? Wyèxü{ãçbäÍ¹†ÞÍÄg[ŸÅÊÆôï›©O>¿/t-¬9ö: Çÿ·K×áýÞäVbo
ïbÄ|@è<cröÒ—bLÜ8&a¼„¿\ÔWâº1ÿÇš
o­úvyÿ7¼þÎÕäœòêé¡Aƒð;qmCÇa/>ï>OdímË{3ôyÆ›Þy’ƒË:ïŸªýë¾ˆ½7ºYÖ\þ[©ß‘qˆµærõØIgzÇÉ#žÅÐoEÞîÐç™ÿ\óòä³¾]²nSÖó•ä®+
ú|¥5þ®GwghÜG{†o“koK»¾Ž<.^[£2v£wÔ(ÚW¯l1Ç`=§uucÄ½o—W–>óµôi~p/o¹h÷˜Û•³®}÷"‡^¨þ¬5c!5ËÃ¾èÐ“ò¶’Ó{~’g=é
Kí#×©‹;É¼§Î>è§nyK¬«I×WdlÒ(ú
¡ó$W™W6¯‡ÿKO/7-ý©_Ï^ô">rÕýë¼x'³Ó—#?-ý/<í*Î/ïóJ›ˆâµ‰<K<'esSv“zÍÃ¦?nÝUìÝ÷Üà»‚qxŒ‹¼²EeyØ[Ú…¿xÏnm*Kåñ°iÓÈ
wÓþý@‹7|Ó¦ô’‡MÛõíÊ2ï<+Þä—&¿:ïÛ¥Ï;1zLÎrú+Þy¤eÕÅo3à)¼ny=ì-÷Ù¯cÚ¹¼b¼Yg,}=k}EUkJÚQéïê½[™ÏN—±Æ×YŠõ°‰;°î‰´×
«º=lÆ¬e±ÎÛþ'ÞS‘þïK¯þ¢òžƒPî—¬Ï3>H¾è^]²âyÓïEü’/§¿÷¤w
Cbn±lÉÚÕòañ˜y<¯Ý{¤Åøá³ióö¾s–˜·Êëí[ï“2²Ö*”ñÆî>ûJ3oªrÝýë8Ÿ½ýî°"ï—n÷ièº0_šw³ÖƒVÓõž¡ão®ñs<¿Œ¬ß7KxÉe×>
X{©7îÀu!>Ï{Ç„DìRÙö¸ÌsÊ<d°ì–±TÌ˜(¯¬ß½®ãÅ*çÈ*ÃxããÉ³oñrmZïWk¬âõ?beóŽ»êö°¹öóáÎx3K<{¬cm§w=q{Öø•^yKÖºš¬=ê=}9}
Ñ3¡:Ù?Ì+ëa_÷³³ž—"ãfÚ…<kæóˆó"§Èy%bÜÎûÀ;V–bŸWâÜŠö=É«êíÖê5ÛjwQÙ1²¼òhze‹Êò°-ËsN{Æ|ë,xf™kŽ‰ÇB¬™÷Î+­às½tÝf
öÕã\È#LUºíÂ¤ÿÊ¹â«zç·ö•·ÎóÎ…yUüÚDY¹ºù[ãg=Öx¬÷ž~ñðÆ¿[ñ¾›ß™÷ Ww£¨×ûž7œpŽ¹.
17Šçæõè‹eµYŒq£xçÓ(ëœØÃªL”×ÃÎ{$rÏ1ÌuâYá>ä~e<fõkñJóh`Ž!pÜ²sùí¬ôzâ³>š·,ÒïŒõ°ÏUè³Ì—‰Y®ËÃf¬ÉÜU¨î""î†Øï¸
j¥‡ÍüÆÏ{^}Îô1˜óó¾c3åyØüæø[eÞ±ÉµºõÔ‹Üó±ëa“+Ï¸$ÖÃÆ¯ÂõÞá±âüh+¼¶4Q‘öÈS6šòÀÈÝ³¾wÖ>¨±ÊòÊ‰ó*ºþ¯[´òÅ×O
]+—‘µG(zúšÛs·–<›ßmýko]Xö9£Ýg?ï|,y6ã?,\½Æ;OÌï](óœfÅåL{è™½¼òyÅ>¡cñ[{eëTû¡KnÈµ÷<l[øÎU®õeÎ²•s!iY÷{‘¼„‰
¬{Øf¯¬%ë7ˆÉ3àyØŒ]<˜¼±…)1WÄÚpï|bEŸ‹~x™¹“´Ø¿½è{Ü{^¹¯»Çöi-ñÞ©k> SÔk6ëª¬û¡ Ï+TwÞ5?yëa3¿DN7ï¹ä}@<LÖû Èºøä¹¦-
6Õ+ÇeH†ŸúyË¬~OÞº<Y}éÆ=8«¿³µö”ß–ØK¯Ž´X¿MœE¨NÖú{åe]ï,±Ö/6>YŸÃü}ËuŸK×QÖÃæ¾"qOÞw ÊXÍª‹>ŠWGYù—?-¸V
¢ÄÚÝ<ß5´Çn‘þS›÷½uOðîòŽ•V6ëòËÄ^[Â§Ïãm¶ÒÃfÞ°ñóÞžg\³ô1ÈÙå}Çf*ËÃfÌnyÇEÄX¤èºqÏÃNÚù¼ã’_8¯®"bMjLß(¶=Ê£º<lD¬
u\žyâ¼:,µÿ1¼‹6†ÏñƒïÚ-ge³ÅýÄ5]+ž$«û{ÇŒU–‡Mž¢*ÛÞ7Ìuxç’ÕïÆÏ§?YÖOhTÑ5eŸÓôœl¢ªóËYkPÞX–ªãa'ó¸Þï˜–<ì‹û<+¬
ŒÈ]ZU>–²â:GòUxeC
õ%1ÆñÊ‡Ú/}»dí'^Y”åaóÌÿ~Áª¥Þo+Úõ*rƒÑ—+º¾Ç1Òž_RÖóJ,œÕ.Ñ·KÖ}FÿÉ;§nU¯yØVYä•õÄ³ê1/V¤?+ÏÃþÃâ5ÉCDÌiÖÚ*öñ
êh9éË®lÔÄ{ÝÉ:7Öµ{åÕ6qÚ¡ãð›òÛzå-Ñç·®Užz­:ÒÂÃ »¾êô}þ{Œg@MÞ>8}¬?.Zÿ¡U'{4xu}ñÐ;‡6Ò+Û©JÇ.lÿöeYŸùÉE|·<
6Â'}žü/Y9—CªÚÃ&Vš~­uÏþ@K×mfnÑ–¸Ÿ_Íý·ñc}ìVzØôÍ?ŸÞ--úŠécY“T§,›~H•>M"Þ}EúÐY6±×VÜ“'ÏÃæ{·xíGŒaˆ—!_îW³
ŽŽÉ³ÿhL{”WuzØôoC¹wñçíc&²ö'æ~UîG{Ü‚@þ_«¹¯Cåˆ£+òÌ†dyØô3ËÆë¿ó–¾M‘>¹Õï.š³ÎÓÒç^;Î;§´Ê>§YëŒ­MEdå-ÉÇR‡<»Œ‡$
û‡â}o­mm&sÆ´¡I[JÛê­©Fÿðî²IE|ÄªEÜKèüˆ™Ëz[šúÀS?ÊqØ¨˜ª´¬¾¿‘WY}<u+v­ŒX·Y´Ï€¸îÖþ9â>û|ÚüGï¿˜·åýßxe‰IðÎ#-ëyý
fþòiuôÁù>Þ9u«zÍÃå³Lä•õd­Ý³ÖúU%ËÃæYaï”"ï×DxßÖõòÖð7CÖûëWoÍ¾Ã+Û¨nó°ñUCóÜìÛæ•÷díúþëS¯ôÊ&²®w£h?®þén]1ÊòèÓ²°W‡
%ÊZu“ËÂ+_FÖÚ*æ¸ÛQì«Ãž1‰ÎÜ/<g‘ˆx´ÆÏ£"ý¦¼6>¹µ~:ïZÁ*=lÆô¥¬ûáÕ±Nã¼ƒ¼‡Þí±fYuàmÆ¬ýøsûÓKdùdü{ãçbäå‹ãÞi¼/¬=›
•¾—Úa|Õ(k“©¿åôb=&k‚ÉÈÿæ=Ï~7^ù
ã¦^êWZ–‡Í£Ìšä,›w•/1¿DìwVÜ/ïæÅ¼ü&^¾"Ú…Æ{õë9K^ÕCÛäÝç‰øíCÇ*ë%âºdÅ5Yc’•§¤H}Ý(Öž…®×ß
å>J4iØc;yÇQ–oj‰½nèÛñûò¾!aò¾‰ñµ¸Þy¥eõ»-Ñv3Æûˆ=û8OþKþ!ÚG/7J‘}½Ë>§±÷†ŸJ{í•mºågþÅÝ…ûÐU)k,—µ~7Fò°(æi¬kÅýO¿€
g
«¿Ízì}.2Ö[åí/×!úyÖ}³_bZž÷Zä;§c2ÅŽA‹Ì«3?A_(y—#ÖÙóÞ´Æ¦òúI–¸§¬¹ïóÚÒOázëý™+hw2Þç|'ï|•gï·D´‰}pÄóJü^zíqHU½k:
Mò°ÿ.¯¬'k^¼ý^Ù2²<ìéŒÊÕ¾Y²Ö§Ñ¨ÚßÍ+Öq‡Î-ïÚ¹nó°ég‡Ž;ë‰v!¼æ ÿ÷±þ u½´xÃçÄKxuä‘Õ>³¬ìzµï×í†óœ×½çãØÐq«Ìy)å÷°}ø
PúëyÖÞWéa“Ï.TâÎ÷H~Ò¬xî"1Öw‰m•â=lÞßxA¬Êªw“µlRWÞµ Erš0Î
GçMÞUâé÷ÓÅç‘åa[ëkpòÆ¦’C×òÛ™Ã‰É)’ÈËc^Fe½±FeÅ5pý¼øz·ŽDCÎ¾ÌÌ]4C·‰øwË;yhÐ`·<}áPÙªbfc=lî
<oÿþ6³Î‰•Í³æÅzØxèä¨c~2«¾=ÁAÍ{«xN­¾?ïÎ¼{U„Dní`ýKÖ}–ç}W—²ÆrYÂób‘ö„¾¾ÿ{`¾bÉºM|Föß…÷h]KÚhö×óêh±J¿_¸ze¨
>îÝ:×³ÆÊšÿÎ»¯1}o.%¯‡¬øØ±F›=ˆÝòžybæ²úzEû7ÜûVìUžw­+y¯¬ç˜¾ožý8òxØôsb¼Žïûàvl}a¯ŽnT¯yØÜ§¡ßŸ~´WÖ9àCuÇô3ËÈò°«
òD³ò¯ÄÎïÕ%kú#^ÙFu“‡Í
ÔfpWù]¬¹Ø5PÖõ®k/o¿Š²b½E¨þ"ýÃ<×£;„Ž›7ŸŽ”­"6qÀV|IÌÞ³‰ªò°³bÃñ¯‹ìò}^m;—>ŸWG£äa—SŒ‡œ7gm‡•³±¯WG£òxØ¬9e]€
ç1³ç5ÖÅ²îýE£^=Æ;_KY>,ùÎ¼ò‰:ÅÃFÞš¦˜~Æßr`ã‹¿{¿u¯ˆ}¡­ëãñgýVU¬ÕŠñ°™cÊ»'ùp­:¿˜6ÿq¯ŽFy6í{açÝs™x¹,?*Ï>”U<§
yÂŒ÷\^¯--î7ë™m—½óxØ\'æÙŸ¸âfw=k´¬9€^ó°æÕŒ9&r6]ûÍ¸ÏŠ‰(²Ö«jÍ|ä—?
^¿é‹žñÊ6Š50¡zÒÊsÿpíBux¹Õãa“‡íÉ+osëjÔÀú-#‚wg¬ÇÞXŸ5®Â‡‹i­zÉÏªwîˆ1yåÅxØäÖÁôêjÔ@ÌÑ×ÄóòæºQ½æa[žgž>‚%ËÃòÖ3—
UÝöÀã¹nu»âå>‹U7yØÄ§„ê¯rÄ~Ì¡ãà©ze‘u½ó´ÛyT·‡ª?O¢ˆh×BÇe ’WVŠW­zqòé¡rybKªò°É±dœË¿ÝvÚ
·¼%ÆvVŒ@ÞX4yØå”åaOÆxÝ«Ã÷«•K‚{(OìKŒ‡ÍZÔ¼ã%KÄÓ…ŽQd­@ZäÃ	Õg¿§Nò°é~ýîÒ×­ß
ÑGZë€µ‡ãõÕ¬EcB×‰þ—WñÌZ¿S¹Z²<l|abª½:,Ñ®Xþ
ÞGž±U–‡ÍŒ2kñØWÜª;ÏÜ^UÏ©µÇõ”ñ9¬|™øIyÞýu*ÖÃÆkÍ;k©×<ì…ÏŒ=2TÏoß[ù^žxÕXª›µ(­ž×´ö2åþÏó\eå3kTž9'ëÙ$Ÿ¬W6QæÜô–ëÏýã
µë–²ö/ûåõùò›Zã˜ÍSçÞ_ôü‘G/T7q:±ugyØŒ“òî%×(k ŠÝ3¬›$ûoÏgÎ>BH¡5{<÷^¹²ªÛÃFŸ¼1ëÖÐ1¾™»ì
¯lÕb>ü²£NhOÈ¿f=Ï^=ê&ÛZ/]õÞccnºg›ÐqV¾øú©^Yd]ïªú}iÕía÷ªŸõ]^Ù2²îÝºóð÷šŠzØŒí,ß/6o6~€/–§¯léáOìªåÉ*»œ,/
”÷Pë[²â:Éíå•O”åaã‡3>3x2×ß-Y÷YÑ˜±FQ‡gtÕ±§»åQ'yØ(Ë_Däc°ÊZ9°y?•Ù—¢Û”õÎÎ3^µö0-²^=-ËÃæÙ*ã'ÊÊ—N\¤W>‘Õï~÷ÉçôÊzÂ¿
²Ö"1'ãÅø&ªê9eí¯uÍÊÌ)XqZÞ¾ÚÍ”ça?\Õ¼h¢^ò°ñ¨CýYb2ªš°æíZ½î›þˆ•32v	ãô:
ÞïO|çštyÞÏ–·™'§¤5Æá<Ÿx®[>K}$c´lô„½ò‰²ò˜V1Æ»ÜZ;Ž±žWò¯ä9O‹yÛPÝ(Ïº¿nQ¯yØÜÿ¡ß>o!¤PÎº<ï ¢j†‡M?/|Ý>øÎ+›GW
sZùXÙ€÷éG“¦ßÀš‹ß/Xµ8fo©FyÇjT7yØÖoÕ±MVnùX_ÎºÞUõûÒªÛÃfŽ øoøÜ+[V¡õEÄ0zå¤xõ°‘§E_,&÷N6káBuÐ¯¬"¾åû¾ßºÏBÇ
w±W>‘<ìrªÓEëˆuY›ß™÷ W>‘åaoië—Æ<ydíðêíá=‹ÈZoA.¯,ªów«ÊK‹Ø/Ëceœ>üü«T&+÷JsiÝ$öÒ
]§¼óâY>p¬÷bÉò°É‰ë•Ñ÷{„óäYãcõ»É•è•Ñ[÷ØÍºÆ±{¾UùœZ¹qó\³F1g=ëU¿¯Ë(k,GN›*æUÒê%{ÒðÇwÕ‘'7ž'kÏ…<kêë™Cç;ŸFŸãG
ßkÒô¬ñtì=÷ó¼æ‰[¨{Œlyyâ­¬õßìGç••§Áz;¯,ªêyµdås"ŠW¶ÛÔk¶Õ¾‘çÑ+ë)ToÑþB5ÃÃ~nð]f¼s™µC—~Ò@ü9¿]ÞÿuŒ"òŽÝ¨nò°
­ybòÕU•¬¶$vÌm]ïØ6;¯ênŸ­µ\Mñ°Þa3æÏzIe<ìï}¿ð8‡q•W¾
›53¡:Ø·È+++Â+›Hv9Õé…&²Öræù-›±œW6<°€çNÜNl|dŒ¬>þ¹WÕù»Ué¥eåQÐ–ß¸16*+6ïÁªâî»EÄn„®UÞÜÃôa­Ék_yã¯|–êö
°‘µ×Pž5üu{Ø¡øÊD±s3U>§YóEâe­þ>ûâxe›©ªòKæQ/yØ–ßPäž²D¬jè¼½²uËÊ5ëÃ†Ö2+ýý\ÝÇî1ïÚÍPŒ3ëo¼²ª{ŒlÍóçÉ¹ëÒT‡“Èš
OølêÜ{½²¨ªçÕ’5òéÛs†ze»Mò°¿WÙœµìª·êÄ!5ÃÃf Eè(v­l£Ø‡•|dVŸ¯
yçÐ¨nñ°Y¯ã]—º;æ¶ÊWÕïK«îöÙj÷šáa‡î©"ãÉVe)ï¿ðÚÌ²e=ìïÈˆ¡by¯|¬¬18b ”WÉÃ.§:½ÐD/Ý2<˜G
Åæ¨m–‡ýàÅ×ïÉ^çj¯l±?^è8±O¿[•ÞXZŒŸñŸ­û¡17¶•_»Ê1h7ÈúÍxÙ‹‘ß!x,Ûø±>pHÍð°³ö•í/Öía#b–BÇˆÝ²ÊçÔÊù€òÎ[0¾µr%
•ÉMR‡äaÛ*ëasO…ÖÐÔá-‡ü\ü¯\Ý²öà|½²¡ë×˜k¨ü”A?º¶±HVžîØ=Õ=F¶î¿Xÿy’Pùª½[ËG‰ù-PUÏ«%kN·Š¾b§Iv¾g(o½ÜË^Ù²j†‡mÏPž
vš\!_ÌXð”UW•òÎ¥QÝâa[¹rš©Ø÷¨U>Ïý”Gu·Ï­ô°Cc'Æ^9)^e=lÆVÎLÏç*ëa[>ªrmí@¾À@N-›ËPv9Õé…&|ÒyæýëA7ËÃ¶ò1LöX¥¹­qÏ
¼WÕù»Ué…ÄzeëÝ†X·e­AÇg‹ßê%±¯Hèz]Ûi­ÏGyr¦¦Õ;«»ÏK3<ìÕc':Fì:ßªŸSò;„êã™Ë³~–|HÁë¿å^fþ£ÉÃ¶UÖÃ¶ú‘U¡e=¯eó
W!+_2ý¢¬r¡|“äIþ^4Ÿˆµ_bl£Du‘í½Ö~â•Eãïzt‡PùÙOŒÎµ.)FÄv§Ã{Ó+‡ªz^-Y¹}«è+všzÍÃf¾+ôÛ—Íkµ›U=ûYj†‡Õ/`¿$¯<zâŠ›Í<š±
"å»eëCûö›Ù‹Ç’+Ûú¬w>±ß¯“<lkÏÒf*ö=j•÷Úë¢ª»}n¥‡m½¼rR¼ÊzØÈZ‡ˆØÀ*WÖÃ¶ö-:6Î’•³déè×~æ•Eò°Ë©N/4Ñ@îsc
Uì¾ŽÍò°­¼'ì}üÚn_¥BÇazïQ¿[ÕÞXHy®ã>Ä½ú›öp++tÑ¹æX¬ùÅ2ëE›áa#ž£Ðq¦?4jo¯,j†‡Ío:FlühÕÏiÖ\#ù»½ò‰¬=AÉë•m¶äa
Û*ëa“s8T~ÓÛs†zmc^YùÜ«º¦eÄ®Ð¹Ñ¿Ï*ÊÑ8håñž3ò„§ËïMÜŒ÷]U÷Ù\O9Fîí­‹Båx÷S^Y^•wŽ¨ªçÕ’õWÑWì4õš‡B¿}ÑØ†DVœrU
Ï~–Zía;ï*·<óÖ>>i±.‰¹IÞÛco¿oÛ.ºn ¾øœÏu^Þ9ÅÖÓI6¿…w}ëVì{Ô*_W¥îöYvw«
›8e«oÎ{ÏÊ[ÖÃ^úü¸Bå½øï"úäY·†Žë“ÈÃ.§:½ÐF±®2tœØ}ošåa[þK3å#ªów«Ú³”5GRL®Ï^”5Ö§g®´èW[õÍåÒ,ÛzŽW¾4ñ4¯,j†‡m
î‰²E1¿[ÏéW3—¾þ}âÖ³çg¨<÷LÕc£*TÕ˜0zÅÃ¶r4Sí°(k Cç–µç$~rz±1H¢P>ïY
í1ñÕ¬Ec¼ï‘V»‘­|XÍTãþ–ªz^-Yëbªè+všäaWóÛ›¹Dš°n«=l¯&?¦C‘ˆœþ¬5=ïàûÔEÏË+[OÕý´:=l+/âoÍùÂ¼óDÖyz÷SQµ{û\F¡w@lüŸ
§*<l”µ?.sv¡2e=lîñPùØ=JòhÍË“Ï
+vžXv9Õé…6Êò”bŸ‡fyØÖqš)ïQ¿[Þ˜%öˆõ®ÒŽ¶>ž<û–à5+ù¾ÎÊ+]4¾»Yö—Ó=:Nìž©Íð°³ÖAÆìPÇsJ¾jëœ¼}8ÕwhÆØ¶ˆªæQ¯xØä
¶®m³Ä3âgÝ²î±¬œÄ[§?ÿñä7¦?g#­|[ä}~îˆ1yß#­v#[ïðf*ÆªêyµTg_±ÓÔ‹vhMcÙßžÜb¡{ª[òag­Ióöt´b?9{-ß&FUõWºÅÃÎêC·[
Þ:ë<«ê÷¥Õîís…ü¤2ãéÇªÊÃFV¾ òf†žÓ²¶•O¡ŽöiÑ¨W
Ë‹%I$»œšÕ¿µú±¿S³<loþ¼òÎÕù»ÕáY"Þìç¯˜‘u=´‡£-ÆVÎ99À‹!È{³[ûüÅÎ1¦Õ,»lÖj;¦_[ÇsJÂz×²ÇjVYü1+?ñÙÞ±[¡ªÆ„
yÔ+¶Õæ7Síàa#òÏ†ÎÏÊ×òAˆgI.o>‘WÝú#oÅ¬O«ÝÇÈíãUõ¼Zª³¯ØiêE;ÔÞÄ¾Ã³º§b÷£.£fxØ
löÒkaÅónåÍ$ßßàÏu¥ªú+Ýâa:âäÂs
Í–užUõûÒj÷ö¹ŒBëúc÷’âT¥‡Mü“uÿ‡òT–õ°ißê¼÷E?-t,yØÍQ³ú·âa‡ŽÑlyçˆêüÝêðÆ²tíñg™ý>›3½eîŸ×‘Ñ;¿´šåa[¾@;yØVNIÓ¯­ë9
?rìa¡zyF³Æ7Ì™„Ê}=gùDï˜­RUcÂ<êÛÊKÓLµ‹‡½bÌ„“CçÚ»|À—NåWfž’= BuçÉ'²lô„ÓŸež²HÌZ»‘­ç¬™Šñƒªz^-ÕÙWì4ÉÃþ^äðôÊy
õÙÉ‘á•+«fxØ“‡=ÜSÞÛOÖÚ/=2èF÷¸žªê¯t‹‡¬±cÞ=Šë–u½«ê÷¥Õîís…b
c=C)NUzØèËéï=ª¹=bñ?[ÖÃÞüÎ¼CåcÇÿyd{cïGyØåÔ¬þ­ÕïˆÍOÛj{á3côöõ©JÞ9¢:·º¼1KäD·®{r\æÛ½zzQä1ÍºvuÊÛ;,¤fyØäQ
'¶ÿÖ;+;&Ç^]ÏiV,‘õ›“ç‡ñ]¨LUc•:TÕ˜0zÅÃ¶Ú|žA¯
¬J1ùˆ›!+þyÍ«oœ›þl(O~Öþ0yò‰„æbÏ´Ú}Œl=gì÷ãÝ7U)fŸÌªžWKuö;M½èa¿pó°mÒ÷%ûzå<ýqÑúÓ÷Ô·KÖ}æ•+«fxØ¡}oÑæ©ï=’UŽ\u¡r±~†
§ªú+Ýäa[kœŠŒOê”u½«ê÷¥ÕîísQÑ¦†ŽKþH¯¬¯ª=lÆ«\¹ñ¯1ÏjYÛêSÕ±NÈºNäOñÊ"yØåÔ¬þ-Uè8ÄüyeQ³<l+—HÕÇ)«:·º¼±¯[ïµFýÃ»Ë&e
­áëEáëÇ\»ºÄz.ïÓj–‡myû±íB3<lkÿCD^¯|Ï)yCBu3F Ål>sýAŽ9ö"1žÍRUcÂ<êu;ïytƒˆ3
Í1þNvãø·/KnôMC”G$Ql>>Êõ3ó‘_þÄ;ÿÚ}ŒlÍ©½tËðm¼²ÍTUÏ«¥:ûŠ¦^ô°ë’µÎÆZ/R•êö°¿Ÿ_÷YèÞ»Òº&¡¹Ê"ªª¿ÒM¶µKÕcŠ²²®w
Uý¾´Ú½}.ªO>?x\Ö£ye¥xUía#+Ç'¾[c¼IYÛÚO¾ÈÞåžBýuäÍw&’‡]NÍêßâe„Ž3þ®GwðÊ¢fyØÖ¸'kÙ
Õù»Õé5Š}ëBcoKÿ{wþmEqï}ü¨™oLžÜÜŽÑ8O‰EQ‰hTœqà„‚Š¨ˆ Š"¢ L2yd&\M¼ãð£\ÏZwee=ë®ç¿yÎç˜–Í¶¾ý­î®Þ{÷9ï^Ë¨îÞ
=V}ººjýŒ¹§xËN^¹ûáŸzû¬nEÇ9îT†ýÙŠõëBëY8ñye¥vhÞ6QÎä••:¯Ó¼ñË”W·ÿ{«]©ïW¼uuSª6aÃ%ÃVßáPyÕ/½²C‘ÆÔißz9bÿ#¿ú7ÊOÚÏ
¼qD21ã‰X÷Í}àm{H¯·‘5®A¨¼Æ	ðÊvRªëÕRg]±iÈ°Ó±ú—½ŸÄª;Ã}ûÛ¬z£¾7÷Ö#U}ÅêË*Ö
eYó¹é¾ä•ñäµáû›ôÊXbbmcªz_»^>—¥yABë}ù®‡~â•E¼:2ì¼qc×<<ë¨ìßUÍ°—N™~@¨|c¦«ÿh]±ïTÈ°«éDýÖšÃZnÿí%nyéT†ýÑ’5O…ÖóêäGöóÊ
vRÇ­Îl,£>Õ/[·0´ž¼¾ÅUæôj¬œ¶“6Î|ö4o;[u"ÃìGcÌ-š-¤¶5„æ0õÊJÝ×©µÚï1³
tÍª®’º=”Zª6aV†]ô}%U&V5ÃîlÎ‰UÊ5«¦Î<"´?Zï)¡wGyãˆd¬ö¤ÚÙ¿
O½Cö–méõ6²úÁ„ÊÇŽ_×)©®WKuÅ¦!ÃNGm¢Ðyã?¥º3ìw_xu|hù1ßZu¦×|òp¯lŒ”õk9©s_ëxiI¯l½¶r1‹ë•ïk“a£¬3´Þ^ëgØtudØ²
yÖü³BËU›=k/VÍ°u.×1pŸˆß­+›|iâƒÿî•2ìj:Q¿pÖ…æýûÔŸî–—NeØÖwIuŒ£SEÇ­îlL¶Î^pNpk7¿¯9ÁÕ÷,ô÷šê²ãGºËê~ê9æ5¥¾ÆÞ8
EY}Ú¾xcË§EÆŠèD†­¾2Ö¾‰‡²¶5æbì¼u_§ÏN¸çßBËW^Ý:Öî›Í;¹Êïè¦”mÂXV†êY–*«šaë«Pù*¹i“Yõ
Í÷˜ý½lÿû˜¶™5žÈkS¦ïŸý›Ðý&&·ôzÙšG³×æ˜Mu½Zê¬+6
v:ÖøaªÛ{e«¨3Ã¶æ-o±Æ°Ó½×+Cß®ZÛç•m§º{]û±•õ=Vªç„Xcß‰Æƒ÷Ê—¥ü<¶ýcmv1V¿Wï
SW†­œÚêc¦|[ÿ¦j†­¾Áss€ú‰xåci<Wk=Ê±¼òbýÖáú½jQ¨ß®¸ÿñCBëˆy¯éT†=ÿ–)û†Öó=o'ÕyÜêÎÆf_G0ÛP6–Ï¼ù½uÞ´Ïc;ÜX¹aª¹cÚÍ¹ñ
®ïXÇCcbxå3È°•áW=ëÎ°Ccd^ºóÁ¨ì¢îëT÷»]ë¶ï
­Cç_öo¬9Æ¼À]G·õR†=õ’qÑ×QžT™XÕ;ï]Rª>çM¢oBïf[3ÕözN‘zGh<‘Öñ¶Cs°=}Ãßñ–kéõ6²õ¬Q_œ˜ù:%Õõj©³®Ø4dØé(‹WŸ®xs•W¶Šº
2lÝ¬q°•÷¶Žùd±ú%èýbÕþªO}¶jÃöÐòÅ+ßÎê—’*oÏ¬™6ë˜Ðz¬¹UÊÈ›[Fýžê¨‹Þ}îØÁçuìøáÖö‘aÇSJÇ3tŒÕ¦òÊ#^]¶h^íÐ²U7sô)•3l±Æ/^;
íéã¼²±æŽ¿;˜S
üŽÆÖÛõ]`h©ïÃCUÝõ[ÝWBm'ÉrÊ°­ù$Õø])ÔyÜêÌÆÆ8Wß}ý3´ü•SŸ8¬õß¾5÷¥K­cñö¼ÅWyëªûÜ9Xªq÷Úýë{½àq+Ò—¯¶5Oy‘gBÝv^
ŸØïê¼N3ƒ>´åÖzFÏ0é{¡¿ÿxéºÞ²{A/eØªyec¤ÊÄªfØºOY}½²þÃM¨‘î«Ê7Bíð"÷VkWõI±ò¦Ö±FŠêõ6²~³5.Yì¼êzµÔYWlšá–aë=
ê ãƒRä‡VÛN9„W¶,+Ã®2†‰¾Ïûtåúþàýfýžß³äÑ7‹U—ÑNsé^ëÍßî-§õÍ±žGêïí•¥ãbmsÊ±!­ùâDõÕGÆŽw¿gŠ¡Œ µß7v›ÈçsVGõ*¯,Š©3ÃÖ=
Íêû¤ë8E†½}Î¢‹¬ó3Å³O¬±‡‹Ô­4ÎThÿõÂ’½²¨¿~«þôÁóh}üXØÒ©[4î{h]8Õ¹_UÇ­®lL÷-kÎLÍçÝþUãÌhl`ëü®s8äåŸ±ce”a/ª:oì˜@u
gØÖ¹+±caKÝö;Ï§ÐòuñÊfêºN[iÌkj¬k?UiOvR72lëKªqzSebU3ìÁm1ÞCê[Â”íä¦Ð÷è¡ý¡qFBc_ÄŒ#’±Þ(;Qÿ¯ƒg±·Ì<Mh#ë]Zhê£
ÛO¦n©®WKuÅ¦n¶5ç†¤ÈÎ¬~Ç1ãn”eeØúfEã˜hœ=oµ94fZÞÜòêW®þŸÞ²Dõ
+kÖŸkŒÔØþ¢úÖTcF[YO;oyí¬º¸|ôêš9±÷Ç“rXîßçíý¶‹á®C¼~ìzgiõÈl™5Ô¹¿<É]W;=[ïsÍ^^¸ì®ößB†Ý¦Àó¹(¯ZçÒ{=Ð+‹bêÌ°EÇ
,´|]_ÊƒBW$ÃÎË5€WÞ“7F²ÚÆ^ùÌs7Oþ~huÏ4TÔY¿Õs_Ç!x|
Œ#"Ì°­kKêêçZTÇ­ŽlLõ6eÁåÔ­¹ßnq¾ÙÿW>áŒ1îº=qr_ÞXÐ±ýb;ÅûMï½²UXó$HlÒ:3lcÿûÕµs­s·Èû§:3ì‰g_j>ûŠ´ýê¸NCÌ6£Ñ
^ÐŸ{í^ÑÛz¤o{½²ž¼ûlÑL,E†WÔ~ðÊ5Öø*ªW´¿;/2ŽHfÛS/œûµójéº¡|¼Èw)!Mh#[cúKª¶XUdØC†½[ŠìLc…–ýáâÕ3½²eYõ‘VsC}ùž¼
ö¶oÞxúy}çú«¯úŸëwO>ÿš>}÷™×GF4FúÝzÛÔ*¯?°¨®«g«²öÖl\õSõPßdõ!™ÇÛ®vêwbÍ;”íCí¿³±gÛLÙú£Çö-»wÆÁ¿¶öÙ˜ú€•I‰¶AY½ÚY
­ù¾ö‡ö‘öÕ»—Þ¡±G¼õ¨Ÿ®Õ^Ìh¼}Ç«ß–—gëwk,í
O>{ú®µ›?´–G†Ý¦Àó¹¨Næ@Ã]Ý¶î#Öx–"ö—c@„û£ê<ŠÊ¢ûvÞaEÆºµæ•P–oåbØ­Îú­5¶<Û½?ðÊ·êä½KÏ$ëÙ®çß]—dÜÒVºž”MÆþž:[Ù
Øª©3-S×©úç•Ukë<Ò=°êuž×AŠÜ7ë–Wï,zM58ö±Q¯Žm³Ô™akië}O_W†­g›õ\Õ¾Õ·
Þ22u\§!]:Î|wÒ>&P/ëF†m)UÚ3ç~Rß¯¬œf-»h&–"ÃëZ’¢×eµ}Õ¾^÷ÈSÉÆ½Kepü@Ÿ¿Ð÷IEÆÉXßÚ†¾ù¯ú­DÚÈ_Ž×ÏFuWß\iXëT
ÐØñyÉ°;‡{·*ÏšŒžŸj…®­"u™"b2ì”…>xqñ9*Ô'¦hþÚ‡!yã‰xÛb÷µíëßþå¸¡¶GL}@}˜½ud¿Oëùâ­Ÿµÿ]l½V÷t/Çn[î'úþQóRˆê+Çï
¯\†»MçsÖ˜çz¾éŸ„8ugØbÍ?g)šÅäÍ«¦Ì¢HÖÜJc!ZË-Ú¦ÑóÂZÖš‡gå•îêªßæåŽjOí§×É[V>0ãPkûõ|Ô;\o1´Z¿e‹ý=u7I©hÕ½bs
†÷.›dÍû}^H“2l}£ÚFÕcëRUäQ3ŽI]öóÏBëÓµUôYUG†­9ƒ>YÞ¿ÜÚÊÝ¼e´J}ZtmYsµÓy¨¹š½eöŠndØVÎ(j½—é¢{”5ÿf¦h&–*
ÃVŸ·¼íÒü.©Ú
z¿œÕ’²®’²é¼ý‘)2ŽH&oòvUßý6¥¬w»Ö>P]î…[ïÿ¡·ŒÚ÷ê—:p¯|GË&Ãî=dØ»¥ÊÎBcüK‘oÊŠèD†]6¿Îè½¿7~uQŸ®xsæO·þÞÛ¦õ‰‰­ÛYbëï
¾ðêxoYyŠÔk5ß¢WJ%¶Ýe•Ou¶kÊó9–•×¹UêÖ‰[u&³¯t@Ñ,Fm)«¿´üå¥å“cÇAõ¿Vÿkyê‹RôÛI±îÁzÝ4ò|·üpfÕoõÞõO/8Oï¾¼e´Ò7[y9—
è9ì-§]§3l‡z7›÷;´Ú¿³ŠuæAÇöiœÊk6¿Wæ÷ÔÙ.I™iÎ(«.¡1×b³õé°Î‰ÍÂCš”a[ßäujNe¸Ö~ŠyÿhíkeŸºoÜræÅî6´R.œ÷L‘2ï›¬[c
éý\ÑïÔÊ›S^Ë-ú^/åuêÑ½*ogÞ™¿xœ·¬^Ò[Ï–¼ö•¾Ž¹/ª>5ØÏ`ÕÆ·¼ã"E3±T¶xuƒT¶-§ý©ì°½®š²®’õý}+Õ¿Š¾wË„ÆiWt,·¦´‘u-}
üÚÚçóö‡î[eÆI=tmµßßÉ°{öneï·íf›œÇPíù¢ïccXvªÌX×qÑvoˆÆ×‹í_G¿KuÕë¨¯\ñ«3Óß*¶> çYÞ˜"ž¢õZÝÏß[´â>o¹eé¸¼ÿòŠc
ŸÓÖrR]‡íšò|Ž‘÷ýñ­g]ä–GqÈ°Ec'Y×F»2YŒÆïS}ÚZ¦ú¨Nž7çžcz/™÷M©îeû¸õ?6çDsû¶]c-<àè¯•Ó3Aãr«Ï­úöÚ¸·`Õo[iLkõ•Rª1G
þfò:¶Êqõwz–7¾–lœùìiÞ6…t:Ã=[¼oÂôždûœÇè÷{Ï2u¦kEóBXu›ØßSg»$U6¦lÁ]syÓKs€æÕSuñ–Ò”[ûËúýerÚ2”XóßÄä"Þ¾Q¨
ùíÔ§Rï@ÚÛAÓPý,T¯÷úZ¼=oÑXo›BòžU¢ë^cô©ßø‘ôøù{”×¹¯ë}î„IßûpñªÞ²Æ(ÞfJuÆø×7Ãî÷™zžzËê%u´	cä}‹&ÃXu;ÒZNç¾®‹
OÌ;uçº-{Ç£UÑL,e†­6ˆ÷NxpÙ/-Ÿ¬1(½wÃz¬§qC­{@êºv*cŽ>%·_ºìxqéíÞr,yýü3ãÓ[Ž§Imd}¯™7o›|9Nê¢±zßxÚ~_o/´Òu©¹247¯u_$Ãî=
dØ»¥ÊÎûòÆúôÊeeØÊŒ5¯@{¿ Xj»êÛí2ýè,_öÎŸg0Ïû‹_¬µ_G]õ};§÷ÈÞö„©('RÝ§Ìû†²õZÝÏ5n··üXjç(3j¯›y¬å¥ºÛ5éùìY8ñY
ëªã=:—aëøyííLÙ,Fu5oÙSHãùê{hµë5>‚úå©ÿMÞxøõóò¶Ã¢úiÔûÎ5›vè;SQNÒ^¦®{I/‹É°ƒÇ{ày_´
­1bçwn×[”›z¹|Fç“®E½ûÕœj_«ÆØ
ïUå÷ÔÙ.I•é÷[¿³ìwzyóm*ËPæé-£—«–½o¦¦úyðwœŸE¾‡©Jï¡¬}åõ_ñöµEm¤¢÷ÕÉË¶GbŸ©íôŒ½_H•1YS]§±4\ÞoÑsÕ[F¯©«MèÑ¸;y}¾vL
û·îŒm÷Y™ZÑL,e†ýÕoŒûlÑ7†ß[ÏP=K”/ªM¯zœWVR×µSòöC•w’1ã‰L½¤Üó·UÓÚÈ×ýf´Û'!£kMï\T—S»FçŸþûÑ’Õ³bŸCdØ½g¸eØÓ¯¸iÃ!j7{åc
Yïdë8Ç¬;»ÞÔÆT=/Tó®S}¿£oëô~Ø[wêÛ¤ÌÓëo‘Ñ¿Óý&ôM¢¾ù°Ž§·14nµÞ#Çä)zW wxeæUÐ<™êû³O46µú;/2ý
o¹y4?¤ÞQ­Û«>¯z‡2ª¢ó{¶êÄuØjÞøÉß­O}:½²1Ôþ-¿l¿!‹2N½7›*¹!òu*ÃõËñ®C©’Åä½Ï­ªÊ8
Ý›¼õxÈ°ë£üÚë§œ§[¶h^k¯O*±¿§ÎvIŠlì¥‰þ»õ«\ïzžé\²–­úIÑÜÒËU«Ü7S²ú1–™û«
}»eí«3çÌ+ëíëTÔï¢J®_´ž[†r}—ám‹%ÅuZ„îƒy¿G}Î½eôšneØ’ºN¥v§Ú'|ö•«C_4Ka‹Æ`ÎŸ.¥:êÚ©¨ýnm·ÞAT¹wIÞx"ºï)¤i¶è»y
ïýA*dØ½g¸eØ¢oÎ¬w¬^¿†¢¼»Æ·T6«¾xš7Eyõìëïø¶úHë{o}©([×:5çµ2jeÅY'½Ðóö¶Q÷ÅŒ#V7µ¡”¡?2vüÞ¯LûLõ;ýÕ½ïTbiŸè[õiÒ
ñÑzÔRß i_”ßÉ£ï&µ|Õ¿•ƒªMšÑÿ×±Ðw^:¯éçÛ]š$t½ë}tÕzlÌ°%æ;ªYŒú†é;äÑ3OY—·ÞºïïXðÚ­Þ:óa×CÏç²ý¯3ÝÌ°EmoÕ9¼ßZ…Æ×P.
åm‹ÔÙ.©šM8cŒ9î€Æ¥¬z.èXä½SPýÐ[F+/W­zßLA}¬íKÑ§®(+Pÿ¿¼ãëíëÔ èØÒíêÎ°uþÞsÞ•îvä©z–¡1·BëÔq¯ºÏ»¡›¶hNï\‰¡ùž4¦–™
*«#Ã'+(¶_yzþ<wóäï{ÛÒ-ê»fmûŽËïôÊ{òÆ©:n¦‰¶hn õí÷Î¡*Ô¿0¶nšêzµÔYWl2ìúXsö}¸xõL¯lE3l
Íô¯9ÿ6…®w!ì•GyÎ°5eh}­Rd1—fŸ7¾g}w¬÷yÞúŠÐû2Ûì­ÛB†½›Þ‰è|ÉæX/Cc!WÍi2ÝÎ°3Þ¸îE©ïœ²q½w.’íÖÙ.©’}™/‡ç);ÖGÈ”®Þ+
/ÑXFÞ22^®šâ¾YÕúsO±öi‘ó&•¼ï^ò2uk_ëšR¼y=*;íòJ‰ÞÎºÆu.hÉ˜o-CtÎj|-ÍEémƒ§ÊuZÖ{—M
­SçƒW¶u;ÃÎê,eó\õEÑC­÷€T™X]vFïå4¦¼÷‹P>«~\¡ùOzIÞyWe‘LÞx"oLú¯|Œ¦fØÕMSŽ“ªkXcß¨g‘oÁR]¯–:ëŠMC†]½Cµ® }+î•E†
óo™²oèZW_Ze
^y”·âþÇÑ8Ðíôç^Ù²4^[hÍyà-#–žIysÓY”ë:¿ÏÐ˜Eê‹3•h¬bµ¥†ã5áÕoÕÒ÷CƒçVÄ8¯:ô}Têc<Ð6]:§»5'­¾CÚ2ûù³cÇæl¥1Ú4Ž˜Ú:
eÛÚç.´?Ô¿È+ëÑ»œÐ²ÿ¶üÍ•yåt¼µ~ëþ£sÂ[wÊÍ¬uéÝ‹¾ó–!_výÞÖr$å}³ŒÁ9–÷/m›ævóÊ×Á:GD¯UÎÎ°¿ì¨ûÞ Î£1V^–(÷Iù
¦•agóëG}÷hõKn§1Tu¬ªŒ§×®ìuZ–õ½°îùEçgíz—`Ç^Ù”Ôþë9â\ÊÎ§USg¡>¥íËœ[9ð{ŠöKÖ}/´}ûì•-Bç•~K™wÃjËh¿é{¾öù¦{¶»}ßª
>‘êûXÝoBÇoâèËÜ²1¬6NÙy»Û©nZ¾ê‚^Ù"4ÖöU™÷§§^ßê;û²ãé¦º^-uÖ›†»^×.th¼TíA2l`èÓØ³Ö|¨Mí3ƒÞ£z›òƒõÏý2íl¾DÕõ¿•g
ªŽ¦¼®®±,j¨¯…úi.¸l¼#G¥~š“Ï¿¦¶ñ–šÂË°[)#ÒØUÙ¸U­cH©ÏˆÆKÕþjõ-V>«q´6<ùìéËB×‚Þ‹èë»isú7Eç2†/Ãn¥62ßì~£þªÙýFã
þj½Tãòµó2ìVzuçè±_{Î(—Sßrõ—NÕ~ë&kÞ&½óÊ"Žò\ëzgüñÒuç²Yµñ-Õ¥ô<Ñ5 zK7¾½èÕ'UÐ>PRÏO}£®z¤þ·ž¯ÚÇRu‘”ï­
ÕÏô-Ï`]î‰y§ž×êsúß:'u_×ws±ïÈÑ;È°ë5æèSÌ¹Šõ½W>60ô ö\çÊµ«Ì­`è(’a@E2ìn*’aêïkµMoÿí%ny
º‰»~zª'è»hå•÷aC›Æ

]ãRdœP C6€N!Ãn¦e÷Î88´?4çW €n#Ã®Ÿ¾ÅÝ¹zÓ»V}¡êÜÏdØÀÐ5bÿ#Í9µ>~míóCá›V iaè2ìæÑ¸V’> €&
ÃîÕ“BõÙ8sþH¯|2l`hR>­±ãB×·¾eü. ­È°t vóÌ7ñ[¡}ñÅ[ÿ~âOuË ÐmdØcÍŸ!šãÄ+o!Ã†&ë{OÑœk^y Ã6€N!Ãnk_ô?6çD¯,
½€»sô~ûó×7l Õ46öÄÑ—¹Ë!Ã†žWßüÏû·ýOèÚþpñªŒ! 6€N!Ãnµ3CûAuÍŽ8Ù- @/
Ãî¬«OÕ÷Eÿ¶ÿªCè;®+~u¦»ŒvdØÀÐ2éwWôé½VèºÖ8†£>Þ]€á‡@§a7Ë{—M í‡/.½Ý+ @¯
Ãî¼G¯¿O¨ñe>µí¯Esl2l`è˜pÖ…æ{.åÚ7<ß]€á‰@§a7‡æO±¾í»ëœËÝò  ô 2ìîX5uæ¡z„(Ç{Âî22dØÀÐpÏyWšùµÌ¾þŽo{Ë
0|‘aè2ìæ°ædútùÆõ^Y  z	vwh,Û«Nþ­éŒq—‘sô)ÁeŒØÿH·,€Þ1úÌ{B‘÷Z †'2l B†Ý§ïTßÎþíÿíƒù·LÙ×+ @/!Ã  h>2l
B†ÝËîqpè÷ïZ·}×É?ý¥[ €^B† Ð|dØ :…»÷ð£ƒû4xè÷¿ùØ¼“½ò  ô2l  €æuðñƒãê·7â\·, aÝo&œ1Æ-ÛIÚžÐvjŒ
¯lÓú³Ãƒ¿]ŠŒ[	 @¯ Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l
@¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l
@¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l
@¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã       ô*2l       @¯"Ã
èœ‡.·÷ºGž:®þÜ+ ÀP´üþÇ~z6Ž:øx·, `x Ã  èœõÏýÍß×oýíôç^Y  †¢]ë¶üïÐ³ñÊ_Ÿå– dØ
€&xðâq{ÍúýíßjwÛ¨‹Ý²UüúÇ‡ô…Ö+cŽ>Å-ßjô!'˜Ëò¨î=ç]Ù§ß;ö„3úNÛïhw})YÛ¥mñÊbOdØ  ì‰ à!Ã
4Á'Ë6¬µmÞzöå+½²Uœyð±}¡õÊ¬ënû¦W¾Õ=\e.«Œ]ý[w~¸xõÌ•Ì8tüÈúŽýáî6”emÃ¢;ú±W{"Ã `OdØ  6  
È°#¬Ù´C™²úŽ{ÛR”µN2ìâÈ°fš8ú²¾÷­¸¯ÝÆ™óGze"tN…Î5ƒ^Ù¦"ÃF*¯M™¾èú™~ÅMûxe‹°ž	k§=}œW@9dØ €& Ã.`Í¦“Ï¿ÆÝž"¬u‘aG†
4ÓWßòÐµûÉ²7^ñÊEèœ k:½²ME†TÔ6èDÕz&¼ÿòÊ‡¼² Ê!Ã 4v1Ÿ÷oûõCñ¶)–µžÔíá€h&2lt öndØ(ŠºÈ°
M@†]ŽÆÊö¶+†µüÔíá€h&2lt öndØ(ŠºÈ°
M0Ô3ìI¿»¢ïª“kÒœ÷œweß£WŽßGý«ßž·øªöÞ'ÖòZM»ü†½½móXËNÝÈ°f"ÃF§aïF†¢È°¡‹ ÐC=Ã}È
nùvÇþð€ÁLû³ë×YË•]k·ýõäŸþÒ]^kÙ©ÛÃ6ÐLdØè2ìÝÈ°Q60t‘a š€ÛöëÒ÷ÖÜ—.µ–-UÇÆ¶–›º=0aÍD†N!ÃÞE‘aC6  
È°ó©Oö»—Þa-ÿÓo®ò–‘ÇZnêöÀp@† 46:…{72lE† ]dØ €& ÃösØ¯ûv¾¹íÿÖ±k™©ÛÃ6ÐLdØè2ìÝÈ°Q60t‘a
š€;Î¯¼>ÝZÇ]ç\î–·XËLÝh¢S~zØà¼›·œyñà/=ö´¾??Âü÷ÝÊ°ÏþÅñ_ÍzíÉg÷=áŒ¾r¨[®“´/•WüþÔs·SÛ«íöÊÕMÇsÔAÇ:áG»ÿ~(Ñ7
cŽüÍçøiûí–«›ÎÝËŽ9¸=·úr»ÎýåIn¹*È°¿<.:úÔÁ{È§Ÿ7x½¦¼èk=×Î?ü¤Áuzåê¢ug×¾äÝÛSêõ[÷Aí”Ç¦j†}Î¡¿ÚãÜé…gG§eõ‘ìù©k5
å1*ãÌƒŽýêúy@gždØ{ÖùT§ÒuÔ©ûW¯ëÕz âa
š€;Î«“ÙÏZÇÌkn-Ýöµ–™º=ÐªûÞ;æš½þðô‚óv®ÞôŽµoôwï¾ðêø¹&}¯µÝÖ©[õÊfúáâU3v½¹í¿­íüûšM;Þž·øªÙ×ßñíSv¸»Ü””OéÒ88;×
mùØÜ—ýÛÿñÑ’uÏ¬yxÖQãN;×]nj÷=sÓ]ßÕóƒ'´ïô½ƒŽï_^Z>yÍ#³}òÚÛ¾©üÄ[v7(kºç¼+ƒ¬2:.K&Mÿùû‹_Lû>xLÖl~ïíy‹Æ>pÑu{u"#QN:ãÚ
[¾18öÿªoå+¿¶öY+ÊY½åæùÝa'î±¿VMyDhŸ¿¾a“µ-£î^¾6nÄ¹…¶Iç¶Î‡–¬ž5pîÿ3´4·ðºGž:Nï¼õ·±ÿ‘}Ïß2e_Ý¾xcëgÖ1ýà••Ó^
¸õþVŸ8DÙšîé‹'=ü³-³Ÿ?[ç½Î±Ïû·ýyž \ÿÚú÷Oßpçwª¾?™xö¥{S¡õêôÎ­vÞº=zW¡ã¯c¤íj?võoÝùÙª
ÛßyaÉÚ‡z§tÜr—Û®h†­çjvîhBeuNíXðÚ­ºG—Ù¦N;}ÿ£‚ÇpÂc‚ÿ^÷÷i—ß°÷à}qàYn]?:§õ¬UžìmCQÊEï=¶ï¥‰þûæYóÏzoÑŠûBçÉÛ4ð¼×}
zûœÇèºÖ»o=yÚïiVŽ-³æò®—v­ï­/;îô=þÎz&è”·ÜvUŸ	ºNõÜÓ})¯Î7p}¢º‹Î‡ª÷-k¿dôç^YÑó]uVýåÉ’w®•z Ê!Ã
4våÔÖ:ÔNðÊ[¬e§[õYå¼j«[ûÃ¢ÌS9±úÂÔa+Ì`"¶«Ú=ÚŽ3<Æ]OjçßîQÛ7¯­R†Úà^¸ì®¼ÜÊ£oåÔ'+šãÕ)ïÖþoõ~@yOÑ}ð·åýK
Õ—ÉÛ–2”q*'ø¢Ûÿñ¶#äã¥ë(ŸôÖ¢û›·ü²Š>?RRÁÐ6µ÷ñÕ}@™TÞUítîl½à/kÖ»¢
OÌ;ÕÊ,_¼±åS½cò~£G¹¨îÉVîW”~·röÉç_ã®;ÄÊo«Ò±óÖ¢ã÷âí÷ÿ¯2Ï;QN¦|_Ï#o]Þ>hÏ°ÕRçX^FÜ«7½£¼×ÛŽn²ê‰ª·þ;Íå­Ì8ïÝoð¸<ã—
ÞûèU¿'ÒsEùó§Ë7®÷Öëã×ú_šqõÍß(“Z÷´ô[³õ¼ñèÓ¿òþ}Ye¾±Ð¾šõûÛ¿¥÷íÞòC²ºé…Gp×•ÇÚ/yõZÕ‡ûæ$«}'z7¥o	ÚË6½^ƒjÈ°
M@†'osÇß]ºÝo-s¸dØªß´dÍSÖ~(â‹7¶þ=ôçU3lõ¡Þ>gÑEÞúcìZ»í¯êóê­³(å‘j÷zë¥þ2^VæQß§*yºEy–Æ¨÷Ö_·˜¶žöÎ¢m¼VÊ“ôŽÇÛž"ºt
ÜÞ»Ön~ß[wŒwæ/WôÝÌpÍ°Õ_UýÕÊ¾7OW®ïW?ööukÙê«›ûmH„3çô~gk€ôýMkî£—2låˆ©²}Q¤œÍëíeØê«©ï^Šf×íÔWÕÛÝ“a«OyÙw½
®ÒïWß¸xë(KÛÛ733l]ÚWÞrcè]b•ú|‘»h?‹ÐwM®× :2l
@aÇÉk—O»âÆÒý¬eV©ó6ÅÝçŽíSß?k¤R%Ã¾àˆ“û”yë(JyA™>Q!WüêL}¿Å[gQŸ,ï_^4›Ì\sÒèÚ²#©2}*^[OýõÎÂû-1ÔV|dìøÒ÷™V§JÛ3D
¹ÏåÇŸé®;33leGê»îm'Ð:>‘Þ¦Ê\DY¸÷[-ufØ²sõ¦wCý-uÝ‡ŠdØÊˆS¾clçí“—aO8ëÂ¾ª¹m«å÷?öotC^†­kéOÏ½r÷Ûb}þúæÿ,›c×™aË®
uÛwÝzÖEîvd†[†­wBE¿a‰¡1òÊÔùb2lkƒß¾DlG«2v¯Ök6  
È°ã<Û½?°Ö¡y]¼òk™C=Ã¾ý·—ôUí/«l†­¾Ž;Woü£·ü²Ê¶iZ)ˆy ¶Â®µ›?T¿=Ëûô_—½±¨è¼rïÃêŸJ¯gØúŽ×û EiŸ–ÍE2WÙ[OYj×ê}Š·
2Ü2ìÿ|fáÅUú^‡¨œÖ©
õ²•áÉ‰[ÕanßÀ}YßžxÛ"ÝÎ°õ=Kªo,e3ìgS©ïu;íeàí—N³ê‰ƒû&g€²>^¶na™qEêÎ°E÷‹Øq²‡S†û\RÝUãç¨>¥sÇ3¾êÞ6´ó2ì*™rÑ
»Wë5H‡
ÐdØq”A„–¯öZÑŒ¯•µÝC9ÃV6¢¾@ÖoÏ¨_¡êïÏN¸çßÔ7Fß¾|×C?Qf}S›Ã–É°Õ/ËR}!—Ý;ã`÷¬ù{4Ž¦æÂRÛPÛªy¸¼þ<WÀÛ–¼ý˜—_ëï4Þ±æ
µ¥5W¼Æ”Pÿ³¼~¹ÕÛ–Œö2rsŸ
¬Gcck<X‡¨9í4ï›h¿=xñ¸½^›2}Í‹”—­ôz†G¿Kýq5^Ë–§ž­,òý—W<¨qn½²ºyÛeÉ{7¸]çªÎ]kšJó>é¼Ñ1Ò7Ê:—¼kB}dcúî?wóäïëÊWŒ
@÷×=þ]„éWÜ´·þº”É{Ï‡{æŽk=¬y3º–¬çRÛ1yG÷"]ÇZ¶þwÞ5šÑ8§Þï ÉË°uÏÔúu.iÎ@k_clèž©k_Û™7ŽkF×·-ò·åo®l=?¬1ÈuzçV+
â­[×Ï‡‹WÏô~‹æ©Ós-ÛúFIcÍkiXóPfÊfØyt~é8èž;ƒcCEŒ…¢ßãí›NË«'æø½zé÷ë½³öAÌõ#:Ï½íj——aëZÖóSçŠž¡:_tž<zåø}ô¿õýÄ†'Ÿ=
]ã_{cíëó]cEíqýuš/ú·}á]3íZŸ+îü=þÞ~&üÓ[n»‡/»Þíë«1Þòö—ÆÅÖÜ7Ö<¨ª¿hZï[+o[ZYö¦'Ÿ;Ãš&VÑ;O·ê5H‹
ÐdØ>Õóÿ¾jëŸCË¯ÚV³¶{¨fØ·3/ŸP»YíÄ˜ypt\4§Œú–æåÙe2låIÖòÔoDyKLûOó«å¥­ß[fneÅVž¨e¾þà“‡ÏZsÕçG¢þÞÞ2DmhkÊbŽkFï†Ô
®T;¨}YMÌ°õûÕ~µŽ‹Î§.ºn¯¼ã vbÑñ€EÇ7ï€rE½‡ñ–#ú
y™ØŽ—Þî-£•{V½¿vZ‘ûÃÅ«fèü¶Þê^©¿/óMƒÞ_)çÊëk©¿{oÑŠû¬e(+óül=–;×l~OóêœÑ;¯l+å+yã;è>§óÚ[N;S¡åÅöÕ,Â?Dï
bƒþúA†úÜ§Ì°•Î0é{zk-Oßžyc×Tù>­E2l·z?7‡°®Õ-òÞÿêÒxdÞ¶µjÍ°•ÿ©þ úFìý9sþá'õ)çÌÛ¾2ópªmZVê:«õLÐ=Ö+[”¾°žºÿ
S÷m+ë×µX¤nfeØÞ;ŠÁuõoÝ©z¢ú‹+ƒ|÷Öò÷)2ìnÖk6  
È°}êßb-ÿå;§þ‡W>µÜÔí^‘—q*wQ4o!êïöÇg_¹:´Ü¢¶¶ÁÚÆ"ã%´ÊûÝêÓåÍÉÕÎBß¸ª/³W>D}¢ÔÎ	-W}
½òbõÔXEÚ€íÔÖjï±I¶æ ,’ç¨-¨ïÐ­å«Xû=¯o˜Î%oí¼qvŠÎ[:œ2ìÏV®ß ï¼eeÆ}JÔw+¢\C÷»Ó÷?Ê]®èÜÈ{ÇVô\“‰£/ëÛðÄ¼SõýG•k>“w
ï\?cî)^ùvÊ°uŒsŽÓ?õ}‘·ŒÛÁù[2²¶ê‚Ež:¶yïþ0gÁùÞ2:)&ÃVv­þÍzGì-/£{{Þ÷P¯Å[F+}_¥w:eÆ"i§|ÑÊ±ÿ²hù½^ùvC-ÃÎëW¡ü·
È{÷V:/¬{é½è•ÏcEÇY™²Þyèû©Ðòtn«ï‡úŒ‡¾™jJ½õ Ã
4v>¹ie5ªŸVí;`mwêö@/PÛÛ·U~õ‰£Üeä±¾«,ša«Zh9Ê‘Êä×õë²Ž·ú½yå3jã†úà¨ýRô;ÕvCÂjwYßÐfô÷¡r)ûØ¨Í¤{V2ì]k7¿¯ï¼½å„œs
Ø¯ÍãP4wÐØÖ6*kôÊ[”cë7†–«wEòËáaë:ÐXEßW‰òNk¹™–¬{æâcŠç-ênÇ¢çZ]ô€užyeÛu"ÃÖ1Ö¼~ÁmN4™²5åHZf•[ÏÞgnºë»E®×ŒÎëw
ªÞä•ï¤¼z¢Ž‰î…eÇ…ÓwJf¿Û7·ýwëü«Ý wÁc4°ÍEòzjöü[¦ì<nk·ýUÏ8¯|ž…øQp¿¯Þônìõ›akŒÕß¼åyšR¯A=È° M@†mS˜¼L¢H_
‹µìÔí^°ò‡Z¿W}B¼òžö¤ß]aµó½òyûÃù¸úûxå3VRm¯lõ-í´§sûëÎ71ø½‚ú
{ë,B×e‘oqë’wÓ˜±sÎY¬ñl”Gye[Y}°uÎUíç7íŠÍ¾¦E¾Sêö§+Þ\£¾o^yË`ÎlÌ«÷Yz?›‰„ô?6çÄà¹¶vóû^ÙN¸õ¬‹Ìk­h>Ø‰;ïÃÊ©Oæ•
¥c®º‚7ÿ¦•a+säoÜõäÑœÖoMõî2«ž¨±"4§…WÞcåÄ2çÆ»*×oªÐœyV_ì¢óo¥[ïš¬÷w)Î	]ŸŸ¿¾a[hùú^Å+/^†­1:Ê~¿Ò”z êA†
h2ì0=øÁËk·–«1ªæ?b-?u{ ÛòÚ
ï/~ý1¯|Œ¶õm´ò¾*QFíë˜+§ñÊëÛÏÐ¸ªÿÍr,êËÚ>©˜WîÕÉì*÷Á+¯O÷ÖÙDy÷0¯lŒ¼¹ñÔŸÉ+/ÏÕZÆãWM¨Ôg?ceäEúU
õ;E>j=Þš·è2¯¬gÊWïe'±ã’ÔÍOÅëƒÜ®¶U¯RžU´ßk
V†í}[Cãt[çN/|/“±ê‰:V^Ùyß™íX°üN¯|Ý¬÷çzé•m5”2l}ZÇ½°äF¯l,7Z‡×' “—a+NUïË4¡^ƒúa
š€{7e”7ž~Þà¼IVŸ7Q[õÃŒµŽÔínË;F·ÿö·|Œª¶ÞIXmÐ·Ý÷C¯|,kÌhõ…ôÊ>wóäï‡Ê¦ìÛ'¡÷
êÇ•÷­õÒ)ÓãU[ÿì­¯‰ênë©o¥µüØ>½Öø5:¾eÆ´±úß«plŸ-2lß–YóG…–ýÞÂe“¼²Í;gkyóÚu’5‡mÑœ´îÛz(eÇÀ®ªÎ[õ&k|
Ý¼òRw†-š¿øºÐ:Ô×Û+[7åè¡m›;þîBß— ¥ÛÚ'±sXÇ°ÞñÄ¾Û·2ìÿ|fáÅ^Ù2šP¯A}È°
M0Ô3lÍË®9Ë,[g/8G}oÕ®µÚa­4Ž]Õq›[YëIÝè6‡ðþÜøÇý›¥j†×G:Õ;Qÿ›Ð:bÚÒÊ«Be/=ö4w½Eìxqéí¡õäµ1æŸü=kÿ¥ø.·×ÔÝÖSMkù±¹ÝÇ
¯­}6T~ÛS/œë•58g@`|vyà’ë¢ÆÍ$Ãö½r÷Ã? -;v¾Õ<º[çZ¯ä
Vö¬ç¿W6f9)Ž‘XÇIßÏ¤î3«Î[¬1±5?¢W¶S:‘açÍ= ¹Y½òu²²ç¢Çh¨dØz¾†úªè\öÊ¡{kh=šÔ++V†[¯-ª	õÔ‡
ÐC=ÃNIyPêoÝ¬u¥nt›Æ^
ýÎ7¦?}‚W6VÕÛÊR·iòÆÜöÆy}O¯¹‡¼ueõù|ø²ëÍïŽ•uY¿KÛ¨o¼õ6IÝm=Qÿ½Ðòcr;õ³¶ÞËÍ¼æÖ$y]ÆÊc¿—&Ãö©¿dx¥Éà¬s­Î\Ay†Þ¿Ý6êâ>
ÍG«<mÕÔ™GèÝòÛó_õÞ¢÷iõÁ¶Þ“Ä\­êÎ°5†Nhù±ý.ëPw†ýÑ’5O…–ßKõ˜NdØz×Z‡ÜáµQïóŠÐ=^ã™ßræÅƒãb<Ë”}õM–æ´Ð8_^?kŸUýËz
×[}­CË¯£íc½ã‰™Ct¨eØR¥^ƒz‘a
š€Û§>/ßõÐOR}{ßÊZgêö@7©žnÍ'”*7ª¶Õ6K96¢hLkë¸yYNý¸BeÔFuÐñ})YûRc™XÛ78æ¹‘•ˆ2(eSEÇ¯íUhëi–ÐòcÚzyc¤BýºCë‰
›Ûgï£4œuí¦Ê°uPVýÚ”éû¿»péŸ­Ú°Ýz.s-´ª;Ã¶æ}Hù¾¶¨º3ì¿¼ôú¡å÷R=¦¶XãÐ½pëý•Ç#Óü‹ª‹êýŽÆ$³Þë1\3ìço»÷¡å¯~èÉ#½ú
QQV;+æû¾¡˜aW©× ^dØ €&
Ã¶é[?'[çœVÖºS·º)oÎ'ç•U5Ã¶Æ]X3mÖ1^Ù¢¬ùÉòúÇæÍ»Ö)^{wé½è-C”_)Ïž}ýßVÖšj<™NêD[Ïº?Ç´õÔïÏÚ¾óÑ¶R®ZúÏze…ÛWw†­
ùCË¯šaëû‹?<½à¼/ÞØú™u>Vs-´ª3ÃÖûZk;S,¿¬º3ìwž_rChù½TéT†m_k™}¬W6Dï•cî\³ù=ëÜªÂ{¦·*¶5¾]'Å\C1Ã®R¯A½È°
M@†mÓøšëÊ[ÖºS·º)/KKÙ·½j†­±¹Cåõ}®W¶(k~²Å“þ™UfÎw}ÇÚâ—ÀúmyÔwMï6<1ïÔ,×ööa·õz[Ï:_ê{ÆÊ4GªW6¯<önugpÖ¹V6
ÃÖØB¼²rZh™)Å\{þÎú2l‹bmç­g]ä–¯KÝv§rÍ*ê¾~2Ö= è#Dsµ¤øV!ÏpÍ°õ}·oêsý‘a£“È°
M0Ô3lø·åýKóXß~–_¾q½æ,ó¶¡,k½©ÛÝ¤¾Å¡ß¨ï`½²ETÍ°­v~Šl£Õç[í«ŒÎ
ë|é”˜óRï}¬÷…¬Ù´C}µ5þ€·Înèõ¶ž²‰PÙÏV¬_ç•-*oŒw¯¬aûêÎàRfØKï{ì ãÄˆ¹öüõeØyßÅäUu!Ã®ÿúÉüiþâëBë)R§Ö{\½ÿ³Î¥”†k†mÝ«
;)æú#ÃF'‘a š@n¨.Q¤¾]F^=©h[2/Ã}È
nyå/y}]T×Mýí}ÆZgêö@7Í?ù{¡ß¨vµW¶ˆª¶5çQÑó1†Õ~ÊÛÖ•Ì8Ô:_:%ö¼ÔÜ§ï¿¼âAoy±4¯[ÞXáÝÐëm=ëGêÌF”sZûB}ó½òdØ¾º3¸¶ÆÒ¸!Ö
¹´fÓŽ–¬žõö¼Ec•×h\š§o¸ó;^<n/ÍU§o2òÆ”¹öüõeØG_f^©çƒ.‚»þë'cí‹Ø:µ5.“eàØ~òÑ’uÏ¨ÏvÿãÏœ´dÒôŸ?sÓ]ß}èÒq{ëý¯Þ«èú±
ú×ÛºtRÌõG†N"Ã 4Á¯¼>=T—ˆ­o—•WOzüª
ûxå[UÍ°eþ-Söµ–!Ûç¼8Æ[FÖúR·ºÉêÚ”;oŒê²ÊdØk§=}\¨Œæ¼_÷ÈSÇuÂí¿½Äým­½rü>/]·À:Ï‹Ð{¦USgÑ+cg÷z[ÏÊ°cÇ¨.‚ûKÃ=ÃŽ_
sÑé:¾ûÜ±}§íw´»ÌÝÛÎœb®…˜å¤8Fy×vwÕ}ýdÌ{Þ¢Ë¼²3® ß[íZ»ùC¹¥w<Ê¦½ezÛ5\3l«ÿŽæ'õêA©Œ:Ø?~dØè$2l
@XóÉïX°üN¯lyãFª_´W¾UŠ[6Îœ?ÒZŽh~GoEYëJÝè&k\Þ/ÞØúw¯lU3l«ÿÜÍ“¿ï•-*åX"©Útuºöä³û‘«?uÕñ=uzëë„^oëuêÝ‘äÍ7ê•2l
_Ý\Õ[ý¥óÆÑ<®êZöT2lÆÙS/Õcê¾~2VzË¬ù£òÊiîpÕ‰¬óGó¨uÙ9DÈ°÷ôÁËkO±?êF†N"Ã
4ú†„ê.^=Ó+[…æ{²êIjzå[¥Ê°Õ¶¶Ú™Wß\¹ÛÊZOêö@7Yãa‹W¶ˆª¶ú3wêXXó¾|çÔÿ°Ê(K•Q?go}½D}/'ŸMŸ¾yÖ÷ÏÊ¶¬óÃ¢þjÞzêÖëm½
§®¿ëÛ¡²ÿß+[”uïZ·}—WVÈ°}ugpU3l]Ë¡òòÎKn<ñ'‡ºËÈß¾ÞÏ°™ÓqOu<;ËªûúÉXß-2ý€¼ryc…é·ž7Þºóaïé½…Ë&…–¯ãà•í$2lt6  
Þ˜þô
¡º„ò<¯lÓ®¸qo«žT´®ž*Ã–SvxŸæ<³–·óÍmÿLÙµÖ“º=ÐMyÇG}¼ò±ªfØ-YóT¨ü†'Ÿ=Ý+[”5èô+n2ÇÑyø²ëƒ×Œúgyëëu#ø2×^óÈìc­o|[é@
Ùþœ©ôz[/¯otÕ<±Ý«“ÙÏ:N^Y!ÃöÕÁUÉ°õÜ´îi½ºfNŠù$šaŸüÓ_š÷„Ë/‹»þë'cõ¥öÆ$³Þ¡ëÏSÔ“È°÷´í©Î -?fÌ—N"ÃF'‘a
šÀçAßû§Î9Zi\ŽÐz5»W¶]Ê[.8âä>å‚Ö2õw}ª»œÖ:R·ºIídëw¦œ§¯j†mµÍþ²hù½^Ù"4.ªµ?n<ý<³œÆã°Êus¬Õ:è[Œw_xu¼õ{eÂYºË©S¯·
õòú„ê\òÊñŸÏ,¼8´õuóÊ ¶¯î®J†7tªë´	¶XuõðÊÖ…»þëGTß­Cò¾/Ì+7wÂ¤ïyëA†½'}V÷ù6:‰
ÐÊ­úJÑq©‹°æ’Ô7“^Ùv©3lQ»[}®­åj^ª3<Æ]ŽÇZ~êö@7é]ˆõ;g›ø-¯|¬ªö+w?üÓPùÔýœ§^2.Ø?Ö{o¤¾ŒÖ¼“zå­·‰¬w]²ô¾ÇòÊ×©×Ûzê§n
/WÕ+_„õíÊši³ŽñÊŠa÷Vžà®öóÆœÈ)Ç^oJ†mGöÑ’uÏxeëB†]ÿõ#³~û·BëÐ}8oë¼ofRÔ3¥îÛ+¥(ë™ ¶ƒW6†Ú7Ö>™k±SÈ°ÑIdØ
€&Ð·¯VV»å©çG{åËÐw‘ÖÜOeú*Õ‘a‹ÕÉhÌðªßH[Ëî¥¶_
Ÿ¿¾a[èwª=ä•U5ÃÎ{Ÿ“²ßê¦'Ÿ;#´¡á•µÆ;ÑüD^Ù&R»ßúÆZ}½òujB[Ïš·ê¿^Xr£W6VÞwÊf¼ò¢1tBåSæK0\3ì5Ï:*T6åXý©2lk>]o¬‡X«¦Î
<"´|ÕyRŒ	Qvý×Xc,{ßrYó	|ñÆ–O½uÆJ–asèäÍG]†•aÇÔ“bŒØÿH³¢þ^ùN!ÃF'‘a
šÂÊÅÔÿT·W¾¨·Ý÷C«Žtÿ…×Fe­êÊ°ÅjfÞž·ø*oy¬åöRÛ/«Ý£±#óú'Q5ÃÖvhºÐ24N³W>†ÞyXyBÌûÍùh3¿?õwýMTuœŠº4¡­g~[ðæ¶ÿÖ
Æ^ùÖ9©w£±Ïë¾sõÆ?ze{ÉpÍ°­{oÊ¹¡SeØÖ1R_r¯lŒ¼ùªN|àG^ù:a×ý¨®ie¢ÏßvïòÊZcú¥üŽ!U†ý‡9Î-Gïæ½²E<~Õ„à{M}óã•e}ú÷U
[ÿüëâ–ï2lt6
 )^ºóÁ[u–Ôst+Ó°ÚS»ÌÜufØúÿOÏ½rµüªûÈZf/µýRxòÚÛ¾iýÖ¼y‹¨ša‹Õ>S¨Ø<.ÏÓ7Ül«JL­>¯V;Y}»=Ïa6<1ïÔÐïýÓüÅ×yeëÔ„¶
Þ˜£O1·Qãzå=yýäw¼¸ôv¯|Fc7…–¡s½W²„Ã5Ã¶Æü‰Ó3FªûÝ¯ÝZNÿãÏœä•µsõ¦wCëPÝGý?½ò©‘a×ýüáéç…–¯qD¼cn}‡¢ñÅR½ãO•aë}~h9
^_ó¢&Ž¾,üLpÆe)Bc‡Ö!º§yå;Û§zŽÆ›·¤:_†2l
@Shì7+S}QsƒyËˆeÕÇäÏ¼x¡W>¤Î[”«¼lÝBk2ûú;¾í-'ÄZ^/µýRÈ?Fc‹W­cj.D-'´ü"u}+K“u<uœW>ú½ZÙF‘vtÞ\‡ú¦ß+_Æù‡ŸÔ·rê‡å
ýµá§]~ÃÞÞ²Šzçù%7„~ëÚiOW:U5¥­§¾°¡eè½LÕq?OzøgÖ>xà’ë¢¿©Ñ<ºÖròæ9í5Ã5Ãž;þîïZÇ¯ê9&Œ¿·¾-¿Èµ
[fÍZN™¹8,¯M™¾¿µ?¶ÏYt‘W>–ê&[f?¶—E“a×{ýÜ}îXóþ¥ãã•·òZI1'ê£¶oÕÖ?‡–_4ÃÎû¾j=®UÞœÄ1ïûcèúÑs0´½?ˆ¹÷•1ùükúbÇ."ÃöYÏ
ÝŒ~“·|‰
Ð$ªg[Ïõ¥J‘çõAU}ñ²ãGºË©;ÃµÃ­6€è»ù2õ]ky½ÔöKåù‹ÇY¿·löª6“úËXù¸­ë[™ŸÎÑ/ËµRÿh;cmc‘¾èÊ´-Ö²–Þûè©úc«ìËw=ô
}#¡vBÞ¿U?,­_ÇY™··ìjcZã»ÉHëÐ”¶Þ½c®1çÓüseÇô7â\sÎH}ï]ô´–UöÝf7×;oüŒ²÷vÑ»Ï·ç-k-[Š\2oüd³ïeªLWÛmecòì„{þÍ[†çžó
®ìûtåú~-Ï›¯»¾ëG³ÆD-[õ½Ÿó–¡óÅz¦ë®WÞ¢ç·2Ð¼úBÑ[÷kY)ßaÎamÌÕ³yÖü³¼ò±ò¾CU½G×™·ŒXgÿâø¾ís^£ã{maûÈ°Ó!Ã
4Éï;±Ïêç$ê?Z¶?ˆê¢êÃ™W~kîK—zË±t"Ãe6ªÓZëR;¦hŸukY±õÛ&ÉË9DYtlî¥ìú™›îúîg«6lÏ[¦­ëöé6ÎUµ©¸¨XvªmÍ{Gôñký/ÅþîLÿcsNÌ
ûÍyiùä*õv}û¬ìzçšÍïeËŒÍ°÷Sÿöh¿Ÿsè¯ÜuY´O¬ï³u­•w(¥&µõÞ_üúcÖ¶¾»péEsl]#š/ÁZf™y
”§‡–¥kñöß^â–ïÃ5ÃÖµjå¤ºg>té¸BÙ–®m½‹Ë{ÞfŠ^ú¶ÜZÖG¯®™“ª/©žáÖztNyÞµºð¨}ï¼°äÆÖå‘aû¬ëGÏÕ%ÊŒ¦y¿óÎQÍ§â-#óÑ’uÏXË)º
ukœŒÖç·¥h†ý¯yàÃßm®ÞøÇTó,ˆ5Wî)7Œ8ß-CÏ¾OW¼¹ÊÚ?ºVÕ~©r_Pÿœ O>{zë{ÚØcJ†í#ÃN‡
Ð4šw&¯ ºœÆ†Öw‰Þ²DuÙù·LÙ×Ëw­Ýü¾ú¡xË³t*Ã}Óœ—ÅklØ3<Æ]NÆZŽÆ.Ñ7ÇuÑ
Þ¶ÕAcçÓYûØWùÃàØ««6¾•·œVeêúêçcãã¯¾…1m^åöymSµÅô›¼å´ÓþùdÙKò~·ÚK1ß™gô{”5©ßc¨Ol‘»å÷ý_}¢cZ$s{Â}Êá­ß¦|Ë[F
ÝšÔÖ»èèSsßQþmyÿÒÛF]ì.Gçö½Õ?NÊ¾Ì{þ(gšqõÍf¬,P×š²†I¿»Â]W]†k†-ëgÌ=Å:~ºgjÎ7ï[+]÷:†1Ù[¦èµ
ÊÚ¬åé¾sî/íïHT¯yôÊñûxc‚èœühÉêYyÛ®÷—ú¶ÇËÇtÝéÝ©²ëPýƒÛ—WOeÑ[g/8G}‰Güüs9:ú7yÏuÑó¹È»ÁùÆ{Ýãò–¡ïŸôîÙ«s·*ša‹õ¾Qt
NçÕi²sYûÚ'<ok}ç z…UV×ŸÞµê~¢±ZòÖ£û’û¾lÍ¦ª7ŸyP\ª>×z`½?Ž½6È°}dØéa šHùC^]
³sÝ–w,xíV¬:³êcú¯ÆTn¦,2o|‡¯–óæ¶–íßéd†-š-ï7©mÛvñöO]RÏ¿Kc²XßÝ¶Òy¡\í½E+îeå>óÊ…”©ëëøyc «Í£~Â}üÈ¾š?Fßž
ª­óáâU3¼m«òMùà8ö9YL+]¯zÿ¤ì]×©¶ù…[ïÿ¡®Wµ%c®×2öÛÐ¿ýï¿¼âAõMSÿ5!ÚºÏôgÚ>K›·µzaž¿¦µõf\{Ë7òö«hß+£Öø#Ù±Q c£óÄ»v
5îTÌ»Áñ"rU£kZÏm“î»Ömù$û7³®»í›Þºê2œ3lÝ¬qö°jã[Êã”k¾VýW÷…"¹u«2×‚Îñ¼eê^¨kA÷wgšïQïöôLÊî“ú¯·žØ{ô®µ›?ÔXSz?«
g‚îÏºOkÝ¼²rZÞû'!Ãöyö×Ük”?êþ¢oUô<×IÞsRôJÌ"­ôLûüõ
Û¼eë:ùóÂewéºÑ}PÿÕöy¯ßªL†­ß[®æ`Õ5£sX´ÿªg|õþÓË¯cŒ©¯öÇêMïŸ
ý[wfÿ&æþ«g^Þ»ÙV:´ÍçþÒÄÿ]ÏGëúÿºŽõô–{maûÈ°Ó!Ã
4‘²»¼9ãRRÝ´ìøÂ­:a‹5ÆAFyaÌwÂÞ>ªK·2lQœ¼¾ìe¨OŽõÝiÙº¾úÓÿmù›+½u—µæ‘ÙÇzÛà9ç°_×º­ªfØ)(Ò¸GÞ~é„&¶õ”‹yû¸¬ÇÆ{?ƒ»œª
¶¨¯|ê{»(ã¶ò½2×‚¾	±æ×“aË˜£O‰Ê±« ÃöÎ°KR~}Å¯Ît·'DïÂcsÔ"tm[ýÆËdØ1ßÄˆÉ•{ËñÄÞõ.Ý}šHìµA†í#ÃN‡
ÐTªŸª~äÕÁªÐø!ª¯{Û£¶²þ^^óxÞoŒÑÛOuéf†-êg–*ëP¹1GþÆ<g«Ôõ•c{ý‚‹ÒïN9–‹ú½jž
o½Uéûá¼íxoá²IÞ2ªP¿®ªiJMlëÉs7Oþ~L_Â"tlô>Å[·GÏžÁ>…ë´a—“"Ã¯szÏ­~Ž:/tŽ…þMÙkAãéVÉ«b3lÑ½"oLú*ô<ñ²h2ìÎdØšcó²ãNw·
%Æ©IU7Òrô ê«Ö1*“aËà:õxoòÄd‹Úv/£ô¹ÿêøi<o™Ué¾æm‹aû¼ó#æ<Ã—È°
M7ùükú>[¹~ƒW+Buj}SèƒWD72lQ¾ùùë6åý^‡—·oÕ¥Û¶è{Ô¨oÏ ú¾Zý6³±DëÈ°Em(}£š"÷Ó8•CÃ[gº^õ­»·
E©¿ÕÓ7ÜùoŒ18VòêMïxË,B9–Æ<‰Ÿ§SšØÖËhìkå-Þ¾÷è~®ñ
ŠŒuîÑqÖwÚÞº-dØå¤Ê°EsäUíOª14.?~wÖÔ¶h|á²ý±‹dØ¢^y¡¾ò–Cù»æ‰óÆ2lûúÑñ×;à*Ïw•U=#Õ}PÏroÜ&®çÖ~"©3lÑ{Ë*yol¶¨gB•÷ô
Eï¿ZŸ2æT×jF÷D¯¢ãó¦aûÈ°Ó!Ã ÊÕg¶j_Tå#U›©U·2l¹ôØÓrÇ
U5oŽ1o¿Õ¥2lÑDË°H¿#Kª¿kÎœÖeÕ•ag4ß˜Æ:,ÕÖ]³i‡ÚD©Ú¸µ‹4®£Æ›õÆPµè÷iìOåšÐ[gh4ï«ÆÅ×ïöÖ—·Ï4>¶ÎoÝÐÄ¶^+¿ªüâó×7
lqE#1sŒU¡q¦4~ª·-{lWÿöL½¤úøTe‘aïöûSÏéSí³VzhNEÝÃ¾¾}é3lÑ»7}3U´O¶ÞÕyËÑ»@]weÞ7êºÓX¿zGP¤
¶ýè[.½«.2®t6ä…Gp×_”¶Gõ"u#Ñ˜!Ó§=#­#ÃÕitœ‹Žg¯9:ŠÎå®>êež	S.¸ºÔ3A×ª®5SWô8dtŽ¨Ž«1³‹\³2lv:dØ
€¡FYÒó·LÙWý¨Õžl3¥•êzjßiKÕ¿4þqÙúLŒ:èø Ø¾Uh{kýrÚ~G›eóÊÕ)o›ºAm@{¨¶Â@ÿ‹ösJý—5Æ¸úµŸú³ÃƒË8å§‡«þÜ[#8zp<õ
§Q?üP¦­kCï}tþkŒÅNœ‡í”Qª¿ú0kß©m«ëRó‡i<ý÷Óo®ÒvêïÕ§]ÛšúÜPN¢ûÆæYóÏR6>¸ÏÚ¯_í«íPn {ŠrQm¯2ðnì³"´}Öõå•¥s-´ü”}Ò³w
Ÿ}ðúÌªs<»5hûû£:)'×¹©çŽò;eÊÿt.)Pî¤œAsO¦Ü/eèÚ
¯sZÏ9#^Ùuk·œyqŸÆ3Ð½¦ý^©º‚æ?ÓqÔ=âÜ_Úï«êÚ¾Œž+Êþ´­º)×y¦û’rue•º7éû¡¼í,Bu*}ã¢o´í£Áûó
]oZ·ÆÖÑ»<½Ó9ó rYŒÊ…ö]ö
SUV¨Îz_Q^†ÝJï_4·¦žYºçè^£sA÷Í£{¥ŽG'~ŸÞëKû|ˆ_xvj~uO–×'¿îc¤ëPu}«zNh¿iŸ‰ÚêG­:ž®1ý&oyyt¯ßã™ðZÿKÙ3apîêã“ú™ 
kHÛ®çö·Ö™]«ªO)ÃÏ¶AýuôœL±þNÕk3M¬×XÏÝL¯×%{	6 `8Pý·®z†¯Ö6wŠü§NíuþÔ0ÐiíyGª¬Èòî“è¤"v/ËîÍeßg €…      {†J†
u!Ã     è2l ÈG† Ð=dØ       {È° 6     @÷a@>2l     €î!Ã€|dØ      ÝC† ùÈ°     º‡ ò‘a     t6 ä#Ã
è2l ÈG† Ð=dØ       {.=ö´¾u<u\»—ïœú^Y È°       ½Š       Ð«È°       ½Š       Ð«È°       ½Š
Ð«È°       ½Š       Ð«È°       ½Š       Ð«È°       ½Š       Ð«È°       ½Š       Ð«È°       ½Š
Ð«öÙ{ï¾|ë»        ôœÿ~ÂôTendstream endobj 138 0 obj <</XObject 139 0 R>> endobj 139 0 obj <</Im0 136 0 R>>
endobj 140 0 obj <</BBox [299.16 537.84 474 367.44]/Filter /FlateDecode/Group 17 0 R/Length 48/Matrix [1 0 0 1
0 0]/Resources 138 0 R/Subtype /Form/Type /XObject>> stream xœ347Ñ³0Q0 BCs=#KK=C3c3s=…ä\^}Ï\—|^
­f’endstream endobj 141 0 obj <</BM /Compatible>> endobj 142 0 obj <</G4 141 0 R>> endobj 143 0 obj <</Fm5 140
0 R>> endobj 144 0 obj <</BBox [299.247 537.753 473.997 367.503]/Filter /FlateDecode/Group 17 0 R/Length
203/Resources 135 0 R/Subtype /Form/Type /XObject>> stream xœmÒË
Â0…á}aÞaÖ.ÒÜ¦iö^"èÊPPaZßl!µ&S²ûá|³É»²1*ë[tMP¤vð+ÑÅ#ƒNÅ–JZ1”Ã=µˆ^“ÒÃ®›‹i”¥YZiÃBÉdKÙë!mX(™LNÊäfº?A
"¤ %“C(å6iÃBù—I›B&ãrH†´a¡Ìr@²Mö;†âÆûn‚Úv©¤g´Ï+èAãøî¡Þy¼} Þv„ë'œªúÂ×¦¿âáˆÕˆ°endstream endobj 146 0
obj <</BM /Compatible>> endobj 147 0 obj <</BM /Normal>> endobj 148 0 obj <</BM /Compatible>> endobj 149 0 obj
<</BM /Normal>> endobj 150 0 obj <</BM /Compatible>> endobj 151 0 obj <</BM /Normal>> endobj 152 0 obj <</BM
/Compatible>> endobj 153 0 obj <</BM /Normal>> endobj 154 0 obj <</BM /Compatible>> endobj 155 0 obj <</BM
/Normal>> endobj 156 0 obj <</BM /Compatible>> endobj 157 0 obj <</BM /Normal>> endobj 158 0 obj <</BM
/Compatible>> endobj 159 0 obj <</BM /Normal>> endobj 160 0 obj <</BM /Compatible>> endobj 161 0 obj <</BM
/Normal>> endobj 162 0 obj <</BM /Compatible>> endobj 163 0 obj <</BM /Normal>> endobj 164 0 obj <</BM
/Compatible>> endobj 165 0 obj <</BM /Normal>> endobj 166 0 obj <</BaseFont /Verdana-Italic/Encoding
/WinAnsiEncoding/FirstChar 0/FontDescriptor 167 0 R/LastChar 255/Subtype /TrueType/Type /Font/Widths [1000 1000
1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000 1000
1000 1000 1000 1000 1000 1000 1000 1000 352 394 459 818 636 1076 727 269 454 454 636 818 364 454 364 454 636
636 636 636 636 636 636 636 636 636 454 454 818 818 818 545 1000 683 686 698 766 632 575 775 751 421 455 693
557 843 748 787 603 787 695 684 616 732 683 990 685 615 685 454 454 454 818 636 636 601 623 521 623 596 352 622
633 274 344 587 274 973 633 607 623 623 427 521 394 633 591 818 592 591 525 635 454 635 818 1000 636 1000 269
636 459 818 636 636 636 1519 684 454 1070 1000 685 1000 1000 269 269 459 459 545 636 1000 636 977 521 454 980
1000 525 615 352 394 636 636 636 636 454 636 636 1000 545 645 818 454 1000 636 542 818 542 542 636 642 636 364
636 542 545 645 1000 1000 1000 545 683 683 683 683 683 683 989 698 632 632 632 632 421 421 421 421 766 748 787
787 787 787 787 818 787 732 732 732 732 615 605 620 601 601 601 601 601 601 955 521 596 596 596 596 274 274 274
274 612 633 607 607 607 607 607 818 607 633 633 633 633 591 623 591]>> endobj 167 0 obj <</Ascent 1005/AvgWidth
721.125/CapHeight 728/Descent -209/Flags 132/FontBBox [-131 -206 1460 1000]/FontFile2 282 0 R/FontName
/Verdana-Italic/ItalicAngle -13/MaxWidth 1076/StemV 268/Type /FontDescriptor>> endobj 168 0 obj <</BM
/Compatible>> endobj 169 0 obj <</BM /Normal>> endobj 170 0 obj <</BM /Compatible>> endobj 171 0 obj <</BM
/Normal>> endobj 172 0 obj <</BM /Compatible>> endobj 173 0 obj <</BM /Normal>> endobj 174 0 obj <</BM
/Compatible>> endobj 175 0 obj <</BM /Normal>> endobj 176 0 obj <</BM /Compatible>> endobj 177 0 obj <</BM
/Normal>> endobj 178 0 obj <</BM /Compatible>> endobj 179 0 obj <</BM /Normal>> endobj 180 0 obj <</BM
/Compatible>> endobj 181 0 obj <</BM /Normal>> endobj 182 0 obj <</BM /Compatible>> endobj 183 0 obj <</BM
/Normal>> endobj 184 0 obj <</BM /Compatible>> endobj 185 0 obj <</BM /Normal>> endobj 187 0 obj <</ExtGState
194 0 R/XObject 195 0 R>> endobj 188 0 obj <</BitsPerComponent 8/ColorSpace /DeviceCMYK/Filter
/FlateDecode/Height 296/Length 2514/Subtype /Image/Type /XObject/Width 1458>> stream x^íØKjAÁ~=ú
ƒ6Æ+¼Õýoh˜S$(‚ºC­µÖÞ     rfæÜ÷ó     9÷ãæÇ     Ë @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ
 Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc
PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±
(óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ
”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l
ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6
e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊÎ{fý>¾
çz\–$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$IŸÒÞ
     rfæÜ÷ó     9÷ãæÇ     Ë @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6
e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™
€2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ
 Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc
PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±
(óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ
”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊÎ{fý}ý     @Îõ¸¬E°¹§endstream endobj 190 0 obj
<</XObject 191 0 R>> endobj 191 0 obj <</Im0 188 0 R>> endobj 192 0 obj <</BBox [116.88 381.24 291.84
345.72]/Filter /FlateDecode/Group 17 0 R/Length 48/Matrix [1 0 0 1 0 0]/Resources 190 0 R/Subtype /Form/Type
/XObject>> stream xœ347Ñ³4S0 BcS=S#CC3=cS=s#…ä\^}Ï\—|^ ­—’endstream endobj 193 0 obj <</BM
/Compatible>> endobj 194 0 obj <</G6 193 0 R>> endobj 195 0 obj <</Fm7 192 0 R>> endobj 196 0 obj <</BBox
[116.992 381.13 291.749 345.744]/Filter /FlateDecode/Group 17 0 R/Length 120/Resources 187 0 R/Subtype
/Form/Type /XObject>> stream
xœ+ä244Ó³´4R061Õ371QÈå…‹˜šë+äðY¥,±@õäð¢›’Ã›3³Ô37E6ØÂÍˆ–t3@Æ†kñæñ(€ ¡‚7¯¾»™Bz1¯¾[®¹‚K>o
—~rNfk^Š‚o€ ˜¦.endstream endobj 198 0 obj <</BM /Compatible>> endobj 199 0 obj <</BM /Normal>> endobj 200 0
obj <</BM /Compatible>> endobj 201 0 obj <</BM /Normal>> endobj 202 0 obj <</BM /Compatible>> endobj 203 0 obj
<</BM /Normal>> endobj 204 0 obj <</BM /Compatible>> endobj 205 0 obj <</BM /Normal>> endobj 206 0 obj <</BM
/Compatible>> endobj 207 0 obj <</BM /Normal>> endobj 208 0 obj <</BM /Compatible>> endobj 209 0 obj <</BM
/Normal>> endobj 210 0 obj <</BM /Compatible>> endobj 211 0 obj <</BM /Normal>> endobj 213 0 obj <</ExtGState
220 0 R/XObject 221 0 R>> endobj 214 0 obj <</BitsPerComponent 8/ColorSpace /DeviceCMYK/Filter
/FlateDecode/Height 296/Length 2480/Subtype /Image/Type /XObject/Width 1458>> stream x^íØÁ	Â@
Á‹M>â3ì¿C¹.œ…ib÷9Çu|      guîÏñ}ß     ãc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
P¶zlÛ8æ
r$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I
’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$Iú—ö9Çu
|      guîÏñ}ß     ãc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc
Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    Pæc    P¶zlÛ8æ
rV?É‡Ÿ1endstream endobj 216 0 obj <</XObject 217 0 R>> endobj 217 0 obj <</Im0 214 0 R>> endobj 218 0 obj
<</BBox [116.16 598.68 291.12 563.16]/Filter /FlateDecode/Group 17 0 R/Length 46/Matrix [1 0 0 1 0 0]/Resources
216 0 R/Subtype /Form/Type /XObject>> stream xœ347Ñ³4S0 BcS=S#CC3=C3S3c•œË«ï™k à’Ï ¬â‰endstream endobj 219
0 obj <</BM /Compatible>> endobj 220 0 obj <</G8 219 0 R>> endobj 221 0 obj <</Fm9 218 0 R>> endobj 222 0 obj
<</BBox [116.245 598.631 291.002 563.245]/Filter /FlateDecode/Group 17 0 R/Length 120/Resources 213 0 R/Subtype
/Form/Type /XObject>> stream xœ+ä244Ó321U053Ó¹¼ps=3cC…^#KC=#l"P]9¼èæäðf Ä,ÌõŒL ‘Í¶´@7	Sª+ÃÙáZ¼y¼
h¨àÍ«ïn¡^Ì«ï–k©à’ÏÈ¥Ÿœ“Yàš—¢à À ˜Ó.ùendstream endobj 224 0 obj <</BM /Compatible>> endobj 225 0 obj <</BM
/Normal>> endobj 226 0 obj <</BM /Compatible>> endobj 227 0 obj <</BM /Normal>> endobj 228 0 obj <</BM
/Compatible>> endobj 229 0 obj <</BM /Normal>> endobj 230 0 obj <</BM /Compatible>> endobj 231 0 obj <</BM
/Normal>> endobj 233 0 obj <</ExtGState 240 0 R/XObject 241 0 R>> endobj 234 0 obj <</BitsPerComponent
8/ColorSpace /DeviceCMYK/Filter /FlateDecode/Height 96/Length 17868/Subtype /Image/Type /XObject/Width 1458>>
stream x^íù·UÅµ¶èÕ˜Ü\¿Ü››hbo›¢Á¨ØcƒŠ Øƒ¨¨¨ˆŠˆŠ€ ÒÒ÷‡4j¼6±
1Æ€ãŽ‘‘‘‘ïŽï¿ùx¶.³³­¹fÕjöÙçœ÷‡g °g­ZkÕªšõÖ¬Yè:ø€ƒ„B!„B!„BˆŽcÀ×öÉß?R!„B!„B!„è8([!„B!„B!DÇ
"[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B
!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#[!„B!„B!D'#
[!„B!„B!D'#[!„B!„B!D'#[!„ý©×Þ~À¾ ;>iåÝ¹KÆx¶¢:ž¿å¾ƒCïö®Ûþî˜!¹edðîBå<qõ-=[!`ÖØû	µ¡3æ^àÙ
ÑŸØ6}ÎÐ·²ê‘g~æÙŠjyõžGþOÞ8zÕ©CÜ2„¢“‘Ž-„BˆþÎŒ›îþ·¿lÙõÿZùhñêÇ=[Q c_Ôµwóî¿‡ÞÿøUc’ôgÞ]¨¬go¸ó@ÏV@
µ¡·æ,¾Î³¢?ñÛ—\úV6=õâéž­¨ž{è}Àk¶n?çÇ'¸e!D§"[ô.ZõpÞšµðªÏÏ»põ£ÓŽ3îïÝ=ìŠ®³;Î½®¢÷1øÈ“Ì>ãÞáW»öe
N7tÝ¬˜àÙŠÞƒtìžeØ1ƒºömØñ‘¥aO¾bÌ
¯ŒV¤c‹²HÇ"éØGž–ýÞ‚å÷zèQnBÑ‰HÇÍ>üÄ®aGúgüèX×6k\-Ãþ¹î?>Y²vÚ+w=r¨Ö™…¨Ÿ!Gœì3~ù_?smS8ÿ˜SÍ>£nMjÑ}ÿ—Õßx¶¢÷
»ç`.ýéëëgZßø‹·ŽÿŽWFéØ¢,Ò±…ˆC:vgòöì%×[cëÊGžþ©g/„ˆtlÑ~yhœCÇñlS±ÆÔªø²{÷ÿ¬~ìÙãëÐà…_aéDh‚žm
Ò±EÝHÇî9–Nœz¸õ}o|ò…_xöÒ±EY¤c‡tìÎ„¸’=+6.°üØ›Ïá–!„†tlÑL_Ò±3¾X³ugÊ¹PBˆx¤cûö¢w
»guÚyfNì÷ç/»«Ì¾géØ¢,Ò±…ˆC:vçBÞ®½ë¶¿z?Ÿ¯Ü¶¥ê=”BQ7Ò±E3}QÇb³'œ[S‘tlß^ô¤c·ŸÓ~pL×g+¶®
~_ë¶½S6?˜tlQéØBÄ!»³wÞÈ®/ºwÿoè•Ù÷$„=tlÑLGèØkw}ð§•ÝËó`Þ»oÃŽOÌ2 e¬¸l!ªD:¶o/zÒ±ÛÏâ
ÿ(ôÌ™kß>ô×ÞC:¶(‹tl!âŽÝù¬}lú‰Ö˜{Ý//pí…¢SŽ-šé›9ƒg›Á>(ö$/¼wòæõÍ8½fënåË¢:¤cûö¢w
»½œ{äÉ]û6¾¹/ôÌ7?=û,Ï>éØ¢,Ò±…ˆC:vçÃ¨ÏWm^zO¿¶zŠg/„‚tlÑLoÓ±[yôò›Xù¿2VLšvŒWŽ"éØ¾½èHÇn/Û¦Ïü¦×îúà¬ÃŽsíc
Ž-Ê"[ˆ8¤c÷n;÷bÓŸ~ôÊ›”ƒSÑ+Ž-šéí:6œ÷“ŸwýyÕ–Vùû6ìþã/~p´[ŽÂG:¶o/zÒ±ÛÇÕƒ†r¶ã?BÏû¹«ë;¤c‹²HÇ"éØ½‡7g.º<ô®8ó±Ì
ÙÊBÑ.¤c‹fú‚Ž
W:¤ko÷›³®qïð«Ý2„>Ò±}{Ñ;ŽÝ>v=?DèYïY¾q¾g›‚tlQéØBÄ!»÷0üg§™óä©×Þ~€g/„=tlÑL_Ñ±ÁZk†%L9Ü³BøHÇöíEï@:v{vÌ
b±ÿzÖ÷_4ÊµOA:¶(‹tl!âŽÝ»è~zæ¡÷µgY÷BÏV!zéØGvýê°ã»î<ÿŠ®7ßsÐâ
ÿhõ£ÓŽþûù[î;xÊ5·yÒÙn9UÂù…w»¢kÎ¸¾ÇÙÂ;ŸŸw!º,l|ò…_p®á¤‘£=ê·¬ú’ŽýÈe7°®ñÆK¯^æÙ…wBžnîƒwõæÌWGòÞˆ?ã]Î»ó¡ïÓÞ
xÇ^YUsþÑ§vM»áŽÉ¾cÆÜ¨RÏWîzäPÚœÎÁŒ‡ü47žua×K·O8dõcÏ¿õ¹9çfßi÷3/¹tâÔÃ¿jÌÀÇžî–U%wf£
ÒÐ­òùS©m’~îÞ¯êrD5}‡tlß¾ÍcÀú'fœ¼dtWÕc€mq‘6Ä3ÉÚV6^R×'G8fÈE=ÚpŽmœöÎwøÕs{u$Ïº>uÝØ.?åœoÙµ[Çfïîu
¿¼ ?ƒ>yë³³ÏÉÞñ–gf½ì¡©GR×vûuC{=çO—n|É³M¥¨ŽÍX‰ï×x/Mý:cø‹·Žÿ{¾¼k×ßß
~Ï¿"kß|‹´ù.¾®kðá'ºeUßß×Ì|hà[ãÙñß³ÆMü.Ï’±²'üž®M=é»ø¾ZûêxÉ	g~Ë®Ý:6ýÏŠvF½B~ýl»ý
Ñ¹Ðfh»Œ{|‡øñyoÊÓg0ž¹®þA:¶
c=ï†~ñŸýÏWcýòIOý„¹YÈ/©üj+&ûž__éÚ!DOÒ_ultæˆìaý¢{÷ÿ†úðVömÞý×O—®¹óˆªs,SÞ´ï<ðýùËî²b•Z¡îÌý^¾ãÁ/2?ÀÎÆRøbÍŽß†
®³gÅÆÍ¿‹áœŸ{mëžªÒ±süæ5~¿pÍ£ž}
çyr~"íÉ{g´§÷^y},Z”W~hWè$Ÿ.]7Ã« Íý~áÊñ·²65î‚ËºBïøK¯w¯ßLk{Ë;ôR×6†‡.½a@¨|üwÏ6ÞÙÛ³ú²{÷ÿxÏ3ã³[Wqÿ´¯ü"Œ
>ê«½úë·¿ïÕå›w½nû»´A¾¹XÿyË´Y¿j~¶û6ìø(T6íÍë#ZÉ»nÐ±³1àƒ+&¤ŒŸ,Y; ­¨È‚3öãh¯¿{ùµÑœ7`å2ÎãóU›×2GcÞì]³
ÐÏßxqþÅû6¾¹Ï«[ƒµÛÞB—$W3öíÒ±YŸà[Ý·qçgn¿æ‹5[·£I\øÓAnùV?‰‘gGûd
ö_×¾ZEo#¯µw>#:¬õ~Ð½º§’¢cóýðáSyïø.XÃ¬ÚÕMó£Å«&Ç~‡üîã×VOa¯ª~¬}2ö¡¹¼;wÉÚd¬ÿœÁïñ£¯?ë×î5«€ïñŸË«–öœiÚ
íÒ±y¶15¶ÿÚòUä}°îâ•ïAÿê¼5iÖ2ð?'[û4;ô9~ã]¿'¡ž¡{Çßñl‹€îœÅ’´BNž-ýz5sÚ5ãll¿ÐÌþïw'uàÝyõ¥*Ÿ=ôl»<Û˜s„Ê_3ù
¹<Û¸1{7îÜã½oØï—Ð?¢SxåWm T÷ç¯ïÙ !DOÒßtlüÒ·g/¹¾È˜ß sPâ§Fvž{]æ^»õMïšN}þÀœÅ»V3Ö¯
Ðò®mÙU¥c3w³®Q•.Áœ$EÏ±gÙ†9uh=“¯3 L»Â÷b½g÷¯\ú÷Ôw•¢)ÁÒ«šo¢í±ßÎ{nyÐVÐ«ÒÐ~˜Çx×á³›^ãæiQY»ë¯œ¢äÝg_×±Yk
bþâ=£<ö®ßñaÙ3òòÎß+ÃGKÖ<]GÌ÷Xñê`¶Æú1š{°îèì<¯>y°¾ž]&ÞÝjÏh¡ßãã0×Ñ×ˆ9Ë»ö”ko¼¯uÛß«ãl©˜1‡¾Ý„ïÇ»¿ZÙ½üê
_œëÖ%žG™z}Ãþ~…}AÞõò¸ë‚Ë»R5ë>\´êáºôì+~>¸‹ò½:Xp¿¬ã¡C…þ½*¿=%"1•èÙeôb«ÿãïC¿ÏÖ cü_o>ÐÓÌ¿ûáC­ºß|Î×>Îè
]‹6wé‰g™vœc»Æí¯ŠœNUéØuï
¦ÿ•ìÙÆ@ŸVÁXÿž›·6\|>ëúuÅÝ!Dô'›x–¼³ÿÊðè•7Z#Æ'!öÕ+?túØ¸¼¾¬cç]ã½ùËîðl=ðáËhÄ­à3TuïÌe¬¹W•¤Ö7FS(C]:6ßSÕÏ“½|
ÿÞµ-ðm‰‰ó®SöeX×•ŽýOªÐ±¹/â,½g“Â[³^UTÏ@‡ôÊ/ st4Ø*õJö×Çè«e(«cs¿Üw•:àç«6¯G§ó®"VÇ¦m£–RoOÇfì
ÙéÕ»Þ˜C¼ñÁÞ}yÐ«ÚW#ŽÿeWl\x,ä§(º~:aÄ5µõô£K&>ñc¯)'_—¿ŸQÖ¯ ¶b!‹BLmÇ»vˆX›x w_Yz›W—f¼ù@O3øÈ“Ìü
¼#Ï>ÖGB×òÆš<?¨ ¶MŸ;´¨ï ý]Çf¬'K•± Ÿ¯ÞÒ}Í óÝk—á“%ë¦‡®=kìý‡x¶BÑSô›=‚ÞXQ†":Êµ§ŸßE’Wv“bâµú²Ž_j]£l~lbëˆ‰
ö“y×Ï}ÓòIª&õ]yšBYêÐ±ÑšËÆJY°¯“3Ã½:„ê´ßß^ê•_övX×–ŽýOÊêØŒu=Ï¯&v=³™:uìrjxõˆ}Õ)kQ<m!úãª×)2ömØýÇ,'J
1:6:`‘õ<›\cÖ¸I0¯ÞE°Æœé£ïjœQeûÁŸÃïðêäA¯/7íüÜ»^ØwPDË®SÇÎ(ëûdPŽw­*èT¿bïºmïùž<Ž¼ËEÖ¼ù@'`i°ôƒ1ó©Xò4s/·RÝ:
6°FQt­¹?ëØ´úWïù±þ†3†¹u(ÊÌÛ&|'t]æ’ž­BôýAÇ&ß¡7F0·bo>{‰ecrcOPä>ïTý‚q)wÜÚï;1&â“3_Ÿ{çCß'Ç>%1Þz/qÙ^=ú²ŽÍ99
Ö5ì‡ž½ûÿÝ¹ïþvÃùA¬Ëã÷sO¬¥ ß{Ñ{v\Ã«Gâ(Ð¯¼ò3ömØñ
9.ùóËîÝ_z¿o%õ]õ6›¹æŸVn^÷˜ Sá§SÆwÊŸü#Ÿ©3ç#÷|ŠÞˆA,·÷n¾Ü´ëÏä¨~oÁòûˆ©¤ocÞ¼¯{×^ÏV:ö¿R‡Ž3ð‹Š‹Fyõh%EÇ¦Ï ï
hÑ®ša·W—<xÞ5šá;ôž—EQ›y­÷­R'ò›gç·q_Ù9yìÕòöì³w"U;ÍÓ±)+5Ö²™<ÛÒè—¼:ÅsJçê0 ¯õê”GCÃvÞ99íˆç$Æ?;¿œä¹C‡ñü“"9S
tlú‚¬_Hõ+ÊæEZùÈÓ?õ®Ñý‚÷¼,Šú|c®_±NB~óf¿‚wëW|¶²{eªöš§c;fP©õ8o>Ð
;ÇªÿócîMÊÙ˜Ç¼»'ýGð:û}+o)EÇ&|Ññ™¹‹w!ú«ŽÍÜË‹b¬g c=~\öMãßq&Š×ï³NZfgä
ùGô½áÛBôOúºŽ=ò”_™ëÞ€VÍ¾ä<oèQ§4ò7Îj0æ>):J#¿ÙºmïXubNÇõ<†q‡ÜÌyg×xù²çŒ{à{Ì—383&TÎÇ¯­™Úü»¼œ^VSµQöCY×
7g‚¹œO–åRŒÉõH¾QÖ¬úñNóräY0?µÊb¼ð™ÈÇÒN9+ˆócÐÜcò@§¾«Þ¤cã—æiPä”!fÑÛƒÉsæ9¡
[e¡GxõÉ@¯°ÊÁfÎIÎ›¼2h¬ï¡q‡|×<{ùÃOÝü[}gÄx}D+yuîK:6š@Þ^Æ€G/¿i€3pn¤WŸfB:6íŠys/òìr&h¨n¿:ìøFÛ"‡ú{ž>D™EçG
ãÎéæåòÝÑ·öu#Ž=½q.sÈ¯ÏÎË-«ˆŽÍóÉËûƒ/áå¢ü ú™¼5õTíÔjÏ¬Ä®Ý[äéØ–ÆñÚýOæÕ¹(©kõ´úEžß
í&=€¿‹Ñò®:uˆ[¯Œùyk[ø«ä°õúÎeÈk×©g4‡tìl
•g5ò¤³ƒ¶ƒ?±ñs¼<zÜ¿÷MXPO“fÍ¿—~ªuì&_Æ_×8žßyë^EýŠ¼6™ùÞÚvæWä­Çl~zöY^}š±tlô9ë<çXŠöõíÆÊ1Te\*Ziè1ÚqÈbŽKœÂª
GžùñÜìÑ
õÌsé›˜zçDño±g7Ó_ulbÌg¹ÿ¥d?R^ŒõøNìÓ´ÊbŽéÕ¥(¿_¸æÑÐ5Ÿ¸ú–Rg+!D]ôuÛ:Ÿÿž3´=ûVg˜Ç·žß¢£¼ÿêò{BuÂÿ.’#½F––„ïé
ùÃÍÔí;4º¤j£–‰~’òL2ˆ¡±|yæ^EÎHÉËOò»¹Knòì›a^j=S`Ž’:?d®‡µ¿<õ]õ&]Õz–ÄÕ{úu+Ì?¬}ÄÌbÖ-˜‡X1ä±t„<†=¨‹~§y>œ§c·b
½Ó7•‹«k¥/éØ¿_´rR¨¼¢c {O,]<uøFÇ^»í-¾Ö¼¼5UbÎÉãl½74x¯ŒVøöÏóv[er¿¬{å4Ãú]#GÉš­ÛCeÑ±óÎ
CßNí‹ù}Þ™uÞÚU3V{Îƒµ4Èlo@F¶Ï
œßäéØÖ^$/§vbulÖx‰‡§-xe>xÉè®¼uÉTýÐþðú†Y¡òðÐ6½2Z!¶ÛÒÅ‰Yðôðf2›wˆÞÆ™­EûlóÎY8~r²¿ÙðÏrÞ
×C£öÊi†õ.Ö÷÷­ï†Ê,âWäå8äÌÄT¿‚¸Ë×e<IÉ;déØyà²îC_þ/ýÂþ6Âýàó ³öÛŒ•ÞR|}ªkŸ(ï*&¯yæá¯±ÿ‚õØÔ6“¿˜—Ûfçó†{e´ÒuìÆ:
³ñÙSíé×­0Öç[Í¾¯Œ",¸÷ÑßÝÔOól…¢'èË:6c»¥¿áÙ{p¦OvO¬Ž2õÚÛÕÆË‹–ëæ–¾ÅÞ%Ï>£nß¡kŒNÕFC )[åWïÙ‡À'•‡nR$a
±V›ˆõ›™OZ™7cµ‹ÔwÕ[tlæV\Z‡go?K€P¹œ¯ãÙO¹ö¶!Û/7íú1¾ž}häÀAÏém:6{¨Ñøê‚svB×-¢c“3(TíxBÏÞ‚1ÀŠËNïÐƒª<¯®
‘ÔXgÍ;OÔ}$¯”ÑKh³¡rSulrÞ[ïí!E?lŸfÏ²
óBå2ïõì3Rtlôibú‹j%èmÁk¬Ýõg[OÇæ=Ñ¦R×Æ¾È|Ç)ýg†¥! a—Ñ-n|‰¹w!Åçd|IY+ñ <Kwf/˜gßJÞy‰ÄÒ¦æÞi?'Tnª_¦l½bi={‹¯×ö‚
þ_ÊY0):69Oˆé)Û/tøhÖw½aÊ‹¹{ÆbØ6}ÎPÙì_ól?=“EÇPyV:óçÔµªþ¦cÕ…uæšEßvŸ¾¾~f¨ÜT$æ›U<!„h}YÇ&wD¨OfÌ©Ê÷b¬yå®
GÉSñµÖŒ#C?òì=¬|¡ZÙ½Ü³Í¨Ûwh&tHÕF[a¾li…èN)ñ)Ø„tMâL˜Ïzöÿmä#õ›órÀ¯{ü¹“<{þ¦c_*§Šóéˆo
•s–õŠÄÿYðýt?=óïw c÷©:6ãŽÕ7¥~K!¬X²"ºP•“Áz†11h´Mk½–õÄ²¹#«Ò±™¿†Ê¡_):¯Í`®ÚÎßÅž£c³·™œk^Y±<rÙÁ6Ú7§’§c
‡pÙÉƒÝ2,Èe•²¶†në˜š(i¨lö‘{¶ub}o´eo,l¦‘?ÐÈ‘€¾›ÙJU:¶åç9Ç bÜCe£ÉÆÞŒŽÍ9Bôç^Y½™7fÎ¿$ø,7îüCª®Ûš11¡²ºô†
{¦VÛ˜<‰Íô7ÛZ— o-ÓV€1$´îÅ\4fÿfBk‹©ý±B´‹¾¬cs.Gh|é©9ýS× ÆbïäÙÆ€dÅ·ÄÎ©êöš
]Êè9ä‹ÍbäCx9x-,¿–=¢žmÄ?†ÊgæÙ‚•×û”œýIÇ¶Î¹C'KÙ³°Ú¨7—±ö“Þ»f]HÇöëžaé6¼WÏ6†¯æÉa=,Vã¬æsV~ƒ”<½y¹á»2-—Hˆ*tlÚ
iHSC/»g"Ã:‡1¶ÈÓ±™#£9TµÖŸñúƒOº^køyXýgI”]S
ï–õÙ;ãÙgX9hÐ==Ûð‹B1¦´ÓªÆ´" Xç×¤Ä~[ç‚Ð–Y7öì=ªÐ±­XG|öXÙƒslB×ˆm‹y:6meÅ¤iÇ”Õæz´=ë9”g¬9
9ÁÊöEe±r>M}W’oÞŸtìÆ^³@ÿÅßÅÎ¹=Þš½èêP=‹ä^ŠáÃ+&†®wó9#\[!„h7}YÇ¶æjÄx¶uðñâõÏ„êCCÏ6Ë=k»nß¡™Ðu
UÍ`lÞU\±iQ‘5ekŸ!ó"åYX~¤¯˜wÆ:û>½ëÆÐŸtl+¾"%7ƒg¹„®áå¡³Ö+æ%äªéØ~Ý3¬óì‰‡òlcÙúÜœsC×HV5þÍ¼mÂw<Û+8s/Ï6†*t
lò…Ê(“7 Ö»B×ˆ=SÁê'ÓÈýìÙÁZ®²í‡¨{Ì±Ög–?4õ(Ï6#Ô¯£Á9gÍâ9¯Ýª§·vZ7ìÕ+öl1Ö[¬×ÔóO-ªÐ±Ù[*ƒ=4žm,VŽºØ\zÖü~·Êy
JoÀÊµQf¬±ÖXŸõlë†±#T·Ô3xû“Žm­?¦œÛî1ñ7×ýÞØ<4©°Vº^l,„í¤/ëØ/ßñà¿‡úc´‡2¹òŠ@<L(F‹ù‹g›Â3×®÷ÇäÞ…º}‡fB×mý˜¸Yâ
8wÊÒ€¿yçë¶½S4ÑÊiNg›‚åÿ±;ÏŽœ!;â‡«ŠéO:6ùZ¿õ,7ïþk•qkìÕÕ“yNž5·zwÞÒ[½kÖ…tl¿îYýC¹‰x§žm
èÕ¡ºv?óÒ™žm”íCòbäªÒâªÐ±CçfñÞ«ŠÏü—P=c÷ïXý$cg[k
ßÈ³-CÝcŽu_ÛŸ{ù<Ï¬8]Ö}<Û,-vÙCSôlë„ý÷¡zÅ®»åo]Užÿ*tìPNArT9!¿J¨žôIž-X:6ïÙö5¬])ù›š!D07áþòªÚ§SÎmÝoªþÜŸtlk
m>ö\£{VB9“j:WÂšïrv«g+„í¦/ëØ^y“™““˜5Ï¾J¬1sÍäçNðlS(;'ªÛwhÆz7_vïþrß†Ÿ„àß,;ü/¦9bzBåVŸb­»,ÿØóì, ?%Ç±GY
*£nM¡¬ŽméËïÍ_v‡g›{HCsÖòìˆÁÕ?—ó¼¼ëÖtl¿î`éË)q›1Xmø÷‹VNòl«dÈ§t]tÜ™úpî®¥WÅŽ-k›~bÈ¾Êõº²:vãl†Àw«#¥`ó,zBÇ
å…'–Ù³+KÝckˆež%ûÃCöøžm Ö¾­Øþª _¸ä„ö¡uˆ?vÎ˜;,d_äÙÆRVÇ¶ôå:úäÐùÄ«{v
ûŸä÷XdíÇ:ŸøÝ¹KÆx¶u0øð»F{zã;?|”úîû‹ŽM\KH_N9*kŽWelMùCB×¢Ÿõl…¢ÝôeÛÓ=ÞœùêÈºc2ˆ…Õ¡ê½:Ö=ÇúôuûÍä½›*@Oà
\¾²c=yhBå—-·Ë¯Ê‹ë²âòÀ‹ãN¡¿èØ–ŽÅ^;Ï6+—}^žDÖ4¬÷Í\õ¹ïþ·vçYì»ªöcaµ«ÛÊáÊz«g›‚9T˜OkèQ§4Î+å|YöÐ2–þ~áÊ™²Þh½§
±c‹¥ƒÇ~Û1”Õ±­ØÐÝ/¼r‘g›Š•!&î»Gtìà^„8Í u9ŒÏ¡òcÛ¥5¶VKœaû@<¹gËùGŸÚÐÄÈÁõU¿°èò­z˜='{7îÜº¾EìøA
ÙÇîAŒ¡¬Žm­a®Ÿ2ãçžm*ÖúVL<éØÿŠu^/kr)~¿µrbMqkŸ
õç_ÑõÒíaý÷ç_üÁ‚øVö®ßña¨/¶H}÷ýEÇ¾wøÕÁþ´Ž1Ô:§Ê¸ïÖâC×*“OG!ê¢/ëØwV=»ÀÏùÛ1~^Q¬ýGo¼ôêeœ=X%¡ë ™yu„º}‡fòÞ
KY÷«8ß‡sÓ‚{»ßü›÷R±â!8çÃª_^nì"{-ú‹ŽÍÜ7dÿþ«ËïñÞ_*VNOtH«~ì+î1l‚\EÄ¥ž3_éØ¾=Xsò{m%kÍ4vAZÎ`^ïåpJ%vl±ò{
ûUR(«c“K4dÿÉ’µÓ¼÷–Š¥W¡Wzõl·ŽŽº^ñ¨­Ô=æ Ï„Ês¬3ÐÇ½6‚•7¿L^#|æ'GÈ:VÞÙ$Eˆ?Ø{`‡1ö±”Õ±­ÜØ´ï½¥bõ“y~E†tìÅŠM…
{~}¥kŸa­o’k&E·à;`KnÖ«StjÔwß_tlÎ¤	Ùÿáõ
³¼o4k¬¯ËÇµŸXH!ÚI_×±ÑùbÇtüá=ËºâpÛg]Ø˜¿{×ˆ!´§¶ÄjuûÍxu.ïÎ»v,Ö~Ðv’7W²t—Ø}¤±ôÛÊÛÑN¼ùfC3ˆ(ö÷Ÿ½·`ù}«
vìä+Æ
Ïƒ÷R‘ŽíÛƒ5i±c@3þtPc/‘µæR1c{_,{ÎAòìc)«c[9ÚIÌÜ¶Ý:¶õíÆöËe¨{Ì±ÎÅŠ½7+wA»(¢c<éì®3æ^°oã›û¼ò‹3~°÷À²'Ÿ¾gKYÛÊ
=ÓNbÎ•Žým¬xÿ·g/¹Þ³Í wH¨Œ²k°ì'&Þ:uT ©ï¾¿èØV>ñvRG,?„öŠÖ‘/E!ÊÒ×ul
O°7XpK¦mFÎ4ïz!ˆßõ®U'±FÝ¾C3^‹òî+Ko«"ÆòâÛEÞ\ÉÔ×Öm{Ç»·ú‹ŽÍ·î½ºñtlrÉ”ÑDÑ¶É±|ÒS?a®_ö[‘ŽíÛƒG_7±c
ß…>×Žq+fl±Î}€˜øãXÊêØ°Æú»WÏNÑ±ÙæÙ–¥“Çœ¼¼`í"EÇ&®ƒsµÛÑ—ÅŒyþY•gç•Õ±?]ºñ%ï~ë&¦Ÿ”ŽýmÈz&Œ1gt’§yä·ì÷ÿçëYà³Ñ&C
¹Ð«&õÝ÷ÛÚ?ÛNêÒ±CgÝ§ŒBÑ.úƒŽÍ˜oå9Kßƒuxry×mÆ+·nb5Œº}‡˜gòÞ+¯ålä<¼÷™ê{Yëç=ÛºÉ›+YûU«ö9ú‹ŽÍsóÞGÝÄÌmˆCûbÍÖ^YQ¬
ßþ>šeÌuCHÇöíÁ}5;°VkåÁJ1ö8ºtÝrs²‡:ô»˜±Å:».=ñ,÷žb)«c{yÌÚA'êØ£N;/øþª§óèä1Ç;Ã¥Äú
èqe×yÙI¿À5ÉµÃ^¡f1ã:Žu­1–²:v'øÒ±‹Á^
K/žw÷¤ÿðìçßýð¡!Ûß½üÚhÏ6¹|ÞŸ¿ì.ï}{¯žœF¬±×`”úîû‹Žm×ÑNêÒ±CýùÝ=;!„h7ýAÇÎ žÍÆby{ö¢QøöÞu‰añÊª›X
£nß¡«®±Ú(yÍóîyî}ß+Ãã±+ÇðžmÝäÍ•¬\¸{–oœïÝ[
ýEÇ¶æÔí$VOf>Ã£ªØ8öˆÏ+ðÍHÇöí­³sÚIÌ@›Ú?[ê•œÅÞrÖ‡‹óÝ®4´qd¨lk~3¶Xg*Aì÷CYûã×ÖLõž[Ýt¢Žm1˜ª‘¡“ÇÖ`¼÷Y71:
6šðç«·t{eÁÞuÛßÍú…7ßsÐ½^ÕØO1äˆp¿@ŽèP91ãgäZõðlSŽ]ÿwÚÉXq31¹,}˜½žm+Ì%cÇtjônòŽS~ÿE_ÏœÅ*ÛÊóŸúîû‹ŽÝ
kÖíÔ±™yvBÑnú“Ž ì—Æ·&$6ovìï¿fÐùîu-û)×Þ6X³º!Ê«#Ôí;Ä<“XmÔóéx¿ese[ç³|¹iççÞ3¯
bo­úY¾gÌÜ4…þ¢c[gØ-™øÄ½÷TôQ^=›qìé_µƒŠÖèÈ¿r.€tlß}Øª{'ÞÚ
ýy(Ï+«•2:6gjYuê$ÛúÖO™ñsïýTg{õl·ŽÍ™Ã¡ëí|aÞpÏ¶,<æäõi¬Ýxïº
Ð˜½zzùrˆ±^õÈ3?‹)«•2:öC—Þ`êØeóe5S—Ž½tâÔÃ½÷S1ý‚tì0¬ ZíŒ³ -;ëœHâ ½k†Ø4õÅÓ¬z qã¼«ÛÎ½Ø-ë[eKÇnPVÇæyßbU°WÀ«gB{çªžS
!Dô7»Î°zéö	‡¼5káU–~Z¶·‡Ñ²‰j'uûÍXÏ$Eåœ“ýcîv«,üº›Îî–caí[åLxÏ¶¬bÆÉ¡úñL<Ûú‹ŽmÍ7§¾«’úÕ óò^¸hÕÃûºwí
ÝKœ‘î]+C:¶oVÝcâäÚm'¯M°¾Qô|(£c3g³êUD;³¨KÇF¯òlÛI»ulëÛ­ëzÍtò˜“×§U™ß¹y1ÏÀž0Öé¼r,ÊèØyyEª\ßªKÇž5öþC<Ûv"ÛÆÊ©³múÜ
¡–ÇM®ïz­0Îåí½#cÌþ`éØ_«c¿ÿêò{Böäzôl;ó(„è-ôg»•Á‡ŸØÅÞhò/“û/k·½§Bà¯ä•M[Èî‘Ën,/\5uûÍXÏ2UÅ¿ûrÓ®¿˜ïgí®
ˆóÊ
aÅS@L|KÝ"T7ž‡g›BÑ±?Y²nzÈþõŸ<Â³íDø6žºnì¬w|´xÕä”sÆ]p™[>HÇöíÁê£:ehŒyÆóe?‚gïQFÇÎ;çÛ³¥¬Žmõ“;gÌæÙ¶“vëØŒ•¡ë
½7ÙžmY:yÌaïMÈ8ƒ×³oyy`çŒ{à{ž½G›1Êª[QŸ/DYûÃ+&†ìÉ½âÙ¶éØ6Öyäc­ãðwüÛ·~¿y÷_½¸§[¦Íú•ÕÖSâ,z‹Ž]Õ7SVÇ~cæüKBö
ü½gÛéÐF[ï‹½ÏžB´éØù\rÂ™
ÿ…³ªBcVzFžßL¾âÝâñýÐ«C;é:6pc^¬ÂWlZTdþ¦Uf•úIQ¦^{ûVýˆU÷ìc©[ÇŽ™³ÆPFS€·f/º:d_—¾ÓnÐMÆ½´‹yù­¶œÁå•u¿ÓŒÞ®c
[1yïüŸžmÝÐ.Bs—F;¨Hk,£cçõÃO\}Ë@Ï>–²:öºÇŸ;)dèÙ¶“vëØºÞ§K×¿àÙ•¥“ul`?_È¾ö
±ÿÂò«v=?„gC{ä)¿2û…"ù‡-ÊêØ»_xå¢2öíB:¶¥K[mõù1÷úí/½z™w­ÖÙ-ô¡UäÐé-:vj9eulÎF¿/y¶Œ•¯Ó|!„
éØñpNgö†úxà¬+ËÖÒÇØ›ä]·ôVˆ ²Êüj^ù`/´Ç
f}ð»žmÝ³eÝ/z¥gKÝ:öËw<øïžme5…×îâ°=y‡<ÛÞ1’øâÖ9{7ïþ{ÌžéØ¾=XßÐ;s^»Á³­›¼¼±qùetl°ö,y`Je9;ÊêØh!{ôÔ¼÷uÒ#:
v@‡!§gW–N×±­xçªtâ2ä¯Ê™qž}etlÆ'küšyÛÓO¥¬ŽÍZeÈžù„gÛN¤cç³múœ!¡çóñâõÏ´þ–¿ý¶Hîjr…Êòþxö1ô;µ>eulÎ5
Ùïí~óo)çËtÖÚ`_ˆ3Bô=¤c§ïnÅ§äõó–K\™Ü‚Ucùk&?w‚g›Jè:ª6cùáy¹ì,¬yV'¬OcnÝ+š¬gKÝ:6zªgCYM¸~ëyV5oï4¬ùÄÄ´Yï´
Jz»ŽÍÞ›PÖ¾ävbÍÉÐˆªš“•Õ±­=MU®”Õ±9K3dô-ž}»è
›¸ÁÖëñýTÕ¾,:]Ç&ŸjÈ~ß†Yw¯úðPÝªÌ[VFÇ†/ÖìømÈÞËõ—BY;/ÿIÞ9íF:v>œea½Çæs.?åœàïŠž•‡f]·ª<ð¦c[åæÙÆPVÇþÍñg˜ï¤S
rÅÁ:;wùCSòl…¢ÝHÇNÇŠŸáLwË&o~[EŽÁª°|ÎòñlS±žGª6Úó>ò!Xe)áøÉÁy*Ï¥'žåÚ×
ço„ê·gÙ†9žm,uëØÛŸ{ù<Ï6†²šz"ñ¡2ÈOèÙ÷FÈ‡º_xìÊ1®?n½ÓÔ¶áÑÛulÎôµêÏyÃž}ØqÄ;ÿàÙÆRVÇ&>5\ÇêbËêØ`íÿ~÷•¥·y¶í¢'tlkOZ•ç
t†èt;ï¬ÂÇ¯SYÎœ"XñŸ¯Ú¼Ö³¥¬Žýî¼¥·†ìÉ×âÙÆRVÇf­ÆÊI±cÆÜ<ûv!ÛÇZOå’ì7k›~bè7óîžô^ù!¸ôz³ðlcé4›9A¨œ”±8²:6Xkh
ïÏ_v—gÛ©pièžž¹~Üž­B´éØélšúâiEÆWkÌcomÌþývÀyT¡:Ö1¿
]Êê_Ä(¶²{¥U>úó”knžæå`|ãÅù{öucÿÂ}âÙÇP•Žm•SUN¹²š°*ƒ¼UžÕIìÛ°û¡{ŽÑzÈŸ²%W°g›Bo×±ÁÊ…»Ø^w\j/Ü2á`«Í{¶
±”Õ±-­ªŠu®BÇ¶æßôÇÄóyöí 'tlÎç ]³îo·ÓuìFnzCãÜ³¬{aOÆdÛù0ªÓˆËêØ–ÆUÅ:—Õ±áw/¿6:ø,»ßü±ž};Žíc•¬ùò-7¾ç ;>jýwÆÒ"gô
ñ½V¯jîØi:¶•šgëÙÆP…ŽmiŒõrNo*Özs‘|8BQ7}YÇ}æð®:æ
ÝOÏ<#ÔÏÿ·oµtâÔÃCvPÅyÓÄ˜ÆúO–ïÀ|Ê³MÅz©Úhæ–6äs38ÞÏà¬æP9ø+ÄJxöEvô
÷7y9,7wÉMž½g¬ñþ«xW«{öøP9ÌåÊæV`þðæÌE—‡ÊO™o’oÐzžuÆYÐWåcÏ¿Óë•Sö‰‡î7¦mï|aÞðð³²÷§¡/èØË'=õëˆáòì‹Â·•7ßÍ›'Wµo™
¾(T~¬ŽÍ¹µVN¯O–¬›îÙÇ@žþPù):v^®ñ=Ë6Ì«s½‚<ªÞo 'tlK7¨c¯W3®cÃæ§gŸeµ™Åÿ‘g_ÎqÌë¬uÎN(;^gXy„culöÄYÏ®
ÿ–=4õÈ²ï8/î-¿Ž¹ Pnì™ßuêØ#Žÿeã|i‹õO>jUûjê$ï¼G|G+/C™<7yçàTµ6j­¿¦¾ûªtl«ïb‹<{+f>EÇf/‘UGÊ©s¬?ï'?wSÎ
ÝOÞÜD!zŠ¾¬cãc~´xÕäKN8Óým V^‘•<ýÓ<;|Ië¬*ôÐ7ßswíT˜S“wÚû-X1oÌ[bçÈ±Xãª6jqëàKÐ=þn]‡uýØ8˜G/·µMôòkO?ß-#•§®{
e{¿Ã÷·Î¥]Ýóë+ÝkY<pñuÁØ’¢ïÊÊÃsï|èûž½Å?ÜEL·UvÊ|“yŸåËó-¯ŒT.:îÌ.Î!Í›»7ÞóþöÌZS•ó½¼¼"Ì=={ëlL´ñª´è:6÷Ðî1€µ?­Ü¼
:o
$/çI™ïÐÊ¬õ%ˆÕ±Á{¡LNJ¾ù%Ÿø±5^¤èØðÑ’5O[õ|sæ«#«Ö¬ð-Þž½hT¬VÐ:¶•OÿÄ³-CoÐ±Ñe¬5Ú$þ‡WF*älþbÍÖy:XÞy){ÚB ÃkÇ*?VÇ
kÆ7Òµ·@‡bu–dÊ;ò#[õŒývSÀggí=ÖO«SÇ¶Ö3Þ{åõ±^‚uÞã‡VL´ö§•‰AÀ³žÛªGžù™gŸ>ÚÖggŸcµñÔw_•Ž·ÌºŸgoF[³ÊNÑ±áƒ
+&Xe1&W=Ö£'ãC¤>Ï,ûÏ«¶lôl…¢'èë:6}0±žø¢±1Éy°þjÍ7Æ½Ôµg®lyøÄëU1î<éìF>Ñ¬®±:vžïÐœÿ­
¬ëÄúÜ1L»ás/: ï ³xåÀÇ¯­žb•óå¦ŸO9º’¹æ½^õÍµbu²¼X´ðTš|îoÏ^r}Þ³+ò®ò´HòÊ¦®•ðMóÍ_ŸWÏÔùf^L6àGV¡Ñ¢?’ÕßÓ±³ëÿyõ–­
UiäÿÝ#¹.<[ÈÓ:ŠæƒÑtl°bûÏ¼†1 ›Ÿæõ´-ú°à=®ÛöNl<_+¬Åí]·ý]ë~!EÇÎû.Yo+r^±n¡3›IÕ±G-]
˜GWßDÿ‡O‘½»Ø¹mOèØ`­‰Æ®'¡7èØ`íó´ìWîzäP¯Œ²±=kŸy:vã¼cmm£ˆOMßöü-÷œ·_RtìçÇÜ{UùüŠ´/ü0+rÑw<~ø(Ûÿ¡¼Y¯*òL[¡
Æ™,n8ÖO«SÇþïœ5`_¡WF§`÷ˆ?šV±Ÿ•ü“¡kÒ÷§úÍøŸ¯ÞÒ÷^Rß}U:6ý„µOù†3†¹e4Ã¾úP¯ßIÕ±éO-M
Ð¹‹úO­õç;ÎêŸú<c°Îõ}ã¥W/ól…¢'è:vã=y ˆ}ôlC\vò`3N3öÜâ;Ø[œ7ŽC^$ã>~2kÀ­ãj¬Ž
äyÕ‹yOlRæ?žcÝ¬Ï‹•—3ƒ¿˜ý_äš¶öfÏgëssÎqìénY­ð¼ž»ñîûtéºÍeÆêdÌ[òâ¦ñûØŸìÍ‘î<ÿŠFìdž_Vö]‘À*ï+6-BóÊ@bžfio­
¤Î7!/†öóë¼d´[N4EÚJkln¬ŽÁ<›vS4Gâ‹·ŽÿŽ¥·-ÿØ={ MYZí.6Gé¯;>÷ßûŠŽ;Ä>·fþ9,¹¾õöÖ²ÐP¬ú°×!æ»Ìà»ð4 Œ›ûcži•
Å¼76¦1–XE¯~ªcû6rË]»í­'GXdoëéìÅoíÿbç¶=¥c[ç#T¹ÞÕJoÑ±éGY;Ìk3¬É#@cûÖþÞ+ÏÊ_ ¬·Çjh|»“¯3
/&¹™›û³t>À7ŠG¿¦ÿõê©ï8S%¯LtEÎ÷ôüç¼KtÇV¿"ÖO«KÇÎÓ$6á•ÑixkŸÍ zåyX¹˜xœkÅï
½ë‚Ës÷•y÷UéØðÆÌù—Xõb}=&5s«Yã&~—ñÖ»WHÕ±Á›c£3íÆ;,2Ö³Ÿ_bïÆ{Ê>Oö„êÏ>mÏV!z‚þ¤cgàÇã§²6Ë|Ð+‡ØªÆœÑØÄ‰yåd4ôPg
M>Y²vuD°|Zò'ãó’c2/î-EÇ¶Î Ìž{ÐÐ šãQŸyNsÆ=ð=öŠ¢_yyU­kÄúÜ±ðì¼ØâØÜuÄwçÅÙúk	è‹VNêÄºqIüÖj[):~R^½
ž¹,~g8y*º×úzö­yWS¯½ý€Ü:îo;´1æ´}Ú8û²öÅ¯nÍ™o§ÏüÀ+›5,âáù&¬õ!GœÒÈÑÂ:¿·ÊJÕ±3˜#{K_ÀµòîÍ=áÃE«¶ÊcŽ
¢çíGã&æ›wÙ\&Ï ­–6øÞ‚å÷ym½¯èØ: OXcÀ…?Ô…ÊºHÞ7ìéØ´ß¼ºð]¢ÁÐvè×šëÃÿÓ¾Ù[—“'DŠŽ
èô^Ì\”8eôtÆ%Öù“ïƒ}E±ZZF›ömåþmæÏk·¾I|ÿE£Ì\Å¬ñ ¯«¿gÙ†9VY±sÛžÒ±çÝùÐ÷«z¾±ô8³#ÏÏÌ ÚLžM›g?ýÂ¾
;>±Êòtl¾÷¼ºàSp
trbDZûþÿ™vîÝW3):6<qõ-fÎ²âx_|kY¿@¿ˆ¯Á·“ÚwyÇøÍ¬×{eïŽ_q÷°+L¿bðá'vq/øäç±ÊŠõÓêÒ±çóî•¶ì•Ñiäåon†ï£Š½{ÌUóÆ=ü,æ
øøËÍš)íœq“q&¯„H}÷UêØyyÁ¿¾çà“0/£áÑçàË0·bm>/ö(D›>>Ù+›9:ßª7ÖóÍW5ÖÇ’·÷¦È>7!„hýQÇneßÆŸáß2æ¡‘3€XL4þÍ³G÷õê
Ò
{¢btŒoê¸y÷_Ñ(ðA€yøþùÎ—ž]FŠŽ—«±~gÕ£StlÀgØ³bã‚¼{!¾×+òbXC|¹i×Ÿ‰ÈÞs¥¼¼ÝÍ¤êd´]¯ÌT¸W+Ö»È»ú*¦2MGŠ¥5f!£È|hÃÞ¾Ë¹þ
þ÷ŠfÀýeï;¦É(ªc·B\ûéÇvÎ˜;Œ?ß»dõñÚÿNnyïÙ4ãi ­å[ëÞ»°Ê¬J“²¨ZÇ†›ÎnæòQvðtl¨£ÿÈ°Æ”Tòr0”Áê×‹ê¬ÄØ¦ÄíñŒè?Xëú¦
ÿÈÑ [‰Ûö”ŽMìnèsß±ù½RéM:6+£eg4ú€õÛßÿÆ¿Øßv¼<[Íx:6pf¯WNQ¬o.UÇoUQ¾Ø²ëÿ†þ¾è;&7xÌyFY¿"ÖO«KÇ¶ÎÐ
ÆÀ*tÞvÃœ"/Æ<ƒ\Ú^Y±äÅd—ÅŸSß}•:6xùhŠbù^EtlHë¿žWÕ>ÖÇb]Ô÷J!úÒ±Ëö]dÿ\ý‹sçìx×¨‚X3öÊôè$˜C[ç!~ñK^9@ÌCÊ\
±(©:Y#ðµ5S½rcÁO'¦Ñú–Š¾+4µÔ˜ê<˜ç¡'T­) sÎ˜¸Ê*¨JÇ. Ï‘ø;ï™„` Ð+ß#¯ü¾¦cC;Ç€›¹˜·Þ—
mŠœFoÍ^tuèß‹èØôs–>Yò XçWÕ±³gš·_¡Jbç¶=¥cƒÕ—Ö•[¤·éØ@b^ž°*‰Ñ±Éã•«ìÿD®•·¤ˆŽZuÿÅÞÍ5“Ÿ=.ôoeÞ1ë6±ùKÊë§Õ¥cçÏ[
õ¹;í$oïjFÌ÷ã^Þ³,óögVõî«Ö±9‡¼Ê¾ûeˆO_TÇÞÏï^~m´W‡*(ú<-¬vÅžÏV!zŠ¾¬c3wöb‹‚Çœ·¨†ßÝ|W°7‰}ì^]šá¾ÊêR¦cÃ
è3‡çÆ:Ñ^bÎëò‚¤¬¿§‚FF­WVð¥°óÊ÷ ï>$eV­cziß'gèds…:4@CfOf•Ú{+ì#ÎË‹Ï7›s¸ÄÉËŸÑhw%õº¼òû¢Ž èuä·Î¾eÖûRbó
Æˆýû”kÍo‹èØ€>\…”Íki¿ÖÜ¶ŒŽAN”8ÛTØ³ÌúªWèI{ÖØû
]´¬?¢7êØ€v\·&’’ßš³«Zs£?ºâçƒåV©cëÎ”ïÕÁƒ¾1Ÿ6‰ŸúMÙwLÙ´Ÿ:ý
öfÅž¡X•–ÙqËÖýñŒGÿK·ŒNåêACsc8Æ+#ü…*Ú7àó»à²F¹è¢¡ß¤¾ûªul`NVÅØIn#ò«P&ýè7etìŒ—nŸpHj>“$Öo?6æ*†¼œ5EÎÈBˆvÑ—ul
_ë‰UÆ’°_ Ó»v ÄÊ5òþFæóð`N‹ßÀYÊÞµó@«/êcw¢Ž è§yšù^Rò¡ ¥zÏ#ÊbnsþÑùÏÏƒ¼º1û[á[iõ‘êÐ±<qEc-ØÈ=6kui
äÞCs,úM´ÂÞ`Êã|MïÚäÎ#ÿCU~2órñÅœuêÁ» ¾ªh?–Wv_Õ±3ÈïÈ¹ƒ•éÙk·½…>[d`}Õ;S
¾Mòž7çè¬ZÇÊç¤¢Ï= ù<Í:ul8÷È“»8Ë¢ªo—rÈ‰Êž™ ¸'ulžµ~{Žt ½UÇÎ`l`M¹ho]“<ö)ç¶f ­Çäµ
/ë9ÍmµjÐNwÌ˜{AÑgÆónŽ£­KÇÎ`žÂ-Uíñ#—>B¦ÙÅR‡ŽÍ7mÕ“9gßéä[^×ùxøj´¯˜íãkŸ¯9Gs'ëØpíéç'åøk½_Ö¤šï·NçðM*ë÷÷
¬krÞ@ÊXÃæ§gŸº&1pž­Bô$}]Çn†¸0Ænò^§Æ+‰ïŸ×œ çq0/â,é”:2Æq_ìkž—WçìqïyçHf«‘º3~{çÄ1WÁy=^Êòòþ»u}
§]ª¯À^à"gˆ‘sîÐd9'É»N øR¬ExuÂÏcNÁ9h¡û®KÇâKíËÈmÝ
:;ßñ˜­eq†dè}Ææ>…ù<{¢yo)sO¾iÖ)ðéÑ£‹œ_ž‘×È|=užXVr½×‘›¤qölÄ;eÎM]è»òÊä™[ßkl¼YQ¬vÅš¦g› }
ßlê8•Ì×brˆÄÀÙ‚ôçÞµmjóîp}b‘B}?÷z†<[¯Œíè¹1ë'ü†³nCšK¨Ž¦¼ø¯)ðÍÍ¸ùžƒØ7“’ç–ºãž«WtíÉjÏ¼#Ï¶
¬½^.X1Ñ³M…wWgŸÑ®1‡>•2Y{‰içûºwí%îÛ"kZ!½ü¦ygµ¶Yžç^‡Ú+g ‡ž_kød±ñ!{çä-¹žq¹µ|Òv¼c|¡†_±¿â½yun®;~š#±Eý
ÖB÷Éß{¶y9ÉïÙw:^yÓ€Ð3Ã7ðæ@e¡}ãƒzíXÓá›ežòg}ð»U¼{kœ§|ÏÖƒþƒõqÖè½ûm°~ûûø•ÌƒZË¢ÿÕsÛô¹C½z¤ÀXOßGß’2Öó¾ÈÍzým
Ñ±Þƒ¶`iíUøfBQ'ýIÇnÿ‚¹>ç“„¸5@_âOþŽñž¹.g‚{åÕ¾(ósâ}Ñ³zâ+à_Pæ&©škQˆG}àâëº¦Ýxç\Œ:3TµÛ›Áwá™ðœhKèÛ¼7þäÿÑ
zÐŒY·ðÊª Ö#˜ã ŸÐžøsÊ5·$îÈ›÷Ô©cgP¾7öO s÷…_IÂÖggŸÃÚC•¹«‚oý¥¼O¾	tÄì;ežË3Âe}©._ˆßGwdÜ\
ß=íŽ3ÜéS¼÷]%ìY¤ÏàÐ§Òîˆ÷g¯(qhž}†öÂ8õÍ°ÿ=öÄ@ßNŸ…N‚^ÌwÉŸÄüÑÆYOzÔ)n9u3äˆSºh[¬‹qæ[¦'POÆOú;~ã•ÓnWy†sÆ=ð=žgöŽYwg
ÞÎ7CÎŸºu‘vaíÇgî^ÕL_†~ñ„¶NûhîèçiGü}¯WVÐÖéƒŸÑi²~áç_LÿÄZK]çw¦ÀØH?I|gÚPOô?úÆJt¢¶×Óðþ2¿‚¾ 'üŠ²ßúÖYólE
øöøvÄdí›ï‘1öÍ¸Ço¼rzãÎÙÈJß2÷Ìº0ÿOŸˆÆ_§OTÆzú›¼±žµ´:âKBXg‚|±fÇoÛ9OBˆ"ôW[O;tl!„ýrè„Æb‡=[!DçÃ*+·Ë·L
8Ø³BÔqêä€}Ÿsãð…¢'Ž-„ðŽ-„¢*È)S€|ßž½¢³™rímCß÷¾;ÿÐWö–Ñ[!Üú>Û.„eŽ-„ðŽ-„¢JÞ›¿ìŽÐ¸Ây¸'\ÏÎæ
}ßäÁñl…õñ›ãÏè²Î«'ç‰g/„€tl!„‡tl!„UÂ¹ÙÖ|í:sRQ_¬Ùº»õ»æ{þ³Ó\[!D}ü~ÑÊI¡q—³%•[Ñ[Ž-„ðŽ-„¢j6?=û¬ÐØ²wóî¿s~
©g/„è<ˆ÷}×œÅçÙ !êƒxëÐ·
Êé%„èMHÇBxHÇBQ5œ·oÃŽ¬Ø°Ó~pŒ[†¢³xþ–û}Óã.¸ÌµBÔ{ ömÞý×Ð·ùÞ+¯õì…¢“Ž-„ðŽ-„¢ºô†V|Ø–gfíÙ!:‹Ïø§•ÝË
=;!D=p¶êž„ÆÙ}vÿñücNuËBˆNB:¶ÂC:¶BˆºØõüü––­s§„è]ìÛ¸ó­ßñôÑwèÙ
!ª‡s“ßž½äzkŒ}rÔØ^BÑiHÇBxHÇBQçüø„®½ë¶½gÈ•=aÄ5nBˆžçú³~ý­ÜØèÚÊ$DÏ°úÑiÇZö›3_éÙ!D'"[á![!DŒ|‘™»óË
M;?¿áŒanBˆžeñøÇ~Øúý¢£yvBˆêyñÖñß±4lÎ 8ë°ãÜ2„¢‘Ž-„ðŽ-„¢n¦ÝxçÖœ›žÒ²…èlÖL~ö¸­z¸™aÇrí„ÕÂy«_tïþßðÚð®¿pî£W†
Bt*Ò±…Ò±…B´ƒO¾ð‹<-{Ôiç¹e!„ý•7ßs¥aó÷s­[†Bt2Ò±…ƒ?±kØÑƒ¾Å?:ÖµB!báLªÐx£qG!„ðrÄ)æ:ô¨S\{!„èt¤c!
„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B
!„èd¤c!„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B!„èd¤c!„B!„B!„èdÐ±<à€®|¨B!„B!„
BÑq0 ëÿ>Wxendstream endobj 236 0 obj <</XObject 237 0 R>> endobj 237 0 obj <</Im0 234 0 R>> endobj 238 0
obj <</BBox [116.16 549.84 291.12 538.32]/Filter /FlateDecode/Group 17 0 R/Length 47/Matrix [1 0 0 1 0
0]/Resources 236 0 R/Subtype /Form/Type /XObject>> stream xœ347Ñ³4S0 BCC=S# i¦gh¦`jl¡gl¤œË«ï™k à’Ï
¬1ƒendstream endobj 239 0 obj <</BM /Compatible>> endobj 240 0 obj <</G10 239 0 R>> endobj 241 0 obj <</Fm11
238 0 R>> endobj 242 0 obj <</BBox [116.25 549.75 291.007 538.364]/Filter /FlateDecode/Group 17 0 R/Length
100/Resources 233 0 R/Subtype /Form/Type /XObject>> stream xœ+ä244Ó32U05¶Ð363QÈå…
˜Xê™›*äðYê˜c€jÉáE3#‡7ƒ7\‹7×@ ¼yõÝ

Ò‹yõÝr

\òy¹ô“s2\óR|¸ ?îeendstream endobj 244 0 obj <</BM /Compatible>> endobj 245 0 obj <</BM /Normal>> endobj
246 0 obj <</BM /Compatible>> endobj 247 0 obj <</BM /Normal>> endobj 249 0 obj <</ExtGState 256 0 R/XObject
257 0 R>> endobj 250 0 obj <</BitsPerComponent 8/ColorSpace /DeviceCMYK/Filter /FlateDecode/Height 296/Length
2512/Subtype /Image/Type /XObject/Width 1458>> stream x^íØ» AÁ}{œÃÂ#òÏO-Q-•&‡™™õ¸œ     sì½öÇëþ
€œÛqõc    åÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l
ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6
e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™
€2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ
 Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc
PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±
(óc    PæÇ     Ì @™    €2?6     eß{f~
5{fI’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$
I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’$I’ôÍÌ
z\N     È9ö^ûãu    @Îí¸ú±    Èòc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ
 Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc
PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±
(óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ
”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l
ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6     e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €2?6
e~l     ÊüØ     ”ù±    (óc    PæÇ     Ì @™    €²ï=3¿    €š=³Þ)Ë<ƒendstream endobj 252 0 obj <</XObject
253 0 R>> endobj 253 0 obj <</Im0 250 0 R>> endobj 254 0 obj <</BBox [116.88 490.68 291.84 455.16]/Filter
/FlateDecode/Group 17 0 R/Length 48/Matrix [1 0 0 1 0 0]/Resources 252 0 R/Subtype /Form/Type /XObject>> stream
xœ347Ñ³4S0 BcS=S#CC3=SS=C3…ä\^}Ï\—|^ ­š’endstream endobj 255 0 obj <</BM /Compatible>> endobj 256 0 obj
<</G12 255 0 R>> endobj 257 0 obj <</Fm13 254 0 R>> endobj 258 0 obj <</BBox [116.992 490.63 291.749
455.244]/Filter /FlateDecode/Group 17 0 R/Length 123/Resources 249 0 R/Subtype /Form/Type /XObject>> stream
xœ+ä244Ó³´4R015Õ321QÈå…‹˜™é™+äðYê™›Xb€êÉáE7%‡7!fn©gdŠl°¥š9-9èf€Œ ×âÍã5P
ACo^}wC#…ôb^}·\Cc—|Þ@.ýäœÌ×¼ß . õ….aendstream endobj 260 0 obj <</BM /Compatible>> endobj 261 0 obj <</BM
/Normal>> endobj 262 0 obj <</BM /Compatible>> endobj 263 0 obj <</BM /Normal>> endobj 264 0 obj <</BM
/Compatible>> endobj 265 0 obj <</BM /Normal>> endobj 266 0 obj <</BM /Compatible>> endobj 267 0 obj <</BM
/Normal>> endobj 269 0 obj <</ExtGState 276 0 R/XObject 277 0 R>> endobj 270 0 obj <</BitsPerComponent
8/ColorSpace /DeviceCMYK/Filter /FlateDecode/Height 96/Length 7210/Subtype /Image/Type /XObject/Width 1458>>
stream x^íÝùwe¾Çñ¸Íâ0Ž×ÁA@DpA¶€¬²‚d1È*" «Àˆ@Ø·°&!„EBD¹
*L†agÎñÌ™3çžûß\>x#MO=ý­êtwŠÊû‡×Ñúyê©êªüð©o¾ONNNìáæ       :ÍrrbÍš5‹u|´        ¡s'Ë&Ç       „96
ÌÈ±       aFŽ 3rl       @˜‘c       ÂŒ       fäØ       €0#Ç       „96        ÌÈ±       aFŽ 3rl
@˜‘c       ÂŒ       fäØ       €0#Ç       „96        ÌÈ±¦ëäêm¹÷”}f{ 6Ï
ÑFŽ][<ë×¦‹'klÔä>ÕÉó:t}¬­9éqåÀÑ}7ŽŸþß0ûxØXó<ðŸºÿ±½çóÕóÉçÌ±      aCŽ]Ûu¹ò:klÔ\9p¢ŒÜ²q‘cG×Ñ•ë_òºž_oÜ5Ò
6äØÙEŽ}9vã#ÇŽ.rl     %äØÙEŽ}9vã#ÇŽ.rl     %äØÙEŽ}9vã#ÇŽ.rl     %äØÙEŽ}9v4ì™½ôqîéð!Ç
QBŽ]äØw‘cG9v8‘c    €(!ÇÎ.rì»È±£;œÈ±    @”cg9ö]äØÑ@ŽNäØ      JÈ±³‹û.rìh Ç'rl
%äØ­b]kÛ­lå˜üæ;g.ü}ÑÜe-.ù¼ýÞ9KŸX?ùÃGôó¼®}b/>ÖÆœË†[ç;ªs¯Ø‚áãrÖ¾7ó!å:×Šåõßúó^4bBÎè.¹i9o/äØÁôkÓ%öÑà¼ØÆ÷
çüJßÑÁE«ž)ž»âÉÓ¶Ð÷øáÀ¼XîSÌyÒ-9vß6cº_õüV._÷âWë‡œÙ°gÄ‰5[zëYÞ4uî¯ßë1èÎ½oÍäØ
JšjŽÝ£e‡˜²­ïw—Î»YuæŸ®.ž>wåÀÑ}ÊÆ>}{r³WžxÆ<ŽòoåiõÎm+šèš?þs~lý`Þo­ã×ç{Ê</îŸ~­üÄë<ÿã¼ÕüërqåÆÒ…~zh‡WÍsv9¹zK¯øõß
:zú†×ñ~Ø[¶Ø:÷xš7Èqë
jÿ²¹f?¶O›ÿ¨×üéÈã§ô;ñùæ×øÒúž~ù¾*N]ün×9Ê—õÂ:FC5VŽ­{[9¾žIëšÔ««<S÷Íæ¢±³Œ2ç÷rhñš®ûðøªMÝÓùÎ§ÛŸ.(ä}¼Ãû´~
ážÏ'Þ‡WËŽ•{]ƒÛ÷RõL%z£ý+æz
2©©åØÊ†Ê—¬~îVUÍ?¬ÌËRw¬æ§o6ïÉûxÈçñæzÛYÝPV]åŠwÞonÍÔõªšÿQ8øÙàyv]eõ_­ùS¡yS9î˜—_7×ìÇÙ-{ÇxÍ¯Ú`k¬‹j«/W¬³ÎÝkeÇ+•
÷önÕÑ<n*²cëV­±ß÷O.?î;øiÐ{`bÏÁ1½×qÍ©Zpk¿”»Ž£züÄÏ»îÃtßm€¹^
€LjJ9v~î°Øò“g­Ì&ê]àuÌÆÌ±×N˜ñ 5Gª”á«ßŠuÍã‘cÛÔ÷Bõ×Ö9§BßY&²ìlæØÊ÷oT|yÁ:W¿”…«‡ŽuÜx[¦~ü×|zÏ3Ø»9ÖõŽqCïÎ¼Æc
€(k*9öâ‘s’ÕQ6ÔñÏ6½æuÜ¨æØõÔ›ÅºöõÈ±“{ùñv1õT±Î·!ú¶íl®#¨låØº×n?Ãÿ¶Î1^õÍÉ$«•ÖýÖ¯msÝ—®Zsõ”wõ3"Ç
QÖrl«À/ÊOžU¯s;Š§œßñE¾þ_}‰ýdg÷{Ž]WuúfÝ‘S—ÄÏùÖSýéû¹CÍï@È±“ûvë¾qæ¹«ù©¶¤²ðâž²OÎnÚ=Jÿ­Ýd‹¾?k¬Ü¯9¶®¥unz~µ¿£úížµ
øZ—þÿNælü†îcõ¼·ÖQOY²«ÿ´ü¸·â³Î-ž2çI¤ž)®^èê'?¢SçXrl
eQÏ±µïÚÕÒ“Ç]ùŒzo›6ÿÑO»ë'•Y}48/V±lmG×\®[¹“zæÖûrÍÖ>®µÄÎUã§=ìÜ½rì›•ÕµÊK•ñÍ:.æêsûT§;}Xô9å¦É2.åy~2;í¿þº#5
óšïÛmE¬s§y“÷~È±&Í~Øu}õ^AYìŒ~#cÉöÔ½¦zãªç½slý-…rf×µQžïç»œØkpìü®’Ù®µÞ:Z}5ÈõÑõÖ¾‘®ù\½†’qÕyëü­}C×ŒŸñ`üsázn
õ¼ZÏT¢íºšk
È¤¨çØg=äÊ™”K'Ë]”'ªGm|Ý²+ÇN¤<ÈµklPõ9ößK«JJ¬lÝšÊE#&ä(çs­}á›ã÷V¯¹¬¼.¨°çØzpýÐ©¯½æÐÏÇvëoÎ‘¨g«çïÔ0_+?q&~¾
9­_™Ì±ÕŸCuÈ^s×9õƒÞµXs$ÚúÁ¼ßºrñê‚í¬ññ–çå7s»Ž1÷wÌ9ê%ë‰]4wYKk|"í…é5—õw
aõû‡½—ze9ªá´ÆZ†?ÿZìÜ¶¢‰š/Œ9öðNÝc£:÷2?ç×¸W:ûöª†ÚŸˆûgÓ_áyOè=IC¿?½§QöÍŠS5çý–cŸÛ^<ÙóÚ>ù—†ô v­Y×<è¼ªWv¿²v
?ó%ë‰­¿Ÿ°Æ{!Ç
Qå[½f]½žÓ•aÊÇCÆÜ©ñ´>'ÙÌ±3áÐâÏŸuåuÖØDäØ?«øtí^ã/ì,™iõ«GË±“«·ôR¶õÙ 2•cOé=ÄóYQ/Ñ]rÍñÉ¨þrqÅ:¯ù‹ç®xÒOï
.^íºßï)]¬ïN²žØê¢·Öà…
DI”slÕ²º²¥®µ5ÇgÂýžc{®›sýA3RrìŸ¹jŽ-^ÓÁ™Ê±•ã{Í¹ûÃÅ[cýPÏ¯ùÕWÚ›H5×z—ãºûç¯håëê‰míëh!Ç
Qå{fÿ·œ™«ön´ÆgÂýžcË­ªšx­?h.LŽý3Wï¿½j[&rlõ?ñú[ õI¥§½ÕH{eÏêk­úuk|"ý¾qýý‡æÔ¿'ŽqõÄÖçç{7pÏùxäØ
J¢œck_CW¾dÿµtŠBŽ}µôäq¯õ«Ï³569öÏ.–~è5þrqåFkld"ÇÞ”ÿ‘g¾{pÑªg¬±Aœ/Üÿ×q¦¾þ¦9ÖËÞ9KŸp]eæ}Z¿ðËg“õÄNe_ÇDäØ
J¢œcëoý]™Ríþ#[£·Èý˜c÷úS§ØÐ¯ÆÆvëûhp^ìú¡S_{­Î ·Í¹â‘cÿ¬º`û
×=ñéÛ“›Yã[&rlW¾œ×µ96ˆVµõ:Î†)s±ÆºœßñE¾ëz\Üu`®êÀõ÷ ×ÊŽWz}&Õ}‘c
€(‰rŽ-×¨qeJ?úó›{šs¤SØrìOw¹³Oåöió­X^Ðùì¦Ý£~Ø[¶XóÍÊêZ×Z½cßËoŽ½zÜô\×´îXÍOÛg,ø]ºzidB&rìå§¿KœKµËé¾ÚŸÕkÝÊ
·­±.êIâÚ·QT³íê‰Ý}‘c
€(‰zŽ­>®<éN6v¬æßªŸ\õîômÓÙœ¯¡;ÇVÆ¶ö½™}³¹hìŠ//$»6A‘cßËoŽ­ÜÒÕsüå'Ïê^~¯Ç ;}­9³)Ý9vïV=Ÿí{X¹|Ý‹éäÚK²¡½Éuoé
„×Üê}íõóºÊ3u Ù×196
ˆ’¨çØÚ/Nù—+gK¤zÈ¯ÖÙ1}a‹üÜa±tïÙX9¶ú1¨ÖÚÕ7È±ïå7Ç–ò%«Ÿ³®o½ºªÓ7¿ß]:ïà’ÏÛ/ÏËo¦ž/Öü™”î{b¯ÁÎg$[jÖíl­Ó¢÷EÖqê)Û^4
bBƒöuLDŽ ¢$ê9¶¨ÖÚUiÑ8eÛg6ì^0iöÃýÚt1—L¶slÕ_Ÿ.(”êùAŽ}¯
9¶zµ_9p´ØºÆ.·Žž¾vqOÙ'Ê¶§õKwÿdÒc/ykbŽu¾™–®¬WÏžu,)Y°²µ5WPäØ
JšBŽ-Ê ÕCÄÊ“üøqßÁOµÿ^*ý²™c~±wìZù‰3Öù$£ü»îÈ©KÊœ/•¯:¿«d¶«¾û^ArléÓú…XíþªÝÖwâ‡z›«ßùàg3_«îûów§9û…gKº²^½Ÿ¨=P¹+
Ù±Ô×(•ß%rl
%M%ÇõNWN(—‹+7ÍB³•c{®[¬îHÍß¬síI÷íÖ}ã´·ÝªñÓ˜ÑodL}z{ý©“çÜ®ü™û^AslQî©>Øéêÿ¢yŠç®x29i½tçØk'ÌxÐ:¯LKgÖ«û,Ù±–ž
ÔÌš#äØ
JšRŽ]oÞÐq±…û§ß<Vó/+Ï²h¾Å#'úîk›[=%¬ªÓ.š»¬e*½•É±ï•Î»žöUíï˜ì{ôKuôÚOÒ:n*Òc»ê±õ¾el·þ±lx£ý+æ:ýÐûý®IöÝè}“~
/XsEŽ ¢¤)æØõÔ;Z½³O¬ÙÒûï¥U%©öQ>±ç`óx’{Û´ù&Yë¿Õ‹·!ý“É±ï•‰;žrU½søn×9·ÏåŠë»µ|³¹h¬u¬Td1Ç®±Æ†¾7ë{‘¿~qd“jñ­ù‚
Ç
QÒ”sìD/?Þ.6¥÷ØŽé[|µ¾pˆ²m¿û#j/H?½²‘c_-=yÜk~åí†ó];îBŽ}¯LçØ‰TC¿</¿YÅ²µ¿ß]:O{<ºî©D+Þy¿¹5PéÎ±göËó©;Vó“56Lt
ûýý!ÇWmênÍ96
ˆrìäÔßA5ÛÚ‹ÍÊ¤–¼e÷ÉtŽ¬oÙÂÏÚYãýˆJŽ­:gk¬ÙÎ±éý‰z¿ûéC¢w3Ö|A¥;ÇÞ©»óÎDÿLP_’[G«¯zƒòx×ù­}oæCÖÜ~‘c
€(!ÇöïÍŽ=c—¿¨ØàÊ ÎlØ9Üš#Ó9¶k<õQk¼QÉ±g mŽõ£±sìxê³{Öâ?$ëýžî,8Ý9¶ÎÁµÏå§ïLÉÈžˆé¤þ µ*wy­_¿?ô®É•eëç£»äšÇðƒ
D
9v0Ú+ïæá“ñÊ‡®•¯´Æg:Ç>ºb}W¯¹k÷Wí¶Æú•é;ÝY¥+ÇöS?ïG˜rìz»f-zÌuŸ¥ûú¦;Ç–Ú’ÊB¯ù¾Ýºoœ5¶±é}–×ÚUŸ]ÿ¡`Òì‡]×LûY¦cONrl
%äØÁíŸ¿¢•W>Tw¤æoÖØ¾m;;sìž­ž7m©^»­Ÿ×Üßï>´ÈëW¦slíóg
Â•coÊÿèWÖX?Â˜c«&ØUÓ¼õƒy¿µÆ‘‰»|Éêç¼æÓ9é²Æ7–õ“?|Äu-æ{÷ž÷&g6ìáúì¹mE­cYÔ?ÝknÝ¯ÖX
€°!ÇNu¼®ŒÍÛ§õÎ[=u­ñ–êuÛzÍýã¾C+¬±~¥+Ç¾\\±Îkží3üÎ„zB{§º`û
k¬aÌ±Åõ=©ïˆ56ˆLäØê÷íš³rùº­ñabÏÁ1W?¯5«æZµ×®óÜ;géÖ1“q}/éü]
-QÎ±Guî{å‰gÌÏµlô¤f^ùúXcÅµ_db½f*-^ÓÁ{m_ž·Æú¡=]Ù[Ðû¿wOñšç«
…C­±A\ØY2Óë8Êy­±Ý_µûlñšßoŽ=áµægRáÊ±7L™óˆ56ˆLäØâZ¿z½Oî9ÔŸªÜ§:™ŸIÔ»UÇ˜ž1¯õÞ¾?¶«>Þk\²ì[ç9ýõæ±]ÖMšãÝ»¤üôwÖX
€°‰rŽ­ñÚÁã'¦¾þ¦ùÙ
J¬lí•ùíÝqýÐ‰¯ñ'WoéeµlÎŸ÷kÏìê6í/gOføó¯Å.•¯rÍ4Ç®úlã«žùÝá“Q^n÷ëðÒ5Ï»ÖÜ{#?wXìZù‰3®¹ýæØuGNý kñòãíÌÏú¥|Ýµ—à
”ÞCÌñAd*Ç^ûÞÌ‡\ó*3NÇß/$R_=ŸÖçâé^Õ³ïµÎ[GOß°Ö™¬—¹î~m»˜kð2³ÿ[Îšö†þ.
È¶¨çØÊlTÿ¬^´Êa­1åƒ×úÚ+Úûá’ÿ²ÆË¹íÅ“=3¯ªš4´÷ïˆN=œÙÕÅ=eŸ¤’+_U/
­Ï5·Í±W›þ€k®Uï~¶ÙsßxÇyM’ÕÊºxºKìÄš-½]uõõ|çØÿß¿ûæá/Ï­?íT¾£D[¦~ü¯5ÕUž©{ñ±6æø
2•cë:hRç5.?ý]Cê•ã}80/v¹øðÚŸ¯Qõ_­ÏÇ«X^ÐÙµÆOßžìkOÍ…û§»æ¸Ttxu*ßY²Fú}h
“¦c×ÓßéŸ.(¤Þ»ÖX/êg{~Çù^¹Pýç´Ïž+_ú~Oé¿u¹ÝÿØÞóç®zoùfóž¼-;˜s‹²³‚I³NVs/hŽ=°]WgÎvëhõÕ7;ö4çnOx_‡øóÐœ®cé;õ³
Çæàg_]¹þ%×þ‰‰‚æØõ®–+W]°î7k¬—ÃÇå¸j±¯ÚÔÝT¦rlQÝ°«ï†è]‚êíû¶ñ÷ìÅÓ;©5ãg<X[RY?g{é¨‰Í\ï3‚ü}…î?åò®óLµ'ø•G÷¹æT
½»5^ôž'•
šRŽO{ÿ©?ÈønÌŒfÐ3/Ý©GV½¬k¾Šek;Zë©§>ÊÔ]s]-;V¡|M¹iü8õí7t\LÇRÖùõÆ]#½æ×>‰®¹åfÅ©‹šC5¨ñ½€UÿªšuesÇ?ÛôZÝ‘S—’Í“(hŽ-ª
5uÍ§,¶hî²–y]ûÜó)çWoå§?ì-[ì§ßïÁ%Ÿ·O¶ve—e?k§ë«¾êýÚt¹SÛ>kÀ¨_ŽcÕ_'J5Ç®§ú÷³›vRM¯•Ó*kÔ÷ùíÖ}ã\ëT-¶ßw-Ad2Ç–MSç:{åÔÓ
»…¯ÖY9&¿¹êå½æÑý=ºKîùt\Y¿ß[÷‡®©×µ*w­óŸÚgxÒßËóò}ÕvÇ+ž»âÉd×MuÙê­“øNLÏœÞa}³¹h¬ÎQ¿'­c
dRSÍ±ïÉ­ŽÕü¤½ú”Ù(SÏå;ßí:0çFùÉ³ÖøTzSTl`ÍûËúŽœºä•Mºrl­åZÙñJkÞT¹²¶TrìÅ#'æXÇ«WWuú¦Wöè'wTõ*¶Ž‘
ÕŽ{ý¼¡9v"í¯©{R÷¦Þ3œÙ°s¸îYÝ»®Lö—±·ï½Ÿ°Ö’ŠLçØ¢÷Öõ‰w³²ºV×Kï«äjéÉãÉêºãù¹ŸT+¯wIÞãÏÔ)ã¶æð²þŠVîuŸWûOº²öÿ¸fUgþyû¹æ
õoäØ      ±‘c7Ì•ÒªRe¤ÖZ©.6Y¯?\9¶ïÔ½Áó'R^«Úà+N”yý{*9¶\ØY2Ó:v2~rGQÏmk®
”‹+>»eï¯OwŽ*eØªA¶Ö‘ªläØ¢^+~³è†ðs?©?k¼zœ[ã]’í)z?¥~(Ö<ñ6¾?çWÖ9[È±    @c‹rŽ=Ø»9®ZÙtP]lª=ŒerÏ¡
Êš“åØ’Ÿ;¬AóÇSiõCÑ¼éÎ±u “õ±øÉë­ëuQ]týõhhŽ}~WÉlëx)«øòÂ¢r¬54D¶rlQ¿lÕW›ç"åäê¡ŸêùZcýÐ}•ìÝF*{4ªuîÉc
€Æå[”‘ªñrqåF+«ñKý>œgÛ7Ú¿S_ë˜^¬[µ9åùåú¡Õê9?gºslQ/”Sk·½´µÉ±Eu½Víy©šôøùšc‹öÕùß>—+ÖüP«Þ#~÷ô
lˆlæØ¢šeíQèêë‘ =#;¦/laí÷9ýõÎÖz.üîÑjÑ;¸dÏBáŒOZXs$R¿kõ\·®…rl
ÐØ¢žcÇÚáÕ˜²*ÕÒÍsÔ£Z½³§õi'ª™½¸§ì“dû¼ÕS–ª¾È‹ÞòWg«ÜOÙ­2iknQŸÜ…û§«g†Æ&Î§ÞÞZk¢td]Ú_N5­®>½÷¬³²ºöûÝ¥óöÎYú„5o"í¡©
óð›g×–Têzí	ªžÆ^×cÙèIûQ+Ï×^“Ê ]ïœ×ãXÍ¿ô¾ÆO›N+Þy¿¹×ù‹5¶¡fôyçZ©ÿµu}âéyÖ=®~+®}!é»Q-´ë\ƒö®¶|1oùŸ\ÇR
*{vê¾Ðýªß!æ5º³o@Õî£+×¿”Ê±      Ò©)åØñ”GŽî’[ž—ßl÷¬Å¨X^Ð¹rùºU«ÿ–,XÙZù¨ö!ôÌKæ|é¢Þ·ÊÊ•!«~Rµ®ª=Õ:ÆvëÚ7‘æPo
ç¹ÅS”‰©×¯²cïÇCÆ4øé ïG=$”éêüõ)GVm¸ú¥ôm“ž\Mçªk}pÉçíõn >'üvë¾qÊïtL½ÿ°æÉ”Ü§:Åf
SÞª{R÷¦r[Ñ=«ïLÿ¦zî {F®•rm}gÅsW<©k%ñ×)ÛÏs˜é]Žþ®Dý¼·O›ÿè–©ÿfÍøê~þükæx     €ljª96       àþ@Ž 3rl
@˜‘c       ÂŒ       fäØ       €0#Ç       „96        ÌÈ±       aFŽ 3rl       @˜‘c       ÂŒ       fäØ
€0#Ç       „96        ÌÈ±       aFŽ 3rl       @˜‘c       ÂŒ       fäØ       €0#Ç       „96
ÌÈ±       a¦;'''Öòá        „ÎÍ›Çþ ±»ßendstream endobj 272 0 obj <</XObject 273 0 R>> endobj 273 0 obj
<</Im0 270 0 R>> endobj 274 0 obj <</BBox [116.88 441.84 291.84 430.32]/Filter /FlateDecode/Group 17 0 R/Length
47/Matrix [1 0 0 1 0 0]/Resources 272 0 R/Subtype /Form/Type /XObject>> stream xœ347Ñ³4S0 BCC=S#
i¦ga¡`bl gl¤œË«ï™k à’Ï ¬Zƒendstream endobj 275 0 obj <</BM /Compatible>> endobj 276 0 obj <</G14 275 0 R>>
endobj 277 0 obj <</Fm15 274 0 R>> endobj 278 0 obj <</BBox [116.993 441.75 291.75 430.364]/Filter
/FlateDecode/Group 17 0 R/Length 98/Resources 269 0 R/Subtype /Form/Type /XObject>> stream
xœ+ä244Ó³´4V016Ð363QÈå…‹˜ê™›*äðY‚|¨Ž^t3rx3xÃµxóx @ÐPÁ›WßÝÐD!½˜Wß-×ÐTÁ%Ÿ7K?9'³À5/EÁ7@ ^«¤endstream
endobj 280 0 obj <</Length 30688/Length1 30688>> stream     €  @cmapæ‡   Ì  †cvt V!f-  T  òfpgmzEî$
H  ¿glyfÁ»     âheadÏßQ  /ì   6hhea t  0$   $hmtxnåT•  0H ôlocaŸË¨K  ><  ümaxp˜l  E8    prepÞ{ÝÑ  EX
	postRƒDR  Hd  &;name7ŒÊ[  n   	=                                            

 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`a
bcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ
Ð ÑÒÓÔÕÖ×ØÙÚÛÜÝÞß l   „ €   ~’¡°ÿÇÉÝ	#~ŠŒ¡ÎO\_‘…ù   " & 0 3 : < > D  ¤ §
¬!!!!"!&!.!^""""""""+"H"`"e%¡%«%Ê%Ï%æðð ûÿÿ      ’ ¯úÆÉØ 	#~„ŒŽ£Q^€ 
    & 0 2 9 < > D  £ § «!!!!"!&!.![""""""""+"H"`"d%¡%ª%Ê%Ï%æððûÿÿÿã  ÿ ¦ ™ÿŠ  þ  ÿL xÿAÿ(ü 
þ    ýÙýØý×ýÖý¦ã        à…à•á	à„àùáVàwà·  à  à8à+á#ßjßyàhà<Þ–Þ¢Þ‹  Þ¦  ÞtÞqÞ_Þ/Þ0ÛžÛ–ÚîÛsÛ]¾  ¾    ‚
8  8          8  Bh            ²dhv                j  j                    X  X
D      £ „ …| – æ † Ž ‹  © ¤  Š  ƒ “ ð ñ  — ˆ Ü ï ž ª ó ò ô ¢ ¬ È Æ ­ b c  d Ê e Ç É Î Ë Ì Í ç f Ñ Ï
Ð ® g î ‘ Ô Ò Ó h é ë ‰ j i k m l n   o q p r s u t v w è x z y { } | · ¡  ~ €  ê ì ¹DE û üFGHI
ý þ ÿJKLMNO	 PQ ö ÷RSTUVWXYZ[\]^_`a ø Õ89bcdef gh à
áij:klmnop ¯ °qrst ù ú â ã !"uvwxyz{|#$%&}~€‚
º'()* ä åƒ Ö ß Ù Ú Û Þ ×
ÝžŸŠ ¡¢¤¥¦§¨+©ª«¬,­®¯°±²³´µ¶·¸-¹º»¼½¾¿ÀÁÂ.ÃÄ/0ÅÆÇÈÉÊËÌÍ
Î:ÏÐ12Ñ3ÒÓÔÕÖ×ØÙ]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ
„…†‡ˆLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopq‘’tuvwxy ± ²84 µ
¶ Ã“ ³ ´ Ä ‚ Á ‡ õ•z ¼ ™ í Â ¥›œ;<=>?   Ñ   Ñ               c #    ÿá    ÿÝ    ÿá  þdÿõ
                                                  Ñ)
†€Twmui@cY@ƒuo ®     ¥ é # û% ì   ô          ô: óá     ‹   ¿ Ô ä í þ
¾ ¾ g g ª ¡ X X'9H î   š ± ¹ ¾ È Ô Û æ ðZvŠ” GZC‰Mû$ wgºô$ º Ì Ú°ÿè 
à-³ x L Ó4@¥*Ñ¥  @:T876543210/.-,+*)('&%$#"! 

	 ,°CX±+!!!Y-,°CX±+!!!Y-,°CX°%ò!°
!!!Y-,°CX±+!!!Y-,°CX±+!!!Y-,°CX±+!!!Y-,°CX±+!!!Y-,N° °F#CD°%± Fæ° °° ò!°M°
-,°CXEdj#Ei°Cd``°F#D# °Fð/° !!!!Y-,± C#Ce -, ± C#C-, °F#p±F>°F#p±FE:± 
-,°+°%E°%Ej°@‹`°%#D!!!-,°+°%E°%Ej¸ÿÀŒ`°%#D!!!-,° °+!!!-,° °+!!!-,°C°Ce -, i°@a° ‹ ±,ÀŠŒ¸
b`+d#da\X°aY-,± %EhTX°%E°%E`h °%#D°%#D°% Eh Š#D°%Eh`°%#DY-,°% Eh Š#D°%Eh`°%#D-,°
CX‡!À°CX‡E°+°G#D°GzäŠEi °G#DŠŠ‡ ° QX°+°G#D°Gzä!°GzäYYY-, ŠE#Eh`D-,EjB-,/-,!!-,°%E°%Ed`j°%Eja
°%Ej Š‹e°%#DŒ°%#D!!-,Eh#Eia°%Eja °%Ej Š‹e°%#DŒ°%#D!!-,ŠŠEd#EdadB-,°%C°@T°%C° TZX°% E°@aDY°%C°
T°%C°@TZX°% E°@`DY!!!!-,KRXC°%E#aD!!Y-,KRXC°%E#`D!!Y-,KRXED!!Y-, °%#I°@`° c ° RX#°%8#°%e8
Šc8!!!!!Y-,KPXED!!Y-,°%# Šõ °`#íì-,°%# Šõ °a#íì-,°%õ íì-,F#F`ŠŠF# FŠ`Ša¸ÿ€b# #Š±KKŠpE` °
PX°a¸ÿº‹°FŒY°`h:-, E°%FRX?!Y-, E°%FPX?!Y-, °C°C-,KRX°%°%I°%°%Ia ° TX! C° UXY°@TX C° TXY C°
TX°%¸ÿÀ8YYYY!!!!-,KRXCe8!!Y-,KRXC8!!Y-,!!d#d‹¸@ b-,!°€QXd#d‹¸  b² @/+Y°`-,!°ÀQXd#d‹¸Ub²
€/+Y°`-,d#d‹¸@ b`#!-,´    °&°&°&°&Eh:°-,´    °&°&°&°&Ehe:°-,°CXY-,°CXY-,° +#
<°+-,°(+Š# Ð#°+°XÀ<Y ° -,KS#KQZX EŠ`D!!Y-,KS#KQZX8!!Y-, °%E#E#ahŠ Eh Š#D`D-,± B±#ˆQ±@ˆSZX¹
ˆTX²C`BY±$ˆQX¹   @ˆTX²C`BY±$ˆTX² C`B KKRX²C`BY¹@  €ˆTX²C`BY¹@  €c¸ ˆTX²C`BY¹@  c¸
ˆTX²C`BYYYY-          ·  /ÍÝÍ /ÍÝÍ10!!%!!  ú€ û  ú €    #þŽj‰  1@$ ) //9
??ÛÙ Ô /]í ôí10]	#jþ˜ßÅ‰ýû   {þ¼Ç  6@ Ã  ¸ÿè@	7 	7   /]3/++
?/10‡.+‡}Ä	!ÇüçþÍø¨X  á  Wc   @ÙÙ ÐO/]í99 /í?í10!!!!WþŠvþŠvÚ‰û‰     Ñ
 ®@R   ‚78KD[Tmb~q “p 
 
	z   ¸ÿß@ 7! 7  /]3]/++]9 /?]9/]í99CTX@	M M}
	}]Y]‡ýÀÀÀ‡ýÀÀÀCTX´?	M	 ]Y!!!!!þsgýØgþ}&º+··-þÓÑümýê   ¾  ¸Ñ  $ 3
	Z@;KXTidpp r#,” `¯“-“~,%} ¸5,µ4öý2ôí9/9í
	/í?í9/]qí9910]#!!24&'.+3267>4&'.+3267>¸WLXÓ¢ývB´§RUSrh’«þ%/*}q$<[€%4
	^7B-žVT¢Œ;<-Èlª8B8Ñ)+‘]l¥.¶Ï%JþÅIýÒGM þS   gÿãnî 3 †¹ +ÿ„³ 7¸ÿ„³ 7¸ÿÂ@U	7/>
	7#&)/	/##YYW YV$uz	/?o‘ -0-`-p---&‘ -¸5 5O5_5 }·4ôí]ö2
	?í3/]?í3/]10]++++"$'&5476$32#.'.#"3267>73_¦þçeeojeaª^—@Cm),U67€IQ’>;IO<=–I
	F‰:1T(8f8I€baa"¾± gcl/þ—B  ,3;9¼†Œ¼67/*$Bþœ,  ¾  =Ñ   <@*YUej vy ’’} z 
	¸@Pµöí]ô]í
	/í?í10]#!!24&'.+3267>=¾‘mþü²ýó¶Zš±þskt;{|aa‰€=ibçÐþ·XB4Ñ=8^þÁÕ“Ñ;ü\!<É   ¾  óÑ
	 G@	‘0@`p€°‘ ‘¸ÿÀ@7 	µöý23/33/+
	/í?í9/]í10)!!!!!óûË5ýI…ý{·Ñþàþÿþàþ   ¾  éÑ 	 B@‘0@`‘ ¸ÿÀ@ 7  /Oµ
	öý2]3/+3/ /?í9/]í10!!!!!éýS{ý…þ‚+±þëþàý„Ñ  ¾  õÑ  B@+‘0@`p€° 	 ¶
 
P ` µöý2]öý2 ?3?39/]í10)!!!!!õþ€ýÉþ€€7€ýpÑýß!  {  ãÑ  9@"	“ “¡ ¡ 
 0 @ p ]9/]ô2ýô2 /ý2?ý210)3#!#3ãü˜ôôhôôÁþøü?   *ÿéÆÑ  2@Y“

’ €     /]3/]í9/ ?ý2/?í10]#"&'33267>5!!ÆFEIÎ˜g¶E$0hQiqþ«Õµb«;?E.821u[Q 
¾  ðÑ  #@‘  ` p   µöí3/] /í?10)!!ðûÎ€²ÑûO   ¾  ×Ñ  µ¹ ÿÀ@B 7@ 7+ 	 
 &,/ /; ;O	I z„	Š”	— ›6 Y  ¸ÿÀ@7€7€7 	/?`p¸ÿÀ@7 		 ¶
¸ÿÀ·	7‚µ öí+]öí99 /?9/+]910+++]]]++)!!!	!×þ‚þìþ÷þìþ–¾ON¾åýy‡üÑýë  ¾  Ñ
¼@IO@€  GIx -#0@S`pw@	7€ ¶¸ÿÀ¶ 7 ¸ÿÀ·	7€µ
öí+]+öý+99] /?9CTX@+$;4KD[Tmbp]Y10]CTX°KRX@‚‡.+‡}ÄYY]
]qr)!!!þŽýˆþ Ë`þüÑü«U  gÿáfð  # E@2'))pp’ 	*		!’%}
¸%?%}·$ôí]ôí ?]í?]í10] !   !
>54&'.#"326fþhþ˜þ™þh˜gfšþ86>23…HI62?=22†JJ†èþœþ]£dg¡þ_ý D¹}†¼:<64<8Å‚…»;;89   ¾  ‹Ñ
  G@Sfu’	’ 	}: J  ¸ÿÀ@	7  !!@!	µ ôý2]3/+]í
/?í9/í10]+!!24&'.+3267>‹FAYÛ£ïþ€xŽÃKZ_þsD-<r_Bnb+%!ûd¿AXZþÑ11;¸Š?[þB$ Y   ¾  XÑ
  y@R,=M\UPlf3Cs“?O“pp }! !@!µ öý2]3/99/í]]
/3?í9/]í9]10‡ýÀ]4&'.+3267>!#!!2.8'hE‹v\|*(%Wþ+þj±þ‚„„¾STc™Ž	8Pþo
Kü6"ýÞÑ22Ÿx¥ÐE  mÿåfì 3 ¼¹ "ÿ€@ 7€ 7	7¸ÿâ@F	76:EJQ3e	v	uxw1 
+?!!!%“ 0p“ +}}  ¸ÿÀ@		7  5·4æ3/+99í/í/
?í3/]?í3/]9CTX@++:5+JE+ZU+ke+{t+]YCTX´++]Y10]++++ !"$'33267>54&'.'.54
!2#&$#"fþ‹þÀ¹þíx*w'ˆ#r$,9SPT»R¼¥u%“i)Zþûˆ0_,'8Z}R—W«£ÔÜþíA2e_f651G#=Ñ›Ð9+þ©Ha
=';? 8Á   )  KÑ  ,@‘ [[		@		]9/]äýä /?ý210!!!!Kþ/þ€þ/"±ûO±   B
ÅÑ X@ 	z u! 7 ¸ÿß@ 7  @`/]3/++] ??9CTX¹ ÿà³	7¸ÿà·	7
7+++Y10CTX@jtt@7T7NAIM	B F_PX\	T oaij	e fy	p v‹„‹	„ ˆ›”›	” ôû /
>19=	2 6¸ÿà@	27 27 ¸ÿà@	27	 27¸ÿÀ@	7@7 ¸ÿÖ@=7	*7  p
"-3<CLVYbmr}]‡ýÀÀ]‡ýÀÀ]++++++++]] ++]Y	!
!!!ÅþoþWþõþüþWþo‘åðÑú/Êü6Ñûÿûÿ     Ñ  Ô@p 7 LC\Sfpyuuwz
z  		"	)	:		€   )9xò‚  ¸ÿß@		7!	7 ¸ÿß@
7!	7   /]3/9//++++ /?910‡ý]q‡ÀÀÀÀÀ‡ý]q‡ÀÀÀÀÀ] ]])	!	!
!þDþ¿þ¹þXýû»6?©ýøêþîãþ0Ðý,  Vÿâ·ƒ  0 f@G,IIYYkikv%r)p- ñ+'@ 7''#§+
§00„/º2/2((((„»1öí3/]]öý22 /?í?ý2/+9/í10]5326#"&54676$754&#"#6$3
!RIª,69@D6o*V&5rD Øned(Ÿ˜”YÊ,!93þ›%êA5#,,Š>Æš{œ--&	]G?)½Êý  ªÿê>  
8@$EEWf–	 ˜ƒ ¼„¹öý22ôí /?í??í10]
#"&'!!>324&#"326>þÛÛ^Ž@þ§hS­qÕæþfƒ3l1'F1ŒAþ÷þ²(&8ýÚBRþÍþë–¢ýÌ ¨  Xÿâq‚ ' ˆ@#0?
;1@ELL	LDK[k| & 7¸ÿÖ³ 7¸ÿà@7@	70—?$$¸ÿÀ@	7$$— 
$$$$/)$)`)ƒ»(ôí]3]/]3
?í3/+]?í3/]+10+++]"&'.5467>32#.'.#"3267>73ó“óZYbi^[î€sÂT3;+)bA›Ÿ’Dm$"43U¹FIIÞ•äKGB2(þÍ0
·¢¨,þÍ(/  Zÿáî    >@(J Jq * 7 7 —–„ º"ƒ»!ôíöý22
?í/?í?10++])5#"467>32!.#"326îþ˜]¢jÍöSHDÂaeDhþ˜&T#ŽŽr~1nuLH<ÝOKS+!Þû"'±¥•%  Xÿâü†
  n@S$+ 3< CMM CLZ[ Uik	``ty	ttñ§ Scs˜		„ ¼/„»öý2]ôí3/
?í3/]?í9/í10]!32673#   !  %.#"üüÈ¹´rÖ>(zØƒþ®þ˜U)þšjph†ï„ŒR/þß1,0EþëþüUqrlw  +
‚  @@$  ˜§

  „_ o  /]3í99//]3/9/ /?í99?ý2/10#.#"!!!#5354632‚M,jKþöþ˜ššÛÞP‚2Lm	ôü‘oôÎÎ
 ZþYî‚ & 3 U@8NN-N3]]3ij3}zu#z3$+—!&1–

—		$'„ º5.ƒ»4öíôý229/ ?ý2//í??í9910]%#"&'33267>=#"
467>327!.#"326îZQQåuãS,B¾Kd}!Ažaìÿ NGBÁe[•= ]þ˜Z$ŽŽyw6hžØ=>7+%" dF5>"‹ÊKFN+&2üÿý
£’¢€"   ª    8@#<p • „ º0`„ ¹öý2]öí
/??í9910])4&'.#"!!>32þ–ME1e;þ˜h`±l¶Í-D‡ %" #üäýÓKPÔÓ         1@!ž   
„ P	`	p	]/]äýä /??]í10)!7!!þ˜h þ„|c   ÿÆþY   A@( ž   §—„
º//]ô<ý22// ?ý2/?í?]í10]#"&'33265#5!5!!ê¸b¡%ZhLÕ=þ¾Õ	 |Žô    ª    @
 „ P`p]/]í /?10)!þ˜h   ª  Ö‚ ( ^@A(§¦·¶&•	•„ª„ „ª
*) *0*P*p*]9/]ôý2í9ôí
/??í9?í10]!4&'.#"!!>32>32!4&'.#"ôþ–IB5d(þ˜h]ªgoª0lÌb¶½þ–JC-Vüä1Rs$$!+üäc|IRc`
[hÚÍý%1Sr$$!   ª  ‚  8@#<p • „ º0`„ ¹öý2]öí
/??í9910])4&'.#"!!>32þ–ME1e;þ˜h`±l¶Í-D‡ %" #üäc|KPÔÓ  XÿÝ&†  # !@˜	!˜ƒ
¼%ƒ»$öíôí ?í?í10 !   !  >54&'.#"326&þ½þÜþÜþ½E"&AþE##$  Z44Q%!'"!
Y91Y1þëþÁ?>þÀýÚ+ykc†()"*'ˆg\‡)'$!   ªþd>‚    ?@+DDD RRedy	–—ƒ ¼"
„¹!öý22öí
??í??í10]#"&'!!>324&#"326>UEH¶h`†Fþ˜hS­qÒéþpy3l1$R(ŒA‹äJNP)%þ,ÿuBRþÌþì¤”ýË§  ª
Øg  8·p  ¸ÿÀ@ 7•	  /„	¹öý2]3/ ???ý+2/10]#.#"!!>32Ø
f"MvDþ˜hw°J0ýc¥fC   _ÿáz‚ 0 ‚@2/IG/uyyu#¸ÿà@!7 7; (P!!@	7!!%§¸ÿÀ@
7§!(ƒƒ! ¸ÿÀ@ 7  2p2/]3/+99í/í/
?í3/+?í3/+]9]10++]!"&'332654&'.'.54$!2#.#"zþÈþñ–ôJ!GA8ŽQjf<T(‰8™”3
~çAPÍiWw6d7@Žˆd®Õ8"(-!/.)%	(©~¢×3þä7E0,(*%Ÿ  +ÿêx¤  J@, p § §@   
„ o/]33ý2/]3/]3 ?ý2/?3í99/]10]%#"&5#53!!!32673x:‚^ÒÍ””hQþ¯GD[ ªÎ ôAþ¿ôþr;X##) 
¡ÿá	c  >@) L[lz	•„ º0`„¹öí]öý2 /?í?9910])5#"&5!3267!
þ˜d¦sºÉjME.p4h|LOÖÑÛýÓUq%%""!    c  l@$°GX‡  †dkt{ ¸ÿß@!	7!	7
z u  /O /]]3/] /?9910++]‡ýÀ‡ýÀ] ]	!!	þOþhþR}cûcüü   -  ©c  ²@q
)&9?0;	3 IO@K	C [U\	S ldl	a }p}	r †‡  ô†Q^ejqus
 ¸ÿß@	7!	7    @`/]3/++ ??9]10]‡ý]qÀÀ‡ýqÀÀ]
!!!!©þ¤þ‚åáþ}þ§zÀð?ä½cûõýcüúüú     @c  í@/ VYJ	7¸ÿ¶@&	7:5NCCN
YVXVY	W 	7¸ÿà@,	7  	K		07	ˆ   K¸ÿÐ@7ˆ  ¸ÿß³
7 ¸ÿß@!	7!	7!	7   /  /]]3/9//++++ /?910‡ý+q‡ÀÀÀÀÀ‡ý+q‡ÀÀÀÀÀ++]
++])!	!!@þ\ðöþd»þL¤ìíþKPþ°12þ¶Jý×   þdc  @?JXYf  «¹‡
¤¶†%+8j{uzt¸ÿß@#	7!	7 5E	/	O	 /]]3/
?/?]9910++]‡ý]À‡ý]ÀÀÀ]	!!!¥ rýþz²þKzÖú¤[  T  sc 	 v@U+;E&7…–£³ÅÕå
ˆLCjezu——    //]3/]93//
/ý2?ý210]‡.+]q‡}Ä)5!!!sûáPýÈüý¹RçuãýŒ        (ÕS¼_<õ      ­lSø    ¶0zÿjþW ¨  	        
þR  8ÿjûl ¨               }      ¼  ¼  8 Ë³ §ð •° † - æ y¨ §Y ÁY ¦° Ìð Úä #× nä ·„ {°
p° ° ¹° Œ° T° ¤° †° œ° c° h8 á8 Mð Ìð ùð ìï “¶ ‘6  ¾Ê g¤ ¾w ¾4 ¾} g³ ¾^ {q *+ ¾
¾• ¾Æ ¾Í gÝ ¾Í gB ¾¯ mt ) © 	 B å 	‰ ZY ø„ ½Y Æð Å°ÿð°vX V˜ ªµ X˜ ZP Xa +˜
Z³ ª¼  9ÿÆ^ ª¼ ªw ª³ ª~ X˜ ª˜ Zú ª¿ _¥ +³ ¡3 Ö -Z 5 Æ T° ˜Y›° Éð 6 6 Ê gw ¾Æ
¾Í g ©X VX VX VX VX VX Vµ XP XP XP XP X¼ h¼ÿú¼ÿõ¼ÿî³ ª~ X~ X~ X~ X~ X³ ¡³ ¡³ ¡³ ¡°
ò³ ´° ¼° š° —° Ý° ‡´ ª¶ z¶ z¶ Ž°å°7ð úÀ Í ex ±ð Úð Úð Ú° 4Å ª° |– dô )¬ +N È ˜È
À 5% V~ Xï p8 Ëð Øð †° Dð žr "Ì ÙÌ&d ·6 6 Í g	 g‹ X° ™  ™³ ³ {¨  ¨ {ð Úð k5
å 	„ÿ³°  Y ÙY&Ò +Ø +° òä ·¨ 5³ 58 6 w ¾6 w ¾w ¾^ {^ q^ {^ {Í gÍ gÍ g © ©
©¼ ª°°°G°V°°š°²°N°À°# Ð ¯ m¿ _‰ ZÆ TY›¤ o Wå 	5 á ¾˜ ªð
ìðÈÈ æÈ à	t ³	t Ç	t ±° e} g˜ Z^ {¯ m¿ _Ê gµ XÊ gµ X˜ Z°ÿðä ·6 X V6 X V¤ ¾ Z¤
w ¾P Xw ¾P X ¾¼ y ¾. ª ¾t ªÆ ¾³ ªÆ ¾³ ªÍ g~ XB ¾ú ªB ¾ú j¯ m¿ _t )¥ +t )¹ + ©³
¡ ©³ ¡‰ ZÆ T‰ ZÆ T ¾Í gž ]˜ Z~ X® [Î XH Q X°ÿð  ËÈ ž ¿ ½ {Ò  šÿåÒ uî u - ‘P Õ ’Ö
ƒÖ ƒÕ ±Ö p6 X VÊ gµ XÊ gµ Xw ¾P Xw ¾P Xw ¾P X} g˜ Z} g˜ Z} g˜ Z³ ¾³ ª³ 9³ )^ v¼ÿö^
{¼ -^ {¼ ^ {¼  q *9ÿÆ+ ¾^ ª^ ª ¾¼ 4Æ ¾³ ªÆ ¾³ ªÍ g~ XÍ g~ XB ¾ú g¯ m¿ _t )¥ + ©³
¡ ©³ ¡ ©³ ¡ ©³ ¡	 BÖ -å 	5 Â ª6 X VÀ % VÍ e~ X8 á	 BÖ -	 BÖ -	 BÖ -å 	5
¨  °ÿð° šü 	t ³	t ±	t §	t ´¨  °²°° ÇaÿëÈÿëÿë¤ÿë¿ÿë„ÿëÃÿë¼ÿ6  ¾r "w ¾‰ Z³ ¾^
{+ ¾6 • ¾Æ ¾¸ ‰Í g³ ¾Ý ¾x ht )å 	 Ï ‹À 5^ {å 	˜ Z® [³ ª¼ ¡¦ Ÿ» ª5 e [³ ªš w¼
ª^ ª5 Å ª3 ¥ V~ X˜ ª X¦ Ÿ ˆ ž' [¼ÿî¦ Ÿ~ X¦ Ÿ' [w ¾I ) ¾ï g¯ m^ {^ {q *	Ç 	·
¾} )+ ¾å ³ ¾6  ¾ ¾ ¾» *w ¾ì § NÄ ¾Ä ¾+ ¾Ã • ¾³ ¾Í g³ ¾Ý ¾Ê gt )å ž ] Ì ¾L ƒ
O ¾	k ¾B )€ ¾ ¾ï \	 ¾\ X V“ sk ª@ ªˆ %P Xþ -´ AÃ ªÃ ª^ ª­ ¤ ªÂ ª~ XÂ ª˜ ªÉ XH 5
º ZZ Õ ªy t ª ªò  ª2 ªÙ Wô ªt "P X³ )@ ªØ X¿ _¼  ¼ÿî9ÿÆ ( ª³ )^ ª5 Â ª ¾@
ª  Ì Z ¾Â ªÈ ¦È ÙÈ ÙÈ ²È O g~ XÅ ©ï ¡  .    v
å°°ÿ°°°°V°V°V°°.°[°]°]°]°]°)6 X V6 X V6 X V6ÿóXÿj6 X V6 X
V6 X V6 X V6 X V6 X V6 X V6 X Vw ¾P Xw ¾P Xw ¾P Xw ¾P Xwÿ°Pÿ›w ¾P Xw ¾P Xw ¾P
X^ {¼ ª^ {¼  
Í g~ XÍ g~ XÍ g~ XÍ ?~ÿ—Í g~ XÍ g~ XÍ g~ XO g~ XO g~ XO g~ XO g~ XO g~ X ©³ ¡ ©³
¡Å ©ï ¡Å ©ï ¡Å ©ï ¡Å ©ï ¡Å ©ï ¡å 	5 å 	5 å 	5 å 	5 ˜ Z  ° ©            
     G G G r r r r r r r r r r r – – – – – – –	ˆo¬ääR••·0¦	bbÕ†°°°		
						ˆØ	Y	­  ` ÚJ‘‘­^¯   C Ï
e²,Áqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
qqqqqqqqqqqqqqqqqqqqqqqqqqqq   } ^  h    @ U  ´c  @
Tèç$çæ¸ÿÀ@dÖ6@Ù×’Í’Ì’Ë’Ê’É’Á’©›$œ›$š› ™›(›’ñ˜§˜—˜*–˜%•˜@˜˜’ò”’“’+‘’!
’¸ÿÀ@\’6¼¼/¼/» ¹¹¸ µ øø÷ ÷@÷õô ô
îPî/ì?ìOì0ÕpÕ³²(²³/³?³`°p°pÔåä$ãä$/ä¸ÿÀ³Â6¸ÿÀ@ÿ´6Ò.Ñ.Ð ÏÀ¿¾ÿ¾½ÿ½±¯p¯¨
¨‹‰0Š‰/‰3ˆ„‡„†„I…„ƒ„:„ oª ª°ªðª@¡\
\@\ó‚J€~.}.P`p!*!*!*,-*+()&'$%"# !     
 €@€@€ ? O   / ? @o  ¿ Ï ÿ ;:9 8P3°K KTB°K KSB°3+K¸ R°2+K°
P[X±ŽY°3+°ˆ¸ T°ˆ¸ T°CZ[X¸±Ž…°CX±¸€…±¸€…YY+°dKSX°pY°2KSX°Y
++++stsss++++++++++++++++++++++++±
2+K°dRB±éE#Eha°é#D±êéE#Eh`°ê#Ds++++++sss+++++++++ss+sts++++++++s++s++ssssssssssss
+u+++s+t+++++++++++++++++s++++          ÿu Ó                    }  	 

!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|
½.nullnonmarkingreturnspaceexclamquotedbl numbersigndollarpercent	ampersandquotesingle	parenleft
parenrightasteriskpluscommahyphenperiodslashzeroonetwothreefourfivesixseveneightninecolon
semicolonlessequalgreaterquestionatABCDEFGHIJKLMNOPQRSTUVWXYZbracketleft
backslashbracketrightasciicircum underscoregraveabcdefghijklmnopqrstuvwxyz
braceleftbar braceright asciitilde	AdieresisAringCcedillaEacuteNtilde	Odieresis
Udieresisaacuteagraveacircumflex	adieresisatildearingccedillaeacuteegraveecircumflex
edieresisiacuteigraveicircumflex	idieresisntildeoacuteograveocircumflex
odieresisotildeuacuteugraveucircumflex	udieresisdaggerdegreecentsterlingsectionbullet	paragraph
germandbls registered	copyright	trademarkacutedieresisnotequalAEOslashinfinity	plusminus
lessequalgreaterequalyenmu1partialdiff
summationproductpi1integralordfeminineordmasculineOhmaeoslashquestiondown exclamdown
logicalnotradicalflorinapproxequal	increment
guillemotleftguillemotrightellipsisAgraveAtildeOtildeOEoeendashemdashquotedblleft quotedblright
quoteleft quoterightdividelozenge	ydieresis	YdieresisfractionEuro guilsinglleftguilsinglrightfifl
daggerdblperiodcenteredquotesinglbasequotedblbaseperthousandAcircumflexEcircumflexAacute
EdieresisEgraveIacuteIcircumflex
IdieresisIgraveOacuteOcircumflexOgraveUacuteUcircumflexUgravedotlessi circumflextildemacronbreve
dotaccentringcedillahungarumlautogonekcaronLslashlslashScaronscaronZcaronzcaron
brokenbarEthethYacuteyacuteThornthornminusmultiplyonesuperiortwosuperior threesuperioronehalf
onequarter threequartersfrancGbrevegbreveIdotScedillascedillaCacutecacuteCcaronccarondmacron
overscoremiddotAbreveabreveAogonekaogonekDcarondcaronDslashEogonekeogonekEcaronecaronLacutelacute
LcaronlcaronLdotldotNacutenacuteNcaronncaron	Odblacute
odblacuteRacuteracuteRcaronrcaronSacutesacuteTcedillatcedillaTcarontcaronUringuring	Udblacute
udblacuteZacutezacuteZdotzdotGammaThetaPhialphadeltaepsilonsigmatauphi underscoredbl	exclamdbl
nsuperiorpesetaIJijnapostropheminutesecond	afii61248	afii61289H22073H18543H18551H18533
openbulletAmacronamacronCcircumflexccircumflexCdotcdotEmacronemacronEbreveebreveEdotedotGcircumfle
xgcircumflexGdotgdotGcedillagcedillaHcircumflexhcircumflexHbarhbarItildeitildeImacronimacronIbrev
eibreveIogonekiogonekJcircumflexjcircumflexKcedillakcedillakgreenlandicLcedillalcedillaNcedillanced
illaEngengOmacronomacronObreveobreveRcedillarcedillaScircumflexscircumflexTbartbarUtildeutildeUm
acronumacronUbreveubreveUogonekuogonekWcircumflexwcircumflexYcircumflexycircumflexlongs Aringacute
aringacuteAEacuteaeacuteOslashacuteoslashacute	anoteleiaWgravewgraveWacutewacute	Wdieresis
wdieresisYgraveygrave quotereversed	radicalex	afii08941	estimated
oneeighththreeeighthsfiveeighthsseveneighthscommaaccentundercommaaccenttonos dieresistonos
AlphatonosEpsilontonosEtatonos	IotatonosOmicrontonosUpsilontonos
OmegatonosiotadieresistonosAlphaBetaDeltaEpsilonZetaEtaIotaKappaLambdaMuNuXiOmicronPiRhoSigma
TauUpsilonChiPsiOmegaIotadieresisUpsilondieresis alphatonosepsilontonosetatonos
iotatonosupsilondieresistonosbetagammazetaetathetaiotakappalambdamunuxiomicronrhosigma1upsilon
chipsiomegaiotadieresisupsilondieresisomicrontonosupsilontonos omegatonos	afii10023	afii10051
afii10052	afii10053	afii10054	afii10055	afii10056	afii10057	afii10058	afii10059	afii10060
afii10061	afii10062	afii10145	afii10017	afii10018	afii10019	afii10020	afii10021	afii10022
afii10024	afii10025	afii10026	afii10027	afii10028	afii10029	afii10030	afii10031	afii10032
afii10033	afii10034	afii10035	afii10036	afii10037	afii10038	afii10039	afii10040	afii10041
afii10042	afii10043	afii10044	afii10045	afii10046	afii10047	afii10048	afii10049	afii10065
afii10066	afii10067	afii10068	afii10069	afii10070	afii10072	afii10073	afii10074	afii10075
afii10076	afii10077	afii10078	afii10079	afii10080	afii10081	afii10082	afii10083	afii10084
afii10085	afii10086	afii10087	afii10088	afii10089	afii10090	afii10091	afii10092	afii10093
afii10094	afii10095	afii10096	afii10097	afii10071	afii10099	afii10100	afii10101	afii10102
afii10103	afii10104	afii10105	afii10106	afii10107	afii10108	afii10109	afii10110	afii10193
afii10050	afii10098	afii00208	afii61352pifoursuperiorfivesuperior sevensuperior eightsuperior
onesupforfracDontCompressHTMXglyph577glyph578glyph579glyph580glyph581OhornohornUhornuhorn
hookabovecombdotbelowcomb	gravecomb
acutecombglyph590glyph591glyph592glyph593glyph594glyph595glyph596glyph597glyph598glyph599glyph600gl
yph601glyph602glyph603glyph604	Adotbelow	adotbelow Ahookabove
ahookaboveAcircumflexacuteacircumflexacuteAcircumflexgraveacircumflexgraveAcircumflexhookaboveacircumflex
hookaboveAcircumflextildeacircumflextildeAcircumflexdotbelowacircumflexdotbelowAbreveacuteabreveacuteAbr
evegraveabrevegraveAbrevehookaboveabrevehookaboveAbrevetildeabrevetildeAbrevedotbelowabrevedotbelow
Edotbelow	edotbelow Ehookabove
ehookaboveEtildeetildeEcircumflexacuteecircumflexacuteEcircumflexgraveecircumflexgraveEcircumflexhookabo
veecircumflexhookaboveEcircumflextildeecircumflextildeEcircumflexdotbelowecircumflexdotbelow Ihookabove
ihookabove	Idotbelow	idotbelowglyph649glyph650glyph651glyph652sheva hatafsegol
hatafpatahhatafqamatshiriqtseresegolpatahqamatsholamqubutsdageshmetegmaqafrafepaseqshindotsindot
sofpasuqalefbetgimeldalethevavzayinhettetyodfinalkafkaflamedfinalmemmemfinalnunnunsamekhayi
nfinalpepe finaltsaditsadiqofreshshintav	doublevavvavyod	doubleyodgeresh	gershayim newsheqelsign
vavshindot finalkafshevafinalkafqamats lamedholamlamedholamdageshaltayinshinshindot
shinsindotshindageshshindotshindageshsindot	alefpatah alefqamats	alefmapiq
betdageshgimeldageshdaletdageshhedagesh	vavdageshzayindagesh	tetdagesh	yoddageshfinalkafdagesh
kafdageshlameddagesh	memdagesh	nundageshsamekhdagesh finalpedageshpedageshtsadidagesh	qofdagesh
reshdagesh shindageshtavdagesvavholambetrafekafrafeperafe
aleflamedzerowidthnonjoinerzerowidthjoinerlefttorightmarkrighttoleftmark	afii57388	afii57403
afii57407	afii57409	afii57440	afii57451	afii57452	afii57453	afii57454	afii57455	afii57456
afii57457	afii57458	afii57392	afii57393	afii57394	afii57395	afii57396	afii57397	afii57398
afii57399	afii57400	afii57401	afii57381	afii57461	afii63167	afii57459	afii57543	afii57534
afii57494	afii62843	afii62844	afii62845	afii64240	afii64241	afii63954	afii57382	afii64242
afii62881	afii57504	afii57369	afii57370	afii57371	afii57372	afii57373	afii57374	afii57375
afii57391	afii57471	afii57460	afii52258	afii57506	afii62958	afii62956	afii52957	afii57505
afii62889	afii62887	afii62888	afii57507	afii62961	afii62959	afii62960	afii57508	afii62962
afii57567	afii62964	afii52305	afii52306	afii57509	afii62967	afii62965	afii62966	afii57555
afii52364	afii63753	afii63754	afii63759	afii63763	afii63795	afii62891	afii63808	afii62938
afii63810	afii62942	afii62947	afii63813	afii63823	afii63824	afii63833	afii63844	afii62882
afii62883	afii62884	afii62885	afii62886	Odotbelow	odotbelow Ohookabove
ohookaboveOcircumflexacuteocircumflexacuteOcircumflexgraveocircumflexgraveOcircumflexhookaboveocircumflex
hookaboveOcircumflextildeocircumflextildeOcircumflexdotbelowocircumflexdotbelow Ohornacute ohornacute
Ohorngrave ohorngraveOhornhookaboveohornhookabove Ohorntilde ohorntilde Ohorndotbelow ohorndotbelow
Udotbelow	udotbelow Uhookabove uhookabove Uhornacute uhornacute Uhorngrave
uhorngraveUhornhookaboveuhornhookabove Uhorntilde uhorntilde Uhorndotbelow uhorndotbelowglyph882glyph883
Ydotbelow	ydotbelow Yhookabove yhookaboveYtildeytildedong	tildecomb    @        C          C 
  J       , N        z        †        ’       / ž     Í     Û    ù    
       #    9    A    Y    e  	   †  	    	  
 	  X  	  u  	    	  ¥  	  ^½        )    G    "Y 
  {    ƒ    ›     «    Ë    "Ý    ÿ          
 )    G    $[            «    $¿    ã    í   
        #    -  $  G  $  S  -  o  -  y    “    ¡ 
  ¿    Í    ë    ù        Typeface and data © 1996 Microsoft
Corporation. All Rights ReservedVerdanaBoldMicrosoft:Verdana Bold:Version 1 (Microsoft)Verdana BoldVersion
2.40Verdana-BoldVerdana is a trademark of Microsoft Corporation N e g r e t a V e r d a n a   N e g r e t a t
u n é V e r d a n a   t u n é f e d V e r d a n a   f e d F e t t V e r d a n a   F e t tˆ½Ä¿½± V e r d
a n a  ˆ½Ä¿½± T y p e f a c e   a n d   d a t a   ©   1 9 9 6   M i c r o s o f t   C o r p o r a t i o n
.   A l l   R i g h t s   R e s e r v e d V e r d a n a B o l d M i c r o s o f t : V e r d a n a   B o l d : V
e r s i o n   1   ( M i c r o s o f t ) V e r d a n a   B o l d V e r s i o n   2 . 4 0 V e r d a n a - B o l d
V e r d a n a   i s   a   t r a d e m a r k   o f   M i c r o s o f t   C o r p o r a t i o n N e g r i t a V e
r d a n a   N e g r i t a L i h a v o i t u V e r d a n a   L i h a v o i t u G r a s V e r d a n a   G r a s F
é l k ö v é r V e r d a n a   F é l k ö v é r G r a s s e t t o V e r d a n a   G r a s s e t t o V e t V e r d
a n a   V e t H a l v f e t V e r d a n a   H a l v f e t P o g r u b i o n y V e r d a n a   P o g r u b i o n
y N e g r i t o V e r d a n a   N e g r i t o>;C68@=K9 V e r d a n a  >;C68@=K9 T u n é
V e r d a n a   T u n é F e t V e r d a n a   F e t K a l1 n V e r d a n a   K a l1 n K r e p k o V e r d a
n a   K r e p k o L o d i a V e r d a n a   L o d i a N e g r i t a V e r d a n a   N e g r i t a N e g r i t o
V e r d a n a   N e g r i t o N e g r i t a V e r d a n a   N e g r i t a G r a s V e r d a n a   G r a s
endstream endobj 281 0 obj <</Length 40096/Length1 40096>> stream     €  @cmapèM‹‹   Ì  Œcvt L¢A  X
˜fpgm7QÑ)  ð  öglyfvLä è  MheadÌé™  Xx   6hhea;	Ð  X°   $hmtxÉr>  XÔ ôlocaO{c  fÈ  ümaxpøâ  mÄ
prepyeØÿ  mä  ãpostÑÆm°  pÈ  &Hname)V™D  —                                            


 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`a
bcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ
Ð ÑÒÓÔÕÖ×ØÙÚÛÜÝÞß r   „ €   ~’¡°ÿÇÉÝ	#~ŠŒ¡ÎO\_‘…ù   " & 0 3 : < > D  ¤ §
¬!!!!"!&!.!^""""""""+"H"`"e%¡%«%Ê%Ï%æðð ûÿÿ      ’ ¯úÆÉØ 	#~„ŒŽ£Q^€ 
    & 0 2 9 < > D  £ § «!!!!"!&!.![""""""""+"H"`"d%¡%ª%Ê%Ï%æððûÿÿÿã  ÿ ¦ ™ÿŠ  þ  ÿL xÿAÿ(ü 
þ    ýÙýØý×ýÖý¦ã        à…à•á	à„àùáVàwà·  à  à8à+á#ßjßyàhà<Þ–Þ¢Þ‹  Þ¦  ÞtÞqÞ_Þ/Þ0ÛžÛ–ÚîÛsÛ]¾  ¾    ‚
8  8          8  Bh            ²dhv                j  j                    X  X
D      £ „ …| – æ † Ž ‹  © ¤  Š  ƒ “ ð ñ  — ˆ Ü ï ž ª ó ò ô ¢ ¬ È Æ ­ b c  d Ê e Ç É Î Ë Ì Í ç f Ñ Ï
Ð ® g î ‘ Ô Ò Ó h é ë ‰ j i k m l n   o q p r s u t v w è x z y { } | · ¡  ~ €  ê ì ¹DE û üFGHI
ý þ ÿJKLMNO	 PQ ö ÷RSTUVWXYZ[\]^_`a ø Õ89bcdef gh à
áij:klmnop ¯ °qrst ù ú â ã !"uvwxyz{|#$%&}~€‚
º'()* ä åƒ Ö ß Ù Ú Û Þ ×
ÝžŸŠ ¡¢¤¥¦§¨+©ª«¬,­®¯°±²³´µ¶·¸-¹º»¼½¾¿ÀÁÂ.ÃÄ/0ÅÆÇÈÉÊËÌÍ
Î:ÏÐ12Ñ3ÒÓÔÕÖ×ØÙ]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ
„…†‡ˆLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopq‘’tuvwxy ± ²84 µ
¶ Ã“ ³ ´ Ä ‚ Á ‡ õ•z ¼ ™ í Â ¥›œ;<=>?@ABðÑ|]Ý   ÿçÿáþxþdþY”    – ª ¹ Æ Î         ¼ Â
v ² À Ë              ” ¦ Ì Ú ï         ˜ ž « °              ˜ ž ¤ © ® ³ º Ã   ˆ ‘ ˜ ¥ ¬           o ‡  ›  
Ó       ÃÂ     é ÑsŽ  , D \ s ~ † ² ÈL  = D P \ r x ’ ² ¹ È                   = V ] j n ± ¹ Á     *
= T d j ± ¹       q z ‰ ¡ § » o z ‡ ‘ š                   !! t å ¹ Ê•Æ ¬ § … Ñ   ]     ÿá  þdÿõ
bô¢‘ ¯j L@UT76&% , °%E#E#ahŠ Eh Š#D`D-,KRXED!!Y-,  EhD °`
E°FvhŠE`D-,°+°%E°%Ej°@‹`°%#D!!!-,°+°%E°%Ej¸ÿÀŒ`°%#D!!!-,± %EhTX°%E°%E`h °%#D°%#D°% Eh
Š#D°%Eh`°%#DY-,°% Eh Š#D°%Eh`°%#D-,KRXED!!Y-,F#F`ŠŠF# FŠ`Ša¸ÿ€b# #Š±KKŠpE` ° PX°a¸ÿº‹°FŒY°`h:-,
E°%FRX?!Y-,KS#KQZX EŠ`D!!Y-,KS#KQZX8!!Y-,± B±#ˆQ±@ˆSZX¹   ˆTX²C`BY±$ˆQX¹   @ˆTX²C`B±$ˆTX²
C`B KKRX²C`BY¹@  €ˆTX²C`BY¹@  €c¸ ˆTX²C`BY¹@  c¸ ˆTX²C`BY¹@  c¸
ˆTX²@C`BYYYYY-,°CTXKS#KQZX8!!Y!!!!Y-           ·  /ÍÝÍ /ÍÝÍ10!!%!!  ú€ û  ú €   #
Ñ   a@U	 ]U+]¸ÿÝ´U¸ÿì´U¸ÿú´

U¸ÿØ´U¸ÿì@ U/]+++++äý+ä] ?í3/?10##53ªÖÌÌÑûÉ7ú/Ó  ¨Ñ   &@	@	, @ 
		,/í3]/í] ?<3/<10###+„+¨+„+ý½Cý½C   ›þ—ˆ( , 3 : ¼@}~pv p,z6++# 5 <<$5+C
		JL$C+ZS S3Z5ke e)c+j0d:@	78.""&G1-'74   G <<!!4   1 ?	O	
		-&7	0@p/]3í92/]9/í/]í9/]
		/33í///]9í33/99/+10]]#.'53.'.54673#.'%4&'>ˆòÄv„èUb.4‹O(D£Ž
		éÑveÔHK£…F•£ýÔk’l u„x|›Íþ–e1'Æ5!±)¥y”Ìþò,Ä.G	þQ œèeZ[\þX^Wþbb  µþd
		 V@C		((OHHO__ooxxz0    U		Uˆôí++3/]<]
		??10]#&73å±ÄÄ±åQ“?<KI><šMþdËà--àË I¿{þØ¤«þä€{ÇE   “þdí 
		j@9&&&&G@@GPP``y vppvu ?¸ÿô´ U¸ÿô@		U U
		’ö+í++3/]<] ??10]#5667654'&&'53íÄ±åM›;>IJ=?“Qå±Ä<þÓþ Ë EÇ{€«¤({¿I Ëþ   §vq  @
		O@	7¸ÿÀ@X	7[[TTkkdd{{ss OP   @O	
		 (	p/]3í92/]99/]99]
		?3]3/]39/3/310]++]%#'-73%q@þ–þ—A}þƒAjk@þ„wnÕþ˜hÖnÏÏnÕgþ™ÔnÍ   Ò ºý 
		9@#¬T¬ @ 0 @  « €*«@/]<äý]<ä]] /]<äý<ä10!#!5!3!ºýß¦ýß!¦!<ýß! !ýß  “þŽ?
		 5@&*+5 9E HU Yd t ÅV  /]3/ ô2/10]	#?þæ’®ýq   ™1	æ   @BO
		O_ _  /3/] /]í10!5!	ýp1µ   ý  ì   ¶V -¸ÿè@ U/?/]+í ?í10!#3ìïï ÿâþÐ\
		 6@% %8 I DVgw† /   /3/ ?/]10‡í]‡À	#\ý3­Êø¼D   ‰ÿáï  #
		‡@"694;;4EIDKKDI	!I ¸ÿô¶U! ¸ÿð´U ¸ÿô@U U ž%%%U!¸ÿð@U
		UU˜$ö+++í+]ö+++í+ ?í?í10]! ! 6654&'&&#"326ûþøþô÷ú
		÷þù#$#y_^{$"$!yd^|éþoþ‰|Š{þüµQÛš˜àNMNNOJîŽœÒSNRN    <Ö 
		ˆ@5FHU U ?opU¸ÿà@U		U¸ÿô@UU

U

UU/++++++++]3í++92/]/3] ?ý2?3/í10!!5!!52676673!<üÚ6þÊ?%.5›0˜æˆMAúÂ  ¡  ‘ð
á@QP`$;8 5??9KH EOOI_]][	V_^]__jdebopt%¸ÿè´U¸ÿè@?U
-/0@@U@ UJJ!U		UU¸ÿô@UU ž"""™!ö2/]ö2/+++++í9
?ý2?í3/++]10++]]!!56676654&#"#56632!‘üiÓ[ÀŽ™‰[Ôe Gíoå+*'iKkäc!ÑZ´YºÛtƒ@BÒ#:Ý½U“B>xIiÅT 
§ÿá|ð = ¸@Ž//)&/)<<51"4/JEC"C/VYYU/jf/j<xv/t5{<4:D:;:I----)J	1  

J #!7U7

U7U7.!.:7UU ???š>æ]æ++9í///+++í
?í3/]?9í3/]/ý99]10]#"&'5332676654&'&&##532654&'&&#"#566320>JCKËy|ðMUæk?Ž,.-3--€JZF˜
µ.)+b>_Ö_ Gíom¦CHJ¯w0|Í+‚gfª?FC;#Ñ8J*),jQPi¦z6QD>Ñ#;(,0ˆ[|¹3  M  ³Ñ
 
 à@!  $ 4 D p U H I¸ÿÀ@U? O  ¸ÿô´U¸ÿó@U
	
O¸ÿä@U U¸ÿú´

U¸ÿî@2U?&UU		UUUU/++++++]3/++++]933í++99]/]
??9/+<ý29910‡ýÀ+]##!533!³ÝÀý7Ñ¸Ýþcý¿£þ]£æHür ý`   ‰ÿá§í " 7 •@8  9%3137I%B1C7_V P
P!e!u1)IJ5I ,/#! 	 ¸ÿî´U ¸ÿô@U U ¸ÿì@

U œ999/!	¸ÿô¶U	˜8ö+í]æ++++9í/99 ?í?9ý2//í910] #"&'&5476$32#&&#"
66324&'&&#"326§þÕÙn´EV]U]X¹;P) q;×ÿ T£k_‘LXYË7?.p=U’MA9.k?‘¦ããþáDCSÁÆ2wq

¿þóå35#5=º]z- (*)ž·5,)± Z  I]   %@VV - 		U /]+<ý< ?í?í10#3#3Iïïïï@û£
 æþŽ’]   L@7  *+59EHUYdtÅVV?O - /]ý2/]3/
ô2/?í10]#3#IïïIþæ’®@üÀýq   þ M€Ë  _´s, ¸ÿâ@& 7 7 /   @0@  @P/]3/99]]
/]3]/++10KSX@TT  ‡ý‡ýÀY]%5€û~‚ürŽM|´þuþu   õj—®   5@ TT@	0	@	/ @
  @/]3/]99]] /]3í/í10!5!!5!—û^¢û^¢ ý¼    MŽË  a´|,¸ÿâ@( 7 7/@0@
/0@/]3/99]] /]3]/++10KSX@TT ‡ý‡ýÀY]55Žû~Žür‚Nýÿ´‹‹´ýÿ     íï 
i@G""$5OOOD\Tiidttp		4U +			    /3/]9í/]í3/í
?í3?ý2/99]/10]]#6676654&#"#56632#53íF98’R³A—0:@™ylÁ8 F×`×ùþuÌÌsb™;9d/á1%X-4oVqoD#Ì+ÑúâÓ  
^Ñ  Ä³@	¸ÿø´U¸ÿø´U¸ÿô@vUJE ‡  ‡|s4 @U @

U0 @ p 
	
z	 $ 9 B Z j t   n +6MUe{dæ]]ö/]9] ?]<?99/]++í10]‡ý]ÀÀÀ‡ý]ÀÀÀ]+++
]!#!#!^Ó’ý|’É|þûþúŸþaÑüxÛý%  È  +Ñ  $ 3
@'UV,4¸ÿÀ@U4-4,¸ÿô@U U¸ÿò@

U&

U U% U ¸ÿæ´U ¸ÿè´U ¸ÿò´

U ¸ÿä´

U ¸ÿè@U q55@5,U¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿñ´

U¸ÿñ¶Ul4ö++++++++ý2]ö++++++í9/+++++9í
?í?í9/+í9910]#!!24&'&&##!267664&'&&#!!26766+TGTÉ›ýð¹£¢JRJlZ—®þ³$(/†cì
]n//'6G0‰bþÉ‚¦584Êoª7B8Ñ&+‡^j•-Ë6J þR_ýšZj%ýÖ$'d   sÿåFì * o@V 	%6C[X
X[[(`apvp4**&4  q,,,,/,?,o, U		Uh+ö++í]]ö<
?í3/?í3/10]%#"$'&5476$32#&&#"32673F7YH=V¢þ÷b`lhb_
¤xï’{òŠqµGEMUCF»húml*[a_%Â¸"daf:Iëg^IMKå–âGJGbb  È  ²Ñ   ¼@#9Iih 44v  U U
¸ÿâ´U ¸ÿô´		U ¸ÿê´U ¸ÿô@

U t/@`U¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿñ´

U¸ÿñ¶Ulö++++++++í]ö++++++í]
?í?í10]#!!24&'&&##326766²±“fûÍþˆtÚY˜ªÏzyXÆŠººÕYooçËþ¶[?8Ñ?7_þÄÖ¯ðE2'ûƒ*9Gè   È  Ñ  ·
5 ¸ÿÀ@$U5 5  s  	U¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿé´

U¸ÿé¶Ulö++++++++ý2]ö<]< ?í?í9/+qí10!!!!!!!ü+ÕüñüñÑ°þh°ý×  È  Ñ
›²5¸ÿÀ@U5 O ¸ÿÔ@

U dUU¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿà´

U¸ÿì¶Ul ö++++++++ý+2]ô+2/] ??í9/+í10!!!#!ý‡ýyÆ·!þ\°ý3Ñ   sÿã¢ì $ Ê@;
!5IAQeectt"5@###44 v	""	!¸ÿþ@		U!l U U ¸ÿö´U ¸ÿä´		U
¸ÿê´U ¸ÿú´

U ¸ÿû@#U u&&@&	U			U	

U	h%ö+++í]ö+++++++í+39//] ?í?í3/9/]í10]%#"$'&5 !2#&&'&&#"  !267!5!¢zþß‡®þÞfgp¡l
™v9E¯oúþÝ0`¿HþqSn8S``a#Ãe=IëN)þ¿þîþßþ¿&m®  È  ;Ñ  â²5¸ÿÀ@U  	 ¸ÿÀ´

U ¸ÿú´U ¸ÿô´U ¸ÿæ@U 		U ¸ÿê@$

U U 

U U x  @ P ¸ÿÒ´U¸ÿü´U¸ÿÚ@U		U¸ÿê´

U¸ÿî´U¸ÿî´

U¸ÿî¶Ulö++++++++ý2]ö+++++++++ý2 ?<?<9/q+í10!#!#3!3;ÆýÆÆçÆÙý'Ñý¸H  ‰  ÕÑ  e@#	2
2 m Z ZUU¸ÿÞ´U¸ÿä´		U¸ÿþ´U¸ÿî¶

Umö++++++ô2ýô2æ ?ý2?ý210!!53#5!#3Õý´ÃÃLÃÃ˜¡˜˜û_  ,ÿëêÑ  q@j|34	 ¸ÿâ´U
¸ÿú´U ¸ÿî´		U ¸ÿî´U ¸ÿÚ@

U 

U U weæ]ö+++++++í3/ ?ý2/?í10]#"&'533267665!5!êïÉ0 6)x?\mþÅƒÄÔ¹*'(tLež  Í  uÑ
	 ù@	V\		(	8	J	h	Š	Ø	 *+	99	5II	E\er yˆÈ³  	³  „ 
	

 0 @ P  n @ 		UU¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿò´

U¸ÿò¶Ulö++++++++ý+2]ö]]2/99 ?<?<9910]‡ÀÀzýÀ‡zý]À]qr!!#33uþÿý³”ÆÆÓðýg—žþÑü÷	ýD
 È  vÑ  u¶5 ¸ÿè@U  U¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿé´

U¸ÿê¶Ulö++++++++í]3/+ ?í?10!!3!vüRÆèÑúß  È  öÑ I@[V 886 o`o` pp U	V Zdtu
 	 @U@		U@

U DT	 ¸ÿú@ U U ¸ÿô@MU U 		U U 

U 

U U xP		UUUU¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿê´

U¸ÿî¶Ul ö++++++++í+++]ö++++++++í+9 ?<?<9/]+++CTX´4j]YCTX²d]Y910]r
]r!###!!öÆþbvþe¹€ü—iúýÑüÃ=   È  8Ñ
+@@4EQaqv4DSk`pZU¸ÿø´		U¸ÿô´U¸ÿú¶U ¸ÿô´U
¸ÿô´U ¸ÿâ@EU 		U U &

U 

U U x@		UUUU¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿò´

U¸ÿî¶Ul ö++++++++í+++]ö++++++++ý+++99 ?<?<9910rq]] ]!##!38õý>¹3„¹4úÌÑû@À  sÿáÚð  #
¾@"  WWS_X X_S¸ÿð@U	Uv	y4!4 ¸ÿü¶U¸ÿü´U¸ÿæ´
U¸ÿâ´U¸ÿð@4

Us%%%%?%UU		UUUh$ö++++í+]]ö++++í+ ?í?í]++10]#"$'&5476$32
#"  32 [acY\û¡þÿZZa`\Xš ÿGþüáãþýÞÞ&dþÞ¸¸þÝaefhcc ¹¶!gbhiýa";þÅþÞþÛþÉ7   È  –Ñ  
Ü@0:=KKPTe4 	4 	!!  0 @ p  ¸ÿô´U ¸ÿø@		U U ¸ÿð´

U ¸ÿè´

U ¸ÿê@U o!!?!	U	¸ÿü´U	¸ÿÚ@U			U	¸ÿî´U	¸ÿê´

U	¸ÿè´

U	¸ÿå¶U	l ö++++++++ý2]ô++++++]í]
??í9/]í10]###!24&'&&##326766–E>MÒ ÆÆ”†ºHU]Î670{^Ä§x–//'c©>MMýÕÑ-09ª‡Mr$ý­+/0j  È  ˜Ñ
  û@S-:9EHHZVYoi` e~u³  4@

U@

U@4!!@!  ¸ÿø@		U U


U U

   ¸ÿê@

U 	U U¸ÿü´U¸ÿÚ@U		U¸ÿî´U¸ÿê´

U¸ÿñ¶Ul ö+++++++2ý+2/+]99/++++]í]
?<?í9/]++í910‡zýÀ]!!!#!24&'&&##326766˜þÿþþéÆ¡‡´HQ[¢Ža-4+vPéÈ^Œ1-+Pý°Ñ#-3›w¡Ù7£@c"ýÎ!
-*m   †ÿåì 0 ¹ /ÿô´U-¸ÿô´U.¸ÿô@’UUUUU U	
#)($$/96856*JEIEJ'D*XUUU-kfef+`/{pp t*t-†#	@7@7 (!!%4

4 !(		U¸ÿð@

U !	 ¸ÿæ´		U ¸ÿð@U t22p2	j1æ]æ++99í/++í/ ?í3/?í3/9CTX@XW(hg(yv(‰†(—™(
]Y10++]++++++++#"$'5332654&'&&'&&54$32#&$#"QIPÕ–¡þÿ…q(‚¸ÍacK¯bÆ¿<óeUþë‘ŸÁ`y@ìR¦¨
©Wª;@H<;ø^fŠsc^*Ë£»ï<,êH_„h]j(,²      îÑ  s@5		O	 [		U¸ÿö@


U[O¸ÿê@UU¸ÿê´		U¸ÿò´U¸ÿê´

U¸ÿÿ´U/++++++]ô+ý+ä] ??ý210!#!5!îýìÆýìî!úß!°   ²ÿá)Ñ  Ì@##==	LL	ww 4 ¸ÿÀ´

U ¸ÿø´U ¸ÿê@U 		U U ¸ÿò@

U


U U v@¸ÿÜ@UU¸ÿæ@U		U¸ÿö´U¸ÿð´

U¸ÿô´

U¸ÿô¶Ukö++++++++í]ö++++++++í
?í?<10]#"&'&&5332676653)GQMÎ‰ŒÐGQGÆ!',—jk–-'!ÆV¢ñPLFJHRè©{ü{yŒ9ABAB9“mŠ    ^Ñ 
Œ@fGHW†  W†DKXs| uE J $ : Z j t 
n+5Ue{dæ]]]ö]99] ??]9910]‡ý]À‡ý]À]!3^ýâþøýâÔÓÓÑú/Ñúâ  D  8Ñ  Â@—uz
  ,# 7	MB X_XW	P Whmhg	` g{s   	  &6G
)9H   & 6 G P  f 	)9H_fö]2ö]29//]]] ??910‡í‡í‡í‡í ]]
##38ýþåþjþ`Øþä‘šÑý ýeý›èéý£]    æÑ  Ô@\,,(5@@@Php '(VYej 
      O   [		U¸ÿâ´U¸ÿî´U¸ÿþ´U¸ÿè´		U¸ÿð´

U¸ÿú´

U¸ÿú@U[O¸ÿê´

U/+]ô+++++++í+9ä] ??9]10]‡í‡í] ]#3æýôÆýòÛ—›Ñü¼ýsxYýfš   ~  Ñ
Y@6&6FVfv³55	si æ]æ99/99/
?ý2/?ý2/10‡zí]‡À!!5!5!!ûv‘ü‘Rüf°¸i°³û’  ïþx÷  E@ RR   U		U

U¸ÿÞ´U¸ÿî´U/+++í++3/< ?í?í10!!!!÷ýøþ¦Zþxœù‚  «þx³  ]@	RR¸ÿò´ U¸ÿô¶
U ¸ÿö´U ¸ÿð@

U U U ¸ÿú·		U  /<3/+++++í++ ?í?í10!5!!5!³ýøZþ¦þx~   ºªÒÑ  G@4;3KE_Po`p
i{?_o   O  /3]/ ?3/]9910]]#	#3ÒÆþ9þ:ÅM~¬sý‹'   hÿáx & 3i@Y #
#+U,U-UYQ\,i`o-{ zp{, (=0@ O? 1A '5@		U¸ÿô´
U¸ÿô´U¸ÿô@U  U U ¸ÿæ@U 		U 

U ¸ÿü´U ¸ÿà@U U ¸ÿô@		U 

U ‘555?5.¸ÿø´

U.¸ÿô@ U.U.¸ÿú@7UU

U		U

UU		UU


U…4ö+++++++++í+++]æ++++++++++9ý++++22/]
??í?í3/]9/]í910]+++]!#5#"&54676$754&'&&#"#56632326»U(/zR—Òmef¤-*(p=J¶a
7Ðev¯@?B»VéDQdtwc¤w=È›-- @T'%¿$'/.’lþ7aU`aM  ¹ÿá   @)45;0 DEK@ Wg{
B@ ¸ÿô´U¸ÿô¶U ¸ÿð´U ¸ÿð´U ¸ÿô@

U U ¸ÿì´		U ¸ÿô´U ¸ÿó@)

U ""?"			U	U			U	U	¸ÿÞ´U¸ÿâ@U		U¸ÿî´

U¸ÿö@U		U¸ÿð´U¸ÿï¶

Uˆ!ö++++++++ý++++22]ô+++++++í++
??í??í9910]#"&'#366324&#"326OCGªf_ŽE°¼O²oÆåÂ„“R¨HPsIœ±7ŒàLOO-&4ýÔASþÐþæÈÏG8ý€$Í  
iÿçów ! µ@L#O#+"*$:5:5IO DOAYUiezs?!!?	#@U#@U U ¸ÿÞ´		U
¸ÿÞ@.

U #U	

U	U	U			U			U	¸ÿø¶

U	…"ö++++++í+ö+++++< ?í3/?í3/10]]%#"&'&&5 32#&&#"32676673ó^©_yÊHIP-÷`¹M V·W ¹µ¤9v/)H
F-2GHHÜ“86'ÑCH×ÐÊÙ/  lÿáC   @%<08 OBH Xhp	AB ¸ÿô´		U¸ÿô´U¸ÿô@
U"@U ¸ÿö@#U U U 		U *U


U ¸ÿî@-U U 

U ’""?"UUU¸ÿþ@+U		U		UU

UU

U…!ö++++++++í++]ö++++++++++ý+++22
?í??í99?10]!#5#"46766323&&#"326C¼Q°gÈëQEDµaXˆK¼¼LxGž°ˆ–P¤uFN4ŽÞNLP%'äúÿ"ÜÊÇÏG   jÿæ`|
  È@'&+ 0; <CK KZ Pj `x z<=¸ÿè@U?	!@		U!@U¸ÿö@ U  U ¸ÿô@D

U !!!?!U UU		UU

U U

U… ö++++++ý++2]ô++í+++3/ ?í3/+?í9/í10]!32673#   32'&&#"`üÉ>64Vrç1
_ÆmþêþÈ+ôâõ·“–—³g™100[,Í(6-Bþøó*”¢²„  D    Ç@g@U@

U9u  ? >  	@			 		UU		UU

U @ 7U U		U¸ÿö@U.

U¸ÿî@U		U¸ÿû@ U

U‰ö++++++++++222ý+++++2/9//] ??3ý2?ý2/10]++#&&#"!!##5354632 d&ymSþ³¼Æ»?e*^
kŒ&žüA¿ž%ÇÕ  lþYC| # 0/@-=>*2,:0D	KL*B,K0[]Zjlj|p "!(@¸ÿÀ´

U¸ÿÀ@U@ .A!$2@U¸ÿô´		U¸ÿô´U¸ÿô@ U  ¸ÿö@QU U U 		U *U


U U U 

U ’22?2+U+U+U¸ÿþ@%U		UU

UU

U…1ô+++++++í++]ä+++++++++9ý++++22/] ?í?í3/++?í99?10]%
!"&'5332676655#"467663273&&#"326CþþþôY©R
.Èd`~##U›xÈëQFAº\aƒI°¼K@›²„™R¥þäþöÀ5.)'nDfDC!ÑLGO'(0üÖa"ÐÆ¼Â?  ¹  _ 3@u B
¸ÿô´		U¸ÿô´U¸ÿø´		U¸ÿô¶U ¸ÿê´U ¸ÿü@U U 		U ¸ÿü´		U ¸ÿþ@

U "U ¸ÿà´U ¸ÿú@4		U U


U ‘`		UU		UU ¸ÿÞ´U ¸ÿà@U 		U ¸ÿî´

U ¸ÿö´U ¸ÿê@U 		U ¸ÿñ´U ¸ÿñ¶

U ˆö+++++++++ý++++2]ö+++++++++++í++++
?<??í910]!#4&'&&#"#36632_¼^KM¨M¼¼X¼cµ¾|M‡&*)L;ü¾ýÍIRÚÍ   ¯  ƒÛ   £@D@ 7		’
¸ÿü@,U `		UU		UUU`¸ÿÞ´U¸ÿà@U		U¸ÿî´

U¸ÿö´U¸ÿü´		U¸ÿÿ¶Uˆö+++++++]ä+ý++++ä+æ] ???+í10#53#3ƒÔÔ¼¼Ãú%]  ÿÂþYÛ   Ñ@#
D@ 7>@ O  `¸ÿô´		U¸ÿò´U¸ÿü´		U¸ÿô¶U ¸ÿü@U `
pUU¸ÿÞ@U		U¸ÿä@		UU¸ÿò´

U¸ÿì@		UU

U’ö++++++++++]22ä+ý++++ä/]/] ?ý2/?í?+í10]#53#"&'533267665#5!ÔÔÈ¨(ƒ, _-HX é¥Ãú
ÄÈ³(((qQ„ž   Á  ¯  ú@D(ØÛ		  -/ 0@Tiz  	´   ` p 

 ¸ÿô@(U
 
@ 		UU		UU¸ÿÞ´U¸ÿâ@U		U¸ÿö´U¸ÿî´

U¸ÿæ@U		U¸ÿ÷´U¸ÿ÷¶

U‰ö+++++++++ý++++2]3/+3/]99 ?<??9910‡ÀÀzõÀ‡ýÀ]q!##33¯øþ@z¼¼íýùétþ‹ü/ýü  »  w 
}@'’ 		U U 		U U ¸ÿÞ´U¸ÿà@U		U¸ÿî´

U¸ÿö@U		U¸ÿø¶		Uˆö+++++++]ý++++æ] ??10!#3w¼¼   ¹  | +È@K$)$)D
D&·*¶%%B("@--0-@-P-p- 		U U 		U U
-¸ÿÀ@U-@UUU¸ÿê´U¸ÿô@		U0U

U¸ÿò´U¸ÿð@+		U

Ua%		UU		UU¸ÿö@UU¸ÿÒ@U&U


U¸ÿø´U¸ÿø´		U¸ÿû´U¸ÿÿ@!

U		UU		UU¸ÿÞ´U¸ÿæ@U		U¸ÿö´U¸ÿî´

U¸ÿî@U U¸ÿü´U¸ÿü@

Ua@€/]ô+++++++++ý++++2+++++++++ý++++99ô+++++++++++í++++]]
?<<??<ý299]10]!#4&'&&#"#4&'&&#"#366326632¼ VQOžO¼
VQM›M¼¼X¯crŸ'r¼k¸¯|H†(+,O==ý5|J…(++L;ü¾]|IR`U`UßÈ   ¹  _| )@u B ¸ÿô´
U¸ÿô´U¸ÿø´		U¸ÿô¶U ¸ÿê´U ¸ÿü@U U 		U "U ¸ÿþ´

U ¸ÿà@U U


U ¸ÿø@(		U ‘`U		U		UU ¸ÿÞ´U ¸ÿà´U ¸ÿî´

U ¸ÿö@U 		U ¸ÿê@U 		U ¸ÿñ´U ¸ÿñ¶

U ˆö+++++++++ý++++2]ö++++++++++í++++ ?<??í910]!#4&'&&#"#36632_¼^KM¨M¼¼X¼cµ¾|M‡&*)L;ü¾]|IRÚÍ
 jÿáq|   ú@;44;KDDK?	? ¸ÿø´		U¸ÿô´U¸ÿò@ U@U ¸ÿü´U ¸ÿà@U U
¸ÿÚ´U ¸ÿî´		U ¸ÿö´U ¸ÿú@=

U ?o		UUUU		UU

U¸ÿþ@U		UU

U…ö++++++++í+++]ö++++++++í+++ ?í?í10] #"  32
4&#"326qþèëíþéíëÂª—™©ª˜–«.þïþÄ<=þÃþïÙÓÓÙÒÙ×  ¹þd|   "@%292 CIB Vg~| 
B@	¸ÿô´U¸ÿö¶U ¸ÿð´U ¸ÿÐ´U ¸ÿð@U U ¸ÿò´

U ¸ÿî´		U ¸ÿö´U ¸ÿö@)

U ""?"			U	U			U	U	¸ÿÞ´U¸ÿâ@U		U¸ÿö´U¸ÿî´

U¸ÿî@U		U¸ÿð´U¸ÿï¶

Uˆ!ö+++++++++ý++++22]ô++++++++í++
??í??í9910]#"&'#366324&#"326NGB³dWI¼¼K»jÊáÂŠQ¤KPsI°<ˆáNJQ&(þ,ùu?UþÏþìÊÈF9ý‡$Ô 
lþdC|   @+;=0: LKFJ p	@B	"@U¸ÿô´		U¸ÿô´U¸ÿø´		U¸ÿô¶U
¸ÿö@#U U U 		U *U


U ¸ÿú@Y		U U 

U ’""?"UUU		U		UU

U		UU

U…!ö++++++++í++]ô+++++++++ý+++++22
?í??í99?10]##"467663273&&#"326C¼W¬dÇíSDB²cZ‹H°¼NxF£ª‰“R¤þdKI3ÝKIP('0ü¿x#ÝÂÄÓG   ¹
r]  ¼@ 
 
	  C 	 ¸ÿæ´U ¸ÿð@(

U  @p		UU		UU	¸ÿÞ´U	¸ÿà@U			U	¸ÿö´U	¸ÿî@

U	$U U	¸ÿø´U	¸ÿù¶

U	ˆö+++++++++ý++++2]3/++ ??<ý2/910]#&&#"#36632r *O6W¢K¼¼p«Y1,, M=üç]¥ZK   nÿå×x 3S@W
&	*$2	<$B	L$^]S!V/T2ol` d/e2zt y(t+Šˆ …‡(”š )€""@U""&>¸ÿÀ@U>	!¸ÿú@+
U)U)U)5@U		U U		U¸ÿöµU¸ÿô´U¸ÿô@U ! ¸ÿê´U ¸ÿê´U ¸ÿô@
U U ¸ÿî´		U ¸ÿø´U ¸ÿø@'

U Ž555?5_55U		UU†4æ+++]æ+++++++99í++/+++++í+++/
?í3/+?í3/+]910]]#"&'5332654'&'&&'&&54676632#&&#"×ýÛ|ÏF YÚd|Œ&&l(5“{9:8­kdÍD
HÎcgŽ+*^4+ƒGGB™Ä;#ÓCOPVB""	'—nEz0/71#É5IONE## IJ  >ÿêýž  ²@B+>

?	O Œ 		UU		UU @ 7¸ÿÞ@U U		U¸ÿö´U¸ÿî@

UU		U¸ÿñ@ U

Uˆö++++++++++22ý++++2/ö2] ?ý2/?33ý2/10]%#"&5#533!!32673ý5}1«²¼„þ|MO.d

¸ËRžAþ¿žþXc+(%	   ±ÿáW] @z	B ¸ÿô´		U¸ÿô´U¸ÿö´		U¸ÿô¶U
¸ÿî@U U 		U "U 

U ¸ÿê´U ¸ÿö@3		U U 

U ’`		UU		UU¸ÿâ´U¸ÿæ@U		U¸ÿö´U¸ÿò´

U¸ÿñ@U		U¸ÿñ´U¸ÿõ¶

U‡ö+++++++++í++++]ö+++++++++ý++++2 ??í?<910]!#5#"&5332673W¼_®i°Ä¼VRI­K¼|KP×ÐÕý„Uy+,(L;B 
=  ]  @A&)69FI)9@Q`  ( '8 7J Guz u ¸ÿÀ@$	7  j z 
euU‚æ+]]ô]+99 ??]9910]‡ý‡ý ]]#3þ<½þ?ÌZW]û£]ü‡y  V  6]  ò¹ ÿò´
U¸ÿò@		U U¸ÿô@‡U ,*)%&$+4;DKWXYWmbdj	d ky}rt{	s z  
		@		U	@ U	/ U &U Ž?o ¸ÿà´U¸ÿæ´		U¸ÿú@ UUƒ
ö++++2]æ++] ??9++]10‡ý‡ý]++ ++##336þÝ®þáþã­þÚÄÍ›Â]û£]ü£]üŸaüŸa   <  €]  á@Œ
	''< ;4444;	= L KDDDDK	M ZUZUZ	Uo`i`o	f# ?0O@}p	

  	zu	  ¸ÿÀ@"	7      @ _ U‚ö+]2]]ö]+29]/]
??]910‡í‡í‡í‡í ]]!##33€íþÃþÁÛ´þPí;<ÜþI­þS-0þZ¦ýÚ   =þd]  Œ@A4DP`p
FIX Wy	  I F h ¸ÿÀ@"	7  J j z  		Eeu‚ä]]ö]+9]/
??9910]‡ý‡ýÀ] ]#3ýtÉÐþCÌWZ]úÒ'üÄ<   ]  ã] 	 V@::5JE\T`p
>>	Ž?_o„ æ]ä99/99/ ?ý2/?ý2/10]!!5!5!!ãüz‹ýƒgýrŸ‹5†üÈ   ­þxY %
V@8/:JV#g#u#:J	S? O 

Q$Q @  	  	@/]33<ý<//]<
?í?í9/]ý99]10]#"&=4&+5326=46;#";Y–³ß¦«33«¦ß³–rˆ{š‰‰š{ˆrþxÇ¼•©¿œ¿©•¼ÇŠ~Œ¯‹½77½‹¯Œ~
zþx(  @O O/]í ??10]#3(®®þxœ   »þxg % i@)!51@@z S?%O%%%	Q Q	 	
¸ÿú@

U	 O   ¸ÿúµ

U 'Ö+/]33<ý+<//]<
?í?í9/]ý9910]#"##5326554675&&554&##53233g3«¦ß³–rˆ{š‰‰š{ˆr–³ß¦«3ø¿©•¼ÇŠ~Œ¯‹½77½‹¯Œ~ŠÇ¼•©¿ 
nð*#Ý_<õ      ª~D)    ¸ œÿšþY“   	          þR  ,ÿšûÔ“               }      Ð  Ð  &#¬
¨Œ Ã ›œ •Ð s& ¤¢ µ¢ “ §Œ Òé “¢ ™é ý¢ÿâ ‰ ¡ § M » ‰ š z q¢Z¢ æŒ þŒ
õŒ]    °x | È– s* È È™ È4 s È^ ‰£ ,‹ Ít È¾ Èü ÈL sÓ ÈL s Èx †î  Û ²x é \{ Dì
{ ~¢ ï¢ F¢ «Œ ºÿüTÎ hü ¹+ iü lÄ jÐ Dü l ¹2 ¯ÁÿÂ¼ Á2 »È ¹ ¹Û jü ¹ü lj ¹+ n' >
±¼ =Œ V¼ <¼ =4 ] ­¢z »Œ »x x – s Èü ÈL pÛ ²Î hÎ hÎ hÎ hÎ hÎ h+ iÄ jÄ jÄ jÄ j2
 2ÿë2ÿõ2  ¹Û jÛ jÛ jÛ jÛ j ± ± ± ± »V š Ÿ ‰ ¬] ¹ ‰ö ¹  Ÿ  ŸÐ ªZŒ õà
L s  ¡Œ ×Œ þŒ l" ¾ •Ñ »Œ © q Š] —] yŒ k¤ hÛ ]] q&#Œ ÒŒ †ÿÜŒ óÑ 2( ¦( ®Œ ²x
x L s xÚ j ™  ™¬ÿí¬ –&ÿí&  Œ ÒŒ ¬¼ =ì äÿš  ¢ º¢ Â  D D »é ý&ÿö¬ÿö, •x  Èx
 È È^ ‰^ ]^ ~^ ‰L sL sL sÛ ²Û ²Û ²2 »6 í!-aVŸ2~ F x †+ n{
~4 ]¢z4 å jì ¼ =Ø Èü ¹Œ ÜŒ#V#V ÏV Ï  «  «  Œ <4 sü l^ ‰x †+ n– s+ i– s+ iü
lÿüé ýx Î hx Î h* È. l4  ÈÄ j ÈÄ jt È2 «t È^ »t È« »ü È ¹ü È ¹L sÛ j Èj ¹
Èj ’x †+ nî  ' >î  ' >Û ² ±Û ² ±{ ~4 ]{ ~4 ]ˆ ÈL s iü lÝ j m jø R hÿüÿ#] š
O È÷ ‰é ¯Ø  ä Õu Õœ •– Õ ’Ö ƒÖ ƒÕ ±Ö px Î h– s+ i– s+ i ÈÄ j ÈÄ j ÈÄ j4 sü l4
sü l4 sü l È ¹   ^ ,2ÿò^ _2ÿü^ €2 ^ ‰2 Ž£ ,ÁÿÂ‹ Í¼ Á¼ Át È2 ü È ¹ü È ¹L sÛ
jL sÛ j Èj x †+ nî  ' >Û ² ±Û ² ±Û ² ±Û ² ±é \Œ Vì ¼ =g ¹x Î hà ¤ hL sÛ
]¢Zé \Œ Vé \Œ Vé \Œ Vì ¼ =&ÿíÿÐ ‰¾ ±  «  Œ  Š  ™° aa x   ö  Q      C
2ÿËx | È   È{ ~ È^ ‰‹ Í| ¾ Èü È1 rL s ÈÓ Èa vî  ì { D÷ ³Œ l^ ~ì ü l m ¹2
  ±ö ¹¼ =© l ¹þ ‰2 »¼ Á¼ = ¹¼ = hÛ j  ¹ i ±¸ 0“ °‚ q2  ±Û j ±‚ q ÈWÿÿˆ È› sx
†^ ‰^ ~£ ,ò Ó È‹ÿÿ‹ Íì  Èx | È| Èˆ È÷  ÈÉ  í Q È È‹ Íà ¾ È ÈL s ÈÓ È– sî
ì  i{ D È² Ž> È\ ÈD  ] Èr Èœ aF È¦ ,Î hê tÂ ¹Å ¹ù 	Ä jb 42 A ¹ ¹¼ Á÷ ’ ¹ ¹Û
j ¹ü ¹F jø ¼ =º o¼ <( ¹Ø Ž ¹ ¹ [ ¹‘ ¹` S¶ ¹Ì CÄ j Å ¹` j+ n2 ¯2 ÁÿÂP P ¹
¼ Á¼ = ¹ˆ ÈÅ ¹  Ë	` È ¹VV ïV æV ³V æV óV Å                t sÛ j ²G ±  	  !  T
6 6%BBB%	6BBBB6x Î hx Î hx Î hx Îÿãx Î hx Î
hx Î hx Î hx Î hx Î hx Î hx Î h ÈÄ j ÈÄ j ÈÄ j ÈÄ j )Äÿü ÈÄ j ÈÄ j ÈÄ
j^ ‰2 –^ ‰2 ¯
L sÛ jL sÛ jL sÛ jL sÛÿåL sÛ jL sÛ jL sÛ jt sÛ jt sÛ jt sÛ jt sÛ jt sÛ jÛ ² ±Û ²
± ²G ± ²G ± ²G ± ²G ± ²G ±ì ¼ =ì ¼ =ì ¼ =ì ¼ =ü l   í Š       d 
IIIIújŸÉç.°µi÷÷˜˜˜˜¾ú?n´›	u	ï  áEéq¹  ­
÷¹e§§Z5‚ttõx»ññ3kkkm,»p ”v5š-Ä4í–
\!!”"Š##Á$$·%F%¤%æ&E&`&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È
&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&
È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È
&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&
È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È
&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&
È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È
&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&
È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È
&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&
È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È
&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&
È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È
&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&
È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È&È   } b  k    / V  ã  ¹ TÿÀ@²)26²
²@²P²p²€² ²°²Ð²à²
À²ð²¸ÿÀ@pµ6DVVOU_UoTŸT¯TQSRSSRJIRFI7GI2HI2I59<?2=?=>?!C?B?RA?R@?R?5223d35454T
45Ð4à4ð4¸ÿî³´%H6¸ÿà³´#6¸ÿî@ ´	6´Hv³†³¸ÿð³³%H6¸ÿú@ÿ³
$6³H‰ˆplpxœßž@6@œ6@—6@–6†…„…Ž„Ž/Ž€…€ˆ‘…‡ˆ@‚	6rr@q	6m È Ç?ÆïÆ
Å@Å b bb@a a[-,%+9*)! C <ÉEG<29Hp@AC6*  ÃKÂK ÀK
ÀK¼K½K¹KºK¶K ·KÃÂ*À¿*½@V¼!º¹!·¶!ÂÃÄ ¿ÀÁ ¼½¾¹º»¶·¸¼€¼@¹€¹¶?¶O¶¶¶/¶?¶o¶¶¿¶Ï¶ÿ¶ 7
 P¸ÿ…°–KRX°€Y¸ KTX°°ŽY°KSX°°ŽY
+++++stss++++++++++++++++++++°E°Eha°#Ds°E°Eha°#D°E°Eha°#D+°Eh°#D+s++++++++++++++++sssssssss+s+s++++
+ss++++s++++ u++++++++++++++++++++stsst+st++        ÿL x                    }  	 

!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|
½.nullnonmarkingreturnspaceexclamquotedbl numbersigndollarpercent	ampersandquotesingle	parenleft
parenrightasteriskpluscommahyphenperiodslashzeroonetwothreefourfivesixseveneightninecolon
semicolonlessequalgreaterquestionatABCDEFGHIJKLMNOPQRSTUVWXYZbracketleft
backslashbracketrightasciicircum underscoregraveabcdefghijklmnopqrstuvwxyz
braceleftbar braceright asciitilde	AdieresisAringCcedillaEacuteNtilde	Odieresis
Udieresisaacuteagraveacircumflex	adieresisatildearingccedillaeacuteegraveecircumflex
edieresisiacuteigraveicircumflex	idieresisntildeoacuteograveocircumflex
odieresisotildeuacuteugraveucircumflex	udieresisdaggerdegreecentsterlingsectionbullet	paragraph
germandbls registered	copyright	trademarkacutedieresisnotequalAEOslashinfinity	plusminus
lessequalgreaterequalyenmu1partialdiff
summationproductpi1integralordfeminineordmasculineOhmaeoslashquestiondown exclamdown
logicalnotradicalflorinapproxequal	increment
guillemotleftguillemotrightellipsisAgraveAtildeOtildeOEoeendashemdashquotedblleft quotedblright
quoteleft quoterightdividelozenge	ydieresis	YdieresisfractionEuro guilsinglleftguilsinglrightfifl
daggerdblperiodcenteredquotesinglbasequotedblbaseperthousandAcircumflexEcircumflexAacute
EdieresisEgraveIacuteIcircumflex
IdieresisIgraveOacuteOcircumflexOgraveUacuteUcircumflexUgravedotlessi circumflextildemacronbreve
dotaccentringcedillahungarumlautogonekcaronLslashlslashScaronscaronZcaronzcaron
brokenbarEthethYacuteyacuteThornthornminusmultiplyonesuperiortwosuperior threesuperioronehalf
onequarter threequartersfrancGbrevegbreveIdotScedillascedillaCacutecacuteCcaronccarondmacron
overscoremiddotAbreveabreveAogonekaogonekDcarondcaronDslashEogonekeogonekEcaronecaronLacutelacute
LcaronlcaronLdotldotNacutenacuteNcaronncaron	Odblacute
odblacuteRacuteracuteRcaronrcaronSacutesacuteTcedillatcedillaTcarontcaronUringuring	Udblacute
udblacuteZacutezacuteZdotzdotGammaThetaPhialphadeltaepsilonsigmatauphi underscoredbl	exclamdbl
nsuperiorpesetaIJijnapostropheminutesecond	afii61248	afii61289H22073H18543H18551H18533
openbulletAmacronamacronCcircumflexccircumflexCdotcdotEmacronemacronEbreveebreveEdotedotGcircumfle
xgcircumflexGdotgdotGcedillagcedillaHcircumflexhcircumflexHbarhbarItildeitildeImacronimacronIbrev
eibreveIogonekiogonekJcircumflexjcircumflexKcedillakcedillakgreenlandicLcedillalcedillaNcedillanced
illaEngengOmacronomacronObreveobreveRcedillarcedillaScircumflexscircumflexTbartbarUtildeutildeUm
acronumacronUbreveubreveUogonekuogonekWcircumflexwcircumflexYcircumflexycircumflexlongs Aringacute
aringacuteAEacuteaeacuteOslashacuteoslashacute	anoteleiaWgravewgraveWacutewacute	Wdieresis
wdieresisYgraveygrave quotereversed	radicalex	afii08941	estimated
oneeighththreeeighthsfiveeighthsseveneighthscommaaccentundercommaaccenttonos dieresistonos
AlphatonosEpsilontonosEtatonos	IotatonosOmicrontonosUpsilontonos
OmegatonosiotadieresistonosAlphaBetaDeltaEpsilonZetaEtaIotaKappaLambdaMuNuXiOmicronPiRhoSigma
TauUpsilonChiPsiOmegaIotadieresisUpsilondieresis alphatonosepsilontonosetatonos
iotatonosupsilondieresistonosbetagammazetaetathetaiotakappalambdamunuxiomicronrhosigma1upsilon
chipsiomegaiotadieresisupsilondieresisomicrontonosupsilontonos omegatonos	afii10023	afii10051
afii10052	afii10053	afii10054	afii10055	afii10056	afii10057	afii10058	afii10059	afii10060
afii10061	afii10062	afii10145	afii10017	afii10018	afii10019	afii10020	afii10021	afii10022
afii10024	afii10025	afii10026	afii10027	afii10028	afii10029	afii10030	afii10031	afii10032
afii10033	afii10034	afii10035	afii10036	afii10037	afii10038	afii10039	afii10040	afii10041
afii10042	afii10043	afii10044	afii10045	afii10046	afii10047	afii10048	afii10049	afii10065
afii10066	afii10067	afii10068	afii10069	afii10070	afii10072	afii10073	afii10074	afii10075
afii10076	afii10077	afii10078	afii10079	afii10080	afii10081	afii10082	afii10083	afii10084
afii10085	afii10086	afii10087	afii10088	afii10089	afii10090	afii10091	afii10092	afii10093
afii10094	afii10095	afii10096	afii10097	afii10071	afii10099	afii10100	afii10101	afii10102
afii10103	afii10104	afii10105	afii10106	afii10107	afii10108	afii10109	afii10110	afii10193
afii10050	afii10098	afii00208	afii61352pionenumeratortwonumeratorthreenumerator fournumerator
fivenumeratorsevennumeratoreightnumeratorDontCompressHTMXglyph579glyph580glyph581OhornohornUhornuhorn
hookabovecombdotbelowcomb	gravecomb
acutecombglyph590glyph591glyph592glyph593glyph594glyph595glyph596glyph597glyph598glyph599glyph600gl
yph601glyph602glyph603glyph604	Adotbelow	adotbelow Ahookabove
ahookaboveAcircumflexacuteacircumflexacuteAcircumflexgraveacircumflexgraveAcircumflexhookaboveacircumflex
hookaboveAcircumflextildeacircumflextildeAcircumflexdotbelowacircumflexdotbelowAbreveacuteabreveacuteAbr
evegraveabrevegraveAbrevehookaboveabrevehookaboveAbrevetildeabrevetildeAbrevedotbelowabrevedotbelow
Edotbelow	edotbelow Ehookabove
ehookaboveEtildeetildeEcircumflexacuteecircumflexacuteEcircumflexgraveecircumflexgraveEcircumflexhookabo
veecircumflexhookaboveEcircumflextildeecircumflextildeEcircumflexdotbelowecircumflexdotbelow Ihookabove
ihookabove	Idotbelow	idotbelowglyph649glyph650glyph651glyph652sheva hatafsegol
hatafpatahhatafqamatshiriqtseresegolpatahqamatsholamqubutsdageshmetegmaqafrafepaseqshindotsindot
sofpasuqalefbetgimeldalethevavzayinhettetyodfinalkafkaflamedfinalmemmemfinalnunnunsamekhayi
nfinalpepe finaltsaditsadiqofreshshintav	doublevavvavyod	doubleyodgeresh	gershayim newsheqelsign
vavshindot finalkafshevafinalkafqamats lamedholamlamedholamdageshaltayinshinshindot
shinsindotshindageshshindotshindageshsindot	alefpatah alefqamats	alefmapiq
betdageshgimeldageshdaletdageshhedagesh	vavdageshzayindagesh	tetdagesh	yoddageshfinalkafdagesh
kafdageshlameddagesh	memdagesh	nundageshsamekhdagesh finalpedageshpedageshtsadidagesh	qofdagesh
reshdagesh shindageshtavdagesvavholambetrafekafrafeperafe
aleflamedzerowidthnonjoinerzerowidthjoinerlefttorightmarkrighttoleftmark	afii57388	afii57403
afii57407	afii57409	afii57440	afii57451	afii57452	afii57453	afii57454	afii57455	afii57456
afii57457	afii57458	afii57392	afii57393	afii57394	afii57395	afii57396	afii57397	afii57398
afii57399	afii57400	afii57401	afii57381	afii57461	afii63167	afii57459	afii57543	afii57534
afii57494	afii62843	afii62844	afii62845	afii64240	afii64241	afii63954	afii57382	afii64242
afii62881	afii57504	afii57369	afii57370	afii57371	afii57372	afii57373	afii57374	afii57375
afii57391	afii57471	afii57460	afii52258	afii57506	afii62958	afii62956	afii52957	afii57505
afii62889	afii62887	afii62888	afii57507	afii62961	afii62959	afii62960	afii57508	afii62962
afii57567	afii62964	afii52305	afii52306	afii57509	afii62967	afii62965	afii62966	afii57555
afii52364	afii63753	afii63754	afii63759	afii63763	afii63795	afii62891	afii63808	afii62938
afii63810	afii62942	afii62947	afii63813	afii63823	afii63824	afii63833	afii63844	afii62882
afii62883	afii62884	afii62885	afii62886	Odotbelow	odotbelow Ohookabove
ohookaboveOcircumflexacuteocircumflexacuteOcircumflexgraveocircumflexgraveOcircumflexhookaboveocircumflex
hookaboveOcircumflextildeocircumflextildeOcircumflexdotbelowocircumflexdotbelow Ohornacute ohornacute
Ohorngrave ohorngraveOhornhookaboveohornhookabove Ohorntilde ohorntilde Ohorndotbelow ohorndotbelow
Udotbelow	udotbelow Uhookabove uhookabove Uhornacute uhornacute Uhorngrave
uhorngraveUhornhookaboveuhornhookabove Uhorntilde uhorntilde Uhorndotbelow uhorndotbelowglyph882glyph883
Ydotbelow	ydotbelow Yhookabove yhookaboveYtildeytildedong	tildecomb   (æ        C          C      
 J       2 Q        ƒ        Š        –       /      Ì     Ø     è     ô
     	   †  	  š  	  ¨  	  d¶  	    	  (  	  @  	  ^N
   ¬    ¸    È    Ô    à    î              
  (    6    F    R  $  ^  -  l    z    †    ’   
žTypeface and data © 1996 Microsoft Corporation. All Rights ReservedVerdanaRegularMicrosoft:Verdana
Regular:Version 2.43 (Microsoft)VerdanaVersion 2.43VerdanaVerdana is a trademark of Microsoft Corporation N o r
m a l o b y e j n é n o r m a l S t a n d a r dš±½¿½¹º¬ T y p e f a c e   a n d   d a t a   ©   1 9 9
6   M i c r o s o f t   C o r p o r a t i o n .   A l l   R i g h t s   R e s e r v e d V e r d a n a R e g u l
a r M i c r o s o f t : V e r d a n a   R e g u l a r : V e r s i o n   2 . 4 3   ( M i c r o s o f t ) V e r d
a n a V e r s i o n   2 . 4 3 V e r d a n a V e r d a n a   i s   a   t r a d e m a r k   o f   M i c r o s o f
t   C o r p o r a t i o n N o r m a l N o r m a a l i N o r m a l N o r m á l N o r m a l e S t a n d a a r d N
o r m a l N o r m a l n y N o r m a l1KG=K9 N o r m á l n e N o r m a l N o r m a l N a v a d n o A r r
u n t a N o r m a l N o r m a l N o r m a l N o r m a lendstream endobj 282 0 obj <</Length 26284/Length1
26284>> stream     €  @cmapæ‡   Ì  †cvt =FL  T  æfpgmš¶V†  	<  ëglyf¢Ò‰L  (  headÍÁÎ  <
6hhea´	V  t   $hmtxÁ0@  ˜ ôloca   ,Œ  ümaxp°?  3ˆ    prepñ‰i  3¨  6postRMC÷  6à  &;nameØi‹  ]
                                            

 !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`a
bcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏ
Ð ÑÒÓÔÕÖ×ØÙÚÛÜÝÞß l   „ €   ~’¡°ÿÇÉÝ	#~ŠŒ¡ÎO\_‘…ù   " & 0 3 : < > D  ¤ §
¬!!!!"!&!.!^""""""""+"H"`"e%¡%«%Ê%Ï%æðð ûÿÿ      ’ ¯úÆÉØ 	#~„ŒŽ£Q^€ 
    & 0 2 9 < > D  £ § «!!!!"!&!.![""""""""+"H"`"d%¡%ª%Ê%Ï%æððûÿÿÿã  ÿ ¦ ™ÿŠ  þ  ÿL xÿAÿ(ü 
þ    ýÙýØý×ýÖý¦ã        à…à•á	à„àùáVàwà·  à  à8à+á#ßjßyàhà<Þ–Þ¢Þ‹  Þ¦  ÞtÞqÞ_Þ/Þ0ÛžÛ–ÚîÛsÛ]¾  ¾    ‚
8  8          8  Bh            ²dhv                j  j                    X  X
D      £ „ …| – æ † Ž ‹  © ¤  Š  ƒ “ ð ñ  — ˆ Ü ï ž ª ó ò ô ¢ ¬ È Æ ­ b c  d Ê e Ç É Î Ë Ì Í ç f Ñ Ï
Ð ® g î ‘ Ô Ò Ó h é ë ‰ j i k m l n   o q p r s u t v w è x z y { } | · ¡  ~ €  ê ì ¹DE û üFGHI
ý þ ÿJKLMNO	 PQ ö ÷RSTUVWXYZ[\]^_`a ø Õ89bcdef gh à
áij:klmnop ¯ °qrst ù ú â ã !"uvwxyz{|#$%&}~€‚
º'()* ä åƒ Ö ß Ù Ú Û Þ ×
ÝžŸŠ ¡¢¤¥¦§¨+©ª«¬,­®¯°±²³´µ¶·¸-¹º»¼½¾¿ÀÁÂ.ÃÄ/0ÅÆÇÈÉÊËÌÍ
Î:ÏÐ12Ñ3ÒÓÔÕÖ×ØÙ]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ
„…†‡ˆLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopq‘’tuvwxy ± ²84 µ
¶ Ã“ ³ ´ Ä ‚ Á ‡ õ•z ¼ ™ í Â ¥›œ;<=>?   Ñ   Ñ               ]     ÿá    ÿá    ÿá  þdÿõ
                                                  Ñ)              g
Ñ Æ Á ´ Á ´ Ã ¼ · · ® ž Ñ Ç ½ ´ ½ ´ p È ¨ £ ž ‘ ¬ ¢  – ¦ ž ‘ „ Ã   ¯              ‰  á s   V m t  Œ “ Ÿ ¦
G   † 1 8 y Y Y ª ¸ Ñ ö   œ ˆ x o € ‡ Ž ™   µ Ó é ý3<DŸ/s £ ²  ¯_!¢ý ‡ ” ¢ ´ v € Œ° ' 
›°ÿ ‘ › L ”  @<T:9876543210/.-,+*)('&%$#"! 

	 ,°CX±+!!!Y-,°CX±+!!!Y-,°CX°%ò!°
!!!Y-,°CX±+!!!Y-,°CX±+!!!Y-,°CX±+!!!Y-,°CX±+!!!Y-,N° °F#CD°%± Fæ° °° ò!°M°
-,°CXEdj#Ei°Cd``°F#D# °Fð/° !!!!Y-,± C#Ce -, ± C#C-, °F#p±F>°F#p±FE:± 
-,°+°%E°%Ej°@‹`°%#D!!!-,°+°%E°%Ej¸ÿÀŒ`°%#D!!!-,° °+!!!-,° °+!!!-,°C°Ce -, i°@a° ‹ ±,ÀŠŒ¸
b`+d#da\X°aY-,± %EhTX°%E°%E`h °%#D°%#D°% Eh Š#D°%Eh`°%#DY-,°% Eh Š#D°%Eh`°%#D-,°
CX‡!À°CX‡E°+°G#D°GzäŠEi °G#DŠŠ‡ ° QX°+°G#D°Gzä!°GzäYYY-, ŠE#Eh`D-,EjB-,/-,!!-,°%E°%Ed`j°%Eja
°%Ej Š‹e°%#DŒ°%#D!!-,Eh#Eia°%Eja °%Ej Š‹e°%#DŒ°%#D!!-,ŠŠEd#EdadB-,°%C°@T°%C° TZX°% E°@aDY°%C°
T°%C°@TZX°% E°@`DY!!!!-,KRXC°%E#aD!!Y-,KRXC°%E#`D!!Y-,KRXED!!Y-, °%#I°@`° c ° RX#°%8#°%e8
Šc8!!!!!Y-,KPXED!!Y-,°%# Šõ °`#íì-,°%# Šõ °a#íì-,°%õ íì-,F#F`ŠŠF# FŠ`Ša¸ÿ€b# #Š±KKŠpE` °
PX°a¸ÿº‹°FŒY°`h:-, E°%FRX?!Y-, E°%FPX?!Y-, °C°C-,KRX°%°%I°%°%Ia ° TX! C° UXY°@TX C° TXY C°
TX°%¸ÿÀ8YYYY!!!!-,KRXCe8!!Y-,KRXC8!!Y-,!!d#d‹¸@ b-,!°€QXd#d‹¸  b² @/+Y°`-,!°ÀQXd#d‹¸Ub²
€/+Y°`-,d#d‹¸@ b`#!-,´    °&°&°&°&Eh:°-,´    °&°&°&°&Ehe:°-,°CXY-,°CXY-,° +#
<°+-,°(+Š# Ð#°+°XÀ<Y ° -,KS#KQZX EŠ`D!!Y-,KS#KQZX8!!Y-, °%E#E#ahŠ Eh Š#D`D-, °` °@CH#/ <-,
°`F°@#B/°` °dà °à-,± B±#ˆQ±@ˆSZX¹   ˆTX²C`BY±$ˆQX¹   @ˆTX²C`BY±$ˆTX² C`B KKRX²C`BY¹@
€ˆTX²C`BY¹@  €c¸ ˆTX²C`BY¹@  c¸ ˆTX²C`BYYYY-          ·  /ÍÝÍ /ÍÝÍ10!!%!!  ú€ û
 ú €    {  ®  µÖÑ/í /í10!#3lñBñ  ÿ«  íÑ  …@]		 'Vf€	~ #5Ey v@
7   p   @!	7  *:J’p 
	
  /?9/]í]0/]+]3/]3/+1]‡ýÀÀÀ‡ý]ÀÀÀ!#!#!íÉ2ý~ôÑvK]þP£þ]Ñütßý!  F  ;Ñ  $ 3 —@,	
%	3	E	y'u1t2	,---%}p}¸ÿÀ@6	75@549B&6FWv454:µ4,“Ðà`’-’
/í?í9/]qí990æ+]ä+]3/+99í/]í‡.+}Ä<<1
]%#!!24&'.+!267>4&'.#!!267>9aÔ›ýÝW¬£ŸB77’x<*~dâfV€0>B&1(}oþÓƒ…§=ORxA7Ñ
("i@Æ6”tãÓ*7þF$…ýÀ8EýÌ%/£  'ÿáZx  5 Œ@Y //,%/:4/ID/T*f*v* 
55†14114694B1676:))1º7ƒ@7 ˜*3C-O)))%—-4	• ?í/?í3/]9/]í0/+íæ9/+ä+‡.+}Ä‡<<ÄÄ10
]3267#"&54676$7>54&'.#"#7>32#jšïNQTbg[½R$]03~R…¦usq?Ì&##]8UÚD %9ÜeÐÐ
¯»M#!!qTHLQ9œ;›}…·:93)0< 7¼&‚=ý  8ÿá§  # x@U+&=:EFXjs|ypv|  ƒ ¼% 
†$9B&5EVu$%$:¹$ •!– ?í/?í?0æ+]ä+‡ýÀÀÀÀÀôí]1
]#"&'#3>32>54&#"326§fUYÜ…Y›=°g¼€]²m£­þË88hrS²M“@yTh¤ü£þØiny/'7ýÔASÊý‰WÐvwR4ý"&f 
WÿçOw ' Y@			BQb¸ÿà@7—$$— $$¸ÿÀ@ 7)O)_))ƒ»(ôí]3/+3/
?í3/?í3/10+]"&'.5476$32#.'.#"3267>73j£=;@bZW
”b­B)<))d@Âõ‘†?~,1T(WÂ264žigdu6%Ë0þ¸ë˜$4 Í'9  Uÿá*  # …@ZII"jp|##!
†$9B&5EVu$%$: o€% 	ƒ	»$ – • ?í/?í?0öí]3/]q+]ä+‡.+}Ä<<<<1 ]
#7#"&547>32.#"3267*þ˜¼›[ž¹dVUè‚Y–Ap”CIh£:59ivT¯JùìuW=È¿¡lk}&&äý€#!dWOÞhzT2  
Xÿæ‚| 	 ' c@2S`p	˜@ ˜!!— F	T	t	!! …¸ÿÀ@	7)ƒ »(ôí3/+í999/]
?í3/?í9/qí10]>54&#""$5
!2!32673ÀuŽÜ'èþø„¾ÊüÉ¬žnéO)2P>>`¨(kx°ý>ÚÒ3·½«‚V8¡V6Ë  D  ì 
ƒ@Vv†  o@	P	p	   009B& 5 L ] u  : —˜
/?í99?]ý2/0/+]ä+3]3//]9/]]‡ÀÀýÀÀÀ1]#.#"!!##737>32Å `&{{	S$þ³Ú¾Ú$)ï¼?f)e
|‚&–ü9Ç–%ÄØ  :  \Û   P@4 †9B&5EVu	:	@		ž@ 7
/?3/+í0/]+]ä+‡ÀýÀ/í1#7#\-Ô-pþþ¼ÛÃÃþ‚û£]   :  ^  ;@' †9B&5EVu:@ 
/?0/]+]ä+‡ýÀ1	#^þ˜¼hùì  8  P| . Ñ@’ (..&$ -7"7(5*5-E"E(E-XW")$))†
!6Œ¬ì<†–¦Úù †##%""† !  ! !º0_0p0/9!B& 5 E V u  /0/: ¹/•,•&!
/33??í?í0æ+]ä+]ö‡À‡.+}Ä<<‡.+}Ä9/]q‡ÀýÀÀ]1]#>54&#"#>54&#"#3>32>32P
¨¼“LkO°W	¥¼“ dU<”{Á¼¼i³cq„Òf“”f!J&ý+|5Z'LRX;@ý5|>O)[C=Qü¾]|IR`U`U’  Yÿá‚|  # 9@(
ZTjdp—!—ƒ ¼%ƒ	»$öíôí
?í?í]10]#"&547>32>54&#"326‚\TWä˜Çß[VSñÁäþÎ69†zaš86:†{`œÒ–þìfjwãÈ–jfzÜýŒPÒuŒ]QOÔrŠ”\  8
é]  n@ 6FU†  ¸ÿÀ@)	7p9 B&	5	E	V	u		:	¹  •
/??ý2/0æ+]ä+]3/+‡.+}Ä<<1]#.#"#3>32¾ (E1^¹U´¾ÿ¾&…¹U1,*— U<üç]¥]H  ÿåx 9 ˆ@
2253C3_P2`3{u- 7¸ÿà@-7o4+ !!(˜ ˜ ƒ 44 44+ƒ4 ¸ÿÀ@	7
;;;?;;/]3/+99/í/]í ?í3/]?í3/9]10++]"&'7332654&'.'.5467>32#.'.#"•}ÅB*
C4/yE RM'm8upDC@ÆydÇ?( A2+s>}œLN1k2tuIEGÊ>$É1!he59	!}ZNˆ96C2%À ,i[2Cz\M“69@  €ÿê~ž 
Ž@\,<NYl†9+[{B :O O ` p  

   p˜

	— ?ý2/?3í99/]0/]333/3/]+ä]+‡.+}Ä<<<<1 ]!32673#"&5467#733~"þ|x Jd)q #81Š—
‹"K¼K]˜ýý'eIG¢yƒ ?(X˜Aþ¿   ²  ò]  k@!)+I‡  „ :J[c ¸ÿß@	7
k|‰š¸ÿá@ 7  /?99/+3/]]3/+10]‡ýÀ‡ýÀ]	#3òý:»¿À$]û£]ü‡y  3þdð]  ƒ@4%
HXx‡ „   ? 9IZ [ ¸ÿß@	7		k|¸ÿá@ 7
??9/+3/]]3/+910]‡ýÀ‡ý]ÀÀÀ]#33ÏEÊÁžÍþdÝüÁ?        ƒ¶E_<õ      ­¼¼n    ¶0zþóþY°
 	          þR  &þóûT°             }      Ð  Ð  & ¬¬1Œ ¼ <œ ½Ð X&-¢ Ž¢ÿ°'Œ
ýéÿÅ¢ šé {¢ÿF … › " : 0 Z † – [ ž¢ Ø¢ Œ)Œ Œ7]  Ávÿ«| F– …  G G™ F4
… G^ £ÿ²‹ Kt F¾ Fü FL †Ó FL … Fx 4î °Û ›v ßì#{ÿÂì Õ{ ¢ ¢ ù¢ÿÐŒ ìÿ65Î 'ü 8+
Wü UÄ XÐ Dù  82 :Áþó² ?2 :É 8 8Û YüÿÙü Uj 8+ ' € zº ²Œ Á¼ÿ»º 34ÿá ¤¢¥ÿñŒ
ævÿ«vÿª– … Gü FL †Û ›Î 'Î 'Î 'Î 'Î 'Î '+ WÄ XÄ XÄ XÄ X2 92 92 92 9 8Û YÛ YÛ YÛ YÛ
Y z z z z*V   D] á æö 8  Ê  ÊÐ(|ÈŒ êÿL P  ÏŒŒ)Œ7 ž"ÿÝ „Ñ
æŒ Å© ¹ µ] È] ÆŒÿö£ 3Û ] D& ¢Œ ÷Œ ÂÿÐŒÏÿÅ( ±( ZŒ 1vÿ«vÿ«L † …Ø X   ¬ Õ¬ ú&
Õ&Œ ýŒ ×º 3ì Õäÿ7  ¢ Å¢ i  A A ¯é ñ&ÿo¬ÿo& ½vÿ« Gvÿ« G G^ ^ ^ ^ L †L †L
†Û ›Û ›Û ›2 9­iVÁ‘¯ ¨ ¦ùtÿæ2ÿúx 4+ { 4ÿá¢¥  :å Xì Õº 3Ø
FüÿÙŒŒNV V äV Ø < 2  k 4 …ù ^ x 4+ – …+ W– …+ Wü U ýé ñvÿ«Î 'vÿªÎ '  G.
U  : FÄ X GÄ Xt F2 :t F^ :t F« :ü F 8ü F 8L †Û Y Fj 8 Fj 8x 4+ î 'ÿùî °' €Û
› zÛ › z{ 4ÿá{ 4ÿáˆ FL †… {ü UÝ X 3 Yø gR Uÿÿ ¬] ‰	O H÷ é :Ø bä ßu Ùœ Á–
Õ ’Ö ƒÖ ƒÕ ±Ö pvÿ«Î '– …+ W– …+ W GÄ X GÄ X GÄ X4 …ù 4 …ù 4 …ù  G 8 G 8^
2 :^ 2 :^ 2 :^ 2ÿæ£ÿ²Áþó‹ K² ² ?t F2ÿü F 'ü F 8L †Û YL †Û Y Fjÿ5x 4+ î °'
:Û › zÛ › zÛ › zÛ › zì#Œ Áì Õº 3g =vÿªÎ &êÿ£ 3L PÛ ¢˜ì#Œ Áì#Œ Áì#Œ Áì Õº
3& 4 ý ¾ ¬ <  k  ›  ÂéÿÅ ¨j©xÿ­ §ö §Q ¨ © ¥C ª2 9vÿ«| FÏÿÅ G{  G^ ‹
K|ÿª¾ Fü F1ÿñL † FÓ Faÿõî °ì Õ{ÿÂ÷ êŒÿö^ ì Õü U 3 82 9 öÿØº ®© @ 8þ ‹2 9¼
?¼ÿÇÿØº ² :Û YþÿÕ X ¸ÿP“ ‚ M2 9 Û Y ‚ M GW ®ˆ F› …x 4^ ^ £ÿ²òÿ”Ó F‹ ®‹
Kì  Fvÿ«| F| Fˆ F÷ÿ: GÉÿ§íÿí F F‹ Kàÿ”¾ F GL † FÓ F– …î °ì … {{ÿÂ F² á> F\
FN °] Fr Fœ F F¦ÿ«Î 'ê jÂ 7Å 7ùÿGÄ XbÿÀ2ÿÚ 7 7¼ ?÷ÿª’ 7 7Û Y 7üÿÙ? Wø gº 3º
T¼ÿ»( 7Ø ¥ 7 7  h[ 7‘ 7`ÿè¶ 8ÌÿÂÄ X 7Å 7` W+ 2 :2 9ÁþóPÿªP 7 8¼ ?º 3 7ˆ FÅ 7
	` F 7V ÅV ›V ÂV ÝVÁ                        t †Û Y ›G z  À    5  |­
­­¾¾¾¾À:::7vvÿ«Î 'vÿ«Î 'vÿ«Î 'vÿ«Î 'vÿ«Î 'vÿ«Î 'vÿ«Î
'vÿ«Î 'vÿ«Î 'vÿ«Î 'vÿ«Î 'vÿ«Î ' GÄ X GÄ X GÄ X GÄ X GÄ X GÄ X GÄ X GÄ X^ 2
9^ 2ÿÛ
L †Û YL †Û YL †Û YL †Û YL †Û YL †Û YL †Û Yt †Û Yt †Û Yt †Û Yt †Û Yt †Û YÛ › zÛ ›
z ›G z ›G z ›G z ›G z ›G zì Õº 3ì Õº 3ì Õº 3ì Õº 3ü =  i µ                
   3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
‘0000000000000000000000000000000È@«)›FFFs%%{{{Ônèè222
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰
‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰‰   } ^  k    A U  Ì2  @	Tèçæç¸ÿÀ@ƒÇ6âë&ìë,
Ù@ÙOÌ_ÌËÊoÊŸÊ¯ÊÉ’Á´$œš7›š2™š2š‘2˜–0—–H•–H–’-”‘2“‘.‘’F’/’’‘ O‘_‘Ÿ‘@àààÞ Þ
ÞÞ0Þ@ÞPÞpÞ@¼	6¸ÿÀ@P»6º@¸	6 ·· ·`µpµãå#äå 
í0í`íPÕ@ÔPÔpÔòð´2ï´2Ÿ´ÛÚ,ÚÛ!ÜÝ.Ý¾¸ÿÀ³Ó6¸ÿÀ@ÿÓ
6Ò¾Ñ¾ÐÐ/ÐÏ¾À¾¿}K½¾¾9ŽŒK‹KŒ‹(Š‹C‰‹C‹G…ˆ….‡…*†…d„…Pƒ…P@…<=6…9 ‚‚€KK@€AD6
€(}K~Ep~@~AC6)d;dKdYd`dtd!*!*!*,-*+()&'$%"# !     
 €@€@€ ? O @&  / ? o  ¿ Ï ÿ ;:9 8P3°K KTB°K KSB°3+K¸ R°2+K°
P[X±ŽY°3+°ˆ¸ T°ˆ¸ T°CZ[X¸±Ž…°CX±¸€…±¸€…YY+°dKSX°pY°2KSX°Y
++++stsss++++++++++++++++++++++++±	2+K°dRB±éE#Eha°é#D±êéE#Eh`°ê#D°d
EhDs°~Eh°~#D+s++++++++++++++++++++++++++s++++++++s+++sss++ss+t++sts st+u+++++++++++++st+ss++++++     ÿó  ÿL x
}  	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~€‚ƒ„…†‡ˆ‰Š‹ŒŽ
‘’“”•–—˜™š›œžŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆ
ÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþ
ÿ 	  
!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVW
XYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|
½.nullnonmarkingreturnspaceexclamquotedbl numbersigndollarpercent	ampersandquotesingle	parenleft
parenrightasteriskpluscommahyphenperiodslashzeroonetwothreefourfivesixseveneightninecolon
semicolonlessequalgreaterquestionatABCDEFGHIJKLMNOPQRSTUVWXYZbracketleft
backslashbracketrightasciicircum underscoregraveabcdefghijklmnopqrstuvwxyz
braceleftbar braceright asciitilde	AdieresisAringCcedillaEacuteNtilde	Odieresis
Udieresisaacuteagraveacircumflex	adieresisatildearingccedillaeacuteegraveecircumflex
edieresisiacuteigraveicircumflex	idieresisntildeoacuteograveocircumflex
odieresisotildeuacuteugraveucircumflex	udieresisdaggerdegreecentsterlingsectionbullet	paragraph
germandbls registered	copyright	trademarkacutedieresisnotequalAEOslashinfinity	plusminus
lessequalgreaterequalyenmu1partialdiff
summationproductpi1integralordfeminineordmasculineOhmaeoslashquestiondown exclamdown
logicalnotradicalflorinapproxequal	increment
guillemotleftguillemotrightellipsisAgraveAtildeOtildeOEoeendashemdashquotedblleft quotedblright
quoteleft quoterightdividelozenge	ydieresis	YdieresisfractionEuro guilsinglleftguilsinglrightfifl
daggerdblperiodcenteredquotesinglbasequotedblbaseperthousandAcircumflexEcircumflexAacute
EdieresisEgraveIacuteIcircumflex
IdieresisIgraveOacuteOcircumflexOgraveUacuteUcircumflexUgravedotlessi circumflextildemacronbreve
dotaccentringcedillahungarumlautogonekcaronLslashlslashScaronscaronZcaronzcaron
brokenbarEthethYacuteyacuteThornthornminusmultiplyonesuperiortwosuperior threesuperioronehalf
onequarter threequartersfrancGbrevegbreveIdotScedillascedillaCacutecacuteCcaronccarondmacron
overscoremiddotAbreveabreveAogonekaogonekDcarondcaronDslashEogonekeogonekEcaronecaronLacutelacute
LcaronlcaronLdotldotNacutenacuteNcaronncaron	Odblacute
odblacuteRacuteracuteRcaronrcaronSacutesacuteTcedillatcedillaTcarontcaronUringuring	Udblacute
udblacuteZacutezacuteZdotzdotGammaThetaPhialphadeltaepsilonsigmatauphi underscoredbl	exclamdbl
nsuperiorpesetaIJijnapostropheminutesecond	afii61248	afii61289H22073H18543H18551H18533
openbulletAmacronamacronCcircumflexccircumflexCdotcdotEmacronemacronEbreveebreveEdotedotGcircumfle
xgcircumflexGdotgdotGcedillagcedillaHcircumflexhcircumflexHbarhbarItildeitildeImacronimacronIbrev
eibreveIogonekiogonekJcircumflexjcircumflexKcedillakcedillakgreenlandicLcedillalcedillaNcedillanced
illaEngengOmacronomacronObreveobreveRcedillarcedillaScircumflexscircumflexTbartbarUtildeutildeUm
acronumacronUbreveubreveUogonekuogonekWcircumflexwcircumflexYcircumflexycircumflexlongs Aringacute
aringacuteAEacuteaeacuteOslashacuteoslashacute	anoteleiaWgravewgraveWacutewacute	Wdieresis
wdieresisYgraveygrave quotereversed	radicalex	afii08941	estimated
oneeighththreeeighthsfiveeighthsseveneighthscommaaccentundercommaaccenttonos dieresistonos
AlphatonosEpsilontonosEtatonos	IotatonosOmicrontonosUpsilontonos
OmegatonosiotadieresistonosAlphaBetaDeltaEpsilonZetaEtaIotaKappaLambdaMuNuXiOmicronPiRhoSigma
TauUpsilonChiPsiOmegaIotadieresisUpsilondieresis alphatonosepsilontonosetatonos
iotatonosupsilondieresistonosbetagammazetaetathetaiotakappalambdamunuxiomicronrhosigma1upsilon
chipsiomegaiotadieresisupsilondieresisomicrontonosupsilontonos omegatonos	afii10023	afii10051
afii10052	afii10053	afii10054	afii10055	afii10056	afii10057	afii10058	afii10059	afii10060
afii10061	afii10062	afii10145	afii10017	afii10018	afii10019	afii10020	afii10021	afii10022
afii10024	afii10025	afii10026	afii10027	afii10028	afii10029	afii10030	afii10031	afii10032
afii10033	afii10034	afii10035	afii10036	afii10037	afii10038	afii10039	afii10040	afii10041
afii10042	afii10043	afii10044	afii10045	afii10046	afii10047	afii10048	afii10049	afii10065
afii10066	afii10067	afii10068	afii10069	afii10070	afii10072	afii10073	afii10074	afii10075
afii10076	afii10077	afii10078	afii10079	afii10080	afii10081	afii10082	afii10083	afii10084
afii10085	afii10086	afii10087	afii10088	afii10089	afii10090	afii10091	afii10092	afii10093
afii10094	afii10095	afii10096	afii10097	afii10071	afii10099	afii10100	afii10101	afii10102
afii10103	afii10104	afii10105	afii10106	afii10107	afii10108	afii10109	afii10110	afii10193
afii10050	afii10098	afii00208	afii61352pifoursuperiorfivesuperior sevensuperior eightsuperior
onesupforfracDontCompressHTMXglyph577glyph578glyph579glyph580glyph581OhornohornUhornuhorn
hookabovecombdotbelowcomb	gravecomb
acutecombglyph590glyph591glyph592glyph593glyph594glyph595glyph596glyph597glyph598glyph599glyph600gl
yph601glyph602glyph603glyph604	Adotbelow	adotbelow Ahookabove
ahookaboveAcircumflexacuteacircumflexacuteAcircumflexgraveacircumflexgraveAcircumflexhookaboveacircumflex
hookaboveAcircumflextildeacircumflextildeAcircumflexdotbelowacircumflexdotbelowAbreveacuteabreveacuteAbr
evegraveabrevegraveAbrevehookaboveabrevehookaboveAbrevetildeabrevetildeAbrevedotbelowabrevedotbelow
Edotbelow	edotbelow Ehookabove
ehookaboveEtildeetildeEcircumflexacuteecircumflexacuteEcircumflexgraveecircumflexgraveEcircumflexhookabo
veecircumflexhookaboveEcircumflextildeecircumflextildeEcircumflexdotbelowecircumflexdotbelow Ihookabove
ihookabove	Idotbelow	idotbelowglyph649glyph650glyph651glyph652sheva hatafsegol
hatafpatahhatafqamatshiriqtseresegolpatahqamatsholamqubutsdageshmetegmaqafrafepaseqshindotsindot
sofpasuqalefbetgimeldalethevavzayinhettetyodfinalkafkaflamedfinalmemmemfinalnunnunsamekhayi
nfinalpepe finaltsaditsadiqofreshshintav	doublevavvavyod	doubleyodgeresh	gershayim newsheqelsign
vavshindot finalkafshevafinalkafqamats lamedholamlamedholamdageshaltayinshinshindot
shinsindotshindageshshindotshindageshsindot	alefpatah alefqamats	alefmapiq
betdageshgimeldageshdaletdageshhedagesh	vavdageshzayindagesh	tetdagesh	yoddageshfinalkafdagesh
kafdageshlameddagesh	memdagesh	nundageshsamekhdagesh finalpedageshpedageshtsadidagesh	qofdagesh
reshdagesh shindageshtavdagesvavholambetrafekafrafeperafe
aleflamedzerowidthnonjoinerzerowidthjoinerlefttorightmarkrighttoleftmark	afii57388	afii57403
afii57407	afii57409	afii57440	afii57451	afii57452	afii57453	afii57454	afii57455	afii57456
afii57457	afii57458	afii57392	afii57393	afii57394	afii57395	afii57396	afii57397	afii57398
afii57399	afii57400	afii57401	afii57381	afii57461	afii63167	afii57459	afii57543	afii57534
afii57494	afii62843	afii62844	afii62845	afii64240	afii64241	afii63954	afii57382	afii64242
afii62881	afii57504	afii57369	afii57370	afii57371	afii57372	afii57373	afii57374	afii57375
afii57391	afii57471	afii57460	afii52258	afii57506	afii62958	afii62956	afii52957	afii57505
afii62889	afii62887	afii62888	afii57507	afii62961	afii62959	afii62960	afii57508	afii62962
afii57567	afii62964	afii52305	afii52306	afii57509	afii62967	afii62965	afii62966	afii57555
afii52364	afii63753	afii63754	afii63759	afii63763	afii63795	afii62891	afii63808	afii62938
afii63810	afii62942	afii62947	afii63813	afii63823	afii63824	afii63833	afii63844	afii62882
afii62883	afii62884	afii62885	afii62886	Odotbelow	odotbelow Ohookabove
ohookaboveOcircumflexacuteocircumflexacuteOcircumflexgraveocircumflexgraveOcircumflexhookaboveocircumflex
hookaboveOcircumflextildeocircumflextildeOcircumflexdotbelowocircumflexdotbelow Ohornacute ohornacute
Ohorngrave ohorngraveOhornhookaboveohornhookabove Ohorntilde ohorntilde Ohorndotbelow ohorndotbelow
Udotbelow	udotbelow Uhookabove uhookabove Uhornacute uhornacute Uhorngrave
uhorngraveUhornhookaboveuhornhookabove Uhorntilde uhorntilde Uhorndotbelow uhorndotbelowglyph882glyph883
Ydotbelow	ydotbelow Yhookabove yhookaboveYtildeytildedong	tildecomb    @        C          C 
  J       . P        ~        Œ        ˜       / ¦     Õ     ã       
    -    9    U    a    }    ‰  	   †¥  	  +  	 
9  	  \E  	  ¡  	  ½  	  Õ  	  ^ñ    O    ]    {   
$    ³     Ã    ã    ë            /    =    [
   g    ƒ    ‘    ¯    ½    Û    ç         
  /    ;    W    c  $    $    -  «  -  ·    Ó   
á    ÿ        +    9    W     gTypeface and data © 1996 Microsoft
Corporation. All Rights ReservedVerdanaItalicMicrosoft:Verdana Italic:Version 1 (Microsoft)Verdana
ItalicVersion 2.40Verdana-ItalicVerdana is a trademark of Microsoft Corporation C u r s i v a V e r d a n a   C
u r s i v a k u r z í v a V e r d a n a   k u r z í v a k u r s i v V e r d a n a   k u r s i v K u r s i v V e
r d a n a   K u r s i v »¬³¹± V e r d a n a   »¬³¹± T y p e f a c e   a n d   d a t a   ©   1 9 9 6
M i c r o s o f t   C o r p o r a t i o n .   A l l   R i g h t s   R e s e r v e d V e r d a n a I t a l i c M
i c r o s o f t : V e r d a n a   I t a l i c : V e r s i o n   1   ( M i c r o s o f t ) V e r d a n a   I t a
l i c V e r s i o n   2 . 4 0 V e r d a n a - I t a l i c V e r d a n a   i s   a   t r a d e m a r k   o f   M
i c r o s o f t   C o r p o r a t i o n C u r s i v a V e r d a n a   C u r s i v a K u r s i v o i t u V e r d
a n a   K u r s i v o i t u I t a l i q u e V e r d a n a   I t a l i q u e DQ l t V e r d a n a   DQ l t C o
r s i v o V e r d a n a   C o r s i v o C u r s i e f V e r d a n a   C u r s i e f K u r s i v V e r d a n a
K u r s i v K u r s y w a V e r d a n a   K u r s y w a I t á l i c o V e r d a n a   I t á l i c oC@A82
V e r d a n a  C@A82 K u r z í v a V e r d a n a   K u r z í v a K u r s i v V e r d a n a   K u r s i
v0 t a l i k V e r d a n a  0 t a l i k P oa e v n o V e r d a n a   P oa e v n o E t z a n a V e r d a n a
E t z a n a C u r s i v a V e r d a n a   C u r s i v a I t á l i c o V e r d a n a   I t á l i c o C u r s i v
a V e r d a n a   C u r s i v a I t a l i q u e V e r d a n a   I t a l i q u e   endstream endobj 283 0 obj
<</Filter /FlateDecode/Length 5605>> stream xœÅ\ësÜ6’ÿî*ýX×}`r6E
ÙÄW²±²–äH²7wòn5CYt8ä„äÄRöî¿Æ‹ÌxìÉÕ%•Hh@£€ö_çEûý÷û×e_ÈãE„¿ÙWvå-PúvU ýãyÙçªøâzytøä·'ÏC‚Ø‹=öÿ4¦~ša
TíÅ8óÃ$qPX½jOµ«žüý[T£ßö~Ûû£¿ÉßôëÞþúÐíÑ4ö)‰P? (ô§(aìg$–˜ø!žUýÊâPíÝïÝ}=ýÿ}€~0ëçgøwÅOH‡ ü8
S³_b³Ÿi–†qÊQ†¬5IbcŠ’(óÆ±œ—Œ¡X	ÎœÖ¦šð°PFëPfAd€"0Ò3”3Q~”à8ˆ8L"„éc=¤©RÌdIý
Â†Ðs’ÁÈÓP"l†f{²˜úeRæÅ4À>‰3$Ù€„‘ì‚ý:ÛÃ´¦â8€)ŠÅ7d>¾Šƒ*«X[E*" *~ ½êM•gÓñZ2¥£L_^;W!–4P?J
ôú8ŒÑõboÿ$2º¾F
ctCšùöÎŠþ¾™wßü]ÿ¨Cs„®_?¹þö‰ê¥›ÕœEÊ8xètýq/ó“P¯úùÈ¸ÜDqÌPy·‹Y/ºµzJEO7$ˆG^ß\õmYªßÀbŒü(„/¯›Y^ÓïQŠa…ÆÞ
ï‚tû:J3/¯VÅÅÝX- AìiâÝçÝÅ§úMÛ,‹V‚ºuBSïq¬'IäS¯ì ^ßLª- ¾0½YâÇÞRV"0fêµF©1JfÍbC;Õ1Iü0
Ê§F©3JÇF©6J+£´Ø,Ÿ”F^n|¼5J•‹ÍökeXql¨–Ý8»' '½É¬»QR`½Ù}Þ¨å
ÇÞ¸þnh’À®Éx­Ãf^¬¯™„$òƒØ»k›Å¡¬­AƒãÃ‡1kêY®µŠRXi{e=/ô¥B“tkêUy×ŸN?‚~Íü
{_ä‡Íb™·zg8}’x‹¼ŸÝkä7Œ¥-–U>3À;XEÞêõCœrÌ]UêµauNÂ^·¬Jm$$y¦‘×­n»é®Ã°Ï2"?i;‡ ÎTìÖOE{˜w…þß.—Óˆ‡
@ísG{¨Bý˜Ul._ºÞ¤†+M@â]Ž†ãâÂ(ö
FVtýgç%Ùùàjma8äC¯˜iŒ8CHê´mþè€°nÅá¶h{›²Ö0XÑYê-WÝ½Q7òÐWÍREB@‡²e¤´(3Ž"¯huñ‡8!|ÎïË»þ³k
{Ð±×5­^9P4æ+ÍX¯„`¦ÿWµÉÝ%&B`¥DÞùjq[´.1±e‹3X&'åtæÚjLá|bÚ?,›º¨û2¯´ÝJ(|~Ó3°=›z#ªY”pNå½¶z*Lb®!`‹Û#bfë
‘ñ˜žs1s&€×åÂ>3˜š„xŠÞèÿ&¢qÆNGþAÊúŽôÓŽR˜}Ìªœ¬ªê?e­˜€êƒ%œk»›PX<ïæU³j;M}Q°Ó”}9+«ªì X¤óNï$ ‹ õ
v‘Æ­þ­©{mµ‚N€MÉ>\M’ Îèˆ÷È$¢i	a¶‹ä‡?†Ó;íó|qw×úNR¯¿iìQš„LÄÝTÄ„PÌ„ÒÙB!0+
”n­P@Y1¡t.¡Ä Y@(-”83c_,©D1lÆw¹i0M	³	•&UUÁ"}?]aÇ×šuš	ëô«¼nIÖ6ûI‰rL…9Ü
ÙÓÈE‘­*‹íB­ó¡4wKO‰úªcö3À’¤` æ}Ê$>øI.ŠlUY|lHk¦íH´•½Ä -£P8£À·ØbpYÙª²øØhénîŽ¸A6…Ë(
.á.eì¢˜p5>6ÜÄá9Æ„‡è# )ú48QsÐÌ ˜…%Uuˆ®[Æ8eŒ½“·ç‡×§çWèàü_¿º8ºâ€¶Cè{h5lÓÛfªGp a!aš„&8ðòù~ò
Ð‚ûv¨ìPŽzŽhôVPs‡îVõ¬‡ìÊ»®™• ÀæÒÊÆÌd×Ü;ïSÙß£¼F ÷Û|t€ê¦]äÕÀ„uS7ýpôyÏIã©p 2ÞA„cX#NPÃaj1Ph
2m;(ªUeñ±ÖS¸n³jú#w$ìæò†Ã M±^„¦,lŠlTM¹Øx´í¸²€*GÍW‹2±qc
8ò°u-ç ÈVSä½¦»i’0ûÜHê„®EÙn|½&!Ð5ø^°Ðš$âËß»<þñíëƒKtüË›Ëc¡B˜ÿ™ÑÌ»â
æ9:»8:=9=¾¼²ÎàQÃDáŸ¡a(Œ"DP\Àt†Ô2ßÞþŽ“é’iúb¿Á~7þº°÷~DÜpåo&ðjã€a‚Ó ¢.L|+x?VÍ-h&î}1sÅ
yˆ¨¬»¢îÊ¾ü]H[:8ƒIä]Aûª@UYhÁ}5’³UÕ—º9¬x•%ºIæ:üŒt“|,%†4¥¨V•ÅÇ^Øëö¡¦Ò¢L7‰"Ê~†ºI:•ÍŠÚYÄAQ­*‹‰;™DhCÑ
K@´@‰˜Ø¨‹"[Um¸cÄ;²„«ÁÅ\bHÒ"LÀâ `É.QÄ~lï>©ÊˆØ‚ÇïŽÏ¯Ñ+°ˆ^3eµÖ"ñ¶›?àŽÂœ‘tbñ¾]À;¸eqµß
¦©_V«vØ¿M}xŸ×
P•³_Ï]þšúè¶_´è®ú¤‚¡&!ˆ¼üÃQ«EP ÆqÛ6z§'BÏ€gKHâ5³U§×þ›øŸÆ †šOõ¦ïoÚ¢ÛÈà­æu“ÏCW‘tÛY`N±œð¿&³ÉY8kV]Á±3
3Á+œ5,%Þ$Ä´Æ
•M/V½&SA25x«›Wx»DF›Ïv.*^Vè1Ç×ÒŒ+œ®ŠŠe<FW«ÛE©ÞÖ•š!czh ¦ì;pƒ¤}79Ý·Ñ4CŠŽPž~¢‰‘XM$Œ#H31›”«4ï§\‘‡‡”œBÐ
QèåW³¶\öŽp Ü‡ßvÚ ë™co1T’m ˆI™nsj$ý(KõXzÖ­Ú£y9
•ž·ËCnq éEI2Œ’'O1ÊEŽQ!9F…—•äP‹ÉØgV2pGœrµKÁzá)VE`ƒe6ý@`Ò é‰&aDAŽf²Ëy”/kSM¼ˆ²ç
]¬•E‡ŒCªI—Ï¤Ñ€§$Y¦pe@W}ª2ð°… #‘’–mÄ°–¦li»"îÜ+IáÐc„ç^“tš{¥"dptq†Tâ•«Èy×tSÞu:Ái²(êA¡Œ
gó)=3kpÊ§µ½™,j?$ùx©0J¹Qê7Ô<2JQš¥•QZlàYoèýÄ(©1Èð¥	ûÃnò€«—æqUpaê^’ÍCi‹
“´¸¬&•ÄffË¤†¨ "µCî¬³€xÅC®')YP["î^>^Kæ`Ãà$æ<_8ë¾|<ÌïS[öƒñd¬ÃsÍM×`>Ÿ[ƒ}]v}Qkgõ`G-—E=?¼/«13ãå}ŸÏî7‰´jêBï}
KÙ\*’K¼óâ3½ÎËnÉÍ UîÊvÓR
Î>O6÷my»ê‹ó«m*3{Ÿw\lŒ:ºÝ@u76º«hö%ó–Ûþeq×´£ŒÛb±É–šLâgjOÊŽ5¢²Ú‚±BÑÍÚ¦ªNë¾yWŸœëò¤iöºì#ÌT¨ ¥kÁã›ÝvÀÂÙòR
÷,4=ÌòeWü_êÜÃ
:w“î4¹<l¨¹Ú€¬2Jÿúx¡†ì^_µ¶7®Ä«>×2Ô,)‹Q©ùaÕ™&=K½±fæ1VÆUÿX9VìnuùHÓ¿“˜‘á·—FH»ÍPÁè÷øw§ePÖe¿A3-YêßüxTÜå«J«Ó
õÍ’áÈ?äl›8GýËÙë«¢-óªü£h{P~SãÐ\§uj{z!lÚÝ«ëë7vG ­Z›­z¾-l}»5sÎàÛ:]ñ†åí£ãùü“¶YHÈ¶{·Kò4Ö’§
J¢`H¦©4FŒ¨‘ê˜RT«ÊâcÅŽâ-’§±–<%(	Áb¥c¤ €,ú!xE°ƒ¢ZUÒnÉÓXKž¦²—1y Ìacª”º(²Ueñ±Ñîè¹Å±ØœÀeŒý
S¥™‹bÂÕøØpwHžÂœ=`gò4N·Myœ\\ž©Ûx”_»Þüˆÿ”ôªÇYæƒÂ™„¹‘^„~>¬ª¼EÅÃ’…ä˜¹€Êýd\®™ÞEÑÔç¿Ê[^Åºl_ 8Yß
§1‚Ï‰î	¦ˆÇnnžG™‡Ø
×´H™ºêãôƒìŽ)3ÞÞÛƒ¶/ÚzÑÌË»²h…í3tàýU€u:0”Z²KF7Ñ2ºQv¿-Ô²»ºœFF®cJ‘ª)k…'[¤s¢o:v©)¡eâ€áµÜEQ­*‹
i­ŽØNz±…ÖP”&°]3›M‘­*‹6ÙM£%© 73à¦° QÚÙj 7sÀÍvÉ~Pvo
gzö#Ó´Zl«ÕÞ˜;Ñ©àTÿúøò|SÂ7ÅÛ†ïYV—ˆedŽj*¢¾ÿtçLÿm0žüá·÷^þß·ï¿ÑÊ¾ïkå›üvö1ô~óOV/‰üÇøë·ã¯ÿ>þú¯èôÂ3³Å¿¼÷¤Þ’½
ú(¶•» JR.£0Š\2âÚÀã¦>»FÓv%1p8&Uõ 6\íGÔ‰43»|>É(ÍzW|5-ºmðÛfµDpT‡^NÁ=e§P+;“mÁ5Eï%ö¿ˆkàtÞôk›°Û=kšý—<3–q
ôŠ¶a5ššß2Ê?Sm¾Ò¤Þk©QC:~ T(2É‘»öË¢ÿT5ÔÎabóãSêSÇõ]ùà£ƒåØ¶+˜„O÷Ðd¨ööò5š7…¸ÛÄo ¹Ê×˜Rª%jÒ5q¶ÓŠ)×ª§
*‘Ý§!ÓŠ#ü½$æo³3 ƒpöK¿Ç™OÂÊ<”g{ìjdŒ5€GÂÂÊcœ†üúÇÀs(‹^Ç@Èª‘?c£gJY`
½Ê2ðPÈ$x(ìª›â9‘‡ªOÓ­Cõ8Œ¸•‡“ˆ÷5	Õ§"›y"¯·í¨7¯Ë[j#X°N@”[H©‰2qoèåª¬ztZ»ó
•rå‡§PÈotÅ©ÙN+x¼#©ìÎós­tÂ‚c,k^ÌšyñöòÔ¦°w+ü*ýð©¨§•Š£r7Ë—cG«Ú$˜‚]s÷É,{¡±^°ârÓßËzÞ|Ú,Ö¼RîV¿cÀó.×å¢h´|õ¬j´
à¿0¤€õøÄŽ#¶4ád ì`qg\s…³nÁÆL˜É¨8£Ü-—/AÙ\‹"US.––ÅŸ·¸³Dà‰„ÁÏÓAÂ 3_¾Le÷®±MPm*‹‹ hí5Äíd—)¬Ø
¢—Xbå”€p¥%±ÔE‘­*‹}Ÿ9X{5jËû×…N s ¿ü‡<Ð„ŠXçã ~ÉÍÎ
‹:Â`ˆ­¹ˆ}ú“U¦´´2Þ™ÅÁÐæu¯/Oß\£Ósôêúìõkn)~I\8,„Å§˜FJçNëF^Ÿz`¨èŸòßUœà¤”‘cNRS
<<„¾ïd`Áˆ/‹žöÅC¿ÿqcPB´}ª
uíì‡§]AÌVþÇîé‹ï÷EáÅÀÁ£wZóK“ãÀôˆéŸ=Œú0€å_ž?4*’ÿìï#ç%—I˜æU¡½¼ôDÃçÏ_hìÆ‘[†!ÖÜsûâ;¹`b‚¦£à§ñÕÃÂS©Z;\Ý<§ûû¡
wð{^Vü¯!Üµû_³XY‚6Y€Áíñæóbþò±/:Ö,7{p°ÓSñÖG¨f¦ƒêIPÌ¼.Â_àãH„«-ŠjUY|o}¶yì#^û„Y¨š1%(B–uÖ±€µEQ­*‹ÔŽÏ}Ä
{ÞÏjŽÞ!d-Ák
ÛTÚ]Ÿûˆ÷>B,á.YÜ¹V¦Dæ¢˜€5>À_³Æa Å¬éº–¯~XŽ©ï—“(ðo«á°ûù3^ÿ(ÇE„§‰ë‘O€®ò»¼-Ÿ¡³æ²ªògèbY´ùwC¨‚ë]]O<‡
µÅoèTŸÐ
3°ÌñÞ{ÿÍ_ù¯°õÓ‚„EŽ–8øíwJá~%^ã`;˜Moþÿb˜â6Î{ïéY9k›®¹ë}ž[œ„çÞ<ÕÇiªË^6á0Ír‚Àó”¡\E‰B–.‹†9(ªUeñ±·Î6o›pH
tó‘1cO	5ó1d7öÈ`,REµª,>Pæ'¼Ó'&6z¢¡'A iXmŠl5Eïzmºë'fŸŒyPWlQ¾
ð×½rÖ:†¾îl­SŸò©ÓgÕ§Mi‹|þxÕç}Þ‰úÚ}ˆn“¶ý3^B±@C”²·–ÄÆò)TàãÁDÇ€åðq‹ë^D}lƒ)`“$uÂ¾ÆÛšrøCM÷
Ø³=zÍÊÅxõŠ«h3^ÌÕªqfÔº,¾S½ãÅÞéÉŽÝ´d%¤‰fZ‚Y,}*CÒ¦¨V•ÅÇ±O¶x4…£l´}(0K@“Áö¡
!’ï>…ºNÕª²øØ ôgSLW¼‹®$¡žjècœÊ7SV›"[MÑ»¬u²ãÃ„|pB'xMÂ—ÀuýM®­
Í˜‡ÇÖšâiÔiJa¯WËÝŠ‘$_&åï@ƒÐ(\…Àâá—³gWÌÚ-KýÞ»»ZUÓ·2Ë¦îŠW Û‹¶ãmõ»®*¿÷îÅO­œ¾÷Ä{÷gèíåk-Éîy½÷n›ùãH¼yEIÈ
‚ªNÃÕìHÅXÒ4$Þ3äø£b Œ©ÐÈ`í³½Hƒ]ö"Åº)H£€gìšQ§Ð0ü¦Õª²ø8þÈÃº'ºzï|”MAyŒÍ°M˜X3ÓtšRT«Êâã
ELõ+r‘Æ›Ñ³‡$aø9(_‚~Ç›X<Ù81?åK Õ]	e RÌî·¬7ÅÕÅ¯QpòÞkYlÒqñ¶·"”…
è82Õqâ:£×ÔÜí˜:ŸŽZÊn´Vµ+òB‰®ˆ ßq-´ë¦ëYË‰¢z¼1ebê¡8ÒõL	ß4??ùùÉþ¬*—ì’ÂÙ›'Çg‡Oþ”7dendstream endobj 285
0 obj <</D [14 0 R /Fit]/S /GoTo>> endobj xref 0 286 0000000284 65535 f 0000000016 00000 n 0000000219 00000 n
0000000315 00000 n 0000000000 00000 f 0000000004 00000 f 0000000005 00000 f 0000000006 00000 f 0000000007 00000
f 0000000008 00000 f 0000000009 00000 f 0000000010 00000 f 0000000011 00000 f 0000000012 00000 f 0000000369
00000 n 0000000013 00000 f 0000000015 00000 f 0000000640 00000 n 0000000016 00000 f 0000000018 00000 f
0000000019 00000 f 0000000719 00000 n 0000000755 00000 n 0000002627 00000 n 0000002659 00000 n 0000002695 00000
n 0000002727 00000 n 0000002763 00000 n 0000002795 00000 n 0000004025 00000 n 0000004240 00000 n 0000004294
00000 n 0000004330 00000 n 0000005552 00000 n 0000005761 00000 n 0000005793 00000 n 0000005829 00000 n
0000005861 00000 n 0000005897 00000 n 0000005929 00000 n 0000005965 00000 n 0000005997 00000 n 0000006033 00000
n 0000006065 00000 n 0000006101 00000 n 0000006133 00000 n 0000006169 00000 n 0000006201 00000 n 0000006237
00000 n 0000006269 00000 n 0000006305 00000 n 0000000020 00000 f 0000006337 00000 n 0000006390 00000 n
0000000051 00000 f 0000009020 00000 n 0000009056 00000 n 0000009088 00000 n 0000009310 00000 n 0000009346 00000
n 0000009377 00000 n 0000009409 00000 n 0000000054 00000 f 0000009697 00000 n 0000009825 00000 n 0000009861
00000 n 0000009893 00000 n 0000009929 00000 n 0000009961 00000 n 0000009997 00000 n 0000010029 00000 n
0000010065 00000 n 0000010097 00000 n 0000010133 00000 n 0000010165 00000 n 0000010201 00000 n 0000010233 00000
n 0000010269 00000 n 0000010301 00000 n 0000010337 00000 n 0000010369 00000 n 0000010405 00000 n 0000010437
00000 n 0000010473 00000 n 0000010505 00000 n 0000010541 00000 n 0000010573 00000 n 0000010609 00000 n
0000000062 00000 f 0000010641 00000 n 0000010694 00000 n 0000000088 00000 f 0000136172 00000 n 0000136208 00000
n 0000136240 00000 n 0000136469 00000 n 0000136505 00000 n 0000136536 00000 n 0000136568 00000 n 0000000091
00000 f 0000136925 00000 n 0000136962 00000 n 0000136995 00000 n 0000137032 00000 n 0000137065 00000 n
0000137102 00000 n 0000137135 00000 n 0000137172 00000 n 0000137205 00000 n 0000137242 00000 n 0000137275 00000
n 0000137312 00000 n 0000137345 00000 n 0000137382 00000 n 0000137415 00000 n 0000137452 00000 n 0000137485
00000 n 0000137522 00000 n 0000137555 00000 n 0000137592 00000 n 0000137625 00000 n 0000137662 00000 n
0000137695 00000 n 0000137732 00000 n 0000137765 00000 n 0000137802 00000 n 0000137835 00000 n 0000137872 00000
n 0000137905 00000 n 0000137942 00000 n 0000137975 00000 n 0000138012 00000 n 0000138045 00000 n 0000138082
00000 n 0000000099 00000 f 0000138115 00000 n 0000138171 00000 n 0000000134 00000 f 0000313147 00000 n
0000313185 00000 n 0000313219 00000 n 0000313448 00000 n 0000313485 00000 n 0000313518 00000 n 0000313552 00000
n 0000000137 00000 f 0000313923 00000 n 0000313960 00000 n 0000313993 00000 n 0000314030 00000 n 0000314063
00000 n 0000314100 00000 n 0000314133 00000 n 0000314170 00000 n 0000314203 00000 n 0000314240 00000 n
0000314273 00000 n 0000314310 00000 n 0000314343 00000 n 0000314380 00000 n 0000314413 00000 n 0000314450 00000
n 0000314483 00000 n 0000314520 00000 n 0000314553 00000 n 0000314590 00000 n 0000314623 00000 n 0000315854
00000 n 0000316077 00000 n 0000316114 00000 n 0000316147 00000 n 0000316184 00000 n 0000316217 00000 n
0000316254 00000 n 0000316287 00000 n 0000316324 00000 n 0000316357 00000 n 0000316394 00000 n 0000316427 00000
n 0000316464 00000 n 0000316497 00000 n 0000316534 00000 n 0000316567 00000 n 0000316604 00000 n 0000316637
00000 n 0000316674 00000 n 0000000145 00000 f 0000316707 00000 n 0000316763 00000 n 0000000186 00000 f
0000319441 00000 n 0000319479 00000 n 0000319513 00000 n 0000319745 00000 n 0000319782 00000 n 0000319815 00000
n 0000319849 00000 n 0000000189 00000 f 0000320136 00000 n 0000320173 00000 n 0000320206 00000 n 0000320243
00000 n 0000320276 00000 n 0000320313 00000 n 0000320346 00000 n 0000320383 00000 n 0000320416 00000 n
0000320453 00000 n 0000320486 00000 n 0000320523 00000 n 0000320556 00000 n 0000320593 00000 n 0000000197 00000
f 0000320626 00000 n 0000320682 00000 n 0000000212 00000 f 0000323326 00000 n 0000323364 00000 n 0000323398
00000 n 0000323628 00000 n 0000323665 00000 n 0000323698 00000 n 0000323732 00000 n 0000000215 00000 f
0000324020 00000 n 0000324057 00000 n 0000324090 00000 n 0000324127 00000 n 0000324160 00000 n 0000324197 00000
n 0000324230 00000 n 0000324267 00000 n 0000000223 00000 f 0000324300 00000 n 0000324356 00000 n 0000000232
00000 f 0000342388 00000 n 0000342426 00000 n 0000342460 00000 n 0000342691 00000 n 0000342728 00000 n
0000342762 00000 n 0000342797 00000 n 0000000235 00000 f 0000343063 00000 n 0000343100 00000 n 0000343133 00000
n 0000343170 00000 n 0000000243 00000 f 0000343203 00000 n 0000343259 00000 n 0000000248 00000 f 0000345935
00000 n 0000345973 00000 n 0000346007 00000 n 0000346239 00000 n 0000346276 00000 n 0000346310 00000 n
0000346345 00000 n 0000000251 00000 f 0000346635 00000 n 0000346672 00000 n 0000346705 00000 n 0000346742 00000
n 0000346775 00000 n 0000346812 00000 n 0000346845 00000 n 0000346882 00000 n 0000000259 00000 f 0000346915
00000 n 0000346971 00000 n 0000000268 00000 f 0000354344 00000 n 0000354382 00000 n 0000354416 00000 n
0000354647 00000 n 0000354684 00000 n 0000354718 00000 n 0000354753 00000 n 0000000271 00000 f 0000355016 00000
n 0000385770 00000 n 0000425932 00000 n 0000452282 00000 n 0000000279 00000 f 0000457958 00000 n trailer
<</Info 1 0 R/Root 2 0 R/Size 286>> startxref 458004 %%EOF /*! * jQuery JavaScript Library v1.11.1 *
http://jquery.com/ * * Includes Sizzle.js * http://sizzlejs.com/ * * Copyright 2005, 2014 jQuery Foundation,
Inc. and other contributors * Released under the MIT license * http://jquery.org/license * * Date:
2014-05-01T17:42Z */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) { // For CommonJS and CommonJS-like
		environments where a proper window is present, // execute the factory and get jQuery // For
		environments that do not inherently posses a window with a document // (such as Node.js), expose a
		jQuery-making factory as module.exports // This accentuates the need for the creation of a real window
		// e.g. var jQuery = require("jquery")(window); // See ticket #14549 for more info module.exports =
		global.document ? factory( global, true ) : function( w ) { if ( !w.document ) { throw new Error(
		"jQuery requires a window with a document" ); } return factory( w ); }; } else { factory( global ); }

// Pass this if window is not defined yet }(typeof window !== "undefined" ? window : this, function( window,
noGlobal ) {

// Can't do this because several apps including ASP.NET trace // the stack via arguments.caller.callee and
Firefox dies if // you try to trace through "use strict" call chains. (#13335) // Support: Firefox 18+ //

var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var version = "1.11.1",

	// Define a local copy of jQuery jQuery = function( selector, context ) { // The jQuery object is actually
	just the init constructor 'enhanced' // Need init if jQuery is called (just allow error to be thrown if not
	included) return new jQuery.fn.init( selector, context ); },

	// Support: Android<4.1, IE<9 // Make sure we trim BOM and NBSP rtrim =
	/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace() fcamelCase = function( all, letter ) { return
	letter.toUpperCase(); };

jQuery.fn = jQuery.prototype = { // The current version of jQuery being used jquery: version,

	constructor: jQuery,

	// Start with an empty selector selector: "",

	// The default length of a jQuery object is 0 length: 0,

	toArray: function() { return slice.call( this ); },

	// Get the Nth element in the matched element set OR // Get the whole matched element set as a clean array
	get: function( num ) { return num != null ?

			// Return just the one element from the set ( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array slice.call( this ); },

	// Take an array of elements and push it onto the stack // (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference) ret.prevObject = this; ret.context =
		this.context;

		// Return the newly-formed element set return ret; },

	// Execute a callback for every element in the matched set. // (You can seed the arguments with an array of
	args, but this is // only used internally.) each: function( callback, args ) { return jQuery.each( this,
	callback, args ); },

	map: function( callback ) { return this.pushStack( jQuery.map(this, function( elem, i ) { return
		callback.call( elem, i, elem ); })); },

	slice: function() { return this.pushStack( slice.apply( this, arguments ) ); },

	first: function() { return this.eq( 0 ); },

	last: function() { return this.eq( -1 ); },

	eq: function( i ) { var len = this.length, j = +i + ( i < 0 ? len : 0 ); return this.pushStack( j >= 0 && j
		< len ? [ this[j] ] : [] ); },

	end: function() { return this.prevObject || this.constructor(null); },

	// For internal use only. // Behaves like an Array's method, not like a jQuery method. push: push, sort:
	deletedIds.sort, splice: deletedIds.splice };

jQuery.extend = jQuery.fn.extend = function() { var src, copyIsArray, copy, name, options, clone, target =
	arguments[0] || {}, i = 1, length = arguments.length, deep = false;

	// Handle a deep copy situation if ( typeof target === "boolean" ) { deep = target;

		// skip the boolean and the target target = arguments[ i ] || {}; i++; }

	// Handle case when target is a string or something (possible in deep copy) if ( typeof target !== "object"
	&& !jQuery.isFunction(target) ) { target = {}; }

	// extend jQuery itself if only one argument is passed if ( i === length ) { target = this; i--; }

	for ( ; i < length; i++ ) { // Only deal with non-null/undefined values if ( (options = arguments[ i ]) !=
		null ) { // Extend the base object for ( name in options ) { src = target[ name ]; copy = options[ name
		];

				// Prevent never-ending loop if ( target === copy ) { continue; }

				// Recurse if we're merging plain objects or arrays if ( deep && copy && (
				jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) { if ( copyIsArray ) {
				copyIsArray = false; clone = src && jQuery.isArray(src) ? src : [];

					} else { clone = src && jQuery.isPlainObject(src) ? src : {}; }

					// Never move original objects, clone them target[ name ] = jQuery.extend( deep, clone,
					copy );

				// Don't bring in undefined values } else if ( copy !== undefined ) { target[ name ] = copy; }
				} } }

	// Return the modified object return target; };

jQuery.extend({ // Unique for each copy of jQuery on the page expando: "jQuery" + ( version + Math.random()
	).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module isReady: true,

	error: function( msg ) { throw new Error( msg ); },

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction. // Since version 1.3, DOM methods and functions
	like alert // aren't supported. They return false on IE (#2968). isFunction: function( obj ) { return
	jQuery.type(obj) === "function"; },

	isArray: Array.isArray || function( obj ) { return jQuery.type(obj) === "array"; },

	isWindow: function( obj ) { /* jshint eqeqeq: false */ return obj != null && obj == obj.window; },

	isNumeric: function( obj ) { // parseFloat NaNs numeric-cast false positives (null|true|false|"") // ...but
		misinterprets leading-number strings, particularly hex literals ("0x...") // subtraction forces
		infinities to NaN return !jQuery.isArray( obj ) && obj - parseFloat( obj ) >= 0; },

	isEmptyObject: function( obj ) { var name; for ( name in obj ) { return false; } return true; },

	isPlainObject: function( obj ) { var key;

		// Must be an Object. // Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well if ( !obj ||
		jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) { return false; }

		try { // Not own constructor property must be Object if ( obj.constructor && !hasOwn.call(obj,
			"constructor") && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) { return false; } }
			catch ( e ) { // IE8,9 Will throw exceptions on certain host objects #9897 return false; }

		// Support: IE<9 // Handle iteration over inherited properties before own properties. if (
		support.ownLast ) { for ( key in obj ) { return hasOwn.call( obj, key ); } }

		// Own properties are enumerated firstly, so to speed up, // if last one is own, then all properties
		are own. for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key ); },

	type: function( obj ) { if ( obj == null ) { return obj + ""; } return typeof obj === "object" || typeof
		obj === "function" ? class2type[ toString.call(obj) ] || "object" : typeof obj; },

	// Evaluates a script in a global context // Workarounds based on findings by Jim Driscoll //
	http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context globalEval:
	function( data ) { if ( data && jQuery.trim( data ) ) { // We use execScript on Internet Explorer // We use
	an anonymous function so that context is window // rather than jQuery in Firefox ( window.execScript ||
	function( data ) { window[ "eval" ].call( window, data ); } )( data ); } },

	// Convert dashed to camelCase; used by the css and data modules // Microsoft forgot to hump their vendor
	prefix (#9572) camelCase: function( string ) { return string.replace( rmsPrefix, "ms-" ).replace(
	rdashAlpha, fcamelCase ); },

	nodeName: function( elem, name ) { return elem.nodeName && elem.nodeName.toLowerCase() ===
		name.toLowerCase(); },

	// args is for internal usage only each: function( obj, callback, args ) { var value, i = 0, length =
	obj.length, isArray = isArraylike( obj );

		if ( args ) { if ( isArray ) { for ( ; i < length; i++ ) { value = callback.apply( obj[ i ], args );

					if ( value === false ) { break; } } } else { for ( i in obj ) { value = callback.apply(
						obj[ i ], args );

					if ( value === false ) { break; } } }

		// A special, fast, case for the most common use of each } else { if ( isArray ) { for ( ; i < length;
		i++ ) { value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) { break; } } } else { for ( i in obj ) { value = callback.call( obj[
						i ], i, obj[ i ] );

					if ( value === false ) { break; } } } }

		return obj; },

	// Support: Android<4.1, IE<9 trim: function( text ) { return text == null ? "" : ( text + "" ).replace(
	rtrim, "" ); },

	// results is for internal usage only makeArray: function( arr, results ) { var ret = results || [];

		if ( arr != null ) { if ( isArraylike( Object(arr) ) ) { jQuery.merge( ret, typeof arr === "string" ? [
			arr ] : arr ); } else { push.call( ret, arr ); } }

		return ret; },

	inArray: function( elem, arr, i ) { var len;

		if ( arr ) { if ( indexOf ) { return indexOf.call( arr, elem, i ); }

			len = arr.length; i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) { // Skip accessing in sparse arrays if ( i in arr && arr[ i ] === elem ) {
				return i; } } }

		return -1; },

	merge: function( first, second ) { var len = +second.length, j = 0, i = first.length;

		while ( j < len ) { first[ i++ ] = second[ j++ ]; }

		// Support: IE<9 // Workaround casting of .length to NaN on otherwise arraylike objects (e.g.,
		NodeLists) if ( len !== len ) { while ( second[j] !== undefined ) { first[ i++ ] = second[ j++ ]; } }

		first.length = i;

		return first; },

	grep: function( elems, callback, invert ) { var callbackInverse, matches = [], i = 0, length =
		elems.length, callbackExpect = !invert;

		// Go through the array, only saving the items // that pass the validator function for ( ; i < length;
		i++ ) { callbackInverse = !callback( elems[ i ], i ); if ( callbackInverse !== callbackExpect ) {
		matches.push( elems[ i ] ); } }

		return matches; },

	// arg is for internal usage only map: function( elems, callback, arg ) { var value, i = 0, length =
	elems.length, isArray = isArraylike( elems ), ret = [];

		// Go through the array, translating each of the items to their new values if ( isArray ) { for ( ; i <
		length; i++ ) { value = callback( elems[ i ], i, arg );

				if ( value != null ) { ret.push( value ); } }

		// Go through every key on the object, } else { for ( i in elems ) { value = callback( elems[ i ], i,
		arg );

				if ( value != null ) { ret.push( value ); } } }

		// Flatten any nested arrays return concat.apply( [], ret ); },

	// A global GUID counter for objects guid: 1,

	// Bind a function to a context, optionally partially applying any // arguments. proxy: function( fn,
	context ) { var args, proxy, tmp;

		if ( typeof context === "string" ) { tmp = fn[ context ]; context = fn; fn = tmp; }

		// Quick check to determine if target is callable, in the spec // this throws a TypeError, but we will
		just return undefined. if ( !jQuery.isFunction( fn ) ) { return undefined; }

		// Simulated bind args = slice.call( arguments, 2 ); proxy = function() { return fn.apply( context ||
		this, args.concat( slice.call( arguments ) ) ); };

		// Set the guid of unique handler to the same of original handler, so it can be removed proxy.guid =
		fn.guid = fn.guid || jQuery.guid++;

		return proxy; },

	now: function() { return +( new Date() ); },

	// jQuery.support is not used in Core but other projects attach their // properties to it so it needs to
	exist. support: support });

// Populate the class2type map jQuery.each("Boolean Number String Function Array Date RegExp Object
Error".split(" "), function(i, name) { class2type[ "[object " + name + "]" ] = name.toLowerCase(); });

function isArraylike( obj ) { var length = obj.length, type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) { return false; }

	if ( obj.nodeType === 1 && length ) { return true; }

	return type === "array" || length === 0 || typeof length === "number" && length > 0 && ( length - 1 ) in
		obj; } var Sizzle = /*! * Sizzle CSS Selector Engine v1.10.19 * http://sizzlejs.com/ * * Copyright 2013
		jQuery Foundation, Inc. and other contributors * Released under the MIT license *
		http://jquery.org/license * * Date: 2014-04-18 */ (function( window ) {

var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate,

	// Local document vars setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches,
	contains,

	// Instance-specific data expando = "sizzle" + -(new Date()), preferredDoc = window.document, dirruns = 0,
	done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), sortOrder
	= function( a, b ) { if ( a === b ) { hasDuplicate = true; } return 0; },

	// General-purpose constants strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31,

	// Instance methods hasOwn = ({}).hasOwnProperty, arr = [], pop = arr.pop, push_native = arr.push, push =
	arr.push, slice = arr.slice, // Use a stripped-down indexOf if we can't use a native one indexOf =
	arr.indexOf || function( elem ) { var i = 0, len = this.length; for ( ; i < len; i++ ) { if ( this[i] ===
	elem ) { return i; } } return -1; },

	booleans =
	"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly
	|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace whitespace =
	"[\\x20\\t\\r\\n\\f]", // http://www.w3.org/TR/css3-syntax/#characters characterEncoding =
	"(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters // An unquoted value should be a CSS identifier
	http://www.w3.org/TR/css3-selectors/#attribute-selectors // Proper syntax:
	http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier identifier = characterEncoding.replace( "w",
	"w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors attributes = "\\[" + whitespace
	+ "*(" + characterEncoding + ")(?:" + whitespace + // Operator (capture 2) "*([*^$|!~]?=)" + whitespace +
	// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" + // To reduce the number of selectors needing tokenize in
		the preFilter, prefer arguments: // 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2) ".*" + ")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the
	latter rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ), rcombinators = new RegExp( "^" +
	whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ), ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = { "ID": new RegExp( "^#(" + characterEncoding + ")" ), "CLASS": new RegExp( "^\\.(" +
		characterEncoding + ")" ), "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ), "PSEUDO": new RegExp( "^" + pseudos ), "CHILD": new RegExp(
		"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)"
		+ whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ), "bool": new
		RegExp( "^(?:" + booleans + ")$", "i" ), // For use in libraries implementing .is() // We use this for
		POS matching in `select` "needsContext": new RegExp( "^" + whitespace +
		"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace +
		"*\\)|)(?=[^-]|$)", "i" ) },

	rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors rquickExpr =
	/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/, rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters runescape = new RegExp(
	"\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ), funescape = function( _, escaped,
	escapedWhitespace ) { var high = "0x" + escaped - 0x10000; // NaN means non-codepoint // Support:
	Firefox<24 // Workaround erroneous numeric interpretation of +"0x" return high !== high ||
	escapedWhitespace ? escaped : high < 0 ? // BMP codepoint String.fromCharCode( high + 0x10000 ) : //
	Supplemental Plane codepoint (surrogate pair) String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF |
	0xDC00 ); };

// Optimize for push.apply( _, NodeList ) try { push.apply( (arr = slice.call( preferredDoc.childNodes )),
preferredDoc.childNodes ); // Support: Android<4.0 // Detect silently failing push.apply arr[
preferredDoc.childNodes.length ].nodeType; } catch ( e ) { push = { apply: arr.length ?

		// Leverage slice if possible function( target, els ) { push_native.apply( target, slice.call(els) ); }
		:

		// Support: IE<9 // Otherwise append directly function( target, els ) { var j = target.length, i = 0;
		// Can't trust NodeList.length while ( (target[j++] = els[i++]) ) {} target.length = j - 1; } }; }

function Sizzle( selector, context, results, seed ) { var match, elem, m, nodeType, // QSA vars i, groups, old,
	nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) { setDocument( context );
		}

	context = context || document; results = results || [];

	if ( !selector || typeof selector !== "string" ) { return results; }

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) { return []; }

	if ( documentIsHTML && !seed ) {

		// Shortcuts if ( (match = rquickExpr.exec( selector )) ) { // Speed-up: Sizzle("#ID") if ( (m =
		match[1]) ) { if ( nodeType === 9 ) { elem = context.getElementById( m ); // Check parentNode to catch
		when Blackberry 4.6 returns // nodes that are no longer in the document (jQuery #6963) if ( elem &&
		elem.parentNode ) { // Handle the case where IE, Opera, and Webkit return items // by name instead of
		ID if ( elem.id === m ) { results.push( elem ); return results; } } else { return results; } } else {
		// Context is not a document if ( context.ownerDocument && (elem =
		context.ownerDocument.getElementById( m )) && contains( context, elem ) && elem.id === m ) {
		results.push( elem ); return results; } }

			// Speed-up: Sizzle("TAG") } else if ( match[2] ) { push.apply( results,
			context.getElementsByTagName( selector ) ); return results;

			// Speed-up: Sizzle(".CLASS") } else if ( (m = match[3]) && support.getElementsByClassName &&
			context.getElementsByClassName ) { push.apply( results, context.getElementsByClassName( m ) );
			return results; } }

		// QSA path if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) { nid = old = expando;
		newContext = context; newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries // We can work around this by specifying an extra
			ID on the root // and working up from there (Thanks to Andrew Dupont for the technique) // IE 8
			doesn't work on object elements if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object"
			) { groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) { nid = old.replace( rescape, "\\$&" ); } else {
					context.setAttribute( "id", nid ); } nid = "[id='" + nid + "'] ";

				i = groups.length; while ( i-- ) { groups[i] = nid + toSelector( groups[i] ); } newContext =
				rsibling.test( selector ) && testContext( context.parentNode ) || context; newSelector =
				groups.join(","); }

			if ( newSelector ) { try { push.apply( results, newContext.querySelectorAll( newSelector ) );
				return results; } catch(qsaError) { } finally { if ( !old ) { context.removeAttribute("id"); }
				} } } }

	// All others return select( selector.replace( rtrim, "$1" ), context, results, seed ); }

/** * Create key-value caches of limited size * @returns {Function(string, Object)} Returns the Object data
 after storing it on itself with *	property name the (space-suffixed) string and (if the cache is larger than
 Expr.cacheLength) *	deleting the oldest entry */ function createCache() { var keys = [];

	function cache( key, value ) { // Use (key + " ") to avoid collision with native prototype properties (see
		Issue #157) if ( keys.push( key + " " ) > Expr.cacheLength ) { // Only keep the most recent entries
		delete cache[ keys.shift() ]; } return (cache[ key + " " ] = value); } return cache; }

/** * Mark a function for special use by Sizzle * @param {Function} fn The function to mark */ function
 markFunction( fn ) { fn[ expando ] = true; return fn; }

/** * Support testing using an element * @param {Function} fn Passed the created div and expects a boolean
 result */ function assert( fn ) { var div = document.createElement("div");

	try { return !!fn( div ); } catch (e) { return false; } finally { // Remove from its parent by default if (
		div.parentNode ) { div.parentNode.removeChild( div ); } // release memory in IE div = null; } }

/** * Adds the same handler for all of the specified attrs * @param {String} attrs Pipe-separated list of
 attributes * @param {Function} handler The method that will be applied */ function addHandle( attrs, handler )
 { var arr = attrs.split("|"), i = attrs.length;

	while ( i-- ) { Expr.attrHandle[ arr[i] ] = handler; } }

/** * Checks document order of two siblings * @param {Element} a * @param {Element} b * @returns {Number}
 Returns less than 0 if a precedes b, greater than 0 if a follows b */ function siblingCheck( a, b ) { var cur
 = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && ( ~b.sourceIndex || MAX_NEGATIVE ) - (
 ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes if ( diff ) { return diff; }

	// Check if b follows a if ( cur ) { while ( (cur = cur.nextSibling) ) { if ( cur === b ) { return -1; } }
	}

	return a ? 1 : -1; }

/** * Returns a function to use in pseudos for input types * @param {String} type */ function
 createInputPseudo( type ) { return function( elem ) { var name = elem.nodeName.toLowerCase(); return name ===
 "input" && elem.type === type; }; }

/** * Returns a function to use in pseudos for buttons * @param {String} type */ function createButtonPseudo(
 type ) { return function( elem ) { var name = elem.nodeName.toLowerCase(); return (name === "input" || name
 === "button") && elem.type === type; }; }

/** * Returns a function to use in pseudos for positionals * @param {Function} fn */ function
 createPositionalPseudo( fn ) { return markFunction(function( argument ) { argument = +argument; return
 markFunction(function( seed, matches ) { var j, matchIndexes = fn( [], seed.length, argument ), i =
 matchIndexes.length;

			// Match elements found at the specified indexes while ( i-- ) { if ( seed[ (j = matchIndexes[i]) ]
			) { seed[j] = !(matches[j] = seed[j]); } } }); }); }

/** * Checks a node for validity as a Sizzle context * @param {Element|Object=} context * @returns
 {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value */ function testContext(
 context ) { return context && typeof context.getElementsByTagName !== strundefined && context; }

// Expose support vars for convenience support = Sizzle.support = {};

/** * Detects XML nodes * @param {Element|Object} elem An element or a document * @returns {Boolean} True iff
 elem is a non-HTML XML node */ isXML = Sizzle.isXML = function( elem ) { // documentElement is verified for
 cases where it doesn't yet exist // (such as loading iframes in IE - #4833) var documentElement = elem &&
 (elem.ownerDocument || elem).documentElement; return documentElement ? documentElement.nodeName !== "HTML" :
 false; };

/** * Sets document-related variables once based on the current document * @param {Element|Object} [doc] An
 element or document object to use to set the document * @returns {Object} Returns the current document */
 setDocument = Sizzle.setDocument = function( node ) { var hasCompare, doc = node ? node.ownerDocument || node
 : preferredDoc, parent = doc.defaultView;

	// If no document and documentElement is available, return if ( doc === document || doc.nodeType !== 9 ||
	!doc.documentElement ) { return document; }

	// Set our document document = doc; docElem = doc.documentElement;

	// Support tests documentIsHTML = !isXML( doc );

	// Support: IE>8 // If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936 // IE6-8
	do not support the defaultView property so parent will be undefined if ( parent && parent !== parent.top )
	{ // IE11 does not have attachEvent, so all must suffer if ( parent.addEventListener ) {
	parent.addEventListener( "unload", function() { setDocument(); }, false ); } else if ( parent.attachEvent )
	{ parent.attachEvent( "onunload", function() { setDocument(); }); } }

	/* Attributes ---------------------------------------------------------------------- */

	// Support: IE<8 // Verify that getAttribute really returns attributes and not properties (excepting IE8
	booleans) support.attributes = assert(function( div ) { div.className = "i"; return
	!div.getAttribute("className"); });

	/* getElement(s)By* ---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements support.getElementsByTagName = assert(function(
	div ) { div.appendChild( doc.createComment("") ); return !div.getElementsByTagName("*").length; });

	// Check if getElementsByClassName can be trusted support.getElementsByClassName = rnative.test(
	doc.getElementsByClassName ) && assert(function( div ) { div.innerHTML = "<div class='a'></div><div
	class='a i'></div>";

		// Support: Safari<4 // Catch class over-caching div.firstChild.className = "i"; // Support: Opera<10
		// Catch gEBCN failure to find non-leading classes return div.getElementsByClassName("i").length === 2;
		});

	// Support: IE<10 // Check if getElementById returns elements by name // The broken getElementById methods
	don't pick up programatically-set names, // so use a roundabout getElementsByName test support.getById =
	assert(function( div ) { docElem.appendChild( div ).id = expando; return !doc.getElementsByName ||
	!doc.getElementsByName( expando ).length; });

	// ID find and filter if ( support.getById ) { Expr.find["ID"] = function( id, context ) { if ( typeof
	context.getElementById !== strundefined && documentIsHTML ) { var m = context.getElementById( id ); //
	Check parentNode to catch when Blackberry 4.6 returns // nodes that are no longer in the document #6963
	return m && m.parentNode ? [ m ] : []; } }; Expr.filter["ID"] = function( id ) { var attrId = id.replace(
	runescape, funescape ); return function( elem ) { return elem.getAttribute("id") === attrId; }; }; } else {
	// Support: IE6/7 // getElementById is not reliable as a find shortcut delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) { var attrId = id.replace( runescape, funescape ); return function(
			elem ) { var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
			return node && node.value === attrId; }; }; }

	// Tag Expr.find["TAG"] = support.getElementsByTagName ? function( tag, context ) { if ( typeof
	context.getElementsByTagName !== strundefined ) { return context.getElementsByTagName( tag ); } } :
	function( tag, context ) { var elem, tmp = [], i = 0, results = context.getElementsByTagName( tag );

			// Filter out possible comments if ( tag === "*" ) { while ( (elem = results[i++]) ) { if (
			elem.nodeType === 1 ) { tmp.push( elem ); } }

				return tmp; } return results; };

	// Class Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) { if (
	typeof context.getElementsByClassName !== strundefined && documentIsHTML ) { return
	context.getElementsByClassName( className ); } };

	/* QSA/matchesSelector ---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5) rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21) // We allow this because of a bug in IE8/9 that throws
	an error // whenever `document.activeElement` is accessed on an iframe // So, we allow :focus to pass
	through QSA all the time to avoid the IE error // See http://bugs.jquery.com/ticket/13378 rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) { // Build QSA regex // Regex strategy adopted
		from Diego Perini assert(function( div ) { // Select is set to empty string on purpose // This is to
		test IE's treatment of not explicitly // setting a boolean content attribute, // since its presence
		should be enough // http://bugs.jquery.com/ticket/12359 div.innerHTML = "<select msallowclip=''><option
		selected=''></option></select>";

			// Support: IE8, Opera 11-12.16 // Nothing should be selected when empty strings follow ^= or $= or
			*= // The test attribute must be unknown in Opera but "safe" for WinRT //
			http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section if (
			div.querySelectorAll("[msallowclip^='']").length ) { rbuggyQSA.push( "[*^$]=" + whitespace +
			"*(?:''|\"\")" ); }

			// Support: IE8 // Boolean attributes and "value" are not treated correctly if (
			!div.querySelectorAll("[selected]").length ) { rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" +
			booleans + ")" ); }

			// Webkit/Opera - :checked should return selected option elements //
			http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked // IE8 throws error here and will
			not see later tests if ( !div.querySelectorAll(":checked").length ) { rbuggyQSA.push(":checked"); }
			});

		assert(function( div ) { // Support: Windows 8 Native Apps // The type and name attributes are
			restricted during .innerHTML assignment var input = doc.createElement("input"); input.setAttribute(
			"type", "hidden" ); div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8 // Enforce case-sensitivity of name attribute if (
			div.querySelectorAll("[name=d]").length ) { rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled) // IE8
			throws error here and will not see later tests if ( !div.querySelectorAll(":enabled").length ) {
			rbuggyQSA.push( ":enabled", ":disabled" ); }

			// Opera 10-11 does not throw on post-comma invalid pseudos div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:"); }); }

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches || docElem.webkitMatchesSelector
		|| docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector) )) ) {

		assert(function( div ) { // Check to see if it's possible to do matchesSelector // on a disconnected
			node (IE 9) support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception // Gecko does not error, returns false instead matches.call(
			div, "[s!='']:x" ); rbuggyMatches.push( "!=", pseudos ); }); }

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") ); rbuggyMatches = rbuggyMatches.length &&
	new RegExp( rbuggyMatches.join("|") );

	/* Contains ---------------------------------------------------------------------- */ hasCompare =
	rnative.test( docElem.compareDocumentPosition );

	// Element contains another // Purposefully does not implement inclusive descendent // As in, an element
	does not contain itself contains = hasCompare || rnative.test( docElem.contains ) ? function( a, b ) { var
	adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode; return a === bup || !!( bup &&
	bup.nodeType === 1 && ( adown.contains ? adown.contains( bup ) : a.compareDocumentPosition &&
	a.compareDocumentPosition( bup ) & 16 )); } : function( a, b ) { if ( b ) { while ( (b = b.parentNode) ) {
	if ( b === a ) { return true; } } } return false; };

	/* Sorting ---------------------------------------------------------------------- */

	// Document order sorting sortOrder = hasCompare ? function( a, b ) {

		// Flag for duplicate removal if ( a === b ) { hasDuplicate = true; return 0; }

		// Sort on method existence if only one input has compareDocumentPosition var compare =
		!a.compareDocumentPosition - !b.compareDocumentPosition; if ( compare ) { return compare; }

		// Calculate position if both inputs belong to the same document compare = ( a.ownerDocument || a ) ===
		( b.ownerDocument || b ) ? a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected 1;

		// Disconnected nodes if ( compare & 1 || (!support.sortDetached && b.compareDocumentPosition( a ) ===
		compare) ) {

			// Choose the first element that is related to our preferred document if ( a === doc ||
			a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) { return -1; } if ( b === doc ||
			b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) { return 1; }

			// Maintain original order return sortInput ? ( indexOf.call( sortInput, a ) - indexOf.call(
			sortInput, b ) ) : 0; }

		return compare & 4 ? -1 : 1; } : function( a, b ) { // Exit early if the nodes are identical if ( a ===
	b ) { hasDuplicate = true; return 0; }

		var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [ a ], bp = [ b ];

		// Parentless nodes are either documents or disconnected if ( !aup || !bup ) { return a === doc ? -1 :
		b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? ( indexOf.call( sortInput, a ) - indexOf.call(
		sortInput, b ) ) : 0;

		// If the nodes are siblings, we can do a quick check } else if ( aup === bup ) { return siblingCheck(
		a, b ); }

		// Otherwise we need full lists of their ancestors for comparison cur = a; while ( (cur =
		cur.parentNode) ) { ap.unshift( cur ); } cur = b; while ( (cur = cur.parentNode) ) { bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy while ( ap[i] === bp[i] ) { i++; }

		return i ? // Do a sibling check if the nodes have a common ancestor siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc
			? 1 : 0; };

	return doc; };

Sizzle.matches = function( expr, elements ) { return Sizzle( expr, null, null, elements ); };

Sizzle.matchesSelector = function( elem, expr ) { // Set document vars if needed if ( ( elem.ownerDocument ||
	elem ) !== document ) { setDocument( elem ); }

	// Make sure that attribute selectors are quoted expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML && ( !rbuggyMatches || !rbuggyMatches.test( expr ) ) && (
		!rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try { var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes if ( ret || support.disconnectedMatch
			|| // As well, disconnected nodes are said to be in a document // fragment in IE 9 elem.document &&
			elem.document.nodeType !== 11 ) { return ret; } } catch(e) {} }

	return Sizzle( expr, document, null, [ elem ] ).length > 0; };

Sizzle.contains = function( context, elem ) { // Set document vars if needed if ( ( context.ownerDocument ||
	context ) !== document ) { setDocument( context ); } return contains( context, elem ); };

Sizzle.attr = function( elem, name ) { // Set document vars if needed if ( ( elem.ownerDocument || elem ) !==
	document ) { setDocument( elem ); }

	var fn = Expr.attrHandle[ name.toLowerCase() ], // Don't get fooled by Object.prototype properties (jQuery
		#13807) val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ? fn( elem, name,
		!documentIsHTML ) : undefined;

	return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute( name ) : (val =
		elem.getAttributeNode(name)) && val.specified ? val.value : null; };

Sizzle.error = function( msg ) { throw new Error( "Syntax error, unrecognized expression: " + msg ); };

/** * Document sorting and removing duplicates * @param {ArrayLike} results */ Sizzle.uniqueSort = function(
 results ) { var elem, duplicates = [], j = 0, i = 0;

	// Unless we *know* we can detect duplicates, assume their presence hasDuplicate =
	!support.detectDuplicates; sortInput = !support.sortStable && results.slice( 0 ); results.sort( sortOrder
	);

	if ( hasDuplicate ) { while ( (elem = results[i++]) ) { if ( elem === results[ i ] ) { j = duplicates.push(
		i ); } } while ( j-- ) { results.splice( duplicates[ j ], 1 ); } }

	// Clear input after sorting to release objects // See https://github.com/jquery/sizzle/pull/225 sortInput
	= null;

	return results; };

/** * Utility function for retrieving the text value of an array of DOM nodes * @param {Array|Element} elem */
 getText = Sizzle.getText = function( elem ) { var node, ret = "", i = 0, nodeType = elem.nodeType;

	if ( !nodeType ) { // If no nodeType, this is expected to be an array while ( (node = elem[i++]) ) { // Do
		not traverse comment nodes ret += getText( node ); } } else if ( nodeType === 1 || nodeType === 9 ||
		nodeType === 11 ) { // Use textContent for elements // innerText usage removed for consistency of new
		lines (jQuery #11153) if ( typeof elem.textContent === "string" ) { return elem.textContent; } else {
		// Traverse its children for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) { ret +=
		getText( elem ); } } } else if ( nodeType === 3 || nodeType === 4 ) { return elem.nodeValue; } // Do
		not include comment or processing instruction nodes

	return ret; };

Expr = Sizzle.selectors = {

	// Can be adjusted by the user cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir:
		"previousSibling", first: true }, "~": { dir: "previousSibling" } },

	preFilter: { "ATTR": function( match ) { match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted match[3] = ( match[3] || match[4] ||
			match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) { match[3] = " " + match[3] + " "; }

			return match.slice( 0, 4 ); },

		"CHILD": function( match ) { /* matches from matchExpr["CHILD"] 1 type (only|nth|...) 2 what
			(child|of-type) 3 argument (even|odd|\d*|\d*n([+-]\d+)?|...) 4 xn-component of xn+y argument
			([+-]?\d*n|) 5 sign of xn-component 6 x of xn-component 7 sign of y-component 8 y of y-component */
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) { // nth-* requires argument if ( !match[3] ) {
				Sizzle.error( match[0] ); }

				// numeric x and y parameters for Expr.filter.CHILD // remember that false/true cast
				respectively to 0/1 match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] ===
				"even" || match[3] === "odd" ) ); match[5] = +( ( match[7] + match[8] ) || match[3] === "odd"
				);

			// other types prohibit arguments } else if ( match[3] ) { Sizzle.error( match[0] ); }

			return match; },

		"PSEUDO": function( match ) { var excess, unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) { return null; }

			// Accept quoted arguments as-is if ( match[3] ) { match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments } else if ( unquoted && rpseudo.test( unquoted )
			&& // Get excess from tokenize (recursively) (excess = tokenize( unquoted, true )) && // advance to
			the next closing parenthesis (excess = unquoted.indexOf( ")", unquoted.length - excess ) -
			unquoted.length) ) {

				// excess is a negative index match[0] = match[0].slice( 0, excess ); match[2] =
				unquoted.slice( 0, excess ); }

			// Return only captures needed by the pseudo filter method (type and argument) return match.slice(
			0, 3 ); } },

	filter: {

		"TAG": function( nodeNameSelector ) { var nodeName = nodeNameSelector.replace( runescape, funescape
			).toLowerCase(); return nodeNameSelector === "*" ? function() { return true; } : function( elem ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === nodeName; }; },

		"CLASS": function( className ) { var pattern = classCache[ className + " " ];

			return pattern || (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace +
				"|$)" )) && classCache( className, function( elem ) { return pattern.test( typeof
				elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined &&
				elem.getAttribute("class") || "" ); }); },

		"ATTR": function( name, operator, check ) { return function( elem ) { var result = Sizzle.attr( elem,
			name );

				if ( result == null ) { return operator === "!="; } if ( !operator ) { return true; }

				result += "";

				return operator === "=" ? result === check : operator === "!=" ? result !== check : operator
					=== "^=" ? check && result.indexOf( check ) === 0 : operator === "*=" ? check &&
					result.indexOf( check ) > -1 : operator === "$=" ? check && result.slice( -check.length )
					=== check : operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 : operator ===
					"|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" : false; };
					},

		"CHILD": function( type, what, argument, first, last ) { var simple = type.slice( 0, 3 ) !== "nth",
			forward = type.slice( -4 ) !== "last", ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n) function( elem ) { return !!elem.parentNode; } :

				function( elem, context, xml ) { var cache, outerCache, node, diff, nodeIndex, start, dir =
					simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name =
					ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type) if ( simple ) { while ( dir ) { node = elem;
						while ( (node = node[ dir ]) ) { if ( ofType ? node.nodeName.toLowerCase() === name :
						node.nodeType === 1 ) { return false; } } // Reverse direction for :only-* (if we
						haven't yet done so) start = dir = type === "only" && !start && "nextSibling"; } return
						true; }

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent` if ( forward && useCache ) {
						// Seek `elem` from a previously-cached index outerCache = parent[ expando ] ||
						(parent[ expando ] = {}); cache = outerCache[ type ] || []; nodeIndex = cache[0] ===
						dirruns && cache[1]; diff = cache[0] === dirruns && cache[2]; node = nodeIndex &&
						parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start (diff = nodeIndex = 0) ||
								start.pop()) ) {

								// When found, cache indexes on `parent` and break if ( node.nodeType === 1 &&
								++diff && node === elem ) { outerCache[ type ] = [ dirruns, nodeIndex, diff ];
								break; } }

						// Use previously-cached element index if available } else if ( useCache && (cache =
						(elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) { diff =
						cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...) } else { //
						Use the same loop as above to seek `elem` from the start while ( (node = ++nodeIndex &&
						node && node[ dir ] || (diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) &&
									++diff ) { // Cache the index of each encountered element if ( useCache ) {
									(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ]; }

									if ( node === elem ) { break; } } } }

						// Incorporate the offset, then check against cycle size diff -= last; return diff ===
						first || ( diff % first === 0 && diff / first >= 0 ); } }; },

		"PSEUDO": function( pseudo, argument ) { // pseudo-class names are case-insensitive //
			http://www.w3.org/TR/selectors/#pseudo-classes // Prioritize by case sensitivity in case custom
			pseudos are added with uppercase letters // Remember that setFilters inherits from pseudos var
			args, fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] || Sizzle.error(
			"unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that // arguments are needed to create the filter
			function // just as Sizzle does if ( fn[ expando ] ) { return fn( argument ); }

			// But maintain support for old signatures if ( fn.length > 1 ) { args = [ pseudo, pseudo, "",
			argument ]; return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ? markFunction(function(
			seed, matches ) { var idx, matched = fn( seed, argument ), i = matched.length; while ( i-- ) { idx
			= indexOf.call( seed, matched[i] ); seed[ idx ] = !( matches[ idx ] = matched[i] ); } }) :
			function( elem ) { return fn( elem, 0, args ); }; }

			return fn; } },

	pseudos: { // Potentially complex pseudos "not": markFunction(function( selector ) { // Trim the selector
		passed to compile // to avoid treating leading and trailing // spaces as combinators var input = [],
		results = [], matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ? markFunction(function( seed, matches, context, xml ) { var elem,
				unmatched = matcher( seed, null, xml, [] ), i = seed.length;

					// Match elements unmatched by `matcher` while ( i-- ) { if ( (elem = unmatched[i]) ) {
					seed[i] = !(matches[i] = elem); } } }) : function( elem, context, xml ) { input[0] = elem;
					matcher( input, null, xml, results ); return !results.pop(); }; }),

		"has": markFunction(function( selector ) { return function( elem ) { return Sizzle( selector, elem
			).length > 0; }; }),

		"contains": markFunction(function( text ) { return function( elem ) { return ( elem.textContent ||
			elem.innerText || getText( elem ) ).indexOf( text ) > -1; }; }),

		// "Whether an element is represented by a :lang() selector // is based solely on the element's
		language value // being equal to the identifier C, // or beginning with the identifier C immediately
		followed by "-". // The matching of C against the element's language value is performed
		case-insensitively. // The identifier C does not have to be a valid language name." //
		http://www.w3.org/TR/selectors/#lang-pseudo "lang": markFunction( function( lang ) { // lang value must
		be a valid identifier if ( !ridentifier.test(lang || "") ) { Sizzle.error( "unsupported lang: " + lang
		); } lang = lang.replace( runescape, funescape ).toLowerCase(); return function( elem ) { var elemLang;
		do { if ( (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") ||
		elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase(); return elemLang === lang || elemLang.indexOf( lang +
						"-" ) === 0; } } while ( (elem = elem.parentNode) && elem.nodeType === 1 ); return
						false; }; }),

		// Miscellaneous "target": function( elem ) { var hash = window.location && window.location.hash;
		return hash && hash.slice( 1 ) === elem.id; },

		"root": function( elem ) { return elem === docElem; },

		"focus": function( elem ) { return elem === document.activeElement && (!document.hasFocus ||
			document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex); },

		// Boolean properties "enabled": function( elem ) { return elem.disabled === false; },

		"disabled": function( elem ) { return elem.disabled === true; },

		"checked": function( elem ) { // In CSS3, :checked should return both checked and selected elements //
			http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked var nodeName =
			elem.nodeName.toLowerCase(); return (nodeName === "input" && !!elem.checked) || (nodeName ===
			"option" && !!elem.selected); },

		"selected": function( elem ) { // Accessing this property makes selected-by-default // options in
			Safari work properly if ( elem.parentNode ) { elem.parentNode.selectedIndex; }

			return elem.selected === true; },

		// Contents "empty": function( elem ) { // http://www.w3.org/TR/selectors/#empty-pseudo // :empty is
		negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5), //   but not by others
		(comment: 8; processing instruction: 7; etc.) // nodeType < 6 works because attributes (2) do not
		appear as children for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) { if ( elem.nodeType <
		6 ) { return false; } } return true; },

		"parent": function( elem ) { return !Expr.pseudos["empty"]( elem ); },

		// Element/input types "header": function( elem ) { return rheader.test( elem.nodeName ); },

		"input": function( elem ) { return rinputs.test( elem.nodeName ); },

		"button": function( elem ) { var name = elem.nodeName.toLowerCase(); return name === "input" &&
			elem.type === "button" || name === "button"; },

		"text": function( elem ) { var attr; return elem.nodeName.toLowerCase() === "input" && elem.type ===
			"text" &&

				// Support: IE<8 // New HTML5 attribute values (e.g., "search") appear with elem.type ===
				"text" ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" ); },

		// Position-in-collection "first": createPositionalPseudo(function() { return [ 0 ]; }),

		"last": createPositionalPseudo(function( matchIndexes, length ) { return [ length - 1 ]; }),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) { return [ argument < 0 ?
			argument + length : argument ]; }),

		"even": createPositionalPseudo(function( matchIndexes, length ) { var i = 0; for ( ; i < length; i += 2
			) { matchIndexes.push( i ); } return matchIndexes; }),

		"odd": createPositionalPseudo(function( matchIndexes, length ) { var i = 1; for ( ; i < length; i += 2
			) { matchIndexes.push( i ); } return matchIndexes; }),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) { var i = argument < 0 ?
			argument + length : argument; for ( ; --i >= 0; ) { matchIndexes.push( i ); } return matchIndexes;
			}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) { var i = argument < 0 ?
			argument + length : argument; for ( ; ++i < length; ) { matchIndexes.push( i ); } return
			matchIndexes; }) } };

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos for ( i in { radio: true, checkbox: true, file: true, password: true, image:
true } ) { Expr.pseudos[ i ] = createInputPseudo( i ); } for ( i in { submit: true, reset: true } ) {
Expr.pseudos[ i ] = createButtonPseudo( i ); }

// Easy API for creating new setFilters function setFilters() {} setFilters.prototype = Expr.filters =
Expr.pseudos; Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) { var matched, match, tokens, type, soFar, groups,
	preFilters, cached = tokenCache[ selector + " " ];

	if ( cached ) { return parseOnly ? 0 : cached.slice( 0 ); }

	soFar = selector; groups = []; preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run if ( !matched || (match = rcomma.exec( soFar )) ) { if ( match ) { // Don't
		consume trailing commas as valid soFar = soFar.slice( match[0].length ) || soFar; } groups.push(
		(tokens = []) ); }

		matched = false;

		// Combinators if ( (match = rcombinators.exec( soFar )) ) { matched = match.shift(); tokens.push({
		value: matched, // Cast descendant combinators to space type: match[0].replace( rtrim, " " ) }); soFar
		= soFar.slice( matched.length ); }

		// Filters for ( type in Expr.filter ) { if ( (match = matchExpr[ type ].exec( soFar )) &&
		(!preFilters[ type ] || (match = preFilters[ type ]( match ))) ) { matched = match.shift();
		tokens.push({ value: matched, type: type, matches: match }); soFar = soFar.slice( matched.length ); } }

		if ( !matched ) { break; } }

	// Return the length of the invalid excess // if we're just parsing // Otherwise, throw an error or return
	tokens return parseOnly ? soFar.length : soFar ? Sizzle.error( selector ) : // Cache the tokens tokenCache(
	selector, groups ).slice( 0 ); };

function toSelector( tokens ) { var i = 0, len = tokens.length, selector = ""; for ( ; i < len; i++ ) {
	selector += tokens[i].value; } return selector; }

function addCombinator( matcher, combinator, base ) { var dir = combinator.dir, checkNonElements = base && dir
	=== "parentNode", doneName = done++;

	return combinator.first ? // Check against closest ancestor/preceding element function( elem, context, xml
		) { while ( (elem = elem[ dir ]) ) { if ( elem.nodeType === 1 || checkNonElements ) { return matcher(
		elem, context, xml ); } } } :

		// Check against all ancestor/preceding elements function( elem, context, xml ) { var oldCache,
		outerCache, newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching if ( xml ) {
			while ( (elem = elem[ dir ]) ) { if ( elem.nodeType === 1 || checkNonElements ) { if ( matcher(
			elem, context, xml ) ) { return true; } } } } else { while ( (elem = elem[ dir ]) ) { if (
			elem.nodeType === 1 || checkNonElements ) { outerCache = elem[ expando ] || (elem[ expando ] = {});
			if ( (oldCache = outerCache[ dir ]) && oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements return
							(newCache[ 2 ] = oldCache[ 2 ]); } else { // Reuse newcache so results
							back-propagate to previous elements outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking if ( (newCache[
							2 ] = matcher( elem, context, xml )) ) { return true; } } } } } }; }

function elementMatcher( matchers ) { return matchers.length > 1 ? function( elem, context, xml ) { var i =
	matchers.length; while ( i-- ) { if ( !matchers[i]( elem, context, xml ) ) { return false; } } return true;
	} : matchers[0]; }

function multipleContexts( selector, contexts, results ) { var i = 0, len = contexts.length; for ( ; i < len;
	i++ ) { Sizzle( selector, contexts[i], results ); } return results; }

function condense( unmatched, map, filter, context, xml ) { var elem, newUnmatched = [], i = 0, len =
	unmatched.length, mapped = map != null;

	for ( ; i < len; i++ ) { if ( (elem = unmatched[i]) ) { if ( !filter || filter( elem, context, xml ) ) {
		newUnmatched.push( elem ); if ( mapped ) { map.push( i ); } } } }

	return newUnmatched; }

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) { if ( postFilter &&
	!postFilter[ expando ] ) { postFilter = setMatcher( postFilter ); } if ( postFinder && !postFinder[ expando
	] ) { postFinder = setMatcher( postFinder, postSelector ); } return markFunction(function( seed, results,
	context, xml ) { var temp, i, elem, preMap = [], postMap = [], preexisting = results.length,

			// Get initial elements from seed or context elems = seed || multipleContexts( selector || "*",
			context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization matcherIn =
			preFilter && ( seed || !selector ) ? condense( elems, preMap, preFilter, context, xml ) : elems,

			matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or
				preexisting results, postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary [] :

					// ...otherwise use results directly results : matcherIn;

		// Find primary matches if ( matcher ) { matcher( matcherIn, matcherOut, context, xml ); }

		// Apply postFilter if ( postFilter ) { temp = condense( matcherOut, postMap ); postFilter( temp, [],
		context, xml );

			// Un-match failing elements by moving them back to matcherIn i = temp.length; while ( i-- ) { if (
			(elem = temp[i]) ) { matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem); } } }

		if ( seed ) { if ( postFinder || preFilter ) { if ( postFinder ) { // Get the final matcherOut by
			condensing this intermediate into postFinder contexts temp = []; i = matcherOut.length; while ( i--
			) { if ( (elem = matcherOut[i]) ) { // Restore matcherIn since elem is not yet a final match
			temp.push( (matcherIn[i] = elem) ); } } postFinder( null, (matcherOut = []), temp, xml ); }

				// Move matched elements from seed to results to keep them synchronized i = matcherOut.length;
				while ( i-- ) { if ( (elem = matcherOut[i]) && (temp = postFinder ? indexOf.call( seed, elem )
				: preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem); } } }

		// Add elements to results, through postFinder if defined } else { matcherOut = condense( matcherOut
		=== results ? matcherOut.splice( preexisting, matcherOut.length ) : matcherOut ); if ( postFinder ) {
		postFinder( null, results, matcherOut, xml ); } else { push.apply( results, matcherOut ); } } }); }

function matcherFromTokens( tokens ) { var checkContext, matcher, j, len = tokens.length, leadingRelative =
	Expr.relative[ tokens[0].type ], implicitRelative = leadingRelative || Expr.relative[" "], i =
	leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s) matchContext
		= addCombinator( function( elem ) { return elem === checkContext; }, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) { return indexOf.call( checkContext, elem ) > -1; },
		implicitRelative, true ), matchers = [ function( elem, context, xml ) { return ( !leadingRelative && (
		xml || context !== outermostContext ) ) || ( (checkContext = context).nodeType ? matchContext( elem,
		context, xml ) : matchAnyContext( elem, context, xml ) ); } ];

	for ( ; i < len; i++ ) { if ( (matcher = Expr.relative[ tokens[i].type ]) ) { matchers = [
		addCombinator(elementMatcher( matchers ), matcher) ]; } else { matcher = Expr.filter[ tokens[i].type
		].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher if ( matcher[ expando ] ) { // Find the next
			relative operator (if any) for proper handling j = ++i; for ( ; j < len; j++ ) { if (
			Expr.relative[ tokens[j].type ] ) { break; } } return setMatcher( i > 1 && elementMatcher( matchers
			), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit
			any-element `*` tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
			).replace( rtrim, "$1" ), matcher, i < j && matcherFromTokens( tokens.slice( i, j ) ), j < len &&
			matcherFromTokens( (tokens = tokens.slice( j )) ), j < len && toSelector( tokens ) ); }
			matchers.push( matcher ); } }

	return elementMatcher( matchers ); }

function matcherFromGroupMatchers( elementMatchers, setMatchers ) { var bySet = setMatchers.length > 0,
	byElement = elementMatchers.length > 0, superMatcher = function( seed, context, xml, results, outermost ) {
	var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup =
	outermostContext, // We must always have either seed elements or outermost context elems = seed ||
	byElement && Expr.find["TAG"]( "*", outermost ), // Use integer dirruns iff this is the outermost matcher
	dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1), len = elems.length;

			if ( outermost ) { outermostContext = context !== document && context; }

			// Add elements passing elementMatchers directly to results // Keep `i` a string if there are no
			elements so `matchedCount` will be "00" below // Support: IE<9, Safari // Tolerate NodeList
			properties (IE: "length"; Safari: <number>) matching elements by id for ( ; i !== len && (elem =
			elems[i]) != null; i++ ) { if ( byElement && elem ) { j = 0; while ( (matcher =
			elementMatchers[j++]) ) { if ( matcher( elem, context, xml ) ) { results.push( elem ); break; } }
			if ( outermost ) { dirruns = dirrunsUnique; } }

				// Track unmatched elements for set filters if ( bySet ) { // They will have gone through all
				possible matchers if ( (elem = !matcher && elem) ) { matchedCount--; }

					// Lengthen the array for every element, matched or not if ( seed ) { unmatched.push( elem
					); } } }

			// Apply set filters to unmatched elements matchedCount += i; if ( bySet && i !== matchedCount ) {
			j = 0; while ( (matcher = setMatchers[j++]) ) { matcher( unmatched, setMatched, context, xml ); }

				if ( seed ) { // Reintegrate element matches to eliminate the need for sorting if (
					matchedCount > 0 ) { while ( i-- ) { if ( !(unmatched[i] || setMatched[i]) ) {
					setMatched[i] = pop.call( results ); } } }

					// Discard index placeholder values to get only actual matches setMatched = condense(
					setMatched ); }

				// Add matches to results push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting if (
				outermost && !seed && setMatched.length > 0 && ( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results ); } }

			// Override manipulation of globals by nested matchers if ( outermost ) { dirruns = dirrunsUnique;
			outermostContext = contextBackup; }

			return unmatched; };

	return bySet ? markFunction( superMatcher ) : superMatcher; }

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) { var i, setMatchers = [],
	elementMatchers = [], cached = compilerCache[ selector + " " ];

	if ( !cached ) { // Generate a function of recursive functions that can be used to check each element if (
		!match ) { match = tokenize( selector ); } i = match.length; while ( i-- ) { cached =
		matcherFromTokens( match[i] ); if ( cached[ expando ] ) { setMatchers.push( cached ); } else {
		elementMatchers.push( cached ); } }

		// Cache the compiled function cached = compilerCache( selector, matcherFromGroupMatchers(
		elementMatchers, setMatchers ) );

		// Save selector and tokenization cached.selector = selector; } return cached; };

/** * A low-level selection function that works with Sizzle's compiled *  selector functions * @param
 {String|Function} selector A selector or a pre-compiled *  selector function built with Sizzle.compile *
 @param {Element} context * @param {Array} [results] * @param {Array} [seed] A set of elements to match against
 */ select = Sizzle.select = function( selector, context, results, seed ) { var i, tokens, token, type, find,
 compiled = typeof selector === "function" && selector, match = !seed && tokenize( (selector =
 compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID tokens = match[0] =
		match[0].slice( 0 ); if ( tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById &&
		context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) { return results;

			// Precompiled matchers will still verify ancestry, so step up a level } else if ( compiled ) {
			context = context.parentNode; }

			selector = selector.slice( tokens.shift().value.length ); }

		// Fetch a seed set for right-to-left matching i = matchExpr["needsContext"].test( selector ) ? 0 :
		tokens.length; while ( i-- ) { token = tokens[i];

			// Abort if we hit a combinator if ( Expr.relative[ (type = token.type) ] ) { break; } if ( (find =
			Expr.find[ type ]) ) { // Search, expanding context for leading sibling combinators if ( (seed =
			find( token.matches[0].replace( runescape, funescape ), rsibling.test( tokens[0].type ) &&
			testContext( context.parentNode ) || context )) ) {

					// If seed is empty or no tokens remain, we can return early tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens ); if ( !selector ) { push.apply( results,
					seed ); return results; }

					break; } } } }

	// Compile and execute a filtering function if one is not provided // Provide `match` to avoid
	retokenization if we modified the selector above ( compiled || compile( selector, match ) )( seed, context,
	!documentIsHTML, results, rsibling.test( selector ) && testContext( context.parentNode ) || context );
	return results; };

// One-time assignments

// Sort stability support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14 // Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27) // Detached nodes confoundingly follow
*each other* support.sortDetached = assert(function( div1 ) { // Should return 1, but returns 4 (following)
return div1.compareDocumentPosition( document.createElement("div") ) & 1; });

// Support: IE<8 // Prevent attribute/property "interpolation" //
http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx if ( !assert(function( div ) { div.innerHTML =
"<a href='#'></a>"; return div.firstChild.getAttribute("href") === "#" ; }) ) { addHandle(
"type|href|height|width", function( elem, name, isXML ) { if ( !isXML ) { return elem.getAttribute( name,
name.toLowerCase() === "type" ? 1 : 2 ); } }); }

// Support: IE<9 // Use defaultValue in place of getAttribute("value") if ( !support.attributes ||
!assert(function( div ) { div.innerHTML = "<input/>"; div.firstChild.setAttribute( "value", "" ); return
div.firstChild.getAttribute( "value" ) === ""; }) ) { addHandle( "value", function( elem, name, isXML ) { if (
!isXML && elem.nodeName.toLowerCase() === "input" ) { return elem.defaultValue; } }); }

// Support: IE<9 // Use getAttributeNode to fetch booleans when getAttribute lies if ( !assert(function( div )
{ return div.getAttribute("disabled") == null; }) ) { addHandle( booleans, function( elem, name, isXML ) { var
val; if ( !isXML ) { return elem[ name ] === true ? name.toLowerCase() : (val = elem.getAttributeNode( name ))
&& val.specified ? val.value : null; } }); }

return Sizzle;

})( window );



jQuery.find = Sizzle; jQuery.expr = Sizzle.selectors; jQuery.expr[":"] = jQuery.expr.pseudos; jQuery.unique =
Sizzle.uniqueSort; jQuery.text = Sizzle.getText; jQuery.isXMLDoc = Sizzle.isXML; jQuery.contains =
Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not function winnow( elements, qualifier, not ) { if (
jQuery.isFunction( qualifier ) ) { return jQuery.grep( elements, function( elem, i ) { /* jshint -W018 */
return !!qualifier.call( elem, i, elem ) !== not; });

	}

	if ( qualifier.nodeType ) { return jQuery.grep( elements, function( elem ) { return ( elem === qualifier )
		!== not; });

	}

	if ( typeof qualifier === "string" ) { if ( risSimple.test( qualifier ) ) { return jQuery.filter(
		qualifier, elements, not ); }

		qualifier = jQuery.filter( qualifier, elements ); }

	return jQuery.grep( elements, function( elem ) { return ( jQuery.inArray( elem, qualifier ) >= 0 ) !== not;
		}); }

jQuery.filter = function( expr, elems, not ) { var elem = elems[ 0 ];

	if ( not ) { expr = ":not(" + expr + ")"; }

	return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector( elem, expr ) ? [ elem ] :
		[] : jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) { return elem.nodeType === 1; }));
		};

jQuery.fn.extend({ find: function( selector ) { var i, ret = [], self = this, len = self.length;

		if ( typeof selector !== "string" ) { return this.pushStack( jQuery( selector ).filter(function() { for
			( i = 0; i < len; i++ ) { if ( jQuery.contains( self[ i ], this ) ) { return true; } } }) ); }

		for ( i = 0; i < len; i++ ) { jQuery.find( selector, self[ i ], ret ); }

		// Needed because $( selector, context ) becomes $( context ).find( selector ) ret = this.pushStack(
		len > 1 ? jQuery.unique( ret ) : ret ); ret.selector = this.selector ? this.selector + " " + selector :
		selector; return ret; }, filter: function( selector ) { return this.pushStack( winnow(this, selector ||
		[], false) ); }, not: function( selector ) { return this.pushStack( winnow(this, selector || [], true)
		); }, is: function( selector ) { return !!winnow( this,

			// If this is a positional/relative selector, check membership in the returned set // so
			$("p:first").is("p:last") won't return true for a doc with two "p". typeof selector === "string" &&
			rneedsContext.test( selector ) ? jQuery( selector ) : selector || [], false ).length; } });


// Initialize a jQuery object


// A central reference to the root jQuery(document) var rootjQuery,

	// Use the correct document accordingly with window argument (sandbox) document = window.document,

	// A simple way to check for HTML strings // Prioritize #id over <tag> to avoid XSS via location.hash
	(#9521) // Strict HTML recognition (#11290: must start with <) rquickExpr =
	/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) { var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false) if ( !selector ) { return this; }

		// Handle HTML strings if ( typeof selector === "string" ) { if ( selector.charAt(0) === "<" &&
		selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) { // Assume that strings that
		start and end with <> are HTML and skip the regex check match = [ null, selector, null ];

			} else { match = rquickExpr.exec( selector ); }

			// Match html or make sure no context is specified for #id if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array) if ( match[1] ) { context = context instanceof jQuery ?
				context[0] : context;

					// scripts is true for back-compat // Intentionally let the error be thrown if parseHTML is
					not present jQuery.merge( this, jQuery.parseHTML( match[1], context && context.nodeType ?
					context.ownerDocument || context : document, true ) );

					// HANDLE: $(html, props) if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context
					) ) { for ( match in context ) { // Properties of context are called as methods if possible
					if ( jQuery.isFunction( this[ match ] ) ) { this[ match ]( context[ match ] );

							// ...and otherwise set as attributes } else { this.attr( match, context[ match ]
							); } } }

					return this;

				// HANDLE: $(#id) } else { elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns // nodes that are no longer in the
					document #6963 if ( elem && elem.parentNode ) { // Handle the case where IE and Opera
					return items // by name instead of ID if ( elem.id !== match[2] ) { return rootjQuery.find(
					selector ); }

						// Otherwise, we inject the element directly into the jQuery object this.length = 1;
						this[0] = elem; }

					this.context = document; this.selector = selector; return this; }

			// HANDLE: $(expr, $(...)) } else if ( !context || context.jquery ) { return ( context ||
			rootjQuery ).find( selector );

			// HANDLE: $(expr, context) // (which is just equivalent to: $(context).find(expr) } else { return
			this.constructor( context ).find( selector ); }

		// HANDLE: $(DOMElement) } else if ( selector.nodeType ) { this.context = this[0] = selector;
		this.length = 1; return this;

		// HANDLE: $(function) // Shortcut for document ready } else if ( jQuery.isFunction( selector ) ) {
		return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready( selector ) : // Execute immediately
		if ready is not present selector( jQuery ); }

		if ( selector.selector !== undefined ) { this.selector = selector.selector; this.context =
			selector.context; }

		return jQuery.makeArray( selector, this ); };

// Give the init function the jQuery prototype for later instantiation init.prototype = jQuery.fn;

// Initialize central reference rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/, // methods guaranteed to produce a unique set when
	starting from a unique set guaranteedUnique = { children: true, contents: true, next: true, prev: true };

jQuery.extend({ dir: function( elem, dir, until ) { var matched = [], cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is(
			until )) ) { if ( cur.nodeType === 1 ) { matched.push( cur ); } cur = cur[dir]; } return matched;
			},

	sibling: function( n, elem ) { var r = [];

		for ( ; n; n = n.nextSibling ) { if ( n.nodeType === 1 && n !== elem ) { r.push( n ); } }

		return r; } });

jQuery.fn.extend({ has: function( target ) { var i, targets = jQuery( target, this ), len = targets.length;

		return this.filter(function() { for ( i = 0; i < len; i++ ) { if ( jQuery.contains( this, targets[i] )
			) { return true; } } }); },

	closest: function( selectors, context ) { var cur, i = 0, l = this.length, matched = [], pos =
		rneedsContext.test( selectors ) || typeof selectors !== "string" ? jQuery( selectors, context ||
		this.context ) : 0;

		for ( ; i < l; i++ ) { for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) { // Always
			skip document fragments if ( cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle cur.nodeType === 1 && jQuery.find.matchesSelector(cur,
					selectors)) ) {

					matched.push( cur ); break; } } }

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched ); },

	// Determine the position of an element within // the matched set of elements index: function( elem ) {

		// No argument, return index in parent if ( !elem ) { return ( this[0] && this[0].parentNode ) ?
		this.first().prevAll().length : -1; }

		// index in selector if ( typeof elem === "string" ) { return jQuery.inArray( this[0], jQuery( elem )
		); }

		// Locate the position of the desired element return jQuery.inArray( // If it receives a jQuery object,
		the first element is used elem.jquery ? elem[0] : elem, this ); },

	add: function( selector, context ) { return this.pushStack( jQuery.unique( jQuery.merge( this.get(),
		jQuery( selector, context ) ) ) ); },

	addBack: function( selector ) { return this.add( selector == null ? this.prevObject :
		this.prevObject.filter(selector) ); } });

function sibling( cur, dir ) { do { cur = cur[ dir ]; } while ( cur && cur.nodeType !== 1 );

	return cur; }

jQuery.each({ parent: function( elem ) { var parent = elem.parentNode; return parent && parent.nodeType !== 11
	? parent : null; }, parents: function( elem ) { return jQuery.dir( elem, "parentNode" ); }, parentsUntil:
	function( elem, i, until ) { return jQuery.dir( elem, "parentNode", until ); }, next: function( elem ) {
	return sibling( elem, "nextSibling" ); }, prev: function( elem ) { return sibling( elem, "previousSibling"
	); }, nextAll: function( elem ) { return jQuery.dir( elem, "nextSibling" ); }, prevAll: function( elem ) {
	return jQuery.dir( elem, "previousSibling" ); }, nextUntil: function( elem, i, until ) { return jQuery.dir(
	elem, "nextSibling", until ); }, prevUntil: function( elem, i, until ) { return jQuery.dir( elem,
	"previousSibling", until ); }, siblings: function( elem ) { return jQuery.sibling( ( elem.parentNode || {}
	).firstChild, elem ); }, children: function( elem ) { return jQuery.sibling( elem.firstChild ); },
	contents: function( elem ) { return jQuery.nodeName( elem, "iframe" ) ? elem.contentDocument ||
	elem.contentWindow.document : jQuery.merge( [], elem.childNodes ); } }, function( name, fn ) { jQuery.fn[
	name ] = function( until, selector ) { var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) { selector = until; }

		if ( selector && typeof selector === "string" ) { ret = jQuery.filter( selector, ret ); }

		if ( this.length > 1 ) { // Remove duplicates if ( !guaranteedUnique[ name ] ) { ret = jQuery.unique(
			ret ); }

			// Reverse order for parents* and prev-derivatives if ( rparentsprev.test( name ) ) { ret =
			ret.reverse(); } }

		return this.pushStack( ret ); }; }); var rnotwhite = (/\S+/g);



// String to Object options format cache var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache function createOptions(
options ) { var object = optionsCache[ options ] = {}; jQuery.each( options.match( rnotwhite ) || [], function(
_, flag ) { object[ flag ] = true; }); return object; }

/* * Create a callback list using the following parameters: * *	options: an optional list of space-separated
 options that will change how *			the callback list behaves or a more traditional option object * * By
 default a callback list will act like an event callback list and can be * "fired" multiple times. * * Possible
 options: * *	once:			will ensure the callback list can only be fired once (like a Deferred) * *
 memory:			will keep track of previous values and will call any callback added *					after
 the list has been fired right away with the latest "memorized" *					values (like a Deferred) *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list) * *
 stopOnFalse:	interrupt callings when a callback returns false * */ jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed // (we check in cache first) options
	= typeof options === "string" ? ( optionsCache[ options ] || createOptions( options ) ) : jQuery.extend(
	{}, options );

	var // Flag to know if list is currently firing firing, // Last fire value (for non-forgettable lists)
		memory, // Flag to know if list was already fired fired, // End of the loop when firing firingLength,
		// Index of currently firing callback (modified by remove if needed) firingIndex, // First callback to
		fire (used internally by add and fireWith) firingStart, // Actual callback list list = [], // Stack of
		fire calls for repeatable lists stack = !options.once && [], // Fire callbacks fire = function( data )
		{ memory = options.memory && data; fired = true; firingIndex = firingStart || 0; firingStart = 0;
		firingLength = list.length; firing = true; for ( ; list && firingIndex < firingLength; firingIndex++ )
		{ if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) { memory =
		false; // To prevent further calls using add break; } } firing = false; if ( list ) { if ( stack ) { if
		( stack.length ) { fire( stack.shift() ); } } else if ( memory ) { list = []; } else { self.disable();
		} } }, // Actual Callbacks object self = { // Add a callback or a collection of callbacks to the list
		add: function() { if ( list ) { // First, we save the current length var start = list.length; (function
		add( args ) { jQuery.each( args, function( _, arg ) { var type = jQuery.type( arg ); if ( type ===
		"function" ) { if ( !options.unique || !self.has( arg ) ) { list.push( arg ); } } else if ( arg &&
		arg.length && type !== "string" ) { // Inspect recursively add( arg ); } }); })( arguments ); // Do we
		need to add the callbacks to the // current firing batch? if ( firing ) { firingLength = list.length;
		// With memory, if we're not firing then // we should call right away } else if ( memory ) {
		firingStart = start; fire( memory ); } } return this; }, // Remove a callback from the list remove:
		function() { if ( list ) { jQuery.each( arguments, function( _, arg ) { var index; while ( ( index =
		jQuery.inArray( arg, list, index ) ) > -1 ) { list.splice( index, 1 ); // Handle firing indexes if (
		firing ) { if ( index <= firingLength ) { firingLength--; } if ( index <= firingIndex ) {
		firingIndex--; } } } }); } return this; }, // Check if a given callback is in the list. // If no
		argument is given, return whether or not list has callbacks attached. has: function( fn ) { return fn ?
		jQuery.inArray( fn, list ) > -1 : !!( list && list.length ); }, // Remove all callbacks from the list
		empty: function() { list = []; firingLength = 0; return this; }, // Have the list do nothing anymore
		disable: function() { list = stack = memory = undefined; return this; }, // Is it disabled? disabled:
		function() { return !list; }, // Lock the list in its current state lock: function() { stack =
		undefined; if ( !memory ) { self.disable(); } return this; }, // Is it locked? locked: function() {
		return !stack; }, // Call all callbacks with the given context and arguments fireWith: function(
		context, args ) { if ( list && ( !fired || stack ) ) { args = args || []; args = [ context, args.slice
		? args.slice() : args ]; if ( firing ) { stack.push( args ); } else { fire( args ); } } return this; },
		// Call all the callbacks with the given arguments fire: function() { self.fireWith( this, arguments );
		return this; }, // To know if the callbacks have already been called at least once fired: function() {
		return !!fired; } };

	return self; };


jQuery.extend({

	Deferred: function( func ) { var tuples = [ // action, add listener, listener list, final state [
		"resolve", "done", jQuery.Callbacks("once memory"), "resolved" ], [ "reject", "fail",
		jQuery.Callbacks("once memory"), "rejected" ], [ "notify", "progress", jQuery.Callbacks("memory") ] ],
		state = "pending", promise = { state: function() { return state; }, always: function() { deferred.done(
		arguments ).fail( arguments ); return this; }, then: function( /* fnDone, fnFail, fnProgress */ ) { var
		fns = arguments; return jQuery.Deferred(function( newDefer ) { jQuery.each( tuples, function( i, tuple
		) { var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ]; // deferred[ done | fail | progress ] for
		forwarding actions to newDefer deferred[ tuple[1] ](function() { var returned = fn && fn.apply( this,
		arguments ); if ( returned && jQuery.isFunction( returned.promise ) ) { returned.promise() .done(
		newDefer.resolve ) .fail( newDefer.reject ) .progress( newDefer.notify ); } else { newDefer[ tuple[ 0 ]
		+ "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments ); } }); });
		fns = null; }).promise(); }, // Get a promise for this deferred // If obj is provided, the promise
		aspect is added to the object promise: function( obj ) { return obj != null ? jQuery.extend( obj,
		promise ) : promise; } }, deferred = {};

		// Keep pipe for back-compat promise.pipe = promise.then;

		// Add list-specific methods jQuery.each( tuples, function( i, tuple ) { var list = tuple[ 2 ],
		stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add promise[ tuple[1] ] = list.add;

			// Handle state if ( stateString ) { list.add(function() { // state = [ resolved | rejected ] state
			= stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock }, tuples[ i ^ 1 ][ 2 ].disable,
				tuples[ 2 ][ 2 ].lock ); }

			// deferred[ resolve | reject | notify ] deferred[ tuple[0] ] = function() { deferred[ tuple[0] +
			"With" ]( this === deferred ? promise : this, arguments ); return this; }; deferred[ tuple[0] +
			"With" ] = list.fireWith; });

		// Make the deferred a promise promise.promise( deferred );

		// Call given func if any if ( func ) { func.call( deferred, deferred ); }

		// All done! return deferred; },

	// Deferred helper when: function( subordinate /* , ..., subordinateN */ ) { var i = 0, resolveValues =
	slice.call( arguments ), length = resolveValues.length,

			// the count of uncompleted subordinates remaining = length !== 1 || ( subordinate &&
			jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that. deferred
			= remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values updateFunc = function( i, contexts, values
			) { return function( value ) { contexts[ i ] = this; values[ i ] = arguments.length > 1 ?
			slice.call( arguments ) : value; if ( values === progressValues ) { deferred.notifyWith( contexts,
			values );

					} else if ( !(--remaining) ) { deferred.resolveWith( contexts, values ); } }; },

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved if ( length > 1 ) { progressValues
		= new Array( length ); progressContexts = new Array( length ); resolveContexts = new Array( length );
		for ( ; i < length; i++ ) { if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise )
		) { resolveValues[ i ].promise() .done( updateFunc( i, resolveContexts, resolveValues ) ) .fail(
		deferred.reject ) .progress( updateFunc( i, progressContexts, progressValues ) ); } else { --remaining;
		} } }

		// if we're not waiting on anything, resolve the master if ( !remaining ) { deferred.resolveWith(
		resolveContexts, resolveValues ); }

		return deferred.promise(); } });


// The deferred used on DOM ready var readyList;

jQuery.fn.ready = function( fn ) { // Add the callback jQuery.ready.promise().done( fn );

	return this; };

jQuery.extend({ // Is the DOM ready to be used? Set to true once it occurs. isReady: false,

	// A counter to track how many items to wait for before // the ready event fires. See #6781 readyWait: 1,

	// Hold (or release) the ready event holdReady: function( hold ) { if ( hold ) { jQuery.readyWait++; } else
	{ jQuery.ready( true ); } },

	// Handle when the DOM is ready ready: function( wait ) {

		// Abort if there are pending holds or we're already ready if ( wait === true ? --jQuery.readyWait :
		jQuery.isReady ) { return; }

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443). if (
		!document.body ) { return setTimeout( jQuery.ready ); }

		// Remember that the DOM is ready jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be if ( wait !== true &&
		--jQuery.readyWait > 0 ) { return; }

		// If there are functions bound, to execute readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events if ( jQuery.fn.triggerHandler ) { jQuery( document ).triggerHandler(
		"ready" ); jQuery( document ).off( "ready" ); } } });

/** * Clean-up method for dom ready events */ function detach() { if ( document.addEventListener ) {
 document.removeEventListener( "DOMContentLoaded", completed, false ); window.removeEventListener( "load",
 completed, false );

	} else { document.detachEvent( "onreadystatechange", completed ); window.detachEvent( "onload", completed
		); } }

/** * The ready event handler and self cleanup method */ function completed() { // readyState === "complete" is
 good enough for us to call the dom ready in oldIE if ( document.addEventListener || event.type === "load" ||
 document.readyState === "complete" ) { detach(); jQuery.ready(); } }

jQuery.ready.promise = function( obj ) { if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred. // we
		once tried to use readyState "interactive" here, but it caused issues like the one // discovered by
		ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15 if ( document.readyState === "complete" ) {
		// Handle it asynchronously to allow scripts the opportunity to delay ready setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded } else if ( document.addEventListener ) { // Use
		the handy event callback document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work window.addEventListener( "load", completed,
			false );

		// If IE event model is used } else { // Ensure firing before onload, maybe late but safe also for
		iframes document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work window.attachEvent( "onload", completed );

			// If IE and not a frame // continually check to see if the document is ready var top = false;

			try { top = window.frameElement == null && document.documentElement; } catch(e) {}

			if ( top && top.doScroll ) { (function doScrollCheck() { if ( !jQuery.isReady ) {

						try { // Use the trick by Diego Perini // http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left"); } catch(e) { return setTimeout( doScrollCheck, 50 ); }

						// detach all dom ready events detach();

						// and execute any waiting functions jQuery.ready(); } })(); } } } return
						readyList.promise( obj ); };


var strundefined = typeof undefined;



// Support: IE<9 // Iteration over object's inherited properties before its own var i; for ( i in jQuery(
support ) ) { break; } support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules. // false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom jQuery(function() { // Minified: var a,b,c,d var val,
div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ]; if ( !body || !body.style ) { // Return for frameset
	docs that don't have a body return; }

	// Setup div = document.createElement( "div" ); container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== strundefined ) { // Support: IE<8 // Check if natively block-level elements
		act like inline-block // elements when setting their display to 'inline' and giving // them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3; if ( val ) { // Prevent IE 6 from
		affecting layout for positioned elements #11048 // Prevent IE from shrinking the body in IE 7 mode
		#12869 // Support: IE<8 body.style.zoom = 1; } }

	body.removeChild( container ); });




(function() { var div = document.createElement( "div" );

	// Execute the test only if not already executed in another module. if (support.deleteExpando == null) { //
	Support: IE<9 support.deleteExpando = true; try { delete div.test; } catch( e ) { support.deleteExpando =
	false; } }

	// Null elements to avoid leaks in IE. div = null; })();


/** * Determines whether an object can have data */ jQuery.acceptData = function( elem ) { var noData =
 jQuery.noData[ (elem.nodeName + " ").toLowerCase() ], nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335). return nodeType !== 1
	&& nodeType !== 9 ? false :

		// Nodes accept data unless otherwise specified; rejection can be conditional !noData || noData !==
		true && elem.getAttribute("classid") === noData; };


var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) { // If nothing was found internally, try to fetch any // data from the
	HTML5 data-* attribute if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) { try { data = data === "true" ? true : data === "false" ? false : data
			=== "null" ? null : // Only convert to a number if it doesn't change the string +data + "" === data
			? +data : rbrace.test( data ) ? jQuery.parseJSON( data ) : data; } catch( e ) {}

			// Make sure we set the data so it isn't changed later jQuery.data( elem, key, data );

		} else { data = undefined; } }

	return data; }

// checks a cache object for emptiness function isEmptyDataObject( obj ) { var name; for ( name in obj ) {

		// if the public data object is empty, the private is still empty if ( name === "data" &&
		jQuery.isEmptyObject( obj[name] ) ) { continue; } if ( name !== "toJSON" ) { return false; } }

	return true; }

function internalData( elem, name, data, pvt /* Internal Use Only */ ) { if ( !jQuery.acceptData( elem ) ) {
	return; }

	var ret, thisCache, internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7 // can't GC object references
		properly across the DOM-JS boundary isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is // attached directly to the object so
		GC can occur automatically cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows // the code to shortcut on the
		same path as a DOM node with no cache id = isNode ? elem[ internalKey ] : elem[ internalKey ] &&
		internalKey;

	// Avoid doing any more work than we need to when trying to get data on an // object that has no data at
	all if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string"
	) { return; }

	if ( !id ) { // Only DOM nodes need a new unique ID for each element since their data // ends up in the
		global cache if ( isNode ) { id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++; } else { id
		= internalKey; } }

	if ( !cache[ id ] ) { // Avoid exposing jQuery metadata on plain JS objects when the object // is
		serialized using JSON.stringify cache[ id ] = isNode ? {} : { toJSON: jQuery.noop }; }

	// An object can be passed to jQuery.data instead of a key/value pair; this gets // shallow copied over
	onto the existing cache if ( typeof name === "object" || typeof name === "function" ) { if ( pvt ) { cache[
	id ] = jQuery.extend( cache[ id ], name ); } else { cache[ id ].data = jQuery.extend( cache[ id ].data,
	name ); } }

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data // cache in order to
	avoid key collisions between internal data and user-defined // data. if ( !pvt ) { if ( !thisCache.data ) {
	thisCache.data = {}; }

		thisCache = thisCache.data; }

	if ( data !== undefined ) { thisCache[ jQuery.camelCase( name ) ] = data; }

	// Check for both converted-to-camel and non-converted data property names // If a data property was
	specified if ( typeof name === "string" ) {

		// First Try to find as-is property data ret = thisCache[ name ];

		// Test for null|undefined property data if ( ret == null ) {

			// Try to find the camelCased property ret = thisCache[ jQuery.camelCase( name ) ]; } } else { ret
			= thisCache; }

	return ret; }

function internalRemoveData( elem, name, pvt ) { if ( !jQuery.acceptData( elem ) ) { return; }

	var thisCache, i, isNode = elem.nodeType,

		// See jQuery.data for more information cache = isNode ? jQuery.cache : elem, id = isNode ? elem[
		jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no // purpose in continuing if ( !cache[ id
	] ) { return; }

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation if ( name in thisCache ) { name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists name =
					jQuery.camelCase( name ); if ( name in thisCache ) { name = [ name ]; } else { name =
					name.split(" "); } } } else { // If "name" is an array of keys... // When data is initially
					created, via ("key", "val") signature, // keys will be converted to camelCase. // Since
					there is no way to tell _how_ a key was added, remove // both plain key and camelCase key.
					#12786 // This will only penalize the array argument path. name = name.concat( jQuery.map(
					name, jQuery.camelCase ) ); }

			i = name.length; while ( i-- ) { delete thisCache[ name[i] ]; }

			// If there is no data left in the cache, we want to continue // and let the cache object itself
			get destroyed if ( pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache) ) {
			return; } } }

	// See jQuery.data for more information if ( !pvt ) { delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object // had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) { return; } }

	// Destroy the cache if ( isNode ) { jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080) /* jshint
	eqeqeq: false */ } else if ( support.deleteExpando || cache != cache.window ) { /* jshint eqeqeq: true */
	delete cache[ id ];

	// When all else fails, null } else { cache[ id ] = null; } }

jQuery.extend({ cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions) // throw uncatchable
	exceptions if you attempt to set expando properties noData: { "applet ": true, "embed ": true, // ...but
	Flash objects (which have this classid) *can* handle expandos "object ":
	"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" },

	hasData: function( elem ) { elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[
		jQuery.expando ]; return !!elem && !isEmptyDataObject( elem ); },

	data: function( elem, name, data ) { return internalData( elem, name, data ); },

	removeData: function( elem, name ) { return internalRemoveData( elem, name ); },

	// For internal use only. _data: function( elem, name, data ) { return internalData( elem, name, data, true
	); },

	_removeData: function( elem, name ) { return internalRemoveData( elem, name, true ); } });

jQuery.fn.extend({ data: function( key, value ) { var i, name, data, elem = this[0], attrs = elem &&
	elem.attributes;

		// Special expections of .data basically thwart jQuery.access, // so implement the relevant behavior
		ourselves

		// Gets all values if ( key === undefined ) { if ( this.length ) { data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) { i = attrs.length; while (
					i-- ) {

						// Support: IE11+ // The attrs elements can be null (#14894) if ( attrs[ i ] ) { name =
						attrs[ i ].name; if ( name.indexOf( "data-" ) === 0 ) { name = jQuery.camelCase(
						name.slice(5) ); dataAttr( elem, name, data[ name ] ); } } } jQuery._data( elem,
						"parsedAttrs", true ); } }

			return data; }

		// Sets multiple values if ( typeof key === "object" ) { return this.each(function() { jQuery.data(
		this, key ); }); }

		return arguments.length > 1 ?

			// Sets one value this.each(function() { jQuery.data( this, key, value ); }) :

			// Gets one value // Try to fetch any internally stored data first elem ? dataAttr( elem, key,
			jQuery.data( elem, key ) ) : undefined; },

	removeData: function( key ) { return this.each(function() { jQuery.removeData( this, key ); }); } });


jQuery.extend({ queue: function( elem, type, data ) { var queue;

		if ( elem ) { type = ( type || "fx" ) + "queue"; queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup if ( data ) { if ( !queue ||
			jQuery.isArray(data) ) { queue = jQuery._data( elem, type, jQuery.makeArray(data) ); } else {
			queue.push( data ); } } return queue || []; } },

	dequeue: function( elem, type ) { type = type || "fx";

		var queue = jQuery.queue( elem, type ), startLength = queue.length, fn = queue.shift(), hooks =
			jQuery._queueHooks( elem, type ), next = function() { jQuery.dequeue( elem, type ); };

		// If the fx queue is dequeued, always remove the progress sentinel if ( fn === "inprogress" ) { fn =
		queue.shift(); startLength--; }

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being // automatically dequeued if ( type
			=== "fx" ) { queue.unshift( "inprogress" ); }

			// clear up the last queue stop function delete hooks.stop; fn.call( elem, next, hooks ); }

		if ( !startLength && hooks ) { hooks.empty.fire(); } },

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) { var key = type + "queueHooks"; return jQuery._data( elem, key ) ||
	jQuery._data( elem, key, { empty: jQuery.Callbacks("once memory").add(function() { jQuery._removeData(
	elem, type + "queue" ); jQuery._removeData( elem, key ); }) }); } });

jQuery.fn.extend({ queue: function( type, data ) { var setter = 2;

		if ( typeof type !== "string" ) { data = type; type = "fx"; setter--; }

		if ( arguments.length < setter ) { return jQuery.queue( this[0], type ); }

		return data === undefined ? this : this.each(function() { var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) { jQuery.dequeue( this, type ); } }); },
					dequeue: function( type ) { return this.each(function() { jQuery.dequeue( this, type ); });
					}, clearQueue: function( type ) { return this.queue( type || "fx", [] ); }, // Get a
					promise resolved when queues of a certain type // are emptied (fx is the type by default)
					promise: function( type, obj ) { var tmp, count = 1, defer = jQuery.Deferred(), elements =
					this, i = this.length, resolve = function() { if ( !( --count ) ) { defer.resolveWith(
					elements, [ elements ] ); } };

		if ( typeof type !== "string" ) { obj = type; type = undefined; } type = type || "fx";

		while ( i-- ) { tmp = jQuery._data( elements[ i ], type + "queueHooks" ); if ( tmp && tmp.empty ) {
			count++; tmp.empty.add( resolve ); } } resolve(); return defer.promise( obj ); } }); var pnum =
			(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) { // isHidden might be called from jQuery#filter function; // in that case,
		element will be second argument elem = el || elem; return jQuery.css( elem, "display" ) === "none" ||
		!jQuery.contains( elem.ownerDocument, elem ); };



// Multifunctional method to get and set values of a collection // The value/s can optionally be executed if
it's a function var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) { var
i = 0, length = elems.length, bulk = key == null;

	// Sets many values if ( jQuery.type( key ) === "object" ) { chainable = true; for ( i in key ) {
	jQuery.access( elems, fn, i, key[i], true, emptyGet, raw ); }

	// Sets one value } else if ( value !== undefined ) { chainable = true;

		if ( !jQuery.isFunction( value ) ) { raw = true; }

		if ( bulk ) { // Bulk operations run against the entire set if ( raw ) { fn.call( elems, value ); fn =
			null;

			// ...except when executing function values } else { bulk = fn; fn = function( elem, key, value ) {
			return bulk.call( jQuery( elem ), value ); }; } }

		if ( fn ) { for ( ; i < length; i++ ) { fn( elems[i], key, raw ? value : value.call( elems[i], i, fn(
			elems[i], key ) ) ); } } }

	return chainable ? elems :

		// Gets bulk ? fn.call( elems ) : length ? fn( elems[0], key ) : emptyGet; }; var rcheckableType =
		(/^(?:checkbox|radio)$/i);



(function() { // Minified: var a,b,c var input = document.createElement( "input" ), div =
	document.createElement( "div" ), fragment = document.createDocumentFragment();

	// Setup div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used support.leadingWhitespace = div.firstChild.nodeType
	=== 3;

	// Make sure that tbody elements aren't automatically inserted // IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML // This requires a wrapper element in
	IE support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems // Where outerHTML is undefined, this still
	works support.html5Clone = document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked // value of true after appended to the DOM
	(IE6/7) input.type = "checkbox"; input.checked = true; fragment.appendChild( input ); support.appendChecked
	= input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned // Support: IE6-IE11+ div.innerHTML =
	"<textarea>x</textarea>"; support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute fragment.appendChild( div );
	div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3 // old WebKit doesn't clone checked state
	correctly in fragments support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9 // Opera does not clone events (and typeof div.attachEvent === undefined). // IE9-10
	clones events bound via attachEvent, but they don't trigger with .click() support.noCloneEvent = true; if (
	div.attachEvent ) { div.attachEvent( "onclick", function() { support.noCloneEvent = false; });

		div.cloneNode( true ).click(); }

	// Execute the test only if not already executed in another module. if (support.deleteExpando == null) { //
	Support: IE<9 support.deleteExpando = true; try { delete div.test; } catch( e ) { support.deleteExpando =
	false; } } })();


(function() { var i, eventName, div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event) for ( i in { submit: true,
	change: true, focusin: true }) { eventName = "on" + i;

		if ( !(support[ i + "Bubbles" ] = eventName in window) ) { // Beware of CSP restrictions
			(https://developer.mozilla.org/en/Security/CSP) div.setAttribute( eventName, "t" ); support[ i +
			"Bubbles" ] = div.attributes[ eventName ].expando === false; } }

	// Null elements to avoid leaks in IE. div = null; })();


var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent =
	/^(?:mouse|pointer|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace =
	/^([^.]*)(?:\.(.+)|)$/;

function returnTrue() { return true; }

function returnFalse() { return false; }

function safeActiveElement() { try { return document.activeElement; } catch ( err ) { } }

/* * Helper functions for managing events -- not part of the public interface. * Props to Dean Edwards'
 addEvent library for many of the ideas. */ jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) { var tmp, events, t, handleObjIn, special,
		eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects) if ( !elemData ) {
		return; }

		// Caller can pass in an object of custom data in lieu of the handler if ( handler.handler ) {
		handleObjIn = handler; handler = handleObjIn.handler; selector = handleObjIn.selector; }

		// Make sure that the handler has a unique ID, used to find/remove it later if ( !handler.guid ) {
		handler.guid = jQuery.guid++; }

		// Init the element's event structure and main handler, if this is the first if ( !(events =
		elemData.events) ) { events = elemData.events = {}; } if ( !(eventHandle = elemData.handle) ) {
		eventHandle = elemData.handle = function( e ) { // Discard the second event of a jQuery.event.trigger()
		and // when an event is called after a page has unloaded return typeof jQuery !== strundefined && (!e
		|| jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
		undefined; }; // Add elem as a property of the handle fn to prevent a memory leak with IE non-native
		events eventHandle.elem = elem; }

		// Handle multiple events separated by a space types = ( types || "" ).match( rnotwhite ) || [ "" ]; t
		= types.length; while ( t-- ) { tmp = rtypenamespace.exec( types[t] ) || []; type = origType = tmp[1];
		namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers if ( !type ) { continue; }

			// If event changes its type, use the special event handlers for the changed type special =
			jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type type = ( selector ?
			special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers handleObj = jQuery.extend({ type: type, origType:
			origType, data: data, handler: handler, guid: handler.guid, selector: selector, needsContext:
			selector && jQuery.expr.match.needsContext.test( selector ), namespace: namespaces.join(".") },
			handleObjIn );

			// Init the event handler queue if we're the first if ( !(handlers = events[ type ]) ) { handlers =
			events[ type ] = []; handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false if (
				!special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) { //
				Bind the global event handler to the element if ( elem.addEventListener ) {
				elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) { elem.attachEvent( "on" + type, eventHandle ); } } }

			if ( special.add ) { special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) { handleObj.handler.guid = handler.guid; } }

			// Add to the element's handler list, delegates in front if ( selector ) { handlers.splice(
			handlers.delegateCount++, 0, handleObj ); } else { handlers.push( handleObj ); }

			// Keep track of which events have ever been used, for event optimization jQuery.event.global[ type
			] = true; }

		// Nullify elem to prevent memory leaks in IE elem = null; },

	// Detach an event or set of events from an element remove: function( elem, types, handler, selector,
	mappedTypes ) { var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType,
	elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) { return; }

		// Once for each type.namespace in types; type may be omitted types = ( types || "" ).match( rnotwhite
		) || [ "" ]; t = types.length; while ( t-- ) { tmp = rtypenamespace.exec( types[t] ) || []; type =
		origType = tmp[1]; namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element if ( !type ) { for ( type in
			events ) { jQuery.event.remove( elem, type + types[ t ], handler, selector, true ); } continue; }

			special = jQuery.event.special[ type ] || {}; type = ( selector ? special.delegateType :
			special.bindType ) || type; handlers = events[ type ] || []; tmp = tmp[2] && new RegExp( "(^|\\.)"
			+ namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events origCount = j = handlers.length; while ( j-- ) { handleObj = handlers[ j
			];

				if ( ( mappedTypes || origType === handleObj.origType ) && ( !handler || handler.guid ===
					handleObj.guid ) && ( !tmp || tmp.test( handleObj.namespace ) ) && ( !selector || selector
					=== handleObj.selector || selector === "**" && handleObj.selector ) ) { handlers.splice( j,
					1 );

					if ( handleObj.selector ) { handlers.delegateCount--; } if ( special.remove ) {
						special.remove.call( elem, handleObj ); } } }

			// Remove generic event handler if we removed something and no more handlers exist // (avoids
			potential for endless recursion during removal of special event handlers) if ( origCount &&
			!handlers.length ) { if ( !special.teardown || special.teardown.call( elem, namespaces,
			elemData.handle ) === false ) { jQuery.removeEvent( elem, type, elemData.handle ); }

				delete events[ type ]; } }

		// Remove the expando if it's no longer used if ( jQuery.isEmptyObject( events ) ) { delete
		elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty // so use it instead of
			delete jQuery._removeData( elem, "events" ); } },

	trigger: function( event, data, elem, onlyHandlers ) { var handle, ontype, cur, bubbleType, special, tmp,
		i, eventPath = [ elem || document ], type = hasOwn.call( event, "type" ) ? event.type : event,
		namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
		return; }

		// focus/blur morphs to focusin/out; ensure we're not firing them right now if ( rfocusMorph.test( type
		+ jQuery.event.triggered ) ) { return; }

		if ( type.indexOf(".") >= 0 ) { // Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split("."); type = namespaces.shift(); namespaces.sort(); } ontype =
			type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string event = event[
		jQuery.expando ] ? event : new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true) event.isTrigger =
		onlyHandlers ? 2 : 3; event.namespace = namespaces.join("."); event.namespace_re = event.namespace ?
		new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) : null;

		// Clean up the event in case it is being reused event.result = undefined; if ( !event.target ) {
		event.target = elem; }

		// Clone any incoming data and prepend the event, creating the handler arg list data = data == null ? [
		event ] : jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines special = jQuery.event.special[ type ] || {}; if (
		!onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) { return; }

		// Determine event propagation path in advance, per W3C events spec (#9951) // Bubble up to document,
		then to window; watch for a global ownerDocument var (#9724) if ( !onlyHandlers && !special.noBubble &&
		!jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type; if ( !rfocusMorph.test( bubbleType + type ) ) { cur =
			cur.parentNode; } for ( ; cur; cur = cur.parentNode ) { eventPath.push( cur ); tmp = cur; }

			// Only add window if we got to document (e.g., not plain obj or detached DOM) if ( tmp ===
			(elem.ownerDocument || document) ) { eventPath.push( tmp.defaultView || tmp.parentWindow || window
			); } }

		// Fire handlers on the event path i = 0; while ( (cur = eventPath[i++]) &&
		!event.isPropagationStopped() ) {

			event.type = i > 1 ? bubbleType : special.bindType || type;

			// jQuery handler handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data(
			cur, "handle" ); if ( handle ) { handle.apply( cur, data ); }

			// Native handler handle = ontype && cur[ ontype ]; if ( handle && handle.apply &&
			jQuery.acceptData( cur ) ) { event.result = handle.apply( cur, data ); if ( event.result === false
			) { event.preventDefault(); } } } event.type = type;

		// If nobody prevented the default action, do it now if ( !onlyHandlers && !event.isDefaultPrevented()
		) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event. // Can't use an
				.isFunction() check here because IE6/7 fails that test. // Don't do default actions on window,
				that's where global variables be (#6170) if ( ontype && elem[ type ] && !jQuery.isWindow( elem
				) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method tmp = elem[ ontype ];

					if ( tmp ) { elem[ ontype ] = null; }

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type; try { elem[ type ](); } catch ( e ) { // IE<9 dies on
					focus/blur to hidden element (#1486,#12518) // only reproducible on winXP IE8 native, not
					IE9 in IE8 mode } jQuery.event.triggered = undefined;

					if ( tmp ) { elem[ ontype ] = tmp; } } } }

		return event.result; },

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j, handlerQueue = [], args = slice.call( arguments ), handlers = (
			jQuery._data( this, "events" ) || {} )[ event.type ] || [], special = jQuery.event.special[
			event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired if ( special.preDispatch
		&& special.preDispatch.call( this, event ) === false ) { return; }

		// Determine handlers handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us i = 0; while ( (matched =
		handlerQueue[ i++ ]) && !event.isPropagationStopped() ) { event.currentTarget = matched.elem;

			j = 0; while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or // 2) have namespace(s) a subset or
				equal to those in the bound event (both can have no namespace). if ( !event.namespace_re ||
				event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj; event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) { if ( (event.result = ret) === false ) { event.preventDefault();
						event.stopPropagation(); } } } } }

		// Call the postDispatch hook for the mapped type if ( special.postDispatch ) {
		special.postDispatch.call( this, event ); }

		return event.result; },

	handlers: function( event, handlers ) { var sel, handleObj, matches, i, handlerQueue = [], delegateCount =
		handlers.delegateCount, cur = event.target;

		// Find delegate handlers // Black-hole SVG <use> instance trees (#13180) // Avoid non-left-click
		bubbling in Firefox (#3861) if ( delegateCount && cur.nodeType && (!event.button || event.type !==
		"click") ) {

			/* jshint eqeqeq: false */ for ( ; cur != this; cur = cur.parentNode || this ) { /* jshint eqeqeq:
			true */

				// Don't check non-elements (#13208) // Don't process clicks on disabled elements (#6911,
				#8165, #11382, #11764) if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !==
				"click") ) { matches = []; for ( i = 0; i < delegateCount; i++ ) { handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203) sel = handleObj.selector +
						" ";

						if ( matches[ sel ] === undefined ) { matches[ sel ] = handleObj.needsContext ? jQuery(
							sel, this ).index( cur ) >= 0 : jQuery.find( sel, this, null, [ cur ] ).length; }
							if ( matches[ sel ] ) { matches.push( handleObj ); } } if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches }); } } } }

		// Add the remaining (directly-bound) handlers if ( delegateCount < handlers.length ) {
		handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) }); }

		return handlerQueue; },

	fix: function( event ) { if ( event[ jQuery.expando ] ) { return event; }

		// Create a writable copy of the event object and normalize some properties var i, prop, copy, type =
		event.type, originalEvent = event, fixHook = this.fixHooks[ type ];

		if ( !fixHook ) { this.fixHooks[ type ] = fixHook = rmouseEvent.test( type ) ? this.mouseHooks :
			rkeyEvent.test( type ) ? this.keyHooks : {}; } copy = fixHook.props ? this.props.concat(
			fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length; while ( i-- ) { prop = copy[ i ]; event[ prop ] = originalEvent[ prop ]; }

		// Support: IE<9 // Fix target property (#1925) if ( !event.target ) { event.target =
		originalEvent.srcElement || document; }

		// Support: Chrome 23+, Safari? // Target should not be a text node (#504, #13143) if (
		event.target.nodeType === 3 ) { event.target = event.target.parentNode; }

		// Support: IE<9 // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event; },

	// Includes some event props shared by KeyEvent and MouseEvent props: "altKey bubbles cancelable ctrlKey
	currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: { props: "char charCode key keyCode".split(" "), filter: function( event, original ) {

			// Add which for key events if ( event.which == null ) { event.which = original.charCode != null ?
			original.charCode : original.keyCode; }

			return event; } },

	mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX
		screenY toElement".split(" "), filter: function( event, original ) { var body, eventDoc, doc, button =
		original.button, fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available if ( event.pageX == null &&
			original.clientX != null ) { eventDoc = event.target.ownerDocument || document; doc =
			eventDoc.documentElement; body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - (
				doc && doc.clientLeft || body && body.clientLeft || 0 ); event.pageY = original.clientY + ( doc
				&& doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body &&
				body.clientTop  || 0 ); }

			// Add relatedTarget, if necessary if ( !event.relatedTarget && fromElement ) { event.relatedTarget
			= fromElement === event.target ? original.toElement : fromElement; }

			// Add which for click: 1 === left; 2 === middle; 3 === right // Note: button is not normalized, so
			don't use it if ( !event.which && button !== undefined ) { event.which = ( button & 1 ? 1 : (
			button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) ); }

			return event; } },

	special: { load: { // Prevent triggered image.load events from bubbling to window.load noBubble: true },
		focus: { // Fire native event if possible so blur/focus sequence is correct trigger: function() { if (
		this !== safeActiveElement() && this.focus ) { try { this.focus(); return false; } catch ( e ) { //
		Support: IE<9 // If we error on focus to hidden element (#1486, #12518), // let .trigger() run the
		handlers } } }, delegateType: "focusin" }, blur: { trigger: function() { if ( this ===
		safeActiveElement() && this.blur ) { this.blur(); return false; } }, delegateType: "focusout" }, click:
		{ // For checkbox, fire native event so checked state will be right trigger: function() { if (
		jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) { this.click(); return
		false; } },

			// For cross-browser consistency, don't fire native .click() on links _default: function( event ) {
			return jQuery.nodeName( event.target, "a" ); } },

		beforeunload: { postDispatch: function( event ) {

				// Support: Firefox 20+ // Firefox doesn't alert if the returnValue field is not set. if (
				event.result !== undefined && event.originalEvent ) { event.originalEvent.returnValue =
				event.result; } } } },

	simulate: function( type, elem, event, bubble ) { // Piggyback on a donor event to simulate a different
		one. // Fake originalEvent to avoid donor's stopPropagation, but if the // simulated event prevents
		default then we do the same on the donor. var e = jQuery.extend( new jQuery.Event(), event, { type:
		type, isSimulated: true, originalEvent: {} } ); if ( bubble ) { jQuery.event.trigger( e, null, elem );
		} else { jQuery.event.dispatch.call( elem, e ); } if ( e.isDefaultPrevented() ) {
		event.preventDefault(); } } };

jQuery.removeEvent = document.removeEventListener ? function( elem, type, handle ) { if (
	elem.removeEventListener ) { elem.removeEventListener( type, handle, false ); } } : function( elem, type,
	handle ) { var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8 // detachEvent needed property
			on element, by name of that event, to properly expose it to GC if ( typeof elem[ name ] ===
			strundefined ) { elem[ name ] = null; }

			elem.detachEvent( name, handle ); } };

jQuery.Event = function( src, props ) { // Allow instantiation without the 'new' keyword if ( !(this instanceof
	jQuery.Event) ) { return new jQuery.Event( src, props ); }

	// Event object if ( src && src.type ) { this.originalEvent = src; this.type = src.type;

		// Events bubbling up the document may have been marked as prevented // by a handler lower down the
		tree; reflect the correct value. this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented
		=== undefined && // Support: IE < 9, Android < 4.0 src.returnValue === false ? returnTrue :
		returnFalse;

	// Event type } else { this.type = src; }

	// Put explicitly provided properties onto the event object if ( props ) { jQuery.extend( this, props ); }

	// Create a timestamp if incoming event doesn't have one this.timeStamp = src && src.timeStamp ||
	jQuery.now();

	// Mark it as fixed this[ jQuery.expando ] = true; };

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding //
http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html jQuery.Event.prototype = {
isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse,

	preventDefault: function() { var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue; if ( !e ) { return; }

		// If preventDefault exists, run it on the original event if ( e.preventDefault ) { e.preventDefault();

		// Support: IE // Otherwise set the returnValue property of the original event to false } else {
		e.returnValue = false; } }, stopPropagation: function() { var e = this.originalEvent;

		this.isPropagationStopped = returnTrue; if ( !e ) { return; } // If stopPropagation exists, run it on
		the original event if ( e.stopPropagation ) { e.stopPropagation(); }

		// Support: IE // Set the cancelBubble property of the original event to true e.cancelBubble = true; },
		stopImmediatePropagation: function() { var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) { e.stopImmediatePropagation(); }

		this.stopPropagation(); } };

// Create mouseenter/leave events using mouseover/out and event-time checks jQuery.each({ mouseenter:
"mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function( orig,
fix ) { jQuery.event.special[ orig ] = { delegateType: fix, bindType: fix,

		handle: function( event ) { var ret, target = this, related = event.relatedTarget, handleObj =
			event.handleObj;

			// For mousenter/leave call the handler if related is outside the target. // NB: No relatedTarget
			if the mouse left/entered the browser window if ( !related || (related !== target &&
			!jQuery.contains( target, related )) ) { event.type = handleObj.origType; ret =
			handleObj.handler.apply( this, arguments ); event.type = fix; } return ret; } }; });

// IE submit delegation if ( !support.submitBubbles ) {

	jQuery.event.special.submit = { setup: function() { // Only need this for delegated form submit events if (
		jQuery.nodeName( this, "form" ) ) { return false; }

			// Lazy-add a submit handler when a descendant form may potentially be submitted jQuery.event.add(
			this, "click._submit keypress._submit", function( e ) { // Node name check avoids a VML-related
			crash in IE (#9807) var elem = e.target, form = jQuery.nodeName( elem, "input" ) ||
			jQuery.nodeName( elem, "button" ) ? elem.form : undefined; if ( form && !jQuery._data( form,
			"submitBubbles" ) ) { jQuery.event.add( form, "submit._submit", function( event ) {
			event._submit_bubble = true; }); jQuery._data( form, "submitBubbles", true ); } }); // return
			undefined since we don't need an event listener },

		postDispatch: function( event ) { // If form was submitted by the user, bubble the event up the tree if
			( event._submit_bubble ) { delete event._submit_bubble; if ( this.parentNode && !event.isTrigger )
			{ jQuery.event.simulate( "submit", this.parentNode, event, true ); } } },

		teardown: function() { // Only need this for delegated form submit events if ( jQuery.nodeName( this,
			"form" ) ) { return false; }

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" ); } }; }

// IE change delegation and checkbox/radio fix if ( !support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) { // IE doesn't fire change on a check/radio until blur;
				trigger it on click // after a propertychange. Eat the blur-change in special.change.handle. //
				This still fires onchange a second time for check/radio after blur. if ( this.type ===
				"checkbox" || this.type === "radio" ) { jQuery.event.add( this, "propertychange._change",
				function( event ) { if ( event.originalEvent.propertyName === "checked" ) { this._just_changed
				= true; } }); jQuery.event.add( this, "click._change", function( event ) { if (
				this._just_changed && !event.isTrigger ) { this._just_changed = false; } // Allow triggered,
				simulated change events (#11500) jQuery.event.simulate( "change", this, event, true ); }); }
				return false; } // Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) { var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) { if ( this.parentNode &&
					!event.isSimulated && !event.isTrigger ) { jQuery.event.simulate( "change",
					this.parentNode, event, true ); } }); jQuery._data( elem, "changeBubbles", true ); } }); },

		handle: function( event ) { var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above if ( this !==
			elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")
			) { return event.handleObj.handler.apply( this, arguments ); } },

		teardown: function() { jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName ); } }; }

// Create "bubbling" focus and blur events if ( !support.focusinBubbles ) { jQuery.each({ focus: "focusin",
blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout var handler =
		function( event ) { jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true ); };

		jQuery.event.special[ fix ] = { setup: function() { var doc = this.ownerDocument || this, attaches =
			jQuery._data( doc, fix );

				if ( !attaches ) { doc.addEventListener( orig, handler, true ); } jQuery._data( doc, fix, (
					attaches || 0 ) + 1 ); }, teardown: function() { var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) { doc.removeEventListener( orig, handler, true ); jQuery._removeData( doc, fix
					); } else { jQuery._data( doc, fix, attaches ); } } }; }); }

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) { var type, origFn;

		// Types can be a map of types/handlers if ( typeof types === "object" ) { // ( types-Object, selector,
		data ) if ( typeof selector !== "string" ) { // ( types-Object, data ) data = data || selector;
		selector = undefined; } for ( type in types ) { this.on( type, selector, data, types[ type ], one ); }
		return this; }

		if ( data == null && fn == null ) { // ( types, fn ) fn = selector; data = selector = undefined; } else
			if ( fn == null ) { if ( typeof selector === "string" ) { // ( types, selector, fn ) fn = data;
			data = undefined; } else { // ( types, data, fn ) fn = data; data = selector; selector = undefined;
			} } if ( fn === false ) { fn = returnFalse; } else if ( !fn ) { return this; }

		if ( one === 1 ) { origFn = fn; fn = function( event ) { // Can use an empty set, since event contains
			the info jQuery().off( event ); return origFn.apply( this, arguments ); }; // Use same guid so
			caller can remove using origFn fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ ); } return
			this.each( function() { jQuery.event.add( this, types, fn, data, selector ); }); }, one: function(
			types, selector, data, fn ) { return this.on( types, selector, data, fn, 1 ); }, off: function(
			types, selector, fn ) { var handleObj, type; if ( types && types.preventDefault && types.handleObj
			) { // ( event )  dispatched jQuery.Event handleObj = types.handleObj; jQuery( types.delegateTarget
			).off( handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
			handleObj.selector, handleObj.handler ); return this; } if ( typeof types === "object" ) { // (
			types-object [, selector] ) for ( type in types ) { this.off( type, selector, types[ type ] ); }
			return this; } if ( selector === false || typeof selector === "function" ) { // ( types [, fn] ) fn
			= selector; selector = undefined; } if ( fn === false ) { fn = returnFalse; } return
			this.each(function() { jQuery.event.remove( this, types, fn, selector ); }); },

	trigger: function( type, data ) { return this.each(function() { jQuery.event.trigger( type, data, this );
		}); }, triggerHandler: function( type, data ) { var elem = this[0]; if ( elem ) { return
		jQuery.event.trigger( type, data, elem, true ); } } });


function createSafeFragment( document ) { var list = nodeNames.split( "|" ), safeFrag =
	document.createDocumentFragment();

	if ( safeFrag.createElement ) { while ( list.length ) { safeFrag.createElement( list.pop() ); } } return
		safeFrag; }

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", rinlinejQuery = /
		jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
		rleadingWhitespace = /^\s+/, rxhtmlTag =
		/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/,
		rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, // checked="checked"
		or checked rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200) wrapMap = { option: [ 1, "<select
	multiple='multiple'>", "</select>" ], legend: [ 1, "<fieldset>", "</fieldset>" ], area: [ 1, "<map>",
	"</map>" ], param: [ 1, "<object>", "</object>" ], thead: [ 1, "<table>", "</table>" ], tr: [ 2,
	"<table><tbody>", "</tbody></table>" ], col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"
	], td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags, // unless wrapped in a div
		with non-breaking characters in front of it. _default: support.htmlSerialize ? [ 0, "", "" ] : [ 1,
		"X<div>", "</div>"  ] }, safeFragment = createSafeFragment( document ), fragmentDiv =
		safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option; wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption =
wrapMap.thead; wrapMap.th = wrapMap.td;

function getAll( context, tag ) { var elems, elem, i = 0, found = typeof context.getElementsByTagName !==
	strundefined ? context.getElementsByTagName( tag || "*" ) : typeof context.querySelectorAll !==
	strundefined ? context.querySelectorAll( tag || "*" ) : undefined;

	if ( !found ) { for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
		if ( !tag || jQuery.nodeName( elem, tag ) ) { found.push( elem ); } else { jQuery.merge( found, getAll(
		elem, tag ) ); } } }

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ? jQuery.merge( [ context ], found ) :
		found; }

// Used in buildFragment, fixes the defaultChecked property function fixDefaultChecked( elem ) { if (
rcheckableType.test( elem.type ) ) { elem.defaultChecked = elem.checked; } }

// Support: IE<8 // Manipulating tables requires a tbody function manipulationTarget( elem, content ) { return
jQuery.nodeName( elem, "table" ) && jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild,
"tr" ) ?

		elem.getElementsByTagName("tbody")[0] || elem.appendChild( elem.ownerDocument.createElement("tbody") )
			: elem; }

// Replace/restore the type attribute of script elements for safe DOM manipulation function disableScript( elem
) { elem.type = (jQuery.find.attr( elem, "type" ) !== null) + "/" + elem.type; return elem; } function
restoreScript( elem ) { var match = rscriptTypeMasked.exec( elem.type ); if ( match ) { elem.type = match[1]; }
else { elem.removeAttribute("type"); } return elem; }

// Mark scripts as having already been evaluated function setGlobalEval( elems, refElements ) { var elem, i =
0; for ( ; (elem = elems[i]) != null; i++ ) { jQuery._data( elem, "globalEval", !refElements || jQuery._data(
refElements[i], "globalEval" ) ); } }

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) { return; }

	var type, i, l, oldData = jQuery._data( src ), curData = jQuery._data( dest, oldData ), events =
		oldData.events;

	if ( events ) { delete curData.handle; curData.events = {};

		for ( type in events ) { for ( i = 0, l = events[ type ].length; i < l; i++ ) { jQuery.event.add( dest,
			type, events[ type ][ i ] ); } } }

	// make the cloned public data object a copy from the original if ( curData.data ) { curData.data =
	jQuery.extend( {}, curData.data ); } }

function fixCloneNodeIssues( src, dest ) { var nodeName, e, data;

	// We do not need to do anything for non-Elements if ( dest.nodeType !== 1 ) { return; }

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode. if ( !support.noCloneEvent && dest[
	jQuery.expando ] ) { data = jQuery._data( dest );

		for ( e in data.events ) { jQuery.removeEvent( dest, e, data.handle ); }

		// Event data gets referenced instead of copied if the expando gets copied too dest.removeAttribute(
		jQuery.expando ); }

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text if ( nodeName === "script"
	&& dest.text !== src.text ) { disableScript( dest ).text = src.text; restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid. // IE10 throws
	NoModificationAllowedError if parent is null, #12132. } else if ( nodeName === "object" ) { if (
	dest.parentNode ) { dest.outerHTML = src.outerHTML; }

		// This path appears unavoidable for IE9. When cloning an object // element in IE9, the outerHTML
		strategy above is not sufficient. // If the src has innerHTML and the destination does not, // copy the
		src.innerHTML into the dest.innerHTML. #10324 if ( support.html5Clone && ( src.innerHTML &&
		!jQuery.trim(dest.innerHTML) ) ) { dest.innerHTML = src.innerHTML; }

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) { // IE6-8 fails to persist the
		checked state of a cloned checkbox // or radio button. Worse, IE6-7 fail to give the cloned element //
		a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned // checkbox/radio button to an empty
		string instead of "on" if ( dest.value !== src.value ) { dest.value = src.value; }

	// IE6-8 fails to return the selected option to the default selected // state when cloning options } else
	if ( nodeName === "option" ) { dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when // cloning other types of input fields }
	else if ( nodeName === "input" || nodeName === "textarea" ) { dest.defaultValue = src.defaultValue; } }

jQuery.extend({ clone: function( elem, dataAndEvents, deepDataAndEvents ) { var destElements, node, clone, i,
	srcElements, inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes } else { fragmentDiv.innerHTML =
		elem.outerHTML; fragmentDiv.removeChild( clone = fragmentDiv.firstChild ); }

		if ( (!support.noCloneEvent || !support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType ===
				11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2 destElements
			= getAll( clone ); srcElements = getAll( elem );

			// Fix all IE cloning issues for ( i = 0; (node = srcElements[i]) != null; ++i ) { // Ensure that
			the destination node is not null; Fixes #9587 if ( destElements[i] ) { fixCloneNodeIssues( node,
			destElements[i] ); } } }

		// Copy the events from the original to the clone if ( dataAndEvents ) { if ( deepDataAndEvents ) {
		srcElements = srcElements || getAll( elem ); destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) { cloneCopyEvent( node, destElements[i] );
					} } else { cloneCopyEvent( elem, clone ); } }

		// Preserve script evaluation history destElements = getAll( clone, "script" ); if (
		destElements.length > 0 ) { setGlobalEval( destElements, !inPage && getAll( elem, "script" ) ); }

		destElements = srcElements = node = null;

		// Return the cloned set return clone; },

	buildFragment: function( elems, context, scripts, selection ) { var j, elem, contains, tmp, tag, tbody,
		wrap, l = elems.length,

			// Ensure a safe fragment safe = createSafeFragment( context ),

			nodes = [], i = 0;

		for ( ; i < l; i++ ) { elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly if ( jQuery.type( elem ) === "object" ) { jQuery.merge( nodes,
				elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node } else if ( !rhtml.test( elem ) ) { nodes.push(
				context.createTextNode( elem ) );

				// Convert html into DOM nodes } else { tmp = tmp || safe.appendChild(
				context.createElement("div") );

					// Deserialize a standard representation tag = (rtagName.exec( elem ) || [ "", "" ])[ 1
					].toLowerCase(); wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content j = wrap[0]; while ( j-- ) { tmp =
					tmp.lastChild; }

					// Manually add leading whitespace removed by IE if ( !support.leadingWhitespace &&
					rleadingWhitespace.test( elem ) ) { nodes.push( context.createTextNode(
					rleadingWhitespace.exec( elem )[0] ) ); }

					// Remove IE's autoinserted <tbody> from table fragments if ( !support.tbody ) {

						// String was a <table>, *may* have spurious <tbody> elem = tag === "table" &&
						!rtbody.test( elem ) ? tmp.firstChild :

							// String was a bare <thead> or <tfoot> wrap[1] === "<table>" && !rtbody.test( elem
							) ? tmp : 0;

						j = elem && elem.childNodes.length; while ( j-- ) { if ( jQuery.nodeName( (tbody =
						elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) { elem.removeChild( tbody
						); } } }

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9 tmp.textContent = "";

					// Fix #12392 for oldIE while ( tmp.firstChild ) { tmp.removeChild( tmp.firstChild ); }

					// Remember the top-level container for proper cleanup tmp = safe.lastChild; } } }

		// Fix #11356: Clear elements from fragment if ( tmp ) { safe.removeChild( tmp ); }

		// Reset defaultChecked for any radios and checkboxes // about to be appended to the DOM in IE 6/7
		(#8060) if ( !support.appendChecked ) { jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked ); }

		i = 0; while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is // that element, do not do
			anything if ( selection && jQuery.inArray( elem, selection ) !== -1 ) { continue; }

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history if ( contains ) { setGlobalEval( tmp ); }

			// Capture executables if ( scripts ) { j = 0; while ( (elem = tmp[ j++ ]) ) { if (
			rscriptType.test( elem.type || "" ) ) { scripts.push( elem ); } } } }

		tmp = null;

		return safe; },

	cleanData: function( elems, /* internal */ acceptData ) { var elem, type, id, data, i = 0, internalKey =
		jQuery.expando, cache = jQuery.cache, deleteExpando = support.deleteExpando, special =
		jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) { if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ]; data = id && cache[ id ];

				if ( data ) { if ( data.events ) { for ( type in data.events ) { if ( special[ type ] ) {
					jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead } else {
							jQuery.removeEvent( elem, type, data.handle ); } } }

					// Remove cache only if it was not already removed by jQuery.event.remove if ( cache[ id ]
					) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes, // nor does it have a
						removeAttribute function on Document nodes; // we must handle all of these cases if (
						deleteExpando ) { delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== strundefined ) { elem.removeAttribute(
							internalKey );

						} else { elem[ internalKey ] = null; }

						deletedIds.push( id ); } } } } } });

jQuery.fn.extend({ text: function( value ) { return access( this, function( value ) { return value ===
	undefined ? jQuery.text( this ) : this.empty().append( ( this[0] && this[0].ownerDocument || document
	).createTextNode( value ) ); }, null, value, arguments.length ); },

	append: function() { return this.domManip( arguments, function( elem ) { if ( this.nodeType === 1 ||
		this.nodeType === 11 || this.nodeType === 9 ) { var target = manipulationTarget( this, elem );
		target.appendChild( elem ); } }); },

	prepend: function() { return this.domManip( arguments, function( elem ) { if ( this.nodeType === 1 ||
		this.nodeType === 11 || this.nodeType === 9 ) { var target = manipulationTarget( this, elem );
		target.insertBefore( elem, target.firstChild ); } }); },

	before: function() { return this.domManip( arguments, function( elem ) { if ( this.parentNode ) {
		this.parentNode.insertBefore( elem, this ); } }); },

	after: function() { return this.domManip( arguments, function( elem ) { if ( this.parentNode ) {
		this.parentNode.insertBefore( elem, this.nextSibling ); } }); },

	remove: function( selector, keepData /* Internal Use Only */ ) { var elem, elems = selector ?
		jQuery.filter( selector, this ) : this, i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( !keepData && elem.nodeType === 1 ) { jQuery.cleanData( getAll( elem ) ); }

			if ( elem.parentNode ) { if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
				setGlobalEval( getAll( elem, "script" ) ); } elem.parentNode.removeChild( elem ); } }

		return this; },

	empty: function() { var elem, i = 0;

		for ( ; (elem = this[i]) != null; i++ ) { // Remove element nodes and prevent memory leaks if (
			elem.nodeType === 1 ) { jQuery.cleanData( getAll( elem, false ) ); }

			// Remove any remaining nodes while ( elem.firstChild ) { elem.removeChild( elem.firstChild ); }

			// If this is a select, ensure that it displays empty (#12336) // Support: IE<9 if ( elem.options
			&& jQuery.nodeName( elem, "select" ) ) { elem.options.length = 0; } }

		return this; },

	clone: function( dataAndEvents, deepDataAndEvents ) { dataAndEvents = dataAndEvents == null ? false :
		dataAndEvents; deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() { return jQuery.clone( this, dataAndEvents, deepDataAndEvents ); }); },

	html: function( value ) { return access( this, function( value ) { var elem = this[ 0 ] || {}, i = 0, l =
		this.length;

			if ( value === undefined ) { return elem.nodeType === 1 ? elem.innerHTML.replace( rinlinejQuery, ""
				) : undefined; }

			// See if we can take a shortcut and just use innerHTML if ( typeof value === "string" &&
			!rnoInnerhtml.test( value ) && ( support.htmlSerialize || !rnoshimcache.test( value )  ) && (
			support.leadingWhitespace || !rleadingWhitespace.test( value ) ) && !wrapMap[ (rtagName.exec( value
			) || [ "", "" ])[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try { for (; i < l; i++ ) { // Remove element nodes and prevent memory leaks elem = this[i] ||
					{}; if ( elem.nodeType === 1 ) { jQuery.cleanData( getAll( elem, false ) ); elem.innerHTML
					= value; } }

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method } catch(e) {} }

			if ( elem ) { this.empty().append( value ); } }, null, value, arguments.length ); },

	replaceWith: function() { var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content this.domManip( arguments,
		function( elem ) { arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) { arg.replaceChild( elem, this ); } });

		// Force removal if there was no new content (e.g., from empty arguments) return arg && (arg.length ||
		arg.nodeType) ? this : this.remove(); },

	detach: function( selector ) { return this.remove( selector, true ); },

	domManip: function( args, callback ) {

		// Flatten any nested arrays args = concat.apply( [], args );

		var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l -
			1, value = args[0], isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit if ( isFunction || ( l > 1 && typeof
		value === "string" && !support.checkClone && rchecked.test( value ) ) ) { return this.each(function(
		index ) { var self = set.eq( index ); if ( isFunction ) { args[0] = value.call( this, index,
		self.html() ); } self.domManip( args, callback ); }); }

		if ( l ) { fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this ); first =
			fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) { fragment = first; }

			if ( first ) { scripts = jQuery.map( getAll( fragment, "script" ), disableScript ); hasScripts =
				scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up //
				being emptied incorrectly in certain situations (#8070). for ( ; i < l; i++ ) { node =
				fragment;

					if ( i !== iNoClone ) { node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration if ( hasScripts ) {
						jQuery.merge( scripts, getAll( node, "script" ) ); } }

					callback.call( this[i], node, i ); }

				if ( hasScripts ) { doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion for ( i = 0; i < hasScripts; i++
					) { node = scripts[ i ]; if ( rscriptType.test( node.type || "" ) && !jQuery._data( node,
					"globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) { // Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) { jQuery._evalUrl( node.src ); } } else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || ""
								).replace( rcleanScript, "" ) ); } } } }

				// Fix #11809: Avoid leaking memory fragment = first = null; } }

		return this; } });

jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after",
	replaceAll: "replaceWith" }, function( name, original ) { jQuery.fn[ name ] = function( selector ) { var
	elems, i = 0, ret = [], insert = jQuery( selector ), last = insert.length - 1;

		for ( ; i <= last; i++ ) { elems = i === last ? this : this.clone(true); jQuery( insert[i] )[ original
			]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get() push.apply(
			ret, elems.get() ); }

		return this.pushStack( ret ); }; });


var iframe, elemdisplay = {};

/** * Retrieve the actual display of a element * @param {String} name nodeName of the element * @param {Object}
 doc Document object */ // Called only from within defaultDisplay function actualDisplay( name, doc ) { var
 style, elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element display =
		window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optmization) until something better comes
			along, // since it was removed from specification and supported only in FF style.display :
			jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element, // so use "detach" method as fast way to get rid of the
	element elem.detach();

	return display; }

/** * Try to determine the default display value of an element * @param {String} nodeName */ function
 defaultDisplay( nodeName ) { var doc = document, display = elemdisplay[ nodeName ];

	if ( !display ) { display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe if ( display === "none" || !display ) {

			// Use the already-created iframe if possible iframe = (iframe || jQuery( "<iframe frameborder='0'
			width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse doc = ( iframe[ 0
			].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE doc.write(); doc.close();

			display = actualDisplay( nodeName, doc ); iframe.detach(); }

		// Store the correct default display elemdisplay[ nodeName ] = display; }

	return display; }


(function() { var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() { if ( shrinkWrapBlocksVal != null ) { return shrinkWrapBlocksVal; }

		// Will be changed later if needed. shrinkWrapBlocksVal = false;

		// Minified: var b,c,d var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ]; if ( !body || !body.style ) { // Test fired too
		early or in an unsupported environment, exit. return; }

		// Setup div = document.createElement( "div" ); container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6 // Check if elements with layout shrink-wrap their children if ( typeof div.style.zoom
		!== strundefined ) { // Reset CSS: box-sizing; display; margin; border div.style.cssText = // Support:
		Firefox<29, Android 2.3 // Vendor-prefix box-sizing
		"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
		"box-sizing:content-box;display:block;margin:0;border:0;" + "padding:1px;width:1px;zoom:1";
		div.appendChild( document.createElement( "div" ) ).style.width = "5px"; shrinkWrapBlocksVal =
		div.offsetWidth !== 3; }

		body.removeChild( container );

		return shrinkWrapBlocksVal; };

})(); var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles, curCSS, rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) { getStyles = function( elem ) { return
	elem.ownerDocument.defaultView.getComputedStyle( elem, null ); };

	curCSS = function( elem, name, computed ) { var width, minWidth, maxWidth, ret, style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537 ret = computed ?
		computed.getPropertyValue( name ) || computed[ name ] : undefined;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) { ret = jQuery.style( elem, name
				); }

			// A tribute to the "awesome hack by Dean Edwards" // Chrome < 17 and Safari 5.0 uses "computed
			value" instead of "used value" for margin-right // Safari 5.1.7 (at least) returns percentage for a
			larger set of values, but width seems to be reliably pixels // this is against the CSSOM draft
			spec: http://dev.w3.org/csswg/cssom/#resolved-values if ( rnumnonpx.test( ret ) && rmargin.test(
			name ) ) {

				// Remember the original values width = style.width; minWidth = style.minWidth; maxWidth =
				style.maxWidth;

				// Put in the new values to get a computed value out style.minWidth = style.maxWidth =
				style.width = ret; ret = computed.width;

				// Revert the changed values style.width = width; style.minWidth = minWidth; style.maxWidth =
				maxWidth; } }

		// Support: IE // IE returns zIndex value as an integer. return ret === undefined ? ret : ret + ""; };
		} else if ( document.documentElement.currentStyle ) { getStyles = function( elem ) { return
		elem.currentStyle; };

	curCSS = function( elem, name, computed ) { var left, rs, rsLeft, ret, style = elem.style;

		computed = computed || getStyles( elem ); ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here // so we don't default to auto if ( ret == null && style &&
		style[ name ] ) { ret = style[ name ]; }

		// From the awesome hack by Dean Edwards //
		http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number // but a number that has a weird ending, we need to
		convert it to pixels // but not position css attributes, as those are proportional to the parent
		element instead // and we can't measure the parent instead because it might trigger a "stacking dolls"
		problem if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values left = style.left; rs = elem.runtimeStyle; rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out if ( rsLeft ) { rs.left =
			elem.currentStyle.left; } style.left = name === "fontSize" ? "1em" : ret; ret = style.pixelLeft +
			"px";

			// Revert the changed values style.left = left; if ( rsLeft ) { rs.left = rsLeft; } }

		// Support: IE // IE returns zIndex value as an integer. return ret === undefined ? ret : ret + "" ||
		"auto"; }; }




function addGetHookIf( conditionFn, hookFn ) { // Define the hook, we'll check on the first run if it's really
	needed. return { get: function() { var condition = conditionFn();

			if ( condition == null ) { // The test was not ready at this point; screw the hook this time // but
				check again when needed next time. return; }

			if ( condition ) { // Hook not needed (or it's not possible to use it due to missing dependency),
				// remove it. // Since there are no other hooks for marginRight, remove the whole object.
				delete this.get; return; }

			// Hook needed; redefine it so that the support test is not executed again.

			return (this.get = hookFn).apply( this, arguments ); } }; }


(function() { // Minified: var b,c,d,e,f,g, h,i var div, style, a, pixelPositionVal, boxSizingReliableVal,
	reliableHiddenOffsetsVal, reliableMarginRightVal;

	// Setup div = document.createElement( "div" ); div.innerHTML = "  <link/><table></table><a
	href='/a'>a</a><input type='checkbox'/>"; a = div.getElementsByTagName( "a" )[ 0 ]; style = a && a.style;

	// Finish early in limited (non-browser) environments if ( !style ) { return; }

	style.cssText = "float:left;opacity:.5";

	// Support: IE<9 // Make sure that element opacity exists (as opposed to filter) support.opacity =
	style.opacity === "0.5";

	// Verify style float existence // (IE uses styleFloat instead of cssFloat) support.cssFloat =
	!!style.cssFloat;

	div.style.backgroundClip = "content-box"; div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Support: Firefox<29, Android 2.3 // Vendor-prefix box-sizing support.boxSizing = style.boxSizing === ""
	|| style.MozBoxSizing === "" || style.WebkitBoxSizing === "";

	jQuery.extend(support, { reliableHiddenOffsets: function() { if ( reliableHiddenOffsetsVal == null ) {
		computeStyleTests(); } return reliableHiddenOffsetsVal; },

		boxSizingReliable: function() { if ( boxSizingReliableVal == null ) { computeStyleTests(); } return
			boxSizingReliableVal; },

		pixelPosition: function() { if ( pixelPositionVal == null ) { computeStyleTests(); } return
			pixelPositionVal; },

		// Support: Android 2.3 reliableMarginRight: function() { if ( reliableMarginRightVal == null ) {
		computeStyleTests(); } return reliableMarginRightVal; } });

	function computeStyleTests() { // Minified: var b,c,d,j var div, body, container, contents;

		body = document.getElementsByTagName( "body" )[ 0 ]; if ( !body || !body.style ) { // Test fired too
		early or in an unsupported environment, exit. return; }

		// Setup div = document.createElement( "div" ); container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		div.style.cssText = // Support: Firefox<29, Android 2.3 // Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";

		// Support: IE<9 // Assume reasonable values in the absence of getComputedStyle pixelPositionVal =
		boxSizingReliableVal = false; reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9. if ( window.getComputedStyle ) {
		pixelPositionVal = ( window.getComputedStyle( div, null ) || {} ).top !== "1%"; boxSizingReliableVal =
		( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3 // Div with explicit width and no margin-right incorrectly // gets computed
			margin-right based on width of container (#3333) // WebKit Bug 13343 - getComputedStyle returns
			wrong value for margin-right contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding contents.style.cssText =
			div.style.cssText = // Support: Firefox<29, Android 2.3 // Vendor-prefix box-sizing
			"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
			"box-sizing:content-box;display:block;margin:0;border:0;padding:0"; contents.style.marginRight =
			contents.style.width = "0"; div.style.width = "1px";

			reliableMarginRightVal = !parseFloat( ( window.getComputedStyle( contents, null ) || {}
				).marginRight ); }

		// Support: IE8 // Check if table cells still have offsetWidth/Height when they are set // to
		display:none and there are still other visible table cells in a // table row; if so, offsetWidth/Height
		are not reliable for use when // determining if an element has been hidden directly using //
		display:none (it is still safe to use offsets if a parent element is // hidden; don safety goggles and
		see bug #4512 for more information). div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		contents = div.getElementsByTagName( "td" ); contents[ 0 ].style.cssText =
		"margin:0;border:0;padding:0;display:none"; reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight ===
		0; if ( reliableHiddenOffsetsVal ) { contents[ 0 ].style.display = ""; contents[ 1 ].style.display =
		"none"; reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0; }

		body.removeChild( container ); }

})();


// A method for quickly swapping in/out CSS properties to get correct calculations. jQuery.swap = function(
elem, options, callback, args ) { var ret, name, old = {};

	// Remember the old values, and insert the new ones for ( name in options ) { old[ name ] = elem.style[
	name ]; elem.style[ name ] = options[ name ]; }

	ret = callback.apply( elem, args || [] );

	// Revert the old values for ( name in options ) { elem.style[ name ] = old[ name ]; }

	return ret; };


var ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/,

	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption" //
	see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display rdisplayswap =
	/^(none|table(?!-c[ea]).+)/, rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ), rrelNum = new RegExp(
	"^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
	letterSpacing: "0", fontWeight: "400" },

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];


// return a css property mapped to a potentially vendor prefixed property function vendorPropName( style, name
) {

	// shortcut for names that are not vendor prefixed if ( name in style ) { return name; }

	// check for vendor prefixed names var capName = name.charAt(0).toUpperCase() + name.slice(1), origName =
	name, i = cssPrefixes.length;

	while ( i-- ) { name = cssPrefixes[ i ] + capName; if ( name in style ) { return name; } }

	return origName; }

function showHide( elements, show ) { var display, elem, hidden, values = [], index = 0, length =
	elements.length;

	for ( ; index < length; index++ ) { elem = elements[ index ]; if ( !elem.style ) { continue; }

		values[ index ] = jQuery._data( elem, "olddisplay" ); display = elem.style.display; if ( show ) { //
		Reset the inline display of this element to learn if it is // being hidden by cascaded rules or not if
		( !values[ index ] && display === "none" ) { elem.style.display = ""; }

			// Set elements which have been overridden with display: none // in a stylesheet to whatever the
			default browser style is // for such an element if ( elem.style.display === "" && isHidden( elem )
			) { values[ index ] = jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) ); } } else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) { jQuery._data( elem, "olddisplay", hidden ?
				display : jQuery.css( elem, "display" ) ); } } }

	// Set the display of most of the elements in a second loop // to avoid the constant reflow for ( index =
	0; index < length; index++ ) { elem = elements[ index ]; if ( !elem.style ) { continue; } if ( !show ||
	elem.style.display === "none" || elem.style.display === "" ) { elem.style.display = show ? values[ index ]
	|| "" : "none"; } }

	return elements; }

function setPositiveNumber( elem, value, subtract ) { var matches = rnumsplit.exec( value ); return matches ?
	// Guard against undefined "subtract", e.g., when used as in cssHooks Math.max( 0, matches[ 1 ] - (
	subtract || 0 ) ) + ( matches[ 2 ] || "px" ) : value; }

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) { var i = extra === ( isBorderBox ?
	"border" : "content" ) ? // If we already have the right measurement, avoid augmentation 4 : // Otherwise
	initialize for horizontal or vertical properties name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) { // both box models exclude margin, so add it if we want it if ( extra ===
		"margin" ) { val += jQuery.css( elem, extra + cssExpand[ i ], true, styles ); }

		if ( isBorderBox ) { // border-box includes padding, so remove it if we want content if ( extra ===
			"content" ) { val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles ); }

			// at this point, extra isn't border nor margin, so remove border if ( extra !== "margin" ) { val
			-= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles ); } } else { // at this
			point, extra isn't content, so add padding val += jQuery.css( elem, "padding" + cssExpand[ i ],
			true, styles );

			// at this point, extra isn't content nor padding, so add border if ( extra !== "padding" ) { val
			+= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles ); } } }

	return val; }

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value var valueIsBorderBox = true, val
	= name === "width" ? elem.offsetWidth : elem.offsetHeight, styles = getStyles( elem ), isBorderBox =
	support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined // svg -
	https://bugzilla.mozilla.org/show_bug.cgi?id=649285 // MathML -
	https://bugzilla.mozilla.org/show_bug.cgi?id=491668 if ( val <= 0 || val == null ) { // Fall back to
	computed then uncomputed css if necessary val = curCSS( elem, name, styles ); if ( val < 0 || val == null )
	{ val = elem.style[ name ]; }

		// Computed unit is not pixels. Stop here and return. if ( rnumnonpx.test(val) ) { return val; }

		// we need the check for style in case a browser which returns unreliable values // for
		getComputedStyle silently falls back to the reliable elem.style valueIsBorderBox = isBorderBox && (
		support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra val = parseFloat( val ) || 0; }

	// use the active box-sizing model to add/subtract irrelevant styles return ( val + augmentWidthOrHeight(
	elem, name, extra || ( isBorderBox ? "border" : "content" ), valueIsBorderBox, styles ) ) + "px"; }

jQuery.extend({ // Add in style property hooks for overriding the default // behavior of getting and setting a
	style property cssHooks: { opacity: { get: function( elem, computed ) { if ( computed ) { // We should
	always get a number back from opacity var ret = curCSS( elem, "opacity" ); return ret === "" ? "1" : ret; }
	} } },

	// Don't automatically add "px" to these possibly-unitless properties cssNumber: { "columnCount": true,
	"fillOpacity": true, "flexGrow": true, "flexShrink": true, "fontWeight": true, "lineHeight": true,
	"opacity": true, "order": true, "orphans": true, "widows": true, "zIndex": true, "zoom": true },

	// Add in properties whose names you wish to fix before // setting or getting the value cssProps: { //
	normalize float css property "float": support.cssFloat ? "cssFloat" : "styleFloat" },

	// Get and set the style property on a DOM Node style: function( elem, name, value, extra ) { // Don't set
	styles on text and comment nodes if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style )
	{ return; }

		// Make sure that we're working with the right name var ret, type, hooks, origName = jQuery.camelCase(
		name ), style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName )
		);

		// gets hook for the prefixed version // followed by the unprefixed version hooks = jQuery.cssHooks[
		name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value if ( value !== undefined ) { type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345 if ( type === "string" &&
			(ret = rrelNum.exec( value )) ) { value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem,
			name ) ); // Fixes bug #9237 type = "number"; }

			// Make sure that null and NaN values aren't set. See: #7116 if ( value == null || value !== value
			) { return; }

			// If a number was passed in, add 'px' to the (except for certain CSS properties) if ( type ===
			"number" && !jQuery.cssNumber[ origName ] ) { value += "px"; }

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks, // but it would
			mean to define eight (for every problematic property) identical functions if (
			!support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) { style[ name ] =
			"inherit"; }

			// If a hook was provided, use that value, otherwise just set the specified value if ( !hooks ||
			!("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Support: IE // Swallow errors from 'invalid' CSS values (#5509) try { style[ name ] = value;
				} catch(e) {} }

		} else { // If a hook was provided get the non-computed value from there if ( hooks && "get" in hooks
			&& (ret = hooks.get( elem, false, extra )) !== undefined ) { return ret; }

			// Otherwise just get the value from the style object return style[ name ]; } },

	css: function( elem, name, extra, styles ) { var num, val, hooks, origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name name = jQuery.cssProps[ origName ] || (
		jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version // followed by the unprefixed version hooks = jQuery.cssHooks[
		name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there if ( hooks && "get" in hooks ) { val =
		hooks.get( elem, true, extra ); }

		// Otherwise, if a way to get the computed value exists, use that if ( val === undefined ) { val =
		curCSS( elem, name, styles ); }

		//convert "normal" to computed value if ( val === "normal" && name in cssNormalTransform ) { val =
		cssNormalTransform[ name ]; }

		// Return, converting to number if forced or a qualifier was provided and val looks numeric if ( extra
		=== "" || extra ) { num = parseFloat( val ); return extra === true || jQuery.isNumeric( num ) ? num ||
		0 : val; } return val; } });

jQuery.each([ "height", "width" ], function( i, name ) { jQuery.cssHooks[ name ] = { get: function( elem,
	computed, extra ) { if ( computed ) { // certain elements can have dimension info if we invisibly show them
	// however, it must have a current display style that would benefit from this return rdisplayswap.test(
	jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ? jQuery.swap( elem, cssShow, function() { return
	getWidthOrHeight( elem, name, extra ); }) : getWidthOrHeight( elem, name, extra ); } },

		set: function( elem, value, extra ) { var styles = extra && getStyles( elem ); return
			setPositiveNumber( elem, value, extra ? augmentWidthOrHeight( elem, name, extra, support.boxSizing
			&& jQuery.css( elem, "boxSizing", false, styles ) === "border-box", styles ) : 0 ); } }; });

if ( !support.opacity ) { jQuery.cssHooks.opacity = { get: function( elem, computed ) { // IE uses filters for
	opacity return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter :
	elem.style.filter) || "" ) ? ( 0.01 * parseFloat( RegExp.$1 ) ) + "" : computed ? "1" : ""; },

		set: function( elem, value ) { var style = elem.style, currentStyle = elem.currentStyle, opacity =
			jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "", filter = currentStyle &&
			currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout // Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685 if ( ( value >= 1 || value === "" ) &&
			jQuery.trim( filter.replace( ralpha, "" ) ) === "" && style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText // if "filter:"
				is present at all, clearType is disabled, we want to avoid this // style.removeAttribute is IE
				Only, but so apparently is this code path... style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done if (
				value === "" || currentStyle && !currentStyle.filter ) { return; } }

			// otherwise, set new filter values style.filter = ralpha.test( filter ) ? filter.replace( ralpha,
			opacity ) : filter + " " + opacity; } }; }

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight, function( elem, computed ) { if (
	computed ) { // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right // Work around by
	temporarily setting element display to inline-block return jQuery.swap( elem, { "display": "inline-block"
	}, curCSS, [ elem, "marginRight" ] ); } } );

// These hooks are used by animate to expand properties jQuery.each({ margin: "", padding: "", border: "Width"
}, function( prefix, suffix ) { jQuery.cssHooks[ prefix + suffix ] = { expand: function( value ) { var i = 0,
expanded = {},

				// assumes a single number if not a string parts = typeof value === "string" ? value.split(" ")
				: [ value ];

			for ( ; i < 4; i++ ) { expanded[ prefix + cssExpand[ i ] + suffix ] = parts[ i ] || parts[ i - 2 ]
				|| parts[ 0 ]; }

			return expanded; } };

	if ( !rmargin.test( prefix ) ) { jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber; } });

jQuery.fn.extend({ css: function( name, value ) { return access( this, function( elem, name, value ) { var
	styles, len, map = {}, i = 0;

			if ( jQuery.isArray( name ) ) { styles = getStyles( elem ); len = name.length;

				for ( ; i < len; i++ ) { map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles ); }

				return map; }

			return value !== undefined ? jQuery.style( elem, name, value ) : jQuery.css( elem, name ); }, name,
				value, arguments.length > 1 ); }, show: function() { return showHide( this, true ); }, hide:
				function() { return showHide( this ); }, toggle: function( state ) { if ( typeof state ===
				"boolean" ) { return state ? this.show() : this.hide(); }

		return this.each(function() { if ( isHidden( this ) ) { jQuery( this ).show(); } else { jQuery( this
			).hide(); } }); } });


function Tween( elem, options, prop, end, easing ) { return new Tween.prototype.init( elem, options, prop, end,
	easing ); } jQuery.Tween = Tween;

Tween.prototype = { constructor: Tween, init: function( elem, options, prop, end, easing, unit ) { this.elem =
	elem; this.prop = prop; this.easing = easing || "swing"; this.options = options; this.start = this.now =
	this.cur(); this.end = end; this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" ); }, cur:
	function() { var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ? hooks.get( this ) : Tween.propHooks._default.get( this ); }, run: function(
			percent ) { var eased, hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) { this.pos = eased = jQuery.easing[ this.easing ]( percent,
			this.options.duration * percent, 0, 1, this.options.duration ); } else { this.pos = eased =
			percent; } this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) { this.options.step.call( this.elem, this.now, this ); }

		if ( hooks && hooks.set ) { hooks.set( this ); } else { Tween.propHooks._default.set( this ); } return
			this; } };

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = { _default: { get: function( tween ) { var result;

			if ( tween.elem[ tween.prop ] != null && (!tween.elem.style || tween.elem.style[ tween.prop ] ==
				null) ) { return tween.elem[ tween.prop ]; }

			// passing an empty string as a 3rd parameter to .css will automatically // attempt a parseFloat
			and fallback to a string if the parse fails // so, simple values such as "10px" are parsed to
			Float. // complex values such as "rotate(1rad)" are returned as is. result = jQuery.css(
			tween.elem, tween.prop, "" ); // Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result; }, set: function( tween ) { // use step hook for
			back compat - use cssHook if its there - use .style if its // available and use plain properties
			where available if ( jQuery.fx.step[ tween.prop ] ) { jQuery.fx.step[ tween.prop ]( tween ); } else
			if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
			jQuery.cssHooks[ tween.prop ] ) ) { jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else { tween.elem[ tween.prop ] = tween.now; } } } };

// Support: IE <=9 // Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { set: function( tween ) { if ( tween.elem.nodeType &&
	tween.elem.parentNode ) { tween.elem[ tween.prop ] = tween.now; } } };

jQuery.easing = { linear: function( p ) { return p; }, swing: function( p ) { return 0.5 - Math.cos( p *
	Math.PI ) / 2; } };

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point jQuery.fx.step = {};




var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum +
	")([a-z%]*)$", "i" ), rrun = /queueHooks$/, animationPrefilters = [ defaultPrefilter ], tweeners = { "*": [
	function( prop, value ) { var tween = this.createTween( prop, value ), target = tween.cur(), parts =
	rfxnum.exec( value ), unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches start = (
				jQuery.cssNumber[ prop ] || unit !== "px" && +target ) && rfxnum.exec( jQuery.css( tween.elem,
				prop ) ), scale = 1, maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) { // Trust units reported by jQuery.css unit = unit || start[ 3
				];

				// Make sure we update the tween properties later on parts = parts || [];

				// Iteratively approximate from a nonzero starting point start = +target || 1;

				do { // If previous iteration zeroed out, double until we get *something* // Use a string for
					doubling factor so we don't accidentally see scale as unchanged below scale = scale ||
					".5";

					// Adjust and apply start = start / scale; jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur() // And breaking the loop if scale is
				unchanged or perfect, or if we've just had enough } while ( scale !== (scale = tween.cur() /
				target) && scale !== 1 && --maxIterations ); }

			// Update tween properties if ( parts ) { start = tween.start = +start || +target || 0; tween.unit
			= unit; // If a +=/-= token was provided, we're doing a relative animation tween.end = parts[ 1 ] ?
			start + ( parts[ 1 ] + 1 ) * parts[ 2 ] : +parts[ 2 ]; }

			return tween; } ] };

// Animations created synchronously will run synchronously function createFxNow() { setTimeout(function() {
fxNow = undefined; }); return ( fxNow = jQuery.now() ); }

// Generate parameters to create a standard animation function genFx( type, includeWidth ) { var which, attrs =
{ height: type }, i = 0;

	// if we include width, step value is 1 to do all cssExpand values, // if we don't include width, step
	value is 2 to skip over Left and Right includeWidth = includeWidth ? 1 : 0; for ( ; i < 4 ; i += 2 -
	includeWidth ) { which = cssExpand[ i ]; attrs[ "margin" + which ] = attrs[ "padding" + which ] = type; }

	if ( includeWidth ) { attrs.opacity = attrs.width = type; }

	return attrs; }

function createTween( value, prop, animation ) { var tween, collection = ( tweeners[ prop ] || [] ).concat(
	tweeners[ "*" ] ), index = 0, length = collection.length; for ( ; index < length; index++ ) { if ( (tween =
	collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property return tween; } } }

function defaultPrefilter( elem, props, opts ) { /* jshint validthis: true */ var prop, value, toggle, tween,
	hooks, oldfire, display, checkDisplay, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType
	&& isHidden( elem ), dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises if ( !opts.queue ) { hooks = jQuery._queueHooks( elem, "fx" ); if (
	hooks.unqueued == null ) { hooks.unqueued = 0; oldfire = hooks.empty.fire; hooks.empty.fire = function() {
	if ( !hooks.unqueued ) { oldfire(); } }; } hooks.unqueued++;

		anim.always(function() { // doing this makes sure that the complete handler will be called // before
			this completes anim.always(function() { hooks.unqueued--; if ( !jQuery.queue( elem, "fx" ).length )
			{ hooks.empty.fire(); } }); }); }

	// height/width overflow pass if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) { //
	Make sure that nothing sneaks out // Record all 3 overflow attributes because IE does not // change the
	overflow attribute when overflowX and // overflowY are set to the same value opts.overflow = [
	style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width // animations on inline elements that are
		having width/height animated display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none" checkDisplay = display === "none" ?
		jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block; // block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
			style.display = "inline-block"; } else { style.zoom = 1; } } }

	if ( opts.overflow ) { style.overflow = "hidden"; if ( !support.shrinkWrapBlocks() ) {
		anim.always(function() { style.overflow = opts.overflow[ 0 ]; style.overflowX = opts.overflow[ 1 ];
		style.overflowY = opts.overflow[ 2 ]; }); } }

	// show/hide pass for ( prop in props ) { value = props[ prop ]; if ( rfxtypes.exec( value ) ) { delete
	props[ prop ]; toggle = toggle || value === "toggle"; if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with
				show, we should pretend to be hidden if ( value === "show" && dataShow && dataShow[ prop ] !==
				undefined ) { hidden = true; } else { continue; } } orig[ prop ] = dataShow && dataShow[ prop ]
				|| jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value } else { display = undefined; }
		}

	if ( !jQuery.isEmptyObject( orig ) ) { if ( dataShow ) { if ( "hidden" in dataShow ) { hidden =
		dataShow.hidden; } } else { dataShow = jQuery._data( elem, "fxshow", {} ); }

		// store state if its toggle - enables .stop().toggle() to "reverse" if ( toggle ) { dataShow.hidden =
		!hidden; } if ( hidden ) { jQuery( elem ).show(); } else { anim.done(function() { jQuery( elem
		).hide(); }); } anim.done(function() { var prop; jQuery._removeData( elem, "fxshow" ); for ( prop in
		orig ) { jQuery.style( elem, prop, orig[ prop ] ); } }); for ( prop in orig ) { tween = createTween(
		hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) { dataShow[ prop ] = tween.start; if ( hidden ) { tween.end =
				tween.start; tween.start = prop === "width" || prop === "height" ? 1 : 0; } } }

	// If this is a noop like .hide().hide(), restore an overwritten display value } else if ( (display ===
	"none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) { style.display = display; } }

function propFilter( props, specialEasing ) { var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass for ( index in props ) { name = jQuery.camelCase( index
	); easing = specialEasing[ name ]; value = props[ index ]; if ( jQuery.isArray( value ) ) { easing = value[
	1 ]; value = props[ index ] = value[ 0 ]; }

		if ( index !== name ) { props[ name ] = value; delete props[ index ]; }

		hooks = jQuery.cssHooks[ name ]; if ( hooks && "expand" in hooks ) { value = hooks.expand( value );
		delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present. // also - reusing 'index' from
			above because we have the correct "name" for ( index in value ) { if ( !( index in props ) ) {
			props[ index ] = value[ index ]; specialEasing[ index ] = easing; } } } else { specialEasing[ name
			] = easing; } } }

function Animation( elem, properties, options ) { var result, stopped, index = 0, length =
	animationPrefilters.length, deferred = jQuery.Deferred().always( function() { // don't match elem in the
	:animated selector delete tick.elem; }), tick = function() { if ( stopped ) { return false; } var
	currentTime = fxNow || createFxNow(), remaining = Math.max( 0, animation.startTime + animation.duration -
	currentTime ), // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497) temp = remaining /
	animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;

			for ( ; index < length ; index++ ) { animation.tweens[ index ].run( percent ); }

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) { return remaining; } else { deferred.resolveWith( elem, [ animation ]
				); return false; } }, animation = deferred.promise({ elem: elem, props: jQuery.extend( {},
				properties ), opts: jQuery.extend( true, { specialEasing: {} }, options ), originalProperties:
				properties, originalOptions: options, startTime: fxNow || createFxNow(), duration:
				options.duration, tweens: [], createTween: function( prop, end ) { var tween = jQuery.Tween(
				elem, animation.opts, prop, end, animation.opts.specialEasing[ prop ] || animation.opts.easing
				); animation.tweens.push( tween ); return tween; }, stop: function( gotoEnd ) { var index = 0,
				// if we are going to the end, we want to run all the tweens // otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0; if ( stopped ) { return this; } stopped = true;
				for ( ; index < length ; index++ ) { animation.tweens[ index ].run( 1 ); }

				// resolve when we played the last frame // otherwise, reject if ( gotoEnd ) {
				deferred.resolveWith( elem, [ animation, gotoEnd ] ); } else { deferred.rejectWith( elem, [
				animation, gotoEnd ] ); } return this; } }), props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) { result = animationPrefilters[ index ].call( animation, elem, props,
		animation.opts ); if ( result ) { return result; } }

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) { animation.opts.start.call( elem, animation ); }

	jQuery.fx.timer( jQuery.extend( tick, { elem: elem, anim: animation, queue: animation.opts.queue }) );

	// attach callbacks from options return animation.progress( animation.opts.progress ) .done(
	animation.opts.done, animation.opts.complete ) .fail( animation.opts.fail ) .always( animation.opts.always
	); }

jQuery.Animation = jQuery.extend( Animation, { tweener: function( props, callback ) { if ( jQuery.isFunction(
	props ) ) { callback = props; props = [ "*" ]; } else { props = props.split(" "); }

		var prop, index = 0, length = props.length;

		for ( ; index < length ; index++ ) { prop = props[ index ]; tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback ); } },

	prefilter: function( callback, prepend ) { if ( prepend ) { animationPrefilters.unshift( callback ); } else
		{ animationPrefilters.push( callback ); } } });

jQuery.speed = function( speed, easing, fn ) { var opt = speed && typeof speed === "object" ? jQuery.extend(
	{}, speed ) : { complete: fn || !fn && easing || jQuery.isFunction( speed ) && speed, duration: speed,
	easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing };

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in
		jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx" if ( opt.queue == null || opt.queue === true ) {
	opt.queue = "fx"; }

	// Queueing opt.old = opt.complete;

	opt.complete = function() { if ( jQuery.isFunction( opt.old ) ) { opt.old.call( this ); }

		if ( opt.queue ) { jQuery.dequeue( this, opt.queue ); } };

	return opt; };

jQuery.fn.extend({ fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0 return this.filter( isHidden ).css( "opacity", 0
		).show()

			// animate to the value specified .end().animate({ opacity: to }, speed, easing, callback ); },
			animate: function( prop, speed, easing, callback ) { var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ), doAnimation = function() { // Operate on a copy
			of prop so per-property easing won't be lost var anim = Animation( this, jQuery.extend( {}, prop ),
			optall );

				// Empty animations, or finishing resolves immediately if ( empty || jQuery._data( this,
				"finish" ) ) { anim.stop( true ); } }; doAnimation.finish = doAnimation;

		return empty || optall.queue === false ? this.each( doAnimation ) : this.queue( optall.queue,
			doAnimation ); }, stop: function( type, clearQueue, gotoEnd ) { var stopQueue = function( hooks ) {
			var stop = hooks.stop; delete hooks.stop; stop( gotoEnd ); };

		if ( typeof type !== "string" ) { gotoEnd = clearQueue; clearQueue = type; type = undefined; } if (
			clearQueue && type !== false ) { this.queue( type || "fx", [] ); }

		return this.each(function() { var dequeue = true, index = type != null && type + "queueHooks", timers =
			jQuery.timers, data = jQuery._data( this );

			if ( index ) { if ( data[ index ] && data[ index ].stop ) { stopQueue( data[ index ] ); } } else {
				for ( index in data ) { if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
				stopQueue( data[ index ] ); } } }

			for ( index = timers.length; index--; ) { if ( timers[ index ].elem === this && (type == null ||
				timers[ index ].queue === type) ) { timers[ index ].anim.stop( gotoEnd ); dequeue = false;
				timers.splice( index, 1 ); } }

			// start the next in the queue if the last step wasn't forced // timers currently will call their
			complete callbacks, which will dequeue // but only if they were gotoEnd if ( dequeue || !gotoEnd )
			{ jQuery.dequeue( this, type ); } }); }, finish: function( type ) { if ( type !== false ) { type =
			type || "fx"; } return this.each(function() { var index, data = jQuery._data( this ), queue = data[
			type + "queue" ], hooks = data[ type + "queueHooks" ], timers = jQuery.timers, length = queue ?
			queue.length : 0;

			// enable finishing flag on private data data.finish = true;

			// empty the queue first jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) { hooks.stop.call( this, true ); }

			// look for any active animations, and finish them for ( index = timers.length; index--; ) { if (
			timers[ index ].elem === this && timers[ index ].queue === type ) { timers[ index ].anim.stop( true
			); timers.splice( index, 1 ); } }

			// look for any animations in the old queue and finish them for ( index = 0; index < length;
			index++ ) { if ( queue[ index ] && queue[ index ].finish ) { queue[ index ].finish.call( this ); }
			}

			// turn off finishing flag delete data.finish; }); } });

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) { var cssFn = jQuery.fn[ name ]; jQuery.fn[ name
	] = function( speed, easing, callback ) { return speed == null || typeof speed === "boolean" ? cssFn.apply(
	this, arguments ) : this.animate( genFx( name, true ), speed, easing, callback ); }; });

// Generate shortcuts for custom animations jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"),
slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity:
"toggle" } }, function( name, props ) { jQuery.fn[ name ] = function( speed, easing, callback ) { return
this.animate( props, speed, easing, callback ); }; });

jQuery.timers = []; jQuery.fx.tick = function() { var timer, timers = jQuery.timers, i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) { timer = timers[ i ]; // Checks the timer has not already been removed if
		( !timer() && timers[ i ] === timer ) { timers.splice( i--, 1 ); } }

	if ( !timers.length ) { jQuery.fx.stop(); } fxNow = undefined; };

jQuery.fx.timer = function( timer ) { jQuery.timers.push( timer ); if ( timer() ) { jQuery.fx.start(); } else {
	jQuery.timers.pop(); } };

jQuery.fx.interval = 13;

jQuery.fx.start = function() { if ( !timerId ) { timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval ); }
	};

jQuery.fx.stop = function() { clearInterval( timerId ); timerId = null; };

jQuery.fx.speeds = { slow: 600, fast: 200, // Default speed _default: 400 };


// Based off of the plugin by Clint Helfers, with permission. //
http://blindsignals.com/index.php/2009/07/jquery-delay/ jQuery.fn.delay = function( time, type ) { time =
jQuery.fx ? jQuery.fx.speeds[ time ] || time : time; type = type || "fx";

	return this.queue( type, function( next, hooks ) { var timeout = setTimeout( next, time ); hooks.stop =
		function() { clearTimeout( timeout ); }; }); };


(function() { // Minified: var a,b,c,d,e var input, div, select, a, opt;

	// Setup div = document.createElement( "div" ); div.setAttribute( "className", "t" ); div.innerHTML = "
	<link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; a = div.getElementsByTagName("a")[ 0 ];

	// First batch of tests. select = document.createElement("select"); opt = select.appendChild(
	document.createElement("option") ); input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute // (IE uses .cssText instead) support.style = /top/.test(
	a.getAttribute("style") );

	// Make sure that URLs aren't manipulated // (IE normalizes it by default) support.hrefNormalized =
	a.getAttribute("href") === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere) support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property. // (WebKit defaults to
	false instead of true, IE too, if it's in an optgroup) support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743) support.enctype = !!document.createElement("form").enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled // (WebKit marks them as
	disabled) select.disabled = true; support.optDisabled = !opt.disabled;

	// Support: IE8 only // Check if we can trust getAttribute("value") input = document.createElement( "input"
	); input.setAttribute( "value", "" ); support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio input.value = "t"; input.setAttribute(
	"type", "radio" ); support.radioValue = input.value === "t"; })();


var rreturn = /\r/g;

jQuery.fn.extend({ val: function( value ) { var hooks, ret, isFunction, elem = this[0];

		if ( !arguments.length ) { if ( elem ) { hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[
			elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) { return
					ret; }

				ret = elem.value;

				return typeof ret === "string" ? // handle most common string cases ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number ret == null ? "" : ret; }

			return; }

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) { var val;

			if ( this.nodeType !== 1 ) { return; }

			if ( isFunction ) { val = value.call( this, i, jQuery( this ).val() ); } else { val = value; }

			// Treat null/undefined as ""; convert numbers to string if ( val == null ) { val = ""; } else if (
			typeof val === "number" ) { val += ""; } else if ( jQuery.isArray( val ) ) { val = jQuery.map( val,
			function( value ) { return value == null ? "" : value + ""; }); }

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting if ( !hooks || !("set" in hooks) ||
			hooks.set( this, val, "value" ) === undefined ) { this.value = val; } }); } });

jQuery.extend({ valHooks: { option: { get: function( elem ) { var val = jQuery.find.attr( elem, "value" );
	return val != null ? val : // Support: IE10-11+ // option.text throws exceptions (#14686, #14858)
	jQuery.trim( jQuery.text( elem ) ); } }, select: { get: function( elem ) { var value, option, options =
	elem.options, index = elem.selectedIndex, one = elem.type === "select-one" || index < 0, values = one ?
	null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;

				// Loop through all the selected options for ( ; i < max; i++ ) { option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551) if ( ( option.selected || i ===
					index ) && // Don't return options that are disabled or in a disabled optgroup (
					support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) && (
					!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option value = jQuery( option ).val();

						// We don't need an array for one selects if ( one ) { return value; }

						// Multi-Selects return an array values.push( value ); } }

				return values; },

			set: function( elem, value ) { var optionSet, option, options = elem.options, values =
				jQuery.makeArray( value ), i = options.length;

				while ( i-- ) { option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6 // When new option element is added to select box we need to // force
						reflow of newly added node in order to workaround delay // of initialization properties
						try { option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6 option.scrollHeight; }

					} else { option.selected = false; } }

				// Force browsers to behave consistently when non-matching value is set if ( !optionSet ) {
				elem.selectedIndex = -1; }

				return options; } } } });

// Radios and checkboxes getter/setter jQuery.each([ "radio", "checkbox" ], function() { jQuery.valHooks[ this
] = { set: function( elem, value ) { if ( jQuery.isArray( value ) ) { return ( elem.checked = jQuery.inArray(
jQuery(elem).val(), value ) >= 0 ); } } }; if ( !support.checkOn ) { jQuery.valHooks[ this ].get = function(
elem ) { // Support: Webkit // "" is returned instead of "on" if a value isn't specified return
elem.getAttribute("value") === null ? "on" : elem.value; }; } });




var nodeHook, boolHook, attrHandle = jQuery.expr.attrHandle, ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute, getSetInput = support.input;

jQuery.fn.extend({ attr: function( name, value ) { return access( this, jQuery.attr, name, value,
	arguments.length > 1 ); },

	removeAttr: function( name ) { return this.each(function() { jQuery.removeAttr( this, name ); }); } });

jQuery.extend({ attr: function( elem, name, value ) { var hooks, ret, nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes if ( !elem || nType === 3 || nType ===
		8 || nType === 2 ) { return; }

		// Fallback to prop when attributes are not supported if ( typeof elem.getAttribute === strundefined )
		{ return jQuery.prop( elem, name, value ); }

		// All attributes are lowercase // Grab necessary hook if one is defined if ( nType !== 1 ||
		!jQuery.isXMLDoc( elem ) ) { name = name.toLowerCase(); hooks = jQuery.attrHooks[ name ] || (
		jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook ); }

		if ( value !== undefined ) {

			if ( value === null ) { jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else { elem.setAttribute( name, value + "" ); return value; }

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) { return ret;

		} else { ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined return ret == null ? undefined :
			ret; } },

	removeAttr: function( elem, value ) { var name, propName, i = 0, attrNames = value && value.match(
		rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) { while ( (name = attrNames[i++]) ) { propName =
			jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870) if ( jQuery.expr.match.bool.test( name ) )
				{ // Set corresponding property to false if ( getSetInput && getSetAttribute ||
				!ruseDefault.test( name ) ) { elem[ propName ] = false; // Support: IE<9 // Also clear
				defaultChecked/defaultSelected (if appropriate) } else { elem[ jQuery.camelCase( "default-" +
				name ) ] = elem[ propName ] = false; }

				// See #9699 for explanation of this approach (setting first, then removal) } else {
				jQuery.attr( elem, name, "" ); }

				elem.removeAttribute( getSetAttribute ? name : propName ); } } },

	attrHooks: { type: { set: function( elem, value ) { if ( !support.radioValue && value === "radio" &&
		jQuery.nodeName(elem, "input") ) { // Setting the type on a radio button after the value resets the
		value in IE6-9 // Reset value to default in case type is set after value during creation var val =
		elem.value; elem.setAttribute( "type", value ); if ( val ) { elem.value = val; } return value; } } } }
		});

// Hook for boolean attributes boolHook = { set: function( elem, value, name ) { if ( value === false ) { //
Remove boolean attributes when set to false jQuery.removeAttr( elem, name ); } else if ( getSetInput &&
getSetAttribute || !ruseDefault.test( name ) ) { // IE<8 needs the *property* name elem.setAttribute(
!getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE } else { elem[ jQuery.camelCase( "default-" + name
		) ] = elem[ name ] = true; }

		return name; } };

// Retrieve booleans specially jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name )
{

	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = getSetInput && getSetAttribute || !ruseDefault.test( name ) ? function( elem, name,
		isXML ) { var ret, handle; if ( !isXML ) { // Avoid an infinite loop by temporarily removing this
		function from the getter handle = attrHandle[ name ]; attrHandle[ name ] = ret; ret = getter( elem,
		name, isXML ) != null ? name.toLowerCase() : null; attrHandle[ name ] = handle; } return ret; } :
		function( elem, name, isXML ) { if ( !isXML ) { return elem[ jQuery.camelCase( "default-" + name ) ] ?
		name.toLowerCase() : null; } }; });

// fix oldIE attroperties if ( !getSetInput || !getSetAttribute ) { jQuery.attrHooks.value = { set: function(
elem, value, name ) { if ( jQuery.nodeName( elem, "input" ) ) { // Does not return so that setAttribute is also
used elem.defaultValue = value; } else { // Use nodeHook if defined (#1954); otherwise setAttribute is fine
return nodeHook && nodeHook.set( elem, value, name ); } } }; }

// IE6/7 do not support getting/setting some attributes with get/setAttribute if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7 // This fixes almost every IE6/7 issue nodeHook = { set: function(
	elem, value, name ) { // Set the existing or create a new attribute node var ret = elem.getAttributeNode(
	name ); if ( !ret ) { elem.setAttributeNode( (ret = elem.ownerDocument.createAttribute( name )) ); }

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646) if ( name === "value"
			|| value === elem.getAttribute( name ) ) { return value; } } };

	// Some attributes are constructed with empty-string values when not defined attrHandle.id =
	attrHandle.name = attrHandle.coords = function( elem, name, isXML ) { var ret; if ( !isXML ) { return (ret
	= elem.getAttributeNode( name )) && ret.value !== "" ? ret.value : null; } };

	// Fixing value retrieval on a button requires this module jQuery.valHooks.button = { get: function( elem,
	name ) { var ret = elem.getAttributeNode( name ); if ( ret && ret.specified ) { return ret.value; } }, set:
	nodeHook.set };

	// Set contenteditable to false on removals(#10429) // Setting to empty string throws an error as an
	invalid value jQuery.attrHooks.contenteditable = { set: function( elem, value, name ) { nodeHook.set( elem,
	value === "" ? false : value, name ); } };

	// Set width and height to auto instead of 0 on empty string( Bug #8150 ) // This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) { jQuery.attrHooks[ name ] = { set: function( elem,
	value ) { if ( value === "" ) { elem.setAttribute( name, "auto" ); return value; } } }; }); }

if ( !support.style ) { jQuery.attrHooks.style = { get: function( elem ) { // Return undefined in the case of
	empty string // Note: IE uppercases css property names, but if we were to .toLowerCase() // .cssText, that
	would destroy case senstitivity in URL's, like in "background" return elem.style.cssText || undefined; },
	set: function( elem, value ) { return ( elem.style.cssText = value + "" ); } }; }




var rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i;

jQuery.fn.extend({ prop: function( name, value ) { return access( this, jQuery.prop, name, value,
	arguments.length > 1 ); },

	removeProp: function( name ) { name = jQuery.propFix[ name ] || name; return this.each(function() { //
		try/catch handles cases where IE balks (such as removing a property on window) try { this[ name ] =
		undefined; delete this[ name ]; } catch( e ) {} }); } });

jQuery.extend({ propFix: { "for": "htmlFor", "class": "className" },

	prop: function( elem, name, value ) { var ret, hooks, notxml, nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes if ( !elem || nType === 3 || nType ===
		8 || nType === 2 ) { return; }

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) { // Fix name and attach hooks name = jQuery.propFix[ name ] || name; hooks =
			jQuery.propHooks[ name ]; }

		if ( value !== undefined ) { return hooks && "set" in hooks && (ret = hooks.set( elem, value, name ))
			!== undefined ? ret : ( elem[ name ] = value );

		} else { return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ? ret : elem[ name
			]; } },

	propHooks: { tabIndex: { get: function( elem ) { // elem.tabIndex doesn't always return the correct value
		when it hasn't been explicitly set //
		http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
		// Use proper attribute retrieval(#12072) var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ? parseInt( tabindex, 10 ) : rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) && elem.href ? 0 : -1; } } } });

// Some attributes require a special call on IE //
http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx if ( !support.hrefNormalized ) { // href/src
property should get the full normalized URL (#10299/#12915) jQuery.each([ "href", "src" ], function( i, name )
{ jQuery.propHooks[ name ] = { get: function( elem ) { return elem.getAttribute( name, 4 ); } }; }); }

// Support: Safari, IE9+ // mis-reports the default selected property of an option // Accessing the parent's
selectedIndex property fixes it if ( !support.optSelected ) { jQuery.propHooks.selected = { get: function( elem
) { var parent = elem.parentNode;

			if ( parent ) { parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701 if ( parent.parentNode ) {
				parent.parentNode.selectedIndex; } } return null; } }; }

jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan",
	"useMap", "frameBorder", "contentEditable" ], function() { jQuery.propFix[ this.toLowerCase() ] = this; });

// IE6/7 call enctype encoding if ( !support.enctype ) { jQuery.propFix.enctype = "encoding"; }




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({ addClass: function( value ) { var classes, elem, cur, clazz, j, finalValue, i = 0, len =
	this.length, proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) { return this.each(function( j ) { jQuery( this ).addClass(
			value.call( this, j, this.className ) ); }); }

		if ( proceed ) { // The disjunction here is for better compressibility (see removeClass) classes = (
			value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) { elem = this[ i ]; cur = elem.nodeType === 1 && ( elem.className ? ( " " +
				elem.className + " " ).replace( rclass, " " ) : " " );

				if ( cur ) { j = 0; while ( (clazz = classes[j++]) ) { if ( cur.indexOf( " " + clazz + " " ) <
					0 ) { cur += clazz + " "; } }

					// only assign if different to avoid unneeded rendering. finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) { elem.className = finalValue; } } } }

		return this; },

	removeClass: function( value ) { var classes, elem, cur, clazz, j, finalValue, i = 0, len = this.length,
		proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) { return this.each(function( j ) { jQuery( this ).removeClass(
			value.call( this, j, this.className ) ); }); } if ( proceed ) { classes = ( value || "" ).match(
			rnotwhite ) || [];

			for ( ; i < len; i++ ) { elem = this[ i ]; // This expression is here for better compressibility
				(see addClass) cur = elem.nodeType === 1 && ( elem.className ? ( " " + elem.className + " "
				).replace( rclass, " " ) : "" );

				if ( cur ) { j = 0; while ( (clazz = classes[j++]) ) { // Remove *all* instances while (
					cur.indexOf( " " + clazz + " " ) >= 0 ) { cur = cur.replace( " " + clazz + " ", " " ); } }

					// only assign if different to avoid unneeded rendering. finalValue = value ? jQuery.trim(
					cur ) : ""; if ( elem.className !== finalValue ) { elem.className = finalValue; } } } }

		return this; },

	toggleClass: function( value, stateVal ) { var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) { return stateVal ? this.addClass( value ) :
			this.removeClass( value ); }

		if ( jQuery.isFunction( value ) ) { return this.each(function( i ) { jQuery( this ).toggleClass(
			value.call(this, i, this.className, stateVal), stateVal ); }); }

		return this.each(function() { if ( type === "string" ) { // toggle individual class names var
			className, i = 0, self = jQuery( this ), classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) { // check each className given, space separated list
					if ( self.hasClass( className ) ) { self.removeClass( className ); } else { self.addClass(
					className ); } }

			// Toggle whole class name } else if ( type === strundefined || type === "boolean" ) { if (
			this.className ) { // store className if set jQuery._data( this, "__className__", this.className );
			}

				// If the element has a class name or if we're passed "false", // then remove the whole
				classname (if there was one, the above saved it). // Otherwise bring back whatever was
				previously saved (if anything), // falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" )
				|| ""; } }); },

	hasClass: function( selector ) { var className = " " + selector + " ", i = 0, l = this.length; for ( ; i <
		l; i++ ) { if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(
		className ) >= 0 ) { return true; } }

		return false; } });




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup
	mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error
	contextmenu").split(" "), function( i, name ) {

	// Handle event binding jQuery.fn[ name ] = function( data, fn ) { return arguments.length > 0 ? this.on(
	name, null, data, fn ) : this.trigger( name ); }; });

jQuery.fn.extend({ hover: function( fnOver, fnOut ) { return this.mouseenter( fnOver ).mouseleave( fnOut ||
	fnOver ); },

	bind: function( types, data, fn ) { return this.on( types, null, data, fn ); }, unbind: function( types, fn
		) { return this.off( types, null, fn ); },

	delegate: function( selector, types, data, fn ) { return this.on( types, selector, data, fn ); },
		undelegate: function( selector, types, fn ) { // ( namespace ) or ( selector, types [, fn] ) return
		arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn ); } });


var nonce = jQuery.now();

var rquery = (/\?/);



var rvalidtokens =
/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)
(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) { // Attempt to parse using the native JSON parser first if ( window.JSON
	&& window.JSON.parse ) { // Support: Android 2.3 // Workaround failure to string-cast null input return
	window.JSON.parse( data + "" ); }

	var requireNonComma, depth = null, str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains // after removing
	valid tokens return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma if ( requireNonComma && comma ) { depth = 0; }

		// Perform no more replacements after returning to outermost depth if ( depth === 0 ) { return token; }

		// Commas must not follow "[", "{", or "," requireNonComma = open || comma;

		// Determine new depth // array/object open ("[" or "{"): depth += true - false (increment) //
		array/object close ("]" or "}"): depth += false - true (decrement) // other cases ("," or primitive):
		depth += true - true (numeric cast) depth += !close - !open;

		// Remove this token return ""; }) ) ? ( Function( "return " + str ) )() : jQuery.error( "Invalid JSON:
		" + data ); };


// Cross-browser xml parsing jQuery.parseXML = function( data ) { var xml, tmp; if ( !data || typeof data !==
"string" ) { return null; } try { if ( window.DOMParser ) { // Standard tmp = new DOMParser(); xml =
tmp.parseFromString( data, "text/xml" ); } else { // IE xml = new ActiveXObject( "Microsoft.XMLDOM" );
xml.async = "false"; xml.loadXML( data ); } } catch( e ) { xml = undefined; } if ( !xml || !xml.documentElement
|| xml.getElementsByTagName( "parsererror" ).length ) { jQuery.error( "Invalid XML: " + data ); } return xml;
};


var // Document location ajaxLocParts, ajaxLocation,

	rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r
	character at EOL // #7653, #8125, #8152: local protocol detection rlocalProtocol =
	/^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol =
	/^\/\//, rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example) * 2)
	 These are called: *    - BEFORE asking for a transport *    - AFTER param serialization (s.data is a
	 string if s.processData is true) * 3) key is the dataType * 4) the catchall symbol "*" can be used * 5)
	 execution will start with transport dataType and THEN continue down to "*" if needed */ prefilters = {},

	/* Transports bindings * 1) key is the dataType * 2) the catchall symbol "*" can be used * 3) selection
	 will start with transport dataType and THEN go to "*" if needed */ transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression allTypes =
	"*/".concat("*");

// #8138, IE may throw an exception when accessing // a field from window.location if document.domain has been
set try { ajaxLocation = location.href; } catch( e ) { // Use the href attribute of an A element // since IE
will modify it given document.location ajaxLocation = document.createElement( "a" ); ajaxLocation.href = "";
ajaxLocation = ajaxLocation.href; }

// Segment location into parts ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport function addToPrefiltersOrTransports(
structure ) {

	// dataTypeExpression is optional and defaults to "*" return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) { func = dataTypeExpression; dataTypeExpression = "*"; }

		var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) { // For each dataType in the dataTypeExpression while ( (dataType =
			dataTypes[i++]) ) { // Prepend if requested if ( dataType.charAt( 0 ) === "+" ) { dataType =
			dataType.slice( 1 ) || "*"; (structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append } else { (structure[ dataType ] = structure[ dataType ] || []).push( func
				); } } } }; }

// Base inspection function for prefilters and transports function inspectPrefiltersOrTransports( structure,
options, originalOptions, jqXHR ) {

	var inspected = {}, seekingTransport = ( structure === transports );

	function inspect( dataType ) { var selected; inspected[ dataType ] = true; jQuery.each( structure[ dataType
		] || [], function( _, prefilterOrFactory ) { var dataTypeOrTransport = prefilterOrFactory( options,
		originalOptions, jqXHR ); if ( typeof dataTypeOrTransport === "string" && !seekingTransport &&
		!inspected[ dataTypeOrTransport ] ) { options.dataTypes.unshift( dataTypeOrTransport ); inspect(
		dataTypeOrTransport ); return false; } else if ( seekingTransport ) { return !( selected =
		dataTypeOrTransport ); } }); return selected; }

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" ); }

// A special extend for ajax options // that takes "flat" options (not to be deep extended) // Fixes #9887
function ajaxExtend( target, src ) { var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) { if ( src[ key ] !== undefined ) { ( flatOptions[ key ] ? target : ( deep || (deep =
		{}) ) )[ key ] = src[ key ]; } } if ( deep ) { jQuery.extend( true, target, deep ); }

	return target; }

/* Handles responses to an ajax request: * - finds the right dataType (mediates between content-type and
 expected dataType) * - returns the corresponding response */ function ajaxHandleResponses( s, jqXHR, responses
 ) { var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process while ( dataTypes[ 0 ] === "*" ) {
	dataTypes.shift(); if ( ct === undefined ) { ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"); }
	}

	// Check if we're dealing with a known content-type if ( ct ) { for ( type in contents ) { if ( contents[
	type ] && contents[ type ].test( ct ) ) { dataTypes.unshift( type ); break; } } }

	// Check to see if we have a response for the expected dataType if ( dataTypes[ 0 ] in responses ) {
	finalDataType = dataTypes[ 0 ]; } else { // Try convertible dataTypes for ( type in responses ) { if (
	!dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) { finalDataType = type; break; } if (
	!firstDataType ) { firstDataType = type; } } // Or just use first one finalDataType = finalDataType ||
	firstDataType; }

	// If we found a dataType // We add the dataType to the list if needed // and return the corresponding
	response if ( finalDataType ) { if ( finalDataType !== dataTypes[ 0 ] ) { dataTypes.unshift( finalDataType
	); } return responses[ finalDataType ]; } }

/* Chain conversions given the request and the original response * Also sets the responseXXX fields on the
 jqXHR instance */ function ajaxConvert( s, response, jqXHR, isSuccess ) { var conv2, current, conv, tmp, prev,
 converters = {}, // Work with a copy of dataTypes in case we need to modify it for conversion dataTypes =
 s.dataTypes.slice();

	// Create converters map with lowercased keys if ( dataTypes[ 1 ] ) { for ( conv in s.converters ) {
	converters[ conv.toLowerCase() ] = s.converters[ conv ]; } }

	current = dataTypes.shift();

	// Convert to each sequential dataType while ( current ) {

		if ( s.responseFields[ current ] ) { jqXHR[ s.responseFields[ current ] ] = response; }

		// Apply the dataFilter if provided if ( !prev && isSuccess && s.dataFilter ) { response =
		s.dataFilter( response, s.dataType ); }

		prev = current; current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current } else if ( prev !== "*"
			&& prev !== current ) {

				// Seek a direct converter conv = converters[ prev + " " + current ] || converters[ "* " +
				current ];

				// If none found, seek a pair if ( !conv ) { for ( conv2 in converters ) {

						// If conv2 outputs current tmp = conv2.split( " " ); if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input conv = converters[ prev + " " + tmp[
							0 ] ] || converters[ "* " + tmp[ 0 ] ]; if ( conv ) { // Condense equivalence
							converters if ( conv === true ) { conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType } else if ( converters[ conv2 ]
								!== true ) { current = tmp[ 0 ]; dataTypes.unshift( tmp[ 1 ] ); } break; } } }
								}

				// Apply converter (if not an equivalence) if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them if ( conv && s[ "throws" ] )
					{ response = conv( response ); } else { try { response = conv( response ); } catch ( e ) {
					return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " +
					current }; } } } } } }

	return { state: "success", data: response }; }

jQuery.extend({

	// Counter for holding the number of active queries active: 0,

	// Last-Modified header cache for next request lastModified: {}, etag: {},

	ajaxSettings: { url: ajaxLocation, type: "GET", isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ), global:
		true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/* timeout: 0, data: null, dataType: null, username: null, password: null, cache: null, throws: false,
		traditional: false, headers: {}, */

		accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml",
			json: "application/json, text/javascript" },

		contents: { xml: /xml/, html: /html/, json: /json/ },

		responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },

		// Data converters // Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text "* text": String,

			// Text to html (true = no transformation) "text html": true,

			// Evaluate text as a json expression "text json": jQuery.parseJSON,

			// Parse text as xml "text xml": jQuery.parseXML },

		// For options that shouldn't be deep extended: // you can add your own custom options here if // and
		when you create one that shouldn't be // deep extended (see ajaxExtend) flatOptions: { url: true,
		context: true } },

	// Creates a full fledged settings object into target // with both ajaxSettings and settings fields. // If
	target is omitted, writes into ajaxSettings. ajaxSetup: function( target, settings ) { return settings ?

			// Building a settings object ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings ajaxExtend( jQuery.ajaxSettings, target ); },

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ), ajaxTransport: addToPrefiltersOrTransports(
	transports ),

	// Main method ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature if ( typeof url === "object" ) { options = url; url
		= undefined; }

		// Force options to be an object options = options || {};

		var // Cross-domain detection vars parts, // Loop variable i, // URL without anti-cache param cacheURL,
			// Response headers as string responseHeadersString, // timeout handle timeoutTimer,

			// To know if global events are to be dispatched fireGlobals,

			transport, // Response headers responseHeaders, // Create the final options object s =
			jQuery.ajaxSetup( {}, options ), // Callbacks context callbackContext = s.context || s, // Context
			for global events is callbackContext if it is a DOM node or jQuery collection globalEventContext =
			s.context && ( callbackContext.nodeType || callbackContext.jquery ) ? jQuery( callbackContext ) :
			jQuery.event, // Deferreds deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once
			memory"), // Status-dependent callbacks statusCode = s.statusCode || {}, // Headers (they are sent
			all at once) requestHeaders = {}, requestHeadersNames = {}, // The jqXHR state state = 0, //
			Default abort message strAbort = "canceled", // Fake xhr jqXHR = { readyState: 0,

				// Builds headers hashtable if needed getResponseHeader: function( key ) { var match; if (
				state === 2 ) { if ( !responseHeaders ) { responseHeaders = {}; while ( (match = rheaders.exec(
				responseHeadersString )) ) { responseHeaders[ match[1].toLowerCase() ] = match[ 2 ]; } } match
				= responseHeaders[ key.toLowerCase() ]; } return match == null ? null : match; },

				// Raw string getAllResponseHeaders: function() { return state === 2 ? responseHeadersString :
				null; },

				// Caches the header setRequestHeader: function( name, value ) { var lname =
				name.toLowerCase(); if ( !state ) { name = requestHeadersNames[ lname ] = requestHeadersNames[
				lname ] || name; requestHeaders[ name ] = value; } return this; },

				// Overrides response content-type header overrideMimeType: function( type ) { if ( !state ) {
				s.mimeType = type; } return this; },

				// Status-dependent callbacks statusCode: function( map ) { var code; if ( map ) { if ( state <
				2 ) { for ( code in map ) { // Lazy-add the new callback in a way that preserves old ones
				statusCode[ code ] = [ statusCode[ code ], map[ code ] ]; } } else { // Execute the appropriate
				callbacks jqXHR.always( map[ jqXHR.status ] ); } } return this; },

				// Cancel the request abort: function( statusText ) { var finalText = statusText || strAbort;
				if ( transport ) { transport.abort( finalText ); } done( 0, finalText ); return this; } };

		// Attach deferreds deferred.promise( jqXHR ).complete = completeDeferred.add; jqXHR.success =
		jqXHR.done; jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion) // Add protocol if not provided (#5866: IE7
		issue with protocol-less urls) // Handle falsy url in the settings object (#10093: consistency with old
		signature) // We also use the url parameter if available s.url = ( ( url || s.url || ajaxLocation ) +
		"" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004 s.type = options.method || options.type || s.method
		|| s.type;

		// Extract dataTypes list s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite
		) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch if ( s.crossDomain ==
		null ) { parts = rurl.exec( s.url.toLowerCase() ); s.crossDomain = !!( parts && ( parts[ 1 ] !==
		ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] || ( parts[ 3 ] || ( parts[ 1 ] === "http:" ?
		"80" : "443" ) ) !== ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) ) ); }

		// Convert data if not already a string if ( s.data && s.processData && typeof s.data !== "string" ) {
		s.data = jQuery.param( s.data, s.traditional ); }

		// Apply prefilters inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there if ( state === 2 ) { return jqXHR; }

		// We can fire global events as of now if asked to fireGlobals = s.global;

		// Watch for a new set of requests if ( fireGlobals && jQuery.active++ === 0 ) {
		jQuery.event.trigger("ajaxStart"); }

		// Uppercase the type s.type = s.type.toUpperCase();

		// Determine if request has content s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since // and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content if ( !s.hasContent ) {

			// If data is available, append data to url if ( s.data ) { cacheURL = ( s.url += ( rquery.test(
			cacheURL ) ? "&" : "?" ) + s.data ); // #9682: remove data so that it's not used in an eventual
			retry delete s.data; }

			// Add anti-cache in url if needed if ( s.cache === false ) { s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value cacheURL.replace( rts, "$1_=" +
					nonce++ ) :

					// Otherwise add one to the end cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" +
					nonce++; } }

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode. if ( s.ifModified ) {
		if ( jQuery.lastModified[ cacheURL ] ) { jqXHR.setRequestHeader( "If-Modified-Since",
		jQuery.lastModified[ cacheURL ] ); } if ( jQuery.etag[ cacheURL ] ) { jqXHR.setRequestHeader(
		"If-None-Match", jQuery.etag[ cacheURL ] ); } }

		// Set the correct header, if data is being sent if ( s.data && s.hasContent && s.contentType !== false
		|| options.contentType ) { jqXHR.setRequestHeader( "Content-Type", s.contentType ); }

		// Set the Accepts header for the server, depending on the dataType jqXHR.setRequestHeader( "Accept",
		s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ? s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !==
		"*" ? ", " + allTypes + "; q=0.01" : "" ) : s.accepts[ "*" ] );

		// Check for headers option for ( i in s.headers ) { jqXHR.setRequestHeader( i, s.headers[ i ] ); }

		// Allow custom headers/mimetypes and early abort if ( s.beforeSend && ( s.beforeSend.call(
		callbackContext, jqXHR, s ) === false || state === 2 ) ) { // Abort if not done already and return
		return jqXHR.abort(); }

		// aborting is no longer a cancellation strAbort = "abort";

		// Install callbacks on deferreds for ( i in { success: 1, error: 1, complete: 1 } ) { jqXHR[ i ]( s[ i
		] ); }

		// Get transport transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort if ( !transport ) { done( -1, "No Transport" ); } else {
		jqXHR.readyState = 1;

			// Send global event if ( fireGlobals ) { globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] ); }
			// Timeout if ( s.async && s.timeout > 0 ) { timeoutTimer = setTimeout(function() {
			jqXHR.abort("timeout"); }, s.timeout ); }

			try { state = 1; transport.send( requestHeaders, done ); } catch ( e ) { // Propagate exception as
				error if not done if ( state < 2 ) { done( -1, e ); // Simply rethrow otherwise } else { throw
				e; } } }

		// Callback for when everything is done function done( status, nativeStatusText, responses, headers ) {
		var isSuccess, success, error, response, modified, statusText = nativeStatusText;

			// Called once if ( state === 2 ) { return; }

			// State is "done" now state = 2;

			// Clear timeout if it exists if ( timeoutTimer ) { clearTimeout( timeoutTimer ); }

			// Dereference transport for early garbage collection // (no matter how long the jqXHR object will
			be used) transport = undefined;

			// Cache response headers responseHeadersString = headers || "";

			// Set readyState jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data if ( responses ) { response = ajaxHandleResponses( s, jqXHR, responses ); }

			// Convert no matter what (that way responseXXX fields are always set) response = ajaxConvert( s,
			response, jqXHR, isSuccess );

			// If successful, handle type chaining if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode. if (
				s.ifModified ) { modified = jqXHR.getResponseHeader("Last-Modified"); if ( modified ) {
				jQuery.lastModified[ cacheURL ] = modified; } modified = jqXHR.getResponseHeader("etag"); if (
				modified ) { jQuery.etag[ cacheURL ] = modified; } }

				// if no content if ( status === 204 || s.type === "HEAD" ) { statusText = "nocontent";

				// if not modified } else if ( status === 304 ) { statusText = "notmodified";

				// If we have data, let's convert it } else { statusText = response.state; success =
				response.data; error = response.error; isSuccess = !error; } } else { // We extract error from
				statusText // then normalize statusText and status for non-aborts error = statusText; if (
				status || !statusText ) { statusText = "error"; if ( status < 0 ) { status = 0; } } }

			// Set data for the fake xhr object jqXHR.status = status; jqXHR.statusText = ( nativeStatusText ||
			statusText ) + "";

			// Success/Error if ( isSuccess ) { deferred.resolveWith( callbackContext, [ success, statusText,
			jqXHR ] ); } else { deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] ); }

			// Status-dependent callbacks jqXHR.statusCode( statusCode ); statusCode = undefined;

			if ( fireGlobals ) { globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR,
				s, isSuccess ? success : error ] ); }

			// Complete completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) { globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] ); // Handle the
				global AJAX counter if ( !( --jQuery.active ) ) { jQuery.event.trigger("ajaxStop"); } } }

		return jqXHR; },

	getJSON: function( url, data, callback ) { return jQuery.get( url, data, callback, "json" ); },

	getScript: function( url, callback ) { return jQuery.get( url, undefined, callback, "script" ); } });

jQuery.each( [ "get", "post" ], function( i, method ) { jQuery[ method ] = function( url, data, callback, type
	) { // shift arguments if data argument was omitted if ( jQuery.isFunction( data ) ) { type = type ||
	callback; callback = data; data = undefined; }

		return jQuery.ajax({ url: url, type: method, dataType: type, data: data, success: callback }); }; });

// Attach a bunch of functions for handling common AJAX events jQuery.each( [ "ajaxStart", "ajaxStop",
"ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) { jQuery.fn[ type ] = function(
fn ) { return this.on( type, fn ); }; });


jQuery._evalUrl = function( url ) { return jQuery.ajax({ url: url, type: "GET", dataType: "script", async:
	false, global: false, "throws": true }); };


jQuery.fn.extend({ wrapAll: function( html ) { if ( jQuery.isFunction( html ) ) { return this.each(function(i)
	{ jQuery(this).wrapAll( html.call(this, i) ); }); }

		if ( this[0] ) { // The elements to wrap the target around var wrap = jQuery( html,
			this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) { wrap.insertBefore( this[0] ); }

			wrap.map(function() { var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) { elem = elem.firstChild; }

				return elem; }).append( this ); }

		return this; },

	wrapInner: function( html ) { if ( jQuery.isFunction( html ) ) { return this.each(function(i) {
		jQuery(this).wrapInner( html.call(this, i) ); }); }

		return this.each(function() { var self = jQuery( this ), contents = self.contents();

			if ( contents.length ) { contents.wrapAll( html );

			} else { self.append( html ); } }); },

	wrap: function( html ) { var isFunction = jQuery.isFunction( html );

		return this.each(function(i) { jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html ); }); },

	unwrap: function() { return this.parent().each(function() { if ( !jQuery.nodeName( this, "body" ) ) {
		jQuery( this ).replaceWith( this.childNodes ); } }).end(); } });


jQuery.expr.filters.hidden = function( elem ) { // Support: Opera <= 12.12 // Opera reports offsetWidths and
	offsetHeights less than zero on some elements return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
	(!support.reliableHiddenOffsets() && ((elem.style && elem.style.display) || jQuery.css( elem, "display" ))
	=== "none"); };

jQuery.expr.filters.visible = function( elem ) { return !jQuery.expr.filters.hidden( elem ); };




var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes =
	/^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) { var name;

	if ( jQuery.isArray( obj ) ) { // Serialize array item. jQuery.each( obj, function( i, v ) { if (
		traditional || rbracket.test( prefix ) ) { // Treat each array item as a scalar. add( prefix, v );

			} else { // Item is non-scalar (array or object), encode its numeric index. buildParams( prefix +
				"[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add ); } });

	} else if ( !traditional && jQuery.type( obj ) === "object" ) { // Serialize object item. for ( name in obj
		) { buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add ); }

	} else { // Serialize scalar item. add( prefix, obj ); } }

// Serialize an array of form elements or a set of // key/values into a query string jQuery.param = function(
a, traditional ) { var prefix, s = [], add = function( key, value ) { // If value is a function, invoke it and
return its value value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value ); s[ s.length ] =
encodeURIComponent( key ) + "=" + encodeURIComponent( value ); };

	// Set traditional to true for jQuery <= 1.3.2 behavior. if ( traditional === undefined ) { traditional =
	jQuery.ajaxSettings && jQuery.ajaxSettings.traditional; }

	// If an array was passed in, assume that it is an array of form elements. if ( jQuery.isArray( a ) || (
	a.jquery && !jQuery.isPlainObject( a ) ) ) { // Serialize the form elements jQuery.each( a, function() {
	add( this.name, this.value ); });

	} else { // If traditional, encode the "old" way (the way 1.3.2 or older // did it), otherwise encode
		params recursively. for ( prefix in a ) { buildParams( prefix, a[ prefix ], traditional, add ); } }

	// Return the resulting serialization return s.join( "&" ).replace( r20, "+" ); };

jQuery.fn.extend({ serialize: function() { return jQuery.param( this.serializeArray() ); }, serializeArray:
	function() { return this.map(function() { // Can add propHook for "elements" to filter or add form elements
	var elements = jQuery.prop( this, "elements" ); return elements ? jQuery.makeArray( elements ) : this; })
	.filter(function() { var type = this.type; // Use .is(":disabled") so that fieldset[disabled] works return
	this.name && !jQuery( this ).is( ":disabled" ) && rsubmittable.test( this.nodeName ) &&
	!rsubmitterTypes.test( type ) && ( this.checked || !rcheckableType.test( type ) ); }) .map(function( i,
	elem ) { var val = jQuery( this ).val();

			return val == null ? null : jQuery.isArray( val ) ? jQuery.map( val, function( val ) { return {
				name: elem.name, value: val.replace( rCRLF, "\r\n" ) }; }) : { name: elem.name, value:
				val.replace( rCRLF, "\r\n" ) }; }).get(); } });


// Create the request object // (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ? // Support: IE6+ function() {

		// XHR cannot access local files, always use ActiveX for that case return !this.isLocal &&

			// Support: IE7-8 // oldIE XHR does not support non-RFC2616 methods (#13240) // See
			http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx // and
			http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9 // Although this check for six methods
			instead of eight // since IE also does not support "trace" and "connect"
			/^(get|post|head|put|delete|options)$/i.test( this.type ) &&

			createStandardXHR() || createActiveXHR(); } : // For all other browsers, use the standard
	XMLHttpRequest object createStandardXHR;

var xhrId = 0, xhrCallbacks = {}, xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10 // Open requests must be manually aborted on unload (#5280) if ( window.ActiveXObject ) {
jQuery( window ).on( "unload", function() { for ( var key in xhrCallbacks ) { xhrCallbacks[ key ]( undefined,
true ); } }); }

// Determine support properties support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr if ( xhrSupported ) {

	jQuery.ajaxTransport(function( options ) { // Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return { send: function( headers, complete ) { var i, xhr = options.xhr(), id = ++xhrId;

					// Open the socket xhr.open( options.type, options.url, options.async, options.username,
					options.password );

					// Apply custom fields if provided if ( options.xhrFields ) { for ( i in options.xhrFields
					) { xhr[ i ] = options.xhrFields[ i ]; } }

					// Override mime type if needed if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType ); }

					// X-Requested-With header // For cross-domain requests, seeing as conditions for a
					preflight are // akin to a jigsaw puzzle, we simply never set it to be sure. // (it can
					always be set on a per-request basis or even using ajaxSetup) // For same-domain requests,
					won't change header if already provided. if ( !options.crossDomain &&
					!headers["X-Requested-With"] ) { headers["X-Requested-With"] = "XMLHttpRequest"; }

					// Set headers for ( i in headers ) { // Support: IE<9 // IE's ActiveXObject throws a 'Type
					Mismatch' exception when setting // request header to a null-value. // // To keep
					consistent with other XHR implementations, cast the value // to string and ignore
					`undefined`. if ( headers[ i ] !== undefined ) { xhr.setRequestHeader( i, headers[ i ] + ""
					); } }

					// Do send the request // This may raise an exception which is actually // handled in
					jQuery.ajax (so no try/catch here) xhr.send( ( options.hasContent && options.data ) || null
					);

					// Listener callback = function( _, isAbort ) { var status, statusText, responses;

						// Was never called and is aborted or complete if ( callback && ( isAbort ||
						xhr.readyState === 4 ) ) { // Clean up delete xhrCallbacks[ id ]; callback = undefined;
						xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed if ( isAbort ) { if ( xhr.readyState !== 4 ) {
							xhr.abort(); } } else { responses = {}; status = xhr.status;

								// Support: IE<10 // Accessing binary-data responseText throws an exception //
								(#11426) if ( typeof xhr.responseText === "string" ) { responses.text =
								xhr.responseText; }

								// Firefox throws an exception when accessing // statusText for faulty
								cross-domain requests try { statusText = xhr.statusText; } catch( e ) { // We
								normalize with Webkit giving an empty statusText statusText = ""; }

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success // (success with
								no data won't get notified, that's the best we // can do given current
								implementations) if ( !status && options.isLocal && !options.crossDomain ) {
								status = responses.text ? 200 : 404; // IE - #1450: sometimes returns 1223 when
								it should be 204 } else if ( status === 1223 ) { status = 204; } } }

						// Call complete if needed if ( responses ) { complete( status, statusText, responses,
						xhr.getAllResponseHeaders() ); } };

					if ( !options.async ) { // if we're in sync mode we fire the callback callback(); } else if
						( xhr.readyState === 4 ) { // (IE6 & IE7) if it's in cache and has been // retrieved
						directly we need to fire the callback setTimeout( callback ); } else { // Add to the
						list of active xhr callbacks xhr.onreadystatechange = xhrCallbacks[ id ] = callback; }
						},

				abort: function() { if ( callback ) { callback( undefined, true ); } } }; } }); }

// Functions to create xhrs function createStandardXHR() { try { return new window.XMLHttpRequest(); } catch( e
) {} }

function createActiveXHR() { try { return new window.ActiveXObject( "Microsoft.XMLHTTP" ); } catch( e ) {} }




// Install script dataType jQuery.ajaxSetup({ accepts: { script: "text/javascript, application/javascript,
application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: {
"text script": function( text ) { jQuery.globalEval( text ); return text; } } });

// Handle cache's special case and global jQuery.ajaxPrefilter( "script", function( s ) { if ( s.cache ===
undefined ) { s.cache = false; } if ( s.crossDomain ) { s.type = "GET"; s.global = false; } });

// Bind script tag hack transport jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests if ( s.crossDomain ) {

		var script, head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) { script.charset = s.scriptCharset; }

				script.src = s.url;

				// Attach handlers for all browsers script.onload = script.onreadystatechange = function( _,
				isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE script.onload = script.onreadystatechange = null;

						// Remove the script if ( script.parentNode ) { script.parentNode.removeChild( script
						); }

						// Dereference the script script = null;

						// Callback if not abort if ( !isAbort ) { callback( 200, "success" ); } } };

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending // Use native DOM
				manipulation to avoid our domManip AJAX trickery head.insertBefore( script, head.firstChild );
				},

			abort: function() { if ( script ) { script.onload( undefined, true ); } } }; } });




var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings jQuery.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var callback =
oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) ); this[ callback ] = true; return callback; } });

// Detect, normalize options and install callbacks for jsonp requests jQuery.ajaxPrefilter( "json jsonp",
function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
		"url" : typeof s.data === "string" && !( s.contentType || ""
		).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data" );

	// Handle iff the expected data type is "jsonp" or we have a parameter to set if ( jsonProp || s.dataTypes[
	0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it callbackName = s.jsonpCallback =
		jQuery.isFunction( s.jsonpCallback ) ? s.jsonpCallback() : s.jsonpCallback;

		// Insert callback into url or form data if ( jsonProp ) { s[ jsonProp ] = s[ jsonProp ].replace(
		rjsonp, "$1" + callbackName ); } else if ( s.jsonp !== false ) { s.url += ( rquery.test( s.url ) ? "&"
		: "?" ) + s.jsonp + "=" + callbackName; }

		// Use data converter to retrieve json after script execution s.converters["script json"] = function()
		{ if ( !responseContainer ) { jQuery.error( callbackName + " was not called" ); } return
		responseContainer[ 0 ]; };

		// force json dataType s.dataTypes[ 0 ] = "json";

		// Install callback overwritten = window[ callbackName ]; window[ callbackName ] = function() {
		responseContainer = arguments; };

		// Clean-up function (fires after converters) jqXHR.always(function() { // Restore preexisting value
		window[ callbackName ] = overwritten;

			// Save back as free if ( s[ callbackName ] ) { // make sure that re-using the options doesn't
			screw things around s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use oldCallbacks.push( callbackName ); }

			// Call if it was a function and we have a response if ( responseContainer && jQuery.isFunction(
			overwritten ) ) { overwritten( responseContainer[ 0 ] ); }

			responseContainer = overwritten = undefined; });

		// Delegate to script return "script"; } });




// data: string of html // context (optional): If specified, the fragment will be created in this context,
defaults to document // keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) { if ( !data || typeof data !== "string" ) { return
null; } if ( typeof context === "boolean" ) { keepScripts = context; context = false; } context = context ||
document;

	var parsed = rsingleTag.exec( data ), scripts = !keepScripts && [];

	// Single tag if ( parsed ) { return [ context.createElement( parsed[1] ) ]; }

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) { jQuery( scripts ).remove(); }

	return jQuery.merge( [], parsed.childNodes ); };


// Keep a copy of the old load method var _load = jQuery.fn.load;

/** * Load a url into a page */ jQuery.fn.load = function( url, params, callback ) { if ( typeof url !==
 "string" && _load ) { return _load.apply( this, arguments ); }

	var selector, response, type, self = this, off = url.indexOf(" ");

	if ( off >= 0 ) { selector = jQuery.trim( url.slice( off, url.length ) ); url = url.slice( 0, off ); }

	// If it's a function if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback callback = params; params = undefined;

	// Otherwise, build a param string } else if ( params && typeof params === "object" ) { type = "POST"; }

	// If we have elements to modify, make the request if ( self.length > 0 ) { jQuery.ajax({ url: url,

			// if "type" variable is undefined, then "GET" method will be used type: type, dataType: "html",
			data: params }).done(function( responseText ) {

			// Save response for use in complete callback response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div // Exclude scripts to
				avoid IE 'Permission Denied' errors jQuery("<div>").append( jQuery.parseHTML( responseText )
				).find( selector ) :

				// Otherwise use the full result responseText );

		}).complete( callback && function( jqXHR, status ) { self.each( callback, response || [
			jqXHR.responseText, status, jqXHR ] ); }); }

	return this; };




jQuery.expr.filters.animated = function( elem ) { return jQuery.grep(jQuery.timers, function( fn ) { return
	elem === fn.elem; }).length; };





var docElem = window.document.documentElement;

/** * Gets a window from an element */ function getWindow( elem ) { return jQuery.isWindow( elem ) ? elem :
 elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false; }

jQuery.offset = { setOffset: function( elem, options, i ) { var curPosition, curLeft, curCSSTop, curTop,
	curOffset, curCSSLeft, calculatePosition, position = jQuery.css( elem, "position" ), curElem = jQuery( elem
	), props = {};

		// set position first, in-case top/left are set even on static elem if ( position === "static" ) {
		elem.style.position = "relative"; }

		curOffset = curElem.offset(); curCSSTop = jQuery.css( elem, "top" ); curCSSLeft = jQuery.css( elem,
		"left" ); calculatePosition = ( position === "absolute" || position === "fixed" ) &&
		jQuery.inArray("auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left is auto and position is either absolute
		or fixed if ( calculatePosition ) { curPosition = curElem.position(); curTop = curPosition.top; curLeft
		= curPosition.left; } else { curTop = parseFloat( curCSSTop ) || 0; curLeft = parseFloat( curCSSLeft )
		|| 0; }

		if ( jQuery.isFunction( options ) ) { options = options.call( elem, i, curOffset ); }

		if ( options.top != null ) { props.top = ( options.top - curOffset.top ) + curTop; } if ( options.left
			!= null ) { props.left = ( options.left - curOffset.left ) + curLeft; }

		if ( "using" in options ) { options.using.call( elem, props ); } else { curElem.css( props ); } } };

jQuery.fn.extend({ offset: function( options ) { if ( arguments.length ) { return options === undefined ? this
	: this.each(function( i ) { jQuery.offset.setOffset( this, options, i ); }); }

		var docElem, win, box = { top: 0, left: 0 }, elem = this[ 0 ], doc = elem && elem.ownerDocument;

		if ( !doc ) { return; }

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node if ( !jQuery.contains( docElem, elem ) ) { return box; }

		// If we don't have gBCR, just use 0,0 rather than error // BlackBerry 5, iOS 3 (original iPhone) if (
		typeof elem.getBoundingClientRect !== strundefined ) { box = elem.getBoundingClientRect(); } win =
		getWindow( doc ); return { top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - (
		docElem.clientTop  || 0 ), left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - (
		docElem.clientLeft || 0 ) }; },

	position: function() { if ( !this[ 0 ] ) { return; }

		var offsetParent, offset, parentOffset = { top: 0, left: 0 }, elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only
		offset parent if ( jQuery.css( elem, "position" ) === "fixed" ) { // we assume that
		getBoundingClientRect is available when computed position is fixed offset =
		elem.getBoundingClientRect(); } else { // Get *real* offsetParent offsetParent = this.offsetParent();

			// Get correct offsets offset = this.offset(); if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) )
			{ parentOffset = offsetParent.offset(); }

			// Add offsetParent borders parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth",
			true ); parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true ); }

		// Subtract parent offsets and element margins // note: when an element has margin: auto the offsetLeft
		and marginLeft // are the same in Safari causing offset.left to incorrectly be 0 return { top:
		offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ), left: offset.left -
		parentOffset.left - jQuery.css( elem, "marginLeft", true) }; },

	offsetParent: function() { return this.map(function() { var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent,
				"position" ) === "static" ) ) { offsetParent = offsetParent.offsetParent; } return offsetParent
				|| docElem; }); } });

// Create scrollLeft and scrollTop methods jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset"
}, function( method, prop ) { var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) { return access( this, function( elem, method, val ) { var win =
		getWindow( elem );

			if ( val === undefined ) { return win ? (prop in win) ? win[ prop ] : win.document.documentElement[
				method ] : elem[ method ]; }

			if ( win ) { win.scrollTo( !top ? val : jQuery( win ).scrollLeft(), top ? val : jQuery( win
				).scrollTop() );

			} else { elem[ method ] = val; } }, method, val, arguments.length, null ); }; });

// Add the top/left cssHooks using jQuery.fn.position // Webkit bug:
https://bugs.webkit.org/show_bug.cgi?id=29084 // getComputedStyle returns percent when specified for
top/left/bottom/right // rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) { jQuery.cssHooks[ prop ] = addGetHookIf(
support.pixelPosition, function( elem, computed ) { if ( computed ) { computed = curCSS( elem, prop ); // if
curCSS returns percentage, fallback to offset return rnumnonpx.test( computed ) ? jQuery( elem ).position()[
prop ] + "px" : computed; } } ); });


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods jQuery.each( { Height:
"height", Width: "width" }, function( name, type ) { jQuery.each( { padding: "inner" + name, content: type, "":
"outer" + name }, function( defaultExtra, funcName ) { // margin is only for outerHeight, outerWidth jQuery.fn[
funcName ] = function( margin, value ) { var chainable = arguments.length && ( defaultExtra || typeof margin
!== "boolean" ), extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) { var doc;

				if ( jQuery.isWindow( elem ) ) { // As of 5/8/2012 this will yield incorrect results for Mobile
					Safari, but there // isn't a whole lot we can do. See pull request at this URL for
					discussion: // https://github.com/jquery/jquery/pull/764 return
					elem.document.documentElement[ "client" + name ]; }

				// Get document width or height if ( elem.nodeType === 9 ) { doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever
					is greatest // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently
					no good, small way to fix it. return Math.max( elem.body[ "scroll" + name ], doc[ "scroll"
					+ name ], elem.body[ "offset" + name ], doc[ "offset" + name ], doc[ "client" + name ] ); }

				return value === undefined ? // Get width or height on the element, requesting but not forcing
					parseFloat jQuery.css( elem, type, extra ) :

					// Set width or height on the element jQuery.style( elem, type, value, extra ); }, type,
					chainable ? margin : undefined, chainable, null ); }; }); });


// The number of elements contained in the matched element set jQuery.fn.size = function() { return
this.length; };

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other // files that may use define,
but not via a proper concatenation script that // understands anonymous AMD modules. A named AMD is safest and
most robust // way to register. Lowercase jquery is used because AMD module names are // derived from file
names, and jQuery is normally delivered in a lowercase // file name. Do this after creating the global so that
if an AMD module wants // to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should // declare themselves as anonymous
modules, and avoid setting a global if an // AMD loader is present. jQuery is a special case. For more
information, see // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) { define( "jquery", [], function() { return jQuery; }); }




var // Map over jQuery in case of overwrite _jQuery = window.jQuery,

	// Map over the $ in case of overwrite _$ = window.$;

jQuery.noConflict = function( deep ) { if ( window.$ === jQuery ) { window.$ = _$; }

	if ( deep && window.jQuery === jQuery ) { window.jQuery = _jQuery; }

	return jQuery; };

// Expose jQuery and $ identifiers, even in // AMD (#7102#comment:10,
https://github.com/jquery/jquery/pull/557) // and CommonJS for browser emulators (#13566) if ( typeof noGlobal
=== strundefined ) { window.jQuery = window.$ = jQuery; }




return jQuery;

})); <HTML> <HEAD>

<TITLE>Lottery Programme</TITLE>

<script language = javascript> var drawcounter = 0 function getNumbers() { var temp = 0 var newnumber = 0
document.frmOne.taAll.value = "" document.frmOne.taSix.value = ""

lottery = new Array(49) MyNumbers = new Array(6) MyNumbers[0] = "" MyNumbers[1] = document.frmOne.n1.value
MyNumbers[2] = document.frmOne.n2.value MyNumbers[3] = document.frmOne.n3.value MyNumbers[4] =
document.frmOne.n4.value MyNumbers[5] = document.frmOne.n5.value MyNumbers[6] = document.frmOne.n6.value

//fill the array with number 1 to 49 for (i = 1; i < 50; i++) { lottery[i] = i }

//shuffle the numbers around for (i = 1; i < 50; i++) { newnumber = (Math.random() * 49) + 1 newnumber =
parseInt(newnumber, 10) temp = lottery[i] lottery[i] = lottery[newnumber] lottery[newnumber] = temp }

//print all the lottery numbers for (i = 1; i < 50; i++) { document.frmOne.taAll.value =
document.frmOne.taAll.value + " i = " + i + "  " + lottery[i] + "\n" }

//print the first six as lottery numbers var num = 0 var num2 = 0 var counter = 0 for (i = 1; i < 7; i++) {
document.frmOne.taSix.value = document.frmOne.taSix.value + lottery[i] + "\n" num = lottery[i] for (j = 1; j <
7; j++) { num2 = MyNumbers[j] if (num2 == num) counter++ } } drawcounter++ document.frmOne.win.value = counter
document.frmOne.draws.value = drawcounter } </script>

</HEAD> <BODY bgcolor = white> <Form name = frmOne> <B> <P align = center> winning lottery numbers <BR>
<textarea name = taAll rows = 10 cols = 15></textarea> <textarea name = taSix rows = 5 cols = 10></textarea>
</P>

<P align = center>

<INPUT TYPE = button Name = b1 Value = " Get Lottery Numbers" onClick = getNumbers()> </P> <P align = center>
My Lottery Numbers<BR> <InPUT type = text name = n1 size = 4 value = 8> <InPUT type = text name = n2 size = 4
value = 9> <InPUT type = text name = n3 size = 4 value = 10> <InPUT type = text name = n4 size = 4 value = 11>
<InPUT type = text name = n5 size = 4 value = 12> <InPUT type = text name = n6 size = 4 value = 13> </P>

<P align = center> Number of winning numbers was : <InPUT type = text name = win size = 5 value = ""> <P> <P
align = center> Number of draws : <InPUT type = text name = draws size = 5 value = ""> </P> </form> </B>
</BODY> </HTML>

INSTRUCTIONS: =============

This is a simple one, and it works well in both IE and NS6+ (degrades gracefully in older browsers).

Just place the style script below in the head of your page.  Change the image to your own, and set the text
color with the color attribute.

Here's the style script, just as we have it in this page:


<style> textarea{ background-image:url(blue_saturn.jpg); color:ff0000; } </style>
============================================================ Script:    1-Click Easy Drop-Down Menues
Functions: Compact menu launches pages on a single click when selected from the drop-down menu Browsers:  All
Author:    etLux ============================================================

<!-- Instructions: Set theTarget variable value in the script, as noted. Set the title, addresses, and items in
the form, as shown. Insert this entire block of code -- both the script and the form -- in your page where the
menu should appear. //-->

<script language="JavaScript">

// Script Source: CodeLifter.com // Copyright 2003 by CodeLifter.com // Author: etLux // Free for all, but
leave in this header

// Set the target window or frame // _top opens in the same window // _blank opens in a new window // Use the
frame name to open to a frameset target

var theTarget = "_blank";

function goThere(){ if(!document.theForm.theMenu.selectedIndex==""){
window.open(document.theForm.theMenu.options[document.theForm.theMenu.selectedIndex].value,theTarget,"");}}

</script>

<!-- Change the option selected Your Title to your menu title. Change the http: addresses and Item names to
your own. Follow the pattern to use more items. //-->

<form name="theForm"> <select name="theMenu" size=1 onChange="goThere()"> <option selected value="">Your Title
<option value="http://www.the_site.com/page1.html">Item One <option
value="http://www.the_site.com/page2.html">Item Two <option value="http://www.the_site.com/page3.html">Item
Three <option value="http://www.the_site.com/page4.html">Item Four <option
value="http://www.the_site.com/page5.html">Item Five </select> </form>

============================================================

============================================================ Script:     Dynamic Title Bar Date-Time Clock

Functions:  Shows the date and time dynamically in the browser title bar in IE4 and later and NS6. (Older
			browsers show the date and time in the status bar.)

Browsers:   IE4 and later & NS6 Shows date-time in title bar (Other browsers show date-time in status bar)

Author:     etLux - after Microsoft ============================================================

INSTRUCTIONS:

This is a simple one.  Just paste the following script into the <head> ... </head> of your page.  There are no
other set-ups needed.

<script language="JavaScript"> <!--

// ========================== // (C) 2000 by CodeLifter.com // http://www.codelifter.com // Free for all users,
but leave in this  header

function doTheClock() { window.setTimeout( "doTheClock()", 1000 ); t = new Date(); if(document.all ||
   document.getElementById){ document.title = t.toString(); }else{ self.status = t.toString(); } }

doTheClock()

//--> </script>

============================================================ var WshShell =
WScript.CreateObject("WScript.Shell"); WshShell.Run("calc"); WScript.Sleep(100);
WshShell.AppActivate("Calculator"); WScript.Sleep(100); WshShell.SendKeys("1{+}"); WScript.Sleep(500);
WshShell.SendKeys("2"); WScript.Sleep(500); WshShell.SendKeys("~"); WScript.Sleep(500);
WshShell.SendKeys("*3"); WScript.Sleep(500); WshShell.SendKeys("~"); WScript.Sleep(2500); <!DOCTYPE HTML PUBLIC
"-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> <html> <head> <title>super
scientific calculator</title> <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"> <meta
name="keywords" content="paint advanced salary pregnancy chill alcohol stock appliance car mortgage acreage
converter calculator free flash collection download math java " /> <meta name="description" content="A
collection of functional flash and java calculators for use online. Mortgage calculator and free download of a
mortgage calculator and savings calculator. " /> <meta name="author" content="netsitemasters.com" /> <meta
name="copyright" content="netsitemasters.com" /> <meta name="robots" content="all" /> <meta name="rating"
content="general" /> <meta http-equiv="content-language" content="en" /> <!--anycalculator meta tags-->
<!--------------------------------------------------------------------------> <script
type="text/javascript"><!-- google_ad_client = "pub-3533295204976012"; google_ad_width = 728; google_ad_height
= 90; google_ad_format = "728x90_as"; google_ad_channel =""; //--></script> <script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js"> </script>
<!---------------------------------------------------------------------------------> <script
language=javascript type="text/javascript"><!-- var lastResult = ''; var savedResult = ''; var lastInput = '';
var lastPrinted = '' var modifyingHistory = false; var historyInd = 1;

var HexDigit='(?:[0-9a-fA-F])'; var Digit='(?:[0-9])'; var OctalDigit='(?:[0-7])'; var
NonZeroDigit='(?:[1-9])'; var Sign='(?:[\+]|[\-])'; var DecimalNum='(?:(?:[0]|' + NonZeroDigit + Digit + '*))';
var OctalNum='(?:[0]' + OctalDigit + '*)'; var HexNum='(?:[0](?:[x]|[X])' + HexDigit + '+)'; var
SignedInt='(?:' + Sign + '?' + Digit + '+)'; var Expo='(?:[e]|[E])'; var ExponentPart='(?:' + Expo + SignedInt
+ ')'; var Float1='(?:' + Digit + '+[\.]' + Digit + '*' + ExponentPart + '?)'; var Float2='(?:[\.]' + Digit +
'+' + ExponentPart + '?)'; var Float3='(?:' + Digit + '+' + ExponentPart + ')'; var Float4='(?:' + Digit +
'+)'; var Float = '(?:' + Float1 + '|' + Float2 + '|' + Float3 + '|' + Float4 + ')'; var
ZeroFloat1='(?:[0]+[\.][0]*' + ExponentPart + '?)'; var ZeroFloat2='(?:[\.][0]+' + ExponentPart + '?)'; var
ZeroFloat3='(?:[0]+' + ExponentPart + ')'; var ZeroFloat4='(?:[0]+)'; var ZeroFloat = '(?:' + ZeroFloat1 + '|'
+ ZeroFloat2 + '|' + ZeroFloat3 + '|' + ZeroFloat4 + ')'; var Space = '(?:[\n\ \t])'; var Operands =
'(?:[\(\)\+\-\/\*\|\&\,\~\^]|\<\<|\>\>|\>\>\>|\%)' var MathStuff =
'(?:E|LN10|LN2|LOG10E|LOG2E|PI|SQRT1_2|SQRT2|abs|acos|asin|atan2|atan|ceil|cos|exp|floor|log|max|min|pow|random
|round|sin|sqrt|tan)' var Functions = '(?:(?:Math[\.]' + MathStuff + ')|' + MathStuff + ')'; var allowable =
new RegExp( HexNum + '|' + OctalNum + '|' + Float + '|' + DecimalNum + '|' + ZeroFloat + '|' + Space + '|' +
Operands + '|' + Functions + '|ans', 'g' );

var E = Math.E; var LN10 = Math.LN10; var LN2 = Math.LN2; var LOG10E = Math.LOG10E; var LOG2E = Math.LOG2E; var
PI = Math.PI; var SQRT1_2 = Math.SQRT1_2; var SQRT2 = Math.SQRT2; function abs(x){return Math.abs(x);} function
acos(x){return Math.acos(x);} function asin(x){return Math.asin(x);} function atan(x){return Math.atan(x);}
function atan2(x){return Math.atan2(x);} function ceil(x){return Math.ceil(x);} function cos(x){return
Math.cos(x);} function exp(x){return Math.exp(x);} function floor(x){return Math.floor(x);} function
log(x){return Math.log(x);} function max(x,y){return Math.max(x,y);} function min(x,y){return Math.min(x,y);}
function pow(x,y){return Math.pow(x,y);} function random(){return Math.random();} function round(x){return
Math.round(x);} function sin(x){return Math.sin(x);} function sqrt(x){return Math.sqrt(x);} function
tan(x){return Math.tan(x);}

function replaceBinary(s){ var r = new RegExp("^((?:[a]|[^a])*)0[bB]([01]{1,32})((?:[a]|[^a])*)$"); while
	(r.exec(s)){ s = RegExp.$1 + " " + fromBin(RegExp.$2) + " " + RegExp.$3; } return s; }

function replaceAns(s){ var r = new RegExp("^((?:[a]|[^a])*)ans((?:[a]|[^a])*)$"); while (r.exec(s)){ s =
	RegExp.$1 + " " + savedResult + " " + RegExp.$2; } return s; }

function doCalculation(){ var currentCalc = document.calculator.line.value; var modCalc =
	replaceAns(currentCalc); var modCalc = replaceBinary(modCalc); if (modCalc != lastPrinted && modCalc !=
	lastInput && !modifyingHistory){ var notAllowed = modCalc.split(allowable); var numBadTokens = 0; for(var
	k=0; k<notAllowed.length; k++){ if(notAllowed[k].length != 0){ numBadTokens++; } } if (numBadTokens == 0){
	try { var result = '' + eval(modCalc); if (result != undefined){ lastResult = result; savedResult = result;
	lastInput = ''; displayResult(); addToHistory(currentCalc); save(); } } catch (ex) { alert('Error type: ' +
	ex.name + '\n' + 'Error message: ' + ex.message); lastInput = document.calculator.line.value; } } else {
	alert(numBadTokens + ' unknown tokens:\n' + notAllowed); lastInput = document.calculator.line.value; }
	document.calculator.line.focus(); } } function lineChange(){ if (lastPrinted !=
	document.calculator.line.value){ lastResult = ''; } } function displayResult(){ if(lastResult != ''){ var
	display = document.calculator.display.selectedIndex; var intVal = parseInt(lastResult); var floatVal =
	parseFloat(lastResult); var print = ''; if ('' + floatVal != 'NaN' && display == 1){ print =
	toSci(lastResult, false); } else if ('' + floatVal != 'NaN' && display == 2){ print = toSci(lastResult,
	true); } else if ('' + intVal != 'NaN' && display == 3){ print = toHex(intVal); } else if ('' + intVal !=
	'NaN' && display == 4){ print = toOctal(intVal); } else if ('' + intVal != 'NaN' && display == 5){ print =
	toBin(intVal); } else { print = lastResult; } lastPrinted = print; document.calculator.line.value = print;
	historyInd = 1; document.calculator.line.style.backgroundColor='#aacc99'; } else {
	document.calculator.line.style.backgroundColor='#cccc99'; } } function toSci(s, eng){ var exp = 0; var
	negative = false; if (s.length > 0 && s.charAt(0) == '-'){ negative = true; s = s.substring(1,s.length); }
	var splitter = s.split(new RegExp('[eE]')); if (splitter.length > 1){ exp = parseInt(splitter[1]); s =
	splitter[0]; } splitter = s.split(/[\.]/); if (splitter.length > 1){ s = splitter[0] + splitter[1]; exp +=
	splitter[0].length -1; } else { exp += s.length - 1; } var leadingZeros = 0; for (leadingZeros=0;
	leadingZeros < s.length  && s.charAt(leadingZeros) == '0'; leadingZeros++){ exp = exp - 1; } s =
	s.substring(leadingZeros, s.length); var moveDec; if (eng){ if (exp>=0){ moveDec = (exp % 3) + 1; } else {
	moveDec = 4 - ((-exp) % 3); if (moveDec == 4){ moveDec = 1; } } exp -= (moveDec - 1); } else { moveDec = 1;
	} var trailingZeros = ''; for (var i=s.length; i<moveDec; i++){ trailingZeros+='0'; } return (
	(negative?'-':'') + ((s.length==0)?'0':s.substring(0,moveDec)) +
	((s.length<=moveDec)?trailingZeros:('.'+s.substring(moveDec,s.length))) +
	((s.length==0||exp==0)?'':('e'+exp)) ); } var digitArray = new
	Array('0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'); function toHex(n){ var result = ''
	var start = true; for (var i=32; i>0;){ i-=4; var digit = (n>>i) & 0xf; if (!start || digit != 0){ start =
	false; result += digitArray[digit]; } } return '0x' + (result==''?'0':result); }

function toOctal(n){ var result = '' var start = true; for (var i=33; i>0;){ i-=3; var digit = (n>>i) & 0x7; if
	(!start || digit != 0){ start = false; result += digitArray[digit]; } } return '0' +
	(result==''?'0':result); }

function toBin(n){ var result = '' var start = true; for (var i=32; i>0;){ i-=1; var digit = (n>>i) & 0x1; if
	(!start || digit != 0){ start = false; result += digitArray[digit]; } } return '0b' +
	(result==''?'0':result); }

function fromBin(s){ var result = 0; var place = 0; var i = s.length - 1; while (i >= 0 && place < 32) { if
	(s.charAt(i) == '1'){ result |= 1 << place; } place++; i-=1; } return result; }

function setCalc(s){ if (!modifyingHistory && s!=''){ lastResult = ''; lastInput = s;
	document.calculator.line.value = s; document.calculator.line.focus(); lastInput = ''; lastPrinted = '';
	historyInd = 1; document.calculator.line.style.backgroundColor='#cccc99'; document.calculator.line.focus();
	} } function appendCalc(s, replaceLast){ if (!modifyingHistory && s!=''){ lastResult = ''; var newContents
	if (replaceLast==0 && document.calculator.line.value == lastPrinted){ newContents = s; } else if
	(replaceLast==1 && document.calculator.line.value == lastPrinted){ newContents = 'ans ' + s; } else {
	newContents = document.calculator.line.value + s; } lastInput = newContents; document.calculator.line.value
	= newContents; document.calculator.line.focus(); lastInput = ''; lastPrinted = ''; historyInd = 1;
	document.calculator.line.style.backgroundColor='#cccc99'; document.calculator.line.focus(); } } function
	clearCalc(){ document.calculator.line.value = ''; historyInd = 1;
	document.calculator.line.style.backgroundColor='#cccc99'; document.calculator.line.focus(); } function
	addToHistory(s){ modifyingHistory = true; var found = false; var last = s; var temp; var historyElements =
	document.calculator.history.options; for (var i=1; i<historyElements.length && !found; i++){ temp =
	historyElements[i].text; historyElements[i].text = last; if (temp == s){ found = true; } last = temp; }
	document.calculator.history.selectedIndex=0; modifyingHistory = false; } function load(){ modifyingHistory
	= true; var historyElements = document.calculator.history.options; var cookie =
	getCookie('calculatorState'); if (cookie != null && cookie.length > 1){ var history =
	cookie.substring(1,cookie.length); if (history != null){ var historySplit = history.split('\n'); for (var
	i=1; i<historyElements.length && i<historySplit.length+1; i++){ historyElements[i].text =
	historySplit[i-1]; } } document.calculator.display.selectedIndex = parseInt(cookie.charAt(0)); }
	modifyingHistory = false; } function save(){ var historyElements = document.calculator.history.options; var
	cookie = document.calculator.display.selectedIndex; for (var i=1; i<historyElements.length; i++){ cookie +=
	historyElements[i].text + '\n'; } var expires = new Date(); // cookie expires in one year
	expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000); document.cookie = ( 'calculatorState' + '='
	+ escape(cookie) + '; expires=' + expires.toGMTString() ); } function getCookie(name) { var prefix = name +
	"="; var begin = document.cookie.indexOf("; " + prefix); if (begin == -1) { begin =
	document.cookie.indexOf(prefix); if (begin != 0) return null; } else begin += 2; var end =
	document.cookie.indexOf(";", begin); if (end == -1) end = document.cookie.length; return
	unescape(document.cookie.substring(begin + prefix.length, end)); } function displayNextHistory(){ var
	historyElements = document.calculator.history.options; var nextHistory = ""; if (historyInd >=
	historyElements.length || historyElements[historyInd].text == ""){ historyInd = 1; } if
	(historyElements[historyInd].text != ""){ var temp = historyInd; setCalc(historyElements[historyInd].text);
	historyInd = temp; document.calculator.history.selectedIndex = historyInd; historyInd++; }
	document.calculator.line.focus(); } function nextDisplayMethod(){ var d = document.calculator.display; var
	s = d.selectedIndex; s++; if (s >= d.options.length) s=0; displayMethod(s) } function displayMethod(index){
	document.calculator.display.selectedIndex = index; displayResult(); save();
	document.calculator.line.focus(); } --></script> <style type="text/css"> body { background-color:beige;
	font-size:10pt; } input.advanced { font-size:9pt; width:.75cm; padding:0; margin:0; } input.clear,
	input.number, input.operand, input.equal, input.other { font-size:15pt; } input.clear, input.number,
	input.operand, input.equal, input.other { width:1cm; font-weight:bold; padding:2px; } input.keyshortcut {
	background-color:beige; color:beige; text-decoration:none; border:none; } input.popup { margin-top: 1in; }
	input.clear { background-color:#aa2222; border-color:#aa2222; color:white; } input.number {
	background-color:#CCaa99; border-color:#CCaa99; color:black; } input.operand { background-color:#aaaacc;
	border-color:#aaaacc; color:black; } input.equal { background-color:#444444; border-color:#444444;
	color:white; } input.other { background-color:#9ac693; border-color:#9ac693; color:black; } input.advanced
	{ background-color:lightgray; border-color:lightgray; color:black; } input.line { background-color:#cccc99;
	border-color:#cccc99; font-size:15pt; font-weight:bold; width:100%; } select { background-color:#cccccc;
	border-color:#cccccc; color:black; } </style> </head> <body
	onload="load();document.calculator.line.focus();"> <noscript><h3><p>This scientific calculator requires
	Javascript.  Please enable Javascript in your browser's preferences and then reload this page if you wish
	to use this scientific calculator.</p></h3></noscript>&nbsp; <form name=calculator
	onSubmit="doCalculation();return false;"> <input class=line type=text name="line" onChange="lineChange();">
	<br> <table summary="Calculator"><tr><td valign=top> <table class=keypad summary="Button Keypad"><tr>
	<td><input type="button" value="C" class="clear" accesskey=c onClick="clearCalc();" title="Clear
	(Alt-c)"></td> <td><input type="button" value="(" class="other" onClick="appendCalc('(',0);"
	title="Grouping Parenthesis"></td> <td><input type="button" value=")" class="other"
	onClick="appendCalc(')',0);" title="Grouping Parenthesis"></td> <td><input type="button" value="+"
	class="operand" onClick="appendCalc(' + ',1);" title="Addition"></td> <td rowspan=5> <input type="button"
	value="&amp;" class="advanced" onClick="appendCalc(' &amp; ',2);" title="Bitwise And"><br> <input
	type="button" value="|" class="advanced" onClick="appendCalc(' | ',2);" title="Bitwise Or"><br> <input
	type="button" value="^" class="advanced" onClick="appendCalc(' ^ ',2);" title="Bitwise xOr"><br> <input
	type="button" value="~" class="advanced" onClick="appendCalc(' ~ ',2);" title="Bitwise Negation"><br>
	<input type="button" value="&lt;&lt;" class="advanced" onClick="appendCalc(' &lt;&lt; ',2);" title="Bitwise
	Left Shift"><br> <input type="button" value="&gt;&gt;" class="advanced" onClick="appendCalc(' &gt;&gt;
	',2);" title="Bitwise Right Shift"><br> <input type="button" value="%" class="advanced"
	onClick="appendCalc(' % ',2);" title="Modular Division"><br> <input type="button" value=","
	class="advanced" onClick="appendCalc(', ',2);" title="Comma for functions"><br> </td></tr><tr> <td><input
	type="button" value="7" class="number" onClick="appendCalc('7',0);" title="Seven"></td> <td><input
	type="button" value="8" class="number" onClick="appendCalc('8',0);" title="Eight"></td> <td><input
	type="button" value="9" class="number" onClick="appendCalc('9',0);" title="Nine"></td> <td><input
	type="button" value="-" class="operand" onClick="appendCalc(' - ',1);" title="Subtraction"></td> </tr><tr>
	<td><input type="button" value="4" class="number" onClick="appendCalc('4',0);" title="Four"></td>
	<td><input type="button" value="5" class="number" onClick="appendCalc('5',0);" title="Five"></td>
	<td><input type="button" value="6" class="number" onClick="appendCalc('6',0);" title="Six"></td> <td><input
	type="button" value="*" class="operand" onClick="appendCalc(' * ',1);" title="Multiplication"></td>
	</tr><tr> <td><input type="button" value="1" class="number" onClick="appendCalc('1',0);" title="One"></td>
	<td><input type="button" value="2" class="number" onClick="appendCalc('2',0);" title="Two"></td> <td><input
	type="button" value="3" class="number" onClick="appendCalc('3',0);" title="Three"></td> <td><input
	type="button" value="&#247;" class="operand" onClick="appendCalc(' / ',1);" title="Division"></td>
	</tr><tr> <td><input type="button" value="EE" class="other" onClick="appendCalc('e',2);" title="Scientific
	Notation Exponent"></td> <td><input type="button" value="0" class="number" onClick="appendCalc('0',0);"
	title="Zero"></td> <td><input type="button" value="." class="other" onClick="appendCalc('.',2);"
	title="Decimal Point"></td> <td><input type="button" value="=" class="equal" accesskey=e
	onClick="doCalculation();" title="Enter (Alt-e)"></td> </tr></table> </td><td valign=top>
	<p><small>Display:</small><br> <select name=display class=display onChange="displayResult();save();"
	title="(Alt-d)"> <option selected>Decimal (Mixed Notation) <option>Decimal (Scientific Notation)
	<option>Decimal (Engineering Notation) <option>Hexadecimal <option>Octal <option>Binary </select></p>
	<p><select name=history class=history
	onChange="if(this.selectedIndex>0)setCalc(this.options[this.selectedIndex].text);" title="View previous
	entries (Alt-h)"> <option>History: <option><option><option><option><option><option><option><option><option>
	<option><option><option><option><option><option><option><option><option><option> </select></p> <p><select
	name=mathConstants class=mathConstants
	onChange="appendCalc(this.options[this.selectedIndex].value,0);this.selectedIndex=0;"> <option>Math
	Constants: <option value="E ">e <option value="LN10 ">ln(10) <option value="LN2 ">ln(2) <option
	value="LOG10E ">log10(e) <option value="LOG2E ">log2(e) <option value="PI ">&pi; <option value="SQRT1_2
	">sqrt(1/2) <option value="SQRT2 ">sqrt(2) </select>
	&nbsp;<small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbs
	p;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (<a target="_blank" href="http://anycalculator.com">back to home
	page</a>)</small></p> <p><select name=mathFunctions class=mathFunctions
	onChange="appendCalc(this.options[this.selectedIndex].value,0);this.selectedIndex=0;"> <option>Math
	Functions: <option value="abs(">abs <option value="acos(">acos <option value="asin(">asin <option
	value="atan(">atan <option value="atan2(">atan2 <option value="ceil(">ceil <option value="cos(">cos <option
	value="exp(">exp <option value="floor(">floor <option value="log(">log <option value="max(">max <option
	value="min(">min <option value="pow(">pow <option value="random()">random <option value="round(">round
	<option value="sin(">sin <option value="sqrt(">sqrt <option value="tan(">tan </select> &nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>(<a target="_blank"
	href="http://netsitemasters.com">Netsitemasters</a>)</small></p> <p><input type="button" value="H"
	accesskey=h class="keyshortcut" onClick="displayNextHistory();"> <input type="button" value="D" accesskey=d
	class="keyshortcut" onClick="nextDisplayMethod();"> <input type="button" value="M" accesskey=m
	class="keyshortcut" onClick="displayMethod(0);"> <input type="button" value="S" accesskey=s
	class="keyshortcut" onClick="displayMethod(1);"> <input type="button" value="G" accesskey=g
	class="keyshortcut" onClick="displayMethod(2);"> <input type="button" value="B" accesskey=b
	class="keyshortcut" onClick="displayMethod(5);"> <input type="button" value="O" accesskey=o
	class="keyshortcut" onClick="displayMethod(4);"> <input type="button" value="X" accesskey=x
	class="keyshortcut" onClick="displayMethod(3);"> <input type="button" value="A" accesskey=a
	class="keyshortcut" onClick="appendCalc('ans ',0);"></p> </td></tr></table> </form> <form> </form>
	<h3>Instructions For Anycalculator's&nbsp; SUPER SCIENTIFIC CALCULATOR </h3>

<table summary="List of keyboard shortcuts" vspace=20 hspace=20 border=0 width=150 align=right><tr><td>
<b>Keyboard shortcuts (Alt or Cmd):</b><br> <ul> <li><u>C</u>lear</li> <li><u>E</u>quals</li>
<li><u>H</u>istory (previous)</li> <li><u>D</u>isplay (cycle)</li> <li>Decimal <u>m</u>ixed display</li>
<li>Decimal <u>S</u>cientific display</li> <li>Decimal En<u>g</u>ineering display</li> <li><u>B</u>inary
display</li> <li><u>O</u>ctal display</li> <li>He<u>x</u> display</li> <li>Last <u>A</u>nswer</li> </ul>
</td></tr></table>

<p>Enter an expression into the tan bar and press enter to calculate the results.  </p>

<p>This calculator remembers up to twenty past calculations in history.  To save the history between visits you
must have cookies enabled.</p>

<p>All results are calculated using the Javascript eval() function.  Syntax for expressions is the same as that
for Javascript.</p>

<p>This calculator can handle input numbers in several different bases:</p> <ul> <li>Decimal (Base 10): Numbers
that do not start with a zero like 15 or 3.14e15. Decimal numbers can contain digits 0-9, decimals, and
scientific notation.</li> <li>Hexadecimal (Base 16): Integers that start with a zero x like 0x1a5.  Hexadecimal
numbers can contain digits 0-9 and a-f (or A-F) but no decimal or scientific notation.</li> <li>Octal (Base 8):
Integers that start with a zero like 073.  Octal numbers can contain digits 0-7 but no decimal or scientific
notation.</li> <li>Binary (Base 2): Integers that start with a zero b like 0b101.  Binary numbers can contain
digits 0 and 1 but no decimal or scientific notation.</li> </ul>

<p>^ is a bitwise xor operation.  To raise a number to a power use pow() function.</p> <hr>

<center><h2><a href="http://www.anycalculator.com">Back to Homepage</a><br clear=all> </h2></center> <hr>

<h3>&nbsp;</h3>

<p>&nbsp;</p>

</body> </html> function ordinary_say_hello() { document.write("Hello."); }

function special_print_name() { document.write("My name is: " + this.name); }

var thing = new Object;

thing.name = "Fred"; thing.say_hello = ordinary_say_hello; thing.print_name = special_print_name;

thing.say_hello(); thing.print_name(); %PDF-1.3 %ª«¬­ 4 0 obj << /Type /Info /Producer (FOP 0.20.5) >> endobj 5
0 obj << /Length 1980 /Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gatm<bAu>q']&(*38GjJYo*UjB4j;Da*Gn-Z"CS'Z[bS;6:qk!5[%4'^7Zn](DNOPRG&&=F`H=%*oM?!Hi#nqE8UuX@PrN3.F_-+W'>2`6XHGbO
d?9$Q6]cL+[=&]7I>MOrII(oqa.NqHfJDk1fL-PDf7<$c(#(/$GCfHIIe3rAoLnC@R$6]qk\5<PYK8W<E/6f%R0>>FK]7j36M/DY<Z"U8;.hBX?
9#_Ys?DJMoc<GNr1TIit@t4&O>`<Dh/@&?h]^YN'#gB=,oH>EoPg'r(c-'T],/tH.$o4.ErF?%+kXnVkH#@Zu*bhdP9TLkW-(u*_(Sk7\f2GhlN
ib\khs\<q#\Z?.2YJduoiR*qMOrjb^B(>r]u**uu-2C.^d[?Km2a_&6s59A(<GZOdsC)^XGMbPT+NhSQW=6+g'Wkc9_#SNV@_qE::I(6e-?$:h3
eWgf#\T`c92kSkKER9`!UDB3lUn9W1pHG1W4XP9+L4Q$e8-Nu0fR>*^[_PAno-*M%GOBMr_94#B?!N[=i\W3%&ohX?X]^Jfn*#Pp@0GpQ\dZO6t
@^PBq%gs5%>*a!gOUHs-*A'/YqpA@,E%=\*,$R@0dR?g=R.=e$;;T*$9H)J<ki^N15#PAlG]pa/-_Vlgkm2qUcl&!(l\`8gAP$82=$qUC4cQ[@T
UC<daOTeBdX6J3O)%o1UPS3L!3>_Afil*0Z/+j&QM2,u7Wq7?Q`aN2\PDEjYca`DYftX%-6-$]=ncH$09#82K)/OWL5LNpBkTf/,[tE42LT>NF6
o9+bU_,@SCSJd=&H'*H936r.i;OfG3fb<i8J2b4hLeJ;:>+=eha[;GIjOiD63g?=M8Z#Mh,5;h$pU6m&ps2(QJto#Ri9jbd3s"msY=_X1g%V_qG
Ur6Pfb4cWt.(&SINWW10<E8K=j00]Cq=VC<l#h+sb"=*60UP.@4&.X=K`?Ld^6G;t]bg9B5;MTJh0-pT$dVIQ/h[X^G<3s*or4'L#@7'L4&Q(eX
_&0QMR`u%VlBg<`%VX50Q0\]WjTZaL6eSNd9MA(R6b6*Y(hq,OEDR$dTBPiK[_g+EG[aj=B&1hBS"4j'hqejRafM]C>b1#'3O;o1Tq26j+ljLOm
:7=]l2;@'D6Q0;c,;Dr88hJ]sq,eJ)=7UfCd7Z@0$n%I-4fh<Y3=maa8$9-,S654Y;rEOqJ[uBr!O@$o6X@%m=0Y]O:_S[d4Tn^:[k3BI:<3t,.
?5Fs#>8hXAThuhSkjC:h`U!JS#9L_AD!,#2gru"(Wt53!bJ71K%s_/W=q,'e^s\(OkHo[+kKQSr;Ip/B<[pMQ(Xr.3?j^hm`V&nl:VuUchnm([`
Bugkf\]<<]U5Z9s[lc#lNIq(kfnt&d\)J3D$isL!9^.mRPS+/KNjU-"&gtjs)B'+:o15Z(dud8t8qp8Rr5ND_ccOE#BpM^ti_()k<f\G'4f+B+a
Ol7(kGh&X^3&M&-%cH&G7]#'b+R6;A%G//'#Qs/=&M1YRp\(oUmdbeSQh8VP^L&5HV^3NtDtU;%-\B*E)e^AL`a:B'C51D/,--04gibj0_\DqY5
_5]N<7!@Iq;60cL8iX#nR)$GgrpSLm:M_hpS6,R)f9,7*jC(NiuSr0(;K5g,=@:fiTrCc6T5ZQ2=Vd`]@Cf?4Dm.oj]U/\RY;pmI*E>&0E<"@FI
B.b3gb/=N?oJS,T6Kr&6;*fP#QDY[JCP`9&/9+bE)L,f>$q_eG!1T(@ETHuuEq*T[!#n<D"Q&W"KG;5r%sWQ8R/NC`W?46L+%GO)++R=Qc:DNFW
+U&;C?3(kZTi*SMbt\frg8-4VBj=EkA'<)7>Y)m8RO`]4QK!\osW^?=CEWH;(3"*7?lr0:k8K=W"gD^%Q0JHqCisdYB(e^pjY=G5KC.d8%*b;@V
&r3Ng;fc(n<>;n9-23H35_/]D`5r$Ur<rH!W0EK#2qlYq[:81WK'n`Q'\B%trscp-Tf=k04?=NpQ.bEa9sj!f(n(3W~> endstream endobj 6
0 obj <</Type /XObject /Subtype /Image /Name /Im1 /Length 654 /Width 87 /Height 34 /BitsPerComponent 8
/ColorSpace /DeviceRGB /Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gb"/(m?*&E%,FZ0_%J04&hLj3.)?NI_%J04&hLj3]JmkN_\!2p=Zg;Vp[=Js)0e_2GFf6Q%32b+0**1"@AT2V)!JO@_UC@/qgQ`E\uqB>cL]71)
ImMT!nA$s)i!<,:1TVkbXhkRap;B.FPA^10SS:&>[5::FE&;@gIZq,(;PC?Z7HVs`e)."+a49R,dd^1h1@7T#E-=bL$mkF#VsMU<urB$\OljX5o
>;N+rl6jSKB!\,#O3eW8S3T2o5s_OX.%4Qc6V<E?#iXN73/NU</+'`i-;<Ft'l:fSlLLhPqXm?s6c4Qr5\RNGl>8jmaq16lj??65$Yd-`7HQn,a
o!O@'6oQZF9F#6:"O"\R,bV_Bkk"tmqV=r8D32d<472OkMp"Ged%kgWR9Mr`jkI0W2U!Y-qja"3kr5#;pl]K;YRSqqIA/8As_+.3dOMUqPY8][S
-I@8SgEajuu>;hm>kYO;H_./9I!P^HE'q\(7^I;0"";d?S3cKME((79/\C)Nr6<0L$s(^>_q`7=S+6KK33;M4dR_mR]@rtT,2X)AKOO:I9f6Wk"
iVlNFWbjO$bb$N_+-fmT)K@#XZ6\Z)FRY&ihOPaU?)RI'eHkAH]U+/U#R?3,8Po0]!u8bOIWn%K&l*ArC9,s@L5$tf!2YnGc2~> endstream
endobj 7 0 obj <</Type /XObject /Subtype /Image /Name /Im2 /Length 869 /Width 121 /Height 23 /BitsPerComponent
8 /ColorSpace /DeviceRGB /Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gb"/e4\d4f&;>N7Nkc5d!cl!f.2`FP*+5U;a[jJr-QjZ[huGsV#)!q5YQl#ZiNjT-[]mb]O"I_EC5o7nWa<HCWh-A/Z:F`(kcR]cS%L2rpYC5Jg
9`H[f\RRt]41["U:WNJ^tu(ShY&t1Nq3&=3Q3`)HN==f;Q=rXp;=)[1[]>QW[ZR1\&eAbYQ$TIFh[29d\`mf*8;UN]B\>e%&&TSM:jLR%d5]'T.
S[$f;[<6M(TL>8qT&#o$&p6ehoSa%fUb>UY7Ric^*UV2*;f$6BZ([TeNm3B.$Z>?lSU*`B=+n[oWQd!]H+ZQ`8nB-gI5=S]CK_eR!lLn^7q?"U\
0<`c%//X@0<%;m=2r!9PAW7E_O8r#suN<3qpo<+o2mUY5W=L9jSgJL"NC""*gO65W6QEHY*Tlbp=uS5N)V`OkpuLLl.fXo(emNcLiW/B4.1(Is`
JmjiVc?a>PkhYE0aEGK)-gEKE0h%?=N[<YH5JS1ABc!i@7QqHnJ8u6oM2OA3gZs[jI=HhpSV'?9WagnpeRK^#BGXmo;?3aaS#1qK&EE!HZ];"!m
!@d[TCk`(F1]Z!!Ckk.]A!IWMPamE-Bi=c7nrtBO"H:a2G;#f(\5d;G&>@0DcQU4nA<N6C2Hs'BKPbeZ>iU`EqM\ipZ(M]FkI!W2ClH^3j!E6G/
n\^)aC2adh,sO8=qgf[[aL]iX[g*a@mOmHYGcU^`nbOT3$l6dGc]\;8bEY'c"QUN'%jMNEPQ(`F<u6bP@ZqQM:h`-)eg4403qp\ZafRaSKpr:X@
t7+jH!Jh\SfEn\,<FA&2:p67tRr"D,9i?8ht*2;uW8piGr&/s!t)[cLuI#RgK>A=/3/t>E^C.RP\a,UrhKT*B@\Q3<~> endstream endobj 8
0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 5 0 R /Annots 9 0 R >>
endobj 9 0 obj [ 10 0 R 12 0 R ] endobj 10 0 obj << /Type /Annot /Subtype /Link /Rect [ 70.866 505.75 160.23
493.75 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A 11 0 R /H /I >> endobj 12 0 obj << /Type /Annot /Subtype /Link /Rect
[ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 13 0 obj << /Length 2167 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
GatU5=``=U&:XAWi:JJdfE_N7mGu)YS2>-3EG`+S:=TT,Jg<<<<$&>&rUX;9&f)`Yb>\:,TXaaa\%C#[m-O+0C/C7a`b]d0)XB1oR.*l\cQp6j)
K#Q4fq'okN5+6I<etjGDHnsC#D+nrL<IJE\-np#&`mJ+b,8<bT?iM3NS//!LUD1!1>IC^1h^IE2PQ<*"cl9<V=MG\cZWd>d46C:2V[bL-hn@$ZK
g]/.2*,S@D56:``-eSX0dU`Sjt?P=)#Ko,)-&b<V#W)i`Md]*p1P"9nr9nZVG>oB9#@WK-^H?UT-_uBGE/(kokpV(e))&hqisMaCU9"n9T'tT87
TUIH0Vi&%tN;WjE'I@_9dh7%X*TQ1m_->%TST_^Ja[$QSIYdONqi4Q._I9R_r;BVT*R_P9hmM?9cab&U377p3,40jbDq8rd%^C"!sBknokY-8^T
(a5FU0(J[58>tcP_?k_Gh<JhH2QhiU[WNFT,FaJ3eMCB7l*gtHp5aUS$)<N>,$Ubin4B0!,:0;`0#?9C(Z#0KrUhc+`Y@/?PGs5X^UQh,m;d"nj
1e]-a?r%^RD/a(G,2-PeZ:,XgoJHLuJ/0rflT_)Qm6NM4T'^BKNgGgeg+nV.!)Sp1?UUSKS^,QDnWaIM=c,`T3%A\lNjGWiV3RNd=o?WFOA_!=^
10-g.8?3dk"L#[164BpX:!4@GCI0\rt6Z+rapUCQ/;hO-GnnD`F9`2p?&pHB`VmkU28TY?>Zu7K4KHH$(pUoWnCQ0Z<^O80T84Gh+t['<93#5R]
NeH[.Vm^EAK]RkKG3&"b/3s*'Sd34/ua&f;\p]!qiDU'2!ZtkJlNJf<ae2V"^5YoV5A^`APVLPQI:l9jn'a3Rhj$"X]e%E>#15nf!r<ad?O[>_?
?F4;'WtY\fT.%XsRXf&3=XE)?%mI/d]k]K:EI:`AhriBR[r]Yt_m*B&J5#GF`h_)qHID$I!-0Z'[35b4@*p^T-V&Z@cFjLt/sJPp#TkhjM(j#aq
jdjCZ#^Yg:dJ-!gXk,1ZSiO^e8f+aD@7!H(EW)M98W:[b/O/-2hAGWI&5\UYg3KCUW[>;^h4;dVL\[;H\X!^b^?LFeY@h\HA`R3Qb_l1e"_2B-!
NDY&D"_#RN.aMNgMt\$tXi1+."8%QdnsJ*(jc?<8rBq]O9`cf/]FSDk?&L1<.K^d`?f,Km_oKjUIe['o\/1N@3JI%Nd$UZ8HK@["g/rc?N\bZ0M
W7?,7%$*Ql,M^[_kAq.SQThu^:`7<Lps"t6?VfHWbmZ>SQ0K><K3&';aoM+gg;gKp%sm"Xn8s4]%u/\@0uBL;_o6NN90bTkXMP+W-uq3f>bTn2=
;JUmWegp:W//9fc#!YT0W(J"S6]j./d7VB\7u"A7(2_AK-C:fD4Cj*k;Ze)\aXdGkWE+?o2Y#][=s&Jc0!=q_)"]%sM*]T*EZt^<A]DqW)Bknlu
bM%tI`Z+piAm8RSPrGUjg/`.?^L*T@41b%P=LfP<Q8'\:IB<`@b\M!M#;gWhV^`=@U,`U>f_GC.,1MGR/kH_AR$M>"r]]9-^j@K@&WqF'(l\YqS
2^5(?q7If*.OkH[-?]0"4%&S2d$3QS)S"`4s-f)&%Hf89;._H&rAp?X-R1g-mob;+A.hnDf8C-cO7TrS,Kr263K`AiON'(inA!huIkAsc"(]D)'
`ZGS9b!n]I+/L[B/Z/dQGRujCWl>ZNr]Qe:NR/Ju)lQ`\h2u#?!!!1dL-ee&q/s*6l4fQ7bU3bJ"nkGb>/`1*qeg#EM>'Z:F40#L8$%[jGq='(@
h<?RV/'E&Z="q+34H5ogf>oI$3\C@[M163$t8$C'/`V-pkk\aIn"i9I5/raPl.l0FI#4+ZM)3gQ$TYNf_0;XohO4=<N9!+<!pA0@$.MIKh!M-WN
W#[Oh>R)V2doZZb&*IL=%rI7F@h:P7X^O:pY[Lb9O/_s2UF0:Ih#FkrB<;l&"`<53nkh[>76sM5*%HDSDC<[S@b:lsE`]4nh51YFXr=/n"cBT[A
e?fp:fNAGN]Dc5a<kQL.emZ?oP[OcUtahQ#'-b3h2*6G8EI^-ZBoH4SmPlu^E__=JZgX9u5nj5QaC*Ie+$CD1./C[_<q"9"a+fp#<'AI:VrBP5P
tqcp3]aJR;8?h*kNj?omF/At628&0(tIpQiV+d_9&Z$f1h,5_[ZP\/5~> endstream endobj 14 0 obj << /Type /Page /Parent 1 0
R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 13 0 R /Annots 15 0 R >> endobj 15 0 obj [ 16 0 R 18 0 R
] endobj 16 0 obj << /Type /Annot /Subtype /Link /Rect [ 70.866 322.144 128.214 310.144 ] /C [ 0 0 0 ] /Border
[ 0 0 0 ] /A 17 0 R /H /I >> endobj 18 0 obj << /Type /Annot /Subtype /Link /Rect [ 341.156 65.509 558.866
56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I
>> endobj 19 0 obj << /Length 2287 /Filter [ /ASCII85Decode /FlateDecode ] >> stream
GatU5>Ar7S'RnB3&G"6PCDi6Y7;9X\R]\5GXR"F?gI'd%g88_0[cC##dU:^WhiT<iLU'<0BoBd$b]D`eme$2>g$@D!J'NES#Op&Dm[r@-8Y8CZk
XjnM)@0.654Q<&!>C-Agrm)a4o=:+)DR=I!/!Qm$@b=G(o.GtRNdOi&kZ?r%@Ct.%+C#%bbKu?1de9K]nsE>hV9a/I%[.(&-&UFa$^3qL%$P)gP
tt'@_8,4PM)f,,-8=['W!;LqCYG'h.i^JFE2A"k"3/NhPts+I/Yn3m,!u-4M*8Xp$6NP]e,F!m9]a<l$`)>hsXR?N"T=[#,bt)dI-;",C$7^/3n
E;pZbN0bjo;&2X#7NUj>^(6qIfZ[1#Fu]&*HQV.uuNI,Nk>T=`-ChfjtZ/sD48j\KA)aFO%@3n3*W"9Xf+XiOC!<7_YqWK!KSS9If"4+mu-+>aQ
>^;1'cJU46b6qu:E(h:cW_F7tHlQi$RRhQW`E<;<FB"QVG[1gJD&eR!5XI,4=Xoo<uHB\<,o(2#be+5Z/hB=Q\I+0G/g[Q*<5e[:$/ehGVU`UUJ
0?X3=\%olJj41sJ3u4*:<4f87Rathr=GL8kWF-i654-]WWY:c+OKYGAneptmL=7NPk1J(>R^iB@b\6HC3'80TX,S9j>kE_j7O/6SOL5q5@]r7J[
T5goH1WIiA@m5d?P\A<J7K\?M2d<N\9;AH14O9(RoUVF$:.Bp@ZG-kQAL=2F5)Tn$A9Q7Z/PC`8$kfb[9fK"NfZZW`[4di!%9A).i\\Q8As1fp@
+pZ$:W1"Ut;LI^L3#)7f(0i=$8pX9gfKf;&q]*G8.QI1X^dV]Rf8.Td]SgA@n"@+c=E"e>Di`Q0quh7/r'`621/l_*3WfT+`iF6SpK,]E>CuS^h
\LW^6m/X"##;@oj&%gKe^C@f]mPNU,^LNC"g,+1@Z\A]N$GA3>VU.7kd+@5Pml-t$YV6Z*a'=Lu0,HVJ*/G`'I,kUV(:2`XD4Kg:QN/I#ARKKq?
*>S_s6'F=[DP8TZV!AiIMJqJSmLEh;X`JajoYo)LHoGu5!8D:H*S-gHmOi.[%;73,a%%e-@pKYD2`1&Z6^V=L^@G2"AhWM?8L7*u).Y%>AOfZqW
W,A[&54)Z%kkWi+-r!Xg]EmfZ^0/[c["L.6YuXE</tFkJIe+li@-@FY`1uK-+ee:KC.N7b[^AOD=AT#Fm1V_QADaSRfa=8^l+AMrXkHdCFjFGok
[i+b(u,ag6<b8^ZW:1-d2(&?h%if7]rI'(]0ZT'`89@XqO=M=@0Age&OfL-;/dt+,;E^HMl#-FFZM_g/V>3'Jk!nWgurdDc%jX6<[<4T.3P6bm+
U_[W^Iu0B#Q)P@?-;Zal^\hd="\LjA"Zq<'KT*/FM;-hn"bn+X@?E-US6@'L;qUa)L+,G5@$lS/t^r14b6tV:so_%_-%WVB-HiEDo*cXR`O_$%'
>>qUDUUOE:;]2t"C7,pBZBSXLLbjFm)qRO_s%n*np?gn3?N\7W69N#88:-8gp<S0C7dCj#tc:%b0/Qsr!b#T!<.Z2/_&Y@)*1fq[!Qp7gODQqaV
,O"GLHPUcuJ/ER*7%^`JkXV!N"*H.egMi!]TZ&X'$)$EE`30A*">ng=VH<`(f:sC;q\Y@Bcjbpbil>4V<\^ZY4B8+N5U!ND.c+gj'+D[5paX^lm
@iY^\K+;t$n"iWh\6b^Giq#h[kqhs@V=*ti@E7:K+m$-bXTQ+#N`DX99t&H=Bg&te_\W'p8G>l.C4>+b%.#.DM'(hU/aaU$Eb0Dm?[`u1I!A1!e
9-]C+NO-.+4+jaG&0M]@u70?,M=R^N1L:Nj?4W@X^o0K3mtJ)qk%'YYtKO8,Jmk!DD(`6V(bS27ka[TZ;WCO.F\U[>h;mmZpNPlr/[PV8WMTqpI
5H-"*.h#gpnJrDG$2SdCsh<1R[<f8NJO<[TjtX!\+[5N]soMo$Gp7dkA0T)S/O;kd%M=+G4\\fT9#V(QB4?.10/7Jq&F:hlnuU(koI7@IreTJeX
[+e`sG1hN!.d5Zs-Yd/Dh+FKeZ':6^ua'%,j1;6Pn_+$+'X8Bcc\fpa@gMY#?-Q7t]$P4k_6Hjo"r`q"'SmQ!<Ek-m>fqcMWSXQbJ`ZH^p)hs#9
lebNQTrceCFP"4'aZa;/uM?sr)T?;tBd&6:0T=J`]jO.eu`pFJoDACJakBHS&Hb3&8XYGfS040$R9a'Cj)jiltg6'.m[L[Yh>Tlhu?%9ZIkM%Oh
p5%"A5=0)[-*@n=1NX2lTdl&bA?TP<l_<kP#p=Y)omTt8FP:-4hk>%Vhu<pSp`;B~> endstream endobj 20 0 obj << /Type /Page
/Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 19 0 R /Annots 21 0 R >> endobj 21 0 obj [
22 0 R ] endobj 22 0 obj << /Type /Annot /Subtype /Link /Rect [ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ]
/Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 23 0 obj <<
/Length 1900 /Filter [ /ASCII85Decode /FlateDecode ] >> stream
GauHL968iG&AII3E,oYT9je#J5gl2Ei\]o<e'r*6Bb+V^ZinKE-rL4?`G3Em]dl:"jTC\$VQn0O'')6jh8SAX?;;lOVN\bA2@1AuZ'P9fT-p4)H
m(&%fn;EAijMQtlT+VYiqet(f'VP-aX*,E(^Kk6.11PIYo&`;5pa>f:'Bb1]@?#'O`:ui=F#j!:Lq\So@JO.^rgaRYsEtF2Z-Iro16Zbjk2iVSn
h&%f))B.k@`@e;<`?%:;pq@D`<f9UYA2.=Waa0<F:Xi!oh`keiUDf%A,h0Is(?K/""L[p.(o2oZ@hqq>K6bnE^CD.=fVF1,dskAU%J*F,95Z6_H
*-,ggfd=kmS0I@i+`oi8AUd$*4FE`O$9$(!?XM/$@qbAonCoie6a&Ap,AM+kmf^A\Gcgrra10$)*2M&@#j"NpRKi+qpSj'KK4[c@eTnmU13M(tV
fM%-6Z2OhaFmE,#i@66JD4I]#[fcLg79pCkTTp!AD!B,4!@Aes#<7a#Q[f?-6k.V3L0G<=`$m!l8.R0ODG4%Zj&P^n:396aNP_(RbnfC5R51A-<
Mp^-L[*6n_)mo%sbD4C)W;f0q*ZWI4NT=dLlIX6_i#_FP0RLjYS,`o?msFgZ7;X3OW`7l2TaJ[Oon;qge=s&4n9b,Y\NhSUU2fLc3%s95$(@7Em
khTOEgEOj'W8KJ.IO"Gai\'u(?g3UGd6+']?Nc.f%mWW+Rc)U3fuh69X3@s<dB7=Fr]=Mj`e<`h$md%d1(Ii>DQuo`&"2ImJr-%IDg_'`2H>f+R
H,_G8at]B`JUpmWjAcb56=YMQ4o[.hR)b!jk$oDOONDSTJ*@m?Db<h%ZlHQI/:E%g[e'd?49Q(FRXm`<'e`Rr"iiD&/cPm0g$['+RHjHGnXU^f!
e-l3]AG8,u;X?)_+pOX*PcU^dJD?H>JOEu63P:C4$nTKT?cLc5ThgEU^pdWmcmqC\u,a:6,R;4W8/a]%LNNOgb$@bIZYiZgJ#nflnaa,j_@Ek7C
`$R$LUZ_X+8[UGt2[*?KE"#ahDi^@To)C:):E_c=rEf?jV0HIK.%l8?m6S3*#V(*RIbmZ3,$KSO:Amih-5!M(aFJVa#)/'#$FBJ2g@mOVcnBCA=
R@_K^RA"h6\[EWhla<92;WqZ6EVo%C3PJ9kd%&(q(t>N1DENu^AXH'acE\5t(P#SQYAX1>*gmJLgo,*=iTZl<k7/KZ_nFJd6bp8!H"55=d.P%cn
*U'je);?.6l:Nn)=d*+Jf'tqO<Y!7D''l/Uc.CC2r1CiJ_`eh^&S,SmS@N9<5X7R[PQVLlM8/b.GKRBlMe[\<`]/0:;Zkhrh<'$^Q]O?MX<MgQl
n)4G@WTt*Ta/n;D84-@LjH9k?AZ%K;k77_7qI7!u;+IMbD*qI+o[b@%uf#qs$8/_5utO?l\0UX]1dQ^uZs>S<k\He<6o=^Z-SrW_Q`a)1h<K.UW
bIf8:&Dit!gKL*5bA7(>r7^/u):#,s@P4+*d?K58*F$r:HGN)RrhUJDnj=FF4*F3%49<VN;TZD=d8>929T7_Pb)$#L9WV-7DEAK'[iF<aeG(1?d
hXi+A"JX3;TQSHLjDRm'0)=P,?2I9pB%QXs<'fonn@XC9!Z3E4GaXb7+=m`rCbmune;h^qJZd\7NYur'l4Bi9/VDOqc7q\eRT',oQcJh8TlZc;B
3MQ'4hB:QuM+pKqk,$W]%<O;=iq@CA0\a<jJcpB.dcL-lF=r(MZ?F+Aa<ZD$rA.BEnrRk=Mk/$3ij_.Npi])<g$64#4clbh!NDr&,PQPQ*j1r#g
tAE)C=kqb<#](nGs(OC]eRh89paa+9;DZ<IDN5r%2q[C)G;Y62#bDfaLb%fAlMF<bgou50CKIL2j\IQEs8lej;10n2K0@0Dn'deb"tWnXK_-u2j
c2r!N1\m7f~> endstream endobj 24 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R
/Contents 23 0 R /Annots 25 0 R >> endobj 25 0 obj [ 26 0 R ] endobj 26 0 obj << /Type /Annot /Subtype /Link
/Rect [ 341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 27 0 obj << /Length 2446 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gat%%968iG&AJ$CE.!Mk\hFH)gW:U6PDh9AUPV&q6odLH,gh`FQ(VZ73rSMQn0'>JK!CN]KRgT$h/=+fp!)1?)pe%&ELiTLRHps#4NE/jSeJ^]M
'=>@4Q:^eF0fr%?<m)\*<^l[r'KEH81kt+K3IWBEkrOG#ISWnMH[.I;E\f#aoW65RMAIr/_/.i:G[!iQ>F05M^>El>4MK+_hp>2^#8Q(kJ_N*Rr
e2H1bMC1P4ZcE)asC[*>.&->b^+@4_,8(iqGPse/\E<Z7=`V+,EX:fIjFTaHX!gQuQ+Ief3u4I$`I\&\W6r<=U)5dQ=5t-%QDpW2mR5CQ?>fkSB
MC>FsA3D9OY6AVD^I]D\%&@S9fHk0Hoo2^JqhAB19CFj>\0JK:pQjV%N\0jE;ks1MRfK.P3U&D7"Q?D5m.9]S1`o"l#1l&78bk[Y;;[JZ2?")uu
"I!M[po,5i%X9L;1<b72[@B@=I0Ko,>.Lr2-%>7oeCuI9gqb($a@8b%=Ht]cBn5W0R6I_MW8b_N#)ug%<-CL2K(X7hIq&OK\a]fdCXNo!US2bdP
:16b[!]-<CqhcKenpp'K<WY8W)30qpn40`na<<Qm7U5\a&33_`Gg^+@"R6"+PgQK\GN1jtj&A$7KaT3DL[n3L$d7@H<[#@=pg't<0#R74`'An%o
mT7$Ng^f=.]RFX9&OGeBg"nG+EHZH'6Ok)8IlL&Za-N4?>)?u&bL8$njCmEhG.WKfK9^C($(hn0.uW(bnr@H;7%jCFAOl%ifYuLppX[[?**XL:Q
uh&h.T,t>$:L!aGc@mb4g=F7%qoc(=M36Zp>fI%5QMaOB%DcFbslfZ1QJk:K/[sD=UA9c/gZeE\Z[YcmN7hk\StqGgkcir'Ij<$)bU/)X&00%Vc
_NduX\u1a_jC!u!m1l),,e-9Zs9fud?gI3FPqP(kCM&j1BN^b%uB2m$<hi25&/%3P/8k1,?#gfEFZUnORlF&98*30<MTU:Np3?I*qS5B(T1&K%h
(*/^PY$OIo90X5K<f&:E&2ccVZ-%7JO]-bp""1'RQgBY0q_/GE')YfuT.?;17>tJok1V.1Ua%i"hmtu,HrlBer9o.uY%]RFGpIq54fT%U:2T4<W
E9s%S/Y8aI4Qp0[(k/jD.F].k74l>=O+[^%THnKU:(PAMn.$N*?EPD$FgN66-EE<C42UX3Gje'RM55Tfp5+#iWCPB=BCQgpViZM86$I$7n9<@'\
7]cj0S;FQjJ,9\TK,CeS)k3W&"BYP2^)d"pX/3J]EuH]W?+H9`/VDp=6<(;-ifq26CgE#/]2$7Fb>_nD8kg.2(4W:EFdf+>.-(oQs)UGAkNQ0lL
LNE:c'>H62l\h8Dlt[010hJV>(`UCo"eZ3W&!`-)hE)SFu.2mFb&f7)k!Z`eB6RGfZA6J3"Eh(2&,g?/I%70b&]M.%(>?J7:B.&Z#qjk>FWF^Nl
0CBeO%f-LAZ5M9)>-;b`!/2*qk<1o--B@qj^&@*c.IXLS^r)AX-uE"XBN$[sn<Z_NLno7&ulPZ<^!nSJ#bNC+No2br]Z87(#,I;"pqVu'o-bqhe
XD4/$_ka,SpW/Z99QJge"Z@r$!9^"H3JDV9KO(H%)WuX%$q8J]_dR`c2C+[/KCYEU6,O_W"OD:uf1VW=<1`#18.T$>UF&N^`S[Yc)'Z"![@f\!2
g=`acj1,$rAO&0L_6@4YB*BPNKafpu?Dtnrhl4R#(C;I$<-o'f$B6PSl^+IL,D&"R#gAMbeb-fbkR$j=F6/8M$/';`W(2Uard6-$CcW"_2F_YGp
AHUCT/g+b8$tcomb6GT/,"`:nqsbZ9/=79Ku,e_9;,c^Jg`VOq?A478s'&IbQStH1B(1YbePUY&Fdhq?\4YurOgrkc.Q"&<s9qXf^#9a`f"eL;0
1"W$%]Ge]nZMN-#]%bE8#Sr!YbVil2lKIJjWqqT1hMR4ZN/@7pki8JG;Deb`l7[Hda4TF>6t=TTb`G:8Dk?Yq&7%+&kNj+-nE_R:bBp#\8"E(Io
%tA2#J_!CsI/?XSRWKsb(o>ht<s@M7/8eK=ZE=[uY8ES/j;_G7*BEu[9^;p5!5,4X#99IV4Fmr\urn/ccJo,qe^,B,C\HN<bc.j]S.EVsG6q5`4
/=-#S8Y>*(I;Ae&]$,LZ5#uiB'f'R0Pf0GZ'Bp:M2+KaEOSHcYsP^"M56<8kH[*Uf?%)((CnPPb-Q+!$I7stI;Io,-P.gF7tQf\GsQk4H?iT&0R
nrEd"fC(j]KS*=$Qb"/UNF>E(n+,K[!%])s\nYL:865/]QMeh5nlsArAbFmG#=7?:6]#qXSRN)5D,Q)Dk;M>m[GNm8W>jfDMpGS'ohpBC7sq<Oq
<8P[/)7,TNi<=)#2Ppk'1#u$OhWC?%op@#+AHJ"n+#i]9Qa%DZ_agoi,^fj^M9,Z6Qe7_`i"k:pmZ%)iU^I^`p.t]piC&'4G'`M]MombrWg*)5B
[~> endstream endobj 28 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents
27 0 R /Annots 29 0 R >> endobj 29 0 obj [ 30 0 R ] endobj 30 0 obj << /Type /Annot /Subtype /Link /Rect [
45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 31 0 obj << /Length 1907 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gat=,>Ar7S'RnB3&Gi[8CK^0O9%pM)oen("Met2WLUn#%69ApndA%tb_6EsR,>0eQY'/NlJ8"0eIcp]mY8.pm(Dm*V\0U/)ce0;1I_"rR&kM9^b
U&L#Np"!lF^?asHkA>-3NJ'&/m]]HT6VPD.Ri;\8?><-A9a2tTgs@c+22;m]?.R=fBi&BR@_J:Ya=fF-\PhBlO+LSW8k`:FaTg7*WsNGps*@7I(
]CGb5(*LDEr_5PgpDeYFBrf8pD3&h_4EJ'tDO"i7#m8Ck!CnA64l=\c$ZAV!+<0AZjDN[j3ViCh%sVb:C2\F]Ln%L6NG'ILX/5J<2QV\BDGpn'k
CQ/$l`VFLJi`e5'6rQm@7g?$W2<J;>mLg"dL<^7.6W"Kd\Hg<SZS/gm5u?(%6TZ=<@6;^XiZ5SDZZ]#*dQ?jnkAm-5`\:+^O@/5!4>FmWXNe3;8
+'$Lm6[VPOng?qj-NbJ6!&ohMH4A5fcT?kT_B%pqL;e7U*a?C?ZZDUOFO>Eg"^+4A%h$`K[8Qf?:i.kp2q8.WE:f$4AjnGh4Q%\rV9"#H!j4S8]
R4>$'TZi/#=YH+R\]gWsYC>i9IBD$-!oe2\aMLCd-+.'-51FoMk22aokXf*WcOU=mG-*E#,9W6QZ;JU,1s5E"KcI.F;*kfa0(B&#\$AUI;(K57p
5r>_8l]-o@"3E5+2@8lB(q&V,T0SVcmc(/P*41/>clGeh_L4"4\f7L/MgdQ^BnYKDfodR6S"Qo.0Q?-p33-c2>7@aHBY-(%J:kd_PqqH2Ws;7IB
ts^3S]-U3UkY@S(g_>2EL)rB[S3$RZ&C11upY'-r9-S6X$%6[$ohoJ;u,S!7HgZcQTGc#kjCc]>XF5-fg;-6rVg9+=oVeKD;7YnMGX>,D$A70I%
_dN70*X7MVac)&H'oZf"$05+bP]5sl9jJZWi$K](X?3CBon8;UjdL?l7<E0%T;McB!qLlJ)'gDSU.>BV<=WKBB3UMlgraQL//=`/Dd+40f'<+%D
UrT2T$%`7\_'^`?OQ.`4=$2uYNRlJ'YXUDFTX%X-N$5+6?Z\:/JqF:bW!fV-&9S*"5U$ZpOlYh-GV/E&1iIKgnMg^hUBN_5KhJ;dD_t$t=TjWmH
IKDO+^.2F9"!.1_a+dQ()8j990C!kWDh"*njTCk3!-$*F4([!sCoa*s6g@Mf;OsYFk\Qn$k*O1J.?_B5MFCi:a_c&$p#c`4dh"#c(Y9./(u3bD&
;0j.gN8%HM?g!SCj=IHWctfchYd'GS6Qt*7?q^4JBoU]pIVGm<2#,n+P=?dN\.&8m7n8[o:*a&>ar@UJLYKH2AOS/"*'K>GK%kdg(Y#]0IRFg;A
$@Lb]E/!$2%i#`jJrl7WV!=N<t>&2K5#l#kMRY2`bP?V*((E26*LMaUfJbSkQp2iXOIA^:Co#e:V%U.(:^<QC"u<QkROX-UAlqOC:leB>Y$lE7/
abV";j`5k?fn)Z#+Y0np/O(d<Y6_V(i`]&*RLc[pcPP_-=$TEYujU[g/lcGBiW&RRH,ET61\'fnp[/!;j&>c$^BJYASI+e/7Ud)BDl:LAZ,G.>6
LBW(oY-$?4$BKnP<k$bJZ*-/N`-0`VeeD#/se;Y#R!C@$d/;eETI^i25HSgBI()\u9KoI`8ZIiWb4$*MLNR6b/1hsQmFdK@5=Y\I%V^KM!gPQ"g
gA<$BO@;*HI^KPt+7F:t1MU(CSm0D/EjsMp6g_+qO"M_,CqV/E]_Z6jPAl[m/MYt[<!0K%>FR;A&t32=Mh&,h(Hna.[3]5IbHCJ&ZFMV7e8OFI/
@0X%<gT2@C/*NH*Cqh-+aJ+[k7#W/*]TiVU\l0Me7]9[pn_DoW)hrGNFOV*7<O1.<=1pb<r05\4doo&O)2CVocCk,&B:YqB?4=;?mE+6$3!4.EX
B+Gb4[o+WPSTG@!6h~> endstream endobj 32 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources
3 0 R /Contents 31 0 R /Annots 33 0 R >> endobj 33 0 obj [ 34 0 R ] endobj 34 0 obj << /Type /Annot /Subtype
/Link /Rect [ 341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 35 0 obj << /Length 2276 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gat%%99\*g%)2U?ka(%"_MH]g3^%TVBK&Y_C$JG(FUtiIgW[g'WlKF0Rf<%JDbq52h<\[lU'2,'n,W[NS+Z(>Hcr(@R)XH]16)6i)CGAZ__[/<\
qW^(Z"ROHO2bO.Dpi,BA!u\eNE=?q60P<SF.&<4[IL`2rW(+)TPU@Doc<&dMJeVUjB4+XH!UB#\/4u$pfP\65YhW9^>h6M8j%p6.Rc1sS9Rm<V"
r9u5K8I`'PWhfU*/LMm;Dk"Qr`G4.d<Io3p<g\.528-`Ne63?66/WPZ]P:7uN]P"%&S%ATFEaSV4C+I`*9r<N'@a77X53%b^6E`^@cg6PuD96$9
b]'7!FiqR;N[4JWPj--Oba);u-EEO:oD`:Islc"`#Y4Kcbo@QRnk0^FYaN6t6?5g_jUi/GO;Jri2/qTA:&")6R:D.`9S//C!lGqQA"C(NY.K+&:
3!sD+kAQbIg3]n*-5Cd1W2eJbN-[V9FTWmVseeIZR_qSP<#FB,"9m:\kI1Qc?"uc!7?^5lR_h3bkF1'@lh^0t`<S9(g"i=qo<<r`F7p2eP`SXoF
`:t@U#CK/!nTcL%C@WXeC"?kseg-AkR`(XoEWS..IQE9QQUOVW6HPih@\+a`1kJ%:,#lIGUVXTn\<^mO?Bd%*qiGWsC='=rZ"ZJ9WB4rLj+8#d`
PfMo9Yd;E[aQY3"Fa3!AZ9/PLG;e)(SD.b0FA[X("HqD**cL8W:\K+AH?Au5ZKsG4._N:4\dUj8^m'.&XM(tZri2H[;Ec3>?)m8H$fW9)OSJ7<3
`d(h4;09-NY/DZ*Y"pjp9L_)G_57SEWWp);*OVM.Y(Xld\3MP6;[!K3"oMo[BhtfRbS_3JM%4+Ss594lT>jaG$m)rO0:?Ns\#3J:^oY$NED$2_3
hkN<E`$$,FIT?-<ZQ?05^gDOY8F9k<B[X6C3i!oT3VJMa#bOr"%ULNe,QU[0lgY.d5b-".8UpX:s:L$\k83N!OWa84FTd[9gekqr/VET!M:C*5:
^$U`Q0dp<T?hC$m4]7?U8G0X1D=GESqJ)GF0'>emms%X75!HDkn%ZoN8;9e2c0+k4oJ*>KfPhn9ODea-me@#W=I>u\Lnm#J6VGd[U[OcdQ_K0og
AR22PBP>!rc#8lF?=1CGe(3S+Ru\-kb2snN0/'*NF:F\k;FUrrMlZn>A'==fIp!>qaXI2,e"Sq&o`Gi:p6f+7e2*p/0t)J.!F9:8:\0HZ&^/b!X
'rhBj"MN;N-P""NX]M9^rk+>b,JG<h*WTZNZQ1&p=EaG#m#SmgBfq%<._LpWG;dV7%@4kD@ifN$:+Edla1CC2qQd9=YB7@._$EtDA7gM'<hpG*0
3nQ^<INkp^So9Wj^WQ"`/M_R7I0=)nuY"2&E5e.%`WfOK$W@AN*5aSAETk8pq?EGa-IT?>$,CAZ1`AY6/-Gj3DnI8LQ@$IB>^iG4iJ7PV?^M]4f
;@_QWQp5pm)C5bDGti(h/N1k(&.bdWDqFhqdO-XdEH?-P:pVB.Q:-C[fsSra@a2imbN??0<14*JAeh<$o-e2&$R;U$iM)9XQEHI.MZ$OnbA(^8J
HDO=P!27>L[QJ,Osc%c*AQ9;og*mt_5W(HXWX@j#lAJ<dZ=<'b-cJLU&Oema_;`sC"V.dH6]eWIB-aok7pDG3CV/$GpSYc_2>E%su8"&.hk\"3A
54NFi<stB%h5$dA]s?k5p`n*ki9PJ/93KS`B&*^Z6aSh[Wj5#(.e==)Xor;s)hoSeON6WG/gSteWskECCo$<Gc`u%0$C#m6S9"8PNe\p@27ArgA
hMT0".B3rJT"d@jBT]G%[T#7,G"]=(6_WE[kqDD0`b+ZTXs&e)tu"=hJsa^I7<KJ@l0oQlM3&]`.0?5E<)`tY^gS:%c!`@7q0N>\9p<'7Cq_L5^
c)Y;d!GY]Xhiefh(k8$8J*&N"dp5?G9&'#c"(-!3&Z2P;8KIYZaU@kS*PYK,%l`-jFS5oD8Sk/gJS@'e3TsR^[MWESrU*jhio(b.LWYiE-gCEOS
S!=[(IP-n7O=;UL8O:McnSJSRVQ9Lfu,TUPikF<612-l,0Q/ekoMZ3iH]JZHamLaI46Dq6fXjSe/>%h3RNq[OV@d'IhBlLn>(:9Pm5bW*j8rb%\
W'be&nkYN,h<(U)!")YtUWnkr0#jo7>0,6N5kD%PLFg@HNLSQ+q$:uD95$%(57_UgYQ8jDMmBr71]bJ_Rdd/]TqZF.bp?!%f50qZIX1t;]e&6m<
+*!iePT`P;d9%BN_8u.Z2oi!IOcEo-kB6jS8UL&FTYWVKqB%Xr^R5~> endstream endobj 36 0 obj << /Type /Page /Parent 1 0 R
/MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 35 0 R /Annots 37 0 R >> endobj 37 0 obj [ 38 0 R ] endobj
38 0 obj << /Type /Annot /Subtype /Link /Rect [ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ]
/A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 39 0 obj << /Length 2112
/Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gat%$D/\/e&H;*)+nWt++^mh)*SUoXJ_R"lZ7U4(&+_Kr1*(Fu,u60c]V5@R-]+"HZm<+4MFt8DrOLtE>qT`-hG]%^@N(0LbVUAQe1fi72*@)tY
%r9H&rQt6@V>UYp23gum'UiL4<FjSMCn:(G2\A3Q+R#<$MRsSMF2lVDFS<70Z(";n"2CBrO+oA./u+>+$oRm;nZ2cngn7=9[u5b]C^s+j#,/@Gu
A1.jk93Ia+PKgOg_lQ8,S[nNYgGlh5cYS@9+e6(1iefjC(A8$4Iq^@pEOjT?r:sJ9[$P1jOuW&Jk=LR.S_;13M6O@9KD<YRjYK`s6EKjX=[$-;/
Or#.9K^mG?N=0Q4l-KMBsj`.oHaFB+ur<FU^p&b_7lIn%4FGC'p3L%?]+qdRM-obr<`Uf24X;LdM%a7$obM-O-EFmK>N<o1QhI2g0S@sG?i'9Vb
5$lO1G$Rg"oYGuOdP"37c3R"t]0"65#30(*RMaVRH8gFCn'HKAq@QTg"\l3FCO(0"q4O5\/CsB<XWFW5=iqjYaV`K3,9g+lf$+n=d9ZiR3b]l=;
(eR&2GaP8`mWerGJeR*aNfgV0]=IrH<K&Ys4c;9@ED6W0<lGe<R;.B>DTXrii/(u_H#brE:?D`Er,%Fj\`rhU^(GXa+?gqHo)^G@`3_<E%eEq_S
1eLSbY/XOn-<j(p?BJrPA:f_EXW3P2iS3g%>\rU7`LG<m'k[0U1`C=#8dl4;>:A1RmDph,>_@LnkE;;CO*:P1/-_!1#GBpd1!!Tj[u3Ah]m]i%*
(:5CV10ZlXT]dq9uHKSGf"":24>;TEA%(]8YC&,T"(@RMCW>HjX4OK+[\Q(^JeBSnX7,+<hgR[N+e\"Dq:tGat3(B`-HTEYXM2-P':(ObFBV.)F
HJWW89=s(RXJ!9te"1'>BeIom?=q#u6)5f&DAS0D`(6GCe75$[!is13Q$47<]0l5sA]"N)2??Km2glBoMqUsJe'GR=gh_c;-`KrZ&]2*m`[%jF#
cJn/W67:NkR4I$<9a2Xor,dM=.)Pu=8O3:1G9HnRi*Z^(Z$I;UoWCTifTuFt0o=?-,KTe/`BI2?>!I$`A>oMVUL'],%L:M()-rNbg<V0;$<;iV1
HDc>SOMI,)`6fHeZp[4!p.=Ym"..N(LV%L1%RVA.d)#F3H.8IW1A"eDYWUB'KB'(+[,hrj-/.ts,&S)X="WrQE,A(WMDpbsbALaRV$2p;qF[#pX
#,f]h%@h_JO'90,BMNdbHH0hqkO:qEQj)0o%PUgRK-/2MLTn-BXB.*a0C"+\^j09A"5fYkK?tP:&%i%iQFb!>(K-?2X>KTm5LUE0Gu<ga(=tX^k
E#Tg"91C09;"L,<m1.Z]tnm.9tB?2><2#gFQ(7R4,@BZLRtE[PbW/,79BSfs7<FoV?O8&GLQoIEZ%B^9>+XK[]6o]$o,naKhK[0kHSgm.K'qR$_
aA<Wukkm*&39[%&2$;%ssS>E/jEe;#CBCQctPN;/E2cVBf>D!t9$K'/m7Wf7uPZdj\3Ur@*3SUK19k?N5rKY'p5:idm:g5f@o&n\D26uVoK:g\q
<d&eE&c[667mn[O?K<E_#;g5*fO*$_@>'@msa]t$SQ9/p4;NZO`I78q-*9`#\2JeuOl'Q#q9!uf"Z&N0'-bo$lPQ<#f05.Z5i=\tAfJ6O+_Q!2?
UX6'ZNM6^Ub+TLVXR5g5C#+W?jV>/:1#KgO3O(.!lKkLX$Omrs@oAJU4HoXol8**oRE@d%E.uCPqf$kf`F(M/fU,8Ye?N9JS?&WA[kiQZ9^jDl5
)q1CEZJrD;kDmeA7End2F"ULm]blJWG*`Rb>Q8o-(L[3'saW/P,cPb"a4(Q0;ZP;$!%j<mLngk@#),e%PJ3_s2biJ2FT\.m,BGRbnr-B6OhcK]p
`-/$JAA%Psl'e]6&SL(#GM[g8&LGc.:R!EZ7R@f+@a;h=L"-1jdH5b]1$5gPuGSTLL5.3s$gUUJ`12b!dtWD?"]b-E=&;Zk.*TGK?..)8T54(q_
HH`EHW@8b!9M_=ef;^G]$(V"'QeZok7;ACRh<Z3R.#-G(bq.T>gSmA[;;r?2gb>@c4UjXpHpKDAd,">\Hud=UO%``UJZ=bYJ9G:TNc@eN$TT(AE
~> endstream endobj 40 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents
39 0 R /Annots 41 0 R >> endobj 41 0 obj [ 42 0 R ] endobj 42 0 obj << /Type /Annot /Subtype /Link /Rect [
341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 43 0 obj << /Length 2296 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gat%%>Ar7S'Roe[&GjgsW#8HV@9J.-8CnP-O<lN:@GZWQ1U^Ii;CU:=2Y=cQ:nl0$=`g/:5t%.(Ic:+dbK8uG4gh4UChrSqZE<5E=uQ:V/$qk^"
BJ&BEG95`f%/_k?g^+;X#Wu!qMd@U_?d*cek'#Aq=:Y6o=.EU/%&'VXE^hrqPi,G79ukT1uB)+R9E[ND]'WuklSV9`$9F9]N?D-/%#%$S%Z*+Yp
LRi7Kmd&U<]\T#PAo]MXDf]g+O4USJM$*K++Ga`fND+dk"EJ[O[8.gC>PVBZ%l$S#Fm1[<aH;hq/oQR\8h\_UE%]Z-$H^jJf*.Ws%ZG:QT]TUtV
\T$QKR,@U.O[^6\uo@_n-.s!fq1YnrS)6?1:Q_@cNBnMm$LS*D-a=CPUC?#?lSr#`@S$^R*:I"Se0DmDDU1T!a6D`DBTh:J[DdB@QTURb4+R+m]
==h[RNiQ&s6oCq[e0`1!X^'a='%LJS7l+\A"\KmH!WKAopQ/<pU7@pU.Wd$M2*9LC%+oe@g?A\GB$-.*Xm!?5Y+7JZje_[]$'(uWO6.a/q\unai
g7qEZX4+E>Rq#@6JAf/s[V#345\2bUO!+1E8ul,''=IQYqOt+q(#pUX8TrHK+>k7hjb>.W;lSA[_BEYOj1's,8@plp8^/_:@Ei]\D%am\Y#q11=
34\mJ^IDflOr+*.GOQNJi)/ek]t%+*T^[s@'?UUXeF8L[?74U7pQa]\e&iT*D<]mUg?3N!u,jaHTL.5<m9h3pJS+saolnrF&DT=Hq86)C"qC8j2
+po4%12(B/XZ$=CK^cQKa\Ye\BnqSC!aQhc66baS1/%eUc0agg801/Re\O]>F5OoOA%"l,!r>1#:;#UJ<<m,1Q9;hmS)`m._Xl6HA*0RZ7:d>tu
)dd.)\'+;oktTQh<L#i^TUJOBbF\(U*B5pp62`g:.@7+@tL;GH4tgl"o5]umU-#<HE8RkgC]:R31+6,V^K)mh(=lg*/O7S.V^DZ7*_[4Vhn,C2>
tG,.i5nr&V4W#A,q3OC7Q=a4>b@sb,X=OhP.jqG9.El?%RUkP3pKEUiJ"0lfUdtQ$<&EV9)DC@HM/=e<fm`^ngPj@-UR!`#M5^P\FTa/4/lcG/s
iX=E\9Y[b&?cgbKS,nN2^?0:OG01(PY$fuC7J;9Y$c`&jF_oli`5/EX`V>bNPGaR,_\BOL7]uOYl!@EUV26Y.0%Vs?Ip8]V[6e.j^8Y2HKeo80X
k0b#F&pHDfAM,C:dTk\gEg/Kr@c9rRM/rtO1,$^4i60R&IJ.,L3B<HfH\,s`J9!aAD^!++@Q^)\(q<E4aY_hF=]Gb3[-EO8P!F:%KcT,Te64F0K
:BmB!KGC)H2ZR@%HX&`>A:G=oD1r%1$)<#)%i4@^)5kp#Q;VW.^Z@l8OOm[McIOSF"7te?K\q\f]>VLMe-UN2VJo)X3]sa2&+M*ghi6p)k5]ed`
YH2K>8G;L%*E)(=ql^>ehXTV=A-4Y!XVTLXk)alMB]hXK<.=t<(cG(KEV\eApGCEsEM\$OG(RKKs[psToX#:@r&`q?7'Dn+:AU#QT'lLrjoM0t.
F#T<(0:(52e%!4s/@$qZr,R?Q^9LX)+%.bg7onMBBSt6Zf3-'_j0oqLBdtcFp=eNl`A2CMq,GZMQf)qpA,CQ32cH$=/'8JA*FL;Bd#`V1::.JP]
@g_h,V\?8Ff$rMIi4G;fW)l$g7cX%@4mV&+kQp'@#ASZi@+&'r_qg%L'spa@rO-F;@1/+V)6q/9alF4CJZu.*nd7b$[RP8DB2?RSCCnr(L!d4Ok
QQua;-o4EcbW2?[2fj/9Xda%%F2W+0n]IH+r0mA@K1&maEp3)%u,.u#<8?V\B`4YHE1)c-<go![;IZ[qCjpaDEF>]Es9_K?%$$k%4jB'$$=Jqaq
N\TNFM#*JQ??6ItO<O6uYY)OS@`EgP%hJj6*,,7W]!CUG`*.3$Q:IdDt8\JDEk3H6b/]FYn&omE9S6!h;7TLp,*%3/QK$T3"us-/&tE?H?sMn*N
kAl@NmoAEl(6`RWnY4\3+CfA;uV!=ne7a`Pk.!C#s+%OD4)gKc/G'TU?(!59$)qm\ZF%ee*1JD0#VNlq=FelHeX4LmFAT:i4K"Ts/*HtNN=%cFl
;7V?Kl0@o:o[UiT=1B+]>htsN]5Z*;k3i,S+Fo7n.ji_QuT].6A*PTE4\mlLeKmHU)3k<uu?dQC[(8_]$$FffYl>%T`=AS&lk_nSdX.k"$l#MJ7
\[hWs5NdQjHhWke%0qPirf13*_b>!K6K87&/#g8*nmNkdTuO<_\*__$UlL4+8fF`?oKPBmS;@~> endstream endobj 44 0 obj << /Type
/Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 43 0 R /Annots 45 0 R >> endobj 45 0
obj [ 46 0 R ] endobj 46 0 obj << /Type /Annot /Subtype /Link /Rect [ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0
] /Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 47 0 obj
<< /Length 2342 /Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gat=-8Q4Y/'Ya/h>[.K13f<%T;dE?gYB7Sh6djM?@1J0i?oO,-[UkbS5L5@V-SHVO'Em*8g\4a*Mri?ajjC7VSbOOZC%q"%?]JB^G`JQ0L/+[]C
UUAZ?(4^C,*)))):qnZIihr=#-MA:K2FB25<uIkV/Z?i_R;"))h,2]\kXJ]SAq_N]SWRW1T&n(Z`j2oA@X_KJV%VtHrH#.#'"KIF*3PrY,*_Zg-
6tR;jO]Um#f6j5>/pG?pVlkcgfI_m9a`+X^bj;6@k-Vqo#V)bbHGHZ\iFB4"+u+28Pm_[?chCM%?4\bCja.fa!X1T#fUU-#FC!?;*(o9qo8VLq/
[5bBY#4-ooLZa!-7U]tn76-4kk9>AQ=<ZCR].fBdeVU%HNS[Ks/eQ2*^hRkCs/A&N8blhY$*)]jQDH%X'Md_KZAM?R516o)q3b@Ha,dJ*83UE1K
_.D'$kn_O7#c[#4$F#gMWp.]#C`lrbtCs16`9(&VLZondZj7S3X1qtUX]4EL;*9Dp=CD4m*/2"4F!0WLXak?.DB+Bs=O!ZDs*+Je.CSr_&h'spk
b9NV/=?V/nWu:8B2U=US$LTB/93BdT-u!k,mWj8]bm`3VN@-BRkS=1l\jani[trChX!j=-@J><#GMPT?LoeIf>Ln$A[ch::3+!n"@Y/<R'^;2?6
\Q+b8`#6+7R;5iPK>RjZGk'1i9!DT;bs*#6Y$__e1lac5\%C'.#pC^6C+]_A.HL11]FH5\O>"2Kd'%!^Y`@kQTRQa4[h,rJ4t(fPWtc#O\!PQ8f
"4''.Z:6SkLgi^_'Z`E%M]c(BMs=.2Il_Q,<G(?Zh9,-Cto[!rX.X;=K[.MGh]ZUZA*jW2&L%HL&.nj;];g-Zo@!>i#loGsFVF[[,=#"l>edYdO
CsD:=js43l<\7GOH.7o*PmJj4!T=`eE=nk^#T$D8-^.1jTJ\hC@gN*Jk5A2ACKFGQoAP<_[!KLYkdMjIll0R7l"._t.X_Hbh`$3*I`=F_'IjTg)
?Dg^PaN&4<5[S(4K#WS$0R,\peN2R"E16o;&HUuj3@ei0R;aESQlX>?Bl4X@h.8XSr,%trj7*23Ki-c%]96F`/[9?q(7RdEn41RH/=0,+5QZYZh
gi=8>*;'-_KV@/=V$_uFg4TLEWFr1k7nLe.#Qqi``:a2Corb_&A<6)F1`\?91*p;df)Z5(c@FT>%]a%Q5S(d2"oMUpe"kuh@9+U&(:Fuc\9u8&(
/."@1hB?.p'I`21;0h.YJlLB?P>h9!4I3,-s"q^Kud;,+>K.!C/a=@-T:kN%(Y:_i9],O_W<59BP43sF`RS;.Z;kn>T?ctHN9j\2Xu/j@<,1l;k
)ui+M`(m*BSbgF,r(m`_>B$Us96*%W`[^1rda(S!+EaF*$B_n%%Gg]K05qjUc0J1I4cB0i6'MYr9d^%mG2]%#3^Pe$[RD6T5q##1M0tg=>G!QuS
umdT3G0c6fA*p6Fa]4]Lj^"i+e(!!Yc43+Vlf#B)n(ZX^='?7K\<@[5=<"uW8^h12tBmhQ'o:Be'eHMBW<mWL4dBQi.;lsB!k/A8V);.sim/rD2
nc,H"hVIpNs\ih473+k/UWBNG!%pj>TAl-Qf36IR%pEH-5'CPXj0?*O=l.ML+_j=dhar,pCPghB<iju:jSQlu9N+<Y8GjK0nXL9B#n[hD`Z5#Q/
?u>]q%uQpE(%i!kJ-2dK)7Dm\X[.Io#`:0cZ+b/EUaB=>U4dNn60h%,7AX`kqMs.#JQe.KIcF>2CFu(Y-!CDS2L*,-j>C6aik8"!=d4iMiX?D@:
=Q&+Do^Z\Km5Of&QAb>M1\fZ",I+hhn!\GiY&7b$K<N!X,l'`;RBCYqgn?\:IMuIenH<0H#OI7lM2k$#&#Y8J.0s's2B8M_$CO:pRspf*4:R5I[
B3#jHVJF.g>DWI#FeXrCBe.,C.%qNbdkR?&>Kn(=*aUT3:`:Q.V@rdIKbDg1Bt5lkR"=e2CQHE:RHbX6MZ!\=%#cN/8<=U#rh0^6;%E+S$D1@3U
%I-an&@;r0l^5kFF)Gkq%+e+q&-5JJ0gdp.sKV40jOYFLn_SP6_t+A.(*\1Ge'X=:3mK0ae+Vf4W0rdM8fgo:8:j70M%jZ#GsI^_h9:LV#ePI;,
]]3P8VFhZW]YABhCT,qF:9\EADK0J0n[H#4=6sb:F/G;W:-R]f-NoATVRVVoDA&tS7LWCP-46T7!f9AdOe*9e!X"=XrG-4^R-nB;!@FVFDD@7/s
j^>FY7K"Q2>1Vc%hnK<8UNJf?C[j<5@+G9B\RG5g#M$jNOo"qZV=HfRjU.[.Nr"B!?aAlZ6q1Hg>iYQ].f.a,L9>meluB2`;3oFjCPg4/p0%MEk
5PF*ql"'~> endstream endobj 48 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R
/Contents 47 0 R /Annots 49 0 R >> endobj 49 0 obj [ 50 0 R 51 0 R ] endobj 50 0 obj << /Type /Annot /Subtype
/Link /Rect [ 340.606 312.956 383.617 303.956 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A 17 0 R /H /I >> endobj 51 0
obj << /Type /Annot /Subtype /Link /Rect [ 341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A <<
/URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 52 0 obj << /Length 2475 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gat=.997gc&AJ$Cpm)'80I$2X/P5P;1r)"b1l#rZZ;'(GAPo.3479<@aEe:E;3j-A(:I8]RJGu.gin\0LW/WCbT`_is5r)0e#+(+>S;;<gh2jJg
R[)b7BH<#$9of.05#d[hCW>X512H&n7](p=[5aF(At(Ohn%0\Tgu'Abnp9Qh_.2^X50iPCZYlkrl][8j/dLMdqtWGmW"cZ7?jt%P?jDs?_ZuKRW
"of;KNFM+t`RCo\d+:&fl'0#P<&$,$>8(?T^e5Ng9uAHr"__ZMu^fh"ObV)"ALZM]K"YHLik-JS?N!TEpoWOWB=WQVXeg.b^Yl[RD#B<3eY?G%-
GM8^Wl_'[7G6."DR!^;3e3mL0'6=,2C2FV>qQ+@+M_j=B?Z6B%l2J2:?"VYfC60DM,p;EU`N%Er/2H.)9=Es'iRq2u6a9?uX]9;HKPN29)>4>#t
8-[Ch"aRE&1W&ci/jWRWODfq/)j-M:kH;;u\=2LXfbFj3mY2Wc7*#Q^Uh'2Gu?K.bQ=%3D2BJJeNbR',-\f>>],<A</8E1@QHeER5CtDNuh`cER
\3rcUDdj\m`=DcGb4usD,a74)Y:lmc,35uR1St<uVKfa%oY/EfjtI3k&sSbkiY\WT-Go#I+,OTs",j[L/l0.+&jB;FLKVReFfELs9"tS'77mum;
6R=P=7KXf,gd!1KQ"I^7G`J(epl3?5qdEm-gEjJ-[<Add2M0USb`X:P\\XR/ebGa16PG:mL76?G,KeR,iYUfL6D@P%+dN.`],So&cVGUP"*!W4W
b&!S>sL.-)Xb-F+^W5&9`f_M%bZGG%]1PSA!oe,Z/!5>IR>@&fH_]kEQu$)BDi!Vl;Dl?/NOsL[3<!_c;%`Y*L;+::hA+g-(MFgjn&VOQ2W.:;S
+sY>4n-,d_FG+h$d:E_d0[T+^;P3]DK7+?U\pWuHVjS5No^0,>'(EW5RFo>6S3>he`"rt4FJ&lOtQ#S<n=1U@Z2$6;CQR!O.6Z\$MgY/gff`spO
.oWG.UI-1E]3e[?iHJJJZ,P2BN+12i^@oH*k,g(0AWm'l^[8>#;/q)"Q*E=\TPkj$<?#5j\(/m5bA6b?nOAR)(qD`Yk;F(K3\1CJ.KgS\X2=@Ma
QH?Zl;,m(H.o)9h#%=8B.e:GqAu"2Lp8>]]\LJQ?o1Yr?+%+5+fdP4c'?_KE)Co;g3XW`C"`=*UV/'$.77guh<>kqb#uRZTbJb@q/Rs4Q^j.;No
e^arK<ANhO@eYnY!apaHkM0b8grbf2a`>+X<CV9H8S]QEGUUPG2T])H?G^I@QY/PQ!&6p*0d$AedXcUNW:peH'MfW*&N+Wa<6N/GA8P4c?^Lt%H
$!/`GEW0Q?L@:fp=u\lp0a6*!;BA1_$=H[1U*\9LnrV\_D+o)r#gq!g;m(U6+mX6L<D+*l@7NS\IL@[FCS.XAek3/OS8LniATmV4n(sQ!]ajrp%
B*c$GnY'\G:HFL4Y)gKt?Hl!#g'm5E(ACq?1FRb/l:o7U>NOQm;'VV3/,'JS[9'UO2@g#ZKD\GNFs`+@NE1qlR;6*TM#-XA1@^cgh`WF$DP]GUg
h>+/meMUGtP#DY]A@6Y$P!UZ[jTfY]%2IaRschhomGlf7N;>]%<It=TYTu(mX\7%Pf^a6-ho)c\a`7n]YN@s7=BTGraPeou7"WE4liDiAmWE1%(
-^38Zhd_4m\2uCYgIs]Od&4@9_Hakpprtg/6;6'Un1:'=?70QRAP'Olbk>ra1WjOP0UUT__dF+@@IsTC`85Jq[/6>(,Q?Tr&nSs3)`NEb50FM]n
+=hLSmOFn.&.@g0W0as^a,olG"%OUcg]slOa0n+l63(/]AjJkR2;N\2Aso*>q:"[gQ!L>cH*)K_J(";Q397G('>eUQNuC^d7<<f4_!)'!6YH'hs
RMg%6E1MWQ9bZ.&RZ:0WU&O_CT,$p!ju6r^:B['rGXD#+q`#pag*Pa6P:$\Dj^P9Lb8_>c)'4Kqq,%`.C+9o@EZm$:1kR0Op>i;:SA[MUd_#O0s
bUCc2O!-aUJ2.!Q,mD]P*Z545\S'7>Q5BFo>JDPC,SjS=ZB7i@_3W,S2;6\PYMhiOl&r,C?[IT3*a'uBWA9M?IORU,Kl)a5+@#\/%a)&jU[*"r$
t9!RW]U!I]gbZ!"gaguZ->J6e'$'4tK@h,WO`3P3gHkiOu+np+deb0SJ@<>@o].u50Q=IPaLg0t<f%^!$ms$)+"J/$Gp(2*275pRD+sYqaO'W+A
Pkp@`$FqU0!,1:4e=),_Tm"h'g+A3s#rdmQ5_l4<oh92<qa\"@cN(=qT3HVBW$T+Q%jdliARX&)0)&m&p2AO[aHLXkqH_0lFZmoB&>Qs3WDYi5f
@-_SqJRkiokU"7pb$mVWbrJ#TEsRE;S+2-0A^I;(%\ukc?2]`^r,[m8O-V9OhV^c=iT2:P2sfuYP@iI'2f2PAm#.TXLEHQFu`7PQ'Duc8Ln?G2^
kh/c=^)gmm6Jn8r&t%L0Y;h*tN-YWr~> endstream endobj 53 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792
] /Resources 3 0 R /Contents 52 0 R /Annots 54 0 R >> endobj 54 0 obj [ 55 0 R ] endobj 55 0 obj << /Type
/Annot /Subtype /Link /Rect [ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 56 0 obj << /Length 2156 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gau`TD/\/e&H;*)+nSD@+D!s'HGcrtD32+R]!b7:'Z3$AZq]</A5T16-eYa(^6:uiUeEiCL1(AiL_B0JHfNr"]GV23Dhs/NjEnet_"Zsnm.p./^
">hH'R;FQLu?c%0"mn'5%IZa(%ZM8<=gN#EX%-O@^t@P@Nmh5q>E]nAUPk^RQoAuZdF'-@EIhhR!*7"l^m"khfH?RH%#,ZiXOcUY(qXJ"!=?BI_
`nhe(_^i83]KS$,+^[62VHm"%5K@8a_QC57ZNY3sBU8Jc_tiL-Lce=XBea,8#OF6%V%BED!\gG*u1CS0ZUJZ'fc\PBpr4Y[+PDP_O`*,p<WL<0a
M(SkU?'d72%,,\L--/[Yk&?U9Ek1"H!1X6XeEf:ON=>N@V0@=oOiL]gS5N=^-sMIJukXbB[&HrBQMVq`[:c$!;Coaied:u"<h#n#^gL!Vrlj53n
MdZhoJ`J)k"4'n2HW49RTIFFFb*LN]Pp1Xn>0;Nj>6@&ImqJjBq3YR3/PW6GaD_s`hOB.Jg,*i-"pYB>q+1/Oib;.s>N8M/S+;i6m-.@B2'sGBp
XQFQ1M[5bqmmcIFZj$[/M+W4t(uC(3>J2^a7b8a>hL<-:p&=7*kA)FPVC:pIL[D;2>%ZepbsuD"-DHl=o+tR2J0QQD=.=,f58QI=&,6CcKFiG41
+Q!WS#iRn-i>kma5_qhKW$D83deoIWX#X9"59-Hq0F6.&u.-@#$`<S^e[4J.1tUu.($EP9t9oQ$$]2=-ca`$=Of;Xo8&n<%"f]aVPIg?;@E<MJ=
E"%B&8'8&4V%^-t8CZ`j"c<Se\mmXBFAdMGCOB&en`=I`^o@/0)@'Y<`VPOFW`uAb7XrSfi^_:0]#5NPH)q-qpV>l1,&I3)5Olcm1nCWfT.J7S0
D&&hpm1Qn3uF>SV+:C<;GK%>/p?;cC2%JOX8ef-o-4gEJ\0Jn.m;MJ:R5/B]U-Rc64/h0LEeZ<Pi`DemLi+'KDZR%eh@4"I2>:nC`OL!DA]MIAi
@gA%,ucUABhL]*eZD$2LQkRq!X&Mq>8H+)jh4"QTO4P^4LdPXZ%E*T-.Oi1C%^]ema[\V;>RX<TW?Vk;@7l>noW2MH_`ocZ09\GXkL+/<?68>"o
AhOPt"`ftYT-D_t3K5CbTHZ?BrsMc&%7*S7B:(FX1-r`R(K4Xu9Nu4REt:'8;f(aJ8nM6K5DDoo)(krA&Ver`E*LRKQE+Gc`-hsQ4c3b8T\?s_0
#=W(>=QqZa*8bH<YD#E*%qF%2[u:&;3aKmW3J&CNu)FV+Jajb6@K/61H/KgU-@-!F,K`I$FYh@&hCY2X`D,,2dHC)m*1Q6aMq\;W)Eq_p`QF\p9
>9l">DI5.GJcO[HO4X,G+t&EL>Hueb+N.X/rU&X<8fpoTqhT\HCX&qJu>HhJ8*VmtSa+H\p5jqlMbiR(e\sl-O;Lg(7JE#JT=uHh/L`0:Oe%SP8
r6_U'dPColh"JJGTKl)FA]M5B?=<b-?mo'?ma:9Ah,jte1*Gu_APD*MY;AS;+Hr^9VMZrpF3lsMW:_Zs%G<rL/B"aalc!<OFt"n8s%<kIlTJ67b
OD@\#r66"OW]["ZIc_a<-B[tU*d0)IZ]$LQJnqu]-;+*jR[MpB4LKS]Un)";WmKRYI?fk*bYHLV[j?dc+\hfeBIUL`#Al+K"EYQ?+<D8k"<$id:
cN5U""@=/JVJpe9N8:VfB!oOERICZ&e8SIoB]RQY*RR>Kak)q_<Gi&d<qjC7]ab840!2.A:B*aofe@@bG!RsPCXo__Qdmn15G:4lMe4;Vp#!;m7
LBDES-5\jb9[MlB4:O^T8QX=BNN3=b0o^[5ljT^$iGU_.@9m&LXtD3fsFoS>IBfE?(*ET7_9B$?!'^"0=3c^?h;d[dbEiL]3@eG^bk<8X\-cJdc
'Is0UJ:Hf*qN!Zu;#uJ:V7iMX[q]UO[rg3ZKGfDtNNG6V#r-Yb-))ZIG<.c=]-;s5`%gS<r)DLUME=(p6EAbNKXr74q1b^C'd`2%%4!(C:F]N6n
.q2I<,7=C.HEH]f=-T[>`"Ed.@^I*^C1^Aj7Mbike<fqcDb,H'5%cQ3dJ#XP-KrpZ?#2'"Z\7hV^l;lds&F0?gn[(2Ki=s7RhPJ.[kPK`.sc)KG
V5Nq!9.:eLS5d*qiH?cPJoSkUX-B`;;T;(b*s#2J+jDY~> endstream endobj 57 0 obj << /Type /Page /Parent 1 0 R /MediaBox
[ 0 0 595 792 ] /Resources 3 0 R /Contents 56 0 R /Annots 58 0 R >> endobj 58 0 obj [ 59 0 R ] endobj 59 0 obj
<< /Type /Annot /Subtype /Link /Rect [ 341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A <<
/URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 60 0 obj << /Length 1955 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gau`T>Ar7S'Roe[d/($N8/RI5Fht;;-#;3;?(3,]qCqA(O_J$X,,l:D3ZIeMG9g$$.8+\ZXBgG[-I$W/cJ@[4am83Pe&4_,"95IamaIY^B-Z;V/
W\Ni43V0BNGRpF0T)f!/A\IcafgnLNIaS:0^'h#n/j%o]bG?\;,ET'f6++&KXm),IN#*%]SNLRe#1pQARG[\1L3[jTYQj&J(X<S'JO",6%D(5qI
ohVPcsP>3'+KCh29BQP_;KQ*j>&#\C`'3[T@i,GrjR6]Tk80HhI-<onPE<hFRp.XHF"''=X9e&/ofTj%@X$6]jq]8Nq'\DmEJ,Xho1On6>m+bmQ
NnlEJ3k+Kskj3QUplR]!$gU2/G=qVn=&^ft.+=^#eCH$qJ1*YJm!+uZP,bE^.4CY1)EYI>+iAXoTce>j+lgL42=_$HAo(del%Q&Kt8^7QE7@C5#
1=Xlk+]]J+BMtYooIV_6HlQd@VJO2m_jgN0<<,bu]S/o;S.)h]+3Nk7qp>sV\Ii,K.nIY:`Y8P-,VfMWuo.RS)prKf?I4HpRjunksoYlp_NcOMm
,iZIK[FN-nkeG\jNW]k=2ooVp;:l*,YW>T*P`qnf)Msme&=XfsDqqp!CE:3[B5nh_oOh%bShr"_d6]R!JV+5/::uc7:7!Pn[>9/a;!+M6/g5_V]
p]t$8F\,3]^k.q=1Cc>qS&nmR-?r%'fVgkPu:Gqdq/Jt7&7j7eD06F$RtP/'X!?rYQlh[o`_QT%s_:Ql5r1(A@0c@jYBU+qb1=.lZCu^6+1?N*)
rI)aJWQ%;h1VS)<<lel,b`o2e%d\5cjfDEs<[O<sr\;HnOD89]Eh^94Lq4$6oZcEYuu'i/:HKeAi&>W,gQ,jUd.::5706<.kjU[D2i]+%7a(69:
!l?-b'=-d`8Cf+-W>1+W#<_L_t#JondAWZb<u738/_Dd^*Efhc<_P6Z5Y'R6e&kj5V)VOgh3n(!@aD<-"8n8uWn'YthZ5`lTUh4U-JDn%>a*Kc!
uem1sD65V.@6t$VgPHK*#lm=4m#pTpGJPAh\7kRkG2,Ot3Y61ud]KNue$X$P.Fb*[1Id3.L7T=MXkR!h0:E/R''r<`Pf^>+DKh4$DX77(t&8k$"
_qDOI^n*[nBLgth$FFfR@h2\?4]ETS*44pCXt%2qhmXYDme2$.U>L@d!deT.E?Oq+TNOjj@jC!C#?MOjl8]diJZA,m>.qldJ4doX7e.at%aBQaU
f.pHkc9ZIs(*9lTL6W*EF9l.T_J<V^rBn;,:]S)jauGV!=P@Ts(a2'%b(NkR:SENrK:<k5nl@ADS!eP6ZJcI;WjIHf9uJ0@>AaEgoh,JJR!Etrs
X&PIGDjFYcDjk:c3(@lY4aaDtPCZ`o98Bn2&tk,g2/K>Q>OES/1X"X1e2!<ZI\2Du`P#bF/_[/p,*q6;_$QX'6F=`Y/n(-LCuoL6$Vs#7C6nW[I
2Yk>bd3M9UZQ22S;rEHoXW?'LUW5!u,#.ge-YQ;uU9#H@GJYmY8gObY-6L;\eK>SooB-jEf7,0RNYnIP\nYL*,K\-^K,Ql>=8P>TpU(lEKs>4NA
HQ^["$]+=@Q;sHn*T$cCLF^(e^"@!&78e[1,1E(HI`P?_@0Z](+l@,!.K#]fi[bd(\'*H&=2gXt4DQjN1a8eYV83ts,k;h"[_]Umd@M6]F-@=)[
h(86=TF'SGl;%VSCO</op.$Z8+-H!e+qkjtI*8:m8^J:)>]X;DEn];l[HQ]$/eu9':R=bIeA>[slX;&NP3Mh]3k1_0KsLQ1@"=UIc#6PTO!r-lc
fTA\j5OPq*f:GLe1Z:WnOuQ=@Rca>V5hL#&]W(qGIpVpS?1>jp21J3'l>@LlggpDX#a==YD$1iBlu:AJ-T*A!;+5^q*gT6M0QSZ1q>[I7K6]T),
pX37MFPM295]\BZ7Mk<p5ZCBfnmI-/5&tb8JbPfMM#`>\_i!Vn^71TH2AY"XM+aD?~> endstream endobj 61 0 obj << /Type /Page
/Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 60 0 R /Annots 62 0 R >> endobj 62 0 obj [
63 0 R ] endobj 63 0 obj << /Type /Annot /Subtype /Link /Rect [ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ]
/Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 64 0 obj <<
/Length 2052 /Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gatm==c_;q&:XAW&G"6YdVqX;\si>dBp53J>g9i3MDu,OS$nU'P!d@WFc67nN\5B$;a/Q?&ZcJf%-RKLU\=M.FT%@`e0D+PSr[,h0qs[95L^!F&
d<h";G%dcSajkuGZBVSZ?Y^uotgt;Y0(!Vb6L&`PYs`ujVt&bMQ'5!Aaunm?JeFFL=V[$6Aip^`:&@/dCWqC?7$QHOjKHh67(VD78!f)UKHY_0`
T64ht4SmifHR!pNJC;\"m;SrK?Qcee\ZV*O=9g;'ss_>GD5H2rga>rM1^2MkV<$f&DVXkj-;90nXt;Vs`j#W&#@q,[e@H].V/gAKD.?cV`-$)uV
gD51]:ukC^EIMSak)Qs1kg\<10X\<PNZ)=NO:7JtHR"Yr4QgW$C'`_P<II7Ri)ErmBoYDG@e*?lBNi`@p][oqqL+7s-D2Y(!8qlMUh''9?bl>EY
+*&eUWW;!X.(F0aKK&#dO;Q`P;ZFj@(\XGX0[]^l9=@FiekjcYPe4Fgamn?/2h5$bblCXqJP<9fP+alLL16Eo58[Bfm=+s$DLBS_o*Y4N\cW4KC
3^<=phmpI%d+35LDdClQ2\>H4[U8aUaB'm[Ta+#Hj!)Wo)WHB+GYplAR%'SU\\49n5*b5lr%UDYS=+CeNYXC6b"0oCKGf&[F8PCm5\)'7(PS$k3
mS.9S:O6qChg^(9?Mu%AhS^nE67k52t(.2;o7SQ,V0g"kFe",7YGbfYN;jlE?(5rOm.^-L.XXN$$Z=k+F0*orYpggc$>QKN&Kg]\Q1V&lqJPqjP
lR%PoLK6i.n9"dVNsskk\IuW%<FrD]e5e-O45ngj2!aT[ecJHB@j%G]X^9nq[tA[ul,Ln;(dB6[.91:%d<_V?X@EL)Wf8%O\X)AuD)o>cN1X=Q0
PlmNniqZW`an&W&R#?HLW3@3r[+A:^Ck/X0AZ;QA`8W55Rk8$)g>!df?fJ&*;]-DfZ2$Jn[XCOMPqNr^ei8O-#)BAom1P*#DrD#gZ):*n3$dFag
]%IUZ_'TI5J>.nGibP.RIW\'9JhQ(=Xl^<(a+rZK*mmC1Je#%U2.6K\s!Ub`ilTK*@>&9PIFD2g\g^SA@Pq4j$`Om,(..MMRjg6Sc<;@2+Q;t4m
icHS/QftZ('EL-o-%8q^Z;Ndn1uReXOfcDe!-e)o='t;8Ze3_m1998$2d3D)k5]%NRFr/FL_V5om:$?(KMl8\(df3OLf+*fb@Z$SBnfU!!Ct%0V
cJ[!8U!]K\d!+1@)ls[H(MkZa`sF)g!GTG&55kTbG]$=Vgss+9P;VE"GQA$(q"?omDW4=M"-;JOEPGr!\K?.kTh0(`QmF01j7ghg75Zd4ZT7cK]
jVRT$1c)Lj9![b]^@n")ar%RG@(sGBL)0+[HML*<imX?u;S<bQ#J?9*qFHZ^u*@Bm[F+jfA6V&\8/.mePa`$K_BKF>Wr8dr1oom<c:dK6jqBkFJ
^\#&)BG!,t.k<,I3qP,0QV.eP!NeS2$aH-@!1oTN>P6OoX?Q@V^<Y[(crP7M5?dH8@'8DjT.Lg&)-M1;V6J$Q)hX[.+c0XrXDb-OB4d&\DRaAc)
+7gp<4oOA'a7t'>>M*akJmY?_n(_LF$)RRL.'$"kckIJIO2lnB-_sT>HMXUGS-E53)jV"bGo&S^36FfV'H;cGiSi75@O3-q)2AT`OE6X%,*cK6`
++$M)0NVAtO050robFM:T%W.:S5O##9PT%qQfU1$4<W"\2$hICCr5h<7n'Fs+oY=,mUs)Qc%14paT(tm[DB_g`ltatBcF1)1*]ZZ-P4SPZ^Z7aM
Tip'Nlf'Hjb$[;;hL",K?+qA/AXD`Jlh=Qlp#,ZTGgWVVrkH3FOp3kXrUQXlUfmb3&/*"OQhVSLH"T2DsfQ6'*'0I3aeT%H^X#3WVul9>tb5DHa
UY?N\TCS9(#_jR]ikgkl]'$,<Tq;<pml&GNS+1n2ZF^<8kiP:?)ikE6^;c'hS(@^h2GY+Rg/3hhqZd6+NQ>e%!rXk],+hdAL&PTs(F1Jk!0?:\f
=7bd5JGcem[TC7Qk`I`1na(\??&n]-VmR;j4LSY$L"nc&[:s!>h~> endstream endobj 65 0 obj << /Type /Page /Parent 1 0 R
/MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 64 0 R /Annots 66 0 R >> endobj 66 0 obj [ 67 0 R ] endobj
67 0 obj << /Type /Annot /Subtype /Link /Rect [ 341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ]
/A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 68 0 obj << /Length 2093
/Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gat=->Ar7S'RnB3d./k9=NZFYO_R`%9m:<0Xlu2R`A$aH[M`;O/@gr11`5rDG9fiD-+\@RMOG#>T#8He5(89t\NB]amd08-O$X2'][cQ$Y@k^B1
'g!.I"WsC\F1["H\NE$JpFotk%B16h&(B&38ckq)#aQq^(V*3#DCD7$#i$D#Ha,+#]Hi8J8l];Na;YtH6IZWGCS`W!dd-/`L[Vhj91PWENjDknc
$+%Qf[r:olZELU1Bf0j`BZZs8$f1eFeSFO#B5%9nkhJ`K0b5?BjoRNI(CQ>Gp@+;)>f>`9$jDqqJ`0#BjM`jC%aro\aU0I7+2u(k%l[HI%D/0_<
/eU;*:*J.$\u>?mD4]$apsIs-+6LQC+`%i1;4r^rH%:p,d8bD/b%EqORQ$=iA0nk55t2k51J[i4sX2$f:W[otG;NklY?'UAk6T@iW]>n.\s5"D-
L/rT,m$lGdhJ>eAq7f_r4+2dq'3t;JZ_4;J4Ss*44U<PT1*?D3?JARVKCo`q",a]RR@N.2$M?=8X<_k$S[4tq)-U;Ld8-qB>)dn[[Vp/Z5EEX^R
m,Ir&8s1ZrK6je\F8bV6rUEH;G0Dt=[RclqZca0F.DmHn)TN)T?S*%n.'04i([[t:'rAl/Omi?<ei$1Oq:/[j@7B_77RZ!J&hft7cI/Ci'Fadio
P2/U#'ps<SmPI/*&L#26VKOf)C]qaOJInL8+PrKFc:+][iJ^a>@gcCG-=,#qVrq\2nh62f7$ke=l(3QHX'8.PFj@hRH(Y&UD.abi:2SF]N@t'ok
[r(Yq`DVVTF4T6jr)h[ri)N7[Qf&W9ZJ!,-T-EO6=,Qbq<Up"/0<>Y#jP$$U9$;D6+j#N9lsK&IXWsb+a`J]5*rhS^Zt%.k6X"Qag&k5#LG-/1o
D]_<do@Q;.!J\PNJM<i)PtGQUk)G-kiu!Jh,sEY;e;dVqiNgMX^TO/%CsJ-24O_NgO8`E"S5Gd!9#j!+E-2j'l20P&8-:m:K-,_u]Dp&srnimG"
F%=AkCdY:L)S1grXSR;lTn;s1foR<,Z.Lr]uh`?+gpgH_n@8$V\]Wp.X;JpBjZmLO(Br&tCM!H/%V(G^8j.qIm=@dQ[$Z!_[1m@OY@*M+]Dp+`Z
!'-WQIVi=meR-LmkD45.WjmLS%!!$n@Y9[ZfPl/-m?2%)CpR*oFRq>Oh6=`'WH06c"nQ,mEWH<1Y);BP)InZ'j;qfcXI'U:LMgcL5V#JHF)G5qk
<h8b)?aJ=:Glfpc5TV7ad>k"hjoTaDfgOgego)q1`o484,U.9dp%4KGo%9&1HN\9bSOQ1PBm9[!Ybd3m0Q&O9k`m1d$0iH5dH,4e8rM-:$Lt>J2
iA6H326_j=.@E<@de'.FftgV10%0lVhLes#=R*L6,?<33.j>[SjHeji5_`+!o1CZV+iPUh]Q=DW*MaK485oH%Yn$B+E]lJd-Xm.f))8$nB@ZAWN
LFA^CQ6^=Vsh(Z2VnfG"HGJLdBh:ai0:D]@n52bIBGB^?C'>)_.!(`,r+T5:q`j@"#VS;7^J=ThVPUs6p9B+II#8&cie.J/BD2'6%]C[d6[>E^2
$FobNq.]=BqJ[4(3*YiSXf_=9AS0Fmf$T@k$6qkl]jiFY]CEpnK@]cd&Ae9U!%6u;oYj0R_]ZC^9oY*@Ed`:6^jNqQ'_#Nkm$j!73B?-?=W$Q,/
7N'j59jqEX('4HcYG?,/2F`EMp_8Yr3K8Wk`ZPQAB:3H'-!D2T/(K8%>!fH?MR.X,$Q3m0]/bZ[%:1;WX[8MNcLqiJ41o%0=tYm1;/*NSf<s>$a
EGqkjZVs`TkZ!Lh;2<#XK$HK?E1R*HTZ-/'>rYC=P1lF,>M65Vr6B483<_aE8WYAFF9_"9C"W!HJTC*8\9Pt&)4"mEZGsp!I%iW,MN;HkDSgY?T
[KWSTOhrJ4]iqm0,E*JE>&K;F)6/"Hn8Wnh5],LIklA/8V,AQiUL(W.R)Y8DHB0J(tpc=M<eO3fQka2OR1`,uQ<0o=`[i`64Hu%`Z20jggt%L^+
Tq8EO$l?YA-64C5-!:Yst+DZ2cUB"@Mt"_B4oZ@$5,@J+*L7\JA:4C4bWPPTJT'mWW-/b_FK.%rq:hCX1rW+kuj_)*g1~> endstream endobj
69 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 68 0 R /Annots 70 0
R >> endobj 70 0 obj [ 71 0 R ] endobj 71 0 obj << /Type /Annot /Subtype /Link /Rect [ 45.866 65.509 263.576
56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I
>> endobj 72 0 obj << /Length 2336 /Filter [ /ASCII85Decode /FlateDecode ] >> stream
GatU5gN)%,&:O:SY^VEl;%Va(><@7hP;K\F9iKe`Vc38>Q6;$e6n0<ja4&/FGJT1C5QjJNj2kE!E-<&0Mqt`/`U1eEgQTr25"[7$o9T8L+&4"%`
F7t!`(-1!?Jt_%pKeGh+r5NWHZpjPSm3]=L]i5M6t,j$LrCJ\9PQt_"Gk&p]p8elP$po.C3^</J.*=hqM3!^i6CZK`!6G=I/(Na'VQcpJ4rf#h/
9m?cG#lsIs\Y+!5KX&%:[)`eIu@ZPIObF]Ai#3\gW<0B,<\ThsjElm`Vnc>L#XFXnq5F=h-"'oDV1UI/YQFX"7WO0*n,?.n_hU6<&j39%C[NBE+
c#ji+=BX#/!WJMj1YUUdQN6?0K<X7RR#gZ`^==gcsF-TQ,U%L=78etk4cIVR)qT!]Y4n.4\q%\Ai1Zhg02O?]U5e6<'icR0K0QqjhQ``9J_(*>6
]a*,QTMtB*U1Ke$bBg,J0?\i/IjRFD6&K2hp.Q,a&0?^H<*R5f7A3"3*CfYBJk`F0l6j3%rVIeP\B?njXbYW+BQ-`bg`d(;c8R>A^Qr(O.s.\0-
o?"6^2\S<U\F#XtGP?K^KJq*<ar+B\1DQ<XC7o.pN!h.g.RYMY>CSc:/78`n"8/aoG$`(KRSI@E$<8+#-<(<:)r#Aj>"G1H0ZtUt)kO)f9_Z<CE
bg5ig%1q[H(>Re+4I\QK:JpN(fAt7g3\5u_!@_@6@0][i<$6$YAKqalS\!1o("HuB"RJOlW=f2,(_#kESJFlTRM6hM<h)p9q4esd"UT839la<S+
q%Y#38;g2]?o`Rno9-DE?[CQ)5;6-t7YPLj;N7@pXks*F7?5T>'bYm`X^+HaZ]trKjE[gSnI!ALO4][<g6\VJ"dWKluEo?i=br!6,XB&\sC!4Z4
Lc7csWRIujug'a)ph:+?`N'N:cMfQT=&*G+-4&&8'2B3N:n"uc65k]_^6j88DD74NpbLdTsg=stJ.YZ?JO#!!/X$Sf#qei:'e4V^&BJ17nL_7lp
LWiQ>`TJ<o#AK9,9KiGPH*_;]W0DR>3#%Z`Ys#<9r-\jas\<I-k&EM=Bln*fYVu[71FQn=h;\S0?&VnG?7L]*?kA%AcMkLGsl&_-bi`HH0,gWg_
J;0M[&>`;@_PJmk;32ViaEcmq#@aqER2D>S7'RS]#1`h;7K,WqgK"*Ck-RI*FsT?pabDL6FZCIUMRpss@_"$X=D!/BgBt[9^?G0Pr>[+#"bc(PN
#(BD6=`qM"XkDi:UN<$dO1kLXNTV-EX_f:Z9DZ!50k:Uq(>r'KQ`oP,p-JWE$D27AdGOkGUl3'fe\arfS#;.6Hi5O+'nJQ-hQ*`lK4ForKH1$[`
D*S!jmPn9RB,:)&?/n/BlZ`[i?Mk_ZbA.F"[*i+['GKHdj[+NFg\<n@R#dHr5\o>1JhQ?M.U/ZghlmSDP1%RchjFkN^(M(3Dpc?RX\,mJ>7#;%J
&_.hCdB_$ra(g';H8hXV!NV&WsPYVbCpp]3D[ne^UAmn<EI$t_glf.lDmpp_g'#a`M*bd<2PPp^^=/ad.!E$YL`SlEab2[VrpT,oqVW3aW1\&#;
dTI"BPVEg*Ac69hkFF7*DeGDC0.4FC,L;b*<Xbuq1H9oAff<MbqjV:2Xrshd<Cr4U!p(Q&GE;]Q2LQ.^lE$1!)F-VT7\C9FYSXp!?0[H5ZA:oOF
HT:UR7qc;#Yfn::-FF^#q5VWc[rr<0^`t-TU*rT(95i7<MJ4hqHF?@W<?[r1,P333R\!;knj4J,\=LS\\<%BI;3AUPlPreG3s]W8<3;fWbs@:U0
$K$A;?<*+n`0!.p;cLnDr+cKquG4(r]HVJ@hGs%FuV5dl./,%@nH"HFdat-5[_TVRD:XF`d,*.Hc47KYA`MmqRI9NpU"L](mo**NE.G%<+^/l2(
#rX#R:>]7[UQCgPKa^<5CffGZga62`*smPr5$?Li\Tq;$bQcrU\Pp]#p3W;Iaa4k74KQGLZDF.52+Wl?fj<\DpRP2<pO#j[<s,fh?)pWDEr(i:>
n*6#C08GME)P?%$:]h6[t+kM/O'&f\j".H?r!652^DCTs8sfVb\[@L\0j6/"kjE%Zn-d%SrRf2Sg;YQ62eh<[af:u(;_&Pc&sH<-k-6^4PZS]XJ
s0'em2iQOiZWB2!Nj&mo\T30.Z;O(T,XbAXAOHHW5?#?3$)QdS"r)&9"asg:hj%QZW-j2>&g"ckKOSr?Q+!B<&!((=9ES%hXmEA#-f$ZCajE/M_
K=j;&5A,&$o![fcDuts/d8mpd_P)E"p@"2G;Bs3q9<UPu9GT6d.Q@n3kdSP)8S$#0ZDl$*T@NB6b^7?36$tmtYOp@3;%"o)_d@>2:ZR%Kr!2@-&
9.~> endstream endobj 73 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R
/Contents 72 0 R /Annots 74 0 R >> endobj 74 0 obj [ 75 0 R ] endobj 75 0 obj << /Type /Annot /Subtype /Link
/Rect [ 341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 76 0 obj << /Length 1161 /Filter [
/ASCII85Decode /FlateDecode ] >> stream
Gat=*gMYb*&:O:S&:S<p34,Wrr8q8<-:iZiX'ed]q`roC9in2k8og((o']4EZ8baY-J\ej6qV+SbflIucbmTo,=08d"q"E6"0De2)=!P2cbR9\,
**:OOT:(so_mi*Q9S-lRHaP4qiaFf$'Wamem#UGc+$mA%F`_NMcaMSMcB.U)l=G96LlE!!+*]kQK6`['`E[$)b&8VM7,sd^4ZA/aUSf2@0g/)%`
!CeT5W.[>d@Xo[qT##\-`I*#6kYhoqO9bI/5[uBc*4>%WVtF=ZE_o[K@=;L?=-'#3V]"H`!S-SLC63'OoULE.\d3H.]NVi`k.u3pDAY7k]@BBgK
=dNB[UqB[su;JR]nU$*[K3io/rEU10\B24M5a\mpr_e]$A:CJj<S8EJPW9V:[>9R/096\=.Ql_mGM08:2ndk+9MZ0%dhH5HV)UPNZ;ZOI^*oT3o
8UIum@p$qutGTD7)>tluU/r+l#<:LIu$YPQm2CVeIBZft%=\q>c8i][RElf]HnMXrp$mdcYI=4)WQ*"6:m8UM-pt508P/g!B(/]OR!eK/ZiHU6]
;rXq`CcMtdN67)4+u[k2cZ/qm%pDB?-j<i?ND9<VXMqEWG6s<1PR7D#:Mc/+i9_!0do$KuDl)qP+JWD"NEhF#.e')iE6$"p$@Jn%4Q3[<d[N#O)
V?pk#'B_')GH-/E=UucdeNhfM!pL_m?kt&MSSSKh1K7d"WUK_,rFN]#bXBm[Ts:!O9_:g4MnR4r*[^o1u6s7j>SMB/Jm.n/#.=,aI\PsB$De-hX
`='A5Id63GjU]:F2q1VB?5\c$ldh[7FT7[rSVnmq9+BD7;Tq,YE3S*ZauE50nM]I##A.S116[=\i_LX%Q93;+h8Pa!m3eDOmVOaafJfB(Qr@nqM
0dZ0X1lfFspH:t]o'2Q)J-^gY$>)^^-`_l/EdStHP)Y%Q-jmhnC_@-tIeC='[TDfW,(e2W.%H+),$kuQ%>cmGk>cZ[GmP2g"-W"'2!hdJALa%Nj
RdG]]L\%4DmXXJ&D_C"fAa<oo_FPJdSFJj!W`2bSu>l9`HhN/+I/)=1m9BSjK;4ED'l4*W8fUEAun;B8OQ@-@H9Wl_1i-VF-"jK"PA/^15ZoW&g
o3a,'jXh<&ED9><>n7_eb9ROC?dpAiUP[U)?P;S'hLC49Y$(~> endstream endobj 77 0 obj << /Type /Page /Parent 1 0 R
/MediaBox [ 0 0 595 792 ] /Resources 3 0 R /Contents 76 0 R /Annots 78 0 R >> endobj 78 0 obj [ 79 0 R ] endobj
79 0 obj << /Type /Annot /Subtype /Link /Rect [ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ] /Border [ 0 0 0 ]
/A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 80 0 obj << /Length 823
/Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gat%!bAu&c']&X:ZqM99omSFuc^'+_l5:AQFPK8U%!HLSZjcnZA4`qhe4K.?iCL[Qk99)9SgG7l0Ye#>OKK3!ed2Q%r\0E>.O".G5__!a9CQflW
qpd<<8"Q?"$]%sQ+TkUh[+n'9#</:5_P:s.1R3D:hp6=?+_n"Q$c?hkrqRMO0Q*[E`YmkPl*4ePE(AlJb6e\ikL0>s5#(86Q0c<CPuR'V<'q^)E
Q0uER&RR;,41@@>&S#G-qIj,K>N`f$OUcY:9Ol<Oj>?r/l4b%a5%BP7&CkK4u,r?>oH#DYua.)%oB/d#`u]mSKI1E#`sV_9%7)@:(fQ.<?D+N2l
/A,>,K"344fMBhlW9"nAUEFcN/--hBBL3Z?XmrsU^)'Ub1?g#3dueON(4pVh,afD4IKbS]JK=)a34ZY\]%BSTtc;k'@Ef<o;D[3jtYG<&-Hos$7
+_d2r\"V(G,%%J!ap%V[([[V"LU3-,LmG2jK>9t)I+<JtWb.9:E,$A1fq',G)^7SY1bqRdfni!Ld[e[cl+Lj;F_!G]LbY;s;nP.ahi+$)c!A"Q,
#U'UgKYO,aNF!?5ef_7JU$f#%)W.CUVZ;"J_S$\YT]Vs7o$6MOpS;H2ebsY./e=c/7^;4@+&(h]A>`$5:U`.kVPn7YI'&iEm<?FdSjp^KUhgR,h
j/4YPo%'rB1VL:IaVcBICYD4?"FQ"[;4+9*p&*4p*J!l]88GU29gc1[^45FAt5II+IMfnT<`UH#$)>`.[ntEGEsum1#H9eL5#s*bGtQrjQfNNl>
lkIIc&XTZa[[P+U*Y[MkV$mDQtUR`]3Q_34,0)kNDu$~> endstream endobj 81 0 obj << /Type /Page /Parent 1 0 R /MediaBox
[ 0 0 595 792 ] /Resources 3 0 R /Contents 80 0 R /Annots 82 0 R >> endobj 82 0 obj [ 83 0 R 84 0 R 85 0 R ]
endobj 83 0 obj << /Type /Annot /Subtype /Link /Rect [ 417.982 663.385 444.092 653.385 ] /C [ 0 0 0 ] /Border [
0 0 0 ] /A << /URI (http://download.boulder.ibm.com/ibmdl/pub/software/dw/ajax/wa-aj-javaee/jsee_part1_src.zip)
/S /URI >> /H /I >> endobj 84 0 obj << /Type /Annot /Subtype /Link /Rect [ 75.866 636.135 240.396 626.135 ] /C
[ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/developerworks/library/whichmethod.html) /S /URI >>
/H /I >> endobj 85 0 obj << /Type /Annot /Subtype /Link /Rect [ 341.156 65.509 558.866 56.509 ] /C [ 0 0 0 ]
/Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 86 0 obj <<
/Length 1568 /Filter [ /ASCII85Decode /FlateDecode ] >> stream
Gat=,9lJcG&A@7.kdCfE0I$1<9Xi\mdk)+V#)^B3&%#$RCh6Hd,s1Ou0BE^Y8<_/=O[C['1Rra^ph&aaZ\t;;E.E!D#.*D[(fV;2#k]8LZ4Q,3W
rJnD`]0?fK7>KqR1d1aRCWb)%;,@g2@;,ufNNH4<hM,u%X*=V.\"fiT@r93$DSe9P7/`bRqG'NUWMJk5ZY^7;&"go@TqPO4^Jd7>m8h*)\T`0.O
B!phGhtP;TS*r>I!GOSo3caoMF"3^UkO3R"1$4KLfP=c'?>OC0AZF]VHPac*U`5VPCdY@\\'_3SEk<V]<_jYR@>AeB3t^Y71Hr*0-IG<DP+L4Rg
@G$#SGnR#"(0E2O$U@TW%[O"^q4-k7kB@nr&A@\R9WZ0B+6^erD_.4Rp@CF4N53IL2hJiQJjTHkcE*j&t124^q$Dh`6.n-NLP/3IJO_0K^jf]WU
WQ>7W]AB+a6YnsuhCZ`Msaj3`,Y@;CZpne^R5mO\T0Z87Ja3_&)C&)&`k`"Ea20P&Lel4((`ZE'TNuaEW>/D)oo$q3[n4tfYCtr%_iL@L%l'%;7
gTXkg9R[`I]COuW"pp--e+Hd#5P)85`1.TmLrRR%QlrL<VDfno6Zj5rFN_92!)SL*#2b8F";o@P5ohOS1W7=)8*diE2]q,U9hPG(aJ%qSDtIU]-
'-jk0Tut,F$WQ!PR[p'H?4%SqH-=o25QYc-'^PNW=OP?Wt5=R%m([<Tj[IDK-q.Xdjqlnlgr&g":>]$"$>j;%m!<QAI"WGXG2#+]XbsL32$Sh$]
JR]GNeF6,>J8"5JhrYeh6g)o>sYGb#K[$;/n;?GUJ_8rm_=oYkTDkn@Ah*G[0c.\3sAu<K`fjh@X6/]r.W1O$08;GQZfjpW]Erf)T1I;3mlLYbJ
TfiSF/%K1i=1o?L;.#Z1<lo)?PikGu]UFhscJ-dPLS"KReL8J1%r9%2heH92pkk<Y4'h+Gaib("H!UaX)-nRr]$n]AoA>Y)\Fdp#tICh&Fps'Rq
^4^Yad6J%A$V&b6,.sniT'M3-/Y03Zq'pJ%t.7?U:)8(#_g2W"T,&tq'GB[[DEF=\<.[!R])lM5(.Q=5VCHYXFD)QRVjG'#ul05SI-\K=rS2&C.
XI7b1JA&3IAAh4M`tP+l'A-r:;.Q8(<`$<F#,7)C:Yk7SQ=iJ2AQgjc['!<"q<UQE9[8SNi97@4]ePTs`@uu!8q'Ab`)FYK=D0.eN>Ue8>Pgg59
cI7R]:"WH@4/,O'"7"0=Yk9]3b!Lj.(L)6^)I&AQbD\&g79&-6ge&5fV./I1=;:VF)?sM97909gL38H,lAT>dZO[q-)2cRcYT`I<`8S?b/2:=^$
[(S<VFm5#o)lJ]cFHC?F_C.OWO<mGMDL#/P\?Y9&[?1P;G`tAD0?&/khCePJ]$`>%EEcoqCWpf7WZ6kEn1HC7Q_31G)=ZB9K(!eR:O&38j.:o@R
96?b<EmH#;>()@p<_d=Fef_>EF6^;ibWNCTM0Ar?eEp)r([jOFT*o'-)hpq:Kt[&.gUL,n2H/NcCIB*qOS+7TCmWgJGBjWlUuHS@(!\8WP*@=@V
4DKbO`iSJ=@~> endstream endobj 87 0 obj << /Type /Page /Parent 1 0 R /MediaBox [ 0 0 595 792 ] /Resources 3 0 R
/Contents 86 0 R /Annots 88 0 R >> endobj 88 0 obj [ 89 0 R 90 0 R 91 0 R 92 0 R 93 0 R 94 0 R 95 0 R 96 0 R 97
0 R 98 0 R 99 0 R ] endobj 89 0 obj << /Type /Annot /Subtype /Link /Rect [ 99.212 666.185 309.956 654.185 ] /C
[ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI (http://jcp.org/en/jsr/detail?id=223) /S /URI >> /H /I >> endobj 90 0
obj << /Type /Annot /Subtype /Link /Rect [ 123.224 631.185 312.236 619.185 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A
<< /URI (http://java.sun.com/javase/6/docs/technotes/guides/scripting/programmer_guide/index.html) /S /URI >>
/H /I >> endobj 91 0 obj << /Type /Annot /Subtype /Link /Rect [ 123.224 596.185 183.236 584.185 ] /C [ 0 0 0 ]
/Border [ 0 0 0 ] /A << /URI (http://java.sun.com/javase/6/docs/api/javax/script/package-summary.html) /S /URI
>> /H /I >> endobj 92 0 obj << /Type /Annot /Subtype /Link /Rect [ 213.248 561.185 339.308 549.185 ] /C [ 0 0 0
] /Border [ 0 0 0 ] /A << /URI (http://www.ibm.com/developerworks/web/) /S /URI >> /H /I >> endobj 93 0 obj <<
/Type /Annot /Subtype /Link /Rect [ 213.248 526.185 323.288 514.185 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.ibm.com/developerworks/ajax/) /S /URI >> /H /I >> endobj 94 0 obj << /Type /Annot /Subtype /Link
/Rect [ 99.212 456.185 171.224 444.185 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.mozilla.org/rhino/) /S /URI >> /H /I >> endobj 95 0 obj << /Type /Annot /Subtype /Link /Rect [
375.992 456.185 512.048 444.185 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://java.sun.com/javase/downloads/index.jsp) /S /URI >> /H /I >> endobj 96 0 obj << /Type /Annot /Subtype
/Link /Rect [ 99.212 442.685 139.88 430.685 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://java.sun.com/javase/downloads/index.jsp) /S /URI >> /H /I >> endobj 97 0 obj << /Type /Annot /Subtype
/Link /Rect [ 252.954 350.435 310.974 338.435 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI
(http://www.devsphere.com/) /S /URI >> /H /I >> endobj 98 0 obj << /Type /Annot /Subtype /Link /Rect [ 153.57
282.935 264.93 270.935 ] /C [ 0 0 0 ] /Border [ 0 0 0 ] /A << /URI (http://www.devsphere.com/) /S /URI >> /H /I
>> endobj 99 0 obj << /Type /Annot /Subtype /Link /Rect [ 45.866 65.509 263.576 56.509 ] /C [ 0 0 0 ] /Border [
0 0 0 ] /A << /URI (http://www.ibm.com/legal/copytrade.shtml) /S /URI >> /H /I >> endobj 102 0 obj << /Title
(\376\377\0\124\0\141\0\142\0\154\0\145\0\40\0\157\0\146\0\40\0\103\0\157\0\156\0\164\0\145\0\156\0\164\0\163)
/Parent 100 0 R /Next 104 0 R /A 101 0 R >> endobj 104 0 obj << /Title
(\376\377\0\125\0\163\0\151\0\156\0\147\0\40\0\164\0\150\0\145\0\40\0\152\0\141\0\166\0\141\0\170\0\56\0\163\0\
143\0\162\0\151\0\160\0\164\0\40\0\101\0\120\0\111) /Parent 100 0 R /Prev 102 0 R /Next 106 0 R /A 103 0 R >>
endobj 106 0 obj << /Title
(\376\377\0\102\0\165\0\151\0\154\0\144\0\151\0\156\0\147\0\40\0\141\0\40\0\163\0\143\0\162\0\151\0\160\0\164\0
\12\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\162\0\165\0\156\0\156\0\1
45\0\162) /Parent 100 0 R /Prev 104 0 R /Next 108 0 R /A 105 0 R >> endobj 108 0 obj << /Title
(\376\377\0\104\0\145\0\166\0\145\0\154\0\157\0\160\0\151\0\156\0\147\0\40\0\163\0\145\0\162\0\166\0\145\0\162\
0\55\0\163\0\151\0\144\0\145\0\12\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\40\0\
40\0\163\0\143\0\162\0\151\0\160\0\164\0\163) /Parent 100 0 R /Prev 106 0 R /Next 110 0 R /A 107 0 R >> endobj
110 0 obj << /Title (\376\377\0\103\0\157\0\156\0\143\0\154\0\165\0\163\0\151\0\157\0\156) /Parent 100 0 R
/Prev 108 0 R /Next 112 0 R /A 109 0 R >> endobj 112 0 obj << /Title
(\376\377\0\104\0\157\0\167\0\156\0\154\0\157\0\141\0\144\0\163) /Parent 100 0 R /Prev 110 0 R /Next 113 0 R /A
111 0 R >> endobj 113 0 obj << /Title (\376\377\0\122\0\145\0\163\0\157\0\165\0\162\0\143\0\145\0\163) /Parent
100 0 R /Prev 112 0 R /Next 114 0 R /A 17 0 R >> endobj 114 0 obj << /Title
(\376\377\0\101\0\142\0\157\0\165\0\164\0\40\0\164\0\150\0\145\0\40\0\141\0\165\0\164\0\150\0\157\0\162)
/Parent 100 0 R /Prev 113 0 R /A 11 0 R >> endobj 115 0 obj << /Type /Font /Subtype /Type1 /Name /F1 /BaseFont
/Helvetica /Encoding /WinAnsiEncoding >> endobj 116 0 obj << /Type /Font /Subtype /Type1 /Name /F3 /BaseFont
/Helvetica-Bold /Encoding /WinAnsiEncoding >> endobj 117 0 obj << /Type /Font /Subtype /Type1 /Name /F2
/BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >> endobj 118 0 obj << /Type /Font /Subtype /Type1
/Name /F9 /BaseFont /Courier /Encoding /WinAnsiEncoding >> endobj 1 0 obj << /Type /Pages /Count 19 /Kids [8 0
R 14 0 R 20 0 R 24 0 R 28 0 R 32 0 R 36 0 R 40 0 R 44 0 R 48 0 R 53 0 R 57 0 R 61 0 R 65 0 R 69 0 R 73 0 R 77 0
R 81 0 R 87 0 R ] >> endobj 2 0 obj << /Type /Catalog /Pages 1 0 R /Outlines 100 0 R /PageMode /UseOutlines >>
endobj 3 0 obj << /Font << /F1 115 0 R /F3 116 0 R /F2 117 0 R /F9 118 0 R >> /ProcSet [ /PDF /ImageC /Text ]
/XObject <</Im1 6 0 R /Im2 7 0 R >> >> endobj 11 0 obj << /S /GoTo /D [87 0 R /XYZ 65.866 403.385 null] >>
endobj 17 0 obj << /S /GoTo /D [87 0 R /XYZ 65.866 726.135 null] >> endobj 100 0 obj << /First 102 0 R /Last
114 0 R >> endobj 101 0 obj << /S /GoTo /D [null /XYZ 0.0 0.0 null] >> endobj 103 0 obj << /S /GoTo /D [14 0 R
/XYZ 65.866 714.135 null] >> endobj 105 0 obj << /S /GoTo /D [40 0 R /XYZ 65.866 156.128 null] >> endobj 107 0
obj << /S /GoTo /D [61 0 R /XYZ 65.866 243.581 null] >> endobj 109 0 obj << /S /GoTo /D [77 0 R /XYZ 65.866
616.466 null] >> endobj 111 0 obj << /S /GoTo /D [81 0 R /XYZ 65.866 726.135 null] >> endobj xref 0 119
0000000000 65535 f 0000053731 00000 n 0000053916 00000 n 0000054009 00000 n 0000000015 00000 n 0000000071 00000
n 0000002143 00000 n 0000002993 00000 n 0000004059 00000 n 0000004179 00000 n 0000004212 00000 n 0000054164
00000 n 0000004347 00000 n 0000004538 00000 n 0000006798 00000 n 0000006921 00000 n 0000006955 00000 n
0000054232 00000 n 0000007093 00000 n 0000007285 00000 n 0000009665 00000 n 0000009788 00000 n 0000009815 00000
n 0000010006 00000 n 0000011999 00000 n 0000012122 00000 n 0000012149 00000 n 0000012341 00000 n 0000014880
00000 n 0000015003 00000 n 0000015030 00000 n 0000015221 00000 n 0000017221 00000 n 0000017344 00000 n
0000017371 00000 n 0000017563 00000 n 0000019932 00000 n 0000020055 00000 n 0000020082 00000 n 0000020273 00000
n 0000022478 00000 n 0000022601 00000 n 0000022628 00000 n 0000022820 00000 n 0000025209 00000 n 0000025332
00000 n 0000025359 00000 n 0000025550 00000 n 0000027985 00000 n 0000028108 00000 n 0000028142 00000 n
0000028281 00000 n 0000028473 00000 n 0000031041 00000 n 0000031164 00000 n 0000031191 00000 n 0000031382 00000
n 0000033631 00000 n 0000033754 00000 n 0000033781 00000 n 0000033973 00000 n 0000036021 00000 n 0000036144
00000 n 0000036171 00000 n 0000036362 00000 n 0000038507 00000 n 0000038630 00000 n 0000038657 00000 n
0000038849 00000 n 0000041035 00000 n 0000041158 00000 n 0000041185 00000 n 0000041376 00000 n 0000043805 00000
n 0000043928 00000 n 0000043955 00000 n 0000044147 00000 n 0000045401 00000 n 0000045524 00000 n 0000045551
00000 n 0000045742 00000 n 0000046657 00000 n 0000046780 00000 n 0000046821 00000 n 0000047065 00000 n
0000047276 00000 n 0000047468 00000 n 0000049129 00000 n 0000049252 00000 n 0000049349 00000 n 0000049537 00000
n 0000049779 00000 n 0000050004 00000 n 0000050196 00000 n 0000050389 00000 n 0000050571 00000 n 0000050771
00000 n 0000050969 00000 n 0000051148 00000 n 0000051325 00000 n 0000054300 00000 n 0000054354 00000 n
0000051516 00000 n 0000054414 00000 n 0000051702 00000 n 0000054483 00000 n 0000051955 00000 n 0000054552 00000
n 0000052277 00000 n 0000054621 00000 n 0000052635 00000 n 0000054690 00000 n 0000052796 00000 n 0000052951
00000 n 0000053105 00000 n 0000053284 00000 n 0000053393 00000 n 0000053507 00000 n 0000053624 00000 n trailer
<< /Size 119 /Root 2 0 R /Info 4 0 R >> startxref 54759 %%EOF println("Start script \r\n");

// Output the type of an object function printType(obj) { if (obj.getClass) println("    Java object: " +
obj.getClass().name); else println("    JS object: " + obj.toSource()); println(""); }

// Print variable println("[JS] demoVar: " + demoVar); printType(demoVar);

// Call method of Java object strBuf.append(" used in DemoScript.js"); println("[JS] strBuf: " + strBuf);
printType(strBuf);

// Modify variable demoVar = "value set in DemoScript.js"; println("[JS] demoVar: " + demoVar);
printType(demoVar);

// Set a new variable var newVar = { x: 1, y: { u: 2, v: 3 } } println("[JS] newVar: " + newVar);
printType(newVar);

println("End script \r\n");<html> <head> <script language=javascript>var now=new
Date,t1=0,t2=0,t3=0,t4=0,t5=0,ie5=0;t1=now.getTime();</script>

<title>Yahoo!</title> <!--[if IE]> <script language=javascript> ie5=1; function err(a,b,c) { var img=new Image;
img.src='http://srd.yahoo.com/hp1-err/'+escape(a)+','+escape(b)+','+escape(c)+'/*1'; return true; }
window.onerror=err; function keypress() { if (window.event.keyCode<=32) return 1; document.onkeypress=null; if
(document.sf1&&(window.event.srcElement.tagName!="INPUT")&&(window.event.srcElement.tagName!="SELECT"))
document.sf1.p.focus(); } document.onkeypress=keypress; </script> <![endif]--> <script language=javascript><!--
lck='',sss=1048506838;//--></script> <script language=javascript> var b,d,i,l='',n='0',r,s,y,x; y='
'+document.cookie+';'; if ((b=y.indexOf(' Y=v'))>=0) { y=y.substring(b,y.indexOf(';',b))+'&'; if
((b=y.indexOf('l='))>=0) { l=y.substring(b+2,y.indexOf('&',b));
if((b=y.indexOf('n='))>=0)n=y.substring(b+2,y.indexOf('&',b)); } } d=new Date();
s=Math.round(d.getTime()/1000); r=Math.round(parseInt(n,32)%1021); if (lck!=l) { i=new Image;
x='/srv='+escape(lck)+';cli='+escape(l)+';sec='+s+';r='+r+'/'+Math.random()+'/*1'; document.write('<meta
http-equiv="Expires" content="-1">'); if (location.search.indexOf('r'+r+'=')!=1) {
i.src='http://srd.yahoo.com/yid6/rd'+x;
location.replace('http://'+location.hostname+location.pathname+'?r'+r+'='+s); } else {
i.src='http://srd.yahoo.com/yid6/nr'+x; } } function load() { now=new Date; t4=now.getTime(); } function unld()
{ var img=new Image; now=new Date; t5=now.getTime(); document.body.style.behavior='url(#default#clientCaps)';
img.src='http://srd.yahoo.com/hpt1/ni='+document.images.length+'/ct='+document.body.connectionType+'/sss='+sss+
'/t1='+t1+'/d1='+(t2-t1)+'/d2='+(t3-t1)+'/d3='+(t4-t1)+'/d4='+(t5-t1)+'/'+Math.random()+'/*1'; } </script>
<meta http-equiv="PICS-Label" content='(PICS-1.1 "http://www.icra.org/ratingsv02.html" l r (cz 1 lz 1 nz 1 oz 1
vz 1) gen true for "http://www.yahoo.com" r (cz 1 lz 1 nz 1 oz 1 vz 1) "http://www.rsac.org/ratingsv01.html" l
r (n 0 s 0 v 0 l 0) gen true for "http://www.yahoo.com" r (n 0 s 0 v 0 l 0))'> <base href=http://www.yahoo.com/
target=_top> <style type="text/css"><!-- .yhmpabd{border-left:solid #4d99e5 1px;border-right:solid #4d99e5
1px;border-bottom:solid #4d99e5 1px;} .yhmnwbd{border-left:solid #9b72cf 1px;border-right:solid #9b72cf 1px;}
.yhmnwbm{border-left:solid #9b72cf 1px;border-right:solid #9b72cf 1px;border-bottom:solid #9b72cf 1px;}
//--></style> </head> <body topmargin=7 marginheight=7 onLoad="load()" onBeforeUnload="unld()"> <center> <map
name=m><area alt="My Yahoo!" coords="44,0,106,47" href=r/i1><area alt=Finance coords="121,0,170,47"
href=r/f1><area alt=Travel coords="192,0,241,47" href=r/t4><area alt=Email coords="493,0,542,47"
href=r/m1><area alt=Messenger coords="558,0,618,47" href=r/p1><area alt=HotJobs coords="634,0,683,47"
href=r/hj><area alt=Help coords="699,0,739,14" href=r/hw></map><img width=740 height=48 border=0 usemap="#m"
src=http://us.i1.yimg.com/us.yimg.com/i/ww/m6v9.gif alt="Yahoo!"><table border=0 cellspacing=0
cellpadding=12><tr><td align=center nowrap><font face=arial size=-1><table border=0 cellspacing=0
cellpadding=0><tr><td valign=top><img src="http://us.i1.yimg.com/us.yimg.com/i/us/smbiz/gr/i_sbiz16.gif"
width=16 height=16 border=0 alt=" " vspace=0 hspace=5></td><td nowrap><font face=arial size=-1><a
href=s/41581><b>Build Your Web Presence</b></a> - <a href=s/8609>get a domain</a>, <a href=s/8610>get custom
email</a>, <a href=s/41581>build a site</a>, or <a href=s/8612>open an online
store</a></font></td></tr></table><!-- SpaceID=2716149 loc=WSBC noad --> </font></td></tr></table> <table
cellpadding=0 cellspacing=0 border=0> <tr valign=top><td> <table width=100% cellpadding=0 cellspacing=0
border=0 bgcolor=cccccc><tr><td height=1></td></tr></table> <table width=100% cellpadding=10 cellspacing=0
border=0 bgcolor=eeeeee> <tr><td align=center> <table cellpadding=0 cellspacing=0 border=0><tr><form name=sf1
style="margin-bottom:0;margin-top:0" action="r/sx/*-http://search.yahoo.com/bin/search"><td> <input size=30
name=p>&nbsp;<input type=submit value=Search>&nbsp;&nbsp;</td><td><font face=arial size=-2>&#149; <a
href=r/so>advanced search</a><br>&#149; <a href=r/z1>most popular</a></font></td></form></tr></table>
</td></tr> </table> <table width=100% cellpadding=0 cellspacing=0 border=0 bgcolor=cccccc><tr><td
height=1></td></tr></table> <table width=100% cellpadding=0 cellspacing=0 border=0><tr><td
height=5></td></tr></table> <table width=100% cellspacing=0 border=0> <tr valign=top><td nowrap><font
color=ff6600 face=arial size=-1><b>New!</b></font></td><td colspan=2><table cellspacing=0 cellpadding=0
border=0><tr><td><a href=s/67501><img src=http://us.i1.yimg.com/us.yimg.com/i/us/sp/b/16/bball_16_1.gif
height=16 width=16 border=0></a></td><td nowrap><font face=arial size=-1>&nbsp;<a href=s/67501>Watch the NCAA
Men's Tourney online</a>&nbsp;</font></td><td><font face=arial size=-1><b>&#149;</b></font></td><td
nowrap><font face=arial size=-1>&nbsp;<a href=s/67502>Tourney
Pick'em</a>&nbsp;</font></td></tr></table></td></tr> <tr><td colspan=3><table cellpadding=0 cellspacing=0
border=0><tr><td height=2></td></tr></table></td></tr><tr><td colspan=3><table width=100% cellpadding=0
cellspacing=0 border=0 bgcolor=eeeeee><tr><td height=1><table cellpadding=0 cellspacing=0 border=0><tr><td
height=1></td></tr></table></td></tr></table></td></tr><tr><td colspan=3></td></tr> <tr valign=top><td
nowrap><font face=arial size=-1><b>Shop</b></font></td><td colspan=2><font face=arial size=-1> <a
href=r/a2>Auctions</a>, <a href=r/cr>Autos</a>, <a href=r/cf>Classifieds</a>, <a href=r/r1>Real Estate</a>, <a
href=r/sh>Shopping</a>, <a href=r/ta>Travel</a> </font></td></tr> <tr valign=top><td nowrap><font face=arial
size=-1><b>Find</b></font></td><td nowrap colspan=2><font face=arial size=-1> <a href=r/jb>HotJobs</a>, <a
href=r/mp>Maps</a>, <a href=r/ps>People Search</a>, <a href=r/pr><b>Personals</b></a>, <a href=r/yp>Yellow
Pages</a> </font></td></tr> <tr valign=top><td nowrap><font face=arial size=-1><b>Connect</b></font></td><td
colspan=2><font face=arial size=-1> <a href=r/yc>Chat</a>, <a href=r/gc>GeoCities</a>, <a
href=r/gr>Greetings</a>, <a href=r/gp>Groups</a>, <a href=r/m2>Mail</a>, <a href=r/p2>Messenger</a>, <a
href=r/oa>Mobile</a> </font></td></tr> <tr><td colspan=3><table cellpadding=0 cellspacing=0 border=0><tr><td
height=2></td></tr></table></td></tr> <tr><td colspan=3><table width=100% cellpadding=0 cellspacing=0 border=0
bgcolor=eeeeee><tr><td height=1><table cellpadding=0 cellspacing=0 border=0><tr><td
height=1></td></tr></table></td></tr></table></td></tr> <tr><td colspan=3></td></tr> <tr valign=top><td
nowrap><font face=arial size=-1><b>Organize</b>&nbsp;</font></td><td nowrap colspan=2><font face=arial size=-1>
<a href=r/ab>Addresses</a>, <a href=r/bc>Briefcase</a>, <a href=r/ca>Calendar</a>, <a href=r/i2>My Yahoo!</a>,
<a href=r/pp>PayDirect</a>, <a href=r/fo>Photos</a> </font></td></tr> <tr valign=top><td nowrap><font
face=arial size=-1><b>Fun</b></font></td><td colspan=2><font face=arial size=-1> <a href=r/pl>Games</a>, <a
href=r/h1>Horoscopes</a>, <a href=r/yg>Kids</a>, <a href=r/mf>Movies</a>, <a href=r/uf>Music</a>, <a
href=r/pm><b>Platinum</b></a>, <a href=r/tg>TV</a> </font></td></tr> <tr valign=top><td nowrap><font face=arial
size=-1><b>Info</b></font></td><td nowrap><font face=arial size=-1> <a href=r/sq>Finance</a>, <a
href=r/wm>Health</a>, <a href=r/dn>News</a>, <a href=r/ys>Sports</a>, <a href=r/wt>Weather</a> </font></td><td
align=right nowrap><font face=arial size=-1><b><a href=r/xy>More Yahoo!...</a></b></font></td></tr> </table>
<small><small><br></small></small> <!--[if IE]><script language=javascript> var sp='http://www.yahoo.com';
document.body.style.behavior='url(#default#homepage)'; var post=0,pre='<center><font face=verdana size=-2>'; if
(!(document.body.isHomePage(sp)||document.body.isHomePage(sp+'/'))) { document.write(pre+'<a href=r/hs>Make
Yahoo! your home page</a>'); pre=' - '; post++; } if (post)
document.write('</font></center><small><small><br></small></small>'); </script><![endif]--> <center><div
id=mntl> <script language=javascript>
r0="http://rd.yahoo.com/M=245025.3084804.4408165.2846709/D=yahoo_top/S=2716149:LAM/A=1494436/R=0/*"; </script>
<script language=javascript> var ie=0,done=0; var red=r0.substring(0,r0.length-5); var
url="http://www.pepsiworld.com/beyonce/yahoo.cfm?id=1"; var
urlb="http://www.pepsiworld.com/beyonce/yahoo2.cfm?id=2"; var url2="http://dietpepsi.yahoo.com/?source=300102";
var survey='http://promo.yahoo.com/survey-pepsi2/'; var
dir="http://us.a1.yimg.com/us.yimg.com/a/1-/java/promotions/pepsi/030321/"; var img=dir+"wm_an1_p2.gif"; var
img2=dir+"post1.gif"; var imgw=160,imgh=130; var swf=dir+"wm_gu1_p2.swf"; var
mf="http://mediaframe.yahoo.com/launch?lid=wmv-300-p.1177344-105044,wmv-100-p.1177343-105044,wmv-56-p.1177342-1
05044,rnv-300-p.1177341-105044,rnv-100-p.1177340-105044,rnv-56-p.1177339-105044&p=promotions&f=95982086&.mh=noi
nt&.ti="+dir+"mftop1.gif&.bi="+dir+"mfbtm1.gif&.bl="+red+'R=6/id=mfu/*'+url+"&.fb="+red+'R=7/id=survey/*'+surve
y; var opt="toolbar=no,width=320,height=385,left=0,top=0,status=no,scrollbars=no,resizable=no"; var g,a,p,m,v;
g=navigator; a=g.userAgent; p=g.appVersion; m=p.indexOf('MSIE'); if (m!=-1 && a.indexOf('Win')!=-1) {
v=parseFloat(p.substring(m+4)); if (v>=5) { ie=v; } } function swfAction(p) { if (ie) {
document.all.ad.innerHTML=icnt2; } else { document.images.adimg.src=img2; if (done) {
location.href=red+'R=9/id=postnsimg/*'+url; return; } }
window.open(red+'R='+(p?4:5)+'/id=mf'+(p?'swf':'img')+'/*'+mf,'mfwin',opt); done=1; } var icnt='<A
HREF="'+red+'R=1/id=img/*'+url+'" onclick="swfAction(1);return false"><IMG SRC="'+img+'" WIDTH='+imgw+'
HEIGHT='+imgh+' BORDER=0 NAME="adimg"></A>'; var icnt2='<A HREF="'+red+'R=8/id=postieimg/*'+url+'"><IMG
SRC="'+img2+'" WIDTH='+imgw+' HEIGHT='+imgh+' BORDER=0></A>'; var adtxt='<font face=verdana size=-2><a
href="'+red+'R=2/id=txt1/*'+urlb+'">See More at Pepsi.com</a><br><a href="'+red+'R=3/id=txt2/*'+url2+'">Win a
Home Theater</a></font>'; document.write('<table border=0 cellspacing=0 cellpadding=1
bgcolor=330000><tr><td><table border=0 width=100% cellspacing=0 cellpadding=0 bgcolor=F6F6E4><tr><td valign=top
bgcolor=white width=160><table border=0 cellspacing=0 cellpadding=0><tr><td valign=top id=ad>'); if (ie) {
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" WIDTH='+imgw+'
HEIGHT='+imgh+'><PARAM NAME=movie VALUE="'+swf+'"><param name=wmode value=opaque><PARAM NAME=loop
VALUE=true><PARAM NAME=quality VALUE=high>'+icnt+'</OBJECT>'); } else { document.write(icnt); }
document.write('</td></tr><tr><td align=center height=25 nowrap>'+adtxt+'</td></tr></table></td><td
valign=top><table border=0 width="100%" cellspacing=0 cellpadding=0 bgcolor=F6F6E4><tr><td colspan=3
bgcolor=74240D><a href=s/69682><img src="http://us.i1.yimg.com/us.yimg.com/i/tv/academy_3.gif" alt="Yahoo!
Movies Oscar Coverage" border=0 width=276 height=27></a></td></tr><tr><td colspan=3 height=6><spacer type=block
width=1 height=6></td></tr><tr><td>&nbsp;&nbsp;</td><td align=center valign=top><font face=arial size=-1><a
href=s/69685><b>&#39;Chicago&#39; Wins Big, &#39;Pianist&#39; Dazzles</b></a></font><br><font size=-2
face=verdana>Polanski, Kidman, Brody take home Oscars</font></td><td>&nbsp;&nbsp;</td></tr><tr><td colspan=3
height=3><spacer type=block width=1 height=3></td></tr><tr><td colspan=3 align=center><table border=0
width="80%" cellspacing=0 cellpadding=1 bgcolor=d49d26><tr><td><table border=0 width="100%" cellspacing=0
cellpadding=3 bgcolor=f6e8ca><tr><td align=center><font size=-2 face=verdana><font color=d75b1b>*** </font><a
href=s/70484>Complete  Winners List</a><font color=d75b1b>
***</font></font></td></tr></table></td></tr></table></td></tr><tr><td colspan=3 height=2><spacer type=block
width=1 height=2></td></tr><tr><td>&nbsp;&nbsp;</td><td nowrap align=center><img
src="http://us.i1.yimg.com/us.yimg.com/i/auctions/cam.gif" alt="Photos" width=15 height=15 border=0
hspace=2><font face=verdana size=-2><b>Photos:</b> <a href=s/70425><b>Red Carpet</b></a> |  <a
href=s/70521><b>Backstage</b></a> | <a
href=s/69686><b>more...</b></a></font></td><td>&nbsp;&nbsp;</td></tr><tr><td colspan=3 height=5><spacer
type=block width=1 height=5></td></tr><tr><td>&nbsp;&nbsp;</td><td><table border=0 width="100%" cellspacing=0
cellpadding=0><tr><td valign=top><font size=-2 face=verdana><b>More Oscars</b>:</font></td><td valign=top><font
size=-2 face=verdana><a href=s/69685>News</a>, <a href=s/69684>Nominees</a>, <a href=s/69687>Games</a>,<br><a
href=s/69688>Entertainment Tonight</a>, <a
href=s/69682><b>more...</b></a></font></td></tr></table></td><td>&nbsp;&nbsp;</td></tr><tr><td colspan=3
height=4><spacer type=block width=1 height=1></td></tr><tr><td colspan=3 height=3><spacer type=block width=1
height=3></td></tr><tr><td colspan=3 height=1 bgcolor=E6B95A><spacer type=block width=1
height=1></td></tr><tr><td colspan=3 height=1><spacer type=block width=1 height=1></td></tr><tr
bgcolor=EDE3CF><td>&nbsp;&nbsp;</td><td nowrap align=center><font face=verdana size=-2><img
src=http://us.i1.yimg.com/us.yimg.com/i/tv/video.gif width=12 height=8> <a href=s/69688>Watch ET&#39;s
Exclusive Oscar Highlights!</a></font></td><td>&nbsp;</td></tr></table></td></tr></table></td></tr></table>');
</script> </div></center> <small><small><br></small></small> <table width=100% cellpadding=4 cellspacing=0
border=0 bgcolor=dfdfdf><tr><td align=center><font face=verdana size=-2>&nbsp;<b>Y! Business Services</b> -
Visit the Yahoo! <a href=r/c9>Small Business Center</a></font></td></tr></table> <table width=100%
cellpadding=0 cellspacing=0 border=0 bgcolor=999999><tr><td height=1><table cellpadding=0 cellspacing=0
border=0><tr><td height=1></td></tr></table></td></tr></table> <center><table width=95% border=0 cellspacing=0
cellpadding=2><tr> <td width=30% valign=top nowrap><font face=arial size=-1> <b>&#149;</b>&nbsp;<a
href=r/h9>Web Hosting</a><br> <b>&#149;</b>&nbsp;<a href=r/e9>E-commerce</a> </font></td> <td width=38%
valign=top nowrap><font face=arial size=-1> <b>&#149;</b>&nbsp;<a href=r/d9>Domain Registration</a><br>
<b>&#149;</b>&nbsp;<a href=r/m9>Business Mail</a> </font></td> <td width=32% valign=top nowrap><font face=arial
size=-1> <b>&#149;</b>&nbsp;<a href=r/p9>Marketing Services</a><br> <b>&#149;</b>&nbsp;<a href=r/s9>Sell on
Yahoo!</a> </font></td> </tr></table></center> <small><small><br></small></small> <table width=100%
cellpadding=4 cellspacing=0 border=0 bgcolor=ffe8ba> <tr><td align=left><font face=verdana size=-2>&nbsp;<b>Web
Site Directory</b> - Sites organized by subject</font></td><td align=right><font face=verdana size=-2><a
href=r/bx>Suggest your site</a>&nbsp;</font></td></tr> </table> <table width=100% cellpadding=0 cellspacing=0
border=0 bgcolor=bfbebe><tr><td height=1><table cellpadding=0 cellspacing=0 border=0><tr><td
height=1></td></tr></table></td></tr></table> <small><small><br></small></small> <center> <table width=95%
border=0 cellspacing=0 cellpadding=2> <tr> <td width=48% valign=top nowrap><font face=arial> <font
size=-1><b><a href=r/bu>Business &amp; Economy</a></b></font><br> <font size=-2><a href=r/bb>B2B</a>, <a
href=r/fi>Finance</a>, <a href=r/bs>Shopping</a>, <a href=r/jo>Jobs</a>...</font><br><br> <font size=-1><b><a
href=r/ci>Computers &amp; Internet</a></b></font><br> <font size=-2><a href=r/in>Internet</a>, <a
href=r/ww>WWW</a>, <a href=r/sf>Software</a>, <a href=r/ga>Games</a>...</font><br><br> <font size=-1><b><a
href=r/nm>News &amp; Media</a></b></font><br> <font size=-2><a href=r/nw>Newspapers</a>, <a href=r/tv>TV</a>,
<a href=r/mg>Radio</a>...</font><br><br> <font size=-1><b><a href=r/en>Entertainment</a></b></font><br> <font
size=-2><a href=r/mo>Movies</a>, <a href=r/hu>Humor</a>, <a href=r/mu>Music</a>...</font><br><br> <font
size=-1><b><a href=r/rs>Recreation &amp; Sports</a></b></font><br> <font size=-2><a href=r/sp>Sports</a>, <a
href=r/tr>Travel</a>, <a href=r/au>Autos</a>, <a href=r/od>Outdoors</a>...</font><br><br> <font size=-1><b><a
href=r/he>Health</a></b></font><br> <font size=-2><a href=r/ds>Diseases</a>, <a href=r/dg>Drugs</a>, <a
href=r/ft>Fitness</a>...</font><br><br> <font size=-1><b><a href=r/go>Government</a></b></font><br> <font
size=-2><a href=r/el>Elections</a>, <a href=r/mi>Military</a>, <a href=r/la>Law</a>, <a
href=r/tx>Taxes</a>...</font></font></td> <td valign=top width=52% nowrap><font face=arial> <font size=-1><b><a
href=r/re>Regional</a></b></font><br> <font size=-2><a href=r/ct>Countries</a>, <a href=r/rg>Regions</a>, <a
href=r/us>US States</a>...</font><br><br> <font size=-1><b><a href=r/cu>Society &amp;
Culture</a></b></font><br> <font size=-2><a href=r/pe>People</a>, <a href=r/ev>Environment</a>, <a
href=r/rl>Religion</a>...</font><br><br> <font size=-1><b><a href=r/ed>Education</a></b></font><br> <font
size=-2><a href=r/un>College and University</a>, <a href=r/k2>K-12</a>...</font><br><br> <font size=-1><b><a
href=r/ar>Arts &amp; Humanities</a></b></font><br> <font size=-2><a href=r/ph>Photography</a>, <a
href=r/hi>History</a>, <a href=r/li>Literature</a>...</font><br><br> <font size=-1><b><a
href=r/sc>Science</a></b></font><br> <font size=-2><a href=r/am>Animals</a>, <a href=r/as>Astronomy</a>, <a
href=r/eg>Engineering</a>...</font><br><br> <font size=-1><b><a href=r/ss>Social Science</a></b></font><br>
<font size=-2><a href=r/lg>Languages</a>, <a href=r/ac>Archaeology</a>, <a
href=r/py>Psychology</a>...</font><br><br> <font size=-1><b><a href=r/rf>Reference</a></b></font><br> <font
size=-2><a href=r/na>Phone Numbers</a>, <a href=r/dc>Dictionaries</a>, <a
href=r/qt>Quotations</a>...</font></font></td> </tr> </table> <small><small><br></small></small> <font
face=verdana size=-2><b><a href=r/bz>Buzz Index</a> - <a href=r/pk>Yahoo! Picks</a> - <a href=r/wn>New
Additions</a> - <a href=r/fc>Full Coverage</a></b></font> <small><small><br></small></small>
<small><small><br></small></small> <a
href="http://rd.yahoo.com/M=243098.2885930.4233629.1288581/D=yahoo_top/S=2716149:PB/A=1354075/R=0/*http://shop.
store.yahoo.com/cgi-bin/clink?hp3+shopping:dmad/M=243098.2885930.4233629.1288581/D=yahoo_top/S=2716149:PB/A=135
4075/R=1/1048506838+http://us.rmi.yahoo.com/rmi/http://www.compaq.com/rmi-framed-url/http://www.compaq.com/brid
ge/poweredby/consumer/index-yahoo.html"
onClick="window.open('http://rd.yahoo.com/M=243098.2885930.4233629.1288581/D=yahoo_top/S=2716149:PB/A=1354075/R
=2/*http://shop.store.yahoo.com/cgi-bin/clink?hp3+shopping:dmad/M=243098.2885930.4233629.1288581/D=yahoo_top/S=
2716149:PB/A=1354075/R=3/1048506838+http://us.rmi.yahoo.com/rmi/http://www.compaq.com/rmi-framed-url/http://www
.compaq.com/bridge/poweredby/consumer/index-yahoo.html', '_blank',
'resizable=yes,scrollbars=yes,width=800,height=610,left=100,top=50'); return false"><img
src="http://us.a1.yimg.com/us.yimg.com/a/co/compaq/powrdbyhp_blu_84x28_yahoo.gif" alt="" border="0" width="84"
height="28"></a> </center> </td><td width=10><img src=http://us.i1.yimg.com/us.yimg.com/i/space.gif width=10
height=1><br></td><td width=300> <table border=0 cellspacing=0 cellpadding=0 width=100%><tr><td bgcolor=4d99e5
height=15 rowspan=2 nowrap><table border=0 cellspacing=0 cellpadding=0 width=135><tr><td
width=135></td></tr></table><font face=verdana size=-2 color=white>&nbsp;&nbsp;<b>Personal
Assistant</b></font></td><td bgcolor=4d99e5 valign=top><img id=cti1
src=http://us.i1.yimg.com/us.yimg.com/i/us/nt/tr14x15_1.gif width=14 height=15 alt=" "></td><td align=right
width=90%><font face=verdana size=-2><b><a href=r/l6>Sign In</a></b></font></td></tr><tr><td bgcolor=4d99e5
colspan=2><table border=0 cellspacing=0 cellpadding=0><tr><td
height=3></td></tr></table></td></tr></table><table width=100% cellpadding=4 cellspacing=0 border=0
bgcolor=e5f6ff class=yhmpabd><tr><td width=67% align=center><font face=arial size=-1><b><a href=r/r2>Sign
up</a></b> to personalize Yahoo! - <a href=r/r3>learn more</a></font></td></tr></table> <table width=100%
cellpadding=0 cellspacing=0 border=0> <tr><td colspan=2 height=10><small><small><br></small></small></td><td
valign=bottom rowspan=2 align=right width=90%><font face=verdana size=-2 style="font-size:10px"> <script
language=javascript> var mon,day,now,hour,min,ampm,time,str,tz,end,beg; mon=new
Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); day=new
Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"); now=new Date(sss*1000); hour=now.getHours();
min=now.getMinutes(); ampm=(hour>=12)?"pm":"am"; hour=(hour==0)?12:(hour>12)?hour-12:hour;
min=(min<10)?"0"+min:min; tz=""; if (ie5) { str=now.toString(); end=str.lastIndexOf(" "); beg=str.lastIndexOf("
",end-1)+1; if (ie5&&end-beg==3) { tz=" "+str.charAt(beg)+"T"; } } time=hour+":"+min+ampm+tz+",
<nobr>"+day[now.getDay()]+" "+mon[now.getMonth()]+" "+now.getDate()+"</nobr>"; document.write(time); </script>
</font></td></tr> <tr><td bgcolor=9b72cf height=15 rowspan=2 nowrap><table width=135 cellpadding=0
cellspacing=0 border=0><tr><td width=135></td></tr></table><font face=verdana size=-2
color=white>&nbsp;&nbsp;<b>In The News</b></font></td><td bgcolor=9b72cf valign=top><img id=cti2
src=http://us.i1.yimg.com/us.yimg.com/i/us/nt/tr14x15_1.gif width=14 height=15 alt=""></td></tr> <tr><td
bgcolor=9b72cf colspan=2><table cellpadding=0 cellspacing=0 border=0><tr><td
height=3></td></tr></table></td></tr> </table> <table width=100% cellpadding=8 cellspacing=0 border=0
bgcolor=f1f1fd class=yhmnwbm> <tr><td align=center> <table width=100% cellspacing=0 cellpadding=1 border=0>
<tr><td valign=top><font face=arial size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><b>War
in Iraq</b> - <b><a href=s/70141>Latest Headlines</a></b> &#183; <b><a
href=s/70162>Photos</a></b></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="/homer/?http://story.news.yahoo.com/news?tmpl=story&u=/ap/20030324/ap_on_re_mi_ea/war_saddam_speech&cid=7
16&ncid=716">Saddam Vows 'Victory Will Be Ours Soon'</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="/homer/?http://story.news.yahoo.com/news?tmpl=story&u=/ap/20030324/ap_on_re_mi_ea/iraq_helicopter&cid=716
&ncid=716">Iraq Claims Downed U.S. Copters, Captives</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="/homer/?http://story.news.yahoo.com/news?tmpl=story&u=/ap/20030324/ap_on_re_as/war_northern_iraq&cid=716&
ncid=716">Coalition Planes Bomb N. Iraqi Barracks</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="/homer/?http://story.news.yahoo.com/news?tmpl=story&u=/ap/20030324/ap_on_re_mi_ea/war_rdp&cid=716&ncid=71
6">Troops Head Toward Baghdad Amid Losses</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="/homer/?http://story.news.yahoo.com/news?tmpl=story&u=/ap/20030324/ap_on_re_mi_ea/war_prisoners&cid=716&n
cid=716">Arab TV Shows Dead, Captured U.S. Troops</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="/homer/?http://story.news.yahoo.com/news?tmpl=story&u=/ap/20030324/ap_on_re_mi_ea/war_bush&cid=716&ncid=7
16">Bush to Provide Estimate on War's Cost</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a href=s/58881>75th Academy Awards</a> -
<a href=s/70541>Winners List</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a href=s/70482>Oscars: Michael Moore Booed
over Remarks</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a href=s/2732>NCAA Hoops</a> &#183; <a
href=s/70501>Aussies Win Cricket WC</a></font></td></tr> </table> <hr noshade size=1 color=d0d3f2><font
face=verdana size=-2><b><a href=r/xn>News</a> - <a href=r/n1>Tech</a> - <a href=r/s2>Sports</a> - <a
href=r/f2>Stocks</a> - <a href=r/w2>Weather</a></b> </font> </td></tr> </table> <table width=100% cellpadding=0
cellspacing=0 border=0><tr><td colspan=2 height=10><small><small><br></small></small></td></tr></table> <table
cellspacing=0 cellpadding=0 border=0 width=100%><tr><td><table width=100% cellpadding=1 cellspacing=0 border=0
bgcolor=3da001><tr><td><table width=100% cellpadding=0 cellspacing=0 border=0 bgcolor=e1f3e3><tr valign=top><td
width=79 rowspan=2><a href=s/69582><img src=http://us.i1.yimg.com/us.yimg.com/i/mntl/fin/03q1/lady.jpg width=79
height=58 border=0 alt="Yahoo! Finance Tax Center"></a></td><td colspan=2><a href=s/69583><img
src=http://us.i1.yimg.com/us.yimg.com/i/mntl/fin/03q1/fin_tax.gif width=209 height=19 border=0 alt="Yahoo!
Finance Tax Center" vspace=1 hspace=0></a></td></tr><tr valign=top><td width=3 nowrap><spacer type=block
width=3></td><td valign=top><font face=arial size=-1><a href=s/69582>Prepare and <b>file online</b></a>, <a
href=s/69584>Tax Tips</a>,<br><a href=s/69585>Calculators</a>, <a href=s/69586>Forms</a>, <a
href=s/69583><b>More...</b></a></font></td></tr></table></td></tr></table></td></tr></table> <table width=100%
cellpadding=0 cellspacing=0 border=0><tr><td colspan=2
height=10><small><small><br></small></small></td></tr></table> <table width=100% cellpadding=0 cellspacing=0
border=0> <tr><td bgcolor=9b72cf height=15 rowspan=2 nowrap><table width=140 cellpadding=0 cellspacing=0
border=0><tr><td width=140></td></tr></table><font face=verdana size=-2
color=white>&nbsp;&nbsp;<b>Marketplace</b></font></td> <td bgcolor=9b72cf valign=top><img
src=http://us.i1.yimg.com/us.yimg.com/i/us/nt/tr14x15_1.gif width=14 height=15></td> <td align=right
width=90%><table><tr><td></td></tr></table></td> </tr> <tr><td bgcolor=9b72cf colspan=2><table cellpadding=0
cellspacing=0 border=0><tr><td height=3></td></tr></table></td></tr> </table> <table width=100% cellpadding=8
cellspacing=0 border=0 bgcolor=f1f1fd class=yhmnwbd> <tr><td align=center> <table width=100% cellspacing=0
cellpadding=1 border=0> <tr><td valign=top><font face=arial size=-1><b>&#149;</b>&nbsp;</font></td><td><font
face=arial size=-1>Up to <a
href="http://t.yahoo.com/gc/yahootrk=p:s,a:r,s:2716149,l:mktpl/*http://rd.yahoo.com/M=233940.2827809.4412090.28
46705/D=yahoo_top/S=2716149:M1/A=1505010/R=0/O=1/I=yahoo-fp-marketplace/redenvelope-75off/*http://shop.store.ya
hoo.com/cgi-bin/clink?redenvelope2+shopping:dmfp.marketplace/redenvelope-75off/M=233940.2827809.4412090.2846705
/D=yahoo_top/S=2716149:M1/A=1505010/R=1/1048506838+http://us.rmi.yahoo.com/rmi/http://www.redenvelope.com/rmi-f
ramed-url/http://www.redenvelope.com/re/gifts/product_display/subcollection.jsp%3Fnc=1%26category=%252Fshops%25
2Fsale%2520shop%26pcd=YAHOTH%26mptc=PYAH">75% off gifts</a> at RedEnvelope.</font></td></tr><tr><td
valign=top><font face=arial size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1>Overpaid your
taxes? Take the free <a
href="http://rd.yahoo.com/M=248859.3089459.4412046.2851961/D=yahoo_top/S=2716149:M/A=1504996/R=0/*http://ad.dou
bleclick.net/clk;5328162;7938580;s?http://www.hrblock.com/taxes/partners/yahoo/rebate_offer.html">H&R Block
Double Check Challenge</a></font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="http://t.yahoo.com/gc/yahootrk=p:s,a:r,s:2716149,l:mktpl/*http://rd.yahoo.com/M=238191.3089461.4412052.28
46078/D=yahoo_top/S=2716149:M3/A=1505004/R=0/O=1/I=yahoo-fp-marketplace/oakley-sunglasses/*http://shop.store.ya
hoo.com/cgi-bin/clink?oakley2+shopping:dmfp.marketplace/oakley-sunglasses/M=238191.3089461.4412052.2846078/D=ya
hoo_top/S=2716149:M3/A=1505004/R=1/1048506838+http://us.rmi.yahoo.com/rmi/http://www.oakley.com/rmi-unframed-ur
l/http://www.oakley.com/">Oakley Sunglasses</a> Driven by purpose beyond reason. <a
href="http://t.yahoo.com/gc/yahootrk=p:s,a:r,s:2716149,l:mktpl/*http://rd.yahoo.com/M=238191.3089461.4412052.28
46078/D=yahoo_top/S=2716149:M3/A=1505004/R=2/O=1/I=yahoo-fp-marketplace/oakley-sunglasses/*http://shop.store.ya
hoo.com/cgi-bin/clink?oakley2+shopping:dmfp.marketplace/oakley-sunglasses/M=238191.3089461.4412052.2846078/D=ya
hoo_top/S=2716149:M3/A=1505004/R=3/1048506838+http://us.rmi.yahoo.com/rmi/http://www.oakley.com/rmi-unframed-ur
l/http://www.oakley.com/">Visit Oakley Online</a>.</font></td></tr><tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><a
href="http://rd.yahoo.com/M=249225.3060488.4412071.2846117/D=yahoo_top/S=2716149:M2/A=1505006/R=0/*http://www.c
oastalcontacts.com/referpages/refer_page121.htm">Order Contact Lenses</a> - Get free sunglasses and free
shipping</font></td></tr> </table> <hr noshade size=1 color=d0d3f2> <font face=verdana size=-2><b><a
href=r/vs>Shopping</a> - <a href=r/s5>Gifts</a> - <a href=r/s6>Computers</a> - <a href=r/s8>Flowers</a> - <a
href=r/t3>Travel</a></b> </font> </td></tr> </table> <table width=100% cellpadding=0 cellspacing=0 border=0
class=yhmnwbd> <tr><td bgcolor=9b72cf height=15 rowspan=2 nowrap><table width=140 cellpadding=0 cellspacing=0
border=0><tr><td width=140></td></tr></table><font face=verdana size=-2
color=white>&nbsp;&nbsp;<b>Entertainment</b></font></td><td bgcolor=9b72cf valign=top><img
src=http://us.i1.yimg.com/us.yimg.com/i/ww/tri2.gif width=14 height=15></td><td align=right width=90%
bgcolor=f1f1fd><table><tr><td></td></tr></table></td></tr> <tr><td bgcolor=9b72cf colspan=2><table
cellpadding=0 cellspacing=0 border=0><tr><td height=3></td></tr></table></td></tr> </table> <table width=100%
cellpadding=8 cellspacing=0 border=0 bgcolor=f1f1fd class=yhmnwbm> <tr><td align=center> <table width=100%
cellspacing=0 cellpadding=1 border=0> <tr><td valign=top><font face=arial
size=-1><b>&#149;</b>&nbsp;</font></td><td><font face=arial size=-1><table border=0 cellpadding=0 cellspacing=0
width=100%> <tr><td><font face=arial size=-1><a href=s/9786><b>Y! Sports Fantasy Baseball</b></a> - <font
color=red>Sign up now</font></font></td></tr></table> <table border=0 cellpadding=4 cellspacing=0 width=100%>
<tr><td> <a href=s/9786><img src="http://us.i1.yimg.com/us.yimg.com/i/us/sp/gr/taguchi_50x50_1.jpg" width=50
height=50 border=0 alt=" "></a></td><td><font face=verdana size=-2>Set up your own league or play in one of
ours. <a href=s/9786>Take the field today</a>.</font></td></tr></table>

</font></td></tr><tr><td valign=top><font face=arial size=-1><b>&#149;</b>&nbsp;</font></td><td><font
face=arial size=-1><a href=s/11341><b>LAUNCH</b></a> - <a href=s/11341><b>Your Yahoo! Music
Experience</b></a></a><br> <table border=0 cellpadding=4 cellspacing=0 width=100%> <tr><td><a href=s/11024><img
src=http://us.i1.yimg.com/us.yimg.com/i/mo/brit50.jpg width=50 height=50 border=0 alt="Britney
Spears"></a></td><td><font face=verdana size=-2><a href=s/11024><b>Britney</b></a>, <a href=s/11025>Eminem</a>,
<a href=s/13681>Shakira</a>, <a href=s/11027>Linkin Park</a>, <a href=s/11026>Avril Lavigne</a>, <a
href=s/11028>Nelly</a>, <a href=s/11029>Wyclef Jean</a>, <a href=s/11030>more...</a></font></td></tr></table>


</font></td></tr> </table> <hr noshade size=1 color=d0d3f2> <font face=verdana size=-2><b><a
href=r/mv>Movies</a> - <a href=r/rk>Music</a> - <a href=r/t2>TV</a> - <a href=r/ho>Horoscopes</a> - <a
href=r/g2>Games</a></b> </font> </td></tr> </table> <img src=http://us.i1.yimg.com/us.yimg.com/i/space.gif
width=235 height=1><br> <script language=javascript>now=new Date;t2=now.getTime();</script> </td></tr></table>
<br> <table cellpadding=0 cellspacing=0 border=0> <tr><td align=center> <hr noshade size=1 width=100%
color=cccccc> <table width=100% cellpadding=4 cellspacing=0 border=0> <tr><td align=center><font
face=arial><b>Local Yahoo!s</b></font></td></tr> </table> <table width=100% cellpadding=2 cellspacing=4
border=0> <tr><td colspan=2 bgcolor=efefff align=center><font face=verdana size=-2><b>Europe</b></font></td>
<td colspan=2 bgcolor=efefff align=center><font face=verdana size=-2><b>Asia Pacific</b></font></td> <td
colspan=2 bgcolor=efefff align=center><font face=verdana size=-2><b>Americas</b></font></td> </tr> <tr
valign=top> <td width=16% nowrap><font face=arial size=-1> &#149; <a href=r/nc>Catalan</a><br> &#149; <a
href=r/dk>Denmark</a><br> &#149; <a href=r/fr>France</a><br> &#149; <a href=r/de>Germany</a><br> &#149; <a
href=r/it>Italy</a> </font></td><td width=16% nowrap><font face=arial size=-1> &#149; <a
href=r/no>Norway</a><br> &#149; <a href=r/es>Spain</a><br> &#149; <a href=r/se>Sweden</a><br> &#149; <a
href=r/uk>UK &amp; Ireland</a> </font></td><td width=18% nowrap><font face=arial size=-1> &#149; <a
href=r/ai>Asia</a><br> &#149; <a href=r/an>Australia &amp; NZ</a><br> &#149; <a href=r/cc>China</a><br> &#149;
<a href=r/hk>Hong Kong</a><br> &#149; <a href=r/id>India</a> </font></td><td width=18% nowrap><font face=arial
size=-1> &#149; <a href=r/jp>Japan</a><br> &#149; <a href=r/kr>Korea</a><br> &#149; <a
href=r/sg>Singapore</a><br> &#149; <a href=r/tw>Taiwan</a> </font></td><td width=16% nowrap><font face=arial
size=-1> &#149; <a href=r/ag>Argentina</a><br> &#149; <a href=r/br>Brazil</a><br> &#149; <a
href=r/cd>Canada</a> </font></td><td width=16% nowrap><font face=arial size=-1> &#149; <a
href=r/mx>Mexico</a><br> &#149; <a href=r/cn>U.S. in Chinese</a><br> &#149; <a href=r/ep>U.S. in Spanish</a>
</font></td></tr></table> <small><small><br></small></small> <font face=arial size=-1><b>U.S.
Cities:</b>&nbsp;&nbsp;<a href=r/at>Atlanta</a> - <a href=r/bo>Boston</a> - <a href=r/ch>Chicago</a> - <a
href=r/hn>Houston</a> - <a href=r/lo>LA</a> - <a href=r/ny>NYC</a> - <a href=r/ba>SF Bay</a> - <a
href=r/sa>Seattle</a> - <a href=r/mm>more...</a></font> <hr noshade size=1 width=100% color=cccccc> <table
width=100% cellpadding=4 cellspacing=0 border=0> <tr><td align=center><font face=arial><b>More
Yahoo!</b></font></td></tr> </table> <table width=100% cellpadding=2 cellspacing=4 border=0> <tr><td colspan=2
bgcolor=eaf6ec align=center><font face=verdana size=-2><b>Guides</b></font></td> <td bgcolor=eaf6ec
align=center nowrap><font face=verdana size=-2><b>Small Business</b></font></td> <td bgcolor=eaf6ec
align=center><font face=verdana size=-2><b>Enterprise</b></font></td> <td bgcolor=eaf6ec align=center><font
face=verdana size=-2><b>Personal Finance</b></font></td> </tr> <tr valign=top> <td width=14% nowrap><font
face=arial size=-1> &#149; <a href=r/ex>Advice</a><br> &#149; <a href=r/eu>Education</a><br> &#149; <a
href=r/yh>Health</a><br> &#149; <a href=r/lt>Lottery</a> </font></td><td width=14% nowrap><font face=arial
size=-1> &#149; <a href=r/pf>Members</a><br> &#149; <a href=r/pt>Pets</a><br> &#149; <a
href=r/k1>Yahooligans!</a> </font></td><td width=25% nowrap><font face=arial size=-1> &#149; <a
href=r/dr>Domain Registration</a><br> &#149; <a href=r/sl>Sell on Yahoo!</a><br> &#149; <a href=r/sb>Small Biz
Center</a><br> &#149; <a href=r/s3>Store Building</a><br> &#149; <a href=r/ws>Web Hosting</a> </font></td><td
width=25% nowrap><font face=arial size=-1> &#149; <a href=r/et>Enterprise Solutions</a><br> &#149; <a
href=r/ef>Portal Solutions</a><br> &#149; <a href=r/ew>Webcasting</a><br> &#149; <a href=r/ee>Enterprise
Messenger</a><br> &#149; <a href=r/rx>Resumix</a><br> </font></td><td width=22% nowrap><font face=arial
size=-1> &#149; <a href=r/bk>Banking</a><br> &#149; <a href=r/b2>Bill Pay</a><br> &#149; <a href=r/fm>Money
Manager</a><br> &#149; <a href=r/is>Insurance</a><br> &#149; <a href=r/ln>Loans</a><br> &#149; <a
href=r/tc>Taxes</a> </font></td></tr></table> <small><small><br></small></small> <font face=arial size=-1><b><a
href=r/yz>Even More Yahoo!...</a></b></font> <br><small><small><br></small></small> <hr noshade size=1
width=100% color=cccccc> <font face=arial size=-1><b>Access Yahoo! via:</b>&nbsp;&nbsp;<a href=r/pd>PDAs</a> -
<a href=r/we>Web-enabled Phones</a> - <a href=r/vc>Voice (1-800-My-Yahoo)</a></font> <br><small><br></small>
<table width=100% cellpadding=0 cellspacing=0 border=0 bgcolor=cccccc><tr><td height=1></td></tr></table>
<table width=100% cellpadding=10 cellspacing=0 border=0 bgcolor=eeeeee> <tr><td align=center> <form
style="margin-bottom:0" action=bin/ms> <table cellpadding=0 cellspacing=0 border=0><tr><td> <input size=40
name=p title="enter search terms here">&nbsp;<input type=submit value=Search>&nbsp;&nbsp;<select name=u><option
value="http://search.yahoo.com/bin/search?p=">All of Yahoo!<option
value="http://search.shopping.yahoo.com/search?P=all&p=">Shopping<option
value="http://search.news.yahoo.com/search/news?p=">News Stories<option
value="http://search.news.yahoo.com/search/news?c=news_photos&p=">News Photos<option
value="http://education.yahoo.com/search/ahd?txt_main=">Dictionary<option
value="http://education.yahoo.com/search/nt?txt_main=">Thesaurus<option
value="http://yp.yahoo.com/py/ypResults.py?Pyt=TFour11&zip=&stp=a&stx=">Yellow
Pages</select>&nbsp;&nbsp;</td><td><font face=arial size=-2>&#149;&nbsp;<a href=r/o1>advanced
search</a><br>&#149;&nbsp;<a href=r/z2>most popular</a></font></td></tr></table></form> </td></tr> </table>
<table width=100% cellpadding=0 cellspacing=0 border=0 bgcolor=cccccc><tr><td height=1></td></tr></table>
<small><small><br></small></small> <font face=arial size=-1><a href=r/ad>How to Suggest a Site</a> - <a
href=r/cp>Company Info</a> - <a href=r/cy>Copyright Policy</a> - <a href=r/ts>Terms of Service</a> - <a
href=r/hr>Jobs</a> - <a href=r/ao>Advertise with Us</a><p><small>Copyright &copy; 2003 Yahoo! Inc. All rights
reserved.</small><br><font color=ff0020>updated</font> <a href=r/pv>Privacy Policy</a> </font><br> <img
src=http://us.i1.yimg.com/us.yimg.com/i/space.gif width=685 height=1> </td></tr> </table> </center> <script
language=javascript>now=new Date;t3=now.getTime();</script> </body></html> <!-- w18.www.dcn.yahoo.com
compressed/chunked Mon Mar 24 03:53:58 PST 2003 --> now=new Date(sss*1000); mon=new
Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"); day=new
Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat"); hour=now.getHours(); min=now.getMinutes();
ampm=(hour>=12)?"pm":"am";hour=(hour==0)?12:(hour>12)?hour-12:hour; min=(min<10)?"0"+min:min;

#####

registry test [JScript] var WshShell = WScript.CreateObject ("WScript.Shell");

WshShell.RegWrite ("HKCU\\Software\\ACME\\FortuneTeller\\", 1, "REG_BINARY"); WshShell.RegWrite
("HKCU\\Software\\ACME\\FortuneTeller\\MindReader", "Goocher!", "REG_SZ");

var bKey =    WshShell.RegRead ("HKCU\\Software\\ACME\\FortuneTeller\\"); WScript.Echo (WshShell.RegRead
("HKCU\\Software\\ACME\\FortuneTeller\\MindReader"));

WshShell.RegDelete ("HKCU\\Software\\ACME\\FortuneTeller\\MindReader"); WshShell.RegDelete
("HKCU\\Software\\ACME\\FortuneTeller\\"); WshShell.RegDelete ("HKCU\\Software\\ACME\\");
