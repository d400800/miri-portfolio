var express = require('express');
var path = require('path');

var config = require(path.join(__dirname, './config'));
var projects = require(path.join(__dirname, './src/stubs/projects'));

var port = config.port;

var app = express();

var projectsRouter = require(path.join(__dirname, './src/routes/projectsRouter'))();
var adminRouter = require(path.join(__dirname, './src/routes/adminRouter'))();

app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './dist')));
app.use(express.static(path.join(__dirname, './src/staticViews')));
app.use('/project', projectsRouter);
app.use('/Admin', adminRouter);

app.get('/', function(req, res) {
	res.render("index", {projects: projects});
});

app.get('/dashboard', function(req, res) {
	res.render("dashboard", {});
});

app.listen(port, function(err) {
	console.log("Starting on port "+port);
});