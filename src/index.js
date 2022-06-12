const http = require("http");
const fs = require("fs/promises");

port = 8080;

const getContent = async (fileName) => {
  let content;
  try {
    content = await fs.readFile(`./src/${fileName}`, "utf8");
  } catch (err) {
    console.log("_______________");
    content = err;
  }
  return content;
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const page = req.url;
  console.log(page);
  let file = "";

  if (page === "/index.html" || page === "/") {
    file = "index.html";
  } else if (page === "/about.html") {
    file = "about.html";
  } else if (page === "/contact-me.html") {
    file = "contact-me.html";
  } else {
    file = "404.html";
  }
  getContent(file).then((data) => {
    res.end(data.toString());
  });
});

server.listen(port, () => {
  console.log("Listening...");
});
