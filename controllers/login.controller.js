const User = require("../models/user.model.js");



exports.signIn = (req, res) => {
  return User.findOne({
    Username: req.body.Username
  }).exec().then(user => {
    console.log(user);

   

    return user.isValidPassword(req.body.Password).then(isValid => {
      return res.status(200).json({
        message: "Login successful",
        success: isValid
      });
    });
  }).catch(err => console.log(err));
};
