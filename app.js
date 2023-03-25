require("dotenv").config();
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const key = process.env.SUPERSECRETKEY;

const ultimateAnswer = () => {
  return `What is the ultimate answer to the ultimate question? ${key}.`;
};

// const fs = require("fs");
// let directory_name = "./";
// let filenames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(ultimateAnswer());
  //console.log(ultimateAnswer());

  // f = "";
  // filenames.forEach((file) => {
  //   f = f + file + " \n";
  // });
  // res.end(f);
});

server.listen(port, hostname, () => {});
