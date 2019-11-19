
***                                                      
B2C      EQU   *              CVT BIN TO READABLE TEXT   
         CVD   R15,DWORD                                 
         UNPK  HLDSTR,DWORD+4(4)                         
         OI    HLDSTR+6,X'F0'                            
         XR    R15,R15                                   
         BR    R9                                        
***                                                      
X2CX     EQU   *                                         
         ST    R15,FOUR                                  
         UNPK  EIGHT(9),FOUR(5)                          
         XC    EBCDCFLD,EBCDCFLD                         
         MVN   EBCDCFLD(8),EIGHT                         
         TR    EBCDCFLD,ERRTRAN                          
         BR    R9                                        
*                                                        
*                    
DWORD    DS    D     
$DBLWD   DS    D     
D_ABSTIME DS   D     
EBCDCFLD DS    D     
HEXFIELD DS    F     
FOUR     DS    CL4,C    
*                       
EIGHT    DS    CL8,C    
*                       
*                           
HLDSTR   DS    CL7          
ERRTRAN  DC    X'F0F1F2F3F4F5F6F7F8F9C1C2C3C4C5C6'

#####
	DSECT stg
WORKA    DS    CL9                     WORK AREA
*
IPARM    DC    X'ACDCBABE'             INPUT AREA
OPARM    DS    CL8                     OUTPUT AREA
*...
         LA    R1,TABLE                LOAD ADDR OF TRANSLATE TABLE
         AHI   R1,-240                 POINT BACK 240 BYTES
         UNPK  WORKA(9),IPARM(5)       UNPACK INPUT AREA
         MVC   OPARM(8),WORKA          MOVE TO OUTPUT AREA
         TR    OPARM(8),0(R1)          TRANSLATE TO DISPLAY 
         B     HX999                   EXIT..
*
* Static stg
TABLE    DC    C'0123456789ABCDEF'     TRANSLATE TABLE
Mode Switching Examples
* Goto 24 bit mode from any mode
LA R15,GOTO24
BASSM R14,R15
* Goto 31 bit mode from any mode (1)
L R15,GOTO31@
BASSM R14,R15
* Goto 31 bit mode from any mode (2)
LARL R15,GOTO31
OILH R15,X'8000'
BASSM R14,R15
* Goto 64 bit mode from any mode
XGR R15,R15 For 24/3164
LARL R15,GOTO64
OILL R15,x'0001'
BASSM R14,R15
GOTO31@ DC A(GOTO31+x'80000000')


* in called code
* Entry into 24 Bit Mode
GOTO24 DC 0H
. . .
BSM 0,R14 Return to Caller
* Entry into 31 Bit Mode
GOTO31 DC 0H
. . .
BSM 0,R14 Return to Caller
* Entry into 64 Bit Mode
GOTO64 DC 0H
. . .
BSM 0,R14 Return to Caller

#####

 SAMxx
- Set Addressing Mode
- E-Type (2-Byte) format with Opcode x'010x'
 No registers set/modified
- No register preload required
 Old mode not retained
- Types
 SAM24: Switch to 24 bit addressing mode       
 SAM31: Switch to 31 bit addressing mode       01 0C
 SAM64: Switch to 64 bit addressing mode       01 0D
                                                01 0E

 TAM
- Test Addressing Mode
- E-Type (2-byte) format:  01 0B
- Sets condition code based on current addressing mode
 CC=0 - 24 bit addressing (Branch on Zero)
 CC=1 - 31 bit addressing (Branch on Mixed)
 CC=2 - Unused
 CC=3 - 64 bit addressing (Branch on One)
- No registers set/modified
- Addressing mode is not switched




* Examples
SAM24 , To AMODE(24)
. . .
SAM31 , To AMODE(31)
. . .
SAM64 , To AMODE(64)
. . .
TAM , Test AMODE
JZ IN24
JO IN64
* Running in AMODE(31)
IN31 DS 0H
. . .
* Running in AMODE(31)
IN24 DS 0H
. . .
* Running in AMODE(64)
IN64 DS 0H
. . .

#####

 BALR R1,R2
- Since S/360
- High order word
 24/31 bit mode: ignored
 64 bit mode: part of address
- Processing Modes (R1)
 24 bit addressing contains ILC,
CC, Program Mask, 24 bit
address
 31 and 64 bit addressing,
identical to BASR
- Deprecated
 Use BASR for branch and link
 Use IPM instruction for CC
and Program Mask
 BASR R1,R2
- Since XA/370 (bimodal)
- High order word
 24/31 bit mode: ignored
 64 bit mode: part of address
- Processing Modes (R1)
 24 and 31 bit addressing
contains mode bit & address
 64 bit addressing contains only
the address, no mode bit(s)
- Preferred method of branch and
link (or save) without mode
switching
 More consistent

#####

 Make sure CALL/RETURN type matches
- BASSM with BSM
- BASR with BR
 Be sure alternatives are valid
- LINK vs. LOAD and CALL
 LINK switches address mode as required
 LOAD and CALL does not switch addressing mode
 Watch out for addressing mode bits as part of address
- May have to clear address mode in register
 Especially "odd" address and AMODE 64

#####

*BAD CASE: Worked OK for MY_AMODE=YOUR_AMODE for 24 and 31 but fails    *for 64
*Fails for MY_AMODE?YOUR_AMODE

*GOOD CASE: Works for all MY_AMODE and YOUR_AMODE values


        TITLE 'BAD CASE'
MYPGM CSECT ,
MYPGM AMODE MY_AMODE
MYPGM RMODE MY_RMODE
AMODE EQU ... bit setting ...
. . .
        L R15,YOURPGM@
        BASR R14,R15
. . .
YOURPGM@ DC A(YOURPGM+AMODE)
        END ,
YOURPGM CSECT ,
YOURPGM AMODE YOUR_AMODE
YOURPGM RMODE YOUR_RMODE
. . .
        BSM 0,R14
        END ,
        
        TITLE 'GOOD CASE'
MYPGM CSECT ,
MYPGM AMODE MY_AMODE
MYPGM RMODE MY_RMODE
AMODE EQU ... bit setting ...
. . .
        XGR R15,R15
        L R15,YOURPGM@
        BASSM R14,R15
. . .
YOURPGM@ DC A(YOURPGM+AMODE)
        END ,
YOURPGM CSECT ,
YOURPGM AMODE YOUR_AMODE
YOURPGM RMODE YOUR_RMODE
. . .
        BSM 0,R14
        END ,        

#####

        TITLE 'BAD PROGRAM'
MYPGM CSECT ,
MYPGM AMODE 31
MYPGM RMODE ANY
        STM R14,R12,12(R13)
        BASR R11,0
        USING *,R11
. . .
        SAM64 ,
******************************************
* The Next Instruction Abends!!! *
* (because BASR executed in AMODE(31)) *
******************************************
        MVC DATA1,DATA2
. . .
DATA1 DS CL10
DATA2 DC CL10'TESTING'
. . .
        END ,
        
        TITLE 'GOOD PROGRAM'
MYPGM CSECT ,
MYPGM AMODE 31
MYPGM RMODE ANY
        STM R14,R12,12(R13)
        BASR R11,0
        USING *,R11
. . .
        SAM64 ,
******************************************
* The Next Instruction Saves the Day *
* (Removes Blackout Area Addressing) *
******************************************
        LLGTR R11,R11
        MVC DATA1,DATA2
. . .
DATA1 DS CL10
DATA2 DC CL10'TESTING'
. . .
        END ,   

#####

Load Multiple Disjoint
 LMD R1,R3,D2(B2),D4(B4)
- Format SS:
- Loads range of full 64-bit registers
- Uses two different locations
 High half registers loaded from Arg2
 Low half registers loaded from Arg4
 Similar to doing a LMH and LM in one instruction
 Allows for AMODE=64 to load "Grande" registers from two
different chunks (high and low words) of saved registers
- Prevents register corruption of needed base address(es)
 Notes:
- For performance, use sparingly:
 Use LMH and LM or LMG if possible
- There is no "Store Multiple Disjoint"
EF R1 R3 B2 D2 B4 D4

* Example of LMD
        STMH R2,R5,HIREGS
        STM R2,R5,LOWREGS
. . .
        LMD R2,R5,HIREGS,LOWREGS
. . .
HIREGS  DS 4F Save High Half
LOWREGS DS 4F Save Low Half

#####

 IHASAVER macro
- SYS1.MACLIB
 Types
- "Traditional" 72 byte save area
 32-bit register save
 Standard Linkage
- Format 4
 64-bit register save
 Standard linkage
- Eye catcher "F4SA" at offset x'04'
- Relocates previous and next chain to offset 128 (dec) and 136 (dec)
- Format 5
 64-bit register save like format 4
 32-bit high register save area appended
- Used for transition from 32 to 64 bit register processing
 Standard linkage (like format 4)
- Eye catcher "F5SA" at offset x'04'
- Relocates previous and next chain to offset 128 (dec) and 136 (dec)C:\Lang\zos\ASM_cics_relative.txt

The following example of a LINK command specifies the length correctly and passes the address of the variable COMMAL to the command processor:
EXEC CICS LINK PROGRAM('PROG2') COMMAREA(COMMA) LENGTH(COMMAL)
...
COMMA DC CL20'This is the COMMAREA'
COMMAL DC H'20'

The following example also specifies the length correctly:
EXEC CICS LINK PROGRAM('PROG2') COMMAREA(COMMA) LENGTH(=AL2(COMMAL))
...
COMMA DC CL20'This is the COMMAREA'
COMMAL EQU *-COMMA

The following example is incorrect because the CICS translator cannot know the type of the variable COMMAL, and passes the value of COMMAL as the address of the halfword field that contains the length. This could provide a random length value, or a program check if the storage at that address is not available.
EXEC CICS LINK PROGRAM('PROG2') COMMAREA(COMMA) LENGTH(COMMAL)
...
COMMA DC CL20'This is the COMMAREA'
COMMAL EQU *-COMMA

TTED.TSK.F.R510.SYS.SDFHSAMP(DFH$AREP)
        DFHEIENT DATAREG=13,EIBREG=11,STATREG=9,STATIC=STATR,CODEREG=0
        
To prevent the translator from automatically inserting its version of the DFHEIENT macro, specify the NOPROLOG translator option.

You must specify the DFHEIENT macro parameters to specify that your program uses relative addressing instructions, because only relative addressing is supported. For relative addressing, you do not need any base registers to address your program instructions, but you must use at least one register to address static data in your program. Use the STATREG and STATIC parameters to set up one or more static registers.
 
You can specify the following parameters for the DFHEIENT macro:
CODEREG Specify a value of 0 (the default) to specify relative addressing.

DATAREG Specify one or more working storage registers for the application program. The default is register 13, and it is advisable to use register 13 as your first data dynamic-storage register. If you do not, the code generated by the DFHECALL macro adds extra instructions to manipulate register 13. The DFHECALL macro ensures that register 13 addresses the save area that DFHEISTG defined in dynamic storage.

EIBREG Specify the register to use to address the EXEC interface block (EIB). The default is register 11. 
STATREG Specify one or more static registers for the application program to use. The default is register 3.

STATIC Specify the assembler label of the start of the static area. You must specify a value; there is no default for this parameter
        
You can also use the DFHEIENT macro to specify that you want to use relative addressing instructions in your program. When you use relative addressing, you do not need to use any base registers to address your program instructions, but you must use at least one register to address static data in your program. Specify the following operands on the DFHEIENT macro:CODEREG=0 to specify that no registers are to be used to address program instructions.
 STATREG to specify one or more registers to address the static data area in your program.
 STATIC to specify the address of the start of the static data in your program.
 
If you use relative addressing, use the IEABRCX DEFINE macro (provided by z/OS) to redefine the assembler mnemonics for branch instructions to use relative branch instructions. Also, ensure that any LTORG statements, and instructions that are the target of EXECUTE instructions, appear after the label specified in the STATIC operand. For example:         IEABRCX DEFINE                 Define relative branch mnemonics
RELATIVE DFHEIENT CODEREG=0,STATREG=(8,9),STATIC=MYSTATIC
         ....
         EX    R2,VARMOVE             Execute instruction in static area
         ....

MYSTATIC DS    0D                     Static data area
MYCONST  DC    C'constant'            Static data value
VARMOVE  MVC   WORKA(0),WORKB         Executed instruction
         LTORG ,                      Literal pool For more information about the IEABRCX macro, see IEABRCX - Relative branch macro extension in z/OS MVS Programming: Assembler Services Reference, Volume 2.

#####



DFHECALL macro
 
For an assembler language application program, when the CICSr translator detects a CICS command, each command is replaced by an invocation of the DFHECALL macro. The DFHECALL macro sets up the command parameters and calls the initial CICS command processor to handle the command.
 

This macro expands to a system-standard call sequence that uses registers 15, 14, 0, and 1. The contents of these registers are as follows: Register 15 contains the address of the entry point in the EXEC interface program.
 Register 14 contains the address of the return point in your application program.
 Register 0 is undefined.
 Register 1 contains the address of the parameter list.
 
The entry point held in register 15 is resolved in the EXEC interface processor that must be link-edited with your application program. For AMODE(24) and AMODE(31) applications, this EXEC interface processor is DFHEAI; for AMODE(64) applications, it is DFHEAG.
 
You can specify the exit from the application program by an EXEC CICS RETURN command in your source program. Alternatively, you can use the DFHEIRET macro, which restores the registers and returns control to the address in register 14. The translator inserts the DFHEIRET macro, with no parameters specified, immediately before the END statement, unless you specify the NOEPILOG translator option. You can use this macro to return from a top-level program, but is not advisable from a lower-level program.
 
During assembly, the DFHECALL macro builds an argument list in dynamic storage, so that the application program is reentrant. Then the macro invokes the EXEC interface program DFHEIP for AMODE(24) or AMODE(31) applications, or DFHEIG for AMODE(64) applications. These programs also obey system standards, as previously described.
 
For AMODE(64) applications, although the application and the initial command processor run in 64-bit addressing mode, the parameters that the DFHECALL macro sets up and passes to the initial command processor contain 31-bit addresses. Therefore, the storage in which the call parameters are built, the DFHEISTG storage, must be 31-bit storage (above 16 MB but below 2 GB).
 
In addition to the invocation of the DFHECALL macro, the translator also inserts the following macros into your source program: DFHEIGBL 
This macro sets globals if you are using EXEC DLI in either a batch or an online CICS application program. Within DFHEIGBL, if DFHEIDL is set to 1, this means that the program contains EXEC DLI commands. If DFHEIDB is set to 1, this means that the program is batch DL/I. If you are not using DL/I, it is commented and set to 0.
 DFHEIENT 
This macro is inserted after the first CSECT or START instruction. It performs prolog code to allocate working storage to hold any user variables and for CICS use: It saves registers
 It gets an initial allocation of the storage that is defined by DFHEISTG
 It sets up a base register (default register 3)
 It sets up a dynamic storage register (default register 13)
 It sets up a register to address the EIB (default register 11)
 DFHEIRET 
This macro performs epilog code to release the working storage of the application program: It restores registers. 
DFHEIRET RCREG=nn, where nn (any register number other than 13) contains the return code to be placed in register 15 after the registers are restored.
 
It returns control to the address in register 14.
 DFHEISTG and DFHEIEND 
These macros define dynamic storage: They define the storage required for the parameter list
 They define a save area.
 
For further details about these macros with AMODE(64) applications, see Coding the EXEC CICS(r) assembler interface.
 
A copybook, DFHEIBLK, that contains a DSECT that describes the EIB, is also included automatically.
 
The program must have an END statement because the translator does not otherwise insert the default macros. Also CSECT or START and END must be in uppercase for the translator to recognize them.
 
The example in Figure 1 shows a simple assembler language application program that uses the BMS command SEND MAP to send a map to a terminal, followed by the output after program INSTRUCT is translated. 
Figure 1. Source program and translated code for a CICS commandSource program
 
INSTRUCT CSECT
         EXEC CICS SEND MAP('DFH$AGA') MAPONLY ERASE
         END
 
 
This source program is translated to:
 
         DFHEIGBL ,                INSERTED BY TRANSLATOR
INSTRUCT CSECT
         DFHEIENT                  INSERTED BY TRANSLATOR
*        EXEC CICS SEND MAP('DFH$AGA') MAPONLY ERASE
         DFHECALL =X'1804C0000800000000046204000020',
               (CHA7,=CL7'DFH$AGA*'),(______RF,DFHEIV00)
         DFHEIRET                  INSERTED BY TRANSLATOR
         DFHEISTG                  INSERTED BY TRANSLATOR
         DFHEIEND                  INSERTED BY TRANSLATOR
         END 


Sample programs
A set of sample application programs is provided to show how EXEC CICS commands can be used in a program written in assembler language. These programs are AMODE(64) and use relative addressing, except for DFH$AREP. DFH$AREP uses relative addressing but is AMODE(31) because it demonstrates the use of the HANDLE CONDITION LABEL command.

Table 1. Sample programs



Sample program
 
Map set
 
Map source
 
Transaction ID
 



DFH$AMNU Operator instruction (3270)
 
DFH$AGA
 
DFH$AMA
 
AMNU
 


DFH$AALL Update (3270)
 
DFH$AGB
 
DFH$AMB
 
AADD, AINQ, AUPD
 


DFH$ABRW Browse (3270)
 
DFH$AGC
 
DFH$AMC
 
ABRW
 


DFH$AREN Order entry (3270)
 
