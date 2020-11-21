const seeder = require('mongoose-seed');
const CoffeeMachineData = require('./seeds/CoffeeMachinesSeed');
const CoffeePodsData = require('./seeds/CoffeePodsSeed');
const path = require('path');
// Connect to MongoDB via Mongoose
seeder.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`,{ useNewUrlParser: true }, function() {
  // Load Mongoose models
  seeder.loadModels([
    path.resolve('models','CoffeeMachine.js'),
    path.resolve('models','CoffeePods.js')
  ]);
 
  // Clear specified collections
  seeder.clearModels(['CoffeeMachine', 'CoffeePods'], function() {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels([...CoffeeMachineData, ...CoffeePodsData], function(err, done) {
    //  seeder.disconnect();
    });
  });
});