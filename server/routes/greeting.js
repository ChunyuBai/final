const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({greetings: 'hello world'});
});

module.exports = router;