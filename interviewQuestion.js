function displayMsg() {
  setTimeout(() => {
    console.log("this is timeout msg");
  }, 2000);
}



function delayedGreeting(name, time) {
  setTimeout(() => {
    console.log(`Hello, ${name}!`);
  }, time);
}

// delayedGreeting("yusuf", 4000);
function joke() {
  console.log(
    "What’s the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle? Attire."
  );
}

const jokeInterval = setInterval(joke, 1500);
setTimeout(() => {
  clearInterval(jokeInterval);
},10000);
