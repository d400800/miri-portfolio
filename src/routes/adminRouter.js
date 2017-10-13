var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var projects = require('../stubs/projects');

var router = function () {
	adminRouter.route('/addProject')
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

	return adminRouter;
};

module.exports = router; 