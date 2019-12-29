var express = require("express");
var request = require("request");
var app = express();
var path = require("path")

var PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: process.env.ORIGIN_URL || "http://localhost",
  optionsSuccessStatus: 200
};

app.use(express.static(path.join(__dirname, "./public")));

app.use("/cors/*", function(req, res) {
  req.pipe(request(req.params[0])).pipe(res);
});

app.listen(PORT, function() {
  console.log("CORS-enabled web server listening on port " + PORT);
});
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
