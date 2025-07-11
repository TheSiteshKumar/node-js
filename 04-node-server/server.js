const http = require("http");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  const url = request.url;

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");

  if (url === "/") {
    response.end("Welcome to the homepage!");
  } else if (url === "/about") {
    response.end("Learn more about our company here.");
  } else if (url === "/contact") {
    response.end("Get in touch: contact@company.com");
  } else {
    response.statusCode = 404;
    response.end("Page not found - 404");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
