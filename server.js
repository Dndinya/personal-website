// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 5501;

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(5501, { "Content-Type": "text/plain" });

  // Send the response body 
  res.end("Form Submitted succesfully\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});