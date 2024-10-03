#compsci 

### What is a Computer
- Name originates from job position (Computer aka mathematician)
- Generally used for counting, calculator type thing in the olden days (the 40s, ENIAC ting)
- Has a set of instructions to carry out
- Evolves and Doubles performance every ~18 months
- adapted to multifunctional devices
- Computers are Stupid Boxes

#### Von Neumann Architecture
![[Pasted image 20230926145611.png]]

Both Programs and Data are stored in memory components. This means that I/O devices, programs and other things can access the data

---

#### I/O
- Integrates with human (Human Interface Device)
- Sends / Receives data (Music, Movement, Images)
- Some devices provide both input / output (DVD, Screens, Etc.)


# Memory

- Each Location consists of 8 cells (8 bits of info)
- Computer works on Binary (Base 2 System)
- See table for conversions
	- ![[Pasted image 20230926142811.png]]
- 1024 comes from binary number system represented in powers of $2^n$
### Types
#### Direct Connection to CPU (Primary)
- Random Access (RAM)
	- Volatile -> deleted when computer is turned off
- Read Only (ROM)
	- Non Volatile
	- Holds instructions for boot, BIOS / UEFI, Etc.
	- Don't touch
#### Non-Direct Connection to CPU (Secondary)
- Hard Drive
- External Storage

#### Data Register

Super smol, Super fast memory
like a temporary backup

#### Cache Memory
Speeds up performance by keeping some data instead of getting it from bus again
~80% of time program runs it uses the some of the same data over and over, Cache stores that data

---
---
# Programs
Coding Language -> Compiler (Java) / Transpiler (TypeScript) / JIT Compiler (Lua) -> Machine Code (Binary)

Note: keep code tidy and readable, build up a maintainable environment for the code for the future. Make it modular so parts can be re-used, make it robust and have it be reliable and expect errors, situations, etc.

#### Algorithm
- A set of instructions that is required to solve a problem
	- Involves whats needed to solve the problem (Materials)
	- And what needs to be done (Steps)

#### Stepwise Refinement
- Create modules in the algorithm (Break it down, undo abstraction)
	- <mark style="background: #ADCCFFA6;">Get water</mark>
		- <mark style="background: #D2B3FFA6;">Go to the sink</mark>
		- <mark style="background: #D2B3FFA6;">Use the tap</mark>
		- <mark style="background: #D2B3FFA6;">get water in container</mark>
		- etc..
	- <mark style="background: #ADCCFFA6;">Boil it</mark>
		- <mark style="background: #D2B3FFA6;">go to kettle</mark>
		- ......