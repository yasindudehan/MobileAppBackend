const Product = require("../models/products.model");
const mongoose = require("mongoose");
exports.getproduct=(req,res)=>{
        Product.find()

         .then(products => {
      res.status(200).json(products);
    })

    .catch(err => {
      res.status(400).json(err);
    });

};
exports.submit = (req, res) => {
  const  product= new Product({
    

 

    teapouch20: req.body.teapouch20,
    teapouch50: req.body.teapouch50,
    teapouch100: req.body.teapouch100,
    teapouch200: req.body.teapouch200,
    teapouch400: req.body.teapouch400,
    teapouch1kg1: req.body.teapouch1kg1,
    teapouch1kg2: req.body.teapouch1kg2,
    teapouch1kg3: req.body.teapouch1kg3,
    teapouch1kg4: req.body.teapouch1kg4,
    teabag1: req.body.teabag1,
    teabag2: req.body.teabag2,
    teabag3: req.body.teabag3,
    teasachet1: req.body.teasachet1,
    teasachet2: req.body.teasachet2,
    teasachet3: req.body.teasachet3,
    teabulk1: req.body.teabulk1,
    teabulk2: req.body.teabulk2,
    teabulk3: req.body.teabulk3,
    teabulk4: req.body.teabulk4,
    teabulk5: req.body.teabulk5,
    teabulk6: req.body.teabulk6,
    teabottle: req.body.teabottle,
    teabasket1: req.body.teabasket1,
    teabasket2: req.body.teabasket2,
  
  });
  product
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: " Does not post your data"
  });
};
