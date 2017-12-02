var express = require('express');
var router = express.Router();
const getIndustryArray = require('../controllers/getIndustryRelevant');

router.post('/industry', (req, res) => {
  var IndustryArray = getIndustryArray(req);
})

module.exports = router;
