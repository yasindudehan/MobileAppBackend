const Stock = require("../models/stock.model.js");
const StockBalance = require("../models/stockBalance.model");
const mongoose = require("mongoose");

exports.submit = (req, res) => {
  const stock = new Stock({
    _id: new mongoose.Types.ObjectId(),

    repname: req.body.repname,
    distname: req.body.distname,
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
    totalValue: req.body.totalValue
  });
  stock
    .save()
    .then(result => {
      //console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: " post your data"
  });
};
exports.getstocks = (req, res) => {
  const distName = req.body.distname;
  const repName = req.body.repname;

  Stock.find(
    { distname: distName, repname: repName },
    {
      totalValue: 0,
      _id: 0,
      dateandtime: 0,
      distname: 0,
      repname: 0,
      createdAt: 0,
      updatedAt: 0,
      stockno: 0,
      __v: 0,
      order: 0
    }
  ).then(stock => {
    res.status(200).json(stock);
  });
};
exports.submitstockbalance = (req, res) => {
  const stockbalance = new StockBalance({
    _id: new mongoose.Types.ObjectId(),

    repname: req.body.repname,
    distname: req.body.distname,
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
    totalValue: req.body.totalValue
  });
  stockbalance
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.status(200).json({
    message: "  post your data"
  });
};
exports.getstock = (req, res) => {
  const distName = req.body.distname;
  const repName = req.body.repname;
  StockBalance.find(
    { distname: distName, repname: repName },
    {
      totalValue: 0,
      _id: 0,
      dateandtime: 0,
      distname: 0,
      repname: 0,
      createdAt: 0,
      updatedAt: 0,
      stockblanceno: 0,
      __v: 0,
      order: 0
    }
  ).then(stock => {
    res.status(200).json(stock);
  });
};
exports.updatestock = (req, res) => {
  StockBalance.findOne({ _id: req.params.id }).then(stockbalance => {
    if (stockbalance) {
      (stockbalance.teapouch20.qut =
        stockbalance.teapouch20.qut - req.body.teapouch20.qut),
        (stockbalance.teapouch50.qut =
          stockbalance.teapouch50.qut - req.body.teapouch50.qut),
        (stockbalance.teapouch100.qut =
          stockbalance.teapouch100.qut - req.body.teapouch100.qut),
        (stockbalance.teapouch200.qut =
          stockbalance.teapouch200.qut - req.body.teapouch200.qut),
        (stockbalance.teapouch400.qut =
          stockbalance.teapouch400.qut - req.body.teapouch400.qut),
        (stockbalance.teapouch1kg1.qut =
          stockbalance.teapouch1kg1.qut - req.body.teapouch1kg1.qut),
        (stockbalance.teapouch1kg2.qut =
          stockbalance.teapouch1kg2.qut - req.body.teapouch1kg2.qut),
        (stockbalance.teapouch1kg3.qut =
          stockbalance.teapouch1kg3.qut - req.body.teapouch1kg3.qut),
        (stockbalance.teapouch1kg4.qut =
          stockbalance.teapouch1kg4.qut - req.body.teapouch1kg4.qut),
        (stockbalance.teabag1.qut =
          stockbalance.teabag1.qut - req.body.teabag1.qut),
        (stockbalance.teabag2.qut =
          stockbalance.teabag2.qut - req.body.teabag2.qut),
        (stockbalance.teabag3.qut =
          stockbalance.teabag3.qut - req.body.teabag3.qut),
        (stockbalance.teasachet1.qut =
          stockbalance.teasachet1.qut - req.body.teasachet1.qut),
        (stockbalance.teasachet2.qut =
          stockbalance.teasachet2.qut - req.body.teasachet2.qut),
        (stockbalance.teasachet3.qut =
          stockbalance.teasachet3.qut - req.body.teasachet3.qut),
        (stockbalance.teabulk1.qut =
          stockbalance.teabulk1.qut - req.body.teabulk1.qut),
        (stockbalance.teabulk2.qut =
          stockbalance.teabulk2.qut - req.body.teabulk2.qut),
        (stockbalance.teabulk3.qut =
          stockbalance.teabulk3.qut - req.body.teabulk3.qut),
        (stockbalance.teabulk4.qut =
          stockbalance.teabulk4.qut - req.body.teabulk4.qut),
        (stockbalance.teabulk5.qut =
          stockbalance.teabulk5.qut - req.body.teabulk5.qut),
        (stockbalance.teabulk6.qut =
          stockbalance.teabulk6.qut - req.body.teabulk6.qut),
        (stockbalance.teabottle.qut =
          stockbalance.teabottle.qut - req.body.teabottle.qut),
        (stockbalance.teabasket1.qut =
          stockbalance.teabasket1.qut - req.body.teabasket1.qut),
        (stockbalance.teabasket2.qut =
          stockbalance.teabasket2.qut - req.body.teabasket2.qut),
        stockbalance
          .save()
          .then(stockbalance => {
            res.json("update");
          })
          .catch(err => {
            console.log(err);
            res.status(400).send("Upadate not possible");
          });
    }
  });
};
/* StockBalance.findByIdAndUpdate(req.param.id, {
    teapouch20: req.body.teapouch20,
    $inc: { qut: -10 },
    teapouch50: req.body.teapouch50,
    $inc: { qut: -req.body.qut },
    teapouch100: req.body.teapouch100,
    $inc: { qut: -req.body.qut },
    teapouch200: req.body.teapouch200,
    $inc: { qut: -req.body.qut },
    teapouch400: req.body.teapouch400,
    $inc: { qut: -req.body.qut },
    teapouch1kg1: req.body.teapouch1kg1,
    $inc: { qut: -req.body.qut },
    teapouch1kg2: req.body.teapouch1kg2,
    $inc: { qut: -req.body.qut },
    teapouch1kg3: req.body.teapouch1kg3,
    $inc: { qut: -req.body.qut },
    teapouch1kg4: req.body.teapouch1kg4,
    $inc: { qut: -req.body.qut },
    teabag1: req.body.teabag1,
    $inc: { qut: -req.body.qut },
    teabag2: req.body.teabag2,
    $inc: { qut: -req.body.qut },
    teabag3: req.body.teabag3,
    $inc: { qut: -req.body.qut },
    teasachet1: req.body.teasachet1,
    $inc: { qut: -req.body.qut },
    teasachet2: req.body.teasachet2,
    $inc: { qut: -req.body.qut },
    teasachet3: req.body.teasachet3,
    $inc: { qut: -req.body.qut },
    teabulk1: req.body.teabulk1,
    $inc: { qut: -req.body.qut },
    teabulk2: req.body.teabulk2,
    $inc: { qut: -req.body.qut },
    teabulk3: req.body.teabulk3,
    $inc: { qut: -req.body.qut },
    teabulk4: req.body.teabulk4,
    $inc: { qut: -req.body.qut },
    teabulk5: req.body.teabulk5,
    $inc: { qut: -req.body.qut },
    teabulk6: req.body.teabulk6,
    $inc: { qut: -req.body.qut },
    teabottle: req.body.teabottle,
    $inc: { qut: -req.body.qut },
    teabasket1: req.body.teabasket1,
    $inc: { qut: -req.body.qut },
    teabasket2: req.body.teabasket2,
    $inc: { qut: -req.body.qut }
  })

    .then(stockblance => {
      if (stockblance) {
        res.status(200).send("successfuly updated");
      } else {
        res.status(400).send("cannot find customer with given id");
      }
    })
    .catch(err => {
      res.status(400).json(err);
    });*/
