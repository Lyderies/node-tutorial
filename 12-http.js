const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World!, This is the home page");
  }
  if (req.url === "/about") {
    res.end("Hello World!, This is the about page");
  }
  res.end(`
  <h1>Ooops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `);
});

server.listen(5000);
