var express = require('express');
var router = express.Router();

/* GET dynamic page. */
router.get('/', function(req, res, next) {
  res.render('dyna', { passeddata: 'Sample Data' });
});

module.exports = router; 