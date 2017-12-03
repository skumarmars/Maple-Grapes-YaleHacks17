var express = require('express');
var router = express.Router();
const techml = require('../../data/technology/ml');
const techai = require('../../data/technology/ai');
const techar = require('../../data/technology/ar');
const techbc = require('../../data/technology/bc');
router.get('/tech', (req, res) => {
    const data = {
        techml,
        techai,
        techar,
        techbc
    }
    res.json(data);
})
router
module.exports = router;
