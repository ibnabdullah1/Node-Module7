const http = require("http");
const fs = require("fs");
// Creating a new server row node js
const server = http.createServer();

// Listener
server.on("request", (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/read-file" && req.method === "GET") {
    const readableStream = fs.createReadStream("./texts/read.txt");
    readableStream.on("data", (buffer) => res.write(buffer));
    readableStream.on("end", () => {
      res.end("Hello World!");
    });
  }
});
server.listen(2000, () => {
  console.log("server listening on 2000");
});
