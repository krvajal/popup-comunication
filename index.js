const express = require("express");

// create the app instance
const app = express();
app.set("view engine", "ejs");

app.get("/popup", function(req, res) {
  res.render("pages/popup");
});
app.get("/", function(req, res) {
  res.render("pages/index");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
