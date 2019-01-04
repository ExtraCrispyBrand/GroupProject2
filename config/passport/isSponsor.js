//middleware restricting routes based on account type sponsor
module.exports = (req, res, next) => {
    if (req.user.accountType === 'sponsor') {
        return next();
    }

    return res.redirect('/playerhome');
}
