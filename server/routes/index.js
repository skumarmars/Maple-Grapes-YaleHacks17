var express = require('express');
var router = express.Router();
const getIndustryArray = require('../controllers/getIndustryArray');

router.post('/industry', (req, res) => {
  //const data = req.body.industry;
  
  var IndustryArray = getIndustryArray();
})

module.exports = router;
