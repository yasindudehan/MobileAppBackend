const User = require("../models/user.model.js");

exports.signUp = (req, res) => {
  return new User({
    Username: req.body.Username,
    Password: req.body.Password
  }).save().then(result => {
    console.log(result);
    return res.status(200).json({
      message: "Login successfull"
    });
  }).catch(err => console.log(err));
};

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
