var loginRouter = require('express').Router({mergeParams: true});
var jwt = require('jsonwebtoken');
loginRouter.post('/', function(req, res){ 


		//check user validity

		var user = {
			username: 'KiloHeroClient'
		};

		var token = jwt.sign(user, 'HowNowBrownCow', {
			expiresIn: 1440*60
		});						
		console.log(user);
		console.log(token);
		user.token = token;
		res.json({
			success: true,
			data: token
		});


});

module.exports = loginRouter;