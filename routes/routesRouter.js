
var routesRouter = require('express').Router({mergeParams: true});
Route = require('../models/routes');

routesRouter.get('/', function(req,res){
  Route.getRoutes(function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
routesRouter.get('/:_id', function(req,res){
  Route.getRouteById(req.params._id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
routesRouter.post('/', function(req,res){
  var route = req.body;
  Route.addRoute(route, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
routesRouter.put('/:_id', function(req,res){
  var id = req.params._id;
  var route = req.body;
  Route.updateRoute(id, route, {new:true}, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  });
});
routesRouter.delete('/:_id', function(req,res){
  var id = req.params._id;
  Route.removeRoute(id, function(err, response){
    if(err){res.json(err);}
    res.json(response);
  })
});

module.exports = routesRouter;
