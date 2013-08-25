var routes = require('./routes');

module.exports = function (app) {
  app.all('*', function (req, res, next) {
    res.locals['title'] = 'Puerh';
    next();
  });

  app.get('/', routes.home);
  app.get('/typography', routes.typo);
  app.get('/font', routes.font);
  app.get('/grid', routes.grid);
  app.get('/ui', routes.ui);
  app.get('/js', routes.js);  
  app.get('/start', routes.start);
};
