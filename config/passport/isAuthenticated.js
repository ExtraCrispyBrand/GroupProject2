// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = (req, res, next) => {
  console.log(`REQ PATH`, req.path);
  if (!req.user && [`/signup`, `/signin`].indexOf(req.path) === -1) {
    return res.redirect(`/signin`);
  }

  if (req.user && [`/signup`, `/signin`].indexOf(req.path) >= 0) {
    return res.redirect(`/userhome`);
  }

  return next();
};
