var routes = require('./routes');

console.log(routes);

module.exports = function (app) {
  app.all('*', function (req, res, next) {
    res.locals['title'] = 'Puerh';
    next();
  });

  app.get('/', routes.home);
};