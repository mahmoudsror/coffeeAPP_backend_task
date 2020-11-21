const path = require('path');
CoffeeMachines = require(path.resolve('services','CoffeeMachinesService.js')),
coffeeMachinesService = new CoffeeMachines();

class CoffeeMachinesController {

  /**
   * Get all CoffeeMachines from CoffeeMachines service
   * 
   * @param {req} First  request
   * @param {res} second  response 
   * @returns {Object} returns json object contains all coffeeMachines
   * 
   */  
  async list (req,res) {
    try {
        const allCoffeeMachines = await coffeeMachinesService.list(req.query);
    
        return res
          .status(200)
          .send({
            status:200,
            message: 'Coffee Machines retrieved successfully ',
            data:allCoffeeMachines
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
module.exports = CoffeeMachinesController