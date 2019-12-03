const bcrypt = require("bcryptjs");
const Login = require("../models/login.model.js");

exports.submit = (req,res) => {

    
    const login = new Login({

        

        Username: req.body.Username,
        
        
    });
/*	bcrypt.genSalt(10,(err,salt) => {
         bcrypt.hash(login .password,salt,(err,hash) => {
            if(err)
                throw err;
            login.password = hash;
			login
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: "post your data"
  });  
*/



         }
