const path = require('path');
const CoffeeMachine = require(path.resolve('models','CoffeeMachine.js'));

class CoffeeMachinesService {
  /**
   * Get all coffee machines from DB
   * @returns {Object} returns all coffee machines from DB
   */
  async list(query) {
    try {
        const queryFilter = this.prepareQuery(query);
        const coffeeMachinesList = await CoffeeMachine.find(queryFilter);
        return coffeeMachinesList;  
    } catch (error) {
        throw error;
    }

  }

  prepareQuery(query){
    const searchQuery = {};
    if(query && query['product_type']){
      searchQuery['product_type'] = query.product_type
    }
    if(query && query['water_line']){
      searchQuery['water_line_compatible'] = query.water_line
    }
    return searchQuery;
  }
}

module.exports = CoffeeMachinesService;
