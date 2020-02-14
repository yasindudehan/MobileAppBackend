const Customer = require("../models/customer.model");
const mongoose = require("mongoose");
var route = "";
exports.view = (req, res) => {
  Customer.find({ status: "active" }, { _id: 0, route: 1 })

    .then(customers => {
      res.status(200).json(customers);
    })

    .catch(err => {
      res.status(400).json(err);
    });
};
exports.select = (req, res) => {
  route = req.body.route;

  Customer.find({ route: route }, { _id: 0, shop: 1, area: 1 })

    .then(customers => {
      res.status(201).json(customers);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
