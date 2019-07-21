var express = require('express');
var router = express.Router();
var User = require('../models/user');
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = new csrf();
router.use(csrfProtection);

router.get('/' ,function (req ,res ,next) {
   
});

router.get('/signup', (req, res, next) => {
	 res.render('./user/signup' , {csrfToken: req.csrfToken()});
});

router.post('/signup' , function (req, res, next) {
    const email=req.body.email;
    const password=req.body.password;
    
    // req.checkBody('email','Email is not valid').isEmail();
    // req.checkBody('password','password is required').notEmpty();

    // let err =validationError();
    
    // if(err){
    //     res.render('signup',{
    //       error:error
    //     });
    // }else {
        
       let newUser = new User({
        email:email,
        password:password
       });
    // }

    newUser.save(function (err) {
    	if(err){
    		console.log("sorry");
    	}else{
    		req.flash('success', 'You have register');
    		res.redirect('/profile');
    	}
    })

});

router.get('/profile' ,function (req ,res ,next) {
    res.render('./user/profile');
});

module.exports = router;