var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = mongoose.Schema({
  route: {
    type : Schema.ObjectId,
    ref: 'routes',
    required : true
  },
  poster: {
    type : Schema.ObjectId,
    ref: 'users',
    required : true
  },
  kilo: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: false,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var Post = module.exports =
mongoose.model('posts', PostSchema)


module.exports.getPosts = function(callback, limit){
  Post.find(callback).limit(limit);
};

module.exports.getPostById = function(id, callback){
  Post.findById(id, callback);
};

module.exports.addPost = function(post, callback){
  Post.create(post, callback);
};

module.exports.updatePost = function(id, post, options, callback){
  var query = {_id: id};
  var update = {
    route: post.route,
    poster: post.poster,
    kilo: post.kilo,
    price: post.price,
    date: post.date
  };
  Post.findOneAndUpdate(query, update, options, callback);
};

module.exports.removePost = function(id, callback){
  var query = {_id: id};
  Post.remove(query, callback);
};
