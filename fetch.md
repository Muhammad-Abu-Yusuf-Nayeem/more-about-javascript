# 📘 What is `fetch()`?

- `fetch()` is a **built-in JavaScript function** used to **send HTTP requests**.
- It returns a **Promise** that resolves to a **Response object**.

---

## 🧠 Basic Syntax

```jsx
fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    // handle the data
  })
  .catch((error) => {
    // handle the error
  });
```

- `url` – the API endpoint or file path
- `options` – optional object to configure the request (method, headers, body, etc.)

---

## ✅ Example 1: GET Request (Fetch JSON Data)

```jsx
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("✅ Data received:", data);
  })
  .catch((error) => {
    console.error("❌ Error fetching data:", error);
  });
```

### 🧾 Output:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur..."
}
```

## ✅ Example 2: POST Request (Send Data)

```jsx
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is a new post",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("✅ Post created:", data);
  })
  .catch((error) => {
    console.error("❌ Error posting data:", error);
  });
```

---

## 🔁 Common Response Methods

| Method            | Description                          |
| ----------------- | ------------------------------------ |
| `response.json()` | Converts response to JSON            |
| `response.text()` | Converts response to plain text      |
| `response.blob()` | For binary data (e.g., images)       |
| `response.ok`     | `true` if status is 200–299          |
| `response.status` | Returns HTTP status code (e.g., 404) |

---

## ✅ Using `async` / `await`

```jsx
async function fetchPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const data = await response.json();
    console.log("✅ Post fetched:", data);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

fetchPost();
```

---

## 📌 Notes

- `fetch()` **does not reject** on HTTP errors (like 404 or 500). You must check `response.ok`.
- CORS (Cross-Origin Resource Sharing) errors are common when calling external APIs.

---

## 📂 Use Cases

- Load data from a REST API
- Send form data to the server
- Upload files
- Communicate with a backend in SPAs (React, Vue, etc.)

# 📘 Why Use `async/await` in JavaScript?

`async/await` is **syntactic sugar** built on top of **Promises**. It allows you to write asynchronous code that looks and behaves like synchronous code, making it:

- ✅ Easier to **read**
- ✅ Easier to **write**
- ✅ Easier to **debug**

---

## 🔁 Comparison: `.then()` vs `async/await`

### 🌐 Using `.then()`

```jsx
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Post title:", data.title);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

### ✅ Using `async/await`

```jsx
async function getPost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Post title:", data.title);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost();
```

---

## 🧠 Key Benefits of `async/await`

| Benefit                     | Explanation                                  |
| --------------------------- | -------------------------------------------- |
| ✅ Cleaner syntax           | No nested `.then()` calls (no callback hell) |
| ✅ Easier to debug          | Stack traces are clearer in dev tools        |
| ✅ Sequential logic         | Looks like synchronous code (top to bottom)  |
| ✅ Error handling is simple | Use `try/catch` instead of `.catch()`        |

---

## 🧪 Example: Multiple API Calls

### Without `async/await` (messy):

```jsx
fetch(url1)
  .then((res1) => res1.json())
  .then((data1) => {
    fetch(url2)
      .then((res2) => res2.json())
      .then((data2) => {
        console.log(data1, data2);
      });
  });
```

### With `async/await` (clean):

```jsx
async function getData() {
  try {
    const res1 = await fetch(url1);
    const data1 = await res1.json();

    const res2 = await fetch(url2);
    const data2 = await res2.json();

    console.log(data1, data2);
  } catch (err) {
    console.error("Error:", err);
  }
}
```

---

## ⚠️ Important Notes

- `await` **only works inside an `async` function**
- `await` pauses execution until the Promise **resolves or rejects**
- Always use `try/catch` to handle potential errors when using `await`

---

## ✅ Summary Table

| Feature        | `.then()`                | `async/await`                |
| -------------- | ------------------------ | ---------------------------- |
| Readability    | Moderate (nested)        | High (flat, sequential)      |
| Error handling | `.catch()`               | `try...catch`                |
| Syntax         | More boilerplate         | Cleaner and simpler          |
| Debugging      | Stack traces are messier | Easier to follow             |
| Use case       | Short, single Promise    | Multiple or complex Promises |
