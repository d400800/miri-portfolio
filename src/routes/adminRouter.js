var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function () {
	adminRouter.route('/addProjects')
		.get(function (req, res) {
			var url = 'mongodb://localhost:27017/miri_portfolio';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('projects');
				collection.insertMany(projects, function(err, results) {
					res.send(results);
					db.close();
				});
			});
		});
	adminRouter.route('/getProjects')
		.get(function (req, res) {
			var url = 'mongodb://localhost:27017/miri_portfolio';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('projects');
				collection.find({}).toArray(function(err, results) {
					if(err)
						res.status(500).send(err);
					else {
						res.send(results);
					}
				});
				db.close();
			});
		})

	return adminRouter;
};

module.exports = router; 