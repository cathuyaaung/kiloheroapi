var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  userName: {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  accessToken : {
    type : String,
    required : true
  },
  expiresIn :{
    type : String,
    required : true
  },
  picture : {
    type : String
  },
  password : {
    type : String
  }
});

UserSchema.plugin(require('mongoose-autopopulate'));
UserSchema.plugin(require('mongoose-timestamp'));


var User = module.exports =
mongoose.model('users', UserSchema)

module.exports.getUsers = function(callback, limit){
  User.find(callback).limit(limit);
};

module.exports.getUserById = function(_id, callback){
  User.findById(_id, callback);
};

module.exports.isEmailExist = function(emailaddress, callback){
  console.log(emailaddress);
  User.findOne({email : emailaddress}, callback);
};


module.exports.addUser = function(user, callback){
  User.create(user, callback);
};

module.exports.updateUser = function(id, user, options, callback){
  var query = {_id: id};
  var update = {
    username: user.userName
  };
  User.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeUser = function(id, callback){
  var query = {_id: id};
  User.remove(query, callback);
};
