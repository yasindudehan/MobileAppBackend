const Mail = require("../models/mail.model.js");
const mongoose = require("mongoose");
exports.submit = (req, res) => {
  const mail = new Mail({

    _id: new mongoose.Types.ObjectId(),

    senderName:req.body.senderName,
    receiverName: req.body.receiverName,
    mailContent: req.body.mailContent
    
 });
  route
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: " Send an Email"
  });
};

