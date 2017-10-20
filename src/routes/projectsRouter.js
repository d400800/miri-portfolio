var express = require('express');
var projectsRouter = express.Router();
var projectController = require('../controllers/projectController')();

var router = function() {
	projectsRouter.route('/:id')
		.get(projectController.getProject);
	return projectsRouter;
}

module.exports = router; 