const Customer = require("../models/customer.model");
const mongoose = require("mongoose");

exports.view = (req, res) => {
  Customer.find({}, { _id: 0, area: 1 })
    .then(customers => {
      res.status(200).json(customers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
exports.select = (req, res) => {
  var area = req.body.area;

  Customer.find({ area: area }, { _id: 0, shop: 1 })

    .then(customers => {
      res.status(200).json(customers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
