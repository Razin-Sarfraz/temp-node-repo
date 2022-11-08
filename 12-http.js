//both codes work we can use return or if elese if statement to get rid of error 'ERR_STREAM_WRITE_AFTER_END'

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
   ;
    // res.end();
  }
  if (req.url === "/about") {
    return res.end("Welcome to About Page!");
    //res.end();
  }
  return res.end(`<h1>Bad Request</h1><p>Page not found</p><a href="/">Home Page</a>`);
});

server.listen(5000);


// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//    res.end("Welcome to Home Page!");
//     // res.end();
//   }
//   else if (req.url === "/about") {
//     res.end("Welcome to About Page!");
//     //res.end();
//   }
//   else res.end(`<h1>Bad Request</h1><p>Page not found</p><a href="/">Home Page</a>`);
// });

// server.listen(5000);
