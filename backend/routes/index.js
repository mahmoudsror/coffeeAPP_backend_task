const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

module.exports = function(app) {
  
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.get('/',function(req,res) {
    res.send("Welcome to Coffee app");
  });

  require('./CoffeeMachinesRoutes')(app);
  require('./CoffeePodsRoutes')(app);

  app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}
