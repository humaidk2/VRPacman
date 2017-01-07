var User = require('../app/models/user');

module.exports = function(app, passport) {

  app.get('/', function(req, res) {
    res.redirect('/');
  });



  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/#/failure',
    failureFlash: true
    })
  );

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/#/failure',
    failureFlash: true
    })
  );

  app.get('/profile', isLoggedIn, function(req, res) {
    res.send(req.user);
  });

  app.post('/profileInfo', isLoggedIn, function(req, res) {
    console.log('hit profileinfo request');
    // console.log('req.body:', req.body);
    User.findOne({
      where: {
        username: req.body.user
      }
    }).then(function(user) {
      res.send({user: user.dataValues});
    });
  });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};



function isLoggedIn(req, res, next) {
  // if user is authenticated, continue
  if (req.isAuthenticated()) {
    console.log('user is authenticated');
    return next();
  }
  console.log('user is not authenticated man');
  // else, redirect to home page
  res.redirect('/');
};