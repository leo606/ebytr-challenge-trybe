const express = require('express');

const router = express.Router({ mergeParams: true });

// localhost:3001/login/
router.post('/', require('./create'));

module.exports = router;