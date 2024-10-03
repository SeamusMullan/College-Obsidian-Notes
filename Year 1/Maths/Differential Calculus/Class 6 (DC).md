#maths 

### Function Notation
---
Name: Domain $\to$ Codomain = $F: A \to B$
Input $\to$ Output (The Rule)    = $x \to f(x)$

Most functions we deal with have real inputs and output, now we adapt the following convention.
$f(x) = (some formula)$
EG: $f(x) = x^2 + 7$
When given in this notation, the function is the biggest subset of $\mathbb{R}$ of which the function makes sense. Codomain always is $\mathbb{R}$

### Set Notation
---
See [[Class 1 (DC)]]

Some functions cant take in specific values of $x$ since they cause the function to be unsolvable
$$\displaylines{
f(x) = \frac{1}{x} \\
f(0) = \frac{1}{0} \to unsolvable
}$$


We can notate subsets of the real numbers that can produce solvable equations.
$$\displaylines{
A \to codomain\\
\text{A must not contain 0} \\
\therefore A = A \setminus 0
}$$

### Combining Functions
---

$$\displaylines{
Assume \text{ }f(x) \text{ has a rule } x^2 \text{ }
\text{then the function } g(x) = \frac{1}{x}\\
\text{the composition } g(f(x)) \text{ would also equal} \\
g(f(x)) = g(x) \circ f(x) = g (x^2) = \frac{1}{f(x)} = \frac{1}{x^2} \\
}$$
The two functions here get combined so that the output of $f(x)$ becomes the input of $g(x)$.

This is also affected by the previous Set Notation issues, and this specific problem is an abstraction of $$\frac{1}{x^2}$$where it is split into two parts ($x^2 \text{ and } \frac{1}{x}$). The order of these functions matter and will affect how the set notation / domain is defined.

Some functions are exceptions to those (but aren't common). an example is given below.
$$\displaylines{
f(x) = x^2 \\
g(x) = \sqrt{x}\\
g(f(x)) = f(g(x)) \text{ since the operations are opposing}
}$$

### Inverse Functions
---

Two functions $f: A \to B$ and $g: B \to A$
Both are mutually inverse (undo each other)

if composition $f(g(x)) = g(f(x)) = x$ the functions are inverse
The general pattern / process should be:
$x \to f(x) \to f(g(x)) = x$