DFH$AGK
 
DFH$AMK
 
AORD
 


DFH$ACOM Order entry queue print (3270)
 
DFH$AGL
 
DFH$AML
 
AORQ
 


DFH$AREP Report (3270)
 
DFH$AGD
 
DFH$AMD
 
AREP
 

The transaction and program definitions are provided in group DFH$AFLA in the CSD and can be installed using the following command: CEDA INSTALL GROUP(DFH$AFLA) 
The following record description files are provided: 
DFH$AFIL: FILEA record descriptor
DFH$AL86: L860 record descriptor

Extensions to dynamic storage
 

You can extend dynamic storage to provide extra storage for user variables by defining these variables in your source program in a DSECT called DFHEISTG.
 

24-bit and 31-bit addressing mode

For AMODE(24) and AMODE(31) programs, the maximum amount of dynamic storage obtainable using the DFHEISTG DSECT is 65 264 bytes. DFHEISTG is a reserved name. This storage is initialized to X'00'. At translation, the translator inserts the DFHEISTG macro immediately following your DFHEISTG DSECT instruction. In this way, the DSECT describes dynamic storage needed for the parameter list, for the command-level interface, and for any user variables. At link-edit time, use the STORAGE option of the CEEXOPT macro to ensure that the DFHEISTG storage is initialized to x'00', for example, CEEXOPT STORAGE=(,,00). Make sure that your application propagates or initializes any constants that are defined in the user DFHEISTG area.
 
The example in Figure 1 shows a simple assembler language application program that uses such variables in dynamic storage. 
Figure 1. Translated code for user variablesSource program
 
DFHEISTG DSECT
         COPY  DFH$AGA           INPUT MAP DSECT
         COPY  DFH$AGB           OUTPUT MAP DSECT
