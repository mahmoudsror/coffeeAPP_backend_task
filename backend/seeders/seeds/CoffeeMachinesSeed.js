module.exports= [
    {
        'model': 'CoffeeMachine',
        'documents': [
            {
                'sku':"CM001",
                'machineModel':"base model",
                'product_type': 'COFFEE_MACHINE_SMALL',
                'water_line_compatible': false
            },
            {
                'sku':"CM002",
                'machineModel':"permium model",
                'product_type': 'COFFEE_MACHINE_SMALL',
                'water_line_compatible': false
            },
            {
                'sku':"CM003",
                'machineModel':"deluxe model",
                'product_type': 'COFFEE_MACHINE_SMALL',
                'water_line_compatible': true
            },

            // large coffee machines
            {
                'sku':"CM101",
                'machineModel':"base model",
                'product_type': 'COFFEE_MACHINE_LARGE',
                'water_line_compatible': false
            },
            {
                'sku':"CM102",
                'machineModel':"permium model",
                'product_type': 'COFFEE_MACHINE_LARGE',
                'water_line_compatible': true
            },
            {
                'sku':"CM103",
                'machineModel':"deluxe model",
                'product_type': 'COFFEE_MACHINE_LARGE',
                'water_line_compatible': true
            },

            // espresso machines 
            {
                'sku':"EM001",
                'machineModel':"base model",
                'product_type': 'ESPRESSO_MACHINE',
                'water_line_compatible': false
            },
            {
                'sku':"EM002",
                'machineModel':"permium model",
                'product_type': 'ESPRESSO_MACHINE',
                'water_line_compatible': false
            },
            {
                'sku':"EM003",
                'machineModel':"deluxe model",
                'product_type': 'ESPRESSO_MACHINE',
                'water_line_compatible': true
            },
        ]
    }
];