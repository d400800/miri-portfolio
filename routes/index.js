var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('index.html');
});

router.get('/holidays', function(req, res, next){
    res.render('holidays.html');
});

module.exports = router;