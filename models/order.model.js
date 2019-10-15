const mongoose= require('mongoose');
const OrderSchema = mongoose.Schema({

    invoiceno: {
        type: String,
        required: true
      }, 
    repname: {
      type: String,
      required: true
    },   
    customername: {
      type: String,
      required: true
    }, 
    dateandtime: {
      type: Date,
      required: true
    },  
    location: {
        type: [Number], 
        required: true
    },
    product: {
      "TEA RANGE":{
        "Tea Pouch 20 g":{
            "Weight":"20 g",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Pouch 50 g":{
            "Weight":"50 g",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Pouch 100 g":{
            "Weight":"100 g",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Pouch 200 g":{
            "Weight":"200 g",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Pouch 400 g":{
            "Weight":"400 g",
            "Qty":0,
            "Rate":0,
            "Value":0
        }
      },
      "01 kg POUCH":{
        "Tea Pouch Premium Quality":{
            "Weight":"1 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Pouch Export Quality":{
            "Weight":"1 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Pouch BOPF Quality":{
            "Weight":"1 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Pouch Catering Pack":{
            "Weight":"1 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
      },
      "TEA BAG":{
        "Tea Bag 25 Pack":{
            "Weight":"25 Pack",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Bag 50 Pack":{
            "Weight":"50 Pack",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Bag 100 Pack":{
            "Weight":"100 Pack",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
      },
      "TEA SACHET":{
        "Tea Sachet 250 Bag":{
            "Weight":"250 Bag",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Sachet 250 Bag":{
            "Weight":"250 Bag",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Sachet 500 Bag":{
            "Weight":"500 Bag",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Sachet 1000 Bag":{
            "Weight":"1000 Bag",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
      },
      "TEA BULK":{
        "Tea Bulk Premium Quality 5 kg":{
            "Weight":"5 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Bulk Export Quality 5 kg":{
            "Weight":"5 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Bulk Catering Quality 5 kg":{
            "Weight":"5 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Bulk Export Quality 25 kg":{
            "Weight":"25 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Bulk Tea Box 25 kg":{
            "Weight":"25 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "Tea Bulk Bag Type 50 kg":{
            "Weight":"5 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
      },
      "TEA BOTTLE":{
        "Tea Bottle":{
            "Weight":"250 g",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
      },
      "TEA BASKET RANGE":{
        "PF-1":{
            "Weight":"4.5 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
        "BP-1":{
            "Weight":"4.0 kg",
            "Qty":0,
            "Rate":0,
            "Value":0
        },
      }
    },    
  },{
    timestamps: true
  });

module.exports = Order = mongoose.model('orders',OrderSchema);