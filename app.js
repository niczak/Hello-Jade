
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'your secret here' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Fake user database
var users = [
  { name : "Mitchell Hislop", handle : "@mitchellhislop"},
  { name : "Nicholas Kreidberg", handle : "@niczak"},
  { name : "Philip Carlson", handle : "@philipc"}
];


// Routes
app.get('/', routes.index);
//app.get('/users', routes.users);

app.get('/users', function(req, res){
  res.render('users', { users : users, title : "Elite Developers" });
});

app.get('/links', function(req, res){
  res.render('links', { title : "Node Resources" });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
