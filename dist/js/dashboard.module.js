var app = angular.module('projectsDashboard',[]);

app.controller('dashboardAppController',
	['$scope', 'projectFactory', 'projectsService',
	function($scope, Project, projectsService) {
	
 	$scope.title = 'List of projects';
 	$scope.projects = [];

 	projectsService.getAllProjects().then(function(response) {
 		response.data.forEach(function(data) {
 			var project = new Project(data);
 			$scope.projects.push(project);
 		})
 		console.log($scope.projects);
 	});

}]);

var projectFactory = function () {
	var Project = function(data) {
		for(var k in data) {
			this[k] = data[k];
		}
		this.isEditing = false;
		this.mainImg = '/img/'+this.banner;
	}

	Project.prototype.setToEdit = function() {
		this.isEditing = !this.isEditing;
	}

	return Project;
}

app.factory('projectFactory', projectFactory);