#maths 

# Mean Value Theorem
---
If you have a differentiable function $f(x)$, you can choose two points on the function ( $a, b$ ), draw a straight line through the two points on the graph, these points being $(a,f(a)), (b,f(b))$

The mean value theorem says that this line has a slope 
$$
\frac{f(b)-f(a)}{b-a}=m=slope
$$
The mean value theorem uses a tangent line to the original function where the slope is the same as the line we have made between the two points above. The Mean Value theorem states there exists a $c \in [a,b]$ where

$$
f(b)-f(a)=f'(c)(b-a) \text{ for some c} \in [a,b]
$$
By applying the **MVT** to a function $f(x)$, the function who's arc length we wish to compute and to the interval $[x_{i},x_{i+1}]$ , we get a point $c_{i} \in [x_{i}, x_{i+1}]$

Note: $$f(x_{i+1}) - f(x_{i}) = f'(c_{i})(x_{i+1}-x_{i}) =f'(c_{i}) \Delta x$$

$$
\Delta x\sum_{n=1}^{n-1}{\sqrt{ i + f(c_{i})^2}}
$$

This appears formally identical to $L_n$ for the function $\sqrt{ i + f(x)^2}$ except that $C_{i} \in [x_{i}, x_{i+1}]$ would satisfy $c_{i} = x_{i}$

---
Since 
$$
\lim_{ n \to \infty } L_{n} = \lim_{ n \to \infty } R_{n}
$$
we can say
$$
\lim_{ n \to \infty } A_{n} = \int_{a}^{b} \sqrt{ 1+f'(x)^2 } \, dx = \text{Arc Length}
$$

This can be used to calculate the arc length / circumference of a circle. We can check our maths by seeing if the circumference of a unit circle $= 2\pi$ 

#### Step 1: Compute $f'(x)$

$f(x) = \sqrt{ 4-x^2 }$, $f'(x) = \frac{2}{\sqrt{ f-x^2 }}$

#### Step 2: Compute above integral
$$
\int_{-2}^2 f'(x) \, dx 
$$
Use $x = 2\sin \phi$
$dx = 2\cos \phi d\phi$
$= 2 \arcsin\left( \frac{x}{2} \right) \rvert_{-2}^2$
$= 2\pi$

---
# Solids and Revolution

Let a function $f(x) \text{on [a,b] that is non negative}$
Non Negative -> $\text{signed area = area = }\int f(x) \, dx$

Assume the area between a and b is rotated about the x axis. We want to find the solid that is traced in this process.

We note that at all points perpendicular to the x-axis, there is a circle at its cross section.
$\text{ A solid of revolution is a 3D object obtained by revolving a function  }f(x) \text{ about the x-axis or } g(y) \text{ about the y-axis}$
We want to find the **volume** and the **surface area** of these solids.

On the cross-sections perpendicular to the axis of revolution. we can say that the radius of the circle is $f(x)$ and the centre is the axis of revolution. We can use this to calculate the volume of the solid as follows


Calculating the Volume
---

Disc Method
- Cut solid into pieces (cylinders / discs)
- Sum of volumes = estimated volume
- take limit to infinity *(and beyond!)*
- Resulting integral = volume

Take the points $a, b$ as the start and end points of the solids (the *usually* flat surfaces on the edges of the solid where the axis of revolution intersects the solid)

Realistically, this is just the Left/Right hand thingy all again, but with another dimension

Divide the revolved solid into discs with a length $\Delta x$ on the x axis where
$$
\begin{align}
\Delta x = \frac{b-a}{n} \\
\text{Each Disc will have a volume of } \pi r^2 h \\

\end{align}
$$