## what is promise in JS?

In **JavaScript**, a **Promise** is an object that represents the eventual **completion (or failure)** of an **asynchronous operation** and its resulting value.

### 🔧 Why Use Promises?

JavaScript is single-threaded, and many operations (like fetching data from an API or reading a file) take time. Instead of blocking the code execution, these operations are handled asynchronously using callbacks or promises.

## 🔹 Syntax

```javascript
const promise = new Promise((resolve, reject) => {
  // async operation
});
```

1. resolve(value) — called when the async task is successful.
2. reject(error) — called when the async task fails.

## 🔹 Example 1: Basic Usage

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("✅ Promise fulfilled!");
  } else {
    reject("❌ Promise rejected!");
  }
});

myPromise

  .then((result) => console.log(result))

  .catch((error) => console.log(error));
```

## 🔹 States of a Promise

1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: Operation completed successfully.
3. **Rejected**: Operation failed.

## 🔹 Chaining Promises

```javascript
fetch("<https://jsonplaceholder.typicode.com/posts/1>")
  .then((response) => response.json())

  .then((data) => console.log("Post:", data))

  .catch((error) => console.log("Error:", error));
```

## 🔹 async / await (Modern Way)

Promises can also be handled with async/await for cleaner code:

```javascript
async function fetchPost() {
  try {
    const response = await fetch(
      "<https://jsonplaceholder.typicode.com/posts/1>"
    );

    const data = await response.json();

    console.log("Post:", data);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchPost();
```

## ✅ Summary

| **Term**  | **Description**                  |
| --------- | -------------------------------- |
| Promise   | JS object for async operations   |
| resolve   | Call when operation succeeds     |
| reject    | Call when operation fails        |
| then()    | Handle success                   |
| catch()   | Handle errors                    |
| finally() | Always runs (success or failure) |
