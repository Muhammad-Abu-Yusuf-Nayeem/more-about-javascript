## 🧠 1. Execution Context
An Execution Context is the environment in which JavaScript code is evaluated and executed.

## 📦 Types of Execution Contexts:
1. Global Execution Context (GEC):

Created when your JavaScript file first runs.

It creates a global object (window in browsers), and sets this to the global object.

Only one global context exists.

2. Function Execution Context (FEC):

Created each time a function is invoked.

Each function has its own context.

It includes:

Local variables

Arguments object

Inner function declarations

Reference to the outer environment

3. Eval Execution Context (rarely used and generally discouraged)

## ⚙️ Phases of Execution Context:
1. Creation Phase (Memory Allocation):

Sets up the scope, variables, and functions.

Variables are hoisted with undefined.

Function declarations are hoisted entirely.

2. Execution Phase:

Actual code runs.

Variables are assigned values.

Functions are invoked.

🧱 2. Call Stack
The Call Stack is a stack data structure (LIFO) that keeps track of function calls.

🔄 How It Works:
When a function is called:

A new execution context is created.

It’s pushed to the call stack.

When the function finishes:

Its context is popped off the stack.

🔍 Example:
```javascript

function greet() {
console.log("Hello");
sayName();
}

function sayName() {
console.log("My name is John");
}

greet();
```
## 🧾 Call Stack Behavior:
Global Execution Context created and pushed

greet() is called → greet Execution Context is pushed

Inside greet, sayName() is called → sayName Execution Context is pushed

sayName finishes → popped off

greet finishes → popped off

Global context remains until end

## 📝 Summary
| Term              | Description                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| Execution Context | Environment where JS is executed, includes memory, scope, `this`, etc.     |
| Call Stack        | Stack that manages execution contexts during function calls.               |
| Hoisting          | Variables declared with `var` and functions are moved to the top of scope. |
