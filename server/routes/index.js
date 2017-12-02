var express = require('express');
var router = express.Router();
const getGooglePatentScores = require('../controllers/getQueryScore');


/* GET home page. */
router.get('/', function(req, res, next) {
  getGooglePatentScores()
});

router.get('/hello', (req, res) => {
  const peter = {
    name: 'peter',
    age: 20
  }
  getQueryScore();
  res.json(peter)
})
router.post('/api/fname', (req, res) => {
  const data = req.body;
  console.log(data.query);
  res.json('The data is posted');
})
module.exports = router;
