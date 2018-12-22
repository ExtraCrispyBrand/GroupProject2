const db = require(`../models`);

module.exports = app => {
  // Load index page
  app.get(`/`, (req, res) => {
    res.render(`index`);
  });

  // Load example page and pass in an example by id
  app.get(`/example/:id`, (req, res) => {
    db.Example.findOne({ where: { id: req.params.id } }).then(dbExample => {
      res.render(`example`, {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // eslint-disable-next-line
  app.use((req, res, next) => {
    res.render(`404`);
  });
};
