const mongoose = require("mongoose");
const Login = require("../models/login.model.js");

exports.submit3 = (req,res) => {

    
    const login = new Login({
      

        Username: req.body.Username,
        Password: req.body.Password
        
        
    });
    login
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: "post your data"
  });
};





         
