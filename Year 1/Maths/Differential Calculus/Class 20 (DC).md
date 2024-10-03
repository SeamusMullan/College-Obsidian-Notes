#maths 

Change
---

suppose function $f$. we want to be able to use maths to abstract the real world. take $x$ as time and $y$ as distance from a point for example.

Take a point $x_0$ on this function, it has an output $f(x_0)$. we want to measure the speed at which $f(x_0)$ changes. Take another point $x_0 +h$, we get the output $(f_0 + h)$ which gives us two points on the graph.

We can draw a line between these points (called a secant line) and the slope of this line tells us how quickly things have changes between these points. The larger the slope, the larger the change, positive or negative.

By decreasing $h$ we can get a more and more accurate result, moving from an average change to a more instantaneous change.
$$\frac{f(x_0 + h)-f(x_0)}{x_0+h -x_0}$$
$$\frac{f(x_0 + h)-f(x_0)}{h}$$

Side note: the greek letter delta ( $\Delta$ ) is used to represent change, so we can write this as
$$\frac{\Delta y}{\Delta x}$$


This is first principles i think.

Bring in the limits bitch
---

to find the exact value, we get the limit as $h$ goes to 0
$$\lim_{h\to h}\frac{f(x_0 + h)-f(x_0)}{h}$$
the function of all the values of $x_0$ through this is written $f'(x_0)$. This can also be written as
$$\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}$$


---