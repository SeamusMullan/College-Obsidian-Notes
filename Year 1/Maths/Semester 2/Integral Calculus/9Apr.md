#maths 

## Integration by Parts

With two functions $u(x), v(x)$
$(uv)' = u'v+uv'$
$\therefore \int uv' + u'v \, dx = uv+c$
By Linearity -> $\int uv' + u'v \, dx = \int uv' \, dx + \int u'v \, dx$

$\int  uv' \, dx + \int  u'v \, dx = uv+c$
Solve for $\int  uv' \, dx = uv- \int u'v \, dx$
ignore $+c$ since it is on both sides

Theorem (where $u$ and $v$ are functions in $x$):
let $u(x), v(x)$ be differentiable, then $\int  u(x)v'(x) \, dx = u(x)v(x) - \int u'(x)v(x) \, dx$

### Example 1

Compute $\int  xe^x \, dx$
Factor $xe^x$ into u and v
A: To use integration by parts we need to write $\int  xe^x \, dx$ as the integral of $\int uv'\ dx$
aka $xe^x = uv'$
We also need to be able to compute v (integrate $v'$) and u (integrating $u'v$)
Assume:
$u = x$
$v' = e^x$
Compute:
$u' = 1$
$v = e^x\ (+c)$ Simply give a specific antiderivative


Using the formula above
$\int  u(x)v'(x) \, dx = u(x)v(x) - \int u'(x)v(x) \, dx$

$uv - \int u'v \, dx$
can be written
$xe^x - \int (1)e^x \, dx = xe^x - e^x + c$


### Exercise 2

$\int \ln (x) \, dx$

A: factor $ln(x) = uv'$
Write $ln(x)$ as $1 \times ln(x)$
since we need to find the antiderivative of $ln(x)$, it cant equal $v'$ since we need to integrate it
so we let $v' = 1$ and $u = ln(x)$ (disregard +c, said at end)

find $v$ -> $\int 1 \, dx$ -> $x$
find $u'$ -> $\int \ln(x) \, dx = \frac{1}{x}$

Use equation $\int uv' \, dx = uv - \int u'v \, dx$

$\ln(x)\times x - \int 1 \, dx$
$\therefore \int \ln(x) \, dx = \ln(x) \times x - x + c$

## When to do integration by parts

When an integral is a product of two functions that can be written in the form $uv'$.
Examples:
- $\ln(x)sin(x)$
- $\log_{2}(10)3x$
- $f(x)g(x)$ for any function $f(x), g(x)$ where both functions can be differentiated


### Example 3

$\int_{0}^{1} xe^{3x} \, dx$

Option 1. Using integration by parts
$xe^{3x} = uv'$
find antiderivative and use FTC

Option 2. Use integration by parts for definite integrals

$\int_{a}^{b} uv' \, dx = uv\ \text{(from a to b)} - \int_{a}^{b} u'v \, dx$

$\int_{0}^{1} xe^{3x} \, dx = x\left( \frac{1}{3}e^{3x} \right)$ (from a to b)

Which then equals:
$\left( \frac{e^3}{3}-0 \right) - \frac{1}{3}\left( \frac{1}{3}e^3 \right) = \frac{2e^3-1}{9}$


### Example 4

$\int  x^2e^x \, dx$

$u' = e^x$
$v = x^2$

$u = e^x$
$v' = 2x$

Formula: $\int uv' \, dx = uv - \int u'v \, dx$

$e^x \times x^2 - \int 2xe^x \, dx$
$e^x \times x^2 - 2\int xe^x \, dx$
Now we need to find $\int xe^x \, dx$ by using integration by parts again

$u' = e^x$
$v = x$
$u = e^x$
$v' = 1$

Use formula again:

$2x - \int e^x \, dx = 2x-e^x$

Now add back our first section and we get our final answer (with +c added)

$x^2e^x - 2(xe^x-e^x) + c$

#### NOTE:
the equation $\int x^4e^x \, dx$ would require we repeat integration by parts 4 times instead of 2, each step getting simpler.

## LIATE Rules / Guidelines
(not technically a rule)
These help with factoring into $uv'$

LIATE stands for
- L -> Logarithmic
- I -> Inverse Trig Functions
- A -> Algebraic Functions (polynomials)
- T -> Trig Functions
- E -> Exponentials

Use the list in order so that the function higher on the list is assigned $u$ and the function lower is assigned $v$

Eg:

$xe^x$ -> $u = x \text{ (Algebraic)}, v' = e^x \text{ (Exponentials)}$

### Example 5

$\int  x\cos(x) \, dx$

Using LIATE

Algebraic > Trig
$x \to \text{Algebraic}, \cos(x) \to \text{Trigonometric}$
$\therefore u=x, v'=\cos(x)$
$u' = 1$
$v = \sin(x)$

$\int uv' \, dx = uv - \int u'v \, dx$

$x\sin(x) - \int \sin(x) \, dx$
$\int \sin(x) \, dx = -\cos(x) + c$

Answer: $xsin(x) + cos(x) + c$

