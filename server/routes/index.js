var express = require('express');
var router = express.Router();
const respondData = require('../controllers/chart');
const cheerio = require('cheerio');
const axios = require('axios');
const google = require('google');

router.post('/industry', (req, res) => {
  const industryQuery = req.body.industry; 
  const fieldQuery = req.body.field;
  var completeField;
  switch(fieldQuery) {
    case "ml":
      completeField = "Machine Learning";
      break;
    case "ai":
      completeField = "Artificial Intelligence";
      break;
    case "ar":
      completeField = "Augmented Reality";
      break;
    case "bc":
      completeField = "Blockchain";
      break;
    case "iot":
      completeField = "Internet of Things";
      break;
    case "bio":
      completeField = "Biometrics";
      break;
  }
    const query = `${industryQuery} ${completeField} news`;
    google(query, (err, data) => {
        const result = {
          title: data.links[0].title,
          url: ""
        }
        for (var i = 0; i < data.links.length; i ++) {
          var link = data.links[i];
          if (link.href !== null) {
            result.url = link.href
            result.title = link.title
          }
        }
        res.json(result)
    })
})

router.get('/api/test', (req, res) => {
  console.log(respondData())
  const data = respondData();
  res.json(data);
})
module.exports = router;
