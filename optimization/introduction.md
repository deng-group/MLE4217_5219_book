# Introduction

In materials science and engineering, we're constantly searching for *better* materials. Better might mean stronger, lighter, more conductive, more stable, cheaper to produce, or a combination of these properties. "Better" almost always translates to finding the optimal value of some property or combination of properties. This is where optimization comes in.

Optimization, in a mathematical sense, is the process of finding the input values to a function that result in either the *minimum* or *maximum* output value of that function.  We call this function we're trying to minimize or maximize the *objective function* (sometimes also called the *cost function* or *energy function*).

Think about it:

*   Designing a new alloy: We want to find the optimal composition (percentages of different elements) that maximizes strength and minimizes weight.
*   Predicting crystal structures: We want to find the atomic arrangement with the *lowest* potential energy, as this represents the most stable structure.
*   Optimizing a synthesis process:  We might want to find the reaction conditions (temperature, pressure, concentration) that yield the highest product purity in the shortest time.
*   Training Machine Learning Models: We optimize parameters of model to minimize loss, which makes model's prediction close to real data.

In all these cases, we have a defined objective function (strength, energy, purity, loss, etc.) and a set of *variables* we can control (composition, atomic positions, reaction conditions, model's parameters). Optimization is the systematic process of exploring the space of these variables to find the "best" possible outcome according to our objective function.

## Basic Concepts and Overview

Before diving into specific algorithms, let's define some key concepts:

1. Objective Function (f(x)):

This is the function we want to minimize or maximize.  `x` represents the input variables (often a vector). For example:

*   `f(x)` could be the total energy of a crystal structure, where `x` represents the positions of all the atoms.
*   `f(x)` could be the cost of manufacturing a material, where `x` represents the processing parameters.
*  `f(x)` could be the loss function, where `x` represents the parameters.

2. Variables (x):

These are the parameters we can adjust to influence the objective function.  They can be:

*   Continuous:  Like temperature or pressure, which can take on any value within a range.
*   Discrete: Like the choice of a specific element in an alloy (e.g., choosing between aluminum, iron, or copper).
*   Categorical: Representing distinct categories, like crystal structure type (FCC, BCC, HCP).

3. Constraints:

Often, we can't simply choose *any* value for our variables.  Constraints define the allowed range or relationships between variables. Examples:

*   Composition constraints: The percentages of all elements in an alloy must sum to 100%.
*   Temperature limits: A reaction might only be feasible within a certain temperature range.
*   Non-negativity: Concentrations of chemical species cannot be negative.

4. Local vs. Global Optima:

*   Local Minimum: A point where the objective function is lower than all *nearby* points.  Imagine a small dip in a hilly landscape.
*   Global Minimum: The absolute lowest point of the objective function across the *entire* search space.  This is the deepest valley in our landscape.

Finding the global minimum is generally much harder than finding a local minimum. Many optimization algorithms can get "stuck" in local minima, failing to find the true global optimum.

5. Convexity:

The concept of convexity is crucial. A function is *convex* if, for any two points within its domain, the line segment connecting those points lies entirely above or on the function's curve. Mathematically:

$f(\lambda x_1 + (1 - \lambda)x_2) \le \lambda f(x_1) + (1 - \lambda)f(x_2)$

for any $x_1$, $x_2$ in the domain and any $\lambda$ between 0 and 1.

Convex functions are "nice" because they have only *one* minimum, which is the global minimum.  If a function is *non-convex* (has multiple bumps and valleys), finding the global minimum is much more challenging.

6. Gradient:

The gradient, denoted by $\nabla f(x)$, is a vector that points in the direction of the *steepest ascent* of the function at a given point.  Its components are the partial derivatives of the function with respect to each variable:

$\nabla f(x) = \left[ \frac{\partial f}{\partial x_1}, \frac{\partial f}{\partial x_2}, ..., \frac{\partial f}{\partial x_n} \right]$

The negative gradient, $-\nabla f(x)$, points in the direction of steepest *descent*. This is fundamental to many optimization algorithms.

7. Hessian:
The Hessian matrix is the square matrix of second-order partial derivatives of a scalar-valued function.
$
H(f) = \begin{bmatrix}
\frac{\partial^2 f}{\partial x_1^2} & \frac{\partial^2 f}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_n} \\
\frac{\partial^2 f}{\partial x_2 \partial x_1} & \frac{\partial^2 f}{\partial x_2^2} & \cdots & \frac{\partial^2 f}{\partial x_2 \partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^2 f}{\partial x_n \partial x_1} & \frac{\partial^2 f}{\partial x_n \partial x_2} & \cdots & \frac{\partial^2 f}{\partial x_n^2}
\end{bmatrix}
$
The Hessian describes the local curvature of a function of many variables.


## Visualizations
- 1D, 2D function.
- Local vs global minimum.
- Contour plots.
- Gradient.

## Challenges
High-Dimensionality: Many variables can influence material properties (composition, structure, defects, processing parameters).

Non-Convexity: The objective function is often non-convex, meaning it has multiple local minima, making it difficult to find the global minimum.

Computational Cost: Evaluating the objective function (e.g., running a DFT calculation) can be computationally expensive.

Discrete Variables: Some variables are discrete (e.g., choice of elements, crystal structure type), while others are continuous (e.g., composition fractions).

Noisy Objective Functions: Experimental data or even simulations can have noise, making optimization more challenging.

Constraints: Physical and chemical constraints (e.g., charge neutrality, phase stability).

Multi-objective optimization: Optimize multiple properties at the same time.

