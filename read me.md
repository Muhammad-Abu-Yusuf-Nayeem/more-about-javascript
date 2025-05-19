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
