const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 4000;

// Create the web server
const server = http.createServer((request, response) => {
  console.log(`Someone wants: ${request.url}`);

  let fileName = request.url === "/" ? "index.html" : request.url;
  let filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, (error, fileContent) => {
    if (error) {
      response.writeHead(404);
      response.end(`
        <h1>Oops! File not found</h1>
        <p>The file "${fileName}" doesn't exist!</p>
        <p><a href="/">Go back home</a></p>
      `);
      console.log(`❌ File not found: ${fileName}`);
    } else {
      response.writeHead(200);
      response.end(fileContent);
      console.log(`✅ Sent file: ${fileName}`);
    }
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`🎉 Server is running!`);
  console.log(`🌐 Open your browser and go to: http://localhost:${PORT}`);
  console.log(`📁 Put your HTML files in this folder: ${__dirname}`);
  console.log(`⏹️  Press Ctrl+C to stop the server`);
});
