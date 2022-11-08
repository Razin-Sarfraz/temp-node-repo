var i = 0;
const myInterval = setInterval(() => {
  console.log("hello world!");
  i += 1;
  if (i === 7) {
    console.log(i);
    clearInterval(myInterval);
  }
}, 100);
console.log("I will run first");
