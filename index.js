// Global Context
var globalVar = "I am global!";

function showGlobalVar() {
  console.log(globalVar); // Accessing global variable inside a function
}

showGlobalVar(); // Output: I am global!
console.log(globalVar); // Output: I am global!

function myFunction() {
  var localVar = "I am local!";
  console.log(localVar); // Works fine
}

myFunction(); // Output: I am local!
console.log(localVar); // ❌ Error: localVar is not defined
