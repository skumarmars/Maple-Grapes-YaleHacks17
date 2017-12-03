var express = require('express');
var router = express.Router();
const techml = require('../../data/technology/ml');
const techai = require('../../data/technology/ai');
router.get('/tech', (req, res) => {
    const data = {
        techml,
        techai
    }
    res.json(data);
})
router
module.exports = router;
