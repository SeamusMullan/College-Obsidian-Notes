#maths 

Solids of Revolution
---

#### Calculating Volume

For a function $f(x)$ on the interval $[a,b]$ we can revolve the function about an axis and get a solid of rotation.

We can then get the volume of this solid by dividing it into cylinders and summing the volumes of these cylinders. each of the cylinders has a length $\Delta x$ and we can take the limit of the sum of all the cylinders as it goes to infinity to get the true volume (going from discrete -> continuous) by making an integral

$n$ can represent the number of slices we want to cut our shape into, assume we slit a curve into 3 slices (n = 3), we can make 3 cylinders from $x_0$ to $x_1$, from $x_1$ to $x_2$ and $x_2$ to $x_3$. We can represent each cylinder from the starting point using the letter $k$, eg. $k=1$ represents the cylinder between $x_{1}$ and $x_2$ (basically 0-indexed)

we can then add the volume of each of these cylinders and get a non-accurate estimate of our volume.

To calculate the actual volume we can take our discrete method (splitting and summing) and write it as a limit when $n$ goes to infinity.
$$
\text{Volume Approximation (for n chunks) =}
\sum_{k=0}^{n-1} \pi f(x_{k})^2 \Delta x
$$
$$
\text{Accurate Measurement (lim n -> infinity) = }
\pi \int_{a}^{b} f(x)^2 \, dx 
$$
#### Calculating Surface Area

First steps are similar to previous, but we use a **truncated cone** instead of a cylinder.

we can consider a cone as the following

from point $x_0$ to $x_1$ the length is still $\Delta x$, but the shape tapers from $f(x_0)$ to $f)x_1)$, we need to calculate the **Slant Height** to find the surface area of our shape.

We can calculate the surface area of a truncated cone so the plan now is similar to above, split and sum, take a limit, make an integral.

Note: $S$ represents the slant height
$$
\text{ Surface Area Approximation (n chunks) = }
\sum_{k=0}^{n-1} 2\pi \frac{f(x_{k})+f(x_{k+1})}{2}S
$$

$$
\text{Slant height (arc len) = }
\sqrt{ 1+f'(ck)^2 \Delta x}, ck \in [x_{k-1}, x_{k}]
$$

$$
\text{Accurate Measurement for SA = }
2\pi \int_{a}^b f(x) \sqrt{ 1+f'(x)^2 } \, dx 
$$

#### Compute Surface Area of Sphere

Note: $radius=1$
Take the function $f(x) = \sqrt{ 1-x^2 }$ and revolve it about the x-axis to get a sphere of radius 1.
Our bounds $[a,b]$ will be $[-1,1]$ since we are working with a unit sphere.

If we sub in our function to the above formula we can say
$$
f'(x) = \frac{d}{dx} \sqrt{ 1-x^2 } = \frac{d}{dx}(1-x^2)^{\frac{1}{2}} = \frac{-x}{\sqrt{ 1-x^2 }}
$$

$$
2\pi \int_{a}^b \frac{-x}{\sqrt{ 1-x^2 }} \sqrt{ 1 + (\frac{-x}{\sqrt{ 1-x^2 }}) ^2 } \, dx 
$$
Which simplifies to
$$
2\pi \int_{-1}^1 1 \, dx = 4\pi
$$
This is very atypical for this process and the integral outputs are usually much more complicated to evaluate. Usually numerical integration will be used to compute this, not FTC.

E.g. for the function $f(x) = \frac{1}{x}$ on the interval $[1,5]$ using $S_4$
(*Simpson's rule with $2N=4$ intervals*)

$f'(x) = \frac{-1}{x^2}$
$\sqrt{ 1+f'(x)^2 } = \sqrt{ 1+\frac{1}{x^4} }$
$$
2\pi \int _{1}^5 \frac{1}{x}\sqrt{ 1+\frac{1}{x^4} }\, dx 
$$
note: $\frac{1}{x}\sqrt{ 1+\frac{1}{x^4} } = g(x)$ for Simpson's Rule


using $S_4$
$\Delta x = \frac{5-1}{4} = 1$, $S_{4} \to \frac{1}{3}\Delta x ( g(a) +4g(a+\Delta x) +2g(a+2\Delta x) +4g(a+3\Delta x) +g(a+4\Delta x))$