
var messagesRouter = require('express').Router({mergeParams: true});

Message = require('../models/messages');

messagesRouter.get('/', function(req,res){
  Message.getMessages(function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
messagesRouter.get('/:_id', function(req,res){
  Message.getMessageById(req.params._id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
messagesRouter.post('/', function(req,res){
  var message = req.body;
  Message.addMessage(message, function(err, response){
    if(err){res.json(err);}
    res.json(response);
 });
});
messagesRouter.put('/:_id', function(req, res){
  var id = req.params._id;
  var message = req.body;
  Message.updateMessage(id, message, {new:true}, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
messagesRouter.delete('/:_id', function(req,res){
  var id = req.params._id;
  Message.removeMessage(id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});

module.exports = messagesRouter;
