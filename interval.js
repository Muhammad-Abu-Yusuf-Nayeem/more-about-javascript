// syntax
// setTimeout
setTimeout(callback, delayInMilliseconds, ...args);

// setInterval
setInterval(callback, intervalInMilliseconds, ...args);

// Example:
// Runs once after 2 seconds
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

// Runs every 1 second
setInterval(() => {
  console.log("Repeats every second");
}, 1000);

// 🔹 3. Clearing Them
// Both functions return an ID you can use to cancel them:

const timeoutId = setTimeout(() => {
  console.log("Won’t run if cleared");
}, 3000);

clearTimeout(timeoutId);

const intervalId = setInterval(() => {
  console.log("Repeating...");
}, 1000);

clearInterval(intervalId);

// Example: Controlled Repetition with setTimeout (recursive timeout)
function repeatWithDelay() {
  console.log("Run this every 2 seconds");
  setTimeout(repeatWithDelay, 2000);
}
repeatWithDelay();

// 🔹 6. Execution Order
// Even if you write setTimeout(fn, 0), it doesn't run immediately. JavaScript puts it in the event queue and runs it after the current stack is clear.

console.log("First");
setTimeout(() => console.log("Second"), 0);
console.log("Third");
// Output: First, Third, Second

// 🔹 7. Async-Friendly Tip
// You can use setTimeout with await:

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Waiting...");
  await delay(2000);
  console.log("Done waiting");
}
run();
