// file 4,5,6,7 are helper files to explain exports
const names = require("./4-name");
const util = require("./5-utils");
const data = require("./6-alt_export");
require(`./7-mind`)  //auto invokes the fucntion addValues
util.sayHi(names.noman);
util.sayBye(data.onePerson.name);
util.sayHi(data.items[1]);
console.log(data);
