const os = require('os');

//user info
const user = os.userInfo();
console.log(user)

//system uptime in seconds

console.log(os.uptime())

const currentOs={
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOs)
