#calc #year2 

## The Euclidean Space $\mathbb{R}^n$

### The Euclidean Plane
***
*Eqn. 1: The equation for the Euclidean Plane, i.e. $\mathbb{R}^2$* 
$$ \mathbb{R}^{2}= \{(x,y): x,y \in \mathbb{R}\}$$
***
Points are written with captial $P$ as follows
***
*Eqn. 2: Notation for describing points*
$$P,\text{ } P(x_{o}, y_{o}),\text{ } P = (x_{o}, y_{o})$$
***
The $X$ and $Y$ axes can be defined as Eqn. 1 where $y=0$ for the x-axis and $x=0$ for the y-axis

$$\text{X-Axis} =  \{(x,0): x \in \mathbb{R}\}$$
$$\text{Y-Axis} =  \{(0,y): y \in \mathbb{R}\}$$

### 3 Dimensions ( $\mathbb{R}^3$ )

Our world around us can be expressed in the space $\mathbb{R}^3$
$$ \mathbb{R}^{3}= \{(x,y,z): x,y,z \in \mathbb{R}\}$$
We can represent each axis in this (and all further dimensions of $\mathbb{R}^n$) by assuming that for the $n^{th}$ axis every variable in our space excluding $n$ is equal to zero

***
*Eqn. 3: Defining axes inside a space with n dimensions*
$$
\mathbb{R}^n = \{(x_1, x_2, \dots, x_n) : x_i = 0 \, \text{for all} \, i \neq k, \, x_k \in \mathbb{R} \}
$$
***
In Eqn. 3 we can assume that the axis we wish to find is written $x_{k}$

#### Projecting a point from $\mathbb{R}^3$ onto a plane in $\mathbb{R}^2$

To project a point in $\mathbb{R}^3$ onto a plane in $\mathbb{R}^2$, i.e. the $X-Y$ plane, we can let the $z$ component of the points coordinates equal to zero (see image below for point B)

Further, we can 'move' a point to be on an axis by letting all other components equal zero (see point $J$ below)

![[Pasted image 20240924102733.png]]

### Analytical equation of planes on $\mathbb{R}^3$

EVery plane has an analytic equation written in the form
$$\alpha x + \beta y + \gamma z + \delta = 0$$

### Lines from plane intersections

Two planes in the form $\alpha x + \beta y + \gamma z + \delta = 0$ where $\delta_{1} \neq \delta_{2}$ are **parallel**.

Otherwise we can assume the planes intersect and form a line

#### Defining the line 



### Distance between points in $\mathbb{R}^3$

From Pythagoras' Theorem we know that:
$$a^{2}+ b^{2}= c^2$$$$c = \sqrt{ a^{2}+ b^2 }$$

For three dimensions we can simply include the third dimension as follows
***
*Eqn. 4: Distance between points in 3 dimensions*
$$
|AB| = \sqrt{ (x-x')^2 + (y-y')^2 + (z-z')^2 }
$$

***
### Spheres

A sphere is a shape where every point on the shape is a distance $r$ away from a centre point.

Assuming a sphere with a centre at $O(0, 0, 0)$ we can represent the shape of it directly from the distance equation as follows
$$
r^2 = { (x-x_{o})^2 + (y-y_{0})^2 + (z-z_{0})^2 }
$$
With this we can also define any point inside this sphere since a point inside the sphere $P$ that has a distance to the origin of the sphere less than the radius must be inside it, i.e.
$$
{(x-x_{o})^{2} + {(y-y_{0})^{2} + {(z-z_{0})^{2}}}} < r^2
$$
Similarly we can write points outside like this
$$
{(x-x_{o})^{2} + {(y-y_{0})^{2} + {(z-z_{0})^{2}}}} > r^2
$$

### Vectors

Vectors
Definition: A vector in $\mathbb{R}^2$ or $\mathbb{R}^3$ represents a directional linear segment. For example, the vector $\mathbf{u}$ can be denoted as:

$$$\mathbf{u} := \overrightarrow{AB} := AB$$

Point A is the start of the vector, and point B is the end.
The magnitude (or length) of the vector is the distance between A and B:

$|\mathbf{u}| := |\overrightarrow{AB}| := |AB|$

• Equality of Vectors: Two vectors are equal if they have the same direction and magnitude. This allows the vector to be translated (moved) without rotation or distortion.

• Real-World Examples: Common examples of vectors include velocity, acceleration, and force.

• Coordinates in $\mathbb{R}^3$: A vector $\mathbf{u} = (u_1, u_2, u_3) in \mathbb{R}^3$ (similarly for $\mathbb{R}^2$) represents the change from the starting point $A(a_1, a_2, a_3)$ to the ending point $B(b_1, b_2, b_3)$. The vector $\overrightarrow{AB}$ is calculated as:

$$
\overrightarrow{AB} = (b_1 - a_1, b_2 - a_2, b_3 - a_3)
$$

