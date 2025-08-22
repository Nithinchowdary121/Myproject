var express = require('express');
var router = express.Router();
var ctrlMain=require('../controllers/main');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Citizen Empowerment' });
});

module.exports = router;
