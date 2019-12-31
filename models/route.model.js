const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const routeSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,

    areaName: {
        type: String,
      required: true

    },

    routeName: {
      type: String,
      required: true
    },
    customerName: { 
      type: String,
      required: true
    }
    

 } );
module.exports = mongoose.model("Route", routeSchema);
