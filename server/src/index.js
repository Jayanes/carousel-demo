const express = require("express");
const app = express();
const port = 3600;
const carousels = require("./data.js");
const path = require(`path`);

var dir = path.join(__dirname, "./images");

app.use(express.static(dir));

app.get("/api/carousel/:slideID", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const id = Number(req.params.slideID) - 1;
  const slieds = carousels.slides;
  res.json(slieds[id]);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
