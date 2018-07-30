# Functional Programming

Functional programming is not about lambda calculus, monads, morphisms, and combinators. It’s about having many small well-defined composable functions without mutations of global state, their arguments, and IO.

- The state of a program can be defined as a snapshot of the data stored in all of its objects at any moment in time. Sadly, JavaScript is one of the worst languages when it comes to securing an object’s state

- Users demand that web applications feel more like a native desktop or a mobile app with rich and responsive widgets. Naturally, these demands force JavaScript developers to think more broadly about the solution space and to adopt adequate programming paradigms and best practices that provide the best possible solutions.

-

* Thinking in terms of functional programming helps us write cleaner and more succinct code that is more modular and testable. It makes complex code more readable

* functional programming isn’t a framework or a tool, but a way of writing code

The following points are what some of the functional programming languages exhibits:

- First-class functions: this means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures;
- Higher-order functions: higher-order function is a function that does at least one of the following: take one or more functions as an input, output a function;
- Lexical Closure: closure (also lexical closure or function closure) is a function together with a referencing environment for the non-local variables of that function;
- Immutable Data: an immutable object is an object whose state cannot be modified after it is created;
  Lazy Evaluation: is an evaluation strategy which delays the evaluation of an expression until its value is needed and which also avoids repeated evaluations;

- Thinking functionally typically begins with decomposition by learning to break a particular task into logical subtasks (functions)

## Benefits of Functional Programming

- Encourage you to decompose tasks into simple functions
- Process data using fluent chains
- Decrease the complexity of event-driven code by enabling reactive paradigms

## Fundamental Concepts of Functional Programming:

functional programming refers to the declarative evaluation of pure functions to create immutable programs by avoiding externally observable side effects.

- Declarative programming
- Pure functions
- Referential transparency
- Immutability

### Declarative programming

#### Imperative Programming

Ex. using a for loop

Why remove loops from your code? A loop is an imperative control structure that’s hard to reuse and difficult to plug in to other operations.

#### Declarative Programming

ex. using the map function with arrow fcts (lambda expressions)

#### Pure Functions

- It depends only on the input provided and not on any hidden or external state that may change during its evaluation or between calls.
- It doesn’t inflict changes beyond their scope, such as modifying a global object or a parameter passed by reference.
- IOW a pure function will always produce the same result based on the same input
