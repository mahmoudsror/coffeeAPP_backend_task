const path = require('path');
const CoffeePods = require(path.resolve('models','CoffeePods.js'));

class CoffeePodsService {
  /**
   * Get all coffee pods from DB
   * @returns {Object} returns all coffee pods from DB
   */
  async list(query) {
    try {
        const queryFilter = this.prepareQuery(query);
        const coffeePodsList = await CoffeePods.find(queryFilter);
        return coffeePodsList;  
    } catch (error) {
        throw error;
    }

  }

  prepareQuery(query){
    const searchQuery = {};
    if(query && query['product_type']){
      searchQuery['product_type'] = query.product_type
    }
    if(query && query['coffee_flavor']){
      searchQuery['coffee_flavor'] = query.coffee_flavor
    }
    if(query && query['pack_size']){
      searchQuery['pack_size'] = query.pack_size
    }
    return searchQuery;
  }
}

module.exports = CoffeePodsService;
