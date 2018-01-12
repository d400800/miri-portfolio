var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

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
	adminRouter.route('/getStatistics')
		.get(function (req, res) {
			var url = 'mongodb://localhost:27017/visitors';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('statistics');
				collection.find({}).toArray(function(err, results) {
					if(err)
						res.status(500).send(err);
					else {
						res.send(results);
					}
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
	adminRouter.route('/postProject')
		.post(function(req, res) {
			var url = 'mongodb://localhost:27017/miri_portfolio';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('projects');
				collection.insert(req.body, function (err, results) {
					if (err)
						res.status(500).send(err);
					else
				    	res.send(results);
				});
				db.close();
			});
		})
	adminRouter.route('/:projectId')
		.get(function(req, res) {
			var id = new objectId(req.params.projectId);
			var url = 'mongodb://localhost:27017/miri_portfolio';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('projects');
				collection.findOne({"_id": id}, function (err, results) {
					if (err)
						res.status(500).send(err);
					else
				    	res.send(results);
				});
				db.close();
			});
		})
		.delete(function(req, res) {
			var id = new objectId(req.params.projectId);
			var url = 'mongodb://localhost:27017/miri_portfolio';
			mongodb.connect(url, function(err, db) {
				var collection = db.collection('projects');
				collection.remove({"_id": id}, function (err, results) {
					if (err)
						res.status(500).send(err);
					else
				    	res.send(results);
				});
				db.close();
			});
		})

	return adminRouter;
};

module.exports = router; 