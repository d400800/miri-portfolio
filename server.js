var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

//View Engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('img'));
app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/holidays', index);

app.listen(3000, function(){
    console.log('Server started on port 3000...');
});
