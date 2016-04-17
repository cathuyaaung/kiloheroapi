var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = mongoose.Schema({
  post: {
    type : Schema.ObjectId,
    ref: 'posts',
    autopopulate: true,
    required : true
  },
  poster: {
    type : Schema.ObjectId,
    ref: 'users',
    autopopulate: true,
    required : true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

MessageSchema.plugin(require('mongoose-autopopulate'));
MessageSchema.plugin(require('mongoose-timestamp'));

var Message = module.exports =
mongoose.model('messages', MessageSchema)


module.exports.getMessages = function(callback, limit){
  Message.find(callback).limit(limit);
};

module.exports.getMessageById = function(id, callback){
  Message.findById(id, callback);
};

module.exports.addMessage = function(message, callback){
  Message.create(message, callback);
};

module.exports.updateMessage = function(id, message, options, callback){
  var query = {_id: id};
  var update = {
    post: message.post,
    poster: message.poster,
    message: message.message,
    date: message.date
  };
  Message.findOneAndUpdate(query, update, options, callback);
};

module.exports.removePost = function(id, callback){
  var query = {_id: id};
  Message.remove(query, callback);
};
