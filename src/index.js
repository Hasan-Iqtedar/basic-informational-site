const fs = require("fs/promises");
const express = require("express");

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

const app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  getContent("index.html").then((data) => {
    res.end(data.toString());
  });
});

app.get("/about.html", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  getContent("about.html").then((data) => {
    res.end(data.toString());
  });
});

app.get("/contact-me.html", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  getContent("contact-me.html").then((data) => {
    res.end(data.toString());
  });
});

app.listen(port, () => {
  console.log("Server is Listening...");
});
