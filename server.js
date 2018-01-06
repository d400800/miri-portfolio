var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb').MongoClient;

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
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/project', projectsRouter);
app.use('/api', adminRouter);

app.get('/', function(req, res) {
	var ip = (req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress).split(",")[0];

	var url = 'mongodb://localhost:27017/visitors';
	mongodb.connect(url, function(err, db) {
		var collection = db.collection('statistics');
		collection.insertOne({"ip": ip, "date": new Date()}, function (err, results) {
			if (err) throw err;
		    db.close();
		});
	});

	res.render("index", {projects: projects});
});

app.get('/dashboard', function(req, res) {
	res.render("dashboard", {});
});

app.listen(port, function(err) {
	console.log("Starting on port "+port);
});