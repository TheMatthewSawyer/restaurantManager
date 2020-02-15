const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];
const reserve = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/reserve", function(req, res) {
  return res.json(reserve);
});

app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});
