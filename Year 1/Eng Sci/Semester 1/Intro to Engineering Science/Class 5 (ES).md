#eng 
## Diodes
---
Only lets current flow in one direction through the circuit
represented as an arrow symbol which indicates the direction of the current flow.

If current flows through the diode in the circuit, we say the diode is placed in forward-bias. This means that the current is not stopped and the circuit functions as if the diode isn't there.

If the diode however is put in backwards or if the current wants to flow against the diode (opposite direction to the arrow) then we say it is in Reverse-Bias.

#### How diodes work
A diode is made up of two pieces of silicon or germanium which are **Doped** with specific materials to affect their atomic structure. Depending on the material used, the diode will either gain or lose electrons, which will restrict / allow flow. The two types of doping are N-type doping and P-type doping.

In N-type there are free electrons (extra electrons) which end up __ the flow of current
In P-type there are holes in the material (less electrons) which 

N $\to$ Cathode
P $\to$ Anode

Where the N and P type sections overlap, there is a depletion region / layer in which the charge neutralises. When current is applied to the circuit, depending on the direction of the flow, the depletion layer moves and allows the current to flow. If current is applied in reverse bias, the diode "pushes back" and restricts the flow of the current, acting as an open circuit.

Diodes are generally used as rectifiers which are used for converting AC to DC.
They can also be used for logic gates, modulating signals and in logic circuits

### Rectifiers
---
A rectifier converts AC (Alternating Current) to DC (Direct Current)

Half Wave and Full Wave rectifiers both convert ac to DC, however they differ in the amount of current they preserve / convert

Half wave rectifiers (with an AC input) output only the positive sides of the cycle. This means that only 50% of the current is actually allowed through.

Full wave rectifiers (with an AC input) output the full cycle of the wave, but mirror the negative side so that it is positive. This means that 100% of the input is returned, but the signal oscillates between full amplitude and zero amplitude.

To smooth the signal output from a Full Wave rectifier, we can add a capacitor to the circuit, this doesn't fully remove the instability of the signal, but reduces it significantly allowing DC components to function more reliably.

### LEDs
---
- Forward-bias
- Makes light when forward biased
	- Charge carries recombination
	- makes light when electrons jump and fill holes across depletion layer

### Transistors
---
### Bipolar Junction Transistor (BJT)
- Consists of two back to back PN junctions
- Create 3 regions
	- Base
	- Collector
	- Emitter
- Each given terminals noted B, C and E respectively.
- The two junctions are E/B and C/B
- N type area is smaller than the P type areas
	- This allows the spare charges to travel across both depletion layers and flow out of the transistor
	- This current ends up being larger than the original input current, allowing the uses for amplification.
	- The ratio is defined as the $\beta$ which represents the gain given from the transistor
- 

### Field Effect Transistor (FET)
FETs are considers solid-state devices which means they are controlled by electric fields
They can be fabricated with either a P or N type channel
- Two main types of FETs
	- JFET (Junction FET)
	- MOSFET (Metal-Oxide Semiconductor FET)

Used to amplify current in scenarios like microphones, speakers and other audio devices.
Also used as an electronic switch (in logic circuits and computers)
