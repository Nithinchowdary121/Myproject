var express = require('express');
var router = express.Router();
var ctrlMain=require('../controllers/main');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '23eg106a31' });
});

module.exports = router;
