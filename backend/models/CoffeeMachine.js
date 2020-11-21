const mongoose = require('mongoose');
const CoffeeMachineSchema = mongoose.Schema({
  sku: {
    type: String,
    required: true 
  },
  machineModel: {
    type: String,
    required: true 
  },
  product_type: {
    type: String,
    required: true
  },
  water_line_compatible: {
    type: Boolean,
    required: true
  }
},
{ timestamps: true });

CoffeeMachineSchema.index({product_type: 1, water_line_compatible: 1, created_a:1 });
const CoffeeMachine = mongoose.model('CoffeeMachine',CoffeeMachineSchema)

module.exports = CoffeeMachine
