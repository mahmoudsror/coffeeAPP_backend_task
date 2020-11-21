
const path = require('path');
const CoffeeMachinesController = require(path.resolve('controllers','CoffeeMachinesController.js'));
const coffeeMachinesController = new CoffeeMachinesController();

module.exports = function(app){
  app.get('/coffeemachines',coffeeMachinesController.list);
}

