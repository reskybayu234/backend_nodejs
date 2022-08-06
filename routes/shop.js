const express = require('express');
const router = express.Router();


router.get("/",(req,res,next) => {
  // console.log("in another middleware");
  res.sendFile("../views/shop.html");
})

module.exports = router