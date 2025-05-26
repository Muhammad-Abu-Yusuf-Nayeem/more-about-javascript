// 🔹 1. fetch() – Make HTTP Requests
// ✅ Syntax:

fetch(url)
  .then((response) => response.json()) // convert response to JSON
  .then((data) => {
    // handle data
  })
  .catch((error) => {
    // handle errors
  });

// ✅ Example:
// Fetch data from a public API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json()) // convert response to JSON
  .then((data) => {
    console.log("Post Title:", data.title); // access specific data
  })
  .catch((error) => {
    console.error("Fetch error:", error); // handle errors
  });
// 🔹 2. Promise – Handle Asynchronous Tasks
// ✅ Syntax:
const myPromise = new Promise((resolve, reject) => {
  // async code
  if (success) {
    resolve(result);
  } else {
    reject(error);
  }
});
// ✅ Example:
function waitTwoSeconds() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("⏳ Done waiting 2 seconds");
    }, 2000);
  });
}

waitTwoSeconds()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   🔹 3. async/await – Cleaner Promise Handling
// ✅ Syntax:
async function myFunction() {
  const result = await someAsyncTask(); // wait for result
  console.log(result);
}
// ✅ Example:

async function fetchPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json(); // wait for JSON conversion
  console.log("Post body:", data.body);
}

fetchPost();

// 🔹 4. try/catch – Handle Errors Gracefully
// Use it with async/await to catch errors easily.
// ✅ Example:

async function safeFetch() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/404"
    ); // invalid ID
    if (!response.ok) throw new Error("❌ Not Found");

    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

safeFetch();
