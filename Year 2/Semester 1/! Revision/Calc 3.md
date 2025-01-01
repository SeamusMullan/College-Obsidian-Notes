#calc #year2

# Euclidean Space and Geometry (Slides 1)

## 1. The Euclidean Plane  $R^2$ 
### Definition
The Euclidean plane is defined as the set of all points with two real coordinates:

$$R^2 = \{(x, y) : x, y \in \mathbb{R}\}$$

### Key Features
1. **Axes**:
   - **x-axis**: The horizontal axis where  y = 0 . Contains all points (x, 0).
   - **y-axis**: The vertical axis where  x = 0 . Contains all points (0, y).

2. **Quadrants**:
   The x- and y-axes divide  R^2  into four regions:
   - **Quadrant I**:  $x > 0, y > 0$
   - **Quadrant II**:  $x < 0, y > 0$ 
   - **Quadrant III**:  $x < 0, y < 0$ 
   - **Quadrant IV**:  $x > 0, y < 0$ 

---

## 2. The Euclidean Space  $R^3$ 
### Definition
The Euclidean space is the set of all points with three real coordinates:

$$R^3 = \{(x, y, z) : x, y, z \in \mathbb{R}\}$$
### Key Features
1. **Axes**:
   - **x-axis**: Contains all points where  y = 0  and  z = 0 .
   - **y-axis**: Contains all points where  x = 0  and  z = 0 .
   - **z-axis**: Contains all points where  x = 0  and  y = 0 .

2. **Coordinate Planes**:
   - **xy-plane**:  z = 0 , contains all points (x, y, 0).
   - **yz-plane**:  x = 0 , contains all points (0, y, z).
   - **xz-plane**:  y = 0 , contains all points (x, 0, z).

3. **Octants**:
    $R^3$  is divided into 8 regions (octants) by the coordinate planes. The **first octant** consists of points where  x > 0, y > 0, z > 0 .

---

## 3. Distance Formula
The distance between two points  $A(x_1, y_1, z_1)$  and  $B(x_2, y_2, z_2)$  in  $R^n$  is given by:
$$d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}$$

For  $R^2$ , the formula simplifies to:
$$d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$


---

## 4. Geometric Shapes in  $R^3$ 

### Spheres
A sphere is the set of all points equidistant from a centre  C(x_0, y_0, z_0) . Its equation is:

$$(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2$$

Where:
-  $r$ : Radius of the sphere.
-  $(x_0, y_0, z_0)$ : Centre of the sphere.

### Planes
The general equation of a plane in  $R^3$  is:
$$ax + by + cz + d = 0$$
Where:
-  a, b, c : Coefficients determining the orientation of the plane.
-  d : Determines the plane's offset from the origin.

### Intersections
- Two non-parallel planes intersect to define a **line**.
- A plane can intersect a sphere to form a **circle**.

---

## 5. Visualization Examples
### Sphere
A sphere centred at  $(0, 0, 0)$  with radius $r = 3$ :
$$x^2 + y^2 + z^2 = 9$$
### Planes
Two intersecting planes:
1. $x + y + z = 1$
2.  $x - y + 2z = 3$

The line of intersection satisfies both equations.

---

## 6. Practical Insights
- Distances are key to defining **spheres** and determining **relative positions**.
- Planes and lines describe geometric features and are often used in optimization and constraint problems.

---

# Functions of Several Variables (Slides 2)

## 1. Definition of Functions
A function of several variables  $f : R^n \to R$ assigns a single real number to each point in  $R^n$ . 

### General Form
- **Two variables**:  $f(x, y)$ 
- **Three variables**:  $f(x, y, z)$ 

### Domain and Graph
1. **Domain ( $D_f$ )**: The set of all input points where  $f(x)$  is defined.
   - Example: For  $f(x, y) = \sqrt{1 - x^2 - y^2}$ ,  $D_f = \{(x, y) \in R^2 : x^2 + y^2 \leq 1\}$ .

2. **Graph ( $C_f$ )**: The set of points  $x, y, f(x, y))$ in  $R^3$ for all $( (x, y) \in D_f$ .
   - Example:  $f(x, y) = x^2 + y^2$  forms a paraboloid.

---

## 2. Values and Evaluation
To compute  $f(x, y)$ , substitute the given values of  x  and  y  into the formula.

### Example 1
For  $f(x, y) = \frac{x}{y - z}$ , find  $f(2, 3, 1)$ :
$f(2, 3, 1) = \frac{2}{3 - 1} = 1$

---

## 3. Level Sets
A **level set** is the collection of points where the function takes a constant value  $c$ :

$$L_c(f) = \{x \in D_f : f(x) = c\}$$
### Types of Level Sets
1. **Level Curves** ( $R^2$ ): 
   - Example:  $f(x, y) = x^2 + y^2$ 
     -  $c = 1$ :  $x^2 + y^2 = 1$  (circle)
   - **Purpose**: Represents cross-sections of the graph  $C_f$ .

2. **Level Surfaces** ( $R^3$ ):
   - Example:  $f(x, y, z) = x^2 + z^2$ 
     -  $c = 1$ :  $x^2 + z^2 = 1$  (cylinder around y-axis)

---

## 4. Limits of Functions
### Definition
The limit of  $f(x)$  as  $x \to x_0$  is  $L$  if, as  $x$  gets arbitrarily close to  $x_0$ ,  $f(x)$  approaches  $L$ :

$$lim_{x \to x_0} f(x) = L$$


-  $f(x)$  need not be defined at  $x_0$.
- If the limit exists, it is unique.

---

## 5. Continuity
A function  f  is **continuous** at a point  $x_0$  if:
1. $f(x_0)$  exists.
2.  $\lim_{x \to x_0} f(x) = f(x_0)$ 

### Example
For  $f(x, y, z) = x^2 - \ln(y + z)$ , check continuity at  $(1, 0, 1)$ :
1.  $f(1, 0, 1) = 1^2 - \ln(0 + 1) = 1$ .
2. Since  $f(x, y, z)$  is defined and continuous in its domain, it is continuous at  $(1, 0, 1)$ .

---

## 6. Methods for Finding Limits
### Squeeze Theorem
If
$$g_1(x) \leq f(x) \leq g_2(x)$$
and 
$$\lim_{x \to x_0} g_1(x) = \lim_{x \to x_0} g_2(x) = L$$then:
$$\lim_{x \to x_0} f(x) = L$$
### Example 2
Find $$\lim_{(x, y) \to (0, 0)} \frac{x^2}{x^2 + y^2}$$ 
1.  $$0 \leq \frac{x^2}{x^2 + y^2} \leq 1$$
2. $$\lim_{(x, y) \to (0, 0)} 0 = \lim_{(x, y) \to (0, 0)} 1 = 0$$
3. By the Squeeze Theorem, the limit is 0 .

---

## 7. Limits Along Paths
In  $R^n$ , limits may depend on the path taken. If different paths lead to different values, the limit does not exist.

### Example 3
Find if  the following exists:
$$\lim_{(x, y) \to (0, 0)} \frac{x^2 - y^2}{x^2 + y^2}$$ 
1. Along  $y = 0 :  f(x, 0) = 1$ .
2. Along  $x = 0 :  f(0, y) = -1$ .
3. Since different paths yield different values, the limit does not exist.
---
## 8. Visualizing Limits and Continuity
1. **Level Curves**: Visualize the function’s value at various heights.
2. **Paths**: Highlight how function values differ based on approach directions.

---
