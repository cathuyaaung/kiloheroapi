var mongoose = require('mongoose');

var RouteSchema = mongoose.Schema({
  to: {
    type : String,
    required : true
  },
  from: {
    type: String,
    required: true
  },
  sequence:{
    type: Number,
    required: true
  }
});

var Route = module.exports =
mongoose.model('routes', RouteSchema)


module.exports.getRoutes = function(callback, limit){
  Route.find(callback).limit(limit).sort('sequence');
};

module.exports.getRouteById = function(id, callback){
  Route.findById(id, callback);
};

module.exports.addRoute = function(route, callback){
  Route.create(route, callback);
};

module.exports.updateRoute = function(id, route, options, callback){
  var query = {_id: id};
  var update = {
    to: route.to,
    from: route.from,
    sequence: route.sequence
  };
  Route.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeRoute = function(id, callback){
  var query = {_id: id};
  Route.remove(query, callback);
};
