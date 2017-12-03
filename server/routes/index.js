var express = require('express');
var router = express.Router();
const getIndustryArray = require('../controllers/getIndustryArray');

router.post('/industry', (req, res) => {
  const industryQuery = req.body.industry; 
  var IndustryArray = getIndustryArray(industryQuery);
  res.json(IndustryArray)
})

module.exports = router;
