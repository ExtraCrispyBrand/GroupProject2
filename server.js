require(`dotenv`).config();
const express = require(`express`);
const session = require(`express-session`);
const Sequelize = require('sequelize');
const passport = require(`./config/passport/passport`);
const exphbs = require(`express-handlebars`);
const cookieParser = require('cookie-parser');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const db = require(`./models`);

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(
  'database',
  'username',
  'password', {
    'dialect': 'mysql',
    'storage': './session.mysql'
  });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));
app.use(cookieParser());

app.use(
  session({
    secret: `keyboard cat`,
    store: new SequelizeStore({
      db: sequelize
    }),
    resave: false
  }));
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine(
  `handlebars`,
  exphbs({
    defaultLayout: `main`
  })
);
app.set(`view engine`, `handlebars`);

// Routes
require(`./routes/authentication/authenticationApiRoutes`)(app);
require(`./routes/authentication/authenticationHtmlRoutes`)(app);
require(`./routes/htmlRoutes`)(app);

const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === `test`) {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      `==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.`,
      PORT,
      PORT
    );
  });
});

module.exports = app;
