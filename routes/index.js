
var express = require('express');
var router = express.Router({mergeParams: true});
var jwt = require('jsonwebtoken');

var messagesRouter 			= require('./messagesRouter');
var postsRouter 			= require('./postsRouter');
var routesRouter 		= require('./routesRouter');
var usersRouter 		= require('./usersRouter');
var loginRouter 		= require('./loginRouter');
var appTokenGenRouter 		= require('./appTokenGenRouter');



// Default Start
router.use(function(req, res, next){
	//if(whitelist[req.headers.origin]){
		// Allow CORS
		res.header('Access-Control-Allow-Origin', '*');
	  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, auth, x-access-token');
	  	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');		
	//}
	
	next();
});

// HOME
router.get('/', function(req, res){
	res.json({ message: 'welcome to kiloHero API ' + req.headers['x-subdomain']});
});

router.use('/appTokenGen', appTokenGenRouter);
//Message
router.use('/message', messagesRouter);
//Post
router.use('/post', postsRouter);
// Route
router.use('/route', routesRouter);
// User
router.use('/user', usersRouter);

router.use('/login', loginRouter);


/*router.use(function(req, res, next){
	var token = req.body.token || req.query.token || req.headers['auth'];
	if(token){
		console.log('has token');
		console.log(token);
		console.log(req.app.get('superSecret'));
	    jwt.verify(token, req.app.get('superSecret'), function(err, decoded) {      
	      if (err) {
	        return res.json({ success: false, message: 'Failed to authenticate token.' });    
	      } else {
	        req.decoded = decoded;    
	        next();
	      }
	    });

	}else{
		return res.json({ success: false, message: 'Failed to authenticate token.' });	
	}
});*/

// 404
router.use(function(req, res, next){
	res.status(404).send('API not found');
	next();
});

module.exports = router;