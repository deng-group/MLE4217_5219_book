# Local Optimization

These methods are good at finding local minima. They are often used when you have a reasonable starting point or when the objective function is relatively smooth (ideally, convex).

## Gradient Descent
````{sidebar} 
```{figure} ../figures/gradient_descent_2d.png
---
width: 100%
name: directive-fig
---
Gradient descent in 1D and 2D. The algorithm iteratively takes steps in the direction of the negative gradient to find the minimum of the function.
```
````
This is the workhorse of many optimization problems.  It works by iteratively taking steps in the direction of the *negative gradient*.

The algorithm is simple:

1.  Choose an initial guess, $x_0$.
2.  Calculate the gradient, $\nabla f(x_k)$, at the current point.
3.  Update the position:  $x_{k+1} = x_k - \alpha \nabla f(x_k)$, where $\alpha$ is the *learning rate* (a small positive number that controls the step size).
4.  Repeat steps 2 and 3 until a convergence criterion is met (e.g., the gradient becomes very small, or the change in the objective function is negligible).

Learning Rate ($\alpha$) should be chosen properly: If $\alpha$ is too small, the convergence will be very slow. If $\alpha$ is too large, the algorithm might overshoot the minimum and oscillate or even diverge. There are various strategies for choosing and adapting the learning rate (e.g., using a fixed value, decreasing it over time, or using more sophisticated methods like Adam).

GD is simple to implement but can be slow for high-dimensional problems or functions with many local minima and is sensitive to the choice of learning rate.

Variants: Stochastic Gradient Descent (SGD, for large datasets, updates with a subset of the data), Momentum (adds a "momentum" term to accelerate convergence and escape shallow local minima), Adam (combines momentum and adaptive learning rates).

## Conjugate Gradient
```{figure} ../figures/cg.png
---
width: 100%
name: directive-fig
---
Comparison of gradient descent and conjugate gradient methods. Conjugate gradient methods can converge more quickly than gradient descent, especially for quadratic functions.
```
Gradient descent can sometimes "zig-zag" inefficiently, especially in valleys with steep sides. Conjugate gradient methods improve upon this by choosing search directions that are *conjugate* to each other.  This ensures that each step makes progress in a new, independent direction. CG converges more quickly than GD for many problems, particularly when the objective function is quadratic.

The search direction, $d_k$, is calculated as:

$$d_k = -\nabla f(x_k) + \beta_k d_{k-1}$$

where $\beta_k$ is a scalar that ensures conjugacy.  Different formulas for $\beta_k$ exist (e.g., Fletcher-Reeves, Polak-Ribière).  The key idea is that $d_k$ is a linear combination of the current negative gradient and the previous search direction.  The update rule is then:

$$x_{k+1} = x_k + \alpha_k d_k$$

where $\alpha_k$ is again chosen (often via line search) to minimize the function along the search direction.


- Key Idea: Instead of just using the negative gradient, the search direction is a linear combination of the negative gradient and the previous search direction.

## Newton's Method
````{sidebar} 
```{figure} ../figures/newton_method.png
---
width: 100%
name: directive-fig
---
Newton's method of optimization and the comparison to gradient descent. Newton's method converges much faster than gradient descent near the minimum.
```
````
Newton's method uses both the gradient and the Hessian matrix (second derivatives) to find the minimum of a function. It's based on approximating the function locally by a quadratic function and then finding the minimum of that quadratic.

We want to find a point where the gradient is zero, $\nabla f(x) = 0$. This is a necessary condition for a minimum (assuming the function is differentiable).  Newton's method uses a Taylor series expansion of the gradient around the current point, $x_k$:

$$\nabla f(x_k + \Delta x) \approx \nabla f(x_k) + H(x_k) \Delta x$$

where $H(x_k)$ is the Hessian matrix at $x_k$.  We want to find $\Delta x$ such that $\nabla f(x_k + \Delta x) = 0$.  Setting the right-hand side to zero and solving for $\Delta x$, we get:

$$
0 = \nabla f(x_k) + H(x_k) \Delta x

\Delta x = -H(x_k)^{-1} \nabla f(x_k)
$$

Algorithm:

1.  Choose an initial guess, $x_0$.
2.  Calculate the gradient, $\nabla f(x_k)$, and the Hessian, $H(x_k)$, at the current point.
3.  Calculate the update step: $\Delta x = -H(x_k)^{-1} \nabla f(x_k)$.
4.  Update the position: $x_{k+1} = x_k + \Delta x$.
5.  Repeat steps 2-4 until a convergence criterion is met.

Near a minimum, Newton's method converges very rapidly (much faster than gradient descent).  The number of correct digits roughly doubles with each iteration. However, the Hessian can be computationally expensive to calculate, and the method can be sensitive to the choice of starting point. In addition, the Hessian matrix must be positive definite (which is true near a *minimum*) for the inverse to exist and for the method to move towards a minimum. If the Hessian is not positive definite, the method may diverge or move towards a saddle point or maximum.

## BFGS (Broyden-Fletcher-Goldfarb-Shanno)

BFGS is a *quasi-Newton* method.  Newton's method uses the *Hessian* (matrix of second derivatives) to find the optimum.  However, calculating the Hessian can be computationally expensive. BFGS *approximates* the Hessian iteratively, making it more practical for many problems.

BFGS iteratively updates an approximation to the *inverse* Hessian, denoted as $B_k$.  The update rule for the approximation is complex, but the key idea is that it uses the change in the gradient and the change in the position to improve the approximation:

$$
B_{k+1} = B_k + \frac{y_k y_k^T}{y_k^T s_k} - \frac{B_k s_k s_k^T B_k}{s_k^T B_k s_k}
$$

where $s_k = x_{k+1} - x_k$ and $y_k = \nabla f(x_{k+1}) - \nabla f(x_k)$.

The search direction is then calculated as:

$$
d_k = -B_k \nabla f(x_k)
$$

And the position update is:

$$
x_{k+1} = x_k + \alpha_k d_k
$$

(Again, $\alpha_k$ is often found via line search.)

- Key Idea:  BFGS builds up an approximation to the inverse Hessian matrix over iterations, using information from the gradient. This approximation is used to determine the search direction.  It's generally more robust and efficient than plain gradient descent, especially for non-convex problems.

- Limited-memory BFGS (L-BFGS):  For very high-dimensional problems (many variables), storing the full (approximate) Hessian in BFGS can become memory-intensive.  L-BFGS stores only a limited number of past gradient and position updates, reducing memory requirements.

## Other Local Optimization Methods
Nelder-Mead (Simplex) method doesn't require derivatives. It constructs a simplex (a shape with $n+1$ vertices in $n$ dimensions) around the current point and iteratively shrinks, expands, or reflects the simplex to find the minimum.

Powell's method is another derivative-free method that uses conjugate directions to find the minimum. It's often more efficient than Nelder-Mead for high-dimensional problems.

