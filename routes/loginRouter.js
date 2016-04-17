var loginRouter = require('express').Router({mergeParams: true});
var jwt = require('jsonwebtoken');
var passport = require('passport');
var passportFacebook = require('../config/facebook'); 
/*loginRouter.post('/', function(req, res){ 


		var user = {
			username: 'KiloHero',
			superSecret: 'HowNowBrownCow',
			token: ''
		};

		var token = jwt.sign(user, user.superSecret, {
			expiresIn: 1440*60
		});						
		console.log(user);
		console.log(token);
		user.token = token;
		res.json({
			success: true,
			data: user, 
			token: token
		});


});*/

loginRouter.get('/', passportFacebook.authenticate('facebook'));

 // handle the callback after facebook has authenticated the user
 loginRouter.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            failureRedirect : '/'
        }), function(req, res){
        	req.json(req.user);
        });

module.exports = loginRouter;