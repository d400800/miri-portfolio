var express = require('express');

var config = require('./config');
var port = config.port;

var app = express();
var projectsRouter = require('./src/routes/projectsRouter')();
var adminRouter = require('./src/routes/adminRouter')();

app.use(express.static('dist'));
app.set('views', './src/views')
app.set('view engine', 'ejs');

app.use('/project', projectsRouter);
app.use('/Admin', adminRouter);

app.get('/', function(req, res) {
	res.render("index");
})

app.listen(port, function(err) {
	console.log("Starting on port "+port);
});