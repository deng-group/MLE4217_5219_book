# Local Optimization

These methods are good at finding local minima. They are often used when you have a reasonable starting point or when the objective function is relatively smooth (ideally, convex).

## Gradient Descent

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

Gradient descent can sometimes "zig-zag" inefficiently, especially in valleys with steep sides. Conjugate gradient methods improve upon this by choosing search directions that are *conjugate* to each other.  This ensures that each step makes progress in a new, independent direction. CG converges more quickly than GD for many problems, particularly when the objective function is quadratic.

- Key Idea: Instead of just using the negative gradient, the search direction is a linear combination of the negative gradient and the previous search direction.

## BFGS (Broyden-Fletcher-Goldfarb-Shanno)

BFGS is a *quasi-Newton* method.  Newton's method uses the *Hessian* (matrix of second derivatives) to find the optimum.  However, calculating the Hessian can be computationally expensive. BFGS *approximates* the Hessian iteratively, making it more practical for many problems.

- Key Idea:  BFGS builds up an approximation to the inverse Hessian matrix over iterations, using information from the gradient. This approximation is used to determine the search direction.  It's generally more robust and efficient than plain gradient descent, especially for non-convex problems.

- Limited-memory BFGS (L-BFGS):  For very high-dimensional problems (many variables), storing the full (approximate) Hessian in BFGS can become memory-intensive.  L-BFGS stores only a limited number of past gradient and position updates, reducing memory requirements.

## Other Local Optimization Methods
Newton's method.

Nelder-Mead (Simplex) method: doesn't require derivatives.

## How to Choose an Optimization Algorithm
Consider the computational cost of evaluating the objective function and its derivatives.

Consider the size and dimensionality of the problem.

Experiment with different methods and parameters.

Always visualize results to check for convergence and reasonableness.
