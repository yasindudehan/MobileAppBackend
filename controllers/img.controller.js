const Order = require("../models/order.model.js");
const mongoose = require("mongoose");
exports.submit = (req, res) => {
  const order = new Order({
   
  });
  order
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: " post your data"
  });
};
