const path = require('path');
const CoffeePods = require(path.resolve('services','CoffeePodsService.js'));
const coffeePodsService = new CoffeePods();

class CoffeePodsController {

  /**
   * Get all Coffee pods from Coffee pods service
   * @param {req} First  request
   * @param {res} second  response 
   * @returns {Object} returns json object contains all coffeePods
   */  
  async list (req,res) {
    try {
        const allCoffeePods = await coffeePodsService.list(req.query);
    
        return res
          .status(200)
          .send({
            status:200,
            message: 'Coffee pods retrieved successfully ',
            data:allCoffeePods
          }); 
    } catch (error) {
        return res
        .status(500)
        .send({
          status:500,
          data:{
              message: 'Internal server error'
          }
        });  
    }

  }

}
module.exports = CoffeePodsController;