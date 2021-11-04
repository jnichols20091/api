const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    res.send('product created succesfully')
});

module.exports = router;