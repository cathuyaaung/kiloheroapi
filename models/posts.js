var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = mongoose.Schema({
  route: {
    type : Schema.ObjectId,
    ref: 'routes',
    autopopulate: true,
    required : true,
  },
  poster: {
    type : Schema.ObjectId,
    ref: 'users',
    autopopulate: true,
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
  },
  postType:{
    type: String,
    enum: ['WTS', 'WTB'],
    default: 'WTS'
  }
}, {
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
});

PostSchema
.virtual('routeName')
.get(function () {
  return this.route.name;
});

PostSchema
.virtual('posterName')
.get(function () {
  return this.poster.username;
});

PostSchema.plugin(require('mongoose-autopopulate'));
PostSchema.plugin(require('mongoose-timestamp'));

var Post = module.exports =
mongoose.model('posts', PostSchema)


module.exports.getPosts = function(callback, limit){
  Post.find(callback).limit(limit);
};

module.exports.getWTSPostsByRouteId = function(route_id, callback, limit){
  Post.find({route: route_id, postType: 'WTS'}).limit(limit).exec(callback);
};

module.exports.getWTBPostsByRouteId = function(route_id, callback, limit){
  Post.find({route: route_id, postType: 'WTB'}).limit(limit).exec(callback);
};

module.exports.getTotalKiloByRouteId = function(route_id, callback, limit){
  Post.aggregate(
    [
      {
        $match:{
          route: mongoose.Types.ObjectId(route_id)
        }
      },
      { 
        $group: 
        {
            _id: '$postType', 
            totalKilo: { $sum: '$kilo'}
        }
      }
    ], callback
  );
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
    date: post.date,
    postType: post.postType
  };
  Post.findOneAndUpdate(query, update, options, callback);
};

module.exports.removePost = function(id, callback){
  var query = {_id: id};
  Post.remove(query, callback);
};