MESSAGE  DS    CL39
INQUIRY  CSECT
         EXEC CICS RECEIVE MAP('DFH$AGA')
         MVC   NUMBO,KEYI
         MVC   MESSAGE,=CL(L'MESSAGE)'THIS IS A MESSAGE'
         EXEC CICS SEND MAP('DFH$AGB') ERASE
         END
 
 
This source program is translated to:
 
         DFHEIGBL ,                INSERTED BY TRANSLATOR
DFHEISTG DSECT
         DFHEISTG                  INSERTED BY TRANSLATOR
         COPY DFH$AGA              INPUT MAP DSECT
         COPY DFH$AGB              OUTPUT MAP DSECT
MESSAGE  DS    CL39
INQUIRY  CSECT
         DFHEIENT                  INSERTED BY TRANSLATOR
*        EXEC CICS RECEIVE MAP('DFH$AGA')
         DFHECALL =X'1802C0000800000000040900000020',
               (CHA7,=CL7'DFH$AGA*'),(______RF,DFH$AGAI)
         MVC   NUMBO,KEYI
         MVC   MESSAGE,=CL(L'MESSAGE)'THIS IS A MESSAGE'
*        EXEC CICS SEND MAP('DFH$AGB') ERASE
         DFHECALL =X'1804C000080000000004E204000020',
               (CHA7,=CL7'DFH$AGB*'),(______RF,DFH$AGBO)
         DFHEIRET                  INSERTED BY TRANSLATOR
         DFHEISTG                  INSERTED BY TRANSLATOR
         DFHEIEND                  INSERTED BY TRANSLATOR
         END 

64-bit addressing mode

For non-Language Environmentr AMODE(64) assembler language programs, the DFHEISTG macro generates an AMODE(64) DSECT. DFHEISTG storage is obtained from 31-bit storage (above 16 MB but below 2 GB), not from 64-bit storage. The maximum amount of dynamic storage obtainable using the DFHEISTG DSECT is 65 264 bytes. This storage is initialized to X'00'. 

At translation, the translator inserts the DFHEISTG macro immediately following your DFHEISTG DSECT instruction. In this way, the DSECT describes dynamic storage needed for the parameter list, for the command-level interface, and for any user variables.
 
CICSr defines the front portion of DFHEISTG storage. 

The EIB pointer, DFHEIBP, and the COMMAREA pointer, DFHEICAP, are set up before the DFHEIENT macro returns control to the application program. These pointers are 64-bit pointers in 24-bit or 31-bit storage.


Use List and Execute Forms of macros. Some HLASM macros will have two special formats for re-entrant programmers: a List and Execute form. This is because many macros aren't suitable for re-entrant programs by default. Or in other words, they change their own storage when expanded out. You use the List and Execute forms like this: 
You specify the List form in the working storage - it saves storage for the Execute form. 
You use the Execute form, pointing to the List form. This forces the macro to use your working storage, rather than changing storage inline. 
Whenever you use a macro in a re-entrant program, check to see if it has separate List and Execute forms. If it does, use them. Our example below shows how. 

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


*=====================================
* Main Program
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

@WORKL   EQU   *-WORK             Length

The decision about whether to use GETMAIN or STORAGE OBTAIN to obtain virtual storage and FREEMAIN or STORAGE RELEASE to release the storage depends on several conditions: 
•The address space control (ASC) mode of your program. If it is in AR mode, use the STORAGE macro.
•The address space that contains the storage your program wants to obtain or release. If the storage is in an address space other than the primary, use the STORAGE macro.
•Whether the program requires a branch entry or a stacking PC entry to the macro service. Using the branch entry on the GETMAIN or FREEMAIN macro is more difficult than using the STORAGE macro. Therefore, you might use STORAGE OBTAIN instead of GETMAIN for ease of coding, for example, when your program: ?Is in SRB mode
?Is in cross memory mode
?Is running with an enabled, unlocked, task mode (EUT) FRR

The branch entry (BRANCH parameter on GETMAIN or FREEMAIN) requires that your program hold certain locks. STORAGE does not have any locking requirement.


If your program runs in an environment where it can issue the FREEMAIN macro (as specified by the conditions listed above), you can use FREEMAIN to free storage that was originally obtained using STORAGE OBTAIN. You can also use STORAGE RELEASE to release storage that was originally obtained using GETMAIN.
 
 

          LA    R6,32                    length for obtain
          STORAGE OBTAIN,LENGTH=(6),ADDR=(7),LOC=ANY
+         CNOP   0,4
+         B      IHB0001B                     .BRANCH AROUND DATA
+IHB0001F DC     BL1'00000000'                        .FLAGS        @D5C
+         DC     AL1(0*16)                    .KEY
+         DC     AL1(0)                       .SUBPOOL
+         DC     BL1'00110010'                .FLAGS
+IHB0001B DS     0F
+         LR     0,6                          .STORAGE LENGTH
+         L      15,IHB0001F                  .CONTROL INFORMATION
+         L      14,16(0,0)                   .CVT ADDRESS
+         L      14,772(14,0)                 .ADDR SYST LINKAGE TABLE
+         L      14,160(14,0)                 .OBTAIN LX/EX FOR OBTAIN
+         PC     0(14)                        .PC TO STORAGE RTN
+         LR     7,1                          .SAVE ADDR OF STORAGE
     



This STORAGE OBTAIN is incorrect and gets 6 bytes and not 32:

          LA    R6,32                    length for obtain
          STORAGE OBTAIN,LENGTH=6,ADDR=(7),LOC=ANY
+         CNOP   0,4
+         B      IHB0002B                     .BRANCH AROUND DATA
+IHB0002L DC     A(6)                         .STORAGE LENGTH
+IHB0002F DC     BL1'00000000'                        .FLAGS        @D5C
+         DC     AL1(0*16)                    .KEY
+         DC     AL1(0)                       .SUBPOOL
+         DC     BL1'00110010'                .FLAGS
+IHB0002B DS     0F
+         L      0,IHB0002L                   .STORAGE LENGTH
+         L      15,IHB0002F                  .CONTROL INFORMATION
+         L      14,16(0,0)                   .CVT ADDRESS
+         L      14,772(14,0)                 .ADDR SYST LINKAGE TABLE
+         L      14,160(14,0)                 .OBTAIN LX/EX FOR OBTAIN
+         PC     0(14)                        .PC TO STORAGE RTN
+         LR     7,1                          .SAVE ADDR OF STORAGE 
 
Adds numerous 32-bit immediate-operand instructions
 ADD IMMEDIATE (AFI, AGFI)
 ADD LOGICAL IMMEDIATE (ALFI, ALGFI)
 AND IMMEDIATE (NIHF, NILF)
 COMPARE IMMEDIATE (CFI, CGFI)
 COMPARE LOGICAL IMMEDIATE (CLFI, CLGFI)
 EXCLUSIVE OR IMMEDIATE (XIHF, XILF)
 INSERT IMMEDIATE (IIHF, IILF)
 LOAD IMMEDIATE (LGFI)
 LOAD LOGICAL IMMEDIATE (LLIHF, LLILF)
 OR IMMEDIATE (OIHF, OILF)
 SUBTRACT LOGICAL IMMEDIATE (SLFI, SLGFI)
 Minimizes need for DCs or literal pool for constant values.

Adds numerous miscellaneous instructions
 FIND LEFTMOST ONE (FLOGR)
 LOAD AND TEST (LT, LTG)
- Adds RXE-format to existing RR- and RRE-formats.
 LOAD BYTE (LBR, LGBR)
- Adds RRE format to existing LB and LGB
 LOAD HALFWORD (LHR, LGHR)
- Adds RRE format to existing LH and LGH
 LOAD LOGICAL CHARACTER (LLC, LLCR, LLGCR)
- Adds 32-bit RXY-format, and 32- and 64-bit RRE-formats
 LOAD LOGICAL HALFWORD (LLH, LLHR, LLGHR)
- Adds 32-bit RXY-format, and 32- and 64-bit RRE-formats  Advantages:
 Fewer storage references
 Smaller code image

EXTRACT CPU TIME (ECTG) instruction:
Problem-state instruction
Can provide most data provided by TIMEUSED
Substantially less overhead
May facilitate better measurement of module flow, instruction sequences,
micro-accounting, &c.
Requires access to SCP-maintained fields:
-Task-time used
-CPU timer at last dispatch
-Scaling factor for secondary CPUs.

Adds two 256-bit secure-hash-algorithm (SHA) functions:
 COMPUTE INTERMEDIATE MESSAGE DIGEST
 COMPUTE FINAL MESSAGE DIGEST
 Adds two 128-bit advanced-encryption-standard (AES)
functions:
 CIPHER MESSAGE WITH CHAINING
 CIPHER MESSAGE (sans chaining)
 Adds 64-bit pseudo-random-number-generation facility
 CIPHER MESSAGE WITH CHAINING

MVCOS provides ber MOVE CHARACTER
True length specified in a register (no need for EXECUTE)
Moves up to 4K in one execution
Moves from any address-space control (ASC) to any other
Moves from any key to any other
Key and ASC for source and destination may be explicitly programspecified
or use current-PSW values
May be faster than MOVE LONG for 4K-byte moves, but .
Will likely be slower than executed MVC for < 256-byte move.
 Equivalent to MVCP, MVCS, MVCDK, MVCSK, MVCK
Except the above are limited to 256 bytes; MVCOS is not.
Available to problem-state code (subject to PSW key mask)

Without Extended Immediate |    With Extended Immediate

SG R2,=FD'12345678'             AGFI R2,-12345678
_
LG R5,678(R9,R10)               LTG R5,678(R9,R10)
LTGR R5,R5
_
SLLG R1,R1,48                   LGHR R1,R1
SRAG R1,R1,48
_
XG R5,=X'00000000000000FF'      LLGCR R5,R5  
_
LG R0,=X'8000000000000000'      FLOGR R2,R4
LGHI R2,R0
LOOP LTGR R1,R0
JZ DONE
NGR R1,R4
JNZ DONE
SRLG R0,R0,1
AGHI R2,1
J LOOP
DONE LGR R3,R4
XGR R3,R1

STORE CLOCK FAST (STCKF)
 If you do not require monotonically-advancing TOD-clock
value, replace STCK with STCKF
- Reassemble
- Zap
- Conditionally alter STCKs
 EXTRACT CPU TIME (ECTG)
 z/OS TIMEUSED macro can branch-enter service routine that
will execute ECTG.
- Either conditionally, depending on availability, or
- Always issue ECTG.
 Where TIMEUSED is not available, or where branch-entry to
z/OS TIMEUSED service is still too expensive, ECTG may be
coded inline
- Requires intimate knowledge of O/S task-timing structures.

Instruction
COMPARE LOGICAL IMMEDIATE AND BRANCH CLIB
COMPARE LOGICAL IMMEDIATE AND BRANCH CLGIB
COMPARE AND BRANCH CRB ECF6 Register S(12)
COMPARE AND BRANCH CGRB ECE4 S(12)
COMPARE AND BRANCH RELATIVE CRJ EC76 Relative
COMPARE AND BRANCH RELATIVE CGRJ EC64 Relative
COMPARE IMMEDIATE AND BRANCH CIB ECFE S(12)
COMPARE IMMEDIATE AND BRANCH CGIB ECFC S(12)
COMPARE IMMEDIATE AND BRANCH RELATIVE CIJ EC7E Relative
COMPARE IMMEDIATE AND BRANCH RELATIVE CGIJ EC7C Relative
COMPARE LOGICAL AND BRANCH RELATIVE CLRJ EC77 Relative
COMPARE LOGICAL AND BRANCH RELATIVE CLGRJ EC65 Relative
COMPARE LOGICAL IMMEDIATE AND BRANCH RELATIVE CLGIJ EC7D Relative
COMPARE LOGICAL IMMEDIATE AND BRANCH RELATIVE CLIJ EC7F Relative
COMPARE LOGICAL AND BRANCH CLGRB ECE5 S(12)
COMPARE LOGICAL AND BRANCH CLRB

COMPARE RELATIVE LONG CRL C6D RL
COMPARE RELATIVE LONG CGFRL C6C
COMPARE RELATIVE LONG CGRL C68
COMPARE HALFWORD RELATIVE LONG CHRL C65
COMPARE HALFWORD RELATIVE LONG CGHRL C64
COMPARE LOGICAL RELATIVE LONG CLRL C6F
COMPARE LOGICAL RELATIVE LONG CLGFRL C6E
COMPARE LOGICAL RELATIVE LONG CLGRL C6A
COMPARE LOGICAL RELATIVE LONG CLGHRL C66
COMPARE LOGICAL RELATIVE LONG CLHRL

COMPARE AND TRAP CRT B972 Register
COMPARE AND TRAP CGRT B960
COMPARE IMMEDIATE AND TRAP CIT EC72
COMPARE IMMEDIATE AND TRAP CGIT EC70
COMPARE LOGICAL AND TRAP CLRT B973
COMPARE LOGICAL AND TRAP CLGRT B961
COMPARE LOGICAL IMMEDIATE AND TRAP CLFIT EC73
COMPARE LOGICAL IMMEDIATE AND TRAP CLGIT EC71
(Data Exception:Program Interruption:(DXC = FF hex))

ADD IMMEDIATE ASI EB6A Immediate
ADD IMMEDIATE AGSI EB7A
ADD LOGICAL WITH SIGNED IMMEDIATE ALSI EB6E
ADD LOGICAL WITH SIGNED IMMEDIATE ALGSI EB7E
COMPARE HALFWORD IMMEDIATE CHHSI E554
COMPARE HALFWORD IMMEDIATE CHSI E55C
COMPARE HALFWORD IMMEDIATE CGHSI E558
COMPARE LOGICAL IMMEDIATE CLHHSI E555
MOVE [IMMEDIATE] MVHHI E544
MOVE [IMMEDIATE] MVHI E54C
MULTIPLY SINGLE IMMEDIATE MSGFI C20
MOVE [IMMEDIATE] MVGHI E548 S(12) S Immediate S
MULTIPLY SINGLE IMMEDIATE MSFI
COMPARE LOGICAL IMMEDIATE CLGHSI E556
COMPARE LOGICAL IMMEDIATE CLFHSI E55D

LOAD RELATIVE LONG LRL C4D RL
LOAD RELATIVE LONG LGFRL C4C
LOAD RELATIVE LONG LGRL C48
LOAD HALFWORD RELATIVE LONG LHRL C45
LOAD HALFWORD RELATIVE LONG LGHRL C44
LOAD LOGICAL RELATIVE LONG LLGFRL C4E
LOAD LOGICAL HALFWORD RELATIVE LONG LLHRL C42
LOAD LOGICAL HALFWORD RELATIVE LONG LLGHRL C46
STORE RELATIVE LONG STRL
STORE RELATIVE LONG STGRL
STORE HALFWORD RELATIVE LONG STHRL C47

COMPARE HALFWORD CGH E334 S(20)
LOAD ADDRESS EXTENDED LAEY E375
LOAD AND TEST LTGF
MULTIPLY MFY E35C
MULTIPLY HALFWORD MHY E37C

EXECUTE RELATIVE LONG (EXRL)

Left-to-right (TRTE) or right-to-left (TRTRE) processing

Message-Security-Assist Extension 2:
Adds advanced-encryption-standard (AES) functions
for message ciphering
- AES-192 algorithm
- AES-256 algorithm
- With or without chaining
MSA SHA-512 Facility.
Adds two functions for generating intermediate- and
final-message digests
- SHA-512 algorithm
- Also, SHA-384 (same as SHA-512 algorithm, but with
different initial chaining values).



Extended branch mnemonics for "Long" relative branches
BROL JLO Mask=1 "Branch Relative Long if Ones"
BRHL BRPL JLH JLP Mask=2 "Jump Long if High"
BRLL BRML JLL JLM Mask=4
BRNEL BRNZL JLNE JLNZ Mask=7
BREL BRZL JLE JLZ Mask=8
BRNLL BRNML JLNL JLNM Mask=11
BRNHL BRNPL JLNH JLNP Mask=13
BRNOL JLNO Mask=14
BRUL JLU Mask=15 "Jump Long Unconditionally"

#####

cics relative addressing

C:\Lang\zos\ASM_cics_relative.txt

#####

"C:\PDF\ZOS\ABC\ASM\share_asm_tips_S9281S.pdf"

Better: define a constant containing the message:
MVC Buffer(L'Msg3),Msg3
Ä Ä Ä
Msg3 DC C'Message of (I don''t care how many) characters...'

#####

Better:
BufLen Equ 133 Define the buffer length
MVI Buffer,C' ' Clear a buffer to blanks
MVC Buffer+1(BufLenÄ1),Buffer Ripple the first blank
Ä Ä Ä
Buffer DS CL(Buflen)

#####

&Name Start
J S&SysNdx The Assembler knows where to go:
DC 18F'0' Corrected!
DC C'Assembled &SysDatC '
DC C'Time &SysTime '
DC C'At Site &ThisLoc.' ... Additional
DC C'With HLASM &SysVer. ' ... signature
DC C'on System &System_ID.' ... information
S&SysNdx STM R14,R12,12(R13)

#####

A better method: let the Assembler do all the work for you
RecHead DC Y(RecLen) Record length value (as usual)
Field1 DS CL44
Field2 DS CL55
Ä Ä Ä
Field999 DS CL66
RecLen Equ *ÄRecHead Define the length
Org RecHead ReÄposition at start of record
ARecord DS 0CL(RecLen) Define name and length of entire record
Org , ReÄposition after the record

#####

Better: define the insertion points where the Buffer is defined
Buffer DS CL133
Org Buffer+64 First insertion point
BufIns1 DS CL12
Org Buffer+82 Second insertion point
BufIns2 DS CL10
Org , Adjust Location Counter
Ä Ä Ä
MVC BufIns1,Insert1 Insert something in a message
MVC BufIns2,Insert2 Insert something in a message

#####

Still better: define a DSECT to map the buffer area
USING BuffMap,Buffer Dependent USING statement
MVC BufIns1,Insert1 Insert something in a message
MVC BufIns2,Insert2 Insert something in a message
Ä Ä Ä
Buffer DS CL(BuffMapL)
Insert1 DS CL12
Insert2 DS CL10
Ä Ä Ä
BuffMap DSECT ,
DS CL64 Offset to first insertion point
BufIns1 DS CL12 First insertion field
DS CL6 Position at second insertion point
BufIns2 DS CL10 Second insertion field
BuffMapL Equ *ÄBuffMap Length of BufferÄmapping DSECT

#####

Code may contain two declarations of the same record structure
(say, OldRec and NewRec)
³New Record Declaration ³Old Record Declaration
ÃÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÅÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
Two different copy structures

Better to usw one:
Better: define a single DSECT describing the record
Record DSECT , Record description
RecType DS CL10 Record type
RecID DS CL4 Record ID
RecName DS CL40 Name
RecAddr DS CL66 Address
RecPhone DS CL12 Phone number
Ä Ä Ä etc.
RecYear DS F Processing year
RecDay DS F Processing day of year
Ä Ä Ä etc.
RecLen Equ *ÄRecord Record length
Ä Ä Ä
NewRec DS 0D,CL(RecLen) Area for new record
OldRec DS 0D,CL(RecLen) Area for old record

Now:

MyProg CSECT , Resume program control section
Ä Ä Ä
LA 7,OldRec Base register for OldRec
LA 4,NewRec Base register for NewRec
Old USING Record,7 Map the Record structure on OldRec
New USING Record,4 Map the Record structure on NewRec
CLC New.RecID,Old.RecID Compare record IDs
JNE NotThisOne Go do something else
MVC New.RecName,Old.RecName Copy name field from Old to New

With existing base registers for code and each record instance
 Labeled Dependent USING statements; qualifiers are again Old and New
- The second USING operand is relocatable, not a register number
Old Using Record,OldRec Map OldRec (labeled dependent USING)
New Using Record,NewRec Map NewRec (labeled dependent USING)
Ä Ä Ä
MVC New.RecName,Old.RecName Copy name field from Old to New

#####

Stuff tends to accumulate even when it's no longer needed
- Problem: the next person may not be sure something is not needed, so leaves
it untouched
- Worse: a statement label in dead code could be an inviting branch target
 Solution: specify Assembler option XREF(SHORT,UNREFS) (the default

#####

New Instructions:

reg notation ref:
HH High Half's High Half (bits 0-15)
HL High Half's Low Half (bits 16-31)
LH Low Half's High Half (bits 32-47)
LL Low Half's Low Half (bits 48-63)
H High Half (bits 0-31)
L Low Half (bits 32-63)

Load and insert instructions with immediate operands
Arithmetic Load 
LHI 
LGHI 
LGFI

Logical Load
LLIHH
LLIHL
LLILH
LLILL
LLIHF
LLILF

Insert 
IILH
IILL
IILF 
IIHH
IIHL
IIHF

For example, these two instructions have the same result:
ICM 5,B'1100',=C' LH' Insert ' LH' into bits 0-15 of GR5
IILH 5,C' LH' The same with an immediate operand
except that IILH avoids a memory reference. 

Similarly, these two are equivalent:
ICMH 3,B'1111',=F' -3' Insert -3 into bits 0-31 of GG3
IIHF 3,-3 The same with an immediate operand

You can think of the IILF instruction as though it's a "Load Immediate" instruction:130
IILF 11,123456789 has the same result as...
L 11,=F'123456789' so you could even think of it as L
*** LI 11,123456789 ...but not as LI!

Eliminate memory references and constants in storage
Old Ways Better Ways
L 1,=F'275'             LHI 1,275
LH 2,=H'Ä5678'          LHI 2,Ä5678
L 3,=F'123456789'       LGFI 3,123456789 (64Äbit register)
                        IILF 3,123456789 (32Äbit register)

 Eliminate unnecessary register zeroing, needless memory references
Old Way                 Better Way
SR 1,1
ICM 1,B'11',=C'AB'      LLILL 1,C'AB'

Arithmetic Add/Subtract 
AHI 
AFI 
AGHI 
AGFI

Logical Add/Subtract 
ALFI
SLFI
ALGFI
SLGFI


A7A AHI RI Add Halfword Immediate
(3216)
A7B AGHI RIL Add Halfword Immediate
(6416)
C29 AFI RIL Add Immediate (32) 
C28 AGFI RIL Add Immediate (6432)
C2B ALFI RIL Add Logical Immediate (32) 
C2A ALGFI RIL Add Logical Immediate
(6432)
C25 SLFI RIL Subtract Logical Immediate
(32)
C24 SLGFI RIL Subtract Logical Immediate
(6432)


Arithmetic Compare 
CHI 
CFI, 
CRL 
CGHI 
CGFI,
CGFRL

Logical Compare 
CLFI 
CLGFI

A7E CHI RI Compare Halfword Immediate
(3216)
A7F CGHI RI Compare Halfword Immediate
(6416)
C2D CFI RIL Compare Immediate (32) C2C CGFI RIL Compare Immediate
(6432)
C2F CLFI RIL Compare Logical Immediate
(32)
C2E CLGFI RIL Compare Logical Immediate
(6432)

Multiply 
MHI 
MGHI

A7C MHI RI Multiply Halfword Immediate
(3216)
A7D MGHI RI Multiply Halfword Immediate
(6416)

Old Ways                Better Ways
A 6,=A(Offset*4)        AFI 6,Offset*4
CH 4,=H'Ä1'             CHI 4,Ä1
MH 2,=Y(ItemLen)        MHI 2,ItemLen
CL 9,=X'107429B3'       CLFI 9,X'107429B3'

#####
Putting Constants First
. Loc Object Code Addr1 Addr2 Stmt Source Statement
.00000000 00000000 00000036             1 MYPGM CSECT ,
.00000000 C0F4 0000 0013 00000026       2 JLU CODE
.00000006 C5A885C381A38388              3 DC CL10'EyeCatcher`
.00000010 00000010 00000036             4 DATA LOCTR ,
.00000026 00000026 00000036             5 CODE LOCTR ,
.00000026 18CF                          6 LR R12,R15
. R:C 00000000                          7 USING MYPGM,R12
. 8 * .
. 9 * . (code here)
. 10 * .
.00000028 5910 C018 00000018            11 C R1,=F'1E4'
.0000002C 4120 C01C 0000001C            12 LA R2,=C'An example'
.00000030 E330 C010 0004 000000         10 13 LG R3,=AD(123)
. 14 * .
. 15 * .
.00000008 00000008 00000036             16 DATA LOCTR ,
.00000010                               17 LTORG ,
.00000010 000000000000007B              18 =AD(123)
.00000018 00002710                      19 =F'1E4'
.0000001C C1954085A7819497              20 =C'An example'
. 21 * .
. 22 * . (other constants)
. 23 * .
. 43                                    END ,

#####


Loading the Address of an Area Within
Your Program
 Without a base register, the LA instruction will not work.
 On machines with z/Architecture (and N3 ESA/390):
LARL Rx,ADDRESS

no LAR instruction
1. BASR Rx,0
AHI Rx,ADDRESS-*
LA Rx,0(,Rx)
.
2. CNOP 0,4
JAS Rx,*+8
DC A(ADDRESS-*)
AL Rx,0(,Rx)
LA Rx,0(,Rx)
.
3. L Rx,=A(ADDRESS)

#####

Establishing Temporary Addressability
 You might need temporary addressability, especially when
using certain IBM macros (such as those for TSO/E.).
 Be sure to explicitly denote the USING range. The default
range of 4K can lead to USING overlap warnings from the
assembler.
BASR Rx,0
USING (*,TEMPX),Rx
.
. (code needing addressability)
.
TEMPX DC 0H

#####
Branching - How does a branch mask work
þ B - Branch (unconditionally)
- This is translated to the BRANCH ON CONDITION (BC) instruction with a mask of 15
þ So, 15  b'1111'  8+4+2+1
þ Thus the branch is taken if CC 0, 1, 2 or 3 is met, i.e. ALWAYS
#####

Branch on Condition (Relative) BCR [JC] BCRL [JLC]

Relative branch on condition instructions and extended mnemonics 32
 (A) = after arithmetic, (C) = after comparison, (T) = after test
- Be careful: JLxx means "Jump Long", not "Low"
RI Mnemonics    RIL Mnemonics   Mask    Meaning
BRC JC          BRCL JLC        M1      Conditional Branch
BRU J           BRUL JLU        15      Unconditional Branch
BRNO JO         BRNOL JLNO      14      Branch if Not Ones (T)
                                        Branch if No Overflow (A)
BRNH JNH        BRNHL JLNH      13      Branch if Not High (C)
BRNP JNP        BRNPL JLNP      13      Branch if Not Plus (A)
BRNL JNL        BRNLL JLNL      11      Branch if Not Low (C)
BRNM JNM        BRNML JLNM      11      Branch if Not Minus (A)
                                        Branch if Not Mixed (T)
BRE JE          BREL JLE        8       Branch if Equal (C)
BRZ JZ          BRZL JLZ        8       Branch if Zero(s) (A,T)
BRNZ JNZ        BRNZL JLNZ      7       Branch if Not Equal (C)
BRNE JNE        BRNEL JLNE      7       Branch if Not Zero (A,T)
BRL JL          BRLL JLL        4       Branch if Low (C)
BRM JM          BRML JLM        4       Branch if Minus (A)
                                        Branch if Mixed (T)
BRH JH          BRHL JLH        2       Branch if High (C)
BRP JP          BRPL JLP        2       Branch if Plus (A)
BRO JO          BROL JLO        1       Branch if Ones (T)
Branch if Overflow (A)
    JNOP        JLNOP           0       No Operation
(A) = after arithmetic, (C) = after comparison, (T) = after test
- Be careful: JLxx means "Jump Long", not "Low"

Branch on Count (Register)      BCTR    BCTGR
Branch on Count (Indexed)       BCT     BCTG
Branch on Count (Relative)      BRCT [JCT]      BRCTG [JCTG]
Branch on Index                 BXH     BXHG
                                BXLE    BXLEG
Branch on Index (Relative)      BRXH   [JXH]    BRXHG [JXHG]
                                BRXLE [JXLE]    BRXLG [JXLEG]


EXRL Execute Relative Long: no base register required
LARL Load Address Relative Long: no base register required (target must be an even address)

 Reference to EX target requires base register coverage.
 There is no EXR instruction. EXRL introduced with z10.
 To maintain similar program layout, establish temporary
addressability. Otherwise define the target with constants.

Execute Relative Long
 EXRL intended as a direct substitute for EX.
 Supports long-standing recommendations, to put the target
of the EX near the EX instruction itself, for programs
without code base register coverage.
 Hopefully, same I-Cache line or one to be fetched soon.
 Available on System z10 and higher processors.
 If you can use this, I'm jealous. Too new for our software!
.00000000 C610 0000 0005 0000000A 25 EXRL R1,DUMMYPAK
. 26 * .
. 27 * . (a few other instructions)
. 28 * .
.00000006 A7F4 0005 00000010 29 J AROUND
.0000000A F270 C0B8 E000 000000B8 00000000 30 DUMMYPAK PACK DWORD,0(*-*,R14)
.00000010 31 AROUND DC 0H

#####

BRCL/BRASL Extended Mnemonics
JLNE Jump on Not Equal BRCL 7
JLNL Jump on Not Low BRCL 11
JLNH Jump on Not High BRCL 13
JLE Jump on Equal BRCL 8
JLL Jump on Low BRCL 4
JLH Jump on High BRCL 2
JLNZ Jump on Not Zero BRCL 7
JLM Jump on Minus BRCL 4
Jump on Not BRCL 14
Overflow
JLNO
JLNM Jump on Not Minus BRCL 11arnd_adm_gm_ct l
JLNP Jump on Not Plus BRCL 13
JLZ Jump on Zero BRCL 8
JLO Jump on Overflow BRCL 1
JLP Jump on Plus BRCL 2
JLNZ Jump if Not Zero BRCL 7
JLNM Jump if Not Mixed BRCL 11
JLNO Jump if Not Ones BRCL 14
JLZ Jump if Zero BRCL 8
JLM Jump if Mixed BRCL 4
JLO Jump if Ones BRCL 1
JLU Jump Unconditional BRCL 15
In each of the BRCL cases, BR can be substituted for J. But who cares?
JASL Jump and Save BRASL

Branch and save instructions
 Example of a local subroutine:
JAS 12,LocalSub Link to internal subroutine
 Operands can be external references! For example:
EXTRN BigSub
JAS 12,BigSub (Small load module or program object)
or
JASL 12,BigSub (Large load module or program object)
 No address constants required; z/OS Binder resolves the relative offsets
Operation
Immediate-Operand Length
16 bits 32 bits
Branch

Compare and Branch Extended
Mnemonics
 Extended mnemonics for the compare and branch
instructions follow familiar pattern.
 Rather than explicitly specifying M3 value, you can append
a suffix from the following table:
NH First operand not high 12
NL First operand not low 10
NE Not equal 6
L First operand low 4
H First operand high 2
E Equal 8
Mask
Field
Suffix Meaning
Chars
CGIJNE R10,-123,LABEL
Example:
CGIJ R10,-123,6,LABEL
is equivalent to:
 No mnemonics for "zero", "ones", "positive", "mixed", etc.

CRB,
CGRB    Compare and Branch 

CRJ,CGRJ Compare and Branch Relative

CIB,
CGIB    Compare Immediate and Branch 

CIJ,CGIJ Compare Immediate and Branch Relative

Old Ways        Better Ways
CR 3,4
JNE NotSame     CRJNE 3,4,NotSame
C 9,=F'Ä99'
JL TooSmall     CIJL 9,Ä99,TooSmall
LTR 0,0
JNM NotMinus    CIJNM 0,0,NotMinus

#####

SYSSTATE ARCHLVL=1 Enables immediate and relative ops
SYSSTATE ARCHLVL=2 Enables z/Architecture ops

Example: put larger value from registers 0 and 1 into register 2
Old Way                          New Way
LR 2,0 Guess c(R0)>=c(R1)       LR 2,0 Guess
CR 0,1 Compare                  CR 0,1 Compare set cc
JNL OK Branch if correct        LOCRL 2,1 Load if c(R0)<c(R1)
LR 2,1 No, C(R0)<c(R1)

High-word instructions: 16 more 32-bit work registers!
Example:
L 8,Table_Addr Base address in low half of R8 (R8L)
LFH 8,Loop_Count Iteration count in high half of R8 (R8H)
LoopHead L 4,0(0,8) Get some data...
Ä Ä Ä Work on it
BRCTH 8,LoopHead Count down in R8H and iterate

#####

New "distinct-operand" instructions add "K" to the original mnemonic
SLLK 0,2,12 Result in R0; contents of R2 unchanged
ARK 3,4,7 Sum in R3; contents of R4 unchanged
 These instructions let you preserve a value without first copying it:
Old Way New Way
LR 3,4  ARK 3,4,7
AR 3,7

#####

AHI vs. LA
L 0,0(,6) Load GR0
LA 6,4(,6) Increment pointer
may be slightly faster than
L 0,0(,6) Load GR0
AHI 6,4 Increment pointer

#####

LOCTR keeps groups of related statements together in the source code
- They need not be together in the object code!
a...b...c ³
Code ³ All items in the 'Code' LOCTR group ³
³ d...e...f...g...h...j ³
Data ³ All items in the 'Data' LOCTR group ³
³ p...q...r...s...t...u ³
Literals ³ All items in the 'Literals' LOCTR group ³

COMP binary number 
S9 to S9(4) - stored as 2 bytes 
S9(5) to S9(9) - stored as 4 bytes 
S9(10) to S9(18) - stored as 8 bytes 
NOT aligned on a specific boundary 
also known as COMP-4 

COMP SYNC binary number on a specific boundary 
S9 to S9(4) - stored as 2 bytes on halfword 
S9(5) to S9(9) - stored as 4 bytes on fullword 
S9(10) to S9(18) - stored as 8 bytes on fullword 

Using COMP SYNC can cause "slack bytes" to be embedded within the WORKING STORAGE because of the forced alignment. This can affect questions as to the size of table entry, or computing the size of a record. 

Anything on an 01 level is automatically on a doubleword boundary. 


The 370 Instruction Set
Assembler Coding Examples       
        Table of Contents        v-14.03.28 - simoi370.htm 
        Introduction
        Problem State Instructions
        Extended Mnemonics for Branching
        Program Interruption Codes
        Sample Programs
        Mainframe JCL
        Mainframe Assembler
        Summary
        Software Agreement and Disclaimer
        Downloads and Links
        Current Server or Internet Access
        Internet Access Required
        Glossary of Terms
        Comments or Feedback
        Company Overview
The SimoTime Home Page
Table of Contents Previous Section Next Section Introduction

This sample program is written entirely in IBM 370 Assembler. The program executes each of the problem-state, non-floating-point instructions in alphabetical sequence and will run as an MVS batch job on an IBM mainframe or as a project with Micro Focus Mainframe Express (MFE) running on a Windows System.

This program may serve as a learning tool for programmers that are new to 370 assembler or as a reference for experienced programmers. For additional examples and information about assembler programming refer to the Assembler Connection of the Simotime Library.

Refer to the Download and Links section of this document for additional information about Micro Focus and the SimoTime Assembler Connection.

We have made a significant effort to ensure the documents and software technologies are correct and accurate. We reserve the right to make changes without notice at any time. The function delivered in this version is based upon the enhancement requests from a specific group of users. The intent is to provide changes as the need arises and in a timeframe that is dependent upon the availability of resources.

Copyright c 1987-2015
SimoTime Technologies
All Rights Reserved
Table of Contents Previous Section Next Section Problem State Instructions

The following table is a summary of the problem state 370 instruction set with links to the coding examples for each instruction. When linking to a 370 instruction from the following table use the browser's "back" function to return to this table.
Add     Compare Decimal (packed)        Multiply (registers)    Subtract Decimal (packed)
Add Halfword    Compare Registers       Move Characters         Set Program Mask
Add Logical     Compare and Swap        Move Inverse    Subtract (registers)
Add Logical Register    Convert to Binary       Move Characters Long    Shift Right Single
Add Decimal (packed)    Convert to Decimal      Move Immediate  Shift Right Double
Add Register    Divide  Move Numeric    Shift Right Double Logical
Branch And Link         Divide Decimal (packed)         Move with Offset        Shift Right Single Logical
Branch And Link Register        Divide Registers        Move Zone       Shift and Round Decimal
Branch And Save         Edit    aNd (register-memory)   Store
Branch And Save Register        Edit Mask       aNd (memory-memory)     Store Character
Branch on Condition     Execute         aNd Immediate   Store Clock
Branch on Condition Register    Insert Character        aNd (register-register)         Store Characters under Mask
Branch on Count         Insert Character under Mask     Or (register-memory)    Store Halfword
Branch on Count Register        Load (register)         Or (memory-memory)      Store Multiple
Branch Index High       Load Address    Or Immediate    Supervisor Call
Branch Index Low Equal  Load Complement         Or (register-register)  Test under Mask
Compare         Load Halfword   Pack    Translate
Compare Double and Swap         Load Multiple   Subtract (register-memory)      Translate and Test
Compare Halfword        Load Negative   Subtract Halfword       Unpack
Compare Logical         Load Positive   Subtract Logical        eXclusive Or (register-memory)
Compare Logical Characters      Load Register   Shift Left Single       eXclusive Or (memory-memory)
Compare Logical Characters Long         Load Test Register      Shift Left Double       eXclusive Or Immediate
Compare Logical Immediate       Multiply        Shift Left Double Logical       eXclusive Or (register-register)
Compare with Mask       Multiply Halfword       Shift Left Single Logical       Zero Add Packed
Compare Logical Register        Multiply Decimal (packed)       Subtract Logical (register)     Coding Techniques

Note:  When linking to a 370 instruction from the preceding table use the browser's "back" function to return to this table.
Table of Contents Previous Section Next Section Extended Mnemonics for Branching

The assembler compiler supports a set of Extended Mnemonics for Branching that simplify the initial coding and makes the code easier to read and understand. For example, rather than coding a branch on condition (BC) with a mask value of 8 the programmer simply codes a branch on equal (BE) and the mask is generated by the compiler.

Link to Internet   Link to Server   Explore the Extended Mnemonic Opcodes included in the IBM Mainframe Assembler Language.
Table of Contents Previous Section Next Section Program Interruption Codes

The following is a summary of the Program Interrution codes.
Code    Description
0001    Operation exception
0002    Privilidged-operation exception
0003    Execute exception
0004    Protection exception
0005    Addressing exception
0006    Specification exception
0007    Data exception
0008    Fixed-point overflow exception
0009    Fixed-point divide exception
000A    Decimal-overflow exception
000B    Decimal-divide exception
  Progrom Check, Interupt Codes
Table of Contents Previous Section Next Section Sample Programs

This example consist of two parts. The first part is the mainframe JCL required to run the program. The second part is the 370 assembler program.
Table of Contents Previous Section Next Section Mainframe JCL

The following is the mainframe JCL (ASM370J1.jcl) used to execute the program.

//ASM370J1 JOB SIMOTIME,ACCOUNT,CLASS=1,MSGCLASS=0,NOTIFY=CSIP1
//* *******************************************************************
//*       ASM370J1.JCL - a JCL Member for Batch Job Processing        *
//*       This JCL Member is provided by SimoTime Technologies        *
//*           (C) Copyright 1987-2015 All Rights Reserved             *
//*             Web Site URL:   http://www.simotime.com               *
//*                   e-mail:   helpdesk@simotime.com                 *
//* *******************************************************************
//*
//* Text   - 370 Assembler, Problem State Instruction Set
//* Author - SimoTime Technologies
//* Date   - January 01, 1997
//*
//* This 370 Assembler program will execute each of the
//* non-floating-point instructions.
//*
//* This set of programs will run on a mainframe under MVS or on a
//* Personal Computer with Windows and Micro Focus Mainframe Express.
//*
//* Micro Focus Mainframe Express, version 2.5 or later (MFE) with
//* the Assembler Option should be used to Animate or visualize the
//* execution of the sample program.
//*
//* The Animator or Debugger is an excellent tool for visualizing the
//* execution of the individual instructions as they execute.
//*
//* This is a very effective way to become familiar with the 370
//* instruction set.
//*
//* *******************************************************************
//* Step   1 of 1  This is a single step job.
//*
//I370STP1 EXEC PGM=ASM370A1
//STEPLIB  DD  DSN=SIMOTIME.DEMO.LOADLIB1,DISP=SHR
//*

Note:  Micro Focus Mainframe Express version 2.5 or later with the Assembler Option is required.
Table of Contents Previous Section Next Section Mainframe Assembler

This program does not provide much information when it is executed on the mainframe. The real value to this program is when it is animated using the 370 Assembler Option of Mainframe Express provided by Micro Focus. It is possible to watch the actual execution of each individual instruction and to immediately see the results.

Standard 370 Assembler coding guidelines are used. The labels in this example are the mnemonic opcode preceded by an "I@". For example, a CLC instruction would have a label of I@CLC.

The following member (ASM370A1.mlc) is the assembler source code that executes each of problem-state instruction in alphabetic sequence.

ASM370A1 CSECT
***********************************************************************
*             ASM370A1.MLC - This is an HLASM Program                 *
*                 Provided by SimoTime Technologies                   *
*           (C) Copyright 1987-2015 All Rights Reserved               *
*             Web Site URL:   http://www.simotime.com                 *
*                   e-mail:   helpdesk@simotime.com                   *
***********************************************************************
*                                                                     *
* Created: 1986/04/01, Simmons                                        *
* Changed: 1988/09/15, Simmons, added additional instruction          *
*                                                                     *
***********************************************************************
*                                                                     *
* Micro Focus Mainframe Express, version 2.5 or later with the        *
* Assembler Option is required.                                       *
*                                                                     *
* This program provides a sample of the syntax used to code the       *
* problem-state instructions. The real value is in the animation of   *
* this program. You can immediately see the results of each           *
* instruction execution. This is a very effective way to become       *
* familiar with the 370 instruction set.                              *
* set.                                                                *
*                                                                     *
***********************************************************************
* This program will execute the non-floating-point 370 instructions   *
* supported by MF/370. Standard 370 Assembler coding guidelines are   *
* used.                                                               *
*     Position  1 - Optional Label                                    *
*     Position 10 - Mnemonic Opcode or Directive                      *
*     Position 16 - Operands                                          *
*     Position 30 - Optional Comment                                  *
* The labels in this example are the mnemonic opcode preceded by an   *
* "I@". For example, a CLC instruction would have a label of I@CLC.   *
* Note: The comments on the EQU statements are HTML links.            *
***********************************************************************
         BALR  12,0            PREPARE A BASE REGISTER
         USING *,12            ESTABLISH BASE REGISTER
         LA    R11,WTOID
***********************************************************************
I@A      EQU   *             * SIMOHTML-TAG <A NAME="I@A"></A>
* Add 4-byte memory value to register
         L     R4,FW00XX02     x'00000002'
         A     R4,FW00XX01   * Add x'00000001' = x'00000003' cc=2
         A     R4,FW80XX05   * Add x'80000005' = x'80000008' cc=1
***********************************************************************
I@AH     EQU   *             * SIMOHTML-TAG <A NAME="I@AH"></A>
* Add 2-byte memory value to register
         AH    R4,HEX2+2     * Add HEX-2 TO REG-3
***********************************************************************
I@AL     EQU   *               <A NAME="I@AL"></A>
* Add 4-byte memory value to register
         L     R4,FW00XX02     x'00000002'
         AL    R4,FW00XX01   * Add x'00000001' result x'00000003'
         AL    R4,FW80XX05   * Add x'80000005' result x'80000008'
***********************************************************************
I@ALR    EQU   *               <A NAME="I@ALR"></A>
* Add Logical Register to Register
         ALR   R3,R4         * Add  Register-Register
***********************************************************************
I@AP     EQU   *               <A NAME="I@AP"></A>
* Add decimal (packed)
         AP    D1,D2         * Add Memory-Memory
***********************************************************************
I@AR     EQU   *               <A NAME="I@AR"></A>
* Add Register to Register
         AR    R3,R4         * Add R4 to R3, Register-Register
***********************************************************************
I@BAL    EQU   *               <A NAME="I@BAL"></A>
* The following two instructions are primarily used in 24-bit mode.
* Branch and Link, the BAL and BALR Instructions
         BAL   R9,*+4        * Load R9 with LINK ADDR,BRANCH (24-BIT)
I@BALR   EQU   *               <A NAME="I@BALR"></A>
         BALR  R9,R0         * Load R9 with LINK ADDR (24-BIT)
***********************************************************************
I@BAS    EQU   *               <A NAME="I@BAS"></A>
* The following two instructions are primarily used in 31-bit mode.
* Branch and Save, the BAS and BASR Instructions
         BAS   R10,*+4       * Load R10 with LINK ADDR,BRANCH (31-BIT)
I@BASR   EQU   *               <A NAME="I@BASR"></A>
         BASR  R10,R0        * Load R10 with LINK ADDR (31-BIT)
***********************************************************************
I@BC     EQU   *               <A NAME="I@BC"></A>
* BRANCH on Condition
         BC    15,*+8        * BRANCH to SELF-PLUS-FOUR
         B     *+4             Same as preceding instruction
***********************************************************************
I@BCR    EQU   *               <A NAME="I@BCR"></A>
* BRANCH on Condition Register
         LA    R8,BCREND       Load BRANCH-TO ADDRESS into REG-8
         BCR   15,R8         * BRANCH to ADDRESS specified in REG-8
         BR    R8              Same as preceding instruction
BCREND   EQU   *               Label for BCR-INSTRUCTION
***********************************************************************
I@BCT    EQU   *               <A NAME="I@BCT"></A>
* Branch on Count
         LA    R3,3            Load 3 into REG-3 for DECREMENTING
BCTLOOP  EQU   *
         NOP   *               NO-OPERATION to show BCT-LOOP
         BCT   R3,BCTLOOP    * Loop until REG-3 goes to ZERO
***********************************************************************
I@BCTR   EQU   *               <A NAME="I@BCTR"></A>
* Branch on Count Register
         LA    R3,3            Load 3 into REG-3 for decrementing
         LA    R4,BCTRLOOP     Load BRANCH-TO ADDRESS into REG4
BCTRLOOP EQU   *
         NOP   BCTRNEXT        NO-OPERATION to show BCTR-LOOP
         BCTR  R3,R4         * LOOP until REG-3 GOES to ZERO
BCTRNEXT EQU   *
         LA    R3,3            The BCTR may be used to decrement a REG
         BCTR  R3,R0         * If OP-2 is 0 then DECR OP-1, NO BRANCH
***********************************************************************
I@BXH    EQU   *               <A NAME="I@BXH"></A>
* BRANCH on INDEX High
         LA    R10,BXHEND      Establish BRANCH ADDRESS
         L     R4,BXHIDX       Establish INDEX
         L     R6,BXHINCR      1ST of EVEN/ODD - INCR VALUE
         L     R7,BXHCOMP      2ND of EVEN/ODD - COMP VALUE
BXHLOOP  EQU   *
         BXH   R4,R6,0(R10)  * Add INCR to IDX, BRANCH if IDX > COMP
         B     BXHLOOP         LOOP until IDX goes HIGH
         DS    0F              Force alignment
BXHIDX   DC    XL4'0000009E'   INDEX VALUE, to be INCREMENTED
BXHINCR  DC    XL4'00000002'   INCR VALUE for EVEN PAIR REG
BXHCOMP  DC    XL4'000000AA'   COMP VALUE for ODD  PAIR REG
         DS    0F
BXHEND   EQU   *
***********************************************************************
I@BXLE   EQU   *               <A NAME="I@BXLE"></A>
* BRANCH on INDEX Low-Equal
         LA    R10,BXLLOOP     Establish LOOP ADDRESS
         L     R4,BXLIDX       Establish INDEX
         L     R6,BXLINCR      1ST of EVEN/ODD - INCR VALUE
         L     R7,BXLCOMP      2ND of EVEN/ODD - COMP VALUE
BXLLOOP  EQU   *
         NOP   BXLEND          Do nothing instruction
         BXLE  R4,R6,0(R10)  * Add INCR to IDX, BRANCH if IDX LE COMP
         B     BXLEND          LOOP until IDX goes HIGH
         DS    0F              Force alignment
BXLIDX   DC    XL4'0000009E'   INDEX VALUE, to be INCREMENTED
BXLINCR  DC    XL4'00000002'   INCR VALUE for EVEN PAIR REG
BXLCOMP  DC    XL4'000000AA'   COMP VALUE for ODD  PAIR REG
         DS    0F
BXLEND   EQU   *
**********************************************************************
I@C      EQU   *               <A NAME="I@C"></A>
* Compare, Register-Memory
         BAS   R11,*+12      * Prepare for possible ABEND...
         DC    CL8'Compare.'
         L     R8,ONEBIT01
         C     R8,ONEBIT00   * COMPARE  Register-Memory
         BNL   ABEND08
**********************************************************************
I@CDS    EQU   *               <A NAME="I@CDS"></A>
* Compare DOUBLE and SWAP, Register-Memory
         CDS   R2,R4,SBYTE   * COMPARE Register-Memory
**********************************************************************
I@CH     EQU   *               <A NAME="I@CH"></A>
* Compare Halfword
         CH    R0,XBYTE      * COMPARE Register-Memory
**********************************************************************
I@CL     EQU   *               <A NAME="I@CL"></A>
* Compare Logical
         L     R8,ONEBIT01
         CL    R8,ONEBIT00   * COMPARE Register-Memory
         BNH   ABEND08
**********************************************************************
I@CLC    EQU   *               <A NAME="I@CLC"></A>
* Compare Logical Characters
         CLC   ALPHA1,ALPHA2
         BNE   ABEND08
**********************************************************************
I@CLCL   EQU   *               <A NAME="I@CLCL"></A>
* Compare Logical Characters Long
         BAS   R11,*+12      * Prepare for possible ABEND...
         DC    CL8'CLCL....'
         LA    R4,ALPHA1       Load addr of opr1-1
         LA    R5,26           Length of opr-1
         LA    R6,ALPHA2       Load addr of opr-2
         L     R7,=X'4000001A' Pad and length of opr-2
         CLCL  R4,R6         * COMPARE Memory-Memory
         BNE   ABEND08
*
         LA    R4,ALPHA1       Load addr of opr1-1
         LA    R5,26           Length of opr-1 (26)
         LA    R6,ALPHA2       Load addr of opr-2
         L     R7,=X'40000022' Pad and length of opr-2 (34)
         CLCL  R4,R6         * Compare with different lengths
         BNE   ABEND08
*
         LA    R4,ALPHA1
         LA    R5,26
         LA    R6,ALPHA3
         LA    R7,26
         CLCL  R4,R6         * COMPARE Memory-Memory
         BE    ABEND08
**********************************************************************
I@CLI    EQU   *               <A NAME="I@CLI"></A>
* Compare Logical Immediate
         BAS   R11,*+12      * Prepare for possible ABEND...
         DC    CL8'CLI.....'
I4EX     CLI   ALPHA1,C'A'
         BNE   ABEND08
**********************************************************************
I@CLM    EQU   *               <A NAME="I@CLM"></A>
* Compare Logical under Mask
         BAS   R11,*+12      * Prepare for possible ABEND...
         DC    CL8'CLM.....'
         L     R8,DATAREG8     R8 value x'FF00FF00'
         CLM   R8,10,DATA4CLM  mask=1010, storage=x'FFFF0000'
         BNE   ABEND08
         CLM   R8,5,DATA4CLM   mask=0101, storage=x'FFFF0000'
         BE    ABEND08
         CLM   R8,5,DATA4CLM+2 mask=0101, storage=x'FFFF0000'
         BNE   ABEND08
**********************************************************************
I@CLR    EQU   *               <A NAME="I@CLR"></A>
* Compare Logical (register-register)
         BAS   R11,*+12      * Prepare for possible ABEND...
         DC    CL8'CLR.....'
         L     R8,ONEBIT01
         L     R9,ONEBIT00
         CLR   R8,R9         * COMPARE LOGICAL
         BNH   ABEND08
**********************************************************************
I@CP     EQU   *               <A NAME="I@CP"></A>
* Compare Decimal (packed)
         CP    D1,D2         * COMPARE PACKED
**********************************************************************
I@CR     EQU   *               <A NAME="I@CR"></A>
* Compare (register-register)
         L     R8,ONEBIT01
         L     R9,ONEBIT00
         CR    R8,R9         * COMPARE REGISTERS
         BNL   ABEND08
**********************************************************************
I@CS     EQU   *               <A NAME="I@CS"></A>
* Compare and swap values
         CS    R1,R2,SBYTE   * COMPARE and SWAP
**********************************************************************
I@CVB    EQU   *               <A NAME="I@CVB"></A>
* Memory to register, decimal to binary
         CVB   R3,D1         * CONVERT to BINARY
**********************************************************************
I@CVD    EQU   *               <A NAME="I@CVD"></A>
* Register to memory, binary to decimal
         CVD   R3,D2         * CONVERT to DECIMAL
***********************************************************************
I@D      EQU   *               <A NAME="I@D"></A>
* Divide (register-memory)
         L     R8,HEX0         Load EVEN-NUMBERED REG-8 with 0
         L     R9,HEX4         Load ODD-NUMBERED REG-9 with 4
         D     R8,HEX2       * DIVIDE EVEN/ODD REG-8/9 value of 2
***********************************************************************
I@DP     EQU   *               <A NAME="I@DP"></A>
* Divide Decimal (memory-memory)
         DP    D1,D2+4(4)    * DIVIDE DECIMAL, STORAGE & STORAGE
***********************************************************************
I@DR     EQU   *               <A NAME="I@DR"></A>
* Divide (register-register)
         L     R8,HEX0         EVEN/ODD PAIR, RESULT = REMAINDER
         L     R9,HEX5         EVEN/ODD PAIR, RESULT = QUOTIENT
         L     R3,HEX2         DIVISOR
         DR    R8,R3         * DIVIDE, REGISTER & REGISTER
***********************************************************************
I@ED     EQU   *               <A NAME="I@ED"></A>
* Edit
         MVC   EDFLD,EDMASK    Move EDIT MASK to OUTPUT FIELD
         ED    EDFLD,EDDATA  * MASK=ALL X'20, DATA=12345
***********************************************************************
I@EDMK   EQU   *               <A NAME="I@EDMK"></A>
* Edit and Mark
         EDMK  S1,S2         * Edit-Mark, Memory-Memory
***********************************************************************
I@EX     EQU   *               <A NAME="I@EX"></A>
* Execute
         LA    R3,X'F0'        Use X'F0' as second byte of CLI
         EX    R3,I4EX       * EXECUTE CLI INST at CLI ADDRESS
***********************************************************************
I@IC     EQU   *               <A NAME="I@IC"></A>
* Insert Character
         IC    R0,XBYTE      * INSERT Register-Memory
***********************************************************************
I@ICM    EQU   *                     <A NAME="I@ICM"></A>
* Insert Character under Mask
         LA    R4,0                  Set REG-4 to ZERO
         LA    R5,0                  Set REG-5 to ZERO
         ICM   R4,MASK01,HEX1234   * Insert HEX-04, position 4
         ICM   R4,MASK02,HEX1234+1 * Insert HEX-03, position 3
         ICM   R4,MASK04,HEX1234+2 * Insert HEX-02, position 2
         ICM   R4,MASK08,HEX1234+3 * Insert HEX-01, position 1
*
         ICM   R5,MASK01,HEX1234+3 * Insert HEX-04, position 4
         ICM   R5,MASK02,HEX1234+2 * Insert HEX-03, position 3
         ICM   R5,MASK04,HEX1234+1 * Insert HEX-02, position 2
         ICM   R5,MASK08,HEX1234   * Insert HEX-01, position 1
*
         BAS   R11,*+12            * Prepare for possible ABEND
         DC    CL8'ICM.....'
         L     R6,HEX4321          * Expected value
         CR    R4,R6               * Is R4 as expected,
         BNE   ABEND08
         L     R6,HEX1234          * Expected value
         CR    R5,R6               * Is R5 as expected,
         BNE   ABEND08
***********************************************************************
I@L      EQU   *               <A NAME="I@L"></A>
* Load, Register-Memory
         L     R0,XBYTE      * LOAD Register-Memory
***********************************************************************
I@LA     EQU   *               <A NAME="I@LA"></A>
* Show the different 'Load Address' functions
         LA    R8,I@LA       * Load ADDR of this routine into REG-8
         LA    R8,0          * Load ZERO to REGISTER 8
         LA    R8,1(,R8)     * Increment REGISTER-8 by 1
         LA    R8,2(,R8)     * Increment REGISTER-8 by 2
         LA    R8,3(,R8)     * Increment REGISTER-8 by 3
***********************************************************************
I@LCR    EQU   *               <A NAME="I@LCR"></A>
* Load Complement
         LA    R2,1            Load R2 with a value of 1
         LCR   R1,R2         * Result R1=x'FFFFFFFF'
         LA    R4,16           Load R4 with a value of 16
         LCR   R3,R4         * Result R3 = x'FFFFFFF0'
***********************************************************************
I@LH     EQU   *               <A NAME="I@LH"></A>
* Load Halfword
         LH    R0,XBYTE      * Load  register-memory
***********************************************************************
I@LM     EQU   *               <A NAME="I@LM"></A>
* Load Multiple
         LM    R1,R2,SBYTE   * Load  registers-memory
***********************************************************************
I@LNR    EQU   *               <A NAME="I@LNR"></A>
* Load Negative
         LNR   R1,R2         * Load register-register
***********************************************************************
I@LPR    EQU   *               <A NAME="I@LPR"></A>
* Load Positive
         LPR   R1,R2         * Load  register-register
***********************************************************************
I@LR     EQU   *               <A NAME="I@LR"></A>
* Load register-register
         LR    R1,R2         * Load register-register
***********************************************************************
I@LTR    EQU   *               <A NAME="I@LTR"></A>
* Load Test Register
         LTR   R1,R2         * Load and Test register content
***********************************************************************
I@M      EQU   *               <A NAME="I@M"></A>
* Multiply, Register-Memory
         M     R0,XBYTE      * MULTPLY Register-Memory
***********************************************************************
I@MH     EQU   *               <A NAME="I@MH"></A>
* Multiply Halfword
         MH    R0,XBYTE      * MULTPLY Register-Memory
***********************************************************************
I@MP     EQU   *               <A NAME="I@MP"></A>
* Multiply Packed Decimal
         MVC   D3,D3X          Restore D1 value
         MVC   D4,D4X          Restore D2 value
         MP    D3,D4+1(7)    * MULTPLY PACKED, length of OP2=<8
***********************************************************************
I@MR     EQU   *               <A NAME="I@MR"></A>
* Multiply, Register-pair by Register
         LA    R6,0            Load EVEN REG-6
         LA    R7,4            Load ODD  REG-7
         LA    R8,2            Load MULTIPLIER
         MR    R6,R8         * MULTIPLY REG-6/7 by REG-8
***********************************************************************
I@MVC    EQU   *               <A NAME="I@MVC"></A>
* Move Characters
         MVC   Z00,Z99       * MOVE CHARACTERS
***********************************************************************
I@MVCIN  EQU   *                     <A NAME="I@MVCIN"></A>
* Move Inverse
         MVCIN WDIGITS,XDIGITS+9   * MOVE INVERSE
***********************************************************************
I@MVCL   EQU   *               <A NAME="I@MVCL"></A>
* Move Characters Long
         LA    R4,WORK4A
         LA    R5,4
         LA    R6,FW55
         LA    R7,4
         MVCL  R4,R6         * MOVE Long Memory-Memory
*        Different length operands...
         MVI   DATA80,X'00'    Set DATA80 to low values
         MVC   DATA80+1(80),DATA80
         LA    R4,DATA80       Set address of DATA80 into R4
         LA    R5,80           Set length of operand-1 to 80
         LA    R6,SIMOTIME     Set address of SIMOTIME into R6
         L     R7,FW40XX00     Set pad character for different length
         LA    R7,46(R7)       Set length of operand-2 to 46
         MVCL  R4,R6           Move with pad character of a space
***********************************************************************
I@MVI    EQU   *               <A NAME="I@MVI"></A>
* Move Immediate
         MVI   SBYTE,I       * MOVE IMMEDIATE to STORAGE
***********************************************************************
I@MVN    EQU   *               <A NAME="I@MVN"></A>
* Move Numeric
         MVN   S1,S2         * MOVE NUMERIC
***********************************************************************
I@MVO    EQU   *               <A NAME="I@MVO"></A>
* Move with OFFSET
         MVO   S1,S2         * Rightmost 4-bits are unchanged
***********************************************************************
I@MVZ    EQU   *               <A NAME="I@MVZ"></A>
* Move Zone
         MVZ   S1,S2         * MOVE memory-memory
***********************************************************************
I@N      EQU   *               <A NAME="I@N"></A>
* And, Set OFF high order bit
         L     R1,FW55         Load R1 with X'55555555'
         MVC   WORK4A,FWAA     Move X'AAAAAAAA' to WORK4A
         N     R1,WORK4A     * AND, into R1 from STORAGE
         LA    R2,0            Load ZERO into REG-2
         BCTR  R2,0            DECR by 1, make it 'FFFFFFFF'
         N     R2,=X'7FFFFFFF' Set OFF high order bit
***********************************************************************
I@NC     EQU   *               <A NAME="I@NC"></A>
* And, storage & storage
         MVC   WORK4A,FWAA     Move X'AAAAAAAA' to WORK4A
         MVC   WORK4B,FW55     Move X'55555555' to WORK4B
         NC    WORK4A,WORK4B * AND, STORAGE & STORAGE
***********************************************************************
I@NI     EQU   *               <A NAME="I@NI"></A>
* And, immediate to storage
         MVI   WORK1A,X'AA'    Move X'AA' to WORK1A
         NI    WORK1A,X'55'  * AND, IMMEDIATE to STORAGE
***********************************************************************
I@NR     EQU   *               <A NAME="I@NR"></A>
* And, register & register
         L     R1,FW55         Load R1 with X'55555555'
         L     R2,FWAA         Load R2 with X'AAAAAAAA'
         NR    R1,R2         * AND, REGISTER & REGISTER
***********************************************************************
I@O      EQU   *               <A NAME="I@O"></A>
* Or, Set on HIGH-ORDER bit
         L     R1,FW55         Load R1 with X'55555555'
         MVC   WORK4A,FWAA     Move X'AAAAAAAA' to WORK4
         O     R1,WORK4A     * OR, into R1 from STORAGE
         LA    R2,0
         O     R2,=X'80000000' Set on HIGH-ORDER bit
***********************************************************************
I@OC     EQU   *               <A NAME="I@OC"></A>
* Or, storage & storage
         MVC   WORK4A,FWAA     Move X'AAAAAAAA' to WORK4A
         MVC   WORK4B,FW55     Move X'55555555' to WORK4B
         OC    WORK4A,WORK4B * OR, STORAGE & STORAGE
***********************************************************************
I@OI     EQU   *               <A NAME="I@OI"></A>
* Or, immediate & storage
         MVI   WORK1A,X'AA'    Move X'AA' to WORK1A
         OI    WORK1A,X'55'  * OR, IMMEDIATE & STORAGE
***********************************************************************
I@OR     EQU   *               <A NAME="I@OR"></A>
* Or, register & register
         L     R1,FW55         Load R1 with X'55555555'
         L     R2,FWAA         Load R2 with X'FFFFFFFF'
         OR    R1,R2         * OR, REGISTER & REGISTER
***********************************************************************
I@PACK   EQU   *               <A NAME="I@PACK"></A>
* Pack Decimal
         PACK  D2,Z2         * PACK ZONED-DECIMAL to PACKED-DECIMAL
***********************************************************************
I@S      EQU   *               <A NAME="I@S"></A>
* Subtract, register-memory
         S     R0,XBYTE      * Subtract register-memory
***********************************************************************
I@SH     EQU   *               <A NAME="I@SH"></A>
* Subtract Halfword
         SH    R0,XBYTE      * Subtract register-memory
***********************************************************************
I@SL     EQU   *               <A NAME="I@SL"></A>
* Subtract Logical
         SL    R0,XBYTE      * Subtract register-memory
***********************************************************************
I@SLA    EQU   *                     <A NAME="I@SLA"></A>
* Shift Left
*
* The 1ST-OPERAND is a 32-bit single register.
* Only the rightmost 31-bit part of this signed
* value is shifted, the lefmost sign-bit remains
* unchanged.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
* of bit positions to be shifted.
*
* If an overflow occurs then CONDITION CODE 3 is
* set.
*
         L     R10,=X'81010101'      Load REGISTER
         SLA   R10,X'01'           * Shift left 1-bit position
***********************************************************************
I@SLDA   EQU   *                     <A NAME="I@SLDA"></A>
* Shift Left Double
*
* The 1ST-OPERAND is a 64-bit EVEN/ODD register
* pair. Only the rightmost 63-bit part of this
* signed value is shifted, the lefmost sign-bit
* remains unchanged.
*
* NOTE: If an ODD/EVEN pair is specified then an
* 0C6 error will occur.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
*
*
* If an overflow occurs then CONDITION CODE 3 is
* set.
*
         L     R8,=X'81010101'       Load EVEN REGISTER
         L     R9,=X'01010101'       Load ODD REGISTER
         SLDA  R8,X'01'            * Shift left 1-bit position
***********************************************************************
I@SLDL   EQU   *                     <A NAME="I@SLDL"></A>
* Shift Left Double Logical
*
* The 1ST-OPERAND, 64-bit EVEN/ODD register pair.
*
* NOTE: If an ODD/EVEN pair is specified then an
* 0C6 error will occur.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
* of bit positions to be shifted.
*
         L     R2,=X'05050505'       Load EVEN REGISTER
         L     R3,=X'05050505'       Load ODD REGISTER
         SLDL  R2,X'01'            * Shift left 1-bit position
***********************************************************************
I@SLL    EQU   *                     <A NAME="I@SLL"></A>
* Shift Left Single Logical
*
* The 1ST-OPERAND, 32-bit single register.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
* of bit positions to be shifted.
*
         L     R4,=X'05050505'       Load Register
         SLL   R4,X'01'            * Shift left 1-bit position
***********************************************************************
I@SLR    EQU   *               <A NAME="I@SLR"></A>
* Subtract Logical (register)
         SLR   R1,R2         * Subtract register-register
***********************************************************************
I@SP     EQU   *               <A NAME="I@SP"></A>
* Subtract, Packed Decimal
         MVC   D1,D1X        * Restore D1
         MVC   D2,D2X        * Restore D2
         SP    D2,D1         * SUBTRACT DECIMAL
***********************************************************************
I@SPM    EQU   *               <A NAME="I@SPM"></A>
         L     R1,CC00         Set BITS 2-3 of REG-1 to 0
         SPM   R1            * Set CONDITION-CODE using BITS 2-3
         L     R1,CC01         Set BITS 2-3 of REG-1 to 1
         SPM   R1            * Set CONDITION-CODE using BITS 2-3
         L     R1,CC02         Set BITS 2-3 of REG-1 to 2
         SPM   R1            * Set CONDITION-CODE using BITS 2-3
         L     R1,CC03         Set BITS 2-3 of REG-1 to 3
         SPM   R1            * Set CONDITION-CODE using BITS 2-3
***********************************************************************
I@SR     SR    R1,R2         * SUBTRACT REGISTER
***********************************************************************
I@SRA    EQU   *                     <A NAME="I@SRA"></A>
* Shift Right Single
*
* The 1ST-OPERAND is a 32-bit single register.
* only the rightmost 31-bit part of this signed
* value is shifted. The lefmost sign-bit remains
* unchanged.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
* of bit positions to be shifted.
*
* If an overflow occurs then CONDITION CODE 3 is
* set.
*
         L     R10,=X'82020202'      Load REGISTER
         SRA   R10,X'01'           * Shift right 1-bit position
***********************************************************************
I@SRDA   EQU   *                     <A NAME="I@SRDA"></A>
* Shift Right Double
*
* The 1ST-OPERAND is a 64-bit EVEN/ODD register
* pair. Only the rightmost 63-bit part of this
* signed value is shifted. The lefmost sign-bit
* remains unchanged.
*
* NOTE: If an ODD/EVEN pair is specified then an
* 0C6 error will occur.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
* of bit positions to be shifted.
*
* If an overflow occurs then CONDITION CODE 3 is
* set.
*
         L     R8,=X'82020202'       Load EVEN REGISTER
         L     R9,=X'02020202'       Load ODD REGISTER
         SRDA  R8,X'01'            * Shift right 1-bit position
***********************************************************************
I@SRDL   EQU   *                     <A NAME="I@SRDL"></A>
* Shift Right Double Logical
*
* The 1ST-OPERAND, 64-bit EVEN/ODD register pair.
*
* NOTE: If an ODD/EVEN pair is specified then an
* 0C6 error will occur.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
* of bit positions to be shifted.
*
         L     R2,=X'0A0A0A0A'       Load EVEN REGISTER
         L     R3,=X'0A0A0A0A'       Load ODD REGISTER
         SRDL  R2,X'01'            * Shift right 1-bit position
***********************************************************************
I@SRL    EQU   *                     <A NAME="I@SRL"></A>
* Shift Right Single Logical
*
* The 1ST-OPERAND is a 32-bit single register.
*
* The 2ND-OPERAND address is not used to address
* memory. The rightmost 6-bits specify the number
* of bit positions to be shifted.
*
         L     R4,=X'0A0A0A0A'       Load REGISTER
         SRL   R4,X'01'            * Shift right 1-bit position
***********************************************************************
I@SRP    EQU   *                     <A NAME="I@SRP"></A>
* Shift and Round Decimal
         SRP   SRP1,1,1            * Shift 1ST OPR one digit to left
***********************************************************************
I@ST     EQU   *                     <A NAME="I@ST"></A>
* Store, a storage value into a register
         ST    R0,REGWORK          * Store REG-0 value into memory
***********************************************************************
I@STC    EQU   *                     <A NAME="I@STC"></A>
* Store Character
*
* The 1ST-OPERAND is a 32-bit single register
* (BITS 0-31).
*
* The 2ND-OPERAND specifies a memory location.
*
* Bits 24-31 of the 1ST-OPERAND are stored at
* the 2ND-OPERAND location.
*
         L     R8,=X'C1C2C3C4'       Load C'ABCD' into REG-8
         STC   R8,REGWORK          * STORE the 'D' at REGWORK location
***********************************************************************
I@STCK   EQU   *                     <A NAME="I@STCK"></A>
* Store Clock
         STCK  STCKTIME            * Clock System-Memory
***********************************************************************
I@STCM   EQU   *                     <A NAME="I@STCM"></A>
* Store Character under Mask
*
* STCM  R1,M3,D2(B2)
*
* The contents of OPERAND-1 is stored at
* OPERAND-2 under control of OPERAND-3.
*
* The following STCM with a mask of X'F' (1111)
* is the same as a STORE (ST) instruction.
*
         L     R3,=X'A0B1C2D3'       Initialize REGISTER to STORE
         MVC   STCMDATA(4),XFF       Initialize MEMORY for STORE
         STCM  R3,MASKF,STCMDATA   * STORE all four bytes
*
* The following STCM with a mask of X'8' (1000)
* will store BYTE-0 of the contents of R3.
*
         MVC   STCMDATA(4),XFF       Initialize MEMORY for STORE
         STCM  R3,MASK8,STCMDATA   * STORE BYTE-0
*
* The following STCM with a mask of X'3' (0011)
* will store bytes 2 and 3 of the contents of R3,
* This performs the same function as a STORE-
* HALFWORD instruction (STH).
*
         MVC   STCMDATA(4),XFF       Initialize MEMORY for STORE
         STCM  R3,MASK3,STCMDATA   * STORE BYTES 2 and 3
*
* The following STCM with a mask of X'7' (0111)
* will store bytes 1, 2 and 3 of the contents of
* R3, this may be used to store 24-bit (3-BYTE)
* addresses into control blocks.
*
         MVC   STCMDATA(4),XFF       Initialize MEMORY for STORE
         STCM  R3,MASK7,STCMDATA   * STORE BYTES 1, 2 and 3
***********************************************************************
I@STH    EQU   *               <A NAME="I@STH"></A>
* Store Halfword
         STH   R3,STHDATA    * Ignore BYTES 0 & 1, STORE 2 & 3
***********************************************************************
I@STM    EQU   *               <A NAME="I@STM"></A>
* Store Multiple
         STM   R1,R2,SBYTE   * Store multiple registers to memory
***********************************************************************
I@SVC    EQU   *               <A NAME="I@SVC"></A>
* Supervisor Call
         B     *+6             Skip SVC Instruction
         SVC   27            * RETURN to CALLER via MF/370 DETACH
***********************************************************************
I@TM     EQU   *               <A NAME="I@TM"></A>
* Test under Mask
         TM    HEX1+3,X'01'  * TEST BIT for ON.
***********************************************************************
I@TR     EQU   *               <A NAME="I@TR"></A>
* Translate, memory-memory
         TR    S1,S2         * TRANSLATE memory-memory
***********************************************************************
I@TRT    EQU   *               <A NAME="I@TRT"></A>
* Translate and Test, memory-register
         TRT   S1,S2         * Translate-Test, memory-register
***********************************************************************
I@UNPK   EQU   *               <A NAME="I@UNPK"></A>
* Unpack
         UNPK  Z4,D4         * UNPACK PACKED-DECIMAL to ZONED-DECIMAL
***********************************************************************
I@X      EQU   *               <A NAME="I@X"></A>
* eXclusive or, into R1 from storage
         L     R1,FW5A         Load R1 with X'5A5A5A5A'
         MVC   WORK4A,FWAA     Move X'AAAAAAAA' to WORK4
         X     R1,WORK4A     * EXCLUSIVE OR, into R1 from STORAGE
***********************************************************************
I@XC     EQU   *               <A NAME="I@XC"></A>
* eXclusive or, storage & storage
         MVC   WORK4A,FW5A     Move X'5A5A5A5A' to WORK4A
         MVC   WORK4B,FW55     Move X'55555555' to WORK4B
         XC    WORK4A,WORK4B * EXCLUSIVE OR, STORAGE & STORAGE
*
         MVC   WORKA16,A16         Move all A's to WORKA16
         MVC   WORKZ16,Z16         Move all Z's to WORKZ16
         XC    WORKA16(16),WORKZ16 * The next three exclusive-or
         XC    WORKZ16(16),WORKA16   instructions will swap WORKA16
         XC    WORKA16(16),WORKZ16   contents with WORKZ16 contents
***********************************************************************
I@XI     EQU   *               <A NAME="I@XI"></A>
* eXclusive or, immediate & storage
         MVI   WORK1A,X'5A'    Move X'5A' to WORK1A
         XI    WORK1A,X'55'  * EXCLUSIVE OR, IMMEDIATE & STORAGE
***********************************************************************
I@XR     EQU   *               <A NAME="I@XR"></A>
* eXclusive or, register & register
         L     R1,FW5A         Load R1 with X'5A5A5A5A'
         L     R2,FWAA         Load R2 with X'FFFFFFFF'
         XR    R1,R2         * EXCLUSIVE OR, REGISTER & REGISTER
***********************************************************************
I@ZAP    EQU   *               <A NAME="I@ZAP"></A>
* ZERO and ADD Packed
         ZAP   D2,D4         * ZERO-ADD Memory-Memory
*
***********************************************************************
* NORMAL END-OF-JOB                                                   *
* RETURN to the CALLING PROGRAM OR OPERATING SYSTEM                   *
***********************************************************************
         LA    R15,0         * Set RETURN-CODE to ZERO
         BR    14            * RETURN to CALLER
***********************************************************************
* ABENDING WITH RETURN-CODE OF 8                                      *
* RETURN to the CALLING PROGRAM OR OPERATING SYSTEM                   *
***********************************************************************
ABEND08  EQU   *
         MVC   WTOID(8),0(R11)
         WTO   MF=(E,WTOBLOCK)
         LA    R15,8
         BR    14
WTOBLOCK DC    H'84'
         DC    XL2'0000'
WTOID    DC    CL8'????????'
         DC    CL72' ASM370A1 failed on or after this instruction...'
***********************************************************************
* Define Constants and EQUates                                        *
***********************************************************************
         DS    0F            + Force alignment
STCKTIME DC    XL8'0000000000000000'
D0       DC    XL8'000000000000000C'
D1       DC    XL8'000000000000001C'
D2       DC    XL8'000000000000002C'
D3       DC    XL8'000000000000003C'
D4       DC    XL8'000000000000004C'
D0X      DC    XL8'000000000000000C'
D1X      DC    XL8'000000000000001C'
D2X      DC    XL8'000000000000002C'
D3X      DC    XL8'000000000000003C'
D4X      DC    XL8'000000000000004C'
X00      DC    XL8'0000000000000000'
X55      DC    XL8'5555555555555555'
XAA      DC    XL8'AAAAAAAAAAAAAAAA'
XFF      DC    XL8'FFFFFFFFFFFFFFFF'
X00X     DC    XL8'0000000000000000'
X55X     DC    XL8'5555555555555555'
XAAX     DC    XL8'AAAAAAAAAAAAAAAA'
XFFX     DC    XL8'FFFFFFFFFFFFFFFF'
ALPHA1   DC    CL26'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
ALPHA2   DC    CL26'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
SPACE8   DC    8CL1' '
ALPHA3   DC    CL26'ABCDEFGHI?KLMNOPQRSTUVWXYZ'
WORK1A   DC    XL1'00'
WORK1B   DC    XL1'00'
WORK4A   DC    XL4'00000000'
WORK4B   DC    XL4'00000000'
FW55     DC    XL4'55555555'
FW5A     DC    XL4'5A5A5A5A'
FWAA     DC    XL4'AAAAAAAA'
SRP1     DC    XL4'0000123F'
Z0       DC    CL15'000000000000000'
Z1       DC    CL15'000000000000001'
Z2       DC    CL15'000000000000002'
Z3       DC    CL15'000000000000003'
Z4       DC    CL15'000000000000004'
         DS    0F            + Force alignment
A16      DC    16CL1'A'
Z16      DC    16CL1'Z'
WORKA16  DC    16CL1'A'
WORKZ16  DC    16CL1'Z'
Z00      DC    CL2'00'
Z98      DC    CL2'98'
Z99      DC    CL2'99'
XDIGITS  DC    XL10'F0F1F2F3F4F5F6F7F8F9'
WDIGITS  DC    XL10'00000000000000000000'
HEX0     DC    XL4'00000000'
HEX1     DC    XL4'00000001'
HEX2     DC    XL4'00000002'
HEX4     DC    XL4'00000004'
HEX5     DC    XL4'00000005'
HEX1234  DC    XL4'01020304'
HEX4321  DC    XL4'04030201'
CC00     DC    XL4'0000CC00'
CC01     DC    XL4'1000CC01'
CC02     DC    XL4'2000CC02'
CC03     DC    XL4'3000CC03'
EDFLD    DC    X'00000000000000000000'
EDMASK   DC    X'F0202020202020202020'
EDDATA   DC    X'000012345C'
SIMOTIME DC    CL46'SimoTime, when technology complements business'
         DS    0F                  * Ensure full-word boundary
DATA80   DC    80XL1'00'
STCMDATA DC    XL4'00000000'
STHDATA  DC    XL4'00000000'
REGWORK  DC    XL4'00000000'
DATA4CLM DC    XL4'FFFF0000'
DATAREG8 DC    XL4'FF00FF00'
ONEBIT00 DC    XL4'00000001'
ONEBIT01 DC    XL4'80000001'
FW00XX00 DC    XL4'00000000'
FW00XX01 DC    XL4'00000001'
FW00XX02 DC    XL4'00000002'
FW00XX03 DC    XL4'00000003'
FW00XX04 DC    XL4'00000004'
FW00XX05 DC    XL4'00000005'
FW40XX00 DC    XL4'40000000'
FW80XX00 DC    XL4'80000000'
FW80XX01 DC    XL4'80000001'
FW80XX02 DC    XL4'80000002'
FW80XX03 DC    XL4'80000003'
FW80XX04 DC    XL4'80000004'
FW80XX05 DC    XL4'80000005'
MASK8    EQU   X'8'
MASK7    EQU   X'7'
MASK4    EQU   X'4'
MASK3    EQU   X'3'
MASK2    EQU   X'2'
MASK1    EQU   X'1'
MASKF    EQU   X'F'
XBYTE    EQU   *
AS       EQU   0
SBYTE    EQU   *
S1       EQU   *
S2       EQU   *
MASK     EQU   X'F'
MASK00   EQU   X'00'
MASK01   EQU   X'01'
MASK02   EQU   X'02'
MASK04   EQU   X'04'
MASK08   EQU   X'08'
MASKFF   EQU   X'FF'
I        EQU   X'FF'
*
         LTORG
*
R0       EQU   0
R1       EQU   1
R2       EQU   2
R3       EQU   3
R4       EQU   4
R5       EQU   5
R6       EQU   6
R7       EQU   7
R8       EQU   8
R9       EQU   9
R10      EQU   10
R11      EQU   11
R12      EQU   12
R13      EQU   13
R14      EQU   14
R15      EQU   15
*
         END

Table of Contents Previous Section Next Section Summary

The purpose of this document is to assist as a tutorial for new programmers or as a quick reference for experienced programmers. In the world of programming there are many ways to solve a problem. This document and the links to other documents are intended to provide a choice of alternatives.
Table of Contents Previous Section Next Section Software Agreement and Disclaimer

Permission to use, copy, modify and distribute this software, documentation or training material for any purpose requires a fee to be paid to SimoTime Enterprises. Once the fee is received by SimoTime the latest version of the software, documentation or training material will be delivered and a license will be granted for use within an enterprise, provided the SimoTime copyright notice appear on all copies of the software. The SimoTime name or Logo may not be used in any advertising or publicity pertaining to the use of the software without the written permission of SimoTime Enterprises.

SimoTime Enterprises makes no warranty or representations about the suitability of the software, documentation or learning material for any purpose. It is provided "AS IS" without any expressed or implied warranty, including the implied warranties of merchantability, fitness for a particular purpose and non-infringement. SimoTime Enterprises shall not be liable for any direct, indirect, special or consequential damages resulting from the loss of use, data or projects, whether in an action of contract or tort, arising out of or in connection with the use or performance of this software, documentation or training material.
Table of Contents Previous Section Next Section Downloads and Links

This section includes links to documents with additional information that are beyond the scope and purpose of this document. The first group of documents may be available from a local system or via an internet connection, the second group of documents will require an internet connection.

Note:  A SimoTime License is required for the items to be made available on a local system or server.
Table of Contents Previous Section Next Section Current Server or Internet Access

The following links may be to the current server or to the Internet.

Note: The latest versions of the SimoTime Documents and Program Suites are available on the Internet and may be accessed using the Link to Internet icon. If a user has a SimoTime Enterprise License the Documents and Program Suites may be available on a local server and accessed using the Link to Server icon.

Link to Internet   Link to Server   Explore the Assembler Connection for more examples of mainframe Assembler programming techniques and sample code.

Link to Internet   Link to Server   Explore an Extended List of Software Technologies that are available for review and evaluation. The software technologies (or Z-Packs) provide individual programming examples, documentation and test data files in a single package. The Z-Packs are usually in zip format to reduce the amount of time to download.

Link to Internet   Link to Server   Explore An Enterprise System Model that describes and demonstrates how Applications that were running on a Mainframe System and non-relational data that was located on the Mainframe System were copied and deployed in a Microsoft Windows environment with Micro Focus Enterprise Server.

Link to Internet   Link to Server   Explore The ASCII and EBCDIC Translation Tables. These tables are provided for individuals that need to better understand the bit structures and differences of the encoding formats.

Link to Internet   Link to Server   Explore The File Status Return Codes to interpret the results of accessing VSAM data sets and/or QSAM files.
Table of Contents Previous Section Next Section Internet Access Required

The following links will require an internet connection.

This suite of programs and documentation is available for download. Link to an Evaluation zPAK Option that includes the program members, documentation and control files.

A good place to start is The SimoTime Home Page via Internet Connect for access to white papers, program examples and product information.

Explore The Micro Focus Web Site via Internet Connect for more information about products and services available from Micro Focus.
Table of Contents Previous Section Next Section Glossary of Terms

Link to Internet   Link to Server   Explore the Glossary of Terms for a list of terms and definitions used in this suite of documents and white papers.
Table of Contents Previous Section Next Section Comments or Feedback

This document was created and is copyrighted and maintained by SimoTime Technologies.

If you have any questions, suggestions, comments or feedback please call or send an e-mail to: helpdesk@simotime.com

We appreciate hearing from you.
Table of Contents Previous Section Next Section Company Overview

Founded in 1987, SimoTime Technologies is a privately owned company. We specialize in the creation and deployment of business applications using new or existing technologies and services. We have a team of individuals that understand the broad range of technologies being used in today's environments. This includes the smallest thin client using the Internet and the very large mainframe systems. There is more to making the Internet work for your company's business than just having a nice looking WEB site. It is about combining the latest technologies and existing technologies with practical business experience. It's about the business of doing business and looking good in the process. Quite often, to reach larger markets or provide a higher level of service to existing customers it requires the newer Internet technologies to work in a complementary manner with existing corporate mainframe systems.

Whether you want to use the Internet to expand into new market segments or as a delivery vehicle for existing business functions simply give us a call or check the web site at http://www.simotime.com
Return-to-Top
The 370 Instruction Set, Assembler Coding Examples
Copyright c 1987-2015
SimoTime Technologies
All Rights Reserved
When technology complements business
http://www.simotime.com
*ASM     XOPTS(NOPROLOG NOEPILOG)         
*        SYSSTATE AMODE31=YES,ARCHLVL=2   
*                        
SAVE     DFHEISTG DSECT  
RET_ADR      DS    F     
         DFHEIEND        
*                        
UCEMPARS CSECT                                                     
UCEMPARS AMODE 31                                                  
UCEMPARS RMODE ANY                                                 
      DFHEIENT DATAREG=13,EIBREG=11,STATREG=3,STATIC=STATR,CODEREG=0
         J     MAIN000                                             
         DC    C'UCEMPARS'                                         
         DC    C'&SYSDATE'                                         
         SPACE 1                                                   
MAIN000  DS    0H                                                  
*                                                                   
         CIJNE R4,CA_EQU_LENGTH,NOPARM                              
*        LA    R15,CA_EQU_LENGTH                                    
*        CRJNE R4,R15,NOPARM                                        
*        JNE   NOPARM                                               
         EXEC  CICS ADDRESS COMMAREA(R10)                           
         LTR   R1,R10                                               
         JZ    NOPARM                                               
*                                                                   
*  R1 NOW POINTS TO ACTUAL PARM                                     
*  R2 WILL HOLD THE SEARCH DIRECTION (0 FOR DCND OR 1 FOR ACND)     
*  R3 IS THE BASE REG                                               
*  R4 HOLDS PARM LENGTH, WILL NEXT HOLD NEEDLE ADDR                 
*  R5 WILL HOLD ADDR OF NEEDLE HW LENGTH. USED IN EX ON CLC INST    
*  R6 HOLDS HAYSTACK ADDR                                           
*  R7 HOLD ADDR OF HAYSTACK LW LENGHT                               
*  R8 USED TO HOLD FIRST POSITION IN THE HAYSTACK                   
*  R9 ((R6+R7)-R5) GIVES LAST (OR FIRST IS DECENDING) COMPARE ADDR  
*  R10 COMMAREA                                                     
*  R0,R15 ARE WORKREGS                                              
*                                                                   
         USING MYCOM_A,R10 
...
code
...
*   CICS STATIC STORAGE AREA NEEDS LABEL AS SPECIFIED ON DFHEIENT   
STATR    DS    0D                                                   
literals static storage
...
* MOVED TO END FOR RELATIVE ADDRESSING 
         LTORG                         
         END                           array to address subsequent instances of the data, each of which is displayed by using the DISPLAY statement:IDENTIFICATION DIVISION.                                           
       PROGRAM-ID.    EXVARY.                                      
                                                                   
       ENVIRONMENT DIVISION.                                       
       DATA DIVISION.                                              
       WORKING-STORAGE SECTION.                                    
                                                                   
      * working storage variables                                  
       01 APP-DATA-PTR             USAGE IS POINTER.               
       01 APP-DATA-LENGTH          PIC S9(8) COMP.                 
       01 COMPONENT-PTR            USAGE IS POINTER.               
       01 COMPONENT-DATA-LENGTH    PIC S9(8) COMP.                 
       01 COMPONENT-COUNT          PIC S9(8) COMP-4 VALUE 0.       
       01 COMPONENT-LENGTH         PIC S9(8) COMP.                 
                                                                   
       LINKAGE SECTION.                                            
                                                                   
      * a large linkage section array                              
       01 BIG-ARRAY PIC X(659999).                                 
                                                                   
      * application data structures produced by DFHWS2LS           
      * this is normally referenced with a COPY statement          
       01 DFHWS2LS-data.                                           
          03 applicationData.                                      
            06 component-num  PIC S9(9) COMP-5 SYNC.               
            06 component-cont PIC X(16).                           
                                                                   
       01 DFHWS-component.                                         
          03 component        PIC X(8).                            
                                                                   
                                                                   
                                                                   
       PROCEDURE DIVISION USING DFHEIBLK.                          
       A-CONTROL SECTION.                                          
       A010-CONTROL.                                               
                                                                   
      * Get the DFHWS-DATA container                               
           EXEC CICS GET CONTAINER('DFHWS-DATA')                   
                     SET(APP-DATA-PTR)                             
                     FLENGTH(APP-DATA-LENGTH)                      
           END-EXEC                                                
           SET ADDRESS OF DFHWS2LS-data TO APP-DATA-PTR            
                                                                   
      * Get the recurring component data                           
           EXEC CICS GET CONTAINER(component-cont)                 
                     SET(COMPONENT-PTR)                            
                     FLENGTH(COMPONENT-DATA-LENGTH)                
           END-EXEC                                                
                                                                   
      * Point the component structure at the first instance of the data 
           SET ADDRESS OF DFHWS-component TO COMPONENT-PTR          
                                                                   
      * Store the length of a single component                     
           MOVE LENGTH OF DFHWS-component TO COMPONENT-LENGTH    
                                                                   
      * process each instance of component data in turn            
           PERFORM WITH TEST AFTER                                 
                 UNTIL COMPONENT-COUNT = component-num             
                                                                   
      * display the current instance of the data                   
              DISPLAY 'component value is: ' component             
                                                                   
      * address the next instance of the component data            
              SET ADDRESS OF BIG-ARRAY TO ADDRESS OF DFHWS-component 
              SET ADDRESS OF DFHWS-component 
                  TO ADDRESS OF BIG-ARRAY (COMPONENT-LENGTH + 1:1)  
              ADD 1 TO COMPONENT-COUNT                             
                                                                   
      * end the loop                                               
           END-PERFORM.                                            
                                                                   
      * Point the component structure back at the first instance of    
      * of the data, for any further processing we may want to perform 
           SET ADDRESS OF DFHWS-component TO COMPONENT-PTR             
                                                                    
      * return to CICS.                                             
                                                                    
           EXEC CICS                                                
                RETURN                                              
           END-EXEC                                                 
                                                                    
           GOBACK.77 SOAP-PTR       USAGE POINTER.
77 SOAP-LENGTH    PIC S9(8) BINARY.

         01  WS-CURRENT-DATE-FIELDS.
             05  WS-CURRENT-DATE.
                 10  WS-CURRENT-YEAR    PIC  9(4).
                 10  WS-CURRENT-MONTH   PIC  9(2).
                 10  WS-CURRENT-DAY     PIC  9(2).
             05  WS-CURRENT-TIME.
                 10  WS-CURRENT-HOUR    PIC  9(2).
                 10  WS-CURRENT-MINUTE  PIC  9(2).
                 10  WS-CURRENT-SECOND  PIC  9(2).
                 10  WS-CURRENT-MS      PIC  9(2).
             05  WS-DIFF-FROM-GMT       PIC S9(4).



Finally in the PROCEDURE DIVISION: Set the size of the array dimensions to some real values; allocate the appropriate amount of memory and then connect the two. For example:

MOVE 200 TO ITEM-COUNT
MOVE 15 TO SUB-COUNT
MOVE LENGTH OF SOAP-RECORD TO SOAP-LENGTH
EXEC CICS GETMAIN
     BELOW
     USERDATAKEY
     SET(SOAP-PTR)
     FLENGTH(SOAP-LENGTH)
END-EXEC
SET ADDRESS OF SOAP-RECORD TO SOAP-PTR

So not only can you get the time down to the millisecond, but you can get the difference between your time and Greenwich Mean Time.

The function is used in a MOVE:

MOVE FUNCTION CURRENT-DATE TO WS-CURRENT-DATE-FIELDS
     * Get the current date in yyyymmdd format
        MOVE FUNCTION CURRENT-DATE (1:8) TO WS-TODAY

     * Get the current time in hhmmss format
        MOVE FUNCTION CURRENT-DATE (9:6) TO WS-TIME
PRINT NOGEN
SAMPLE1 CSECT ,
SAMPLE1 AMODE 31
SAMPLE1 RMODE 24
***********************************************************************
* PROGRAM SAMPLE1 - SAMPLE CALLING 64 BIT PROCESS ROUTINE FROM *
* 24/31 BIT PROGRAM *
* *
* PROCESS IS NOT RENT *
*=====================================================================*
* PROGRAM WRITTEN BY: AVRI J. ADLEMAN *
* ADLEMAN@US.IBM.COM *
* (732) 494-6093 *
*=====================================================================*
* PROCESS: SAMPLE1 READS IN AN 80 BYTE RECORD DATASET AND CALLS *
* THE RTN64 TO STORE THE RECORDS ABOVE THE 2G BAR. *
* *
* AFTER ALL THE RECORDS ARE READ INTO RTN64 AREA, THE *
* RECORDS ARE THEN SORTED. *
* *
* SAMPLE1 THEN RETRIEVES THE RECORDS, ONE AT A TIME AND *
* OUTPUTS THE IMAGE. *
* *
* PROGRAM SAMPLE1 PERFORMS ALL I/O FUNCTIONS AND ACTS AS *
* A DRIVER TO THE RTN64 ROUTINE. THE RTN64 ROUTINE PERFORMS *
* A VARIETY OF PROCESSES ON THE ABOVE THE 2G BAR STORAGE *
* ARRAY. THEY INCLUDE: *
* (1) INITIALIZE THE ABOVE THE BAR REGION *
* (2) TERMINATES (DELETES) THE ABOVE THE BAR REGION *
* (3) STORES RECORDS, ONE AT A TIME, SEQUENTIALLY *
* (4) SORTS THE RECORDS *
* (5) RETURNS THE CURRENT RECORD COUNT *
* (6) RETURNS ONE RECORD AT A TIME BY INDEX *
*=====================================================================*
* 32-BIT REGISTER DEFINITIONS *
***********************************************************************
R0 EQU 0 ----
R1 EQU 1 PARMLIST
R2 EQU 2 WORK REG
R3 EQU 3 WORK REG
R4 EQU 4 ----
R5 EQU 5 ----
R6 EQU 6 ----
R7 EQU 7 ----
R8 EQU 8 ----
R9 EQU 9 ----
R10 EQU 10 ----
R11 EQU 11 PROGRAM BASE
R12 EQU 12 ----
R13 EQU 13 SAVE AREA ADDRESS
R14 EQU 14 RETURN ADDRESS
R15 EQU 15 ENTRY/RETURN CODE
***********************************************************************
* SETUP STANDARD LINKAGE IN MAINLINE *
***********************************************************************
SAVE (14,12),,SAMPLE1-64-BIT-EXAMPLE-&SYSDATC-&SYSTIME
BASR R11,0 SET R11 - PROGRAM BASE
USING (*,ENDMAIN),R11 SETUP BASE
ST R13,SAVE+4 BACKWARD CHAIN
LA R8,SAVE R8 -> NEW SAVE AREA
ST R8,8(,R13) FORWARD CHAIN
LR R13,R8 R13 : CURRENT SAVE AREA
OPEN (INDCB,(INPUT),OUTDCB,(OUTPUT)),MODE=31
LA R1,INITPARM R1 -> INITIALIZE PARM
LARL R15,RTN64 R15 -> 64 BIT PROCESSOR
BASR R14,R15 CALL ROUTINE
***********************************************************************
* OVERALL INPUT RECORDS STORE INTO ABOVE THE BAR ARRAY *
***********************************************************************
READLOOP DS 0H
GET INDCB GET A RECORD
ST R1,ADDREC@ SAVE THE RECORD ADDRESS
LA R1,ADDPARM R1 -> ADD RECORD PARMS
LARL R15,RTN64 R15 -> 64 BIT PROCESSOR
BASR R14,R15 CALL ROUTINE
J READLOOP GET NEXT RECORD
***********************************************************************
* HIT THE END OF FILE - START PROCESSING *
***********************************************************************
EOF DS 0H
***********************************************************************
* SORT THE RECORDS *
***********************************************************************
LA R1,SORTPARM R1 -> INITIALIZE PARM
LARL R15,RTN64 R15 -> 64 BIT PROCESSOR
BASR R14,R15 CALL ROUTINE
***********************************************************************
* GET THE RECORD COUNT *
***********************************************************************
LA R1,COUNTPRM R1 -> INITIALIZE PARM
LARL R15,RTN64 R15 -> 64 BIT PROCESSOR
BASR R14,R15 CALL ROUTINE
***********************************************************************
* PUT OUT HEADER WITH RECORD COUNT *
***********************************************************************
L R5,COUNTNUM R5 = RECORD COUNT
CVD R5,DWD MAKE DECIMAL IMAGE
UNPK HEADNUM,DWD MAKE PICTURE
MVZ HEADNUM+L'HEADNUM-1(1),HEADNUM
PUT OUTDCB,HEADER PUT HEADER TO OUTPUT
***********************************************************************
* RETRIEVE AND PRINT ALL RECORDS *
***********************************************************************
XR R3,R3 R3 = RECORD NUMBER
LHI R4,1 R4 = INCREMENT
AHI R5,-1 DECREMENT COUNT
JM DONE IF COUNT <= 0, DONE
RETRLOOP DS 0H
ST R3,RETRVNUM SAVE NUMBER
CVD R3,DWD MAKE
UNPK DATANUM,DWD MAKE PICTURE
MVZ DATANUM+L'DATANUM-1(1),DATANUM
CVD R3,DWD DWD = PICTURE OF COUNT
LA R1,RETRVPRM R1 -> RETRIEVE PARM LIST
LARL R15,RTN64 R15 -> 64 BIT PROCESSOR
BASR R14,R15 CALL ROUTINE
PUT OUTDCB,DATA PUT RECORD TO OUTPUT
JXLE R3,R4,RETRLOOP CONTINUE OVER ALL RECORDS
***********************************************************************
* REMOVE THE ARRAY *
***********************************************************************
DONE DS 0H
LA R1,TERMPARM R1 -> TERMINATION PARM
LARL R15,RTN64 R15 -> 64 BIT PROCESSOR
BASR R14,R15 CALL ROUTINE
CLOSE (INDCB,,OUTDCB),MODE=31
FREEPOOL INDCB
FREEPOOL OUTDCB
L R13,4(,R13) R13 -> OLD SAVE
L R14,12(,R13) R14 = RETURN ADDRESS
XR R15,R15 R15 = 0 - RETURN CODE
LM R0,R12,20(R13) RESTORE R0 .. R12
OI 15(R13),X'01' MARK RETURNED
BR R14 RETURN TO CALLER
***********************************************************************
* MAINLINE STANDARD 72 BYTE SAVE AREA *
***********************************************************************
SAVE DC 18F'0'
INITPARM DC A(INIT#)
TERMPARM DC A(TERM#)
SORTPARM DC A(SORT#)
*
ADDPARM DC 0A(0)
DC A(ADD#)
ADDREC@ DC A(0)
*
COUNTPRM DC 0A(0)
DC A(COUNT#)
DC A(COUNTNUM)
*
RETRVPRM DC 0A(0)
DC A(RETRIEV#)
DC A(RETRVNUM)
DC A(DATAREC)
*
DWD DC D'0'
COUNTNUM DC F'0'
RETRVNUM DC F'0'
*
INIT# DC CL1'I'
TERM# DC CL1'T'
ADD# DC CL1'A'
SORT# DC CL1'S'
COUNT# DC CL1'C'
RETRIEV# DC CL1'R'
*
HEADER DC CL133' '
ORG HEADER+1
DC C'NUMBER OF RECORDS: '
HEADNUM DC CL16' '
ORG ,
*
DATA DC CL133' '
ORG DATA+1
DC C'RECORD('
DATANUM DC CL16' '
DC C'): '
DATAREC DC CL80' '
ORG ,
*
DC 0D'0',CL8'DCBS'
INDCB DCB DSORG=PS,MACRF=GL,LRECL=80,RECFM=FB,DDNAME=INFILE, X
DCBE=INDCBE
OUTDCB DCB DSORG=PS,MACRF=PM,LRECL=133,RECFM=FBA,DDNAME=OUTFILE,
X
DCBE=OUTDCBE
INDCBE DCBE RMODE31=BUFF,EODAD=EOF
OUTDCBE DCBE RMODE31=BUFF
LTORG ,
ENDMAIN EQU *
DC 0D'0',CL8'RTN64'
RTN64 DC 0H'0'
***********************************************************************
* SUBROUTINE RTN64 - OPERATES IN 64 BIT MODE *
* *
* ENTRY VIA: BASR R14,R15 FROM 24 OR 31 BIT MODE *
* *
* PARMS: R1 -> PARMLIST (32-BIT) *
* (FUNCTION:CHAR(1),P#2, ... P#N) *
* *
* ON EXIT: R15 = RETURN CODE *
* REGISTERS R0 .. R12 - RESTORED *
* R13 -> SAVE AREA SET/BIT(32) LOST *
* R14 = RETURN ADDRESS WITH MODE *
* *
* FUNCTION: *
* 'I' - INITIALIZE *
* 'T' - TERMINATE *
* 'S' - SORT *
* 'A' - ADD RECORD *
* P#2 : INPUT_RECORD:CHAR(80) *
* 'C' - RETURN THE RECORD COUNT *
* P#2 : RETURN THE RECORD COUNT:BINARY(31) *
* 'R' - RETRIEVE THE ITH RECORD *
* P#2 : RECORD_NUMBER:BINARY(31) *
* P#3 : RETURNED_RECORD:CHAR(80) *
*=====================================================================*
* 64-BIT REGISTER DEFINITIONS *
***********************************************************************
G0 EQU 0 ----
G1 EQU 1 PARMLIST
G2 EQU 2 WORK REG
G3 EQU 3 WORK REG
G4 EQU 4 WORK REG
G5 EQU 5 WORK REG
G6 EQU 6 WORK REG
G7 EQU 7 WORK REG
G8 EQU 8 ----
G9 EQU 9 ----
G10 EQU 10 PARMLIST REGISTER
G11 EQU 11 STATIC PROGRAM BASE
G12 EQU 12 ----
G13 EQU 13 SAVE AREA ADDRESS
G14 EQU 14 RETURN ADDRESS
G15 EQU 15 ENTRY/RETURN CODE
*
RECSIZE EQU 80 SIZE OF A RECORD
***********************************************************************
* START PROCESSING IN CALLER'S MODE *
***********************************************************************
OLDSAV13 USING SAVER,R13
STM R14,R12,OLDSAV13.SAVGRS14 SAVE REGISTERS R14 .. R12
STMH G15,G15,OLDSAV13.SAVNEXT TEMP SAVE HIGH G15
LARL G15,SAVE64 G15 -> NEW SAVE AREA FORMAT 5
NEWSAV15 USING SAVF5SA,G15 G15 : TEMP BASE TO NEW SAVE
STMH G0,G14,NEWSAV15.SAVF5SAG64HS0 SAVE HIGH G0 .. G14
MVC NEWSAV15.SAVF5SAG64HS15,OLDSAV13.SAVNEXT
ST R15,OLDSAV13.SAVNEXT SET FORWARD CHAIN IN OLD SAVE
LLGTR G2,R13 G2 -> OLD SAVE CLR HIGH ORDER
STG G2,NEWSAV15.SAVF5SAPREV SAVE 64-BIT PREVIOUS SAVE AREA
LLGTR G13,G15 G13-> NEW SAVE, CLEAR HIGH
DROP NEWSAV15,OLDSAV13 RELEASE TEMP SAVE BASE
CURSAV13 USING SAVF5SA,G13 G13 : CURRENT SAVE AREA BASE
***********************************************************************
* SETUP ADDRESSABILITY AND PROCESS IN AMODE=64 *
***********************************************************************
SAM64 , GO TO 64 BIT MODE
JAS G11,PROCESS G11 -> CURRENT ADDRESS
USING (*,ENDRTN64),G11 G11 : PROGRAM BASE
CODE LOCTR ,
***********************************************************************
* GO TO FUNCTION REQUESTED *
***********************************************************************
PROCESS DS 0H
LLGTR G10,R1 G10 -> PARMLIST
LLGT G2,0(,G10) FETCH FUNCTION CODE
CLI 0(G2),C'A' ADD A RECORD
JE ADD
CLI 0(G2),C'R' RETRIEVE A RECORD
JE RETRIEVE
CLI 0(G2),C'C' COUNT RECORDS
JE COUNT
CLI 0(G2),C'S' SORT RECORDS
JE SORT
CLI 0(G2),C'I' INITIALIZE REGION
JE INITIAL
CLI 0(G2),C'T' TERMINATE REGION
JE TERMINAT
LHI R15,16 UNKNOWN TYPE, RC = 16
J RETURN RETURN TO CALLER
***********************************************************************
* INITIALIZE RECORD AREA *
***********************************************************************
INITIAL DS 0H
XGR G0,G0 G0 = 0
STG G0,RECCNT SET RECORD COUNT = 0
IARV64 REQUEST=GETSTOR,SEGMENTS=SEGMENTS, X
GUARDLOC=HIGH,GUARDSIZE=GRDSIZE, X
RETCODE=RETCODE,RSNCODE=RSNCODE,ORIGIN=ORIGIN, X
MF=(E,IARV64)
ICM R15,15,RETCODE R15 = RETURN CODE
JZ RETURN IF RC = 0, GOOD
J RC12 ELSE RETURN TO CALLER
***********************************************************************
* RETURN THE COUNT OF RECORDS *
***********************************************************************
COUNT DS 0H
LLGT G2,4(,G10) G2 -> RETURN COUNT
ICM R3,15,RECCNT+4 R3 = LOWER PART OF COUNT
ST R3,0(,G2) SAVE COUNT
JM RC08 INDICATE COUNT OVERFLOW
ICMH G3,15,RECCNT FETCH TOP HALF OF
JZ RC00 IF ZERO, OK
J RC08 ELSE COUNT OVERFLOW
***********************************************************************
* ADD A RECORD TO THE ABOVE THE LINE ARRAY *
***********************************************************************
ADD DS 0H
SAMRECG2 USING RECORD,G2
RTNRECG5 USING RECORD,G5
LLGT G2,4(,G10) G2 -> INPUT RECORD
LG G3,RECCNT G5 = NUMBER OF RECORDS
LG G4,ORIGIN G4 -> ORIGIN
LGR G5,G3 G5 = RECORD COUNT
MGHI G5,RECSIZE G5 = OFFSET
LA G5,0(G5,G4) G5 -> RECORD SLOT
MVC RTNRECG5.CARD,SAMRECG2.CARD MOVE IN RECORD
AGHI G3,1 BUMP RECORD COUNT
STG G3,RECCNT SAVE VALUE
J RC00 RETURN TO CALLER
DROP RTNRECG5,SAMRECG2 RELEASE BASES
PUSH USING
***********************************************************************
* SORT THE RECORDS *
***********************************************************************
SORT DS 0H
LEAST USING RECORD,G2 G2 : LEAST RECORD
TOP USING RECORD,G4 G4 : CURRENT TOP
CURRENT USING RECORD,G5 G5 : CURRENT AT RECORD
LG G3,RECCNT G3 = NUMBER OF RECORD
LTGR G3,G3 DO WE HAVE ANY ?
JNP RC04 NO, RETURN
LG G4,ORIGIN G4 -> ORIGIN
LGHI G6,RECSIZE G6 = SIZE OF RECORD
BCTGR G3,0 G3 = RECORD COUNT - 1
MSGR G3,G6 G3 = MAXIMUM OFFSET
LA G7,TOP.RECORD(G3) G7 -> LAST RECORD
***********************************************************************
* OVERALL RECORDS, SET THE TOP FOR BUBBLE SORT *
***********************************************************************
SORTLP1 DS 0H
LGR G2,G4 G2 -> CURRENT LEAST
LGR G5,G4 G5 -> START
***********************************************************************
* LOOK FOR THE LEAST RECORD *
***********************************************************************
SORTLP2 DS 0H
CLC CURRENT.CARD,LEAST.CARD TEST WITH LEAST
JNL SORTNX2 IF STILL GREATER, SKIP
LA G2,CURRENT.RECORD ELSE SET NEW LEAST
SORTNX2 DS 0H
JXLEG G5,G6,SORTLP2 GO TO NEXT ENTRY
***********************************************************************
* OPTIONALLY SWAP LEAST RECORD WITH CURRENT TOP *
***********************************************************************
LA G0,LEAST.CARD G6 -> LEAST RECORD
LA G1,TOP.CARD G7 -> TOP RECORD
CLGR G0,G1 ANY SWITCH ?
JE SORTNX1 NO, KEEP ASIS
XC LEAST.CARD,TOP.CARD ELSE SWAP RECORDS
XC TOP.CARD,LEAST.CARD ...
XC LEAST.CARD,TOP.CARD ...
***********************************************************************
* GO TO NEXT TOP RECORD *
***********************************************************************
SORTNX1 DS 0H
JXLEG G4,G6,SORTLP1 GO TO NEXT ENTRY
J RC00 SORT COMPLETE
POP USING
***********************************************************************
* RETURN THE ITH RECORD (ORIGIN NUMBER = 0) *
***********************************************************************
RETRIEVE DS 0H
LLGT G2,4(,G10) G2 -> RECORD NUMBER TO RETRIEVE
LGF G3,0(,G2) G3 = RECORD NUMBER
LTGR G3,G3 TEST VALUE
JM RC08 IF NEGATIVE, ERROR
CG G3,RECCNT TEST WITH CURRENT NUMBER
JNL RC08 IF HIGH, RANGE ERROR
MGHI G3,RECSIZE G3 = OFFSET OF RECORD
ALG G3,ORIGIN G3 -> RECORD
LLGT G2,8(,G10) G2 -> TARGET
SAMRECG2 USING RECORD,G2
RTNRECG3 USING RECORD,G3
MVC SAMRECG2.CARD,RTNRECG3.CARD COPY IN RECORD
DROP RTNRECG3,SAMRECG2
J RC00 RETURN TO CALLER
***********************************************************************
* TERMINATE - REMOVE THE ABOVE THE BAR ARRAY *
***********************************************************************
TERMINAT DS 0H
IARV64 REQUEST=DETACH,MEMOBJSTART=ORIGIN, X
RETCODE=RETCODE,RSNCODE=RSNCODE,MF=(E,IARV64)
ICM R15,15,RETCODE
JZ RETURN
J RC12
**********************************************************************
* RETURN TO CALLER IN MODE *
***********************************************************************
RC16 DS 0H
LHI R15,16
J RETURN
RC12 DS 0H
LHI R15,12
J RETURN
RC08 DS 0H
LHI R15,8
J RETURN
RC04 DS 0H
LHI R15,4
J RETURN
RC00 DS 0H
XR R15,R15
RETURN DS 0H
LG G2,CURSAV13.SAVF5SAPREV G2 -> OLD SAVE AREA
LA G3,CURSAV13.SAVF5SA G3 -> CURRENT SAVE
DROP CURSAV13 RELEASE SAVE AREA BASE
OLDSAV2 USING SAVER,R2 G2 : BASE TO PREVIOUS SAVE
CURSAV3 USING SAVF5SA,G3 G3 : CURRENT SAVE AREA BASE
LMH G13,G15,CURSAV3.SAVF5SAG64HS13 RESTORE HIGH G13 .. G15
LR R13,R2 R13 -> PREVIOUS SAVE
L R14,OLDSAV2.SAVGRS14 G14 = RETURN ADDRESS WITH MODE
LMD G0,G12,CURSAV3.SAVF5SAG64HS0,OLDSAV2.SAVGRS0
DROP CURSAV3,OLDSAV2
BSM 0,G14 RETURN TO CALLER
SAMPLE1 LOCTR ,
***********************************************************************
* FORMAT 5 SAVE FOR RTN64 *
***********************************************************************
SAVE64 DC XL(SAVF5SA_LEN)'00'
ORG SAVE64+(SAVF5SAID-SAVF5SA)
DC A(SAVF5SAID_VALUE)
ORG ,
SEGMENTS DC FD'10'
GRDSIZE DC F'1'
RETCODE DC F'0'
RSNCODE DC F'0'
ORIGIN DC AD(0)
RECCNT DC FD'0'
IARV64 MF=(L,IARV64)
LTORG ,
ENDRTN64 EQU *
***********************************************************************
* RECORD IMAGE *
***********************************************************************
RECORD DSECT ,
CARD DS CL(RECSIZE)
PUSH PRINT
PRINT NOGEN
***********************************************************************
* SYSTEM CONTROL BLOCKS *
***********************************************************************
IHASAVER ,
DCBD DEVD=DA,DSORG=PS
POP PRINT
END ,At present, in z/OS, there are three addressing modes. 24-bit (below the
line), 31-bit (above the "line" and below the "bar"), and 64 bit (above the
"bar"). The area above the 2Gb area is called "above the bar". One reason
that it is called a "bar" is because a "bar" is "thicker" than a "line". The
"bar" itself is an actual area of memory is not usable in any addressing
mode. Due to compatability issues, the area in the 2Gb to 4Gb range is
"illegal". The consideration here is that memory in this area would require
the high order 32 bits of the address to be all zeros and bit 33 to be '1'b.
Unfortunately, bit 33 (which is equivalent to bit 0 in a 31 bit address) has
historically been '1'b to indicate "end of address list" when passing
parameters to subroutines. So the 64 bit addresses x'00 00 00 00 80 00 00
00' to x'00 00 00 00 FF FF FF FF' are declared to be illegal in z/OS (I
don't know about z/VM or in the actual hardware). z/OS will *never* allocate
virtual storage in these address ranges.

Also, due to compatability issues in z/OS, I have read in other forums that
"RMODE(64)", or programs residing above the "bar", is unlikely any time
soon. This is due to the fact that so many control blocks related to PSW
addresses are 32 bit areas and there is a LOT of user code which looks and
modifies these areas. This code would fail miserably if the area in which
the PSW were kept were to be changed or moved.

So, it is unlikely that CICS user applications will need to worry about
AMODE(64) programs any time soon. The 64-bit addressing is really designed
to keep very large memory areas (not programs) in memory. Like huge DB2
tables, or maybe even some sort of VSAM buffers. And CICS itself may use
"above the bar" memory for some things, in the future. But I would not
expect it to be for application accessible data. I.e. not usable in an EXEC
CICS command. This would break a lot of CICS applications (i.e. if the CWA
were put "above the bar", lots of things could die. Or the TCTTE, or ...)

This is just my opinion and an uninformed outsider, based on what little
I've read from some of the z/OS developers on other forums (IBM-MAIN and
ASSEMBLER-LIST).


In this example, a primary mode target program receives |control from a calling
program that provided a 144-byte doubleword-aligned |save area pointed to by
64-bit GPR  13. The calling program can |make the call through the following two
instructions:

,SAVEAREA=STANDARD 
,SAVEAREA=F4SA 

Format of the Format 4 Save Area (F4SA) 
Word 
Contents 
  
  
0 			Used by language products 

1			Value of "F4SA". "F4SA", stored by a program in its save area,
indicates how the program has saved the calling program's |registers, in this
case saving the 64-bit GPRs in the caller-provided |save area whose address is
in words 32-33 of this save area.

2-3 		64-bit GPR 14 (return address) 
4-5			64-bit GPR 15 
6-31 		64-bit GPRs 0-12 
32-33 		|Address of previous save area (stored by a program |in its save area) 
34-35 		|Address of next save area (stored by target program |within
caller's save area) 

You can save 64-bit GPRs either with a store-multiple
|(STMG) instruction or with the SAVE macro. Use the following STMG |instruction
to place the contents of all 64-bit GPRs except GPR 13 |into the proper words of
the save area:

|STMG 14,12,8(13) When SYSSTATE AMODE64=YES is in effect, the SAVE |macro stores
64-bit GPRs into the save area. Code the GPRs to be saved |in the same order as
in a STMG instruction. The following example |of the SAVE macro places the
contents of all 64-bit GPRs except GPR |13 into the proper words of the save
area.

 PROGNAME SAVE (14,12) 

STANDARD format specifies that register 13 contains the address of a 72-byte save area that can be used by the PTRACE routine. 
IF F4SA is used, specifies 64-bit GPR 13 contains the address of a 144-byte save area in F4SA format for TRACEMODE=TRACG


L 15,=V(PGM)
BASR 14,15

The target program saves its calling program's registers into the save area that
the calling program provides. It uses the GETMAIN macro to obtain storage for
its own save area. The code is in 64-bit addressing mode and is reentrant.


PGM CSECT
PGM AMODE 64
PGM RMODE 31
       SYSSTATE AMODE64=YES
       STMG 14,12,SAVF4SAG64RS14-SAVF4SA(13) 
*                               Save caller's registers in caller-
*                               provided R13 save area
       CNOP 0,4
       BRAS 12,*+8
       DC  A(STATIC_DATA)
       L     12,0(12,0)         Set up to address of static data
       USING STATIC_DATA,12
       GETMAIN RU,LV=144        Get my reentrant savearea
       STG 13,SAVF4SAPREV-SAVF4SA(,1) 
*                               Save caller's savearea address in my
*                               savearea (backward chain)
       STG 1,SAVF4SANEXT-SAVF4SA(,13) 
*                               Save my savearea address in caller's
*                               savearea (forward chain)
       MVC  SAVF4SAID-SAVF4SA(4,1),=A(SAVF4SAID_VALUE)
*                               Set ID into savearea to |indicate how
|*                               caller's regs are saved
       LGR 13,1                 Put my savearea address in R13
*    End of entry code. Begin program code here . . .
···
* Begin exit code
       LGR 1,13                 Copy my savearea address
       LG 13,SAVF4SAPREV-SAVF4SA(,13)  
*                               Restore caller's savearea address
       FREEMAIN RU,A=(1),LV=144 Free my reentrant savearea
       SLR 15,15                Set return code of zero
       LG 14,SAVF4SAG64RS14-SAVF4SA(,13) 
*                               Restore caller's R14
       LMG 2,12,SAVF4SAG64RS2-SAVF4SA(13) 
*                               Restore caller's R2-R12
       BR 14                    Return to caller
···
       STATIC_DATA DS 0D
* Begin static data here
       IHASAVER
       END

#####

