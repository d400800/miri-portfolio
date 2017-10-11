var express = require('express');
var projectsRouter = express.Router();
var projects = require('../projects');

projectsRouter.route('/:id')
	.get(function (req, res) {
		var id = req.params.id;
		res.render('project', {
			project:projects[id]
		});
	});

module.exports = projectsRouter;