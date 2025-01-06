const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json("List of Users would be available soon");
});

module.exports = router;