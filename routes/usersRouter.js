
var usersRouter = require('express').Router({mergeParams: true});
User = require('../models/users');

usersRouter.get('/', function(req,res){
  User.getUsers(function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
usersRouter.get('/:_id', function(req,res){
  User.getUserById(req.params._id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
usersRouter.post('/', function(req,res){
  var _user = req.body;
  User.addUser(_user, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
usersRouter.put('/:_id', function(req, res){
  var id = req.params._id;
  var user = req.body;
  User.updateUser(id, user, {new:true}, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
usersRouter.delete('/:_id', function(req,res){
  var id = req.params._id;
  User.removeUser(id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});

module.exports = usersRouter;
