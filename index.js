const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello NODE JS server");
});

server.listen(6060, function () {
  console.log(`Server running at 6060`);
});
