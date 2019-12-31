const SalesRep = require('../models/cust.model')
const mongoose = require('mongoose')

exports.getAll = (req, res) => {
    SalesRep.find({}).then(docs => res.status(200).json({
        message: docs
    }));
}