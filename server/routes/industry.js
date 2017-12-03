var express = require('express');
var router = express.Router();
const techml = require('../../data/technology/ml');

router.get('/tech/ml', (req, res) => {
    res.json(techml);
})
module.exports = router;
