var path = require("path");

module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/css/*", function(req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, "../public" + req.url));
  });

  app.get("/data/*", function(req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, ".." + req.url));
  });
};