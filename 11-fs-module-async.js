const fs = require("fs");

console.log("start");
fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile(
      "./content/result-async.txt",
      `Here is the reslut : ${first}, ${second}`,
      (err, result) => { 
        if (err) {
          console.log(err);
          return;
        }
        console.log("done");
      }
    );
  });
});
console.log("starting nect task");
//callback hell