#maths 

Lets get this bullshit over with
Matrix Stuff
---

Matrix -> array of numbers

$$
\displaylines{
\begin{bmatrix}
1 & 2 \\
3 & -5
\end{bmatrix} \\
\text{This is a 2x2 matrix} \\ \\

\begin{bmatrix}
1 & 2 & 4 \\
3 & -5 & 7
\end{bmatrix} \\
\text{This is a 2x3 matrix}\\ \\

\text{Matrices are written in the form HxW where H is the heigh and W is the width} \\
}

$$

Matrices can be used to store data for lots of applications like Computer Science, Statistics, Biology, Chemistry and basically any other STEM bullshit.

Augmented Matrices are a combination of 2 matrices, usually separated by a bar. A good example is in a system of linear equations

$$
\displaylines{
A =
\begin{bmatrix}
1 & 2 & 4  & |& 4 \\
8 & 4 & 3  & |& 17 \\
1 & 2 & -7 & |& -34 \\
\end{bmatrix}\\


}
$$

Numbers can be referenced using subscripts.
Eg: $$\displaylines{
A_{11} = 1 \\ 
A_{21} = 8 \\
A_{32} = 2 \\
etc.
}$$
Scalar Multiplication
---
Multiplying by a value $\lambda$ by a matrix means taking all the entries in an array and multiplying it by $\lambda$

Matrix Addition
---

Given $A$ and $B$, we can form the sum matrix $C$ only if $A$ and $B$ have the same number of entries
$$\displaylines{
A = 
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}\\

B = 
\begin{bmatrix}
4 & 3 \\
2 & 1
\end{bmatrix}
\\ \\
A + B = 
\begin{bmatrix}
1+4 & 2+3\\
3+2 & 4+1
\end{bmatrix} = 
\begin{bmatrix}
5 & 5 \\
5 & 5
\end{bmatrix}
} 


$$If they do not have the same number of entries, the answer is not defined.

Row x Column Multiplication
---

$$
\displaylines{

A = 
\begin{bmatrix}
1 & 2 & 3 & 4
\end{bmatrix} \text{ , }

B = 
\begin{bmatrix}
1\\2\\3\\4\\
\end{bmatrix} \\

A \times B = (A_{11} \times B_{11}) + (A_{12} \times B_{21}) + (A_{13} \times B_{31}) + (A_{14} \times B_{41})\\
A \times B = 1 + 4 + 9 + 16 = 30
}
$$

Given a MxN Matrix A and an NxP Matrix B
$$
\displaylines{

B = 
\begin{bmatrix}
1 & 2 & 3 & 4
\end{bmatrix} \text{ , }

A = 
\begin{bmatrix}
1\\2\\3\\4\\
\end{bmatrix} \\
}
$$