var express = require('express');
var router = express.Router();
var passport = require('passport');
var Cart = require('../models/cart');
var Product = require('../models/product');

var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);



//if logged in for profile page
router.get('/admin', isLoggedIn, function(req, res, next){
    res.render('manage/admin', {title: 'Admin Home'});
  });


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
