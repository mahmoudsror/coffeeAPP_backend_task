
const path = require('path');
const CoffeePodsController = require(path.resolve('controllers','CoffeePodsController.js'));
const coffeePodsController = new CoffeePodsController();

module.exports = function(app){
  app.get('/coffeepods',coffeePodsController.list);
}

