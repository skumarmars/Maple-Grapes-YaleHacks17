var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', (req, res) => {
  const peter = {
    name: 'peter',
    age: 20
  }
  res.json(peter)
})

module.exports = router;
