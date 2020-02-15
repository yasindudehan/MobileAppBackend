const Rep = require("../models/rep.model");
const Dist = require("../models/dist.model");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
/* 
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
User.findOne({username}).then(user=>{
  //find if username exists
  if(!user){
      return res.status(404).json({incorrect: "Incorrect Username or password"});
  } */

exports.signIn = (req, res) => {
  const username = req.body.username;

  const password = req.body.password;
  Rep.findOne({ userName: username, status: "active" })
    .then(user => {
      if (!user) {
        Dist.findOne({ userName: username, status: "active" })
          .then(dist => {
            if (!dist) {
              return res
                .status(404)
                .json({ incorrect: "Incorrect Username or password" });
            } else {
              bcrypt
                .compare(password, dist.password)
                .then(isMatch => {
                  if (isMatch) {
                    return res.status(200).json({ repordist: "1" });
                  } else {
                    return res
                      .status(400)
                      .json({ incorrect: "Incorrect Username or password" });
                  }
                })
                .catch(err => {
                  console.error("error found3!!!" + err);
                });
            }
          })
          .catch(err => {
            console.error("error found4!!!" + err);
          });
      } else {
        bcrypt
          .compare(password, user.password)
          .then(isMatch => {
            if (isMatch) {
              return res.status(200).json({ repordist: "0" });
            } else {
              return res
                .status(400)
                .json({ incorrect: "Incorrect Username or password" });
            }
          })
          .catch(err => {
            console.error("error found2!!!" + err);
          });
      }
    })
    .catch(err => {
      console.error("error found1!!!" + err);
    });
};
exports.repInfo = (req, res) => {
  const username = req.body.userName;
  Rep.find({ userName: username }, { _id: 0, distributor: 1, area: 1 })
    .then(rep => {
      res.status(201).json(rep);
    })
    .catch(err => {
      res.status(400).json(err);
    });
};
