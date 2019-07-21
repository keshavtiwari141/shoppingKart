
var passport = require('passport');
var mongoose = require('mongoose');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });



passport.serializeUser(function (user , done) {
	done(null ,user);
});

passport.deserializeUser(function (user ,done)
{
		done(err ,User);
});

passport.use(new LocalStrategy(
	function (email ,password ,done) {
		console.log("ok....");
	User.findOne({email:email} ,function (err ,user) {
		if(err){
			return done(err);
		}
		if (User){
			return done(null ,false ,{message: 'Email is already in use.'});
		}
		var newUser = new User();
		newUser.email=email;
		newUser.password=password;
		newUser.save(err ,result)
			if(err) {
				return done(err);
			}
			return done(null ,newUser)

	});

}));