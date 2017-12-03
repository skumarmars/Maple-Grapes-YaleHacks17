var express = require('express');
var router = express.Router();
const getIndustryArray = require('../controllers/getIndustryArray');
const respondData = require('..//controllers/chart');
router.post('/industry', (req, res) => {
  const industryQuery = req.body.industry; 
  var IndustryArray = getIndustryArray(industryQuery);
  res.json(IndustryArray)
})

router.get('/api/test', (req, res) => {
  console.log(respondData())
  const data = respondData();
  res.json(data);
})
module.exports = router;
