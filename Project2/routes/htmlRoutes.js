var path = require("path");

module.exports = function(app) {
 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/user.html"));
  });

  app.get("/emotion", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/emotion.html"));
  });
  app.get("/entertaiment",function(req, res){
    res.sendFile(path.join(__dirname, "../public/entertaiment.html"));
  });

  app.get("/Games",function(req, res){
    res.sendFile(path.join(__dirname, "../public/Games.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
