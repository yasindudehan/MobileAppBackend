 //const Order = require("../models/image.model.js");
const mongoose = require("mongoose");
const fs = require('fs')

exports.submit = (req, res) => {
  const binaryData = new Buffer(req.body.image, 'base64');
  if (!fs.existsSync(`./uploads/${req.body.repName}`)){
    fs.mkdirSync(`./uploads/${req.body.repName}`);
}
  fs.writeFile(`./uploads/${req.body.repName}/${req.body.imageName}.${req.body.imageExt}`, binaryData, err => {
    if(err) {
      console.log(err)
      res.status(400).json({
        message: "Couldn't upload"
      })
    } else {
      // Image saved

      res.status(200).json({
        message: "Success"
      })

      /*
      Use GCP bucket
      Upload -> callback -> fetchUrl
      */
    }
  })
};
exports.getimage=(req,res)=>{
  res.sendFile("sign.png",{ root: `uploads/${req.query.repName}` });
  
} 