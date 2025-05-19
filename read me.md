# 📘 JavaScript Execution Context

Understanding the **execution context** in JavaScript is fundamental to mastering concepts like **scope**, **hoisting**, **closures**, and the `this` keyword.

---

## 📌 What is Execution Context?

An **execution context** is the environment in which JavaScript code is **evaluated and executed**. It determines:

- What variables and functions are accessible
- The value of `this`
- What code is currently running

---

## 🧱 Types of Execution Contexts

### 1. Global Execution Context (GEC)

- Created by default when the JS engine starts running the code.
- It's the outermost context.
- In browsers, `this` refers to the `window` object.

### 2. Function Execution Context (FEC)

- Created each time a function is invoked.
- Has its own variable object, scope chain, and `this` value.

### 3. Eval Execution Context (rare)

- Created when code inside `eval()` is executed (not recommended).

---

## 🔄 Phases of Execution Context

Each context goes through two main phases:

### 1. Creation Phase

- **Hoisting happens**
  - Variables declared with `var` are hoisted to the top and initialized with `undefined`.
  - Function declarations are hoisted with their full definitions.
- `this` is determined.
- Scope chain is created.

### 2. Execution Phase

- Code is executed line by line.
- Variables are assigned actual values.
- Function code is executed.

---

## 🧵 Execution Context Stack (Call Stack)

JavaScript is **single-threaded** and uses a **call stack** to keep track of execution contexts.

### Example:

```js
function first() {
  console.log("First");
}

function second() {
  first();
  console.log("Second");
}

second();
```

Each function call adds a new context to the **top of the stack**, and it’s removed once execution completes.

---

## 🔍 Example: Execution Context and `this`

```js
var name = "Window";

function sayName() {
  console.log(this.name);
}

sayName(); // "Window" in browsers

const obj = {
  name: "Object",
  sayName: function () {
    console.log(this.name);
  }
};

obj.sayName(); // "Object"


```

# 📚 JavaScript Call Stack

The **Call Stack** is a crucial part of the JavaScript engine that helps manage the execution of function calls. Since JavaScript is **single-threaded**, the call stack handles **one function at a time**.

---

## 🧠 What is the Call Stack?

The **call stack** is a data structure (specifically, a **stack**) that keeps track of the function calls in your program.

It follows the **LIFO** principle:
> **Last In, First Out**

This means the **last function called** is the **first to finish** and get removed from the stack.

---

## 🧵 How the Call Stack Works

### Example:

```js
function greet() {
  console.log("Hello");
}

function welcome() {
  greet();
  console.log("Welcome!");
}

welcome();
```

📊 Call Stack Steps
Let's walk through what happens step by step when the above code runs:

Global Execution Context is created and pushed onto the call stack.

The engine encounters welcome() and pushes welcome() context onto the stack.

Inside welcome(), greet() is called → greet() context is pushed onto the stack.

greet() executes console.log("Hello").

After greet() finishes, it is popped off the call stack.

Control returns to welcome(), which now runs console.log("Welcome!").

After welcome() finishes, it is popped off the stack.

Execution continues in the global context (or ends if complete).

🔄 Visual Snapshot of Call Stack Flow:
``` csharp

Initial:
[ Global ]

After calling welcome():
[ Global ]
[ welcome() ]

After calling greet():
[ Global ]
[ welcome() ]
[ greet() ]

After greet() finishes:
[ Global ]
[ welcome() ]

After welcome() finishes:
[ Global ]
```
After all complete:
[ ]
⚠️ Call Stack Overflow
If functions keep calling themselves without a base case, the stack keeps growing and eventually overflows:

Example:
```js

function infinite() {
  return infinite();
}

infinite(); // ❌ RangeError: Maximum call stack size exceeded
```