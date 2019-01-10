//route controllers for authentication based routes
const express = require('express');
const authenticationRouter = express.Router();

authenticationRouter.signup = (req, res) => {
  res.render('signup');
};

authenticationRouter.signin = (req, res) => {
  res.render('signin');
};

authenticationRouter.playerhome = (req, res) => {
  res.render('playerhome');
};

authenticationRouter.sponsorhome = (req, res) => {
  res.render('sponsorhome');
};


authenticationRouter.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
module.exports = authenticationRouter;