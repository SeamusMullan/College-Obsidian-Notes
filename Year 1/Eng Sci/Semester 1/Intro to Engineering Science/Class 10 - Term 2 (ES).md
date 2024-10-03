#eng 

# Mesh Analysis using Matrix form

![[Pasted image 20231106140552.png]]

## Applying KVL to mesh (i):
$$E_1 - R_3 (I_1 - I_3) - R_2 (I_1 - I_2) - R_1I_1 = 0$$
$$R_1 + R_2 + R_3 I_1 - R_2I_2 - R_3I_3 = E_1$$

## Applying KVL to mesh (ii):
$$E_2 - R_2 (I_2 - I_1) - R_5 (I_2 - I_3) - R_4I_2 = 0$$
$$-R_2I_1 + (R_2 + R_4 + R_5) I_2 - R_5I_3 = E_2$$

## Applying KVL to mesh (iii):
$$E_3 - (R_6+R_7)I_3 - R_5 (I_3 - I_2) - R_3(I_3 - I_1) = 0$$
$$-R_3I_1 - R_5I_2 + (R_3 + R_5 + R_6 + R_7) I_3 = E_3$$


## The matrix equivalent of the above three equations is:
$$
\begin{equation}
\begin{bmatrix}
R_1 + R_2 + R_3 & -R_2 & -R_3 \\
-R_2 & R_2 + R_4 + R_5 & -R_5 \\
-R_3 & -R_5 & R_3 + R_5 + R_6 + R_7
\end{bmatrix}
\begin{bmatrix}
I_1 \\
I_2 \\
I_3
\end{bmatrix}
=
\begin{bmatrix}
E_1 \\
E_2 \\
E_3
\end{bmatrix}
\end{equation}
$$

---
# Node Analysis with Current Sources

![[Pasted image 20231106141540.png]]


---
# Source Conversion / Transformation


![[Pasted image 20231106142509.png]]

A given voltage source with a series resistance can be converted into (or replaced by) an equivalent current source with a parallel resistance. Conversely, a current source with a parallel resistance can be converted into a voltage source with a series resistance.

A voltage source-series resistance combination is equivalent to (or replaceable by) a current source-parallel resistance combination if, and only if their:

- respective open-circuit voltages are equal, and
- respective short-circuit currents are equal.



---
## General Note

Voltage sources add in series
Current sources add in parallel

