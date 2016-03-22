var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

// Connect to mongoose
mongoose.connect('mongodb://localhost/kiloherodb');
var db = mongoose.connection;

app.get('/', function(req,res){
  res.send('hello');
});


var routesRouter = require('./routes/routesRouter');
var usersRouter = require('./routes/usersRouter');
var postsRouter = require('./routes/postsRouter');
var messagesRouter = require('./routes/messagesRouter');

app.use('/routes', routesRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/messages', messagesRouter);


app.listen('8182');
console.log('listening on 8182');
