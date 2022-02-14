const express = require('express');

const router = express.Router();

// localhost:3001/
router.use('/login', require('./login/router'));

module.exports = router;