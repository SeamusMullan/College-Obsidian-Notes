#eng 

Ideal sources
---
these are sources of voltage or current who output a constant voltage / current.

ideal constant voltage sources output the same voltage regardless of the load / current being drawn from it and have zero internal resistance so the voltage drop is 0.

ideal constant current sources have an infinite amount of resistance (extremely high relative to external load resistance in practice)



Superposition Theorem
---

the influence of voltage and current sources on any component is the same as the sum of each source individually in the circuit (only with linear components)

eg: in a circuit with v1 and v2, and three currents (i1 -> i3)
![[Example Circuit Class 11.svg]]

to compute i3, we can solve 2 circuits for where only v1 exists, then when only v2 exists. we replace the voltage sources with short circuits when the do not exist.

solve circuit one and find i3 prime, solve circuit two and find i3 double prime, then we can compute the original circuit by adding $i3\prime$ + $i3\prime\prime$ 


for current sources, we replace them with open circuits (make current 0) {infinite resistance}
for voltage sources, we replace them with short circuits (make voltage diff 0)


Maximum Power Transfer Theorem
---

the efficiency of a network supplying max power to any one branch is 50%. the application of this theorem is limited for power transmission and distribution.

**Theorem:** a resistive load will abstract max power from a network when the resistance is equal to the resistance of the network as viewed from output terminals with all energy sources removed leaving behind internal resistances.

aka, max power is the circuit's total resistance without any added energy sources (leave their resistance if they ain't perfect)

assuming $R_i$ is the internal resistance of a network viewed from point A to B, we can say $R_L$ will abstract the max power when $R_L = R_i$

![[Pasted image 20231107164955.png]]