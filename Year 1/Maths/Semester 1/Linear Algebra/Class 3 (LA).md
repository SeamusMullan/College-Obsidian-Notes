#maths 

### Gaussian Elimination & Row Reduction
---
Process to convert an arbitrary matrix into row echelon form (see [[Class 2 (LA)]] )
Formalisation of procedure of eliminating variables shown in How-To section

Allows description of solution sets of systems of linear equations

---
Given a system of equations we can create an augmented matrix. We then perform gaussian elimination which converges the matrix into REF. Then back substitution can be used to get the solution set of the linear system.

Converting the system can change the solution set of the original equations.

### How-To
---
A series of 'elementary row operations' done in a particular fashion. 

[Godsend Guide](https://www.vedantu.com/maths/gauss-elimination-method)
### Row Reduction

See [This Study Note](https://www.sparknotes.com/math/algebra2/matrices/section4/)
- Swap two rows (i and j)
	- Any two rows in the matrix
- Multiply rows by non-zero scalar (denoted $\lambda$)
	- Written $\lambda \times i$ or $\lambda (i)$
- Add a multiple ($\lambda$) of row j to another row i
	- $i + \lambda(j)$
	- $\lambda$ can be negative, which results in subtraction
	- i and j are the same as the first step, not the row they represented, but the value of the row (1st, 2nd, 3rd, etc.)

### Gaussian Elimination

$$
\displaylines{
x + y = 3 \\
x - y = 1 \\
\therefore x = 1+ y \\
\text{Replace x in eq 1} \\
(1+y) + y = 3 \\
\therefore y = 1 \\
\text{sub in y = 1} \\
x + 1 = 3 \\
\therefore x = 2\
}
$$

Now suppose $A$ is our augmented Matrix. If we eliminate the first variable .
$$
\displaylines{
A \to \text{ ( Eliminate first variable, eg: } x_1 ) \\


}
$$

