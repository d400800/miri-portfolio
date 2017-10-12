var express = require('express');
var projectsRouter = express.Router();
var projects = require('../projects');

function getNextProject(id) {
	var nextProjectId = 0;
	var currentId = parseInt(id);
	if (currentId == projects.length-1) {
		nextProjectId = 0;
	}
	else {
		nextProjectId = currentId+1;
	}
	return nextProjectId;

}

var router = function() {
	projectsRouter.route('/:id')
		.get(function (req, res) {
			var id = req.params.id;
			var nextProjectId = getNextProject(id);
			res.render('project', {
				project: projects[id],
				nextProject: projects[nextProjectId],
				nextProjectId: nextProjectId
			});
		});
	return projectsRouter;
}

module.exports = router; 