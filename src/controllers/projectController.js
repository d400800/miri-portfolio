var projects = require('../stubs/projects');

var getNextProject = function(id) {
	var nextProjectId;
	nextProjectId = (parseInt(id) == projects.length-1) ? 0 : parseInt(id)+1;
	return nextProjectId;
}

var projectController = function() {
	
	var getProject = function(req, res) {
		var id = req.params.id;
		var nextProjectId = getNextProject(id);
		res.render('project', {
			project: projects[id],
			nextProject: projects[nextProjectId],
			nextProjectId: nextProjectId
		});
	}

	return {
		getProject: getProject
	}
}

module.exports = projectController; 