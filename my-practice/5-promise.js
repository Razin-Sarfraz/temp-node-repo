const { readFile, writeFile } = require("fs").promises;
const util = require("util");


const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/result2.txt", `${first} ${second}`);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();


// const readFilepromise = util.promisify(readFile);
// const writeFilepromise = util.promisify(writeFile);


// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./content/second.txt")
//   .then((result) => console.log(result))
//
