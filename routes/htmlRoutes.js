const router = require('../controllers/controllers');

module.exports = app => {
  // Load index page
  app.get('/', router.index);

  app.get('/index', router.index);

  app.get('/about', router.about);

  app.get('/contact', router.contact);

  // Render 404 page for any unmatched routes
  // eslint-disable-next-line
  app.use((req, res, next) => {
    res.render(`404`);
  });
};
