var express = require('express');
var router = express.Router();
var product = require('../models/product');
var csrf = require('csurf');
var passport = require('passport');



/* GET home page. */
router.get('/', function(req, res, next) {
	product.find(function(err , docs){
        var array =[];
        size =3;
        for (var i=0 ; i<docs.length ;i += size)
        {
        	array.push(docs.slice(i , i+size));
        }
		res.render('shop/index', { title: 'Apna Bazzar' ,products: array});
	});
});



// router.post('/user/signup' ,passport.authenticate('local' ,{
// 	successRedirect: 'user/profile',
// 	failureRedirect: '/',
// 	failureFlash: true
// }),function (req ,res ,next) {
// 	res.render('user/profile');
// });

// router.post('/user/signup' , function (req,res,next) {
// 	let user = req.body;
	
// });



module.exports = router;
