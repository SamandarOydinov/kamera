const express = require("express");
const path = require("path")

const app = express()

const createViewPage = (page) =>
  path.resolve(__dirname, "./views", `${page}.html`);

app.get("/", (req, res) => {
    res.sendFile(createViewPage("index"))
})
let port = 3000 || 3003

async function start() {
  try {
    app.listen(port, () => {
      console.log(`Server running: http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
