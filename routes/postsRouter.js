
var postsRouter = require('express').Router({mergeParams: true});
Post = require('../models/posts');

postsRouter.get('/', function(req,res){
  Post.getPosts(function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
postsRouter.get('/:_id', function(req,res){
  Post.getPostById(req.params._id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
postsRouter.post('/', function(req,res){
  var post = req.body;
  Post.addPost(post, function(err, response){
    if(err){res.json(err);}
    res.json(response);
 });
});
postsRouter.put('/:_id', function(req, res){
  var id = req.params._id;
  var post = req.body;
  Post.updatePost(id, post, {new:true}, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
postsRouter.delete('/:_id', function(req,res){
  var id = req.params._id;
  Post.removePost(id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});

module.exports = postsRouter;
