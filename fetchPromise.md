# JavaScript: fetch, Promise, and async/await

## 1. fetch()

- `fetch()` is used to make HTTP requests (like GET, POST) from the browser.
- It returns a **Promise** that resolves to the **Response** object.

### Example:

```js
fetch("https://api.example.com/data")
  .then((response) => response.json()) // parsing the JSON from response
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

## 2. Promise

A Promise represents a value that may be available now, later, or never.

It has 3 states:

- Pending: initial state

- Fulfilled: operation completed successfully

- Rejected: operation failed

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Promise fulfilled!");
  } else {
    reject("Promise rejected!");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

## 3. async/await

- async functions always return a Promise.

- await can be used inside async functions to wait for a Promise to resolve. Makes asynchronous code look synchronous (cleaner and easier to read).

Example with fetch:

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## JavaScript: setInterval and clearInterval

### setInterval()

- `setInterval()` is used to run a function **repeatedly** at specified time intervals (in milliseconds).
- It continues until stopped with `clearInterval()`.
- Returns an **interval ID**, which can be used to stop the execution later.

### clearInterval()

- `clearInterval()` is used to **stop** the function that was started by `setInterval()`.
- It requires the **interval ID** returned by `setInterval()`.

### Example:

```js
function sayHello() {
  console.log("Hello every 2 seconds!");
}

const intervalId = setInterval(sayHello, 2000);

// Stop the interval after 6 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped.");
}, 6000);
```

getData();

```

```
