#maths 

## Simplifying functions to determine the range / codomain
---
Take an input function $f(x)$ which has a rule $x \to \frac{1}{2x - 6}$ and a domain $\mathbb{R}$. We can take the rule for this function and break it down into different functions, of which we can calculate the ranges in a simpler way. 

Let's break down $f$ into 2 functions, $g \text{ and } h$. We can break the rule in $f$ down into two separate rules as follows.
$$
\displaylines{
g(x) = \frac{1}{x} \\
h(x) = 2x-6
}
$$
Then we can make a **Composite Function** out of $g \text{ and } h$ which is written
$$\displaylines{
g(h(x)) \\ \text{ or } \\ g \circ h(x)
}
$$
This is then a lot easier to solve, since we can find a range that works for the first function $g(x)$ (Which in this case is $\mathbb{R} \setminus 0$  since it's a fraction)

Then we can filter all the inputs for $h(x)$ so that they fit into the set above (In this case, that means that the output of $h(x)$ can't be zero)

We then just solve this equation to find what value of $x$ **is** zero, then we exclude it from our domain
$$
\displaylines{
2x-6 = 0 \\
2x = 6 \\
x = 3
}$$
Now we know that we can use any input for $h(x)$ as long as it isn't 3, and that $g(x)$ will work properly with any output $h(x)$ gives it. We can then conclude that the domain for $f(x)$ can be written as
$$\displaylines{
Domain_h = \mathbb{R} \setminus 3 \text{ : (Since 3 gives us the output 0)} \\ \\

Domain_g = \mathbb{R} \setminus 0 \text{ : (Since we can't put 0 under a fraction)} \\ \\
\therefore \text{ } Domain_f = \mathbb{R} \setminus 3 \text{ Since our input goes to h(x) then g(x)}\\
}$$
By breaking down the function into separate parts, we were able to find out what values of x at the highest level (input into $h(x)$) would cause problems down the line and this let us filter out the values that do not work with our function $f$

### Inverse Functions
---
#### Rule(s)
- The function you want to invert must be onto ( see [[Class 4 (DC)]] )

