const Distributor = require('../models/dist.model')
const mongoose = require('mongoose')

exports.getAll = (req, res) => {
    Distributor.find({}).then(docs => res.status(200).json({
        message: docs
    }));
}