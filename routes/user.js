var express = require('express');
var router = express.Router();
var passport = require('passport');

var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

//if logged in for profile page
router.get('/profile', isLoggedIn, function(req, res, next){
    res.render('user/profile', {title: 'Profile'});
  });



/* GET user Profile page. */
router.get('/logout',  isLoggedIn,function(req, res, next){
    req.logout();
    res.redirect('/');
});



//Check for not logged in
router.use('/', notLoggedIn, function(req, res, next){
    next();
})



/* GET user Signup page. */

router.get('/signup', function(req, res, next){
  var messages = req.flash('error');
  res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
})

/* POST user Signup page. */
router.post('/signup', passport.authenticate('local.signup',{
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

/* GET user Signin page. */
router.get('/signin', function(req, res, next){
   var messages = req.flash('error');
  res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

/* POST user Signin page. */
router.post('/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));



module.exports = router;


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }

    res.redirect('/');
}

function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }

    res.redirect('/');
}
