const Stock = require("../models/stock.model.js");
const mongoose = require("mongoose");

<<<<<<< HEAD
exports.submit = (req,res) => {
=======
exports.stockAdd = (req,res) => {

    
>>>>>>> 6699ef03781a2ffd9cd80b7c39b2e1639d37db2a
    const stock = new Stock({

        _id: new mongoose.Types.ObjectId(),

        stockno: req.body.stockno,
        repname:  req.body.repname,
        distname:req.body.distname,
        dateandtime: req.body.dateandtime,
       // product:req.body.product,
       // imestamps:req.body.imestamps,


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
<<<<<<< HEAD
  });
  stock.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: " Does not post your data"
  });  
=======
        name: req.body.name,
        weight: req.body.weight,
        qut: req.body.qut,
        price: req.body.price,


 });
  
    stock
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            return res.status(400).json(err);
        );
//   res.status(200).json({
//     message: "post your data"
//   });  





>>>>>>> 6699ef03781a2ffd9cd80b7c39b2e1639d37db2a
};
