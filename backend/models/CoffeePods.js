const mongoose = require('mongoose');
const CoffeePodsSchema = mongoose.Schema({
  sku: {
    type: String,
    required: true 
  },
  product_type: {
    type: String,
    required: true
  },
  coffee_flavor: {
    type: String,
    required: true
  },
  pack_size:{
    type: Number,
    required: true
  }
},
{ timestamps: true });

CoffeePodsSchema.index({product_type: 1, water_line_compatible: 1, created_a:1 });
const CoffeePods = mongoose.model('CoffeePods',CoffeePodsSchema)

module.exports = CoffeePods
