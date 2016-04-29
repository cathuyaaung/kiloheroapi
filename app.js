var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'))

app.set('superSecret', 'how now brown cow');

// Connect to mongoose
//mongoose.connect('mongodb://localhost/kiloherodb');
mongoose.connect('mongodb://kiloherodbsa:Ki10Her0DbsA@kiloheroapi.flansoft.com/kiloherodb');
var db = mongoose.connection;

/*app.get('/', function(req,res){
  res.send('hello');
});*/

var router = require('./routes');
app.use('/', router);
/*var routesRouter = require('./routes/routesRouter');
var usersRouter = require('./routes/usersRouter');
var postsRouter = require('./routes/postsRouter');
var messagesRouter = require('./routes/messagesRouter');

app.use('/routes', routesRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/messages', messagesRouter);*/


app.listen('8182');
console.log('listening on 8182');
