var express = require('express')
  , router = require('./router')
  , path = require('path')

var app = express();

// all environments
app.set('port', process.env.PORT || 3003);
app.set('views', __dirname + '../docs');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('puerh_node_server'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../src')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

router(app);

module.exports = app;