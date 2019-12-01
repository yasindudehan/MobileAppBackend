const Login = require("../models/login.model.js");
exports.submit = (req,res) => {

    
    const login = new Login({

        _id: new mongoose.Types.ObjectId(),

        Username: req.body.Username,
        Password:  req.body.Password,
        
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
