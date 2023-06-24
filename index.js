var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.write("<br>");
    res.write(`Curernt Date and Time is ${Date()}`);
    res.end();
  })
  .listen(8082);

// Now after running the above code,
// open http://localhost:8080/ in any browser and you will see the result
