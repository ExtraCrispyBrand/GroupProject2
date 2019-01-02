const db = require(`../models`);
const Router = require('../controllers/controllers');

module.exports = app => {
  // Load index page
  app.get(`/`, Router.index);

  app.get('/index', Router.index);
  
  app.get('/about', Router.about);

  app.get('/contact', Router.contact);

  // Render 404 page for any unmatched routes
  // eslint-disable-next-line
  app.use((req, res, next) => {
    res.render(`404`);
  });
};
