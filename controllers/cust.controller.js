const Customer = require('../models/cust.model')
const mongoose = require('mongoose')

exports.getAll = (req, res) => {
    Customer.find({}).then(docs => res.status(200).json({
        message: docs
    }));
}

