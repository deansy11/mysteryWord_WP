const express = require("express");
const app = express();
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const fs = require('fs');

// sets up body-parser
app.use(bodyParser.urlencoded ({ extended: false }));
// returns middleware that only parses in json
app.use(bodyParser.json());
// sets up mustache-express
app.engine("mustache", mustacheExpress());
// turns template engine on
app.set("views engine", "mustache");
// assigns where views are stored - all 'views' files should go inside the 'views' folder
app.set("views", __dirname + "/views");
// sets up express-validator
app.use(expressValidator());
// requests content from the index.mustache file to be rendered to the root page
app.get("/", (req, res) => {
  res.send("Express working?")
  // res.render("index", {}); ONLY WHEN MUSTACHE IN TEMPLATE!
  console.log("Can you see mustache?");
})


// sets up listener
app.listen(3000, () => {
  console.log("Node running at http://localhost:3000");
});
