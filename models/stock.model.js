const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
mongoose.set("useCreateIndex", true);
const Schema = mongoose.Schema;
const StockSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    repname: { type: String },
    distname: { type: String },
    dateandtime: { type: Date, default: Date.now },

    /* timestamps:{
      type: Date,
      required: true,
    },*/

    timestamps: {
      type: Date
    },

    teapouch20: {
      name: { type: String, default: "tea pouch" },
      weight: { type: String, default: "20g" },
      qut: { type: Number, default: "" },
      price: { type: Number, default: "" },
      rate: { type: Number, required: true, default: 20 }
    },
    teapouch50: {
      name: { type: String, default: "tea pouch" },
      weight: { type: String, default: "50g" },
      qut: { type: Number, default: "" },
      price: { type: Number, default: "" },
      rate: { type: Number, required: true, default: 50 }
    },
    teapouch100: {
      name: { type: String, default: "Tea pouch" },
      weight: { type: String, default: "100g" },
      qut: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
      rate: { type: Number, required: true, default: 100 }
    },
    teapouch200: {
      name: { type: String, required: true, default: "Tea pouch" },
      weight: { type: String, default: "200g" },
      qut: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
      rate: { type: Number, required: true, default: 200 }
    },
    teapouch400: {
      name: { type: String, default: "Tea pouch" },
      weight: { type: String, default: "400g" },
      qut: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
      rate: { type: Number, required: true, default: 400 }
    },
    teapouch1kg1: {
      name: {
        type: String,

        default: " Tea pouch Premium Quality"
      },
      weight: { type: String, default: "1kg" },
      qut: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
      rate: { type: Number, required: true, default: 800 }
    },
    teapouch1kg2: {
      name: {
        type: String,

        default: "Tea pouch Export Quality"
      },
      weight: { type: String, required: true, default: "1kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 800 }
    },
    teapouch1kg3: {
      name: { type: String, required: true, default: "Tea pouch BOPF Quality" },
      weight: { type: String, required: true, default: "1kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 800 }
    },
    teapouch1kg4: {
      name: {
        type: String,
        required: true,
        default: "Tea pouch Catering Pack"
      },
      weight: { type: String, required: true, default: "1kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 800 }
    },
    teabag1: {
      name: { type: String, required: true, default: "Teabag Packet Type" },
      weight: { type: String, required: true, default: "25pack" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 300 }
    },
    teabag2: {
      name: { type: String, required: true, default: "Tea bag Packet Type" },
      weight: { type: String, required: true, default: "50pack" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 600 }
    },
    teabag3: {
      name: { type: String, required: true, default: "Tea bag Packet Type" },
      weight: { type: String, required: true, default: "100pack" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 900 }
    },
    teasachet1: {
      name: {
        type: String,
        required: true,
        default: "Tea sachet Catering Type"
      },
      weight: { type: String, required: true, default: "250Bag" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 400 }
    },
    teasachet2: {
      name: {
        type: String,
        required: true,
        default: "Tea sachet Catering Type"
      },
      weight: { type: String, required: true, default: "500Bag" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 800 }
    },
    teasachet3: {
      name: {
        type: String,
        required: true,
        default: "Tea sachet Catering Type"
      },
      weight: { type: String, required: true, default: "1000Bag" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 1200 }
    },
    teabulk1: {
      name: {
        type: String,
        required: true,
        default: "Tea bulk Premium Quality"
      },
      weight: { type: String, required: true, default: "5kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2500 }
    },
    teabulk2: {
      name: {
        type: String,
        required: true,
        default: " Tea bulk Export Quality"
      },
      weight: { type: String, required: true, default: "5kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2500 }
    },
    teabulk3: {
      name: {
        type: String,
        required: true,
        default: " Tea bulk Catering Quality"
      },
      weight: { type: String, required: true, default: "5kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2500 }
    },
    teabulk4: {
      name: {
        type: String,
        required: true,
        default: "Tea bulk Export Quality"
      },
      weight: { type: String, required: true, default: "25kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2500 }
    },
    teabulk5: {
      name: { type: String, required: true, default: "Tea bulk Tea Box" },
      weight: { type: String, required: true, default: "25kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2500 }
    },
    teabulk6: {
      name: { type: String, required: true, default: " Tea bulk Bag Type" },
      weight: { type: String, required: true, default: "50kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2500 }
    },
    teabottle: {
      name: { type: String, required: true, default: "Tea bottle" },
      weight: { type: String, required: true, default: "250g" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 400 }
    },
    teabasket1: {
      name: { type: String, required: true, default: "Tea Basket PF-l" },
      weight: { type: String, required: true, default: "4.5kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2100 }
    },
    teabasket2: {
      name: { type: String, required: true, default: "Tea Basket BP-l" },
      weight: { type: String, required: true, default: "4kg" },
      qut: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      rate: { type: Number, required: true, default: 2000 }
    },

    totalValue: {
      type: Number,

      default: ""
    }
  },
  {
    timestamps: true
  }
);
StockSchema.plugin(AutoIncrement, { inc_field: "stockno ", unique: true });
module.exports = mongoose.model("stocks", StockSchema);
