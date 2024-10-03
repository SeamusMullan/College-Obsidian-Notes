#maths 

Computing limits for rational functions
---


With $\frac{p(x)}{q(x)}$ being a rational function, both $p(x)$ and $q(x)$ being polynomials.

Polynomials -> continuous. Means they ALWAYS have limits (on the real line)

Rational functions -> continuous on their domains (when theres no div by 0 errors)
- Where $c \in \mathbb{R}$ , $q(c) \neq 0$  and $c$ is **in** the domain of the function
	- Solve since $c$ is in the domain for the function $q(x)$

- Where $c$ isn't in the domain (eg a value that makes the bottom function, $q(x)$ 0)
	- $f(x) = \frac{p(x)}{q(x)}$ and $c \in \mathbb{R}$ and $c = 0$
	- Case 1  $p(c) = 0$
		- assume $f(x) = \frac{x^2 - 1}{x+1}$
		- The limit $\lim_{c\to -1} f(c)$ is a bit more complicated
		- We can factorise the function and make it the following
		- $$f(x) = \frac{(x-1)(x+1)}{(x+1)}$$
		- By cancelling out the $(x+1)$ we can simplify the function so that we have two, one where $x$ doesn't break the function and one where it does
		- This can be written as a piecewise function where
		$$\displaylines{
		\begin{equation}
		f(x) =
		\left\{
		\begin{array}{lr}
		x-1 & \text{if } x \neq -1 \\
		x+1 & \text{if } x = -1
		\end{array}
		\right\}
		\end{equation}
		}$$
		- This means that within the limits we can do cancellation (where it doesn't break the equation)
	- Case 2 $p(c) \neq 0$ (Guaranteed vertical asymptote when numerator is 0)
		- Left hand And Right hand Limits become important here
		- Where left and right limits are equal, the limit exists, if not it doesn't exist
		- 