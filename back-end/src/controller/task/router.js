const express = require("express");

const router = express.Router({ mergeParams: true });

// localhost:3001/task/
router.post("/", require("./create"));
router.put("/:id", require("./updateStatus"));
router.delete("/:id", require("./remove"));

module.exports = router;
