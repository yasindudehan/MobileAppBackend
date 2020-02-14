const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const customerSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  route: {
    type: String,
    required: true
  },
  shop: {
    type: String,
    required: true
  }
});
const Customer = mongoose.model("customers", customerSchema);
module.exports = Customer;
