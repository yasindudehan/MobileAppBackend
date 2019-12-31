 const Route = require("../models/route.model.js");
const mongoose = require("mongoose");
exports.submit = (req, res) => {
  const route = new Route({

    _id: new mongoose.Types.ObjectId(),

    areaName:req.body.areaName,
    routeName: req.body.routeName,
    customerName: req.body.customerName
    
 });
  route
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: " post your data"
  });
};

