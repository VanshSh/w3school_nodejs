var http = require("http");
var fs = require("fs");

// To read file
http.createServer(function (req, res) {
  fs.readFile('index.html', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data); //write a response to the client
    return res.end(); //end the response
  })
}).listen(8080);

// To create file .
// There are 3 methods for creating files:
// fs.appendFile  => to add content to the file or create file if not exist
fs.appendFile("index.html", "Hello World!", function (err) {
      if (err) throw err;
      res.write("Saved!");
      console.log("Saved!");
    });

// fs.open() => to create an empty file
fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

// fs.writeFile() => method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile("mynewfile2.txt", "Hello Vansh!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});


// To update file
// fs.appendFile() => method appends the specified content at the end of the specified file:
// fs.writeFile() => method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:

// To delete file
// fs.unlink() => method deletes the specified file:
fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});

// To rename file
// fs.rename() => method renames the specified file:
fs.rename("myDateModule.js", "mydateModule.js", function (err) {
  if (err) throw err;
  console.log("File Renamed!");
});
