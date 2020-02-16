const express = require("express");
const router = express.Router();
const image = require("../controllers/image.controller.js");

router.post("/submit", image.submit);
router.get("/getimage", image.getimage);


module.exports = router;
 