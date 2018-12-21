// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/passport/isAuthenticated");

module.exports = function(app) {
  app.get("/signin", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("userhome");
    }
    res.render("signin");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/userhome", isAuthenticated, function(req, res) {
    res.render("userhome");
  });
};
